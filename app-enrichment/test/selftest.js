const fs=require('fs');
const base=__dirname+'/../';
// Stub Apps Script globals used inside functions we call
global.Logger={log:()=>{}};
global.Utilities={base64Encode:s=>Buffer.from(s).toString('base64'),base64EncodeWebSafe:s=>Buffer.from(s).toString('base64url'),sleep:()=>{}};
global.CacheService={getScriptCache:()=>({get:()=>null,put:()=>{},removeAll:()=>{}})};
eval(fs.readFileSync(base+'IabTaxonomy.gs','utf8'));
eval(fs.readFileSync(base+'Code.gs','utf8'));
const origResolveApp=resolveApp_;  // capture before any stubbing

let fail=0;
const eq=(label,got,want)=>{const ok=got===want;if(!ok)fail++;console.log((ok?'PASS':'FAIL')+'  '+label+'  got='+JSON.stringify(got)+(ok?'':' want='+JSON.stringify(want)));};

console.log('=== taxonomy ==='); eq('rows',IAB_TAXONOMY.length,392);
eq('IAB5-1 date glitch fixed', iabIndex_().byCode['iab5-1'].name, '7-12 Education');

console.log('\n=== runSelfTest ==='); console.log(runSelfTest());

console.log('\n=== category mapping ===');
const m=s=>mapIabCategory_(s);
eq('Music and Audio', m('Music and Audio').code,'IAB1-6');
eq('  MUSIC & AUDIO  (case/space)', m('  MUSIC & AUDIO  ').code,'IAB1-6');
eq('Social (soft)', m('Social').soft, true);
eq('Social code', m('Social').code,'IAB14');
eq('Business exact conf', m('Business').confidence,'exact');
eq('gibberish -> none', m('zzzqqq nonsense').code,'');
eq('empty -> none', m('').confidence,'none');
const fz=m('Board Games');
console.log('   fuzzy "Board Games" ->',fz.code,fz.name,fz.confidence);

console.log('\n=== store URL ===');
eq('numeric bundle -> apple', deriveStoreUrl_('336353151',null,'ios'),'https://apps.apple.com/us/app/id336353151');
eq('android bundle', deriveStoreUrl_('com.foo.bar',null,'android'),'https://play.google.com/store/apps/details?id=com.foo.bar');
eq('trackId wins for ios', deriveStoreUrl_('com.foo.bar','519675128','ios'),'https://apps.apple.com/us/app/id519675128');
eq('looksLikeStoreUrl', looksLikeStoreUrl_('https://play.google.com/store/apps/details?id=x'),true);
eq('looksLikeStoreUrl false', looksLikeStoreUrl_('https://evil.com/x'),false);

console.log('\n=== pluck_ (nested + array unwrap) ===');
eq('nested developer', pluck_({a:{b:{developer:'Acme'}}},['developer']),'Acme');
eq('array first', pluck_({genres:['Music','Audio']},['genres']),'Music');
eq('skips empty', pluck_({title:'',name:'Real'},['title','name']),'Real');
eq('missing -> null', pluck_({x:1},['developer']),null);

console.log('\n=== unwrap_/hasAppData_ ===');
eq('unwrap data', unwrap_({data:{appTitle:'X'}}).appTitle,'X');
eq('unwrap array', unwrap_([{appTitle:'Y'}]).appTitle,'Y');
eq('hasAppData true', hasAppData_({data:{appTitle:'X'}}),true);
eq('hasAppData false', hasAppData_({error:'nope'}),false);

console.log('\n=== enrichBundle_ (stubbed resolver) ===');
resolveApp_=()=>({found:true,source:'pixalate',
  appName:'Shazam',developer:'Apple Inc.',category:'Music and Audio',trackId:'284993459',platform:'ios'});
let r=enrichBundle_('284993459');
eq('developer',r.developer,'Apple Inc.');
eq('appName',r.appName,'Shazam');
eq('iabCode',r.iabCode,'IAB1-6');
eq('storeUrl',r.storeUrl,'https://apps.apple.com/us/app/id284993459');
eq('ok',r.ok,true);
eq('no spurious notes',r.notes.length,0);

console.log('\n--- missing category path ---');
resolveApp_=()=>({found:true,source:'pixalate',appName:'X',developer:'D',platform:'android'});
r=enrichBundle_('com.x.y');
eq('iab missing',r.iabCode,'[missing]');
eq('still ok=false',r.ok,false);
console.log('   notes:',r.notes);

console.log('\n--- not found path ---');
resolveApp_=()=>({found:false,attempts:['pixalate 403','itunes 200','play 404']});
r=enrichBundle_('com.nope.app');
eq('dev missing',r.developer,'[missing]');
eq('url still derived',r.storeUrl,'https://play.google.com/store/apps/details?id=com.nope.app');
console.log('   notes:',r.notes);

console.log('\n=== placeholders ===');
eq('isPlaceholder',isPlaceholder_('[missing]'),true);
eq('isPlaceholder case',isPlaceholder_('[Please Provide]'),true);
eq('normal value',isPlaceholder_('Shazam'),false);

