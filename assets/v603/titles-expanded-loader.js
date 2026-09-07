(function(){'use strict';
if(window.__starBrawl603TitlesLoader)return;window.__starBrawl603TitlesLoader=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/f20711ff45c73c285be23c056bfb39b1953aeb61/assets/v599/player-titles.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('Titoli base non caricabili');return r.text()}).then(function(src){
src=src.replace("if(window.__starBrawl599Titles)return;window.__starBrawl599Titles=true;","if(window.__starBrawl603Titles)return;window.__starBrawl603Titles=true;");
src=src.replace("SKINS='starbrawl_skins_v1',ACH='starbrawl_achievements_v1';","SKINS='starbrawl_skins_v1',ACH='starbrawl_achievements_v1',BOSS='starbrawl_boss_v1';");
var snapRe=/function snap\(\)\{[\s\S]*?\}\nvar T=/;
if(!snapRe.test(src))throw new Error('Snap Titoli non trovato');
var snap="function masteryExtra(){var x=read(MASTERY),cosmic=0,total=0,k;for(k in x){var p=Math.max(0,+x[k]||0);total+=p;if(p>=1400)cosmic++}return{cosmic:cosmic,total:total}}\nfunction snap(){var g=read(GAME),s=read(STATS),r=read(RANKED),sk=read(SKINS),m=bestMastery(),a=read(ACH),b=read(BOSS),me=masteryExtra();return{kills:+s.kills||0,wins:+s.wins||0,games:+s.games||0,chests:+s.chestsOpened||0,unlocked:Array.isArray(g.unlocked)?g.unlocked.length:0,cups:+g.cups||0,skins:Array.isArray(sk.owned)?sk.owned.length:0,mastery:m.v,masteryTotal:me.total,cosmic:me.cosmic,masterId:m.id,masterName:m.name,rankedBest:+r.best||0,bossWins:+b.wins||0,claimed:a.claimed||{}}}\nvar T=";
src=src.replace(snapRe,snap);
var extra=String.raw`,
{id:'slayer_500',icon:'⚔',name:'MIETITORE',desc:'Raggiungi 500 eliminazioni.',key:'kills',goal:500},
{id:'slayer_1000',icon:'☠',name:'APOCALISSE',desc:'Raggiungi 1000 eliminazioni.',key:'kills',goal:1000},
{id:'games_100',icon:'◉',name:'INSTANCABILE',desc:'Gioca 100 partite.',key:'games',goal:100},
{id:'wins_100',icon:'♛',name:'DOMINATORE',desc:'Vinci 100 partite.',key:'wins',goal:100},
{id:'collector_20',icon:'◆',name:'RECLUTATORE',desc:'Sblocca 20 fighter.',key:'unlocked',goal:20},
{id:'collector_30',icon:'★',name:'ARCHIVISTA',desc:'Sblocca 30 fighter.',key:'unlocked',goal:30},
{id:'master_diamond',icon:'◇',name:'DIAMANTE DELLA MAESTRIA',desc:'Porta un fighter a 800 MP.',key:'mastery',goal:800},
{id:'master_total_5000',icon:'✺',name:'ENCICLOPEDIA COSMICA',desc:'Accumula 5000 MP totali.',key:'masteryTotal',goal:5000},
{id:'cosmic_three',icon:'✹',name:'TRINITÀ COSMICA',desc:'Porta 3 fighter al rango COSMICO.',key:'cosmic',goal:3},
{id:'ranked_gold',icon:'▲',name:'ORO RANKED',desc:'Raggiungi 500 RP.',key:'rankedBest',goal:500},
{id:'ranked_diamond',icon:'◆',name:'DIAMANTE RANKED',desc:'Raggiungi 900 RP.',key:'rankedBest',goal:900},
{id:'ranked_legend',icon:'♛',name:'LEGGENDA RANKED',desc:'Raggiungi 2000 RP.',key:'rankedBest',goal:2000},
{id:'ranked_cosmic',icon:'✺',name:'COSMICO RANKED',desc:'Raggiungi 2800 RP.',key:'rankedBest',goal:2800},
{id:'boss_first',icon:'☠',name:'AMMAZZA-BOSS',desc:'Sconfiggi il tuo primo boss.',key:'bossWins',goal:1},
{id:'boss_5',icon:'⚔',name:'CACCIATORE DI TITANI',desc:'Sconfiggi 5 boss.',key:'bossWins',goal:5},
{id:'boss_20',icon:'✹',name:'BOSS BREAKER',desc:'Sconfiggi 20 boss.',key:'bossWins',goal:20},
{id:'boss_50',icon:'♛',name:'FLAGELLO DEI COLOSSI',desc:'Sconfiggi 50 boss.',key:'bossWins',goal:50},
{id:'cups_2500',icon:'🏆',name:'ASSO DELLE COPPE',desc:'Raggiungi 2500 coppe.',key:'cups',goal:2500},
{id:'cups_5000',icon:'♛',name:'RE DELLE COPPE',desc:'Raggiungi 5000 coppe.',key:'cups',goal:5000}`;
var end='\n];\nfunction state';
if(src.indexOf(end)<0)throw new Error('Fine lista Titoli non trovata');
src=src.replace(end,extra+end);
src=src.replace(/window\.__v599Titles=/g,'window.__v603Titles=');
(0,eval)(src+'\n//# sourceURL=starbrawl-v603-titles-expanded.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:2147483647;background:#5a1d68;color:#fff;padding:10px;border-radius:10px;font:700 11px Arial';x.textContent='Errore Titoli V6.03: '+e.message;document.body.appendChild(x)});
})();