"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[17460],{56279:function(L,f,s){s.d(f,{P:function(){return a}});var c=s(386892),d=s(149500);const a={mixins:[c.D],created(){},methods:{lifecycleBeforeChartsLoad(x){if(this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.beforeChartsLoad&&this.widgetInfo.action.lifecycle.beforeChartsLoad.enabled){(!this.widgetInfo.action.lifecycle.beforeChartsLoad.script||!this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content||this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content=="")&&d.warn("\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C\u4E3A\u7A7A"),d.info("\u6267\u884C\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C");let v=new Function("option",this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content).apply(this,[x]);if(v)return v}return x},lifecycleAfterLoad(){this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.afterLoad&&this.widgetInfo.action.lifecycle.afterLoad.enabled&&((!this.widgetInfo.action.lifecycle.afterLoad.script||!this.widgetInfo.action.lifecycle.afterLoad.script.content||this.widgetInfo.action.lifecycle.afterLoad.script.content=="")&&d.warn("\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C\u4E3A\u7A7A"),d.info("\u6267\u884C\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C"),new Function("",this.widgetInfo.action.lifecycle.afterLoad.script.content).apply(this,[]))}}}},752246:function(L,f,s){s.d(f,{X:function(){return c},b:function(){return d}});let c={versions:function(){var a=navigator.userAgent;return{trident:a.indexOf("Trident")>-1,presto:a.indexOf("Presto")>-1,webKit:a.indexOf("AppleWebKit")>-1,gecko:a.indexOf("Gecko")>-1&&a.indexOf("KHTML")==-1,mobile:!!a.match(/AppleWebKit.*Mobile.*/),ios:!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:a.indexOf("Android")>-1,iPhone:a.indexOf("iPhone")>-1,iPad:a.indexOf("iPad")>-1,webApp:a.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},d;c.versions.mobile||c.versions.ios||c.versions.android||c.versions.iPhone||c.versions.iPad?d=!1:d=!0},417460:function(L,f,s){s.r(f),s.d(f,{default:function(){return K}});var c=function(){var i=this,e=i._self._c;return e("div",{style:{width:i.widgetInfo.attr.w+"px",height:i.widgetInfo.attr.hh+"px"}},[e("hide-button",{attrs:{attr:i.widgetInfo.attr}}),e("div",{ref:"scatterSimpleAxis",style:{width:i.widgetInfo.attr.w+"px",height:i.widgetInfo.attr.hh+"px"}})],1)},d=[],a=s(844513),x=s(927966),A=s(400617),v=s(56279),H=s(445061),N=s(126711),C=s(99349),n=s(555616),S=s(275770),T=s(67157),O=s(150813);const J={mixins:[T.c],data(){return{config_extend:{},filter_config:{title:JSON.parse(JSON.stringify(O.Z.charts.title)),legend:JSON.parse(JSON.stringify(O.Z.charts.legend)),tooltip:JSON.parse(JSON.stringify(O.Z.charts.tooltip)),toolbox:JSON.parse(JSON.stringify(O.Z.charts.toolbox)),series:{colors:["#4C84FF"],itemStyle:{color:"",opacity:1}},singleAxis:{axisLine:{lineStyle:{color:"#C4C4C4"}},axisLabel:{fontFamily:"",color:"#8B93A8"}}}}},methods:{filterPredefineColoursSchemeConfig(t,i){this.getNewConfigWithArrary(t,i,this.filter_config)}}};var M=s(149500);const Z=s(954255);var j={name:"ScatterSingleAxis",components:{HideButton:a.Z},mixins:[A.baseConfig,v.P,H.u,N.H,C.P,J],props:["widgetInfo"],data(){return{dimensionsEx:null,dimensionsAliasEx:null,seriesAttr:{x:"",y:[],size:[]}}},watch:{"widgetInfo.attr.hide":function(){this.$emit("attrChange",this.widgetInfo)}},mounted(){this.echarts=Z.init(this.$refs.scatterSimpleAxis,null,{devicePixelRatio:2}),this.initAction(this.widgetInfo),this.loadInfo(this.widgetInfo)},destroyed(){this.echarts.dispose()},methods:{loadInfo(t){let i=[],e=[],o=[],r=[];i=t.dataset[t.dataset.type].source,e=t.dataset[t.dataset.type].dimensions,o=t.dataset[t.dataset.type].dimensionsAlias,r=t.dataset[t.dataset.type].encode;let g=this.getTooltip(t.config.tooltip),P=this.getToolbox(t.config.toolbox),p=JSON.parse(JSON.stringify(t.config.series)),u=this.getCustomColors(i,t.config.series.colors,t.config.series.colorCustom),w=this.getAlias(o),F=[],$=[],z=[],y={dataMax:0,dataMin:0,max:0,min:0};y=this.getPointSymbolSize(t.config.series,i),i.forEach((m,b)=>{if(this.seriesAttr.y.push(m[0]),F.push({...t.config.title,top:b*t.config.singleAxis.scatterHeight+t.config.singleAxis.distanceTop-5,text:m[0]}),$.push({...t.config.singleAxis,top:b*t.config.singleAxis.scatterHeight+t.config.singleAxis.distanceTop-t.config.singleAxis.height,data:w}),z.push({...p,tooltip:g,singleAxisIndex:b,coordinateSystem:"singleAxis",type:"scatter",data:[],itemStyle:{color:u[b],opacity:p.itemStyle.opacity},symbolSize:function(l){return l[1]==0?0:Number((y.max-y.min)*(l[1]-y.dataMin)/(y.dataMax-y.dataMin))+Number(y.min)}}),m.length>1)for(let l=0;l<m.length-1;l++)z[b].data.push([l,m[l+1]])});let h={title:F,singleAxis:$,series:z,tooltip:g,toolbox:P};if(h.series&&h.series.length>0&&t.config.series.emphasis&&t.config.series.emphasis.script&&t.config.series.emphasis.script.enabled){const m=t.config.series.emphasis;if(m.script.content){let b=new Function("index","item","data",m.script.content);for(let l=0;l<h.series.length;l++)for(let I=0;I<h.series[l].data.length;I++)try{let E=b.call(this,l,h.series[l].data[I],h.series[l].data);h.series[l].data[I]={value:h.series[l].data[I],emphasis:E}}catch(E){M.error("\u81EA\u5B9A\u4E49\u9AD8\u4EAE\u6837\u5F0F\u811A\u672C\u62A5\u9519\uFF1A",E)}}}this.getAnimation(h,t),this.setOption(h),this.setAnimationLoop(t,()=>{this.setOption(h,t)})},setOption(t){this.echarts.getOption()&&this.echarts.clear(),this.echarts.setOption(this.lifecycleBeforeChartsLoad(t),{notMerge:!0})},reLoadInfo(t){t&&(this.$refs.scatterSimpleAxis.style.width=t.attr.w+"px",this.$refs.scatterSimpleAxis.style.height=t.attr.hh+"px"),this.loadInfo(t),this.echarts.resize()},getPointSymbolSize(t,i){let e=[],o=0,r=0;M.log(t),t.isShowMax&&t.isShowMin?(t.max=30,t.min=5):!t.isShowMax&&t.isShowMin?(t.min=5,Number(t.max)<=Number(t.min)&&(t.max=Number(t.min)+1)):t.isShowMax&&!t.isShowMin&&(t.max=30,Number(t.max)<=Number(t.min)&&(t.min=Number(t.max)-1));let g=t.max,P=t.min;for(let p=0;p<i.length;p++){let u=i[p];if(u.length>1)for(let w=1;w<u.length;w++)u[w]>0&&e.push(u[w])}return e.sort(function(p,u){return p-u}),e.length>0&&(o=e[e.length-1],r=e[0]),{dataMax:o,dataMin:r,max:g,min:P}},getAlias(t){let i=[];return t.length>1&&t.forEach((e,o)=>{o>0&&i.push(e.alias&&e.alias!=""?e.alias:e.name)}),i},getCustomColors(t,i,e){let o=[];return t.forEach((r,g)=>{e&&i.length>g?i[g]==""?o.push("rgba(255, 255, 255, 0)"):o.push(i[g]):e?o.push("rgba(255, 255, 255, 0)"):o.push("")}),o},getLegendData(t,i){let e=this.$$lib__.find(t,o=>o.name==i.y);return e?e.alias&&e.alias!=""?e.alias:e.name:""},initAction(t){this.actionSendout(t),this.actionReceive(t)},actionSendout(t){let i=this;this.$$lib__.each(t.action.sendOut.actionList,e=>{if(e.enabled){let o=e.code+"_"+t.id;if(e.paramsExtend&&e.paramsExtend.length>0){let r={};this.getParamsExtend(r,e.paramsExtend,t)}e.code==S.default.click.code&&i.onClick(o,e)}})},onClick(t,i){let e=this;e.echarts.on("click",o=>{let r={};if(r.x=o.name,r.y=e.seriesAttr.y[o.componentIndex],r.size=o.data[1],i.script&&i.script.enabled){if(M.log("Execute script for "+e.widgetInfo.name+" component to "+i.name+" component"),i.script.content==""){n.Message.warning({message:i.name+"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript=new Function("param",i.script.content),r=this.customScript(r)}x.Z.$emit(t,r),i.postMessage&&e.doPostMessage(r),e.actionNameList.push(t)})}}},R=j,B=s(768141),D=(0,B.Z)(R,c,d,!1,null,"569ef0b4",null),K=D.exports},844513:function(L,f,s){s.d(f,{Z:function(){return N}});var c=function(){var n=this,S=n._self._c;return n.attr.buttonHide?S("div",{style:{position:"absolute",right:n.attr.buttonHideRight+"px",top:n.attr.buttonHideTop+"px",width:"30px",height:"25px",cursor:"pointer",zIndex:"9999"},on:{click:function(T){return n.onHide()}}},[n.openTooltip?S("el-tooltip",{attrs:{"open-delay":1e3,content:n.attr.buttonHideTooltipContent,effect:"dark",placement:"top"}},[S("el-button",{class:n.attr.buttonHideIconClass&&n.attr.buttonHideIconClass!=""?n.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:n.attr.buttonHideColor,fontSize:n.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):S("el-button",{class:n.attr.buttonHideIconClass&&n.attr.buttonHideIconClass!=""?n.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:n.attr.buttonHideColor,fontSize:n.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):n._e()},d=[],a=s(752246),x={props:["attr"],name:"hide-button",data(){return{isPc:a.b}},computed:{openTooltip:function(){let C=!1,n=this.attr.buttonHideTooltipContent;return a.b&&n&&n!=null&&n.trim()!=""&&(C=!0),C}},methods:{onHide(){this.attr.hide=!0,this.$emit("sendButtonHide")}}},A=x,v=s(768141),H=(0,v.Z)(A,c,d,!1,null,"bf399b9a",null),N=H.exports}}]);
