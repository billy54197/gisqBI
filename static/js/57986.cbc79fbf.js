"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[57986],{822776:function(h,o,l){l.d(o,{Z:function(){return v}});var s=function(){var e=this,t=e._self._c;return t("div",[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[e._v(" "+e._s(e.title)+"\xA0\xA0 "),e.tooltip!=""?t("el-tooltip",[t("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.tooltip))]),t("i",{staticClass:"el-icon-info"})]):e._e()],1),t("el-form",{ref:"form",attrs:{size:"mini",model:e.background,"label-width":"80px"}},[e.removeColor?e._e():t("el-form-item",{attrs:{label:"\u80CC\u666F\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u80CC\u666F\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.background.backgroundColor,callback:function(a){e.$set(e.background,"backgroundColor",a)},expression:"background.backgroundColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:this.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.background.backgroundColor,callback:function(a){e.$set(e.background,"backgroundColor",a)},expression:"background.backgroundColor"}})],1)],1)],1),e.removeImage?e._e():t("el-form-item",{attrs:{label:"\u80CC\u666F\u56FE\u7247"}},[t("select-img",{attrs:{image:e.background.backgroundImage},on:{change:e.getConfigData,openSelectImage:function(a){return e.selectImage(e.background.backgroundImage)},clearSelectImage:e.clearSelectImage}})],1),e.removeImage?e._e():t("el-form-item",{attrs:{label:"\u586B\u5145\u6A21\u5F0F"}},[t("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u6A21\u5F0F"},on:{change:e.getConfigData},model:{value:e.background.backgroundSize,callback:function(a){e.$set(e.background,"backgroundSize",a)},expression:"background.backgroundSize"}},e._l(this.$$global_editor.backgroundSize,function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)],1)],1)],2)],1),t("el-dialog",{staticClass:"dialog-publish",attrs:{title:"\u9009\u62E9\u56FE\u7247",top:"10px","append-to-body":!0,"close-on-click-modal":!1,visible:e.dialogImage,width:e.imageWidth},on:{"update:visible":function(a){e.dialogImage=a}}},[t("div",[t("image-manage",{ref:"imageMange",attrs:{isDialog:!0,type:["image"]}})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:e.cancelImage}},[e._v("\u53D6 \u6D88")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.confirmImage}},[e._v("\u786E \u5B9A")])],1)])],1)},g=[],c=l(723400),n=l(582333),r=l(555616),d=l(721829),u={name:"back-ground",props:{background:{},title:{type:String,default:"\u80CC\u666F\u6837\u5F0F"},removeColor:{type:Boolean,default:!1},removeImage:{type:Boolean,default:!1},tooltip:{type:String,default:""}},components:{ImageManage:n.default,selectImg:d.Z},mixins:[c.j],data(){return{dialogImage:!1,imageWidth:"0px"}},mounted(){this.imageWidth=window.innerWidth-170+"px"},methods:{selectImage(i){let e=this;this.dialogImage=!0,setTimeout(function(){e.$refs.imageMange.getImageList(null),e.$refs.imageMange.setSelectImage(i)},500)},clearSelectImage(){this.background.backgroundImage="",this.getConfigData()},confirmImage(){let i=this.$refs.imageMange.getSelectImage();if(i!=null){if(this.$$global.fileType.image.indexOf(i.imageFileType)==-1){r.Message.warning("\u9009\u62E9\u7684\u4E0D\u662F\u56FE\u7247");return}this.dialogImage=!1,this.background.backgroundImage=i.fileUrlPath,this.getConfigData()}else r.Message.warning("\u672A\u9009\u62E9\u4EFB\u4F55\u56FE\u7247")},cancelImage(){this.dialogImage=!1},getConfigData(){this.$emit("getConfigData",this.background)}}},m=u,f=l(768141),p=(0,f.Z)(m,s,g,!1,null,"7287dbfe",null),v=p.exports},357986:function(h,o,l){l.r(o),l.d(o,{default:function(){return v}});var s=function(){var e=this,t=e._self._c;return t("div",[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v(" \u5168\u5C40\u6837\u5F0F")])]),t("vue-lazy-component",{staticClass:"my-collapse-media"},[t("el-form",{ref:"form",attrs:{size:"mini",model:e.currentWidget.config,"label-width":"65px"}},[t("el-form-item",{attrs:{label:"\u81EA\u52A8\u64AD\u653E"}},[t("el-switch",{attrs:{"active-value":"autoplay"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.autoplay,callback:function(a){e.$set(e.currentWidget.config,"autoplay",a)},expression:"currentWidget.config.autoplay"}})],1),t("el-form-item",{attrs:{label:"\u663E\u793A\u63A7\u4EF6"}},[t("el-switch",{attrs:{"active-value":"controls"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.controls,callback:function(a){e.$set(e.currentWidget.config,"controls",a)},expression:"currentWidget.config.controls"}})],1),t("el-form-item",{attrs:{label:"\u5FAA\u73AF\u64AD\u653E"}},[t("el-switch",{attrs:{"active-value":"loop"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.loop,callback:function(a){e.$set(e.currentWidget.config,"loop",a)},expression:"currentWidget.config.loop"}})],1),t("el-form-item",{attrs:{label:"\u9759\u97F3\u64AD\u653E"}},[t("el-switch",{attrs:{"active-value":"muted"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.muted,callback:function(a){e.$set(e.currentWidget.config,"muted",a)},expression:"currentWidget.config.muted"}})],1),t("el-form-item",{attrs:{label:"\u662F\u5426\u62C9\u4F38"}},[t("el-switch",{attrs:{"active-value":"muted"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.stretch,callback:function(a){e.$set(e.currentWidget.config,"stretch",a)},expression:"currentWidget.config.stretch"}})],1),!e.currentWidget.dataset[e.currentWidget.dataset.type].encode.url!=""?t("el-form-item",{attrs:{label:"\u89C6\u9891"}},[t("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{width:"200px"},attrs:{placeholder:"\u9009\u62E9\u89C6\u9891"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.src,callback:function(a){e.$set(e.currentWidget.config,"src",a)},expression:"currentWidget.config.src"}}),t("el-button",{attrs:{type:"primary"},on:{click:e.openSelectImage}},[e._v("\u9009\u62E9\u89C6\u9891")]),t("el-button",{attrs:{type:"primary",disabled:e.currentWidget.config.src==""},on:{click:e.clearSelectImage}},[e._v("\u91CD\u7F6E ")])],1):e._e()],1)],1)],2)],1),t("el-dialog",{staticClass:"my-image-dialog",staticStyle:{padding:"0px"},attrs:{title:"\u9009\u62E9\u89C6\u9891",top:"10px","append-to-body":!0,"close-on-click-modal":!1,visible:e.dialogVisible,width:e.dialogWidth},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("div",[t("image-manage",{ref:"imageMange",attrs:{isDialog:!0,type:["video"]}})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:e.cancelEidt}},[e._v("\u53D6 \u6D88")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.getImage}},[e._v("\u786E \u5B9A")])],1)])],1)},g=[],c=l(582333),n=l(555616),r=l(723400),d=l(822776),u={name:"video-single-style",components:{BackGround:d.Z,ImageManage:c.default},props:["currentWidget"],mixins:[r.j],data(){return{dialogVisible:!1,dialogWidth:"0px"}},mounted(){this.dialogWidth=window.innerWidth-170+"px"},methods:{openSelectImage(){let i=this;this.dialogVisible=!0,setTimeout(function(){i.$refs.imageMange.getImageList(null),i.$refs.imageMange.setSelectImage(i.currentWidget.config.src,"video")},500)},clearSelectImage(){this.currentWidget.config.src="",this.getConfigData()},getImage(){let i=this.$refs.imageMange.getSelectImage();if(i!=null){if(this.$$global.fileType.video.indexOf(i.imageFileType)==-1){n.Message.warning("\u9009\u62E9\u7684\u4E0D\u662F\u89C6\u9891");return}this.dialogVisible=!1,this.currentWidget.config.src=i.fileUrlPath,this.getConfigData()}else n.Message.warning("\u672A\u9009\u62E9\u4EFB\u4F55\u89C6\u9891")},cancelEidt(){this.dialogVisible=!1}}},m=u,f=l(768141),p=(0,f.Z)(m,s,g,!1,null,"370f438c",null),v=p.exports}}]);