console.log('\n=== header alias resolution (real sheet headers) ===');
const realHeader=['Publisher Domain','Bundle Id','Developer','App Name','IAB Category','Store URL'];
eq('Publisher Domain', resolveColumnIndex_(realHeader,'publisherDomain'),0);
eq('Bundle Id (case variant)', resolveColumnIndex_(realHeader,'bundleId'),1);
eq('Developer', resolveColumnIndex_(realHeader,'developer'),2);
eq('App Name', resolveColumnIndex_(realHeader,'appName'),3);
eq('IAB Category -> iabCode (alias)', resolveColumnIndex_(realHeader,'iabCode'),4);
eq('Store URL', resolveColumnIndex_(realHeader,'storeUrl'),5);
eq('Notes absent', resolveColumnIndex_(realHeader,'notes'),-1);
eq('exact primary still wins', resolveColumnIndex_(['IAB Category Code'],'iabCode'),0);
eq('unknown header', resolveColumnIndex_(['Nope'],'iabCode'),-1);

console.log('\n=== iTunes parsing (real response shape) ===');
const itunesJson={resultCount:1,results:[{trackId:737534965,trackName:'Blind - Professional Community',
  artistName:'Teamblind inc',sellerName:'Teamblind, Inc.',primaryGenreName:'Business',
  genres:['Business','Social Networking'],bundleId:'com.teamblind.blind',
  trackViewUrl:'https://apps.apple.com/us/app/blind-professional-community/id737534965'}]};
let attempts=[];
global.UrlFetchApp={fetch:()=>({getResponseCode:()=>200,getContentText:()=>JSON.stringify(itunesJson)})};
UrlFetchApp=global.UrlFetchApp;
let rec=lookupItunes_('737534965',attempts);
eq('itunes appName',rec.appName,'Blind - Professional Community');
eq('itunes developer',rec.developer,'Teamblind inc');
eq('itunes category',rec.category,'Business');
eq('itunes storeUrl',rec.storeUrl,'https://apps.apple.com/us/app/id737534965'.replace('id737534965','blind-professional-community/id737534965').replace('app/blind','app/blind'));
eq('itunes platform',rec.platform,'ios');

console.log('\n--- itunes empty result = clean miss ---');
UrlFetchApp={fetch:()=>({getResponseCode:()=>200,getContentText:()=>'{"resultCount":0,"results":[]}'})};
eq('empty -> null',lookupItunes_('99',[]),null);

console.log('\n=== Play HTML parsing ===');
const playHtml=`<html><head><title>1Weather: Forecast &amp; Radar - Apps on Google Play</title>
<meta property="og:title" content="1Weather: Forecast &amp; Radar - Apps on Google Play">
<meta name="description" content="Weather app by OneLouder Apps, trusted worldwide.">
</head><body><a href="/store/apps/dev?id=6853542116372249850"> OneLouder Apps </a>
<a href="/store/apps/category/WEATHER">Weather</a></body></html>`;
const pp=parsePlayHtml_(playHtml);
eq('play appName',pp.appName,'1Weather: Forecast & Radar');
eq('play developer',pp.developer,'OneLouder Apps');
eq('play category const',pp.playCategory,'WEATHER');
eq('WEATHER -> IAB',PLAY_CATEGORY_TO_IAB['WEATHER'],'IAB15-10');
eq('MUSIC_AND_AUDIO -> IAB',PLAY_CATEGORY_TO_IAB['MUSIC_AND_AUDIO'],'IAB1-6');
eq('SOCIAL soft',PLAY_CATEGORY_TO_IAB['SOCIAL'].soft,true);

console.log('\n--- html entity decoding ---');
eq('&amp;',decodeHtml_('Rock &amp; Roll'),'Rock & Roll');
eq('&#39;',decodeHtml_('Bob&#39;s App'),"Bob's App");
eq('numeric',decodeHtml_('caf&#233;'),'café');

console.log('\n--- lookupPlay_ end to end ---');
UrlFetchApp={fetch:()=>({getResponseCode:()=>200,getContentText:()=>playHtml})};
rec=lookupPlay_('com.handmark.expressweather',[]);
eq('play rec appName',rec.appName,'1Weather: Forecast & Radar');
eq('play rec iabCode',rec.iabCode,'IAB15-10');
eq('play rec storeUrl',rec.storeUrl,'https://play.google.com/store/apps/details?id=com.handmark.expressweather');

console.log('\n--- play 404 = miss ---');
UrlFetchApp={fetch:()=>({getResponseCode:()=>404,getContentText:()=>'not found'})};
eq('404 -> null',lookupPlay_('com.nope',[]),null);

console.log('\n=== enrichBundle_ via itunes source ===');
resolveApp_=origResolveApp;
CONFIG.sources=['itunes'];
UrlFetchApp={fetch:()=>({getResponseCode:()=>200,getContentText:()=>JSON.stringify(itunesJson)})};
let out=enrichBundle_('737534965');
eq('e2e developer',out.developer,'Teamblind inc');
eq('e2e appName',out.appName,'Blind - Professional Community');
eq('e2e iab (Business)',out.iabCode,'IAB3');
eq('e2e ok',out.ok,true);
console.log('   notes:',out.notes);

console.log('\n=== enrichBundle_ all sources fail ===');
UrlFetchApp={fetch:()=>({getResponseCode:()=>500,getContentText:()=>''})};
CONFIG.sources=['itunes','play'];
out=enrichBundle_('com.dead.app');
eq('fail developer',out.developer,'[missing]');
eq('fail url derived',out.storeUrl,'https://play.google.com/store/apps/details?id=com.dead.app');
console.log('   notes:',out.notes);

console.log(fail? '\n*** '+fail+' FAILURE(S) ***' : '\n*** ALL CHECKS PASSED ***');
