(function(){'use strict';
if(window.__starBrawl620DifficultyTitles)return;window.__starBrawl620DifficultyTitles=true;
var d=document;
var st=d.createElement('style');st.id='v620DifficultyTitlesStyle';st.textContent=`
#v599TitleHome{display:none!important}
nav{grid-template-columns:repeat(7,minmax(0,1fr))!important}
#v619TitlesBtn{border:1px solid #c78cff!important;background:linear-gradient(180deg,#6b3d86,#3b2453)!important;color:#fff!important;font-size:7px!important;font-weight:1000!important}
@media(max-width:390px){#v619TitlesBtn{font-size:6.2px!important}}
`;(d.head||d.documentElement).appendChild(st);
function openTitles(){try{if(window.__v599Titles&&typeof window.__v599Titles.open==='function'){window.__v599Titles.open();return}}catch(e){}var p=d.getElementById('v599TitlePage');if(p)p.classList.add('on')}
function ensureTitles(){var nav=d.querySelector('nav');if(!nav)return;var b=d.getElementById('v619TitlesBtn');if(!b){b=d.createElement('button');b.id='v619TitlesBtn';b.type='button';b.textContent='TITOLI';b.setAttribute('aria-label','Apri titoli giocatore');b.onclick=openTitles;nav.appendChild(b)}}
function renameDifficulty(){var t=d.querySelector('.v610AITitle');if(t&&t.textContent!=='DIFFICOLTÀ')t.textContent='DIFFICOLTÀ'}
function removeHomeTitles(){var e=d.getElementById('v599TitleHome');if(e&&e.parentNode)e.parentNode.removeChild(e)}
function run(){ensureTitles();renameDifficulty();removeHomeTitles()}
run();setTimeout(run,300);setTimeout(run,900);setInterval(run,700);
window.__v620DifficultyTitles={refresh:run,openTitles:openTitles};
})();