(function(){
'use strict';
if(window.__starBrawl654BrawlerFix)return;
window.__starBrawl654BrawlerFix=true;
var d=document;
function q(s,r){return (r||d).querySelector(s)}
function qa(s,r){return Array.prototype.slice.call((r||d).querySelectorAll(s))}
function getState(){for(const k of ['starbrawl_v4','starbrawl_v5','starbrawl']){try{const raw=localStorage.getItem(k);if(raw){const o=JSON.parse(raw);if(o&&typeof o==='object')return o}}catch(e){}}return {}}
function cardId(card){const a=q('.art[data-detail]',card);return a?a.getAttribute('data-detail'):''}
function selectedCards(){const cards=qa('#fightersGrid .card'), st=getState(), out=[];const ids=Array.isArray(st.selected)?st.selected.slice(0,2):[];ids.forEach(fid=>{const c=cards.find(x=>cardId(x)===fid);if(c&&!out.includes(c))out.push(c)});if(out.length<2){cards.forEach(c=>{if(out.length>=2||out.includes(c))return;const b=q('.use.selected',c)||qa('.use',c).find(x=>/IN SQUADRA|IN USO|EQUIP/i.test(x.textContent||''));if(b)out.push(c)})}return out.slice(0,2)}
function ensureCss(){if(d.getElementById('v654BrawlerFixCss'))return;const s=d.createElement('style');s.id='v654BrawlerFixCss';s.textContent=`
.v653DuoArt{height:72%!important;overflow:visible!important;padding:0!important;display:flex!important;align-items:flex-end!important;justify-content:center!important}
.v653DuoArt>.v654CleanVisual{width:100%!important;height:100%!important;display:flex!important;align-items:flex-end!important;justify-content:center!important;overflow:visible!important}
.v653DuoArt .v654LobbyImg{position:static!important;inset:auto!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;transform:none!important;rotate:none!important;scale:none!important;margin:0 0 42px 0!important;padding:0!important;width:auto!important;height:auto!important;max-width:90%!important;max-height:82%!important;object-fit:contain!important;object-position:center bottom!important;image-rendering:auto!important;filter:none!important}
.v653DuoArt .v654LobbyDoll{position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;margin:0 0 50px 0!important;transform:scale(2.15)!important;transform-origin:center bottom!important;filter:none!important}
.v653DuoArt .v654FallbackVisual{position:relative!important;margin:0 0 42px!important;transform:none!important;max-width:90%!important;max-height:82%!important}
@media(max-width:850px){.v653DuoArt .v654LobbyImg{max-width:86%!important;max-height:78%!important;margin-bottom:30px!important}.v653DuoArt .v654LobbyDoll{transform:scale(1.55)!important;margin-bottom:32px!important}}
@media(max-height:430px){.v653DuoArt .v654LobbyImg{max-height:72%!important;margin-bottom:24px!important}.v653DuoArt .v654LobbyDoll{transform:scale(1.4)!important;margin-bottom:25px!important}}
`;(d.head||d.documentElement).appendChild(s)}
function cleanClone(src){const holder=d.createElement('div');holder.className='v654CleanVisual';if(!src)return holder;let node=src.querySelector('img');if(node){node=node.cloneNode(true);node.removeAttribute('style');node.removeAttribute('id');node.removeAttribute('width');node.removeAttribute('height');node.className='v654LobbyImg';node.draggable=false;holder.appendChild(node);return holder}
node=src.querySelector('.doll');if(node){node=node.cloneNode(true);qa('[id]',node).forEach(x=>x.removeAttribute('id'));node.classList.add('v654LobbyDoll');holder.appendChild(node);return holder}
node=src.firstElementChild;if(node){node=node.cloneNode(true);node.removeAttribute('style');node.removeAttribute('id');node.classList.add('v654FallbackVisual');holder.appendChild(node)}return holder}
function apply(){ensureCss();const home=d.getElementById('v653HomeV2'), grid=d.getElementById('fightersGrid');if(!home||!grid)return;const cards=selectedCards(), slots=qa('.v653DuoArt',home);slots.forEach((slot,i)=>{const card=cards[i];if(!card)return;const fid=cardId(card), current=slot.getAttribute('data-v654-fid');if(current===fid&&q('.v654CleanVisual',slot))return;const src=q('.art',card);slot.innerHTML='';slot.appendChild(cleanClone(src));slot.setAttribute('data-v654-fid',fid)})}
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',()=>setTimeout(apply,100));else setTimeout(apply,100);
setInterval(apply,300);
})();