(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b85511e"],{"02f4":function(t,e,n){var a=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var i,s,c=String(r(e)),o=a(n),l=c.length;return o<0||o>=l?t?"":void 0:(i=c.charCodeAt(o),i<55296||i>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):i:t?c.slice(o,o+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1226:function(t,e,n){"use strict";var a=n("3f4a");e["a"]={projects:function(t,e){return Object(a["a"])().get("projects/projects/".concat(t),e)},recommendedprojects:function(t,e){return Object(a["a"])().get("projects/recommendedprojects/".concat(t),e)},allprojects:function(t){return Object(a["a"])().get("projects/allprojects",t)},projectdetails:function(t,e){return Object(a["a"])().get("projects/projectdetails/".concat(t),e)},recentprojects:function(t,e){return Object(a["a"])().get("projects/recentprojects/".concat(t),e)},myrecentprojects:function(t,e){return Object(a["a"])().get("projects/myrecentprojects/".concat(t),e)},developerprojects:function(t,e){return Object(a["a"])().get("projects/developerprojects/".concat(t),e)},developerprojectreport:function(t,e,n){return Object(a["a"])().get("projects/developerprojectreport/".concat(t,"/").concat(e,"/"),n)},getverified:function(t){return Object(a["a"])().get("projects/frameworks",t)},selfverifyproject:function(t,e,n){return Object(a["a"])().get("projects/selfverifyproject/".concat(t,"/").concat(e),n)},basicproject:function(t,e,n){return Object(a["a"])().get("projects/basicproject/".concat(t,"/").concat(e),n)},selfassessprojectcreate:function(t,e){return Object(a["a"])().post("createassess",t,e)},myprojects:function(t,e){return Object(a["a"])().get("myprojects/".concat(t),e)},myprojectdetails:function(t,e){return Object(a["a"])().get("myprojectdetails/".concat(t),e)},myprojectdetailspatch:function(t,e,n){return Object(a["a"])().patch("myprojectdetailsupdater/".concat(t),e,n)},newselfverify:function(t,e){return Object(a["a"])().post("newselfverify/".concat(t),e)}}},"164b":function(t,e,n){t.exports=n.p+"img/pick.f7aa0c46.png"},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),r=n("32e9"),i=n("79e5"),s=n("be13"),c=n("2b4c"),o=n("520a"),l=c("species"),p=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=c(t),d=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=d?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e})):void 0;if(!d||!h||"replace"===t&&!p||"split"===t&&!u){var g=/./[f],v=n(s,f,""[t],(function(t,e,n,a,r){return e.exec===o?d&&!r?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}})),b=v[0],m=v[1];a(String.prototype,t,b),r(RegExp.prototype,f,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"24b1":function(t,e,n){},"28a5":function(t,e,n){"use strict";var a=n("aae3"),r=n("cb7c"),i=n("ebd6"),s=n("0390"),c=n("9def"),o=n("5f1b"),l=n("520a"),p=n("79e5"),u=Math.min,f=[].push,d="split",h="length",g="lastIndex",v=4294967295,b=!p((function(){RegExp(v,"y")}));n("214f")("split",2,(function(t,e,n,p){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[h]||2!="ab"[d](/(?:ab)*/)[h]||4!="."[d](/(.?)(.?)/)[h]||"."[d](/()()/)[h]>1||""[d](/.?/)[h]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(r,t,e);var i,s,c,o=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,d=void 0===e?v:e>>>0,b=new RegExp(t.source,p+"g");while(i=l.call(b,r)){if(s=b[g],s>u&&(o.push(r.slice(u,i.index)),i[h]>1&&i.index<r[h]&&f.apply(o,i.slice(1)),c=i[0][h],u=s,o[h]>=d))break;b[g]===i.index&&b[g]++}return u===r[h]?!c&&b.test("")||o.push(""):o.push(r.slice(u)),o[h]>d?o.slice(0,d):o}:"0"[d](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r,a):m.call(String(r),n,a)},function(t,e){var a=p(m,t,this,e,m!==n);if(a.done)return a.value;var l=r(t),f=String(this),d=i(l,RegExp),h=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),y=new d(b?l:"^(?:"+l.source+")",g),_=void 0===e?v:e>>>0;if(0===_)return[];if(0===f.length)return null===o(y,f)?[f]:[];var j=0,x=0,k=[];while(x<f.length){y.lastIndex=b?x:0;var w,S=o(y,b?f:f.slice(x));if(null===S||(w=u(c(y.lastIndex+(b?0:x)),f.length))===j)x=s(f,x,h);else{if(k.push(f.slice(j,x)),k.length===_)return k;for(var O=1;O<=S.length-1;O++)if(k.push(S[O]),k.length===_)return k;x=j=w}}return k.push(f.slice(j)),k}]}))},"2fdb":function(t,e,n){"use strict";var a=n("5ca1"),r=n("d2c8"),i="includes";a(a.P+a.F*n("5147")(i),"String",{includes:function(t){return!!~r(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3f54":function(t,e,n){t.exports=n.p+"img/recommend.81717cff.png"},5147:function(t,e,n){var a=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,!"/./"[t](e)}catch(r){}}return!0}},"520a":function(t,e,n){"use strict";var a=n("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,s=r,c="lastIndex",o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],p=o||l;p&&(s=function(t){var e,n,s,p,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",a.call(u))),o&&(e=u[c]),s=r.call(u,t),o&&s&&(u[c]=u.global?s.index+s[0].length:e),l&&s&&s.length>1&&i.call(s[0],n,(function(){for(p=1;p<arguments.length-2;p++)void 0===arguments[p]&&(s[p]=void 0)})),s}),t.exports=s},"5c2e":function(t,e,n){"use strict";var a=n("e733"),r=n.n(a);r.a},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},6762:function(t,e,n){"use strict";var a=n("5ca1"),r=n("c366")(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6b54":function(t,e,n){"use strict";n("3846");var a=n("cb7c"),r=n("0bfb"),i=n("9e1e"),s="toString",c=/./[s],o=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?o((function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)})):c.name!=s&&o((function(){return c.call(this)}))},aae3:function(t,e,n){var a=n("d3f4"),r=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},bb97:function(t,e,n){"use strict";var a=n("24b1"),r=n.n(a);r.a},d225:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},d2c8:function(t,e,n){var a=n("aae3"),r=n("be13");t.exports=function(t,e,n){if(a(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},e733:function(t,e,n){},f201d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[a("RecruiterSider"),a("a-layout",{style:{backgroundColor:"#F8FAFB"}},[a("a-layout-content",[a("CandidateHeader"),a("a-row",{staticStyle:{padding:"1% 1%"}},[a("a-col",{staticStyle:{padding:"4px 20px"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:16,offset:0},lg:{span:16,offset:0},xl:{span:16,offset:0}}},[a("div",{staticClass:"profile",staticStyle:{"padding-bottom":"2%"}},[a("a-row",[a("a-col",{attrs:{span:22,v:""}},[a("p",[t._v("About")]),a("p",[t._v(t._s(t.currentUserProfile.about))])])],1),"active"===t.application.stage||"test"===t.application.stage||"interview"===t.application.stage||"offer"===t.application.stage||t.staff?a("div",{staticStyle:{"margin-top":"0.5rem"}},[a("a-row",[a("a-col",{staticClass:"spacer",attrs:{span:12}},[a("a-icon",{attrs:{type:"mail"}}),t._v(" : "+t._s(t.currentUserProfile.user.email)+"\n\n                            ")],1),a("a-col",{staticClass:"spacer",attrs:{span:12}},[a("span",[t._v("\n                                Salary expectations: $"+t._s(t.currentUserProfile.salary)+" monthly\n\n                        ")])]),a("a-col",{attrs:{span:6}},[a("span",[a("a-icon",{attrs:{type:"linkedin"}}),t._v(" :\n                                "),a("a",{attrs:{href:t.currentUserProfile.linkedin_url,target:"_blank"}},[t._v(" Linkedin profile")])],1)]),a("a-col",{attrs:{span:6}},[a("span",[a("a-icon",{attrs:{type:"github"}}),t._v(" :\n\n                                "),a("a",{attrs:{href:t.currentUserProfile.github_repo,target:"_blank"}},[t._v("Github profile ")])],1)]),a("a-col",{attrs:{span:6}},[a("span",[a("a-icon",{attrs:{type:"file-pdf"}}),t._v(" :\n                                "),a("a",{attrs:{href:t.cv,target:"_blank"}},[t._v(" Cv link")])],1)])],1)],1):t._e(),a("a-row",{staticStyle:{"margin-top":"1rem"}},[a("a-col",{attrs:{span:6}},[t._v("\n                                Experience "),a("br"),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                                    "+t._s(t.currentUserProfile.years)+" years\n                                ")])],1),a("a-col",{attrs:{span:10}},[a("span",[t._v("\n                                Availability "),a("br"),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                             "+t._s(t.currentUserProfile.availabilty)+"\n                        ")])],1)]),a("a-col",{attrs:{span:6}},[a("span",[t._v("\n                                Location "),a("br"),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                             "+t._s(t.currentUserProfile.country)+"\n                        ")])],1)])],1)],1),a("div",{staticClass:"bio"},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[t.takenquizzes.length>0?a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"codepen"}}),t._v("\n                                    Skills\n                                ")],1),a("p",[t._v("Quizzes taken by Candidate")]),t._l(t.takenquizzes,(function(e){return a("div",{key:e},[t._v("\n                                    "+t._s(e.quiz.subject.name)+":\n                                    "),a("a-progress",{attrs:{percent:e.score}})],1)}))],2):t._e(),t.portfolio.length>0?a("a-tab-pane",{key:"2"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"solution"}}),t._v("\n                                    Projects portfolio\n                                ")],1),a("div",{staticStyle:{padding:"0 2%"}},t._l(t.portfolio,(function(e){return a("div",{key:e.id,staticStyle:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"2%","padding-top":"2%"}},[a("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),a("p",[t._v("\n                                            Tools used:\n                                            "),t._l(e.tags,(function(e){return a("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                "+t._s(e)+"\n                                            ")])}))],2),a("p",[t._v(t._s(e.description)+"\n                                        ")]),a("a",{attrs:{href:e.demo,target:"_blank"}},[t._v("view project")])])})),0)]):t._e(),t.experiences.length>0?a("a-tab-pane",{key:"3"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"hourglass"}}),t._v("\n                                    Work experience\n                                ")],1),a("div",{staticStyle:{padding:"2%"}},[a("a-timeline",t._l(t.experiences,(function(e){return a("a-timeline-item",{key:e.id},[a("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),a("p",[a("span",[a("a-icon",{attrs:{type:"bank"}}),t._v("  "+t._s(e.company)+" "),a("a-icon",{attrs:{type:"environment"}}),t._v("  "+t._s(e.location)+" "),a("a-icon",{attrs:{type:"hourglass"}}),t._v("  "+t._s(e.duration)+"months")],1)]),a("p",[t._v("\n                                                Technologies used:\n                                                "),t._l(e.tags,(function(e){return a("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                    "+t._s(e)+"\n                                                ")])}))],2),a("p",[t._v(t._s(e.description))])])})),1)],1)]):t._e()],1)],1)]),a("a-col",{staticStyle:{"margin-top":"0.4%","padding-left":"15px","padding-right":"15px"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:8,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[a("div",{staticClass:"actions"},[a("p",[t._v("Skill tags")]),a("p",[t._v("Candidate skill tags(what candidate says they can do.You can asign a\n                            project to test)\n                        ")]),a("p",t._l(t.skilltags,(function(e){return a("span",{key:e.id},[a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                                "+t._s(e)+"\n                            ")])],1)})),0),"complete"===t.application.test_stage?a("div",[a("a",[t._v("View Project Report")])]):a("div",[t.application.project?a("a",{on:{click:function(e){return t.navigateTo({name:"pickedprojectdetails",params:{projectId:t.application.project.id,candidateId:t.currentUser.id,jobId:t.job.id,applicationId:t.application.id}})}}},[a("strong",[t._v("Project Assigned:")]),t._v(" "+t._s(t.application.project.name)+"\n                            ")]):t._e(),"test"===t.application.stage&&null===t.application.project?a("a-button",{staticStyle:{"background-color":"#9c27b0",color:"white"},attrs:{size:t.small},on:{click:function(e){return t.showModal()}}},[a("a-icon",{attrs:{type:"codepen"}}),t._v("\n                                Assign test\n                            ")],1):t._e(),t.application.projectstarttime?a("p",[t._v("\n                        Project starttime: "+t._s(t.application.projectstarttime)+"\n                    ")]):t._e()],1)])])],1),a("a-modal",{staticStyle:{top:"60px"},attrs:{title:"Project assignments ",footer:null},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("Would you like to get a project recommendation or pick a\n                    project?")]),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a",{on:{click:function(e){return t.navigateTo({name:"projectlist"})}}},[a("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%"}},[a("img",{staticStyle:{"margin-left":"25%",width:"50%","margin-right":"25%"},attrs:{src:n("164b")}}),a("p",{staticStyle:{"text-align":"center"}},[t._v("Pick one by myself")])])])]),a("a-col",{attrs:{span:12}},[a("a",{on:{click:function(e){return t.navigateTo({name:"projectdetails",params:{jobId:t.job.id,candidateId:t.currentUser.id,applicationId:t.application.id}})}}},[a("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%"}},[a("img",{staticStyle:{"margin-left":"25%",width:"50%","margin-right":"25%"},attrs:{src:n("3f54")}}),a("p",{staticStyle:{"text-align":"center"}},[t._v("Get recommendation")])])])])],1),t.recentprojects.length>0?a("div",[a("p",[t._v("My Recent projects")]),t._l(t.recentprojects,(function(e){return a("p",{key:e},[t.recentprojects?a("a",{on:{click:function(n){return t.navigateTo({name:"pickedprojectdetails",params:{projectId:e.id,jobId:t.job.id,candidateId:t.currentUser.id,applicationId:t.application.id}})}}},[t._v("\n                            "+t._s(e.name)+"\n                        ")]):t._e()])}))],2):t._e()],1)],1)],1)],1)},r=[],i=n("75fc"),s=(n("6762"),n("2fdb"),n("28a5"),n("96cf"),n("3b8d")),c=n("d225"),o=n("bf80"),l=n("113c"),p=n("688c"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-affix",{attrs:{offsetTop:"this.top"}},[n("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"100px",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[n("div",{staticStyle:{"margin-left":"1%"}},[n("a-row",[n("a-col",{attrs:{span:24}},[n("span",[n("span",{staticStyle:{color:"white","line-height":"13px","font-size":"17px","font-weight":"bold","margin-top":"15%"}},[null!==t.myapplicant?n("span",["active"===t.myapplicant.stage||"test"===t.myapplicant.stage||"interview"===t.myapplicant.stage||"offer"===t.myapplicant.stage?n("span",[t._v("\n                                        "+t._s(t._f("capitalize")(t.currentUserProfile.user.first_name))+" "+t._s(t._f("capitalize")(t.currentUserProfile.user.last_name))+"\n                                    ")]):n("span",[t._v("\n                                        "+t._s(t._f("capitalize")(t.currentUserProfile.user.first_name))+"\n                                    ")])]):n("span",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentUserProfile.user.first_name))+"\n\n                                ")])]),null!==t.myapplicant?n("span",["complete"===t.myapplicant.test_stage?n("span",{staticStyle:{float:"right"}},[n("a-button",{attrs:{type:"primary"}},[t._v("Schedule Interview")])],1):t._e()]):t._e()]),null!==t.myapplicant?n("p",{staticStyle:{color:"white","font-size":"12px","font-weight":"bold","line-height":"0"}},[n("span",[t._v("\n                Job Application Stage :\n            ")]),n("a-tag",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{color:"#BA68C8"}},[t._v(t._s(t.myapplicant.stage))])],1):t._e()])],1)],1)])],1)},f=[],d=(n("6b54"),{name:"CandidateHeader",data:function(){return{currentUserProfile:null,allapplicant:null,myapplicant:null,top:0}},components:{},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,o["a"].currentuser(this.$route.params.candidateId,e);case 3:return this.currentUserProfile=t.sent.data,t.next=6,p["a"].joboneapplicant(this.$route.params.candidateId,this.$route.params.jobId,e);case 6:this.allapplicant=t.sent.data,this.myapplicant=this.allapplicant[0];case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}}),h=d,g=(n("5c2e"),n("2877")),v=Object(g["a"])(h,u,f,!1,null,"16454da1",null),b=v.exports,m=n("290c"),y=n("da05"),_=n("1226"),j=n("c1df"),x=n.n(j),k=n("f813"),w=function t(e,n,a,r,i,s,o){Object(c["a"])(this,t),this.key=e,this.title=n,this.description=a,this.company=r,this.duration=s,this.tags=o,this.location=i},S=function t(e,n,a,r,i){Object(c["a"])(this,t),this.key=e,this.title=n,this.description=a,this.demo=r,this.tags=i},O=function t(e,n,a,r,i){Object(c["a"])(this,t),this.key=e,this.title=n,this.start=a,this.end=r,this.class=i},U={name:"candidateprofile",data:function(){return{currentUserProfile:{},currentUser:{},skilltags:[],visible:!1,inputVisible:!1,inputValue:"",application:{},experienceslist:[],experiences:[],portoliolist:[],portfolio:[],job:{},recentprojects:[],events:[],picked:!0,takenquizzes:[],cv:"",staff:!1}},components:{ACol:y["b"],ARow:m["a"],RecruiterSider:l["a"],CandidateHeader:b},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r,i,s,c,l,u,f,d,h,g,v,b,m,y,j,U,$,P,z,I,F,C,R=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return x.a,e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=4,o["a"].currentuser(this.$store.state.user.pk,e);case 4:return this.currentUser=t.sent.data,this.staff=this.currentUser.user.is_staff,t.next=8,o["a"].currentuser(this.$route.params.candidateId,e);case 8:return this.currentUserProfile=t.sent.data,this.currentUserProfile.skills?this.skilltags=this.currentUserProfile.skills.split(","):this.skilltags=[],this.ApplicationId=this.$store.state.route.params.applicationId,t.next=13,k["a"].taken(this.currentUserProfile.id,e);case 13:return this.takenquizzes=t.sent.data,n=this.$store.state.route.params.jobId,this.ApplicationId&&p["a"].retrieveapplication(this.ApplicationId,e).then((function(t){R.application=t.data})).catch((function(t){return R.picked=!1,t})),t.next=18,p["a"].specificjob(n,e);case 18:return this.job=t.sent.data,this.currentUserProfile.file&&(this.currentUserProfile.file.includes("http")?this.cv=this.currentUserProfile.file:this.cv="https://res.cloudinary.com/dwtvwjhn3/".concat(this.currentUserProfile.file," ")),t.next=22,o["a"].portfolio(this.$route.params.candidateId,e);case 22:return this.portfoliolist=t.sent.data,t.next=25,o["a"].experience(this.$route.params.candidateId,e);case 25:for(this.experienceslist=t.sent.data,a=0;a<this.portfoliolist.length;a++)r=this.portfoliolist[a],i=this.portfoliolist[a].title,s=this.portfoliolist[a].description,c=this.portfoliolist[a].demo_link,l=this.portfoliolist[a].tech_tags.split(","),u=new S(r,i,s,c,l),this.portfolio.push(u);for(f=0;f<this.experienceslist.length;f++)d=this.experienceslist[f],h=this.experienceslist[f].title,g=this.experienceslist[f].description,v=this.experienceslist[f].company,b=this.experienceslist[f].location,m=this.experienceslist[f].duration,y=this.experienceslist[f].tech_tags.split(","),j=new w(d,h,g,v,b,m,y),this.experiences.push(j);if(!this.$store.state.user.pk){t.next=32;break}return t.next=31,_["a"].recentprojects(this.$store.state.user.pk,e);case 31:this.recentprojects=t.sent.data;case 32:return t.next=34,p["a"].allmyjobapplicants(this.$store.state.user.pk,e);case 34:for(this.allevents=t.sent.data,U=0;U<this.allevents.length;U++)null!==this.allevents[U].interviewstatus&&($=this.allevents[U].id,P=this.allevents[U].candidatename,z=x()(this.allevents[U].interviewstarttime).format("HH:mm"),I=x()(this.allevents[U].interviewendtime).format("HH:mm"),F=this.allevents[U].eventcolor,C=new O($,P,z,I,F),this.events.push(C));case 36:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{techChoices:function(t,e){var n=this.selectedtech,a=e?[].concat(Object(i["a"])(n),[t]):n.filter((function(e){return e!==t}));this.selectedtech=a},onChange:function(t){this.test=t},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)},showModal:function(){this.visible=!0},handleOk:function(){this.visible=!1}}},$=U,P=(n("bb97"),Object(g["a"])($,a,r,!1,null,"7389f676",null));e["default"]=P.exports},f813:function(t,e,n){"use strict";var a=n("3f4a");e["a"]={allquizzes:function(t){return Object(a["a"])().get("allquizzes",t)},allsubjects:function(t){return Object(a["a"])().get("subjects",t)},questions:function(t,e){return Object(a["a"])().get("questions/".concat(t),e)},takequiz:function(t,e,n){return Object(a["a"])().get("takequiz/".concat(t,"/").concat(e),n)},postanswer:function(t,e){return Object(a["a"])().post("postanswer",t,e)},score:function(t,e,n){return Object(a["a"])().get("score/".concat(t,"/").concat(e),n)},taken:function(t,e){return Object(a["a"])().get("taken/".concat(t),e)},updaterandomquiz:function(t,e,n){return Object(a["a"])().patch("updaterandquiz/".concat(t," "),e,n)}}}}]);
//# sourceMappingURL=chunk-0b85511e.0d68281f.js.map