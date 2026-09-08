(function(){'use strict';
if(window.__starBrawl640Bridge)return;window.__starBrawl640Bridge=true;
var d=document;
function add(id,src){if(d.getElementById(id))return;var s=d.createElement('script');s.id=id;s.src=src;s.async=false;(d.head||d.documentElement).appendChild(s)}
add('v640Base','https://raw.githack.com/Altfede/sun-vuole-giocare-ita/298669a4e88ec20d27a70dc0aed1a51772f75854/assets/v639/event-shop-visible-bridge.js');
add('v640Prestige','https://raw.githack.com/Altfede/sun-vuole-giocare-ita/28134487de711c1a4a238c55311e3b940ba2b2b5/assets/v640/mastery-prestige.js');
})();