if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-fce41884"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.3ab932ef.css",revision:"de487b18e612ffe12438a0a345fed6b3"},{url:"assets/index.bfaf28c2.js",revision:"4b8bb94571d2f0b7a6c4914d8d80a2da"},{url:"assets/vendor.4e222309.js",revision:"a676d8a67685e0218d6de40f5fcae1fb"},{url:"index.html",revision:"fd372676f5de55b73c426962ea28dcb9"},{url:"android-chrome-192x192.png",revision:"7544febbd35ebecee9ad709ac9d166d8"},{url:"android-chrome-512x512.png",revision:"6d627213d96bfde91c649fd1274e6baf"},{url:"manifest.webmanifest",revision:"960c2420b226212a275d81be0434adc6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
