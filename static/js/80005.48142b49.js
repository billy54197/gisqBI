"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[80005],{580005:function(I,a,e){e.r(a),e.d(a,{default:function(){return C}});var c=function(){var t=this,o=t._self._c;return o("div",{staticClass:"task-query-class",style:{width:t.widgetInfo.attr.w+"px",height:t.widgetInfo.attr.hh+"px",overflow:"hidden"}},[o("hide-button",{attrs:{attr:t.widgetInfo.attr}}),t.init?o("GisqTaskComponent",{ref:"GisqTaskBack",attrs:{compConfig:t.componentConfig},on:{getButtonList:t.getButtonList,getTableColumnList:t.getTableColumnList,getTableSearchList:t.getTableSearchList}}):t._e()],1)},g=[],d=e(865324),h=e(56279),u=e(980989),r=e(148836),f=e(231954),n=e(321300),s=e(927966),l=e(844513),p={name:"task-back",mixins:[d.baseConfig,h.P],components:{GisqTaskComponent:u.GisqTaskComponent,HideButton:l.Z},props:["widgetInfo"],computed:{...(0,r.Se)(["editorAppId","viewAppId"])},watch:{"widgetInfo.attr.hide":function(){this.$emit("attrChange",this.widgetInfo)}},data(){return{componentConfig:{},currentWidgetInfo:{},init:!1}},methods:{...(0,r.nv)(["updateCurrentWidget","setCurrentWidget"]),loadInfo(i){this.setTaskWaitConfig(i),this.lifecycleAfterLoad()},setTaskWaitConfig(i){this.componentConfig=JSON.parse(JSON.stringify(i.config)),this.componentConfig.service=f.Z.baseConfig.domain;const t=JSON.parse(n.getStoreUserInfo());t.access_token=n.getStoreToken(),this.componentConfig.userInfo=t,this.componentConfig.urlPathNameBi=n.isView()?"view":"editor",this.componentConfig.subGuid=this.editorAppId||this.viewAppId,this.componentConfig.isUseAppObject=f.Z.baseConfig.isUseAppObject,this.init=!0},getButtonList(i){this.currentWidgetInfo=JSON.parse(JSON.stringify(this.widgetInfo)),this.currentWidgetInfo.config.tableButtonList=JSON.parse(JSON.stringify(i)),this.updateCurrentWidget(JSON.parse(JSON.stringify(this.currentWidgetInfo)))},getTableColumnList(i){this.currentWidgetInfo=JSON.parse(JSON.stringify(this.widgetInfo)),this.currentWidgetInfo.config.tableColumnList=JSON.parse(JSON.stringify(i)),this.updateCurrentWidget(JSON.parse(JSON.stringify(this.currentWidgetInfo)))},getTableSearchList(i){this.currentWidgetInfo=JSON.parse(JSON.stringify(this.widgetInfo)),this.currentWidgetInfo.config.tableSearchList=JSON.parse(JSON.stringify(i)),this.updateCurrentWidget(JSON.parse(JSON.stringify(this.currentWidgetInfo)))},reLoadInfo(i){this.loadInfo(i)}},mounted(){this.loadInfo(this.widgetInfo);let i=this;window.onmessage=function(t){t.data.cmd&&t.data.cmd==="refresh"&&i.$refs.GisqTaskBack.refreshTableData()},s.Z.$on("clickedSearchSetting",()=>{this.$refs.GisqTaskBack&&this.$refs.GisqTaskBack.showSearchSetting()}),s.Z.$on("clickedButtonSetting",()=>{this.$refs.GisqTaskBack&&this.$refs.GisqTaskBack.showButtonSetting()}),s.Z.$on("clickedColumnSetting",()=>{this.$refs.GisqTaskBack&&this.$refs.GisqTaskBack.showColumnSetting()})},beforeDestroy(){s.Z.$off("clickedSearchSetting"),s.Z.$off("clickedButtonSetting"),s.Z.$off("clickedColumnSetting")}},m=p,S=e(768141),k=(0,S.Z)(m,c,g,!1,null,"058edc0f",null),C=k.exports}}]);
