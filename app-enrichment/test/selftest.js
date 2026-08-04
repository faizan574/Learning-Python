const fs=require('fs');
const base=__dirname+'/../';
// Stub Apps Script globals used inside functions we call
global.Logger={log:()=>{}};
global.Utilities={base64Encode:s=>Buffer.from(s).toString('base64'),sleep:()=>{}};
global.CacheService={getScriptCache:()=>({get:()=>null,put:()=>{},removeAll:()=>{}})};
eval(fs.readFileSync(base+'IabTaxonomy.gs','utf8'));
eval(fs.readFileSync(base+'Code.gs','utf8'));

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

console.log('\n=== enrichBundle_ (stubbed network) ===');
const realLookup=pixalateLookup_;
global.pixalateLookup_=()=>({found:true,diagnostic:'stub',data:{
  appTitle:'Shazam',developer:'Apple Inc.',category:'Music and Audio',trackId:'284993459',device:'ios'}});
pixalateLookup_=global.pixalateLookup_;
let r=enrichBundle_('284993459');
eq('developer',r.developer,'Apple Inc.');
eq('appName',r.appName,'Shazam');
eq('iabCode',r.iabCode,'IAB1-6');
eq('storeUrl',r.storeUrl,'https://apps.apple.com/us/app/id284993459');
eq('ok',r.ok,true);
eq('no spurious notes',r.notes.length,0);

console.log('\n--- missing category path ---');
pixalateLookup_=()=>({found:true,diagnostic:'stub',data:{appTitle:'X',developer:'D',bundleId:'com.x.y'}});
r=enrichBundle_('com.x.y');
eq('iab missing',r.iabCode,'[missing]');
eq('still ok=false',r.ok,false);
console.log('   notes:',r.notes);

console.log('\n--- not found path ---');
pixalateLookup_=()=>({found:false,diagnostic:'tried a; b',data:null});
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

console.log(fail? '\n*** '+fail+' FAILURE(S) ***' : '\n*** ALL CHECKS PASSED ***');
