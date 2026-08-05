/**
 * Code.gs - App detail enrichment for Google Sheets.
 *
 * Reads Publisher Domain + Bundle ID from the sheet and fills in
 * Developer, App Name, IAB Category Code and Store URL.
 *
 * Menu: "App Enrichment" (appears after you reload the spreadsheet).
 *
 * Sources, tried in order (CONFIG.sources):
 *   1. Pixalate  - the ratings site's JSON service. URL shapes are UNVERIFIED.
 *   2. iTunes    - Apple's public Lookup API. No key needed. Authoritative for
 *                  every iOS app, by numeric track ID or by bundle ID.
 *   3. Play      - the Google Play listing, parsed from HTML (best effort).
 *
 * Sources 2 and 3 need no configuration, so the script works out of the box
 * even if Pixalate never answers. Run "1. Check data source" to see which
 * sources are live.
 *
 * The script never invents values. Anything it cannot establish is written as
 * [missing] / [unclear] / [please provide], with the reason in the Notes column.
 */

// ---------------------------------------------------------------------------
// CONFIG
// ---------------------------------------------------------------------------

var CONFIG = {
  sheetName: '',          // '' = the active sheet
  headerRow: 1,
  firstDataRow: 2,

  // Column headers. Matched case-insensitively; missing ones are appended.
  columns: {
    publisherDomain: 'Publisher Domain',
    bundleId:        'Bundle ID',
    developer:       'Developer',
    appName:         'App Name',
    iabCode:         'IAB Category Code',
    storeUrl:        'Store URL',
    notes:           'Notes'   // set to '' to disable the notes column
  },

  // Alternate header spellings accepted when matching an existing sheet, so a
  // sheet headed "IAB Category" or "Bundle Id" is recognised instead of having
  // a duplicate column appended next to it. Matching is case-insensitive.
  columnAliases: {
    publisherDomain: ['Publisher', 'Domain', 'Publisher Name'],
    bundleId:        ['Bundle Id', 'BundleID', 'Bundle', 'App Bundle', 'Package Name'],
    developer:       ['Developer Name', 'Seller', 'Publisher Name'],
    appName:         ['App', 'App Title', 'Title'],
    iabCode:         ['IAB Category', 'IAB Code', 'IAB', 'Category Code'],
    storeUrl:        ['Store Link', 'App Store URL', 'URL'],
    notes:           ['Note', 'Status']
  },

  // Data sources, tried in this order until one resolves the app.
  // Drop 'pixalate' if its endpoints never work for you - itunes+play cover
  // iOS and Android completely on their own.
  sources: ['pixalate', 'itunes', 'play'],
  itunesCountry: 'us',

  writeNotes: true,
  // Apple's lookup service tolerates roughly 20 calls/minute; 3s keeps us under
  // it. Lower it only if you drop 'itunes' from sources.
  msBetweenCalls: 3000,
  maxRuntimeMs: 4.5 * 60 * 1000,  // stop cleanly before the 6-min Apps Script cap
  cacheHours: 6,
  fuzzyMinScore: 0.55     // below this, the category is reported as [unclear]
};

var PLACEHOLDER = {
  missing: '[missing]',
  unclear: '[unclear]',
  provide: '[please provide]'
};

/**
 * Candidate Pixalate endpoints, tried in order until one returns usable JSON.
 *
 * ratings.pixalate.com is a JavaScript single-page app, so its HTML cannot be
 * scraped by UrlFetchApp (which does not execute JS). These are the JSON
 * services the site itself calls.
 *
 * These URL shapes are UNVERIFIED - they could not be reached from the machine
 * that generated this script, so confirm them with "1. Check data source"
 * before a bulk run. If Pixalate has changed them, edit this list only; the
 * parser below is schema-agnostic and should keep working.
 */
var ENDPOINTS = [
  function (id, platform) {
    return 'https://ratings2.api.pixalate.com/services/2018/Ratings/getApp?appId=' +
           encodeURIComponent(id);
  },
  function (id, platform) {
    return 'https://ratings2.api.pixalate.com/services/2018/Ratings/getApp?appId=' +
           encodeURIComponent(id) + '&device=' + encodeURIComponent(platform) +
           '&region=GLOBAL&country=GLOBAL';
  },
  function (id, platform) {
    return 'https://ratings.pixalate.com/api/insight/apps/' +
           encodeURIComponent(id) + '/GLOBAL/' + encodeURIComponent(platform) + '/GLOBAL';
  }
];

/**
 * Store category names (what Pixalate displays) -> IAB 1.0 codes.
 *
 * Needed because Pixalate shows App Store / Play Store genre names, which are
 * NOT IAB names. The canonical example: Play's "Music and Audio" is IAB1-6,
 * whose official IAB name is simply "Music".
 *
 * `soft: true` marks a judgement call rather than a clean equivalence - those
 * rows still get a code, but are flagged in Notes for a human to confirm.
 */
