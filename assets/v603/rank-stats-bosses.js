(function(){'use strict';
if(window.__starBrawl603RankStats)return;window.__starBrawl603RankStats=true;
var d=document,KEY='starbrawl_boss_v1';
var st=d.createElement('style');st.id='v603RankStatsStyle';st.textContent=`
#fightersScreen .rankChipV543{left:3px!important;top:3px!important;gap:2px!important;padding:2px 3px 2px 2px!important;border-radius:6px!important;font-size:5.8px!important;line-height:1!important;box-shadow:0 1px 4px #0008!important}
#fightersScreen .rankChipV543 img{width:14px!important;height:14px!important;border-radius:4px!important;box-shadow:0 0 4px #ffd34f44!important}
#v603BossKills{border-color:#ff6f8f!important}.v603BossKillIcon{width:58px;height:58px;display:grid;place-items:center;border-radius:14px;background:radial-gradient(circle,#5a2233,#151d31 70%);border:2px solid #ff6f8f;font:1000 28px Arial;box-shadow:0 0 14px #ff6f8f44;flex:0 0 58px}.v603BossKillNum{font:1000 22px Arial;color:#ff90a6;margin-top:2px}
`;(d.head||d.documentElement).appendChild(st);
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function render(){try{var grid=d.querySelector('#v593Progression .v593ProgGrid');if(!grid)return;var e=d.getElementById('v603BossKills');if(!e){e=d.createElement('div');e.id='v603BossKills';e.className='v593ProgCard';grid.appendChild(e)}var x=read(),n=Math.max(0,+x.wins||0);e.innerHTML='<div class="v603BossKillIcon">☠</div><div class="v593ProgText"><div class="v593ProgLabel">BOSS UCCISI</div><div class="v603BossKillNum">'+n+'</div><div class="v593ProgSub">BOSS FIGHT TOTALI</div><div class="v593ProgPts">'+(n===1?'1 boss sconfitto':n+' boss sconfitti')+'</div></div>'}catch(e){}}
render();setTimeout(render,500);setTimeout(render,1500);setInterval(render,1000);
window.__v603BossStats={wins:function(){return Math.max(0,+read().wins||0)}};
})();