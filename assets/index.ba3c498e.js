var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var i in r||(r={}))a.call(r,i)&&l(e,i,r[i]);if(t)for(var i of t(r))n.call(r,i)&&l(e,i,r[i]);return e};import{v as i,R as o,a as s,c,e as m,b as u,T as d,u as E,r as p,N as b,S as y,d as N,f as I,H as f}from"./vendor.4e222309.js";var A,v,R,S,k,w,g,j;function z(){return o.createElement(s,{to:"/roles"})}(v=A||(A={})).SPECIAL="specjalna",v.PASSIVE="pasywna",v.ACTION="akcja",v.VISIT="wizyta",v.DISCLOSURE="ujawnienie",(S=R||(R={})).CURSED="klątwa",S.HANGED="powieszenie",S.KILLED="zabujstwo",S.VAMPIRISM="wampiryzm",S.PROTECTED="ochrona",S.HEALED="uleczenie",S.IMMUNITY="nietykalność",S.SILENCED="wyciszenie",S.BLOCKED="blokada",(w=k||(k={})).TOWN="miasto",w.MAFIA="mafia",w.NEUTRAL="neutralne",(j=g||(g={})).CHAOS="chaos",j.SUPPORT="wsparcie",j.NEUTRAL="neutralne",j.KILLER="zabójca",j.SURVIVOR="niedobitek",j.INVESTIGATIVE="śledczy",j.PROTECTIVE="ochrona";var T={all:[{name:"citizen",label:"obywatel",aliases:[],description:"prawilny członek społeczności miasta, nie ma nic do ukrycia",aligment:k.TOWN,natures:[g.NEUTRAL],abilities:[]},{name:"dopler",label:"dopler",aliases:["dozorca"],description:"kiedyś był dozorcą, ale nie lubił przeciągów",portrait:"/assets/dopler.0e5842b4.jpg",aligment:k.MAFIA,natures:[g.CHAOS],abilities:[{kind:A.PASSIVE,description:"w nocy bierze udział w głosowaniu na ofiarę mafii"},{kind:A.PASSIVE,description:"gdy zginie pierwszy członek mafii, przejmuje jego rolę"}]},{name:"serial-killer",label:"seryjny zabójca",aliases:["sk"],description:"nie może się powstrzymać przed uśmiechem",portrait:"/assets/serialKiller.7c0a5daf.jpg",aligment:k.NEUTRAL,natures:[g.KILLER,g.SURVIVOR],abilities:[{kind:A.VISIT,description:"dokonuje ZABÓJSTWA"},{kind:A.PASSIVE,description:"jest NIETYKALNY w nocy"}]},{name:"ocultist",label:"okultysta",aliases:[],description:"nikt nie wie jaki ma interes w zabijaniu",portrait:"/assets/ocultist.5325bcf3.jpg",aligment:k.NEUTRAL,natures:[g.KILLER],abilities:[{kind:A.ACTION,description:"OCHRANIA"},{kind:A.VISIT,description:"dokonuje ZABÓJSTWA"},{kind:A.PASSIVE,description:"jest NIETYKALNY w nocy"}]}]};function O(e){const{role:t}=e,a=c([[m(k.TOWN),u("town")],[m(k.MAFIA),u("mafia")],[m(k.NEUTRAL),u("neutral")],[d,u("")]]);return o.createElement("div",{className:`RoleCard ${a(t.aligment)}`},o.createElement("div",{className:"portrait"},o.createElement("img",{src:t.portrait,alt:t.label})),o.createElement("div",{className:"content"},o.createElement("div",{className:"label"},t.label),t.abilities.map(((e,t)=>o.createElement("div",{className:"ability",key:t},o.createElement("span",{className:"kind"},e.kind),o.createElement("span",{className:"description"},e.description)))),o.createElement("div",{className:"description"},t.description)),o.createElement("div",{className:"border-top"}),o.createElement("div",{className:"border-bottom"}),o.createElement("div",{className:"overlay"}),o.createElement("div",{className:"crystal"}))}function L(){const{name:e}=E(),t=T.all.find((t=>t.name===e));return t?o.createElement("main",{className:"Role"},o.createElement(O,{role:t})):o.createElement("h1",null,"(o.o)")}const h=o.createContext({roleFilter:"",setRoleFilter:()=>{}});function C(){const{roleFilter:e}=p.exports.useContext(h),t=T.all.filter((t=>t.label.match(e)||t.name.match(e)||t.aliases.some((t=>t.match(e))))).map(((e,t)=>{const a=V(e);return o.createElement(a,{key:t})}));return o.createElement("main",{className:"RoleSelect"},o.createElement("ul",null,t))}const V=e=>()=>o.createElement(b,{to:`/roles/${e.name}`},o.createElement("h2",null,e.label),o.createElement("h3",null,e.description));function P(){return p.exports.useContext(h),o.createElement("div",{className:"Menu"},o.createElement(b,{to:"/roles"},"role"),o.createElement(b,{to:"/decks"},"talie"),o.createElement(b,{to:"/gameplay"},"rozgrywka"),o.createElement(b,{to:"/assist"},"asysta"))}function x(){const{roleFilter:e,setRoleFilter:t}=p.exports.useContext(h);return o.createElement("div",{className:"RoleFilter"},o.createElement("input",{autoFocus:!0,type:"text",placeholder:"szukaj...",value:e,onChange:e=>t(e.target.value)}))}const F=({Menu:e,Header:l})=>i=>s=>{var c=((e,l)=>{var r={};for(var i in e)a.call(e,i)&&l.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&t)for(var i of t(e))l.indexOf(i)<0&&n.call(e,i)&&(r[i]=e[i]);return r})(s,[]);return o.createElement(p.exports.Fragment,null,l?o.createElement("header",null,o.createElement(l,null)):null,o.createElement(i,r({},c)),e?o.createElement("nav",null,o.createElement(e,null)):null)};function M(){p.exports.useContext(h);const e=function(e,t,a){const[n,l]=p.exports.useState(a);return{[e]:n,[t]:l}}("roleFilter","setRoleFilter",""),t=r({},e),a=F({Menu:P})(z),n=F({Menu:P,Header:x})(C),l=F({Menu:P})(L);return o.createElement(h.Provider,{value:t},o.createElement("div",{className:"App"},o.createElement(y,null,o.createElement(N,{path:"/roles/:name"},o.createElement(l,null)),o.createElement(N,{path:"/roles"},o.createElement(n,null)),o.createElement(N,{path:"/"},o.createElement(a,null)))))}!function(e={}){const{immediate:t=!1,onNeedRefresh:a,onOfflineReady:n,onRegistered:l,onRegisterError:r}=e;let o;"serviceWorker"in navigator&&(o=new i("/sw.js",{scope:"/"}),o.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==n||n()})),o.register({immediate:t}).then((e=>{null==l||l(e)})).catch((e=>{null==r||r(e)})))}({onOfflineReady(){}}),I.render(o.createElement(o.StrictMode,null,o.createElement(f,null,o.createElement(M,null))),document.getElementById("root"));
