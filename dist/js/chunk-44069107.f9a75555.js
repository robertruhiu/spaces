(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44069107"],{"10fa":function(t,e,s){"use strict";var a=s("ceeb"),r=s.n(a);r.a},2079:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout",[s("Pageheader"),s("a-layout-content",{style:{padding:"0 0px",marginTop:"4rem"}},[s("div",{style:{background:"#fff",minHeight:"81vh"}},[s("a-row",{staticStyle:{padding:"3%"}},[s("a-col",{attrs:{xs:{span:18,offset:0},sm:{span:12,offset:6},md:{span:12,offset:6},lg:{span:12,offset:8},xl:{span:12,offset:9}}},[t.$store.state.isUserLoggedIn?t._e():s("a-card",{style:{width:"21rem"},attrs:{title:"Login"}},[t.error?s("p",{staticClass:"alert"},[t._v(t._s(t.error))]):t._e(),s("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("a-form-item",[s("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"z-index":"0"},attrs:{placeholder:"Email",name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1),t.errors.has("email")?s("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[t._v(t._s(t.errors.first("email"))+"\n                                ")]):t._e()],1),s("a-form-item",[s("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"z-index":"0"},attrs:{placeholder:"Password",type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),t.errors.has("password")?s("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[t._v("\n                                    "+t._s(t.errors.first("password"))+"\n                                ")]):t._e()],1),!1===t.loading?s("a-form-item",[s("a",{staticClass:"login-form-forgot",attrs:{href:""}},[t._v("\n                                    Forgot password\n                                ")]),s("a-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:t.login}},[t._v("\n                                    Log in\n                                ")]),t._v("\n\n\n                                Or\n                                "),s("router-link",{attrs:{to:"/register"}},[t._v("\n                                    register now!\n                                ")])],1):s("a-form-item",[s("div",{staticStyle:{"text-align":"center"}},[s("a-spin")],1)])],1)],1)],1)],1)],1)]),s("Footer")],1)},r=[],o=s("96c7"),n=s("9ef1"),i=s("b012"),l=s("bf80"),c=s("290c"),d={name:"login",components:{ARow:c["a"],Pageheader:o["a"],Footer:n["a"]},data:function(){return{email:"",password:"",emailnull:null,passwordnull:null,error:null,usertype:null,currentUserProfile:{},loading:!1,form:this.$form.createForm(this)}},methods:{login:function(){var t=this;this.$validator.validateAll().then(function(e){e?(t.loading=!0,i["a"].login({email:t.email,password:t.password}).then(function(e){t.$store.dispatch("setToken",e.data.token),t.$store.dispatch("setUser",e.data.user);var s={headers:{Authorization:"JWT "+t.$store.state.token}};l["a"].currentuser(t.$store.state.user.pk,s).then(function(e){t.$store.dispatch("setUsertype",e.data.user_type),t.$store.dispatch("setUser_id",e.data.user),"complete"===e.data.stage?"developer"===t.$store.state.usertype?t.$store.state.next?t.$router.push({name:t.$store.state.next}):t.$router.push({name:"developer"}):t.$store.state.next?t.$router.push({name:t.$store.state.next}):t.$router.push({name:"recruiter"}):t.$router.push({name:"register"})}).catch(function(e){return t.loading=!1,e})}).catch(function(e){return t.loading=!1,t.error="login details incorrect",e})):t.loading=!1})}}},u=d,m=(s("bb32"),s("2877")),p=Object(m["a"])(u,a,r,!1,null,"3d636e02",null);e["default"]=p.exports},"96c7":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:s("b8fb")}})])],1),a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                Login\n            ")]),t.$store.state.isUserLoggedIn?t._e():a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n            ")]),a("a",[t.$store.state.isUserLoggedIn?a("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                ")]):t._e()],1)],1)]),a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticStyle:{float:"right"}},[a("Menusider")],1)])],1)},r=[],o=s("8808"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[s("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[s("a-icon",{attrs:{type:"menu-fold"}})],1),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",{key:"0"},[s("router-link",{attrs:{to:"/talent"}},[s("span",[t._v("Talent")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype?s("a-menu-item",{key:"1"},[s("router-link",{attrs:{to:"/recruiter"}},[s("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?s("a-menu-item",{key:"2"},[s("router-link",{attrs:{to:"/developer"}},[s("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():s("a-menu-item",{key:"3"},[s("router-link",{attrs:{to:"/login"}},[s("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():s("a-menu-item",{key:"4"},[s("router-link",{attrs:{to:"/register"}},[s("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?s("a-menu-item",{key:"5"},[s("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},i=[],l={name:"Menusider",methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},c=l,d=s("2877"),u=Object(d["a"])(c,n,i,!1,null,"5e08174a",null),m=u.exports,p={name:"Header",components:{hideAt:o["hideAt"],showAt:o["showAt"],Menusider:m},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},f=p,g=(s("10fa"),Object(d["a"])(f,a,r,!1,null,"418a885e",null));e["a"]=g.exports},"9b19":function(t,e,s){t.exports=s.p+"img/logo.b596d5fb.svg"},"9ef1":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-footer",{staticStyle:{"min-height":"16rem","background-color":"#1875d2"}},[a("footer",{style:{padding:"3%"},attrs:{id:"footer"}},[a("div",{staticClass:"footer-wrap"},[a("div",{staticClass:"ant-row gutter"},[a("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6 "},[a("img",{staticClass:"imagecenter",staticStyle:{width:"50%"},attrs:{src:s("9b19")}})]),a("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[a("div",{staticClass:"footer-center"},[a("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Services")]),a("div",[a("router-link",{attrs:{to:"talent"}},[t._v("\n                                    Talent\n                                ")])],1),a("div",[a("router-link",{attrs:{to:"jobs"}},[t._v("\n                                    Job Board\n                                ")])],1)])]),a("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[a("div",{staticClass:"footer-center"},[a("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Company")]),a("div",[a("router-link",{attrs:{to:"privacy"}},[t._v("Privacy")])],1),a("div",[a("router-link",{attrs:{to:"terms"}},[t._v("Terms")])],1)])]),a("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[a("div",{staticClass:"footer-center"},[a("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Contact")]),a("div",{staticClass:"icons-list"},[a("a",{attrs:{href:"mailto:info@codeln.com",target:"_top"}},[a("a-icon",{attrs:{type:"message"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://www.facebook.com/CodelnSpaces/",target:"_blank"}},[a("a-icon",{attrs:{type:"facebook"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://www.linkedin.com/company/codeln/",target:"_blank"}},[a("a-icon",{attrs:{type:"linkedin"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/Codeln_spaces",target:"_blank"}},[a("a-icon",{attrs:{type:"twitter"}})],1)])])])])])])])},r=[],o=s("da05"),n={name:"Footer",components:{ACol:o["b"]}},i=n,l=(s("abc8"),s("2877")),c=Object(l["a"])(i,a,r,!1,null,"8179e728",null);e["a"]=c.exports},abc8:function(t,e,s){"use strict";var a=s("f61d"),r=s.n(a);r.a},b012:function(t,e,s){"use strict";var a=s("3f4a");e["a"]={register:function(t){return Object(a["a"])().post("rest-auth/registration/",t)},login:function(t){return Object(a["a"])().post("rest-auth/login/",t)}}},bb32:function(t,e,s){"use strict";var a=s("dd3b"),r=s.n(a);r.a},ceeb:function(t,e,s){},dd3b:function(t,e,s){},f61d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-44069107.f9a75555.js.map