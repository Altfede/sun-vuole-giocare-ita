(()=>{'use strict';
if(window.__v650SelectedLobby)return;window.__v650SelectedLobby=1;
const D=document,K='starbrawl_v4';let last='';
const $=(s,r=D)=>r.querySelector(s), $$=(s,r=D)=>Array.from(r.querySelectorAll(s));
function state(){try{return JSON.parse(localStorage.getItem(K)||'{}')||{}}catch(e){return{}}}
function selected(){const s=state();return Array.isArray(s.selected)?s.selected.filter(Boolean).slice(0,2):[]}
function card(id){
  if(!id)return null;
  let b=D.querySelector('[data-use="'+CSS.escape(String(id))+'"]');
  if(b){const c=b.closest('.card');if(c)return c}
  let a=D.querySelector('#fightersGrid [data-detail="'+CSS.escape(String(id))+'"],#homeGrid [data-detail="'+CSS.escape(String(id))+'"]');
  if(a){const c=a.closest('.card');if(c)return c}
  const n=String(id).toLowerCase();
  return $$('.card',D).find(c=>String(c.dataset?.id||c.dataset?.fighter||'').toLowerCase()===n)||null;
}
function meta(id){
  const s=state(),c=card(id); let name=String(id||'VUOTO'),rar='',art=null;
  if(c){const n=$('.name,.nm',c),r=$('.rar',c),a=$('.art',c);if(n)name=n.textContent.trim();if(r)rar=r.textContent.trim();if(a)art=a}
  name=name.replace(/(^|[-_])(\w)/g,(_,p,ch)=>(p?' ':'')+ch.toUpperCase());
  return {id,name,rar,level:(s.levels&&s.levels[id])||1,cups:(s.charCups&&s.charCups[id])||0,art};
}
function cloneArt(src,small=false){
  const wrap=D.createElement('div');wrap.className=small?'v650MiniArt':'v650BigArt';
  if(!src){wrap.innerHTML='<div class="v650Fallback">★</div>';return wrap}
  const c=src.cloneNode(true);c.removeAttribute('id');c.classList.add('v650ArtClone');wrap.appendChild(c);
  const sc=$$('canvas',src),dc=$$('canvas',c);for(let i=0;i<Math.min(sc.length,dc.length);i++){try{dc[i].width=sc[i].width;dc[i].height=sc[i].height;dc[i].getContext('2d').drawImage(sc[i],0,0)}catch(e){}}
  return wrap;
}
function goFighters(){const b=D.querySelector('nav [data-screen="fightersScreen"]');if(b){b.click();return}const f=$('#fightersScreen'),h=$('#homeScreen');if(h)h.classList.remove('active');if(f)f.classList.add('active')}
function style(){if($('#v650LobbyCss'))return;const s=D.createElement('style');s.id='v650LobbyCss';s.textContent=`
#homeScreen{position:relative!important;overflow:hidden!important;padding:0!important;background:radial-gradient(circle at 38% 42%,#1d668f 0,#0d3351 33%,#081728 72%)!important}
#homeScreen>#teamPreview,#homeScreen>#homeGrid{display:none!important}
#homeScreen>#v650Lobby{display:grid!important}
#v650Lobby{height:100%;min-height:calc(100dvh - 118px);grid-template-columns:minmax(0,1.7fr) minmax(230px,.72fr);gap:10px;padding:10px;box-sizing:border-box;color:#fff;font-family:Arial,sans-serif;position:relative;overflow:hidden}
#v650Lobby:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent 0 43%,rgba(118,228,255,.07) 46%,transparent 50%),linear-gradient(0deg,#02071166,transparent 42%);pointer-events:none}
.v650Stage{position:relative;min-width:0;overflow:hidden;border-radius:20px;border:1px solid #3c7194;background:linear-gradient(180deg,#144e70aa,#081829dd);box-shadow:inset 0 -65px 80px #02081288,0 12px 28px #0007}
.v650Stage:before,.v650Stage:after{content:"";position:absolute;top:-28%;width:40%;height:120%;background:linear-gradient(180deg,#9cefff55,#4aaaff13 68%,transparent);filter:blur(3px);pointer-events:none}.v650Stage:before{left:7%;transform:skewX(-8deg)}.v650Stage:after{right:7%;transform:skewX(8deg)}
.v650Head{position:absolute;left:14px;right:14px;top:12px;z-index:4;display:flex;justify-content:space-between;align-items:center;gap:8px}.v650Head b{font-size:20px;font-weight:1000;letter-spacing:.5px;text-shadow:0 3px 10px #000}.v650Head small{display:block;font-size:8px;color:#bce8ff;font-weight:900;margin-top:2px}.v650Count{padding:6px 9px;border-radius:9px;background:#07192bc7;border:1px solid #56d8ff66;font-size:8px;font-weight:1000;color:#c9f4ff}
.v650Fighters{position:absolute;inset:48px 5px 8px;display:grid;grid-template-columns:1fr 1fr;gap:2px;align-items:end;z-index:3}.v650Fighter{height:100%;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:14px;position:relative}.v650Fighter:after{content:"";position:absolute;bottom:7px;width:68%;height:24px;border-radius:50%;background:radial-gradient(ellipse,#69e5ff88 0,#2b83c84a 45%,transparent 72%);filter:blur(1px);z-index:-1}
.v650BigArt{width:min(20vw,190px);height:min(40vh,190px);display:flex;align-items:center;justify-content:center;animation:v650Idle 2.8s ease-in-out infinite;filter:drop-shadow(0 14px 13px #0009)}.v650Fighter:nth-child(2) .v650BigArt{animation-delay:-1.3s}.v650BigArt>.v650ArtClone{transform:scale(1.72);transform-origin:center 65%;background:none!important;overflow:visible!important}.v650BigArt .doll{transform:none!important}.v650BigArt img,.v650BigArt svg,.v650BigArt canvas{max-width:100%!important;max-height:100%!important;object-fit:contain!important}.v650Fallback{width:82px;height:92px;border-radius:45px 45px 18px 18px;background:linear-gradient(145deg,#45d7ff,#685cff);display:grid;place-items:center;font-size:38px;font-weight:1000;border:2px solid #b4f4ff66}
.v650Name{font-size:17px;font-weight:1000;line-height:1;text-shadow:0 2px 8px #000;z-index:2}.v650Rar{font-size:7px;font-weight:1000;color:#c6e9ff;margin-top:4px;text-transform:uppercase;z-index:2}.v650Stats{display:flex;gap:5px;margin-top:6px;z-index:2}.v650Chip{font-size:7px;font-weight:1000;padding:4px 6px;border-radius:7px;background:#061525cc;border:1px solid #3a6380}.v650Change{margin-top:7px;border:0;border-radius:8px;padding:6px 10px;background:linear-gradient(#70d4ff,#39aaf0);color:#061525;font-size:7px;font-weight:1000;box-shadow:0 3px 0 #12628e;z-index:2}
.v650Side{min-width:0;display:flex;flex-direction:column;gap:8px;z-index:3;overflow:auto;padding-bottom:1px}.v650Party{background:linear-gradient(180deg,#172d48,#0c1b2d);border:1px solid #416789;border-radius:14px;padding:8px;box-shadow:0 8px 20px #0004}.v650SideTitle{font-size:9px;font-weight:1000;color:#c5eeff;margin-bottom:6px}.v650Slots{display:grid;grid-template-columns:1fr 1fr;gap:5px}.v650Slot{min-height:58px;border:1px solid #3d617e;border-radius:10px;background:#08182a;display:grid;grid-template-columns:34px 1fr;align-items:center;gap:5px;padding:5px;cursor:pointer}.v650MiniArt{width:34px;height:40px;display:flex;align-items:center;justify-content:center;overflow:hidden}.v650MiniArt>.v650ArtClone{transform:scale(.48);transform-origin:center}.v650MiniArt img,.v650MiniArt svg,.v650MiniArt canvas{max-width:36px!important;max-height:36px!important}.v650Slot b{font-size:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v650Slot small{display:block;font-size:6px;color:#8eb4cf;margin-top:2px}.v650AllChange{width:100%;margin-top:6px;border:1px solid #52a8d7;border-radius:8px;background:#163b59;color:#e7f8ff;padding:7px;font-size:7px;font-weight:1000}
#v650ModeHost{display:flex;flex-direction:column;gap:7px;min-height:0}.v650Side #v650ModeHost>.hero{margin:0!important;border-radius:14px!important;padding:9px!important;background:linear-gradient(160deg,#213e60,#13263e)!important;border:1px solid #456b8e!important}.v650Side #v650ModeHost>.hero h1,.v650Side #v650ModeHost>.hero>p{display:none!important}.v650Side #v650ModeHost .modebox{margin-top:0!important}.v650Side #v650ModeHost .modebox label{font-size:7px!important}.v650Side #v650ModeHost .modebox select{padding:7px!important;font-size:8px!important}.v650Side #v650ModeHost .play{min-height:42px!important;font-size:11px!important;margin-top:5px!important}.v650Side #v650ModeHost>.chestPanel{margin:0!important;border-radius:12px!important;padding:7px!important;grid-template-columns:1fr auto!important}.v650Side #v650ModeHost .chestTitle{font-size:10px!important}.v650Side #v650ModeHost .chestSub{display:none!important}.v650Side #v650ModeHost .openChest{padding:7px 8px!important;font-size:7px!important}
.v650Hint{font-size:6px;color:#7fa8c3;text-align:center;font-weight:800;padding:1px 4px}
@keyframes v650Idle{0%,100%{transform:translateY(0) rotate(-.5deg)}50%{transform:translateY(-6px) rotate(.5deg)}}
@media(max-height:430px){#v650Lobby{min-height:calc(100dvh - 105px);padding:7px;gap:7px;grid-template-columns:minmax(0,1.8fr) minmax(205px,.65fr)}.v650Head{top:8px;left:10px;right:10px}.v650Head b{font-size:16px}.v650Fighters{inset:38px 2px 4px}.v650BigArt{height:118px;width:125px}.v650BigArt>.v650ArtClone{transform:scale(1.38)}.v650Name{font-size:13px}.v650Party{padding:6px}.v650Slot{min-height:47px}.v650Change,.v650AllChange{padding:5px 7px}.v650Side #v650ModeHost .play{min-height:36px!important}}
`;D.head.appendChild(s)}
function ensure(){const home=$('#homeScreen');if(!home)return false;style();let l=$('#v650Lobby');if(!l){l=D.createElement('div');l.id='v650Lobby';l.innerHTML='<section class="v650Stage"><div class="v650Head"><div><b>LOBBY</b><small>LA TUA SQUADRA È PRONTA</small></div><div class="v650Count" id="v650Count">0 / 2 IN SQUADRA</div></div><div class="v650Fighters" id="v650Fighters"></div></section><aside class="v650Side"><div class="v650Party"><div class="v650SideTitle">SQUADRA ATTUALE</div><div class="v650Slots" id="v650Slots"></div><button class="v650AllChange" id="v650AllChange">CAMBIA COMBATTENTI</button></div><div id="v650ModeHost"></div><div class="v650Hint">La lobby usa gli stessi combattenti selezionati in PERSONAGGI.</div></aside>';home.insertBefore(l,home.firstChild);$('#v650AllChange').onclick=goFighters}
  const host=$('#v650ModeHost');
  if(host){const hero=$(':scope > .hero',home);if(hero&&!hero.closest('#v650ModeHost'))host.appendChild(hero);const chest=$(':scope > .chestPanel',home);if(chest&&!chest.closest('#v650ModeHost'))host.appendChild(chest)}
  return true;
}
function render(){if(!ensure())return;const s=state(),ids=selected();const sig=JSON.stringify(ids)+'|'+JSON.stringify(s.levels||{})+'|'+JSON.stringify(s.charCups||{});const metas=[0,1].map(i=>ids[i]?meta(ids[i]):{id:'',name:'SLOT VUOTO',rar:'',level:0,cups:0,art:null});const artSig=metas.map(m=>m.id+'|'+(m.art?m.art.innerHTML.length:0)+'|'+m.name).join('||');const full=sig+'|'+artSig;if(full===last)return;last=full;
  const fs=$('#v650Fighters'),slots=$('#v650Slots'),cnt=$('#v650Count');if(cnt)cnt.textContent=ids.length+' / 2 IN SQUADRA';
  if(fs){fs.innerHTML='';metas.forEach(m=>{const f=D.createElement('div');f.className='v650Fighter';f.appendChild(cloneArt(m.art,false));const n=D.createElement('div');n.className='v650Name';n.textContent=m.name;f.appendChild(n);const r=D.createElement('div');r.className='v650Rar';r.textContent=m.rar||'SELEZIONA DA PERSONAGGI';f.appendChild(r);const st=D.createElement('div');st.className='v650Stats';st.innerHTML='<span class="v650Chip">LV '+m.level+'</span><span class="v650Chip">🏆 '+m.cups+'</span>';f.appendChild(st);const b=D.createElement('button');b.type='button';b.className='v650Change';b.textContent=m.id?'CAMBIA':'SCEGLI';b.onclick=goFighters;f.appendChild(b);f.onclick=e=>{if(e.target!==b)goFighters()};fs.appendChild(f)})}
  if(slots){slots.innerHTML='';metas.forEach((m,i)=>{const sl=D.createElement('div');sl.className='v650Slot';sl.appendChild(cloneArt(m.art,true));const tx=D.createElement('div');tx.innerHTML='<b>'+m.name.replace(/[<>&]/g,'')+'</b><small>Slot '+(i+1)+' · LV '+m.level+'</small>';sl.appendChild(tx);sl.onclick=goFighters;slots.appendChild(sl)})}
}
function tick(){try{render()}catch(e){console.warn('V650 lobby',e)}}
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',()=>setTimeout(tick,80));else setTimeout(tick,80);
setInterval(tick,280);
window.addEventListener('storage',()=>{last='';tick()});
window.__v650Lobby={refresh:()=>{last='';tick()},openFighters:goFighters,selected};
})();