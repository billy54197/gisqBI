"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[38018],{56279:function(y,h,n){n.d(h,{P:function(){return c}});var d=n(386892),r=n(149500);const c={mixins:[d.D],created(){},methods:{lifecycleBeforeChartsLoad(f){if(this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.beforeChartsLoad&&this.widgetInfo.action.lifecycle.beforeChartsLoad.enabled){(!this.widgetInfo.action.lifecycle.beforeChartsLoad.script||!this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content||this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content=="")&&r.warn("\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C\u4E3A\u7A7A"),r.info("\u6267\u884C\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C");let g=new Function("option",this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content).apply(this,[f]);if(g)return g}return f},lifecycleAfterLoad(){this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.afterLoad&&this.widgetInfo.action.lifecycle.afterLoad.enabled&&((!this.widgetInfo.action.lifecycle.afterLoad.script||!this.widgetInfo.action.lifecycle.afterLoad.script.content||this.widgetInfo.action.lifecycle.afterLoad.script.content=="")&&r.warn("\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C\u4E3A\u7A7A"),r.info("\u6267\u884C\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C"),new Function("",this.widgetInfo.action.lifecycle.afterLoad.script.content).apply(this,[]))}}}},752246:function(y,h,n){n.d(h,{X:function(){return d},b:function(){return r}});let d={versions:function(){var c=navigator.userAgent;return{trident:c.indexOf("Trident")>-1,presto:c.indexOf("Presto")>-1,webKit:c.indexOf("AppleWebKit")>-1,gecko:c.indexOf("Gecko")>-1&&c.indexOf("KHTML")==-1,mobile:!!c.match(/AppleWebKit.*Mobile.*/),ios:!!c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:c.indexOf("Android")>-1,iPhone:c.indexOf("iPhone")>-1,iPad:c.indexOf("iPad")>-1,webApp:c.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},r;d.versions.mobile||d.versions.ios||d.versions.android||d.versions.iPhone||d.versions.iPad?r=!1:r=!0},844513:function(y,h,n){n.d(h,{Z:function(){return x}});var d=function(){var s=this,u=s._self._c;return s.attr.buttonHide?u("div",{style:{position:"absolute",right:s.attr.buttonHideRight+"px",top:s.attr.buttonHideTop+"px",width:"30px",height:"25px",cursor:"pointer",zIndex:"9999"},on:{click:function(w){return s.onHide()}}},[s.openTooltip?u("el-tooltip",{attrs:{"open-delay":1e3,content:s.attr.buttonHideTooltipContent,effect:"dark",placement:"top"}},[u("el-button",{class:s.attr.buttonHideIconClass&&s.attr.buttonHideIconClass!=""?s.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:s.attr.buttonHideColor,fontSize:s.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):u("el-button",{class:s.attr.buttonHideIconClass&&s.attr.buttonHideIconClass!=""?s.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:s.attr.buttonHideColor,fontSize:s.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"}})],1):s._e()},r=[],c=n(752246),f={props:["attr"],name:"hide-button",data(){return{isPc:c.b}},computed:{openTooltip:function(){let b=!1,s=this.attr.buttonHideTooltipContent;return c.b&&s&&s!=null&&s.trim()!=""&&(b=!0),b}},methods:{onHide(){this.attr.hide=!0,this.$emit("sendButtonHide")}}},p=f,g=n(768141),m=(0,g.Z)(p,d,r,!1,null,"bf399b9a",null),x=m.exports},38018:function(y,h,n){n.r(h),n.d(h,{default:function(){return H}});var d=function(){var t=this,l=t._self._c;return l("div",{style:{width:t.widgetInfo.attr.w+"px",height:t.widgetInfo.attr.hh+"px",overflow:"auto"}},[l("hide-button",{attrs:{attr:t.widgetInfo.attr}}),l("div",{staticClass:"my-checkbox-group",style:t.setStyleInfo(t.widgetInfo.config.global)},[l("el-checkbox-group",{ref:"checkboxGroup",attrs:{size:"mini",min:t.widgetInfo.config.min,max:t.widgetInfo.config.checkAll?void 0:t.widgetInfo.config.max,"text-color":t.widgetInfo.config.checkedStyle.textColor,fill:t.widgetInfo.config.checkedStyle.fill},on:{change:t.changecheckboxGroup},model:{value:t.checkedValues,callback:function(o){t.checkedValues=o},expression:"checkedValues"}},[t.widgetInfo.config.button?l("div",[l("el-checkbox-button",{directives:[{name:"show",rawName:"v-show",value:t.widgetInfo.config.checkAll,expression:"widgetInfo.config.checkAll"}],class:t.checkAll?"is-checked":"",attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(o){t.checkAll=o},expression:"checkAll"}},[t._v("\u5168\u9009 ")]),t._l(t.checkboxInfo,function(o,i){return l("el-tooltip",{key:i,attrs:{disabled:t.setDisabled(o.label),content:o.label,placement:"top",effect:t.widgetInfo.config.global.effect}},[l("el-checkbox-button",{attrs:{label:o.value,disabled:o.disabled}},[t._v(" "+t._s(o.label)+" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.checkedValues.indexOf(o.value)>-1,expression:"checkedValues.indexOf(checkbox.value) > -1"}],staticClass:"tangle-check",style:{borderTop:`solid ${t.widgetInfo.config.checkedStyle.checkMark.height/2}px transparent`,borderLeft:`solid ${t.widgetInfo.config.checkedStyle.checkMark.width/2}px transparent`,borderBottom:`solid ${t.widgetInfo.config.checkedStyle.checkMark.height/2}px ${t.widgetInfo.config.checkedStyle.checkMark.background}`,borderRight:`solid ${t.widgetInfo.config.checkedStyle.checkMark.width/2}px ${t.widgetInfo.config.checkedStyle.checkMark.background}`}}),l("i",{directives:[{name:"show",rawName:"v-show",value:t.checkedValues.indexOf(o.value)>-1,expression:"checkedValues.indexOf(checkbox.value) > -1"}],staticClass:"el-icon-check check-mark",style:{fontSize:t.widgetInfo.config.checkedStyle.checkMark.fontSize+"px",color:t.widgetInfo.config.checkedStyle.checkMark.color}})])],1)})],2):l("div",[l("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:t.widgetInfo.config.checkAll,expression:"widgetInfo.config.checkAll"}],class:t.checkAll?"is-checked":"",style:t.setBoxStyle(t.widgetInfo.config),attrs:{border:t.widgetInfo.config.border,indeterminate:t.isIndeterminate,id:"check_All"},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(o){t.checkAll=o},expression:"checkAll"}},[t._v("\u5168\u9009 ")]),t._l(t.checkboxInfo,function(o,i){return l("el-tooltip",{key:i,attrs:{disabled:t.setDisabled(o.label),content:o.label,placement:"top",effect:t.widgetInfo.config.global.effect}},[l("el-checkbox",{style:t.setBoxStyle(t.widgetInfo.config),attrs:{border:t.widgetInfo.config.border,label:o.value,disabled:o.disabled}},[t._v(" "+t._s(o.label)+" ")])],1)})],2)])],1)],1)},r=[],c=n(321300),f=n(927966),p=n(844513),g=n(445061),m=n(126711),x=n(56279),b=n(738430),s=n(555616),u=n(67157);const w={mixins:[u.c],data(){return{config_extend:{config:{border:!0,style:{checkboxColor:"#DCDFE5"},checkedStyle:{checkboxColor:"#4C84FF"},checkAll:!1,button:!1},dataset:{static:{defaultValue:"sh"}}},filter_config:{style:{fill:"#ffffff",textColor:"#616999",borderColor:"#DCDFE5",checkboxColor:"#DCDFE5",fontStyle:{fontFamily:"alibabaPuHuiTiRegular"}},checkedStyle:{fill:"#ffffff",textColor:"#4C84FF",borderColor:"#4C84FF",checkboxColor:"#4C84FF",fontStyle:{fontFamily:"alibabaPuHuiTiRegular"},checkMark:{background:"#76b0ec",color:"#ffffff"}}}}},methods:{filterPredefineColoursSchemeConfig(e,t){this.getNewConfigWithArrary(e,t,this.filter_config)}}};var I=n(149500),v={props:["widgetInfo"],name:"checkbox-group",components:{HideButton:p.Z},mixins:[b.baseConfig,g.u,m.H,x.P,w],data(){return{checkAll:!1,isIndeterminate:!1,lib_:this.$$lib__,checkedValues:[],checkboxInfo:[],options:[]}},mounted(){this.initAction(this.widgetInfo),this.loadInfo(this.widgetInfo)},updated(){if(this.checkAll){let e=document.querySelector("#check_All");e&&e.className.indexOf("is-checked")>-1&&e.childNodes[0].classList.add("is-checked")}},watch:{"widgetInfo.attr.hide":function(){this.$emit("attrChange",this.widgetInfo)}},methods:{loadInfo(e){this.getListInfo(e.dataset[e.dataset.type]),setTimeout(()=>{this.setStyle(this.widgetInfo.config)},1),this.lifecycleAfterLoad()},reLoadInfo(e){this.loadInfo(e)},getListInfo(e){this.checkboxInfo=[],e.defaultValue?this.checkedValues=e.defaultValue.split(","):this.checkedValues=[],this.options.length=0,this.lib_.each(e.source,t=>{let l=this.getFieldVal(t,e.dimensions,e.encode.value),o=this.getFieldVal(t,e.dimensions,e.encode.label),i=this.getFieldVal(t,e.dimensions,e.encode.disabled);this.options.push(l),this.checkboxInfo.push({value:l,label:o,disabled:c.stringToBoolean(i)})}),this.checkedValues.length>0&&this.checkedValues.length<this.options.length?(this.isIndeterminate=!0,this.checkAll=!1):this.checkedValues.length>=this.options.length?(this.isIndeterminate=!1,this.checkAll=!0):(this.isIndeterminate=!1,this.checkAll=!1)},handleCheckAllChange(e){let t=this.checkboxInfo.length,l=[];for(let o=0;o<t;o++)this.checkboxInfo[o].disabled||l.push(this.options[o]);this.checkedValues=e?l:[],this.isIndeterminate=!1,setTimeout(()=>{this.setStyle(this.widgetInfo.config)},1)},changecheckboxGroup(e){let t=e.length;this.checkAll=t===this.options.length,this.isIndeterminate=t>0&&t<this.options.length,this.onClick(),setTimeout(()=>{this.setStyle(this.widgetInfo.config)},1)},initAction(e){this.actionReceive(e)},setStyle(e){if(!e&&!e.style&&!e.checkedStyle)return;let t=this.$refs.checkboxGroup;if(t.$el.childNodes&&t.$el.childNodes.length>0&&t.$el.childNodes[0].childNodes){let l=t.$el.childNodes[0].childNodes;this.$$lib__.each(l,o=>{if(o.className.indexOf("el-checkbox-button")>-1){let i=o.getElementsByClassName("el-checkbox-button__inner");i[0].style.textAlign=e.global.textAlign,e.setWH?(e.sizeWidth&&(i[0].style.width=this.mUtils.getNewPxW(e.sizeWidth)+"px"),e.sizeHeight&&(i[0].style.height=this.mUtils.getNewPxH(e.sizeHeight)+"px",i[0].style.lineHeight=this.mUtils.getNewPxH(e.sizeHeight)+"px",i[0].style.padding="0  "+this.mUtils.getNewPxW(5)+"px")):(i[0].style.width="auto",i[0].style.height="auto",i[0].style.lineHeight="normal",i[0].style.padding=this.mUtils.getNewPxH(7)+"px "+this.mUtils.getNewPxW(15)+"px");let a=l[1].getElementsByClassName("el-checkbox-button__inner");if(e.checkAll?(a[0].style.borderLeftStyle="none",a[0].style.borderRadius="0"):(a[0].style.borderWidth="1px",a[0].style.borderStyle="solid",a[0].style.borderRadius="4px 0 0 4px"),e.global.margin.left)i[0].style.marginLeft=this.mUtils.getNewPxW(e.global.margin.left)+"px",i[0].style.borderWidth="1px",i[0].style.borderStyle="solid",i[0].style.borderRadius="4px",a[0].style.borderWidth="1px",a[0].style.borderStyle="solid",a[0].style.borderRadius="4px";else{let k=l[0].getElementsByClassName("el-checkbox-button__inner"),_=l[l.length-1].getElementsByClassName("el-checkbox-button__inner");i[0].style.marginLeft="0",i[0].style.borderRadius="0",i[0].style.borderLeftStyle="none",k[0].style.borderLeftStyle="solid",k[0].style.borderRadius="4px 0 0 4px",_[0].style.borderRadius=" 0 4px 4px 0"}i[0].style.marginTop=this.mUtils.getNewPxH(e.global.margin.top)+"px",o.className.indexOf("is-checked")>-1?(this.setLabelStyle(i[0],e.checkedStyle),i[0].style.backgroundImage=this.getImageUrl(e.checkedStyle.backgroundImage),i[0].style.backgroundSize=e.checkedStyle.backgroundSize):(this.setLabelStyle(i[0],e.style),i[0].style.backgroundImage=this.getImageUrl(e.style.backgroundImage),i[0].style.backgroundSize=e.style.backgroundSize)}else{let i=o.getElementsByClassName("el-checkbox__inner"),a=o.getElementsByClassName("el-checkbox__label");e.setWH&&e.sizeWidth?(i[0].style.marginBottom=this.mUtils.getNewPxH((e.sizeHeight-5)/2)+"px",a[0].style.maxWidth=this.mUtils.getNewPxW(e.sizeWidth-30)+"px",a[0].style.overflow="hidden",o.style.padding="0 "+this.mUtils.getNewPxW(5)+"px"):(i[0].style.marginBottom=0,a[0].style.maxWidth="none",o.style.padding=this.mUtils.getNewPxH(5)+"px "+this.mUtils.getNewPxW(10)+"px",a[0].style.overflow="visible"),o.className.indexOf("is-checked")>-1?(this.setLabelStyle(o,e.checkedStyle),a[0].style.color=e.checkedStyle.textColor,i[0].style.borderColor=e.checkedStyle.checkboxColor,i[0].style.backgroundColor=e.checkedStyle.textColor):(this.setLabelStyle(o,e.style),a[0].style.color=e.style.textColor,i[0].style.borderColor=e.style.checkboxColor,i[0].style.backgroundColor=e.style.fill,o.getElementsByClassName("el-checkbox__input")[0].className.indexOf("is-indeterminate")>-1&&(i[0].style.backgroundColor=e.checkedStyle.textColor))}})}},setStyleInfo(e){return{paddingTop:this.mUtils.getNewPxH(e.padding.top)+"px",paddingLeft:this.mUtils.getNewPxW(e.padding.left)+"px"}},setBoxStyle(e){let t={textAlign:e.global.textAlign,marginTop:this.mUtils.getNewPxH(e.global.margin.top)+"px",marginLeft:this.mUtils.getNewPxW(e.global.margin.left)+"px"};return e.setWH&&(e.sizeWidth&&(t.width=this.mUtils.getNewPxW(e.sizeWidth)+"px"),e.sizeHeight&&(t.height=this.mUtils.getNewPxH(e.sizeHeight)+"px",t.lineHeight=this.mUtils.getNewPxH(e.sizeHeight)+"px")),t},setDisabled(e){return!(this.widgetInfo.config.setWH&&e.length*this.widgetInfo.config.style.fontStyle.fontSize>this.widgetInfo.config.sizeWidth-30)},setLabelStyle(e,t){if(e.style.borderColor=t.borderColor,e.style.color=t.textColor,e.style.backgroundColor=t.fill,e.style.fontFamily=t.fontStyle.fontFamily,e.style.fontWeight=t.fontStyle.fontWeight,e.style.fontStyle=t.fontStyle.fontStyle,e.style.textDecoration=t.fontStyle.textDecoration,e.style.fontSize=this.mUtils.getNewFontSize(t.fontStyle.fontSize)+"px",e.childNodes[1]&&e.childNodes[1].className=="el-checkbox__label"){let l=e.childNodes[1];l.style.textDecoration=t.fontStyle.textDecoration,l.style.paddingLeft=this.mUtils.getNewPxW(10)+"px"}},onClick(){let e=this,t=this.widgetInfo.action.sendOut.actionList;this.$$lib__.each(t,l=>{if(l.enabled&&l.code==e.$$global_editor.actionType.click.code){let o=l.code+"_"+e.widgetInfo.id,i={value:this.checkedValues,options:this.options};if(l.paramsExtend&&l.paramsExtend.length>0&&this.getExtendParams(i,l.paramsExtend,this.getSelectSource(this.checkedValues[0]),e.widgetInfo.dataset[e.widgetInfo.dataset.type].dimensions),i=JSON.parse(JSON.stringify(i)),l.script&&l.script.enabled){if(I.log("Execute script for "+e.widgetInfo.name+" component to "+l.name+" component"),l.script.content==""){s.Message.warning({message:l.name+"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.customScript_actionSend_clickParam=new Function("param",l.script.content),i=this.customScript_actionSend_clickParam(i)}f.Z.$emit(o,i),this.actionNameList.push(o),l.postMessage&&this.doPostMessage(i)}})},getSelectSource(e){let t=-1,l=this.widgetInfo.dataset[this.widgetInfo.dataset.type].dimensions;for(let i=0;i<l.length;i++)l[i]==this.widgetInfo.dataset[this.widgetInfo.dataset.type].encode.value&&(t=i);let o=this.$$lib__.find(this.widgetInfo.dataset[this.widgetInfo.dataset.type].source,i=>i[t]==e);return o||[]},getImageUrl(e){if(e&&e!="")return"url("+c.appendImageBaseURL(e)+")"},getValue(){return this.checkedValues}}},S=v,C=n(768141),N=(0,C.Z)(S,d,r,!1,null,"257c63b1",null),H=N.exports}}]);
