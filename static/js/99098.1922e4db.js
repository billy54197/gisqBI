"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[99098],{899098:function(X,s,l){l.r(s),l.d(s,{default:function(){return L}});var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"charts-setting"},[e("el-collapse",[e("el-collapse-item",[e("template",{slot:"title"},[e("div",{staticClass:"my-title"},[t._v("\u884C\u653F\u533A\u914D\u7F6E")])]),e("el-form",{staticStyle:{"padding-left":"20px"},nativeOn:{submit:function(i){i.preventDefault()}}},[e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u521D\u59CB\u884C\u653F\u533A"}},[e("el-input",{staticStyle:{width:"150px"},on:{blur:t.getConfigData},model:{value:t.currentWidget.config.xzqOption.initXZQ,callback:function(i){t.$set(t.currentWidget.config.xzqOption,"initXZQ",i)},expression:"currentWidget.config.xzqOption.initXZQ"}})],1),e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u540D\u79F0\u5B57\u6BB5"}},[e("el-input",{staticStyle:{width:"150px"},on:{blur:t.getConfigData},model:{value:t.currentWidget.config.xzqOption.xzqmc_field,callback:function(i){t.$set(t.currentWidget.config.xzqOption,"xzqmc_field",i)},expression:"currentWidget.config.xzqOption.xzqmc_field"}})],1),e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u662F\u5426\u542F\u7528"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.selectOption.isShowXzq,callback:function(i){t.$set(t.currentWidget.config.selectOption,"isShowXzq",i)},expression:"currentWidget.config.selectOption.isShowXzq"}})],1),t.currentWidget.config.selectOption.isShowXzq?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u663E\u793A\u540D\u79F0"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.xzqOption.isShowXzqName,callback:function(i){t.$set(t.currentWidget.config.xzqOption,"isShowXzqName",i)},expression:"currentWidget.config.xzqOption.isShowXzqName"}})],1):t._e(),t.currentWidget.config.selectOption.isShowXzq?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u542F\u7528\u6E10\u53D8\u8272"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.xzqOption.isRamp,callback:function(i){t.$set(t.currentWidget.config.xzqOption,"isRamp",i)},expression:"currentWidget.config.xzqOption.isRamp"}})],1):t._e(),t.currentWidget.config.xzqOption.isRamp?t._e():e("div",[e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u586B\u5145\u989C\u8272"}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{placeholder:"\u9009\u62E9\u586B\u5145\u989C\u8272"},model:{value:t.currentWidget.config.xzqOption.rampOption.fillColor,callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption,"fillColor",i)},expression:"currentWidget.config.xzqOption.rampOption.fillColor"}})],1),e("el-col",{attrs:{span:4}},[e("el-color-picker",{staticStyle:{"margin-left":"5px","vertical-align":"center"},attrs:{"show-alpha":"",predefine:t.predefineColors},on:{change:function(i){return t.changePicker("fillColor",t.currentWidget.config.xzqOption.rampOption.fillColor)}},model:{value:t.currentWidget.config.xzqOption.rampOption.fillColor,callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption,"fillColor",i)},expression:"currentWidget.config.xzqOption.rampOption.fillColor"}})],1)],1)],1)],1),t.currentWidget.config.xzqOption.isRamp?e("div",[t.currentWidget.config.selectOption.isShowXzq?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u81EA\u52A8\u586B\u5145"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.xzqOption.rampOption.isRampFill,callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption,"isRampFill",i)},expression:"currentWidget.config.xzqOption.rampOption.isRampFill"}})],1):t._e(),t.currentWidget.config.xzqOption.rampOption.isRampFill?e("div",[t.currentWidget.config.selectOption.isShowXzq?e("el-collapse-item",{staticStyle:{"margin-left":"28px"},attrs:{title:"\u6E10\u53D8\u8272\u5206\u7EC4"}},[t._l(t.valueRange,function(i,n){return e("el-form-item",{key:n,staticClass:"form-itm",attrs:{label:"\u5206\u7EC4"+(n+1)}},[e("el-col",{attrs:{span:6}},[e("el-input",{attrs:{placeholder:"\u8D77\u59CB\u503C"},on:{change:function(r){return t.rangeChange(i,n)}},model:{value:i.start,callback:function(r){t.$set(i,"start",r)},expression:"range.start"}})],1),e("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v("-")]),e("el-col",{attrs:{span:6}},[e("el-input",{attrs:{placeholder:"\u7ED3\u675F\u503C"},on:{change:function(r){return t.rangeChange(i,n)}},model:{value:i.end,callback:function(r){t.$set(i,"end",r)},expression:"range.end"}})],1),e("i",{staticClass:"el-icon-delete",staticStyle:{color:"tomato",cursor:"pointer","margin-left":"4px"},attrs:{span:2,title:"\u5220\u9664"},on:{click:function(r){return t.deleteRange(n)}}})],1)}),e("el-form-item",{staticClass:"form-itm"},[e("el-button",{style:{color:t.theme.color,width:"80%",height:"30px",backgroundColor:t.theme.btn_bgc,marginLeft:"30px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:t.addNewRange}},[t._v("\u65B0\u589E\u5206\u7EC4 ")])],1)],2):t._e(),t.currentWidget.config.selectOption.isShowXzq?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u8D77\u59CB\u989C\u8272"}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{placeholder:"\u9009\u62E9\u8D77\u59CB\u989C\u8272"},model:{value:t.currentWidget.config.xzqOption.rampOption.rampColor[0],callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption.rampColor,0,i)},expression:"currentWidget.config.xzqOption.rampOption.rampColor[0]"}})],1),e("el-col",{attrs:{span:4}},[e("el-color-picker",{staticStyle:{"margin-left":"5px","vertical-align":"center"},attrs:{"show-alpha":"",predefine:t.predefineColors},on:{change:function(i){return t.changePicker("startRampColor",t.currentWidget.config.xzqOption.rampOption.rampColor[0])}},model:{value:t.currentWidget.config.xzqOption.rampOption.rampColor[0],callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption.rampColor,0,i)},expression:"currentWidget.config.xzqOption.rampOption.rampColor[0]"}})],1)],1)],1):t._e(),t.currentWidget.config.selectOption.isShowXzq?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u7ED3\u675F\u989C\u8272"}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{placeholder:"\u9009\u62E9\u7ED3\u675F\u989C\u8272"},model:{value:t.currentWidget.config.xzqOption.rampOption.rampColor[1],callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption.rampColor,1,i)},expression:"currentWidget.config.xzqOption.rampOption.rampColor[1]"}})],1),e("el-col",{attrs:{span:4}},[e("el-color-picker",{staticStyle:{"margin-left":"5px","vertical-align":"center"},attrs:{"show-alpha":"",predefine:t.predefineColors},on:{change:function(i){return t.changePicker("endRampColor",t.currentWidget.config.xzqOption.rampOption.rampColor[1])}},model:{value:t.currentWidget.config.xzqOption.rampOption.rampColor[1],callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption.rampColor,1,i)},expression:"currentWidget.config.xzqOption.rampOption.rampColor[1]"}})],1)],1)],1):t._e()],1):e("div",[t.currentWidget.config.selectOption.isShowXzq?e("el-collapse-item",{attrs:{title:"\u6E10\u53D8\u989C\u8272\u5206\u7EC4"}},[t._l(t.currentWidget.config.xzqOption.rampOption.rampColor,function(i,n){return e("el-form-item",{key:n,staticClass:"form-itm",attrs:{label:"\u5206\u7EC4"+(n+1)}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{placeholder:"\u5206\u7EC4"+(n+1)},model:{value:t.currentWidget.config.xzqOption.rampOption.rampColor[n],callback:function(r){t.$set(t.currentWidget.config.xzqOption.rampOption.rampColor,n,r)},expression:"currentWidget.config.xzqOption.rampOption.rampColor[i]"}})],1),e("el-col",{attrs:{span:4}},[e("el-color-picker",{staticStyle:{"margin-left":"5px","vertical-align":"center"},attrs:{"show-alpha":"",predefine:t.predefineColors},on:{change:function(r){return t.changePicker("RampColorArray"+n,t.currentWidget.config.xzqOption.rampOption.rampColor[n])}},model:{value:t.currentWidget.config.xzqOption.rampOption.rampColor[n],callback:function(r){t.$set(t.currentWidget.config.xzqOption.rampOption.rampColor,n,r)},expression:"currentWidget.config.xzqOption.rampOption.rampColor[i]"}})],1),e("i",{staticClass:"el-icon-delete",staticStyle:{color:"tomato",cursor:"pointer","margin-left":"12px"},attrs:{span:2,title:"\u5220\u9664"},on:{click:function(r){return t.deleteColor(n)}}})],1)],1)}),e("el-form-item",{staticClass:"form-itm"},[e("el-button",{style:{color:t.theme.color,width:"80%",height:"30px",backgroundColor:t.theme.btn_bgc,marginLeft:"30px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:t.addNewColor}},[t._v("\u65B0\u589E\u5206\u7EC4 ")])],1)],2):t._e()],1)],1):t._e(),e("div",[t.currentWidget.config.selectOption.isShowXzq?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u8FB9\u754C\u989C\u8272"}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{placeholder:"\u9009\u62E9\u8FB9\u754C\u989C\u8272"},model:{value:t.currentWidget.config.xzqOption.rampOption.borderColor,callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption,"borderColor",i)},expression:"currentWidget.config.xzqOption.rampOption.borderColor"}})],1),e("el-col",{attrs:{span:4}},[e("el-color-picker",{staticStyle:{"margin-left":"5px","vertical-align":"center"},attrs:{"show-alpha":"",predefine:t.predefineColors},on:{change:function(i){return t.changePicker("borderColor",t.currentWidget.config.xzqOption.rampOption.borderColor)}},model:{value:t.currentWidget.config.xzqOption.rampOption.borderColor,callback:function(i){t.$set(t.currentWidget.config.xzqOption.rampOption,"borderColor",i)},expression:"currentWidget.config.xzqOption.rampOption.borderColor"}})],1)],1)],1):t._e()],1)],1)],2),e("el-collapse-item",[e("template",{slot:"title"},[e("div",{staticClass:"my-title"},[t._v("\u4E13\u9898\u56FE\u914D\u7F6E")])]),e("el-form",{staticStyle:{"padding-left":"20px"},nativeOn:{submit:function(i){i.preventDefault()}}},[e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u542F\u7528\u4E13\u9898\u56FE"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.selectOption.isShowCharts,callback:function(i){t.$set(t.currentWidget.config.selectOption,"isShowCharts",i)},expression:"currentWidget.config.selectOption.isShowCharts"}})],1),t.currentWidget.config.selectOption.isShowCharts?e("div",[t.currentWidget.config.legendConfig.isShow?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u5BB9\u5668\u5BBD\u5EA6"}},[e("el-input-number",{attrs:{size:"small",step:1,min:50,max:100},on:{change:t.getConfigData},model:{value:t.currentWidget.config.chartOption.baseWidth,callback:function(i){t.$set(t.currentWidget.config.chartOption,"baseWidth",i)},expression:"currentWidget.config.chartOption.baseWidth"}})],1):t._e(),e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u4E13\u9898\u56FE\u7C7B\u578B"}},[e("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"\u4E13\u9898\u56FE\u7C7B\u578B"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.selectOption.chartType,callback:function(i){t.$set(t.currentWidget.config.selectOption,"chartType",i)},expression:"currentWidget.config.selectOption.chartType"}},t._l(t.chartsOptions,function(i){return e("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}),1)],1)],1):t._e(),t.currentWidget.config.selectOption.isShowCharts?e("div",t._l(t.currentWidget.config.chartOption.legend,function(i,n){return e("el-form-item",{key:n,staticClass:"form-itm",attrs:{label:i.name}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{placeholder:i.name},model:{value:t.currentWidget.config.chartOption.legend[n].color,callback:function(r){t.$set(t.currentWidget.config.chartOption.legend[n],"color",r)},expression:"currentWidget.config.chartOption.legend[i].color"}})],1),e("el-col",{attrs:{span:4}},[e("el-color-picker",{staticStyle:{"margin-left":"5px","vertical-align":"center"},attrs:{"show-alpha":"",predefine:t.predefineColors},on:{change:function(r){return t.changePicker("chartLegendColor"+n,t.currentWidget.config.chartOption.legend[n].color)}},model:{value:t.currentWidget.config.chartOption.legend[n].color,callback:function(r){t.$set(t.currentWidget.config.chartOption.legend[n],"color",r)},expression:"currentWidget.config.chartOption.legend[i].color"}})],1)],1)],1)}),1):t._e(),t.currentWidget.config.selectOption.isShowCharts?e("el-collapse-item",[e("template",{slot:"title"},[e("div",{staticClass:"cursorStyle"},[t._v("\u56FE\u8868\u4FE1\u606F\u63D0\u793A")])]),e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u542F\u7528\u63D0\u793A"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.chartTipsStyle.enabled,callback:function(i){t.$set(t.currentWidget.config.chartTipsStyle,"enabled",i)},expression:"currentWidget.config.chartTipsStyle.enabled"}})],1),e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u6837\u5F0F\u7C7B\u578B"}},[e("el-radio-group",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.chartTipsStyle.isDefault,callback:function(i){t.$set(t.currentWidget.config.chartTipsStyle,"isDefault",i)},expression:"currentWidget.config.chartTipsStyle.isDefault"}},[e("el-radio",{attrs:{label:!0}},[t._v("\u6807\u6CE8")]),e("el-radio",{attrs:{label:!1}},[t._v("\u9F20\u6807\u60AC\u505C")])],1)],1),e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u6837\u5F0F\u7F16\u8F91"}},[e("el-button",{attrs:{size:"mini",icon:"el-icon-edit",type:"primary"},on:{click:t.editStyle}},[t._v("\u7F16\u8F91 ")])],1)],2):t._e()],1)],2),e("el-collapse-item",[e("template",{slot:"title"},[e("div",{staticClass:"my-title"},[t._v("\u56FE\u4F8B\u914D\u7F6E")])]),e("el-form",{staticStyle:{"padding-left":"20px"},nativeOn:{submit:function(i){i.preventDefault()}}},[e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u663E\u793A\u56FE\u4F8B"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.legendConfig.isShow,callback:function(i){t.$set(t.currentWidget.config.legendConfig,"isShow",i)},expression:"currentWidget.config.legendConfig.isShow"}})],1),t.currentWidget.config.legendConfig.isShow?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u6E10\u53D8\u8272\u56FE\u4F8B"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.selectOption.isShowRampLegend,callback:function(i){t.$set(t.currentWidget.config.selectOption,"isShowRampLegend",i)},expression:"currentWidget.config.selectOption.isShowRampLegend"}})],1):t._e(),t.currentWidget.config.legendConfig.isShow?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u4E13\u9898\u56FE\u56FE\u4F8B"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.chartOption.isShowChartLegend,callback:function(i){t.$set(t.currentWidget.config.chartOption,"isShowChartLegend",i)},expression:"currentWidget.config.chartOption.isShowChartLegend"}})],1):t._e(),t.currentWidget.config.legendConfig.isShow?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u9690\u85CF\u6807\u9898"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.legendConfig.hideTitle,callback:function(i){t.$set(t.currentWidget.config.legendConfig,"hideTitle",i)},expression:"currentWidget.config.legendConfig.hideTitle"}})],1):t._e(),t.currentWidget.config.legendConfig.isShow?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u900F\u660E\u5EA6"}},[e("el-input-number",{attrs:{size:"small",step:.1,min:0,max:1},on:{change:t.getConfigData},model:{value:t.currentWidget.config.legendConfig.opacity,callback:function(i){t.$set(t.currentWidget.config.legendConfig,"opacity",i)},expression:"currentWidget.config.legendConfig.opacity"}})],1):t._e(),t.currentWidget.config.legendConfig.isShow?e("el-form-item",{staticClass:"form-itm",attrs:{label:"\u56FE\u4F8B\u6837\u5F0F"}},[e("el-input",{staticStyle:{width:"150px"},on:{change:t.manageGetBoardConfigData},model:{value:t.currentWidget.config.legendConfig.style,callback:function(i){t.$set(t.currentWidget.config.legendConfig,"style",i)},expression:"currentWidget.config.legendConfig.style"}})],1):t._e()],1)],2)],1),e("el-collapse",[e("el-collapse-item",[e("template",{slot:"title"},[e("div",{staticClass:"my-title"},[t._v("\u529F\u80FD\u914D\u7F6E")])]),e("vue-lazy-component",[e("el-form",[e("el-form-item",{attrs:{label:"\u542F\u7528\u4E0B\u94BB"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.selectOption.isDrill,callback:function(i){t.$set(t.currentWidget.config.selectOption,"isDrill",i)},expression:"currentWidget.config.selectOption.isDrill"}})],1),t.currentWidget.config.selectOption.isDrill?e("el-form-item",{attrs:{label:"\u4E0B\u94BB\u951A\u70B9"}},t._l(t.drillAnchor,function(i,n){return e("el-radio",{key:n,attrs:{label:i.label},on:{change:t.manageGetBoardConfigData},model:{value:t.currentWidget.config.selectOption.drillFromMouse,callback:function(r){t.$set(t.currentWidget.config.selectOption,"drillFromMouse",r)},expression:"currentWidget.config.selectOption.drillFromMouse"}},[t._v(t._s(i.text)+" ")])}),1):t._e()],1)],1)],2)],1),t.showDialog?e("custom-dialog",{attrs:{"show-dialog":t.showDialog,"chart-type":t.currentWidget.config.selectOption.chartType,"chart-tips-style":t.currentWidget.config.chartTipsStyle},on:{close:function(i){t.showDialog=!1},confirm:t.dialogConfirm}}):t._e()],1)},g=[],p=l(723400),d=l(42160),f=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"CustomDialog",attrs:{visible:t.showDialog,center:"","show-close":!1,top:"150px",width:"1200px","append-to-body":""}},[e("div",{staticClass:"slotDiv",attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"dialogTitle"},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(t.title))]),e("div",{staticClass:"dialogClose",attrs:{title:"\u5173\u95ED"},on:{click:t.closeEmit}},[t._v("\xD7")])])]),t.chartTipsStyle.isDefault?e("chart-label-style",{ref:"labelStyle",attrs:{"chart-type":t.chartType,"data-labels":t.chartTipsStyle.dataLabels}}):e("mouse-hover-style",{ref:"hoverStyle",attrs:{"hover-style":t.chartTipsStyle.hoverStyle}}),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:t.closeEmit}},[t._v("\u53D6 \u6D88")]),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.dialogConfirm}},[t._v("\u786E \u5B9A")])],1)],1)},u=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dialogContent"},[e("div",{staticStyle:{width:"50%",height:"calc(100% - 25px)"}},[e("div",{staticClass:"editorTitle"},[t._v("\u6837\u5F0F\u7F16\u8F91")]),e("my-monaco-editor",{ref:"scriptContent",attrs:{language:"json",theme:"vs"},model:{value:t.styleStr,callback:function(i){t.styleStr=i},expression:"styleStr"}})],1),e("div",{staticStyle:{width:"50%",height:"calc(100% - 25px)"}},[e("div",{staticClass:"editorTitle"},[t._v("\u6837\u5F0F\u5C5E\u6027\u8BE6\u89E3(\u53EA\u8BFB)")]),e("my-monaco-editor",{ref:"scriptContent",attrs:{language:"json","read-only":!0,theme:"vs"},model:{value:t.describeStyleStr,callback:function(i){t.describeStyleStr=i},expression:"describeStyleStr"}})],1)])},h=[],v={name:"ChartLabelStyle",components:{MyMonacoEditor:()=>Promise.resolve().then(l.bind(l,980424))},props:["showDialog","dataLabels","chartType"],data(){return{visible:!1,styleStr:`{
  "padding": 1,
  "distance": 5,
  "format": "{y}",
  ${this.chartType!=="bar"?'"connectorPadding": 1,':""}
  "style": {
    "color": "#333333",
    "fontSize": "10px",
    "fontWeight": "200",
    "textOutline": "none"
  }
}`,describeStyleStr:`{
  "backgroundColor": "string,\u6807\u6CE8\u5BB9\u5668\u80CC\u666F\u8272",
  "borderColor": "string,\u997C\u56FE/\u73AF\u997C\u56FE\u7684\u6807\u6CE8\u5BB9\u5668\u8FB9\u6846\u989C\u8272,\u67F1\u72B6\u56FE\u65E0\u5BB9\u5668\u8FB9\u754C,\u4F1A\u76F4\u63A5\u8986\u76D6\u6807\u6CE8\u989C\u8272",
  "borderRadius": "Number,\u997C\u56FE/\u73AF\u997C\u56FE\u7684\u6807\u6CE8\u5BB9\u5668\u8FB9\u6846\u5706\u89D2,\u67F1\u72B6\u56FE\u65E0\u5BB9\u5668\u8FB9\u754C,\u4E0D\u8D77\u6548",
  "borderWidth": "Number,\u997C\u56FE/\u73AF\u997C\u56FE\u7684\u6807\u6CE8\u5BB9\u5668\u8FB9\u6846\u7EBF\u5BBD\u5EA6,\u67F1\u72B6\u56FE\u65E0\u5BB9\u5668\u8FB9\u754C,\u4F1A\u76F4\u63A5\u8986\u76D6\u6807\u6CE8\u5B57\u4F53\u7C97\u7EC6",
  "rotation": "Number,\u6807\u6CE8\u65CB\u8F6C\u89D2\u5EA6",
  "x": "Number,\u6C34\u5E73\u504F\u79FB",
  "y": "Number,\u5782\u76F4\u504F\u79FB",
  "padding": "number,\u6807\u6CE8\u5BB9\u5668\u5185\u8FB9\u8DDD,\u9ED8\u8BA45",
  "format": "string,\u6570\u636E\u6807\u7B7E\u663E\u793A\u5185\u5BB9\u7684 \u683C\u5F0F\u5316\u5B57\u7B26\u4E32,\u9ED8\u8BA4{y}",
  ${this.chartType!=="bar"&&`"distance": "number,\u997C\u56FE/\u73AF\u997C\u56FE \u6807\u6CE8\u5C5E\u6027,\u6807\u6CE8\u7275\u5F15\u7EBF\u7684\u957F\u5EA6,\u9ED8\u8BA430",
  "connectorPadding": "number,\u997C\u56FE/\u73AF\u997C\u56FE \u6807\u6CE8\u5C5E\u6027,\u6807\u6CE8\u5BB9\u5668\u4E0E\u7275\u5F15\u7EBF\u8DDD\u79BB,\u67F1\u72B6\u56FE\u4E0D\u8D77\u6548",
  "connectorWidth": "number,\u997C\u56FE/\u73AF\u997C\u56FE \u6807\u6CE8\u5C5E\u6027,\u7275\u5F15\u7EBF\u7684\u5BBD\u5EA6\u3002\u67F1\u72B6\u56FE\u4E0D\u8D77\u6548",
  "connectorColor": "string,\u997C\u56FE/\u73AF\u997C\u56FE \u6807\u6CE8\u5C5E\u6027,\u7275\u5F15\u7EBF\u7684\u989C\u8272\u3002\u9ED8\u8BA4\u989C\u8272\u4E0E\u5F53\u524D\u6247\u5F62\u989C\u8272\u76F8\u540C\u3002\u67F1\u72B6\u56FE\u4E0D\u8D77\u6548",`}
  "style": {
    "color": "string,\u5B57\u4F53\u989C\u8272,\u9ED8\u8BA4contrast",
    "fontSize": "string,\u5B57\u4F53\u5927\u5C0F,\u9ED8\u8BA411px",
    "fontWeight":"string,\u5B57\u4F53\u7C97\u7EC6: '200' or 'bold'",
    "textOutline": "string \u5B57\u4F53\u5916\u8FB9\u7EBF :'none' or '1px 1px contrast'",
   },
  },`}},mounted(){this.$nextTick(()=>{this.visible=this.showDialog,this.setStyleStr()})},methods:{setStyleStr(){this.styleStr=this.dataLabels},getConfig(){return this.styleStr}}},C=v,a=l(768141),y=(0,a.Z)(C,m,h,!1,null,"7a6e54f7",null),b=y.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dialogContent"},[e("div",{staticStyle:{width:"50%",height:"calc(100% - 25px)"}},[e("div",{staticClass:"editorTitle"},[t._v("\u6837\u5F0F\u7F16\u8F91")]),e("my-monaco-editor",{ref:"scriptContent",attrs:{language:"json",theme:"vs"},model:{value:t.styleStr,callback:function(i){t.styleStr=i},expression:"styleStr"}})],1),e("div",{staticStyle:{width:"50%",height:"calc(100% - 25px)"}},[e("div",{staticClass:"editorTitle"},[t._v("\u6837\u5F0F\u5C5E\u6027\u8BE6\u89E3(\u53EA\u8BFB)")]),e("my-monaco-editor",{ref:"scriptContent",attrs:{language:"json","read-only":!0,theme:"vs"},model:{value:t.describeStyleStr,callback:function(i){t.describeStyleStr=i},expression:"describeStyleStr"}})],1)])},x=[],W={name:"MouseHoverStyle",components:{MyMonacoEditor:()=>Promise.resolve().then(l.bind(l,980424))},props:["showDialog","hoverStyle"],data(){return{visible:!1,styleStr:`{
 "style": {
   "color": "#333333",
   "fontSize": "10px"
  }
}`,describeStyleStr:`{
  "backgroundColor": "string,\u80CC\u666F\u8272",
  "borderColor": "string,\u8FB9\u6846\u989C\u8272",
  "borderRadius": "number,\u5706\u89D2\u534A\u5F84",
  "borderWidth": "number,\u8FB9\u6846\u5BBD\u5EA6",
  "formatter": "function,\u683C\u5F0F\u5316\u56DE\u8C03\u51FD\u6570,\u4ECEthis\u5BF9\u8C61\u4E2D\u627E\u5BF9\u5E94\u503C,function () { return this}",
  "padding": "number,\u63D0\u793A\u6846\u5185\u8FB9\u8DDD,\u9ED8\u8BA4:8",
  "style": {
    "color": "string,\u5B57\u4F53\u989C\u8272",
    "fontSize": "string,\u5B57\u4F53\u5927\u5C0F,\u9ED8\u8BA412px",
    "whiteSpace": "string, \u6362\u884C nowrap/wrap"
  },
  "valueDecimals": "number,\u4FDD\u7559\u5C0F\u6570\u4F4D\u6570",
  "valuePrefix": "string,\u6570\u503C\u524D\u7F00,\u4E0Eformatter\u540C\u7528\u65F6\u65E0\u6548",
  "valueSuffix": "string,\u6570\u503C\u540E\u7F00,\u4E0Eformatter\u540C\u7528\u65F6\u65E0\u6548"
}`}},mounted(){this.$nextTick(()=>{this.visible=this.showDialog,this.setStyleStr()})},methods:{setStyleStr(){this.styleStr=this.hoverStyle},getConfig(){return this.styleStr}}},S=W,_=(0,a.Z)(S,O,x,!1,null,"49e3cb22",null),z=_.exports,w={name:"CustomDialog",components:{MouseHoverStyle:z,ChartLabelStyle:b},props:["showDialog","chartTipsStyle","chartType"],data(){return{title:"\u6807\u6CE8\u6837\u5F0F\u7F16\u8F91"}},mounted(){this.$nextTick(()=>{this.chartTipsStyle.isDefault||(this.title="\u9F20\u6807\u60AC\u505C\u6837\u5F0F\u7F16\u8F91")})},methods:{closeEmit(){this.$emit("close")},dialogConfirm(){let o=null;this.chartTipsStyle.isDefault?o=this.$refs.labelStyle.getConfig():o=this.$refs.hoverStyle.getConfig(),this.$emit("confirm",o)}}},q=w,k=(0,a.Z)(q,f,u,!1,null,"40e5580e",null),D=k.exports,$={name:"GisThemeChartsStyle",components:{CustomDialog:D},mixins:[p.j],props:["currentWidget"],data(){return{basemap:null,config:null,layerType:this.currentWidget.config.xzqOption.layerType,valueRange:[],showDialog:!1,chartsOptions:[{value:"bar",label:"\u67F1\u72B6\u56FE"},{value:"pie",label:"\u997C\u56FE"},{value:"ring",label:"\u73AF\u5F62\u56FE"}],predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)"],radios:[{label:!0,text:"\u81EA\u52A8\u8BA1\u7B97"},{label:!1,text:"\u81EA\u5B9A\u4E49"}],drillAnchor:[{label:!0,text:"\u9F20\u6807\u4F4D\u7F6E"},{label:!1,text:"\u5C4F\u5E55\u4E2D\u5FC3"}]}},watch:{valueRange(o){this.currentWidget.config.xzqOption.rampOption.valueRange=[];for(let t of o)this.currentWidget.config.xzqOption.rampOption.valueRange.push(t.start+"~"+t.end)}},created(){let o=this.currentWidget.config;this.config=JSON.parse(JSON.stringify(o))},mounted(){this.valueRange=[];let o=this.currentWidget.config.xzqOption.rampOption.valueRange;if(o&&o.length>0)for(let t of o){let e=t.split("~").length>1?t.split("~"):t.split("-");e&&e.length==2&&this.valueRange.push({start:e[0],end:e[1]})}},methods:{onLayerChange(o){o.url?(this.currentWidget.config.layerid=o.id,this.currentWidget.config.xzqOption.layerUrl=o.url,this.currentWidget.config.xzqOption.layerType=o.type,this.layerType=o.type,this.layerType&&this.layerType.slice(0,3)!=="geo"&&(this.currentWidget.config.xzqOption.layerType="arc-vector"),this.currentWidget.config.xzqOption.layerName=o.visibleLayers[0]):(this.currentWidget.config.layerid="",this.currentWidget.config.xzqOption.layerUrl=""),this.manageGetBoardConfigData()},manageGetBoardConfigData(){setTimeout(this.getConfigData(),500)},cahngeCounter(o,t){let e=`this.currentWidget.config.${o}`;e=t,this.manageGetBoardConfigData()},changePicker(o,t){let e=`this.currentWidget.config.${o}`;e=t,this.manageGetBoardConfigData()},deleteRange(o){this.valueRange.splice(o,1),this.manageGetBoardConfigData()},rangeChange(o,t){d.default.set(this.valueRange,t,o),this.manageGetBoardConfigData()},addNewRange(){let o=this.valueRange&&this.valueRange.length>0?this.valueRange[this.valueRange.length-1].end:"";this.valueRange.push({start:o,end:""})},addNewColor(){this.currentWidget.config.xzqOption.rampOption.rampColor.push("#ff4500"),this.manageGetBoardConfigData()},deleteColor(o){this.currentWidget.config.xzqOption.rampOption.rampColor.splice(o,1),this.manageGetBoardConfigData()},editStyle(){this.showDialog=!0},dialogConfirm(o){this.currentWidget.config.chartTipsStyle.isDefault?this.currentWidget.config.chartTipsStyle.dataLabels=o:this.currentWidget.config.chartTipsStyle.hoverStyle=o,this.getConfigData(),this.showDialog=!1}}},T=$,R=(0,a.Z)(T,c,g,!1,null,"02159095",null),L=R.exports}}]);
