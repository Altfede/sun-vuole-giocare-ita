(function(){'use strict';
if(window.__starBrawl647LandscapeHQ)return;window.__starBrawl647LandscapeHQ=true;
var d=document;
var PARTS=[
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part0.txt',
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part1.txt',
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part2.txt',
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part3rest.txt'
];
var HQ='';
var css=d.createElement('style');css.id='v647LandscapeStyle';css.textContent=`
html,body{overscroll-behavior:none!important;touch-action:manipulation;background:#030713!important}
#v646Splash{background-color:#030713!important;background-size:contain!important;background-position:center!important;background-repeat:no-repeat!important;image-rendering:auto!important}
@media (orientation:portrait){
 html{width:100%;height:100%;overflow:hidden!important;background:#030713!important}
 body{position:fixed!important;left:100%!important;top:0!important;width:100vh!important;width:100dvh!important;height:100vw!important;height:100dvw!important;max-width:none!important;max-height:none!important;overflow:hidden!important;transform:rotate(90deg)!important;transform-origin:0 0!important;background:#030713!important}
 #v646Splash,#v646Post,#v550Game,#battleScreen,#v635Page,#v631Hub{width:100%!important;height:100%!important;inset:0!important}
}
@media (orientation:landscape){html,body{width:100%!important;height:100%!important;overflow-x:hidden!important}}
`;(d.head||d.documentElement).appendChild(css);
function tryLock(){try{if(screen.orientation&&screen.orientation.lock){var p=screen.orientation.lock('landscape');if(p&&p.catch)p.catch(function(){})}}catch(e){}}
tryLock();['pointerdown','touchstart','click'].forEach(function(ev){d.addEventListener(ev,tryLock,{once:true,passive:true})});
function setHQ(u){HQ=u||HQ;var e=d.getElementById('v646Splash');if(e&&HQ){e.style.backgroundImage='url("'+HQ+'")';e.style.backgroundSize='contain';e.style.backgroundPosition='center';e.style.backgroundRepeat='no-repeat';e.style.imageRendering='auto'}}
function loadHQ(){return Promise.all(PARTS.map(function(url){return fetch(url,{cache:'force-cache'}).then(function(r){if(!r.ok)throw new Error('HQ '+r.status);return r.text()})})).then(function(x){HQ='data:image/webp;base64,'+x.join('');window.__v647HQImage=HQ;setHQ(HQ);return HQ}).catch(function(e){console.error('V6.47 HQ loading screen',e);return''})}
loadHQ();setTimeout(function(){setHQ()},300);setTimeout(function(){setHQ()},900);setInterval(function(){setHQ()},1500);
window.__v647LandscapeHQ={lock:tryLock,refresh:setHQ,load:loadHQ,image:function(){return HQ}};
})();