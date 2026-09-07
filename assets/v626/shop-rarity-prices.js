(function(){'use strict';
if(window.__starBrawl626Prices)return;window.__starBrawl626Prices=true;
var d=document,KEY='starbrawl_v4';
var PRICE={COMUNE:500,RARO:1000,EPICO:1500,MITICO:2000,LEGGENDARIO:2500,'TUFF RAINBOW':3500,MISTICA:4500};
function priceFor(name,rar){if(String(name||'').trim().toUpperCase()==='ZORG')return 4500;return PRICE[String(rar||'').trim().toUpperCase()]||1000}
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function save(g){try{localStorage.setItem(KEY,JSON.stringify(g))}catch(e){}}
function activeDetailId(){var a=d.querySelector('.cdmini.active[data-cdmini]');if(a)return a.getAttribute('data-cdmini');var k=d.getElementById('v575DetailKit');return k&&k.getAttribute('data-id')}
function patchShop(){var cards=d.querySelectorAll('#v625F .v625Card');for(var i=0;i<cards.length;i++){var c=cards[i],n=c.querySelector('.v625Name'),r=c.querySelector('.v625Rar'),p=c.querySelector('.v625Price'),b=c.querySelector('[data-v625f]');if(!n||!r||!p||!b)continue;var v=priceFor(n.textContent,r.textContent);b.setAttribute('data-p',String(v));p.textContent=b.disabled?'VALORE · '+v+' ◉':v+' ◉'}}
function patchDetail(){var btn=d.getElementById('cdBuy');if(!btn||btn.style.display==='none')return;var n=d.getElementById('cdName'),r=d.getElementById('cdRar'),id=activeDetailId();if(!n||!r||!id)return;var v=priceFor(n.textContent,r.textContent);btn.textContent='COMPRA · '+v;btn.setAttribute('data-v626-price',String(v));btn.onclick=function(){var g=read();g.unlocked=Array.isArray(g.unlocked)?g.unlocked:[];if(g.unlocked.indexOf(id)>=0)return;g.coins=Math.max(0,+g.coins||0);if(g.coins<v){var f=d.getElementById('flash');if(f){f.textContent='Servono '+v+' monete';f.style.display='block';setTimeout(function(){f.style.display='none'},1300)}else alert('Servono '+v+' monete');return}g.coins-=v;g.unlocked.push(id);g.levels=g.levels||{};g.charCups=g.charCups||{};g.levels[id]=g.levels[id]||1;if(g.charCups[id]==null)g.charCups[id]=0;save(g);location.reload()}}
function run(){patchShop();patchDetail()}
run();setTimeout(run,300);setTimeout(run,900);setInterval(run,700);
window.__v626ShopPrices={refresh:run,priceFor:priceFor};
})();