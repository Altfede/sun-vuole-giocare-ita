(function(){'use strict';
if(window.__starBrawl680HQLoading)return;window.__starBrawl680HQLoading=true;
var PARTS=[
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part0.txt',
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part1.txt',
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part2.txt',
'https://raw.githack.com/Altfede/sun-vuole-giocare-ita/ede28060dc8a9441be9ba2d95f280c50e619d42a/assets/v647/loading-hq/part3rest.txt'
];
var HQ='';
function version(d){try{d.title=(d.title||'').replace(/V6\.79|V6\.78|V6\.77|V6\.76|V6\.75|V6\.74|V6\.73|V6\.72|V6\.71|V6\.70|V6\.69|V6\.68|V6\.67|V6\.66|V5\.28\.2/g,'V6.80');var b=d.querySelector('.brand');if(b)b.innerHTML=b.innerHTML.replace(/V6\.79|V6\.78|V6\.77|V6\.76|V6\.75|V6\.74|V6\.73|V6\.72|V6\.71|V6\.70|V6\.69|V6\.68|V6\.67|V6\.66|V5\.28\.2/g,'V6.80')}catch(e){}}
function patchSplash(d){try{var e=d.getElementById('v646Splash');if(!e)return;e.style.setProperty('background-color','#030713','important');e.style.setProperty('background-position','center','important');e.style.setProperty('background-size','contain','important');e.style.setProperty('background-repeat','no-repeat','important');e.style.setProperty('image-rendering','auto','important');e.style.setProperty('-webkit-transform','translateZ(0)','important');e.style.setProperty('transform','translateZ(0)','important');if(HQ)e.style.setProperty('background-image','url("'+HQ+'")','important');else e.style.setProperty('background-image','none','important')}catch(e){}}
function scan(d){if(!d)return;try{patchSplash(d);version(d)}catch(e){}var fs=[];try{fs=d.querySelectorAll('iframe')}catch(e){}for(var i=0;i<fs.length;i++){try{scan(fs[i].contentDocument||fs[i].contentWindow.document)}catch(e){}}}
function tick(){scan(document)}
Promise.all(PARTS.map(function(u){return fetch(u,{cache:'force-cache'}).then(function(r){if(!r.ok)throw new Error('HQ '+r.status);return r.text()})})).then(function(x){HQ='data:image/webp;base64,'+x.join('');window.__v680HQImage=HQ;tick()}).catch(function(e){console.error('V6.80 HQ loading screen',e)});
tick();setTimeout(tick,60);setTimeout(tick,180);setTimeout(tick,500);setInterval(tick,180);
})();