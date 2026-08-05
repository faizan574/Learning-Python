# App Enrichment for Google Sheets

Fills a sheet of apps — given **Publisher Domain** and **Bundle ID** — with
**Developer**, **App Name**, **IAB Category Code** and **Store URL**.

| File | Purpose |
|---|---|
| `Code.gs` | Menu, sheet I/O, the three lookup sources, IAB mapping, store-URL derivation |
| `IabTaxonomy.gs` | All 392 IAB Content Taxonomy 1.0 rows, embedded |
| `test/selftest.js` | Node harness for the offline logic (`node test/selftest.js`) |

## Install

1. Open the spreadsheet → **Extensions ▸ Apps Script**.
2. Create two script files, `Code.gs` and `IabTaxonomy.gs`, and paste in the
   matching contents. Save.
3. Reload the spreadsheet. An **App Enrichment** menu appears.
4. Run **1. Check data source** first and approve the authorization prompt
   (the script needs to call an external URL and edit the sheet).

Then: **2. Set up / repair headers** → **3. Fill empty rows**.

## Menu

| Item | What it does |
|---|---|
| 1. Check data source | Probes each endpoint, prints status + raw body. **Run before any bulk fill.** |
| 2. Set up / repair headers | Adds any of the six columns (plus `Notes`) that are missing |
| 3. Fill empty rows | Fills only rows with blanks/placeholders — safe to re-run |
| 4. Refill selected rows | Re-fetches the highlighted rows, overwriting existing values |
| Clear cache | Drops the 6-hour response cache |

Rows are written as they complete, and a run that hits the Apps Script 6-minute
limit stops cleanly — just run it again to pick up where it left off.

## Data sources

Tried in order (`CONFIG.sources`), first usable hit wins:

| Source | Covers | Needs setup? |
|---|---|---|
| `pixalate` | both | **Yes — URL shapes unverified** |
| `itunes` | every iOS app | No |
| `play` | Android bundles | No |

**The script works out of the box even if Pixalate never answers**, because
Apple's Lookup API and the Play listing cover iOS and Android between them.
**1. Check data source** shows which sources are live for a given ID.

**iTunes** — `https://itunes.apple.com/lookup` is public and needs no key. Numeric
IDs query `?id=`, reverse-DNS bundles query `?bundleId=`. It returns `trackName`,
`artistName`, `primaryGenreName` and `trackViewUrl` — all four columns directly,
authoritatively. Apple tolerates roughly 20 calls/minute, which is why
`msBetweenCalls` defaults to 3000 ms.

**Play** — parsed from the listing HTML, so it is best effort: Google's markup is
generated and changes. The category is taken from the **constant** in the
`/store/apps/category/<X>` URL path rather than from visible text, since those
constants (`MUSIC_AND_AUDIO`, `WEATHER`, `GAME_PUZZLE`, …) stay stable when the
markup does not. `PLAY_CATEGORY_TO_IAB` maps them straight to IAB codes.

**Pixalate** — `ratings.pixalate.com` is a JavaScript single-page app, so
`UrlFetchApp` cannot scrape its HTML: it never executes the JS that draws the
page. The script calls the JSON service behind the site instead. Those URL shapes
could not be reached from the machine that generated this script, so they may
need correcting. To fix: open an app page in Chrome, DevTools ▸ **Network** ▸
**Fetch/XHR**, find the request carrying the app details, and add its URL shape to
`ENDPOINTS`. Only that list should need editing — `pluck_()` finds fields by name
anywhere in the response. If it needs a key, add it in `httpGet_`:

```js
headers: { 'Accept': 'application/json', 'x-api-key': 'YOUR_KEY' }
```

Or just drop `'pixalate'` from `CONFIG.sources`.

## How each column is filled

**Developer / App Name** — read from whichever source answered, trying the usual
field names (`developer`, `publisher`, `artistName`, …; `appTitle`, `title`,
`trackName`, …). The Notes column records which source was used.

**IAB Category Code** — the app's displayed category is mapped to IAB 1.0 in four
steps, stopping at the first hit:

1. the value is already an IAB code (`IAB1-6`)
2. exact match on an official IAB category name
3. curated store-name synonym — *needed because Pixalate shows App Store / Play
   Store genre names, which are not IAB names*: Play's **"Music and Audio"** is
   **IAB1-6**, whose official IAB name is just **"Music"**
4. token-overlap (Dice) fuzzy match across all 392 names

Anything below `CONFIG.fuzzyMinScore` (0.55) is written as `[unclear]` rather than
guessed. Fuzzy and best-effort matches still get a code, plus a note asking you to
confirm — e.g. `Social` has no IAB 1.0 equivalent at all and resolves to `IAB14`
(Society) as the closest available.

The taxonomy is embedded rather than scraped from the Kayzen article on every run:
it is a frozen standard, and the article is Intercom-hosted markup that can change
without notice. Source of truth is IAB Tech Lab's
[`Content Taxonomy 1.0.tsv`](https://github.com/InteractiveAdvertisingBureau/Taxonomies).
One upstream defect is corrected — `IAB5-1` ships as `"41832 Education"`, an Excel
date-mangling of `"7-12 Education"`.

**Store URL** — the record's own store link if it has one, otherwise derived:
numeric ID or `trackId` → `https://apps.apple.com/us/app/id<id>`; reverse-DNS
bundle → `https://play.google.com/store/apps/details?id=<bundle>`. A derived URL
is labelled as such in Notes, since it is constructed rather than confirmed.

## Nothing is invented

Missing data is written as `[missing]`, `[unclear]` or `[please provide]`, and the
**Notes** column records why — which endpoints were tried, whether a URL was
derived, and any category mapping that needs a human decision. Sort or filter on
Notes to find the rows worth checking. Set `CONFIG.writeNotes = false` to turn the
column off.

## Configuration

All in `CONFIG` at the top of `Code.gs`: `sheetName` (blank = active sheet), header
and first-data row, column names, `sources`, `msBetweenCalls` (3000 ms),
`maxRuntimeMs`, `cacheHours`, `fuzzyMinScore`.

Header matching is case-insensitive and accepts aliases (`columnAliases`), so a
sheet headed `IAB Category` or `Bundle Id` is recognised rather than having a
duplicate column appended beside it. Add your own spellings there.

Add your own category mappings to `STORE_CATEGORY_SYNONYMS` — `'name': 'IAB9-30'`
for a clean equivalence, `'name': { code: 'IAB14', soft: true }` for a judgement
call that should be flagged for review.

## Tests

`node test/selftest.js` runs 69 checks over the offline logic — taxonomy integrity,
category mapping, store-URL derivation, JSON field extraction, and the
missing/not-found paths, plus header-alias resolution against the real sheet
header row and the iTunes/Play parsers against captured response shapes. The
network is stubbed throughout. No network or Google account
needed. The same mapping assertions run inside Apps Script via `runSelfTest()`.
