(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6eca568"],{"2f80":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[a("CandidateSider"),a("a-layout",[a("a-layout-content",{staticStyle:{"background-color":"white"}},[a("DevHeader"),a("div",{style:{padding:"5px",background:"#fff"}},[a("a-row",{staticStyle:{"margin-top":"1%"}},[a("a-col",{attrs:{span:"24"}},[a("h3",{staticStyle:{"margin-left":"1.5rem",color:"#1976D2","font-weight":"bold"}},[t._v("\n                            Track your applications through the stages\n                        ")])])],1),a("a-row",{staticStyle:{padding:"2%"},attrs:{gutter:8}},[a("a-col",{attrs:{span:"6"}},[a("a-card",{staticClass:"managecard",staticStyle:{"border-top-color":"#3A61CC",padding:"0"}},[a("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v("\n                                Applications")]),t.active.length>0?a("a-timeline",t._l(t.active,function(e){return a("a-timeline-item",{key:e},[a("a",[a("strong",[t._v(t._s(e.title))])]),a("br"),a("div",{staticClass:"text-muted"},[t._v("\n                                        Company : "+t._s(e.company)+"\n\n                                        "),a("br"),t._v("\n                                        Stage:\n                                        "),a("a-tag",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{color:"#9C27B0"}},[t._v("\n                                            "+t._s(e.stage)+"\n                                        ")])],1)])}),1):t._e()],1)],1),a("a-col",{attrs:{span:"6"}},[a("a-card",{staticClass:"managecard",staticStyle:{"border-top-color":"#fa5580"}},[a("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v("\n                                Testing")]),t.testing.length>0?a("a-timeline",t._l(t.testing,function(e){return a("a-timeline-item",{key:e},[a("a",[a("strong",[t._v(t._s(e.title))])]),a("br"),a("div",{staticClass:"text-muted"},[t._v("\n                                        Company : "+t._s(e.company)+"\n\n                                        "),a("br"),e.project?a("div",[a("p",[t._v("\n                                                Project assigned: "),a("span"),a("a",{on:{click:function(a){return t.navigateTo({name:"assignedproject",params:{projectId:e.project.id,applicationId:e.key,type:e.type}})}}},[t._v("\n                                                    "+t._s(e.project.name)+"\n                                                ")])])]):a("div",[a("p",[t._v("Project assignment pending")])])])])}),1):t._e()],1)],1),a("a-col",{attrs:{span:"6"}},[a("a-card",{staticClass:"managecard",staticStyle:{"border-top-color":"#1C9DDF"}},[a("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v("\n                                Interview")]),t.interview.length>0?a("a-timeline",t._l(t.interview,function(e){return a("a-timeline-item",{key:e},[a("a",[a("strong",[t._v(t._s(e.title))])]),a("br"),a("div",{staticClass:"text-muted"},[t._v("\n                                        Company : "+t._s(e.company)+"\n\n                                        "),a("br"),e.start?a("div",[a("p",[t._v("Interview:"),a("span",[t._v(t._s(e.start))])])]):a("div",[a("p",[t._v("Interview time not yet set")])])])])}),1):t._e()],1)],1),a("a-col",{attrs:{span:"6"}},[a("a-card",{staticClass:"managecard",staticStyle:{"border-top-color":"#3FCE9D"}},[a("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v("\n                                Offers")]),t.offers.length>0?a("a-timeline",t._l(t.offers,function(e){return a("a-timeline-item",{key:e},[a("a",[a("strong",[t._v(t._s(e.title))])]),a("br"),a("div",{staticClass:"text-muted"},[t._v("\n                                        Company : "+t._s(e.company)+"\n\n                                        "),a("br"),t._v("\n                                        Stage:\n                                        "),a("a-tag",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{color:"#9C27B0"}},[t._v("\n                                            "+t._s(e.stage)+"\n                                        ")])],1)])}),1):t._e()],1)],1)],1)],1)],1)],1)],1)},s=[],n=(a("96cf"),a("3b8d")),o=a("d225"),r=a("e63b"),l=a("bc0c"),c=a("290c"),p=a("da05"),d=a("688c"),h=a("c1df"),v=a.n(h),m=function t(e,a,i,s,n,r,l,c,p){Object(o["a"])(this,t),this.key=e,this.title=a,this.company=i,this.stage=s,this.type=n,this.start=r,this.end=l,this.color=c,this.project=p},g={name:"ManageApplications",data:function(){return{applications:[],active:[],testing:[],interview:[],offers:[]}},components:{ACol:p["b"],ARow:c["a"],DevHeader:l["a"],CandidateSider:r["a"]},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,i,s,n,o,r,l,c,p,h,g,u,b,f,_,y,w,j,k,C,S,D,Y;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,d["a"].candidatejobs(this.$store.state.user.pk,e);case 3:return this.alldevjobs=t.sent.data,t.next=6,d["a"].pickedapplications(this.$store.state.user.pk,e);case 6:for(this.alldevjobpicked=t.sent.data,a=0;a<this.alldevjobs.length;a++)i=this.alldevjobs[a].id,s=this.alldevjobs[a].job.title,n=this.alldevjobs[a].recruiter.company,o=this.alldevjobs[a].stage,r="job",l=this.alldevjobs[a].project,c=v()(this.alldevjobs[a].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),p=v()(this.alldevjobs[a].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),h=this.alldevjobs[a].eventcolor,g=new m(i,s,n,o,r,c,p,h,l),this.applications.push(g);for(u=0;u<this.alldevjobpicked.length;u++)b=this.alldevjobpicked[u].id,f="Talent pool pick",_=this.alldevjobpicked[u].owner.company,y=this.alldevjobpicked[u].stage,w="talent",j=this.alldevjobpicked[u].project,k=v()(this.alldevjobpicked[u].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),C=v()(this.alldevjobpicked[u].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),S=this.alldevjobpicked[u].eventcolor,D=new m(b,f,_,y,w,k,C,S,j),this.applications.push(D);for(Y=0;Y<this.applications.length;Y++)"active"===this.applications[Y].stage||"new"===this.applications[Y].stage?this.active.push(this.applications[Y]):"test"===this.applications[Y].stage?this.testing.push(this.applications[Y]):"interview"===this.applications[Y].stage?this.interview.push(this.applications[Y]):"offer"===this.applications[Y].stage&&this.offers.push(this.applications[Y]);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)}}},u=g,b=(a("e713"),a("2877")),f=Object(b["a"])(u,i,s,!1,null,"4987e7ba",null);e["default"]=f.exports},3699:function(t,e,a){},e713:function(t,e,a){"use strict";var i=a("3699"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-b6eca568.daa7bbeb.js.map