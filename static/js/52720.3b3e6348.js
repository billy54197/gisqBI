"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[52720],{252720:function(y,r,l){l.r(r),l.d(r,{default:function(){return f}});var o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-div"},[a("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:e.currentWidget.dataset}},[a("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[a("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:e.changeDatasetType},model:{value:e.currentWidget.dataset.type,callback:function(n){e.$set(e.currentWidget.dataset,"type",n)},expression:"currentWidget.dataset.type"}},e._l(this.$$global_editor.dataSourcTypeList3,function(n){return a("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}),1)],1),a("vue-lazy-component",[a("el-form-item",{attrs:{label:"x\u8F74"}},[a("el-select",{attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9x\u8F74\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:e.currentWidget.dataset[e.currentWidget.dataset.type].encode.x,callback:function(n){e.$set(e.currentWidget.dataset[e.currentWidget.dataset.type].encode,"x",n)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode.x"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(n){return a("el-option",{key:n.name,attrs:{label:n.alias!=""?n.alias:n.name,value:n.name}})}),1)],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("K\u7EBF\u7EC4")]),a("el-form-item",[a("el-tooltip",{attrs:{content:"\u6DFB\u52A0K\u7EBF",effect:"dark",placement:"top"}},[a("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13CE66","margin-left":"150px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(n){return e.add()}}})],1)],1),a("el-collapse",e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].encode.y,function(n,s){return a("el-collapse-item",{key:"index-"+s,attrs:{title:"K\u7EBF - "+(s+1)}},[a("el-form",{ref:"form",refInFor:!0,attrs:{size:"mini",model:n,"label-width":"75px"}},[a("el-form-item",{attrs:{label:"\u5F00\u76D8\u503C"}},[a("el-select",{staticStyle:{"margin-bottom":"4px"},attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:n.open,callback:function(t){e.$set(n,"open",t)},expression:"item.open"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u6536\u76D8\u503C"}},[a("el-select",{staticStyle:{"margin-bottom":"4px"},attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:n.close,callback:function(t){e.$set(n,"close",t)},expression:"item.close"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u6700\u4F4E\u503C"}},[a("el-select",{staticStyle:{"margin-bottom":"4px"},attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:n.lowest,callback:function(t){e.$set(n,"lowest",t)},expression:"item.lowest"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),a("el-form-item",{attrs:{label:"\u6700\u9AD8\u503C"}},[a("el-select",{staticStyle:{"margin-bottom":"4px"},attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:n.highest,callback:function(t){e.$set(n,"highest",t)},expression:"item.highest"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1)],1),s>0?a("el-tooltip",{attrs:{content:"\u79FB\u9664K\u7EBF",effect:"dark",placement:"top"}},[a("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.deleteK(s)}}})],1):e._e()],1)],1)}),1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("\u6298\u7EBF\u7EC4")]),a("el-form-item",[a("el-tooltip",{attrs:{content:"\u6DFB\u52A0\u6298\u7EBF",effect:"dark",placement:"top"}},[a("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13CE66","margin-left":"150px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(n){return e.addLine()}}})],1)],1),e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].encode.lines,function(n,s){return a("el-form-item",{key:"index-"+s,attrs:{label:"\u6298\u7EBF - "+(s+1)}},[a("el-select",{staticStyle:{"margin-bottom":"4px"},attrs:{size:"mini",placeholder:"\u8BF7\u9009\u62E9\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:e.getConfigData},model:{value:n.value,callback:function(t){e.$set(n,"value",t)},expression:"item.value"}},e._l(e.currentWidget.dataset[e.currentWidget.dataset.type].dimensionsAlias,function(t){return a("el-option",{key:t.name,attrs:{label:t.alias!=""?t.alias:t.name,value:t.name}})}),1),a("el-tooltip",{attrs:{content:"\u79FB\u9664\u6298\u7EBF",effect:"dark",placement:"top"}},[a("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.deleteLine(s)}}})],1)],1)})],2),a("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:e.currentWidget},on:{getDataSetData:e.getConfigData,clearDynamicEncode:e.clearDynamicEncode}})],1)],1)},c=[],d=l(589908),g=l(723400),u={name:"candlestick-simple-data",components:{SettingDataset:d.Z},mixins:[g.j],props:["currentWidget"],data(){return{lineSeries:[{name:"\u6298\u7EBF\u56FE1",symbol:"emptyCircle",symbolSize:5,smooth:.5,lineStyle:{color:"rgba(255, 122, 92, 0.4)"},itemStyle:{color:"rgba(255, 122, 92, 1)"}},{name:"\u6298\u7EBF\u56FE2",symbol:"emptyCircle",symbolSize:5,smooth:.5,lineStyle:{color:"rgba(76, 132, 255, 0.4)"},itemStyle:{color:"rgba(76, 132, 255, 1)"}},{name:"\u6298\u7EBF\u56FE3",symbol:"emptyCircle",symbolSize:5,smooth:.5,lineStyle:{color:"rgba(41, 204, 151, 0.4)"},itemStyle:{color:"rgba(41, 204, 151, 1)"}},{name:"\u6298\u7EBF\u56FE4",symbol:"emptyCircle",symbolSize:5,smooth:.5,lineStyle:{color:"rgba(252, 211, 23, 0.4)"},itemStyle:{color:"rgba(252, 211, 23, 1)"}}],encodeY:[{open:"open",close:"close",lowest:"lowest",highest:"highest"}],encodeLines:[{value:"open"},{value:"close"},{value:"lowest"},{value:"highest"}]}},methods:{changeDatasetType(){this.$refs.settingDataset.loadPreview();let i=this.currentWidget.dataset.type;this.currentWidget.config.lineSeries=JSON.parse(JSON.stringify(this.lineSeries)),this.currentWidget.dataset[i].encode.y=JSON.parse(JSON.stringify(this.encodeY)),this.currentWidget.dataset[i].encode.lines=JSON.parse(JSON.stringify(this.encodeLines)),this.getConfigData()},clearDynamicEncode(){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.x=""},add(){let i=JSON.parse(JSON.stringify(this.currentWidget.config.series[0]));i.name="K\u7EBF\u56FE"+(this.currentWidget.config.series.length+1),this.currentWidget.config.series.push(i),this.currentWidget.dataset[this.currentWidget.dataset.type].encode.y.push(this.encodeY[0]),this.getConfigData()},addLine(){let i=JSON.parse(JSON.stringify(this.lineSeries[0]));i.name="\u6298\u7EBF\u56FE"+(this.currentWidget.config.lineSeries.length+1),this.currentWidget.config.lineSeries.push(i),this.currentWidget.dataset[this.currentWidget.dataset.type].encode.lines.push(this.encodeLines[0]),this.getConfigData()},deleteK(i){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.y.splice(i,1),this.currentWidget.config.series.splice(i,1),this.getConfigData()},deleteLine(i){this.currentWidget.dataset[this.currentWidget.dataset.type].encode.lines.splice(i,1),this.currentWidget.config.lineSeries.splice(i,1),this.getConfigData()}}},p=u,m=l(768141),h=(0,m.Z)(p,o,c,!1,null,"3f0eeccd",null),f=h.exports}}]);
