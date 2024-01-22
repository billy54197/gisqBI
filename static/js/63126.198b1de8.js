"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[63126],{163126:function(h,n,i){i.r(n),i.d(n,{default:function(){return m}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v(" Y\u8F74")])]),t("vue-lazy-component",{staticClass:"my-collapse"},[t("el-form",{ref:"form",attrs:{size:"mini",model:e.yAxis,"label-width":"75px"}},[t("el-form-item",{attrs:{label:"\u663E\u793AY\u8F74"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.yAxis.show,callback:function(a){e.$set(e.yAxis,"show",a)},expression:"yAxis.show"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.yAxis.show,expression:"yAxis.show"}]},[t("el-form-item",{attrs:{label:"y \u8F74\u4F4D\u7F6E"}},[t("el-switch",{attrs:{"active-value":"right","active-text":"\u53F3\u4FA7","inactive-value":"left","inactive-text":"\u5DE6\u4FA7"},on:{change:e.getConfigData},model:{value:e.yAxis.position,callback:function(a){e.$set(e.yAxis,"position",a)},expression:"yAxis.position"}})],1),t("el-form-item",{attrs:{label:"\u4F4D\u7F6E\u504F\u79FB"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u76F8\u5BF9\u4E8E\u9ED8\u8BA4\u4F4D\u7F6E\u7684\u504F\u79FB","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.yAxis.offset,callback:function(a){e.$set(e.yAxis,"offset",a)},expression:"yAxis.offset"}})],1),t("el-form-item",{attrs:{label:"\u8F74\u7C7B\u578B"}},[t("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"\u5750\u6807\u8F74\u7C7B\u578B"},on:{change:e.getConfigData},model:{value:e.yAxis.type,callback:function(a){e.$set(e.yAxis,"type",a)},expression:"yAxis.type"}},e._l(e.typeList,function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)],1),t("el-form-item",{attrs:{label:"\u8F74\u540D\u79F0"}},[t("el-input",{staticStyle:{width:"160px"},attrs:{placeholder:"\u5750\u6807\u8F74\u540D\u79F0"},on:{change:e.getConfigData},model:{value:e.yAxis.name,callback:function(a){e.$set(e.yAxis,"name",a)},expression:"yAxis.name"}})],1),t("el-form-item",{attrs:{label:"\u8F74\u540D\u79F0\u4F4D\u7F6E"}},[t("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u5750\u6807\u8F74\u540D\u79F0\u4F4D\u7F6E"},on:{change:e.getConfigData},model:{value:e.yAxis.nameLocation,callback:function(a){e.$set(e.yAxis,"nameLocation",a)},expression:"yAxis.nameLocation"}},e._l(e.locationList,function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)],1),t("el-form-item",{attrs:{label:"\u540D\u79F0\u8DDD\u79BB"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u5750\u6807\u8F74\u540D\u79F0\u4E0E\u8F74\u7EBF\u8DDD\u79BB","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.yAxis.nameGap,callback:function(a){e.$set(e.yAxis,"nameGap",a)},expression:"yAxis.nameGap"}})],1),t("el-form-item",{attrs:{label:"\u540D\u79F0\u65CB\u8F6C"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u5750\u6807\u8F74\u540D\u5B57\u65CB\u8F6C\uFF0C\u89D2\u5EA6\u503C","controls-position":"right",min:0,max:360,step:1},on:{change:e.getConfigData},model:{value:e.yAxis.nameRotate,callback:function(a){e.$set(e.yAxis,"nameRotate",a)},expression:"yAxis.nameRotate"}})],1),e.chartType!=="gantt"?t("el-form-item",{attrs:{label:"\u662F\u5426\u53CD\u5411"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.yAxis.inverse,callback:function(a){e.$set(e.yAxis,"inverse",a)},expression:"yAxis.inverse"}})],1):e._e(),e.yAxis.type==="value"?[t("el-form-item",{attrs:{label:"\u6700\u5C0F\u503C"}},[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.yAxis.min!="dataMin",expression:"yAxis.min != 'dataMin'"}],staticStyle:{width:"80px"},attrs:{placeholder:"\u523B\u5EA6\u6700\u5C0F\u503C"},on:{change:function(a){return e.minChange()}},model:{value:e.yAxis.min,callback:function(a){e.$set(e.yAxis,"min",a)},expression:"yAxis.min"}}),t("el-checkbox",{attrs:{"true-label":"dataMin","false-label":""},on:{change:function(a){return e.minChange()}},model:{value:e.yAxis.min,callback:function(a){e.$set(e.yAxis,"min",a)},expression:"yAxis.min"}},[e._v("\u6570\u636E\u6700\u5C0F\u503C")])],1),t("el-form-item",{attrs:{label:"\u6700\u5927\u503C"}},[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.yAxis.max!="dataMax",expression:"yAxis.max != 'dataMax'"}],staticStyle:{width:"80px"},attrs:{placeholder:"\u523B\u5EA6\u6700\u5927\u503C"},on:{change:function(a){return e.maxChange()}},model:{value:e.yAxis.max,callback:function(a){e.$set(e.yAxis,"max",a)},expression:"yAxis.max"}}),t("el-checkbox",{attrs:{"true-label":"dataMax","false-label":""},on:{change:function(a){return e.maxChange()}},model:{value:e.yAxis.max,callback:function(a){e.$set(e.yAxis,"max",a)},expression:"yAxis.max"}},[e._v("\u6570\u636E\u6700\u5927\u503C ")])],1)]:e._e(),e.yAxis.type=="value"&&e.chartType!="gantt"?t("el-form-item",{attrs:{label:"\u8131\u79BB 0 \u503C"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.yAxis.scale,callback:function(a){e.$set(e.yAxis,"scale",a)},expression:"yAxis.scale"}})],1):e._e(),e.yAxis.type!="category"?t("el-form-item",{attrs:{label:"\u5206\u5272\u6BB5\u6570"}},[t("el-tooltip",{attrs:{content:"\u8FD9\u4E2A\u5206\u5272\u6BB5\u6570\u53EA\u662F\u4E2A\u9884\u4F30\u503C\uFF0C\u6700\u540E\u5B9E\u9645\u663E\u793A\u7684\u6BB5\u6570\u4F1A\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u6839\u636E\u5206\u5272\u540E\u5750\u6807\u8F74\u523B\u5EA6\u663E\u793A\u7684\u6613\u8BFB\u7A0B\u5EA6\u4F5C\u8C03\u6574"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u5750\u6807\u8F74\u7684\u5206\u5272\u6BB5\u6570","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.yAxis.splitNumber,callback:function(a){e.$set(e.yAxis,"splitNumber",a)},expression:"yAxis.splitNumber"}})],1)],1):e._e(),t("el-form-item",{attrs:{label:"\u662F\u5426\u9759\u6001"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.yAxis.silent,callback:function(a){e.$set(e.yAxis,"silent",a)},expression:"yAxis.silent"}})],1),t("el-form-item",{attrs:{label:"\u6807\u7B7E\u4E8B\u4EF6"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.yAxis.triggerEvent,callback:function(a){e.$set(e.yAxis,"triggerEvent",a)},expression:"yAxis.triggerEvent"}})],1),t("name-text-style",{attrs:{"name-text-style":e.yAxis.nameTextStyle,title:"\u5750\u6807\u8F74\u540D\u79F0\u7684\u6587\u5B57\u6837\u5F0F"},on:{nameTextStyleChange:e.nameTextStyleChange}}),t("axis-line",{attrs:{"axis-line":e.yAxis.axisLine,axis:"yAxis",title:"\u5750\u6807\u8F74\u8F74\u7EBF"},on:{axisLineChange:e.axisLineChange}}),t("axis-tick",{attrs:{"axis-tick":e.yAxis.axisTick,axisType:e.yAxis.type,title:"\u5750\u6807\u8F74\u523B\u5EA6"},on:{axisTickChange:e.axisTickChange}}),t("axis-label",{attrs:{"axis-label":e.yAxis.axisLabel,axisType:e.yAxis.type,title:"\u5750\u6807\u8F74\u523B\u5EA6\u6807\u7B7E"},on:{axisLabelChange:e.axisLabelChange}}),t("split-line",{attrs:{"split-line":e.yAxis.splitLine,title:"\u5206\u9694\u7EBF"},on:{splitLineChange:e.splitLineChange}}),t("split-area",{attrs:{"split-area":e.yAxis.splitArea,title:"\u5206\u9694\u533A\u57DF"},on:{splitAreaChange:e.splitAreaChange}}),t("axis-pointer",{attrs:{"axis-pointer":e.yAxis.axisPointer,axisType:e.yAxis.type,title:"\u6307\u793A\u5668"},on:{axisPointerChange:e.axisPointerChange}})],2)],1)],1)],2)],1)],1)},o=[],x={name:"echarts-yAxis",components:{AxisPointer:()=>i.e(86331).then(i.bind(i,286331)),SplitLine:()=>i.e(11793).then(i.bind(i,311793)),SplitArea:()=>i.e(44433).then(i.bind(i,344433)),AxisLabel:()=>i.e(25681).then(i.bind(i,725681)),AxisTick:()=>i.e(34968).then(i.bind(i,34968)),AxisLine:()=>i.e(34603).then(i.bind(i,234603)),NameTextStyle:()=>i.e(16396).then(i.bind(i,216396))},props:{yAxis:{},typeList:{type:Array,default:function(){return[{value:"value",label:"\u6570\u503C\u8F74"},{value:"category",label:"\u7C7B\u76EE\u8F74"},{value:"time",label:"\u65F6\u95F4\u8F74"},{value:"log",label:"\u5BF9\u6570\u8F74"}]}},chartType:{type:String,default:"charts"}},data(){return{locationList:[{value:"start",label:"\u8F74\u5F00\u59CB\u4F4D\u7F6E"},{value:"center",label:"\u8F74\u4E2D\u90E8\u4F4D\u7F6E"},{value:"end",label:"\u8F74\u7ED3\u675F\u4F4D\u7F6E"}]}},methods:{minChange(){this.yAxis.min!="dataMin"&&!this.yAxis.min&&(this.yAxis.min=0),this.getConfigData()},maxChange(){this.yAxis.max!="dataMin"&&!this.yAxis.max&&(this.yAxis.max=100),this.getConfigData()},getConfigData(){this.$emit("yAxisChange",this.yAxis)},nameTextStyleChange(s){this.yAxis.nameTextStyle=s,this.getConfigData()},axisLineChange(s){this.yAxis.axisLine=s,this.getConfigData()},axisTickChange(s){this.yAxis.axisTick=s,this.getConfigData()},axisLabelChange(s){this.yAxis.axisLabel=s,this.getConfigData()},splitLineChange(s){this.yAxis.splitLine=s,this.getConfigData()},splitAreaChange(s){this.yAxis.splitArea=s,this.getConfigData()},axisPointerChange(s){this.yAxis.axisPointer=s,this.getConfigData()}}},r=x,y=i(768141),c=(0,y.Z)(r,l,o,!1,null,"737ef424",null),m=c.exports}}]);
