"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[54483],{542549:function(y,l,n){n.r(l),n.d(l,{default:function(){return v}});var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"roam3d-setting"}},[t("el-collapse",[t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title",staticStyle:{"font-size":"16px"}},[e._v("\u5F00\u6316\u538B\u5E73\u8BBE\u7F6E")])]),t("vue-lazy-component",[t("el-form",[t("el-form-item",{attrs:{label:"\u5F00\u6316\u538B\u5E73\u670D\u52A1\u5730\u5740"}},[t("el-input",{staticStyle:{width:"195px"},on:{change:function(a){return e.getConfigData()}},model:{value:e.currentWidget.config.url,callback:function(a){e.$set(e.currentWidget.config,"url",a)},expression:"currentWidget.config.url"}})],1)],1)],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title",staticStyle:{"font-size":"16px"}},[e._v("\u9762\u677F\u8BBE\u7F6E")])]),t("vue-lazy-component",[t("gis-card-setting",{attrs:{config:e.currentWidget.config.styleConfig,theme:e.currentWidget.config.themeStyle,"img-src":e.currentWidget.config.imgSrc},on:{change:e.cardSettingChange}})],1)],2)],1)],1)},o=[],r=n(588406),g=n(723400),c=n(330735),d=n(149500),u={name:"FlattenToolsStyle",components:{LayerDirectorySingle:r.Z,gisCardSetting:c.Z},mixins:[g.j],props:["currentWidget"],data(){return{}},mounted(){d.log(this.currentWidget.config.layer)},methods:{onLayerChange(i){this.currentWidget.config.layer=i,this.getConfigData()},cardSettingChange(i,e,t){this.currentWidget.config.styleConfig=i,this.currentWidget.config.themeStyle=e,this.currentWidget.config.imgSrc=t||void 0,this.getConfigData()},showBtnChange(){this.getConfigData()},initShowChange(){this.getConfigData()}}},f=u,m=n(768141),h=(0,m.Z)(f,s,o,!1,null,null,null),v=h.exports}}]);
