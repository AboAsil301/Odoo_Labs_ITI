"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_register-app_ts"],{16730:(t,e,a)=>{a.d(e,{T:()=>o});var r=a(15345),n=a(86283);function o(t){if(!n.n4)return;let e=n.n4.querySelector("title"),a=n.n4.createElement("title");a.textContent=t,e?e.textContent!==t&&(e.replaceWith(a),(0,r.x)(t)):(n.n4.head.appendChild(a),(0,r.x)(t))}},95253:(t,e,a)=>{let r;a.d(e,{Y:()=>h,q:()=>p});var n=a(88149),o=a(86058),i=a(44544),s=a(71643);let{getItem:l}=(0,i.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let t=(0,n.n)("octolytics");delete t.baseContext,r=new o.R(t)}catch(t){}function d(t){let e=(0,n.n)("octolytics").baseContext||{};if(e)for(let[t,a]of(delete e.app_id,delete e.event_url,delete e.host,Object.entries(e)))t.startsWith(c)&&(e[t.replace(c,"")]=a,delete e[t]);let a=document.querySelector("meta[name=visitor-payload]");if(a){let t=JSON.parse(atob(a.content));Object.assign(e,t)}let r=new URLSearchParams(window.location.search);for(let[t,a]of r)u.includes(t.toLowerCase())&&(e[t]=a);return e.staff=(0,s.B)().toString(),Object.assign(e,t)}function h(t){r?.sendPageView(d(t))}function p(t,e={}){let a=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=a?{service:a}:{};for(let[t,a]of Object.entries(e))null!=a&&(n[t]=`${a}`);r&&(d(n),r.sendEvent(t||"unknown",d(n)))}},24791:(t,e,a)=>{var r;a.d(e,{x:()=>r}),function(t){t.FETCH_THEN_TRANSITION="fetch-then-transition",t.TRANSITION_WHILE_FETCHING="transition-while-fetch",t.TRANSITION_WITHOUT_FETCH="transition-without-fetch"}(r||(r={}))},79953:(t,e,a)=>{a.d(e,{g:()=>z});var r,n=a(96843);let o=new n.e;async function i(t){let e=await o.getRegistration(t);return e()}var s=a(85893),l=a(76006),c=a(67294),u=a(12599),d=a(24791),h=a(68202),p=a(16730);let f=(t,e)=>null!==t&&null!==e&&t.pathname===e.pathname&&t.search===e.search&&Boolean(e.hash);function y(t,e,a){let r=(0,c.useRef)(null);(0,c.useEffect)(()=>{if(r.current||(r.current=a),!f(r.current,a)&&(e||t)){if(e){let t=m(e);(0,p.T)(t)}else t?.type==="loaded"&&t.title&&(0,p.T)(g(t.title))}r.current?.key!==a.key&&(r.current=a)},[e,t,a])}let m=t=>{let e=404===t.httpStatus?"404 Page not found":500===t.httpStatus?"500 Internal server error":t.httpStatus?`Error ${t.httpStatus}`:"Error";return g(e)};function g(t){return document.body.classList.contains("logged-out")?`${t} \xb7 GitHub`:t}var v=a(86283);let E=class Navigator{setAppNavigationStateCallback(t){this.appNavigationStateCallback=t}update(t){Object.assign(this.state,t);let e=this.getAppNavigationState();this.appNavigationStateCallback?.(e)}getAppNavigationState(){let{location:t,error:e,navigateOnError:a,routeStateMap:r,appPayload:n,pendingNavigation:o}=this.state;return{location:t,error:e,navigateOnError:a,routeStateMap:r,appPayload:n,isLoading:Boolean(o)}}async handleHistoryUpdate(t){if("POP"!==t.action||history.state?.turboCount===this.state.turboCount){if(this.isHashNavigation(t)){this.navigateWithCurrentPayload(t);return}if("POP"!==t.action&&(0,h.LD)("react"),void 0!==this.state.routeStateMap[t.location.key])this.navigateFromHistory(t);else{let e=this.matchLocation(t.location);if(!e)throw Error("handleHistoryUpdate should only be called for matching routes");let[a,r]=e;if(r?.transitionType===d.x.TRANSITION_WHILE_FETCHING&&this.navigateWithoutPayload(t),r?.transitionType===d.x.TRANSITION_WITHOUT_FETCH){this.navigateWithoutPayload(t);return}this.enterLoadingState(t);let n=await r?.coreLoader({location:t.location,params:a?.params});if(t.location!==this.state.pendingNavigation?.update.location)return;if(history.state&&"POP"!==t.action){let{turbo:t,...e}=history.state;history.replaceState({...e,skipTurbo:!0},"",location.href)}switch(n.type){case"loaded":this.leaveLoadingStateWithRouteData(t,n.data,n.title);break;case"error":this.leaveLoadingStateWithError(t,n.error,!1);break;case"redirect":window.location.replace(n.url+location.hash);break;case"route-handled-error":this.leaveLoadingStateWithError(t,n.error,!0);break;default:throw Error(`Unexpected loader result type: ${n.type}`)}}}}matchLocation(t){let e,a;for(let r of this.routes)if(e=(0,u.LX)(r.path,t.pathname)){a=r;break}return e&&a?[e,a]:null}isHashNavigation(t){let e=this.state.location,a=t.location;return f(e,a)}navigateFromHistory(t){this.update({location:t.location,pendingNavigation:null,error:null})}enterLoadingState(t){this.update({pendingNavigation:{update:t}})}leaveLoadingStateWithError(t,e,a){this.update({location:t.location,error:e,pendingNavigation:null,navigateOnError:a})}navigateWithoutPayload(t){this.update({location:t.location,error:null})}navigateWithCurrentPayload(t){let e=this.state.location.key,a=e+t.location.hash,r={...t.location,key:a},n={...this.state.routeStateMap,[a]:this.state.routeStateMap[e]};this.update({...t,location:r,routeStateMap:n,error:null})}leaveLoadingStateWithRouteData(t,e,a){this.update({location:t.location,pendingNavigation:null,routeStateMap:e?{...this.state.routeStateMap,[t.location.key]:{type:"loaded",data:e,title:a}}:this.state.routeStateMap,error:null})}constructor(t,e,a,r){this.routes=r;let n=this.matchLocation(t);if(!n)throw Error(`No route found for initial location: ${t.pathname}`);let[o,i]=n,{data:s,title:l}=i.loadFromEmbeddedData({embeddedData:e,location:t,params:o.params});this.state={location:t,routeStateMap:{[t.key]:{type:"loaded",data:s,title:l}},appPayload:a,pendingNavigation:null,error:null,navigateOnError:!1,turboCount:v.zu?.state?.turboCount}}};function S({initialLocation:t,embeddedData:e,routes:a}){let[r]=(0,c.useState)(()=>{let{appPayload:r,...n}=e;return new E(t,n,r,a)}),[n,o]=(0,c.useState)(()=>r.getAppNavigationState()),i=(0,c.useRef)(!1);i.current||(r.setAppNavigationStateCallback(o),i.current=!0);let s=(0,c.useCallback)(t=>{r.handleHistoryUpdate(t)},[r]);return[n,{handleHistoryUpdate:s}]}var w=a(89250),b=a(72982),N=a(1343),x=a(77617),T=a(71643),C=a(95253);let j=(t,e,a,r)=>{(0,c.useEffect)(()=>{e||(t.key,(0,C.Y)({react_app:r}))},[r,t.key,e]);let n=(0,c.useRef)(void 0);(0,c.useEffect)(()=>{e||void 0!==n.current&&n.current===t.key||((0,h.sj)()?k(a):_(a),n.current=t.key)},[t.key,e,a])},k=t=>{t?(0,h.r_)():((0,h.TL)(),(0,h.BT)())},_=t=>{if(t)return;let e=A();e&&(0,T.b)({requestUrl:window.location.href,distributionKey:"REACT_NAV_DURATION",distributionValue:Math.round(e),distributionTags:["REACT_NAV_HARD"]})},L="react_nav_duration";function A(){window.performance.measure(L);let t=window.performance.getEntriesByName(L),e=t.pop();return e?e.duration:null}function R(t,e){let a=(0,c.useRef)(void 0);(0,c.useEffect)(()=>{let r=e.pathname+e.search;if(void 0===a.current)a.current=r;else if(a.current!==r&&!t){let t=document.querySelector("[data-react-autofocus]");t||(t=document.querySelector("react-app h1")),t?.focus(),a.current=r}},[t,e.pathname,e.search])}var I=a(65722);let P=new Map,W=!1;async function H(){let{session:t}=await a.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js").then(a.bind(a,67852));window.addEventListener("popstate",()=>{let{scrollPosition:e}=t.history.getRestorationDataForIdentifier(t.history.restorationIdentifier)||{};e&&P.set(window.location.href,e)})}function O(){v.iG&&!W&&(H(),W=!0)}function D(){(0,c.useLayoutEffect)(()=>{let t=window.location.href,e=P.get(t);if(!e)return;let a=setTimeout(()=>{window.scrollTo(e.x,e.y)},0);return()=>{clearTimeout(a)}})}let M=v.iG?D:I.Z;"function"==typeof afterEach&&afterEach(()=>{P.clear(),W=!1});var F=a(59112),U=a(88479);function B({appName:t,initialPath:e,embeddedData:a,routes:r,App:n,wasServerRendered:o,ssrError:i}){let l=(0,c.useRef)(),u=globalThis.window,{pathname:d,search:h,hash:p}=new URL(`${e}${u?.location.hash??""}`,u?.location.href??"https://github.com");l.current||(l.current=(0,F.l)({window:u,v5Compat:!0}));let f=l.current,{key:m,state:g}=f.location,[{location:v,error:E,routeStateMap:T,appPayload:C,navigateOnError:k,isLoading:_},{handleHistoryUpdate:L}]=S({initialLocation:{pathname:d,search:h,hash:p,key:m,state:g},appName:t,embeddedData:a,routes:r});return y(T[v.key],E,v),R(_,v),j(v,_,E,t),M(),(0,c.useLayoutEffect)(()=>{let t=f.listen(L);return t},[f,L]),(0,s.jsx)(N.R,{appName:t,wasServerRendered:o,children:(0,s.jsx)(b.S,{children:(0,s.jsx)(U.W,{App:n,appPayload:C,error:E,history:f,location:v,navigateOnError:k,Router:w.F0,routes:r,routeStateMap:T,children:(0,s.jsx)(x.P,{ssrError:i})})})})}O();try{(r=B).displayName||(r.displayName="ClientEntry")}catch{}var q=a(88003);let $=class ReactAppElement extends q.S{async getReactNode(t){let e=this.name,a=this.getAttribute("initial-path"),{App:r,routes:n}=await i(e);if(this.isLazy){let e=await fetch(a,{mode:"no-cors",cache:"no-cache",credentials:"include"}),{payload:r}=await e.json();t.payload=r}return(0,s.jsx)(B,{appName:e,initialPath:a,embeddedData:t,routes:n,App:r,wasServerRendered:this.hasSSRContent,ssrError:Boolean(this.ssrError)})}get isLazy(){return"true"===this.getAttribute("data-lazy")}constructor(...t){super(...t),this.nameAttribute="app-name"}};function z(t,e){o.register(t,e)}$=function(t,e,a,r){var n,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o<3?n(i):o>3?n(e,a,i):n(e,a))||i);return o>3&&i&&Object.defineProperty(e,a,i),i}([l.Ih],$)},34634:(t,e,a)=>{a.d(e,{A:()=>n});var r=a(67294);let n=(0,r.createContext)({})},17891:(t,e,a)=>{a.d(e,{E:()=>n,M:()=>o});var r=a(67294);let n=(0,r.createContext)(void 0);function o(){let t=(0,r.useContext)(n);return t}},89226:(t,e,a)=>{a.d(e,{V:()=>i});var r=a(67294),n=a(89250),o=a(34634);function i(){let t=(0,r.useContext)(o.A),e=(0,n.TH)();return t[e.key]}},73968:(t,e,a)=>{a.d(e,{T:()=>n});var r=a(89226);function n(){let t=(0,r.V)(),e=t&&"loaded"===t.type?t.data:void 0;return e?.payload}},88479:(t,e,a)=>{a.d(e,{W:()=>v,h:()=>g});var r,n,o,i=a(85893),s=a(58989),l=a(89250),c=a(67294),u=a(68202),d=a(17891),h=a(73968);function p(){let t=(0,h.T)(),e=(0,d.M)();(0,c.useEffect)(()=>{function a(){document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))}return document.addEventListener(u.QE.INITIAL,a),()=>{document.removeEventListener(u.QE.INITIAL,a)}},[]),(0,c.useEffect)(()=>{document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))},[e,t])}function f({App:t}){return p(),t?(0,i.jsx)(t,{children:(0,i.jsx)(l.j3,{})}):(0,i.jsx)(l.j3,{})}try{(r=f).displayName||(r.displayName="AppWrapper")}catch{}var y=a(17551),m=a(34634);let g=(0,c.createContext)(null);function v({App:t,appPayload:e,children:a,error:r,history:n,location:o,navigateOnError:c,Router:u,routes:h,routeStateMap:p}){return(0,i.jsx)(s.i,{routes:h,history:n,children:r&&!c?(0,i.jsx)(y.m,{...r}):(0,i.jsx)(d.E.Provider,{value:e,children:(0,i.jsx)(g.Provider,{value:r,children:(0,i.jsx)(m.A.Provider,{value:p,children:(0,i.jsxs)(u,{location:o,navigator:n,children:[(0,i.jsx)(l.Z5,{children:(0,i.jsx)(l.AW,{element:(0,i.jsx)(f,{App:t}),children:h.map(({path:t,Component:e},a)=>(0,i.jsx)(l.AW,{path:t,element:(0,i.jsx)(e,{})},a))})}),a]})})})})})}try{(n=g).displayName||(n.displayName="NavigationErrorContext")}catch{}try{(o=v).displayName||(o.displayName="AppRouter")}catch{}},72982:(t,e,a)=>{a.d(e,{S:()=>ErrorBoundary});var r=a(85893),n=a(17551),o=a(67294);let ErrorBoundary=class ErrorBoundary extends o.Component{static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){"function"==typeof this.props.onError?this.props.onError(t):i(t)}render(){return this.state.error?this.props.fallback||(0,r.jsx)(n.m,{type:"httpError"}):this.props.children}constructor(t){super(t),this.state={error:null}}};function i(t){setTimeout(()=>{throw t})}},17551:(t,e,a)=>{a.d(e,{m:()=>l});var r,n=a(85893),o=a(75308),i=a(42483);let s={404:"Didn\u2019t find anything here!",500:"Looks like something went wrong!"};function l({httpStatus:t,type:e}){let a="fetchError"===e?"Looks like network is down!":s[t||500];return(0,n.jsxs)(o.Z,{as:"h1",tabIndex:-1,sx:{display:"flex",flexDirection:"column",minWidth:"100%",minHeight:"100%",alignItems:"center",justifyContent:"center"},children:["Error",t?(0,n.jsx)(i.Z,{sx:{fontSize:"144px",fontWeight:"bold",lineHeight:1},children:t}):null,(0,n.jsx)(i.Z,{sx:{fontSize:4,pt:2},children:a})]})}try{(r=l).displayName||(r.displayName="ErrorPage")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_register-app_ts-969f2438d63b.js.map