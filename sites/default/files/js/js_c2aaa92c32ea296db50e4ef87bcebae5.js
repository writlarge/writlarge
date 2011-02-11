/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
// $Id$
Drupal.behaviors.appbar = function (context) {
  if (context == document) {
    $('body').addClass('with-appbar');
    if (Drupal.settings.appbar.use_alerts) {
      var interval = setInterval("appbar_refresh();", Drupal.settings.appbar.delay);
    }
  }
  //Make sure we can run context.find().
  var ctxt = $(context);
  appbar_tn();
  ctxt.find('#appbar_container').show();
  ctxt.find('#appbar_alerts').click(function() {
    var $list = $('#appbar_alerts_list');
    var $bar = $('#appbar_messages');
    if ($bar.css('background-image') == 'url("'+ Drupal.settings.appbar.open_path +'")') {
      $bar.css('background-image', 'url("'+ Drupal.settings.appbar.close_path +'")');
    }
    else {
      $bar.css('background-image', 'url("'+ Drupal.settings.appbar.open_path +'")');
    }
    $list.toggle();
    if ($list.is(':visible')) {
      $list.load(Drupal.settings.appbar.base_path +'appbar/refresh/list');
      $('#appbar_count').html('0');
    }
  });
  if ($.fn.hoverIntent) {
    ctxt.find('.appbar-block-hover').hoverIntent(appbarHoverOn, appbarHoverOff);
  }
  else {  
    ctxt.find('.appbar-block-hover').hover(appbarHoverOn, appbarHoverOff);
  }
  ctxt.find('.appbar-block-popup .appbar-block-title').click(function(e) {
    e.preventDefault();
    var content = $(this).prev('.appbar-block-content');
    var visible = content.slideToggle('fast').attr('display');
    if (visible != 'none') {
      $('.appbar-block-content:visible').not(content).hide();
    }
  });
  ctxt.find('.appbar-block-popup .appbar-minimize').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().slideToggle('fast');
  });
  $('.appbar-block-popup,.appbar-block-hover').each(function(index) {
    //The -1 is a cheap hack to make this look better when the border is 1px.
    var leftPos = $(this).offset().left - 1;
    $(this).find('.appbar-block-content').css('left', leftPos);
  });
  $('.appbar-block:first').addClass('first');
  $('.appbar-block:last').addClass('last');
  ctxt.find('.appbar-block-controls').hover(
    function() {$('.appbar-block-configure').show(); },
    function() { $('.appbar-block-configure').hide(); }
  );
}
function appbar_refresh() {
  $('#appbar_count').load(Drupal.settings.appbar.base_path +'appbar/refresh/count');
  //Delay switching the class until the new count has loaded.
  setTimeout("appbar_tn()", 1000);
}
//JQuery 1.3 has the more efficient toggleClass(class, switch).
function appbar_tn() {
  if (parseInt($('#appbar_count').html()) > 0) {
    $('#appbar_messages').addClass('appbar-has-new');
  }
  else {
    $('#appbar_messages').removeClass('appbar-has-new');
  }
}
function appbarHoverOn(event) {
  var content = $(event.currentTarget).find('.appbar-block-content');
  content.slideToggle('fast');
  //Hide other open blocks.
  $('.appbar-block-content:visible').not(content).slideUp('fast');
}
function appbarHoverOff(event) {
  $(event.currentTarget).find('.appbar-block-content').slideToggle('fast');
}
;
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();;
/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: 3167
*/
if(typeof YUI!="undefined"){YUI._YUI=YUI;}var YUI=function(){var c=0,f=this,b=arguments,a=b.length,e=function(h,g){return(h&&h.hasOwnProperty&&(h instanceof g));},d=(typeof YUI_config!=="undefined")&&YUI_config;if(!(e(f,YUI))){f=new YUI();}else{f._init();if(YUI.GlobalConfig){f.applyConfig(YUI.GlobalConfig);}if(d){f.applyConfig(d);}if(!a){f._setup();}}if(a){for(;c<a;c++){f.applyConfig(b[c]);}f._setup();}f.instanceOf=e;return f;};(function(){var p,b,q="3.3.0",h=".",n="http://yui.yahooapis.com/",t="yui3-js-enabled",l=function(){},g=Array.prototype.slice,r={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},f=(typeof window!="undefined"),e=(f)?window:null,v=(f)?e.document:null,d=v&&v.documentElement,a=d&&d.className,c={},i=new Date().getTime(),m=function(z,y,x,w){if(z&&z.addEventListener){z.addEventListener(y,x,w);}else{if(z&&z.attachEvent){z.attachEvent("on"+y,x);}}},u=function(A,z,y,w){if(A&&A.removeEventListener){try{A.removeEventListener(z,y,w);}catch(x){}}else{if(A&&A.detachEvent){A.detachEvent("on"+z,y);}}},s=function(){YUI.Env.windowLoaded=true;YUI.Env.DOMReady=true;if(f){u(window,"load",s);}},j=function(y,x){var w=y.Env._loader;if(w){w.ignoreRegistered=false;w.onEnd=null;w.data=null;w.required=[];w.loadType=null;}else{w=new y.Loader(y.config);y.Env._loader=w;}return w;},o=function(y,x){for(var w in x){if(x.hasOwnProperty(w)){y[w]=x[w];}}},k={success:true};if(d&&a.indexOf(t)==-1){if(a){a+=" ";}a+=t;d.className=a;}if(q.indexOf("@")>-1){q="3.2.0";}p={applyConfig:function(D){D=D||l;var y,A,z=this.config,B=z.modules,x=z.groups,C=z.rls,w=this.Env._loader;for(A in D){if(D.hasOwnProperty(A)){y=D[A];if(B&&A=="modules"){o(B,y);}else{if(x&&A=="groups"){o(x,y);}else{if(C&&A=="rls"){o(C,y);}else{if(A=="win"){z[A]=y.contentWindow||y;z.doc=z[A].document;}else{if(A=="_yuid"){}else{z[A]=y;}}}}}}}if(w){w._config(D);}},_config:function(w){this.applyConfig(w);},_init:function(){var y,z=this,w=YUI.Env,x=z.Env,A;z.version=q;if(!x){z.Env={mods:{},versions:{},base:n,cdn:n+q+"/build/",_idx:0,_used:{},_attached:{},_yidx:0,_uidx:0,_guidp:"y",_loaded:{},serviced:{},getBase:w&&w.getBase||function(G,F){var B,C,E,H,D;C=(v&&v.getElementsByTagName("script"))||[];for(E=0;E<C.length;E=E+1){H=C[E].src;if(H){D=H.match(G);B=D&&D[1];if(B){y=D[2];if(y){D=y.indexOf("js");if(D>-1){y=y.substr(0,D);}}D=H.match(F);if(D&&D[3]){B=D[1]+D[3];}break;}}}return B||x.cdn;}};x=z.Env;x._loaded[q]={};if(w&&z!==YUI){x._yidx=++w._yidx;x._guidp=("yui_"+q+"_"+x._yidx+"_"+i).replace(/\./g,"_");}else{if(YUI._YUI){w=YUI._YUI.Env;x._yidx+=w._yidx;x._uidx+=w._uidx;for(A in w){if(!(A in x)){x[A]=w[A];}}delete YUI._YUI;}}z.id=z.stamp(z);c[z.id]=z;}z.constructor=YUI;z.config=z.config||{win:e,doc:v,debug:true,useBrowserConsole:true,throwFail:true,bootstrap:true,cacheUse:true,fetchCSS:true};z.config.base=YUI.config.base||z.Env.getBase(/^(.*)yui\/yui([\.\-].*)js(\?.*)?$/,/^(.*\?)(.*\&)(.*)yui\/yui[\.\-].*js(\?.*)?$/);if(!y||(!("-min.-debug.").indexOf(y))){y="-min.";}z.config.loaderPath=YUI.config.loaderPath||"loader/loader"+(y||"-min.")+"js";},_setup:function(B){var x,A=this,w=[],z=YUI.Env.mods,y=A.config.core||["get","rls","intl-base","loader","yui-log","yui-later","yui-throttle"];for(x=0;x<y.length;x++){if(z[y[x]]){w.push(y[x]);}}A._attach(["yui-base"]);A._attach(w);},applyTo:function(C,B,y){if(!(B in r)){this.log(B+": applyTo not allowed","warn","yui");return null;}var x=c[C],A,w,z;if(x){A=B.split(".");w=x;for(z=0;z<A.length;z=z+1){w=w[A[z]];if(!w){this.log("applyTo not found: "+B,"warn","yui");}}return w.apply(x,y);}return null;},add:function(x,C,B,w){w=w||{};var A=YUI.Env,D={name:x,fn:C,version:B,details:w},E,z,y=A.versions;A.mods[x]=D;y[B]=y[B]||{};y[B][x]=D;for(z in c){if(c.hasOwnProperty(z)){E=c[z].Env._loader;if(E){if(!E.moduleInfo[x]){E.addModule(w,x);}}}}return this;},_attach:function(w,C){var F,A,J,x,I,y,z,L=YUI.Env.mods,B=this,E,D=B.Env._attached,G=w.length,K;for(F=0;F<G;F++){if(!D[w[F]]){A=w[F];J=L[A];if(!J){K=B.Env._loader;if(!K||!K.moduleInfo[A]){B.message("NOT loaded: "+A,"warn","yui");}}else{D[A]=true;x=J.details;I=x.requires;y=x.use;z=x.after;if(I){for(E=0;E<I.length;E++){if(!D[I[E]]){if(!B._attach(I)){return false;}break;}}}if(z){for(E=0;E<z.length;E++){if(!D[z[E]]){if(!B._attach(z)){return false;}break;}}}if(y){for(E=0;E<y.length;E++){if(!D[y[E]]){if(!B._attach(y)){return false;}break;}}}if(J.fn){try{J.fn(B,A);}catch(H){B.error("Attach error: "+A,H,A);return false;}}}}}return true;},use:function(){var w=g.call(arguments,0),z=w[w.length-1],y=this,x;if(y.Lang.isFunction(z)){w.pop();}else{z=null;}if(y._loading){y._useQueue=y._useQueue||new y.Queue();y._useQueue.add([w,z]);}else{x=w.join();if(y.config.cacheUse&&y.Env.serviced[x]){y._notify(z,k,w);}else{y._use(w,function(B,A){if(B.config.cacheUse){B.Env.serviced[x]=true;}B._notify(z,A,w);});}}return y;},_notify:function(z,w,x){if(!w.success&&this.config.loadErrorFn){this.config.loadErrorFn.call(this,this,z,w,x);}else{if(z){try{z(this,w);}catch(y){this.error("use callback error",y,x);}}}},_use:function(y,A){if(!this.Array){this._attach(["yui-base"]);}var L,F,M,x=this,N=YUI.Env,z=N.mods,w=x.Env,C=w._used,J=N._loaderQueue,Q=y[0],E=x.Array,O=x.config,D=O.bootstrap,K=[],H=[],P=true,B=O.fetchCSS,I=function(S,R){if(!S.length){return;}E.each(S,function(V){if(!R){H.push(V);}if(C[V]){return;}var T=z[V],W,U;if(T){C[V]=true;W=T.details.requires;U=T.details.use;}else{if(!N._loaded[q][V]){K.push(V);}else{C[V]=true;}}if(W&&W.length){I(W);}if(U&&U.length){I(U,1);}});},G=function(V){var T=V||{success:true,msg:"not dynamic"},S,R,U=true,W=T.data;x._loading=false;if(W){R=K;K=[];H=[];I(W);S=K.length;if(S){if(K.sort().join()==R.sort().join()){S=false;}}}if(S&&W){x._loading=false;x._use(y,function(){if(x._attach(W)){x._notify(A,T,W);}});}else{if(W){U=x._attach(W);}if(U){x._notify(A,T,y);}}if(x._useQueue&&x._useQueue.size()&&!x._loading){x._use.apply(x,x._useQueue.next());}};if(Q==="*"){P=x._attach(x.Object.keys(z));if(P){G();}return x;}if(D&&x.Loader&&y.length){F=j(x);F.require(y);F.ignoreRegistered=true;
F.calculate(null,(B)?null:"js");y=F.sorted;}I(y);L=K.length;if(L){K=x.Object.keys(E.hash(K));L=K.length;}if(D&&L&&x.Loader){x._loading=true;F=j(x);F.onEnd=G;F.context=x;F.data=y;F.ignoreRegistered=false;F.require(y);F.insert(null,(B)?null:"js");}else{if(L&&x.config.use_rls){x.Get.script(x._rls(y),{onEnd:function(R){G(R);},data:y});}else{if(D&&L&&x.Get&&!w.bootstrapped){x._loading=true;M=function(){x._loading=false;J.running=false;w.bootstrapped=true;if(x._attach(["loader"])){x._use(y,A);}};if(N._bootstrapping){J.add(M);}else{N._bootstrapping=true;x.Get.script(O.base+O.loaderPath,{onEnd:M});}}else{P=x._attach(y);if(P){G();}}}}return x;},namespace:function(){var x=arguments,B=this,z=0,y,A,w;for(;z<x.length;z++){w=x[z];if(w.indexOf(h)){A=w.split(h);for(y=(A[0]=="YAHOO")?1:0;y<A.length;y++){B[A[y]]=B[A[y]]||{};B=B[A[y]];}}else{B[w]=B[w]||{};}}return B;},log:l,message:l,error:function(A,y,x){var z=this,w;if(z.config.errorFn){w=z.config.errorFn.apply(z,arguments);}if(z.config.throwFail&&!w){throw (y||new Error(A));}else{z.message(A,"error");}return z;},guid:function(w){var x=this.Env._guidp+(++this.Env._uidx);return(w)?(w+x):x;},stamp:function(y,z){var w;if(!y){return y;}if(y.uniqueID&&y.nodeType&&y.nodeType!==9){w=y.uniqueID;}else{w=(typeof y==="string")?y:y._yuid;}if(!w){w=this.guid();if(!z){try{y._yuid=w;}catch(x){w=null;}}}return w;},destroy:function(){var w=this;if(w.Event){w.Event._unload();}delete c[w.id];delete w.Env;delete w.config;}};YUI.prototype=p;for(b in p){if(p.hasOwnProperty(b)){YUI[b]=p[b];}}YUI._init();if(f){m(window,"load",s);}else{s();}YUI.Env.add=m;YUI.Env.remove=u;if(typeof exports=="object"){exports.YUI=YUI;}}());YUI.add("yui-base",function(c){c.Lang=c.Lang||{};var k=c.Lang,B="array",p="boolean",f="date",g="error",i="function",t="number",A="null",n="object",y="regexp",r="string",s=String.prototype,m=Object.prototype.toString,D="undefined",b={"undefined":D,"number":t,"boolean":p,"string":r,"[object Function]":i,"[object RegExp]":y,"[object Array]":B,"[object Date]":f,"[object Error]":g},x=/^\s+|\s+$/g,z="",e=/\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;k.isArray=function(E){return k.type(E)===B;};k.isBoolean=function(E){return typeof E===p;};k.isFunction=function(E){return k.type(E)===i;};k.isDate=function(E){return k.type(E)===f&&E.toString()!=="Invalid Date"&&!isNaN(E);};k.isNull=function(E){return E===null;};k.isNumber=function(E){return typeof E===t&&isFinite(E);};k.isObject=function(G,F){var E=typeof G;return(G&&(E===n||(!F&&(E===i||k.isFunction(G)))))||false;};k.isString=function(E){return typeof E===r;};k.isUndefined=function(E){return typeof E===D;};k.trim=s.trim?function(E){return(E&&E.trim)?E.trim():E;}:function(E){try{return E.replace(x,z);}catch(F){return E;}};k.trimLeft=s.trimLeft?function(E){return E.trimLeft();}:function(E){return E.replace(/^\s+/,"");};k.trimRight=s.trimRight?function(E){return E.trimRight();}:function(E){return E.replace(/\s+$/,"");};k.isValue=function(F){var E=k.type(F);switch(E){case t:return isFinite(F);case A:case D:return false;default:return !!(E);}};k.type=function(E){return b[typeof E]||b[m.call(E)]||(E?n:A);};k.sub=function(E,F){return((E.replace)?E.replace(e,function(G,H){return(!k.isUndefined(F[H]))?F[H]:G;}):E);};k.now=Date.now||function(){return new Date().getTime();};var u=Array.prototype,w="length",l=function(K,I,G){var H=(G)?2:l.test(K),F,E,L=I||0;if(H){try{return u.slice.call(K,L);}catch(J){E=[];F=K.length;for(;L<F;L++){E.push(K[L]);}return E;}}else{return[K];}};c.Array=l;l.test=function(G){var E=0;if(c.Lang.isObject(G)){if(c.Lang.isArray(G)){E=1;}else{try{if((w in G)&&!G.tagName&&!G.alert&&!G.apply){E=2;}}catch(F){}}}return E;};l.each=(u.forEach)?function(E,F,G){u.forEach.call(E||[],F,G||c);return c;}:function(F,H,I){var E=(F&&F.length)||0,G;for(G=0;G<E;G=G+1){H.call(I||c,F[G],G,F);}return c;};l.hash=function(G,F){var J={},E=G.length,I=F&&F.length,H;for(H=0;H<E;H=H+1){J[G[H]]=(I&&I>H)?F[H]:true;}return J;};l.indexOf=(u.indexOf)?function(E,F){return u.indexOf.call(E,F);}:function(E,G){for(var F=0;F<E.length;F=F+1){if(E[F]===G){return F;}}return -1;};l.numericSort=function(F,E){return(F-E);};l.some=(u.some)?function(E,F,G){return u.some.call(E,F,G);}:function(F,H,I){var E=F.length,G;for(G=0;G<E;G=G+1){if(H.call(I,F[G],G,F)){return true;}}return false;};function C(){this._init();this.add.apply(this,arguments);}C.prototype={_init:function(){this._q=[];},next:function(){return this._q.shift();},last:function(){return this._q.pop();},add:function(){this._q.push.apply(this._q,arguments);return this;},size:function(){return this._q.length;}};c.Queue=C;YUI.Env._loaderQueue=YUI.Env._loaderQueue||new C();var o="__",a=function(G,F){var E=F.toString;if(c.Lang.isFunction(E)&&E!=Object.prototype.toString){G.toString=E;}};c.merge=function(){var F=arguments,H={},G,E=F.length;for(G=0;G<E;G=G+1){c.mix(H,F[G],true);}return H;};c.mix=function(E,N,G,M,J,L){if(!N||!E){return E||c;}if(J){switch(J){case 1:return c.mix(E.prototype,N.prototype,G,M,0,L);case 2:c.mix(E.prototype,N.prototype,G,M,0,L);break;case 3:return c.mix(E,N.prototype,G,M,0,L);case 4:return c.mix(E.prototype,N,G,M,0,L);default:}}var I,H,F,K;if(M&&M.length){for(I=0,H=M.length;I<H;++I){F=M[I];K=c.Lang.type(E[F]);if(N.hasOwnProperty(F)){if(L&&K=="object"){c.mix(E[F],N[F]);}else{if(G||!(F in E)){E[F]=N[F];}}}}}else{for(I in N){if(N.hasOwnProperty(I)){if(L&&c.Lang.isObject(E[I],true)){c.mix(E[I],N[I],G,M,0,true);}else{if(G||!(I in E)){E[I]=N[I];}}}}if(c.UA.ie){a(E,N);}}return E;};c.cached=function(G,E,F){E=E||{};return function(I){var H=(arguments.length>1)?Array.prototype.join.call(arguments,o):I;if(!(H in E)||(F&&E[H]==F)){E[H]=G.apply(G,arguments);}return E[H];};};var q=function(){},h=function(E){q.prototype=E;return new q();},j=function(F,E){return F&&F.hasOwnProperty&&F.hasOwnProperty(E);},v,d=function(I,H){var G=(H===2),E=(G)?0:[],F;for(F in I){if(j(I,F)){if(G){E++;}else{E.push((H)?I[F]:F);}}}return E;};c.Object=h;h.keys=function(E){return d(E);};h.values=function(E){return d(E,1);
};h.size=Object.size||function(E){return d(E,2);};h.hasKey=j;h.hasValue=function(F,E){return(c.Array.indexOf(h.values(F),E)>-1);};h.owns=j;h.each=function(I,H,J,G){var F=J||c,E;for(E in I){if(G||j(I,E)){H.call(F,I[E],E,I);}}return c;};h.some=function(I,H,J,G){var F=J||c,E;for(E in I){if(G||j(I,E)){if(H.call(F,I[E],E,I)){return true;}}}return false;};h.getValue=function(I,H){if(!c.Lang.isObject(I)){return v;}var F,G=c.Array(H),E=G.length;for(F=0;I!==v&&F<E;F++){I=I[G[F]];}return I;};h.setValue=function(K,I,J){var E,H=c.Array(I),G=H.length-1,F=K;if(G>=0){for(E=0;F!==v&&E<G;E++){F=F[H[E]];}if(F!==v){F[H[E]]=J;}else{return v;}}return K;};h.isEmpty=function(F){for(var E in F){if(j(F,E)){return false;}}return true;};YUI.Env.parseUA=function(K){var J=function(N){var O=0;return parseFloat(N.replace(/\./g,function(){return(O++==1)?"":".";}));},M=c.config.win,E=M&&M.navigator,H={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:E&&E.cajaVersion,secure:false,os:null},F=K||E&&E.userAgent,L=M&&M.location,G=L&&L.href,I;H.secure=G&&(G.toLowerCase().indexOf("https")===0);if(F){if((/windows|win32/i).test(F)){H.os="windows";}else{if((/macintosh/i).test(F)){H.os="macintosh";}else{if((/rhino/i).test(F)){H.os="rhino";}}}if((/KHTML/).test(F)){H.webkit=1;}I=F.match(/AppleWebKit\/([^\s]*)/);if(I&&I[1]){H.webkit=J(I[1]);if(/ Mobile\//.test(F)){H.mobile="Apple";I=F.match(/OS ([^\s]*)/);if(I&&I[1]){I=J(I[1].replace("_","."));}H.ios=I;H.ipad=H.ipod=H.iphone=0;I=F.match(/iPad|iPod|iPhone/);if(I&&I[0]){H[I[0].toLowerCase()]=H.ios;}}else{I=F.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);if(I){H.mobile=I[0];}if(/webOS/.test(F)){H.mobile="WebOS";I=F.match(/webOS\/([^\s]*);/);if(I&&I[1]){H.webos=J(I[1]);}}if(/ Android/.test(F)){H.mobile="Android";I=F.match(/Android ([^\s]*);/);if(I&&I[1]){H.android=J(I[1]);}}}I=F.match(/Chrome\/([^\s]*)/);if(I&&I[1]){H.chrome=J(I[1]);}else{I=F.match(/AdobeAIR\/([^\s]*)/);if(I){H.air=I[0];}}}if(!H.webkit){I=F.match(/Opera[\s\/]([^\s]*)/);if(I&&I[1]){H.opera=J(I[1]);I=F.match(/Opera Mini[^;]*/);if(I){H.mobile=I[0];}}else{I=F.match(/MSIE\s([^;]*)/);if(I&&I[1]){H.ie=J(I[1]);}else{I=F.match(/Gecko\/([^\s]*)/);if(I){H.gecko=1;I=F.match(/rv:([^\s\)]*)/);if(I&&I[1]){H.gecko=J(I[1]);}}}}}}YUI.Env.UA=H;return H;};c.UA=YUI.Env.UA||YUI.Env.parseUA();},"3.3.0");YUI.add("get",function(f){var b=f.UA,a=f.Lang,d="text/javascript",e="text/css",c="stylesheet";f.Get=function(){var m,n,j,l={},k=0,u,w=function(A,x,B){var y=B||f.config.win,C=y.document,D=C.createElement(A),z;for(z in x){if(x[z]&&x.hasOwnProperty(z)){D.setAttribute(z,x[z]);}}return D;},t=function(y,z,x){var A={id:f.guid(),type:e,rel:c,href:y};if(x){f.mix(A,x);}return w("link",A,z);},s=function(y,z,x){var A={id:f.guid(),type:d};if(x){f.mix(A,x);}A.src=y;return w("script",A,z);},p=function(y,z,x){return{tId:y.tId,win:y.win,data:y.data,nodes:y.nodes,msg:z,statusText:x,purge:function(){n(this.tId);}};},o=function(B,A,x){var y=l[B],z;if(y&&y.onEnd){z=y.context||y;y.onEnd.call(z,p(y,A,x));}},v=function(A,z){var x=l[A],y;if(x.timer){clearTimeout(x.timer);}if(x.onFailure){y=x.context||x;x.onFailure.call(y,p(x,z));}o(A,z,"failure");},i=function(A){var x=l[A],z,y;if(x.timer){clearTimeout(x.timer);}x.finished=true;if(x.aborted){z="transaction "+A+" was aborted";v(A,z);return;}if(x.onSuccess){y=x.context||x;x.onSuccess.call(y,p(x));}o(A,z,"OK");},q=function(z){var x=l[z],y;if(x.onTimeout){y=x.context||x;x.onTimeout.call(y,p(x));}o(z,"timeout","timeout");},h=function(z,C){var y=l[z],B,G,F,D,A,x,H,E;if(y.timer){clearTimeout(y.timer);}if(y.aborted){B="transaction "+z+" was aborted";v(z,B);return;}if(C){y.url.shift();if(y.varName){y.varName.shift();}}else{y.url=(a.isString(y.url))?[y.url]:y.url;if(y.varName){y.varName=(a.isString(y.varName))?[y.varName]:y.varName;}}G=y.win;F=G.document;D=F.getElementsByTagName("head")[0];if(y.url.length===0){i(z);return;}x=y.url[0];if(!x){y.url.shift();return h(z);}if(y.timeout){y.timer=setTimeout(function(){q(z);},y.timeout);}if(y.type==="script"){A=s(x,G,y.attributes);}else{A=t(x,G,y.attributes);}j(y.type,A,z,x,G,y.url.length);y.nodes.push(A);E=y.insertBefore||F.getElementsByTagName("base")[0];if(E){H=m(E,z);if(H){H.parentNode.insertBefore(A,H);}}else{D.appendChild(A);}if((b.webkit||b.gecko)&&y.type==="css"){h(z,x);}},g=function(){if(u){return;}u=true;var x,y;for(x in l){if(l.hasOwnProperty(x)){y=l[x];if(y.autopurge&&y.finished){n(y.tId);delete l[x];}}}u=false;},r=function(y,x,z){z=z||{};var C="q"+(k++),A,B=z.purgethreshold||f.Get.PURGE_THRESH;if(k%B===0){g();}l[C]=f.merge(z,{tId:C,type:y,url:x,finished:false,nodes:[]});A=l[C];A.win=A.win||f.config.win;A.context=A.context||A;A.autopurge=("autopurge" in A)?A.autopurge:(y==="script")?true:false;A.attributes=A.attributes||{};A.attributes.charset=z.charset||A.attributes.charset||"utf-8";h(C);return{tId:C};};j=function(z,E,D,y,C,B,x){var A=x||h;if(b.ie){E.onreadystatechange=function(){var F=this.readyState;if("loaded"===F||"complete"===F){E.onreadystatechange=null;A(D,y);}};}else{if(b.webkit){if(z==="script"){E.addEventListener("load",function(){A(D,y);});}}else{E.onload=function(){A(D,y);};E.onerror=function(F){v(D,F+": "+y);};}}};m=function(x,A){var y=l[A],z=(a.isString(x))?y.win.document.getElementById(x):x;if(!z){v(A,"target node not found: "+x);}return z;};n=function(C){var y,A,G,D,H,B,z,F,E,x=l[C];if(x){y=x.nodes;A=y.length;G=x.win.document;D=G.getElementsByTagName("head")[0];E=x.insertBefore||G.getElementsByTagName("base")[0];if(E){H=m(E,C);if(H){D=H.parentNode;}}for(B=0;B<A;B=B+1){z=y[B];if(z.clearAttributes){z.clearAttributes();}else{for(F in z){if(z.hasOwnProperty(F)){delete z[F];}}}D.removeChild(z);}}x.nodes=[];};return{PURGE_THRESH:20,_finalize:function(x){setTimeout(function(){i(x);},0);},abort:function(y){var z=(a.isString(y))?y:y.tId,x=l[z];if(x){x.aborted=true;}},script:function(x,y){return r("script",x,y);},css:function(x,y){return r("css",x,y);}};}();},"3.3.0",{requires:["yui-base"]});YUI.add("features",function(b){var c={};
b.mix(b.namespace("Features"),{tests:c,add:function(d,e,f){c[d]=c[d]||{};c[d][e]=f;},all:function(e,f){var g=c[e],d="";if(g){b.Object.each(g,function(i,h){d+=h+":"+(b.Features.test(e,h,f)?1:0)+";";});}return d;},test:function(e,g,f){f=f||[];var d,i,k,j=c[e],h=j&&j[g];if(!h){}else{d=h.result;if(b.Lang.isUndefined(d)){i=h.ua;if(i){d=(b.UA[i]);}k=h.test;if(k&&((!i)||d)){d=k.apply(b,f);}h.result=d;}}return d;}});var a=b.Features.add;a("load","0",{"test":function(d){return !(d.UA.ios||d.UA.android);},"trigger":"autocomplete-list"});a("load","1",{"test":function(j){var h=j.Features.test,i=j.Features.add,f=j.config.win,g=j.config.doc,d="documentElement",e=false;i("style","computedStyle",{test:function(){return f&&"getComputedStyle" in f;}});i("style","opacity",{test:function(){return g&&"opacity" in g[d].style;}});e=(!h("style","opacity")&&!h("style","computedStyle"));return e;},"trigger":"dom-style"});a("load","2",{"trigger":"widget-base","ua":"ie"});a("load","3",{"test":function(e){var d=e.config.doc&&e.config.doc.implementation;return(d&&(!d.hasFeature("Events","2.0")));},"trigger":"node-base"});a("load","4",{"test":function(d){return(d.config.win&&("ontouchstart" in d.config.win&&!d.UA.chrome));},"trigger":"dd-drag"});a("load","5",{"test":function(e){var d=e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange" in e.config.win)||!d||d<8);},"trigger":"history-hash"});},"3.3.0",{requires:["yui-base"]});YUI.add("rls",function(a){a._rls=function(g){var d=a.config,f=d.rls||{m:1,v:a.version,gv:d.gallery,env:1,lang:d.lang,"2in3v":d["2in3"],"2v":d.yui2,filt:d.filter,filts:d.filters,tests:1},b=d.rls_base||"load?",e=d.rls_tmpl||function(){var h="",i;for(i in f){if(i in f&&f[i]){h+=i+"={"+i+"}&";}}return h;}(),c;f.m=g;f.env=a.Object.keys(YUI.Env.mods);f.tests=a.Features.all("load",[a]);c=a.Lang.sub(b+e,f);d.rls=f;d.rls_tmpl=e;return c;};},"3.3.0",{requires:["get","features"]});YUI.add("intl-base",function(b){var a=/[, ]/;b.mix(b.namespace("Intl"),{lookupBestLang:function(g,h){var f,j,c,e;function d(l){var k;for(k=0;k<h.length;k+=1){if(l.toLowerCase()===h[k].toLowerCase()){return h[k];}}}if(b.Lang.isString(g)){g=g.split(a);}for(f=0;f<g.length;f+=1){j=g[f];if(!j||j==="*"){continue;}while(j.length>0){c=d(j);if(c){return c;}else{e=j.lastIndexOf("-");if(e>=0){j=j.substring(0,e);if(e>=2&&j.charAt(e-2)==="-"){j=j.substring(0,e-2);}}else{break;}}}}return"";}});},"3.3.0",{requires:["yui-base"]});YUI.add("yui-log",function(d){var c=d,e="yui:log",a="undefined",b={debug:1,info:1,warn:1,error:1};c.log=function(j,s,g,q){var l,p,n,k,o,i=c,r=i.config,h=(i.fire)?i:YUI.Env.globalEvents;if(r.debug){if(g){p=r.logExclude;n=r.logInclude;if(n&&!(g in n)){l=1;}else{if(p&&(g in p)){l=1;}}}if(!l){if(r.useBrowserConsole){k=(g)?g+": "+j:j;if(i.Lang.isFunction(r.logFn)){r.logFn.call(i,j,s,g);}else{if(typeof console!=a&&console.log){o=(s&&console[s]&&(s in b))?s:"log";console[o](k);}else{if(typeof opera!=a){opera.postError(k);}}}}if(h&&!q){if(h==i&&(!h.getEvent(e))){h.publish(e,{broadcast:2});}h.fire(e,{msg:j,cat:s,src:g});}}}return i;};c.message=function(){return c.log.apply(c,arguments);};},"3.3.0",{requires:["yui-base"]});YUI.add("yui-later",function(a){a.later=function(c,i,d,h,g){c=c||0;var b=d,e,j;if(i&&a.Lang.isString(d)){b=i[d];}e=!a.Lang.isUndefined(h)?function(){b.apply(i,a.Array(h));}:function(){b.call(i);};j=(g)?setInterval(e,c):setTimeout(e,c);return{id:j,interval:g,cancel:function(){if(this.interval){clearInterval(j);}else{clearTimeout(j);}}};};a.Lang.later=a.later;},"3.3.0",{requires:["yui-base"]});YUI.add("yui-throttle",function(a){
/*! Based on work by Simon Willison: http://gist.github.com/292562 */
a.throttle=function(c,b){b=(b)?b:(a.config.throttleTime||150);if(b===-1){return(function(){c.apply(null,arguments);});}var d=a.Lang.now();return(function(){var e=a.Lang.now();if(e-d>b){d=e;c.apply(null,arguments);}});};},"3.3.0",{requires:["yui-base"]});YUI.add("yui",function(a){},"3.3.0",{use:["yui-base","get","features","rls","intl-base","yui-log","yui-later","yui-throttle"]});;
//$Id: storage-lite.js,v 1.1 2011/01/06 20:17:02 darklrd Exp $
/*global YUI */
/*jslint onevar: true, browser: true, undef: true, bitwise: true, regexp: true, newcap: true, immed: true */

/**
 * Implements a persistent local key/value data store similar to HTML5's
 * localStorage. Should work in IE5+, Firefox 2+, Safari 3.1+, Chrome 4+, and
 * Opera 10.5+.
 *
 * @module gallery-storage-lite
 */

YUI.add('gallery-storage-lite',function(Y){var d=Y.config.doc,w=Y.config.win,JSON=Y.JSON,StorageLite=Y.namespace('StorageLite'),DB_NAME='yui_storage_lite',DB_DISPLAYNAME='YUI StorageLite data',DB_MAXSIZE=1048576,DB_VERSION='1.0',EVT_READY='ready',MODE_NOOP=0,MODE_HTML5=1,MODE_GECKO=2,MODE_DB=3,MODE_USERDATA=4,USERDATA_PATH='yui_storage_lite',USERDATA_NAME='data',data={},storageDriver,storageMode;if(w.localStorage){storageMode=MODE_HTML5;}else if(w.globalStorage){storageMode=MODE_GECKO;}else if(w.openDatabase&&navigator.userAgent.indexOf('Chrome')===-1){storageMode=MODE_DB;}else if(Y.UA.ie>=5){storageMode=MODE_USERDATA;}else{storageMode=MODE_NOOP;}
Y.StorageFullError=function(message){Y.StorageFullError.superclass.constructor.call(message);this.name='StorageFullError';this.message=message||'Maximum storage capacity reached';if(Y.UA.ie){this.description=this.message;}};Y.extend(Y.StorageFullError,Error);Y.augment(StorageLite,Y.EventTarget,true,null,{emitFacade:true,prefix:'storage-lite',preventable:false});StorageLite.publish(EVT_READY,{fireOnce:true});Y.mix(StorageLite,{clear:function(){},getItem:function(key,json){return null;},length:function(){return 0;},removeItem:function(key){},setItem:function(key,value){}});if(storageMode===MODE_HTML5||storageMode===MODE_GECKO){Y.mix(StorageLite,{length:function(){return storageDriver.length;},removeItem:function(key){storageDriver.removeItem(key);},setItem:function(key,value,json){storageDriver.setItem(key,json?JSON.stringify(value):value);}},true);if(storageMode===MODE_HTML5){storageDriver=w.localStorage;Y.mix(StorageLite,{clear:function(){storageDriver.clear();},getItem:function(key,json){try{return json?JSON.parse(storageDriver.getItem(key)):storageDriver.getItem(key);}catch(ex){return null;}}},true);}else if(storageMode===MODE_GECKO){storageDriver=w.globalStorage[w.location.hostname];Y.mix(StorageLite,{clear:function(){for(var key in storageDriver){if(storageDriver.hasOwnProperty(key)){storageDriver.removeItem(key);delete storageDriver[key];}}},getItem:function(key,json){try{return json?JSON.parse(storageDriver[key].value):storageDriver[key].value;}catch(ex){return null;}}},true);}
StorageLite.fire(EVT_READY);}else if(storageMode===MODE_DB||storageMode===MODE_USERDATA){Y.mix(StorageLite,{clear:function(){data={};StorageLite._save();},getItem:function(key,json){return data.hasOwnProperty(key)?data[key]:null;},length:function(){var count=0,key;for(key in data){if(data.hasOwnProperty(key)){count+=1;}}
return count;},removeItem:function(key){delete data[key];StorageLite._save();},setItem:function(key,value,json){data[key]=value;StorageLite._save();}},true);if(storageMode===MODE_DB){storageDriver=w.openDatabase(DB_NAME,DB_VERSION,DB_DISPLAYNAME,DB_MAXSIZE);Y.mix(StorageLite,{_save:function(){storageDriver.transaction(function(t){t.executeSql("REPLACE INTO "+DB_NAME+" (name, value) VALUES ('data', ?)",[JSON.stringify(data)]);});}},true);storageDriver.transaction(function(t){t.executeSql("CREATE TABLE IF NOT EXISTS "+DB_NAME+"(name TEXT PRIMARY KEY, value TEXT NOT NULL)");t.executeSql("SELECT value FROM "+DB_NAME+" WHERE name = 'data'",[],function(t,results){if(results.rows.length){try{data=JSON.parse(results.rows.item(0).value);}catch(ex){data={};}}
StorageLite.fire(EVT_READY);});});}else if(storageMode===MODE_USERDATA){storageDriver=d.createElement('span');storageDriver.addBehavior('#default#userData');Y.mix(StorageLite,{_save:function(){var _data=JSON.stringify(data);try{storageDriver.setAttribute(USERDATA_NAME,_data);storageDriver.save(USERDATA_PATH);}catch(ex){throw new Y.StorageFullError();}}},true);Y.on('domready',function(){d.body.appendChild(storageDriver);storageDriver.load(USERDATA_PATH);try{data=JSON.parse(storageDriver.getAttribute(USERDATA_NAME)||'{}');}catch(ex){data={};}
StorageLite.fire(EVT_READY);});}}else{StorageLite.fire(EVT_READY);}},'1.0.0',{requires:['event-base','event-custom','event-custom-complex','json']});
;
/*!
 * Title Alert 0.7
 * 
 * Copyright (c) 2009 ESN | http://esn.me
 * Jonatan Heyman | http://heyman.info
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 */
(function(a){a.titleAlert=function(e,c){if(a.titleAlert._running){a.titleAlert.stop()}a.titleAlert._settings=c=a.extend({},a.titleAlert.defaults,c);if(c.requireBlur&&a.titleAlert.hasFocus){return}c.originalTitleInterval=c.originalTitleInterval||c.interval;a.titleAlert._running=true;a.titleAlert._initialText=document.title;document.title=e;var b=true;var d=function(){if(!a.titleAlert._running){return}b=!b;document.title=(b?e:a.titleAlert._initialText);a.titleAlert._intervalToken=setTimeout(d,(b?c.interval:c.originalTitleInterval))};a.titleAlert._intervalToken=setTimeout(d,c.interval);if(c.stopOnMouseMove){a(document).mousemove(function(f){a(this).unbind(f);a.titleAlert.stop()})}if(c.duration>0){a.titleAlert._timeoutToken=setTimeout(function(){a.titleAlert.stop()},c.duration)}};a.titleAlert.defaults={interval:500,originalTitleInterval:null,duration:0,stopOnFocus:true,requireBlur:false,stopOnMouseMove:false};a.titleAlert.stop=function(){clearTimeout(a.titleAlert._intervalToken);clearTimeout(a.titleAlert._timeoutToken);document.title=a.titleAlert._initialText;a.titleAlert._timeoutToken=null;a.titleAlert._intervalToken=null;a.titleAlert._initialText=null;a.titleAlert._running=false;a.titleAlert._settings=null};a.titleAlert.hasFocus=true;a.titleAlert._running=false;a.titleAlert._intervalToken=null;a.titleAlert._timeoutToken=null;a.titleAlert._initialText=null;a.titleAlert._settings=null;a.titleAlert._focus=function(){a.titleAlert.hasFocus=true;if(a.titleAlert._running&&a.titleAlert._settings.stopOnFocus){var b=a.titleAlert._initialText;a.titleAlert.stop();setTimeout(function(){if(a.titleAlert._running){return}document.title=".";document.title=b},1000)}};a.titleAlert._blur=function(){a.titleAlert.hasFocus=false};a(window).bind("focus",a.titleAlert._focus);a(window).bind("blur",a.titleAlert._blur)})(jQuery);;
//$Id: drupalchat-min.js,v 1.2.2.1 2011/01/07 18:46:29 darklrd Exp $
var drupalchat={username:null,uid:null,send_current_message:null,last_timestamp:0,send_current_uid2:0,attach_messages_in_queue:0,running:0,smilies:{":)":["glad.png","happy",":-)"],":(":["sad.png","sad",":-("],";)":["wink.png","winking",";-)"],":D":["lol.png","big grin",":-D"],"^_^":["muhaha.gif","happy eyes"],">:o":["haha.gif","laughing eyes"],":3":["hohoho.png","laughing eyes"],">:-(":["waiting.png","grumpy","X-(","X(","x-(","x("],":'(":["crying.png","crying"],":o":["omg.png","shocked",":-o"],"8)":["cool.png","glass","8-)","B)","B-)"],"8-|":["ouch.png","cool","8-|"],":p":["tongue.png","tongue",":-p",":P",":-P"],"O.o":["stupid-idea.png","woot?!"],"-_-":["huh-where.png","dark emote"],":/":["oopsy.png","duhhh",":-/",":\\",":-\\"],":*":["kiss.png","kiss",":-*"],"<3":["love.png","heart",],"3:)":["very-devil-plan.png","devil smile"],"O:)":["idiotic-smile.png","angel"]}};$(document).ready(function(){YUI().use('gallery-storage-lite',function(Y){Y.StorageLite.on('storage-lite:ready',function(){if(Y.StorageLite.getItem('username')!=null){drupalchat.username=Y.StorageLite.getItem('username');drupalchat.uid=Y.StorageLite.getItem('uid');drupalchat.send_current_message=Y.StorageLite.getItem('send_current_message');drupalchat.last_timestamp=Y.StorageLite.getItem('last_timestamp');drupalchat.send_current_uid2=Y.StorageLite.getItem('send_current_uid2');drupalchat.attach_messages_in_queue=Y.StorageLite.getItem('attach_messages_in_queue');drupalchat.running=Y.StorageLite.getItem('running');if(Y.StorageLite.getItem('drupalchat').length){$('#drupalchat').html(Y.StorageLite.getItem('drupalchat'))}}})});emotify.emoticons(Drupal.settings.drupalchat.smileyURL,drupalchat.smilies);$.fn.adjustPanel=function(){$(this).find("ul, .subpanel").css({'height':'auto'});var windowHeight=$(window).height();var panelsub=$(this).find(".subpanel").height();var panelAdjust=windowHeight-100;var ulAdjust=panelAdjust-25;if(panelsub>panelAdjust){$(this).find(".subpanel").css({'height':panelAdjust});$(this).find("ul").css({'height':panelAdjust})}else{$(this).find("ul").css({'height':'auto'})}};$("#chatpanel").adjustPanel();$(window).resize(function(){$("#chatpanel").adjustPanel()});$("<div><object id=\"drupalchatbeep\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"1\" height=\"1\"><param name=\"movie\" value=\""+Drupal.settings.drupalchat.sound+"\"/><!--[if !IE]>--><object type=\"application/x-shockwave-flash\" data=\""+Drupal.settings.drupalchat.sound+"\" width=\"1\" height=\"1\"></object><!--<![endif]--></object></div>").appendTo($("body"));swfobject.registerObject("drupalchatbeep","9");$("#mainpanel li a.subpanel_toggle, .chatbox a.chatboxhead").live('click',function(){if($(this).next(".subpanel").is(':visible')){$(this).next(".subpanel").hide();$("#drupalchat li a").removeClass('active')}else{$(".subpanel").hide();$(this).next(".subpanel").toggle();$("#drupalchat li a").removeClass('active');$(this).toggleClass('active');var isTextarea=$(this).next(".subpanel").children(".chatboxinput").children(".chatboxtextarea");if(isTextarea.length>0){isTextarea[0].focus();$(this).next(".subpanel").children(".chatboxcontent").scrollTop($(this).next(".subpanel").children(".chatboxcontent")[0].scrollHeight)}}return false});$('.subpanel .subpanel_title').live('click',function(){$(".subpanel").hide();$("#drupalchat li a").removeClass('active')});$('.subpanel ul').click(function(e){});$("#chatpanel .subpanel li:not(.link) a").live('click',function(){chatWith($(this).attr("class"),$(this).text())});$(".chatbox .subpanel_title span:not(.min)").live('click',function(){closeChatBox($(this).attr('class'))});if(Drupal.settings.drupalchat.status==1){$(".chat_options .chat_loading").removeClass('chat_loading').addClass('status-2').html(Drupal.settings.drupalchat.goIdle);$("#chatpanel .icon").attr("src",Drupal.settings.drupalchat.images+"chat-1.png")}else if(Drupal.settings.drupalchat.status==2){$(".chat_options .chat_loading").removeClass('chat_loading').addClass('status-1').html(Drupal.settings.drupalchat.goOnline);$("#chatpanel .icon").attr("src",Drupal.settings.drupalchat.images+"chat-2.png")}$(".chat_options .status-1").live('click',function(){$(".chat_options .status-1").removeClass('status-1').addClass('chat_loading');$.post(Drupal.settings.drupalchat.statusUrl,{status:"1"},function(data){$(".chat_options .chat_loading").removeClass('chat_loading').addClass('status-2').html(Drupal.settings.drupalchat.goIdle);$("#chatpanel .icon").attr("src",Drupal.settings.drupalchat.images+"chat-1.png")})});$(".chat_options .status-2").live('click',function(){$(".chat_options .status-2").removeClass('status-2').addClass('chat_loading');$.post(Drupal.settings.drupalchat.statusUrl,{status:"2"},function(data){$(".chat_options .chat_loading").removeClass('chat_loading').addClass('status-1').html(Drupal.settings.drupalchat.goOnline);$("#chatpanel .icon").attr("src",Drupal.settings.drupalchat.images+"chat-2.png")})});$(".chat_options .options").live('click',function(){alert('Under Construction')});setTimeout(function(){chatPoll()},500)});function chatWith(chatboxtitle,chatboxname){createChatBox(chatboxtitle,chatboxname);$("#chatbox_"+chatboxtitle+" a:first").click();$("#chatbox_"+chatboxtitle+" .chatboxtextarea").focus()}function createChatBox(chatboxtitle,chatboxname,chatboxblink){if($("#chatbox_"+chatboxtitle).length>0){if($("#chatbox_"+chatboxtitle).css('display')=='none'){$("#chatbox_"+chatboxtitle).css('display','block')}$("#chatbox_"+chatboxtitle+" .chatboxtextarea").focus();return}$(" <li />").attr("id","chatbox_"+chatboxtitle).addClass("chatbox").html('<a href="#" class="chatboxhead"><span class="subpanel_title_text">'+chatboxname+'</span></a><div class="subpanel"><div class="subpanel_title"><span class="'+chatboxtitle+'">x</span><span class="min">_</span>'+chatboxname+'</div><div class="chatboxcontent"></div><div class="chatboxinput"><textarea class="chatboxtextarea" onkeydown="javascript:return checkChatBoxInputKey(event,this,\''+chatboxtitle+'\');"></textarea></div></div>').prependTo($("#mainpanel"));if(chatboxblink==1){$('#chatbox_'+chatboxtitle+' .chatboxhead').addClass("chatboxblink")}$("#chatbox_"+chatboxtitle+" .chatboxtextarea").blur(function(){$("#chatbox_"+chatboxtitle+" .chatboxtextarea").removeClass('chatboxtextareaselected')}).focus(function(){$('#chatbox_'+chatboxtitle+' .chatboxhead').removeClass('chatboxblink');$("#chatbox_"+chatboxtitle+" .chatboxtextarea").addClass('chatboxtextareaselected')});$("#chatbox_"+chatboxtitle).click(function(){if($('#chatbox_'+chatboxtitle+' .chatboxcontent').css('display')!='none'){$("#chatbox_"+chatboxtitle+" .chatboxtextarea").focus()}});$("#chatbox_"+chatboxtitle).show()}function chatPoll(){if(Drupal.settings.drupalchat.polling_method=='0'){setInterval(function(){$.post(Drupal.settings.drupalchat.pollUrl,{drupalchat_last_timestamp:drupalchat.last_timestamp},processChatData)},(Drupal.settings.drupalchat.refresh_rate)*1000)}else{$.post(Drupal.settings.drupalchat.pollUrl,{drupalchat_last_timestamp:drupalchat.last_timestamp},processChatData)}}function processChatData(data){var drupalchat_messages=Drupal.parseJson(data);if((!drupalchat_messages.status||drupalchat_messages.status==0)){if(drupalchat_messages.messages.length>0){var obj=swfobject.getObjectById("drupalchatbeep");if(obj){obj.drupalchatbeep()}}$.each(drupalchat_messages.messages,function(index,value){chatboxtitle=value.uid1;if($("#chatbox_"+chatboxtitle).length<=0){createChatBox(chatboxtitle,value.name,1)}else if($("#chatbox_"+chatboxtitle+" .subpanel").is(':hidden')){if($("#chatbox_"+chatboxtitle).css('display')=='none'){$("#chatbox_"+chatboxtitle).css('display','block')}$('#chatbox_'+chatboxtitle+' .chatboxhead').addClass("chatboxblink");$("#chatbox_"+chatboxtitle+" .chatboxtextarea").blur(function(){$("#chatbox_"+chatboxtitle+" .chatboxtextarea").removeClass('chatboxtextareaselected')}).focus(function(){$('#chatbox_'+chatboxtitle+' .chatboxhead').removeClass('chatboxblink');$("#chatbox_"+chatboxtitle+" .chatboxtextarea").addClass('chatboxtextareaselected')})}value.message=value.message.replace(/{{drupalchat_newline}}/g,"<br />");value.message=emotify(value.message);if($("#chatbox_"+chatboxtitle+" .chatboxcontent .chatboxusername a:last").html()==value.name){$("#chatbox_"+chatboxtitle+" .chatboxcontent").append('<p>'+value.message+'</p>')}else{var currentTime=new Date();var hours=currentTime.getHours();var minutes=currentTime.getMinutes();if(hours<10){hours="0"+hours}if(minutes<10){minutes="0"+minutes}$("#chatbox_"+chatboxtitle+" .chatboxcontent").append('<div class="chatboxusername"><span class="chatboxtime">'+hours+':'+minutes+'</span><a href="'+Drupal.settings.basePath+'user/'+chatboxtitle+'">'+value.name+'</a></div><p>'+value.message+'</p>')}$("#chatbox_"+chatboxtitle+" .chatboxcontent").scrollTop($("#chatbox_"+chatboxtitle+" .chatboxcontent")[0].scrollHeight);$.titleAlert(Drupal.settings.drupalchat.newMessage,{requireBlur:true,stopOnFocus:true,interval:800})});$('#chatpanel .subpanel ul').empty();$.each(drupalchat_messages.buddylist,function(key,value){if(key!='total'){if(key!=Drupal.settings.drupalchat.uid){$('#chatpanel .subpanel ul').append('<li class="status-'+value.status+'"><a class="'+key+'" href="#">'+value.name+'</a></li>')}}else{$('#chatpanel .online-count').html(value)}});$('#chatpanel .subpanel ul li:last-child').addClass('last');if($('#chatpanel .subpanel ul li').length<=0){$('#chatpanel .subpanel ul').append(Drupal.settings.drupalchat.noUsers)}drupalchat.last_timestamp=drupalchat_messages.last_timestamp}if(Drupal.settings.drupalchat.polling_method!='0'){chatPoll()}}function closeChatBox(chatboxtitle){$('#chatbox_'+chatboxtitle).css('display','none')}function sendMessages(){$.post(Drupal.settings.drupalchat.sendUrl,{drupalchat_uid2:drupalchat.send_current_uid2,drupalchat_message:drupalchat.send_current_message})}function checkChatBoxInputKey(event,chatboxtextarea,chatboxtitle){if(event.keyCode==13&&event.shiftKey==0){message=$(chatboxtextarea).val();message=message.replace(/^\s+|\s+$/g,"");message=message.substr(0,255);$(chatboxtextarea).val('');$(chatboxtextarea).focus();$(chatboxtextarea).css('height','44px');var currentTime=new Date();var hours=currentTime.getHours();var minutes=currentTime.getMinutes();if(hours<10){hours="0"+hours}if(minutes<10){minutes="0"+minutes}if(message!=''){if(Drupal.settings.drupalchat.polling_method=='0'){drupalchat.send_current_uid2=chatboxtitle;if(drupalchat.attach_messages_in_queue==0){setTimeout(function(){sendMessages();drupalchat.attach_messages_in_queue=0},(Drupal.settings.drupalchat.send_rate)*1000);drupalchat.send_current_message=message;drupalchat.attach_messages_in_queue=1}else{drupalchat.send_current_message+='{{drupalchat_newline}}'+message}}else{drupalchat.send_current_uid2=chatboxtitle;drupalchat.send_current_message=message;sendMessages()}message=message.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;");message=emotify(message);if($("#chatbox_"+chatboxtitle+" .chatboxcontent .chatboxusername a:last").html()==Drupal.settings.drupalchat.username){$("#chatbox_"+chatboxtitle+" .chatboxcontent").append('<p>'+message+'</p>')}else{$("#chatbox_"+chatboxtitle+" .chatboxcontent").append('<div class="chatboxusername"><span class="chatboxtime">'+hours+':'+minutes+'</span><a href="'+Drupal.settings.basePath+'user/'+Drupal.settings.drupalchat.uid+'">'+Drupal.settings.drupalchat.username+'</a></div><p>'+message+'</p>')}$("#chatbox_"+chatboxtitle+" .chatboxcontent").scrollTop($("#chatbox_"+chatboxtitle+" .chatboxcontent")[0].scrollHeight)}return false}var adjustedHeight=chatboxtextarea.clientHeight;var maxHeight=94;if(maxHeight>adjustedHeight){adjustedHeight=Math.max(chatboxtextarea.scrollHeight,adjustedHeight);if(maxHeight)adjustedHeight=Math.min(maxHeight,adjustedHeight);if(adjustedHeight>chatboxtextarea.clientHeight)$(chatboxtextarea).css('height',adjustedHeight+8+'px')}else{$(chatboxtextarea).css('overflow','auto')}}$(window).unload(function(){YUI().use('gallery-storage-lite','node-base',function(Y){Y.StorageLite.on('storage-lite:ready',function(){Y.StorageLite.setItem('username',drupalchat.username);Y.StorageLite.setItem('uid',drupalchat.uid);Y.StorageLite.setItem('send_current_message',drupalchat.send_current_message);Y.StorageLite.setItem('last_timestamp',drupalchat.last_timestamp);Y.StorageLite.setItem('send_current_uid2',drupalchat.send_current_uid2);Y.StorageLite.setItem('attach_messages_in_queue',drupalchat.attach_messages_in_queue);Y.StorageLite.setItem('running',drupalchat.running);Y.StorageLite.setItem('drupalchat',$('#drupalchat').html())})})});;
//$Id: ba-emotify.js,v 1.2 2011/01/06 18:01:04 darklrd Exp $
/**
 * Has been modified.
 */
/*!
 * JavaScript Emotify - v0.6 - 11/17/2009
 * http://benalman.com/projects/javascript-emotify/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: JavaScript Emotify: Making the web a better place, one tiny image at a time
//
// *Version: 0.6, Last updated: 11/17/2009*
// 
// Project Home - http://benalman.com/projects/javascript-emotify/
// GitHub       - http://github.com/cowboy/javascript-emotify/
// Source       - http://github.com/cowboy/javascript-emotify/raw/master/ba-emotify.js
// (Minified)   - http://github.com/cowboy/javascript-emotify/raw/master/ba-emotify.min.js (1.1kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// Basic Emotification - http://benalman.com/code/projects/javascript-emotify/examples/emotify/
// Adium Emoticonsets  - http://benalman.com/code/projects/javascript-emotify/examples/adium-emoticonset/
// 
// About: Support and Testing
// 
// Information about what browsers this code has been tested in.
// 
// Browsers Tested - Internet Explorer 6-8, Firefox 3-3.5, Safari 3-4, Chrome, Opera 9.6-10.
// 
// About: Release History
// 
// 0.6 - (11/17/2009) Minor tweaks and bugfixes
// 0.5 - (8/17/2009) Initial release

window.emotify = (function(){
  var emotify,
    EMOTICON_RE,
    emoticons = {},
    lookup = [];
  
  // Function: emotify
  // 
  // Turn text into emotified html. You know, like, with smileys.
  // 
  // Usage:
  // 
  //  > var html = emotify( text [, callback ] );
  // 
  // Arguments:
  // 
  //  text - (String) Non-HTML text containing emoticons to be parsed.
  //  callback - (Function) If specified, this will be called once for each
  //    emoticon with four arguments: img, title, smiley and text. The img and
  //    title arguments are the matched emoticon's stored image url and title
  //    text. The smiley argument is the primary smiley, and the text argument
  //    is the original text that was replaced. If unspecified, the default
  //    emotification function is used.
  // 
  // Returns:
  // 
  //  (String) An HTML string containing inline emoticon image HTML.
  
  emotify = function( txt, callback ) {
    callback = callback || function( img, title, smiley, text ) {
      title = ( title + ', ' + smiley ).replace( /"/g, '&quot;' ).replace( /</g, '&lt;' );
      return '<img width="32" height="32" src="' + img + '" title="' + title + '" alt="" class="smiley"/>';
    };
    
    return txt.replace( EMOTICON_RE, function( a, b, text ) {
      var i = 0,
        smiley = text,
        e = emoticons[ text ];
      
      // If smiley matches on manual regexp, reverse-lookup the smiley.
      if ( !e ) {
        while ( i < lookup.length && !lookup[ i ].regexp.test( text ) ) { i++; };
        smiley = lookup[ i ].name;
        e = emoticons[ smiley ];
      }
      
      // If the smiley was found, return HTML, otherwise the original search string
      return e ? ( b + callback( e[ 0 ], e[ 1 ], smiley, text ) ) : a;
    });
  };
  
  // Method: emotify.emoticons
  // 
  // By default, no emoticons are registered with <emotify>. This method allows
  // you to add one or more emoticons for future emotify parsing.
  // 
  // Usage:
  // 
  //  > emotify.emoticons( [ base_url, ] [ replace_all, ] [ smilies ] );
  // 
  // Arguments:
  // 
  // base_url (String) - An optional string to prepend to all image urls.
  // replace_all (Boolean) - By default, added smileys only overwrite existing
  //   smileys with the same key, leaving the rest. Set this to true to first
  //   remove all existing smileys before adding the new smileys.
  // smilies (Object) - An object containing all the smileys to be added. If
  //   smilies is omitted, the method does nothing but return the current
  //   internal smilies object.
  // 
  // Returns:
  // 
  //  (Object) The internal smilies object. Do not modify this object directly,
  //  use the emotify.emoticons method instead.
  // 
  // A sample emotify.emoticons call and smilies object:
  // 
  //  > emotify.emoticons( "/path/to/images/", {
  //  > 
  //  >   // "smiley": [ image_url, title_text [, alt_smiley ... ] ]
  //  > 
  //  >   ":-)": [ "happy.gif", "happy" ],
  //  >   ":-(": [ "sad.gif", "sad", ":(", "=(", "=-(" ]
  //  > });
  // 
  // In the above example, the happy.gif image would be used to replace all
  // occurrences of :-) in the input text. The callback would be called with the
  // arguments "happy.gif", "happy", ":-)", ":-)" and would generate this html
  // by default: <img src="happy.gif" title="happy, :-)" alt="" class="smiley"/>
  // 
  // The sad.gif image would be used to replace not just :-( in the input text,
  // but also :( and :^(. If the text =( was matched, the callback would be called
  // with the arguments "sad.gif", "sad", ":-(", "=(" and would generate this
  // html by default: <img src="sad.gif" title="sad, :-(" alt="" class="smiley"/>
  // 
  // Visit this URL for a much more tangible example.
  // 
  // http://benalman.com/code/projects/javascript-emotify/examples/emotify/
  
  emotify.emoticons = function() {
    var args = Array.prototype.slice.call( arguments ),
      base_url = typeof args[0] === 'string' ? args.shift() : '',
      replace_all = typeof args[0] === 'boolean' ? args.shift() : false,
      smilies = args[0],
      
      e,
      arr = [],
      alts,
      i,
      regexp_str;
    
    if ( smilies ) {
      
      if ( replace_all ) {
        emoticons = {};
        lookup = [];
      }
      
      for ( e in smilies ) {
        emoticons[ e ] = smilies[ e ];
        emoticons[ e ][ 0 ] = base_url + emoticons[ e ][ 0 ];
      }
      
      // Generate the smiley-match regexp.
      for ( e in emoticons ) {
        
        if ( emoticons[ e ].length > 2 ) {
          // Generate regexp from smiley and alternates.
          alts = emoticons[ e ].slice( 2 ).concat( e );
          
          i = alts.length;
          while ( i-- ) {
        	  if ( typeof( alts[i] ) != 'undefined' )
        	  alts[i] = alts[i].replace( /(\W)/g, '\\$1' );
          }
          
          regexp_str = alts.join( '|' );
          
          // Manual regexp, map regexp back to smiley so we can reverse-match.
          lookup.push({ name: e, regexp: new RegExp( '^' + regexp_str + '$' ) });
          
        } else {
          // Generate regexp from smiley.
          regexp_str = e.replace( /(\W)/g, '\\$1' );
        }
        
        arr.push( regexp_str );
      }
      
      EMOTICON_RE = new RegExp( '(^|\\s)(' + arr.join('|') + ')(?=(?:$|\\s))', 'g' );
    }
    
    return emoticons;
  };
  
  return emotify;
  
})();;
/* $Id: admin_menu.js,v 1.7.2.9 2010/02/20 23:53:18 sun Exp $ */

$(document).ready(function() {
  if (!$('#admin-menu').length) {
    return;
  }

  // Apply margin-top if enabled; directly applying marginTop doesn't work in IE.
  if (Drupal && Drupal.settings && Drupal.settings.admin_menu) {
    if (Drupal.settings.admin_menu.margin_top) {
      $('body').addClass('admin-menu');
    }
    if (Drupal.settings.admin_menu.position_fixed) {
      $('#admin-menu').css('position', 'fixed');
    }
    // Move page tabs into administration menu.
    if (Drupal.settings.admin_menu.tweak_tabs) {
      $('ul.tabs.primary li').each(function() {
        $(this).addClass('admin-menu-tab').appendTo('#admin-menu > ul');
      });
      $('ul.tabs.secondary').appendTo('#admin-menu > ul > li.admin-menu-tab.active').removeClass('secondary');
    }
    // Collapse fieldsets on Modules page. For why multiple selectors see #111719.
    if (Drupal.settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed), #system-modules-1 fieldset:not(.collapsed)').addClass('collapsed');
    }
  }

  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('#admin-menu li').hover(function() {
      $(this).addClass('iehover');
    }, function() {
      $(this).removeClass('iehover');
    });
  }

  // Delayed mouseout.
  $('#admin-menu li').hover(function() {
    // Stop the timer.
    clearTimeout(this.sfTimer);
    // Display child lists.
    $('> ul', this).css({left: 'auto', display: 'block'})
      // Immediately hide nephew lists.
      .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
  }, function() {
    // Start the timer.
    var uls = $('> ul', this);
    this.sfTimer = setTimeout(function() {
      uls.css({left: '-999em', display: 'none'});
    }, 400);
  });
});
;
// $Id: ajax_load.js,v 1.13 2010/01/21 07:24:44 markuspetrux Exp $

(function ($) {

Drupal.AjaxLoad = Drupal.AjaxLoad || { externalStyles: [], externalScripts: [], loadPending: [] };

/**
 * Load JavaScript and CSS files and data.
 */
Drupal.AjaxLoad.loadFiles = function (target, response) {
  // Initialize the list of currently loaded external stylesheets.
  if (!Drupal.AjaxLoad.externalStyles.length) {
    if (Drupal.settings.AjaxLoad && Drupal.settings.AjaxLoad['css']) {
      $.each(Drupal.settings.AjaxLoad['css'], function(i, path) {
        Drupal.AjaxLoad.externalStyles.push(path);
      });
    }
    else {
      $('link[type="text/css"]').each(function() {
        Drupal.AjaxLoad.externalStyles.push($(this).attr('href'));
      });
    }
  }

  // Initialize the list of currently loaded external scripts.
  if (!Drupal.AjaxLoad.externalScripts.length) {
    if (Drupal.settings.AjaxLoad && Drupal.settings.AjaxLoad['scripts']) {
      $.each(Drupal.settings.AjaxLoad['scripts'], function(i, path) {
        Drupal.AjaxLoad.externalScripts.push(path);
      });
    }
    else {
      $('script[src]').each(function() {
        Drupal.AjaxLoad.externalScripts.push($(this).attr('src'));
      });
    }
  }

  // Handle scripts. Do this first so that behaviors can access them easily.
  if (response.scripts) {
    // Each Ajax operation needs its own counter.
    var index = Drupal.AjaxLoad.loadPending.length;
    Drupal.AjaxLoad.loadPending[index] = 0;
    if (!response.__customSettings && response.scripts.setting) {
      $.extend(Drupal.settings, response.scripts.setting);
    }
    // Inline scripts will be handled separately.
    var types = ['core', 'module', 'theme'];
    $.each(types, function (i, type) {
      if (response.scripts[type]) {
        $.each(response.scripts[type], function (src, data) {
          // Load scripts.
          src = Drupal.settings.basePath + src;
          // Test if the script already exists.
          var found = false;
          for (var j = 0; j < Drupal.AjaxLoad.externalScripts.length; j++) {
            if (Drupal.AjaxLoad.externalScripts[j].indexOf(src) == 0) {
              found = true;
              break;
            }
          }
          if (!found) {
            Drupal.AjaxLoad.loadPending[index]++;
            $.getScript(src, function () {
              Drupal.AjaxLoad.externalScripts.push(src);
              Drupal.AjaxLoad.loadComplete(index, target, response);
            });
          }
        });
      }
    });
    // Ensure Drupal behaviors are attached to new content, even when no
    // new external scripts have been loaded.
    if (Drupal.AjaxLoad.loadPending[index] == 0) {
      Drupal.attachBehaviors(target);
      // Ensure inline scripts are parsed after all external scripts have loaded.
      Drupal.AjaxLoad.loadInline(response);
    }
  }

  // Handle stylesheets.
  if (response.css) {
    var types = ['module', 'theme'];
    $.each(response.css, function (media, files) {
      $.each(types, function (i, type) {
        if (files[type]) {
          $.each(files[type], function (src, data) {
            // Load stylesheets.
            src = Drupal.settings.basePath + src;
            // Test if the stylesheet already exists.
            var found = false;
            for (var j = 0; j < Drupal.AjaxLoad.externalStyles.length; j++) {
              if (Drupal.AjaxLoad.externalStyles[j].indexOf(src) == 0) {
                found = true;
                break;
              }
            }
            if (!found) {
              Drupal.AjaxLoad.externalStyles.push(src);
              $('<link type="text/css" rel="stylesheet" media="' + media + '" href="' + src + '" />').appendTo('head');
            }
          });
        }
      });
    });
  }
};

/**
 * Parse inline scripts after all external scripts have loaded.
 */
Drupal.AjaxLoad.loadInline = function(response) {
  // Handle inline scripts.
  if (response.scripts.inline) {
    $.each(response.scripts.inline, function (i, script) {
      // document.write calls would mess things up.
      if (script.code.indexOf('document.write') == -1) {
        eval(script.code);
      }
    });
  }
};

/**
 * When all scripts have loaded, attach behaviors.
 */
Drupal.AjaxLoad.loadComplete = function(index, target, response) {
  Drupal.AjaxLoad.loadPending[index]--;
  if (Drupal.AjaxLoad.loadPending[index] == 0) {
    Drupal.attachBehaviors(target);
    // Ensure inline scripts are parsed after all external scripts have loaded.
    Drupal.AjaxLoad.loadInline(response);
  }
};

})(jQuery);
;
// $Id: og.js,v 1.9.2.3 2010/01/24 14:44:56 amitaibu Exp $

// Content type form
Drupal.behaviors.og_content_type = function() {
  // Disable the group limit textarea if the content type is not a standard group post
  $('input[name="og_content_type_usage"]').click(function(){
    if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
      $('#edit-og-max-groups').attr('disabled','disabled');
    } else {
      $('#edit-og-max-groups').removeAttr('disabled');
    }
  });
  
  // Initial check to see if content type is standard group post
  if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
    $('#edit-og-max-groups').attr('disabled','disabled');
  };
}


Drupal.verticalTabs = Drupal.verticalTabs || {};

Drupal.verticalTabs.og_nodeapi = function() {
  var values = [];
  $('.vertical-tabs-og_nodeapi #edit-og-groups :selected')
    .each(function (i, selected) {
      values[i] = $(selected).text();
    });

  return values.join(', ');
}

Drupal.verticalTabs.og = function() {
  var type = $('.vertical-tabs-og input[type=radio]:checked').val();
  
  switch (type) {
    case 'group':
      return Drupal.t('Group node');
      break;
      
    case 'omitted':
      return Drupal.t('May not be posted into a group.');
      break;
      
    case 'group_post_standard':
      return Drupal.t('Standard group post');
      break;
      
    case 'group_post_wiki':
      return Drupal.t('Wiki group post');
      break;
  }
}
;
// $Id: panels.js,v 1.2.4.1 2009/10/05 22:40:35 merlinofchaos Exp $

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
// Javascript for user_relationships_ui.module

// Creating our own namespace for the module
Drupal.user_relationships_ui = {};

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Any links that we have created in the ui module are
    // Given a click handler so you can display the popup correctly
    $('a.user_relationships_popup_link').click(function(e) {
      var buttoncode = e.which ? e.which : e.button; // msie specific checks does not support e.which
      // If position is fixed, allow for %'s.
      position = Drupal.settings.user_relationships_ui.position.position;
      left = Drupal.settings.user_relationships_ui.position.left;
      xtop = Drupal.settings.user_relationships_ui.position.top;
      
      if(position == "fixed") {
        // If left is defined in a % (.5) calculate left requirement
        if(left <= 1) {
          // Window width * desired - UI width
          left = Math.round(($(window).width()*left) - ($("#user_relationships_popup_form").width()/2));
        }
        // If top is define in a % (.33) calculate top requirement
        if(xtop <= 1) {
          // Window height * desired - UI height (which is an unknown)
          xtop = Math.round(($(window).height()*xtop));// - ($("#user_relationships_popup_form").height()/2));
        }
      } else {
      left = (e.pageX ? e.pageX : e.clientX) + Number(left); // msie specific checks does not support e.page
      if (left + $("#user_relationships_popup_form").width() > $(window).width()) {
        left = (e.pageX ? e.pageX : e.clientX) - $("#user_relationships_popup_form").width();
      }
        xtop = (e.pageY ? e.pageY : e.clientY) + Number(xtop); // msie specific checks does not support e.page
      }
      var href = $(this).attr('href'); // Where we send the ajax request.
      Drupal.user_relationships_ui.showForm(href, position, left, xtop);
      return false;
    });
  });
}

/**
 * Function to display the pertinent form for the user
 *
 * @param href
 *      Ajax url where we will retrieve the form
 * @param pageX
 *      Left value for the event
 * @param pageY
 *      Top value for the event
 */
Drupal.user_relationships_ui.showForm = function(href, position, left, top) {
  // Making sure that any currently open popups will be hidden.
  Drupal.user_relationships_ui.hidePopup();
  // Putting the animation into this

  $('#user_relationships_popup_form')
    .css({top: top + 'px', left: left + 'px', position: position})
    .html(Drupal.user_relationships_ui.loadingAnimation())
    .slideDown();
  // Adding ajax to the href because we need to determine between ajax and regular
  if (href.indexOf('?') == -1) {
    href += '?';
  };
  href += '&ajax=1';
  // Making the ajax request to the server to retrieve the form.
  $.get(href, function(result) {
    $('#user_relationships_popup_form').html(result).slideDown();
    // Making sure the cancel link on each form in the popup closes the popup.
    $('#user_relationships_popup_form a').click(function() {
      Drupal.user_relationships_ui.hidePopup();
      return false;
    });
    //Prevent users from clicking submit button twice
    Drupal.user_relationships_ui.formCheck();
  });
};

/**
 * Function used to return the html that is used to build the.
 * Loading animation when a form is requested by the user.
 */
Drupal.user_relationships_ui.loadingAnimation = function() {
  var html = '<div>';
  html += '<div style="text-align: center; font-weight: bold;">';
  html += Drupal.t('Form Loading');
  html += '</div>';
  html += '<img src="' + Drupal.settings.user_relationships_ui['loadingimage'] + '" border="0" height="20" width="200" />';
  html += '</div>';
  return html;
}

/**
 * Helper function to hide the popup form
 */
Drupal.user_relationships_ui.hidePopup = function() {
  $('#user_relationships_popup_form').slideUp();
}

/**
 * Prevent users from clicking a submit button twice - borrowed from http://drupal.org/project/newswire - thanks, fellows :)
 */
Drupal.user_relationships_ui.formCheck = function() {
  // only apply this to node and comment and new user registration forms
  var forms = $("#user_relationships_popup_form #edit-submit");
  // insert the saving div now to cache it for better performance and to show the loading image
  $('<div id="user_relationships_popup_form_saving"><p class="user_relationships_popup_form_saving">' + Drupal.t('Saving...') + '</p></div>').insertAfter(forms);
  forms.click(function() {
    $(this).siblings("input[type=submit]").hide();
    $(this).hide();
    $("#user_relationships_popup_form_saving").show();
    var notice = function() {
      $('<p id="user_relationships_popup_form_saving_notice">' + Drupal.t('Not saving? Please wait a few seconds, reload this page, and try again.') + '</p>').appendTo("#user_relationships_popup_form_saving").fadeIn();
    };
    // append notice if form saving isn't work, perhaps a timeout issue
    setTimeout(notice, 60000);
  });
};

$(document).ready(function() {
  $('#edit-is-oneway').click(function () {
    if ($('#edit-is-oneway').attr('checked')) {
      $('#edit-is-reciprocal-wrapper').slideDown('slow');
    }
    else {
      $('#edit-is-reciprocal-wrapper').slideUp('slow');
    }
  });
  
  if (!$('#edit-is-oneway').attr('checked')) {
    $('#edit-is-reciprocal-wrapper').hide();
  }
});
;
/**
 * The heartbeat object.
 */
Drupal.heartbeat = Drupal.heartbeat || {};

Drupal.heartbeat.moreLink = null;

/**
 * wait().
 *   Function that shows throbber while waiting a response.
 */
Drupal.heartbeat.wait = function(element, parentSelector) {

  // We wait for a server response and show a throbber 
  // by adding the class heartbeat-messages-waiting.
  Drupal.heartbeat.moreLink = $(element).parents(parentSelector);
  // Disable double-clicking.
  if (Drupal.heartbeat.moreLink.is('.heartbeat-messages-waiting')) {      
    return false;
  }
  Drupal.heartbeat.moreLink.addClass('heartbeat-messages-waiting');
  
}

/**
 * doneWaiting().
 *   Function that is triggered if waiting period is over, to start
 *   normal behavior again.
 */
Drupal.heartbeat.doneWaiting = function() {
  Drupal.heartbeat.moreLink.removeClass('heartbeat-messages-waiting');
}

/**
 * getOlderMessages().
 *   Fetch older messages with ajax.
 */
Drupal.heartbeat.getOlderMessages = function(element, page) {
  Drupal.heartbeat.wait(element, '.heartbeat-more-messages-wrapper');
  $.post(element.href, {block: page ? 0 : 1, ajax: 1}, Drupal.heartbeat.appendMessages);
}

/**
 * pollMessages().
 *   Function that checks and fetches newer messages to the
 *   current stream.
 */
Drupal.heartbeat.pollMessages = function(stream) {

  var stream_selector = '#heartbeat-stream-' + stream;
  
  if ($(stream_selector).length > 0) {
    var href = Drupal.settings.basePath + 'heartbeat/js/poll';
    var uaids = new Array();
    var beats = $(stream_selector + ' .beat-item');
    var firstUaid = 0;
    
    if (beats.length > 0) {    
      firstUaid = $(beats.get(0)).attr('id').replace("beat-item-", "");
      
      beats.each(function(i) {  
        var uaid = parseInt($(this).attr('id').replace("beat-item-", ""));
        uaids.push(uaid);
      });
    }
    
    var post = {
      latestUaid: firstUaid, 
      language: Drupal.settings.heartbeat_language, 
      stream: stream, 
      uaids: uaids.join(',')
    };
    $.event.trigger('heartbeatBeforePoll', [post]); 
    if (firstUaid) {
      $.post(href, post, Drupal.heartbeat.prependMessages);
    }
  }
}

/**
 * appendMessages().
 *   Function that appends older messages to the stream.
 */
Drupal.heartbeat.appendMessages = function(data) {
  
  var result = Drupal.parseJson(data);
  
  var wrapper = Drupal.heartbeat.moreLink.parents('.heartbeat-messages-wrapper');
  Drupal.heartbeat.moreLink.remove();
  wrapper.append(result['data']);
  Drupal.heartbeat.doneWaiting();
    
  // Reattach behaviors for new added html
  Drupal.attachBehaviors($('.heartbeat-messages-wrapper'));
  
}

/**
 * prependMessages().
 *   Append messages to the front of the stream. This done for newer 
 *   messages, often with the auto poller.
 */
Drupal.heartbeat.prependMessages = function(data) {

  var result = Drupal.parseJson(data);
  
  if (result['data'] != '') {
    var stream_selector = '#heartbeat-stream-' + result['stream'];
    // Append the messages
    $(stream_selector + ' .heartbeat-messages-wrapper').prepend(result['data']);
  
    // Update the times in the stream
    var time_updates = result['time_updates'];
    for (uaid in time_updates) {
      $(stream_selector + ' #beat-item-' + uaid).find('.heartbeat_times').text(time_updates[uaid]);
    }
    
    // Reattach behaviors for new added html
    Drupal.attachBehaviors($(stream_selector + ' .heartbeat-messages-wrapper'));
  }
}

/**
 * Document onReady().
 */
$(document).ready(function() {
  var span = 0;
  if (Drupal.settings.heartbeatPollNewerMessages != undefined) {
    for (n in Drupal.settings.heartbeatPollNewerMessages) {
      if (parseInt(Drupal.settings.heartbeatPollNewerMessages[n]) > 0) {
        var interval = (Drupal.settings.heartbeatPollNewerMessages[n] * 1000) + span;
        var poll = setInterval('Drupal.heartbeat.pollMessages("' + n + '")', interval);
        span += 100;
      }
    }  
  }
});;
/* $Id: sweaver_plugin.js,v 1.1.2.8 2010/11/08 10:16:10 jyve Exp $ */

Drupal.Sweaver = Drupal.Sweaver || {};

Drupal.Sweaver.messageTimer = null;
Drupal.Sweaver.changed = false;
Drupal.Sweaver.popup = '';

Drupal.Sweaver.writeCss = function(context) {

  var fullCss = '';
  $.each(Drupal.settings.sweaver['invokes'], function(index, module) {
    var invoke_function = module +'_updateCss';
    var css = window[invoke_function].apply(this);
    if (css != '') {
      fullCss += css;
    }
  });
  $style = $('head style[title="sweaver"]');
  $style.remove();
  $('head').append('<style type="text/css" title="sweaver">' + fullCss + '</style>');
  $('#edit-css-rendered').val(fullCss);

  Drupal.Sweaver.changed = true;
};

$(document).ready(function() {

  // Add sweaver class for extra margin at bottom.
  $('body').addClass('sweaver');

  // Avoid overlap with the localization client.
  if ($('#l10n-client').length > 0) {
    $('#sweaver').css({'bottom': $('#l10n-client .labels').height()});
  }

  // Gather open/close state and tab information
  Drupal.Sweaver.activeTab = Drupal.Sweaver.cookie('sweaver_active_tab') ? Drupal.Sweaver.cookie('sweaver_active_tab') : $('#sweaver-tabs .tab:first').attr('id');
  $('#' + Drupal.Sweaver.activeTab).addClass('active-tab');
  Drupal.Sweaver.cookie('sweaver_active_tab', Drupal.Sweaver.activeTab);
  Drupal.Sweaver.open = Drupal.Sweaver.cookie('sweaver_open') ? Drupal.Sweaver.cookie('sweaver_open') : 'true'; 
  Drupal.Sweaver.cookie('sweaver_open', Drupal.Sweaver.open);

  // Open/close the Sweaver bar.
  $('#sweaver-tabs .close a').click(function(){ 
    Drupal.Sweaver.toggleBar($(this).parent()); 
  });

  // Toggle the horizontal tabs.
  Drupal.Sweaver.container = Drupal.Sweaver.activeTab.substr(4, Drupal.Sweaver.activeTab.length - 4);
  $('#sweaver-tabs .tab a').click(function(){
    Drupal.Sweaver.toggleTabs($(this).parent());   
  });

  // Print messages if any
  if ($('#edit-sweaver-editor-messages').val() != '') {
    Drupal.Sweaver.setMessage($('#edit-sweaver-editor-messages').val(), 5000);
  }

  // toggle vertical tabs
  $('#sweaver .vertical-tabs a').click(function(){
    if (!$(this).hasClass('active')) {
      // handle active classes.
      $('#sweaver .vertical-tabs .active').removeClass('active');
      $(this).addClass('active');
      var id = $(this).parent().attr('id').replace('tab-', '');
      $('#sweaver .vertical-content #container-' + id).siblings().hide();
      $('#sweaver .vertical-content #container-' + id).show();
    }
    return false;
  });

});

/**
 * Separate toggle bar function.
 */
Drupal.Sweaver.toggleBar = function (tab) {
  if (Drupal.Sweaver.open == 'false') {
    $('#sweaver-middle').css('height', 'auto');
    tab.removeClass('active-tab');
    $('#' + Drupal.Sweaver.activeTab).addClass('active-tab');
    Drupal.Sweaver.open = 'true';
  }
  else {
    $('#sweaver-middle').css("height", 0);
    Drupal.Sweaver.activeTab =  $('#sweaver-tabs .active-tab').attr('id');
    tab.addClass('active-tab');
    Drupal.Sweaver.open = 'false';
  }
  // Hide the extra margin at the bottom of the screen.
  $('body').toggleClass('sweaver');
  
  Drupal.Sweaver.toggleClicked();
  Drupal.Sweaver.cookie('sweaver_open', Drupal.Sweaver.open);
}

/**
 * Separate toggle tabs function.
 */
Drupal.Sweaver.toggleTabs = function (tab) {
  // Get the container that has to be shown. 
  var container = tab.attr('id').replace('tab-', '');
  if (container != Drupal.Sweaver.container) {
    //Drupal.Sweaver.toggleBar(tab);  
    if (Drupal.Sweaver.open == 'false') {
      $('#sweaver-middle').css("height", 'auto');
      Drupal.Sweaver.open = 'true';
      $('body').addClass('sweaver');
    }
    tab.siblings().removeClass('active-tab');
    tab.toggleClass('active-tab');
    $('#'+ container + ' > div').show();
    $('#'+ Drupal.Sweaver.container + ' > div').hide();
    Drupal.Sweaver.container = container;
  }
  else {
    Drupal.Sweaver.toggleBar(tab);   
  }
  Drupal.Sweaver.activeTab =  tab.attr('id');
  Drupal.Sweaver.cookie('sweaver_open', Drupal.Sweaver.open);
  Drupal.Sweaver.cookie('sweaver_active_tab', Drupal.Sweaver.activeTab);
  Drupal.Sweaver.hidePopup();
  Drupal.Sweaver.toggleClicked();
};

/**
 * Separate switch tab function. Takes the tab as arguments and the ID's
 * of the containers will be derived from the tabs.
 */
Drupal.Sweaver.toggleClicked = function () {
  if (Drupal.Sweaver.open == 'true' && Drupal.Sweaver.activeTab == 'tab-sweaver_plugin_editor') {
    // Show the outline on all 'clicked' classes.
    $('.sweaver-clicked-temp').removeClass('sweaver-clicked-temp').addClass('sweaver-clicked');
  }
  else {
    // Hide the outline on all 'clicked' elements
    $('.sweaver-clicked').removeClass('sweaver-clicked').addClass('sweaver-clicked-temp');
  }
}

/**
 * Separate switch tab function. Takes the tab as arguments and the ID's
 * of the containers will be derived from the tabs.
 */
Drupal.Sweaver.switchTab = function (remove_tab, show_tab) {
  var container_remove = remove_tab.replace('tab-', '');
  var container_show = show_tab.replace('tab-', '');

  $('#'+ remove_tab).removeClass('active-tab');
  $('#'+ show_tab).toggleClass('active-tab');
  $('#'+ container_remove + ' > div').hide();
  $('#'+ container_show + ' > div').show();
  Drupal.Sweaver.container = container_show;

  Drupal.Sweaver.activeTab = show_tab;
  Drupal.Sweaver.cookie('sweaver_active_tab', show_tab);
  Drupal.Sweaver.hidePopup();
}

/**
 * Display Sweaver messages.
 */
Drupal.Sweaver.setMessage = function(message, timeout) {
  Drupal.Sweaver.setMessagePosition();
  $('#sweaver-messages .message').html(message);
  $('#sweaver-messages').fadeIn('fast');
  Drupal.Sweaver.messageTimer = window.setTimeout(function() {$('#sweaver-messages').fadeOut('normal');}, timeout);

  // Bind close messages.
  $('#sweaver-messages .close').click(function(){
    $('#sweaver-messages').hide();
    clearTimeout(Drupal.Sweaver.messageTimer);
  });

  // Bind resize on window.
  $(window).resize(function(event){
    Drupal.Sweaver.setMessagePosition();
  });
}

/**
 * Set the position of the message.
 */
Drupal.Sweaver.setMessagePosition = function(){
  messageTop = $(window).height() - $('#sweaver').outerHeight() - $('#sweaver-messages').outerHeight() - 7;
  $('#sweaver-messages').css({'top' : messageTop});
}

/**
 * Display a fullscreen popup.
 */
Drupal.Sweaver.showPopup = function(message, width, height) {
  // Close the previous popup - if any.
  if (Drupal.Sweaver.popup != '') {
    $(Drupal.Sweaver.popup).hide();
  }

  // Create popup.
  popup = $('#sweaver-popup');
  $(message).show();
  Drupal.Sweaver.popup = message;
  Drupal.Sweaver.setPopupSize(popup, width, height);
  popup.fadeIn('fast');

  // Bind close button action.
  $('.close', popup).click(function(){
    $(message).hide();
    Drupal.Sweaver.hidePopup();
  });

  // Bind resize on window if no width or height was given
  // and the popup is full screen.
  if (!width && !height) {
    $(window).bind('resize.Drupal.Sweaver', function(event){
      Drupal.Sweaver.setPopupSize(popup);
    });
  }
}

/**
 * Set the popup width and height.
 */
Drupal.Sweaver.setPopupSize = function(popup, width, height) {
  popupBorder = 7;
  // Reset overflow in case we don't need a scrollbar.
  $('.content', popup).css({'overflow-y' : 'hidden'});

  // Calculate width and height.
  var popupWidth = width ? width : $(window).width() - (popupBorder * 2) - parseInt(popup.css('padding-left')) - parseInt(popup.css('padding-right'));
  var popupHeight = height ? height : $(window).height() - $('#sweaver').outerHeight() - (popupBorder * 2) - parseInt(popup.css('padding-top')) - parseInt(popup.css('padding-bottom'));
  $('.content', popup).css({'height' : popupHeight, 'width' : popupWidth});

  // Center the popup in case a width or height was given.
  var popupLeft = width ? (($(window).width() - parseInt(popupWidth)) / 2) : popupBorder;
  var popupTop = height ? (($(window).height() - parseInt(popupHeight)) / 2) : popupBorder;
  popup.css({'left' : popupLeft + 'px', 'top' : popupTop + 'px'});

  // Add scrollbar if in fullscreen mode.
  if (!height) {
    $('.content', popup).css({'overflow-y' : 'scroll'});
  }
}

/**
 * Hide a popup.
 */
Drupal.Sweaver.hidePopup = function() {
  $('#sweaver-popup').hide();
  $(window).unbind('resize.Drupal.Sweaver');
}

/**
 * Set behaviors on link which will open the popup.
 */
Drupal.behaviors.sweaverOpenPopup = function (context) {
  $('#sweaver .popup-link a').click(function() {
    var wrapper = $(this).attr('id').replace('link', 'data');

    popup = $('#sweaver-popup');
    if (popup.is(':visible') && $(this).hasClass('open-tab')) {
      Drupal.Sweaver.hidePopup();
      $(this).removeClass('open-tab');
    }
    else {
      $('#sweaver .open-style-actions').removeClass('open-style-actions');
      $('#sweaver .open-tab').removeClass('open-tab');
      $(this).addClass('open-tab');
      Drupal.Sweaver.showPopup($('#'+ wrapper));
    }
    return false;
  });

  $('#sweaver .form-submit').click(function() {
    Drupal.Sweaver.hidePopup();
  });

  // Open a popup when clicking on an open/save/delete/publish link.
  $('#sweaver .style-actions-link a').click(function() {
    var wrapper = $(this).attr('id').replace('link', 'data');

    popup = $('#sweaver-popup');
    if (popup.is(':visible') && $(this).hasClass('open-style-actions')) {
      Drupal.Sweaver.hidePopup();
      $(this).removeClass('open-style-actions');
    }
    else {
      $('#sweaver .open-style-actions').removeClass('open-style-actions');
      $('#sweaver .open-tab').removeClass('open-tab');
      $(this).addClass('open-style-actions');
      Drupal.Sweaver.hidePopup();
      Drupal.Sweaver.showPopup($('#'+ wrapper), '400px', '200px');
    }
    return false;
  });
};


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
Drupal.Sweaver.cookie = function(name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } 
      else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    // CAUTION: Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + (options.path) : '; path=/';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } 
  else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};;
// $Id: sweaver_plugin_editor.js,v 1.1.2.67 2010/11/08 14:54:00 jyve Exp $

/**
 * Add the sweaver bar at the bottom of the theme
 */

Drupal.Sweaver = Drupal.Sweaver || {};

Drupal.Sweaver.types = new Array(); // A type groups different properties.
Drupal.Sweaver.properties = new Array(); // The actual css properties.
Drupal.Sweaver.selectors = new Array(); // The list of defined selector objects.
Drupal.Sweaver.css = new Object(); // Object with all targets and their properties.
Drupal.Sweaver.path = new Array(); // Full path to the root of the document.
Drupal.Sweaver.pathIndexes = new Array(); // An array with the indexes of all selected items.
Drupal.Sweaver.activePath = ''; // Currently active path including pseudo-classes.
Drupal.Sweaver.safeActivePath = ''; // Currently active path excluding pseudo-classes.
Drupal.Sweaver.activeElement = new Object(); // Currently active element.
Drupal.Sweaver.updateMode = true; // should the form updates be saved in css?
Drupal.Sweaver.changesboxcheck = false; // Changes box check.

/**
 * Hook onload behavior
 */
$(document).ready(function() {

  Drupal.Sweaver.init();

  Drupal.Sweaver.writeCss();

  Drupal.Sweaver.changed = false;

  Drupal.Sweaver.addSliders();

  Drupal.Sweaver.addColorPicker();

  Drupal.Sweaver.updateForm();

  Drupal.Sweaver.bindClicks();

});

/**
 * Implementation of HOOK_updateCss().
 *
 * Return editor css.
 */
function sweaver_plugin_editor_updateCss() {
  var css = '';
  var fullCss = '';
  var cssContent = '';

  for (var key in Drupal.Sweaver.css) {
    var target = Drupal.Sweaver.css[key];
    for (var prop in target) {
      if (Drupal.Sweaver.properties[prop]) {

        var properties = Drupal.Sweaver.properties[prop]['property'].split(' ');
        $.each(properties, function(i, property) {
          // Don't write anything if the value is empty.
          // 0 is not empty!
          if (target[prop] == '' && target[prop] != '0') {
            cssContent += '';
          }
          // Don't add a prefix and suffix for these exceptions.
          else if ((property == 'background-color' && target[prop] == 'transparent') || (property == 'background-image' && target[prop] == 'none')) {
            cssContent += '  ' + property + ': ' + target[prop] + ';\n';
          }
          else {
            cssContent += '  ' + property + ': ' + Drupal.Sweaver.properties[prop].prefix + target[prop] + Drupal.Sweaver.properties[prop].suffix + ';\n';
          }
        });
      }
    }

    if (cssContent != '') {
      css += key + '{\n';
      css += cssContent;
      css += '}\n';
      fullCss += css;
      css = '';
      cssContent = '';
    }
    // Remove key from Drupal.Sweaver.css
    else {
      delete Drupal.Sweaver.css[key];
    }
  }

  // Store css in hidden field in save form
  $("#sweaver #edit-css").val($.toJSON(Drupal.Sweaver.css));

  // Add inline css
  $("#sweaver-form #edit-css").val(fullCss);

  return fullCss;
}

/**
 * Initialize member variables and properties.
 */
Drupal.Sweaver.init = function() {

  // Get previously stored information or create empty object with all targets
  db_css = $("#edit-css");
  if (db_css.val() && db_css.val() != '[]'){
    Drupal.Sweaver.css = $.evalJSON(db_css.val());
    db_css.val('');
  }

  // Get Sweaver selectors.
  Drupal.Sweaver.selectors = Drupal.settings.sweaver['selectors'];

  // Get Sweaver types.
  Drupal.Sweaver.types = Drupal.settings.sweaver['types'];

  // Get Sweaver properties.
  Drupal.Sweaver.properties = Drupal.settings.sweaver['properties'];

  // Get classes that will never be used in the paths or generated css.
  Drupal.Sweaver.excludeClasses = Drupal.settings.sweaver['exclude_classes'];

  // Add a link popup to be able to follow links.
  $('body').append('<a href="#" id="follow-link">' + Drupal.t('Click here to follow this link') + '</a>');
}

/**
 * Get all css values and update the form
 */
Drupal.Sweaver.updateForm = function() {

  // Empty form values and hide unnecessary fields
  Drupal.Sweaver.initForm();

  // Prevent changes from being saved
  Drupal.Sweaver.updateMode = false;

  // Update form with saved settings
  if (Drupal.Sweaver.activePath != '') {
    if ($("#tab-sweaver_plugin_editor").hasClass('active-tab')) {
      $("#sweaver_plugin_editor #sweaver-editor").show();
    }
    var target = '';
    if (!isEmpty(Drupal.Sweaver.activeElement)) {
      var type = Drupal.Sweaver.activeElement.type;
      if (Drupal.Sweaver.types[type]) {
        $.each(Drupal.Sweaver.types[type], function (index, object){
          if (Drupal.Sweaver.properties[object]){
	          var properties = Drupal.Sweaver.properties[object]['property'].split(' ');
	          var tempValue = '';
	          var value = '';
	          $.each(properties, function(i, property) {
	            // Are there pseudo-classes in the active path? If so check the saved css for any values that have been set.
	            // We have do this since jQuery cannot get any values for selectors with pseudo-classes. 
	            if (Drupal.Sweaver.safeActivePath != Drupal.Sweaver.activePath && Drupal.Sweaver.css[Drupal.Sweaver.activePath] && Drupal.Sweaver.css[Drupal.Sweaver.activePath][property]) {
                value = Drupal.Sweaver.properties[property].prefix + Drupal.Sweaver.css[Drupal.Sweaver.activePath][property] + Drupal.Sweaver.properties[property].suffix;  
              }
              else {
                value = $(Drupal.Sweaver.safeActivePath).css(property);
              }
	            if (tempValue == '') {
	              tempValue = value;
	            }
	            else {
	              if (tempValue != value) {
	                value = '';
	                return false;
	              }
	            }
	          });
	          if(value != '' && !isEmpty(Drupal.Sweaver.properties[object]) && Drupal.Sweaver.properties[object].type == 'color') {
	            $('#' + object + ' .colorSelector div').css('cssText', 'background-color: ' + value + ' !important;');
	          }
	          else if (value && !isEmpty(Drupal.Sweaver.properties[object]) && Drupal.Sweaver.properties[object].type == 'image') {
	            // Remove the url() from around the image url.
	            // Mozilla browsers wrap in url(""), while webkit browsers wrap in url()
	            // so we need two replacements.
	            stripped = value.replace('url("', '').replace('")', '').replace('url(', '').replace(')', '');
	            $("#sweaver_plugin_editor #edit-" + object).val(stripped);
	          }
	          else {
	            if (value) {
                // Make the sure it is a the string.
                value = value + '';
	              $("#sweaver_plugin_editor #edit-" + object).val(value.replace('px', ''));
	            }
	          }
          }
        });
      }
    }
  }

  Drupal.Sweaver.updateMode = true;
}

/**
 * Empty form values and hide unnecessary fields.
 */
Drupal.Sweaver.initForm = function() {

  // Hide all sliders, all groups and all containers.
  Drupal.Sweaver.hideOverlays();
  $('#sweaver-editor .sweaver-group').hide();
  $('#sweaver-editor .container').hide();

  if (!isEmpty(Drupal.Sweaver.activeElement)) {
    // Decide which items should be shown or hidden.

    var type = Drupal.Sweaver.activeElement.type;
    $.each(Drupal.Sweaver.properties, function(index, object){
      if(object.name in Drupal.Sweaver.types[type]) {
        $('#sweaver #edit-' + object.name + '-wrapper').show();
        // From the moment that we have an visible element in a group, we need to show that group.
        $('#sweaver #edit-' + object.name + '-wrapper').parents('.sweaver-group').show();
        // From the moment that we have an visible element in a container, we need to show that container.
        $('#sweaver #edit-' + object.name + '-wrapper').parents('.container').show();
      }
      else {
        $('#sweaver #edit-' + object.name + '-wrapper').hide();
      }
    });
  }
}

/**
 * Show colorPicker and hook events to it
 */
Drupal.Sweaver.addColorPicker = function() {
  $('#sweaver .colorSelector').each(function() {
    var object = $(this);
    var property = object.parent().attr('id');
    object.ColorPicker({
      color: '#ffffff',
      // Determine the current color and send it to colorpicker.
      onBeforeShow: function () {
        var current_color_object = {};
        var current_color_value = ($('div', this).css('background-color')).replace('rgba(', '').replace('rgb(', '').replace(')', '').split(',');
        if (current_color_value[0] != 'transparent') {
          current_color_object.r = current_color_value[0];
          current_color_object.g = current_color_value[1];
          current_color_object.b = current_color_value[2];
          $(this).ColorPickerSetColor(current_color_object);
        }
        else {
          current_color_object.r = '255';
          current_color_object.g = '255';
          current_color_object.b = '255';
          $(this).ColorPickerSetColor(current_color_object);
        }
      },
      onShow: function (colpkr) {
        $(colpkr).fadeIn(500);
        if (object.parents('.sweaver-group-content').length == 0) {
          Drupal.Sweaver.hideOverlays();
        }
        return false;
      },
      onHide: function (colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function (hsb, hex, rgb) {
      var preview = hex;
      if (hex != 'transparent') {
        preview = '#'+ hex;
      }
        $('div', object).css('cssText', 'background-color:' + preview + '!important;');
        if (Drupal.Sweaver.updateMode) {
          Drupal.Sweaver.setValue(property, hex);
        }
      }
    });
  });
}

/*
 * Add sliders through jQuery UI
 */
Drupal.Sweaver.addSliders = function() {
  $("#sweaver .slider-value").each(function() {
    $(this).after('<div class="slider-wrapper"><div id="' + $(this).attr('id').substr(5, $(this).attr('id').length - 5) + '-slider" class="slider"></div></div>');
  });

  // Move the slider to the right position on show.
  $("#sweaver .slider-value").click(function() {
    Drupal.Sweaver.updateMode = false;
    $(this).siblings('.slider-wrapper').children().slider("moveTo", $(this).val());
    Drupal.Sweaver.updateMode = true;
  });

  $("#sweaver .slider").each(function() {
    id = $(this).attr('id').replace('-slider', '');
    minSlider = Drupal.Sweaver.properties[id].slider_min;
    if (minSlider == null || minSlider == '') {
      minSlider = 0;
    }
    maxSlider = Drupal.Sweaver.properties[id].slider_max;
    if (maxSlider == null || maxSlider == '') {
      maxSlider = 2000;
    }
    $(this).slider({
      min: minSlider,
      max: maxSlider,
      slide: function(event, ui) {
        id = $(this).attr('id').replace('-slider', '');
        $('#edit-' + id).val(ui.value);
        if (Drupal.Sweaver.updateMode) {
          Drupal.Sweaver.setValue(id, ui.value);
        }
      }
    });
  });
}

/**
 * Loop through all clickable area's and bind click
 */
Drupal.Sweaver.bindClicks = function() {

  // Get a list of selectors to exclude.
  var excludes = Drupal.settings.sweaver['exclude_selectors'];

  // Add hover outline object.
  $('#sweaver-frontend').append('<div style="position: absolute; top: 0; left: 0; border: 2px dotted #ccc" id="#sweaver-hover"></div>');

  // Never select the editor form as themeable.
  // This function appears to be needed, although we exclude on the click bind too.
  $(excludes).click(function(event) {
    event.stopPropagation();
  });

  // Build an object with all the elements that can be hovered/clicked
  var tempSelectors = $('html').find('*').filter(':parents(' + excludes + '):not(' + excludes + ')');

  // When an element is hovered, add a class 'sweaver-hovered'.
  if (Drupal.settings.sweaver['preview_selector']) {
    tempSelectors
    .bind('mouseenter', function(event){
      // Only do something when the content area is visible.
      if (Drupal.Sweaver.visible()) {
        tempObject = $(event.target);
        object = Drupal.Sweaver.buildSweaverObject(tempObject);
        // Loop through the selectors to see if the current item should be selectable.
        if (!object.translation[0]) {
          $.each(tempObject.parents(), function() {
            tempObject = $(this);
            object = Drupal.Sweaver.buildSweaverObject(tempObject);
            if (object.translation[0]) {
              return false;
            }
          });
        }
        // Make sure only one item has the outline.
        $('.sweaver-hovered').removeClass('sweaver-hovered');

        // Don't add the class on elements that cover the entire screen
        // since that would add a, annoying horizontal scrollbar.
        if (tempObject.outerWidth() != $(window).width()) {
          tempObject.addClass('sweaver-hovered');
        }
      }
    })
    .bind('mouseleave', function(event){
      // Loop through the selectors to see if the current item should be selectable.
      if (Drupal.Sweaver.visible()) {
        tempObject = $(this);
        tempObject.removeClass('sweaver-hovered');

        $.each(tempObject.parents(), function() {
          tempObject = $(this);
          object = Drupal.Sweaver.buildSweaverObject(tempObject);
          if (object.translation[0]) {
            return false;
          }
        });
        if (tempObject.outerWidth() != $(window).width()) {
          tempObject.addClass('sweaver-hovered');
        }
      }
    });
  }

  // When an element is clicked, add a class and build the entire path.
  tempSelectors
  .bind('click', function (event) {
    event.stopPropagation();
    // Only do something when the content area is visible.
    if (Drupal.Sweaver.visible()) {

      tempObject = $(event.target);
      object = Drupal.Sweaver.buildSweaverObject(tempObject);

       // If the clicked object is a link, or an element in a link, prevent default behavior.
       $('#follow-link').hide();
       if(object.tag == 'a' || tempObject.parents('a').length > 0) {
         var position = tempObject.offset();
         var clickObject = tempObject;
         if (object.tag != 'a') {
           clickObject = tempObject.parents('a');
         }
         if (object.id != 'follow-link') {
           $('#follow-link').attr('href', clickObject.attr('href')).css({'top' : position.top + clickObject.outerHeight() + 5, 'left': position.left}).fadeIn();
           event.preventDefault();
         }
       }
       // If the clicked object is a button prevent default behavior.
       if(object.tag == 'input' || object.tag == 'label') {
         event.preventDefault();
       }

      // Don't do anything if the clicked object is the 'follow-link' link.
      if (object.id != 'follow-link') {

	      // Only do something if the clicked item is found in the selectors.
	      if (!object.translation[0]) {
	        $.each(tempObject.parents(), function() {
	          tempObject = $(this);
	          object = Drupal.Sweaver.buildSweaverObject(tempObject);
	          if (object.translation[0]) {
	            return false;
	          }
	        });
	      }

	      // clear the old paths.
	      $('#sweaver_plugin_editor .sweaver-header').html('<div id="full-path" class="clear-block"></div><div id="selected-path" class="clear-block"></div>');

        // Initial check for the changesbox.
        if (Drupal.Sweaver.changesboxcheck == false) {
          Drupal.Sweaver.ChangesBox(true);
          Drupal.Sweaver.changesboxcheck = true;
        }

        // Reset some values.
        Drupal.Sweaver.path.length = 0;
        Drupal.Sweaver.pathIndexes.length = 0;
        $("#selected-path").html('<span class="path-label">' + Drupal.t('Selected item: ') + '</span><span class="path-content"></span>');
        $("#full-path").html('<span class="path-label">' + Drupal.t('Full path: ') + '</span><span class="path-content"></span>');

        // Build path with parents.
        Drupal.Sweaver.buildPath(tempObject);
        Drupal.Sweaver.updateForm();
        Drupal.Sweaver.updateScreen();
      }
    }
  });

  // Toggle changes area.
  $('#changes-toggler').click(function(event){
    event.stopPropagation();
    Drupal.Sweaver.ChangesBox(false);
  });

  // Hide sliders and close groups when clicking outside of them.
  $("#sweaver").click(function() {
    Drupal.Sweaver.hideOverlays();
  });

  // Update css when something is changed in the form.
  $("#sweaver_plugin_editor input[id^=edit-], #sweaver_plugin_editor select[id^=edit-]").change(function(){
    if (Drupal.Sweaver.updateMode) {
      Drupal.Sweaver.setValue($(this).attr('name'), $(this).val());
    }
  });

  // Show the slider when a numeric value is entered.
  $("#sweaver_plugin_editor  .slider-value").click(function(event){
    event.stopPropagation();
    $slider = $(this).siblings('.slider-wrapper');

    if ($slider.is(':visible')) {
      // Add an active class for IE position issues.
      $slider.parent().removeClass('active');
      $slider.parents('.sweaver-group').removeClass('active');

      // Close slider again on second click.
      $slider.css({'visibility' : 'hidden'});
    }
    else {
      // Hide all other sliders.
      $('#sweaver_plugin_editor .slider-wrapper').css({'visibility' : 'hidden'});

      // Add an active class for IE position issues.
      $('#sweaver_plugin_editor .form-item, #sweaver_plugin_editor .sweaver-group').removeClass('active');
      $slider.parent().addClass('active');
      $slider.parents('.sweaver-group').addClass('active');

      var left = -($slider.width() / 2) + ($(this).outerWidth() / 2);
      if ($slider.siblings('label').is(':visible')) {
        left += $slider.siblings('label').width();
      }
      var top = $slider.outerHeight();
      $slider.css({'left' : left, 'top' : top}).css({'visibility' : 'visible'});
    }
  });

}

/**
 * Loop through all clickable area's and bind click
 */
Drupal.Sweaver.updateScreen = function() {
  if (Drupal.settings.sweaver['preview_selector']) {
    // Add border around selected element.
    var excludes = Drupal.settings.sweaver['exclude_selectors'];
    $('.sweaver-clicked').removeClass('sweaver-clicked');
    if (Drupal.Sweaver.safeActivePath && $(Drupal.Sweaver.safeActivePath).outerWidth() != $(window).width()) {
      $(Drupal.Sweaver.safeActivePath).filter(':parents(' + excludes + '):not(' + excludes + ')').addClass('sweaver-clicked');
    }
    else {
      // Hide the 'clicked' outlines.
      $('.sweaver-clicked').removeClass('sweaver-clicked');
    }
  }
}

/**
 * Store the parents of a clicked item.
 */
Drupal.Sweaver.buildPath = function(object) {
  var index = 0;

  // Collect info on currently active item.
  Drupal.Sweaver.activeElement = Drupal.Sweaver.buildSweaverObject(object);

  // Add active element to first element in the path array.
  Drupal.Sweaver.path[0] = Drupal.Sweaver.activeElement;

  // Show the currenty active path and the full path.
  Drupal.Sweaver.addToFullPath(index, true);
  Drupal.Sweaver.addToActivePathIndex(0);

  // Traverse all parents and save them in the path array.
  var i = 1;
  var active;
  object.parents().each(function() {

    active = false;
    var parent = Drupal.Sweaver.buildSweaverObject($(this));
    if (parent.translation[0]) {
      Drupal.Sweaver.path[i] = parent;

      // If selector is tagged as 'highlight', automatically select it.
      var match = '';
      $.each(Drupal.Sweaver.selectors, function (index, selector) {
        if (selector.selector == 'sweaver_all_ids' || selector.selector == 'sweaver_all_classes' || selector.selector == 'sweaver_all_tags') {
          return false;
        }
        if (selector.selector == '#' + parent.id || selector.selector == parent.tag) {
          match = selector.selector;
           if (selector.highlight == '1') {
            active = true;
            Drupal.Sweaver.addToActivePathIndex(i);
          }
        } else {
          $.each(parent.classes, function(index, aClass) {
            if (selector.selector == '.' + aClass) {
               match = selector.selector;
               if (selector.highlight == '1') {
                active = true;
                Drupal.Sweaver.addToActivePathIndex(i);
                return false;
              }
            }
          });
        }
        if (match != '') {
         return false;
        }
      });

      // Add all items to the full path except for the html tag.
      if (parent.tag != 'html') {
        Drupal.Sweaver.addToFullPath(i, active);
      }
      i++;
    }
  });
  Drupal.Sweaver.printActivePath();
}

/**
 * Add one item to the full path.
 */
Drupal.Sweaver.addToFullPath = function(index, active) {
  var path_separator = '&nbsp;&gt;&nbsp;';
  var active_class = '';

  // Don't show a seperator after the last item in the path.
  if (index == 0) {
    path_separator = '';
  }

  // Add an active class to the selected items.
  if (active == true) {
    active_class = ' active';
  }

  // Get the list of translated selectors.
  var selectorList = Drupal.Sweaver.path[index].translation;

  // First add the default selector.
  $("#full-path .path-content").prepend('<div class="selector-wrapper' + active_class + '" id="sid-' + index + '"><div class="first-selector"><a title="' + Drupal.t('Click to add this element to the selected path') + '">' + selectorList[0] + '</a></div><div class="selector-separator">' + path_separator + '</div></div>');

  // Next add a popup with all possible selectors.
  var selectors = ''
  for (var i=1; i < selectorList.length; i++) {
    tempClass = '';
    // Add a class active to indicate the preferred selector.
    if (i == 1) {
      tempClass += 'active ';
    }
    if (i == 1) {
      tempClass += 'first ';
    }
    if (i == selectorList.length - 1) {
      tempClass += 'last';
    }
    selectors += '<li class="' + tempClass + '"><a href="#" id="ssid-' + (i-1) + '">' + selectorList[i] + '</a></li>';
  }

  // Finally, add some pseudo-classes.
  var pseudoClasses = '';
  if (Drupal.Sweaver.path[index].tag == 'a') {
    pseudoClasses += '<li class="first"><a href="#">:hover</a></li>';
    pseudoClasses += '<li><a href="#">:visited</a></li>';
    pseudoClasses += '<li><a href="#">:active</a></li>';
    pseudoClasses += '<li class="last"><a href="#" >:link</a></li>'; 
  }
  else {
    pseudoClasses += '<li class="first last"><a href="#" class="hover">:hover</a></li>';
  }

  $("#sid-" + index).prepend('<div class="selector-popup-opener">open</div><div class="selector-popup"><ul class="selectors">' + selectors + '</ul><ul class="pseudoclasses">' + pseudoClasses + '</ul></div>');

  // Bind click to change the active path.
  $('#sid-' + index + ' .first-selector a').click(function() {
    $(this).parent().parent().toggleClass('active');
    Drupal.Sweaver.addToActivePathIndex(index);
    Drupal.Sweaver.printActivePath();
    // Reset the active element as it might have changed.
    Drupal.Sweaver.pathIndexes.sort(function(a,b){return a - b});
    Drupal.Sweaver.activeElement = Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[0]] ? Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[0]] : {} ;
    Drupal.Sweaver.updateForm();
    Drupal.Sweaver.updateScreen();

    // Stop the link from doing anything.
    return false;
  });

  // Change the active path from a popup.
  $('#sid-' + index + ' .selector-popup ul.selectors a').click(function() {
    // Store in the active object that there is a new preferred selector instead of the first one defined in the backend.
    var $link = $(this);
    var i = $link.attr('id').substr(5);
    Drupal.Sweaver.path[index].preferredSelector = i;
    Drupal.Sweaver.printActivePath();
    // Replace the selector in the full path.
    $('#sid-' + index + ' .first-selector a').html(Drupal.Sweaver.objectToReadable(Drupal.Sweaver.path[index])[0]);
    // Add an active class.
    $link.parents('.selector-popup').css({'left' : '-10000px'}).parent().removeClass('open');
    $link.parent().siblings('.active').removeClass('active');
    $link.parent().addClass('active');
    // Update the form.
    Drupal.Sweaver.updateForm();
    Drupal.Sweaver.updateScreen();
    return false;
  });
  
  // Add a pseudo-class from a popup.
  $('#sid-' + index + ' .selector-popup ul.pseudoclasses a').click(function() {
    var $link = $(this);
    // If the link was already active, deactivate it otherwhise add the active class.
    if (!$link.parent().hasClass('active')) {
	    // Add the pseudo-class to the object in question.
	    Drupal.Sweaver.path[index].pseudoClass = $(this).text();
	    // Update the translation of the object in question.
	    Drupal.Sweaver.path[index].translation = Drupal.Sweaver.objectToReadable(Drupal.Sweaver.path[index]);
	    // Update the active path.
	    Drupal.Sweaver.printActivePath();
	    // Change the text in the full path.
	    $('#sid-' + index + ' .first-selector a').html(Drupal.Sweaver.path[index].translation[0]);
	    // Handle all active classes.
	    $link.parent().siblings('.active').removeClass('active');
	    $link.parent().addClass('active');  	    
    }
    else {
      Drupal.Sweaver.path[index].pseudoClass = '';  
      // Update the translation of the object in question.
      Drupal.Sweaver.path[index].translation = Drupal.Sweaver.objectToReadable(Drupal.Sweaver.path[index]);  
      // Update the active path.
      Drupal.Sweaver.printActivePath();   
      // Change the text in the full path.
      $('#sid-' + index + ' .first-selector a').html(Drupal.Sweaver.path[index].translation[0]); 
      // Handle all active classes.
      $link.parent().removeClass('active'); 
	  }
    // Close the popup.
		$link.parents('.selector-popup').css({'left' : '-10000px'}).parent().removeClass('open');
    // Update the form with the new path. 
    Drupal.Sweaver.updateForm();    
    Drupal.Sweaver.updateScreen();
    return false;
  });

  // Hide/show selector popups.
  $('#sid-' + index + ' .selector-popup-opener').click(function() {
    var $popup = $(this).siblings('.selector-popup');
    $this = $(this);
    if ($this.parent().hasClass('open')) {
      $this.parent().removeClass('open');
      $popup.css({'left' : '-10000px'});
    }
    else {
      // Hide other open selector popups.
      $('#sweaver .selector-wrapper.open .selector-popup').css({'left' : '-10000px'});
      $this.parent().addClass('open');
      $this.parent().siblings().removeClass('open');
	    // Calculate the right width.
	    var width = 0;
	    $($popup.children('ul')).each(function() {
	     width += $(this).outerWidth();
	    });
      $popup.css({'width' : width});
      // See if the popup should be opened on the left or the right.
      var offset = $this.offset();
      var left = (offset.left + width) > $(window).width() ? - $popup.outerWidth() :  $this.outerWidth();
      $popup.hide().css({'left' : left});
      // Show the popup.
      $popup.slideDown('fast');
    }
  });
}

/**
 * Add an item to the active path index.
 * This way we can keep track of the selected items in the ful path.
 */
Drupal.Sweaver.addToActivePathIndex = function(i) {
  // Do not add the item when selected or remove it from Active path.
  var position = $.inArray(i, Drupal.Sweaver.pathIndexes);
  if (position < 0) {
    Drupal.Sweaver.pathIndexes.unshift(i);
  }
  else {
    // Remove from pathIndexes if necessary.
    for (var key in Drupal.Sweaver.pathIndexes) {
      if (Drupal.Sweaver.pathIndexes[key] == i) {
        Drupal.Sweaver.pathIndexes.splice(key, 1);
      }
    }
  }
}

/**
 * Print the active path.
 */
Drupal.Sweaver.printActivePath = function() {
  // Reset the previous path and add the next item to pathIndexes.
  $path = $("#selected-path .path-content");
  $path.html('');
  Drupal.Sweaver.activePath = '';
  // Since jquery cannot get a css value when a pseudo-class is in it, we have to create a version
  // of the active patch without the pseudo-classes.
  Drupal.Sweaver.safeActivePath = '';

  // Sort pathIndexes.
  Drupal.Sweaver.pathIndexes.sort(function(a,b){return a - b});

  // Print the selected path in human-readable language.

  if (Drupal.Sweaver.pathIndexes.length > 0) {
    for ( var i=0, len=Drupal.Sweaver.pathIndexes.length; i<len; ++i ){
      if (i > 0) {
        $path.append(' in ');
      }
      // See which translation should be used.
      var j = Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector ? Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector : 0;
      j++;
      $path.append(Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].translation[j]);
    }
    // Save the currently active css path.
    Drupal.Sweaver.pathIndexes.reverse();
    for (var i=0, len=Drupal.Sweaver.pathIndexes.length; i<len; ++i){
      // See which translation should be used.
      var j = Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector ? Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector : 0;
      j++;
      Drupal.Sweaver.activePath += Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].css[j] + Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].pseudoClass + ' ';
      Drupal.Sweaver.safeActivePath += Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].css[j] + ' ';
    }
  }
  else {
    $path.html(Drupal.t('none'));
  }
}

