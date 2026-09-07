(function(){'use strict';
if(window.__starBrawlGamemodes575Fixed)return;window.__starBrawlGamemodes575Fixed=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/bcbe29cf8c3a14255688ac6a609e5877a5aba48b/assets/v575/gamemodes-super-loader.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('Loader V5.75 non caricabile');return r.text()}).then(function(code){
var mark='var helper="var __v575Atk=';
if(code.indexOf(mark)<0)throw new Error('Marker helper V5.75 non trovato');
var patch="rep(\"function respawn(u){var p=spawnPoint(u.team,u.index);u.x=p.x;u.y=p.y;u.hp=u.max;u.dead=0;u.cd=.4;u.el.classList.remove('v550Dead')}\",\"function respawn(u){var p=spawnPoint(u.team,u.index);u.x=p.x;u.y=p.y;u.hp=u.max;u.dead=0;u.cd=.4;u.stun=u.slow=u.shield=u.dot=u.dotTime=u.haste=0;u.dotOwner=null;u.el.classList.remove('v550Dead')}\",'reset status respawn');\n";
code=code.replace(mark,patch+mark);
(0,eval)(code+'\n//# sourceURL=starbrawl-v575-custom-modes-fixed-loader.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:9999999;background:#6b1820;color:#fff;padding:10px;border-radius:10px;font:700 12px Arial';x.textContent='Errore fix modalità V5.75: '+e.message;document.body.appendChild(x)});
})();