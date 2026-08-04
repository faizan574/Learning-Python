/**
 * Code.gs - App detail enrichment for Google Sheets.
 *
 * Reads Publisher Domain + Bundle ID from the sheet and fills in
 * Developer, App Name, IAB Category Code and Store URL.
 *
 * Menu: "App Enrichment" (appears after you reload the spreadsheet).
 *
 * START HERE:  run "1. Check data source" from the menu before anything else.
 *              It verifies which Pixalate endpoint answers and shows the raw
 *              response, so ENDPOINTS below can be corrected in one place.
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

  writeNotes: true,
  msBetweenCalls: 350,    // politeness delay between lookups
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

// ---------------------------------------------------------------------------
// MENU
// ---------------------------------------------------------------------------

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('App Enrichment')
    .addItem('1. Check data source (run first)', 'checkDataSource')
    .addItem('2. Set up / repair headers', 'setUpHeaders')
    .addSeparator()
    .addItem('3. Fill empty rows', 'fillEmptyRows')
    .addItem('4. Refill selected rows (overwrite)', 'refillSelectedRows')
    .addSeparator()
    .addItem('Clear cache', 'clearCache')
    .addToUi();
}

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

  var wanted = [
    CONFIG.columns.publisherDomain, CONFIG.columns.bundleId, CONFIG.columns.developer,
    CONFIG.columns.appName, CONFIG.columns.iabCode, CONFIG.columns.storeUrl
  ];
  if (CONFIG.writeNotes && CONFIG.columns.notes) wanted.push(CONFIG.columns.notes);

  var added = [];
  wanted.forEach(function (name) {
    if (findColumn_(header, name) === -1) {
      header.push(name);
      added.push(name);
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

function resolveColumns_(sheet) {
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var header = sheet.getRange(CONFIG.headerRow, 1, 1, lastCol).getValues()[0];
  var idx = {};
  var missing = [];

  Object.keys(CONFIG.columns).forEach(function (key) {
    var name = CONFIG.columns[key];
    if (!name) { idx[key] = -1; return; }
    var at = findColumn_(header, name);
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
 * Looks up one bundle ID and returns every field, using placeholders for
 * anything that could not be established. Never fabricates a value.
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

  var record = pixalateLookup_(bundleId);

  if (!record.found) {
    out.notes.push('No Pixalate match for "' + bundleId + '" (' + record.diagnostic + ').');
    // A store URL is still derivable from the bundle ID alone.
    var fallbackUrl = deriveStoreUrl_(bundleId, null, guessPlatform_(bundleId));
    if (fallbackUrl) {
      out.storeUrl = fallbackUrl;
      out.notes.push('Store URL derived from the bundle ID, not confirmed against Pixalate.');
    }
    return out;
  }

  var data = record.data;

  var developer = pluck_(data, ['developer', 'developerName', 'publisher', 'publisherName',
                               'seller', 'sellerName', 'artistName', 'author', 'companyName']);
  var appName = pluck_(data, ['appTitle', 'appName', 'title', 'name', 'trackName']);
  var category = pluck_(data, ['iabCategory', 'iab_category', 'category', 'categoryName',
                               'primaryCategory', 'genre', 'primaryGenreName', 'genres']);
  var apiUrl = pluck_(data, ['storeUrl', 'appStoreUrl', 'store_url', 'url', 'appUrl',
                             'trackViewUrl', 'link']);
  var trackId = pluck_(data, ['trackId', 'track_id', 'storeId', 'appleId', 'itunesId']);

  if (developer) out.developer = String(developer).trim();
  else out.notes.push('Developer not present in the Pixalate record.');

  if (appName) out.appName = String(appName).trim();
  else out.notes.push('App Name not present in the Pixalate record.');

  // --- IAB category ---
  if (!category) {
    out.iabCode = PLACEHOLDER.missing;
    out.notes.push('No category shown for this app - IAB code cannot be derived.');
  } else {
    var raw = Array.isArray(category) ? category[0] : category;
    var mapped = mapIabCategory_(String(raw));
    if (!mapped.code) {
      out.iabCode = PLACEHOLDER.unclear;
      out.notes.push('Category "' + raw + '" has no confident IAB 1.0 match - please confirm.');
    } else {
      out.iabCode = mapped.code;
      if (mapped.confidence !== 'exact' && mapped.confidence !== 'synonym') {
        out.notes.push('Category "' + raw + '" mapped to ' + mapped.code + ' (' + mapped.name +
                       ') by ' + mapped.confidence + ' match - please confirm.');
      } else if (mapped.soft) {
        out.notes.push('Category "' + raw + '" has no exact IAB 1.0 equivalent; ' +
                       mapped.code + ' (' + mapped.name + ') is the closest - please confirm.');
      }
    }
  }

  // --- store URL ---
  var platform = pluck_(data, ['device', 'platform', 'os', 'appStore']) || guessPlatform_(bundleId);
  var storeUrl = looksLikeStoreUrl_(apiUrl) ? String(apiUrl).trim()
                                            : deriveStoreUrl_(bundleId, trackId, platform);
  if (storeUrl) {
    out.storeUrl = storeUrl;
  } else {
    out.storeUrl = PLACEHOLDER.missing;
    out.notes.push('No store link found and none could be derived.');
  }

  out.ok = (out.developer !== PLACEHOLDER.missing && out.appName !== PLACEHOLDER.missing &&
            out.iabCode !== PLACEHOLDER.missing && out.iabCode !== PLACEHOLDER.unclear &&
            out.storeUrl !== PLACEHOLDER.missing);
  return out;
}

/** Tries each endpoint x platform until one returns usable JSON. */
function pixalateLookup_(bundleId) {
  var cache = CacheService.getScriptCache();
  var cacheKey = 'px_' + Utilities.base64Encode(bundleId).substring(0, 200);
  var hit = cache.get(cacheKey);
  if (hit) {
    try {
      var parsed = JSON.parse(hit);
      if (parsed && parsed.found) return parsed;
    } catch (e) { /* fall through and re-fetch */ }
  }

  var platforms = /^\d+$/.test(bundleId) ? ['ios'] : ['android', 'ios'];
  var tried = [];

  for (var e = 0; e < ENDPOINTS.length; e++) {
    for (var p = 0; p < platforms.length; p++) {
      var url = ENDPOINTS[e](bundleId, platforms[p]);
      var res = httpGetJson_(url);
      tried.push(shortUrl_(url) + ' -> ' + res.status);

      if (res.json && hasAppData_(res.json)) {
        var record = { found: true, data: unwrap_(res.json), diagnostic: 'via ' + shortUrl_(url) };
        cache.put(cacheKey, JSON.stringify(record), CONFIG.cacheHours * 3600);
        return record;
      }
    }
  }
  return { found: false, data: null, diagnostic: 'tried ' + tried.join('; ') };
}

