(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6831bd41"],{"0544":function(t,e,a){},"0bfb":function(t,e,a){"use strict";var o=a("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"2ab5":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[a("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),a("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/developer"}},[a("a-icon",{attrs:{type:"dashboard"}}),a("span",[t._v("Dashboard")])],1)],1),a("a-menu-item",{key:"11"},[a("router-link",{attrs:{to:"/assessment"}},[a("a-icon",{attrs:{type:"code"}}),a("span",[t._v("Get verified")])],1)],1),a("a-menu-item",{key:"10"},[a("router-link",{attrs:{to:"/manageapplications"}},[a("a-icon",{attrs:{type:"folder-open"}}),a("span",[t._v("Manage Applications")])],1)],1),a("a-menu-item",{key:"4"},[a("router-link",{attrs:{to:"/jobs"}},[a("a-icon",{attrs:{type:"solution"}}),a("span",[t._v("Job board")])],1)],1),a("a-menu-item",{key:"9"},[a("router-link",{attrs:{to:"/portfolio"}},[a("a-icon",{attrs:{type:"file-done"}}),a("span",[t._v("My portfolio")])],1)],1),a("a-menu-item",{key:"8"},[a("router-link",{attrs:{to:"/devcalendar"}},[a("a-icon",{attrs:{type:"calendar"}}),a("span",[t._v("Calendar")])],1)],1),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/developerprofile"}},[a("a-icon",{attrs:{type:"user"}}),a("span",[t._v("Edit profile")])],1)],1),a("a-menu-item",{key:"13"},[a("router-link",{attrs:{disabled:"",to:"/community"}},[a("a-icon",{attrs:{type:"message"}}),a("span",[t._v("Community chat")])],1)],1),a("a-menu-item",{key:"7"},[a("a",{on:{click:t.logout}},[a("a-icon",{attrs:{type:"export"}}),a("span",[t._v("  Logout")])],1)])],1)],1)},n=[],r=(a("96cf"),a("3b8d")),i=a("b8fb"),s=a.n(i),c=a("8808"),l={name:"CandidateSider",data:function(){return{defaultlogo:s.a}},components:{hideAt:c["hideAt"]},methods:{onCollapse:function(t){return t},onBreakpoint:function(t){return t},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},u=l,p=a("2877"),m=Object(p["a"])(u,o,n,!1,null,"197842df",null);e["a"]=m.exports},3628:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[a("CandidateSider"),a("a-layout",[a("a-layout-content",{staticStyle:{"background-color":"#FAFBFF"}},[a("a-card",{staticClass:"hellocard",attrs:{bordered:!1}},[a("a-row",{staticStyle:{color:"white"}},[a("a-col",{attrs:{span:"12"}},[a("a-breadcrumb",[a("a-breadcrumb-item",[a("a",{staticStyle:{color:"white"},on:{click:function(e){return t.$router.push("/recruiter")}}},[t._v("Home")])]),a("a-breadcrumb-item",{staticStyle:{color:"white"}},[a("a",{staticStyle:{color:"white"},on:{click:function(e){return t.$router.push("/demo")}}},[t._v("Portfolio")])]),a("a-breadcrumb-item",{staticStyle:{color:"white"}},[t._v("Cv")])],1),a("span",{staticStyle:{"font-size":"1.7rem","font-family":"sofia_prosemibold","margin-bottom":"0",color:"white"}},[t._v(t._s(t.Greeting)+"\n              "+t._s(t._f("capitalize")(t.$store.state.user_object.user.first_name)))]),a("p",[t._v("Email: "+t._s(t.$store.state.user_object.user.email))]),a("p",[t._v("Linkedin: "+t._s(t.$store.state.user_object.linkedin_url))])],1),a("a-col",{attrs:{span:"12"}},[a("p",[t._v("Phone Number: "+t._s(t.$store.state.user_object.phone_number))]),a("p",[t._v("Location: "+t._s(t.$store.state.user_object.country))]),a("p",[t._v("Years of Experience: "+t._s(t.$store.state.user_object.years))]),a("p",[t._v("Salary Monthly Expectations: $ "+t._s(t.$store.state.user_object.salary))])])],1)],1),a("div",{staticStyle:{padding:"1%"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:"16"}},[a("div",{staticClass:"cardshadow",staticStyle:{padding:"1%","min-height":"40vh"}},[a("div",{staticStyle:{"overflow-y":"scroll",padding:"1%",height:"70vh"}},[a("p",{staticStyle:{"font-family":"sofia_probold","text-decoration":"underline","text-decoration-color":"#1F81CE"}},[t._v("About")]),a("p",{staticStyle:{"font-family":"sofia_prolight"}},[t._v("\n                  "+t._s(t.currentUserProfile.about)+"\n                ")]),a("p",{staticStyle:{"font-family":"sofia_probold","text-decoration":"underline","text-decoration-color":"#1F81CE"}},[t._v("Skilled in")]),a("div",[a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                    react\n                  ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                    django\n                  ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                    vue\n                  ")])],1),a("p",{staticStyle:{"font-family":"sofia_probold","text-decoration":"underline","text-decoration-color":"#1F81CE"}},[t._v("Work Experience")]),a("div",[a("a-timeline",[a("a-timeline-item",[a("p",{staticStyle:{"font-weight":"700"}},[t._v("\n                        Kefri conso\n\n\n                      ")]),a("p",[a("span",[a("a-icon",{attrs:{type:"bank"}}),t._v("  codeln "),a("a-icon",{attrs:{type:"environment"}}),t._v("  Ghana ")],1)]),a("p",[t._v("\n                        Technologies used:\n                        "),a("a-tag",{attrs:{color:"#1F81CE"}},[t._v("\n                          vue js\n                        ")]),a("a-tag",{attrs:{color:"#1F81CE"}},[t._v("\n                          django\n                        ")])],1),a("p",[t._v("Designing and implementing use case of UX processes of the user story")]),a("p",[t._v("2013 -2017")])])],1),a("a-timeline",[a("a-timeline-item",[a("p",{staticStyle:{"font-weight":"700"}},[t._v("\n                        Kefri conso\n\n\n                      ")]),a("p",[a("span",[a("a-icon",{attrs:{type:"bank"}}),t._v("  codeln "),a("a-icon",{attrs:{type:"environment"}}),t._v("  Ghana")],1)]),a("p",[t._v("\n                        Technologies used:\n                        "),a("a-tag",{attrs:{color:"#1F81CE"}},[t._v("\n                          vue js\n                        ")]),a("a-tag",{attrs:{color:"#1F81CE"}},[t._v("\n                          django\n                        ")])],1),a("p",[t._v("Designing and implementing use case of UX processes of the user story")]),a("p",[t._v("2013 -2017")])])],1)],1),a("p",{staticStyle:{"font-family":"sofia_probold","text-decoration":"underline","text-decoration-color":"#1F81CE"}},[t._v("PORTFOLIO / GIGS")]),a("a-row",{attrs:{gutter:"16"}},[a("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{span:"12"}},[a("a-card",{staticClass:"nine"},[a("img",{staticClass:"card-img-top",attrs:{slot:"cover",alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},slot:"cover"}),a("a-card-meta",[a("template",{slot:"description"},[t._v("\n                          Feb 2018 – Mar 2018\n\n                          "),a("p",[t._v("Role in Project:")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            Developer\n                          ")]),a("p",[t._v("Tools used:")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            react\n                          ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            django\n                          ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            vue\n                          ")]),a("p",[t._v("Description: You can develop,design,product or even devops.")])],1)],2)],1)],1),a("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{span:"12"}},[a("a-card",{staticClass:"nine"},[a("img",{staticClass:"card-img-top",attrs:{slot:"cover",alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"},slot:"cover"}),a("a-card-meta",[a("template",{slot:"description"},[t._v("\n                          Feb 2018 – Mar 2018\n\n                          "),a("p",[t._v("Role in Project:")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            Developer\n                          ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            Designer\n                          ")]),a("p",[t._v("Tools used:")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            react\n                          ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            django\n                          ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            vue\n                          ")]),a("a-tag",{staticStyle:{"margin-bottom":"1rem"},attrs:{color:"#1F81CE"}},[t._v("\n                            Adobe Illustrator\n                          ")]),a("p",[t._v("Description: You can develop,design,product or even devops.")])],1)],2)],1)],1)],1),a("p",{staticStyle:{"font-family":"sofia_probold","text-decoration":"underline","text-decoration-color":"#1F81CE"}},[t._v("Education")]),a("a-timeline",[a("a-timeline-item",[a("p",{staticStyle:{"font-weight":"700"}},[t._v("\n                      Jaramogi Oginga Odinga University\n\n\n                    ")]),a("p",[t._v("\n                      Bsc Computer Security forensics\n\n\n                    ")]),a("p",[t._v("2013 -2017")])])],1),a("a-timeline",[a("a-timeline-item",[a("p",{staticStyle:{"font-weight":"700"}},[t._v("\n                      Jaramogi Oginga Odinga University\n\n\n                    ")]),a("p",[t._v("\n                      Bsc Computer Security forensics\n\n\n                    ")]),a("p",[t._v("2013 -2017")])])],1),a("p",{staticStyle:{"font-family":"sofia_probold","text-decoration":"underline","text-decoration-color":"#1F81CE"}},[t._v("Certifications")]),a("a-timeline",[a("a-timeline-item",[a("p",{staticStyle:{"font-weight":"700"}},[t._v("\n                      Product Marketing certification\n\n\n                    ")]),a("p",[t._v("\n                      Issuing organization: Product school\n\n\n                    ")]),a("p",[t._v("Issued on : Aug 2020")])])],1)],1)])])],1)],1)],1)],1)],1)},n=[],r=(a("6b54"),a("96cf"),a("3b8d")),i=a("2ab5"),s=a("c1df"),c=a.n(s),l={name:"Cv",data:function(){return{currentUserProfile:{}}},components:{CandidateSider:i["a"]},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.currentUserProfile=this.$store.state.user_object;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),computed:{Greeting:function(){c.a;var t=new Date,e=t.getHours(),a="";return a=e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening",a}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}}},u=l,p=(a("c018"),a("2877")),m=Object(p["a"])(u,o,n,!1,null,"5d70d15f",null);e["default"]=m.exports},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(t,e,a){"use strict";a("3846");var o=a("cb7c"),n=a("0bfb"),r=a("9e1e"),i="toString",s=/./[i],c=function(t){a("2aba")(RegExp.prototype,i,t,!0)};a("79e5")((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?c((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?n.call(t):void 0)})):s.name!=i&&c((function(){return s.call(this)}))},c018:function(t,e,a){"use strict";var o=a("0544"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-6831bd41.079ff4a5.js.map