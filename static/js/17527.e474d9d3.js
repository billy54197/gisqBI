"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[17527],{517527:function(b,s,n){n.r(s),n.d(s,{default:function(){return W}});var c=function(){var e=this,a=e._self._c;return a("div",[a("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:e.currentWidget.dataset}},[a("el-form-item",{attrs:{label:"\u9009\u62E9\u5E95\u56FE"}},[a("layer-directory-single",{attrs:{"layer-id":e.currentWidget.config.baseLayer},on:{"on-layer-change":e.onLayerChangeBase}})],1),a("el-form-item",{attrs:{label:"\u9009\u62E9\u56FE\u5C42"}},[a("layer-directory-single",{attrs:{"layer-id":e.currentWidget.config.layerTag},on:{"on-layer-change":e.onLayerChangeTag}})],1),a("el-form-item",{attrs:{label:"\u884C\u653F\u533A"}},[a("el-select",{ref:"xzqSelect",attrs:{value:e.valueTitle}},[a("el-option",{attrs:{id:"xzq-select-tree",value:e.valueTitle,label:e.valueTitle}},[a("el-tree",{attrs:{data:e.$$region_data.citiesTree,"default-expanded-keys":["china"],"check-on-click-node":!0,"expand-on-click-node":!1,"node-key":"id","current-node-key":e.valueTitle},on:{"node-click":e.handleNodeClick}})],1)],1)],1),a("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[a("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:e.changeDatasetType},model:{value:e.currentWidget.dataset.type,callback:function(t){e.$set(e.currentWidget.dataset,"type",t)},expression:"currentWidget.dataset.type"}},e._l(e.$$global_editor.dataSourcTypeList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("vue-lazy-component",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.dataset.type==e.$$global_editor.dataSourcType.static.code,expression:"currentWidget.dataset.type == $$global_editor.dataSourcType.static.code"}]},[a("el-collapse",[a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"my-title"},[e._v("\u6570\u636E\u7ED1\u5B9A")])]),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u540D\u79F0"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u540D\u79F0"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.static.encode.name,callback:function(t){e.$set(e.currentWidget.dataset.static.encode,"name",t)},expression:"currentWidget.dataset.static.encode.name"}},e._l(e.currentWidget.dataset.static.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u5750\u6807"}},[a("el-select",{attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u5750\u6807"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.static.encode.positionPoint,callback:function(t){e.$set(e.currentWidget.dataset.static.encode,"positionPoint",t)},expression:"currentWidget.dataset.static.encode.positionPoint"}},e._l(e.currentWidget.dataset.static.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u5206\u7C7B"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u5206\u7C7B"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.static.encode.mode,callback:function(t){e.$set(e.currentWidget.dataset.static.encode,"mode",t)},expression:"currentWidget.dataset.static.encode.mode"}},e._l(e.currentWidget.dataset.static.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u6807\u6CE8"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u6807\u6CE8"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.static.encode.mark,callback:function(t){e.$set(e.currentWidget.dataset.static.encode,"mark",t)},expression:"currentWidget.dataset.static.encode.mark"}},e._l(e.currentWidget.dataset.static.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u63CF\u8FF0"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u63CF\u8FF0"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.static.encode.discription,callback:function(t){e.$set(e.currentWidget.dataset.static.encode,"discription",t)},expression:"currentWidget.dataset.static.encode.discription"}},e._l(e.currentWidget.dataset.static.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1)],2),a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"my-title"},[e._v("\u5B9A\u4F4D\u5206\u7C7B\u5B9A\u4E49")])]),a("el-form-item",{attrs:{label:"\u5206\u7EC4\u7C7B\u578B"}},[a("el-tooltip",{attrs:{content:"\u6DFB\u52A0\u5206\u7EC4\u7C7B\u578B","open-delay":1e3,effect:"light",placement:"top"}},[a("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13ce66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:e.addModel}})],1)],1),e._l(e.currentWidget.dataset.static.modeColor.custom,function(t,l){return a("el-form-item",{key:l,attrs:{label:"\u7C7B\u578B-"+(l+1)}},[a("el-input",{staticStyle:{width:"160px"},attrs:{placeholder:"\u5B9A\u4F4D\u5206\u7C7B\u7684\u7C7B\u578B"},model:{value:t.model,callback:function(r){e.$set(t,"model",r)},expression:"item.model"}}),a("i",{staticClass:"el-icon-delete",staticStyle:{color:"tomato",cursor:"pointer"},attrs:{title:"\u5220\u9664\u7C7B\u578B"},on:{click:function(r){return e.deleteModel(l)}}})],1)})],2)],1)],1),a("vue-lazy-component",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.dataset.type==e.$$global_editor.dataSourcType.dynamic.code,expression:"currentWidget.dataset.type == $$global_editor.dataSourcType.dynamic.code"}]},[a("el-collapse",[a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"my-title"},[e._v("\u6570\u636E\u7ED1\u5B9A")])]),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u540D\u79F0"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u540D\u79F0"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.dynamic.encode.name,callback:function(t){e.$set(e.currentWidget.dataset.dynamic.encode,"name",t)},expression:"currentWidget.dataset.dynamic.encode.name"}},e._l(e.currentWidget.dataset.dynamic.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u5750\u6807"}},[a("el-select",{attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u5750\u6807"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.dynamic.encode.positionPoint,callback:function(t){e.$set(e.currentWidget.dataset.dynamic.encode,"positionPoint",t)},expression:"currentWidget.dataset.dynamic.encode.positionPoint"}},e._l(e.currentWidget.dataset.dynamic.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u5206\u7C7B"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u5206\u7C7B"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.dynamic.encode.mode,callback:function(t){e.$set(e.currentWidget.dataset.dynamic.encode,"mode",t)},expression:"currentWidget.dataset.dynamic.encode.mode"}},e._l(e.currentWidget.dataset.dynamic.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u6807\u6CE8"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u6807\u6CE8"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.dynamic.encode.mark,callback:function(t){e.$set(e.currentWidget.dataset.dynamic.encode,"mark",t)},expression:"currentWidget.dataset.dynamic.encode.mark"}},e._l(e.currentWidget.dataset.dynamic.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5B9A\u4F4D\u63CF\u8FF0"}},[a("el-select",{attrs:{size:"mini",clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5B9A\u4F4D\u70B9\u7684\u63CF\u8FF0"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.dynamic.encode.discription,callback:function(t){e.$set(e.currentWidget.dataset.dynamic.encode,"discription",t)},expression:"currentWidget.dataset.dynamic.encode.discription"}},e._l(e.currentWidget.dataset.dynamic.dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1)],2),a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"my-title"},[e._v("\u5B9A\u4F4D\u5206\u7C7B\u5B9A\u4E49")])]),a("el-form-item",{attrs:{label:"\u5206\u7EC4\u7C7B\u578B"}},[a("el-tooltip",{attrs:{content:"\u6DFB\u52A0\u5206\u7EC4\u7C7B\u578B","open-delay":1e3,effect:"light",placement:"top"}},[a("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13ce66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:e.addModel}})],1)],1),e._l(e.currentWidget.dataset.dynamic.modeColor.custom,function(t,l){return a("el-form-item",{key:l,attrs:{label:"\u7C7B\u578B-"+(l+1)}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"\u5B9A\u4F4D\u5206\u7C7B\u7684\u7C7B\u578B"},model:{value:t.model,callback:function(r){e.$set(t,"model",r)},expression:"item.model"}}),a("el-tooltip",{attrs:{content:"\u5220\u9664\u7C7B\u578B","open-delay":1e3,effect:"light",placement:"top"}},[a("el-button",{staticClass:"el-icon-delete",staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(r){return e.deleteModel(l)}}})],1)],1)})],2)],1)],1),a("setting-dataset",{ref:"settingDataset",attrs:{"current-widget":e.currentWidget},on:{getDataSetData:e.getConfigData,clearDynamicEncode:e.clearDynamicEncode}})],1)],1)},o=[],d=n(589908),u=n(723400),g=n(846577),m=n(588406),p={name:"OlScatterMapData",components:{LayerDirectorySingle:m.Z,SettingDataset:d.Z},mixins:[u.j],props:["currentWidget"],data(){return{layerInfo:{baseLayer:{},layerTag:{}},valueTitle:this.currentWidget.config.xzqmc,defaultXzq:this.currentWidget.config.xzqdm}},computed:{KeyLengthLimit(){return 0}},methods:{changeDatasetType(){this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset.dynamic.encode.name="",this.currentWidget.dataset.dynamic.encode.mode="",this.currentWidget.dataset.dynamic.encode.positionPoint="",this.currentWidget.dataset.dynamic.encode.discription=""},handleNodeClick(i){this.valueTitle=i.label,this.currentWidget.config.xzqmc=i.label,this.currentWidget.config.xzqdm=i.id,this.getConfigData(),this.$refs.xzqSelect.blur()},addModel(){let i=JSON.parse(JSON.stringify(g.Z.map.gis.ol_scatter_map.dataset.static.modeColor.default));this.currentWidget.dataset.type==this.$$global_editor.dataSourcType.dynamic.code?(this.currentWidget.dataset.dynamic.modeColor.custom.push(i),this.currentWidget.dataset.dynamic.modeColor.imageMakerList.push("")):(this.currentWidget.dataset.static.modeColor.custom.push(i),this.currentWidget.dataset.static.modeColor.imageMakerList.push(""))},deleteModel(i){this.currentWidget.dataset.type==this.$$global_editor.dataSourcType.dynamic.code?(this.currentWidget.dataset.dynamic.modeColor.custom.splice(i,1),this.currentWidget.dataset.dynamic.modeColor.imageMakerList.splice(i,1)):(this.currentWidget.dataset.static.modeColor.custom.splice(i,1),this.currentWidget.dataset.static.modeColor.imageMakerList.splice(i,1)),this.getConfigData()},onLayerChangeBase(i){this.currentWidget.config.baseLayer=i.id,this.layerInfo.baseLayer=i,this.mapLayerPush(),this.getConfigData()},onLayerChangeTag(i){this.currentWidget.config.layerTag=i.id,this.layerInfo.layerTag=i,this.mapLayerPush(),this.getConfigData()},mapLayerPush(){this.currentWidget.mapLayer==null&&(this.currentWidget.mapLayer={toc:[]}),this.currentWidget.mapLayer.toc=[],this.$$lib__.isEmpty(this.layerInfo.baseLayer)||this.currentWidget.mapLayer.toc.push(JSON.parse(JSON.stringify(this.layerInfo.baseLayer))),this.$$lib__.isEmpty(this.layerInfo.layerTag)||this.currentWidget.mapLayer.toc.push(JSON.parse(JSON.stringify(this.layerInfo.layerTag)))},mapLayerPop(){if(this.currentWidget.mapLayer&&this.currentWidget.mapLayer.toc&&this.currentWidget.mapLayer.toc.length>0){if(this.currentWidget.config.baseLayer&&this.currentWidget.config.baseLayer!=""){let i=this.$$lib__.find(this.currentWidget.mapLayer.toc,e=>e.id==this.currentWidget.config.baseLayer);i&&(this.layerInfo.baseLayer=i)}if(this.currentWidget.config.layerTag&&this.currentWidget.config.layerTag!=""){let i=this.$$lib__.find(this.currentWidget.mapLayer.toc,e=>e.id==this.currentWidget.config.layerTag);i&&(this.layerInfo.layerTag=i)}}}}},y=p,f=n(768141),h=(0,f.Z)(y,c,o,!1,null,"3cdc561b",null),W=h.exports}}]);
