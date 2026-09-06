(function(){'use strict';
if(window.__starBrawlGamemodes548)return;window.__starBrawlGamemodes548=true;
var d=document,sel=d.getElementById('modeSelect'),nav=d.querySelector('nav');if(!sel||!nav)return;
var modes={
 core:{name:'CORE RUSH',icon:'◆',desc:'Combatti per dominare il centro e ottenere più eliminazioni prima dello scadere del tempo.'},
 elim:{name:'ELIMINAZIONE',icon:'☠',desc:'Niente seconde possibilità: abbatti tutta la squadra nemica per vincere.'},
 five:{name:'CORSA A 5 KO',icon:'✦',desc:'La prima squadra che raggiunge 5 eliminazioni vince immediatamente.'},
 surv:{name:'SOPRAVVIVENZA',icon:'♥',desc:'Resisti fino alla fine e chiudi la partita con il vantaggio.'}
};
var st=d.createElement('style');st.id='v548ModeStyle';st.textContent='\
#modeSelect{display:block!important;width:100%!important;min-height:58px!important;margin:10px 0 12px!important;padding:0 46px 0 16px!important;border:2px solid #ffe06b!important;border-radius:14px!important;background:#101a2c!important;color:#fff!important;font-size:16px!important;font-weight:1000!important;letter-spacing:.3px!important;box-shadow:0 5px 0 #755817,0 10px 22px #0005!important;appearance:auto!important;-webkit-appearance:menulist!important}\
.v548ModeLabel{font-size:10px;font-weight:1000;letter-spacing:1.3px;color:#ffe06b;margin-top:12px}\
nav{grid-template-columns:repeat(6,1fr)!important}\
#v548ModeNav{border:1px solid #785eff!important;background:linear-gradient(180deg,#5137a3,#2b235d)!important;color:#fff!important;font-size:8px!important;font-weight:1000!important}\
#v548ModeNav.activeMode{background:linear-gradient(180deg,#7b5cff,#4a31ad)!important;box-shadow:0 0 14px #7b5cff88!important}\
#v548ModeModal{position:fixed;inset:0;z-index:99999;display:none;align-items:flex-end;justify-content:center;background:#050912d9;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);padding:14px 12px calc(14px + env(safe-area-inset-bottom))}\
#v548ModeModal.on{display:flex}\
.v548ModeSheet{width:min(520px,100%);max-height:88vh;overflow:auto;background:linear-gradient(180deg,#1a2843,#0f1728);border:1px solid #526987;border-radius:22px;padding:15px;box-shadow:0 -15px 60px #000a}\
.v548ModeTop{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}.v548ModeTop h2{margin:0;font-size:23px;font-weight:1000}.v548ModeClose{width:42px;height:42px;border:1px solid #ffffff44;border-radius:12px;background:#263650;color:#fff;font-size:24px;font-weight:900}\
.v548ModeGrid{display:grid;gap:9px}.v548ModeCard{width:100%;border:2px solid #344a68;border-radius:16px;background:linear-gradient(135deg,#21324f,#18243a);color:#fff;padding:13px;text-align:left;display:grid;grid-template-columns:48px 1fr;gap:11px;align-items:center;box-shadow:0 4px 0 #09101d;font-family:Arial}.v548ModeCard:active{transform:translateY(2px);box-shadow:0 2px 0 #09101d}.v548ModeCard.selected{border-color:#ffe06b;background:linear-gradient(135deg,#4e4218,#243451);box-shadow:0 0 0 2px #ffe06b33,0 4px 0 #6e5414}.v548ModeIcon{width:48px;height:48px;border-radius:13px;background:#0d1628;display:grid;place-items:center;font-size:25px;color:#ffe06b}.v548ModeName{font-size:15px;font-weight:1000}.v548ModeDesc{font-size:10px;line-height:1.35;color:#c8d3e2;margin-top:4px}\
';d.head.appendChild(st);
if(!d.querySelector('.v548ModeLabel')){var lab=d.createElement('div');lab.className='v548ModeLabel';lab.textContent='MODALITÀ DI GIOCO';sel.parentNode.insertBefore(lab,sel)}
var btn=d.getElementById('v548ModeNav');if(!btn){btn=d.createElement('button');btn.id='v548ModeNav';btn.type='button';btn.textContent='MODALITÀ';nav.appendChild(btn)}
var modal=d.getElementById('v548ModeModal');if(!modal){modal=d.createElement('div');modal.id='v548ModeModal';modal.innerHTML='<div class="v548ModeSheet"><div class="v548ModeTop"><div><div style="font-size:9px;color:#9fb0c7;font-weight:900;letter-spacing:1px">SCEGLI COME COMBATTERE</div><h2>MODALITÀ</h2></div><button class="v548ModeClose" type="button">×</button></div><div class="v548ModeGrid"></div></div>';d.body.appendChild(modal)}
var grid=modal.querySelector('.v548ModeGrid');
function render(){var html='';Object.keys(modes).forEach(function(k){var m=modes[k];html+='<button type="button" class="v548ModeCard '+(sel.value===k?'selected':'')+'" data-v548-mode="'+k+'"><span class="v548ModeIcon">'+m.icon+'</span><span><div class="v548ModeName">'+m.name+'</div><div class="v548ModeDesc">'+m.desc+'</div></span></button>'});grid.innerHTML=html;btn.classList.add('activeMode')}
function open(){render();modal.classList.add('on')}
function close(){modal.classList.remove('on');btn.classList.remove('activeMode')}
btn.onclick=open;modal.querySelector('.v548ModeClose').onclick=close;modal.addEventListener('click',function(e){if(e.target===modal)close();var b=e.target.closest('[data-v548-mode]');if(!b)return;sel.value=b.getAttribute('data-v548-mode');try{sel.dispatchEvent(new Event('change',{bubbles:true}))}catch(x){}close()});
sel.addEventListener('change',function(){if(modal.classList.contains('on'))render()});
})();