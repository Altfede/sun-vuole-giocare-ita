(function(){'use strict';
if(window.__starBrawl672SystemsCompat)return;window.__starBrawl672SystemsCompat=true;
function addStyle(d){if(d.getElementById('v672SystemsStyle'))return;var s=d.createElement('style');s.id='v672SystemsStyle';s.textContent=`
body.v668Home #v672SystemsDock{position:absolute;left:96px;right:96px;top:7px;z-index:70;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;align-items:start;pointer-events:none}
body.v668Home #v672SystemsDock>*{pointer-events:auto!important;min-width:0!important;position:relative!important;inset:auto!important;transform:none!important;z-index:71!important;box-sizing:border-box!important}
body.v668Home #v672SystemsDock #v602BossHome{margin:0!important;padding:6px!important;border-radius:10px!important;min-height:58px!important;box-shadow:0 4px 12px #0007!important}
body.v668Home #v672SystemsDock #v602BossHome .v602HomeTop{gap:5px!important;min-height:44px!important}
body.v668Home #v672SystemsDock #v602BossHome .v602Skull{width:32px!important;height:32px!important;border-radius:8px!important;font-size:17px!important;flex:0 0 32px!important}
body.v668Home #v672SystemsDock #v602BossHome .v602HomeK{font-size:6px!important}
body.v668Home #v672SystemsDock #v602BossHome .v602HomeN{font-size:9px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
body.v668Home #v672SystemsDock #v602BossHome .v602HomeS{font-size:5.5px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
body.v668Home #v672SystemsDock #v602BossHome .v603BossBtns{gap:3px!important;flex:0 0 auto!important}
body.v668Home #v672SystemsDock #v602BossHome .v603ChooseBoss,body.v668Home #v672SystemsDock #v602BossHome .v602Play{min-height:30px!important;height:30px!important;padding:4px 6px!important;border-radius:7px!important;font-size:6px!important}
body.v668Home #v672SystemsDock #v610AIBox{margin:0!important;padding:7px!important;border-radius:10px!important;min-height:58px!important;box-shadow:0 4px 12px #0007!important}
body.v668Home #v672SystemsDock #v610AIBox .v610AITop{gap:5px!important;min-height:44px!important}
body.v668Home #v672SystemsDock #v610AIBox .v610AITitle{font-size:8px!important}
body.v668Home #v672SystemsDock #v610AIBox .v610AISub{font-size:5.5px!important;line-height:1.15!important}
body.v668Home #v672SystemsDock #v610AIBox .v610AISelect{max-width:96px!important;min-height:30px!important;padding:4px 5px!important;border-radius:7px!important;font-size:7px!important}
body.v668Home #v672SystemsDock #v610AIBox .v610Roles,body.v668Home #v672SystemsDock #v610AIBox .v610AIDesc{display:none!important}
body.v668Home #v672SystemsDock #v590RankedPanel{margin:0!important;padding:6px!important;border-radius:10px!important;min-height:58px!important;box-shadow:0 4px 12px #0007!important}
body.v668Home #v672SystemsDock #v590RankedPanel .v590Head{gap:5px!important;min-height:25px!important}
body.v668Home #v672SystemsDock #v590RankedPanel .v590Emblem{width:28px!important;height:28px!important;flex:0 0 28px!important}
body.v668Home #v672SystemsDock #v590RankedPanel .v590Kicker{font-size:5.5px!important}
body.v668Home #v672SystemsDock #v590RankedPanel .v590Division{font-size:9px!important;line-height:1!important}
body.v668Home #v672SystemsDock #v590RankedPanel .v590RP{font-size:6.5px!important;margin-top:1px!important}
body.v668Home #v672SystemsDock #v590RankedPanel .v590Bar,body.v668Home #v672SystemsDock #v590RankedPanel .v590Next,body.v668Home #v672SystemsDock #v590RankedPanel .v590Stats{display:none!important}
body.v668Home #v672SystemsDock #v590RankedPanel .v631Actions{display:grid!important;grid-template-columns:1.2fr .8fr!important;gap:4px!important;margin-top:4px!important}
body.v668Home #v672SystemsDock #v590RankedPanel #v590RankedPlay,body.v668Home #v672SystemsDock #v590RankedPanel #v631SeasonBtn{min-height:28px!important;height:28px!important;margin:0!important;padding:3px 5px!important;border-radius:7px!important;font-size:6.5px!important}
@media(max-width:650px){body.v668Home #v672SystemsDock{left:82px;right:82px;top:5px;gap:4px}body.v668Home #v672SystemsDock #v602BossHome{padding:4px!important}body.v668Home #v672SystemsDock #v602BossHome .v602Skull{display:none!important}body.v668Home #v672SystemsDock #v602BossHome .v602HomeS{display:none!important}body.v668Home #v672SystemsDock #v610AIBox{padding:4px!important}body.v668Home #v672SystemsDock #v610AIBox .v610AISub{display:none!important}body.v668Home #v672SystemsDock #v610AIBox .v610AISelect{max-width:78px!important;font-size:6px!important}body.v668Home #v672SystemsDock #v590RankedPanel{padding:4px!important}body.v668Home #v672SystemsDock #v590RankedPanel .v590Emblem{width:24px!important;height:24px!important;flex-basis:24px!important}body.v668Home #v672SystemsDock #v590RankedPanel #v590RankedPlay,body.v668Home #v672SystemsDock #v590RankedPanel #v631SeasonBtn{height:25px!important;min-height:25px!important;font-size:5.7px!important}}
`;(d.head||d.documentElement).appendChild(s)}
function moveSystems(d){var home=d.getElementById('homeScreen');if(!home)return false;addStyle(d);var dock=d.getElementById('v672SystemsDock');if(!dock){dock=d.createElement('div');dock.id='v672SystemsDock';home.appendChild(dock)}var ids=['v602BossHome','v610AIBox','v590RankedPanel'];for(var i=0;i<ids.length;i++){var e=d.getElementById(ids[i]);if(e&&e.parentNode!==dock)dock.appendChild(e)}return true}
function version(d){try{d.title=(d.title||'').replace(/V6\.71|V6\.70|V6\.69|V6\.68|V6\.67|V6\.66|V5\.28\.2/g,'V6.72');var b=d.querySelector('.brand');if(b)b.innerHTML=b.innerHTML.replace(/V6\.71|V6\.70|V6\.69|V6\.68|V6\.67|V6\.66|V5\.28\.2/g,'V6.72')}catch(e){}}
function scan(d){if(!d)return;try{moveSystems(d);version(d)}catch(e){}var fs=[];try{fs=d.querySelectorAll('iframe')}catch(e){}for(var i=0;i<fs.length;i++){try{scan(fs[i].contentDocument||fs[i].contentWindow.document)}catch(e){}}}
function tick(){scan(document)}tick();setTimeout(tick,120);setTimeout(tick,400);setTimeout(tick,1000);setInterval(tick,250);
})();