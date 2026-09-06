(function(){
'use strict';
if(!window.A)return;
const ids=['vexa','nyra','dante','astra','knox','lyra'];
const eyeBlock='<path d="M43 47Q49 42 56 47Q49 52 43 47Z" fill="#f8f6f1" stroke="#111827" stroke-width="1.6"/><circle cx="50" cy="47" r="2.2" fill="#202936"/><circle cx="50.7" cy="46.3" r=".7" fill="#fff"/><path d="M64 47Q71 42 78 47Q71 52 64 47Z" fill="#f8f6f1" stroke="#111827" stroke-width="1.6"/><circle cx="71" cy="47" r="2.2" fill="#202936"/><circle cx="71.7" cy="46.3" r=".7" fill="#fff"/><path d="M43 41Q49 38 56 41M64 41Q71 38 78 41" stroke="#171717" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M60 49L58 56L62 57" stroke="#8b604e" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M53 62Q60 63 68 60" stroke="#6d313b" stroke-width="2.2" fill="none" stroke-linecap="round"/>';
ids.forEach(id=>{
  let s=A[id]; if(!s)return;
  const m=s.match(/<path d="M39 23[^>]+fill="(#[0-9A-Fa-f]{6})"[^>]*\/>/);
  if(!m)return;
  const skin=m[1];
  const panel='<path d="M41 42Q60 36 79 42L79 56Q76 67 60 71Q44 67 41 56Z" fill="'+skin+'"/>'+eyeBlock;
  s=s.replace('</svg>',panel+'</svg>');
  A[id]=s;
});
})();