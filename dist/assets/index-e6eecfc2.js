function vk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _k(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _T={exports:{}},Eh={},wT={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),wk=Symbol.for("react.portal"),Ek=Symbol.for("react.fragment"),Tk=Symbol.for("react.strict_mode"),Sk=Symbol.for("react.profiler"),Ik=Symbol.for("react.provider"),xk=Symbol.for("react.context"),Ak=Symbol.for("react.forward_ref"),Ck=Symbol.for("react.suspense"),Pk=Symbol.for("react.memo"),Rk=Symbol.for("react.lazy"),F0=Symbol.iterator;function kk(t){return t===null||typeof t!="object"?null:(t=F0&&t[F0]||t["@@iterator"],typeof t=="function"?t:null)}var ET={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},TT=Object.assign,ST={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||ET}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function IT(){}IT.prototype=Eo.prototype;function ig(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||ET}var sg=ig.prototype=new IT;sg.constructor=ig;TT(sg,Eo.prototype);sg.isPureReactComponent=!0;var $0=Array.isArray,xT=Object.prototype.hasOwnProperty,og={current:null},AT={key:!0,ref:!0,__self:!0,__source:!0};function CT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xT.call(e,r)&&!AT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pl,type:t,key:s,ref:o,props:i,_owner:og.current}}function bk(t,e){return{$$typeof:Pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ag(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pl}function Dk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var U0=/\/+/g;function Hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dk(""+t.key):e.toString(36)}function Hu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pl:case wk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hd(o,0):r,$0(i)?(n="",t!=null&&(n=t.replace(U0,"$&/")+"/"),Hu(i,e,n,"",function(c){return c})):i!=null&&(ag(i)&&(i=bk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(U0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hd(s,a);o+=Hu(s,e,n,l,i)}else if(l=kk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hd(s,a++),o+=Hu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hu(t,e,n){if(t==null)return t;var r=[],i=0;return Hu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Vk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},qu={transition:null},Nk={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:qu,ReactCurrentOwner:og};ie.Children={map:hu,forEach:function(t,e,n){hu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hu(t,function(){e++}),e},toArray:function(t){return hu(t,function(e){return e})||[]},only:function(t){if(!ag(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Eo;ie.Fragment=Ek;ie.Profiler=Sk;ie.PureComponent=ig;ie.StrictMode=Tk;ie.Suspense=Ck;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nk;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=TT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=og.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xT.call(e,l)&&!AT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Pl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:xk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ik,_context:t},t.Consumer=t};ie.createElement=CT;ie.createFactory=function(t){var e=CT.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:Ak,render:t}};ie.isValidElement=ag;ie.lazy=function(t){return{$$typeof:Rk,_payload:{_status:-1,_result:t},_init:Vk}};ie.memo=function(t,e){return{$$typeof:Pk,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=qu.transition;qu.transition={};try{t()}finally{qu.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Pt.current.useCallback(t,e)};ie.useContext=function(t){return Pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Pt.current.useEffect(t,e)};ie.useId=function(){return Pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};ie.useRef=function(t){return Pt.current.useRef(t)};ie.useState=function(t){return Pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Pt.current.useTransition()};ie.version="18.2.0";wT.exports=ie;var D=wT.exports;const Be=_k(D),Mk=vk({__proto__:null,default:Be},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ok=D,Lk=Symbol.for("react.element"),jk=Symbol.for("react.fragment"),Fk=Object.prototype.hasOwnProperty,$k=Ok.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uk={key:!0,ref:!0,__self:!0,__source:!0};function PT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fk.call(e,r)&&!Uk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Lk,type:t,key:s,ref:o,props:i,_owner:$k.current}}Eh.Fragment=jk;Eh.jsx=PT;Eh.jsxs=PT;_T.exports=Eh;var y=_T.exports,cp={},RT={exports:{}},Yt={},kT={exports:{}},bT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var K=B.length;B.push(G);e:for(;0<K;){var me=K-1>>>1,ce=B[me];if(0<i(ce,G))B[me]=G,B[K]=ce,K=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],K=B.pop();if(K!==G){B[0]=K;e:for(var me=0,ce=B.length,ge=ce>>>1;me<ge;){var Et=2*(me+1)-1,kt=B[Et],Tt=Et+1,Ge=B[Tt];if(0>i(kt,K))Tt<ce&&0>i(Ge,kt)?(B[me]=Ge,B[Tt]=K,me=Tt):(B[me]=kt,B[Et]=K,me=Et);else if(Tt<ce&&0>i(Ge,K))B[me]=Ge,B[Tt]=K,me=Tt;else break e}}return G}function i(B,G){var K=B.sortIndex-G.sortIndex;return K!==0?K:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,p=3,g=!1,S=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=B)r(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function b(B){if(x=!1,T(B),!S)if(n(l)!==null)S=!0,Cn(O);else{var G=n(c);G!==null&&oe(b,G.startTime-B)}}function O(B,G){S=!1,x&&(x=!1,_(w),w=-1),g=!0;var K=p;try{for(T(G),d=n(l);d!==null&&(!(d.expirationTime>G)||B&&!k());){var me=d.callback;if(typeof me=="function"){d.callback=null,p=d.priorityLevel;var ce=me(d.expirationTime<=G);G=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&r(l),T(G)}else r(l);d=n(l)}if(d!==null)var ge=!0;else{var Et=n(c);Et!==null&&oe(b,Et.startTime-G),ge=!1}return ge}finally{d=null,p=K,g=!1}}var j=!1,I=null,w=-1,A=5,C=-1;function k(){return!(t.unstable_now()-C<A)}function N(){if(I!==null){var B=t.unstable_now();C=B;var G=!0;try{G=I(!0,B)}finally{G?R():(j=!1,I=null)}}else j=!1}var R;if(typeof v=="function")R=function(){v(N)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,An=Ze.port2;Ze.port1.onmessage=N,R=function(){An.postMessage(null)}}else R=function(){P(N,0)};function Cn(B){I=B,j||(j=!0,R())}function oe(B,G){w=P(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){S||g||(S=!0,Cn(O))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var K=p;p=G;try{return B()}finally{p=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=p;p=B;try{return G()}finally{p=K}},t.unstable_scheduleCallback=function(B,G,K){var me=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?me+K:me):K=me,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=K+ce,B={id:h++,callback:G,priorityLevel:B,startTime:K,expirationTime:ce,sortIndex:-1},K>me?(B.sortIndex=K,e(c,B),n(l)===null&&B===n(c)&&(x?(_(w),w=-1):x=!0,oe(b,K-me))):(B.sortIndex=ce,e(l,B),S||g||(S=!0,Cn(O))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var G=p;return function(){var K=p;p=G;try{return B.apply(this,arguments)}finally{p=K}}}})(bT);kT.exports=bT;var Bk=kT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT=D,Kt=Bk;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var VT=new Set,za={};function Zi(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(za[t]=e,t=0;t<e.length;t++)VT.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=Object.prototype.hasOwnProperty,zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B0={},z0={};function Wk(t){return hp.call(z0,t)?!0:hp.call(B0,t)?!1:zk.test(t)?z0[t]=!0:(B0[t]=!0,!1)}function Hk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qk(t,e,n,r){if(e===null||typeof e>"u"||Hk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lg=/[\-:]([a-z])/g;function ug(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lg,ug);ot[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lg,ug);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lg,ug);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cg(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qk(e,n,i,r)&&(n=null),r||i===null?Wk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=DT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,du=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),MT=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),pp=Symbol.for("react.suspense_list"),fg=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),OT=Symbol.for("react.offscreen"),W0=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=W0&&t[W0]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,qd;function ua(t){if(qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qd=e&&e[1]||""}return`
`+qd+t}var Gd=!1;function Kd(t,e){if(!t||Gd)return"";Gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function Gk(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=Kd(t.type,!1),t;case 11:return t=Kd(t.type.render,!1),t;case 1:return t=Kd(t.type,!0),t;default:return""}}function mp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ss:return"Portal";case dp:return"Profiler";case hg:return"StrictMode";case fp:return"Suspense";case pp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case MT:return(t.displayName||"Context")+".Consumer";case NT:return(t._context.displayName||"Context")+".Provider";case dg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fg:return e=t.displayName||null,e!==null?e:mp(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return mp(t(e))}catch{}}return null}function Kk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mp(e);case 8:return e===hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function LT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qk(t){var e=LT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fu(t){t._valueTracker||(t._valueTracker=Qk(t))}function jT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=LT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gp(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function H0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function FT(t,e){e=e.checked,e!=null&&cg(t,"checked",e,!1)}function yp(t,e){FT(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vp(t,e.type,n):e.hasOwnProperty("defaultValue")&&vp(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function q0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vp(t,e,n){(e!=="number"||wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _p(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ca(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function $T(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function K0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function UT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?UT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pu,BT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pu=pu||document.createElement("div"),pu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yk=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){Yk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function zT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function WT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xk=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ep(t,e){if(e){if(Xk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Tp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sp=null;function pg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ip=null,Ws=null,Hs=null;function Q0(t){if(t=bl(t)){if(typeof Ip!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Ah(e),Ip(t.stateNode,t.type,e))}}function HT(t){Ws?Hs?Hs.push(t):Hs=[t]:Ws=t}function qT(){if(Ws){var t=Ws,e=Hs;if(Hs=Ws=null,Q0(t),e)for(t=0;t<e.length;t++)Q0(e[t])}}function GT(t,e){return t(e)}function KT(){}var Qd=!1;function QT(t,e,n){if(Qd)return t(e,n);Qd=!0;try{return GT(t,e,n)}finally{Qd=!1,(Ws!==null||Hs!==null)&&(KT(),qT())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Ah(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var xp=!1;if(ir)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){xp=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{xp=!1}function Jk(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ia=!1,Ec=null,Tc=!1,Ap=null,Zk={onError:function(t){Ia=!0,Ec=t}};function eb(t,e,n,r,i,s,o,a,l){Ia=!1,Ec=null,Jk.apply(Zk,arguments)}function tb(t,e,n,r,i,s,o,a,l){if(eb.apply(this,arguments),Ia){if(Ia){var c=Ec;Ia=!1,Ec=null}else throw Error(U(198));Tc||(Tc=!0,Ap=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function YT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Y0(t){if(es(t)!==t)throw Error(U(188))}function nb(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Y0(i),t;if(s===r)return Y0(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function XT(t){return t=nb(t),t!==null?JT(t):null}function JT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=JT(t);if(e!==null)return e;t=t.sibling}return null}var ZT=Kt.unstable_scheduleCallback,X0=Kt.unstable_cancelCallback,rb=Kt.unstable_shouldYield,ib=Kt.unstable_requestPaint,Oe=Kt.unstable_now,sb=Kt.unstable_getCurrentPriorityLevel,mg=Kt.unstable_ImmediatePriority,eS=Kt.unstable_UserBlockingPriority,Sc=Kt.unstable_NormalPriority,ob=Kt.unstable_LowPriority,tS=Kt.unstable_IdlePriority,Th=null,Dn=null;function ab(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Th,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:cb,lb=Math.log,ub=Math.LN2;function cb(t){return t>>>=0,t===0?32:31-(lb(t)/ub|0)|0}var mu=64,gu=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ha(a):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function hb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function db(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nS(){var t=mu;return mu<<=1,!(mu&4194240)&&(mu=64),t}function Yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function fb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function rS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iS,yg,sS,oS,aS,Pp=!1,yu=[],Mr=null,Or=null,Lr=null,qa=new Map,Ga=new Map,Ir=[],pb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function J0(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function Zo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bl(e),e!==null&&yg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mb(t,e,n,r,i){switch(e){case"focusin":return Mr=Zo(Mr,t,e,n,r,i),!0;case"dragenter":return Or=Zo(Or,t,e,n,r,i),!0;case"mouseover":return Lr=Zo(Lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qa.set(s,Zo(qa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,Zo(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function lS(t){var e=Pi(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=YT(n),e!==null){t.blockedOn=e,aS(t.priority,function(){sS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sp=r,n.target.dispatchEvent(r),Sp=null}else return e=bl(n),e!==null&&yg(e),t.blockedOn=n,!1;e.shift()}return!0}function Z0(t,e,n){Gu(t)&&n.delete(e)}function gb(){Pp=!1,Mr!==null&&Gu(Mr)&&(Mr=null),Or!==null&&Gu(Or)&&(Or=null),Lr!==null&&Gu(Lr)&&(Lr=null),qa.forEach(Z0),Ga.forEach(Z0)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Pp||(Pp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,gb)))}function Ka(t){function e(i){return ea(i,t)}if(0<yu.length){ea(yu[0],t);for(var n=1;n<yu.length;n++){var r=yu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&ea(Mr,t),Or!==null&&ea(Or,t),Lr!==null&&ea(Lr,t),qa.forEach(e),Ga.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)lS(n),n.blockedOn===null&&Ir.shift()}var qs=fr.ReactCurrentBatchConfig,xc=!0;function yb(t,e,n,r){var i=fe,s=qs.transition;qs.transition=null;try{fe=1,vg(t,e,n,r)}finally{fe=i,qs.transition=s}}function vb(t,e,n,r){var i=fe,s=qs.transition;qs.transition=null;try{fe=4,vg(t,e,n,r)}finally{fe=i,qs.transition=s}}function vg(t,e,n,r){if(xc){var i=Rp(t,e,n,r);if(i===null)af(t,e,r,Ac,n),J0(t,r);else if(mb(i,t,e,n,r))r.stopPropagation();else if(J0(t,r),e&4&&-1<pb.indexOf(t)){for(;i!==null;){var s=bl(i);if(s!==null&&iS(s),s=Rp(t,e,n,r),s===null&&af(t,e,r,Ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else af(t,e,r,null,n)}}var Ac=null;function Rp(t,e,n,r){if(Ac=null,t=pg(r),t=Pi(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=YT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ac=t,null}function uS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sb()){case mg:return 1;case eS:return 4;case Sc:case ob:return 16;case tS:return 536870912;default:return 16}default:return 16}}var kr=null,_g=null,Ku=null;function cS(){if(Ku)return Ku;var t,e=_g,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ku=i.slice(t,1<r?1-r:void 0)}function Qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vu(){return!0}function e_(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vu:e_,this.isPropagationStopped=e_,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vu)},persist:function(){},isPersistent:vu}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wg=Xt(To),kl=Re({},To,{view:0,detail:0}),_b=Xt(kl),Xd,Jd,ta,Sh=Re({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Xd=t.screenX-ta.screenX,Jd=t.screenY-ta.screenY):Jd=Xd=0,ta=t),Xd)},movementY:function(t){return"movementY"in t?t.movementY:Jd}}),t_=Xt(Sh),wb=Re({},Sh,{dataTransfer:0}),Eb=Xt(wb),Tb=Re({},kl,{relatedTarget:0}),Zd=Xt(Tb),Sb=Re({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),Ib=Xt(Sb),xb=Re({},To,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ab=Xt(xb),Cb=Re({},To,{data:0}),n_=Xt(Cb),Pb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kb[t])?!!e[t]:!1}function Eg(){return bb}var Db=Re({},kl,{key:function(t){if(t.key){var e=Pb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eg,charCode:function(t){return t.type==="keypress"?Qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vb=Xt(Db),Nb=Re({},Sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),r_=Xt(Nb),Mb=Re({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eg}),Ob=Xt(Mb),Lb=Re({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),jb=Xt(Lb),Fb=Re({},Sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$b=Xt(Fb),Ub=[9,13,27,32],Tg=ir&&"CompositionEvent"in window,xa=null;ir&&"documentMode"in document&&(xa=document.documentMode);var Bb=ir&&"TextEvent"in window&&!xa,hS=ir&&(!Tg||xa&&8<xa&&11>=xa),i_=String.fromCharCode(32),s_=!1;function dS(t,e){switch(t){case"keyup":return Ub.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function zb(t,e){switch(t){case"compositionend":return fS(e);case"keypress":return e.which!==32?null:(s_=!0,i_);case"textInput":return t=e.data,t===i_&&s_?null:t;default:return null}}function Wb(t,e){if(xs)return t==="compositionend"||!Tg&&dS(t,e)?(t=cS(),Ku=_g=kr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hS&&e.locale!=="ko"?null:e.data;default:return null}}var Hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hb[t.type]:e==="textarea"}function pS(t,e,n,r){HT(r),e=Cc(e,"onChange"),0<e.length&&(n=new wg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Aa=null,Qa=null;function qb(t){xS(t,0)}function Ih(t){var e=Ps(t);if(jT(e))return t}function Gb(t,e){if(t==="change")return e}var mS=!1;if(ir){var ef;if(ir){var tf="oninput"in document;if(!tf){var a_=document.createElement("div");a_.setAttribute("oninput","return;"),tf=typeof a_.oninput=="function"}ef=tf}else ef=!1;mS=ef&&(!document.documentMode||9<document.documentMode)}function l_(){Aa&&(Aa.detachEvent("onpropertychange",gS),Qa=Aa=null)}function gS(t){if(t.propertyName==="value"&&Ih(Qa)){var e=[];pS(e,Qa,t,pg(t)),QT(qb,e)}}function Kb(t,e,n){t==="focusin"?(l_(),Aa=e,Qa=n,Aa.attachEvent("onpropertychange",gS)):t==="focusout"&&l_()}function Qb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ih(Qa)}function Yb(t,e){if(t==="click")return Ih(e)}function Xb(t,e){if(t==="input"||t==="change")return Ih(e)}function Jb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:Jb;function Ya(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hp.call(e,i)||!En(t[i],e[i]))return!1}return!0}function u_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function c_(t,e){var n=u_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=u_(n)}}function yS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vS(){for(var t=window,e=wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wc(t.document)}return e}function Sg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zb(t){var e=vS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yS(n.ownerDocument.documentElement,n)){if(r!==null&&Sg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=c_(n,s);var o=c_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e2=ir&&"documentMode"in document&&11>=document.documentMode,As=null,kp=null,Ca=null,bp=!1;function h_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bp||As==null||As!==wc(r)||(r=As,"selectionStart"in r&&Sg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ca&&Ya(Ca,r)||(Ca=r,r=Cc(kp,"onSelect"),0<r.length&&(e=new wg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=As)))}function _u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:_u("Animation","AnimationEnd"),animationiteration:_u("Animation","AnimationIteration"),animationstart:_u("Animation","AnimationStart"),transitionend:_u("Transition","TransitionEnd")},nf={},_S={};ir&&(_S=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function xh(t){if(nf[t])return nf[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _S)return nf[t]=e[n];return t}var wS=xh("animationend"),ES=xh("animationiteration"),TS=xh("animationstart"),SS=xh("transitionend"),IS=new Map,d_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){IS.set(t,e),Zi(e,[t])}for(var rf=0;rf<d_.length;rf++){var sf=d_[rf],t2=sf.toLowerCase(),n2=sf[0].toUpperCase()+sf.slice(1);ii(t2,"on"+n2)}ii(wS,"onAnimationEnd");ii(ES,"onAnimationIteration");ii(TS,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(SS,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r2=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function f_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tb(r,e,void 0,t),t.currentTarget=null}function xS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;f_(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;f_(i,a,c),s=l}}}if(Tc)throw t=Ap,Tc=!1,Ap=null,t}function _e(t,e){var n=e[Op];n===void 0&&(n=e[Op]=new Set);var r=t+"__bubble";n.has(r)||(AS(e,t,2,!1),n.add(r))}function of(t,e,n){var r=0;e&&(r|=4),AS(n,t,r,e)}var wu="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[wu]){t[wu]=!0,VT.forEach(function(n){n!=="selectionchange"&&(r2.has(n)||of(n,!1,t),of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wu]||(e[wu]=!0,of("selectionchange",!1,e))}}function AS(t,e,n,r){switch(uS(e)){case 1:var i=yb;break;case 4:i=vb;break;default:i=vg}n=i.bind(null,e,n,t),i=void 0,!xp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function af(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}QT(function(){var c=s,h=pg(n),d=[];e:{var p=IS.get(t);if(p!==void 0){var g=wg,S=t;switch(t){case"keypress":if(Qu(n)===0)break e;case"keydown":case"keyup":g=Vb;break;case"focusin":S="focus",g=Zd;break;case"focusout":S="blur",g=Zd;break;case"beforeblur":case"afterblur":g=Zd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=t_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ob;break;case wS:case ES:case TS:g=Ib;break;case SS:g=jb;break;case"scroll":g=_b;break;case"wheel":g=$b;break;case"copy":case"cut":case"paste":g=Ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=r_}var x=(e&4)!==0,P=!x&&t==="scroll",_=x?p!==null?p+"Capture":null:p;x=[];for(var v=c,T;v!==null;){T=v;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,_!==null&&(b=Ha(v,_),b!=null&&x.push(Ja(v,b,T)))),P)break;v=v.return}0<x.length&&(p=new g(p,S,null,n,h),d.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Sp&&(S=n.relatedTarget||n.fromElement)&&(Pi(S)||S[sr]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=c,S=S?Pi(S):null,S!==null&&(P=es(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=c),g!==S)){if(x=t_,b="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=r_,b="onPointerLeave",_="onPointerEnter",v="pointer"),P=g==null?p:Ps(g),T=S==null?p:Ps(S),p=new x(b,v+"leave",g,n,h),p.target=P,p.relatedTarget=T,b=null,Pi(h)===c&&(x=new x(_,v+"enter",S,n,h),x.target=T,x.relatedTarget=P,b=x),P=b,g&&S)t:{for(x=g,_=S,v=0,T=x;T;T=ps(T))v++;for(T=0,b=_;b;b=ps(b))T++;for(;0<v-T;)x=ps(x),v--;for(;0<T-v;)_=ps(_),T--;for(;v--;){if(x===_||_!==null&&x===_.alternate)break t;x=ps(x),_=ps(_)}x=null}else x=null;g!==null&&p_(d,p,g,x,!1),S!==null&&P!==null&&p_(d,P,S,x,!0)}}e:{if(p=c?Ps(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var O=Gb;else if(o_(p))if(mS)O=Xb;else{O=Qb;var j=Kb}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=Yb);if(O&&(O=O(t,c))){pS(d,O,n,h);break e}j&&j(t,p,c),t==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&vp(p,"number",p.value)}switch(j=c?Ps(c):window,t){case"focusin":(o_(j)||j.contentEditable==="true")&&(As=j,kp=c,Ca=null);break;case"focusout":Ca=kp=As=null;break;case"mousedown":bp=!0;break;case"contextmenu":case"mouseup":case"dragend":bp=!1,h_(d,n,h);break;case"selectionchange":if(e2)break;case"keydown":case"keyup":h_(d,n,h)}var I;if(Tg)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else xs?dS(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(hS&&n.locale!=="ko"&&(xs||w!=="onCompositionStart"?w==="onCompositionEnd"&&xs&&(I=cS()):(kr=h,_g="value"in kr?kr.value:kr.textContent,xs=!0)),j=Cc(c,w),0<j.length&&(w=new n_(w,t,null,n,h),d.push({event:w,listeners:j}),I?w.data=I:(I=fS(n),I!==null&&(w.data=I)))),(I=Bb?zb(t,n):Wb(t,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(h=new n_("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=I))}xS(d,e)})}function Ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ha(t,n),s!=null&&r.unshift(Ja(t,s,i)),s=Ha(t,e),s!=null&&r.push(Ja(t,s,i))),t=t.return}return r}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function p_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ha(n,s),l!=null&&o.unshift(Ja(n,l,a))):i||(l=Ha(n,s),l!=null&&o.push(Ja(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var i2=/\r\n?/g,s2=/\u0000|\uFFFD/g;function m_(t){return(typeof t=="string"?t:""+t).replace(i2,`
`).replace(s2,"")}function Eu(t,e,n){if(e=m_(e),m_(t)!==e&&n)throw Error(U(425))}function Pc(){}var Dp=null,Vp=null;function Np(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mp=typeof setTimeout=="function"?setTimeout:void 0,o2=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,a2=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(t){return g_.resolve(null).then(t).catch(l2)}:Mp;function l2(t){setTimeout(function(){throw t})}function lf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function y_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),kn="__reactFiber$"+So,Za="__reactProps$"+So,sr="__reactContainer$"+So,Op="__reactEvents$"+So,u2="__reactListeners$"+So,c2="__reactHandles$"+So;function Pi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=y_(t);t!==null;){if(n=t[kn])return n;t=y_(t)}return e}t=n,n=t.parentNode}return null}function bl(t){return t=t[kn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Ah(t){return t[Za]||null}var Lp=[],Rs=-1;function si(t){return{current:t}}function Te(t){0>Rs||(t.current=Lp[Rs],Lp[Rs]=null,Rs--)}function ye(t,e){Rs++,Lp[Rs]=t.current,t.current=e}var Yr={},_t=si(Yr),Mt=si(!1),Fi=Yr;function eo(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function Rc(){Te(Mt),Te(_t)}function v_(t,e,n){if(_t.current!==Yr)throw Error(U(168));ye(_t,e),ye(Mt,n)}function CS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,Kk(t)||"Unknown",i));return Re({},n,r)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Fi=_t.current,ye(_t,t),ye(Mt,Mt.current),!0}function __(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=CS(t,e,Fi),r.__reactInternalMemoizedMergedChildContext=t,Te(Mt),Te(_t),ye(_t,t)):Te(Mt),ye(Mt,n)}var Gn=null,Ch=!1,uf=!1;function PS(t){Gn===null?Gn=[t]:Gn.push(t)}function h2(t){Ch=!0,PS(t)}function oi(){if(!uf&&Gn!==null){uf=!0;var t=0,e=fe;try{var n=Gn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,Ch=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(t+1)),ZT(mg,oi),i}finally{fe=e,uf=!1}}return null}var ks=[],bs=0,bc=null,Dc=0,tn=[],nn=0,$i=null,Kn=1,Qn="";function Si(t,e){ks[bs++]=Dc,ks[bs++]=bc,bc=t,Dc=e}function RS(t,e,n){tn[nn++]=Kn,tn[nn++]=Qn,tn[nn++]=$i,$i=t;var r=Kn;t=Qn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kn=1<<32-yn(e)+i|n<<i|r,Qn=s+t}else Kn=1<<s|n<<i|r,Qn=t}function Ig(t){t.return!==null&&(Si(t,1),RS(t,1,0))}function xg(t){for(;t===bc;)bc=ks[--bs],ks[bs]=null,Dc=ks[--bs],ks[bs]=null;for(;t===$i;)$i=tn[--nn],tn[nn]=null,Qn=tn[--nn],tn[nn]=null,Kn=tn[--nn],tn[nn]=null}var Ht=null,zt=null,xe=!1,gn=null;function kS(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function w_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,zt=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$i!==null?{id:Kn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,zt=null,!0):!1;default:return!1}}function jp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fp(t){if(xe){var e=zt;if(e){var n=e;if(!w_(t,e)){if(jp(t))throw Error(U(418));e=jr(n.nextSibling);var r=Ht;e&&w_(t,e)?kS(r,n):(t.flags=t.flags&-4097|2,xe=!1,Ht=t)}}else{if(jp(t))throw Error(U(418));t.flags=t.flags&-4097|2,xe=!1,Ht=t}}}function E_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Tu(t){if(t!==Ht)return!1;if(!xe)return E_(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Np(t.type,t.memoizedProps)),e&&(e=zt)){if(jp(t))throw bS(),Error(U(418));for(;e;)kS(t,e),e=jr(e.nextSibling)}if(E_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Ht?jr(t.stateNode.nextSibling):null;return!0}function bS(){for(var t=zt;t;)t=jr(t.nextSibling)}function to(){zt=Ht=null,xe=!1}function Ag(t){gn===null?gn=[t]:gn.push(t)}var d2=fr.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Vc=si(null),Nc=null,Ds=null,Cg=null;function Pg(){Cg=Ds=Nc=null}function Rg(t){var e=Vc.current;Te(Vc),t._currentValue=e}function $p(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){Nc=t,Cg=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(Cg!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(Nc===null)throw Error(U(308));Ds=t,Nc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Ri=null;function kg(t){Ri===null?Ri=[t]:Ri.push(t)}function DS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kg(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function bg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function VS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,kg(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function Yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gg(t,n)}}function T_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,r){var i=t.updateQueue;Sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,x=a;switch(p=e,g=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){d=S.call(g,d,p);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,p=typeof S=="function"?S.call(g,d,p):S,p==null)break e;d=Re({},d,p);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=d):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bi|=o,t.lanes=o,t.memoizedState=d}}function S_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var NS=new DT.Component().refs;function Up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ph={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=Ur(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(vn(e,t,i,r),Yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=Ur(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(vn(e,t,i,r),Yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=Ur(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(vn(e,t,r,n),Yu(e,t,r))}};function I_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,r)||!Ya(i,s):!0}function MS(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Ot(e)?Fi:_t.current,r=e.contextTypes,s=(r=r!=null)?eo(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ph,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function x_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ph.enqueueReplaceState(e,e.state,null)}function Bp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=NS,bg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Ot(e)?Fi:_t.current,i.context=eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Up(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ph.enqueueReplaceState(i,i.state,null),Mc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===NS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Su(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function A_(t){var e=t._init;return e(t._payload)}function OS(t){function e(_,v){if(t){var T=_.deletions;T===null?(_.deletions=[v],_.flags|=16):T.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=Br(_,v),_.index=0,_.sibling=null,_}function s(_,v,T){return _.index=T,t?(T=_.alternate,T!==null?(T=T.index,T<v?(_.flags|=2,v):T):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,v,T,b){return v===null||v.tag!==6?(v=gf(T,_.mode,b),v.return=_,v):(v=i(v,T),v.return=_,v)}function l(_,v,T,b){var O=T.type;return O===Is?h(_,v,T.props.children,b,T.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Tr&&A_(O)===v.type)?(b=i(v,T.props),b.ref=na(_,v,T),b.return=_,b):(b=nc(T.type,T.key,T.props,null,_.mode,b),b.ref=na(_,v,T),b.return=_,b)}function c(_,v,T,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=yf(T,_.mode,b),v.return=_,v):(v=i(v,T.children||[]),v.return=_,v)}function h(_,v,T,b,O){return v===null||v.tag!==7?(v=Oi(T,_.mode,b,O),v.return=_,v):(v=i(v,T),v.return=_,v)}function d(_,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gf(""+v,_.mode,T),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case du:return T=nc(v.type,v.key,v.props,null,_.mode,T),T.ref=na(_,null,v),T.return=_,T;case Ss:return v=yf(v,_.mode,T),v.return=_,v;case Tr:var b=v._init;return d(_,b(v._payload),T)}if(ca(v)||Xo(v))return v=Oi(v,_.mode,T,null),v.return=_,v;Su(_,v)}return null}function p(_,v,T,b){var O=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return O!==null?null:a(_,v,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case du:return T.key===O?l(_,v,T,b):null;case Ss:return T.key===O?c(_,v,T,b):null;case Tr:return O=T._init,p(_,v,O(T._payload),b)}if(ca(T)||Xo(T))return O!==null?null:h(_,v,T,b,null);Su(_,T)}return null}function g(_,v,T,b,O){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(T)||null,a(v,_,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case du:return _=_.get(b.key===null?T:b.key)||null,l(v,_,b,O);case Ss:return _=_.get(b.key===null?T:b.key)||null,c(v,_,b,O);case Tr:var j=b._init;return g(_,v,T,j(b._payload),O)}if(ca(b)||Xo(b))return _=_.get(T)||null,h(v,_,b,O,null);Su(v,b)}return null}function S(_,v,T,b){for(var O=null,j=null,I=v,w=v=0,A=null;I!==null&&w<T.length;w++){I.index>w?(A=I,I=null):A=I.sibling;var C=p(_,I,T[w],b);if(C===null){I===null&&(I=A);break}t&&I&&C.alternate===null&&e(_,I),v=s(C,v,w),j===null?O=C:j.sibling=C,j=C,I=A}if(w===T.length)return n(_,I),xe&&Si(_,w),O;if(I===null){for(;w<T.length;w++)I=d(_,T[w],b),I!==null&&(v=s(I,v,w),j===null?O=I:j.sibling=I,j=I);return xe&&Si(_,w),O}for(I=r(_,I);w<T.length;w++)A=g(I,_,w,T[w],b),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?w:A.key),v=s(A,v,w),j===null?O=A:j.sibling=A,j=A);return t&&I.forEach(function(k){return e(_,k)}),xe&&Si(_,w),O}function x(_,v,T,b){var O=Xo(T);if(typeof O!="function")throw Error(U(150));if(T=O.call(T),T==null)throw Error(U(151));for(var j=O=null,I=v,w=v=0,A=null,C=T.next();I!==null&&!C.done;w++,C=T.next()){I.index>w?(A=I,I=null):A=I.sibling;var k=p(_,I,C.value,b);if(k===null){I===null&&(I=A);break}t&&I&&k.alternate===null&&e(_,I),v=s(k,v,w),j===null?O=k:j.sibling=k,j=k,I=A}if(C.done)return n(_,I),xe&&Si(_,w),O;if(I===null){for(;!C.done;w++,C=T.next())C=d(_,C.value,b),C!==null&&(v=s(C,v,w),j===null?O=C:j.sibling=C,j=C);return xe&&Si(_,w),O}for(I=r(_,I);!C.done;w++,C=T.next())C=g(I,_,w,C.value,b),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?w:C.key),v=s(C,v,w),j===null?O=C:j.sibling=C,j=C);return t&&I.forEach(function(N){return e(_,N)}),xe&&Si(_,w),O}function P(_,v,T,b){if(typeof T=="object"&&T!==null&&T.type===Is&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case du:e:{for(var O=T.key,j=v;j!==null;){if(j.key===O){if(O=T.type,O===Is){if(j.tag===7){n(_,j.sibling),v=i(j,T.props.children),v.return=_,_=v;break e}}else if(j.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Tr&&A_(O)===j.type){n(_,j.sibling),v=i(j,T.props),v.ref=na(_,j,T),v.return=_,_=v;break e}n(_,j);break}else e(_,j);j=j.sibling}T.type===Is?(v=Oi(T.props.children,_.mode,b,T.key),v.return=_,_=v):(b=nc(T.type,T.key,T.props,null,_.mode,b),b.ref=na(_,v,T),b.return=_,_=b)}return o(_);case Ss:e:{for(j=T.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(_,v.sibling),v=i(v,T.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=yf(T,_.mode,b),v.return=_,_=v}return o(_);case Tr:return j=T._init,P(_,v,j(T._payload),b)}if(ca(T))return S(_,v,T,b);if(Xo(T))return x(_,v,T,b);Su(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,T),v.return=_,_=v):(n(_,v),v=gf(T,_.mode,b),v.return=_,_=v),o(_)):n(_,v)}return P}var no=OS(!0),LS=OS(!1),Dl={},Vn=si(Dl),el=si(Dl),tl=si(Dl);function ki(t){if(t===Dl)throw Error(U(174));return t}function Dg(t,e){switch(ye(tl,e),ye(el,t),ye(Vn,Dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wp(e,t)}Te(Vn),ye(Vn,e)}function ro(){Te(Vn),Te(el),Te(tl)}function jS(t){ki(tl.current);var e=ki(Vn.current),n=wp(e,t.type);e!==n&&(ye(el,t),ye(Vn,n))}function Vg(t){el.current===t&&(Te(Vn),Te(el))}var Ae=si(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function Ng(){for(var t=0;t<cf.length;t++)cf[t]._workInProgressVersionPrimary=null;cf.length=0}var Xu=fr.ReactCurrentDispatcher,hf=fr.ReactCurrentBatchConfig,Ui=0,Pe=null,We=null,Qe=null,Lc=!1,Pa=!1,nl=0,f2=0;function ht(){throw Error(U(321))}function Mg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function Og(t,e,n,r,i,s){if(Ui=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xu.current=t===null||t.memoizedState===null?y2:v2,t=n(r,i),Pa){s=0;do{if(Pa=!1,nl=0,25<=s)throw Error(U(301));s+=1,Qe=We=null,e.updateQueue=null,Xu.current=_2,t=n(r,i)}while(Pa)}if(Xu.current=jc,e=We!==null&&We.next!==null,Ui=0,Qe=We=Pe=null,Lc=!1,e)throw Error(U(300));return t}function Lg(){var t=nl!==0;return nl=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function ln(){if(We===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Qe===null?Pe.memoizedState:Qe.next;if(e!==null)Qe=e,We=t;else{if(t===null)throw Error(U(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function rl(t,e){return typeof e=="function"?e(t):e}function df(t){var e=ln(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ui&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Pe.lanes|=h,Bi|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,En(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ff(t){var e=ln(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function FS(){}function $S(t,e){var n=Pe,r=ln(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,jg(zS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,il(9,BS.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(U(349));Ui&30||US(n,e,i)}return i}function US(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function BS(t,e,n,r){e.value=n,e.getSnapshot=r,WS(e)&&HS(t)}function zS(t,e,n){return n(function(){WS(e)&&HS(t)})}function WS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function HS(t){var e=or(t,1);e!==null&&vn(e,t,1,-1)}function C_(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e.queue=t,t=t.dispatch=g2.bind(null,Pe,t),[e.memoizedState,t]}function il(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qS(){return ln().memoizedState}function Ju(t,e,n,r){var i=Rn();Pe.flags|=t,i.memoizedState=il(1|e,n,void 0,r===void 0?null:r)}function Rh(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&Mg(r,o.deps)){i.memoizedState=il(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=il(1|e,n,s,r)}function P_(t,e){return Ju(8390656,8,t,e)}function jg(t,e){return Rh(2048,8,t,e)}function GS(t,e){return Rh(4,2,t,e)}function KS(t,e){return Rh(4,4,t,e)}function QS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YS(t,e,n){return n=n!=null?n.concat([t]):null,Rh(4,4,QS.bind(null,e,t),n)}function Fg(){}function XS(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JS(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ZS(t,e,n){return Ui&21?(En(n,e)||(n=nS(),Pe.lanes|=n,Bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function p2(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=hf.transition;hf.transition={};try{t(!1),e()}finally{fe=n,hf.transition=r}}function eI(){return ln().memoizedState}function m2(t,e,n){var r=Ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tI(t))nI(e,n);else if(n=DS(t,e,n,r),n!==null){var i=At();vn(n,t,r,i),rI(n,e,r)}}function g2(t,e,n){var r=Ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tI(t))nI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,En(a,o)){var l=e.interleaved;l===null?(i.next=i,kg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=DS(t,e,i,r),n!==null&&(i=At(),vn(n,t,r,i),rI(n,e,r))}}function tI(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function nI(t,e){Pa=Lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gg(t,n)}}var jc={readContext:an,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},y2={readContext:an,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:P_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4194308,4,QS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ju(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=m2.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:C_,useDebugValue:Fg,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=C_(!1),e=t[0];return t=p2.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Rn();if(xe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Je===null)throw Error(U(349));Ui&30||US(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,P_(zS.bind(null,r,s,t),[t]),r.flags|=2048,il(9,BS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rn(),e=Je.identifierPrefix;if(xe){var n=Qn,r=Kn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=nl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=f2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},v2={readContext:an,useCallback:XS,useContext:an,useEffect:jg,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:KS,useMemo:JS,useReducer:df,useRef:qS,useState:function(){return df(rl)},useDebugValue:Fg,useDeferredValue:function(t){var e=ln();return ZS(e,We.memoizedState,t)},useTransition:function(){var t=df(rl)[0],e=ln().memoizedState;return[t,e]},useMutableSource:FS,useSyncExternalStore:$S,useId:eI,unstable_isNewReconciler:!1},_2={readContext:an,useCallback:XS,useContext:an,useEffect:jg,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:KS,useMemo:JS,useReducer:ff,useRef:qS,useState:function(){return ff(rl)},useDebugValue:Fg,useDeferredValue:function(t){var e=ln();return We===null?e.memoizedState=t:ZS(e,We.memoizedState,t)},useTransition:function(){var t=ff(rl)[0],e=ln().memoizedState;return[t,e]},useMutableSource:FS,useSyncExternalStore:$S,useId:eI,unstable_isNewReconciler:!1};function io(t,e){try{var n="",r=e;do n+=Gk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var w2=typeof WeakMap=="function"?WeakMap:Map;function iI(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$c||($c=!0,Zp=r),zp(t,e)},n}function sI(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zp(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function R_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new w2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=N2.bind(null,t,e,n),e.then(t,t))}function k_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function b_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var E2=fr.ReactCurrentOwner,Nt=!1;function xt(t,e,n,r){e.child=t===null?LS(e,null,n,r):no(e,t.child,n,r)}function D_(t,e,n,r,i){n=n.render;var s=e.ref;return Gs(e,i),r=Og(t,e,n,r,s,i),n=Lg(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(xe&&n&&Ig(e),e.flags|=1,xt(t,e,r,i),e.child)}function V_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oI(t,e,s,r,i)):(t=nc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function oI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ya(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,ar(t,e,i)}return Wp(t,e,n,r,i)}function aI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Ns,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Ns,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Ns,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Ns,Bt),Bt|=r;return xt(t,e,i,n),e.child}function lI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wp(t,e,n,r,i){var s=Ot(n)?Fi:_t.current;return s=eo(e,s),Gs(e,i),n=Og(t,e,n,r,s,i),r=Lg(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(xe&&r&&Ig(e),e.flags|=1,xt(t,e,n,i),e.child)}function N_(t,e,n,r,i){if(Ot(n)){var s=!0;kc(e)}else s=!1;if(Gs(e,i),e.stateNode===null)Zu(t,e),MS(e,n,r),Bp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=an(c):(c=Ot(n)?Fi:_t.current,c=eo(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&x_(e,o,r,c),Sr=!1;var p=e.memoizedState;o.state=p,Mc(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Mt.current||Sr?(typeof h=="function"&&(Up(e,n,h,r),l=e.memoizedState),(a=Sr||I_(e,n,a,r,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,VS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fn(e.type,a),o.props=c,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=an(l):(l=Ot(n)?Fi:_t.current,l=eo(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&x_(e,o,r,l),Sr=!1,p=e.memoizedState,o.state=p,Mc(e,r,o,i);var S=e.memoizedState;a!==d||p!==S||Mt.current||Sr?(typeof g=="function"&&(Up(e,n,g,r),S=e.memoizedState),(c=Sr||I_(e,n,c,r,p,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Hp(t,e,n,r,s,i)}function Hp(t,e,n,r,i,s){lI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&__(e,n,!1),ar(t,e,s);r=e.stateNode,E2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):xt(t,e,a,s),e.memoizedState=r.state,i&&__(e,n,!0),e.child}function uI(t){var e=t.stateNode;e.pendingContext?v_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&v_(t,e.context,!1),Dg(t,e.containerInfo)}function M_(t,e,n,r,i){return to(),Ag(i),e.flags|=256,xt(t,e,n,r),e.child}var qp={dehydrated:null,treeContext:null,retryLane:0};function Gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function cI(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ae,i&1),t===null)return Fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dh(o,r,0,null),t=Oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gp(n),e.memoizedState=qp,t):$g(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return T2(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qp,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $g(t,e){return e=Dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Iu(t,e,n,r){return r!==null&&Ag(r),no(e,t.child,null,n),t=$g(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pf(Error(U(422))),Iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dh({mode:"visible",children:r.children},i,0,null),s=Oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=Gp(o),e.memoizedState=qp,s);if(!(e.mode&1))return Iu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=pf(s,r,void 0),Iu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),vn(r,t,i,-1))}return qg(),r=pf(Error(U(421))),Iu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=M2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=jr(i.nextSibling),Ht=e,xe=!0,gn=null,t!==null&&(tn[nn++]=Kn,tn[nn++]=Qn,tn[nn++]=$i,Kn=t.id,Qn=t.overflow,$i=e),e=$g(e,r.children),e.flags|=4096,e)}function O_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$p(t.return,e,n)}function mf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O_(t,n,e);else if(t.tag===19)O_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mf(e,!0,n,null,s);break;case"together":mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function S2(t,e,n){switch(e.tag){case 3:uI(e),to();break;case 5:jS(e);break;case 1:Ot(e.type)&&kc(e);break;case 4:Dg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Vc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?cI(t,e,n):(ye(Ae,Ae.current&1),t=ar(t,e,n),t!==null?t.sibling:null);ye(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,aI(t,e,n)}return ar(t,e,n)}var dI,Kp,fI,pI;dI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kp=function(){};fI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ki(Vn.current);var s=null;switch(n){case"input":i=gp(t,i),r=gp(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=_p(t,i),r=_p(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pc)}Ep(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pI=function(t,e,n,r){n!==r&&(e.flags|=4)};function ra(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function I2(t,e,n){var r=e.pendingProps;switch(xg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Ot(e.type)&&Rc(),dt(e),null;case 3:return r=e.stateNode,ro(),Te(Mt),Te(_t),Ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(nm(gn),gn=null))),Kp(t,e),dt(e),null;case 5:Vg(e);var i=ki(tl.current);if(n=e.type,t!==null&&e.stateNode!=null)fI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return dt(e),null}if(t=ki(Vn.current),Tu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[Za]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<da.length;i++)_e(da[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":H0(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":G0(r,s),_e("invalid",r)}Ep(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Eu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Eu(r.textContent,a,t),i=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":fu(r),q0(r,s,!0);break;case"textarea":fu(r),K0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=UT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[Za]=r,dI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tp(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<da.length;i++)_e(da[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":H0(t,r),i=gp(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),_e("invalid",t);break;case"textarea":G0(t,r),i=_p(t,r),_e("invalid",t);break;default:i=r}Ep(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?WT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&BT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(t,l):typeof l=="number"&&Wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&cg(t,s,l,o))}switch(n){case"input":fu(t),q0(t,r,!1);break;case"textarea":fu(t),K0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)pI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ki(tl.current),ki(Vn.current),Tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return dt(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&zt!==null&&e.mode&1&&!(e.flags&128))bS(),to(),e.flags|=98560,s=!1;else if(s=Tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[kn]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else gn!==null&&(nm(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?He===0&&(He=3):qg())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return ro(),Kp(t,e),t===null&&Xa(e.stateNode.containerInfo),dt(e),null;case 10:return Rg(e.type._context),dt(e),null;case 17:return Ot(e.type)&&Rc(),dt(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ra(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Oc(t),o!==null){for(e.flags|=128,ra(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>so&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304)}else{if(!r)if(t=Oc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return dt(e),null}else 2*Oe()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Ae.current,ye(Ae,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Hg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function x2(t,e){switch(xg(e),e.tag){case 1:return Ot(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),Te(Mt),Te(_t),Ng(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vg(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return ro(),null;case 10:return Rg(e.type._context),null;case 22:case 23:return Hg(),null;case 24:return null;default:return null}}var xu=!1,gt=!1,A2=typeof WeakSet=="function"?WeakSet:Set,q=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Qp(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var L_=!1;function C2(t,e){if(Dp=xc,t=vS(),Sg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vp={focusedElem:t,selectionRange:n},xc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,P=S.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?x:fn(e.type,x),P);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Ve(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return S=L_,L_=!1,S}function Ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qp(e,n,s)}i=i.next}while(i!==r)}}function kh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mI(t){var e=t.alternate;e!==null&&(t.alternate=null,mI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[Za],delete e[Op],delete e[u2],delete e[c2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gI(t){return t.tag===5||t.tag===3||t.tag===4}function j_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pc));else if(r!==4&&(t=t.child,t!==null))for(Xp(t,e,n),t=t.sibling;t!==null;)Xp(t,e,n),t=t.sibling}function Jp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jp(t,e,n),t=t.sibling;t!==null;)Jp(t,e,n),t=t.sibling}var tt=null,pn=!1;function vr(t,e,n){for(n=n.child;n!==null;)yI(t,e,n),n=n.sibling}function yI(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Th,n)}catch{}switch(n.tag){case 5:gt||Vs(n,e);case 6:var r=tt,i=pn;tt=null,vr(t,e,n),tt=r,pn=i,tt!==null&&(pn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(pn?(t=tt,n=n.stateNode,t.nodeType===8?lf(t.parentNode,n):t.nodeType===1&&lf(t,n),Ka(t)):lf(tt,n.stateNode));break;case 4:r=tt,i=pn,tt=n.stateNode.containerInfo,pn=!0,vr(t,e,n),tt=r,pn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qp(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!gt&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,vr(t,e,n),gt=r):vr(t,e,n);break;default:vr(t,e,n)}}function F_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A2),e.forEach(function(r){var i=O2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,pn=!1;break e;case 3:tt=a.stateNode.containerInfo,pn=!0;break e;case 4:tt=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(tt===null)throw Error(U(160));yI(s,o,i),tt=null,pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vI(e,t),e=e.sibling}function vI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),Pn(t),r&4){try{Ra(3,t,t.return),kh(3,t)}catch(x){Ve(t,t.return,x)}try{Ra(5,t,t.return)}catch(x){Ve(t,t.return,x)}}break;case 1:hn(e,t),Pn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(hn(e,t),Pn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(x){Ve(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&FT(i,s),Tp(a,o);var c=Tp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?WT(i,d):h==="dangerouslySetInnerHTML"?BT(i,d):h==="children"?Wa(i,d):cg(i,h,d,c)}switch(a){case"input":yp(i,s);break;case"textarea":$T(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?zs(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?zs(i,!!s.multiple,s.defaultValue,!0):zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Za]=s}catch(x){Ve(t,t.return,x)}}break;case 6:if(hn(e,t),Pn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ve(t,t.return,x)}}break;case 3:if(hn(e,t),Pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(x){Ve(t,t.return,x)}break;case 4:hn(e,t),Pn(t);break;case 13:hn(e,t),Pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zg=Oe())),r&4&&F_(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(c=gt)||h,hn(e,t),gt=c):hn(e,t),Pn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(d=q=h;q!==null;){switch(p=q,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ra(4,p,p.return);break;case 1:Vs(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(x){Ve(r,n,x)}}break;case 5:Vs(p,p.return);break;case 22:if(p.memoizedState!==null){U_(d);continue}}g!==null?(g.return=p,q=g):U_(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zT("display",o))}catch(x){Ve(t,t.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Ve(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:hn(e,t),Pn(t),r&4&&F_(t);break;case 21:break;default:hn(e,t),Pn(t)}}function Pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gI(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var s=j_(t);Jp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=j_(t);Xp(t,a,o);break;default:throw Error(U(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P2(t,e,n){q=t,_I(t)}function _I(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||gt;a=xu;var c=gt;if(xu=o,(gt=l)&&!c)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?B_(i):l!==null?(l.return=o,q=l):B_(i);for(;s!==null;)q=s,_I(s),s=s.sibling;q=i,xu=a,gt=c}$_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):$_(t)}}function $_(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||kh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&S_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}S_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}gt||e.flags&512&&Yp(e)}catch(p){Ve(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function U_(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function B_(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kh(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Yp(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Yp(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var R2=Math.ceil,Fc=fr.ReactCurrentDispatcher,Ug=fr.ReactCurrentOwner,sn=fr.ReactCurrentBatchConfig,le=0,Je=null,$e=null,st=0,Bt=0,Ns=si(0),He=0,sl=null,Bi=0,bh=0,Bg=0,ka=null,Dt=null,zg=0,so=1/0,Hn=null,$c=!1,Zp=null,$r=null,Au=!1,br=null,Uc=0,ba=0,em=null,ec=-1,tc=0;function At(){return le&6?Oe():ec!==-1?ec:ec=Oe()}function Ur(t){return t.mode&1?le&2&&st!==0?st&-st:d2.transition!==null?(tc===0&&(tc=nS()),tc):(t=fe,t!==0||(t=window.event,t=t===void 0?16:uS(t.type)),t):1}function vn(t,e,n,r){if(50<ba)throw ba=0,em=null,Error(U(185));Rl(t,n,r),(!(le&2)||t!==Je)&&(t===Je&&(!(le&2)&&(bh|=n),He===4&&xr(t,st)),Lt(t,r),n===1&&le===0&&!(e.mode&1)&&(so=Oe()+500,Ch&&oi()))}function Lt(t,e){var n=t.callbackNode;db(t,e);var r=Ic(t,t===Je?st:0);if(r===0)n!==null&&X0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&X0(n),e===1)t.tag===0?h2(z_.bind(null,t)):PS(z_.bind(null,t)),a2(function(){!(le&6)&&oi()}),n=null;else{switch(rS(r)){case 1:n=mg;break;case 4:n=eS;break;case 16:n=Sc;break;case 536870912:n=tS;break;default:n=Sc}n=CI(n,wI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wI(t,e){if(ec=-1,tc=0,le&6)throw Error(U(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=Ic(t,t===Je?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bc(t,r);else{e=r;var i=le;le|=2;var s=TI();(Je!==t||st!==e)&&(Hn=null,so=Oe()+500,Mi(t,e));do try{D2();break}catch(a){EI(t,a)}while(1);Pg(),Fc.current=s,le=i,$e!==null?e=0:(Je=null,st=0,e=He)}if(e!==0){if(e===2&&(i=Cp(t),i!==0&&(r=i,e=tm(t,i))),e===1)throw n=sl,Mi(t,0),xr(t,r),Lt(t,Oe()),n;if(e===6)xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!k2(i)&&(e=Bc(t,r),e===2&&(s=Cp(t),s!==0&&(r=s,e=tm(t,s))),e===1))throw n=sl,Mi(t,0),xr(t,r),Lt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ii(t,Dt,Hn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=zg+500-Oe(),10<e)){if(Ic(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mp(Ii.bind(null,t,Dt,Hn),e);break}Ii(t,Dt,Hn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R2(r/1960))-r,10<r){t.timeoutHandle=Mp(Ii.bind(null,t,Dt,Hn),r);break}Ii(t,Dt,Hn);break;case 5:Ii(t,Dt,Hn);break;default:throw Error(U(329))}}}return Lt(t,Oe()),t.callbackNode===n?wI.bind(null,t):null}function tm(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(Mi(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&nm(e)),t}function nm(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function k2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~Bg,e&=~bh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function z_(t){if(le&6)throw Error(U(327));Ks();var e=Ic(t,0);if(!(e&1))return Lt(t,Oe()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var r=Cp(t);r!==0&&(e=r,n=tm(t,r))}if(n===1)throw n=sl,Mi(t,0),xr(t,e),Lt(t,Oe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,Dt,Hn),Lt(t,Oe()),null}function Wg(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(so=Oe()+500,Ch&&oi())}}function zi(t){br!==null&&br.tag===0&&!(le&6)&&Ks();var e=le;le|=1;var n=sn.transition,r=fe;try{if(sn.transition=null,fe=1,t)return t()}finally{fe=r,sn.transition=n,le=e,!(le&6)&&oi()}}function Hg(){Bt=Ns.current,Te(Ns)}function Mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o2(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(xg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rc();break;case 3:ro(),Te(Mt),Te(_t),Ng();break;case 5:Vg(r);break;case 4:ro();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Rg(r.type._context);break;case 22:case 23:Hg()}n=n.return}if(Je=t,$e=t=Br(t.current,null),st=Bt=e,He=0,sl=null,Bg=bh=Bi=0,Dt=ka=null,Ri!==null){for(e=0;e<Ri.length;e++)if(n=Ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ri=null}return t}function EI(t,e){do{var n=$e;try{if(Pg(),Xu.current=jc,Lc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lc=!1}if(Ui=0,Qe=We=Pe=null,Pa=!1,nl=0,Ug.current=null,n===null||n.return===null){He=1,sl=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=st,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=k_(o);if(g!==null){g.flags&=-257,b_(g,o,a,s,e),g.mode&1&&R_(s,c,e),e=g,l=c;var S=e.updateQueue;if(S===null){var x=new Set;x.add(l),e.updateQueue=x}else S.add(l);break e}else{if(!(e&1)){R_(s,c,e),qg();break e}l=Error(U(426))}}else if(xe&&a.mode&1){var P=k_(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),b_(P,o,a,s,e),Ag(io(l,a));break e}}s=l=io(l,a),He!==4&&(He=2),ka===null?ka=[s]:ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=iI(s,l,e);T_(s,_);break e;case 1:a=l;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&($r===null||!$r.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=sI(s,a,e);T_(s,b);break e}}s=s.return}while(s!==null)}II(n)}catch(O){e=O,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function TI(){var t=Fc.current;return Fc.current=jc,t===null?jc:t}function qg(){(He===0||He===3||He===2)&&(He=4),Je===null||!(Bi&268435455)&&!(bh&268435455)||xr(Je,st)}function Bc(t,e){var n=le;le|=2;var r=TI();(Je!==t||st!==e)&&(Hn=null,Mi(t,e));do try{b2();break}catch(i){EI(t,i)}while(1);if(Pg(),le=n,Fc.current=r,$e!==null)throw Error(U(261));return Je=null,st=0,He}function b2(){for(;$e!==null;)SI($e)}function D2(){for(;$e!==null&&!rb();)SI($e)}function SI(t){var e=AI(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?II(t):$e=e,Ug.current=null}function II(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x2(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,$e=null;return}}else if(n=I2(n,e,Bt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);He===0&&(He=5)}function Ii(t,e,n){var r=fe,i=sn.transition;try{sn.transition=null,fe=1,V2(t,e,n,r)}finally{sn.transition=i,fe=r}return null}function V2(t,e,n,r){do Ks();while(br!==null);if(le&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fb(t,s),t===Je&&($e=Je=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Au||(Au=!0,CI(Sc,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=fe;fe=1;var a=le;le|=4,Ug.current=null,C2(t,n),vI(n,t),Zb(Vp),xc=!!Dp,Vp=Dp=null,t.current=n,P2(n),ib(),le=a,fe=o,sn.transition=s}else t.current=n;if(Au&&(Au=!1,br=t,Uc=i),s=t.pendingLanes,s===0&&($r=null),ab(n.stateNode),Lt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($c)throw $c=!1,t=Zp,Zp=null,t;return Uc&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===em?ba++:(ba=0,em=t):ba=0,oi(),null}function Ks(){if(br!==null){var t=rS(Uc),e=sn.transition,n=fe;try{if(sn.transition=null,fe=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,Uc=0,le&6)throw Error(U(331));var i=le;for(le|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:Ra(8,h,s)}var d=h.child;if(d!==null)d.return=h,q=d;else for(;q!==null;){h=q;var p=h.sibling,g=h.return;if(mI(h),h===c){q=null;break}if(p!==null){p.return=g,q=p;break}q=g}}}var S=s.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,q=_;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,q=T;else e:for(o=v;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kh(9,a)}}catch(O){Ve(a,a.return,O)}if(a===o){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(le=i,oi(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Th,t)}catch{}r=!0}return r}finally{fe=n,sn.transition=e}}return!1}function W_(t,e,n){e=io(n,e),e=iI(t,e,1),t=Fr(t,e,1),e=At(),t!==null&&(Rl(t,1,e),Lt(t,e))}function Ve(t,e,n){if(t.tag===3)W_(t,t,n);else for(;e!==null;){if(e.tag===3){W_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=io(n,t),t=sI(e,t,1),e=Fr(e,t,1),t=At(),e!==null&&(Rl(e,1,t),Lt(e,t));break}}e=e.return}}function N2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(st&n)===n&&(He===4||He===3&&(st&130023424)===st&&500>Oe()-zg?Mi(t,0):Bg|=n),Lt(t,e)}function xI(t,e){e===0&&(t.mode&1?(e=gu,gu<<=1,!(gu&130023424)&&(gu=4194304)):e=1);var n=At();t=or(t,e),t!==null&&(Rl(t,e,n),Lt(t,n))}function M2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xI(t,n)}function O2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),xI(t,n)}var AI;AI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,S2(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,xe&&e.flags&1048576&&RS(e,Dc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zu(t,e),t=e.pendingProps;var i=eo(e,_t.current);Gs(e,n),i=Og(null,e,r,t,i,n);var s=Lg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,kc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bg(e),i.updater=Ph,e.stateNode=i,i._reactInternals=e,Bp(e,r,t,n),e=Hp(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&Ig(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=j2(r),t=fn(r,t),i){case 0:e=Wp(null,e,r,t,n);break e;case 1:e=N_(null,e,r,t,n);break e;case 11:e=D_(null,e,r,t,n);break e;case 14:e=V_(null,e,r,fn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Wp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),N_(t,e,r,i,n);case 3:e:{if(uI(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,VS(t,e),Mc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=io(Error(U(423)),e),e=M_(t,e,r,n,i);break e}else if(r!==i){i=io(Error(U(424)),e),e=M_(t,e,r,n,i);break e}else for(zt=jr(e.stateNode.containerInfo.firstChild),Ht=e,xe=!0,gn=null,n=LS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),r===i){e=ar(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return jS(e),t===null&&Fp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Np(r,i)?o=null:s!==null&&Np(r,s)&&(e.flags|=32),lI(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&Fp(e),null;case 13:return cI(t,e,n);case 4:return Dg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=no(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),D_(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Vc,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!Mt.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Zn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$p(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$p(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gs(e,n),i=an(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),V_(t,e,r,i,n);case 15:return oI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Zu(t,e),e.tag=1,Ot(r)?(t=!0,kc(e)):t=!1,Gs(e,n),MS(e,r,i),Bp(e,r,i,n),Hp(null,e,r,!0,t,n);case 19:return hI(t,e,n);case 22:return aI(t,e,n)}throw Error(U(156,e.tag))};function CI(t,e){return ZT(t,e)}function L2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new L2(t,e,n,r)}function Gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j2(t){if(typeof t=="function")return Gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dg)return 11;if(t===fg)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Oi(n.children,i,s,e);case hg:o=8,i|=8;break;case dp:return t=rn(12,n,e,i|2),t.elementType=dp,t.lanes=s,t;case fp:return t=rn(13,n,e,i),t.elementType=fp,t.lanes=s,t;case pp:return t=rn(19,n,e,i),t.elementType=pp,t.lanes=s,t;case OT:return Dh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case NT:o=10;break e;case MT:o=9;break e;case dg:o=11;break e;case fg:o=14;break e;case Tr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Oi(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Dh(t,e,n,r){return t=rn(22,t,r,e),t.elementType=OT,t.lanes=n,t.stateNode={isHidden:!1},t}function gf(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function yf(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function F2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yd(0),this.expirationTimes=Yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kg(t,e,n,r,i,s,o,a,l){return t=new F2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bg(s),t}function $2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function PI(t){if(!t)return Yr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ot(n))return CS(t,n,e)}return e}function RI(t,e,n,r,i,s,o,a,l){return t=Kg(n,r,!0,t,i,s,o,a,l),t.context=PI(null),n=t.current,r=At(),i=Ur(n),s=Zn(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,Rl(t,i,r),Lt(t,r),t}function Vh(t,e,n,r){var i=e.current,s=At(),o=Ur(i);return n=PI(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(vn(t,i,o,s),Yu(t,i,o)),o}function zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function H_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qg(t,e){H_(t,e),(t=t.alternate)&&H_(t,e)}function U2(){return null}var kI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yg(t){this._internalRoot=t}Nh.prototype.render=Yg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Vh(t,e,null,null)};Nh.prototype.unmount=Yg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zi(function(){Vh(null,t,null,null)}),e[sr]=null}};function Nh(t){this._internalRoot=t}Nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=oS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&lS(t)}};function Xg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function q_(){}function B2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=zc(o);s.call(c)}}var o=RI(e,r,t,0,null,!1,!1,"",q_);return t._reactRootContainer=o,t[sr]=o.current,Xa(t.nodeType===8?t.parentNode:t),zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=zc(l);a.call(c)}}var l=Kg(t,0,!1,null,null,!1,!1,"",q_);return t._reactRootContainer=l,t[sr]=l.current,Xa(t.nodeType===8?t.parentNode:t),zi(function(){Vh(e,l,n,r)}),l}function Oh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zc(o);a.call(l)}}Vh(e,o,t,i)}else o=B2(n,e,t,i,r);return zc(o)}iS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(gg(e,n|1),Lt(e,Oe()),!(le&6)&&(so=Oe()+500,oi()))}break;case 13:zi(function(){var r=or(t,1);if(r!==null){var i=At();vn(r,t,1,i)}}),Qg(t,1)}};yg=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=At();vn(e,t,134217728,n)}Qg(t,134217728)}};sS=function(t){if(t.tag===13){var e=Ur(t),n=or(t,e);if(n!==null){var r=At();vn(n,t,e,r)}Qg(t,e)}};oS=function(){return fe};aS=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ip=function(t,e,n){switch(e){case"input":if(yp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ah(r);if(!i)throw Error(U(90));jT(r),yp(r,i)}}}break;case"textarea":$T(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};GT=Wg;KT=zi;var z2={usingClientEntryPoint:!1,Events:[bl,Ps,Ah,HT,qT,Wg]},ia={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W2={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=XT(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||U2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Th=Cu.inject(W2),Dn=Cu}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z2;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xg(e))throw Error(U(200));return $2(t,e,null,n)};Yt.createRoot=function(t,e){if(!Xg(t))throw Error(U(299));var n=!1,r="",i=kI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kg(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Yg(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=XT(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return zi(t)};Yt.hydrate=function(t,e,n){if(!Mh(e))throw Error(U(200));return Oh(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Xg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=kI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=RI(e,null,t,1,n??null,i,!1,s,o),t[sr]=e.current,Xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nh(e)};Yt.render=function(t,e,n){if(!Mh(e))throw Error(U(200));return Oh(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Mh(t))throw Error(U(40));return t._reactRootContainer?(zi(function(){Oh(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Wg;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Oh(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function bI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bI)}catch(t){console.error(t)}}bI(),RT.exports=Yt;var H2=RT.exports,G_=H2;cp.createRoot=G_.createRoot,cp.hydrateRoot=G_.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ol.apply(this,arguments)}var Dr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Dr||(Dr={}));const K_="popstate";function q2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return rm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wc(i)}return K2(e,n,null,t)}function Le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function DI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function G2(){return Math.random().toString(36).substr(2,8)}function Q_(t,e){return{usr:t.state,key:t.key,idx:e}}function rm(t,e,n,r){return n===void 0&&(n=null),ol({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Io(e):e,{state:n,key:e&&e.key||r||G2()})}function Wc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Io(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function K2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Dr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(ol({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Dr.Pop;let P=h(),_=P==null?null:P-c;c=P,l&&l({action:a,location:x.location,delta:_})}function p(P,_){a=Dr.Push;let v=rm(x.location,P,_);n&&n(v,P),c=h()+1;let T=Q_(v,c),b=x.createHref(v);try{o.pushState(T,"",b)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(b)}s&&l&&l({action:a,location:x.location,delta:1})}function g(P,_){a=Dr.Replace;let v=rm(x.location,P,_);n&&n(v,P),c=h();let T=Q_(v,c),b=x.createHref(v);o.replaceState(T,"",b),s&&l&&l({action:a,location:x.location,delta:0})}function S(P){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:Wc(P);return v=v.replace(/ $/,"%20"),Le(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let x={get action(){return a},get location(){return t(i,o)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(K_,d),l=P,()=>{i.removeEventListener(K_,d),l=null}},createHref(P){return e(i,P)},createURL:S,encodeLocation(P){let _=S(P);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:p,replace:g,go(P){return o.go(P)}};return x}var Y_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Y_||(Y_={}));function Q2(t,e,n){return n===void 0&&(n="/"),Y2(t,e,n,!1)}function Y2(t,e,n,r){let i=typeof e=="string"?Io(e):e,s=Jg(i.pathname||"/",n);if(s==null)return null;let o=VI(t);X2(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=lD(s);a=oD(o[l],c,r)}return a}function VI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=zr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),VI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:iD(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of NI(s.path))i(s,o,l)}),e}function NI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function X2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J2=/^:[\w-]+$/,Z2=3,eD=2,tD=1,nD=10,rD=-2,X_=t=>t==="*";function iD(t,e){let n=t.split("/"),r=n.length;return n.some(X_)&&(r+=rD),e&&(r+=eD),n.filter(i=>!X_(i)).reduce((i,s)=>i+(J2.test(s)?Z2:s===""?tD:nD),r)}function sD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oD(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=J_({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=J_({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:zr([s,d.pathname]),pathnameBase:dD(zr([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=zr([s,d.pathnameBase]))}return o}function J_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let x=a[d]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const S=a[d];return g&&!S?c[p]=void 0:c[p]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function aD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),DI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return DI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Io(t):t;return{pathname:n?n.startsWith("/")?n:cD(n,e):e,search:fD(r),hash:pD(i)}}function cD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zg(t,e){let n=hD(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ey(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Io(t):(i=ol({},t),Le(!i.pathname||!i.pathname.includes("?"),vf("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),vf("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),vf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=uD(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),dD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const MI=["post","put","patch","delete"];new Set(MI);const gD=["get",...MI];new Set(gD);/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},al.apply(this,arguments)}const ty=D.createContext(null),yD=D.createContext(null),ai=D.createContext(null),Lh=D.createContext(null),li=D.createContext({outlet:null,matches:[],isDataRoute:!1}),OI=D.createContext(null);function vD(t,e){let{relative:n}=e===void 0?{}:e;xo()||Le(!1);let{basename:r,navigator:i}=D.useContext(ai),{hash:s,pathname:o,search:a}=jI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:zr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function xo(){return D.useContext(Lh)!=null}function ui(){return xo()||Le(!1),D.useContext(Lh).location}function LI(t){D.useContext(ai).static||D.useLayoutEffect(t)}function Ao(){let{isDataRoute:t}=D.useContext(li);return t?bD():_D()}function _D(){xo()||Le(!1);let t=D.useContext(ty),{basename:e,future:n,navigator:r}=D.useContext(ai),{matches:i}=D.useContext(li),{pathname:s}=ui(),o=JSON.stringify(Zg(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return LI(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=ey(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:zr([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function jI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(ai),{matches:i}=D.useContext(li),{pathname:s}=ui(),o=JSON.stringify(Zg(i,r.v7_relativeSplatPath));return D.useMemo(()=>ey(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function wD(t,e){return ED(t,e)}function ED(t,e,n,r){xo()||Le(!1);let{navigator:i}=D.useContext(ai),{matches:s}=D.useContext(li),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=ui(),h;if(e){var d;let P=typeof e=="string"?Io(e):e;l==="/"||(d=P.pathname)!=null&&d.startsWith(l)||Le(!1),h=P}else h=c;let p=h.pathname||"/",g=p;if(l!=="/"){let P=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=Q2(t,{pathname:g}),x=AD(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:zr([l,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?l:zr([l,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&x?D.createElement(Lh.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Dr.Pop}},x):x}function TD(){let t=kD(),e=mD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const SD=D.createElement(TD,null);class ID extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(li.Provider,{value:this.props.routeContext},D.createElement(OI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xD(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(ty);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(li.Provider,{value:e},r)}function AD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Le(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:p,errors:g}=n,S=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,d,p)=>{let g,S=!1,x=null,P=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||SD,l&&(c<0&&p===0?(DD("route-fallback",!1),S=!0,P=null):c===p&&(S=!0,P=d.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,p+1)),v=()=>{let T;return g?T=x:S?T=P:d.route.Component?T=D.createElement(d.route.Component,null):d.route.element?T=d.route.element:T=h,D.createElement(xD,{match:d,routeContext:{outlet:h,matches:_,isDataRoute:n!=null},children:T})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?D.createElement(ID,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var FI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(FI||{}),Hc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hc||{});function CD(t){let e=D.useContext(ty);return e||Le(!1),e}function PD(t){let e=D.useContext(yD);return e||Le(!1),e}function RD(t){let e=D.useContext(li);return e||Le(!1),e}function $I(t){let e=RD(),n=e.matches[e.matches.length-1];return n.route.id||Le(!1),n.route.id}function kD(){var t;let e=D.useContext(OI),n=PD(Hc.UseRouteError),r=$I(Hc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bD(){let{router:t}=CD(FI.UseNavigateStable),e=$I(Hc.UseNavigateStable),n=D.useRef(!1);return LI(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,al({fromRouteId:e},s)))},[t,e])}const Z_={};function DD(t,e,n){!e&&!Z_[t]&&(Z_[t]=!0)}const ew={};function VD(t,e){ew[e]||(ew[e]=!0,console.warn(e))}const ms=(t,e,n)=>VD(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function ND(t,e){(t==null?void 0:t.v7_startTransition)===void 0&&ms("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||!e.v7_relativeSplatPath)&&ms("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),e&&(e.v7_fetcherPersist===void 0&&ms("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),e.v7_normalizeFormMethod===void 0&&ms("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),e.v7_partialHydration===void 0&&ms("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),e.v7_skipActionErrorRevalidation===void 0&&ms("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function im(t){let{to:e,replace:n,state:r,relative:i}=t;xo()||Le(!1);let{future:s,static:o}=D.useContext(ai),{matches:a}=D.useContext(li),{pathname:l}=ui(),c=Ao(),h=ey(e,Zg(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(h);return D.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function Ut(t){Le(!1)}function MD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Dr.Pop,navigator:s,static:o=!1,future:a}=t;xo()&&Le(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:o,future:al({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Io(r));let{pathname:h="/",search:d="",hash:p="",state:g=null,key:S="default"}=r,x=D.useMemo(()=>{let P=Jg(h,l);return P==null?null:{location:{pathname:P,search:d,hash:p,state:g,key:S},navigationType:i}},[l,h,d,p,g,S,i]);return x==null?null:D.createElement(ai.Provider,{value:c},D.createElement(Lh.Provider,{children:n,value:x}))}function OD(t){let{children:e,location:n}=t;return wD(sm(e),n)}new Promise(()=>{});function sm(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,sm(r.props.children,s));return}r.type!==Ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function om(){return om=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},om.apply(this,arguments)}function LD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FD(t,e){return t.button===0&&(!e||e==="_self")&&!jD(t)}const $D=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],UD="6";try{window.__reactRouterVersion=UD}catch{}const BD="startTransition",tw=Mk[BD];function zD(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=q2({window:i,v5Compat:!0}));let o=s.current,[a,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(d=>{c&&tw?tw(()=>l(d)):l(d)},[l,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>ND(r),[r]),D.createElement(MD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const WD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ny=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:d}=e,p=LD(e,$D),{basename:g}=D.useContext(ai),S,x=!1;if(typeof c=="string"&&HD.test(c)&&(S=c,WD))try{let T=new URL(window.location.href),b=c.startsWith("//")?new URL(T.protocol+c):new URL(c),O=Jg(b.pathname,g);b.origin===T.origin&&O!=null?c=O+b.search+b.hash:x=!0}catch{}let P=vD(c,{relative:i}),_=qD(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function v(T){r&&r(T),T.defaultPrevented||_(T)}return D.createElement("a",om({},p,{href:S||P,onClick:x||s?r:v,ref:n,target:l}))});var nw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(nw||(nw={}));var rw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rw||(rw={}));function qD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Ao(),c=ui(),h=jI(t,{relative:o});return D.useCallback(d=>{if(FD(d,n)){d.preventDefault();let p=r!==void 0?r:Wc(c)===Wc(h);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}var Xe=function(){return Xe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Xe.apply(this,arguments)};function ry(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",Da="-moz-",he="-webkit-",UI="comm",jh="rule",iy="decl",GD="@import",BI="@keyframes",KD="@layer",zI=Math.abs,sy=String.fromCharCode,am=Object.assign;function QD(t,e){return Ye(t,0)^45?(((e<<2^Ye(t,0))<<2^Ye(t,1))<<2^Ye(t,2))<<2^Ye(t,3):0}function WI(t){return t.trim()}function qn(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function rc(t,e,n){return t.indexOf(e,n)}function Ye(t,e){return t.charCodeAt(e)|0}function Wi(t,e,n){return t.slice(e,n)}function mn(t){return t.length}function HI(t){return t.length}function fa(t,e){return e.push(t),t}function YD(t,e){return t.map(e).join("")}function iw(t,e){return t.filter(function(n){return!qn(n,e)})}var Fh=1,ao=1,qI=0,un=0,Fe=0,Co="";function $h(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Fh,column:ao,length:o,return:"",siblings:a}}function wr(t,e){return am($h("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function gs(t){for(;t.root;)t=wr(t.root,{children:[t]});fa(t,t.siblings)}function XD(){return Fe}function JD(){return Fe=un>0?Ye(Co,--un):0,ao--,Fe===10&&(ao=1,Fh--),Fe}function _n(){return Fe=un<qI?Ye(Co,un++):0,ao++,Fe===10&&(ao=1,Fh++),Fe}function Vr(){return Ye(Co,un)}function ic(){return un}function Uh(t,e){return Wi(Co,t,e)}function ll(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ZD(t){return Fh=ao=1,qI=mn(Co=t),un=0,[]}function eV(t){return Co="",t}function _f(t){return WI(Uh(un-1,lm(t===91?t+2:t===40?t+1:t)))}function tV(t){for(;(Fe=Vr())&&Fe<33;)_n();return ll(t)>2||ll(Fe)>3?"":" "}function nV(t,e){for(;--e&&_n()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return Uh(t,ic()+(e<6&&Vr()==32&&_n()==32))}function lm(t){for(;_n();)switch(Fe){case t:return un;case 34:case 39:t!==34&&t!==39&&lm(Fe);break;case 40:t===41&&lm(t);break;case 92:_n();break}return un}function rV(t,e){for(;_n()&&t+Fe!==47+10;)if(t+Fe===42+42&&Vr()===47)break;return"/*"+Uh(e,un-1)+"*"+sy(t===47?t:_n())}function iV(t){for(;!ll(Vr());)_n();return Uh(t,un)}function sV(t){return eV(sc("",null,null,null,[""],t=ZD(t),0,[0],t))}function sc(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,d=o,p=0,g=0,S=0,x=1,P=1,_=1,v=0,T="",b=i,O=s,j=r,I=T;P;)switch(S=v,v=_n()){case 40:if(S!=108&&Ye(I,d-1)==58){rc(I+=te(_f(v),"&","&\f"),"&\f",zI(c?a[c-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:I+=_f(v);break;case 9:case 10:case 13:case 32:I+=tV(S);break;case 92:I+=nV(ic()-1,7);continue;case 47:switch(Vr()){case 42:case 47:fa(oV(rV(_n(),ic()),e,n,l),l),(ll(S||1)==5||ll(Vr()||1)==5)&&mn(I)&&Wi(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*x:a[c++]=mn(I)*_;case 125*x:case 59:case 0:switch(v){case 0:case 125:P=0;case 59+h:_==-1&&(I=te(I,/\f/g,"")),g>0&&(mn(I)-d||x===0&&S===47)&&fa(g>32?ow(I+";",r,n,d-1,l):ow(te(I," ","")+";",r,n,d-2,l),l);break;case 59:I+=";";default:if(fa(j=sw(I,e,n,c,h,i,a,T,b=[],O=[],d,s),s),v===123)if(h===0)sc(I,e,j,j,b,s,d,a,O);else switch(p===99&&Ye(I,3)===110?100:p){case 100:case 108:case 109:case 115:sc(t,j,j,r&&fa(sw(t,j,j,0,0,i,a,T,i,b=[],d,O),O),i,O,d,a,r?b:O);break;default:sc(I,j,j,j,[""],O,0,a,O)}}c=h=g=0,x=_=1,T=I="",d=o;break;case 58:d=1+mn(I),g=S;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&JD()==125)continue}switch(I+=sy(v),v*x){case 38:_=h>0?1:(I+="\f",-1);break;case 44:a[c++]=(mn(I)-1)*_,_=1;break;case 64:Vr()===45&&(I+=_f(_n())),p=Vr(),h=d=mn(T=I+=iV(ic())),v++;break;case 45:S===45&&mn(I)==2&&(x=0)}}return s}function sw(t,e,n,r,i,s,o,a,l,c,h,d){for(var p=i-1,g=i===0?s:[""],S=HI(g),x=0,P=0,_=0;x<r;++x)for(var v=0,T=Wi(t,p+1,p=zI(P=o[x])),b=t;v<S;++v)(b=WI(P>0?g[v]+" "+T:te(T,/&\f/g,g[v])))&&(l[_++]=b);return $h(t,e,n,i===0?jh:a,l,c,h,d)}function oV(t,e,n,r){return $h(t,e,n,UI,sy(XD()),Wi(t,2,-2),0,r)}function ow(t,e,n,r,i){return $h(t,e,n,iy,Wi(t,0,r),Wi(t,r+1,-1),r,i)}function GI(t,e,n){switch(QD(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+t+t;case 4855:return he+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Da+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+Da+t+we+t+t;case 5936:switch(Ye(t,e+11)){case 114:return he+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+we+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+we+t+t;case 6165:return he+t+we+"flex-"+t+t;case 5187:return he+t+te(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return he+t+we+"flex-item-"+te(t,/flex-|-self/g,"")+(qn(t,/flex-|baseline/)?"":we+"grid-row-"+te(t,/flex-|-self/g,""))+t;case 4675:return he+t+we+"flex-line-pack"+te(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+we+te(t,"shrink","negative")+t;case 5292:return he+t+we+te(t,"basis","preferred-size")+t;case 6060:return he+"box-"+te(t,"-grow","")+he+t+we+te(t,"grow","positive")+t;case 4554:return he+te(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+we+"flex-pack:$3"),/space-between/,"justify")+he+t+t;case 4200:if(!qn(t,/flex-|baseline/))return we+"grid-column-align"+Wi(t,e)+t;break;case 2592:case 3360:return we+te(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,qn(r.props,/grid-\w+-end/)})?~rc(t+(n=n[e].value),"span",0)?t:we+te(t,"-start","")+t+we+"grid-row-span:"+(~rc(n,"span",0)?qn(n,/\d+/):+qn(n,/\d+/)-+qn(t,/\d+/))+";":we+te(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return qn(r.props,/grid-\w+-start/)})?t:we+te(te(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(t)-1-e>6)switch(Ye(t,e+1)){case 109:if(Ye(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Da+(Ye(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~rc(t,"stretch",0)?GI(te(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return te(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return we+i+":"+s+c+(o?we+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Ye(t,e+6)===121)return te(t,":",":"+he)+t;break;case 6444:switch(Ye(t,Ye(t,14)===45?18:11)){case 120:return te(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Ye(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+we+"$2box$3")+t;case 100:return te(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(t,"scroll-","scroll-snap-")+t}return t}function qc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function aV(t,e,n,r){switch(t.type){case KD:if(t.children.length)break;case GD:case iy:return t.return=t.return||t.value;case UI:return"";case BI:return t.return=t.value+"{"+qc(t.children,r)+"}";case jh:if(!mn(t.value=t.props.join(",")))return""}return mn(n=qc(t.children,r))?t.return=t.value+"{"+n+"}":""}function lV(t){var e=HI(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function uV(t){return function(e){e.root||(e=e.return)&&t(e)}}function cV(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case iy:t.return=GI(t.value,t.length,n);return;case BI:return qc([wr(t,{value:te(t.value,"@","@"+he)})],r);case jh:if(t.length)return YD(n=t.props,function(i){switch(qn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gs(wr(t,{props:[te(i,/:(read-\w+)/,":"+Da+"$1")]})),gs(wr(t,{props:[i]})),am(t,{props:iw(n,r)});break;case"::placeholder":gs(wr(t,{props:[te(i,/:(plac\w+)/,":"+he+"input-$1")]})),gs(wr(t,{props:[te(i,/:(plac\w+)/,":"+Da+"$1")]})),gs(wr(t,{props:[te(i,/:(plac\w+)/,we+"input-$1")]})),gs(wr(t,{props:[i]})),am(t,{props:iw(n,r)});break}return""})}}var hV={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",oy=typeof window<"u"&&"HTMLElement"in window,dV=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),fV={},Bh=Object.freeze([]),uo=Object.freeze({});function KI(t,e,n){return n===void 0&&(n=uo),t.theme!==n.theme&&t.theme||e||n.theme}var QI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),pV=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mV=/(^-|-$)/g;function aw(t){return t.replace(pV,"-").replace(mV,"")}var gV=/(a)(d)/gi,lw=function(t){return String.fromCharCode(t+(t>25?39:97))};function um(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=lw(e%52)+n;return(lw(e%52)+n).replace(gV,"$1-$2")}var wf,Ms=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},YI=function(t){return Ms(5381,t)};function ay(t){return um(YI(t)>>>0)}function yV(t){return t.displayName||t.name||"Component"}function Ef(t){return typeof t=="string"&&!0}var XI=typeof Symbol=="function"&&Symbol.for,JI=XI?Symbol.for("react.memo"):60115,vV=XI?Symbol.for("react.forward_ref"):60112,_V={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wV={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ZI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},EV=((wf={})[vV]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wf[JI]=ZI,wf);function uw(t){return("type"in(e=t)&&e.type.$$typeof)===JI?ZI:"$$typeof"in t?EV[t.$$typeof]:_V;var e}var TV=Object.defineProperty,SV=Object.getOwnPropertyNames,cw=Object.getOwnPropertySymbols,IV=Object.getOwnPropertyDescriptor,xV=Object.getPrototypeOf,hw=Object.prototype;function ex(t,e,n){if(typeof e!="string"){if(hw){var r=xV(e);r&&r!==hw&&ex(t,r,n)}var i=SV(e);cw&&(i=i.concat(cw(e)));for(var s=uw(t),o=uw(e),a=0;a<i.length;++a){var l=i[a];if(!(l in wV||n&&n[l]||o&&l in o||s&&l in s)){var c=IV(e,l);try{TV(t,l,c)}catch{}}}}return t}function Hi(t){return typeof t=="function"}function ly(t){return typeof t=="object"&&"styledComponentId"in t}function bi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Gc(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ul(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function cm(t,e,n){if(n===void 0&&(n=!1),!n&&!ul(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=cm(t[r],e[r]);else if(ul(e))for(var r in e)t[r]=cm(t[r],e[r]);return t}function uy(t,e){Object.defineProperty(t,"toString",{value:e})}function qi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var AV=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw qi(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),oc=new Map,Kc=new Map,Tf=1,Pu=function(t){if(oc.has(t))return oc.get(t);for(;Kc.has(Tf);)Tf++;var e=Tf++;return oc.set(t,e),Kc.set(e,t),e},CV=function(t,e){oc.set(t,e),Kc.set(e,t)},PV="style[".concat(lo,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),RV=new RegExp("^".concat(lo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kV=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},bV=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(RV);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(CV(h,c),kV(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function DV(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(lo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(lo,"active"),r.setAttribute("data-styled-version","6.0.7");var o=DV();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},VV=function(){function t(e){this.element=tx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw qi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),NV=function(){function t(e){this.element=tx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),MV=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),dw=oy,OV={isServer:!oy,useCSSOMInjection:!dV},Qc=function(){function t(e,n,r){e===void 0&&(e=uo),n===void 0&&(n={});var i=this;this.options=Xe(Xe({},OV),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&oy&&dw&&(dw=!1,function(s){for(var o=document.querySelectorAll(PV),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(lo)!=="active"&&(bV(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),uy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var p=function(_){return Kc.get(_)}(d);if(p===void 0)return"continue";var g=s.names.get(p),S=o.getGroup(d);if(g===void 0||S.length===0)return"continue";var x="".concat(lo,".g").concat(d,'[id="').concat(p,'"]'),P="";g!==void 0&&g.forEach(function(_){_.length>0&&(P+="".concat(_,","))}),l+="".concat(S).concat(x,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return Pu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Xe(Xe({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new MV(i):r?new VV(i):new NV(i)}(this.options),new AV(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Pu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Pu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),LV=/&/g,jV=/^\s*\/\/.*$/gm;function nx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=nx(n.children,e)),n})}function FV(t){var e,n,r,i=t===void 0?uo:t,s=i.options,o=s===void 0?uo:s,a=i.plugins,l=a===void 0?Bh:a,c=function(p,g,S){return S===n||S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===jh&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(LV,n).replace(r,c))}),o.prefix&&h.push(cV),h.push(aV);var d=function(p,g,S,x){g===void 0&&(g=""),S===void 0&&(S=""),x===void 0&&(x="&"),e=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var P=p.replace(jV,""),_=sV(S||g?"".concat(S," ").concat(g," { ").concat(P," }"):P);o.namespace&&(_=nx(_,o.namespace));var v=[];return qc(_,lV(h.concat(uV(function(T){return v.push(T)})))),v};return d.hash=l.length?l.reduce(function(p,g){return g.name||qi(15),Ms(p,g.name)},5381).toString():"",d}var $V=new Qc,hm=FV(),rx=Be.createContext({shouldForwardProp:void 0,styleSheet:$V,stylis:hm});rx.Consumer;Be.createContext(void 0);function dm(){return D.useContext(rx)}var ix=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=hm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,uy(this,function(){throw qi(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=hm),this.name+e.hash},t}(),UV=function(t){return t>="A"&&t<="Z"};function fw(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;UV(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var sx=function(t){return t==null||t===!1||t===""},ox=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!sx(s)&&(Array.isArray(s)&&s.isCss||Hi(s)?r.push("".concat(fw(i),":"),s,";"):ul(s)?r.push.apply(r,oo(oo(["".concat(i," {")],ox(s),!1),["}"],!1)):r.push("".concat(fw(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in hV||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wr(t,e,n,r){if(sx(t))return[];if(ly(t))return[".".concat(t.styledComponentId)];if(Hi(t)){if(!Hi(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Wr(i,e,n,r)}var s;return t instanceof ix?n?(t.inject(n,r),[t.getName(r)]):[t]:ul(t)?ox(t):Array.isArray(t)?Array.prototype.concat.apply(Bh,t.map(function(o){return Wr(o,e,n,r)})):[t.toString()]}function ax(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Hi(n)&&!ly(n))return!1}return!0}var BV=YI("6.0.7"),zV=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ax(e),this.componentId=n,this.baseHash=Ms(BV,n),this.baseStyle=r,Qc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=bi(i,this.staticRulesId);else{var s=Gc(Wr(this.rules,e,n,r)),o=um(Ms(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=bi(i,o),this.staticRulesId=o}else{for(var l=Ms(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var d=this.rules[h];if(typeof d=="string")c+=d;else if(d){var p=Gc(Wr(d,e,n,r));l=Ms(l,p),c+=p}}if(c){var g=um(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=bi(i,g)}}return i},t}(),cl=Be.createContext(void 0);cl.Consumer;function WV(t){var e=Be.useContext(cl),n=D.useMemo(function(){return function(r,i){if(!r)throw qi(14);if(Hi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw qi(8);return i?Xe(Xe({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Be.createElement(cl.Provider,{value:n},t.children):null}var Sf={};function HV(t,e,n){var r=ly(t),i=t,s=!Ef(t),o=e.attrs,a=o===void 0?Bh:o,l=e.componentId,c=l===void 0?function(T,b){var O=typeof T!="string"?"sc":aw(T);Sf[O]=(Sf[O]||0)+1;var j="".concat(O,"-").concat(ay("6.0.7"+O+Sf[O]));return b?"".concat(b,"-").concat(j):j}(e.displayName,e.parentComponentId):l,h=e.displayName;h===void 0&&function(T){return Ef(T)?"styled.".concat(T):"Styled(".concat(yV(T),")")}(t);var d=e.displayName&&e.componentId?"".concat(aw(e.displayName),"-").concat(e.componentId):e.componentId||c,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;g=function(T,b){return S(T,b)&&x(T,b)}}else g=S}var P=new zV(n,d,r?i.componentStyle:void 0);function _(T,b){return function(O,j,I){var w=O.attrs,A=O.componentStyle,C=O.defaultProps,k=O.foldedComponentIds,N=O.styledComponentId,R=O.target,Ze=Be.useContext(cl),An=dm(),Cn=O.shouldForwardProp||An.shouldForwardProp,oe=function(ge,Et,kt){for(var Tt,Ge=Xe(Xe({},Et),{className:void 0,theme:kt}),Lo=0;Lo<ge.length;Lo+=1){var us=Hi(Tt=ge[Lo])?Tt(Ge):Tt;for(var Ft in us)Ge[Ft]=Ft==="className"?bi(Ge[Ft],us[Ft]):Ft==="style"?Xe(Xe({},Ge[Ft]),us[Ft]):us[Ft]}return Et.className&&(Ge.className=bi(Ge.className,Et.className)),Ge}(w,j,KI(j,Ze,C)||uo),B=oe.as||R,G={};for(var K in oe)oe[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?G.as=oe.forwardedAs:Cn&&!Cn(K,B)||(G[K]=oe[K]));var me=function(ge,Et){var kt=dm(),Tt=ge.generateAndInjectStyles(Et,kt.styleSheet,kt.stylis);return Tt}(A,oe),ce=bi(k,N);return me&&(ce+=" "+me),oe.className&&(ce+=" "+oe.className),G[Ef(B)&&!QI.has(B)?"class":"className"]=ce,G.ref=I,D.createElement(B,G)}(v,T,b)}var v=Be.forwardRef(_);return v.attrs=p,v.componentStyle=P,v.shouldForwardProp=g,v.foldedComponentIds=r?bi(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=r?function(b){for(var O=[],j=1;j<arguments.length;j++)O[j-1]=arguments[j];for(var I=0,w=O;I<w.length;I++)cm(b,w[I],!0);return b}({},i.defaultProps,T):T}}),uy(v,function(){return".".concat(v.styledComponentId)}),s&&ex(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function pw(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var mw=function(t){return Object.assign(t,{isCss:!0})};function cy(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Hi(t)||ul(t)){var r=t;return mw(Wr(pw(Bh,oo([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Wr(i):mw(Wr(pw(i,e)))}function fm(t,e,n){if(n===void 0&&(n=uo),!e)throw qi(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,cy.apply(void 0,oo([i],s,!1)))};return r.attrs=function(i){return fm(t,e,Xe(Xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fm(t,e,Xe(Xe({},n),i))},r}var lx=function(t){return fm(HV,t)},M=lx;QI.forEach(function(t){M[t]=lx(t)});var qV=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=ax(e),Qc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Gc(Wr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Qc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function GV(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=cy.apply(void 0,oo([t],e,!1)),i="sc-global-".concat(ay(JSON.stringify(r))),s=new qV(r,i),o=function(l){var c=dm(),h=Be.useContext(cl),d=Be.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(d,l,c.styleSheet,h,c.stylis),Be.useLayoutEffect(function(){if(!c.styleSheet.server)return a(d,l,c.styleSheet,h,c.stylis),function(){return s.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,h,c.stylis]),null};function a(l,c,h,d,p){if(s.isStatic)s.renderStyles(l,fV,h,p);else{var g=Xe(Xe({},c),{theme:KI(c,d,o.defaultProps)});s.renderStyles(l,g,h,p)}}return Be.memo(o)}function ux(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Gc(cy.apply(void 0,oo([t],e,!1))),i=ay(r);return new ix(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KV=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KV(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new QV;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const S=c<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YV=function(t){const e=cx(t);return hx.encodeByteArray(e,!0)},Yc=function(t){return YV(t).replace(/\./g,"")},dx=function(t){try{return hx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV=()=>XV().__FIREBASE_DEFAULTS__,ZV=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dx(t[1]);return e&&JSON.parse(e)},zh=()=>{try{return JV()||ZV()||eN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fx=t=>{var e,n;return(n=(e=zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tN=t=>{const e=fx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},px=()=>{var t;return(t=zh())===null||t===void 0?void 0:t.config},mx=t=>{var e;return(e=zh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yc(JSON.stringify(n)),Yc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function sN(){var t;const e=(t=zh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lN(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uN(){return!sN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yx(){try{return typeof indexedDB=="object"}catch{return!1}}function vx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function cN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hN,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ts.prototype.create)}}class ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xn(i,a,r)}}function dN(t,e){return t.replace(fN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fN=/\{\$([^}]+)}/g;function pN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gw(s)&&gw(o)){if(!hl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mN(t,e){const n=new gN(t,e);return n.subscribe.bind(n)}class gN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=If),i.error===void 0&&(i.error=If),i.complete===void 0&&(i.complete=If);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function If(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=1e3,_N=2,wN=4*60*60*1e3,EN=.5;function yw(t,e=vN,n=_N){const r=e*Math.pow(n,t),i=Math.round(EN*r*(Math.random()-.5)*2);return Math.min(wN,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IN(e))try{this.getOrInitializeService({instanceIdentifier:xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xi){return this.instances.has(e)}getOptions(e=xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xi){return this.component?this.component.multipleInstances?e:xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SN(t){return t===xi?void 0:t}function IN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const AN={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},CN=ne.INFO,PN={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},RN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wh{constructor(e){this.name=e,this._logLevel=CN,this._logHandler=RN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const kN=(t,e)=>e.some(n=>t instanceof n);let vw,_w;function bN(){return vw||(vw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DN(){return _w||(_w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _x=new WeakMap,pm=new WeakMap,wx=new WeakMap,xf=new WeakMap,hy=new WeakMap;function VN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_x.set(n,t)}).catch(()=>{}),hy.set(e,t),e}function NN(t){if(pm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pm.set(t,e)}let mm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MN(t){mm=t(mm)}function ON(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Af(this),e,...n);return wx.set(r,e.sort?e.sort():[e]),Hr(r)}:DN().includes(t)?function(...e){return t.apply(Af(this),e),Hr(_x.get(this))}:function(...e){return Hr(t.apply(Af(this),e))}}function LN(t){return typeof t=="function"?ON(t):(t instanceof IDBTransaction&&NN(t),kN(t,bN())?new Proxy(t,mm):t)}function Hr(t){if(t instanceof IDBRequest)return VN(t);if(xf.has(t))return xf.get(t);const e=LN(t);return e!==t&&(xf.set(t,e),hy.set(e,t)),e}const Af=t=>hy.get(t);function Ex(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jN=["get","getKey","getAll","getAllKeys","count"],FN=["put","add","delete","clear"],Cf=new Map;function ww(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cf.get(e))return Cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Cf.set(e,s),s}MN(t=>({...t,get:(e,n,r)=>ww(e,n)||t.get(e,n,r),has:(e,n)=>!!ww(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gm="@firebase/app",Ew="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Wh("@firebase/app"),BN="@firebase/app-compat",zN="@firebase/analytics-compat",WN="@firebase/analytics",HN="@firebase/app-check-compat",qN="@firebase/app-check",GN="@firebase/auth",KN="@firebase/auth-compat",QN="@firebase/database",YN="@firebase/data-connect",XN="@firebase/database-compat",JN="@firebase/functions",ZN="@firebase/functions-compat",eM="@firebase/installations",tM="@firebase/installations-compat",nM="@firebase/messaging",rM="@firebase/messaging-compat",iM="@firebase/performance",sM="@firebase/performance-compat",oM="@firebase/remote-config",aM="@firebase/remote-config-compat",lM="@firebase/storage",uM="@firebase/storage-compat",cM="@firebase/firestore",hM="@firebase/vertexai",dM="@firebase/firestore-compat",fM="firebase",pM="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="[DEFAULT]",mM={[gm]:"fire-core",[BN]:"fire-core-compat",[WN]:"fire-analytics",[zN]:"fire-analytics-compat",[qN]:"fire-app-check",[HN]:"fire-app-check-compat",[GN]:"fire-auth",[KN]:"fire-auth-compat",[QN]:"fire-rtdb",[YN]:"fire-data-connect",[XN]:"fire-rtdb-compat",[JN]:"fire-fn",[ZN]:"fire-fn-compat",[eM]:"fire-iid",[tM]:"fire-iid-compat",[nM]:"fire-fcm",[rM]:"fire-fcm-compat",[iM]:"fire-perf",[sM]:"fire-perf-compat",[oM]:"fire-rc",[aM]:"fire-rc-compat",[lM]:"fire-gcs",[uM]:"fire-gcs-compat",[cM]:"fire-fst",[dM]:"fire-fst-compat",[hM]:"fire-vertex","fire-js":"fire-js",[fM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Map,gM=new Map,vm=new Map;function Tw(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(vm.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;vm.set(e,t);for(const n of Xc.values())Tw(n,t);for(const n of gM.values())Tw(n,t);return!0}function ns(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new ts("app","Firebase",yM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=pM;function Tx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ym,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=px()),!n)throw qr.create("no-options");const s=Xc.get(i);if(s){if(hl(n,s.options)&&hl(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new xN(i);for(const l of vm.values())o.addComponent(l);const a=new vM(n,r,o);return Xc.set(i,a),a}function dy(t=ym){const e=Xc.get(t);if(!e&&t===ym&&px())return Tx();if(!e)throw qr.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=mM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}$n(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M="firebase-heartbeat-database",wM=1,dl="firebase-heartbeat-store";let Pf=null;function Sx(){return Pf||(Pf=Ex(_M,wM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Pf}async function EM(t){try{const n=(await Sx()).transaction(dl),r=await n.objectStore(dl).get(Ix(t));return await n.done,r}catch(e){if(e instanceof xn)lr.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function Sw(t,e){try{const r=(await Sx()).transaction(dl,"readwrite");await r.objectStore(dl).put(e,Ix(t)),await r.done}catch(n){if(n instanceof xn)lr.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function Ix(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=1024,SM=30*24*60*60*1e3;class IM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=SM}),this._storage.overwrite(this._heartbeatsCache))}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iw(),{heartbeatsToSend:r,unsentEntries:i}=xM(this._heartbeatsCache.heartbeats),s=Yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return lr.warn(n),""}}}function Iw(){return new Date().toISOString().substring(0,10)}function xM(t,e=TM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yx()?vx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xw(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){$n(new Tn("platform-logger",e=>new $N(e),"PRIVATE")),$n(new Tn("heartbeat",e=>new IM(e),"PRIVATE")),on(gm,Ew,t),on(gm,Ew,"esm2017"),on("fire-js","")}CM("");function xx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PM=xx,Ax=new ts("auth","Firebase",xx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new Wh("@firebase/auth");function RM(t,...e){Jc.logLevel<=ne.WARN&&Jc.warn(`Auth (${Po}): ${t}`,...e)}function ac(t,...e){Jc.logLevel<=ne.ERROR&&Jc.error(`Auth (${Po}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw fy(t,...e)}function Nn(t,...e){return fy(t,...e)}function Cx(t,e,n){const r=Object.assign(Object.assign({},PM()),{[e]:n});return new ts("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return Cx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ax.create(t,...e)}function X(t,e,...n){if(!t)throw fy(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ac(e),new Error(e)}function ur(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kM(){return Aw()==="http:"||Aw()==="https:"}function Aw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kM()||gx()||"connection"in navigator)?navigator.onLine:!0}function DM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=iN()||aN()}get(){return bM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=new Nl(3e4,6e4);function ci(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hi(t,e,n,r,i={}){return Rx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return oN()||(c.referrerPolicy="no-referrer"),Px.fetch()(kx(t,t.config.apiHost,n,a),c)})}async function Rx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VM),e);try{const i=new OM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ru(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ru(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ru(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Cx(t,h,c);Sn(t,h)}}catch(i){if(i instanceof xn)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function Ml(t,e,n,r,i={}){const s=await hi(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?py(t.config,i):`${t.config.apiScheme}://${i}`}function MM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),NM.get())})}}function Ru(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function Cw(t){return t!==void 0&&t.enterprise!==void 0}class LM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jM(t,e){return hi(t,"GET","/v2/recaptchaConfig",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(t,e){return hi(t,"POST","/v1/accounts:delete",e)}async function bx(t,e){return hi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $M(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=my(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Va(Rf(i.auth_time)),issuedAtTime:Va(Rf(i.iat)),expirationTime:Va(Rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rf(t){return Number(t)*1e3}function my(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const i=dx(n);return i?JSON.parse(i):(ac("Failed to decode base64 JWT payload"),null)}catch(i){return ac("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pw(t){const e=my(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&UM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fl(t,bx(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dx(s.providerUserInfo):[],a=WM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function zM(t){const e=ze(t);await Zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dx(t){return t.map(e=>{var{providerId:n}=e,r=ry(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HM(t,e){const n=await Rx(t,{},async()=>{const r=Vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Px.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qM(t,e){return hi(t,"POST","/v2/accounts:revokeToken",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Pw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ry(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fl(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $M(this,e)}reload(){return zM(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await fl(this,FM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:b,isAnonymous:O,providerData:j,stsTokenManager:I}=n;X(T&&I,e,"internal-error");const w=Qs.fromJSON(this.name,I);X(typeof T=="string",e,"internal-error"),_r(d,e.name),_r(p,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),_r(g,e.name),_r(S,e.name),_r(x,e.name),_r(P,e.name),_r(_,e.name),_r(v,e.name);const A=new Xn({uid:T,auth:e,email:p,emailVerified:b,displayName:d,isAnonymous:O,photoURL:S,phoneNumber:g,tenantId:x,stsTokenManager:w,createdAt:_,lastLoginAt:v});return j&&Array.isArray(j)&&(A.providerData=j.map(C=>Object.assign({},C))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qs;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Dx(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Qs;a.updateFromIdToken(r);const l=new Xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Map;function Jn(t){ur(t instanceof Function,"Expected a class definition");let e=Rw.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vx.type="NONE";const kw=Vx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=lc(this.userKey,i.apiKey,s),this.fullPersistenceKey=lc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(Jn(kw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jn(kw);const o=lc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=Xn._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ys(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ys(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fx(e))return"Blackberry";if($x(e))return"Webos";if(Mx(e))return"Safari";if((e.includes("chrome/")||Ox(e))&&!e.includes("edge/"))return"Chrome";if(jx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nx(t=wt()){return/firefox\//i.test(t)}function Mx(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ox(t=wt()){return/crios\//i.test(t)}function Lx(t=wt()){return/iemobile/i.test(t)}function jx(t=wt()){return/android/i.test(t)}function Fx(t=wt()){return/blackberry/i.test(t)}function $x(t=wt()){return/webos/i.test(t)}function gy(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GM(t=wt()){var e;return gy(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KM(){return lN()&&document.documentMode===10}function Ux(t=wt()){return gy(t)||jx(t)||$x(t)||Fx(t)||/windows phone/i.test(t)||Lx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t,e=[]){let n;switch(t){case"Browser":n=bw(wt());break;case"Worker":n=`${bw(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Po}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YM(t,e={}){return hi(t,"GET","/v2/passwordPolicy",ci(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=6;class JM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dw(this),this.idTokenSubscription=new Dw(this),this.beforeStateQueue=new QM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ax,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bx(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(er(this));const n=e?ze(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YM(this),n=new JM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rs(t){return ze(t)}class Dw{constructor(e){this.auth=e,this.observer=null,this.addObserver=mN(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eO(t){Hh=t}function zx(t){return Hh.loadJS(t)}function tO(){return Hh.recaptchaEnterpriseScript}function nO(){return Hh.gapiScript}function rO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class iO{constructor(){this.enterprise=new sO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class sO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oO="recaptcha-enterprise",Wx="NO_RECAPTCHA";class aO{constructor(e){this.type=oO,this.auth=rs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new LM(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Cw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Wx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iO().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Cw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tO();l.length!==0&&(l+=a),zx(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sa(t,e,n,r=!1,i=!1){const s=new aO(t);let o;if(i)o=Wx;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Em(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await sa(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sa(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await sa(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await sa(t,e,n,!1,!0);return r(t,h)}return Promise.reject(l)})}else{const a=await sa(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t,e){const n=ns(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hl(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function uO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cO(t,e,n){const r=rs(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Hx(e),{host:o,port:a}=hO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dO()}function Hx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hO(t){const e=Hx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vw(o)}}}function Vw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function fO(t,e){return hi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pO(t,e){return Ml(t,"POST","/v1/accounts:signInWithPassword",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}async function gO(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends yy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Em(e,n,"signInWithPassword",pO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mO(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Em(e,r,"signUpPassword",fO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return gO(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e){return Ml(t,"POST","/v1/accounts:signInWithIdp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="http://localhost";class Gi extends yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ry(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xs(e,n)}buildRequest(){const e={requestUri:yO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _O(t){const e=pa(ma(t)).link,n=e?pa(ma(e)).deep_link_id:null,r=pa(ma(t)).deep_link_id;return(r?pa(ma(r)).link:null)||r||n||e||t}class vy{constructor(e){var n,r,i,s,o,a;const l=pa(ma(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=vO((i=l.mode)!==null&&i!==void 0?i:null);X(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_O(e);try{return new vy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,n){return pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vy.parseLink(n);return X(r,"argument-error"),pl._fromEmailAndCode(e,r.code,r.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends qx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Ol{constructor(){super("facebook.com")}static credential(e){return Gi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Ol{constructor(){super("github.com")}static credential(e){return Gi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ol{constructor(){super("twitter.com")}static credential(e,n){return Gi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){return Ml(t,"POST","/v1/accounts:signUp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=Nw(r);return new Ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nw(r);return new Ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,eh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new eh(e,n,r,i)}}function Gx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?eh._fromErrorAndOperation(t,s,e,r):s})}async function EO(t,e,n=!1){const r=await fl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ki._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(t,e,n=!1){const{auth:r}=t;if(bn(r.app))return Promise.reject(er(r));const i="reauthenticate";try{const s=await fl(t,Gx(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=my(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e,n=!1){if(bn(t.app))return Promise.reject(er(t));const r="signIn",i=await Gx(t,r,e),s=await Ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function SO(t,e){return Kx(rs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(t){const e=rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IO(t,e,n){if(bn(t.app))return Promise.reject(er(t));const r=rs(t),o=await Em(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wO,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qx(t),l}),a=await Ki._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Yx(t,e,n){return bn(t.app)?Promise.reject(er(t)):SO(ze(t),Ro.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qx(t),r})}function xO(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function AO(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function CO(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function PO(t){return ze(t).signOut()}const th="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(th,"1"),this.storage.removeItem(th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=1e3,kO=10;class Jx extends Xx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ux(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jx.type="LOCAL";const bO=Jx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx extends Xx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zx.type="SESSION";const eA=Zx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await DO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_y("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function NO(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function MO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LO(){return tA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="firebaseLocalStorageDb",jO=1,nh="firebaseLocalStorage",rA="fbase_key";class Ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gh(t,e){return t.transaction([nh],e?"readwrite":"readonly").objectStore(nh)}function FO(){const t=indexedDB.deleteDatabase(nA);return new Ll(t).toPromise()}function Tm(){const t=indexedDB.open(nA,jO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nh,{keyPath:rA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nh)?e(r):(r.close(),await FO(),e(await Tm()))})})}async function Mw(t,e,n){const r=Gh(t,!0).put({[rA]:e,value:n});return new Ll(r).toPromise()}async function $O(t,e){const n=Gh(t,!1).get(e),r=await new Ll(n).toPromise();return r===void 0?null:r.value}function Ow(t,e){const n=Gh(t,!0).delete(e);return new Ll(n).toPromise()}const UO=800,BO=3;class iA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qh._getInstance(LO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MO(),!this.activeServiceWorker)return;this.sender=new VO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tm();return await Mw(e,th,"1"),await Ow(e,th),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$O(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ow(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gh(i,!1).getAll();return new Ll(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iA.type="LOCAL";const zO=iA;new Nl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t,e){return e?Jn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HO(t){return Kx(t.auth,new wy(t),t.bypassAuthState)}function qO(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),TO(n,new wy(t),t.bypassAuthState)}async function GO(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),EO(n,new wy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HO;case"linkViaPopup":case"linkViaRedirect":return GO;case"reauthViaPopup":case"reauthViaRedirect":return qO;default:Sn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=new Nl(2e3,1e4);class Os extends sA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=_y();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KO.get())};e()}}Os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO="pendingRedirect",uc=new Map;class YO extends sA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uc.get(this.auth._key());if(!e){try{const r=await XO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uc.set(this.auth._key(),e)}return this.bypassAuthState||uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XO(t,e){const n=eL(e),r=ZO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JO(t,e){uc.set(t._key(),e)}function ZO(t){return Jn(t._redirectPersistence)}function eL(t){return lc(QO,t.config.apiKey,t.name)}async function tL(t,e,n=!1){if(bn(t.app))return Promise.reject(er(t));const r=rs(t),i=WO(r,e),o=await new YO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=10*60*1e3;class rL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lw(e))}saveEventToCache(e){this.cachedEventUids.add(Lw(e)),this.lastProcessedEventTime=Date.now()}}function Lw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(t,e={}){return hi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aL=/^https?/;async function lL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sL(t);for(const n of e)try{if(uL(n))return}catch{}Sn(t,"unauthorized-domain")}function uL(t){const e=_m(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aL.test(n))return!1;if(oL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL=new Nl(3e4,6e4);function jw(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hL(t){return new Promise((e,n)=>{var r,i,s;function o(){jw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jw(),n(Nn(t,"network-request-failed"))},timeout:cL.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)o();else{const a=rO("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},zx(`${nO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw cc=null,e})}let cc=null;function dL(t){return cc=cc||hL(t),cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=new Nl(5e3,15e3),pL="__/auth/iframe",mL="emulator/auth/iframe",gL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vL(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?py(e,mL):`https://${t.config.authDomain}/${pL}`,r={apiKey:e.apiKey,appName:t.name,v:Po},i=yL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vl(r).slice(1)}`}async function _L(t){const e=await dL(t),n=Mn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:vL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=Mn().setTimeout(()=>{s(o)},fL.get());function l(){Mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EL=500,TL=600,SL="_blank",IL="http://localhost";class Fw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xL(t,e,n,r=EL,i=TL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=wt().toLowerCase();n&&(a=Ox(c)?SL:n),Nx(c)&&(e=e||IL,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,S])=>`${p}${g}=${S},`,"");if(GM(c)&&a!=="_self")return AL(e||"",a),new Fw(null);const d=window.open(e||"",a,h);X(d,t,"popup-blocked");try{d.focus()}catch{}return new Fw(d)}function AL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL="__/auth/handler",PL="emulator/auth/handler",RL=encodeURIComponent("fac");async function $w(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Po,eventId:i};if(e instanceof qx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof Ol){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${RL}=${encodeURIComponent(l)}`:"";return`${kL(t)}?${Vl(a).slice(1)}${c}`}function kL({config:t}){return t.emulator?py(t,PL):`https://${t.authDomain}/${CL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="webStorageSupport";class bL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eA,this._completeRedirectFn=tL,this._overrideRedirectResult=JO}async _openPopup(e,n,r,i){var s;ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $w(e,n,r,_m(),i);return xL(e,o,_y())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $w(e,n,r,_m(),i);return NO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _L(e),r=new rL(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kf,{type:kf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[kf];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ux()||Mx()||gy()}}const DL=bL;var Uw="@firebase/auth",Bw="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ML(t){$n(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bx(t)},c=new ZM(r,i,s,l);return uO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new Tn("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(r=>new VL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Uw,Bw,NL(t)),on(Uw,Bw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=5*60,LL=mx("authIdTokenMaxAge")||OL;let zw=null;const jL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LL)return;const i=n==null?void 0:n.token;zw!==i&&(zw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FL(t=dy()){const e=ns(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lO(t,{popupRedirectResolver:DL,persistence:[zO,bO,eA]}),r=mx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=jL(s.toString());AO(n,o,()=>o(n.currentUser)),xO(n,a=>o(a))}}const i=fx("auth");return i&&cO(n,`http://${i}`),n}function $L(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$L().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ML("Browser");var UL="firebase",BL="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(UL,BL,"app");const aA="@firebase/installations",Ey="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=1e4,uA=`w:${Ey}`,cA="FIS_v2",zL="https://firebaseinstallations.googleapis.com/v1",WL=60*60*1e3,HL="installations",qL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qi=new ts(HL,qL,GL);function hA(t){return t instanceof xn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA({projectId:t}){return`${zL}/projects/${t}/installations`}function fA(t){return{token:t.token,requestStatus:2,expiresIn:QL(t.expiresIn),creationTime:Date.now()}}async function pA(t,e){const r=(await e.json()).error;return Qi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KL(t,{refreshToken:e}){const n=mA(t);return n.append("Authorization",YL(e)),n}async function gA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function QL(t){return Number(t.replace("s","000"))}function YL(t){return`${cA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dA(t),i=mA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:cA,appId:t.appId,sdkVersion:uA},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await gA(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:fA(c.authToken)}}else throw await pA("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=/^[cdef][\w-]{21}$/,Sm="";function e4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=t4(t);return ZL.test(n)?n:Sm}catch{return Sm}}function t4(t){return JL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new Map;function _A(t,e){const n=Kh(t);wA(n,e),n4(n,e)}function wA(t,e){const n=vA.get(t);if(n)for(const r of n)r(e)}function n4(t,e){const n=r4();n&&n.postMessage({key:t,fid:e}),i4()}let Di=null;function r4(){return!Di&&"BroadcastChannel"in self&&(Di=new BroadcastChannel("[Firebase] FID Change"),Di.onmessage=t=>{wA(t.data.key,t.data.fid)}),Di}function i4(){vA.size===0&&Di&&(Di.close(),Di=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="firebase-installations-database",o4=1,Yi="firebase-installations-store";let bf=null;function Ty(){return bf||(bf=Ex(s4,o4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yi)}}})),bf}async function rh(t,e){const n=Kh(t),i=(await Ty()).transaction(Yi,"readwrite"),s=i.objectStore(Yi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&_A(t,e.fid),e}async function EA(t){const e=Kh(t),r=(await Ty()).transaction(Yi,"readwrite");await r.objectStore(Yi).delete(e),await r.done}async function Qh(t,e){const n=Kh(t),i=(await Ty()).transaction(Yi,"readwrite"),s=i.objectStore(Yi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&_A(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(t){let e;const n=await Qh(t.appConfig,r=>{const i=a4(r),s=l4(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Sm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function a4(t){const e=t||{fid:e4(),registrationStatus:0};return TA(e)}function l4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=u4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:c4(t)}:{installationEntry:e}}async function u4(t,e){try{const n=await XL(t,e);return rh(t.appConfig,n)}catch(n){throw hA(n)&&n.customData.serverCode===409?await EA(t.appConfig):await rh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function c4(t){let e=await Ww(t.appConfig);for(;e.registrationStatus===1;)await yA(100),e=await Ww(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sy(t);return r||n}return e}function Ww(t){return Qh(t,e=>{if(!e)throw Qi.create("installation-not-found");return TA(e)})}function TA(t){return h4(t)?{fid:t.fid,registrationStatus:0}:t}function h4(t){return t.registrationStatus===1&&t.registrationTime+lA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d4({appConfig:t,heartbeatServiceProvider:e},n){const r=f4(t,n),i=KL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:uA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await gA(()=>fetch(r,a));if(l.ok){const c=await l.json();return fA(c)}else throw await pA("Generate Auth Token",l)}function f4(t,{fid:e}){return`${dA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(t,e=!1){let n;const r=await Qh(t.appConfig,s=>{if(!SA(s))throw Qi.create("not-registered");const o=s.authToken;if(!e&&g4(o))return s;if(o.requestStatus===1)return n=p4(t,e),s;{if(!navigator.onLine)throw Qi.create("app-offline");const a=v4(s);return n=m4(t,a),a}});return n?await n:r.authToken}async function p4(t,e){let n=await Hw(t.appConfig);for(;n.authToken.requestStatus===1;)await yA(100),n=await Hw(t.appConfig);const r=n.authToken;return r.requestStatus===0?Iy(t,e):r}function Hw(t){return Qh(t,e=>{if(!SA(e))throw Qi.create("not-registered");const n=e.authToken;return _4(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function m4(t,e){try{const n=await d4(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await rh(t.appConfig,r),n}catch(n){if(hA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await EA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rh(t.appConfig,r)}throw n}}function SA(t){return t!==void 0&&t.registrationStatus===2}function g4(t){return t.requestStatus===2&&!y4(t)}function y4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+WL}function v4(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _4(t){return t.requestStatus===1&&t.requestTime+lA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w4(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sy(e);return r?r.catch(console.error):Iy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E4(t,e=!1){const n=t;return await T4(n),(await Iy(n,e)).token}async function T4(t){const{registrationPromise:e}=await Sy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(t){if(!t||!t.options)throw Df("App Configuration");if(!t.name)throw Df("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Df(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Df(t){return Qi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="installations",I4="installations-internal",x4=t=>{const e=t.getProvider("app").getImmediate(),n=S4(e),r=ns(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},A4=t=>{const e=t.getProvider("app").getImmediate(),n=ns(e,IA).getImmediate();return{getId:()=>w4(n),getToken:i=>E4(n,i)}};function C4(){$n(new Tn(IA,x4,"PUBLIC")),$n(new Tn(I4,A4,"PRIVATE"))}C4();on(aA,Ey);on(aA,Ey,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="analytics",P4="firebase_id",R4="origin",k4=60*1e3,b4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Wh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qt=new ts("analytics","Analytics",D4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(t){if(!t.startsWith(xy)){const e=qt.create("invalid-gtag-resource",{gtagURL:t});return jt.warn(e.message),""}return t}function xA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function N4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function M4(t,e){const n=N4("firebase-js-sdk-policy",{createScriptURL:V4}),r=document.createElement("script"),i=`${xy}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function O4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function L4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await xA(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){jt.error(a)}t("config",i,s)}async function j4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await xA(n);for(const l of o){const c=a.find(d=>d.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){jt.error(s)}}function F4(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await j4(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await L4(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){jt.error(a)}}return i}function $4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=F4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function U4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(xy)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4=30,z4=1e3;class W4{constructor(e={},n=z4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const AA=new W4;function H4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function q4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:H4(r)},s=b4.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function G4(t,e=AA,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw qt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Y4;return setTimeout(async()=>{a.abort()},n!==void 0?n:k4),CA({appId:r,apiKey:i,measurementId:s},o,a,e)}async function CA(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=AA){var s;const{appId:o,measurementId:a}=t;try{await K4(r,e)}catch(l){if(a)return jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await q4(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Q4(c)){if(i.deleteThrottleMetadata(o),a)return jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?yw(n,i.intervalMillis,B4):yw(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,d),jt.debug(`Calling attemptFetch again in ${h} millis`),CA(t,d,r,i)}}function K4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q4(t){if(!(t instanceof xn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Y4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function X4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J4(){if(yx())try{await vx()}catch(t){return jt.warn(qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return jt.warn(qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Z4(t,e,n,r,i,s,o){var a;const l=G4(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&jt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>jt.error(g)),e.push(l);const c=J4().then(g=>{if(g)return r.getId()}),[h,d]=await Promise.all([l,c]);U4(s)||M4(s,h.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[R4]="firebase",p.update=!0,d!=null&&(p[P4]=d),i("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.app=e}_delete(){return delete Na[this.app.options.appId],Promise.resolve()}}let Na={},qw=[];const Gw={};let Vf="dataLayer",tj="gtag",Kw,PA,Qw=!1;function nj(){const t=[];if(gx()&&t.push("This is a browser extension environment."),cN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=qt.create("invalid-analytics-context",{errorInfo:e});jt.warn(n.message)}}function rj(t,e,n){nj();const r=t.options.appId;if(!r)throw qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qt.create("no-api-key");if(Na[r]!=null)throw qt.create("already-exists",{id:r});if(!Qw){O4(Vf);const{wrappedGtag:s,gtagCore:o}=$4(Na,qw,Gw,Vf,tj);PA=s,Kw=o,Qw=!0}return Na[r]=Z4(t,qw,Gw,e,Kw,Vf,n),new ej(t)}function RA(t=dy()){t=ze(t);const e=ns(t,ih);return e.isInitialized()?e.getImmediate():ij(t)}function ij(t,e={}){const n=ns(t,ih);if(n.isInitialized()){const i=n.getImmediate();if(hl(e,n.getOptions()))return i;throw qt.create("already-initialized")}return n.initialize({options:e})}function sj(t,e,n,r){t=ze(t),X4(PA,Na[t.app.options.appId],e,n,r).catch(i=>jt.error(i))}const Yw="@firebase/analytics",Xw="0.10.10";function oj(){$n(new Tn(ih,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return rj(r,i,n)},"PUBLIC")),$n(new Tn("analytics-internal",t,"PRIVATE")),on(Yw,Xw),on(Yw,Xw,"esm2017");function t(e){try{const n=e.getProvider(ih).getImmediate();return{logEvent:(r,i,s)=>sj(n,r,i,s)}}catch(n){throw qt.create("interop-component-reg-failed",{reason:n})}}}oj();var Jw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,kA;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,w){function A(){}A.prototype=w.prototype,I.D=w.prototype,I.prototype=new A,I.prototype.constructor=I,I.C=function(C,k,N){for(var R=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)R[Ze-2]=arguments[Ze];return w.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,w,A){A||(A=0);var C=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)C[k]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(k=0;16>k;++k)C[k]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=I.g[0],A=I.g[1],k=I.g[2];var N=I.g[3],R=w+(N^A&(k^N))+C[0]+3614090360&4294967295;w=A+(R<<7&4294967295|R>>>25),R=N+(k^w&(A^k))+C[1]+3905402710&4294967295,N=w+(R<<12&4294967295|R>>>20),R=k+(A^N&(w^A))+C[2]+606105819&4294967295,k=N+(R<<17&4294967295|R>>>15),R=A+(w^k&(N^w))+C[3]+3250441966&4294967295,A=k+(R<<22&4294967295|R>>>10),R=w+(N^A&(k^N))+C[4]+4118548399&4294967295,w=A+(R<<7&4294967295|R>>>25),R=N+(k^w&(A^k))+C[5]+1200080426&4294967295,N=w+(R<<12&4294967295|R>>>20),R=k+(A^N&(w^A))+C[6]+2821735955&4294967295,k=N+(R<<17&4294967295|R>>>15),R=A+(w^k&(N^w))+C[7]+4249261313&4294967295,A=k+(R<<22&4294967295|R>>>10),R=w+(N^A&(k^N))+C[8]+1770035416&4294967295,w=A+(R<<7&4294967295|R>>>25),R=N+(k^w&(A^k))+C[9]+2336552879&4294967295,N=w+(R<<12&4294967295|R>>>20),R=k+(A^N&(w^A))+C[10]+4294925233&4294967295,k=N+(R<<17&4294967295|R>>>15),R=A+(w^k&(N^w))+C[11]+2304563134&4294967295,A=k+(R<<22&4294967295|R>>>10),R=w+(N^A&(k^N))+C[12]+1804603682&4294967295,w=A+(R<<7&4294967295|R>>>25),R=N+(k^w&(A^k))+C[13]+4254626195&4294967295,N=w+(R<<12&4294967295|R>>>20),R=k+(A^N&(w^A))+C[14]+2792965006&4294967295,k=N+(R<<17&4294967295|R>>>15),R=A+(w^k&(N^w))+C[15]+1236535329&4294967295,A=k+(R<<22&4294967295|R>>>10),R=w+(k^N&(A^k))+C[1]+4129170786&4294967295,w=A+(R<<5&4294967295|R>>>27),R=N+(A^k&(w^A))+C[6]+3225465664&4294967295,N=w+(R<<9&4294967295|R>>>23),R=k+(w^A&(N^w))+C[11]+643717713&4294967295,k=N+(R<<14&4294967295|R>>>18),R=A+(N^w&(k^N))+C[0]+3921069994&4294967295,A=k+(R<<20&4294967295|R>>>12),R=w+(k^N&(A^k))+C[5]+3593408605&4294967295,w=A+(R<<5&4294967295|R>>>27),R=N+(A^k&(w^A))+C[10]+38016083&4294967295,N=w+(R<<9&4294967295|R>>>23),R=k+(w^A&(N^w))+C[15]+3634488961&4294967295,k=N+(R<<14&4294967295|R>>>18),R=A+(N^w&(k^N))+C[4]+3889429448&4294967295,A=k+(R<<20&4294967295|R>>>12),R=w+(k^N&(A^k))+C[9]+568446438&4294967295,w=A+(R<<5&4294967295|R>>>27),R=N+(A^k&(w^A))+C[14]+3275163606&4294967295,N=w+(R<<9&4294967295|R>>>23),R=k+(w^A&(N^w))+C[3]+4107603335&4294967295,k=N+(R<<14&4294967295|R>>>18),R=A+(N^w&(k^N))+C[8]+1163531501&4294967295,A=k+(R<<20&4294967295|R>>>12),R=w+(k^N&(A^k))+C[13]+2850285829&4294967295,w=A+(R<<5&4294967295|R>>>27),R=N+(A^k&(w^A))+C[2]+4243563512&4294967295,N=w+(R<<9&4294967295|R>>>23),R=k+(w^A&(N^w))+C[7]+1735328473&4294967295,k=N+(R<<14&4294967295|R>>>18),R=A+(N^w&(k^N))+C[12]+2368359562&4294967295,A=k+(R<<20&4294967295|R>>>12),R=w+(A^k^N)+C[5]+4294588738&4294967295,w=A+(R<<4&4294967295|R>>>28),R=N+(w^A^k)+C[8]+2272392833&4294967295,N=w+(R<<11&4294967295|R>>>21),R=k+(N^w^A)+C[11]+1839030562&4294967295,k=N+(R<<16&4294967295|R>>>16),R=A+(k^N^w)+C[14]+4259657740&4294967295,A=k+(R<<23&4294967295|R>>>9),R=w+(A^k^N)+C[1]+2763975236&4294967295,w=A+(R<<4&4294967295|R>>>28),R=N+(w^A^k)+C[4]+1272893353&4294967295,N=w+(R<<11&4294967295|R>>>21),R=k+(N^w^A)+C[7]+4139469664&4294967295,k=N+(R<<16&4294967295|R>>>16),R=A+(k^N^w)+C[10]+3200236656&4294967295,A=k+(R<<23&4294967295|R>>>9),R=w+(A^k^N)+C[13]+681279174&4294967295,w=A+(R<<4&4294967295|R>>>28),R=N+(w^A^k)+C[0]+3936430074&4294967295,N=w+(R<<11&4294967295|R>>>21),R=k+(N^w^A)+C[3]+3572445317&4294967295,k=N+(R<<16&4294967295|R>>>16),R=A+(k^N^w)+C[6]+76029189&4294967295,A=k+(R<<23&4294967295|R>>>9),R=w+(A^k^N)+C[9]+3654602809&4294967295,w=A+(R<<4&4294967295|R>>>28),R=N+(w^A^k)+C[12]+3873151461&4294967295,N=w+(R<<11&4294967295|R>>>21),R=k+(N^w^A)+C[15]+530742520&4294967295,k=N+(R<<16&4294967295|R>>>16),R=A+(k^N^w)+C[2]+3299628645&4294967295,A=k+(R<<23&4294967295|R>>>9),R=w+(k^(A|~N))+C[0]+4096336452&4294967295,w=A+(R<<6&4294967295|R>>>26),R=N+(A^(w|~k))+C[7]+1126891415&4294967295,N=w+(R<<10&4294967295|R>>>22),R=k+(w^(N|~A))+C[14]+2878612391&4294967295,k=N+(R<<15&4294967295|R>>>17),R=A+(N^(k|~w))+C[5]+4237533241&4294967295,A=k+(R<<21&4294967295|R>>>11),R=w+(k^(A|~N))+C[12]+1700485571&4294967295,w=A+(R<<6&4294967295|R>>>26),R=N+(A^(w|~k))+C[3]+2399980690&4294967295,N=w+(R<<10&4294967295|R>>>22),R=k+(w^(N|~A))+C[10]+4293915773&4294967295,k=N+(R<<15&4294967295|R>>>17),R=A+(N^(k|~w))+C[1]+2240044497&4294967295,A=k+(R<<21&4294967295|R>>>11),R=w+(k^(A|~N))+C[8]+1873313359&4294967295,w=A+(R<<6&4294967295|R>>>26),R=N+(A^(w|~k))+C[15]+4264355552&4294967295,N=w+(R<<10&4294967295|R>>>22),R=k+(w^(N|~A))+C[6]+2734768916&4294967295,k=N+(R<<15&4294967295|R>>>17),R=A+(N^(k|~w))+C[13]+1309151649&4294967295,A=k+(R<<21&4294967295|R>>>11),R=w+(k^(A|~N))+C[4]+4149444226&4294967295,w=A+(R<<6&4294967295|R>>>26),R=N+(A^(w|~k))+C[11]+3174756917&4294967295,N=w+(R<<10&4294967295|R>>>22),R=k+(w^(N|~A))+C[2]+718787259&4294967295,k=N+(R<<15&4294967295|R>>>17),R=A+(N^(k|~w))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+w&4294967295,I.g[1]=I.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,w){w===void 0&&(w=I.length);for(var A=w-this.blockSize,C=this.B,k=this.h,N=0;N<w;){if(k==0)for(;N<=A;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<w;)if(C[k++]=I.charCodeAt(N++),k==this.blockSize){i(this,C),k=0;break}}else for(;N<w;)if(C[k++]=I[N++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=w},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var w=1;w<I.length-8;++w)I[w]=0;var A=8*this.o;for(w=I.length-8;w<I.length;++w)I[w]=A&255,A/=256;for(this.u(I),I=Array(16),w=A=0;4>w;++w)for(var C=0;32>C;C+=8)I[A++]=this.g[w]>>>C&255;return I};function s(I,w){var A=a;return Object.prototype.hasOwnProperty.call(A,I)?A[I]:A[I]=w(I)}function o(I,w){this.h=w;for(var A=[],C=!0,k=I.length-1;0<=k;k--){var N=I[k]|0;C&&N==w||(A[k]=N,C=!1)}this.g=A}var a={};function l(I){return-128<=I&&128>I?s(I,function(w){return new o([w|0],0>w?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return d;if(0>I)return P(c(-I));for(var w=[],A=1,C=0;I>=A;C++)w[C]=I/A|0,A*=4294967296;return new o(w,0)}function h(I,w){if(I.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I.charAt(0)=="-")return P(h(I.substring(1),w));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(w,8)),C=d,k=0;k<I.length;k+=8){var N=Math.min(8,I.length-k),R=parseInt(I.substring(k,k+N),w);8>N?(N=c(Math.pow(w,N)),C=C.j(N).add(c(R))):(C=C.j(A),C=C.add(c(R)))}return C}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(x(this))return-P(this).m();for(var I=0,w=1,A=0;A<this.g.length;A++){var C=this.i(A);I+=(0<=C?C:4294967296+C)*w,w*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(x(this))return"-"+P(this).toString(I);for(var w=c(Math.pow(I,6)),A=this,C="";;){var k=b(A,w).g;A=_(A,k.j(w));var N=((0<A.g.length?A.g[0]:A.h)>>>0).toString(I);if(A=k,S(A))return N+C;for(;6>N.length;)N="0"+N;C=N+C}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var w=0;w<I.g.length;w++)if(I.g[w]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=_(this,I),x(I)?-1:S(I)?0:1};function P(I){for(var w=I.g.length,A=[],C=0;C<w;C++)A[C]=~I.g[C];return new o(A,~I.h).add(p)}t.abs=function(){return x(this)?P(this):this},t.add=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],C=0,k=0;k<=w;k++){var N=C+(this.i(k)&65535)+(I.i(k)&65535),R=(N>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);C=R>>>16,N&=65535,R&=65535,A[k]=R<<16|N}return new o(A,A[A.length-1]&-2147483648?-1:0)};function _(I,w){return I.add(P(w))}t.j=function(I){if(S(this)||S(I))return d;if(x(this))return x(I)?P(this).j(P(I)):P(P(this).j(I));if(x(I))return P(this.j(P(I)));if(0>this.l(g)&&0>I.l(g))return c(this.m()*I.m());for(var w=this.g.length+I.g.length,A=[],C=0;C<2*w;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<I.g.length;k++){var N=this.i(C)>>>16,R=this.i(C)&65535,Ze=I.i(k)>>>16,An=I.i(k)&65535;A[2*C+2*k]+=R*An,v(A,2*C+2*k),A[2*C+2*k+1]+=N*An,v(A,2*C+2*k+1),A[2*C+2*k+1]+=R*Ze,v(A,2*C+2*k+1),A[2*C+2*k+2]+=N*Ze,v(A,2*C+2*k+2)}for(C=0;C<w;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=w;C<2*w;C++)A[C]=0;return new o(A,0)};function v(I,w){for(;(I[w]&65535)!=I[w];)I[w+1]+=I[w]>>>16,I[w]&=65535,w++}function T(I,w){this.g=I,this.h=w}function b(I,w){if(S(w))throw Error("division by zero");if(S(I))return new T(d,d);if(x(I))return w=b(P(I),w),new T(P(w.g),P(w.h));if(x(w))return w=b(I,P(w)),new T(P(w.g),w.h);if(30<I.g.length){if(x(I)||x(w))throw Error("slowDivide_ only works with positive integers.");for(var A=p,C=w;0>=C.l(I);)A=O(A),C=O(C);var k=j(A,1),N=j(C,1);for(C=j(C,2),A=j(A,2);!S(C);){var R=N.add(C);0>=R.l(I)&&(k=k.add(A),N=R),C=j(C,1),A=j(A,1)}return w=_(I,k.j(w)),new T(k,w)}for(k=d;0<=I.l(w);){for(A=Math.max(1,Math.floor(I.m()/w.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),N=c(A),R=N.j(w);x(R)||0<R.l(I);)A-=C,N=c(A),R=N.j(w);S(N)&&(N=p),k=k.add(N),I=_(I,R)}return new T(k,I)}t.A=function(I){return b(this,I).h},t.and=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],C=0;C<w;C++)A[C]=this.i(C)&I.i(C);return new o(A,this.h&I.h)},t.or=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],C=0;C<w;C++)A[C]=this.i(C)|I.i(C);return new o(A,this.h|I.h)},t.xor=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],C=0;C<w;C++)A[C]=this.i(C)^I.i(C);return new o(A,this.h^I.h)};function O(I){for(var w=I.g.length+1,A=[],C=0;C<w;C++)A[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(A,I.h)}function j(I,w){var A=w>>5;w%=32;for(var C=I.g.length-A,k=[],N=0;N<C;N++)k[N]=0<w?I.i(N+A)>>>w|I.i(N+A+1)<<32-w:I.i(N+A);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Li=o}).apply(typeof Jw<"u"?Jw:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bA,ga,DA,hc,Im,VA,NA,MA;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,m){return u==Array.prototype||u==Object.prototype||(u[f]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var f=0;f<u.length;++f){var m=u[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var m=r;u=u.split(".");for(var E=0;E<u.length-1;E++){var V=u[E];if(!(V in m))break e;m=m[V]}u=u[u.length-1],E=m[u],f=f(E),f!=E&&f!=null&&e(m,u,{configurable:!0,writable:!0,value:f})}}function s(u,f){u instanceof String&&(u+="");var m=0,E=!1,V={next:function(){if(!E&&m<u.length){var L=m++;return{value:f(L,u[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function c(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function h(u,f,m){return u.call.apply(u.bind,arguments)}function d(u,f,m){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,E),u.apply(f,V)}}return function(){return u.apply(f,arguments)}}function p(u,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(u,f){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function S(u,f){function m(){}m.prototype=f.prototype,u.aa=f.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(E,V,L){for(var z=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)z[pe-2]=arguments[pe];return f.prototype[V].apply(E,z)}}function x(u){const f=u.length;if(0<f){const m=Array(f);for(let E=0;E<f;E++)m[E]=u[E];return m}return[]}function P(u,f){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const V=u.length||0,L=E.length||0;u.length=V+L;for(let z=0;z<L;z++)u[V+z]=E[z]}else u.push(E)}}class _{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function v(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var O=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function j(u,f,m){for(const E in u)f.call(m,u[E],E,u)}function I(u,f){for(const m in u)f.call(void 0,u[m],m,u)}function w(u){const f={};for(const m in u)f[m]=u[m];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,f){let m,E;for(let V=1;V<arguments.length;V++){E=arguments[V];for(m in E)u[m]=E[m];for(let L=0;L<A.length;L++)m=A[L],Object.prototype.hasOwnProperty.call(E,m)&&(u[m]=E[m])}}function k(u){var f=1;u=u.split(":");const m=[];for(;0<f&&u.length;)m.push(u.shift()),f--;return u.length&&m.push(u.join(":")),m}function N(u){a.setTimeout(()=>{throw u},0)}function R(){var u=G;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,m){const E=An.get();E.set(f,m),this.h?this.h.next=E:this.g=E,this.h=E}}var An=new _(()=>new Cn,u=>u.reset());class Cn{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,B=!1,G=new Ze,K=()=>{const u=a.Promise.resolve(void 0);oe=()=>{u.then(me)}};var me=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(m){N(m)}var f=An;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Et=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return u}();function kt(u,f){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(O){e:{try{b(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else m=="mouseover"?f=u.fromElement:m=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Tt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&kt.aa.h.call(this)}}S(kt,ge);var Tt={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),Lo=0;function us(u,f,m,E,V){this.listener=u,this.proxy=null,this.src=f,this.type=m,this.capture=!!E,this.ha=V,this.key=++Lo,this.da=this.fa=!1}function Ft(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Kl(u){this.src=u,this.g={},this.h=0}Kl.prototype.add=function(u,f,m,E,V){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var z=Td(u,f,E,V);return-1<z?(f=u[z],m||(f.fa=!1)):(f=new us(f,this.src,L,!!E,V),f.fa=m,u.push(f)),f};function Ed(u,f){var m=f.type;if(m in u.g){var E=u.g[m],V=Array.prototype.indexOf.call(E,f,void 0),L;(L=0<=V)&&Array.prototype.splice.call(E,V,1),L&&(Ft(f),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Td(u,f,m,E){for(var V=0;V<u.length;++V){var L=u[V];if(!L.da&&L.listener==f&&L.capture==!!m&&L.ha==E)return V}return-1}var Sd="closure_lm_"+(1e6*Math.random()|0),Id={};function Fv(u,f,m,E,V){if(E&&E.once)return Uv(u,f,m,E,V);if(Array.isArray(f)){for(var L=0;L<f.length;L++)Fv(u,f[L],m,E,V);return null}return m=Pd(m),u&&u[Ge]?u.K(f,m,c(E)?!!E.capture:!!E,V):$v(u,f,m,!1,E,V)}function $v(u,f,m,E,V,L){if(!f)throw Error("Invalid event type");var z=c(V)?!!V.capture:!!V,pe=Ad(u);if(pe||(u[Sd]=pe=new Kl(u)),m=pe.add(f,m,E,z,L),m.proxy)return m;if(E=WR(),m.proxy=E,E.src=u,E.listener=m,u.addEventListener)Et||(V=z),V===void 0&&(V=!1),u.addEventListener(f.toString(),E,V);else if(u.attachEvent)u.attachEvent(zv(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function WR(){function u(m){return f.call(u.src,u.listener,m)}const f=HR;return u}function Uv(u,f,m,E,V){if(Array.isArray(f)){for(var L=0;L<f.length;L++)Uv(u,f[L],m,E,V);return null}return m=Pd(m),u&&u[Ge]?u.L(f,m,c(E)?!!E.capture:!!E,V):$v(u,f,m,!0,E,V)}function Bv(u,f,m,E,V){if(Array.isArray(f))for(var L=0;L<f.length;L++)Bv(u,f[L],m,E,V);else E=c(E)?!!E.capture:!!E,m=Pd(m),u&&u[Ge]?(u=u.i,f=String(f).toString(),f in u.g&&(L=u.g[f],m=Td(L,m,E,V),-1<m&&(Ft(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete u.g[f],u.h--)))):u&&(u=Ad(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Td(f,m,E,V)),(m=-1<u?f[u]:null)&&xd(m))}function xd(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Ge])Ed(f.i,u);else{var m=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(m,E,u.capture):f.detachEvent?f.detachEvent(zv(m),E):f.addListener&&f.removeListener&&f.removeListener(E),(m=Ad(f))?(Ed(m,u),m.h==0&&(m.src=null,f[Sd]=null)):Ft(u)}}}function zv(u){return u in Id?Id[u]:Id[u]="on"+u}function HR(u,f){if(u.da)u=!0;else{f=new kt(f,this);var m=u.listener,E=u.ha||u.src;u.fa&&xd(u),u=m.call(E,f)}return u}function Ad(u){return u=u[Sd],u instanceof Kl?u:null}var Cd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pd(u){return typeof u=="function"?u:(u[Cd]||(u[Cd]=function(f){return u.handleEvent(f)}),u[Cd])}function lt(){ce.call(this),this.i=new Kl(this),this.M=this,this.F=null}S(lt,ce),lt.prototype[Ge]=!0,lt.prototype.removeEventListener=function(u,f,m,E){Bv(this,u,f,m,E)};function St(u,f){var m,E=u.F;if(E)for(m=[];E;E=E.F)m.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new ge(f,u);else if(f instanceof ge)f.target=f.target||u;else{var V=f;f=new ge(E,u),C(f,V)}if(V=!0,m)for(var L=m.length-1;0<=L;L--){var z=f.g=m[L];V=Ql(z,E,!0,f)&&V}if(z=f.g=u,V=Ql(z,E,!0,f)&&V,V=Ql(z,E,!1,f)&&V,m)for(L=0;L<m.length;L++)z=f.g=m[L],V=Ql(z,E,!1,f)&&V}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var m=u.g[f],E=0;E<m.length;E++)Ft(m[E]);delete u.g[f],u.h--}}this.F=null},lt.prototype.K=function(u,f,m,E){return this.i.add(String(u),f,!1,m,E)},lt.prototype.L=function(u,f,m,E){return this.i.add(String(u),f,!0,m,E)};function Ql(u,f,m,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,L=0;L<f.length;++L){var z=f[L];if(z&&!z.da&&z.capture==m){var pe=z.listener,et=z.ha||z.src;z.fa&&Ed(u.i,z),V=pe.call(et,E)!==!1&&V}}return V&&!E.defaultPrevented}function Wv(u,f,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(u,f||0)}function Hv(u){u.g=Wv(()=>{u.g=null,u.i&&(u.i=!1,Hv(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class qR extends ce{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Hv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jo(u){ce.call(this),this.h=u,this.g={}}S(jo,ce);var qv=[];function Gv(u){j(u.g,function(f,m){this.g.hasOwnProperty(m)&&xd(f)},u),u.g={}}jo.prototype.N=function(){jo.aa.N.call(this),Gv(this)},jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rd=a.JSON.stringify,GR=a.JSON.parse,KR=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function kd(){}kd.prototype.h=null;function Kv(u){return u.h||(u.h=u.i())}function Qv(){}var Fo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bd(){ge.call(this,"d")}S(bd,ge);function Dd(){ge.call(this,"c")}S(Dd,ge);var mi={},Yv=null;function Yl(){return Yv=Yv||new lt}mi.La="serverreachability";function Xv(u){ge.call(this,mi.La,u)}S(Xv,ge);function $o(u){const f=Yl();St(f,new Xv(f))}mi.STAT_EVENT="statevent";function Jv(u,f){ge.call(this,mi.STAT_EVENT,u),this.stat=f}S(Jv,ge);function It(u){const f=Yl();St(f,new Jv(f,u))}mi.Ma="timingevent";function Zv(u,f){ge.call(this,mi.Ma,u),this.size=f}S(Zv,ge);function Uo(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},f)}function Bo(){this.g=!0}Bo.prototype.xa=function(){this.g=!1};function QR(u,f,m,E,V,L){u.info(function(){if(u.g)if(L)for(var z="",pe=L.split("&"),et=0;et<pe.length;et++){var ue=pe[et].split("=");if(1<ue.length){var ut=ue[0];ue=ue[1];var ct=ut.split("_");z=2<=ct.length&&ct[1]=="type"?z+(ut+"="+ue+"&"):z+(ut+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+E+") [attempt "+V+"]: "+f+`
`+m+`
`+z})}function YR(u,f,m,E,V,L,z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+V+"]: "+f+`
`+m+`
`+L+" "+z})}function cs(u,f,m,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+JR(u,m)+(E?" "+E:"")})}function XR(u,f){u.info(function(){return"TIMEOUT: "+f})}Bo.prototype.info=function(){};function JR(u,f){if(!u.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var E=m[u];if(!(2>E.length)){var V=E[1];if(Array.isArray(V)&&!(1>V.length)){var L=V[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<V.length;z++)V[z]=""}}}}return Rd(m)}catch{return f}}var Xl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},e0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vd;function Jl(){}S(Jl,kd),Jl.prototype.g=function(){return new XMLHttpRequest},Jl.prototype.i=function(){return{}},Vd=new Jl;function mr(u,f,m,E){this.j=u,this.i=f,this.l=m,this.R=E||1,this.U=new jo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new t0}function t0(){this.i=null,this.g="",this.h=!1}var n0={},Nd={};function Md(u,f,m){u.L=1,u.v=nu(zn(f)),u.m=m,u.P=!0,r0(u,null)}function r0(u,f){u.F=Date.now(),Zl(u),u.A=zn(u.v);var m=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),y0(m.i,"t",E),u.C=0,m=u.j.J,u.h=new t0,u.g=M0(u.j,m?f:null,!u.m),0<u.O&&(u.M=new qR(p(u.Y,u,u.g),u.O)),f=u.U,m=u.g,E=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(qv[0]=V.toString()),V=qv);for(var L=0;L<V.length;L++){var z=Fv(m,V[L],E||f.handleEvent,!1,f.h||f);if(!z)break;f.g[z.key]=z}f=u.H?w(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),$o(),QR(u.i,u.u,u.A,u.l,u.R,u.m)}mr.prototype.ca=function(u){u=u.target;const f=this.M;f&&Wn(u)==3?f.j():this.Y(u)},mr.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Wn(this.g);var f=this.g.Ba();const fs=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||I0(this.g)))){this.J||ct!=4||f==7||(f==8||0>=fs?$o(3):$o(2)),Od(this);var m=this.g.Z();this.X=m;t:if(i0(this)){var E=I0(this.g);u="";var V=E.length,L=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gi(this),zo(this);var z="";break t}this.h.i=new a.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(L&&f==V-1)});E.length=0,this.h.g+=u,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,YR(this.i,this.u,this.A,this.l,this.R,ct,m),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,et=this.g;if((pe=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var ue=pe;break t}}ue=null}if(m=ue)cs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ld(this,m);else{this.o=!1,this.s=3,It(12),gi(this),zo(this);break e}}if(this.P){m=!0;let cn;for(;!this.J&&this.C<z.length;)if(cn=ZR(this,z),cn==Nd){ct==4&&(this.s=4,It(14),m=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==n0){this.s=4,It(15),cs(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else cs(this.i,this.l,cn,null),Ld(this,cn);if(i0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||z.length!=0||this.h.h||(this.s=1,It(16),m=!1),this.o=this.o&&m,!m)cs(this.i,this.l,z,"[Invalid Chunked Response]"),gi(this),zo(this);else if(0<z.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),zd(ut),ut.M=!0,It(11))}}else cs(this.i,this.l,z,null),Ld(this,z);ct==4&&gi(this),this.o&&!this.J&&(ct==4?b0(this.j,this):(this.o=!1,Zl(this)))}else gk(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),gi(this),zo(this)}}}catch{}finally{}};function i0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ZR(u,f){var m=u.C,E=f.indexOf(`
`,m);return E==-1?Nd:(m=Number(f.substring(m,E)),isNaN(m)?n0:(E+=1,E+m>f.length?Nd:(f=f.slice(E,E+m),u.C=E+m,f)))}mr.prototype.cancel=function(){this.J=!0,gi(this)};function Zl(u){u.S=Date.now()+u.I,s0(u,u.I)}function s0(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Uo(p(u.ba,u),f)}function Od(u){u.B&&(a.clearTimeout(u.B),u.B=null)}mr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(XR(this.i,this.A),this.L!=2&&($o(),It(17)),gi(this),this.s=2,zo(this)):s0(this,this.S-u)};function zo(u){u.j.G==0||u.J||b0(u.j,u)}function gi(u){Od(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,Gv(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Ld(u,f){try{var m=u.j;if(m.G!=0&&(m.g==u||jd(m.h,u))){if(!u.K&&jd(m.h,u)&&m.G==3){try{var E=m.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var V=E;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)lu(m),ou(m);else break e;Bd(m),It(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=Uo(p(m.Za,m),6e3));if(1>=l0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else vi(m,11)}else if((u.K||m.g==u)&&lu(m),!v(f))for(V=m.Da.g.parse(f),f=0;f<V.length;f++){let ue=V[f];if(m.T=ue[0],ue=ue[1],m.G==2)if(ue[0]=="c"){m.K=ue[1],m.ia=ue[2];const ut=ue[3];ut!=null&&(m.la=ut,m.j.info("VER="+m.la));const ct=ue[4];ct!=null&&(m.Aa=ct,m.j.info("SVER="+m.Aa));const fs=ue[5];fs!=null&&typeof fs=="number"&&0<fs&&(E=1.5*fs,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const cn=u.g;if(cn){const cu=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cu){var L=E.h;L.g||cu.indexOf("spdy")==-1&&cu.indexOf("quic")==-1&&cu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Fd(L,L.h),L.h=null))}if(E.D){const Wd=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wd&&(E.ya=Wd,ve(E.I,E.D,Wd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var z=u;if(E.qa=N0(E,E.J?E.ia:null,E.W),z.K){u0(E.h,z);var pe=z,et=E.L;et&&(pe.I=et),pe.B&&(Od(pe),Zl(pe)),E.g=z}else R0(E);0<m.i.length&&au(m)}else ue[0]!="stop"&&ue[0]!="close"||vi(m,7);else m.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?vi(m,7):Ud(m):ue[0]!="noop"&&m.l&&m.l.ta(ue),m.v=0)}}$o(4)}catch{}}var ek=class{constructor(u,f){this.g=u,this.map=f}};function o0(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function a0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function l0(u){return u.h?1:u.g?u.g.size:0}function jd(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Fd(u,f){u.g?u.g.add(f):u.h=f}function u0(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}o0.prototype.cancel=function(){if(this.i=c0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function c0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const m of u.g.values())f=f.concat(m.D);return f}return x(u.i)}function tk(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var f=[],m=u.length,E=0;E<m;E++)f.push(u[E]);return f}f=[],m=0;for(E in u)f[m++]=u[E];return f}function nk(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var f=[];u=u.length;for(var m=0;m<u;m++)f.push(m);return f}f=[],m=0;for(const E in u)f[m++]=E;return f}}}function h0(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var m=nk(u),E=tk(u),V=E.length,L=0;L<V;L++)f.call(void 0,E[L],m&&m[L],u)}var d0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rk(u,f){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var E=u[m].indexOf("="),V=null;if(0<=E){var L=u[m].substring(0,E);V=u[m].substring(E+1)}else L=u[m];f(L,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function yi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yi){this.h=u.h,eu(this,u.j),this.o=u.o,this.g=u.g,tu(this,u.s),this.l=u.l;var f=u.i,m=new qo;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),f0(this,m),this.m=u.m}else u&&(f=String(u).match(d0))?(this.h=!1,eu(this,f[1]||"",!0),this.o=Wo(f[2]||""),this.g=Wo(f[3]||"",!0),tu(this,f[4]),this.l=Wo(f[5]||"",!0),f0(this,f[6]||"",!0),this.m=Wo(f[7]||"")):(this.h=!1,this.i=new qo(null,this.h))}yi.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Ho(f,p0,!0),":");var m=this.g;return(m||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Ho(f,p0,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Ho(m,m.charAt(0)=="/"?ok:sk,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Ho(m,lk)),u.join("")};function zn(u){return new yi(u)}function eu(u,f,m){u.j=m?Wo(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function tu(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function f0(u,f,m){f instanceof qo?(u.i=f,uk(u.i,u.h)):(m||(f=Ho(f,ak)),u.i=new qo(f,u.h))}function ve(u,f,m){u.i.set(f,m)}function nu(u){return ve(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Wo(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ho(u,f,m){return typeof u=="string"?(u=encodeURI(u).replace(f,ik),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ik(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var p0=/[#\/\?@]/g,sk=/[#\?:]/g,ok=/[#\?]/g,ak=/[#\?@]/g,lk=/#/g;function qo(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function gr(u){u.g||(u.g=new Map,u.h=0,u.i&&rk(u.i,function(f,m){u.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=qo.prototype,t.add=function(u,f){gr(this),this.i=null,u=hs(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(f),this.h+=1,this};function m0(u,f){gr(u),f=hs(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function g0(u,f){return gr(u),f=hs(u,f),u.g.has(f)}t.forEach=function(u,f){gr(this),this.g.forEach(function(m,E){m.forEach(function(V){u.call(f,V,E,this)},this)},this)},t.na=function(){gr(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let E=0;E<f.length;E++){const V=u[E];for(let L=0;L<V.length;L++)m.push(f[E])}return m},t.V=function(u){gr(this);let f=[];if(typeof u=="string")g0(this,u)&&(f=f.concat(this.g.get(hs(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)f=f.concat(u[m])}return f},t.set=function(u,f){return gr(this),this.i=null,u=hs(this,u),g0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function y0(u,f,m){m0(u,f),0<m.length&&(u.i=null,u.g.set(hs(u,f),x(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var E=f[m];const L=encodeURIComponent(String(E)),z=this.V(E);for(E=0;E<z.length;E++){var V=L;z[E]!==""&&(V+="="+encodeURIComponent(String(z[E]))),u.push(V)}}return this.i=u.join("&")};function hs(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function uk(u,f){f&&!u.j&&(gr(u),u.i=null,u.g.forEach(function(m,E){var V=E.toLowerCase();E!=V&&(m0(this,E),y0(this,V,m))},u)),u.j=f}function ck(u,f){const m=new Bo;if(a.Image){const E=new Image;E.onload=g(yr,m,"TestLoadImage: loaded",!0,f,E),E.onerror=g(yr,m,"TestLoadImage: error",!1,f,E),E.onabort=g(yr,m,"TestLoadImage: abort",!1,f,E),E.ontimeout=g(yr,m,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function hk(u,f){const m=new Bo,E=new AbortController,V=setTimeout(()=>{E.abort(),yr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(L=>{clearTimeout(V),L.ok?yr(m,"TestPingServer: ok",!0,f):yr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),yr(m,"TestPingServer: error",!1,f)})}function yr(u,f,m,E,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),E(m)}catch{}}function dk(){this.g=new KR}function fk(u,f,m){const E=m||"";try{h0(u,function(V,L){let z=V;c(V)&&(z=Rd(V)),f.push(E+L+"="+encodeURIComponent(z))})}catch(V){throw f.push(E+"type="+encodeURIComponent("_badmap")),V}}function ru(u){this.l=u.Ub||null,this.j=u.eb||!1}S(ru,kd),ru.prototype.g=function(){return new iu(this.l,this.j)},ru.prototype.i=function(u){return function(){return u}}({});function iu(u,f){lt.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(iu,lt),t=iu.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Ko(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Go(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;v0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function v0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Go(this):Ko(this),this.readyState==3&&v0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Go(this))},t.Qa=function(u){this.g&&(this.response=u,Go(this))},t.ga=function(){this.g&&Go(this)};function Go(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ko(u)}t.setRequestHeader=function(u,f){this.u.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=f.next();return u.join(`\r
`)};function Ko(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(iu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function _0(u){let f="";return j(u,function(m,E){f+=E,f+=":",f+=m,f+=`\r
`}),f}function $d(u,f,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=_0(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):ve(u,f,m))}function be(u){lt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(be,lt);var pk=/^https?$/i,mk=["POST","PUT"];t=be.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,f,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vd.g(),this.v=this.o?Kv(this.o):Kv(Vd),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(L){w0(this,L);return}if(u=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var V in E)m.set(V,E[V]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())m.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(mk,f,void 0))||E||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of m)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{S0(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){w0(this,L)}};function w0(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,E0(u),su(u)}function E0(u){u.A||(u.A=!0,St(u,"complete"),St(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,St(this,"complete"),St(this,"abort"),su(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),su(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?T0(this):this.bb())},t.bb=function(){T0(this)};function T0(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Wn(u)!=4||u.Z()!=2)){if(u.u&&Wn(u)==4)Wv(u.Ea,0,u);else if(St(u,"readystatechange"),Wn(u)==4){u.h=!1;try{const z=u.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var E;if(E=z===0){var V=String(u.D).match(d0)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),E=!pk.test(V?V.toLowerCase():"")}m=E}if(m)St(u,"complete"),St(u,"success");else{u.m=6;try{var L=2<Wn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",E0(u)}}finally{su(u)}}}}function su(u,f){if(u.g){S0(u);const m=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||St(u,"ready");try{m.onreadystatechange=E}catch{}}}function S0(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Wn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),GR(f)}};function I0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function gk(u){const f={};u=(u.g&&2<=Wn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(v(u[E]))continue;var m=k(u[E]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=f[V]||[];f[V]=L,L.push(m)}I(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qo(u,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||f}function x0(u){this.Aa=0,this.i=[],this.j=new Bo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qo("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qo("baseRetryDelayMs",5e3,u),this.cb=Qo("retryDelaySeedMs",1e4,u),this.Wa=Qo("forwardChannelMaxRetries",2,u),this.wa=Qo("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new o0(u&&u.concurrentRequestLimit),this.Da=new dk,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=x0.prototype,t.la=8,t.G=1,t.connect=function(u,f,m,E){It(0),this.W=u,this.H=f||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=N0(this,null,this.W),au(this)};function Ud(u){if(A0(u),u.G==3){var f=u.U++,m=zn(u.I);if(ve(m,"SID",u.K),ve(m,"RID",f),ve(m,"TYPE","terminate"),Yo(u,m),f=new mr(u,u.j,f),f.L=2,f.v=nu(zn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=M0(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Zl(f)}V0(u)}function ou(u){u.g&&(zd(u),u.g.cancel(),u.g=null)}function A0(u){ou(u),u.u&&(a.clearTimeout(u.u),u.u=null),lu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function au(u){if(!a0(u.h)&&!u.s){u.s=!0;var f=u.Ga;oe||K(),B||(oe(),B=!0),G.add(f,u),u.B=0}}function yk(u,f){return l0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Uo(p(u.Ga,u,f),D0(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new mr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=w(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(V.H=L,L=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=P0(this,V,f),m=zn(this.I),ve(m,"RID",u),ve(m,"CVER",22),this.D&&ve(m,"X-HTTP-Session-Id",this.D),Yo(this,m),L&&(this.O?f="headers="+encodeURIComponent(String(_0(L)))+"&"+f:this.m&&$d(m,this.m,L)),Fd(this.h,V),this.Ua&&ve(m,"TYPE","init"),this.P?(ve(m,"$req",f),ve(m,"SID","null"),V.T=!0,Md(V,m,null)):Md(V,m,f),this.G=2}}else this.G==3&&(u?C0(this,u):this.i.length==0||a0(this.h)||C0(this))};function C0(u,f){var m;f?m=f.l:m=u.U++;const E=zn(u.I);ve(E,"SID",u.K),ve(E,"RID",m),ve(E,"AID",u.T),Yo(u,E),u.m&&u.o&&$d(E,u.m,u.o),m=new mr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),f&&(u.i=f.D.concat(u.i)),f=P0(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Fd(u.h,m),Md(m,E,f)}function Yo(u,f){u.H&&j(u.H,function(m,E){ve(f,E,m)}),u.l&&h0({},function(m,E){ve(f,E,m)})}function P0(u,f,m){m=Math.min(u.i.length,m);var E=u.l?p(u.l.Na,u.l,u):null;e:{var V=u.i;let L=-1;for(;;){const z=["count="+m];L==-1?0<m?(L=V[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let pe=!0;for(let et=0;et<m;et++){let ue=V[et].g;const ut=V[et].map;if(ue-=L,0>ue)L=Math.max(0,V[et].g-100),pe=!1;else try{fk(ut,z,"req"+ue+"_")}catch{E&&E(ut)}}if(pe){E=z.join("&");break e}}}return u=u.i.splice(0,m),f.D=u,E}function R0(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;oe||K(),B||(oe(),B=!0),G.add(f,u),u.v=0}}function Bd(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Uo(p(u.Fa,u),D0(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,k0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Uo(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),ou(this),k0(this))};function zd(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function k0(u){u.g=new mr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=zn(u.qa);ve(f,"RID","rpc"),ve(f,"SID",u.K),ve(f,"AID",u.T),ve(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&ve(f,"TO",u.ja),ve(f,"TYPE","xmlhttp"),Yo(u,f),u.m&&u.o&&$d(f,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=nu(zn(f)),m.m=null,m.P=!0,r0(m,u)}t.Za=function(){this.C!=null&&(this.C=null,ou(this),Bd(this),It(19))};function lu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function b0(u,f){var m=null;if(u.g==f){lu(u),zd(u),u.g=null;var E=2}else if(jd(u.h,f))m=f.D,u0(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var V=u.B;E=Yl(),St(E,new Zv(E,m)),au(u)}else R0(u);else if(V=f.s,V==3||V==0&&0<f.X||!(E==1&&yk(u,f)||E==2&&Bd(u)))switch(m&&0<m.length&&(f=u.h,f.i=f.i.concat(m)),V){case 1:vi(u,5);break;case 4:vi(u,10);break;case 3:vi(u,6);break;default:vi(u,2)}}}function D0(u,f){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*f}function vi(u,f){if(u.j.info("Error code "+f),f==2){var m=p(u.fb,u),E=u.Xa;const V=!E;E=new yi(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||eu(E,"https"),nu(E),V?ck(E.toString(),m):hk(E.toString(),m)}else It(2);u.G=0,u.l&&u.l.sa(f),V0(u),A0(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function V0(u){if(u.G=0,u.ka=[],u.l){const f=c0(u.h);(f.length!=0||u.i.length!=0)&&(P(u.ka,f),P(u.ka,u.i),u.h.i.length=0,x(u.i),u.i.length=0),u.l.ra()}}function N0(u,f,m){var E=m instanceof yi?zn(m):new yi(m);if(E.g!="")f&&(E.g=f+"."+E.g),tu(E,E.s);else{var V=a.location;E=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var L=new yi(null);E&&eu(L,E),f&&(L.g=f),V&&tu(L,V),m&&(L.l=m),E=L}return m=u.D,f=u.ya,m&&f&&ve(E,m,f),ve(E,"VER",u.la),Yo(u,E),E}function M0(u,f,m){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new be(new ru({eb:m})):new be(u.pa),f.Ha(u.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function O0(){}t=O0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uu(){}uu.prototype.g=function(u,f){return new $t(u,f)};function $t(u,f){lt.call(this),this.g=new x0(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!v(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!v(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new ds(this)}S($t,lt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Ud(this.g)},$t.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Rd(u),u=m);f.i.push(new ek(f.Ya++,u)),f.G==3&&au(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,Ud(this.g),delete this.g,$t.aa.N.call(this)};function L0(u){bd.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const m in f){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}S(L0,bd);function j0(){Dd.call(this),this.status=1}S(j0,Dd);function ds(u){this.g=u}S(ds,O0),ds.prototype.ua=function(){St(this.g,"a")},ds.prototype.ta=function(u){St(this.g,new L0(u))},ds.prototype.sa=function(u){St(this.g,new j0)},ds.prototype.ra=function(){St(this.g,"b")},uu.prototype.createWebChannel=uu.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,MA=function(){return new uu},NA=function(){return Yl()},VA=mi,Im={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xl.NO_ERROR=0,Xl.TIMEOUT=8,Xl.HTTP_ERROR=6,hc=Xl,e0.COMPLETE="complete",DA=e0,Qv.EventType=Fo,Fo.OPEN="a",Fo.CLOSE="b",Fo.ERROR="c",Fo.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ga=Qv,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,bA=be}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const Zw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Wh("@firebase/firestore");function _s(){return Xi.logLevel}function W(t,...e){if(Xi.logLevel<=ne.DEBUG){const n=e.map(Ay);Xi.debug(`Firestore (${ko}): ${t}`,...n)}}function cr(t,...e){if(Xi.logLevel<=ne.ERROR){const n=e.map(Ay);Xi.error(`Firestore (${ko}): ${t}`,...n)}}function co(t,...e){if(Xi.logLevel<=ne.WARN){const n=e.map(Ay);Xi.warn(`Firestore (${ko}): ${t}`,...n)}}function Ay(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function de(t,e){t||J()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class lj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uj{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new OA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new mt(e)}}class cj{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class hj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cj(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fj{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new dj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Se(0,0))}static max(){return new Z(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ml.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends ml{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const mj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ml{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return mj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ee.fromString(e))}static fromName(e){return new Q(Ee.fromString(e).popFirst(5))}static empty(){return new Q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ee(e.slice()))}}function gj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new Xr(i,Q.empty(),e)}function yj(t){return new Xr(t.readTime,t.key,-1)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(Z.min(),Q.empty(),-1)}static max(){return new Xr(Z.max(),Q.empty(),-1)}}function vj(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==_j)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ej(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Do(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yh.oe=-1;function Xh(t){return t==null}function sh(t){return t===0&&1/t==-1/0}function Tj(t){return typeof t=="number"&&Number.isInteger(t)&&!sh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sj(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=e1(e)),e=Ij(t.get(n),e);return e1(e)}function Ij(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function e1(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n1(this.data.getIterator())}getIteratorFrom(e){return new n1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class n1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new qe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FA("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const xj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(de(!!t),typeof t=="string"){let e=0;const n=xj.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jh(t){const e=t.mapValue.fields.__previous_value__;return Cy(e)?Jh(e):e}function gl(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class yl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cy(t)?4:Pj(t)?9007199254740991:Cj(t)?10:11:J()}function Un(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jr(i.timestampValue),a=Jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zr(i.bytesValue).isEqual(Zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?sh(o)===sh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ho(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(t1(o)!==t1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Un(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function vl(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function fo(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return r1(t.timestampValue,e.timestampValue);case 4:return r1(gl(t),gl(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Zr(s),l=Zr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=se(a[c],l[c]);if(h!==0)return h}return se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=se(Me(s.latitude),Me(o.latitude));return a!==0?a:se(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return i1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const d=s.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=se(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return x!==0?x:i1(g,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Du.mapValue&&o===Du.mapValue)return 0;if(s===Du.mapValue)return 1;if(o===Du.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=se(l[d],h[d]);if(p!==0)return p;const g=fo(a[l[d]],c[h[d]]);if(g!==0)return g}return se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw J()}}function r1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Jr(t),r=Jr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function i1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=fo(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function po(t){return xm(t)}function xm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xm(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function dc(t){switch(ei(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jh(t);return e?16+dc(e):16;case 5:return 2*t.stringValue.length;case 6:return Zr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+dc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return di(r.fields,(s,o)=>{i+=s.length+dc(o)}),i}(t.mapValue);default:throw J()}}function s1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Am(t){return!!t&&"integerValue"in t}function Py(t){return!!t&&"arrayValue"in t}function o1(t){return!!t&&"nullValue"in t}function a1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fc(t){return!!t&&"mapValue"in t}function Cj(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pj(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(Ma(this.value))}}function $A(t){const e=[];return di(t.fields,(n,r)=>{const i=new it([n]);if(fc(r)){const s=$A(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this.position=e,this.inclusive=n}}function l1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=fo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function u1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{}class Ue extends UA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bj(e,n,r):n==="array-contains"?new Nj(e,r):n==="in"?new Mj(e,r):n==="not-in"?new Oj(e,r):n==="array-contains-any"?new Lj(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Dj(e,r):new Vj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fo(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(fo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends UA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new In(e,n)}matches(e){return BA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function BA(t){return t.op==="and"}function zA(t){return kj(t)&&BA(t)}function kj(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function Cm(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+po(t.value);if(zA(t))return t.filters.map(e=>Cm(e)).join(",");{const e=t.filters.map(n=>Cm(n)).join(",");return`${t.op}(${e})`}}function WA(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&Un(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&WA(o,i.filters[a]),!0):!1}(t,e):void J()}function HA(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${po(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(HA).join(" ,")+"}"}(t):"Filter"}class bj extends Ue{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Dj extends Ue{constructor(e,n){super(e,"in",n),this.keys=qA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Vj extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=qA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Nj extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Py(n)&&vl(n.arrayValue,this.value)}}class Mj extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vl(this.value.arrayValue,n)}}class Oj extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vl(this.value.arrayValue,n)}}class Lj extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Py(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function c1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jj(t,e,n,r,i,s,o)}function Ry(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>po(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>po(r)).join(",")),e.ue=n}return e.ue}function ky(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!u1(t.startAt,e.startAt)&&u1(t.endAt,e.endAt)}function Pm(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fj(t,e,n,r,i,s,o,a){return new Vo(t,e,n,r,i,s,o,a)}function by(t){return new Vo(t)}function h1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GA(t){return t.collectionGroup!==null}function Oa(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qe(it.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _l(s,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new _l(it.keyField(),r))}return e.ce}function On(t){const e=ee(t);return e.le||(e.le=$j(e,Oa(t))),e.le}function $j(t,e){if(t.limitType==="F")return c1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _l(i.field,s)});const n=t.endAt?new oh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oh(t.startAt.position,t.startAt.inclusive):null;return c1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rm(t,e){const n=t.filters.concat([e]);return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function km(t,e,n){return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zh(t,e){return ky(On(t),On(e))&&t.limitType===e.limitType}function KA(t){return`${Ry(On(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HA(i)).join(", ")}]`),Xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>po(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>po(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function ed(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Oa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=l1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Oa(r),i)||r.endAt&&!function(o,a,l){const c=l1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Oa(r),i))}(t,e)}function Uj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QA(t){return(e,n)=>{let r=!1;for(const i of Oa(t)){const s=Bj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Bj(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?fo(l,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zj=new ke(Q.comparator);function hr(){return zj}const YA=new ke(Q.comparator);function ya(...t){let e=YA;for(const n of t)e=e.insert(n.key,n);return e}function XA(t){let e=YA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vi(){return La()}function JA(){return La()}function La(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const Wj=new ke(Q.comparator),Hj=new qe(Q.comparator);function re(...t){let e=Hj;for(const n of t)e=e.add(n);return e}const qj=new qe(se);function Gj(){return qj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sh(e)?"-0":e}}function ZA(t){return{integerValue:""+t}}function Kj(t,e){return Tj(e)?ZA(e):Dy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this._=void 0}}function Qj(t,e,n){return t instanceof ah?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cy(s)&&(s=Jh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof wl?tC(t,e):t instanceof El?nC(t,e):function(i,s){const o=eC(i,s),a=d1(o)+d1(i.Pe);return Am(o)&&Am(i.Pe)?ZA(a):Dy(i.serializer,a)}(t,e)}function Yj(t,e,n){return t instanceof wl?tC(t,e):t instanceof El?nC(t,e):n}function eC(t,e){return t instanceof lh?function(r){return Am(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ah extends td{}class wl extends td{constructor(e){super(),this.elements=e}}function tC(t,e){const n=rC(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class El extends td{constructor(e){super(),this.elements=e}}function nC(t,e){let n=rC(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class lh extends td{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function d1(t){return Me(t.integerValue||t.doubleValue)}function rC(t){return Py(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Xj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof wl&&i instanceof wl||r instanceof El&&i instanceof El?ho(r.elements,i.elements,Un):r instanceof lh&&i instanceof lh?Un(r.Pe,i.Pe):r instanceof ah&&i instanceof ah}(t.transform,e.transform)}class Jj{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nd{}function iC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oC(t.key,wn.none()):new jl(t.key,t.data,wn.none());{const n=t.data,r=Vt.empty();let i=new qe(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(t.key,r,new Wt(i.toArray()),wn.none())}}function Zj(t,e,n){t instanceof jl?function(i,s,o){const a=i.value.clone(),l=p1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,o){if(!pc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=p1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(sC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,r){return t instanceof jl?function(s,o,a,l){if(!pc(s.precondition,o))return a;const c=s.value.clone(),h=m1(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,o,a,l){if(!pc(s.precondition,o))return a;const c=m1(s.fieldTransforms,l,o),h=o.data;return h.setAll(sC(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return pc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eC(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function f1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ho(r,i,(s,o)=>Xj(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jl extends nd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends nd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function p1(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Yj(o,a,n[i]))}return r}function m1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Qj(s,o,e))}return r}class oC extends nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tF extends nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Zj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=iC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(n,r)=>f1(n,r))&&ho(this.baseMutations,e.baseMutations,(n,r)=>f1(n,r))}}class Vy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return Wj}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vy(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ae;function sF(t){switch(t){default:return J();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function aC(t){if(t===void 0)return cr("GRPC error has no .code"),F.UNKNOWN;switch(t){case je.OK:return F.OK;case je.CANCELLED:return F.CANCELLED;case je.UNKNOWN:return F.UNKNOWN;case je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case je.INTERNAL:return F.INTERNAL;case je.UNAVAILABLE:return F.UNAVAILABLE;case je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case je.NOT_FOUND:return F.NOT_FOUND;case je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case je.ABORTED:return F.ABORTED;case je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case je.DATA_LOSS:return F.DATA_LOSS;default:return J()}}(ae=je||(je={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF=new Li([4294967295,4294967295],0);function g1(t){const e=oF().encode(t),n=new kA;return n.update(e),new Uint8Array(n.digest())}function y1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Li([n,r],0),new Li([i,s],0)]}class Ny{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new va(`Invalid padding: ${n}`);if(r<0)throw new va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new va(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new va(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Li.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(Li.fromNumber(r)));return i.compare(aF)===1&&(i=new Li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=g1(e),[r,i]=y1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ny(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=g1(e),[r,i]=y1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rd(Z.min(),i,new ke(se),hr(),re())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class lC{constructor(e,n){this.targetId=e,this.me=n}}class uC{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class v1{constructor(){this.fe=0,this.ge=_1(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new Fl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lF{constructor(e){this.Le=e,this.Be=new Map,this.ke=hr(),this.qe=Vu(),this.Qe=Vu(),this.Ke=new ke(se)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(Pm(s))if(r===0){const o=new Q(s.path);this.We(n,o,yt.newNoDocument(o,Z.min()))}else de(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Zr(r).toUint8Array()}catch(l){if(l instanceof FA)return co("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ny(o,i,s)}catch(l){return co(l instanceof va?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Pm(a.target)){const l=new Q(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,yt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new rd(e,n,this.Ke,this.ke,r);return this.ke=hr(),this.qe=Vu(),this.Qe=Vu(),this.Ke=new ke(se),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new v1,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new qe(se),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(se),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new v1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Vu(){return new ke(Q.comparator)}function _1(){return new ke(Q.comparator)}const uF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hF=(()=>({and:"AND",or:"OR"}))();class dF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bm(t,e){return t.useProto3Json||Xh(e)?e:{value:e}}function uh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fF(t,e){return uh(t,e.toTimestamp())}function Ln(t){return de(!!t),Z.fromTimestamp(function(n){const r=Jr(n);return new Se(r.seconds,r.nanos)}(t))}function My(t,e){return Dm(t,e).canonicalString()}function Dm(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hC(t){const e=Ee.fromString(t);return de(gC(e)),e}function Vm(t,e){return My(t.databaseId,e.path)}function Nf(t,e){const n=hC(e);if(n.get(1)!==t.databaseId.projectId)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(fC(n))}function dC(t,e){return My(t.databaseId,e)}function pF(t){const e=hC(t);return e.length===4?Ee.emptyPath():fC(e)}function Nm(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fC(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function w1(t,e,n){return{name:Vm(t,e),fields:n.value.mapValue.fields}}function mF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(de(h===void 0||typeof h=="string"),at.fromBase64String(h||"")):(de(h===void 0||h instanceof Buffer||h instanceof Uint8Array),at.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:aC(c.code);return new H(h,c.message||"")}(o);n=new uC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nf(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):Z.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new mc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nf(t,r.document),s=r.readTime?Ln(r.readTime):Z.min(),o=yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nf(t,r.document),s=r.removedTargetIds||[];n=new mc([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new iF(i,s),a=r.targetId;n=new lC(a,o)}}return n}function gF(t,e){let n;if(e instanceof jl)n={update:w1(t,e.key,e.value)};else if(e instanceof oC)n={delete:Vm(t,e.key)};else if(e instanceof fi)n={update:w1(t,e.key,e.data),updateMask:xF(e.fieldMask)};else{if(!(e instanceof tF))return J();n={verify:Vm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ah)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof El)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof lh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:fF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function yF(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(Z.min())&&(o=Ln(s)),new Jj(o,i.transformResults||[])}(n,e))):[]}function vF(t,e){return{documents:[dC(t,e.path)]}}function _F(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dC(t,i);const s=function(c){if(c.length!==0)return mC(In.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Es(p.field),direction:TF(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function wF(t){let e=pF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=pC(d);return p instanceof In&&zA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(S){return new _l(Ts(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Xh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new oh(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,g=d.values||[];return new oh(g,p)}(n.endAt)),Fj(e,i,o,s,a,"F",l,c)}function EF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ts(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ts(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>pC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function TF(t){return uF[t]}function SF(t){return cF[t]}function IF(t){return hF[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Ts(t){return it.fromServerFormat(t.fieldPath)}function mC(t){return t instanceof Ue?function(n){if(n.op==="=="){if(a1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(o1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(a1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(o1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:SF(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>mC(i));return r.length===1?r[0]:{compositeFilter:{op:IF(n.op),filters:r}}}(t):J()}function xF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e){this.ht=e}}function CF(t){const e=wF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?km(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(){this.ln=new RF}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Xr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class RF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(41943040,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new mo(0)}static Qn(){return new mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class kF{constructor(e){this.Gn=e,this.buffer=new qe(T1),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();T1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bF{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){W("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Do(n)?W("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await bo(n)}await this.Yn(3e5)})}}class DF{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Yh.oe);const r=new kF(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(E1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),E1):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),_s()<=ne.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function VF(t,e){return new DF(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ja(r.mutation,i,Wt.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ya();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=hr();const o=La(),a=function(){return La()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof fi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ja(h.mutation,c,h.mutation.getFieldMask(),Se.now())):o.set(c.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var d;return a.set(c,new MF(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=La();let i=new ke((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Wt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const d=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=JA();h.forEach(p=>{if(!s.has(p)){const g=iC(n.get(p),r.get(p));g!==null&&d.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Vi());let a=-1,l=s;return o.next(c=>$.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,re())).next(h=>({batchId:a,changes:XA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,l=>{const c=function(d,p){return new Vo(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,yt.newInvalidDocument(h)))});let a=ya();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&ja(h.mutation,c,Wt.empty(),Se.now()),ed(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:CF(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(){this.overlays=new ke(Q.comparator),this.Er=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vi();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Vi(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Vi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Vi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return $.resolve(a)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rF(n,r));let s=this.Er.get(n);s===void 0&&(s=re(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.dr=new qe(Ke.Ar),this.Rr=new qe(Ke.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ke(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new Q(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new Q(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=re();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return Q.comparator(e.key,n.key)||se(e.br,n.br)}static Vr(e,n){return se(e.br,n.br)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new qe(Ke.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(se);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new Q(s),0);let a=new qe(se);return this.vr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.br)),!0)},o),$.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ke(n,0),i=this.vr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e){this.Nr=e,this.docs=function(){return new ke(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hr();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vj(yj(h),r)<=0||(i.has(h.key)||ed(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Lr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BF(this)}getSize(e){return $.resolve(this.size)}}class BF extends NF{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e){this.persistence=e,this.Br=new is(n=>Ry(n),ky),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.kr=0,this.qr=new Oy,this.targetCount=0,this.Qr=mo.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Yh(0),this.Ur=!1,this.Ur=!0,this.Wr=new FF,this.referenceDelegate=e(this),this.Gr=new zF(this),this.indexManager=new PF,this.remoteDocumentCache=function(i){return new UF(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new AF(n),this.jr=new LF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new $F(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new WF(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class WF extends wj{constructor(e){super(),this.currentSequenceNumber=e}}class Ly{constructor(e){this.persistence=e,this.Zr=new Oy,this.Xr=null}static ei(e){return new Ly(e)}get ti(){if(this.Xr)return this.Xr;throw J()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const i=Q.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ch{constructor(e,n){this.persistence=e,this.ri=new is(r=>Sj(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=VF(this,n)}static ei(e,n){return new ch(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?$.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dc(e.data.value)),n}ir(e,n,r){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return uN()?8:Ej(wt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HF;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(_s()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(_s()<=ne.DEBUG&&W("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(_s()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):$.resolve())}Xi(e,n){if(h1(n))return $.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=km(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.rs(n,a);return this.ss(n,c,o,l.readTime)?this.Xi(e,km(n,null,"F")):this.os(e,c,n,l)}))})))}es(e,n,r,i){return h1(n)||i.isEqual(Z.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?$.resolve(null):(_s()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ws(n)),this.os(e,o,n,gj(i,-1)).next(a=>a))})}rs(e,n){let r=new qe(QA(e));return n.forEach((i,s)=>{ed(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return _s()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ws(n)),this.Zi.getDocumentsMatchingQuery(e,n,Xr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new ke(se),this.cs=new is(s=>Ry(s),ky),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OF(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function KF(t,e,n,r){return new GF(t,e,n,r)}async function vC(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function QF(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,p=d.keys();let g=$.resolve();return p.forEach(S=>{g=g.next(()=>h.getEntry(l,S)).next(x=>{const P=c.docVersions.get(S);de(P!==null),x.version.compareTo(P)<0&&(d.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),h.addEntry(x)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _C(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function YF(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Gr.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(s,h.addedDocuments,d)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(at.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(d,g),function(x,P,_){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,g,h)&&a.push(n.Gr.updateTargetData(s,g))});let l=hr(),c=re();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(XF(s,o,e.documentUpdates).next(h=>{l=h.Is,c=h.Es})),!r.isEqual(Z.min())){const h=n.Gr.getLastRemoteSnapshotVersion(s).next(d=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.us=i,s))}function XF(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hr();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Is:o,Es:i}})}function JF(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZF(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Mm(t,e,n){const r=ee(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Do(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function S1(t,e,n){const r=ee(t);let i=Z.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const d=ee(l),p=d.cs.get(h);return p!==void 0?$.resolve(d.us.get(p)):d.Gr.getTargetData(c,h)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:re())).next(a=>(e5(r,Uj(e),a),{documents:a,ds:s})))}function e5(t,e,n){let r=t.ls.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class I1{constructor(){this.activeTargetIds=Gj()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t5{constructor(){this._o=new I1,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new I1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu=null;function Mf(){return Nu===null?Nu=function(){return 268435456+Math.round(2147483648*Math.random())}():Nu++,"0x"+Nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class s5 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const a=Mf(),l=this.No(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,l,c,i).then(h=>(W("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw co("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}ko(n,r,i,s,o,a){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=r5[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=Mf();return new Promise((o,a)=>{const l=new bA;l.setWithCredentials(!0),l.listenOnce(DA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hc.NO_ERROR:const h=l.getResponseJson();W(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case hc.TIMEOUT:W(ft,`RPC '${e}' ${s} timed out`),a(new H(F.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const d=l.getStatus();if(W(ft,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const S=function(P){const _=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(g.status);a(new H(S,g.message))}else a(new H(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(F.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{W(ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(ft,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}qo(e,n,r){const i=Mf(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MA(),a=NA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");W(ft,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const S=new i5({Eo:P=>{g?W(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(W(ft,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),W(ft,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},Ao:()=>d.close()}),x=(P,_,v)=>{P.listen(_,T=>{try{v(T)}catch(b){setTimeout(()=>{throw b},0)}})};return x(d,ga.EventType.OPEN,()=>{g||(W(ft,`RPC '${e}' stream ${i} transport opened.`),S.So())}),x(d,ga.EventType.CLOSE,()=>{g||(g=!0,W(ft,`RPC '${e}' stream ${i} transport closed`),S.Do())}),x(d,ga.EventType.ERROR,P=>{g||(g=!0,co(ft,`RPC '${e}' stream ${i} transport errored:`,P),S.Do(new H(F.UNAVAILABLE,"The operation could not be completed")))}),x(d,ga.EventType.MESSAGE,P=>{var _;if(!g){const v=P.data[0];de(!!v);const T=v,b=(T==null?void 0:T.error)||((_=T[0])===null||_===void 0?void 0:_.error);if(b){W(ft,`RPC '${e}' stream ${i} received error:`,b);const O=b.status;let j=function(A){const C=je[A];if(C!==void 0)return aC(C)}(O),I=b.message;j===void 0&&(j=F.INTERNAL,I="Unknown error status: "+O+" with message "+b.message),g=!0,S.Do(new H(j,I)),d.close()}else W(ft,`RPC '${e}' stream ${i} received:`,v),S.vo(v)}}),x(a,VA.STAT_EVENT,P=>{P.stat===Im.PROXY?W(ft,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Im.NOPROXY&&W(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.bo()},0),S}}function Of(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){return new dF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,i,s,o,a,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new wC(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new H(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o5 extends EC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=mF(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Ln(o.readTime):Z.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Nm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Pm(l)?{documents:vF(s,l)}:{query:_F(s,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cC(s,o.resumeToken);const c=bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=uh(s,o.snapshotVersion.toTimestamp());const c=bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=EF(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Nm(this.serializer),n.removeTarget=e,this.c_(n)}}class a5 extends EC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=yF(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Nm(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gF(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,Dm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(F.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Dm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(F.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class u5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(cr(n),this.C_=!1):W("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c5{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ss(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.k_.add(4),await $l(c),c.K_.set("Unknown"),c.k_.delete(4),await sd(c)}(this))})}),this.K_=new u5(r,i)}}async function sd(t){if(ss(t))for(const e of t.q_)await e(!0)}async function $l(t){for(const e of t.q_)await e(!1)}function TC(t,e){const n=ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),By(n)?Uy(n):No(n).s_()&&$y(n,e))}function Fy(t,e){const n=ee(t),r=No(n);n.B_.delete(e),r.s_()&&SC(n,e),n.B_.size===0&&(r.s_()?r.a_():ss(n)&&n.K_.set("Unknown"))}function $y(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}No(t).V_(e)}function SC(t,e){t.U_.xe(e),No(t).m_(e)}function Uy(t){t.U_=new lF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),No(t).start(),t.K_.F_()}function By(t){return ss(t)&&!No(t).i_()&&t.B_.size>0}function ss(t){return ee(t).k_.size===0}function IC(t){t.U_=void 0}async function h5(t){t.K_.set("Online")}async function d5(t){t.B_.forEach((e,n)=>{$y(t,e)})}async function f5(t,e){IC(t),By(t)?(t.K_.O_(e),Uy(t)):t.K_.set("Unknown")}async function p5(t,e,n){if(t.K_.set("Online"),e instanceof uC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.B_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.B_.delete(a),i.U_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hh(t,r)}else if(e instanceof mc?t.U_.$e(e):e instanceof lC?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Z.min()))try{const r=await _C(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.B_.get(c);h&&s.B_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.B_.get(l);if(!h)return;s.B_.set(l,h.withResumeToken(at.EMPTY_BYTE_STRING,h.snapshotVersion)),SC(s,l);const d=new Nr(h.target,l,c,h.sequenceNumber);$y(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await hh(t,r)}}async function hh(t,e,n){if(!Do(e))throw e;t.k_.add(1),await $l(t),t.K_.set("Offline"),n||(n=()=>_C(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await sd(t)})}function xC(t,e){return e().catch(n=>hh(t,n,e))}async function od(t){const e=ee(t),n=ti(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;m5(e);)try{const i=await JF(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,g5(e,i)}catch(i){await hh(e,i)}AC(e)&&CC(e)}function m5(t){return ss(t)&&t.L_.length<10}function g5(t,e){t.L_.push(e);const n=ti(t);n.s_()&&n.f_&&n.g_(e.mutations)}function AC(t){return ss(t)&&!ti(t).i_()&&t.L_.length>0}function CC(t){ti(t).start()}async function y5(t){ti(t).w_()}async function v5(t){const e=ti(t);for(const n of t.L_)e.g_(n.mutations)}async function _5(t,e,n){const r=t.L_.shift(),i=Vy.from(r,e,n);await xC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await od(t)}async function w5(t,e){e&&ti(t).f_&&await async function(r,i){if(function(o){return sF(o)&&o!==F.ABORTED}(i.code)){const s=r.L_.shift();ti(r).__(),await xC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await od(r)}}(t,e),AC(t)&&CC(t)}async function A1(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.k_.add(3),await $l(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await sd(n)}async function E5(t,e){const n=ee(t);e?(n.k_.delete(2),await sd(n)):e||(n.k_.add(2),await $l(n),n.K_.set("Unknown"))}function No(t){return t.W_||(t.W_=function(n,r,i){const s=ee(n);return s.b_(),new o5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:h5.bind(null,t),mo:d5.bind(null,t),po:f5.bind(null,t),R_:p5.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),By(t)?Uy(t):t.K_.set("Unknown")):(await t.W_.stop(),IC(t))})),t.W_}function ti(t){return t.G_||(t.G_=function(n,r,i){const s=ee(n);return s.b_(),new a5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:y5.bind(null,t),po:w5.bind(null,t),p_:v5.bind(null,t),y_:_5.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await od(t)):(await t.G_.stop(),t.L_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wy(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Do(t))return new H(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static emptySet(e){return new Js(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ya(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.z_=new ke(Q.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):J():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class go{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new go(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class S5{constructor(){this.queries=P1(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=P1(),s.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new H(F.ABORTED,"Firestore shutting down"))}}function P1(){return new is(t=>KA(t),Zh)}async function PC(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new T5,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Wy(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&Hy(n)}async function RC(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function I5(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(i)&&(r=!0);o.H_=i}}r&&Hy(n)}function x5(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function Hy(t){t.X_.forEach(e=>{e.next()})}var Om,R1;(R1=Om||(Om={})).na="default",R1.Cache="cache";class kC{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Om.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.key=e}}class DC{constructor(e){this.key=e}}class A5{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=re(),this.mutatedKeys=re(),this.Va=QA(e),this.ma=new Js(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new C1,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),g=ed(this.query,d)?d:null,S=!!p&&this.mutatedKeys.has(p.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?S!==x&&(r.track({type:3,doc:g}),P=!0):this.ya(p,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.Va(g,l)>0||c&&this.Va(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(l||c)&&(a=!0)),P&&(g?(o=o.add(g),s=x?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,S){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return x(g)-x(S)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),i=i!=null&&i;const a=n&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,c=l!==this.Aa;return this.Aa=l,o.length!==0||c?{snapshot:new go(this.query,e.ma,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new C1,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=re(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new DC(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new bC(r))}),n}va(e){this.da=e.ds,this.Ra=re();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return go.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class C5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class P5{constructor(e){this.key=e,this.Fa=!1}}class R5{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new is(a=>KA(a),Zh),this.Oa=new Map,this.Na=new Set,this.La=new ke(Q.comparator),this.Ba=new Map,this.ka=new Oy,this.qa={},this.Qa=new Map,this.Ka=mo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function k5(t,e,n=!0){const r=jC(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await VC(r,e,n,!0),i}async function b5(t,e){const n=jC(t);await VC(n,e,!0,!1)}async function VC(t,e,n,r){const i=await ZF(t.localStore,On(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await D5(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&TC(t.remoteStore,i),a}async function D5(t,e,n,r,i){t.Ua=(d,p,g)=>async function(x,P,_,v){let T=P.view.ga(_);T.ss&&(T=await S1(x.localStore,P.query,!1).then(({documents:I})=>P.view.ga(I,T)));const b=v&&v.targetChanges.get(P.targetId),O=v&&v.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(T,x.isPrimaryClient,b,O);return b1(x,P.targetId,j.ba),j.snapshot}(t,d,p,g);const s=await S1(t.localStore,e,!0),o=new A5(e,s.ds),a=o.ga(s.documents),l=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);b1(t,n,c.ba);const h=new C5(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function V5(t,e,n){const r=ee(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!Zh(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Mm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Fy(r.remoteStore,i.targetId),Lm(r,i.targetId)}).catch(bo)):(Lm(r,i.targetId),await Mm(r.localStore,i.targetId,!0))}async function N5(t,e){const n=ee(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fy(n.remoteStore,r.targetId))}async function M5(t,e,n){const r=B5(t);try{const i=await function(o,a){const l=ee(o),c=Se.now(),h=a.reduce((g,S)=>g.add(S.key),re());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let S=hr(),x=re();return l.hs.getEntries(g,h).next(P=>{S=P,S.forEach((_,v)=>{v.isValidDocument()||(x=x.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,S)).next(P=>{d=P;const _=[];for(const v of a){const T=eF(v,d.get(v.key).overlayedDocument);T!=null&&_.push(new fi(v.key,T,$A(T.value.mapValue),wn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,_,a)}).next(P=>{p=P;const _=P.applyToLocalDocumentSet(d,x);return l.documentOverlayCache.saveOverlays(g,P.batchId,_)})}).then(()=>({batchId:p.batchId,changes:XA(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.qa[o.currentUser.toKey()];c||(c=new ke(se)),c=c.insert(a,l),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ul(r,i.changes),await od(r.remoteStore)}catch(i){const s=Wy(i,"Failed to persist write");n.reject(s)}}async function NC(t,e){const n=ee(t);try{const r=await YF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?de(o.Fa):i.removedDocuments.size>0&&(de(o.Fa),o.Fa=!1))}),await Ul(n,r,e)}catch(r){await bo(r)}}function k1(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const p of d.J_)p.ea(a)&&(c=!0)}),c&&Hy(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function O5(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new ke(Q.comparator);o=o.insert(s,yt.newNoDocument(s,Z.min()));const a=re().add(s),l=new rd(Z.min(),new Map,new ke(se),o,a);await NC(r,l),r.La=r.La.remove(s),r.Ba.delete(e),qy(r)}else await Mm(r.localStore,e,!1).then(()=>Lm(r,e,n)).catch(bo)}async function L5(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await QF(n.localStore,e);OC(n,r,null),MC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ul(n,i)}catch(i){await bo(i)}}async function j5(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(de(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);OC(r,e,n),MC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ul(r,i)}catch(i){await bo(i)}}function MC(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function OC(t,e,n){const r=ee(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Lm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||LC(t,r)})}function LC(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Fy(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),qy(t))}function b1(t,e,n){for(const r of n)r instanceof bC?(t.ka.addReference(r.key,e),F5(t,r)):r instanceof DC?(W("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||LC(t,r.key)):J()}function F5(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Na.add(r),qy(t))}function qy(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new Q(Ee.fromString(e)),r=t.Ka.next();t.Ba.set(r,new P5(n)),t.La=t.La.insert(n,r),TC(t.remoteStore,new Nr(On(by(n.path)),r,"TargetPurposeLimboResolution",Yh.oe))}}async function Ul(t,e,n){const r=ee(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=jy.zi(l.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(l,c){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(c,p=>$.forEach(p.Wi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>$.forEach(p.Gi,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Do(d))throw d;W("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const g=h.us.get(p),S=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(S);h.us=h.us.insert(p,x)}}}(r.localStore,s))}async function $5(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await vC(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(l=>{l.reject(new H(F.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ul(n,r.Ts)}}function U5(t,e){const n=ee(t),r=n.Ba.get(e);if(r&&r.Fa)return re().add(r.key);{let i=re();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const a=n.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function jC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=NC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=O5.bind(null,e),e.Ma.R_=I5.bind(null,e.eventManager),e.Ma.Wa=x5.bind(null,e.eventManager),e}function B5(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=L5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=j5.bind(null,e),e}class dh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=id(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return KF(this.persistence,new qF,e.initialUser,this.serializer)}ja(e){return new yC(Ly.ei,this.serializer)}za(e){return new t5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dh.provider={build:()=>new dh};class z5 extends dh{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){de(this.persistence.referenceDelegate instanceof ch);const r=this.persistence.referenceDelegate.garbageCollector;return new bF(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new yC(r=>ch.ei(r,n),this.serializer)}}class jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>k1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$5.bind(null,this.syncEngine),await E5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new S5}()}createDatastore(e){const n=id(e.databaseInfo.databaseId),r=function(s){return new s5(s)}(e.databaseInfo);return function(s,o,a,l){return new l5(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new c5(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>k1(this.syncEngine,n,0),function(){return x1.p()?new x1:new n5}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const d=new R5(i,s,o,a,l,c);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);W("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await $l(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jm.provider={build:()=>new jm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W5{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=LA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lf(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function D1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await H5(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>A1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>A1(e.remoteStore,i)),t._onlineComponents=e}async function H5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;co("Error using user provided cache. Falling back to memory cache: "+n),await Lf(t,new dh)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Lf(t,new z5(void 0));return t._offlineComponents}async function $C(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await D1(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await D1(t,new jm))),t._onlineComponents}function q5(t){return $C(t).then(e=>e.syncEngine)}async function UC(t){const e=await $C(t),n=e.eventManager;return n.onListen=k5.bind(null,e.syncEngine),n.onUnlisten=V5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=b5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=N5.bind(null,e.syncEngine),n}function G5(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new FC({next:p=>{h.eu(),o.enqueueAndForget(()=>RC(s,d));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new H(F.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?c.reject(new H(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new kC(by(a.path),h,{includeMetadataChanges:!0,ua:!0});return PC(s,d)}(await UC(t),t.asyncQueue,e,n,r)),r.promise}function K5(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new FC({next:p=>{h.eu(),o.enqueueAndForget(()=>RC(s,d)),p.fromCache&&l.source==="server"?c.reject(new H(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new kC(a,h,{includeMetadataChanges:!0,ua:!0});return PC(s,d)}(await UC(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e,n){if(!n)throw new H(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Q5(t,e,n,r){if(e===!0&&r===!0)throw new H(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N1(t){if(!Q.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function M1(t){if(Q.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ad(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ad(t);throw new H(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Q5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ld{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O1({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aj;switch(r.type){case"firstParty":return new hj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=V1.get(n);r&&(W("ComponentProvider","Removing Datastore"),V1.delete(n),r.terminate())}(this),Promise.resolve()}}function Y5(t,e,n,r={}){var i;const s=(t=Bn(t,ld))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=mt.MOCK_USER;else{a=rN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(c)}t._authCredentials=new lj(new OA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new os(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Gr extends os{constructor(e,n,r){super(e,n,by(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Q(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function Gy(t,e,...n){if(t=ze(t),zC("collection","path",e),t instanceof ld){const r=Ee.fromString(e,...n);return M1(r),new Gr(t,null,r)}{if(!(t instanceof Ct||t instanceof Gr))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return M1(r),new Gr(t.firestore,null,r)}}function Tl(t,e,...n){if(t=ze(t),arguments.length===1&&(e=LA.newId()),zC("doc","path",e),t instanceof ld){const r=Ee.fromString(e,...n);return N1(r),new Ct(t,null,new Q(r))}{if(!(t instanceof Ct||t instanceof Gr))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return N1(r),new Ct(t.firestore,t instanceof Gr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new wC(this,"async_queue_retry"),this.fu=()=>{const r=Of();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Of();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Of();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new tr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Do(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=zy.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&J()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Mo extends ld{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new L1,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new L1(e),this._firestoreClient=void 0,await e}}}function X5(t,e){const n=typeof t=="object"?t:dy(),r=typeof t=="string"?t:e||"(default)",i=ns(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tN("firestore");s&&Y5(i,...s)}return i}function Ky(t){if(t._terminated)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||J5(t),t._firestoreClient}function J5(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new Aj(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,BC(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new W5(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yo(at.fromBase64String(e))}catch(n){throw new H(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yo(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5=/^__.*__$/;class e3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new jl(e,this.data,n,this.fieldTransforms)}}class WC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Jy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Jy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return fh(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(HC(this.Mu)&&Z5.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class t3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||id(e)}$u(e,n,r,i=!1){return new Jy({Mu:e,methodName:n,Ku:r,path:it.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cd(t){const e=t._freezeSettings(),n=id(t._databaseId);return new t3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qC(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);Zy("Data must be an object, but it was:",o,r);const a=GC(r,o);let l,c;if(s.merge)l=new Wt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=Fm(e,d,n);if(!o.contains(p))throw new H(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);QC(h,p)||h.push(p)}l=new Wt(h),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new e3(new Vt(a),l,c)}class hd extends Qy{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hd}}function n3(t,e,n,r){const i=t.$u(1,e,n);Zy("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();di(r,(l,c)=>{const h=ev(e,l,n);c=ze(c);const d=i.Bu(h);if(c instanceof hd)s.push(h);else{const p=Bl(c,d);p!=null&&(s.push(h),o.set(h,p))}});const a=new Wt(s);return new WC(o,a,i.fieldTransforms)}function r3(t,e,n,r,i,s){const o=t.$u(1,e,n),a=[Fm(e,r,n)],l=[i];if(s.length%2!=0)throw new H(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Fm(e,s[p])),l.push(s[p+1]);const c=[],h=Vt.empty();for(let p=a.length-1;p>=0;--p)if(!QC(c,a[p])){const g=a[p];let S=l[p];S=ze(S);const x=o.Bu(g);if(S instanceof hd)c.push(g);else{const P=Bl(S,x);P!=null&&(c.push(g),h.set(g,P))}}const d=new Wt(c);return new WC(h,d,o.fieldTransforms)}function i3(t,e,n,r=!1){return Bl(n,t.$u(r?4:3,e))}function Bl(t,e){if(KC(t=ze(t)))return Zy("Unsupported field value:",e,t),GC(t,e);if(t instanceof Qy)return function(r,i){if(!HC(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Bl(a,i.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:uh(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uh(i.serializer,s)}}if(r instanceof Yy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yo)return{bytesValue:cC(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:My(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xy)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return Dy(a.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${ad(r)}`)}(t,e)}function GC(t,e){const n={};return jA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=Bl(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function KC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Yy||t instanceof yo||t instanceof Ct||t instanceof Qy||t instanceof Xy)}function Zy(t,e,n){if(!KC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ad(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Fm(t,e,n){if((e=ze(e))instanceof ud)return e._internalPath;if(typeof e=="string")return ev(t,e);throw fh("Field path arguments must be of type string or ",t,!1,void 0,n)}const s3=new RegExp("[~\\*/\\[\\]]");function ev(t,e,n){if(e.search(s3)>=0)throw fh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ud(...e.split("."))._internalPath}catch{throw fh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(F.INVALID_ARGUMENT,a+t+l)}function QC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new o3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class o3 extends YC{data(){return super.data()}}function dd(t,e){return typeof e=="string"?ev(t,e):e instanceof ud?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tv{}class XC extends tv{}function JC(t,e,...n){let r=[];e instanceof tv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof nv).length,a=s.filter(l=>l instanceof fd).length;if(o>1||o>0&&a>0)throw new H(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class fd extends XC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fd(e,n,r)}_apply(e){const n=this._parse(e);return ZC(e._query,n),new os(e.firestore,e.converter,Rm(e._query,n))}_parse(e){const n=cd(e.firestore);return function(s,o,a,l,c,h,d){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){F1(d,h);const g=[];for(const S of d)g.push(j1(l,s,S));p={arrayValue:{values:g}}}else p=j1(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||F1(d,h),p=i3(a,o,d,h==="in"||h==="not-in");return Ue.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function l3(t,e,n){const r=e,i=dd("where",t);return fd._create(i,r,n)}class nv extends tv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new nv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ZC(o,l),o=Rm(o,l)}(e._query,n),new os(e.firestore,e.converter,Rm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class rv extends XC{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new rv(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _l(s,o)}(e._query,this._field,this._direction);return new os(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Vo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function u3(t,e="asc"){const n=e,r=dd("orderBy",t);return rv._create(r,n)}function j1(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new H(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GA(e)&&n.indexOf("/")!==-1)throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!Q.isDocumentKey(r))throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return s1(t,new Q(r))}if(n instanceof Ct)return s1(t,n._key);throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ad(n)}.`)}function F1(t,e){if(!Array.isArray(t)||t.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class c3{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Me(o.doubleValue));return new Xy(s)}convertGeoPoint(e){return new Yy(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);de(gC(r));const i=new yl(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tP extends YC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gc extends tP{data(e={}){return super.data(e)}}class h3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _a(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gc(this._firestore,this._userDataWriter,r.key,r,new _a(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:d3(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function d3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){t=Bn(t,Ct);const e=Bn(t.firestore,Mo);return G5(Ky(e),t._key).then(n=>m3(e,t,n))}class rP extends c3{constructor(e){super(),this.firestore=e}convertBytes(e){return new yo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function iP(t){t=Bn(t,os);const e=Bn(t.firestore,Mo),n=Ky(e),r=new rP(e);return a3(t._query),K5(n,t._query).then(i=>new h3(e,r,t,i))}function $m(t,e,n){t=Bn(t,Ct);const r=Bn(t.firestore,Mo),i=eP(t.converter,e,n);return iv(r,[qC(cd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function f3(t,e,n,...r){t=Bn(t,Ct);const i=Bn(t.firestore,Mo),s=cd(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof ud?r3(s,"updateDoc",t._key,e,n,r):n3(s,"updateDoc",t._key,e),iv(i,[o.toMutation(t._key,wn.exists(!0))])}function p3(t,e){const n=Bn(t.firestore,Mo),r=Tl(t),i=eP(t.converter,e);return iv(n,[qC(cd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function iv(t,e){return function(r,i){const s=new tr;return r.asyncQueue.enqueueAndForget(async()=>M5(await q5(r),i,s)),s.promise}(Ky(t),e)}function m3(t,e,n){const r=n.docs.get(e._key),i=new rP(t);return new tP(t,i,e._key,r,new _a(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ko=i})(Po),$n(new Tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Mo(new uj(r.getProvider("auth-internal")),new fj(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),on(Zw,"4.7.5",e),on(Zw,"4.7.5","esm2017")})();const sP={apiKey:"AIzaSyD5hCZjl-Lfv4M8-V31Vks-4TF3rk7Q0y0",authDomain:"anja-2bc78.firebaseapp.com",projectId:"anja-2bc78",storageBucket:"anja-2bc78.firebasestorage.app",messagingSenderId:"295990065891",appId:"1:295990065891:web:ebb811017cd3f7c036e3d6",measurementId:"G-T0QL1P219T"};console.log("All env vars:",{VITE_FIREBASE_API_KEY:"AIzaSyD5hCZjl-Lfv4M8-V31Vks-4TF3rk7Q0y0",VITE_FIREBASE_AUTH_DOMAIN:"anja-2bc78.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"anja-2bc78",VITE_FIREBASE_STORAGE_BUCKET:"anja-2bc78.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"295990065891",VITE_FIREBASE_APP_ID:"1:295990065891:web:ebb811017cd3f7c036e3d6",VITE_FIREBASE_MEASUREMENT_ID:"G-T0QL1P219T",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1});console.log("Firebase Config:",sP);const pd=Tx(sP);typeof window<"u"&&localStorage.getItem("cookiesAccepted")==="true"&&RA(pd);const Ls=FL(pd),Ji=X5(pd),oP=D.createContext(void 0),as=()=>{const t=D.useContext(oP);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},g3=({children:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(!1),[s,o]=D.useState(!0),a=async p=>{try{const g=Tl(Ji,"admins",p.uid),S=await nP(g);p.email==="anja@haarambiente.de"?(S.exists()||await $m(g,{email:p.email,createdAt:new Date}),i(!0)):i(S.exists())}catch(g){console.error("Error checking admin status:",g),i(!1)}};D.useEffect(()=>CO(Ls,async g=>{n(g),g?await a(g):i(!1),o(!1)}),[]);const d={currentUser:e,isAdmin:r,login:async(p,g)=>{try{const{user:S}=await Yx(Ls,p,g);await a(S)}catch(S){throw console.error("Login error:",S),S}},register:async(p,g,S=!1)=>{try{const{user:x}=await IO(Ls,p,g);(p==="anja@haarambiente.de"||S)&&await $m(Tl(Ji,"admins",x.uid),{email:p,createdAt:new Date}),await a(x)}catch(x){throw console.error("Registration error:",x),x}},logout:async()=>{try{await PO(Ls),n(null),i(!1)}catch(p){throw console.error("Logout error:",p),p}},loading:s};return y.jsx(oP.Provider,{value:d,children:!s&&t})},y3=GV`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    background: ${t=>t.theme.colors.background};
    color: ${t=>t.theme.colors.text};
  }

  button {
    font-family: inherit;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  section {
    padding: 4rem 2rem;
    scroll-margin-top: 4rem;

    @media (max-width: 768px) {
      padding: 3rem 1rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`,v3={colors:{primary:"#000000",secondary:"#ffffff",background:"#E8DFE0",text:"#000000",accent:"#D4C4C5"},fonts:{heading:"'Italiana', serif",body:"'Inter', sans-serif"},breakpoints:{mobile:"320px",tablet:"768px",desktop:"1024px"}};var aP={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$1=Be.createContext&&Be.createContext(aP),Kr=globalThis&&globalThis.__assign||function(){return Kr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Kr.apply(this,arguments)},_3=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function lP(t){return t&&t.map(function(e,n){return Be.createElement(e.tag,Kr({key:n},e.attr),lP(e.child))})}function pr(t){return function(e){return Be.createElement(w3,Kr({attr:Kr({},t.attr)},e),lP(t.child))}}function w3(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=_3(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Be.createElement("svg",Kr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Kr(Kr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Be.createElement("title",null,s),t.children)};return $1!==void 0?Be.createElement($1.Consumer,null,function(n){return e(n)}):e(aP)}function E3(t){return pr({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(t)}function T3(t){return pr({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(t)}function S3(t){return pr({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(t)}function I3(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function md(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Um=t=>Array.isArray(t);function uP(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Sl(t){return typeof t=="string"||Array.isArray(t)}function U1(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function sv(t,e,n,r){if(typeof e=="function"){const[i,s]=U1(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=U1(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function gd(t,e,n){const r=t.getProps();return sv(r,e,n!==void 0?n:r.custom,t)}const ov=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],av=["initial",...ov],Gt=t=>t;let cP=Gt;function lv(t){let e;return()=>(e===void 0&&(e=t()),e)}const vo=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},nr=t=>t*1e3,rr=t=>t/1e3,x3=lv(()=>window.ScrollTimeline!==void 0);class A3{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>x3()&&i.attachTimeline?i.attachTimeline(e):n(i));return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class C3 extends A3{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function uv(t,e){return t?t[e]||t.default||t:void 0}const Bm=2e4;function hP(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Bm;)e+=n,r=t.next(e);return e>=Bm?1/0:e}function cv(t){return typeof t=="function"}function B1(t,e){t.timeline=e,t.onfinish=null}const hv=t=>Array.isArray(t)&&typeof t[0]=="number",P3={linearEasing:void 0};function R3(t,e){const n=lv(t);return()=>{var r;return(r=P3[e])!==null&&r!==void 0?r:n()}}const ph=R3(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),dP=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=t(vo(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function fP(t){return!!(typeof t=="function"&&ph()||!t||typeof t=="string"&&(t in zm||ph())||hv(t)||Array.isArray(t)&&t.every(fP))}const wa=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,zm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wa([0,.65,.55,1]),circOut:wa([.55,0,1,.45]),backIn:wa([.31,.01,.66,-.59]),backOut:wa([.33,1.53,.69,.99])};function pP(t,e){if(t)return typeof t=="function"&&ph()?dP(t,e):hv(t)?wa(t):Array.isArray(t)?t.map(n=>pP(n,e)||zm.easeOut):zm[t]}const dn={x:!1,y:!1};function mP(){return dn.x||dn.y}function k3(t,e,n){var r;if(t instanceof Element)return[t];if(typeof t=="string"){let i=document;e&&(i=e.current);const s=(r=n==null?void 0:n[t])!==null&&r!==void 0?r:i.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function gP(t,e){const n=k3(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function z1(t){return e=>{e.pointerType==="touch"||mP()||t(e)}}function b3(t,e,n={}){const[r,i,s]=gP(t,n),o=z1(a=>{const{target:l}=a,c=e(a);if(!c||!l)return;const h=z1(d=>{c(d),l.removeEventListener("pointerleave",h)});l.addEventListener("pointerleave",h,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const dv=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Ea=new WeakSet;function W1(t){return e=>{e.key==="Enter"&&t(e)}}function jf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const D3=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=W1(()=>{if(Ea.has(n))return;jf(n,"down");const i=W1(()=>{jf(n,"up")}),s=()=>jf(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)},V3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function N3(t){return V3.has(t.tagName)||t.tabIndex!==-1}const yP=(t,e)=>e?t===e?!0:yP(t,e.parentElement):!1;function H1(t){return dv(t)&&!mP()}function M3(t,e,n={}){const[r,i,s]=gP(t,n),o=a=>{const l=a.currentTarget;if(!H1(a)||Ea.has(l))return;Ea.add(l);const c=e(a),h=(g,S)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",p),!(!H1(g)||!Ea.has(l))&&(Ea.delete(l),c&&c(g,{success:S}))},d=g=>{h(g,n.useGlobalTarget||yP(l,g.target))},p=g=>{h(g,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{N3(a)||(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>D3(c,i),i)}),s}function O3(t){return t==="x"||t==="y"?dn[t]?null:(dn[t]=!0,()=>{dn[t]=!1}):dn.x||dn.y?null:(dn.x=dn.y=!0,()=>{dn.x=dn.y=!1})}const zl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ls=new Set(zl),L3=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),j3=t=>Um(t)?t[t.length-1]||0:t,F3={skipAnimations:!1,useManualTiming:!1};function $3(t){let e=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,h=!1,d=!1)=>{const g=d&&r?e:n;return h&&s.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[e,n]=[n,e],e.forEach(a),e.clear(),r=!1,i&&(i=!1,l.process(c))}};return l}const Mu=["read","resolveKeyframes","update","preRender","render","postRender"],U3=40;function vP(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Mu.reduce((_,v)=>(_[v]=$3(s),_),{}),{read:a,resolveKeyframes:l,update:c,preRender:h,render:d,postRender:p}=o,g=()=>{const _=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(_-i.timestamp,U3),1),i.timestamp=_,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),h.process(i),d.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(g))},S=()=>{n=!0,r=!0,i.isProcessing||t(g)};return{schedule:Mu.reduce((_,v)=>{const T=o[v];return _[v]=(b,O=!1,j=!1)=>(n||S(),T.schedule(b,O,j)),_},{}),cancel:_=>{for(let v=0;v<Mu.length;v++)o[Mu[v]].cancel(_)},state:i,steps:o}}const{schedule:Ie,cancel:ni,state:nt,steps:Ff}=vP(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0);let yc;function B3(){yc=void 0}const jn={now:()=>(yc===void 0&&jn.set(nt.isProcessing||F3.useManualTiming?nt.timestamp:performance.now()),yc),set:t=>{yc=t,queueMicrotask(B3)}};function fv(t,e){t.indexOf(e)===-1&&t.push(e)}function pv(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class mv{constructor(){this.subscriptions=[]}add(e){return fv(this.subscriptions,e),()=>pv(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function _P(t,e){return e?t*(1e3/e):0}const q1=30,z3=t=>!isNaN(parseFloat(t));class W3{constructor(e,n={}){this.version="11.16.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=jn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=jn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=z3(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new mv);const r=this.events[e].add(n);return e==="change"?()=>{r(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=jn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>q1)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,q1);return _P(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Il(t,e){return new W3(t,e)}function H3(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Il(n))}function q3(t,e){const n=gd(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=j3(s[o]);H3(t,o,a)}}const vt=t=>!!(t&&t.getVelocity);function G3(t){return!!(vt(t)&&t.add)}function Wm(t,e){const n=t.getValue("willChange");if(G3(n))return n.add(e)}const gv=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),K3="framerAppearId",wP="data-"+gv(K3);function EP(t){return t.props[wP]}const TP=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Q3=1e-7,Y3=12;function X3(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=TP(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>Q3&&++a<Y3);return o}function Wl(t,e,n,r){if(t===e&&n===r)return Gt;const i=s=>X3(s,0,1,t,n);return s=>s===0||s===1?s:TP(i(s),e,r)}const SP=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,IP=t=>e=>1-t(1-e),xP=Wl(.33,1.53,.69,.99),yv=IP(xP),AP=SP(yv),CP=t=>(t*=2)<1?.5*yv(t):.5*(2-Math.pow(2,-10*(t-1))),vv=t=>1-Math.sin(Math.acos(t)),PP=IP(vv),RP=SP(vv),kP=t=>/^0[^.\s]+$/u.test(t);function J3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||kP(t):!0}const bP=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),DP=t=>e=>typeof e=="string"&&e.startsWith(t),VP=DP("--"),Z3=DP("var(--"),_v=t=>Z3(t)?e$.test(t.split("/*")[0].trim()):!1,e$=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,t$=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function n$(t){const e=t$.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function NP(t,e,n=1){const[r,i]=n$(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return bP(o)?parseFloat(o):o}return _v(i)?NP(i,e,n+1):i}const dr=(t,e,n)=>n>e?e:n<t?t:n,Oo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},xl={...Oo,transform:t=>dr(0,1,t)},Ou={...Oo,default:1},Hl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Er=Hl("deg"),Fn=Hl("%"),Y=Hl("px"),r$=Hl("vh"),i$=Hl("vw"),G1={...Fn,parse:t=>Fn.parse(t)/100,transform:t=>Fn.transform(t*100)},s$=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),K1=t=>t===Oo||t===Y,Q1=(t,e)=>parseFloat(t.split(", ")[e]),Y1=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Q1(i[1],e);{const s=r.match(/^matrix\((.+)\)$/u);return s?Q1(s[1],t):0}},o$=new Set(["x","y","z"]),a$=zl.filter(t=>!o$.has(t));function l$(t){const e=[];return a$.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const _o={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Y1(4,13),y:Y1(5,14)};_o.translateX=_o.x;_o.translateY=_o.y;const MP=t=>e=>e.test(t),u$={test:t=>t==="auto",parse:t=>t},OP=[Oo,Y,Fn,Er,i$,r$,u$],X1=t=>OP.find(MP(t)),ji=new Set;let Hm=!1,qm=!1;function LP(){if(qm){const t=Array.from(ji).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=l$(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}qm=!1,Hm=!1,ji.forEach(t=>t.complete()),ji.clear()}function jP(){ji.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(qm=!0)})}function c$(){jP(),LP()}class wv{constructor(e,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ji.add(this),Hm||(Hm=!0,Ie.read(jP),Ie.resolveKeyframes(LP))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ji.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ji.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Fa=t=>Math.round(t*1e5)/1e5,Ev=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function h$(t){return t==null}const d$=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Tv=(t,e)=>n=>!!(typeof n=="string"&&d$.test(n)&&n.startsWith(t)||e&&!h$(n)&&Object.prototype.hasOwnProperty.call(n,e)),FP=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Ev);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},f$=t=>dr(0,255,t),$f={...Oo,transform:t=>Math.round(f$(t))},Ni={test:Tv("rgb","red"),parse:FP("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+$f.transform(t)+", "+$f.transform(e)+", "+$f.transform(n)+", "+Fa(xl.transform(r))+")"};function p$(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Gm={test:Tv("#"),parse:p$,transform:Ni.transform},js={test:Tv("hsl","hue"),parse:FP("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Fn.transform(Fa(e))+", "+Fn.transform(Fa(n))+", "+Fa(xl.transform(r))+")"},pt={test:t=>Ni.test(t)||Gm.test(t)||js.test(t),parse:t=>Ni.test(t)?Ni.parse(t):js.test(t)?js.parse(t):Gm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ni.transform(t):js.transform(t)},m$=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function g$(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Ev))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(m$))===null||n===void 0?void 0:n.length)||0)>0}const $P="number",UP="color",y$="var",v$="var(",J1="${}",_$=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Al(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(_$,l=>(pt.test(l)?(r.color.push(s),i.push(UP),n.push(pt.parse(l))):l.startsWith(v$)?(r.var.push(s),i.push(y$),n.push(l)):(r.number.push(s),i.push($P),n.push(parseFloat(l))),++s,J1)).split(J1);return{values:n,split:a,indexes:r,types:i}}function BP(t){return Al(t).values}function zP(t){const{split:e,types:n}=Al(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===$P?s+=Fa(i[o]):a===UP?s+=pt.transform(i[o]):s+=i[o]}return s}}const w$=t=>typeof t=="number"?0:t;function E$(t){const e=BP(t);return zP(t)(e.map(w$))}const ri={test:g$,parse:BP,createTransformer:zP,getAnimatableNone:E$},T$=new Set(["brightness","contrast","saturate","opacity"]);function S$(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Ev)||[];if(!r)return t;const i=n.replace(r,"");let s=T$.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const I$=/\b([a-z-]*)\(.*?\)/gu,Km={...ri,getAnimatableNone:t=>{const e=t.match(I$);return e?e.map(S$).join(" "):t}},x$={borderWidth:Y,borderTopWidth:Y,borderRightWidth:Y,borderBottomWidth:Y,borderLeftWidth:Y,borderRadius:Y,radius:Y,borderTopLeftRadius:Y,borderTopRightRadius:Y,borderBottomRightRadius:Y,borderBottomLeftRadius:Y,width:Y,maxWidth:Y,height:Y,maxHeight:Y,top:Y,right:Y,bottom:Y,left:Y,padding:Y,paddingTop:Y,paddingRight:Y,paddingBottom:Y,paddingLeft:Y,margin:Y,marginTop:Y,marginRight:Y,marginBottom:Y,marginLeft:Y,backgroundPositionX:Y,backgroundPositionY:Y},A$={rotate:Er,rotateX:Er,rotateY:Er,rotateZ:Er,scale:Ou,scaleX:Ou,scaleY:Ou,scaleZ:Ou,skew:Er,skewX:Er,skewY:Er,distance:Y,translateX:Y,translateY:Y,translateZ:Y,x:Y,y:Y,z:Y,perspective:Y,transformPerspective:Y,opacity:xl,originX:G1,originY:G1,originZ:Y},Z1={...Oo,transform:Math.round},Sv={...x$,...A$,zIndex:Z1,size:Y,fillOpacity:xl,strokeOpacity:xl,numOctaves:Z1},C$={...Sv,color:pt,backgroundColor:pt,outlineColor:pt,fill:pt,stroke:pt,borderColor:pt,borderTopColor:pt,borderRightColor:pt,borderBottomColor:pt,borderLeftColor:pt,filter:Km,WebkitFilter:Km},Iv=t=>C$[t];function WP(t,e){let n=Iv(t);return n!==Km&&(n=ri),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const P$=new Set(["auto","none","0"]);function R$(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!P$.has(s)&&Al(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=WP(n,i)}class HP extends wv{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),_v(c))){const h=NP(c,n.current);h!==void 0&&(e[l]=h),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!s$.has(r)||e.length!==2)return;const[i,s]=e,o=X1(i),a=X1(s);if(o!==a)if(K1(o)&&K1(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)J3(e[i])&&r.push(i);r.length&&R$(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_o[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=_o[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const eE=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ri.test(t)||t==="0")&&!t.startsWith("url("));function k$(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function b$(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=eE(i,e),a=eE(s,e);return!o||!a?!1:k$(t)||(n==="spring"||cv(n))&&r}const D$=t=>t!==null;function yd(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(D$),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const V$=40;class qP{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=jn.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>V$?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&c$(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=jn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!b$(e,r,i,s))if(o)this.options.duration=0;else{l==null||l(yd(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const h=this.initPlayback(e,n);h!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Ce=(t,e,n)=>t+(e-t)*n;function Uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function N$({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Uf(l,a,t+1/3),s=Uf(l,a,t),o=Uf(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function mh(t,e){return n=>n>0?e:t}const Bf=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},M$=[Gm,Ni,js],O$=t=>M$.find(e=>e.test(t));function tE(t){const e=O$(t);if(!e)return!1;let n=e.parse(t);return e===js&&(n=N$(n)),n}const nE=(t,e)=>{const n=tE(t),r=tE(e);if(!n||!r)return mh(t,e);const i={...n};return s=>(i.red=Bf(n.red,r.red,s),i.green=Bf(n.green,r.green,s),i.blue=Bf(n.blue,r.blue,s),i.alpha=Ce(n.alpha,r.alpha,s),Ni.transform(i))},L$=(t,e)=>n=>e(t(n)),ql=(...t)=>t.reduce(L$),Qm=new Set(["none","hidden"]);function j$(t,e){return Qm.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function F$(t,e){return n=>Ce(t,e,n)}function xv(t){return typeof t=="number"?F$:typeof t=="string"?_v(t)?mh:pt.test(t)?nE:B$:Array.isArray(t)?GP:typeof t=="object"?pt.test(t)?nE:$$:mh}function GP(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>xv(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function $$(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=xv(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function U$(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][i[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const B$=(t,e)=>{const n=ri.createTransformer(e),r=Al(t),i=Al(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Qm.has(t)&&!i.values.length||Qm.has(e)&&!r.values.length?j$(t,e):ql(GP(U$(r,i),i.values),n):mh(t,e)};function KP(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Ce(t,e,n):xv(t)(t,e)}const z$=5;function QP(t,e,n){const r=Math.max(e-z$,0);return _P(n-t(r),e-r)}const De={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zf=.001;function W$({duration:t=De.duration,bounce:e=De.bounce,velocity:n=De.velocity,mass:r=De.mass}){let i,s,o=1-e;o=dr(De.minDamping,De.maxDamping,o),t=dr(De.minDuration,De.maxDuration,rr(t)),o<1?(i=c=>{const h=c*o,d=h*t,p=h-n,g=Ym(c,o),S=Math.exp(-d);return zf-p/g*S},s=c=>{const d=c*o*t,p=d*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,S=Math.exp(-d),x=Ym(Math.pow(c,2),o);return(-i(c)+zf>0?-1:1)*((p-g)*S)/x}):(i=c=>{const h=Math.exp(-c*t),d=(c-n)*t+1;return-zf+h*d},s=c=>{const h=Math.exp(-c*t),d=(n-c)*(t*t);return h*d});const a=5/t,l=q$(i,s,a);if(t=nr(t),isNaN(l))return{stiffness:De.stiffness,damping:De.damping,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const H$=12;function q$(t,e,n){let r=n;for(let i=1;i<H$;i++)r=r-t(r)/e(r);return r}function Ym(t,e){return t*Math.sqrt(1-e*e)}const G$=["duration","bounce"],K$=["stiffness","damping","mass"];function rE(t,e){return e.some(n=>t[n]!==void 0)}function Q$(t){let e={velocity:De.velocity,stiffness:De.stiffness,damping:De.damping,mass:De.mass,isResolvedFromDuration:!1,...t};if(!rE(t,K$)&&rE(t,G$))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*dr(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:De.mass,stiffness:i,damping:s}}else{const n=W$(t);e={...e,...n,mass:De.mass},e.isResolvedFromDuration=!0}return e}function YP(t=De.visualDuration,e=De.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:h,duration:d,velocity:p,isResolvedFromDuration:g}=Q$({...n,velocity:-rr(n.velocity||0)}),S=p||0,x=c/(2*Math.sqrt(l*h)),P=o-s,_=rr(Math.sqrt(l/h)),v=Math.abs(P)<5;r||(r=v?De.restSpeed.granular:De.restSpeed.default),i||(i=v?De.restDelta.granular:De.restDelta.default);let T;if(x<1){const O=Ym(_,x);T=j=>{const I=Math.exp(-x*_*j);return o-I*((S+x*_*P)/O*Math.sin(O*j)+P*Math.cos(O*j))}}else if(x===1)T=O=>o-Math.exp(-_*O)*(P+(S+_*P)*O);else{const O=_*Math.sqrt(x*x-1);T=j=>{const I=Math.exp(-x*_*j),w=Math.min(O*j,300);return o-I*((S+x*_*P)*Math.sinh(w)+O*P*Math.cosh(w))/O}}const b={calculatedDuration:g&&d||null,next:O=>{const j=T(O);if(g)a.done=O>=d;else{let I=0;x<1&&(I=O===0?nr(S):QP(T,O,j));const w=Math.abs(I)<=r,A=Math.abs(o-j)<=i;a.done=w&&A}return a.value=a.done?o:j,a},toString:()=>{const O=Math.min(hP(b),Bm),j=dP(I=>b.next(O*I).value,O,30);return O+"ms "+j}};return b}function iE({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:h}){const d=t[0],p={done:!1,value:d},g=w=>a!==void 0&&w<a||l!==void 0&&w>l,S=w=>a===void 0?l:l===void 0||Math.abs(a-w)<Math.abs(l-w)?a:l;let x=n*e;const P=d+x,_=o===void 0?P:o(P);_!==P&&(x=_-d);const v=w=>-x*Math.exp(-w/r),T=w=>_+v(w),b=w=>{const A=v(w),C=T(w);p.done=Math.abs(A)<=c,p.value=p.done?_:C};let O,j;const I=w=>{g(p.value)&&(O=w,j=YP({keyframes:[p.value,S(p.value)],velocity:QP(T,w,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:h}))};return I(0),{calculatedDuration:null,next:w=>{let A=!1;return!j&&O===void 0&&(A=!0,b(w),I(w)),O!==void 0&&w>=O?j.next(w-O):(!A&&b(w),p)}}}const Y$=Wl(.42,0,1,1),X$=Wl(0,0,.58,1),XP=Wl(.42,0,.58,1),J$=t=>Array.isArray(t)&&typeof t[0]!="number",Z$={linear:Gt,easeIn:Y$,easeInOut:XP,easeOut:X$,circIn:vv,circInOut:RP,circOut:PP,backIn:yv,backInOut:AP,backOut:xP,anticipate:CP},sE=t=>{if(hv(t)){cP(t.length===4);const[e,n,r,i]=t;return Wl(e,n,r,i)}else if(typeof t=="string")return Z$[t];return t};function e9(t,e,n){const r=[],i=n||KP,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Gt:e;a=ql(l,a)}r.push(a)}return r}function t9(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(cP(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=e9(e,r,i),a=o.length,l=c=>{let h=0;if(a>1)for(;h<t.length-2&&!(c<t[h+1]);h++);const d=vo(t[h],t[h+1],c);return o[h](d)};return n?c=>l(dr(t[0],t[s-1],c)):l}function n9(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=vo(0,e,r);t.push(Ce(n,1,i))}}function r9(t){const e=[0];return n9(e,t.length-1),e}function i9(t,e){return t.map(n=>n*e)}function s9(t,e){return t.map(()=>e||XP).splice(0,t.length-1)}function gh({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=J$(r)?r.map(sE):sE(r),s={done:!1,value:e[0]},o=i9(n&&n.length===e.length?n:r9(e),t),a=t9(o,e,{ease:Array.isArray(i)?i:s9(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const o9=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Ie.update(e,!0),stop:()=>ni(e),now:()=>nt.isProcessing?nt.timestamp:jn.now()}},a9={decay:iE,inertia:iE,tween:gh,keyframes:gh,spring:YP},l9=t=>t/100;class Av extends qP{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||wv,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=cv(n)?n:a9[n]||gh;let l,c;a!==gh&&typeof e[0]!="number"&&(l=ql(l9,KP(e[0],e[1])),e=[0,100]);const h=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),h.calculatedDuration===null&&(h.calculatedDuration=hP(h));const{calculatedDuration:d}=h,p=d+i,g=p*(r+1)-i;return{generator:h,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:w}=this.options;return{done:!0,value:w[w.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:h,resolvedDuration:d}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:g,repeatType:S,repeatDelay:x,onUpdate:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-h/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const _=this.currentTime-p*(this.speed>=0?1:-1),v=this.speed>=0?_<0:_>h;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let T=this.currentTime,b=s;if(g){const w=Math.min(this.currentTime,h)/d;let A=Math.floor(w),C=w%1;!C&&w>=1&&(C=1),C===1&&A--,A=Math.min(A,g+1),!!(A%2)&&(S==="reverse"?(C=1-C,x&&(C-=x/d)):S==="mirror"&&(b=o)),T=dr(0,1,C)*d}const O=v?{done:!1,value:l[0]}:b.next(T);a&&(O.value=a(O.value));let{done:j}=O;!v&&c!==null&&(j=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return I&&i!==void 0&&(O.value=yd(l,this.options,i)),P&&P(O.value),I&&this.finish(),O}get duration(){const{resolved:e}=this;return e?rr(e.calculatedDuration):0}get time(){return rr(this.currentTime)}set time(e){e=nr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=rr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=o9,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const u9=new Set(["opacity","clipPath","filter","transform"]);function c9(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const h=pP(a,i);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const h9=lv(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yh=10,d9=2e4;function f9(t){return cv(t.type)||t.type==="spring"||!fP(t.ease)}function p9(t,e){const n=new Av({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let s=0;for(;!r.done&&s<d9;)r=n.sample(s),i.push(r.value),s+=yh;return{times:void 0,keyframes:i,duration:s-yh,ease:"linear"}}const JP={anticipate:CP,backInOut:AP,circInOut:RP};function m9(t){return t in JP}class oE extends qP{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new HP(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){var r;let{duration:i=300,times:s,ease:o,type:a,motionValue:l,name:c,startTime:h}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&ph()&&m9(o)&&(o=JP[o]),f9(this.options)){const{onComplete:p,onUpdate:g,motionValue:S,element:x,...P}=this.options,_=p9(e,P);e=_.keyframes,e.length===1&&(e[1]=e[0]),i=_.duration,s=_.times,o=_.ease,a="keyframes"}const d=c9(l.owner.current,c,e,{...this.options,duration:i,times:s,ease:o});return d.startTime=h??this.calcStartTime(),this.pendingTimeline?(B1(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:p}=this.options;l.set(yd(e,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return rr(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return rr(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=nr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Gt;const{animation:r}=n;B1(r,e)}return Gt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:h,onComplete:d,element:p,...g}=this.options,S=new Av({...g,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),x=nr(this.time);c.setWithVelocity(S.sample(x-yh).value,S.sample(x).value,yh)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=e;return h9()&&r&&u9.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const g9={type:"spring",stiffness:500,damping:25,restSpeed:10},y9=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),v9={type:"keyframes",duration:.8},_9={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w9=(t,{keyframes:e})=>e.length>2?v9:ls.has(t)?t.startsWith("scale")?y9(e[1]):g9:_9;function E9({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}const Cv=(t,e,n,r={},i,s)=>o=>{const a=uv(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-nr(l);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};E9(a)||(h={...h,...w9(t,h)}),h.duration&&(h.duration=nr(h.duration)),h.repeatDelay&&(h.repeatDelay=nr(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let d=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const p=yd(h.keyframes,a);if(p!==void 0)return Ie.update(()=>{h.onUpdate(p),h.onComplete()}),new C3([])}return!s&&oE.supports(h)?new oE(h):new Av(h)};function T9({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function ZP(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;r&&(o=r);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const d in l){const p=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),g=l[d];if(g===void 0||h&&T9(h,d))continue;const S={delay:n,...uv(o||{},d)};let x=!1;if(window.MotionHandoffAnimation){const _=EP(t);if(_){const v=window.MotionHandoffAnimation(_,d,Ie);v!==null&&(S.startTime=v,x=!0)}}Wm(t,d),p.start(Cv(d,p,g,t.shouldReduceMotion&&ls.has(d)?{type:!1}:S,t,x));const P=p.animation;P&&c.push(P)}return a&&Promise.all(c).then(()=>{Ie.update(()=>{a&&q3(t,a)})}),c}function Xm(t,e,n={}){var r;const i=gd(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(ZP(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:h=0,staggerChildren:d,staggerDirection:p}=s;return S9(t,e,h+c,d,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,h]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>h())}else return Promise.all([o(),a(n.delay)])}function S9(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(I9).forEach((c,h)=>{c.notify("AnimationStart",e),o.push(Xm(c,e,{...s,delay:n+l(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function I9(t,e){return t.sortNodePosition(e)}function x9(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Xm(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Xm(t,e,n);else{const i=typeof e=="function"?gd(t,e,n.custom):e;r=Promise.all(ZP(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const A9=av.length;function eR(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?eR(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<A9;n++){const r=av[n],i=t.props[r];(Sl(i)||i===!1)&&(e[r]=i)}return e}const C9=[...ov].reverse(),P9=ov.length;function R9(t){return e=>Promise.all(e.map(({animation:n,options:r})=>x9(t,n,r)))}function k9(t){let e=R9(t),n=aE(),r=!0;const i=l=>(c,h)=>{var d;const p=gd(t,h,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(p){const{transition:g,transitionEnd:S,...x}=p;c={...c,...x,...S}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,h=eR(t.parent)||{},d=[],p=new Set;let g={},S=1/0;for(let P=0;P<P9;P++){const _=C9[P],v=n[_],T=c[_]!==void 0?c[_]:h[_],b=Sl(T),O=_===l?v.isActive:null;O===!1&&(S=P);let j=T===h[_]&&T!==c[_]&&b;if(j&&r&&t.manuallyAnimateOnMount&&(j=!1),v.protectedKeys={...g},!v.isActive&&O===null||!T&&!v.prevProp||md(T)||typeof T=="boolean")continue;const I=b9(v.prevProp,T);let w=I||_===l&&v.isActive&&!j&&b||P>S&&b,A=!1;const C=Array.isArray(T)?T:[T];let k=C.reduce(i(_),{});O===!1&&(k={});const{prevResolvedValues:N={}}=v,R={...N,...k},Ze=oe=>{w=!0,p.has(oe)&&(A=!0,p.delete(oe)),v.needsAnimating[oe]=!0;const B=t.getValue(oe);B&&(B.liveStyle=!1)};for(const oe in R){const B=k[oe],G=N[oe];if(g.hasOwnProperty(oe))continue;let K=!1;Um(B)&&Um(G)?K=!uP(B,G):K=B!==G,K?B!=null?Ze(oe):p.add(oe):B!==void 0&&p.has(oe)?Ze(oe):v.protectedKeys[oe]=!0}v.prevProp=T,v.prevResolvedValues=k,v.isActive&&(g={...g,...k}),r&&t.blockInitialAnimation&&(w=!1),w&&(!(j&&I)||A)&&d.push(...C.map(oe=>({animation:oe,options:{type:_}})))}if(p.size){const P={};p.forEach(_=>{const v=t.getBaseTarget(_),T=t.getValue(_);T&&(T.liveStyle=!0),P[_]=v??null}),d.push({animation:P})}let x=!!d.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(x=!1),r=!1,x?e(d):Promise.resolve()}function a(l,c){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=aE(),r=!0}}}function b9(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!uP(e,t):!1}function _i(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function aE(){return{animate:_i(!0),whileInView:_i(),whileHover:_i(),whileTap:_i(),whileDrag:_i(),whileFocus:_i(),exit:_i()}}class pi{constructor(e){this.isMounted=!1,this.node=e}update(){}}class D9 extends pi{constructor(e){super(e),e.animationState||(e.animationState=k9(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();md(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let V9=0;class N9 extends pi{constructor(){super(...arguments),this.id=V9++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const M9={animation:{Feature:D9},exit:{Feature:N9}};function Cl(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function Gl(t){return{point:{x:t.pageX,y:t.pageY}}}const O9=t=>e=>dv(e)&&t(e,Gl(e));function $a(t,e,n,r){return Cl(t,e,O9(n),r)}const lE=(t,e)=>Math.abs(t-e);function L9(t,e){const n=lE(t.x,e.x),r=lE(t.y,e.y);return Math.sqrt(n**2+r**2)}class tR{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Hf(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=L9(d.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:S}=d,{timestamp:x}=nt;this.history.push({...S,timestamp:x});const{onStart:P,onMove:_}=this.handlers;p||(P&&P(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Wf(p,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:g,onSessionEnd:S,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=Hf(d.type==="pointercancel"?this.lastMoveEventInfo:Wf(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,P),S&&S(d,P)},!dv(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Gl(e),a=Wf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=nt;this.history=[{...l,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Hf(a,this.history)),this.removeListeners=ql($a(this.contextWindow,"pointermove",this.handlePointerMove),$a(this.contextWindow,"pointerup",this.handlePointerUp),$a(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ni(this.updatePoint)}}function Wf(t,e){return e?{point:e(t.point)}:t}function uE(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Hf({point:t},e){return{point:t,delta:uE(t,nR(e)),offset:uE(t,j9(e)),velocity:F9(e,.1)}}function j9(t){return t[0]}function nR(t){return t[t.length-1]}function F9(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=nR(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>nr(e)));)n--;if(!r)return{x:0,y:0};const s=rr(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Fs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const rR=1e-4,$9=1-rR,U9=1+rR,iR=.01,B9=0-iR,z9=0+iR;function Qt(t){return t.max-t.min}function W9(t,e,n){return Math.abs(t-e)<=n}function cE(t,e,n,r=.5){t.origin=r,t.originPoint=Ce(e.min,e.max,t.origin),t.scale=Qt(n)/Qt(e),t.translate=Ce(n.min,n.max,t.origin)-t.originPoint,(t.scale>=$9&&t.scale<=U9||isNaN(t.scale))&&(t.scale=1),(t.translate>=B9&&t.translate<=z9||isNaN(t.translate))&&(t.translate=0)}function Ua(t,e,n,r){cE(t.x,e.x,n.x,r?r.originX:void 0),cE(t.y,e.y,n.y,r?r.originY:void 0)}function hE(t,e,n){t.min=n.min+e.min,t.max=t.min+Qt(e)}function H9(t,e,n){hE(t.x,e.x,n.x),hE(t.y,e.y,n.y)}function dE(t,e,n){t.min=e.min-n.min,t.max=t.min+Qt(e)}function Ba(t,e,n){dE(t.x,e.x,n.x),dE(t.y,e.y,n.y)}function q9(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Ce(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Ce(n,t,r.max):Math.min(t,n)),t}function fE(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function G9(t,{top:e,left:n,bottom:r,right:i}){return{x:fE(t.x,n,i),y:fE(t.y,e,r)}}function pE(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function K9(t,e){return{x:pE(t.x,e.x),y:pE(t.y,e.y)}}function Q9(t,e){let n=.5;const r=Qt(t),i=Qt(e);return i>r?n=vo(e.min,e.max-r,t.min):r>i&&(n=vo(t.min,t.max-i,e.min)),dr(0,1,n)}function Y9(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Jm=.35;function X9(t=Jm){return t===!1?t=0:t===!0&&(t=Jm),{x:mE(t,"left","right"),y:mE(t,"top","bottom")}}function mE(t,e,n){return{min:gE(t,e),max:gE(t,n)}}function gE(t,e){return typeof t=="number"?t:t[e]||0}const yE=()=>({translate:0,scale:1,origin:0,originPoint:0}),$s=()=>({x:yE(),y:yE()}),vE=()=>({min:0,max:0}),Ne=()=>({x:vE(),y:vE()});function Zt(t){return[t("x"),t("y")]}function sR({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function J9({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Z9(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function qf(t){return t===void 0||t===1}function Zm({scale:t,scaleX:e,scaleY:n}){return!qf(t)||!qf(e)||!qf(n)}function Ai(t){return Zm(t)||oR(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function oR(t){return _E(t.x)||_E(t.y)}function _E(t){return t&&t!=="0%"}function vh(t,e,n){const r=t-n,i=e*r;return n+i}function wE(t,e,n,r,i){return i!==void 0&&(t=vh(t,i,r)),vh(t,n,r)+e}function eg(t,e=0,n=1,r,i){t.min=wE(t.min,e,n,r,i),t.max=wE(t.max,e,n,r,i)}function aR(t,{x:e,y:n}){eg(t.x,e.translate,e.scale,e.originPoint),eg(t.y,n.translate,n.scale,n.originPoint)}const EE=.999999999999,TE=1.0000000000001;function eU(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Bs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,aR(t,o)),r&&Ai(s.latestValues)&&Bs(t,s.latestValues))}e.x<TE&&e.x>EE&&(e.x=1),e.y<TE&&e.y>EE&&(e.y=1)}function Us(t,e){t.min=t.min+e,t.max=t.max+e}function SE(t,e,n,r,i=.5){const s=Ce(t.min,t.max,i);eg(t,e,n,s,r)}function Bs(t,e){SE(t.x,e.x,e.scaleX,e.scale,e.originX),SE(t.y,e.y,e.scaleY,e.scale,e.originY)}function lR(t,e){return sR(Z9(t.getBoundingClientRect(),e))}function tU(t,e,n){const r=lR(t,n),{scroll:i}=e;return i&&(Us(r.x,i.offset.x),Us(r.y,i.offset.y)),r}const uR=({current:t})=>t?t.ownerDocument.defaultView:null,nU=new WeakMap;class rU{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ne(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Gl(h).point)},s=(h,d)=>{const{drag:p,dragPropagation:g,onDragStart:S}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=O3(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Zt(P=>{let _=this.getAxisMotionValue(P).get()||0;if(Fn.test(_)){const{projection:v}=this.visualElement;if(v&&v.layout){const T=v.layout.layoutBox[P];T&&(_=Qt(T)*(parseFloat(_)/100))}}this.originPoint[P]=_}),S&&Ie.postRender(()=>S(h,d)),Wm(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(h,d)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:S,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:P}=d;if(g&&this.currentDirection===null){this.currentDirection=iU(P),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",d.point,P),this.updateAxis("y",d.point,P),this.visualElement.render(),x&&x(h,d)},a=(h,d)=>this.stop(h,d),l=()=>Zt(h=>{var d;return this.getAnimationState(h)==="paused"&&((d=this.getAxisMotionValue(h).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new tR(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:uR(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Ie.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Lu(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=q9(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Fs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=G9(i.layoutBox,n):this.constraints=!1,this.elastic=X9(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Zt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Y9(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Fs(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=tU(r,i.root,this.visualElement.getTransformPagePoint());let o=K9(i.layout.layoutBox,s);if(n){const a=n(J9(o));this.hasMutatedConstraints=!!a,a&&(o=sR(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Zt(h=>{if(!Lu(h,n,this.currentDirection))return;let d=l&&l[h]||{};o&&(d={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,S={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(h,S)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Wm(this.visualElement,e),r.start(Cv(e,r,0,n,this.visualElement,!1))}stopAnimation(){Zt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Zt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Zt(n=>{const{drag:r}=this.getProps();if(!Lu(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Ce(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Fs(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Zt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=Q9({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Zt(o=>{if(!Lu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Ce(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;nU.set(this.visualElement,this);const e=this.visualElement.current,n=$a(e,"pointerdown",l=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Fs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ie.read(r);const o=Cl(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Zt(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=l[h].translate,d.set(d.get()+l[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Jm,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Lu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function iU(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class sU extends pi{constructor(e){super(e),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new rU(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const IE=t=>(e,n)=>{t&&Ie.postRender(()=>t(e,n))};class oU extends pi{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(e){this.session=new tR(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uR(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:IE(e),onStart:IE(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Ie.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=$a(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const vd=D.createContext(null);function aU(){const t=D.useContext(vd);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=D.useId();D.useEffect(()=>r(i),[]);const s=D.useCallback(()=>n&&n(i),[i,n]);return!e&&n?[!1,s]:[!0]}const Pv=D.createContext({}),cR=D.createContext({}),vc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function xE(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const oa={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Y.test(t))t=parseFloat(t);else return t;const n=xE(t,e.target.x),r=xE(t,e.target.y);return`${n}% ${r}%`}},lU={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=ri.parse(t);if(i.length>5)return r;const s=ri.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=Ce(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},_h={};function uU(t){Object.assign(_h,t)}const{schedule:Rv,cancel:F8}=vP(queueMicrotask,!1);class cU extends D.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;uU(hU),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),vc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Ie.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Rv.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hR(t){const[e,n]=aU(),r=D.useContext(Pv);return y.jsx(cU,{...t,layoutGroup:r,switchLayoutGroup:D.useContext(cR),isPresent:e,safeToRemove:n})}const hU={borderRadius:{...oa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oa,borderTopRightRadius:oa,borderBottomLeftRadius:oa,borderBottomRightRadius:oa,boxShadow:lU};function dU(t,e,n){const r=vt(t)?t:Il(t);return r.start(Cv("",r,e,n)),r.animation}function fU(t){return t instanceof SVGElement&&t.tagName!=="svg"}const pU=(t,e)=>t.depth-e.depth;class mU{constructor(){this.children=[],this.isDirty=!1}add(e){fv(this.children,e),this.isDirty=!0}remove(e){pv(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(pU),this.isDirty=!1,this.children.forEach(e)}}function gU(t,e){const n=jn.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(ni(r),t(s-e))};return Ie.read(r,!0),()=>ni(r)}function _c(t){const e=vt(t)?t.get():t;return L3(e)?e.toValue():e}const dR=["TopLeft","TopRight","BottomLeft","BottomRight"],yU=dR.length,AE=t=>typeof t=="string"?parseFloat(t):t,CE=t=>typeof t=="number"||Y.test(t);function vU(t,e,n,r,i,s){i?(t.opacity=Ce(0,n.opacity!==void 0?n.opacity:1,_U(r)),t.opacityExit=Ce(e.opacity!==void 0?e.opacity:1,0,wU(r))):s&&(t.opacity=Ce(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<yU;o++){const a=`border${dR[o]}Radius`;let l=PE(e,a),c=PE(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||CE(l)===CE(c)?(t[a]=Math.max(Ce(AE(l),AE(c),r),0),(Fn.test(c)||Fn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Ce(e.rotate||0,n.rotate||0,r))}function PE(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const _U=fR(0,.5,PP),wU=fR(.5,.95,Gt);function fR(t,e,n){return r=>r<t?0:r>e?1:n(vo(t,e,r))}function RE(t,e){t.min=e.min,t.max=e.max}function Jt(t,e){RE(t.x,e.x),RE(t.y,e.y)}function kE(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function bE(t,e,n,r,i){return t-=e,t=vh(t,1/n,r),i!==void 0&&(t=vh(t,1/i,r)),t}function EU(t,e=0,n=1,r=.5,i,s=t,o=t){if(Fn.test(e)&&(e=parseFloat(e),e=Ce(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Ce(s.min,s.max,r);t===s&&(a-=e),t.min=bE(t.min,e,n,a,i),t.max=bE(t.max,e,n,a,i)}function DE(t,e,[n,r,i],s,o){EU(t,e[n],e[r],e[i],e.scale,s,o)}const TU=["x","scaleX","originX"],SU=["y","scaleY","originY"];function VE(t,e,n,r){DE(t.x,e,TU,n?n.x:void 0,r?r.x:void 0),DE(t.y,e,SU,n?n.y:void 0,r?r.y:void 0)}function NE(t){return t.translate===0&&t.scale===1}function pR(t){return NE(t.x)&&NE(t.y)}function ME(t,e){return t.min===e.min&&t.max===e.max}function IU(t,e){return ME(t.x,e.x)&&ME(t.y,e.y)}function OE(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function mR(t,e){return OE(t.x,e.x)&&OE(t.y,e.y)}function LE(t){return Qt(t.x)/Qt(t.y)}function jE(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class xU{constructor(){this.members=[]}add(e){fv(this.members,e),e.scheduleRender()}remove(e){if(pv(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function AU(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:h,rotateX:d,rotateY:p,skewX:g,skewY:S}=n;c&&(r=`perspective(${c}px) ${r}`),h&&(r+=`rotate(${h}deg) `),d&&(r+=`rotateX(${d}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),S&&(r+=`skewY(${S}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Ci={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ta=typeof window<"u"&&window.MotionDebug!==void 0,Gf=["","X","Y","Z"],CU={visibility:"hidden"},FE=1e3;let PU=0;function Kf(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function gR(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=EP(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Ie,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&gR(r)}function yR({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=PU++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ta&&(Ci.totalNodes=Ci.resolvedTargetDeltas=Ci.recalculatedProjection=0),this.nodes.forEach(bU),this.nodes.forEach(OU),this.nodes.forEach(LU),this.nodes.forEach(DU),Ta&&window.MotionDebug.record(Ci)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new mU)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new mv),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=fU(o),this.instance=o;const{layoutId:l,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=gU(p,250),vc.hasAnimatedSinceResize&&(vc.hasAnimatedSinceResize=!1,this.nodes.forEach(UE))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||h.getDefaultTransition()||BU,{onLayoutAnimationStart:P,onLayoutAnimationComplete:_}=h.getProps(),v=!this.targetLayout||!mR(this.targetLayout,S)||g,T=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||T||p&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,T);const b={...uv(x,"layout"),onPlay:P,onComplete:_};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||UE(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ni(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jU),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gR(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const d=this.path[h];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($E);return}this.isUpdating||this.nodes.forEach(NU),this.isUpdating=!1,this.nodes.forEach(MU),this.nodes.forEach(RU),this.nodes.forEach(kU),this.clearAllSnapshots();const a=jn.now();nt.delta=dr(0,1e3/60,a-nt.timestamp),nt.timestamp=a,nt.isProcessing=!0,Ff.update.process(nt),Ff.preRender.process(nt),Ff.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Rv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(VU),this.sharedNodes.forEach(FU)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ne(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!pR(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&(a||Ai(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),zU(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Ne();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(WU))){const{scroll:h}=this.root;h&&(Us(l.x,h.offset.x),Us(l.y,h.offset.y))}return l}removeElementScroll(o){var a;const l=Ne();if(Jt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const h=this.path[c],{scroll:d,options:p}=h;h!==this.root&&d&&p.layoutScroll&&(d.wasRoot&&Jt(l,o),Us(l.x,d.offset.x),Us(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Ne();Jt(l,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Bs(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),Ai(h.latestValues)&&Bs(l,h.latestValues)}return Ai(this.latestValues)&&Bs(l,this.latestValues),l}removeTransform(o){const a=Ne();Jt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ai(c.latestValues))continue;Zm(c.latestValues)&&c.updateSnapshot();const h=Ne(),d=c.measurePageBox();Jt(h,d),VE(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return Ai(this.latestValues)&&VE(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=nt.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ne(),this.relativeTargetOrigin=Ne(),Ba(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ne(),this.targetWithTransforms=Ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),H9(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Jt(this.target,this.layout.layoutBox),aR(this.target,this.targetDelta)):Jt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ne(),this.relativeTargetOrigin=Ne(),Ba(this.relativeTargetOrigin,this.target,g.target),Jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ta&&Ci.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zm(this.parent.latestValues)||oR(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(c=!1),c)return;const{layout:h,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||d))return;Jt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;eU(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Ne());const{target:S}=a;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(kE(this.prevProjectionDelta.x,this.projectionDelta.x),kE(this.prevProjectionDelta.y,this.projectionDelta.y)),Ua(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!jE(this.projectionDelta.x,this.prevProjectionDelta.x)||!jE(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S)),Ta&&Ci.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=$s(),this.projectionDelta=$s(),this.projectionDeltaWithTransform=$s()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},h={...this.latestValues},d=$s();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Ne(),g=l?l.source:void 0,S=this.layout?this.layout.source:void 0,x=g!==S,P=this.getStack(),_=!P||P.members.length<=1,v=!!(x&&!_&&this.options.crossfade===!0&&!this.path.some(UU));this.animationProgress=0;let T;this.mixTargetDelta=b=>{const O=b/1e3;BE(d.x,o.x,O),BE(d.y,o.y,O),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ba(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$U(this.relativeTarget,this.relativeTargetOrigin,p,O),T&&IU(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=Ne()),Jt(T,this.relativeTarget)),x&&(this.animationValues=h,vU(h,c,this.latestValues,O,v,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ni(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{vc.hasAnimatedSinceResize=!0,this.currentAnimation=dU(0,FE,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(FE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:h}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&vR(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ne();const d=Qt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=Qt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Jt(a,l),Bs(a,h),Ua(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new xU),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Kf("z",o,c,this.animationValues);for(let h=0;h<Gf.length;h++)Kf(`rotate${Gf[h]}`,o,c,this.animationValues),Kf(`skew${Gf[h]}`,o,c,this.animationValues);o.render();for(const h in c)o.setStaticValue(h,c[h]),this.animationValues&&(this.animationValues[h]=c[h]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return CU;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=_c(o==null?void 0:o.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=_c(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ai(this.latestValues)&&(x.transform=h?h({},""):"none",this.hasProjected=!1),x}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=AU(this.projectionDeltaWithTransform,this.treeScale,p),h&&(c.transform=h(p,c.transform));const{x:g,y:S}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${S.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in _h){if(p[x]===void 0)continue;const{correct:P,applyTo:_}=_h[x],v=c.transform==="none"?p[x]:P(p[x],d);if(_){const T=_.length;for(let b=0;b<T;b++)c[_[b]]=v}else c[x]=v}return this.options.layoutId&&(c.pointerEvents=d===this?_c(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach($E),this.root.sharedNodes.clear()}}}function RU(t){t.updateLayout()}function kU(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Zt(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],g=Qt(p);p.min=r[d].min,p.max=p.min+g}):vR(s,n.layoutBox,r)&&Zt(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],g=Qt(r[d]);p.max=p.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+g)});const a=$s();Ua(a,r,n.layoutBox);const l=$s();o?Ua(l,t.applyTransform(i,!0),n.measuredBox):Ua(l,r,n.layoutBox);const c=!pR(a);let h=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:g}=d;if(p&&g){const S=Ne();Ba(S,n.layoutBox,p.layoutBox);const x=Ne();Ba(x,r,g.layoutBox),mR(S,x)||(h=!0),d.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=S,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function bU(t){Ta&&Ci.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function DU(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function VU(t){t.clearSnapshot()}function $E(t){t.clearMeasurements()}function NU(t){t.isLayoutDirty=!1}function MU(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function UE(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function OU(t){t.resolveTargetDelta()}function LU(t){t.calcProjection()}function jU(t){t.resetSkewAndRotation()}function FU(t){t.removeLeadSnapshot()}function BE(t,e,n){t.translate=Ce(e.translate,0,n),t.scale=Ce(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function zE(t,e,n,r){t.min=Ce(e.min,n.min,r),t.max=Ce(e.max,n.max,r)}function $U(t,e,n,r){zE(t.x,e.x,n.x,r),zE(t.y,e.y,n.y,r)}function UU(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const BU={duration:.45,ease:[.4,0,.1,1]},WE=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),HE=WE("applewebkit/")&&!WE("chrome/")?Math.round:Gt;function qE(t){t.min=HE(t.min),t.max=HE(t.max)}function zU(t){qE(t.x),qE(t.y)}function vR(t,e,n){return t==="position"||t==="preserve-aspect"&&!W9(LE(e),LE(n),.2)}function WU(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const HU=yR({attachResizeListener:(t,e)=>Cl(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qf={current:void 0},_R=yR({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Qf.current){const t=new HU({});t.mount(window),t.setOptions({layoutScroll:!0}),Qf.current=t}return Qf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),qU={pan:{Feature:oU},drag:{Feature:sU,ProjectionNode:_R,MeasureLayout:hR}};function GE(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&Ie.postRender(()=>s(e,Gl(e)))}class GU extends pi{mount(){const{current:e}=this.node;e&&(this.unmount=b3(e,n=>(GE(this.node,n,"Start"),r=>GE(this.node,r,"End"))))}unmount(){}}class KU extends pi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ql(Cl(this.node.current,"focus",()=>this.onFocus()),Cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function KE(t,e,n){const{props:r}=t;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&Ie.postRender(()=>s(e,Gl(e)))}class QU extends pi{mount(){const{current:e}=this.node;e&&(this.unmount=M3(e,n=>(KE(this.node,n,"Start"),(r,{success:i})=>KE(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const tg=new WeakMap,Yf=new WeakMap,YU=t=>{const e=tg.get(t.target);e&&e(t)},XU=t=>{t.forEach(YU)};function JU({root:t,...e}){const n=t||document;Yf.has(n)||Yf.set(n,{});const r=Yf.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(XU,{root:t,...e})),r[i]}function ZU(t,e,n){const r=JU(e);return tg.set(t,n),r.observe(t),()=>{tg.delete(t),r.unobserve(t)}}const e6={some:0,all:1};class t6 extends pi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:e6[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),p=c?h:d;p&&p(l)};return ZU(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(n6(e,n))&&this.startObserver()}unmount(){}}function n6({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const r6={inView:{Feature:t6},tap:{Feature:QU},focus:{Feature:KU},hover:{Feature:GU}},i6={layout:{ProjectionNode:_R,MeasureLayout:hR}},kv=D.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),_d=D.createContext({}),bv=typeof window<"u",wR=bv?D.useLayoutEffect:D.useEffect,ER=D.createContext({strict:!1});function s6(t,e,n,r,i){var s,o;const{visualElement:a}=D.useContext(_d),l=D.useContext(ER),c=D.useContext(vd),h=D.useContext(kv).reducedMotion,d=D.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:h}));const p=d.current,g=D.useContext(cR);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&o6(d.current,n,i,g);const S=D.useRef(!1);D.useInsertionEffect(()=>{p&&S.current&&p.update(n,c)});const x=n[wP],P=D.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return wR(()=>{p&&(S.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Rv.render(p.render),P.current&&p.animationState&&p.animationState.animateChanges())}),D.useEffect(()=>{p&&(!P.current&&p.animationState&&p.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window,x)}),P.current=!1))}),p}function o6(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:TR(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Fs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function TR(t){if(t)return t.options.allowProjection!==!1?t.projection:TR(t.parent)}function a6(t,e,n){return D.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Fs(n)&&(n.current=r))},[e])}function wd(t){return md(t.animate)||av.some(e=>Sl(t[e]))}function SR(t){return!!(wd(t)||t.variants)}function l6(t,e){if(wd(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Sl(n)?n:void 0,animate:Sl(r)?r:void 0}}return t.inherit!==!1?e:{}}function u6(t){const{initial:e,animate:n}=l6(t,D.useContext(_d));return D.useMemo(()=>({initial:e,animate:n}),[QE(e),QE(n)])}function QE(t){return Array.isArray(t)?t.join(" "):t}const YE={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},wo={};for(const t in YE)wo[t]={isEnabled:e=>YE[t].some(n=>!!e[n])};function c6(t){for(const e in t)wo[e]={...wo[e],...t[e]}}const h6=Symbol.for("motionComponentSymbol");function d6({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&c6(t);function s(a,l){let c;const h={...D.useContext(kv),...a,layoutId:f6(a)},{isStatic:d}=h,p=u6(a),g=r(a,d);if(!d&&bv){p6();const S=m6(h);c=S.MeasureLayout,p.visualElement=s6(i,g,h,e,S.ProjectionNode)}return y.jsxs(_d.Provider,{value:p,children:[c&&p.visualElement?y.jsx(c,{visualElement:p.visualElement,...h}):null,n(i,a,a6(g,p.visualElement,l),g,d,p.visualElement)]})}const o=D.forwardRef(s);return o[h6]=i,o}function f6({layoutId:t}){const e=D.useContext(Pv).id;return e&&t!==void 0?e+"-"+t:t}function p6(t,e){D.useContext(ER).strict}function m6(t){const{drag:e,layout:n}=wo;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const g6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dv(t){return typeof t!="string"||t.includes("-")?!1:!!(g6.indexOf(t)>-1||/[A-Z]/u.test(t))}function IR(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const xR=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function AR(t,e,n,r){IR(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(xR.has(i)?i:gv(i),e.attrs[i])}function CR(t,{layout:e,layoutId:n}){return ls.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!_h[t]||t==="opacity")}function Vv(t,e,n){var r;const{style:i}=t,s={};for(const o in i)(vt(i[o])||e.style&&vt(e.style[o])||CR(o,t)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function PR(t,e,n){const r=Vv(t,e,n);for(const i in t)if(vt(t[i])||vt(e[i])){const s=zl.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function Nv(t){const e=D.useRef(null);return e.current===null&&(e.current=t()),e.current}function y6({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,s){const o={latestValues:v6(r,i,s,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const RR=t=>(e,n)=>{const r=D.useContext(_d),i=D.useContext(vd),s=()=>y6(t,e,r,i);return n?s():Nv(s)};function v6(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=_c(s[p]);let{initial:o,animate:a}=t;const l=wd(t),c=SR(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const d=h?a:o;if(d&&typeof d!="boolean"&&!md(d)){const p=Array.isArray(d)?d:[d];for(let g=0;g<p.length;g++){const S=sv(t,p[g]);if(S){const{transitionEnd:x,transition:P,..._}=S;for(const v in _){let T=_[v];if(Array.isArray(T)){const b=h?T.length-1:0;T=T[b]}T!==null&&(i[v]=T)}for(const v in x)i[v]=x[v]}}}return i}const Mv=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),kR=()=>({...Mv(),attrs:{}}),bR=(t,e)=>e&&typeof t=="number"?e.transform(t):t,_6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},w6=zl.length;function E6(t,e,n){let r="",i=!0;for(let s=0;s<w6;s++){const o=zl[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=bR(a,Sv[o]);if(!l){i=!1;const h=_6[o]||o;r+=`${h}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Ov(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ls.has(l)){o=!0;continue}else if(VP(l)){i[l]=c;continue}else{const h=bR(c,Sv[l]);l.startsWith("origin")?(a=!0,s[l]=h):r[l]=h}}if(e.transform||(o||n?r.transform=E6(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:h=0}=s;r.transformOrigin=`${l} ${c} ${h}`}}function XE(t,e,n){return typeof t=="string"?t:Y.transform(e+n*t)}function T6(t,e,n){const r=XE(e,t.x,t.width),i=XE(n,t.y,t.height);return`${r} ${i}`}const S6={offset:"stroke-dashoffset",array:"stroke-dasharray"},I6={offset:"strokeDashoffset",array:"strokeDasharray"};function x6(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?S6:I6;t[s.offset]=Y.transform(-r);const o=Y.transform(e),a=Y.transform(n);t[s.array]=`${o} ${a}`}function Lv(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},h,d){if(Ov(t,c,d),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:S}=t;p.transform&&(S&&(g.transform=p.transform),delete p.transform),S&&(i!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=T6(S,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&x6(p,o,a,l,!1)}const jv=t=>typeof t=="string"&&t.toLowerCase()==="svg",A6={useVisualState:RR({scrapeMotionValuesFromProps:PR,createRenderState:kR,onMount:(t,e,{renderState:n,latestValues:r})=>{Ie.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Ie.render(()=>{Lv(n,r,jv(e.tagName),t.transformTemplate),AR(e,n)})}})},C6={useVisualState:RR({scrapeMotionValuesFromProps:Vv,createRenderState:Mv})};function DR(t,e,n){for(const r in e)!vt(e[r])&&!CR(r,n)&&(t[r]=e[r])}function P6({transformTemplate:t},e){return D.useMemo(()=>{const n=Mv();return Ov(n,e,t),Object.assign({},n.vars,n.style)},[e])}function R6(t,e){const n=t.style||{},r={};return DR(r,n,t),Object.assign(r,P6(t,e)),r}function k6(t,e){const n={},r=R6(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const b6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wh(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||b6.has(t)}let VR=t=>!wh(t);function D6(t){t&&(VR=e=>e.startsWith("on")?!wh(e):t(e))}try{D6(require("@emotion/is-prop-valid").default)}catch{}function V6(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(VR(i)||n===!0&&wh(i)||!e&&!wh(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function N6(t,e,n,r){const i=D.useMemo(()=>{const s=kR();return Lv(s,e,jv(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};DR(s,t.style,t),i.style={...s,...i.style}}return i}function M6(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Dv(n)?N6:k6)(r,s,o,n),c=V6(r,typeof n=="string",t),h=n!==D.Fragment?{...c,...l,ref:i}:{},{children:d}=r,p=D.useMemo(()=>vt(d)?d.get():d,[d]);return D.createElement(n,{...h,children:p})}}function O6(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Dv(r)?A6:C6,preloadedFeatures:t,useRender:M6(i),createVisualElement:e,Component:r};return d6(o)}}const ng={current:null},NR={current:!1};function L6(){if(NR.current=!0,!!bv)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ng.current=t.matches;t.addListener(e),e()}else ng.current=!1}function j6(t,e,n){for(const r in e){const i=e[r],s=n[r];if(vt(i))t.addValue(r,i);else if(vt(s))t.addValue(r,Il(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Il(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const JE=new WeakMap,F6=[...OP,pt,ri],$6=t=>F6.find(MP(t)),ZE=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class U6{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=jn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Ie.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=wd(n),this.isVariantNode=SR(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const g=d[p];l[p]!==void 0&&vt(g)&&g.set(l[p],!1)}}mount(e){this.current=e,JE.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),NR.current||L6(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ng.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){JE.delete(this.current),this.projection&&this.projection.unmount(),ni(this.notifyUpdate),ni(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=ls.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in wo){const n=wo[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ne()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<ZE.length;r++){const i=ZE[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=j6(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Il(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(bP(i)||kP(i))?i=parseFloat(i):!$6(i)&&ri.test(n)&&(i=WP(e,n)),this.setBaseTarget(e,vt(i)?i.get():i)),vt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=sv(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!vt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new mv),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class MR extends U6{constructor(){super(...arguments),this.KeyframeResolver=HP}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;vt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function B6(t){return window.getComputedStyle(t)}class z6 extends MR{constructor(){super(...arguments),this.type="html",this.renderInstance=IR}readValueFromInstance(e,n){if(ls.has(n)){const r=Iv(n);return r&&r.default||0}else{const r=B6(e),i=(VP(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return lR(e,n)}build(e,n,r){Ov(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return Vv(e,n,r)}}class W6 extends MR{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ne}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ls.has(n)){const r=Iv(n);return r&&r.default||0}return n=xR.has(n)?n:gv(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return PR(e,n,r)}build(e,n,r){Lv(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){AR(e,n,r,i)}mount(e){this.isSVGTag=jv(e.tagName),super.mount(e)}}const H6=(t,e)=>Dv(t)?new W6(e):new z6(e,{allowProjection:t!==D.Fragment}),q6=O6({...M9,...r6,...qU,...i6},H6),en=I3(q6);class G6 extends D.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function K6({children:t,isPresent:e}){const n=D.useId(),r=D.useRef(null),i=D.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=D.useContext(kv);return D.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(e||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const h=document.createElement("style");return s&&(h.nonce=s),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[e]),y.jsx(G6,{isPresent:e,childRef:r,sizeRef:i,children:D.cloneElement(t,{ref:r})})}const Q6=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=Nv(Y6),l=D.useId(),c=D.useCallback(d=>{a.set(d,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),h=D.useMemo(()=>({id:l,initial:e,isPresent:n,custom:i,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return D.useMemo(()=>{a.forEach((d,p)=>a.set(p,!1))},[n]),D.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=y.jsx(K6,{isPresent:n,children:t})),y.jsx(vd.Provider,{value:h,children:t})};function Y6(){return new Map}const ju=t=>t.key||"";function eT(t){const e=[];return D.Children.forEach(t,n=>{D.isValidElement(n)&&e.push(n)}),e}const rg=({children:t,exitBeforeEnter:e,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=D.useMemo(()=>eT(t),[t]),l=a.map(ju),c=D.useRef(!0),h=D.useRef(a),d=Nv(()=>new Map),[p,g]=D.useState(a),[S,x]=D.useState(a);wR(()=>{c.current=!1,h.current=a;for(let v=0;v<S.length;v++){const T=ju(S[v]);l.includes(T)?d.delete(T):d.get(T)!==!0&&d.set(T,!1)}},[S,l.length,l.join("-")]);const P=[];if(a!==p){let v=[...a];for(let T=0;T<S.length;T++){const b=S[T],O=ju(b);l.includes(O)||(v.splice(T,0,b),P.push(b))}o==="wait"&&P.length&&(v=P),x(eT(v)),g(a);return}const{forceRender:_}=D.useContext(Pv);return y.jsx(y.Fragment,{children:S.map(v=>{const T=ju(v),b=a===S||l.includes(T),O=()=>{if(d.has(T))d.set(T,!0);else return;let j=!0;d.forEach(I=>{I||(j=!1)}),j&&(_==null||_(),x(h.current),i&&i())};return y.jsx(Q6,{isPresent:b,initial:!c.current||r?void 0:!1,custom:b?void 0:n,presenceAffectsLayout:s,mode:o,onExitComplete:b?void 0:O,children:v},T)})})},X6=M.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${t=>t.$isScrolled?"1rem 2rem":"1.5rem 2rem"};
  background: ${t=>t.$isScrolled?"rgba(255, 255, 255, 0.98)":"transparent"};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${t=>t.$isScrolled?"0 2px 10px rgba(0, 0, 0, 0.1)":"none"};

  @media (max-width: 768px) {
    padding: ${t=>t.$isScrolled?"0.75rem 1.5rem":"1rem 1.5rem"};
    background: ${t=>t.$isScrolled?"rgba(255, 255, 255, 0.98)":"rgba(255, 255, 255, 0.9)"};
    backdrop-filter: blur(10px);
  }
`,J6=M.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Z6=M(ny)`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  z-index: 1001;
`,eB=M(en.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${t=>t.theme.colors.background};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
`,tB=M.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,nB=M(en.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
`,Fu=M.a`
  color: ${t=>t.$active?t.theme.colors.primary:t.theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-family: ${t=>t.theme.fonts.heading};
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    padding: 0.75rem;
    text-align: center;
    width: 100%;
    border-radius: 8px;
    background: ${t=>t.$active?t.theme.colors.primary+"10":"transparent"};
    color: ${t=>t.$active?t.theme.colors.primary:t.theme.colors.text};

    &:active {
      transform: scale(0.98);
    }
  }

  &:hover {
    color: ${t=>t.theme.colors.primary};
  }

  @media (min-width: 769px) {
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: ${t=>t.$active?"100%":"0"};
      height: 2px;
      background: ${t=>t.theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`,ys=M(ny)`
  color: ${t=>t.$active?t.theme.colors.primary:t.theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-family: ${t=>t.theme.fonts.heading};
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    padding: 0.75rem;
    text-align: center;
    width: 100%;
    border-radius: 8px;
    background: ${t=>t.$active?t.theme.colors.primary+"10":"transparent"};
    
    &:active {
      transform: scale(0.98);
    }
  }

  &:hover {
    color: ${t=>t.theme.colors.primary};
  }

  @media (min-width: 769px) {
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: ${t=>t.$active?"100%":"0"};
      height: 2px;
      background: ${t=>t.theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`,rB=M.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${t=>(t.$isScrolled,t.theme.colors.text)};
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:active {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`,tT=M(en.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,iB=M(en.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
  margin-top: 2rem;
`,sB=M.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`,$u=M.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  background: ${t=>t.$primary?t.theme.colors.primary:"transparent"};
  color: ${t=>t.$primary?"#fff":t.theme.colors.text};
  border: 1px solid ${t=>t.$primary?"transparent":t.theme.colors.text};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`,oB={closed:{x:"-100%",opacity:0,transition:{duration:.3,ease:"easeInOut"}},open:{x:0,opacity:1,transition:{duration:.3,ease:"easeInOut"}}},wi={closed:{x:-20,opacity:0},open:t=>({x:0,opacity:1,transition:{delay:t*.1,duration:.3,ease:"easeOut"}})},aB=()=>{const[t,e]=D.useState(!1),[n,r]=D.useState(!1),{currentUser:i,isAdmin:s,logout:o}=as(),a=Ao(),l=ui();D.useEffect(()=>{const g=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]),D.useEffect(()=>{e(!1)},[l.pathname]);const c=async()=>{try{await o(),a("/")}catch(g){console.error("Fehler beim Abmelden:",g)}},h=g=>l.pathname===g,d=g=>{if(e(!1),l.pathname!=="/")a("/",{state:{scrollTo:g}});else{const S=document.getElementById(g);S&&S.scrollIntoView({behavior:"smooth"})}},p=[{label:"Home",section:"home"},{label:"Galerie",section:"gallery"},{label:"Services",section:"services"},{label:"Über uns",section:"about"},{label:"Kontakt",section:"contact"}];return y.jsx(X6,{$isScrolled:n,children:y.jsxs(J6,{children:[y.jsx(rB,{$isScrolled:n,onClick:()=>e(!t),children:y.jsx(rg,{mode:"wait",children:t?y.jsx(tT,{initial:{opacity:0,rotate:-180},animate:{opacity:1,rotate:0},exit:{opacity:0,rotate:180},transition:{duration:.3},children:y.jsx(S3,{})},"close"):y.jsx(tT,{initial:{opacity:0,rotate:180},animate:{opacity:1,rotate:0},exit:{opacity:0,rotate:-180},transition:{duration:.3},children:y.jsx(T3,{})},"menu")})}),y.jsx(Z6,{to:"/",children:"Haarambiente"}),y.jsxs(tB,{$isOpen:t,children:[p.map(g=>y.jsx(Fu,{onClick:()=>d(g.section),$active:l.pathname==="/"&&g.section==="home",children:g.label},g.section)),i?y.jsxs(y.Fragment,{children:[y.jsx(ys,{to:"/profil",$active:h("/profil"),children:"Profil"}),s&&y.jsx(ys,{to:"/admin/dashboard",$active:h("/admin/dashboard"),children:"Admin"}),y.jsx(ys,{as:"button",onClick:c,to:"",children:"Abmelden"})]}):y.jsx(Fu,{onClick:()=>d("booking"),$active:!1,children:"Termin buchen"})]}),y.jsx(rg,{children:t&&y.jsx(eB,{initial:"closed",animate:"open",exit:"closed",variants:oB,children:y.jsxs(nB,{children:[p.map((g,S)=>y.jsx(en.div,{custom:S,variants:wi,children:y.jsx(Fu,{onClick:()=>d(g.section),$active:l.pathname==="/"&&g.section==="home",children:g.label})},g.section)),i?y.jsxs(y.Fragment,{children:[y.jsx(en.div,{custom:p.length,variants:wi,children:y.jsx(ys,{to:"/profil",$active:h("/profil"),children:"Profil"})}),s&&y.jsx(en.div,{custom:p.length+1,variants:wi,children:y.jsx(ys,{to:"/admin/dashboard",$active:h("/admin/dashboard"),children:"Admin"})}),y.jsx(en.div,{custom:p.length+2,variants:wi,children:y.jsx(ys,{as:"button",onClick:c,to:"",children:"Abmelden"})})]}):y.jsxs(y.Fragment,{children:[y.jsx(en.div,{custom:p.length,variants:wi,children:y.jsx(Fu,{onClick:()=>d("booking"),$active:!1,children:"Termin buchen"})}),y.jsxs(iB,{children:[y.jsx(en.div,{custom:p.length+1,variants:wi,children:y.jsx($u,{onClick:()=>{e(!1),a("/login")},children:"Anmelden"})}),y.jsx(en.div,{custom:p.length+2,variants:wi,children:y.jsx($u,{$primary:!0,onClick:()=>{e(!1),a("/register")},children:"Registrieren"})})]})]})]})})}),!i&&y.jsxs(sB,{children:[y.jsx($u,{onClick:()=>a("/login"),children:"Anmelden"}),y.jsx($u,{$primary:!0,onClick:()=>a("/register"),children:"Registrieren"})]})]})})};function lB(t){return pr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(t)}function uB(t){return pr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(t)}function OR(t){return pr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(t)}function LR(t){return pr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(t)}function jR(t){return pr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(t)}function cB(t){return pr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(t)}const hB=M.footer`
  background: #000;
  color: #fff;
  padding: 4rem 0 2rem 0;
`,dB=M.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 2rem;
  }
`,nT=M.div`
  h3 {
    font-family: ${t=>t.theme.fonts.heading};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
`,fB=M.div`
  display: grid;
  gap: 0.5rem;
`,pB=M.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  span {
    color: rgba(255, 255, 255, 0.8);
  }
`,mB=M.div`
  display: grid;
  gap: 1rem;
`,Xf=M.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);

  svg {
    font-size: 1.2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`,gB=M.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      transform: translateY(-2px);
    }
  }
`,yB=M.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;

  a {
    color: inherit;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`,vB=()=>{const t=[{day:"Montag",hours:"Geschlossen"},{day:"Dienstag",hours:"09:00 - 18:00"},{day:"Mittwoch",hours:"09:00 - 18:00"},{day:"Donnerstag",hours:"09:00 - 18:00"},{day:"Freitag",hours:"09:00 - 18:00"},{day:"Samstag",hours:"09:00 - 16:00"},{day:"Sonntag",hours:"Geschlossen"}];return y.jsxs(hB,{children:[y.jsxs(dB,{children:[y.jsxs(nT,{children:[y.jsx("h3",{children:"Öffnungszeiten"}),y.jsx(fB,{children:t.map((e,n)=>y.jsxs(pB,{children:[y.jsx("span",{children:e.day}),y.jsx("span",{children:e.hours})]},n))})]}),y.jsxs(nT,{children:[y.jsx("h3",{children:"Kontakt"}),y.jsxs(mB,{children:[y.jsxs(Xf,{children:[y.jsx(jR,{}),y.jsx("a",{href:"tel:+4947216814680",children:"04721 681468"})]}),y.jsxs(Xf,{children:[y.jsx(OR,{}),y.jsx("a",{href:"mailto:info@haararmbiente.de",children:"info@haararmbiente.de"})]}),y.jsxs(Xf,{children:[y.jsx(LR,{}),y.jsxs("address",{children:["Neustraße 19",y.jsx("br",{}),"27472 Cuxhaven"]})]}),y.jsxs(gB,{children:[y.jsx("a",{href:"https://instagram.com/haararmbiente",target:"_blank",rel:"noopener noreferrer",children:y.jsx(uB,{})}),y.jsx("a",{href:"https://facebook.com/haararmbiente",target:"_blank",rel:"noopener noreferrer",children:y.jsx(lB,{})})]})]})]})]}),y.jsxs(yB,{children:[y.jsx("a",{href:"/impressum",children:"Impressum"}),y.jsx("a",{href:"/datenschutz",children:"Datenschutz"}),y.jsx("a",{href:"/agb",children:"AGB"}),y.jsxs("p",{children:[" ",new Date().getFullYear()," Haarambiente. Alle Rechte vorbehalten."]})]})]})},_B=M.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #E8DFE0 0%, #D4C4C5 50%, #C1B4B5 100%);
  position: relative;
  overflow: hidden;
  padding: 6rem 0 2rem;

  @media (max-width: 768px) {
    padding: 5rem 0 2rem;
    min-height: calc(100vh - 60px);
  }
`,wB=M.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
    gap: 2rem;
  }
`,EB=M.div`
  z-index: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 2rem;
    order: 2;
  }
`,TB=M.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: #000;
    display: block;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    
    &::before {
      width: 30px;
    }
  }
`,SB=M.p`
  font-size: 1rem;
  color: #000;
  font-weight: 400;
  font-family: ${t=>t.theme.fonts.body};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,IB=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: clamp(3rem, 5vw, 4.5rem);
  color: #000;
  margin-bottom: 3rem;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  span {
    color: #fff;
    display: block;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }
`,xB=M.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`,AB=M.button`
  padding: 1rem 2.5rem;
  border-radius: 100px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${t=>t.theme.fonts.body};
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
  }
`,CB=M.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  border: none;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
  font-family: ${t=>t.theme.fonts.body};

  .play-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:hover .play-icon {
    transform: scale(1.1);
    background: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    font-size: 0.9rem;

    .play-icon {
      width: 40px;
      height: 40px;
    }
  }
`,PB=M.div`
  position: relative;
  height: 600px;
  
  &::after {
    content: '';
    position: absolute;
    top: -20%;
    right: -20%;
    width: 140%;
    height: 140%;
    background: linear-gradient(135deg, #E8DFE0 0%, #D4C4C5 100%);
    border-radius: 50%;
    z-index: -1;
  }

  @media (max-width: 768px) {
    height: 400px;
    order: 1;
    margin-top: 2rem;
    
    &::after {
      top: -10%;
      right: -10%;
      width: 120%;
      height: 120%;
    }
  }
`,RB=M.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 0 100px;

  @media (max-width: 768px) {
    border-radius: 0 0 0 50px;
  }
`,kB=()=>y.jsx(_B,{id:"start",children:y.jsxs(wB,{children:[y.jsxs(EB,{children:[y.jsx(TB,{children:y.jsx(SB,{children:"Cuxhaven, Deutschland"})}),y.jsxs(IB,{children:["Alles für die Schönheit Ihrer",y.jsx("span",{children:"Haare"})]}),y.jsxs(xB,{children:[y.jsx(AB,{children:"Jetzt Buchen"}),y.jsxs(CB,{children:[y.jsx("div",{className:"play-icon",children:y.jsx(cB,{size:12})}),"Salon ansehen"]})]})]}),y.jsx(PB,{children:y.jsx(RB,{src:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Frau mit gestylten Haaren"})})]})}),bB=M.section`
  padding: 6rem 0;
  background: #fff;
`,DB=M.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,VB=M.span`
  font-size: 4rem;
  opacity: 0.5;
  font-family: ${t=>t.theme.fonts.heading};
  display: block;
  margin-bottom: 1rem;
  color: #000;
`,NB=M.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,MB=M.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`,OB=M.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`,FR=()=>{const t=[{url:"https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Elegante Hochsteckfrisur"},{url:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Moderne Haarschnitte"},{url:"https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Kreative Färbetechniken"},{url:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Natürliche Looks"},{url:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Brautfrisuren"},{url:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Styling Inspiration"}];return y.jsx(bB,{id:"galerie",children:y.jsxs(DB,{children:[y.jsx(VB,{children:"02"}),y.jsx(NB,{children:t.map((e,n)=>y.jsx(MB,{children:y.jsx(OB,{src:e.url,alt:e.alt})},n))})]})})},LB=M.section`
  padding: 8rem 0;
  background: ${t=>t.theme.colors.background};
`,jB=M.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,FB=M.h2`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${t=>t.theme.colors.primary};
  text-align: center;
  margin-bottom: 4rem;
`,$B=M.h2`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${t=>t.theme.colors.primary};
  text-align: center;
  margin-bottom: 1rem;
`,UB=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,BB=M.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`,zB=M.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: ${t=>t.theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`,WB=M.h3`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 1rem;
`,HB=M.p`
  font-size: 1.25rem;
  color: ${t=>t.theme.colors.accent};
  font-weight: 600;
  margin-bottom: 1rem;
`,qB=M.p`
  color: ${t=>t.theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,GB=M.button`
  background: ${t=>t.theme.colors.accent};
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-family: ${t=>t.theme.fonts.body};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${t=>t.theme.colors.primary};
    transform: translateY(-2px);
  }
`,KB=[{icon:"✂️",title:"Haircuts",price:"From €50",description:"Precision cuts tailored to your face shape and personal style."},{icon:"🎨",title:"Color Treatments",price:"From €80",description:"From subtle highlights to bold transformations using premium products."},{icon:"💇‍♀️",title:"Styling",price:"From €40",description:"Special occasion styling, blow-outs, and professional finishing."},{icon:"✨",title:"Extensions",price:"From €200",description:"Premium quality hair extensions for length and volume."}],$R=()=>y.jsx(LB,{id:"leistungen",children:y.jsxs(jB,{children:[y.jsx($B,{children:"03"}),y.jsx(FB,{children:"Our Services"}),y.jsx(UB,{children:KB.map((t,e)=>y.jsxs(BB,{children:[y.jsx(zB,{children:t.icon}),y.jsx(WB,{children:t.title}),y.jsx(HB,{children:t.price}),y.jsx(qB,{children:t.description}),y.jsx(GB,{children:"Book Now"})]},e))})]})}),QB=M.section`
  padding: 6rem 0;
  background: #000;
  color: #fff;
`,YB=M.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,XB=M.span`
  font-size: 4rem;
  opacity: 0.5;
  font-family: ${t=>t.theme.fonts.heading};
  display: block;
  margin-bottom: 1rem;
`,JB=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`,ZB=M.div`
  text-align: center;
`,ez=M.div`
  width: 100%;
  height: 400px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,tz=M.h3`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
`,nz=M.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 1rem;
`,rz=M.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
`,UR=()=>{const t=[{name:"Anja Behrens",role:"Master Stylistin",image:"https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",bio:"Mit über 10 Jahren Erfahrung kreiert Sarah einzigartige Looks, die Ihre natürliche Schönheit unterstreichen."},{name:"Lina Vincenza Fonto",role:"Coloristin",image:"https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",bio:"Spezialisiert auf Haarfarben und Balayage, verwandelt Lisa Ihre Haarfarbe in ein strahlendes Kunstwerk."},{name:"Marie Weber",role:"Style Expertin",image:"https://images.unsplash.com/photo-1605980776548-2a0c3e9b1e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",bio:"Marie ist bekannt für ihre kreativen Hochsteckfrisuren und perfekten Styling-Techniken."}];return y.jsx(QB,{id:"team",children:y.jsxs(YB,{children:[y.jsx(XB,{children:"04"}),y.jsx(JB,{children:t.map((e,n)=>y.jsxs(ZB,{children:[y.jsx(ez,{children:y.jsx("img",{src:e.image,alt:e.name})}),y.jsx(tz,{children:e.name}),y.jsx(nz,{children:e.role}),y.jsx(rz,{children:e.bio})]},n))})]})})},iz=ux`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,sz=ux`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,oz=M.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;
  animation: ${sz} 0.3s ease;
`,az=M.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${t=>t.theme.colors.background};
  border-top: 3px solid ${t=>t.theme.colors.primary};
  border-radius: 50%;
  animation: ${iz} 1s linear infinite;
`,lz=M.p`
  position: absolute;
  margin-top: 80px;
  font-family: ${t=>t.theme.fonts.heading};
  color: ${t=>t.theme.colors.primary};
  font-size: 1.2rem;
`,uz=({text:t="Laden..."})=>y.jsxs(oz,{children:[y.jsx(az,{}),y.jsx(lz,{children:t})]}),cz=M.section`
  padding: 6rem 0;
  background: #fff;
`,hz=M.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
`,dz=M.div`
  h2 {
    font-family: ${t=>t.theme.fonts.heading};
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,Jf=M.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: ${t=>t.theme.colors.accent};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${t=>t.theme.colors.accent};
    }
  }
`,fz=M.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,pz=M.form`
  display: grid;
  gap: 1.5rem;
`,Zf=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ep=M.label`
  font-size: 0.9rem;
  color: #666;
`,rT=M.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(212, 196, 197, 0.2);
  }
`,mz=M.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(212, 196, 197, 0.2);
  }
`,gz=M.button`
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,BR=()=>{const[t,e]=D.useState(!1),[n,r]=D.useState({name:"",email:"",message:""}),i=async o=>{o.preventDefault(),e(!0),await new Promise(a=>setTimeout(a,1500)),console.log("Form submitted:",n),e(!1),r({name:"",email:"",message:""}),alert("Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.")},s=o=>{const{name:a,value:l}=o.target;r(c=>({...c,[a]:l}))};return y.jsxs(cz,{id:"kontakt",children:[t&&y.jsx(uz,{text:"Nachricht wird gesendet..."}),y.jsxs(hz,{children:[y.jsxs(dz,{children:[y.jsx("h2",{children:"Kontaktieren Sie uns"}),y.jsxs(Jf,{children:[y.jsx(jR,{}),y.jsx("a",{href:"tel:+4947216814680",children:"04721 681468"})]}),y.jsxs(Jf,{children:[y.jsx(OR,{}),y.jsx("a",{href:"mailto:info@haararmbiente.de",children:"info@haararmbiente.de"})]}),y.jsxs(Jf,{children:[y.jsx(LR,{}),y.jsxs("address",{children:["Neustraße 19",y.jsx("br",{}),"27472 Cuxhaven"]})]}),y.jsx(fz,{children:y.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.7!2d8.69444!3d53.86778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b403b8a5b8b8a7%3A0x0!2sNeustra%C3%9Fe%2019%2C%2027472%20Cuxhaven!5e0!3m2!1sde!2sde!4v1641466317693!5m2!1sde!2sde",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Haararmbiente Standort"})})]}),y.jsxs(pz,{onSubmit:i,children:[y.jsxs(Zf,{children:[y.jsx(ep,{htmlFor:"name",children:"Name"}),y.jsx(rT,{type:"text",id:"name",name:"name",value:n.name,onChange:s,required:!0})]}),y.jsxs(Zf,{children:[y.jsx(ep,{htmlFor:"email",children:"E-Mail"}),y.jsx(rT,{type:"email",id:"email",name:"email",value:n.email,onChange:s,required:!0})]}),y.jsxs(Zf,{children:[y.jsx(ep,{htmlFor:"message",children:"Nachricht"}),y.jsx(mz,{id:"message",name:"message",value:n.message,onChange:s,required:!0})]}),y.jsx(gz,{type:"submit",children:"Nachricht senden"})]})]})]})},yz=["Damen-Haarschnitt","Herren-Haarschnitt","Färben","Strähnen","Styling","Hochsteckfrisur","Waschen & Föhnen","Bartpflege"],vz=M.section`
  padding: 5rem 1rem;
  background: ${t=>t.theme.colors.background};
`,_z=M.div`
  max-width: 800px;
  margin: 0 auto;
`,wz=M.h2`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${t=>t.theme.colors.primary};
`,Ez=M.form`
  display: grid;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Ei=M.div`
  display: grid;
  gap: 0.5rem;
`,Ti=M.label`
  font-weight: 500;
  color: ${t=>t.theme.colors.text};
`,vs=M.input`
  padding: 0.75rem;
  border: 1px solid ${t=>t.theme.colors.accent};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
  }
`,Tz=M.select`
  padding: 0.75rem;
  border: 1px solid ${t=>t.theme.colors.accent};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  background: white;

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
  }
`,Sz=M.button`
  background: ${t=>t.theme.colors.primary};
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: ${t=>t.theme.colors.accent};
    cursor: not-allowed;
    transform: none;
  }
`,Iz=M.div`
  background: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
`,xz=M.div`
  background: #f44336;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
`,zR=()=>{const{currentUser:t}=as(),[e,n]=D.useState({name:"",email:(t==null?void 0:t.email)||"",phone:"",service:"",date:"",time:"",message:""}),[r,i]=D.useState("idle"),[s,o]=D.useState(null);D.useEffect(()=>{t!=null&&t.email&&n(h=>({...h,email:t.email}))},[t]);const a=h=>{const{name:d,value:p}=h.target;n(g=>({...g,[d]:p})),o(null)},l=(h,d)=>{const[p,g,S]=h.split("-").map(Number),[x,P]=d.split(":").map(Number),_=new Date(p,g-1,S,x,P);if(_<new Date)return o("Bitte wählen Sie ein Datum in der Zukunft"),!1;if(x<9||x>=18)return o("Bitte wählen Sie eine Uhrzeit zwischen 9:00 und 18:00 Uhr"),!1;const T=_.getDay();return T===0||T===1?(o("Wir haben Sonntags und Montags geschlossen"),!1):!0},c=async h=>{var d;h.preventDefault(),i("loading"),o(null);try{if(!l(e.date,e.time)){i("idle");return}const[p,g,S]=e.date.split("-").map(Number),[x,P]=e.time.split(":").map(Number),_=new Date(p,g-1,S,x,P);if(console.log("Created booking date:",_),isNaN(_.getTime())){o("Ungültiges Datum oder Uhrzeit"),i("error");return}const v=Se.fromDate(_);console.log("Created timestamp:",v);const T={name:e.name.trim(),email:e.email.trim(),customerEmail:(t==null?void 0:t.email)||e.email.trim(),phone:e.phone.trim(),service:e.service,date:v,message:((d=e.message)==null?void 0:d.trim())||"",createdAt:Se.now(),status:"pending"};console.log("Saving booking data:",T),await p3(Gy(Ji,"bookings"),T),console.log("Booking saved successfully"),i("success"),n({name:"",email:(t==null?void 0:t.email)||"",phone:"",service:"",date:"",time:"",message:""})}catch(p){console.error("Error adding booking:",p),o("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."),i("error")}};return y.jsx(vz,{id:"booking",children:y.jsxs(_z,{children:[y.jsx(wz,{children:"Termin Buchen"}),y.jsxs(Ez,{onSubmit:c,children:[y.jsxs(Ei,{children:[y.jsx(Ti,{htmlFor:"name",children:"Name"}),y.jsx(vs,{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0})]}),y.jsxs(Ei,{children:[y.jsx(Ti,{htmlFor:"email",children:"E-Mail"}),y.jsx(vs,{type:"email",id:"email",name:"email",value:e.email,onChange:a,required:!0,readOnly:!!t})]}),y.jsxs(Ei,{children:[y.jsx(Ti,{htmlFor:"phone",children:"Telefon"}),y.jsx(vs,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:a,required:!0,placeholder:"z.B. 0123 456789"})]}),y.jsxs(Ei,{children:[y.jsx(Ti,{htmlFor:"service",children:"Service"}),y.jsxs(Tz,{id:"service",name:"service",value:e.service,onChange:a,required:!0,children:[y.jsx("option",{value:"",children:"Bitte wählen Sie einen Service"}),yz.map(h=>y.jsx("option",{value:h,children:h},h))]})]}),y.jsxs(Ei,{children:[y.jsx(Ti,{htmlFor:"date",children:"Datum"}),y.jsx(vs,{type:"date",id:"date",name:"date",value:e.date,onChange:a,required:!0,min:new Date().toISOString().split("T")[0]})]}),y.jsxs(Ei,{children:[y.jsx(Ti,{htmlFor:"time",children:"Uhrzeit"}),y.jsx(vs,{type:"time",id:"time",name:"time",value:e.time,onChange:a,required:!0,min:"09:00",max:"18:00",step:"1800"})]}),y.jsxs(Ei,{children:[y.jsx(Ti,{htmlFor:"message",children:"Nachricht (optional)"}),y.jsx(vs,{as:"textarea",id:"message",name:"message",value:e.message,onChange:a,rows:4,placeholder:"Zusätzliche Informationen oder Wünsche"})]}),s&&y.jsx(xz,{children:s}),y.jsx(Sz,{type:"submit",disabled:r==="loading",children:r==="loading"?"Wird gesendet...":"Termin buchen"}),r==="success"&&y.jsx(Iz,{children:"Ihre Buchung wurde erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden."})]})]})})},Az=()=>y.jsxs(y.Fragment,{children:[y.jsx(kB,{}),y.jsx("section",{id:"gallery",children:y.jsx(FR,{})}),y.jsx("section",{id:"services",children:y.jsx($R,{})}),y.jsx("section",{id:"about",children:y.jsx(UR,{})}),y.jsx("section",{id:"booking",children:y.jsx(zR,{})}),y.jsx("section",{id:"contact",children:y.jsx(BR,{})})]}),Cz=M.div`
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background: ${t=>t.theme.colors.background};
`,Pz=M.div`
  max-width: 1200px;
  margin: 0 auto;
`,Rz=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`,kz=()=>y.jsx(Cz,{children:y.jsxs(Pz,{children:[y.jsx(Rz,{children:"Unsere Galerie"}),y.jsx(FR,{})]})}),bz=M.div`
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background: ${t=>t.theme.colors.background};
`,Dz=M.div`
  max-width: 1200px;
  margin: 0 auto;
`,Vz=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`,Nz=()=>y.jsx(bz,{children:y.jsxs(Dz,{children:[y.jsx(Vz,{children:"Unsere Services"}),y.jsx($R,{})]})}),Mz=M.div`
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background: ${t=>t.theme.colors.background};
`,Oz=M.div`
  max-width: 1200px;
  margin: 0 auto;
`,Lz=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`,jz=()=>y.jsx(Mz,{children:y.jsxs(Oz,{children:[y.jsx(Lz,{children:"Über uns"}),y.jsx(UR,{})]})}),Fz=M.div`
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background: ${t=>t.theme.colors.background};
`,$z=M.div`
  max-width: 1200px;
  margin: 0 auto;
`,Uz=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`,Bz=()=>y.jsx(Fz,{children:y.jsxs($z,{children:[y.jsx(Uz,{children:"Kontakt"}),y.jsx(BR,{})]})}),zz=M.div`
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background: ${t=>t.theme.colors.background};
`,Wz=M.div`
  max-width: 800px;
  margin: 0 auto;
`,Hz=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`,qz=()=>y.jsx(zz,{children:y.jsxs(Wz,{children:[y.jsx(Hz,{children:"Termin buchen"}),y.jsx(zR,{})]})}),Gz=M.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${t=>t.theme.colors.background};
`,Kz=M.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,Qz=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${t=>t.theme.colors.primary};
`,Yz=M.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,iT=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,sT=M.label`
  font-weight: 500;
  color: ${t=>t.theme.colors.text};
`,oT=M.input`
  padding: 0.75rem;
  border: 1px solid ${t=>t.theme.colors.accent};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
  }
`,Xz=M.button`
  background: ${t=>t.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: ${t=>t.theme.colors.accent};
    cursor: not-allowed;
    transform: none;
  }
`,Jz=M.div`
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
`,Zz=M(ny)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: ${t=>t.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,e8=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(!1),{login:l}=as(),c=Ao(),h=async d=>{d.preventDefault(),s(""),a(!0);try{await l(t,n),c("/profile")}catch(p){s(p.code==="auth/user-not-found"||p.code==="auth/wrong-password"?"Ungültige E-Mail oder Passwort":"Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.")}finally{a(!1)}};return y.jsx(Gz,{children:y.jsxs(Kz,{children:[y.jsx(Qz,{children:"Anmelden"}),y.jsxs(Yz,{onSubmit:h,children:[y.jsxs(iT,{children:[y.jsx(sT,{htmlFor:"email",children:"E-Mail"}),y.jsx(oT,{type:"email",id:"email",value:t,onChange:d=>e(d.target.value),required:!0})]}),y.jsxs(iT,{children:[y.jsx(sT,{htmlFor:"password",children:"Passwort"}),y.jsx(oT,{type:"password",id:"password",value:n,onChange:d=>r(d.target.value),required:!0})]}),y.jsx(Xz,{type:"submit",disabled:o,children:o?"Wird angemeldet...":"Anmelden"}),i&&y.jsx(Jz,{children:i})]}),y.jsx(Zz,{to:"/register",children:"Noch kein Konto? Jetzt registrieren"})]})})},t8=M.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${t=>t.theme.colors.background};
`,n8=M.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,r8=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${t=>t.theme.colors.primary};
`,i8=M.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,tp=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,np=M.label`
  font-weight: 500;
  color: ${t=>t.theme.colors.text};
`,rp=M.input`
  padding: 0.75rem;
  border: 1px solid ${t=>t.theme.colors.accent};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
  }
`,s8=M.button`
  background: ${t=>t.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: ${t=>t.theme.colors.accent};
    cursor: not-allowed;
    transform: none;
  }
`,o8=M.div`
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
`,a8=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(""),[l,c]=D.useState(!1),{register:h}=as(),d=Ao(),p=async g=>{if(g.preventDefault(),a(""),n!==i)return a("Passwörter stimmen nicht überein");c(!0);try{await h(t,n),d("/profile")}catch(S){a(S.code==="auth/email-already-in-use"?"Diese E-Mail-Adresse wird bereits verwendet":"Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.")}finally{c(!1)}};return y.jsx(t8,{children:y.jsxs(n8,{children:[y.jsx(r8,{children:"Registrieren"}),y.jsxs(i8,{onSubmit:p,children:[y.jsxs(tp,{children:[y.jsx(np,{htmlFor:"email",children:"E-Mail"}),y.jsx(rp,{type:"email",id:"email",value:t,onChange:g=>e(g.target.value),required:!0})]}),y.jsxs(tp,{children:[y.jsx(np,{htmlFor:"password",children:"Passwort"}),y.jsx(rp,{type:"password",id:"password",value:n,onChange:g=>r(g.target.value),required:!0,minLength:6})]}),y.jsxs(tp,{children:[y.jsx(np,{htmlFor:"confirmPassword",children:"Passwort bestätigen"}),y.jsx(rp,{type:"password",id:"confirmPassword",value:i,onChange:g=>s(g.target.value),required:!0,minLength:6})]}),y.jsx(s8,{type:"submit",disabled:l,children:l?"Wird registriert...":"Registrieren"}),o&&y.jsx(o8,{children:o})]})]})})},aT=M.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: ${t=>t.theme.colors.background};
`,lT=M.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,l8=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 2rem;
`,uT=M.section`
  margin-bottom: 2rem;
`,u8=M.h2`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.text};
  margin-bottom: 1rem;
`,c8=M.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,ip=M.th`
  text-align: left;
  padding: 1rem;
  background: ${t=>t.theme.colors.background};
  border-bottom: 2px solid ${t=>t.theme.colors.accent};
`,sp=M.td`
  padding: 1rem;
  border-bottom: 1px solid ${t=>t.theme.colors.accent};
`,h8=M.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${t=>{switch(t.$status){case"pending":return"#FFF3CD";case"confirmed":return"#D4EDDA";case"cancelled":return"#F8D7DA";default:return"#E2E8F0"}}};
  color: ${t=>{switch(t.$status){case"pending":return"#856404";case"confirmed":return"#155724";case"cancelled":return"#721C24";default:return"#2D3748"}}};
`,op=M.div`
  text-align: center;
  padding: 2rem;
  color: ${t=>t.theme.colors.text};
`,d8=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${t=>t.theme.colors.background};
  border-radius: 8px;
`,cT=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,hT=M.span`
  font-weight: 500;
  color: ${t=>t.theme.colors.text};
`,dT=M.span`
  color: ${t=>t.theme.colors.primary};
`,f8=()=>{const[t,e]=D.useState([]),[n,r]=D.useState(!0),{currentUser:i}=as();D.useEffect(()=>{(async()=>{if(i)try{const a=Gy(Ji,"bookings"),l=JC(a,l3("customerEmail","==",i.email)),c=await iP(l),h=[];c.forEach(d=>{h.push({id:d.id,...d.data()})}),e(h.sort((d,p)=>p.date.seconds-d.date.seconds))}catch(a){console.error("Error fetching bookings:",a)}finally{r(!1)}})()},[i]);const s=o=>new Date(o.seconds*1e3).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});return i?y.jsx(aT,{children:y.jsxs(lT,{children:[y.jsx(l8,{children:"Mein Profil"}),y.jsx(uT,{children:y.jsxs(d8,{children:[y.jsxs(cT,{children:[y.jsx(hT,{children:"E-Mail"}),y.jsx(dT,{children:i.email})]}),y.jsxs(cT,{children:[y.jsx(hT,{children:"Mitglied seit"}),y.jsx(dT,{children:new Date(i.metadata.creationTime).toLocaleDateString("de-DE")})]})]})}),y.jsxs(uT,{children:[y.jsx(u8,{children:"Meine Buchungen"}),n?y.jsx(op,{children:"Laden..."}):t.length>0?y.jsxs(c8,{children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx(ip,{children:"Datum"}),y.jsx(ip,{children:"Service"}),y.jsx(ip,{children:"Status"})]})}),y.jsx("tbody",{children:t.map(o=>y.jsxs("tr",{children:[y.jsx(sp,{children:s(o.date)}),y.jsx(sp,{children:o.service}),y.jsx(sp,{children:y.jsx(h8,{$status:o.status||"pending",children:o.status==="confirmed"?"Bestätigt":o.status==="cancelled"?"Storniert":"Ausstehend"})})]},o.id))})]}):y.jsx(op,{children:"Sie haben noch keine Buchungen."})]})]})}):y.jsx(aT,{children:y.jsx(lT,{children:y.jsx(op,{children:"Bitte melden Sie sich an, um Ihr Profil zu sehen."})})})},p8=M.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${t=>t.theme.colors.background};
`,m8=M.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,g8=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${t=>t.theme.colors.primary};
`,y8=M.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,fT=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,pT=M.label`
  font-weight: 500;
  color: ${t=>t.theme.colors.text};
`,mT=M.input`
  padding: 0.75rem;
  border: 1px solid ${t=>t.theme.colors.accent};
  border-radius: 4px;
  font-size: 16px; 
  width: 100%;
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
  }
`,v8=M.button`
  background: ${t=>t.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: ${t=>t.theme.colors.accent};
    cursor: not-allowed;
    transform: none;
  }
`,_8=M.div`
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
`,w8=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(null),[o,a]=D.useState(!1),l=Ao(),c=ui();D.useEffect(()=>{c.pathname==="/admin/dashboard"&&l("/admin/dashboard")},[l,c]);const h=async d=>{d.preventDefault(),a(!0),s(null);try{const g=(await Yx(Ls,t,n)).user;if(g.email==="anja@haarambiente.de"){const S=Tl(Ji,"admins",g.uid);(await nP(S)).exists()||await $m(S,{email:g.email,createdAt:new Date}),l("/admin/dashboard")}else s("Sie haben keine Berechtigung für den Admin-Bereich."),await Ls.signOut()}catch(p){console.error("Login error:",p),s("Ungültige Anmeldedaten. Bitte überprüfen Sie Ihre E-Mail und Ihr Passwort.")}finally{a(!1)}};return y.jsx(p8,{children:y.jsxs(m8,{children:[y.jsx(g8,{children:"Admin Login"}),y.jsxs(y8,{onSubmit:h,children:[y.jsxs(fT,{children:[y.jsx(pT,{htmlFor:"email",children:"E-Mail"}),y.jsx(mT,{type:"email",id:"email",value:t,onChange:d=>e(d.target.value),required:!0,autoComplete:"email"})]}),y.jsxs(fT,{children:[y.jsx(pT,{htmlFor:"password",children:"Passwort"}),y.jsx(mT,{type:"password",id:"password",value:n,onChange:d=>r(d.target.value),required:!0,autoComplete:"current-password"})]}),y.jsx(v8,{type:"submit",disabled:o,children:o?"Wird geladen...":"Anmelden"}),i&&y.jsx(_8,{children:i})]})]})})},ap=M.div`
  min-height: 100vh;
  padding: 6rem 1rem 1rem;
  background: ${t=>t.theme.colors.background};
`,lp=M.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,E8=M.h1`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 1.75rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`,T8=M.div`
  background: white;
  border: 1px solid ${t=>t.theme.colors.accent};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    display: none;
  }
`,S8=M.div`
  margin-bottom: 1rem;
`,Uu=M.span`
  font-weight: bold;
  color: ${t=>t.theme.colors.text};
  display: block;
  margin-bottom: 0.25rem;
`,Bu=M.span`
  color: ${t=>t.theme.colors.text};
  display: block;
  margin-bottom: 0.75rem;
`,I8=M.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  display: none;

  @media (min-width: 768px) {
    display: table;
  }
`,aa=M.th`
  text-align: left;
  padding: 1rem;
  background: ${t=>t.theme.colors.background};
  border-bottom: 2px solid ${t=>t.theme.colors.accent};
`,la=M.td`
  padding: 1rem;
  border-bottom: 1px solid ${t=>t.theme.colors.accent};
`,gT=M.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${t=>{switch(t.$status){case"pending":return"#FFF3CD";case"confirmed":return"#D4EDDA";case"cancelled":return"#F8D7DA";default:return"#E2E8F0"}}};
  color: ${t=>{switch(t.$status){case"pending":return"#856404";case"confirmed":return"#155724";case"cancelled":return"#721C24";default:return"#2D3748"}}};
`,zu=M.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
  background: ${t=>t.$variant==="confirm"?"#28A745":"#DC3545"};
  color: white;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,x8=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Wu=M.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,up=M.div`
  text-align: center;
  padding: 2rem;
  color: ${t=>t.theme.colors.text};
`,A8=()=>{const{currentUser:t}=as(),[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(null),[a,l]=D.useState(null);D.useEffect(()=>{t&&c()},[t]);const c=async()=>{try{i(!0);const p=Gy(Ji,"bookings"),g=JC(p,u3("date","desc")),S=await iP(g),x=[];S.forEach(P=>{const _=P.data();let v;if(typeof _.date=="string"){const[T,b,O]=_.date.split("-").map(Number),j=new Date(T,b-1,O);v=Se.fromDate(j)}else _.date&&typeof _.date=="object"&&"seconds"in _.date?v=new Se(_.date.seconds,_.date.nanoseconds):(v=Se.now(),console.error("Ungültiges Datumsformat für Buchung:",P.id));x.push({id:P.id,..._,date:v})}),n(x),o(null)}catch(p){console.error("Error fetching bookings:",p),o("Fehler beim Laden der Buchungen")}finally{i(!1)}},h=async(p,g)=>{if(!t){o("Sie müssen angemeldet sein, um diese Aktion durchzuführen");return}try{l(p);const S=Tl(Ji,"bookings",p);await f3(S,{status:g,updatedAt:Se.now(),updatedBy:t.email}),n(x=>x.map(P=>P.id===p?{...P,status:g}:P)),o(null)}catch(S){console.error("Error updating booking:",S),o("Fehler beim Aktualisieren der Buchung")}finally{l(null)}},d=p=>{const g=p.toDate();return new Intl.DateTimeFormat("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(g)};return r?y.jsx(ap,{children:y.jsx(lp,{children:y.jsx(up,{children:"Lädt..."})})}):s?y.jsx(ap,{children:y.jsx(lp,{children:y.jsx(up,{children:s})})}):y.jsx(ap,{children:y.jsxs(lp,{children:[y.jsx(E8,{children:"Admin Dashboard"}),e.map(p=>y.jsxs(T8,{children:[y.jsxs(S8,{children:[y.jsx(Uu,{children:"Datum"}),y.jsx(Bu,{children:d(p.date)}),y.jsx(Uu,{children:"Kunde"}),y.jsx(Bu,{children:p.customerName}),y.jsx(Uu,{children:"Service"}),y.jsx(Bu,{children:p.service}),y.jsx(Uu,{children:"Status"}),y.jsx(Bu,{children:y.jsxs(gT,{$status:p.status,children:[p.status==="pending"&&"Ausstehend",p.status==="confirmed"&&"Bestätigt",p.status==="cancelled"&&"Storniert"]})})]}),p.status==="pending"&&y.jsxs(x8,{children:[y.jsxs(zu,{$variant:"confirm",onClick:()=>h(p.id,"confirmed"),disabled:a===p.id,children:[a===p.id&&y.jsx(Wu,{}),"Bestätigen"]}),y.jsxs(zu,{$variant:"cancel",onClick:()=>h(p.id,"cancelled"),disabled:a===p.id,children:[a===p.id&&y.jsx(Wu,{}),"Ablehnen"]})]})]},p.id)),y.jsxs(I8,{children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx(aa,{children:"Datum"}),y.jsx(aa,{children:"Kunde"}),y.jsx(aa,{children:"Service"}),y.jsx(aa,{children:"Status"}),y.jsx(aa,{children:"Aktionen"})]})}),y.jsx("tbody",{children:e.map(p=>y.jsxs("tr",{children:[y.jsx(la,{children:d(p.date)}),y.jsx(la,{children:p.customerName}),y.jsx(la,{children:p.service}),y.jsx(la,{children:y.jsxs(gT,{$status:p.status,children:[p.status==="pending"&&"Ausstehend",p.status==="confirmed"&&"Bestätigt",p.status==="cancelled"&&"Storniert"]})}),y.jsx(la,{children:p.status==="pending"&&y.jsxs(y.Fragment,{children:[y.jsxs(zu,{$variant:"confirm",onClick:()=>h(p.id,"confirmed"),disabled:a===p.id,children:[a===p.id&&y.jsx(Wu,{}),"Bestätigen"]}),y.jsxs(zu,{$variant:"cancel",onClick:()=>h(p.id,"cancelled"),disabled:a===p.id,children:[a===p.id&&y.jsx(Wu,{}),"Ablehnen"]})]})})]},p.id))})]}),e.length===0&&y.jsx(up,{children:"Keine Buchungen vorhanden"})]})})},C8=M.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${t=>t.theme.colors.background};
`,yT=({children:t,requireAdmin:e=!0})=>{const{currentUser:n,isAdmin:r,loading:i}=as(),s=ui();return i?y.jsx(C8,{children:y.jsx("div",{children:"Laden..."})}):n?e&&!r?y.jsx(im,{to:"/",replace:!0}):y.jsx(y.Fragment,{children:t}):y.jsx(im,{to:"/admin/login",state:{from:s},replace:!0})},P8=M.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transform: ${t=>t.$isVisible?"translateY(0)":"translateY(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`,R8=M.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,k8=M.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.text};
  line-height: 1.5;
`,b8=M.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`,vT=M.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background: ${t=>t.$isPrimary?t.theme.colors.primary:"transparent"};
  color: ${t=>t.$isPrimary?"white":t.theme.colors.primary};
  border: 1px solid ${t=>t.theme.colors.primary};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1rem;
  }
`,D8=()=>{const[t,e]=D.useState(!1);D.useEffect(()=>{localStorage.getItem("cookiesAccepted")===null&&e(!0)},[]);const n=()=>{localStorage.setItem("cookiesAccepted","true"),e(!1),RA(pd)},r=()=>{localStorage.setItem("cookiesAccepted","false"),e(!1)};return t?y.jsx(P8,{$isVisible:t,children:y.jsxs(R8,{children:[y.jsx(k8,{children:"Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. Sie können Ihre Cookie-Einstellungen jederzeit ändern."}),y.jsxs(b8,{children:[y.jsx(vT,{onClick:r,children:"Ablehnen"}),y.jsx(vT,{$isPrimary:!0,onClick:n,children:"Akzeptieren"})]})]})}):null},V8=M(en.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${t=>t.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }
`,N8=()=>{const[t,e]=D.useState(!1);D.useEffect(()=>{const r=()=>{window.pageYOffset>300?e(!0):e(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return y.jsx(rg,{children:t&&y.jsx(V8,{onClick:n,initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},whileHover:{scale:1.1},whileTap:{scale:.9},children:y.jsx(E3,{})})})},M8=()=>y.jsxs(WV,{theme:v3,children:[y.jsx(y3,{}),y.jsx(g3,{children:y.jsxs("div",{className:"app",children:[y.jsx(aB,{}),y.jsx("main",{children:y.jsxs(OD,{children:[y.jsx(Ut,{path:"/",element:y.jsx(Az,{})}),y.jsx(Ut,{path:"/galerie",element:y.jsx(kz,{})}),y.jsx(Ut,{path:"/services",element:y.jsx(Nz,{})}),y.jsx(Ut,{path:"/uber-uns",element:y.jsx(jz,{})}),y.jsx(Ut,{path:"/kontakt",element:y.jsx(Bz,{})}),y.jsx(Ut,{path:"/termin",element:y.jsx(qz,{})}),y.jsx(Ut,{path:"/login",element:y.jsx(e8,{})}),y.jsx(Ut,{path:"/register",element:y.jsx(a8,{})}),y.jsx(Ut,{path:"/profil",element:y.jsx(yT,{requireAdmin:!1,children:y.jsx(f8,{})})}),y.jsx(Ut,{path:"/admin/login",element:y.jsx(w8,{})}),y.jsx(Ut,{path:"/admin/dashboard",element:y.jsx(yT,{requireAdmin:!0,children:y.jsx(A8,{})})}),y.jsx(Ut,{path:"*",element:y.jsx(im,{to:"/",replace:!0})})]})}),y.jsx(vB,{}),y.jsx(D8,{}),y.jsx(N8,{})]})})]});cp.createRoot(document.getElementById("root")).render(y.jsx(Be.StrictMode,{children:y.jsx(zD,{children:y.jsx(M8,{})})}));
//# sourceMappingURL=index-e6eecfc2.js.map