function httpGetJson_(url) {
  try {
    var response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: true,
      headers: { 'Accept': 'application/json' }
    });
    var status = response.getResponseCode();
    var body = response.getContentText();
    if (status < 200 || status >= 300) return { status: status, json: null, body: body };
    try {
      return { status: status, json: JSON.parse(body), body: body };
    } catch (parseErr) {
      return { status: String(status) + ' (not JSON)', json: null, body: body };
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
 * Keeps the script working if Pixalate reshapes its JSON.
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
  if (/^\d+$/.test(String(bundleId))) return 'ios';
  return 'android';
}

function looksLikeStoreUrl_(url) {
  return /^https?:\/\/(apps\.apple\.com|itunes\.apple\.com|play\.google\.com)/i.test(String(url || ''));
}

function deriveStoreUrl_(bundleId, trackId, platform) {
  var id = String(bundleId || '').trim();
  var track = String(trackId || '').trim();
  var plat = String(platform || '').toLowerCase();

  if (/^\d+$/.test(id)) return 'https://apps.apple.com/us/app/id' + id;
  if (/^\d+$/.test(track)) return 'https://apps.apple.com/us/app/id' + track;
  if (/ios|apple|itunes/.test(plat) && !/^\d+$/.test(track)) return '';  // need the numeric id
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
  var platforms = /^\d+$/.test(sample) ? ['ios'] : ['android', 'ios'];
  var anyOk = false;

  for (var e = 0; e < ENDPOINTS.length; e++) {
    for (var p = 0; p < platforms.length; p++) {
      var url = ENDPOINTS[e](sample, platforms[p]);
      var res = httpGetJson_(url);
      var usable = res.json && hasAppData_(res.json);
      if (usable) anyOk = true;
      lines.push((usable ? 'WORKS  ' : 'no     ') + url);
      lines.push('   status: ' + res.status);
      if (res.body) lines.push('   body: ' + res.body.substring(0, 300).replace(/\s+/g, ' '));
      lines.push('');
    }
  }

  lines.push(anyOk
    ? 'At least one endpoint works - you can run "3. Fill empty rows".'
    : 'No endpoint returned app data. Open the ratings.pixalate.com page in Chrome, ' +
      'check DevTools > Network > Fetch/XHR for the request it makes, and paste that ' +
      'URL shape into the ENDPOINTS list at the top of Code.gs.');

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
