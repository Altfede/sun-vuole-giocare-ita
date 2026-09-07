(function(){'use strict';
if(window.__starBrawl584MasteryPoints)return;window.__starBrawl584MasteryPoints=true;
var KEY='starbrawl_mastery_v1';
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return {}}}
function pts(id){var x=load();return Math.max(0,+x[id]||0)}
function cardId(card){var a=card&&card.querySelector('.art[data-detail]');return a&&a.getAttribute('data-detail')}
function detailId(){var a=document.querySelector('.cdmini.active[data-cdmini]');if(a)return a.getAttribute('data-cdmini');var k=document.getElementById('v575DetailKit');if(k)return k.getAttribute('data-id');var m=document.getElementById('v577MasteryDetail');return m&&m.getAttribute('data-id')}
var st=document.createElement('style');st.id='v584MPStyle';st.textContent=`
.v584MPBadge{margin-top:6px;padding:6px 8px;border-radius:9px;background:linear-gradient(135deg,#14233a,#0b1423);border:2px solid #58c8ff;color:#fff;font:1000 9px Arial;text-align:center;box-shadow:0 3px 10px #0006;letter-spacing:.2px}
.v584MPBadge b{color:#7ee6ff;font-size:11px}
#v584MPDetail{margin:8px 0;padding:11px 12px;border-radius:11px;background:linear-gradient(135deg,#112038,#1d1740);border:2px solid #58c8ff;box-shadow:0 5px 16px #0006}
#v584MPDetail .lab{color:#9fdfff;font:1000 9px Arial;letter-spacing:.8px}
#v584MPDetail .val{margin-top:3px;color:#fff;font:1000 18px Arial}
#v584MPDetail .val b{color:#74e7ff}
`;(document.head||document.documentElement).appendChild(st);
function cards(){var cs=document.querySelectorAll('.card');for(var i=0;i<cs.length;i++){var c=cs[i],id=cardId(c);if(!id)continue;var body=c.querySelector('.cardbody')||c,b=c.querySelector('.v584MPBadge');if(!b){b=document.createElement('div');b.className='v584MPBadge';body.appendChild(b)}b.innerHTML='PUNTI MAESTRIA: <b>'+pts(id)+' MP</b>';}}
function detail(){var ch=document.getElementById('charDetail');if(!ch||!ch.classList.contains('on'))return;var id=detailId();if(!id)return;var box=document.getElementById('v584MPDetail');if(!box){box=document.createElement('div');box.id='v584MPDetail';var master=document.getElementById('v577MasteryDetail'),host=master&&master.parentElement;if(!host){var range=document.getElementById('cdRange');host=range&&range.closest('.cdpanel')}if(!host)return;var actions=host.querySelector('.cdactions');if(actions)host.insertBefore(box,actions);else host.appendChild(box)}box.setAttribute('data-id',id);box.innerHTML='<div class="lab">PUNTI MAESTRIA DEL FIGHTER</div><div class="val"><b>'+pts(id)+'</b> MP</div>';}
function scan(){try{cards();detail()}catch(e){}}
scan();setTimeout(scan,300);setTimeout(scan,900);setInterval(scan,800);
window.__v584MasteryPoints={points:pts};
})();