(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5552b8d1"],{3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(t,e,a){"use strict";a("3846");var i=a("cb7c"),s=a("0bfb"),n=a("9e1e"),r="toString",o=/./[r],c=function(t){a("2aba")(RegExp.prototype,r,t,!0)};a("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?s.call(t):void 0)}):o.name!=r&&c(function(){return o.call(this)})},"8ff9":function(t,e,a){},a77c:function(t,e,a){"use strict";var i=a("b28d"),s=a.n(i);s.a},b28d:function(t,e,a){},d90d:function(t,e,a){"use strict";var i=a("8ff9"),s=a.n(i);s.a},f201d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[i("RecruiterSider"),i("a-layout",{style:{marginLeft:"200px",backgroundColor:"#F8FAFB"}},[i("a-layout-content",[i("CandidateHeader"),i("a-row",{staticStyle:{padding:"1% 1%"}},[i("a-col",{staticStyle:{"padding-left":"15px","padding-right":"15px"},attrs:{span:16}},[i("div",{staticClass:"profile",staticStyle:{"padding-bottom":"2%"}},[i("a-row",[i("a-col",{attrs:{span:22}},[i("p",[t._v("About")]),i("p",[t._v(t._s(t.currentUserProfile.about))])])],1),i("br"),i("a-row",[i("a-col",{attrs:{span:6}},[t._v("\n                                Experience:\n                                "),i("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                                    "+t._s(t.currentUserProfile.years)+" years\n                                ")])],1),i("a-col",{attrs:{span:6}},[i("span",[t._v("\n                                Availability :\n                            "),i("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                             "+t._s(t.currentUserProfile.availabilty)+"\n                        ")])],1)]),i("a-col",{attrs:{span:6}},[i("span",[t._v("\n                                Location :\n                            "),i("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                             "+t._s(t.currentUserProfile.country)+"\n                        ")])],1)])],1)],1),i("div",{staticClass:"bio"},[i("a-tabs",{attrs:{defaultActiveKey:"1"}},[i("a-tab-pane",{key:"1"},[i("span",{attrs:{slot:"tab"},slot:"tab"},[i("a-icon",{attrs:{type:"codepen"}}),t._v("\n                                    Skills\n                                ")],1),i("p",[t._v("Quizzes taken by Candidate")]),t._v("\n                                Javascript :\n                                "),i("a-progress",{attrs:{percent:30}}),t._v("\n                                java:\n                                "),i("a-progress",{attrs:{percent:50}}),t._v("\n                                React:\n                                "),i("a-progress",{attrs:{percent:70}}),t._v("\n                                Angular:\n                                "),i("a-progress",{attrs:{percent:89}})],1),i("a-tab-pane",{key:"2"},[i("span",{attrs:{slot:"tab"},slot:"tab"},[i("a-icon",{attrs:{type:"solution"}}),t._v("\n                                    Projects portfolio\n                                ")],1),i("div",{staticStyle:{padding:"0 2%"}},t._l(t.portfolio,function(e){return i("div",{key:e.id,staticStyle:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"2%","padding-top":"2%"}},[i("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),i("p",[t._v("\n                                            Tools used:\n                                            "),t._l(e.tags,function(e){return i("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                "+t._s(e)+"\n                                            ")])})],2),i("p",[t._v(t._s(e.description)+"\n                                        ")]),i("a",{attrs:{href:e.demo,target:"_blank"}},[t._v("view project")])])}),0)]),i("a-tab-pane",{key:"3"},[i("span",{attrs:{slot:"tab"},slot:"tab"},[i("a-icon",{attrs:{type:"hourglass"}}),t._v("\n                                    Work experience\n                                ")],1),i("div",{staticStyle:{padding:"2%"}},[i("a-timeline",t._l(t.experiences,function(e){return i("a-timeline-item",{key:e.id},[i("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),i("p",[i("span",[i("a-icon",{attrs:{type:"bank"}}),t._v("  "+t._s(e.company)+" "),i("a-icon",{attrs:{type:"environment"}}),t._v("  "+t._s(e.location)+" "),i("a-icon",{attrs:{type:"hourglass"}}),t._v("  "+t._s(e.duration)+"months")],1)]),i("p",[t._v("\n                                                Technologies used:\n                                                "),t._l(e.tags,function(e){return i("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                    "+t._s(e)+"\n                                                ")])})],2),i("p",[t._v(t._s(e.description))])])}),1)],1)])],1)],1)]),i("a-col",{staticStyle:{"margin-top":"0.4%"},attrs:{span:8}},[i("div",{staticClass:"actions"},[i("p",[t._v("Skill tags")]),i("p",[t._v("Candidate skill tags(what candidate says they can do.You can asign a\n                            project to test)\n                        ")]),i("p",t._l(t.skilltags,function(e){return i("span",{key:e.id},[i("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                                "+t._s(e)+"\n                            ")])],1)}),0),i("p",[t.application.project?i("a",{on:{click:function(e){return t.navigateTo({name:"pickedprojectdetails",params:{projectId:t.application.project,candidateId:t.currentUser.id,jobId:t.job.id,applicationId:t.application.id}})}}},[i("strong",[t._v("Project Assigned:")]),t._v("      "+t._s(t.application.name)+"\n                                                                ")]):i("a-button",{staticStyle:{"background-color":"#9c27b0",color:"white"},attrs:{size:t.small},on:{click:function(e){return t.showModal()}}},[i("a-icon",{attrs:{type:"codepen"}}),t._v("\n                                Assign test\n                            ")],1)],1)])])],1),i("a-modal",{staticStyle:{top:"60px"},attrs:{title:"Project assignments ",footer:null},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v("Would you like to get a project recommendation or pick a\n                        project?")]),i("a-row",{attrs:{gutter:16}},[i("a-col",{attrs:{span:12}},[i("a",{on:{click:function(e){return t.navigateTo({name:"projectlist"})}}},[i("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%"}},[i("img",{staticStyle:{"margin-left":"25%",width:"50%","margin-right":"25%"},attrs:{src:a("164b")}}),i("p",{staticStyle:{"text-align":"center"}},[t._v("Pick one by myself")])])])]),i("a-col",{attrs:{span:12}},[i("a",{on:{click:function(e){return t.navigateTo({name:"projectdetails",params:{jobId:t.job.id,candidateId:t.currentUser.id,applicationId:t.application.id}})}}},[i("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%"}},[i("img",{staticStyle:{"margin-left":"25%",width:"50%","margin-right":"25%"},attrs:{src:a("3f54")}}),i("p",{staticStyle:{"text-align":"center"}},[t._v("Get recommendation")])])])])],1),t.recentprojects?i("div",[i("p",[t._v("My Recent projects")]),t._l(t.recentprojects,function(e){return i("p",{key:e},[t.recentprojects?i("a",{on:{click:function(a){return t.navigateTo({name:"pickedprojectdetails",params:{projectId:e.id,jobId:t.job.id,candidateId:t.currentUser.id,applicationId:t.application.id}})}}},[t._v("\n                                "+t._s(e.name)+"\n                            ")]):t._e()])})],2):t._e()],1)],1)],1)],1)},s=[],n=a("75fc"),r=(a("28a5"),a("96cf"),a("3b8d")),o=a("d225"),c=a("bf80"),l=a("113c"),p=a("688c"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"100px",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[a("div",{staticStyle:{"margin-left":"1%"}},[a("a-row",[a("a-col",{attrs:{span:24}},[a("span",[a("span",{staticStyle:{color:"white","line-height":"13px","font-size":"17px","font-weight":"bold","margin-top":"15%"}},[t._v("\n                            "+t._s(t._f("capitalize")(t.currentUser.username)))]),"complete"===t.myapplicant.test_stage?a("span",{staticStyle:{float:"right"}},[a("a-button",{attrs:{type:"primary"}},[t._v("Schedule Interview")])],1):t._e()]),a("p",{staticStyle:{color:"white","font-size":"12px","font-weight":"bold","line-height":"0"}},[a("span",[t._v("\n                Job Application Stage :\n            ")]),a("a-tag",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{color:"#BA68C8"}},[t._v(t._s(t.myapplicant.stage))])],1)])],1)],1)])},u=[],h=(a("6b54"),{name:"CandidateHeader",data:function(){return{currentUserProfile:{},currentUser:{},allapplicant:null,myapplicant:null}},components:{},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,c["a"].retrieveuser(this.$route.params.candidateId,e);case 3:return this.currentUser=t.sent.data,t.next=6,c["a"].currentuser(this.$route.params.candidateId,e);case 6:return this.currentUserProfile=t.sent.data,t.next=9,p["a"].joboneapplicant(this.$route.params.candidateId,this.$route.params.jobId,e);case 9:this.allapplicant=t.sent.data,this.myapplicant=this.allapplicant[0];case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}}),f=h,g=(a("d90d"),a("2877")),v=Object(g["a"])(f,d,u,!1,null,"6ce3f816",null),m=v.exports,b=a("290c"),y=a("da05"),_=a("1226"),k=a("c1df"),x=a.n(k),j=function t(e,a,i,s,n,r,c){Object(o["a"])(this,t),this.key=e,this.title=a,this.description=i,this.company=s,this.duration=r,this.tags=c,this.location=n},w=function t(e,a,i,s,n){Object(o["a"])(this,t),this.key=e,this.title=a,this.description=i,this.demo=s,this.tags=n},S=function t(e,a,i,s,n){Object(o["a"])(this,t),this.key=e,this.title=a,this.start=i,this.end=s,this.class=n},$={name:"candidateprofile",data:function(){return{currentUserProfile:{},currentUser:{},skilltags:[],visible:!1,inputVisible:!1,inputValue:"",application:{},experienceslist:[],experiences:[],portoliolist:[],portfolio:[],job:{},recentprojects:[],events:[]}},components:{ACol:y["b"],ARow:b["a"],RecruiterSider:l["a"],CandidateHeader:m},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,i,s,n,r,o,l,d,u,h,f,g,v,m,b,y,k,$,F,I,U,A,C,P;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return x.a,e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=4,c["a"].retrieveuser(this.$route.params.candidateId,e);case 4:return this.currentUser=t.sent.data,t.next=7,c["a"].currentuser(this.$route.params.candidateId,e);case 7:return this.currentUserProfile=t.sent.data,this.skilltags=this.currentUserProfile.skills.split(","),t.next=11,c["a"].portfolio(this.$route.params.candidateId,e);case 11:return this.portfoliolist=t.sent.data,t.next=14,c["a"].experience(this.$route.params.candidateId,e);case 14:return this.experienceslist=t.sent.data,this.ApplicationId=this.$store.state.route.params.applicationId,a=this.$store.state.route.params.jobId,t.next=19,p["a"].retrieveapplication(this.ApplicationId,e);case 19:return this.application=t.sent.data,t.next=22,p["a"].specificjob(a,e);case 22:for(this.job=t.sent.data,i=0;i<this.portfoliolist.length;i++)s=this.portfoliolist[i],n=this.portfoliolist[i].title,r=this.portfoliolist[i].description,o=this.portfoliolist[i].demo_link,l=this.portfoliolist[i].tech_tags.split(","),d=new w(s,n,r,o,l),this.portfolio.push(d);for(u=0;u<this.experienceslist.length;u++)h=this.experienceslist[u],f=this.experienceslist[u].title,g=this.experienceslist[u].description,v=this.experienceslist[u].company,m=this.experienceslist[u].location,b=this.experienceslist[u].duration,y=this.experienceslist[u].tech_tags.split(","),k=new j(h,f,g,v,m,b,y),this.experiences.push(k);if(!this.$store.state.user.pk){t.next=29;break}return t.next=28,_["a"].recentprojects(this.$store.state.user.pk,e);case 28:this.recentprojects=t.sent.data;case 29:return t.next=31,p["a"].allmyjobapplicants(this.$store.state.user.pk,e);case 31:for(this.allevents=t.sent.data,$=0;$<this.allevents.length;$++)null!==this.allevents[$].interviewstatus&&(F=this.allevents[$].id,I=this.allevents[$].candidatename,U=x()(this.allevents[$].interviewstarttime).format("HH:mm"),A=x()(this.allevents[$].interviewendtime).format("HH:mm"),C=this.allevents[$].eventcolor,P=new S(F,I,U,A,C),this.events.push(P));case 33:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{techChoices:function(t,e){var a=this.selectedtech,i=e?[].concat(Object(n["a"])(a),[t]):a.filter(function(e){return e!==t});this.selectedtech=i},onChange:function(t){this.test=t},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)},showModal:function(){this.visible=!0},handleOk:function(){this.visible=!1}}},F=$,I=(a("a77c"),Object(g["a"])(F,i,s,!1,null,"e80f6abe",null));e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-5552b8d1.baf4d393.js.map