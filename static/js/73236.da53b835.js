"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[73236],{813239:function(C,g,o){o.d(g,{Z:function(){return l}});var r=function(){var e=this,i=e._self._c;return i("div",[i("el-collapse",[i("el-collapse-item",[i("template",{slot:"title"},[i("div",{staticClass:"my-title"},[e._v(" \u56FE\u6807\u8BBE\u7F6E")])]),i("el-form",{staticStyle:{"padding-left":"20px"}},[i("el-form-item",{attrs:{label:"\u6309\u94AE\u7C7B\u578B"}},e._l(e.btnRadios,function(a,p){return i("el-radio",{key:p,attrs:{label:a.label},on:{change:e.getConfigData},model:{value:e.imgIconConfig.isHtml,callback:function(I){e.$set(e.imgIconConfig,"isHtml",I)},expression:"imgIconConfig.isHtml"}},[e._v(e._s(a.text)+" ")])}),1),e.imgIconConfig.isHtml?i("el-form-item",{attrs:{label:"\u663E\u793A\u5185\u5BB9"}},[i("el-input",{staticStyle:{width:"195px"},on:{blur:e.getConfigData},model:{value:e.imgIconConfig.html,callback:function(a){e.$set(e.imgIconConfig,"html",a)},expression:"imgIconConfig.html"}})],1):i("div",[e.isHideText?e._e():i("el-form-item",{attrs:{label:"\u56FE\u6807\u7C7B\u578B"}},e._l(e.radios,function(a,p){return i("el-radio",{key:p,attrs:{label:a.label},on:{change:e.iconTypeChange},model:{value:e.imgIconConfig.isImg,callback:function(I){e.$set(e.imgIconConfig,"isImg",I)},expression:"imgIconConfig.isImg"}},[e._v(e._s(a.text)+" ")])}),1),e.imgIconConfig.isImg?i("el-form-item",{attrs:{label:"\u56FE\u6807\u9009\u62E9"}},[i("select-img",{attrs:{image:e.imgIcon},on:{openSelectImage:function(a){return e.openSelectImage()},clearSelectImage:function(a){return e.clearSelectImage()},change:e.getConfigData}})],1):i("div",[i("el-form-item",{attrs:{label:"\u6587\u5B57\u5185\u5BB9"}},[i("el-input",{staticStyle:{width:"195px"},on:{blur:e.getConfigData},model:{value:e.imgIconConfig.title,callback:function(a){e.$set(e.imgIconConfig,"title",a)},expression:"imgIconConfig.title"}})],1),i("el-form-item",{attrs:{label:"\u5B57\u4F53\u5927\u5C0F"}},[i("el-input-number",{attrs:{step:1,min:5,max:40},on:{change:e.getConfigData},model:{value:e.imgIconConfig.size,callback:function(a){e.$set(e.imgIconConfig,"size",a)},expression:"imgIconConfig.size"}})],1)],1),e.imgIconConfig.isImg?i("el-form-item",{attrs:{label:e.widthLabel}},[i("el-input-number",{attrs:{step:1,min:15},on:{change:e.getConfigData},model:{value:e.imgIconConfig.width,callback:function(a){e.$set(e.imgIconConfig,"width",a)},expression:"imgIconConfig.width"}})],1):e._e(),e.imgIconConfig.isImg?i("el-form-item",{attrs:{label:e.heightLabel}},[i("el-input-number",{attrs:{step:1,min:15},on:{change:e.getConfigData},model:{value:e.imgIconConfig.height,callback:function(a){e.$set(e.imgIconConfig,"height",a)},expression:"imgIconConfig.height"}})],1):e._e()],1)],1)],2)],1),i("el-dialog",{staticClass:"my-image-dialog",staticStyle:{padding:"0px"},attrs:{title:"\u9009\u62E9\u56FE\u7247",top:"10px","append-to-body":!0,visible:e.dialogVisible,width:e.dialogWidth},on:{"update:visible":function(a){e.dialogVisible=a}}},[i("div",[i("image-manage",{ref:"imageMange",attrs:{isDialog:!0,type:["image"]}})],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:e.cancelEidt}},[e._v("\u53D6 \u6D88")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.getImage}},[e._v("\u786E \u5B9A")])],1)])],1)},m=[],f=o(723400),u=o(721829),d=o(582333),b=o(321300),s=o(555616),h={props:["imgIconConfig","isHideText"],name:"gis-widget-icon",mixins:[f.j],components:{selectImg:u.Z,ImageManage:d.default},data(){return{formLabelWidth:"120px",imgIcon:"",widthLabel:this.imgIconConfig.isImg?"\u56FE\u6807\u5BBD\u5EA6":"\u6309\u94AE\u5BBD\u5EA6",heightLabel:this.imgIconConfig.isImg?"\u56FE\u6807\u9AD8\u5EA6":"\u6309\u94AE\u9AD8\u5EA6",dialogVisible:!1,dialogWidth:"89%",radios:[{label:!0,text:"\u56FE\u7247"},{label:!1,text:"\u6587\u5B57"}],btnRadios:[{label:!1,text:"\u6807\u51C6\u6309\u94AE"},{label:!0,text:"html\u4EE3\u7801"}]}},mounted(){this.imgIconConfig.img&&this.imgIconConfig.img.indexOf("/images/")!==-1&&(this.imgIcon="/images/"+this.imgIconConfig.img.split("/images/")[1])},methods:{openSelectImage(){this.dialogVisible=!0},clearSelectImage(){this.imgIcon="",this.imgIconConfig.img="",this.getConfigData()},getImage(){let n=this.$refs.imageMange.getSelectImage();if(n!=null){if(this.$$global.fileType.image.indexOf(n.imageFileType)==-1){s.Message.warning("\u9009\u62E9\u7684\u4E0D\u662F\u56FE\u7247");return}this.dialogVisible=!1;let e=b.appendImageBaseURL(n.fileUrlPath);this.imgIconConfig.img=e,this.imgIcon=n.fileUrlPath,this.getConfigData()}else s.Message.warning("\u672A\u9009\u62E9\u4EFB\u4F55\u56FE\u7247")},cancelEidt(){this.dialogVisible=!1},iconTypeChange(){this.widthLabel=this.imgIconConfig.isImg?"\u56FE\u6807\u5BBD\u5EA6":"\u6309\u94AE\u5BBD\u5EA6",this.heightLabel=this.imgIconConfig.isImg?"\u56FE\u6807\u9AD8\u5EA6":"\u6309\u94AE\u9AD8\u5EA6",this.getConfigData()},getConfigData(){this.$emit("gisWidgetIconChange",this.imgIconConfig)}}},v=h,c=o(768141),t=(0,c.Z)(v,r,m,!1,null,"7061a458",null),l=t.exports},473236:function(C,g,o){o.r(g),o.d(g,{default:function(){return v}});var r=function(){var t=this,l=t._self._c;return l("vue-lazy-component",[l("el-collapse",[l("el-collapse-item",[l("template",{slot:"title"},[l("div",{staticClass:"my-title"},[t._v("\u5F39\u6846\u6837\u5F0F")])]),l("vue-lazy-component",{staticClass:"my-collapse-text"},[l("el-form",{ref:"form",attrs:{size:"mini",model:t.currentWidget.config,"label-width":"75px"}},[l("el-form-item",{attrs:{label:"\u89E6\u53D1\u65B9\u5F0F"}},[l("el-select",{model:{value:t.currentWidget.config.buttonStyle.trigger,callback:function(n){t.$set(t.currentWidget.config.buttonStyle,"trigger",n)},expression:"currentWidget.config.buttonStyle.trigger"}},t._l(t.trigger,function(n){return l("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}),1)],1),l("el-form-item",{attrs:{label:"\u5F39\u6846\u4F4D\u7F6E"}},[l("el-select",{model:{value:t.currentWidget.config.buttonStyle.placement,callback:function(n){t.$set(t.currentWidget.config.buttonStyle,"placement",n)},expression:"currentWidget.config.buttonStyle.placement"}},t._l(t.placement,function(n){return l("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}),1)],1),l("el-form-item",{attrs:{label:"\u5F39\u6846\u504F\u79FB"}},[l("el-input-number",{staticClass:"my-style-number",attrs:{"controls-position":"right"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.buttonStyle.offset,callback:function(n){t.$set(t.currentWidget.config.buttonStyle,"offset",n)},expression:"currentWidget.config.buttonStyle.offset"}})],1),l("el-form-item",{attrs:{label:"\u662F\u5426\u53EF\u7528"}},[l("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.buttonStyle.disabled,callback:function(n){t.$set(t.currentWidget.config.buttonStyle,"disabled",n)},expression:"currentWidget.config.buttonStyle.disabled"}})],1),l("el-form-item",{attrs:{label:"\u662F\u5426\u53EF\u89C1"}},[l("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.buttonStyle.value,callback:function(n){t.$set(t.currentWidget.config.buttonStyle,"value",n)},expression:"currentWidget.config.buttonStyle.value"}})],1),l("el-form-item",{attrs:{label:"\u6E10\u53D8\u51FA\u73B0"}},[l("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.buttonStyle.transition,callback:function(n){t.$set(t.currentWidget.config.buttonStyle,"transition",n)},expression:"currentWidget.config.buttonStyle.transition"}})],1),l("el-form-item",{attrs:{label:"\u663E\u793A\u7BAD\u5934"}},[l("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.buttonStyle.arrow,callback:function(n){t.$set(t.currentWidget.config.buttonStyle,"arrow",n)},expression:"currentWidget.config.buttonStyle.arrow"}})],1)],1)],1)],2)],1),l("gis-widget-icon",{attrs:{isHideText:!0,imgIconConfig:t.currentWidget.config.imgIconConfig},on:{gisWidgetIconChange:t.iconChange}})],1)},m=[],f=o(723400),u=o(813239),d={name:"a-i-style",props:["currentWidget"],mixins:[f.j],components:{gisWidgetIcon:u.Z},data(){return{trigger:[{value:"click",label:"\u70B9\u51FB\u6FC0\u6D3B"},{value:"focus",label:"\u805A\u7126\u6FC0\u6D3B"},{value:"hover",label:"\u60AC\u505C\u6FC0\u6D3B"},{value:"manual",label:"\u624B\u52A8\u6FC0\u6D3B"}],placement:[{value:"top",label:"\u4E0A\u90E8"},{value:"top-start",label:"\u5DE6\u4E0A"},{value:"top-end",label:"\u53F3\u4E0A"},{value:"bottom",label:"\u4E0B\u90E8"},{value:"bottom-start",label:"\u5DE6\u4E0B"},{value:"bottom-end",label:"\u53F3\u4E0B"},{value:"left",label:"\u5DE6\u90E8"},{value:"left-start",label:"\u5DE6\u4E0A"},{value:"left-end",label:"\u5DE6\u4E0B"},{value:"right",label:"\u53F3\u90E8"},{value:"right-start",label:"\u53F3\u4E0A"},{value:"right-end",label:"\u53F3\u4E0B"}]}},methods:{iconChange(c){this.currentWidget.config.imgIconConfig=c,this.getConfigData()}}},b=d,s=o(768141),h=(0,s.Z)(b,r,m,!1,null,"fd988f2e",null),v=h.exports}}]);