/**
 * Fill the activeElement and update the Form and ActivePath.
 * Other plugins can use this function to set values on the
 * style tab. To switch tabs, you can use the Drupal.Sweaver.switchTab
 * function.
 */
Drupal.Sweaver.updateStyleTab = function(theClass, name) {
  // Build the object with manipulated data.
  var tempObject = Drupal.Sweaver.buildSweaverObject($('.' + theClass));

  tempObject.translation = new Array(name, name);
  tempObject.classes = new Array('.' + theClass);
  tempObject.css = new Array('.' + theClass, '.' + theClass);

  Drupal.Sweaver.activeElement = tempObject;

  // Build path with parents.
  $('#sweaver_plugin_editor .sweaver-header').html('<div id="selected-path" class="clear-block"></div>');
  Drupal.Sweaver.path[0] = new Object({'id' : Drupal.Sweaver.activeElement.id, 'class' : Drupal.Sweaver.activeElement.classes, 'pseudoClass' : '', 'tag' : Drupal.Sweaver.activeElement.tag,  'type' : Drupal.Sweaver.activeElement.type, 'translation' : Drupal.Sweaver.activeElement.translation, 'css' : Drupal.Sweaver.activeElement.css});
  Drupal.Sweaver.addToFullPath(0, true);
  Drupal.Sweaver.pathIndexes = new Array();
  Drupal.Sweaver.addToActivePathIndex(0);
  Drupal.Sweaver.printActivePath();
  Drupal.Sweaver.activePath = '.' + theClass;
  Drupal.Sweaver.updateForm();
  Drupal.Sweaver.updateScreen();
}

