(function(){'use strict';
if(window.__starBrawl601CompactFighters)return;window.__starBrawl601CompactFighters=true;
var d=document,st=d.createElement('style');st.id='v601CompactFightersStyle';st.textContent=`
#fightersScreen .grid{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:5px!important}
#fightersScreen .card{border-radius:10px!important;min-width:0!important}
#fightersScreen .art{height:68px!important;min-height:68px!important}
#fightersScreen .art .doll{transform:scale(.78)!important;transform-origin:center!important}
#fightersScreen .art .svgchar,#fightersScreen .art svg,#fightersScreen .art img{width:62px!important;height:62px!important;max-width:62px!important;max-height:62px!important}
#fightersScreen .cardbody{padding:5px!important}
#fightersScreen .name{font-size:11px!important;line-height:1.05!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
#fightersScreen .rar{font-size:7px!important;line-height:1.1!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
#fightersScreen .meta{font-size:6.5px!important;line-height:1.25!important;margin-top:2px!important}
#fightersScreen .badge{right:3px!important;top:3px!important;padding:3px 4px!important;border-radius:6px!important;font-size:6.5px!important;max-width:72%!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
#fightersScreen .level{font-size:6px!important;padding:2px 4px!important;margin-top:3px!important;border-radius:5px!important}
#fightersScreen .actions{gap:3px!important;margin-top:4px!important;grid-template-columns:1fr 1fr!important}
#fightersScreen .actions button{min-height:25px!important;height:25px!important;border-radius:6px!important;font-size:6.2px!important;line-height:1!important;padding:2px!important;overflow:hidden!important}
#fightersScreen .v577MasteryMini{margin-top:3px!important;padding:3px 4px!important;border-radius:6px!important;font-size:5.8px!important}
#fightersScreen .v577MasteryTop{gap:2px!important}
#fightersScreen .v577MasteryBar{height:3px!important;margin-top:2px!important}
#fightersScreen .v584MPBadge{margin-top:3px!important;padding:3px 4px!important;border-width:1px!important;border-radius:6px!important;font-size:5.7px!important;letter-spacing:0!important}
#fightersScreen .v584MPBadge b{font-size:6.4px!important}
#fightersScreen .v586SkinTag{margin-top:3px!important;padding:3px 4px!important;border-radius:5px!important;font-size:5.7px!important}
#fightersScreen .v575KitMini,#fightersScreen .v576AttackMini{font-size:5.8px!important;padding:3px 4px!important;margin-top:3px!important;border-radius:6px!important}
@media(max-width:350px){#fightersScreen .grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
@media(min-width:700px){#fightersScreen .grid{grid-template-columns:repeat(5,minmax(0,1fr))!important;gap:7px!important}#fightersScreen .art{height:82px!important;min-height:82px!important}#fightersScreen .art .svgchar,#fightersScreen .art svg,#fightersScreen .art img{width:72px!important;height:72px!important;max-width:72px!important;max-height:72px!important}}
`;
(d.head||d.documentElement).appendChild(st);
function tag(){var fs=d.getElementById('fightersScreen');if(!fs)return;var t=d.getElementById('v601CompactLabel');if(!t){t=d.createElement('div');t.id='v601CompactLabel';t.style.cssText='font:900 7px Arial;color:#8fa7c2;margin:-3px 0 7px;letter-spacing:.7px';var title=fs.querySelector('.title');if(title&&title.parentNode)title.parentNode.insertBefore(t,title.nextSibling)}t.textContent='ROSTER COMPATTO · '+fs.querySelectorAll('.card').length+' FIGHTER'}
tag();setTimeout(tag,400);setTimeout(tag,1200);setInterval(tag,1500);
})();