"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[54140],{454140:function(f,n,a){a.r(n),a.d(n,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",[e("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:t.currentWidget.dataset}},[e("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[e("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:t.changeDatasetType},model:{value:t.currentWidget.dataset.type,callback:function(s){t.$set(t.currentWidget.dataset,"type",s)},expression:"currentWidget.dataset.type"}},t._l(this.$$global_editor.dataSourcTypeList3,function(s){return e("el-option",{key:s.value,attrs:{label:s.label,value:s.value}})}),1)],1),e("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:t.currentWidget},on:{getDataSetData:t.getConfigData,clearDynamicEncode:t.clearDynamicEncode}})],1)],1)},i=[],c=a(589908),d=a(723400),l={name:"scatter-simple-data",components:{SettingDataset:c.Z},mixins:[d.j],props:["currentWidget"],data(){return{}},computed:{seriesList:function(){return this.currentWidget.config.series}},methods:{changeDatasetType(){this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.x="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.y=""}}},o=l,u=a(768141),g=(0,u.Z)(o,r,i,!1,null,"5318f0ec",null),p=g.exports}}]);
