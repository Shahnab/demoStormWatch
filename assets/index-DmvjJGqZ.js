(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function eS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fh={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function nS(){if(Zg)return Ho;Zg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var Kg;function iS(){return Kg||(Kg=1,fh.exports=nS()),fh.exports}var wt=iS(),hh={exports:{}},Go={},dh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function aS(){return Qg||(Qg=1,(function(r){function t(F,V){var ot=F.length;F.push(V);t:for(;0<ot;){var St=ot-1>>>1,it=F[St];if(0<l(it,V))F[St]=V,F[ot]=it,ot=St;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var V=F[0],ot=F.pop();if(ot!==V){F[0]=ot;t:for(var St=0,it=F.length,D=it>>>1;St<D;){var q=2*(St+1)-1,at=F[q],_t=q+1,Tt=F[_t];if(0>l(at,ot))_t<it&&0>l(Tt,at)?(F[St]=Tt,F[_t]=ot,St=_t):(F[St]=at,F[q]=ot,St=q);else if(_t<it&&0>l(Tt,ot))F[St]=Tt,F[_t]=ot,St=_t;else break t}}return V}function l(F,V){var ot=F.sortIndex-V.sortIndex;return ot!==0?ot:F.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,S=!1,b=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(F){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=F)s(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=i(p)}}function P(F){if(T=!1,L(F),!b)if(i(m)!==null)b=!0,I||(I=!0,Q());else{var V=i(p);V!==null&&ft(P,V.startTime-F)}}var I=!1,z=-1,j=5,A=-1;function w(){return M?!0:!(r.unstable_now()-A<j)}function H(){if(M=!1,I){var F=r.unstable_now();A=F;var V=!0;try{t:{b=!1,T&&(T=!1,O(z),z=-1),S=!0;var ot=x;try{e:{for(L(F),_=i(m);_!==null&&!(_.expirationTime>F&&w());){var St=_.callback;if(typeof St=="function"){_.callback=null,x=_.priorityLevel;var it=St(_.expirationTime<=F);if(F=r.unstable_now(),typeof it=="function"){_.callback=it,L(F),V=!0;break e}_===i(m)&&s(m),L(F)}else s(m);_=i(m)}if(_!==null)V=!0;else{var D=i(p);D!==null&&ft(P,D.startTime-F),V=!1}}break t}finally{_=null,x=ot,S=!1}V=void 0}}finally{V?Q():I=!1}}}var Q;if(typeof U=="function")Q=function(){U(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ht=tt.port2;tt.port1.onmessage=H,Q=function(){ht.postMessage(null)}}else Q=function(){v(H,0)};function ft(F,V){z=v(function(){F(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var ot=x;x=V;try{return F()}finally{x=ot}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ot=x;x=F;try{return V()}finally{x=ot}},r.unstable_scheduleCallback=function(F,V,ot){var St=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?St+ot:St):ot=St,F){case 1:var it=-1;break;case 2:it=250;break;case 5:it=1073741823;break;case 4:it=1e4;break;default:it=5e3}return it=ot+it,F={id:g++,callback:V,priorityLevel:F,startTime:ot,expirationTime:it,sortIndex:-1},ot>St?(F.sortIndex=ot,t(p,F),i(m)===null&&F===i(p)&&(T?(O(z),z=-1):T=!0,ft(P,ot-St))):(F.sortIndex=it,t(m,F),b||S||(b=!0,I||(I=!0,Q()))),F},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(F){var V=x;return function(){var ot=x;x=V;try{return F.apply(this,arguments)}finally{x=ot}}}})(ph)),ph}var Jg;function sS(){return Jg||(Jg=1,dh.exports=aS()),dh.exports}var mh={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function rS(){if($g)return fe;$g=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(D,q,at){this.props=D,this.context=q,this.refs=M,this.updater=at||b}v.prototype.isReactComponent={},v.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function O(){}O.prototype=v.prototype;function U(D,q,at){this.props=D,this.context=q,this.refs=M,this.updater=at||b}var L=U.prototype=new O;L.constructor=U,T(L,v.prototype),L.isPureReactComponent=!0;var P=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function A(D,q,at){var _t=at.ref;return{$$typeof:r,type:D,key:q,ref:_t!==void 0?_t:null,props:at}}function w(D,q){return A(D.type,q,D.props)}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function Q(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(at){return q[at]})}var tt=/\/+/g;function ht(D,q){return typeof D=="object"&&D!==null&&D.key!=null?Q(""+D.key):q.toString(36)}function ft(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(q){D.status==="pending"&&(D.status="fulfilled",D.value=q)},function(q){D.status==="pending"&&(D.status="rejected",D.reason=q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function F(D,q,at,_t,Tt){var Z=typeof D;(Z==="undefined"||Z==="boolean")&&(D=null);var lt=!1;if(D===null)lt=!0;else switch(Z){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(D.$$typeof){case r:case t:lt=!0;break;case g:return lt=D._init,F(lt(D._payload),q,at,_t,Tt)}}if(lt)return Tt=Tt(D),lt=_t===""?"."+ht(D,0):_t,P(Tt)?(at="",lt!=null&&(at=lt.replace(tt,"$&/")+"/"),F(Tt,q,at,"",function(Nt){return Nt})):Tt!=null&&(H(Tt)&&(Tt=w(Tt,at+(Tt.key==null||D&&D.key===Tt.key?"":(""+Tt.key).replace(tt,"$&/")+"/")+lt)),q.push(Tt)),1;lt=0;var Et=_t===""?".":_t+":";if(P(D))for(var Dt=0;Dt<D.length;Dt++)_t=D[Dt],Z=Et+ht(_t,Dt),lt+=F(_t,q,at,Z,Tt);else if(Dt=S(D),typeof Dt=="function")for(D=Dt.call(D),Dt=0;!(_t=D.next()).done;)_t=_t.value,Z=Et+ht(_t,Dt++),lt+=F(_t,q,at,Z,Tt);else if(Z==="object"){if(typeof D.then=="function")return F(ft(D),q,at,_t,Tt);throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return lt}function V(D,q,at){if(D==null)return D;var _t=[],Tt=0;return F(D,_t,"","",function(Z){return q.call(at,Z,Tt++)}),_t}function ot(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(at){(D._status===0||D._status===-1)&&(D._status=1,D._result=at)},function(at){(D._status===0||D._status===-1)&&(D._status=2,D._result=at)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var St=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},it={map:V,forEach:function(D,q,at){V(D,function(){q.apply(this,arguments)},at)},count:function(D){var q=0;return V(D,function(){q++}),q},toArray:function(D){return V(D,function(q){return q})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return fe.Activity=_,fe.Children=it,fe.Component=v,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=U,fe.StrictMode=s,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,fe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},fe.cache=function(D){return function(){return D.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(D,q,at){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var _t=T({},D.props),Tt=D.key;if(q!=null)for(Z in q.key!==void 0&&(Tt=""+q.key),q)!j.call(q,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&q.ref===void 0||(_t[Z]=q[Z]);var Z=arguments.length-2;if(Z===1)_t.children=at;else if(1<Z){for(var lt=Array(Z),Et=0;Et<Z;Et++)lt[Et]=arguments[Et+2];_t.children=lt}return A(D.type,Tt,_t)},fe.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},fe.createElement=function(D,q,at){var _t,Tt={},Z=null;if(q!=null)for(_t in q.key!==void 0&&(Z=""+q.key),q)j.call(q,_t)&&_t!=="key"&&_t!=="__self"&&_t!=="__source"&&(Tt[_t]=q[_t]);var lt=arguments.length-2;if(lt===1)Tt.children=at;else if(1<lt){for(var Et=Array(lt),Dt=0;Dt<lt;Dt++)Et[Dt]=arguments[Dt+2];Tt.children=Et}if(D&&D.defaultProps)for(_t in lt=D.defaultProps,lt)Tt[_t]===void 0&&(Tt[_t]=lt[_t]);return A(D,Z,Tt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(D){return{$$typeof:d,render:D}},fe.isValidElement=H,fe.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:ot}},fe.memo=function(D,q){return{$$typeof:p,type:D,compare:q===void 0?null:q}},fe.startTransition=function(D){var q=z.T,at={};z.T=at;try{var _t=D(),Tt=z.S;Tt!==null&&Tt(at,_t),typeof _t=="object"&&_t!==null&&typeof _t.then=="function"&&_t.then(I,St)}catch(Z){St(Z)}finally{q!==null&&at.types!==null&&(q.types=at.types),z.T=q}},fe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},fe.use=function(D){return z.H.use(D)},fe.useActionState=function(D,q,at){return z.H.useActionState(D,q,at)},fe.useCallback=function(D,q){return z.H.useCallback(D,q)},fe.useContext=function(D){return z.H.useContext(D)},fe.useDebugValue=function(){},fe.useDeferredValue=function(D,q){return z.H.useDeferredValue(D,q)},fe.useEffect=function(D,q){return z.H.useEffect(D,q)},fe.useEffectEvent=function(D){return z.H.useEffectEvent(D)},fe.useId=function(){return z.H.useId()},fe.useImperativeHandle=function(D,q,at){return z.H.useImperativeHandle(D,q,at)},fe.useInsertionEffect=function(D,q){return z.H.useInsertionEffect(D,q)},fe.useLayoutEffect=function(D,q){return z.H.useLayoutEffect(D,q)},fe.useMemo=function(D,q){return z.H.useMemo(D,q)},fe.useOptimistic=function(D,q){return z.H.useOptimistic(D,q)},fe.useReducer=function(D,q,at){return z.H.useReducer(D,q,at)},fe.useRef=function(D){return z.H.useRef(D)},fe.useState=function(D){return z.H.useState(D)},fe.useSyncExternalStore=function(D,q,at){return z.H.useSyncExternalStore(D,q,at)},fe.useTransition=function(){return z.H.useTransition()},fe.version="19.2.4",fe}var t_;function Kd(){return t_||(t_=1,mh.exports=rS()),mh.exports}var gh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function oS(){if(e_)return Pn;e_=1;var r=Kd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Pn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.4",Pn}var n_;function lS(){if(n_)return gh.exports;n_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gh.exports=oS(),gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function cS(){if(i_)return Go;i_=1;var r=sS(),t=Kd(),i=lS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var ft=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},St=[],it=-1;function D(e){return{current:e}}function q(e){0>it||(e.current=St[it],St[it]=null,it--)}function at(e,n){it++,St[it]=e.current,e.current=n}var _t=D(null),Tt=D(null),Z=D(null),lt=D(null);function Et(e,n){switch(at(Z,n),at(Tt,e),at(_t,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vg(n),e=xg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(_t),at(_t,e)}function Dt(){q(_t),q(Tt),q(Z)}function Nt(e){e.memoizedState!==null&&at(lt,e);var n=_t.current,a=xg(n,e.type);n!==a&&(at(Tt,e),at(_t,a))}function $t(e){Tt.current===e&&(q(_t),q(Tt)),lt.current===e&&(q(lt),zo._currentValue=ot)}var ue,se;function Kt(e){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+e+se}var Se=!1;function ne(e,n){if(!e||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var rt=ut}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ut){rt=ut}e.call(vt.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var B=y.split(`
`),nt=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===nt.length)for(o=B.length-1,u=nt.length-1;1<=o&&0<=u&&B[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==nt[u]){var pt=`
`+B[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function me(e,n){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return e.child!==n&&n!==null?Kt("Suspense Fallback"):Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return ne(e.type,!1);case 11:return ne(e.type.render,!1);case 1:return ne(e.type,!0);case 31:return Kt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=me(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var we=Object.prototype.hasOwnProperty,de=r.unstable_scheduleCallback,Ce=r.unstable_cancelCallback,Ht=r.unstable_shouldYield,N=r.unstable_requestPaint,E=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,Qt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,Wt=r.log,re=r.unstable_setDisableYieldValue,bt=null,At=null;function Gt(e){if(typeof Wt=="function"&&re(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(bt,e)}catch{}}var It=Math.clz32?Math.clz32:W,Lt=Math.log,ge=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Lt(e)/ge|0)|0}var Pt=256,Rt=262144,Bt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Mt(o):(y&=R,y!==0?u=Mt(y):a||(a=R&~e,a!==0&&(u=Mt(a))))):(R=o&~f,R!==0?u=Mt(R):y!==0?u=Mt(y):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function De(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,nt=e.hiddenUpdates;for(a=y&~a;0<a;){var pt=31-It(a),vt=1<<pt;R[pt]=0,B[pt]=-1;var rt=nt[pt];if(rt!==null)for(nt[pt]=null,pt=0;pt<rt.length;pt++){var ut=rt[pt];ut!==null&&(ut.lane&=-536870913)}a&=~vt}o!==0&&cl(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function cl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Yr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Bs(e,n){var a=n&-n;return a=(a&42)!==0?1:jr(a),(a&(e.suspendedLanes|n))!==0?0:a}function jr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zr(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Vg(e.type))}function Pi(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var hi=Math.random().toString(36).slice(2),ln="__reactFiber$"+hi,Mn="__reactProps$"+hi,Ti="__reactContainer$"+hi,Gs="__reactEvents$"+hi,Vs="__reactListeners$"+hi,ul="__reactHandles$"+hi,Kr="__reactResources$"+hi,rs="__reactMarker$"+hi;function Qr(e){delete e[ln],delete e[Mn],delete e[Gs],delete e[Vs],delete e[ul]}function Ta(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ag(e);e!==null;){if(a=e[ln])return a;e=Ag(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[ln]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function os(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ra(e){var n=e[Kr];return n||(n=e[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[rs]=!0}var K=new Set,ct={};function st(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(ct[e]=n,e=0;e<n.length;e++)K.add(n[e])}var Ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},zt={};function kt(e){return we.call(zt,e)?!0:we.call(Vt,e)?!1:Ot.test(e)?zt[e]=!0:(Vt[e]=!0,!1)}function qt(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){if(!e._valueTracker){var n=Pe(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function Ie(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Pe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ze=/[\n"\\]/g;function ce(e){return e.replace(ze,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,o,u,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?bn(e,y,ie(n)):a!=null?bn(e,y,ie(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function Yi(e,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ze(e);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ze(e)}function bn(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function di(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function He(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ze(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ks(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Rn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Rn(e,f,n[f])}function Ai(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return Jv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,Ws=null;function _p(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ie(o)}break t;case"textarea":He(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&di(e,!!a.multiple,n,!1)}}}var cu=!1;function vp(e,n,a){if(cu)return e(n,a);cu=!0;try{var o=e(n);return o}finally{if(cu=!1,(Xs!==null||Ws!==null)&&(Jl(),Xs&&(n=Xs,e=Ws,Ws=Xs=null,_p(n),e)))for(n=0;n<e.length;n++)_p(e[n])}}function Jr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Zi)try{var $r={};Object.defineProperty($r,"passive",{get:function(){uu=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{uu=!1}var Ca=null,fu=null,hl=null;function xp(){if(hl)return hl;var e,n=fu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function yp(){return!1}function Wn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:yp,this.isPropagationStopped=yp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Wn(ls),to=_({},ls,{view:0,detail:0}),$v=Wn(to),hu,du,eo,gl=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(hu=e.screenX-eo.screenX,du=e.screenY-eo.screenY):du=hu=0,eo=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),Sp=Wn(gl),tx=_({},gl,{dataTransfer:0}),ex=Wn(tx),nx=_({},to,{relatedTarget:0}),pu=Wn(nx),ix=_({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=Wn(ix),sx=_({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=Wn(sx),ox=_({},ls,{data:0}),Mp=Wn(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ux[e])?!!n[e]:!1}function mu(){return fx}var hx=_({},to,{key:function(e){if(e.key){var n=lx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dx=Wn(hx),px=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=Wn(px),mx=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),gx=Wn(mx),_x=_({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=Wn(_x),xx=_({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=Wn(xx),Sx=_({},ls,{newState:0,oldState:0}),Mx=Wn(Sx),Ex=[9,13,27,32],gu=Zi&&"CompositionEvent"in window,no=null;Zi&&"documentMode"in document&&(no=document.documentMode);var bx=Zi&&"TextEvent"in window&&!no,bp=Zi&&(!gu||no&&8<no&&11>=no),Tp=" ",Ap=!1;function Rp(e,n){switch(e){case"keyup":return Ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function Tx(e,n){switch(e){case"compositionend":return Cp(n);case"keypress":return n.which!==32?null:(Ap=!0,Tp);case"textInput":return e=n.data,e===Tp&&Ap?null:e;default:return null}}function Ax(e,n){if(qs)return e==="compositionend"||!gu&&Rp(e,n)?(e=xp(),hl=fu=Ca=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rx[e.type]:n==="textarea"}function Dp(e,n,a,o){Xs?Ws?Ws.push(o):Ws=[o]:Xs=o,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var io=null,ao=null;function Cx(e){hg(e,0)}function _l(e){var n=os(e);if(Ie(n))return e}function Up(e,n){if(e==="change")return n}var Lp=!1;if(Zi){var _u;if(Zi){var vu="oninput"in document;if(!vu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),vu=typeof Np.oninput=="function"}_u=vu}else _u=!1;Lp=_u&&(!document.documentMode||9<document.documentMode)}function Op(){io&&(io.detachEvent("onpropertychange",Pp),ao=io=null)}function Pp(e){if(e.propertyName==="value"&&_l(ao)){var n=[];Dp(n,ao,e,lu(e)),vp(Cx,n)}}function wx(e,n,a){e==="focusin"?(Op(),io=n,ao=a,io.attachEvent("onpropertychange",Pp)):e==="focusout"&&Op()}function Dx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(ao)}function Ux(e,n){if(e==="click")return _l(n)}function Lx(e,n){if(e==="input"||e==="change")return _l(n)}function Nx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ti=typeof Object.is=="function"?Object.is:Nx;function so(e,n){if(ti(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!we.call(n,u)||!ti(e[u],n[u]))return!1}return!0}function zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,n){var a=zp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zp(a)}}function Ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ox=Zi&&"documentMode"in document&&11>=document.documentMode,Ys=null,yu=null,ro=null,Su=!1;function Hp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Ys==null||Ys!==Jt(o)||(o=Ys,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&so(ro,o)||(ro=o,o=sc(yu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ys)))}function cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Mu={},Gp={};Zi&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function us(e){if(Mu[e])return Mu[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gp)return Mu[e]=n[a];return e}var Vp=us("animationend"),kp=us("animationiteration"),Xp=us("animationstart"),Px=us("transitionrun"),zx=us("transitionstart"),Fx=us("transitioncancel"),Wp=us("transitionend"),qp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ri(e,n){qp.set(e,n),st(n,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],Zs=0,bu=0;function xl(){for(var e=Zs,n=bu=Zs=0;n<e;){var a=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Yp(a,u,f)}}function yl(e,n,a,o){pi[Zs++]=e,pi[Zs++]=n,pi[Zs++]=a,pi[Zs++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return yl(e,n,a,o),Sl(e)}function fs(e,n){return yl(e,null,null,n),Sl(e)}function Yp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sl(e){if(50<wo)throw wo=0,Pf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ks={};function Ix(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new Ix(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Au(e)&&(y=1);else if(typeof e=="string")y=ky(e,a,_t.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ei(31,a,n,u),e.elementType=A,e.lanes=f,e;case T:return hs(a.children,u,f,n);case M:y=8,u|=24;break;case v:return e=ei(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case P:return e=ei(13,a,n,u),e.elementType=P,e.lanes=f,e;case I:return e=ei(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case O:y=9;break t;case L:y=11;break t;case z:y=14;break t;case j:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ei(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function hs(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function Zp(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function Cu(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Kp=new WeakMap;function mi(e,n){if(typeof e=="object"&&e!==null){var a=Kp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Kp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Qs=[],Js=0,El=null,oo=0,gi=[],_i=0,wa=null,zi=1,Fi="";function Qi(e,n){Qs[Js++]=oo,Qs[Js++]=El,El=e,oo=n}function Qp(e,n,a){gi[_i++]=zi,gi[_i++]=Fi,gi[_i++]=wa,wa=e;var o=zi;e=Fi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,zi=1<<32-It(n)+u|a<<u|o,Fi=f+e}else zi=1<<f|a<<u|o,Fi=e}function wu(e){e.return!==null&&(Qi(e,1),Qp(e,1,0))}function Du(e){for(;e===El;)El=Qs[--Js],Qs[Js]=null,oo=Qs[--Js],Qs[Js]=null;for(;e===wa;)wa=gi[--_i],gi[_i]=null,Fi=gi[--_i],gi[_i]=null,zi=gi[--_i],gi[_i]=null}function Jp(e,n){gi[_i++]=zi,gi[_i++]=Fi,gi[_i++]=wa,zi=n.id,Fi=n.overflow,wa=e}var Cn=null,Ke=null,Ae=!1,Da=null,vi=!1,Uu=Error(s(519));function Ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(mi(n,e)),Uu}function $p(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Mn]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Ee(Uo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Yi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||gg(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ua(e,!0)}function tm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Cn=Cn.return}}function $s(e){if(e!==Cn)return!1;if(!Ae)return tm(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&Ke&&Ua(e),tm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Tg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Tg(e)}else n===27?(n=Ke,Wa(e.type)?(e=eh,eh=null,Ke=e):Ke=n):Ke=Cn?yi(e.stateNode.nextSibling):null;return!0}function ds(){Ke=Cn=null,Ae=!1}function Lu(){var e=Da;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Da=null),e}function lo(e){Da===null?Da=[e]:Da.push(e)}var Nu=D(null),ps=null,Ji=null;function La(e,n,a){at(Nu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Nu.current,q(Nu)}function Ou(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Ou(f.return,a,e),o||(y=null);break t}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ou(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function tr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;ti(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===lt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}u=u.return}e!==null&&Pu(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return em(ps,e)}function Tl(e,n){return ps===null&&ms(e),em(e,n)}function em(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var Bx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Hx=r.unstable_scheduleCallback,Gx=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Bx,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&Hx(Gx,function(){e.controller.abort()})}var uo=null,Fu=0,er=0,nr=null;function Vx(e,n){if(uo===null){var a=uo=[];Fu=0,er=Gf(),nr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(nm,nm),n}function nm(){if(--Fu===0&&uo!==null){nr!==null&&(nr.status="fulfilled");var e=uo;uo=null,er=0,nr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function kx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var im=F.S;F.S=function(e,n){H0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vx(e,n),im!==null&&im(e,n)};var gs=D(null);function Iu(){var e=gs.current;return e!==null?e:je.pooledCache}function Al(e,n){n===null?at(gs,gs.current):at(gs,n.pool)}function am(){var e=Iu();return e===null?null:{parent:cn._currentValue,pool:e}}var ir=Error(s(460)),Bu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lm(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lm(e),e}throw vs=n,ir}}function _s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vs=a,ir):a}}var vs=null;function om(){if(vs===null)throw Error(s(459));var e=vs;return vs=null,e}function lm(e){if(e===ir||e===Rl)throw Error(s(483))}var ar=null,fo=0;function wl(e){var n=fo;return fo+=1,ar===null&&(ar=[]),rm(ar,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function cm(e){function n(J,X){if(e){var et=J.deletions;et===null?(J.deletions=[X],J.flags|=16):et.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=Ki(J,X),J.index=0,J.sibling=null,J}function f(J,X,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<X?(J.flags|=67108866,X):et):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function y(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,X,et,gt){return X===null||X.tag!==6?(X=Ru(et,J.mode,gt),X.return=J,X):(X=u(X,et),X.return=J,X)}function B(J,X,et,gt){var te=et.type;return te===T?pt(J,X,et.props.children,gt,et.key):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&_s(te)===X.type)?(X=u(X,et.props),ho(X,et),X.return=J,X):(X=Ml(et.type,et.key,et.props,null,J.mode,gt),ho(X,et),X.return=J,X)}function nt(J,X,et,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Cu(et,J.mode,gt),X.return=J,X):(X=u(X,et.children||[]),X.return=J,X)}function pt(J,X,et,gt,te){return X===null||X.tag!==7?(X=hs(et,J.mode,gt,te),X.return=J,X):(X=u(X,et),X.return=J,X)}function vt(J,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ru(""+X,J.mode,et),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return et=Ml(X.type,X.key,X.props,null,J.mode,et),ho(et,X),et.return=J,et;case b:return X=Cu(X,J.mode,et),X.return=J,X;case j:return X=_s(X),vt(J,X,et)}if(ft(X)||Q(X))return X=hs(X,J.mode,et,null),X.return=J,X;if(typeof X.then=="function")return vt(J,wl(X),et);if(X.$$typeof===U)return vt(J,Tl(J,X),et);Dl(J,X)}return null}function rt(J,X,et,gt){var te=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return te!==null?null:R(J,X,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===te?B(J,X,et,gt):null;case b:return et.key===te?nt(J,X,et,gt):null;case j:return et=_s(et),rt(J,X,et,gt)}if(ft(et)||Q(et))return te!==null?null:pt(J,X,et,gt,null);if(typeof et.then=="function")return rt(J,X,wl(et),gt);if(et.$$typeof===U)return rt(J,X,Tl(J,et),gt);Dl(J,et)}return null}function ut(J,X,et,gt,te){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return J=J.get(et)||null,R(X,J,""+gt,te);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case S:return J=J.get(gt.key===null?et:gt.key)||null,B(X,J,gt,te);case b:return J=J.get(gt.key===null?et:gt.key)||null,nt(X,J,gt,te);case j:return gt=_s(gt),ut(J,X,et,gt,te)}if(ft(gt)||Q(gt))return J=J.get(et)||null,pt(X,J,gt,te,null);if(typeof gt.then=="function")return ut(J,X,et,wl(gt),te);if(gt.$$typeof===U)return ut(J,X,et,Tl(X,gt),te);Dl(X,gt)}return null}function Xt(J,X,et,gt){for(var te=null,Le=null,jt=X,_e=X=0,Te=null;jt!==null&&_e<et.length;_e++){jt.index>_e?(Te=jt,jt=null):Te=jt.sibling;var Ne=rt(J,jt,et[_e],gt);if(Ne===null){jt===null&&(jt=Te);break}e&&jt&&Ne.alternate===null&&n(J,jt),X=f(Ne,X,_e),Le===null?te=Ne:Le.sibling=Ne,Le=Ne,jt=Te}if(_e===et.length)return a(J,jt),Ae&&Qi(J,_e),te;if(jt===null){for(;_e<et.length;_e++)jt=vt(J,et[_e],gt),jt!==null&&(X=f(jt,X,_e),Le===null?te=jt:Le.sibling=jt,Le=jt);return Ae&&Qi(J,_e),te}for(jt=o(jt);_e<et.length;_e++)Te=ut(jt,J,_e,et[_e],gt),Te!==null&&(e&&Te.alternate!==null&&jt.delete(Te.key===null?_e:Te.key),X=f(Te,X,_e),Le===null?te=Te:Le.sibling=Te,Le=Te);return e&&jt.forEach(function(Ka){return n(J,Ka)}),Ae&&Qi(J,_e),te}function ae(J,X,et,gt){if(et==null)throw Error(s(151));for(var te=null,Le=null,jt=X,_e=X=0,Te=null,Ne=et.next();jt!==null&&!Ne.done;_e++,Ne=et.next()){jt.index>_e?(Te=jt,jt=null):Te=jt.sibling;var Ka=rt(J,jt,Ne.value,gt);if(Ka===null){jt===null&&(jt=Te);break}e&&jt&&Ka.alternate===null&&n(J,jt),X=f(Ka,X,_e),Le===null?te=Ka:Le.sibling=Ka,Le=Ka,jt=Te}if(Ne.done)return a(J,jt),Ae&&Qi(J,_e),te;if(jt===null){for(;!Ne.done;_e++,Ne=et.next())Ne=vt(J,Ne.value,gt),Ne!==null&&(X=f(Ne,X,_e),Le===null?te=Ne:Le.sibling=Ne,Le=Ne);return Ae&&Qi(J,_e),te}for(jt=o(jt);!Ne.done;_e++,Ne=et.next())Ne=ut(jt,J,_e,Ne.value,gt),Ne!==null&&(e&&Ne.alternate!==null&&jt.delete(Ne.key===null?_e:Ne.key),X=f(Ne,X,_e),Le===null?te=Ne:Le.sibling=Ne,Le=Ne);return e&&jt.forEach(function(tS){return n(J,tS)}),Ae&&Qi(J,_e),te}function qe(J,X,et,gt){if(typeof et=="object"&&et!==null&&et.type===T&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var te=et.key;X!==null;){if(X.key===te){if(te=et.type,te===T){if(X.tag===7){a(J,X.sibling),gt=u(X,et.props.children),gt.return=J,J=gt;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&_s(te)===X.type){a(J,X.sibling),gt=u(X,et.props),ho(gt,et),gt.return=J,J=gt;break t}a(J,X);break}else n(J,X);X=X.sibling}et.type===T?(gt=hs(et.props.children,J.mode,gt,et.key),gt.return=J,J=gt):(gt=Ml(et.type,et.key,et.props,null,J.mode,gt),ho(gt,et),gt.return=J,J=gt)}return y(J);case b:t:{for(te=et.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(J,X.sibling),gt=u(X,et.children||[]),gt.return=J,J=gt;break t}else{a(J,X);break}else n(J,X);X=X.sibling}gt=Cu(et,J.mode,gt),gt.return=J,J=gt}return y(J);case j:return et=_s(et),qe(J,X,et,gt)}if(ft(et))return Xt(J,X,et,gt);if(Q(et)){if(te=Q(et),typeof te!="function")throw Error(s(150));return et=te.call(et),ae(J,X,et,gt)}if(typeof et.then=="function")return qe(J,X,wl(et),gt);if(et.$$typeof===U)return qe(J,X,Tl(J,et),gt);Dl(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(J,X.sibling),gt=u(X,et),gt.return=J,J=gt):(a(J,X),gt=Ru(et,J.mode,gt),gt.return=J,J=gt),y(J)):a(J,X)}return function(J,X,et,gt){try{fo=0;var te=qe(J,X,et,gt);return ar=null,te}catch(jt){if(jt===ir||jt===Rl)throw jt;var Le=ei(29,jt,null,J.mode);return Le.lanes=gt,Le.return=J,Le}finally{}}}var xs=cm(!0),um=cm(!1),Na=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Fe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(e),Yp(e,null,a),n}return yl(e,o,n,a),Sl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yr(e,a)}}function Vu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ku=!1;function mo(){if(ku){var e=nr;if(e!==null)throw e}}function go(e,n,a,o){ku=!1;var u=e.updateQueue;Na=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,nt=B.next;B.next=null,y===null?f=nt:y.next=nt,y=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==y&&(R===null?pt.firstBaseUpdate=nt:R.next=nt,pt.lastBaseUpdate=B))}if(f!==null){var vt=u.baseState;y=0,pt=nt=B=null,R=f;do{var rt=R.lane&-536870913,ut=rt!==R.lane;if(ut?(be&rt)===rt:(o&rt)===rt){rt!==0&&rt===er&&(ku=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,ae=R;rt=n;var qe=a;switch(ae.tag){case 1:if(Xt=ae.payload,typeof Xt=="function"){vt=Xt.call(qe,vt,rt);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ae.payload,rt=typeof Xt=="function"?Xt.call(qe,vt,rt):Xt,rt==null)break t;vt=_({},vt,rt);break t;case 2:Na=!0}}rt=R.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(nt=pt=ut,B=vt):pt=pt.next=ut,y|=rt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);pt===null&&(B=vt),u.baseState=B,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Ha|=y,e.lanes=y,e.memoizedState=vt}}function fm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function hm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fm(a[e],n)}var sr=D(null),Ul=D(0);function dm(e,n){e=la,at(Ul,e),at(sr,n),la=e|n.baseLanes}function Xu(){at(Ul,la),at(sr,sr.current)}function Wu(){la=Ul.current,q(sr),q(Ul)}var ni=D(null),xi=null;function za(e){var n=e.alternate;at(rn,rn.current&1),at(ni,e),xi===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(xi=e)}function qu(e){at(rn,rn.current),at(ni,e),xi===null&&(xi=e)}function pm(e){e.tag===22?(at(rn,rn.current),at(ni,e),xi===null&&(xi=e)):Fa()}function Fa(){at(rn,rn.current),at(ni,ni.current)}function ii(e){q(ni),xi===e&&(xi=null),q(rn)}var rn=D(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||th(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,pe=null,Xe=null,un=null,Nl=!1,rr=!1,ys=!1,Ol=0,_o=0,or=null,Xx=0;function nn(){throw Error(s(321))}function Yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ti(e[a],n[a]))return!1;return!0}function ju(e,n,a,o,u,f){return ta=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Qm:uf,ys=!1,f=a(o,u),ys=!1,rr&&(f=gm(n,a,o,u)),mm(e),f}function mm(e){F.H=yo;var n=Xe!==null&&Xe.next!==null;if(ta=0,un=Xe=pe=null,Nl=!1,_o=0,or=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&bl(e)&&(fn=!0))}function gm(e,n,a,o){pe=e;var u=0;do{if(rr&&(or=null),_o=0,rr=!1,25<=u)throw Error(s(301));if(u+=1,un=Xe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Jm,f=n(a,o)}while(rr);return f}function Wx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(pe.flags|=1024),n}function Zu(){var e=Ol!==0;return Ol=0,e}function Ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Qu(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}ta=0,un=Xe=pe=null,rr=!1,_o=Ol=0,or=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pe.memoizedState=un=e:un=un.next=e,un}function on(){if(Xe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=un===null?pe.memoizedState:un.next;if(n!==null)un=n,Xe=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},un===null?pe.memoizedState=un=e:un=un.next=e}return un}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,or===null&&(or=[]),e=rm(or,e,n),n=pe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Qm:uf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===U)return wn(e)}throw Error(s(438,String(e)))}function Ju(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=on();return $u(n,Xe,e)}function $u(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=y=null,B=null,nt=n,pt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(be&vt)===vt:(ta&vt)===vt){var rt=nt.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===er&&(pt=!0);else if((ta&rt)===rt){nt=nt.next,rt===er&&(pt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(R=B=vt,y=f):B=B.next=vt,pe.lanes|=rt,Ha|=rt;vt=nt.action,ys&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else rt={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(R=B=rt,y=f):B=B.next=rt,pe.lanes|=vt,Ha|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(B===null?y=f:B.next=R,!ti(f,e.memoizedState)&&(fn=!0,pt&&(a=nr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function tf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);ti(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function _m(e,n,a){var o=pe,u=on(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ti((Xe||u).memoizedState,a);if(y&&(u.memoizedState=a,fn=!0),u=u.queue,af(ym.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,lr(9,{destroy:void 0},xm.bind(null,o,u,a,n),null),je===null)throw Error(s(349));f||(ta&127)!==0||vm(o,n,a)}return a}function vm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Pl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function xm(e,n,a,o){n.value=a,n.getSnapshot=o,Sm(n)&&Mm(e)}function ym(e,n,a){return a(function(){Sm(n)&&Mm(e)})}function Sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ti(e,a)}catch{return!0}}function Mm(e){var n=fs(e,2);n!==null&&Kn(n,e,2)}function ef(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),ys){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function Em(e,n,a,o){return e.baseState=a,$u(e,Xe,typeof o=="function"?o:ea)}function qx(e,n,a,o,u){if(Hl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var R=a(u,o),B=F.S;B!==null&&B(y,R),Tm(e,n,R)}catch(nt){nf(e,n,nt)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,o),Tm(e,n,f)}catch(nt){nf(e,n,nt)}}function Tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Am(e,n,o)},function(o){return nf(e,n,o)}):Am(e,n,a)}function Am(e,n,a){n.status="fulfilled",n.value=a,Rm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bm(e,a)))}function nf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Rm(n),n=n.next;while(n!==o)}e.action=null}function Rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cm(e,n){return n}function wm(e,n){if(Ae){var a=je.formState;if(a!==null){t:{var o=pe;if(Ae){if(Ke){e:{for(var u=Ke,f=vi;u.nodeType!==8;){if(!f){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=yi(u.nextSibling),o=u.data==="F!";break t}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:n},a.queue=o,a=jm.bind(null,pe,o),o.dispatch=a,o=ef(!1),f=cf.bind(null,pe,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=qx.bind(null,pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Dm(e){var n=on();return Um(n,Xe,e)}function Um(e,n,a){if(n=$u(e,n,Cm)[0],e=Fl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(y){throw y===ir?Rl:y}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,lr(9,{destroy:void 0},Yx.bind(null,u,a),null)),[o,f,e]}function Yx(e,n){e.action=n}function Lm(e){var n=on(),a=Xe;if(a!==null)return Um(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function lr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Pl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Nm(){return on().memoizedState}function Il(e,n,a,o){var u=Gn();pe.flags|=e,u.memoizedState=lr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;Xe!==null&&o!==null&&Yu(o,Xe.memoizedState.deps)?u.memoizedState=lr(n,f,a,o):(pe.flags|=e,u.memoizedState=lr(1|n,f,a,o))}function Om(e,n){Il(8390656,8,e,n)}function af(e,n){Bl(2048,8,e,n)}function jx(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Pl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Pm(e){var n=on().memoizedState;return jx({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function zm(e,n){return Bl(4,2,e,n)}function Fm(e,n){return Bl(4,4,e,n)}function Im(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bm(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,Im.bind(null,n,e),a)}function sf(){}function Hm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Gm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=e(),ys){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function rf(e,n,a){return a===void 0||(ta&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=V0(),pe.lanes|=e,Ha|=e,a)}function Vm(e,n,a,o){return ti(a,n)?a:sr.current!==null?(e=rf(e,a,o),ti(e,n)||(fn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(be&261930)===0?(fn=!0,e.memoizedState=a):(e=V0(),pe.lanes|=e,Ha|=e,n)}function km(e,n,a,o,u){var f=V.p;V.p=f!==0&&8>f?f:8;var y=F.T,R={};F.T=R,cf(e,!1,n,a);try{var B=u(),nt=F.S;if(nt!==null&&nt(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=kx(B,o);xo(e,n,pt,ri(e))}else xo(e,n,o,ri(e))}catch(vt){xo(e,n,{then:function(){},status:"rejected",reason:vt},ri())}finally{V.p=f,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function Zx(){}function of(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Xm(e).queue;km(e,u,n,ot,a===null?Zx:function(){return Wm(e),a(o)})}function Xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wm(e){var n=Xm(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},ri())}function lf(){return wn(zo)}function qm(){return on().memoizedState}function Ym(){return on().memoizedState}function Kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Oa(a);var o=Pa(n,e,a);o!==null&&(Kn(o,n,a),po(o,n,a)),n={cache:zu()},e.payload=n;return}n=n.return}}function Qx(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Zm(n,a):(a=Tu(e,n,a,o),a!==null&&(Kn(a,e,o),Km(a,n,o)))}function jm(e,n,a){var o=ri();xo(e,n,a,o)}function xo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Zm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,ti(R,y))return yl(e,n,u,0),je===null&&xl(),!1}catch{}finally{}if(a=Tu(e,n,u,o),a!==null)return Kn(a,e,o),Km(a,n,o),!0}return!1}function cf(e,n,a,o){if(o={lane:2,revertLane:Gf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(s(479))}else n=Tu(e,a,o,2),n!==null&&Kn(n,e,2)}function Hl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Zm(e,n){rr=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Km(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yr(e,a)}}var yo={readContext:wn,use:zl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};yo.useEffectEvent=nn;var Qm={readContext:wn,use:zl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,Im.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(ys){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(ys){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Qx.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=ef(e);var n=e.queue,a=jm.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,n){var a=Gn();return rf(a,e,n)},useTransition:function(){var e=ef(!1);return e=km.bind(null,pe,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=Gn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(be&127)!==0||vm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Om(ym.bind(null,o,f,e),[e]),o.flags|=2048,lr(9,{destroy:void 0},xm.bind(null,o,f,a,n),null),a},useId:function(){var e=Gn(),n=je.identifierPrefix;if(Ae){var a=Fi,o=zi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Xx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lf,useFormState:wm,useActionState:wm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ju,useCacheRefresh:function(){return Gn().memoizedState=Kx.bind(null,pe)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:wn,use:zl,useCallback:Hm,useContext:wn,useEffect:af,useImperativeHandle:Bm,useInsertionEffect:zm,useLayoutEffect:Fm,useMemo:Gm,useReducer:Fl,useRef:Nm,useState:function(){return Fl(ea)},useDebugValue:sf,useDeferredValue:function(e,n){var a=on();return Vm(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Fl(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:_m,useId:qm,useHostTransitionStatus:lf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,n){var a=on();return Em(a,Xe,e,n)},useMemoCache:Ju,useCacheRefresh:Ym};uf.useEffectEvent=Pm;var Jm={readContext:wn,use:zl,useCallback:Hm,useContext:wn,useEffect:af,useImperativeHandle:Bm,useInsertionEffect:zm,useLayoutEffect:Fm,useMemo:Gm,useReducer:tf,useRef:Nm,useState:function(){return tf(ea)},useDebugValue:sf,useDeferredValue:function(e,n){var a=on();return Xe===null?rf(a,e,n):Vm(a,Xe.memoizedState,e,n)},useTransition:function(){var e=tf(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:_m,useId:qm,useHostTransitionStatus:lf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,n){var a=on();return Xe!==null?Em(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Ym};Jm.useEffectEvent=Pm;function ff(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(Kn(n,e,o),po(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(Kn(n,e,o),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(e,o,a),n!==null&&(Kn(n,e,a),po(n,e,a))}};function $m(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(u,f):!0}function t0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&hf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function e0(e){vl(e)}function n0(e){console.error(e)}function i0(e){vl(e)}function Gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function a0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,n)},a}function s0(e){return e=Oa(e),e.tag=3,e}function r0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){a0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){a0(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Jx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&tr(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?$l():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(e,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(e,o,u)),!1}throw Error(s(435,a.tag))}return If(e,o,u),$l(),!1}if(Ae)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(s(422),{cause:o}),lo(mi(e,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),lo(mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=mi(o,a),u=df(e.stateNode,o,u),Vu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=mi(f,a),Co===null?Co=[f]:Co.push(f),an!==4&&(an=2),n===null)return!0;o=mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=df(a.stateNode,o,e),Vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=s0(u),r0(u,e,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var pf=Error(s(461)),fn=!1;function Dn(e,n,a,o){n.child=e===null?um(n,null,a,o):xs(n,e.child,a,o)}function o0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return ms(n),o=ju(e,n,a,y,f,u),R=Zu(),e!==null&&!fn?(Ku(e,n,u),na(e,n,u)):(Ae&&R&&wu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function l0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,c0(e,n,f,o,u)):(e=Ml(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(y,o)&&e.ref===n.ref)return na(e,n,u)}return n.flags|=1,e=Ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function c0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(so(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Mf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,na(e,n,u)}return mf(e,n,a,o,u)}function u0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return f0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,f!==null?f.cachePool:null),f!==null?dm(n,f):Xu(),pm(n);else return o=n.lanes=536870912,f0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Al(n,f.cachePool),dm(n,f),Fa(),n.memoizedState=null):(e!==null&&Al(n,null),Xu(),Fa());return Dn(e,n,u,a),n.child}function So(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function f0(e,n,a,o,u){var f=Iu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Al(n,null),Xu(),pm(n),e!==null&&tr(e,n,o,!0),n.childLanes=u,null}function Vl(e,n){return n=Xl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function h0(e,n,a){return xs(n,e.child,null,a),e=Vl(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function $x(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=Vl(n,o),n.lanes=536870912,So(null,e);if(qu(n),(e=Ke)?(e=bg(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=n,n.child=a,Cn=n,Ke=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Vl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=h0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||tr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=je,o!==null&&(y=Bs(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,fs(e,y),Kn(o,e,y),pf;$l(),n=h0(e,n,a)}else e=f.treeContext,Ke=yi(y.nextSibling),Cn=n,Ae=!0,Da=null,vi=!1,e!==null&&Jp(n,e),n=Vl(n,o),n.flags|=4096;return n}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mf(e,n,a,o,u){return ms(n),a=ju(e,n,a,o,void 0,u),o=Zu(),e!==null&&!fn?(Ku(e,n,u),na(e,n,u)):(Ae&&o&&wu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function d0(e,n,a,o,u,f){return ms(n),n.updateQueue=null,a=gm(n,o,a,u),mm(e),o=Zu(),e!==null&&!fn?(Ku(e,n,f),na(e,n,f)):(Ae&&o&&wu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function p0(e,n,a,o,u){if(ms(n),n.stateNode===null){var f=Ks,y=a.contextType;typeof y=="object"&&y!==null&&(f=wn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Hu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?wn(y):Ks,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(ff(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&hf.enqueueReplaceState(f,f.state,null),go(n,o,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=Ss(a,R);f.props=B;var nt=f.context,pt=a.contextType;y=Ks,typeof pt=="object"&&pt!==null&&(y=wn(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==y)&&t0(n,f,o,y),Na=!1;var rt=n.memoizedState;f.state=rt,go(n,o,f,u),mo(),nt=n.memoizedState,R||rt!==nt||Na?(typeof vt=="function"&&(ff(n,a,vt,o),nt=n.memoizedState),(B=Na||$m(n,a,B,o,rt,nt,y))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=y,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Gu(e,n),y=n.memoizedProps,pt=Ss(a,y),f.props=pt,vt=n.pendingProps,rt=f.context,nt=a.contextType,B=Ks,typeof nt=="object"&&nt!==null&&(B=wn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==vt||rt!==B)&&t0(n,f,o,B),Na=!1,rt=n.memoizedState,f.state=rt,go(n,o,f,u),mo();var ut=n.memoizedState;y!==vt||rt!==ut||Na||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof R=="function"&&(ff(n,a,R,o),ut=n.memoizedState),(pt=Na||$m(n,a,pt,o,rt,ut,B)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=B,o=pt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,kl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=xs(n,e.child,null,u),n.child=xs(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=na(e,n,u),e}function m0(e,n,a,o){return ds(),n.flags|=256,Dn(e,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:am()}}function vf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function g0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?za(n):Fa(),(e=Ke)?(e=bg(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=n,n.child=a,Cn=n,Ke=null)):e=null,e===null)throw Ua(n);return th(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=Xl({mode:"hidden",children:R},u),o=hs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=_f(a),o.childLanes=vf(e,y,a),n.memoizedState=gf,So(null,o)):(za(n),xf(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=yf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),R=hs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,xs(n,e.child,null,a),o=n.child,o.memoizedState=_f(a),o.childLanes=vf(e,y,a),n.memoizedState=gf,n=So(null,o));else if(za(n),th(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var nt=y.dgst;y=nt,o=Error(s(419)),o.stack="",o.digest=y,lo({value:o,source:null,stack:null}),n=yf(e,n,a)}else if(fn||tr(e,n,a,!1),y=(a&e.childLanes)!==0,fn||y){if(y=je,y!==null&&(o=Bs(y,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,fs(e,o),Kn(y,e,o),pf;$f(R)||$l(),n=yf(e,n,a)}else $f(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ke=yi(R.nextSibling),Cn=n,Ae=!0,Da=null,vi=!1,e!==null&&Jp(n,e),n=xf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,B=e.child,nt=B.sibling,o=Ki(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,nt!==null?R=Ki(nt,R):(R=hs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,So(null,o),o=n.child,R=e.child.memoizedState,R===null?R=_f(a):(u=R.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=am(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=vf(e,y,a),n.memoizedState=gf,So(e.child,o)):(za(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function xf(e,n){return n=Xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xl(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function yf(e,n,a){return xs(n,e.child,null,a),e=xf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ou(e.return,n,a)}function Sf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function v0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=rn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,at(rn,y),Dn(e,n,o,a),o=Ae?oo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_0(e,a,n);else if(e.tag===19)_0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Sf(n,!0,a,null,f,o);break;case"together":Sf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(tr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function ty(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),La(n,cn,e.memoizedState.cache),ds();break;case 27:case 5:Nt(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?g0(e,n,a):(za(n),e=na(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(tr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return v0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),at(rn,rn.current),o)break;return null;case 22:return n.lanes=0,u0(e,n,a,n.pendingProps);case 24:La(n,cn,e.memoizedState.cache)}return na(e,n,a)}function x0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Mf(e,a)&&(n.flags&128)===0)return fn=!1,ty(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ae&&(n.flags&1048576)!==0&&Qp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=_s(n.elementType),n.type=e,typeof e=="function")Au(e)?(o=Ss(e,o),n.tag=1,n=p0(null,n,e,o,a)):(n.tag=0,n=mf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=o0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=l0(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),p0(e,n,o,u,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Gu(e,n),go(n,o,null,a);var y=n.memoizedState;if(o=y.cache,La(n,cn,o),o!==f.cache&&Pu(n,[cn],a,!0),mo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=m0(e,n,o,a);break t}else if(o!==u){u=mi(Error(s(424)),n),lo(u),n=m0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=yi(e.firstChild),Cn=n,Ae=!0,Da=null,vi=!0,a=um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ds(),o===u){n=na(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=Dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=rc(Z.current).createElement(a),o[ln]=n,o[Mn]=e,Un(o,a,e),C(o),n.stateNode=o):n.memoizedState=Dg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Nt(n),e===null&&Ae&&(o=n.stateNode=Rg(n.type,n.pendingProps,Z.current),Cn=n,vi=!0,u=Ke,Wa(n.type)?(eh=u,Ke=yi(o.firstChild)):Ke=u),Dn(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Ke)&&(o=Dy(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Cn=n,Ke=yi(o.firstChild),vi=!1,u=!0):u=!1),u||Ua(n)),Nt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Kf(u,f)?o=null:y!==null&&Kf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(e,n,Wx,null,null,a),zo._currentValue=u),kl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ke)&&(a=Uy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Cn=n,Ke=null,e=!0):e=!1),e||Ua(n)),null;case 13:return g0(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=xs(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return o0(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ms(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return l0(e,n,n.type,n.pendingProps,a);case 15:return c0(e,n,n.type,n.pendingProps,a);case 19:return v0(e,n,a);case 31:return $x(e,n,a);case 22:return u0(e,n,a,n.pendingProps);case 24:return ms(n),o=wn(cn),e===null?(u=Iu(),u===null&&(u=je,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Hu(n),La(n,cn,u)):((e.lanes&a)!==0&&(Gu(e,n),go(n,null,null,a),mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,o)):(o=f.cache,La(n,cn,o),o!==u.cache&&Pu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(e){e.flags|=4}function Ef(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(q0())e.flags|=8192;else throw vs=Cl,Bu}else e.flags&=-16777217}function y0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pg(n))if(q0())e.flags|=8192;else throw vs=Cl,Bu}function Wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,hr|=n)}function Mo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ey(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(cn),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(Qe(n),y0(n,f)):(Qe(n),Ef(n,u,null,o,a))):f?f!==e.memoizedState?(ia(n),Qe(n),y0(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ia(n),Qe(n),Ef(n,u,e,o,a)),null;case 27:if($t(n),a=Z.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=_t.current,$s(n)?$p(n):(e=Rg(u,o,a),n.stateNode=e,ia(n))}return Qe(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(f=_t.current,$s(n))$p(n);else{var y=rc(Z.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[ln]=n,f[Mn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ia(n)}}return Qe(n),Ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,$s(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||gg(e.nodeValue,a)),e||Ua(n,!0)}else e=rc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=$s(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Qe(n),null);case 4:return Dt(),e===null&&Wf(n.stateNode.containerInfo),Qe(n),null;case 10:return $i(n.type),Qe(n),null;case 19:if(q(rn),o=n.memoizedState,o===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Mo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,Mo(o,!1),e=f.updateQueue,n.updateQueue=e,Wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jp(a,e),a=a.sibling;return at(rn,rn.current&1|2),Ae&&Qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Kl&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ll(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Wl(n,e),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return Qe(n),null}else 2*E()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=rn.current,at(rn,u?a&1|2:a&1),Ae&&Qi(n,o.treeForkCount),e):(Qe(n),null);case 22:case 23:return ii(n),Wu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(gs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(cn),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ny(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(cn),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(rn),null;case 4:return Dt(),null;case 10:return $i(n.type),null;case 22:case 23:return ii(n),Wu(),e!==null&&q(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(cn),null;case 25:return null;default:return null}}function S0(e,n){switch(Du(n),n.tag){case 3:$i(cn),Dt();break;case 26:case 27:case 5:$t(n);break;case 4:Dt();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:q(rn);break;case 10:$i(n.type);break;case 22:case 23:ii(n),Wu(),e!==null&&q(gs);break;case 24:$i(cn)}}function Eo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Ve(n,n.return,R)}}function Ia(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var B=a,nt=R;try{nt()}catch(pt){Ve(u,B,pt)}}}o=o.next}while(o!==f)}}catch(pt){Ve(n,n.return,pt)}}function M0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hm(n,a)}catch(o){Ve(e,e.return,o)}}}function E0(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function b0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function bf(e,n,a){try{var o=e.stateNode;by(o,e.type,a,n),o[Mn]=n}catch(u){Ve(e,e.return,u)}}function T0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||T0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ql(e,n,a),e=e.sibling;e!==null;)ql(e,n,a),e=e.sibling}function A0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[ln]=e,n[Mn]=a}catch(f){Ve(e,e.return,f)}}var aa=!1,hn=!1,Rf=!1,R0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function iy(e,n){if(e=e.containerInfo,jf=dc,e=Bp(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,R=-1,B=-1,nt=0,pt=0,vt=e,rt=null;e:for(;;){for(var ut;vt!==a||u!==0&&vt.nodeType!==3||(R=y+u),vt!==f||o!==0&&vt.nodeType!==3||(B=y+o),vt.nodeType===3&&(y+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)rt=vt,vt=ut;for(;;){if(vt===e)break e;if(rt===a&&++nt===u&&(R=y),rt===f&&++pt===o&&(B=y),(ut=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ut}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:e,selectionRange:a},dc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xt=Ss(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ve(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function C0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),o&4&&Eo(5,a);break;case 1:if(ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ve(a,a.return,y)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ve(a,a.return,y)}}o&64&&M0(a),o&512&&bo(a,a.return);break;case 3:if(ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hm(e,n)}catch(y){Ve(a,a.return,y)}}break;case 27:n===null&&o&4&&A0(a);case 26:case 5:ra(e,a),n===null&&o&4&&b0(a),o&512&&bo(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),o&4&&U0(e,a);break;case 13:ra(e,a),o&4&&L0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=hy.bind(null,a),Ly(e,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||hn,u=aa;var f=hn;aa=o,(hn=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),aa=u,hn=f}break;case 30:break;default:ra(e,a)}}function w0(e){var n=e.alternate;n!==null&&(e.alternate=null,w0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,qn=!1;function sa(e,n,a){for(a=a.child;a!==null;)D0(e,n,a),a=a.sibling}function D0(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||Ii(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ii(a,n);var o=tn,u=qn;Wa(a.type)&&(tn=a.stateNode,qn=!1),sa(e,n,a),No(a.stateNode),tn=o,qn=u;break;case 5:hn||Ii(a,n);case 6:if(o=tn,u=qn,tn=null,sa(e,n,a),tn=o,qn=u,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:tn!==null&&(qn?(e=tn,Mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):Mg(tn,a.stateNode));break;case 4:o=tn,u=qn,tn=a.stateNode.containerInfo,qn=!0,sa(e,n,a),tn=o,qn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),hn||Ia(4,a,n),sa(e,n,a);break;case 1:hn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&E0(a,n,o)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,sa(e,n,a),hn=o;break;default:sa(e,n,a)}}function U0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Ve(n,n.return,a)}}}function L0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Ve(n,n.return,a)}}function ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new R0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new R0),n;default:throw Error(s(435,e.tag))}}function Yl(e,n){var a=ay(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=dy.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){tn=R.stateNode,qn=!1;break t}break;case 5:tn=R.stateNode,qn=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(tn===null)throw Error(s(160));D0(f,y,u),tn=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)N0(n,e),n=n.sibling}var Ci=null;function N0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),o&4&&(Ia(3,e,e.return),Eo(3,e),Ia(5,e,e.return));break;case 1:Yn(n,e),jn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&64&&aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Yn(n,e),jn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[rs]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[ln]=e,C(f),o=f;break t;case"link":var y=Ng("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Ng("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,C(f),o=f}e.stateNode=o}else Og(u,e.type,e.stateNode);else e.stateNode=Lg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Og(u,e.type,e.stateNode):Lg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),o&512&&(hn||a===null||Ii(a,a.return)),a!==null&&o&4&&bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),o&512&&(hn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Xt){Ve(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,bf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Rf=!0);break;case 6:if(Yn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Ve(e,e.return,Xt)}}break;case 3:if(cc=null,u=Ci,Ci=oc(n.containerInfo),Yn(n,e),Ci=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Xt){Ve(e,e.return,Xt)}Rf&&(Rf=!1,O0(e));break;case 4:o=Ci,Ci=oc(e.stateNode.containerInfo),Yn(n,e),jn(e),Ci=o;break;case 12:Yn(n,e),jn(e);break;case 31:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,nt=aa,pt=hn;if(aa=nt||u,hn=pt||B,Yn(n,e),hn=pt,aa=nt,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||aa||hn||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=B.stateNode;var vt=B.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Xt){Ve(B,B.return,Xt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Xt){Ve(B,B.return,Xt)}}}else if(n.tag===18){if(a===null){B=n;try{var ut=B.stateNode;u?Eg(ut,!0):Eg(B.stateNode,!1)}catch(Xt){Ve(B,B.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yl(e,a))));break;case 19:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(T0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Tf(e);ql(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(pn(y,""),a.flags&=-33);var R=Tf(e);ql(e,R,y);break;case 3:case 4:var B=a.stateNode.containerInfo,nt=Tf(e);Af(e,nt,B);break;default:throw Error(s(161))}}catch(pt){Ve(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function O0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;O0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)C0(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Ms(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&E0(n,n.return,a),Ms(n);break;case 27:No(n.stateNode);case 26:case 5:Ii(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),Eo(4,f);break;case 1:if(oa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Ve(o,o.return,nt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)fm(B[u],R)}catch(nt){Ve(o,o.return,nt)}}a&&y&64&&M0(f),bo(f,f.return);break;case 27:A0(f);case 26:case 5:oa(u,f,a),a&&o===null&&y&4&&b0(f),bo(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&y&4&&U0(u,f);break;case 13:oa(u,f,a),a&&y&4&&L0(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),bo(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)P0(e,n,a,o),n=n.sibling}function P0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&Eo(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ve(n,n.return,B)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,o):To(e,n):f._visibility&2?wi(e,n,a,o):(f._visibility|=2,cr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cf(y,n);break;case 24:wi(e,n,a,o),u&2048&&wf(n.alternate,n);break;default:wi(e,n,a,o)}}function cr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,B=o,nt=y.flags;switch(y.tag){case 0:case 11:case 15:cr(f,y,R,B,u),Eo(8,y);break;case 23:break;case 22:var pt=y.stateNode;y.memoizedState!==null?pt._visibility&2?cr(f,y,R,B,u):To(f,y):(pt._visibility|=2,cr(f,y,R,B,u)),u&&nt&2048&&Cf(y.alternate,y);break;case 24:cr(f,y,R,B,u),u&&nt&2048&&wf(y.alternate,y);break;default:cr(f,y,R,B,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&Cf(o.alternate,o);break;case 24:To(a,o),u&2048&&wf(o.alternate,o);break;default:To(a,o)}n=n.sibling}}var Ao=8192;function ur(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)z0(e,n,a),e=e.sibling}function z0(e,n,a){switch(e.tag){case 26:ur(e,n,a),e.flags&Ao&&e.memoizedState!==null&&Xy(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:ur(e,n,a);break;case 3:case 4:var o=Ci;Ci=oc(e.stateNode.containerInfo),ur(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,ur(e,n,a),Ao=o):ur(e,n,a));break;default:ur(e,n,a)}}function F0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,B0(o,e)}F0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)I0(e),e=e.sibling}function I0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):Ro(e);break;default:Ro(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,B0(o,e)}F0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function B0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(w0(o),o===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var sy={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,Fe=0,je=null,Me=null,be=0,Ge=0,ai=null,Ba=!1,fr=!1,Df=!1,la=0,an=0,Ha=0,Es=0,Uf=0,si=0,hr=0,Co=null,Zn=null,Lf=!1,Zl=0,H0=0,Kl=1/0,Ql=null,Ga=null,mn=0,Va=null,dr=null,ca=0,Nf=0,Of=null,G0=null,wo=0,Pf=null;function ri(){return(Fe&2)!==0&&be!==0?be&-be:F.T!==null?Gf():Zr()}function V0(){if(si===0)if((be&536870912)===0||Ae){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function Kn(e,n,a){(e===je&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(pr(e,0),ka(e,be,si,!1)),On(e,a),((Fe&2)===0||e!==je)&&(e===je&&((Fe&2)===0&&(Es|=a),an===4&&ka(e,be,si,!1)),Bi(e))}function k0(e,n,a){if((Fe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?cy(e,n):Ff(e,n,!0),f=o;do{if(u===0){fr&&!o&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!oy(a)){u=Ff(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=Co;var B=R.current.memoizedState.isDehydrated;if(B&&(pr(R,y).flags|=256),y=Ff(R,y,!1),y!==2){if(Df&&!B){R.errorRecoveryDisabledLanes|=f,Es|=f,u=4;break t}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){pr(e,0),ka(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,si,!Ba);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-E(),10<u)){if(ka(o,n,si,!Ba),xt(o,0,!0)!==0)break t;ca=n,o.timeoutHandle=yg(X0.bind(null,o,a,Zn,Ql,Lf,n,si,Es,hr,Ba,f,"Throttled",-0,0),u);break t}X0(o,a,Zn,Ql,Lf,n,si,Es,hr,Ba,f,null,-0,0)}}break}while(!0);Bi(e)}function X0(e,n,a,o,u,f,y,R,B,nt,pt,vt,rt,ut){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},z0(n,f,vt);var Xt=(f&62914560)===f?Zl-E():(f&4194048)===f?H0-E():0;if(Xt=Wy(vt,Xt),Xt!==null){ca=f,e.cancelPendingCommit=Xt(J0.bind(null,e,n,f,a,o,u,y,R,B,pt,vt,null,rt,ut)),ka(e,f,y,!nt);return}}J0(e,n,f,a,o,u,y,R,B)}function oy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,o){n&=~Uf,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&cl(e,a,n)}function Jl(){return(Fe&6)===0?(Do(0),!1):!0}function zf(){if(Me!==null){if(Ge===0)var e=Me.return;else e=Me,Ji=ps=null,Qu(e),ar=null,fo=0,e=Me;for(;e!==null;)S0(e.alternate,e),e=e.return;Me=null}}function pr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ry(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,zf(),je=e,Me=a=Ki(e.current,null),be=n,Ge=0,ai=null,Ba=!1,fr=Ct(e,n),Df=!1,hr=si=Uf=Es=Ha=an=0,Zn=Co=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return la=n,xl(),a}function W0(e,n){pe=null,F.H=yo,n===ir||n===Rl?(n=om(),Ge=3):n===Bu?(n=om(),Ge=4):Ge=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Me===null&&(an=1,Gl(e,mi(n,e.current)))}function q0(){var e=ni.current;return e===null?!0:(be&4194048)===be?xi===null:(be&62914560)===be||(be&536870912)!==0?e===xi:!1}function Y0(){var e=F.H;return F.H=yo,e===null?yo:e}function j0(){var e=F.A;return F.A=sy,e}function $l(){an=4,Ba||(be&4194048)!==be&&ni.current!==null||(fr=!0),(Ha&134217727)===0&&(Es&134217727)===0||je===null||ka(je,be,si,!1)}function Ff(e,n,a){var o=Fe;Fe|=2;var u=Y0(),f=j0();(je!==e||be!==n)&&(Ql=null,pr(e,n)),n=!1;var y=an;t:do try{if(Ge!==0&&Me!==null){var R=Me,B=ai;switch(Ge){case 8:zf(),y=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var nt=Ge;if(Ge=0,ai=null,mr(e,R,B,nt),a&&fr){y=0;break t}break;default:nt=Ge,Ge=0,ai=null,mr(e,R,B,nt)}}ly(),y=an;break}catch(pt){W0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,Ji=ps=null,Fe=o,F.H=u,F.A=f,Me===null&&(je=null,be=0,xl()),y}function ly(){for(;Me!==null;)Z0(Me)}function cy(e,n){var a=Fe;Fe|=2;var o=Y0(),u=j0();je!==e||be!==n?(Ql=null,Kl=E()+500,pr(e,n)):fr=Ct(e,n);t:do try{if(Ge!==0&&Me!==null){n=Me;var f=ai;e:switch(Ge){case 1:Ge=0,ai=null,mr(e,n,f,1);break;case 2:case 9:if(sm(f)){Ge=0,ai=null,K0(n);break}n=function(){Ge!==2&&Ge!==9||je!==e||(Ge=7),Bi(e)},f.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:sm(f)?(Ge=0,ai=null,K0(n)):(Ge=0,ai=null,mr(e,n,f,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var R=Me;if(y?Pg(y):R.stateNode.complete){Ge=0,ai=null;var B=R.sibling;if(B!==null)Me=B;else{var nt=R.return;nt!==null?(Me=nt,tc(nt)):Me=null}break e}}Ge=0,ai=null,mr(e,n,f,5);break;case 6:Ge=0,ai=null,mr(e,n,f,6);break;case 8:zf(),an=6;break t;default:throw Error(s(462))}}uy();break}catch(pt){W0(e,pt)}while(!0);return Ji=ps=null,F.H=o,F.A=u,Fe=a,Me!==null?0:(je=null,be=0,xl(),an)}function uy(){for(;Me!==null&&!Ht();)Z0(Me)}function Z0(e){var n=x0(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?tc(e):Me=n}function K0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=d0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=d0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Qu(n);default:S0(a,n),n=Me=jp(n,la),n=x0(a,n,la)}e.memoizedProps=e.pendingProps,n===null?tc(e):Me=n}function mr(e,n,a,o){Ji=ps=null,Qu(n),ar=null,fo=0;var u=n.return;try{if(Jx(e,u,n,a,be)){an=1,Gl(e,mi(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;an=1,Gl(e,mi(a,e.current)),Me=null;return}n.flags&32768?(Ae||o===1?e=!0:fr||(be&536870912)!==0?e=!1:(Ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Q0(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){Q0(n,Ba);return}e=n.return;var a=ey(n.alternate,n,la);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);an===0&&(an=5)}function Q0(e,n){do{var a=ny(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);an=6,Me=null}function J0(e,n,a,o,u,f,y,R,B){e.cancelPendingCommit=null;do ec();while(mn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=bu,bi(e,a,f,y,R,B),e===je&&(Me=je=null,be=0),dr=n,Va=e,ca=a,Nf=f,Of=u,G0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,py(dt,function(){return ig(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=V.p,V.p=2,y=Fe,Fe|=4;try{iy(e,n,a)}finally{Fe=y,V.p=u,F.T=o}}mn=1,$0(),tg(),eg()}}function $0(){if(mn===1){mn=0;var e=Va,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=V.p;V.p=2;var u=Fe;Fe|=4;try{N0(n,e);var f=Zf,y=Bp(e.containerInfo),R=f.focusedElem,B=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&Ip(R.ownerDocument.documentElement,R)){if(B!==null&&xu(R)){var nt=B.start,pt=B.end;if(pt===void 0&&(pt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(pt,R.value.length);else{var vt=R.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),Xt=R.textContent.length,ae=Math.min(B.start,Xt),qe=B.end===void 0?ae:Math.min(B.end,Xt);!ut.extend&&ae>qe&&(y=qe,qe=ae,ae=y);var J=Fp(R,ae),X=Fp(R,qe);if(J&&X&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var et=vt.createRange();et.setStart(J.node,J.offset),ut.removeAllRanges(),ae>qe?(ut.addRange(et),ut.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ut.addRange(et))}}}}for(vt=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&vt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var gt=vt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}dc=!!jf,Zf=jf=null}finally{Fe=u,V.p=o,F.T=a}}e.current=n,mn=2}}function tg(){if(mn===2){mn=0;var e=Va,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=V.p;V.p=2;var u=Fe;Fe|=4;try{C0(e,n.alternate,n)}finally{Fe=u,V.p=o,F.T=a}}mn=3}}function eg(){if(mn===4||mn===3){mn=0,N();var e=Va,n=dr,a=ca,o=G0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,dr=Va=null,ng(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Hs(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=V.p,V.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];f(R.value,{componentStack:R.stack})}}finally{F.T=n,V.p=u}}(ca&3)!==0&&ec(),Bi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Pf?wo++:(wo=0,Pf=e):wo=0,Do(0)}}function ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function ec(){return $0(),tg(),eg(),ig()}function ig(){if(mn!==5)return!1;var e=Va,n=Nf;Nf=0;var a=Hs(ca),o=F.T,u=V.p;try{V.p=32>a?32:a,F.T=null,a=Of,Of=null;var f=Va,y=ca;if(mn=0,dr=Va=null,ca=0,(Fe&6)!==0)throw Error(s(331));var R=Fe;if(Fe|=4,I0(f.current),P0(f,f.current,y,a),Fe=R,Do(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{V.p=u,F.T=o,ng(e,n)}}function ag(e,n,a){n=mi(a,n),n=df(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(On(e,2),Bi(e))}function Ve(e,n,a){if(e.tag===3)ag(e,e,a);else for(;n!==null;){if(n.tag===3){ag(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=mi(a,e),a=s0(2),o=Pa(n,a,2),o!==null&&(r0(a,o,n,e),On(o,2),Bi(o));break}}n=n.return}}function If(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ry;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Df=!0,u.add(a),e=fy.bind(null,e,n,a),n.then(e,e))}function fy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(be&a)===a&&(an===4||an===3&&(be&62914560)===be&&300>E()-Zl?(Fe&2)===0&&pr(e,0):Uf|=a,hr===be&&(hr=0)),Bi(e)}function sg(e,n){n===0&&(n=Be()),e=fs(e,n),e!==null&&(On(e,n),Bi(e))}function hy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),sg(e,a)}function dy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),sg(e,a)}function py(e,n){return de(e,n)}var nc=null,gr=null,Bf=!1,ic=!1,Hf=!1,Xa=0;function Bi(e){e!==gr&&e.next===null&&(gr===null?nc=gr=e:gr=gr.next=e),ic=!0,Bf||(Bf=!0,gy())}function Do(e,n){if(!Hf&&ic){Hf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,cg(o,f))}else f=be,f=xt(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,cg(o,f));o=o.next}while(a);Hf=!1}}function my(){rg()}function rg(){ic=Bf=!1;var e=0;Xa!==0&&Ay()&&(e=Xa);for(var n=E(),a=null,o=nc;o!==null;){var u=o.next,f=og(o,n);f===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(gr=a)):(a=o,(e!==0||(f&3)!==0)&&(ic=!0)),o=u}mn!==0&&mn!==5||Do(e),Xa!==0&&(Xa=0)}function og(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-It(f),R=1<<y,B=u[y];B===-1?((R&a)===0||(R&o)!==0)&&(u[y]=le(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=je,a=be,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ce(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ce(o),Hs(a)){case 2:case 8:a=yt;break;case 32:a=dt;break;case 268435456:a=Ut;break;default:a=dt}return o=lg.bind(null,e),a=de(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ce(o),e.callbackPriority=2,e.callbackNode=null,2}function lg(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=be;return o=xt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(k0(e,o,n),og(e,E()),e.callbackNode!=null&&e.callbackNode===a?lg.bind(null,e):null)}function cg(e,n){if(ec())return null;k0(e,n,!0)}function gy(){Cy(function(){(Fe&6)!==0?de(mt,my):rg()})}function Gf(){if(Xa===0){var e=er;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),Xa=e}return Xa}function ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function _y(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=ug((u[Mn]||null).action),y=o.submitter;y&&(n=(n=y[Mn]||null)?ug(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new ml("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var B=y?fg(u,y):new FormData(u);of(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=y?fg(u,y):new FormData(u),of(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Vf=0;Vf<Eu.length;Vf++){var kf=Eu[Vf],vy=kf.toLowerCase(),xy=kf[0].toUpperCase()+kf.slice(1);Ri(vy,"on"+xy)}Ri(Vp,"onAnimationEnd"),Ri(kp,"onAnimationIteration"),Ri(Xp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Px,"onTransitionRun"),Ri(zx,"onTransitionStart"),Ri(Fx,"onTransitionCancel"),Ri(Wp,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],B=R.instance,nt=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(pt){vl(pt)}u.currentTarget=null,f=B}else for(y=0;y<o.length;y++){if(R=o[y],B=R.instance,nt=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(pt){vl(pt)}u.currentTarget=null,f=B}}}}function Ee(e,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var o=e+"__bubble";a.has(o)||(dg(n,e,2,!1),a.add(o))}function Xf(e,n,a){var o=0;n&&(o|=4),dg(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[ac]){e[ac]=!0,K.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||Xf(a,!1,e),Xf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,Xf("selectionchange",!1,n))}}function dg(e,n,a,o){switch(Vg(n)){case 2:var u=jy;break;case 8:u=Zy;break;default:u=rh}a=u.bind(null,n,a,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function qf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Ta(R),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=f=y;continue t}R=R.parentNode}}o=o.return}vp(function(){var nt=f,pt=lu(a),vt=[];t:{var rt=qp.get(e);if(rt!==void 0){var ut=ml,Xt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":ut=dx;break;case"focusin":Xt="focus",ut=pu;break;case"focusout":Xt="blur",ut=pu;break;case"beforeblur":case"afterblur":ut=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=gx;break;case Vp:case kp:case Xp:ut=ax;break;case Wp:ut=vx;break;case"scroll":case"scrollend":ut=$v;break;case"wheel":ut=yx;break;case"copy":case"cut":case"paste":ut=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Ep;break;case"toggle":case"beforetoggle":ut=Mx}var ae=(n&4)!==0,qe=!ae&&(e==="scroll"||e==="scrollend"),J=ae?rt!==null?rt+"Capture":null:rt;ae=[];for(var X=nt,et;X!==null;){var gt=X;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||J===null||(gt=Jr(X,J),gt!=null&&ae.push(Lo(X,gt,et))),qe)break;X=X.return}0<ae.length&&(rt=new ut(rt,Xt,null,a,pt),vt.push({event:rt,listeners:ae}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&a!==ou&&(Xt=a.relatedTarget||a.fromElement)&&(Ta(Xt)||Xt[Ti]))break t;if((ut||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(Xt=a.relatedTarget||a.toElement,ut=nt,Xt=Xt?Ta(Xt):null,Xt!==null&&(qe=c(Xt),ae=Xt.tag,Xt!==qe||ae!==5&&ae!==27&&ae!==6)&&(Xt=null)):(ut=null,Xt=nt),ut!==Xt)){if(ae=Sp,gt="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Ep,gt="onPointerLeave",J="onPointerEnter",X="pointer"),qe=ut==null?rt:os(ut),et=Xt==null?rt:os(Xt),rt=new ae(gt,X+"leave",ut,a,pt),rt.target=qe,rt.relatedTarget=et,gt=null,Ta(pt)===nt&&(ae=new ae(J,X+"enter",Xt,a,pt),ae.target=et,ae.relatedTarget=qe,gt=ae),qe=gt,ut&&Xt)e:{for(ae=Sy,J=ut,X=Xt,et=0,gt=J;gt;gt=ae(gt))et++;gt=0;for(var te=X;te;te=ae(te))gt++;for(;0<et-gt;)J=ae(J),et--;for(;0<gt-et;)X=ae(X),gt--;for(;et--;){if(J===X||X!==null&&J===X.alternate){ae=J;break e}J=ae(J),X=ae(X)}ae=null}else ae=null;ut!==null&&pg(vt,rt,ut,ae,!1),Xt!==null&&qe!==null&&pg(vt,qe,Xt,ae,!0)}}t:{if(rt=nt?os(nt):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Le=Up;else if(wp(rt))if(Lp)Le=Lx;else{Le=Dx;var jt=wx}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ai(nt.elementType)&&(Le=Up):Le=Ux;if(Le&&(Le=Le(e,nt))){Dp(vt,Le,a,pt);break t}jt&&jt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&bn(rt,"number",rt.value)}switch(jt=nt?os(nt):window,e){case"focusin":(wp(jt)||jt.contentEditable==="true")&&(Ys=jt,yu=nt,ro=null);break;case"focusout":ro=yu=Ys=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Hp(vt,a,pt);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Hp(vt,a,pt)}var _e;if(gu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else qs?Rp(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(bp&&a.locale!=="ko"&&(qs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&qs&&(_e=xp()):(Ca=pt,fu="value"in Ca?Ca.value:Ca.textContent,qs=!0)),jt=sc(nt,Te),0<jt.length&&(Te=new Mp(Te,e,null,a,pt),vt.push({event:Te,listeners:jt}),_e?Te.data=_e:(_e=Cp(a),_e!==null&&(Te.data=_e)))),(_e=bx?Tx(e,a):Ax(e,a))&&(Te=sc(nt,"onBeforeInput"),0<Te.length&&(jt=new Mp("onBeforeInput","beforeinput",null,a,pt),vt.push({event:jt,listeners:Te}),jt.data=_e)),_y(vt,e,nt,a,pt)}hg(vt,n)})}function Lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Jr(e,a),u!=null&&o.unshift(Lo(e,u,f)),u=Jr(e,n),u!=null&&o.push(Lo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pg(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,B=R.alternate,nt=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||nt===null||(B=nt,u?(nt=Jr(a,f),nt!=null&&y.unshift(Lo(a,nt,B))):u||(nt=Jr(a,f),nt!=null&&y.push(Lo(a,nt,B)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var My=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function mg(e){return(typeof e=="string"?e:""+e).replace(My,`
`).replace(Ey,"")}function gg(e,n){return n=mg(n),mg(e)===n}function We(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":ks(e,o,f);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&We(e,n,"name",u.name,u,null),We(e,n,"formEncType",u.formEncType,u,null),We(e,n,"formMethod",u.formMethod,u,null),We(e,n,"formTarget",u.formTarget,u,null)):(We(e,n,"encType",u.encType,u,null),We(e,n,"method",u.method,u,null),We(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),qt(e,"popover",o);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qv.get(a)||a,qt(e,a,o))}}function Yf(e,n,a,o,u,f){switch(a){case"style":ks(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):qt(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,f,y,a,null)}}u&&We(e,n,"srcSet",a.srcSet,a,null),o&&We(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=f=y=u=null,B=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":y=pt;break;case"checked":B=pt;break;case"defaultChecked":nt=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:We(e,n,o,pt,a,null)}}Yi(e,f,R,B,nt,y,u,!1);return;case"select":Ee("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:We(e,n,u,R,a,null)}n=f,a=y,e.multiple=!!o,n!=null?di(e,!!o,n,!1):a!=null&&di(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:We(e,n,y,R,a,null)}Tn(e,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:We(e,n,B,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Ee(Uo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,nt,o,a,null)}return;default:if(Ai(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Yf(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&We(e,n,R,o,a,null))}function by(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,B=null,nt=null,pt=null;for(ut in a){var vt=a[ut];if(a.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=vt;default:o.hasOwnProperty(ut)||We(e,n,ut,null,o,vt)}}for(var rt in o){var ut=o[rt];if(vt=a[rt],o.hasOwnProperty(rt)&&(ut!=null||vt!=null))switch(rt){case"type":f=ut;break;case"name":u=ut;break;case"checked":nt=ut;break;case"defaultChecked":pt=ut;break;case"value":y=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==vt&&We(e,n,rt,ut,o,vt)}}En(e,y,R,B,nt,pt,f,u);return;case"select":ut=y=R=rt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:o.hasOwnProperty(f)||We(e,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":rt=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==B&&We(e,n,u,f,o,B)}n=R,a=y,o=ut,rt!=null?di(e,!!a,rt,!1):!!o!=!!a&&(n!=null?di(e,!!a,n,!0):di(e,!!a,a?[]:"",!1));return;case"textarea":ut=rt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:We(e,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":rt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&We(e,n,y,u,o,f)}He(e,rt,ut);return;case"option":for(var Xt in a)if(rt=a[Xt],a.hasOwnProperty(Xt)&&rt!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:We(e,n,Xt,null,o,rt)}for(B in o)if(rt=o[B],ut=a[B],o.hasOwnProperty(B)&&rt!==ut&&(rt!=null||ut!=null))switch(B){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:We(e,n,B,rt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)rt=a[ae],a.hasOwnProperty(ae)&&rt!=null&&!o.hasOwnProperty(ae)&&We(e,n,ae,null,o,rt);for(nt in o)if(rt=o[nt],ut=a[nt],o.hasOwnProperty(nt)&&rt!==ut&&(rt!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:We(e,n,nt,rt,o,ut)}return;default:if(Ai(n)){for(var qe in a)rt=a[qe],a.hasOwnProperty(qe)&&rt!==void 0&&!o.hasOwnProperty(qe)&&Yf(e,n,qe,void 0,o,rt);for(pt in o)rt=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||rt===ut||rt===void 0&&ut===void 0||Yf(e,n,pt,rt,o,ut);return}}for(var J in a)rt=a[J],a.hasOwnProperty(J)&&rt!=null&&!o.hasOwnProperty(J)&&We(e,n,J,null,o,rt);for(vt in o)rt=o[vt],ut=a[vt],!o.hasOwnProperty(vt)||rt===ut||rt==null&&ut==null||We(e,n,vt,rt,o,ut)}function _g(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ty(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&_g(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],nt=B.startTime;if(nt>R)break;var pt=B.transferSize,vt=B.initiatorType;pt&&_g(vt)&&(B=B.responseEnd,y+=pt*(B<R?1:(R-nt)/(B-nt)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jf=null,Zf=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function Ay(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(wy)}:yg;function wy(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function Mg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[rs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&No(e.ownerDocument.body);a=u}while(a);yr(n)}function Eg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function Uy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function bg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=yi(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ly(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var eh=null;function Tg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return yi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ag(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Rg(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function No(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var Si=new Map,Cg=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=V.d;V.d={f:Ny,r:Oy,D:Py,C:zy,L:Fy,m:Iy,X:Hy,S:By,M:Gy};function Ny(){var e=ua.f(),n=Jl();return e||n}function Oy(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?Wm(n):ua.r(e)}var _r=typeof document>"u"?null:document;function wg(e,n,a){var o=_r;if(o&&typeof n=="string"&&n){var u=ce(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Cg.has(u)||(Cg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),C(n),o.head.appendChild(n)))}}function Py(e){ua.D(e),wg("dns-prefetch",e,null)}function zy(e,n){ua.C(e,n),wg("preconnect",e,n)}function Fy(e,n,a){ua.L(e,n,a);var o=_r;if(o&&e&&n){var u='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ce(a.imageSizes)+'"]')):u+='[href="'+ce(e)+'"]';var f=u;switch(n){case"style":f=vr(e);break;case"script":f=xr(e)}Si.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(f))||n==="script"&&o.querySelector(Po(f))||(n=o.createElement("link"),Un(n,"link",e),C(n),o.head.appendChild(n)))}}function Iy(e,n){ua.m(e,n);var a=_r;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ce(o)+'"][href="'+ce(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xr(e)}if(!Si.has(f)&&(e=_({rel:"modulepreload",href:e},n),Si.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}o=a.createElement("link"),Un(o,"link",e),C(o),a.head.appendChild(o)}}}function By(e,n,a){ua.S(e,n,a);var o=_r;if(o&&e){var u=Ra(o).hoistableStyles,f=vr(e);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Oo(f)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(f))&&nh(e,a);var B=y=o.createElement("link");C(B),Un(B,"link",e),B._p=new Promise(function(nt,pt){B.onload=nt,B.onerror=pt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function Hy(e,n){ua.X(e,n);var a=_r;if(a&&e){var o=Ra(a).hoistableScripts,u=xr(e),f=o.get(u);f||(f=a.querySelector(Po(u)),f||(e=_({src:e,async:!0},n),(n=Si.get(u))&&ih(e,n),f=a.createElement("script"),C(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Gy(e,n){ua.M(e,n);var a=_r;if(a&&e){var o=Ra(a).hoistableScripts,u=xr(e),f=o.get(u);f||(f=a.querySelector(Po(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&ih(e,n),f=a.createElement("script"),C(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Dg(e,n,a,o){var u=(u=Z.current)?oc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vr(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vr(a.href);var f=Ra(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Oo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),f||Vy(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vr(e){return'href="'+ce(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function Ug(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Vy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),C(n),e.head.appendChild(n))}function xr(e){return'[src="'+ce(e)+'"]'}function Po(e){return"script[async]"+e}function Lg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ce(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Un(o,"style",u),lc(o,a.precedence,e),n.instance=o;case"stylesheet":u=vr(a.href);var f=e.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=Ug(a),(u=Si.get(u))&&nh(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var y=f;return y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Un(f,"link",o),n.state.loading|=4,lc(f,a.precedence,e),n.instance=f;case"script":return f=xr(a.src),(u=e.querySelector(Po(f)))?(n.instance=u,C(u),u):(o=a,(u=Si.get(f))&&(o=_({},a),ih(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function Ng(e,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[rs]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function Og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ky(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=vr(o.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=Ug(o),(u=Si.get(u))&&nh(o,u),f=f.createElement("link"),C(f);var y=f;y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ah=0;function Wy(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ah===0&&(ah=62500*Ty());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ah?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(qy,e),fc=null,uc.call(e))}function qy(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:U,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function Yy(e,n,a,o,u,f,y,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function zg(e,n,a,o,u,f,y,R,B,nt,pt,vt){return e=new Yy(e,n,a,y,B,nt,pt,vt,R),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),e.current=f,f.stateNode=e,n=zu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Hu(f),e}function Fg(e){return e?(e=Ks,e):Ks}function Ig(e,n,a,o,u,f){u=Fg(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(e,o,n),a!==null&&(Kn(a,e,n),po(a,e,n))}function Bg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sh(e,n){Bg(e,n),(e=e.alternate)&&Bg(e,n)}function Hg(e){if(e.tag===13||e.tag===31){var n=fs(e,67108864);n!==null&&Kn(n,e,67108864),sh(e,67108864)}}function Gg(e){if(e.tag===13||e.tag===31){var n=ri();n=jr(n);var a=fs(e,n);a!==null&&Kn(a,e,n),sh(e,n)}}var dc=!0;function jy(e,n,a,o){var u=F.T;F.T=null;var f=V.p;try{V.p=2,rh(e,n,a,o)}finally{V.p=f,F.T=u}}function Zy(e,n,a,o){var u=F.T;F.T=null;var f=V.p;try{V.p=8,rh(e,n,a,o)}finally{V.p=f,F.T=u}}function rh(e,n,a,o){if(dc){var u=oh(o);if(u===null)qf(e,n,o,pc,a),kg(e,o);else if(Qy(u,e,n,a,o))o.stopPropagation();else if(kg(e,o),n&4&&-1<Ky.indexOf(e)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Mt(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var B=1<<31-It(y);R.entanglements[1]|=B,y&=~B}Bi(f),(Fe&6)===0&&(Kl=E()+500,Do(0))}}break;case 31:case 13:R=fs(f,2),R!==null&&Kn(R,f,2),Jl(),sh(f,2)}if(f=oh(o),f===null&&qf(e,n,o,pc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else qf(e,n,o,null,a)}}function oh(e){return e=lu(e),lh(e)}var pc=null;function lh(e){if(pc=null,e=Ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function Vg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case mt:return 2;case yt:return 8;case dt:case Qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var ch=!1,qa=null,Ya=null,ja=null,Fo=new Map,Io=new Map,Za=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kg(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Bo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Hg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Qy(e,n,a,o,u){switch(n){case"focusin":return qa=Bo(qa,e,n,a,o,u),!0;case"dragenter":return Ya=Bo(Ya,e,n,a,o,u),!0;case"mouseover":return ja=Bo(ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Bo(Fo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Io.set(f,Bo(Io.get(f)||null,e,n,a,o,u)),!0}return!1}function Xg(e){var n=Ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){Gg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){Gg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=oh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=Aa(a),n!==null&&Hg(n),e.blockedOn=a,!1;n.shift()}return!0}function Wg(e,n,a){mc(e)&&a.delete(n)}function Jy(){ch=!1,qa!==null&&mc(qa)&&(qa=null),Ya!==null&&mc(Ya)&&(Ya=null),ja!==null&&mc(ja)&&(ja=null),Fo.forEach(Wg),Io.forEach(Wg)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,ch||(ch=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jy)))}var _c=null;function qg(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(lh(o||a)===null)continue;break}var f=Aa(a);f!==null&&(e.splice(n,3),n-=3,of(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(B){return gc(B,e)}qa!==null&&gc(qa,e),Ya!==null&&gc(Ya,e),ja!==null&&gc(ja,e),Fo.forEach(n),Io.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Xg(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Mn]||null;if(typeof f=="function")y||qg(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Mn]||null)R=y.formAction;else if(lh(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),qg(a)}}}function Yg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function uh(e){this._internalRoot=e}vc.prototype.render=uh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();Ig(a,o,e,n,null,null)},vc.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ig(e.current,2,null,e,null,null),Jl(),n[Ti]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Xg(e)}};var jg=t.version;if(jg!=="19.2.4")throw Error(s(527,jg,"19.2.4"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var $y={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{bt=xc.inject($y),At=xc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=e0,f=n0,y=i0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=zg(e,1,!1,null,null,a,o,null,u,f,y,Yg),e[Ti]=n.current,Wf(e),new uh(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=e0,y=n0,R=i0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=zg(e,1,!0,n,a??null,o,u,B,f,y,R,Yg),n.context=Fg(null),a=n.current,o=ri(),o=jr(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,On(n,a),Bi(n),e[Ti]=n.current,Wf(e),new vc(n)},Go.version="19.2.4",Go}var a_;function uS(){if(a_)return hh.exports;a_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hh.exports=cS(),hh.exports}var fS=uS();const hS=eS(fS);var he=Kd();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="182",Fr={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dS=0,s_=1,pS=2,qc=1,mS=2,Ko=3,ya=0,Xn=1,ci=2,va=0,Ps=1,r_=2,o_=3,l_=4,gS=5,Ds=100,_S=101,vS=102,xS=103,yS=104,SS=200,MS=201,ES=202,bS=203,ed=204,nd=205,TS=206,AS=207,RS=208,CS=209,wS=210,DS=211,US=212,LS=213,NS=214,id=0,ad=1,sd=2,Br=3,rd=4,od=5,ld=6,cd=7,dv=0,OS=1,PS=2,Xi=0,Jd=1,pv=2,mv=3,gv=4,_v=5,vv=6,xv=7,yv=300,zs=301,Hr=302,ud=303,fd=304,iu=306,hd=1e3,_a=1001,dd=1002,Ln=1003,zS=1004,yc=1005,Bn=1006,_h=1007,Ns=1008,ui=1009,Sv=1010,Mv=1011,tl=1012,$d=1013,qi=1014,Vi=1015,Sa=1016,tp=1017,ep=1018,el=1020,Ev=35902,bv=35899,Tv=1021,Av=1022,Oi=1023,Ma=1026,Os=1027,Rv=1028,np=1029,Gr=1030,ip=1031,ap=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,pd=35840,md=35841,gd=35842,_d=35843,vd=36196,xd=37492,yd=37496,Sd=37488,Md=37489,Ed=37490,bd=37491,Td=37808,Ad=37809,Rd=37810,Cd=37811,wd=37812,Dd=37813,Ud=37814,Ld=37815,Nd=37816,Od=37817,Pd=37818,zd=37819,Fd=37820,Id=37821,Bd=36492,Hd=36494,Gd=36495,Vd=36283,kd=36284,Xd=36285,Wd=36286,FS=3200,IS=0,BS=1,as="",$n="srgb",Vr="srgb-linear",$c="linear",ke="srgb",Sr=7680,c_=519,HS=512,GS=513,VS=514,sp=515,kS=516,XS=517,rp=518,WS=519,u_=35044,f_="300 es",ki=2e3,tu=2001;function Cv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qS(){const r=nl("canvas");return r.style.display="block",r}const h_={};function d_(...r){const t="THREE."+r.shift();console.log(t,...r)}function oe(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Oe(...r){const t="THREE."+r.shift();console.error(t,...r)}function il(...r){const t=r.join(" ");t in h_||(h_[t]=!0,oe(...r))}function YS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,qd=180/Math.PI;function sl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function ye(r,t,i){return Math.max(t,Math.min(i,r))}function jS(r,t){return(r%t+t)%t}function vh(r,t,i){return(1-i)*r+i*t}function Vo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ZS={DEG2RAD:Qc};class Zt{constructor(t=0,i=0){Zt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[h+0],S=c[h+1],b=c[h+2],T=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=x,t[i+1]=S,t[i+2]=b,t[i+3]=T;return}if(_!==T||m!==x||p!==S||g!==b){let M=m*x+p*S+g*b+_*T;M<0&&(x=-x,S=-S,b=-b,T=-T,M=-M);let v=1-d;if(M<.9995){const O=Math.acos(M),U=Math.sin(O);v=Math.sin(v*O)/U,d=Math.sin(d*O)/U,m=m*v+x*d,p=p*v+S*d,g=g*v+b*d,_=_*v+T*d}else{m=m*v+x*d,p=p*v+S*d,g=g*v+b*d,_=_*v+T*d;const O=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=O,p*=O,g*=O,_*=O}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],x=c[h+1],S=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*S-p*x,t[i+1]=m*b+g*x+p*_-d*S,t[i+2]=p*b+g*S+d*x-m*_,t[i+3]=g*b-d*_-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),S=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*S*b,this._y=p*S*_-x*g*b,this._z=p*g*b+x*S*_,this._w=p*g*_-x*S*b;break;case"YXZ":this._x=x*g*_+p*S*b,this._y=p*S*_-x*g*b,this._z=p*g*b-x*S*_,this._w=p*g*_+x*S*b;break;case"ZXY":this._x=x*g*_-p*S*b,this._y=p*S*_+x*g*b,this._z=p*g*b+x*S*_,this._w=p*g*_-x*S*b;break;case"ZYX":this._x=x*g*_-p*S*b,this._y=p*S*_+x*g*b,this._z=p*g*b-x*S*_,this._w=p*g*_+x*S*b;break;case"YZX":this._x=x*g*_+p*S*b,this._y=p*S*_+x*g*b,this._z=p*g*b-x*S*_,this._w=p*g*_-x*S*b;break;case"XZY":this._x=x*g*_-p*S*b,this._y=p*S*_-x*g*b,this._z=p*g*b+x*S*_,this._w=p*g*_+x*S*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,i=0,s=0){k.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(p_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new k,p_=new Fs;class ve{constructor(t,i,s,l,c,h,d,m,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],S=s[5],b=s[8],T=l[0],M=l[3],v=l[6],O=l[1],U=l[4],L=l[7],P=l[2],I=l[5],z=l[8];return c[0]=h*T+d*O+m*P,c[3]=h*M+d*U+m*I,c[6]=h*v+d*L+m*z,c[1]=p*T+g*O+_*P,c[4]=p*M+g*U+_*I,c[7]=p*v+g*L+_*z,c[2]=x*T+S*O+b*P,c[5]=x*M+S*U+b*I,c[8]=x*v+S*L+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*c,S=p*c-h*m,b=i*_+s*x+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*h)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=S*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(yh.makeScale(t,i)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,i){return this.premultiply(yh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new ve,m_=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ke&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vr]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),r}const Ue=KS();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mr;class QS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Mr===void 0&&(Mr=nl("canvas")),Mr.width=t.width,Mr.height=t.height;const l=Mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let JS=0;class op{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Sh(l[h].image)):c.push(Sh(l[h]))}else c=Sh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?QS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let $S=0;const Mh=new k;class Hn extends Is{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=_a,l=_a,c=Bn,h=Ns,d=Oi,m=ui,p=Hn.DEFAULT_ANISOTROPY,g=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=sl(),this.name="",this.source=new op(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hd:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hd:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=yv;Hn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],S=m[5],b=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,L=(S+1)/2,P=(v+1)/2,I=(g+x)/4,z=(_+T)/4,j=(b+M)/4;return U>L&&U>P?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=z/s):L>P?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=I/l,c=j/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=z/c,l=j/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(_-T)/O,this.z=(x-g)/O,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends Is{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends tM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class wv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Di):Di.fromBufferAttribute(c,h),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Sc.copy(s.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),Mc.subVectors(this.max,ko),Er.subVectors(t.a,ko),br.subVectors(t.b,ko),Tr.subVectors(t.c,ko),Qa.subVectors(br,Er),Ja.subVectors(Tr,br),bs.subVectors(Er,Tr);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-bs.z,bs.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,bs.z,0,-bs.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-bs.y,bs.x,0];return!Eh(i,Er,br,Tr,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Eh(i,Er,br,Tr,Mc))?!1:(Ec.crossVectors(Qa,Ja),i=[Ec.x,Ec.y,Ec.z],Eh(i,Er,br,Tr,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fa=[new k,new k,new k,new k,new k,new k,new k,new k],Di=new k,Sc=new rl,Er=new k,br=new k,Tr=new k,Qa=new k,Ja=new k,bs=new k,ko=new k,Mc=new k,Ec=new k,Ts=new k;function Eh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ts.fromArray(r,c);const d=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=t.dot(Ts),p=i.dot(Ts),g=s.dot(Ts);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const nM=new rl,Xo=new k,bh=new k;class ol{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):nM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(bh)),this.expandByPoint(Xo.copy(t.center).sub(bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ha=new k,Th=new k,bc=new k,$a=new k,Ah=new k,Tc=new k,Rh=new k;class au{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ha.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Th.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(Th);const c=t.distanceTo(i)*.5,h=-this.direction.dot(bc),d=$a.dot(this.direction),m=-$a.dot(bc),p=$a.lengthSq(),g=Math.abs(1-h*h);let _,x,S,b;if(g>0)if(_=h*m-d,x=h*d-m,b=c*g,_>=0)if(x>=-b)if(x<=b){const T=1/g;_*=T,x*=T,S=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Th).addScaledVector(bc,x),S}intersectSphere(t,i){ha.subVectors(t.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,i,s,l,c){Ah.subVectors(i,t),Tc.subVectors(s,t),Rh.crossVectors(Ah,Tc);let h=this.direction.dot(Rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;$a.subVectors(this.origin,t);const m=d*this.direction.dot(Tc.crossVectors($a,Tc));if(m<0)return null;const p=d*this.direction.dot(Ah.cross($a));if(p<0||m+p>h)return null;const g=-d*$a.dot(Rh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,g,_,x,S,b,T,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,x,S,b,T,M)}set(t,i,s,l,c,h,d,m,p,g,_,x,S,b,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=b,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),h=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,S=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+S*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,S=m*_,b=p*g,T=p*_;i[0]=x+T*d,i[4]=b*d-S,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=S*d-b,i[6]=T+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,S=m*_,b=p*g,T=p*_;i[0]=x-T*d,i[4]=-h*_,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*g,i[9]=T-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,S=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=b*p-S,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=S*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,S=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=T-x*_,i[8]=b*_+S,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+b,i[10]=x-T*_}else if(t.order==="XZY"){const x=h*m,S=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=h*g,i[9]=S*_-b,i[2]=b*_-S,i[6]=d*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iM,t,aM)}lookAt(t,i,s){const l=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ts.crossVectors(s,oi),ts.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ts.crossVectors(s,oi)),ts.normalize(),Ac.crossVectors(oi,ts),l[0]=ts.x,l[4]=Ac.x,l[8]=oi.x,l[1]=ts.y,l[5]=Ac.y,l[9]=oi.y,l[2]=ts.z,l[6]=Ac.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],S=s[13],b=s[2],T=s[6],M=s[10],v=s[14],O=s[3],U=s[7],L=s[11],P=s[15],I=l[0],z=l[4],j=l[8],A=l[12],w=l[1],H=l[5],Q=l[9],tt=l[13],ht=l[2],ft=l[6],F=l[10],V=l[14],ot=l[3],St=l[7],it=l[11],D=l[15];return c[0]=h*I+d*w+m*ht+p*ot,c[4]=h*z+d*H+m*ft+p*St,c[8]=h*j+d*Q+m*F+p*it,c[12]=h*A+d*tt+m*V+p*D,c[1]=g*I+_*w+x*ht+S*ot,c[5]=g*z+_*H+x*ft+S*St,c[9]=g*j+_*Q+x*F+S*it,c[13]=g*A+_*tt+x*V+S*D,c[2]=b*I+T*w+M*ht+v*ot,c[6]=b*z+T*H+M*ft+v*St,c[10]=b*j+T*Q+M*F+v*it,c[14]=b*A+T*tt+M*V+v*D,c[3]=O*I+U*w+L*ht+P*ot,c[7]=O*z+U*H+L*ft+P*St,c[11]=O*j+U*Q+L*F+P*it,c[15]=O*A+U*tt+L*V+P*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],S=t[14],b=t[3],T=t[7],M=t[11],v=t[15],O=m*S-p*x,U=d*S-p*_,L=d*x-m*_,P=h*S-p*g,I=h*x-m*g,z=h*_-d*g;return i*(T*O-M*U+v*L)-s*(b*O-M*P+v*I)+l*(b*U-T*P+v*z)-c*(b*L-T*I+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],S=t[11],b=t[12],T=t[13],M=t[14],v=t[15],O=_*M*p-T*x*p+T*m*S-d*M*S-_*m*v+d*x*v,U=b*x*p-g*M*p-b*m*S+h*M*S+g*m*v-h*x*v,L=g*T*p-b*_*p+b*d*S-h*T*S-g*d*v+h*_*v,P=b*_*m-g*T*m-b*d*x+h*T*x+g*d*M-h*_*M,I=i*O+s*U+l*L+c*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return t[0]=O*z,t[1]=(T*x*c-_*M*c-T*l*S+s*M*S+_*l*v-s*x*v)*z,t[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*v+s*m*v)*z,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*S-s*m*S)*z,t[4]=U*z,t[5]=(g*M*c-b*x*c+b*l*S-i*M*S-g*l*v+i*x*v)*z,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*z,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*S+i*m*S)*z,t[8]=L*z,t[9]=(b*_*c-g*T*c-b*s*S+i*T*S+g*s*v-i*_*v)*z,t[10]=(h*T*c-b*d*c+b*s*p-i*T*p-h*s*v+i*d*v)*z,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*S-i*d*S)*z,t[12]=P*z,t[13]=(g*T*l-b*_*l+b*s*x-i*T*x-g*s*M+i*_*M)*z,t[14]=(b*d*l-h*T*l-b*s*m+i*T*m+h*s*M-i*d*M)*z,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*x+i*d*x)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,S=c*g,b=c*_,T=h*g,M=h*_,v=d*_,O=m*p,U=m*g,L=m*_,P=s.x,I=s.y,z=s.z;return l[0]=(1-(T+v))*P,l[1]=(S+L)*P,l[2]=(b-U)*P,l[3]=0,l[4]=(S-L)*I,l[5]=(1-(x+v))*I,l[6]=(M+O)*I,l[7]=0,l[8]=(b+U)*z,l[9]=(M-O)*z,l[10]=(1-(x+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ar.set(l[0],l[1],l[2]).length();const h=Ar.set(l[4],l[5],l[6]).length(),d=Ar.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ui.copy(this);const p=1/c,g=1/h,_=1/d;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let b,T;if(m)b=c/(h-c),T=h*c/(h-c);else if(d===ki)b=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===tu)b=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let b,T;if(m)b=1/(h-c),T=h/(h-c);else if(d===ki)b=-2/(h-c),T=-(h+c)/(h-c);else if(d===tu)b=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ar=new k,Ui=new Je,iM=new k(0,0,0),aM=new k(1,1,1),ts=new k,Ac=new k,oi=new k,__=new Je,v_=new Fs;class Ea{constructor(t=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return __.makeRotationFromQuaternion(t),this.setFromRotationMatrix(__,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return v_.setFromEuler(this),this.setFromQuaternion(v_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sM=0;const x_=new k,Rr=new Fs,da=new Je,Rc=new k,Wo=new k,rM=new k,oM=new Fs,y_=new k(1,0,0),S_=new k(0,1,0),M_=new k(0,0,1),E_={type:"added"},lM={type:"removed"},Cr={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Sn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new k,i=new Ea,s=new Fs,l=new k(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ve}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,i){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Rc.copy(t):Rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Wo,Rc,this.up):da.lookAt(Rc,Wo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(da),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(lM),Ch.child=t,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,rM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,oM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),S=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new k(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new k,pa=new k,wh=new k,ma=new k,wr=new k,Dr=new k,b_=new k,Dh=new k,Uh=new k,Lh=new k,Nh=new sn,Oh=new sn,Ph=new sn;class Ni{constructor(t=new k,i=new k,s=new k){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Li.subVectors(t,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Li.subVectors(l,i),pa.subVectors(s,i),wh.subVectors(t,i);const h=Li.dot(Li),d=Li.dot(pa),m=Li.dot(wh),p=pa.dot(pa),g=pa.dot(wh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(p*m-d*g)*x,b=(h*g-d*m)*x;return c.set(1-S-b,b,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Nh.setScalar(0),Oh.setScalar(0),Ph.setScalar(0),Nh.fromBufferAttribute(t,i),Oh.fromBufferAttribute(t,s),Ph.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Oh,c.y),h.addScaledVector(Ph,c.z),h}static isFrontFacing(t,i,s,l){return Li.subVectors(s,i),pa.subVectors(t,i),Li.cross(pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Li.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ni.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ni.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;wr.subVectors(l,s),Dr.subVectors(c,s),Dh.subVectors(t,s);const m=wr.dot(Dh),p=Dr.dot(Dh);if(m<=0&&p<=0)return i.copy(s);Uh.subVectors(t,l);const g=wr.dot(Uh),_=Dr.dot(Uh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(wr,h);Lh.subVectors(t,c);const S=wr.dot(Lh),b=Dr.dot(Lh);if(b>=0&&S<=b)return i.copy(c);const T=S*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Dr,d);const M=g*b-S*_;if(M<=0&&_-g>=0&&S-b>=0)return b_.subVectors(c,l),d=(_-g)/(_-g+(S-b)),i.copy(l).addScaledVector(b_,d);const v=1/(M+T+x);return h=T*v,d=x*v,i.copy(s).addScaledVector(wr,h).addScaledVector(Dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function zh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=jS(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=zh(h,c,t+1/3),this.g=zh(h,c,t),this.b=zh(h,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=$n){function s(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=$n){const s=Uv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return Ue.workingToColorSpace(Fn.copy(this),t),Math.round(ye(Fn.r*255,0,255))*65536+Math.round(ye(Fn.g*255,0,255))*256+Math.round(ye(Fn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=$n){Ue.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==$n?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+i,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(es),t.getHSL(Cc);const s=vh(es.h,Cc.h,i),l=vh(es.s,Cc.s,i),c=vh(es.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Re;Re.NAMES=Uv;let cM=0;class Wr extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Ps,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=nd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(s.blending=this.blending),this.side!==ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ed&&(s.blendSrc=this.blendSrc),this.blendDst!==nd&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Us extends Wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new k,wc=new Zt;let uM=0;class kn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=u_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(t),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class Lv extends kn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Nv extends kn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class en extends kn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let fM=0;const Mi=new Je,Fh=new Sn,Ur=new k,li=new rl,qo=new rl,yn=new k;class Nn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cv(t)?Nv:Lv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,s){return Mi.makeTranslation(t,i,s),this.applyMatrix4(Mi),this}scale(t,i,s){return Mi.makeScale(t,i,s),this.applyMatrix4(Mi),this}lookAt(t){return Fh.lookAt(t),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new en(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(li.min,qo.min),li.expandByPoint(yn),yn.addVectors(li.max,qo.max),li.expandByPoint(yn)):(li.expandByPoint(qo.min),li.expandByPoint(qo.max))}li.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Ur.fromBufferAttribute(t,p),yn.add(Ur)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new k,m[j]=new k;const p=new k,g=new k,_=new k,x=new Zt,S=new Zt,b=new Zt,T=new k,M=new k;function v(j,A,w){p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,j),S.fromBufferAttribute(c,A),b.fromBufferAttribute(c,w),g.sub(p),_.sub(p),S.sub(x),b.sub(x);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(H),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(H),d[j].add(T),d[A].add(T),d[w].add(T),m[j].add(M),m[A].add(M),m[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let j=0,A=O.length;j<A;++j){const w=O[j],H=w.start,Q=w.count;for(let tt=H,ht=H+Q;tt<ht;tt+=3)v(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new k,L=new k,P=new k,I=new k;function z(j){P.fromBufferAttribute(l,j),I.copy(P);const A=d[j];U.copy(A),U.sub(P.multiplyScalar(P.dot(A))).normalize(),L.crossVectors(I,A);const H=L.dot(m[j])<0?-1:1;h.setXYZW(j,U.x,U.y,U.z,H)}for(let j=0,A=O.length;j<A;++j){const w=O[j],H=w.start,Q=w.count;for(let tt=H,ht=H+Q;tt<ht;tt+=3)z(t.getX(tt+0)),z(t.getX(tt+1)),z(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new kn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new k,c=new k,h=new k,d=new k,m=new k,p=new k,g=new k,_=new k;if(t)for(let x=0,S=t.count;x<S;x+=3){const b=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let S=0,b=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let v=0;v<g;v++)x[b++]=p[S++]}return new kn(x,g,_)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=t(x,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new Je,As=new au,Dc=new ol,A_=new k,Uc=new k,Lc=new k,Nc=new k,Ih=new k,Oc=new k,R_=new k,Pc=new k;class In extends Sn{constructor(t=new Nn,i=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Ih.fromBufferAttribute(_,t),h?Oc.addScaledVector(Ih,g):Oc.addScaledVector(Ih.sub(i),g))}i.add(Oc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),As.copy(t.ray).recast(t.near),!(Dc.containsPoint(As.origin)===!1&&(As.intersectSphere(Dc,A_)===null||As.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(c).invert(),As.copy(t.ray).applyMatrix4(T_),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,As)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=h[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let L=O,P=U;L<P;L+=3){const I=d.getX(L),z=d.getX(L+1),j=d.getX(L+2);l=zc(this,v,t,s,p,g,_,I,z,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=b,v=T;M<v;M+=3){const O=d.getX(M),U=d.getX(M+1),L=d.getX(M+2);l=zc(this,h,t,s,p,g,_,O,U,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=h[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let L=O,P=U;L<P;L+=3){const I=L,z=L+1,j=L+2;l=zc(this,v,t,s,p,g,_,I,z,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let M=b,v=T;M<v;M+=3){const O=M,U=M+1,L=M+2;l=zc(this,h,t,s,p,g,_,O,U,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function hM(r,t,i,s,l,c,h,d){let m;if(t.side===Xn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ya,d),m===null)return null;Pc.copy(d),Pc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:r}}function zc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Uc),r.getVertexPosition(m,Lc),r.getVertexPosition(p,Nc);const g=hM(r,t,i,s,Uc,Lc,Nc,R_);if(g){const _=new k;Ni.getBarycoord(R_,Uc,Lc,Nc,_),l&&(g.uv=Ni.getInterpolatedAttribute(l,d,m,p,_,new Zt)),c&&(g.uv1=Ni.getInterpolatedAttribute(c,d,m,p,_,new Zt)),h&&(g.normal=Ni.getInterpolatedAttribute(h,d,m,p,_,new k),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new k,materialIndex:0};Ni.getNormal(Uc,Lc,Nc,x.normal),g.face=x,g.barycoord=_}return g}class ll extends Nn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,S=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(_,2));function b(T,M,v,O,U,L,P,I,z,j,A){const w=L/z,H=P/j,Q=L/2,tt=P/2,ht=I/2,ft=z+1,F=j+1;let V=0,ot=0;const St=new k;for(let it=0;it<F;it++){const D=it*H-tt;for(let q=0;q<ft;q++){const at=q*w-Q;St[T]=at*O,St[M]=D*U,St[v]=ht,p.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[v]=I>0?1:-1,g.push(St.x,St.y,St.z),_.push(q/z),_.push(1-it/j),V+=1}}for(let it=0;it<j;it++)for(let D=0;D<z;D++){const q=x+D+ft*it,at=x+D+ft*(it+1),_t=x+(D+1)+ft*(it+1),Tt=x+(D+1)+ft*it;m.push(q,at,Tt),m.push(at,_t,Tt),ot+=6}d.addGroup(S,ot,A),S+=ot,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Vn(r){const t={};for(let i=0;i<r.length;i++){const s=kr(r[i]);for(const l in s)t[l]=s[l]}return t}function dM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Ov(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const pM={clone:kr,merge:Vn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=dM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Pv extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new k,C_=new Zt,w_=new Zt;class Ei extends Pv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,C_,w_),i.subVectors(w_,C_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Lr=-90,Nr=1;class _M extends Sn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Lr,Nr,t,i);l.layers=this.layers,this.add(l);const c=new Ei(Lr,Nr,t,i);c.layers=this.layers,this.add(c);const h=new Ei(Lr,Nr,t,i);h.layers=this.layers,this.add(h);const d=new Ei(Lr,Nr,t,i);d.layers=this.layers,this.add(d);const m=new Ei(Lr,Nr,t,i);m.layers=this.layers,this.add(m);const p=new Ei(Lr,Nr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,S),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class zv extends Hn{constructor(t=[],i=zs,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ll(5,5,5),c=new fi({name:"CubemapFromEquirect",uniforms:kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:va});c.uniforms.tEquirect.value=i;const h=new In(l,c),d=i.minFilter;return i.minFilter===Ns&&(i.minFilter=Bn),new _M(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class ga extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vM={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,b=.005;p.inputState.pinching&&x>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ga;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class xM extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yM extends Hn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Ln,g=Ln,_,x){super(null,h,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hh=new k,SM=new k,MM=new ve;class is{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Hh.subVectors(s,i).cross(SM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Hh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||MM.getNormalMatrix(t),l=this.coplanarPoint(Hh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new ol,EM=new Zt(.5,.5),Fc=new k;class lp{constructor(t=new is,i=new is,s=new is,l=new is,c=new is,h=new is){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],S=c[7],b=c[8],T=c[9],M=c[10],v=c[11],O=c[12],U=c[13],L=c[14],P=c[15];if(l[0].setComponents(p-h,S-g,v-b,P-O).normalize(),l[1].setComponents(p+h,S+g,v+b,P+O).normalize(),l[2].setComponents(p+d,S+_,v+T,P+U).normalize(),l[3].setComponents(p-d,S-_,v-T,P-U).normalize(),s)l[4].setComponents(m,x,M,L).normalize(),l[5].setComponents(p-m,S-x,v-M,P-L).normalize();else if(l[4].setComponents(p-m,S-x,v-M,P-L).normalize(),i===ki)l[5].setComponents(p+m,S+x,v+M,P+L).normalize();else if(i===tu)l[5].setComponents(m,x,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const i=EM.distanceTo(t.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?t.max.x:t.min.x,Fc.y=l.normal.y>0?t.max.y:t.min.y,Fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iv extends Wr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eu=new k,nu=new k,D_=new Je,Yo=new au,Ic=new ol,Gh=new k,U_=new k;class bM extends Sn{constructor(t=new Nn,i=new Iv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)eu.fromBufferAttribute(i,l-1),nu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=eu.distanceTo(nu);t.setAttribute("lineDistance",new en(s,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;D_.copy(l).invert(),Yo.copy(t.ray).applyMatrix4(D_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const S=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let T=S,M=b-1;T<M;T+=p){const v=g.getX(T),O=g.getX(T+1),U=Bc(this,t,Yo,m,v,O,T);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(S),v=Bc(this,t,Yo,m,T,M,b-1);v&&i.push(v)}}else{const S=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let T=S,M=b-1;T<M;T+=p){const v=Bc(this,t,Yo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Bc(this,t,Yo,m,b-1,S,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Bc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(eu.fromBufferAttribute(d,l),nu.fromBufferAttribute(d,c),i.distanceSqToSegment(eu,nu,Gh,U_)>s)return;Gh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Gh);if(!(p<t.near||p>t.far))return{distance:p,point:U_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const L_=new k,N_=new k;class TM extends bM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)L_.fromBufferAttribute(i,l),N_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+L_.distanceTo(N_);t.setAttribute("lineDistance",new en(s,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class AM extends Wr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const O_=new Je,Yd=new au,Hc=new ol,Gc=new k;class RM extends Sn{constructor(t=new Nn,i=new AM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;O_.copy(l).invert(),Yd.copy(t.ray).applyMatrix4(O_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let b=x,T=S;b<T;b++){const M=p.getX(b);Gc.fromBufferAttribute(_,M),P_(Gc,M,m,l,t,i,this)}}else{const x=Math.max(0,h.start),S=Math.min(_.count,h.start+h.count);for(let b=x,T=S;b<T;b++)Gc.fromBufferAttribute(_,b),P_(Gc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function P_(r,t,i,s,l,c,h){const d=Yd.distanceSqToPoint(r);if(d<i){const m=new k;Yd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class al extends Hn{constructor(t,i,s=qi,l,c,h,d=Ln,m=Ln,p,g=Ma,_=1){if(g!==Ma&&g!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new op(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class CM extends al{constructor(t,i=qi,s=zs,l,c,h=Ln,d=Ln,m,p=Ma){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Bv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cp extends Nn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],S=[];let b=0;const T=[],M=s/2;let v=0;O(),h===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(S,2));function O(){const L=new k,P=new k;let I=0;const z=(i-t)/s;for(let j=0;j<=c;j++){const A=[],w=j/c,H=w*(i-t)+t;for(let Q=0;Q<=l;Q++){const tt=Q/l,ht=tt*m+d,ft=Math.sin(ht),F=Math.cos(ht);P.x=H*ft,P.y=-w*s+M,P.z=H*F,_.push(P.x,P.y,P.z),L.set(ft,z,F).normalize(),x.push(L.x,L.y,L.z),S.push(tt,1-w),A.push(b++)}T.push(A)}for(let j=0;j<l;j++)for(let A=0;A<c;A++){const w=T[A][j],H=T[A+1][j],Q=T[A+1][j+1],tt=T[A][j+1];(t>0||A!==0)&&(g.push(w,H,tt),I+=3),(i>0||A!==c-1)&&(g.push(H,Q,tt),I+=3)}p.addGroup(v,I,0),v+=I}function U(L){const P=b,I=new Zt,z=new k;let j=0;const A=L===!0?t:i,w=L===!0?1:-1;for(let Q=1;Q<=l;Q++)_.push(0,M*w,0),x.push(0,w,0),S.push(.5,.5),b++;const H=b;for(let Q=0;Q<=l;Q++){const ht=Q/l*m+d,ft=Math.cos(ht),F=Math.sin(ht);z.x=A*F,z.y=M*w,z.z=A*ft,_.push(z.x,z.y,z.z),x.push(0,w,0),I.x=ft*.5+.5,I.y=F*.5*w+.5,S.push(I.x,I.y),b++}for(let Q=0;Q<l;Q++){const tt=P+Q,ht=H+Q;L===!0?g.push(ht,ht+1,tt):g.push(ht+1,ht,tt),j+=3}p.addGroup(v,j,L===!0?1:2),v+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const g=s[l],x=s[l+1]-g,S=(h-g)/x;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new Zt:new k);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new k,l=[],c=[],h=[],d=new k,m=new Je;for(let S=0;S<=t;S++){const b=S/t;l[S]=this.getTangentAt(b,new k)}c[0]=new k,h[0]=new k;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),x<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(ye(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,b))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(ye(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],S*b)),h[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hv extends ba{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Zt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=m-this.aX,S=p-this.aY;m=x*g-S*_+this.aX,p=x*_+S*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wM extends Hv{constructor(t,i,s,l,c,h){super(t,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function up(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,g,_){let x=(h-c)/p-(d-c)/(p+g)+(d-h)/g,S=(d-h)/g-(m-h)/(g+_)+(m-d)/_;x*=g,S*=g,l(h,d,x,S)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const Vc=new k,Vh=new up,kh=new up,Xh=new up;class Gv extends ba{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new k){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Vc.subVectors(l[0],l[1]).add(l[0]),p=Vc);const _=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Vc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Vc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(_),S),T=Math.pow(_.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(g),S);T<1e-4&&(T=1),b<1e-4&&(b=T),M<1e-4&&(M=T),Vh.initNonuniformCatmullRom(p.x,_.x,x.x,g.x,b,T,M),kh.initNonuniformCatmullRom(p.y,_.y,x.y,g.y,b,T,M),Xh.initNonuniformCatmullRom(p.z,_.z,x.z,g.z,b,T,M)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(p.x,_.x,x.x,g.x,this.tension),kh.initCatmullRom(p.y,_.y,x.y,g.y,this.tension),Xh.initCatmullRom(p.z,_.z,x.z,g.z,this.tension));return s.set(Vh.calc(m),kh.calc(m),Xh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function z_(r,t,i,s,l){const c=(s-t)*.5,h=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+h)*m+(-3*i+3*s-2*c-h)*d+c*r+i}function DM(r,t){const i=1-r;return i*i*t}function UM(r,t){return 2*(1-r)*r*t}function LM(r,t){return r*r*t}function Jo(r,t,i,s){return DM(r,t)+UM(r,i)+LM(r,s)}function NM(r,t){const i=1-r;return i*i*i*t}function OM(r,t){const i=1-r;return 3*i*i*r*t}function PM(r,t){return 3*(1-r)*r*r*t}function zM(r,t){return r*r*r*t}function $o(r,t,i,s,l){return NM(r,t)+OM(r,i)+PM(r,s)+zM(r,l)}class FM extends ba{constructor(t=new Zt,i=new Zt,s=new Zt,l=new Zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Zt){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set($o(t,l.x,c.x,h.x,d.x),$o(t,l.y,c.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class IM extends ba{constructor(t=new k,i=new k,s=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new k){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set($o(t,l.x,c.x,h.x,d.x),$o(t,l.y,c.y,h.y,d.y),$o(t,l.z,c.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class BM extends ba{constructor(t=new Zt,i=new Zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Zt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Zt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class HM extends ba{constructor(t=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new k){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class GM extends ba{constructor(t=new Zt,i=new Zt,s=new Zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Zt){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Jo(t,l.x,c.x,h.x),Jo(t,l.y,c.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vv extends ba{constructor(t=new k,i=new k,s=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new k){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Jo(t,l.x,c.x,h.x),Jo(t,l.y,c.y,h.y),Jo(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class VM extends ba{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Zt){const s=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],g=l[h>l.length-2?l.length-1:h+1],_=l[h>l.length-3?l.length-1:h+2];return s.set(z_(d,m.x,p.x,g.x,_.x),z_(d,m.y,p.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Zt().fromArray(l))}return this}}var kM=Object.freeze({__proto__:null,ArcCurve:wM,CatmullRomCurve3:Gv,CubicBezierCurve:FM,CubicBezierCurve3:IM,EllipseCurve:Hv,LineCurve:BM,LineCurve3:HM,QuadraticBezierCurve:GM,QuadraticBezierCurve3:Vv,SplineCurve:VM});class Xr extends Nn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,S=[],b=[],T=[],M=[];for(let v=0;v<g;v++){const O=v*x-h;for(let U=0;U<p;U++){const L=U*_-c;b.push(L,-O,0),T.push(0,0,1),M.push(U/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<d;O++){const U=O+p*v,L=O+p*(v+1),P=O+1+p*(v+1),I=O+1+p*v;S.push(U,L,I),S.push(L,P,I)}this.setIndex(S),this.setAttribute("position",new en(b,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.widthSegments,t.heightSegments)}}class fp extends Nn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let _=t;const x=(i-t)/l,S=new k,b=new Zt;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const v=c+M/s*h;S.x=_*Math.cos(v),S.y=_*Math.sin(v),m.push(S.x,S.y,S.z),p.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,g.push(b.x,b.y)}_+=x}for(let T=0;T<l;T++){const M=T*(s+1);for(let v=0;v<s;v++){const O=v+M,U=O,L=O+s+1,P=O+s+2,I=O+1;d.push(U,L,I),d.push(L,P,I)}}this.setIndex(d),this.setAttribute("position",new en(m,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class hp extends Nn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new k,x=new k,S=[],b=[],T=[],M=[];for(let v=0;v<=s;v++){const O=[],U=v/s;let L=0;v===0&&h===0?L=.5/i:v===s&&m===Math.PI&&(L=-.5/i);for(let P=0;P<=i;P++){const I=P/i;_.x=-t*Math.cos(l+I*c)*Math.sin(h+U*d),_.y=t*Math.cos(h+U*d),_.z=t*Math.sin(l+I*c)*Math.sin(h+U*d),b.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),M.push(I+L,1-U),O.push(p++)}g.push(O)}for(let v=0;v<s;v++)for(let O=0;O<i;O++){const U=g[v][O+1],L=g[v][O],P=g[v+1][O],I=g[v+1][O+1];(v!==0||h>0)&&S.push(U,L,I),(v!==s-1||m<Math.PI)&&S.push(L,P,I)}this.setIndex(S),this.setAttribute("position",new en(b,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dp extends Nn{constructor(t=new Vv(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new k,m=new k,p=new Zt;let g=new k;const _=[],x=[],S=[],b=[];T(),this.setIndex(b),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(S,2));function T(){for(let U=0;U<i;U++)M(U);M(c===!1?i:0),O(),v()}function M(U){g=t.getPointAt(U/i,g);const L=h.normals[U],P=h.binormals[U];for(let I=0;I<=l;I++){const z=I/l*Math.PI*2,j=Math.sin(z),A=-Math.cos(z);m.x=A*L.x+j*P.x,m.y=A*L.y+j*P.y,m.z=A*L.z+j*P.z,m.normalize(),x.push(m.x,m.y,m.z),d.x=g.x+s*m.x,d.y=g.y+s*m.y,d.z=g.z+s*m.z,_.push(d.x,d.y,d.z)}}function v(){for(let U=1;U<=i;U++)for(let L=1;L<=l;L++){const P=(l+1)*(U-1)+(L-1),I=(l+1)*U+(L-1),z=(l+1)*U+L,j=(l+1)*(U-1)+L;b.push(P,I,j),b.push(I,z,j)}}function O(){for(let U=0;U<=i;U++)for(let L=0;L<=l;L++)p.x=U/i,p.y=L/l,S.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new dp(new kM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class XM extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WM extends Wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qM extends Wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wh={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class YM{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const S=p[_],b=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jM=new YM;class pp{constructor(t){this.manager=t!==void 0?t:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}pp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Or=new WeakMap;class ZM extends pp{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Wh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let _=Or.get(h);_===void 0&&(_=[],Or.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=nl("img");function m(){g(),i&&i(this);const _=Or.get(this)||[];for(let x=0;x<_.length;x++){const S=_[x];S.onLoad&&S.onLoad(this)}Or.delete(this),c.manager.itemEnd(t)}function p(_){g(),l&&l(_),Wh.remove(`image:${t}`);const x=Or.get(this)||[];for(let S=0;S<x.length;S++){const b=x[S];b.onError&&b.onError(_)}Or.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Wh.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class KM extends pp{constructor(t){super(t)}load(t,i,s,l){const c=new Hn,h=new ZM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class kv extends Sn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new Je,F_=new k,I_=new k;class QM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;F_.setFromMatrixPosition(t.matrixWorld),i.position.copy(F_),I_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(I_),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mp extends Pv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JM extends QM{constructor(){super(new mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $M extends kv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new JM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class tE extends kv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class eE extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class nE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class B_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ye(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iE extends Is{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function H_(r,t,i,s){const l=aE(s);switch(i){case Tv:return r*t;case Rv:return r*t/l.components*l.byteLength;case np:return r*t/l.components*l.byteLength;case Gr:return r*t*2/l.components*l.byteLength;case ip:return r*t*2/l.components*l.byteLength;case Av:return r*t*3/l.components*l.byteLength;case Oi:return r*t*4/l.components*l.byteLength;case ap:return r*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:case _d:return Math.max(r,16)*Math.max(t,8)/4;case pd:case gd:return Math.max(r,8)*Math.max(t,8)/2;case vd:case xd:case Sd:case Md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case yd:case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bd:case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aE(r){switch(r){case ui:case Sv:return{byteLength:1,components:1};case tl:case Mv:case Sa:return{byteLength:2,components:1};case tp:case ep:return{byteLength:2,components:4};case qi:case $d:case Vi:return{byteLength:4,components:1};case Ev:case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function sE(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<_.length;S++){const b=_[x],T=_[S];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,_[x]=T)}_.length=x+1;for(let S=0,b=_.length;S<b;S++){const T=_[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ab=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:rE,alphahash_pars_fragment:oE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:fE,aomap_fragment:hE,aomap_pars_fragment:dE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:gE,beginnormal_vertex:_E,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:yE,clipping_planes_fragment:SE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:EE,clipping_planes_vertex:bE,color_fragment:TE,color_pars_fragment:AE,color_pars_vertex:RE,color_vertex:CE,common:wE,cube_uv_reflection_fragment:DE,defaultnormal_vertex:UE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:OE,emissivemap_pars_fragment:PE,colorspace_fragment:zE,colorspace_pars_fragment:FE,envmap_fragment:IE,envmap_common_pars_fragment:BE,envmap_pars_fragment:HE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:JE,envmap_vertex:VE,fog_vertex:kE,fog_pars_vertex:XE,fog_fragment:WE,fog_pars_fragment:qE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:jE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:KE,lights_pars_begin:QE,lights_toon_fragment:$E,lights_toon_pars_fragment:tb,lights_phong_fragment:eb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:ab,lights_fragment_begin:sb,lights_fragment_maps:rb,lights_fragment_end:ob,logdepthbuf_fragment:lb,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:fb,map_fragment:hb,map_pars_fragment:db,map_particle_fragment:pb,map_particle_pars_fragment:mb,metalnessmap_fragment:gb,metalnessmap_pars_fragment:_b,morphinstance_vertex:vb,morphcolor_vertex:xb,morphnormal_vertex:yb,morphtarget_pars_vertex:Sb,morphtarget_vertex:Mb,normal_fragment_begin:Eb,normal_fragment_maps:bb,normal_pars_fragment:Tb,normal_pars_vertex:Ab,normal_vertex:Rb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:wb,clearcoat_normal_fragment_maps:Db,clearcoat_pars_fragment:Ub,iridescence_pars_fragment:Lb,opaque_fragment:Nb,packing:Ob,premultiplied_alpha_fragment:Pb,project_vertex:zb,dithering_fragment:Fb,dithering_pars_fragment:Ib,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Vb,shadowmap_vertex:kb,shadowmask_pars_fragment:Xb,skinbase_vertex:Wb,skinning_pars_vertex:qb,skinning_vertex:Yb,skinnormal_vertex:jb,specularmap_fragment:Zb,specularmap_pars_fragment:Kb,tonemapping_fragment:Qb,tonemapping_pars_fragment:Jb,transmission_fragment:$b,transmission_pars_fragment:t1,uv_pars_fragment:e1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:a1,background_vert:s1,background_frag:r1,backgroundCube_vert:o1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:f1,depth_frag:h1,distance_vert:d1,distance_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:_1,linedashed_frag:v1,meshbasic_vert:x1,meshbasic_frag:y1,meshlambert_vert:S1,meshlambert_frag:M1,meshmatcap_vert:E1,meshmatcap_frag:b1,meshnormal_vert:T1,meshnormal_frag:A1,meshphong_vert:R1,meshphong_frag:C1,meshphysical_vert:w1,meshphysical_frag:D1,meshtoon_vert:U1,meshtoon_frag:L1,points_vert:N1,points_frag:O1,shadow_vert:P1,shadow_frag:z1,sprite_vert:F1,sprite_frag:I1},Ft={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Gi={basic:{uniforms:Vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Vn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Vn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Vn([Ft.points,Ft.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Vn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Vn([Ft.common,Ft.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Vn([Ft.sprite,Ft.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Vn([Ft.common,Ft.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Vn([Ft.lights,Ft.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Gi.physical={uniforms:Vn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const kc={r:0,b:0,g:0},Cs=new Ea,B1=new Je;function H1(r,t,i,s,l,c,h){const d=new Re(0);let m=c===!0?0:1,p,g,_=null,x=0,S=null;function b(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?i:t).get(L)),L}function T(U){let L=!1;const P=b(U);P===null?v(d,m):P&&P.isColor&&(v(P,1),L=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,L){const P=b(L);P&&(P.isCubeTexture||P.mapping===iu)?(g===void 0&&(g=new In(new ll(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:kr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cs.copy(L.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(Cs)),g.material.toneMapped=Ue.getTransfer(P.colorSpace)!==ke,(_!==P||x!==P.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,x=P.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new In(new Xr(2,2),new fi({name:"BackgroundMaterial",uniforms:kr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(P.colorSpace)!==ke,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,L){U.getRGB(kc,Ov(r)),s.buffers.color.setClear(kc.r,kc.g,kc.b,L,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),m=L,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:T,addToRenderList:M,dispose:O}}function G1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(w,H,Q,tt,ht){let ft=!1;const F=_(tt,Q,H);c!==F&&(c=F,p(c.object)),ft=S(w,tt,Q,ht),ft&&b(w,tt,Q,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,L(w,H,Q,tt),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,H,Q){const tt=Q.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let ft=ht[H.id];ft===void 0&&(ft={},ht[H.id]=ft);let F=ft[tt];return F===void 0&&(F=x(m()),ft[tt]=F),F}function x(w){const H=[],Q=[],tt=[];for(let ht=0;ht<i;ht++)H[ht]=0,Q[ht]=0,tt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:tt,object:w,attributes:{},index:null}}function S(w,H,Q,tt){const ht=c.attributes,ft=H.attributes;let F=0;const V=Q.getAttributes();for(const ot in V)if(V[ot].location>=0){const it=ht[ot];let D=ft[ot];if(D===void 0&&(ot==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),ot==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),it===void 0||it.attribute!==D||D&&it.data!==D.data)return!0;F++}return c.attributesNum!==F||c.index!==tt}function b(w,H,Q,tt){const ht={},ft=H.attributes;let F=0;const V=Q.getAttributes();for(const ot in V)if(V[ot].location>=0){let it=ft[ot];it===void 0&&(ot==="instanceMatrix"&&w.instanceMatrix&&(it=w.instanceMatrix),ot==="instanceColor"&&w.instanceColor&&(it=w.instanceColor));const D={};D.attribute=it,it&&it.data&&(D.data=it.data),ht[ot]=D,F++}c.attributes=ht,c.attributesNum=F,c.index=tt}function T(){const w=c.newAttributes;for(let H=0,Q=w.length;H<Q;H++)w[H]=0}function M(w){v(w,0)}function v(w,H){const Q=c.newAttributes,tt=c.enabledAttributes,ht=c.attributeDivisors;Q[w]=1,tt[w]===0&&(r.enableVertexAttribArray(w),tt[w]=1),ht[w]!==H&&(r.vertexAttribDivisor(w,H),ht[w]=H)}function O(){const w=c.newAttributes,H=c.enabledAttributes;for(let Q=0,tt=H.length;Q<tt;Q++)H[Q]!==w[Q]&&(r.disableVertexAttribArray(Q),H[Q]=0)}function U(w,H,Q,tt,ht,ft,F){F===!0?r.vertexAttribIPointer(w,H,Q,ht,ft):r.vertexAttribPointer(w,H,Q,tt,ht,ft)}function L(w,H,Q,tt){T();const ht=tt.attributes,ft=Q.getAttributes(),F=H.defaultAttributeValues;for(const V in ft){const ot=ft[V];if(ot.location>=0){let St=ht[V];if(St===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const it=St.normalized,D=St.itemSize,q=t.get(St);if(q===void 0)continue;const at=q.buffer,_t=q.type,Tt=q.bytesPerElement,Z=_t===r.INT||_t===r.UNSIGNED_INT||St.gpuType===$d;if(St.isInterleavedBufferAttribute){const lt=St.data,Et=lt.stride,Dt=St.offset;if(lt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<ot.locationSize;Nt++)v(ot.location+Nt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Nt=0;Nt<ot.locationSize;Nt++)M(ot.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,at);for(let Nt=0;Nt<ot.locationSize;Nt++)U(ot.location+Nt,D/ot.locationSize,_t,it,Et*Tt,(Dt+D/ot.locationSize*Nt)*Tt,Z)}else{if(St.isInstancedBufferAttribute){for(let lt=0;lt<ot.locationSize;lt++)v(ot.location+lt,St.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let lt=0;lt<ot.locationSize;lt++)M(ot.location+lt);r.bindBuffer(r.ARRAY_BUFFER,at);for(let lt=0;lt<ot.locationSize;lt++)U(ot.location+lt,D/ot.locationSize,_t,it,D*Tt,D/ot.locationSize*lt*Tt,Z)}}else if(F!==void 0){const it=F[V];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(ot.location,it);break;case 3:r.vertexAttrib3fv(ot.location,it);break;case 4:r.vertexAttrib4fv(ot.location,it);break;default:r.vertexAttrib1fv(ot.location,it)}}}}O()}function P(){j();for(const w in s){const H=s[w];for(const Q in H){const tt=H[Q];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete H[Q]}delete s[w]}}function I(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const Q in H){const tt=H[Q];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete H[Q]}delete s[w.id]}function z(w){for(const H in s){const Q=s[H];if(Q[w.id]===void 0)continue;const tt=Q[w.id];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete Q[w.id]}}function j(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function V1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let b=0;b<_;b++)S+=g[b];i.update(S,s,1)}function m(p,g,_,x){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function k1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Oi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ui&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!j)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(oe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:L,maxSamples:P,samples:I}}function X1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new is,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,S){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,U=O*4;let L=v.clippingState||null;m.value=L,L=g(b,x,U,S);for(let P=0;P!==U;++P)L[P]=i[P];v.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,S,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const v=S+T*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,L=S;U!==T;++U,L+=4)h.copy(_[U]).applyMatrix4(O,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function W1(r){let t=new WeakMap;function i(h,d){return d===ud?h.mapping=zs:d===fd&&(h.mapping=Hr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ud||d===fd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Fv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ss=4,G_=[.125,.215,.35,.446,.526,.582],Ls=20,q1=256,jo=new mp,V_=new Re;let Yh=null,jh=0,Zh=0,Kh=!1;const Y1=new k;class k_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=Y1}=c;Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,jh,Zh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Sa,format:Oi,colorSpace:Vr,depthBuffer:!1},l=X_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=j1(c)),this._blurMaterial=K1(c,t,i),this._ggxMaterial=Z1(c,t,i)}return l}_compileMaterial(t){const i=new In(new Nn,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(V_),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new ll,new Us({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,v=!0):(M.color.copy(V_),v=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const P=this._cubeSize;Pr(l,L*P,U>2?P:0,P,P),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=S,_.autoClear=x,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===zs||t.mapping===Hr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,S=_*x,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-ss?s-b+ss:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-i,Pr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(d,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Pr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(d,jo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ls-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Ls;M>Ls&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ls}`);const v=[];let O=0;for(let z=0;z<Ls;++z){const j=z/T,A=Math.exp(-j*j/2);v.push(A),z===0?O+=A:z<M&&(O+=2*A)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-s;const L=this._sizeLods[l],P=3*L*(l>U-ss?l-U+ss:0),I=4*(this._cubeSize-L);Pr(i,P,I,3*L,2*L),m.setRenderTarget(i),m.render(_,jo)}}function j1(r){const t=[],i=[],s=[];let l=r;const c=r-ss+1+G_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-ss?m=G_[h-r+ss-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,b=6,T=3,M=2,v=1,O=new Float32Array(T*b*S),U=new Float32Array(M*b*S),L=new Float32Array(v*b*S);for(let I=0;I<S;I++){const z=I%3*2/3-1,j=I>2?0:-1,A=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];O.set(A,T*b*I),U.set(x,M*b*I);const w=[I,I,I,I,I,I];L.set(w,v*b*I)}const P=new Nn;P.setAttribute("position",new kn(O,T)),P.setAttribute("uv",new kn(U,M)),P.setAttribute("faceIndex",new kn(L,v)),s.push(new In(P,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function X_(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Z1(r,t,i){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function K1(r,t,i){const s=new Float32Array(Ls),l=new k(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function W_(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function q_(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ud||m===fd,g=m===zs||m===Hr;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new k_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new k_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function J1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&il("WebGLRenderer: "+s+" extension not supported."),l}}}function $1(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,b=_.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let U=0,L=O.length;U<L;U+=3){const P=O[U+0],I=O[U+1],z=O[U+2];x.push(P,I,I,z,z,P)}}else if(b!==void 0){const O=b.array;T=b.version;for(let U=0,L=O.length/3-1;U<L;U+=3){const P=U+0,I=U+1,z=U+2;x.push(P,I,I,z,z,P)}}else return;const M=new(Cv(x)?Nv:Lv)(x,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function tT(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*h),i.update(S,s,1)}function p(x,S,b){b!==0&&(r.drawElementsInstanced(s,S,c,x*h,b),i.update(S,s,b))}function g(x,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=S[v];i.update(M,s,1)}function _(x,S,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,S[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,T,0,b);let v=0;for(let O=0;O<b;O++)v+=S[O]*T[O];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function eT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Oe("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nT(r,t,i){const s=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let w=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),M===!0&&(L=3);let P=d.attributes.position.count*L,I=1;P>t.maxTextureSize&&(I=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const z=new Float32Array(P*I*4*_),j=new wv(z,P,I,_);j.type=Vi,j.needsUpdate=!0;const A=L*4;for(let H=0;H<_;H++){const Q=v[H],tt=O[H],ht=U[H],ft=P*I*4*H;for(let F=0;F<Q.count;F++){const V=F*A;b===!0&&(l.fromBufferAttribute(Q,F),z[ft+V+0]=l.x,z[ft+V+1]=l.y,z[ft+V+2]=l.z,z[ft+V+3]=0),T===!0&&(l.fromBufferAttribute(tt,F),z[ft+V+4]=l.x,z[ft+V+5]=l.y,z[ft+V+6]=l.z,z[ft+V+7]=0),M===!0&&(l.fromBufferAttribute(ht,F),z[ft+V+8]=l.x,z[ft+V+9]=l.y,z[ft+V+10]=l.z,z[ft+V+11]=ht.itemSize===4?l.w:1)}}x={count:_,texture:j,size:new Zt(P,I)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function iT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const aT={[Jd]:"LINEAR_TONE_MAPPING",[pv]:"REINHARD_TONE_MAPPING",[mv]:"CINEON_TONE_MAPPING",[gv]:"ACES_FILMIC_TONE_MAPPING",[vv]:"AGX_TONE_MAPPING",[xv]:"NEUTRAL_TONE_MAPPING",[_v]:"CUSTOM_TONE_MAPPING"};function sT(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Wi(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),d=new Nn;d.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new en([0,2,0,0,2,0],2));const m=new XM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new In(d,m),g=new mp(-1,1,1,-1,0,1);let _=null,x=null,S=!1,b,T=null,M=[],v=!1;this.setSize=function(O,U){c.setSize(O,U),h.setSize(O,U);for(let L=0;L<M.length;L++){const P=M[L];P.setSize&&P.setSize(O,U)}},this.setEffects=function(O){M=O,v=M.length>0&&M[0].isRenderPass===!0;const U=c.width,L=c.height;for(let P=0;P<M.length;P++){const I=M[P];I.setSize&&I.setSize(U,L)}},this.begin=function(O,U){if(S||O.toneMapping===Xi&&M.length===0)return!1;if(T=U,U!==null){const L=U.width,P=U.height;(c.width!==L||c.height!==P)&&this.setSize(L,P)}return v===!1&&O.setRenderTarget(c),b=O.toneMapping,O.toneMapping=Xi,!0},this.hasRenderPass=function(){return v},this.end=function(O,U){O.toneMapping=b,S=!0;let L=c,P=h;for(let I=0;I<M.length;I++){const z=M[I];if(z.enabled!==!1&&(z.render(O,P,L,U),z.needsSwap!==!1)){const j=L;L=P,P=j}}if(_!==O.outputColorSpace||x!==O.toneMapping){_=O.outputColorSpace,x=O.toneMapping,m.defines={},Ue.getTransfer(_)===ke&&(m.defines.SRGB_TRANSFER="");const I=aT[x];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,O.setRenderTarget(T),O.render(p,g),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Wv=new Hn,jd=new al(1,1),qv=new wv,Yv=new eM,jv=new zv,Y_=[],j_=[],Z_=new Float32Array(16),K_=new Float32Array(9),Q_=new Float32Array(4);function qr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Y_[l];if(c===void 0&&(c=new Float32Array(l),Y_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function ru(r,t){let i=j_[t];i===void 0&&(i=new Int32Array(t),j_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function rT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function uT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Q_.set(s),r.uniformMatrix2fv(this.addr,!1,Q_),vn(i,s)}}function fT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;K_.set(s),r.uniformMatrix3fv(this.addr,!1,K_),vn(i,s)}}function hT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Z_.set(s),r.uniformMatrix4fv(this.addr,!1,Z_),vn(i,s)}}function dT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function _T(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function vT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function xT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function yT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function ST(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jd.compareFunction=i.isReversedDepthBuffer()?rp:sp,c=jd):c=Wv,i.setTexture2D(t||c,l)}function MT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Yv,l)}function ET(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||jv,l)}function bT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||qv,l)}function TT(r){switch(r){case 5126:return rT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return bT}}function AT(r,t){r.uniform1fv(this.addr,t)}function RT(r,t){const i=qr(t,this.size,2);r.uniform2fv(this.addr,i)}function CT(r,t){const i=qr(t,this.size,3);r.uniform3fv(this.addr,i)}function wT(r,t){const i=qr(t,this.size,4);r.uniform4fv(this.addr,i)}function DT(r,t){const i=qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function UT(r,t){const i=qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function LT(r,t){const i=qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function NT(r,t){r.uniform1iv(this.addr,t)}function OT(r,t){r.uniform2iv(this.addr,t)}function PT(r,t){r.uniform3iv(this.addr,t)}function zT(r,t){r.uniform4iv(this.addr,t)}function FT(r,t){r.uniform1uiv(this.addr,t)}function IT(r,t){r.uniform2uiv(this.addr,t)}function BT(r,t){r.uniform3uiv(this.addr,t)}function HT(r,t){r.uniform4uiv(this.addr,t)}function GT(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=jd:h=Wv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function VT(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Yv,c[h])}function kT(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||jv,c[h])}function XT(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||qv,c[h])}function WT(r){switch(r){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return wT;case 35674:return DT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return OT;case 35668:case 35672:return PT;case 35669:case 35673:return zT;case 5125:return FT;case 36294:return IT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return XT}}class qT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class YT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WT(i.type)}}class jT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function J_(r,t){r.seq.push(t),r.map[t.id]=t}function ZT(r,t,i){const s=r.name,l=s.length;for(Qh.lastIndex=0;;){const c=Qh.exec(s),h=Qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){J_(i,p===void 0?new qT(d,r,t):new YT(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new jT(d),J_(i,_)),i=_}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);ZT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function $_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const KT=37297;let QT=0;function JT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const tv=new ve;function $T(r){Ue._getMatrix(tv,Ue.workingColorSpace,r);const t=`mat3( ${tv.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(r)){case $c:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ev(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+JT(r.getShaderSource(t),d)}else return c}function tA(r,t){const i=$T(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const eA={[Jd]:"Linear",[pv]:"Reinhard",[mv]:"Cineon",[gv]:"ACESFilmic",[vv]:"AgX",[xv]:"Neutral",[_v]:"Custom"};function nA(r,t){const i=eA[t];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new k;function iA(){Ue.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function sA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function rA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Qo(r){return r!==""}function nv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(r){return r.replace(oA,cA)}const lA=new Map;function cA(r,t){let i=xe[t];if(i===void 0){const s=lA.get(t);if(s!==void 0)i=xe[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Zd(i)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(r){return r.replace(uA,fA)}function fA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const hA={[qc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function dA(r){return hA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pA={[zs]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function mA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gA={[Hr]:"ENVMAP_MODE_REFRACTION"};function _A(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vA={[dv]:"ENVMAP_BLENDING_MULTIPLY",[OS]:"ENVMAP_BLENDING_MIX",[PS]:"ENVMAP_BLENDING_ADD"};function xA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vA[r.combine]||"ENVMAP_BLENDING_NONE"}function yA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function SA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=dA(i),p=mA(i),g=_A(i),_=xA(i),x=yA(i),S=aA(i),b=sA(c),T=l.createProgram();let M,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(M=[sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?xe.tonemapping_pars_fragment:"",i.toneMapping!==Xi?nA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,tA("linearToOutputTexel",i.outputColorSpace),iA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),h=Zd(h),h=nv(h,i),h=iv(h,i),d=Zd(d),d=nv(d,i),d=iv(d,i),h=av(h),d=av(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+M+h,L=O+v+d,P=$_(l,l.VERTEX_SHADER,U),I=$_(l,l.FRAGMENT_SHADER,L);l.attachShader(T,P),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(H){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(T)||"",tt=l.getShaderInfoLog(P)||"",ht=l.getShaderInfoLog(I)||"",ft=Q.trim(),F=tt.trim(),V=ht.trim();let ot=!0,St=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,I);else{const it=ev(l,P,"vertex"),D=ev(l,I,"fragment");Oe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ft+`
`+it+`
`+D)}else ft!==""?oe("WebGLProgram: Program Info Log:",ft):(F===""||V==="")&&(St=!1);St&&(H.diagnostics={runnable:ot,programLog:ft,vertexShader:{log:F,prefix:M},fragmentShader:{log:V,prefix:v}})}l.deleteShader(P),l.deleteShader(I),j=new Jc(l,T),A=rA(l,T)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,KT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let MA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new bA(t),i.set(t,s)),s}}class bA{constructor(t){this.id=MA++,this.code=t,this.usedTimes=0}}function TA(r,t,i,s,l,c,h){const d=new Dv,m=new EA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,w,H,Q,tt){const ht=Q.fog,ft=tt.geometry,F=A.isMeshStandardMaterial?Q.environment:null,V=(A.isMeshStandardMaterial?i:t).get(A.envMap||F),ot=V&&V.mapping===iu?V.image.height:null,St=b[A.type];A.precision!==null&&(S=l.getMaxPrecision(A.precision),S!==A.precision&&oe("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const it=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,D=it!==void 0?it.length:0;let q=0;ft.morphAttributes.position!==void 0&&(q=1),ft.morphAttributes.normal!==void 0&&(q=2),ft.morphAttributes.color!==void 0&&(q=3);let at,_t,Tt,Z;if(St){const De=Gi[St];at=De.vertexShader,_t=De.fragmentShader}else at=A.vertexShader,_t=A.fragmentShader,m.update(A),Tt=m.getVertexShaderID(A),Z=m.getFragmentShaderID(A);const lt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Dt=tt.isInstancedMesh===!0,Nt=tt.isBatchedMesh===!0,$t=!!A.map,ue=!!A.matcap,se=!!V,Kt=!!A.aoMap,Se=!!A.lightMap,ne=!!A.bumpMap,me=!!A.normalMap,G=!!A.displacementMap,we=!!A.emissiveMap,de=!!A.metalnessMap,Ce=!!A.roughnessMap,Ht=A.anisotropy>0,N=A.clearcoat>0,E=A.dispersion>0,Y=A.iridescence>0,mt=A.sheen>0,yt=A.transmission>0,dt=Ht&&!!A.anisotropyMap,Qt=N&&!!A.clearcoatMap,Ut=N&&!!A.clearcoatNormalMap,Wt=N&&!!A.clearcoatRoughnessMap,re=Y&&!!A.iridescenceMap,bt=Y&&!!A.iridescenceThicknessMap,At=mt&&!!A.sheenColorMap,Gt=mt&&!!A.sheenRoughnessMap,It=!!A.specularMap,Lt=!!A.specularColorMap,ge=!!A.specularIntensityMap,W=yt&&!!A.transmissionMap,Pt=yt&&!!A.thicknessMap,Rt=!!A.gradientMap,Bt=!!A.alphaMap,Mt=A.alphaTest>0,xt=!!A.alphaHash,Ct=!!A.extensions;let le=Xi;A.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(le=r.toneMapping);const Be={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:at,fragmentShader:_t,defines:A.defines,customVertexShaderID:Tt,customFragmentShaderID:Z,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Nt,batchingColor:Nt&&tt._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&tt.instanceColor!==null,instancingMorph:Dt&&tt.morphTexture!==null,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Vr,alphaToCoverage:!!A.alphaToCoverage,map:$t,matcap:ue,envMap:se,envMapMode:se&&V.mapping,envMapCubeUVHeight:ot,aoMap:Kt,lightMap:Se,bumpMap:ne,normalMap:me,displacementMap:G,emissiveMap:we,normalMapObjectSpace:me&&A.normalMapType===BS,normalMapTangentSpace:me&&A.normalMapType===IS,metalnessMap:de,roughnessMap:Ce,anisotropy:Ht,anisotropyMap:dt,clearcoat:N,clearcoatMap:Qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Wt,dispersion:E,iridescence:Y,iridescenceMap:re,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:At,sheenRoughnessMap:Gt,specularMap:It,specularColorMap:Lt,specularIntensityMap:ge,transmission:yt,transmissionMap:W,thicknessMap:Pt,gradientMap:Rt,opaque:A.transparent===!1&&A.blending===Ps&&A.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:xt,combine:A.combine,mapUv:$t&&T(A.map.channel),aoMapUv:Kt&&T(A.aoMap.channel),lightMapUv:Se&&T(A.lightMap.channel),bumpMapUv:ne&&T(A.bumpMap.channel),normalMapUv:me&&T(A.normalMap.channel),displacementMapUv:G&&T(A.displacementMap.channel),emissiveMapUv:we&&T(A.emissiveMap.channel),metalnessMapUv:de&&T(A.metalnessMap.channel),roughnessMapUv:Ce&&T(A.roughnessMap.channel),anisotropyMapUv:dt&&T(A.anisotropyMap.channel),clearcoatMapUv:Qt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:At&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&T(A.sheenRoughnessMap.channel),specularMapUv:It&&T(A.specularMap.channel),specularColorMapUv:Lt&&T(A.specularColorMap.channel),specularIntensityMapUv:ge&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Pt&&T(A.thicknessMap.channel),alphaMapUv:Bt&&T(A.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(me||Ht),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ft.attributes.uv&&($t||Bt),fog:!!ht,useFog:A.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Et,skinning:tt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:$t&&A.map.isVideoTexture===!0&&Ue.getTransfer(A.map.colorSpace)===ke,decodeVideoTextureEmissive:we&&A.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(A.emissiveMap.colorSpace)===ke,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ci,flipSided:A.side===Xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ct&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&A.extensions.multiDraw===!0||Nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function v(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)w.push(H),w.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(O(w,A),U(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function O(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function U(A,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function L(A){const w=b[A.type];let H;if(w){const Q=Gi[w];H=pM.clone(Q.uniforms)}else H=A.uniforms;return H}function P(A,w){let H=_.get(w);return H!==void 0?++H.usedTimes:(H=new SA(r,w,A,c),g.push(H),_.set(w,H)),H}function I(A){if(--A.usedTimes===0){const w=g.indexOf(A);g[w]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function z(A){m.remove(A)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:L,acquireProgram:P,releaseProgram:I,releaseShaderCache:z,programs:g,dispose:j}}function AA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function RA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function rv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ov(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,S,b,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function d(_,x,S,b,T,M){const v=h(_,x,S,b,T,M);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,x,S,b,T,M){const v=h(_,x,S,b,T,M);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||RA),s.length>1&&s.sort(x||rv),l.length>1&&l.sort(x||rv)}function g(){for(let _=t,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function CA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new ov,r.set(s,[h])):l>=c.length?(h=new ov,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function wA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new Re};break;case"SpotLight":i={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=i,i}}}function DA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let UA=0;function LA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function NA(r){const t=new wA,i=DA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new k);const l=new k,c=new Je,h=new Je;function d(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let S=0,b=0,T=0,M=0,v=0,O=0,U=0,L=0,P=0,I=0,z=0;p.sort(LA);for(let A=0,w=p.length;A<w;A++){const H=p[A],Q=H.color,tt=H.intensity,ht=H.distance;let ft=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Gr?ft=H.shadow.map.texture:ft=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=Q.r*tt,_+=Q.g*tt,x+=Q.b*tt;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],tt);z++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,ot=i.get(H);ot.shadowIntensity=V.intensity,ot.shadowBias=V.bias,ot.shadowNormalBias=V.normalBias,ot.shadowRadius=V.radius,ot.shadowMapSize=V.mapSize,s.directionalShadow[S]=ot,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=H.shadow.matrix,O++}s.directional[S]=F,S++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(Q).multiplyScalar(tt),F.distance=ht,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[T]=F;const V=H.shadow;if(H.map&&(s.spotLightMap[P]=H.map,P++,V.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[T]=V.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=V.intensity,ot.shadowBias=V.bias,ot.shadowNormalBias=V.normalBias,ot.shadowRadius=V.radius,ot.shadowMapSize=V.mapSize,s.spotShadow[T]=ot,s.spotShadowMap[T]=ft,L++}T++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(Q).multiplyScalar(tt),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=F,M++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const V=H.shadow,ot=i.get(H);ot.shadowIntensity=V.intensity,ot.shadowBias=V.bias,ot.shadowNormalBias=V.normalBias,ot.shadowRadius=V.radius,ot.shadowMapSize=V.mapSize,ot.shadowCameraNear=V.camera.near,ot.shadowCameraFar=V.camera.far,s.pointShadow[b]=ot,s.pointShadowMap[b]=ft,s.pointShadowMatrix[b]=H.shadow.matrix,U++}s.point[b]=F,b++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(tt),F.groundColor.copy(H.groundColor).multiplyScalar(tt),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const j=s.hash;(j.directionalLength!==S||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==v||j.numDirectionalShadows!==O||j.numPointShadows!==U||j.numSpotShadows!==L||j.numSpotMaps!==P||j.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+P-I,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,j.directionalLength=S,j.pointLength=b,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=v,j.numDirectionalShadows=O,j.numPointShadows=U,j.numSpotShadows=L,j.numSpotMaps=P,j.numLightProbes=z,s.version=UA++)}function m(p,g){let _=0,x=0,S=0,b=0,T=0;const M=g.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const U=p[v];if(U.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),_++}else if(U.isSpotLight){const L=s.spot[S];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const L=s.point[x];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const L=s.hemi[T];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function lv(r){const t=new NA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function OA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new lv(r),t.set(l,[d])):c>=h.length?(d=new lv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FA=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],IA=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],cv=new Je,Zo=new k,Jh=new k;function BA(r,t,i){let s=new lp;const l=new Zt,c=new Zt,h=new sn,d=new WM,m=new qM,p={},g=i.maxTextureSize,_={[ya]:Xn,[Xn]:ya,[ci]:ci},x=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:PA,fragmentShader:zA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new Nn;b.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new In(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let v=this.type;this.render=function(I,z,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===mS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=qc);const A=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(va),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const tt=v!==this.type;tt&&z.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(ft=>ft.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,ft=I.length;ht<ft;ht++){const F=I[ht],V=F.shadow;if(V===void 0){oe("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const ot=V.getFrameExtents();if(l.multiply(ot),c.copy(V.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ot.x),l.x=c.x*ot.x,V.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ot.y),l.y=c.y*ot.y,V.mapSize.y=c.y)),V.map===null||tt===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ko){if(F.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Wi(l.x,l.y,{format:Gr,type:Sa,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new al(l.x,l.y,Vi),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Ma,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ln,V.map.depthTexture.magFilter=Ln}else{F.isPointLight?(V.map=new Fv(l.x),V.map.depthTexture=new CM(l.x,qi)):(V.map=new Wi(l.x,l.y),V.map.depthTexture=new al(l.x,l.y,qi)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Ma;const it=r.state.buffers.depth.getReversed();this.type===qc?(V.map.depthTexture.compareFunction=it?rp:sp,V.map.depthTexture.minFilter=Bn,V.map.depthTexture.magFilter=Bn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ln,V.map.depthTexture.magFilter=Ln)}V.camera.updateProjectionMatrix()}const St=V.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<St;it++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,it),r.clear();else{it===0&&(r.setRenderTarget(V.map),r.clear());const D=V.getViewport(it);h.set(c.x*D.x,c.y*D.y,c.x*D.z,c.y*D.w),Q.viewport(h)}if(F.isPointLight){const D=V.camera,q=V.matrix,at=F.distance||D.far;at!==D.far&&(D.far=at,D.updateProjectionMatrix()),Zo.setFromMatrixPosition(F.matrixWorld),D.position.copy(Zo),Jh.copy(D.position),Jh.add(FA[it]),D.up.copy(IA[it]),D.lookAt(Jh),D.updateMatrixWorld(),q.makeTranslation(-Zo.x,-Zo.y,-Zo.z),cv.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V._frustum.setFromProjectionMatrix(cv,D.coordinateSystem,D.reversedDepth)}else V.updateMatrices(F);s=V.getFrustum(),L(z,j,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Ko&&O(V,j),V.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,w,H)};function O(I,z){const j=t.update(T);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wi(l.x,l.y,{format:Gr,type:Sa})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(z,null,j,x,T,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(z,null,j,S,T,null)}function U(I,z,j,A){let w=null;const H=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)w=H;else if(w=j.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=w.uuid,tt=z.uuid;let ht=p[Q];ht===void 0&&(ht={},p[Q]=ht);let ft=ht[tt];ft===void 0&&(ft=w.clone(),ht[tt]=ft,z.addEventListener("dispose",P)),w=ft}if(w.visible=z.visible,w.wireframe=z.wireframe,A===Ko?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=r.properties.get(w);Q.light=j}return w}function L(I,z,j,A,w){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Ko)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const tt=t.update(I),ht=I.material;if(Array.isArray(ht)){const ft=tt.groups;for(let F=0,V=ft.length;F<V;F++){const ot=ft[F],St=ht[ot.materialIndex];if(St&&St.visible){const it=U(I,St,A,w);I.onBeforeShadow(r,I,z,j,tt,it,ot),r.renderBufferDirect(j,null,tt,it,I,ot),I.onAfterShadow(r,I,z,j,tt,it,ot)}}}else if(ht.visible){const ft=U(I,ht,A,w);I.onBeforeShadow(r,I,z,j,tt,ft,null),r.renderBufferDirect(j,null,tt,ft,I,null),I.onAfterShadow(r,I,z,j,tt,ft,null)}}const Q=I.children;for(let tt=0,ht=Q.length;tt<ht;tt++)L(Q[tt],z,j,A,w)}function P(I){I.target.removeEventListener("dispose",P);for(const j in p){const A=p[j],w=I.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const HA={[id]:ad,[sd]:ld,[rd]:cd,[Br]:od,[ad]:id,[ld]:sd,[cd]:rd,[od]:Br};function GA(r,t){function i(){let W=!1;const Pt=new sn;let Rt=null;const Bt=new sn(0,0,0,0);return{setMask:function(Mt){Rt!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),Rt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,xt,Ct,le,Be){Be===!0&&(Mt*=le,xt*=le,Ct*=le),Pt.set(Mt,xt,Ct,le),Bt.equals(Pt)===!1&&(r.clearColor(Mt,xt,Ct,le),Bt.copy(Pt))},reset:function(){W=!1,Rt=null,Bt.set(-1,0,0,0)}}}function s(){let W=!1,Pt=!1,Rt=null,Bt=null,Mt=null;return{setReversed:function(xt){if(Pt!==xt){const Ct=t.get("EXT_clip_control");xt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;const le=Mt;Mt=null,this.setClear(le)}},getReversed:function(){return Pt},setTest:function(xt){xt?lt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(xt){Rt!==xt&&!W&&(r.depthMask(xt),Rt=xt)},setFunc:function(xt){if(Pt&&(xt=HA[xt]),Bt!==xt){switch(xt){case id:r.depthFunc(r.NEVER);break;case ad:r.depthFunc(r.ALWAYS);break;case sd:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case rd:r.depthFunc(r.EQUAL);break;case od:r.depthFunc(r.GEQUAL);break;case ld:r.depthFunc(r.GREATER);break;case cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Mt!==xt&&(Pt&&(xt=1-xt),r.clearDepth(xt),Mt=xt)},reset:function(){W=!1,Rt=null,Bt=null,Mt=null,Pt=!1}}}function l(){let W=!1,Pt=null,Rt=null,Bt=null,Mt=null,xt=null,Ct=null,le=null,Be=null;return{setTest:function(De){W||(De?lt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(De){Pt!==De&&!W&&(r.stencilMask(De),Pt=De)},setFunc:function(De,On,bi){(Rt!==De||Bt!==On||Mt!==bi)&&(r.stencilFunc(De,On,bi),Rt=De,Bt=On,Mt=bi)},setOp:function(De,On,bi){(xt!==De||Ct!==On||le!==bi)&&(r.stencilOp(De,On,bi),xt=De,Ct=On,le=bi)},setLocked:function(De){W=De},setClear:function(De){Be!==De&&(r.clearStencil(De),Be=De)},reset:function(){W=!1,Pt=null,Rt=null,Bt=null,Mt=null,xt=null,Ct=null,le=null,Be=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],b=null,T=!1,M=null,v=null,O=null,U=null,L=null,P=null,I=null,z=new Re(0,0,0),j=0,A=!1,w=null,H=null,Q=null,tt=null,ht=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ot)[1]),F=V>=1):ot.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),F=V>=2);let St=null,it={};const D=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),at=new sn().fromArray(D),_t=new sn().fromArray(q);function Tt(W,Pt,Rt,Bt){const Mt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(W,xt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<Rt;Ct++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Pt+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return xt}const Z={};Z[r.TEXTURE_2D]=Tt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(r.DEPTH_TEST),h.setFunc(Br),ne(!1),me(s_),lt(r.CULL_FACE),Kt(va);function lt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Et(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Dt(W,Pt){return _[W]!==Pt?(r.bindFramebuffer(W,Pt),_[W]=Pt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Nt(W,Pt){let Rt=S,Bt=!1;if(W){Rt=x.get(Pt),Rt===void 0&&(Rt=[],x.set(Pt,Rt));const Mt=W.textures;if(Rt.length!==Mt.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Ct=Mt.length;xt<Ct;xt++)Rt[xt]=r.COLOR_ATTACHMENT0+xt;Rt.length=Mt.length,Bt=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Rt)}function $t(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const ue={[Ds]:r.FUNC_ADD,[_S]:r.FUNC_SUBTRACT,[vS]:r.FUNC_REVERSE_SUBTRACT};ue[xS]=r.MIN,ue[yS]=r.MAX;const se={[SS]:r.ZERO,[MS]:r.ONE,[ES]:r.SRC_COLOR,[ed]:r.SRC_ALPHA,[wS]:r.SRC_ALPHA_SATURATE,[RS]:r.DST_COLOR,[TS]:r.DST_ALPHA,[bS]:r.ONE_MINUS_SRC_COLOR,[nd]:r.ONE_MINUS_SRC_ALPHA,[CS]:r.ONE_MINUS_DST_COLOR,[AS]:r.ONE_MINUS_DST_ALPHA,[DS]:r.CONSTANT_COLOR,[US]:r.ONE_MINUS_CONSTANT_COLOR,[LS]:r.CONSTANT_ALPHA,[NS]:r.ONE_MINUS_CONSTANT_ALPHA};function Kt(W,Pt,Rt,Bt,Mt,xt,Ct,le,Be,De){if(W===va){T===!0&&(Et(r.BLEND),T=!1);return}if(T===!1&&(lt(r.BLEND),T=!0),W!==gS){if(W!==M||De!==A){if((v!==Ds||L!==Ds)&&(r.blendEquation(r.FUNC_ADD),v=Ds,L=Ds),De)switch(W){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r_:r.blendFunc(r.ONE,r.ONE);break;case o_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case l_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Oe("WebGLState: Invalid blending: ",W);break}else switch(W){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case o_:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",W);break}O=null,U=null,P=null,I=null,z.set(0,0,0),j=0,M=W,A=De}return}Mt=Mt||Pt,xt=xt||Rt,Ct=Ct||Bt,(Pt!==v||Mt!==L)&&(r.blendEquationSeparate(ue[Pt],ue[Mt]),v=Pt,L=Mt),(Rt!==O||Bt!==U||xt!==P||Ct!==I)&&(r.blendFuncSeparate(se[Rt],se[Bt],se[xt],se[Ct]),O=Rt,U=Bt,P=xt,I=Ct),(le.equals(z)===!1||Be!==j)&&(r.blendColor(le.r,le.g,le.b,Be),z.copy(le),j=Be),M=W,A=!1}function Se(W,Pt){W.side===ci?Et(r.CULL_FACE):lt(r.CULL_FACE);let Rt=W.side===Xn;Pt&&(Rt=!Rt),ne(Rt),W.blending===Ps&&W.transparent===!1?Kt(va):Kt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),we(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function me(W){W!==dS?(lt(r.CULL_FACE),W!==H&&(W===s_?r.cullFace(r.BACK):W===pS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),H=W}function G(W){W!==Q&&(F&&r.lineWidth(W),Q=W)}function we(W,Pt,Rt){W?(lt(r.POLYGON_OFFSET_FILL),(tt!==Pt||ht!==Rt)&&(r.polygonOffset(Pt,Rt),tt=Pt,ht=Rt)):Et(r.POLYGON_OFFSET_FILL)}function de(W){W?lt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function Ce(W){W===void 0&&(W=r.TEXTURE0+ft-1),St!==W&&(r.activeTexture(W),St=W)}function Ht(W,Pt,Rt){Rt===void 0&&(St===null?Rt=r.TEXTURE0+ft-1:Rt=St);let Bt=it[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},it[Rt]=Bt),(Bt.type!==W||Bt.texture!==Pt)&&(St!==Rt&&(r.activeTexture(Rt),St=Rt),r.bindTexture(W,Pt||Z[W]),Bt.type=W,Bt.texture=Pt)}function N(){const W=it[St];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){Oe("WebGLState:",W)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(W){Oe("WebGLState:",W)}}function mt(){try{r.texSubImage2D(...arguments)}catch(W){Oe("WebGLState:",W)}}function yt(){try{r.texSubImage3D(...arguments)}catch(W){Oe("WebGLState:",W)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Oe("WebGLState:",W)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Oe("WebGLState:",W)}}function Ut(){try{r.texStorage2D(...arguments)}catch(W){Oe("WebGLState:",W)}}function Wt(){try{r.texStorage3D(...arguments)}catch(W){Oe("WebGLState:",W)}}function re(){try{r.texImage2D(...arguments)}catch(W){Oe("WebGLState:",W)}}function bt(){try{r.texImage3D(...arguments)}catch(W){Oe("WebGLState:",W)}}function At(W){at.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),at.copy(W))}function Gt(W){_t.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),_t.copy(W))}function It(W,Pt){let Rt=p.get(Pt);Rt===void 0&&(Rt=new WeakMap,p.set(Pt,Rt));let Bt=Rt.get(W);Bt===void 0&&(Bt=r.getUniformBlockIndex(Pt,W.name),Rt.set(W,Bt))}function Lt(W,Pt){const Bt=p.get(Pt).get(W);m.get(Pt)!==Bt&&(r.uniformBlockBinding(Pt,Bt,W.__bindingPointIndex),m.set(Pt,Bt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,it={},_={},x=new WeakMap,S=[],b=null,T=!1,M=null,v=null,O=null,U=null,L=null,P=null,I=null,z=new Re(0,0,0),j=0,A=!1,w=null,H=null,Q=null,tt=null,ht=null,at.set(0,0,r.canvas.width,r.canvas.height),_t.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:lt,disable:Et,bindFramebuffer:Dt,drawBuffers:Nt,useProgram:$t,setBlending:Kt,setMaterial:Se,setFlipSided:ne,setCullFace:me,setLineWidth:G,setPolygonOffset:we,setScissorTest:de,activeTexture:Ce,bindTexture:Ht,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:re,texImage3D:bt,updateUBOMapping:It,uniformBlockBinding:Lt,texStorage2D:Ut,texStorage3D:Wt,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Qt,scissor:At,viewport:Gt,reset:ge}}function VA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Zt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return S?new OffscreenCanvas(N,E):nl("canvas")}function T(N,E,Y){let mt=1;const yt=Ht(N);if((yt.width>Y||yt.height>Y)&&(mt=Y/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(mt*yt.width),Qt=Math.floor(mt*yt.height);_===void 0&&(_=b(dt,Qt));const Ut=E?b(dt,Qt):_;return Ut.width=dt,Ut.height=Qt,Ut.getContext("2d").drawImage(N,0,0,dt,Qt),oe("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+Qt+")."),Ut}else return"data"in N&&oe("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function M(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,E,Y,mt,yt=!1){if(N!==null){if(r[N]!==void 0)return r[N];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let dt=E;if(E===r.RED&&(Y===r.FLOAT&&(dt=r.R32F),Y===r.HALF_FLOAT&&(dt=r.R16F),Y===r.UNSIGNED_BYTE&&(dt=r.R8)),E===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(dt=r.R8UI),Y===r.UNSIGNED_SHORT&&(dt=r.R16UI),Y===r.UNSIGNED_INT&&(dt=r.R32UI),Y===r.BYTE&&(dt=r.R8I),Y===r.SHORT&&(dt=r.R16I),Y===r.INT&&(dt=r.R32I)),E===r.RG&&(Y===r.FLOAT&&(dt=r.RG32F),Y===r.HALF_FLOAT&&(dt=r.RG16F),Y===r.UNSIGNED_BYTE&&(dt=r.RG8)),E===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(dt=r.RG8UI),Y===r.UNSIGNED_SHORT&&(dt=r.RG16UI),Y===r.UNSIGNED_INT&&(dt=r.RG32UI),Y===r.BYTE&&(dt=r.RG8I),Y===r.SHORT&&(dt=r.RG16I),Y===r.INT&&(dt=r.RG32I)),E===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),Y===r.UNSIGNED_INT&&(dt=r.RGB32UI),Y===r.BYTE&&(dt=r.RGB8I),Y===r.SHORT&&(dt=r.RGB16I),Y===r.INT&&(dt=r.RGB32I)),E===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),Y===r.UNSIGNED_INT&&(dt=r.RGBA32UI),Y===r.BYTE&&(dt=r.RGBA8I),Y===r.SHORT&&(dt=r.RGBA16I),Y===r.INT&&(dt=r.RGBA32I)),E===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),E===r.RGBA){const Qt=yt?$c:Ue.getTransfer(mt);Y===r.FLOAT&&(dt=r.RGBA32F),Y===r.HALF_FLOAT&&(dt=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(dt=Qt===ke?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function L(N,E){let Y;return N?E===null||E===qi||E===el?Y=r.DEPTH24_STENCIL8:E===Vi?Y=r.DEPTH32F_STENCIL8:E===tl&&(Y=r.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===el?Y=r.DEPTH_COMPONENT24:E===Vi?Y=r.DEPTH_COMPONENT32F:E===tl&&(Y=r.DEPTH_COMPONENT16),Y}function P(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),j(E),E.isVideoTexture&&g.delete(E)}function z(N){const E=N.target;E.removeEventListener("dispose",z),w(E)}function j(N){const E=s.get(N);if(E.__webglInit===void 0)return;const Y=N.source,mt=x.get(Y);if(mt){const yt=mt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&A(N),Object.keys(mt).length===0&&x.delete(Y)}s.remove(N)}function A(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const Y=N.source,mt=x.get(Y);delete mt[E.__cacheKey],h.memory.textures--}function w(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let yt=0;yt<E.__webglFramebuffer[mt].length;yt++)r.deleteFramebuffer(E.__webglFramebuffer[mt][yt]);else r.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)r.deleteFramebuffer(E.__webglFramebuffer[mt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=N.textures;for(let mt=0,yt=Y.length;mt<yt;mt++){const dt=s.get(Y[mt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(Y[mt])}s.remove(N)}let H=0;function Q(){H=0}function tt(){const N=H;return N>=l.maxTextures&&oe("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function ht(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ft(N,E){const Y=s.get(N);if(N.isVideoTexture&&de(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const mt=N.image;if(mt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,N,E);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function F(N,E){const Y=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Z(Y,N,E);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function V(N,E){const Y=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Z(Y,N,E);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function ot(N,E){const Y=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){lt(Y,N,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const St={[hd]:r.REPEAT,[_a]:r.CLAMP_TO_EDGE,[dd]:r.MIRRORED_REPEAT},it={[Ln]:r.NEAREST,[zS]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[Ns]:r.LINEAR_MIPMAP_LINEAR},D={[HS]:r.NEVER,[WS]:r.ALWAYS,[GS]:r.LESS,[sp]:r.LEQUAL,[VS]:r.EQUAL,[rp]:r.GEQUAL,[kS]:r.GREATER,[XS]:r.NOTEQUAL};function q(N,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===_h||E.magFilter===yc||E.magFilter===Ns||E.minFilter===Bn||E.minFilter===_h||E.minFilter===yc||E.minFilter===Ns)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,St[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,St[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,St[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,it[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,it[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==yc&&E.minFilter!==Ns||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function at(N,E){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const mt=E.source;let yt=x.get(mt);yt===void 0&&(yt={},x.set(mt,yt));const dt=ht(E);if(dt!==N.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),yt[dt].usedTimes++;const Qt=yt[N.__cacheKey];Qt!==void 0&&(yt[N.__cacheKey].usedTimes--,Qt.usedTimes===0&&A(E)),N.__cacheKey=dt,N.__webglTexture=yt[dt].texture}return Y}function _t(N,E,Y){return Math.floor(Math.floor(N/Y)/E)}function Tt(N,E,Y,mt){const dt=N.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Y,mt,E.data);else{dt.sort((bt,At)=>bt.start-At.start);let Qt=0;for(let bt=1;bt<dt.length;bt++){const At=dt[Qt],Gt=dt[bt],It=At.start+At.count,Lt=_t(Gt.start,E.width,4),ge=_t(At.start,E.width,4);Gt.start<=It+1&&Lt===ge&&_t(Gt.start+Gt.count-1,E.width,4)===Lt?At.count=Math.max(At.count,Gt.start+Gt.count-At.start):(++Qt,dt[Qt]=Gt)}dt.length=Qt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let bt=0,At=dt.length;bt<At;bt++){const Gt=dt[bt],It=Math.floor(Gt.start/4),Lt=Math.ceil(Gt.count/4),ge=It%E.width,W=Math.floor(It/E.width),Pt=Lt,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ge,W,Pt,Rt,Y,mt,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,re)}}function Z(N,E,Y){let mt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=r.TEXTURE_3D);const yt=at(N,E),dt=E.source;i.bindTexture(mt,N.__webglTexture,r.TEXTURE0+Y);const Qt=s.get(dt);if(dt.version!==Qt.__version||yt===!0){i.activeTexture(r.TEXTURE0+Y);const Ut=Ue.getPrimaries(Ue.workingColorSpace),Wt=E.colorSpace===as?null:Ue.getPrimaries(E.colorSpace),re=E.colorSpace===as||Ut===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let bt=T(E.image,!1,l.maxTextureSize);bt=Ce(E,bt);const At=c.convert(E.format,E.colorSpace),Gt=c.convert(E.type);let It=U(E.internalFormat,At,Gt,E.colorSpace,E.isVideoTexture);q(mt,E);let Lt;const ge=E.mipmaps,W=E.isVideoTexture!==!0,Pt=Qt.__version===void 0||yt===!0,Rt=dt.dataReady,Bt=P(E,bt);if(E.isDepthTexture)It=L(E.format===Os,E.type),Pt&&(W?i.texStorage2D(r.TEXTURE_2D,1,It,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,It,bt.width,bt.height,0,At,Gt,null));else if(E.isDataTexture)if(ge.length>0){W&&Pt&&i.texStorage2D(r.TEXTURE_2D,Bt,It,ge[0].width,ge[0].height);for(let Mt=0,xt=ge.length;Mt<xt;Mt++)Lt=ge[Mt],W?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,At,Gt,Lt.data):i.texImage2D(r.TEXTURE_2D,Mt,It,Lt.width,Lt.height,0,At,Gt,Lt.data);E.generateMipmaps=!1}else W?(Pt&&i.texStorage2D(r.TEXTURE_2D,Bt,It,bt.width,bt.height),Rt&&Tt(E,bt,At,Gt)):i.texImage2D(r.TEXTURE_2D,0,It,bt.width,bt.height,0,At,Gt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,It,ge[0].width,ge[0].height,bt.depth);for(let Mt=0,xt=ge.length;Mt<xt;Mt++)if(Lt=ge[Mt],E.format!==Oi)if(At!==null)if(W){if(Rt)if(E.layerUpdates.size>0){const Ct=H_(Lt.width,Lt.height,E.format,E.type);for(const le of E.layerUpdates){const Be=Lt.data.subarray(le*Ct/Lt.data.BYTES_PER_ELEMENT,(le+1)*Ct/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,le,Lt.width,Lt.height,1,At,Be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,bt.depth,At,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,It,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,bt.depth,At,Gt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,It,Lt.width,Lt.height,bt.depth,0,At,Gt,Lt.data)}else{W&&Pt&&i.texStorage2D(r.TEXTURE_2D,Bt,It,ge[0].width,ge[0].height);for(let Mt=0,xt=ge.length;Mt<xt;Mt++)Lt=ge[Mt],E.format!==Oi?At!==null?W?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,At,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,It,Lt.width,Lt.height,0,Lt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,At,Gt,Lt.data):i.texImage2D(r.TEXTURE_2D,Mt,It,Lt.width,Lt.height,0,At,Gt,Lt.data)}else if(E.isDataArrayTexture)if(W){if(Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,It,bt.width,bt.height,bt.depth),Rt)if(E.layerUpdates.size>0){const Mt=H_(bt.width,bt.height,E.format,E.type);for(const xt of E.layerUpdates){const Ct=bt.data.subarray(xt*Mt/bt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,At,Gt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,At,Gt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,bt.width,bt.height,bt.depth,0,At,Gt,bt.data);else if(E.isData3DTexture)W?(Pt&&i.texStorage3D(r.TEXTURE_3D,Bt,It,bt.width,bt.height,bt.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,At,Gt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,It,bt.width,bt.height,bt.depth,0,At,Gt,bt.data);else if(E.isFramebufferTexture){if(Pt)if(W)i.texStorage2D(r.TEXTURE_2D,Bt,It,bt.width,bt.height);else{let Mt=bt.width,xt=bt.height;for(let Ct=0;Ct<Bt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,It,Mt,xt,0,At,Gt,null),Mt>>=1,xt>>=1}}else if(ge.length>0){if(W&&Pt){const Mt=Ht(ge[0]);i.texStorage2D(r.TEXTURE_2D,Bt,It,Mt.width,Mt.height)}for(let Mt=0,xt=ge.length;Mt<xt;Mt++)Lt=ge[Mt],W?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,At,Gt,Lt):i.texImage2D(r.TEXTURE_2D,Mt,It,At,Gt,Lt);E.generateMipmaps=!1}else if(W){if(Pt){const Mt=Ht(bt);i.texStorage2D(r.TEXTURE_2D,Bt,It,Mt.width,Mt.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Gt,bt)}else i.texImage2D(r.TEXTURE_2D,0,It,At,Gt,bt);M(E)&&v(mt),Qt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function lt(N,E,Y){if(E.image.length!==6)return;const mt=at(N,E),yt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Y);const dt=s.get(yt);if(yt.version!==dt.__version||mt===!0){i.activeTexture(r.TEXTURE0+Y);const Qt=Ue.getPrimaries(Ue.workingColorSpace),Ut=E.colorSpace===as?null:Ue.getPrimaries(E.colorSpace),Wt=E.colorSpace===as||Qt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const re=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,At=[];for(let xt=0;xt<6;xt++)!re&&!bt?At[xt]=T(E.image[xt],!0,l.maxCubemapSize):At[xt]=bt?E.image[xt].image:E.image[xt],At[xt]=Ce(E,At[xt]);const Gt=At[0],It=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),ge=U(E.internalFormat,It,Lt,E.colorSpace),W=E.isVideoTexture!==!0,Pt=dt.__version===void 0||mt===!0,Rt=yt.dataReady;let Bt=P(E,Gt);q(r.TEXTURE_CUBE_MAP,E);let Mt;if(re){W&&Pt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ge,Gt.width,Gt.height);for(let xt=0;xt<6;xt++){Mt=At[xt].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){const le=Mt[Ct];E.format!==Oi?It!==null?W?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,le.width,le.height,It,le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,ge,le.width,le.height,0,le.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,le.width,le.height,It,Lt,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,ge,le.width,le.height,0,It,Lt,le.data)}}}else{if(Mt=E.mipmaps,W&&Pt){Mt.length>0&&Bt++;const xt=Ht(At[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ge,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,At[xt].width,At[xt].height,It,Lt,At[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,At[xt].width,At[xt].height,0,It,Lt,At[xt].data);for(let Ct=0;Ct<Mt.length;Ct++){const Be=Mt[Ct].image[xt].image;W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Be.width,Be.height,It,Lt,Be.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,ge,Be.width,Be.height,0,It,Lt,Be.data)}}else{W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,It,Lt,At[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,It,Lt,At[xt]);for(let Ct=0;Ct<Mt.length;Ct++){const le=Mt[Ct];W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,It,Lt,le.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,ge,It,Lt,le.image[xt])}}}M(E)&&v(r.TEXTURE_CUBE_MAP),dt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Et(N,E,Y,mt,yt,dt){const Qt=c.convert(Y.format,Y.colorSpace),Ut=c.convert(Y.type),Wt=U(Y.internalFormat,Qt,Ut,Y.colorSpace),re=s.get(E),bt=s.get(Y);if(bt.__renderTarget=E,!re.__hasExternalTextures){const At=Math.max(1,E.width>>dt),Gt=Math.max(1,E.height>>dt);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,dt,Wt,At,Gt,E.depth,0,Qt,Ut,null):i.texImage2D(yt,dt,Wt,At,Gt,0,Qt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),we(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,yt,bt.__webglTexture,0,G(E)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,yt,bt.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(N,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const mt=E.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,dt=L(E.stencilBuffer,yt),Qt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;we(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),dt,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,N)}else{const mt=E.textures;for(let yt=0;yt<mt.length;yt++){const dt=mt[yt],Qt=c.convert(dt.format,dt.colorSpace),Ut=c.convert(dt.type),Wt=U(dt.internalFormat,Qt,Ut,dt.colorSpace);we(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),Wt,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),Wt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(N,E,Y){const mt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),q(r.TEXTURE_CUBE_MAP,E.depthTexture);const re=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let At;E.depthTexture.format===Ma?At=r.DEPTH_COMPONENT24:E.depthTexture.format===Os&&(At=r.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,At,E.width,E.height,0,re,bt,null)}}else ft(E.depthTexture,0);const dt=yt.__webglTexture,Qt=G(E),Ut=mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,Wt=E.depthTexture.format===Os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)we(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Ut,dt,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Ut,dt,0);else if(E.depthTexture.format===Os)we(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Ut,dt,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Ut,dt,0);else throw new Error("Unknown depthTexture format")}function $t(N){const E=s.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=mt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let mt=0;mt<6;mt++)Nt(E.__webglFramebuffer[mt],N,mt);else{const mt=N.texture.mipmaps;mt&&mt.length>0?Nt(E.__webglFramebuffer[0],N,0):Nt(E.__webglFramebuffer,N,0)}else if(Y){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=r.createRenderbuffer(),Dt(E.__webglDepthbuffer[mt],N,!1);else{const yt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,dt)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Dt(E.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(N,E,Y){const mt=s.get(N);E!==void 0&&Et(mt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&$t(N)}function se(N){const E=N.texture,Y=s.get(N),mt=s.get(E);N.addEventListener("dispose",z);const yt=N.textures,dt=N.isWebGLCubeRenderTarget===!0,Qt=yt.length>1;if(Qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=E.version,h.memory.textures++),dt){Y.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ut]=[];for(let Wt=0;Wt<E.mipmaps.length;Wt++)Y.__webglFramebuffer[Ut][Wt]=r.createFramebuffer()}else Y.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)Y.__webglFramebuffer[Ut]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let Ut=0,Wt=yt.length;Ut<Wt;Ut++){const re=s.get(yt[Ut]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&we(N)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ut=0;Ut<yt.length;Ut++){const Wt=yt[Ut];Y.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut]);const re=c.convert(Wt.format,Wt.colorSpace),bt=c.convert(Wt.type),At=U(Wt.internalFormat,re,bt,Wt.colorSpace,N.isXRRenderTarget===!0),Gt=G(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,At,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(Y.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),q(r.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Et(Y.__webglFramebuffer[Ut][Wt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Wt);else Et(Y.__webglFramebuffer[Ut],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(E)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Ut=0,Wt=yt.length;Ut<Wt;Ut++){const re=yt[Ut],bt=s.get(re);let At=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,bt.__webglTexture),q(At,re),Et(Y.__webglFramebuffer,N,re,r.COLOR_ATTACHMENT0+Ut,At,0),M(re)&&v(At)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),q(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Et(Y.__webglFramebuffer[Wt],N,E,r.COLOR_ATTACHMENT0,Ut,Wt);else Et(Y.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Ut,0);M(E)&&v(Ut),i.unbindTexture()}N.depthBuffer&&$t(N)}function Kt(N){const E=N.textures;for(let Y=0,mt=E.length;Y<mt;Y++){const yt=E[Y];if(M(yt)){const dt=O(N),Qt=s.get(yt).__webglTexture;i.bindTexture(dt,Qt),v(dt),i.unbindTexture()}}}const Se=[],ne=[];function me(N){if(N.samples>0){if(we(N)===!1){const E=N.textures,Y=N.width,mt=N.height;let yt=r.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(N),Ut=E.length>1;if(Ut)for(let re=0;re<E.length;re++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let re=0;re<E.length;re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[re]);const bt=s.get(E[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,Y,mt,0,0,Y,mt,yt,r.NEAREST),m===!0&&(Se.length=0,ne.length=0,Se.push(r.COLOR_ATTACHMENT0+re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Se.push(dt),ne.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let re=0;re<E.length;re++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[re]);const bt=s.get(E[re]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function G(N){return Math.min(l.maxSamples,N.samples)}function we(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function de(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Ce(N,E){const Y=N.colorSpace,mt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Vr&&Y!==as&&(Ue.getTransfer(Y)===ke?(mt!==Oi||yt!==ui)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",Y)),E}function Ht(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=Q,this.setTexture2D=ft,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=ot,this.rebindTextures=ue,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function kA(r,t){function i(s,l=as){let c;const h=Ue.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===tp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ep)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ev)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===bv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Sv)return r.BYTE;if(s===Mv)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===$d)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Sa)return r.HALF_FLOAT;if(s===Tv)return r.ALPHA;if(s===Av)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===Rv)return r.RED;if(s===np)return r.RED_INTEGER;if(s===Gr)return r.RG;if(s===ip)return r.RG_INTEGER;if(s===ap)return r.RGBA_INTEGER;if(s===Yc||s===jc||s===Zc||s===Kc)if(h===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pd||s===md||s===gd||s===_d)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===pd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===vd||s===xd)return h===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===yd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Sd)return c.COMPRESSED_R11_EAC;if(s===Md)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ed)return c.COMPRESSED_RG11_EAC;if(s===bd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Fd||s===Id)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Td)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ad)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ud)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ld)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Od)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bd||s===Hd||s===Gd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Bd)return h===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vd||s===kd||s===Xd||s===Wd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const XA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Bv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new fi({vertexShader:XA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new Xr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends Is{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,S=null,b=null;const T=typeof XRWebGLBinding<"u",M=new qA,v={},O=i.getContextAttributes();let U=null,L=null;const P=[],I=[],z=new Zt;let j=null;const A=new Ei;A.viewport=new sn;const w=new Ei;w.viewport=new sn;const H=[A,w],Q=new eE;let tt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=P[Z];return lt===void 0&&(lt=new Bh,P[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=P[Z];return lt===void 0&&(lt=new Bh,P[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=P[Z];return lt===void 0&&(lt=new Bh,P[Z]=lt),lt.getHandSpace()};function ft(Z){const lt=I.indexOf(Z.inputSource);if(lt===-1)return;const Et=P[lt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,p||h),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",V);for(let Z=0;Z<P.length;Z++){const lt=I[Z];lt!==null&&(I[Z]=null,P[Z].disconnect(lt))}tt=null,ht=null,M.reset();for(const Z in v)delete v[Z];t.setRenderTarget(U),S=null,x=null,_=null,l=null,L=null,Tt.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",F),l.addEventListener("inputsourceschange",V),O.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Dt=null,Nt=null;O.depth&&(Nt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=O.stencil?Os:Ma,Dt=O.stencil?el:qi);const $t={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer($t),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),L=new Wi(x.textureWidth,x.textureHeight,{format:Oi,type:ui,depthTexture:new al(x.textureWidth,x.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Et={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Wi(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Tt.setContext(l),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(Z){for(let lt=0;lt<Z.removed.length;lt++){const Et=Z.removed[lt],Dt=I.indexOf(Et);Dt>=0&&(I[Dt]=null,P[Dt].disconnect(Et))}for(let lt=0;lt<Z.added.length;lt++){const Et=Z.added[lt];let Dt=I.indexOf(Et);if(Dt===-1){for(let $t=0;$t<P.length;$t++)if($t>=I.length){I.push(Et),Dt=$t;break}else if(I[$t]===null){I[$t]=Et,Dt=$t;break}if(Dt===-1)break}const Nt=P[Dt];Nt&&Nt.connect(Et)}}const ot=new k,St=new k;function it(Z,lt,Et){ot.setFromMatrixPosition(lt.matrixWorld),St.setFromMatrixPosition(Et.matrixWorld);const Dt=ot.distanceTo(St),Nt=lt.projectionMatrix.elements,$t=Et.projectionMatrix.elements,ue=Nt[14]/(Nt[10]-1),se=Nt[14]/(Nt[10]+1),Kt=(Nt[9]+1)/Nt[5],Se=(Nt[9]-1)/Nt[5],ne=(Nt[8]-1)/Nt[0],me=($t[8]+1)/$t[0],G=ue*ne,we=ue*me,de=Dt/(-ne+me),Ce=de*-ne;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ce),Z.translateZ(de),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ht=ue+de,N=se+de,E=G-Ce,Y=we+(Dt-Ce),mt=Kt*se/N*Ht,yt=Se*se/N*Ht;Z.projectionMatrix.makePerspective(E,Y,mt,yt,Ht,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function D(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let lt=Z.near,Et=Z.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),Q.near=w.near=A.near=lt,Q.far=w.far=A.far=Et,(tt!==Q.near||ht!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),tt=Q.near,ht=Q.far),Q.layers.mask=Z.layers.mask|6,A.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const Dt=Z.parent,Nt=Q.cameras;D(Q,Dt);for(let $t=0;$t<Nt.length;$t++)D(Nt[$t],Dt);Nt.length===2?it(Q,A,w):Q.projectionMatrix.copy(A.projectionMatrix),q(Z,Q,Dt)};function q(Z,lt,Et){Et===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(Z){m=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(Z){return v[Z]};let at=null;function _t(Z,lt){if(g=lt.getViewerPose(p||h),b=lt,g!==null){const Et=g.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let Dt=!1;Et.length!==Q.cameras.length&&(Q.cameras.length=0,Dt=!0);for(let se=0;se<Et.length;se++){const Kt=Et[se];let Se=null;if(S!==null)Se=S.getViewport(Kt);else{const me=_.getViewSubImage(x,Kt);Se=me.viewport,se===0&&(t.setRenderTargetTextures(L,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(L))}let ne=H[se];ne===void 0&&(ne=new Ei,ne.layers.enable(se),ne.viewport=new sn,H[se]=ne),ne.matrix.fromArray(Kt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Kt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Se.x,Se.y,Se.width,Se.height),se===0&&(Q.matrix.copy(ne.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Dt===!0&&Q.cameras.push(ne)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const se=_.getDepthInformation(Et[0]);se&&se.isValid&&se.texture&&M.init(se,l.renderState)}if(Nt&&Nt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let se=0;se<Et.length;se++){const Kt=Et[se].camera;if(Kt){let Se=v[Kt];Se||(Se=new Bv,v[Kt]=Se);const ne=_.getCameraImage(Kt);Se.sourceTexture=ne}}}}for(let Et=0;Et<P.length;Et++){const Dt=I[Et],Nt=P[Et];Dt!==null&&Nt!==void 0&&Nt.update(Dt,lt,p||h)}at&&at(Z,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),b=null}const Tt=new Xv;Tt.setAnimationLoop(_t),this.setAnimationLoop=function(Z){at=Z},this.dispose=function(){}}}const ws=new Ea,jA=new Je;function ZA(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Ov(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,U,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&S(M,v,L)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,O,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Xn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Xn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=t.get(v),U=O.envMap,L=O.envMapRotation;U&&(M.envMap.value=U,ws.copy(L),ws.x*=-1,ws.y*=-1,ws.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),M.envMapRotation.value.setFromMatrix4(jA.makeRotationFromEuler(ws)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,O,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=U*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const O=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function KA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const L=U.program;s.uniformBlockBinding(O,L)}function p(O,U){let L=l[O.id];L===void 0&&(b(O),L=g(O),l[O.id]=L,O.addEventListener("dispose",M));const P=U.program;s.updateUBOMapping(O,P);const I=t.render.frame;c[O.id]!==I&&(x(O),c[O.id]=I)}function g(O){const U=_();O.__bindingPointIndex=U;const L=r.createBuffer(),P=O.__size,I=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,P,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function _(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=l[O.id],L=O.uniforms,P=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,z=L.length;I<z;I++){const j=Array.isArray(L[I])?L[I]:[L[I]];for(let A=0,w=j.length;A<w;A++){const H=j[A];if(S(H,I,A,P)===!0){const Q=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let ft=0;ft<tt.length;ft++){const F=tt[ft],V=T(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,Q+ht,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ht),ht+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(O,U,L,P){const I=O.value,z=U+"_"+L;if(P[z]===void 0)return typeof I=="number"||typeof I=="boolean"?P[z]=I:P[z]=I.clone(),!0;{const j=P[z];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return P[z]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function b(O){const U=O.uniforms;let L=0;const P=16;for(let z=0,j=U.length;z<j;z++){const A=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,H=A.length;w<H;w++){const Q=A[w],tt=Array.isArray(Q.value)?Q.value:[Q.value];for(let ht=0,ft=tt.length;ht<ft;ht++){const F=tt[ht],V=T(F),ot=L%P,St=ot%V.boundary,it=ot+St;L+=St,it!==0&&P-it<V.storage&&(L+=P-it),Q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=V.storage}}}const I=L%P;return I>0&&(L+=P-I),O.__size=L,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const L=h.indexOf(U.__bindingPointIndex);h.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const QA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function JA(){return Hi===null&&(Hi=new yM(QA,16,16,Gr,Sa),Hi.name="DFG_LUT",Hi.minFilter=Bn,Hi.magFilter=Bn,Hi.wrapS=_a,Hi.wrapT=_a,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class $A{constructor(t={}){const{canvas:i=qS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:S=ui}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const T=S,M=new Set([ap,ip,np]),v=new Set([ui,qi,tl,el,tp,ep]),O=new Uint32Array(4),U=new Int32Array(4);let L=null,P=null;const I=[],z=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=$n;let H=0,Q=0,tt=null,ht=-1,ft=null;const F=new sn,V=new sn;let ot=null;const St=new Re(0);let it=0,D=i.width,q=i.height,at=1,_t=null,Tt=null;const Z=new sn(0,0,D,q),lt=new sn(0,0,D,q);let Et=!1;const Dt=new lp;let Nt=!1,$t=!1;const ue=new Je,se=new k,Kt=new sn,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function me(){return tt===null?at:1}let G=s;function we(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qd}`),i.addEventListener("webglcontextlost",le,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",De,!1),G===null){const K="webgl2";if(G=we(K,C),G===null)throw we(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Oe("WebGLRenderer: "+C.message),C}let de,Ce,Ht,N,E,Y,mt,yt,dt,Qt,Ut,Wt,re,bt,At,Gt,It,Lt,ge,W,Pt,Rt,Bt,Mt;function xt(){de=new J1(G),de.init(),Rt=new kA(G,de),Ce=new k1(G,de,t,Rt),Ht=new GA(G,de),Ce.reversedDepthBuffer&&x&&Ht.buffers.depth.setReversed(!0),N=new eT(G),E=new AA,Y=new VA(G,de,Ht,E,Ce,Rt,N),mt=new W1(A),yt=new Q1(A),dt=new sE(G),Bt=new G1(G,dt),Qt=new $1(G,dt,N,Bt),Ut=new iT(G,Qt,dt,N),ge=new nT(G,Ce,Y),Gt=new X1(E),Wt=new TA(A,mt,yt,de,Ce,Bt,Gt),re=new ZA(A,E),bt=new CA,At=new OA(de),Lt=new H1(A,mt,yt,Ht,Ut,b,m),It=new BA(A,Ut,Ce),Mt=new KA(G,N,Ce,Ht),W=new V1(G,de,N),Pt=new tT(G,de,N),N.programs=Wt.programs,A.capabilities=Ce,A.extensions=de,A.properties=E,A.renderLists=bt,A.shadowMap=It,A.state=Ht,A.info=N}xt(),T!==ui&&(j=new sT(T,i.width,i.height,l,c));const Ct=new YA(A,G);this.xr=Ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=de.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=de.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(C){C!==void 0&&(at=C,this.setSize(D,q,!1))},this.getSize=function(C){return C.set(D,q)},this.setSize=function(C,K,ct=!0){if(Ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,q=K,i.width=Math.floor(C*at),i.height=Math.floor(K*at),ct===!0&&(i.style.width=C+"px",i.style.height=K+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(D*at,q*at).floor()},this.setDrawingBufferSize=function(C,K,ct){D=C,q=K,at=ct,i.width=Math.floor(C*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(T===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,K,ct,st){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,K,ct,st),Ht.viewport(F.copy(Z).multiplyScalar(at).round())},this.getScissor=function(C){return C.copy(lt)},this.setScissor=function(C,K,ct,st){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,K,ct,st),Ht.scissor(V.copy(lt).multiplyScalar(at).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(C){Ht.setScissorTest(Et=C)},this.setOpaqueSort=function(C){_t=C},this.setTransparentSort=function(C){Tt=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ct=!0){let st=0;if(C){let $=!1;if(tt!==null){const Ot=tt.texture.format;$=M.has(Ot)}if($){const Ot=tt.texture.type,Vt=v.has(Ot),zt=Lt.getClearColor(),kt=Lt.getClearAlpha(),qt=zt.r,ee=zt.g,Yt=zt.b;Vt?(O[0]=qt,O[1]=ee,O[2]=Yt,O[3]=kt,G.clearBufferuiv(G.COLOR,0,O)):(U[0]=qt,U[1]=ee,U[2]=Yt,U[3]=kt,G.clearBufferiv(G.COLOR,0,U))}else st|=G.COLOR_BUFFER_BIT}K&&(st|=G.DEPTH_BUFFER_BIT),ct&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",le,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",De,!1),Lt.dispose(),bt.dispose(),At.dispose(),E.dispose(),mt.dispose(),yt.dispose(),Ut.dispose(),Bt.dispose(),Mt.dispose(),Wt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Hs),Ct.removeEventListener("sessionend",Zr),Pi.stop()};function le(C){C.preventDefault(),d_("WebGLRenderer: Context Lost."),w=!0}function Be(){d_("WebGLRenderer: Context Restored."),w=!1;const C=N.autoReset,K=It.enabled,ct=It.autoUpdate,st=It.needsUpdate,$=It.type;xt(),N.autoReset=C,It.enabled=K,It.autoUpdate=ct,It.needsUpdate=st,It.type=$}function De(C){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function On(C){const K=C.target;K.removeEventListener("dispose",On),bi(K)}function bi(C){cl(C),E.remove(C)}function cl(C){const K=E.get(C).programs;K!==void 0&&(K.forEach(function(ct){Wt.releaseProgram(ct)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ct,st,$,Ot){K===null&&(K=Se);const Vt=$.isMesh&&$.matrixWorld.determinant()<0,zt=rs(C,K,ct,st,$);Ht.setMaterial(st,Vt);let kt=ct.index,qt=1;if(st.wireframe===!0){if(kt=Qt.getWireframeAttribute(ct),kt===void 0)return;qt=2}const ee=ct.drawRange,Yt=ct.attributes.position;let ie=ee.start*qt,Pe=(ee.start+ee.count)*qt;Ot!==null&&(ie=Math.max(ie,Ot.start*qt),Pe=Math.min(Pe,(Ot.start+Ot.count)*qt)),kt!==null?(ie=Math.max(ie,0),Pe=Math.min(Pe,kt.count)):Yt!=null&&(ie=Math.max(ie,0),Pe=Math.min(Pe,Yt.count));const $e=Pe-ie;if($e<0||$e===1/0)return;Bt.setup($,st,zt,ct,kt);let Ze,Ie=W;if(kt!==null&&(Ze=dt.get(kt),Ie=Pt,Ie.setIndex(Ze)),$.isMesh)st.wireframe===!0?(Ht.setLineWidth(st.wireframeLinewidth*me()),Ie.setMode(G.LINES)):Ie.setMode(G.TRIANGLES);else if($.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),Ht.setLineWidth(Jt*me()),$.isLineSegments?Ie.setMode(G.LINES):$.isLineLoop?Ie.setMode(G.LINE_LOOP):Ie.setMode(G.LINE_STRIP)}else $.isPoints?Ie.setMode(G.POINTS):$.isSprite&&Ie.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Ie.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Jt=$._multiDrawStarts,ze=$._multiDrawCounts,ce=$._multiDrawCount,En=kt?dt.get(kt).bytesPerElement:1,Yi=E.get(st).currentProgram.getUniforms();for(let bn=0;bn<ce;bn++)Yi.setValue(G,"_gl_DrawID",bn),Ie.render(Jt[bn]/En,ze[bn])}else if($.isInstancedMesh)Ie.renderInstances(ie,$e,$.count);else if(ct.isInstancedBufferGeometry){const Jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,ze=Math.min(ct.instanceCount,Jt);Ie.renderInstances(ie,$e,ze)}else Ie.render(ie,$e)};function Yr(C,K,ct){C.transparent===!0&&C.side===ci&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Vs(C,K,ct),C.side=ya,C.needsUpdate=!0,Vs(C,K,ct),C.side=ci):Vs(C,K,ct)}this.compile=function(C,K,ct=null){ct===null&&(ct=C),P=At.get(ct),P.init(K),z.push(P),ct.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),C!==ct&&C.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const st=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ot=$.material;if(Ot)if(Array.isArray(Ot))for(let Vt=0;Vt<Ot.length;Vt++){const zt=Ot[Vt];Yr(zt,ct,$),st.add(zt)}else Yr(Ot,ct,$),st.add(Ot)}),P=z.pop(),st},this.compileAsync=function(C,K,ct=null){const st=this.compile(C,K,ct);return new Promise($=>{function Ot(){if(st.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&st.delete(Vt)}),st.size===0){$(C);return}setTimeout(Ot,10)}de.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Bs=null;function jr(C){Bs&&Bs(C)}function Hs(){Pi.stop()}function Zr(){Pi.start()}const Pi=new Xv;Pi.setAnimationLoop(jr),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){Bs=C,Ct.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},Ct.addEventListener("sessionstart",Hs),Ct.addEventListener("sessionend",Zr),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ct=Ct.enabled===!0&&Ct.isPresenting===!0,st=j!==null&&(tt===null||ct)&&j.begin(A,tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,K,tt),P=At.get(C,z.length),P.init(K),z.push(P),ue.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Dt.setFromProjectionMatrix(ue,ki,K.reversedDepth),$t=this.localClippingEnabled,Nt=Gt.init(this.clippingPlanes,$t),L=bt.get(C,I.length),L.init(),I.push(L),Ct.enabled===!0&&Ct.isPresenting===!0){const Vt=A.xr.getDepthSensingMesh();Vt!==null&&hi(Vt,K,-1/0,A.sortObjects)}hi(C,K,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(_t,Tt),ne=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ne&&Lt.addToRenderList(L,C),this.info.render.frame++,Nt===!0&&Gt.beginShadows();const $=P.state.shadowsArray;if(It.render($,C,K),Nt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&j.hasRenderPass())===!1){const Vt=L.opaque,zt=L.transmissive;if(P.setupLights(),K.isArrayCamera){const kt=K.cameras;if(zt.length>0)for(let qt=0,ee=kt.length;qt<ee;qt++){const Yt=kt[qt];Mn(Vt,zt,C,Yt)}ne&&Lt.render(C);for(let qt=0,ee=kt.length;qt<ee;qt++){const Yt=kt[qt];ln(L,C,Yt,Yt.viewport)}}else zt.length>0&&Mn(Vt,zt,C,K),ne&&Lt.render(C),ln(L,C,K)}tt!==null&&Q===0&&(Y.updateMultisampleRenderTarget(tt),Y.updateRenderTargetMipmap(tt)),st&&j.end(A),C.isScene===!0&&C.onAfterRender(A,C,K),Bt.resetDefaultState(),ht=-1,ft=null,z.pop(),z.length>0?(P=z[z.length-1],Nt===!0&&Gt.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function hi(C,K,ct,st){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Dt.intersectsSprite(C)){st&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const Vt=Ut.update(C),zt=C.material;zt.visible&&L.push(C,Vt,zt,ct,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Dt.intersectsObject(C))){const Vt=Ut.update(C),zt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Kt.copy(Vt.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(zt)){const kt=Vt.groups;for(let qt=0,ee=kt.length;qt<ee;qt++){const Yt=kt[qt],ie=zt[Yt.materialIndex];ie&&ie.visible&&L.push(C,Vt,ie,ct,Kt.z,Yt)}}else zt.visible&&L.push(C,Vt,zt,ct,Kt.z,null)}}const Ot=C.children;for(let Vt=0,zt=Ot.length;Vt<zt;Vt++)hi(Ot[Vt],K,ct,st)}function ln(C,K,ct,st){const{opaque:$,transmissive:Ot,transparent:Vt}=C;P.setupLightsView(ct),Nt===!0&&Gt.setGlobalState(A.clippingPlanes,ct),st&&Ht.viewport(F.copy(st)),$.length>0&&Ti($,K,ct),Ot.length>0&&Ti(Ot,K,ct),Vt.length>0&&Ti(Vt,K,ct),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Mn(C,K,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[st.id]===void 0){const ie=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[st.id]=new Wi(1,1,{generateMipmaps:!0,type:ie?Sa:ui,minFilter:Ns,samples:Ce.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Ot=P.state.transmissionRenderTarget[st.id],Vt=st.viewport||F;Ot.setSize(Vt.z*A.transmissionResolutionScale,Vt.w*A.transmissionResolutionScale);const zt=A.getRenderTarget(),kt=A.getActiveCubeFace(),qt=A.getActiveMipmapLevel();A.setRenderTarget(Ot),A.getClearColor(St),it=A.getClearAlpha(),it<1&&A.setClearColor(16777215,.5),A.clear(),ne&&Lt.render(ct);const ee=A.toneMapping;A.toneMapping=Xi;const Yt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),P.setupLightsView(st),Nt===!0&&Gt.setGlobalState(A.clippingPlanes,st),Ti(C,ct,st),Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot),de.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Pe=0,$e=K.length;Pe<$e;Pe++){const Ze=K[Pe],{object:Ie,geometry:Jt,material:ze,group:ce}=Ze;if(ze.side===ci&&Ie.layers.test(st.layers)){const En=ze.side;ze.side=Xn,ze.needsUpdate=!0,Gs(Ie,ct,st,Jt,ze,ce),ze.side=En,ze.needsUpdate=!0,ie=!0}}ie===!0&&(Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot))}A.setRenderTarget(zt,kt,qt),A.setClearColor(St,it),Yt!==void 0&&(st.viewport=Yt),A.toneMapping=ee}function Ti(C,K,ct){const st=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Ot=C.length;$<Ot;$++){const Vt=C[$],{object:zt,geometry:kt,group:qt}=Vt;let ee=Vt.material;ee.allowOverride===!0&&st!==null&&(ee=st),zt.layers.test(ct.layers)&&Gs(zt,K,ct,kt,ee,qt)}}function Gs(C,K,ct,st,$,Ot){C.onBeforeRender(A,K,ct,st,$,Ot),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,K,ct,st,C,Ot),$.transparent===!0&&$.side===ci&&$.forceSinglePass===!1?($.side=Xn,$.needsUpdate=!0,A.renderBufferDirect(ct,K,st,$,C,Ot),$.side=ya,$.needsUpdate=!0,A.renderBufferDirect(ct,K,st,$,C,Ot),$.side=ci):A.renderBufferDirect(ct,K,st,$,C,Ot),C.onAfterRender(A,K,ct,st,$,Ot)}function Vs(C,K,ct){K.isScene!==!0&&(K=Se);const st=E.get(C),$=P.state.lights,Ot=P.state.shadowsArray,Vt=$.state.version,zt=Wt.getParameters(C,$.state,Ot,K,ct),kt=Wt.getProgramCacheKey(zt);let qt=st.programs;st.environment=C.isMeshStandardMaterial?K.environment:null,st.fog=K.fog,st.envMap=(C.isMeshStandardMaterial?yt:mt).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,qt===void 0&&(C.addEventListener("dispose",On),qt=new Map,st.programs=qt);let ee=qt.get(kt);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Vt)return Kr(C,zt),ee}else zt.uniforms=Wt.getUniforms(C),C.onBeforeCompile(zt,A),ee=Wt.acquireProgram(zt,kt),qt.set(kt,ee),st.uniforms=zt.uniforms;const Yt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Gt.uniform),Kr(C,zt),st.needsLights=Ta(C),st.lightsStateVersion=Vt,st.needsLights&&(Yt.ambientLightColor.value=$.state.ambient,Yt.lightProbe.value=$.state.probe,Yt.directionalLights.value=$.state.directional,Yt.directionalLightShadows.value=$.state.directionalShadow,Yt.spotLights.value=$.state.spot,Yt.spotLightShadows.value=$.state.spotShadow,Yt.rectAreaLights.value=$.state.rectArea,Yt.ltc_1.value=$.state.rectAreaLTC1,Yt.ltc_2.value=$.state.rectAreaLTC2,Yt.pointLights.value=$.state.point,Yt.pointLightShadows.value=$.state.pointShadow,Yt.hemisphereLights.value=$.state.hemi,Yt.directionalShadowMap.value=$.state.directionalShadowMap,Yt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Yt.spotShadowMap.value=$.state.spotShadowMap,Yt.spotLightMatrix.value=$.state.spotLightMatrix,Yt.spotLightMap.value=$.state.spotLightMap,Yt.pointShadowMap.value=$.state.pointShadowMap,Yt.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function ul(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Jc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Kr(C,K){const ct=E.get(C);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function rs(C,K,ct,st,$){K.isScene!==!0&&(K=Se),Y.resetTextureUnits();const Ot=K.fog,Vt=st.isMeshStandardMaterial?K.environment:null,zt=tt===null?A.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Vr,kt=(st.isMeshStandardMaterial?yt:mt).get(st.envMap||Vt),qt=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ee=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!ct.morphAttributes.position,ie=!!ct.morphAttributes.normal,Pe=!!ct.morphAttributes.color;let $e=Xi;st.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&($e=A.toneMapping);const Ze=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ie=Ze!==void 0?Ze.length:0,Jt=E.get(st),ze=P.state.lights;if(Nt===!0&&($t===!0||C!==ft)){const An=C===ft&&st.id===ht;Gt.setState(st,C,An)}let ce=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==ze.state.version||Jt.outputColorSpace!==zt||$.isBatchedMesh&&Jt.batching===!1||!$.isBatchedMesh&&Jt.batching===!0||$.isBatchedMesh&&Jt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Jt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Jt.instancing===!1||!$.isInstancedMesh&&Jt.instancing===!0||$.isSkinnedMesh&&Jt.skinning===!1||!$.isSkinnedMesh&&Jt.skinning===!0||$.isInstancedMesh&&Jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Jt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Jt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Jt.instancingMorph===!1&&$.morphTexture!==null||Jt.envMap!==kt||st.fog===!0&&Jt.fog!==Ot||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==qt||Jt.vertexTangents!==ee||Jt.morphTargets!==Yt||Jt.morphNormals!==ie||Jt.morphColors!==Pe||Jt.toneMapping!==$e||Jt.morphTargetsCount!==Ie)&&(ce=!0):(ce=!0,Jt.__version=st.version);let En=Jt.currentProgram;ce===!0&&(En=Vs(st,K,$));let Yi=!1,bn=!1,di=!1;const He=En.getUniforms(),Tn=Jt.uniforms;if(Ht.useProgram(En.program)&&(Yi=!0,bn=!0,di=!0),st.id!==ht&&(ht=st.id,bn=!0),Yi||ft!==C){Ht.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),He.setValue(G,"projectionMatrix",C.projectionMatrix),He.setValue(G,"viewMatrix",C.matrixWorldInverse);const Rn=He.map.cameraPosition;Rn!==void 0&&Rn.setValue(G,se.setFromMatrixPosition(C.matrixWorld)),Ce.logarithmicDepthBuffer&&He.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),ft!==C&&(ft=C,bn=!0,di=!0)}if(Jt.needsLights&&(ze.state.directionalShadowMap.length>0&&He.setValue(G,"directionalShadowMap",ze.state.directionalShadowMap,Y),ze.state.spotShadowMap.length>0&&He.setValue(G,"spotShadowMap",ze.state.spotShadowMap,Y),ze.state.pointShadowMap.length>0&&He.setValue(G,"pointShadowMap",ze.state.pointShadowMap,Y)),$.isSkinnedMesh){He.setOptional(G,$,"bindMatrix"),He.setOptional(G,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),He.setValue(G,"boneTexture",An.boneTexture,Y))}$.isBatchedMesh&&(He.setOptional(G,$,"batchingTexture"),He.setValue(G,"batchingTexture",$._matricesTexture,Y),He.setOptional(G,$,"batchingIdTexture"),He.setValue(G,"batchingIdTexture",$._indirectTexture,Y),He.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&He.setValue(G,"batchingColorTexture",$._colorsTexture,Y));const pn=ct.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ge.update($,ct,En),(bn||Jt.receiveShadow!==$.receiveShadow)&&(Jt.receiveShadow=$.receiveShadow,He.setValue(G,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Tn.envMap.value=kt,Tn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&K.environment!==null&&(Tn.envMapIntensity.value=K.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=JA()),bn&&(He.setValue(G,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&Qr(Tn,di),Ot&&st.fog===!0&&re.refreshFogUniforms(Tn,Ot),re.refreshMaterialUniforms(Tn,st,at,q,P.state.transmissionRenderTarget[C.id]),Jc.upload(G,ul(Jt),Tn,Y)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Jc.upload(G,ul(Jt),Tn,Y),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(G,"center",$.center),He.setValue(G,"modelViewMatrix",$.modelViewMatrix),He.setValue(G,"normalMatrix",$.normalMatrix),He.setValue(G,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const An=st.uniformsGroups;for(let Rn=0,ks=An.length;Rn<ks;Rn++){const Ai=An[Rn];Mt.update(Ai,En),Mt.bind(Ai,En)}}return En}function Qr(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Ta(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(C,K,ct){const st=E.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=K,E.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ct=E.get(C);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const Aa=G.createFramebuffer();this.setRenderTarget=function(C,K=0,ct=0){tt=C,H=K,Q=ct;let st=null,$=!1,Ot=!1;if(C){const zt=E.get(C);if(zt.__useDefaultFramebuffer!==void 0){Ht.bindFramebuffer(G.FRAMEBUFFER,zt.__webglFramebuffer),F.copy(C.viewport),V.copy(C.scissor),ot=C.scissorTest,Ht.viewport(F),Ht.scissor(V),Ht.setScissorTest(ot),ht=-1;return}else if(zt.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(zt.__hasExternalTextures)Y.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(zt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ot=!0);const qt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[K])?st=qt[K][ct]:st=qt[K],$=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?st=E.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?st=qt[ct]:st=qt,F.copy(C.viewport),V.copy(C.scissor),ot=C.scissorTest}else F.copy(Z).multiplyScalar(at).floor(),V.copy(lt).multiplyScalar(at).floor(),ot=Et;if(ct!==0&&(st=Aa),Ht.bindFramebuffer(G.FRAMEBUFFER,st)&&Ht.drawBuffers(C,st),Ht.viewport(F),Ht.scissor(V),Ht.setScissorTest(ot),$){const zt=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,zt.__webglTexture,ct)}else if(Ot){const zt=K;for(let kt=0;kt<C.textures.length;kt++){const qt=E.get(C.textures[kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+kt,qt.__webglTexture,ct,zt)}}else if(C!==null&&ct!==0){const zt=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,ct)}ht=-1},this.readRenderTargetPixels=function(C,K,ct,st,$,Ot,Vt,zt=0){if(!(C&&C.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){Ht.bindFramebuffer(G.FRAMEBUFFER,kt);try{const qt=C.textures[zt],ee=qt.format,Yt=qt.type;if(!Ce.textureFormatReadable(ee)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Yt)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-st&&ct>=0&&ct<=C.height-$&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(K,ct,st,$,Rt.convert(ee),Rt.convert(Yt),Ot))}finally{const qt=tt!==null?E.get(tt).__webglFramebuffer:null;Ht.bindFramebuffer(G.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ct,st,$,Ot,Vt,zt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt)if(K>=0&&K<=C.width-st&&ct>=0&&ct<=C.height-$){Ht.bindFramebuffer(G.FRAMEBUFFER,kt);const qt=C.textures[zt],ee=qt.format,Yt=qt.type;if(!Ce.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ie),G.bufferData(G.PIXEL_PACK_BUFFER,Ot.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(K,ct,st,$,Rt.convert(ee),Rt.convert(Yt),0);const Pe=tt!==null?E.get(tt).__webglFramebuffer:null;Ht.bindFramebuffer(G.FRAMEBUFFER,Pe);const $e=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await YS(G,$e,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ie),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ot),G.deleteBuffer(ie),G.deleteSync($e),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ct=0){const st=Math.pow(2,-ct),$=Math.floor(C.image.width*st),Ot=Math.floor(C.image.height*st),Vt=K!==null?K.x:0,zt=K!==null?K.y:0;Y.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ct,0,0,Vt,zt,$,Ot),Ht.unbindTexture()};const os=G.createFramebuffer(),Ra=G.createFramebuffer();this.copyTextureToTexture=function(C,K,ct=null,st=null,$=0,Ot=null){Ot===null&&($!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=$,$=0):Ot=0);let Vt,zt,kt,qt,ee,Yt,ie,Pe,$e;const Ze=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(ct!==null)Vt=ct.max.x-ct.min.x,zt=ct.max.y-ct.min.y,kt=ct.isBox3?ct.max.z-ct.min.z:1,qt=ct.min.x,ee=ct.min.y,Yt=ct.isBox3?ct.min.z:0;else{const pn=Math.pow(2,-$);Vt=Math.floor(Ze.width*pn),zt=Math.floor(Ze.height*pn),C.isDataArrayTexture?kt=Ze.depth:C.isData3DTexture?kt=Math.floor(Ze.depth*pn):kt=1,qt=0,ee=0,Yt=0}st!==null?(ie=st.x,Pe=st.y,$e=st.z):(ie=0,Pe=0,$e=0);const Ie=Rt.convert(K.format),Jt=Rt.convert(K.type);let ze;K.isData3DTexture?(Y.setTexture3D(K,0),ze=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Y.setTexture2DArray(K,0),ze=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(K,0),ze=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const ce=G.getParameter(G.UNPACK_ROW_LENGTH),En=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Yi=G.getParameter(G.UNPACK_SKIP_PIXELS),bn=G.getParameter(G.UNPACK_SKIP_ROWS),di=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ze.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ze.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yt);const He=C.isDataArrayTexture||C.isData3DTexture,Tn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const pn=E.get(C),An=E.get(K),Rn=E.get(pn.__renderTarget),ks=E.get(An.__renderTarget);Ht.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let Ai=0;Ai<kt;Ai++)He&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(C).__webglTexture,$,Yt+Ai),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(K).__webglTexture,Ot,$e+Ai)),G.blitFramebuffer(qt,ee,Vt,zt,ie,Pe,Vt,zt,G.DEPTH_BUFFER_BIT,G.NEAREST);Ht.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||E.has(C)){const pn=E.get(C),An=E.get(K);Ht.bindFramebuffer(G.READ_FRAMEBUFFER,os),Ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ra);for(let Rn=0;Rn<kt;Rn++)He?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,$,Yt+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,$),Tn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,An.__webglTexture,Ot,$e+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,An.__webglTexture,Ot),$!==0?G.blitFramebuffer(qt,ee,Vt,zt,ie,Pe,Vt,zt,G.COLOR_BUFFER_BIT,G.NEAREST):Tn?G.copyTexSubImage3D(ze,Ot,ie,Pe,$e+Rn,qt,ee,Vt,zt):G.copyTexSubImage2D(ze,Ot,ie,Pe,qt,ee,Vt,zt);Ht.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(ze,Ot,ie,Pe,$e,Vt,zt,kt,Ie,Jt,Ze.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(ze,Ot,ie,Pe,$e,Vt,zt,kt,Ie,Ze.data):G.texSubImage3D(ze,Ot,ie,Pe,$e,Vt,zt,kt,Ie,Jt,Ze):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ot,ie,Pe,Vt,zt,Ie,Jt,Ze.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ot,ie,Pe,Ze.width,Ze.height,Ie,Ze.data):G.texSubImage2D(G.TEXTURE_2D,Ot,ie,Pe,Vt,zt,Ie,Jt,Ze);G.pixelStorei(G.UNPACK_ROW_LENGTH,ce),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,En),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yi),G.pixelStorei(G.UNPACK_SKIP_ROWS,bn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,di),Ot===0&&K.generateMipmaps&&G.generateMipmap(ze),Ht.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),Ht.unbindTexture()},this.resetState=function(){H=0,Q=0,tt=null,Ht.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const uv={type:"change"},gp={type:"start"},Zv={type:"end"},Wc=new au,fv=new is,tR=Math.cos(70*ZS.DEG2RAD),gn=new k,Jn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$h=1e-6;class eR extends iE{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fr.ROTATE,MIDDLE:Fr.DOLLY,RIGHT:Fr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Fs,this._lastTargetPosition=new k,this._quat=new Fs().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new B_,this._sphericalDelta=new B_,this._scale=1,this._panOffset=new k,this._rotateStart=new Zt,this._rotateEnd=new Zt,this._rotateDelta=new Zt,this._panStart=new Zt,this._panEnd=new Zt,this._panDelta=new Zt,this._dollyStart=new Zt,this._dollyEnd=new Zt,this._dollyDelta=new Zt,this._dollyDirection=new k,this._mouse=new Zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iR.bind(this),this._onPointerDown=nR.bind(this),this._onPointerUp=aR.bind(this),this._onContextMenu=fR.bind(this),this._onMouseWheel=oR.bind(this),this._onKeyDown=lR.bind(this),this._onTouchStart=cR.bind(this),this._onTouchMove=uR.bind(this),this._onMouseDown=sR.bind(this),this._onMouseMove=rR.bind(this),this._interceptControlDown=hR.bind(this),this._interceptControlUp=dR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uv),this.update(),this.state=Ye.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Jn:s>Math.PI&&(s-=Jn),l<-Math.PI?l+=Jn:l>Math.PI&&(l-=Jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new k(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<tR?this.object.lookAt(this.target):(fv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(fv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>$h||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$h||this._lastTargetPosition.distanceToSquared(this.target)>$h?(this.dispatchEvent(uv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Zt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function nR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function iR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function aR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zv),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function sR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Fr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Fr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(gp)}function rR(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function oR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(gp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Zv))}function lR(r){this.enabled!==!1&&this._handleKeyDown(r)}function cR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(gp)}function uR(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function fR(r){this.enabled!==!1&&r.preventDefault()}function hR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pR=`
varying vec3 vLocalPos;
varying vec3 vWorldPos;
varying vec2 vUv;

void main() {
    vUv = uv;
    vLocalPos = position; 
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,mR=`
precision highp float;

varying vec3 vLocalPos;
uniform vec3 uLocalCameraPos; 
uniform float uTime;
uniform float uFlash; // Lightning intensity

// --- NOISE ---
// Simplex 3D Noise for high performance organic look
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Fractal Brownian Motion for dusty detail
float fbm(vec3 p) {
    float f = 0.0;
    float amp = 0.5;
    for(int i=0; i<4; i++) {
        f += amp * snoise(p);
        p *= 2.02; // Lacunarity
        amp *= 0.5;
    }
    return f;
}

// --- SHAPE DEFINITION ---
float getDensity(vec3 p) {
    // 1. Height normalize (0 at bottom, 1 at top)
    float h = clamp(p.y / 25.0, 0.0, 1.0);
    
    // 2. Funnel Profile (The "V" shape)
    // Base radius 0.5, flares out to 14.0 at top
    // Uses pow(h, 2.0) for a curved trumpet shape
    float rBase = 1.0;
    float rTop = 14.0;
    float r = mix(rBase, rTop, pow(h, 2.0));
    
    // 3. Rotation / Twist Domain Distortion
    // Rotate space around Y axis based on height and time
    float theta = -uTime * 4.0 + p.y * 0.5;
    float c = cos(theta);
    float s = sin(theta);
    mat2 rot = mat2(c, -s, s, c);
    
    vec3 q = p;
    q.xz = rot * q.xz;
    
    // 4. Basic Cone SDF
    float dist = length(q.xz) - r;
    
    // 5. Turbulent Displacement (The "Cloud" look)
    // We displace the surface with FBM noise
    vec3 noiseP = q * 0.35; // Scale of noise features
    noiseP.y -= uTime * 3.0; // Upward flow
    
    // More turbulence at the top (anvil), less at bottom (tight funnel)
    float noiseAmp = 0.8 + h * 2.5; 
    float n = fbm(noiseP);
    
    // 6. Density Calculation
    // We want soft edges. 
    // negative dist = inside. 
    float d = -(dist + n * noiseAmp);
    
    return smoothstep(-1.0, 1.0, d); // Smooth density falloff
}

void main() {
    // Raymarching Setup
    vec3 ro = vLocalPos;
    vec3 rd = normalize(vLocalPos - uLocalCameraPos);
    
    vec3 p = ro;
    float stepSize = 0.35;
    
    // Dithering to prevent banding artifacts
    float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    p += rd * dither * stepSize;
    
    vec4 sum = vec4(0.0);
    
    // Lighting Params
    // Light coming from top-left-back
    vec3 lightPos = vec3(20.0, 40.0, 20.0); 
    vec3 lightDir = normalize(lightPos);
    
    // Colors matching reference (Greyscale/Brownish)
    vec3 colCore = vec3(0.05, 0.04, 0.04);   // Deep dark core
    vec3 colMid = vec3(0.35, 0.33, 0.32);    // Dusty mid-tone
    vec3 colEdge = vec3(0.9, 0.9, 0.92);     // Bright cloud edge
    vec3 colFlash = vec3(0.8, 0.85, 1.0);    // Lightning tint

    // Raymarching Loop
    for(int i=0; i<90; i++) {
        // Sample Density
        float dens = getDensity(p);
        
        if(dens > 0.01) {
            // VOLUMETRIC LIGHTING (Beer's Law approximation)
            // Shoot a secondary ray towards light to see how much cloud blocks it
            float lightDens = 0.0;
            vec3 lp = p;
            float lStep = 0.6;
            
            // Short shadow march (3 steps is enough for soft shadows)
            for(int j=0; j<3; j++) {
                lp += lightDir * lStep;
                lightDens += getDensity(lp);
            }
            
            // Calculate light reaching this point
            // Higher lightDens = darker shadow
            float shadow = exp(-lightDens * 0.8); 
            
            // Height Gradient
            float h = clamp(p.y / 25.0, 0.0, 1.0);
            
            // Base Color mixing
            // Darker at bottom (dirt), lighter at top (cloud)
            vec3 albedo = mix(colCore, colMid, h);
            albedo = mix(albedo, colEdge, dens * shadow); // Edges are brighter
            
            // Apply Lighting
            // Direct Light + Ambient + Lightning
            vec3 finalCol = albedo * (shadow * 0.8 + 0.2); 
            
            // Add Lightning Flash (illuminates deep density too)
            finalCol += colFlash * uFlash * (0.1 + h * 0.4) * dens;

            // Accumulate
            float alpha = dens * 0.25; // Opacity step
            
            sum.rgb += finalCol * alpha * (1.0 - sum.a);
            sum.a += alpha * (1.0 - sum.a);
            
            if(sum.a > 0.99) break;
        }
        
        p += rd * stepSize;
        
        // Bounds check
        if(p.y < -2.0 || p.y > 27.0 || length(p.xz) > 20.0) break;
    }
    
    if(sum.a < 0.01) discard;
    
    // No more distance fog logic here to keep it bright and visible from all angles
    
    gl_FragColor = sum;
}
`;class hv extends fi{constructor(){const t={uTime:{value:0},uLocalCameraPos:{value:new k},uFlash:{value:0}};super({uniforms:t,vertexShader:pR,fragmentShader:mR,transparent:!0,side:ya,depthWrite:!1}),this.uniforms=t}}const gR=`
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,_R=`
uniform float uTime;
uniform float uFlash; 
uniform vec3 uBaseColor;
uniform vec3 uCloudColor;

varying vec2 vUv;
varying vec3 vWorldPosition;

// --- NOISE ---
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float fbm(vec3 p) {
    float f = 0.0;
    float amp = 0.5;
    float freq = 0.8;
    for(int i=0; i<5; i++) {
        f += amp * snoise(p * freq);
        freq *= 2.0;
        amp *= 0.5;
    }
    return f;
}

void main() {
    // Project to dome
    vec3 p = normalize(vWorldPosition) * 4.0;
    
    // Rolling cloud movement
    p.x += uTime * 0.03;
    p.z += uTime * 0.01;
    
    // Large structure noise
    float baseNoise = fbm(p);
    
    // Detail noise
    float detailNoise = snoise(p * 3.0 + uTime * 0.1);
    
    // Cloud density map
    float clouds = smoothstep(-0.2, 0.8, baseNoise + detailNoise * 0.2);
    
    // Colors (Dark Storm)
    vec3 skyDark = vec3(0.05, 0.07, 0.1); // Deep slate
    vec3 cloudDark = vec3(0.15, 0.16, 0.18); // Dark grey clouds
    vec3 cloudLight = vec3(0.3, 0.32, 0.35); // Lighter edges
    
    vec3 finalColor = mix(skyDark, cloudDark, clouds);
    
    // Add depth to clouds
    finalColor = mix(finalColor, cloudLight, clouds * (0.5 + 0.5 * detailNoise));
    
    // Lightning
    // Flash whole sky slightly, but clouds more
    vec3 flashCol = vec3(0.8, 0.9, 1.0);
    float flashMask = smoothstep(0.3, 0.8, snoise(p * 2.0)); // Localized flash hot spots
    
    // If uFlash is active, brighten sky
    finalColor += flashCol * uFlash * (0.1 + 0.9 * flashMask * clouds);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;class vR extends fi{constructor(){const t={uTime:{value:0},uFlash:{value:0},uBaseColor:{value:new Re(1712172)},uCloudColor:{value:new Re(4871528)}};super({uniforms:t,vertexShader:gR,fragmentShader:_R,side:Xn}),this.uniforms=t}}const xR=`
uniform float uTime;
uniform float uHeight; 
uniform float uBaseRadius;
uniform float uTopRadius;

attribute float aSize;
attribute float aSpeed;
attribute float aOffset; 
attribute vec3 aRandom; 

varying float vAlpha;
varying float vSpeed;

void main() {
    // Life cycle 0.0 -> 1.0
    float t = fract(uTime * aSpeed * 0.1 + aOffset);
    
    // Vertical motion (Updraft)
    // Accelerate as it goes up
    float hPct = pow(t, 0.8); 
    float y = hPct * uHeight;
    
    // Radius Calculation
    // Base funnel shape
    float r = mix(uBaseRadius, uTopRadius, pow(hPct, 2.0));
    
    // Centrifugal Force drift (particles fly out as they rise)
    float drift = aRandom.x * 5.0 * hPct;
    r += drift;
    
    // Angular Momentum Physics
    // Speed is inversely proportional to radius (v = k/r)
    // But we clamp it so it doesn't explode at r=0
    float spinSpeed = 15.0 / (r + 0.5);
    
    // Total rotation angle
    float theta = -uTime * spinSpeed + aRandom.y * 6.28;
    
    // Position
    float x = cos(theta) * r;
    float z = sin(theta) * r;
    
    // Add Turbulence/Chaos (Jitter)
    vec3 chaos = vec3(
        sin(uTime * 10.0 + aRandom.z * 10.0),
        cos(uTime * 8.0 + aRandom.x * 10.0),
        sin(uTime * 12.0 + aRandom.y * 10.0)
    ) * (0.2 + hPct * 1.0); // More chaos at top
    
    vec3 newPos = vec3(x + chaos.x, y + chaos.y, z + chaos.z);
    
    // Fade in/out
    // Fade in quickly at bottom, fade out slowly at top
    vAlpha = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.85, 1.0, t));
    
    // Pass speed to frag for motion blur effect simulation
    vSpeed = spinSpeed;
    
    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation
    gl_PointSize = aSize * (400.0 / -mvPosition.z);
}
`,yR=`
uniform vec3 uColor;
varying float vAlpha;
varying float vSpeed;

void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    
    if (dist > 0.5) discard;
    
    // Soft particle ball
    float alpha = smoothstep(0.5, 0.0, dist);
    
    // Darker center for debris chunks
    vec3 col = uColor * (0.5 + 0.5 * smoothstep(0.0, 1.0, dist));
    
    gl_FragColor = vec4(col, alpha * vAlpha);
}
`;class SR extends fi{constructor(t){const i={uTime:{value:0},uHeight:{value:25},uBaseRadius:{value:1},uTopRadius:{value:12},uColor:{value:new Re(t.color)}};super({uniforms:i,vertexShader:xR,fragmentShader:yR,transparent:!0,depthWrite:!1,blending:Ps}),this.uniforms=i}}const MR=({config:r,tornadoes:t,locationName:i,playbackProgress:s})=>{const l=he.useRef(null),c=he.useRef(null),h=he.useRef(null),d=he.useRef(null),m=he.useRef(null),p=he.useRef(null),g=he.useRef(null),_=he.useRef(null),x=he.useRef(null),S=he.useRef(null),b=he.useRef(null),T=he.useRef(null),M=he.useRef(null),v=he.useRef(new Map),O=he.useRef([]),U=he.useRef([]),L=he.useRef(0),P=he.useRef(!1),I=he.useRef(new Map),z=10,j=39.1,A=0,w=1,H=(it,D,q=0,at,_t)=>{const Tt=(D-_t)*111.32*Math.cos(at*Math.PI/180),Z=-(it-at)*111.32,lt=(q-A)*w/1e3;return new k(Tt,lt,Z)},Q=(it,D,q)=>{const at=it*Math.PI/180,_t=Math.pow(2,q),Tt=Math.floor((D+180)/360*_t),Z=Math.floor((1-Math.log(Math.tan(at)+1/Math.cos(at))/Math.PI)/2*_t);return{x:Tt,y:Z}},tt=(it,D,q)=>{const at=Math.pow(2,q),_t=it/at*360-180;return{lat:Math.atan(Math.sinh(Math.PI*(1-2*D/at)))*180/Math.PI,lon:_t}},ht=(it,D,q)=>`${q}_${it}_${D}`;he.useEffect(()=>{if(!l.current)return;const it=new xM;it.background=new Re(11193599),h.current=it;const D=new Ei(45,window.innerWidth/window.innerHeight,.1,2e3);D.position.set(0,30,60),d.current=D;const q=new $A({antialias:!0,alpha:!1,powerPreference:"high-performance"});q.setSize(window.innerWidth,window.innerHeight),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.outputColorSpace=$n,q.toneMapping=Jd,q.toneMappingExposure=1,l.current.appendChild(q.domElement),m.current=q;const at=new eR(D,q.domElement);at.enableDamping=!0,at.dampingFactor=.05,at.minDistance=5,at.maxDistance=500,at.maxPolarAngle=Math.PI/2-.02,p.current=at;const _t=new tE(16777215,1.5);it.add(_t),g.current=_t;const Tt=new $M(16777215,.8);Tt.position.set(20,100,20),it.add(Tt),_.current=Tt;const Z=new ga;Z.position.y=-.1,it.add(Z),S.current=Z;const lt=new ga;lt.position.y=.2,it.add(lt),b.current=lt;const Et=new ga;Et.position.y=.3,it.add(Et),M.current=Et;const Dt=new ga;it.add(Dt),T.current=Dt;const Nt=new Xr(500,500),$t=new Us({color:2972199,side:ci}),ue=new In(Nt,$t);ue.rotation.x=-Math.PI/2,ue.position.y=-1.2,it.add(ue);const se=new hp(600,32,32),Kt=new vR,Se=new In(se,Kt);it.add(Se),x.current=Kt,at.target.set(0,0,0),at.update();const ne=new nE,me=new k(0,0,80),G=new k,we=()=>{L.current=requestAnimationFrame(we),ne.getDelta();const Ce=ne.getElapsedTime();if(p.current&&p.current.update(),x.current&&(x.current.uniforms.uTime.value=Ce,x.current.uniforms.uFlash.value=0),O.current.forEach(Ht=>{Ht&&(Ht.uniforms.uTime.value=Ce,Ht.uniforms.uFlash.value=0)}),U.current.forEach(Ht=>{Ht&&(Ht.uniforms.uTime.value=Ce)}),T.current&&d.current&&T.current.children.forEach(Ht=>{const N=Ht.children.find(E=>E instanceof In&&E.material instanceof hv);if(N){const E=N.material;G.copy(d.current.position),N.worldToLocal(G),E.uniforms.uLocalCameraPos.value.copy(G)}}),m.current&&h.current&&d.current){m.current.render(h.current,d.current);const Ht=d.current,N=m.current.domElement.width/window.devicePixelRatio,E=m.current.domElement.height/window.devicePixelRatio,Y=Math.min(r.radius*.85,80);if(me.set(0,0,Y),me.project(Ht),c.current)if(me.z>1)c.current.style.display="none";else{c.current.style.display="block";const mt=(me.x*.5+.5)*N,yt=(-(me.y*.5)+.5)*E;c.current.style.transform=`translate(-50%, -50%) translate(${mt}px, ${yt}px)`}}};we();const de=()=>{d.current&&m.current&&(d.current.aspect=window.innerWidth/window.innerHeight,d.current.updateProjectionMatrix(),m.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",de),()=>{window.removeEventListener("resize",de),cancelAnimationFrame(L.current),l.current&&m.current&&l.current.removeChild(m.current.domElement),q.dispose()}},[]),he.useEffect(()=>{T.current&&t.forEach((it,D)=>{if(D>=T.current.children.length)return;const q=T.current.children[D],at=I.current.get(it.id);let _t=new k;if(at&&it.path&&it.path.length>1){const Tt=Math.max(0,Math.min(1,s));at.getPoint(Tt,_t)}else _t=H(it.lat,it.lon,0,r.centerLat,r.centerLon);q.position.copy(_t)})},[s,t,r.centerLat,r.centerLon]);const ft=(it,D,q,at,_t,Tt)=>{const Z=new Nn,lt=new Float32Array(it*3),Et=new Float32Array(it*3),Dt=new Float32Array(it),Nt=new Float32Array(it),$t=new Float32Array(it);for(let Kt=0;Kt<it;Kt++)Et[Kt*3]=Math.random(),Et[Kt*3+1]=Math.random(),Et[Kt*3+2]=Math.random(),Dt[Kt]=.5+Math.random()*1.5,Nt[Kt]=Math.random()*100,$t[Kt]=q*(.6+Math.random()*.8);Z.setAttribute("position",new kn(lt,3)),Z.setAttribute("aRandom",new kn(Et,3)),Z.setAttribute("aSpeed",new kn(Dt,1)),Z.setAttribute("aOffset",new kn(Nt,1)),Z.setAttribute("aSize",new kn($t,1));const ue=new SR({color:D});ue.uniforms.uBaseRadius.value=at,ue.uniforms.uTopRadius.value=_t,ue.uniforms.uHeight.value=Tt;const se=new RM(Z,ue);return se.frustumCulled=!1,{mesh:se,material:ue}};he.useEffect(()=>{if(!h.current||!S.current)return;const{centerLat:it,centerLon:D,radius:q}=r;v.current.forEach(at=>{var _t;at.mesh&&((_t=S.current)==null||_t.remove(at.mesh)),at.geometry&&at.geometry.dispose(),at.material&&at.material.dispose(),at.texture&&at.texture.dispose()}),v.current.clear(),F(it,D,q),St(),ot()},[r.centerLat,r.centerLon,r.radius,i]),he.useEffect(()=>{if(!(!T.current||!M.current)){for(;T.current.children.length>0;){const it=T.current.children[0];T.current.remove(it)}for(O.current=[],U.current=[],I.current.clear();M.current.children.length>0;)M.current.remove(M.current.children[0]);t.forEach(it=>{var ue;const D=new ga;let q=new k;if(it.path&&it.path.length>1){const se=it.path.map(G=>H(G.lat,G.lon,0,r.centerLat,r.centerLon)),Kt=new Gv(se);I.current.set(it.id,Kt);const Se=new dp(Kt,64,.15,8,!1),ne=new Us({color:16758528,transparent:!0,opacity:.8}),me=new In(Se,ne);me.position.y=.2,(ue=M.current)==null||ue.add(me),Kt.getPoint(s,q)}else q=H(it.lat,it.lon,0,r.centerLat,r.centerLon);D.position.copy(q);const at=new cp(20,20,25,16,1,!1);at.translate(0,12.5,0);const _t=new hv;O.current.push(_t);const Tt=new In(at,_t);Tt.renderOrder=10,D.add(Tt);const Z=ft(8e3,4011051,.4,1,14,18);D.add(Z.mesh),U.current.push(Z.material);const lt=ft(500,1117966,.8,2,20,15);D.add(lt.mesh),U.current.push(lt.material);const Et=ft(3e3,7041664,.6,4,16,22);D.add(Et.mesh),U.current.push(Et.material);const Dt=new fp(.5,12,32),Nt=new Us({color:0,transparent:!0,opacity:.6,side:ci}),$t=new In(Dt,Nt);$t.rotation.x=-Math.PI/2,$t.position.y=.05,D.add($t),T.current.add(D)})}},[t,r.centerLat,r.centerLon]);const F=(it,D,q)=>{const at=Q(it,D,z),_t=Math.min(Math.ceil(q/j)+1,4);for(let Tt=-_t;Tt<=_t;Tt++)for(let Z=-_t;Z<=_t;Z++){const lt=at.x+Z,Et=at.y+Tt;V(lt,Et,z,it,D)}},V=(it,D,q,at,_t)=>{const Tt=ht(it,D,q);if(v.current.has(Tt))return;v.current.set(Tt,{loading:!0});const Z=tt(it,D,q),lt=tt(it+1,D+1,q),Et=H(Z.lat,Z.lon,0,at,_t),Dt=H(lt.lat,lt.lon,0,at,_t),Nt=Math.abs(Dt.x-Et.x),$t=Math.abs(Dt.z-Et.z),ue=(Et.x+Dt.x)/2,se=(Et.z+Dt.z)/2,Kt=`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${q}/${D}/${it}`,Se=(me,G)=>{if(!S.current)return;const we=new Xr(Nt,$t),de=new In(we,me);de.rotation.x=-Math.PI/2,de.position.set(ue,-1,se),S.current.add(de),v.current.set(Tt,{mesh:de,geometry:we,material:me,texture:G})},ne=new KM;ne.crossOrigin="anonymous",ne.load(Kt,me=>{var we;me.colorSpace=$n,me.anisotropy=((we=m.current)==null?void 0:we.capabilities.getMaxAnisotropy())||1;const G=new Us({map:me,side:ci,color:16777215});Se(G,me)},void 0,me=>{console.warn(`Tile load failed: ${Kt}`,me);const G=new Us({color:3828533,side:ci});Se(G)})},ot=async()=>{if(!P.current){if(typeof topojson>"u"){console.warn("TopoJSON library not loaded. World boundaries will be skipped.");return}try{const q=await(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")).json(),at=topojson.feature(q,q.objects.countries),_t=new Iv({color:0,transparent:!0,opacity:.4,linewidth:1}),Tt=[];at.features.forEach(Et=>{const Dt=Et.geometry;if(!Dt)return;const Nt=$t=>{for(let ue=0;ue<$t.length-1;ue++){const se=H($t[ue][1],$t[ue][0],20,r.centerLat,r.centerLon),Kt=H($t[ue+1][1],$t[ue+1][0],20,r.centerLat,r.centerLon);Tt.push(se.x,se.y,se.z),Tt.push(Kt.x,Kt.y,Kt.z)}};Dt.type==="Polygon"?Nt(Dt.coordinates[0]):Dt.type==="MultiPolygon"&&Dt.coordinates.forEach($t=>Nt($t[0]))});const Z=new Nn;Z.setAttribute("position",new en(Tt,3));const lt=new TM(Z,_t);b.current&&b.current.add(lt),P.current=!0}catch(it){console.error("Failed to load world boundaries:",it)}}},St=()=>{b.current&&b.current.clear(),P.current=!1};return wt.jsxs("div",{className:"relative w-full h-full",children:[wt.jsx("div",{ref:l,className:"w-full h-full absolute inset-0 z-0"}),wt.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none z-10",children:wt.jsx("div",{ref:c,className:"absolute text-center whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2",style:{willChange:"transform",display:"none"},children:wt.jsx("div",{className:"text-xs font-mono text-white/60 tracking-widest uppercase drop-shadow-md",children:"Developed by Shahnab"})})})]})},ER="https://api.weather.gov/alerts/active?event=Tornado%20Warning",bR=async()=>{try{const r=await fetch(ER);if(!r.ok)return console.warn("Weather API unavailable."),[];const i=(await r.json()).features||[];return i.length===0?(console.log("No active real-world tornadoes found."),[]):i.map(s=>{const l=s.geometry;let c=0,h=0;if(l&&l.type==="Polygon"){const d=l.coordinates[0];let m=0,p=0;d.forEach(g=>{p+=g[0],m+=g[1]}),c=m/d.length,h=p/d.length}return{id:s.properties.id,lat:c,lon:h,severity:"Warning",timestamp:new Date(s.properties.sent).getTime(),heading:0,speed:0,radius:200,description:s.properties.headline||"Tornado Warning",isSimulated:!1}})}catch(r){return console.error("Error fetching weather data:",r),[]}},td=(r,t,i,s)=>{const l=[],h=Math.cos(s*Math.PI/180)*i/111/20,d=Math.sin(s*Math.PI/180)*i/(111*Math.cos(r*Math.PI/180))/20;for(let m=0;m<=20;m++){const p=Math.sin(m*.5)*.005;l.push({lat:r+h*m+p,lon:t+d*m+p})}return l},TR=async r=>{await new Promise(c=>setTimeout(c,800));const t=new Date(r).getFullYear();if(t===2013)return[{id:"hist-2013-moore",lat:35.3468,lon:-97.5164,severity:"Historical",fujitaScale:"EF5",timestamp:new Date("2013-05-20").getTime(),heading:60,speed:0,radius:1e3,description:"2013 Newcastle-Moore Tornado",path:td(35.29,-97.65,25,65)}];if(t===2011)return[{id:"hist-2011-joplin",lat:37.0842,lon:-94.5133,severity:"Historical",fujitaScale:"EF5",timestamp:new Date("2011-05-22").getTime(),heading:90,speed:0,radius:1200,description:"2011 Joplin Tornado",path:td(37.06,-94.65,30,85)}];const i=[],s=35,l=-97;for(let c=0;c<5;c++){const h=s+(Math.random()*4-2),d=l+(Math.random()*4-2),m=45+Math.random()*45,p=10+Math.random()*40;i.push({id:`hist-gen-${c}`,lat:h,lon:d,severity:"Historical",fujitaScale:`EF${Math.floor(Math.random()*4)+1}`,timestamp:new Date(r).getTime(),heading:m,speed:0,radius:400+Math.random()*400,description:`Historical Track Record #${c+1}`,path:td(h-.2,d-.2,p,m)})}return i},AR=async r=>{try{return await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(r)}`)).json()}catch(t){return console.error("Geocoding failed",t),[]}},RR=({onLocationSelect:r,currentLocationName:t,onModeChange:i,mode:s})=>{const[l,c]=he.useState(""),[h,d]=he.useState([]),[m,p]=he.useState(!1),[g,_]=he.useState(!1),[x,S]=he.useState("2013-05-20");he.useEffect(()=>{const v=setTimeout(async()=>{if(l.length>2){p(!0);const O=await AR(l);d(O),p(!1),_(!0)}else d([]),_(!1)},500);return()=>clearTimeout(v)},[l]);const b=v=>{r(parseFloat(v.lat),parseFloat(v.lon),v.display_name.split(",")[0]),c(""),_(!1)},T=v=>{i(v,v==="historical"?x:void 0)},M=v=>{S(v.target.value),i("historical",v.target.value)};return wt.jsx("div",{className:"absolute top-6 left-6 z-50 w-full max-w-sm font-sans",children:wt.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-5 transition-all duration-300",children:[wt.jsxs("div",{className:"flex justify-between items-start mb-6",children:[wt.jsxs("div",{children:[wt.jsx("h1",{className:"text-lg font-bold text-white tracking-tight leading-none",children:"StormWatch"}),wt.jsx("p",{className:"text-[10px] text-gray-400 font-semibold tracking-widest mt-1 uppercase",children:"Volumetric Weather Engine"})]}),wt.jsxs("div",{className:"flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full border border-white/10",children:[wt.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${s==="live"?"bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]":"bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"}`}),wt.jsx("span",{className:"text-[10px] font-mono text-gray-300 uppercase font-medium",children:s})]})]}),wt.jsxs("div",{className:"grid grid-cols-2 gap-1 bg-black/40 p-1 rounded-lg mb-5 border border-white/5",children:[wt.jsx("button",{className:`py-2 text-[11px] font-semibold rounded-md transition-all duration-200 ${s==="live"?"bg-blue-600 text-white shadow-lg shadow-blue-900/40":"text-gray-400 hover:text-white hover:bg-white/5"}`,onClick:()=>T("live"),children:"LIVE DATA"}),wt.jsx("button",{className:`py-2 text-[11px] font-semibold rounded-md transition-all duration-200 ${s==="historical"?"bg-yellow-600 text-white shadow-lg shadow-yellow-900/40":"text-gray-400 hover:text-white hover:bg-white/5"}`,onClick:()=>T("historical"),children:"ARCHIVE"})]}),s==="historical"&&wt.jsxs("div",{className:"mb-5 animate-fadeIn",children:[wt.jsx("label",{className:"block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2",children:"Historical Date"}),wt.jsx("input",{type:"date",value:x,onChange:M,style:{colorScheme:"dark"},className:"block w-full px-3 py-2.5 text-xs text-white bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors appearance-none"}),wt.jsxs("div",{className:"flex gap-2 mt-2 overflow-x-auto pb-1",children:[wt.jsx("button",{onClick:()=>{S("2013-05-20"),i("historical","2013-05-20")},className:"text-[10px] whitespace-nowrap px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded text-gray-300 transition-colors",children:"Moore 2013"}),wt.jsx("button",{onClick:()=>{S("2011-05-22"),i("historical","2011-05-22")},className:"text-[10px] whitespace-nowrap px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded text-gray-300 transition-colors",children:"Joplin 2011"})]})]}),wt.jsxs("div",{className:"relative group",children:[wt.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:wt.jsx("svg",{className:"w-3.5 h-3.5 text-gray-500 group-focus-within:text-yellow-400 transition-colors","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:wt.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),wt.jsx("input",{type:"text",className:"block w-full pl-9 pr-3 py-3 text-xs text-white bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-600 outline-none transition-all shadow-sm",placeholder:"Search location...",value:l,onChange:v=>c(v.target.value)}),m&&wt.jsx("div",{className:"absolute right-3 top-3",children:wt.jsx("div",{className:"animate-spin h-3.5 w-3.5 border-2 border-yellow-500 rounded-full border-t-transparent"})})]}),g&&h.length>0&&wt.jsx("ul",{className:"absolute left-0 right-0 top-full mt-2 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50 divide-y divide-white/5",children:h.map((v,O)=>wt.jsx("li",{className:"px-4 py-3 hover:bg-white/10 cursor-pointer text-xs text-gray-300 transition-colors first:rounded-t-xl last:rounded-b-xl",onClick:()=>b(v),children:v.display_name},O))}),wt.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 flex justify-between items-end",children:[wt.jsxs("div",{children:[wt.jsx("p",{className:"text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5",children:"Current Focus"}),wt.jsx("p",{className:"text-xs text-white font-bold truncate max-w-[180px]",children:t})]}),wt.jsx("button",{className:"text-[10px] font-bold text-yellow-400 hover:text-yellow-300 transition-colors uppercase tracking-wide",onClick:()=>r(35.4676,-97.5164,"Oklahoma City"),children:"Recenter Map"})]})]})})},CR=({isPlaying:r,progress:t,onTogglePlay:i,onProgressChange:s,onReplay:l})=>wt.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md",children:wt.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center space-x-4",children:[wt.jsx("button",{onClick:i,className:"flex items-center justify-center w-10 h-10 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full transition-colors shadow-[0_0_15px_rgba(202,138,4,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 border border-yellow-400/30",children:t>=1&&!r?wt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[wt.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a1 1 0 01-1.5 1.322l-2-1.5a1 1 0 010-1.644l2-1.5A1 1 0 014 2zm10 10a1 1 0 011 1v2.101a1 1 0 01-1.5 1.322l-2-1.5a1 1 0 010-1.644l2-1.5a1 1 0 011.5 1.322V14a1 1 0 01-1 1z",clipRule:"evenodd"}),wt.jsx("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16z"}),wt.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a1 1 0 01-1.5 1.322l-2-1.5a1 1 0 010-1.644l2-1.5A1 1 0 014 2z",clipRule:"evenodd"}),wt.jsx("path",{d:"M12.5 6a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5zM12.5 10.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5z"})]}):r?wt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:wt.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}):wt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-0.5",viewBox:"0 0 20 20",fill:"currentColor",children:wt.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})})}),wt.jsxs("div",{className:"flex-1",children:[wt.jsxs("div",{className:"flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1",children:[wt.jsx("span",{children:"Start"}),wt.jsx("span",{children:"Archive Time"}),wt.jsx("span",{children:"End"})]}),wt.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:t,onChange:c=>s(parseFloat(c.target.value)),className:"w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"})]}),wt.jsx("button",{onClick:l,className:"p-2 text-gray-500 hover:text-yellow-400 transition-colors",children:wt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})]})}),wR=()=>{const[r,t]=he.useState([]),[i,s]=he.useState({centerLat:39.8283,centerLon:-98.5795,zoom:10,radius:50}),[l,c]=he.useState("US View"),[h,d]=he.useState(!0),[m,p]=he.useState("Initializing StormWatch..."),[g,_]=he.useState("historical"),[x,S]=he.useState(!1),[b,T]=he.useState(1),M=he.useRef(0),v=he.useRef(0),O=he.useCallback(async(A,w)=>{d(!0);try{if(A==="live"){p("Scanning NOAA active alerts...");const H=await bR();t(H),H.length>0?(s(Q=>({...Q,centerLat:H[0].lat,centerLon:H[0].lon,radius:50})),c("Active Tornado Zone"),p("")):(s(Q=>({...Q,radius:50})),p("No active Tornado Warnings currently detected by NOAA.")),T(1),S(!1)}else{const H=w||"2013-05-20";p(`Loading archive data for ${H}...`);const Q=await TR(H);t(Q),Q.length>0?(s(tt=>({...tt,centerLat:Q[0].lat,centerLon:Q[0].lon,radius:50})),c(Q[0].description||"Historical Event"),p(""),T(0),S(!1)):p(`No records found for ${H}`)}}catch(H){console.error("Error loading data:",H),p("Error loading data. Please try again.")}finally{d(!1)}},[]);he.useEffect(()=>{O("historical","2013-05-20")},[O]),he.useEffect(()=>{if(g!=="live")return;const A=setInterval(()=>{O("live")},6e4);return()=>clearInterval(A)},[g,O]);const U=he.useCallback(A=>{if(M.current!==void 0){const Q=(A-M.current)/1e4;T(tt=>{const ht=tt+Q;return ht>=1?(S(!1),1):ht})}M.current=A,x&&(v.current=requestAnimationFrame(U))},[x]);he.useEffect(()=>(x?(T(A=>A>=1?0:A),M.current=performance.now(),v.current=requestAnimationFrame(U)):cancelAnimationFrame(v.current),()=>cancelAnimationFrame(v.current)),[x,U]);const L=(A,w,H)=>{s(Q=>({...Q,centerLat:A,centerLon:w})),c(H)},P=(A,w)=>{_(A),O(A,w)},I=()=>{S(!x)},z=A=>{T(A),x&&S(!1)},j=()=>{T(0),S(!0)};return wt.jsxs("div",{className:"w-full h-screen relative bg-[#f0f9ff] overflow-hidden",children:[wt.jsx(RR,{onLocationSelect:L,currentLocationName:l,onModeChange:P,mode:g}),h&&wt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/60 z-40 text-white backdrop-blur-sm",children:wt.jsxs("div",{className:"flex flex-col items-center",children:[wt.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mb-4"}),wt.jsx("p",{className:"font-mono text-sm font-semibold tracking-wide",children:m})]})}),!h&&r.length===0&&wt.jsx("div",{className:"absolute top-36 left-1/2 transform -translate-x-1/2 z-30 bg-black/50 border border-white/10 px-6 py-3 rounded-full pointer-events-none shadow-xl backdrop-blur-xl",children:wt.jsxs("p",{className:"text-gray-300 text-sm font-mono flex items-center",children:[wt.jsx("span",{className:`w-2 h-2 rounded-full mr-2 ${g==="live"?"bg-red-500":"bg-yellow-500"}`}),g==="live"?"NOAA: No Active Tornado Warnings":"Archive: No events in view"]})}),wt.jsx(MR,{config:i,tornadoes:r,locationName:l,playbackProgress:b}),wt.jsx(CR,{isPlaying:x,progress:b,onTogglePlay:I,onProgressChange:z,onReplay:j}),wt.jsx("div",{className:"absolute bottom-6 left-6 z-10 pointer-events-none",children:wt.jsxs("div",{className:"bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl text-xs font-mono",children:[wt.jsx("h3",{className:`${g==="live"?"text-red-400":"text-yellow-400"} font-bold mb-2 uppercase tracking-wider`,children:g==="live"?"Active Tracking":"Archive Viewer"}),wt.jsxs("div",{className:"space-y-1 text-gray-400",children:[wt.jsxs("p",{children:["Tornadoes Detected: ",wt.jsx("span",{className:"text-white font-bold",children:r.length})]}),wt.jsxs("p",{children:["Data Source: ",wt.jsx("span",{className:"text-yellow-400 font-medium",children:g==="live"?"NOAA / NWS API":"Historical Archive"})]}),wt.jsxs("p",{children:["Status: ",wt.jsx("span",{className:r.length>0?g==="live"?"text-red-400 animate-pulse font-bold":"text-yellow-400 font-bold":"text-emerald-400 font-bold",children:r.length>0?g==="live"?"WARNINGS ACTIVE":"EVENT LOADED":"ALL CLEAR"})]})]})]})}),wt.jsxs("div",{className:"absolute bottom-6 right-6 z-10 text-right pointer-events-none",children:[wt.jsx("p",{className:"text-[10px] text-white/90 font-medium",children:"SkyWeave Engine v2.0 <Shahnab>"}),wt.jsx("p",{className:"text-[10px] text-white/60",children:"Real-Time Volumetric Viz"})]})]})},Kv=document.getElementById("root");if(!Kv)throw new Error("Failed to find the root element");const DR=hS.createRoot(Kv);DR.render(wt.jsx(wR,{}));
