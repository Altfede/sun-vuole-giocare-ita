(function(){'use strict';
if(window.__starBrawl629Bridge)return;window.__starBrawl629Bridge=true;
var d=document;
function add(id,src){if(d.getElementById(id))return;var s=d.createElement('script');s.id=id;s.src=src;s.async=false;(d.head||d.documentElement).appendChild(s)}
add('v629Chests','https://raw.githack.com/Altfede/sun-vuole-giocare-ita/d91b81a11cd0e82396c60d48ba381c8360b8f451/assets/v628/shop-chest-bridge.js');
add('v629SpendFix','https://raw.githack.com/Altfede/sun-vuole-giocare-ita/f67c2b31d6429b23965cab151f8e12a240a15684/assets/v629/chest-spend-transaction-fix.js');
})();