/**
 * Store new value and update inline css.
 */
Drupal.Sweaver.setValue = function(property, value) {
  Drupal.Sweaver.css[Drupal.Sweaver.activePath] = Drupal.Sweaver.css[Drupal.Sweaver.activePath] || {};
  Drupal.Sweaver.css[Drupal.Sweaver.activePath][property] = value;
  Drupal.Sweaver.writeCss();

  // Check for state of changes box.
  if (Drupal.Sweaver.cookie('sweaver_changes_box') == 'true') {
    Drupal.Sweaver.writeChanges();
  }
}

/**
 * Write changes to the changes popup so that people can remove them again.
 */
Drupal.Sweaver.writeChanges = function() {
  $('#editor-changes').html('');
  for (key in Drupal.Sweaver.css) {
    var target = Drupal.Sweaver.css[key];
    for (prop in target) {
      if (Drupal.Sweaver.properties[prop] && (target[prop] != '' || target[prop] == '0')) {
      // Special case for transparent.
        if ((prop == 'background-color' && target[prop] == 'transparent') || (prop == 'background-image' && target[prop] == 'none')) {
          $('#editor-changes').prepend($('<p onclick="Drupal.Sweaver.deleteProperty(\'' + key + '\', \'' + prop + '\')">' + key + ': '+ prop + ': ' + target[prop] + '</p>'));
        }
        else {
          $('#editor-changes').prepend($('<p onclick="Drupal.Sweaver.deleteProperty(\'' + key + '\', \'' + prop + '\')">' + key + ': '+ prop + ': ' + Drupal.Sweaver.properties[prop].prefix + target[prop] + Drupal.Sweaver.properties[prop].suffix + '</p>'));
        }
      }
    }
  }
}

