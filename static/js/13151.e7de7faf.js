"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[13151],{113151:function(M,n,l){l.r(n),l.d(n,{default:function(){return D}});var d=function(){var e=this,t=e._self._c;return t("div",[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u6863\u6848\u888B\u5C5E\u6027")])]),t("vue-lazy-component",[t("el-form",{ref:"form",attrs:{model:e.currentWidget.config,"label-width":"115px",size:"mini"}},[t("el-form-item",{attrs:{label:"\u64CD\u4F5C\u6A21\u5F0F"}},[t("el-select",{staticStyle:{width:"165px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u64CD\u4F5C\u6A21\u5F0F"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.operateMode,callback:function(i){e.$set(e.currentWidget.config,"operateMode",i)},expression:"currentWidget.config.operateMode"}},e._l(e.operateModeList,function(i){return t("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}),1)],1),t("el-form-item",{attrs:{label:"\u8282\u70B9\u6811\u4F4D\u7F6E"}},[t("el-select",{staticStyle:{width:"165px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u8282\u70B9\u6811\u4F4D\u7F6E"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.nodePosition,callback:function(i){e.$set(e.currentWidget.config,"nodePosition",i)},expression:"currentWidget.config.nodePosition"}},e._l(e.nodePositionList,function(i){return t("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}),1)],1),t("el-form-item",{attrs:{label:"\u6309\u94AE\u529F\u80FD\u914D\u7F6E"}},[t("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"primary"},on:{click:e.clickedFileBagButtonSetting}})],1)],1)],1),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-file-bag-title"},[e._v("\u9501\u5C4F\u529F\u80FD\u914D\u7F6E")])]),t("vue-lazy-component",[t("el-form",{ref:"form-lock",attrs:{model:e.currentWidget.config.lock,"label-width":"115px",size:"mini"}},[t("el-form-item",{attrs:{label:"\u662F\u5426\u542F\u7528"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.lock.isOpen,callback:function(i){e.$set(e.currentWidget.config.lock,"isOpen",i)},expression:"currentWidget.config.lock.isOpen"}})],1),e.currentWidget.config.lock.isOpen?t("el-form-item",{attrs:{label:"\u63D0\u793A\u540D"}},[t("el-input",{staticStyle:{width:"165px",marginRight:"5px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u63D0\u793A\u540D",maxlength:"20"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.lock.tip,callback:function(i){e.$set(e.currentWidget.config.lock,"tip",i)},expression:"currentWidget.config.lock.tip"}})],1):e._e(),e.currentWidget.config.lock.isOpen?t("el-form-item",{attrs:{label:"\u9501\u5C4F\u56FE\u6807"}},[t("el-icon",{attrs:{icon:e.currentWidget.config.lock.icon},on:{"on-icon-change":e.lockIconChange}})],1):e._e()],1)],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-file-bag-title",staticStyle:{marginRight:"5px"}},[e._v("\u5BFC\u822A\u6807\u9898\u914D\u7F6E")]),t("el-tooltip",{attrs:{"open-delay":1e3}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v("\u7528\u4E8E\u914D\u7F6E\u6863\u6848\u888B\u6811\u5F62\u8282\u70B9\u4E0A\u65B9\u7684\u5BFC\u822A\u6807\u9898\u680F")]),t("i",{staticClass:"el-icon-info"})])],1),t("vue-lazy-component",[t("el-form",{ref:"form-navigation",attrs:{model:e.currentWidget.config.navigationTitle,"label-width":"115px",size:"mini"}},[t("el-form-item",{attrs:{label:"\u662F\u5426\u542F\u7528"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.navigationTitle.isOpen,callback:function(i){e.$set(e.currentWidget.config.navigationTitle,"isOpen",i)},expression:"currentWidget.config.navigationTitle.isOpen"}})],1),e.currentWidget.config.navigationTitle.isOpen?t("el-form-item",{attrs:{label:"\u540D\u79F0"}},[t("el-input",{staticStyle:{width:"165px",marginRight:"5px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",maxlength:"8"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.navigationTitle.name,callback:function(i){e.$set(e.currentWidget.config.navigationTitle,"name",i)},expression:"currentWidget.config.navigationTitle.name"}})],1):e._e(),e.currentWidget.config.navigationTitle.isOpen?t("el-form-item",{attrs:{label:"\u56FE\u6807"}},[t("el-icon",{attrs:{icon:e.currentWidget.config.navigationTitle.icon},on:{"on-icon-change":e.navigationTitleIconChange}})],1):e._e()],1)],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-file-bag-title"},[e._v("\u529E\u4EF6\u63D0\u793A\u4FE1\u606F\u914D\u7F6E")])]),t("vue-lazy-component",[t("el-form",{ref:"form-task",attrs:{model:e.currentWidget.config.taskTipMessage,"label-width":"105px",size:"mini"}},[t("el-form-item",{attrs:{label:"\u662F\u5426\u542F\u7528"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.taskTipMessage.isOpen,callback:function(i){e.$set(e.currentWidget.config.taskTipMessage,"isOpen",i)},expression:"currentWidget.config.taskTipMessage.isOpen"}})],1),e.currentWidget.config.taskTipMessage.isOpen?t("el-form-item",{attrs:{label:"\u663E\u793A\u5185\u5BB9"}},[t("el-select",{staticStyle:{width:"190px"},attrs:{multiple:"",placeholder:"\u8BF7\u9009\u62E9\u663E\u793A\u5185\u5BB9"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.taskTipMessage.contents,callback:function(i){e.$set(e.currentWidget.config.taskTipMessage,"contents",i)},expression:"currentWidget.config.taskTipMessage.contents"}},e._l(e.contentList,function(i){return t("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}),1)],1):e._e()],1)],1)],2),t("el-form",{ref:"form-other",attrs:{model:e.currentWidget.config,"label-width":"115px",size:"mini"}},[t("el-form-item",{attrs:{label:"\u8BBE\u4E3A\u9ED8\u8BA4\u6863\u6848\u888B"}},[t("el-tooltip",{attrs:{"open-delay":1e3}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v("\u53D1\u5E03\u540E\u624D\u80FD\u5F00\u542F\uFF1B\u5F00\u542F\u540E\u5373\u4E3A\u8BE5\u5B50\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u6863\u6848\u888B\u9875\u9762\uFF0C\u4E00\u4E2A\u5B50\u7CFB\u7EDF\u53EA\u80FD\u751F\u6548\u4E00\u4E2A\u3002")]),t("i",{staticClass:"el-icon-info",staticStyle:{color:"#9DA9B7"}})]),t("el-switch",{staticStyle:{marginLeft:"5px"},attrs:{disabled:e.editorBiPid===null},on:{change:e.clickDefaultFileBag},model:{value:e.currentWidget.config.isDefaultFileBag,callback:function(i){e.$set(e.currentWidget.config,"isDefaultFileBag",i)},expression:"currentWidget.config.isDefaultFileBag"}})],1),t("el-form-item",{attrs:{label:"\u53D8\u91CF\u914D\u7F6E"}},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){e.dialogFileBagVisible=!0}}},[e._v("\u53D8\u91CF\u914D\u7F6E")])],1)],1),t("el-form",{ref:"form",attrs:{"label-width":"50px",size:"mini"}},[t("el-form-item",{attrs:{label:"\u6863\u6848\u888B\u4EE3\u7801\u6A21\u5F0F","label-width":"135px"}},[t("el-button",{attrs:{icon:"el-icon-edit",type:"primary"},on:{click:function(i){return e.showEditorDialog(e.currentWidget.config)}}})],1)],1)],2)],1),t("el-dialog",{staticClass:"my-image-dialog",staticStyle:{padding:"0px"},attrs:{"append-to-body":!0,"close-on-click-modal":!1,visible:e.dialogIconVisible,title:"\u9009\u62E9\u56FE\u7247",top:"10px",width:"88%"},on:{"update:visible":function(i){e.dialogIconVisible=i}}},[t("div",[t("image-manage",{ref:"imageMange",attrs:{isDialog:!0,type:["image"]}})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(i){e.dialogIconVisible=!1}}},[e._v("\u53D6 \u6D88")]),t("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("\u786E \u5B9A")])],1)]),t("el-dialog",{staticClass:"my-image-dialog",attrs:{"append-to-body":!0,"close-on-click-modal":!1,visible:e.dialogFileBagVisible,title:"\u6863\u6848\u888B\u53D8\u91CF\u8BBE\u7F6E",top:"10px",width:"88%"},on:{"update:visible":function(i){e.dialogFileBagVisible=i}}},[t("div",[t("iframe",{staticClass:"platform-page",style:{height:"calc(100vh - 230px)",width:"100%",border:"0px"},attrs:{src:e.domain+"#/gisqbiDialog/keyvalueSetting?containCommon=true&subGuid="+this.editorAppId+"&token="+e.token}})]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(i){e.dialogFileBagVisible=!1}}},[e._v("\u5173 \u95ED")])],1)]),t("el-dialog",{ref:"editDialog",class:["dialog-publish",e.dialogFullScr?"full-screen":""],attrs:{"append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,fullscreen:e.dialogFullScr,visible:e.editDialog,width:e.dialogWidth,top:"10px"},on:{"update:visible":function(i){e.editDialog=i},close:e.closeDialog}},[t("div",{staticStyle:{overflow:"hidden",width:"100%"},attrs:{slot:"title"},slot:"title"},[t("span",[e._v("\u6863\u6848\u888B\u4EE3\u7801\u6A21\u5F0F")]),t("div",{class:["dialog_title",e.dialogFullScr?"dialog_full_screen":""]},[e.dialogFullScr?t("span",{staticClass:"iconfont bi_min1",on:{click:e.setFullScreen}}):t("span",{staticClass:"iconfont bi_max1",on:{click:e.setFullScreen}}),t("span",{staticClass:"iconfont bi_close",on:{click:e.cancel}})])]),t("div",{staticClass:"main-content",style:{height:e.divH-180+"px"}},[t("div",{ref:"box",staticClass:"box",style:{height:e.divH-180+"px"}},[t("div",{ref:"left",staticClass:"left",style:{height:e.divH-180+"px"}},[t("my-monaco-editor",{ref:"sampleCode",attrs:{language:"json",theme:"vs"},model:{value:e.script_content,callback:function(i){e.script_content=i},expression:"script_content"}})],1),t("el-tooltip",{attrs:{"open-delay":1e3,content:"\u5DE6\u53F3\u6ED1\u52A8\u8C03\u6574\u5927\u5C0F",effect:"light",placement:"top"}},[t("div",{ref:"queryResize",staticClass:"resize"},[e._v(" \u22EE ")])]),t("div",{ref:"mid",staticClass:"mid"},[t("el-aside",{staticClass:"my-aside",attrs:{width:"150px"}},[t("el-row",[e._l(e.navMenu_list,function(i,s){return[t("el-col",{key:s,attrs:{span:24}},[i.divider?[t("el-divider",[e._v(e._s(i.name))])]:[t("div",{class:"my-navMenu-list "+(e.activated.id==i.id?"color_blue":""),on:{click:function(r){return e.onActivated(i)},mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave}},[e._v(" "+e._s(i.name)+" ")])]],2)]})],2)],1),t("el-container",{staticStyle:{height:"100%"}},[t("shortcutkey",{directives:[{name:"show",rawName:"v-show",value:e.activated.type=="remark",expression:"activated.type == 'remark'"}]}),t("my-monaco-editor",{directives:[{name:"show",rawName:"v-show",value:e.activated.type=="examples",expression:"activated.type == 'examples'"}],ref:"script_aip_examples",attrs:{language:"javascript",theme:"vs"},model:{value:e.script_examples,callback:function(i){e.script_examples=i},expression:"script_examples"}})],1)],1)],1)]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:e.cancel}},[e._v("\u53D6 \u6D88")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.confirm}},[e._v("\u786E \u5B9A")])],1)])],1)},g=[],u=l(610995),f=l(148836),m=l(521007),p=l(582333),v=l(654395),h=l(723400),b=l(231954),y=l(321300),x=l(927966),k=l(935051),C=l(149500),W={name:"file-bag-style",props:["currentWidget"],mixins:[u.baseConfig,h.j],components:{ElIcon:m.Z,imageManage:p.default,shortcutkey:v.Z,MyMonacoEditor:()=>Promise.resolve().then(l.bind(l,980424))},mounted(){this.divH=window.innerHeight-51,this.dialogWidth=window.innerWidth-170+"px",window.addEventListener("resize",()=>{this.divH=window.innerHeight-51}),C.log("editorBiPid:",this.editorBiPid)},computed:{...(0,f.Se)(["editorAppId","viewAppId","editorBiId","editorAppId","editorBiPid"])},data(){return{domain:b.Z.baseConfig.domain,token:y.getStoreToken(),operateModeList:[{value:"mouseFloat",label:"\u9F20\u6807\u60AC\u6D6E"},{value:"mouseRight",label:"\u53F3\u952E"}],nodePositionList:[{value:"left",label:"\u9875\u9762\u5DE6\u4FA7"},{value:"right",label:"\u9875\u9762\u53F3\u4FA7"}],contentList:[{value:"processName",label:"\u6D41\u7A0B\u540D\u79F0"},{value:"taskNumber",label:"\u529E\u4EF6\u7F16\u53F7"},{value:"linkName",label:"\u73AF\u8282\u540D\u79F0"},{value:"taskName",label:"\u529E\u4EF6\u540D\u79F0"}],dialogFileBagVisible:!1,dialogIconVisible:!1,editDialog:!1,dialogFullScr:!1,dialogWidth:"0px",navMenu_list:[{id:"remark",name:"\u811A\u672C\u7F16\u8F91\u5668",type:"remark"},{id:"examples",name:"\u770B\u677F\u4FE1\u606F\u6CE8\u89E3",type:"examples"}],activated:{id:"remark",type:"remark"},script_examples:`/*{
                canvasSetting:\u770B\u677F\u57FA\u672C\u4FE1\u606F\uFF1B
                widgets:\u770B\u677F\u4E2D\u6240\u6709\u7EC4\u4EF6\u4FE1\u606F\uFF1B
                }*/`,mouseOverClassName:" background_color_grey",divH:0,script_content:""}},methods:{lockIconChange(a){this.currentWidget.config.lock.icon=a,this.getConfigData()},navigationTitleIconChange(a){this.currentWidget.config.navigationTitle.icon=a,this.getConfigData()},clickedFileBagButtonSetting(){x.Z.$emit("clickedFileBagButtonSetting")},clickDefaultFileBag(a){let e={key:"defaultFilebagUrl",value:a?`/gisqBI/view.html?biId=${this.editorBiId}&appId=${this.editorAppId}&tp=original`:"",subGuid:this.editorAppId},t="/base/base/sysconfig/saveOrUpdateFileBagProperty";(0,k.platformPostRequest)(t,e).then(i=>{i&&i.status==200&&i.data}),this.getConfigData()},showEditorDialog(a){this.editDialog=!0,this.script_content=JSON.stringify(a);let e=this;if(e.$refs.sampleCode)e.$refs.sampleCode.initEditor();else{let t=setTimeout(()=>{e.$refs.sampleCode&&e.$refs.sampleCode.initEditor(),clearTimeout(t)},500)}this.$nextTick(()=>{this.dragControllerDiv()})},cancel(){this.editDialog=!1,this.$refs.sampleCode.setValue("")},confirm(){this.currentWidget.config=JSON.parse(this.script_content),this.getConfigData(),this.editDialog=!1},setFullScreen(){this.dialogFullScr=!this.dialogFullScr,this.divH=this.dialogFullScr?window.innerHeight+35:window.innerHeight-51,this.$refs.sampleCode.initEditor()},closeDialog(){this.dialogFullScr=!1,this.divH=this.dialogFullScr?window.innerHeight+35:window.innerHeight-51},dragControllerDiv:function(){let a=this;var e=this.$refs.queryResize,t=this.$refs.left,i=this.$refs.mid,s=this.$refs.box;e.onmousedown=function(r){a.$refs.queryResize.focus(),e.style.background="#818181";var S=r.clientX;return e.left=e.offsetLeft,document.onmousemove=function(F){var B=F.clientX,o=e.left+(B-S),c=s.clientWidth-e.offsetWidth;o<200&&(o=200),o>c-200&&(o=c-200),e.style.left=o,t.style.width=o+"px",i.style.width=s.clientWidth-o-10+"px"},document.onmouseup=function(){e.style.background="#d6d6d6",document.onmousemove=null,document.onmouseup=null,e.releaseCapture&&e.releaseCapture(),a.$refs.sampleCode.initEditor(),a.$refs.script_aip_examples.initEditor()},e.setCapture&&e.setCapture(),!1}},onMouseEnter(a){a.currentTarget.className=a.currentTarget.className+this.mouseOverClassName},onMouseLeave(a){let e=a.currentTarget.className.indexOf(this.mouseOverClassName);e>-1&&(a.currentTarget.className=a.currentTarget.className.substring(0,e)+a.currentTarget.className.substring(e+this.mouseOverClassName.length))},onActivated(a){this.activated.id=a.id,this.activated.type=a.type,this.$nextTick(()=>{switch(this.activated.type){case"examples":this.activatedExamples();break}})},activatedExamples(){this.$refs.script_aip_examples&&(this.$refs.script_aip_examples.initEditor(),this.$nextTick(()=>{this.$refs.script_aip_examples.formatDocument(),setTimeout(()=>{this.$refs.script_aip_examples.setReadOnly()},1e3)}))}}},w=W,$=l(768141),T=(0,$.Z)(w,d,g,!1,null,"7833a6ee",null),D=T.exports}}]);