var STORE_CATEGORY_SYNONYMS = {
  // --- clean equivalences ---
  'music': 'IAB1-6',
  'music and audio': 'IAB1-6',
  'music & audio': 'IAB1-6',
  'audio': 'IAB1-6',
  'books': 'IAB1-1',
  'books and reference': 'IAB1-1',
  'books & reference': 'IAB1-1',
  'comics': 'IAB9-11',
  'business': 'IAB3',
  'education': 'IAB5',
  'educational': 'IAB5',
  'entertainment': 'IAB1',
  'finance': 'IAB13',
  'food and drink': 'IAB8',
  'food & drink': 'IAB8',
  'health and fitness': 'IAB7',
  'health & fitness': 'IAB7',
  'medical': 'IAB7',
  'news': 'IAB12',
  'news and magazines': 'IAB12',
  'news & magazines': 'IAB12',
  'magazines and newspapers': 'IAB12',
  'photography': 'IAB9-23',
  'photo and video': 'IAB9-23',
  'photo & video': 'IAB9-23',
  'shopping': 'IAB22',
  'sports': 'IAB17',
  'travel': 'IAB20',
  'travel and local': 'IAB20',
  'travel & local': 'IAB20',
  'weather': 'IAB15-10',
  'dating': 'IAB14-1',
  'parenting': 'IAB6',
  'auto and vehicles': 'IAB2',
  'auto & vehicles': 'IAB2',
  'beauty': 'IAB18',
  'house and home': 'IAB10',
  'house & home': 'IAB10',
  'art and design': 'IAB1-3',
  'art & design': 'IAB1-3',
  'games': 'IAB9-30',
  'game': 'IAB9-30',
  'casual': 'IAB9-30',
  'arcade': 'IAB9-30',
  'puzzle': 'IAB9-5',
  'board': 'IAB9-5',
  'card': 'IAB9-7',
  'role playing': 'IAB9-25',
  'technology': 'IAB19',
  'developer tools': 'IAB19',
  'graphics and design': 'IAB1-3',
  'graphics & design': 'IAB1-3',

  // --- judgement calls: closest available IAB 1.0 code ---
  'social':            { code: 'IAB14',    soft: true },
  'social networking': { code: 'IAB14',    soft: true },
  'communication':     { code: 'IAB19',    soft: true },
  'lifestyle':         { code: 'IAB9',     soft: true },
  'productivity':      { code: 'IAB19',    soft: true },
  'utilities':         { code: 'IAB19',    soft: true },
  'tools':             { code: 'IAB19',    soft: true },
  'personalization':   { code: 'IAB19',    soft: true },
  'navigation':        { code: 'IAB20',    soft: true },
  'maps and navigation': { code: 'IAB20',  soft: true },
  'maps & navigation': { code: 'IAB20',    soft: true },
  'reference':         { code: 'IAB5',     soft: true },
  'kids':              { code: 'IAB6',     soft: true },
  'events':            { code: 'IAB9',     soft: true },
  'libraries and demo': { code: 'IAB19',   soft: true },
  'video players and editors': { code: 'IAB19-14', soft: true },
  'video players & editors':   { code: 'IAB19-14', soft: true }
};

/**
 * Google Play category constants (from the /store/apps/category/<X> URL path)
 * -> IAB 1.0. Preferred over the visible category text because these constants
 * survive Play's markup changes. `soft` marks a judgement call, flagged in Notes.
 */
var PLAY_CATEGORY_TO_IAB = {
  MUSIC_AND_AUDIO: 'IAB1-6',
  BOOKS_AND_REFERENCE: 'IAB1-1',
  COMICS: 'IAB9-11',
  ART_AND_DESIGN: 'IAB1-3',
  ENTERTAINMENT: 'IAB1',
  BUSINESS: 'IAB3',
  EDUCATION: 'IAB5',
  FINANCE: 'IAB13',
  FOOD_AND_DRINK: 'IAB8',
  HEALTH_AND_FITNESS: 'IAB7',
  MEDICAL: 'IAB7',
  NEWS_AND_MAGAZINES: 'IAB12',
  PHOTOGRAPHY: 'IAB9-23',
  SHOPPING: 'IAB22',
  SPORTS: 'IAB17',
  TRAVEL_AND_LOCAL: 'IAB20',
  WEATHER: 'IAB15-10',
  DATING: 'IAB14-1',
  PARENTING: 'IAB6',
  AUTO_AND_VEHICLES: 'IAB2',
  BEAUTY: 'IAB18',
  HOUSE_AND_HOME: 'IAB10',
  GAME: 'IAB9-30',
  GAME_ACTION: 'IAB9-30',
  GAME_ADVENTURE: 'IAB9-30',
  GAME_ARCADE: 'IAB9-30',
  GAME_CASUAL: 'IAB9-30',
  GAME_SIMULATION: 'IAB9-30',
  GAME_STRATEGY: 'IAB9-30',
  GAME_SPORTS: 'IAB9-30',
  GAME_RACING: 'IAB9-30',
  GAME_TRIVIA: 'IAB9-30',
  GAME_WORD: 'IAB9-30',
  GAME_MUSIC: 'IAB9-30',
  GAME_EDUCATIONAL: 'IAB9-30',
  GAME_PUZZLE: 'IAB9-5',
  GAME_BOARD: 'IAB9-5',
  GAME_CARD: 'IAB9-7',
  GAME_CASINO: 'IAB9-7',
  GAME_ROLE_PLAYING: 'IAB9-25',
  SOCIAL:              { code: 'IAB14',    soft: true },
  COMMUNICATION:       { code: 'IAB19',    soft: true },
  LIFESTYLE:           { code: 'IAB9',     soft: true },
  PRODUCTIVITY:        { code: 'IAB19',    soft: true },
  TOOLS:               { code: 'IAB19',    soft: true },
  PERSONALIZATION:     { code: 'IAB19',    soft: true },
  MAPS_AND_NAVIGATION: { code: 'IAB20',    soft: true },
  LIBRARIES_AND_DEMO:  { code: 'IAB19',    soft: true },
  VIDEO_PLAYERS:       { code: 'IAB19-14', soft: true },
  EVENTS:              { code: 'IAB9',     soft: true }
};

