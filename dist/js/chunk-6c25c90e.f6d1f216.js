(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c25c90e"],{5447:function(t,e,a){},cf32:function(t,e,a){"use strict";var i=a("5447"),s=a.n(i);s.a},e665:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{style:{background:"#fff"}},[a("pageheader"),a("a-layout-content",{style:{padding:"0 0px"}},[a("div",[a("a-row",{staticStyle:{"background-color":"#004ec7",position:"fixed",width:"100%","z-index":"1","margin-top":"4rem","padding-bottom":"1rem"},attrs:{gutter:"8"}},[a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("a-col",{attrs:{span:"4"}},[a("h3",{staticStyle:{color:"white","font-size":"1.5rem","padding-left":"4rem","padding-top":"1rem"}},[t._v("Talent")])])],1),a("a-col",{attrs:{xs:{span:16,offset:2},sm:{span:16,offset:2},md:{span:16,offset:2},lg:{span:16,offset:0},xl:{span:16,offset:0}}},[a("div",{staticClass:"center",staticStyle:{"padding-top":"2rem"}},[a("a-auto-complete",{staticStyle:{width:"100%","z-index":"0"},attrs:{dataSource:t.dataSource,placeholder:"Search skills like react,javascript,vue python",filterOption:t.filterOption},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("a-input",[a("a-icon",{staticClass:"certain-category-icon",attrs:{slot:"suffix",type:"search"},slot:"suffix"})],1)],1)],1)]),a("a-col",{attrs:{xs:{span:6,offset:0},sm:{span:6,offset:0},md:{span:6,offset:0},lg:{span:4,offset:0},xl:{span:4,offset:0}}},[a("div",{staticClass:"center",staticStyle:{"padding-top":"2rem"}},[a("country-select",{staticClass:"ant-input",attrs:{name:"location"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)])],1)],1),a("div",{staticStyle:{"margin-top":"10rem"}},[a("a-row",[a("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:16,offset:4},lg:{span:16,offset:4},xl:{span:16,offset:4}}},[a("a-alert",{attrs:{message:"If you have a posted  job you can attach picked candidates to it.You can do this on manage candidates page",type:"info",closeText:"Close Now"}}),t.loading?a("div",{staticClass:"loading",staticStyle:{"text-align":"center","min-height":"40vh"}},[a("a-spin",{attrs:{size:"large"}})],1):a("div",[a("a-list",{staticStyle:{"padding-bottom":"2rem"},attrs:{itemLayout:"vertical",size:"large",pagination:t.pagination,dataSource:t.filteredList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{key:"item.title"},[a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticStyle:{padding:"2%"}},[a("a-row",{staticClass:"lightshadow",staticStyle:{height:"13rem",padding:"3%"}},[a("a-col",{staticStyle:{padding:"2%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:15,offset:0},xl:{span:15,offset:0}}},[a("span",[a("a-avatar",{staticClass:"poolavatar1"},[t._v("\n                                                                "+t._s(e.name)+"\n                                                            ")]),a("span",{staticStyle:{"margin-left":"1rem"}},[t._v("Bio")])],1),a("p",[t._v(t._s(t._f("truncate")(e.about,100))),a("a",{on:{click:function(a){return t.navigateTo({name:"candidatetalentprofile",params:{candidateProfileID:e.id}})}}},[t._v("read\n                                                    more")])]),a("p",[t._v("\n                                                    Skills :\n                                                    "),t._l(e.skills.slice(0,3),function(e){return a("span",{key:e.id},[a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2),a("div",{staticStyle:{"margin-bottom":"1%","text-align":"center"}},[a("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(a){return t.navigateTo({name:"candidatetalentprofile",params:{candidateProfileID:e.id}})}}},[t._v("\n                                                        View Profile\n                                                    ")])],1)])],1)],1)]),a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("a-row",{staticStyle:{"box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"9rem"}},[a("a-col",{staticStyle:{"background-color":"#0679FB",height:"100%"},attrs:{span:"4"}},[a("a-avatar",{staticClass:"poolavatar"},[t._v("\n                                                "+t._s(e.name)+"\n                                                "),e.verified?a("span",{staticStyle:{"font-size":"1rem"}},[a("a-icon",{attrs:{type:"check-circle"}})],1):t._e()])],1),a("a-col",{staticStyle:{padding:"2%"},attrs:{span:"15"}},[a("p",[t._v("Bio")]),a("p",[t._v(t._s(t._f("truncate")(e.about,100))),a("a",{on:{click:function(a){return t.navigateTo({name:"candidatetalentprofile",params:{candidateProfileID:e.id}})}}},[t._v("read\n                                                more")])]),a("p",[t._v("\n                                                Skills :\n                                                "),t._l(e.skills,function(e){return a("span",{key:e.id},[a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2)]),a("a-col",{attrs:{span:"5"}},[a("div",{staticStyle:{"padding-top":"1rem"}},[a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[a("a-icon",{attrs:{type:"environment"}}),t._v("\n                                                    "+t._s(e.location)+"\n                                                ")],1),t._l(e.availabilty,function(e){return a("span",{key:e.id},[a("a-tag",{staticStyle:{color:"#B82EA4"},attrs:{color:"#F7E7F5"}},[t._v(t._s(e))])],1)})],2),a("div",{staticStyle:{"margin-top":"2rem"}},[a("a-button",{attrs:{type:"primary",ghost:""}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"candidatetalentprofile",params:{candidateProfileID:e.id}},target:"_blank"}},[t._v("\n                                                        View Profile\n                                                    ")])],1)],1)])],1)],1)],1)}}])})],1)],1)],1)],1)])],1)},s=[],n=(a("6b54"),a("6762"),a("2fdb"),a("386d"),a("28a5"),a("96cf"),a("3b8d")),o=a("d225"),r=(a("034b"),a("96c7")),l=a("290c"),c=a("da05"),d=a("bf80"),p=a("8808"),u=a("2b0e"),h=function t(e,a,i,s,n,r,l){Object(o["a"])(this,t),this.id=e,this.name=a,this.skills=i,this.about=s,this.location=n,this.availabilty=r,this.verified=l},f=a("ce04");u["default"].use(f);var g=["Fulltime","Contract","Remote","Parttime"],m=["Fulltime","Contract","Remote","Parttime"],v=["1 year","2 years","3 years","4 years above"],y=["1 year","2 years","3 years","4 years above"],k={name:"talent",data:function(){return{visible:!1,devs:null,alldevs:null,search:"",country:"",profile:{},checkedList:m,indeterminate:!0,checkAll:!1,plainOptions:g,checkedList1:y,indeterminate1:!0,checkAll1:!1,mydevs:null,tags:[],loading:!0,dataSource:["Django","Javascript","Python","Php","Postgres","Sql","Html","Css","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","Rails","Meteor","AI","Cybersecurity","Blockchain","Arduino","Spring","Bitcoin","Kotlin","Scala","Nativescript ","Android","Website","Mobile"],plainOptions1:v,pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px"},pStyle2:{marginBottom:"24px"},listData:[],pagination:{onChange:function(t){return t},pageSize:20},actions:[{type:"star-o",text:"156"},{type:"like-o",text:"156"},{type:"message",text:"2"}]}},components:{ACol:c["b"],ARow:l["a"],Pageheader:r["a"],showAt:p["showAt"],hideAt:p["hideAt"]},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,i,s,n,o,r,l,c,p;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].devs();case 2:for(this.devs=t.sent.data,this.loading=!1,e=0;e<this.devs.length;e++)a=[],this.devs[e].skills&&(a=this.devs[e].skills.split(",").slice(0,4)),i=this.devs[e].user.id,s=this.devs[e].user.first_name[0].toUpperCase()+this.devs[e].user.last_name[0].toUpperCase(),n=a,o=this.devs[e].about,r=this.devs[e].country,l=[],this.devs[e].availabilty&&(l=this.devs[e].availabilty.split(",").slice(0,2)),c=!1,this.devs[e].verified_skills&&(c=!0),p=new h(i,s,n,o,r,l,c),this.listData.push(p);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},onClose:function(){this.visible=!1},onChange:function(t){this.indeterminate=!!t.length&&t.length<g.length,this.checkAll=t.length===g.length},onCheckAllChange:function(t){Object.assign(this,{checkedList:t.target.checked?g:[],indeterminate:!1,checkAll:t.target.checked})},onChange1:function(t){this.indeterminate1=!!t.length&&t.length<v.length,this.checkAll1=t.length===v.length},onCheckAllChange1:function(t){Object.assign(this,{checkedList1:t.target.checked?v:[],indeterminate1:!1,checkAll1:t.target.checked})}},computed:{filteredList:function(){var t=this;return this.listData.filter(function(e){return t.country&&t.search?e.skills.toString().toLowerCase().includes(t.search.toLowerCase())&&e.location.toLowerCase().includes(t.country.toLowerCase()):t.country?e.location.toLowerCase().includes(t.country.toLowerCase()):e.skills.toString().toLowerCase().includes(t.search.toLowerCase())})}}},b=k,S=(a("cf32"),a("2877")),w=Object(S["a"])(b,i,s,!1,null,"21c51edc",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-6c25c90e.f6d1f216.js.map