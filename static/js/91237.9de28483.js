"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[91237],{591237:function(m,r,n){n.r(r),n.d(r,{default:function(){return p}});var i=function(){var t=this,a=t._self._c;return a("div",[a("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:t.currentWidget.dataset}},[a("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[a("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:t.changeDatasetType},model:{value:t.currentWidget.dataset.type,callback:function(e){t.$set(t.currentWidget.dataset,"type",e)},expression:"currentWidget.dataset.type"}},t._l(this.$$global_editor.dataSourcTypeList3,function(e){return a("el-option",{key:e.value,attrs:{disabled:e.disabled,label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"\u6587\u672C\u5185\u5BB9"}},[t.currentWidget.dataset[t.currentWidget.dataset.type].dimensionsAlias&&t.currentWidget.dataset[t.currentWidget.dataset.type].dimensionsAlias.length>0?a("el-select",{attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u6587\u672C\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:t.getConfigData},model:{value:t.currentWidget.dataset[t.currentWidget.dataset.type].encode.text,callback:function(e){t.$set(t.currentWidget.dataset[t.currentWidget.dataset.type].encode,"text",e)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.text"}},t._l(t.currentWidget.dataset[t.currentWidget.dataset.type].dimensionsAlias,function(e){return a("el-option",{key:e.name,attrs:{label:e.alias!=""?e.alias:e.name,value:e.name}})}),1):a("el-input",{staticStyle:{width:"195px"},on:{change:t.getConfigData},model:{value:t.currentWidget.dataset[t.currentWidget.dataset.type].encode.text,callback:function(e){t.$set(t.currentWidget.dataset[t.currentWidget.dataset.type].encode,"text",e)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.text"}})],1),a("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:t.currentWidget},on:{getDataSetData:t.getConfigData,clearDynamicEncode:t.clearDynamicEncode}})],1)],1)},s=[],d=n(723400),l=n(589908),c={name:"title-anime-data",components:{SettingDataset:l.Z},props:["currentWidget"],mixins:[d.j],methods:{changeDatasetType(){this.currentWidget.dataset.type!=this.$$global_editor.dataSourcType.static.code&&this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.text=""}}},o=c,u=n(768141),g=(0,u.Z)(o,i,s,!1,null,"261cd052",null),p=g.exports}}]);
