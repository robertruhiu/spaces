(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a197b78"],{"0069":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",[r("Pageheader"),r("a-layout-content",{style:{padding:"0 0px",marginTop:"4rem"}},[r("div",{style:{background:"#fff",minHeight:"81vh"}},[r("a-row",{staticStyle:{padding:"3%"}},[r("a-col",{attrs:{xs:{span:18,offset:0},sm:{span:12,offset:6},md:{span:12,offset:6},lg:{span:12,offset:8},xl:{span:12,offset:9}}},[t.$store.state.isUserLoggedIn?t._e():r("a-card",{style:{width:"21rem"},attrs:{title:"Forgot password"}},[t.error?r("p",{staticClass:"alert"},[t._v(t._s(t.error))]):t._e(),t.info?r("p",{staticClass:"info"},[t._v(t._s(t.info))]):t._e(),null===t.info?r("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("a-form-item",[r("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"z-index":"0"},attrs:{placeholder:"Email",name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1),t.errors.has("email")?r("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[t._v(t._s(t.errors.first("email"))+"\n                                ")]):t._e()],1),!1===t.loading?r("a-form-item",[r("a-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:t.Forgot}},[t._v("\n                                    Submit\n                                ")])],1):r("a-form-item",[r("div",{staticStyle:{"text-align":"center"}},[r("a-spin")],1)])],1):t._e()],1)],1)],1)],1)]),r("Footer")],1)},a=[],o=r("96c7"),n=r("9ef1"),i=r("b012"),l=r("290c"),c={name:"forgot",components:{ARow:l["a"],Pageheader:o["a"],Footer:n["a"]},data:function(){return{email:"",loading:!1,form:this.$form.createForm(this),info:null,error:null}},methods:{Forgot:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.loading=!0,i["a"].forgot({email:t.email}).then((function(e){t.info="Password reset e-mail has been sent.Please check your email",t.loading=!1})).catch((function(e){return t.loading=!1,t.error="details incorrect",e}))):t.loading=!1}))}}},u=c,m=(r("dd68"),r("2877")),d=Object(m["a"])(u,s,a,!1,null,"1bf6aaa8",null);e["default"]=d.exports},"1c8f":function(t,e,r){},3779:function(t,e,r){"use strict";var s=r("1c8f"),a=r.n(s);a.a},"58af":function(t,e,r){},"96c7":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:r("b8fb")}})])],1),s("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[s("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},["recruiter"===t.$store.state.usertype?s("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/post/true"}},[t._v("Post a job for free\n                ")]):"developer"===t.$store.state.usertype?s("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("Post a job for free\n                ")]):s("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("Post a job for\n                    free\n                ")]),s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/prices"}},[t._v("Pricing")]),s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/bridgesHome"}},[t._v("Skill Bridging program\n                ")]),s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent pool")]),s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/jobs"}},[t._v("Job board")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                    Login\n                ")]),t.$store.state.isUserLoggedIn?t._e():s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n                ")]),s("a",[t.$store.state.isUserLoggedIn?s("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                    ")]):t._e()],1)],1)]),s("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[s("div",{staticStyle:{float:"right"}},[s("Menusider")],1)])],1)},a=[],o=(r("96cf"),r("3b8d")),n=r("8808"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[r("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[r("a-icon",{attrs:{type:"menu-fold"}})],1),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"0"},["recruiter"===t.$store.state.usertype?r("router-link",{attrs:{to:"/post/true"}},[r("span",[t._v("Post a job for free")])]):"developer"===t.$store.state.usertype?r("router-link",{attrs:{to:"/developer"}},[r("span",[t._v("Post a job for free")])]):r("router-link",{attrs:{to:"/login"}},[r("span",[t._v("Post a job for free")])])],1),r("a-menu-item",{key:"6"},[r("router-link",{attrs:{to:"/prices"}},[r("span",[t._v("Pricing")])])],1),r("a-menu-item",{key:"12"},[r("a",{attrs:{href:"https://youtu.be/nmH8uD32IqA",target:"_blank"}},[t._v("\n\n              Demo\n          ")])]),r("a-menu-item",{key:"7"},[r("router-link",{attrs:{to:"/talent"}},[r("span",[t._v("Talent pool")])])],1),r("a-menu-item",{key:"8"},[r("router-link",{attrs:{to:"/jobs"}},[r("span",[t._v("Job board ")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("a-menu-item",{key:"1"},[r("router-link",{attrs:{to:"/recruiter"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("a-menu-item",{key:"6"},[r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?r("a-menu-item",{key:"2"},[r("router-link",{attrs:{to:"/developer"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("a-menu-item",{key:"7"},[r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"3"},[r("router-link",{attrs:{to:"/login"}},[r("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"4"},[r("router-link",{attrs:{to:"/register"}},[r("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?r("a-menu-item",{key:"5"},[r("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},l=[],c=r("bf80"),u={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user||!this.$store.state.user.pk){t.next=5;break}return t.next=4,c["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},m=u,d=r("2877"),p=Object(d["a"])(m,i,l,!1,null,"b96d7aec",null),f=p.exports,g={name:"Header",components:{hideAt:n["hideAt"],showAt:n["showAt"],Menusider:f},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user){t.next=5;break}return t.next=4,c["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$router.push({name:"home"})}}},h=g,b=(r("3779"),Object(d["a"])(h,s,a,!1,null,"0b36f066",null));e["a"]=b.exports},"9b19":function(t,e,r){t.exports=r.p+"img/logo.b596d5fb.svg"},"9ef1":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout-footer",{staticStyle:{"min-height":"16rem","background-color":"#1875d2"}},[s("footer",{style:{padding:"3%"},attrs:{id:"footer"}},[s("div",{staticClass:"footer-wrap"},[s("div",{staticClass:"ant-row gutter"},[s("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[s("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6 "},[s("img",{staticClass:"imagecenter",staticStyle:{width:"50%"},attrs:{src:r("9b19")}})])]),s("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6",staticStyle:{"margin-bottom":"1rem"}},[s("div",{staticClass:"footer-center"},[s("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Services")]),s("div",[s("router-link",{attrs:{to:"/talent"}},[t._v("\n                                Talent pool\n                            ")])],1),s("div",[s("router-link",{attrs:{to:"/jobs"}},[t._v("\n                                Job Board\n                            ")])],1),s("div",[s("router-link",{attrs:{to:"/prices"}},[t._v("\n                                Pricing\n                            ")])],1)])]),s("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6",staticStyle:{"margin-bottom":"1rem"}},[s("div",{staticClass:"footer-center"},[s("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Company")]),s("div",[s("router-link",{attrs:{to:"privacy"}},[t._v("Privacy")])],1),s("div",[s("router-link",{attrs:{to:"terms"}},[t._v("Terms")])],1)])]),s("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[s("div",{staticClass:"footer-center"},[s("div",{staticClass:"icons-list"},[s("a",{attrs:{href:"mailto:info@codeln.com",target:"_top"}},[s("a-icon",{attrs:{type:"mail"}})],1),s("a",{staticClass:"text-muted",attrs:{href:"https://www.facebook.com/CodelnSpaces/",target:"_blank"}},[s("a-icon",{attrs:{type:"facebook"}})],1),s("a",{staticClass:"text-muted",attrs:{href:"https://www.linkedin.com/company/codeln/",target:"_blank"}},[s("a-icon",{attrs:{type:"linkedin"}})],1),s("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/Codeln_spaces",target:"_blank"}},[s("a-icon",{attrs:{type:"twitter"}})],1),s("a",{staticClass:"text-muted",attrs:{href:"https://instagram.com/codeln_spaces?igshid=wfibiwjbqe9e",target:"_blank"}},[s("a-icon",{attrs:{type:"instagram"}})],1),s("a",{staticClass:"text-muted",attrs:{href:"https://www.youtube.com/channel/UCJc8rd10wkhX2c1Htg4aF0Q",target:"_blank"}},[s("a-icon",{attrs:{type:"youtube"}})],1),s("a",{staticClass:"text-muted",attrs:{href:"https://medium.com/codeln",target:"_blank"}},[s("a-icon",{attrs:{type:"medium"}})],1)])])])],1)])])])},a=[],o=r("da05"),n=r("8808"),i={name:"Footer",components:{ACol:o["b"],hideAt:n["hideAt"]},data:function(){return{top:10,bottom:10}}},l=i,c=(r("e087"),r("2877")),u=Object(c["a"])(l,s,a,!1,null,"b910a34a",null);e["a"]=u.exports},b012:function(t,e,r){"use strict";var s=r("3f4a");e["a"]={register:function(t){return Object(s["a"])().post("rest-auth/registration/",t)},login:function(t){return Object(s["a"])().post("rest-auth/login/",t)},forgot:function(t){return Object(s["a"])().post("rest-auth/password/reset/",t)},reset:function(t){return Object(s["a"])().post("rest-auth/password/reset/confirm/",t)}}},dd68:function(t,e,r){"use strict";var s=r("fd35"),a=r.n(s);a.a},e087:function(t,e,r){"use strict";var s=r("58af"),a=r.n(s);a.a},fd35:function(t,e,r){}}]);
//# sourceMappingURL=chunk-5a197b78.50a7e7d5.js.map