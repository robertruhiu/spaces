(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28695d9d"],{2285:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[a("CandidateSider"),a("a-layout",[a("a-layout-content",{staticStyle:{"background-color":"white"}},[a("DevHeader"),a("div",{style:{padding:"5px",background:"#fff",marginTop:"1rem"}},[a("a-row",{},[a("a-col",{attrs:{xs:{span:24,offset:1},sm:{span:24,offset:1},md:{span:24,offset:1},lg:{span:24,offset:0},xl:{span:24,offset:0}}},[a("h3",{staticStyle:{"margin-left":"1rem",color:"#1976D2","font-weight":"bold"}},[t._v("\n                            Passed quizzes will reflect on your portfolio\n                        ")])])],1),t.takenquizzes.length>0?a("div",[a("a-row",{staticStyle:{padding:"2%"},attrs:{gutter:"16"}},t._l(t.takenquizzes,function(e){return a("a-col",{key:e,attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[a("a-row",{staticClass:"ant-card actioncards"},[a("a-col",{attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticClass:"poolavatar",attrs:{src:e.quiz.subject.image}})])]),a("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[t._v("\n                                "+t._s(e.quiz.name)+"\n                                score:"+t._s(e.score)+"\n\n\n                            ")])],1)],1)}),1)],1):t._e(),a("a-row",{staticStyle:{padding:"2%"},attrs:{gutter:"16"}},t._l(t.untaken,function(e){return a("a-col",{key:e,attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[a("a",{on:{click:function(a){return t.navigateTo({name:"takequiz",params:{candidateId:t.currentUserProfile.user.id,quizId:e.id}})}}},[a("a-row",{staticClass:"ant-card actioncards"},[a("a-col",{attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticClass:"poolavatar",attrs:{src:e.subject.image}})])]),a("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[t._v("\n                                    "+t._s(e.name)+"\n\n\n                                ")])],1)],1)])}),1)],1)],1)],1)],1)},s=[],r=(a("96cf"),a("3b8d")),i=a("e63b"),c=a("bc0c"),o=a("f813"),u=a("bf80"),f={name:"QuizzesList",data:function(){return{quizzes:[],currentUserProfile:null,takenquizzes:[],untaken:[]}},components:{DevHeader:c["a"],CandidateSider:i["a"]},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,u["a"].currentuser(this.$store.state.user.pk,e);case 3:return this.currentUserProfile=t.sent.data,t.next=6,o["a"].allquizzes(e);case 6:return this.quizzes=t.sent.data,t.next=9,o["a"].taken(this.$store.state.user.pk,e);case 9:if(this.takenquizzes=t.sent.data,this.takenquizzes.length>0)for(a=0;a<this.quizzes.length;a++)for(n=0;n<this.takenquizzes.length;n++)this.quizzes[a].id!==this.takenquizzes[n].quiz.id&&this.untaken.push(this.quizzes[a]);else this.untaken=this.quizzes;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)}}},l=f,d=(a("50fa"),a("2877")),p=Object(d["a"])(l,n,s,!1,null,"ef46caac",null);e["default"]=p.exports},"50fa":function(t,e,a){"use strict";var n=a("ac3e"),s=a.n(n);s.a},ac3e:function(t,e,a){},f813:function(t,e,a){"use strict";var n=a("3f4a");e["a"]={allquizzes:function(t){return Object(n["a"])().get("allquizzes",t)},questions:function(t,e){return Object(n["a"])().get("questions/".concat(t),e)},takequiz:function(t,e,a){return Object(n["a"])().get("takequiz/".concat(t,"/").concat(e),a)},postanswer:function(t,e){return Object(n["a"])().post("postanswer",t,e)},score:function(t,e,a){return Object(n["a"])().get("score/".concat(t,"/").concat(e),a)},taken:function(t,e){return Object(n["a"])().get("taken/".concat(t),e)},updaterandomquiz:function(t,e,a){return Object(n["a"])().patch("updaterandquiz/".concat(t," "),e,a)}}}}]);
//# sourceMappingURL=chunk-28695d9d.50539fcd.js.map