"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[93575],{833264:function(O,y,n){n.d(y,{t:function(){return I}});var f=n(470709),g=n(321300);const I={created(){},methods:{getConfigForPublic(c){return(0,f.M0)("/visual/boardPublish/getConfigForPublic",c)},savePublicWidgetDataApi(c){return(0,f.M0)("/visual/boardPublish/savePublicWidgetData",c)},getAggregateDataEx(c){return(0,f.M0)("/dashboard/editor/getAggregateDataEx",(0,g.enc)(c))},getDataLocalByDatalocalId(c){return(0,f.xV)("/data/local/getDataLocalByDatalocalId/"+c)},getAggregateDataForExcel(c){return(0,f.Fb)("/dashboard/editor/getAggregateDataForExcel",(0,g.enc)(c))}}}},193575:function(O,y,n){n.d(y,{E:function(){return R}});var f=n(113067),g=n(879016),I=n(627996),c=n(766941),v=n(231954),T=n(126711),E=n(363488),B=n(833264),L=n(927966),S=n(321300),l=n(555616),k=n.n(l),_=n(148836),m=n(275770),d=n(149500);const R={created(){},data(){return{isFull:!1,first:{}}},mixins:[E.Z,B.t,T.H],computed:{...(0,_.Se)(["viewType","viewBiId","viewGuid","responseHeaders"])},methods:{...(0,_.nv)(["setFullscreenLoading","setURLParams","updateWidgetParentArrDataset","updateWidgetAllArrDataset"]),getDynamicWidgetsSource(t){for(let e in this.autoUpdateWidget)e&&t[e]?.dataset?.type&&t[e]?.dataset[t[e].dataset.type]&&this.setTimers(t[e],t[e].dataset[t[e].dataset.type].autoUpdateTime)},getPreviewData(t){if(t.dataset)switch(t.dataset.type){case this.$$global_editor.dataSourcType.dynamic.code:this.getPreviewDataDynamic(t);break;case this.$$global_editor.dataSourcType.local.code:this.getPreviewDataLocal(t);break}},getPreviewDataDynamic(t){if(!t.dataset.dynamic.dataSetId||t.dataset.dynamic.noRequest)return;let e={dataSetId:t.dataset.dynamic.dataSetId,dimensions:t.dataset.dynamic.dimensions,columnList:t.dataset.dynamic.columnList,dimensionsAlias:t.dataset.dynamic.dimensionsAlias,query:t.dataset.dynamic.query},a={dataSet:JSON.stringify(e)};this.getDynamicSource(a,i=>{if(t.dataset.dynamic.source=[],t.dataset.dynamic.total=0,i&&i.status==200){let r=this.getDataSetData(i.data,t.dataset.dynamic.query,t.dataset.dynamic.dimensionsAlias,t.dataset.dynamic.dataSetId);this.updataWidgetSource(t,r,i.jsonObject)}else{let r=t.dataset.dynamic.dataSetName&&t.dataset.dynamic.dataSetName!=""?t.dataset.dynamic.dataSetName:t.dataset.dynamic.dataSetId;l.Message.error({message:"\u6570\u636E\u96C6:[ "+r+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+i.msg,offset:60})}})},getPreviewDataLocal(t){let e=t.dataset.local.dataLocalId;if(e)if(this.viewType){if(this.viewBiId==null&&this.viewGuid==null){d.error("\u7F16\u8F91\u5668ID\u548C\u7248\u672CID  \u81F3\u5C11\u6709\u4E00\u4E2A"),l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B");return}switch(this.viewType){case this.$$global.editType.original.code:g.V.getDataLocalByDatalocalId(e).then(a=>{let i=null;if(a&&a.status==200)if(a.data&&a.data.configJson&&a.data.configJson!=""){let r=JSON.parse(a.data.configJson);this.updataWidgetSource(t,r,null)}else i=t.dataset.local.dataLocalId&&t.dataset.local.dataLocalName!=""?t.dataset.local.dataLocalName:t.dataset.local.dataLocalId,i="\u672C\u5730\u6570\u636E:[ "+i+" ]\u672A\u83B7\u53D6\u5230\u6570\u636E";else i=t.dataset.local.dataLocalId&&t.dataset.local.dataLocalName!=""?t.dataset.local.dataLocalName:t.dataset.local.dataLocalId,i="\u6570\u636E\u96C6:[ "+i+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+a.msg;i&&l.Message.error({message:i,offset:60})});break;case this.$$global.editType.public.code:this.getDataLocalByDatalocalId(e).then(a=>{let i=null;if(a&&a.status==200)if(a.data&&a.data.configJson&&a.data.configJson!=""){let r=JSON.parse(a.data.configJson);this.updataWidgetSource(t,r,null)}else i=t.dataset.local.dataLocalId&&t.dataset.local.dataLocalName!=""?t.dataset.local.dataLocalName:t.dataset.local.dataLocalId,i="\u672C\u5730\u6570\u636E:[ "+i+" ]\u672A\u83B7\u53D6\u5230\u6570\u636E";else i=t.dataset.local.dataLocalId&&t.dataset.local.dataLocalName!=""?t.dataset.local.dataLocalName:t.dataset.local.dataLocalId,i="\u6570\u636E\u96C6:[ "+i+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+a.msg;i&&l.Message.error({message:i,offset:60})});break;default:l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B")}}else this.viewBiId?g.V.getDataLocalByDatalocalId(e).then(a=>{let i=null;if(a&&a.status==200)if(a.data&&a.data.configJson&&a.data.configJson!=""){let r=JSON.parse(a.data.configJson);this.updataWidgetSource(t,r,null)}else i=t.dataset.local.dataLocalId&&t.dataset.local.dataLocalName!=""?t.dataset.local.dataLocalName:t.dataset.local.dataLocalId,i="\u672C\u5730\u6570\u636E:[ "+i+" ]\u672A\u83B7\u53D6\u5230\u6570\u636E";else i=t.dataset.local.dataLocalId&&t.dataset.local.dataLocalName!=""?t.dataset.local.dataLocalName:t.dataset.local.dataLocalId,i="\u6570\u636E\u96C6:[ "+i+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+a.msg;i&&l.Message.error({message:i,offset:60})}):l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B")},downloadExcel(t){let e=JSON.parse(t);if(!e||e.type!="dynamic")return;let a={dataSet:JSON.stringify(e.dynamic)};if(this.viewType){if(this.viewBiId==null&&this.viewGuid==null){d.error("\u7F16\u8F91\u5668ID\u548C\u7248\u672CID  \u81F3\u5C11\u6709\u4E00\u4E2A"),l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B");return}switch(this.viewType){case this.$$global.editType.original.code:this.fullscreenLoading=!0,f.o.getAggregateDataForExcel(a).then(i=>{this.fullscreenLoading=!1,this.download(i)});break;case this.$$global.editType.public.code:this.fullscreenLoading=!0,this.getAggregateDataForExcel(a).then(i=>{this.fullscreenLoading=!1,this.download(i)});break;default:l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B")}}else this.viewBiId?(this.fullscreenLoading=!0,f.o.getAggregateDataForExcel(a).then(i=>{this.fullscreenLoading=!1,this.download(i)})):l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B")},download(t){let e=this.responseHeaders["content-disposition"];if(!t)return;let a=new Blob([t],{type:"application/vnd.ms-excel;charset=utf-8"}),i=window.URL.createObjectURL(a);if(e){let r=window.decodeURI(e.split("=")[1]);const s=document.createElement("a");s.href=i,s.download=r,s.click(),URL.revokeObjectURL(i)}else window.location.href=i},getDynamicSource(t,e){let a=new Date().getTime();if(this.viewType){if(this.viewBiId==null&&this.viewGuid==null){d.error("\u7F16\u8F91\u5668ID\u548C\u7248\u672CID  \u81F3\u5C11\u6709\u4E00\u4E2A"),l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B");return}switch(this.viewType){case this.$$global.editType.original.code:f.o.getAggregateDataEx(t).then(i=>{this.consoleQueryTime(a,t),e&&e(i)});break;case this.$$global.editType.public.code:this.getAggregateDataEx(t).then(i=>{this.consoleQueryTime(a,t),e&&e(i)});break;default:l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B")}}else this.viewBiId?f.o.getAggregateDataEx(t).then(i=>{this.consoleQueryTime(a,t),e&&e(i)}):l.Message.error("\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u67E5\u770B")},consoleQueryTime(t,e){let a={};e&&e.dataSet&&(a=JSON.parse(e.dataSet)),d.info("dataSetId\uFF1A"+a.dataSetId,"queryTime\uFF1A"+(new Date().getTime()-t)/1e3+" s","param\uFF1A",a.query)},updataWidgetSource(t,e,a){switch(t.dataset.type){case this.$$global_editor.dataSourcType.dynamic.code:t.dataset.dynamic.source=e.data,e.total&&(t.dataset.dynamic.total=e.total);break;case this.$$global_editor.dataSourcType.local.code:t.dataset.local.dimensionsAlias=[],t.dataset.local.columnList=[],t.dataset.local.source=[],t.dataset.local.dimensions=[],t.dataset.local.dimensionsAlias=e.dimensionsAlias,t.dataset.local.columnList=e.columnList,t.dataset.local.source=e.source,t.dataset.local.dimensions=e.dimensions;break}this.updateWidgetAllArrDataset(t),this.updateWidgetParentArrDataset(t),this.$refs["comp_"+t.id][0].reLoadInfo(t),this.sendoutDataloadSuccess(t),this.sendoutResponseData(t,e,a)},setTimers(t,e){if(e&&e>=3){let a=setInterval(()=>{this.getPreviewData(t)},e*1e3);this.timerArr.push(a)}else d.warn("\u7EC4\u4EF6[ "+t.name+" ]\u8BBE\u7F6E\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E\u7684\u65F6\u95F4\u95F4\u9694\u5FC5\u987B\u5927\u4E8E10\u79D2,\u5426\u5219\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E\u5C06\u4E0D\u751F\u6548")},openLink(t){if(this.clickTitle(t),t.title.link.use)switch(t.title.link.type){case this.$$global_editor.linkType.inside.code:this.openLinkIn(t.title.link.inside);break;case this.$$global_editor.linkType.outside.code:this.openLinkOut(t.title.link.outside);break}},openLinkIn(t){if(t.newWindow||t.refreshURL){let e=location.origin+v.Z.baseConfig.projectName+"/view.html?tp="+t.publishType;t.applicationId&&(e=e+"&appId="+t.applicationId),t.boardId&&t.isLast?e=e+"&biId="+t.boardId:e=e+"&biPid="+t.publishId,e+=S.getLoadUrlComponent(t.layoutJson),t.refreshURL?window.location.href=e:window.open(e)}else{let e={boardId:null,publishId:null,publishType:t.publishType};t.applicationId&&(e.applicationId=t.applicationId),t.boardId&&t.isLast?e.boardId=t.boardId:e.publishId=t.publishId,this.$emit("doReSetBoardId",e)}},openLinkOut(t){let e=t.url;e?e.substr(0,2)=="//"?e=window.location.protocol+e:e[0]=="/"?e=window.location.origin+e:e.indexOf("http://")==-1&&e.indexOf("https://")==-1&&(e="http://"+e):d.log("\u6253\u5F00\u94FE\u63A5\u4E8B\u4EF6\u9519\u8BEF\uFF0Curl \u672A\u8BBE\u7F6E"),window.open(e,t.newWindow==!0?"_blank":"_self")},clear(){if(this.timerArr?.length>0)for(let t in this.timerArr)clearInterval(t);this.timerArr=[]},getImageUrl(t){if(t&&t!="")return"url("+S.appendImageBaseURL(t)+")"},getImageFullUrl(t){if(t&&t!="")return S.appendImageBaseURL(t)},doFullScreen(){if(this.isFull)document.exitFullscreen?(document.exitFullscreen(),this.isFull=!1):document.msExitFullscreen?(document.msExitFullscreen(),this.isFull=!1):document.mozCancelFullScreen?(document.mozCancelFullScreen(),this.isFull=!1):document.webkitExitFullscreen&&(document.webkitExitFullscreen(),this.isFull=!1);else{let t=document.documentElement;t.requestFullscreen?(t.requestFullscreen(),this.isFull=!0):t.msRequestFullscreen?(t.msRequestFullscreen(),this.isFull=!0):t.mozRequestFullScreen?(t.mozRequestFullScreen(),this.isFull=!0):t.webkitRequestFullscreen&&(t.webkitRequestFullscreen(),this.isFull=!0)}},clickTitle(t){if(t.action==null||t.action.sendOut==null||t.action.sendOut.actionList==null)return;let e=t.action.sendOut.actionList;this.$$lib__.each(e,a=>{if(a.enabled&&a.code==m.default.clickGlobalTitle.code){let i=m.default.clickGlobalTitle.code+"_"+t.id,r={text:t.title.text,title:t.title.text};if(a.paramsExtend&&a.paramsExtend.length>0){let s=[];t.dataset[t.dataset.type].source&&t.dataset[t.dataset.type].source.length>0&&(s=t.dataset[t.dataset.type].source[0]),this.getExtendParams(r,a.paramsExtend,s,t.dataset[t.dataset.type].dimensions)}if(a.script&&a.script.enabled){if(d.log("Execute script for "+a.name+" component to "+m.default.clickGlobalTitle.name+" component"),a.script.content==""){l.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript=new Function("param",a.script.content),r=this.customScript(r)}L.Z.$emit(i,r),a.postMessage&&this.doPostMessage(r),this.actionNameList.push(i)}})},actionShowHide(t){let e=t.action.receive.show;e&&e.enabled&&e.showList&&e.showList.length>0&&this.doActionShowOrHide(e.showList,e.value,e.script,t.name,"show",e.values?e.values:[]);let a=t.action.receive.hide;a&&a.enabled&&a.hideList&&a.hideList.length>0&&this.doActionShowOrHide(a.hideList,a.value,a.script,t.name,"hide",a.values?a.values:[]);let i=t.action.receive.showHide;i&&i.enabled&&i.showHideList&&i.showHideList.length>0&&this.doActionShowOrHide(i.showHideList,i.value,i.script,t.name,"showHide",i.values?i.values:[])},doActionShowOrHide(t,e,a,i,r,s){t&&t.length<1||this.$$lib__.each(t,u=>{if(u&&u.length<1)return;let b=u[0][1]+"_"+u[0][0];u[0][1].indexOf("_")>-1&&(b=u[0][1]),L.Z.$on(b,p=>{d.debug(p);let h=u[0][2];if(h){let D=h.indexOf("|");D>-1&&(h=u[0][2].substring(D+1))}let o=!0,x=!1;if(a&&a.enabled){if(x=!0,d.log("Execute script for "+i+" component to "+r+" component"),a.content==""){l.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60}),o=!1;return}r=="show"&&(this.doShow=new Function("data","param_key","value","values",a.content)),r=="hide"&&(this.doHide=new Function("data","param_key","value","values",a.content)),r=="showHide"&&(this.doShowHide=new Function("data","param_key","value","values",a.content))}o&&(r=="show"&&this.doShow(p,h,e,s),r=="hide"&&this.doHide(p,h,e,s),r=="showHide"&&this.doShowHide(p,h,e,s),x&&d.log(r+" component of "+i+" component Script execution complete"))})})},doShow(t,e,a,i){let r=[];r.push(a),i&&(r=r.concat(i)),r.forEach(s=>{(s==null||s==null||s==""||s==t[e])&&(this.widgetInfo.attr.hide=!1)})},doHide(t,e,a,i){let r=[];r.push(a),i&&(r=r.concat(i)),r.forEach(s=>{(s==null||s==null||s==""||s==t[e])&&(this.widgetInfo.attr.hide=!0)})},doShowHide(t,e,a,i){let r=[];r.push(a),i&&(r=r.concat(i)),r.forEach(s=>{(s==null||s==null||s==""||s==t[e])&&(this.widgetInfo.attr.hide=!this.widgetInfo.attr.hide)})},onHide(){this.widgetInfo.attr.hide=!0,this.sendButtonHide(this.widgetInfo)},sendoutDataloadSuccess(t){t&&t.action&&t.action.sendOut&&t.action.sendOut.actionList&&t.action.sendOut.actionList.length>0&&this.$$lib__.each(t.action.sendOut.actionList,e=>{if(e.code==m.default.dataLoad.code&&e.enabled){let a=e.code+"_"+t.id,i={};if(e.paramsExtend&&e.paramsExtend.length>0&&this.getParamsExtend(i,e.paramsExtend,t),e.script&&e.script.enabled){if(d.log("Execute script for "+e.name+" component to "+m.default.dataLoad.name+" component"),e.script.content==""){l.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_dataLoad=new Function("param,widgetInfo",e.script.content),i=this.customScript_actionSend_dataLoad(i,t)}setTimeout(()=>{L.Z.$emit(a,i)},50),e.postMessage&&this.doPostMessage(i),this.actionNameList.push(a)}})},customScript_actionSend_dataLoad(t,e){return t},sendoutResponseData(t,e,a){t&&t.action&&t.action.sendOut&&t.action.sendOut.actionList&&t.action.sendOut.actionList.length>0&&this.$$lib__.each(t.action.sendOut.actionList,i=>{if(i.code==this.$$global_editor.actionType.responseData.code&&i.enabled){let r=i.code+"_"+t.id,s={tableObject:e,jsonObject:a};if(i.script&&i.script.enabled){if(d.log("Execute script for "+i.name+" component to "+this.$$global_editor.actionType[i.code].script.title+" component"),i.script.content==""){l.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_responseData=new Function("param",i.script.content),s=this.customScript_actionSend_responseData(s)}setTimeout(()=>{L.Z.$emit(r,s)},50),i.postMessage&&this.doPostMessage(s),this.actionNameList.push(r)}})},customScript_actionSend_responseData(t){return t},getBindStyle(t){let e={opacity:t.attr.opacity,backgroundColor:t.attr.backgroundColor,backgroundImage:this.getImageUrl(t.attr.backgroundImage),backgroundSize:t.attr.backgroundSize,zIndex:t.attr.z,width:t.attr.widgetW+"px",height:t.attr.h+"px"};return e.backgroundSize=="contain-no-repeat"&&(e.backgroundPosition="top "+t.attr.align,e.backgroundSize="contain",e.backgroundRepeat="no-repeat"),e.overflow=t.border.overflowShow?"hidden":"visible",t.border.hide!=!0&&((t.border.hShadow||t.border.vShadow)&&(e.boxShadow=(t.border.hShadow||0)+"px "+(t.border.vShadow||0)+"px "+(t.border.blur||0)+"px "+t.border.blurColor||"rgba(0,0,0,0)"),t.border.type==!1?(e.borderTopWidth=t.border.widthT+"px",e.borderRightWidth=t.border.widthR+"px",e.borderBottomWidth=t.border.widthB+"px",e.borderLeftWidth=t.border.widthL+"px",e.boxSizing="content-box",e.borderTopStyle=t.border.styleT,e.borderRightStyle=t.border.styleR,e.borderBottomStyle=t.border.styleB,e.borderLeftStyle=t.border.styleL,e.borderTopColor=t.border.colorT,e.borderRightColor=t.border.colorR,e.borderBottomColor=t.border.colorB,e.borderLeftColor=t.border.colorL,e.borderTopLeftRadius=t.border.radiusTL+"px",e.borderTopRightRadius=t.border.radiusTR+"px",e.borderBottomLeftRadius=t.border.radiusBL+"px",e.borderBottomRightRadius=t.border.radiusBR+"px"):t.border.type==!0&&(e.borderStyle=t.border.borderStyle,e.borderTopWidth=t.border.breadthT+"px",e.borderRightWidth=t.border.breadthR+"px",e.borderBottomWidth=t.border.breadthB+"px",e.borderLeftWidth=t.border.breadthL+"px",e.borderImageSource=this.getImageUrl(t.border.borderImage),e.borderImageSlice=t.border.cutT+" "+t.border.cutR+" "+t.border.cutB+" "+t.border.cutL,e.borderImageRepeat=t.border.repeat)),e},getTitleStyle(t){let e={display:t.title.hide==!0?"none":"",height:t.title.h+"px",opacity:t.title.opacity,backgroundColor:t.title.backgroundColor,backgroundImage:this.getImageUrl(t.title.backgroundImage),backgroundSize:t.title.backgroundSize,fontSize:t.title.label.fontSize+"px",color:t.title.label.color,fontWeight:t.title.label.fontWeight,fontFamily:t.title.label.fontFamily,fontStyle:t.title.label.fontStyle,textDecoration:t.title.label.textDecoration,textAlign:t.title.label.horizontalAlignment};return t.title.border.hide!=!0&&(e.borderBottomWidth=t.title.border.widthB+"px",e.borderBottomStyle=t.title.border.styleB,e.borderBottomColor=t.title.border.colorB?t.title.border.colorB:"transparent",e.borderTopLeftRadius=t.title.border.radiusTL?t.title.border.radiusTL+"px":"0px",e.borderTopRightRadius=t.title.border.radiusTR?t.title.border.radiusTR+"px":"0px",e.borderBottomLeftRadius=t.title.border.radiusBL?t.title.border.radiusBL+"px":"0px",e.borderBottomRightRadius=t.title.border.radiusBR?t.title.border.radiusBR+"px":"0px"),this.getCursor(t.action,m.default.clickGlobalTitle.code)=="pointer"||t.title.link&&t.title.link.use&&t.title.link.use==!0?e.cursor="pointer":e.cursor="default",e},getWidgetTitleStyle(t){let e=t.title.position==="left"||t.title.position==="right"?"inline-block":"",a={display:t.title.hide==!0?"none":e,opacity:t.title.opacity,backgroundColor:t.title.backgroundColor,backgroundImage:this.getImageUrl(t.title.backgroundImage),backgroundSize:t.title.backgroundSize,boxSizing:"border-box",fontSize:t.title.label.fontSize+"px",color:t.title.label.color,fontWeight:t.title.label.fontWeight,fontFamily:t.title.label.fontFamily,fontStyle:t.title.label.fontStyle,textDecoration:t.title.label.textDecoration,textAlign:t.title.label.horizontalAlignment};return t.title.position==="left"||t.title.position==="right"?(a.width=t.title.h+"px",a.height=t.attr.h+"px"):(a.width="100%",a.height=t.title.h+"px"),t.title.border.hide!=!0&&(a.borderBottomWidth=t.title.border.widthB+"px",a.borderBottomStyle=t.title.border.styleB,a.borderBottomColor=t.title.border.colorB?t.title.border.colorB:"transparent",a.borderTopLeftRadius=t.title.border.radiusTL?t.title.border.radiusTL+"px":"0px",a.borderTopRightRadius=t.title.border.radiusTR?t.title.border.radiusTR+"px":"0px",a.borderBottomLeftRadius=t.title.border.radiusBL?t.title.border.radiusBL+"px":"0px",a.borderBottomRightRadius=t.title.border.radiusBR?t.title.border.radiusBR+"px":"0px"),t.title.link&&t.title.link.use&&t.title.link.use==!0?a.cursor="pointer":a.cursor="default",t.title.backgroundSize&&(t.title.backgroundSize=="contain-no-repeat"?(t.title.position=="top"||t.title.position=="bottom"?a.backgroundPosition=t.title.position+" "+t.title.align:a.backgroundPosition=t.title.vertical+" "+t.title.position,a.backgroundSize="contain",a.backgroundRepeat="no-repeat"):a.backgroundSize=t.title.backgroundSize),a},getTitleSpanStyle(t){let e=t.title.label,a={display:t.title.hide==!0?"none":""};return e.textShadow&&(a.textShadow=e.hShadow+"px "+e.vShadow+"px "+e.textShadowBlur+"px "+e.textShadowColor||"rgba(0,0,0,0)"),e.textStroke&&(a.webkitTextStrokeWidth=e.textStrokeWidth+"px",a.webkitTextStrokeColor=e.textStrokeColor),e.gradient&&(a.backgroundImage="linear-gradient("+e.angle+"deg,"+e.startColor+","+e.endColor+")",a.webkitBackgroundClip="text",a.webkitTextFillColor="transparent"),e.radius&&(a.transform="rotate("+e.radius+"deg)",a.display="inline-block"),a},getInfoStyle(){return{}},getWidgetClass(t){let e="widget_"+t.id+(t.attr.hide?"_hide":"_show");return e+=" widget_"+t.id+"_anime",e+=" my-comp",t.attr.initShow&&(e+=" animated"+t.attr.showAnimate[t.attr.showAnimate.length-1]),e},getWidgetStyle(t){let e={};return e.transform=t.attr.deg&&t.attr.deg!=0?"rotate("+t.attr.deg+"deg)":"rotate(0deg)",e.position="absolute",e.pointerEvents="auto",e.width=t.attr.widgetW+"px",e.height=t.attr.h+"px",e.left=t.attr.x+"px",e.top=t.attr.y+"px",e.zIndex=t.attr.z,this.first[t.id]?e.display="":e.display=t.attr.hide?"none":"",e},attrChange(t){this.first[t.id]||(this.first[t.id]=t.id,t.attr.hide=!t.attr.hide,t.attr.hide=!t.attr.hide);let e=this.$refs["widget_"+t.id][0];t.attr.hide?(e.parentElement.style.pointerEvents="none",t.attr.hideAnimate&&t.attr.hideAnimate.length>0?this.doWidgetAnime(t,t.attr.hideAnimate[0],t.attr.hideAnimate[1]):e.style.display="none"):(e.parentElement.style.pointerEvents="auto",e.style.display="block",t.attr.showAnimate&&t.attr.showAnimate.length>0?this.doWidgetAnime(t,t.attr.showAnimate[0],t.attr.showAnimate[1]):this.doWidgetAnime(t,"show","show"))},doWidgetAnime(t,e,a){a||(a=e);let i=".widget_"+t.id+"_anime",r=150,s=t.attr.x+t.attr.w,u=t.attr.y+t.attr.h,b=window.innerWidth-t.attr.x,p=window.innerHeight-t.attr.y;this.$nextTick(()=>{this.$anime.remove(i);let h=document.querySelector(i);h.style.scale=1,h.style.opacity=1;let o={targets:i,duration:0,opacity:a.indexOf("Out")>-1?1:0,scale:1,skew:"0deg",rotate:"0deg",rotateX:"0deg",rotateY:"0deg",rotateZ:"0deg",translateX:0,translateY:0,translateZ:0,perspective:0};if(a=="show"){o.opacity=1,this.$anime(o);return}this.$anime(o),e=="bounce"&&(a=="bounceIn"&&(o.scale=[0,1],o.opacity=[0,1]),a=="bounceInDown"&&(o.opacity=[0,1],o.translateY=[-r,0]),a=="bounceInLeft"&&(o.opacity=[0,1],o.translateX=[-r,0]),a=="bounceInRight"&&(o.opacity=[0,1],o.translateX=[r,0]),a=="bounceInUp"&&(o.opacity=[0,1],o.translateY=[r,0]),a=="bounceOut"&&(o.scale=[1,0],o.opacity=[1,1,0]),a=="bounceOutDown"&&(o.opacity=[1,1,0],o.translateY=[0,r]),a=="bounceOutLeft"&&(o.opacity=[1,1,0],o.translateX=[0,-r]),a=="bounceOutRight"&&(o.opacity=[1,1,0],o.translateX=[0,r]),a=="bounceOutUp"&&(o.opacity=[1,1,0],o.translateY=[0,-r])),e=="fade"&&(o.easing="easeInOutQuart",a=="fadeIn"&&(o.opacity=[0,1]),a=="fadeInDown"&&(o.opacity=[0,1],o.translateY=[-r,0]),a=="fadeInDownBig"&&(o.opacity=[0,1],o.translateY=[-u,0]),a=="fadeInLeft"&&(o.opacity=[0,1],o.translateX=[-r,0]),a=="fadeInLeftBig"&&(o.opacity=[0,1],o.translateX=[-s,0]),a=="fadeInRight"&&(o.opacity=[0,1],o.translateX=[r,0]),a=="fadeInRightBig"&&(o.opacity=[0,1],o.translateX=[b,0]),a=="fadeInUp"&&(o.opacity=[0,1],o.translateY=[r,0]),a=="fadeInUpBig"&&(o.opacity=[0,1],o.translateY=[p,0]),a=="fadeOut"&&(o.opacity=[1,0]),a=="fadeOutDown"&&(o.opacity=[1,0],o.translateY=[0,r]),a=="fadeOutDownBig"&&(o.opacity=[1,0],o.translateY=[0,p]),a=="fadeOutLeft"&&(o.opacity=[1,0],o.translateX=[0,-r]),a=="fadeOutLeftBig"&&(o.opacity=[1,0],o.translateX=[0,-s]),a=="fadeOutRight"&&(o.opacity=[1,0],o.translateX=[0,r]),a=="fadeOutRightBig"&&(o.opacity=[1,0],o.translateX=[0,b]),a=="fadeOutUp"&&(o.opacity=[1,0],o.translateY=[0,-r]),a=="fadeOutUpBig"&&(o.opacity=[1,0],o.translateY=[0,-u])),e=="flip"&&(o.easing="easeInOutQuart",a=="flipIn"&&(o.opacity=[0,1],o.rotateY="1turn"),a=="flipInX"&&(o.opacity=[0,1],o.rotateX=["180deg","0deg"]),a=="flipInY"&&(o.opacity=[0,1],o.rotateY=["180deg","0deg"]),a=="flipOut"&&(o.rotateY="1turn",o.opacity=[1,0]),a=="flipOutX"&&(o.rotateX=["0deg","180deg"],o.opacity=[1,0]),a=="flipOutY"&&(o.rotateY=["0deg","180deg"],o.opacity=[1,0])),e=="rotate"&&(o.easing="easeInOutQuart",a=="rotateIn"&&(o.opacity=[0,1],o.rotate=["180deg","0deg"]),a=="rotateInDownLeft"&&(o.opacity=[0,1],o.rotate=["-90deg","0deg"],o.translateY=[-r,0]),a=="rotateInDownRight"&&(o.opacity=[0,1],o.rotate=["90deg","0deg"],o.translateY=[-r,0],o.translateX=[r,0]),a=="rotateInUpLeft"&&(o.opacity=[0,1],o.rotate=["90deg","0deg"],o.translateY=[r,0],o.translateX=[r,0]),a=="rotateInUpRight"&&(o.opacity=[0,1],o.rotate=["-90deg","0deg"],o.translateY=[r,0]),a=="rotateOut"&&(o.opacity=[1,0],o.rotate=["0deg","180deg"]),a=="rotateOutUpLeft"&&(o.opacity=[1,0],o.rotate=["0deg","-90deg"],o.translateY=[0,-r]),a=="rotateOutUpRight"&&(o.opacity=[1,0],o.rotate=["0deg","90deg"],o.translateY=[0,-r],o.translateX=[0,r]),a=="rotateOutDownLeft"&&(o.opacity=[1,0],o.rotate=["0deg","90deg"],o.translateY=[0,r],o.translateX=[0,r]),a=="rotateOutDownRight"&&(o.opacity=[1,0],o.rotate=["0deg","-90deg"],o.translateY=[0,r])),e=="sliders"&&(o.easing="easeInOutQuart",a=="slideInDown"&&(o.opacity=[1,1],o.translateY=[-r,0]),a=="slideInLeft"&&(o.opacity=[1,1],o.translateX=[-r,0]),a=="slideInRight"&&(o.opacity=[1,1],o.translateX=[r,0]),a=="slideInUp"&&(o.opacity=[1,1],o.translateY=[r,0]),a=="slideOutDown"&&(o.translateY=[0,r],o.opacity=[1,1,1,0]),a=="slideOutLeft"&&(o.translateX=[0,-r],o.opacity=[1,1,1,0]),a=="slideOutRight"&&(o.translateX=[0,r],o.opacity=[1,1,1,0]),a=="slideOutUp"&&(o.translateY=[0,-r],o.opacity=[1,1,1,0])),e.indexOf("roll")>-1&&(o.easing="easeInOutQuart",a=="rollIn"&&(o.opacity=[0,1],o.rotate=["-360deg","0deg"],o.translateX=[s,0]),a=="rollOut"&&(o.opacity=[1,0],o.rotate=["0deg","360deg"],o.translateX=[0,-b])),e.indexOf("lightSpeed")>-1&&(o.easing="easeInOutQuart",a=="lightSpeedIn"&&(o.opacity=[0,1],o.skew=["-90deg","0deg"],o.translateX=[-s,0]),a=="lightSpeedOut"&&(o.opacity=[1,0],o.skew=["0deg","90deg"],o.translateX=[0,b])),o.duration=1200,this.$anime(o)})},saveWidgetConfigData(t,e){if(this.viewType){if(this.viewBiId==null&&this.viewGuid==null){l.Message.error({message:"\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u4FDD\u5B58",offset:60}),e&&e();return}switch(this.viewType){case this.$$global.editType.original.code:this.saveOriginalWidgetData(t,e);break;case this.$$global.editType.public.code:this.savePublicWidgetData(t,e);break;default:e&&e(),l.Message.error({message:"\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u4FDD\u5B58",offset:60})}}else this.viewBiId?this.saveEditorWidgetData(t,e):(l.Message.error({message:"\u53C2\u6570\u6709\u8BEF\uFF0C\u65E0\u6CD5\u4FDD\u5B58",offset:60}),e&&e())},saveEditorWidgetData(t,e){const a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});c.D.saveEditorWidgetData(this.viewBiId,t).then(i=>{a.close(),i&&i.status==200||l.Message.error({message:i.msg,offset:60}),e&&e(i)})},saveOriginalWidgetData(t,e){const a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});I.h.saveOriginalWidgetData({publishId:this.viewGuid,boardId:this.viewBiId,widgetInfo:t}).then(i=>{a.close(),i&&i.status==200||l.Message.error({message:i.msg,offset:60}),e&&e(i)})},savePublicWidgetData(t,e){const a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.savePublicWidgetDataApi({publishId:this.viewGuid,boardId:this.viewBiId,widgetInfo:t}).then(i=>{a.close(),i&&i.status==200||l.Message.error({message:i.msg,offset:60}),e&&e(i)})}}}}}]);
