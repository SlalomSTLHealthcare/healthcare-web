(function(t){function e(e){for(var r,u,l=e[0],s=e[1],i=e[2],f=0,p=[];f<l.length;f++)u=l[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={1:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var c=s;a.push([3,0]),n()})({3:function(t,e,n){t.exports=n("Vtdi")},"55VY":function(t,e,n){},"8uur":function(t,e,n){"use strict";var r=n("55VY"),o=n.n(r);o.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),o=n("XJYT"),a=n.n(o),u=(n("D66Q"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)}),l=[],s=(n("rAmE"),n("KHd+")),i={},c=Object(s["a"])(i,u,l,!1,null,null,null),f=c.exports,p=n("jE9Z"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{src:n("zwU1")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("el-button",{on:{click:t.testCall}},[t._v("HELLO")]),n("h1",[t._v(" here is your data: "+t._s(t.dataMessage))]),t._m(0)],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    whaddup\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])}],_=n("vDqi"),b=n.n(_),g={name:"HelloWorld",data:function(){return{dataMessage:"Original data message"}},props:{msg:String},methods:{testCall:function(){var t=this;b.a.post("http://localhost:3000/api/people",{full_name:"Post Test",bio:"this is a test",company:"testers inc",image_loc:"aojf"}).then(function(e){t.dataMessage=e.data[0].full_name}).catch(function(t){console.log("error")})}}},w=g,y=(n("8uur"),Object(s["a"])(w,m,h,!1,null,"dcabc91c",null)),j=y.exports,O={name:"home",components:{HelloWorld:j}},x=O,E=Object(s["a"])(x,d,v,!1,null,null,null),M=E.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],$={},k=Object(s["a"])($,P,S,!1,null,null,null),H=k.exports;r["default"].use(p["a"]);var T=new p["a"]({routes:[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:H}]}),V=n("L2JU");r["default"].use(V["a"]);var C=new V["a"].Store({state:{},mutations:{},actions:{}});r["default"].use(a.a),r["default"].config.productionTip=!1,new r["default"]({router:T,store:C,render:function(t){return t(f)}}).$mount("#app")},q6ma:function(t,e,n){},rAmE:function(t,e,n){"use strict";var r=n("q6ma"),o=n.n(r);o.a},zwU1:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.14a6905e.js.map