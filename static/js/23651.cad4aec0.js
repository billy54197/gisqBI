"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[23651],{523651:function(b,r,o){o.r(r),o.d(r,{default:function(){return p}});var c=function(){var t=this,e=t._self._c;return e("div",[e("el-collapse",[e("el-collapse-item",[e("template",{slot:"title"},[e("div",{staticClass:"my-title"},[t._v("3D\u8BCD\u4E91\u6837\u5F0F")])]),e("vue-lazy-component",{staticClass:"my-collapse-chart"},[e("el-form",{ref:"form",attrs:{size:"mini",model:t.currentWidget.config,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"\u534A\u5F84(px)"}},[e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{"controls-position":"right",step:1,min:0,max:1e3},on:{change:t.getConfigData},model:{value:t.currentWidget.config.boxWidth,callback:function(n){t.$set(t.currentWidget.config,"boxWidth",n)},expression:"currentWidget.config.boxWidth"}})],1),e("el-form-item",{attrs:{label:"\u5BBD\u9AD8\u6BD4"}},[e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"80px"},attrs:{placeholder:"\u5BBD\u6BD4\u4F8B",step:.05,min:0,max:2,"controls-position":"right"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.scaleW,callback:function(n){t.$set(t.currentWidget.config,"scaleW",n)},expression:"currentWidget.config.scaleW"}}),e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"80px"},attrs:{placeholder:"\u9AD8\u6BD4\u4F8B",step:.05,min:0,max:2,"controls-position":"right"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.scaleH,callback:function(n){t.$set(t.currentWidget.config,"scaleH",n)},expression:"currentWidget.config.scaleH"}})],1),e("el-form-item",{attrs:{label:"\u65CB\u8F6C\u901F\u5EA6"}},[e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{"controls-position":"right",step:1,min:0,max:100},on:{change:t.getConfigData},model:{value:t.currentWidget.config.speed,callback:function(n){t.$set(t.currentWidget.config,"speed",n)},expression:"currentWidget.config.speed"}})],1),e("el-form-item",{attrs:{label:"\u65CB\u8F6C\u89D2\u5EA6( \xB0 )"}},[e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{"controls-position":"right",step:1,min:0,max:360},on:{change:t.getConfigData},model:{value:t.currentWidget.config.angle,callback:function(n){t.$set(t.currentWidget.config,"angle",n)},expression:"currentWidget.config.angle"}})],1),t.fontSize?e("el-form-item",{attrs:{label:"\u57FA\u51C6\u5B57\u4F53\u8303\u56F4"}},[e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{"controls-position":"right",step:1,min:1},on:{change:t.getConfigData},model:{value:t.currentWidget.config.fontSizeMin,callback:function(n){t.$set(t.currentWidget.config,"fontSizeMin",n)},expression:"currentWidget.config.fontSizeMin"}}),e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{"controls-position":"right",step:1,min:10},on:{change:t.getConfigData},model:{value:t.currentWidget.config.fontSizeMax,callback:function(n){t.$set(t.currentWidget.config,"fontSizeMax",n)},expression:"currentWidget.config.fontSizeMax"}})],1):e("el-form-item",{attrs:{label:"\u57FA\u51C6\u5B57\u4F53\u5927\u5C0F"}},[e("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{"controls-position":"right",step:1,min:1,max:80},on:{change:t.getConfigData},model:{value:t.currentWidget.config.fontSize,callback:function(n){t.$set(t.currentWidget.config,"fontSize",n)},expression:"currentWidget.config.fontSize"}})],1),e("el-form-item",{attrs:{label:"\u5B57\u4F53"}},[e("font-select",{staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5B57\u4F53"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.fontFamily,callback:function(n){t.$set(t.currentWidget.config,"fontFamily",n)},expression:"currentWidget.config.fontFamily"}})],1),e("el-form-item",{attrs:{label:"\u5B57\u4F53\u6837\u5F0F"}},[e("el-checkbox-button",{attrs:{"true-label":"bolder","false-label":"normal"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.fontWeight,callback:function(n){t.$set(t.currentWidget.config,"fontWeight",n)},expression:"currentWidget.config.fontWeight"}},[e("i",{staticClass:"iconfont bi_bold"})]),e("el-checkbox-button",{attrs:{"true-label":"italic","false-label":"normal"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.fontStyle,callback:function(n){t.$set(t.currentWidget.config,"fontStyle",n)},expression:"currentWidget.config.fontStyle"}},[e("i",{staticClass:"iconfont bi_italic"})]),e("el-checkbox-button",{attrs:{"true-label":"underline","false-label":"none"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.textDecoration,callback:function(n){t.$set(t.currentWidget.config,"textDecoration",n)},expression:"currentWidget.config.textDecoration"}},[e("i",{staticClass:"iconfont bi_underline"})])],1),e("el-form-item",{attrs:{label:"\u662F\u5426\u60AC\u505C"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.hover,callback:function(n){t.$set(t.currentWidget.config,"hover",n)},expression:"currentWidget.config.hover"}})],1),e("el-form-item",{attrs:{label:"\u81EA\u5B9A\u4E49\u989C\u8272"}},[e("el-switch",{on:{change:t.getConfigData},model:{value:t.currentWidget.config.randomColor,callback:function(n){t.$set(t.currentWidget.config,"randomColor",n)},expression:"currentWidget.config.randomColor"}})],1),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.currentWidget.config.randomColor,expression:"currentWidget.config.randomColor"}],attrs:{label:"\u989C\u8272","label-width":"60px"}},[e("el-tooltip",{attrs:{content:"\u6DFB\u52A0\u989C\u8272","open-delay":1e3,effect:"dark",placement:"top"}},[e("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13CE66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(n){return t.addAxisLine()}}})],1)],1),t._l(t.currentWidget.config.color,function(n,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentWidget.config.randomColor,expression:"currentWidget.config.randomColor"}],key:i,staticClass:"form-item"},[e("el-form-item",{attrs:{label:"\u7B2C"+(i+1)+"\u9879\u989C\u8272:"}},[e("el-row",[e("el-col",{attrs:{span:14}},[e("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:t.getConfigData},model:{value:t.currentWidget.config.color[i],callback:function(a){t.$set(t.currentWidget.config.color,i,a)},expression:"currentWidget.config.color[index]"}})],1),e("el-col",{attrs:{span:6}},[e("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:t.globalEditor.predefineColors},on:{change:t.getConfigData},model:{value:t.currentWidget.config.color[i],callback:function(a){t.$set(t.currentWidget.config.color,i,a)},expression:"currentWidget.config.color[index]"}})],1),i>0?e("el-tooltip",{attrs:{content:"\u79FB\u9664","open-delay":1e3,effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.deleteAxisLine(i)}}})],1):t._e()],1)],1)],1)})],2)],1)],2)],1)],1)},s=[],g=o(723400),u={name:"bar-simple-style",props:["currentWidget"],components:{FontSelect:()=>o.e(16362).then(o.bind(o,916362))},mixins:[g.j],computed:{fontSize:function(){return this.currentWidget.dataset[this.currentWidget.dataset.type].encode.fontSize}},data(){return{globalEditor:this.$$global_editor,orientList:[{value:"horizontal",label:"\u6C34\u5E73"},{value:"vertical",label:"\u5782\u76F4"}],alignList:[{value:"auto",label:"\u81EA\u52A8"},{value:"left",label:"\u9760\u5DE6"},{value:"right",label:"\u9760\u53F3"}],positionList:[{value:"top",label:"\u4E0A\u90E8"},{value:"left",label:"\u5DE6\u8FB9"},{value:"right",label:"\u53F3\u8FB9"},{value:"bottom",label:"\u5E95\u90E8"},{value:"inside",label:"\u91CC\u9762"},{value:"insideTop",label:"\u91CC\u9762\u9760\u4E0A"},{value:"insideBottom",label:"\u91CC\u9762\u9760\u4E0B"}]}},methods:{addAxisLine(){let l="rgba(45,95,115, 1)";this.currentWidget.config.color.push(l)},deleteAxisLine(l){this.currentWidget.config.color.splice(l,1)}}},d=u,f=o(768141),m=(0,f.Z)(d,c,s,!1,null,"0a4b3d93",null),p=m.exports}}]);
