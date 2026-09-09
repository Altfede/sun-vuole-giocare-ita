(function(){
'use strict';
if(window.__starBrawl656NoHomeCharacters)return;window.__starBrawl656NoHomeCharacters=true;
var d=document;
function apply(){
  var home=d.getElementById('v655SafeHome');
  if(!home)return;
  var stage=home.querySelector('.v655Stage');
  if(stage)stage.remove();
  home.querySelectorAll('.v655Plus').forEach(function(el){el.remove()});
}
var st=d.createElement('style');
st.id='v656NoHomeCharactersCss';
st.textContent='#v655SafeHome .v655Stage,#v655SafeHome .v655Brawler,#v655SafeHome .v655Plus{display:none!important}';
(d.head||d.documentElement).appendChild(st);
apply();
new MutationObserver(apply).observe(d.documentElement,{childList:true,subtree:true});
})();