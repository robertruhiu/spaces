(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e85390f8"],{2079:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("Pageheader"),a("a-layout-content",{style:{padding:"0 0px",marginTop:"4%"}},[a("div",{style:{background:"#fff",padding:"24px",minHeight:"81vh"}},[t.$store.state.isUserLoggedIn?t._e():a("a-card",{staticClass:"center",style:{width:"22rem"},attrs:{title:"Login"}},[t.error?a("p",{staticClass:"alert"},[t._v(t._s(t.error))]):t._e(),a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("a-form-item",[a("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"z-index":"0"},attrs:{placeholder:"Email",name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1),t.errors.has("email")?a("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[t._v(t._s(t.errors.first("email"))+"\n                        ")]):t._e()],1),a("a-form-item",[a("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"z-index":"0"},attrs:{placeholder:"Password",type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),t.errors.has("password")?a("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[t._v(t._s(t.errors.first("password"))+"\n                        ")]):t._e()],1),!1===t.loading?a("a-form-item",[a("a",{staticClass:"login-form-forgot",attrs:{href:""}},[t._v("\n                            Forgot password\n                        ")]),a("a-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:t.login}},[t._v("\n                            Log in\n                        ")]),t._v("\n\n\n                        Or\n                        "),a("router-link",{attrs:{to:"/register"}},[t._v("\n                            register now!\n                        ")])],1):a("a-form-item",[a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1)])],1)],1)],1)]),a("Footer")],1)},s=[],o=a("96c7"),i=a("9ef1"),n=a("b012"),l=a("bf80"),c={name:"login",components:{Pageheader:o["a"],Footer:i["a"]},data:function(){return{email:"robertruhiu@gmail.com",password:"Pokerface1994",emailnull:null,passwordnull:null,error:null,usertype:null,currentUserProfile:{},loading:!1}},methods:{login:function(){var t=this;this.$validator.validateAll().then(function(e){e?(t.loading=!0,n["a"].login({email:t.email,password:t.password}).then(function(e){t.$store.dispatch("setToken",e.data.token),t.$store.dispatch("setUser",e.data.user);var a={headers:{Authorization:"JWT "+t.$store.state.token}};l["a"].currentuser(t.$store.state.user.pk,a).then(function(e){t.$store.dispatch("setUsertype",e.data.user_type),t.$store.dispatch("setUser_id",e.data.user),"complete"===e.data.stage?"developer"===t.$store.state.usertype?t.$router.push({name:"developer"}):t.$router.push({name:"recruiter"}):t.$router.push({name:"register"})}).catch(function(e){return t.loading=!1,e})}).catch(function(e){return t.loading=!1,t.error="login details incorrect",e})):t.loading=!1})}}},u=c,d=(a("9a51"),a("2877")),m=Object(d["a"])(u,r,s,!1,null,"501e6b43",null);e["default"]=m.exports},2396:function(t,e,a){"use strict";var r=a("9a857"),s=a.n(r);s.a},7418:function(t,e,a){},8731:function(t,e,a){"use strict";var r=a("ce76"),s=a.n(r);s.a},"96c7":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"100%","margin-left":"40%"},attrs:{src:a("b8fb")}})])],1),r("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("My account\n        ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("My account\n        ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n            Login\n        ")]),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n        ")]),r("a",[t.$store.state.isUserLoggedIn?r("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n            ")]):t._e()],1)],1)])},s=[],o={name:"Header",methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})}}},i=o,n=(a("2396"),a("2877")),l=Object(n["a"])(i,r,s,!1,null,"793839ce",null);e["a"]=l.exports},"9a51":function(t,e,a){"use strict";var r=a("7418"),s=a.n(r);s.a},"9a857":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.b596d5fb.svg"},"9ef1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticStyle:{"min-height":"16rem","background-color":"#1875d2"}},[r("a-row",{style:{marginTop:"5rem",padding:"0 6rem"},attrs:{gutter:48}},[r("a-col",{attrs:{span:6}},[r("img",{staticClass:"imagecenter",staticStyle:{"margin-top":"4rem",width:"50%"},attrs:{src:a("9b19")}})])],1),r("footer",{attrs:{id:"footer"}},[r("div",{staticClass:"footer-wrap"},[r("div",{staticClass:"ant-row"},[r("div",{staticClass:"ant-col-xs-24 ant-col-sm-24 ant-col-md-6"},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white"}},[t._v("Services")]),r("div",[r("router-link",{attrs:{to:"talent"}},[t._v("\n                                Talent\n                            ")])],1),r("div",[r("router-link",{attrs:{to:"jobs"}},[t._v("\n                                Job Board\n                            ")])],1)])]),r("div",{staticClass:"ant-col-xs-24 ant-col-sm-24 ant-col-md-6"},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white"}},[t._v("Company")]),r("div",[r("router-link",{attrs:{to:"privacy"}},[t._v("Privacy")])],1),r("div",[r("router-link",{attrs:{to:"terms"}},[t._v("Terms")])],1)])]),r("div",{staticClass:"ant-col-xs-24 ant-col-sm-24 ant-col-md-6"},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white"}},[t._v("Contact")]),r("div",{staticClass:"icons-list"},[r("a",{attrs:{href:"mailto:info@codeln.com",target:"_top"}},[r("a-icon",{attrs:{type:"message"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://www.facebook.com/CodelnSpaces/",target:"_blank"}},[r("a-icon",{attrs:{type:"facebook"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://www.linkedin.com/company/codeln/",target:"_blank"}},[r("a-icon",{attrs:{type:"linkedin"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/Codeln_spaces",target:"_blank"}},[r("a-icon",{attrs:{type:"twitter"}})],1)])])])])])])],1)},s=[],o={name:"Footer"},i=o,n=(a("8731"),a("2877")),l=Object(n["a"])(i,r,s,!1,null,"40b41945",null);e["a"]=l.exports},b012:function(t,e,a){"use strict";var r=a("3f4a");e["a"]={register:function(t){return Object(r["a"])().post("rest-auth/registration/",t)},login:function(t){return Object(r["a"])().post("rest-auth/login/",t)}}},b8fb:function(t,e,a){t.exports=a.p+"img/logobg.f302741d.svg"},ce76:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e85390f8.08757d4b.js.map