(function(e){function n(n){for(var t,c,i=n[0],u=n[1],l=n[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);s&&s(n);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(t=!1)}t&&(a.splice(n--,1),e=c(c.s=r[0]))}return e}var t={},o={app:0},a=[];function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=t,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var s=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"56d7":function(e,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),o=r("9483");Object(o["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var a=r("8c4f"),c=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div")},i=[],u={name:"Home"},l=u,s=r("2877"),f=Object(s["a"])(l,c,i,!1,null,null,null),p=f.exports;t["a"].use(a["a"]);var d=[{path:"/",name:"Home",component:p}],v=new a["a"]({mode:"history",base:"/",routes:d}),h=v,m=r("2f62");t["a"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),g=r("2c82"),w=r("522d"),y=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("HeaderComponent"),r("router-view")],1)},_=[],O=r("8785"),j=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("header",[r("ul",[r("li",[e._v("Home")]),r("li",[e._v("My Portfolio")]),r("li",[e._v("My Stories")]),r("li")])])}],S={name:"header_component"},k=S,P=Object(s["a"])(k,j,x,!1,null,"3ad7c99d",null),M=P.exports,$=r("9530"),E=r.n($);function H(){var e=Object(O["a"])(["\n        query($where: MessageWhereInput) {\n          messages(where: $where) {\n            text\n            isShown\n          }\n        }\n      "]);return H=function(){return e},e}var q={name:"app",components:{HeaderComponent:M},data:function(){return{}},computed:{},apollo:{messages:{query:E()(H()),variables:function(){return{where:{isShown:!0}}}}}},C=q,A=(r("5c0b"),Object(s["a"])(C,y,_,!1,null,null,null)),N=A.exports,T=new g["a"]({uri:"https://api-ap-northeast-1.graphcms.com/v2/ck9plr7ag0snl01z6c6ap48qn/master"});t["a"].use(w["a"]);var F=new w["a"]({defaultClient:T});t["a"].config.productionTip=!1,new t["a"]({router:h,store:b,apolloProvider:F,render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,n,r){"use strict";var t=r("9c0c"),o=r.n(t);o.a},"9c0c":function(e,n,r){}});
//# sourceMappingURL=app.5231b054.js.map