(function(){'use strict';
if(window.__starBrawl609MasteryIcons)return;window.__starBrawl609MasteryIcons=true;
var d=document,KEY='starbrawl_mastery_v1';
var TIERS=[{n:'BRONZO',m:0},{n:'ARGENTO',m:150},{n:'ORO',m:400},{n:'DIAMANTE',m:800},{n:'COSMICO',m:1400}];
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}}
function points(id){var x=load();return Math.max(0,+x[id]||0)}
function tierFromPoints(p){for(var i=TIERS.length-1;i>=0;i--)if(p>=TIERS[i].m)return TIERS[i].n;return 'BRONZO'}
function tierFor(id){return tierFromPoints(points(id))}
function cardId(c){var a=c&&c.querySelector('.art[data-detail]');return a&&a.getAttribute('data-detail')}
function detailId(){var a=d.querySelector('.cdmini.active[data-cdmini]');if(a)return a.getAttribute('data-cdmini');var k=d.getElementById('v575DetailKit');if(k&&k.getAttribute('data-id'))return k.getAttribute('data-id');var m=d.getElementById('v577MasteryDetail');return m&&m.getAttribute('data-id')}
function icon(name,small){var cls='v609RoadIcon '+String(name||'BRONZO').toLowerCase()+(small?' small':'');return '<span class="'+cls+'"><i></i></span>'}
var st=d.createElement('style');st.id='v609MasteryStableStyle';st.textContent=`
#v577MasterySummary{display:none!important}
.v577MasteryMini{height:27px!important;min-height:27px!important;max-height:27px!important;box-sizing:border-box!important;overflow:hidden!important;padding:4px 5px!important;margin-top:4px!important}
.v577MasteryMini .v577MasteryTop{height:14px!important;min-height:14px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:4px!important;line-height:1!important}
.v577MasteryMini .v577MasteryRank{display:flex!important;align-items:center!important;gap:3px!important;white-space:nowrap!important;font-size:6.2px!important;line-height:1!important}
.v577MasteryMini .v577MasteryRank:before{content:'★';display:grid!important;place-items:center!important;width:12px!important;height:12px!important;min-width:12px!important;max-width:12px!important;min-height:12px!important;max-height:12px!important;box-sizing:border-box!important;border-radius:4px!important;font:900 6px/1 Arial!important;color:#fff!important;border:1px solid #ffffff66!important;box-shadow:none!important}
.v577MasteryMini[data-v609-tier='BRONZO'] .v577MasteryRank:before{background:#8b5132!important;border-color:#d49468!important}
.v577MasteryMini[data-v609-tier='ARGENTO'] .v577MasteryRank:before{background:#697787!important;border-color:#dce7f1!important}
.v577MasteryMini[data-v609-tier='ORO'] .v577MasteryRank:before{background:#b67a0b!important;border-color:#ffe06b!important}
.v577MasteryMini[data-v609-tier='DIAMANTE'] .v577MasteryRank:before{content:'◆';background:#288ec4!important;border-color:#bff7ff!important}
.v577MasteryMini[data-v609-tier='COSMICO'] .v577MasteryRank:before{content:'✦';background:#6e3ca5!important;border-color:#e1b8ff!important}
.v577MasteryMini .v577MasteryBar{height:3px!important;min-height:3px!important;max-height:3px!important;margin-top:2px!important}
#v577MasteryDetail{min-height:68px!important;box-sizing:border-box!important}
#v577MasteryDetail .v577DetailRank{display:flex!important;align-items:center!important;gap:7px!important}
#v577MasteryDetail .v577DetailRank:before{content:'★';display:grid;place-items:center;width:28px;height:28px;min-width:28px;border-radius:8px;font:900 12px Arial;color:#fff;border:2px solid #ffffff66}
#v577MasteryDetail[data-v609-tier='BRONZO'] .v577DetailRank:before{background:#8b5132;border-color:#d49468}
#v577MasteryDetail[data-v609-tier='ARGENTO'] .v577DetailRank:before{background:#697787;border-color:#dce7f1}
#v577MasteryDetail[data-v609-tier='ORO'] .v577DetailRank:before{background:#b67a0b;border-color:#ffe06b}
#v577MasteryDetail[data-v609-tier='DIAMANTE'] .v577DetailRank:before{content:'◆';background:#288ec4;border-color:#bff7ff}
#v577MasteryDetail[data-v609-tier='COSMICO'] .v577DetailRank:before{content:'✦';background:#6e3ca5;border-color:#e1b8ff}
.v609RoadIcon{display:inline-grid;place-items:center;width:34px;height:30px;vertical-align:middle}.v609RoadIcon.small{width:27px;height:24px}.v609RoadIcon i{display:grid;place-items:center;width:78%;height:78%;border-radius:8px;border:2px solid #fff6;background:#8b5132}.v609RoadIcon i:after{content:'★';font:900 10px Arial;color:#fff}.v609RoadIcon.argento i{background:#697787;border-color:#dce7f1}.v609RoadIcon.oro i{background:#b67a0b;border-color:#ffe06b}.v609RoadIcon.diamante i{background:#288ec4;border-color:#bff7ff;transform:rotate(45deg);border-radius:4px}.v609RoadIcon.diamante i:after{content:'◆';transform:rotate(-45deg)}.v609RoadIcon.cosmico i{background:#6e3ca5;border-color:#e1b8ff;border-radius:50%}.v609RoadIcon.cosmico i:after{content:'✦'}
`;(d.head||d.documentElement).appendChild(st);
function scan(){try{var cards=d.querySelectorAll('.card');for(var i=0;i<cards.length;i++){var c=cards[i],id=cardId(c),box=c.querySelector('.v577MasteryMini');if(!id||!box)continue;box.setAttribute('data-v609-tier',tierFor(id))}var det=d.getElementById('v577MasteryDetail'),id2=detailId();if(det&&id2)det.setAttribute('data-v609-tier',tierFor(id2))}catch(e){}}
scan();setTimeout(scan,250);setTimeout(scan,800);setInterval(scan,700);
window.addEventListener('starbrawl:mastery-awarded',scan);
window.__v582MasteryIcons={icon:icon,tierFor:tierFor};
window.__v609MasteryIcons={points:points,tierFor:tierFor,refresh:scan};
})();