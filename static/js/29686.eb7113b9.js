"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[29686],{752246:function(T,S,a){a.d(S,{X:function(){return b},b:function(){return P}});let b={versions:function(){var y=navigator.userAgent;return{trident:y.indexOf("Trident")>-1,presto:y.indexOf("Presto")>-1,webKit:y.indexOf("AppleWebKit")>-1,gecko:y.indexOf("Gecko")>-1&&y.indexOf("KHTML")==-1,mobile:!!y.match(/AppleWebKit.*Mobile.*/),ios:!!y.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:y.indexOf("Android")>-1,iPhone:y.indexOf("iPhone")>-1,iPad:y.indexOf("iPad")>-1,webApp:y.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},P;b.versions.mobile||b.versions.ios||b.versions.android||b.versions.iPhone||b.versions.iPad?P=!1:P=!0},844513:function(T,S,a){a.d(S,{Z:function(){return l}});var b=function(){var r=this,x=r._self._c;return r.attr.buttonHide?x("div",{style:{position:"absolute",right:r.attr.buttonHideRight+"px",top:r.attr.buttonHideTop+"px",width:"30px",height:"25px",cursor:"pointer",zIndex:"9999"},on:{click:function(K){return r.onHide()}}},[r.openTooltip?x("el-tooltip",{attrs:{"open-delay":1e3,content:r.attr.buttonHideTooltipContent,effect:"dark",placement:"top"}},[x("el-button",{class:r.attr.buttonHideIconClass&&r.attr.buttonHideIconClass!=""?r.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:r.attr.buttonHideColor,fontSize:r.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):x("el-button",{class:r.attr.buttonHideIconClass&&r.attr.buttonHideIconClass!=""?r.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:r.attr.buttonHideColor,fontSize:r.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):r._e()},P=[],y=a(752246),f={props:["attr"],name:"hide-button",data(){return{isPc:y.b}},computed:{openTooltip:function(){let h=!1,r=this.attr.buttonHideTooltipContent;return y.b&&r&&r!=null&&r.trim()!=""&&(h=!0),h}},methods:{onHide(){this.attr.hide=!0,this.$emit("sendButtonHide")}}},D=f,E=a(768141),g=(0,E.Z)(D,b,P,!1,null,"bf399b9a",null),l=g.exports},729686:function(T,S,a){a.r(S),a.d(S,{default:function(){return H}});var b=function(){var t=this,n=t._self._c;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.widgetInfo.attr.hide!=!0,expression:"widgetInfo.attr.hide != true"}],style:{width:t.widgetInfo.attr.w+"px",height:t.widgetInfo.attr.hh+"px",overflow:"hidden"}},[n("hide-button",{attrs:{attr:t.widgetInfo.attr}}),n("el-popover",{attrs:{width:"300",trigger:t.widgetInfo.config.buttonStyle.trigger,placement:t.widgetInfo.config.buttonStyle.placement,disabled:t.widgetInfo.config.buttonStyle.disabled,offset:t.widgetInfo.config.buttonStyle.offset,transition:t.widgetInfo.config.buttonStyle.transition?"fade-in-linear":"","visible-arrow":t.widgetInfo.config.buttonStyle.arrow},model:{value:t.widgetInfo.config.buttonStyle.value,callback:function(p){t.$set(t.widgetInfo.config.buttonStyle,"value",p)},expression:"widgetInfo.config.buttonStyle.value"}},[n("el-form",[n("el-form-item",{attrs:{label:"\u9009\u62E9\u6A21\u578B"}},[t.AIDataList.length>0?n("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9","popper-append-to-body":!1},on:{change:t.modelChange},model:{value:t.model,callback:function(p){t.model=p},expression:"model"}},t._l(t.AIDataList,function(p){return n("el-option",{key:p.id,attrs:{label:p.modelName,value:p.id}})}),1):n("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9"},model:{value:t.model,callback:function(p){t.model=p},expression:"model"}},[n("el-option",{key:"0",attrs:{label:"0",value:"0"}})],1)],1),n("el-form-item",{attrs:{label:"\u9009\u62E9\u7248\u672C"}},[t.AIDataList.length>0?n("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9","popper-append-to-body":!1},on:{change:t.versionChange},model:{value:t.version,callback:function(p){t.version=p},expression:"version"}},t._l(t.AIDataList[t.modelIndex].childrens,function(p){return n("el-option",{key:p.deployFlowId,attrs:{label:p.modelVersion,value:p.deployFlowId}})}),1):n("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9"},model:{value:t.version,callback:function(p){t.version=p},expression:"version"}},[n("el-option",{key:"0",attrs:{label:"0",value:"0"}})],1)],1),n("el-form-item",{attrs:{label:"\u533A\u57DF\u9009\u62E9\uFF1A"}},[n("p",{staticStyle:{cursor:"pointer"},on:{click:t.checkMap}},[t._v("\u3010\u70B9\u51FB\u9009\u62E9\u5730\u56FE\u533A\u57DF\u3011")])]),n("el-form-item",{staticStyle:{"text-align":"center",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.cancel}},[t._v("\u53D6\u6D88")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.submit}},[t._v("\u786E\u5B9A")])],1)],1),n("el-button",{style:t.btnStyle,attrs:{slot:"reference",title:"AI\u6A21\u578B"},slot:"reference"})],1),n("el-progress",{ref:"circle",staticStyle:{left:"0px",display:"none"},attrs:{id:"aiprogress",type:"circle",percentage:t.percentage,"stroke-width":6,color:"#ff4949",width:80}})],1)},P=[],y=a(653183),f=a.n(y),D=a(445061),E=a(844513),g=a(935051);let l="/thirdparty/ai",h={queryModelServiceAndDiagram(){return(0,g.getRequest)(l+"/queryModelServiceAndDiagram")},aiModelSubmit(o){return(0,g.postRequest)(l+"/executeModel",o)},aiModelProgress(o){return(0,g.postRequest)(l+"/queryExecuteModel",o)}};var r=a(690577),x=a(324459),K=a(481534),O=a(372449),m=a(2487),c=a(390583),i=a(337564),e=a(682571),d=a(568640),v=a(23230),B=a(505689),Z=a(776094),N=a(144727),R=a(313811),L=a(42160),u=a(927966),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAIFklEQVR4Xu2dWahXVRTGv8+XoMHICJogMokIqod66aGXsqCHpAEiywqTCkoMKzSpbqgN5tSoDQ8FFYEiVBRNVESBSWBRVtJg5dBcNs/Djk+PePXe6z3/c9c641pw3/b+9t5r/e7+77POPnsTYZ32ADs9+hg8AoCOQxAABAAd90DHhx8zQADQcQ90fPgxAwQAHfdAx4cfM0AA0HEPdHz4lc8AKaXRACYAOAbAGAD7Atgb2JKk2gzgBf2R/KDjsXIZfmUApJQmAzgPwEk5R/YJgOUA7iG5PmedKDaMB0oFIKU0CsBEAH0ADi8YnQTgYQCzSH5eUCOqZR4oDYCU0mEAlgE41sj7vwO4DcA8kj8baXZOphQAUkrTASx28u43AGaSfNBJv9Wy7gCklGZnU763I98CcBnJld4NtUnfFYCU0tUAFpTssBUAriG5ruR2G9mcGwAppVMBPF2RV/4GcD+A2ST1ExE2hAdcAEgpHQTg3ex5vkrn/wbgJpI3V9mJOrftBYCm4bNqNPC1AC4iuapGfapFV8wBSCkdDECJGj3z18n+A7A0Wx/8WqeOVdkXDwDmAriuykEN0/ZGAJNJvljjPpbWNQ8AngdwcmkjKNaQsolLsvyB1gmdNQ8APgQwriEe/RjAJJKvNaS/5t30AOBHAHrD1yRTlrKPZOfWBh4A/ARgryZFP+vrJgCXkqwqd1GJywKAgW5/DMA0kgKi9RYADB5ivV28ogsvmAKAXf+PPwlgSpvTyQHA8JP8dwAuJqmfhtZZAJA/pA8BuJzkL/mr1L9kANBbjJTintimvEEA0BsAKq13CvMA3EDyn96r16tGAFA8HtqBdC7J94pLVF8zABhZDP7STABgPknNDI0zDwCamAoeaeBW6xsHku+PVKjs+h4ANDUVPFLf663idJLaitYYCwDsQ/V4tt/gB3tpe8UAwN6nUvwye1x82UfeTjUAsPPlzkpaFC7U7iiS2qVcSwsA/MOyBsCZJD/yb6r3FgKA3n1WpIa+Y9QXUgtJ/ltEwKtOAODl2cF1NRucT1JJpFpYAFB+GJQ+vpbk/PKbHthiAFBdFJ7JkkffV9eFrcewmFpKqauJoCJ+1OOiMogvFalsUScAsPDiyDW2faNQ+q7kAGDkwbNS+AzADJKPWgnm0QkA8nip3DL6qlofsr5eRrMBQBle7r0Nfbqmzajux94EAL0Hp8waF5DUiWhuFgC4udZEWO8QxpN8xURtEJEAwMuzdrrfAjjUazeyBwBd3BFkF+7BlW4nqaP2zM0DgEgEmYcJfwI4gKR51tADgJgB7AGQoo6+u9Va2gOAmAGso7RVbw3Jo62lPQCIGcA6Stv1xpLUqelm5gFAzABm4RkgpL0Ej1jKBwCW3vTXWkRSx++aWQBg5spShJ4gebplSwGApTf9tVaRPN6yGQ8AYhFoGaEdtdaSPNJS3gOAWARaRqiBAMQM4AfAapLHWcrHDGDpTX+tp0ieZtlMAGDpTX+tJSSnWjYTAFh601/rQpI6rMrMAgAzV5YidAjJDZYtBQCW3vTVMl8AqrsBgG/QLNV1dO2dloIBgLU3/fS+AqDpXxtDTM1jBog8gGmItoidQ1LX7ppbAGDuUnPBpSQvN1fNBD0AiFSwXbQeIDnFTm6gUgDg6d3i2jpfaFYZZwh4ABBrgOKBV01t+dLx9KVcaxcAjCxY1rUXkJxhLborPQ8AYg3QewQru77OA4D4CegNACV3dGZQJRdReAAQM0A+AHTBpi6f0EHTlVkAUL7r9e3/Hdm1tTpuvlILAMp1vw6FOpvkq+U2O3RrHgDEGmBwfy/Pbiat1SniHgDEGmBHAPRF79SyD3/KO8N4ABAzwHbv6/w/HfOiE8BqaR4AxAwA6HDomSTvqmXU+3UqALCP0JvZQq+Wx8PvPNwAwBaAOSR1i1hjLACwCZWOgdcdgu/YyJWnEgCMzNd/AJiT3RtYq4sg8g7LA4CuPAXoKNdJJJXSbax5AND2pwClb3X9y7ym3hban9YAoLf/XR3krFRuo+8L9gagrT8B15O8sTde6l86ZoDhY/RclsNfP3zR5pUIAIaOmb7B09c4ugq2tRYADAytduTenZ3MqZRuq80DgM0A9mmo17QjV492Kxva/5677QHAWgBH9NyTaisoibMIQJ/H93fVDm3XrXsAoP3sJ9Z50Dv1TY92emX7RoP6bNZVDwD0++n2LZvZyLcKzSXZZ6zZKDkPAE4BoEenOpvu7tV//dt17mQZffMAYBQAbYMaXcYAemxDFzMqjbu4brd49zgOs+LmAKhnKSUtqK4066WNkGalySS/sJFrh4oXAPsB+BTA7jVw00YA09qe0CnqZxcAslngFiVTinbMqN62t3Z6bx82iAc8AdgNgB6tTA83zhlF7cG/iuSmnOU7W8wNgGwWGAtAK+49S/Kw2tJ073bRYknjKK0ZVwAyCMYD0AuVPRxHpYWdbt42vU7Fsb+1kXYHIIPgKADPAjjQeOR63JwPQBcrxu98AeeWAkAGgZ4M7gNwRoF+7lzla23JAnAvyda/sTPw15ASpQGwrQcppQkZCPsXGNg6ADpGRSCFGXigdAD6gTAJwCUAThhmHDo5YwWAZST1MxJm6IHKAOgHwrjsUXEMAP3p8VG7cZRI2kBSiZwwJw9UDoDTuEI2pwcCgJyOamuxAKCtkc05rgAgp6PaWiwAaGtkc44rAMjpqLYWCwDaGtmc4woAcjqqrcUCgLZGNue4AoCcjmprsQCgrZHNOa4AIKej2lrsf4Kkcp/BtE+YAAAAAElFTkSuQmCC",C=a(386892),A=a(149500),F={name:"a-i",props:["widgetInfo"],mixins:[C.D,D.u],components:{ElFormItem:r.Z,HideButton:E.Z},data(){return{model:"",version:"",AIDataList:[],modelIndex:0,versionIndex:0,description:"",url:'{"progress":"http://192.168.20.54:5001/ml_v2/progress","url":"http://192.168.20.54:5001/ml_v2/predict"}',progressUrl:"",submitUrl:"",flowId:"501",sessionId:"sid10",mapCode:"HOUSE_WZ",points:[[3591200198264e-6,13414400252043e-6],[3591400198264e-6,13414600252043e-6]],map:null,timer:"",pickupFeatures:[],pickupLayer:null,pickupSource:null,dragBox:null,highlightStyle:null,normalStyle:null,extentStyle:null,centerOfBox:null,selectedFeature:null,popup:null,setInterval:"",percentage:0,playai:s,btnStyle:{backgroundColor:"#66b1ff",borderColor:"#66b1ff",backgroundImage:"url("+a(769781)+")",backgroundSize:"70% 70%",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"28px",height:"28px",opacity:1}}},created(){h.queryModelServiceAndDiagram().then(o=>{o.status==200&&(this.AIDataList=o.data)}).catch(o=>{A.log(o)}),A.log(this.AIDataList)},mounted(){this.initAction(this.widgetInfo),this.timer=setInterval(this.getBindMap,500),this.loadInfo(this.widgetInfo)},methods:{loadInfo(o){let t=o.config.imgIconConfig.img;t?(this.btnStyle.backgroundImage=`url(${t})`,this.btnStyle.backgroundSize=o.config.imgIconConfig.width+"px "+o.config.imgIconConfig.height+"px"):this.btnStyle.backgroundImage="url("+a(769781)+")",this.btnStyle.width=o.attr.w+"px",this.btnStyle.height=o.attr.h+"px",this.btnStyle.opacity=o.attr.opacity,o.attr.backgroundColor?this.btnStyle.backgroundColor=o.attr.backgroundColor:this.btnStyle.backgroundColor="#66b1ff"},initAction(o){this.registerAction(o,"configMap","mapList",this.doConfigMap)},reLoadInfo(o){this.loadInfo(o)},doConfigMap(o,t,n){let p=t[n];A.info("==============="),A.info(o),A.info(p),this.map=p,A.info("==============="),(0,K.registerProj)("EPSG:3857"),this.map.on("moveend",this.changeIconPosition),A.log("AI\u7EC4\u4EF6\u6355\u83B7map\u5BF9\u8C61\u6210\u529F\uFF0C\u5173\u95ED\u5B9A\u65F6\u5668\u5E76\u521D\u59CB\u5316AI\u62FE\u53D6\u8303\u56F4\u56FE\u5C42"),this.pickupSource=new m.default({}),this.aiSource=new m.default({}),this.aiResultSource=new m.default({}),this.highlightStyle=new e.ZP({fill:new d.Z({color:"rgba(255, 0, 0, 0.5)"}),stroke:new v.Z({color:"#FF7F00",width:2}),image:new B.Z({radius:7,fill:new d.Z({color:"#ffcc33"})})}),this.normalStyle=new e.ZP({fill:new d.Z({color:"rgba(255, 0, 0, 0.2)"}),stroke:new v.Z({color:"#FF0000",width:2}),image:new B.Z({radius:7,fill:new d.Z({color:"#ffcc33"})})}),this.extentStyle=new e.ZP({fill:new d.Z({color:"rgba(255, 0, 0, 0.0)"}),stroke:new v.Z({color:"#FF0000",width:2}),image:new B.Z({radius:7,fill:new d.Z({color:"#ffcc33"})})}),this.pickupLayer=new O.default({source:this.pickupSource,style:this.normalStyle,zIndex:99}),this.map.addLayer(this.pickupLayer),this.aiLayer=new O.default({source:this.aiSource,style:this.normalStyle,zIndex:99}),this.map.addLayer(this.aiLayer),this.aiResultLayer=new O.default({source:this.aiResultSource,style:this.normalStyle,zIndex:99}),this.map.addLayer(this.aiResultLayer);var w=new N.ZP([[[120.5049,30.6699],[120.5253,30.6699],[120.5253,30.6842],[120.5049,30.6842]]]),I=new R.Z(w),M=new m.default;M.addFeature(I);var U=new O.default({source:M,style:this.extentStyle,zIndex:99});this.map.addLayer(U)},getBindMap(){A.log(this.widgetInfo),window.shinemap&&clearInterval(this.timer)},modelChange(o){this.version="",this.description="";let t=this.AIDataList.length;for(let n=0;n<t;n++)if(this.AIDataList[n].id==o){this.modelIndex=n;break}},versionChange(o){let t=this.AIDataList[this.modelIndex].childrens.length;for(let n=0;n<t;n++)if(this.AIDataList[this.modelIndex].childrens[n].deployFlowId==o){this.versionIndex=n,this.description=this.AIDataList[this.modelIndex].childrens[n].description,this.url=this.AIDataList[this.modelIndex].childrens[n].url,this.flowId=this.AIDataList[this.modelIndex].childrens[n].deployFlowId,this.sessionId=new Date().getTime().toString();break}},checkMap(){A.log("\u5F00\u59CB\u7ED8\u5236AI\u62FE\u53D6\u8303\u56F4"),this.dragBox=new x.Z({}),this.map.addInteraction(this.dragBox);let o=this;this.dragBox.on("boxend",function(){let t=o.dragBox.getGeometry();o.pickupSource.clear(),o.aiResultSource.clear(),f()("#playai").remove();let n=new R.Z(t);o.pickupSource.addFeature(n),o.points=[];let p=t.getExtent(),w=(0,c.fromLonLat)([p[0],p[1]],"EPSG:3857"),I=(0,c.transform)(w,"EPSG:4326","EPSG:3857");o.points.push([w[1],w[0]]);let M=(0,c.fromLonLat)([p[2],p[3]],"EPSG:3857"),U=(0,c.transform)(M,"EPSG:4326","EPSG:3857");o.points.push([M[1],M[0]]),o.centerOfBox=(0,Z.getCenter)(p);let G=o.map.getPixelFromCoordinate(o.centerOfBox),Q=G[0]-40,X=G[1]-40,W=" <div id='playai' class='startBtn' style='position:absolute;left:"+Q+"px;top:"+X+"px'><div id='predict' class='predict' onClick='forecast(this)'><img  src='"+o.playai+"' style='width:66px;height:66px;margin-left:5px'/></div><div id='progress' class='wrap' style='position:absolute;display:none'><div class='leftWrap'><div class='left'></div></div><div class='rightWrap'><div class='right'></div></div> <div class='proportion'>0%</div></div></div>",z="#"+o.map.values_.target;f()(z).after(W)}),window.forecast=function(t){f()("#predict").css("display","none"),f()("#progress").css("display",""),o.submit(),o.map.removeInteraction(o.dragBox)}},changeIconPosition(){if(this.centerOfBox!=null){let o=this.map.getPixelFromCoordinate(this.centerOfBox),t=o[0]-40,n=o[1]-40;f()("#playai").css("left",t+"px"),f()("#playai").css("top",n+"px")}},showAiInfo(o){this.selectedFeature!=null&&(this.selectedFeature.setStyle(this.normalStyle),this.selectedFeature=null);let t=this;this.map.forEachFeatureAtPixel(o.pixel,function(w){return t.selectedFeature=w,w.setStyle(t.highlightStyle),!0});var n=t.popup.getElement();if(t.selectedFeature){if(t.selectedFeature.values_.area){f()(n).css("display","");var p=o.coordinate;f()("#popup-content").html("<p>\u9762\u79EF:"+t.selectedFeature.values_.area+"</p>"),t.popup.setPosition(p)}}else f()(n).css("display","none")},cancel(){this.model="",this.version=""},submit(){try{this.progressUrl=JSON.parse(this.url).progress,this.submitUrl=JSON.parse(this.url).url;let o={flowId:this.flowId,url:this.submitUrl,mapCode:this.mapCode,sessionId:this.sessionId,points:this.points};f()(".proportion").html("0%"),f()(".left").css("transform",""),f()(".right").css("transform",""),this.fetchProgress();let t=this;h.aiModelSubmit(o).then(n=>{if(n.status==200){let p=JSON.stringify(n.data);t.aiResultSource.addFeatures(new i.default().readFeatures(p,{dataProjection:"EPSG:3857",featureProjection:"EPSG:4326"})),t.pickupSource.clear()}else f()("#predict").css("display",""),f()("#progress").css("display","none"),t.$message.error(n.msg);A.log(n)}).catch(n=>{f()("#predict").css("display",""),f()("#progress").css("display","none"),A.log(n)})}catch(o){A.log(o),f()("#predict").css("display",""),f()("#progress").css("display","none")}},fetchProgress(){let o={sessionId:this.sessionId,url:this.progressUrl},t=this;this.setInterval=setInterval(function(){h.aiModelProgress(o).then(n=>{if(n.status==200){let I=parseFloat(n.data)+"%";f()(".proportion").html(I);var p=parseInt(f()(".proportion").html())*3.6;p<180?f()(".right").css("transform","rotate("+p+"deg)"):(f()(".right").css("transform","rotate(180deg)"),f()(".left").css("transform","rotate("+(p-180)+"deg)")),n.data==100&&(f()("#playai").css("display","none"),clearInterval(t.setInterval))}A.log(n)}).catch(n=>{A.log(n)})},1e3)},setButtonStyle(){return{backgroundColor:"#66b1ff",borderColor:"#66b1ff",backgroundImage:"url("+a(769781)+")",backgroundSize:"70% 70%",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},onClick(){let o=this,t=this.widgetInfo.action.sendOut.actionList;this.$$lib__.each(t,n=>{if(n.enabled&&n.code==o.$$global_editor.actionType.change.code){let p=o.$$global_editor.actionType.change.code+"_"+o.widgetInfo.id,w={value:JSON.parse(JSON.stringify(this.selectKey))};n.paramsExtend&&n.paramsExtend.length>0&&this.$$lib__.each(n.paramsExtend,I=>{if(I.type==this.$$global_editor.dataSourcType.static.code&&I.fieldS&&I.fieldS!="")L.default.set(w,I.fieldS,I.value);else if(I.type==this.$$global_editor.dataSourcType.dynamic.code&&I.fieldD!=""){let M=this.getDynamicVal(I.fieldD);L.default.set(w,I.fieldD,M)}}),u.Z.$emit(p,w),n.postMessage&&this.doPostMessage(w),this.actionNameList.push(p)}})}},beforeDestroy(){clearInterval(this.timer)}},k=F,J=a(768141),j=(0,J.Z)(k,b,P,!1,null,null,null),H=j.exports},769781:function(T,S,a){T.exports=a.p+"static/img/ai_logo.7cb286bd.png"},910516:function(T,S,a){a.d(S,{$6:function(){return D},Bx:function(){return r},Fi:function(){return O},Kf:function(){return c},QC:function(){return d},QL:function(){return Z},TN:function(){return B},Xp:function(){return L},aj:function(){return g},rM:function(){return e},v8:function(){return K},vY:function(){return v},yZ:function(){return h}});var b=a(247602),P=a(192249),y=a(102047),f=a(312059);function D(u){var s=arguments;return function(C){for(var A=!0,F=0,k=s.length;F<k&&(A=A&&s[F](C),!!A);++F);return A}}var E=function(u){var s=u.originalEvent;return s.altKey&&!(s.metaKey||s.ctrlKey)&&!s.shiftKey},g=function(u){var s=u.originalEvent;return s.altKey&&!(s.metaKey||s.ctrlKey)&&s.shiftKey},l=function(u){var s=u.map.getTargetElement(),C=u.map.getOwnerDocument().activeElement;return s.contains(C)},h=function(u){return u.map.getTargetElement().hasAttribute("tabindex")?l(u):!0},r=P.uX,x=function(u){return u.type==MapBrowserEventType.CLICK},K=function(u){var s=u.originalEvent;return s.button==0&&!(y.G$&&y.tK&&s.ctrlKey)},O=P.Dv,m=function(u){return u.type=="pointermove"},c=function(u){return u.type==b.Z.SINGLECLICK},i=function(u){return u.type==MapBrowserEventType.DBLCLICK},e=function(u){var s=u.originalEvent;return!s.altKey&&!(s.metaKey||s.ctrlKey)&&!s.shiftKey},d=function(u){var s=u.originalEvent;return!s.altKey&&(y.tK?s.metaKey:s.ctrlKey)&&!s.shiftKey},v=function(u){var s=u.originalEvent;return!s.altKey&&!(s.metaKey||s.ctrlKey)&&s.shiftKey},B=function(u){var s=u.originalEvent,C=s.target.tagName;return C!=="INPUT"&&C!=="SELECT"&&C!=="TEXTAREA"&&!s.target.isContentEditable},Z=function(u){var s=u.originalEvent;return(0,f.h)(s!==void 0,56),s.pointerType=="mouse"},N=function(u){var s=u.originalEvent;return assert(s!==void 0,56),s.pointerType==="touch"},R=function(u){var s=u.originalEvent;return assert(s!==void 0,56),s.pointerType==="pen"},L=function(u){var s=u.originalEvent;return(0,f.h)(s!==void 0,56),s.isPrimary&&s.button===0}},324459:function(T,S,a){a.d(S,{Z:function(){return O}});var b=a(832450),P=a(799994),y=a(384899),f=a(144727),D=function(){var m=function(c,i){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,d){e.__proto__=d}||function(e,d){for(var v in d)Object.prototype.hasOwnProperty.call(d,v)&&(e[v]=d[v])},m(c,i)};return function(c,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");m(c,i);function e(){this.constructor=c}c.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}(),E=function(m){D(c,m);function c(i){var e=m.call(this)||this;return e.geometry_=null,e.element_=document.createElement("div"),e.element_.style.position="absolute",e.element_.style.pointerEvents="auto",e.element_.className="ol-box "+i,e.map_=null,e.startPixel_=null,e.endPixel_=null,e}return c.prototype.disposeInternal=function(){this.setMap(null)},c.prototype.render_=function(){var i=this.startPixel_,e=this.endPixel_,d="px",v=this.element_.style;v.left=Math.min(i[0],e[0])+d,v.top=Math.min(i[1],e[1])+d,v.width=Math.abs(e[0]-i[0])+d,v.height=Math.abs(e[1]-i[1])+d},c.prototype.setMap=function(i){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);var e=this.element_.style;e.left="inherit",e.top="inherit",e.width="inherit",e.height="inherit"}this.map_=i,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)},c.prototype.setPixels=function(i,e){this.startPixel_=i,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()},c.prototype.createOrUpdateGeometry=function(){var i=this.startPixel_,e=this.endPixel_,d=[i,[i[0],e[1]],e,[e[0],i[1]]],v=d.map(this.map_.getCoordinateFromPixelInternal,this.map_);v[4]=v[0].slice(),this.geometry_?this.geometry_.setCoordinates([v]):this.geometry_=new f.ZP([v])},c.prototype.getGeometry=function(){return this.geometry_},c}(y.Z),g=E,l=a(910516),h=function(){var m=function(c,i){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,d){e.__proto__=d}||function(e,d){for(var v in d)Object.prototype.hasOwnProperty.call(d,v)&&(e[v]=d[v])},m(c,i)};return function(c,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");m(c,i);function e(){this.constructor=c}c.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}(),r={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"},x=function(m){h(c,m);function c(i,e,d){var v=m.call(this,i)||this;return v.coordinate=e,v.mapBrowserEvent=d,v}return c}(b.ZP),K=function(m){h(c,m);function c(i){var e=m.call(this)||this;e.on,e.once,e.un;var d=i||{};return e.box_=new g(d.className||"ol-dragbox"),e.minArea_=d.minArea!==void 0?d.minArea:64,d.onBoxEnd&&(e.onBoxEnd=d.onBoxEnd),e.startPixel_=null,e.condition_=d.condition?d.condition:l.v8,e.boxEndCondition_=d.boxEndCondition?d.boxEndCondition:e.defaultBoxEndCondition,e}return c.prototype.defaultBoxEndCondition=function(i,e,d){var v=d[0]-e[0],B=d[1]-e[1];return v*v+B*B>=this.minArea_},c.prototype.getGeometry=function(){return this.box_.getGeometry()},c.prototype.handleDragEvent=function(i){this.box_.setPixels(this.startPixel_,i.pixel),this.dispatchEvent(new x(r.BOXDRAG,i.coordinate,i))},c.prototype.handleUpEvent=function(i){this.box_.setMap(null);var e=this.boxEndCondition_(i,this.startPixel_,i.pixel);return e&&this.onBoxEnd(i),this.dispatchEvent(new x(e?r.BOXEND:r.BOXCANCEL,i.coordinate,i)),!1},c.prototype.handleDownEvent=function(i){return this.condition_(i)?(this.startPixel_=i.pixel,this.box_.setMap(i.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new x(r.BOXSTART,i.coordinate,i)),!0):!1},c.prototype.onBoxEnd=function(i){},c}(P.Z),O=K},799994:function(T,S,a){a.d(S,{S:function(){return D}});var b=a(252759),P=a(247602),y=function(){var E=function(g,l){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,r){h.__proto__=r}||function(h,r){for(var x in r)Object.prototype.hasOwnProperty.call(r,x)&&(h[x]=r[x])},E(g,l)};return function(g,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");E(g,l);function h(){this.constructor=g}g.prototype=l===null?Object.create(l):(h.prototype=l.prototype,new h)}}(),f=function(E){y(g,E);function g(l){var h=this,r=l||{};return h=E.call(this,r)||this,r.handleDownEvent&&(h.handleDownEvent=r.handleDownEvent),r.handleDragEvent&&(h.handleDragEvent=r.handleDragEvent),r.handleMoveEvent&&(h.handleMoveEvent=r.handleMoveEvent),r.handleUpEvent&&(h.handleUpEvent=r.handleUpEvent),r.stopDown&&(h.stopDown=r.stopDown),h.handlingDownUpSequence=!1,h.targetPointers=[],h}return g.prototype.getPointerCount=function(){return this.targetPointers.length},g.prototype.handleDownEvent=function(l){return!1},g.prototype.handleDragEvent=function(l){},g.prototype.handleEvent=function(l){if(!l.originalEvent)return!0;var h=!1;if(this.updateTrackedPointers_(l),this.handlingDownUpSequence){if(l.type==P.Z.POINTERDRAG)this.handleDragEvent(l),l.originalEvent.preventDefault();else if(l.type==P.Z.POINTERUP){var r=this.handleUpEvent(l);this.handlingDownUpSequence=r&&this.targetPointers.length>0}}else if(l.type==P.Z.POINTERDOWN){var x=this.handleDownEvent(l);this.handlingDownUpSequence=x,h=this.stopDown(x)}else l.type==P.Z.POINTERMOVE&&this.handleMoveEvent(l);return!h},g.prototype.handleMoveEvent=function(l){},g.prototype.handleUpEvent=function(l){return!1},g.prototype.stopDown=function(l){return l},g.prototype.updateTrackedPointers_=function(l){l.activePointers&&(this.targetPointers=l.activePointers)},g}(b.ZP);function D(E){for(var g=E.length,l=0,h=0,r=0;r<g;r++)l+=E[r].clientX,h+=E[r].clientY;return[l/g,h/g]}S.Z=f}}]);
