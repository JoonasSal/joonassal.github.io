import{$ as A,a0 as R,J as k,A as L,a1 as j,a2 as q,a3 as U,x,w as b,h as z,a4 as G,i as c,a5 as H,P as M,l as g,s as N,o as u,v as E,a6 as J,a7 as Z,j as V,a8 as P,a9 as O,z as K,aa as Q,ab as X,D as ee,y as re,ac as te,n as ae,Z as ne,_ as ie,c as se}from"./runtime.A6N7VKQc.js";const oe=["touchstart","touchmove"];function ue(e){return oe.includes(e)}function de(e){var r=k,t=L;A(null),R(null);try{return e()}finally{A(r),R(t)}}const fe=new Set,$=new Set;function le(e,r,t,i){function n(a){if(i.capture||T.call(r,a),!a.cancelBubble)return de(()=>t.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?q(()=>{r.addEventListener(e,n,i)}):r.addEventListener(e,n,i),n}function pe(e,r,t,i,n){var a={capture:i,passive:n},s=le(e,r,t,a);(r===document.body||r===window||r===document)&&j(()=>{r.removeEventListener(e,s,a)})}function T(e){var I;var r=this,t=r.ownerDocument,i=e.type,n=((I=e.composedPath)==null?void 0:I.call(e))||[],a=n[0]||e.target,s=0,_=e.__root;if(_){var f=n.indexOf(_);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var m=n.indexOf(r);if(m===-1)return;f<=m&&(s=f)}if(a=n[s]||e.target,a!==r){U(e,"currentTarget",{configurable:!0,get(){return a||t}});var D=k,v=L;A(null),R(null);try{for(var o,d=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var y=a["__"+i];if(y!==void 0&&!a.disabled)if(x(y)){var[B,...Y]=y;B.apply(a,[e,...Y])}else y.call(a,e)}catch(S){o?d.push(S):o=S}if(e.cancelBubble||p===r||p===null)break;a=p}if(o){for(let S of d)queueMicrotask(()=>{throw S});throw o}}finally{e.__root=r,delete e.currentTarget,A(D),R(v)}}}let l;function ce(){l=void 0}function ye(e){let r=null,t=c;var i;if(c){for(r=u,l===void 0&&(l=E(document.head));l!==null&&(l.nodeType!==8||l.data!==H);)l=M(l);l===null?g(!1):l=N(M(l))}c||(i=document.head.appendChild(b()));try{z(()=>e(i),G)}finally{t&&(g(!0),l=u,N(r))}}function W(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function h(e,r){var t=L;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function me(e,r){var t=(r&J)!==0,i=(r&Z)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return h(u,null),u;n===void 0&&(n=W(a?e:"<!>"+e),t||(n=E(n)));var s=i?document.importNode(n,!0):n.cloneNode(!0);if(t){var _=E(s),f=s.lastChild;h(_,f)}else h(s,s);return s}}function we(e,r,t="svg"){var i=!e.startsWith("<!>"),n=`<${t}>${i?e:"<!>"+e}</${t}>`,a;return()=>{if(c)return h(u,null),u;if(!a){var s=W(n),_=E(s);a=E(_)}var f=a.cloneNode(!0);return h(f,f),f}}function ge(e=""){if(!c){var r=b(e+"");return h(r,r),r}var t=u;return t.nodeType!==3&&(t.before(t=b()),N(t)),h(t,t),t}function Ee(){if(c)return h(u,null),u;var e=document.createDocumentFragment(),r=document.createComment(""),t=b();return e.append(r,t),h(r,t),e}function Te(e,r){if(c){L.nodes_end=u,V();return}e!==null&&e.before(r)}function be(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function _e(e,r){return F(e,r)}function Ne(e,r){P(),r.intro=r.intro??!1;const t=r.target,i=c,n=u;try{for(var a=E(t);a&&(a.nodeType!==8||a.data!==H);)a=M(a);if(!a)throw O;g(!0),N(a),V();const s=F(e,{...r,anchor:a});if(u===null||u.nodeType!==8||u.data!==K)throw Q(),O;return g(!1),s}catch(s){if(s===O)return r.recover===!1&&X(),P(),ee(t),g(!1),_e(e,r);throw s}finally{g(i),N(n),ce()}}const w=new Map;function F(e,{target:r,anchor:t,props:i={},events:n,context:a,intro:s=!0}){P();var _=new Set,f=v=>{for(var o=0;o<v.length;o++){var d=v[o];if(!_.has(d)){_.add(d);var p=ue(d);r.addEventListener(d,T,{passive:p});var y=w.get(d);y===void 0?(document.addEventListener(d,T,{passive:p}),w.set(d,1)):w.set(d,y+1)}}};f(re(fe)),$.add(f);var m=void 0,D=te(()=>{var v=t??r.appendChild(b());return ae(()=>{if(a){ne({});var o=se;o.c=a}n&&(i.$$events=n),c&&h(v,null),m=e(v,i)||{},c&&(L.nodes_end=u),a&&ie()}),()=>{var p;for(var o of _){r.removeEventListener(o,T);var d=w.get(o);--d===0?(document.removeEventListener(o,T),w.delete(o)):w.set(o,d)}$.delete(f),v!==t&&((p=v.parentNode)==null||p.removeChild(v))}});return C.set(m,D),m}let C=new WeakMap;function Le(e,r){const t=C.get(e);return t?(C.delete(e),t(r)):Promise.resolve()}const ve="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);export{Te as a,Ne as b,Ee as c,ge as d,pe as e,ye as h,_e as m,we as n,be as s,me as t,Le as u};
