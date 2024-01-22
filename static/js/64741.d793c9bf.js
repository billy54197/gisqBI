"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[64741],{569731:function(b,p,n){var d=n(789615);const l=[{name:"rotate-r",label:"\u987A\u65F6\u9488\u65CB\u8F6C",config:{rotate:"360deg"}},{name:"rotate-n",label:"\u9006\u65F6\u9488\u65CB\u8F6C",config:{rotate:"-360deg"}},{name:"opracity",label:"\u900F\u660E\u5EA6",config:{opacity:[0,1]}},{name:"size",label:"\u7F29\u653E",config:{scale:0}},{name:"move-x",label:"\u6C34\u5E73\u79FB\u52A8",config:{translateX:"100%"}},{name:"move-y",label:"\u5782\u76F4\u79FB\u52A8",config:{translateY:"100%"}},{name:"custom",label:"\u81EA\u5B9A\u4E49"}],r=[{value:"linear",label:"\u5300\u901F"},{value:"easeOutQuint",label:"\u5FEB-\u6162"},{value:"easeInQuart",label:"\u6162-\u5FEB"},{value:"easeInOutCirc",label:"\u6162-\u5FEB-\u6162"},{value:"easeOutInCirc",label:"\u5FEB-\u6162-\u5FEB"}],f=[{value:"normal",label:"\u6B63\u653E"},{value:"reverse",label:"\u5012\u653E"},{value:"alternate",label:"\u6B63-\u5012\u653E"}],v=(g,a)=>{if(!a||!a.enabled)return;let s={};return a.type!=="custom"?(s={...JSON.parse(JSON.stringify(l.find(o=>o.name===a.type))).config},a.speed&&(s.easing=a.speed),a.time&&(s.duration=(a.time-0)*1e3,s.duration==0&&(s.duration=1)),a.delay&&(s.delay=(a.delay-0)*1e3),a.endDelay&&(s.endDelay=(a.endDelay-0)*1e3),a.direction&&(s.direction=a.direction),a.repeat&&(a.repeat=="repeat"?s.loop=!0:a.repeat-0>0&&(s.loop=a.repeat-0,s.direction==="alternate"&&(s.loop*=2))),s.targets=g):(s={},a.script&&(s=new Function(a.script).apply(void 0)),s.targets=s.myTargets||g),(0,d.Z)(s)};p.Z={animeType:l,speedType:r,direction:f,doAnime:v}},56279:function(b,p,n){n.d(p,{P:function(){return r}});var d=n(386892),l=n(149500);const r={mixins:[d.D],created(){},methods:{lifecycleBeforeChartsLoad(f){if(this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.beforeChartsLoad&&this.widgetInfo.action.lifecycle.beforeChartsLoad.enabled){(!this.widgetInfo.action.lifecycle.beforeChartsLoad.script||!this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content||this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content=="")&&l.warn("\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C\u4E3A\u7A7A"),l.info("\u6267\u884C\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C");let g=new Function("option",this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content).apply(this,[f]);if(g)return g}return f},lifecycleAfterLoad(){this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.afterLoad&&this.widgetInfo.action.lifecycle.afterLoad.enabled&&((!this.widgetInfo.action.lifecycle.afterLoad.script||!this.widgetInfo.action.lifecycle.afterLoad.script.content||this.widgetInfo.action.lifecycle.afterLoad.script.content=="")&&l.warn("\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C\u4E3A\u7A7A"),l.info("\u6267\u884C\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C"),new Function("",this.widgetInfo.action.lifecycle.afterLoad.script.content).apply(this,[]))}}}},752246:function(b,p,n){n.d(p,{X:function(){return d},b:function(){return l}});let d={versions:function(){var r=navigator.userAgent;return{trident:r.indexOf("Trident")>-1,presto:r.indexOf("Presto")>-1,webKit:r.indexOf("AppleWebKit")>-1,gecko:r.indexOf("Gecko")>-1&&r.indexOf("KHTML")==-1,mobile:!!r.match(/AppleWebKit.*Mobile.*/),ios:!!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:r.indexOf("Android")>-1,iPhone:r.indexOf("iPhone")>-1,iPad:r.indexOf("iPad")>-1,webApp:r.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},l;d.versions.mobile||d.versions.ios||d.versions.android||d.versions.iPhone||d.versions.iPad?l=!1:l=!0},844513:function(b,p,n){n.d(p,{Z:function(){return s}});var d=function(){var o=this,m=o._self._c;return o.attr.buttonHide?m("div",{style:{position:"absolute",right:o.attr.buttonHideRight+"px",top:o.attr.buttonHideTop+"px",width:"30px",height:"25px",cursor:"pointer",zIndex:"9999"},on:{click:function(y){return o.onHide()}}},[o.openTooltip?m("el-tooltip",{attrs:{"open-delay":1e3,content:o.attr.buttonHideTooltipContent,effect:"dark",placement:"top"}},[m("el-button",{class:o.attr.buttonHideIconClass&&o.attr.buttonHideIconClass!=""?o.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:o.attr.buttonHideColor,fontSize:o.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):m("el-button",{class:o.attr.buttonHideIconClass&&o.attr.buttonHideIconClass!=""?o.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:o.attr.buttonHideColor,fontSize:o.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):o._e()},l=[],r=n(752246),f={props:["attr"],name:"hide-button",data(){return{isPc:r.b}},computed:{openTooltip:function(){let h=!1,o=this.attr.buttonHideTooltipContent;return r.b&&o&&o!=null&&o.trim()!=""&&(h=!0),h}},methods:{onHide(){this.attr.hide=!0,this.$emit("sendButtonHide")}}},v=f,g=n(768141),a=(0,g.Z)(v,d,l,!1,null,"bf399b9a",null),s=a.exports},664741:function(b,p,n){n.r(p),n.d(p,{default:function(){return P}});var d=function(){var i=this,t=i._self._c;return t("div",[i.imgRefresh?t("div",{directives:[{name:"popover",rawName:"v-popover:imgPopover",arg:"imgPopover"}],ref:"pictureSingle",style:i.style,on:{click:i.onClick}},[t("hide-button",{attrs:{attr:i.widgetInfo.attr}})],1):i._e(),t("el-popover",{ref:"imgPopover",attrs:{"popper-class":"img-popover",transition:"fade-in-linear",width:i.widgetInfo.config.popover.width,trigger:i.widgetInfo.config.popover.trigger,placement:i.widgetInfo.config.popover.placement,disabled:i.widgetInfo.config.popover.disabled,offset:i.widgetInfo.config.popover.offset,"visible-arrow":i.widgetInfo.config.popover.arrow}},[t("div",{style:i.popoerStyle(i.widgetInfo.config),domProps:{innerHTML:i._s(i.content)}})])],1)},l=[],r=n(321300),f=n(927966),v=n(844513),g=n(126711),a=n(445061),s=n(56279),h=n(744658),o=n(148836),m=n(555616),y=n(569731),I=n(149500),w={name:"PictureSingle",components:{HideButton:v.Z},mixins:[h.baseConfig,g.H,a.u,s.P],props:["widgetInfo"],computed:{...(0,o.Se)(["getCanvasSettingInfo","getCanvasSetting"])},data(){return{content:"",imgRefresh:!0,style:{}}},watch:{"widgetInfo.attr.hide":function(){this.$emit("attrChange",this.widgetInfo)},"widgetInfo.attr.hh":function(e){this.style.height=e+"px"},"widgetInfo.attr.w":function(e){this.style.width=e+"px"}},mounted(){this.initAction(this.widgetInfo),this.loadInfo(this.widgetInfo)},methods:{loadInfo(e){let i,t;this.content=e.config.popover.content;let c=e.dataset&&e.dataset.type?e.dataset[e.dataset.type]:null;c&&c.source&&c.dimensions&&c.encode&&c.encode.url&&(i=this.getFieldVal(e.dataset[e.dataset.type].source[0],e.dataset[e.dataset.type].dimensions,e.dataset[e.dataset.type].encode.url),t=this.getFieldVal(e.dataset[e.dataset.type].source[0],e.dataset[e.dataset.type].dimensions,e.dataset[e.dataset.type].encode.content)),i&&i!=""&&(e.config.backgroundImage=i),t&&t!=""&&(this.content=t),this.getStyle(e),this.setAnime(e),this.lifecycleAfterLoad()},reLoadInfo(e){this.loadInfo(e)},initAction(e){this.actionReceive(e)},getStyle(e){let i,t,c;e.config.backgroundSize=="auto-no-repeat"?(i="auto",t="no-repeat"):e.config.backgroundSize=="auto"?(i="auto",t="repeat"):e.config.backgroundSize=="contain-no-repeat"?(c="top "+e.config.align,i="contain",t="no-repeat"):i=e.config.backgroundSize,this.style={width:e.attr.w+"px",height:e.attr.hh+"px",backgroundImage:this.getImageUrl(e.config.backgroundImage),backgroundPosition:c,backgroundSize:i,backgroundRepeat:t,cursor:this.getCursor(e.action,this.$$global_editor.actionType.click.code,this.$$global_editor.actionType.openLink.code)}},setAnime(e){e.config&&e.config.anime&&e.config.anime.enabled?this.$nextTick(function(){this.$refs.pictureSingle&&(this.animed?(this.imgRefresh=!1,this.$nextTick(()=>{this.imgRefresh=!0,this.$nextTick(function(){this.imgAnime=y.Z.doAnime(this.$refs.pictureSingle,e.config.anime)})})):(this.imgAnime=y.Z.doAnime(this.$refs.pictureSingle,e.config.anime),this.animed=!0))}):this.animed&&(this.imgRefresh=!1,this.$nextTick(()=>{this.imgRefresh=!0,this.animed=!1}))},popoerStyle(e){let i=document.getElementsByClassName("img-popover");return i.length&&(i[0].style.backgroundColor=e.popover.backgroundColor,i[0].style.borderColor=e.popover.backgroundColor),{fontSize:r.getNewFontSize(e.popover.fontStyle.fontSize)+"px",fontFamily:e.popover.fontStyle.fontFamily,color:e.popover.fontStyle.color}},getImageUrl(e){return"url("+r.appendImageBaseURL(e)+")"},onClick(){let e=this,i=this.widgetInfo.action.sendOut.actionList;this.$$lib__.each(i,t=>{if(t.enabled&&t.code==e.$$global_editor.actionType.click.code){let c=e.$$global_editor.actionType.click.code+"_"+e.widgetInfo.id,u={name:e.widgetInfo.name};if(t.paramsExtend&&t.paramsExtend.length>0&&this.getParamsExtend(u,t.paramsExtend,e.widgetInfo),t.script&&t.script.enabled){if(I.log("Execute script for "+e.widgetInfo.name+" component to "+t.name+" component"),t.script.content==""){m.Message.warning({message:t.name+"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_clickParam=new Function("param",t.script.content),u=this.customScript_actionSend_clickParam(u)}f.Z.$emit(c,u),t.postMessage&&this.doPostMessage(u),this.actionNameList.push(c)}else if(t.enabled&&t.code==e.$$global_editor.actionType.openLink.code){let c={};if(t.paramsExtend&&t.paramsExtend.length>0){let u=[];e.widgetInfo.dataset[e.widgetInfo.dataset.type].source&&e.widgetInfo.dataset[e.widgetInfo.dataset.type].source.length>0&&(u=e.widgetInfo.dataset[e.widgetInfo.dataset.type].source[0]),this.getExtendParams(c,t.paramsExtend,u,e.widgetInfo.dataset[e.widgetInfo.dataset.type].dimensions)}if(t.script&&t.script.enabled){if(I.log("Execute script for "+e.widgetInfo.name+" component to "+t.name+" component"),t.script.content==""){m.Message.warning({message:t.name+"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_openLinkParam=new Function("param",t.script.content),c=this.customScript_actionSend_openLinkParam(c)}this.openLinkAction(t,c)}})}}},x=w,S=n(768141),L=(0,S.Z)(x,d,l,!1,null,"2b601cca",null),P=L.exports}}]);
