(function(){'use strict';
if(window.__starBrawl629ChestSpendFix)return;window.__starBrawl629ChestSpendFix=true;
var d=document,KEY='starbrawl_v4',pending=null;
var BOX={
 base:{id:'base',name:'CASSA BASE',price:350,coins:[45,95],power:[8,20],chance:.10,theme:'base'},
 energy:{id:'energy',name:'CASSA ENERGIA',price:650,coins:[25,65],power:[65,120],chance:.15,theme:'energy'},
 mega:{id:'mega',name:'MEGA CASSA',price:1100,coins:[160,300],power:[35,80],chance:.30,theme:'mega'},
 cosmic:{id:'cosmic',name:'CASSA COSMICA',price:1900,coins:[320,560],power:[85,155],chance:.55,theme:'cosmic'}
};
var F=[['bolt','Bolt','Comune'],['moss','Moss','Comune'],['birra','Birra','Tuff Rainbow'],['zorg','Zorg','Mistica'],['rook','Rook','Raro'],['vexa','Vexa','Raro'],['rivet','Rivet','Raro'],['iris','Iris','Raro'],['nyra','Nyra','Epico'],['glint','Glint','Epico'],['dante','Dante','Epico'],['nia','Nia','Epico'],['brakka','Brakka','Mitico'],['astra','Astra','Leggendario'],['mei','Mei','Epico'],['kairo','Kairo','Raro'],['knox','Knox','Mitico'],['cinder','Cinder','Epico'],['hex','Hex','Mitico'],['zara','Zara','Mitico'],['jian','Jian','Mitico'],['warden','Warden','Epico'],['orion','Orion','Leggendario'],['lumi','Lumi','Raro'],['onyx','Onyx','Mitico'],['lyra','Lyra','Leggendario'],['nova','Nova','Leggendario'],['vanta','Vanta','Leggendario'],['clawz','Clawz','Raro'],['dusty','Dusty','Raro'],['velvet','Velvet','Epico'],['mamba','Mamba','Epico'],['asha','Asha','Mitico'],['flux','Orbit','Raro'],['tusk','Boar','Raro'],['echo','Sound','Epico'],['pollen','Peridot','Epico'],['jinx','Garnet','Epico'],['pyre','Pyre','Mitico'],['nimbus','Neptune','Mitico'],['rime','Rime','Leggendario'],['solara','Solara','Leggendario'],['null9','Null-9','Tuff Rainbow']];
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function write(g){try{localStorage.setItem(KEY,JSON.stringify(g));return true}catch(e){return false}}
function normalize(g){g=g||{};g.unlocked=Array.isArray(g.unlocked)?g.unlocked:[];g.levels=g.levels||{};g.charCups=g.charCups||{};g.coins=Math.max(0,+g.coins||0);g.power=Math.max(0,+g.power||0);return g}
function rnd(a,b){return a+Math.floor(Math.random()*(b-a+1))}
function own(g,id){return g.unlocked.indexOf(id)>=0}
function roll(g,ch){if(Math.random()>=ch)return null;var locked=[],i;for(i=0;i<F.length;i++)if(!own(g,F[i][0]))locked.push(F[i]);if(!locked.length)return null;var w={Comune:60,Raro:48,Epico:32,Mitico:18,Leggendario:8,Mistica:5,'Tuff Rainbow':2},total=0;for(i=0;i<locked.length;i++)total+=w[locked[i][2]]||20;var r=Math.random()*total,q=locked[locked.length-1];for(i=0;i<locked.length;i++){r-=w[locked[i][2]]||20;if(r<=0){q=locked[i];break}}g.unlocked.push(q[0]);g.levels[q[0]]=g.levels[q[0]]||1;if(g.charCups[q[0]]==null)g.charCups[q[0]]=0;return q}
function snapshot(g){return JSON.parse(JSON.stringify(g))}
function commit(){if(!pending)return;var live=normalize(read()),p=pending.state;live.coins=p.coins;live.power=p.power;live.unlocked=p.unlocked.slice();live.levels=Object.assign({},live.levels||{},p.levels||{});live.charCups=Object.assign({},live.charCups||{},p.charCups||{});write(live)}
function flash(msg){var f=d.getElementById('flash');if(f){f.textContent=msg;f.style.display='block';setTimeout(function(){f.style.display='none'},1300)}else alert(msg)}
function patchContinue(nf){var tries=0,t=setInterval(function(){tries++;var c=d.getElementById('v628Continue');if(c&&typeof c.onclick==='function'&&!c.__v629){clearInterval(t);var old=c.onclick;c.onclick=function(){commit();var ret=old.apply(this,arguments);commit();if(!nf){setTimeout(function(){commit();location.reload()},40)}else patchUnlockContinue();return ret};c.__v629=true}else if(tries>30)clearInterval(t)},50)}
function patchUnlockContinue(){var tries=0,t=setInterval(function(){tries++;commit();var b=d.getElementById('v597Continue');if(b&&typeof b.onclick==='function'&&!b.__v629){clearInterval(t);var old=b.onclick;b.onclick=function(){commit();var ret=old.apply(this,arguments);commit();return ret};b.__v629=true}else if(tries>160)clearInterval(t)},75)}
function buy(id){var q=BOX[id];if(!q)return;var g=normalize(read()),before=g.coins;if(before<q.price){flash('Servono '+q.price+' monete');return}var c=rnd(q.coins[0],q.coins[1]),p=rnd(q.power[0],q.power[1]);g.coins=before-q.price+c;g.power+=p;var nf=roll(g,q.chance);pending={state:snapshot(g),box:id};commit();var api=window.__v628Shop;if(api&&typeof api.openChest==='function'){api.openChest(q,c,p,nf);patchContinue(nf)}else{commit();location.reload()}}
function bind(){var bs=d.querySelectorAll('#v628B [data-v628b]');for(var i=0;i<bs.length;i++){var b=bs[i];if(b.__v629)return; b.onclick=function(){buy(this.getAttribute('data-v628b'))};b.__v629=true}}
setInterval(function(){bind();var chest=d.getElementById('v628ChestOverlay'),unlock=d.getElementById('v597Unlock');if(pending&&((chest&&chest.classList.contains('on'))||(unlock&&unlock.classList.contains('on'))))commit()},120);
setTimeout(bind,300);setTimeout(bind,900);
window.__v629ChestSpend={commit:commit,buy:buy};
})();