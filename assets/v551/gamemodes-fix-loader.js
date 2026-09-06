(function(){'use strict';
if(window.__starBrawlGamemodes551)return;window.__starBrawlGamemodes551=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/a9cf320ea93bd16f30c637776ad4df77c30b2fda/assets/v550/gamemodes-fixed.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('V5.50 non caricabile');return r.text()}).then(function(s){
function rep(a,b,label){if(s.indexOf(a)<0)throw new Error('Patch '+label+' non trovata');s=s.replace(a,b)}
rep("var goalX=u.team===0?748:-28,goalY=215+(Math.random()-.5)*75","var goalX=u.team===0?820:-100,goalY=215+(Math.random()-.5)*40",'mira calcio');
rep("b.vx=dx/l*(220+Math.random()*55);b.vy=dy/l*(220+Math.random()*55);","b.vx=dx/l*(360+Math.random()*80);b.vy=dy/l*(360+Math.random()*80);",'forza calcio');
rep("b.vx*=Math.pow(.982,dt*60);b.vy*=Math.pow(.982,dt*60);","b.vx*=Math.pow(.992,dt*60);b.vy*=Math.pow(.992,dt*60);",'attrito calcio');
rep("if(b.x>720&&b.y>145&&b.y<285)","if(b.x>=690&&b.y>135&&b.y<295)",'porta destra');
rep("else if(b.x<0&&b.y>145&&b.y<285)","else if(b.x<=30&&b.y>135&&b.y<295)",'porta sinistra');
rep("saveState(s);var ct=d.getElementById('cupsTop')","saveState(s);sim.rewardState=s;sim.rewardSummary=(delta>=0?'+':'')+delta+' 🏆 · +'+(tie?15:(win?60:12))+' ◉ · +'+(tie?4:(win?15:3))+' ⚡'+(win?' · +1 CASSA':'');var ct=d.getElementById('cupsTop')",'riepilogo ricompense');
rep("result.querySelector('.v550ResultScore').textContent=a+' - '+b;","result.querySelector('.v550ResultScore').innerHTML=a+' - '+b+'<div style=\"margin-top:10px;padding:10px;border-radius:10px;background:#0d1727;color:#ffd34f;font-size:13px\">'+(sim.rewardSummary||'')+'</div>';",'risultato ricompense');
rep("function leave(){cancelAnimationFrame(raf);sim=null;game.classList.remove('on');result.classList.remove('on')}","function leave(){cancelAnimationFrame(raf);var hadReward=!!(sim&&sim.rewarded);sim=null;game.classList.remove('on');result.classList.remove('on');if(hadReward)setTimeout(function(){location.reload()},40)}",'sincronizzazione stato');
(0,eval)(s+'\n//# sourceURL=starbrawl-v551-patched.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:9999999;background:#6b1820;color:#fff;padding:10px;border-radius:10px;font:700 12px Arial';x.textContent='Errore modalità V5.51: '+e.message;document.body.appendChild(x)});
})();