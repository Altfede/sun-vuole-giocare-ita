(function(){'use strict';
if(window.__starBrawl642ProfilePrestigeTotal)return;window.__starBrawl642ProfilePrestigeTotal=true;
var d=document;
function ensure(){try{
 var api=window.__v641WinStreak;if(!api||typeof api.prestigeSummary!=='function')return false;
 var grid=d.getElementById('v612Stats');if(grid){var p=api.prestigeSummary(),card=d.getElementById('v642ProfilePrestigeTotal');if(!card){card=d.createElement('div');card.id='v642ProfilePrestigeTotal';card.className='v612Stat';grid.appendChild(card)}card.innerHTML='<small>PRESTIGI TOTALI</small><b>'+p.total+'</b><span>'+p.fighters+' FIGHTER · '+p.p5+' AL V</span>'}
 var stats=d.getElementById('v641StatsBlock');if(stats&&stats.textContent.indexOf('PRESTIGI TOTALI')<0){var p2=api.prestigeSummary(),g=stats.querySelector('.v641Grid');if(g){var e=d.createElement('div');e.className='v641Card';e.innerHTML='<small>PRESTIGI TOTALI</small><b>'+p2.total+'</b><span>'+p2.fighters+' FIGHTER · '+p2.p5+' AL V</span>';g.appendChild(e)}}
 var home=d.getElementById('v641HomeStreak');if(home)home.remove();var hs=d.querySelectorAll('.v641HomeStreak');for(var i=0;i<hs.length;i++)hs[i].remove();
 return true;
}catch(e){return false}}
ensure();setTimeout(ensure,300);setTimeout(ensure,900);setInterval(ensure,500);
window.__v642ProfilePrestigeTotal={refresh:ensure};
})();