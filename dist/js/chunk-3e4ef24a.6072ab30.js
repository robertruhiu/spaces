(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e4ef24a"],{"002a":function(t,e,a){t.exports=a.p+"img/file.ad054b73.svg"},"0a23":function(t,e,a){t.exports=a.p+"img/faq1.233d10c3.svg"},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1492:function(t,e,a){t.exports=a.p+"img/resume1.c8de87f9.svg"},"156f":function(t,e,a){"use strict";var s=a("cc59"),r=a.n(s);r.a},1757:function(t,e,a){t.exports=a.p+"img/freelancer1.f03072d7.svg"},"2ab5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[a("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),a("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/developer"}},[a("a-icon",{attrs:{type:"dashboard"}}),a("span",[t._v("Dashboard")])],1)],1),a("a-menu-item",{key:"11"},[a("router-link",{attrs:{to:"/assessment"}},[a("a-icon",{attrs:{type:"code"}}),a("span",[t._v("Get verified")])],1)],1),a("a-menu-item",{key:"10"},[a("router-link",{attrs:{to:"/manageapplications"}},[a("a-icon",{attrs:{type:"folder-open"}}),a("span",[t._v("Manage Applications")])],1)],1),a("a-menu-item",{key:"4"},[a("router-link",{attrs:{to:"/jobs"}},[a("a-icon",{attrs:{type:"solution"}}),a("span",[t._v("Job board")])],1)],1),a("a-menu-item",{key:"9"},[a("router-link",{attrs:{to:"/portfolio"}},[a("a-icon",{attrs:{type:"file-done"}}),a("span",[t._v("My portfolio")])],1)],1),a("a-menu-item",{key:"8"},[a("router-link",{attrs:{to:"/devcalendar"}},[a("a-icon",{attrs:{type:"calendar"}}),a("span",[t._v("Calendar")])],1)],1),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/developerprofile"}},[a("a-icon",{attrs:{type:"user"}}),a("span",[t._v("Edit profile")])],1)],1),a("a-menu-item",{key:"13"},[a("router-link",{attrs:{disabled:"",to:"/community"}},[a("a-icon",{attrs:{type:"message"}}),a("span",[t._v("Community chat")])],1)],1),a("a-menu-item",{key:"7"},[a("a",{on:{click:t.logout}},[a("a-icon",{attrs:{type:"export"}}),a("span",[t._v("  Logout")])],1)])],1)],1)},r=[],o=(a("96cf"),a("3b8d")),i=a("b8fb"),n=a.n(i),l=a("8808"),c={name:"CandidateSider",data:function(){return{defaultlogo:n.a}},components:{hideAt:l["hideAt"]},methods:{onCollapse:function(t){return t},onBreakpoint:function(t){return t},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},p=c,d=a("2877"),u=Object(d["a"])(p,s,r,!1,null,"197842df",null);e["a"]=u.exports},3103:function(t,e,a){t.exports=a.p+"img/offer.b889c22f.svg"},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"4fba":function(t,e,a){t.exports=a.p+"img/clipboard.6a549e51.svg"},"6b54":function(t,e,a){"use strict";a("3846");var s=a("cb7c"),r=a("0bfb"),o=a("9e1e"),i="toString",n=/./[i],l=function(t){a("2aba")(RegExp.prototype,i,t,!0)};a("79e5")((function(){return"/a/b"!=n.call({source:"a",flags:"b"})}))?l((function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)})):n.name!=i&&l((function(){return n.call(this)}))},"8b2b":function(t,e,a){t.exports=a.p+"img/bridge.70c632f1.svg"},cc59:function(t,e,a){},f47d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[s("CandidateSider"),s("a-layout",[s("a-layout-content",{staticStyle:{"background-color":"white"}},[s("a-card",{staticClass:"hellocard",attrs:{bordered:!1}},[s("span",{staticStyle:{"font-size":"1.7rem","font-family":"sofia_prosemibold","margin-bottom":"0",color:"white"}},[t._v(t._s(t.Greeting)+"\n              "+t._s(t._f("capitalize")(t.$store.state.user_object.user.first_name)))]),s("p",{staticStyle:{"font-family":"sofia_proregular","font-size":"1.2rem","line-height":"1rem",color:"white"}},[t._v("What would you like to do today?")])]),s("div",{style:{padding:"5px",background:"#fff",marginTop:"0"}},[s("div",{staticStyle:{"min-height":"40vh",padding:"1%"}},[s("a-row",{attrs:{gutter:16}},[s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/assessment"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("4fba")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Get Verified")]),s("p",{staticStyle:{margin:"0"}},[t._v("Put your skills to the test")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/manageapplications"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("002a")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Manage applications")]),s("p",{staticStyle:{margin:"0"}},[t._v("View and manage current jobs")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/jobs"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("3103")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Job board")]),s("p",{staticStyle:{margin:"0"}},[t._v("View and apply for jobs")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/portfolio"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("1492")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("My portfolio")]),s("p",{staticStyle:{margin:"0"}},[t._v("Make your profile more appealing")])])],1)],1)])],1)],1),t.loading?s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("8b2b")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Developer skill\n                        bridging")]),s("p",{staticStyle:{margin:"0"}},[t._v("Play n learn with coding activities")])])],1)],1)])],1):s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[t.currentUserProfile.csa?s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/bridgesdashboard"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("8b2b")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Developer skill\n                          bridging")]),s("p",{staticStyle:{margin:"0"}},[t._v("Play n learn with coding activities")])])],1)],1)])],1):s("a",{on:{click:t.JoinCSA}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("8b2b")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Developer skill\n                          bridging")]),s("p",{staticStyle:{margin:"0"}},[t._v("Play n learn with coding activities")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("a",{staticStyle:{color:"black"},on:{click:t.showDrawer}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("0a23")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Faq")]),s("p",{staticStyle:{margin:"0"}},[t._v("Get your questions answered")])])],1)],1)])])],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar1",attrs:{src:a("1757")}})])]),s("a-col",{attrs:{span:"24"}},[s("p",{staticStyle:{"text-align":"center"}},[t._v("Access paid gigs on remote codeln")]),t.currentUserProfile.remote_entry&&!t.currentUserProfile.remote_verified?s("p",{staticStyle:{"text-align":"center"}},[s("a-icon",{attrs:{type:"hourglass",spin:"",theme:"twoTone"}}),t._v(" profile under verification\n                        ")],1):t._e(),s("div",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://remote.codeln.com/",target:"_blank"}},[t.currentUserProfile.remote_entry&&t.currentUserProfile.remote_verified?s("a-button",{attrs:{type:"primary"}},[t._v("\n                              Go to Remote Codeln\n                            ")]):t._e()],1)]),!1===t.currentUserProfile.remote_entry?s("a-collapse",{attrs:{bordered:!1}},[s("a-collapse-panel",{key:"1",staticStyle:{"background-color":"white"},attrs:{header:"How to join Remote Codeln"}},[s("a-timeline",{staticStyle:{padding:"1%"}},[s("a-timeline-item",[t._v("Opt into remote codeln  "),s("a-switch",{attrs:{defaultChecked:""},on:{change:t.RemoteEntry},model:{value:t.currentUserProfile.remote_entry,callback:function(e){t.$set(t.currentUserProfile,"remote_entry",e)},expression:"currentUserProfile.remote_entry"}})],1),s("a-timeline-item",[t._v("Your profile goes under review")]),s("a-timeline-item",[t._v("Successful profile can now apply for gigs")])],1)],1)],1):t._e()],1)],1)],1)])],1)],1)],1)]),s("a-drawer",{attrs:{title:"Faqs",placement:"right",closable:!1,visible:t.visible},on:{close:t.onClose}},[s("div",[s("a-collapse",{attrs:{"default-active-key":"1",bordered:!1}},[s("a-collapse-panel",{key:"1",attrs:{header:"What is remote Codeln"}},[s("p",[t._v("Remote Codeln is feature to enable you to get project contracts and work on them remotely")])]),s("a-collapse-panel",{key:"2",attrs:{header:"Does Codeln charge me upon employment",disabled:!1}},[s("p",[t._v("No. All payment is done by the employee.We charge them a 12% of your annual salary.Note this should\n                not affect your salary .\n                Rather it is our service fee model")])]),s("a-collapse-panel",{key:"3",attrs:{header:"Project build protection"}},[s("p",[t._v("All projects assigned to verify your skills are owned by Codeln.We only provide the client a demo of\n                your work and report on your perfomance")])]),s("a-collapse-panel",{key:"4",attrs:{header:"How do i report issues"}},[s("p",[t._v("Issues or questions can be asked via the chat app located on the bottom right")])])],1)],1)])],1)],1)],1)},r=[],o=(a("96cf"),a("3b8d")),i=(a("6b54"),a("bf80")),n=a("2ab5"),l=a("c1df"),c=a.n(l),p={name:"DevDashboard",data:function(){return{currentUserProfile:{},loading:!1,visible:!1}},components:{CandidateSider:n["a"]},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},computed:{Greeting:function(){c.a;var t=new Date,e=t.getHours(),a="";return a=e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening",a}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.user.pk&&(this.loading=!0,e={headers:{Authorization:"JWT "+this.$store.state.token}},i["a"].currentuser(this.$store.state.user.pk,e).then((function(t){a.$store.dispatch("setuser_object",t.data)})),this.currentUserProfile=this.$store.state.user_object,this.loading=!1);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},navigateTo:function(t){this.$router.push(t)},Available:function(){var t={headers:{Authorization:"JWT "+this.$store.state.token}};i["a"].updatepatch(this.$store.state.user.pk,{available:this.currentUserProfile.available},t).then((function(t){return t})).catch((function(t){return t}))},RemoteEntry:function(){var t={headers:{Authorization:"JWT "+this.$store.state.token}};i["a"].updatepatch(this.$store.state.user.pk,{remote_entry:this.currentUserProfile.remote_entry},t).then((function(t){return t})).catch((function(t){return t}))},JoinCSA:function(){var t=this,e={headers:{Authorization:"JWT "+this.$store.state.token}};i["a"].updatepatch(this.$store.state.user.pk,{csa:!0},e).then((function(){t.$router.push({name:"bridgesdashboard"})})).catch((function(t){return t}))}}},d=p,u=(a("156f"),a("2877")),f=Object(u["a"])(d,s,r,!1,null,"c1517b40",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-3e4ef24a.6072ab30.js.map