/**
 * Delete a property from a selector.
 */
Drupal.Sweaver.deleteProperty = function(key, property) {
  var target = Drupal.Sweaver.css[key];
  Drupal.Sweaver.css[key] = {};
  for (var prop in target) {
    if (prop != property) {
      Drupal.Sweaver.css[key][prop] = target[prop];
    }
  }
  Drupal.Sweaver.writeCss();
  Drupal.Sweaver.writeChanges();
  Drupal.Sweaver.updateForm();
}

/**
 * Translate an parent item in a human-readable name.
 */
Drupal.Sweaver.objectToReadable = function(object) {

  var translation = new Array();
  var id_translation = new Array();
  var class_translation = new Array();
  var tag_translation = new Array();

  var css = new Array();
  var id_css = new Array();
  var class_css = new Array();
  var tag_css = new Array();

  var selector = '';
  var description = '';
  var tempSelectors = new Array();
  var pseudoClass = object.pseudoClass ? object.pseudoClass : '';

  var i = 0;

  // Traverse all selectors defined in the backend and return an array with the description.
  $.each(Drupal.Sweaver.selectors, function() {
    selector = this.selector;
    name = this.name;
    description = this.description;

    if (name == 'allids') {
      if (object.id && $.inArray('#' + object.id, tempSelectors) < 0) {
        id_translation[i] = 'the ' + object.id + ' region';
        id_css[i] = '#' + object.id;
        tempSelectors.push('#' + object.id);
        i++;
      }
    }
    else if (name == 'allclasses') {
      if (object.classes && object.classes[0]) {
        $.each(object.classes, function(index, tempClass) {
          if ($.inArray(tempClass, Drupal.Sweaver.excludeClasses) < 0 && $.inArray('.' + tempClass, tempSelectors) < 0) {
            class_translation[i] = 'all ' + tempClass;
            class_css[i] = '.' + tempClass;
            tempSelectors.push('.' + tempClass);
            i++;
          }
        });
      }
    }
    else if (name == 'alltags' && $.inArray(object.tag, tempSelectors) < 0) {
      tag_translation[i] = object.tag;
      tag_css[i] = object.tag;
      tempSelectors.push(object.tag);
      i++;
    }
    else {
      if (selector == '#' + object.id && $.inArray('#' + object.id, tempSelectors) < 0) {
        id_translation[i] = description;
        id_css[i] = '#' + object.id;
        tempSelectors.push('#' + object.id);
        i++;
      } else if (selector == object.tag && $.inArray(object.tag, tempSelectors) < 0) {
        tag_translation[i] = description;
        tag_css[i] = object.tag;
        tempSelectors.push(object.tag);
        i++;
      } else {
        $.each(object.classes, function(index, tempClass) {
          if (selector == '.' + tempClass  && $.inArray(tempClass, Drupal.Sweaver.excludeClasses) < 0 && $.inArray('.' + tempClass, tempSelectors) < 0) {
            class_translation[i] = description;
            class_css[i] = '.' + tempClass;
            tempSelectors.push('.' + tempClass);
            i++;
          }
        });
      }
    }
  });

  // Merge the translation arrays.
  for (var j = 0; j < i; j++) {
    var k = id_translation[j] ? id_translation[j] : class_translation[j] ? class_translation[j] : tag_translation[j];
    translation[j] = Drupal.Sweaver.addPseudoClass(pseudoClass, k);
  }

  // Merge the css arrays.
  for (var j = 0; j < i; j++) {
    var k = id_css[j] ? id_css[j] : class_css[j] ? class_css[j] : tag_css[j];
    css[j] = k;
  }

  // Add combinations of classes, ids and tags.
  if (Drupal.settings.sweaver['combined_selectors']) {
	  t = i;
	  if (tag_translation.length > 0) {
	    $.each(tag_translation, function(index, tag) {
	      if (tag) {
			    $.each(id_translation, function(index, trans) {
			      if (trans) {
			        translation[t] = Drupal.Sweaver.addPseudoClass(pseudoClass, tag + ' + ' + trans);
			        css[t] = object.tag + id_css[index];
			        t++;
			      }
			    });
		      $.each(class_translation, function(index, trans) {
		        if (trans) {
		          translation[t] = Drupal.Sweaver.addPseudoClass(pseudoClass, tag + ' + ' + trans);
              css[t] = object.tag + class_css[index];
		          t++;
		        }
		      });
		    }
		  });
	  }
  }

  // If a prefered selector was set in the object, return that one instead of the default first one.
  index = object.preferredSelector ? object.preferredSelector : 0;
  translation.splice(0, 0, translation[index]);
  css.splice(0, 0, css[index]);

  object.translation = translation;
  object.css = css;
  return translation;
}

