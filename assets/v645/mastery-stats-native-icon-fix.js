(function(){'use strict';
if(window.__starBrawl645MasteryStatsIconFix)return;window.__starBrawl645MasteryStatsIconFix=true;
var d=document,KEY='starbrawl_mastery_v1';
var MT=[
 {n:'BRONZO',m:0},{n:'ARGENTO',m:150},{n:'ORO',m:400},{n:'DIAMANTE',m:800},
 {n:'MITICO',m:1400},{n:'SUPREMO',m:1800},{n:'LEGGENDARIO',m:2200},{n:'STELLARE',m:2800},
 {n:'COSMICO',m:3200},{n:'TRASCENDENTE',m:4000},{n:'CELESTIALE',m:4500},{n:'ETERNO',m:5000}
];
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function tier(p){for(var i=MT.length-1;i>=0;i--)if(p>=MT[i].m)return MT[i];return MT[0]}
function fighterName(id){var a=d.querySelector('.art[data-detail="'+String(id).replace(/"/g,'')+'"]'),c=a&&a.closest('.card'),n=c&&c.querySelector('.name');return n&&n.textContent?n.textContent.trim():id||'—'}
function best(){var x=read(),id='',points=0,k;for(k in x){var p=Math.max(0,+x[k]||0);if(!id||p>points){id=k;points=p}}var t=tier(points);return{id:id,points:points,tier:t.n,name:id?fighterName(id):'Nessun fighter'}}
function nativeIcon(rank){
 try{if(window.__v609MasteryIcons&&typeof window.__v609MasteryIcons.icon==='function')return window.__v609MasteryIcons.icon(rank,false)}catch(e){}
 try{if(window.__v582MasteryIcons&&typeof window.__v582MasteryIcons.icon==='function')return window.__v582MasteryIcons.icon(rank,false)}catch(e){}
 return '<span class="v593FallbackMastery">◆</span>';
}
var st=d.createElement('style');st.id='v645Style';st.textContent='#v593BestMastery{display:none!important}#v644BestMastery{display:none!important}#v645BestMastery .v593ProgIcon .v582Icon{width:58px!important;height:54px!important}';(d.head||d.documentElement).appendChild(st);
function ensure(){var grid=d.querySelector('#v593Progression .v593ProgGrid');if(!grid)return null;var box=d.getElementById('v645BestMastery');if(!box){box=d.createElement('div');box.id='v645BestMastery';box.className='v593ProgCard';grid.insertBefore(box,grid.firstChild)}return box}
function render(){try{var box=ensure();if(!box)return false;var b=best();box.innerHTML='<div class="v593ProgIcon">'+nativeIcon(b.tier)+'</div><div class="v593ProgText"><div class="v593ProgLabel">MIGLIORE MAESTRIA</div><div class="v593ProgRank">'+esc(b.tier)+'</div><div class="v593ProgSub">'+esc(b.name)+'</div><div class="v593ProgPts">'+b.points+' MP</div></div>';return true}catch(e){return false}}
function apiBest(){var b=best();return{id:b.id,points:b.points,tier:b.tier}}
function patchApis(){try{if(window.__v609StatsProgression)window.__v609StatsProgression.bestMastery=apiBest}catch(e){}try{if(window.__v593StatsProgression)window.__v593StatsProgression.bestMastery=apiBest}catch(e){}}
function scan(){patchApis();render()}
render();patchApis();setTimeout(scan,350);setTimeout(scan,1000);setTimeout(scan,2200);setInterval(scan,650);
window.__v645MasteryStatsIconFix={tiers:MT,best:best,refresh:render,tierForPoints:function(p){return tier(Math.max(0,+p||0)).n}};
})();