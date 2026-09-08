(function(){'use strict';
if(window.__starBrawl632SeasonButton)return;window.__starBrawl632SeasonButton=true;
var d=document;
var st=d.createElement('style');st.id='v632SeasonButtonStyle';st.textContent=`
#v632RankedDock{position:relative;margin:0 0 10px}
#v632RankedDock>#v590RankedPanel{margin-bottom:0!important}
#v632RankedDock #v631SeasonBtn{display:none!important}
#v632RankedDock #v590RankedPanel .v631Actions{display:block!important;margin-top:4px!important}
#v632RankedDock #v590RankedPanel #v590RankedPlay{width:calc(64% - 4px)!important;margin:0!important;display:block!important}
#v632SeasonStable{position:absolute;right:12px;bottom:12px;width:calc(36% - 12px);min-height:46px;border:0;border-radius:10px;background:linear-gradient(#9c78ff,#5a39b8);color:#fff;font:1000 10px Arial;box-shadow:0 4px 0 #2c1a67;z-index:5;touch-action:manipulation}
#v632SeasonStable:active{transform:translateY(2px);box-shadow:0 2px 0 #2c1a67}
@media(max-width:390px){#v632SeasonStable{right:10px;bottom:12px;width:calc(36% - 10px);font-size:9px}}
`;(d.head||d.documentElement).appendChild(st);
function openSeason(){try{if(window.__v631RankedSeasons&&typeof window.__v631RankedSeasons.open==='function'){window.__v631RankedSeasons.open();return}}catch(e){}var h=d.getElementById('v631Hub');if(h)h.classList.add('on')}
function install(){var p=d.getElementById('v590RankedPanel');if(!p)return false;var dock=d.getElementById('v632RankedDock');if(!dock){dock=d.createElement('div');dock.id='v632RankedDock';if(p.parentNode){p.parentNode.insertBefore(dock,p);dock.appendChild(p)}}else if(p.parentNode!==dock){dock.appendChild(p)}var b=d.getElementById('v632SeasonStable');if(!b){b=d.createElement('button');b.id='v632SeasonStable';b.type='button';b.textContent='STAGIONE';b.onclick=openSeason;dock.appendChild(b)}return true}
install();setTimeout(install,250);setTimeout(install,800);setTimeout(install,1500);
setInterval(function(){install()},1200);
window.__v632SeasonButton={refresh:install,open:openSeason};
})();