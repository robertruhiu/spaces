(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2931a084"],{"8e91":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[s("CandidateSider"),s("a-layout",[s("a-layout-content",{staticStyle:{"background-color":"white"}},[s("vue-cal",{staticClass:"vuecal--blue-theme",staticStyle:{height:"100vh"},attrs:{"hide-weekends":"","disable-views":["years","year"],events:e.events,"events-on-month-view":"short","on-event-click":e.onEventClick}}),s("a-modal",{attrs:{footer:null},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[s("p",[e._v(e._s(e.selectedEvent.title))]),s("p",[e._v("Start time: "+e._s(e.selectedEvent.start))]),s("p",[e._v("End time: "+e._s(e.selectedEvent.end))])])],1)],1)],1)},n=[],r=(s("96cf"),s("3b8d")),i=s("d225"),o=s("e63b"),l=s("7fa7"),u=s.n(l),c=(s("e640"),s("688c")),d=s("c1df"),h=s.n(d),p=function e(t,s,a,n,r){Object(i["a"])(this,e),this.key=t,this.title=s,this.start=a,this.end=n,this.class=r},v={name:"DevCalendar",components:{CandidateSider:o["a"],"vue-cal":u.a},data:function(){return{selectedEvent:{},showDialog:!1,createEvent:!1,bgColor:"#1372cc",size:"large",alldevrequests:[],templist:[],allusers:[],events:[]}},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,s,a,n,r,i,o,l,u,d,v,m,f,y,k;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return h.a,t={headers:{Authorization:"JWT "+this.$store.state.token}},e.next=4,c["a"].candidatejobs(this.$store.state.user.pk,t);case 4:return this.allevents=e.sent.data,e.next=7,c["a"].pickedapplications(this.$store.state.user.pk,t);case 7:for(this.alldevrequests=e.sent.data,s=0;s<this.allevents.length;s++)null!==this.allevents[s].interviewstatus&&(a=this.allevents[s].id,n=this.allevents[s].recruiter.company,r=h()(this.allevents[s].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),i=h()(this.allevents[s].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),o=this.allevents[s].eventcolor,l=new p(a,n,r,i,o),this.events.push(l));for(u=0;u<this.alldevrequests.length;u++)null!==this.alldevrequests[u].interviewstatus&&(d=this.alldevrequests[u].id,v=this.alldevrequests[u].owner.company,m=h()(this.alldevrequests[u].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),f=h()(this.alldevrequests[u].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),y=this.alldevrequests[u].eventcolor,k=new p(d,v,m,f,y),this.events.push(k));case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},m=v,f=s("2877"),y=Object(f["a"])(m,a,n,!1,null,"0e284ee0",null);t["default"]=y.exports},e63b:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:e.onCollapse,breakpoint:e.onBreakpoint}},[s("router-link",{attrs:{to:"/"}},[s("img",{staticStyle:{width:"120px",height:"31px","margin-top":"7%","margin-bottom":"6%","margin-left":"9%"},style:e.logo,attrs:{src:e.defaultlogo}})]),s("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[s("a-menu-item",{key:"1"},[s("router-link",{attrs:{to:"/developer"}},[s("a-icon",{attrs:{type:"dashboard"}}),s("span",[e._v("Dashboard")])],1)],1),s("a-menu-item",{key:"11"},[s("router-link",{attrs:{to:"/assessment"}},[s("a-icon",{attrs:{type:"code"}}),s("span",[e._v("Get verified")])],1)],1),s("a-menu-item",{key:"10"},[s("router-link",{attrs:{to:"/manageapplications"}},[s("a-icon",{attrs:{type:"folder-open"}}),s("span",[e._v("Manage Applications")])],1)],1),s("a-menu-item",{key:"4"},[s("router-link",{attrs:{to:"/jobs"}},[s("a-icon",{attrs:{type:"solution"}}),s("span",[e._v("Job board")])],1)],1),s("a-menu-item",{key:"9"},[s("router-link",{attrs:{to:"/portfolio"}},[s("a-icon",{attrs:{type:"file-done"}}),s("span",[e._v("My portfolio")])],1)],1),s("a-menu-item",{key:"8"},[s("router-link",{attrs:{to:"/devcalendar"}},[s("a-icon",{attrs:{type:"calendar"}}),s("span",[e._v("Calendar")])],1)],1),s("a-menu-item",{key:"6"},[s("router-link",{attrs:{to:"/developerprofile"}},[s("a-icon",{attrs:{type:"user"}}),s("span",[e._v("My profile")])],1)],1),s("a-menu-item",{key:"7"},[s("a",{on:{click:e.logout}},[s("a-icon",{attrs:{type:"export"}}),s("span",[e._v("  Logout")])],1)])],1)],1)},n=[],r=(s("96cf"),s("3b8d")),i=s("b8fb"),o=s.n(i),l={name:"CandidateSider",data:function(){return{defaultlogo:o.a}},components:{},methods:{onCollapse:function(e){return e},onBreakpoint:function(e){return e},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(e){this.$router.push(e)}}},u=l,c=s("2877"),d=Object(c["a"])(u,a,n,!1,null,"7ec26c08",null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-2931a084.7c15e0fa.js.map