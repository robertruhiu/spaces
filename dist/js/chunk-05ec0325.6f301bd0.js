(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05ec0325"],{"11f2":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[a("pageheader"),a("a-layout",{style:{backgroundColor:"#F8FAFB",marginTop:"1rem"}},[a("a-layout-content",{staticStyle:{"margin-top":"3%"}},[a("a-row",{staticStyle:{padding:"1% 1%"}},[a("a-col",{staticStyle:{},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[a("div",{staticClass:"profile",staticStyle:{"padding-bottom":"2%",margin:"3%"}},[a("a-avatar",{staticClass:"poolavatar",attrs:{shape:"square"}},[t._v("\n                            "+t._s(t.currentUserProfile.user.first_name[0].toUpperCase())+"\n                            "+t._s(t.currentUserProfile.user.last_name[0].toUpperCase())+"\n                            "),t.currentUserProfile.verified_skills?a("span",{staticStyle:{"font-size":"1rem"}},[a("a-icon",{attrs:{type:"check-circle"}})],1):t._e()]),a("div",{staticStyle:{padding:"4%"}},[a("p",[t._v("About")]),a("p",[t._v(t._s(t.currentUserProfile.about))]),a("br"),t.verified_skills.length>0?a("p",[t._v("\n                                Verified skills:\n                                "),t._l(t.verified_skills,function(e){return a("span",{key:e.id},[a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2):t._e(),t.skilltags.length>0?a("p",[t._v("\n                                Skill tags:\n                                "),t._l(t.skilltags,function(e){return a("span",{key:e.id},[a("a-tag",{staticStyle:{color:"#007BFF","margin-bottom":"1rem"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2):t._e(),a("p",[t._v("Experience :\n                                "),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                                    "+t._s(t.currentUserProfile.years)+" years\n                                ")])],1),a("p",[t._v("\n\n                                Availability :\n\n                                "),t._l(t.availabiltytags,function(e){return a("span",{key:e.id},[a("a-tag",{staticStyle:{color:"#007BFF","margin-bottom":"1rem"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2),a("p",[t._v("\n                                Salary expectation :\n                                "),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                                    $"+t._s(t.currentUserProfile.salary)+" /month\n                                ")])],1),a("p",[t._v("Location :\n                                "),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v("\n                                    "+t._s(t.currentUserProfile.country)+"\n                                ")])],1)])],1)]),a("a-col",{staticStyle:{},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:14,offset:0},xl:{span:14,offset:0}}},[a("div",[a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"bio"},[t.candidatedata?a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1):a("div",[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[t.takenquizzes.length>0?a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"codepen"}}),t._v("\n                                    Skills\n                                ")],1),a("p",[t._v("Quizzes taken by Candidate")]),t.quizload?a("div",[a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1)]):a("div",t._l(t.takenquizzes,function(e){return a("div",{key:e},[t._v("\n                                                    "+t._s(e.quiz.subject.name)+":\n                                                    "),a("a-progress",{attrs:{percent:e.score}})],1)}),0)]):t._e(),t.portfolio.length>0?a("a-tab-pane",{key:"2",attrs:{forceRender:""}},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"solution"}}),t._v("\n                                    Projects portfolio\n                                ")],1),a("div",{staticStyle:{padding:"0 2%"}},[t.portfolioload?a("div",[a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1)]):a("div",t._l(t.portfolio,function(e){return a("div",{key:e.id,staticStyle:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"2%","padding-top":"2%"}},[a("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),a("p",[t._v("\n                                                            Tools used:\n                                                            "),t._l(e.tags,function(e){return a("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                                "+t._s(e)+"\n                                                            ")])})],2),a("p",[t._v(t._s(e.description)+"\n                                                        ")]),a("a",{attrs:{href:e.demo,target:"_blank"}},[t._v("view project")])])}),0)])]):t._e(),t.experiences.length>0?a("a-tab-pane",{key:"3",attrs:{forceRender:""}},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"hourglass"}}),t._v("\n                                    Work experience\n                                ")],1),a("div",{staticStyle:{padding:"2%"}},[t.experienceload?a("div",[a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1)]):a("div",[a("a-timeline",t._l(t.experiences,function(e){return a("a-timeline-item",{key:e.id},[a("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),a("p",[a("span",[a("a-icon",{attrs:{type:"bank"}}),t._v("  "+t._s(e.company)+" "),a("a-icon",{attrs:{type:"environment"}}),t._v("  "+t._s(e.location)+" "),a("a-icon",{attrs:{type:"hourglass"}}),t._v("  "+t._s(e.duration)+"months")],1)]),a("p",[t._v("\n                                                                Technologies used:\n                                                                "),t._l(e.tags,function(e){return a("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                                    "+t._s(e)+"\n                                                                ")])})],2),a("p",[t._v(t._s(e.description))])])}),1)],1)])]):t._e()],1)],1)])])],1),t.takenquizzes.length>0?a("div",{staticStyle:{"margin-bottom":"1rem",padding:"2%"}},[a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"bio"},[a("p",{staticStyle:{"padding-top":"2%"}},[a("strong",[t._v("Quizzes taken by Candidate")])]),t._l(t.takenquizzes,function(e){return a("div",{key:e},[t._v("\n                                    "+t._s(e.quiz.subject.name)+":\n                                    "),a("a-progress",{attrs:{percent:e.score}})],1)})],2)])],1):t._e(),t.portfolio.length>0?a("div",{staticStyle:{"margin-bottom":"1rem",padding:"2%"}},[a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"bio"},[a("p",{staticStyle:{"padding-top":"2%"}},[a("strong",[t._v("Projects portfolio")])]),a("div",t._l(t.portfolio,function(e){return a("div",{key:e.id,staticStyle:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"2%","padding-top":"2%"}},[a("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),a("p",[t._v("\n                                            Tools used:\n                                            "),t._l(e.tags,function(e){return a("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                "+t._s(e)+"\n                                            ")])})],2),a("p",[t._v(t._s(e.description)+"\n                                        ")]),a("a",{attrs:{href:e.demo,target:"_blank"}},[t._v("view project")])])}),0)])])],1):t._e(),t.experiences.length>0?a("div",{staticStyle:{"margin-bottom":"1rem",padding:"2%"}},[a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"bio"},[a("p",{staticStyle:{"padding-top":"2%"}},[a("strong",[t._v("Work experience")])]),a("div",[a("a-timeline",t._l(t.experiences,function(e){return a("a-timeline-item",{key:e.id},[a("p",{staticStyle:{"font-weight":"700"}},[t._v(t._s(e.title))]),a("p",[a("span",[a("a-icon",{attrs:{type:"bank"}}),t._v("  "+t._s(e.company)+" "),a("a-icon",{attrs:{type:"environment"}}),t._v("  "+t._s(e.location)+" "),a("a-icon",{attrs:{type:"hourglass"}}),t._v("  "+t._s(e.duration)+"months")],1)]),a("p",[t._v("\n                                                Technologies used:\n                                                "),t._l(e.tags,function(e){return a("a-tag",{key:e,attrs:{color:"blue"}},[t._v("\n                                                    "+t._s(e)+"\n                                                ")])})],2),a("p",[t._v(t._s(e.description))])])}),1)],1)])])],1):t._e()]),a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},["recruiter"===this.$store.state.usertype?a("div",[a("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:4,offset:0},xl:{span:4,offset:0}}},[t.dataload?a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1):a("div",[t.pickedprofiles.length>0?a("div",{staticClass:"profile",staticStyle:{"overflow-y":"scroll",height:"17rem"}},[a("div",{staticStyle:{padding:"7%"}},[a("p",[t._v("Added Candidates")]),a("p",[a("a-icon",{attrs:{type:"check-circle",theme:"twoTone"}}),t._v("\n                                            indicates verified candidate\n                                        ")],1),t._l(t.pickedprofiles,function(e){return a("div",{key:e,staticStyle:{"border-bottom":"1px solid #e8e8e8","padding-top":"1rem"}},[a("p",[t._v(t._s(e.name)+" "),e.verified?a("span",[a("a-icon",{attrs:{type:"check-circle",theme:"twoTone"}})],1):t._e(),a("span",{staticStyle:{float:"right"}},[a("a",{on:{click:function(i){return t.remove(e.id)}}},[a("a-icon",{attrs:{type:"close-circle",theme:"twoTone"}})],1)])])])}),!1===t.paidbundleexists?a("span",[a("p",{staticStyle:{"padding-top":"1rem"}},[t._v("Total:"+t._s(t.amount))])]):t._e(),t.waiting?a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1):t._e(),!1===t.conditions?a("p",{staticStyle:{"font-size":"12px"}},[a("a-checkbox",{on:{change:t.Check},model:{value:t.conditions,callback:function(e){t.conditions=e},expression:"conditions"}}),a("a",{on:{click:t.TermsModal}},[t._v(" I agree to the terms and conditions")])],1):t._e(),a("p",{staticStyle:{"font-size":"12px"}},[a("router-link",{attrs:{to:"/prices"}},[t._v("Bundle prices")])],1),t.paidbundleexists?a("div",[a("p",{staticStyle:{"font-size":"12px"}},[t._v("\n                                                existing bundle. bundle limit\n                                                "+t._s(t.paiddevs.length)+"/"+t._s(t.bundlelimit)+"\n                                            ")]),t.exceeded?a("p",{staticStyle:{"font-size":"12px",color:"red"}},[t._v(t._s(t.exceeded))]):t._e(),a("div",{staticStyle:{"text-align":"center"}},[a("a-button",{attrs:{type:"primary"},on:{click:t.addtopaid}},[t._v("Checkout")])],1)]):a("div",[t.conditions?a("div",{staticStyle:{"text-align":"center"}},[a("Rave",{attrs:{"style-class":"paymentbtn",email:t.email,amount:t.amount,reference:t.reference,"rave-key":t.raveKey,callback:t.callback,close:t.close,currency:t.currency,country:t.country,customer_firstname:t.customer_firstname,customer_lastname:t.customer_lastname,custom_title:t.custom.title,custom_description:t.custom.description,custom_logo:t.custom.logo,redirect_url:t.redirectUrl,payment_plan:t.paymentPlan,subaccounts:t.subaccounts,payment_method:t.paymentMethod}})],1):a("div",{staticStyle:{"text-align":"center"}},[a("a-button",{attrs:{type:"primary",disabled:""}},[t._v("Checkout")])],1)])],2)]):t._e(),!1===t.managecandidate?a("div",[a("div",{staticClass:"profile"},[a("div",{staticStyle:{padding:"4%",margin:"3%","padding-bottom":"7%"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"50%","padding-bottom":"2rem"},attrs:{src:i("b31e")}})]),a("p",{staticStyle:{"text-align":"center"}},[t._v("I like this profile")]),a("div",{staticStyle:{"text-align":"center"}},[!1===t.paidprofile?a("div",[t.addcart?a("div",[a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1)]):a("div",[!1===t.picked?a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.pickcandidate(t.currentUserProfile.id)}}},[t._v("\n                                                            Add to my Candidates\n                                                        ")]):t._e()],1)]):t._e()])])])]):t._e(),t._l(t.pickeddevpaid,function(e){return a("div",{key:e},[e.id===t.currentUserProfile.id?a("div",[a("div",{staticClass:"profile"},[a("div",{staticStyle:{padding:"4%",margin:"3%","padding-bottom":"7%"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"50%","padding-bottom":"2rem"},attrs:{src:i("b31e")}})]),a("p",{staticStyle:{"text-align":"center"}},[t._v("I like this profile")]),a("div",{staticStyle:{"text-align":"center"}},[a("div",[a("a-button",{staticStyle:{"margin-left":"1rem"},attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"mycandidates"})}}},[t._v("\n                                                            manage candidate\n                                                        ")])],1)])])])]):t._e()])})],2)])],1):t._e()])],1),a("a-modal",{attrs:{title:"Terms and Conditions"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[a("template",{slot:"footer"},[!1===t.conditions?a("a-button",{attrs:{type:"primary"},on:{click:t.Agree}},[t._v("\n                        I Agree\n                    ")]):a("a-button",{attrs:{type:"danger"},on:{click:t.Agree}},[t._v("\n                        I Disagree\n                    ")])],1),a("tc")],2)],1)],1)],1)},s=[],n=(i("6b54"),i("ac6a"),i("c5f6"),i("28a5"),i("96cf"),i("3b8d")),r=i("d225"),o=i("bf80"),c=i("96c7"),l=i("290c"),d=i("da05"),p=i("688c"),u=i("f813"),h=i("ebba"),m=i("8808"),f=i("20f9"),v=i("3e22"),g=function t(e,i,a,s,n,o,c){Object(r["a"])(this,t),this.key=e,this.title=i,this.description=a,this.company=s,this.duration=o,this.tags=c,this.location=n},k=function t(e,i,a,s,n){Object(r["a"])(this,t),this.key=e,this.title=i,this.description=a,this.demo=s,this.tags=n},y=function t(e,i,a){Object(r["a"])(this,t),this.id=e,this.name=i,this.verified=a},b={name:"candidatetalentprofile",data:function(){return{currentUserProfile:{},skilltags:[],verified_skills:[],visible:!1,inputVisible:!1,inputValue:"",experienceslist:null,experiences:[],portoliolist:null,portfolio:[],picked:!1,pickeddevs:[],takenquizzes:[],cart:[],cart_items:[],mycart:null,carts:[],devs:[],pickedprofiles:[],amount:0,raveKey:"FLWPUBK-1007dc4eb48e0d1e0b6bf86d083ba020-X",email:"",currency:"USD",country:"GH",customer_firstname:"",customer_lastname:"",custom:{title:"Codeln",description:"Payment for Codeln Developers",logo:"https://www.codeln.com/img/logobg.f302741d.svg"},paymentPlan:"",paymentMethod:"",subaccounts:{id:"RS_73954F005E68DADF3483197D5CF13E1E",transaction_split_ratio:"",transaction_charge_type:"",transaction_charge:""},pickeddevpaid:[],paidprofile:!1,paiddevs:[],paidbundleexists:!1,bundlelimit:0,addcart:!1,portfolioload:!0,experienceload:!0,quizload:!0,managecandidate:!1,waiting:!1,dataload:!1,candidatedata:!1,terms:!1,conditions:!1,availabiltytags:[],exceeded:""}},components:{ACol:d["b"],ARow:l["a"],Pageheader:c["a"],showAt:m["showAt"],hideAt:m["hideAt"],Rave:f["a"],tc:v["a"]},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s,n,r,c,l,d,m,f=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=45;break}return this.customer_firstname=this.$store.state.user.first_name,this.customer_lastname=this.$store.state.user.last_name,this.email=this.$store.state.user.email,i=this.$route.params.candidateProfileID,t.next=8,o["a"].currentuser(this.$route.params.candidateProfileID,e);case 8:if(this.currentUserProfile=t.sent.data,this.currentUserProfile.skills&&(this.skilltags=this.currentUserProfile.skills.split(",")),this.availabiltytags=this.currentUserProfile.availabilty.split(","),this.currentUserProfile.verified_skills&&(this.verified_skills=this.currentUserProfile.verified_skills.split(",")),this.candidatedata=!0,u["a"].taken(this.currentUserProfile.id,e).then(function(t){f.quizload=!1,f.takenquizzes=t.data}).catch(function(t){return t}),o["a"].portfolio(this.currentUserProfile.id,e).then(function(t){f.portfolioload=!1,f.portfoliolist=t.data;for(var e=0;e<f.portfoliolist.length;e++){var i=f.portfoliolist[e],a=f.portfoliolist[e].title,s=f.portfoliolist[e].description,n=f.portfoliolist[e].demo_link,r=[];f.portfoliolist[e].tech_tags&&(r=f.portfoliolist[e].tech_tags.split(","));var o=new k(i,a,s,n,r);f.portfolio.push(o)}}).catch(function(t){return t}),o["a"].experience(this.currentUserProfile.id,e).then(function(t){f.experienceload=!1,f.experienceslist=t.data;for(var e=0;e<f.experienceslist.length;e++){var i=f.experienceslist[e],a=f.experienceslist[e].title,s=f.experienceslist[e].description,n=f.experienceslist[e].company,r=f.experienceslist[e].location,o=f.experienceslist[e].duration,c=[];f.portfoliolist[e].tech_tags&&(c=f.experienceslist[e].tech_tags.split(","));var l=new g(i,a,s,n,r,o,c);f.experiences.push(l),f.candidatedata=!1}f.candidatedata=!1}).catch(function(t){return t}),this.candidatedata=!1,"recruiter"!==this.$store.state.usertype){t.next=45;break}return this.dataload=!0,t.next=21,h["a"].cartlist(this.$store.state.user.pk,e);case 21:if(this.carts=t.sent.data,!(this.carts.length>0)){t.next=31;break}this.mycart=this.carts[0],this.conditions=this.mycart.conditions,this.mycart.devspending&&(this.pickeddevs=this.mycart.devspending.split(",")),this.mycart.devspaid&&(this.paiddevs=this.mycart.devspaid.split(",")),this.mycart.amount&&(this.paidbundleexists=!0,100===this.mycart.amount?this.bundlelimit=4:200===this.mycart.amount?this.bundlelimit=10:400<=this.mycart.amount>200&&(this.bundlelimit=20)),this.paiddevs.length>this.bundlelimit&&(this.exceeded="you have exceeded your current bundle limit.remove some picked candidates"),t.next=34;break;case 31:return t.next=33,h["a"].cartcreate({user:this.$store.state.user.pk},e);case 33:this.mycart=t.sent.data;case 34:for(a=0;a<this.pickeddevs.length;a++)this.pickeddevs[a]===this.$route.params.candidateProfileID&&(this.managecandidate=!0);return t.next=37,o["a"].devs();case 37:for(this.devs=t.sent.data,s=0;s<this.devs.length;s++)if(this.pickeddevs.length>0)for(n=0;n<this.pickeddevs.length;n++)this.devs[s].id===Number(this.pickeddevs[n])&&(r=this.devs[s].id,c=this.devs[s].user.first_name,l=!1,this.devs[s].verified_skills&&(l=!0),d=new y(r,c,l),this.pickedprofiles.push(d)),this.$route.params.candidateProfileID===Number(this.pickeddevs[n])&&(this.managecandidate=!0);this.dataload=!1,m=!1,this.pickeddevs.forEach(function(t){Number(t)===i&&(m=!0)}),this.picked=m,this.pickeddevs.length<=4?this.amount=100:this.pickeddevs.length<=10?this.amount=200:this.amount=500,p["a"].mydevelopers(this.$store.state.user.pk,e).then(function(t){if(0!==t.data.length){for(var e=0;e<t.data.length;e++)f.pickeddevpaid.push(t.data[e].developer);for(var i=0;i<f.pickeddevpaid.length;i++)f.$route.params.candidateProfileID===f.pickeddevpaid[i].id&&(f.paidprofile=!0,f.managecandidate=!0)}}).catch();case 45:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{reference:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<10;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}},methods:{navigateTo:function(t){this.$router.push(t)},pickcandidate:function(){var t=this;this.addcart=!0;var e={headers:{Authorization:"JWT "+this.$store.state.token}};this.pickeddevs.push(this.currentUserProfile.id.toString());var i=this.pickeddevs.join(",");h["a"].cartitemadd(this.mycart.id,{devspending:i},e).then(function(e){t.picked=!0;var i=t.currentUserProfile.id,a=t.currentUserProfile.user.first_name,s=!1;t.currentUserProfile.verified_skills&&(s=!0);var n=new y(i,a,s);t.pickedprofiles.push(n),t.addcart=!1,t.managecandidate=!0,t.pickeddevs=e.data.devspending.split(","),t.pickeddevs.length<=4?t.amount=100:t.pickeddevs.length<=10?t.amount=200:t.amount=500}).catch(function(e){return t.addcart=!1,t.picked=!1,e})},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},refresh:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(e=0;e<this.devs.length;e++)if(this.pickeddevs.length>0)for(i=0;i<this.pickeddevs.length;i++)this.devs[e].id===Number(this.pickeddevs[i])&&(a=this.devs[e].id,s=this.devs[e].user.first_name,n=!1,this.devs[e].verified_skills&&(n=!0),r=new y(a,s,n),this.pickedprofiles.push(r));this.pickeddevs.length<=4?this.amount=100:this.pickeddevs.length<=10?this.amount=200:this.amount=500,this.waiting=!1;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),remove:function(t){var e=this,i={headers:{Authorization:"JWT "+this.$store.state.token}};this.waiting=!0;var a=this;t===this.currentUserProfile.id&&(this.picked=!1);var s=this.pickeddevs.indexOf(t.toString());if(s>-1){this.pickeddevs.splice(s,1);var n=this.pickeddevs.join(",");h["a"].cartitemadd(this.mycart.id,{devspending:n},i).then(function(t){e.pickedprofiles=[],e.managecandidate=!1,a.refresh()}).catch(function(t){return t})}},addtopaid:function(){var t=this,e={headers:{Authorization:"JWT "+this.$store.state.token}};if(this.paiddevs=this.paiddevs.concat(this.pickeddevs),this.paiddevs.length>this.bundlelimit)this.exceeded="you have exceeded your current bundle limit.remove some picked candidates";else{this.pickeddevs=[];var i=this.paiddevs.join(","),a=this.pickeddevs.join(",");this.bundlelimit===this.paiddevs.length?h["a"].cartitemadd(this.mycart.id,{devspending:a,devspaid:i,checked_out:!0},e).then(function(t){return t}):h["a"].cartitemadd(this.mycart.id,{devspending:a,devspaid:i},e).then(function(t){return t}),this.pickeddevs=[];for(var s=0;s<this.pickedprofiles.length;s++){var n={owner:this.$store.state.user.pk,developer:this.pickedprofiles[s].id,paid:!0,stage:"active"};p["a"].pickdeveloper(n,e).then(function(e){return t.$router.push({name:"mycandidates"}),e}).catch(function(t){return t})}}},callback:function(t){if(t.success){var e={headers:{Authorization:"JWT "+this.$store.state.token}};this.paiddevs=this.paiddevs.concat(this.pickeddevs),this.pickeddevs=[];var i=this.paiddevs.join(","),a=this.pickeddevs.join(",");h["a"].cartitemadd(this.mycart.id,{devspending:a,devspaid:i,amount:t.tx.amount,transaction_id:t.tx.txRef,type:"talent",conditions:!0},e).then(function(t){return t}),this.pickeddevs=[];for(var s=0;s<this.pickedprofiles.length;s++){var n={owner:this.$store.state.user.pk,developer:this.pickedprofiles[s].id,paid:!0,stage:"active"};p["a"].pickdeveloper(n,e).then(function(t){return t}).catch(function(t){return t})}if(100===t.tx.amount){var r=4;this.paiddevs===r&&h["a"].cartitemadd(this.mycart.id,{checked_out:!0},e).then().catch()}else if(200===t.tx.amount){var o=10;this.paiddevs===o&&h["a"].cartitemadd(this.mycart.id,{checked_out:!0},e).then().catch()}else if(500<=t.tx.amount>200){var c=33;this.paiddevs===c&&h["a"].cartitemadd(this.mycart.id,{checked_out:!0},e).then().catch()}this.$router.push({name:"mycandidates"})}},close:function(){console.log("Payment closed")},TermsModal:function(){this.terms=!0},Agree:function(){!0===this.conditions?this.conditions=!1:this.conditions=!0,this.terms=!1},Check:function(t){this.conditions=t.target.checked}}},_=b,x=(i("8cdd"),i("2877")),S=Object(x["a"])(_,a,s,!1,null,"3efe70c0",null);e["default"]=S.exports},"207b":function(t,e,i){},"5c8c":function(t,e,i){},"688c":function(t,e,i){"use strict";var a=i("3f4a");e["a"]={pickdeveloper:function(t,e){return Object(a["a"])().post("marketplace/pickdev ",t,e)},mydevelopers:function(t,e){return Object(a["a"])().get("marketplace/mydevs/".concat(t," "),e)},mydeveloperssimple:function(t,e){return Object(a["a"])().get("marketplace/mydevssimple/".concat(t," "),e)},allmyjobapplicants:function(t,e){return Object(a["a"])().get("marketplace/myapplicants/".concat(t," "),e)},alljobs:function(){return Object(a["a"])().get("marketplace/alljobs")},myjobs:function(t,e){return Object(a["a"])().get("marketplace/myjobs/".concat(t),e)},myjobssliced:function(t,e){return Object(a["a"])().get("marketplace/myjobssliced/".concat(t),e)},applicants:function(t,e){return Object(a["a"])().get("marketplace/jobapplicants/".concat(t),e)},applicantssliced:function(t,e){return Object(a["a"])().get("marketplace/jobapplicantssliced/".concat(t),e)},specificjob:function(t,e){return Object(a["a"])().get("marketplace/specificjob/".concat(t),e)},specificjobapplicants:function(t,e){return Object(a["a"])().get("marketplace/specificjobapplicants/".concat(t),e)},joboneapplicant:function(t,e,i){return Object(a["a"])().get("marketplace/myjobapplication/".concat(t,"/").concat(e),i)},jobdetails:function(t,e){return Object(a["a"])().get("marketplace/jobdetails/".concat(t),e)},candidatejobs:function(t,e){return Object(a["a"])().get("marketplace/candidatejobs/".concat(t),e)},updatejob:function(t,e,i){return Object(a["a"])().patch("marketplace/updatejob/".concat(t," "),e,i)},pickreject:function(t,e,i){return Object(a["a"])().patch("marketplace/pickreject/".concat(t," "),e,i)},deletejobapplication:function(t,e){return Object(a["a"])().delete("marketplace/pickreject/".concat(t," "),e)},retrieveapplication:function(t,e){return Object(a["a"])().get("marketplace/applicationprofile/".concat(t," "),e)},candidatemanager:function(t,e,i){return Object(a["a"])().patch("marketplace/candidateinfoupdater/".concat(t," "),e,i)},retrievecandidate:function(t,e){return Object(a["a"])().get("marketplace/candidateinfo/".concat(t," "),e)},unpublishjob:function(t,e,i){return Object(a["a"])().patch("marketplace/unpublishjob/".concat(t," "),e,i)},createjob:function(t,e){return Object(a["a"])().post("marketplace/createjob",t,e)},pickrecommended:function(t,e){return Object(a["a"])().post("marketplace/pickrecommended",t,e)},applyjob:function(t,e){return Object(a["a"])().post("marketplace/applyjob",t,e)},pickedapplications:function(t,e){return Object(a["a"])().get("marketplace/pickedapplications/".concat(t," "),e)},jobmanagerview:function(t,e){return Object(a["a"])().get("marketplace/jobmanagerview/".concat(t," "),e)},talentpickedmanagerview:function(t,e){return Object(a["a"])().get("marketplace/talentpickedmanagerview/".concat(t," "),e)},newjobemail:function(t,e){return Object(a["a"])().get("marketplace/newjobemail/".concat(t," "),e)},newapplicationemail:function(t,e){return Object(a["a"])().get("marketplace/newjobapplication/".concat(t," "),e)},candidatemanagerdelete:function(t,e){return Object(a["a"])().delete("marketplace/candidateinfoupdater/".concat(t," "),e)}}},"8ad0":function(t,e,i){"use strict";var a=i("5c8c"),s=i.n(a);s.a},"8cdd":function(t,e,i){"use strict";var a=i("207b"),s=i.n(a);s.a},"96c7":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:i("b8fb")}})])],1),a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},["recruiter"===t.$store.state.usertype?a("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/post/true"}},[t._v("Post a job for free")]):"developer"===t.$store.state.usertype?a("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("Post a job for free")]):a("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("Post a job for free")]),a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/prices"}},[t._v("Pricing")]),a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent pool")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                Login\n            ")]),t.$store.state.isUserLoggedIn?t._e():a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n            ")]),a("a",[t.$store.state.isUserLoggedIn?a("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                ")]):t._e()],1)],1)]),a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticStyle:{float:"right"}},[a("Menusider")],1)])],1)},s=[],n=(i("96cf"),i("3b8d")),r=i("8808"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[i("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[i("a-icon",{attrs:{type:"menu-fold"}})],1),i("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[i("a-menu-item",{key:"0"},["recruiter"===t.$store.state.usertype?i("router-link",{attrs:{to:"/post/true"}},[i("span",[t._v("Post a job for free")])]):"developer"===t.$store.state.usertype?i("router-link",{attrs:{to:"/developer"}},[i("span",[t._v("Post a job for free")])]):i("router-link",{attrs:{to:"/login"}},[i("span",[t._v("Post a job for free")])]),i("router-link",{attrs:{to:"/prices"}},[i("span",[t._v("Pricing")])]),i("router-link",{attrs:{to:"/talent"}},[i("span",[t._v("Talent pool")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?i("a-menu-item",{key:"1"},[i("router-link",{attrs:{to:"/recruiter"}},[i("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?i("a-menu-item",{key:"6"},[i("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?i("a-menu-item",{key:"2"},[i("router-link",{attrs:{to:"/developer"}},[i("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?i("a-menu-item",{key:"7"},[i("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():i("a-menu-item",{key:"3"},[i("router-link",{attrs:{to:"/login"}},[i("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():i("a-menu-item",{key:"4"},[i("router-link",{attrs:{to:"/register"}},[i("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?i("a-menu-item",{key:"5"},[i("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},c=[],l=i("bf80"),d={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=5;break}return t.next=4,l["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},p=d,u=i("2877"),h=Object(u["a"])(p,o,c,!1,null,"0473a9d2",null),m=h.exports,f={name:"Header",components:{hideAt:r["hideAt"],showAt:r["showAt"],Menusider:m},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user){t.next=5;break}return t.next=4,l["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},v=f,g=(i("8ad0"),Object(u["a"])(v,a,s,!1,null,"5ff750a6",null));e["a"]=g.exports},ac6a:function(t,e,i){for(var a=i("cadf"),s=i("0d58"),n=i("2aba"),r=i("7726"),o=i("32e9"),c=i("84f2"),l=i("2b4c"),d=l("iterator"),p=l("toStringTag"),u=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(h),f=0;f<m.length;f++){var v,g=m[f],k=h[g],y=r[g],b=y&&y.prototype;if(b&&(b[d]||o(b,d,u),b[p]||o(b,p,g),c[g]=u,k))for(v in a)b[v]||n(b,v,a[v],!0)}},b31e:function(t,e,i){t.exports=i.p+"img/profile.47e0650b.png"},d225:function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",function(){return a})},f813:function(t,e,i){"use strict";var a=i("3f4a");e["a"]={allquizzes:function(t){return Object(a["a"])().get("allquizzes",t)},questions:function(t,e){return Object(a["a"])().get("questions/".concat(t),e)},takequiz:function(t,e,i){return Object(a["a"])().get("takequiz/".concat(t,"/").concat(e),i)},postanswer:function(t,e){return Object(a["a"])().post("postanswer",t,e)},score:function(t,e,i){return Object(a["a"])().get("score/".concat(t,"/").concat(e),i)},taken:function(t,e){return Object(a["a"])().get("taken/".concat(t),e)},updaterandomquiz:function(t,e,i){return Object(a["a"])().patch("updaterandquiz/".concat(t," "),e,i)}}}}]);
//# sourceMappingURL=chunk-05ec0325.6f301bd0.js.map