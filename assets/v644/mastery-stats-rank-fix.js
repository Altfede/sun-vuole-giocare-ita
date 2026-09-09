(function(){'use strict';
if(window.__starBrawl644MasteryStatsFix)return;window.__starBrawl644MasteryStatsFix=true;
var d=document,KEY='starbrawl_mastery_v1';
var MT=[
 {n:'BRONZO',m:0,c:'#b66c3a'},{n:'ARGENTO',m:150,c:'#b9c5d2'},{n:'ORO',m:400,c:'#f0bd2e'},{n:'DIAMANTE',m:800,c:'#66dfff'},
 {n:'MITICO',m:1400,c:'#ff5f9f'},{n:'SUPREMO',m:1800,c:'#e65cff'},{n:'LEGGENDARIO',m:2200,c:'#ff9b48'},{n:'STELLARE',m:2800,c:'#55e0c2'},
 {n:'COSMICO',m:3200,c:'#b774ff'},{n:'TRASCENDENTE',m:4000,c:'#ffe36b'},{n:'CELESTIALE',m:4500,c:'#a8f0ff'},{n:'ETERNO',m:5000,c:'#ffffff'}
];
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'}[c]})}
function tier(p){for(var i=MT.length-1;i>=0;i--)if(p>=MT[i].m)return MT[i];return MT[0]}
function fighterName(id){var a=d.querySelector('.art[data-detail="'+String(id).replace(/"/g,'')+'"]'),c=a&&a.closest('.card'),n=c&&c.querySelector('.name');return n&&n.textContent?n.textContent.trim():id||'—'}
function best(){var x=read(),id='',points=0,k;for(k in x){var p=Math.max(0,+x[k]||0);if(!id||p>points){id=k;points=p}}var t=tier(points);return{id:id,points:points,tier:t.n,color:t.c,name:id?fighterName(id):'Nessun fighter'}}
var st=d.createElement('style');st.id='v644Style';st.textContent=`
#v593BestMastery{display:none!important}#v644BestMastery{border-color:var(--mc,#66dfff)!important}.v644MasterIcon{width:58px;height:58px;border-radius:16px;display:grid;place-items:center;border:3px solid var(--mc);background:radial-gradient(circle at 50% 38%,color-mix(in srgb,var(--mc) 45%,#fff),#10192a 68%);box-shadow:0 0 14px color-mix(in srgb,var(--mc) 55%,transparent);font:1000 29px Arial;color:#fff;text-shadow:0 2px 4px #000}.v644MasterRank{font:1000 15px Arial;color:var(--mc,#fff);margin-top:3px;line-height:1.05}
`;(d.head||d.documentElement).appendChild(st);
function ensure(){var grid=d.querySelector('#v593Progression .v593ProgGrid');if(!grid)return null;var old=d.getElementById('v593BestMastery'),box=d.getElementById('v644BestMastery');if(!box){box=d.createElement('div');box.id='v644BestMastery';box.className='v593ProgCard';if(old&&old.parentNode===grid)grid.insertBefore(box,old);else grid.insertBefore(box,grid.firstChild)}return box}
function render(){try{var box=ensure();if(!box)return false;var b=best();box.style.setProperty('--mc',b.color);box.innerHTML='<div class="v593ProgIcon"><div class="v644MasterIcon" style="--mc:'+b.color+'">◆</div></div><div class="v593ProgText"><div class="v593ProgLabel">MIGLIORE MAESTRIA</div><div class="v644MasterRank">'+esc(b.tier)+'</div><div class="v593ProgSub">'+esc(b.name)+'</div><div class="v593ProgPts">'+b.points+' MP</div></div>';return true}catch(e){return false}}
function apiBest(){var b=best();return{id:b.id,points:b.points,tier:b.tier}}
function patchApis(){try{if(window.__v609StatsProgression)window.__v609StatsProgression.bestMastery=apiBest}catch(e){}try{if(window.__v593StatsProgression)window.__v593StatsProgression.bestMastery=apiBest}catch(e){}}
function scan(){patchApis();var p=d.getElementById('v552Stats');if(p&&p.classList.contains('on'))render();else if(!d.getElementById('v644BestMastery'))render()}
render();patchApis();setTimeout(scan,350);setTimeout(scan,1000);setInterval(scan,600);
window.__v644MasteryStatsFix={tiers:MT,best:best,refresh:render,tierForPoints:function(p){return tier(Math.max(0,+p||0)).n}};
})();