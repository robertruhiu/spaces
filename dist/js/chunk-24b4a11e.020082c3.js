(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24b4a11e"],{"02f4":function(t,e,r){var n=r("4588"),c=r("be13");t.exports=function(t){return function(e,r){var o,a,i=String(c(e)),s=n(r),u=i.length;return s<0||s>=u?t?"":void 0:(o=i.charCodeAt(s),o<55296||o>56319||s+1===u||(a=i.charCodeAt(s+1))<56320||a>57343?t?i.charAt(s):o:t?i.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1226:function(t,e,r){"use strict";var n=r("3f4a");e["a"]={projects:function(t,e){return Object(n["a"])().get("projects/projects/".concat(t),e)},recommendedprojects:function(t,e){return Object(n["a"])().get("projects/recommendedprojects/".concat(t),e)},allprojects:function(t){return Object(n["a"])().get("projects/allprojects",t)},projectdetails:function(t,e){return Object(n["a"])().get("projects/projectdetails/".concat(t),e)},recentprojects:function(t,e){return Object(n["a"])().get("projects/recentprojects/".concat(t),e)},myrecentprojects:function(t,e){return Object(n["a"])().get("projects/myrecentprojects/".concat(t),e)},developerprojects:function(t,e){return Object(n["a"])().get("projects/developerprojects/".concat(t),e)},developerprojectreport:function(t,e,r){return Object(n["a"])().get("projects/developerprojectreport/".concat(t,"/").concat(e,"/"),r)},getverified:function(t){return Object(n["a"])().get("projects/frameworks",t)},selfverifyproject:function(t,e,r){return Object(n["a"])().get("projects/selfverifyproject/".concat(t,"/").concat(e),r)},selfassessprojectcreate:function(t,e){return Object(n["a"])().post("createassess",t,e)},myprojects:function(t,e){return Object(n["a"])().get("myprojects/".concat(t),e)},testcenters:function(t,e){return Object(n["a"])().get("mytestcenters/".concat(t),e)},myprojectdetails:function(t,e){return Object(n["a"])().get("myprojectdetails/".concat(t),e)},myprojectdetailspatch:function(t,e,r){return Object(n["a"])().patch("myprojectdetailsupdater/".concat(t),e,r)},developerselectproject:function(t,e){return Object(n["a"])().post("projects/developerprojects/".concat(t),e)},newselfverify:function(t,e){return Object(n["a"])().post("newselfverify/".concat(t),e)}}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),c=r("32e9"),o=r("79e5"),a=r("be13"),i=r("2b4c"),s=r("520a"),u=i("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var f=i(t),d=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),h=d?!o(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[f](""),!e}):void 0;if(!d||!h||"replace"===t&&!l||"split"===t&&!p){var g=/./[f],v=r(a,f,""[t],function(t,e,r,n,c){return e.exec===s?d&&!c?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),b=v[0],j=v[1];n(String.prototype,t,b),c(RegExp.prototype,f,2==e?function(t,e){return j.call(t,this,e)}:function(t){return j.call(t,this)})}}},"28a5":function(t,e,r){"use strict";var n=r("aae3"),c=r("cb7c"),o=r("ebd6"),a=r("0390"),i=r("9def"),s=r("5f1b"),u=r("520a"),l=r("79e5"),p=Math.min,f=[].push,d="split",h="length",g="lastIndex",v=4294967295,b=!l(function(){RegExp(v,"y")});r("214f")("split",2,function(t,e,r,l){var j;return j="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[h]||2!="ab"[d](/(?:ab)*/)[h]||4!="."[d](/(.?)(.?)/)[h]||"."[d](/()()/)[h]>1||""[d](/.?/)[h]?function(t,e){var c=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(c,t,e);var o,a,i,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=void 0===e?v:e>>>0,b=new RegExp(t.source,l+"g");while(o=u.call(b,c)){if(a=b[g],a>p&&(s.push(c.slice(p,o.index)),o[h]>1&&o.index<c[h]&&f.apply(s,o.slice(1)),i=o[0][h],p=a,s[h]>=d))break;b[g]===o.index&&b[g]++}return p===c[h]?!i&&b.test("")||s.push(""):s.push(c.slice(p)),s[h]>d?s.slice(0,d):s}:"0"[d](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var c=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,c,n):j.call(String(c),r,n)},function(t,e){var n=l(j,t,this,e,j!==r);if(n.done)return n.value;var u=c(t),f=String(this),d=o(u,RegExp),h=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),x=new d(b?u:"^(?:"+u.source+")",g),m=void 0===e?v:e>>>0;if(0===m)return[];if(0===f.length)return null===s(x,f)?[f]:[];var y=0,w=0,S=[];while(w<f.length){x.lastIndex=b?w:0;var k,O=s(x,b?f:f.slice(w));if(null===O||(k=p(i(x.lastIndex+(b?0:w)),f.length))===y)w=a(f,w,h);else{if(S.push(f.slice(y,w)),S.length===m)return S;for(var R=1;R<=O.length-1;R++)if(S.push(O[R]),S.length===m)return S;w=y=k}}return S.push(f.slice(y)),S}]})},"2fdb":function(t,e,r){"use strict";var n=r("5ca1"),c=r("d2c8"),o="includes";n(n.P+n.F*r("5147")(o),"String",{includes:function(t){return!!~c(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"386d":function(t,e,r){"use strict";var n=r("cb7c"),c=r("83a1"),o=r("5f1b");r("214f")("search",1,function(t,e,r,a){return[function(r){var n=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=a(r,t,this);if(e.done)return e.value;var i=n(t),s=String(this),u=i.lastIndex;c(u,0)||(i.lastIndex=0);var l=o(i,s);return c(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]})},5147:function(t,e,r){var n=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(c){}}return!0}},"520a":function(t,e,r){"use strict";var n=r("0bfb"),c=RegExp.prototype.exec,o=String.prototype.replace,a=c,i="lastIndex",s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t[i]||0!==e[i]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(t){var e,r,a,l,p=this;return u&&(r=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),s&&(e=p[i]),a=c.call(p,t),s&&a&&(p[i]=p.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),c=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},6762:function(t,e,r){"use strict";var n=r("5ca1"),c=r("c366")(!0);n(n.P,"Array",{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"6b54":function(t,e,r){"use strict";r("3846");var n=r("cb7c"),c=r("0bfb"),o=r("9e1e"),a="toString",i=/./[a],s=function(t){r("2aba")(RegExp.prototype,a,t,!0)};r("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?c.call(t):void 0)}):i.name!=a&&s(function(){return i.call(this)})},"7f7f":function(t,e,r){var n=r("86cc").f,c=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in c||r("9e1e")&&n(c,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},aae3:function(t,e,r){var n=r("d3f4"),c=r("2d95"),o=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==c(t))}},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},bc30:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[r("RecruiterSider"),r("a-layout",{style:{backgroundColor:"#ffffff"}},[r("a-layout-content",[r("a-row",{staticStyle:{"background-color":"#004ec7",position:"fixed",width:"100%","z-index":"1"}},[r("a-col",{attrs:{span:"4"}},[r("h1",{staticStyle:{color:"white","padding-left":"4rem","padding-top":"1rem"}},[t._v("Projects")])]),r("a-col",{attrs:{span:16}},[r("div",{staticClass:"center",staticStyle:{"padding-top":"1rem"}},[r("a-auto-complete",{staticStyle:{width:"80%","z-index":"0"},attrs:{dataSource:t.dataSource,placeholder:"Search skills like react,javascript,vue python",filterOption:t.filterOption},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[r("a-input",[r("a-icon",{staticClass:"certain-category-icon",attrs:{slot:"suffix",type:"search"},slot:"suffix"})],1)],1)],1)])],1),r("div",[r("a-row",{staticStyle:{"margin-top":"4rem",padding:"3%"},attrs:{gutter:"8"}},t._l(t.filteredList,function(e){return r("a-col",{key:e,attrs:{span:"8"}},[r("a",{on:{click:function(r){return t.navigateTo({name:"pickedprojectdetails",params:{projectId:e.id,candidateId:t.application.candidate.id,jobId:t.application.job.id,applicationId:t.application.id}})}}},[r("a-card",{attrs:{hoverable:""}},[r("img",{staticStyle:{height:"10rem"},attrs:{slot:"cover",alt:"example",src:e.image},slot:"cover"}),r("a-card-meta",{attrs:{title:e.name}},[r("template",{slot:"description"},[r("p",[t._v("\n                                        Project skill tags :\n                                        "),t._l(e.skills,function(e){return r("span",{key:e.id},[r("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2)])],2)],1)],1)])}),1)],1)],1)],1)],1)},c=[],o=(r("386d"),r("6b54"),r("6762"),r("2fdb"),r("7f7f"),r("28a5"),r("96cf"),r("3b8d")),a=r("d225"),i=r("290c"),s=r("113c"),u=r("1226"),l=r("da05"),p=r("688c"),f=function t(e,r,n,c){Object(a["a"])(this,t),this.id=e,this.name=r,this.skills=n,this.image=c},d={name:"projectlist",data:function(){return{projects:null,job:{},application:{},search:"",dataSource:["Django","Javascript","Python","Php","Postgres","Sql","Html","Css","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","Rails","Meteor","AI","Cybersecurity","Blockchain","Arduino","Spring","Bitcoin","Kotlin","Scala","Nativescript ","Android","Website","Mobile"],allprojects:[]}},components:{ACol:l["b"],ARow:i["a"],RecruiterSider:s["a"]},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},this.ApplicationId=this.$store.state.route.params.applicationId,t.next=4,p["a"].retrieveapplication(this.ApplicationId,e);case 4:this.application=t.sent.data,u["a"].allprojects(e).then(function(t){r.projects=t.data;for(var e=0;e<r.projects.length;e++){var n=r.projects[e].tags.split(","),c=r.projects[e].id,o=r.projects[e].name,a=n,i=r.projects[e].projectimage1,s=new f(c,o,a,i);r.allprojects.push(s)}}).catch();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)}},computed:{filteredList:function(){var t=this;return this.allprojects.filter(function(e){return e.skills.toString().toLowerCase().includes(t.search.toLowerCase())})}}},h=d,g=r("2877"),v=Object(g["a"])(h,n,c,!1,null,"789e5ef6",null);e["default"]=v.exports},d225:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",function(){return n})},d2c8:function(t,e,r){var n=r("aae3"),c=r("be13");t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(c(t))}}}]);
//# sourceMappingURL=chunk-24b4a11e.020082c3.js.map