// ---------------------------------------------------------------------------
// MENU
// ---------------------------------------------------------------------------

/**
 * Guards against the most common setup slip: pasting Code.gs but not
 * IabTaxonomy.gs. Without it IAB_TAXONOMY is undefined and category mapping
 * dies with a bare ReferenceError halfway through a run.
 */
function taxonomyLoaded_() {
  if (typeof IAB_TAXONOMY !== 'undefined' && IAB_TAXONOMY && IAB_TAXONOMY.length) return true;

  var msg = 'IabTaxonomy.gs is missing.\n\n' +
            'This project has Code.gs only. IAB category codes live in a second ' +
            'file that has to be added separately.\n\n' +
            'In the Apps Script editor: Files > + > Script, name it exactly\n' +
            '    IabTaxonomy\n' +
            '(Apps Script adds the .gs itself), paste the taxonomy in, Save, ' +
            'then run this again.';
  try {
    SpreadsheetApp.getUi().alert('Missing file', msg, SpreadsheetApp.getUi().ButtonSet.OK);
  } catch (e) {
    Logger.log(msg);          // no UI available (e.g. run from the editor)
  }
  return false;
}

function onOpen() {
  var menu = SpreadsheetApp.getUi().createMenu('App Enrichment');
  if (typeof IAB_TAXONOMY === 'undefined') {
    menu.addItem('\u26a0 IabTaxonomy.gs is missing - click me', 'showTaxonomyHelp');
    menu.addSeparator();
  }
  menu
    .addItem('1. Check data source (run first)', 'checkDataSource')
    .addItem('2. Set up / repair headers', 'setUpHeaders')
    .addSeparator()
    .addItem('3. Fill empty rows', 'fillEmptyRows')
    .addItem('4. Refill selected rows (overwrite)', 'refillSelectedRows')
    .addSeparator()
    .addItem('Clear cache', 'clearCache')
    .addToUi();
}

function showTaxonomyHelp() { taxonomyLoaded_(); }

// ---------------------------------------------------------------------------
// SHEET PLUMBING
// ---------------------------------------------------------------------------

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = CONFIG.sheetName ? ss.getSheetByName(CONFIG.sheetName) : ss.getActiveSheet();
  if (!sheet) throw new Error('Sheet "' + CONFIG.sheetName + '" not found.');
  return sheet;
}

/** Ensures every configured column exists; appends any that are missing. */
function setUpHeaders() {
  var sheet = getSheet_();
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var header = sheet.getRange(CONFIG.headerRow, 1, 1, lastCol).getValues()[0];

  var wanted = ['publisherDomain', 'bundleId', 'developer', 'appName', 'iabCode', 'storeUrl'];
  if (CONFIG.writeNotes && CONFIG.columns.notes) wanted.push('notes');

  var added = [];
  wanted.forEach(function (key) {
    if (resolveColumnIndex_(header, key) === -1) {
      header.push(CONFIG.columns[key]);
      added.push(CONFIG.columns[key]);
    }
  });

  if (added.length) {
    sheet.getRange(CONFIG.headerRow, 1, 1, header.length).setValues([header]);
    sheet.getRange(CONFIG.headerRow, 1, 1, header.length).setFontWeight('bold');
    sheet.setFrozenRows(CONFIG.headerRow);
  }
  toast_(added.length ? 'Added columns: ' + added.join(', ') : 'All columns already present.');
}

function findColumn_(header, name) {
  var target = String(name).trim().toLowerCase();
  for (var i = 0; i < header.length; i++) {
    if (String(header[i]).trim().toLowerCase() === target) return i;
  }
  return -1;
}

/** Locates a configured column by its primary name, then by any alias. */
function resolveColumnIndex_(header, key) {
  var primary = CONFIG.columns[key];
  if (!primary) return -1;

  var at = findColumn_(header, primary);
  if (at !== -1) return at;

  var aliases = (CONFIG.columnAliases && CONFIG.columnAliases[key]) || [];
  for (var i = 0; i < aliases.length; i++) {
    at = findColumn_(header, aliases[i]);
    if (at !== -1) return at;
  }
  return -1;
}

