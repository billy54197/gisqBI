"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[31876],{531876:function(f,r,n){n.r(r),n.d(r,{default:function(){return p}});var s=function(){var e=this,a=e._self._c;return a("vue-lazy-component",[a("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:e.currentWidget.dataset}},[a("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[a("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:e.changeDatasetType},model:{value:e.currentWidget.dataset.type,callback:function(t){e.$set(e.currentWidget.dataset,"type",t)},expression:"currentWidget.dataset.type"}},e._l(this.$$global_editor.dataSourcTypeList3,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("el-form-item",{attrs:{label:"\u540D\u79F0"}},[a("el-select",{ref:"encodeX",attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u540D\u79F0\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.x,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"x",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.x"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u6570\u503C"}},[a("el-select",{ref:"encodeY",attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u6570\u503C\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.y,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"y",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.y"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:e.currentWidget},on:{getDataSetData:e.getConfigData,clearDynamicEncode:e.clearDynamicEncode}})],1)],1)},d=[],i=n(589908),l=n(723400),c={name:"pie-doughnut-data",components:{SettingDataset:i.Z},props:["currentWidget"],mixins:[l.j],data(){return{}},methods:{changeDatasetType(){this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.x=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.y=null}}},o=c,u=n(768141),g=(0,u.Z)(o,s,d,!1,null,"7fb2dc82",null),p=g.exports}}]);
