(function(){'use strict';
if(window.__starBrawl622DifficultyTitles)return;window.__starBrawl622DifficultyTitles=true;
var d=document;
var st=d.createElement('style');st.id='v622DifficultyTitlesStyle';st.textContent=`
#v599TitleHome{display:none!important}
nav{grid-template-columns:repeat(7,minmax(0,1fr))!important}
#v622TitlesBtn{border:1px solid #c78cff!important;background:linear-gradient(180deg,#6b3d86,#3b2453)!important;color:#fff!important;font-size:7px!important;font-weight:1000!important}
@media(max-width:390px){#v622TitlesBtn{font-size:6.2px!important}}
`;(d.head||d.documentElement).appendChild(st);
function titlesApi(){return (window.__v603Titles&&typeof window.__v603Titles.open==='function')?window.__v603Titles:((window.__v599Titles&&typeof window.__v599Titles.open==='function')?window.__v599Titles:null)}
function openTitles(){var a=titlesApi();if(a){a.open();return}var tries=0,t=setInterval(function(){tries++;var x=titlesApi();if(x){clearInterval(t);x.open()}else if(tries>=12){clearInterval(t)}},100)}
function ensureTitles(){var nav=d.querySelector('nav');if(!nav)return;var old=d.getElementById('v619TitlesBtn');if(old&&old.parentNode)old.parentNode.removeChild(old);var b=d.getElementById('v622TitlesBtn');if(!b){b=d.createElement('button');b.id='v622TitlesBtn';b.type='button';b.textContent='TITOLI';b.setAttribute('aria-label','Apri titoli giocatore');b.onclick=openTitles;nav.appendChild(b)}}
function renameDifficulty(){var t=d.querySelector('.v610AITitle');if(t&&t.textContent!=='DIFFICOLTÀ')t.textContent='DIFFICOLTÀ'}
function removeHomeTitles(){var e=d.getElementById('v599TitleHome');if(e&&e.parentNode)e.parentNode.removeChild(e)}
function run(){ensureTitles();renameDifficulty();removeHomeTitles()}
run();setTimeout(run,300);setTimeout(run,900);setInterval(run,800);
window.__v622DifficultyTitles={refresh:run,openTitles:openTitles};
})();