function resolveColumns_(sheet) {
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var header = sheet.getRange(CONFIG.headerRow, 1, 1, lastCol).getValues()[0];
  var idx = {};
  var missing = [];

  Object.keys(CONFIG.columns).forEach(function (key) {
    var name = CONFIG.columns[key];
    if (!name) { idx[key] = -1; return; }
    var at = resolveColumnIndex_(header, key);
    idx[key] = at;
    if (at === -1 && key !== 'notes') missing.push(name);
  });

  if (missing.length) {
    throw new Error('Missing column(s): ' + missing.join(', ') +
                    '. Run "2. Set up / repair headers" first.');
  }
  return idx;
}

// ---------------------------------------------------------------------------
// MAIN ENTRY POINTS
// ---------------------------------------------------------------------------

function fillEmptyRows()      { runFill_({ overwrite: false, selectionOnly: false }); }
function refillSelectedRows() { runFill_({ overwrite: true,  selectionOnly: true  }); }

function runFill_(opts) {
  if (!taxonomyLoaded_()) return;

  var lock = LockService.getDocumentLock();
  if (!lock.tryLock(5000)) {
    toast_('Another run is already in progress.');
    return;
  }

  try {
    var started = Date.now();
    var sheet = getSheet_();
    var idx = resolveColumns_(sheet);
    var lastRow = sheet.getLastRow();

    if (lastRow < CONFIG.firstDataRow) { toast_('No data rows found.'); return; }

    var rowStart = CONFIG.firstDataRow;
    var rowEnd = lastRow;

    if (opts.selectionOnly) {
      var sel = sheet.getActiveRange();
      if (!sel) { toast_('Select the rows you want to refill first.'); return; }
      rowStart = Math.max(sel.getRow(), CONFIG.firstDataRow);
      rowEnd = Math.min(sel.getRow() + sel.getNumRows() - 1, lastRow);
    }

    var width = sheet.getLastColumn();
    var values = sheet.getRange(rowStart, 1, rowEnd - rowStart + 1, width).getValues();

    var processed = 0, filled = 0, skipped = 0, failed = 0, stoppedEarly = false;

    for (var i = 0; i < values.length; i++) {
      if (Date.now() - started > CONFIG.maxRuntimeMs) { stoppedEarly = true; break; }

      var row = values[i];
      var rowNumber = rowStart + i;
      var bundleId = String(row[idx.bundleId] || '').trim();

      if (!bundleId || isPlaceholder_(bundleId)) {
        if (String(row[idx.publisherDomain] || '').trim()) {
          writeCell_(sheet, rowNumber, idx.bundleId, PLACEHOLDER.provide);
          note_(sheet, rowNumber, idx, 'Bundle ID is empty - cannot look anything up.');
          failed++;
        }
        continue;
      }

      if (!opts.overwrite && rowIsComplete_(row, idx)) { skipped++; continue; }

      processed++;
      var result = enrichBundle_(bundleId);

      writeCell_(sheet, rowNumber, idx.developer, result.developer);
      writeCell_(sheet, rowNumber, idx.appName,   result.appName);
      writeCell_(sheet, rowNumber, idx.iabCode,   result.iabCode);
      writeCell_(sheet, rowNumber, idx.storeUrl,  result.storeUrl);
      note_(sheet, rowNumber, idx, result.notes.join(' | '));

      if (result.ok) filled++; else failed++;

      SpreadsheetApp.flush();
      Utilities.sleep(CONFIG.msBetweenCalls);
    }

    var msg = 'Done. Looked up ' + processed + ', filled ' + filled +
              ', needs attention ' + failed + ', already complete ' + skipped + '.';
    if (stoppedEarly) msg += ' Hit the time limit - run it again to continue.';
    toast_(msg, 12);

  } finally {
    lock.releaseLock();
  }
}

function rowIsComplete_(row, idx) {
  var keys = ['developer', 'appName', 'iabCode', 'storeUrl'];
  for (var i = 0; i < keys.length; i++) {
    var v = String(row[idx[keys[i]]] || '').trim();
    if (!v || isPlaceholder_(v)) return false;
  }
  return true;
}

function isPlaceholder_(v) {
  return /^\[(missing|unclear|please provide)\]$/i.test(String(v).trim());
}

function writeCell_(sheet, row, col, value) {
  if (col === -1) return;
  sheet.getRange(row, col + 1).setValue(value);
}

function note_(sheet, row, idx, text) {
  if (!CONFIG.writeNotes || idx.notes === -1) return;
  sheet.getRange(row, idx.notes + 1).setValue(text || '');
}

function toast_(msg, seconds) {
  SpreadsheetApp.getActiveSpreadsheet().toast(msg, 'App Enrichment', seconds || 6);
}

// ---------------------------------------------------------------------------
// ENRICHMENT
// ---------------------------------------------------------------------------

/**
 * Looks up one bundle ID across every configured source and returns all four
 * fields, using placeholders for anything that could not be established.
 * Never invents a value.
 */
