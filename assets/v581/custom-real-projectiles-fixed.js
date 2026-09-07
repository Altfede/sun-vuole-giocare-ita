(function(){'use strict';
if(window.__starBrawlGamemodes581)return;window.__starBrawlGamemodes581=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/73c1ecaf2c1a3d9f5e7e96b6447d53216a419697/assets/v576/gamemodes-unique-attacks-loader.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('V5.76 non caricabile');return r.text()}).then(function(src){
src=src.replace("if(window.__starBrawlGamemodes576)return;window.__starBrawlGamemodes576=true;","if(window.__starBrawlGamemodes581Inner)return;window.__starBrawlGamemodes581Inner=true;");
var superFn="function __v575Fx(u){if(!u||!u.el)return;u.el.classList.remove('v575SuperPulse');void u.el.offsetWidth;u.el.classList.add('v575SuperPulse');var r=d.createElement('div');r.className='v581SuperProjectile';r.style.cssText='position:absolute;z-index:40;pointer-events:none;left:'+(u.x/720*100)+'%;top:'+(u.y/430*100)+'%;width:52px;height:52px;border:8px solid #ffe45b;border-radius:50%;transform:translate(-50%,-50%) scale(.3);opacity:1;box-shadow:0 0 30px #ffd34f,0 0 60px #ff70dc;';arena.appendChild(r);var an=r.animate([{transform:'translate(-50%,-50%) scale(.3)',opacity:1},{transform:'translate(-50%,-50%) scale(4.4)',opacity:0}],{duration:900,easing:'ease-out',fill:'forwards'});an.onfinish=function(){r.remove()};setTimeout(function(){if(u.el)u.el.classList.remove('v575SuperPulse')},700)}";
var needle="(0,eval)(code+'\\n//# sourceURL=starbrawl-v576-unique-attacks-loader.js');";
var p=src.indexOf(needle);
if(p<0)throw new Error('Punto eval V5.76 non trovato');
var inject="var __v581s0=code.indexOf('function __v575Fx(u){'),__v581s1=code.indexOf('function __v575Other',__v581s0);if(__v581s0>=0&&__v581s1>__v581s0){code=code.slice(0,__v581s0)+"+JSON.stringify(superFn)+"+code.slice(__v581s1);}";
src=src.slice(0,p)+inject+src.slice(p);
(0,eval)(src+'\n//# sourceURL=starbrawl-v581-custom-fixed-bootstrap.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:9999999;background:#6b1820;color:#fff;padding:10px;border-radius:10px;font:700 12px Arial';x.textContent='Errore V5.81 custom: '+e.message;document.body.appendChild(x)});
})();