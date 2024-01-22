"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[82872],{582872:function(N,f,r){r.r(f),r.d(f,{default:function(){return k}});var p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"bubble-setting"},[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u6563\u70B9\u8BBE\u7F6E")])]),t("vue-lazy-component",[t("el-form",[t("el-form-item",{attrs:{label:"\u884C\u653F\u533A\u5212"}},[t("el-select",{ref:"xzqSelect",attrs:{value:e.valueTitle}},[t("el-option",{attrs:{id:"xzq-select-tree",value:e.valueTitle,label:e.valueTitle}},[t("el-tree",{attrs:{data:e.$$region_data.citiesTree,"default-expanded-keys":["china"],"check-on-click-node":!0,"expand-on-click-node":!1,"node-key":"id","current-node-key":e.valueTitle},on:{"node-click":e.handleNodeClick}})],1)],1)],1),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u6563\u70B9\u6837\u5F0F")])]),t("el-form-item",{attrs:{label:"\u6563\u70B9\u5BBD\u5EA6"}},[t("el-input-number",{staticClass:"inputNum",attrs:{"controls-position":"right",step:1,max:100,min:0},on:{change:e.getConfigData},model:{value:e.currentWidget.config.pointIcon.width,callback:function(i){e.$set(e.currentWidget.config.pointIcon,"width",i)},expression:"currentWidget.config.pointIcon.width"}}),e._v(" px ")],1),t("el-form-item",{attrs:{label:"\u6563\u70B9\u9AD8\u5EA6"}},[t("el-input-number",{staticClass:"inputNum",attrs:{"controls-position":"right",step:1,max:100,min:0},on:{change:e.getConfigData},model:{value:e.currentWidget.config.pointIcon.height,callback:function(i){e.$set(e.currentWidget.config.pointIcon,"height",i)},expression:"currentWidget.config.pointIcon.height"}}),e._v(" px ")],1),t("el-form-item",{attrs:{label:"\u6563\u70B9\u7C7B\u578B"}},e._l(e.radios,function(i,a){return t("el-radio",{key:a,attrs:{label:i.label},on:{change:e.manageGetBoardConfigData},model:{value:e.currentWidget.config.pointIcon.isShowImg,callback:function(o){e.$set(e.currentWidget.config.pointIcon,"isShowImg",o)},expression:"currentWidget.config.pointIcon.isShowImg"}},[e._v(e._s(i.text)+" ")])}),1),e._l(e.currentWidget.config.categoryObj,function(i,a){return t("el-form-item",{key:a,attrs:{label:i.type}},[e.currentWidget.config.pointIcon.isShowImg?t("select-img",{attrs:{image:i.imgBI},on:{openSelectImage:function(o){return e.openSelectImage(i)},clearSelectImage:function(o){return e.clearSelectImage(i)},change:e.manageGetBoardConfigData}}):t("el-row",[t("el-col",{attrs:{span:13}},[t("el-input",{attrs:{placeholder:i.type},on:{change:e.manageGetBoardConfigData},model:{value:e.currentWidget.config.categoryObj[a].color,callback:function(o){e.$set(e.currentWidget.config.categoryObj[a],"color",o)},expression:"currentWidget.config.categoryObj[i].color"}})],1),t("el-col",{attrs:{span:4}},[t("el-color-picker",{staticStyle:{"margin-left":"5px","vertical-align":"center"},attrs:{"show-alpha":"",predefine:e.predefineColors},on:{change:function(o){return e.changePicker("categoryObj"+a,e.currentWidget.config.categoryObj[a].color)}},model:{value:e.currentWidget.config.categoryObj[a].color,callback:function(o){e.$set(e.currentWidget.config.categoryObj[a],"color",o)},expression:"currentWidget.config.categoryObj[i].color"}})],1)],1)],1)})],2)],1),t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u884C\u653F\u533A\u914D\u7F6E")])]),t("el-form",[t("el-form-item",{attrs:{label:"\u884C\u653F\u533A\u540D"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.xzqOption.isShowXzqName,callback:function(i){e.$set(e.currentWidget.config.xzqOption,"isShowXzqName",i)},expression:"currentWidget.config.xzqOption.isShowXzqName"}})],1),t("el-form-item",{attrs:{label:"\u662F\u5426\u4E0B\u94BB"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.isDrill,callback:function(i){e.$set(e.currentWidget.config,"isDrill",i)},expression:"currentWidget.config.isDrill"}})],1),e.currentWidget.config.isDrill?t("el-form-item",{attrs:{label:"\u4E0B\u94BB\u951A\u70B9"}},e._l(e.drillAnchor,function(i,a){return t("el-radio",{key:a,attrs:{label:i.label},on:{change:e.manageGetBoardConfigData},model:{value:e.currentWidget.config.drillFromMouse,callback:function(o){e.$set(e.currentWidget.config,"drillFromMouse",o)},expression:"currentWidget.config.drillFromMouse"}},[e._v(e._s(i.text)+" ")])}),1):e._e(),t("el-form-item",{attrs:{label:"\u540D\u79F0\u5B57\u6BB5"}},[t("el-input",{staticStyle:{width:"195px"},model:{value:e.currentWidget.config.xzqOption.xzqmc_field,callback:function(i){e.$set(e.currentWidget.config.xzqOption,"xzqmc_field",i)},expression:"currentWidget.config.xzqOption.xzqmc_field"}})],1),e.isVectorColor?t("el-form-item",{attrs:{label:"\u5730\u56FE\u586B\u5145"}},[t("el-row",[t("el-col",{attrs:{span:13}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u586B\u5145\u989C\u8272"},on:{change:e.manageGetBoardConfigData},model:{value:e.currentWidget.config.xzqOption.xzqFill,callback:function(i){e.$set(e.currentWidget.config.xzqOption,"xzqFill",i)},expression:"currentWidget.config.xzqOption.xzqFill"}})],1),t("el-col",{attrs:{span:4}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.xzqOption.xzqFill,callback:function(i){e.$set(e.currentWidget.config.xzqOption,"xzqFill",i)},expression:"currentWidget.config.xzqOption.xzqFill"}})],1)],1)],1):e._e(),e.isVectorColor?t("el-form-item",{attrs:{label:"\u5730\u56FE\u8FB9\u754C"}},[t("el-row",[t("el-col",{attrs:{span:13}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u8FB9\u754C\u989C\u8272"},on:{change:e.manageGetBoardConfigData},model:{value:e.currentWidget.config.xzqOption.xzqBorder,callback:function(i){e.$set(e.currentWidget.config.xzqOption,"xzqBorder",i)},expression:"currentWidget.config.xzqOption.xzqBorder"}})],1),t("el-col",{attrs:{span:4}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.xzqOption.xzqBorder,callback:function(i){e.$set(e.currentWidget.config.xzqOption,"xzqBorder",i)},expression:"currentWidget.config.xzqOption.xzqBorder"}})],1)],1)],1):e._e(),e.isVectorColor?t("el-form-item",{attrs:{label:"\u7F29\u653E\u6BD4\u4F8B"}},[t("el-input-number",{staticClass:"inputNum",attrs:{"controls-position":"right",step:.02,min:.5,max:5,label:""},on:{change:e.getConfigData},model:{value:e.currentWidget.config.zoomRatio,callback:function(i){e.$set(e.currentWidget.config,"zoomRatio",i)},expression:"currentWidget.config.zoomRatio"}})],1):e._e()],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u6807\u6CE8\u914D\u7F6E")])]),t("el-form",[t("el-form-item",{attrs:{label:"\u663E\u793A\u6807\u6CE8"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.isShowTargetName,callback:function(i){e.$set(e.currentWidget.config.scatterOption,"isShowTargetName",i)},expression:"currentWidget.config.scatterOption.isShowTargetName"}})],1),e.currentWidget.config.scatterOption.isShowTargetName?t("div",[t("el-form-item",{attrs:{label:"\u6807\u6CE8\u5B57\u6BB5"}},[t("el-input",{staticStyle:{width:"195px"},model:{value:e.currentWidget.config.scatterOption.targetField,callback:function(i){e.$set(e.currentWidget.config.scatterOption,"targetField",i)},expression:"currentWidget.config.scatterOption.targetField"}})],1),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u6807\u6CE8\u6837\u5F0F")])]),t("el-form",[t("el-form-item",{attrs:{label:"\u6807\u6CE8\u4E0B\u79FB"}},[t("el-input-number",{staticClass:"inputNum",attrs:{"controls-position":"right",step:1,max:100,min:-100},on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.targetName.top,callback:function(i){e.$set(e.currentWidget.config.scatterOption.targetName,"top",i)},expression:"currentWidget.config.scatterOption.targetName.top"}}),e._v(" px ")],1),t("el-form-item",{attrs:{label:"\u6807\u6CE8\u53F3\u79FB"}},[t("el-input-number",{staticClass:"inputNum",attrs:{"controls-position":"right",step:1,max:100,min:-100},on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.targetName.left,callback:function(i){e.$set(e.currentWidget.config.scatterOption.targetName,"left",i)},expression:"currentWidget.config.scatterOption.targetName.left"}}),e._v(" px ")],1),t("el-collapse-item",{attrs:{title:"\u5B57\u4F53"}},[t("el-form",{ref:"form",attrs:{size:"mini",model:e.fontStyle,"label-width":"80px"},nativeOn:{submit:function(i){i.preventDefault()}}},[t("el-form-item",{attrs:{label:"\u5B57\u53F7"}},[t("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{placeholder:"\u5B57\u53F7\u5927\u5C0F","controls-position":"right",step:.5,min:10,max:100},on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.targetName.size,callback:function(i){e.$set(e.currentWidget.config.scatterOption.targetName,"size",i)},expression:"currentWidget.config.scatterOption.targetName.size"}})],1),t("el-form-item",{attrs:{label:"\u5B57\u4F53"}},[t("el-select",{staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5B57\u4F53"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.targetName.family,callback:function(i){e.$set(e.currentWidget.config.scatterOption.targetName,"family",i)},expression:`
                                                            currentWidget.config.scatterOption.targetName.family
                                                        `}},e._l(e.$$global_editor.fontFamily,function(i){return t("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}),1)],1),t("el-form-item",{attrs:{label:"\u5B57\u4F53\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.targetName.color,callback:function(i){e.$set(e.currentWidget.config.scatterOption.targetName,"color",i)},expression:`
                                                                    currentWidget.config.scatterOption.targetName
                                                                        .color
                                                                `}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.targetName.color,callback:function(i){e.$set(e.currentWidget.config.scatterOption.targetName,"color",i)},expression:`
                                                                    currentWidget.config.scatterOption.targetName
                                                                        .color
                                                                `}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u5B57\u4F53\u6837\u5F0F"}},[t("el-checkbox-button",{attrs:{"true-label":"bolder","false-label":"normal"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.scatterOption.targetName.weight,callback:function(i){e.$set(e.currentWidget.config.scatterOption.targetName,"weight",i)},expression:`
                                                            currentWidget.config.scatterOption.targetName.weight
                                                        `}},[t("i",{staticClass:"iconfont bi_bold"})])],1)],1)],1)],1)],2)],1):e._e()],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u56FE\u4F8B\u914D\u7F6E")])]),t("el-form",[t("el-form-item",{attrs:{label:"\u662F\u5426\u663E\u793A"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.legendConfig.isShow,callback:function(i){e.$set(e.currentWidget.config.legendConfig,"isShow",i)},expression:"currentWidget.config.legendConfig.isShow"}})],1),e.currentWidget.config.legendConfig.isShow?t("el-form-item",{attrs:{label:"\u56FE\u4F8B\u6807\u9898"}},[t("el-switch",{on:{change:e.showLegendTitleFun},model:{value:e.showLegendTitle,callback:function(i){e.showLegendTitle=i},expression:"showLegendTitle"}})],1):e._e(),e.currentWidget.config.legendConfig.isShow?t("el-form-item",{attrs:{label:"\u56FE\u4F8B\u4F4D\u7F6E"}},[t("el-input",{staticStyle:{width:"195px"},attrs:{value:"bottom:100px;right:20px;"},on:{blur:e.getConfigData},model:{value:e.currentWidget.config.legendConfig.style,callback:function(i){e.$set(e.currentWidget.config.legendConfig,"style",i)},expression:"currentWidget.config.legendConfig.style"}})],1):e._e(),e.currentWidget.config.legendConfig.isShow?t("el-form-item",{attrs:{label:"\u900F\u660E\u5EA6"}},[t("el-input-number",{attrs:{"controls-position":"right",step:.1,min:0,max:1,label:""},on:{change:e.getConfigData},model:{value:e.currentWidget.config.legendConfig.opacity,callback:function(i){e.$set(e.currentWidget.config.legendConfig,"opacity",i)},expression:"currentWidget.config.legendConfig.opacity"}})],1):e._e()],1)],2)],1)],1)],2)],1),t("el-dialog",{staticClass:"my-image-dialog",staticStyle:{padding:"0px"},attrs:{title:"\u9009\u62E9\u56FE\u7247",top:"10px","append-to-body":!0,"close-on-click-modal":!1,visible:e.dialogVisible,width:e.dialogWidth},on:{"update:visible":function(i){e.dialogVisible=i}}},[t("div",[t("image-manage",{ref:"imageMange",attrs:{"is-dialog":!0,type:["image"]}})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:e.cancelEidt}},[e._v("\u53D6 \u6D88")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.getImage}},[e._v("\u786E \u5B9A")])],1)])],1)},h=[],b=r(723400),W=r(721829),x=r(582333),d=r(555616),y=r(321300),v=r(66715),u=r(149500),C={name:"GisThemeScatterStyle",components:{ImageManage:x.default,selectImg:W.Z},mixins:[b.j],props:["currentWidget"],data(){return{config:null,dialogWidth:"89%",showLegendTitle:!0,layerType:this.currentWidget.config.xzqOption.layerType,dialogVisible:!1,valueTitle:this.currentWidget.config.xzqmc,predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)"],fontStyle:{fontFamily:this.currentWidget.config.scatterOption.targetName.family,fontWeight:this.currentWidget.config.scatterOption.targetName.family,fontSize:this.currentWidget.config.scatterOption.targetName.weight,color:this.currentWidget.config.scatterOption.targetName.color},radios:[{label:!0,text:"\u56FE\u7247"},{label:!1,text:"\u81EA\u5B9A\u4E49"}],drillAnchor:[{label:!0,text:"\u9F20\u6807\u4F4D\u7F6E"},{label:!1,text:"\u5C4F\u5E55\u4E2D\u5FC3"}]}},computed:{dataset(){return this.currentWidget?this.currentWidget.dataset:{}}},watch:{dataset(n){u.log(n),this.changeCategoryObj(n)}},created(){},mounted(){},methods:{showLegendTitleFun(){this.currentWidget.config.legendConfig.hideTitle=!this.showLegendTitle,this.getConfigData()},clearSelectImage(n){n.img="",n.imgBI="",this.manageGetBoardConfigData()},changePicker(n,e){let t=`this.currentWidget.config.${n}`;t=e,this.manageGetBoardConfigData()},getImage(){let n=this.$refs.imageMange.getSelectImage();if(n!=null){if(this.$$global.fileType.image.indexOf(n.imageFileType)==-1){d.Message.warning("\u9009\u62E9\u7684\u4E0D\u662F\u56FE\u7247");return}this.dialogVisible=!1;let e=this,t=-1,i=this.currentWidget.config.categoryObj.filter((o,s)=>(u.log(o),o.type==e.selectScatterName&&(t=s),o.type==e.selectScatterName));this.currentWidget.config.categoryObj[t].imgBI=n.fileUrlPath;let a=y.appendImageBaseURL(n.fileUrlPath);this.currentWidget.config.categoryObj[t].img=a,this.manageGetBoardConfigData()}else d.Message.warning("\u672A\u9009\u62E9\u4EFB\u4F55\u56FE\u7247")},manageGetBoardConfigData(){setTimeout(this.getConfigData(),500)},cancelEidt(){this.dialogVisible=!1},openSelectImage(n){let e=this;this.dialogVisible=!0,setTimeout(function(){e.$refs.imageMange.getImageList(null),e.$refs.imageMange.setSelectImage(n.img),e.selectScatterName=n.type},500)},isVectorColor(){let n=this.currentWidget.config.layerType;return n==="geoserver-wfs"||n==="dynamic"},onLayerChange(n){n.url?(this.currentWidget.config.layerid=n.id,this.currentWidget.config.layerUrl=n.url,this.currentWidget.config.layerType=n.type,this.layerType=n.type,this.layerType&&this.layerType.slice(0,3)!=="geo"&&(this.currentWidget.config.layerType="arc-vector"),this.currentWidget.config.layerName=n.visibleLayers[0]):(this.currentWidget.config.layerid="",this.currentWidget.config.layerUrl=""),this.getConfigData()},handleNodeClick(n){this.valueTitle=n.label,this.currentWidget.config.xzqmc=n.label,this.currentWidget.config.xzqdm=n.id,this.currentWidget.config.currentXZQ=n.id,this.getConfigData(),this.$refs.xzqSelect.blur()},fontStyleChange(n){},changeCategoryObj(n){const e=n.type,t=n[e],i=t.source;let a=t.dimensions,o=t.encode.type,s=a.indexOf(o),c=[];i.forEach((l,$)=>{c.indexOf(l[s])==-1&&c.push(l[s])});const S=this.currentWidget.config.categoryObj,m=[],g=S.filter(l=>(m.push(l.type),c.includes(l.type)));g.length!==c&&(c.forEach(l=>{m.includes(l)||g.push({type:l,color:v.Z.color16(),img:""})}),this.$set(this.currentWidget.config,"categoryObj",g))}}},O=C,z=r(768141),w=(0,z.Z)(O,p,h,!1,null,"46d8e0a4",null),k=w.exports}}]);