function enrichBundle_(bundleId) {
  var out = {
    developer: PLACEHOLDER.missing,
    appName:   PLACEHOLDER.missing,
    iabCode:   PLACEHOLDER.missing,
    storeUrl:  PLACEHOLDER.missing,
    notes: [],
    ok: false
  };

  var rec = resolveApp_(bundleId);

  if (!rec.found) {
    out.notes.push('Not found. Tried: ' + rec.attempts.join('; ') + '.');
    var guessed = deriveStoreUrl_(bundleId, null, guessPlatform_(bundleId));
    if (guessed) {
      out.storeUrl = guessed;
      out.notes.push('Store URL built from the bundle ID - not confirmed against a store.');
    }
    return out;
  }

  if (rec.developer) out.developer = String(rec.developer).trim();
  else out.notes.push('Developer not present in the ' + rec.source + ' record.');

  if (rec.appName) out.appName = String(rec.appName).trim();
  else out.notes.push('App Name not present in the ' + rec.source + ' record.');

  // --- IAB category ---
  if (rec.iabCode) {
    // Play category constants map straight to a code, skipping name matching.
    out.iabCode = rec.iabCode;
    if (rec.iabSoft) {
      out.notes.push('Store category "' + rec.category + '" has no exact IAB 1.0 ' +
                     'equivalent; ' + rec.iabCode + ' is the closest - please confirm.');
    }
  } else if (!rec.category) {
    out.notes.push('No category returned by ' + rec.source + ' - IAB code cannot be derived.');
  } else {
    var mapped = mapIabCategory_(String(rec.category));
    if (!mapped.code) {
      out.iabCode = PLACEHOLDER.unclear;
      out.notes.push('Category "' + rec.category + '" has no confident IAB 1.0 match ' +
                     '- please confirm.');
    } else {
      out.iabCode = mapped.code;
      if (mapped.confidence !== 'exact' && mapped.confidence !== 'synonym') {
        out.notes.push('Category "' + rec.category + '" mapped to ' + mapped.code + ' (' +
                       mapped.name + ') by ' + mapped.confidence + ' match - please confirm.');
      } else if (mapped.soft) {
        out.notes.push('Category "' + rec.category + '" has no exact IAB 1.0 equivalent; ' +
                       mapped.code + ' (' + mapped.name + ') is the closest - please confirm.');
      }
    }
  }

  // --- store URL ---
  if (looksLikeStoreUrl_(rec.storeUrl)) {
    out.storeUrl = String(rec.storeUrl).trim();
  } else {
    var derived = deriveStoreUrl_(bundleId, rec.trackId, rec.platform || guessPlatform_(bundleId));
    if (derived) {
      out.storeUrl = derived;
    } else {
      out.notes.push('No store link found and none could be derived.');
    }
  }

  if (rec.source !== 'pixalate') {
    out.notes.push('Source: ' + rec.source + '.');
  }

  out.ok = (out.developer !== PLACEHOLDER.missing && out.appName !== PLACEHOLDER.missing &&
            out.iabCode !== PLACEHOLDER.missing && out.iabCode !== PLACEHOLDER.unclear &&
            out.storeUrl !== PLACEHOLDER.missing);
  return out;
}

/**
 * Tries each source in CONFIG.sources order and returns the first usable hit.
 *
 *   pixalate - the site's own JSON service. Unverified URL shapes; see ENDPOINTS.
 *   itunes   - Apple's public iTunes Lookup API. No key, no auth. Authoritative
 *              for every iOS app, by numeric track ID or by bundle ID.
 *   play     - the Play Store listing, parsed from HTML. Best effort: Google's
 *              markup is generated and changes, so the category constant in the
 *              URL path is preferred over any visible text.
 */
function resolveApp_(bundleId) {
  var cache = CacheService.getScriptCache();
  var key = 'app_' + Utilities.base64EncodeWebSafe(String(bundleId)).substring(0, 200);
  var cached = cache.get(key);
  if (cached) {
    try {
      var hit = JSON.parse(cached);
      if (hit && hit.found) return hit;
    } catch (e) { /* re-fetch */ }
  }

  var attempts = [];
  var isNumeric = /^\d+$/.test(String(bundleId).trim());

  for (var i = 0; i < CONFIG.sources.length; i++) {
    var source = CONFIG.sources[i];
    var rec = null;

    if (source === 'pixalate')    rec = lookupPixalate_(bundleId, attempts);
    else if (source === 'itunes') rec = lookupItunes_(bundleId, attempts);
    else if (source === 'play')   rec = isNumeric ? null : lookupPlay_(bundleId, attempts);

    if (rec && rec.found) {
      cache.put(key, JSON.stringify(rec), CONFIG.cacheHours * 3600);
      return rec;
    }
  }
  return { found: false, attempts: attempts };
}

// --- source: Pixalate -------------------------------------------------------

