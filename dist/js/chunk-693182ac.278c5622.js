(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-693182ac"],{"472b":function(t,e,n){},"706e":function(t,e,n){"use strict";var r=n("472b"),a=n.n(r);a.a},b8fb:function(t,e,n){t.exports=n.p+"img/logobg.f302741d.svg"},f47d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[n("CandidateSider"),n("a-layout",[n("a-layout-content",[t._v("\n            "+t._s(t.currentUserProfile.user_type)+"\n            "),n("br"),t._v("\n            "+t._s(t.currentUserProfile)+"\n\n\n\n\n        ")])],1)],1)},a=[],o=(n("96cf"),n("3b8d")),s=n("bf80"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[n("router-link",{attrs:{to:"/"}},[n("img",{staticStyle:{width:"120px",height:"31px","margin-top":"7%","margin-bottom":"6%","margin-left":"9%"},style:t.logo,attrs:{src:t.defaultlogo}})]),n("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[n("a-menu-item",{key:"1"},[n("router-link",{attrs:{to:"/developer"}},[n("a-icon",{attrs:{type:"dashboard"}}),n("span",[t._v("Dashboard")])],1)],1),n("a-menu-item",{key:"4"},[n("router-link",{attrs:{to:"/jobs"}},[n("a-icon",{attrs:{type:"star"}}),n("span",[t._v("Job board")])],1)],1),n("a-menu-item",{key:"6"},[n("router-link",{attrs:{to:"/talent"}},[n("a-icon",{attrs:{type:"user"}}),n("span",[t._v("My profile")])],1)],1),n("a-menu-item",{key:"7"},[n("a",{on:{click:t.logout}},[n("a-icon",{attrs:{type:"export"}}),n("span",[t._v("  Logout")])],1)])],1)],1)},u=[],c=n("b8fb"),l=n.n(c),p={name:"CandidateSider",data:function(){return{defaultlogo:l.a}},components:{},methods:{onCollapse:function(t){return t},onBreakpoint:function(t){return t},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},d=p,h=n("2877"),f=Object(h["a"])(d,i,u,!1,null,"22bd964a",null),m=f.exports,b={name:"DevDashboard",data:function(){return{currentUserProfile:{}}},components:{CandidateSider:m},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,s["a"].currentuser(this.$store.state.user.pk,e);case 3:this.currentUserProfile=t.sent.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)}}},g=b,y=(n("706e"),Object(h["a"])(g,r,a,!1,null,"398bb1a4",null));e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-693182ac.278c5622.js.map