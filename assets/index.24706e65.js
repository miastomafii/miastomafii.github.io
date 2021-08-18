import{v as e,o as a,m as i,r as n,R as t,N as s,c as l,e as o,a as r,T as c,u as m,b as d,d as u,f as p,S as E,g as w,H as b}from"./vendor.283dafb4.js";var z,A,I,y,N,g;(A=z||(z={}))[A.DESTROYED=0]="DESTROYED",A[A.CREATED=1]="CREATED",A[A.ACTIVE=2]="ACTIVE",(y=I||(I={}))[y.NAME=0]="NAME",y[y.ROLE=1]="ROLE",(g=N||(N={})).IDLE="IDLE",g.INIT="INIT",g.DAY="DAY",g.NIGHT="NIGHT",g.END="END";const j=a({kind:N.IDLE});var T,R,k,O,L,f,v,S;(R=T||(T={})).SPECIAL="specjalna",R.PASSIVE="pasywna",R.ACTION="akcja",R.VISIT="wizyta",R.DISCLOSURE="ujawnienie",(O=k||(k={})).CURSED="klątwa",O.HANGED="powieszenie",O.KILLED="zabujstwo",O.VAMPIRISM="wampiryzm",O.PROTECTED="ochrona",O.HEALED="uleczenie",O.IMMUNITY="nietykalność",O.SILENCED="wyciszenie",O.BLOCKED="blokada",(f=L||(L={})).TOWN="miasto",f.MAFIA="mafia",f.NEUTRAL="neutralne",(S=v||(v={})).CHAOS="chaos",S.SUPPORT="wsparcie",S.NEUTRAL="neutralne",S.KILLER="zabójca",S.SURVIVOR="przetrwanie",S.INVESTIGATIVE="śledczy",S.PROTECTIVE="ochrona";const C={name:"advisor",label:"doradca",aliases:[],description:"",aligment:L.MAFIA,natures:[v.INVESTIGATIVE],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","odwiedzenie: sprawdza NATURĘ roli"]},h={name:"amnesiac",label:"amnezjak",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.CHAOS],abilities:["akcja (1): przypomina sobię kim jest, przejmuję rolę i cele martwej osoby od następnej fazy"]},U={name:"assassin",label:"zamachowiec",aliases:[],description:"",aligment:L.MAFIA,natures:[v.KILLER],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","akcja (1): ZABIJA wszystkie oznaczone osoby i otrzymuje KLĄTWĘ ","odwiedzenie: OZNACZA osobę"]},W={name:"avenger",label:"mściciel",aliases:[],description:"",aligment:L.TOWN,natures:[v.CHAOS],abilities:["pasywne: jeśli zostanie ZABITY w NOCY, zabójcy zostają ZABICI"]},M={name:"blackmailer",label:"szantażysta",aliases:[],description:"",aligment:L.MAFIA,natures:[v.SUPPORT],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","pasywna: nie może ODWIEDZIĆ tej samej osoby dwa razy z rzędu ","odwiedzenie: szantażuje osobę i ją WYCISZA następnego dnia"]},V={name:"blocker",label:"bloker",aliases:[],description:"",aligment:L.MAFIA,natures:[v.SUPPORT],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","odwiedzenie: BLOKUJE"]},P={name:"citizen",label:"obywatel",aliases:[],description:"prawilny członek społeczności miasta, nie ma nic do ukrycia",aligment:L.TOWN,natures:[v.NEUTRAL],abilities:[]},K={name:"devourer",label:"pożeracz",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.CHAOS,v.SURVIVOR],abilities:["pasywna: GINIE z głodu jeśli danej nocy nikt nie UMRZE ","odwiedzenie: usuwa ULECZENIE, OCHRONĘ oraz NIETYKALNOŚĆ"]},D={name:"doctor",label:"doktor",aliases:[],description:"",aligment:L.TOWN,natures:[v.PROTECTIVE],abilities:["pasywna: nie może ODWIEDZIĆ tej samej osoby dwa razy z rzędu ","odwiedzenie: ULECZA"]};const Y={name:"dopler",label:"dopler",aliases:["dozorca"],description:"kiedyś był dozorcą, ale nie lubił przeciągów",portrait:"/assets/dopler.61c198ff.webp",aligment:L.MAFIA,natures:[v.CHAOS],abilities:[{kind:T.PASSIVE,description:"w nocy bierze udział w głosowaniu na ofiarę mafii"},{kind:T.PASSIVE,description:"gdy zginie pierwszy członek mafii, przejmuje jego rolę"}]},Z={name:"estate-agent",label:"agent nieruchomości",aliases:[],description:"",aligment:L.TOWN,natures:[v.NEUTRAL],abilities:["ujawnienie: nic nie robi"]},H={name:"executoner",label:"kat",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.CHAOS],abilities:["pasywna: jeśli jego CEL umrze w nocy, staje się PAJACEM ","specjalna: przed rozpoczęciem rozgrywki otrzymuje CEL"]},F={name:"fairy",label:"wróżka",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.SURVIVOR],abilities:["pasywna: jest NIETYKALNA pierwszej nocy ","akcja: wybiera 3 inne osoby, jeśli przeżyją noc to jest NIETYKALNA następnej nocy"]},B={name:"falsifier",label:"fałszerz",aliases:[],description:"",aligment:L.MAFIA,natures:[v.CHAOS,v.SUPPORT],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","odwiedzenie: odwraca widoczną NATURĘ roli, z mafii na miasto i odwrotnie"]},J={name:"fantom",label:"zjawa",aliases:[],description:"",aligment:L.MAFIA,natures:[v.SUPPORT],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","pasywna: nie może ODWIEDZIĆ tej samej osoby dwa razy z rzędu ","odwiedzenie: NAWIEDZA osobę, jej głos nie jest liczony w głosowaniu, NAWIEDZONY nie zostaje ujawniony"]},x={name:"gambler",label:"hazardzista",aliases:[],description:"",aligment:L.TOWN,natures:[v.KILLER],abilities:["pasywna: po pierwszym odwiedzeniu, MUSI odwiedzać każdej kolejnej nocy ","pasywna: jesli ZABIŁ osobę z MIASTA otrzymuje KLĄTWĘ ","odwiedzenie (od 2 nocy): ZABIJA"]},G={name:"godfather",label:"ojciec chrzestny",aliases:[],description:"",aligment:L.MAFIA,natures:[v.KILLER],abilities:["pasywna: w nocy ma decydujący głos w wyborze ofiary mafii ","pasywna: strzela dopiero gdy zostanie ostatnim członkiem MAFII"]},$={name:"gravedigger",label:"grabaż",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.SURVIVOR],abilities:["odwiedzenie (3): odwiedza MARTWĄ osobę i poznaje jej rolę, staje się NIETYKALNY"]},_={name:"guard",label:"ochroniarz",aliases:[],description:"",aligment:L.TOWN,natures:[v.PROTECTIVE],abilities:["odwiedzenie: OCHRONA"]},X={name:"guardian-angel",label:"anioł stróż",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.PROTECTIVE],abilities:["pasywna: jeśli jego CEL UMARŁ, a on ŻYJE zamienia się w NIEDOBITKA z jedną AKCJĄ (kamizelką) ","akcja (2): daje NIETYKALNOŚĆ swojemu CELU"]},q={name:"jester",label:"pajac ",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.CHAOS],abilities:["pasywne: jeśli zostanie POWIESZONY, nakłada KLĄTWĘ na wybraną osobę która zagłosowała za"]},Q={name:"lawyer",label:"prawnik",aliases:[],description:"",aligment:L.TOWN,natures:[v.SUPPORT],abilities:["ujawnienie: wetuje decyzję głosowania, osoba nie zostaje POWIESZONA"]},ee={name:"mafia",label:"członek mafii",aliases:[],description:"",aligment:L.MAFIA,natures:[v.KILLER],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii"]},ae={name:"mafioso",label:"mafioso",aliases:[],description:"",aligment:L.MAFIA,natures:[v.KILLER],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","pasywna: gdy zginie OJCIEC CHRZESTNY, przejmuje jego rolę"]},ie={name:"mayor",label:"burmistrz",aliases:[],description:"",aligment:L.TOWN,natures:[v.SUPPORT],abilities:["ujawnienie: do końca gry ma 3 głosy w każdym głosowaniu"]},ne={name:"medium",label:"medium",aliases:[],description:"",aligment:L.TOWN,natures:[v.INVESTIGATIVE],abilities:["akcja (1): sprawdza rolę martwej osoby"]};const te={name:"ocultist",label:"okultysta",aliases:[],description:"nikt nie wie jaki ma interes w zabijaniu",portrait:"/assets/ocultist.100edd85.webp",aligment:L.NEUTRAL,natures:[v.KILLER],abilities:[{kind:T.ACTION,description:"OCHRANIA"},{kind:T.VISIT,description:"dokonuje ZABÓJSTWA"},{kind:T.PASSIVE,description:"jest NIETYKALNY w nocy"}]},se={name:"pedant",label:"pedant",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.KILLER,v.CHAOS],abilities:["odwiedzenie: sprawdza NATURĘ roli ","odwiedzenie: ZABIJA"]},le={name:"philosopher",label:"filozof",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.NEUTRAL],abilities:["ujawnienie: zgaduje role ŻYWYCH osób"]},oe={name:"poisoner",label:"truciciel",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.KILLER,v.SURVIVOR],abilities:["akcja: uaktywnia truciznę i ZABIJA wszystkie OZNACZONE osoby ","odwiedzenie: zatruwa i OZNACZA"]};const re={name:"righteous",label:"sprawiedliwy",aliases:[],description:"",portrait:"/assets/righteous.900e53c8.webp",aligment:L.TOWN,natures:[v.KILLER],abilities:["odwiedzenie (2): ZABIJA osobę, jeśli była z MIASTA otrzymuje KLĄTWĘ"]};const ce={name:"serial-killer",label:"seryjny zabójca",aliases:["sk"],description:"nie może się powstrzymać przed uśmiechem",portrait:"/assets/serialKiller.dda0a81e.webp",aligment:L.NEUTRAL,natures:[v.KILLER,v.SURVIVOR],abilities:[{kind:T.VISIT,description:"dokonuje ZABÓJSTWA"},{kind:T.PASSIVE,description:"jest NIETYKALNY w nocy"}]},me={name:"shapeshifter",label:"zmiennokształtny",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.CHAOS],abilities:["akcja: wybiera dwie osoby, od pierwszej KRADNIE umiejętność i używa jej na drugiej"]},de={name:"sheriff",label:"szeryf",aliases:[],description:"",aligment:L.TOWN,natures:[v.INVESTIGATIVE],abilities:["odwiedzenie: sprawdza NATURĘ roli"]},ue={name:"soul-master",label:"zaklinacz dusz",aliases:[],description:"",aligment:L.TOWN,natures:[v.PROTECTIVE],abilities:["ujawnienie: wybiera osobę, zostaje ona NIETYKALNA dopuki zaklinacz ŻYJE"]},pe={name:"survivor",label:"niedobitek",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.SURVIVOR],abilities:["akcja (3): Zakłada kamizelkę kuloodporną, staje się NIETYKALNY"]},Ee={name:"texas-ranger",label:"strażnik teksasu",aliases:[],description:"",aligment:L.TOWN,natures:[v.PROTECTIVE,v.CHAOS],abilities:["akcja (1): tej nocy nikt nie może ZABIĆ"]},we={name:"trailer",label:"tropiciel",aliases:[],description:"",aligment:L.TOWN,natures:[v.INVESTIGATIVE],abilities:["odwiedzenie: jeśli osoba UMRZE to następnego dnia jest UJAWNIONY i poznaje 3 osoby wśród których jest zabójca"]},be={name:"transporter",label:"transporter",aliases:[],description:"",aligment:L.TOWN,natures:[v.CHAOS],abilities:["akcja: zamienia miejsce pobytu wybranych osób"]},ze={name:"twin",label:"bliźniak",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.CHAOS],abilities:["pasywna: daje OCHRONĘ swojemu BLIŹNIAKOWI"]},Ae={name:"vampire",label:"wampir",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.CHAOS],abilities:["pasywna: jeśli ugryziona osoba stała się WAMPIREM, nie może już odwiedzać ","odwiedzenie: gryzie osobę, otrzymuje ona WAMPIRYZM"]},Ie={name:"vampire-hunter",label:"łowca wampirów",aliases:[],description:"",aligment:L.TOWN,natures:[v.KILLER],abilities:["odwiedzenie: jeśli osoba jest WAMPIREM zostaje ZABITA"]},ye={name:"veteran",label:"weteran",aliases:[],description:"",aligment:L.TOWN,natures:[v.KILLER,v.CHAOS],abilities:["akcja (3): Włącza alarm i staje się NIETYKALNY, Wszystkie osoby które go odwiedzą zostają ZABITE"]},Ne={name:"voodoo-master",label:"mistrz voodoo",aliases:[],description:"",aligment:L.MAFIA,natures:[v.SUPPORT,v.CHAOS],abilities:["pasywna: w nocy bierze udział w głosowaniu na ofiarę mafii ","pasywna: jeśli UMŻE, przed śmiercią nakłada KLĄTWĘ na osobę z którą się związał ","odwiedzenie (1): wiąże się z osobą"]},ge={name:"werewolf",label:"wilkołak",aliases:[],description:"",aligment:L.NEUTRAL,natures:[v.KILLER,v.SURVIVOR],abilities:["pasywna: jest NIETYKALNY w nocy ","odwiedzenie (co 3 noce): ZABIJA wszystkie osoby w miejscu które odwiedza"]},je={name:"hooker",label:"dziwka",aliases:[],description:"",aligment:L.TOWN,natures:[v.SUPPORT],abilities:["odwiedzenie: BLOKUJE ","specjalna: przed rozpoczęciem rozgrywki wybiera osobę, ujawniają się sobie nawzajem "]};var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",advisor:C,amnesiac:h,assassin:U,avenger:W,blackmailer:M,blocker:V,citizen:P,devourer:K,doctor:D,dopler:Y,estateAgent:Z,executoner:H,fairy:F,falsifier:B,fantom:J,gambler:x,godfather:G,gravedigger:$,guard:_,guardianAngel:X,jester:q,lawyer:Q,mafia:ee,mafioso:ae,mayor:ie,medium:ne,ocultist:te,pedant:se,philosopher:le,poisoner:oe,righteous:re,serialKiller:ce,shapeshifter:me,sheriff:de,soulMaster:ue,survivor:pe,texasRanger:Ee,trailer:we,transporter:be,twin:ze,vampire:Ae,vampireHunter:Ie,veteran:ye,voodooMaster:Ne,werewolf:ge,hooker:je});const Re={miscStore:new class{constructor(){this.roleList=Object.values(Te),this.roleFilter="",this.roleSelected=null,this.isNavActive=!1,i(this)}setRolesFilter(e){this.roleFilter=e}setNavActive(e){this.isNavActive=e}get filteredRoleList(){const e=new RegExp(this.roleFilter,"gi");return this.roleList.filter((a=>a.label.match(e)||a.name.match(e)||a.aliases.some((a=>a.match(e))))).sort(((e,a)=>e.label>a.label?1:-1))}},gameStore:j},ke=n.exports.createContext(Re),Oe=()=>n.exports.useContext(ke),Le=()=>Oe().miscStore,fe=()=>Oe().gameStore,ve=({children:e})=>t.createElement(ke.Provider,{value:Re},e);function Se(){return t.createElement("div",{className:"Menu"},t.createElement(s,{to:"/roles"},"role"),t.createElement(s,{to:"/decks"},"talie"),t.createElement(s,{to:"/gameplay"},"rozgrywka"),t.createElement(s,{to:"/assist"},"asysta"))}function Ce(e){const{role:a}=e,i=l([[o(L.TOWN),r("town")],[o(L.MAFIA),r("mafia")],[o(L.NEUTRAL),r("neutral")],[c,r("")]]);return t.createElement("div",{className:"RoleCard"},t.createElement("div",{className:`wrapper ${i(a.aligment)}`},t.createElement("div",{className:"portrait"},t.createElement("img",{src:a.portrait,alt:a.label})),t.createElement("div",{className:"content"},t.createElement("div",{className:"label"},a.label),a.abilities.map(((e,a)=>t.createElement("div",{className:"ability",key:a},t.createElement("span",{className:"kind"},e.kind||""),t.createElement("span",{className:"description"},e.description||e)))),t.createElement("div",{className:"description"},a.description)),t.createElement("div",{className:"overlay"}),t.createElement("div",{className:"border-top"}),t.createElement("div",{className:"border-bottom"}),t.createElement("div",{className:"crystal"})))}const he=()=>{const e=Le(),{name:a}=m(),i=e.roleList.find((e=>e.name===a));return console.log(a),t.createElement("div",{className:"RoleDetails"},t.createElement(s,{to:"/roles"}),i?t.createElement(Ce,{role:i}):null)};const Ue=d((()=>{const e=Le();return t.createElement("div",{className:"RoleFilter"},t.createElement("input",{type:"text",placeholder:"szukaj...",value:e.roleFilter,onChange:a=>e.setRolesFilter(a.target.value)}))}));const We=({role:e})=>{const a=l([[o(L.TOWN),r("town")],[o(L.MAFIA),r("mafia")],[o(L.NEUTRAL),r("neutral")],[c,r("")]]);return t.createElement(s,{className:`RoleListItem ${a(e.aligment)}`,to:`/roles/${e.name}`},t.createElement("div",{className:"portrait"},t.createElement("img",{src:e.portrait,alt:e.label})),t.createElement("div",{className:"label"},e.label),t.createElement("div",{className:"info"},t.createElement("span",{className:"aligment"},e.aligment),e.natures.map(((e,a)=>t.createElement("span",{className:"natures",key:a},e)))))};const Me=d((()=>{const e=Le().filteredRoleList.map(((e,a)=>t.createElement(We,{role:e,key:a})));return t.createElement("div",{className:"RoleList"},e)}));const Ve=d((()=>t.createElement("div",{className:"RolesPage"},t.createElement(Ue,null),t.createElement(Me,null),t.createElement(u,{path:"/roles/:name"},t.createElement(he,null))))),Pe=(e,a)=>{for(const i in a)delete a[i];Object.assign(a,e)},Ke=e=>e.kind===N.INIT,De=p((function(e){Pe({kind:N.IDLE},e)})),Ye=p((function(e){Pe({kind:N.INIT,names:[],deck:[]},e)})),Ze=p((function(e){if(Ke(e)){const a=e.names.map((a=>({name:a,role:e.deck.pop()||P,isAlive:!0})));Pe({players:a,effects:[],kind:N.DAY},e)}else(e=>e.kind===N.NIGHT)(e)&&Pe({players:e.players,effects:[],kind:N.DAY},e)})),He=p((function(e,a){a.names.push(e)})),Fe=p((function(e,a){a.deck.push(e)}));p((function(e,a){}));const Be=({game:e})=>t.createElement("div",null,t.createElement("input",{type:"button",value:"X",onClick:()=>{De(e)}}),t.createElement("input",{type:"button",value:"Nowa gra!",onClick:()=>{Ye(e)}})),Je=Object.entries(Te).map((([e,a])=>a)),xe=d((()=>{const e=fe();if(!Ke(e))throw new Error(`invalid game state, got ${e.kind}, expected INIT`);const a=n.exports.useRef(null),i=n.exports.useRef(null);return t.createElement("div",null,t.createElement("input",{type:"button",value:"X",onClick:()=>{De(e)}}),t.createElement("input",{type:"button",value:"Rozpocznij grę!",onClick:()=>{Ze(e)}}),t.createElement("hr",null),t.createElement("input",{ref:a,type:"text"}),t.createElement("input",{type:"button",onClick:()=>{var i;He((null==(i=a.current)?void 0:i.value)||`(T.T) ${Math.round(100*Math.random())}`,e)},value:"+"}),e.names.map(((e,a)=>t.createElement("div",{key:a},e))),t.createElement("hr",null),t.createElement("select",{ref:i},Je.map(((e,a)=>t.createElement("option",{key:a,value:e.name},e.label)))),t.createElement("input",{type:"button",onClick:()=>{const a=Je.find((e=>{var a;return e.name===(null==(a=i.current)?void 0:a.value)}))||P;Fe(a,e)},value:"+"}),e.deck.map(((e,a)=>t.createElement("div",{key:a},e.label))))})),Ge=d((()=>{const e=fe();return t.createElement("div",{className:"GamePage"},(()=>{switch(e.kind){case N.IDLE:return t.createElement(Be,{game:e});case N.INIT:return t.createElement(xe,null);case N.DAY:return t.createElement("span",null,"[DAY]");case N.INIT:return t.createElement("span",null,"[NIGHT]");case N.NIGHT:return t.createElement("span",null,"[END]")}})())}));const $e=d((()=>{const e=Le(),a=["App"];return e.isNavActive&&a.push("nav-active"),t.createElement("div",{className:a.join(" ")},t.createElement("main",null,t.createElement(E,null,t.createElement(u,{path:"/game"},t.createElement(Ge,null)),t.createElement(u,{path:"/"},t.createElement(Ve,null)))),t.createElement("nav",null,t.createElement("div",{className:"content"},t.createElement(Se,null)),t.createElement("div",{className:"handle",onClick:()=>e.setNavActive(!e.isNavActive)})))}));!function(a={}){const{immediate:i=!1,onNeedRefresh:n,onOfflineReady:t,onRegistered:s,onRegisterError:l}=a;let o;"serviceWorker"in navigator&&(o=new e("/sw.js",{scope:"/"}),o.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==t||t()})),o.register({immediate:i}).then((e=>{null==s||s(e)})).catch((e=>{null==l||l(e)})))}({onOfflineReady:()=>{},onNeedRefresh:()=>location.reload()}),w.render(t.createElement(t.StrictMode,null,t.createElement(b,null,t.createElement(ve,null,t.createElement($e,null)))),document.getElementById("root"));
