(function(){'use strict';
if(window.__starBrawl633RankedLoader)return;window.__starBrawl633RankedLoader=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/63d2b7ca8f2254ecd0d5c3d1d78d99e10c9ebe95/assets/v631/ranked-seasons-hub.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('Ranked base non caricabile');return r.text()}).then(function(src){
src=src.replace("if(window.__starBrawl631RankedSeasons)return;window.__starBrawl631RankedSeasons=true;","if(window.__starBrawl633RankedSeasons)return;window.__starBrawl633RankedSeasons=true;");
var old="{xp:5000,t:'final',c:1200,p:350,n:'SEASON MASTER',i:'✦'}\n];";
var extra="{xp:5000,t:'final',c:1200,p:350,n:'SEASON MASTER',i:'✦'},\n"+
" {xp:5250,t:'coins',v:1000,n:'1000 MONETE',i:'◉'},{xp:5500,t:'power',v:300,n:'300 ENERGIA',i:'⚡'},\n"+
" {xp:5750,t:'coins',v:1200,n:'1200 MONETE',i:'◉'},{xp:6000,t:'power',v:340,n:'340 ENERGIA',i:'⚡'},\n"+
" {xp:6250,t:'mix',c:1000,p:250,n:'CACHE RANKED IV',i:'◆'},\n"+
" {xp:6500,t:'coins',v:1400,n:'1400 MONETE',i:'◉'},{xp:6750,t:'power',v:380,n:'380 ENERGIA',i:'⚡'},\n"+
" {xp:7000,t:'coins',v:1600,n:'1600 MONETE',i:'◉'},{xp:7250,t:'power',v:420,n:'420 ENERGIA',i:'⚡'},\n"+
" {xp:7500,t:'mix',c:1400,p:350,n:'CACHE RANKED V',i:'◆'},\n"+
" {xp:7750,t:'coins',v:1800,n:'1800 MONETE',i:'◉'},{xp:8000,t:'power',v:460,n:'460 ENERGIA',i:'⚡'},\n"+
" {xp:8250,t:'coins',v:2000,n:'2000 MONETE',i:'◉'},{xp:8500,t:'power',v:500,n:'500 ENERGIA',i:'⚡'},\n"+
" {xp:8750,t:'mix',c:1800,p:450,n:'CACHE RANKED ELITE',i:'✹'},\n"+
" {xp:9000,t:'coins',v:2300,n:'2300 MONETE',i:'◉'},{xp:9250,t:'power',v:550,n:'550 ENERGIA',i:'⚡'},\n"+
" {xp:9500,t:'coins',v:2600,n:'2600 MONETE',i:'◉'},{xp:9750,t:'power',v:650,n:'650 ENERGIA',i:'⚡'},\n"+
" {xp:10000,t:'grand',c:3500,p:900,n:'RANKED LEGEND',i:'♛'}\n];";
if(src.indexOf(old)<0)throw new Error('Lista Ranked Pass non trovata');src=src.replace(old,extra);
src=src.replace("m.passMaster=!!m.passMaster;return m","m.passMaster=!!m.passMaster;m.passLegend=!!m.passLegend;return m");
src=src.replace("oldM.passMaster=false;oldM.seasonBest","oldM.passMaster=false;oldM.passLegend=false;oldM.seasonBest");
src=src.replace("if(x.t==='final')m.passMaster=true;m.claimed.push(n);","if(x.t==='final')m.passMaster=true;if(x.t==='grand')m.passLegend=true;m.claimed.push(n);");
src=src.replace("+(m.passMaster?' · PASS MASTER':'')","+(m.passLegend?' · RANKED LEGEND':m.passMaster?' · PASS MASTER':'')");
src=src.replace("Vittoria +100 XP · Pareggio +50 XP · Sconfitta +25 XP. Questo Pass sale solo nelle Ranked.","Vittoria +100 XP · Pareggio +50 XP · Sconfitta +25 XP. 40 livelli · massimo 10.000 XP.");
(0,eval)(src+'\n//# sourceURL=starbrawl-v633-ranked-pass-40.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:2147483647;background:#5a1d68;color:#fff;padding:10px;border-radius:10px;font:700 11px Arial';x.textContent='Errore Ranked V6.33: '+e.message;document.body.appendChild(x)});
})();