function lookupPixalate_(bundleId, attempts) {
  var platforms = /^\d+$/.test(String(bundleId)) ? ['ios'] : ['android', 'ios'];

  for (var e = 0; e < ENDPOINTS.length; e++) {
    for (var p = 0; p < platforms.length; p++) {
      var url = ENDPOINTS[e](bundleId, platforms[p]);
      var res = httpGet_(url);
      var json = res.json;
      attempts.push('pixalate ' + res.status);

      if (json && hasAppData_(json)) {
        var d = unwrap_(json);
        return {
          found: true,
          source: 'pixalate',
          appName:   pluck_(d, ['appTitle', 'appName', 'title', 'name', 'trackName']),
          developer: pluck_(d, ['developer', 'developerName', 'publisher', 'publisherName',
                                'seller', 'sellerName', 'artistName', 'author']),
          category:  pluck_(d, ['iabCategory', 'iab_category', 'category', 'categoryName',
                                'primaryCategory', 'genre', 'primaryGenreName', 'genres']),
          storeUrl:  pluck_(d, ['storeUrl', 'appStoreUrl', 'store_url', 'url', 'appUrl',
                                'trackViewUrl', 'link']),
          trackId:   pluck_(d, ['trackId', 'track_id', 'storeId', 'appleId', 'itunesId']),
          platform:  pluck_(d, ['device', 'platform', 'os'])
        };
      }
    }
  }
  return null;
}

// --- source: Apple iTunes Lookup -------------------------------------------

/**
 * Apple's public lookup service. Numeric IDs query ?id=, reverse-DNS bundles
 * query ?bundleId=. Returns resultCount:0 (HTTP 200) when nothing matches, so
 * an empty result is a clean miss rather than an error.
 */
function lookupItunes_(bundleId, attempts) {
  var id = String(bundleId).trim();
  var param = /^\d+$/.test(id) ? 'id' : 'bundleId';
  var url = 'https://itunes.apple.com/lookup?' + param + '=' + encodeURIComponent(id) +
            '&country=' + encodeURIComponent(CONFIG.itunesCountry);

  var res = httpGet_(url);
  attempts.push('itunes ' + res.status);

  var json = res.json;
  if (!json || !json.results || !json.results.length) return null;

  var r = json.results[0];
  if (!r.trackName) return null;

  return {
    found: true,
    source: 'itunes',
    appName:   r.trackName,
    developer: r.artistName || r.sellerName || '',
    category:  r.primaryGenreName || (r.genres && r.genres.length ? r.genres[0] : ''),
    storeUrl:  r.trackViewUrl || '',
    trackId:   r.trackId ? String(r.trackId) : '',
    platform:  'ios'
  };
}

// --- source: Google Play listing -------------------------------------------

function lookupPlay_(bundleId, attempts) {
  var url = 'https://play.google.com/store/apps/details?id=' +
            encodeURIComponent(String(bundleId).trim()) + '&hl=en&gl=US';
  var res = httpGet_(url, /* expectHtml */ true);
  attempts.push('play ' + res.status);

  if (!res.body || String(res.status).indexOf('200') !== 0) return null;

  var parsed = parsePlayHtml_(res.body);
  if (!parsed.appName) return null;

  var iab = parsed.playCategory ? PLAY_CATEGORY_TO_IAB[parsed.playCategory] : null;
  var rec = {
    found: true,
    source: 'play',
    appName:   parsed.appName,
    developer: parsed.developer || '',
    category:  parsed.categoryText || parsed.playCategory || '',
    storeUrl:  'https://play.google.com/store/apps/details?id=' + String(bundleId).trim(),
    trackId:   '',
    platform:  'android'
  };
  if (iab) {
    rec.iabCode = typeof iab === 'string' ? iab : iab.code;
    rec.iabSoft = typeof iab === 'string' ? false : !!iab.soft;
  }
  return rec;
}

/**
 * Pulls name, developer and category out of a Play listing.
 * The category CONSTANT in the /store/apps/category/<X> path is preferred over
 * visible text: the constants are stable even when the rendered markup is not.
 */
function parsePlayHtml_(html) {
  var out = {};

  var m = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i) ||
          html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (m) {
    out.appName = decodeHtml_(m[1])
      .replace(/\s*[-–]\s*Apps on Google Play\s*$/i, '')
      .replace(/\s*[-–]\s*Google Play.*$/i, '')
      .trim();
  }

  m = html.match(/href="\/store\/apps\/dev(?:eloper)?\?id=[^"]*"[^>]*>\s*([^<]{1,120}?)\s*</i);
  if (m) out.developer = decodeHtml_(m[1]).trim();

  if (!out.developer) {
    m = html.match(/<meta\s+name="description"\s+content="[^"]*?\bby\s+([^",.]{1,80})/i);
    if (m) out.developer = decodeHtml_(m[1]).trim();
  }

  m = html.match(/\/store\/apps\/category\/([A-Z_]+)/);
  if (m) out.playCategory = m[1];

  m = html.match(/itemprop="genre"[^>]*>\s*([^<]{1,60}?)\s*</i);
  if (m) out.categoryText = decodeHtml_(m[1]).trim();

  return out;
}

function decodeHtml_(s) {
  return String(s || '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, function (_, n) { return String.fromCharCode(parseInt(n, 10)); });
}

// --- shared HTTP ------------------------------------------------------------

function httpGet_(url, expectHtml) {
  try {
    var response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: true,
      headers: {
        'Accept': expectHtml ? 'text/html,application/xhtml+xml' : 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; GoogleAppsScript)'
      }
    });
    var status = response.getResponseCode();
    var body = response.getContentText();

    if (status < 200 || status >= 300) return { status: String(status), json: null, body: '' };
    if (expectHtml) return { status: String(status), json: null, body: body };

    try {
      return { status: String(status), json: JSON.parse(body), body: body };
    } catch (parseErr) {
      return { status: status + ' (not JSON)', json: null, body: body };
    }
  } catch (err) {
    return { status: 'error: ' + err.message, json: null, body: '' };
  }
}

