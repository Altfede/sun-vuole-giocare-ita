(function(){'use strict';
if(window.__starBrawl603AchievementsLoader)return;window.__starBrawl603AchievementsLoader=true;
var SRC='https://raw.githack.com/Altfede/sun-vuole-giocare-ita/8ba114735d5dc7afdf7b73744de923ec3a37a56b/assets/v598/achievements.js';
fetch(SRC).then(function(r){if(!r.ok)throw new Error('Achievement base non caricabile');return r.text()}).then(function(src){
src=src.replace("if(window.__starBrawl598Achievements)return;window.__starBrawl598Achievements=true;","if(window.__starBrawl603Achievements)return;window.__starBrawl603Achievements=true;");
src=src.replace("RANKED='starbrawl_ranked_v1',SKINS='starbrawl_skins_v1';","RANKED='starbrawl_ranked_v1',SKINS='starbrawl_skins_v1',BOSS='starbrawl_boss_v1';");
var snapRe=/function snap\(\)\{[\s\S]*?\}\nvar A=/;
if(!snapRe.test(src))throw new Error('Snap Achievement non trovato');
var snap="function masteryExtra(){var x=read(MASTERY),cosmic=0,total=0,k;for(k in x){var v=Math.max(0,+x[k]||0);total+=v;if(v>=1400)cosmic++}return{cosmic:cosmic,total:total}}\nfunction snap(){var g=read(GAME),s=read(STATS),r=read(RANKED),m=masteryMax(),me=masteryExtra(),b=read(BOSS);return{kills:+s.kills||0,wins:+s.wins||0,games:+s.games||0,chests:+s.chestsOpened||0,unlocked:Array.isArray(g.unlocked)?g.unlocked.length:0,cups:+g.cups||0,mastery:m.v,masteryTotal:me.total,cosmic:me.cosmic,rankedBest:+r.best||0,skins:skinOwned(),bossWins:+b.wins||0,bossFast:(+b.bestTime>0&&+b.bestTime<=45)?1:0}}\nvar A=";
src=src.replace(snapRe,snap);
var extra=String.raw`,
{id:'slayer_500',cat:'COMBATTIMENTO',icon:'⚔',name:'MIETITORE',desc:'Raggiungi 500 eliminazioni totali.',key:'kills',goal:500,reward:{coins:700}},
{id:'slayer_1000',cat:'COMBATTIMENTO',icon:'☠',name:'APOCALISSE',desc:'Raggiungi 1000 eliminazioni totali.',key:'kills',goal:1000,reward:{boxes:3}},
{id:'games_100',cat:'COMBATTIMENTO',icon:'◉',name:'INSTANCABILE',desc:'Gioca 100 partite.',key:'games',goal:100,reward:{power:500}},
{id:'wins_100',cat:'COMBATTIMENTO',icon:'♛',name:'DOMINATORE',desc:'Vinci 100 partite.',key:'wins',goal:100,reward:{boxes:4}},
{id:'collector_20',cat:'COLLEZIONE',icon:'◆',name:'MEZZO ROSTER',desc:'Sblocca 20 fighter.',key:'unlocked',goal:20,reward:{coins:500}},
{id:'collector_30',cat:'COLLEZIONE',icon:'★',name:'ARCHIVISTA',desc:'Sblocca 30 fighter.',key:'unlocked',goal:30,reward:{boxes:2}},
{id:'boxes_75',cat:'COLLEZIONE',icon:'▣',name:'CACCIATORE DI CASSE',desc:'Apri 75 casse.',key:'chests',goal:75,reward:{power:650}},
{id:'skins_5',cat:'COLLEZIONE',icon:'✧',name:'ARMADIO PIENO',desc:'Possiedi 5 skin speciali.',key:'skins',goal:5,reward:{coins:800}},
{id:'master_diamond',cat:'MAESTRIA',icon:'◇',name:'MAESTRIA DIAMANTE',desc:'Porta un fighter ad almeno 800 MP.',key:'mastery',goal:800,reward:{coins:650}},
{id:'master_total_5000',cat:'MAESTRIA',icon:'✺',name:'5000 MP TOTALI',desc:'Accumula 5000 MP sommando tutti i fighter.',key:'masteryTotal',goal:5000,reward:{boxes:3}},
{id:'cosmic_three',cat:'MAESTRIA',icon:'✹',name:'TRINITÀ COSMICA',desc:'Porta 3 fighter al rango COSMICO.',key:'cosmic',goal:3,reward:{boxes:4}},
{id:'ranked_gold',cat:'RANKED',icon:'▲',name:'RANKED ORO',desc:'Raggiungi 500 RP in Ranked.',key:'rankedBest',goal:500,reward:{coins:400}},
{id:'ranked_diamond',cat:'RANKED',icon:'◆',name:'RANKED DIAMANTE',desc:'Raggiungi 900 RP in Ranked.',key:'rankedBest',goal:900,reward:{boxes:1}},
{id:'ranked_legend',cat:'RANKED',icon:'♛',name:'RANKED LEGGENDARIO',desc:'Raggiungi 2000 RP in Ranked.',key:'rankedBest',goal:2000,reward:{boxes:3}},
{id:'ranked_cosmic',cat:'RANKED',icon:'✺',name:'RANKED COSMICO',desc:'Raggiungi 2800 RP in Ranked.',key:'rankedBest',goal:2800,reward:{boxes:4}},
{id:'cups_2500',cat:'PROGRESSIONE',icon:'🏆',name:'2500 COPPE',desc:'Raggiungi 2500 coppe totali.',key:'cups',goal:2500,reward:{coins:750}},
{id:'cups_5000',cat:'PROGRESSIONE',icon:'♛',name:'5000 COPPE',desc:'Raggiungi 5000 coppe totali.',key:'cups',goal:5000,reward:{boxes:5}},
{id:'boss_first',cat:'BOSS FIGHT',icon:'☠',name:'PRIMO TITANO',desc:'Sconfiggi il tuo primo boss.',key:'bossWins',goal:1,reward:{coins:300}},
{id:'boss_5',cat:'BOSS FIGHT',icon:'⚔',name:'CACCIATORE DI BOSS',desc:'Sconfiggi 5 boss.',key:'bossWins',goal:5,reward:{boxes:1}},
{id:'boss_20',cat:'BOSS FIGHT',icon:'✹',name:'BOSS BREAKER',desc:'Sconfiggi 20 boss.',key:'bossWins',goal:20,reward:{boxes:3}},
{id:'boss_50',cat:'BOSS FIGHT',icon:'♛',name:'FLAGELLO DEI COLOSSI',desc:'Sconfiggi 50 boss.',key:'bossWins',goal:50,reward:{boxes:5}},
{id:'boss_speed',cat:'BOSS FIGHT',icon:'⚡',name:'SPEED KILL',desc:'Sconfiggi un boss in 45 secondi o meno.',key:'bossFast',goal:1,reward:{coins:1000}}`;
var end='\n];\nfunction rewardText';
if(src.indexOf(end)<0)throw new Error('Fine lista Achievement non trovata');
src=src.replace(end,extra+end);
(0,eval)(src+'\n//# sourceURL=starbrawl-v603-achievements-expanded.js');
}).catch(function(e){var x=document.createElement('div');x.style.cssText='position:fixed;left:8px;right:8px;top:8px;z-index:2147483647;background:#681b27;color:#fff;padding:10px;border-radius:10px;font:700 11px Arial';x.textContent='Errore Achievement V6.03: '+e.message;document.body.appendChild(x)});
})();