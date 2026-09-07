(function(){'use strict';
if(window.__starBrawl616AchievementsLoader)return;window.__starBrawl616AchievementsLoader=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/a5050cb989b3fb55ad987cb3d1fa44bf74bca9e2/assets/v603/achievements-expanded-loader.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('Achievement V6.03 non caricabile');return r.text()}).then(function(src){
src=src.replace("if(window.__starBrawl603AchievementsLoader)return;window.__starBrawl603AchievementsLoader=true;","if(window.__starBrawl616AchievementsLoaderInner)return;window.__starBrawl616AchievementsLoaderInner=true;");
src=src.replace(/if\(v>=1400\)cosmic\+\+/g,'if(v>=3200)cosmic++');
var hook="src=src.replace(snapRe,snap);";
if(src.indexOf(hook)<0)throw new Error('Hook Achievement V6.03 non trovato');
src=src.replace(hook,hook+"\nsrc=src.replace(\"desc:'Porta un fighter al rango COSMICO: 1400 MP.',key:'mastery',goal:1400\",\"desc:'Porta un fighter al rango COSMICO: 3200 MP.',key:'mastery',goal:3200\");");
(0,eval)(src+'\n//# sourceURL=starbrawl-v616-achievements-fixed-loader.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:2147483647;background:#681b27;color:#fff;padding:10px;border-radius:10px;font:700 11px Arial';x.textContent='Errore Achievement V6.16: '+e.message;document.body.appendChild(x)});
})();