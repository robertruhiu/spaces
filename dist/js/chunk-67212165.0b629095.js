(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67212165"],{"0442":function(t,e,a){},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"2ab5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[a("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),a("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/developer"}},[a("a-icon",{attrs:{type:"dashboard"}}),a("span",[t._v("Dashboard")])],1)],1),a("a-menu-item",{key:"11"},[a("router-link",{attrs:{to:"/assessment"}},[a("a-icon",{attrs:{type:"code"}}),a("span",[t._v("Get verified")])],1)],1),a("a-menu-item",{key:"10"},[a("router-link",{attrs:{to:"/manageapplications"}},[a("a-icon",{attrs:{type:"folder-open"}}),a("span",[t._v("Manage Applications")])],1)],1),a("a-menu-item",{key:"4"},[a("router-link",{attrs:{to:"/jobs"}},[a("a-icon",{attrs:{type:"solution"}}),a("span",[t._v("Job board")])],1)],1),a("a-menu-item",{key:"9"},[a("router-link",{attrs:{to:"/portfolio"}},[a("a-icon",{attrs:{type:"file-done"}}),a("span",[t._v("My portfolio")])],1)],1),a("a-menu-item",{key:"8"},[a("router-link",{attrs:{to:"/devcalendar"}},[a("a-icon",{attrs:{type:"calendar"}}),a("span",[t._v("Calendar")])],1)],1),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/developerprofile"}},[a("a-icon",{attrs:{type:"user"}}),a("span",[t._v("Edit profile")])],1)],1),a("a-menu-item",{key:"13"},[a("router-link",{attrs:{to:"/community"}},[a("a-icon",{attrs:{type:"message"}}),a("span",[t._v("Community chat")])],1)],1),a("a-menu-item",{key:"7"},[a("a",{on:{click:t.logout}},[a("a-icon",{attrs:{type:"export"}}),a("span",[t._v("  Logout")])],1)])],1)],1)},r=[],o=(a("96cf"),a("3b8d")),n=a("b8fb"),i=a.n(n),l=a("8808"),c={name:"CandidateSider",data:function(){return{defaultlogo:i.a}},components:{hideAt:l["hideAt"]},methods:{onCollapse:function(t){return t},onBreakpoint:function(t){return t},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},p=c,d=a("2877"),u=Object(d["a"])(p,s,r,!1,null,"45328092",null);e["a"]=u.exports},"2c4a":function(t,e,a){t.exports=a.p+"img/faq.9203ef02.svg"},3648:function(t,e,a){t.exports=a.p+"img/board.6ee87c46.svg"},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"3a1f":function(t,e,a){t.exports=a.p+"img/csa.dbfb7980.svg"},"6b54":function(t,e,a){"use strict";a("3846");var s=a("cb7c"),r=a("0bfb"),o=a("9e1e"),n="toString",i=/./[n],l=function(t){a("2aba")(RegExp.prototype,n,t,!0)};a("79e5")((function(){return"/a/b"!=i.call({source:"a",flags:"b"})}))?l((function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)})):i.name!=n&&l((function(){return i.call(this)}))},7895:function(t,e,a){},"9efa":function(t,e,a){"use strict";var s=a("0442"),r=a.n(s);r.a},c8ae:function(t,e,a){t.exports=a.p+"img/resume.7b961d30.svg"},ce5a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("a-layout-header",{style:{width:"100%",backgroundColor:"#ffffff",height:"5rem",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"120px",height:"31px","margin-top":"1rem","margin-bottom":"6%","margin-left":"9%"},attrs:{src:t.defaultlogo}})])],1)],1),a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"6rem",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[a("a-row",[a("a-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[a("span",{staticStyle:{color:"white","font-size":"1rem","font-weight":"bold"}},[t._v("\n                "+t._s(t.greeting)+" "+t._s(t._f("capitalize")(this.$store.state.user.first_name))+"  ")])])],1)],1)],1)],1)},r=[],o=(a("6b54"),a("96cf"),a("3b8d")),n=a("c1df"),i=a.n(n),l=a("8808"),c=a("b8fb"),p=a.n(c),d={name:"DevHeader",components:{hideAt:l["hideAt"],showAt:l["showAt"]},data:function(){return{currentUserProfile:null,greeting:null,defaultlogo:p.a}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.a,e=new Date,a=e.getHours(),this.greeting=a<12?"Good Morning":a<18?"Good Afternoon":"Good Evening",this.currentUserProfile=this.$store.state.user_object;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},u=d,f=(a("ebb0"),a("2877")),h=Object(f["a"])(u,s,r,!1,null,"284a2f0c",null);e["a"]=h.exports},e377:function(t,e,a){t.exports=a.p+"img/freelancer.7b99d53e.svg"},ebb0:function(t,e,a){"use strict";var s=a("7895"),r=a.n(s);r.a},f107:function(t,e,a){t.exports=a.p+"img/check1.53501821.svg"},f47d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[s("CandidateSider"),s("a-layout",[s("a-layout-content",{staticStyle:{"background-color":"white"}},[s("DevHeader"),s("div",{style:{padding:"5px",background:"#fff",marginTop:"0"}},[s("div",{staticStyle:{"min-height":"40vh",padding:"1%"}},[s("a-row",{staticStyle:{"margin-bottom":"1%"}},[s("a-col",{attrs:{xs:{span:24,offset:1},sm:{span:24,offset:2},md:{span:24,offset:2},lg:{span:20,offset:0},xl:{span:20,offset:0}}},[s("h3",{staticStyle:{"margin-left":"1rem",color:"#1976D2","font-weight":"bold"}},[t._v("\n                What would you like to do today?\n              ")])]),s("a-col",{attrs:{xs:{span:24,offset:1},sm:{span:24,offset:2},md:{span:24,offset:2},lg:{span:4,offset:0},xl:{span:4,offset:0}}},[s("a-switch",{attrs:{defaultChecked:""},on:{change:t.Available},model:{value:t.currentUserProfile.available,callback:function(e){t.$set(t.currentUserProfile,"available",e)},expression:"currentUserProfile.available"}}),s("a-tooltip",[s("template",{slot:"title"},[t._v("\n                  Your profile will be published on the talent pool\n                ")]),t._v("\n                Make profile public\n              ")],2)],1)],1),s("a-row",{attrs:{gutter:16}},[s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/assessment"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("f107")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Get Verified")]),s("p",{staticStyle:{margin:"0"}},[t._v("Put your skills to the test")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/manageapplications"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("c8ae")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Manage applications")]),s("p",{staticStyle:{margin:"0"}},[t._v("View and manage current jobs")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/jobs"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("3648")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Job board")]),s("p",{staticStyle:{margin:"0"}},[t._v("View and apply for jobs")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/portfolio"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("f64ce")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("My portfolio")]),s("p",{staticStyle:{margin:"0"}},[t._v("Make your profile more appealing")])])],1)],1)])],1)],1),t.loading?s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("3a1f")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Developer skill\n                        bridging")]),s("p",{staticStyle:{margin:"0"}},[t._v("Play n learn with coding activities")])])],1)],1)])],1):s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[t.currentUserProfile.csa?s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("router-link",{attrs:{to:"/bridgesdashboard"}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("3a1f")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Developer skill\n                          bridging")]),s("p",{staticStyle:{margin:"0"}},[t._v("Play n learn with coding activities")])])],1)],1)])],1):s("a",{on:{click:t.JoinCSA}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("3a1f")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Developer skill\n                          bridging")]),s("p",{staticStyle:{margin:"0"}},[t._v("Play n learn with coding activities")])])],1)],1)])],1)],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("a",{staticStyle:{color:"black"},on:{click:t.showDrawer}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:a("2c4a")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",[t._v("Faq")]),s("p",{staticStyle:{margin:"0"}},[t._v("Get your questions answered")])])],1)],1)])])],1),s("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[s("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[s("div",{staticStyle:{color:"black"}},[s("a-row",[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar1",attrs:{src:a("e377")}})])]),s("a-col",{attrs:{span:"24"}},[s("p",{staticStyle:{"text-align":"center"}},[t._v("Access paid gigs on remote codeln")]),t.currentUserProfile.remote_entry&&!t.currentUserProfile.remote_verified?s("p",{staticStyle:{"text-align":"center"}},[s("a-icon",{attrs:{type:"hourglass",spin:"",theme:"twoTone"}}),t._v(" profile under verification\n                        ")],1):t._e(),s("div",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://remote.codeln.com/",target:"_blank"}},[t.currentUserProfile.remote_entry&&t.currentUserProfile.remote_verified?s("a-button",{attrs:{type:"primary"}},[t._v("\n                              Go to Remote Codeln\n                            ")]):t._e()],1)]),!1===t.currentUserProfile.remote_entry?s("a-collapse",{attrs:{bordered:!1}},[s("a-collapse-panel",{key:"1",staticStyle:{"background-color":"white"},attrs:{header:"How to join Remote Codeln"}},[s("a-timeline",{staticStyle:{padding:"1%"}},[s("a-timeline-item",[t._v("Opt into remote codeln  "),s("a-switch",{attrs:{defaultChecked:""},on:{change:t.RemoteEntry},model:{value:t.currentUserProfile.remote_entry,callback:function(e){t.$set(t.currentUserProfile,"remote_entry",e)},expression:"currentUserProfile.remote_entry"}})],1),s("a-timeline-item",[t._v("Your profile goes under review")]),s("a-timeline-item",[t._v("Successful profile can now apply for gigs")])],1)],1)],1):t._e()],1)],1)],1)])],1)],1)],1)]),s("a-drawer",{attrs:{title:"Faqs",placement:"right",closable:!1,visible:t.visible},on:{close:t.onClose}},[s("div",[s("a-collapse",{attrs:{"default-active-key":"1",bordered:!1}},[s("a-collapse-panel",{key:"1",attrs:{header:"What is remote Codeln"}},[s("p",[t._v("Remote Codeln is feature to enable you to get project contracts and work on them remotely")])]),s("a-collapse-panel",{key:"2",attrs:{header:"Does Codeln charge me upon employment",disabled:!1}},[s("p",[t._v("No. All payment is done by the employee.We charge them a 12% of your annual salary.Note this should\n                not affect your salary .\n                Rather it is our service fee model")])]),s("a-collapse-panel",{key:"3",attrs:{header:"Project build protection"}},[s("p",[t._v("All projects assigned to verify your skills are owned by Codeln.We only provide the client a demo of\n                your work and report on your perfomance")])]),s("a-collapse-panel",{key:"4",attrs:{header:"How do i report issues"}},[s("p",[t._v("Issues or questions can be asked via the chat app located on the bottom right")])])],1)],1)])],1)],1)],1)},r=[],o=(a("96cf"),a("3b8d")),n=a("bf80"),i=a("2ab5"),l=a("ce5a"),c={name:"DevDashboard",data:function(){return{currentUserProfile:{},loading:!1,visible:!1}},components:{DevHeader:l["a"],CandidateSider:i["a"]},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.user.pk&&(this.loading=!0,e={headers:{Authorization:"JWT "+this.$store.state.token}},n["a"].currentuser(this.$store.state.user.pk,e).then((function(t){a.$store.dispatch("setuser_object",t.data)})),this.currentUserProfile=this.$store.state.user_object,this.loading=!1);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},navigateTo:function(t){this.$router.push(t)},Available:function(){var t={headers:{Authorization:"JWT "+this.$store.state.token}};n["a"].updatepatch(this.$store.state.user.pk,{available:this.currentUserProfile.available},t).then((function(t){return t})).catch((function(t){return t}))},RemoteEntry:function(){var t={headers:{Authorization:"JWT "+this.$store.state.token}};n["a"].updatepatch(this.$store.state.user.pk,{remote_entry:this.currentUserProfile.remote_entry},t).then((function(t){return t})).catch((function(t){return t}))},JoinCSA:function(){var t=this,e={headers:{Authorization:"JWT "+this.$store.state.token}};n["a"].updatepatch(this.$store.state.user.pk,{csa:!0},e).then((function(){t.$router.push({name:"bridgesdashboard"})})).catch((function(t){return t}))}}},p=c,d=(a("9efa"),a("2877")),u=Object(d["a"])(p,s,r,!1,null,"4cf54e52",null);e["default"]=u.exports},f64ce:function(t,e,a){t.exports=a.p+"img/curriculum.4a00b0c6.svg"}}]);
//# sourceMappingURL=chunk-67212165.0b629095.js.map