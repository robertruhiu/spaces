(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27c8d7e2"],{3648:function(t,a,e){t.exports=e.p+"img/board.6ee87c46.svg"},"3d4f":function(t,a,e){"use strict";var s=e("b729"),r=e.n(s);r.a},b729:function(t,a,e){},c8ae:function(t,a,e){t.exports=e.p+"img/resume.7b961d30.svg"},f107:function(t,a,e){t.exports=e.p+"img/check1.53501821.svg"},f47d:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[s("CandidateSider"),s("a-layout",[s("a-layout-content",{staticStyle:{"background-color":"white"}},[s("DevHeader"),s("div",{style:{padding:"5px",background:"#fff"}},[s("a-row",{staticStyle:{"margin-top":"2%","margin-bottom":"2%"}},[s("a-col",{attrs:{span:"24"}},[s("h3",{staticStyle:{"margin-left":"1.5rem",color:"#1976D2","font-weight":"bold"}},[t._v("\n                            What would you like to do today?\n                        ")])])],1),s("a-row",{staticStyle:{"padding-right":"2rem","padding-left":"1.5rem","padding-bottom":"1.5rem"},attrs:{gutter:16}},[s("router-link",{attrs:{to:"/assessment"}},[s("a-col",{staticClass:"boxes",attrs:{span:6}},[s("a-row",{staticClass:"ant-card actioncards"},[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:e("f107")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",{staticClass:"ant-card-head-title ",staticStyle:{"font-weight":"bold"}},[t._v("Get Verified")]),s("p",{staticStyle:{margin:"0"}},[t._v("Put your skills to the test")])])],1)],1)],1),s("router-link",{attrs:{to:"/manageapplications"}},[s("a-col",{staticClass:"boxes",attrs:{span:6}},[s("a-row",{staticClass:"ant-card actioncards"},[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:e("c8ae")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("Manage applications")]),s("p",{staticStyle:{margin:"0"}},[t._v("View and manage current jobs")])])],1)],1)],1),s("router-link",{attrs:{to:"/jobs"}},[s("a-col",{staticClass:"boxes",attrs:{span:6}},[s("a-row",{staticClass:"ant-card actioncards"},[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:e("3648")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("Job board")]),s("p",{staticStyle:{margin:"0"}},[t._v("View and apply for jobs")])])],1)],1)],1),s("router-link",{attrs:{to:"/portfolio"}},[s("a-col",{staticClass:"boxes",attrs:{span:6}},[s("a-row",{staticClass:"ant-card actioncards"},[s("a-col",{attrs:{span:"24"}},[s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"poolavatar",attrs:{src:e("f64c")}})])]),s("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("My portfolio")]),s("p",{staticStyle:{margin:"0"}},[t._v("Make your profile more appealing")])])],1)],1)],1)],1)],1),s("br")],1)],1)],1)},r=[],i=(e("96cf"),e("3b8d")),n=e("bf80"),o=e("688c"),c=e("da05"),l=e("290c"),d=e("e63b"),p=e("bc0c"),u={name:"DevDashboard",data:function(){return{currentUserProfile:{},myjobs:[]}},components:{ARow:l["a"],ACol:c["b"],DevHeader:p["a"],CandidateSider:d["a"]},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=8;break}return t.next=4,n["a"].currentuser(this.$store.state.user.pk,a);case 4:return this.currentUserProfile=t.sent.data,t.next=7,o["a"].candidatejobs(this.$store.state.user.pk,a);case 7:this.myjobs=t.sent.data;case 8:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),methods:{navigateTo:function(t){this.$router.push(t)}}},g=u,f=(e("3d4f"),e("2877")),m=Object(f["a"])(g,s,r,!1,null,"0b422131",null);a["default"]=m.exports},f64c:function(t,a,e){t.exports=e.p+"img/curriculum.4a00b0c6.svg"}}]);
//# sourceMappingURL=chunk-27c8d7e2.0d402cad.js.map