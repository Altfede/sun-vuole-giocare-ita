(function(){'use strict';
if(window.__starBrawl683MusicInstaller)return;window.__starBrawl683MusicInstaller=true;
var VERSION='V6.83';
function version(d){try{d.title=(d.title||'').replace(/V6\.82|V6\.81|V6\.80|V6\.79|V6\.78|V6\.77|V6\.76|V6\.75|V6\.74|V6\.73|V6\.72|V6\.71|V6\.70|V6\.69|V6\.68|V6\.67|V6\.66|V5\.28\.2/g,VERSION);var b=d.querySelector('.brand');if(b)b.innerHTML=b.innerHTML.replace(/V6\.82|V6\.81|V6\.80|V6\.79|V6\.78|V6\.77|V6\.76|V6\.75|V6\.74|V6\.73|V6\.72|V6\.71|V6\.70|V6\.69|V6\.68|V6\.67|V6\.66|V5\.28\.2/g,VERSION)}catch(e){}}
function install(d){if(!d||!d.defaultView)return;var w=d.defaultView;if(w.__starBrawl683LobbyMusic)return;var home=d.getElementById('homeScreen');if(!home)return;w.__starBrawl683LobbyMusic=true;
 var AC=w.AudioContext||w.webkitAudioContext;if(!AC)return;var ctx=null,bus=null,started=false,next=0,step=0,timer=null;var BPM=108,STEP=60/BPM/2;
 var bass=[38,38,41,41,34,34,36,36,38,38,41,41,43,43,36,36];
 var lead=[62,65,69,65,60,64,67,64,58,62,65,62,60,64,67,72];
 function hz(n){return 440*Math.pow(2,(n-69)/12)}
 function setup(){if(ctx)return;ctx=new AC();bus=ctx.createGain();bus.gain.value=0.0001;bus.connect(ctx.destination);next=ctx.currentTime+.04;timer=w.setInterval(schedule,50)}
 function tone(n,t,dur,vol,type){var o=ctx.createOscillator(),g=ctx.createGain();o.type=type||'triangle';o.frequency.setValueAtTime(hz(n),t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.012);g.gain.setValueAtTime(vol,Math.max(t+.02,t+dur-.06));g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(bus);o.start(t);o.stop(t+dur+.03)}
 function kick(t){var o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.setValueAtTime(120,t);o.frequency.exponentialRampToValueAtTime(48,t+.13);g.gain.setValueAtTime(.45,t);g.gain.exponentialRampToValueAtTime(.0001,t+.17);o.connect(g);g.connect(bus);o.start(t);o.stop(t+.18)}
 function noise(t,dur,vol){var len=Math.max(1,Math.floor(ctx.sampleRate*dur)),b=ctx.createBuffer(1,len,ctx.sampleRate),a=b.getChannelData(0);for(var i=0;i<len;i++)a[i]=(Math.random()*2-1)*(1-i/len);var s=ctx.createBufferSource(),hp=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=b;hp.type='highpass';hp.frequency.value=5200;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(hp);hp.connect(g);g.connect(bus);s.start(t)}
 function play(t,s){var p=s%16; if(p%4===0)kick(t); if(p%4===2)noise(t,.11,.12); else noise(t,.035,.045); tone(bass[p]-12,t,STEP*1.7,.15,'square'); tone(lead[p],t,STEP*.72,.13,'triangle'); if(p%2===0)tone(lead[p]+12,t,STEP*.42,.035,'sine')}
 function schedule(){if(!ctx||ctx.state==='closed')return;while(next<ctx.currentTime+.24){play(next,step);next+=STEP;step=(step+1)%16}}
 function active(){try{return !!(home&&home.classList.contains('active')&&!d.hidden)}catch(e){return false}}
 function vol(){if(!ctx||!bus||!started)return;var t=ctx.currentTime,target=active()?0.48:0.0001;try{bus.gain.cancelScheduledValues(t);bus.gain.setValueAtTime(Math.max(.0001,bus.gain.value),t);bus.gain.exponentialRampToValueAtTime(target,t+.18)}catch(e){bus.gain.value=target}}
 function unlock(){setup();if(!ctx)return;var p=ctx.resume();if(p&&p.then)p.then(function(){started=true;vol()}).catch(function(){});else{started=true;vol()}}
 ['pointerdown','touchstart','click','keydown'].forEach(function(ev){d.addEventListener(ev,unlock,{capture:true,passive:true})});d.addEventListener('visibilitychange',vol);w.setInterval(vol,220);w.__v683LobbyMusic={start:unlock,volume:vol};
 }
function scan(d){if(!d)return;try{version(d);install(d)}catch(e){}var fs=[];try{fs=d.querySelectorAll('iframe')}catch(e){}for(var i=0;i<fs.length;i++){try{scan(fs[i].contentDocument||fs[i].contentWindow.document)}catch(e){}}}
function tick(){scan(document)}tick();setTimeout(tick,120);setTimeout(tick,450);setTimeout(tick,1100);setInterval(tick,300);
})();