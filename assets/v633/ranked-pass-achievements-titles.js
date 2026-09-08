(function(){'use strict';
if(window.__starBrawl633Progression)return;window.__starBrawl633Progression=true;
var d=document,GAME='starbrawl_v4',META='starbrawl_ranked_seasons_v1',ACH='starbrawl_achievements_v1',TITLES='starbrawl_titles_v1';
function read(k){try{return JSON.parse(localStorage.getItem(k)||'{}')||{}}catch(e){return{}}}
function write(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var EXTRA_PASS=[
 {xp:5250,t:'coins',v:600,n:'600 MONETE',i:'◉'},
 {xp:5500,t:'power',v:180,n:'180 ENERGIA',i:'⚡'},
 {xp:5750,t:'coins',v:700,n:'700 MONETE',i:'◉'},
 {xp:6000,t:'power',v:200,n:'200 ENERGIA',i:'⚡'},
 {xp:6250,t:'mix',c:800,p:220,n:'CACHE RANKED IV',i:'◆'},
 {xp:6500,t:'coins',v:800,n:'800 MONETE',i:'◉'},
 {xp:6750,t:'power',v:240,n:'240 ENERGIA',i:'⚡'},
 {xp:7000,t:'coins',v:900,n:'900 MONETE',i:'◉'},
 {xp:7250,t:'power',v:280,n:'280 ENERGIA',i:'⚡'},
 {xp:7500,t:'mix',c:1100,p:300,n:'CACHE RANKED V',i:'◆'},
 {xp:7750,t:'coins',v:1000,n:'1000 MONETE',i:'◉'},
 {xp:8000,t:'power',v:320,n:'320 ENERGIA',i:'⚡'},
 {xp:8250,t:'coins',v:1200,n:'1200 MONETE',i:'◉'},
 {xp:8500,t:'power',v:360,n:'360 ENERGIA',i:'⚡'},
 {xp:8750,t:'mix',c:1500,p:400,n:'CACHE RANKED VI',i:'◆'},
 {xp:9000,t:'coins',v:1400,n:'1400 MONETE',i:'◉'},
 {xp:9250,t:'power',v:420,n:'420 ENERGIA',i:'⚡'},
 {xp:9500,t:'coins',v:1800,n:'1800 MONETE',i:'◉'},
 {xp:9750,t:'power',v:500,n:'500 ENERGIA',i:'⚡'},
 {xp:10000,t:'final',c:2500,p:700,n:'NEON ASCENDANT',i:'✦'}
];
var EXTRA_ACH=[
 {id:'kills_250',cat:'COMBATTIMENTO',icon:'⚔',name:'MINACCIA',desc:'Raggiungi 250 eliminazioni totali.',key:'kills',goal:250,reward:{coins:400}},
 {id:'kills_2500',cat:'COMBATTIMENTO',icon:'☠',name:'ANNIENTATORE',desc:'Raggiungi 2500 eliminazioni totali.',key:'kills',goal:2500,reward:{coins:1200}},
 {id:'kills_5000',cat:'COMBATTIMENTO',icon:'✹',name:'FINE DELLA LINEA',desc:'Raggiungi 5000 eliminazioni totali.',key:'kills',goal:5000,reward:{boxes:5}},
 {id:'games_250',cat:'COMBATTIMENTO',icon:'◉',name:'MARATONETA',desc:'Gioca 250 partite.',key:'games',goal:250,reward:{power:700}},
 {id:'games_500',cat:'COMBATTIMENTO',icon:'∞',name:'NON SI MOLLA',desc:'Gioca 500 partite.',key:'games',goal:500,reward:{power:1200}},
 {id:'wins_250',cat:'COMBATTIMENTO',icon:'♛',name:'CONQUISTATORE',desc:'Vinci 250 partite.',key:'wins',goal:250,reward:{boxes:4}},
 {id:'wins_500',cat:'COMBATTIMENTO',icon:'♚',name:'IMPERATORE',desc:'Vinci 500 partite.',key:'wins',goal:500,reward:{boxes:6}},
 {id:'collector_40',cat:'COLLEZIONE',icon:'★',name:'QUASI COMPLETO',desc:'Sblocca almeno 40 fighter.',key:'unlocked',goal:40,reward:{coins:1000}},
 {id:'boxes_150',cat:'COLLEZIONE',icon:'▣',name:'APERTURA SELVAGGIA',desc:'Apri 150 casse.',key:'chests',goal:150,reward:{power:900}},
 {id:'boxes_300',cat:'COLLEZIONE',icon:'◆',name:'RE DEL BOTTINO',desc:'Apri 300 casse.',key:'chests',goal:300,reward:{boxes:5}},
 {id:'skins_8',cat:'COLLEZIONE',icon:'✧',name:'GUARDAROBA STELLARE',desc:'Possiedi tutte le 8 skin speciali dello Shop.',key:'skins',goal:8,reward:{coins:1200}},
 {id:'master_legendary_2200',cat:'MAESTRIA',icon:'◇',name:'MAESTRIA LEGGENDARIA',desc:'Porta un fighter ad almeno 2200 MP.',key:'mastery',goal:2200,reward:{coins:1000}},
 {id:'master_cosmic_3200',cat:'MAESTRIA',icon:'✺',name:'MAESTRIA COSMICA II',desc:'Porta un fighter ad almeno 3200 MP.',key:'mastery',goal:3200,reward:{boxes:3}},
 {id:'master_eternal_5000',cat:'MAESTRIA',icon:'∞',name:'MAESTRIA ETERNA',desc:'Porta un fighter ad almeno 5000 MP.',key:'mastery',goal:5000,reward:{boxes:6}},
 {id:'master_total_15000',cat:'MAESTRIA',icon:'✦',name:'15000 MP TOTALI',desc:'Accumula 15000 MP sommando tutti i fighter.',key:'masteryTotal',goal:15000,reward:{boxes:5}},
 {id:'ranked_250',cat:'RANKED',icon:'▲',name:'PRIMI PASSI RANKED',desc:'Raggiungi 250 RP in Ranked.',key:'rankedBest',goal:250,reward:{coins:300}},
 {id:'ranked_1200',cat:'RANKED',icon:'◆',name:'ASCESA RANKED',desc:'Raggiungi 1200 RP in Ranked.',key:'rankedBest',goal:1200,reward:{coins:700}},
 {id:'ranked_2400',cat:'RANKED',icon:'♛',name:'VERTICE RANKED',desc:'Raggiungi 2400 RP in Ranked.',key:'rankedBest',goal:2400,reward:{boxes:3}},
 {id:'cups_7500',cat:'PROGRESSIONE',icon:'🏆',name:'7500 COPPE',desc:'Raggiungi 7500 coppe totali.',key:'cups',goal:7500,reward:{coins:1500}},
 {id:'cups_10000',cat:'PROGRESSIONE',icon:'♛',name:'10000 COPPE',desc:'Raggiungi 10000 coppe totali.',key:'cups',goal:10000,reward:{boxes:7}},
 {id:'boss_100',cat:'BOSS FIGHT',icon:'☠',name:'TITAN SLAYER',desc:'Sconfiggi 100 boss.',key:'bossWins',goal:100,reward:{boxes:7}}
];
var EXTRA_TITLES=[
 {id:'kills_250',icon:'⚔',name:'MINACCIA',desc:'Raggiungi 250 eliminazioni.',key:'kills',goal:250},
 {id:'kills_2500',icon:'☠',name:'ANNIENTATORE',desc:'Raggiungi 2500 eliminazioni.',key:'kills',goal:2500},
 {id:'kills_5000',icon:'✹',name:'FINE DELLA LINEA',desc:'Raggiungi 5000 eliminazioni.',key:'kills',goal:5000,rainbow:true},
 {id:'games_250',icon:'◉',name:'MARATONETA',desc:'Gioca 250 partite.',key:'games',goal:250},
 {id:'games_500',icon:'∞',name:'INARRESTABILE',desc:'Gioca 500 partite.',key:'games',goal:500},
 {id:'wins_250',icon:'♛',name:'CONQUISTATORE',desc:'Vinci 250 partite.',key:'wins',goal:250},
 {id:'wins_500',icon:'♚',name:'IMPERATORE',desc:'Vinci 500 partite.',key:'wins',goal:500,rainbow:true},
 {id:'collector_40',icon:'★',name:'GENERALE DEL ROSTER',desc:'Sblocca 40 fighter.',key:'unlocked',goal:40},
 {id:'boxes_150',icon:'▣',name:'CACCIATORE DI CASSE II',desc:'Apri 150 casse.',key:'chests',goal:150},
 {id:'boxes_300',icon:'◆',name:'RE DEL BOTTINO',desc:'Apri 300 casse.',key:'chests',goal:300},
 {id:'skins_8',icon:'✧',name:'STILISTA STELLARE',desc:'Possiedi 8 skin speciali.',key:'skins',goal:8},
 {id:'master_legendary_2200',icon:'◇',name:'LEGGENDA DELLA MAESTRIA',desc:'Raggiungi 2200 MP con un fighter.',key:'mastery',goal:2200},
 {id:'master_cosmic_3200',icon:'✺',name:'ANIMA COSMICA',desc:'Raggiungi 3200 MP con un fighter.',key:'mastery',goal:3200},
 {id:'master_eternal_5000',icon:'∞',name:'ETERNO',desc:'Raggiungi 5000 MP con un fighter.',key:'mastery',goal:5000,rainbow:true},
 {id:'master_total_15000',icon:'✦',name:'ARCHIVIO VIVENTE',desc:'Accumula 15000 MP totali.',key:'masteryTotal',goal:15000},
 {id:'ranked_250',icon:'▲',name:'RANKED VETERAN',desc:'Raggiungi 250 RP.',key:'rankedBest',goal:250},
 {id:'ranked_1200',icon:'◆',name:'ASCESO',desc:'Raggiungi 1200 RP.',key:'rankedBest',goal:1200},
 {id:'ranked_2400',icon:'♛',name:'GLADIATORE RANKED',desc:'Raggiungi 2400 RP.',key:'rankedBest',goal:2400},
 {id:'cups_7500',icon:'🏆',name:'IMPERO DELLE COPPE',desc:'Raggiungi 7500 coppe.',key:'cups',goal:7500},
 {id:'cups_10000',icon:'♛',name:'CINQUE CIFRE',desc:'Raggiungi 10000 coppe.',key:'cups',goal:10000,rainbow:true},
 {id:'boss_100',icon:'☠',name:'TITAN SLAYER',desc:'Sconfiggi 100 boss.',key:'bossWins',goal:100},
 {id:'ranked_pass_master',icon:'✦',name:'NEON ASCENDANT',desc:'Completa tutte le 40 soglie del Pass Ranked.',key:'rankedBest',goal:999999,rainbow:true}
];
var css=d.createElement('style');css.id='v633Style';css.textContent=`
#v631Pass .v631PassTop>div:last-child{display:none!important}#v633ExtraPass{display:none;margin-top:9px}.v631Pane.on+#v633ExtraPass{display:block}.v633PassSummary{padding:12px;border-radius:14px;background:linear-gradient(135deg,#40235f,#0d5163);border:2px solid #a57dff;margin-bottom:9px}.v633PassTop{display:flex;justify-content:space-between;align-items:end;gap:10px}.v633PassTop small{display:block;font:900 7px Arial;color:#c8b9e9}.v633PassTop b{display:block;font:1000 22px Arial;margin-top:2px}.v633PassBar{height:11px;border-radius:99px;overflow:hidden;background:#07101b;border:1px solid #ffffff22;margin-top:8px}.v633PassBar i{display:block;height:100%;background:linear-gradient(90deg,#9d73ff,#59e7ff,#ffe169);box-shadow:0 0 10px #9d73ff}.v633PassNote{font:800 7px Arial;color:#b7c6db;margin-top:5px}.v633SectionTitle{font:1000 10px Arial;letter-spacing:1px;color:#d9ccff;margin:12px 2px 7px}.v633Tier{display:grid;grid-template-columns:40px 48px 1fr auto;gap:7px;align-items:center;padding:8px;border-radius:12px;background:#121f33;border:1px solid #354d6c;margin-bottom:7px}.v633Tier.ready{border-color:#9e7cff;box-shadow:0 0 0 1px #9e7cff22}.v633Tier.done{opacity:.55}.v633Num{width:40px;height:40px;border-radius:10px;background:#091322;display:grid;place-items:center;font:1000 12px Arial}.v633Icon{width:48px;height:42px;border-radius:10px;background:linear-gradient(135deg,#663da1,#125f78);display:grid;place-items:center;font:1000 20px Arial;border:1px solid #ffffff30}.v633Reward{font:1000 9px Arial}.v633Req{font:800 6.5px Arial;color:#9fb1c7;margin-top:2px}.v633Claim{min-width:68px;min-height:35px;border:0;border-radius:8px;background:#a783ff;color:#fff;font:1000 7px Arial}.v633Claim:disabled{background:#27374c;color:#7f91a7}.v633NewBadge{display:inline-block;padding:3px 6px;border-radius:99px;background:#6b4cc0;color:#fff;font:1000 6px Arial;margin-left:5px}@media(max-width:390px){.v633Tier{grid-template-columns:36px 42px 1fr auto;gap:5px;padding:7px}.v633Num{width:36px;height:36px}.v633Icon{width:42px;height:38px}.v633Claim{min-width:57px;padding:0 5px;font-size:6px}}
`;(d.head||d.documentElement).appendChild(css);
function currentLevel(xp){var l=Math.min(20,Math.floor(Math.max(0,xp)/250));for(var i=0;i<EXTRA_PASS.length;i++)if(xp>=EXTRA_PASS[i].xp)l=21+i;return Math.min(40,l)}
function reward(x,g){if(x.t==='coins')g.coins=Math.max(0,+g.coins||0)+x.v;else if(x.t==='power')g.power=Math.max(0,+g.power||0)+x.v;else{g.coins=Math.max(0,+g.coins||0)+(x.c||0);g.power=Math.max(0,+g.power||0)+(x.p||0)}}
function unlockPassTitle(){var t=read(TITLES);t.unlocked=t.unlocked||{};t.unlocked.ranked_pass_master=t.unlocked.ranked_pass_master||Date.now();write(TITLES,t)}
function claimPass(n){if(n<21||n>40)return;var x=EXTRA_PASS[n-21],m=read(META);m.claimed=Array.isArray(m.claimed)?m.claimed:[];m.rxp=Math.max(0,+m.rxp||0);if(m.claimed.indexOf(n)>=0||m.rxp<x.xp)return;var g=read(GAME);reward(x,g);m.claimed.push(n);if(n===40){m.passMaster=true;unlockPassTitle()}write(GAME,g);write(META,m);renderExtraPass();try{if(window.__v631RankedSeasons&&typeof window.__v631RankedSeasons.refresh==='function')window.__v631RankedSeasons.refresh()}catch(e){}}
function ensureExtraPass(){var base=d.getElementById('v631Pass');if(!base||!base.parentNode)return null;var p=d.getElementById('v633ExtraPass');if(!p){p=d.createElement('div');p.id='v633ExtraPass';base.parentNode.insertBefore(p,base.nextSibling)}return p}
function renderExtraPass(){var p=ensureExtraPass();if(!p)return;var m=read(META);m.claimed=Array.isArray(m.claimed)?m.claimed:[];m.rxp=Math.max(0,+m.rxp||0);var lvl=currentLevel(m.rxp),pct=Math.max(0,Math.min(100,m.rxp/10000*100)),h='<div class="v633PassSummary"><div class="v633PassTop"><div><small>RANKED PASS ESTESO</small><b>'+m.rxp+' / 10000 XP</b></div><div style="text-align:right"><small>LIVELLO</small><b>'+lvl+' / 40</b></div></div><div class="v633PassBar"><i style="width:'+pct+'%"></i></div><div class="v633PassNote">20 nuove soglie avanzate · livello 40: titolo esclusivo NEON ASCENDANT</div></div><div class="v633SectionTitle">SOGLIE 21–40 <span class="v633NewBadge">NUOVE</span></div>';
for(var i=0;i<EXTRA_PASS.length;i++){var x=EXTRA_PASS[i],n=21+i,done=m.claimed.indexOf(n)>=0,ready=m.rxp>=x.xp;h+='<div class="v633Tier '+(ready?'ready ':'')+(done?'done':'')+'"><div class="v633Num">'+n+'</div><div class="v633Icon">'+x.i+'</div><div><div class="v633Reward">'+esc(x.n)+'</div><div class="v633Req">'+x.xp+' XP</div></div><button class="v633Claim" data-v633claim="'+n+'" '+(!ready||done?'disabled':'')+'>'+(done?'RISCOSSA':ready?'RISCATTA':'BLOCCATA')+'</button></div>'}
p.innerHTML=h;var bs=p.querySelectorAll('[data-v633claim]');for(i=0;i<bs.length;i++)bs[i].onclick=function(){claimPass(+this.getAttribute('data-v633claim'))}}
function hasId(a,id){for(var i=0;i<a.length;i++)if(a[i]&&a[i].id===id)return true;return false}
function extendAchievements(){var api=window.__v598Achievements;if(!api||!Array.isArray(api.list))return false;for(var i=0;i<EXTRA_ACH.length;i++)if(!hasId(api.list,EXTRA_ACH[i].id))api.list.push(EXTRA_ACH[i]);return true}
function extendTitles(){var api=window.__v603Titles||window.__v599Titles;if(!api||!Array.isArray(api.list))return false;for(var i=0;i<EXTRA_TITLES.length;i++)if(!hasId(api.list,EXTRA_TITLES[i].id))api.list.push(EXTRA_TITLES[i]);try{if(typeof api.current==='function')api.current()}catch(e){}return true}
function markCounts(){var a=window.__v598Achievements,t=window.__v603Titles||window.__v599Titles,ap=d.getElementById('v598Summary');if(ap&&a&&a.list)ap.setAttribute('data-v633-total',a.list.length);var tp=d.getElementById('v599Equipped');if(tp&&t&&t.list)tp.setAttribute('data-v633-total',t.list.length)}
function tick(){extendAchievements();extendTitles();renderExtraPass();markCounts()}
tick();setTimeout(tick,350);setTimeout(tick,1000);setInterval(tick,900);
window.__v633Progression={pass:EXTRA_PASS,achievements:EXTRA_ACH,titles:EXTRA_TITLES,refresh:tick};
})();