/**
 * Add a pseudo class to the translation.
 */
Drupal.Sweaver.addPseudoClass = function(pseudoClass, original) {
  var translation = pseudoClass ? original + Drupal.t(' in the ' + pseudoClass + ' state') : original;
  return translation;
}

/**
 * Build a Sweaver object.
 */
Drupal.Sweaver.buildSweaverObject = function(object) {
  var tempObject = new Object;
  tempObject.id = object.attr('id');
  tempObject.classes = trim(object.attr('class')).split(' ');
  tempObject.pseudoClass = '';
  tempObject.tag = object.get(0).tagName.toLowerCase();
  tempObject.type = object.css('display');

  // Fallback to block if an unknow type is detected.
  if (!(tempObject.type in Drupal.Sweaver.types)) {
    tempObject.type = 'block';
  }

  // Generate a human-readable name and a css selector.
  Drupal.Sweaver.objectToReadable(tempObject);
  return tempObject;
}

/**
 * Helper function to remove trailing leading and multiple spaces.
 */
function trim(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi,"");
  s = s.replace(/[ ]{2,}/gi," ");
  s = s.replace(/\n /,"\n");
  return s;
}

/**
 * Hide all sliders.
 */
Drupal.Sweaver.hideOverlays = function() {
  $('#sweaver .slider-wrapper').css({'visibility' : 'hidden'});

  // Remove all active classes from form-items and groups
  $('#sweaver_plugin_editor .form-item, #sweaver_plugin_editor .sweaver-group').removeClass('active');
}

/**
 * Open or close the changes box().
 */
Drupal.Sweaver.ChangesBox = function(cookie_check) {

  var show_box = false;
  box = $('#editor-changes');
  toggler = $('#changes-toggler');

  if (cookie_check == true && Drupal.Sweaver.cookie('sweaver_changes_box') == 'true') {
    show_box = true;
  }
  else if (parseInt(box.css('right')) < 0 && cookie_check == false) {
    show_box = true;
  }

  if (show_box == true) {
    Drupal.Sweaver.writeChanges();
    box.css({'right' : '10px'});
    toggler.addClass('open').html(Drupal.t('Hide changes'));
    Drupal.Sweaver.cookie('sweaver_changes_box', true);
  } else {
    box.css({'right' : '-10000px'});
    toggler.removeClass('open').html(Drupal.t('Show changes'));
    Drupal.Sweaver.cookie('sweaver_changes_box', false);
  }
}

/**
 * Check wether the editor tab is visible.
 */
Drupal.Sweaver.visible = function() {
  if (Drupal.Sweaver.open == 'true' && $('#sweaver_plugin_editor .sweaver-content').is(':visible')) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Helper function to check if an object is empty.
 */
function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}


/**
 * Add custom expression to exclude all selectors in the sweaver bar.
 */
$.expr[':'].parents = function(a,i,m){
  return jQuery(a).parents(m[3]).length < 1;
};;
/*
 * jQuery JSON Plugin
 * version: 2.1 (2009-08-14)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org 
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is 
 * copyrighted 2005 by Bob Ippolito.
 */
 
(function($) {
    /** jQuery.toJSON( json-serializble )
        Converts the given argument into a JSON respresentation.

        If an object has a "toJSON" function, that will be used to get the representation.
        Non-integer/string keys are skipped in the object, as are keys that point to a function.

        json-serializble:
            The *thing* to be converted.
     **/
    $.toJSON = function(o)
    {
        if (typeof(JSON) == 'object' && JSON.stringify)
            return JSON.stringify(o);
        
        var type = typeof(o);
    
        if (o === null)
            return "null";
    
        if (type == "undefined")
            return undefined;
        
        if (type == "number" || type == "boolean")
            return o + "";
    
        if (type == "string")
            return $.quoteString(o);
    
        if (type == 'object')
        {
            if (typeof o.toJSON == "function") 
                return $.toJSON( o.toJSON() );
            
            if (o.constructor === Date)
            {
                var month = o.getUTCMonth() + 1;
                if (month < 10) month = '0' + month;

                var day = o.getUTCDate();
                if (day < 10) day = '0' + day;

                var year = o.getUTCFullYear();
                
                var hours = o.getUTCHours();
                if (hours < 10) hours = '0' + hours;
                
                var minutes = o.getUTCMinutes();
                if (minutes < 10) minutes = '0' + minutes;
                
                var seconds = o.getUTCSeconds();
                if (seconds < 10) seconds = '0' + seconds;
                
                var milli = o.getUTCMilliseconds();
                if (milli < 100) milli = '0' + milli;
                if (milli < 10) milli = '0' + milli;

                return '"' + year + '-' + month + '-' + day + 'T' +
                             hours + ':' + minutes + ':' + seconds + 
                             '.' + milli + 'Z"'; 
            }

            if (o.constructor === Array) 
            {
                var ret = [];
                for (var i = 0; i < o.length; i++)
                    ret.push( $.toJSON(o[i]) || "null" );

                return "[" + ret.join(",") + "]";
            }
        
            var pairs = [];
            for (var k in o) {
                var name;
                var type = typeof k;

                if (type == "number")
                    name = '"' + k + '"';
                else if (type == "string")
                    name = $.quoteString(k);
                else
                    continue;  //skip non-string or number keys
            
                if (typeof o[k] == "function") 
                    continue;  //skip pairs where the value is a function.
            
                var val = $.toJSON(o[k]);
            
                pairs.push(name + ":" + val);
            }

            return "{" + pairs.join(", ") + "}";
        }
    };

    /** jQuery.evalJSON(src)
        Evaluates a given piece of json source.
     **/
    $.evalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        return eval("(" + src + ")");
    };
    
    /** jQuery.secureEvalJSON(src)
        Evals JSON in a way that is *more* secure.
    **/
    $.secureEvalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        
        var filtered = src;
        filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
        filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        
        if (/^[\],:{}\s]*$/.test(filtered))
            return eval("(" + src + ")");
        else
            throw new SyntaxError("Error parsing JSON, source is not valid.");
    };

    /** jQuery.quoteString(string)
        Returns a string-repr of a string, escaping quotes intelligently.  
        Mostly a support function for toJSON.
    
        Examples:
            >>> jQuery.quoteString("apple")
            "apple"
        
            >>> jQuery.quoteString('"Where are we going?", she asked.')
            "\"Where are we going?\", she asked."
     **/
    $.quoteString = function(string)
    {
        if (string.match(_escapeable))
        {
            return '"' + string.replace(_escapeable, function (a) 
            {
                var c = _meta[a];
                if (typeof c === 'string') return c;
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };
    
    var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
    
    var _meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    };
})(jQuery);
;
/*
 * jQuery UI 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */(function(C){var I=C.fn.remove,D=C.browser.mozilla&&(parseFloat(C.browser.version)<1.9);C.ui={version:"1.6",plugin:{add:function(K,L,N){var M=C.ui[K].prototype;for(var J in N){M.plugins[J]=M.plugins[J]||[];M.plugins[J].push([L,N[J]])}},call:function(J,L,K){var N=J.plugins[L];if(!N){return }for(var M=0;M<N.length;M++){if(J.options[N[M][0]]){N[M][1].apply(J.element,K)}}}},contains:function(L,K){var J=C.browser.safari&&C.browser.version<522;if(L.contains&&!J){return L.contains(K)}if(L.compareDocumentPosition){return !!(L.compareDocumentPosition(K)&16)}while(K=K.parentNode){if(K==L){return true}}return false},cssCache:{},css:function(J){if(C.ui.cssCache[J]){return C.ui.cssCache[J]}var K=C('<div class="ui-gen">').addClass(J).css({position:"absolute",top:"-5000px",left:"-5000px",display:"block"}).appendTo("body");C.ui.cssCache[J]=!!((!(/auto|default/).test(K.css("cursor"))||(/^[1-9]/).test(K.css("height"))||(/^[1-9]/).test(K.css("width"))||!(/none/).test(K.css("backgroundImage"))||!(/transparent|rgba\(0, 0, 0, 0\)/).test(K.css("backgroundColor"))));try{C("body").get(0).removeChild(K.get(0))}catch(L){}return C.ui.cssCache[J]},hasScroll:function(M,K){if(C(M).css("overflow")=="hidden"){return false}var J=(K&&K=="left")?"scrollLeft":"scrollTop",L=false;if(M[J]>0){return true}M[J]=1;L=(M[J]>0);M[J]=0;return L},isOverAxis:function(K,J,L){return(K>J)&&(K<(J+L))},isOver:function(O,K,N,M,J,L){return C.ui.isOverAxis(O,N,J)&&C.ui.isOverAxis(K,M,L)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(D){var F=C.attr,E=C.fn.removeAttr,H="http://www.w3.org/2005/07/aaa",A=/^aria-/,B=/^wairole:/;C.attr=function(K,J,L){var M=L!==undefined;return(J=="role"?(M?F.call(this,K,J,"wairole:"+L):(F.apply(this,arguments)||"").replace(B,"")):(A.test(J)?(M?K.setAttributeNS(H,J.replace(A,"aaa:"),L):F.call(this,K,J.replace(A,"aaa:"))):F.apply(this,arguments)))};C.fn.removeAttr=function(J){return(A.test(J)?this.each(function(){this.removeAttributeNS(H,J.replace(A,""))}):E.call(this,J))}}C.fn.extend({remove:function(){C("*",this).add(this).each(function(){C(this).triggerHandler("remove")});return I.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var J;if((C.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(C.curCSS(this,"position",1))&&(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!J.length?C(document):J}});C.extend(C.expr[":"],{data:function(K,L,J){return C.data(K,J[3])},tabbable:function(L,M,K){var N=L.nodeName.toLowerCase();function J(O){return !(C(O).is(":hidden")||C(O).parents(":hidden").length)}return(L.tabIndex>=0&&(("a"==N&&L.href)||(/input|select|textarea|button/.test(N)&&"hidden"!=L.type&&!L.disabled))&&J(L))}});function G(M,N,O,L){function K(Q){var P=C[M][N][Q]||[];return(typeof P=="string"?P.split(/,?\s+/):P)}var J=K("getter");if(L.length==1&&typeof L[0]=="string"){J=J.concat(K("getterSetter"))}return(C.inArray(O,J)!=-1)}C.widget=function(K,J){var L=K.split(".")[0];K=K.split(".")[1];C.fn[K]=function(P){var N=(typeof P=="string"),O=Array.prototype.slice.call(arguments,1);if(N&&P.substring(0,1)=="_"){return this}if(N&&G(L,K,P,O)){var M=C.data(this[0],K);return(M?M[P].apply(M,O):undefined)}return this.each(function(){var Q=C.data(this,K);(!Q&&!N&&C.data(this,K,new C[L][K](this,P)));(Q&&N&&C.isFunction(Q[P])&&Q[P].apply(Q,O))})};C[L]=C[L]||{};C[L][K]=function(O,N){var M=this;this.widgetName=K;this.widgetEventPrefix=C[L][K].eventPrefix||K;this.widgetBaseClass=L+"-"+K;this.options=C.extend({},C.widget.defaults,C[L][K].defaults,C.metadata&&C.metadata.get(O)[K],N);this.element=C(O).bind("setData."+K,function(Q,P,R){return M._setData(P,R)}).bind("getData."+K,function(Q,P){return M._getData(P)}).bind("remove",function(){return M.destroy()});this._init()};C[L][K].prototype=C.extend({},C.widget.prototype,J);C[L][K].getterSetter="option"};C.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName)},option:function(L,M){var K=L,J=this;if(typeof L=="string"){if(M===undefined){return this._getData(L)}K={};K[L]=M}C.each(K,function(N,O){J._setData(N,O)})},_getData:function(J){return this.options[J]},_setData:function(J,K){this.options[J]=K;if(J=="disabled"){this.element[K?"addClass":"removeClass"](this.widgetBaseClass+"-disabled")}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(K,L,M){var J=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);L=L||C.event.fix({type:J,target:this.element[0]});return this.element.triggerHandler(J,[L,M],this.options[K])}};C.widget.defaults={disabled:false};C.ui.mouse={_mouseInit:function(){var J=this;this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;return false}});if(C.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(C.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(L){(this._mouseStarted&&this._mouseUp(L));this._mouseDownEvent=L;var K=this,M=(L.which==1),J=(typeof this.options.cancel=="string"?C(L.target).parents().add(L.target).filter(this.options.cancel).length:false);if(!M||J||!this._mouseCapture(L)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){K.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(L)&&this._mouseDelayMet(L)){this._mouseStarted=(this._mouseStart(L)!==false);if(!this._mouseStarted){L.preventDefault();return true}}this._mouseMoveDelegate=function(N){return K._mouseMove(N)};this._mouseUpDelegate=function(N){return K._mouseUp(N)};C(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);if(!C.browser.safari){L.preventDefault()}return true},_mouseMove:function(J){if(C.browser.msie&&!J.button){return this._mouseUp(J)}if(this._mouseStarted){this._mouseDrag(J);return J.preventDefault()}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))}return !this._mouseStarted},_mouseUp:function(J){C(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=true;this._mouseStop(J)}return false},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)},_mouseDelayMet:function(J){return this.mouseDelayMet},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true}};C.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);
