"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[48126],{476618:function(ye,b,c){c.r(b),c.d(b,{default:function(){return me}});var x=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.widgetInfo.attr.hide!=!0,expression:"widgetInfo.attr.hide != true"}],ref:"gisBase",staticClass:"my-gisBase",style:{width:e.widgetInfo.attr.w+"px",height:e.widgetInfo.attr.hh+"px"}},[t("hide-button",{attrs:{attr:e.widgetInfo.attr}}),e.mapIsLoad?t("ShineMap",{ref:"myShineMap",staticClass:"my-shineMap",attrs:{"map-option":e.mapOption}}):e._e()],1)},I=[],D=c(844513),_=c(927966),S=function(){var e=this,t=e._self._c;return t("div",{class:e.layOutClass,attrs:{id:"map"}},[t("div",{staticClass:"map",attrs:{id:"mainMap"},on:{contextmenu:e.preventContentMenu}},[t("el-button",{attrs:{id:"layerControlBtn",icon:"el-icon-document ",type:"primary",circle:"",size:"mini"},on:{click:e.showLayerControllerCard}}),e.isLoad?t("LayerController",{attrs:{shinemap:e.shinemap}}):e._e(),e.isLoad?t("LayerMenu",{directives:[{name:"show",rawName:"v-show",value:e.layerMenuIsShow,expression:"layerMenuIsShow"}],attrs:{shinemap:e.shinemap}}):e._e(),e.isLoad?t("DynamicNav",{directives:[{name:"show",rawName:"v-show",value:e.dynamicNavIsShow,expression:"dynamicNavIsShow"}],attrs:{shinemap:e.shinemap}}):e._e()],1),e._l(e.shinemap.linkMap,function(r,s){return t("LinkMap",{key:r.get("mapTarget"),attrs:{shinemap:e.shinemap,map:r,mapId:r.get("mapTarget"),mapClass:e.getLinkMapClassName(s)}})})],2)},F=[],k=c(653183),a=c.n(k),p=c(130798),j=c(104840),T=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"LayerController"}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("el-button",{staticStyle:{float:"left"},attrs:{icon:"el-icon-close",circle:""},on:{click:e.closeWindow}}),t("span",[e._v("\u56FE\u5C42\u7BA1\u7406")]),t("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-arrow-left",circle:""},on:{click:e.showOther}})],1),t("div",{staticStyle:{},attrs:{id:"LayerControllerBody"}},[t("el-tree",{ref:"tree",attrs:{data:e.treeData,"node-key":"id","default-expanded-keys":[1],props:e.defaultProps,draggable:"","allow-drop":e.allowDrop},on:{"node-drag-end":e.handleDragEnd},scopedSlots:e._u([{key:"default",fn:function({node:r,data:s}){return t("span",{staticClass:"custom-tree-node",staticStyle:{"-webkit-box-flex":"1"}},[t("span",{attrs:{title:r.label}},[s.group&&s.group==="2"&&s.layerTable||s.group&&s.group==="2"&&s.type==="dynamic"?t("i",{staticClass:"el-icon-aliicon-editLayer"}):s.group&&s.group==="1"?t("i",{staticClass:"el-icon-aliicon-baseLayer"}):s.group&&s.group==="2"&&!s.layerTable?t("i",{staticClass:"el-icon-aliicon-projectLayer"}):e._e(),e._v(" "+e._s(r.label.length>10?r.label.substring(0,10)+"...":r.label)+" ")]),t("span",{staticClass:"layerControllerIconGroup"},[s.group&&s.group==="2"&&s.layerTable||s.group&&s.group==="2"&&s.type==="dynamic"?t("i",{staticClass:"el-icon-aliicon-notDdit",on:{click:function(l){return e.iconClick(l,s)}}}):e._e(),s.type==="geoserver-wfs"||s.type==="arcgis-wfs"?t("i",{staticClass:"el-icon-setting",on:{click:function(l){return e.showStyleMenu(s)}}}):e._e(),t("i",{staticClass:"el-icon-location-outline",on:{click:function(l){return e.layerLocation(s)}}}),t("i",{staticClass:"el-icon-delete",on:{click:function(l){return e.removeLayer(s)}}})]),t("p",{staticClass:"opacitySlider"},[t("el-slider",{attrs:{min:0,step:.1,max:1},on:{change:function(l){return e.change(s)}},model:{value:s.opacity,callback:function(l){e.$set(s,"opacity",l)},expression:"data.opacity"}})],1)])}}])})],1)])],1)},E=[],W={props:["shinemap"],data(){return{defaultProps:{children:"children",label:"label"},editCheckId:""}},mounted(){a()("#LayerControllerBody").resize(()=>{document.getElementById("LayerControllerBody").offsetHeight>=200?(a()("#LayerControllerBody").css("overflow","auto"),a()("#LayerControllerBody").css("max-height","200px")):(a()("#LayerControllerBody").css("overflow","hidden"),a()("#LayerControllerBody").css("max-height",""))})},methods:{treeNodeCheckChange(i,e){e===!0?(this.editCheckId=i.id,this.$refs.tree.setCheckedKeys([i.id]),this.addLayer(i)):this.editCheckId===i.id&&this.$refs.tree.setCheckedKeys([i.id])},change(i){this.shinemap.layerManager.changeLayerOpacity(i)},allowDrop(i,e,t){return t!=="inner"},handleDragEnd(i,e,t){e&&t!=="none"&&this.shinemap.layerManager.changeLayerIndex(i.data,e.data,t)},iconClick(i,e){let t=this.shinemap.interactionManager.getInteractionByName("mapSelect"),r=this.shinemap.interactionManager.getInteractionByName("featureEditing");i.currentTarget.className==="el-icon-aliicon-notDdit"?(a()("#LayerController .el-icon-aliicon-editing")&&a()("#LayerController .el-icon-aliicon-editing").each(function(){a()(this).removeClass("el-icon-aliicon-editing"),a()(this).addClass("el-icon-aliicon-notDdit")}),a()(i.currentTarget).removeClass("el-icon-aliicon-notDdit"),a()(i.currentTarget).addClass("el-icon-aliicon-editing"),this.shinemap.map.setCurrentEditLayer(e),t.active&&(t.setActive(!1),t.setActive(!0)),r.active&&(r.setActive(!1),r.setActive(!0))):(a()(i.currentTarget).removeClass("el-icon-aliicon-editing"),a()(i.currentTarget).addClass("el-icon-aliicon-notDdit"),this.shinemap.map.clearCurrentEditLayer(),t.active&&(t.setActive(!1),t.setActive(!0)),r.active&&r.setActive(!1))},showStyleMenu(i){a()("#StyleMenu").css("display")==="none"&&(p.Z.$emit("setLayerStyle",i),a()("#StyleMenu").css("display","block"))},layerLocation(i){this.shinemap.layerManager.fitToLayer(this.shinemap.map.getLayerByLayerTag(i.layerTag))},removeLayer(i){this.shinemap.removeTargetLayer(i)},closeWindow(){a()("#LayerController").hide(),p.Z.$emit("showBtn","LayerController")},showOther(){a()("#LayerController").hide(),a()("#LayerMenu").show()}},computed:{treeData(){let i=this.shinemap.map?this.shinemap.map.getCheckedLayers():[];return JSON.parse(JSON.stringify(i))}}},B=W,g=c(768141),O=(0,g.Z)(B,T,E,!1,null,"5e9b6038",null),N=O.exports,G=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"DynamicNav"}},[t("el-menu",{ref:"navMenu",attrs:{mode:"horizontal","default-active":e.activeIndex,"active-text-color":"#409EFF"},on:{select:e.handleSelect}},[t("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{index:"0"}}),e._l(e.menuList,function(r){return[r.widgets?t("el-submenu",{key:r.id,attrs:{index:r.name}},[t("template",{slot:"title"},[t("i",{class:e.getClassName(r.id)}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(r.label))])]),e._l(r.widgets,function(s){return[t("el-tooltip",{key:s.id,staticClass:"item",attrs:{effect:"dark",placement:"left"}},[t("div",{staticStyle:{"max-width":"250px","text-align":"left","font-style":"italic"},attrs:{slot:"content"},slot:"content"},[t("div",{staticStyle:{"font-style":"normal"}},[e._v(e._s(e.getTipContent(s.id,"description")))]),e.getTipContent(s.id,"istructions")!=""?t("br"):e._e(),e._v(" "+e._s(e.getTipContent(s.id,"istructions"))+" ")]),t("el-menu-item",{key:s.id,attrs:{index:s.name}},[t("i",{class:e.getClassName(s.id)}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(s.label))])])],1)]})],2):t("el-tooltip",{key:r.id,staticClass:"item",attrs:{effect:"dark",placement:"bottom"}},[t("div",{staticStyle:{"max-width":"250px","text-align":"left","font-style":"italic"},attrs:{slot:"content"},slot:"content"},[t("div",{staticStyle:{"font-style":"normal"}},[e._v(e._s(e.getTipContent(r.id,"description")))]),e.getTipContent(r.id,"istructions")!=""?t("br"):e._e(),e._v(" "+e._s(e.getTipContent(r.id,"istructions"))+" ")]),t("el-menu-item",{key:r.id,attrs:{index:r.name}},[t("i",{class:e.getClassName(r.id)}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(r.label))])])],1)]})],2)],1)},A=[],Z=c(581078),d=c(555616),$=c(869787),v=c.n($),P=c(17977),y=c.n(P),w=c(149500);class U{constructor(e){this.name="graphicSave",this.map=e,this.mapOptions=e.get("params"),this.baseUrl="http://192.168.11.77:8084/zjzs/ga/"}init(){if(this.currentTargetLayer=this.map.getCurrentEditLayer(),this.selectFeatures=this.map.getSelectFeatures(),this.currentTargetLayer==null){(0,d.Message)({message:"\u76EE\u6807\u56FE\u5C42\u672A\u9009\u4E2D",type:"warning",showClose:!0});return}if(this.selectFeatures.length==0){(0,d.Message)({message:"\u8BF7\u9009\u4E2D\u8981\u4FDD\u5B58\u7684\u5730\u5757",type:"warning",showClose:!0});return}if(this.currentTargetLayer.layerTable.trim()==""){(0,d.Message)({message:"\u56FE\u5C42\u672A\u914D\u7F6E\u6570\u636E\u6E90\uFF0C\u8BF7\u68C0\u67E5",type:"warning",showClose:!0});return}this.postCondition()}postCondition(){let e=this,t=this.selectFeatures.getArray();if(this.mapOptions.xm&&this.mapOptions.xm.trim().length>0&&this.mapOptions.xm.toUpperCase()!=this.currentTargetLayer.id){(0,d.Message)({message:"\u64CD\u4F5C\u975E\u6CD5\uFF0C\u9650\u5B9A\u56FE\u5C42\u6807\u8BC6\u3010"+e.mapOptions.xm+"\u3011",type:"warning",showClose:!0});return}if(this.mapOptions.editProjectGuid&&this.mapOptions.editProjectGuid.trim().length>0&&a()(t).filter((l,o)=>{for(var n in o.values_)if(n.toUpperCase()=="XM_GUID")return o.values_[n]&&o.values_[n].trim().length>0&&o.values_[n]!=e.mapOptions.editProjectGuid}).length>0){(0,d.Message)({message:"\u64CD\u4F5C\u975E\u6CD5\uFF0C\u9009\u62E9\u7684\u5730\u5757\u4E2D\u5305\u542B\u975E\u672C\u9879\u76EE\u7684\u5730\u5757\uFF01",type:"warning",showClose:!0});return}if(this.mapOptions.editBlockGuid&&this.mapOptions.editBlockGuid.trim().length>0){if(t.length>1){(0,d.Message)({message:"\u64CD\u4F5C\u975E\u6CD5\uFF0C\u53EA\u80FD\u4FDD\u5B58\u6307\u5B9A\u7684\u5730\u5757\uFF01",type:"warning",showClose:!0});return}else for(var r in t[0].values_)if(t[0].values_[r].toUpperCase()=="DK_GUID"&&t[0].values_[r].trim()!=""&&t[0].values_[r]!=e.mapOptions.dkGuid){(0,d.Message)({message:"\u64CD\u4F5C\u975E\u6CD5\uFF0C\u53EA\u80FD\u4FDD\u5B58\u6307\u5B9A\u7684\u5730\u5757\uFF01",type:"warning",showClose:!0});return}}y().post(this.baseUrl+"primaryKey",v().stringify({tableName:this.currentTargetLayer.layerTable})).then(s=>{s.data&&s.data.message=="success"&&(this.primaryKey=s.data.data,this.processData())}).catch(s=>{w.log(s)})}processData(){let e=this.currentTargetLayer.id,t=[],r=new Z.Z,s=this.selectFeatures.getArray();a().each(s,(o,n)=>{let u={},C=n.getGeometry(),fe=r.writeGeometry(C),h=[],M="";if(n.id_&&n.id_.trim()!=""){let m=n.id_.substring(n.id_.lastIndexOf(".")+1,n.id_.length);M=this.primaryKey+"='"+m+"'"}this.mapOptions.editProjectGuid&&this.mapOptions.editProjectGuid.trim()!=""&&h.push({name:"XM_GUID",value:this.mapOptions.editProjectGuid}),this.mapOptions.editBlockGuid&&this.mapOptions.editBlockGuid.trim()!=""&&h.push({name:"DK_GUID",value:this.mapOptions.editBlockGuid});for(let m in n.values_)typeof n.values_[m]!="object"&&a()(h).filter((Le,ve)=>ve.name===m.toUpperCase()).length==0&&h.push({name:m.toUpperCase(),value:n.values_[m]});a()(h).filter((m,f)=>f.name==="DK_GUID").length==0&&h.push({name:"DK_GUID",value:this.newGuid()}),a()(h).filter((m,f)=>f.name==="XM_GUID").length==0&&h.push({name:"XM_GUID",value:this.newGuid()}),a()(h).filter((m,f)=>f.name==="DK_MC").length==0&&h.push({name:"DK_MC",value:"\u65B0\u5730\u5757"});let ge=this.map.getView().getProjection().code_.split(":")[1];u.featureClass=this.currentTargetLayer.layerTable,u.topological=!0,u.checkLevel=this.currentTargetLayer.topologyCheck,u.geometry=fe,u.attribute=h,u.spatialReference=ge,u.filter=M,t.push(u)});let l=d.Loading.service({lock:!0,text:"\u4FDD\u5B58\u4E2D...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.1)"});y().post(this.baseUrl+"edit/save",v().stringify({features:JSON.stringify(t)})).then(o=>{if(l.close(),o.data.result!=null&&o.data.result.IsSucess){this.map.getLayerById("drawLayer").getSource().clear();let u=this.map.getLayerById(e);u.getSource().clear(),this.map.removeLayer(u),this.map.addLayer(u),(0,d.Message)({message:"\u5730\u5757\u4FDD\u5B58\u6210\u529F",type:"success",showClose:!0}),a()("#FeatureEditingCard")[0]&&a()("#FeatureEditingCard").hide(),this.selectFeatures.clear()}else{let n="";a().each(o.data.result.EditErrors,(u,C)=>{n+=C.ErrorMsg+"<br/>"}),p.Z.$alert(n,"\u4FDD\u5B58\u5931\u8D25",{dangerouslyUseHTMLString:!0})}}).catch(o=>{w.log(o)})}setActive(e){e&&this.init()}newGuid(){for(var e="",t=1;t<=32;t++){var r=Math.floor(Math.random()*16).toString(16);e+=r,(t==8||t==12||t==16||t==20)&&(e+="-")}return e}}var z=U;class K{constructor(e){this.name="graphicDelete",this.map=e,this.mapOptions=e.get("params"),this.baseUrl="http://192.168.11.77:8084/zjzs/ga/"}init(){if(this.selectFeatures=this.map.getSelectFeatures(),this.currentTargetLayer=this.map.getCurrentEditLayer(),this.currentTargetLayer==null){(0,d.Message)({showClose:!0,message:"\u76EE\u6807\u56FE\u5C42\u672A\u9009\u4E2D\uFF01",type:"warning"});return}if(this.selectFeatures.length==0){(0,d.Message)({showClose:!0,message:"\u8BF7\u9009\u4E2D\u8981\u5220\u9664\u7684\u5730\u5757\uFF01",type:"warning"});return}this.postCondition()}postCondition(){let e=this,t=this.selectFeatures.array_;if(e.tempFeatures=[],e.layerFeatures=[],a().each(t,(s,l)=>{l.id_?e.layerFeatures.push(l):e.tempFeatures.push(l)}),this.mapOptions.editProjectGuid&&this.mapOptions.editProjectGuid.trim()!=""&&a()(e.layerFeatures).filter((l,o)=>{for(var n in o.values_)if(n.toUpperCase()=="XM_GUID")return o.values_[n]&&o.values_[n].trim()!=""&&o.values_[n]!=e.mapOptions.xmGuid}).length>0){(0,d.Message)({message:"\u64CD\u4F5C\u975E\u6CD5\uFF0C\u9009\u62E9\u7684\u5730\u5757\u4E2D\u5305\u542B\u975E\u672C\u9879\u76EE\u7684\u5730\u5757\uFF01",type:"warning",showClose:!0});return}if(this.mapOptions.editBlockGuid&&this.mapOptions.editBlockGuid.trim()!=""){if(e.layerFeatures.length>1){(0,d.Message)({message:"\u64CD\u4F5C\u975E\u6CD5\uFF0C\u53EA\u80FD\u5220\u9664\u6307\u5B9A\u7684\u5730\u5757\uFF01",type:"warning",showClose:!0});return}else for(var r in e.layerFeatures[0].values_)if(e.layerFeatures[0].values_[r].toUpperCase()=="DK_GUID"&&e.layerFeatures[0].values_[r].trim()!=""&&e.layerFeatures[0].values_[r]!=e.mapOptions.dkGuid){(0,d.Message)({message:"\u64CD\u4F5C\u975E\u6CD5\uFF0C\u53EA\u80FD\u5220\u9664\u6307\u5B9A\u7684\u5730\u5757\uFF01",type:"warning",showClose:!0});return}}this.delete()}delete(){let e=this;d.MessageBox.confirm("\u662F\u5426\u5220\u9664\u9009\u4E2D\u7684\u5730\u5757\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{if(e.tempFeatures.length>0){let t=this.map.getLayerById("drawLayer");a().each(e.tempFeatures,(r,s)=>{t.getSource().removeFeature(s)})}if(e.layerFeatures.length>0){let t=d.Loading.service({lock:!0,text:"\u6B63\u5728\u5220\u9664...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.1)"});y().post(this.baseUrl+"primaryKey",v().stringify({tableName:e.currentTargetLayer.layerTable})).then(r=>{if(r.data&&r.data.message=="success"){e.primaryKey=r.data.data;let s="";a().each(e.layerFeatures,(l,o)=>{let n=o.id_.split(".")[1];s+=n+","}),s=s.substring(0,s.length-1),y().post(this.baseUrl+"edit/delete",v().stringify({featureClass:e.currentTargetLayer.layerTable,filterWhere:e.primaryKey+" in ("+s+")"})).then(l=>{if(t.close(),l.data.result!=null&&l.data.result.IsSucess){let o=e.currentTargetLayer.id,n=this.map.getLayerById(o);n.getSource().clear(),this.map.removeLayer(n),this.map.addLayer(n),(0,d.Message)({message:"\u5220\u9664\u6210\u529F",type:"success",showClose:!0}),this.selectFeatures.clear()}}).catch(l=>{(0,d.Message)({showClose:!0,type:"error",message:"\u5220\u9664\u5931\u8D25"})})}}).catch(r=>{(0,d.Message)({showClose:!0,type:"error",message:"\u5220\u9664\u5931\u8D25"})})}}).catch(t=>{(0,d.Message)({showClose:!0,type:"info",message:"\u5DF2\u53D6\u6D88\u5220\u9664"})})}setActive(e){e&&this.init()}}var R=K,H={props:["shinemap"],data(){return{activeIndex:"",isCollapse:!0,message:"\u5C55\u5F00\u83DC\u5355",className:"el-icon-d-arrow-right",menuList:[]}},mounted(){let i=this.shinemap.configManager.getConfig();if(!i.widgetPool)return;let e=this.dataFiltering(i.widgetPool.widgets);e.forEach(t=>{t.widgets&&t.widgets.length>0&&t.widgets.sort(this.getSortFun("asc","index"))}),this.menuList=e.sort(this.getSortFun("desc","index")),p.Z.$on("setActiveIndex",t=>{t?this.activeIndex=""+t:this.activeIndex="0"})},methods:{handleSelect(i,e){this.activeIndex=i,i==="LayerMenu"?a()("#LayerMenu").is(":hidden")?a()("#LayerMenu").show():(a()("#LayerMenu").hide(),this.activeIndex="0"):i==="Solution"?a()("#SolutionNav").is(":hidden")?a()("#SolutionNav").show():(a()("#SolutionNav").hide(),this.activeIndex="0",p.Z.$emit("SolutionNavHide")):i==="SelectTool"?this.shinemap.interactionManager.openInteraction("mapSelect"):i==="Analyze"?a()("#AnalysisList").is(":hidden")?a()("#AnalysisList").show():(a()("#AnalysisList").hide(),this.activeIndex="0"):i==="ExportMap"?a()("#MapExportCard").is(":hidden")?(a()("#MapExportCard").show(),p.Z.$emit("createFrame",!0)):(a()("#MapExportCard").hide(),p.Z.$emit("createFrame",!1),this.activeIndex="0"):i==="Identify"?this.shinemap.interactionManager.openInteraction("mapQuery"):i==="PolygonTool"?this.shinemap.interactionManager.openInteraction("mapDraw"):i==="EditTool"?this.shinemap.interactionManager.openInteraction("featureEditing"):i==="ClearTool"?this.shinemap.map.getLayerById("drawLayer").getSource().clear():i==="DeleteTool"?new R(this.shinemap.map).init():i==="Save"?new z(this.shinemap.map).init():i==="MapLabel"?p.Z.$emit("openWidgetCard","mapLabel"):i==="Bookmark"||(i==="Locate"?a()("#PositioningCard").is(":hidden")?(a()("#PositioningCard").show(),p.Z.$emit("positioningInit",!0)):(a()("#PositioningCard").hide(),this.activeIndex="0"):i==="Measurement"||i==="Swipe"||(i==="FileImport"?a()("#fileImportCard").is(":hidden")?a()("#fileImportCard").show():(a()("#fileImportCard").hide(),this.activeIndex="0"):i==="FileExport"?a()("#fileExportCard").is(":hidden")?a()("#fileExportCard").show():(a()("#fileExportCard").hide(),this.activeIndex="0"):i==="Buffer"?a()("#BuffQueryCard").is(":hidden")?a()("#BuffQueryCard").show():(a()("#BuffQueryCard").hide(),this.activeIndex="0"):i==="ReviewTool"&&(a()("#ReviewCard").is(":hidden")?a()("#ReviewCard").show():(a()("#ReviewCard").hide(),this.activeIndex="0"))))},getSortFun(i,e){let t=i==="asc"?">":"<";return new Function("a","b","return a."+e+t+"b."+e+"?1:-1")},dataFiltering(i){for(let e=0;e<i.length;e++)if(i[e].stat==="enable"){if(i[e].widgets&&i[e].widgets.length>0)for(let t=0;t<i[e].widgets.length;t++)i[e].stat==="unable"&&(i[e].widgets.splice(t,1),t--)}else i[e].stat==="unable"&&(i.splice(e,1),e--);return i},getClassName(i){switch(i){case"customDijit/Solution_Widget_977f7aba-0977-4497-89aa-c7a042f1202f":return"el-icon-aliicon-solution";case"customDijit/SelectTool_Widget_9bf3ec53-9a0f-42b0-a203-ba9afa1b7246":return"el-icon-aliicon-select";case"customDijit/Analyze_Widget_694b96a1-f305-4fad-8f1b-9eb35f991ada":return"el-icon-aliicon-analyse";case"customDijit/Identify_Widget_36fcf5eb-09f2-4669-9caf-283a6b2873d0":return"el-icon-search";case"customDijit/ExportMap_Widget_97fb1821-1faa-4d8d-9700-f327ab7ce0d6":return"el-icon-picture-outline";case"customDijit/PolygonTool_Widget_5e4d69ac-9593-4791-b4f4-22a137a79073":return"el-icon-edit-outline";case"customDijit/EditTool_Widget_b27dat14-5c70-4e7d-86e2-do9d96d00ab3a":return"el-icon-edit";case"customDijit/ClearTool_Widget_435285fde-63e3-4a99-add2-da64ad48575c":return"el-icon-aliicon-clear";case"customDijit/DeleteTool_Widget_7ca9bfde-63e3-4a99-add2-da64ad47375c":return"el-icon-delete";case"customDijit/Save_Widget_b27da614-5c70-4e7d-86e2-bdd96d00ab3a":return"el-icon-upload";case"customDijit/BufferAnalyze_Widget_694b96a1-s23f-f5g2-ad14-gf85fv021g4":return"el-icon-aliicon-buffer";case"customDijit/MapLabel_Widget_f094f2ec-24cd-49a6-a9a7-920485823f6c":return"el-icon-aliicon-mapLabel";case"customDijit/Bookmark_Widget_c170ed80-e0d2-4907-a6a2-da69712330d1":return"el-icon-star-off";case"customDijit/Locate_Widget_b4d6d1e2-5c3b-487e-b366-466003321603":return"el-icon-location-outline";case"customDijit/Measurement_Widget_MEAS3CF32A7218794753B116F8E136C6C411":return"el-icon-aliicon-measure";case"customDijit/Swipe_Widget_SWIS3CF32A72DFDF94753B116F8E136C6CD41":return"el-icon-aliicon-Swipe";case"customDijit/FileImport_Widget_b4d6d1e2-5c3b-487e-b366-sdfsasdasd":return"el-icon-aliicon-import";case"customDijit/FileExport_Widget_b4d6d1e2-5c3b-487e-b366-466003321603":return"el-icon-aliicon-export";case"customDijit/Toc_Widget_TOC3CF32A7218794753B116F8E136C6C411":return"el-icon-tickets";case"customDijit/ReviewTool_Widget_97dfdsa7f7aba-097-4497-89aa-c7a0ddd02f":return"el-icon-aliicon-review";default:return"el-icon-menu"}},getTipContent(i,e){switch(i){case"customDijit/Solution_Widget_977f7aba-0977-4497-89aa-c7a042f1202f":if(e==="description")return"\u7528\u4E8E\u52A0\u8F7D\u914D\u7F6E\u5B8C\u6210\u7684\u56FE\u5C42\u6570\u636E\u81F3\u5DE5\u4F5C\u533A\u57DF";if(e==="istructions")return"";break;case"customDijit/SelectTool_Widget_9bf3ec53-9a0f-42b0-a203-ba9afa1b7246":if(e==="description")return"\u7528\u4E8E\u5730\u56FE\u4E0A\u7684\u5730\u5757\u9009\u62E9;";if(e==="istructions")return"\u5730\u56FE\u64CD\u4F5C:(\u9F20\u6807\u5DE6\u952E\u5355\u51FB:\u5355\u9009; shift+\u9F20\u6807\u5DE6\u952E\u5355\u51FB:\u591A\u9009; ctrl+\u9F20\u6807\u5DE6\u952E:\u6846\u9009; \u9F20\u6807\u53F3\u952E\u5355\u51FB:\u5173\u95ED\u8BE5\u529F\u80FD;)";break;case"customDijit/Analyze_Widget_694b96a1-f305-4fad-8f1b-9eb35f991ada":if(e==="description")return"\u5BF9\u9009\u4E2D\u7684\u7ED8\u5236\u5730\u5757\u6216\u56FE\u5C42\u4E2D\u7684\u5730\u5757\u8FDB\u884C\u5206\u6790,\u5206\u6790\u5730\u5757\u8303\u56F4\u5185\u73B0\u72B6\u3001\u89C4\u5212\u3001\u7B49\u7EA7\u4EE5\u53CA\u76F8\u5E94\u7684\u9879\u76EE\u6570\u636E";if(e==="istructions")return"";break;case"customDijit/Identify_Widget_36fcf5eb-09f2-4669-9caf-283a6b2873d0":if(e==="description")return"\u67E5\u8BE2\u5730\u5757\u57FA\u672C\u4FE1\u606F\u548C\u9879\u76EE\u4FE1\u606F";if(e==="istructions")return"\u5730\u56FE\u64CD\u4F5C:(\u9F20\u6807\u5DE6\u952E\u5355\u51FB:\u8FDB\u884C\u67E5\u8BE2; \u9F20\u6807\u53F3\u952E\u5355\u51FB:\u5173\u95ED\u8BE5\u529F\u80FD;)";break;case"customDijit/ExportMap_Widget_97fb1821-1faa-4d8d-9700-f327ab7ce0d6":if(e==="description")return"\u5236\u4F5C\u5373\u65F6\u5730\u56FE,\u8FDB\u884C\u6253\u5370\u8F93\u51FA";if(e==="istructions")return"";break;case"customDijit/PolygonTool_Widget_5e4d69ac-9593-4791-b4f4-22a137a79073":if(e==="description")return"\u5728\u5730\u56FE\u4E0A\u7ED8\u5236\u56FE\u5F62";if(e==="istructions")return"\u5730\u56FE\u64CD\u4F5C:(\u9F20\u6807\u5DE6\u952E\u5355\u51FB:\u5F00\u59CB\u7ED8\u5236\u4EE5\u53CA\u6DFB\u52A0\u56FE\u5F62\u8282\u70B9;\u9F20\u6807\u5DE6\u952E\u53CC\u51FB:\u5B8C\u6210\u5F53\u524D\u7ED8\u5236;shift+\u9F20\u6807\u5DE6\u952E\u957F\u6309\u62D6\u52A8:\u81EA\u7531\u7ED8\u5236;\u9F20\u6807\u53F3\u952E\u5355\u51FB:\u5173\u95ED\u8BE5\u529F\u80FD;)";break;case"customDijit/EditTool_Widget_b27dat14-5c70-4e7d-86e2-do9d96d00ab3a":if(e==="description")return"\u5BF9\u9009\u4E2D\u7684\u5730\u5757\u8FDB\u884C\u7F16\u8F91";if(e==="istructions")return"\u5730\u56FE\u64CD\u4F5C:(\u9F20\u6807\u5DE6\u952E\u5355\u51FB:\u9009\u4E2D\u7F16\u8F91\u56FE\u5F62;\u9009\u4E2D\u7F16\u8F91\u70B9\u540E\u9F20\u6807\u5DE6\u952E\u957F\u6309\u62D6\u52A8:\u7F16\u8F91\u56FE\u5F62\u8282\u70B9;\u9F20\u6807\u53F3\u952E\u5355\u51FB:\u5173\u95ED\u8BE5\u529F\u80FD;)";break;case"customDijit/ClearTool_Widget_435285fde-63e3-4a99-add2-da64ad48575c":if(e==="description")return"\u6E05\u9664\u5730\u56FE\u4E0A\u4E34\u65F6\u7ED8\u5236\u7684\u56FE\u5F62";if(e==="istructions")return"";break;case"customDijit/DeleteTool_Widget_7ca9bfde-63e3-4a99-add2-da64ad47375c":if(e==="description")return"\u5220\u9664\u9009\u4E2D\u7684\u5730\u5757";if(e==="istructions")return"Tips:\u4F1A\u4ECE\u56FE\u5C42\u670D\u52A1\u6E90\u6570\u636E\u4E2D\u5220\u9664\u9009\u4E2D\u7684\u56FE\u5F62\u4FE1\u606F";break;case"customDijit/Save_Widget_b27da614-5c70-4e7d-86e2-bdd96d00ab3a":if(e==="description")return"\u5C06\u9009\u4E2D\u7684\u5730\u5757\u4FDD\u5B58\u5230\u76EE\u6807\u7F16\u8F91\u56FE\u5C42\u4E2D";if(e==="istructions")return"Tips:\u4F1A\u5C06\u9009\u4E2D\u7684\u56FE\u5F62\u4FE1\u606F\u4FDD\u5B58\u5230\u56FE\u5C42\u670D\u52A1\u6E90\u6570\u636E\u4E2D";break;case"customDijit/BufferAnalyze_Widget_694b96a1-s23f-f5g2-ad14-gf85fv021g4":if(e==="description")return"\u4EE5\u67D0\u4E00\u56FE\u5F62\u4E3A\u57FA\u7840\u7ED8\u5236\u7F13\u51B2\u533A,\u67E5\u8BE2\u7F13\u51B2\u533A\u8303\u56F4\u5185\u6240\u6709\u7684\u5730\u5757\u4FE1\u606F";if(e==="istructions")return"";break;case"customDijit/MapLabel_Widget_f094f2ec-24cd-49a6-a9a7-920485823f6c":if(e==="description")return"\u5728\u5730\u56FE\u4E0A\u6DFB\u52A0\u6807\u8BB0\u6CE8\u91CA";if(e==="istructions")return"";break;case"customDijit/Bookmark_Widget_c170ed80-e0d2-4907-a6a2-da69712330d1":if(e==="description")return"\u4FDD\u5B58\u5F53\u524D\u5730\u56FE\u4F4D\u7F6E";if(e==="istructions")return"";break;case"customDijit/Locate_Widget_b4d6d1e2-5c3b-487e-b366-466003321603":if(e==="description")return"\u6839\u636E\u8F93\u5165\u7684\u5750\u6807\u503C\u8FDB\u884C\u5730\u56FE\u5B9A\u4F4D";if(e==="istructions")return"";break;case"customDijit/Measurement_Widget_MEAS3CF32A7218794753B116F8E136C6C411":if(e==="description")return"\u5730\u56FE\u6D4B\u91CF\u5DE5\u5177";if(e==="istructions")return"";break;case"customDijit/Swipe_Widget_SWIS3CF32A72DFDF94753B116F8E136C6CD41":if(e==="description")return"\u901A\u8FC7\u5377\u5E18\u7684\u65B9\u5F0F\u67E5\u770B\u5F53\u524D\u5730\u56FE\u548C\u88AB\u906E\u76D6\u7684\u76EE\u6807\u56FE\u5C42";if(e==="istructions")return"";break;case"customDijit/FileImport_Widget_b4d6d1e2-5c3b-487e-b366-sdfsasdasd":if(e==="description")return"\u9009\u62E9\u5BF9\u7528\u683C\u5F0F\u6587\u4EF6\u5C06\u5730\u5757\u4FE1\u606F\u5BFC\u5165\u5230\u5730\u56FE\u4E0A";if(e==="istructions")return"";break;case"customDijit/FileExport_Widget_b4d6d1e2-5c3b-487e-b366-466003321603":if(e==="description")return"\u5C06\u9009\u4E2D\u7684\u5730\u5757\u5BFC\u51FA\u4E3A\u67D0\u79CD\u683C\u5F0F\u7684\u6587\u4EF6";if(e==="istructions")return"";break;case"customDijit/Toc_Widget_TOC3CF32A7218794753B116F8E136C6C411":if(e==="description")return"\u56FE\u5C42\u76EE\u5F55";if(e==="istructions")return"";break;case"customDijit/ReviewTool_Widget_97dfdsa7f7aba-097-4497-89aa-c7a0ddd02f":if(e==="description")return"\u5408\u89C4\u6027\u5BA1\u67E5";if(e==="istructions")return"";break;default:return"\u6682\u65E0\u8BF4\u660E"}}}},V=H,Q=(0,g.Z)(V,G,A,!1,null,null,null),X=Q.exports,J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"map",class:e.mapClass,attrs:{id:e.mapId},on:{contextmenu:e.preventContentMenu}},[t("div",{staticClass:"buttonGroup"},[t("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-close",circle:"",size:"mini"},on:{click:e.closeLinkMap}}),t("el-switch",{staticStyle:{float:"right","margin-top":"3px"},on:{change:e.modelChange},model:{value:e.async,callback:function(r){e.async=r},expression:"async"}})],1)])},Y=[],q=c(565941),ee={props:["mapId","mapClass","map","shinemap"],data(){return{async:!0}},mounted(){this.map.setTarget(this.mapId),a()("#"+this.mapId).resize(()=>{this.shinemap.updateSize()})},methods:{preventContentMenu(i){i.preventDefault()},closeLinkMap(){this.shinemap.removeLinkMap(this.mapId)},modelChange(i){if(i)this.map.setView(this.shinemap.map.getView());else{let e=new q.ZP({center:this.map.getView().getCenter(),zoom:this.map.getView().getZoom(),projection:this.map.getView().getProjection()});this.map.setView(e)}}}},te=ee,ie=(0,g.Z)(te,J,Y,!1,null,null,null),ae=ie.exports,L=c(458262),se=c(926945);c(583258);var re={props:["mapOption"],data(){return{shinemap:{},isLoad:!1,dynamicNavIsShow:!0,layerMenuIsShow:!0,layerPanel:"LayerMenu"}},components:{LayerMenu:j.Z,LayerController:N,DynamicNav:X,LinkMap:ae},watch:{shinemap(i){i instanceof L.Z&&(this.isLoad=!0)}},mounted(){let i=new se.Z(this.mapOption);i.loadConfig().then(()=>{this.shinemap=new L.Z({target:"mainMap",center:this.mapOption.center?JSON.parse(this.mapOption.center):void 0,zoom:this.mapOption.zoom?this.mapOption.zoom:void 0,mapOption:this.mapOption,configManager:i}),this.shinemap.map.get("params")&&this.shinemap.map.get("params").isHideHeader&&(this.dynamicNavIsShow=!1),a()("#mainMap").resize(()=>{this.shinemap.updateSize()})}),p.Z.$on("showBtn",e=>{a()("#layerControlBtn").show(),this.layerPanel=e})},methods:{preventContentMenu(i){i.preventDefault()},getLinkMapClassName(i){let e;switch(Number(i)){case 0:e="firstLinkMap";break;case 1:e="secondLinkMap";break;case 2:e="thirdLinkMap";break}return e},showLayerControllerCard(){a()("#layerControlBtn").hide(),this.layerPanel==="LayerMenu"?a()("#LayerMenu").show():a()("#LayerController").show()}},computed:{layOutClass(){let i=this.shinemap.linkMap?this.shinemap.linkMap.length:0,e;switch(Number(i)){case 0:e="oneMap";break;case 1:e="twoMap";break;case 2:e="threeMap";break;case 3:e="fourMap";break;default:e="oneMap"}return e}}},ne=re,oe=(0,g.Z)(ne,S,F,!1,null,"3b955648",null),le=oe.exports,ce=c(126711),de=c(148836),ue={name:"OlBaseMap",components:{ShineMap:le,HideButton:D.Z},mixins:[ce.H],props:["widgetInfo"],data(){return{mapIsLoad:!1,mapOption:{configUrl:""}}},beforeDestroy(){let i=this.widgetInfo.action.receive.mapFilter;if(i.enabled&&i.layerTag&&i.parames.length>0&&i.filter.length>0)for(let e=0;e<i.parames.length;e++){let t=i.parames[e][1]+"_"+i.parames[e][0];_.Z.$off(t)}p.Z.$off("mapInitialized")},mounted(){this.loadInfo(),p.Z.$on("mapInitialized",()=>{this.initAction(this.widgetInfo)})},methods:{...(0,de.nv)(["addChildInitFinish"]),loadInfo(){this.mapOption=this.widgetInfo.config,this.mapIsLoad=!0},reLoadInfo(i){i&&(this.$refs.gisBase.style.width=i.attr.w+"px",this.$refs.gisBase.style.height=i.attr.hh+"px",this.$refs.gisBase.style.display=i.attr.hide==!0?"none":""),this.mapIsLoad=!1,this.mapOption=i.config,setTimeout(()=>{this.mapIsLoad=!0},500)},initAction(i){this.actionSendout(i),this.actionReceive(i)},onIdentify(i){this.$refs.myShineMap.shinemap.interactionManager.openInteraction("mapQuery"),p.Z.$on("showIdentifyInfo",t=>{let r={result:t,flag:void 0};_.Z.$emit(i,r)})},actionReceive(i){let e=i.action.receive.mapFilter;if(e.enabled&&e.layerTag&&e.parames.length>0&&e.filter.length>0)for(let t=0;t<e.parames.length;t++){let r=e.parames[t][1]+"_"+e.parames[t][0];_.Z.$on(r,s=>{let l;for(let u in s){l=s[u].trim();break}let o=[];e.filter[t].forEach(u=>{u.where?o.push(u.where.replace(/#/g,l)):o.push("1=1")}),this.$refs.myShineMap.shinemap.mapFilter(e.layerTag,o.join(";"))})}this.addChildInitFinish()}}},pe=ue,he=(0,g.Z)(pe,x,I,!1,null,"79b51ec0",null),me=he.exports}}]);
