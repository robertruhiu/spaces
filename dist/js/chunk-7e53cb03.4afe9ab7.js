(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e53cb03"],{"02f4":function(t,e,r){var n=r("4588"),a=r("be13");t.exports=function(t){return function(e,r){var o,i,s=String(a(e)),c=n(r),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(i=s.charCodeAt(c+1))<56320||i>57343?t?s.charAt(c):o:t?s.slice(c,c+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),o=r("79e5"),i=r("be13"),s=r("2b4c"),c=r("520a"),l=s("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var d=s(t),f=!o(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),m=f?!o(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[l]=function(){return r}),r[d](""),!e}):void 0;if(!f||!m||"replace"===t&&!u||"split"===t&&!p){var h=/./[d],g=r(i,d,""[t],function(t,e,r,n,a){return e.exec===c?f&&!a?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),b=g[0],v=g[1];n(String.prototype,t,b),a(RegExp.prototype,d,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},"23ef":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[r("pageheader"),r("a-layout",{style:{backgroundColor:"#F8FAFB",marginTop:"1rem"}},[r("a-layout-content",{staticStyle:{"margin-top":"5rem"}},[r("a-row",[r("a-col",{staticClass:"jobdetails",attrs:{xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:14,offset:6},xl:{span:14,offset:6}}},[t.dataload?r("div",{staticStyle:{"text-align":"center"}},[r("a-spin")],1):r("div",[r("div",{staticStyle:{"border-bottom":"1px solid #e8e8e8","margin-bottom":"1%","padding-bottom":"3%"}},[r("span",[r("span",{staticStyle:{"font-weight":"700","font-size":"large"}},[t._v(t._s(t.job.title))]),"developer"===t.currentUserProfile.user_type&&!1===t.applied?r("span",{staticStyle:{float:"right"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.ApplyJob(t.job.id,t.currentUserProfile.id)}}},[t._v("Apply")])],1):t._e(),"developer"===t.currentUserProfile.user_type&&!0===t.applied?r("span",{staticStyle:{float:"right"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"manageapplications"})}}},[t._v("Manage Job application")])],1):t._e()])]),r("div",["developer"===t.currentUserProfile.user_type&&t.applied?r("a-alert",{attrs:{message:"Job application successful",type:"success",closeText:"Close Now"}}):t._e(),r("p",[r("strong",[t._v("Company name:")]),t._v(" "+t._s(t.job.company)+"\n                                "),r("span",{staticStyle:{"margin-left":"5%"}},[t._v("\n                                Location : "+t._s(t.job.location)+"\n                            ")])]),r("p",[t._v("Monthly renumeration * : "+t._s(t.job.remuneration))]),r("p",[t._v("\n                                Skills looking for :\n                                "),t._l(t.skills,function(e){return r("span",{key:e},[r("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2),r("p",[t._v("Application Deadline : "+t._s(t.deadline))])],1),r("div",[r("p",{staticStyle:{"font-weight":"700"}},[t._v("Job Details")]),r("p",[t._v(t._s(t.job.description))])])])])],1)],1)],1)],1)},a=[],o=(r("28a5"),r("96cf"),r("3b8d")),i=r("bf80"),s=r("96c7"),c=r("290c"),l=r("da05"),u=r("688c"),p=r("c1df"),d=r.n(p),f={name:"jobdetails",data:function(){return{job:{},skills:null,currentUserProfile:{},applied:!1,myjobs:[],dataload:!1,deadline:""}},components:{ACol:l["b"],ARow:c["a"],Pageheader:s["a"]},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(d.a,e={headers:{Authorization:"JWT "+this.$store.state.token}},this.dataload=!0,!this.$store.state.user.pk){t.next=16;break}return t.next=6,i["a"].currentuser(this.$store.state.user.pk,e);case 6:return this.currentUserProfile=t.sent.data,t.next=9,u["a"].jobdetails(this.$route.params.jobId,e);case 9:return this.job=t.sent.data,this.skills=this.job.tech_stack.split(","),t.next=13,u["a"].candidatejobs(this.$store.state.user.pk,e);case 13:if(this.myjobs=t.sent.data,this.deadline=d()(this.job.deadline).format("YYYY-MM-DD HH:mm:ss"),this.myjobs.length>0)for(r=0;r<this.myjobs.length;r++)this.myjobs[r].job.id===this.$route.params.jobId&&(this.applied=!0);else this.applied=!1;case 16:this.dataload=!1;case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},openNotification:function(){this.$notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:function(){console.log("Notification Clicked!")}})},ApplyJob:function(t,e){var r=this,n={headers:{Authorization:"JWT "+this.$store.state.token}};u["a"].applyjob({job:t,candidate:e,recruiter:this.job.posted_by,stage:"new",selected:!1},n).then(function(t){r.applied=!0}).catch(function(t){return t})}}},m=f,h=(r("31fc"),r("2877")),g=Object(h["a"])(m,n,a,!1,null,"7b37b544",null);e["default"]=g.exports},"28a5":function(t,e,r){"use strict";var n=r("aae3"),a=r("cb7c"),o=r("ebd6"),i=r("0390"),s=r("9def"),c=r("5f1b"),l=r("520a"),u=r("79e5"),p=Math.min,d=[].push,f="split",m="length",h="lastIndex",g=4294967295,b=!u(function(){RegExp(g,"y")});r("214f")("split",2,function(t,e,r,u){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(a,t,e);var o,i,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===e?g:e>>>0,b=new RegExp(t.source,u+"g");while(o=l.call(b,a)){if(i=b[h],i>p&&(c.push(a.slice(p,o.index)),o[m]>1&&o.index<a[m]&&d.apply(c,o.slice(1)),s=o[0][m],p=i,c[m]>=f))break;b[h]===o.index&&b[h]++}return p===a[m]?!s&&b.test("")||c.push(""):c.push(a.slice(p)),c[m]>f?c.slice(0,f):c}:"0"[f](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var a=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):v.call(String(a),r,n)},function(t,e){var n=u(v,t,this,e,v!==r);if(n.done)return n.value;var l=a(t),d=String(this),f=o(l,RegExp),m=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),y=new f(b?l:"^(?:"+l.source+")",h),k=void 0===e?g:e>>>0;if(0===k)return[];if(0===d.length)return null===c(y,d)?[d]:[];var j=0,x=0,_=[];while(x<d.length){y.lastIndex=b?x:0;var $,w=c(y,b?d:d.slice(x));if(null===w||($=p(s(y.lastIndex+(b?0:x)),d.length))===j)x=i(d,x,m);else{if(_.push(d.slice(j,x)),_.length===k)return _;for(var U=1;U<=w.length-1;U++)if(_.push(w[U]),_.length===k)return _;x=j=$}}return _.push(d.slice(j)),_}]})},"31fc":function(t,e,r){"use strict";var n=r("bb6c"),a=r.n(n);a.a},"4c13":function(t,e,r){"use strict";var n=r("a7a3"),a=r.n(n);a.a},"520a":function(t,e,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(i=function(t){var e,r,i,u,p=this;return l&&(r=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),c&&(e=p[s]),i=a.call(p,t),c&&i&&(p[s]=p.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"688c":function(t,e,r){"use strict";var n=r("3f4a");e["a"]={pickdeveloper:function(t,e){return Object(n["a"])().post("marketplace/pickdev ",t,e)},mydevelopers:function(t,e){return Object(n["a"])().get("marketplace/mydevs/".concat(t," "),e)},mydeveloperssimple:function(t,e){return Object(n["a"])().get("marketplace/mydevssimple/".concat(t," "),e)},allmyjobapplicants:function(t,e){return Object(n["a"])().get("marketplace/myapplicants/".concat(t," "),e)},alljobs:function(){return Object(n["a"])().get("marketplace/alljobs")},myjobs:function(t,e){return Object(n["a"])().get("marketplace/myjobs/".concat(t),e)},myjobssliced:function(t,e){return Object(n["a"])().get("marketplace/myjobssliced/".concat(t),e)},applicants:function(t,e){return Object(n["a"])().get("marketplace/jobapplicants/".concat(t),e)},applicantssliced:function(t,e){return Object(n["a"])().get("marketplace/jobapplicantssliced/".concat(t),e)},specificjob:function(t,e){return Object(n["a"])().get("marketplace/specificjob/".concat(t),e)},specificjobapplicants:function(t,e){return Object(n["a"])().get("marketplace/specificjobapplicants/".concat(t),e)},joboneapplicant:function(t,e,r){return Object(n["a"])().get("marketplace/myjobapplication/".concat(t,"/").concat(e),r)},jobdetails:function(t,e){return Object(n["a"])().get("marketplace/jobdetails/".concat(t),e)},candidatejobs:function(t,e){return Object(n["a"])().get("marketplace/candidatejobs/".concat(t),e)},updatejob:function(t,e,r){return Object(n["a"])().patch("marketplace/updatejob/".concat(t," "),e,r)},pickreject:function(t,e,r){return Object(n["a"])().patch("marketplace/pickreject/".concat(t," "),e,r)},retrieveapplication:function(t,e){return Object(n["a"])().get("marketplace/applicationprofile/".concat(t," "),e)},candidatemanager:function(t,e,r){return Object(n["a"])().patch("marketplace/candidateinfoupdater/".concat(t," "),e,r)},retrievecandidate:function(t,e){return Object(n["a"])().get("marketplace/candidateinfo/".concat(t," "),e)},unpublishjob:function(t,e,r){return Object(n["a"])().patch("marketplace/unpublishjob/".concat(t," "),e,r)},createjob:function(t,e){return Object(n["a"])().post("marketplace/createjob",t,e)},pickrecommended:function(t,e){return Object(n["a"])().post("marketplace/pickrecommended",t,e)},applyjob:function(t,e){return Object(n["a"])().post("marketplace/applyjob",t,e)},pickedapplications:function(t,e){return Object(n["a"])().get("marketplace/pickedapplications/".concat(t," "),e)},jobmanagerview:function(t,e){return Object(n["a"])().get("marketplace/jobmanagerview/".concat(t," "),e)},talentpickedmanagerview:function(t,e){return Object(n["a"])().get("marketplace/talentpickedmanagerview/".concat(t," "),e)}}},"96c7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:r("b8fb")}})])],1),n("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[n("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                Login\n            ")]),t.$store.state.isUserLoggedIn?t._e():n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n            ")]),n("a",[t.$store.state.isUserLoggedIn?n("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                ")]):t._e()],1)],1)]),n("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[n("div",{staticStyle:{float:"right"}},[n("Menusider")],1)])],1)},a=[],o=(r("96cf"),r("3b8d")),i=r("8808"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[r("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[r("a-icon",{attrs:{type:"menu-fold"}})],1),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"0"},[r("router-link",{attrs:{to:"/talent"}},[r("span",[t._v("Talent")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("a-menu-item",{key:"1"},[r("router-link",{attrs:{to:"/recruiter"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("a-menu-item",{key:"6"},[r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?r("a-menu-item",{key:"2"},[r("router-link",{attrs:{to:"/developer"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("a-menu-item",{key:"7"},[r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"3"},[r("router-link",{attrs:{to:"/login"}},[r("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"4"},[r("router-link",{attrs:{to:"/register"}},[r("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?r("a-menu-item",{key:"5"},[r("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},c=[],l=r("bf80"),u={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=5;break}return t.next=4,l["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},p=u,d=r("2877"),f=Object(d["a"])(p,s,c,!1,null,"8dc895ae",null),m=f.exports,h={name:"Header",components:{hideAt:i["hideAt"],showAt:i["showAt"],Menusider:m},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user){t.next=5;break}return t.next=4,l["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},g=h,b=(r("4c13"),Object(d["a"])(g,n,a,!1,null,"c4d30e3a",null));e["a"]=b.exports},a7a3:function(t,e,r){},aae3:function(t,e,r){var n=r("d3f4"),a=r("2d95"),o=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},bb6c:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7e53cb03.4afe9ab7.js.map