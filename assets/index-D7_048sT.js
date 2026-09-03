(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function js(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hc={exports:{}},Er={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=Symbol.for("react.transitional.element"),Np=Symbol.for("react.fragment");function gc(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:Tp,type:e,key:i,ref:t!==void 0?t:null,props:n}}Er.Fragment=Np;Er.jsx=gc;Er.jsxs=gc;hc.exports=Er;var c=hc.exports,yc={exports:{}},M={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Symbol.for("react.transitional.element"),Cp=Symbol.for("react.portal"),$p=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),Dp=Symbol.for("react.profiler"),Op=Symbol.for("react.consumer"),zp=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Mp=Symbol.for("react.suspense"),Rp=Symbol.for("react.memo"),bc=Symbol.for("react.lazy"),_p=Symbol.for("react.activity"),qo=Symbol.iterator;function Lp(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xc=Object.assign,wc={};function oi(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}oi.prototype.isReactComponent={};oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sc(){}Sc.prototype=oi.prototype;function Rs(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}var _s=Rs.prototype=new Sc;_s.constructor=Rs;xc(_s,oi.prototype);_s.isPureReactComponent=!0;var Bo=Array.isArray;function Ll(){}var te={H:null,A:null,T:null,S:null},Ac=Object.prototype.hasOwnProperty;function Ls(e,t,n){var i=n.ref;return{$$typeof:Ms,type:e,key:t,ref:i!==void 0?i:null,props:n}}function qp(e,t){return Ls(e.type,t,e.props)}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ms}function Bp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qo=/\/+/g;function Jr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bp(""+e.key):t.toString(36)}function Qp(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ll,Ll):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Dn(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ms:case Cp:l=!0;break;case bc:return l=e._init,Dn(l(e._payload),t,n,i,a)}}if(l)return a=a(e),l=i===""?"."+Jr(e,0):i,Bo(a)?(n="",l!=null&&(n=l.replace(Qo,"$&/")+"/"),Dn(a,t,n,"",function(m){return m})):a!=null&&(qs(a)&&(a=qp(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Qo,"$&/")+"/")+l)),t.push(a)),1;l=0;var s=i===""?".":i+":";if(Bo(e))for(var u=0;u<e.length;u++)i=e[u],r=s+Jr(i,u),l+=Dn(i,t,n,r,a);else if(u=Lp(e),typeof u=="function")for(e=u.call(e),u=0;!(i=e.next()).done;)i=i.value,r=s+Jr(i,u++),l+=Dn(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Dn(Qp(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function Sa(e,t,n){if(e==null)return e;var i=[],a=0;return Dn(e,i,"","",function(r){return t.call(n,r,a++)}),i}function kp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ko=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ip={map:Sa,forEach:function(e,t,n){Sa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sa(e,function(){t++}),t},toArray:function(e){return Sa(e,function(t){return t})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Activity=_p;M.Children=Ip;M.Component=oi;M.Fragment=$p;M.Profiler=Dp;M.PureComponent=Rs;M.StrictMode=Ep;M.Suspense=Mp;M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te;M.__COMPILER_RUNTIME={__proto__:null,c:function(e){return te.H.useMemoCache(e)}};M.cache=function(e){return function(){return e.apply(null,arguments)}};M.cacheSignal=function(){return null};M.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=xc({},e.props),a=e.key;if(t!=null)for(r in t.key!==void 0&&(a=""+t.key),t)!Ac.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var l=Array(r),s=0;s<r;s++)l[s]=arguments[s+2];i.children=l}return Ls(e.type,a,i)};M.createContext=function(e){return e={$$typeof:zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Op,_context:e},e};M.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Ac.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)a[i]===void 0&&(a[i]=l[i]);return Ls(e,r,a)};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:jp,render:e}};M.isValidElement=qs;M.lazy=function(e){return{$$typeof:bc,_payload:{_status:-1,_result:e},_init:kp}};M.memo=function(e,t){return{$$typeof:Rp,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=te.T,n={};te.T=n;try{var i=e(),a=te.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ll,ko)}catch(r){ko(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),te.T=t}};M.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()};M.use=function(e){return te.H.use(e)};M.useActionState=function(e,t,n){return te.H.useActionState(e,t,n)};M.useCallback=function(e,t){return te.H.useCallback(e,t)};M.useContext=function(e){return te.H.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e,t){return te.H.useDeferredValue(e,t)};M.useEffect=function(e,t){return te.H.useEffect(e,t)};M.useEffectEvent=function(e){return te.H.useEffectEvent(e)};M.useId=function(){return te.H.useId()};M.useImperativeHandle=function(e,t,n){return te.H.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return te.H.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return te.H.useLayoutEffect(e,t)};M.useMemo=function(e,t){return te.H.useMemo(e,t)};M.useOptimistic=function(e,t){return te.H.useOptimistic(e,t)};M.useReducer=function(e,t,n){return te.H.useReducer(e,t,n)};M.useRef=function(e){return te.H.useRef(e)};M.useState=function(e){return te.H.useState(e)};M.useSyncExternalStore=function(e,t,n){return te.H.useSyncExternalStore(e,t,n)};M.useTransition=function(){return te.H.useTransition()};M.version="19.2.8";yc.exports=M;var k=yc.exports;const Dr=js(k);var Tc={exports:{}},Or={},Nc={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,R){var O=E.length;E.push(R);e:for(;0<O;){var H=O-1>>>1,F=E[H];if(0<a(F,R))E[H]=R,E[O]=F,O=H;else break e}}function n(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var R=E[0],O=E.pop();if(O!==R){E[0]=O;e:for(var H=0,F=E.length,it=F>>>1;H<it;){var Ne=2*(H+1)-1,gi=E[Ne],Ce=Ne+1,st=E[Ce];if(0>a(gi,O))Ce<F&&0>a(st,gi)?(E[H]=st,E[Ce]=O,H=Ce):(E[H]=gi,E[Ne]=O,H=Ne);else if(Ce<F&&0>a(st,O))E[H]=st,E[Ce]=O,H=Ce;else break e}}return R}function a(E,R){var O=E.sortIndex-R.sortIndex;return O!==0?O:E.id-R.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],m=[],b=1,p=null,f=3,y=!1,A=!1,T=!1,$=!1,h=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function g(E){for(var R=n(m);R!==null;){if(R.callback===null)i(m);else if(R.startTime<=E)i(m),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(m)}}function v(E){if(T=!1,g(E),!A)if(n(u)!==null)A=!0,w||(w=!0,le());else{var R=n(m);R!==null&&se(v,R.startTime-E)}}var w=!1,x=-1,C=5,N=-1;function D(){return $?!0:!(e.unstable_now()-N<C)}function U(){if($=!1,w){var E=e.unstable_now();N=E;var R=!0;try{e:{A=!1,T&&(T=!1,o(x),x=-1),y=!0;var O=f;try{t:{for(g(E),p=n(u);p!==null&&!(p.expirationTime>E&&D());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var F=H(p.expirationTime<=E);if(E=e.unstable_now(),typeof F=="function"){p.callback=F,g(E),R=!0;break t}p===n(u)&&i(u),g(E)}else i(u);p=n(u)}if(p!==null)R=!0;else{var it=n(m);it!==null&&se(v,it.startTime-E),R=!1}}break e}finally{p=null,f=O,y=!1}R=void 0}}finally{R?le():w=!1}}}var le;if(typeof d=="function")le=function(){d(U)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,Q=z.port2;z.port1.onmessage=U,le=function(){Q.postMessage(null)}}else le=function(){h(U,0)};function se(E,R){x=h(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var O=f;f=R;try{return E()}finally{f=O}},e.unstable_requestPaint=function(){$=!0},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=f;f=E;try{return R()}finally{f=O}},e.unstable_scheduleCallback=function(E,R,O){var H=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?H+O:H):O=H,E){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=O+F,E={id:b++,callback:R,priorityLevel:E,startTime:O,expirationTime:F,sortIndex:-1},O>H?(E.sortIndex=O,t(m,E),n(u)===null&&E===n(m)&&(T?(o(x),x=-1):T=!0,se(v,O-H))):(E.sortIndex=F,t(u,E),A||y||(A=!0,w||(w=!0,le()))),E},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(E){var R=f;return function(){var O=f;f=R;try{return E.apply(this,arguments)}finally{f=O}}}})(Cc);Nc.exports=Cc;var Hp=Nc.exports,$c={exports:{}},De={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=k;function Ec(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mt(){}var Ee={d:{f:Mt,r:function(){throw Error(Ec(522))},D:Mt,C:Mt,L:Mt,m:Mt,X:Mt,S:Mt,M:Mt},p:0,findDOMNode:null},Gp=Symbol.for("react.portal");function Yp(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gp,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var zi=Up.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function zr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Ec(299));return Yp(e,t,null,n)};De.flushSync=function(e){var t=zi.T,n=Ee.p;try{if(zi.T=null,Ee.p=2,e)return e()}finally{zi.T=t,Ee.p=n,Ee.d.f()}};De.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ee.d.C(e,t))};De.prefetchDNS=function(e){typeof e=="string"&&Ee.d.D(e)};De.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=zr(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Ee.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&Ee.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};De.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=zr(t.as,t.crossOrigin);Ee.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ee.d.M(e)};De.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=zr(n,t.crossOrigin);Ee.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};De.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=zr(t.as,t.crossOrigin);Ee.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ee.d.m(e)};De.requestFormReset=function(e){Ee.d.r(e)};De.unstable_batchedUpdates=function(e,t){return e(t)};De.useFormState=function(e,t,n){return zi.H.useFormState(e,t,n)};De.useFormStatus=function(){return zi.H.useHostTransitionStatus()};De.version="19.2.8";function Dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc)}catch(e){console.error(e)}}Dc(),$c.exports=De;var Vp=$c.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=Hp,Oc=k,Xp=Vp;function S(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function la(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mc(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Io(e){if(la(e)!==e)throw Error(S(188))}function Zp(e){var t=e.alternate;if(!t){if(t=la(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Io(a),e;if(r===i)return Io(a),t;r=r.sibling}throw Error(S(188))}if(n.return!==i.return)n=a,i=r;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,i=r;break}if(s===i){l=!0,i=a,n=r;break}s=s.sibling}if(!l){for(s=r.child;s;){if(s===n){l=!0,n=r,i=a;break}if(s===i){l=!0,i=r,n=a;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==i)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Rc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Rc(e),t!==null)return t;e=e.sibling}return null}var ne=Object.assign,Pp=Symbol.for("react.element"),Aa=Symbol.for("react.transitional.element"),Ci=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),Lc=Symbol.for("react.consumer"),wt=Symbol.for("react.context"),Bs=Symbol.for("react.forward_ref"),Bl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),Qs=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),kl=Symbol.for("react.activity"),Fp=Symbol.for("react.memo_cache_sentinel"),Ho=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var Kp=Symbol.for("react.client.reference");function Il(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Kp?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case ql:return"Profiler";case _c:return"StrictMode";case Bl:return"Suspense";case Ql:return"SuspenseList";case kl:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ci:return"Portal";case wt:return e.displayName||"Context";case Lc:return(e._context.displayName||"Context")+".Consumer";case Bs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qs:return t=e.displayName||null,t!==null?t:Il(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Il(e(t))}catch{}}return null}var $i=Array.isArray,j=Oc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=Xp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fn={pending:!1,data:null,method:null,action:null},Hl=[],Mn=-1;function ft(e){return{current:e}}function ve(e){0>Mn||(e.current=Hl[Mn],Hl[Mn]=null,Mn--)}function J(e,t){Mn++,Hl[Mn]=e.current,e.current=t}var dt=ft(null),Yi=ft(null),Yt=ft(null),Wa=ft(null);function er(e,t){switch(J(Yt,t),J(Yi,e),J(dt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zu(t),e=ip(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ve(dt),J(dt,e)}function Kn(){ve(dt),ve(Yi),ve(Yt)}function Ul(e){e.memoizedState!==null&&J(Wa,e);var t=dt.current,n=ip(t,e.type);t!==n&&(J(Yi,e),J(dt,n))}function tr(e){Yi.current===e&&(ve(dt),ve(Yi)),Wa.current===e&&(ve(Wa),na._currentValue=fn)}var Wr,Uo;function on(e){if(Wr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wr=t&&t[1]||"",Uo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+e+Uo}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(y){var f=y}Reflect.construct(e,[],p)}else{try{p.call()}catch(y){f=y}e.call(p.prototype)}}else{try{throw Error()}catch(y){f=y}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(y){if(y&&f&&typeof y.stack=="string")return[y.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),l=r[0],s=r[1];if(l&&s){var u=l.split(`
`),m=s.split(`
`);for(a=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;if(i===u.length||a===m.length)for(i=u.length-1,a=m.length-1;1<=i&&0<=a&&u[i]!==m[a];)a--;for(;1<=i&&0<=a;i--,a--)if(u[i]!==m[a]){if(i!==1||a!==1)do if(i--,a--,0>a||u[i]!==m[a]){var b=`
`+u[i].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=i&&0<=a);break}}}finally{el=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?on(n):""}function Jp(e,t){switch(e.tag){case 26:case 27:case 5:return on(e.type);case 16:return on("Lazy");case 13:return e.child!==t&&t!==null?on("Suspense Fallback"):on("Suspense");case 19:return on("SuspenseList");case 0:case 15:return tl(e.type,!1);case 11:return tl(e.type.render,!1);case 1:return tl(e.type,!0);case 31:return on("Activity");default:return""}}function Go(e){try{var t="",n=null;do t+=Jp(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Gl=Object.prototype.hasOwnProperty,ks=ge.unstable_scheduleCallback,nl=ge.unstable_cancelCallback,Wp=ge.unstable_shouldYield,em=ge.unstable_requestPaint,Ie=ge.unstable_now,tm=ge.unstable_getCurrentPriorityLevel,qc=ge.unstable_ImmediatePriority,Bc=ge.unstable_UserBlockingPriority,nr=ge.unstable_NormalPriority,nm=ge.unstable_LowPriority,Qc=ge.unstable_IdlePriority,im=ge.log,am=ge.unstable_setDisableYieldValue,sa=null,He=null;function kt(e){if(typeof im=="function"&&am(e),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(sa,e)}catch{}}var Ue=Math.clz32?Math.clz32:sm,rm=Math.log,lm=Math.LN2;function sm(e){return e>>>=0,e===0?32:31-(rm(e)/lm|0)|0}var Ta=256,Na=262144,Ca=4194304;function un(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var s=i&134217727;return s!==0?(i=s&~r,i!==0?a=un(i):(l&=s,l!==0?a=un(l):n||(n=s&~e,n!==0&&(a=un(n))))):(s=i&~r,s!==0?a=un(s):l!==0?a=un(l):n||(n=i&~e,n!==0&&(a=un(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function om(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kc(){var e=Ca;return Ca<<=1,!(Ca&62914560)&&(Ca=4194304),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ua(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function um(e,t,n,i,a,r){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(n=l&~n;0<n;){var b=31-Ue(n),p=1<<b;s[b]=0,u[b]=-1;var f=m[b];if(f!==null)for(m[b]=null,b=0;b<f.length;b++){var y=f[b];y!==null&&(y.lane&=-536870913)}n&=~p}i!==0&&Ic(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function Ic(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ue(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Hc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ue(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Uc(e,t){var n=t&-t;return n=n&42?1:Is(n),n&(e.suspendedLanes|t)?0:n}function Is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hs(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Gc(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:mp(e.type))}function Yo(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var rn=Math.random().toString(36).slice(2),we="__reactFiber$"+rn,_e="__reactProps$"+rn,ui="__reactContainer$"+rn,Yl="__reactEvents$"+rn,cm="__reactListeners$"+rn,dm="__reactHandles$"+rn,Vo="__reactResources$"+rn,ca="__reactMarker$"+rn;function Us(e){delete e[we],delete e[_e],delete e[Yl],delete e[cm],delete e[dm]}function Rn(e){var t=e[we];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ui]||n[we]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[we])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function ci(e){if(e=e[we]||e[ui]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ei(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(S(33))}function Gn(e){var t=e[Vo];return t||(t=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function be(e){e[ca]=!0}var Yc=new Set,Vc={};function Sn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Yc.add(t[e])}var fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xo={},Zo={};function pm(e){return Gl.call(Zo,e)?!0:Gl.call(Xo,e)?!1:fm.test(e)?Zo[e]=!0:(Xo[e]=!0,!1)}function Ba(e,t,n){if(pm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function $a(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mm(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vl(e){if(!e._valueTracker){var t=Xc(e)?"checked":"value";e._valueTracker=mm(e,t,""+e[t])}}function Zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Xc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hm=/[\n"\\]/g;function Ke(e){return e.replace(hm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xl(e,t,n,i,a,r,l,s){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ze(t)):e.value!==""+Ze(t)&&(e.value=""+Ze(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?Zl(e,l,Ze(t)):n!=null?Zl(e,l,Ze(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ze(s):e.removeAttribute("name")}function Pc(e,t,n,i,a,r,l,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Vl(e);return}n=n!=null?""+Ze(n):"",t=t!=null?""+Ze(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=s?e.checked:!!i,e.defaultChecked=!!i,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Vl(e)}function Zl(e,t,n){t==="number"&&ir(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Yn(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ze(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Fc(e,t,n){if(t!=null&&(t=""+Ze(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ze(n):""}function Kc(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(S(92));if($i(i)){if(1<i.length)throw Error(S(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ze(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Vl(e)}function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||gm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Jc(e,t,n){if(t!=null&&typeof t!="object")throw Error(S(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Po(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Po(e,r,t[r])}function Gs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ym=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qa(e){return bm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function St(){}var Pl=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,Vn=null;function Fo(e){var t=ci(e);if(t&&(e=t.stateNode)){var n=e[_e]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ke(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[_e]||null;if(!a)throw Error(S(90));Xl(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Zc(i)}break e;case"textarea":Fc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}}}var al=!1;function Wc(e,t,n){if(al)return e(t,n);al=!0;try{var i=e(t);return i}finally{if(al=!1,(_n!==null||Vn!==null)&&(Gr(),_n&&(t=_n,e=Vn,Vn=_n=null,Fo(t),e)))for(t=0;t<e.length;t++)Fo(e[t])}}function Vi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[_e]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=!1;if($t)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Fl=!1}var It=null,Vs=null,ka=null;function ed(){if(ka)return ka;var e,t=Vs,n=t.length,i,a="value"in It?It.value:It.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(i=1;i<=l&&t[n-i]===a[r-i];i++);return ka=a.slice(e,1<i?1-i:void 0)}function Ia(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function Ko(){return!1}function Le(e){function t(n,i,a,r,l){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ea:Ko,this.isPropagationStopped=Ko,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mr=Le(An),da=ne({},An,{view:0,detail:0}),vm=Le(da),rl,ll,vi,Rr=ne({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(rl=e.screenX-vi.screenX,ll=e.screenY-vi.screenY):ll=rl=0,vi=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),Jo=Le(Rr),xm=ne({},Rr,{dataTransfer:0}),wm=Le(xm),Sm=ne({},da,{relatedTarget:0}),sl=Le(Sm),Am=ne({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),Tm=Le(Am),Nm=ne({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=Le(Nm),$m=ne({},An,{data:0}),Wo=Le($m),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Om[e])?!!t[e]:!1}function Xs(){return zm}var jm=ne({},da,{key:function(e){if(e.key){var t=Em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?Ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mm=Le(jm),Rm=ne({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Le(Rm),_m=ne({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Lm=Le(_m),qm=ne({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bm=Le(qm),Qm=ne({},Rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),km=Le(Qm),Im=ne({},An,{newState:0,oldState:0}),Hm=Le(Im),Um=[9,13,27,32],Zs=$t&&"CompositionEvent"in window,ji=null;$t&&"documentMode"in document&&(ji=document.documentMode);var Gm=$t&&"TextEvent"in window&&!ji,td=$t&&(!Zs||ji&&8<ji&&11>=ji),tu=" ",nu=!1;function nd(e,t){switch(e){case"keyup":return Um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Ym(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function Vm(e,t){if(Ln)return e==="compositionend"||!Zs&&nd(e,t)?(e=ed(),ka=Vs=It=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var Xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xm[e.type]:t==="textarea"}function ad(e,t,n,i){_n?Vn?Vn.push(i):Vn=[i]:_n=i,t=wr(t,"onChange"),0<t.length&&(n=new Mr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Mi=null,Xi=null;function Zm(e){ep(e,0)}function _r(e){var t=Ei(e);if(Zc(t))return e}function au(e,t){if(e==="change")return t}var rd=!1;if($t){var ol;if($t){var ul="oninput"in document;if(!ul){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),ul=typeof ru.oninput=="function"}ol=ul}else ol=!1;rd=ol&&(!document.documentMode||9<document.documentMode)}function lu(){Mi&&(Mi.detachEvent("onpropertychange",ld),Xi=Mi=null)}function ld(e){if(e.propertyName==="value"&&_r(Xi)){var t=[];ad(t,Xi,e,Ys(e)),Wc(Zm,t)}}function Pm(e,t,n){e==="focusin"?(lu(),Mi=t,Xi=n,Mi.attachEvent("onpropertychange",ld)):e==="focusout"&&lu()}function Fm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _r(Xi)}function Km(e,t){if(e==="click")return _r(t)}function Jm(e,t){if(e==="input"||e==="change")return _r(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Wm;function Zi(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Gl.call(t,a)||!Ye(e[a],t[a]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=su(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function od(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ir(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ir(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var eh=$t&&"documentMode"in document&&11>=document.documentMode,qn=null,Kl=null,Ri=null,Jl=!1;function uu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||qn==null||qn!==ir(i)||(i=qn,"selectionStart"in i&&Ps(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ri&&Zi(Ri,i)||(Ri=i,i=wr(Kl,"onSelect"),0<i.length&&(t=new Mr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=qn)))}function sn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:sn("Animation","AnimationEnd"),animationiteration:sn("Animation","AnimationIteration"),animationstart:sn("Animation","AnimationStart"),transitionrun:sn("Transition","TransitionRun"),transitionstart:sn("Transition","TransitionStart"),transitioncancel:sn("Transition","TransitionCancel"),transitionend:sn("Transition","TransitionEnd")},cl={},ud={};$t&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function Tn(e){if(cl[e])return cl[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return cl[e]=t[n];return e}var cd=Tn("animationend"),dd=Tn("animationiteration"),fd=Tn("animationstart"),th=Tn("transitionrun"),nh=Tn("transitionstart"),ih=Tn("transitioncancel"),pd=Tn("transitionend"),md=new Map,Wl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wl.push("scrollEnd");function lt(e,t){md.set(e,t),Sn(t,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xe=[],Qn=0,Fs=0;function Lr(){for(var e=Qn,t=Fs=Qn=0;t<e;){var n=Xe[t];Xe[t++]=null;var i=Xe[t];Xe[t++]=null;var a=Xe[t];Xe[t++]=null;var r=Xe[t];if(Xe[t++]=null,i!==null&&a!==null){var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}r!==0&&hd(n,a,r)}}function qr(e,t,n,i){Xe[Qn++]=e,Xe[Qn++]=t,Xe[Qn++]=n,Xe[Qn++]=i,Fs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ks(e,t,n,i){return qr(e,t,n,i),rr(e)}function Nn(e,t){return qr(e,null,null,t),rr(e)}function hd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Ue(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function rr(e){if(50<Ui)throw Ui=0,xs=null,Error(S(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var kn={};function ah(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,i){return new ah(e,t,n,i)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ha(e,t,n,i,a,r){var l=0;if(i=e,typeof e=="function")Js(e)&&(l=1);else if(typeof e=="string")l=u0(e,n,dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case kl:return e=Qe(31,n,t,a),e.elementType=kl,e.lanes=r,e;case jn:return pn(n.children,a,r,t);case _c:l=8,a|=24;break;case ql:return e=Qe(12,n,t,a|2),e.elementType=ql,e.lanes=r,e;case Bl:return e=Qe(13,n,t,a),e.elementType=Bl,e.lanes=r,e;case Ql:return e=Qe(19,n,t,a),e.elementType=Ql,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wt:l=10;break e;case Lc:l=9;break e;case Bs:l=11;break e;case Qs:l=14;break e;case Rt:l=16,i=null;break e}l=29,n=Error(S(130,e===null?"null":typeof e,"")),i=null}return t=Qe(l,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function pn(e,t,n,i){return e=Qe(7,e,i,t),e.lanes=n,e}function dl(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function yd(e){var t=Qe(18,null,null,0);return t.stateNode=e,t}function fl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cu=new WeakMap;function Je(e,t){if(typeof e=="object"&&e!==null){var n=cu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Go(t)},cu.set(e,t),t)}return{value:e,source:t,stack:Go(t)}}var In=[],Hn=0,lr=null,Pi=0,Pe=[],Fe=0,en=null,ot=1,ut="";function vt(e,t){In[Hn++]=Pi,In[Hn++]=lr,lr=e,Pi=t}function bd(e,t,n){Pe[Fe++]=ot,Pe[Fe++]=ut,Pe[Fe++]=en,en=e;var i=ot;e=ut;var a=32-Ue(i)-1;i&=~(1<<a),n+=1;var r=32-Ue(t)+a;if(30<r){var l=a-a%5;r=(i&(1<<l)-1).toString(32),i>>=l,a-=l,ot=1<<32-Ue(t)+a|n<<a|i,ut=r+e}else ot=1<<r|n<<a|i,ut=e}function Ws(e){e.return!==null&&(vt(e,1),bd(e,1,0))}function eo(e){for(;e===lr;)lr=In[--Hn],In[Hn]=null,Pi=In[--Hn],In[Hn]=null;for(;e===en;)en=Pe[--Fe],Pe[Fe]=null,ut=Pe[--Fe],Pe[Fe]=null,ot=Pe[--Fe],Pe[Fe]=null}function vd(e,t){Pe[Fe++]=ot,Pe[Fe++]=ut,Pe[Fe++]=en,ot=t.id,ut=t.overflow,en=e}var Se=null,ee=null,I=!1,Vt=null,We=!1,es=Error(S(519));function tn(e){var t=Error(S(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fi(Je(t,e)),es}function du(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[we]=e,t[_e]=i,n){case"dialog":L("cancel",t),L("close",t);break;case"iframe":case"object":case"embed":L("load",t);break;case"video":case"audio":for(n=0;n<ea.length;n++)L(ea[n],t);break;case"source":L("error",t);break;case"img":case"image":case"link":L("error",t),L("load",t);break;case"details":L("toggle",t);break;case"input":L("invalid",t),Pc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":L("invalid",t);break;case"textarea":L("invalid",t),Kc(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||np(t.textContent,n)?(i.popover!=null&&(L("beforetoggle",t),L("toggle",t)),i.onScroll!=null&&L("scroll",t),i.onScrollEnd!=null&&L("scrollend",t),i.onClick!=null&&(t.onclick=St),t=!0):t=!1,t||tn(e,!0)}function fu(e){for(Se=e.return;Se;)switch(Se.tag){case 5:case 31:case 13:We=!1;return;case 27:case 3:We=!0;return;default:Se=Se.return}}function $n(e){if(e!==Se)return!1;if(!I)return fu(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ns(e.type,e.memoizedProps)),n=!n),n&&ee&&tn(e),fu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));ee=Ju(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));ee=Ju(e)}else t===27?(t=ee,ln(e.type)?(e=Ds,Ds=null,ee=e):ee=t):ee=Se?tt(e.stateNode.nextSibling):null;return!0}function yn(){ee=Se=null,I=!1}function pl(){var e=Vt;return e!==null&&(Me===null?Me=e:Me.push.apply(Me,e),Vt=null),e}function Fi(e){Vt===null?Vt=[e]:Vt.push(e)}var ts=ft(null),Cn=null,At=null;function Lt(e,t,n){J(ts,t._currentValue),t._currentValue=n}function Nt(e){e._currentValue=ts.current,ve(ts)}function ns(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function is(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var l=a.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),ns(r.return,n,e),i||(l=null);break e}r=s.next}}else if(a.tag===18){if(l=a.return,l===null)throw Error(S(341));l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),ns(l,n,e),l=null}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===e){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}}function di(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var l=a.alternate;if(l===null)throw Error(S(387));if(l=l.memoizedProps,l!==null){var s=a.type;Ye(a.pendingProps.value,l.value)||(e!==null?e.push(s):e=[s])}}else if(a===Wa.current){if(l=a.alternate,l===null)throw Error(S(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(na):e=[na])}a=a.return}e!==null&&is(t,e,n,i),t.flags|=262144}function sr(e){for(e=e.firstContext;e!==null;){if(!Ye(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bn(e){Cn=e,At=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ae(e){return xd(Cn,e)}function Da(e,t){return Cn===null&&bn(e),xd(e,t)}function xd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},At===null){if(e===null)throw Error(S(308));At=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else At=At.next=t;return n}var rh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},lh=ge.unstable_scheduleCallback,sh=ge.unstable_NormalPriority,pe={$$typeof:wt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new rh,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&lh(sh,function(){e.controller.abort()})}var _i=null,as=0,ei=0,Xn=null;function oh(e,t){if(_i===null){var n=_i=[];as=0,ei=$o(),Xn={status:"pending",value:void 0,then:function(i){n.push(i)}}}return as++,t.then(pu,pu),t}function pu(){if(--as===0&&_i!==null){Xn!==null&&(Xn.status="fulfilled");var e=_i;_i=null,ei=0,Xn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function uh(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var mu=j.S;j.S=function(e,t){_f=Ie(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&oh(e,t),mu!==null&&mu(e,t)};var mn=ft(null);function no(){var e=mn.current;return e!==null?e:K.pooledCache}function Ua(e,t){t===null?J(mn,mn.current):J(mn,t.pool)}function wd(){var e=no();return e===null?null:{parent:pe._currentValue,pool:e}}var fi=Error(S(460)),io=Error(S(474)),Br=Error(S(542)),or={then:function(){}};function hu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(St,St),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yu(e),e;default:if(typeof t.status=="string")t.then(St,St);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(S(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yu(e),e}throw hn=t,fi}}function cn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(hn=n,fi):n}}var hn=null;function gu(){if(hn===null)throw Error(S(459));var e=hn;return hn=null,e}function yu(e){if(e===fi||e===Br)throw Error(S(483))}var Zn=null,Ki=0;function Oa(e){var t=Ki;return Ki+=1,Zn===null&&(Zn=[]),Sd(Zn,e,t)}function xi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function za(e,t){throw t.$$typeof===Pp?Error(S(525)):(e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ad(e){function t(h,o){if(e){var d=h.deletions;d===null?(h.deletions=[o],h.flags|=16):d.push(o)}}function n(h,o){if(!e)return null;for(;o!==null;)t(h,o),o=o.sibling;return null}function i(h){for(var o=new Map;h!==null;)h.key!==null?o.set(h.key,h):o.set(h.index,h),h=h.sibling;return o}function a(h,o){return h=Tt(h,o),h.index=0,h.sibling=null,h}function r(h,o,d){return h.index=d,e?(d=h.alternate,d!==null?(d=d.index,d<o?(h.flags|=67108866,o):d):(h.flags|=67108866,o)):(h.flags|=1048576,o)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function s(h,o,d,g){return o===null||o.tag!==6?(o=dl(d,h.mode,g),o.return=h,o):(o=a(o,d),o.return=h,o)}function u(h,o,d,g){var v=d.type;return v===jn?b(h,o,d.props.children,g,d.key):o!==null&&(o.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Rt&&cn(v)===o.type)?(o=a(o,d.props),xi(o,d),o.return=h,o):(o=Ha(d.type,d.key,d.props,null,h.mode,g),xi(o,d),o.return=h,o)}function m(h,o,d,g){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=fl(d,h.mode,g),o.return=h,o):(o=a(o,d.children||[]),o.return=h,o)}function b(h,o,d,g,v){return o===null||o.tag!==7?(o=pn(d,h.mode,g,v),o.return=h,o):(o=a(o,d),o.return=h,o)}function p(h,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=dl(""+o,h.mode,d),o.return=h,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Aa:return d=Ha(o.type,o.key,o.props,null,h.mode,d),xi(d,o),d.return=h,d;case Ci:return o=fl(o,h.mode,d),o.return=h,o;case Rt:return o=cn(o),p(h,o,d)}if($i(o)||yi(o))return o=pn(o,h.mode,d,null),o.return=h,o;if(typeof o.then=="function")return p(h,Oa(o),d);if(o.$$typeof===wt)return p(h,Da(h,o),d);za(h,o)}return null}function f(h,o,d,g){var v=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return v!==null?null:s(h,o,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Aa:return d.key===v?u(h,o,d,g):null;case Ci:return d.key===v?m(h,o,d,g):null;case Rt:return d=cn(d),f(h,o,d,g)}if($i(d)||yi(d))return v!==null?null:b(h,o,d,g,null);if(typeof d.then=="function")return f(h,o,Oa(d),g);if(d.$$typeof===wt)return f(h,o,Da(h,d),g);za(h,d)}return null}function y(h,o,d,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return h=h.get(d)||null,s(o,h,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:return h=h.get(g.key===null?d:g.key)||null,u(o,h,g,v);case Ci:return h=h.get(g.key===null?d:g.key)||null,m(o,h,g,v);case Rt:return g=cn(g),y(h,o,d,g,v)}if($i(g)||yi(g))return h=h.get(d)||null,b(o,h,g,v,null);if(typeof g.then=="function")return y(h,o,d,Oa(g),v);if(g.$$typeof===wt)return y(h,o,d,Da(o,g),v);za(o,g)}return null}function A(h,o,d,g){for(var v=null,w=null,x=o,C=o=0,N=null;x!==null&&C<d.length;C++){x.index>C?(N=x,x=null):N=x.sibling;var D=f(h,x,d[C],g);if(D===null){x===null&&(x=N);break}e&&x&&D.alternate===null&&t(h,x),o=r(D,o,C),w===null?v=D:w.sibling=D,w=D,x=N}if(C===d.length)return n(h,x),I&&vt(h,C),v;if(x===null){for(;C<d.length;C++)x=p(h,d[C],g),x!==null&&(o=r(x,o,C),w===null?v=x:w.sibling=x,w=x);return I&&vt(h,C),v}for(x=i(x);C<d.length;C++)N=y(x,h,C,d[C],g),N!==null&&(e&&N.alternate!==null&&x.delete(N.key===null?C:N.key),o=r(N,o,C),w===null?v=N:w.sibling=N,w=N);return e&&x.forEach(function(U){return t(h,U)}),I&&vt(h,C),v}function T(h,o,d,g){if(d==null)throw Error(S(151));for(var v=null,w=null,x=o,C=o=0,N=null,D=d.next();x!==null&&!D.done;C++,D=d.next()){x.index>C?(N=x,x=null):N=x.sibling;var U=f(h,x,D.value,g);if(U===null){x===null&&(x=N);break}e&&x&&U.alternate===null&&t(h,x),o=r(U,o,C),w===null?v=U:w.sibling=U,w=U,x=N}if(D.done)return n(h,x),I&&vt(h,C),v;if(x===null){for(;!D.done;C++,D=d.next())D=p(h,D.value,g),D!==null&&(o=r(D,o,C),w===null?v=D:w.sibling=D,w=D);return I&&vt(h,C),v}for(x=i(x);!D.done;C++,D=d.next())D=y(x,h,C,D.value,g),D!==null&&(e&&D.alternate!==null&&x.delete(D.key===null?C:D.key),o=r(D,o,C),w===null?v=D:w.sibling=D,w=D);return e&&x.forEach(function(le){return t(h,le)}),I&&vt(h,C),v}function $(h,o,d,g){if(typeof d=="object"&&d!==null&&d.type===jn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Aa:e:{for(var v=d.key;o!==null;){if(o.key===v){if(v=d.type,v===jn){if(o.tag===7){n(h,o.sibling),g=a(o,d.props.children),g.return=h,h=g;break e}}else if(o.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Rt&&cn(v)===o.type){n(h,o.sibling),g=a(o,d.props),xi(g,d),g.return=h,h=g;break e}n(h,o);break}else t(h,o);o=o.sibling}d.type===jn?(g=pn(d.props.children,h.mode,g,d.key),g.return=h,h=g):(g=Ha(d.type,d.key,d.props,null,h.mode,g),xi(g,d),g.return=h,h=g)}return l(h);case Ci:e:{for(v=d.key;o!==null;){if(o.key===v)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){n(h,o.sibling),g=a(o,d.children||[]),g.return=h,h=g;break e}else{n(h,o);break}else t(h,o);o=o.sibling}g=fl(d,h.mode,g),g.return=h,h=g}return l(h);case Rt:return d=cn(d),$(h,o,d,g)}if($i(d))return A(h,o,d,g);if(yi(d)){if(v=yi(d),typeof v!="function")throw Error(S(150));return d=v.call(d),T(h,o,d,g)}if(typeof d.then=="function")return $(h,o,Oa(d),g);if(d.$$typeof===wt)return $(h,o,Da(h,d),g);za(h,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(n(h,o.sibling),g=a(o,d),g.return=h,h=g):(n(h,o),g=dl(d,h.mode,g),g.return=h,h=g),l(h)):n(h,o)}return function(h,o,d,g){try{Ki=0;var v=$(h,o,d,g);return Zn=null,v}catch(x){if(x===fi||x===Br)throw x;var w=Qe(29,x,null,h.mode);return w.lanes=g,w.return=h,w}finally{}}}var vn=Ad(!0),Td=Ad(!1),_t=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,G&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=rr(e),hd(e,null,n),t}return qr(e,i,t,n),rr(e)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Hc(e,n)}}function ml(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=l:r=r.next=l,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ls=!1;function qi(){if(ls){var e=Xn;if(e!==null)throw e}}function Bi(e,t,n,i){ls=!1;var a=e.updateQueue;_t=!1;var r=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,m=u.next;u.next=null,l===null?r=m:l.next=m,l=u;var b=e.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==l&&(s===null?b.firstBaseUpdate=m:s.next=m,b.lastBaseUpdate=u))}if(r!==null){var p=a.baseState;l=0,b=m=u=null,s=r;do{var f=s.lane&-536870913,y=f!==s.lane;if(y?(B&f)===f:(i&f)===f){f!==0&&f===ei&&(ls=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var A=e,T=s;f=t;var $=n;switch(T.tag){case 1:if(A=T.payload,typeof A=="function"){p=A.call($,p,f);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=T.payload,f=typeof A=="function"?A.call($,p,f):A,f==null)break e;p=ne({},p,f);break e;case 2:_t=!0}}f=s.callback,f!==null&&(e.flags|=64,y&&(e.flags|=8192),y=a.callbacks,y===null?a.callbacks=[f]:y.push(f))}else y={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(m=b=y,u=p):b=b.next=y,l|=f;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;y=s,s=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);b===null&&(u=p),a.baseState=u,a.firstBaseUpdate=m,a.lastBaseUpdate=b,r===null&&(a.shared.lanes=0),an|=l,e.lanes=l,e.memoizedState=p}}function Nd(e,t){if(typeof e!="function")throw Error(S(191,e));e.call(t)}function Cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Nd(n[e],t)}var ti=ft(null),ur=ft(0);function bu(e,t){e=zt,J(ur,e),J(ti,t),zt=e|t.baseLanes}function ss(){J(ur,zt),J(ti,ti.current)}function ro(){zt=ur.current,ve(ti),ve(ur)}var Ve=ft(null),et=null;function qt(e){var t=e.alternate;J(oe,oe.current&1),J(Ve,e),et===null&&(t===null||ti.current!==null||t.memoizedState!==null)&&(et=e)}function os(e){J(oe,oe.current),J(Ve,e),et===null&&(et=e)}function $d(e){e.tag===22?(J(oe,oe.current),J(Ve,e),et===null&&(et=e)):Bt()}function Bt(){J(oe,oe.current),J(Ve,Ve.current)}function Be(e){ve(Ve),et===e&&(et=null),ve(oe)}var oe=ft(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||$s(n)||Es(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Et=0,_=null,P=null,de=null,dr=!1,Pn=!1,xn=!1,fr=0,Ji=0,Fn=null,ch=0;function ae(){throw Error(S(321))}function lo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function so(e,t,n,i,a,r){return Et=r,_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?rf:vo,xn=!1,r=n(i,a),xn=!1,Pn&&(r=Dd(t,n,i,a)),Ed(e),r}function Ed(e){j.H=Wi;var t=P!==null&&P.next!==null;if(Et=0,de=P=_=null,dr=!1,Ji=0,Fn=null,t)throw Error(S(300));e===null||me||(e=e.dependencies,e!==null&&sr(e)&&(me=!0))}function Dd(e,t,n,i){_=e;var a=0;do{if(Pn&&(Fn=null),Ji=0,Pn=!1,25<=a)throw Error(S(301));if(a+=1,de=P=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}j.H=lf,r=t(n,i)}while(Pn);return r}function dh(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?pa(t):t,e=e.useState()[0],(P!==null?P.memoizedState:null)!==e&&(_.flags|=1024),t}function oo(){var e=fr!==0;return fr=0,e}function uo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function co(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}Et=0,de=P=_=null,Pn=!1,Ji=fr=0,Fn=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?_.memoizedState=de=e:de=de.next=e,de}function ue(){if(P===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=P.next;var t=de===null?_.memoizedState:de.next;if(t!==null)de=t,P=e;else{if(e===null)throw _.alternate===null?Error(S(467)):Error(S(310));P=e,e={memoizedState:P.memoizedState,baseState:P.baseState,baseQueue:P.baseQueue,queue:P.queue,next:null},de===null?_.memoizedState=de=e:de=de.next=e}return de}function Qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pa(e){var t=Ji;return Ji+=1,Fn===null&&(Fn=[]),e=Sd(Fn,e,t),t=_,(de===null?t.memoizedState:de.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?rf:vo),e}function kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pa(e);if(e.$$typeof===wt)return Ae(e)}throw Error(S(438,String(e)))}function fo(e){var t=null,n=_.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=_.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qr(),_.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Fp;return t.index++,n}function Dt(e,t){return typeof t=="function"?t(e):t}function Ga(e){var t=ue();return po(t,P,e)}function po(e,t,n){var i=e.queue;if(i===null)throw Error(S(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var l=a.next;a.next=r.next,r.next=l}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var s=l=null,u=null,m=t,b=!1;do{var p=m.lane&-536870913;if(p!==m.lane?(B&p)===p:(Et&p)===p){var f=m.revertLane;if(f===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),p===ei&&(b=!0);else if((Et&f)===f){m=m.next,f===ei&&(b=!0);continue}else p={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=p,l=r):u=u.next=p,_.lanes|=f,an|=f;p=m.action,xn&&n(r,p),r=m.hasEagerState?m.eagerState:n(r,p)}else f={lane:p,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=f,l=r):u=u.next=f,_.lanes|=p,an|=p;m=m.next}while(m!==null&&m!==t);if(u===null?l=r:u.next=s,!Ye(r,e.memoizedState)&&(me=!0,b&&(n=Xn,n!==null)))throw n;e.memoizedState=r,e.baseState=l,e.baseQueue=u,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function hl(e){var t=ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do r=e(r,l.action),l=l.next;while(l!==a);Ye(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Od(e,t,n){var i=_,a=ue(),r=I;if(r){if(n===void 0)throw Error(S(407));n=n()}else n=t();var l=!Ye((P||a).memoizedState,n);if(l&&(a.memoizedState=n,me=!0),a=a.queue,mo(Md.bind(null,i,a,e),[e]),a.getSnapshot!==t||l||de!==null&&de.memoizedState.tag&1){if(i.flags|=2048,ni(9,{destroy:void 0},jd.bind(null,i,a,n,t),null),K===null)throw Error(S(349));r||Et&127||zd(i,t,n)}return n}function zd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_.updateQueue,t===null?(t=Qr(),_.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jd(e,t,n,i){t.value=n,t.getSnapshot=i,Rd(t)&&_d(e)}function Md(e,t,n){return n(function(){Rd(t)&&_d(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function _d(e){var t=Nn(e,2);t!==null&&Re(t,e,2)}function us(e){var t=$e();if(typeof e=="function"){var n=e;if(e=n(),xn){kt(!0);try{n()}finally{kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:e},t}function Ld(e,t,n,i){return e.baseState=n,po(e,P,typeof i=="function"?i:Dt)}function fh(e,t,n,i,a){if(Hr(e))throw Error(S(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};j.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,qd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function qd(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=j.T,l={};j.T=l;try{var s=n(a,i),u=j.S;u!==null&&u(l,s),vu(e,t,s)}catch(m){cs(e,t,m)}finally{r!==null&&l.types!==null&&(r.types=l.types),j.T=r}}else try{r=n(a,i),vu(e,t,r)}catch(m){cs(e,t,m)}}function vu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){xu(e,t,i)},function(i){return cs(e,t,i)}):xu(e,t,n)}function xu(e,t,n){t.status="fulfilled",t.value=n,Bd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qd(e,n)))}function cs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Bd(t),t=t.next;while(t!==i)}e.action=null}function Bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function wu(e,t){if(I){var n=K.formState;if(n!==null){e:{var i=_;if(I){if(ee){t:{for(var a=ee,r=We;a.nodeType!==8;){if(!r){a=null;break t}if(a=tt(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){ee=tt(a.nextSibling),i=a.data==="F!";break e}}tn(i)}i=!1}i&&(t=n[0])}}return n=$e(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=i,n=tf.bind(null,_,i),i.dispatch=n,i=us(!1),r=bo.bind(null,_,!1,i.queue),i=$e(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=fh.bind(null,_,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Su(e){var t=ue();return kd(t,P,e)}function kd(e,t,n){if(t=po(e,t,Qd)[0],e=Ga(Dt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=pa(t)}catch(l){throw l===fi?Br:l}else i=t;t=ue();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(_.flags|=2048,ni(9,{destroy:void 0},ph.bind(null,a,n),null)),[i,r,e]}function ph(e,t){e.action=t}function Au(e){var t=ue(),n=P;if(n!==null)return kd(t,n,e);ue(),t=t.memoizedState,n=ue();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ni(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=_.updateQueue,t===null&&(t=Qr(),_.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Id(){return ue().memoizedState}function Ya(e,t,n,i){var a=$e();_.flags|=e,a.memoizedState=ni(1|t,{destroy:void 0},n,i===void 0?null:i)}function Ir(e,t,n,i){var a=ue();i=i===void 0?null:i;var r=a.memoizedState.inst;P!==null&&i!==null&&lo(i,P.memoizedState.deps)?a.memoizedState=ni(t,r,n,i):(_.flags|=e,a.memoizedState=ni(1|t,r,n,i))}function Tu(e,t){Ya(8390656,8,e,t)}function mo(e,t){Ir(2048,8,e,t)}function mh(e){_.flags|=4;var t=_.updateQueue;if(t===null)t=Qr(),_.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hd(e){var t=ue().memoizedState;return mh({ref:t,nextImpl:e}),function(){if(G&2)throw Error(S(440));return t.impl.apply(void 0,arguments)}}function Ud(e,t){return Ir(4,2,e,t)}function Gd(e,t){return Ir(4,4,e,t)}function Yd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vd(e,t,n){n=n!=null?n.concat([e]):null,Ir(4,4,Yd.bind(null,t,e),n)}function ho(){}function Xd(e,t){var n=ue();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&lo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=ue();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&lo(t,i[1]))return i[0];if(i=e(),xn){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[i,t],i}function go(e,t,n){return n===void 0||Et&1073741824&&!(B&261930)?e.memoizedState=t:(e.memoizedState=n,e=qf(),_.lanes|=e,an|=e,n)}function Pd(e,t,n,i){return Ye(n,t)?n:ti.current!==null?(e=go(e,n,i),Ye(e,t)||(me=!0),e):!(Et&42)||Et&1073741824&&!(B&261930)?(me=!0,e.memoizedState=n):(e=qf(),_.lanes|=e,an|=e,t)}function Fd(e,t,n,i,a){var r=Y.p;Y.p=r!==0&&8>r?r:8;var l=j.T,s={};j.T=s,bo(e,!1,t,n);try{var u=a(),m=j.S;if(m!==null&&m(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var b=uh(u,i);Qi(e,t,b,Ge(e))}else Qi(e,t,i,Ge(e))}catch(p){Qi(e,t,{then:function(){},status:"rejected",reason:p},Ge())}finally{Y.p=r,l!==null&&s.types!==null&&(l.types=s.types),j.T=l}}function hh(){}function ds(e,t,n,i){if(e.tag!==5)throw Error(S(476));var a=Kd(e).queue;Fd(e,a,t,fn,n===null?hh:function(){return Jd(e),n(i)})}function Kd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fn,baseState:fn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:fn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jd(e){var t=Kd(e);t.next===null&&(t=e.alternate.memoizedState),Qi(e,t.next.queue,{},Ge())}function yo(){return Ae(na)}function Wd(){return ue().memoizedState}function ef(){return ue().memoizedState}function gh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ge();e=Xt(n);var i=Zt(t,e,n);i!==null&&(Re(i,t,n),Li(i,t,n)),t={cache:to()},e.payload=t;return}t=t.return}}function yh(e,t,n){var i=Ge();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hr(e)?nf(t,n):(n=Ks(e,t,n,i),n!==null&&(Re(n,e,i),af(n,t,i)))}function tf(e,t,n){var i=Ge();Qi(e,t,n,i)}function Qi(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hr(e))nf(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,s=r(l,n);if(a.hasEagerState=!0,a.eagerState=s,Ye(s,l))return qr(e,t,a,0),K===null&&Lr(),!1}catch{}finally{}if(n=Ks(e,t,a,i),n!==null)return Re(n,e,i),af(n,t,i),!0}return!1}function bo(e,t,n,i){if(i={lane:2,revertLane:$o(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Hr(e)){if(t)throw Error(S(479))}else t=Ks(e,n,i,2),t!==null&&Re(t,e,2)}function Hr(e){var t=e.alternate;return e===_||t!==null&&t===_}function nf(e,t){Pn=dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function af(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Hc(e,n)}}var Wi={readContext:Ae,use:kr,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useLayoutEffect:ae,useInsertionEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useSyncExternalStore:ae,useId:ae,useHostTransitionStatus:ae,useFormState:ae,useActionState:ae,useOptimistic:ae,useMemoCache:ae,useCacheRefresh:ae};Wi.useEffectEvent=ae;var rf={readContext:Ae,use:kr,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Tu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ya(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){Ya(4,2,e,t)},useMemo:function(e,t){var n=$e();t=t===void 0?null:t;var i=e();if(xn){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=$e();if(n!==void 0){var a=n(t);if(xn){kt(!0);try{n(t)}finally{kt(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=yh.bind(null,_,e),[i.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=us(e);var t=e.queue,n=tf.bind(null,_,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ho,useDeferredValue:function(e,t){var n=$e();return go(n,e,t)},useTransition:function(){var e=us(!1);return e=Fd.bind(null,_,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=_,a=$e();if(I){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),K===null)throw Error(S(349));B&127||zd(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Tu(Md.bind(null,i,r,e),[e]),i.flags|=2048,ni(9,{destroy:void 0},jd.bind(null,i,r,n,t),null),n},useId:function(){var e=$e(),t=K.identifierPrefix;if(I){var n=ut,i=ot;n=(i&~(1<<32-Ue(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ch++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yo,useFormState:wu,useActionState:wu,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bo.bind(null,_,!0,n),n.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return $e().memoizedState=gh.bind(null,_)},useEffectEvent:function(e){var t=$e(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(S(440));return n.impl.apply(void 0,arguments)}}},vo={readContext:Ae,use:kr,useCallback:Xd,useContext:Ae,useEffect:mo,useImperativeHandle:Vd,useInsertionEffect:Ud,useLayoutEffect:Gd,useMemo:Zd,useReducer:Ga,useRef:Id,useState:function(){return Ga(Dt)},useDebugValue:ho,useDeferredValue:function(e,t){var n=ue();return Pd(n,P.memoizedState,e,t)},useTransition:function(){var e=Ga(Dt)[0],t=ue().memoizedState;return[typeof e=="boolean"?e:pa(e),t]},useSyncExternalStore:Od,useId:Wd,useHostTransitionStatus:yo,useFormState:Su,useActionState:Su,useOptimistic:function(e,t){var n=ue();return Ld(n,P,e,t)},useMemoCache:fo,useCacheRefresh:ef};vo.useEffectEvent=Hd;var lf={readContext:Ae,use:kr,useCallback:Xd,useContext:Ae,useEffect:mo,useImperativeHandle:Vd,useInsertionEffect:Ud,useLayoutEffect:Gd,useMemo:Zd,useReducer:hl,useRef:Id,useState:function(){return hl(Dt)},useDebugValue:ho,useDeferredValue:function(e,t){var n=ue();return P===null?go(n,e,t):Pd(n,P.memoizedState,e,t)},useTransition:function(){var e=hl(Dt)[0],t=ue().memoizedState;return[typeof e=="boolean"?e:pa(e),t]},useSyncExternalStore:Od,useId:Wd,useHostTransitionStatus:yo,useFormState:Au,useActionState:Au,useOptimistic:function(e,t){var n=ue();return P!==null?Ld(n,P,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fo,useCacheRefresh:ef};lf.useEffectEvent=Hd;function gl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ge(),a=Xt(i);a.payload=t,n!=null&&(a.callback=n),t=Zt(e,a,i),t!==null&&(Re(t,e,i),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ge(),a=Xt(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Zt(e,a,i),t!==null&&(Re(t,e,i),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),i=Xt(n);i.tag=2,t!=null&&(i.callback=t),t=Zt(e,i,n),t!==null&&(Re(t,e,n),Li(t,e,n))}};function Nu(e,t,n,i,a,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,l):t.prototype&&t.prototype.isPureReactComponent?!Zi(n,i)||!Zi(a,r):!0}function Cu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function wn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ne({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function sf(e){ar(e)}function of(e){console.error(e)}function uf(e){ar(e)}function pr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function $u(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ps(e,t,n){return n=Xt(n),n.tag=3,n.payload={element:null},n.callback=function(){pr(e,t)},n}function cf(e){return e=Xt(e),e.tag=3,e}function df(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){$u(t,n,i)}}var l=n.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){$u(t,n,i),typeof a!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function bh(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&di(t,n,a,!0),n=Ve.current,n!==null){switch(n.tag){case 31:case 13:return et===null?br():n.alternate===null&&re===0&&(re=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===or?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),$l(e,i,a)),!1;case 22:return n.flags|=65536,i===or?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),$l(e,i,a)),!1}throw Error(S(435,n.tag))}return $l(e,i,a),br(),!1}if(I)return t=Ve.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==es&&(e=Error(S(422),{cause:i}),Fi(Je(e,n)))):(i!==es&&(t=Error(S(423),{cause:i}),Fi(Je(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Je(i,n),a=ps(e.stateNode,i,a),ml(e,a),re!==4&&(re=2)),!1;var r=Error(S(520),{cause:i});if(r=Je(r,n),Hi===null?Hi=[r]:Hi.push(r),re!==4&&(re=2),t===null)return!0;i=Je(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ps(n.stateNode,i,e),ml(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=cf(a),df(a,e,n,i),ml(n,a),!1}n=n.return}while(n!==null);return!1}var xo=Error(S(461)),me=!1;function xe(e,t,n,i){t.child=e===null?Td(t,null,n,i):vn(t,e.child,n,i)}function Eu(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var l={};for(var s in i)s!=="ref"&&(l[s]=i[s])}else l=i;return bn(t),i=so(e,t,n,l,r,a),s=oo(),e!==null&&!me?(uo(e,t,a),Ot(e,t,a)):(I&&s&&Ws(t),t.flags|=1,xe(e,t,i,a),t.child)}function Du(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!Js(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,ff(e,t,r,i,a)):(e=Ha(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!wo(e,a)){var l=r.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(l,i)&&e.ref===t.ref)return Ot(e,t,a)}return t.flags|=1,e=Tt(r,i),e.ref=t.ref,e.return=t,t.child=e}function ff(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(Zi(r,i)&&e.ref===t.ref)if(me=!1,t.pendingProps=i=r,wo(e,a))e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ot(e,t,a)}return ms(e,t,n,i,a)}function pf(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return Ou(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ua(t,r!==null?r.cachePool:null),r!==null?bu(t,r):ss(),$d(t);else return i=t.lanes=536870912,Ou(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Ua(t,r.cachePool),bu(t,r),Bt(),t.memoizedState=null):(e!==null&&Ua(t,null),ss(),Bt());return xe(e,t,a,n),t.child}function Di(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ou(e,t,n,i,a){var r=no();return r=r===null?null:{parent:pe._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Ua(t,null),ss(),$d(t),e!==null&&di(e,t,i,!0),t.childLanes=a,null}function Va(e,t){return t=mr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zu(e,t,n){return vn(t,e.child,null,n),e=Va(t,t.pendingProps),e.flags|=2,Be(t),t.memoizedState=null,e}function vh(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(I){if(i.mode==="hidden")return e=Va(t,i),t.lanes=536870912,Di(null,e);if(os(t),(e=ee)?(e=rp(e,We),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:ot,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},n=yd(e),n.return=t,t.child=n,Se=t,ee=null)):e=null,e===null)throw tn(t);return t.lanes=536870912,null}return Va(t,i)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(os(t),a)if(t.flags&256)t.flags&=-257,t=zu(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(S(558));else if(me||di(e,t,n,!1),a=(n&e.childLanes)!==0,me||a){if(i=K,i!==null&&(l=Uc(i,n),l!==0&&l!==r.retryLane))throw r.retryLane=l,Nn(e,l),Re(i,e,l),xo;br(),t=zu(e,t,n)}else e=r.treeContext,ee=tt(l.nextSibling),Se=t,I=!0,Vt=null,We=!1,e!==null&&vd(t,e),t=Va(t,i),t.flags|=4096;return t}return e=Tt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xa(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(S(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ms(e,t,n,i,a){return bn(t),n=so(e,t,n,i,void 0,a),i=oo(),e!==null&&!me?(uo(e,t,a),Ot(e,t,a)):(I&&i&&Ws(t),t.flags|=1,xe(e,t,n,a),t.child)}function ju(e,t,n,i,a,r){return bn(t),t.updateQueue=null,n=Dd(t,i,n,a),Ed(e),i=oo(),e!==null&&!me?(uo(e,t,r),Ot(e,t,r)):(I&&i&&Ws(t),t.flags|=1,xe(e,t,n,r),t.child)}function Mu(e,t,n,i,a){if(bn(t),t.stateNode===null){var r=kn,l=n.contextType;typeof l=="object"&&l!==null&&(r=Ae(l)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},ao(t),l=n.contextType,r.context=typeof l=="object"&&l!==null?Ae(l):kn,r.state=t.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(gl(t,n,l,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&fs.enqueueReplaceState(r,r.state,null),Bi(t,i,r,a),qi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,u=wn(n,s);r.props=u;var m=r.context,b=n.contextType;l=kn,typeof b=="object"&&b!==null&&(l=Ae(b));var p=n.getDerivedStateFromProps;b=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,b||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||m!==l)&&Cu(t,r,i,l),_t=!1;var f=t.memoizedState;r.state=f,Bi(t,i,r,a),qi(),m=t.memoizedState,s||f!==m||_t?(typeof p=="function"&&(gl(t,n,p,i),m=t.memoizedState),(u=_t||Nu(t,n,u,i,f,m,l))?(b||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=m),r.props=i,r.state=m,r.context=l,i=u):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,rs(e,t),l=t.memoizedProps,b=wn(n,l),r.props=b,p=t.pendingProps,f=r.context,m=n.contextType,u=kn,typeof m=="object"&&m!==null&&(u=Ae(m)),s=n.getDerivedStateFromProps,(m=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==p||f!==u)&&Cu(t,r,i,u),_t=!1,f=t.memoizedState,r.state=f,Bi(t,i,r,a),qi();var y=t.memoizedState;l!==p||f!==y||_t||e!==null&&e.dependencies!==null&&sr(e.dependencies)?(typeof s=="function"&&(gl(t,n,s,i),y=t.memoizedState),(b=_t||Nu(t,n,b,i,f,y,u)||e!==null&&e.dependencies!==null&&sr(e.dependencies))?(m||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,y,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,y,u)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),r.props=i,r.state=y,r.context=u,i=b):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Xa(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=vn(t,e.child,null,a),t.child=vn(t,null,n,a)):xe(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Ot(e,t,a),e}function Ru(e,t,n,i){return yn(),t.flags|=256,xe(e,t,n,i),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bl(e){return{baseLanes:e,cachePool:wd()}}function vl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ke),e}function mf(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(oe.current&2)!==0),l&&(a=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(I){if(a?qt(t):Bt(),(e=ee)?(e=rp(e,We),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:ot,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},n=yd(e),n.return=t,t.child=n,Se=t,ee=null)):e=null,e===null)throw tn(t);return Es(e)?t.lanes=32:t.lanes=536870912,null}var s=i.children;return i=i.fallback,a?(Bt(),a=t.mode,s=mr({mode:"hidden",children:s},a),i=pn(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=bl(n),i.childLanes=vl(e,l,n),t.memoizedState=yl,Di(null,i)):(qt(t),hs(t,s))}var u=e.memoizedState;if(u!==null&&(s=u.dehydrated,s!==null)){if(r)t.flags&256?(qt(t),t.flags&=-257,t=xl(e,t,n)):t.memoizedState!==null?(Bt(),t.child=e.child,t.flags|=128,t=null):(Bt(),s=i.fallback,a=t.mode,i=mr({mode:"visible",children:i.children},a),s=pn(s,a,n,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,vn(t,e.child,null,n),i=t.child,i.memoizedState=bl(n),i.childLanes=vl(e,l,n),t.memoizedState=yl,t=Di(null,i));else if(qt(t),Es(s)){if(l=s.nextSibling&&s.nextSibling.dataset,l)var m=l.dgst;l=m,i=Error(S(419)),i.stack="",i.digest=l,Fi({value:i,source:null,stack:null}),t=xl(e,t,n)}else if(me||di(e,t,n,!1),l=(n&e.childLanes)!==0,me||l){if(l=K,l!==null&&(i=Uc(l,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,Nn(e,i),Re(l,e,i),xo;$s(s)||br(),t=xl(e,t,n)}else $s(s)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,ee=tt(s.nextSibling),Se=t,I=!0,Vt=null,We=!1,e!==null&&vd(t,e),t=hs(t,i.children),t.flags|=4096);return t}return a?(Bt(),s=i.fallback,a=t.mode,u=e.child,m=u.sibling,i=Tt(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,m!==null?s=Tt(m,s):(s=pn(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Di(null,i),i=t.child,s=e.child.memoizedState,s===null?s=bl(n):(a=s.cachePool,a!==null?(u=pe._currentValue,a=a.parent!==u?{parent:u,pool:u}:a):a=wd(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=vl(e,l,n),t.memoizedState=yl,Di(e.child,i)):(qt(t),n=e.child,e=n.sibling,n=Tt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=n,t.memoizedState=null,n)}function hs(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=Qe(22,e,null,t),e.lanes=0,e}function xl(e,t,n){return vn(t,e.child,null,n),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _u(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ns(e.return,t,n)}function wl(e,t,n,i,a,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=a,l.treeForkCount=r)}function hf(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var l=oe.current,s=(l&2)!==0;if(s?(l=l&1|2,t.flags|=128):l&=1,J(oe,l),xe(e,t,i,n),i=I?Pi:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_u(e,n,t);else if(e.tag===19)_u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&cr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),wl(t,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&cr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}wl(t,!0,n,null,r,i);break;case"together":wl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))if(e!==null){if(di(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wo(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&sr(e)))}function xh(e,t,n){switch(t.tag){case 3:er(t,t.stateNode.containerInfo),Lt(t,pe,e.memoizedState.cache),yn();break;case 27:case 5:Ul(t);break;case 4:er(t,t.stateNode.containerInfo);break;case 10:Lt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,os(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(qt(t),t.flags|=128,null):n&t.child.childLanes?mf(e,t,n):(qt(t),e=Ot(e,t,n),e!==null?e.sibling:null);qt(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(di(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return hf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(oe,oe.current),i)break;return null;case 22:return t.lanes=0,pf(e,t,n,t.pendingProps);case 24:Lt(t,pe,e.memoizedState.cache)}return Ot(e,t,n)}function gf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)me=!0;else{if(!wo(e,n)&&!(t.flags&128))return me=!1,xh(e,t,n);me=!!(e.flags&131072)}else me=!1,I&&t.flags&1048576&&bd(t,Pi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=cn(t.elementType),t.type=e,typeof e=="function")Js(e)?(i=wn(e,i),t.tag=1,t=Mu(null,t,e,i,n)):(t.tag=0,t=ms(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Bs){t.tag=11,t=Eu(null,t,e,i,n);break e}else if(a===Qs){t.tag=14,t=Du(null,t,e,i,n);break e}}throw t=Il(e)||e,Error(S(306,t,""))}}return t;case 0:return ms(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=wn(i,t.pendingProps),Mu(e,t,i,a,n);case 3:e:{if(er(t,t.stateNode.containerInfo),e===null)throw Error(S(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,rs(e,t),Bi(t,i,null,n);var l=t.memoizedState;if(i=l.cache,Lt(t,pe,i),i!==r.cache&&is(t,[pe],n,!0),qi(),i=l.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ru(e,t,i,n);break e}else if(i!==a){a=Je(Error(S(424)),t),Fi(a),t=Ru(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ee=tt(e.firstChild),Se=t,I=!0,Vt=null,We=!0,n=Td(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(yn(),i===a){t=Ot(e,t,n);break e}xe(e,t,i,n)}t=t.child}return t;case 26:return Xa(e,t),e===null?(n=tc(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,i=Sr(Yt.current).createElement(n),i[we]=t,i[_e]=e,Te(i,n,e),be(i),t.stateNode=i):t.memoizedState=tc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ul(t),e===null&&I&&(i=t.stateNode=lp(t.type,t.pendingProps,Yt.current),Se=t,We=!0,a=ee,ln(t.type)?(Ds=a,ee=tt(i.firstChild)):ee=a),xe(e,t,t.pendingProps.children,n),Xa(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=i=ee)&&(i=Fh(i,t.type,t.pendingProps,We),i!==null?(t.stateNode=i,Se=t,ee=tt(i.firstChild),We=!1,a=!0):a=!1),a||tn(t)),Ul(t),a=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,Ns(a,r)?i=null:l!==null&&Ns(a,l)&&(t.flags|=32),t.memoizedState!==null&&(a=so(e,t,dh,null,null,n),na._currentValue=a),Xa(e,t),xe(e,t,i,n),t.child;case 6:return e===null&&I&&((e=n=ee)&&(n=Kh(n,t.pendingProps,We),n!==null?(t.stateNode=n,Se=t,ee=null,e=!0):e=!1),e||tn(t)),null;case 13:return mf(e,t,n);case 4:return er(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=vn(t,null,i,n):xe(e,t,i,n),t.child;case 11:return Eu(e,t,t.type,t.pendingProps,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Lt(t,t.type,i.value),xe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,bn(t),a=Ae(a),i=i(a),t.flags|=1,xe(e,t,i,n),t.child;case 14:return Du(e,t,t.type,t.pendingProps,n);case 15:return ff(e,t,t.type,t.pendingProps,n);case 19:return hf(e,t,n);case 31:return vh(e,t,n);case 22:return pf(e,t,n,t.pendingProps);case 24:return bn(t),i=Ae(pe),e===null?(a=no(),a===null&&(a=K,r=to(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},ao(t),Lt(t,pe,a)):(e.lanes&n&&(rs(e,t),Bi(t,null,null,n),qi()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Lt(t,pe,i)):(i=r.cache,Lt(t,pe,i),i!==a.cache&&is(t,[pe],n,!0))),xe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(S(156,t.tag))}function ht(e){e.flags|=4}function Sl(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(kf())e.flags|=8192;else throw hn=or,io}else e.flags&=-16777217}function Lu(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!up(t))if(kf())e.flags|=8192;else throw hn=or,io}function ja(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?kc():536870912,e.lanes|=t,ii|=t)}function wi(e,t){if(!I)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function wh(e,t,n){var i=t.pendingProps;switch(eo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Nt(pe),Kn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($n(t)?ht(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pl())),W(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(ht(t),r!==null?(W(t),Lu(t,r)):(W(t),Sl(t,a,null,i,n))):r?r!==e.memoizedState?(ht(t),W(t),Lu(t,r)):(W(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ht(t),W(t),Sl(t,a,e,i,n)),null;case 27:if(tr(t),n=Yt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ht(t);else{if(!i){if(t.stateNode===null)throw Error(S(166));return W(t),null}e=dt.current,$n(t)?du(t):(e=lp(a,i,n),t.stateNode=e,ht(t))}return W(t),null;case 5:if(tr(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ht(t);else{if(!i){if(t.stateNode===null)throw Error(S(166));return W(t),null}if(r=dt.current,$n(t))du(t);else{var l=Sr(Yt.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?l.createElement(a,{is:i.is}):l.createElement(a)}}r[we]=t,r[_e]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Te(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ht(t)}}return W(t),Sl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ht(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(S(166));if(e=Yt.current,$n(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Se,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[we]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||np(e.nodeValue,n)),e||tn(t,!0)}else e=Sr(e).createTextNode(i),e[we]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=$n(t),n!==null){if(e===null){if(!i)throw Error(S(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(557));e[we]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=pl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Be(t),t):(Be(t),null);if(t.flags&128)throw Error(S(558))}return W(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=$n(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[we]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=pl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Be(t),t):(Be(t),null)}return Be(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ja(t,t.updateQueue),W(t),null);case 4:return Kn(),e===null&&Eo(t.stateNode.containerInfo),W(t),null;case 10:return Nt(t.type),W(t),null;case 19:if(ve(oe),i=t.memoizedState,i===null)return W(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)wi(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=cr(e),r!==null){for(t.flags|=128,wi(i,!1),e=r.updateQueue,t.updateQueue=e,ja(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gd(n,e),n=n.sibling;return J(oe,oe.current&1|2),I&&vt(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ie()>gr&&(t.flags|=128,a=!0,wi(i,!1),t.lanes=4194304)}else{if(!a)if(e=cr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ja(t,e),wi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!I)return W(t),null}else 2*Ie()-i.renderingStartTime>gr&&n!==536870912&&(t.flags|=128,a=!0,wi(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ie(),e.sibling=null,n=oe.current,J(oe,a?n&1|2:n&1),I&&vt(t,i.treeForkCount),e):(W(t),null);case 22:case 23:return Be(t),ro(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&ja(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ve(mn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Nt(pe),W(t),null;case 25:return null;case 30:return null}throw Error(S(156,t.tag))}function Sh(e,t){switch(eo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nt(pe),Kn(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return tr(t),null;case 31:if(t.memoizedState!==null){if(Be(t),t.alternate===null)throw Error(S(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Be(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(oe),null;case 4:return Kn(),null;case 10:return Nt(t.type),null;case 22:case 23:return Be(t),ro(),e!==null&&ve(mn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Nt(pe),null;case 25:return null;default:return null}}function yf(e,t){switch(eo(t),t.tag){case 3:Nt(pe),Kn();break;case 26:case 27:case 5:tr(t);break;case 4:Kn();break;case 31:t.memoizedState!==null&&Be(t);break;case 13:Be(t);break;case 19:ve(oe);break;case 10:Nt(t.type);break;case 22:case 23:Be(t),ro(),e!==null&&ve(mn);break;case 24:Nt(pe)}}function ma(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,l=n.inst;i=r(),l.destroy=i}n=n.next}while(n!==a)}}catch(s){X(t,t.return,s)}}function nn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var l=i.inst,s=l.destroy;if(s!==void 0){l.destroy=void 0,a=t;var u=n,m=s;try{m()}catch(b){X(a,u,b)}}}i=i.next}while(i!==r)}}catch(b){X(t,t.return,b)}}function bf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cd(t,n)}catch(i){X(e,e.return,i)}}}function vf(e,t,n){n.props=wn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){X(e,t,i)}}function ki(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){X(e,t,a)}}function ct(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){X(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){X(e,t,a)}else n.current=null}function xf(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){X(e,e.return,a)}}function Al(e,t,n){try{var i=e.stateNode;Gh(i,e.type,n,t),i[_e]=t}catch(a){X(e,e.return,a)}}function wf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ln(e.type)||e.tag===4}function Tl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ln(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=St));else if(i!==4&&(i===27&&ln(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function hr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ln(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hr(e,t,n),e=e.sibling;e!==null;)hr(e,t,n),e=e.sibling}function Sf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Te(t,i,n),t[we]=e,t[_e]=n}catch(r){X(e,e.return,r)}}var xt=!1,fe=!1,Nl=!1,qu=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Ah(e,t){if(e=e.containerInfo,As=Cr,e=od(e),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,m=0,b=0,p=e,f=null;t:for(;;){for(var y;p!==n||a!==0&&p.nodeType!==3||(s=l+a),p!==r||i!==0&&p.nodeType!==3||(u=l+i),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)f=p,p=y;for(;;){if(p===e)break t;if(f===n&&++m===a&&(s=l),f===r&&++b===i&&(u=l),(y=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ts={focusedElem:e,selectionRange:n},Cr=!1,ye=t;ye!==null;)if(t=ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ye=e;else for(;ye!==null;){switch(t=ye,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var A=wn(n.type,a);e=i.getSnapshotBeforeUpdate(A,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(T){X(n,n.return,T)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Cs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(S(163))}if(e=t.sibling,e!==null){e.return=t.return,ye=e;break}ye=t.return}}function Af(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:yt(e,n),i&4&&ma(5,n);break;case 1:if(yt(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(l){X(n,n.return,l)}else{var a=wn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){X(n,n.return,l)}}i&64&&bf(n),i&512&&ki(n,n.return);break;case 3:if(yt(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cd(e,t)}catch(l){X(n,n.return,l)}}break;case 27:t===null&&i&4&&Sf(n);case 26:case 5:yt(e,n),t===null&&i&4&&xf(n),i&512&&ki(n,n.return);break;case 12:yt(e,n);break;case 31:yt(e,n),i&4&&Cf(e,n);break;case 13:yt(e,n),i&4&&$f(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=jh.bind(null,n),Jh(e,n))));break;case 22:if(i=n.memoizedState!==null||xt,!i){t=t!==null&&t.memoizedState!==null||fe,a=xt;var r=fe;xt=i,(fe=t)&&!r?bt(e,n,(n.subtreeFlags&8772)!==0):yt(e,n),xt=a,fe=r}break;case 30:break;default:yt(e,n)}}function Tf(e){var t=e.alternate;t!==null&&(e.alternate=null,Tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Us(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,je=!1;function gt(e,t,n){for(n=n.child;n!==null;)Nf(e,t,n),n=n.sibling}function Nf(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 26:fe||ct(n,t),gt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:fe||ct(n,t);var i=ie,a=je;ln(n.type)&&(ie=n.stateNode,je=!1),gt(e,t,n),Gi(n.stateNode),ie=i,je=a;break;case 5:fe||ct(n,t);case 6:if(i=ie,a=je,ie=null,gt(e,t,n),ie=i,je=a,ie!==null)if(je)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(n.stateNode)}catch(r){X(n,t,r)}else try{ie.removeChild(n.stateNode)}catch(r){X(n,t,r)}break;case 18:ie!==null&&(je?(e=ie,Fu(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):Fu(ie,n.stateNode));break;case 4:i=ie,a=je,ie=n.stateNode.containerInfo,je=!0,gt(e,t,n),ie=i,je=a;break;case 0:case 11:case 14:case 15:nn(2,n,t),fe||nn(4,n,t),gt(e,t,n);break;case 1:fe||(ct(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&vf(n,t,i)),gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:fe=(i=fe)||n.memoizedState!==null,gt(e,t,n),fe=i;break;default:gt(e,t,n)}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(n){X(t,t.return,n)}}}function $f(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){X(t,t.return,n)}}function Th(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qu),t;default:throw Error(S(435,e.tag))}}function Ma(e,t){var n=Th(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=Mh.bind(null,e,i);i.then(a,a)}})}function Oe(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 27:if(ln(s.type)){ie=s.stateNode,je=!1;break e}break;case 5:ie=s.stateNode,je=!1;break e;case 3:case 4:ie=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(ie===null)throw Error(S(160));Nf(r,l,a),ie=null,je=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ef(t,e),t=t.sibling}var rt=null;function Ef(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Oe(t,e),ze(e),i&4&&(nn(3,e,e.return),ma(3,e),nn(5,e,e.return));break;case 1:Oe(t,e),ze(e),i&512&&(fe||n===null||ct(n,n.return)),i&64&&xt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=rt;if(Oe(t,e),ze(e),i&512&&(fe||n===null||ct(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[ca]||r[we]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Te(r,i,n),r[we]=e,be(r),i=r;break e;case"link":var l=ic("link","href",a).get(i+(n.href||""));if(l){for(var s=0;s<l.length;s++)if(r=l[s],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(s,1);break t}}r=a.createElement(i),Te(r,i,n),a.head.appendChild(r);break;case"meta":if(l=ic("meta","content",a).get(i+(n.content||""))){for(s=0;s<l.length;s++)if(r=l[s],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){l.splice(s,1);break t}}r=a.createElement(i),Te(r,i,n),a.head.appendChild(r);break;default:throw Error(S(468,i))}r[we]=e,be(r),i=r}e.stateNode=i}else ac(a,e.type,e.stateNode);else e.stateNode=nc(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?ac(a,e.type,e.stateNode):nc(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Al(e,e.memoizedProps,n.memoizedProps)}break;case 27:Oe(t,e),ze(e),i&512&&(fe||n===null||ct(n,n.return)),n!==null&&i&4&&Al(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Oe(t,e),ze(e),i&512&&(fe||n===null||ct(n,n.return)),e.flags&32){a=e.stateNode;try{Wn(a,"")}catch(A){X(e,e.return,A)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Al(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Nl=!0);break;case 6:if(Oe(t,e),ze(e),i&4){if(e.stateNode===null)throw Error(S(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(A){X(e,e.return,A)}}break;case 3:if(Fa=null,a=rt,rt=Ar(t.containerInfo),Oe(t,e),rt=a,ze(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(A){X(e,e.return,A)}Nl&&(Nl=!1,Df(e));break;case 4:i=rt,rt=Ar(e.stateNode.containerInfo),Oe(t,e),ze(e),rt=i;break;case 12:Oe(t,e),ze(e);break;case 31:Oe(t,e),ze(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ma(e,i)));break;case 13:Oe(t,e),ze(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ur=Ie()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ma(e,i)));break;case 22:a=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,m=xt,b=fe;if(xt=m||a,fe=b||u,Oe(t,e),fe=b,xt=m,ze(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||u||xt||fe||dn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(r=u.stateNode,a)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{s=u.stateNode;var p=u.memoizedProps.style,f=p!=null&&p.hasOwnProperty("display")?p.display:null;s.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(A){X(u,u.return,A)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=a?"":u.memoizedProps}catch(A){X(u,u.return,A)}}}else if(t.tag===18){if(n===null){u=t;try{var y=u.stateNode;a?Ku(y,!0):Ku(u.stateNode,!1)}catch(A){X(u,u.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ma(e,n))));break;case 19:Oe(t,e),ze(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ma(e,i)));break;case 30:break;case 21:break;default:Oe(t,e),ze(e)}}function ze(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(wf(i)){n=i;break}i=i.return}if(n==null)throw Error(S(160));switch(n.tag){case 27:var a=n.stateNode,r=Tl(e);hr(e,r,a);break;case 5:var l=n.stateNode;n.flags&32&&(Wn(l,""),n.flags&=-33);var s=Tl(e);hr(e,s,l);break;case 3:case 4:var u=n.stateNode.containerInfo,m=Tl(e);gs(e,m,u);break;default:throw Error(S(161))}}catch(b){X(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Df(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Df(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Af(e,t.alternate,t),t=t.sibling}function dn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:nn(4,t,t.return),dn(t);break;case 1:ct(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vf(t,t.return,n),dn(t);break;case 27:Gi(t.stateNode);case 26:case 5:ct(t,t.return),dn(t);break;case 22:t.memoizedState===null&&dn(t);break;case 30:dn(t);break;default:dn(t)}e=e.sibling}}function bt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:bt(a,r,n),ma(4,r);break;case 1:if(bt(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(m){X(i,i.return,m)}if(i=r,a=i.updateQueue,a!==null){var s=i.stateNode;try{var u=a.shared.hiddenCallbacks;if(u!==null)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)Nd(u[a],s)}catch(m){X(i,i.return,m)}}n&&l&64&&bf(r),ki(r,r.return);break;case 27:Sf(r);case 26:case 5:bt(a,r,n),n&&i===null&&l&4&&xf(r),ki(r,r.return);break;case 12:bt(a,r,n);break;case 31:bt(a,r,n),n&&l&4&&Cf(a,r);break;case 13:bt(a,r,n),n&&l&4&&$f(a,r);break;case 22:r.memoizedState===null&&bt(a,r,n),ki(r,r.return);break;case 30:break;default:bt(a,r,n)}t=t.sibling}}function So(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Ao(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function at(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Of(e,t,n,i),t=t.sibling}function Of(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:at(e,t,n,i),a&2048&&ma(9,t);break;case 1:at(e,t,n,i);break;case 3:at(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(a&2048){at(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,s=r.onPostCommit;typeof s=="function"&&s(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){X(t,t.return,u)}}else at(e,t,n,i);break;case 31:at(e,t,n,i);break;case 13:at(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?at(e,t,n,i):Ii(e,t):r._visibility&2?at(e,t,n,i):(r._visibility|=2,On(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&So(l,t);break;case 24:at(e,t,n,i),a&2048&&Ao(t.alternate,t);break;default:at(e,t,n,i)}}function On(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,s=n,u=i,m=l.flags;switch(l.tag){case 0:case 11:case 15:On(r,l,s,u,a),ma(8,l);break;case 23:break;case 22:var b=l.stateNode;l.memoizedState!==null?b._visibility&2?On(r,l,s,u,a):Ii(r,l):(b._visibility|=2,On(r,l,s,u,a)),a&&m&2048&&So(l.alternate,l);break;case 24:On(r,l,s,u,a),a&&m&2048&&Ao(l.alternate,l);break;default:On(r,l,s,u,a)}t=t.sibling}}function Ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ii(n,i),a&2048&&So(i.alternate,i);break;case 24:Ii(n,i),a&2048&&Ao(i.alternate,i);break;default:Ii(n,i)}t=t.sibling}}var Oi=8192;function En(e,t,n){if(e.subtreeFlags&Oi)for(e=e.child;e!==null;)zf(e,t,n),e=e.sibling}function zf(e,t,n){switch(e.tag){case 26:En(e,t,n),e.flags&Oi&&e.memoizedState!==null&&c0(n,rt,e.memoizedState,e.memoizedProps);break;case 5:En(e,t,n);break;case 3:case 4:var i=rt;rt=Ar(e.stateNode.containerInfo),En(e,t,n),rt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Oi,Oi=16777216,En(e,t,n),Oi=i):En(e,t,n));break;default:En(e,t,n)}}function jf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Si(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ye=i,Rf(i,e)}jf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mf(e),e=e.sibling}function Mf(e){switch(e.tag){case 0:case 11:case 15:Si(e),e.flags&2048&&nn(9,e,e.return);break;case 3:Si(e);break;case 12:Si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Za(e)):Si(e);break;default:Si(e)}}function Za(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ye=i,Rf(i,e)}jf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:nn(8,t,t.return),Za(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Za(t));break;default:Za(t)}e=e.sibling}}function Rf(e,t){for(;ye!==null;){var n=ye;switch(n.tag){case 0:case 11:case 15:nn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:fa(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ye=i;else e:for(n=e;ye!==null;){i=ye;var a=i.sibling,r=i.return;if(Tf(i),i===n){ye=null;break e}if(a!==null){a.return=r,ye=a;break e}ye=r}}}var Nh={getCacheForType:function(e){var t=Ae(pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ae(pe).controller.signal}},Ch=typeof WeakMap=="function"?WeakMap:Map,G=0,K=null,q=null,B=0,V=0,qe=null,Ht=!1,pi=!1,To=!1,zt=0,re=0,an=0,gn=0,No=0,ke=0,ii=0,Hi=null,Me=null,ys=!1,Ur=0,_f=0,gr=1/0,yr=null,Pt=null,he=0,Ft=null,ai=null,Ct=0,bs=0,vs=null,Lf=null,Ui=0,xs=null;function Ge(){return G&2&&B!==0?B&-B:j.T!==null?$o():Gc()}function qf(){if(ke===0)if(!(B&536870912)||I){var e=Na;Na<<=1,!(Na&3932160)&&(Na=262144),ke=e}else ke=536870912;return e=Ve.current,e!==null&&(e.flags|=32),ke}function Re(e,t,n){(e===K&&(V===2||V===9)||e.cancelPendingCommit!==null)&&(ri(e,0),Ut(e,B,ke,!1)),ua(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(gn|=n),re===4&&Ut(e,B,ke,!1)),pt(e))}function Bf(e,t,n){if(G&6)throw Error(S(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||oa(e,t),a=i?Dh(e,t):Cl(e,t,!0),r=i;do{if(a===0){pi&&!i&&Ut(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!$h(n)){a=Cl(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var s=e;a=Hi;var u=s.current.memoizedState.isDehydrated;if(u&&(ri(s,l).flags|=256),l=Cl(s,l,!1),l!==2){if(To&&!u){s.errorRecoveryDisabledLanes|=r,gn|=r,a=4;break e}r=Me,Me=a,r!==null&&(Me===null?Me=r:Me.push.apply(Me,r))}a=l}if(r=!1,a!==2)continue}}if(a===1){ri(e,0),Ut(e,t,0,!0);break}e:{switch(i=e,r=a,r){case 0:case 1:throw Error(S(345));case 4:if((t&4194048)!==t)break;case 6:Ut(i,t,ke,!Ht);break e;case 2:Me=null;break;case 3:case 5:break;default:throw Error(S(329))}if((t&62914560)===t&&(a=Ur+300-Ie(),10<a)){if(Ut(i,t,ke,!Ht),jr(i,0,!0)!==0)break e;Ct=t,i.timeoutHandle=ap(Bu.bind(null,i,n,Me,yr,ys,t,ke,gn,ii,Ht,r,"Throttled",-0,0),a);break e}Bu(i,n,Me,yr,ys,t,ke,gn,ii,Ht,r,null,-0,0)}}break}while(!0);pt(e)}function Bu(e,t,n,i,a,r,l,s,u,m,b,p,f,y){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:St},zf(t,r,p);var A=(r&62914560)===r?Ur-Ie():(r&4194048)===r?_f-Ie():0;if(A=d0(p,A),A!==null){Ct=r,e.cancelPendingCommit=A(ku.bind(null,e,t,r,n,i,a,l,s,u,b,p,null,f,y)),Ut(e,r,l,!m);return}}ku(e,t,r,n,i,a,l,s,u)}function $h(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Ye(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t,n,i){t&=~No,t&=~gn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Ue(a),l=1<<r;i[r]=-1,a&=~l}n!==0&&Ic(e,n,t)}function Gr(){return G&6?!0:(ha(0),!1)}function Co(){if(q!==null){if(V===0)var e=q.return;else e=q,At=Cn=null,co(e),Zn=null,Ki=0,e=q;for(;e!==null;)yf(e.alternate,e),e=e.return;q=null}}function ri(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ct=0,Co(),K=e,q=n=Tt(e.current,null),B=t,V=0,qe=null,Ht=!1,pi=oa(e,t),To=!1,ii=ke=No=gn=an=re=0,Me=Hi=null,ys=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Ue(i),r=1<<a;t|=e[a],i&=~r}return zt=t,Lr(),n}function Qf(e,t){_=null,j.H=Wi,t===fi||t===Br?(t=gu(),V=3):t===io?(t=gu(),V=4):V=t===xo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qe=t,q===null&&(re=1,pr(e,Je(t,e.current)))}function kf(){var e=Ve.current;return e===null?!0:(B&4194048)===B?et===null:(B&62914560)===B||B&536870912?e===et:!1}function If(){var e=j.H;return j.H=Wi,e===null?Wi:e}function Hf(){var e=j.A;return j.A=Nh,e}function br(){re=4,Ht||(B&4194048)!==B&&Ve.current!==null||(pi=!0),!(an&134217727)&&!(gn&134217727)||K===null||Ut(K,B,ke,!1)}function Cl(e,t,n){var i=G;G|=2;var a=If(),r=Hf();(K!==e||B!==t)&&(yr=null,ri(e,t)),t=!1;var l=re;e:do try{if(V!==0&&q!==null){var s=q,u=qe;switch(V){case 8:Co(),l=6;break e;case 3:case 2:case 9:case 6:Ve.current===null&&(t=!0);var m=V;if(V=0,qe=null,Un(e,s,u,m),n&&pi){l=0;break e}break;default:m=V,V=0,qe=null,Un(e,s,u,m)}}Eh(),l=re;break}catch(b){Qf(e,b)}while(!0);return t&&e.shellSuspendCounter++,At=Cn=null,G=i,j.H=a,j.A=r,q===null&&(K=null,B=0,Lr()),l}function Eh(){for(;q!==null;)Uf(q)}function Dh(e,t){var n=G;G|=2;var i=If(),a=Hf();K!==e||B!==t?(yr=null,gr=Ie()+500,ri(e,t)):pi=oa(e,t);e:do try{if(V!==0&&q!==null){t=q;var r=qe;t:switch(V){case 1:V=0,qe=null,Un(e,t,r,1);break;case 2:case 9:if(hu(r)){V=0,qe=null,Qu(t);break}t=function(){V!==2&&V!==9||K!==e||(V=7),pt(e)},r.then(t,t);break e;case 3:V=7;break e;case 4:V=5;break e;case 7:hu(r)?(V=0,qe=null,Qu(t)):(V=0,qe=null,Un(e,t,r,7));break;case 5:var l=null;switch(q.tag){case 26:l=q.memoizedState;case 5:case 27:var s=q;if(l?up(l):s.stateNode.complete){V=0,qe=null;var u=s.sibling;if(u!==null)q=u;else{var m=s.return;m!==null?(q=m,Yr(m)):q=null}break t}}V=0,qe=null,Un(e,t,r,5);break;case 6:V=0,qe=null,Un(e,t,r,6);break;case 8:Co(),re=6;break e;default:throw Error(S(462))}}Oh();break}catch(b){Qf(e,b)}while(!0);return At=Cn=null,j.H=i,j.A=a,G=n,q!==null?0:(K=null,B=0,Lr(),re)}function Oh(){for(;q!==null&&!Wp();)Uf(q)}function Uf(e){var t=gf(e.alternate,e,zt);e.memoizedProps=e.pendingProps,t===null?Yr(e):q=t}function Qu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ju(n,t,t.pendingProps,t.type,void 0,B);break;case 11:t=ju(n,t,t.pendingProps,t.type.render,t.ref,B);break;case 5:co(t);default:yf(n,t),t=q=gd(t,zt),t=gf(n,t,zt)}e.memoizedProps=e.pendingProps,t===null?Yr(e):q=t}function Un(e,t,n,i){At=Cn=null,co(t),Zn=null,Ki=0;var a=t.return;try{if(bh(e,a,t,n,B)){re=1,pr(e,Je(n,e.current)),q=null;return}}catch(r){if(a!==null)throw q=a,r;re=1,pr(e,Je(n,e.current)),q=null;return}t.flags&32768?(I||i===1?e=!0:pi||B&536870912?e=!1:(Ht=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ve.current,i!==null&&i.tag===13&&(i.flags|=16384))),Gf(t,e)):Yr(t)}function Yr(e){var t=e;do{if(t.flags&32768){Gf(t,Ht);return}e=t.return;var n=wh(t.alternate,t,zt);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);re===0&&(re=5)}function Gf(e,t){do{var n=Sh(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);re=6,q=null}function ku(e,t,n,i,a,r,l,s,u){e.cancelPendingCommit=null;do Vr();while(he!==0);if(G&6)throw Error(S(327));if(t!==null){if(t===e.current)throw Error(S(177));if(r=t.lanes|t.childLanes,r|=Fs,um(e,n,r,l,s,u),e===K&&(q=K=null,B=0),ai=t,Ft=e,Ct=n,bs=r,vs=a,Lf=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Rh(nr,function(){return Pf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=j.T,j.T=null,a=Y.p,Y.p=2,l=G,G|=4;try{Ah(e,t,n)}finally{G=l,Y.p=a,j.T=i}}he=1,Yf(),Vf(),Xf()}}function Yf(){if(he===1){he=0;var e=Ft,t=ai,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var i=Y.p;Y.p=2;var a=G;G|=4;try{Ef(t,e);var r=Ts,l=od(e.containerInfo),s=r.focusedElem,u=r.selectionRange;if(l!==s&&s&&s.ownerDocument&&sd(s.ownerDocument.documentElement,s)){if(u!==null&&Ps(s)){var m=u.start,b=u.end;if(b===void 0&&(b=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(b,s.value.length);else{var p=s.ownerDocument||document,f=p&&p.defaultView||window;if(f.getSelection){var y=f.getSelection(),A=s.textContent.length,T=Math.min(u.start,A),$=u.end===void 0?T:Math.min(u.end,A);!y.extend&&T>$&&(l=$,$=T,T=l);var h=ou(s,T),o=ou(s,$);if(h&&o&&(y.rangeCount!==1||y.anchorNode!==h.node||y.anchorOffset!==h.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var d=p.createRange();d.setStart(h.node,h.offset),y.removeAllRanges(),T>$?(y.addRange(d),y.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),y.addRange(d))}}}}for(p=[],y=s;y=y.parentNode;)y.nodeType===1&&p.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<p.length;s++){var g=p[s];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Cr=!!As,Ts=As=null}finally{G=a,Y.p=i,j.T=n}}e.current=t,he=2}}function Vf(){if(he===2){he=0;var e=Ft,t=ai,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var i=Y.p;Y.p=2;var a=G;G|=4;try{Af(e,t.alternate,t)}finally{G=a,Y.p=i,j.T=n}}he=3}}function Xf(){if(he===4||he===3){he=0,em();var e=Ft,t=ai,n=Ct,i=Lf;t.subtreeFlags&10256||t.flags&10256?he=5:(he=0,ai=Ft=null,Zf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Pt=null),Hs(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(sa,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=j.T,a=Y.p,Y.p=2,j.T=null;try{for(var r=e.onRecoverableError,l=0;l<i.length;l++){var s=i[l];r(s.value,{componentStack:s.stack})}}finally{j.T=t,Y.p=a}}Ct&3&&Vr(),pt(e),a=e.pendingLanes,n&261930&&a&42?e===xs?Ui++:(Ui=0,xs=e):Ui=0,ha(0)}}function Zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Vr(){return Yf(),Vf(),Xf(),Pf()}function Pf(){if(he!==5)return!1;var e=Ft,t=bs;bs=0;var n=Hs(Ct),i=j.T,a=Y.p;try{Y.p=32>n?32:n,j.T=null,n=vs,vs=null;var r=Ft,l=Ct;if(he=0,ai=Ft=null,Ct=0,G&6)throw Error(S(331));var s=G;if(G|=4,Mf(r.current),Of(r,r.current,l,n),G=s,ha(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(sa,r)}catch{}return!0}finally{Y.p=a,j.T=i,Zf(e,t)}}function Iu(e,t,n){t=Je(n,t),t=ps(e.stateNode,t,2),e=Zt(e,t,2),e!==null&&(ua(e,2),pt(e))}function X(e,t,n){if(e.tag===3)Iu(e,e,n);else for(;t!==null;){if(t.tag===3){Iu(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pt===null||!Pt.has(i))){e=Je(n,e),n=cf(2),i=Zt(t,n,2),i!==null&&(df(n,i,t,e),ua(i,2),pt(i));break}}t=t.return}}function $l(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ch;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(To=!0,a.add(n),e=zh.bind(null,e,t,n),t.then(e,e))}function zh(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(B&n)===n&&(re===4||re===3&&(B&62914560)===B&&300>Ie()-Ur?!(G&2)&&ri(e,0):No|=n,ii===B&&(ii=0)),pt(e)}function Ff(e,t){t===0&&(t=kc()),e=Nn(e,t),e!==null&&(ua(e,t),pt(e))}function jh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ff(e,n)}function Mh(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(S(314))}i!==null&&i.delete(t),Ff(e,n)}function Rh(e,t){return ks(e,t)}var vr=null,zn=null,ws=!1,xr=!1,El=!1,Gt=0;function pt(e){e!==zn&&e.next===null&&(zn===null?vr=zn=e:zn=zn.next=e),xr=!0,ws||(ws=!0,Lh())}function ha(e,t){if(!El&&xr){El=!0;do for(var n=!1,i=vr;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var l=i.suspendedLanes,s=i.pingedLanes;r=(1<<31-Ue(42|e)+1)-1,r&=a&~(l&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Hu(i,r))}else r=B,r=jr(i,i===K?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||oa(i,r)||(n=!0,Hu(i,r));i=i.next}while(n);El=!1}}function _h(){Kf()}function Kf(){xr=ws=!1;var e=0;Gt!==0&&Vh()&&(e=Gt);for(var t=Ie(),n=null,i=vr;i!==null;){var a=i.next,r=Jf(i,t);r===0?(i.next=null,n===null?vr=a:n.next=a,a===null&&(zn=n)):(n=i,(e!==0||r&3)&&(xr=!0)),i=a}he!==0&&he!==5||ha(e),Gt!==0&&(Gt=0)}function Jf(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-Ue(r),s=1<<l,u=a[l];u===-1?(!(s&n)||s&i)&&(a[l]=om(s,t)):u<=t&&(e.expiredLanes|=s),r&=~s}if(t=K,n=B,n=jr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(V===2||V===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&nl(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||oa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&nl(i),Hs(n)){case 2:case 8:n=Bc;break;case 32:n=nr;break;case 268435456:n=Qc;break;default:n=nr}return i=Wf.bind(null,e),n=ks(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&nl(i),e.callbackPriority=2,e.callbackNode=null,2}function Wf(e,t){if(he!==0&&he!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var i=B;return i=jr(e,e===K?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Bf(e,i,t),Jf(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?Wf.bind(null,e):null)}function Hu(e,t){if(Vr())return null;Bf(e,t,!0)}function Lh(){Zh(function(){G&6?ks(qc,_h):Kf()})}function $o(){if(Gt===0){var e=ei;e===0&&(e=Ta,Ta<<=1,!(Ta&261888)&&(Ta=256)),Gt=e}return Gt}function Uu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qa(""+e)}function Gu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function qh(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Uu((a[_e]||null).action),l=i.submitter;l&&(t=(t=l[_e]||null)?Uu(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var s=new Mr("action","action",null,i,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Gt!==0){var u=l?Gu(a,l):new FormData(a);ds(n,{pending:!0,data:u,method:a.method,action:r},null,u)}}else typeof r=="function"&&(s.preventDefault(),u=l?Gu(a,l):new FormData(a),ds(n,{pending:!0,data:u,method:a.method,action:r},r,u))},currentTarget:a}]})}}for(var Dl=0;Dl<Wl.length;Dl++){var Ol=Wl[Dl],Bh=Ol.toLowerCase(),Qh=Ol[0].toUpperCase()+Ol.slice(1);lt(Bh,"on"+Qh)}lt(cd,"onAnimationEnd");lt(dd,"onAnimationIteration");lt(fd,"onAnimationStart");lt("dblclick","onDoubleClick");lt("focusin","onFocus");lt("focusout","onBlur");lt(th,"onTransitionRun");lt(nh,"onTransitionStart");lt(ih,"onTransitionCancel");lt(pd,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ea));function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var l=i.length-1;0<=l;l--){var s=i[l],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==r&&a.isPropagationStopped())break e;r=s,a.currentTarget=m;try{r(a)}catch(b){ar(b)}a.currentTarget=null,r=u}else for(l=0;l<i.length;l++){if(s=i[l],u=s.instance,m=s.currentTarget,s=s.listener,u!==r&&a.isPropagationStopped())break e;r=s,a.currentTarget=m;try{r(a)}catch(b){ar(b)}a.currentTarget=null,r=u}}}}function L(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var i=e+"__bubble";n.has(i)||(tp(t,e,2,!1),n.add(i))}function zl(e,t,n){var i=0;t&&(i|=4),tp(n,e,i,t)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[Ra]){e[Ra]=!0,Yc.forEach(function(n){n!=="selectionchange"&&(kh.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ra]||(t[Ra]=!0,zl("selectionchange",!1,t))}}function tp(e,t,n,i){switch(mp(t)){case 2:var a=m0;break;case 8:a=h0;break;default:a=jo}n=a.bind(null,t,n,e),a=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function jl(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var s=i.stateNode.containerInfo;if(s===a)break;if(l===4)for(l=i.return;l!==null;){var u=l.tag;if((u===3||u===4)&&l.stateNode.containerInfo===a)return;l=l.return}for(;s!==null;){if(l=Rn(s),l===null)return;if(u=l.tag,u===5||u===6||u===26||u===27){i=r=l;continue e}s=s.parentNode}}i=i.return}Wc(function(){var m=r,b=Ys(n),p=[];e:{var f=md.get(e);if(f!==void 0){var y=Mr,A=e;switch(e){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":y=Mm;break;case"focusin":A="focus",y=sl;break;case"focusout":A="blur",y=sl;break;case"beforeblur":case"afterblur":y=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Lm;break;case cd:case dd:case fd:y=Tm;break;case pd:y=Bm;break;case"scroll":case"scrollend":y=vm;break;case"wheel":y=km;break;case"copy":case"cut":case"paste":y=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eu;break;case"toggle":case"beforetoggle":y=Hm}var T=(t&4)!==0,$=!T&&(e==="scroll"||e==="scrollend"),h=T?f!==null?f+"Capture":null:f;T=[];for(var o=m,d;o!==null;){var g=o;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||h===null||(g=Vi(o,h),g!=null&&T.push(ta(o,g,d))),$)break;o=o.return}0<T.length&&(f=new y(f,A,null,n,b),p.push({event:f,listeners:T}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Pl&&(A=n.relatedTarget||n.fromElement)&&(Rn(A)||A[ui]))break e;if((y||f)&&(f=b.window===b?b:(f=b.ownerDocument)?f.defaultView||f.parentWindow:window,y?(A=n.relatedTarget||n.toElement,y=m,A=A?Rn(A):null,A!==null&&($=la(A),T=A.tag,A!==$||T!==5&&T!==27&&T!==6)&&(A=null)):(y=null,A=m),y!==A)){if(T=Jo,g="onMouseLeave",h="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(T=eu,g="onPointerLeave",h="onPointerEnter",o="pointer"),$=y==null?f:Ei(y),d=A==null?f:Ei(A),f=new T(g,o+"leave",y,n,b),f.target=$,f.relatedTarget=d,g=null,Rn(b)===m&&(T=new T(h,o+"enter",A,n,b),T.target=d,T.relatedTarget=$,g=T),$=g,y&&A)t:{for(T=Ih,h=y,o=A,d=0,g=h;g;g=T(g))d++;g=0;for(var v=o;v;v=T(v))g++;for(;0<d-g;)h=T(h),d--;for(;0<g-d;)o=T(o),g--;for(;d--;){if(h===o||o!==null&&h===o.alternate){T=h;break t}h=T(h),o=T(o)}T=null}else T=null;y!==null&&Yu(p,f,y,T,!1),A!==null&&$!==null&&Yu(p,$,A,T,!0)}}e:{if(f=m?Ei(m):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var w=au;else if(iu(f))if(rd)w=Jm;else{w=Fm;var x=Pm}else y=f.nodeName,!y||y.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?m&&Gs(m.elementType)&&(w=au):w=Km;if(w&&(w=w(e,m))){ad(p,w,n,b);break e}x&&x(e,f,m),e==="focusout"&&m&&f.type==="number"&&m.memoizedProps.value!=null&&Zl(f,"number",f.value)}switch(x=m?Ei(m):window,e){case"focusin":(iu(x)||x.contentEditable==="true")&&(qn=x,Kl=m,Ri=null);break;case"focusout":Ri=Kl=qn=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,uu(p,n,b);break;case"selectionchange":if(eh)break;case"keydown":case"keyup":uu(p,n,b)}var C;if(Zs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ln?nd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(td&&n.locale!=="ko"&&(Ln||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ln&&(C=ed()):(It=b,Vs="value"in It?It.value:It.textContent,Ln=!0)),x=wr(m,N),0<x.length&&(N=new Wo(N,e,null,n,b),p.push({event:N,listeners:x}),C?N.data=C:(C=id(n),C!==null&&(N.data=C)))),(C=Gm?Ym(e,n):Vm(e,n))&&(N=wr(m,"onBeforeInput"),0<N.length&&(x=new Wo("onBeforeInput","beforeinput",null,n,b),p.push({event:x,listeners:N}),x.data=C)),qh(p,e,m,n,b)}ep(p,t)})}function ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wr(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Vi(e,n),a!=null&&i.unshift(ta(e,a,r)),a=Vi(e,t),a!=null&&i.push(ta(e,a,r))),e.tag===3)return i;e=e.return}return[]}function Ih(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yu(e,t,n,i,a){for(var r=t._reactName,l=[];n!==null&&n!==i;){var s=n,u=s.alternate,m=s.stateNode;if(s=s.tag,u!==null&&u===i)break;s!==5&&s!==26&&s!==27||m===null||(u=m,a?(m=Vi(n,r),m!=null&&l.unshift(ta(n,m,u))):a||(m=Vi(n,r),m!=null&&l.push(ta(n,m,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Hh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(Hh,`
`).replace(Uh,"")}function np(e,t){return t=Vu(t),Vu(e)===t}function Z(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Wn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Wn(e,""+i);break;case"className":$a(e,"class",i);break;case"tabIndex":$a(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":$a(e,n,i);break;case"style":Jc(e,i,r);break;case"data":if(t!=="object"){$a(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qa(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Z(e,t,"name",a.name,a,null),Z(e,t,"formEncType",a.formEncType,a,null),Z(e,t,"formMethod",a.formMethod,a,null),Z(e,t,"formTarget",a.formTarget,a,null)):(Z(e,t,"encType",a.encType,a,null),Z(e,t,"method",a.method,a,null),Z(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qa(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=St);break;case"onScroll":i!=null&&L("scroll",e);break;case"onScrollEnd":i!=null&&L("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(S(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(S(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Qa(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":L("beforetoggle",e),L("toggle",e),Ba(e,"popover",i);break;case"xlinkActuate":mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":mt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":mt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":mt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":mt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ba(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ym.get(n)||n,Ba(e,n,i))}}function Ss(e,t,n,i,a,r){switch(n){case"style":Jc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(S(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(S(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Wn(e,i):(typeof i=="number"||typeof i=="bigint")&&Wn(e,""+i);break;case"onScroll":i!=null&&L("scroll",e);break;case"onScrollEnd":i!=null&&L("scrollend",e);break;case"onClick":i!=null&&(e.onclick=St);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[_e]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ba(e,n,i)}}}function Te(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":L("error",e),L("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(l!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(S(137,t));default:Z(e,t,r,l,n,null)}}a&&Z(e,t,"srcSet",n.srcSet,n,null),i&&Z(e,t,"src",n.src,n,null);return;case"input":L("invalid",e);var s=r=l=a=null,u=null,m=null;for(i in n)if(n.hasOwnProperty(i)){var b=n[i];if(b!=null)switch(i){case"name":a=b;break;case"type":l=b;break;case"checked":u=b;break;case"defaultChecked":m=b;break;case"value":r=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(S(137,t));break;default:Z(e,t,i,b,n,null)}}Pc(e,r,s,u,m,l,a,!1);return;case"select":L("invalid",e),i=l=r=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":i=s;default:Z(e,t,a,s,n,null)}t=r,n=l,e.multiple=!!i,t!=null?Yn(e,!!i,t,!1):n!=null&&Yn(e,!!i,n,!0);return;case"textarea":L("invalid",e),r=a=i=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":a=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(S(91));break;default:Z(e,t,l,s,n,null)}Kc(e,i,a,r);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Z(e,t,u,i,n,null)}return;case"dialog":L("beforetoggle",e),L("toggle",e),L("cancel",e),L("close",e);break;case"iframe":case"object":L("load",e);break;case"video":case"audio":for(i=0;i<ea.length;i++)L(ea[i],e);break;case"image":L("error",e),L("load",e);break;case"details":L("toggle",e);break;case"embed":case"source":case"link":L("error",e),L("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in n)if(n.hasOwnProperty(m)&&(i=n[m],i!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(S(137,t));default:Z(e,t,m,i,n,null)}return;default:if(Gs(t)){for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!==void 0&&Ss(e,t,b,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(i=n[s],i!=null&&Z(e,t,s,i,n,null))}function Gh(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,l=null,s=null,u=null,m=null,b=null;for(y in n){var p=n[y];if(n.hasOwnProperty(y)&&p!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":u=p;default:i.hasOwnProperty(y)||Z(e,t,y,null,i,p)}}for(var f in i){var y=i[f];if(p=n[f],i.hasOwnProperty(f)&&(y!=null||p!=null))switch(f){case"type":r=y;break;case"name":a=y;break;case"checked":m=y;break;case"defaultChecked":b=y;break;case"value":l=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(S(137,t));break;default:y!==p&&Z(e,t,f,y,i,p)}}Xl(e,l,s,u,m,b,r,a);return;case"select":y=l=s=f=null;for(r in n)if(u=n[r],n.hasOwnProperty(r)&&u!=null)switch(r){case"value":break;case"multiple":y=u;default:i.hasOwnProperty(r)||Z(e,t,r,null,i,u)}for(a in i)if(r=i[a],u=n[a],i.hasOwnProperty(a)&&(r!=null||u!=null))switch(a){case"value":f=r;break;case"defaultValue":s=r;break;case"multiple":l=r;default:r!==u&&Z(e,t,a,r,i,u)}t=s,n=l,i=y,f!=null?Yn(e,!!n,f,!1):!!i!=!!n&&(t!=null?Yn(e,!!n,t,!0):Yn(e,!!n,n?[]:"",!1));return;case"textarea":y=f=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Z(e,t,s,null,i,a)}for(l in i)if(a=i[l],r=n[l],i.hasOwnProperty(l)&&(a!=null||r!=null))switch(l){case"value":f=a;break;case"defaultValue":y=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(S(91));break;default:a!==r&&Z(e,t,l,a,i,r)}Fc(e,f,y);return;case"option":for(var A in n)if(f=n[A],n.hasOwnProperty(A)&&f!=null&&!i.hasOwnProperty(A))switch(A){case"selected":e.selected=!1;break;default:Z(e,t,A,null,i,f)}for(u in i)if(f=i[u],y=n[u],i.hasOwnProperty(u)&&f!==y&&(f!=null||y!=null))switch(u){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Z(e,t,u,f,i,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in n)f=n[T],n.hasOwnProperty(T)&&f!=null&&!i.hasOwnProperty(T)&&Z(e,t,T,null,i,f);for(m in i)if(f=i[m],y=n[m],i.hasOwnProperty(m)&&f!==y&&(f!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(S(137,t));break;default:Z(e,t,m,f,i,y)}return;default:if(Gs(t)){for(var $ in n)f=n[$],n.hasOwnProperty($)&&f!==void 0&&!i.hasOwnProperty($)&&Ss(e,t,$,void 0,i,f);for(b in i)f=i[b],y=n[b],!i.hasOwnProperty(b)||f===y||f===void 0&&y===void 0||Ss(e,t,b,f,i,y);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!i.hasOwnProperty(h)&&Z(e,t,h,null,i,f);for(p in i)f=i[p],y=n[p],!i.hasOwnProperty(p)||f===y||f==null&&y==null||Z(e,t,p,f,i,y)}function Xu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,l=a.initiatorType,s=a.duration;if(r&&s&&Xu(l)){for(l=0,s=a.responseEnd,i+=1;i<n.length;i++){var u=n[i],m=u.startTime;if(m>s)break;var b=u.transferSize,p=u.initiatorType;b&&Xu(p)&&(u=u.responseEnd,l+=b*(u<s?1:(s-m)/(u-m)))}if(--i,t+=8*(r+l)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var As=null,Ts=null;function Sr(e){return e.nodeType===9?e:e.ownerDocument}function Zu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ip(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=null;function Vh(){var e=window.event;return e&&e.type==="popstate"?e===Ml?!1:(Ml=e,!0):(Ml=null,!1)}var ap=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,Zh=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(Ph)}:ap;function Ph(e){setTimeout(function(){throw e})}function ln(e){return e==="head"}function Fu(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),si(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Gi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Gi(n);for(var r=n.firstChild;r;){var l=r.nextSibling,s=r.nodeName;r[ca]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=l}}else n==="body"&&Gi(e.ownerDocument.body);n=a}while(n);si(t)}function Ku(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Cs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Cs(n),Us(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Fh(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ca])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=tt(e.nextSibling),e===null)break}return null}function Kh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tt(e.nextSibling),e===null))return null;return e}function rp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tt(e.nextSibling),e===null))return null;return e}function $s(e){return e.data==="$?"||e.data==="$~"}function Es(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jh(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ds=null;function Ju(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function lp(e,t,n){switch(t=Sr(n),e){case"html":if(e=t.documentElement,!e)throw Error(S(452));return e;case"head":if(e=t.head,!e)throw Error(S(453));return e;case"body":if(e=t.body,!e)throw Error(S(454));return e;default:throw Error(S(451))}}function Gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Us(e)}var nt=new Map,ec=new Set;function Ar(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jt=Y.d;Y.d={f:Wh,r:e0,D:t0,C:n0,L:i0,m:a0,X:l0,S:r0,M:s0};function Wh(){var e=jt.f(),t=Gr();return e||t}function e0(e){var t=ci(e);t!==null&&t.tag===5&&t.type==="form"?Jd(t):jt.r(e)}var mi=typeof document>"u"?null:document;function sp(e,t,n){var i=mi;if(i&&typeof t=="string"&&t){var a=Ke(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),ec.has(a)||(ec.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Te(t,"link",e),be(t),i.head.appendChild(t)))}}function t0(e){jt.D(e),sp("dns-prefetch",e,null)}function n0(e,t){jt.C(e,t),sp("preconnect",e,t)}function i0(e,t,n){jt.L(e,t,n);var i=mi;if(i&&e&&t){var a='link[rel="preload"][as="'+Ke(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ke(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ke(n.imageSizes)+'"]')):a+='[href="'+Ke(e)+'"]';var r=a;switch(t){case"style":r=li(e);break;case"script":r=hi(e)}nt.has(r)||(e=ne({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nt.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(ga(r))||t==="script"&&i.querySelector(ya(r))||(t=i.createElement("link"),Te(t,"link",e),be(t),i.head.appendChild(t)))}}function a0(e,t){jt.m(e,t);var n=mi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ke(i)+'"][href="'+Ke(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hi(e)}if(!nt.has(r)&&(e=ne({rel:"modulepreload",href:e},t),nt.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ya(r)))return}i=n.createElement("link"),Te(i,"link",e),be(i),n.head.appendChild(i)}}}function r0(e,t,n){jt.S(e,t,n);var i=mi;if(i&&e){var a=Gn(i).hoistableStyles,r=li(e);t=t||"default";var l=a.get(r);if(!l){var s={loading:0,preload:null};if(l=i.querySelector(ga(r)))s.loading=5;else{e=ne({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nt.get(r))&&Do(e,n);var u=l=i.createElement("link");be(u),Te(u,"link",e),u._p=new Promise(function(m,b){u.onload=m,u.onerror=b}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Pa(l,t,i)}l={type:"stylesheet",instance:l,count:1,state:s},a.set(r,l)}}}function l0(e,t){jt.X(e,t);var n=mi;if(n&&e){var i=Gn(n).hoistableScripts,a=hi(e),r=i.get(a);r||(r=n.querySelector(ya(a)),r||(e=ne({src:e,async:!0},t),(t=nt.get(a))&&Oo(e,t),r=n.createElement("script"),be(r),Te(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function s0(e,t){jt.M(e,t);var n=mi;if(n&&e){var i=Gn(n).hoistableScripts,a=hi(e),r=i.get(a);r||(r=n.querySelector(ya(a)),r||(e=ne({src:e,async:!0,type:"module"},t),(t=nt.get(a))&&Oo(e,t),r=n.createElement("script"),be(r),Te(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function tc(e,t,n,i){var a=(a=Yt.current)?Ar(a):null;if(!a)throw Error(S(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=li(n.href),n=Gn(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=li(n.href);var r=Gn(a).hoistableStyles,l=r.get(e);if(l||(a=a.ownerDocument||a,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=a.querySelector(ga(e)))&&!r._p&&(l.instance=r,l.state.loading=5),nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nt.set(e,n),r||o0(a,e,n,l.state))),t&&i===null)throw Error(S(528,""));return l}if(t&&i!==null)throw Error(S(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hi(n),n=Gn(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(S(444,e))}}function li(e){return'href="'+Ke(e)+'"'}function ga(e){return'link[rel="stylesheet"]['+e+"]"}function op(e){return ne({},e,{"data-precedence":e.precedence,precedence:null})}function o0(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Te(t,"link",n),be(t),e.head.appendChild(t))}function hi(e){return'[src="'+Ke(e)+'"]'}function ya(e){return"script[async]"+e}function nc(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ke(n.href)+'"]');if(i)return t.instance=i,be(i),i;var a=ne({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),be(i),Te(i,"style",a),Pa(i,n.precedence,e),t.instance=i;case"stylesheet":a=li(n.href);var r=e.querySelector(ga(a));if(r)return t.state.loading|=4,t.instance=r,be(r),r;i=op(n),(a=nt.get(a))&&Do(i,a),r=(e.ownerDocument||e).createElement("link"),be(r);var l=r;return l._p=new Promise(function(s,u){l.onload=s,l.onerror=u}),Te(r,"link",i),t.state.loading|=4,Pa(r,n.precedence,e),t.instance=r;case"script":return r=hi(n.src),(a=e.querySelector(ya(r)))?(t.instance=a,be(a),a):(i=n,(a=nt.get(r))&&(i=ne({},n),Oo(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),be(a),Te(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(S(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Pa(i,n.precedence,e));return t.instance}function Pa(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,l=0;l<i.length;l++){var s=i[l];if(s.dataset.precedence===t)r=s;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Do(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fa=null;function ic(e,t,n){if(Fa===null){var i=new Map,a=Fa=new Map;a.set(n,i)}else a=Fa,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[ca]||r[we]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var s=i.get(l);s?s.push(r):i.set(l,[r])}}return i}function ac(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function u0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function up(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function c0(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=li(i.href),r=t.querySelector(ga(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Tr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,be(r);return}r=t.ownerDocument||t,i=op(i),(a=nt.get(a))&&Do(i,a),r=r.createElement("link"),be(r);var l=r;l._p=new Promise(function(s,u){l.onload=s,l.onerror=u}),Te(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Tr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Rl=0;function d0(e,t){return e.stylesheets&&e.count===0&&Ka(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ka(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Rl===0&&(Rl=62500*Yh());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ka(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Rl?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ka(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nr=null;function Ka(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nr=new Map,t.forEach(f0,e),Nr=null,Tr.call(e))}function f0(e,t){if(!(t.state.loading&4)){var n=Nr.get(e);if(n)var i=n.get(null);else{n=new Map,Nr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var l=a[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(n.set(l.dataset.precedence,l),i=l)}i&&n.set(null,i)}a=t.instance,l=a.getAttribute("data-precedence"),r=n.get(l)||i,r===i&&n.set(null,a),n.set(l,a),this.count++,i=Tr.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var na={$$typeof:wt,Provider:null,Consumer:null,_currentValue:fn,_currentValue2:fn,_threadCount:0};function p0(e,t,n,i,a,r,l,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=il(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.hiddenUpdates=il(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function cp(e,t,n,i,a,r,l,s,u,m,b,p){return e=new p0(e,t,n,l,u,m,b,p,s),t=1,r===!0&&(t|=24),r=Qe(3,null,null,t),e.current=r,r.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},ao(r),e}function dp(e){return e?(e=kn,e):kn}function fp(e,t,n,i,a,r){a=dp(a),i.context===null?i.context=a:i.pendingContext=a,i=Xt(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Zt(e,i,t),n!==null&&(Re(n,e,t),Li(n,e,t))}function rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zo(e,t){rc(e,t),(e=e.alternate)&&rc(e,t)}function pp(e){if(e.tag===13||e.tag===31){var t=Nn(e,67108864);t!==null&&Re(t,e,67108864),zo(e,67108864)}}function lc(e){if(e.tag===13||e.tag===31){var t=Ge();t=Is(t);var n=Nn(e,t);n!==null&&Re(n,e,t),zo(e,t)}}var Cr=!0;function m0(e,t,n,i){var a=j.T;j.T=null;var r=Y.p;try{Y.p=2,jo(e,t,n,i)}finally{Y.p=r,j.T=a}}function h0(e,t,n,i){var a=j.T;j.T=null;var r=Y.p;try{Y.p=8,jo(e,t,n,i)}finally{Y.p=r,j.T=a}}function jo(e,t,n,i){if(Cr){var a=Os(i);if(a===null)jl(e,t,i,$r,n),sc(e,i);else if(y0(a,e,t,n,i))i.stopPropagation();else if(sc(e,i),t&4&&-1<g0.indexOf(e)){for(;a!==null;){var r=ci(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=un(r.pendingLanes);if(l!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;l;){var u=1<<31-Ue(l);s.entanglements[1]|=u,l&=~u}pt(r),!(G&6)&&(gr=Ie()+500,ha(0))}}break;case 31:case 13:s=Nn(r,2),s!==null&&Re(s,r,2),Gr(),zo(r,2)}if(r=Os(i),r===null&&jl(e,t,i,$r,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else jl(e,t,i,null,n)}}function Os(e){return e=Ys(e),Mo(e)}var $r=null;function Mo(e){if($r=null,e=Rn(e),e!==null){var t=la(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=jc(t),e!==null)return e;e=null}else if(n===31){if(e=Mc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $r=e,null}function mp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tm()){case qc:return 2;case Bc:return 8;case nr:case nm:return 32;case Qc:return 268435456;default:return 32}default:return 32}}var zs=!1,Kt=null,Jt=null,Wt=null,ia=new Map,aa=new Map,Qt=[],g0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sc(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(t.pointerId)}}function Ai(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=ci(t),t!==null&&pp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function y0(e,t,n,i,a){switch(t){case"focusin":return Kt=Ai(Kt,e,t,n,i,a),!0;case"dragenter":return Jt=Ai(Jt,e,t,n,i,a),!0;case"mouseover":return Wt=Ai(Wt,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return ia.set(r,Ai(ia.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,aa.set(r,Ai(aa.get(r)||null,e,t,n,i,a)),!0}return!1}function hp(e){var t=Rn(e.target);if(t!==null){var n=la(t);if(n!==null){if(t=n.tag,t===13){if(t=jc(n),t!==null){e.blockedOn=t,Yo(e.priority,function(){lc(n)});return}}else if(t===31){if(t=Mc(n),t!==null){e.blockedOn=t,Yo(e.priority,function(){lc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ja(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Pl=i,n.target.dispatchEvent(i),Pl=null}else return t=ci(n),t!==null&&pp(t),e.blockedOn=n,!1;t.shift()}return!0}function oc(e,t,n){Ja(e)&&n.delete(t)}function b0(){zs=!1,Kt!==null&&Ja(Kt)&&(Kt=null),Jt!==null&&Ja(Jt)&&(Jt=null),Wt!==null&&Ja(Wt)&&(Wt=null),ia.forEach(oc),aa.forEach(oc)}function _a(e,t){e.blockedOn===t&&(e.blockedOn=null,zs||(zs=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,b0)))}var La=null;function uc(e){La!==e&&(La=e,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,function(){La===e&&(La=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Mo(i||n)===null)continue;break}var r=ci(n);r!==null&&(e.splice(t,3),t-=3,ds(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function si(e){function t(u){return _a(u,e)}Kt!==null&&_a(Kt,e),Jt!==null&&_a(Jt,e),Wt!==null&&_a(Wt,e),ia.forEach(t),aa.forEach(t);for(var n=0;n<Qt.length;n++){var i=Qt[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)hp(n),n.blockedOn===null&&Qt.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],l=a[_e]||null;if(typeof r=="function")l||uc(n);else if(l){var s=null;if(r&&r.hasAttribute("formAction")){if(a=r,l=r[_e]||null)s=l.formAction;else if(Mo(a)!==null)continue}else s=l.action;typeof s=="function"?n[i+1]=s:(n.splice(i,3),i-=3),uc(n)}}}function gp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return a=l})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Ro(e){this._internalRoot=e}Xr.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));var n=t.current,i=Ge();fp(n,i,e,t,null,null)};Xr.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fp(e.current,2,null,e,null,null),Gr(),t[ui]=null}};function Xr(e){this._internalRoot=e}Xr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&hp(e)}};var cc=Oc.version;if(cc!=="19.2.8")throw Error(S(527,cc,"19.2.8"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Zp(t),e=e!==null?Rc(e):null,e=e===null?null:e.stateNode,e};var v0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{sa=qa.inject(v0),He=qa}catch{}}Or.createRoot=function(e,t){if(!zc(e))throw Error(S(299));var n=!1,i="",a=sf,r=of,l=uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=cp(e,1,!1,null,null,n,i,null,a,r,l,gp),e[ui]=t.current,Eo(e),new Ro(t)};Or.hydrateRoot=function(e,t,n){if(!zc(e))throw Error(S(299));var i=!1,a="",r=sf,l=of,s=uf,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=cp(e,1,!0,t,n??null,i,a,u,r,l,s,gp),t.context=dp(null),n=t.current,i=Ge(),i=Is(i),a=Xt(i),a.callback=null,Zt(n,a,i),n=i,t.current.lanes=n,ua(t,n),pt(t),e[ui]=t.current,Eo(e),new Xr(t)};Or.version="19.2.8";function yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yp)}catch(e){console.error(e)}}yp(),Tc.exports=Or;var x0=Tc.exports;const w0=js(x0),Ti=[{id:1,title:"Technical Interview Questions",shortTitle:"Technical Interview",description:"Core C language fundamentals, data types, memory concepts, pointers, storage classes, and structures.",count:51,color:"#2563eb",badgeBg:"bg-blue-50 border-blue-200 text-blue-700",badgeText:"text-blue-700"},{id:2,title:"Programming Logic & Pseudocode",shortTitle:"Logic & Pseudocode",description:"Algorithms, math problems, pattern printing, string manipulation, searching and sorting logic.",count:40,color:"#0891b2",badgeBg:"bg-cyan-50 border-cyan-200 text-cyan-700",badgeText:"text-cyan-700"},{id:3,title:"Placement Coding & Hard Dry Run",shortTitle:"Hard Dry Run",description:"In-depth code tracing, complex nested loops, pointers, dynamic memory, bitwise operations, and recursion.",count:60,color:"#7c3aed",badgeBg:"bg-purple-50 border-purple-200 text-purple-700",badgeText:"text-purple-700"},{id:4,title:"Output Prediction Questions",shortTitle:"Output Prediction",description:"Tricky syntax rules, operator precedence, evaluation orders, and scope rules.",count:30,color:"#d97706",badgeBg:"bg-amber-50 border-amber-200 text-amber-700",badgeText:"text-amber-700"},{id:5,title:"Debugging Questions",shortTitle:"Debugging",description:"Common compilation errors, segmentation faults, memory leaks, and logical pitfalls with bug fixes.",count:20,color:"#e11d48",badgeBg:"bg-rose-50 border-rose-200 text-rose-700",badgeText:"text-rose-700"}],Ni=[{id:1,pdfId:"Q1",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Basics of C",subtopic:"Language Fundamentals",difficulty:"Basic",type:"Theory",question:"What are the key features of the C programming language?",answer:{directAnswer:"C is a procedural, general-purpose, middle-level programming language developed by Dennis Ritchie at Bell Labs in 1972, known for its high execution speed, hardware-level memory access, and high portability.",explanation:["**Middle-Level Language**: Combines the high-level language user-friendliness with low-level assembly language speed and direct hardware control (via pointers and bitwise operators).","**Structured & Modular**: Supports functions and code blocks that allow breaking complex programs into manageable, reusable modules.","**Speed & Efficiency**: Compiles directly into native machine code with minimal runtime overhead, making it ideal for operating systems, compilers, and embedded systems.","**Rich Library Support**: Standard C Library (`libc`) provides extensive built-in functions for I/O, mathematical computations, memory allocation, and string operations.","**Extensibility**: Functions and libraries can be easily written and incorporated into existing programs."],interviewTip:"When interviewers ask why C is called a 'middle-level' language, emphasize that it provides abstraction (like loops and functions) while still allowing direct hardware manipulation via memory addresses and pointers."}},{id:2,pdfId:"Q2",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Basics of C",subtopic:"Compilation Process",difficulty:"Basic",type:"Theory",question:"Explain the steps involved in compiling and executing a C program.",answer:{directAnswer:"The compilation process of a C program converts human-readable source code (.c) into machine-executable binary (.exe / a.out) through four sequential stages: Preprocessing, Compilation, Assembly, and Linking.",explanation:["**1. Preprocessing (`gcc -E file.c -o file.i`)**: Expands header files (`#include`), substitutes macros (`#define`), and strips source comments. Generates `.i` file.","**2. Compilation (`gcc -S file.i -o file.s`)**: Analyzes C syntax, semantics, and optimizes code to translate C code into architecture-specific Assembly code. Generates `.s` file.","**3. Assembly (`gcc -c file.s -o file.o`)**: The Assembler translates assembly code into relocatable machine-readable machine code (Object file). Generates `.o` or `.obj` file.","**4. Linking (`gcc file.o -o file.exe`)**: The Linker merges object code with system library code (e.g. `printf` from `libc`) and resolves external references to produce the final executable binary."],comparisonTable:{headers:["Stage","Input","Tool","Output File"],rows:[["Preprocessing",".c (Source Code)","Preprocessor (`cpp`)",".i (Expanded Source)"],["Compilation",".i (Expanded)","Compiler (`cc1`)",".s (Assembly Code)"],["Assembly",".s (Assembly)","Assembler (`as`)",".o / .obj (Object Code)"],["Linking",".o + Libraries","Linker (`ld`)",".exe / a.out (Executable)"]]},interviewTip:"Remember the acronym **P-C-A-L**: Preprocessing → Compilation → Assembly → Linking."}},{id:3,pdfId:"Q3",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Basics of C",subtopic:"Header Files",difficulty:"Basic",type:"Theory",question:"What is the purpose of the #include directive and header files in C?",answer:{directAnswer:"The `#include` preprocessor directive tells the preprocessor to insert the contents of the specified header file into the current source file before actual compilation begins.",explanation:["**Purpose of Header Files (`.h`)**: Header files contain function declarations (prototypes), macro definitions, type definitions (`typedef`), and struct definitions shared across multiple source files.","**Angle Brackets `<filename.h>`**: Tells the preprocessor to search in the standard system library directories (e.g., `#include <stdio.h>`).",'**Double Quotes `"filename.h"`**: Instructs the preprocessor to first search in the current working project directory; if not found, it falls back to system include directories.'],codeExample:`#include <stdio.h>   // System header for standard I/O (printf, scanf)
#include "myconfig.h" // User-defined custom header in local folder

int main() {
    printf("Standard header used.\\n");
    return 0;
}`,interviewTip:"Never include `.c` files using `#include`. Include only `.h` header files containing declarations to prevent duplicate symbol linker errors."}},{id:4,pdfId:"Q4",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Basics of C",subtopic:"Keywords vs Identifiers",difficulty:"Basic",type:"Theory",question:"Differentiate between a keyword and an identifier in C.",answer:{directAnswer:"Keywords are predefined, reserved words having fixed meanings recognized by the compiler, while identifiers are programmer-defined names given to program entities like variables, functions, and arrays.",comparisonTable:{headers:["Feature","Keyword","Identifier"],rows:[["Definition","Predefined reserved words in the language","User-defined names for variables, functions, tags"],["Total Count","32 in standard C89 (44 in C99/C11)","Unlimited user-created names"],["Case","Must always be lowercase in C","Can have uppercase, lowercase, digits, and `_`"],["Meaning","Fixed meaning; compiler knows their action","Meaning determined by programmer"],["Special Characters","No special symbols allowed","Cannot use special characters except underscore `_`"],["Examples","`int`, `return`, `for`, `volatile`, `sizeof`","`studentAge`, `calcSum`, `MAX_BUFFER`"]]},interviewTip:"Can a keyword be used as a variable identifier? No, doing so triggers a compilation syntax error."}},{id:5,pdfId:"Q5",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Data Types",subtopic:"Data Type Sizes",difficulty:"Basic",type:"Theory",question:"What is the difference between int, float, and double data types?",answer:{directAnswer:"`int` stores whole integer numbers without fractional parts, `float` stores single-precision 32-bit floating-point decimal numbers, and `double` stores double-precision 64-bit floating-point numbers with higher precision.",comparisonTable:{headers:["Data Type","Typical Size","Format Specifier","Precision","Range"],rows:[["`int`","4 bytes (32-bit arch)","`%d` or `%i`","Whole numbers only","-2,147,483,648 to 2,147,483,647"],["`float`","4 bytes (32 bits)","`%f`","6 to 7 decimal digits","~1.2E-38 to ~3.4E+38"],["`double`","8 bytes (64 bits)","`%lf`","15 to 17 decimal digits","~2.3E-308 to ~1.7E+308"]]},codeExample:`#include <stdio.h>

int main() {
    int count = 42;
    float pi_f = 3.141592f;
    double pi_d = 3.141592653589793;

    printf("int: %d (size: %zu)\\n", count, sizeof(count));
    printf("float: %f (size: %zu)\\n", pi_f, sizeof(pi_f));
    printf("double: %lf (size: %zu)\\n", pi_d, sizeof(pi_d));
    return 0;
}`,interviewTip:"In `scanf()`, you must use `%f` for `float` and `%lf` for `double`. In `printf()`, `%f` works for both due to default argument promotions, but using `%lf` for double is modern best practice."}},{id:6,pdfId:"Q6",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Data Types",subtopic:"Type Modifiers",difficulty:"Basic",type:"Theory",question:"Explain the use of signed, unsigned, short, and long type modifiers.",answer:{directAnswer:"Type modifiers in C alter the data storage size or range of basic types (primarily `int` and `char`) to optimize memory and handle specific value ranges.",explanation:["**`signed`**: Stores both positive and negative values. The most significant bit (MSB) acts as the sign bit (0 for positive, 1 for negative). Default for integer types.","**`unsigned`**: Stores strictly non-negative values (0 and positive). The MSB is part of the magnitude, doubling the positive range (e.g. `unsigned int` is 0 to 4,294,967,295).","**`short`**: Restricts the integer to at least 16 bits (typically 2 bytes), reducing memory consumption when smaller values suffice.","**`long`**: Expands the integer size to at least 32 bits (and typically 64 bits on 64-bit systems), or `long double` for 80/128-bit floating-point numbers."],codeExample:`#include <stdio.h>

int main() {
    short int s = 32767;              // 2 bytes: -32768 to 32767
    unsigned short int us = 65535;    // 2 bytes: 0 to 65535
    long int l = 2147483647L;         // 4 or 8 bytes
    unsigned int u = 4000000000U;     // 4 bytes: 0 to 4.29 billion

    printf("short: %d, unsigned short: %u\\n", s, us);
    return 0;
}`,interviewTip:"Remember that assigning a negative value to an `unsigned int` does not cause a compilation error; it wraps around modulo $2^{32}$ into a very large positive number."}},{id:7,pdfId:"Q7",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Data Types",subtopic:"Type Casting",difficulty:"Medium",type:"Theory",question:"Differentiate between implicit and explicit type conversion with examples.",answer:{directAnswer:"Implicit type conversion (coercion) is performed automatically by the compiler to prevent data loss when mixing types, whereas explicit type conversion (type casting) is manually enforced by the programmer using the cast operator `(type)`.",comparisonTable:{headers:["Feature","Implicit Conversion (Widening)","Explicit Conversion (Type Casting)"],rows:[["Initiator","Performed automatically by compiler","Manually specified by programmer"],["Direction","Lower data type promoted to higher data type","Can be higher to lower or vice-versa"],["Data Loss","No loss of precision or information","May cause truncation or loss of precision"],["Syntax","Automatic: `int a = 5; float b = a;`","Cast operator: `(type)expression`"],["Example","`double d = 10; // 10 -> 10.0`","`int a = (int)3.99; // a becomes 3`"]]},codeExample:`#include <stdio.h>

int main() {
    int a = 5, b = 2;

    // Implicit: Integer division truncates to 2, then assigned to float 2.0
    float res1 = a / b;

    // Explicit: 'a' cast to float, forces floating-point division yielding 2.5
    float res2 = (float)a / b;

    printf("Implicit: %f\\n", res1); // 2.000000
    printf("Explicit: %f\\n", res2); // 2.500000
    return 0;
}`,interviewTip:"A classic interview viva trap is `float x = 5 / 2;`. Students expect 2.5, but in C `5 / 2` is integer division yielding `2`, which is then implicitly cast to `2.0`."}},{id:8,pdfId:"Q8",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Variables",subtopic:"Declaration vs Definition",difficulty:"Basic",type:"Theory",question:"What is the difference between declaration and definition of a variable?",answer:{directAnswer:"A variable declaration informs the compiler about the variable's name and type without allocating memory, while a variable definition specifies the type, name, and physically allocates storage in memory.",comparisonTable:{headers:["Aspect","Declaration","Definition"],rows:[["Memory Allocation","No memory is allocated","Memory is allocated immediately"],["Frequency","Can be declared multiple times","Can be defined only once in a scope"],["Compiler Role","Tells compiler: 'This entity exists elsewhere'","Allocates address space in RAM"],["Keyword used","Often preceded by `extern`","Type followed by name (e.g. `int x;`)"],["Example","`extern int counter;`","`int counter = 10;` or `int counter;`"]]},codeExample:`#include <stdio.h>

// Declaration: Tells compiler 'val' exists in some translation unit
extern int val; 

// Definition: Memory is allocated for 'total'
int total = 100; 

int main() {
    printf("total defined with memory = %d\\n", total);
    return 0;
}`,interviewTip:"In C, `int a;` outside or inside a function is both a declaration AND a tentative definition because storage is reserved."}},{id:9,pdfId:"Q9",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Variables",subtopic:"Scope and Lifetime",difficulty:"Medium",type:"Theory",question:"Explain scope and lifetime of a variable in C with an example.",answer:{directAnswer:"Scope defines the region of code where a variable can be accessed, while lifetime (storage duration) defines the time period during program execution in which the variable retains allocated memory.",explanation:["**Local Scope (Block Scope)**: Accessible only within the `{}` block where defined.","**Global Scope (File Scope)**: Accessible throughout the entire file from its declaration to the end.","**Automatic Lifetime**: Created on the stack when the block is entered, destroyed upon exit.","**Static Lifetime**: Retains memory for the entire program execution lifecycle."],codeExample:`#include <stdio.h>

int globalVar = 100; // Scope: Entire file | Lifetime: Program duration

void testFunction() {
    int localVar = 10;        // Scope: testFunction | Lifetime: Function call
    static int staticVar = 1; // Scope: testFunction | Lifetime: Program duration

    localVar++;
    staticVar++;
    printf("localVar=%d, staticVar=%d\\n", localVar, staticVar);
}

int main() {
    testFunction(); // localVar=11, staticVar=2
    testFunction(); // localVar=11, staticVar=3 (retained value!)
    return 0;
}`,interviewTip:"Note that a `static` local variable has local block scope (accessible only inside that function) but global static lifetime (persists across calls)."}},{id:10,pdfId:"Q10",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Arithmetic Operators",difficulty:"Basic",type:"Theory",question:"What is the difference between the modulus operator and the division operator?",answer:{directAnswer:"The division operator (`/`) returns the quotient of dividing two numbers, whereas the modulus operator (`%`) returns the remainder after integer division.",explanation:["**Division (`/`)**: Can be used on integers (truncates fractional part) and floating-point types (`float`, `double`).","**Modulus (`%`)**: Operates strictly on integer types (`int`, `char`, `long`). Applying `%` to floating-point operands causes a compilation error (for floating modulus, `fmod()` in `math.h` is used).","**Sign of Modulus**: In C99 and later, the sign of `a % b` matches the sign of the dividend `a` (`-7 % 3` is `-1`)."],codeExample:`#include <stdio.h>

int main() {
    int a = 14, b = 4;
    printf("Division (Quotient): 14 / 4 = %d\\n", a / b); // Output: 3
    printf("Modulus (Remainder): 14 %% 4 = %d\\n", a % b); // Output: 2

    float f = 14.0f / 4.0f;
    printf("Floating division: 14.0 / 4.0 = %.2f\\n", f); // Output: 3.50
    return 0;
}`,interviewTip:"Always remember: Division by zero (`x / 0` or `x % 0`) invokes undefined behavior and typically results in a runtime crash (`SIGFPE` / Floating point exception)."}},{id:11,pdfId:"Q11",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Relational Operators",difficulty:"Basic",type:"Theory",question:"Explain how relational operators are evaluated in C and what value they return.",answer:{directAnswer:"Relational operators in C compare two operands and evaluate to an integer boolean value: returning integer `1` if the condition is true, and integer `0` if the condition is false.",explanation:["**The Six Relational Operators**: `<` (less than), `<=` (less than or equal to), `>` (greater than), `>=` (greater than or equal to), `==` (equal to), `!=` (not equal to).","**Return Type**: Unlike languages with a native primitive boolean type, standard C evaluates relational expressions to type `int` (`1` or `0`).","**Associativity**: Relational operators associate from left to right. This causes subtle pitfalls: `a < b < c` is evaluated as `(a < b) < c` (comparing the result `0` or `1` with `c`)."],codeExample:`#include <stdio.h>

int main() {
    int a = 5, b = 10, c = 2;
    
    printf("5 < 10 returns: %d\\n", (a < b));  // 1 (true)
    printf("5 == 10 returns: %d\\n", (a == b)); // 0 (false)

    // Common Trap:
    // (a < b < c) => (5 < 10) < 2 => 1 < 2 => 1 (true!)
    printf("(5 < 10 < 2) returns: %d\\n", (a < b < c)); 
    return 0;
}`,interviewTip:"To check if `x` is between `a` and `b`, never write `a < x < b`. Always write `(a < x) && (x < b)`."}},{id:12,pdfId:"Q12",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Logical Operators",difficulty:"Basic",type:"Theory",question:"Differentiate between logical AND (&&) and bitwise AND (&) operators.",answer:{directAnswer:"Logical AND (`&&`) evaluates the truth value of two boolean expressions with short-circuiting, returning `1` or `0`, while bitwise AND (`&`) performs an individual bit-by-bit logical AND operation on the binary representations of integer operands.",comparisonTable:{headers:["Feature","Logical AND (`&&`)","Bitwise AND (`&`)"],rows:[["Operation","Combines boolean condition expressions","Operates on individual bits of numbers"],["Operands","Truth values (zero = false, non-zero = true)","Integers (binary bit patterns)"],["Return Value","Strictly `1` (true) or `0` (false)","Integer with corresponding bit results"],["Short-Circuit","Yes: if left operand is false, right is not evaluated","No: both operands are always evaluated"],["Example","`5 && 2` evaluates to `1` (true && true)","`5 & 2` -> `(101 & 010) = 000` -> `0`"]]},codeExample:`#include <stdio.h>

int main() {
    int a = 5; // 0101 in binary
    int b = 3; // 0011 in binary

    printf("Logical AND: 5 && 3 = %d\\n", a && b); // 1
    printf("Bitwise AND: 5 & 3  = %d\\n", a & b);  // 1 (0001 in binary)

    // Short-circuit demonstration:
    int x = 0;
    if (x && ++a) { } 
    printf("a is still %d (not incremented)\\n", a); // a = 5
    return 0;
}`,interviewTip:"Interviewers frequently test short-circuit evaluation: if the left operand of `&&` is 0, the right-hand operand is completely skipped (saving execution time and preventing null-pointer dereferences)."}},{id:13,pdfId:"Q13",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Assignment Operators",difficulty:"Basic",type:"Theory",question:"What are compound assignment operators? Give three examples.",answer:{directAnswer:"Compound assignment operators (shorthand assignment operators) combine a binary arithmetic or bitwise operation with the assignment operator into a single compact expression of the form `variable op= expression`.",explanation:["**Syntax**: `x op= y` is equivalent to `x = x op (y)`, but the left-hand operand `x` is evaluated only once.","**Common Compound Operators**: `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`.","**Performance & Safety**: Helps prevent duplicate side-effects when accessing complex lvalues like array indices: `arr[i++] += 5` increments `i` only once."],codeExample:`#include <stdio.h>

int main() {
    int x = 10;

    // Example 1: Additive assignment
    x += 5; // equivalent to x = x + 5 (x becomes 15)

    // Example 2: Multiplicative assignment
    x *= 2; // equivalent to x = x * 2 (x becomes 30)

    // Example 3: Modulus assignment
    x %= 7; // equivalent to x = x % 7 (x becomes 2)

    printf("Final x = %d\\n", x); // Output: 2
    return 0;
}`,interviewTip:"Notice operator precedence in compound assignments: `a *= b + 3` evaluates as `a = a * (b + 3)`, NOT `a = a * b + 3`."}},{id:14,pdfId:"Q14",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Increment/Decrement",difficulty:"Medium",type:"Theory",question:"Explain the difference between pre-increment and post-increment operators (++i vs i++).",answer:{directAnswer:"Pre-increment (`++i`) increments the variable's value by 1 first and then returns the newly updated value, whereas post-increment (`i++`) returns the current original value in the expression first and increments the variable afterward.",comparisonTable:{headers:["Operator","Syntax","Order of Execution","Returned Expression Value"],rows:[["Pre-increment","`++i`","Increment first, then use","Returns value after increment ($i + 1$)"],["Post-increment","`i++`","Use first, then increment","Returns original value before increment ($i$)"]]},codeExample:`#include <stdio.h>

int main() {
    int a = 5, b = 5;

    int pre = ++a; // a becomes 6, pre receives 6
    int post = b++; // post receives 5, b becomes 6

    printf("Pre-increment: a=%d, result=%d\\n", a, pre);   // a=6, result=6
    printf("Post-increment: b=%d, result=%d\\n", b, post); // b=6, result=5
    return 0;
}`,interviewTip:'Never modify the same variable more than once in a single expression (e.g. `printf("%d %d", i++, ++i)` or `a = i++ + ++i`). Doing so invokes undefined behavior in C standard specifications.'}},{id:15,pdfId:"Q15",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Bitwise Operators",difficulty:"Medium",type:"Theory",question:"Explain the working of bitwise AND, OR, XOR, and NOT operators with examples.",answer:{directAnswer:"Bitwise operators manipulate data at the individual binary bit level: AND (`&`) yields 1 only if both bits are 1; OR (`|`) yields 1 if at least one bit is 1; XOR (`^`) yields 1 if bits differ; and NOT (`~`) inverts all bits (one's complement).",comparisonTable:{headers:["Bit A","Bit B","AND (`A & B`)","OR (`A | B`)","XOR (`A ^ B`)","NOT (`~A`)"],rows:[["0","0","0","0","0","1"],["0","1","0","1","1","1"],["1","0","0","1","1","0"],["1","1","1","1","0","0"]]},codeExample:`#include <stdio.h>

int main() {
    unsigned char a = 5; // 0000 0101
    unsigned char b = 3; // 0000 0011

    printf("a & b = %d\\n", a & b); // 0000 0001 -> 1
    printf("a | b = %d\\n", a | b); // 0000 0111 -> 7
    printf("a ^ b = %d\\n", a ^ b); // 0000 0110 -> 6
    printf("~a    = %d\\n", (unsigned char)~a); // 1111 1010 -> 250
    return 0;
}`,interviewTip:"XOR has two famous interview properties: $x \\oplus x = 0$ and $x \\oplus 0 = x$. This is used to find the single non-repeating number in an array or swap two variables without extra memory."}},{id:16,pdfId:"Q16",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Bitwise Operators",difficulty:"Medium",type:"Theory",question:"What is the use of the left shift (<<) and right shift (>>) operators?",answer:{directAnswer:"Left shift (`<<`) shifts all bits to the left by $n$ positions, filling empty right bits with zeros (equivalent to multiplying by $2^n$). Right shift (`>>`) shifts bits to the right by $n$ positions (equivalent to integer division by $2^n$).",explanation:["**Left Shift (`x << n`)**: Multiplies `x` by $2^n$. E.g., `5 << 1` is $5 \\times 2^1 = 10$; `5 << 2` is $5 \\times 4 = 20$.","**Right Shift (`x >> n`)**: Divides `x` by $2^n$. E.g., `16 >> 2` is $16 / 4 = 4$.","**Logical vs Arithmetic Right Shift**: For `unsigned` types, empty left bits are always filled with 0. For `signed` negative types, sign bits (1s) are typically shifted in."],codeExample:`#include <stdio.h>

int main() {
    int a = 6;  // 0000 0110
    printf("6 << 2 = %d\\n", a << 2); // 6 * 4 = 24 (0001 1000)
    
    int b = 40; // 0010 1000
    printf("40 >> 3 = %d\\n", b >> 3); // 40 / 8 = 5 (0000 0101)
    return 0;
}`,interviewTip:"Shift operations are executed directly by ALU barrel shifters in a single CPU cycle, making them significantly faster than arithmetic multiplication or division in embedded C."}},{id:17,pdfId:"Q17",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Operators",subtopic:"Operator Precedence",difficulty:"Medium",type:"Theory",question:"What is operator precedence and associativity? Why are they important?",answer:{directAnswer:"Operator precedence determines which operator is evaluated first when an expression contains multiple different operators. Associativity determines the evaluation direction (left-to-right or right-to-left) when two operators have the same precedence.",explanation:["**Precedence**: High-precedence operators (like `*`, `/`) bind tighter than low-precedence ones (`+`, `-`). In `2 + 3 * 4`, multiplication occurs first ($2 + 12 = 14$).","**Associativity**: Most operators (arithmetic, relational, logical) are Left-to-Right (`10 - 5 - 2` -> `(10 - 5) - 2 = 3`). Unary operators (`++`, `--`, `*`, `&`), ternary (`?:`), and assignment operators (`=`, `+=`) are Right-to-Left (`a = b = c = 5`).","**Importance**: Essential for avoiding compiler evaluation bugs and ensuring unambiguous expressions."],codeExample:`#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 5;
    
    // '*' has higher precedence than '+'
    int r1 = a + b * c;     // 10 + (20 * 5) = 110
    
    // Parentheses override precedence
    int r2 = (a + b) * c;   // (10 + 20) * 5 = 150
    
    // Right-to-left associativity of assignment
    int x, y, z;
    x = y = z = 50; // z=50 first, then y=50, then x=50

    printf("r1=%d, r2=%d, x=%d\\n", r1, r2, x);
    return 0;
}`,interviewTip:"Best practice tip: When in doubt, always use parentheses `()` to make evaluation order completely explicit and readable."}},{id:18,pdfId:"Q18",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Decision Making",subtopic:"if-else vs switch",difficulty:"Basic",type:"Theory",question:"When should a switch statement be preferred over multiple if-else statements?",answer:{directAnswer:"A `switch` statement should be preferred when testing a single integral or character variable against multiple fixed discrete constant values (such as menu options, state machines, or error codes).",comparisonTable:{headers:["Aspect","`switch` Statement","`if-else` Chain"],rows:[["Condition Types","Only integer or character constants","Any relational, logical, or range expression"],["Execution Mechanism","Jump table / branch table (O(1) lookup)","Sequential checking of conditions (O(N))"],["Floating Points","Not allowed (`float` / `double` error)","Fully supported (`if (val > 3.14)`)"],["Readability","Clean, structured for multi-way branches","Can become messy with nested ladders"]]},codeExample:`#include <stdio.h>

int main() {
    char grade = 'B';
    // Clean, efficient jump-table execution:
    switch(grade) {
        case 'A': printf("Excellent!\\n"); break;
        case 'B': printf("Good job!\\n"); break;
        case 'C': printf("Fair.\\n"); break;
        default:  printf("Invalid grade.\\n"); break;
    }
    return 0;
}`,interviewTip:"Remember to always include `break;` at the end of every case; otherwise, execution falls through into the subsequent case regardless of its match."}},{id:19,pdfId:"Q19",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Decision Making",subtopic:"Nested Conditions",difficulty:"Basic",type:"Theory",question:"What is a dangling else problem in nested if-else statements?",answer:{directAnswer:"The dangling else problem is an ambiguity that arises in nested `if-else` statements without braces, where it is unclear to which `if` an `else` belongs. In C, the rule is that an `else` always pairs with the closest unmatched preceding `if`.",explanation:["**Ambiguity**: When writing nested `if` statements without curly braces `{}`, indentation might visually mislead the programmer, but the C compiler strictly matches `else` to the innermost open `if`.","**Solution**: Always enclose body statements inside curly braces `{}` to explicitly define scope."],codeExample:`#include <stdio.h>

int main() {
    int a = 5, b = 20;

    // Misleading visual indentation:
    if (a > 10)
        if (b > 10)
            printf("Both greater than 10\\n");
    else
        printf("Is this else for 'a' or 'b'?\\n"); 
    // In C, the 'else' matches 'if (b > 10)', so NOTHING is printed!

    // Clear and correct approach:
    if (a > 10) {
        if (b > 10) {
            printf("Both greater than 10\\n");
        }
    } else {
        printf("a is not greater than 10\\n");
    }
    return 0;
}`,interviewTip:"Golden coding rule for interviews: Never omit curly braces for conditional blocks, even for single-line statements."}},{id:20,pdfId:"Q20",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Loops",subtopic:"Loop Types",difficulty:"Basic",type:"Theory",question:"Differentiate between while, do-while, and for loops in C.",answer:{directAnswer:"`for` and `while` loops are entry-controlled loops where condition is checked before executing loop body (0 or more executions), while `do-while` is an exit-controlled loop where condition is checked after the body executes (guaranteeing at least 1 execution).",comparisonTable:{headers:["Feature","`for` Loop","`while` Loop","`do-while` Loop"],rows:[["Control Type","Entry-controlled","Entry-controlled","Exit-controlled"],["Syntax","`for (init; cond; upd)`","`while (cond)`","`do { ... } while (cond);`"],["Minimum Executions","0 times","0 times","1 time (always)"],["Best Used When","Number of iterations is known","Loop depends on condition, iterations unknown","Must execute at least once (e.g. Menu)"],["Trailing Semicolon","No semicolon after header","No semicolon after header","Mandatory semicolon: `while (cond);`"]]},codeExample:`#include <stdio.h>

int main() {
    int i = 10;

    // while loop: does not execute because 10 < 5 is false
    while (i < 5) {
        printf("while: %d\\n", i);
    }

    // do-while loop: executes body once before checking condition
    do {
        printf("do-while executed at least once! i=%d\\n", i);
    } while (i < 5);

    return 0;
}`,interviewTip:"Notice the semicolon `;` at the end of `do { ... } while (condition);`. Omitting it is a common syntax error."}},{id:21,pdfId:"Q21",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Loops",subtopic:"break and continue",difficulty:"Basic",type:"Theory",question:"Explain the difference between the break and continue statements.",answer:{directAnswer:"`break` terminates the entire enclosing loop or switch statement immediately, while `continue` skips the remainder of the current iteration and jumps directly to the loop's next iteration test.",comparisonTable:{headers:["Feature","`break` Statement","`continue` Statement"],rows:[["Action","Exits the entire loop immediately","Skips current iteration, starts next"],["Applicability","Can be used in loops (`for`, `while`, `do-while`) and `switch`","Can ONLY be used in loops (`for`, `while`, `do-while`)"],["Flow Control","Jumps to statement following the loop","Jumps to increment/condition check of loop"],["Use Case","Early termination upon finding an element","Bypassing specific unwanted iterations"]]},codeExample:`#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) continue; // Skips printing 3
        if (i == 5) break;    // Stops loop before printing 5
        printf("%d ", i);     // Output: 1 2 4 
    }
    return 0;
}`,interviewTip:"`continue` cannot be used inside a standalone `switch` block unless the switch is inside an outer loop (in which case continue affects the outer loop)."}},{id:22,pdfId:"Q22",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Loops",subtopic:"Infinite Loops",difficulty:"Basic",type:"Theory",question:"How is an infinite loop created intentionally in C? Give an example.",answer:{directAnswer:"An intentional infinite loop in C is created when the loop condition is made unconditionally non-zero (true) or omitted, commonly using `while(1)`, `for(;;)`, or `do { } while(1);`.",explanation:["**Real-world Use Cases**: Operating system event loops, embedded system firmware (`super-loops` in microcontrollers), and server listening daemons.","**Idioms in C**:","1. `while(1)`: Clear and widely used.","2. `for(;;)`: Standard canonical C idiom (the compiler knows condition is permanently true without evaluating any condition register).","3. Controlled termination inside the loop using `if (should_stop) break;`."],codeExample:`#include <stdio.h>

int main() {
    int count = 0;
    // Intentional infinite loop
    for (;;) {
        printf("Loop running: %d\\n", ++count);
        if (count >= 3) {
            break; // Controlled exit
        }
    }
    return 0;
}`,interviewTip:"In microcontroller programming (ARM, AVR, 8051), `while(1) { /* process sensors */ }` is the fundamental architecture preventing main from terminating."}},{id:23,pdfId:"Q23",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Functions",subtopic:"Function Basics",difficulty:"Basic",type:"Theory",question:"What is a function prototype and why is it necessary?",answer:{directAnswer:"A function prototype is a declaration statement that specifies the function's name, return type, and parameter types before its actual definition, enabling the compiler to perform type checking on calls.",explanation:["**Format**: `return_type function_name(param1_type, param2_type);`","**Necessity**:","1. **Type Checking**: Enables the compiler to verify whether arguments match parameter types and numbers, catching mismatches at compile time.","2. **Forward Declaration**: Allows calling functions defined later in the file or in other compilation units.","3. **Return Type Resolution**: Prevents the obsolete C assumption that undeclared functions return `int`."],codeExample:`#include <stdio.h>

// Function prototype (declaration)
double calculateArea(double radius);

int main() {
    double area = calculateArea(3.5); // Compiler verifies argument & return type
    printf("Area = %.2f\\n", area);
    return 0;
}

// Function definition
double calculateArea(double radius) {
    return 3.14159 * radius * radius;
}`,interviewTip:"In modern C (C99 and later), implicit function declarations are illegal. Calling a function without a prior declaration or prototype triggers a compiler warning or error."}},{id:24,pdfId:"Q24",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Functions",subtopic:"Call by Value vs Reference",difficulty:"Medium",type:"Theory",question:"Differentiate between Call by Value and Call by Reference with an example.",answer:{directAnswer:"In Call by Value, a copy of the actual variable's value is passed into the function (modifications do not affect original), while in Call by Reference (simulated in C via pointers), memory addresses are passed (modifications directly mutate original).",comparisonTable:{headers:["Feature","Call by Value","Call by Reference (via Pointers)"],rows:[["What is passed","A copy of the actual parameter's value","Memory address (`&var`) of the parameter"],["Memory Effect","Operates on temporary duplicate stack frame","Directly accesses original memory location"],["Original Value","Cannot be modified by the function","Can be modified using dereference (`*ptr`)"],["Overhead","Memory copied; slow for large structs","Only address (4/8 bytes) copied; very fast"],["Example","`swap(a, b);` (fails to swap)","`swap(&a, &b);` (successfully swaps)"]]},codeExample:`#include <stdio.h>

void swapByValue(int a, int b) {
    int t = a; a = b; b = t; // Only changes local copies
}

void swapByReference(int *a, int *b) {
    int t = *a; *a = *b; *b = t; // Directly alters caller's memory
}

int main() {
    int x = 10, y = 20;
    swapByValue(x, y);
    printf("After Call by Value: x=%d, y=%d\\n", x, y); // x=10, y=20 (Unchanged)

    swapByReference(&x, &y);
    printf("After Call by Reference: x=%d, y=%d\\n", x, y); // x=20, y=10 (Swapped!)
    return 0;
}`,interviewTip:"Strictly speaking, C only supports Call by Value! In C, 'Call by Reference' is simulated by passing the *value of a pointer*."}},{id:25,pdfId:"Q25",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Functions",subtopic:"Return Types",difficulty:"Basic",type:"Theory",question:"Can a function return more than one value in C? How can this be achieved?",answer:{directAnswer:"A C function can directly return only one value via the `return` statement. However, multiple values can be returned indirectly using Pointers (output arguments), Structures, Arrays, or Global variables.",explanation:["**Method 1: Pointers / Output Parameters (Most Common)**: Pass addresses of variables as arguments; the function stores results directly into them.","**Method 2: Structure**: Bundle multiple values into a custom `struct` and return the struct by value.","**Method 3: Array / Dynamic Memory**: Return a pointer to dynamically allocated memory (`malloc`) or a static array containing multiple elements."],codeExample:`#include <stdio.h>

// Approach 1: Using pointers as output parameters
void getMinMax(int arr[], int n, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

// Approach 2: Using struct
struct Result { int sum; float avg; };
struct Result calc(int a, int b) {
    struct Result r = { a + b, (a + b) / 2.0f };
    return r;
}

int main() {
    int arr[] = {3, 1, 9, 7};
    int mn, mx;
    getMinMax(arr, 4, &mn, &mx);
    printf("Min=%d, Max=%d\\n", mn, mx);
    return 0;
}`,interviewTip:"When returning multiple values using a struct, it is safe because C copies the entire struct across the stack upon return."}},{id:26,pdfId:"Q26",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Functions",subtopic:"Inline Functions",difficulty:"Medium",type:"Theory",question:"What is the significance of the inline keyword for functions in C?",answer:{directAnswer:"The `inline` keyword (introduced in C99) is a compiler hint requesting that the compiler replace function calls with the actual body of the function at compile time, eliminating the runtime overhead of function call branching and stack manipulation.",explanation:["**Eliminates Overhead**: Avoids pushing arguments onto the stack, saving registers, jumping to function address, and returning.","**Safety vs Macros**: Unlike `#define` preprocessor macros, inline functions provide full compiler type-checking and avoid side-effect errors (e.g. `SQUARE(x++)`).","**Trade-off (Code Bloat)**: Inlining large functions repeatedly increases the final binary size (cache thrashing). Therefore, only small, frequently called functions should be inlined.","**Compiler Discretion**: The `inline` keyword is merely a suggestion; modern optimizing compilers can ignore it if inlining is counterproductive."],codeExample:`#include <stdio.h>

// Compiler replaces max(a, b) with actual ternary comparison directly at call site
static inline int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int m = max(10, 20); // Fast inline expansion
    printf("Max = %d\\n", m);
    return 0;
}`,interviewTip:"Macro vs Inline function is an interview favorite: Mention that macros do pure textual substitution without type-checking, whereas inline functions are parsed and type-checked by the compiler."}},{id:27,pdfId:"Q27",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Recursion",subtopic:"Recursion Basics",difficulty:"Basic",type:"Theory",question:"What is recursion? What are the base case and recursive case?",answer:{directAnswer:"Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem. Every recursive function must have a Base Case (terminating condition) and a Recursive Case (self-call progressing toward the base case).",explanation:["**Base Case**: The stopping condition that returns a direct result without making further recursive calls. Without it, infinite recursion occurs, leading to Stack Overflow.","**Recursive Case**: The branch of the function where the problem is subdivided and the function calls itself with modified parameters that progressively move toward the base case."],codeExample:`#include <stdio.h>

int factorial(int n) {
    // 1. Base Case: stops recursion
    if (n <= 1) {
        return 1;
    }
    // 2. Recursive Case: calls itself with smaller sub-problem
    return n * factorial(n - 1);
}

int main() {
    printf("5! = %d\\n", factorial(5)); // Output: 120
    return 0;
}`,interviewTip:"Always write the Base Case as the very first line inside any recursive function."}},{id:28,pdfId:"Q28",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Recursion",subtopic:"Recursion vs Iteration",difficulty:"Medium",type:"Theory",question:"Compare recursion and iteration in terms of memory usage and performance.",answer:{directAnswer:"Iteration executes instructions repeatedly using loops with $O(1)$ constant memory on a single stack frame, whereas recursion allocates a new stack activation frame for every call ($O(N)$ auxiliary memory), causing higher memory consumption and function call overhead.",comparisonTable:{headers:["Criterion","Recursion","Iteration (Loops)"],rows:[["Memory Usage","High ($O(N)$ stack memory for activation records)","Low ($O(1)$ constant memory)"],["Execution Speed","Slower due to function call overhead","Faster directly executing loop jumps"],["Stack Overflow","Risk of Stack Overflow if depth is large","No stack overflow risk (infinite loop merely hangs)"],["Code Complexity","Clean, concise for trees, graphs, divide & conquer","Can require manual stacks for non-linear structures"],["Termination","Governed by Base Case","Governed by loop termination condition"]]},interviewTip:"Tail recursion is a special case where the recursive call is the final statement. Compilers can optimize tail recursion (Tail Call Optimization / TCO) into a flat iterative loop."}},{id:29,pdfId:"Q29",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Recursion",subtopic:"Stack Overflow",difficulty:"Medium",type:"Theory",question:"What causes a stack overflow error in a recursive function?",answer:{directAnswer:"A stack overflow error occurs when recursive function calls exceed the finite call-stack memory allocated to the program, exhausting stack capacity and causing a crash (Segmentation Fault).",explanation:["**Primary Causes**:","1. **Missing or Faulty Base Case**: The function has no termination condition and keeps calling itself indefinitely.","2. **Non-Converging Arguments**: Recursive calls do not diminish toward the base case (e.g., calling `f(n)` instead of `f(n-1)`).","3. **Excessive Recursion Depth**: Even with a valid base case, very deep recursion (e.g. $N = 1,000,000$) exhausts default stack size (typically 1MB-8MB).","4. **Large Local Variables**: Allocating huge arrays inside recursive functions rapidly burns stack frames."],codeExample:`#include <stdio.h>

// Dangerous function: No base case leads to STACK OVERFLOW
void crash(int count) {
    int bigArray[1000]; // Consumes 4000 bytes per frame!
    crash(count + 1);   // Infinite recursion -> Segmentation fault
}

int main() {
    // crash(1); // Do not run: causes Stack Overflow
    return 0;
}`,interviewTip:"Mention that the call stack stores local variables, parameter values, and return addresses for each call. When stack hits its limit, an OS hardware trap triggers a SIGSEGV."}},{id:30,pdfId:"Q30",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Arrays",subtopic:"Array Basics",difficulty:"Basic",type:"Theory",question:"Why are array indices in C always started from zero?",answer:{directAnswer:"Array indices in C start from 0 because the index represents an offset (distance) from the array's base memory address rather than an ordinal position.",explanation:["**Pointer Offset Formula**: In C, array subscript syntax `arr[i]` is internally evaluated as `*(arr + i)`.","**Base Address Calculation**: If array base address is `0x1000`, the first element is located at `0x1000 + (0 * sizeof(element))` = `0x1000`. Thus, offset `0` points directly to the start.","**Hardware Efficiency**: Starting from 0 saves an arithmetic subtraction instruction (like `address = base + (i - 1) * size`) on every array access, providing raw machine-level efficiency."],codeExample:`#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    
    // arr[0] is *(arr + 0) -> Base address + 0 bytes
    // arr[1] is *(arr + 1) -> Base address + 1 * sizeof(int)
    printf("arr[0] = %d via pointer *(arr+0) = %d\\n", arr[0], *(arr + 0));
    printf("arr[1] = %d via pointer *(arr+1) = %d\\n", arr[1], *(arr + 1));
    return 0;
}`,interviewTip:"Fun trivia: In C, `arr[i]` and `i[arr]` are mathematically identical because `*(arr + i)` is commutative!"}},{id:31,pdfId:"Q31",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Arrays",subtopic:"Array vs Pointer",difficulty:"Medium",type:"Theory",question:"Differentiate between an array and a pointer in C.",answer:{directAnswer:"An array is a fixed contiguous block of allocated memory whose base address is a constant pointer, whereas a pointer is a distinct variable that stores the memory address of another entity and can be reassigned.",comparisonTable:{headers:["Feature","Array (`int arr[5]`)","Pointer (`int *p`)"],rows:[["Definition","A contiguous collection of elements of same type","A variable holding memory address of a type"],["Memory Allocation","Allocated automatically at declaration ($5 \\times 4$ = 20 bytes)","Allocated for pointer variable itself (4 or 8 bytes)"],["Reassignment","Cannot be reassigned (`arr = ptr` is illegal error)","Can be reassigned (`p = arr`, `p = NULL`)"],["`sizeof` operator","Returns total memory occupied by all elements","Returns size of the pointer variable (4 or 8 bytes)"],["Arithmetic (`++`)","`arr++` is invalid (constant pointer)","`p++` is valid (advances to next memory location)"]]},codeExample:`#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p = arr;

    printf("sizeof(arr): %zu bytes\\n", sizeof(arr)); // 20 bytes (5 * 4)
    printf("sizeof(p):   %zu bytes\\n", sizeof(p));   // 8 bytes (on 64-bit machine)

    p++; // Valid: pointer advances to &arr[1]
    // arr++; // INVALID: compilation error (lvalue required)
    return 0;
}`,interviewTip:"Emphasize that an array name is not a pointer variable; it decays into a pointer value in most expressions."}},{id:32,pdfId:"Q32",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Arrays",subtopic:"2D Arrays",difficulty:"Medium",type:"Theory",question:"How is a 2D array stored in memory? Explain row-major order.",answer:{directAnswer:"In C, multidimensional arrays are stored in contiguous linear 1D physical RAM memory using **Row-Major Order**, meaning all elements of the first row are stored sequentially, followed by the second row, and so on.",explanation:["**Row-Major Storage**: For a 2D array `arr[R][C]`, row 0 (`arr[0][0], arr[0][1], ... arr[0][C-1]`) occupies the lowest addresses, followed immediately by row 1.","**Memory Address Formula**: The physical address of `arr[i][j]` is calculated as: $\\text{Address}(arr[i][j]) = \\text{BaseAddress} + (i \\times C + j) \\times \\text{sizeof}(element)$","**Cache Performance**: Iterating row-by-row (outer loop $i$, inner loop $j$) ensures sequential memory access, maximizing CPU cache line hits."],codeExample:`#include <stdio.h>

int main() {
    int arr[2][3] = { {10, 20, 30}, {40, 50, 60} };

    printf("Addresses in linear contiguous memory:\\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("arr[%d][%d] at %p = %d\\n", i, j, (void*)&arr[i][j], arr[i][j]);
        }
    }
    return 0;
}`,interviewTip:"In function prototypes accepting 2D arrays, specifying the column dimension is mandatory (e.g. `void func(int arr[][3])`), because the compiler needs $C$ to compute offsets."}},{id:33,pdfId:"Q33",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Arrays",subtopic:"Array as Function Argument",difficulty:"Medium",type:"Theory",question:"Why does an array decay into a pointer when passed to a function?",answer:{directAnswer:"An array decays into a pointer to its first element when passed to a function for performance and memory efficiency, avoiding the expensive overhead of copying entire array contents onto the call stack.",explanation:["**Array Decay**: When an array identifier appears in an expression (like an argument list), its type converts from `type[N]` to `type*`.","**Loss of Size Information**: Inside the receiving function, `sizeof(param)` returns the size of the pointer (4 or 8 bytes), NOT the size of the array. Hence, array length must always be passed as a separate argument.","**Syntax Equivalence**: In parameter lists, `int arr[]` and `int *arr` are treated identically by the compiler."],codeExample:`#include <stdio.h>

void printSize(int arr[], int n) {
    // arr decayed into int*
    printf("Inside function: sizeof(arr) = %zu bytes (pointer size!)\\n", sizeof(arr));
}

int main() {
    int myArr[10];
    printf("Inside main: sizeof(myArr) = %zu bytes (full array!)\\n", sizeof(myArr)); // 40 bytes
    printSize(myArr, 10); // 8 bytes on 64-bit OS
    return 0;
}`,interviewTip:"Always pass the size of an array as a companion parameter when passing arrays into C functions."}},{id:34,pdfId:"Q34",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Strings",subtopic:"String Basics",difficulty:"Basic",type:"Theory",question:"How are strings represented internally in C? What is the role of the null character?",answer:{directAnswer:"In C, strings are not a primitive data type but are represented as 1D arrays of characters terminated by a null character (`'\\0'`, ASCII value 0). The null character marks the end of the string.",explanation:["**Role of `'\\0'`**: Because C arrays do not record their length in memory, string processing functions (`strlen`, `strcpy`, `printf(\"%s\")`) sequentially scan characters until they encounter `\\0`.","**Memory Size**: A string literal of $N$ visible characters always occupies $N + 1$ bytes of memory to accommodate `'\\0'`.","**Missing Null Terminator Danger**: Without `'\\0'`, string functions keep reading adjacent memory until a zero byte happens to appear, resulting in garbage characters or a segmentation fault."],codeExample:`#include <stdio.h>

int main() {
    // "Hello" contains 5 letters + 1 '\\0' = 6 bytes
    char str[] = "Hello"; 

    printf("String: %s\\n", str);
    printf("sizeof(str): %zu bytes\\n", sizeof(str)); // 6

    // Showing ASCII codes:
    for (int i = 0; i < 6; i++) {
        printf("char[%d] = '%c' (ASCII %d)\\n", i, str[i], str[i]);
    }
    return 0;
}`,interviewTip:"Never confuse `'0'` (the character 0, ASCII 48) with `'\\0'` (null character, ASCII 0)."}},{id:35,pdfId:"Q35",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Strings",subtopic:"String Functions",difficulty:"Basic",type:"Theory",question:"Differentiate between strcpy() and strncpy() functions.",answer:{directAnswer:"`strcpy(dest, src)` copies the entire source string until it hits `\\0` without checking destination buffer size (vulnerable to buffer overflow), whereas `strncpy(dest, src, n)` safely copies at most $n$ characters.",comparisonTable:{headers:["Feature","`strcpy(dest, src)`","`strncpy(dest, src, n)`"],rows:[["Length Limit","No limit; copies until source `\\0`","Bounded: copies at most $n$ characters"],["Buffer Overflow Risk","High security risk if source > dest","Safer against buffer overflow"],["Null Termination","Guarantees null termination","Does NOT guarantee null termination if length >= $n$"],["Padding","No extra padding added","Pads destination with null bytes if source < $n$"],["Header Required","`<string.h>`","`<string.h>`"]]},codeExample:`#include <stdio.h>
#include <string.h>

int main() {
    char dest[6];
    // strncpy copies at most sizeof(dest)-1 characters
    strncpy(dest, "HelloWorld", sizeof(dest) - 1);
    dest[sizeof(dest) - 1] = '\\0'; // Crucial: explicitly ensure null termination!

    printf("Safe copy: %s\\n", dest); // "Hello"
    return 0;
}`,interviewTip:"Always remember: If source length is $\\ge n$, `strncpy` does NOT append `'\\0'`. You must manually set `dest[n-1] = '\\0'`."}},{id:36,pdfId:"Q36",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Strings",subtopic:"gets vs fgets",difficulty:"Medium",type:"Theory",question:"Why is gets() considered unsafe? How does fgets() overcome this issue?",answer:{directAnswer:"`gets()` is dangerous and deprecated in C99 (removed in C11) because it performs no buffer bounds checking, leading to buffer overflow and security vulnerabilities. `fgets()` solves this by accepting the maximum buffer size as an explicit parameter.",explanation:["**Vulnerability of `gets(buf)`**: If user types 100 characters into a 10-byte buffer, `gets()` writes past the buffer into adjacent stack memory, corrupting the return address (classic stack smashing exploit).","**Safety in `fgets(buf, size, stdin)`**: Reads at most `size - 1` characters and always appends `'\\0'` at the end, ensuring memory boundaries are strictly respected.","**Newline Difference**: `fgets()` retains the trailing newline character `'\\n'` if it fits in the buffer, whereas `gets()` discarded it."],codeExample:`#include <stdio.h>
#include <string.h>

int main() {
    char buffer[10];

    printf("Enter text: ");
    // Safe input reading:
    if (fgets(buffer, sizeof(buffer), stdin) != NULL) {
        // Strip trailing newline if present:
        buffer[strcspn(buffer, "\\n")] = '\\0';
        printf("Safely read: %s\\n", buffer);
    }
    return 0;
}`,interviewTip:"If asked in an interview 'Why was `gets()` removed from standard C?', state clearly: 'Because it is impossible to use `gets()` safely against malicious input that exceeds the buffer size.'"}},{id:37,pdfId:"Q37",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Storage Classes",subtopic:"Storage Class Types",difficulty:"Basic",type:"Theory",question:"List and briefly explain the four storage classes available in C.",answer:{directAnswer:"The four storage classes in C are `auto`, `register`, `static`, and `extern`. They define a variable's scope (visibility), lifetime (longevity), storage location, and default initial value.",comparisonTable:{headers:["Storage Class","Keyword","Storage","Default Value","Scope","Lifetime"],rows:[["Automatic","`auto`","Stack RAM","Garbage","Local block","Within function block"],["Register","`register`","CPU Register","Garbage","Local block","Within function block"],["Static","`static`","Data segment","Zero (`0`)","Local or File","Entire program execution"],["External","`extern`","Data segment","Zero (`0`)","Global / Multi-file","Entire program execution"]]},interviewTip:"Cannot take the address of a `register` variable using `&var` because CPU registers do not have memory RAM addresses!"}},{id:38,pdfId:"Q38",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Storage Classes",subtopic:"static keyword",difficulty:"Medium",type:"Theory",question:"What is the significance of the static keyword for a local variable?",answer:{directAnswer:"When applied to a local variable inside a function, `static` causes the variable to be allocated once in the data segment (initialized to zero by default) and retain its value between successive function calls across the entire program lifetime.",explanation:["**Persistence**: Normal local (`auto`) variables are destroyed when the function returns. A `static` local variable persists its state across calls.","**Scope**: Its visibility remains restricted to the local enclosing block (cannot be accessed outside that function).","**Single Initialization**: Initialization expression is evaluated only once during program startup before `main()` begins."],codeExample:`#include <stdio.h>

void visitCounter() {
    static int visits = 0; // Initialized only once!
    visits++;
    printf("Visit count: %d\\n", visits);
}

int main() {
    visitCounter(); // 1
    visitCounter(); // 2
    visitCounter(); // 3
    return 0;
}`,interviewTip:"What does `static` do to a global variable or function? It limits its linkage/scope strictly to the current source file, hiding it from other translation units (internal linkage)."}},{id:39,pdfId:"Q39",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Storage Classes",subtopic:"extern keyword",difficulty:"Medium",type:"Theory",question:"What is the purpose of the extern storage class specifier?",answer:{directAnswer:"The `extern` keyword declares a global variable or function without allocating memory, informing the compiler that the definition exists in another file or later in the current file.",explanation:["**Multi-file Projects**: Essential in C when multiple `.c` files need to access the same shared global variable.","**Prevents Duplicate Symbols**: If file A defines `int globalCount = 0;`, file B writes `extern int globalCount;` to use it without causing linker 'multiple definition' errors.","**Function Declarations**: All function prototypes are implicitly `extern` by default in C."],codeExample:`// --- In File1.c ---
int sharedCounter = 100; // Definition & storage allocation

// --- In File2.c ---
#include <stdio.h>
extern int sharedCounter; // Declaration: informs compiler it exists in File1.c

void display() {
    printf("Shared value = %d\\n", sharedCounter);
}`,interviewTip:"If you initialize an extern variable at file scope (`extern int x = 50;`), it becomes a definition, and memory is allocated."}},{id:40,pdfId:"Q40",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Pointers",subtopic:"Pointer Basics",difficulty:"Basic",type:"Theory",question:"What is a NULL pointer, and how is it different from an uninitialized pointer?",answer:{directAnswer:"A NULL pointer is a pointer explicitly assigned a value of `0` or `NULL`, indicating that it deliberately points to no valid memory location. An uninitialized pointer (wild pointer) contains an arbitrary garbage address.",comparisonTable:{headers:["Aspect","NULL Pointer","Uninitialized (Wild) Pointer"],rows:[["Value","Explicitly `0` / `((void*)0)`","Random garbage bit pattern from stack memory"],["Target","Guaranteed to point nowhere valid","Points to unpredictable memory address"],["Checkable","Easily checked with `if (ptr != NULL)`","Cannot be detected or verified safely"],["Dereferencing Result","Causes predictable, clean OS crash (SIGSEGV)","Corrupts memory or causes silent undefined behavior"]]},codeExample:`#include <stdio.h>

int main() {
    int *p1 = NULL; // Safe: explicitly indicates no target
    int *p2;        // WILD POINTER: points to unknown memory!

    if (p1 == NULL) {
        printf("p1 is safely recognized as NULL\\n");
    }
    // *p2 = 10; // DANGEROUS: Corrupts random memory!
    return 0;
}`,interviewTip:"Rule of thumb: Always initialize pointers to `NULL` if they do not yet have an immediate target."}},{id:41,pdfId:"Q41",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Pointers",subtopic:"Void Pointer",difficulty:"Medium",type:"Theory",question:"Differentiate between a NULL pointer and a void pointer.",answer:{directAnswer:"A NULL pointer is a pointer *value* representing the absence of an address (`0`), while a `void*` (generic pointer) is a pointer *data type* that can store the memory address of any data type without type-specific constraints.",comparisonTable:{headers:["Feature","NULL Pointer","Void Pointer (`void*`)"],rows:[["Nature","A specific pointer value (`(void*)0`)","A generic pointer data type"],["Purpose","Signals an invalid or empty pointer target","Enables generic programming (`malloc`, `qsort`)"],["Dereferencing","Illegal (crashes program)","Cannot be dereferenced directly without typecasting"],["Pointer Arithmetic","Not applicable","Cannot perform pointer arithmetic without cast (size unknown)"]]},codeExample:`#include <stdio.h>

int main() {
    int x = 42;
    void *vptr = &x; // Generic pointer holds address of an int

    // Direct dereference: *vptr is ILLEGAL
    // Must cast first:
    printf("Value = %d\\n", *(int*)vptr);

    int *nptr = NULL; // Pointer value representing nothing
    return 0;
}`,interviewTip:"`malloc()` returns a `void*`, allowing it to be assigned to any typed pointer (`int*`, `char*`) without explicit casting in C."}},{id:42,pdfId:"Q42",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Pointers",subtopic:"Pointer Arithmetic",difficulty:"Medium",type:"Theory",question:"Explain pointer arithmetic with an example of incrementing a pointer to an int array.",answer:{directAnswer:"Pointer arithmetic computes memory addresses scaled by the `sizeof(data_type)` of the pointer. Incrementing a pointer (`ptr++`) increases its stored address by `sizeof(*ptr)` bytes rather than by 1 byte.",explanation:["**Scaling Rule**: Address after `ptr + n` = $\\text{Current Address} + (n \\times \\text{sizeof}(*\\text{ptr}))$.","**Example with `int*`**: If an `int` takes 4 bytes and `ptr = 0x1000`, `ptr + 1` evaluates to `0x1004` (not `0x1001`).","**Valid Operations**: Adding/subtracting an integer to/from a pointer, subtracting two pointers of the same type (`ptr2 - ptr1` yields number of elements between them), comparing two pointers (`<`, `==`).","**Invalid Operations**: Adding two pointers, multiplying/dividing pointers."],codeExample:`#include <stdio.h>

int main() {
    int arr[] = {100, 200, 300};
    int *p = arr;

    printf("Initial address p:   %p, value: %d\\n", (void*)p, *p); // 100
    p++; // Advances address by 4 bytes (sizeof(int))
    printf("After p++ address:   %p, value: %d\\n", (void*)p, *p); // 200
    return 0;
}`,interviewTip:"Difference between `*(p++)`, `(*p)++`, and `*++p`: `*(p++)` uses current value then advances pointer; `(*p)++` increments the value pointed to; `*++p` advances pointer then accesses value."}},{id:43,pdfId:"Q43",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Pointers",subtopic:"Double Pointers",difficulty:"Medium",type:"Theory",question:"What is a pointer to a pointer? Give a practical use case.",answer:{directAnswer:"A pointer to a pointer (double pointer, declared with `**`) is a variable that stores the memory address of another pointer variable.",explanation:["**Syntax**: `int **pp;` where `pp` points to `p`, and `p` points to `int x`.","**Practical Use Cases**:","1. **Modifying a Pointer inside a Function**: To allocate or reassign a pointer inside a function so the caller's pointer changes (e.g. linked list insertions or dynamic memory allocation inside helper functions).","2. **Dynamic 2D Arrays**: Storing arrays of pointers to dynamically allocated rows (`int **matrix`).","3. **Command-Line Arguments**: Standard `int main(int argc, char **argv)` where `argv` is an array of strings."],codeExample:`#include <stdio.h>
#include <stdlib.h>

// Modifies caller's pointer by passing its address (&ptr)
void allocate(int **p) {
    *p = (int*)malloc(sizeof(int));
    **p = 99;
}

int main() {
    int *ptr = NULL;
    allocate(&ptr); // Pass address of pointer
    printf("Allocated value: %d\\n", *ptr); // 99
    free(ptr);
    return 0;
}`,interviewTip:"If a function needs to modify an `int`, you pass `int*`. If a function needs to modify an `int*`, you must pass `int**`!"}},{id:44,pdfId:"Q44",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Pointers",subtopic:"Function Pointers",difficulty:"Medium",type:"Theory",question:"What is a function pointer? Where is it commonly used?",answer:{directAnswer:"A function pointer is a pointer that stores the starting execution address of a function in the code/text segment of memory, allowing functions to be called dynamically and passed as arguments.",explanation:["**Syntax**: `return_type (*ptr_name)(param_types);`","**Parentheses Importance**: `int (*fp)(int, int)` is a function pointer. Without parentheses, `int *fp(int, int)` declares a regular function returning an `int*`.","**Common Use Cases**:","1. **Callbacks**: Passing custom handlers into generic functions (e.g. comparison function in `qsort()`).","2. **Event-driven systems**: Handling GUI events, hardware interrupts, and signal handlers.","3. **State Machines & Jump Tables**: Arrays of function pointers (`void (*states[3])()`)."],codeExample:`#include <stdio.h>

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

// Higher-order function taking a function pointer
void compute(int a, int b, int (*op)(int, int)) {
    printf("Result: %d\\n", op(a, b));
}

int main() {
    compute(5, 3, add);      // Pass add function -> Result: 8
    compute(5, 3, multiply); // Pass multiply function -> Result: 15
    return 0;
}`,interviewTip:"Remember the standard library `qsort` comparator prototype: `int compare(const void *a, const void *b)` is the quintessential function pointer."}},{id:45,pdfId:"Q45",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Dynamic Memory Allocation",subtopic:"malloc vs calloc",difficulty:"Basic",type:"Theory",question:"Differentiate between malloc() and calloc() functions.",answer:{directAnswer:"`malloc(size)` allocates a single uninitialized contiguous block of memory with garbage values, whereas `calloc(num, size)` allocates multiple contiguous blocks of memory and zeroes out all allocated bytes.",comparisonTable:{headers:["Feature","`malloc()`","`calloc()`"],rows:[["Full Name","Memory Allocation","Contiguous Allocation"],["Parameters","1 argument: `size_t total_bytes`","2 arguments: `size_t count, size_t size_each`"],["Initialization","Leaves memory uninitialized (contains garbage values)","Initializes all allocated bytes to zero (`0`)"],["Speed","Faster (avoids zeroing memory)","Slightly slower (must zero out all memory)"],["Syntax","`ptr = (int*)malloc(n * sizeof(int));`","`ptr = (int*)calloc(n, sizeof(int));`"]]},codeExample:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *m = (int*)malloc(3 * sizeof(int)); // m contains garbage
    int *c = (int*)calloc(3, sizeof(int)); // c[0], c[1], c[2] are all 0

    printf("calloc values: %d %d %d\\n", c[0], c[1], c[2]); // 0 0 0

    free(m);
    free(c);
    return 0;
}`,interviewTip:"Both return `NULL` if heap memory is exhausted. Always check `if (ptr == NULL)` before accessing dynamically allocated memory."}},{id:46,pdfId:"Q46",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Dynamic Memory Allocation",subtopic:"realloc and free",difficulty:"Medium",type:"Theory",question:"Explain the purpose of realloc() and free() functions with an example scenario.",answer:{directAnswer:"`realloc()` dynamically resizes a previously allocated memory block without losing its existing data, while `free()` deallocates heap memory back to the operating system to prevent memory leaks.",explanation:["**`realloc(ptr, new_size)` Mechanism**:","1. If contiguous space exists at the current location, it expands the block in place.","2. If contiguous space is not available, it allocates a new block elsewhere, copies existing data over, frees the old block, and returns the new pointer.","3. Returns `NULL` if memory reallocation fails.","**`free(ptr)` Mechanism**:","Releases the allocated block from the heap. After freeing, `ptr` becomes a **dangling pointer** unless reset to `NULL`."],codeExample:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)malloc(2 * sizeof(int));
    arr[0] = 10; arr[1] = 20;

    // Expand array from 2 elements to 4 elements
    int *temp = (int*)realloc(arr, 4 * sizeof(int));
    if (temp != NULL) {
        arr = temp;
        arr[2] = 30;
        arr[3] = 40;
        printf("Resized: %d %d %d %d\\n", arr[0], arr[1], arr[2], arr[3]);
    }

    free(arr);    // Free heap memory
    arr = NULL;   // Prevent dangling pointer
    return 0;
}`,interviewTip:"Never do `arr = realloc(arr, new_size)`. If realloc fails and returns `NULL`, the original memory pointer is lost, creating a memory leak! Always store in a temporary pointer first."}},{id:47,pdfId:"Q47",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Dynamic Memory Allocation",subtopic:"Memory Leak",difficulty:"Medium",type:"Theory",question:"What is a memory leak? How can it be avoided in a C program?",answer:{directAnswer:"A memory leak occurs when dynamically allocated heap memory (`malloc`/`calloc`/`realloc`) is no longer needed by the program but is never released via `free()`, making that memory unavailable to the system until the process terminates.",explanation:["**Consequences**: Long-running applications (like servers or daemons) gradually consume all available RAM, causing severe performance degradation and eventual crashes.","**Common Causes**:","1. Losing pointer reference before freeing (e.g. `p = malloc(10); p = malloc(20);`).","2. Returning early from a function (via `return` or error condition) without calling `free()`.","**How to Avoid**:","1. Follow the RAII principle: Every `malloc` must have a matching `free()`.","2. Set freed pointers to `NULL` immediately (`free(p); p = NULL;`).","3. Use memory debugging tools like **Valgrind** or AddressSanitizer (`-fsanitize=address`)."],codeExample:`#include <stdlib.h>

void safeFunction() {
    int *data = (int*)malloc(100 * sizeof(int));
    if (!data) return;

    // Perform operations...
    
    free(data);  // Crucial: Deallocate before exiting!
    data = NULL; // Safe practice
}`,interviewTip:"Interview viva: 'Does memory leak crash the program immediately?' Answer: No, it causes gradual memory depletion over time, degrading system responsiveness until out-of-memory."}},{id:48,pdfId:"Q48",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Structures",subtopic:"Structure vs Union",difficulty:"Medium",type:"Theory",question:"Differentiate between a structure and a union in terms of memory allocation.",answer:{directAnswer:"In a `struct`, every member gets its own separate memory location (total size is the sum of member sizes plus padding), whereas in a `union`, all members share the same single memory location (total size equals the size of the largest member).",comparisonTable:{headers:["Feature","Structure (`struct`)","Union (`union`)"],rows:[["Keyword","`struct`","`union`"],["Memory Allocation","Separate memory for each member","Single shared memory for all members"],["Total Size","Sum of members' sizes + alignment padding","Size of its largest data member"],["Member Access","All members can be accessed simultaneously","Only one member can hold valid data at any given time"],["Overwriting","Altering one member does not affect others","Altering one member overwrites other members"],["Use Case","Grouping related diverse attributes (e.g. Student)","Memory conservation / variant types (e.g. Hardware registers)"]]},codeExample:`#include <stdio.h>

struct S { int i; char c; double d; };
union U  { int i; char c; double d; };

int main() {
    printf("sizeof(struct S): %zu bytes\\n", sizeof(struct S)); // typically 16 bytes (padding)
    printf("sizeof(union U):  %zu bytes\\n", sizeof(union U));  // 8 bytes (size of double)
    return 0;
}`,interviewTip:"Unions are widely used in embedded systems to interpret the same raw memory bytes as different data representations (e.g. reading 4 bytes as an integer or as 4 individual bytes)."}},{id:49,pdfId:"Q49",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Structures",subtopic:"Nested Structures",difficulty:"Medium",type:"Theory",question:"What is a nested structure? Give an example of accessing its members.",answer:{directAnswer:"A nested structure is a structure that contains an instance of another structure as one of its members, enabling hierarchical data modeling.",explanation:["**Accessing Members**: Use chained dot operators (`outer.inner.member`) for structure variables, or arrow operator (`outerPtr->inner.member`) for pointers.","**Design**: Encapsulates logical groupings (e.g. putting an `Address` or `Date` structure inside an `Employee` structure)."],codeExample:`#include <stdio.h>

struct Date {
    int day, month, year;
};

struct Student {
    int id;
    char name[30];
    struct Date dob; // Nested structure member
};

int main() {
    struct Student s1 = {101, "Vijay", {15, 8, 2004}};

    // Access nested members with chained dot operators:
    printf("Student: %s, DOB: %02d/%02d/%d\\n", 
           s1.name, s1.dob.day, s1.dob.month, s1.dob.year);
    return 0;
}`,interviewTip:"A structure cannot contain an instance of itself (`struct Node n;` is illegal recursive sizing), but it CAN contain a pointer to itself (`struct Node *next;`), which forms the basis for self-referential structures like Linked Lists."}},{id:50,pdfId:"Q50",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Unions",subtopic:"Union Memory",difficulty:"Medium",type:"Theory",question:"How much memory does a union occupy? Explain with an example.",answer:{directAnswer:"A union occupies memory equal to the size of its largest member, rounded up to the nearest multiple of the strictest alignment requirement among its members.",explanation:["**Shared Memory Principle**: Because a union stores only one member at any given moment, the compiler allocates a single block big enough for the biggest type.","**Alignment Padding**: If the largest member is an array like `char arr[9]` (9 bytes) but the union also contains an `int` (4-byte alignment), the union size is padded to 12 bytes to align with 4-byte boundaries."],codeExample:`#include <stdio.h>

union Data {
    char ch;        // 1 byte
    int count;      // 4 bytes
    double salary;  // 8 bytes (largest member)
};

int main() {
    union Data d;
    printf("Size of union Data: %zu bytes\\n", sizeof(d)); // Exactly 8 bytes

    d.count = 100;
    printf("d.count = %d\\n", d.count);

    d.salary = 75000.50; // Overwrites d.count in memory!
    printf("d.salary = %.2f\\n", d.salary);
    printf("d.count is now corrupted: %d\\n", d.count);
    return 0;
}`,interviewTip:"Always mention alignment: 'Size is at least the size of the largest member, plus any padding required for member alignment.'"}},{id:51,pdfId:"Q51",sectionId:1,sectionName:"Section 1: Technical Interview Questions",topic:"Enumeration",subtopic:"enum Basics",difficulty:"Basic",type:"Theory",question:"What is an enum in C? What are the default values assigned to enum constants?",answer:{directAnswer:"An enumeration (`enum`) is a user-defined data type in C that consists of named integer constants, improving code readability and maintainability. By default, the first enum constant is assigned `0`, and each subsequent constant increments by `1`.",explanation:["**Default Sequence**: `enum Day { SUN, MON, TUE };` sets `SUN = 0`, `MON = 1`, `TUE = 2`.","**Custom Values**: Any constant can be explicitly assigned a value; unassigned following constants increment from the preceding value.","**Internal Type**: In C, enum constants are treated as integer constants of type `int`."],codeExample:`#include <stdio.h>

enum Status {
    SUCCESS = 0,
    FAILED = 1,
    PENDING = 5,
    TIMEOUT      // Automatically assigned 5 + 1 = 6
};

int main() {
    enum Status s = TIMEOUT;
    printf("PENDING: %d, TIMEOUT: %d\\n", PENDING, s); // 5, 6
    return 0;
}`,interviewTip:"Why use `enum` instead of `#define`? Enums are scoped, typed, visible in symbolic debuggers (like GDB), and generate sequential integers automatically."}},{id:52,pdfId:"Q51",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Prime Number",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Prime Number.",answer:{directAnswer:"A prime number is an integer greater than 1 that has no positive divisors other than 1 and itself. We test divisibility from 2 up to $\\sqrt{N}$ in $O(\\sqrt{N})$ time.",algorithmSteps:["1. Input integer $N$.","2. If $N \\le 1$, return false (not prime).","3. Loop $i$ from 2 up to $\\sqrt{N}$ ($i \\times i \\le N$):","   - If $N \\pmod i == 0$, return false (composite).","4. If no divisor is found, return true (prime)."],codeExample:`#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n = 29;
    printf("%d is %s\\n", n, isPrime(n) ? "PRIME" : "NOT PRIME");
    return 0;
}`,interviewTip:"Why loop only up to $\\sqrt{N}$? Because any factor larger than $\\sqrt{N}$ must have a corresponding paired factor smaller than $\\sqrt{N}$."}},{id:53,pdfId:"Q52",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Palindrome Number",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Palindrome Number.",answer:{directAnswer:"A palindrome number remains unchanged when its digits are reversed (e.g., 121, 1331). We extract digits from right to left, reverse the number, and compare with original.",algorithmSteps:["1. Store original number $N$ into variable `temp`.","2. Initialize `reversed = 0`.","3. While $N > 0$:","   - `rem = N % 10`","   - `reversed = (reversed * 10) + rem`","   - `N = N / 10`","4. If `temp == reversed`, it is a Palindrome; else, it is not."],codeExample:`#include <stdio.h>

int isPalindrome(int n) {
    int temp = n, rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return temp == rev;
}

int main() {
    int num = 1221;
    printf("%d is %s\\n", num, isPalindrome(num) ? "a Palindrome" : "Not a Palindrome");
    return 0;
}`,interviewTip:"Negative numbers are generally not palindromes because the minus sign is at the front."}},{id:54,pdfId:"Q53",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Armstrong Number",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Armstrong Number.",answer:{directAnswer:"An Armstrong (narcissistic) number is an $n$-digit number equal to the sum of its digits each raised to the power of $n$ (e.g. $153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$).",algorithmSteps:["1. Count total digits $d$ in the number $N$.","2. Initialize `sum = 0` and copy $N$ to `temp`.","3. While `temp > 0`:","   - Extract last digit: `rem = temp % 10`","   - Compute $rem^d$ and add to `sum`","   - `temp = temp / 10`","4. If `sum == N`, then $N$ is an Armstrong number."],codeExample:`#include <stdio.h>
#include <math.h>

int isArmstrong(int n) {
    int temp = n, digits = 0, sum = 0;
    while (temp > 0) { digits++; temp /= 10; }

    temp = n;
    while (temp > 0) {
        int rem = temp % 10;
        sum += (int)pow(rem, digits);
        temp /= 10;
    }
    return sum == n;
}

int main() {
    int n = 153;
    printf("%d is %s\\n", n, isArmstrong(n) ? "Armstrong" : "Not Armstrong");
    return 0;
}`,interviewTip:"Single-digit numbers (1-9) are all Armstrong numbers because $x^1 = x$."}},{id:55,pdfId:"Q54",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Strong Number",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Strong Number.",answer:{directAnswer:"A Strong number (or Krishnamurthy number) is a number whose sum of the factorials of all digits equals the number itself (e.g., $145 = 1! + 4! + 5! = 1 + 24 + 120 = 145$).",algorithmSteps:["1. Set `temp = N` and `sum = 0`.","2. While `temp > 0`:","   - `rem = temp % 10`","   - Compute factorial of `rem`","   - `sum += fact(rem)`","   - `temp = temp / 10`","3. If `sum == N`, print 'Strong Number'; otherwise print 'Not Strong'."],codeExample:`#include <stdio.h>

int factorial(int n) {
    int f = 1;
    for (int i = 2; i <= n; i++) f *= i;
    return f;
}

int isStrong(int n) {
    int temp = n, sum = 0;
    while (temp > 0) {
        sum += factorial(temp % 10);
        temp /= 10;
    }
    return sum == n;
}

int main() {
    int n = 145;
    printf("%d is %s\\n", n, isStrong(n) ? "Strong" : "Not Strong");
    return 0;
}`,interviewTip:"Pre-computing factorials for digits 0-9 in a lookup table array `int fact[10] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};` optimizes this to $O(D)$ runtime."}},{id:56,pdfId:"Q55",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Perfect Number",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Perfect Number.",answer:{directAnswer:"A Perfect Number is a positive integer that is equal to the sum of its proper positive divisors (excluding the number itself). For example, $6 = 1 + 2 + 3$, and $28 = 1 + 2 + 4 + 7 + 14$.",algorithmSteps:["1. Initialize `sum = 0`.","2. Loop $i$ from 1 to $N / 2$:","   - If $N \\pmod i == 0$, add $i$ to `sum`.","3. If `sum == N`, $N$ is a Perfect Number."],codeExample:`#include <stdio.h>

int isPerfect(int n) {
    if (n <= 1) return 0;
    int sum = 0;
    for (int i = 1; i <= n / 2; i++) {
        if (n % i == 0) sum += i;
    }
    return sum == n;
}

int main() {
    int n = 28;
    printf("%d is %s\\n", n, isPerfect(n) ? "Perfect" : "Not Perfect");
    return 0;
}`,interviewTip:"The first four perfect numbers are 6, 28, 496, and 8128."}},{id:57,pdfId:"Q56",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Neon Number",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Neon Number.",answer:{directAnswer:"A Neon number is a number where the sum of digits of its square is equal to the number itself. For example, $9$ is a Neon number because $9^2 = 81$, and $8 + 1 = 9$.",algorithmSteps:["1. Calculate square of $N$: `sq = N * N`.","2. Initialize `sum = 0`.","3. While `sq > 0`:","   - `sum += sq % 10`","   - `sq /= 10`","4. If `sum == N`, return true; else return false."],codeExample:`#include <stdio.h>

int isNeon(int n) {
    int sq = n * n;
    int sum = 0;
    while (sq > 0) {
        sum += sq % 10;
        sq /= 10;
    }
    return sum == n;
}

int main() {
    int n = 9;
    printf("%d is %s\\n", n, isNeon(n) ? "Neon Number" : "Not Neon");
    return 0;
}`,interviewTip:"Apart from 0 and 1, 9 is the only other known single-digit base-10 neon number."}},{id:58,pdfId:"Q57",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Reverse Number",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Reverse Number.",answer:{directAnswer:"Reversing a number involves extracting its digits one by one using modulo 10 and building the reversed number using base-10 multiplication.",algorithmSteps:["1. Initialize `rev = 0`.","2. While $N \\neq 0$:","   - Extract last digit: `d = N % 10`","   - Append digit: `rev = rev * 10 + d`","   - Remove last digit: `N = N / 10`","3. Return `rev`."],codeExample:`#include <stdio.h>

int reverseNumber(int n) {
    int rev = 0;
    while (n != 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return rev;
}

int main() {
    int n = 12345;
    printf("Reversed: %d\\n", reverseNumber(n)); // 54321
    return 0;
}`,interviewTip:"Watch out for integer overflow when reversing numbers that approach `INT_MAX`."}},{id:59,pdfId:"Q58",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Reverse Digits",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Reverse Digits.",answer:{directAnswer:"To print the digits of a number in reverse order, extract the remainder modulo 10 and print each digit immediately without reconstructing the integer.",algorithmSteps:["1. Input number $N$.","2. If $N == 0$, print 0 and exit.","3. While $N > 0$:","   - Print `N % 10`","   - `N = N / 10`"],codeExample:`#include <stdio.h>

void printReverseDigits(int n) {
    if (n == 0) { printf("0"); return; }
    while (n > 0) {
        printf("%d ", n % 10);
        n /= 10;
    }
    printf("\\n");
}

int main() {
    printReverseDigits(9876); // Output: 6 7 8 9
    return 0;
}`,interviewTip:"Printing digits directly avoids the risk of 32-bit integer overflow that can occur when reversing numbers near 2 billion."}},{id:60,pdfId:"Q59",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Count Digits",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Count Digits.",answer:{directAnswer:"Count digits by repeatedly dividing the integer by 10 until it becomes 0, incrementing a counter variable at each step, running in $O(\\log_{10} N)$ time.",algorithmSteps:["1. If $N == 0$, return 1.","2. Set `count = 0`.","3. While $N \\neq 0$:","   - `count = count + 1`","   - `N = N / 10`","4. Return `count`."],codeExample:`#include <stdio.h>

int countDigits(int n) {
    if (n == 0) return 1;
    if (n < 0) n = -n;
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}

int main() {
    printf("Digits in 74623: %d\\n", countDigits(74623)); // 5
    return 0;
}`,interviewTip:"Math shortcut for counting digits: `(int)log10(abs(n)) + 1`."}},{id:61,pdfId:"Q60",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Sum of Digits",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Sum of Digits.",answer:{directAnswer:"The sum of digits is found by continually adding the rightmost digit (`n % 10`) to an accumulator `sum` and dividing the number by 10 (`n / 10`) until $n$ reaches 0.",algorithmSteps:["1. Initialize `sum = 0`.","2. While $N > 0$:","   - `sum = sum + (N % 10)`","   - `N = N / 10`","3. Print / Return `sum`."],codeExample:`#include <stdio.h>

int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

int main() {
    printf("Sum of digits in 4567: %d\\n", sumOfDigits(4567)); // 4+5+6+7 = 22
    return 0;
}`,interviewTip:"Digital root (recursive sum of digits until a single digit remains) can be calculated in $O(1)$ time using modulo 9: `1 + (n - 1) % 9`."}},{id:62,pdfId:"Q61",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Product of Digits",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Product of Digits.",answer:{directAnswer:"Multiply each extracted digit (`n % 10`) into an accumulator initialized to 1, dividing $n$ by 10 until no digits remain.",algorithmSteps:["1. If $N == 0$, return 0.","2. Initialize `product = 1`.","3. While $N > 0$:","   - `product = product * (N % 10)`","   - `N = N / 10`","4. Return `product`."],codeExample:`#include <stdio.h>

int productOfDigits(int n) {
    if (n == 0) return 0;
    int prod = 1;
    while (n > 0) {
        prod *= (n % 10);
        n /= 10;
    }
    return prod;
}

int main() {
    printf("Product of digits for 234: %d\\n", productOfDigits(234)); // 2*3*4 = 24
    return 0;
}`,interviewTip:"Early exit optimization: If any extracted digit is 0, the overall product becomes 0 immediately."}},{id:63,pdfId:"Q62",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Even/Odd Check",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to perform Even/Odd Check.",answer:{directAnswer:"An integer is even if it is divisible by 2 with remainder 0 (`n % 2 == 0`) or if its least significant bit is 0 (`(n & 1) == 0`). Otherwise, it is odd.",algorithmSteps:["**Method 1 (Arithmetic)**: If $N \\pmod 2 == 0$, return Even; else return Odd.","**Method 2 (Bitwise - Faster)**: If $(N \\& 1) == 0$, return Even; else return Odd."],codeExample:`#include <stdio.h>

void checkEvenOdd(int n) {
    // Fast bitwise test on LSB (Least Significant Bit)
    if ((n & 1) == 0) {
        printf("%d is EVEN\\n", n);
    } else {
        printf("%d is ODD\\n", n);
    }
}

int main() {
    checkEvenOdd(14); // Even
    checkEvenOdd(27); // Odd
    return 0;
}`,interviewTip:"Bitwise check `(n & 1) == 0` is preferred in low-level programming because bit masking requires only 1 CPU clock cycle and works properly for negative numbers."}},{id:64,pdfId:"Q63",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Leap Year",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Leap Year.",answer:{directAnswer:"A year is a leap year if it is divisible by 4, except for end-of-century years (ending in 00), which must also be evenly divisible by 400: `(year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)`.",algorithmSteps:["1. Input year.","2. If `year % 400 == 0` -> Leap Year.","3. Else if `year % 100 == 0` -> Not a Leap Year.","4. Else if `year % 4 == 0` -> Leap Year.","5. Else -> Not a Leap Year."],codeExample:`#include <stdio.h>

int isLeapYear(int year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

int main() {
    printf("2000: %s\\n", isLeapYear(2000) ? "Leap" : "Not Leap"); // Leap (divisible by 400)
    printf("1900: %s\\n", isLeapYear(1900) ? "Leap" : "Not Leap"); // Not Leap (div by 100 but not 400)
    printf("2024: %s\\n", isLeapYear(2024) ? "Leap" : "Not Leap"); // Leap (div by 4)
    return 0;
}`,interviewTip:"Why is 1900 not a leap year while 2000 is? Century years must be divisible by 400."}},{id:65,pdfId:"Q64",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Factorial",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Factorial.",answer:{directAnswer:"The factorial of a non-negative integer $N$ ($N!$) is the product of all positive integers less than or equal to $N$, with $0! = 1$.",algorithmSteps:["1. Input non-negative integer $N$.","2. Initialize `fact = 1`.","3. Loop $i$ from 1 to $N$:","   - `fact = fact * i`","4. Return `fact`."],codeExample:`#include <stdio.h>

long long factorial(int n) {
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

int main() {
    printf("6! = %lld\\n", factorial(6)); // 720
    return 0;
}`,interviewTip:"Use `long long` for factorials because $13!$ already overflows a standard 32-bit signed integer."}},{id:66,pdfId:"Q65",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Fibonacci Series",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Fibonacci Series.",answer:{directAnswer:"In the Fibonacci sequence, each number is the sum of the two preceding ones, starting from 0 and 1: $F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$.",algorithmSteps:["1. Set $a = 0, b = 1$.","2. Print $a$ and $b$ (if $N \\ge 2$).","3. Loop from 3 to $N$:","   - $c = a + b$","   - Print $c$","   - $a = b$","   - $b = c$"],codeExample:`#include <stdio.h>

void printFibonacci(int n) {
    int a = 0, b = 1, next;
    for (int i = 1; i <= n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\\n");
}

int main() {
    printFibonacci(8); // 0 1 1 2 3 5 8 13
    return 0;
}`,interviewTip:"Iterative Fibonacci has $O(N)$ time and $O(1)$ space, whereas naive recursive Fibonacci has exponential $O(2^N)$ time complexity."}},{id:67,pdfId:"Q66",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Power Calculation",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Power Calculation.",answer:{directAnswer:"Power $B^E$ can be computed iteratively in $O(E)$ time, or via Binary Exponentiation (Fast Power) in $O(\\log E)$ time by repeatedly squaring the base.",algorithmSteps:["**Binary Exponentiation Algorithm ($O(\\log E)$)**:","1. Initialize `result = 1`.","2. While $E > 0$:","   - If $E$ is odd ($E \\pmod 2 == 1$), `result = result * B`.","   - `B = B * B`","   - `E = E / 2`","3. Return `result`."],codeExample:`#include <stdio.h>

long long fastPower(long long base, int exp) {
    long long res = 1;
    while (exp > 0) {
        if (exp & 1) res *= base; // If odd, multiply
        base *= base;             // Square base
        exp >>= 1;                // Divide exp by 2
    }
    return res;
}

int main() {
    printf("2^10 = %lld\\n", fastPower(2, 10)); // 1024
    return 0;
}`,interviewTip:"Binary exponentiation reduces 1,000,000 multiplications to only ~20 multiplications."}},{id:68,pdfId:"Q67",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"GCD",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print GCD.",answer:{directAnswer:"The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both without remainder, computed efficiently using Euclid's Algorithm: $\\gcd(a, b) = \\gcd(b, a \\pmod b)$ until $b = 0$.",algorithmSteps:["1. While $b \\neq 0$:","   - `temp = b`","   - `b = a % b`","   - `a = temp`","2. Return $a$."],codeExample:`#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) {
        int rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}

int main() {
    printf("GCD(36, 24) = %d\\n", gcd(36, 24)); // 12
    return 0;
}`,interviewTip:"Euclidean algorithm runs in logarithmic time $O(\\log(\\min(a, b)))$."}},{id:69,pdfId:"Q68",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"LCM",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print LCM.",answer:{directAnswer:"The Least Common Multiple (LCM) of two numbers $a$ and $b$ is computed using the mathematical relationship $\\text{LCM}(a, b) = (a \\times b) / \\text{GCD}(a, b)$.",algorithmSteps:["1. Compute $\\text{GCD}(a, b)$ using Euclid's algorithm.","2. Compute $\\text{LCM} = (a / \\text{GCD}(a, b)) \\times b$ (dividing first avoids premature integer overflow).","3. Return $\\text{LCM}$."],codeExample:`#include <stdio.h>

int gcd(int a, int b) {
    return (b == 0) ? a : gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}

int main() {
    printf("LCM(12, 18) = %d\\n", lcm(12, 18)); // 36
    return 0;
}`,interviewTip:"Always divide by GCD before multiplying (`(a / gcd) * b`) to prevent potential integer overflow during the multiplication step."}},{id:70,pdfId:"Q69",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Prime Numbers Between Two Numbers",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Prime Numbers Between Two Numbers.",answer:{directAnswer:"To print all prime numbers in range $[low, high]$, iterate through every number in the range and verify primality by checking trial division up to its square root.",algorithmSteps:["1. Input range `low` and `high`.","2. For each number $n$ from `low` to `high`:","   - If $n \\le 1$, skip.","   - Check if $n$ is divisible by any $i$ from 2 to $\\sqrt{n}$.","   - If no divisor found, print $n$."],codeExample:`#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

void printPrimes(int low, int high) {
    for (int i = low; i <= high; i++) {
        if (isPrime(i)) printf("%d ", i);
    }
    printf("\\n");
}

int main() {
    printPrimes(10, 30); // 11 13 17 19 23 29
    return 0;
}`,interviewTip:"For very large ranges (e.g. up to 10 million), mention the **Sieve of Eratosthenes** algorithm which finds all primes up to $N$ in $O(N \\log \\log N)$ time."}},{id:71,pdfId:"Q70",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Palindrome String",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Palindrome String.",answer:{directAnswer:"A palindrome string reads the same forwards and backwards (e.g., 'madam', 'racecar'). We use two pointers moving inward from both ends to compare matching characters.",algorithmSteps:["1. Initialize `left = 0` and `right = length - 1`.","2. While `left < right`:","   - If `str[left] != str[right]`, return false.","   - `left++`, `right--`.","3. Return true."],codeExample:`#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindromeString(const char *s) {
    int left = 0, right = strlen(s) - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    printf("'radar': %s\\n", isPalindromeString("radar") ? "Palindrome" : "Not Palindrome");
    return 0;
}`,interviewTip:"The two-pointer approach uses $O(N)$ time and $O(1)$ extra space, avoiding the need to allocate a second reversed string."}},{id:72,pdfId:"Q71",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Reverse String",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Reverse String.",answer:{directAnswer:"Reverse an in-place mutable character array using two pointers (one at the start, one at the end) swapping characters until they meet in the middle, running in $O(N)$ time and $O(1)$ space.",algorithmSteps:["1. Let `i = 0` and `j = strlen(str) - 1`.","2. While `i < j`:","   - Swap `str[i]` with `str[j]` using a temporary character.","   - `i++`, `j--`.","3. The string is now reversed in place."],codeExample:`#include <stdio.h>
#include <string.h>

void reverseString(char *s) {
    int i = 0, j = strlen(s) - 1;
    while (i < j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
}

int main() {
    char str[] = "EMBEDDED";
    reverseString(str);
    printf("Reversed: %s\\n", str); // DEDDEBME
    return 0;
}`,interviewTip:'Never attempt in-place reversal on a string literal (`char *s = "hello"; reverseString(s);`) because string literals are stored in read-only code segments (causes SegFault).'}},{id:73,pdfId:"Q72",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Count Vowels",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Count Vowels.",answer:{directAnswer:"Count vowels by traversing the string character by character, converting each letter to lowercase, and checking if it belongs to the set `{'a', 'e', 'i', 'o', 'u'}`.",algorithmSteps:["1. Initialize `vowels = 0`.","2. Loop through each character `c` in string until `'\\0'`:","   - Convert to lowercase: `ch = tolower(c)`.","   - If `ch` is `'a'`, `'e'`, `'i'`, `'o'`, or `'u'`, increment `vowels`.","3. Return `vowels`."],codeExample:`#include <stdio.h>
#include <ctype.h>

int countVowels(const char *s) {
    int count = 0;
    while (*s) {
        char ch = tolower(*s);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
        s++;
    }
    return count;
}

int main() {
    printf("Vowels in 'Campus Interview': %d\\n", countVowels("Campus Interview")); // 5
    return 0;
}`,interviewTip:"Always use `tolower()` from `<ctype.h>` so your logic handles both uppercase and lowercase characters cleanly."}},{id:74,pdfId:"Q73",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Count Words",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Count Words.",answer:{directAnswer:"Count words using a state flag (`inWord`): toggle the flag to true and increment count when transitioning from whitespace to a non-whitespace character.",algorithmSteps:["1. Set `wordCount = 0`, `inWord = 0`.","2. For each character `c` in string:","   - If `c` is space/tab/newline, set `inWord = 0`.","   - Else if `inWord == 0`, set `inWord = 1` and `wordCount++`.","3. Return `wordCount`."],codeExample:`#include <stdio.h>
#include <ctype.h>

int countWords(const char *s) {
    int count = 0, inWord = 0;
    while (*s) {
        if (isspace(*s)) {
            inWord = 0;
        } else if (!inWord) {
            inWord = 1;
            count++;
        }
        s++;
    }
    return count;
}

int main() {
    printf("Words: %d\\n", countWords("  C  is   fun to learn  ")); // 5
    return 0;
}`,interviewTip:"Using a state machine (`inWord` flag) cleanly handles multiple leading, trailing, and consecutive spaces."}},{id:75,pdfId:"Q74",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Linear Search",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to perform Linear Search.",answer:{directAnswer:"Linear search sequentially checks each element of the array from index 0 to $N-1$ until the target key is found or the array ends, running in $O(N)$ time on unsorted arrays.",algorithmSteps:["1. Loop $i$ from 0 to $N - 1$:","   - If `arr[i] == key`, return index $i$.","2. If loop terminates without match, return -1 (not found)."],codeExample:`#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i; // Found at index i
    }
    return -1; // Not found
}

int main() {
    int arr[] = {12, 45, 23, 78, 56};
    int idx = linearSearch(arr, 5, 23);
    printf("Key 23 found at index: %d\\n", idx); // 2
    return 0;
}`,interviewTip:"Linear search requires no pre-sorting and has $O(1)$ best-case and $O(N)$ worst-case time complexity."}},{id:76,pdfId:"Q75",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Binary Search",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to perform Binary Search.",answer:{directAnswer:"Binary search finds the target in a sorted array by repeatedly dividing the search interval in half. Compares key with middle element, narrowing search space to left or right half in $O(\\log N)$ time.",algorithmSteps:["1. Initialize `low = 0`, `high = n - 1`.","2. While `low <= high`:","   - `mid = low + (high - low) / 2`","   - If `arr[mid] == key`, return `mid`.","   - If `arr[mid] < key`, `low = mid + 1`.","   - If `arr[mid] > key`, `high = mid - 1`.","3. Return -1 if not found."],codeExample:`#include <stdio.h>

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2; // Prevents overflow
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int sorted[] = {10, 20, 30, 40, 50, 60};
    printf("Index of 40: %d\\n", binarySearch(sorted, 6, 40)); // 3
    return 0;
}`,interviewTip:"Why use `low + (high - low) / 2` instead of `(low + high) / 2`? Because `low + high` can overflow 32-bit signed integers for arrays larger than 1 billion elements!"}},{id:77,pdfId:"Q76",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Bubble Sort",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to perform Bubble Sort.",answer:{directAnswer:"Bubble Sort repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. The largest unsorted element 'bubbles up' to its correct position at the end in each pass.",algorithmSteps:["1. For $i = 0$ to $N - 2$:","   - Set `swapped = false`.","   - For $j = 0$ to $N - i - 2$:","     * If `arr[j] > arr[j + 1]`, swap them and set `swapped = true`.","   - If `swapped == false`, break early (array is already sorted)."],codeExample:`#include <stdio.h>
#include <stdbool.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // Optimized O(N) best case
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22};
    bubbleSort(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,interviewTip:"Always mention the `swapped` boolean flag optimization: it reduces best-case time complexity from $O(N^2)$ to $O(N)$ for nearly sorted inputs."}},{id:78,pdfId:"Q77",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Selection Sort",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to perform Selection Sort.",answer:{directAnswer:"Selection Sort divides the array into sorted and unsorted subarrays. It repeatedly finds the minimum element from the unsorted part and swaps it with the first unsorted element, making at most $O(N)$ swaps.",algorithmSteps:["1. Loop $i$ from 0 to $N - 2$:","   - Assume `min_idx = i`.","   - Loop $j$ from $i + 1$ to $N - 1$:","     * If `arr[j] < arr[min_idx]`, update `min_idx = j`.","   - Swap `arr[i]` with `arr[min_idx]`."],codeExample:`#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

int main() {
    int arr[] = {29, 10, 14, 37, 13};
    selectionSort(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,interviewTip:"Selection Sort performs the minimum number of swaps among elementary sorting algorithms ($O(N)$ swaps), making it useful when memory write operations are expensive (e.g. Flash/EEPROM memory)."}},{id:79,pdfId:"Q78",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Insertion Sort",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to perform Insertion Sort.",answer:{directAnswer:"Insertion Sort builds the final sorted array one element at a time by picking the next element (`key`) and shifting larger elements of the sorted prefix one position to the right to insert the key into its correct position (like sorting playing cards).",algorithmSteps:["1. Loop $i$ from 1 to $N - 1$:","   - Set `key = arr[i]` and `j = i - 1`.","   - While `j >= 0` and `arr[j] > key`:","     * `arr[j + 1] = arr[j]` (shift right)","     * `j = j - 1`","   - `arr[j + 1] = key` (insert into slot)"],codeExample:`#include <stdio.h>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    insertionSort(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,interviewTip:"Insertion sort is adaptive and stable, with $O(N)$ best-case time complexity, making it standard for small arrays ($N \\le 32$) in hybrid algorithms like TimSort."}},{id:80,pdfId:"Q79",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Second Largest Element",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Second Largest Element.",answer:{directAnswer:"Find the second largest element in a single traversal ($O(N)$ time) by tracking `first` (maximum seen so far) and `second`: when a new maximum is found, update `second` to the old `first`.",algorithmSteps:["1. Initialize `first = INT_MIN`, `second = INT_MIN`.","2. For each element $x$ in array:","   - If $x > first$: `second = first`, `first = x`.","   - Else if $x > second$ and $x \\neq first$: `second = x`.","3. Return `second`."],codeExample:`#include <stdio.h>
#include <limits.h>

int findSecondLargest(int arr[], int n) {
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return (second == INT_MIN) ? -1 : second;
}

int main() {
    int arr[] = {12, 35, 1, 10, 34, 35};
    printf("Second Largest: %d\\n", findSecondLargest(arr, 6)); // 34
    return 0;
}`,interviewTip:"Watch out for duplicate maximums! `arr[i] != first` prevents setting `second` to a duplicate of the largest value."}},{id:81,pdfId:"Q80",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Duplicate Elements",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Duplicate Elements.",answer:{directAnswer:"Find duplicate elements by comparing each element with subsequent elements in nested loops ($O(N^2)$ brute force) or using frequency hashing / sorting in $O(N \\log N)$ time.",algorithmSteps:["1. Loop $i$ from 0 to $N - 1$:","   - Loop $j$ from $i + 1$ to $N - 1$:","     * If `arr[i] == arr[j]`, print `arr[i]` as duplicate and break inner loop."],codeExample:`#include <stdio.h>

void printDuplicates(int arr[], int n) {
    printf("Duplicates: ");
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                printf("%d ", arr[i]);
                break;
            }
        }
    }
    printf("\\n");
}

int main() {
    int arr[] = {1, 2, 3, 2, 4, 5, 1};
    printDuplicates(arr, 7); // 1 2
    return 0;
}`,interviewTip:"If array elements are between $1$ and $N$, duplicates can be found in $O(N)$ time and $O(1)$ space by negating the value at index `abs(arr[i])`."}},{id:82,pdfId:"Q81",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Pattern Printing (Triangle)",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Pattern Printing (Triangle).",answer:{directAnswer:"Print an equilateral centered triangle pattern using nested loops: outer loop controls row number $i$, the first inner loop prints leading spaces $(N - i)$, and the second inner loop prints $(2i - 1)$ stars.",algorithmSteps:["1. Loop $i$ from 1 to $N$ (rows):","   - Loop $s$ from 1 to $N - i$: print `' '` (spaces).","   - Loop $k$ from 1 to $2i - 1$: print `'*'` (stars).","   - Print newline `\\n`."],codeExample:`#include <stdio.h>

void printPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int k = 1; k <= (2 * i - 1); k++) printf("*");
        printf("\\n");
    }
}

int main() {
    printPyramid(4);
    return 0;
}`,interviewTip:"Formula breakdown: Row $i$ requires $(N - i)$ spaces followed by $(2i - 1)$ stars."}},{id:83,pdfId:"Q82",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Star Patterns",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Star Patterns.",answer:{directAnswer:"Print a right-angled star triangle using an outer loop for row index $i$ (from 1 to $N$) and an inner loop printing $i$ stars per row.",algorithmSteps:["1. For $i = 1$ to $N$:","   - For $j = 1$ to $i$: print `'* '`.","   - Print newline `\\n`."],codeExample:`#include <stdio.h>

int main() {
    int n = 4;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`,interviewTip:"Always clearly separate the row loop (outer) from the column content loop (inner)."}},{id:84,pdfId:"Q83",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Number Patterns",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Number Patterns.",answer:{directAnswer:"Print sequential number patterns (like Floyd's Triangle) by maintaining a running counter incremented each time a number is printed across the inner loop.",algorithmSteps:["1. Initialize `count = 1`.","2. For $i = 1$ to $N$:","   - For $j = 1$ to $i$:","     * Print `count`.","     * `count++`.","   - Print newline."],codeExample:`#include <stdio.h>

// Floyd's Triangle
int main() {
    int n = 4, count = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%2d ", count++);
        }
        printf("\\n");
    }
    return 0;
}`,interviewTip:"Floyd's triangle of $N$ rows prints a total of $N(N + 1) / 2$ numbers."}},{id:85,pdfId:"Q84",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Alphabet Patterns",difficulty:"Medium",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Alphabet Patterns.",answer:{directAnswer:"Alphabet patterns are printed by mapping loop counters to ASCII character offsets starting from `'A'` ($65$) up to `'A' + j`.",algorithmSteps:["1. For $i = 0$ to $N - 1$:","   - For $j = 0$ to $i$:","     * Print character `'A' + j`.","   - Print newline."],codeExample:`#include <stdio.h>

int main() {
    int n = 4;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            printf("%c ", 'A' + j);
        }
        printf("\\n");
    }
    return 0;
}`,interviewTip:"In C, arithmetic with `char` types works directly with their underlying ASCII codes (`'A' + 1 == 'B'`)."}},{id:86,pdfId:"Q85",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Sum of Array Elements",difficulty:"Basic",type:"Pseudocode",question:"Write the algorithm/pseudocode to find/print Sum of Array Elements.",answer:{directAnswer:"Traverse the array sequentially from index 0 to $N-1$ using a loop, adding each element `arr[i]` to an accumulator variable `sum` initialized to 0 in $O(N)$ time.",algorithmSteps:["1. Set `sum = 0`.","2. For $i = 0$ to $N - 1$:","   - `sum = sum + arr[i]`","3. Return `sum`."],codeExample:`#include <stdio.h>

int sumArray(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    return sum;
}

int main() {
    int nums[] = {5, 10, 15, 20};
    printf("Array Sum = %d\\n", sumArray(nums, 4)); // 50
    return 0;
}`,interviewTip:"Always initialize `sum = 0` before the loop; omitting initialization leaves garbage memory in `sum`."}},{id:87,pdfId:"Q86",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"While vs For Loop",difficulty:"Medium",type:"Theory",question:"What is the difference between a while loop and a for loop? Explain with a scenario when you would prefer one over the other.",answer:{directAnswer:"A `for` loop bundles initialization, condition, and increment into a single header (best when the number of iterations is known beforehand), while a `while` loop checks only a condition (best when iterations depend on external events or input).",explanation:["**Scenario for `for` loop**: Iterating over fixed bounds like arrays (`for (int i = 0; i < 100; i++)`).",'**Scenario for `while` loop**: Reading input until EOF or sentinel: `while (scanf("%d", &val) != EOF)` or traversing a linked list `while (node != NULL)`.'],comparisonTable:{headers:["Aspect","`for` Loop","`while` Loop"],rows:[["Structure","All 3 loop control steps consolidated in header","Only condition in header; init & update separated"],["Best Used","Deterministic iterations (ranges, arrays)","Condition-driven / indeterminate iterations"],["Variable Scope","Loop counter scoped to loop in C99+","Counter typically declared outside the loop"]]},interviewTip:"Any `for` loop can be converted into a `while` loop and vice-versa; the choice is about semantic clarity."}},{id:88,pdfId:"Q87",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Array vs Pointer Usage",difficulty:"Medium",type:"Theory",question:"What is the difference between an array and a pointer, and when should each be used while designing a program?",answer:{directAnswer:"Use arrays when you have a fixed collection of elements whose size is known at compile-time and memory should be automatically managed on the stack. Use pointers when you need dynamic memory allocation, efficient parameter passing without copying, or building dynamic data structures like Linked Lists and Trees.",comparisonTable:{headers:["Design Factor","Choose Array","Choose Pointer"],rows:[["Memory Allocation","Fixed static/stack allocation","Dynamic heap allocation (`malloc`)"],["Size Flexibility","Fixed compile-time size","Dynamically resizable (`realloc`)"],["Overhead","Zero pointer overhead","4 or 8 bytes per pointer variable"],["Data Structures","Lookup tables, fixed matrix buffers","Linked lists, binary trees, graphs"]]},interviewTip:"In embedded software, statically sized arrays are often preferred over heap pointers to eliminate dynamic heap fragmentation and memory leaks."}},{id:89,pdfId:"Q88",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"SDLC Awareness",difficulty:"Medium",type:"Theory",question:"What is SDLC (Software Development Life Cycle)? Briefly explain its phases and why understanding it is useful for a programmer.",answer:{directAnswer:"SDLC is a structured engineering framework defining the complete lifecycle of software development from initial conception to retirement, ensuring high quality, predictable delivery, and defect reduction.",explanation:["**Core Phases of SDLC**:","1. **Requirement Analysis**: Gathering functional and non-functional specifications from stakeholders.","2. **System Design (Architecture)**: Defining architecture, database schemas, modules, and API contracts.","3. **Implementation (Coding)**: Writing clean, modular, standards-compliant source code.","4. **Testing & Verification**: Unit testing, integration testing, and bug fixing.","5. **Deployment**: Releasing to production environments.","6. **Maintenance**: Monitoring, patching bugs, and adding enhancements.","**Why Useful for Programmers**: Gives context on why code standards, test cases, and documentation are critical beyond just writing code."],interviewTip:"Common SDLC models include Waterfall, Agile/Scrum, and DevOps CI/CD."}},{id:90,pdfId:"Q89",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Call by Value vs Call by Reference",difficulty:"Medium",type:"Theory",question:"What is the difference between call by value and call by reference? Explain a situation where call by reference is necessary.",answer:{directAnswer:"In call by value, parameters receive local copies of argument values, leaving caller variables protected from change. In call by reference (via pointer arguments), memory addresses are passed, allowing functions to directly alter caller variables or return multiple results.",explanation:["**When Call by Reference is Necessary**:",'1. **Mutating Caller State**: Functions like `swap(&a, &b)` or `scanf("%d", &x)` that must modify the caller\'s variables.',"2. **Returning Multiple Values**: A function can return only one value via `return`, but can return unlimited values through pointer arguments.","3. **Passing Large Structures**: Passing `struct HeavyData *ptr` copies only 8 bytes rather than copying thousands of bytes onto the call stack."],codeExample:`#include <stdio.h>

// Call by reference is necessary to modify caller variables
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 100, y = 200;
    swap(&x, &y);
    printf("Swapped: x=%d, y=%d\\n", x, y); // 200, 100
    return 0;
}`,interviewTip:"Remember that `scanf` requires `&var` precisely because it relies on call-by-reference to write parsed inputs into your variable."}},{id:91,pdfId:"Q90",sectionId:2,sectionName:"Section 2: Programming Logic & Pseudocode",topic:"Programming Logic",subtopic:"Compile-Time vs Run-Time Errors",difficulty:"Medium",type:"Theory",question:"What is the difference between a compile-time error and a run-time error? Give one example of each.",answer:{directAnswer:"A compile-time error is detected by the compiler before program execution begins (preventing executable generation), while a run-time error occurs during actual program execution when an illegal operation is performed.",comparisonTable:{headers:["Aspect","Compile-Time Error","Run-Time Error"],rows:[["Detection Stage","During compilation (Syntax / Type check)","During execution while running"],["Executable Created?","No executable binary is produced","Executable exists but terminates abnormally"],["Causes","Syntax errors, missing semicolons, undeclared variables","Division by zero, NULL pointer dereference, buffer overflow"],["Fixability","Flagged with precise file and line numbers by compiler","Requires debuggers (GDB), logging, and boundary checks"]]},codeExample:`#include <stdio.h>

int main() {
    // Compile-time error example:
    // int a = 5   <-- Missing semicolon: Compiler catches this immediately!

    // Run-time error example:
    int x = 10, y = 0;
    // int z = x / y; // Division by zero: Compiles fine, crashes at runtime!
    printf("Safety checks prevent runtime crashes.\\n");
    return 0;
}`,interviewTip:"A third category is **Logical Error** (semantic bug): the program compiles and runs without crashing, but yields mathematically incorrect results."}},{id:92,pdfId:"Q91",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"Nested Loop Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i, j, k = 0;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= i; j++) {
            k += i * j;
        }
    }
    printf("%d", k);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i, j, k = 0;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= i; j++) {
            k += i * j;
        }
    }
    printf("%d", k);
    return 0;
}`,answer:{directAnswer:"The program executes a triangular nested loop accumulating the product $i \\times j$ into variable $k$, producing an exact output of **25**.",expectedOutput:"25",dryRunTable:{headers:["Outer loop (i)","Inner loop (j)","Calculation (k += i * j)","Resulting k"],rows:[["i = 1","j = 1","k = 0 + (1 * 1)","1"],["i = 2","j = 1","k = 1 + (2 * 1)","3"],["i = 2","j = 2","k = 3 + (2 * 2)","7"],["i = 3","j = 1","k = 7 + (3 * 1)","10"],["i = 3","j = 2","k = 10 + (3 * 2)","16"],["i = 3","j = 3","k = 16 + (3 * 3)","25"]]},explanation:["When $i=1$, inner loop runs for $j=1$: $k = 0 + 1 = 1$.","When $i=2$, inner loop runs for $j=1, 2$: $k = 1 + 2 + 4 = 7$.","When $i=3$, inner loop runs for $j=1, 2, 3$: $k = 7 + 3 + 6 + 9 = 25$.",'Outer loop terminates at $i=4$, and `printf("%d", k)` prints 25.'],interviewTip:"In triangular loops where $j \\le i$, total inner loop iterations equals $N(N + 1) / 2 = 3 \\times 4 / 2 = 6$ steps."}},{id:93,pdfId:"Q92",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"Loop with Multiple Conditions",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i = 0, sum = 0;
    while (i < 10) {
        if (i % 2 == 0 && i % 3 == 0) {
            sum += i;
        }
        i++;
    }
    printf("%d", sum);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i = 0, sum = 0;
    while (i < 10) {
        if (i % 2 == 0 && i % 3 == 0) {
            sum += i;
        }
        i++;
    }
    printf("%d", sum);
    return 0;
}`,answer:{directAnswer:"The program sums all numbers in the range $[0, 9]$ that are divisible by both 2 and 3 (i.e. multiples of 6). The matching numbers are 0 and 6, giving an output of **6**.",expectedOutput:"6",dryRunTable:{headers:["i","i % 2 == 0","i % 3 == 0","Condition Met?","sum update"],rows:[["0","True (0)","True (0)","YES","sum = 0 + 0 = 0"],["1-5","Various","Various","NO","sum = 0"],["6","True (0)","True (0)","YES","sum = 0 + 6 = 6"],["7-9","Various","Various","NO","sum = 6"]]},explanation:["A number is divisible by both 2 and 3 if and only if it is divisible by $\\text{LCM}(2, 3) = 6$.","Within $0 \\le i < 10$, only $i = 0$ and $i = 6$ satisfy this condition.","Sum = $0 + 6 = 6$."],interviewTip:"Remember that $0 \\pmod k == 0$ for any non-zero integer $k$."}},{id:94,pdfId:"Q93",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"For Loop with Comma Operator",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i, j;
    for (i = 0, j = 5; i < j; i++, j--) {
        printf("%d-%d ", i, j);
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i, j;
    for (i = 0, j = 5; i < j; i++, j--) {
        printf("%d-%d ", i, j);
    }
    return 0;
}`,answer:{directAnswer:"The comma operator in the initialization and update expressions allows manipulating two counters simultaneously moving toward each other, printing **0-5 1-4 2-3 **.",expectedOutput:"0-5 1-4 2-3 ",dryRunTable:{headers:["Iteration","i","j","Condition (i < j)","Printed Output","Next (i++, j--)"],rows:[["1","0","5","0 < 5 (True)","0-5 ","i=1, j=4"],["2","1","4","1 < 4 (True)","1-4 ","i=2, j=3"],["3","2","3","2 < 3 (True)","2-3 ","i=3, j=2"],["4","3","2","3 < 2 (False)","Loop Terminates","-"]]},explanation:["In iteration 1: $i=0, j=5 \\implies$ prints `0-5 `.","In iteration 2: $i=1, j=4 \\implies$ prints `1-4 `.","In iteration 3: $i=2, j=3 \\implies$ prints `2-3 `.","At the start of iteration 4: $i=3, j=2$, condition $i < j$ is false, terminating the loop."],interviewTip:"The comma operator has the lowest precedence in C and evaluates expressions from left to right, returning the value of the rightmost expression."}},{id:95,pdfId:"Q94",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Nested Function Calls",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int square(int x) { return x * x; }
int cube(int x) { return x * square(x); }
int main() {
    printf("%d", cube(square(2)));
    return 0;
}`,givenCode:`#include <stdio.h>
int square(int x) { return x * x; }
int cube(int x) { return x * square(x); }
int main() {
    printf("%d", cube(square(2)));
    return 0;
}`,answer:{directAnswer:"The innermost function `square(2)` is evaluated first returning 4, which is passed into `cube(4)` yielding $4 \\times 4^2 = 64$. Output is **64**.",expectedOutput:"64",explanation:["Step 1: Evaluate `square(2)`: $2 \\times 2 = 4$.","Step 2: Call `cube(4)`: returns $4 \\times \\text{square}(4)$.","Step 3: Inside `cube(4)`, `square(4)` returns $4 \\times 4 = 16$.","Step 4: `cube(4)` returns $4 \\times 16 = 64$.","Step 5: `printf` prints `64`."],interviewTip:"Function arguments in C are evaluated before the function call, and innermost nested function calls resolve first."}},{id:96,pdfId:"Q95",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Function with Static Local Variable",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int counter() {
    static int c = 10;
    c -= 2;
    return c;
}
int main() {
    printf("%d %d %d", counter(), counter(), counter());
    return 0;
}`,givenCode:`#include <stdio.h>
int counter() {
    static int c = 10;
    c -= 2;
    return c;
}
int main() {
    printf("%d %d %d", counter(), counter(), counter());
    return 0;
}`,answer:{directAnswer:"In standard C conventions with right-to-left argument evaluation (standard GCC/x86 calling convention), `counter()` evaluates from right to left as 8, then 6, then 4, printing **4 6 8**.",expectedOutput:"4 6 8",explanation:["The static variable `c` retains its value between calls.","Under C calling convention (`cdecl`), function arguments are pushed onto the stack from right to left:","1. Rightmost `counter()`: $c = 10 - 2 = 8$.","2. Middle `counter()`: $c = 8 - 2 = 6$.","3. Leftmost `counter()`: $c = 6 - 2 = 4$.","Printed left to right according to format string: `4 6 8`.","*(Note: In the C standard, order of evaluation of function arguments is unspecified; however, 4 6 8 is the expected answer in GCC/placement exams).*"],interviewTip:"This is a classic interview question highlighting that function argument evaluation order is unspecified by the ISO C standard, but typically right-to-left in GCC/Clang on x86."}},{id:97,pdfId:"Q96",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Function Returning Pointer",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int *getPtr(int *arr) {
    return arr + 2;
}
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = getPtr(arr);
    printf("%d", *p + *(p + 1));
    return 0;
}`,givenCode:`#include <stdio.h>
int *getPtr(int *arr) {
    return arr + 2;
}
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = getPtr(arr);
    printf("%d", *p + *(p + 1));
    return 0;
}`,answer:{directAnswer:"`getPtr(arr)` returns a pointer to `arr[2]` (value 30). Then `*p` is 30 and `*(p + 1)` is 40, so the expression evaluates to $30 + 40 =$ **70**.",expectedOutput:"70",explanation:["`arr` base address points to `arr[0] = 10`.","`getPtr(arr)` returns `arr + 2`, which points to index 2: `&arr[2]`.","`p` points to element `30`.","`*p` dereferences `arr[2]` (30).","`*(p + 1)` dereferences `arr[3]` (40).","Result: $30 + 40 = 70$."],interviewTip:"Returning a pointer to caller-allocated memory (`arr` in `main`) is completely safe; never return a pointer to a local `auto` variable allocated on the helper function's stack."}},{id:98,pdfId:"Q97",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Recursion",subtopic:"Mutual Style Recursion",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int fun(int n) {
    if (n <= 1) return 1;
    return n * fun(n - 1) + fun(n - 2);
}
int main() {
    printf("%d", fun(4));
    return 0;
}`,givenCode:`#include <stdio.h>
int fun(int n) {
    if (n <= 1) return 1;
    return n * fun(n - 1) + fun(n - 2);
}
int main() {
    printf("%d", fun(4));
    return 0;
}`,answer:{directAnswer:"Evaluating the recurrence relation bottom-up from base cases yields $fun(0)=1, fun(1)=1, fun(2)=3, fun(3)=10, fun(4)=43$. Exact output is **43**.",expectedOutput:"43",dryRunTable:{headers:["n","Recurrence Formula","Calculation","Return Value"],rows:[["0","Base Case","1","1"],["1","Base Case","1","1"],["2","2 * fun(1) + fun(0)","2 * 1 + 1","3"],["3","3 * fun(2) + fun(1)","3 * 3 + 1","10"],["4","4 * fun(3) + fun(2)","4 * 10 + 3","43"]]},explanation:["`fun(0) = 1` and `fun(1) = 1` from the base condition `if (n <= 1) return 1;`.","`fun(2) = 2 * fun(1) + fun(0) = 2(1) + 1 = 3`.","`fun(3) = 3 * fun(2) + fun(1) = 3(3) + 1 = 10`.","`fun(4) = 4 * fun(3) + fun(2) = 4(10) + 3 = 43`."],interviewTip:"Always solve tree-recursive problems bottom-up to avoid getting lost in recursive call stacks."}},{id:99,pdfId:"Q98",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Recursion",subtopic:"Recursion with Static Variable",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
void fun(int n) {
    static int sum = 0;
    if (n == 0) {
        printf("%d", sum);
        return;
    }
    sum += n;
    fun(n - 1);
}
int main() {
    fun(4);
    return 0;
}`,givenCode:`#include <stdio.h>
void fun(int n) {
    static int sum = 0;
    if (n == 0) {
        printf("%d", sum);
        return;
    }
    sum += n;
    fun(n - 1);
}
int main() {
    fun(4);
    return 0;
}`,answer:{directAnswer:"The static variable `sum` accumulates values across all recursive frames: $4 + 3 + 2 + 1 = 10$. When $n=0$, `printf` outputs **10**.",expectedOutput:"10",dryRunTable:{headers:["Call","n","Operation (sum += n)","Static sum value"],rows:[["fun(4)","4","sum += 4","4"],["fun(3)","3","sum += 3","7"],["fun(2)","2","sum += 2","9"],["fun(1)","1","sum += 1","10"],["fun(0)","0","Prints sum and returns","10"]]},explanation:["Because `sum` is `static`, its storage is allocated once in the data segment and shared across all recursive invocations.","Values 4, 3, 2, and 1 are sequentially added.",'When base case $n=0$ is reached, `printf("%d", sum)` prints 10.'],interviewTip:"Static variables inside recursive functions behave like global accumulators, but have localized scope inside that function."}},{id:100,pdfId:"Q99",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Recursion",subtopic:"Recursion Returning Multiple Paths",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int fun(int a, int b) {
    if (a == 0) return b;
    return fun(a - 1, a + b);
}
int main() {
    printf("%d", fun(3, 2));
    return 0;
}`,givenCode:`#include <stdio.h>
int fun(int a, int b) {
    if (a == 0) return b;
    return fun(a - 1, a + b);
}
int main() {
    printf("%d", fun(3, 2));
    return 0;
}`,answer:{directAnswer:"Each recursive step decrements `a` by 1 and adds the current `a` to `b`. Calling `fun(3, 2)` terminates at `fun(0, 8)`, returning **8**.",expectedOutput:"8",dryRunTable:{headers:["Step","Call","Parameters (a, b)","Next Call fun(a-1, a+b)"],rows:[["1","fun(3, 2)","a = 3, b = 2","fun(2, 5)"],["2","fun(2, 5)","a = 2, b = 5","fun(1, 7)"],["3","fun(1, 7)","a = 1, b = 7","fun(0, 8)"],["4","fun(0, 8)","a = 0, b = 8","Base case returns b = 8"]]},explanation:["Call 1: `fun(3, 2)` -> evaluates `fun(3 - 1, 3 + 2)` = `fun(2, 5)`.","Call 2: `fun(2, 5)` -> evaluates `fun(2 - 1, 2 + 5)` = `fun(1, 7)`.","Call 3: `fun(1, 7)` -> evaluates `fun(1 - 1, 1 + 7)` = `fun(0, 8)`.","Call 4: `fun(0, 8)` hits base case `if (a == 0) return b`, returning 8."],interviewTip:"This is tail recursion: the recursive call is the final expression, so no computation occurs on the unwinding phase."}},{id:101,pdfId:"Q100",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"Array with Pointer Arithmetic",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int *p = arr;
    printf("%d", *(p + 1) + *(arr + 3) - *(p + 4));
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int *p = arr;
    printf("%d", *(p + 1) + *(arr + 3) - *(p + 4));
    return 0;
}`,answer:{directAnswer:"Translating pointer dereferences into array elements: `arr[1] + arr[3] - arr[4] = 4 + 8 - 10 =` **2**.",expectedOutput:"2",explanation:["`p` points to `arr[0]`.","`*(p + 1)` is `arr[1] = 4`.","`*(arr + 3)` is `arr[3] = 8`.","`*(p + 4)` is `arr[4] = 10`.","Expression: $4 + 8 - 10 = 2$."],interviewTip:"`*(ptr + i)` and `ptr[i]` are 100% interchangeable in C."}},{id:102,pdfId:"Q101",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"2D Array Traversal",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int sum = 0, i, j;
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            if (i == j || i + j == 2) sum += arr[i][j];
    printf("%d", sum);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int sum = 0, i, j;
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            if (i == j || i + j == 2) sum += arr[i][j];
    printf("%d", sum);
    return 0;
}`,answer:{directAnswer:"The condition `i == j || i + j == 2` selects both main and anti-diagonal elements of the 3x3 matrix (forming an 'X'), summing $1 + 3 + 5 + 7 + 9 =$ **25**.",expectedOutput:"25",dryRunTable:{headers:["(i, j)","arr[i][j]","i == j","i + j == 2","Included?","Running sum"],rows:[["(0, 0)","1","True","False","Yes","1"],["(0, 1)","2","False","False","No","1"],["(0, 2)","3","False","True","Yes","4"],["(1, 0)","4","False","False","No","4"],["(1, 1)","5","True","True","Yes (center)","9"],["(1, 2)","6","False","False","No","9"],["(2, 0)","7","False","True","Yes","16"],["(2, 1)","8","False","False","No","16"],["(2, 2)","9","True","False","Yes","25"]]},interviewTip:"Notice that for center element `arr[1][1] = 5`, both conditions are true, but because of the logical OR (`||`), it is added only once."}},{id:103,pdfId:"Q102",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"Array Modification via Function",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
void modify(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++)
        arr[i] = arr[i] * 2 + 1;
}
int main() {
    int arr[4] = {1, 2, 3, 4}, i;
    modify(arr, 4);
    for (i = 0; i < 4; i++) printf("%d ", arr[i]);
    return 0;
}`,givenCode:`#include <stdio.h>
void modify(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++)
        arr[i] = arr[i] * 2 + 1;
}
int main() {
    int arr[4] = {1, 2, 3, 4}, i;
    modify(arr, 4);
    for (i = 0; i < 4; i++) printf("%d ", arr[i]);
    return 0;
}`,answer:{directAnswer:"Because array names decay to pointers, `modify()` directly updates the caller's array elements by $2x + 1$, printing **3 5 7 9 **.",expectedOutput:"3 5 7 9 ",explanation:["In C, arrays are passed by reference via pointers.","`arr[0]`: $1 \\times 2 + 1 = 3$","`arr[1]`: $2 \\times 2 + 1 = 5$","`arr[2]`: $3 \\times 2 + 1 = 7$","`arr[3]`: $4 \\times 2 + 1 = 9$","Printed with trailing spaces: `3 5 7 9 `."],interviewTip:"Modifications made to array parameters inside functions are permanently visible to the caller."}},{id:104,pdfId:"Q103",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Strings",subtopic:"String with Pointer Manipulation",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    char str[] = "PLACEMENT";
    char *p = str;
    while (*p) {
        if ((p - str) % 2 == 0) printf("%c", *p);
        p++;
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    char str[] = "PLACEMENT";
    char *p = str;
    while (*p) {
        if ((p - str) % 2 == 0) printf("%c", *p);
        p++;
    }
    return 0;
}`,answer:{directAnswer:"`p - str` yields the 0-based character index. The condition `(p - str) % 2 == 0` prints characters at even indices (0, 2, 4, 6, 8), outputting **PAEET**.",expectedOutput:"PAEET",dryRunTable:{headers:["Index (p - str)","Character *p","Index % 2 == 0","Printed?"],rows:[["0","'P'","True","'P'"],["1","'L'","False","-"],["2","'A'","True","'A'"],["3","'C'","False","-"],["4","'E'","True","'E'"],["5","'M'","False","-"],["6","'E'","True","'E'"],["7","'N'","False","-"],["8","'T'","True","'T'"]]},interviewTip:"Pointer subtraction `p - str` gives the exact integer element count (index offset) between two pointers of the same type."}},{id:105,pdfId:"Q104",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Strings",subtopic:"String Length via Recursion Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int myLen(char *s) {
    if (*s == '\\0') return 0;
    return 1 + myLen(s + 1);
}
int main() {
    printf("%d", myLen("SONA"));
    return 0;
}`,givenCode:`#include <stdio.h>
int myLen(char *s) {
    if (*s == '\\0') return 0;
    return 1 + myLen(s + 1);
}
int main() {
    printf("%d", myLen("SONA"));
    return 0;
}`,answer:{directAnswer:"The recursive function `myLen` advances through the string until hitting `'\\0'`, counting 4 characters in \"SONA\" to output **4**.",expectedOutput:"4",explanation:['`myLen("SONA") = 1 + myLen("ONA")`','`myLen("ONA")  = 1 + myLen("NA")`','`myLen("NA")   = 1 + myLen("A")`','`myLen("A")    = 1 + myLen("")`',"`myLen(\"\")     = 0` (base case: `*s == '\\0'`)","Unwinds: $1 + 1 + 1 + 1 + 0 = 4$."],interviewTip:"This is the classic recursive implementation of standard library `strlen()`."}},{id:106,pdfId:"Q105",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Strings",subtopic:"Nested String Comparison",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
#include <string.h>
int main() {
    char a[] = "abc", b[] = "abd";
    printf("%d", strcmp(a, b));
    return 0;
}`,givenCode:`#include <stdio.h>
#include <string.h>
int main() {
    char a[] = "abc", b[] = "abd";
    printf("%d", strcmp(a, b));
    return 0;
}`,answer:{directAnswer:"`strcmp` compares strings lexicographically by subtracting ASCII values of the first differing character: `'c' - 'd' = 99 - 100 =` **-1**.",expectedOutput:"-1",explanation:["`strcmp` compares characters from left to right:","Index 0: `'a' == 'a'` -> continues.","Index 1: `'b' == 'b'` -> continues.","Index 2: `'c'` vs `'d'` -> difference is `'c' - 'd' = 99 - 100 = -1`.","Returns negative integer (specifically -1 in standard libc), printed as `-1`."],interviewTip:"`strcmp(s1, s2)` returns: 0 if strings are equal, `< 0` if `s1 < s2`, and `> 0` if `s1 > s2`."}},{id:107,pdfId:"Q106",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Pointers",subtopic:"Pointer to Pointer Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int a = 5;
    int *p = &a;
    int **q = &p;
    **q = **q + 10;
    *p = *p + 5;
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 5;
    int *p = &a;
    int **q = &p;
    **q = **q + 10;
    *p = *p + 5;
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"Both `*p` and `**q` refer to the variable `a`. First `a` becomes $5 + 10 = 15$, then `a` becomes $15 + 5 = 20$. The output is **20**.",expectedOutput:"20",explanation:["`a` starts at 5.","`p` points to `a`, and `q` points to `p`.","`**q = **q + 10` dereferences twice, modifying `a`: $a = 5 + 10 = 15$.","`*p = *p + 5` dereferences once, modifying `a`: $a = 15 + 5 = 20$.",'`printf("%d", a)` prints 20.'],interviewTip:"Dereferencing a pointer-to-pointer `**q` directly accesses the target data location that `*q` points to."}},{id:108,pdfId:"Q107",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Pointers",subtopic:"Array of Pointers with Loop",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int a = 1, b = 2, c = 3;
    int *arr[3] = {&a, &b, &c};
    int i, sum = 0;
    for (i = 0; i < 3; i++) sum += *arr[i] * (i + 1);
    printf("%d", sum);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 1, b = 2, c = 3;
    int *arr[3] = {&a, &b, &c};
    int i, sum = 0;
    for (i = 0; i < 3; i++) sum += *arr[i] * (i + 1);
    printf("%d", sum);
    return 0;
}`,answer:{directAnswer:"The array of pointers holds the addresses of `a`, `b`, and `c`. The loop calculates $(1 \\times 1) + (2 \\times 2) + (3 \\times 3) = 1 + 4 + 9 =$ **14**.",expectedOutput:"14",explanation:["$i = 0$: `*arr[0] * 1 = *(&a) * 1 = 1 * 1 = 1`. `sum = 1`.","$i = 1$: `*arr[1] * 2 = *(&b) * 2 = 2 * 2 = 4`. `sum = 1 + 4 = 5`.","$i = 2$: `*arr[2] * 3 = *(&c) * 3 = 3 * 3 = 9`. `sum = 5 + 9 = 14`.","Final output: 14."],interviewTip:"`int *arr[3]` is an array of 3 pointers to int. Don't confuse it with `int (*arr)[3]`, which is a pointer to an array of 3 ints!"}},{id:109,pdfId:"Q108",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Pointers",subtopic:"Pointer Arithmetic with 2D Array",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[2][3] = {{1,2,3},{4,5,6}};
    int *p = &arr[0][0];
    printf("%d", *(p + 2) + *(p + 4));
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[2][3] = {{1,2,3},{4,5,6}};
    int *p = &arr[0][0];
    printf("%d", *(p + 2) + *(p + 4));
    return 0;
}`,answer:{directAnswer:"In row-major contiguous memory, `*(p + 2)` is `arr[0][2]` (value 3) and `*(p + 4)` is `arr[1][1]` (value 5). The sum $3 + 5 =$ **8**.",expectedOutput:"8",explanation:["In linear row-major memory order, the array elements are: `{1, 2, 3, 4, 5, 6}`.","`p` points to index 0 (value 1).","`*(p + 2)` points to index 2 (value 3).","`*(p + 4)` points to index 4 (value 5).","Expression: $3 + 5 = 8$."],interviewTip:"2D arrays in C are stored in flat contiguous memory, so `p[row * COLS + col]` is identical to `arr[row][col]`."}},{id:110,pdfId:"Q109",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Structures",subtopic:"Structure Passed to Function",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
struct Point { int x, y; };
void move(struct Point p) {
    p.x += 10;
    p.y += 10;
}
int main() {
    struct Point pt = {1, 2};
    move(pt);
    printf("%d %d", pt.x, pt.y);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Point { int x, y; };
void move(struct Point p) {
    p.x += 10;
    p.y += 10;
}
int main() {
    struct Point pt = {1, 2};
    move(pt);
    printf("%d %d", pt.x, pt.y);
    return 0;
}`,answer:{directAnswer:"`pt` is passed by value (a complete copy is made onto `move()`'s stack frame). Modifications inside `move()` do not alter the caller's structure, printing **1 2**.",expectedOutput:"1 2",explanation:["`move(struct Point p)` receives a copy of `pt`.","The modifications `p.x += 10` and `p.y += 10` only affect the local copy inside `move()`.","In `main()`, `pt.x` remains 1 and `pt.y` remains 2.","Output is `1 2`."],interviewTip:"Unlike arrays (which decay to pointers), structures in C are passed by value by default!"}},{id:111,pdfId:"Q110",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Structures",subtopic:"Structure Passed by Pointer",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
struct Point { int x, y; };
void move(struct Point *p) {
    p->x += 10;
    p->y += 10;
}
int main() {
    struct Point pt = {1, 2};
    move(&pt);
    printf("%d %d", pt.x, pt.y);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Point { int x, y; };
void move(struct Point *p) {
    p->x += 10;
    p->y += 10;
}
int main() {
    struct Point pt = {1, 2};
    move(&pt);
    printf("%d %d", pt.x, pt.y);
    return 0;
}`,answer:{directAnswer:"Here `&pt` is passed by address (pointer). The arrow operator `p->x` directly mutates `main`'s memory, yielding **11 12**.",expectedOutput:"11 12",explanation:["`move(&pt)` passes the memory address of `pt`.","`p->x += 10` changes `pt.x` from 1 to 11.","`p->y += 10` changes `pt.y` from 2 to 12.",'Inside `main`, `printf("%d %d", pt.x, pt.y)` outputs `11 12`.'],interviewTip:"Passing structures by pointer (`struct Type *`) is preferred in production code because it avoids the overhead of copying the entire structure."}},{id:112,pdfId:"Q111",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Structures",subtopic:"Array of Structures Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
struct Item { int price; };
int main() {
    struct Item items[3] = {{100}, {200}, {300}};
    int i, total = 0;
    for (i = 0; i < 3; i++)
        total += items[i].price * (i + 1);
    printf("%d", total);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Item { int price; };
int main() {
    struct Item items[3] = {{100}, {200}, {300}};
    int i, total = 0;
    for (i = 0; i < 3; i++)
        total += items[i].price * (i + 1);
    printf("%d", total);
    return 0;
}`,answer:{directAnswer:"The program computes a weighted sum of prices: $(100 \\times 1) + (200 \\times 2) + (300 \\times 3) = 100 + 400 + 900 =$ **1400**.",expectedOutput:"1400",dryRunTable:{headers:["i","items[i].price","(i + 1)","Term Added","Running total"],rows:[["0","100","1","100 * 1 = 100","100"],["1","200","2","200 * 2 = 400","500"],["2","300","3","300 * 3 = 900","1400"]]},explanation:["Iteration 0: `total = 0 + 100 * 1 = 100`.","Iteration 1: `total = 100 + 200 * 2 = 500`.","Iteration 2: `total = 500 + 300 * 3 = 1400`.","Loop ends, outputs 1400."],interviewTip:"Array of structures `items[i].member` uses dot operator because `items[i]` is a concrete structure element, not a pointer."}},{id:113,pdfId:"Q112",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Dynamic Memory Allocation",subtopic:"malloc with Loop Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    int i;
    for (i = 0; i < 5; i++) p[i] = i * i;
    printf("%d", p[2] + p[4]);
    free(p);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    int i;
    for (i = 0; i < 5; i++) p[i] = i * i;
    printf("%d", p[2] + p[4]);
    free(p);
    return 0;
}`,answer:{directAnswer:"The heap array stores squares of indices ${0, 1, 4, 9, 16}$. Then $p[2] + p[4] = 4 + 16 =$ **20**.",expectedOutput:"20",explanation:["`p[0] = 0*0 = 0`","`p[1] = 1*1 = 1`","`p[2] = 2*2 = 4`","`p[3] = 3*3 = 9`","`p[4] = 4*4 = 16`","Expression: $p[2] + p[4] = 4 + 16 = 20$."],interviewTip:"Always ensure `free(p)` is called to release heap memory."}},{id:114,pdfId:"Q113",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Dynamic Memory Allocation",subtopic:"calloc Default Values",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)calloc(4, sizeof(int));
    p[1] = 5;
    printf("%d %d %d", p[0], p[1], p[2]);
    free(p);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)calloc(4, sizeof(int));
    p[1] = 5;
    printf("%d %d %d", p[0], p[1], p[2]);
    free(p);
    return 0;
}`,answer:{directAnswer:"`calloc` initializes all allocated bytes to zero. After setting `p[1] = 5`, indices `p[0]` and `p[2]` remain 0, outputting **0 5 0**.",expectedOutput:"0 5 0",explanation:["`calloc(4, sizeof(int))` creates an array of 4 integers initialized to `{0, 0, 0, 0}`.","`p[1] = 5` modifies index 1: array is now `{0, 5, 0, 0}`.","`printf` prints `p[0]`, `p[1]`, `p[2]` as `0 5 0`."],interviewTip:"If this were `malloc`, `p[0]` and `p[2]` would contain unpredictable garbage values."}},{id:115,pdfId:"Q114",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Bitwise Operators",subtopic:"Combined Bitwise Expression",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int a = 12, b = 10;
    printf("%d", (a & b) | (a ^ b));
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 12, b = 10;
    printf("%d", (a & b) | (a ^ b));
    return 0;
}`,answer:{directAnswer:"Bitwise calculation: $a = 12$ (`1100_2`), $b = 10$ (`1010_2`). $(a \\& b) = 8$, $(a \\oplus b) = 6$, and $8 \\mid 6 = 14$. The output is **14**.",expectedOutput:"14",explanation:["$a = 12 = 1100_2$, $b = 10 = 1010_2$.","Bitwise AND: $1100_2 \\& 1010_2 = 1000_2 = 8$.","Bitwise XOR: $1100_2 \\oplus 1010_2 = 0110_2 = 6$.","Bitwise OR: $1000_2 \\mid 0110_2 = 1110_2 = 14$.","*(Mathematical identity: $(A \\& B) \\mid (A \\oplus B) \\equiv (A \\mid B) = 12 \\mid 10 = 14$)*."],interviewTip:"Boolean algebra fact: $(A \\cap B) \\cup (A \\oplus B) = A \\cup B$."}},{id:116,pdfId:"Q115",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Bitwise Operators",subtopic:"Shift Operators Combined",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int a = 5;
    a = (a << 2) | (a >> 1);
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 5;
    a = (a << 2) | (a >> 1);
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"$a = 5$ (`0000 0101_2`). Left shift $5 \\ll 2 = 20$ (`0001 0100_2`), right shift $5 \\gg 1 = 2$ (`0000 0010_2`). Bitwise OR gives $20 \\mid 2 = 22$. Output is **22**.",expectedOutput:"22",explanation:["`a << 2`: $5 \\times 2^2 = 20$ (`10100` in binary).","`a >> 1`: $5 / 2 = 2$ (`00010` in binary).","Bitwise OR: $10100_2 \\mid 00010_2 = 10110_2 = 16 + 4 + 2 = 22$."],interviewTip:"Bitwise shifting is equivalent to arithmetic multiplication and division by powers of 2."}},{id:117,pdfId:"Q116",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Bitwise Operators",subtopic:"Bit Toggle Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int a = 9;
    a = a ^ (1 << 1);
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 9;
    a = a ^ (1 << 1);
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"The expression `a ^ (1 << 1)` toggles the bit at position 1 (0-indexed). $9$ (`1001_2`) with bit 1 toggled to 1 becomes $11$ (`1011_2`). Output is **11**.",expectedOutput:"11",explanation:["`1 << 1` shifts 1 left by 1 position: `0010` in binary (value 2).","$a = 9 = 1001$ in binary.","$a \\oplus 2 = 1001_2 \\oplus 0010_2 = 1011_2 = 11$ in decimal.","Output: 11."],interviewTip:"Standard bit manipulation idioms: Set bit: `x |= (1 << k)`, Clear bit: `x &= ~(1 << k)`, Toggle bit: `x ^= (1 << k)`, Check bit: `(x >> k) & 1`."}},{id:118,pdfId:"Q117",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"Do-While with Break/Continue",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i = 0, sum = 0;
    do {
        i++;
        if (i % 2 == 0) continue;
        if (i > 7) break;
        sum += i;
    } while (i < 10);
    printf("%d", sum);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i = 0, sum = 0;
    do {
        i++;
        if (i % 2 == 0) continue;
        if (i > 7) break;
        sum += i;
    } while (i < 10);
    printf("%d", sum);
    return 0;
}`,answer:{directAnswer:"The loop increments `i` from 1 to 9. Even numbers trigger `continue`, odd numbers 1, 3, 5, 7 add to `sum`, and when $i=9$, `i > 7` triggers `break`. Total sum $1+3+5+7=$ **16**.",expectedOutput:"16",dryRunTable:{headers:["i value","i % 2 == 0?","i > 7?","sum action","sum"],rows:[["1","No","No","sum += 1","1"],["2","Yes (continue)","-","Skipped","1"],["3","No","No","sum += 3","4"],["4","Yes (continue)","-","Skipped","4"],["5","No","No","sum += 5","9"],["6","Yes (continue)","-","Skipped","9"],["7","No","No","sum += 7","16"],["8","Yes (continue)","-","Skipped","16"],["9","No","Yes (break!)","Loop ends","16"]]},interviewTip:"Pay close attention: at $i=8$, `continue` skips the `i > 7` check; at $i=9$, `i % 2 != 0`, so `i > 7` triggers `break` before adding 9!"}},{id:119,pdfId:"Q118",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Function with Default Global Access",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int x = 10;
int fun(int x) {
    x = x + 5;
    return x;
}
int main() {
    int result = fun(x);
    printf("%d %d", x, result);
    return 0;
}`,givenCode:`#include <stdio.h>
int x = 10;
int fun(int x) {
    x = x + 5;
    return x;
}
int main() {
    int result = fun(x);
    printf("%d %d", x, result);
    return 0;
}`,answer:{directAnswer:"The parameter `x` inside `fun` shadows the global variable `x`. The local parameter receives $10 + 5 = 15$, while global `x` in `main` remains untouched at 10. Output is **10 15**.",expectedOutput:"10 15",explanation:["Global `x` is defined as 10.","In `fun(int x)`, parameter `x` shadows (hides) global `x` within `fun`'s scope.","`fun` modifies only its local parameter `x`, returning 15.","In `main()`, `result` is assigned 15.",'When `printf("%d %d", x, result)` is called, `x` accesses global `x` (10), printing `10 15`.'],interviewTip:"Variable shadowing is an interview staple: local parameters always take precedence over global variables of the same name."}},{id:120,pdfId:"Q119",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Recursion",subtopic:"Recursive Array Sum via Pointer",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int sumArr(int *arr, int n) {
    if (n == 0) return 0;
    return *arr + sumArr(arr + 1, n - 1);
}
int main() {
    int arr[] = {1, 2, 3, 4};
    printf("%d", sumArr(arr, 4));
    return 0;
}`,givenCode:`#include <stdio.h>
int sumArr(int *arr, int n) {
    if (n == 0) return 0;
    return *arr + sumArr(arr + 1, n - 1);
}
int main() {
    int arr[] = {1, 2, 3, 4};
    printf("%d", sumArr(arr, 4));
    return 0;
}`,answer:{directAnswer:"The recursive function traverses the array by incrementing the pointer `arr + 1` at each step, summing all elements: $1 + 2 + 3 + 4 = $ **10**.",expectedOutput:"10",explanation:["`sumArr(arr, 4) = 1 + sumArr(arr+1, 3)`","`sumArr(arr+1, 3) = 2 + sumArr(arr+2, 2)`","`sumArr(arr+2, 2) = 3 + sumArr(arr+3, 1)`","`sumArr(arr+3, 1) = 4 + sumArr(arr+4, 0)`","`sumArr(arr+4, 0) = 0` (base case: $n=0$).","Total sum = $1 + 2 + 3 + 4 + 0 = 10$."],interviewTip:"Pointer arithmetic in recursion: `arr + 1` shifts the window forward by one element on each recursive frame."}},{id:121,pdfId:"Q120",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"Array Swap via Nested Loop",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[5] = {5, 3, 8, 1, 9}, i, j, temp;
    for (i = 0; i < 4; i++)
        for (j = 0; j < 4 - i; j++)
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
    printf("%d %d %d", arr[0], arr[2], arr[4]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[5] = {5, 3, 8, 1, 9}, i, j, temp;
    for (i = 0; i < 4; i++)
        for (j = 0; j < 4 - i; j++)
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
    printf("%d %d %d", arr[0], arr[2], arr[4]);
    return 0;
}`,answer:{directAnswer:"The nested loops implement standard Bubble Sort ascending order, sorting the array into ${1, 3, 5, 8, 9}$. Printing `arr[0]`, `arr[2]`, and `arr[4]` outputs **1 5 9**.",expectedOutput:"1 5 9",explanation:["Initial array: `{5, 3, 8, 1, 9}`.","The code is a classic Bubble Sort.","Sorted array: `{1, 3, 5, 8, 9}`.","`arr[0]` = 1 (minimum element).","`arr[2]` = 5 (median element).","`arr[4]` = 9 (maximum element).","Output: `1 5 9`."],interviewTip:"Recognizing standard sorting patterns instantly saves valuable time during written placement tests."}},{id:122,pdfId:"Q121",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Strings",subtopic:"Character Case Conversion Loop",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    char str[] = "cGate2026";
    int i;
    for (i = 0; str[i] != '\\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') str[i] = str[i] - 32;
    }
    printf("%s", str);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    char str[] = "cGate2026";
    int i;
    for (i = 0; str[i] != '\\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') str[i] = str[i] - 32;
    }
    printf("%s", str);
    return 0;
}`,answer:{directAnswer:"Subtracting 32 converts each lowercase letter into its uppercase ASCII equivalent ('a' -> 'A', 'c' -> 'C'). Digits and uppercase 'G' remain unaffected, printing **CGATE2026**.",expectedOutput:"CGATE2026",explanation:["ASCII of 'a' is 97, ASCII of 'A' is 65. The difference is 32.","Index 0: `'c'` (99) becomes `'C'` (67).","Index 1: `'G'` is already uppercase, unchanged.","Index 2: `'a'` becomes `'A'`.","Index 3: `'t'` becomes `'T'`.","Index 4: `'e'` becomes `'E'`.","Digits '2', '0', '2', '6' are outside the range `'a'` to `'z'`, so they remain unchanged.","Final string: `CGATE2026`."],interviewTip:"In standard C, `toupper()` from `<ctype.h>` performs this exact transformation safely."}},{id:123,pdfId:"Q122",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Pointers",subtopic:"Function Pointer Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int add(int a, int b) { return a + b; }
int mul(int a, int b) { return a * b; }
int main() {
    int (*fp)(int, int);
    fp = add;
    int r1 = fp(3, 4);
    fp = mul;
    int r2 = fp(3, 4);
    printf("%d %d", r1, r2);
    return 0;
}`,givenCode:`#include <stdio.h>
int add(int a, int b) { return a + b; }
int mul(int a, int b) { return a * b; }
int main() {
    int (*fp)(int, int);
    fp = add;
    int r1 = fp(3, 4);
    fp = mul;
    int r2 = fp(3, 4);
    printf("%d %d", r1, r2);
    return 0;
}`,answer:{directAnswer:"The function pointer `fp` is first assigned to `add`, returning $3 + 4 = 7$, then reassigned to `mul`, returning $3 \\times 4 = 12$. Output is **7 12**.",expectedOutput:"7 12",explanation:["`int (*fp)(int, int)` declares a function pointer taking two `int`s and returning `int`.","`fp = add`: Invoking `fp(3, 4)` executes `add(3, 4)`, returning `r1 = 7`.","`fp = mul`: Invoking `fp(3, 4)` executes `mul(3, 4)`, returning `r2 = 12`.","`printf` outputs `7 12`."],interviewTip:"Function names decay into pointers to their code address without needing an explicit `&` operator."}},{id:124,pdfId:"Q123",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Structures",subtopic:"Nested Structure Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
struct Address { int pin; };
struct Student { char name[10]; struct Address addr; };
int main() {
    struct Student s = {"Vijay", {636005}};
    s.addr.pin += 5;
    printf("%d", s.addr.pin);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Address { int pin; };
struct Student { char name[10]; struct Address addr; };
int main() {
    struct Student s = {"Vijay", {636005}};
    s.addr.pin += 5;
    printf("%d", s.addr.pin);
    return 0;
}`,answer:{directAnswer:"Nested structure member `s.addr.pin` is incremented by 5 from 636005 to **636010**.",expectedOutput:"636010",explanation:['`s` is initialized with name = "Vijay" and nested `addr.pin = 636005`.',"`s.addr.pin += 5` accesses the inner struct's pin code, updating it to $636005 + 5 = 636010$.","`printf` prints `636010`."],interviewTip:"Access nested structure elements using chained dot operators `outer.inner.field`."}},{id:125,pdfId:"Q124",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Dynamic Memory Allocation",subtopic:"realloc Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(2 * sizeof(int));
    p[0] = 1; p[1] = 2;
    p = (int *)realloc(p, 4 * sizeof(int));
    p[2] = 3; p[3] = 4;
    printf("%d", p[0] + p[1] + p[2] + p[3]);
    free(p);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(2 * sizeof(int));
    p[0] = 1; p[1] = 2;
    p = (int *)realloc(p, 4 * sizeof(int));
    p[2] = 3; p[3] = 4;
    printf("%d", p[0] + p[1] + p[2] + p[3]);
    free(p);
    return 0;
}`,answer:{directAnswer:"`realloc` preserves existing elements `{1, 2}` while extending the array to 4 slots. After populating `p[2]=3, p[3]=4`, the sum is $1 + 2 + 3 + 4 =$ **10**.",expectedOutput:"10",explanation:["Initial allocation stores `{1, 2}`.","`realloc` expands the capacity to 4 integers, preserving previous contents.","Indices 2 and 3 are set to 3 and 4.","Sum = $1 + 2 + 3 + 4 = 10$."],interviewTip:"`realloc()` guarantees that original data up to the minimum of old and new sizes remains intact."}},{id:126,pdfId:"Q125",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"Multiple Nested Loop with Break",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i, j, count = 0;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            if (j == 2) break;
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i, j, count = 0;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            if (j == 2) break;
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,answer:{directAnswer:"The `break` statement inside the inner loop triggers when $j = 2$, terminating the inner loop after only 1 iteration ($j = 1$) per outer cycle. Across 3 outer iterations, `count` becomes **3**.",expectedOutput:"3",dryRunTable:{headers:["Outer (i)","Inner (j)","j == 2?","Action","count"],rows:[["1","1","No","count++","1"],["1","2","Yes","break inner loop","1"],["2","1","No","count++","2"],["2","2","Yes","break inner loop","2"],["3","1","No","count++","3"],["3","2","Yes","break inner loop","3"]]},interviewTip:"`break` exits ONLY the innermost enclosing loop; it does not break out of outer loops."}},{id:127,pdfId:"Q126",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Recursive Function with Loop Inside",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int fun(int n) {
    int i, s = 0;
    if (n == 0) return 0;
    for (i = 1; i <= n; i++) s += i;
    return s + fun(n - 1);
}
int main() {
    printf("%d", fun(2));
    return 0;
}`,givenCode:`#include <stdio.h>
int fun(int n) {
    int i, s = 0;
    if (n == 0) return 0;
    for (i = 1; i <= n; i++) s += i;
    return s + fun(n - 1);
}
int main() {
    printf("%d", fun(2));
    return 0;
}`,answer:{directAnswer:"Each recursive frame computes the sum of numbers from 1 to $n$ ($s = n(n+1)/2$) and adds the result of `fun(n-1)`. Calling `fun(2)` returns $3 + 1 + 0 =$ **4**.",expectedOutput:"4",explanation:["Frame 1 (`n = 2`): loop computes $s = 1 + 2 = 3$. Calls `fun(1)`.","Frame 2 (`n = 1`): loop computes $s = 1$. Calls `fun(0)`.","Frame 3 (`n = 0`): base case returns 0.","Unwinding: `fun(1)` returns $1 + 0 = 1$. `fun(2)` returns $3 + 1 = 4$."],interviewTip:"Tracing frame-by-frame: identify what each frame computes locally before looking at the recursive contribution."}},{id:128,pdfId:"Q127",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Bitwise Operators",subtopic:"Bit Counting Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int n = 13, count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    printf("%d", count);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int n = 13, count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    printf("%d", count);
    return 0;
}`,answer:{directAnswer:"The loop counts the number of set bits (1s) in the binary representation of $13$ (`1101_2`), resulting in **3**.",expectedOutput:"3",dryRunTable:{headers:["Iteration","n (binary)","n & 1 (LSB)","count","n after n >>= 1"],rows:[["1","13 (1101)","1","1","6 (0110)"],["2","6 (0110)","0","1","3 (0011)"],["3","3 (0011)","1","2","1 (0001)"],["4","1 (0001)","1","3","0 (0000)"]]},interviewTip:"This is Brian Kernighan's algorithm territory: set bits can also be cleared in $O(\\text{set bits})$ using `n &= (n - 1)`."}},{id:129,pdfId:"Q128",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"Array Search with Sentinel",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[] = {4, 7, 2, 9, 5}, key = 9, i, pos = -1;
    for (i = 0; i < 5; i++) {
        if (arr[i] == key) {
            pos = i;
            break;
        }
    }
    printf("%d", pos);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[] = {4, 7, 2, 9, 5}, key = 9, i, pos = -1;
    for (i = 0; i < 5; i++) {
        if (arr[i] == key) {
            pos = i;
            break;
        }
    }
    printf("%d", pos);
    return 0;
}`,answer:{directAnswer:"Linear search checks indices 0, 1, 2 until finding `arr[3] == 9`. The `break` statement halts the loop and prints index **3**.",expectedOutput:"3",explanation:["$i = 0: arr[0] = 4 \\neq 9$","$i = 1: arr[1] = 7 \\neq 9$","$i = 2: arr[2] = 2 \\neq 9$","$i = 3: arr[3] = 9 == 9 \\implies pos = 3$, `break` exits loop.",'`printf("%d", pos)` outputs 3.'],interviewTip:"Using `break` on match optimizes average search time to $N/2$ iterations instead of always running $N$ times."}},{id:130,pdfId:"Q129",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Strings",subtopic:"Recursive Palindrome Check Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
#include <string.h>
int isPal(char *s, int l, int r) {
    if (l >= r) return 1;
    if (s[l] != s[r]) return 0;
    return isPal(s, l + 1, r - 1);
}
int main() {
    char str[] = "MADAM";
    printf("%d", isPal(str, 0, strlen(str) - 1));
    return 0;
}`,givenCode:`#include <stdio.h>
#include <string.h>
int isPal(char *s, int l, int r) {
    if (l >= r) return 1;
    if (s[l] != s[r]) return 0;
    return isPal(s, l + 1, r - 1);
}
int main() {
    char str[] = "MADAM";
    printf("%d", isPal(str, 0, strlen(str) - 1));
    return 0;
}`,answer:{directAnswer:`"MADAM" is a palindrome. The recursive check compares outermost letters moving inward: $s[0]==s[4]$ ('M'=='M'), $s[1]==s[3]$ ('A'=='A'), and reaches base case $l \\ge r$ at index 2 ('D'), returning **1**.`,expectedOutput:"1",dryRunTable:{headers:["Call","l","r","s[l] vs s[r]","Result / Next Step"],rows:[["isPal(str, 0, 4)","0","4","'M' == 'M'","Calls isPal(str, 1, 3)"],["isPal(str, 1, 3)","1","3","'A' == 'A'","Calls isPal(str, 2, 2)"],["isPal(str, 2, 2)","2","2","l >= r (True)","Base case returns 1"]]},interviewTip:"Base case `l >= r` correctly handles both odd-length (meeting at $l = r$) and even-length (crossing at $l > r$) palindromes."}},{id:131,pdfId:"Q130",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Pointers",subtopic:"Pointer to Structure Array",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
struct Emp { int id, sal; };
int main() {
    struct Emp e[3] = {{1,1000},{2,2000},{3,3000}};
    struct Emp *p = e;
    printf("%d", (p + 1)->sal + p->id);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Emp { int id, sal; };
int main() {
    struct Emp e[3] = {{1,1000},{2,2000},{3,3000}};
    struct Emp *p = e;
    printf("%d", (p + 1)->sal + p->id);
    return 0;
}`,answer:{directAnswer:"`p + 1` points to `e[1]`, so `(p + 1)->sal` is 2000. `p->id` accesses `e[0].id` which is 1. The total sum is $2000 + 1 =$ **2001**.",expectedOutput:"2001",explanation:["`p` points to `e[0]`.","`p + 1` advances by `sizeof(struct Emp)` bytes to `e[1]`.","`(p + 1)->sal` accesses member `sal` of `e[1]` = 2000.","`p->id` accesses member `id` of `e[0]` = 1.","Sum: $2000 + 1 = 2001$."],interviewTip:"Pointer arithmetic on structure pointers automatically scales by `sizeof(struct)`."}},{id:132,pdfId:"Q131",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"Loop Modifying Counter Inside Body",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 10; i++) {
        if (i == 3) i += 2;
        printf("%d ", i);
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 10; i++) {
        if (i == 3) i += 2;
        printf("%d ", i);
    }
    return 0;
}`,answer:{directAnswer:"When $i = 3$, it is increased by 2 to become 5 inside the loop body (printing 5). The loop step `i++` then increments it to 6, skipping 3 and 4 entirely. Output: **0 1 2 5 6 7 8 9 **.",expectedOutput:"0 1 2 5 6 7 8 9 ",dryRunTable:{headers:["Loop Start i","i == 3 Check","i after body","Printed","Next i (after i++)"],rows:[["0","False","0","0 ","1"],["1","False","1","1 ","2"],["2","False","2","2 ","3"],["3","True -> i += 2","5","5 ","6 (via i++)"],["6","False","6","6 ","7"],["7","False","7","7 ","8"],["8","False","8","8 ","9"],["9","False","9","9 ","10 (loop ends)"]]},interviewTip:"Modifying the loop index variable inside the loop body is dangerous in production, but a classic placement test trap!"}},{id:133,pdfId:"Q132",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Function Modifying Array via Pointer Return",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
void fill(int *arr, int n) {
    int i;
    for (i = 0; i < n; i++) *(arr + i) = (i + 1) * (i + 1);
}
int main() {
    int arr[4];
    fill(arr, 4);
    printf("%d", arr[1] + arr[3]);
    return 0;
}`,givenCode:`#include <stdio.h>
void fill(int *arr, int n) {
    int i;
    for (i = 0; i < n; i++) *(arr + i) = (i + 1) * (i + 1);
}
int main() {
    int arr[4];
    fill(arr, 4);
    printf("%d", arr[1] + arr[3]);
    return 0;
}`,answer:{directAnswer:"`fill` populates the array with squares of $(i + 1)$: ${1, 4, 9, 16}$. Then `arr[1] + arr[3] = 4 + 16 =` **20**.",expectedOutput:"20",explanation:["`arr[0] = (0 + 1)^2 = 1`","`arr[1] = (1 + 1)^2 = 4`","`arr[2] = (2 + 1)^2 = 9`","`arr[3] = (3 + 1)^2 = 16`","Result: $arr[1] + arr[3] = 4 + 16 = 20$."],interviewTip:"Array passed as pointer parameter `int *arr` allows the callee to directly write data into caller's array."}},{id:134,pdfId:"Q133",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Recursion",subtopic:"Recursive Power with Two Branches",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int power(int b, int e) {
    if (e == 0) return 1;
    if (e % 2 == 0) return power(b * b, e / 2);
    return b * power(b, e - 1);
}
int main() {
    printf("%d", power(2, 5));
    return 0;
}`,givenCode:`#include <stdio.h>
int power(int b, int e) {
    if (e == 0) return 1;
    if (e % 2 == 0) return power(b * b, e / 2);
    return b * power(b, e - 1);
}
int main() {
    printf("%d", power(2, 5));
    return 0;
}`,answer:{directAnswer:"This implements fast binary exponentiation to compute $2^5 = $ **32** in logarithmic $O(\\log E)$ recursive calls.",expectedOutput:"32",dryRunTable:{headers:["Call","b","e","Branch Taken","Evaluation"],rows:[["power(2, 5)","2","5","Odd: 2 * power(2, 4)","2 * 16 = 32"],["power(2, 4)","2","4","Even: power(4, 2)","returns 16"],["power(4, 2)","4","2","Even: power(16, 1)","returns 16"],["power(16, 1)","16","1","Odd: 16 * power(16, 0)","16 * 1 = 16"],["power(16, 0)","16","0","Base Case (e == 0)","returns 1"]]},interviewTip:"Binary exponentiation reduces recursive call depth from $O(E)$ down to $O(\\log E)$."}},{id:135,pdfId:"Q134",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"Two Array Interaction",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int a[3] = {1, 2, 3}, b[3], i;
    for (i = 0; i < 3; i++) b[i] = a[i] * a[2 - i];
    printf("%d %d %d", b[0], b[1], b[2]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a[3] = {1, 2, 3}, b[3], i;
    for (i = 0; i < 3; i++) b[i] = a[i] * a[2 - i];
    printf("%d %d %d", b[0], b[1], b[2]);
    return 0;
}`,answer:{directAnswer:"Each element of `b` is formed by multiplying symmetrical pairs from `a`: $b[0] = 1 \\times 3 = 3$, $b[1] = 2 \\times 2 = 4$, and $b[2] = 3 \\times 1 = 3$. Output is **3 4 3**.",expectedOutput:"3 4 3",explanation:["$i = 0$: `b[0] = a[0] * a[2] = 1 * 3 = 3`","$i = 1$: `b[1] = a[1] * a[1] = 2 * 2 = 4`","$i = 2$: `b[2] = a[2] * a[0] = 3 * 1 = 3`","Printed as: `3 4 3`."],interviewTip:"Index expression `(N - 1 - i)` accesses elements from the opposite end of an array."}},{id:136,pdfId:"Q135",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Structures",subtopic:"Union inside Structure Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
union Val { int i; char c; };
struct Box { union Val v; int tag; };
int main() {
    struct Box b;
    b.v.i = 321;
    b.tag = b.v.c;
    printf("%d", b.tag);
    return 0;
}`,givenCode:`#include <stdio.h>
union Val { int i; char c; };
struct Box { union Val v; int tag; };
int main() {
    struct Box b;
    b.v.i = 321;
    b.tag = b.v.c;
    printf("%d", b.tag);
    return 0;
}`,answer:{directAnswer:"In little-endian architecture (x86/ARM), integer $321$ is stored in hexadecimal as `0x00000141`. Accessing `b.v.c` reads the lowest byte `0x41`, which equals $65$ in decimal ('A'). Output is **65**.",expectedOutput:"65",explanation:["In `union Val`, members `int i` and `char c` overlap at the exact same base memory address.","$321_{10} = 256 + 65 = 0x00000141$.","On little-endian systems, least significant byte is stored at lowest address: byte 0 is `0x41` ($65$).","`b.v.c` reads byte 0 = 65.",'`b.tag` is assigned 65, and `printf("%d", b.tag)` outputs 65.'],interviewTip:"This tests both union memory sharing and endianness (byte ordering in RAM)."}},{id:137,pdfId:"Q136",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Dynamic Memory Allocation",subtopic:"2D Dynamic Array Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
#include <stdlib.h>
int main() {
    int **arr, i, j;
    arr = (int **)malloc(2 * sizeof(int *));
    for (i = 0; i < 2; i++) arr[i] = (int *)malloc(2 * sizeof(int));
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            arr[i][j] = i + j;
    printf("%d", arr[0][1] + arr[1][0] + arr[1][1]);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int **arr, i, j;
    arr = (int **)malloc(2 * sizeof(int *));
    for (i = 0; i < 2; i++) arr[i] = (int *)malloc(2 * sizeof(int));
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            arr[i][j] = i + j;
    printf("%d", arr[0][1] + arr[1][0] + arr[1][1]);
    return 0;
}`,answer:{directAnswer:"The 2x2 dynamic matrix has elements `arr[i][j] = i + j`: `arr[0][1] = 1`, `arr[1][0] = 1`, and `arr[1][1] = 2`. The sum $1 + 1 + 2 =$ **4**.",expectedOutput:"4",explanation:["`arr[0][0] = 0 + 0 = 0`","`arr[0][1] = 0 + 1 = 1`","`arr[1][0] = 1 + 0 = 1`","`arr[1][1] = 1 + 1 = 2`","Sum: $arr[0][1] + arr[1][0] + arr[1][1] = 1 + 1 + 2 = 4$."],interviewTip:"Dynamic 2D arrays require allocating an array of pointers (`int**`), then allocating each row array individually."}},{id:138,pdfId:"Q137",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Bitwise Operators",subtopic:"Swap Using XOR Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int a = 6, b = 11;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    printf("%d %d", a, b);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 6, b = 11;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    printf("%d %d", a, b);
    return 0;
}`,answer:{directAnswer:"This is the classic three-step bitwise XOR swap algorithm that swaps two variables without temporary storage, printing **11 6**.",expectedOutput:"11 6",dryRunTable:{headers:["Step","Operation","New Value of a","New Value of b"],rows:[["Initial","-","6","11"],["1","a = a ^ b","6 ^ 11 = 13","11"],["2","b = a ^ b","13","13 ^ 11 = 6 (original a)"],["3","a = a ^ b","13 ^ 6 = 11 (original b)","6"]]},interviewTip:"Beware: If `a` and `b` point to the exact same memory location (`&a == &b`), `a ^= a` zeroes out the memory!"}},{id:139,pdfId:"Q138",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"While Loop with Compound Update",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i = 1, sum = 0;
    while (i <= 20) {
        sum += i;
        i *= 2;
    }
    printf("%d", sum);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i = 1, sum = 0;
    while (i <= 20) {
        sum += i;
        i *= 2;
    }
    printf("%d", sum);
    return 0;
}`,answer:{directAnswer:"The loop sums powers of 2 for values $\\le 20$: $1 + 2 + 4 + 8 + 16 = $ **31**.",expectedOutput:"31",dryRunTable:{headers:["Iteration","i value","Condition (i <= 20)","sum += i","Next i (i *= 2)"],rows:[["1","1","True","0 + 1 = 1","2"],["2","2","True","1 + 2 = 3","4"],["3","4","True","3 + 4 = 7","8"],["4","8","True","7 + 8 = 15","16"],["5","16","True","15 + 16 = 31","32"],["6","32","False (32 <= 20)","Loop terminates","-"]]},interviewTip:"Notice that the sum of powers of 2 up to $2^k$ is always $2^{k+1} - 1 = 32 - 1 = 31$."}},{id:140,pdfId:"Q139",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Function Returning Struct Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
struct Pair { int a, b; };
struct Pair make(int x, int y) {
    struct Pair p;
    p.a = x + y;
    p.b = x - y;
    return p;
}
int main() {
    struct Pair r = make(10, 4);
    printf("%d %d", r.a, r.b);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Pair { int a, b; };
struct Pair make(int x, int y) {
    struct Pair p;
    p.a = x + y;
    p.b = x - y;
    return p;
}
int main() {
    struct Pair r = make(10, 4);
    printf("%d %d", r.a, r.b);
    return 0;
}`,answer:{directAnswer:"The function returns a `struct Pair` with `p.a = 10 + 4 = 14` and `p.b = 10 - 4 = 6`, outputting **14 6**.",expectedOutput:"14 6",explanation:["In `make(10, 4)`: `p.a = 10 + 4 = 14`, `p.b = 10 - 4 = 6`.","The struct is returned by value (entire contents copied to `r`).","`printf` prints `r.a` and `r.b` as `14 6`."],interviewTip:"Returning a struct by value is the standard, safe C idiom for returning multiple values from a function."}},{id:141,pdfId:"Q140",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Recursion",subtopic:"Recursive Digit Reversal Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int rev(int n, int r) {
    if (n == 0) return r;
    return rev(n / 10, r * 10 + n % 10);
}
int main() {
    printf("%d", rev(4321, 0));
    return 0;
}`,givenCode:`#include <stdio.h>
int rev(int n, int r) {
    if (n == 0) return r;
    return rev(n / 10, r * 10 + n % 10);
}
int main() {
    printf("%d", rev(4321, 0));
    return 0;
}`,answer:{directAnswer:"Tail-recursive digit reversal reverses 4321 to **1234** by passing the accumulated reversed prefix in parameter `r`.",expectedOutput:"1234",dryRunTable:{headers:["Call","n","r","Next Call (n/10, r*10 + n%10)"],rows:[["1","4321","0","rev(432, 0*10 + 1) = rev(432, 1)"],["2","432","1","rev(43, 1*10 + 2) = rev(43, 12)"],["3","43","12","rev(4, 12*10 + 3) = rev(4, 123)"],["4","4","123","rev(0, 123*10 + 4) = rev(0, 1234)"],["5","0","1234","Base case (n == 0) returns r = 1234"]]},interviewTip:"This is accumulator-based tail recursion, which uses constant stack space under compiler optimization."}},{id:142,pdfId:"Q141",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"Array Rotation Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5}, temp, i;
    temp = arr[0];
    for (i = 0; i < 4; i++) arr[i] = arr[i + 1];
    arr[4] = temp;
    printf("%d %d %d", arr[0], arr[2], arr[4]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5}, temp, i;
    temp = arr[0];
    for (i = 0; i < 4; i++) arr[i] = arr[i + 1];
    arr[4] = temp;
    printf("%d %d %d", arr[0], arr[2], arr[4]);
    return 0;
}`,answer:{directAnswer:"Left-rotates the array by 1 position: `{1, 2, 3, 4, 5}` becomes `{2, 3, 4, 5, 1}`. Printing `arr[0]`, `arr[2]`, and `arr[4]` yields **2 4 1**.",expectedOutput:"2 4 1",explanation:["`temp = arr[0] = 1`.","Loop shifts elements left: `arr[0]=2, arr[1]=3, arr[2]=4, arr[3]=5`.","`arr[4] = temp = 1`.","Resulting array: `{2, 3, 4, 5, 1}`.","`arr[0]` is 2, `arr[2]` is 4, `arr[4]` is 1."],interviewTip:"This is a single left circular rotation in $O(N)$ time and $O(1)$ auxiliary space."}},{id:143,pdfId:"Q142",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Strings",subtopic:"String Token Count Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    char str[] = "C is fun to learn";
    int i, words = 1;
    for (i = 0; str[i] != '\\0'; i++) {
        if (str[i] == ' ') words++;
    }
    printf("%d", words);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    char str[] = "C is fun to learn";
    int i, words = 1;
    for (i = 0; str[i] != '\\0'; i++) {
        if (str[i] == ' ') words++;
    }
    printf("%d", words);
    return 0;
}`,answer:{directAnswer:"The string contains 4 space characters separating 5 words. Starting with `words = 1`, it increments 4 times, outputting **5**.",expectedOutput:"5",explanation:["Spaces occur after 'C', 'is', 'fun', and 'to' (total 4 spaces).","Each space increments `words` by 1.","`words = 1 + 4 = 5`.","Output is 5."],interviewTip:"Assuming $N$ words = $(N - 1)$ spaces works only if there are no consecutive, leading, or trailing spaces."}},{id:144,pdfId:"Q143",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Pointers",subtopic:"Pointer Arithmetic with Increment Chain",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    printf("%d ", *p++);
    printf("%d ", *p);
    printf("%d", *++p);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    printf("%d ", *p++);
    printf("%d ", *p);
    printf("%d", *++p);
    return 0;
}`,answer:{directAnswer:"1. `*p++` evaluates to `*p` (10) then advances `p` to `&arr[1]`. 2. `*p` prints 20. 3. `*++p` advances `p` to `&arr[2]` first then dereferences it, printing 30. Exact output: **10 20 30**.",expectedOutput:"10 20 30",dryRunTable:{headers:["Statement","Pointer Location","Action","Printed"],rows:[['printf("%d ", *p++);',"&arr[0] -> &arr[1]","Dereference 10, then advance p","10 "],['printf("%d ", *p);',"&arr[1]","Dereference current p","20 "],['printf("%d", *++p);',"&arr[1] -> &arr[2]","Advance p to index 2 first, then dereference","30"]]},interviewTip:"`*p++` means `*(p++)` (dereference original, increment pointer). `*++p` means `*(++p)` (increment pointer first, then dereference). `(*p)++` increments the value pointed to."}},{id:145,pdfId:"Q144",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Structures",subtopic:"Structure Array with Function Update",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
struct Stu { int marks; };
void grade(struct Stu s[], int n) {
    int i;
    for (i = 0; i < n; i++) s[i].marks += 5;
}
int main() {
    struct Stu s[3] = {{50},{60},{70}};
    grade(s, 3);
    printf("%d %d %d", s[0].marks, s[1].marks, s[2].marks);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Stu { int marks; };
void grade(struct Stu s[], int n) {
    int i;
    for (i = 0; i < n; i++) s[i].marks += 5;
}
int main() {
    struct Stu s[3] = {{50},{60},{70}};
    grade(s, 3);
    printf("%d %d %d", s[0].marks, s[1].marks, s[2].marks);
    return 0;
}`,answer:{directAnswer:"An array of structures decays to a pointer when passed to a function. The updates inside `grade` modify the caller's array elements directly, adding 5 to each: **55 65 75**.",expectedOutput:"55 65 75",explanation:["Even though individual structures pass by value, an *array of structures* decays to a pointer to the first structure (`struct Stu *`).","`s[0].marks`: $50 + 5 = 55$","`s[1].marks`: $60 + 5 = 65$","`s[2].marks`: $70 + 5 = 75$","Outputs `55 65 75`."],interviewTip:"Crucial difference: Single struct `void f(struct S s)` passes by VALUE; array of structs `void f(struct S s[])` passes by REFERENCE (decays to pointer)."}},{id:146,pdfId:"Q145",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Dynamic Memory Allocation",subtopic:"Freed Pointer Reuse Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(sizeof(int));
    *p = 25;
    int val = *p;
    free(p);
    printf("%d", val);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(sizeof(int));
    *p = 25;
    int val = *p;
    free(p);
    printf("%d", val);
    return 0;
}`,answer:{directAnswer:"The value 25 was copied to stack variable `val` before `free(p)` was called. Printing `val` outputs **25** safely.",expectedOutput:"25",explanation:["`malloc` allocates 4 bytes on heap.","`*p = 25` writes 25 into heap.","`int val = *p` copies 25 to local stack variable `val`.","`free(p)` frees heap memory.",'`printf("%d", val)` reads `val` from stack, printing 25.'],interviewTip:"If the program had tried to print `*p` after `free(p)`, that would be a 'Use-After-Free' bug causing undefined behavior."}},{id:147,pdfId:"Q146",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Bitwise Operators",subtopic:"Checking Power of Two",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int n = 16;
    printf("%d", (n & (n - 1)) == 0);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int n = 16;
    printf("%d", (n & (n - 1)) == 0);
    return 0;
}`,answer:{directAnswer:"For any power of 2, `n & (n - 1)` is always 0. Since $16$ is a power of 2 ($10000_2 \\& 01111_2 = 0$), the condition `(0 == 0)` evaluates to true (**1**).",expectedOutput:"1",explanation:["$n = 16 = 10000_2$.","$n - 1 = 15 = 01111_2$.","$10000_2 \\& 01111_2 = 00000_2 = 0$.","`(0 == 0)` evaluates to `1` (true).","Output: 1."],interviewTip:"`n > 0 && (n & (n - 1)) == 0` is the standard $O(1)$ trick to check if an integer is a power of 2."}},{id:148,pdfId:"Q147",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Loops",subtopic:"For Loop with Decreasing Step",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int i, product = 1;
    for (i = 5; i >= 1; i -= 2) {
        product *= i;
    }
    printf("%d", product);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i, product = 1;
    for (i = 5; i >= 1; i -= 2) {
        product *= i;
    }
    printf("%d", product);
    return 0;
}`,answer:{directAnswer:"The loop decrements `i` by 2, taking odd values 5, 3, and 1. The product $5 \\times 3 \\times 1 =$ **15**.",expectedOutput:"15",dryRunTable:{headers:["i","Condition (i >= 1)","product *= i","Next i (i -= 2)"],rows:[["5","True","1 * 5 = 5","3"],["3","True","5 * 3 = 15","1"],["1","True","15 * 1 = 15","-1"],["-1","False (-1 >= 1)","Loop terminates","-"]]},interviewTip:"This is known as the double factorial of 5, written $5!! = 5 \\times 3 \\times 1 = 15$."}},{id:149,pdfId:"Q148",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Functions",subtopic:"Recursive Function Called in Loop",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int fact(int n) {
    return (n <= 1) ? 1 : n * fact(n - 1);
}
int main() {
    int i, sum = 0;
    for (i = 1; i <= 3; i++) sum += fact(i);
    printf("%d", sum);
    return 0;
}`,givenCode:`#include <stdio.h>
int fact(int n) {
    return (n <= 1) ? 1 : n * fact(n - 1);
}
int main() {
    int i, sum = 0;
    for (i = 1; i <= 3; i++) sum += fact(i);
    printf("%d", sum);
    return 0;
}`,answer:{directAnswer:"The loop sums factorials $1! + 2! + 3! = 1 + 2 + 6 =$ **9**.",expectedOutput:"9",explanation:["$i = 1: \\text{fact}(1) = 1$. `sum = 0 + 1 = 1`.","$i = 2: \\text{fact}(2) = 2 \\times 1 = 2$. `sum = 1 + 2 = 3`.","$i = 3: \\text{fact}(3) = 3 \\times 2 = 6$. `sum = 3 + 6 = 9`.","Output is 9."],interviewTip:"Ternary operator `(n <= 1) ? 1 : n * fact(n - 1)` concisely expresses both the base and recursive cases."}},{id:150,pdfId:"Q149",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Arrays",subtopic:"Frequency Count Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int main() {
    int arr[] = {1, 2, 2, 3, 3, 3}, i, j, count;
    for (i = 0; i < 6; i++) {
        count = 0;
        for (j = 0; j < 6; j++) if (arr[j] == arr[i]) count++;
        if (arr[i] == 3) { printf("%d", count); break; }
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[] = {1, 2, 2, 3, 3, 3}, i, j, count;
    for (i = 0; i < 6; i++) {
        count = 0;
        for (j = 0; j < 6; j++) if (arr[j] == arr[i]) count++;
        if (arr[i] == 3) { printf("%d", count); break; }
    }
    return 0;
}`,answer:{directAnswer:"When the outer loop encounters the first occurrence of 3 (at index $i = 3$), the inner loop counts three 3s in the array. The condition `arr[i] == 3` prints **3** and breaks immediately.",expectedOutput:"3",explanation:["$i = 0$: `arr[0] = 1`, count = 1. `arr[i] != 3`.","$i = 1$: `arr[1] = 2`, count = 2. `arr[i] != 3`.","$i = 2$: `arr[2] = 2`, count = 2. `arr[i] != 3`.","$i = 3$: `arr[3] = 3`. Inner loop counts all matching 3s at indices 3, 4, 5 (`count = 3`).",'`arr[3] == 3` is true: `printf("%d", count)` prints 3 and `break` terminates the outer loop.'],interviewTip:"The break occurs on the first encounter of 3, avoiding duplicate work."}},{id:151,pdfId:"Q150",sectionId:3,sectionName:"Section 3: Placement Coding & Hard Dry Run",topic:"Recursion",subtopic:"Recursive GCD Dry Run",difficulty:"Hard",type:"Dry Run",question:`Dry-run the following program step by step and write down the exact output:

#include <stdio.h>
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
int main() {
    printf("%d", gcd(36, 24));
    return 0;
}`,givenCode:`#include <stdio.h>
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
int main() {
    printf("%d", gcd(36, 24));
    return 0;
}`,answer:{directAnswer:"Euclid's algorithm computes $\\gcd(36, 24)$: $36 \\pmod{24} = 12$, then $24 \\pmod{12} = 0$, terminating to return **12**.",expectedOutput:"12",dryRunTable:{headers:["Call","a","b","a % b","Next Action"],rows:[["gcd(36, 24)","36","24","36 % 24 = 12","Calls gcd(24, 12)"],["gcd(24, 12)","24","12","24 % 12 = 0","Calls gcd(12, 0)"],["gcd(12, 0)","12","0","-","Base case (b == 0) returns a = 12"]]},interviewTip:"Euclidean algorithm is guaranteed to converge in at most $5 \\log_{10}(\\min(a, b))$ steps (Lamé's Theorem)."}},{id:152,pdfId:"Q151",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Increment & Decrement",subtopic:"Pre vs Post",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int i = 5;
    printf("%d %d %d", i++, ++i, i);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i = 5;
    printf("%d %d %d", i++, ++i, i);
    return 0;
}`,answer:{directAnswer:"Under GCC x86 right-to-left argument evaluation, the rightmost argument is evaluated first ($i=5$), then `++i` increments to 6, then `i++` yields 6 and increments to 7, resulting in **6 7 7** (or **7 7 5** depending on compiler).",expectedOutput:"6 7 7",explanation:["In the C standard (ISO C99/C11), modifying a variable multiple times within a single sequence point (such as inside a `printf` argument list) invokes **Undefined Behavior**.","However, most interview placement compilers (like GCC on x86) evaluate arguments right-to-left:","1. Rightmost argument `i` is read as 5.","2. Middle argument `++i` increments `i` to 6 and evaluates to 6.","3. Leftmost argument `i++` evaluates to 6, then increments `i` to 7.","Printed output on GCC is typically `6 7 7`."],interviewTip:"Always mention to the interviewer: 'This expression contains undefined behavior according to the C standard, though GCC typically evaluates right-to-left producing 6 7 7.'"}},{id:153,pdfId:"Q152",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Operators",subtopic:"Operator Precedence",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a = 5, b = 2, c;
    c = a / b * b + a % b;
    printf("%d", c);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 5, b = 2, c;
    c = a / b * b + a % b;
    printf("%d", c);
    return 0;
}`,answer:{directAnswer:"Multiplicative operators (`/`, `*`, `%`) have equal precedence and associate left-to-right: `(5 / 2) * 2 + (5 % 2) = 2 * 2 + 1 = 4 + 1 =` **5**.",expectedOutput:"5",explanation:["1. `a / b` evaluates first: $5 / 2 = 2$ (integer division truncates decimal).","2. Multiplied by `b`: $2 \\times 2 = 4$.","3. Modulus `a % b`: $5 \\pmod 2 = 1$.","4. Addition: $4 + 1 = 5$.","*(Note: By the division algorithm definition, $(a / b) \\times b + (a \\% b) \\equiv a$)*."],interviewTip:"This proves the fundamental division identity in C: `(a / b) * b + a % b == a`."}},{id:154,pdfId:"Q153",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Loops",subtopic:"For Loop",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++) {
        if (i == 3) break;
        printf("%d ", i);
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++) {
        if (i == 3) break;
        printf("%d ", i);
    }
    return 0;
}`,answer:{directAnswer:"The loop prints values 0, 1, and 2. When $i = 3$, `break` terminates the loop before printing, producing **0 1 2 **.",expectedOutput:"0 1 2 ",explanation:["$i = 0$: prints `0 `","$i = 1$: prints `1 `","$i = 2$: prints `2 `","$i = 3$: `i == 3` is true, `break` immediately exits loop.","Output: `0 1 2 `."],interviewTip:"`break` halts the loop immediately without executing subsequent statements in the loop body."}},{id:155,pdfId:"Q154",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Loops",subtopic:"Continue Statement",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int i;
    for (i = 1; i <= 5; i++) {
        if (i % 2 == 0) continue;
        printf("%d ", i);
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i;
    for (i = 1; i <= 5; i++) {
        if (i % 2 == 0) continue;
        printf("%d ", i);
    }
    return 0;
}`,answer:{directAnswer:"`continue` skips the `printf` for even numbers (2 and 4), printing only odd numbers: **1 3 5 **.",expectedOutput:"1 3 5 ",explanation:["$i = 1$: odd -> prints `1 `","$i = 2$: even -> `continue` skips to next iteration","$i = 3$: odd -> prints `3 `","$i = 4$: even -> `continue` skips","$i = 5$: odd -> prints `5 `","Output: `1 3 5 `."],interviewTip:"In a `for` loop, `continue` jumps to the increment step (`i++`), whereas in a `while` loop, you must be careful not to skip the increment!"}},{id:156,pdfId:"Q155",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Nested Loops",subtopic:"Nested For Loop",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int i, j;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= i; j++)
            printf("%d", j);
        printf("\\n");
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i, j;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= i; j++)
            printf("%d", j);
        printf("\\n");
    }
    return 0;
}`,answer:{directAnswer:`Prints a right-angled numeric triangle with each row $i$ printing numbers from 1 up to $i$:
1
12
123`,expectedOutput:`1
12
123`,explanation:["Row $i = 1$: inner loop runs for $j = 1$, prints `1\\n`.","Row $i = 2$: inner loop runs for $j = 1, 2$, prints `12\\n`.","Row $i = 3$: inner loop runs for $j = 1, 2, 3$, prints `123\\n`."],interviewTip:"Row count is governed by outer loop; elements per row are governed by inner loop boundary $j \\le i$."}},{id:157,pdfId:"Q156",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Functions",subtopic:"Default Argument Behaviour",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int modify(int x) {
    x = x + 10;
    return x;
}
int main() {
    int a = 5;
    modify(a);
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int modify(int x) {
    x = x + 10;
    return x;
}
int main() {
    int a = 5;
    modify(a);
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"Because parameters in C are passed by value, `modify` alters only its local copy `x`. The variable `a` in `main` remains unchanged at **5**.",expectedOutput:"5",explanation:["`modify(a)` passes a copy of `a`'s value (5) to `x`.","`x = x + 10` changes `x` to 15 inside `modify`'s stack frame.","The returned value 15 is discarded because `main` does not assign it (`a = modify(a);` was not written).","Thus, `a` remains 5."],interviewTip:"To update `a`, either assign the return value `a = modify(a);` or pass a pointer `modify(&a);`."}},{id:158,pdfId:"Q157",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Functions",subtopic:"Return by Reference",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
void modify(int *x) {
    *x = *x + 10;
}
int main() {
    int a = 5;
    modify(&a);
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
void modify(int *x) {
    *x = *x + 10;
}
int main() {
    int a = 5;
    modify(&a);
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"Passing `&a` provides the memory address of `a`. Dereferencing `*x += 10` directly modifies `a` in `main`, changing it to **15**.",expectedOutput:"15",explanation:["`&a` passes the pointer address of `a`.","Inside `modify`, `*x` refers to the memory location of `a`.","`*x = *x + 10` modifies `a` from 5 to 15.",'`printf("%d", a)` prints 15.'],interviewTip:"This is the classic implementation of simulated pass-by-reference using pointers in C."}},{id:159,pdfId:"Q158",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Recursion",subtopic:"Recursive Sum",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int fun(int n) {
    if (n == 0) return 0;
    return n + fun(n - 1);
}
int main() {
    printf("%d", fun(4));
    return 0;
}`,givenCode:`#include <stdio.h>
int fun(int n) {
    if (n == 0) return 0;
    return n + fun(n - 1);
}
int main() {
    printf("%d", fun(4));
    return 0;
}`,answer:{directAnswer:"Recursively sums the first 4 natural numbers: $4 + 3 + 2 + 1 + 0 = $ **10**.",expectedOutput:"10",explanation:["`fun(4) = 4 + fun(3)`","`fun(3) = 3 + fun(2)`","`fun(2) = 2 + fun(1)`","`fun(1) = 1 + fun(0)`","`fun(0) = 0` (base case)","Result: $4 + 3 + 2 + 1 + 0 = 10$."],interviewTip:"Mathematical formula for sum of first $n$ natural numbers: $n(n + 1) / 2 = 4 \\times 5 / 2 = 10$."}},{id:160,pdfId:"Q159",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Recursion",subtopic:"Recursion Order",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
void printNum(int n) {
    if (n == 0) return;
    printf("%d ", n);
    printNum(n - 1);
}
int main() {
    printNum(3);
    return 0;
}`,givenCode:`#include <stdio.h>
void printNum(int n) {
    if (n == 0) return;
    printf("%d ", n);
    printNum(n - 1);
}
int main() {
    printNum(3);
    return 0;
}`,answer:{directAnswer:"Because `printf` is executed before the recursive call (pre-order execution), numbers are printed in descending order: **3 2 1 **.",expectedOutput:"3 2 1 ",explanation:["Call 1 (`n = 3`): prints `3 `, then calls `printNum(2)`.","Call 2 (`n = 2`): prints `2 `, then calls `printNum(1)`.","Call 3 (`n = 1`): prints `1 `, then calls `printNum(0)`.","Call 4 (`n = 0`): hits base case `return`.","Final output: `3 2 1 `."],interviewTip:"If `printf` were placed *after* `printNum(n - 1)`, the output would reverse to `1 2 3 ` (post-order printing during stack unwinding)!"}},{id:161,pdfId:"Q160",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Pointers",subtopic:"Pointer Dereference",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a = 10;
    int *p = &a;
    *p = *p + 5;
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 10;
    int *p = &a;
    *p = *p + 5;
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"Pointer `p` points to `a`. Updating `*p` changes `a`'s value from 10 to $10 + 5 =$ **15**.",expectedOutput:"15",explanation:["`p` stores the address of `a` (`&a`).","`*p` dereferences `p`, accessing the memory content of `a`.","`*p = *p + 5` sets `a = 10 + 5 = 15`.",'`printf("%d", a)` prints 15.'],interviewTip:"Dereference operator `*` acts as an alias to the original variable."}},{id:162,pdfId:"Q161",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Pointers",subtopic:"Pointer Arithmetic",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    printf("%d", *(p + 2));
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    printf("%d", *(p + 2));
    return 0;
}`,answer:{directAnswer:"Advancing `p + 2` moves 2 integer elements ahead in memory, pointing to `arr[2]` with value **30**.",expectedOutput:"30",explanation:["`p` points to `arr[0]` (10).","`p + 2` points to `&arr[2]`.","`*(p + 2)` accesses `arr[2] = 30`.","Output: 30."],interviewTip:"Pointer arithmetic automatically scales by the size of the underlying data type (`sizeof(int)`)."}},{id:163,pdfId:"Q162",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Pointers",subtopic:"Double Pointer",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a = 20;
    int *p = &a;
    int **q = &p;
    printf("%d", **q);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 20;
    int *p = &a;
    int **q = &p;
    printf("%d", **q);
    return 0;
}`,answer:{directAnswer:"`**q` dereferences twice: first dereference `*q` yields pointer `p`, second dereference `*p` yields the integer value of `a` (**20**).",expectedOutput:"20",explanation:["`p = &a` stores address of `a`.","`q = &p` stores address of pointer `p`.","`*q` yields `p`.","`**q` yields `*p` which is `a = 20`."],interviewTip:"Double pointers are essential when dynamically allocating arrays of strings or mutating pointers across function boundaries."}},{id:164,pdfId:"Q163",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Arrays",subtopic:"Array Indexing",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    printf("%d", arr[2] + arr[4]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    printf("%d", arr[2] + arr[4]);
    return 0;
}`,answer:{directAnswer:"Using 0-based indexing, `arr[2]` is 3 and `arr[4]` is 5. Sum is $3 + 5 =$ **8**.",expectedOutput:"8",explanation:["`arr[0] = 1, arr[1] = 2, arr[2] = 3, arr[3] = 4, arr[4] = 5`.","`arr[2] + arr[4] = 3 + 5 = 8`."],interviewTip:"Always remember: in an array of size $N$, valid indices range from 0 to $N - 1$."}},{id:165,pdfId:"Q164",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Arrays",subtopic:"2D Array Access",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int arr[2][2] = {{1, 2}, {3, 4}};
    printf("%d", arr[0][1] + arr[1][0]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[2][2] = {{1, 2}, {3, 4}};
    printf("%d", arr[0][1] + arr[1][0]);
    return 0;
}`,answer:{directAnswer:"`arr[0][1]` is row 0 column 1 (value 2), and `arr[1][0]` is row 1 column 0 (value 3). The sum $2 + 3 =$ **5**.",expectedOutput:"5",explanation:["Row 0: `arr[0][0] = 1, arr[0][1] = 2`","Row 1: `arr[1][0] = 3, arr[1][1] = 4`","Sum: $2 + 3 = 5$."],interviewTip:"Row-column subscript order in C is always `arr[row][col]`."}},{id:166,pdfId:"Q165",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Strings",subtopic:"String Length",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
#include <string.h>
int main() {
    char str[] = "Placement";
    printf("%d", (int)strlen(str));
    return 0;
}`,givenCode:`#include <stdio.h>
#include <string.h>
int main() {
    char str[] = "Placement";
    printf("%d", (int)strlen(str));
    return 0;
}`,answer:{directAnswer:"`strlen()` counts characters up to (but not including) the null terminator `'\\0'`. \"Placement\" has **9** characters.",expectedOutput:"9",explanation:['Characters in "Placement": P-l-a-c-e-m-e-n-t = 9 characters.',"`strlen(str)` returns 9.","*(Note: `sizeof(str)` would be 10 because it includes the terminating `\\0`)*."],interviewTip:"`strlen()` returns visible character length; `sizeof()` returns memory footprint including null byte."}},{id:167,pdfId:"Q166",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Strings",subtopic:"String Concatenation",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
#include <string.h>
int main() {
    char a[20] = "Sona";
    char b[] = "College";
    strcat(a, b);
    printf("%s", a);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <string.h>
int main() {
    char a[20] = "Sona";
    char b[] = "College";
    strcat(a, b);
    printf("%s", a);
    return 0;
}`,answer:{directAnswer:'`strcat` appends "College" to the end of "Sona" in buffer `a`, producing **SonaCollege**.',expectedOutput:"SonaCollege",explanation:["`a` has 20 bytes of allocated memory, which is large enough to hold 4 + 7 + 1 = 12 characters.","`strcat(a, b)` finds the null character in `a` and copies `b` starting from that position.",'Final string in `a` is `"SonaCollege"`.'],interviewTip:"Always ensure the destination buffer is large enough before calling `strcat` to avoid buffer overflow."}},{id:168,pdfId:"Q167",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Storage Classes",subtopic:"Static Variable",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
void counter() {
    static int count = 0;
    count++;
    printf("%d ", count);
}
int main() {
    counter();
    counter();
    counter();
    return 0;
}`,givenCode:`#include <stdio.h>
void counter() {
    static int count = 0;
    count++;
    printf("%d ", count);
}
int main() {
    counter();
    counter();
    counter();
    return 0;
}`,answer:{directAnswer:"The `static` local variable `count` is initialized once and retains its value between calls, printing **1 2 3 **.",expectedOutput:"1 2 3 ",explanation:["1st call: `count` starts at 0, increments to 1, prints `1 `.","2nd call: `count` is 1, increments to 2, prints `2 `.","3rd call: `count` is 2, increments to 3, prints `3 `."],interviewTip:"If `count` were a regular `auto` variable without `static`, it would print `1 1 1 `."}},{id:169,pdfId:"Q168",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Storage Classes",subtopic:"Auto Variable Scope",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int x = 10;
    {
        int x = 20;
        printf("%d ", x);
    }
    printf("%d", x);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int x = 10;
    {
        int x = 20;
        printf("%d ", x);
    }
    printf("%d", x);
    return 0;
}`,answer:{directAnswer:"The inner block declares a new local variable `x = 20` that shadows the outer `x = 10`. Once the inner block exits, outer `x = 10` is visible again, printing **20 10**.",expectedOutput:"20 10",explanation:["Outer `x` is 10.","Inside inner block `{}`, a new `x` is declared and assigned 20.","Inner `printf` prints `20 `.","Inner block ends, destroying inner `x`.","Outer `printf` prints outer `x` (10)."],interviewTip:"Variables in inner scopes shadow variables with the same name in outer scopes."}},{id:170,pdfId:"Q169",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Bitwise Operators",subtopic:"Left Shift",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a = 3;
    printf("%d", a << 2);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 3;
    printf("%d", a << 2);
    return 0;
}`,answer:{directAnswer:"Shifting left by 2 multiplies the value by $2^2 = 4$: $3 \\times 4 =$ **12**.",expectedOutput:"12",explanation:["$a = 3 = 0000 0011_2$.","$a \\ll 2 = 0000 1100_2$.","$0000 1100_2 = 8 + 4 = 12$ in decimal."],interviewTip:"`x << n` is mathematically identical to $x \\times 2^n$ (assuming no integer overflow)."}},{id:171,pdfId:"Q170",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Bitwise Operators",subtopic:"XOR Operator",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a = 5, b = 3;
    printf("%d", a ^ b);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 5, b = 3;
    printf("%d", a ^ b);
    return 0;
}`,answer:{directAnswer:"Bitwise XOR sets bits to 1 where operands differ: $5$ (`101_2`) $\\oplus$ $3$ (`011_2`) $=$ `110_2` $=$ **6**.",expectedOutput:"6",explanation:["$5 = 101_2$","$3 = 011_2$","Bit 0: $1 \\oplus 1 = 0$","Bit 1: $0 \\oplus 1 = 1$","Bit 2: $1 \\oplus 0 = 1$","Result: $110_2 = 6$."],interviewTip:"XOR returns 1 for differing bits and 0 for identical bits."}},{id:172,pdfId:"Q171",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Switch",subtopic:"Fall-through Behaviour",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int x = 2;
    switch (x) {
        case 1: printf("One");
        case 2: printf("Two");
        case 3: printf("Three"); break;
        default: printf("Default");
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int x = 2;
    switch (x) {
        case 1: printf("One");
        case 2: printf("Two");
        case 3: printf("Three"); break;
        default: printf("Default");
    }
    return 0;
}`,answer:{directAnswer:"Because `case 2` lacks a `break;` statement, execution falls through into `case 3` until it hits `break;`, printing **TwoThree**.",expectedOutput:"TwoThree",explanation:['$x = 2$ matches `case 2`, printing `"Two"`.',"There is no `break` at the end of `case 2`, causing fall-through into `case 3`.",'`case 3` prints `"Three"` and executes `break`, terminating the switch statement.',"Final output: `TwoThree`."],interviewTip:"Switch fall-through is intentional in C, but forgetting `break` is one of the most common logic errors."}},{id:173,pdfId:"Q172",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Variable Scope",subtopic:"Global vs Local",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int x = 100;
void display() {
    int x = 10;
    printf("%d ", x);
}
int main() {
    display();
    printf("%d", x);
    return 0;
}`,givenCode:`#include <stdio.h>
int x = 100;
void display() {
    int x = 10;
    printf("%d ", x);
}
int main() {
    display();
    printf("%d", x);
    return 0;
}`,answer:{directAnswer:"Inside `display()`, the local variable `x = 10` takes precedence over global `x`. In `main()`, global `x = 100` is accessed, printing **10 100**.",expectedOutput:"10 100",explanation:["Inside `display()`, local `x = 10` is printed (`10 `).","Inside `main()`, there is no local `x`, so the global variable `x = 100` is printed (`100`)."],interviewTip:"Local variables always shadow global variables within their enclosing scope."}},{id:174,pdfId:"Q173",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Operators",subtopic:"Logical Operators",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a = 0, b = 5;
    printf("%d", a && b);
    printf(" %d", a || b);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 0, b = 5;
    printf("%d", a && b);
    printf(" %d", a || b);
    return 0;
}`,answer:{directAnswer:"Logical AND `0 && 5` evaluates to false (**0**). Logical OR `0 || 5` evaluates to true (**1**). Output is **0 1**.",expectedOutput:"0 1",explanation:["In C, 0 is false and any non-zero value is true.","`a && b` = `0 && 5` = false = `0`.","`a || b` = `0 || 5` = true = `1`.","Output: `0 1`."],interviewTip:"Logical operators in C strictly return `1` (true) or `0` (false)."}},{id:175,pdfId:"Q174",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Operators",subtopic:"Comma Operator",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a;
    a = (3, 4, 5);
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a;
    a = (3, 4, 5);
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"The comma operator evaluates expressions from left to right and yields the value of the rightmost operand, assigning **5** to `a`.",expectedOutput:"5",explanation:["In `(3, 4, 5)`, the comma operator evaluates 3, then 4, and finally returns 5.","`a = 5`.","*(Note: Without parentheses, `a = 3, 4, 5;` assigns 3 to `a` because `=` has higher precedence than `,`)*."],interviewTip:"The comma operator has the lowest precedence of all operators in C."}},{id:176,pdfId:"Q175",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Loops",subtopic:"While Loop with Break",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int i = 0;
    while (1) {
        printf("%d ", i);
        i++;
        if (i == 3) break;
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i = 0;
    while (1) {
        printf("%d ", i);
        i++;
        if (i == 3) break;
    }
    return 0;
}`,answer:{directAnswer:"Prints `i`, increments it, and breaks when `i` reaches 3, outputting **0 1 2 **.",expectedOutput:"0 1 2 ",explanation:["`i = 0`: prints `0 `, increments to 1.","`i = 1`: prints `1 `, increments to 2.","`i = 2`: prints `2 `, increments to 3. `i == 3` triggers `break`.","Loop terminates, printing `0 1 2 `."],interviewTip:"Order matters: `printf` comes *before* `i++` and `break`, so 0, 1, and 2 are printed."}},{id:177,pdfId:"Q176",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Functions",subtopic:"Recursion with Multiple Returns",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int fun(int a, int b) {
    if (b == 0) return 0;
    return a + fun(a, b - 1);
}
int main() {
    printf("%d", fun(3, 4));
    return 0;
}`,givenCode:`#include <stdio.h>
int fun(int a, int b) {
    if (b == 0) return 0;
    return a + fun(a, b - 1);
}
int main() {
    printf("%d", fun(3, 4));
    return 0;
}`,answer:{directAnswer:"Recursively adds `a` exactly `b` times, performing multiplication $3 \\times 4 =$ **12**.",expectedOutput:"12",explanation:["`fun(3, 4) = 3 + fun(3, 3)`","`fun(3, 3) = 3 + fun(3, 2)`","`fun(3, 2) = 3 + fun(3, 1)`","`fun(3, 1) = 3 + fun(3, 0)`","`fun(3, 0) = 0`","Total: $3 + 3 + 3 + 3 + 0 = 12$."],interviewTip:"Multiplication by repeated addition: $a \\times b = \\sum_{i=1}^{b} a$."}},{id:178,pdfId:"Q177",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Pointers",subtopic:"Array of Pointers",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
int main() {
    int a = 10, b = 20;
    int *p[2];
    p[0] = &a;
    p[1] = &b;
    printf("%d", *p[0] + *p[1]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 10, b = 20;
    int *p[2];
    p[0] = &a;
    p[1] = &b;
    printf("%d", *p[0] + *p[1]);
    return 0;
}`,answer:{directAnswer:"`*p[0]` dereferences `a` (10) and `*p[1]` dereferences `b` (20). The sum $10 + 20 =$ **30**.",expectedOutput:"30",explanation:["`p[0]` holds the memory address of `a`.","`p[1]` holds the memory address of `b`.","`*p[0] = 10` and `*p[1] = 20`.","Sum: $10 + 20 = 30$."],interviewTip:"Array of pointers is commonly used for ragged arrays and command-line arguments (`char *argv[]`)."}},{id:179,pdfId:"Q178",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Structures",subtopic:"Structure Member Access",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
struct Student {
    int marks;
};
int main() {
    struct Student s = {85};
    s.marks += 10;
    printf("%d", s.marks);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Student {
    int marks;
};
int main() {
    struct Student s = {85};
    s.marks += 10;
    printf("%d", s.marks);
    return 0;
}`,answer:{directAnswer:"Member access via the dot operator modifies `marks` from 85 to $85 + 10 =$ **95**.",expectedOutput:"95",explanation:["`s.marks` is initialized to 85.","`s.marks += 10` updates it to 95.",'`printf("%d", s.marks)` prints 95.'],interviewTip:"Use the dot operator `.` for direct structure variables and arrow `->` for structure pointers."}},{id:180,pdfId:"Q179",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Unions",subtopic:"Union Memory Sharing",difficulty:"Medium",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
union Data {
    int i;
    char c;
};
int main() {
    union Data d;
    d.i = 65;
    printf("%c", d.c);
    return 0;
}`,givenCode:`#include <stdio.h>
union Data {
    int i;
    char c;
};
int main() {
    union Data d;
    d.i = 65;
    printf("%c", d.c);
    return 0;
}`,answer:{directAnswer:"In a union, `d.i` and `d.c` share the same memory location. On little-endian systems, the lowest byte of $65$ corresponds to ASCII value 65 ('A'), printing **A**.",expectedOutput:"A",explanation:["In `union Data`, both `int i` and `char c` start at the same byte.","$65 = 0x00000041$.","The first byte in memory is `0x41`.","`printf(\"%c\", d.c)` prints character corresponding to ASCII 65, which is `'A'`."],interviewTip:"Unions allow type-punning (interpreting the memory representation of one type as another)."}},{id:181,pdfId:"Q180",sectionId:4,sectionName:"Section 4: Output Prediction Questions",topic:"Enumeration",subtopic:"enum Default Values",difficulty:"Basic",type:"Output Prediction",question:`Predict the output of the following program:

#include <stdio.h>
enum Day { MON, TUE, WED };
int main() {
    enum Day d = WED;
    printf("%d", d);
    return 0;
}`,givenCode:`#include <stdio.h>
enum Day { MON, TUE, WED };
int main() {
    enum Day d = WED;
    printf("%d", d);
    return 0;
}`,answer:{directAnswer:"By default, enum constants start at 0: `MON = 0`, `TUE = 1`, `WED = 2`. Printing `WED` outputs **2**.",expectedOutput:"2",explanation:["Default enum numbering assigns consecutive integers starting from 0.","`MON = 0`","`TUE = 1`","`WED = 2`","`d = WED` -> prints 2."],interviewTip:"In C, enums are treated internally as `int`s and can be printed with `%d`."}},{id:182,pdfId:"Q181",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Semicolon Errors",subtopic:"Misplaced Semicolon",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++);
    {
        printf("%d ", i);
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++);
    {
        printf("%d ", i);
    }
    return 0;
}`,answer:{directAnswer:'The semicolon `;` immediately after the `for` loop header creates an empty body loop. The loop iterates 5 times doing nothing, and the subsequent block `{ printf("%d ", i); }` executes only once after the loop finishes, printing **5** instead of 0 to 4.',identifiedBug:"Unintentional semicolon `;` at the end of the `for` loop header.",whyItHappens:"In C, a semicolon acts as a null statement. Placing `;` after `for (...)` terminates the loop's body immediately, disconnecting the loop from the intended curly brace block `{ ... }`.",codeExample:`#include <stdio.h>
int main() {
    int i;
    // Corrected: Removed stray semicolon
    for (i = 0; i < 5; i++) {
        printf("%d ", i);
    }
    return 0;
}`,expectedOutput:"0 1 2 3 4 ",interviewTip:"Never place a semicolon after `if (...)`, `for (...)`, or `while (...)` unless you intentionally want an empty body."}},{id:183,pdfId:"Q182",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Semicolon Errors",subtopic:"Missing Semicolon",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int a = 5
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 5
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"Compilation error: missing statement terminator semicolon `;` after `int a = 5`.",identifiedBug:"Syntax error: Missing semicolon at the end of variable declaration `int a = 5`.",whyItHappens:'In C, all statements must be terminated by a semicolon `;`. Without it, the compiler parser attempts to parse `int a = 5 printf(...)` as a single statement, triggering a syntax error: \'expected ";" before "printf"\'.',codeExample:`#include <stdio.h>
int main() {
    int a = 5; // Corrected: Added semicolon
    printf("%d", a);
    return 0;
}`,expectedOutput:"5",interviewTip:"Every statement in C must end with a semicolon `;`, except preprocessor directives and compound block definitions."}},{id:184,pdfId:"Q183",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Braces",subtopic:"Missing Braces in If-Else",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int a = 10;
    if (a > 5)
        printf("Greater");
        printf("Than 5");
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 10;
    if (a > 5)
        printf("Greater");
        printf("Than 5");
    return 0;
}`,answer:{directAnswer:'Logical bug: Without curly braces `{}`, only the single statement `printf("Greater");` belongs to the `if` body. `printf("Than 5");` is outside the `if` and will ALWAYS execute regardless of the condition.',identifiedBug:"Missing curly braces `{}` around multi-statement conditional block.",whyItHappens:"C does not use Python-style significant whitespace or indentation. Without braces, an `if` statement binds exclusively to the single statement immediately following it.",codeExample:`#include <stdio.h>
int main() {
    int a = 10;
    // Corrected: Enclosed both statements in braces
    if (a > 5) {
        printf("Greater");
        printf("Than 5");
    }
    return 0;
}`,expectedOutput:"GreaterThan 5",interviewTip:"Always use curly braces `{}` even for single-line `if` statements to eliminate subtle bugs like Apple's famous 'goto fail' SSL vulnerability."}},{id:185,pdfId:"Q184",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Braces",subtopic:"Unbalanced Braces",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 3; i++) {
        printf("%d ", i);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 3; i++) {
        printf("%d ", i);
    return 0;
}`,answer:{directAnswer:"Syntax compilation error: Unbalanced braces. The `for` loop opens an opening brace `{` that is never closed with `}`, causing the compiler to hit premature end-of-file.",identifiedBug:"Missing closing curly brace `}` for the `for` loop.",whyItHappens:"Every opening brace `{` in C must have a matching closing brace `}`. Here, `main()` has an opening brace and `for` has an opening brace, but only one closing brace appears.",codeExample:`#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 3; i++) {
        printf("%d ", i);
    } // Corrected: Added closing brace for loop
    return 0;
}`,expectedOutput:"0 1 2 ",interviewTip:"Modern IDEs highlight bracket pairs, but in paper coding interviews, always count your opening and closing braces."}},{id:186,pdfId:"Q185",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Pointers",subtopic:"Uninitialized Pointer",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int *p;
    *p = 10;
    printf("%d", *p);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int *p;
    *p = 10;
    printf("%d", *p);
    return 0;
}`,answer:{directAnswer:"Critical runtime error (Segmentation Fault): Dereferencing an uninitialized wild pointer. `p` holds random garbage memory; writing `*p = 10` corrupts arbitrary memory.",identifiedBug:"Dereference of uninitialized pointer (`wild pointer`).",whyItHappens:"Local pointer variable `int *p` is allocated on the stack with whatever garbage bits were left in that stack frame. Attempting to write through `*p` writes to an illegal memory location, triggering an OS memory protection fault (`SIGSEGV`).",codeExample:`#include <stdio.h>
int main() {
    int val;
    int *p = &val; // Corrected: Point to a valid memory location
    *p = 10;
    printf("%d", *p);
    return 0;
}`,expectedOutput:"10",interviewTip:"Never dereference a pointer before initializing it to a valid variable address (`&var`) or dynamic memory (`malloc`)."}},{id:187,pdfId:"Q186",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Pointers",subtopic:"Wrong Dereference",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int a = 10;
    int *p;
    p = a;
    printf("%d", *p);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 10;
    int *p;
    p = a;
    printf("%d", *p);
    return 0;
}`,answer:{directAnswer:"Compilation error: `p = a` assigns an integer value (10) directly to a pointer without the address-of operator `&`. At runtime, `*p` attempts to dereference memory address `0x0000000A`, causing a crash.",identifiedBug:"Assigning variable value instead of address: `p = a` instead of `p = &a`.",whyItHappens:"Pointers require memory addresses. Writing `p = a` treats the integer value 10 as an absolute memory address in RAM, which belongs to protected kernel space.",codeExample:`#include <stdio.h>
int main() {
    int a = 10;
    int *p;
    p = &a; // Corrected: Use address-of operator &
    printf("%d", *p);
    return 0;
}`,expectedOutput:"10",interviewTip:"Pointers store addresses (`p = &a`), while dereferenced pointers access values (`*p = a`)."}},{id:188,pdfId:"Q187",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Arrays",subtopic:"Array Index Out of Bounds",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int i;
    for (i = 0; i <= 5; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int i;
    for (i = 0; i <= 5; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,answer:{directAnswer:"Off-by-one bug: `i <= 5` accesses `arr[5]`, which is outside the bounds of array `arr[5]` (valid indices are 0 to 4), reading unallocated garbage memory.",identifiedBug:"Array index out of bounds (`arr[5]`).",whyItHappens:"In C, arrays are 0-indexed. An array of size 5 has valid elements `arr[0]` through `arr[4]`. C does not perform runtime bounds checking, so `arr[5]` accesses adjacent memory on the stack (undefined behavior).",codeExample:`#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int i;
    // Corrected: Use i < 5 instead of i <= 5
    for (i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,expectedOutput:"1 2 3 4 5 ",interviewTip:"Classic off-by-one fencepost error: always use `i < SIZE` when iterating over 0-indexed arrays."}},{id:189,pdfId:"Q188",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Arrays",subtopic:"Wrong Array Initialization",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int arr[5];
    arr = {1, 2, 3, 4, 5};
    printf("%d", arr[0]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int arr[5];
    arr = {1, 2, 3, 4, 5};
    printf("%d", arr[0]);
    return 0;
}`,answer:{directAnswer:"Compilation error: An array cannot be assigned using brace initialization `{ ... }` after its declaration. In C, array names are constant pointers (non-modifiable lvalues).",identifiedBug:"Illegal assignment to array type: `arr = {1, 2, 3, 4, 5};`.",whyItHappens:"Initializer lists `{ ... }` are valid only at the point of declaration. Once declared, an array's identifier is a non-assignable constant pointer representing its base address.",codeExample:`#include <stdio.h>
int main() {
    // Corrected: Initialize at declaration
    int arr[5] = {1, 2, 3, 4, 5};
    printf("%d", arr[0]);
    return 0;
}`,expectedOutput:"1",interviewTip:"You cannot assign one array directly to another (`arr1 = arr2` is illegal). You must copy elements using a loop or `memcpy()`."}},{id:190,pdfId:"Q189",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Strings",subtopic:"Buffer Overflow",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
#include <string.h>
int main() {
    char str[5];
    strcpy(str, "Placement");
    printf("%s", str);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <string.h>
int main() {
    char str[5];
    strcpy(str, "Placement");
    printf("%s", str);
    return 0;
}`,answer:{directAnswer:"Buffer overflow: \"Placement\" requires 10 bytes (9 characters + 1 null terminator `'\\0'`), but buffer `str` is allocated only 5 bytes, corrupting adjacent stack memory.",identifiedBug:"Buffer overflow caused by `strcpy` into an undersized buffer.",whyItHappens:"`strcpy()` blindly copies bytes until it encounters `'\\0'`. Writing 10 bytes into a 5-byte stack buffer overwrites adjacent variables or stack frame return addresses.",codeExample:`#include <stdio.h>
#include <string.h>
int main() {
    // Corrected: Allocate at least 10 bytes for "Placement" + '\\0'
    char str[15];
    strcpy(str, "Placement");
    printf("%s", str);
    return 0;
}`,expectedOutput:"Placement",interviewTip:"Always allocate at least `strlen(source) + 1` bytes for the destination string buffer."}},{id:191,pdfId:"Q190",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Strings",subtopic:"Missing String Header",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    strcat(str1, str2);
    printf("%s", str1);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    strcat(str1, str2);
    printf("%s", str1);
    return 0;
}`,answer:{directAnswer:"Compiler warning/error: Function `strcat` is used without including `<string.h>`, leading to an implicit function declaration error.",identifiedBug:"Missing `#include <string.h>` header file.",whyItHappens:"`strcat()` is declared in the standard library header `<string.h>`. In C99 and modern C standards, using standard library functions without including their prototype header is disallowed.",codeExample:`#include <stdio.h>
#include <string.h> // Corrected: Included header for strcat

int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    strcat(str1, str2);
    printf("%s", str1);
    return 0;
}`,expectedOutput:"HelloWorld",interviewTip:"Always include `<string.h>` for string manipulation functions (`strlen`, `strcpy`, `strcat`, `strcmp`)."}},{id:192,pdfId:"Q191",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Functions",subtopic:"Missing Return Statement",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int square(int n) {
    int result = n * n;
}
int main() {
    printf("%d", square(5));
    return 0;
}`,givenCode:`#include <stdio.h>
int square(int n) {
    int result = n * n;
}
int main() {
    printf("%d", square(5));
    return 0;
}`,answer:{directAnswer:"Missing return statement: `square` is declared with return type `int`, but does not return any value, returning garbage register data to `main`.",identifiedBug:"Non-void function lacks a `return` statement.",whyItHappens:"When a non-void function reaches the end of its block without a `return` statement, the caller reads whatever value happens to be in the CPU return register (`EAX` / `RAX`), which is undefined garbage.",codeExample:`#include <stdio.h>
int square(int n) {
    int result = n * n;
    return result; // Corrected: Return the calculated value
}
int main() {
    printf("%d", square(5));
    return 0;
}`,expectedOutput:"25",interviewTip:"Enabling compiler flag `-Wall` immediately warns: 'control reaches end of non-void function'."}},{id:193,pdfId:"Q192",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Functions",subtopic:"Function Prototype Mismatch",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int add(int a, int b);
int main() {
    printf("%d", add(5, 10, 15));
    return 0;
}
int add(int a, int b) {
    return a + b;
}`,givenCode:`#include <stdio.h>
int add(int a, int b);
int main() {
    printf("%d", add(5, 10, 15));
    return 0;
}
int add(int a, int b) {
    return a + b;
}`,answer:{directAnswer:"Compilation error: Function prototype `int add(int a, int b)` accepts exactly 2 arguments, but `add(5, 10, 15)` passes 3 arguments.",identifiedBug:"Argument count mismatch: Passed 3 arguments to a 2-parameter function.",whyItHappens:"The compiler uses the prototype declaration to enforce type and argument quantity checking. The third argument 15 violates the function signature.",codeExample:`#include <stdio.h>
int add(int a, int b);
int main() {
    // Corrected: Pass exactly 2 arguments matching prototype
    printf("%d", add(5, 10));
    return 0;
}
int add(int a, int b) {
    return a + b;
}`,expectedOutput:"15",interviewTip:"This highlights why prototypes are critical: they allow the compiler to detect mismatched argument counts before linking."}},{id:194,pdfId:"Q193",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Recursion",subtopic:"Missing Base Case",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int factorial(int n) {
    return n * factorial(n - 1);
}
int main() {
    printf("%d", factorial(5));
    return 0;
}`,givenCode:`#include <stdio.h>
int factorial(int n) {
    return n * factorial(n - 1);
}
int main() {
    printf("%d", factorial(5));
    return 0;
}`,answer:{directAnswer:"Runtime crash (Stack Overflow): The recursive function `factorial` lacks a base case, continuing to call itself with negative numbers indefinitely ($5, 4, 3, 2, 1, 0, -1, -2...$).",identifiedBug:"Missing Base Case in recursive function.",whyItHappens:"Every recursive call allocates a stack frame. Without a terminating condition like `if (n <= 1) return 1;`, calls continue until stack memory is exhausted, causing a segmentation fault.",codeExample:`#include <stdio.h>
int factorial(int n) {
    // Corrected: Added base case
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    printf("%d", factorial(5));
    return 0;
}`,expectedOutput:"120",interviewTip:"Always write and verify the Base Case first before writing recursive logic."}},{id:195,pdfId:"Q194",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Recursion",subtopic:"Incorrect Recursive Call",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int sum(int n) {
    if (n == 0)
        return 0;
    return n + sum(n);
}
int main() {
    printf("%d", sum(5));
    return 0;
}`,givenCode:`#include <stdio.h>
int sum(int n) {
    if (n == 0)
        return 0;
    return n + sum(n);
}
int main() {
    printf("%d", sum(5));
    return 0;
}`,answer:{directAnswer:"Runtime crash (Stack Overflow): The recursive call passes `n` instead of `n - 1`, calling `sum(5)` with parameter 5 forever without converging to the base case `n == 0`.",identifiedBug:"Recursive call does not progress toward base case: `sum(n)` instead of `sum(n - 1)`.",whyItHappens:"For recursion to terminate, each recursive invocation must move closer to the base case. Calling `sum(n)` creates an infinite recursion loop.",codeExample:`#include <stdio.h>
int sum(int n) {
    if (n == 0)
        return 0;
    // Corrected: Decrement n toward base case
    return n + sum(n - 1);
}
int main() {
    printf("%d", sum(5));
    return 0;
}`,expectedOutput:"15",interviewTip:"Recursive step must strictly reduce the problem size: $n \\to n - 1$."}},{id:196,pdfId:"Q195",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"malloc()",subtopic:"Missing Header for malloc",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int *p = malloc(5 * sizeof(int));
    p[0] = 10;
    printf("%d", p[0]);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int *p = malloc(5 * sizeof(int));
    p[0] = 10;
    printf("%d", p[0]);
    return 0;
}`,answer:{directAnswer:"Compilation warning/error: `malloc` is used without including `<stdlib.h>`. In addition, dynamically allocated memory is never released with `free(p)`.",identifiedBug:"Missing `#include <stdlib.h>` header for `malloc()`.",whyItHappens:"`malloc` is declared in `<stdlib.h>`. Without it, older C compilers assume `int malloc()` (which truncates 64-bit pointers to 32-bit integers, causing crashes on 64-bit systems), while modern compilers produce an error.",codeExample:`#include <stdio.h>
#include <stdlib.h> // Corrected: Included stdlib.h

int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    if (p == NULL) return 1; // Good practice: check NULL
    p[0] = 10;
    printf("%d", p[0]);
    free(p); // Good practice: free heap memory
    return 0;
}`,expectedOutput:"10",interviewTip:"Always include `<stdlib.h>` when using `malloc`, `calloc`, `realloc`, or `free`."}},{id:197,pdfId:"Q196",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"malloc()",subtopic:"Not Freeing Memory / NULL Check",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    p[10] = 100;
    printf("%d", p[10]);
    return 0;
}`,givenCode:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    p[10] = 100;
    printf("%d", p[10]);
    return 0;
}`,answer:{directAnswer:"Three bugs: 1. Heap buffer overflow (`p[10]` writes outside the 5-element allocation). 2. Missing `NULL` check after `malloc`. 3. Missing `free(p)` causing memory leak.",identifiedBug:"Buffer overflow on heap (`p[10]` on a 5-element array), missing NULL check, and missing `free()`.",whyItHappens:"`malloc(5 * sizeof(int))` allocates space for indices 0 to 4. Writing to `p[10]` corrupts heap metadata (heap corruption crash).",codeExample:`#include <stdio.h>
#include <stdlib.h>

int main() {
    // Corrected: Allocate 11 elements to safely access index 10
    int *p = (int *)malloc(11 * sizeof(int));
    if (p == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    p[10] = 100;
    printf("%d", p[10]);
    free(p); // Freed memory
    return 0;
}`,expectedOutput:"100",interviewTip:"Corrupting heap boundaries leads to crashes when subsequent calls to `malloc` or `free` run."}},{id:198,pdfId:"Q197",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"scanf()",subtopic:"Missing Address Operator",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int a;
    printf("Enter a number: ");
    scanf("%d", a);
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a;
    printf("Enter a number: ");
    scanf("%d", a);
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:'Runtime crash (Segmentation Fault): `scanf("%d", a)` passes uninitialized value of `a` instead of its address `&a`.',identifiedBug:"Missing address-of operator `&` in `scanf`.",whyItHappens:"`scanf` requires a memory address to write the parsed input. Passing `a` (which contains uninitialized garbage) causes `scanf` to write to an invalid memory location.",codeExample:`#include <stdio.h>
int main() {
    int a;
    printf("Enter a number: ");
    scanf("%d", &a); // Corrected: Passed &a
    printf("%d", a);
    return 0;
}`,interviewTip:'Only array/string identifiers do not require `&` in `scanf` (e.g. `scanf("%s", str)`) because array names decay to addresses automatically.'}},{id:199,pdfId:"Q198",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"printf()",subtopic:"Format Specifier Mismatch",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    float a = 10.5;
    printf("%d", a);
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    float a = 10.5;
    printf("%d", a);
    return 0;
}`,answer:{directAnswer:"Undefined behavior / garbage output: `%d` expects an integer, but `a` is a `float` (promoted to 64-bit IEEE 754 `double`). Printing with `%d` misinterprets floating-point bit layout.",identifiedBug:"Format specifier mismatch: `%d` used for floating-point variable.",whyItHappens:"`printf` relies entirely on the format string to interpret argument bytes pushed onto the stack or registers. Floating point values are passed in XMM/floating-point registers, whereas `%d` reads from general-purpose registers (`ESI`/`EDX`), producing 0 or garbage.",codeExample:`#include <stdio.h>
int main() {
    float a = 10.5;
    // Corrected: Use %f for float (or cast explicitly)
    printf("%.1f", a);
    return 0;
}`,expectedOutput:"10.5",interviewTip:"Always match types: `%d` for `int`, `%f` for `float`/`double`, `%c` for `char`, `%s` for string, `%p` for pointer."}},{id:200,pdfId:"Q199",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Bitwise Operators",subtopic:"Confusing && with &",difficulty:"Medium",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
int main() {
    int a = 6, b = 3;
    if (a & b)
        printf("True");
    else
        printf("False");
    return 0;
}`,givenCode:`#include <stdio.h>
int main() {
    int a = 6, b = 3;
    if (a & b)
        printf("True");
    else
        printf("False");
    return 0;
}`,answer:{directAnswer:"Logical bug: The programmer likely intended logical AND (`&&`) to check if both $a$ and $b$ are non-zero (which would be True), but used bitwise AND (`&`). Since $6$ (`110_2$) and $3$ (`011_2`) share bit 1 (`010_2 = 2` $\\neq 0$), it coincidentally evaluates to True, but will fail for cases like $4 \\& 3 = 0$.",identifiedBug:"Confusing bitwise AND `&` with logical AND `&&`.",whyItHappens:"`&&` checks boolean truth of two operands. `&` performs bit-by-bit masking. If $a = 4$ (`100_2`) and $b = 3$ (`011_2`), both are positive (true), but `4 & 3 == 0` (false)!",codeExample:`#include <stdio.h>
int main() {
    int a = 6, b = 3;
    // Corrected: Use logical AND && for boolean condition
    if (a && b)
        printf("True");
    else
        printf("False");
    return 0;
}`,expectedOutput:"True",interviewTip:"Always use `&&` for condition checking and reserve `&` strictly for bit manipulation and masking."}},{id:201,pdfId:"Q200",sectionId:5,sectionName:"Section 5: Debugging Questions",topic:"Structures",subtopic:"Wrong Member Access Operator",difficulty:"Basic",type:"Debugging",question:`Identify the error(s), correct the code, and explain why the error occurs:

#include <stdio.h>
struct Student {
    int roll;
    char name[20];
};
int main() {
    struct Student s;
    s->roll = 1;
    printf("%d", s.roll);
    return 0;
}`,givenCode:`#include <stdio.h>
struct Student {
    int roll;
    char name[20];
};
int main() {
    struct Student s;
    s->roll = 1;
    printf("%d", s.roll);
    return 0;
}`,answer:{directAnswer:"Compilation error: `s` is a concrete structure variable, not a pointer. The arrow operator `->` is used exclusively with pointers to structures. For regular structure variables, use the dot operator `.`: `s.roll = 1;`.",identifiedBug:"Using arrow operator `->` instead of dot operator `.` on a non-pointer structure.",whyItHappens:'The operator `->` is syntactic sugar for `(*ptr).member`. Applying `->` to a non-pointer variable `s` triggers a compiler error: \'invalid type argument of "->" (have "struct Student")\'.',codeExample:`#include <stdio.h>
struct Student {
    int roll;
    char name[20];
};
int main() {
    struct Student s;
    s.roll = 1; // Corrected: Use dot operator .
    printf("%d", s.roll);
    return 0;
}`,expectedOutput:"1",interviewTip:"Rule: If it's a variable or object, use `.` (dot). If it's an address or pointer, use `->` (arrow)."}}];/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=e=>{const t=A0(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},N0=k.createContext({}),C0=()=>k.useContext(N0),$0=k.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:i,className:a="",children:r,iconNode:l,...s},u)=>{const{size:m=24,strokeWidth:b=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:y=""}=C0()??{},A=i??p?Number(n??b)*24/Number(t??m):n??b;return k.createElement("svg",{ref:u,..._l,width:t??m??_l.width,height:t??m??_l.height,stroke:e??f,strokeWidth:A,className:bp("lucide",y,a),...!r&&!T0(s)&&{"aria-hidden":"true"},...s},[...l.map(([T,$])=>k.createElement(T,$)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(e,t)=>{const n=k.forwardRef(({className:i,...a},r)=>k.createElement($0,{ref:r,iconNode:t,className:bp(`lucide-${S0(dc(e))}`,`lucide-${e}`,i),...a}));return n.displayName=dc(e),n};/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],D0=ce("award",E0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344",key:"144kbk"}]],z0=ce("book-open-check",O0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],M0=ce("book-open",j0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],Zr=ce("bookmark",R0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],L0=ce("check",_0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],B0=ce("chevron-left",q0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vp=ce("chevron-right",Q0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],ra=ce("circle-check",k0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],H0=ce("circle-question-mark",I0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],G0=ce("copy",U0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],fc=ce("file-code-corner",Y0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],X0=ce("hash",V0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ba=ce("layers",Z0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],F0=ce("layout-grid",P0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],J0=ce("lightbulb",K0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],eg=ce("menu",W0);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ng=ce("search",tg);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ag=ce("sparkles",ig);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],pc=ce("table",rg);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],sg=ce("triangle-alert",lg);/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xp=ce("x",og),ug=({searchQuery:e,onSearchChange:t,totalQuestions:n,totalSections:i,totalTopics:a,masteredCount:r,bookmarkedCount:l,onToggleMobileMenu:s,filterStatus:u,onFilterStatusChange:m})=>c.jsxs("header",{className:"bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs",children:[c.jsx("div",{className:"h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"}),c.jsxs("div",{className:"w-full px-3 py-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:s,className:"lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"Open navigation menu",children:c.jsx(eg,{className:"w-5 h-5"})}),c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-mono font-bold text-xl shadow-md shadow-blue-500/20 shrink-0",children:"C"}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("h1",{className:"text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight",children:"C Programming Interview Questions"}),c.jsx("span",{className:"hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200",children:"Campus Placement Bank"})]}),c.jsxs("p",{className:"text-xs sm:text-sm font-semibold text-blue-600 flex items-center gap-1.5",children:[c.jsx("span",{children:"Learn."}),c.jsx("span",{className:"text-slate-300",children:"•"}),c.jsx("span",{children:"Revise."}),c.jsx("span",{className:"text-slate-300",children:"•"}),c.jsx("span",{children:"Prepare."})]})]})]}),c.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[c.jsxs("button",{onClick:()=>m("all"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${u==="all"?"bg-blue-50 text-blue-700 border border-blue-300":"text-slate-600 hover:bg-slate-100"}`,children:["All (",n,")"]}),c.jsxs("button",{onClick:()=>m("mastered"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${u==="mastered"?"bg-emerald-50 text-emerald-700 border border-emerald-300":"text-slate-600 hover:bg-slate-100"}`,children:[c.jsx(ra,{className:"w-3.5 h-3.5 text-emerald-500"}),"Mastered (",r,")"]}),c.jsxs("button",{onClick:()=>m("bookmarked"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${u==="bookmarked"?"bg-amber-50 text-amber-700 border border-amber-300":"text-slate-600 hover:bg-slate-100"}`,children:[c.jsx(Zr,{className:"w-3.5 h-3.5 text-amber-500"}),"Saved (",l,")"]})]})]}),c.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-slate-600",children:[c.jsx("p",{className:"line-clamp-1 text-slate-600 max-w-2xl",children:"Complete C programming interview questions and easy-to-understand answers for quick revision and campus placement preparation."}),c.jsxs("div",{className:"flex items-center flex-wrap gap-2 text-xs font-medium shrink-0",children:[c.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200",children:[c.jsx(D0,{className:"w-3.5 h-3.5 text-blue-600"}),c.jsx("strong",{className:"font-bold text-slate-900",children:n})," Questions"]}),c.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200",children:[c.jsx(ba,{className:"w-3.5 h-3.5 text-cyan-600"}),c.jsx("strong",{className:"font-bold text-slate-900",children:i})," Sections"]}),c.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200",children:[c.jsx(M0,{className:"w-3.5 h-3.5 text-indigo-600"}),c.jsx("strong",{className:"font-bold text-slate-900",children:a})," Topics"]})]})]}),c.jsx("div",{className:"mt-3 relative",children:c.jsxs("div",{className:"relative",children:[c.jsx(ng,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"text",value:e,onChange:b=>t(b.target.value),placeholder:"Search questions by keyword, topic, code, or question text (e.g. pointer, malloc, palindrome)...",className:"w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-400"}),e&&c.jsx("button",{onClick:()=>t(""),className:"absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200","aria-label":"Clear search",children:c.jsx(xp,{className:"w-4 h-4"})})]})})]})]}),cg=({questions:e,sections:t,currentQuestionId:n,onSelectQuestion:i,masteredIds:a,bookmarkedIds:r,selectedSectionId:l,onSelectSection:s})=>{const u=k.useRef(null);k.useEffect(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[n]);const m=Dr.useMemo(()=>{const b=new Map;return t.forEach(p=>b.set(p.id,[])),e.forEach(p=>{const f=b.get(p.sectionId)||[];f.push(p),b.set(p.sectionId,f)}),b},[e,t]);return c.jsxs("aside",{className:"w-80 shrink-0 hidden lg:block bg-white border border-slate-200 rounded-2xl shadow-xs h-[calc(100vh-165px)] sticky top-[165px] overflow-y-auto",children:[c.jsxs("div",{className:"p-3.5 border-b border-slate-200 bg-slate-50 sticky top-0 z-10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-slate-800 font-bold text-xs uppercase tracking-wider",children:[c.jsx(ba,{className:"w-4 h-4 text-blue-600"}),c.jsx("span",{children:"Sections & Questions"})]}),c.jsxs("span",{className:"text-[11px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100",children:[e.length," Qs"]})]}),c.jsx("div",{className:"p-2 space-y-4",children:e.length===0?c.jsx("div",{className:"p-8 text-center text-xs text-slate-400",children:"No questions match your current filters."}):t.map(b=>{const p=m.get(b.id)||[];return l!==null&&l!==b.id||p.length===0?null:c.jsxs("div",{className:"space-y-1",children:[c.jsxs("button",{onClick:()=>s(l===b.id?null:b.id),className:"w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-between group",children:[c.jsxs("span",{className:"text-[11px] font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full inline-block",style:{backgroundColor:b.color}}),c.jsxs("span",{children:["Section ",b.id,": ",b.shortTitle]})]}),c.jsx("span",{className:"text-[10px] font-mono font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200",children:p.length})]}),c.jsx("div",{className:"space-y-1 pl-1",children:p.map(f=>{const y=f.id===n,A=a.has(f.id),T=r.has(f.id);return c.jsxs("button",{ref:y?u:null,onClick:()=>i(f.id),className:`w-full text-left p-2 rounded-xl text-xs transition-all duration-150 flex items-start gap-2 group ${y?"bg-blue-50 border border-blue-300 text-blue-950 font-semibold shadow-xs":"hover:bg-slate-50 text-slate-700 border border-transparent"}`,children:[c.jsxs("span",{className:`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${y?"bg-blue-600 text-white":A?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600 group-hover:bg-slate-200"}`,children:["Q",String(f.id).padStart(2,"0")]}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-1 mb-0.5",children:[c.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:f.topic}),A&&c.jsx(ra,{className:"w-3 h-3 text-emerald-500 shrink-0"}),T&&c.jsx(Zr,{className:"w-3 h-3 text-amber-500 fill-amber-500 shrink-0"})]}),c.jsx("p",{className:`line-clamp-2 leading-tight text-[11px] ${y?"text-blue-950 font-bold":"text-slate-700"}`,children:f.question.split(`

`)[0]})]}),c.jsx(vp,{className:`w-3.5 h-3.5 shrink-0 transition-transform mt-0.5 ${y?"text-blue-600 translate-x-0.5":"text-slate-300 opacity-0 group-hover:opacity-100"}`})]},f.id)})})]},b.id)})})]})},dg=({isOpen:e,onClose:t,questions:n,sections:i,currentQuestionId:a,onSelectQuestion:r,masteredIds:l,bookmarkedIds:s,selectedSectionId:u,onSelectSection:m})=>{k.useEffect(()=>{const p=f=>{f.key==="Escape"&&t()};return e&&(window.addEventListener("keydown",p),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",p),document.body.style.overflow=""}},[e,t]);const b=Dr.useMemo(()=>{const p=new Map;return i.forEach(f=>p.set(f.id,[])),n.forEach(f=>{const y=p.get(f.sectionId)||[];y.push(f),p.set(f.sectionId,y)}),p},[n,i]);return e?c.jsxs("div",{className:"fixed inset-0 z-50 lg:hidden",children:[c.jsx("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity",onClick:t}),c.jsxs("div",{className:"fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col",children:[c.jsxs("div",{className:"p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(ba,{className:"w-5 h-5 text-blue-600"}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-sm font-bold text-slate-900",children:"Sections & Questions"}),c.jsxs("p",{className:"text-xs text-slate-500 font-mono",children:[n.length," questions"]})]})]}),c.jsx("button",{onClick:t,className:"p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors","aria-label":"Close navigation",children:c.jsx(xp,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-4",children:i.map(p=>{const f=b.get(p.id)||[];return u!==null&&u!==p.id||f.length===0?null:c.jsxs("div",{className:"space-y-1.5",children:[c.jsxs("button",{onClick:()=>m(u===p.id?null:p.id),className:"w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-100 flex items-center justify-between",children:[c.jsxs("span",{className:"text-xs font-extrabold uppercase text-slate-800 flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full inline-block",style:{backgroundColor:p.color}}),"Section ",p.id,": ",p.shortTitle]}),c.jsx("span",{className:"text-[10px] font-mono font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200",children:f.length})]}),c.jsx("div",{className:"space-y-1 pl-1",children:f.map(y=>{const A=y.id===a,T=l.has(y.id),$=s.has(y.id);return c.jsxs("button",{onClick:()=>{r(y.id),t()},className:`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-start gap-2 ${A?"bg-blue-50 border border-blue-300 text-blue-950 font-semibold":"hover:bg-slate-50 text-slate-700"}`,children:[c.jsxs("span",{className:`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${A?"bg-blue-600 text-white":T?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600"}`,children:["Q",String(y.id).padStart(2,"0")]}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-1 mb-0.5",children:[c.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:y.topic}),T&&c.jsx(ra,{className:"w-3 h-3 text-emerald-500 shrink-0"}),$&&c.jsx(Zr,{className:"w-3 h-3 text-amber-500 fill-amber-500 shrink-0"})]}),c.jsx("p",{className:"line-clamp-2 leading-tight text-[11px]",children:y.question.split(`

`)[0]})]})]},y.id)})})]},p.id)})})]})]}):null},fg=({sections:e,selectedSectionId:t,onSelectSection:n,topics:i,selectedTopic:a,onSelectTopic:r,selectedDifficulty:l,onSelectDifficulty:s,viewMode:u,onViewModeChange:m,filteredCount:b})=>c.jsx("div",{className:"bg-white border-b border-slate-200 px-3 py-2 sticky top-[110px] z-20 shadow-2xs",children:c.jsxs("div",{className:"w-full flex flex-col gap-2",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none",children:[c.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[c.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mr-1",children:[c.jsx(ba,{className:"w-3.5 h-3.5 text-blue-600"}),"PDF Sections:"]}),c.jsx("button",{onClick:()=>n(null),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t===null?"bg-blue-600 text-white shadow-xs":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"All (201)"}),e.map(p=>{const f=t===p.id;return c.jsxs("button",{onClick:()=>n(p.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${f?"bg-blue-600 text-white shadow-xs":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:[c.jsxs("span",{className:"font-bold",children:["Sec ",p.id,":"]}),c.jsx("span",{children:p.shortTitle}),c.jsx("span",{className:`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${f?"bg-blue-700 text-white":"bg-slate-200 text-slate-700"}`,children:p.count})]},p.id)})]}),c.jsxs("div",{className:"flex items-center bg-slate-100 p-1 rounded-xl shrink-0 border border-slate-200",children:[c.jsxs("button",{onClick:()=>m("study"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${u==="study"?"bg-white text-blue-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:[c.jsx(z0,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Study Card"})]}),c.jsxs("button",{onClick:()=>m("browse"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${u==="browse"?"bg-white text-blue-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:[c.jsx(F0,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Browse All"})]})]})]}),c.jsxs("div",{className:"flex items-center justify-between gap-3 text-xs flex-wrap",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx("span",{className:"text-slate-500 font-medium",children:"Topic:"}),c.jsxs("select",{value:a||"",onChange:p=>r(p.target.value?p.target.value:null),className:"bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400",children:[c.jsxs("option",{value:"",children:["All Topics (",i.length,")"]}),i.map(p=>c.jsx("option",{value:p,children:p},p))]})]}),c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx("span",{className:"text-slate-500 font-medium ml-2",children:"Level:"}),["Basic","Medium","Hard"].map(p=>{const f=l===p;return c.jsx("button",{onClick:()=>s(f?null:p),className:`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors ${f?p==="Basic"?"bg-emerald-600 text-white":p==="Medium"?"bg-amber-600 text-white":"bg-rose-600 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:p},p)})]})]}),c.jsxs("div",{className:"text-slate-500 text-xs font-mono",children:["Showing ",c.jsx("strong",{className:"text-slate-900 font-bold",children:b})," questions"]})]})]})});var wp={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(i){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,l={},s={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function o(d){return d instanceof u?new u(d.type,o(d.content),d.alias):Array.isArray(d)?d.map(o):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++r}),o.__id},clone:function o(d,g){g=g||{};var v,w;switch(s.util.type(d)){case"Object":if(w=s.util.objId(d),g[w])return g[w];v={},g[w]=v;for(var x in d)d.hasOwnProperty(x)&&(v[x]=o(d[x],g));return v;case"Array":return w=s.util.objId(d),g[w]?g[w]:(v=[],g[w]=v,d.forEach(function(C,N){v[N]=o(C,g)}),v);default:return d}},getLanguage:function(o){for(;o;){var d=a.exec(o.className);if(d)return d[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,d){o.className=o.className.replace(RegExp(a,"gi"),""),o.classList.add("language-"+d)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(v){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(o){var d=document.getElementsByTagName("script");for(var g in d)if(d[g].src==o)return d[g]}return null}},isActive:function(o,d,g){for(var v="no-"+d;o;){var w=o.classList;if(w.contains(d))return!0;if(w.contains(v))return!1;o=o.parentElement}return!!g}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(o,d){var g=s.util.clone(s.languages[o]);for(var v in d)g[v]=d[v];return g},insertBefore:function(o,d,g,v){v=v||s.languages;var w=v[o],x={};for(var C in w)if(w.hasOwnProperty(C)){if(C==d)for(var N in g)g.hasOwnProperty(N)&&(x[N]=g[N]);g.hasOwnProperty(C)||(x[C]=w[C])}var D=v[o];return v[o]=x,s.languages.DFS(s.languages,function(U,le){le===D&&U!=o&&(this[U]=x)}),x},DFS:function o(d,g,v,w){w=w||{};var x=s.util.objId;for(var C in d)if(d.hasOwnProperty(C)){g.call(d,C,d[C],v||C);var N=d[C],D=s.util.type(N);D==="Object"&&!w[x(N)]?(w[x(N)]=!0,o(N,g,null,w)):D==="Array"&&!w[x(N)]&&(w[x(N)]=!0,o(N,g,C,w))}}},plugins:{},highlightAll:function(o,d){s.highlightAllUnder(document,o,d)},highlightAllUnder:function(o,d,g){var v={callback:g,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),s.hooks.run("before-all-elements-highlight",v);for(var w=0,x;x=v.elements[w++];)s.highlightElement(x,d===!0,v.callback)},highlightElement:function(o,d,g){var v=s.util.getLanguage(o),w=s.languages[v];s.util.setLanguage(o,v);var x=o.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(x,v);var C=o.textContent,N={element:o,language:v,grammar:w,code:C};function D(le){N.highlightedCode=le,s.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,s.hooks.run("after-highlight",N),s.hooks.run("complete",N),g&&g.call(N.element)}if(s.hooks.run("before-sanity-check",N),x=N.element.parentElement,x&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!N.code){s.hooks.run("complete",N),g&&g.call(N.element);return}if(s.hooks.run("before-highlight",N),!N.grammar){D(s.util.encode(N.code));return}if(d&&i.Worker){var U=new Worker(s.filename);U.onmessage=function(le){D(le.data)},U.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else D(s.highlight(N.code,N.grammar,N.language))},highlight:function(o,d,g){var v={code:o,grammar:d,language:g};if(s.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=s.tokenize(v.code,v.grammar),s.hooks.run("after-tokenize",v),u.stringify(s.util.encode(v.tokens),v.language)},tokenize:function(o,d){var g=d.rest;if(g){for(var v in g)d[v]=g[v];delete d.rest}var w=new p;return f(w,w.head,o),b(o,w,d,w.head,0),A(w)},hooks:{all:{},add:function(o,d){var g=s.hooks.all;g[o]=g[o]||[],g[o].push(d)},run:function(o,d){var g=s.hooks.all[o];if(!(!g||!g.length))for(var v=0,w;w=g[v++];)w(d)}},Token:u};i.Prism=s;function u(o,d,g,v){this.type=o,this.content=d,this.alias=g,this.length=(v||"").length|0}u.stringify=function o(d,g){if(typeof d=="string")return d;if(Array.isArray(d)){var v="";return d.forEach(function(D){v+=o(D,g)}),v}var w={type:d.type,content:o(d.content,g),tag:"span",classes:["token",d.type],attributes:{},language:g},x=d.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(w.classes,x):w.classes.push(x)),s.hooks.run("wrap",w);var C="";for(var N in w.attributes)C+=" "+N+'="'+(w.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+C+">"+w.content+"</"+w.tag+">"};function m(o,d,g,v){o.lastIndex=d;var w=o.exec(g);if(w&&v&&w[1]){var x=w[1].length;w.index+=x,w[0]=w[0].slice(x)}return w}function b(o,d,g,v,w,x){for(var C in g)if(!(!g.hasOwnProperty(C)||!g[C])){var N=g[C];N=Array.isArray(N)?N:[N];for(var D=0;D<N.length;++D){if(x&&x.cause==C+","+D)return;var U=N[D],le=U.inside,z=!!U.lookbehind,Q=!!U.greedy,se=U.alias;if(Q&&!U.pattern.global){var E=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,E+"g")}for(var R=U.pattern||U,O=v.next,H=w;O!==d.tail&&!(x&&H>=x.reach);H+=O.value.length,O=O.next){var F=O.value;if(d.length>o.length)return;if(!(F instanceof u)){var it=1,Ne;if(Q){if(Ne=m(R,H,o,z),!Ne||Ne.index>=o.length)break;var va=Ne.index,gi=Ne.index+Ne[0].length,Ce=H;for(Ce+=O.value.length;va>=Ce;)O=O.next,Ce+=O.value.length;if(Ce-=O.value.length,H=Ce,O.value instanceof u)continue;for(var st=O;st!==d.tail&&(Ce<gi||typeof st.value=="string");st=st.next)it++,Ce+=st.value.length;it--,F=o.slice(H,Ce),Ne.index-=H}else if(Ne=m(R,0,F,z),!Ne)continue;var va=Ne.index,xa=Ne[0],Pr=F.slice(0,va),_o=F.slice(va+xa.length),Fr=H+F.length;x&&Fr>x.reach&&(x.reach=Fr);var wa=O.prev;Pr&&(wa=f(d,wa,Pr),H+=Pr.length),y(d,wa,it);var Ap=new u(C,le?s.tokenize(xa,le):xa,se,xa);if(O=f(d,wa,Ap),_o&&f(d,O,_o),it>1){var Kr={cause:C+","+D,reach:Fr};b(o,d,g,O.prev,H,Kr),x&&Kr.reach>x.reach&&(x.reach=Kr.reach)}}}}}}function p(){var o={value:null,prev:null,next:null},d={value:null,prev:o,next:null};o.next=d,this.head=o,this.tail=d,this.length=0}function f(o,d,g){var v=d.next,w={value:g,prev:d,next:v};return d.next=w,v.prev=w,o.length++,w}function y(o,d,g){for(var v=d.next,w=0;w<g&&v!==o.tail;w++)v=v.next;d.next=v,v.prev=d,o.length-=w}function A(o){for(var d=[],g=o.head.next;g!==o.tail;)d.push(g.value),g=g.next;return d}if(!i.document)return i.addEventListener&&(s.disableWorkerMessageHandler||i.addEventListener("message",function(o){var d=JSON.parse(o.data),g=d.language,v=d.code,w=d.immediateClose;i.postMessage(s.highlight(v,s.languages[g],g)),w&&i.close()},!1)),s;var T=s.util.currentScript();T&&(s.filename=T.src,T.hasAttribute("data-manual")&&(s.manual=!0));function $(){s.manual||s.highlightAll()}if(!s.manual){var h=document.readyState;h==="loading"||h==="interactive"&&T&&T.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return s}(t);e.exports&&(e.exports=n),typeof Lo<"u"&&(Lo.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(a,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};s["language-"+r]={pattern:/[\s\S]+/,inside:n.languages[r]};var u={};u[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(i,a){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:n.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(i){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var r=i.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",a=function(T,$){return"✖ Error "+T+" while fetching file: "+$},r="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",m="loaded",b="failed",p="pre[data-src]:not(["+s+'="'+m+'"]):not(['+s+'="'+u+'"])';function f(T,$,h){var o=new XMLHttpRequest;o.open("GET",T,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?$(o.responseText):o.status>=400?h(a(o.status,o.statusText)):h(r))},o.send(null)}function y(T){var $=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(T||"");if($){var h=Number($[1]),o=$[2],d=$[3];return o?d?[h,Number(d)]:[h,void 0]:[h,h]}}n.hooks.add("before-highlightall",function(T){T.selector+=", "+p}),n.hooks.add("before-sanity-check",function(T){var $=T.element;if($.matches(p)){T.code="",$.setAttribute(s,u);var h=$.appendChild(document.createElement("CODE"));h.textContent=i;var o=$.getAttribute("data-src"),d=T.language;if(d==="none"){var g=(/\.(\w+)$/.exec(o)||[,"none"])[1];d=l[g]||g}n.util.setLanguage(h,d),n.util.setLanguage($,d);var v=n.plugins.autoloader;v&&v.loadLanguages(d),f(o,function(w){$.setAttribute(s,m);var x=y($.getAttribute("data-range"));if(x){var C=w.split(/\r\n?|\n/g),N=x[0],D=x[1]==null?C.length:x[1];N<0&&(N+=C.length),N=Math.max(0,Math.min(N-1,C.length)),D<0&&(D+=C.length),D=Math.max(0,Math.min(D,C.length)),w=C.slice(N,D).join(`
`),$.hasAttribute("data-start")||$.setAttribute("data-start",String(N+1))}h.textContent=w,n.highlightElement(h)},function(w){$.setAttribute(s,b),h.textContent=w})}}),n.plugins.fileHighlight={highlight:function($){for(var h=($||document).querySelectorAll(p),o=0,d;d=h[o++];)n.highlightElement(d)}};var A=!1;n.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(wp);var pg=wp.exports;const mg=js(pg);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;const mc=({code:e,language:t="c",title:n})=>{const[i,a]=k.useState(!1);k.useEffect(()=>{mg.highlightAll()},[e]);const r=()=>{navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),2e3)};return c.jsxs("div",{className:"my-4 rounded-xl overflow-hidden border border-slate-700/80 bg-[#0f172a] shadow-md text-sm",children:[c.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"}),c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"}),c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"}),c.jsx("span",{className:"ml-2 font-medium text-slate-300",children:n||t.toUpperCase()+" Code"})]}),c.jsx("button",{onClick:r,className:"flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-blue-500",title:"Copy to clipboard","aria-label":"Copy code",children:i?c.jsxs(c.Fragment,{children:[c.jsx(L0,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsx("span",{className:"text-emerald-400 font-medium",children:"Copied!"})]}):c.jsxs(c.Fragment,{children:[c.jsx(G0,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Copy"})]})})]}),c.jsx("div",{className:"p-4 overflow-x-auto max-w-full",children:c.jsx("pre",{className:"!m-0 !p-0 !bg-transparent text-slate-100 font-mono text-[13px] leading-relaxed",children:c.jsx("code",{className:`language-${t}`,children:e})})})]})},Sp=({question:e,currentIndex:t,totalFiltered:n,onPrevious:i,onNext:a,isMastered:r,onToggleMastered:l,isBookmarked:s,onToggleBookmarked:u,hasPrevious:m,hasNext:b})=>{const{answer:p}=e,f={Basic:"bg-emerald-50 text-emerald-700 border-emerald-200",Medium:"bg-amber-50 text-amber-700 border-amber-200",Hard:"bg-rose-50 text-rose-700 border-rose-200"},y={Theory:"bg-blue-50 text-blue-700 border-blue-200",Pseudocode:"bg-cyan-50 text-cyan-700 border-cyan-200","Dry Run":"bg-purple-50 text-purple-700 border-purple-200","Output Prediction":"bg-amber-50 text-amber-700 border-amber-200",Debugging:"bg-rose-50 text-rose-700 border-rose-200"};return c.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden",children:[c.jsxs("div",{className:"px-6 py-4 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3",children:[c.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap",children:[c.jsxs("div",{className:"flex items-center gap-1.5 bg-blue-600 text-white font-mono font-bold text-sm px-3 py-1 rounded-xl shadow-xs",children:[c.jsx(X0,{className:"w-4 h-4 opacity-80"}),c.jsxs("span",{children:["QUESTION ",String(e.id).padStart(2,"0")]})]}),c.jsxs("span",{className:"text-xs font-mono font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200",children:["PDF ",e.pdfId]}),c.jsx("span",{className:`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${y[e.type]}`,children:e.type}),c.jsx("span",{className:`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${f[e.difficulty]}`,children:e.difficulty}),c.jsxs("span",{className:"text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full",children:[e.topic," • ",e.subtopic]})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{onClick:l,className:`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${r?"bg-emerald-600 text-white shadow-xs":"bg-slate-100 hover:bg-slate-200 text-slate-700"}`,title:r?"Marked as Mastered":"Mark as Mastered",children:[c.jsx(ra,{className:"w-4 h-4"}),c.jsx("span",{children:r?"Mastered":"Mark Mastered"})]}),c.jsx("button",{onClick:u,className:`p-1.5 rounded-xl text-xs font-semibold transition-all ${s?"bg-amber-500 text-white shadow-xs":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`,title:s?"Remove Bookmark":"Bookmark Question","aria-label":"Bookmark question",children:c.jsx(Zr,{className:`w-4 h-4 ${s?"fill-current":""}`})})]})]}),c.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold tracking-wider text-blue-600 uppercase",children:[c.jsx(H0,{className:"w-4 h-4"}),c.jsx("span",{children:"Interview Question"})]}),c.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-slate-900 leading-snug",children:e.question.split(`

`)[0]})]}),e.givenCode&&c.jsxs("div",{className:"space-y-1.5",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500",children:[c.jsx(fc,{className:"w-4 h-4 text-purple-600"}),c.jsx("span",{children:e.type==="Debugging"?"Buggy Code (From Question)":"C Code to Analyze"})]}),c.jsx(mc,{code:e.givenCode,language:"c",title:e.type==="Debugging"?"buggy_code.c":"program.c"})]}),c.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6"}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-blue-50/80 border border-blue-200/80 p-5 sm:p-6 shadow-xs relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700 mb-2",children:[c.jsx(ag,{className:"w-4 h-4 text-blue-600 animate-pulse"}),c.jsx("span",{children:"Direct Interview Answer (Viva Punchline)"})]}),c.jsxs("p",{className:"text-base sm:text-lg font-semibold text-slate-900 leading-relaxed",children:['"',p.directAnswer,'"']})]}),e.type==="Debugging"&&c.jsxs("div",{className:"space-y-4",children:[p.identifiedBug&&c.jsxs("div",{className:"rounded-xl bg-rose-50 border border-rose-200 p-4",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 mb-1",children:[c.jsx(sg,{className:"w-4 h-4 text-rose-600"}),c.jsx("span",{children:"Error Identified"})]}),c.jsx("p",{className:"text-sm font-semibold text-rose-950",children:p.identifiedBug})]}),p.whyItHappens&&c.jsxs("div",{className:"text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-4",children:[c.jsx("strong",{className:"block font-bold text-slate-900 mb-1",children:"Why this error occurs in C:"}),c.jsx("p",{className:"leading-relaxed",children:p.whyItHappens})]})]}),p.expectedOutput&&c.jsxs("div",{className:"rounded-xl border border-emerald-200 bg-emerald-50/70 p-4",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[c.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5",children:[c.jsx(ra,{className:"w-4 h-4 text-emerald-600"}),"Expected Output"]}),c.jsx("span",{className:"text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md",children:"Console stdout"})]}),c.jsx("pre",{className:"font-mono text-sm bg-slate-900 text-emerald-400 p-3.5 rounded-lg overflow-x-auto shadow-inner",children:c.jsx("code",{children:p.expectedOutput})})]}),p.dryRunTable&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600",children:[c.jsx(pc,{className:"w-4 h-4 text-blue-600"}),c.jsx("span",{children:"Step-by-Step Execution Trace"})]}),c.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200 shadow-xs",children:c.jsxs("table",{className:"w-full text-left text-xs sm:text-sm",children:[c.jsx("thead",{className:"bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200",children:c.jsx("tr",{children:p.dryRunTable.headers.map((A,T)=>c.jsx("th",{className:"px-4 py-3 whitespace-nowrap",children:A},T))})}),c.jsx("tbody",{className:"divide-y divide-slate-100",children:p.dryRunTable.rows.map((A,T)=>c.jsx("tr",{className:T%2===0?"bg-white":"bg-slate-50/50",children:A.map(($,h)=>c.jsx("td",{className:"px-4 py-2.5 text-slate-700 font-mono text-xs",children:$},h))},T))})]})})]}),p.comparisonTable&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600",children:[c.jsx(pc,{className:"w-4 h-4 text-indigo-600"}),c.jsx("span",{children:"Key Differences & Comparison"})]}),c.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200 shadow-xs",children:c.jsxs("table",{className:"w-full text-left text-xs sm:text-sm",children:[c.jsx("thead",{className:"bg-slate-100 text-slate-800 font-bold border-b border-slate-200",children:c.jsx("tr",{children:p.comparisonTable.headers.map((A,T)=>c.jsx("th",{className:"px-4 py-3 whitespace-nowrap",children:A},T))})}),c.jsx("tbody",{className:"divide-y divide-slate-100",children:p.comparisonTable.rows.map((A,T)=>c.jsx("tr",{className:T%2===0?"bg-white":"bg-slate-50/50",children:A.map(($,h)=>c.jsx("td",{className:"px-4 py-2.5 text-slate-700",children:$},h))},T))})]})})]}),p.algorithmSteps&&c.jsxs("div",{className:"rounded-xl border border-cyan-200 bg-cyan-50/50 p-5 space-y-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-cyan-900 block mb-1",children:"Algorithm & Logic Steps"}),c.jsx("ol",{className:"space-y-1.5 text-sm text-cyan-950 font-medium list-none",children:p.algorithmSteps.map((A,T)=>c.jsxs("li",{className:"flex items-start gap-2",children:[c.jsx("span",{className:"text-cyan-600 font-bold shrink-0",children:"•"}),c.jsx("span",{children:A})]},T))})]}),p.explanation&&p.explanation.length>0&&c.jsxs("div",{className:"space-y-2.5",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 block",children:"Detailed Concept & Key Insights"}),c.jsx("ul",{className:"space-y-2 text-sm sm:text-base text-slate-700",children:p.explanation.map((A,T)=>c.jsxs("li",{className:"flex items-start gap-2.5 leading-relaxed",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"}),c.jsx("span",{dangerouslySetInnerHTML:{__html:A.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-900 font-semibold">$1</strong>')}})]},T))})]}),p.codeExample&&c.jsxs("div",{className:"space-y-1.5",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500",children:[c.jsx(fc,{className:"w-4 h-4 text-emerald-600"}),c.jsx("span",{children:e.type==="Debugging"?"Corrected & Verified C Code":"Clean C Program Implementation"})]}),c.jsx(mc,{code:p.codeExample,language:"c",title:e.type==="Debugging"?"corrected.c":"example.c"})]}),p.interviewTip&&c.jsxs("div",{className:"rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 p-4 flex items-start gap-3",children:[c.jsx(J0,{className:"w-5 h-5 text-amber-600 shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("strong",{className:"text-xs font-bold uppercase tracking-wider text-amber-900 block mb-0.5",children:"Placement Interview Tip / Viva Trap"}),c.jsx("p",{className:"text-xs sm:text-sm text-amber-900/90 leading-relaxed",children:p.interviewTip})]})]})]})]}),c.jsxs("div",{className:"px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4",children:[c.jsxs("button",{onClick:i,disabled:!m,className:`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${m?"bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-xs":"bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed"}`,"aria-label":"Previous question",children:[c.jsx(B0,{className:"w-4 h-4"}),c.jsx("span",{children:"Previous"})]}),c.jsxs("div",{className:"text-xs sm:text-sm font-mono font-semibold text-slate-600 text-center",children:["Question ",c.jsx("span",{className:"text-blue-600 font-bold text-base",children:t+1})," of ",c.jsx("span",{className:"font-bold",children:n})]}),c.jsxs("button",{onClick:a,disabled:!b,className:`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${b?"bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20":"bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed"}`,"aria-label":"Next question",children:[c.jsx("span",{children:"Next"}),c.jsx(vp,{className:"w-4 h-4"})]})]})]})},hg=({questions:e,sections:t,masteredIds:n,onToggleMastered:i,bookmarkedIds:a,onToggleBookmarked:r,onSelectQuestion:l})=>{if(e.length===0)return c.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 shadow-xs",children:[c.jsx("p",{className:"text-lg font-semibold text-slate-700",children:"No questions match your current search or filters."}),c.jsx("p",{className:"text-sm mt-1 text-slate-400",children:'Try clearing your search query or selecting "All Sections".'})]});const s=u=>t.find(m=>m.id===u);return c.jsx("div",{className:"space-y-8",children:e.map((u,m)=>{const b=m>0?e[m-1]:null,p=!b||b.sectionId!==u.sectionId,f=s(u.sectionId);return c.jsxs(Dr.Fragment,{children:[p&&f&&c.jsx("div",{className:"rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 shadow-md border border-slate-800 my-6",children:c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500 text-white uppercase",children:["Section ",f.id]}),c.jsx("h2",{className:"text-lg sm:text-xl font-bold tracking-tight text-white",children:f.title})]}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:f.description})]}),c.jsx("div",{className:"flex items-center gap-2 shrink-0",children:c.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono font-semibold border border-slate-700",children:[c.jsx(ba,{className:"w-3.5 h-3.5 text-cyan-400"}),f.count," Questions"]})})]})}),c.jsx(Sp,{question:u,currentIndex:m,totalFiltered:e.length,onPrevious:()=>{m>0&&l(e[m-1].id)},onNext:()=>{m<e.length-1&&l(e[m+1].id)},isMastered:n.has(u.id),onToggleMastered:()=>i(u.id),isBookmarked:a.has(u.id),onToggleBookmarked:()=>r(u.id),hasPrevious:m>0,hasNext:m<e.length-1})]},u.id)})})},gg=()=>c.jsx("footer",{className:"mt-16 bg-white border-t border-slate-200 py-8 px-4 text-center",children:c.jsxs("div",{className:"w-full space-y-2",children:[c.jsx("h3",{className:"text-sm font-bold text-slate-800 tracking-tight",children:"C Programming Interview Notes"}),c.jsx("p",{className:"text-xs text-slate-500",children:"Simple notes for learning and interview preparation."}),c.jsx("p",{className:"text-[11px] text-slate-400 font-mono pt-2",children:"Curated from Campus Placement Mock Interview Bank • 201 Comprehensive Questions"})]})});function yg(){const[e,t]=k.useState(()=>{try{const z=localStorage.getItem("c_prep_mastered");return z?new Set(JSON.parse(z)):new Set}catch{return new Set}}),[n,i]=k.useState(()=>{try{const z=localStorage.getItem("c_prep_bookmarked");return z?new Set(JSON.parse(z)):new Set}catch{return new Set}}),[a,r]=k.useState(()=>{const Q=window.location.hash.match(/#q=(\d+)/);if(Q){const se=parseInt(Q[1],10);if(se>=1&&se<=Ni.length)return se}return 1}),[l,s]=k.useState(""),[u,m]=k.useState(null),[b,p]=k.useState(null),[f,y]=k.useState(null),[A,T]=k.useState("all"),[$,h]=k.useState("study"),[o,d]=k.useState(!1);k.useEffect(()=>{try{localStorage.setItem("c_prep_mastered",JSON.stringify(Array.from(e)))}catch(z){console.error(z)}},[e]),k.useEffect(()=>{try{localStorage.setItem("c_prep_bookmarked",JSON.stringify(Array.from(n)))}catch(z){console.error(z)}},[n]),k.useEffect(()=>{window.location.hash=`q=${a}`},[a]);const g=k.useMemo(()=>{const z=new Set;return Ni.forEach(Q=>{(u===null||Q.sectionId===u)&&z.add(Q.topic)}),Array.from(z).sort()},[u]),v=k.useMemo(()=>{const z=l.toLowerCase().trim();return Ni.filter(Q=>{if(A==="mastered"&&!e.has(Q.id)||A==="bookmarked"&&!n.has(Q.id)||u!==null&&Q.sectionId!==u||b!==null&&Q.topic!==b||f!==null&&Q.difficulty!==f)return!1;if(z){const se=Q.question.toLowerCase().includes(z),E=Q.topic.toLowerCase().includes(z),R=Q.subtopic.toLowerCase().includes(z),O=Q.answer.directAnswer.toLowerCase().includes(z),H=(Q.givenCode||"").toLowerCase().includes(z)||(Q.answer.codeExample||"").toLowerCase().includes(z),F=Q.pdfId.toLowerCase().includes(z),it=String(Q.id).includes(z);if(!se&&!E&&!R&&!O&&!H&&!F&&!it)return!1}return!0})},[l,u,b,f,A,e,n]),w=k.useMemo(()=>{const z=v.find(Q=>Q.id===a);return z||(v.length>0?v[0]:Ni[0])},[v,a]),x=k.useMemo(()=>v.findIndex(z=>z.id===w.id),[v,w]),C=k.useCallback(()=>{x>0&&(r(v[x-1].id),window.scrollTo({top:180,behavior:"smooth"}))},[x,v]),N=k.useCallback(()=>{x<v.length-1&&(r(v[x+1].id),window.scrollTo({top:180,behavior:"smooth"}))},[x,v]);k.useEffect(()=>{const z=Q=>{Q.target instanceof HTMLInputElement||Q.target instanceof HTMLTextAreaElement||(Q.key==="ArrowLeft"?C():Q.key==="ArrowRight"&&N())};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[C,N]);const D=z=>{t(Q=>{const se=new Set(Q);return se.has(z)?se.delete(z):se.add(z),se})},U=z=>{i(Q=>{const se=new Set(Q);return se.has(z)?se.delete(z):se.add(z),se})},le=z=>{r(z),$==="browse"&&h("study"),window.scrollTo({top:180,behavior:"smooth"})};return c.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900",children:[c.jsx(ug,{searchQuery:l,onSearchChange:s,totalQuestions:Ni.length,totalSections:Ti.length,totalTopics:g.length,masteredCount:e.size,bookmarkedCount:n.size,onToggleMobileMenu:()=>d(!0),filterStatus:A,onFilterStatusChange:T}),c.jsx(fg,{sections:Ti,selectedSectionId:u,onSelectSection:z=>{m(z),p(null)},topics:g,selectedTopic:b,onSelectTopic:p,selectedDifficulty:f,onSelectDifficulty:y,viewMode:$,onViewModeChange:h,filteredCount:v.length}),c.jsx(dg,{isOpen:o,onClose:()=>d(!1),questions:v,sections:Ti,currentQuestionId:w.id,onSelectQuestion:le,masteredIds:e,bookmarkedIds:n,selectedSectionId:u,onSelectSection:z=>{m(z),p(null)}}),c.jsx("main",{className:"flex-1 w-full px-2 sm:px-3 py-4",children:c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx(cg,{questions:v,sections:Ti,currentQuestionId:w.id,onSelectQuestion:le,masteredIds:e,bookmarkedIds:n,selectedSectionId:u,onSelectSection:z=>{m(z),p(null)}}),c.jsx("section",{className:"flex-1 min-w-0",children:v.length===0?c.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 shadow-xs",children:[c.jsx("p",{className:"text-lg font-bold text-slate-800",children:"No questions matched your criteria"}),c.jsx("p",{className:"text-sm mt-1 text-slate-500",children:"Try clearing your search query or reset filter pills to view all questions."}),c.jsx("button",{onClick:()=>{s(""),m(null),p(null),y(null),T("all")},className:"mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs",children:"Reset All Filters"})]}):$==="study"?c.jsx(Sp,{question:w,currentIndex:x>=0?x:0,totalFiltered:v.length,onPrevious:C,onNext:N,isMastered:e.has(w.id),onToggleMastered:()=>D(w.id),isBookmarked:n.has(w.id),onToggleBookmarked:()=>U(w.id),hasPrevious:x>0,hasNext:x<v.length-1}):c.jsx(hg,{questions:v,sections:Ti,masteredIds:e,onToggleMastered:D,bookmarkedIds:n,onToggleBookmarked:U,onSelectQuestion:le})})]})}),c.jsx(gg,{})]})}w0.createRoot(document.getElementById("root")).render(c.jsx(Dr.StrictMode,{children:c.jsx(yg,{})}));
