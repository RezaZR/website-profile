(function(t){function e(e){for(var r,a,i=e[0],s=e[1],l=e[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"11ec":function(t,e,n){},"1a89":function(t,e,n){},"249a":function(t,e,n){},4134:function(t,e,n){"use strict";var r=n("86c8"),o=n.n(r);o.a},"4b07":function(t,e,n){"use strict";var r=n("1a89"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderComponent"),n("router-view")],1)},c=[],a=n("8785"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Portfolio")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Stories")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Info")])],1),n("li",[n("SwitchComponent")],1)])])},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"switch",on:{click:t.handleSwitchClick}},[t._m(0)])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"switch__slider sun"},[n("div",{staticClass:"crescent"})])}],f={name:"switch_component",methods:{handleSwitchClick:function(t){t.srcElement.children[0].classList.contains("active")?(t.srcElement.children[0].classList.remove("active"),document.documentElement.dataset.id="13pzd77"):(t.srcElement.children[0].classList.add("active"),document.documentElement.dataset.id="917acd2"),document.documentElement.classList.add("fd377dy"),window.setTimeout((function(){document.documentElement.classList.remove("fd377dy")}),600)}}},d=f,m=(n("4b07"),n("2877")),p=Object(m["a"])(d,l,u,!1,null,"28b38f70",null),h=p.exports,v={name:"header_component",components:{SwitchComponent:h}},g=v,b=(n("4134"),Object(m["a"])(g,i,s,!1,null,"a5c73556",null)),w=b.exports,_=n("9530"),y=n.n(_);function x(){var t=Object(a["a"])(["\n        query($where: MessageWhereInput) {\n          messages(where: $where) {\n            text\n            isShown\n          }\n        }\n      "]);return x=function(){return t},t}var k={name:"app",components:{HeaderComponent:w},data:function(){return{}},computed:{},apollo:{messages:{query:y()(x()),variables:function(){return{where:{isShown:!0}}}}}},C=k,j=(n("034f"),Object(m["a"])(C,o,c,!1,null,null,null)),E=j.exports,O=n("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var S=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container"},[n("div",{staticClass:"home__content",attrs:{id:"TypingText"}},[n("h3",[t._v("Hello,")]),n("h1",[t._v("Name's Reza")]),n("div",{staticClass:"home__content__contact"},[n("a",{attrs:{href:"https://linkedin.com/RezaZR",target:"blank"}},[n("LinkedInIcon")],1),n("a",{attrs:{href:"https://github.com/RezaZR",target:"blank"}},[n("GithubIcon")],1),n("a",{attrs:{href:"https://medium.com/@rezazr",target:"blank"}},[n("MediumIcon")],1)]),n("button",{staticClass:"button button--primary"},[t._v("Start a Project")]),t._m(0)])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://"}},[n("button",{staticClass:"button button--black"},[t._v("See Portfolio")])])}],$=(n("ac1f"),n("1276"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 112.196 112.196"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 112.196 112.196","xml:space":"preserve"}},[n("g",[n("circle",{attrs:{cx:"56.098",cy:"56.097",r:"56.098"}}),n("g",[n("path",{attrs:{d:"M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118\n\t\t\tc-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715\n\t\t\tc-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662\n\t\t\tC83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967\n\t\t\tc0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z\n\t\t\t M27.865,83.739H41.27V43.409H27.865V83.739z"}})])]),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g")])}),P=[],H={name:"linked_in_icon"},I=H,L=(n("f5a2"),Object(m["a"])(I,$,P,!1,null,"147ccfc4",null)),M=L.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"}})])},q=[],N={name:"github_icon"},R=N,A=(n("93ee"),Object(m["a"])(R,B,q,!1,null,"ab6c5f06",null)),V=A.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{id:"Bold","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z"}})])},G=[],J={name:"medium_icon"},Z=J,W=(n("cb82"),Object(m["a"])(Z,F,G,!1,null,"3f9530a0",null)),D=W.exports,K={name:"Home",components:{LinkedInIcon:M,GithubIcon:V,MediumIcon:D},methods:{autoType:function(t,e){var n=document.querySelector(t),r=document.createElement("div");r.style.right="initial",r.style.left=0,r.classList.add("cursor"),n.insertBefore(r,n.children[0]);var o=n.querySelector(".cursor"),c=n.getElementsByTagName("h3"),a=c[0].textContent.trim().split(""),i=a.length;c[0].textContent="|";var s=n.getElementsByTagName("h1"),l=s[0].textContent.trim().split(""),u=l.length;s[0].textContent="";var f="";setTimeout((function(){c[0].style.opacity=1,o.removeAttribute("style"),c[0].textContent="";for(var t=function(t){setTimeout((function(){f+=a[t],c[0].textContent=f}),t*e)},n=0;n<i;n++)t(n);setTimeout((function(){s[0].style.opacity=1,f="",s[0].textContent="";for(var t=function(t){setTimeout((function(){f+=l[t],s[0].textContent=f}),t*e+100)},n=0;n<u;n++)t(n)}),e*i)}),750)}},mounted:function(){this.autoType("#TypingText",200)}},Q=K,U=(n("e220"),Object(m["a"])(Q,T,z,!1,null,"0ca2a527",null)),X=U.exports;r["a"].use(S["a"]);var Y=[{path:"/",name:"Home",component:X}],tt=new S["a"]({mode:"history",base:"/",routes:Y}),et=tt,nt=n("2f62");r["a"].use(nt["a"]);var rt=new nt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ot=n("2c82"),ct=n("522d"),at=new ot["a"]({uri:"https://api-ap-northeast-1.graphcms.com/v2/ck9plr7ag0snl01z6c6ap48qn/master"});r["a"].use(ct["a"]);var it=new ct["a"]({defaultClient:at});r["a"].config.productionTip=!1,new r["a"]({router:et,store:rt,apolloProvider:it,render:function(t){return t(E)}}).$mount("#app")},"5c85":function(t,e,n){},8130:function(t,e,n){},"85ec":function(t,e,n){},"86c8":function(t,e,n){},"93ee":function(t,e,n){"use strict";var r=n("8130"),o=n.n(r);o.a},cb82:function(t,e,n){"use strict";var r=n("249a"),o=n.n(r);o.a},e220:function(t,e,n){"use strict";var r=n("5c85"),o=n.n(r);o.a},f5a2:function(t,e,n){"use strict";var r=n("11ec"),o=n.n(r);o.a}});
//# sourceMappingURL=app.db4eb3d7.js.map