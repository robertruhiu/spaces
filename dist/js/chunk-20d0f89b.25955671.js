(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20d0f89b"],{"96c7":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:s("b8fb")}})])],1),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},["recruiter"===t.$store.state.usertype?r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/post/true"}},[t._v("Post a job for free\n            ")]):"developer"===t.$store.state.usertype?r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("Post a job for free\n            ")]):r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("Post a job for\n                free\n            ")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/prices"}},[t._v("Pricing")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent pool")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/jobs"}},[t._v("Job board")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                Login\n            ")]),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n            ")]),r("a",[t.$store.state.isUserLoggedIn?r("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                ")]):t._e()],1)],1)]),r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticStyle:{float:"right"}},[r("Menusider")],1)])],1)},a=[],o=(s("96cf"),s("3b8d")),n=s("8808"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[s("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[s("a-icon",{attrs:{type:"menu-fold"}})],1),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",{key:"0"},["recruiter"===t.$store.state.usertype?s("router-link",{attrs:{to:"/post/true"}},[s("span",[t._v("Post a job for free")])]):"developer"===t.$store.state.usertype?s("router-link",{attrs:{to:"/developer"}},[s("span",[t._v("Post a job for free")])]):s("router-link",{attrs:{to:"/login"}},[s("span",[t._v("Post a job for free")])])],1),s("a-menu-item",{key:"6"},[s("router-link",{attrs:{to:"/prices"}},[s("span",[t._v("Pricing")])])],1),s("a-menu-item",{key:"7"},[s("router-link",{attrs:{to:"/talent"}},[s("span",[t._v("Talent pool")])])],1),s("a-menu-item",{key:"8"},[s("router-link",{attrs:{to:"/jobs"}},[s("span",[t._v("Job board ")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?s("a-menu-item",{key:"1"},[s("router-link",{attrs:{to:"/recruiter"}},[s("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?s("a-menu-item",{key:"6"},[s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?s("a-menu-item",{key:"2"},[s("router-link",{attrs:{to:"/developer"}},[s("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?s("a-menu-item",{key:"7"},[s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():s("a-menu-item",{key:"3"},[s("router-link",{attrs:{to:"/login"}},[s("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():s("a-menu-item",{key:"4"},[s("router-link",{attrs:{to:"/register"}},[s("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?s("a-menu-item",{key:"5"},[s("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},l=[],c=s("bf80"),u={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user||!this.$store.state.user.pk){t.next=5;break}return t.next=4,c["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},m=u,d=s("2877"),p=Object(d["a"])(m,i,l,!1,null,"51f49fc4",null),g=p.exports,h={name:"Header",components:{hideAt:n["hideAt"],showAt:n["showAt"],Menusider:g},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user){t.next=5;break}return t.next=4,c["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$router.push({name:"home"})}}},f=h,b=(s("d0bd"),Object(d["a"])(f,r,a,!1,null,"7e299201",null));e["a"]=b.exports},"9b19":function(t,e,s){t.exports=s.p+"img/logo.b596d5fb.svg"},"9d98":function(t,e,s){},"9ef1":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticStyle:{"min-height":"16rem","background-color":"#1875d2"}},[r("footer",{style:{padding:"3%"},attrs:{id:"footer"}},[r("div",{staticClass:"footer-wrap"},[r("div",{staticClass:"ant-row gutter"},[r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6 "},[r("img",{staticClass:"imagecenter",staticStyle:{width:"50%"},attrs:{src:s("9b19")}})])]),r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6",staticStyle:{"margin-bottom":"1rem"}},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Services")]),r("div",[r("router-link",{attrs:{to:"/talent"}},[t._v("\n                                Talent pool\n                            ")])],1),r("div",[r("router-link",{attrs:{to:"/jobs"}},[t._v("\n                                Job Board\n                            ")])],1),r("div",[r("router-link",{attrs:{to:"/prices"}},[t._v("\n                                Pricing\n                            ")])],1)])]),r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6",staticStyle:{"margin-bottom":"1rem"}},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Company")]),r("div",[r("router-link",{attrs:{to:"privacy"}},[t._v("Privacy")])],1),r("div",[r("router-link",{attrs:{to:"terms"}},[t._v("Terms")])],1)])]),r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[r("div",{staticClass:"footer-center"},[r("div",{staticClass:"icons-list"},[r("a",{attrs:{href:"mailto:info@codeln.com",target:"_top"}},[r("a-icon",{attrs:{type:"mail"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://www.facebook.com/CodelnSpaces/",target:"_blank"}},[r("a-icon",{attrs:{type:"facebook"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://www.linkedin.com/company/codeln/",target:"_blank"}},[r("a-icon",{attrs:{type:"linkedin"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/Codeln_spaces",target:"_blank"}},[r("a-icon",{attrs:{type:"twitter"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://medium.com/codeln",target:"_blank"}},[r("a-icon",{attrs:{type:"medium"}})],1)])])])],1)])])])},a=[],o=s("da05"),n=s("8808"),i={name:"Footer",components:{ACol:o["b"],hideAt:n["hideAt"]},data:function(){return{top:10,bottom:10}}},l=i,c=(s("ec86"),s("2877")),u=Object(c["a"])(l,r,a,!1,null,"15e80b50",null);e["a"]=u.exports},d0bd:function(t,e,s){"use strict";var r=s("9d98"),a=s.n(r);a.a},e774:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout",[s("Pageheader"),s("div",{style:{background:"#fff",minHeight:"81vh"}},[s("a-row",{staticStyle:{padding:"3%"}},[s("a-col",{attrs:{xs:{span:18,offset:0},sm:{span:12,offset:6},md:{span:12,offset:6},lg:{span:12,offset:8},xl:{span:12,offset:9}}})],1)],1),s("Footer")],1)},a=[],o=s("96c7"),n=s("9ef1"),i={name:"unsubscribed",components:{Pageheader:o["a"],Footer:n["a"]}},l=i,c=s("2877"),u=Object(c["a"])(l,r,a,!1,null,"30f31be4",null);e["default"]=u.exports},ebc8:function(t,e,s){},ec86:function(t,e,s){"use strict";var r=s("ebc8"),a=s.n(r);a.a}}]);
//# sourceMappingURL=chunk-20d0f89b.25955671.js.map