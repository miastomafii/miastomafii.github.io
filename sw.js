if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-fce41884"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0c1e56ae.css",revision:"39bb9a8ff6194485fcc88c099c3276d1"},{url:"assets/index.e109bd19.js",revision:"89810cd3b71b29bf47f3e41a036cb094"},{url:"assets/vendor.4e222309.js",revision:"a676d8a67685e0218d6de40f5fcae1fb"},{url:"index.html",revision:"d954e6bde309a7cb363556d2ad224de9"},{url:"android-chrome-192x192.png",revision:"cb0f78a55f8458f298a8521e014350fb"},{url:"android-chrome-256x256.png",revision:"70b1ee84016140166ee1459fecef344e"},{url:"manifest.webmanifest",revision:"3e864d4d77853d05d49b8cc60afa0802"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
