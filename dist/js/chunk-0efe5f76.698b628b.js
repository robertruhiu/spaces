(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0efe5f76"],{"0bfb":function(t,e,r){"use strict";var a=r("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"103a":function(t,e,r){t.exports=r.p+"img/security.79c32c17.svg"},1226:function(t,e,r){"use strict";var a=r("3f4a");e["a"]={projects:function(t,e){return Object(a["a"])().get("projects/projects/".concat(t),e)},recommendedprojects:function(t,e){return Object(a["a"])().get("projects/recommendedprojects/".concat(t),e)},allprojects:function(t){return Object(a["a"])().get("projects/allprojects",t)},projectdetails:function(t,e){return Object(a["a"])().get("projects/projectdetails/".concat(t),e)},recentprojects:function(t,e){return Object(a["a"])().get("projects/recentprojects/".concat(t),e)},myrecentprojects:function(t,e){return Object(a["a"])().get("projects/myrecentprojects/".concat(t),e)},developerprojects:function(t,e){return Object(a["a"])().get("projects/developerprojects/".concat(t),e)},developerprojectreport:function(t,e,r){return Object(a["a"])().get("projects/developerprojectreport/".concat(t,"/").concat(e,"/"),r)},getverified:function(t){return Object(a["a"])().get("projects/frameworks",t)},selfverifyproject:function(t,e,r){return Object(a["a"])().get("projects/selfverifyproject/".concat(t,"/").concat(e),r)},selfassessprojectcreate:function(t,e){return Object(a["a"])().post("createassess",t,e)},myprojects:function(t,e){return Object(a["a"])().get("myprojects/".concat(t),e)},testcenters:function(t,e){return Object(a["a"])().get("mytestcenters/".concat(t),e)},myprojectdetails:function(t,e){return Object(a["a"])().get("myprojectdetails/".concat(t),e)},myprojectdetailspatch:function(t,e,r){return Object(a["a"])().patch("myprojectdetailsupdater/".concat(t),e,r)},developerselectproject:function(t,e){return Object(a["a"])().post("projects/developerprojects/".concat(t),e)},newselfverify:function(t,e){return Object(a["a"])().post("newselfverify/".concat(t),e)}}},"13a1":function(t,e,r){t.exports=r.p+"img/laptop.4a266e9d.svg"},2948:function(t,e,r){t.exports=r.p+"img/404.de87b993.svg"},"35eb":function(t,e,r){t.exports=r.p+"img/delivery.3b200688.svg"},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"6b54":function(t,e,r){"use strict";r("3846");var a=r("cb7c"),s=r("0bfb"),o=r("9e1e"),n="toString",i=/./[n],c=function(t){r("2aba")(RegExp.prototype,n,t,!0)};r("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?c(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):i.name!=n&&c(function(){return i.call(this)})},"6e80":function(t,e,r){},9338:function(t,e,r){"use strict";var a=r("6e80"),s=r.n(a);s.a},"9cec":function(t,e,r){"use strict";var a=r("d5e8"),s=r.n(a);s.a},d5e8:function(t,e,r){},da3c:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[a("RecruiterSider"),a("a-layout-content",{style:{backgroundColor:"#ffffff"}},[a("CandidateHeader"),a("div",{staticStyle:{padding:"1%"}},[a("a-tabs",{staticStyle:{"z-index":"0","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","min-height":"70vh",padding:"1%"},attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"file-done"}}),t._v("\n                    Report Overview\n                ")],1),a("div",{staticStyle:{padding:"1%"}},[a("p",[a("strong",[t._v("Key competiences")])]),a("a-card",[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:"6"}},[a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("Deliverables")]),a("img",{staticStyle:{width:"25%"},attrs:{src:r("35eb")}}),a("p",[t._v("60%")]),a("p",[t._v("Metric used: Deliverables")])])]),a("a-col",{attrs:{span:"6"}},[a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("Code quality")]),a("img",{staticStyle:{width:"25%"},attrs:{src:r("13a1")}}),a("p",[t._v("2%")]),a("p",[t._v("Metric used : Quality gates")])])]),a("a-col",{attrs:{span:"6"}},[a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("Error handling")]),a("img",{staticStyle:{width:"25%"},attrs:{src:r("2948")}}),a("p",[t._v("50%")]),a("p",[t._v("Metric used: Errors")])])]),a("a-col",{attrs:{span:"6"}},[a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("Project security")]),a("img",{staticStyle:{width:"25%"},attrs:{src:r("103a")}}),a("p",[t._v("5%")]),a("p",[t._v("Metric used: Vulnerabilities")])])])],1)],1),a("br"),a("p",[a("strong",[t._v("Project deliverables")])]),a("a-list",{staticStyle:{"padding-right":"3%"},attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e,r){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:""}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),a("div",["complete"===e.status?a("a-tag",{attrs:{color:"#87d068"}},[t._v("complete")]):a("a-tag",{attrs:{color:"#f50"}},[t._v("incomplete")])],1)],1)}}])})],1)]),a("a-tab-pane",{key:"2",attrs:{forceRender:""}},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"area-chart"}}),t._v("\n                    Grading criteria\n                ")],1),a("div",{staticStyle:{padding:"1%","text-align":"center"}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Tests Passed"}},[a("p",[t._v("(Number of Unit Tests Passed)")]),a("p",{staticStyle:{color:"#00801c"}},[t._v("3")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Tests Failed"}},[a("p",[t._v("(Number of Unit Tests Failed)")]),a("p",{staticStyle:{color:"#f48a9a"}},[t._v("2")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Vulnerabilities"}},[a("p",[t._v("(Total Number of warnings)")]),a("p",{staticStyle:{color:"#f48a9a"}},[t._v("8")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Errors"}},[a("p",[t._v("(Total Number of errors)")]),a("p",{staticStyle:{color:"#00801c"}},[t._v("1")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Lines of Code"}},[a("p",[t._v("(Number of code lines)")]),a("p",{staticStyle:{color:"#00801c"}},[t._v("562")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Duplications"}},[a("p",[t._v("(Density of Duplication)")]),a("p",[t._v("0%")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Classes"}},[a("p",[t._v("Total Number of Classes)")]),a("p",[t._v("44")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Comments"}},[a("p",[t._v("(Comment Line Density)")]),a("p",[t._v("0%")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Dependencies"}},[a("p",[t._v("(Dependencies to cut)")]),a("p",[t._v("0")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Technical Debt"}},[a("p",[t._v("(Cost to fix maintainability Issues)")]),a("p",[t._v("3hrs")])])],1),a("a-col",{staticStyle:{"margin-bottom":"1%"},attrs:{span:6}},[a("a-card",{attrs:{title:"Quality Gates"}},[a("p",[t._v("(Rate of code quality)")]),a("p",{staticStyle:{color:"#00801c"}},[t._v("Below Average")])])],1)],1)],1)]),a("a-tab-pane",{key:"3",attrs:{forceRender:""}},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"book"}}),t._v("\n                    Project\n                ")],1),a("a-row",{attrs:{gutter:"8"}},[a("a-col",{attrs:{span:14}},[t.project.projectimage1?a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"75%"},attrs:{src:t.project.projectimage1}})]):t._e(),a("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%","margin-top":"2%"}},[a("h4",[a("strong",[t._v("Project name:")]),t._v(" "+t._s(t.project.name))]),a("p",[t._v(t._s(t.project.description))])])]),a("a-col",{staticStyle:{padding:"0 1%"},attrs:{span:10}},[a("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"3%"}},[a("p",{staticStyle:{"margin-left":"5%"}},[a("strong",[t._v("Requirements")])]),a("ol",[t.project.requirement1?a("li",[t._v(t._s(t.project.requirement1))]):t._e(),t.project.requirement2?a("li",[t._v(t._s(t.project.requirement2))]):t._e(),t.project.requirement3?a("li",[t._v(t._s(t.project.requirement3))]):t._e(),t.project.requirement4?a("li",[t._v(t._s(t.project.requirement4))]):t._e(),t.project.requirement5?a("li",[t._v(t._s(t.project.requirement5))]):t._e(),t.project.requirement6?a("li",[t._v(t._s(t.project.requirement6))]):t._e(),t.project.requirement7?a("li",[t._v(t._s(t.project.requirement7))]):t._e(),t.project.requirement8?a("li",[t._v(t._s(t.project.requirement8))]):t._e(),t.project.requirement9?a("li",[t._v(t._s(t.project.requirement9))]):t._e(),t.project.requirement10?a("li",[t._v(t._s(t.project.requirement10))]):t._e()])])])],1)],1)],1)],1)],1)],1)},s=[],o=(r("96cf"),r("3b8d")),n=r("da05"),i=r("bf80"),c=r("1226"),p=r("113c"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"100px",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[r("div",{staticStyle:{"margin-left":"1%"}},[r("a-row",[r("a-col",{attrs:{span:16}},[r("span",[r("span",{staticStyle:{color:"white","line-height":"13px","font-size":"17px","font-weight":"bold","margin-top":"15%"}},[t._v("\n                            "+t._s(t._f("capitalize")(t.currentUser.first_name))+" "+t._s(t._f("capitalize")(t.currentUser.last_name)))])])]),r("a-col",{staticStyle:{color:"white"},attrs:{span:4}},[r("p",{staticStyle:{color:"white","font-size":"15px","font-weight":"bold"}},[t._v("\n                Project Score : 58%\n\n            ")])]),r("a-col",{attrs:{span:4}},[r("p",{staticStyle:{color:"white","font-size":"15px","font-weight":"bold"}},[r("span",[r("a-button",{attrs:{type:"primary"}},[r("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://5c9d45736280709d6db08321--byarent-static.netlify.com/",target:"_blank"}},[t._v("Demo")])])],1)])])],1)],1)])},u=[],d=(r("6b54"),r("688c")),m={name:"ReportHeader",data:function(){return{currentUserProfile:{},currentUser:{},allapplicant:null,myapplicant:null}},components:{ACol:n["b"]},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,i["a"].retrieveuser(this.$route.params.candidateId,e);case 3:return this.currentUser=t.sent.data,t.next=6,i["a"].currentuser(this.$route.params.candidateId,e);case 6:return this.currentUserProfile=t.sent.data,t.next=9,d["a"].joboneapplicant(this.$route.params.candidateId,this.$route.params.jobId,e);case 9:this.allapplicant=t.sent.data,this.myapplicant=this.allapplicant[0];case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},f=m,g=(r("9cec"),r("2877")),v=Object(g["a"])(f,l,u,!1,null,"130cb9f8",null),h=v.exports,b=[{title:"Create an easy to understand Ui Ux of a shopping experience.",status:"complete"},{title:"Create a login and signup page use Allauth(django) or Auth(laravel) or Passportjs(express) package to manage this.User model(id,email,password).Use package as per framework assigned to build on.",status:"incomplete"},{title:"Create an index page that shows the houses on sale their pictures, prices and descriptions style it to make it appealing as possible. Fetch house details from the database.",status:"complete"},{title:"Create the backend page for the app. This is to be used to edit, update, create or delete houses to be sold.House model(id,item_name,description,price,pictures).You can have several pictures for the house",status:"incomplete"},{title:"User should be able to pick an item and add to cart.Use session cart to store items chosen temporarily.Don't save cart data in database.Cart model(id,item_id,item_name,user_id)",status:"complete"}],j={name:"DeveloperProjectReport",data:function(){return{currentUserProfile:{},report:[],project:{},playerVars:{autoplay:1},data:b}},components:{ACol:n["b"],RecruiterSider:p["a"],CandidateHeader:h},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=14;break}return t.next=4,i["a"].currentuser(this.$store.state.user.pk,e);case 4:return this.currentUserProfile=t.sent.data,r=this.$store.state.route.params.candidateId,a=this.$store.state.route.params.projectId,t.next=9,c["a"].projectdetails(a,e);case 9:return this.project=t.sent.data,t.next=12,c["a"].developerprojectreport(r,a,e);case 12:s=t.sent,this.report.push(s.data);case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},callback:function(t){console.log(t)}}},y=j,_=(r("9338"),Object(g["a"])(y,a,s,!1,null,"ef039b26",null));e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-0efe5f76.698b628b.js.map