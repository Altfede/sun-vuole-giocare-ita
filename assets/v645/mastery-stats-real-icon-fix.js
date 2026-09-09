(function(){'use strict';
if(window.__starBrawl645MasteryStatsIconFix)return;window.__starBrawl645MasteryStatsIconFix=true;
var d=document,observed=null,mo=null;
function bestTier(){try{var a=window.__v644MasteryStatsFix;if(a&&typeof a.best==='function'){var b=a.best();if(b&&b.tier)return b.tier}}catch(e){}return'BRONZO'}
function realIcon(tier){try{if(window.__v582MasteryIcons&&typeof window.__v582MasteryIcons.icon==='function')return window.__v582MasteryIcons.icon(tier,false)}catch(e){}try{if(window.__v609MasteryIcons&&typeof window.__v609MasteryIcons.icon==='function')return window.__v609MasteryIcons.icon(tier,false)}catch(e){}return''}
function sync(){try{var box=d.getElementById('v644BestMastery');if(!box)return false;var wrap=box.querySelector('.v593ProgIcon');if(!wrap)return false;var tier=bestTier(),html=realIcon(tier);if(!html)return false;var current=wrap.querySelector('.v582Icon');if(current&&wrap.getAttribute('data-v645-tier')===tier)return true;wrap.innerHTML=html;wrap.setAttribute('data-v645-tier',tier);return true}catch(e){return false}}
function observe(){var box=d.getElementById('v644BestMastery');if(!box){sync();box=d.getElementById('v644BestMastery')}if(!box)return false;if(observed===box)return true;if(mo)try{mo.disconnect()}catch(e){}observed=box;mo=new MutationObserver(function(){sync()});mo.observe(box,{childList:true,subtree:true});sync();return true}
var css=d.createElement('style');css.id='v645MasteryStatsIconStyle';css.textContent='#v644BestMastery .v593ProgIcon>.v582Icon{width:58px!important;height:54px!important}#v644BestMastery .v644MasterIcon{display:none!important}';(d.head||d.documentElement).appendChild(css);
observe();setTimeout(observe,250);setTimeout(observe,900);setInterval(function(){observe();sync()},700);
window.__v645MasteryStatsIconFix={refresh:sync};
})();