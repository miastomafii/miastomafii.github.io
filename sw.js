if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-fce41884"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.71036a4d.js",revision:"9181eeafc7ca1ff3362e4827836477c7"},{url:"assets/index.a363c389.css",revision:"e626e9f6ddd69480eb72e794376950d0"},{url:"assets/vendor.bcc4593b.js",revision:"51129db4e089ad308e976ec230af66d4"},{url:"index.html",revision:"bd34973fff9107814a072e698093a83f"},{url:"android-chrome-192x192.png",revision:"7544febbd35ebecee9ad709ac9d166d8"},{url:"android-chrome-512x512.png",revision:"6d627213d96bfde91c649fd1274e6baf"},{url:"manifest.webmanifest",revision:"5f5d88976e4f0db1e9363b222ab8fad8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
