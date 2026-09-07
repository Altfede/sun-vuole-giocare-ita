(function(){'use strict';
if(window.__starBrawl614NavCleanup)return;window.__starBrawl614NavCleanup=true;
var d=document;
var st=d.createElement('style');st.id='v614NavCleanupStyle';st.textContent=`
#v550ModeNav,#quickPlay,#v612ProfileHome{display:none!important}
nav{grid-template-columns:repeat(6,minmax(0,1fr))!important;gap:4px!important;padding-left:5px!important;padding-right:5px!important}
nav>button{font-size:7.2px!important;letter-spacing:0!important}
#v552StatsBtn,#v553PassBtn{font-size:7px!important}
#v614StatsProfile{flex:0 0 auto;min-width:86px;height:42px;border:1px solid #6fe4ff;border-radius:11px;background:linear-gradient(180deg,#173a52,#11263b);color:#e7fbff;font:1000 8px Arial;letter-spacing:.4px;box-shadow:0 3px 0 #08131f;touch-action:manipulation}
#v614StatsProfile:active{transform:translateY(2px);box-shadow:0 1px 0 #08131f}
@media(max-width:390px){nav{gap:3px!important;padding-left:3px!important;padding-right:3px!important}nav>button{font-size:6.5px!important}#v552StatsBtn,#v553PassBtn{font-size:6.3px!important}#v614StatsProfile{min-width:72px;height:40px;font-size:7px;padding:0 7px}}
`;(d.head||d.documentElement).appendChild(st);
function openProfile(){try{if(window.__v612Profile&&typeof window.__v612Profile.open==='function'){window.__v612Profile.open();return}}catch(e){}var p=d.getElementById('v612Profile');if(p)p.classList.add('on')}
function cleanupNav(){var mode=d.getElementById('v550ModeNav');if(mode&&mode.parentNode)mode.parentNode.removeChild(mode);var play=d.getElementById('quickPlay');if(play&&play.parentNode)play.parentNode.removeChild(play);var homeProfile=d.getElementById('v612ProfileHome');if(homeProfile)homeProfile.style.display='none'}
function ensureStatsProfile(){var page=d.getElementById('v552Stats');if(!page)return;var top=page.querySelector('.v552Top');if(!top)return;var b=d.getElementById('v614StatsProfile');if(!b){b=d.createElement('button');b.id='v614StatsProfile';b.type='button';b.textContent='PROFILO';b.setAttribute('aria-label','Apri profilo giocatore');b.onclick=openProfile;top.appendChild(b)}}
function run(){cleanupNav();ensureStatsProfile()}
run();setTimeout(run,250);setTimeout(run,900);setTimeout(run,1800);
window.__v614NavCleanup={refresh:run,openProfile:openProfile};
})();