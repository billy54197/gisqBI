"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[35449],{635449:function(h,n,r){r.r(n),r.d(n,{default:function(){return y}});var s=function(){var e=this,a=e._self._c;return a("div",[a("el-form",{ref:"form",attrs:{size:"mini","label-width":"100px","label-position":"right",rules:e.rules,model:e.currentWidget.dataset}},[a("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:e.changeDatasetType},model:{value:e.currentWidget.dataset.type,callback:function(t){e.$set(e.currentWidget.dataset,"type",t)},expression:"currentWidget.dataset.type"}},e._l(this.$$global_editor.dataSourcTypeList3,function(t){return a("el-option",{key:t.value,attrs:{disabled:t.disabled,label:t.label,value:t.value}})}),1)],1),a("el-form-item",{staticClass:"default",attrs:{label:"\u9ED8\u8BA4\u9009\u9879"}},[a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"\u9ED8\u8BA4\u503C\u7C7B\u578B"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultValType,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"defaultValType",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.defaultValType"}},e._l(e.defaultValType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultValType==="static"?a("div",{staticStyle:{display:"inline-block"}},[a("el-input",{staticStyle:{width:"80px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u9ED8\u8BA4\u9009\u9879\u7684\u6807\u7B7E\u503C"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultVal,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"defaultVal",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.defaultVal"}})],1):e._e(),e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultValType==="dynamic"||e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultValType==="local"?a("div",{staticStyle:{display:"inline-block"}},[a("el-select",{staticStyle:{width:"80px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u9ED8\u8BA4\u9009\u9879\u7684\u53C2\u6570\u503C"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultParams,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"defaultParams",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.defaultParams"}},e._l(e.globalParams,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1):e._e(),e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultValType==="first"?a("div",{staticStyle:{display:"inline-block"}},[a("el-checkbox",{staticStyle:{"margin-left":"5px"},on:{change:function(t){return e.changeDefault()}},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.defaultFirst,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"defaultFirst",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.defaultFirst"}},[e._v("\u9996\u884C ")])],1):e._e()],1),a("el-form-item",{attrs:{label:"\u9009\u9879\u7684\u503C",prop:"value"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u5217\u9009\u9879\u503C\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.value,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"value",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.value"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!==""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u9009\u9879\u6807\u7B7E",prop:"label"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u9009\u9879\u6807\u7B7E\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.label,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"label",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.label"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!==""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u9009\u9879\u4E3B\u6807\u9898",prop:"title"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u4E3B\u6807\u9898\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.title,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"title",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.title"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!==""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u9009\u9879\u526F\u6807\u9898",prop:"subTitle"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u526F\u6807\u9898\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.subTitle,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"subTitle",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.subTitle"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!==""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u9009\u9879\u56FE\u6807",prop:"icon"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u56FE\u6807\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.icon,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"icon",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.icon"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!==""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u662F\u5426\u7981\u7528"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u7981\u7528\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.disabled,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"disabled",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.disabled"}},e._l(this.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!==""?t.alias:t.name,value:t.name}})}),1)],1),a("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:e.currentWidget},on:{getDataSetData:e.getConfigData,clearDynamicEncode:e.clearDynamicEncode}})],1)],1)},l=[],i=r(589908),c=r(723400),u=r(148836),o={name:"form-radio-group-data",components:{SettingDataset:i.Z},props:["currentWidget"],mixins:[c.j],computed:{...(0,u.Se)(["getCanvasSetting"]),canvasSetting(){return this.getCanvasSetting}},watch:{canvasSetting(){this.getGlobalParams()}},mounted(){this.getGlobalParams()},data(){return{globalParams:[],rules:{label:[{required:!0,message:"\u5FC5\u9009\uFF1A\u9009\u9879\u6807\u7B7E",trigger:"blur"}],title:[{required:!0,message:"\u5FC5\u9009\uFF1A\u9009\u9879\u6807\u7B7E",trigger:"blur"}],value:[{required:!0,message:"\u5FC5\u9009\uFF1A\u9009\u9879\u7684\u503C",trigger:"blur"}]},defaultValType:[{label:"\u8F93\u5165\u9759\u6001\u503C",value:"static"},{label:"\u5168\u5C40\u53D8\u91CF",value:"dynamic"},{label:"\u9996\u884C\u6570\u636E",value:"first"}]}},methods:{getGlobalParams(){let d=this;d.globalParams=[],this.$$lib__.each(this.canvasSetting.data.globalParams.params,(e,a)=>{d.globalParams.push({label:a,value:"globalParams_"+a})})},changeDatasetType(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.value=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.label=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.title=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.subTitle=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.icon=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.disabled=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.defaultVal=null,this.currentWidget.dataset[this.currentWidget.dataset.type].encode.defaultFirst=!1,this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.value="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.label="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.title="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.subTitle="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.icon="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.disabled="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.defaultVal="",this.currentWidget.dataset[this.currentWidget.dataset.type].encode.defaultFirst=!1,this.getConfigData()},changeDefault(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.defaultVal="",this.getConfigData()}}},g=o,p=r(768141),W=(0,p.Z)(g,s,l,!1,null,"16b71a63",null),y=W.exports}}]);
