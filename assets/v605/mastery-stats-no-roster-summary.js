(function(){'use strict';
if(window.__starBrawl605MasteryStats)return;window.__starBrawl605MasteryStats=true;
var d=document,KEY='starbrawl_mastery_v1';
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function totals(){var x=read(),total=0,active=0,cosmic=0,k;for(k in x){var v=Math.max(0,+x[k]||0);total+=v;if(v>0)active++;if(v>=1400)cosmic++}return{total:Math.floor(total),active:active,cosmic:cosmic}}
var st=d.createElement('style');st.id='v605MasteryStatsStyle';st.textContent=`
#fightersScreen #v577MasterySummary{display:none!important}
#v604MasteryTotal{border-color:#66dfff!important}.v604MasteryIcon{width:58px;height:58px;display:grid;place-items:center;flex:0 0 58px;border-radius:15px;background:radial-gradient(circle at 50% 40%,#4c3e8d,#15233b 68%);border:2px solid #66dfff;box-shadow:0 0 15px #66dfff44;font:1000 27px Arial;color:#dffcff}.v604MasteryNum{font:1000 21px Arial;color:#79e7ff;margin-top:2px}
`;(d.head||d.documentElement).appendChild(st);
function render(){try{var grid=d.querySelector('#v593Progression .v593ProgGrid');if(!grid)return;var e=d.getElementById('v604MasteryTotal');if(!e){e=d.createElement('div');e.id='v604MasteryTotal';e.className='v593ProgCard';var boss=d.getElementById('v603BossKills');if(boss&&boss.parentNode)boss.parentNode.insertBefore(e,boss);else grid.appendChild(e)}var t=totals();e.innerHTML='<div class="v604MasteryIcon">✺</div><div class="v593ProgText"><div class="v593ProgLabel">MASTERY POINT TOTALI</div><div class="v604MasteryNum">'+t.total.toLocaleString('it-IT')+' MP</div><div class="v593ProgSub">'+t.active+' FIGHTER CON MAESTRIA</div><div class="v593ProgPts">'+t.cosmic+' fighter al rango COSMICO</div></div>'}catch(e){}}
function hideRosterSummary(){var e=d.getElementById('v577MasterySummary');if(e&&e.closest('#fightersScreen'))e.style.display='none'}
render();hideRosterSummary();setTimeout(function(){render();hideRosterSummary()},450);setTimeout(function(){render();hideRosterSummary()},1400);setInterval(function(){render();hideRosterSummary()},1000);
window.__v605MasteryStats={total:function(){return totals().total},data:totals};
})();