"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[54793],{56279:function(v,f,d){d.d(f,{P:function(){return r}});var c=d(386892),h=d(149500);const r={mixins:[c.D],created(){},methods:{lifecycleBeforeChartsLoad(g){if(this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.beforeChartsLoad&&this.widgetInfo.action.lifecycle.beforeChartsLoad.enabled){(!this.widgetInfo.action.lifecycle.beforeChartsLoad.script||!this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content||this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content=="")&&h.warn("\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C\u4E3A\u7A7A"),h.info("\u6267\u884C\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C");let p=new Function("option",this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content).apply(this,[g]);if(p)return p}return g},lifecycleAfterLoad(){this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.afterLoad&&this.widgetInfo.action.lifecycle.afterLoad.enabled&&((!this.widgetInfo.action.lifecycle.afterLoad.script||!this.widgetInfo.action.lifecycle.afterLoad.script.content||this.widgetInfo.action.lifecycle.afterLoad.script.content=="")&&h.warn("\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C\u4E3A\u7A7A"),h.info("\u6267\u884C\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C"),new Function("",this.widgetInfo.action.lifecycle.afterLoad.script.content).apply(this,[]))}}}},752246:function(v,f,d){d.d(f,{X:function(){return c},b:function(){return h}});let c={versions:function(){var r=navigator.userAgent;return{trident:r.indexOf("Trident")>-1,presto:r.indexOf("Presto")>-1,webKit:r.indexOf("AppleWebKit")>-1,gecko:r.indexOf("Gecko")>-1&&r.indexOf("KHTML")==-1,mobile:!!r.match(/AppleWebKit.*Mobile.*/),ios:!!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:r.indexOf("Android")>-1,iPhone:r.indexOf("iPhone")>-1,iPad:r.indexOf("iPad")>-1,webApp:r.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},h;c.versions.mobile||c.versions.ios||c.versions.android||c.versions.iPhone||c.versions.iPad?h=!1:h=!0},844513:function(v,f,d){d.d(f,{Z:function(){return M}});var c=function(){var s=this,m=s._self._c;return s.attr.buttonHide?m("div",{style:{position:"absolute",right:s.attr.buttonHideRight+"px",top:s.attr.buttonHideTop+"px",width:"30px",height:"25px",cursor:"pointer",zIndex:"9999"},on:{click:function(z){return s.onHide()}}},[s.openTooltip?m("el-tooltip",{attrs:{"open-delay":1e3,content:s.attr.buttonHideTooltipContent,effect:"dark",placement:"top"}},[m("el-button",{class:s.attr.buttonHideIconClass&&s.attr.buttonHideIconClass!=""?s.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:s.attr.buttonHideColor,fontSize:s.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):m("el-button",{class:s.attr.buttonHideIconClass&&s.attr.buttonHideIconClass!=""?s.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:s.attr.buttonHideColor,fontSize:s.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):s._e()},h=[],r=d(752246),g={props:["attr"],name:"hide-button",data(){return{isPc:r.b}},computed:{openTooltip:function(){let x=!1,s=this.attr.buttonHideTooltipContent;return r.b&&s&&s!=null&&s.trim()!=""&&(x=!0),x}},methods:{onHide(){this.attr.hide=!0,this.$emit("sendButtonHide")}}},b=g,p=d(768141),C=(0,p.Z)(b,c,h,!1,null,"bf399b9a",null),M=C.exports},354793:function(v,f,d){d.r(f),d.d(f,{default:function(){return X}});var c=function(){var t=this,n=t._self._c;return n("div",{ref:"wordCloud",staticClass:"page",style:{width:t.widgetInfo.attr.w+"px",height:t.widgetInfo.attr.hh+"px"}},[n("hide-button",{attrs:{attr:t.widgetInfo.attr}}),n("div",{staticClass:"page"},[n("div",{ref:"Panel",staticClass:"tagsCloud",style:{height:t.mUtils.getNewPxH(t.boxWidth)+"px",width:t.mUtils.getNewPxW(t.boxWidth)+"px"},on:{mousemove:function(i){return t.listener(i)},mouseout:t._out}},t._l(t.useArray,function(i,a){return n("div",{key:a,staticClass:"item",style:[{opacity:(t.boxWidth*.65+i.z)/t.boxWidth},{fontSize:t.mUtils.getNewFontSize((i.z/t.boxWidth/2+.5)*i.fontSize)+"px"},{fontWeight:t.widgetInfo.config.fontWeight},{fontFamily:t.widgetInfo.config.fontFamily},{fontStyle:t.widgetInfo.config.fontStyle},{textDecoration:t.widgetInfo.config.textDecoration},{transform:"translate("+t.mUtils.getNewPxW(i.x)+"px,"+t.mUtils.getNewPxH(i.y)+"px)"},{transformOrigin:"100% 100% 0 "},{zIndex:Math.round(i.zindexVal)},{display:"inline-block"},{color:i.available?i.rcolor:"#c0c4cc"}],on:{mouseenter:function(o){return t.enter(o)},mouseleave:function(o){return t.leave(o)},click:function(o){return t.onClick(i)}}},[t._v(" "+t._s(i.name)+" ")])}),0)])],1)},h=[],r=d(42160),g=d(844513),b=d(445061),p=d(126711),C=d(56279),M=d(868279),x=d(927966),s=d(555616),m=d(67157);const z={mixins:[m.c],data(){return{config_extend:{config:{fontFamily:"alibabaPuHuiTiMedium"}},filter_config:{fontFamily:"alibabaPuHuiTiMedium",color:["#4C84FF"]}}},methods:{filterPredefineColoursSchemeConfig(e,t){this.getNewConfigWithArrary(e,t,this.filter_config)}}};var S=d(149500),H={props:["widgetInfo"],name:"com-wordCloud3d",components:{HideButton:g.Z},mixins:[M.baseConfig,b.u,p.H,C.P,z],data(){return{boxWidth:200,speed:200,randomColor:!0,speedX:1,speedY:1,useArray:[],timer:"",color:[]}},computed:{radius(){return this.boxWidth/3},CX(){return this.boxWidth/2-this.widgetInfo.config.fontSize/2},CY(){return this.boxWidth/2-this.widgetInfo.config.fontSize/2}},mounted(){this.initAction(this.widgetInfo),this.loadInfo(this.widgetInfo)},watch:{"widgetInfo.attr.hide":function(){this.$emit("attrChange",this.widgetInfo)}},methods:{loadInfo(e){let t=[],n=[],i=[];t=e.dataset[e.dataset.type].source,n=e.dataset[e.dataset.type].dimensions,i=e.dataset[e.dataset.type].encode,this.useArray=this.getSeriesData(t,n,i),this.fontsize(e),this.boxWidth=e.config.boxWidth,this.randomColor=e.config.randomColor,this.color=e.config.color,this.speed=e.config.speed>0?(101-e.config.speed)*10:e.config.speed,this.speedX=Math.PI/this.speed*Math.sin(e.config.angle*Math.PI/180)*-1,this.speedY=Math.PI/this.speed*Math.cos(e.config.angle*Math.PI/180),this.init(),clearInterval(this.timer),this.timer=setInterval(()=>{this.rotateX(),this.rotateY()},10),this.lifecycleAfterLoad()},fontsize(e){e.dataset[e.dataset.type].encode.fontSize==""&&this.useArray.forEach(t=>{t.fontSize=e.config.fontSize})},reLoadInfo(e){e&&(this.$refs.wordCloud.style.width=e.attr.w+"px",this.$refs.wordCloud.style.height=e.attr.hh+"px"),this.loadInfo(e)},getSeriesData(e,t,n){let i=[],a=-1,o=-1,u=-1;for(let l=0;l<t.length;l++)t[l]==n.txt&&(a=l),t[l]==n.fontSize&&(o=l),t[l]==n.available&&(u=l);let P;if(o>-1){let l=this.widgetInfo.config.fontSizeMin,L=this.widgetInfo.config.fontSizeMax,w=Number(e[0][o]),I=Number(e[0][o]);e.forEach($=>{let y=Number($[o]);w=w>y?y:w,I=I<y?y:I}),P=I!==w?(L-l)/(I-w):L-l}for(let l=0;l<e.length;l++)i.push({name:e[l][a],index:l,fontSize:o>-1?e[l][o]*P:this.widgetInfo.config.fontSize,available:u>-1?e[l][u]:!0});return i},init(){let e=Math.min(parseInt(this.$refs.wordCloud.style.width),parseInt(this.$refs.wordCloud.style.height));this.boxWidth>e&&(this.boxWidth=e),this.useArray.forEach((t,n)=>{let i=-1+(2*(n+1)-1)/this.useArray.length,a=Math.acos(i),o=a*Math.sqrt(this.useArray.length*Math.PI);r.default.set(t,"x",this.radius*Math.sin(a)*Math.cos(o)*this.widgetInfo.config.scaleW+this.CX),r.default.set(t,"y",this.radius*Math.sin(a)*Math.sin(o)*this.widgetInfo.config.scaleH+this.CY),r.default.set(t,"z",this.radius*Math.cos(a)),this.randomColor&&this.color[n]?r.default.set(t,"rcolor",this.color[n]):r.default.set(t,"rcolor","rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")");let u=this.boxWidth/(this.boxWidth-t.z);r.default.set(t,"zindexVal",u*100)})},rotateX(){let e=Math.cos(this.speedX),t=Math.sin(this.speedX);this.useArray.forEach(n=>{let i=(n.y-this.CY)*e-n.z*t+this.CY,a=n.z*e+(n.y-this.CY)*t;n.y=i,n.z=a;let o=this.boxWidth/(this.boxWidth-n.z);n.zindexVal=o*100})},rotateY(){let e=Math.cos(this.speedY),t=Math.sin(this.speedY);this.useArray.forEach(n=>{let i=(n.x-this.CX)*e-n.z*t+this.CX,a=n.z*e+(n.x-this.CX)*t;n.x=i,n.z=a;let o=this.boxWidth/(this.boxWidth-n.z);n.zindexVal=o*100})},listener(e){let t=this.$refs.Panel.getBoundingClientRect().left,n=this.$refs.Panel.getBoundingClientRect().top,i=e.clientX-t-this.CX,a=e.clientY-n-this.CY;this.speedY=i*1e-4>0?Math.min(this.radius*2e-5,i*1e-4):Math.max(-this.radius*2e-5,i*1e-4),this.speedX=a*1e-4>0?Math.min(this.radius*2e-5,a*1e-4):Math.max(-this.radius*2e-5,a*1e-4)},enter(){this.widgetInfo.config.hover&&clearInterval(this.timer)},leave(){this.widgetInfo.config.hover&&(this.timer=setInterval(()=>{this.rotateX(),this.rotateY()},10))},_out(){this.speedX=Math.PI/this.speed*Math.sin(this.widgetInfo.config.angle*Math.PI/180)*-1,this.speedY=Math.PI/this.speed*Math.cos(this.widgetInfo.config.angle*Math.PI/180)},initAction(e){this.actionSendout(e),this.actionReceive(e)},onClick(e){let t=this,n=this.widgetInfo.action.sendOut.actionList;this.$$lib__.each(n,i=>{if(i.enabled&&i.code==t.$$global_editor.actionType.click.code&&e.available){let a=t.$$global_editor.actionType.click.code+"_"+t.widgetInfo.id,o={name:e.name};if(i.paramsExtend&&i.paramsExtend.length>0){let u=[];t.widgetInfo.dataset[t.widgetInfo.dataset.type].source&&t.widgetInfo.dataset[t.widgetInfo.dataset.type].source.length>0&&(u=t.widgetInfo.dataset[t.widgetInfo.dataset.type].source[e.index]),this.getExtendParams(o,i.paramsExtend,u,t.widgetInfo.dataset[t.widgetInfo.dataset.type].dimensions)}if(i.script&&i.script.enabled){if(S.log("Execute script for "+t.widgetInfo.name+" component to "+i.name+" component"),i.script.content==""){s.Message.warning({message:i.name+"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_clickParam=new Function("param",i.script.content),o=this.customScript_actionSend_clickParam(o)}x.Z.$emit(a,o),i.postMessage&&this.doPostMessage(o),this.actionNameList.push(a)}else if(i.enabled&&i.code==t.$$global_editor.actionType.openLink.code&&e.available){let a={name:e.name};if(i.paramsExtend&&i.paramsExtend.length>0){let o=[];t.widgetInfo.dataset[t.widgetInfo.dataset.type].source&&t.widgetInfo.dataset[t.widgetInfo.dataset.type].source.length>0&&(o=t.widgetInfo.dataset[t.widgetInfo.dataset.type].source[e.index]),this.getExtendParams(a,i.paramsExtend,o,t.widgetInfo.dataset[t.widgetInfo.dataset.type].dimensions)}if(i.script&&i.script.enabled){if(S.log("Execute script for "+t.widgetInfo.name+" component to "+i.name+" component"),i.script.content==""){s.Message.warning({message:i.name+"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_openLink=new Function("param",i.script.content),a=this.customScript_actionSend_openLink(a)}this.openLinkAction(i,a)}})}}},W=H,A=d(768141),E=(0,A.Z)(W,c,h,!1,null,"65f99997",null),X=E.exports}}]);