/*
 * jQuery UI Slider 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	ui.core.js
 */(function(A){A.fn.unwrap=A.fn.unwrap||function(B){return this.each(function(){A(this).parents(B).eq(0).after(this).remove()})};A.widget("ui.slider",{_init:function(){var B=this;this.element.addClass("ui-slider");this._initBoundaries();this.handle=A(this.options.handle,this.element);if(!this.handle.length){B.handle=B.generated=A(B.options.handles||[0]).map(function(){var D=A("<div/>").addClass("ui-slider-handle").appendTo(B.element);if(this.id){D.attr("id",this.id)}return D[0]})}var C=function(D){this.element=A(D);this.element.data("mouse",this);this.options=B.options;this.element.bind("mousedown",function(){if(B.currentHandle){this.blur(B.currentHandle)}B._focus(this,true)});this._mouseInit()};A.extend(C.prototype,A.ui.mouse,{_mouseCapture:function(){return true},_mouseStart:function(D){return B._start.call(B,D,this.element[0])},_mouseDrag:function(D){return B._drag.call(B,D,this.element[0])},_mouseStop:function(D){return B._stop.call(B,D,this.element[0])},trigger:function(D){this._mouseDown(D)}});A(this.handle).each(function(){new C(this)}).wrap('<a href="#" style="outline:none;border:none;"></a>').parent().bind("click",function(){return false}).bind("focus",function(D){B._focus(this.firstChild)}).bind("blur",function(D){B._blur(this.firstChild)}).bind("keydown",function(D){if(!B.options.noKeyboard){return B._keydown(D.keyCode,this.firstChild)}});this.element.bind("mousedown.slider",function(D){if(A(D.target).is(".ui-slider-handle")){return }B._click.apply(B,[D]);B.currentHandle.data("mouse").trigger(D);B.firstValue=B.firstValue+1});A.each(this.options.handles||[],function(D,E){B.moveTo(E.start,D,true)});if(!isNaN(this.options.startValue)){this.moveTo(this.options.startValue,0,true)}this.previousHandle=A(this.handle[0]);if(this.handle.length==2&&this.options.range){this._createRange()}},destroy:function(){this.element.removeClass("ui-slider ui-slider-disabled").removeData("slider").unbind(".slider");if(this.handle&&this.handle.length){this.handle.unwrap("a");this.handle.each(function(){var B=A(this).data("mouse");B&&B._mouseDestroy()})}this.generated&&this.generated.remove()},_start:function(B,C){var D=this.options;if(D.disabled){return false}this.actualSize={width:this.element.outerWidth(),height:this.element.outerHeight()};if(!this.currentHandle){this._focus(this.previousHandle,true)}this.offset=this.element.offset();this.handleOffset=this.currentHandle.offset();this.clickOffset={top:B.pageY-this.handleOffset.top,left:B.pageX-this.handleOffset.left};this.firstValue=this.value();this._propagate("start",B);this._drag(B,C);return true},_drag:function(C,E){var F=this.options;var B={top:C.pageY-this.offset.top-this.clickOffset.top,left:C.pageX-this.offset.left-this.clickOffset.left};if(!this.currentHandle){this._focus(this.previousHandle,true)}B.left=this._translateLimits(B.left,"x");B.top=this._translateLimits(B.top,"y");if(F.stepping.x){var D=this._convertValue(B.left,"x");D=this._round(D/F.stepping.x)*F.stepping.x;B.left=this._translateValue(D,"x")}if(F.stepping.y){var D=this._convertValue(B.top,"y");D=this._round(D/F.stepping.y)*F.stepping.y;B.top=this._translateValue(D,"y")}B.left=this._translateRange(B.left,"x");B.top=this._translateRange(B.top,"y");if(F.axis!="vertical"){this.currentHandle.css({left:B.left})}if(F.axis!="horizontal"){this.currentHandle.css({top:B.top})}this.currentHandle.data("mouse").sliderValue={x:this._round(this._convertValue(B.left,"x"))||0,y:this._round(this._convertValue(B.top,"y"))||0};if(this.rangeElement){this._updateRange()}this._propagate("slide",C);return false},_stop:function(B){this._propagate("stop",B);if(this.firstValue!=this.value()){this._propagate("change",B)}this._focus(this.currentHandle,true);return false},_round:function(B){return this.options.round?parseInt(B,10):parseFloat(B)},_setData:function(B,C){A.widget.prototype._setData.apply(this,arguments);if(/min|max|steps/.test(B)){this._initBoundaries()}if(B=="range"){C?this.handle.length==2&&this._createRange():this._removeRange()}},_initBoundaries:function(){var B=this.element[0],C=this.options;this.actualSize={width:this.element.outerWidth(),height:this.element.outerHeight()};A.extend(C,{axis:C.axis||(B.offsetWidth<B.offsetHeight?"vertical":"horizontal"),max:!isNaN(parseInt(C.max,10))?{x:parseInt(C.max,10),y:parseInt(C.max,10)}:({x:C.max&&C.max.x||100,y:C.max&&C.max.y||100}),min:!isNaN(parseInt(C.min,10))?{x:parseInt(C.min,10),y:parseInt(C.min,10)}:({x:C.min&&C.min.x||0,y:C.min&&C.min.y||0})});C.realMax={x:C.max.x-C.min.x,y:C.max.y-C.min.y};C.stepping={x:C.stepping&&C.stepping.x||parseInt(C.stepping,10)||(C.steps?C.realMax.x/(C.steps.x||parseInt(C.steps,10)||C.realMax.x):0),y:C.stepping&&C.stepping.y||parseInt(C.stepping,10)||(C.steps?C.realMax.y/(C.steps.y||parseInt(C.steps,10)||C.realMax.y):0)}},_keydown:function(F,E){if(this.options.disabled){return }var C=F;if(/(33|34|35|36|37|38|39|40)/.test(C)){var G=this.options,B,I;if(/(35|36)/.test(C)){B=(C==35)?G.max.x:G.min.x;I=(C==35)?G.max.y:G.min.y}else{var H=/(34|37|40)/.test(C)?"-=":"+=";var D=/(37|38|39|40)/.test(C)?"_oneStep":"_pageStep";B=H+this[D]("x");I=H+this[D]("y")}this.moveTo({x:B,y:I},E);return false}return true},_focus:function(B,C){this.currentHandle=A(B).addClass("ui-slider-handle-active");if(C){this.currentHandle.parent()[0].focus()}},_blur:function(B){A(B).removeClass("ui-slider-handle-active");if(this.currentHandle&&this.currentHandle[0]==B){this.previousHandle=this.currentHandle;this.currentHandle=null}},_click:function(C){var D=[C.pageX,C.pageY];var B=false;this.handle.each(function(){if(this==C.target){B=true}});if(B||this.options.disabled||!(this.currentHandle||this.previousHandle)){return }if(!this.currentHandle&&this.previousHandle){this._focus(this.previousHandle,true)}this.offset=this.element.offset();this.moveTo({y:this._convertValue(C.pageY-this.offset.top-this.currentHandle[0].offsetHeight/2,"y"),x:this._convertValue(C.pageX-this.offset.left-this.currentHandle[0].offsetWidth/2,"x")},null,!this.options.distance)},_createRange:function(){if(this.rangeElement){return }this.rangeElement=A("<div></div>").addClass("ui-slider-range").css({position:"absolute"}).appendTo(this.element);this._updateRange()},_removeRange:function(){this.rangeElement.remove();this.rangeElement=null},_updateRange:function(){var C=this.options.axis=="vertical"?"top":"left";var B=this.options.axis=="vertical"?"height":"width";this.rangeElement.css(C,(this._round(A(this.handle[0]).css(C))||0)+this._handleSize(0,this.options.axis=="vertical"?"y":"x")/2);this.rangeElement.css(B,(this._round(A(this.handle[1]).css(C))||0)-(this._round(A(this.handle[0]).css(C))||0))},_getRange:function(){return this.rangeElement?this._convertValue(this._round(this.rangeElement.css(this.options.axis=="vertical"?"height":"width")),this.options.axis=="vertical"?"y":"x"):null},_handleIndex:function(){return this.handle.index(this.currentHandle[0])},value:function(D,B){if(this.handle.length==1){this.currentHandle=this.handle}if(!B){B=this.options.axis=="vertical"?"y":"x"}var C=A(D!=undefined&&D!==null?this.handle[D]||D:this.currentHandle);if(C.data("mouse").sliderValue){return this._round(C.data("mouse").sliderValue[B])}else{return this._round(((this._round(C.css(B=="x"?"left":"top"))/(this.actualSize[B=="x"?"width":"height"]-this._handleSize(D,B)))*this.options.realMax[B])+this.options.min[B])}},_convertValue:function(C,B){return this.options.min[B]+(C/(this.actualSize[B=="x"?"width":"height"]-this._handleSize(null,B)))*this.options.realMax[B]},_translateValue:function(C,B){return((C-this.options.min[B])/this.options.realMax[B])*(this.actualSize[B=="x"?"width":"height"]-this._handleSize(null,B))},_translateRange:function(D,B){if(this.rangeElement){if(this.currentHandle[0]==this.handle[0]&&D>=this._translateValue(this.value(1),B)){D=this._translateValue(this.value(1,B)-this._oneStep(B),B)}if(this.currentHandle[0]==this.handle[1]&&D<=this._translateValue(this.value(0),B)){D=this._translateValue(this.value(0,B)+this._oneStep(B),B)}}if(this.options.handles){var C=this.options.handles[this._handleIndex()];if(D<this._translateValue(C.min,B)){D=this._translateValue(C.min,B)}else{if(D>this._translateValue(C.max,B)){D=this._translateValue(C.max,B)}}}return D},_translateLimits:function(C,B){if(C>=this.actualSize[B=="x"?"width":"height"]-this._handleSize(null,B)){C=this.actualSize[B=="x"?"width":"height"]-this._handleSize(null,B)}if(C<=0){C=0}return C},_handleSize:function(C,B){return A(C!=undefined&&C!==null?this.handle[C]:this.currentHandle)[0]["offset"+(B=="x"?"Width":"Height")]},_oneStep:function(B){return this.options.stepping[B]||1},_pageStep:function(B){return 10},moveTo:function(F,E,G){var H=this.options;this.actualSize={width:this.element.outerWidth(),height:this.element.outerHeight()};if(E==undefined&&!this.currentHandle&&this.handle.length!=1){return false}if(E==undefined&&!this.currentHandle){E=0}if(E!=undefined){this.currentHandle=this.previousHandle=A(this.handle[E]||E)}if(F.x!==undefined&&F.y!==undefined){var B=F.x,I=F.y}else{var B=F,I=F}if(B!==undefined&&B.constructor!=Number){var D=/^\-\=/.test(B),C=/^\+\=/.test(B);if(D||C){B=this.value(null,"x")+this._round(B.replace(D?"=":"+=",""))}else{B=isNaN(this._round(B))?undefined:this._round(B)}}if(I!==undefined&&I.constructor!=Number){var D=/^\-\=/.test(I),C=/^\+\=/.test(I);if(D||C){I=this.value(null,"y")+this._round(I.replace(D?"=":"+=",""))}else{I=isNaN(this._round(I))?undefined:this._round(I)}}if(H.axis!="vertical"&&B!==undefined){if(H.stepping.x){B=this._round(B/H.stepping.x)*H.stepping.x}B=this._translateValue(B,"x");B=this._translateLimits(B,"x");B=this._translateRange(B,"x");H.animate?this.currentHandle.stop().animate({left:B},(Math.abs(parseInt(this.currentHandle.css("left"),10)-B))*(!isNaN(parseInt(H.animate,10))?H.animate:5)):this.currentHandle.css({left:B})}if(H.axis!="horizontal"&&I!==undefined){if(H.stepping.y){I=this._round(I/H.stepping.y)*H.stepping.y}I=this._translateValue(I,"y");I=this._translateLimits(I,"y");I=this._translateRange(I,"y");H.animate?this.currentHandle.stop().animate({top:I},(Math.abs(parseInt(this.currentHandle.css("top"),10)-I))*(!isNaN(parseInt(H.animate,10))?H.animate:5)):this.currentHandle.css({top:I})}if(this.rangeElement){this._updateRange()}this.currentHandle.data("mouse").sliderValue={x:this._round(this._convertValue(B,"x"))||0,y:this._round(this._convertValue(I,"y"))||0};if(!G){this._propagate("start",null);this._propagate("slide",null);this._propagate("stop",null);this._propagate("change",null)}},_propagate:function(C,B){A.ui.plugin.call(this,C,[B,this.ui()]);this.element.triggerHandler(C=="slide"?C:"slide"+C,[B,this.ui()],this.options[C])},plugins:{},ui:function(B){return{options:this.options,handle:this.currentHandle,value:this.options.axis!="both"||!this.options.axis?this._round(this.value(null,this.options.axis=="vertical"?"y":"x")):{x:this._round(this.value(null,"x")),y:this._round(this.value(null,"y"))},range:this._getRange()}}});A.extend(A.ui.slider,{getter:"value",version:"1.6",defaults:{animate:false,distance:1,handle:".ui-slider-handle",round:true}})})(jQuery);
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 *
 * Dual licensed under the MIT and GPL licenses
 *
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_transparent"><a href="" title="Make transparent" alt="Make transparent">Transparent</a></div><div class="colorpicker_submit"></div><div class="colorpicker_previous_colors"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
        sweaver_add_colors(ev);
        return false;
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
        sweaver_add_colors(ev);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},

      // ************************
      // Sweaver additions
      // ************************

			// Do selection also when clicking.
			clickSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				ev.data = {};
				ev.data.cal = current.cal;
				ev.data.pos = current.pos;
				moveSelector(ev);
			},

			// Add a transparent option as background-color.
			makeTransparent = function(ev) {
				var cal = $(this).parent().parent(), col;
				cal.data('colorpicker').onChange.apply(cal, ['transparent', 'transparent', 'transparent']);
				return false;
			},

      // Select previous color.
      selectPreviousColor = function(ev) {

        // Create new color.
        var new_color = {};
        color = $(this).css('background-color').replace('rgb(', '').replace(')', '').split(',');
        new_color.r = color[0];
        new_color.g = color[1];
        new_color.b = color[2];
        new_color = fixRGB(new_color);
        new_color = RGBToHSB(new_color);
        new_color = fixHSB(new_color);

        var cal = $(this).parent().parent(), col;

        // Set the new color.
        fillRGBFields(new_color, cal);
        fillHexFields(new_color, cal);
        fillHSBFields(new_color, cal);
        setSelector(new_color, cal);
        setHue(new_color, cal);
        setNewColor(new_color, cal);
        cal.data('colorpicker').onChange.apply(cal, [new_color, HSBToHex(new_color), HSBToRGB(new_color)]);

        // Update pallet.
        sweaver_add_colors(ev);
      },

      // Add previous colors.
      sweaver_add_colors = function (ev) {
        colors = '';
        var new_color = '';
        previous_colors = new Array;

        for (var key in Drupal.Sweaver.css) {
          var target = Drupal.Sweaver.css[key];
          for (var prop in target) {
            if (Drupal.Sweaver.properties[prop]) {
              var properties = Drupal.Sweaver.properties[prop]['property'].split(' ');
              $.each(properties, function(i, property) {
                // Don't add a prefix and suffix for these exceptions.
                if ((property == 'background-color' || property == 'color') && target[prop] != 'transparent' && $.inArray(target[prop], previous_colors) < 0) {
                  previous_colors.push(target[prop]);
                  colors += '<div class="colorpicker_previous_colors_color" style="background-color: #'+ target[prop] +';"></div>';
                }
              });
            }
          }
        }

        var cal = $(this).parent().parent(), col;

        $('.colorpicker_previous_colors').html(colors);
        // Bind on colorpicker_previous_colors_color.
        $('.colorpicker_previous_colors_color').bind('click', selectPreviousColor);
      },

      // ************************
      // End of sweaver additions
      // ************************

			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
        sweaver_add_colors(ev);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
        sweaver_add_colors(ev);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			},
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {

				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;

        // Sweaver : round to avoid minor differences when re-selecting colors.
        hsb.h = Math.round(hsb.h);
        hsb.s = Math.round(hsb.s);
        hsb.b = Math.round(hsb.b);

				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						// Also add clickselector on click.
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector).bind('click', clickSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						// Transparent.
						cal.find('div.colorpicker_transparent a').bind('click', makeTransparent);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
/* $Id: sweaver_plugin_styles.js,v 1.1.2.11 2010/11/03 22:57:29 swentel Exp $ */

/**
 * @file
 * Styles javascript.
 */

/**
 * Start autosave poller.
 */
$(document).ready(function() {
  var span = 0;
  if (Drupal.settings.sweaver['autosave'] != undefined) {
	var interval = Drupal.settings.sweaver['autosave'];
    if (parseInt(interval) > 0) {
      var interval = (interval * 1000) + span;
      var autosave = setInterval('Drupal.Sweaver.AutoSave()', interval);
      span += 100;
    }
  }
});

/**
 * Autosave function.
 */
Drupal.Sweaver.AutoSave = function(context) {
  if (Drupal.Sweaver.changed) {
    Drupal.Sweaver.changed = false;
	  
    // Get values for css, customcss & palette (if available)
    var css = $('#edit-css').val();
    if ($('#edit-sweaver-plugin-custom-css').length) {
      var customcss = $('#edit-sweaver-plugin-custom-css').val();      
    }
    else {
      var customcss = '';            
    }
    if ($('#edit-sweaver-plugin-palette').length) {
      var palette = $('#edit-sweaver-plugin-palette').val();
    }
    else {
      var palette = '';
    }

    $.ajax({
      type: "POST",
      url: Drupal.settings.basePath + 'index.php?q=sweaver-autosave',
      data: {
        css: css,
        customcss: customcss,
        palette: palette        
      },
      dataType: 'json',
      timeout: 5000,
      success: function(data){
        if (typeof data['message'] == 'undefined' || data['message'] != 0) {
          Drupal.Sweaver.setMessage(Drupal.t('Your changes have been saved.'), 2000);
        }
        if (typeof data['error'] == 'undefined' || data['error'] != 0) {
          Drupal.Sweaver.setMessage(Drupal.t('Your changes have been saved.'), 2000);
        }
      },
      error: function() {
        Drupal.Sweaver.setMessage(Drupal.t('There was an error saving current changes!'), 2000);
      }
    });
    return false;
  }	  
}

/**
 * Behaviors for style actions.
 */
Drupal.behaviors.StylesActions = function(context) {
  $("#style-actions-data-1 select.radio-style-save-type").change(function() {
    var radio_style_save_type = $("#style-actions-data-1 select.radio-style-save-type option:selected").val();
    if (radio_style_save_type == 1) {
      $('#edit-save-style').hide();
      $('#edit-style-existing-id').show();
    }
    else {
      $('#edit-save-style').show();
      $('#edit-style-existing-id').hide();
    }
  });

  $("#sweaver-popup #edit-delete-confirm").click(function() {
    $('#sweaver-popup .delete-style-confirm').hide();
    $('#sweaver-popup .delete-style-question').show();
    return false;
  });

  $("#sweaver-popup #edit-delete-cancel").click(function() {
    $('#sweaver-popup .delete-style-confirm').show();
    $('#sweaver-popup .delete-style-question').hide();
    return false;
  });
};
/*
 * jQuery UI Draggable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */(function(A){A.widget("ui.draggable",A.extend({},A.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return }this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(B){var C=this.options;if(this.helper||C.disabled||A(B.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(B);if(!this.handle){return false}return true},_mouseStart:function(B){var C=this.options;this.helper=this._createHelper(B);this._cacheHelperProportions();if(A.ui.ddmanager){A.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:B.pageX-this.offset.left,top:B.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});if(C.cursorAt){this._adjustOffsetFromHelper(C.cursorAt)}this.originalPosition=this._generatePosition(B);if(C.containment){this._setContainment()}this._propagate("start",B);this._cacheHelperProportions();if(A.ui.ddmanager&&!C.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,B)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(B,true);return true},_mouseDrag:function(B,C){this.position=this._generatePosition(B);this.positionAbs=this._convertPositionTo("absolute");if(!C){this.position=this._propagate("drag",B)||this.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,B)}return false},_mouseStop:function(C){var D=false;if(A.ui.ddmanager&&!this.options.dropBehaviour){var D=A.ui.ddmanager.drop(this,C)}if((this.options.revert=="invalid"&&!D)||(this.options.revert=="valid"&&D)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,D))){var B=this;A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){B._propagate("stop",C);B._clear()})}else{this._propagate("stop",C);this._clear()}return false},_getHandle:function(B){var C=!this.options.handle||!A(this.options.handle,this.element).length?true:false;A(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==B.target){C=true}});return C},_createHelper:function(C){var D=this.options;var B=A.isFunction(D.helper)?A(D.helper.apply(this.element[0],[C])):(D.helper=="clone"?this.element.clone():this.element);if(!B.parents("body").length){B.appendTo((D.appendTo=="parent"?this.element[0].parentNode:D.appendTo))}if(B[0]!=this.element[0]&&!(/(fixed|absolute)/).test(B.css("position"))){B.css("position","absolute")}return B},_adjustOffsetFromHelper:function(B){if(B.left!=undefined){this.offset.click.left=B.left+this.margins.left}if(B.right!=undefined){this.offset.click.left=this.helperProportions.width-B.right+this.margins.left}if(B.top!=undefined){this.offset.click.top=B.top+this.margins.top}if(B.bottom!=undefined){this.offset.click.top=this.helperProportions.height-B.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var B=this.offsetParent.offset();if((this.offsetParent[0]==document.body&&A.browser.mozilla)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){B={top:0,left:0}}return{top:B.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:B.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var B=this.element.position();return{top:B.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:B.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var E=this.options;if(E.containment=="parent"){E.containment=this.helper[0].parentNode}if(E.containment=="document"||E.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(E.containment=="document"?document:window).width()-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left-(parseInt(this.element.css("marginRight"),10)||0),(A(E.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top-(parseInt(this.element.css("marginBottom"),10)||0)]}if(!(/^(document|window|parent)$/).test(E.containment)){var C=A(E.containment)[0];var D=A(E.containment).offset();var B=(A(C).css("overflow")!="hidden");this.containment=[D.left+(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top,D.left+(B?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left,D.top+(B?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(D,F){if(!F){F=this.position}var C=D=="absolute"?1:-1;var B=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],E=(/(html|body)/i).test(B[0].tagName);return{top:(F.top+this.offset.relative.top*C+this.offset.parent.top*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(E?0:B.scrollTop()))*C+this.margins.top*C),left:(F.left+this.offset.relative.left*C+this.offset.parent.left*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(E?0:B.scrollLeft()))*C+this.margins.left*C)}},_generatePosition:function(D){var G=this.options,C=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],H=(/(html|body)/i).test(C[0].tagName);var B={top:(D.pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(H?0:C.scrollTop()))),left:(D.pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():H?0:C.scrollLeft()))};if(!this.originalPosition){return B}if(this.containment){if(B.left<this.containment[0]){B.left=this.containment[0]}if(B.top<this.containment[1]){B.top=this.containment[1]}if(B.left>this.containment[2]){B.left=this.containment[2]}if(B.top>this.containment[3]){B.top=this.containment[3]}}if(G.grid){var F=this.originalPosition.top+Math.round((B.top-this.originalPosition.top)/G.grid[1])*G.grid[1];B.top=this.containment?(!(F<this.containment[1]||F>this.containment[3])?F:(!(F<this.containment[1])?F-G.grid[1]:F+G.grid[1])):F;var E=this.originalPosition.left+Math.round((B.left-this.originalPosition.left)/G.grid[0])*G.grid[0];B.left=this.containment?(!(E<this.containment[0]||E>this.containment[2])?E:(!(E<this.containment[0])?E-G.grid[0]:E+G.grid[0])):E}return B},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_propagate:function(C,B){A.ui.plugin.call(this,C,[B,this._uiHash()]);if(C=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return this.element.triggerHandler(C=="drag"?C:"drag"+C,[B,this._uiHash()],this.options[C])},plugins:{},_uiHash:function(B){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,options:this.options}}}));A.extend(A.ui.draggable,{version:"1.6",defaults:{appendTo:"parent",axis:false,cancel:":input",connectToSortable:false,containment:false,cssNamespace:"ui",cursor:"default",cursorAt:null,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:1,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:null}});A.ui.plugin.add("draggable","connectToSortable",{start:function(B,D){var C=A(this).data("draggable");C.sortables=[];A(D.options.connectToSortable).each(function(){A(this+"").each(function(){if(A.data(this,"sortable")){var E=A.data(this,"sortable");C.sortables.push({instance:E,shouldRevert:E.options.revert});E._refreshItems();E._propagate("activate",B,C)}})})},stop:function(B,D){var C=A(this).data("draggable");A.each(C.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;C.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(B);this.instance.element.triggerHandler("sortreceive",[B,A.extend(this.instance._ui(),{sender:C.element})],this.instance.options["receive"]);this.instance.options.helper=this.instance.options._helper;if(C.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._propagate("deactivate",B,C)}})},drag:function(C,F){var E=A(this).data("draggable"),B=this;var D=function(I){var N=this.offset.click.top,M=this.offset.click.left;var G=this.positionAbs.top,K=this.positionAbs.left;var J=I.height,L=I.width;var O=I.top,H=I.left;return A.ui.isOver(G+N,K+M,O,H,J,L)};A.each(E.sortables,function(G){if(D.call(E,this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=A(B).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return F.helper[0]};C.target=this.instance.currentItem[0];this.instance._mouseCapture(C,true);this.instance._mouseStart(C,true,true);this.instance.offset.click.top=E.offset.click.top;this.instance.offset.click.left=E.offset.click.left;this.instance.offset.parent.left-=E.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=E.offset.parent.top-this.instance.offset.parent.top;E._propagate("toSortable",C)}if(this.instance.currentItem){this.instance._mouseDrag(C)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._mouseStop(C,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}E._propagate("fromSortable",C)}}})}});A.ui.plugin.add("draggable","cursor",{start:function(C,D){var B=A("body");if(B.css("cursor")){D.options._cursor=B.css("cursor")}B.css("cursor",D.options.cursor)},stop:function(B,C){if(C.options._cursor){A("body").css("cursor",C.options._cursor)}}});A.ui.plugin.add("draggable","iframeFix",{start:function(B,C){A(C.options.iframeFix===true?"iframe":C.options.iframeFix).each(function(){A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")})},stop:function(B,C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});A.ui.plugin.add("draggable","opacity",{start:function(C,D){var B=A(D.helper);if(B.css("opacity")){D.options._opacity=B.css("opacity")}B.css("opacity",D.options.opacity)},stop:function(B,C){if(C.options._opacity){A(C.helper).css("opacity",C.options._opacity)}}});A.ui.plugin.add("draggable","scroll",{start:function(C,D){var E=D.options;var B=A(this).data("draggable");if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){B.overflowOffset=B.scrollParent.offset()}},drag:function(D,E){var F=E.options,B=false;var C=A(this).data("draggable");if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){if((C.overflowOffset.top+C.scrollParent[0].offsetHeight)-D.pageY<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop+F.scrollSpeed}else{if(D.pageY-C.overflowOffset.top<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop-F.scrollSpeed}}if((C.overflowOffset.left+C.scrollParent[0].offsetWidth)-D.pageX<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft+F.scrollSpeed}else{if(D.pageX-C.overflowOffset.left<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft-F.scrollSpeed}}}else{if(D.pageY-A(document).scrollTop()<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)}else{if(A(window).height()-(D.pageY-A(document).scrollTop())<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)}}if(D.pageX-A(document).scrollLeft()<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)}else{if(A(window).width()-(D.pageX-A(document).scrollLeft())<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)}}}if(B!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(C,D)}if(B!==false&&C.cssPosition=="absolute"&&C.scrollParent[0]!=document&&A.ui.contains(C.scrollParent[0],C.offsetParent[0])){C.offset.parent=C._getParentOffset()}if(B!==false&&C.cssPosition=="relative"&&!(C.scrollParent[0]!=document&&C.scrollParent[0]!=C.offsetParent[0])){C.offset.relative=C._getRelativeOffset()}}});A.ui.plugin.add("draggable","snap",{start:function(B,D){var C=A(this).data("draggable");C.snapElements=[];A(D.options.snap.constructor!=String?(D.options.snap.items||":data(draggable)"):D.options.snap).each(function(){var F=A(this);var E=F.offset();if(this!=C.element[0]){C.snapElements.push({item:this,width:F.outerWidth(),height:F.outerHeight(),top:E.top,left:E.left})}})},drag:function(M,K){var E=A(this).data("draggable");var Q=K.options.snapTolerance;var P=K.absolutePosition.left,O=P+E.helperProportions.width,D=K.absolutePosition.top,C=D+E.helperProportions.height;for(var N=E.snapElements.length-1;N>=0;N--){var L=E.snapElements[N].left,J=L+E.snapElements[N].width,I=E.snapElements[N].top,S=I+E.snapElements[N].height;if(!((L-Q<P&&P<J+Q&&I-Q<D&&D<S+Q)||(L-Q<P&&P<J+Q&&I-Q<C&&C<S+Q)||(L-Q<O&&O<J+Q&&I-Q<D&&D<S+Q)||(L-Q<O&&O<J+Q&&I-Q<C&&C<S+Q))){if(E.snapElements[N].snapping){(E.options.snap.release&&E.options.snap.release.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=false;continue}if(K.options.snapMode!="inner"){var B=Math.abs(I-C)<=Q;var R=Math.abs(S-D)<=Q;var G=Math.abs(L-O)<=Q;var H=Math.abs(J-P)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I-E.helperProportions.height,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L-E.helperProportions.width}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J}).left}}var F=(B||R||G||H);if(K.options.snapMode!="outer"){var B=Math.abs(I-D)<=Q;var R=Math.abs(S-C)<=Q;var G=Math.abs(L-P)<=Q;var H=Math.abs(J-O)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S-E.helperProportions.height,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J-E.helperProportions.width}).left}}if(!E.snapElements[N].snapping&&(B||R||G||H||F)){(E.options.snap.snap&&E.options.snap.snap.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=(B||R||G||H||F)}}});A.ui.plugin.add("draggable","stack",{start:function(B,C){var D=A.makeArray(A(C.options.stack.group)).sort(function(F,E){return(parseInt(A(F).css("zIndex"),10)||C.options.stack.min)-(parseInt(A(E).css("zIndex"),10)||C.options.stack.min)});A(D).each(function(E){this.style.zIndex=C.options.stack.min+E});this[0].style.zIndex=C.options.stack.min+D.length}});A.ui.plugin.add("draggable","zIndex",{start:function(C,D){var B=A(D.helper);if(B.css("zIndex")){D.options._zIndex=B.css("zIndex")}B.css("zIndex",D.options.zIndex)},stop:function(B,C){if(C.options._zIndex){A(C.helper).css("zIndex",C.options._zIndex)}}})})(jQuery);
/*
 * jQuery UI Droppable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */(function(A){A.widget("ui.droppable",{_init:function(){var C=this.options,B=C.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&A.isFunction(this.options.accept)?this.options.accept:function(D){return D.is(B)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};A.ui.ddmanager.droppables[this.options.scope]=A.ui.ddmanager.droppables[this.options.scope]||[];A.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-droppable"))},destroy:function(){var B=A.ui.ddmanager.droppables[this.options.scope];for(var C=0;C<B.length;C++){if(B[C]==this){B.splice(C,1)}}this.element.removeClass("ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(B,C){if(B=="accept"){this.options.accept=C&&A.isFunction(C)?C:function(D){return D.is(accept)}}else{A.widget.prototype._setData.apply(this,arguments)}},_activate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"activate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropactivate",[C,this.ui(B)],this.options.activate)}},_deactivate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"deactivate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropdeactivate",[C,this.ui(B)],this.options.deactivate)}},_over:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"over",[C,this.ui(B)]);this.element.triggerHandler("dropover",[C,this.ui(B)],this.options.over)}},_out:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"out",[C,this.ui(B)]);this.element.triggerHandler("dropout",[C,this.ui(B)],this.options.out)}},_drop:function(C,D){var B=D||A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return false}var E=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var F=A.data(this,"droppable");if(F.options.greedy&&A.ui.intersect(B,A.extend(F,{offset:F.element.offset()}),F.options.tolerance)){E=true;return false}});if(E){return false}if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"drop",[C,this.ui(B)]);this.element.triggerHandler("drop",[C,this.ui(B)],this.options.drop);return this.element}return false},plugins:{},ui:function(B){return{draggable:(B.currentItem||B.element),helper:B.helper,position:B.position,absolutePosition:B.positionAbs,options:this.options,element:this.element}}});A.extend(A.ui.droppable,{version:"1.6",defaults:{accept:"*",activeClass:null,cssNamespace:"ui",greedy:false,hoverClass:null,scope:"default",tolerance:"intersect"}});A.ui.intersect=function(O,I,M){if(!I.offset){return false}var D=(O.positionAbs||O.position.absolute).left,C=D+O.helperProportions.width,L=(O.positionAbs||O.position.absolute).top,K=L+O.helperProportions.height;var F=I.offset.left,B=F+I.proportions.width,N=I.offset.top,J=N+I.proportions.height;switch(M){case"fit":return(F<D&&C<B&&N<L&&K<J);break;case"intersect":return(F<D+(O.helperProportions.width/2)&&C-(O.helperProportions.width/2)<B&&N<L+(O.helperProportions.height/2)&&K-(O.helperProportions.height/2)<J);break;case"pointer":var G=((O.positionAbs||O.position.absolute).left+(O.clickOffset||O.offset.click).left),H=((O.positionAbs||O.position.absolute).top+(O.clickOffset||O.offset.click).top),E=A.ui.isOver(H,G,N,F,I.proportions.height,I.proportions.width);return E;break;case"touch":return((L>=N&&L<=J)||(K>=N&&K<=J)||(L<N&&K>J))&&((D>=F&&D<=B)||(C>=F&&C<=B)||(D<F&&C>B));break;default:return false;break}};A.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(E,G){var B=A.ui.ddmanager.droppables[E.options.scope];var F=G?G.type:null;var H=(E.currentItem||E.element).find(":data(droppable)").andSelf();droppablesLoop:for(var D=0;D<B.length;D++){if(B[D].options.disabled||(E&&!B[D].options.accept.call(B[D].element,(E.currentItem||E.element)))){continue}for(var C=0;C<H.length;C++){if(H[C]==B[D].element[0]){B[D].proportions.height=0;continue droppablesLoop}}B[D].visible=B[D].element.css("display")!="none";if(!B[D].visible){continue}B[D].offset=B[D].element.offset();B[D].proportions={width:B[D].element[0].offsetWidth,height:B[D].element[0].offsetHeight};if(F=="dragstart"||F=="sortactivate"){B[D]._activate.call(B[D],G)}}},drop:function(B,C){var D=false;A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(!this.options){return }if(!this.options.disabled&&this.visible&&A.ui.intersect(B,this,this.options.tolerance)){D=this._drop.call(this,C)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element,(B.currentItem||B.element))){this.isout=1;this.isover=0;this._deactivate.call(this,C)}});return D},drag:function(B,C){if(B.options.refreshPositions){A.ui.ddmanager.prepareOffsets(B,C)}A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return }var E=A.ui.intersect(B,this,this.options.tolerance);var G=!E&&this.isover==1?"isout":(E&&this.isover==0?"isover":null);if(!G){return }var F;if(this.options.greedy){var D=this.element.parents(":data(droppable):eq(0)");if(D.length){F=A.data(D[0],"droppable");F.greedyChild=(G=="isover"?1:0)}}if(F&&G=="isover"){F["isover"]=0;F["isout"]=1;F._out.call(F,C)}this[G]=1;this[G=="isout"?"isover":"isout"]=0;this[G=="isover"?"_over":"_out"].call(this,C);if(F&&G=="isout"){F["isout"]=0;F["isover"]=1;F._over.call(F,C)}})}};A.ui.plugin.add("droppable","activeClass",{activate:function(B,C){A(this).addClass(C.options.activeClass)},deactivate:function(B,C){A(this).removeClass(C.options.activeClass)},drop:function(B,C){A(this).removeClass(C.options.activeClass)}});A.ui.plugin.add("droppable","hoverClass",{over:function(B,C){A(this).addClass(C.options.hoverClass)},out:function(B,C){A(this).removeClass(C.options.hoverClass)},drop:function(B,C){A(this).removeClass(C.options.hoverClass)}})})(jQuery);
