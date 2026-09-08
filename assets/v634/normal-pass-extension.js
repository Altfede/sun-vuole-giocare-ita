(function(){'use strict';
if(window.__starBrawl634NormalPass)return;window.__starBrawl634NormalPass=true;
var d=document,STATS='starbrawl_stats_v1',PASS='starbrawl_pass_v1',GAME='starbrawl_v4',dirty=false;
function read(k){try{return JSON.parse(localStorage.getItem(k)||'{}')||{}}catch(e){return{}}}
function write(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
function kills(){return Math.max(0,+read(STATS).kills||0)}
function pass(){var p=read(PASS);p.claimed=Array.isArray(p.claimed)?p.claimed:[];return p}
function has(a,x){return a.indexOf(x)>=0}
function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var EXTRA=[];
for(var tier=51;tier<=100;tier++){
  var b=Math.floor((tier-51)/5),pos=(tier-51)%5,r;
  if(pos===0)r={tier:tier,type:'coins',label:(1500+b*150)+' MONETE',icon:'◉',cls:'gold',data:{coins:1500+b*150}};
  else if(pos===1)r={tier:tier,type:'power',label:(450+b*45)+' ENERGIA',icon:'⚡',cls:'blue',data:{power:450+b*45}};
  else if(pos===2)r={tier:tier,type:'boxes',label:(6+Math.floor(b/2))+' CASSE',icon:'🎁',cls:'purple',data:{boxes:6+Math.floor(b/2)}};
  else if(pos===3)r={tier:tier,type:'cups',label:(35+b*5)+' COPPE',icon:'🏆',cls:'gold',data:{cups:35+b*5}};
  else r={tier:tier,type:'mix',label:'CACHE STAR '+(b+1),icon:'◆',cls:b>=7?'rainbow':'red',data:{coins:700+b*150,power:180+b*30,boxes:2+Math.floor(b/3),cups:10+b*3}};
  EXTRA.push(r);
}
EXTRA[EXTRA.length-1]={tier:100,type:'mix',label:'CASSA STELLARE II',icon:'✦',cls:'rainbow',data:{coins:3000,power:800,boxes:10,cups:100}};
var css=d.createElement('style');css.id='v634PassStyle';css.textContent=`
#v553Level,#v553Next,#v553Prog{display:none!important}
#v634Level{font-size:28px;font-weight:1000}
#v634Prog{height:16px;margin-top:10px;border-radius:10px;background:#1a1f2c;border:2px solid #ffffff33;overflow:hidden}
#v634Prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,#ffe068,#ff9b32,#b875ff);transition:width .2s}
#v634Next{font-size:9px;margin-top:5px;color:#ffe4bf}
#v634Extra{margin-top:14px}
.v634Head{padding:12px 13px;border-radius:15px;background:linear-gradient(135deg,#5d2b8c,#b66518);border:2px solid #d8a1ff;box-shadow:0 6px 18px #0005;margin-bottom:9px}
.v634Head b{font:1000 15px Arial}.v634Head small{display:block;font:800 8px Arial;color:#eadbff;margin-top:3px}
.v634Tier{display:grid;grid-template-columns:52px 62px 1fr auto;gap:9px;align-items:center;padding:10px;border-radius:16px;background:#182439;border:1px solid #334b6b;box-shadow:0 4px 0 #07101c;margin-bottom:9px}
.v634Tier.ready{border-color:#d590ff;box-shadow:0 0 0 2px #d590ff22,0 4px 0 #5c3471}.v634Tier.claimed{opacity:.55}
.v634Num{width:52px;height:52px;border-radius:14px;background:#0c1525;display:grid;place-items:center;font:1000 17px Arial}
.v634Icon{width:62px;height:54px;border-radius:13px;display:grid;place-items:center;font:1000 28px Arial;border:3px solid #ffffff55;box-shadow:inset 0 -8px 0 #0003,0 5px 12px #0005;background:linear-gradient(#49647f,#26394f)}
.v634Icon.blue{background:linear-gradient(#42b7ff,#145bd0)}.v634Icon.purple{background:linear-gradient(#d75cff,#6624b8)}.v634Icon.red{background:linear-gradient(#ff5d68,#a6192b)}.v634Icon.gold{background:linear-gradient(#ffe56c,#d28a05)}
.v634Icon.rainbow{background:linear-gradient(135deg,#ff4f72,#ffcc4c,#51e6ae,#4db6ff,#bd65ff);box-shadow:inset 0 -8px 0 #0003,0 0 18px #fff6}
.v634Name{font:1000 12px Arial}.v634Req{font:800 9px Arial;color:#aebdd0;margin-top:3px}.v634Claim{min-width:78px;min-height:39px;border:0;border-radius:10px;background:#d28cff;color:#25152f;font:1000 9px Arial}.v634Claim:disabled{background:#2a374b;color:#8191a7}.v634Done{font:1000 10px Arial;color:#7ee0a2}
#v634PassBadge{position:absolute;right:2px;top:2px;min-width:15px;height:15px;padding:0 3px;border-radius:8px;background:#ff3d57;color:#fff;display:none;place-items:center;font-size:8px;border:1px solid #fff8}
@media(max-width:430px){.v634Tier{grid-template-columns:44px 54px 1fr auto;padding:8px;gap:7px}.v634Num{width:44px;height:44px}.v634Icon{width:54px;height:48px;font-size:24px}.v634Claim{min-width:65px;padding:0 7px}}
`;(d.head||d.documentElement).appendChild(css);
function rewardText(data){var a=[];if(data.coins)a.push('◉ +'+data.coins+' MONETE');if(data.power)a.push('⚡ +'+data.power+' ENERGIA');if(data.boxes)a.push('🎁 +'+data.boxes+' CASSE');if(data.cups)a.push('🏆 +'+data.cups+' COPPE');return a.join('<br>')}
function grant(r){var g=read(GAME);g.coins=Math.max(0,+g.coins||0)+(r.data.coins||0);g.power=Math.max(0,+g.power||0)+(r.data.power||0);g.boxes=Math.max(0,+g.boxes||0)+(r.data.boxes||0);g.cups=Math.max(0,+g.cups||0)+(r.data.cups||0);write(GAME,g);dirty=true}
function loot(r){var o=d.querySelector('.v553Loot');if(!o)return;var ch=o.querySelector('.v553LootChest'),tt=o.querySelector('.v553LootTitle'),it=o.querySelector('.v553LootItems');if(ch){ch.className='v553LootChest '+(r.cls||'blue');ch.textContent=r.icon||'🎁'}if(tt)tt.textContent=r.label;if(it)it.innerHTML=rewardText(r.data);o.classList.add('on')}
function claim(tier){if(tier<51||tier>100)return;var r=EXTRA[tier-51],k=kills(),p=pass();if(!r||k<tier*20||has(p.claimed,tier))return;p.claimed.push(tier);write(PASS,p);grant(r);loot(r);render()}
function extraAvailable(){var k=kills(),p=pass(),n=0;for(var i=0;i<EXTRA.length;i++)if(k>=EXTRA[i].tier*20&&!has(p.claimed,EXTRA[i].tier))n++;return n}
function ensure(){var page=d.getElementById('v553Pass'),road=d.getElementById('v553Road'),hero=page&&page.querySelector('.v553Hero'),btn=d.getElementById('v553PassBtn');if(!page||!road||!hero||!btn)return false;if(!d.getElementById('v634Level')){var old=d.getElementById('v553Level'),lvl=d.createElement('div');lvl.id='v634Level';if(old&&old.parentNode)old.parentNode.appendChild(lvl);var pr=d.createElement('div');pr.id='v634Prog';pr.innerHTML='<i></i>';hero.appendChild(pr);var nx=d.createElement('div');nx.id='v634Next';hero.appendChild(nx)}if(!d.getElementById('v634Extra')){var ex=d.createElement('div');ex.id='v634Extra';road.parentNode.insertBefore(ex,road.nextSibling);var note=page.querySelector('.v553Note');if(note)note.textContent='Una ricompensa ogni 20 eliminazioni. Il Pass ora ha 100 livelli e si completa a 2000 eliminazioni totali.'}var oldBadge=d.getElementById('v553PassBadge');if(oldBadge)oldBadge.style.display='none';if(!d.getElementById('v634PassBadge')){var b=d.createElement('span');b.id='v634PassBadge';btn.appendChild(b)}if(!btn.__v634){btn.addEventListener('click',function(){setTimeout(render,0)});btn.__v634=true}var back=page.querySelector('.v553Back');if(back&&!back.__v634){back.addEventListener('click',function(){if(dirty)setTimeout(function(){location.reload()},40)});back.__v634=true}return true}
function render(){if(!ensure())return;var k=kills(),p=pass(),lvl=Math.min(100,Math.floor(k/20)),next=lvl>=100?100:lvl+1,into=lvl>=100?20:k%20,pct=lvl>=100?100:Math.min(100,into/20*100);var le=d.getElementById('v634Level'),pr=d.querySelector('#v634Prog i'),nx=d.getElementById('v634Next'),ex=d.getElementById('v634Extra');if(le)le.textContent=lvl+' / 100';if(pr)pr.style.width=pct+'%';if(nx)nx.textContent=lvl>=100?'PASS COMPLETATO · 2000 KILL':'Prossima ricompensa tra '+(20-into)+' kill · livello '+next+' a '+(next*20)+' kill';if(ex){var h='<div class="v634Head"><b>STAR PASS · LIVELLI 51–100</b><small>Seconda metà del Pass · ricompense potenziate fino a 2000 kill</small></div>';for(var i=0;i<EXTRA.length;i++){var r=EXTRA[i],done=has(p.claimed,r.tier),ready=k>=r.tier*20;h+='<div class="v634Tier '+(ready?'ready ':'')+(done?'claimed':'')+'"><div class="v634Num">'+r.tier+'</div><div class="v634Icon '+r.cls+'">'+r.icon+'</div><div><div class="v634Name">'+esc(r.label)+'</div><div class="v634Req">'+(r.tier*20)+' KILL</div></div>'+(done?'<div class="v634Done">PRESO</div>':'<button class="v634Claim" data-v634-tier="'+r.tier+'" '+(ready?'':'disabled')+'>'+(ready?'RISCATTA':'BLOCCATO')+'</button>')+'</div>'}ex.innerHTML=h;var bs=ex.querySelectorAll('[data-v634-tier]');for(i=0;i<bs.length;i++)bs[i].onclick=function(){claim(+this.getAttribute('data-v634-tier'))}}var badge=d.getElementById('v634PassBadge'),n=extraAvailable();if(badge){badge.textContent=n;badge.style.display=n?'grid':'none'}}
var tries=0,t=setInterval(function(){tries++;if(ensure()){clearInterval(t);render();setInterval(function(){var page=d.getElementById('v553Pass');if(page&&page.classList.contains('on'))render();else{var b=d.getElementById('v634PassBadge'),n=extraAvailable();if(b){b.textContent=n;b.style.display=n?'grid':'none'}}},500)}else if(tries>120)clearInterval(t)},100);
window.__v634NormalPass={refresh:render,claim:claim,rewards:EXTRA};
})();