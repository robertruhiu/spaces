(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b64f3180"],{"02f4":function(t,e,i){var r=i("4588"),o=i("be13");t.exports=function(t){return function(e,i){var s,n,a=String(o(e)),c=r(i),l=a.length;return c<0||c>=l?t?"":void 0:(s=a.charCodeAt(c),s<55296||s>56319||c+1===l||(n=a.charCodeAt(c+1))<56320||n>57343?t?a.charAt(c):s:t?a.slice(c,c+2):n-56320+(s-55296<<10)+65536)}}},"0379":function(t,e,i){},"0390":function(t,e,i){"use strict";var r=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?r(t,e).length:1)}},"0bfb":function(t,e,i){"use strict";var r=i("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0c5f":function(t,e,i){"use strict";var r=i("0379"),o=i.n(r);o.a},"214f":function(t,e,i){"use strict";i("b0c5");var r=i("2aba"),o=i("32e9"),s=i("79e5"),n=i("be13"),a=i("2b4c"),c=i("520a"),l=a("species"),p=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var d=a(t),f=!s((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=f?!s((function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[l]=function(){return i}),i[d](""),!e})):void 0;if(!f||!h||"replace"===t&&!p||"split"===t&&!u){var m=/./[d],g=i(n,d,""[t],(function(t,e,i,r,o){return e.exec===c?f&&!o?{done:!0,value:m.call(e,i,r)}:{done:!0,value:t.call(i,e,r)}:{done:!1}})),v=g[0],j=g[1];r(String.prototype,t,v),o(RegExp.prototype,d,2==e?function(t,e){return j.call(t,this,e)}:function(t){return j.call(t,this)})}}},2230:function(t,e,i){"use strict";var r=i("c562"),o=i.n(r);o.a},"28a5":function(t,e,i){"use strict";var r=i("aae3"),o=i("cb7c"),s=i("ebd6"),n=i("0390"),a=i("9def"),c=i("5f1b"),l=i("520a"),p=i("79e5"),u=Math.min,d=[].push,f="split",h="length",m="lastIndex",g=4294967295,v=!p((function(){RegExp(g,"y")}));i("214f")("split",2,(function(t,e,i,p){var j;return j="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!r(t))return i.call(o,t,e);var s,n,a,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,f=void 0===e?g:e>>>0,v=new RegExp(t.source,p+"g");while(s=l.call(v,o)){if(n=v[m],n>u&&(c.push(o.slice(u,s.index)),s[h]>1&&s.index<o[h]&&d.apply(c,s.slice(1)),a=s[0][h],u=n,c[h]>=f))break;v[m]===s.index&&v[m]++}return u===o[h]?!a&&v.test("")||c.push(""):c.push(o.slice(u)),c[h]>f?c.slice(0,f):c}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,r){var o=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,o,r):j.call(String(o),i,r)},function(t,e){var r=p(j,t,this,e,j!==i);if(r.done)return r.value;var l=o(t),d=String(this),f=s(l,RegExp),h=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),y=new f(v?l:"^(?:"+l.source+")",m),k=void 0===e?g:e>>>0;if(0===k)return[];if(0===d.length)return null===c(y,d)?[d]:[];var b=0,_=0,x=[];while(_<d.length){y.lastIndex=v?_:0;var w,S=c(y,v?d:d.slice(_));if(null===S||(w=u(a(y.lastIndex+(v?0:_)),d.length))===b)_=n(d,_,h);else{if(x.push(d.slice(b,_)),x.length===k)return x;for(var q=1;q<=S.length-1;q++)if(x.push(S[q]),x.length===k)return x;_=b=w}}return x.push(d.slice(b)),x}]}))},"2fdb":function(t,e,i){"use strict";var r=i("5ca1"),o=i("d2c8"),s="includes";r(r.P+r.F*i("5147")(s),"String",{includes:function(t){return!!~o(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3c79":function(t,e,i){t.exports=i.p+"img/sdg4.54fab2e2.png"},5147:function(t,e,i){var r=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},"520a":function(t,e,i){"use strict";var r=i("0bfb"),o=RegExp.prototype.exec,s=String.prototype.replace,n=o,a="lastIndex",c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[a]||0!==e[a]}(),l=void 0!==/()??/.exec("")[1],p=c||l;p&&(n=function(t){var e,i,n,p,u=this;return l&&(i=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),c&&(e=u[a]),n=o.call(u,t),c&&n&&(u[a]=u.global?n.index+n[0].length:e),l&&n&&n.length>1&&s.call(n[0],i,(function(){for(p=1;p<arguments.length-2;p++)void 0===arguments[p]&&(n[p]=void 0)})),n}),t.exports=n},"5f1b":function(t,e,i){"use strict";var r=i("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var s=i.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},6762:function(t,e,i){"use strict";var r=i("5ca1"),o=i("c366")(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},a93c:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[i("CandidateSider"),i("a-layout",[i("a-layout-content",{staticStyle:{"background-color":"white"}},[i("BridgeHomeHeader"),i("div",{style:{padding:"3% 2%",background:"#fff",marginTop:"0"}},[t.loading?i("div",{staticStyle:{"text-align":"center"}},[i("div",[i("a-spin")],1)]):i("div",[t.portfolio.length>0?i("div",[i("a-row",{attrs:{gutter:16}},t._l(t.portfolio,(function(e){return i("a-col",{key:e,staticStyle:{"margin-bottom":"1rem"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[i("a-row",{staticStyle:{"box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"100%"}},[i("a-col",{staticStyle:{height:"100%",padding:"5% 2%"},attrs:{span:"4"}},[i("div",{staticClass:"actioncards"},[e.likestate?i("div",[i("div",{staticStyle:{"text-align":"center","margin-bottom":"0.2rem"}},[i("a-button",{attrs:{icon:"caret-up",disabled:""}})],1)]):i("div",[i("div",{staticStyle:{"text-align":"center","margin-bottom":"0.2rem"}},[i("a-button",{attrs:{type:"primary",icon:"caret-up"},on:{click:function(i){return t.like(e.key)}}})],1)]),i("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.likescount))]),e.dislikestate?i("div",[i("div",{staticStyle:{"text-align":"center","margin-bottom":"0.2rem"}},[i("a-button",{attrs:{icon:"caret-down",disabled:""}})],1)]):i("div",[i("div",{staticStyle:{"text-align":"center","margin-bottom":"0.2rem"}},[i("a-button",{attrs:{icon:"caret-down"},on:{click:function(i){return t.dislike(e.key)}}})],1)])])]),i("a-col",{staticStyle:{padding:"2%"},attrs:{span:"20"}},[i("p",[t._v("\n                                            Project Title: "+t._s(e.title)+"\n                                        ")]),i("p",[t._v("Description :\n                                            "+t._s(t._f("truncate")(e.project.description,100))+"\n                                        ")]),i("p",[t._v("Tech used:\n                                            "),t._l(e.tags,(function(e){return i("span",{key:e.id},[i("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)}))],2),i("a-button",{attrs:{type:"primary",size:"small",href:e.demo,target:"_blank"}},[t._v("View Demo\n                                        ")]),i("p",[i("a",{key:"submit",attrs:{type:"primary"},on:{click:function(i){return t.ProjectModal(e.project)}}},[t._v("\n                                                view project implimented\n                                            ")])])],1)],1)],1)})),1)],1):i("div",[i("a-empty")],1)]),i("a-modal",{staticStyle:{top:"10px"},attrs:{title:"Project",footer:null,width:"1000px"},model:{value:t.projectmodal,callback:function(e){t.projectmodal=e},expression:"projectmodal"}},[i("div",[i("div",[i("a-row",{attrs:{gutter:"8"}},[i("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:14,offset:0},xl:{span:14,offset:0}}},[i("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[i("div",[!1===t.project.hasvideo?i("a-carousel",{staticStyle:{border:"1px solid #e8e8e8"},attrs:{autoplay:""}},[t.project.projectimage1?i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage1}})]):t._e(),t.project.projectimage2?i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage2}})]):t._e(),t.project.projectimage3?i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage3}})]):t._e(),t.project.projectimage4?i("div",[i("img",{attrs:{src:t.project.projectimage4}})]):t._e(),t.project.projectimage5?i("div",[i("img",{attrs:{src:t.project.projectimage5}})]):t._e(),t.project.projectimage6?i("div",[i("img",{attrs:{src:t.project.projectimage6}})]):t._e(),t.project.projectimage7?i("div",[i("img",{attrs:{src:t.project.projectimage7}})]):t._e(),t.project.projectimage8?i("div",[i("img",{attrs:{src:t.project.projectimage8}})]):t._e(),t.project.projectimage9?i("div",[i("img",{attrs:{src:t.project.projectimage9}})]):t._e(),t.project.projectimage10?i("div",[i("img",{attrs:{src:t.project.projectimage10}})]):t._e()]):t._e(),t.project.hasvideo?i("div",[i("youtube",{attrs:{"video-id":t.project.projectimage2,width:250,"player-vars":t.playerVars}})],1):t._e()],1)]),i("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[i("div",[!1===t.project.hasvideo?i("a-carousel",{staticStyle:{border:"1px solid #e8e8e8"},attrs:{autoplay:""}},[t.project.projectimage1?i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage1}})]):t._e(),t.project.projectimage2?i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage2}})]):t._e(),t.project.projectimage3?i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage3}})]):t._e(),t.project.projectimage4?i("div",[i("img",{attrs:{src:t.project.projectimage4}})]):t._e(),t.project.projectimage5?i("div",[i("img",{attrs:{src:t.project.projectimage5}})]):t._e(),t.project.projectimage6?i("div",[i("img",{attrs:{src:t.project.projectimage6}})]):t._e(),t.project.projectimage7?i("div",[i("img",{attrs:{src:t.project.projectimage7}})]):t._e(),t.project.projectimage8?i("div",[i("img",{attrs:{src:t.project.projectimage8}})]):t._e(),t.project.projectimage9?i("div",[i("img",{attrs:{src:t.project.projectimage9}})]):t._e(),t.project.projectimage10?i("div",[i("img",{attrs:{src:t.project.projectimage10}})]):t._e()]):t._e(),t.project.hasvideo?i("div",[i("youtube",{attrs:{"video-id":t.project.projectimage2,width:"550","player-vars":t.playerVars}})],1):t._e()],1)]),i("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%","margin-top":"2%"}},[i("h4",[i("strong",[t._v("Project name:")]),t._v(" "+t._s(t.project.name))]),i("p",[t._v(t._s(t.project.description))])])],1),i("a-col",{staticStyle:{padding:"0 1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:10,offset:0},xl:{span:10,offset:0}}},[i("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%"}},[i("div",[i("p",{staticStyle:{"margin-left":"5%"}},[i("strong",[t._v("Requirements")])]),i("ol",[t.project.requirement1?i("li",[t._v(t._s(t.project.requirement1))]):t._e(),t.project.requirement2?i("li",[t._v(t._s(t.project.requirement2))]):t._e(),t.project.requirement3?i("li",[t._v(t._s(t.project.requirement3))]):t._e(),t.project.requirement4?i("li",[t._v(t._s(t.project.requirement4))]):t._e(),t.project.requirement5?i("li",[t._v(t._s(t.project.requirement5))]):t._e(),t.project.requirement6?i("li",[t._v(t._s(t.project.requirement6))]):t._e(),t.project.requirement7?i("li",[t._v(t._s(t.project.requirement7))]):t._e(),t.project.requirement8?i("li",[t._v(t._s(t.project.requirement8))]):t._e(),t.project.requirement9?i("li",[t._v(t._s(t.project.requirement9))]):t._e(),t.project.requirement10?i("li",[t._v(t._s(t.project.requirement10))]):t._e()])])])])],1)],1)])])],1)],1)],1)],1)},o=[],s=(i("6762"),i("2fdb"),i("28a5"),i("96cf"),i("3b8d")),n=i("d225"),a=i("bf80"),c=i("2b0e"),l=i("e63b"),p=i("d557"),u=i("8808"),d=function t(e,i,r,o,s,a,c,l,p,u,d,f){Object(n["a"])(this,t),this.key=e,this.title=i,this.description=r,this.demo=o,this.tags=s,this.repo=a,this.project=c,this.likescount=u,this.likes=l,this.likestate=d,this.dislikestate=f,this.dislikes=p},f=i("ce04");c["default"].use(f);var h={name:"cohortprojects",components:{BridgeHomeHeader:p["a"],CandidateSider:l["a"],showAt:u["showAt"],hideAt:u["hideAt"]},data:function(){return{portfolio:[],projectmodal:!1,project:{},loading:!1,currentUserProfile:null}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,r,o,s,n,c,l,p,u,f,h,m,g,v,j,y,k,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},this.loading=!0,t.next=4,a["a"].currentuser(this.$store.state.user.pk,e);case 4:return this.currentUserProfile=t.sent.data,t.next=7,a["a"].portfolio(this.$store.state.user.pk,e);case 7:for(this.portfoliolist=t.sent.data,i=0;i<this.portfoliolist.length;i++)this.portfoliolist[i].csa&&(r=this.portfoliolist[i].id,o=this.portfoliolist[i].title,s=this.portfoliolist[i].description,n=this.portfoliolist[i].demo_link,c=[],this.portfoliolist[i].tech_tags&&(c=this.portfoliolist[i].tech_tags.split(",")),l=this.portfoliolist[i].project,p=this.portfoliolist[i].repository_link,u=[],this.portfoliolist[i].likes&&(u=this.portfoliolist[i].likes.split(",")),f=[],this.portfoliolist[i].dislikes&&(f=this.portfoliolist[i].dislikes.split(",")),h=u.length-f.length,m=u,g=f,v=this.portfoliolist[i].likes,j=this.portfoliolist[i].dislikes,y=!1,v&&(y=v.includes(this.currentUserProfile.id)),k=!1,j&&(k=j.includes(this.currentUserProfile.id)),b=new d(r,o,s,n,c,p,l,m,g,h,y,k),this.portfolio.push(b));this.loading=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{ProjectModal:function(t){this.project=t,this.projectmodal=!0},like:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(i={headers:{Authorization:"JWT "+this.$store.state.token}},r=0,o=0;o<this.portfolio.length;o++)this.portfolio[o].id===e&&(r=this.portfolio[o]);this.portfolio[r].likescount++,this.portfolio[r].dislikestate?(this.portfolio[r].dislikes=this.portfolio[r].dislikes.slice(this.currentUserProfile.id),this.portfolio[r].likestate=!0,this.portfolio[r].dislikestate=!1,this.portfolio[r].likes.push(this.currentUserProfile.id)):(this.portfolio[r].likes.push(this.currentUserProfile.id),this.portfolio[r].likestate=!0),a["a"].portfoliolikeupdate(e,{dislikes:this.portfolio[r].dislikes.join(","),likes:this.portfolio[r].likes.join(",")},i).then().catch();case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),dislike:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(i={headers:{Authorization:"JWT "+this.$store.state.token}},r=0,o=0;o<this.portfolio.length;o++)this.portfolio[o].id===e&&(r=this.portfolio[o]);this.portfolio[r].likescount--,this.portfolio[r].likestate?(this.portfolio[r].likes=this.portfolio[r].likes.slice(this.currentUserProfile.id),this.portfolio[r].likestate=!1,this.portfolio[r].dislikestate=!0,this.portfolio[r].dislikes.push(this.currentUserProfile.id)):(this.portfolio[r].dislikes.push(this.currentUserProfile.id),this.portfolio[r].dislikestate=!0),a["a"].portfoliolikeupdate(e,{dislikes:this.portfolio[r].dislikes.join(","),likes:this.portfolio[r].likes.join(",")},i).then().catch();case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},m=h,g=(i("2230"),i("2877")),v=Object(g["a"])(m,r,o,!1,null,"895df2f8",null);e["default"]=v.exports},aae3:function(t,e,i){var r=i("d3f4"),o=i("2d95"),s=i("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},b0c5:function(t,e,i){"use strict";var r=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c562:function(t,e,i){},ce04:function(t,e,i){(function(){var e={install:function(t){t.filter("truncate",(function(t,e,i){if(i=i||"...",e=e||30,t.length<=e)return t;var r=t.slice(0,e-i.length),o=r.length-1;while(o>0&&" "!==r[o]&&r[o]!==i[0])o-=1;return o=o||e-i.length,r=r.slice(0,o),r+i}))}};t.exports=e})()},d225:function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",(function(){return r}))},d2c8:function(t,e,i){var r=i("aae3"),o=i("be13");t.exports=function(t,e,i){if(r(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(t))}},d557:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-layout-header",{staticClass:"header",style:{width:"100%",height:"9rem",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[r("div",{staticStyle:{padding:"0 1%"}},[r("a-row",[r("a-col",{attrs:{xs:{span:16,offset:0},sm:{span:16,offset:0},md:{span:12,offset:0},lg:{span:18,offset:0},xl:{span:18,offset:0}}},[r("span",{staticStyle:{color:"white","font-weight":"bold","font-size":"21px"}},[t._v("Bridge your skills")])]),r("a-col",{attrs:{xs:{span:8,offset:0},sm:{span:8,offset:0},md:{span:12,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[r("img",{staticClass:"sdg4",attrs:{src:i("3c79")}})])],1)],1)])],1)},o=[],s={name:"bridgehomeheader",components:{}},n=s,a=(i("0c5f"),i("2877")),c=Object(a["a"])(n,r,o,!1,null,"a18b8cfa",null);e["a"]=c.exports},e63b:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[i("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[i("router-link",{attrs:{to:"/"}},[i("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},style:t.logo,attrs:{src:t.defaultlogo}})])],1),i("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[i("a-menu-item",{key:"1"},[i("router-link",{attrs:{to:"/developer"}},[i("a-icon",{attrs:{type:"dashboard"}}),i("span",[t._v("Dashboard")])],1)],1),i("a-menu-item",{key:"11"},[i("router-link",{attrs:{to:"/assessment"}},[i("a-icon",{attrs:{type:"code"}}),i("span",[t._v("Get verified")])],1)],1),i("a-menu-item",{key:"10"},[i("router-link",{attrs:{to:"/manageapplications"}},[i("a-icon",{attrs:{type:"folder-open"}}),i("span",[t._v("Manage Applications")])],1)],1),i("a-menu-item",{key:"4"},[i("router-link",{attrs:{to:"/jobs"}},[i("a-icon",{attrs:{type:"solution"}}),i("span",[t._v("Job board")])],1)],1),i("a-menu-item",{key:"9"},[i("router-link",{attrs:{to:"/portfolio"}},[i("a-icon",{attrs:{type:"file-done"}}),i("span",[t._v("My portfolio")])],1)],1),i("a-menu-item",{key:"8"},[i("router-link",{attrs:{to:"/devcalendar"}},[i("a-icon",{attrs:{type:"calendar"}}),i("span",[t._v("Calendar")])],1)],1),i("a-menu-item",{key:"6"},[i("router-link",{attrs:{to:"/developerprofile"}},[i("a-icon",{attrs:{type:"user"}}),i("span",[t._v("Edit profile")])],1)],1),i("a-menu-item",{key:"13"},[i("router-link",{attrs:{to:"/community"}},[i("a-icon",{attrs:{type:"message"}}),i("span",[t._v("Community chat")])],1)],1),i("a-menu-item",{key:"7"},[i("a",{on:{click:t.logout}},[i("a-icon",{attrs:{type:"export"}}),i("span",[t._v("  Logout")])],1)])],1)],1)},o=[],s=(i("96cf"),i("3b8d")),n=i("b8fb"),a=i.n(n),c=i("8808"),l={name:"CandidateSider",data:function(){return{defaultlogo:a.a}},components:{hideAt:c["hideAt"]},methods:{onCollapse:function(t){return t},onBreakpoint:function(t){return t},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},p=l,u=i("2877"),d=Object(u["a"])(p,r,o,!1,null,"6cae2b23",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-b64f3180.7d4a3f72.js.map