/*
 * jQuery UI Sortable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	ui.core.js
 */(function(A){A.widget("ui.sortable",A.extend({},A.ui.mouse,{_init:function(){var B=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var B=this.items.length-1;B>=0;B--){this.items[B].item.removeData("sortable-item")}},_mouseCapture:function(E,F){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(E);var D=null,C=this,B=A(E.target).parents().each(function(){if(A.data(this,"sortable-item")==C){D=A(this);return false}});if(A.data(E.target,"sortable-item")==C){D=A(E.target)}if(!D){return false}if(this.options.handle&&!F){var G=false;A(this.options.handle,D).find("*").andSelf().each(function(){if(this==E.target){G=true}});if(!G){return false}}this.currentItem=D;this._removeCurrentsFromItems();return true},_mouseStart:function(D,E,B){var F=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(D);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");A.extend(this.offset,{click:{left:D.pageX-this.offset.left,top:D.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});if(F.cursorAt){this._adjustOffsetFromHelper(F.cursorAt)}this.originalPosition=this._generatePosition(D);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(F.containment){this._setContainment()}this._propagate("start",D);if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!B){for(var C=this.containers.length-1;C>=0;C--){this.containers[C]._propagate("activate",D,this)}}if(A.ui.ddmanager){A.ui.ddmanager.current=this}if(A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,D)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(D);return true},_mouseDrag:function(E){this.position=this._generatePosition(E);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}A.ui.plugin.call(this,"sort",[E,this._ui()]);this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var C=this.items.length-1;C>=0;C--){var D=this.items[C],B=D.item[0],F=this._intersectsWithPointer(D);if(!F){continue}if(B!=this.currentItem[0]&&this.placeholder[F==1?"next":"prev"]()[0]!=B&&!A.ui.contains(this.placeholder[0],B)&&(this.options.type=="semi-dynamic"?!A.ui.contains(this.element[0],B):true)){this.direction=F==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(D)){this.options.sortIndicator.call(this,E,D)}else{break}this._propagate("change",E);break}}this._contactContainers(E);if(A.ui.ddmanager){A.ui.ddmanager.drag(this,E)}this._trigger("sort",E,this._ui());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(C,D){if(!C){return }if(A.ui.ddmanager&&!this.options.dropBehaviour){A.ui.ddmanager.drop(this,C)}if(this.options.revert){var B=this;var E=B.placeholder.offset();B.reverting=true;A(this.helper).animate({left:E.left-this.offset.parent.left-B.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:E.top-this.offset.parent.top-B.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){B._clear(C)})}else{this._clear(C,D)}return false},cancel:function(){if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var B=this.containers.length-1;B>=0;B--){this.containers[B]._propagate("deactivate",null,this);if(this.containers[B].containerCache.over){this.containers[B]._propagate("out",null,this);this.containers[B].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}A.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){A(this.domPosition.prev).after(this.currentItem)}else{A(this.domPosition.parent).prepend(this.currentItem)}return true},serialize:function(D){var B=this._getItemsAsjQuery(D&&D.connected);var C=[];D=D||{};A(B).each(function(){var E=(A(D.item||this).attr(D.attribute||"id")||"").match(D.expression||(/(.+)[-=_](.+)/));if(E){C.push((D.key||E[1]+"[]")+"="+(D.key&&D.expression?E[1]:E[2]))}});return C.join("&")},toArray:function(D){var B=this._getItemsAsjQuery(D&&D.connected);var C=[];D=D||{};B.each(function(){C.push(A(D.item||this).attr(D.attribute||"id")||"")});return C},_intersectsWith:function(K){var D=this.positionAbs.left,C=D+this.helperProportions.width,J=this.positionAbs.top,I=J+this.helperProportions.height;var E=K.left,B=E+K.width,L=K.top,H=L+K.height;var M=this.offset.click.top,G=this.offset.click.left;var F=(J+M)>L&&(J+M)<H&&(D+G)>E&&(D+G)<B;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>K[this.floating?"width":"height"])){return F}else{return(E<D+(this.helperProportions.width/2)&&C-(this.helperProportions.width/2)<B&&L<J+(this.helperProportions.height/2)&&I-(this.helperProportions.height/2)<H)}},_intersectsWithPointer:function(D){var E=A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,D.top,D.height),C=A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,D.left,D.width),G=E&&C,B=this._getDragVerticalDirection(),F=this._getDragHorizontalDirection();if(!G){return false}return this.floating?(((F&&F=="right")||B=="down")?2:1):(B&&(B=="down"?2:1))},_intersectsWithSides:function(E){var C=A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,E.top+(E.height/2),E.height),D=A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,E.left+(E.width/2),E.width),B=this._getDragVerticalDirection(),F=this._getDragHorizontalDirection();if(this.floating&&F){return((F=="right"&&D)||(F=="left"&&!D))}else{return B&&((B=="down"&&C)||(B=="up"&&!C))}},_getDragVerticalDirection:function(){var B=this.positionAbs.top-this.lastPositionAbs.top;return B!=0&&(B>0?"down":"up")},_getDragHorizontalDirection:function(){var B=this.positionAbs.left-this.lastPositionAbs.left;return B!=0&&(B>0?"right":"left")},refresh:function(B){this._refreshItems(B);this.refreshPositions()},_getItemsAsjQuery:function(G){var C=this;var B=[];var E=[];if(this.options.connectWith&&G){for(var F=this.options.connectWith.length-1;F>=0;F--){var I=A(this.options.connectWith[F]);for(var D=I.length-1;D>=0;D--){var H=A.data(I[D],"sortable");if(H&&H!=this&&!H.options.disabled){E.push([A.isFunction(H.options.items)?H.options.items.call(H.element):A(H.options.items,H.element).not(".ui-sortable-helper"),H])}}}}E.push([A.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):A(this.options.items,this.element).not(".ui-sortable-helper"),this]);for(var F=E.length-1;F>=0;F--){E[F][0].each(function(){B.push(this)})}return A(B)},_removeCurrentsFromItems:function(){var D=this.currentItem.find(":data(sortable-item)");for(var C=0;C<this.items.length;C++){for(var B=0;B<D.length;B++){if(D[B]==this.items[C].item[0]){this.items.splice(C,1)}}}},_refreshItems:function(B){this.items=[];this.containers=[this];var H=this.items;var M=this;var F=[[A.isFunction(this.options.items)?this.options.items.call(this.element[0],B,{item:this.currentItem}):A(this.options.items,this.element),this]];if(this.options.connectWith){for(var E=this.options.connectWith.length-1;E>=0;E--){var J=A(this.options.connectWith[E]);for(var D=J.length-1;D>=0;D--){var G=A.data(J[D],"sortable");if(G&&G!=this&&!G.options.disabled){F.push([A.isFunction(G.options.items)?G.options.items.call(G.element[0],B,{item:this.currentItem}):A(G.options.items,G.element),G]);this.containers.push(G)}}}}for(var E=F.length-1;E>=0;E--){var I=F[E][1];var C=F[E][0];for(var D=0,K=C.length;D<K;D++){var L=A(C[D]);L.data("sortable-item",I);H.push({item:L,instance:I,width:0,height:0,left:0,top:0})}}},refreshPositions:function(B){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var D=this.items.length-1;D>=0;D--){var E=this.items[D];if(E.instance!=this.currentContainer&&this.currentContainer&&E.item[0]!=this.currentItem[0]){continue}var C=this.options.toleranceElement?A(this.options.toleranceElement,E.item):E.item;if(!B){if(this.options.accurateIntersection){E.width=C.outerWidth();E.height=C.outerHeight()}else{E.width=C[0].offsetWidth;E.height=C[0].offsetHeight}}var F=C.offset();E.left=F.left;E.top=F.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var D=this.containers.length-1;D>=0;D--){var F=this.containers[D].element.offset();this.containers[D].containerCache.left=F.left;this.containers[D].containerCache.top=F.top;this.containers[D].containerCache.width=this.containers[D].element.outerWidth();this.containers[D].containerCache.height=this.containers[D].element.outerHeight()}}},_createPlaceholder:function(D){var B=D||this,E=B.options;if(!E.placeholder||E.placeholder.constructor==String){var C=E.placeholder;E.placeholder={element:function(){var F=A(document.createElement(B.currentItem[0].nodeName)).addClass(C||B.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!C){F.style.visibility="hidden";document.body.appendChild(F);F.innerHTML=B.currentItem[0].innerHTML.replace(/name\=\"[^\"\']+\"/g,"").replace(/jQuery[0-9]+\=\"[^\"\']+\"/g,"");document.body.removeChild(F)}return F},update:function(F,G){if(C&&!E.forcePlaceholderSize){return }if(!G.height()){G.height(B.currentItem.innerHeight()-parseInt(B.currentItem.css("paddingTop")||0,10)-parseInt(B.currentItem.css("paddingBottom")||0,10))}if(!G.width()){G.width(B.currentItem.innerWidth()-parseInt(B.currentItem.css("paddingLeft")||0,10)-parseInt(B.currentItem.css("paddingRight")||0,10))}}}}B.placeholder=A(E.placeholder.element.call(B.element,B.currentItem));B.currentItem.after(B.placeholder);E.placeholder.update(B,B.placeholder)},_contactContainers:function(D){for(var C=this.containers.length-1;C>=0;C--){if(this._intersectsWith(this.containers[C].containerCache)){if(!this.containers[C].containerCache.over){if(this.currentContainer!=this.containers[C]){var H=10000;var G=null;var E=this.positionAbs[this.containers[C].floating?"left":"top"];for(var B=this.items.length-1;B>=0;B--){if(!A.ui.contains(this.containers[C].element[0],this.items[B].item[0])){continue}var F=this.items[B][this.containers[C].floating?"left":"top"];if(Math.abs(F-E)<H){H=Math.abs(F-E);G=this.items[B]}}if(!G&&!this.options.dropOnEmpty){continue}this.currentContainer=this.containers[C];G?this.options.sortIndicator.call(this,D,G,null,true):this.options.sortIndicator.call(this,D,null,this.containers[C].element,true);this._propagate("change",D);this.containers[C]._propagate("change",D,this);this.options.placeholder.update(this.currentContainer,this.placeholder)}this.containers[C]._propagate("over",D,this);this.containers[C].containerCache.over=1}}else{if(this.containers[C].containerCache.over){this.containers[C]._propagate("out",D,this);this.containers[C].containerCache.over=0}}}},_createHelper:function(C){var D=this.options;var B=A.isFunction(D.helper)?A(D.helper.apply(this.element[0],[C,this.currentItem])):(D.helper=="clone"?this.currentItem.clone():this.currentItem);if(!B.parents("body").length){A(D.appendTo!="parent"?D.appendTo:this.currentItem[0].parentNode)[0].appendChild(B[0])}if(B[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(B[0].style.width==""||D.forceHelperSize){B.width(this.currentItem.width())}if(B[0].style.height==""||D.forceHelperSize){B.height(this.currentItem.height())}return B},_adjustOffsetFromHelper:function(B){if(B.left!=undefined){this.offset.click.left=B.left+this.margins.left}if(B.right!=undefined){this.offset.click.left=this.helperProportions.width-B.right+this.margins.left}if(B.top!=undefined){this.offset.click.top=B.top+this.margins.top}if(B.bottom!=undefined){this.offset.click.top=this.helperProportions.height-B.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var B=this.offsetParent.offset();if((this.offsetParent[0]==document.body&&A.browser.mozilla)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){B={top:0,left:0}}return{top:B.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:B.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var B=this.currentItem.position();return{top:B.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:B.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var E=this.options;if(E.containment=="parent"){E.containment=this.helper[0].parentNode}if(E.containment=="document"||E.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(E.containment=="document"?document:window).width()-this.offset.relative.left-this.offset.parent.left-this.margins.left-(parseInt(this.currentItem.css("marginRight"),10)||0),(A(E.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.offset.relative.top-this.offset.parent.top-this.margins.top-(parseInt(this.currentItem.css("marginBottom"),10)||0)]}if(!(/^(document|window|parent)$/).test(E.containment)){var C=A(E.containment)[0];var D=A(E.containment).offset();var B=(A(C).css("overflow")!="hidden");this.containment=[D.left+(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top,D.left+(B?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(B?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top]}},_convertPositionTo:function(D,F){if(!F){F=this.position}var C=D=="absolute"?1:-1;var B=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],E=(/(html|body)/i).test(B[0].tagName);return{top:(F.top+this.offset.relative.top*C+this.offset.parent.top*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(E?0:B.scrollTop()))*C+this.margins.top*C),left:(F.left+this.offset.relative.left*C+this.offset.parent.left*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(E?0:B.scrollLeft()))*C+this.margins.left*C)}},_generatePosition:function(D){var G=this.options,C=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],H=(/(html|body)/i).test(C[0].tagName);var B={top:(D.pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(H?0:C.scrollTop()))),left:(D.pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(H?0:C.scrollLeft())))};if(!this.originalPosition){return B}if(this.containment){if(B.left<this.containment[0]){B.left=this.containment[0]}if(B.top<this.containment[1]){B.top=this.containment[1]}if(B.left+this.helperProportions.width>this.containment[2]){B.left=this.containment[2]-this.helperProportions.width}if(B.top+this.helperProportions.height>this.containment[3]){B.top=this.containment[3]-this.helperProportions.height}}if(G.grid){var F=this.originalPosition.top+Math.round((B.top-this.originalPosition.top)/G.grid[1])*G.grid[1];B.top=this.containment?(!(F<this.containment[1]||F>this.containment[3])?F:(!(F<this.containment[1])?F-G.grid[1]:F+G.grid[1])):F;var E=this.originalPosition.left+Math.round((B.left-this.originalPosition.left)/G.grid[0])*G.grid[0];B.left=this.containment?(!(E<this.containment[0]||E>this.containment[2])?E:(!(E<this.containment[0])?E-G.grid[0]:E+G.grid[0])):E}return B},_rearrange:function(G,F,C,E){C?C[0].appendChild(this.placeholder[0]):F.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?F.item[0]:F.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var D=this,B=this.counter;window.setTimeout(function(){if(B==D.counter){D.refreshPositions(!E)}},0)},_clear:function(C,D){this.reverting=false;if(!this._noFinalSort){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var B in this._storedCSS){if(this._storedCSS[B]=="auto"||this._storedCSS[B]=="static"){this._storedCSS[B]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0]){this._propagate("update",C,null,D)}if(!A.ui.contains(this.element[0],this.currentItem[0])){this._propagate("remove",C,null,D);for(var B=this.containers.length-1;B>=0;B--){if(A.ui.contains(this.containers[B].element[0],this.currentItem[0])){this.containers[B]._propagate("update",C,this,D);this.containers[B]._propagate("receive",C,this,D)}}}for(var B=this.containers.length-1;B>=0;B--){this.containers[B]._propagate("deactivate",C,this,D);if(this.containers[B].containerCache.over){this.containers[B]._propagate("out",C,this);this.containers[B].containerCache.over=0}}this.dragging=false;if(this.cancelHelperRemoval){this._propagate("beforeStop",C,null,D);this._propagate("stop",C,null,D);return false}this._propagate("beforeStop",C,null,D);this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.options.helper!="original"){this.helper.remove()}this.helper=null;this._propagate("stop",C,null,D);return true},_propagate:function(F,B,C,D){A.ui.plugin.call(this,F,[B,this._ui(C)]);var E=!D?this.element.triggerHandler(F=="sort"?F:"sort"+F,[B,this._ui(C)],this.options[F]):true;if(E===false){this.cancel()}},plugins:{},_ui:function(C){var B=C||this;return{helper:B.helper,placeholder:B.placeholder||A([]),position:B.position,absolutePosition:B.positionAbs,item:B.currentItem,sender:C?C.element:null}}}));A.extend(A.ui.sortable,{getter:"serialize toArray",version:"1.6",defaults:{accurateIntersection:true,appendTo:"parent",cancel:":input",delay:0,distance:1,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,helper:"original",items:"> *",scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,sortIndicator:A.ui.sortable.prototype._rearrange,tolerance:"default",zIndex:1000}});A.ui.plugin.add("sortable","cursor",{start:function(D,E){var C=A("body"),B=A(this).data("sortable");if(C.css("cursor")){B.options._cursor=C.css("cursor")}C.css("cursor",B.options.cursor)},beforeStop:function(C,D){var B=A(this).data("sortable");if(B.options._cursor){A("body").css("cursor",B.options._cursor)}}});A.ui.plugin.add("sortable","opacity",{start:function(D,E){var C=E.helper,B=A(this).data("sortable");if(C.css("opacity")){B.options._opacity=C.css("opacity")}C.css("opacity",B.options.opacity)},beforeStop:function(C,D){var B=A(this).data("sortable");if(B.options._opacity){A(D.helper).css("opacity",B.options._opacity)}}});A.ui.plugin.add("sortable","scroll",{start:function(C,D){var B=A(this).data("sortable"),E=B.options;if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){B.overflowOffset=B.scrollParent.offset()}},sort:function(D,E){var C=A(this).data("sortable"),F=C.options,B=false;if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){if((C.overflowOffset.top+C.scrollParent[0].offsetHeight)-D.pageY<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop+F.scrollSpeed}else{if(D.pageY-C.overflowOffset.top<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop-F.scrollSpeed}}if((C.overflowOffset.left+C.scrollParent[0].offsetWidth)-D.pageX<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft+F.scrollSpeed}else{if(D.pageX-C.overflowOffset.left<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft-F.scrollSpeed}}}else{if(D.pageY-A(document).scrollTop()<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)}else{if(A(window).height()-(D.pageY-A(document).scrollTop())<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)}}if(D.pageX-A(document).scrollLeft()<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)}else{if(A(window).width()-(D.pageX-A(document).scrollLeft())<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)}}}if(B!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(C,D)}if(B!==false&&C.cssPosition=="absolute"&&C.scrollParent[0]!=document&&A.ui.contains(C.scrollParent[0],C.offsetParent[0])){C.offset.parent=C._getParentOffset()}if(B!==false&&C.cssPosition=="relative"&&!(C.scrollParent[0]!=document&&C.scrollParent[0]!=C.offsetParent[0])){C.offset.relative=C._getRelativeOffset()}}});A.ui.plugin.add("sortable","zIndex",{start:function(D,E){var C=E.helper,B=A(this).data("sortable");if(C.css("zIndex")){B.options._zIndex=C.css("zIndex")}C.css("zIndex",B.options.zIndex)},beforeStop:function(C,D){var B=A(this).data("sortable");if(B.options._zIndex){A(D.helper).css("zIndex",B.options._zIndex=="auto"?"":B.options._zIndex)}}})})(jQuery);
// $Id: context_reaction_block.js,v 1.1.2.23 2010/08/05 20:09:11 yhahn Exp $

Drupal.behaviors.contextReactionBlock = function(context) {
  $('form.context-editor:not(.context-block-processed)')
    .addClass('context-block-processed')
    .each(function() {
      var id = $(this).attr('id');
      Drupal.contextBlockEditor = Drupal.contextBlockEditor || {};
      $(this).bind('init.pageEditor', function(event) {
        Drupal.contextBlockEditor[id] = new DrupalContextBlockEditor($(this));
      });
      $(this).bind('start.pageEditor', function(event, context) {
        // Fallback to first context if param is empty.
        if (!context) {
          context = $(this).data('defaultContext');
        }
        Drupal.contextBlockEditor[id].editStart($(this), context);
      });
      $(this).bind('end.pageEditor', function(event) {
        Drupal.contextBlockEditor[id].editFinish();
      });
    });

  //
  // Admin Form =======================================================
  //
  // ContextBlockForm: Init.
  $('#context-blockform:not(.processed)').each(function() {
    $(this).addClass('processed');
    Drupal.contextBlockForm = new DrupalContextBlockForm($(this));
    Drupal.contextBlockForm.setState();
  });

  // ContextBlockForm: Attach block removal handlers.
  // Lives in behaviors as it may be required for attachment to new DOM elements.
  $('#context-blockform a.remove:not(.processed)').each(function() {
    $(this).addClass('processed');
    $(this).click(function() {
      $(this).parents('tr').eq(0).remove();
      Drupal.contextBlockForm.setState();
      return false;
    });
  });
};

/**
 * Context block form. Default form for editing context block reactions.
 */
DrupalContextBlockForm = function(blockForm) {
  this.state = {};

  this.setState = function() {
    $('table.context-blockform-region', blockForm).each(function() {
      var region = $(this).attr('id').split('context-blockform-region-')[1];
      var blocks = [];
      $('tr', $(this)).each(function() {
        var bid = $(this).attr('id');
        blocks.push(bid);
      });
      Drupal.contextBlockForm.state[region] = blocks;
    });

    // Serialize here and set form element value.
    $('form input.context-blockform-state').val(JSON.stringify(this.state));

    // Hide enabled blocks from selector that are used
    $('table.context-blockform-region tr').each(function() {
      var bid = $(this).attr('id');
      $('div.context-blockform-selector input[value='+bid+']').parents('div.form-item').eq(0).hide();
    });
    // Show blocks in selector that are unused
    $('div.context-blockform-selector input').each(function() {
      var bid = $(this).val();
      if ($('table.context-blockform-region tr#'+bid).size() === 0) {
        $(this).parents('div.form-item').eq(0).show();
      }
    });
  };

  // Tabledrag
  // Add additional handlers to update our blocks.
  $.each(Drupal.settings.tableDrag, function(base) {
    var table = $('#' + base + ':not(.processed)', blockForm);
    if (table && table.is('.context-blockform-region')) {
      table.addClass('processed');
      table.bind('mouseup', function(event) {
        Drupal.contextBlockForm.setState();
        return;
      });
    }
  });

  // Add blocks to a region
  $('td.blocks a', blockForm).each(function() {
    $(this).click(function() {
      var region = $(this).attr('href').split('#')[1];
      var selected = $("div.context-blockform-selector input:checked");
      if (selected.size() > 0) {
        selected.each(function() {
          // create new block markup
          var block = document.createElement('tr');
          var text = $(this).parents('div.form-item').eq(0).hide().children('label').text();
          $(block).attr('id', $(this).attr('value')).addClass('draggable');
          $(block).html("<td>"+ text + "<input class='block-weight' /></td><td><a href='' class='remove'>X</a></td>");

          // add block item to region
          var base = "context-blockform-region-"+ region;
          Drupal.tableDrag[base].makeDraggable(block);
          $('table#'+base).append(block);
          Drupal.attachBehaviors($('table#'+base));

          Drupal.contextBlockForm.setState();
          $(this).removeAttr('checked');
        });
      }
      return false;
    });
  });
};

/**
 * Context block editor. AHAH editor for live block reaction editing.
 */
DrupalContextBlockEditor = function(editor) {
  this.editor = editor;
  this.state = {};
  this.blocks = {};
  this.regions = {};

  // Category selector handler.
  // Also set to "Choose a category" option as browsers can retain
  // form values from previous page load.
  $('select.context-block-browser-categories', editor).change(function() {
    var category = $(this).val();
    var params = {
      containment: 'document',
      revert: true,
      dropOnEmpty: true,
      placeholder: 'draggable-placeholder',
      forcePlaceholderSize: true,
      helper: 'clone',
      appendTo: 'body',
      connectWith: ($.ui.version === '1.6') ? ['.ui-sortable'] : '.ui-sortable'
    };
    $('div.category', editor).hide().sortable('destroy');
    $('div.category-'+category, editor).show().sortable(params);
  });
  $('select.context-block-browser-categories', editor).val(0).change();

  return this;
};

DrupalContextBlockEditor.prototype.initBlocks = function(blocks) {
  var self = this;
  this.blocks = blocks;
  blocks.each(function() {
    $(this).addClass('draggable');
    $(this).prepend($('<a class="context-block-handle"></a>'));
    $(this).prepend($('<a class="context-block-remove"></a>').click(function() {
      $(this).parents('div.block').eq(0).fadeOut('medium', function() {
        $(this).remove();
        self.updateBlocks();
      });
      return false;
    }));
  });
};

DrupalContextBlockEditor.prototype.initRegions = function(regions) {
  this.regions = regions;
};

/**
  * Update UI to match the current block states.
  */
DrupalContextBlockEditor.prototype.updateBlocks = function() {
  var browser = $('div.context-block-browser');

  // For all enabled blocks, mark corresponding addables as having been added.
  $('div.block, div.admin-block').each(function() {
    var bid = $(this).attr('id').split('block-')[1]; // Ugh.
    $('#context-block-addable-'+bid, browser).draggable('disable').addClass('context-block-added').removeClass('context-block-addable');
  });
  // For all hidden addables with no corresponding blocks, mark as addable.
  $('.context-block-item', browser).each(function() {
    var bid = $(this).attr('id').split('context-block-addable-')[1];
    if ($('#block-'+bid).size() === 0) {
      $(this).draggable('enable').removeClass('context-block-added').addClass('context-block-addable');
    }
  });

  // Mark empty regions.
  $(this.regions).each(function() {
    if ($('div.block:has(a.context-block)', this).size() > 0) {
      $(this).removeClass('context-block-region-empty');
    }
    else {
      $(this).addClass('context-block-region-empty');
    }
  });
};

/**
  * Live update a region.
  */
DrupalContextBlockEditor.prototype.updateRegion = function(event, ui, region, op) {
  switch (op) {
    case 'over':
      $(region).removeClass('context-block-region-empty');
      break;
    case 'out':
      if (
        $('div.draggable-placeholder', region).size() === 0 &&
        $('div.block:has(a.context-block)', region).size() == 1 &&
        $('div.block:has(a.context-block)', region).attr('id') == ui.item.attr('id')
      ) {
        $(region).addClass('context-block-region-empty');
      }
      break;
  }
};

/**
  * Remove script elements while dragging & dropping.
  */
DrupalContextBlockEditor.prototype.scriptFix = function(event, ui, editor, context) {
  if ($('script', ui.item)) {
    var placeholder = $(Drupal.settings.contextBlockEditor.scriptPlaceholder);
    var label = $('div.handle label', ui.item).text();
    placeholder.children('strong').html(label);
    $('script', ui.item).parent().empty().append(placeholder);
  }
};

/**
  * Add a block to a region through an AHAH load of the block contents.
  */
DrupalContextBlockEditor.prototype.addBlock = function(event, ui, editor, context) {
  var self = this;
  if (ui.item.is('.context-block-addable')) {
    var bid = ui.item.attr('id').split('context-block-addable-')[1];

    // Construct query params for our AJAX block request.
    var params = Drupal.settings.contextBlockEditor.params;
    params.context_block = bid + ',' + context;

    // Replace item with loading block.
    var blockLoading = $('<div class="context-block-item context-block-loading"><span class="icon"></span></div>');
    ui.item.addClass('context-block-added');
    ui.item.after(blockLoading);
    ui.sender.append(ui.item);

    $.getJSON(Drupal.settings.contextBlockEditor.path, params, function(data) {
      if (data.status) {
        var newBlock = $(data.block);
        if ($('script', newBlock)) {
          $('script', newBlock).remove();
        }
        blockLoading.fadeOut(function() {
          $(this).replaceWith(newBlock);
          self.initBlocks(newBlock);
          self.updateBlocks();
          $.each(data.css, function(k, v){
            var cssfile = Drupal.settings.basePath + v;
            if ($('head link[href $='+cssfile+']').length === 0 ) {
              $('head').append('<link type="text/css" rel="stylesheet" media="all" href="' + cssfile + " />'");
            }
          });
          Drupal.attachBehaviors();
        });
      }
      else {
        blockLoading.fadeOut(function() { $(this).remove(); });
      }
    });
  }
  else if (ui.item.is(':has(a.context-block)')) {
    self.updateBlocks();
  }
};

/**
  * Update form hidden field with JSON representation of current block visibility states.
  */
DrupalContextBlockEditor.prototype.setState = function() {
  var self = this;

  $(this.regions).each(function() {
    var region = $('a.context-block-region', this).attr('id').split('context-block-region-')[1];
    var blocks = [];
    $('a.context-block', $(this)).each(function() {
      if ($(this).attr('class').indexOf('edit-') != -1) {
        var bid = $(this).attr('id').split('context-block-')[1];
        var context = $(this).attr('class').split('edit-')[1].split(' ')[0];
        context = context ? context : 0;
        var block = {'bid': bid, 'context': context};
        blocks.push(block);
      }
    });
    self.state[region] = blocks;
  });

  // Serialize here and set form element value.
  $('input.context-block-editor-state', this.editor).val(JSON.stringify(this.state));
};

/**
  * Disable text selection.
  */
DrupalContextBlockEditor.prototype.disableTextSelect = function() {
  if ($.browser.safari) {
    $('div.block:has(a.context-block):not(:has(input,textarea))').css('WebkitUserSelect','none');
  }
  else if ($.browser.mozilla) {
    $('div.block:has(a.context-block):not(:has(input,textarea))').css('MozUserSelect','none');
  }
  else if ($.browser.msie) {
    $('div.block:has(a.context-block):not(:has(input,textarea))').bind('selectstart.contextBlockEditor', function() { return false; });
  }
  else {
    $(this).bind('mousedown.contextBlockEditor', function() { return false; });
  }
};

/**
  * Enable text selection.
  */
DrupalContextBlockEditor.prototype.enableTextSelect = function() {
  if ($.browser.safari) {
    $('*').css('WebkitUserSelect','');
  }
  else if ($.browser.mozilla) {
    $('*').css('MozUserSelect','');
  }
  else if ($.browser.msie) {
    $('*').unbind('selectstart.contextBlockEditor');
  }
  else {
    $(this).unbind('mousedown.contextBlockEditor');
  }
};

/**
  * Start editing. Attach handlers, begin draggable/sortables.
  */
DrupalContextBlockEditor.prototype.editStart = function(editor, context) {
  var self = this;

  // This is redundant to the start handler found in context_ui.js.
  // However it's necessary that we trigger this class addition before
  // we call .sortable() as the empty regions need to be visible.
  $(document.body).addClass('context-editing');
  this.editor.addClass('context-editing');

  this.disableTextSelect();
  this.initBlocks($('div.block:has(a.context-block.edit-'+context+')'));
  this.initRegions($('a.context-block-region').parent());
  this.updateBlocks();

  // First pass, enable sortables on all regions.
  $(this.regions).each(function() {
    var region = $(this);
    var params = {
      containment: 'document',
      revert: true,
      dropOnEmpty: true,
      placeholder: 'draggable-placeholder',
      forcePlaceholderSize: true,
      items: '> div.block:has(a.context-block.editable)',
      handle: 'a.context-block-handle',
      start: function(event, ui) { self.scriptFix(event, ui, editor, context); },
      stop: function(event, ui) { self.addBlock(event, ui, editor, context); },
      receive: function(event, ui) { self.addBlock(event, ui, editor, context); },
      over: function(event, ui) { self.updateRegion(event, ui, region, 'over'); },
      out: function(event, ui) { self.updateRegion(event, ui, region, 'out'); }
    };
    region.sortable(params);
  });

  // Second pass, hook up all regions via connectWith to each other.
  $(this.regions).each(function() {
    $(this).sortable('option', 'connectWith', ['.ui-sortable']);
  });

  // Terrible, terrible workaround for parentoffset issue in Safari.
  // The proper fix for this issue has been committed to jQuery UI, but was
  // not included in the 1.6 release. Therefore, we do a browser agent hack
  // to ensure that Safari users are covered by the offset fix found here:
  // http://dev.jqueryui.com/changeset/2073.
  if ($.ui.version === '1.6' && $.browser.safari) {
    $.browser.mozilla = true;
  }
};

/**
  * Finish editing. Remove handlers.
  */
DrupalContextBlockEditor.prototype.editFinish = function() {
  this.editor.removeClass('context-editing');
  this.enableTextSelect();

  // Remove UI elements.
  $(this.blocks).each(function() {
    $('a.context-block-handle, a.context-block-remove', this).remove();
    $(this).removeClass('draggable');
  });
  this.regions.sortable('destroy');

  this.setState();

  // Unhack the user agent.
  if ($.ui.version === '1.6' && $.browser.safari) {
    $.browser.mozilla = false;
  }
};
;
// $Id: base.js,v 1.11.2.1 2010/03/10 20:08:58 merlinofchaos Exp $
/**
 * @file base.js
 *
 * Some basic behaviors and utility functions for Views.
 */

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = function (context) {
  $('#views-tabset:not(.views-processed)').addClass('views-processed').each(function() {
    new Drupal.Views.Tabs($(this), {selectedClass: 'active'});
  });

  $('a.views-remove-link')
    .addClass('views-processed')
    .click(function() {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      return false;
    });
}

/**
 * For IE, attach some javascript so that our hovers do what they're supposed
 * to do.
 */
Drupal.behaviors.viewsHoverlinks = function() {
  if ($.browser.msie) {
    // If IE, attach a hover event so we can see our admin links.
    $("div.view:not(.views-hover-processed)").addClass('views-hover-processed').hover(
      function() {
        $('div.views-hide', this).addClass("views-hide-hover"); return true;
      },
      function(){
        $('div.views-hide', this).removeClass("views-hide-hover"); return true;
      }
    );
    $("div.views-admin-links:not(.views-hover-processed)")
      .addClass('views-hover-processed')
      .hover(
        function() {
          $(this).addClass("views-admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("views-admin-links-hover"); return true;
        }
      );
  }
}

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    var pair = pairs[i].split('=');
    // Ignore the 'q' path argument, if present.
    if (pair[0] != 'q' && pair[1]) {
      args[pair[0]] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};
;
// $Id: ajax_view.js,v 1.19.2.5 2010/03/25 18:25:28 merlinofchaos Exp $

/**
 * @file ajaxView.js
 *
 * Handles AJAX fetching of views, including filter submission and response.
 */

Drupal.Views.Ajax = Drupal.Views.Ajax || {};

/**
 * An ajax responder that accepts a packet of JSON data and acts appropriately.
 *
 * The following fields control behavior.
 * - 'display': Display the associated data in the view area.
 */
Drupal.Views.Ajax.ajaxViewResponse = function(target, response) {

  if (response.debug) {
    alert(response.debug);
  }

  var $view = $(target);

  // Check the 'display' for data.
  if (response.status && response.display) {
    var $newView = $(response.display);
    $view.replaceWith($newView);
    $view = $newView;
    Drupal.attachBehaviors($view.parent());
  }

  if (response.messages) {
    // Show any messages (but first remove old ones, if there are any).
    $view.find('.views-messages').remove().end().prepend(response.messages);
  }
};

/**
 * Ajax behavior for views.
 */
Drupal.behaviors.ViewsAjaxView = function() {
  if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
    var ajax_path = Drupal.settings.views.ajax_path;
    // If there are multiple views this might've ended up showing up multiple times.
    if (ajax_path.constructor.toString().indexOf("Array") != -1) {
      ajax_path = ajax_path[0];
    }
    $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
      var view = '.view-dom-id-' + settings.view_dom_id;
      if (!$(view).size()) {
        // Backward compatibility: if 'views-view.tpl.php' is old and doesn't
        // contain the 'view-dom-id-#' class, we fall back to the old way of
        // locating the view:
        view = '.view-id-' + settings.view_name + '.view-display-id-' + settings.view_display_id;
      }


      // Process exposed filter forms.
      $('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'))
      .filter(':not(.views-processed)')
      .each(function () {
        // remove 'q' from the form; it's there for clean URLs
        // so that it submits to the right place with regular submit
        // but this method is submitting elsewhere.
        $('input[name=q]', this).remove();
        var form = this;
        // ajaxSubmit doesn't accept a data argument, so we have to
        // pass additional fields this way.
        $.each(settings, function(key, setting) {
          $(form).append('<input type="hidden" name="'+ key + '" value="'+ setting +'"/>');
        });
      })
      .addClass('views-processed')
      .submit(function () {
        $('input[type=submit], button', this).after('<span class="views-throbbing">&nbsp</span>');
        var object = this;
        $(this).ajaxSubmit({
          url: ajax_path,
          type: 'GET',
          success: function(response) {
            // Call all callbacks.
            if (response.__callbacks) {
              $.each(response.__callbacks, function(i, callback) {
                eval(callback)(view, response);
              });
              $('.views-throbbing', object).remove();
            }
          },
          error: function(xhr) { Drupal.Views.Ajax.handleErrors(xhr, ajax_path); $('.views-throbbing', object).remove(); },
          dataType: 'json'
        });

        return false;
      });

      $(view).filter(':not(.views-processed)')
        // Don't attach to nested views. Doing so would attach multiple behaviors
        // to a given element.
        .filter(function() {
          // If there is at least one parent with a view class, this view
          // is nested (e.g., an attachment). Bail.
          return !$(this).parents('.view').size();
        })
        .each(function() {
          // Set a reference that will work in subsequent calls.
          var target = this;
          $(this)
            .addClass('views-processed')
            // Process pager, tablesort, and attachment summary links.
            .find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
            .each(function () {
              var viewData = { 'js': 1 };
              // Construct an object using the settings defaults and then overriding
              // with data specific to the link.
              $.extend(
                viewData,
                Drupal.Views.parseQueryString($(this).attr('href')),
                // Extract argument data from the URL.
                Drupal.Views.parseViewArgs($(this).attr('href'), settings.view_base_path),
                // Settings must be used last to avoid sending url aliases to the server.
                settings
              );
              $(this).click(function () {
                $.extend(viewData, Drupal.Views.parseViewArgs($(this).attr('href'), settings.view_base_path));
                $(this).addClass('views-throbbing');
                $.ajax({
                  url: ajax_path,
                  type: 'GET',
                  data: viewData,
                  success: function(response) {
                    $(this).removeClass('views-throbbing');
                    // Scroll to the top of the view. This will allow users
                    // to browse newly loaded content after e.g. clicking a pager
                    // link.
                    var offset = $(target).offset();
                    // We can't guarantee that the scrollable object should be
                    // the body, as the view could be embedded in something
                    // more complex such as a modal popup. Recurse up the DOM
                    // and scroll the first element that has a non-zero top.
                    var scrollTarget = target;
                    while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
                      scrollTarget = $(scrollTarget).parent()
                    }
                    // Only scroll upward
                    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
                      $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
                    }
                    // Call all callbacks.
                    if (response.__callbacks) {
                      $.each(response.__callbacks, function(i, callback) {
                        eval(callback)(target, response);
                      });
                    }
                  },
                  error: function(xhr) { $(this).removeClass('views-throbbing'); Drupal.Views.Ajax.handleErrors(xhr, ajax_path); },
                  dataType: 'json'
                });

                return false;
              });
            }); // .each function () {
      }); // $view.filter().each
    }); // .each Drupal.settings.views.ajaxViews
  } // if
};
;
// $Id: collapse.js,v 1.17 2008/01/29 10:58:25 goba Exp $

