(function(){'use strict';
if(window.__starBrawl609MasteryIcons)return;window.__starBrawl609MasteryIcons=true;
var KEY='starbrawl_mastery_v1';
var TIERS=[{n:'BRONZO',m:0,c:'#b66c3a'},{n:'ARGENTO',m:150,c:'#b9c5d2'},{n:'ORO',m:400,c:'#f0bd2e'},{n:'DIAMANTE',m:800,c:'#66dfff'},{n:'MITICO',m:1400,c:'#ff5f9f'},{n:'LEGGENDARIO',m:2200,c:'#ff9b48'},{n:'COSMICO',m:3200,c:'#b774ff'},{n:'ETERNO',m:5000,c:'#ffffff'}];
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function points(id){var x=load();return Math.max(0,+x[id]||0)}
function tier(p){for(var i=TIERS.length-1;i>=0;i--)if(p>=TIERS[i].m)return TIERS[i].n;return'BRONZO'}
function info(name){for(var i=0;i<TIERS.length;i++)if(TIERS[i].n===name)return TIERS[i];return TIERS[0]}
function icon(name,small){var t=info(name),id='v609'+name.toLowerCase()+Math.random().toString(36).slice(2,6),extra='';if(name==='DIAMANTE')extra='<path d="M35 7 56 24 48 53 35 65 22 53 14 24Z" fill="none" stroke="#fff" stroke-width="2"/><path d="M14 24h42L35 65Z" fill="none" stroke="#dffcff" stroke-width="1.6"/>';
else if(name==='COSMICO')extra='<ellipse cx="35" cy="35" rx="31" ry="12" fill="none" stroke="#74efff" stroke-width="2" transform="rotate(-18 35 35)"/><ellipse cx="35" cy="35" rx="28" ry="10" fill="none" stroke="#ff71d7" stroke-width="1.8" transform="rotate(23 35 35)"/>';
else if(name==='ETERNO')extra='<circle cx="35" cy="35" r="27" fill="none" stroke="#fff" stroke-width="2"/><circle cx="35" cy="35" r="20" fill="none" stroke="#7cf5ff" stroke-width="2" stroke-dasharray="5 4"/><path d="M8 35h54M35 8v54" stroke="#fff" stroke-width="1" opacity=".55"/>';
else if(name==='LEGGENDARIO')extra='<path d="m23 16 5-10 7 7 7-7 5 10-5 6H28Z" fill="#ffe16b" stroke="#7a4100" stroke-width="2"/>';
else if(name==='MITICO')extra='<path d="M12 22 3 14l4 14-6 5 15 3M58 22l9-8-4 14 6 5-15 3" fill="#ff6ba8" opacity=".9"/>';
var grad=name==='ETERNO'?'<linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff"/><stop offset=".28" stop-color="#7cf5ff"/><stop offset=".52" stop-color="#ff79dc"/><stop offset=".76" stop-color="#ffe36b"/><stop offset="1" stop-color="#ffffff"/></linearGradient>':'<linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset=".24" stop-color="'+t.c+'"/><stop offset="1" stop-color="#111827"/></linearGradient>';
var svg='<svg viewBox="0 0 70 70" aria-hidden="true"><defs>'+grad+'</defs><path d="M35 5 57 15v18c0 15-9 25-22 32C22 58 13 48 13 33V15Z" fill="url(#'+id+')" stroke="'+t.c+'" stroke-width="3"/><path d="m35 18 5 10 11 1.5-8 7.5 2 11-10-5.5L25 48l2-11-8-7.5L30 28Z" fill="#fff" stroke="#172033" stroke-width="2"/>'+extra+'</svg>';
return '<span class="v582Icon v609-'+name.toLowerCase()+(small?' small':'')+'">'+svg+'</span>'}
var css=document.createElement('style');css.id='v609MasteryIconStyle';css.textContent='.v582Icon{display:inline-grid;place-items:center;width:34px;height:30px;flex:0 0 auto;filter:drop-shadow(0 2px 4px #0008)}.v582Icon svg{width:100%;height:100%;display:block}.v582Icon.small{width:22px;height:19px}.v609-cosmico{animation:v609Cosmic 1.6s ease-in-out infinite}.v609-eterno{animation:v609Eternal 1.2s ease-in-out infinite}@keyframes v609Cosmic{50%{filter:drop-shadow(0 0 8px #a96cff) drop-shadow(0 0 5px #68eaff)}}@keyframes v609Eternal{50%{filter:drop-shadow(0 0 9px #fff) drop-shadow(0 0 6px #7cf5ff)}}';(document.head||document.documentElement).appendChild(css);
window.__v582MasteryIcons={icon:icon,tierFor:function(id){return tier(points(id))}};
window.__v609MasteryIcons={icon:icon,tierFor:function(id){return tier(points(id))},tiers:TIERS};
try{if(window.__v609Mastery&&window.__v609Mastery.refresh)window.__v609Mastery.refresh()}catch(e){}
})();