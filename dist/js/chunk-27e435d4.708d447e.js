(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e435d4"],{"02f4":function(e,t,r){var n=r("4588"),c=r("be13");e.exports=function(e){return function(t,r){var i,o,a=String(c(t)),s=n(r),u=a.length;return s<0||s>=u?e?"":void 0:(i=a.charCodeAt(s),i<55296||i>56319||s+1===u||(o=a.charCodeAt(s+1))<56320||o>57343?e?a.charAt(s):i:e?a.slice(s,s+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1226:function(e,t,r){"use strict";var n=r("3f4a");t["a"]={projects:function(e,t){return Object(n["a"])().get("projects/projects/".concat(e),t)},recommendedprojects:function(e,t){return Object(n["a"])().get("projects/recommendedprojects/".concat(e),t)},allprojects:function(e){return Object(n["a"])().get("projects/allprojects",e)},projectdetails:function(e,t){return Object(n["a"])().get("projects/projectdetails/".concat(e),t)},recentprojects:function(e,t){return Object(n["a"])().get("projects/recentprojects/".concat(e),t)},myrecentprojects:function(e,t){return Object(n["a"])().get("projects/myrecentprojects/".concat(e),t)},developerprojects:function(e,t){return Object(n["a"])().get("projects/developerprojects/".concat(e),t)},developerprojectreport:function(e,t,r){return Object(n["a"])().get("projects/developerprojectreport/".concat(e,"/").concat(t,"/"),r)},getverified:function(e){return Object(n["a"])().get("projects/frameworks",e)},selfverifyproject:function(e,t,r){return Object(n["a"])().get("projects/selfverifyproject/".concat(e,"/").concat(t),r)},selfassessprojectcreate:function(e,t){return Object(n["a"])().post("createassess",e,t)},myprojects:function(e,t){return Object(n["a"])().get("myprojects/".concat(e),t)},testcenters:function(e,t){return Object(n["a"])().get("mytestcenters/".concat(e),t)},myprojectdetails:function(e,t){return Object(n["a"])().get("myprojectdetails/".concat(e),t)},myprojectdetailspatch:function(e,t,r){return Object(n["a"])().patch("myprojectdetailsupdater/".concat(e),t,r)},developerselectproject:function(e,t){return Object(n["a"])().post("projects/developerprojects/".concat(e),t)},newselfverify:function(e,t){return Object(n["a"])().post("newselfverify/".concat(e),t)}}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),c=r("32e9"),i=r("79e5"),o=r("be13"),a=r("2b4c"),s=r("520a"),u=a("species"),p=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),l=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=a(e),f=!i(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),h=f?!i(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[d](""),!t}):void 0;if(!f||!h||"replace"===e&&!p||"split"===e&&!l){var v=/./[d],j=r(o,d,""[e],function(e,t,r,n,c){return t.exec===s?f&&!c?{done:!0,value:v.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),m=j[0],g=j[1];n(String.prototype,e,m),c(RegExp.prototype,d,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),c=r("cb7c"),i=r("ebd6"),o=r("0390"),a=r("9def"),s=r("5f1b"),u=r("520a"),p=r("79e5"),l=Math.min,d=[].push,f="split",h="length",v="lastIndex",j=4294967295,m=!p(function(){RegExp(j,"y")});r("214f")("split",2,function(e,t,r,p){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(e,t){var c=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(c,e,t);var i,o,a,s=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,f=void 0===t?j:t>>>0,m=new RegExp(e.source,p+"g");while(i=u.call(m,c)){if(o=m[v],o>l&&(s.push(c.slice(l,i.index)),i[h]>1&&i.index<c[h]&&d.apply(s,i.slice(1)),a=i[0][h],l=o,s[h]>=f))break;m[v]===i.index&&m[v]++}return l===c[h]?!a&&m.test("")||s.push(""):s.push(c.slice(l)),s[h]>f?s.slice(0,f):s}:"0"[f](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var c=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,c,n):g.call(String(c),r,n)},function(e,t){var n=p(g,e,this,t,g!==r);if(n.done)return n.value;var u=c(e),d=String(this),f=i(u,RegExp),h=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),b=new f(m?u:"^(?:"+u.source+")",v),y=void 0===t?j:t>>>0;if(0===y)return[];if(0===d.length)return null===s(b,d)?[d]:[];var x=0,_=0,w=[];while(_<d.length){b.lastIndex=m?_:0;var k,A=s(b,m?d:d.slice(_));if(null===A||(k=l(a(b.lastIndex+(m?0:_)),d.length))===x)_=o(d,_,h);else{if(w.push(d.slice(x,_)),w.length===y)return w;for(var O=1;O<=A.length-1;O++)if(w.push(A[O]),w.length===y)return w;_=x=k}}return w.push(d.slice(x)),w}]})},"520a":function(e,t,r){"use strict";var n=r("0bfb"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,a="lastIndex",s=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e[a]||0!==t[a]}(),u=void 0!==/()??/.exec("")[1],p=s||u;p&&(o=function(e){var t,r,o,p,l=this;return u&&(r=new RegExp("^"+l.source+"$(?!\\s)",n.call(l))),s&&(t=l[a]),o=c.call(l,e),s&&o&&(l[a]=l.global?o.index+o[0].length:t),u&&o&&o.length>1&&i.call(o[0],r,function(){for(p=1;p<arguments.length-2;p++)void 0===arguments[p]&&(o[p]=void 0)}),o}),e.exports=o},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),c=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return c.call(e,t)}},"840c":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"100px",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[r("a-row",[r("a-col",{attrs:{span:24}},[r("span",[r("a",{staticStyle:{color:"white","line-height":"13px","font-size":"17px","font-weight":"bold","margin-top":"15%"}},[e._v("\n                            My candidates")]),r("br")]),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("p",{staticStyle:{color:"white","font-size":"12px","font-weight":"bold","line-height":"0"}},[r("span",[e._v("\n                                Skills am interested in :\n                            ")]),e._l(e.skillinterest,function(t){return r("span",{key:t},[r("a-tag",{staticStyle:{"text-align":"center"},attrs:{color:"#BA68C8"}},[e._v(e._s(t))])],1)})],2)])],1)],1)],1)},c=[],i=(r("28a5"),r("96cf"),r("3b8d")),o=r("bf80"),a=r("8808"),s={name:"MycandidatesHeader",data:function(){return{skillinterest:[]}},components:{showAt:a["showAt"],hideAt:a["hideAt"]},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"JWT "+this.$store.state.token}},e.next=3,o["a"].currentuser(this.$store.state.user.pk,t);case 3:r=e.sent.data,this.skillinterest=r.skills.split(",").slice(0,10);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},u=s,p=r("2877"),l=Object(p["a"])(u,n,c,!1,null,"68438286",null);t["a"]=l.exports},aae3:function(e,t,r){var n=r("d3f4"),c=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==c(e))}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},b2f5:function(e,t,r){"use strict";var n=r("f6c6"),c=r.n(n);c.a},f001:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[r("RecruiterSider"),r("a-layout",{style:{backgroundColor:"#f8fafb"}},[r("a-layout-content",[r("MycandidatesHeader"),r("div",{style:{padding:"6px 20px",background:"#fff",minHeight:"75vh",maxWidth:"72rem",marginTop:"1%",marginLeft:"1%",marginRight:"1%"}},[r("a-row",{attrs:{gutter:"8"}},[r("a-col",{attrs:{span:"14"}},[!1===e.project.hasvideo?r("div",[e.project.projectimage1?r("div",[r("img",{staticStyle:{width:"100%"},attrs:{src:e.project.projectimage1}})]):e._e()]):e._e(),e.project.hasvideo?r("div",[r("youtube",{attrs:{"video-id":e.project.projectimage2,"player-vars":e.playerVars}})],1):e._e(),r("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%","margin-top":"2%"}},[r("h4",[r("strong",[e._v("Project name:")]),e._v(" "+e._s(e.project.name))]),r("p",[e._v(e._s(e.project.description))])])]),r("a-col",{attrs:{span:"10"}},[r("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"3%"}},[r("p",{staticStyle:{"margin-left":"5%"}},[r("strong",[e._v("Requirements")])]),r("ol",[e.project.requirement1?r("li",[e._v(e._s(e.project.requirement1))]):e._e(),e.project.requirement2?r("li",[e._v(e._s(e.project.requirement2))]):e._e(),e.project.requirement3?r("li",[e._v(e._s(e.project.requirement3))]):e._e(),e.project.requirement4?r("li",[e._v(e._s(e.project.requirement4))]):e._e(),e.project.requirement5?r("li",[e._v(e._s(e.project.requirement5))]):e._e(),e.project.requirement6?r("li",[e._v(e._s(e.project.requirement6))]):e._e(),e.project.requirement7?r("li",[e._v(e._s(e.project.requirement7))]):e._e(),e.project.requirement8?r("li",[e._v(e._s(e.project.requirement8))]):e._e(),e.project.requirement9?r("li",[e._v(e._s(e.project.requirement9))]):e._e(),e.project.requirement10?r("li",[e._v(e._s(e.project.requirement10))]):e._e()]),null===e.application.project?r("div",{staticStyle:{"margin-left":"5%"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.AssignProject(e.project.id,e.ApplicationId,e.project.name)}}},[e._v("Assign\n                                    project to "+e._s(e.candidate.username)+"\n                                ")])],1):e._e()])])],1)],1)],1)],1)],1)},c=[],i=(r("96cf"),r("3b8d")),o=r("113c"),a=r("1226"),s=r("688c"),u=r("da05"),p=r("840c"),l=r("bf80"),d={name:"myprojectdetails",data:function(){return{project:null,job:{},playerVars:{autoplay:1},candidate:{},ApplicationId:null,application:{}}},components:{ACol:u["b"],MycandidatesHeader:p["a"],RecruiterSider:o["a"]},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,n,c=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"JWT "+this.$store.state.token}},r=this.$store.state.route.params.candidateId,this.ApplicationId=this.$store.state.route.params.applicationId,n=this.$store.state.route.params.projectId,e.next=6,s["a"].retrievecandidate(this.ApplicationId,t);case 6:return this.application=e.sent.data,e.next=9,l["a"].retrieveuser(r,t);case 9:if(this.candidate=e.sent.data,!n){e.next=16;break}return e.next=13,a["a"].projectdetails(n,t);case 13:this.project=e.sent.data,e.next=17;break;case 16:a["a"].recommendedprojects(this.$store.state.user.pk,t).then(function(e){c.project=e.data[0]}).catch(function(e){return c.$router.push({name:"myprojectlist",params:{applicationId:c.ApplicationId}}),e});case 17:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{AssignProject:function(e,t,r){var n={headers:{Authorization:"JWT "+this.$store.state.token}};s["a"].candidatemanager(t,{test_stage:"invite_sent",project:e,name:r},n),this.$router.push({name:"mycandidates"})}}},f=d,h=(r("b2f5"),r("2877")),v=Object(h["a"])(f,n,c,!1,null,"65e132f8",null);t["default"]=v.exports},f6c6:function(e,t,r){}}]);
//# sourceMappingURL=chunk-27e435d4.708d447e.js.map