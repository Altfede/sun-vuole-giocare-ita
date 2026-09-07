(function(){'use strict';
if(window.__starBrawl606RankStableLoader)return;window.__starBrawl606RankStableLoader=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/8eb4dfbcbda2ed8a77ef2dabf236e6f786a5af5c/assets/v546/rank-icon.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('Rank base non caricabile');return r.text()}).then(function(src){
 src=src.replace("if(!window.__v543RankWritePatched){","if(false&&!window.__v543RankWritePatched){");
 src=src.replace("if(cups===null){if(old)old.remove();continue}","if(cups===null){continue}");
 src=src.replace("if(!old){old=document.createElement('div');old.className='rankChipV543';old.innerHTML='<img alt=\"Rank\"><span></span>';card.appendChild(old)}","if(!old){old=document.createElement('div');old.className='rankChipV543';old.innerHTML='<img alt=\"Rank\"><span></span>';card.appendChild(old);old.style.visibility='visible'}");
 src=src.replace("old.querySelector('img').src=ICON;","var __ri=old.querySelector('img');if(__ri&&!__ri.src)__ri.src=ICON;");
 src=src.replace("if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();","if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();setTimeout(schedule,250);setTimeout(schedule,800);");
 var css="var __v606=document.createElement('style');__v606.id='v606RankStableStyle';__v606.textContent='.rankChipV543{min-width:47px;min-height:18px;box-sizing:border-box;contain:layout paint}.rankChipV543 img{flex:0 0 auto}.rankDetailV543{min-height:58px;box-sizing:border-box}#fightersScreen .rankChipV543{min-width:39px;min-height:18px!important}';(document.head||document.documentElement).appendChild(__v606);";
 var marker="})();";
 var p=src.lastIndexOf(marker);if(p<0)throw new Error('Fine Rank base non trovata');
 src=src.slice(0,p)+css+src.slice(p);
 (0,eval)(src+'\n//# sourceURL=starbrawl-v606-rank-stable.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:2147483647;background:#6b4317;color:#fff;padding:9px;border-radius:9px;font:700 10px Arial';x.textContent='Errore Rank V6.06: '+e.message;document.body.appendChild(x)});
})();