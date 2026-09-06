(function(){
'use strict';
if(!window.A)return;
const detailedEyes='<path d="M43 47Q49 42 56 47Q49 52 43 47Z" fill="#f7f4ee" stroke="#111827" stroke-width="1.6"/><circle cx="50" cy="47" r="2.2" fill="#202936"/><circle cx="50.7" cy="46.3" r=".7" fill="#fff"/><path d="M64 47Q71 42 78 47Q71 52 64 47Z" fill="#f7f4ee" stroke="#111827" stroke-width="1.6"/><circle cx="71" cy="47" r="2.2" fill="#202936"/><circle cx="71.7" cy="46.3" r=".7" fill="#fff"/><path d="M43 41Q49 38 56 41M64 41Q71 38 78 41" stroke="#171717" stroke-width="2.2" fill="none" stroke-linecap="round"/>';
const leftEye='<path d="M43 47Q49 42 56 47Q49 52 43 47Z" fill="#f7f4ee" stroke="#111827" stroke-width="1.6"/><circle cx="50" cy="47" r="2.2" fill="#202936"/><circle cx="50.7" cy="46.3" r=".7" fill="#fff"/>';
const rightEye='<path d="M64 47Q71 42 78 47Q71 52 64 47Z" fill="#f7f4ee" stroke="#111827" stroke-width="1.6"/><circle cx="71" cy="47" r="2.2" fill="#202936"/><circle cx="71.7" cy="46.3" r=".7" fill="#fff"/>';
const faceDetail='<path d="M60 49L58 56L62 57" stroke="#8c604d" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M53 62Q60 63 68 60" stroke="#6d313b" stroke-width="2.2" fill="none" stroke-linecap="round"/>';
Object.keys(A).forEach(id=>{
 let s=A[id];
 s=s.replace(/<path d="M45 46Q50 42 55 46M66 46Q71 42 76 46"[^>]*\/>/g,detailedEyes);
 s=s.replace(/<path d="M46 47 Q51 43 55 47 M66 47 Q71 43 76 47"[^>]*\/>/g,detailedEyes);
 s=s.replace(/<path d="M46 47Q51 43 55 47M66 47Q71 43 76 47"[^>]*\/>/g,detailedEyes);
 s=s.replace(/<path d="M46 47 Q51 43 55 47"[^>]*\/>/g,leftEye);
 s=s.replace(/<path d="M66 47 Q71 43 76 47"[^>]*\/>/g,rightEye);
 s=s.replace(/<path d="M54 61 Q60 65 67 60"[^>]*\/>/g,faceDetail);
 s=s.replace(/<path d="M53 61Q60 66 68 60"[^>]*\/>/g,faceDetail);
 s=s.replace(/<path d="M52 58Q60 66 68 58"[^>]*\/>/g,faceDetail);
 A[id]=s;
});
})();