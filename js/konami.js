(()=>{var t=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],a=new Audio("audio/gecko_sound.mp3");function r(){document.querySelector("#konami > img").animate([{offset:0,display:"none",opacity:0},{offset:.01,display:"block",transform:"scale(0)",opacity:0},{offset:.1,opacity:1},{offset:.7,opacity:1},{offset:.8,transform:"scale(3)"},{offset:1,opacity:0,transform:"scale(5)"}],{duration:1e3,easing:"ease-in",fill:"forwards"}),setTimeout(()=>{a.play()},200)}var e=0,i=0;function n(){window.konamiInitialized||(window.konamiInitialized=!0,window.addEventListener("keydown",o=>{Date.now()-i>1e4&&(e=0),o.key===t[e]?(e+=1,i=Date.now()):e===2&&o.key==="ArrowUp"?e=2:e=0,e===t.length&&(e=0,r())}))}document.readyState!=="loading"?n():window.addEventListener("DOMContentLoaded",()=>{n()});})();
