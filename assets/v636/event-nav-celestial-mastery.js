(function(){'use strict';
if(window.__starBrawl636EventNavMastery)return;window.__starBrawl636EventNavMastery=true;
var d=document;
var MT=[
 {n:'BRONZO',m:0,nx:150,c:'#b66c3a'},
 {n:'ARGENTO',m:150,nx:400,c:'#b9c5d2'},
 {n:'ORO',m:400,nx:800,c:'#f0bd2e'},
 {n:'DIAMANTE',m:800,nx:1400,c:'#66dfff'},
 {n:'MITICO',m:1400,nx:1800,c:'#ff5f9f'},
 {n:'SUPREMO',m:1800,nx:2200,c:'#e65cff'},
 {n:'LEGGENDARIO',m:2200,nx:2800,c:'#ff9b48'},
 {n:'STELLARE',m:2800,nx:3200,c:'#55e0c2'},
 {n:'COSMICO',m:3200,nx:4000,c:'#b774ff'},
 {n:'TRASCENDENTE',m:4000,nx:4500,c:'#ffe36b'},
 {n:'CELESTIALE',m:4500,nx:5000,c:'#a8f0ff'},
 {n:'ETERNO',m:5000,nx:null,c:'#ffffff'}
];
var css=d.createElement('style');css.id='v636Style';css.textContent=`
#v636EventNavBtn{position:relative;border:1px solid #b66cff!important;background:linear-gradient(180deg,#6b38a8,#32205f)!important;color:#fff!important;font-size:7px!important;font-weight:1000!important;letter-spacing:.2px!important;text-shadow:0 1px 2px #0008!important}
#v636EventNavBtn:before{content:'✦';display:block;font-size:12px;line-height:10px;margin-bottom:2px;color:#74ecff;text-shadow:0 0 7px #b66cff}
.v636CelestialGlow{animation:v636Celestial 1.45s ease-in-out infinite}@keyframes v636Celestial{50%{filter:drop-shadow(0 0 8px #a8f0ff) drop-shadow(0 0 5px #fff)}}
`;(d.head||d.documentElement).appendChild(css);
function copyInto(a,withColor){if(!Array.isArray(a))return;var x=[];for(var i=0;i<MT.length;i++)x.push(withColor?{n:MT[i].n,m:MT[i].m,c:MT[i].c}:{n:MT[i].n,m:MT[i].m,nx:MT[i].nx});a.splice.apply(a,[0,a.length].concat(x))}
function patchMastery(){var ok=false;
 try{if(window.__v635Mastery&&Array.isArray(window.__v635Mastery.tiers)){window.__v635Mastery.tiers.splice.apply(window.__v635Mastery.tiers,[0,window.__v635Mastery.tiers.length].concat(MT.map(function(x){return{n:x.n,m:x.m,nx:x.nx,c:x.c}})));ok=true}}catch(e){}
 try{if(window.__v609Mastery&&Array.isArray(window.__v609Mastery.tiers)){copyInto(window.__v609Mastery.tiers,false);if(window.__v609Mastery.refresh)window.__v609Mastery.refresh();ok=true}}catch(e){}
 try{if(window.__v609MasteryIcons&&Array.isArray(window.__v609MasteryIcons.tiers)){copyInto(window.__v609MasteryIcons.tiers,true);ok=true}}catch(e){}
 try{if(window.__v635Mastery&&window.__v635Mastery.refresh)window.__v635Mastery.refresh()}catch(e){}
 var title=d.querySelector('#v635MasteryRoad .v635MRTitle');if(title)title.innerHTML='<b>◆ PERCORSO MAESTRIA</b> · 12 ranghi';
 var cards=d.querySelectorAll('#v635MasteryRoad .v635MRTier');for(var i=0;i<cards.length;i++){var n=cards[i].querySelector('.v635MRName');if(n&&n.textContent.trim()==='CELESTIALE'){var ic=cards[i].querySelector('.v582Icon');if(ic)ic.classList.add('v636CelestialGlow')}}
 return ok}
function navButtons(nav){var n=0;for(var i=0;i<nav.children.length;i++)if(nav.children[i].tagName==='BUTTON')n++;return n}
function ensureEventNav(){var api=window.__v635Events;if(!api||typeof api.open!=='function')return false;var nav=d.querySelector('body > nav')||d.querySelector('nav');if(!nav)return false;var b=d.getElementById('v636EventNavBtn');if(!b||b.parentNode!==nav){if(b)b.remove();b=d.createElement('button');b.id='v636EventNavBtn';b.type='button';b.textContent='EVENTO';b.onclick=function(){try{window.__v635Events.open()}catch(e){}};nav.appendChild(b)}var count=navButtons(nav);if(count>0)nav.style.setProperty('grid-template-columns','repeat('+count+',1fr)','important');return true}
function scan(){patchMastery();ensureEventNav();var title=d.querySelector('#v635MasteryRoad .v635MRTitle');if(title&&title.textContent.indexOf('12 ranghi')<0)title.innerHTML='<b>◆ PERCORSO MAESTRIA</b> · 12 ranghi'}
scan();setTimeout(scan,300);setTimeout(scan,900);setInterval(scan,650);
window.__v636Expansion={mastery:MT,eventButton:function(){return d.getElementById('v636EventNavBtn')}};
})();