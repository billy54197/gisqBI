"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[8797],{392112:function(v,c,r){r.d(c,{Z:function(){return p}});var s=function(){var o=this,a=o._self._c;return a("div",[a("el-collapse",[a("el-collapse-item",{attrs:{title:o.title}},[a("el-form",{ref:"form",attrs:{size:"mini",model:o.fontStyle,"label-width":"80px"},nativeOn:{submit:function(n){n.preventDefault()}}},[a("el-form-item",{attrs:{label:"\u5B57\u4F53\u5927\u5C0F"}},[a("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{placeholder:"\u5B57\u53F7\u5927\u5C0F","controls-position":"right",step:.5,min:10,max:100},on:{change:o.getConfigData},model:{value:o.fontStyle.fontSize,callback:function(n){o.$set(o.fontStyle,"fontSize",n)},expression:"fontStyle.fontSize"}})],1),o.removeFamily?o._e():a("el-form-item",{attrs:{label:"\u5B57\u4F53"}},[a("font-select",{staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5B57\u4F53"},on:{change:o.getConfigData},model:{value:o.fontStyle.fontFamily,callback:function(n){o.$set(o.fontStyle,"fontFamily",n)},expression:"fontStyle.fontFamily"}})],1),o.removeColor?o._e():a("el-form-item",{attrs:{label:"\u5B57\u4F53\u989C\u8272"}},[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:o.getConfigData},model:{value:o.fontStyle.color,callback:function(n){o.$set(o.fontStyle,"color",n)},expression:"fontStyle.color"}})],1),a("el-col",{attrs:{span:6}},[a("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:o.$$global_editor.predefineColors},on:{change:o.getConfigData},model:{value:o.fontStyle.color,callback:function(n){o.$set(o.fontStyle,"color",n)},expression:"fontStyle.color"}})],1)],1)],1),o.removeFontWeight&&o.removeFontStyle&&o.removeTextDecoration?o._e():a("el-form-item",{attrs:{label:"\u5B57\u4F53\u6837\u5F0F"}},[o.removeFontWeight?o._e():a("el-checkbox-button",{attrs:{"true-label":"bolder","false-label":"normal"},on:{change:o.getConfigData},model:{value:o.fontStyle.fontWeight,callback:function(n){o.$set(o.fontStyle,"fontWeight",n)},expression:"fontStyle.fontWeight"}},[a("i",{staticClass:"iconfont bi_bold"})]),o.removeFontStyle?o._e():a("el-checkbox-button",{attrs:{"true-label":"italic","false-label":"normal"},on:{change:o.getConfigData},model:{value:o.fontStyle.fontStyle,callback:function(n){o.$set(o.fontStyle,"fontStyle",n)},expression:"fontStyle.fontStyle"}},[a("i",{staticClass:"iconfont bi_italic"})]),o.removeTextDecoration?o._e():a("el-checkbox-button",{attrs:{"true-label":"underline","false-label":"none"},on:{change:o.getConfigData},model:{value:o.fontStyle.textDecoration,callback:function(n){o.$set(o.fontStyle,"textDecoration",n)},expression:"fontStyle.textDecoration"}},[a("i",{staticClass:"iconfont bi_underline"})])],1),o.removeHorizontalAlignment?o._e():a("el-form-item",{attrs:{label:"\u6C34\u5E73\u5BF9\u9F50"}},[a("el-select",{staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5BF9\u9F50\u65B9\u5F0F"},on:{change:o.getConfigData},model:{value:o.fontStyle.horizontalAlignment,callback:function(n){o.$set(o.fontStyle,"horizontalAlignment",n)},expression:"fontStyle.horizontalAlignment"}},o._l(o.$$global_editor.horizontalAlignment,function(n){return a("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}),1)],1)],1)],1)],1)],1)},g=[],f=r(723400),d={name:"FontStyle",components:{FontSelect:()=>r.e(16362).then(r.bind(r,916362))},mixins:[f.j],props:{fontStyle:{},title:{type:String,default:"\u5B57\u4F53"},removeColor:{type:Boolean,default:!1},removeFamily:{type:Boolean,default:!1},removeFontWeight:{type:Boolean,default:!1},removeFontStyle:{type:Boolean,default:!1},removeTextDecoration:{type:Boolean,default:!1},removeHorizontalAlignment:{type:Boolean,default:!1}},mounted(){this.fontStyle.fontWeight||(this.fontStyle.fontWeight="normal"),this.fontStyle.textDecoration||(this.fontStyle.textDecoration="none"),this.fontStyle.fontStyle||(this.fontStyle.fontStyle="normal")},methods:{getConfigData(){this.$emit("fontStyleChange",this.fontStyle)}}},u=d,b=r(768141),m=(0,b.Z)(u,s,g,!1,null,"0ad99d94",null),p=m.exports},208797:function(v,c,r){r.r(c),r.d(c,{default:function(){return a}});var s=function(){var e=this,t=e._self._c;return t("div",[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u6807\u7B7E\u9875\u5168\u5C40")])]),t("vue-lazy-component",{staticClass:"my-collapse-text"},[t("el-form",{ref:"form",attrs:{size:"mini",model:e.currentWidget.config.base,"label-width":"100px"}},[t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.base.type,expression:"currentWidget.config.base.type"}],attrs:{label:"\u5916\u8FB9\u6846"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.border,callback:function(l){e.$set(e.currentWidget.config.base,"border",l)},expression:"currentWidget.config.base.border"}})],1),t("el-form-item",{attrs:{label:"\u9009\u4E2D\u6807\u9898\u80CC\u666F\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.color,callback:function(l){e.$set(e.currentWidget.config.base,"color",l)},expression:"currentWidget.config.base.color"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:this.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.color,callback:function(l){e.$set(e.currentWidget.config.base,"color",l)},expression:"currentWidget.config.base.color"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u6807\u9898\u80CC\u666F\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.background,callback:function(l){e.$set(e.currentWidget.config.base,"background",l)},expression:"currentWidget.config.base.background"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:this.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.background,callback:function(l){e.$set(e.currentWidget.config.base,"background",l)},expression:"currentWidget.config.base.background"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u5207\u6362\u52A8\u753B"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.animated,callback:function(l){e.$set(e.currentWidget.config.base,"animated",l)},expression:"currentWidget.config.base.animated"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.base.animated,expression:"currentWidget.config.base.animated"}],attrs:{label:"\u52A8\u753B\u65F6\u957F"}},[t("el-input-number",{staticStyle:{width:"160px"},attrs:{placeholder:"\u52A8\u753B\u65F6\u957F",min:0,"controls-position":"right"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.duration,callback:function(l){e.$set(e.currentWidget.config.base,"duration",l)},expression:"currentWidget.config.base.duration"}})],1),t("el-form-item",{attrs:{label:"\u9009\u4E2D\u4E0B\u5212\u7EBF\u5BBD\u5EA6"}},[t("el-input-number",{staticStyle:{width:"160px"},attrs:{placeholder:"\u5BBD\u5EA6",min:0,"controls-position":"right"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.lineWidth,callback:function(l){e.$set(e.currentWidget.config.base,"lineWidth",l)},expression:"currentWidget.config.base.lineWidth"}})],1),t("el-form-item",{attrs:{label:"\u9009\u4E2D\u4E0B\u5212\u7EBF\u9AD8\u5EA6"}},[t("el-input-number",{staticStyle:{width:"160px"},attrs:{placeholder:"\u9AD8\u5EA6",min:0,"controls-position":"right"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.lineHeight,callback:function(l){e.$set(e.currentWidget.config.base,"lineHeight",l)},expression:"currentWidget.config.base.lineHeight"}})],1),t("el-form-item",{attrs:{label:"\u4E0B\u5212\u7EBF\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.lineBg,callback:function(l){e.$set(e.currentWidget.config.base,"lineBg",l)},expression:"currentWidget.config.base.lineBg"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:this.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.lineBg,callback:function(l){e.$set(e.currentWidget.config.base,"lineBg",l)},expression:"currentWidget.config.base.lineBg"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u6ED1\u52A8\u5207\u6362"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.swipeable,callback:function(l){e.$set(e.currentWidget.config.base,"swipeable",l)},expression:"currentWidget.config.base.swipeable"}})],1),t("el-form-item",{attrs:{label:"\u6587\u5B57\u8FC7\u957F\u7701\u7565"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.ellipsis,callback:function(l){e.$set(e.currentWidget.config.base,"ellipsis",l)},expression:"currentWidget.config.base.ellipsis"}})],1),t("el-form-item",{attrs:{label:"\u6700\u5927\u6807\u7B7E\u4E2A\u6570(\u4E0D\u6EDA\u52A8)"}},[t("el-input-number",{staticStyle:{width:"160px"},attrs:{min:1,max:7,step:1,"controls-position":"right"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.swipeThreshold,callback:function(l){e.$set(e.currentWidget.config.base,"swipeThreshold",l)},expression:"currentWidget.config.base.swipeThreshold"}})],1),t("el-form-item",{attrs:{label:"\u6807\u9898\u680F\u9AD8\u5EA6"}},[t("el-input-number",{staticStyle:{width:"160px"},attrs:{min:0,"controls-position":"right"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.height,callback:function(l){e.$set(e.currentWidget.config.base,"height",l)},expression:"currentWidget.config.base.height"}})],1),t("el-form-item",{attrs:{label:"\u6FC0\u6D3B\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.titleActiveColor,callback:function(l){e.$set(e.currentWidget.config.base,"titleActiveColor",l)},expression:"currentWidget.config.base.titleActiveColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:this.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.titleActiveColor,callback:function(l){e.$set(e.currentWidget.config.base,"titleActiveColor",l)},expression:"currentWidget.config.base.titleActiveColor"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u5931\u6D3B\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-input",{attrs:{placeholder:"\u9009\u62E9\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.titleInactiveColor,callback:function(l){e.$set(e.currentWidget.config.base,"titleInactiveColor",l)},expression:"currentWidget.config.base.titleInactiveColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:this.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.titleInactiveColor,callback:function(l){e.$set(e.currentWidget.config.base,"titleInactiveColor",l)},expression:"currentWidget.config.base.titleInactiveColor"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u9ED8\u8BA4\u6FC0\u6D3B"}},[t("el-select",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.initActive,callback:function(l){e.$set(e.currentWidget.config.base,"initActive",l)},expression:"currentWidget.config.base.initActive"}},e._l(e.currentWidget.config.tabPanes,function(l){return t("el-option",{key:l.id,attrs:{label:l.label,value:l.id}})}),1)],1),t("el-form-item",{attrs:{label:"\u5F00\u542F\u61D2\u52A0\u8F7D"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.base.lazyRender,callback:function(l){e.$set(e.currentWidget.config.base,"lazyRender",l)},expression:"currentWidget.config.base.lazyRender"}})],1)],1)],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u6807\u7B7E\u9875\u6807\u9898")])]),t("vue-lazy-component",{staticClass:"my-collapse-text"},[t("el-form",{ref:"form-title",attrs:{size:"mini",model:e.currentWidget.config.tabsTitle,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"\u6392\u5217\u65B9\u5F0F"}},[t("el-select",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.flex,callback:function(l){e.$set(e.currentWidget.config.tabsTitle,"flex",l)},expression:"currentWidget.config.tabsTitle.flex"}},e._l(e.flexList,function(l){return t("el-option",{key:l.value,attrs:{value:l.value,label:l.label}})}),1)],1),t("el-form-item",{attrs:{label:"\u5BF9\u9F50\u65B9\u5F0F"}},[t("el-select",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.justifyContent,callback:function(l){e.$set(e.currentWidget.config.tabsTitle,"justifyContent",l)},expression:"currentWidget.config.tabsTitle.justifyContent"}},e._l(e.justifyContentList,function(l){return t("el-option",{key:l.value,attrs:{value:l.value,label:l.label}})}),1)],1),t("el-form-item",{attrs:{label:"\u663E\u793A\u56FE\u6807"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.showIcon,callback:function(l){e.$set(e.currentWidget.config.tabsTitle,"showIcon",l)},expression:"currentWidget.config.tabsTitle.showIcon"}})],1),t("font-style",{attrs:{fontStyle:e.currentWidget.config.tabsTitle.fontStyle,title:"\u6587\u5B57\u5B57\u4F53",removeHorizontalAlignment:!0,"remove-color":!0},on:{fontStyleChange:function(l){return e.fontStyleChange(l,"fontStyle")}}}),t("el-form-item",{attrs:{label:"\u56FE\u6807\u5927\u5C0F"}},[t("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"160px"},attrs:{placeholder:"\u56FE\u6807\u5927\u5C0F",min:0,"controls-position":"right",step:1},on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.iconFontStyle.fontSize,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.iconFontStyle,"fontSize",l)},expression:"currentWidget.config.tabsTitle.iconFontStyle.fontSize"}})],1),t("el-form-item",{attrs:{label:"\u663E\u793A\u5FBD\u6807"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.show,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"show",l)},expression:"currentWidget.config.tabsTitle.badge.show"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.tabsTitle.badge.show,expression:"currentWidget.config.tabsTitle.badge.show"}],attrs:{label:"\u663E\u793A\u4E3A\u5706\u70B9"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.dot,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"dot",l)},expression:"currentWidget.config.tabsTitle.badge.dot"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.tabsTitle.badge.dot,expression:"currentWidget.config.tabsTitle.badge.dot"}],attrs:{label:"\u5706\u70B9\u5927\u5C0F"}},[t("el-input-number",{staticStyle:{width:"160px"},attrs:{step:1,min:1,"controls-position":"right"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.fontSize,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"fontSize",l)},expression:"currentWidget.config.tabsTitle.badge.fontSize"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.tabsTitle.badge.show&&!e.currentWidget.config.tabsTitle.badge.dot,expression:"currentWidget.config.tabsTitle.badge.show && !currentWidget.config.tabsTitle.badge.dot"}],attrs:{label:"\u6700\u5927\u503C"}},[t("el-input-number",{staticStyle:{width:"160px"},attrs:{min:0,"controls-position":"right"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.max,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"max",l)},expression:"currentWidget.config.tabsTitle.badge.max"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.tabsTitle.badge.show,expression:"currentWidget.config.tabsTitle.badge.show"}],attrs:{label:"\u5FBD\u6807\u6FC0\u6D3B\u80CC\u666F\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:14}},[t("el-input",{attrs:{placeholder:"\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.activeBackgroundColor,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"activeBackgroundColor",l)},expression:"currentWidget.config.tabsTitle.badge.activeBackgroundColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.activeBackgroundColor,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"activeBackgroundColor",l)},expression:"currentWidget.config.tabsTitle.badge.activeBackgroundColor"}})],1)],1)],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.tabsTitle.badge.show,expression:"currentWidget.config.tabsTitle.badge.show"}],attrs:{label:"\u5FBD\u6807\u5931\u6D3B\u80CC\u666F\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:14}},[t("el-input",{attrs:{placeholder:"\u989C\u8272"},on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.inActiveBackgroundColor,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"inActiveBackgroundColor",l)},expression:"currentWidget.config.tabsTitle.badge.inActiveBackgroundColor"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:e.currentWidget.config.tabsTitle.badge.inActiveBackgroundColor,callback:function(l){e.$set(e.currentWidget.config.tabsTitle.badge,"inActiveBackgroundColor",l)},expression:"currentWidget.config.tabsTitle.badge.inActiveBackgroundColor"}})],1)],1)],1)],1)],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u9762\u677F\u6837\u5F0F")])]),t("vue-lazy-component",{staticClass:"my-collapse-text"},[t("el-form",{ref:"form-data",attrs:{size:"mini",model:e.currentWidget.config,"label-width":"100px"}},[t("el-collapse",e._l(e.currentWidget.config.tabPanes,function(l){return t("el-collapse-item",{key:l.id,attrs:{title:l.label.length<10?l.label:l.label.substring(0,10)+"..."}},[t("el-form-item",{attrs:{label:"\u662F\u5426\u7981\u7528"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:l.disabled,callback:function(i){e.$set(l,"disabled",i)},expression:"tabPane.disabled"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentWidget.config.tabsTitle.showIcon,expression:"currentWidget.config.tabsTitle.showIcon"}],attrs:{label:"\u56FE\u6807\u9009\u62E9"}},[t("el-icon",{attrs:{icon:l.icon},on:{"on-icon-change":function(i){return e.onIconChange(i,l)}}})],1),t("el-form-item",{attrs:{label:"\u6807\u9898\u6587\u672C"}},[t("el-input",{staticStyle:{width:"160px"},attrs:{placeholder:"\u6807\u9898\u6587\u672C"},on:{change:e.setConfigData},model:{value:l.label,callback:function(i){e.$set(l,"label",i)},expression:"tabPane.label"}})],1),t("el-form-item",{attrs:{label:"\u5185\u5BB9\u987A\u5E8F"}},[t("el-input-number",{staticClass:"my-style-number",staticStyle:{width:"180px"},attrs:{placeholder:"\u5185\u5BB9\u987A\u5E8F","controls-position":"right",step:1,min:1},on:{change:e.setConfigData},model:{value:l.order,callback:function(i){e.$set(l,"order",i)},expression:"tabPane.order"}})],1),t("el-form-item",{attrs:{label:"\u663E\u793A\u6EDA\u52A8\u6761"}},[t("el-switch",{on:{change:e.getConfigData},model:{value:l.scroll.show,callback:function(i){e.$set(l.scroll,"show",i)},expression:"tabPane.scroll.show"}})],1),l.scroll.show?t("div",[t("el-form-item",{attrs:{label:"\u6EDA\u52A8\u6761\u989C\u8272"}},[t("el-row",[t("el-col",{attrs:{span:14}},[t("el-input",{attrs:{placeholder:"\u6EDA\u52A8\u6761\u989C\u8272"},on:{change:e.getConfigData},model:{value:l.scroll.color,callback:function(i){e.$set(l.scroll,"color",i)},expression:"tabPane.scroll.color"}})],1),t("el-col",{attrs:{span:6}},[t("el-color-picker",{staticStyle:{"margin-left":"5px"},attrs:{"show-alpha":"",predefine:e.$$global_editor.predefineColors},on:{change:e.getConfigData},model:{value:l.scroll.color,callback:function(i){e.$set(l.scroll,"color",i)},expression:"tabPane.scroll.color"}})],1)],1)],1),t("el-form-item",{attrs:{label:"\u6EDA\u52A8\u6761\u5BBD\u5EA6"}},[t("el-input-number",{staticClass:"my-style-number",attrs:{placeholder:"\u6EDA\u52A8\u6761\u5BBD\u5EA6(px)",min:0,"controls-position":"right"},on:{change:e.getConfigData},model:{value:l.scroll.width,callback:function(i){e.$set(l.scroll,"width",i)},expression:"tabPane.scroll.width"}})],1)],1):e._e()],1)}),1)],1)],1)],2)],1)],1)},g=[],f=r(723400),d=r(148836),u=r(392112),b=r(521007),m={name:"mobile-container-tabs-style",props:["currentWidget"],mixins:[f.j],components:{FontStyle:u.Z,ElIcon:b.Z},data(){return{flexList:[{label:"\u6A2A\u5411",value:"row"},{label:"\u7EB5\u5411",value:"column"}],justifyContentList:[{label:"\u5DE6",value:"flex-start"},{label:"\u4E2D",value:"center"},{label:"\u53F3",value:"flex-end"},{label:"\u4E24\u7AEF",value:"space-around"},{label:"\u4E24\u7AEF\u6491\u5F00",value:"space-between"}]}},methods:{fontStyleChange(n,e){this.currentWidget.config.tabsTitle[e]=n,this.getConfigData()},setConfigData(){this.currentWidget.config.tabPanes=this.currentWidget.config.tabPanes.sort((n,e)=>n.order-e.order),this.getConfigData()},onIconChange(n,e){e.icon=n,this.getConfigData()}},computed:{...(0,d.Se)(["getCanvasSetting"])}},p=m,h=r(768141),o=(0,h.Z)(p,s,g,!1,null,"62682a68",null),a=o.exports}}]);