/** Some APIs wrap the record in {data:…} / {response:…} / [ … ]. */
function unwrap_(json) {
  if (Array.isArray(json)) return json.length ? json[0] : json;
  var keys = ['data', 'response', 'result', 'results', 'app', 'apps', 'docs'];
  for (var i = 0; i < keys.length; i++) {
    if (json && json[keys[i]]) {
      var inner = json[keys[i]];
      return Array.isArray(inner) ? (inner.length ? inner[0] : json) : inner;
    }
  }
  return json;
}

function hasAppData_(json) {
  var probe = unwrap_(json);
  return !!pluck_(probe, ['appTitle', 'appName', 'title', 'name', 'trackName', 'bundleId']);
}

/**
 * Breadth-first search for the first of `keys` present in a nested object.
 * Keeps the script working if a source reshapes its JSON.
 */
function pluck_(obj, keys) {
  if (!obj || typeof obj !== 'object') return null;
  var lower = keys.map(function (k) { return k.toLowerCase(); });
  var queue = [obj];
  var guard = 0;

  while (queue.length && guard++ < 500) {
    var node = queue.shift();
    if (!node || typeof node !== 'object') continue;

    for (var i = 0; i < lower.length; i++) {
      for (var key in node) {
        if (!node.hasOwnProperty(key)) continue;
        if (key.toLowerCase() === lower[i]) {
          var v = node[key];
          if (v === null || v === undefined || v === '') continue;
          if (typeof v === 'object' && !Array.isArray(v)) continue;
          if (Array.isArray(v)) { if (!v.length) continue; return v[0]; }
          return v;
        }
      }
    }
    for (var k in node) {
      if (node.hasOwnProperty(k) && node[k] && typeof node[k] === 'object') queue.push(node[k]);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// STORE URL
// ---------------------------------------------------------------------------

function guessPlatform_(bundleId) {
  return /^\d+$/.test(String(bundleId)) ? 'ios' : 'android';
}

function looksLikeStoreUrl_(url) {
  return /^https?:\/\/(apps\.apple\.com|itunes\.apple\.com|play\.google\.com)/i
    .test(String(url || ''));
}

function deriveStoreUrl_(bundleId, trackId, platform) {
  var id = String(bundleId || '').trim();
  var track = String(trackId || '').trim();
  var plat = String(platform || '').toLowerCase();

  if (/^\d+$/.test(id)) return 'https://apps.apple.com/us/app/id' + id;
  if (/^\d+$/.test(track)) return 'https://apps.apple.com/us/app/id' + track;
  if (/ios|apple|itunes/.test(plat)) return '';   // need the numeric id
  if (id) return 'https://play.google.com/store/apps/details?id=' + encodeURIComponent(id);
  return '';
}

// ---------------------------------------------------------------------------
// IAB CATEGORY MAPPING
// ---------------------------------------------------------------------------

var _iabIndex = null;

function iabIndex_() {
  if (_iabIndex) return _iabIndex;
  var byName = {}, byCode = {};
  IAB_TAXONOMY.forEach(function (row) {
    byName[normalize_(row[1])] = { code: row[0], name: row[1], parent: row[2] };
    byCode[row[0].toLowerCase()] = { code: row[0], name: row[1], parent: row[2] };
  });
  _iabIndex = { byName: byName, byCode: byCode };
  return _iabIndex;
}

function normalize_(s) {
  return String(s)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Maps a displayed category name to an IAB 1.0 code.
 * Order: already-a-code -> exact IAB name -> curated store synonym -> token overlap.
 * Returns {code, name, confidence, soft}; code is '' when nothing is confident.
 */
function mapIabCategory_(rawName) {
  var index = iabIndex_();
  var raw = String(rawName || '').trim();
  if (!raw) return { code: '', name: '', confidence: 'none' };

  // Already an IAB code?
  var asCode = raw.replace(/\s+/g, '').toLowerCase();
  if (index.byCode[asCode]) {
    var direct = index.byCode[asCode];
    return { code: direct.code, name: direct.name, confidence: 'exact' };
  }

  var norm = normalize_(raw);

  // Exact IAB category name.
  if (index.byName[norm]) {
    var exact = index.byName[norm];
    return { code: exact.code, name: exact.name, confidence: 'exact' };
  }

  // Curated store-name synonym.
  var syn = STORE_CATEGORY_SYNONYMS[norm];
  if (syn) {
    var code = typeof syn === 'string' ? syn : syn.code;
    var soft = typeof syn === 'string' ? false : !!syn.soft;
    var entry = index.byCode[code.toLowerCase()];
    if (entry) {
      return { code: entry.code, name: entry.name, confidence: 'synonym', soft: soft };
    }
  }

  // Token-overlap fallback (Dice coefficient) across all 392 names.
  var best = null, bestScore = 0;
  var tokensA = norm.split(' ').filter(Boolean);

  for (var key in index.byName) {
    if (!index.byName.hasOwnProperty(key)) continue;
    var score = diceScore_(tokensA, key.split(' ').filter(Boolean));
    if (score > bestScore) { bestScore = score; best = index.byName[key]; }
  }

  if (best && bestScore >= CONFIG.fuzzyMinScore) {
    return {
      code: best.code,
      name: best.name,
      confidence: 'fuzzy (' + Math.round(bestScore * 100) + '%)'
    };
  }
  return { code: '', name: '', confidence: 'none' };
}

function diceScore_(a, b) {
  if (!a.length || !b.length) return 0;
  var setB = {};
  b.forEach(function (t) { setB[t] = true; });
  var shared = 0;
  a.forEach(function (t) { if (setB[t]) shared++; });
  return (2 * shared) / (a.length + b.length);
}

// ---------------------------------------------------------------------------
// DIAGNOSTIC
// ---------------------------------------------------------------------------

/**
 * Verifies connectivity and endpoint shape before a bulk run.
 * Uses the first bundle ID in the sheet, or a known sample.
 */
function checkDataSource() {
  if (!taxonomyLoaded_()) return;

  var sheet = getSheet_();
  var sample = '';
  try {
    var idx = resolveColumns_(sheet);
    var lastRow = sheet.getLastRow();
    for (var r = CONFIG.firstDataRow; r <= lastRow; r++) {
      var v = String(sheet.getRange(r, idx.bundleId + 1).getValue() || '').trim();
      if (v && !isPlaceholder_(v)) { sample = v; break; }
    }
  } catch (e) { /* headers not set up yet - fall back to the sample below */ }

  if (!sample) sample = '336353151';  // the ID from the reference Pixalate URL

  var lines = ['Test ID: ' + sample, ''];
  var working = [];

  CONFIG.sources.forEach(function (source) {
    var attempts = [];
    var rec = null;

    if (source === 'pixalate')    rec = lookupPixalate_(sample, attempts);
    else if (source === 'itunes') rec = lookupItunes_(sample, attempts);
    else if (source === 'play')   rec = /^\d+$/.test(sample) ? null : lookupPlay_(sample, attempts);

    if (rec && rec.found) {
      working.push(source);
      lines.push('WORKS  ' + source);
      lines.push('   app:       ' + (rec.appName   || '(none)'));
      lines.push('   developer: ' + (rec.developer || '(none)'));
      lines.push('   category:  ' + (rec.category  || '(none)') +
                 (rec.iabCode ? '  -> ' + rec.iabCode : ''));
      lines.push('   store URL: ' + (rec.storeUrl  || '(none)'));
    } else {
      var why = (source === 'play' && /^\d+$/.test(sample))
        ? 'skipped - numeric ID is an iOS app, not a Play bundle'
        : attempts.join('; ') || 'no response';
      lines.push('no     ' + source + '  (' + why + ')');
    }
    lines.push('');
  });

  if (working.length) {
    lines.push('Working source(s): ' + working.join(', ') + '.');
    lines.push('You can run "3. Fill empty rows".');
    if (working.indexOf('pixalate') === -1) {
      lines.push('');
      lines.push('Pixalate did not answer. That is fine - itunes and play cover ' +
                 'iOS and Android between them. To use Pixalate anyway, open an app ' +
                 'page on ratings.pixalate.com in Chrome, look in DevTools > Network > ' +
                 'Fetch/XHR for the request carrying the app details, and add that URL ' +
                 'shape to ENDPOINTS at the top of Code.gs.');
    }
  } else {
    lines.push('No source returned data for this ID. Check the bundle ID is correct, ' +
               'and that the script was authorised to make external requests.');
  }

  var out = lines.join('\n');
  Logger.log(out);
  SpreadsheetApp.getUi().alert('Data source check', out.substring(0, 1400),
                               SpreadsheetApp.getUi().ButtonSet.OK);
}

function clearCache() {
  CacheService.getScriptCache().removeAll([]);
  toast_('Cache cleared.');
}

// ---------------------------------------------------------------------------
// SELF-TEST (mapping logic only - no network)
// ---------------------------------------------------------------------------

function runSelfTest() {
  var cases = [
    ['Music and Audio', 'IAB1-6'],
    ['Music', 'IAB1-6'],
    ['Weather', 'IAB15-10'],
    ['Photography', 'IAB9-23'],
    ['Games', 'IAB9-30'],
    ['Travel & Local', 'IAB20'],
    ['News & Magazines', 'IAB12'],
    ['Books & Reference', 'IAB1-1'],
    ['Health & Fitness', 'IAB7'],
    ['IAB1-6', 'IAB1-6'],
    ['Shopping', 'IAB22']
  ];
  var failures = [];
  cases.forEach(function (c) {
    var got = mapIabCategory_(c[0]);
    if (got.code !== c[1]) failures.push(c[0] + ': expected ' + c[1] + ', got ' + (got.code || 'none'));
  });
  var msg = failures.length
    ? 'FAILED:\n' + failures.join('\n')
    : 'All ' + cases.length + ' mapping tests passed. Taxonomy rows: ' + IAB_TAXONOMY.length;
  Logger.log(msg);
  return msg;
}
