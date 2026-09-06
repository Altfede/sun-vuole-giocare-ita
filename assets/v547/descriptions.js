(function(){'use strict';
var DESC={
'Bolt':'Un piccolo robot da combattimento costruito per adattarsi a qualsiasi situazione. Veloce, affidabile e sempre pronto a sparare.',
'Moss':'Una creatura massiccia ricoperta di vegetazione. Non è veloce, ma buttarlo giù è molto più difficile di quanto sembri.',
'Birra':'Nessuno sa bene da dove venga. Una cosa però è certa: quando Birra entra nell’arena, qualcuno sta per avere una pessima giornata.',
'Zorg':'Un misterioso alieno arrivato dalle stelle. Combatte usando tecnologia sconosciuta ed energia cosmica.',
'Rook':'Un combattente disciplinato che preferisce resistere e avanzare piuttosto che arretrare. Solido in quasi ogni situazione.',
'Vexa':'Manipola sfere di energia per colpire da lontano. Fragile da vicino, estremamente fastidiosa se riesce a mantenere le distanze.',
'Rivet':'Un robot meccanico costruito con pezzi che probabilmente non dovrebbero stare insieme. Attacca rapidamente e non smette quasi mai.',
'Iris':'Tiratrice precisa e velocissima. Ama tenere i nemici lontani e punire qualsiasi movimento sbagliato.',
'Nyra':'Un’assassina aggressiva che vive di attacchi improvvisi. Pochi colpi, ma quelli giusti fanno malissimo.',
'Glint':'Un robot alimentato da energia concentrata. I suoi raggi sono precisi, costanti e difficili da evitare.',
'Dante':'Combattente esperto e senza fronzoli. Non possiede trucchi spettacolari: gli basta sapere esattamente quando colpire.',
'Nia':'Rapida, precisa e sempre in movimento. È specializzata nel tormentare gli avversari senza lasciarsi raggiungere.',
'Brakka':'Una bestia enorme con un solo metodo di combattimento: arrivare abbastanza vicino da distruggere tutto.',
'Astra':'Una tiratrice cosmica dalla precisione assurda. Pochissima resistenza, ma una potenza devastante dalla distanza.',
'Mei':'Mantiene il controllo dello scontro con attacchi precisi a lunga distanza. Calma, metodica e difficile da sorprendere.',
'Kairo':'Un combattente mobile e versatile che preferisce scegliere personalmente la distanza dello scontro.',
'Knox':'Una montagna con le gambe. Incassa danni che fermerebbero chiunque altro e continua semplicemente ad avanzare.',
'Cinder':'Un robot progettato per trasformare ogni combattimento in una zona di pericolo. Più lo lasci agire, peggio diventa.',
'Hex':'Una macchina misteriosa alimentata da energia viola. I suoi colpi sembrano arrivare sempre da un po’ troppo lontano.',
'Zara':'Una tiratrice estremamente veloce e letale. Non può permettersi molti errori, ma spesso il nemico muore prima che ne faccia uno.',
'Jian':'Combina precisione, velocità e potenza senza dipendere da un solo punto di forza. Un duellante nato.',
'Warden':'Un’unità corazzata creata per tenere la posizione. Lento, resistente e molto difficile da spostare.',
'Orion':'Un cacciatore leggendario specializzato negli scontri a lunghissima distanza. Se riesce a vederti, probabilmente può colpirti.',
'Lumi':'Rapida e precisa, combatte mantenendo sempre la distanza perfetta. Sembra leggera finché non iniziano ad arrivare i colpi.',
'Onyx':'Un combattente pesante che preferisce avvicinarsi lentamente e chiudere ogni via di fuga prima di attaccare.',
'Lyra':'Elegante e letale, domina le grandi distanze con attacchi potentissimi. Lasciarle spazio è quasi sempre un errore.',
'Nova':'Un concentrato instabile di potenza stellare. Ha poca resistenza, ma possiede uno degli attacchi più devastanti dell’arena.',
'Vanta':'Un combattente oscuro e imprevedibile. Colpisce forte, da lontano, e raramente concede al nemico una seconda occasione.',
'Clawz':'Un gatto cyberpunk rapidissimo. Entra, colpisce e sparisce prima che il nemico riesca a reagire.',
'Dusty':'Un pistolero robotico costruito per i duelli. Mantiene la distanza e aspetta pazientemente il momento perfetto per sparare.',
'Velvet':'Un’assassina futuristica elegante quanto pericolosa. Fragile, velocissima e capace di infliggere danni enormi.',
'Mamba':'Un combattente street-tech che non lascia respirare l’avversario. Velocità e pressione continua sono le sue armi migliori.',
'Asha':'Una guerriera pesantemente equipaggiata che domina gli scontri ravvicinati. Avvicinarsi a lei è facile; uscirne interi molto meno.'
};
function apply(){var n=document.getElementById('cdName'),d=document.getElementById('cdDesc');if(!n||!d)return;var name=(n.textContent||'').trim();if(DESC[name]&&d.textContent!==DESC[name])d.textContent=DESC[name];}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
var mo=new MutationObserver(apply);mo.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
setInterval(apply,500);
})();