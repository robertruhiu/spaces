(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27505ecb"],{"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"1ecb":function(t,e,r){"use strict";var n=r("603b"),a=r.n(n);a.a},"2fdb":function(t,e,r){"use strict";var n=r("5ca1"),a=r("d2c8"),i="includes";n(n.P+n.F*r("5147")(i),"String",{includes:function(t){return!!~a(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,r){var n=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(a){}}return!0}},"603b":function(t,e,r){},6762:function(t,e,r){"use strict";var n=r("5ca1"),a=r("c366")(!0);n(n.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"75fc":function(t,e,r){"use strict";var n=r("a745"),a=r.n(n);function i(t){if(a()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var s=r("774e"),l=r.n(s),o=r("c8bb"),c=r.n(o);function u(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return i(t)||u(t)||f()}r.d(e,"a",function(){return p})},"774e":function(t,e,r){t.exports=r("d2d5")},a0ea:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[r("CandidateSider"),r("a-layout",[r("a-layout-content",{staticStyle:{"background-color":"white"}},[r("DevHeader"),r("div",{style:{padding:"6px 20px",background:"#fff",minHeight:"75vh",maxWidth:"72rem",marginTop:"1rem",marginLeft:"1%",marginRight:"1%"}},[r("a-form",{attrs:{form:t.form}},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:12,offset:0},xl:{span:12,offset:0}}},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Github profile","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-input",{model:{value:t.currentUserProfile.github_repo,callback:function(e){t.$set(t.currentUserProfile,"github_repo",e)},expression:"currentUserProfile.github_repo"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Linkedin profile","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-input",{model:{value:t.currentUserProfile.linkedin_url,callback:function(e){t.$set(t.currentUserProfile,"linkedin_url",e)},expression:"currentUserProfile.linkedin_url"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{"label-col":{span:24},"wrapper-col":{span:24}}},[r("span",{attrs:{slot:"label"},slot:"label"},[t._v("Country : "+t._s(t.currentUserProfile.country))]),r("country-select",{staticClass:"ant-input",model:{value:t.currentUserProfile.country,callback:function(e){t.$set(t.currentUserProfile,"country",e)},expression:"currentUserProfile.country"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Availability","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-select",{attrs:{placeholder:"Select a option and change input text above"},model:{value:t.currentUserProfile.availabilty,callback:function(e){t.$set(t.currentUserProfile,"availabilty",e)},expression:"currentUserProfile.availabilty"}},[r("a-select-option",{attrs:{value:"contract"}},[t._v("\n                                                contract\n                                            ")]),r("a-select-option",{attrs:{value:"fulltime"}},[t._v("\n                                                fulltime\n                                            ")]),r("a-select-option",{attrs:{value:"parttime"}},[t._v("\n                                                part time\n                                            ")]),r("a-select-option",{attrs:{value:"remote"}},[t._v("\n                                                remote\n                                            ")])],1)],1)],1)],1)],1),r("a-col",{staticStyle:{padding:"2% 4%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:12,offset:0},xl:{span:12,offset:0}}},[r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"What are your tech skills ","label-col":{span:24},"wrapper-col":{span:24}}},[t._l(t.tags,function(e,n){return[e.length>20?r("a-tooltip",{key:e,attrs:{title:e}},[r("a-tag",{key:e,attrs:{afterClose:function(){return t.handleClose(e)},color:"#2db7f5"}},[t._v("\n                                                "+t._s(e.slice(0,20)+"...")+"\n                                            ")])],1):r("a-tag",{key:e,attrs:{closable:n>=0,afterClose:function(){return t.handleClose(e)},color:"#2db7f5"}},[t._v("\n                                            "+t._s(e)+"\n                                        ")])]}),t.inputVisible?r("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}}}):r("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showInput}},[r("a-icon",{attrs:{type:"plus"}}),t._v("\n                                        New Tag\n                                    ")],1)],2)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Bio","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-textarea",{attrs:{name:"bio",maxlength:"300",placeholder:"Tell us something about yourself",rows:6},model:{value:t.currentUserProfile.about,callback:function(e){t.$set(t.currentUserProfile,"about",e)},expression:"currentUserProfile.about"}})],1)],1),r("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{span:24}},[r("span",[t._v("\n                                            Monthly Salary expectations\n                                        ")]),r("a-input-number",{attrs:{defaultValue:1e3,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},model:{value:t.currentUserProfile.salary,callback:function(e){t.$set(t.currentUserProfile,"salary",e)},expression:"currentUserProfile.salary"}})],1)],1)],1),t.cv?r("div",[t.alert?r("p",{staticStyle:{color:"blue"}},[t._v("Upload successful /cv changed")]):t._e(),r("p",[t._v("Current cv :"),r("a",{attrs:{href:t.cv,target:"_blank"}},[t._v("cv link")])]),t.uploading?r("div",[r("span",[t._v("Uploading file "),r("a-spin")],1)]):r("div",[t._v("\n                            Change/update CV\n                            "),r("input",{attrs:{type:"file",accept:"application/pdf"},on:{change:t.ChangehandleUpload}})])]):r("div",[t.uploading?r("div",[r("span",[t._v("Uploading file "),r("a-spin")],1)]):r("div",[r("input",{attrs:{type:"file",accept:"application/pdf"},on:{change:t.handleUpload}})])]),!1===t.loading?r("div",{staticStyle:{"text-align":"center"}},[r("a-button",{staticStyle:{width:"15rem"},attrs:{type:"primary"},on:{click:t.Save}},[t._v("Save")])],1):r("div",{staticStyle:{"text-align":"center"}},[r("div",{staticStyle:{"text-align":"center"}},[r("a-spin")],1)])],1)],1)],1)],1)],1)},a=[],i=r("75fc"),s=(r("6762"),r("2fdb"),r("a481"),r("28a5"),r("96cf"),r("3b8d")),l=r("e63b"),o=r("bf80"),c=r("bc0c"),u=r("bc3a"),f=r.n(u),p=r("194e"),h=r.n(p),d=r("2b0e");d["default"].use(h.a);var v={name:"Myprofile",components:{DevHeader:c["a"],CandidateSider:l["a"]},data:function(){return{loading:!1,currentUserProfile:null,tags:[],inputVisible:!1,inputValue:"",fileList:[],uploading:!1,cv:"",alert:!1}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=6;break}return t.next=4,o["a"].currentuser(this.$store.state.user.pk,e);case 4:if(this.currentUserProfile=t.sent.data,this.currentUserProfile.skills&&this.currentUserProfile.skills.length>=0)for(r=this.currentUserProfile.skills.replace(/'/g,"").replace(/ /g,"").split(","),n=0;n<r.length;n++)this.tags.push(r[n]);case 6:this.currentUserProfile.file&&(this.currentUserProfile.file.includes("http")?this.cv=this.currentUserProfile.file:this.cv="https://res.cloudinary.com/dwtvwjhn3/".concat(this.currentUserProfile.file," "));case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{Save:function(){var t=this,e={headers:{Authorization:"JWT "+this.$store.state.token}};if(this.tags){for(var r=0;r<this.tags.length;r++)if(""===this.tags[r]){var n=this.tags.indexOf(this.tags[r]);this.tags.splice(n,1)}this.currentUserProfile.skills=this.tags.join(",")}this.currentUserProfile.file=this.cv.slice(48),this.currentUserProfile.user=this.$store.state.user.pk,this.loading=!0,o["a"].update(this.$store.state.user.pk,this.currentUserProfile,e).then(function(e){return"developer"===t.currentUserProfile.user_type?t.$router.push({name:"developer"}):t.$router.push({name:"recruiter"}),e}).catch(function(e){return t.loading=!1,e})},handleClose:function(t){var e=this.tags.filter(function(e){return e!==t});this.tags=e;var r=this.tags.join(", ");this.currentUserProfile.skills=r},showInput:function(){this.inputVisible=!0,this.$nextTick(function(){this.$refs.input.focus()})},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(i["a"])(e),[t]));var r=e.join(", ");this.currentUserProfile.skills=r,Object.assign(this,{tags:e,inputVisible:!1,inputValue:""})},handleChange:function(t){var e=this;e.uploadFile(t.file)},beforeUpload:function(t){return this.fileList=[].concat(Object(i["a"])(this.fileList),[t]),!1},handleUpload:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,n,a,i,s,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.uploading=!0,r="dwtvwjhn3",n="ml_default",a=e.target.files[0],i=new FormData,i.append("file",a),i.append("upload_preset",n),s="https://api.cloudinary.com/v1_1/".concat(r,"/raw/upload"),t.next=10,f.a.post(s,i,{headers:{"Content-Type":"multipart/form-data"}});case 10:l=t.sent,this.cv=l.data.secure_url;case 12:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),ChangehandleUpload:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,n,a,i,s,l,c,u=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={headers:{Authorization:"JWT "+this.$store.state.token}},this.uploading=!0,n="dwtvwjhn3",a="ml_default",i=e.target.files[0],s=new FormData,s.append("file",i),s.append("upload_preset",a),l="https://api.cloudinary.com/v1_1/".concat(n,"/raw/upload"),t.next=11,f.a.post(l,s,{headers:{"Content-Type":"multipart/form-data"}});case 11:c=t.sent,this.cv=c.data.secure_url,this.currentUserProfile.file=this.cv.slice(48),o["a"].updatepatch(this.$store.state.user.pk,{file:this.cv.slice(48)},r).then(function(t){return u.currentUserProfile.file=u.cv,u.uploading=!1,u.alert=!0,t}).catch(function(t){return t});case 15:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},g=v,b=(r("1ecb"),r("2877")),m=Object(b["a"])(g,n,a,!1,null,"747b6cb4",null);e["default"]=m.exports},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),i=r("9def"),s=r("4588"),l=r("0390"),o=r("5f1b"),c=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,v){return[function(n,a){var i=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,i,a):r.call(String(i),n,a)},function(t,e){var a=v(r,t,this,e);if(a.done)return a.value;var f=n(t),p=String(this),h="function"===typeof e;h||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var y=[];while(1){var k=o(f,p);if(null===k)break;if(y.push(k),!b)break;var x=String(k[0]);""===x&&(f.lastIndex=l(p,i(f.lastIndex),m))}for(var w="",U=0,_=0;_<y.length;_++){k=y[_];for(var P=String(k[0]),S=c(u(s(k.index),p.length),0),$=[],C=1;C<k.length;C++)$.push(d(k[C]));var j=k.groups;if(h){var A=[P].concat($,S,p);void 0!==j&&A.push(j);var O=String(e.apply(void 0,A))}else O=g(P,p,S,$,j,e);S>=U&&(w+=p.slice(U,S)+O,U=S+P.length)}return w+p.slice(U)}];function g(t,e,n,i,s,l){var o=n+t.length,c=i.length,u=h;return void 0!==s&&(s=a(s),u=p),r.call(l,u,function(r,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(o);case"<":l=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>c){var p=f(u/10);return 0===p?r:p<=c?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):r}l=i[u-1]}return void 0===l?"":l})}})},a745:function(t,e,r){t.exports=r("f410")},c8bb:function(t,e,r){t.exports=r("54a1")},d2c8:function(t,e,r){var n=r("aae3"),a=r("be13");t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(t))}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-27505ecb.c062e60d.js.map