"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[67946],{56279:function(S,y,s){s.d(y,{P:function(){return u}});var I=s(386892),g=s(149500);const u={mixins:[I.D],created(){},methods:{lifecycleBeforeChartsLoad(m){if(this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.beforeChartsLoad&&this.widgetInfo.action.lifecycle.beforeChartsLoad.enabled){(!this.widgetInfo.action.lifecycle.beforeChartsLoad.script||!this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content||this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content=="")&&g.warn("\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C\u4E3A\u7A7A"),g.info("\u6267\u884C\u5E38\u89C4\u56FE\u8868["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u524D\u7684\u811A\u672C");let r=new Function("option",this.widgetInfo.action.lifecycle.beforeChartsLoad.script.content).apply(this,[m]);if(r)return r}return m},lifecycleAfterLoad(){this.widgetInfo.action&&this.widgetInfo.action.lifecycle&&this.widgetInfo.action.lifecycle.afterLoad&&this.widgetInfo.action.lifecycle.afterLoad.enabled&&((!this.widgetInfo.action.lifecycle.afterLoad.script||!this.widgetInfo.action.lifecycle.afterLoad.script.content||this.widgetInfo.action.lifecycle.afterLoad.script.content=="")&&g.warn("\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C\u4E3A\u7A7A"),g.info("\u6267\u884C\u7EC4\u4EF6["+this.widgetInfo.name+"]\u52A0\u8F7D\u4E4B\u540E\u7684\u811A\u672C"),new Function("",this.widgetInfo.action.lifecycle.afterLoad.script.content).apply(this,[]))}}}},105143:function(S,y,s){s.d(y,{b:function(){return m}});var I=s(148836),g=s(42160),u=s(149500);const m={created(){},computed:{...(0,I.Se)(["getWidgetAllArr"])},data(){return{containerViewSubWidgetList:[]}},methods:{...(0,I.nv)(["updateWidgetParentArrDataset","updateWidgetAllArrDataset"]),reLoadInfo(n){this.widgetInfo.id!=n.id&&this.$refs["comp_"+n.id]&&setTimeout(this.$refs["comp_"+n.id][0].reLoadInfo(n),500),this.loadInfo(n)},orgWidget(n){let r=[];return this.$$lib__.each(n,c=>{let l=this.$$lib__.find(this.getWidgetAllArr,f=>f.parentId==this.widgetInfo.id&&f.id==c.id);l&&(l.dataset&&l.dataset[l.dataset.type]&&(l.dataset.type==this.$$global_editor.dataSourcType.dynamic.code||l.dataset.type==this.$$global_editor.dataSourcType.local.code)&&l.dataset[l.dataset.type].autoUpdate==!0&&(g.default.set(this.dynamicWidgets,l.id,l),l.attr.hide!=!0&&l.dataset[l.dataset.type].autoUpdate==!0&&g.default.set(this.autoUpdateWidget,l.id,l)),r.push(l))}),g.default.set(this,"containerViewSubWidgetList",r),r},setTitleText(n,r){r?this.$$lib__.each(r,c=>{this.$$lib__.each(this.orgWidget(c.widgets),l=>{l.attr.widgetW||(l.attr.widgetW=l.attr.w),this.$refs["title_"+l.id]&&this.$refs["title_"+l.id][0]&&(this.$refs["title_"+l.id][0].innerHTML=this.initTextPosition(l)),l.title.position||(l.title.position="top")})}):this.$$lib__.each(this.orgWidget(n),c=>{this.$refs["title_"+c.id]&&this.$refs["title_"+c.id][0]&&(this.$refs["title_"+c.id][0].innerHTML=this.initTextPosition(c)),c.title.position||(c.title.position="top")})},initTextPosition(n){return n.title.text===void 0||!n.title.text?"":n.title.text&&(n.title.position==="left"||n.title.position==="right")?n.title.text.split("").join("<br />"):n.title.text},updataWidgetSource(n,r,c){try{switch(n.dataset.type){case this.$$global_editor.dataSourcType.dynamic.code:n.dataset.dynamic.source=r.data,r.total&&(n.dataset.dynamic.total=r.total);break;case this.$$global_editor.dataSourcType.local.code:n.dataset.local.dimensionsAlias=[],n.dataset.local.columnList=[],n.dataset.local.source=[],n.dataset.local.dimensions=[],n.dataset.local.dimensionsAlias=r.dimensionsAlias,n.dataset.local.columnList=r.columnList,n.dataset.local.source=r.source,n.dataset.local.dimensions=r.dimensions;break}}catch(f){u&&u.log&&u.log(f)}let l=this.$refs["comp_"+n.id];l&&l.length>0&&(this.updateWidgetAllArrDataset(n),this.updateWidgetParentArrDataset(n),l[0].reLoadInfo(n),this.sendoutDataloadSuccess(n),this.sendoutResponseData(n,r,c))},fit(n,r){if(!this.isView||!/^mobile/.test(this.getCanvasSetting.transformType))return n+"px";let c=this.getCanvasSetting.width/10,l=this.getCanvasSetting.height/window.innerHeight,f="";switch(this.getCanvasSetting.transformType){case"mobileAutoWidth":r?f=n+"px":f=n/c+"rem";break;case"mobileAutoBoth":f=n/c+"rem";break;default:r?f=n/l+"px":f=n/c+"rem"}return f}}}},980512:function(S,y,s){s.d(y,{Z:function(){return f}});var I=function(){var d=this,b=d._self._c;return b("div",{class:"container_child_"+d.widgetData.id,attrs:{id:"container_child_"+d.widgetData.id}},[b("keep-alive",[b(d.isView&&d.widgetData.isContainer?d.widgetData.typeName+"-view":d.widgetData.typeName,{ref:"com_"+d.widgetData.id,tag:"component",attrs:{"widget-info":d.widgetData,"widget-arr":d.getWidgetAllArr,"current-widget":d.currentWidget},on:{doGetPreviewData:d.doGetPreviewData,doReSetBoardId:d.doReSetBoardId,attrChange:d.attrChange}})],1)],1)},g=[],u=s(513229),m=s(148836),n={name:"DraggableComponent",extends:u.Z,computed:{...(0,m.Se)(["getWidgetAllArr","isView"])},methods:{reLoadInfo(h){if(h.id){let d=this.$refs["com_"+h.id];d&&d.reLoadInfo(h)}},doReSetBoardId(h){this.$emit("doReSetBoardId",h)},attrChange(h){this.$emit("attrChange",h)}}},r=n,c=s(768141),l=(0,c.Z)(r,I,g,!1,null,"41d16aa2",null),f=l.exports},367946:function(S,y,s){s.r(y),s.d(y,{default:function(){return W}});var I=function(){var t=this,e=t._self._c;return e("div",{style:{width:t.widgetInfo.attr.w+"px",height:t.widgetInfo.attr.hh+"px",overflow:"auto"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.widgetInfo.attr.buttonHide,expression:"widgetInfo.attr.buttonHide"}],style:{position:"absolute",right:t.widgetInfo.attr.buttonHideRight+"px",top:t.widgetInfo.attr.buttonHideTop+"px",width:"30px",height:"25px",cursor:"pointer",zIndex:"9999"}},[e("el-tooltip",{attrs:{"open-delay":1e3,content:t.widgetInfo.attr.buttonHideTooltipContent,disabled:t.widgetInfo.attr.buttonHideTooltipContent==""||t.widgetInfo.attr.buttonHideTooltipContent==null,effect:"dark",placement:"top"}},[e("el-button",{class:t.widgetInfo.attr.buttonHideIconClass&&t.widgetInfo.attr.buttonHideIconClass!=""?t.widgetInfo.attr.buttonHideIconClass:"iconfont bi_eyeslash",staticStyle:{"margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},style:{color:t.widgetInfo.attr.buttonHideColor,fontSize:t.widgetInfo.attr.buttonHideIconFontSize+"px"},attrs:{size:"small",type:"text"},on:{click:function(o){return t.onHide()}}})],1)],1),t.widgetInfo.config.global.type=="base"?e("el-collapse",{staticClass:"collapse-container",on:{change:t.handleChange},model:{value:t.activeName,callback:function(o){t.activeName=o},expression:"activeName"}},t._l(t.widgetInfo.config.collapseList,function(o,p){return e("el-collapse-item",{key:p,ref:"collapseItem",refInFor:!0,style:t.style[p],attrs:{title:o.label,disabled:o.disabled,name:o.id}},[e("template",{slot:"title"},[o.iconImg?t._e():e("i",{class:o.iconClass,style:{color:o.iconColor,fontSize:o.iconSize+"px",marginRight:o.iconRight+"px"}}),o.iconImg?e("img",{style:{width:o.imgWidth+"px",height:o.imgHeight+"px",marginRight:o.imgRight+"px"},attrs:{src:t.getImageSrc(o.iconImg)}}):t._e(),t._v(" "+t._s(o.label)+" ")]),t._l(t.orgWidget(o.widgets),function(i){return[e("div",{style:t.getWidgetStyle(i)},[e("div",{key:"widget_"+i.id,ref:"widget_"+i.id,refInFor:!0,class:t.getWidgetClass(i),style:t.getBindStyle(i),attrs:{id:"widget_"+i.id}},[e("external-frame-svg",{ref:"comp_frame_"+i.id,refInFor:!0,attrs:{"widget-info":i}}),i.title.position==="top"||i.title.position==="left"?e("div",{staticStyle:{overflow:"hidden",float:"left"},style:t.getWidgetTitleStyle(i),on:{click:function(v){return t.openLink(i)}}},[e("div",{style:{marginLeft:i.title.label.left+"px",marginTop:i.title.label.top+"px"}},[e("span",{ref:"title_"+i.id,refInFor:!0,style:t.getTitleSpanStyle(i)})])]):t._e(),e("draggable-component-container",{ref:"comp_"+i.id,refInFor:!0,staticStyle:{display:"inline-block",float:"left"},style:t.getInfoStyle(i),attrs:{"widget-data":i},on:{doGetPreviewData:t.getPreviewData,doReSetBoardId:t.doReSetBoardId,attrChange:t.attrChange}}),i.title.position==="bottom"||i.title.position==="right"?e("div",{staticStyle:{overflow:"hidden",float:"left"},style:t.getWidgetTitleStyle(i),on:{click:function(v){return t.openLink(i)}}},[e("div",{style:{marginLeft:i.title.label.left+"px",marginTop:i.title.label.top+"px"}},[e("span",{ref:"title_"+i.id,refInFor:!0,style:t.getTitleSpanStyle(i)})])]):t._e()],1)])]})],2)}),1):e("el-collapse",{staticClass:"collapse-container",attrs:{accordion:""},on:{change:t.handleChange},model:{value:t.activeName,callback:function(o){t.activeName=o},expression:"activeName"}},t._l(t.widgetInfo.config.collapseList,function(o,p){return e("el-collapse-item",{key:p,ref:"collapseItem",refInFor:!0,style:t.style[p],attrs:{title:o.label,disabled:o.disabled,name:o.id}},[e("template",{slot:"title"},[o.iconImg?t._e():e("i",{class:o.iconClass,style:{color:o.iconColor,fontSize:o.iconSize+"px",marginRight:o.iconRight+"px"}}),o.iconImg?e("img",{style:{width:o.imgWidth+"px",height:o.imgHeight+"px",marginRight:o.imgRight+"px"},attrs:{src:t.getImageSrc(o.iconImg)}}):t._e(),t._v(" "+t._s(o.label)+" ")]),t._l(t.orgWidget(o.widgets),function(i){return[e("div",{style:t.getWidgetStyle(i)},[e("div",{key:"widget_"+i.id,ref:"widget_"+i.id,refInFor:!0,class:t.getWidgetClass(i),style:t.getBindStyle(i),attrs:{id:"widget_"+i.id}},[e("external-frame-svg",{ref:"comp_frame_"+i.id,refInFor:!0,attrs:{"widget-info":i}}),i.title.position==="top"||i.title.position==="left"?e("div",{staticStyle:{overflow:"hidden",float:"left"},style:t.getWidgetTitleStyle(i),on:{click:function(v){return t.openLink(i)}}},[e("div",{style:{marginLeft:i.title.label.left+"px",marginTop:i.title.label.top+"px"}},[e("span",{ref:"title_"+i.id,refInFor:!0,style:t.getTitleSpanStyle(i)})])]):t._e(),e("draggable-component-container",{ref:"comp_"+i.id,refInFor:!0,staticStyle:{display:"inline-block",float:"left"},style:t.getInfoStyle(i),attrs:{"widget-data":i},on:{doGetPreviewData:t.getPreviewData,doReSetBoardId:t.doReSetBoardId,attrChange:t.attrChange}}),i.title.position==="bottom"||i.title.position==="right"?e("div",{staticStyle:{overflow:"hidden",float:"left"},style:t.getWidgetTitleStyle(i),on:{click:function(v){return t.openLink(i)}}},[e("div",{style:{marginLeft:i.title.label.left+"px",marginTop:i.title.label.top+"px"}},[e("span",{ref:"title_"+i.id,refInFor:!0,style:t.getTitleSpanStyle(i)})])]):t._e()],1)])]})],2)}),1)],1)},g=[],u=s(980512),m=s(193575),n=s(105143),r=s(321300),c=s(927966),l=s(555616),f=s(213743),h=s(445061),d=s(56279),b=s(149500),C={name:"ContainerCollapseView",components:{ExternalFrameSvg:f.Z,DraggableComponentContainer:u.Z},mixins:[m.E,n.b,h.u,d.P],props:["widgetInfo","widgetArr"],data(){return{dataList:[],activeName:"",timerArr:[],dataSetArr:{},autoUpdateWidget:{},dynamicWidgets:{},prefix:{widget:"widget_"},style:[]}},watch:{},mounted(){this.initAction(this.widgetInfo),this.loadInfo(this.widgetInfo),this.$nextTick(()=>{this.setTitleText("widgets",this.widgetInfo.config.collapseList)})},created:function(){this.clear()},destroyed:function(){this.clear()},methods:{loadInfo(a){a.typeName=="container-collapse"&&(this.initActiveName(a),this.initStyle(a),this.lifecycleAfterLoad())},getImageSrc(a){if(a&&a!="")return r.appendImageBaseURL(a)},handleChange(a){if(this.widgetInfo.config.global.type=="base"){let t=this;a.forEach(e=>{typeof e=="number"&&t.orgWidget(t.widgetInfo.config.collapseList[e].widgets).forEach(p=>{p.id&&t.$refs["comp_"+p.id][0].reLoadInfo(p)})})}else{let t=this.orgWidget(this.widgetInfo.config.collapseList[a].widgets),e=this;t.forEach(o=>{o.id&&e.$refs["comp_"+o.id][0].reLoadInfo(o)})}},initActiveName(a){if(a.config.global.type=="base"){this.activeName=[];let t=a.config.collapseList.length;for(let e=0;e<t;e++)a.config.collapseList[e].active&&this.activeName.push(a.config.collapseList[e].id)}else{let t=a.config.collapseList.length;for(let e=0;e<t;e++){this.activeName=a.config.collapseList[e].active?a.config.collapseList[e].id:"";break}}},initStyle(a){let t=this;a.config.collapseList.forEach((e,o)=>{if(t.$refs.collapseItem.length>o){let p=JSON.parse(JSON.stringify(e.titleBg));p.backgroundImage=e.titleBg.backgroundImage?this.getImageUrl(e.titleBg.backgroundImage):"url()";let i=JSON.parse(JSON.stringify(e.contentBg));i.backgroundImage=e.contentBg.backgroundImage?this.getImageUrl(e.contentBg.backgroundImage):"url()",t.$refs.collapseItem[o].$el.firstChild.firstChild.style.display=e.titleShow?"flex":"none",t.$refs.collapseItem[o].$el.lastChild.firstChild.style.height=e.height+"px",t.$refs.collapseItem[o].$el.firstChild.firstChild.lastChild.style.display=e.openIconShow?"inline-block":"none",t.copyJson(t.$refs.collapseItem[o].$el.firstChild.style,p),t.copyJson(t.$refs.collapseItem[o].$el.lastChild.style,i),t.$refs.collapseItem[o].$el.firstChild.firstChild.style.paddingLeft=e.titleLeft+"px"}t.style[o]=JSON.parse(JSON.stringify(e.style)),t.style[o].fontSize=e.style.fontSize?e.style.fontSize+"px":null})},copyJson(a,t){for(let e in t)a[e]=t[e]},getImageUrl(a){if(a&&a!="")return"url("+r.appendImageBaseURL(a)+")"},initAction(a){this.actionReceive(a),this.actionReceiveSelf(a)},actionReceiveSelf(a){a.action==null||a.action.receive==null||(a.action.receive.setOpenItem&&a.action.receive.setOpenItem.enabled&&this.setOpenItem(a.action.receive.setOpenItem,a.name),a.action==null||a.action.receive==null)},setOpenItem(a,t){this.$$lib__.each(a.openList,e=>{let o=e.openList,p=e.itemValue;this.$$lib__.each(o,i=>{let v=i[1]+"_"+i[0];i[1].indexOf("_")>-1&&(v=i[1]),c.Z.$on(v,A=>{let _=i[2],L=_.indexOf("|");if(L>-1&&(_=i[2].substring(L+1)),a.script&&a.script.enabled){if(b.log("Execute script for "+t+" component to "+a.name+" component"),a.script.content==""){l.Message.warning({message:"\u81EA\u5B9A\u4E49\u811A\u672C\u5DF2\u542F\u7528\uFF0C\u4F46\u672A\u7F16\u5199\u4EFB\u4F55\u811A\u672C",offset:60});return}this.doSetItem=new Function("data","param_key","value","itemId",a.script.content)}this.doSetItem(A,_,p,e.itemId)})})})},doSetItem(a,t,e,o){e==null||e==""||e==null?this.doSetOpenItem(o):e==a[t]&&this.doSetOpenItem(o)},doSetOpenItem(a){let t=this;this.widgetInfo.config.global.type=="base"?t.$$lib__.contains(t.activeName,a)?t.activeName=t.$$lib__.without(t.activeName,a):t.activeName.push(a):t.activeName=a==t.activeName?"":a},doReSetBoardId(a){this.$emit("doReSetBoardId",a)}}},$=C,x=s(768141),T=(0,x.Z)($,I,g,!1,null,"7d35eb4a",null),W=T.exports}}]);
