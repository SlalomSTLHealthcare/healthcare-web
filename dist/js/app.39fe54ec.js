(function(t){function e(e){for(var r,u,l=e[0],i=e[1],s=e[2],f=0,p=[];f<l.length;f++)u=l[f],a[u]&&p.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={1:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=i;o.push([3,0]),n()})({3:function(t,e,n){t.exports=n("Vtdi")},VcTm:function(t,e,n){"use strict";var r=n("qgIO"),a=n.n(r);a.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),a=n("XJYT"),o=n.n(a),u=(n("D66Q"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)}),l=[],i=(n("rAmE"),n("KHd+")),s={},c=Object(i["a"])(s,u,l,!1,null,null,null),f=c.exports,p=n("jE9Z"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{src:n("zwU1")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("el-button",{on:{click:t.testCall}},[t._v("HELLO")]),n("h1",[t._v(" here is your data: "+t._s(t.dataMessage))]),t._m(0)],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    whaddup\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])}],g=n("vDqi"),_=n.n(g),b={name:"HelloWorld",data:function(){return{dataMessage:"Original data message"}},props:{msg:String},methods:{testCall:function(){var t=this;_.a.get("https://slalom-health-api-staging.herokuapp.com/api/people").then(function(e){t.dataMessage=e.data[0].full_name}).catch(function(t){console.log("error")})}}},w=b,O=(n("VcTm"),Object(i["a"])(w,m,h,!1,null,"413493b0",null)),y=O.exports,j={name:"home",components:{HelloWorld:y}},x=j,E=Object(i["a"])(x,d,v,!1,null,null,null),k=E.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],T={},$=Object(i["a"])(T,M,S,!1,null,null,null),H=$.exports;r["default"].use(p["a"]);var P=new p["a"]({routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:H}]}),V=n("L2JU");r["default"].use(V["a"]);var q=new V["a"].Store({state:{},mutations:{},actions:{}});r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({router:P,store:q,render:function(t){return t(f)}}).$mount("#app")},q6ma:function(t,e,n){},qgIO:function(t,e,n){},rAmE:function(t,e,n){"use strict";var r=n("q6ma"),a=n.n(r);a.a},zwU1:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.39fe54ec.js.map