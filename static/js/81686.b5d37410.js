"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[81686],{481686:function(p,r,n){n.r(r),n.d(r,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-form",{ref:"form",attrs:{size:"mini","label-width":"100px","label-position":"right",model:t.currentWidget.dataset}},[e("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[e("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:t.changeDatasetType},model:{value:t.currentWidget.dataset.type,callback:function(a){t.$set(t.currentWidget.dataset,"type",a)},expression:"currentWidget.dataset.type"}},t._l(this.$$global_editor.dataSourcTypeList3,function(a){return e("el-option",{key:a.value,attrs:{disabled:a.disabled,label:a.label,value:a.value}})}),1)],1),e("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:t.currentWidget},on:{getDataSetData:t.getConfigData,clearDynamicEncode:t.clearDynamicEncode}})],1)],1)},i=[],l=n(589908),o=n(723400),d={name:"form-location-data",components:{SettingDataset:l.Z},props:["currentWidget"],mixins:[o.j],methods:{changeDatasetType(){this.currentWidget.dataset.type!=this.$$global_editor.dataSourcType.static.code&&this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){}}},c=d,u=n(768141),g=(0,u.Z)(c,s,i,!1,null,"a194621c",null),f=g.exports}}]);
