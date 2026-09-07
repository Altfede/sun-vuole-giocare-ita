(function(){'use strict';
if(window.__starBrawl592Rame)return;window.__starBrawl592Rame=true;
function fixText(root){if(!root)return;var els=[root.getElementById('v590RankedPanel'),root.getElementById('v590BattleTag'),root.getElementById('v590Toast')];for(var i=0;i<els.length;i++){var e=els[i];if(!e)continue;var w=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;while((n=w.nextNode())){if(/COMUNE/i.test(n.nodeValue||''))n.nodeValue=(n.nodeValue||'').replace(/COMUNE/gi,'RAME')}}}
function patchPublic(){try{if(window.__v591Ranked&&!window.__v591Ranked.__ramePatched){var old=window.__v591Ranked.division;if(typeof old==='function')window.__v591Ranked.division=function(){var r=old.apply(this,arguments);return r==='COMUNE'?'RAME':r};if(Array.isArray(window.__v591Ranked.divisions)){for(var i=0;i<window.__v591Ranked.divisions.length;i++)if(window.__v591Ranked.divisions[i]&&window.__v591Ranked.divisions[i].n==='COMUNE')window.__v591Ranked.divisions[i].n='RAME'}window.__v591Ranked.__ramePatched=true}}
catch(e){}}
function scan(){try{patchPublic();fixText(document)}catch(e){}}
scan();setTimeout(scan,300);setTimeout(scan,900);setInterval(scan,500);
window.__v592RankRame={active:true};
})();