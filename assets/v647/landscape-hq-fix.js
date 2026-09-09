(function(){'use strict';
if(window.__starBrawl647LandscapeHQ)return;window.__starBrawl647LandscapeHQ=true;
var d=document;
var HQ='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/main/assets/v647/starbrawl-loading-approved-hq.webp';
var css=d.createElement('style');css.id='v647LandscapeStyle';css.textContent=`
html,body{overscroll-behavior:none!important}
#v646Splash{background-image:url('${HQ}')!important;background-size:contain!important;background-position:center!important;background-repeat:no-repeat!important;image-rendering:auto!important}
@media (orientation:portrait){
 html{width:100%;height:100%;overflow:hidden!important;background:#030713!important}
 body{position:fixed!important;left:100%!important;top:0!important;width:100vh!important;height:100vw!important;max-width:none!important;max-height:none!important;overflow:hidden!important;transform:rotate(90deg)!important;transform-origin:0 0!important;background:#030713!important}
 #v646Splash,#v646Post,#v550Game,#battleScreen,#v635Page,#v631Hub{width:100%!important;height:100%!important;inset:0!important}
}
@media (orientation:landscape){html,body{width:100%!important;height:100%!important;overflow-x:hidden!important}}
`;(d.head||d.documentElement).appendChild(css);
function tryLock(){try{if(screen.orientation&&screen.orientation.lock){var p=screen.orientation.lock('landscape');if(p&&p.catch)p.catch(function(){})}}catch(e){}}
tryLock();['pointerdown','touchstart','click'].forEach(function(ev){d.addEventListener(ev,tryLock,{once:true,passive:true})});
function fixSplash(){var e=d.getElementById('v646Splash');if(e){e.style.backgroundImage='url("'+HQ+'")';e.style.backgroundSize='contain';e.style.backgroundPosition='center';e.style.backgroundRepeat='no-repeat'}}
fixSplash();setTimeout(fixSplash,100);setTimeout(fixSplash,600);setInterval(fixSplash,1200);
window.__v647LandscapeHQ={lock:tryLock,refresh:fixSplash,image:HQ};
})();