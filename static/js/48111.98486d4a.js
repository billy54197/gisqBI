"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[48111],{248111:function(p,r,n){n.r(r),n.d(r,{default:function(){return g}});var d=function(){var e=this,a=e._self._c;return a("div",[a("el-form",{ref:"form",attrs:{size:"mini","label-width":"80px","label-position":"right",model:e.currentWidget.dataset}},[a("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:e.changeDatasetType},model:{value:e.currentWidget.dataset.type,callback:function(t){e.$set(e.currentWidget.dataset,"type",t)},expression:"currentWidget.dataset.type"}},e._l(this.$$global_editor.dataSourcTypeList3,function(t){return a("el-option",{key:t.value,attrs:{disabled:t.disabled,label:t.label,value:t.value}})}),1)],1),e.currentWidget.config.type.indexOf("range")>-1?a("div",[a("el-form-item",{attrs:{label:"\u5F00\u59CB\u65F6\u95F4"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultDate,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"defaultDate",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.defaultDate"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u7ED3\u675F\u65F6\u95F4"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultDateEnd,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"defaultDateEnd",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.defaultDateEnd"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1)],1):a("el-form-item",{attrs:{label:"\u9ED8\u8BA4\u503C"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u9ED8\u8BA4\u503C\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultDate,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"defaultDate",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.defaultDate"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:e.currentWidget},on:{getDataSetData:e.getConfigData,clearDynamicEncode:e.clearDynamicEncode}})],1)],1)},l=[],s=n(723400),i={name:"com-date-picker-data",components:{},props:["currentWidget"],data(){return{activeNames:["defaultDate"],defaultTypes:[{label:"\u5F53\u524D",value:"now"}]}},mixins:[s.j],methods:{changeDatasetType(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.defaultVal=null,this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.defaultVal="",this.getConfigData()}}},c=i,u=n(768141),o=(0,u.Z)(c,d,l,!1,null,"18f519ab",null),g=o.exports}}]);
