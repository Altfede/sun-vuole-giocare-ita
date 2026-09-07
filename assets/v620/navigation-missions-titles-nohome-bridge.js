(function(){'use strict';
if(window.__starBrawl620Bridge)return;window.__starBrawl620Bridge=true;
var d=document;
function add(id,src){if(d.getElementById(id))return;var s=d.createElement('script');s.id=id;s.src=src;s.async=false;(d.head||d.documentElement).appendChild(s)}
add('v620CleanBase','https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ca66dbb5b26d0658093e8f9035d9197b19e14cc0/assets/v615/navigation-cleanup-final.js');
add('v620Missions','https://raw.githack.com/Altfede/sun-vuole-giocare-ita/9312a47f342ec9871d36aac6d396271f9a380866/assets/v617/missions-safe.js');
add('v620DifficultyTitles','https://raw.githack.com/Altfede/sun-vuole-giocare-ita/dfcd7704d1a02cafe198337d070b2e93f5a29d0b/assets/v620/difficulty-titles-nav-nohome.js');
})();