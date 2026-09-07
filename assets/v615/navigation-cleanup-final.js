(function(){'use strict';
if(window.__starBrawl615NavCleanup)return;window.__starBrawl615NavCleanup=true;
var d=document,pending=false;
var st=d.createElement('style');st.id='v615NavCleanupStyle';st.textContent=`
#v550ModeNav,#quickPlay,#v612ProfileHome,#v613ProfileButton{display:none!important}
nav{grid-template-columns:repeat(6,minmax(0,1fr))!important;gap:4px!important;padding-left:5px!important;padding-right:5px!important}
nav>button{font-size:7.2px!important;letter-spacing:0!important;min-width:0!important}
#v552StatsBtn,#v553PassBtn{font-size:7px!important}
#v615StatsProfile{flex:0 0 auto;min-width:92px;height:42px;border:1px solid #6fe4ff;border-radius:11px;background:linear-gradient(180deg,#173a52,#11263b);color:#e7fbff;font:1000 8px Arial;letter-spacing:.4px;box-shadow:0 3px 0 #08131f;touch-action:manipulation}
#v615StatsProfile:active{transform:translateY(2px);box-shadow:0 1px 0 #08131f}
@media(max-width:390px){nav{gap:3px!important;padding-left:3px!important;padding-right:3px!important}nav>button{font-size:6.5px!important}#v552StatsBtn,#v553PassBtn{font-size:6.3px!important}#v615StatsProfile{min-width:76px;height:40px;font-size:7px;padding:0 7px}}
`;(d.head||d.documentElement).appendChild(st);
function openProfile(){try{if(window.__v612Profile&&typeof window.__v612Profile.open==='function'){window.__v612Profile.open();return}}catch(e){}var p=d.getElementById('v612Profile');if(p)p.classList.add('on')}
function removeNode(id){var e=d.getElementById(id);if(e&&e.parentNode)e.parentNode.removeChild(e)}
function reconcile(){pending=false;removeNode('v550ModeNav');removeNode('quickPlay');removeNode('v613ProfileButton');var card=d.getElementById('v612ProfileHome');if(card&&card.parentNode)card.parentNode.removeChild(card);var page=d.getElementById('v552Stats');if(page){var top=page.querySelector('.v552Top');if(top&&!d.getElementById('v615StatsProfile')){var b=d.createElement('button');b.id='v615StatsProfile';b.type='button';b.textContent='PROFILO';b.setAttribute('aria-label','Apri profilo giocatore');b.onclick=openProfile;top.appendChild(b)}}}
function schedule(){if(pending)return;pending=true;Promise.resolve().then(reconcile)}
reconcile();setTimeout(reconcile,250);setTimeout(reconcile,900);setTimeout(reconcile,1800);
var obs=new MutationObserver(schedule);obs.observe(d.documentElement,{childList:true,subtree:true});
window.__v615NavCleanup={refresh:reconcile,openProfile:openProfile};
})();