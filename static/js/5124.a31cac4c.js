"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[5124],{305124:function(p,l,r){r.r(l),r.d(l,{default:function(){return g}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u7ED8\u56FE\u7F51\u683C")])]),t("vue-lazy-component",{staticClass:"my-collapse-chart"},[t("el-form",{ref:"form",attrs:{size:"mini",model:e.grid,"label-width":"90px"}},[t("el-form-item",{attrs:{label:"\u663E\u793A\u7F51\u683C"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.grid.show,callback:function(o){e.$set(e.grid,"show",o)},expression:"grid.show"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.grid.show,expression:"grid.show"}]},[t("el-form-item",{attrs:{label:"\u56FE\u8868\u4E0A/\u4E0B\u8FB9\u8DDD"}},[t("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"80px"},attrs:{placeholder:"\u4E0A\u8FB9(%)","controls-position":"right"},on:{change:e.getConfigData},model:{value:e.grid.top,callback:function(o){e.$set(e.grid,"top",o)},expression:"grid.top"}}),t("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"80px","margin-left":"5px"},attrs:{placeholder:"\u4E0B\u8FB9(%)","controls-position":"right"},on:{change:e.getConfigData},model:{value:e.grid.bottom,callback:function(o){e.$set(e.grid,"bottom",o)},expression:"grid.bottom"}})],1),t("el-form-item",{attrs:{label:"\u56FE\u8868\u5DE6/\u53F3\u8FB9\u8DDD"}},[t("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"80px"},attrs:{placeholder:"\u5DE6\u8FB9(%)","controls-position":"right"},on:{change:e.getConfigData},model:{value:e.grid.left,callback:function(o){e.$set(e.grid,"left",o)},expression:"grid.left"}}),t("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"80px","margin-left":"5px"},attrs:{placeholder:"\u53F3\u8FB9(%)","controls-position":"right"},on:{change:e.getConfigData},model:{value:e.grid.right,callback:function(o){e.$set(e.grid,"right",o)},expression:"grid.right"}})],1),t("el-form-item",{attrs:{label:"\u7F51\u683C\u5BBD\u5EA6"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u7F51\u683C\u7684\u5BBD\u5EA6","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.grid.width,callback:function(o){e.$set(e.grid,"width",o)},expression:"grid.width"}})],1),t("el-form-item",{attrs:{label:"\u7F51\u683C\u9AD8\u5EA6"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u7F51\u683C\u7684\u9AD8\u5EA6","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.grid.height,callback:function(o){e.$set(e.grid,"height",o)},expression:"grid.height"}})],1),t("el-form-item",{attrs:{label:"\u7F51\u683C\u80CC\u666F\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u7F51\u683C\u80CC\u666F\u8272"},on:{change:e.getConfigData},model:{value:e.grid.backgroundColor,callback:function(o){e.$set(e.grid,"backgroundColor",o)},expression:"grid.backgroundColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.globalEditor.predefineColors},on:{change:e.getConfigData},model:{value:e.grid.backgroundColor,callback:function(o){e.$set(e.grid,"backgroundColor",o)},expression:"grid.backgroundColor"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u7F51\u683C\u8FB9\u6846\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u7F51\u683C\u7684\u8FB9\u6846\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.grid.borderColor,callback:function(o){e.$set(e.grid,"borderColor",o)},expression:"grid.borderColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.globalEditor.predefineColors},on:{change:e.getConfigData},model:{value:e.grid.borderColor,callback:function(o){e.$set(e.grid,"borderColor",o)},expression:"grid.borderColor"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u7F51\u683C\u8FB9\u6846\u7EBF\u5BBD"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u7F51\u683C\u7684\u8FB9\u6846\u7EBF\u5BBD","controls-position":"right",step:.5},on:{change:e.getConfigData},model:{value:e.grid.borderWidth,callback:function(o){e.$set(e.grid,"borderWidth",o)},expression:"grid.borderWidth"}})],1),t("el-form-item",{attrs:{label:"\u9634\u5F71\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9634\u5F71\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.grid.shadowColor,callback:function(o){e.$set(e.grid,"shadowColor",o)},expression:"grid.shadowColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.globalEditor.predefineColors},on:{change:e.getConfigData},model:{value:e.grid.shadowColor,callback:function(o){e.$set(e.grid,"shadowColor",o)},expression:"grid.shadowColor"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u9634\u5F71\u957F\u5EA6"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u7F51\u683C\u7684\u9634\u5F71\u957F\u5EA6","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.grid.shadowBlur,callback:function(o){e.$set(e.grid,"shadowBlur",o)},expression:"grid.shadowBlur"}})],1),t("el-form-item",{attrs:{label:"X \u504F\u79FB"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u7F51\u683C\u7684\u9634\u5F71 X \u504F\u79FB","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.grid.shadowOffsetX,callback:function(o){e.$set(e.grid,"shadowOffsetX",o)},expression:"grid.shadowOffsetX"}})],1),t("el-form-item",{attrs:{label:"Y \u504F\u79FB"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u7F51\u683C\u7684\u9634\u5F71 Y \u504F\u79FB","controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.grid.shadowOffsetY,callback:function(o){e.$set(e.grid,"shadowOffsetY",o)},expression:"grid.shadowOffsetY"}})],1)],1)],1)],1)],2)],1)],1)},i=[],s={name:"echarts-grid",props:["grid"],data(){return{globalEditor:this.$$global_editor}},methods:{getConfigData(){this.$emit("gridChange",this.grid)}}},n=s,d=r(768141),c=(0,d.Z)(n,a,i,!1,null,"6cca467a",null),g=c.exports}}]);