/**
 * Toggle the visibility of a fieldset using smooth animations
 */
Drupal.toggleFieldset = function(fieldset) {
  if ($(fieldset).is('.collapsed')) {
    // Action div containers are processed separately because of a IE bug
    // that alters the default submit button behavior.
    var content = $('> div:not(.action)', fieldset);
    $(fieldset).removeClass('collapsed');
    content.hide();
    content.slideDown( {
      duration: 'fast',
      easing: 'linear',
      complete: function() {
        Drupal.collapseScrollIntoView(this.parentNode);
        this.parentNode.animating = false;
        $('div.action', fieldset).show();
      },
      step: function() {
        // Scroll the fieldset into view
        Drupal.collapseScrollIntoView(this.parentNode);
      }
    });
  }
  else {
    $('div.action', fieldset).hide();
    var content = $('> div:not(.action)', fieldset).slideUp('fast', function() {
      $(this.parentNode).addClass('collapsed');
      this.parentNode.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = self.innerHeight || document.documentElement.clientHeight || $('body')[0].clientHeight || 0;
  var offset = self.pageYOffset || document.documentElement.scrollTop || $('body')[0].scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    } else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = function (context) {
  $('fieldset.collapsible > legend:not(.collapse-processed)', context).each(function() {
    var fieldset = $(this.parentNode);
    // Expand if there are errors inside
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      fieldset.removeClass('collapsed');
    }

    // Turn the legend into a clickable link and wrap the contents of the fieldset
    // in a div for easier animation
    var text = this.innerHTML;
      $(this).empty().append($('<a href="#">'+ text +'</a>').click(function() {
        var fieldset = $(this).parents('fieldset:first')[0];
        // Don't animate multiple times
        if (!fieldset.animating) {
          fieldset.animating = true;
          Drupal.toggleFieldset(fieldset);
        }
        return false;
      }))
      .after($('<div class="fieldset-wrapper"></div>')
      .append(fieldset.children(':not(legend):not(.action)')))
      .addClass('collapse-processed');
  });
};
;
// $Id: jquery.bgiframe.min.js,v 1.1.2.1 2010/07/03 03:00:39 sociotech Exp $

/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
;(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);;
// $Id: hoverIntent.js,v 1.1.2.1 2010/07/03 03:00:39 sociotech Exp $

;(function($){
	/* hoverIntent by Brian Cherne */
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};
	
})(jQuery);;
// $Id: supposition.js,v 1.1 2009/08/19 04:28:07 sociotech Exp $

/*
 * Supposition v0.2 - an optional enhancer for Superfish jQuery menu widget
 *
 * Copyright (c) 2008 Joel Birch - based mostly on work by Jesse Klaasse and credit goes largely to him.
 * Special thanks to Karl Swedberg for valuable input.
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */

(function($){

	$.fn.supposition = function(){
		var $w = $(window), /*do this once instead of every onBeforeShow call*/
			_offset = function(dir) {
				return window[dir == 'y' ? 'pageYOffset' : 'pageXOffset']
				|| document.documentElement && document.documentElement[dir=='y' ? 'scrollTop' : 'scrollLeft']
			    || document.body[dir=='y' ? 'scrollTop' : 'scrollLeft'];
			},
			onInit = function(){
				/* I haven't touched this bit - needs work as there are still z-index issues */
				$topNav = $('li',this);
				var cZ=parseInt($topNav.css('z-index')) + $topNav.length;
				$topNav.each(function() {
					$(this).css({zIndex:--cZ});
				});
			},
			onHide = function(){
				this.css({marginTop:'',marginLeft:''});
			},
			onBeforeShow = function(){
				this.each(function(){
					var $u = $(this);
					$u.css('display','block');
					var menuWidth = $u.width(),
						parentWidth = $u.parents('ul').width(),
						totalRight = $w.width() + _offset('x'),
						menuRight = $u.offset().left + menuWidth;
					if (menuRight > totalRight) {
						$u.css('margin-left', ($u.parents('ul').length == 1 ? totalRight - menuRight : -(menuWidth + parentWidth)) + 'px');
					}

					var windowHeight = $w.height(),
						offsetTop = $u.offset().top,
						menuHeight = $u.height(),
						baseline = windowHeight + _offset('y');
					var expandUp = (offsetTop + menuHeight > baseline);
					if (expandUp) {
						$u.css('margin-top',baseline - (menuHeight + offsetTop));
					}
					$u.css('display','none');
				});
			};
		
		return this.each(function() {
			var o = $.fn.superfish.o[this.serial]; /* get this menu's options */
			
			/* if callbacks already set, store them */
			var _onInit = o.onInit,
				_onBeforeShow = o.onBeforeShow,
				_onHide = o.onHide;
				
			$.extend($.fn.superfish.o[this.serial],{
				onInit		: function() {
					onInit.call(this); /* fire our Supposition callback */
					_onInit.call(this); /* fire stored callbacks */
				},
				onBeforeShow: function() {
					onBeforeShow.call(this); /* fire our Supposition callback */
					_onBeforeShow.call(this); /* fire stored callbacks */
				},
				onHide		: function() {
					onHide.call(this); /* fire our Supposition callback */
					_onHide.call(this); /* fire stored callbacks */
				}
			});
		});
	};

})(jQuery);;
// $Id: supersubs.js,v 1.1 2009/08/19 04:28:07 sociotech Exp $

/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */

;(function($){ // $ will refer to jQuery within this closure

	$.fn.supersubs = function(options){
		var opts = $.extend({}, $.fn.supersubs.defaults, options);
		// return original object to support chaining
		return this.each(function() {
			// cache selections
			var $$ = $(this);
			// support metadata
			var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
			// get the font size of menu.
			// .css('fontSize') returns various results cross-browser, so measure an em dash instead
			var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
				'padding' : 0,
				'position' : 'absolute',
				'top' : '-999em',
				'width' : 'auto'
			}).appendTo($$).width(); //clientWidth is faster, but was incorrect here
			// remove em dash
			$('#menu-fontsize').remove();
			// cache all ul elements
			$ULs = $$.find('ul');
			// loop through each ul in menu
			$ULs.each(function(i) {	
				// cache this ul
				var $ul = $ULs.eq(i);
				// get all (li) children of this ul
				var $LIs = $ul.children();
				// get all anchor grand-children
				var $As = $LIs.children('a');
				// force content to one line and save current float property
				var liFloat = $LIs.css('white-space','nowrap').css('float');
				// remove width restrictions and floats so elements remain vertically stacked
				var emWidth = $ul.add($LIs).add($As).css({
					'float' : 'none',
					'width'	: 'auto'
				})
				// this ul will now be shrink-wrapped to longest li due to position:absolute
				// so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer
				.end().end()[0].clientWidth / fontsize;
				// add more width to ensure lines don't turn over at certain sizes in various browsers
				emWidth += o.extraWidth;
				// restrict to at least minWidth and at most maxWidth
				if (emWidth > o.maxWidth)		{ emWidth = o.maxWidth; }
				else if (emWidth < o.minWidth)	{ emWidth = o.minWidth; }
				emWidth += 'em';
				// set ul to width in ems
				$ul.css('width',emWidth);
				// restore li floats to avoid IE bugs
				// set li width to full width of this ul
				// revert white-space to normal
				$LIs.css({
					'float' : liFloat,
					'width' : '100%',
					'white-space' : 'normal'
				})
				// update offset position of descendant ul to reflect new width of parent
				.each(function(){
					var $childUl = $('>ul',this);
					var offsetDirection = $childUl.css('left')!==undefined ? 'left' : 'right';
					$childUl.css(offsetDirection,emWidth);
				});
			});
			
		});
	};
	// expose defaults
	$.fn.supersubs.defaults = {
		minWidth		: 9,		// requires em unit.
		maxWidth		: 25,		// requires em unit.
		extraWidth		: 0			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
	};
	
})(jQuery); // plugin code ends
;
// $Id: superfish.js,v 1.1 2009/08/19 04:28:07 sociotech Exp $

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
// $Id: script.js,v 1.1.2.6 2010/07/03 03:00:39 sociotech Exp $

Drupal.behaviors.fusionEqualheights = function (context) {
  if (jQuery().equalHeights) {
    $("#header-top-wrapper div.equal-heights div.content").equalHeights();
    $("#header-group-wrapper div.equal-heights div.content").equalHeights();
    $("#preface-top-wrapper div.equal-heights div.content").equalHeights();
    $("#preface-bottom div.equal-heights div.content").equalHeights();
    $("#sidebar-first div.equal-heights div.content").equalHeights();
    $("#content-top div.equal-heights div.content").equalHeights();
    $("#content-region div.equal-heights div.content").equalHeights();
    $("#content-bottom div.equal-heights div.content").equalHeights();
    $("#node-top div.equal-heights div.content").equalHeights();
    $("#node-bottom div.equal-heights div.content").equalHeights();
    $("#sidebar-last div.equal-heights div.content").equalHeights();
    $("#postscript-top div.equal-heights div.content").equalHeights();
    $("#postscript-bottom-wrapper div.equal-heights div.content").equalHeights();
    $("#footer-wrapper div.equal-heights div.content").equalHeights();
  }
};

Drupal.behaviors.fusionIE6fixes = function (context) {
  // IE6 & less-specific functions
  // Add hover class to primary menu li elements on hover
  if ($.browser.msie && ($.browser.version < 7)) {
    $('form input.form-submit').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
    $('#primary-menu ul.sf-menu li.expanded').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
    $('.sf-menu li').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
    $('#search input#search_header').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
  };
};

Drupal.behaviors.fusionOverlabel = function (context) {
  if (jQuery().overlabel) {
    $("div.fusion-horiz-login label").overlabel();
  }
};

Drupal.behaviors.fusionSuperfish = function (context) {
  $("#primary-menu ul.sf-menu").superfish({
    hoverClass:  'sfHover',
    delay:       250,
    animation:   {opacity:'show',height:'show'},
    speed:       'fast',
    autoArrows:  false,
    dropShadows: false,
    disableHI:   true
  }).supposition();
};

Drupal.behaviors.fusionSuperfishBlocks = function (context) {
  $("div.block ul.sf-menu").superfish({
    hoverClass:  'sfHover',
    delay:       250,
    animation:   {opacity:'show',height:'show'},
    speed:       'fast',
    autoArrows:  false,
    dropShadows: false,
    disableHI:   true
  }).supposition();
};

Drupal.behaviors.fusionGridMask = function (context) {
  if ($('body.grid-mask-enabled').size() > 0) {
    var grid_width_pos = parseInt($('body').attr('class').indexOf('grid-width-')) + 11;
    var grid_width = $('body').attr('class').substring(grid_width_pos, grid_width_pos + 2);
    var grid = '<div id="grid-mask-overlay" class="full-width"><div class="row">';
    for (i = 1; i <= grid_width; i++) {
      grid += '<div class="block grid' + grid_width + '-1"><div class="inner"></div></div>';
    }
    grid += '</div></div>';
    $('body.grid-mask-enabled').prepend(grid);
    $('#grid-mask-overlay .row').addClass('grid' + grid_width + '-' + grid_width);
    $('#grid-mask-overlay .block .inner').height($('body').height());
  }
};

Drupal.behaviors.fusionGridMaskToggle = function (context) {
  if ($('body.grid-mask-enabled').size() > 0) {
    $('body.grid-mask-enabled').prepend('<div id="grid-mask-toggle">grid</div>');
    $('div#grid-mask-toggle')
      .toggle( function () {
        $(this).toggleClass('grid-on');
        $('body').toggleClass('grid-mask');
      },
      function() {
        $(this).toggleClass('grid-on');
        $('body').toggleClass('grid-mask');
      });
  }
};

Drupal.behaviors.fusionPanelsShowEdit = function (context) {
  // Sets parent row and block elements to have "overflow: visible" if editing Panel page
  if ($("#panels-edit-display-form").size() > 0 || $("#page-manager-edit").size() > 0) {
    $("#panels-edit-display-form").parents('.row, .block').css("overflow", "visible");
    $("#page-manager-edit").parents('.row, .block').css("overflow", "visible");
  }
};

Drupal.behaviors.fusionScreenshotpreview = function (context) {
  // Displays Skinr previews
  if ($('span.preview-icon').size() > 0) {
    // configure distance of preview from the cursor
    var xOffset = 20;
    var yOffset = 0;
  
    $('span.preview-icon').hover(function(e){
      var img_class = this.id;
      var caption = $(this).parent().text();
      // add preview markup
      $('body').append('<div id="screenshot">' +
                       '<div class="screenshot-preview ' + img_class + '" alt="preview"></div>' + 
                       '<div class="screenshot-caption">' + caption + '</div>' +
                       '</div>');
      $("#screenshot").hide();  // hide preview until dimensions are set
      $("#screenshot").css("left", (e.pageX + xOffset) + "px").css("top", (e.pageY + yOffset) + "px");  // set initial preview position
      // load image in order to set preview dimensions
      var img = new Image();
      img.onload = function() {
        var caption_height = parseFloat($("#screenshot .screenshot-caption").css("height"));
        $("#screenshot").css("height", img.height + caption_height);
        $("#screenshot").css("width", img.width);
        $("#screenshot ." + img_class).css("height", img.height);
        $("#screenshot ." + img_class).css("width", img.width);
        $("#screenshot .screenshot-caption").css("width", img.width - 10);
        $("#screenshot").fadeIn("fast");  // now show preview
      }
      img.src = $("." + img_class).css("background-image").replace(/^url|[\(\)\"]/g, '');
    },
    function(){
      $("#screenshot").remove();
    });
    // adjust preview position with cursor movement
    $("span.preview-icon").mousemove(function(e){
      $("#screenshot").css("left", (e.pageX + xOffset) + "px").css("top", (e.pageY + yOffset) + "px");
    });
  }
};
;
