"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[12224],{838732:function(v,c,i){i.r(c),i.d(c,{default:function(){return h}});var l=function(){var e=this,a=e._self._c;return a("div",[a("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:e.currentWidget.dataset}},[a("el-form-item",{staticClass:"my-collapse",attrs:{label:"\u884C\u653F\u533A\u57DF"}},[a("select-tree-region-code",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u5730\u56FE\u533A\u57DF"},on:{"select-tree-click":e.selectTreeClick},model:{value:e.currentWidget.config.regionCode,callback:function(t){e.$set(e.currentWidget.config,"regionCode",t)},expression:"currentWidget.config.regionCode"}})],1),a("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[a("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:e.changeDatasetType},model:{value:e.currentWidget.dataset.type,callback:function(t){e.$set(e.currentWidget.dataset,"type",t)},expression:"currentWidget.dataset.type"}},e._l(this.$$global_editor.dataSourcTypeList3,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("vue-lazy-component",[a("el-form-item",{attrs:{label:"\u5750\u6807\u7C7B\u578B"}},[a("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u5750\u6807\u6216\u8005\u884C\u653F\u533A\u4EE3\u7801"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset.regionType,callback:function(t){e.$set(e.currentWidget.dataset,"regionType",t)},expression:"currentWidget.dataset.regionType"}},e._l(this.$$global_editor.regionTypeList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),e.currentWidget.dataset.regionType==="coordinate"?a("div",[a("el-form-item",{attrs:{label:"\u5730\u533A\u540D\u79F0"}},[a("el-select",{ref:"encodeX",attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u8981\u663E\u793A\u7684\u5730\u533A\u540D\u79F0"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.name,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"name",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.name"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u5730\u533A\u5750\u6807"}},[a("el-select",{ref:"encodeX",attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u5730\u533A\u5750\u6807"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.coordinate,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"coordinate",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.coordinate"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1)],1):a("div",[a("el-form-item",{attrs:{label:"\u884C\u653F\u533A"}},[a("el-select",{ref:"encodeX",attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u8981\u663E\u793A\u7684\u884C\u653F\u533A"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.region,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"region",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.region"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),e.currentWidget.config.mapType=="map"?a("el-form-item",{attrs:{label:"\u6563\u70B9\u4F4D\u7F6E"}},[a("el-select",{ref:"encodeY",attrs:{size:"mini",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u663E\u793A\u6563\u70B9\u4F4D\u7F6E\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.scatterPosition,callback:function(t){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"scatterPosition",t)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.scatterPosition"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1):e._e()],1),a("el-form-item",[a("el-tooltip",{attrs:{content:"\u6DFB\u52A0\u7EDF\u8BA1\u5B57\u6BB5",effect:"dark",placement:"top","open-delay":1e3}},[a("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13CE66","margin-left":"180px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(t){return e.addData()}}})],1)],1),e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].encode.data,function(t,s){return a("el-form-item",{key:s,attrs:{label:"\u7EDF\u8BA1\u503C"+(s+1)}},[a("el-select",{ref:"encodeY",refInFor:!0,staticStyle:{width:"160px"},attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u663E\u793A\u7684\u7EDF\u8BA1\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.data[s],callback:function(r){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode.data,s,r)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.data[i]"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(r){return a("el-option",{key:r.name,attrs:{label:r.alias!=""?r.alias:r.name,value:r.name}})}),1),s>0?a("el-tooltip",{attrs:{content:"\u79FB\u9664\u7EDF\u8BA1\u5B57\u6BB5",effect:"dark",placement:"top","open-delay":1e3}},[a("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.delData(s)}}})],1):e._e()],1)})],2),a("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:e.currentWidget},on:{getDataSetData:e.getConfigData,clearDynamicEncode:e.clearDynamicEncode}})],1)],1)},o=[],g=i(589908),u=i(723400),p=i(381623),d=i(846577),f={name:"country-map-data",components:{SelectTreeRegionCode:p.Z,SettingDataset:g.Z},mixins:[u.j],props:["currentWidget"],methods:{addData(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.data.push("");let n=JSON.parse(JSON.stringify(d.Z.map.base.country_map.config.scatter[0]));this.currentWidget.config.scatter.push(n);let e=JSON.parse(JSON.stringify(d.Z.map.base.country_map.config.scatter3D[0]));this.currentWidget.config.scatter3D.push(e),this.getConfigData()},delData(n){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.data.splice(n,1),this.currentWidget.config.scatter.splice(n,1),this.currentWidget.config.scatter3D.splice(n,1),this.getConfigData()},selectTreeClick(n){this.currentWidget.config.regionName=n.label,this.getConfigData()},changeDatasetType(){this.$refs.settingDataset.loadPreview(),this.clearDynamicEncode(),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.region="";let n=this.currentWidget.config.scatter.length;if(this.currentWidget.dataset[this.currentWidget.dataset.type].encode.data.length=n,n>0)for(let e=0;e<n;e++)this.currentWidget.dataset[this.currentWidget.dataset.type].encode.data[e]=""}}},W=f,y=i(768141),m=(0,y.Z)(W,l,o,!1,null,"4bf380e9",null),h=m.exports}}]);
