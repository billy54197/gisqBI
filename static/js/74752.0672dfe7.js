"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[74752],{328804:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _utils_mUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(321300),_components_editor_widgets_common_view_hide_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(844513),_js_editor_action_action_receive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(445061),_js_editor_action_action_sendout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(126711),_utils_bus_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(927966),_country_map_config__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(485982),_country_map_config_extend__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(438141),_js_view_board_echarts_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(99349),echarts_gl__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(179966),element_ui__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(555616),element_ui__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_9__),_api_sys_gisXzqGeojsonService__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(143156),vue__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(42160),_components_editor_widgets_charts_common_auto_show_auto_show__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(598521),_js_editor_action_action_lifecycle__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(56279),console=__webpack_require__(149500);const ECHARTS=__webpack_require__(954255);__webpack_exports__.Z={props:["widgetInfo"],name:"country-map",components:{HideButton:_components_editor_widgets_common_view_hide_button__WEBPACK_IMPORTED_MODULE_1__.Z},mixins:[_country_map_config__WEBPACK_IMPORTED_MODULE_5__.baseConfig,_country_map_config_extend__WEBPACK_IMPORTED_MODULE_6__.s,_js_editor_action_action_lifecycle__WEBPACK_IMPORTED_MODULE_12__.P,_js_view_board_echarts_utils__WEBPACK_IMPORTED_MODULE_7__.P,_js_editor_action_action_receive__WEBPACK_IMPORTED_MODULE_2__.u,_js_editor_action_action_sendout__WEBPACK_IMPORTED_MODULE_3__.H],data(){return{inited:!1,mapChart:null,dimensionsEx:null,dimensionsAliasEx:null,identical:!0,regionParent:{name:null,code:null},currentRegion:{id:null,name:null,cp:null,features:null,childrenCentralPoint:null}}},mounted(){this.mapChart||(this.mapChart=ECHARTS.init(this.$refs.countryMap,null,{devicePixelRatio:2})),this.initAction(this.widgetInfo),this.loadInfo(this.widgetInfo)},destroyed(){this.mapChart.dispose()},watch:{"widgetInfo.attr.hide":function(){this.$emit("attrChange",this.widgetInfo)}},methods:{loadInfo(info){info==null&&(info=this.widgetInfo),info.config.regionCode=this.widgetInfo.config.regionCode,this.getCurrentRegionInfo(info.config.regionCode,geojson_obj=>{let symbol=["circle"],source=info.dataset[info.dataset.type].source,dimensions=info.dataset[info.dataset.type].dimensions,dimensionsAlias=info.dataset[info.dataset.type].dimensionsAlias,encode=info.dataset[info.dataset.type].encode;this.$$lib__.each(info.config.scatter,(e,o)=>{switch(e.showImage){case!0:symbol[o]="image://"+this.getImageUrl(e.symbolImage);break;case!1:symbol[o]=e.symbolType;break;case"svg":symbol[o]="path://"+e.symbolSvg;break;case"custom":if(console.log("Execute script for formatter component to replace dataset parameters"),e.symbolScript.content===""){element_ui__WEBPACK_IMPORTED_MODULE_9__.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}symbol[o]=new Function("value","params",e.symbolScript.content);break}!e.symbolType.includes("image://")&&e.symbolType.includes("/images/")&&(symbol[o]="image://"+this.getImageUrl(e.symbolType))}),this.dimensionsEx=dimensions,this.dimensionsAliasEx=dimensionsAlias;let title=JSON.parse(JSON.stringify(info.config.title)),legend=this.getLegend(info.config.legend),tooltip=this.getTooltip(info.config.tooltip2);if(!info.config.tooltip2.formatter.show&&!info.config.tooltip2.formatter.script){let e="";info.config.map.tooltip&&(e=info.config.map.tooltip.unit),Object.assign(tooltip,{formatter:function(o){let t="";return o.data&&o.data.value&&info.config.map.tooltip.showValue&&(t=o.data.alias+" : "+o.data.value[2]+e+"<br>"),o.name+"<br>"+t}})}let data=[],legendData=[],len=source.length,convert={},alias="";for(let e=dimensions.length-1;e>-1;--e)convert[dimensions[e]]=e;this.$$lib__.each(encode.data,e=>{let o=[];if(convert[e]&&this.dimensionsAliasEx[convert[e]]&&(alias=this.dimensionsAliasEx[convert[e]].alias||this.dimensionsAliasEx[convert[e]].name),e){for(let t=0;t<len;++t){let n=source[t],s=n[convert[e]];typeof s<"u"&&o.push({region:n[convert[encode.region]]||"",value:s,coordinate:n[convert[encode.coordinate]]||"",name:n[convert[encode.name]]||"",source:n,alias})}legendData.push(alias),data.push(o)}}),info.config.visualMap.visualMapMin=="dataMin"&&(info.config.visualMap.min=this.getVisualmapData(info,encode.data[0])[0]),info.config.visualMap.visualMapMax=="dataMax"&&(info.config.visualMap.max=this.getVisualmapData(info,encode.data[0])[1]),(typeof info.config.visualMap.min=="string"||typeof info.config.visualMap.max=="string")&&(info.config.visualMap.min=Number(info.config.visualMap.min),info.config.visualMap.max=Number(info.config.visualMap.max)),info.config.visualMap.seriesIndex=0;let option={title,tooltip,visualMap:info.config.visualMap.show?this.getVisualMap(info.config.visualMap):"",legend:JSON.parse(JSON.stringify(legend))},font=info.config.graphic.style.fontSize+"px solid"+info.config.graphic.style.fontFamily;if(option.graphic=[{type:"group",bounding:"raw",left:info.config.graphic.style.iconLeft+"%",top:info.config.graphic.style.iconTop+"%",ignore:this.ignoreGraphic(),children:[{type:"text",z:100,style:{fill:info.config.graphic.style.color,text:info.config.graphic.style.text?info.config.graphic.style.text:"\u4E0A\u4E00\u7EA7",font,x:info.config.graphic.style.iconWidth+info.config.graphic.style.txtLeft,y:info.config.graphic.style.txtTop}},{type:"image",z:-10,bounding:"raw",origin:[25,25],ignore:this.ignoreGraphic(),style:{image:this.getImageUrl(info.config.graphic.style.iconImg),width:info.config.graphic.style.iconWidth,height:info.config.graphic.style.iconHeight}}]}],info.config.mapType==="map3D"){let e=JSON.parse(JSON.stringify(info.config.geo3D)),o=JSON.parse(JSON.stringify(info.config.scatter3D));info.config.visualMap.seriesIndex=0,option.geo=[],option.geo3D=[],option.series=[],option.geo3D=e,this.$$lib__.each(data,(t,n)=>{let s=info.config.scatter3D[n].symbolType,r="circle";switch(s){case"icon":r=info.config.scatter3D[n].symbolIcon;break;case"svg":r="path://"+info.config.scatter3D[n].symbolSvg;break}let a=this.convertData(t);if(e.label.formatter=this.getFormatterString(info.config.geo3D.label.formatter),o[n].label.formatter=this.getFormatterString(info.config.scatter3D[n].label.formatter),o[n].symbol=r,o[n].data=a,o[n].name=legendData[n],e.autoMargin||(e.left=e.left+"%",e.top=e.top+"%",e.right=e.right+"%",e.bottom=e.bottom+"%"),e.map=info.config.regionCode.toString(),info.config.roam||(e.show=!1,e.viewControl.orthographicSize=100,e.viewControl.maxOrthographicSize=100,e.viewControl.minOrthographicSize=100,e.viewControl.projection="orthographic",e.viewControl.rotateSensitivity=0),!info.config.roam){let l=JSON.parse(JSON.stringify(e));l.type="map3D",l.zlevel=-100,l.show=!0,l.shading="realistic",l.data=this.$$lib__.map(a,f=>{let _=JSON.parse(JSON.stringify(f));return f.value&&Array.isArray(f.value)&&f.value.length==3&&(_.value=f.value[2]),_.code=f.region,_}),l.viewControl.projection="orthographic",l.viewControl.orthographicSize=100,l.viewControl.maxOrthographicSize=100,l.viewControl.minOrthographicSize=100,l.viewControl.rotateSensitivity=0,n==0&&option.series.push(l)}option.series.push(o[n])})}else{option.geo3D=[];let geo={map:info.config.regionCode.toString(),show:!0,aspectScale:1,itemStyle:{normal:{areaColor:info.config.itemStyle.normal.color,borderColor:info.config.shadow.borderColor,borderWidth:info.config.shadow.borderWidth,shadowColor:info.config.shadow.shadowColor,shadowBlur:info.config.shadow.shadowBlur}},regions:[{name:"\u5357\u6D77\u8BF8\u5C9B",itemStyle:{normal:info.config.geo.islands.itemStyle.normal,emphasis:info.config.geo.islands.itemStyle.emphasis},label:{}}]};info.config.autoMargin||(geo.left=info.config.left+"%",geo.right=info.config.right+"%",geo.top=info.config.top+"%",geo.bottom=info.config.bottom+"%"),option.geo=[geo],option.series=[{data:this.convertData(data[0]),geoIndex:1,aspectScale:1,type:"map",map:info.config.regionCode.toString(),showLegendSymbol:!1,label:{show:info.config.geo.label.show,fontSize:info.config.geo.label.fontSize,color:info.config.geo.label.color,fontFamily:info.config.geo.label.fontFamily,emphasis:{show:!1,color:info.config.geo.emphasisLabelColor}},select:{itemStyle:{areaColor:info.config.select.itemStyle.areaColor,borderType:info.config.select.itemStyle.borderType,borderColor:info.config.select.itemStyle.borderColor,borderWidth:info.config.select.itemStyle.borderWidth},label:{show:info.config.geo.label.show,color:info.config.select.label.color,fontSize:info.config.select.label.fontSize}},itemStyle:{normal:{areaColor:"transparent",borderColor:info.config.itemStyle.normal.borderColor,borderWidth:info.config.itemStyle.normal.borderWidth,borderType:info.config.itemStyle.normal.borderType,shadowColor:info.config.itemStyle.normal.shadowColor,shadowBlur:info.config.itemStyle.normal.shadowBlur},emphasis:{areaColor:info.config.itemStyle.emphasis.areaColor}}}],info.config.autoMargin||(option.series[0].left=info.config.left+"%",option.series[0].right=info.config.right+"%",option.series[0].top=info.config.top+"%",option.series[0].bottom=info.config.bottom+"%"),this.$$lib__.each(data,(da,i)=>{let list=[];for(let e in da)da[e].value&&da[e].value!=""&&list.push(parseFloat(da[e].value));list.sort(function(e,o){return e-o});let maxcnt=eval(list[list.length-1]),symbolOffsetX=info.config.scatter[i].symbolOffsetX;(!symbolOffsetX||symbolOffsetX=="")&&(symbolOffsetX=0);let symbolOffsetY=info.config.scatter[i].symbolOffsetY;(!symbolOffsetY||symbolOffsetY=="")&&(symbolOffsetY=0);let arr=this.convertData(da),scatter={name:legendData[i],show:info.config.scatter[i].show,type:info.config.scatter[i].effect.show?"effectScatter":"scatter",coordinateSystem:"geo",data:arr,symbol:symbol[i],symbolOffset:[symbolOffsetX,symbolOffsetY],legendHoverLink:!1,animation:!1,symbolSize:(e,o)=>{if(info.config.scatter[i].show){if(da[o.dataIndex].value==="")return 0;let t=parseFloat(da[o.dataIndex].value);return t=t/maxcnt*info.config.scatter[i].height,t<info.config.scatter[i].smallestSize&&(t=info.config.scatter[i].smallestSize),info.config.scatter[i].isScale===!0?o.symbolSize=[info.config.scatter[i].width,t]:info.config.scatter[i].isScale===!1?o.symbolSize=t:o.symbolSize=[info.config.scatter[i].width,info.config.scatter[i].height],o.symbolSize}else return o.symbolSize=1e-6,o.symbolSize},label:{distance:1,show:info.config.scatter[i].value.show,position:info.config.scatter[i].value.position,fontSize:info.config.scatter[i].value.fontSize,color:info.config.scatter[i].value.color,fontFamily:info.config.scatter[i].value.fontFamily,formatter:function(e){return e.value[2]}},itemStyle:{color:info.config.scatter[i].color},zlevel:5,rippleEffect:{period:info.config.scatter[i].effect.period,scale:info.config.scatter[i].effect.scale,brushType:info.config.scatter[i].effect.brushType},emphasis:JSON.parse(JSON.stringify(info.config.scatter[i].emphasis))},effectScatter={name:legendData[i],type:"scatter",coordinateSystem:"geo",data:arr,symbol:"circle",symbolSize:(e,o)=>{if(info.config.scatter[i].show){let t=parseFloat(da[o.dataIndex].value);return t=t/maxcnt*info.config.scatter[i].height,t<info.config.scatter[i].smallestSize&&(t=info.config.scatter[i].smallestSize),info.config.scatter[i].isScale===!0?o.symbolSize=[info.config.scatter[i].width,t]:info.config.scatter[i].isScale===!1?o.symbolSize=t:o.symbolSize=[info.config.scatter[i].width,info.config.scatter[i].height],o.symbolSize}else return o.symbolSize=1e-6,o.symbolSize},color:"rgba(0,0,0,0)",label:{show:info.config.scatter[i].name.show,position:"bottom",distance:1,fontSize:info.config.scatter[i].name.fontSize,color:info.config.scatter[i].name.color,fontFamily:info.config.scatter[i].name.fontFamily,formatter:function(e){return e.name}},emphasis:JSON.parse(JSON.stringify(info.config.scatter[i].emphasis))};option.series.push(scatter,effectScatter)})}if(!this.widgetInfo.config.allowDrill)this.widgetInfo.action.sendOut.actionList&&this.widgetInfo.action.sendOut.actionList.length>=1?this.$$lib__.find(this.widgetInfo.action.sendOut.actionList,o=>o.enabled)||this.mapChart.getZr().on("mousemove",()=>{this.mapChart.getZr().setCursorStyle("default")}):this.mapChart.getZr().on("mousemove",()=>{this.mapChart.getZr().setCursorStyle("default")});else if(this.widgetInfo.action.sendOut.actionList&&this.widgetInfo.action.sendOut.actionList.length>=1){debugger;let e=this.$$lib__.find(this.widgetInfo.action.sendOut.actionList,o=>o.enabled);console.log("\u5F00\u542F\u4E8B\u4EF6\u76D1\u542C",!e),e||this.mapChart.getZr().on("mousemove",()=>{this.mapChart.getZr().setCursorStyle("default")})}ECHARTS.registerMap(info.config.regionCode.toString(),geojson_obj),this.mapChart.clear(),this.mapChart.off("click"),this.mapChart.setOption(this.lifecycleBeforeChartsLoad(option)),this.clickEvent(),this.$nextTick(function(){this.isClickEventWorking=!1,this.doInitAction(info),_components_editor_widgets_charts_common_auto_show_auto_show__WEBPACK_IMPORTED_MODULE_11__.Z.autoShow(this,this.mapChart,info.config.autoShow)})})},reLoadInfo(e){e&&(this.$refs.countryMap.style.width=e.attr.w+"px",this.$refs.countryMap.style.height=e.attr.hh+"px"),this.loadInfo(e),this.mapChart.resize()},getCurrentRegionInfo(e,o){this.currentRegion.id=null,this.currentRegion.name=null,this.currentRegion.childrenCentralPoint=null,_api_sys_gisXzqGeojsonService__WEBPACK_IMPORTED_MODULE_10__.h.getEchartsGeojsonByCodeWithChildrenCentralPoint(e).then(t=>{if(t&&t.status==200){if(!t.data){console.warn("\u672A\u67E5\u8BE2\u5230\u884C\u653F\u533A\u4EE3\u7801[ "+e+" ]\u7684\u76F8\u5173\u6570\u636E");return}this.widgetInfo.config.regionName=t.data.xzqName,this.regionParent.code=t.data.parentCode,this.regionParent.name=t.data.parentName,this.currentRegion.id=e,this.currentRegion.name=t.data.xzqName,this.currentRegion.childrenCentralPoint=t.data.childrenCentralPoint;let n=t.data.geojsonEcharts;if(!n||n==""){console.warn("\u884C\u653F\u533A[ "+t.data.xzqName+" ]\u6CA1\u6709\u8BBE\u7F6E\u884C\u653F\u533A\u8FB9\u754C\u6570\u636E"),o();return}let s=JSON.parse(n);s&&s.cp&&(this.currentRegion.cp=s.cp),s&&s.features&&(this.currentRegion.features=s.features),o(s)}else console.log(t.msg)})},convertData(e){let o=null,t=this.widgetInfo.dataset[this.widgetInfo.dataset.type];for(let r=0;r<t.dimensions.length;r++)t.dimensions[r]==t.encode.scatterPosition&&(o=r);let n=[],s=[];if(e&&e.length>0)for(let r=0;r<e.length;r++)if(this.widgetInfo.dataset.regionType=="coordinate"){if(e[r].coordinate&&e[r].coordinate.toString().includes(",")){let a=e[r].coordinate;a=a.split(",");let l=[Number(a[0].trim()),Number(a[1].trim())];n.push({name:e[r].name,region:e[r].name,value:l.concat(e[r].value),source:e[r].source,alias:e[r].alias})}}else{let a=this.getFeatureInfo(e[r].region);a?(o&&e[r].source[o].toString().indexOf(",")>-1?s=[e[r].source[o].toString().split(",")[0],e[r].source[o].toString().split(",")[1]]:a.cp&&a.cp.length==2?s=a.cp:console.warn("\u6570\u636E\u96C6\u6570\u636E\u6E32\u67D3\u65F6\uFF0C\u5728\u884C\u653F\u533A[ "+this.currentRegion.name+" ]\u7684geojson\u6570\u636E\u7684features\u5C5E\u6027\u4E2D\uFF0C\u672A\u627E\u5230\u884C\u653F\u533A\u4EE3\u7801[ "+e[r].region+' ]\u7684\u4E2D\u5FC3\u70B9cp\u5C5E\u6027\uFF0C\u5373properties:{"id":"","name":"","cp":[]}\u5C5E\u6027\u4E2Dcp\u4E0D\u5B58\u5728'),n.push({name:a.name,region:e[r].region,code:e[r].region,value:[s[0],s[1],e[r].value],source:e[r].source,alias:e[r].alias})):n.push({name:e[r].region,region:e[r].region,value:e[r].value,source:e[r].source,alias:e[r].alias})}return n},getFeatureInfo(e){let o=this.currentRegion.childrenCentralPoint[e];if(o&&o.cp)return JSON.parse(JSON.stringify(o));if(!this.currentRegion.features)return console.warn("\u6570\u636E\u96C6\u6570\u636E\u6E32\u67D3\u65F6\uFF0C\u5F53\u524D\u884C\u653F\u533A[ "+this.currentRegion.name+" ]\u7F3A\u5C11features\u5C5E\u6027"),null;let t=this.$$lib__.find(this.currentRegion.features,n=>n.properties&&e==n.properties.id);return t?{id:t.properties.id,name:t.properties.name,cp:t.properties.cp}:(console.warn("\u6570\u636E\u96C6\u6570\u636E\u6E32\u67D3\u65F6\uFF0C\u5728\u884C\u653F\u533A[ "+this.currentRegion.name+" ]\u7684geojson\u6570\u636E\u7684features\u5C5E\u6027\u4E2D\uFF0C\u672A\u627E\u5230\u884C\u653F\u533A\u4EE3\u7801[ "+e+' ]\u7684\u76F8\u5173\u5C5E\u6027\uFF0C\u5373properties:{"id":"","name":"","cp":[]}\u4E0D\u5B58\u5728'),null)},initAction(e){this.actionSendout(e),this.actionReceive(e),this.registerAction(e,"openRegion","widgetList",this.doOpenRegion),this.registerAction(e,"emphasis","widgetList",this.doEmphasis),this.clickEvent()},doInitAction(e){if(!this.inited){if(e.action&&e.action.sendOut&&e.action.sendOut.actionList){let o=e.action.sendOut.actionList.find(t=>t.enabled&&t.code=="init");if(o){let t=o.code+"_"+e.id,n={};o.paramsExtend&&o.paramsExtend.length>0&&this.getParamsExtend(n,o.paramsExtend,e),_utils_bus_js__WEBPACK_IMPORTED_MODULE_4__.Z.$emit(t,n)}}this.inited=!0}},doOpenRegion(e,o,t,n){if(o&&t&&o[t]){let s=o[t];if(n.script&&n.script.enabled){if(console.log("Execute script for "+n.name+" component to "+n.script.title+" component"),n.script.content==""){element_ui__WEBPACK_IMPORTED_MODULE_9__.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_openRegion=new Function("region,info,data,param_key",n.script.content),this.customScript_actionSend_openRegion(s,e,o,t)}else this.widgetInfo.config.regionCode!=s&&(this.widgetInfo.config.regionCode=s,this.loadInfo(this.widgetInfo))}},doEmphasis(e,o,t,n){if(o&&t&&o[t]){let s=o[t];if(n.script&&n.script.enabled){if(console.log("Execute script for "+n.name+" component to "+n.script.title+" component"),n.script.content==""){element_ui__WEBPACK_IMPORTED_MODULE_9__.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}new Function("info,data,param_key",n.script.content).apply(this,[e,o,t])}else this.scatterEmphasis(s)}},scatterEmphasis(e){let o=this.mapChart.getOption(),t=[],n=[],s=[];this.$$lib__.each(o.series,(r,a)=>{let l=[];if(e&&Array.isArray(e)&&e.length>0)for(let f=0;f<e.length;f++)l=this.$$lib__.union(l,this.getDataIndex(r,e[f]));else l=this.getDataIndex(r,e);if(l.length>0&&(n=this.$$lib__.union(l,n)),t.push(a),this.widgetInfo.config.mapType==="map3D"&&r.data.length>0)for(let f=0;f<r.data.length;f++)this.$$lib__.contains(s,f)||s.push(f)}),this.widgetInfo.config.mapType==="map3D"?this.mapChart.dispatchAction({type:"downplay",dataIndex:s}):this.mapChart.dispatchAction({type:"downplay",seriesIndex:t}),n.length>0&&this.mapChart.dispatchAction({type:"highlight",dataIndex:n})},getDataIndex(e,o){let t=[];return this.$$lib__.each(e.data,(n,s)=>{this.widgetInfo.dataset.regionType==="coordinate"?o==n.value[0]+","+n.value[1]&&!this.$$lib__.contains(t,s)&&t.push(s):o==n.region&&!this.$$lib__.contains(t,s)&&t.push(s)}),t},getParams(e,o){if(o.paramsExtend&&o.paramsExtend.length>0){let t=[],n=this.widgetInfo.dataset[this.widgetInfo.dataset.type].source,s=this.widgetInfo.dataset[this.widgetInfo.dataset.type].encode,r=this.widgetInfo.dataset[this.widgetInfo.dataset.type].dimensions;if(this.widgetInfo.dataset.regionType=="region"){let a=-1;this.$$lib__.each(r,(l,f)=>{l==s.region&&(a=f)});for(let l=0;l<n.length;l++)if(e.code==n[l][a]){t=n[l];break}}this.getExtendParams(e,o.paramsExtend,t,this.widgetInfo.dataset[this.widgetInfo.dataset.type].dimensions)}return e},clickEvent(){let e=this;this.mapChart.on("click",function(n){e.echartMapClickEventWrapper(n)});let o=e.widgetInfo.action.sendOut.actionList.find(n=>n.code=="mouseOverArea");e.mouseOverOrOutAreaEventTimer=-1,o&&o.enabled&&this.mapChart.on("mouseover",function(n){n.seriesType!="map"&&n.seriesType!="map3D"||e.doMouseOverOrOutAreaEvent("mouseOver",n)});let t=e.widgetInfo.action.sendOut.actionList.find(n=>n.code=="mouseOutArea");t&&t.enabled&&this.mapChart.on("mouseout",function(n){n.seriesType!="map"&&n.seriesType!="map3D"||e.doMouseOverOrOutAreaEvent("mouseOut",n)})},echartMapClickEventWrapper(e){if(this.isClickEventWorking)return;this.isClickEventWorking=!0;let o=e.componentType=="graphic"?this.regionParent.name:e.name;if(!o&&e.componentType=="series"){this.sendActionFun({code:null,name:null},e);return}this.getRegionByNameAndParentCode(o,t=>{try{let n={code:e.componentType=="graphic"?this.regionParent.code:t!=null?t.xzqCode:null,name:o};if(e.componentType=="graphic"&&(this.widgetInfo.config.regionCode=n.code,this.loadInfo(),this.sendActionFun(n,e)),!t||!t.xzqCode||t.xzqCode==""){this.sendActionFun(n,e),this.setHighlight(o);return}this.doDrill(t),this.sendActionFun(n,e)}catch(n){console.error(n)}this.isClickEventWorking=!1})},doMouseOverOrOutAreaEvent(e,o){let t=this;t.mouseOverOrOutAreaEventType=e,t.mouseOverOrOutAreaEventParams=o,t.mouseOverOrOutAreaEventTimer<1&&(t.mouseOverOrOutAreaEventTimer=setTimeout(function(){let n=t.mouseOverOrOutAreaEventParams,s=t.mouseOverOrOutAreaEventType;if(t.mouseOverOrOutAreaEventParams=null,t.mouseOverOrOutAreaEventType=null,t.mouseOverOrOutAreaEventTimer=-1,n){let r=n.componentType=="graphic"?t.regionParent.name:n.name;t.getRegionByNameAndParentCode(r,a=>{let l={type:s,code:n.componentType=="graphic"?t.regionParent.code:a!=null?a.xzqCode:null,name:r};if(!a||!a.xzqCode||a.xzqCode==""){t.mouseOverActionFun(l,n);return}t.mouseOverActionFun(l,n)})}},100))},sendActionFun(e,o){let t=this,n=t.widgetInfo.action.sendOut.actionList;this.isClickEventWorking=!1,t.$$lib__.each(n,s=>{if(s.enabled&&s.code===t.$$global_editor.actionType.clickPoint.code&&s.name=="\u5355\u51FB\uFF08\u6563\u70B9\uFF09"&&o.seriesType&&(o.seriesType=="scatter"||o.seriesType=="scatter3D"||o.seriesType=="effectScatter")){let r=t.$$global_editor.actionType.clickPoint.code+"_"+t.widgetInfo.id;if(o.data&&o.data.region&&(e.code=o.data.region),s.paramsExtend&&s.paramsExtend.length>0){let a=[];o.data.source&&o.data.source.length>0&&(a=o.data.source),t.getExtendParams(e,s.paramsExtend,a,t.widgetInfo.dataset[t.widgetInfo.dataset.type].dimensions)}if(s.script&&s.script.enabled){if(console.log("Execute script for "+s.name+" component to "+s.script.title+" component"),s.script.content==""){element_ui__WEBPACK_IMPORTED_MODULE_9__.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_clickParam2=new Function("param,params",s.script.content),e=this.customScript_actionSend_clickParam2(e,o)}_utils_bus_js__WEBPACK_IMPORTED_MODULE_4__.Z.$emit(r,e),s.postMessage&&t.doPostMessage(e),t.actionNameList.push(r)}else if(s.enabled&&s.code==t.$$global_editor.actionType.clickArea.code&&(s.name=="\u5355\u51FB\uFF08\u5730\u56FE\u533A\u57DF\uFF09"||s.name=="\u5355\u51FB\uFF08\u533A\u57DF\uFF09")&&(!o.seriesType||o.seriesType=="map"||o.seriesType=="map3D")){let r=t.$$global_editor.actionType.clickArea.code+"_"+t.widgetInfo.id;if(e=t.getParams(JSON.parse(JSON.stringify(e)),s),s.script&&s.script.enabled){if(console.log("Execute script for "+s.name+" component to "+s.script.title+" component"),s.script.content==""){element_ui__WEBPACK_IMPORTED_MODULE_9__.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}t.customScript_actionSend_clickParam2=new Function("param, params",s.script.content),e=t.customScript_actionSend_clickParam2(e,o)}_utils_bus_js__WEBPACK_IMPORTED_MODULE_4__.Z.$emit(r,e),s.postMessage&&t.doPostMessage(e),t.actionNameList.push(r)}else if(s.enabled&&s.code===t.$$global_editor.actionType.openLink.code&&o.seriesType&&(o.seriesType=="scatter"||o.seriesType=="scatter3D"||o.seriesType=="effectScatter")){if(s.paramsExtend&&s.paramsExtend.length>0){let r=[];t.widgetInfo.dataset[t.widgetInfo.dataset.type].source&&t.widgetInfo.dataset[t.widgetInfo.dataset.type].source.length>0&&(r=t.widgetInfo.dataset[t.widgetInfo.dataset.type].source[o.dataIndex]),t.getExtendParams(e,s.paramsExtend,r,t.widgetInfo.dataset[t.widgetInfo.dataset.type].dimensions)}t.openLinkAction(s,e)}})},mouseOverActionFun(e,o){let t=this,n=t.widgetInfo.action.sendOut.actionList;t.$$lib__.each(n,s=>{if(s.enabled&&s.code.startsWith(e.type)&&(o.seriesType||o.seriesType=="map"||o.seriesType=="map3D")){let r=s.code+"_"+t.widgetInfo.id;if(o.data&&o.data.region&&(e.code=o.data.region),s.paramsExtend&&s.paramsExtend.length>0){let a=[];o.data&&o.data.source&&o.data.source.length>0&&(a=o.data.source),t.getExtendParams(e,s.paramsExtend,a,t.widgetInfo.dataset[t.widgetInfo.dataset.type].dimensions)}if(s.script&&s.script.enabled){if(console.log("Execute script for "+s.name+" component to "+s.script.title+" component"),s.script.content==""){element_ui__WEBPACK_IMPORTED_MODULE_9__.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_mouseOverArea=new Function("param,params",s.script.content),e=this.customScript_actionSend_mouseOverArea(e,o)}_utils_bus_js__WEBPACK_IMPORTED_MODULE_4__.Z.$emit(r,e),s.postMessage&&t.doPostMessage(e),t.actionNameList.push(r)}})},getRegionByNameAndParentCode(e,o){e&&_api_sys_gisXzqGeojsonService__WEBPACK_IMPORTED_MODULE_10__.h.getEchartsGeojsonByNameAndParentCode(e,this.widgetInfo.config.regionCode).then(t=>{if(t&&t.status==200){if(!t.data){console.warn("\u672A\u67E5\u5230\u884C\u653F\u533A[ "+e+" ]\u7684\u76F8\u5173\u6570\u636E"),o(null);return}if(!t.data.xzqCode||t.data.xzqCode==""){console.warn("\u672A\u67E5\u5230\u884C\u653F\u533A[ "+e+" ]\u7684\u76F8\u5173\u6570\u636E"),o(t.data);return}let n=t.data.geojsonEcharts;if(!n||n==""){console.warn("\u884C\u653F\u533A[ "+t.data.xzqName+" ]\u6CA1\u6709\u8BBE\u7F6E\u884C\u653F\u533A\u8FB9\u754C\u6570\u636E"),o(t.data);return}o(t.data)}else console.log(t.msg)})},doDrill(e){let o=!1,t=this.widgetInfo.config.allowDrillArea;(e.xzqCode=="china"||t==null||t==""||t=="province"&&e.xzqCode.length<=2||t=="city"&&e.xzqCode.length<=4||t=="area"&&e.xzqCode.length<=6||t=="town"&&e.xzqCode.length<=9)&&(o=!0),this.widgetInfo.config.allowDrill&&o&&e&&e.geojsonEcharts&&e.geojsonEcharts!=""?(this.regionParent.code=e.parentCode,this.regionParent.name=e.parentName,this.widgetInfo.config.regionCode=e.xzqCode,this.loadInfo()):this.setHighlight(e.xzqName)},setHighlight(e){for(let o=0;o<this.mapChart.getOption().series.length;o++)if(this.mapChart.getOption().series[o].type==="map"){let t=this.mapChart.getOption();this.widgetInfo.config.mapType==="map3D"?t.geo3D[0].regions.forEach(n=>{let s;n.name==e&&!(n.itemStyle&&n.itemStyle.areaColor==this.widgetInfo.config.itemStyle.emphasis.areaColor)?s={areaColor:this.widgetInfo.config.itemStyle.emphasis.areaColor}:s={areaColor:this.widgetInfo.config.itemStyle.normal.color},vue__WEBPACK_IMPORTED_MODULE_13__.default.set(n,"itemStyle",s)}):t.geo[0].regions.forEach(n=>{let s;n.name==e&&!(n.itemStyle&&n.itemStyle.areaColor==this.widgetInfo.config.itemStyle.emphasis.areaColor)?s={areaColor:this.widgetInfo.config.itemStyle.emphasis.areaColor}:s={areaColor:this.widgetInfo.config.itemStyle.normal.color},vue__WEBPACK_IMPORTED_MODULE_13__.default.set(n,"itemStyle",s)}),this.mapChart.clear(),this.mapChart.off("click"),this.mapChart.setOption(this.lifecycleBeforeChartsLoad(t)),this.clickEvent()}},ignoreGraphic(){let e=this.widgetInfo.config.graphic.style.showArea;return this.currentRegion.id=="china"?!0:e=="province"&&this.currentRegion.id.length>2?this.getIgnoreGraphic():e=="city"&&this.currentRegion.id.length>4?this.getIgnoreGraphic():e=="area"&&this.currentRegion.id.length>6?this.getIgnoreGraphic():e=="town"&&this.currentRegion.id.length>9?this.getIgnoreGraphic():e==null||e==""?this.getIgnoreGraphic():!0},getIgnoreGraphic(){return this.regionParent.code&&this.regionParent.code!=""?this.identical=!1:this.identical=!0,!this.widgetInfo.config.allowDrill||this.identical},getImageUrl(e){if(e&&e!=="")return _utils_mUtils__WEBPACK_IMPORTED_MODULE_0__.appendImageBaseURL(e)}}}},598521:function(e,o,t){var n=t(275770),s=t(927966),r=t(555616),a=t.n(r),l=t(149500);o.Z={autoShow(f,_,p){let d=f;if(d.innerAutoShowInterval&&d.innerAutoShowInterval>-1&&(clearInterval(d.innerAutoShowInterval),d.innerAutoShowInterval=-1,_.dispatchAction({type:"downplay",dataIndex:d.innerAutoShowIndex}),d.innerAutoShowIndex=0),!(f&&_&&p&&p.enabled&&p.interval>0))return;let c=p.showTip;typeof d.innerAutoShowIndex>"u"&&(d.innerAutoShowIndex=0),d.innerAutoShowInterval=setInterval(function(){let g=_.getOption(),y=0,m=0;g.series[y].data?m=g.series[y].data.length:g.dataset&&g.dataset.length>0&&(m=g.dataset[0].source.length),m!=0&&(_.dispatchAction({type:"downplay",dataIndex:d.innerAutoShowIndex}),d.innerAutoShowIndex=(d.innerAutoShowIndex+1)%m,_.dispatchAction({type:"highlight",dataIndex:d.innerAutoShowIndex}),c&&_.dispatchAction({type:"showTip",seriesIndex:y,dataIndex:d.innerAutoShowIndex}),w(d,d.innerAutoShowIndex,y,g))},p.interval*1e3);function w(g,y,m,O){let h=g.widgetInfo;g.$$lib__.each(h.action.sendOut.actionList,u=>{if(u.enabled&&u.code==n.default.autoHighLight.code){let E=h.dataset[h.dataset.type].dimensions,I=u.code+"_"+h.id,b={},v=[];if(h.dataset[h.dataset.type].source&&h.dataset[h.dataset.type].source.length>0&&(v=h.dataset[h.dataset.type].source[y]),b.x=g.getFieldVal(v,E,O.series[m].encode.x),b.y=g.getFieldVal(v,E,O.series[m].encode.y),g.getExtendParams(b,u.paramsExtend,v,E),u.script&&u.script.enabled){if(l.log("Execute script for "+h.name+" component to "+u.name+" component"),u.script.content==""){r.Message.warning({message:u.name+"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}try{b=new Function("param,autoShowIndex,seriesIndex, opts",u.script.content).apply(g,[b,y,m,O])}catch(C){l.error(C)}}s.Z.$emit(I,b),u.postMessage&&g.doPostMessage(b)}})}}}},438141:function(e,o,t){t.d(o,{s:function(){return r}});var n=t(67157),s=t(150813);const r={mixins:[n.c],data(){return{config_extend:{},filter_config:{title:JSON.parse(JSON.stringify(s.Z.charts.title)),legend:JSON.parse(JSON.stringify(s.Z.charts.legend)),tooltip2:JSON.parse(JSON.stringify(s.Z.charts.tooltip)),toolbox:JSON.parse(JSON.stringify(s.Z.charts.toolbox)),geo:{label:{color:""},islands:{itemStyle:{normal:{areaColor:"#389BB7",color:"#389BB7",borderColor:"rgba(147, 235, 248)",shadowColor:"rgba(128, 217, 248,.6)"},emphasis:{areaColor:"#389BB7"}}}},geo3D:{label:{textStyle:{color:"#333",borderColor:"#fff",backgroundColor:"rgba(0,0,0,0)"}},itemStyle:{color:"rgb(5,101,123)",opacity:1,borderWidth:1,borderColor:"rgb(62,215,213)"},emphasis:{label:{textStyle:{color:"#333",borderColor:"#fff",backgroundColor:"rgba(0,0,0,0)"}},itemStyle:{color:"#f66",opacity:1}}},itemStyle:{normal:{areaColor:"rgba(0, 0, 0,0)",opacity:1,color:"",borderColor:"",shadowColor:""},emphasis:{areaColor:""}},select:{itemStyle:{areaColor:"",borderColor:""},label:{color:"#fff"}},scatter:[{color:"rgba(255,69,0,1)",colorInfo:{},value:{color:"rgba(28,28,28,1)"},name:{color:"rgba(255,69,0,1)"}}],scatter3D:[{label:{textStyle:{color:"",borderColor:"#fff",backgroundColor:"rgba(0,0,0,0)"}},itemStyle:{color:"#f66",opacity:1},emphasis:{label:{textStyle:{color:"#333",borderColor:"#fff",backgroundColor:"rgba(0,0,0,0)"}},itemStyle:{color:"#f66"}}}]}}},methods:{filterPredefineColoursSchemeConfig(a,l){this.getNewConfigWithArrary(a,l,this.filter_config)}}}},56279:function(e,o,t){t.d(o,{P:function(){return r}});var n=t(386892),s=t(149500);const r={mixins:[n.D],created(){},methods:{lifecycleBeforeChartsLoad(a){if(this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.beforeChartsLoad&&this.widgetInfo.action.lifecycle.beforeChartsLoad.enabled){(!this.widgetInfo.action.lifecycle.beforeChartsLoad.script||!this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content||this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content=="")&&s.warn("\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C\u4E3A\u7A7A"),s.info("\u6267\u884C\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C");let f=new Function("option",this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content).apply(this,[a]);if(f)return f}return a},lifecycleAfterLoad(){this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.afterLoad&&this.widgetInfo.action.lifecycle.afterLoad.enabled&&((!this.widgetInfo.action.lifecycle.afterLoad.script||!this.widgetInfo.action.lifecycle.afterLoad.script.content||this.widgetInfo.action.lifecycle.afterLoad.script.content=="")&&s.warn("\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C\u4E3A\u7A7A"),s.info("\u6267\u884C\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C"),new Function("",this.widgetInfo.action.lifecycle.afterLoad.script.content).apply(this,[]))}}}},752246:function(e,o,t){t.d(o,{X:function(){return n},b:function(){return s}});let n={versions:function(){var r=navigator.userAgent;return{trident:r.indexOf("Trident")>-1,presto:r.indexOf("Presto")>-1,webKit:r.indexOf("AppleWebKit")>-1,gecko:r.indexOf("Gecko")>-1&&r.indexOf("KHTML")==-1,mobile:!!r.match(/AppleWebKit.*Mobile.*/),ios:!!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:r.indexOf("Android")>-1,iPhone:r.indexOf("iPhone")>-1,iPad:r.indexOf("iPad")>-1,webApp:r.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},s;n.versions.mobile||n.versions.ios||n.versions.android||n.versions.iPhone||n.versions.iPad?s=!1:s=!0},844513:function(e,o,t){t.d(o,{Z:function(){return p}});var n=function(){var c=this,w=c._self._c;return c.attr.buttonHide?w("div",{style:{position:"absolute",right:c.attr.buttonHideRight+"px",top:c.attr.buttonHideTop+"px",width:"30px",height:"25px",cursor:"pointer",zIndex:"9999"},on:{click:function(g){return c.onHide()}}},[c.openTooltip?w("el-tooltip",{attrs:{"open-delay":1e3,content:c.attr.buttonHideTooltipContent,effect:"dark",placement:"top"}},[w("el-button",{class:c.attr.buttonHideIconClass&&c.attr.buttonHideIconClass!=""?c.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:c.attr.buttonHideColor,fontSize:c.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):w("el-button",{class:c.attr.buttonHideIconClass&&c.attr.buttonHideIconClass!=""?c.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:c.attr.buttonHideColor,fontSize:c.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):c._e()},s=[],r=t(752246),a={props:["attr"],name:"hide-button",data(){return{isPc:r.b}},computed:{openTooltip:function(){let d=!1,c=this.attr.buttonHideTooltipContent;return r.b&&c&&c!=null&&c.trim()!=""&&(d=!0),d}},methods:{onHide(){this.attr.hide=!0,this.$emit("sendButtonHide")}}},l=a,f=t(768141),_=(0,f.Z)(l,n,s,!1,null,"bf399b9a",null),p=_.exports},374752:function(e,o,t){t.r(o),t.d(o,{default:function(){return _}});var n=function(){var d=this,c=d._self._c;return c("div",{style:{width:d.widgetInfo.attr.w+"px",height:d.widgetInfo.attr.hh+"px"}},[c("hide-button",{attrs:{attr:d.widgetInfo.attr}}),c("div",{ref:"countryMap",staticClass:"charts chart-bar map-mount-node",style:{width:d.widgetInfo.attr.w+"px",height:d.widgetInfo.attr.hh+"px"},attrs:{id:"mapChart"}})],1)},s=[],r=t(328804),a=r.Z,l=t(768141),f=(0,l.Z)(a,n,s,!1,null,"12d1050f",null),_=f.exports}}]);
