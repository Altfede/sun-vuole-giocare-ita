(function(){'use strict';
if(window.__starBrawl607RankStatic)return;window.__starBrawl607RankStatic=true;
var d=document,GAME='starbrawl_v4';
function game(){try{return JSON.parse(localStorage.getItem(GAME)||'{}')||{}}catch(e){return{}}}
function rank(c){return Math.floor(Math.max(0,+c||0)/50)}
function idOf(card){var a=card&&card.querySelector('.art[data-detail]');return a&&a.getAttribute('data-detail')}
function cupsFor(id){var g=game(),cc=g.charCups||{};return Math.max(0,+cc[id]||0)}
var SVG='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2 27 7v8c0 7-4.8 11.8-11 15C9.8 26.8 5 22 5 15V7z" fill="#3a4658" stroke="#f4c94e" stroke-width="2"/><path d="m16 8 2.1 4.3 4.8.7-3.5 3.4.8 4.8-4.2-2.3-4.2 2.3.8-4.8L9.1 13l4.8-.7z" fill="#ffd85a"/></svg>';
var st=d.createElement('style');st.id='v607RankStaticStyle';st.textContent=`
.rankChipV543{display:none!important}
.v607RankBadge{position:absolute!important;left:3px!important;top:3px!important;z-index:20!important;width:28px!important;height:14px!important;display:flex!important;align-items:center!important;gap:1px!important;padding:1px 2px!important;box-sizing:border-box!important;border-radius:5px!important;background:#0b1320e8!important;border:1px solid #d8aa31!important;color:#ffd75b!important;font:1000 5.2px/1 Arial!important;white-space:nowrap!important;pointer-events:none!important;overflow:hidden!important;contain:layout paint style!important;transform:none!important;margin:0!important}
.v607RankBadge svg{width:10px!important;height:10px!important;min-width:10px!important;display:block!important;flex:0 0 10px!important}
#fightersScreen .v607RankBadge{width:25px!important;height:13px!important;font-size:4.8px!important;padding:1px!important}
#fightersScreen .v607RankBadge svg{width:9px!important;height:9px!important;min-width:9px!important}
#homeScreen .v607RankBadge{width:26px!important;height:13px!important;font-size:4.8px!important}
`;(d.head||d.documentElement).appendChild(st);
function place(card){var id=idOf(card);if(!id)return;var b=card.querySelector(':scope > .v607RankBadge');if(!b){b=d.createElement('div');b.className='v607RankBadge';b.innerHTML=SVG+'<span></span>';card.appendChild(b)}var r=rank(cupsFor(id)),s=b.querySelector('span');if(s&&s.textContent!==String(r))s.textContent=String(r)}
function scan(){try{var cards=d.querySelectorAll('.card');for(var i=0;i<cards.length;i++)place(cards[i])}catch(e){}}
scan();setTimeout(scan,120);setTimeout(scan,400);setTimeout(scan,1000);
var scheduled=false;function queue(){if(scheduled)return;scheduled=true;requestAnimationFrame(function(){scheduled=false;scan()})}
try{var root=d.querySelector('.app')||d.body;if(root){var mo=new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){if(ms[i].addedNodes&&ms[i].addedNodes.length){queue();break}}});mo.observe(root,{childList:true,subtree:true})}}catch(e){}
window.addEventListener('starbrawl:mastery-awarded',queue);
window.addEventListener('storage',queue);
window.__v607RankStatic={refresh:scan};
})();