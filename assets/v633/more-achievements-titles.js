(function(){'use strict';
if(window.__starBrawl633MoreGoals)return;window.__starBrawl633MoreGoals=true;
var ACH=[
{id:'kills_250',cat:'COMBATTIMENTO',icon:'⚔',name:'STERMINATORE',desc:'Raggiungi 250 eliminazioni totali.',key:'kills',goal:250,reward:{coins:500}},
{id:'kills_2000',cat:'COMBATTIMENTO',icon:'☠',name:'OLTRE IL PASS',desc:'Raggiungi 2000 eliminazioni totali.',key:'kills',goal:2000,reward:{boxes:4}},
{id:'kills_2500',cat:'COMBATTIMENTO',icon:'✹',name:'CATASTROFE',desc:'Raggiungi 2500 eliminazioni totali.',key:'kills',goal:2500,reward:{coins:1200}},
{id:'kills_5000',cat:'COMBATTIMENTO',icon:'☠',name:'ESTINZIONE',desc:'Raggiungi 5000 eliminazioni totali.',key:'kills',goal:5000,reward:{boxes:8}},
{id:'games_250',cat:'COMBATTIMENTO',icon:'◉',name:'SENZA SOSTA',desc:'Gioca 250 partite.',key:'games',goal:250,reward:{power:700}},
{id:'games_500',cat:'COMBATTIMENTO',icon:'◆',name:'ETERNO DELL ARENA',desc:'Gioca 500 partite.',key:'games',goal:500,reward:{boxes:5}},
{id:'wins_250',cat:'COMBATTIMENTO',icon:'♛',name:'VINCITORE NATO',desc:'Vinci 250 partite.',key:'wins',goal:250,reward:{coins:1000}},
{id:'wins_500',cat:'COMBATTIMENTO',icon:'♛',name:'INARRESTABILE',desc:'Vinci 500 partite.',key:'wins',goal:500,reward:{boxes:6}},
{id:'boxes_150',cat:'COLLEZIONE',icon:'▣',name:'APRICASSA',desc:'Apri 150 casse.',key:'chests',goal:150,reward:{power:800}},
{id:'boxes_300',cat:'COLLEZIONE',icon:'▣',name:'TESORIERE',desc:'Apri 300 casse.',key:'chests',goal:300,reward:{coins:1400}},
{id:'skins_8',cat:'COLLEZIONE',icon:'✧',name:'SFILATA STELLARE',desc:'Possiedi 8 skin speciali.',key:'skins',goal:8,reward:{coins:1200}},
{id:'collector_40',cat:'COLLEZIONE',icon:'★',name:'ESERCITO STELLARE',desc:'Sblocca almeno 40 fighter.',key:'unlocked',goal:40,reward:{coins:1000}},
{id:'master_legend',cat:'MAESTRIA',icon:'◇',name:'MAESTRIA LEGGENDARIA',desc:'Porta un fighter a 2200 MP.',key:'mastery',goal:2200,reward:{boxes:3}},
{id:'master_cosmic_true',cat:'MAESTRIA',icon:'✺',name:'COSMICO AUTENTICO',desc:'Porta un fighter a 3200 MP.',key:'mastery',goal:3200,reward:{boxes:4}},
{id:'master_eternal',cat:'MAESTRIA',icon:'✹',name:'MAESTRIA ETERNA',desc:'Porta un fighter a 5000 MP.',key:'mastery',goal:5000,reward:{boxes:6}},
{id:'cups_7500',cat:'PROGRESSIONE',icon:'🏆',name:'7500 COPPE',desc:'Raggiungi 7500 coppe totali.',key:'cups',goal:7500,reward:{coins:1500}},
{id:'cups_10000',cat:'PROGRESSIONE',icon:'♛',name:'10000 COPPE',desc:'Raggiungi 10000 coppe totali.',key:'cups',goal:10000,reward:{boxes:7}},
{id:'boss_100',cat:'BOSS FIGHT',icon:'☠',name:'TITANICIDA',desc:'Sconfiggi 100 boss.',key:'bossWins',goal:100,reward:{boxes:8}}
];
var TIT=[
{id:'kills_250',icon:'⚔',name:'STERMINATORE',desc:'Raggiungi 250 eliminazioni.',key:'kills',goal:250},
{id:'kills_2000',icon:'☠',name:'OLTRE IL PASS',desc:'Raggiungi 2000 eliminazioni.',key:'kills',goal:2000},
{id:'kills_2500',icon:'✹',name:'CATASTROFE',desc:'Raggiungi 2500 eliminazioni.',key:'kills',goal:2500},
{id:'kills_5000',icon:'☠',name:'ESTINZIONE',desc:'Raggiungi 5000 eliminazioni.',key:'kills',goal:5000,rainbow:true},
{id:'games_250',icon:'◉',name:'SENZA SOSTA',desc:'Gioca 250 partite.',key:'games',goal:250},
{id:'games_500',icon:'◆',name:'ETERNO DELL ARENA',desc:'Gioca 500 partite.',key:'games',goal:500},
{id:'wins_250',icon:'♛',name:'VINCITORE NATO',desc:'Vinci 250 partite.',key:'wins',goal:250},
{id:'wins_500',icon:'♛',name:'INARRESTABILE',desc:'Vinci 500 partite.',key:'wins',goal:500,rainbow:true},
{id:'boxes_150',icon:'▣',name:'APRICASSA',desc:'Apri 150 casse.',key:'chests',goal:150},
{id:'boxes_300',icon:'▣',name:'TESORIERE',desc:'Apri 300 casse.',key:'chests',goal:300},
{id:'skins_8',icon:'✧',name:'SFILATA STELLARE',desc:'Possiedi 8 skin speciali.',key:'skins',goal:8},
{id:'collector_40',icon:'★',name:'ESERCITO STELLARE',desc:'Sblocca 40 fighter.',key:'unlocked',goal:40},
{id:'master_legend',icon:'◇',name:'LEGGENDA DELLA MAESTRIA',desc:'Porta un fighter a 2200 MP.',key:'mastery',goal:2200},
{id:'master_cosmic_true',icon:'✺',name:'COSMICO AUTENTICO',desc:'Porta un fighter a 3200 MP.',key:'mastery',goal:3200},
{id:'master_eternal',icon:'✹',name:'ETERNO',desc:'Porta un fighter a 5000 MP.',key:'mastery',goal:5000,rainbow:true},
{id:'cups_7500',icon:'🏆',name:'IMPERATORE DELLE COPPE',desc:'Raggiungi 7500 coppe.',key:'cups',goal:7500},
{id:'cups_10000',icon:'♛',name:'OLTRE LE STELLE',desc:'Raggiungi 10000 coppe.',key:'cups',goal:10000,rainbow:true},
{id:'boss_100',icon:'☠',name:'TITANICIDA',desc:'Sconfiggi 100 boss.',key:'bossWins',goal:100}
];
function addUnique(list,items){if(!Array.isArray(list))return false;for(var i=0;i<items.length;i++){var found=false;for(var j=0;j<list.length;j++)if(list[j]&&list[j].id===items[i].id){found=true;break}if(!found)list.push(items[i])}return true}
function install(){var a=window.__v598Achievements,t=window.__v603Titles||window.__v599Titles,ok=false;if(a&&a.list)ok=addUnique(a.list,ACH)||ok;if(t&&t.list)ok=addUnique(t.list,TIT)||ok;return ok}
install();setTimeout(install,500);setTimeout(install,1400);setTimeout(install,2600);setInterval(install,1800);window.__v633MoreGoals={achievements:ACH,titles:TIT,refresh:install};
})();