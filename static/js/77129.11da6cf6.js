"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[77129],{877129:function(p,a,n){n.r(a),n.d(a,{default:function(){return m}});var d=function(){var e=this,i=e._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.widgetInfo.attr.hide!==!0,expression:"widgetInfo.attr.hide !== true"}],ref:"gis-legend",style:{width:e.widgetInfo.attr.w+"px",height:e.widgetInfo.attr.hh+"px"},attrs:{map:e.map}})},o=[],r=n(386892),h=n(445061),g={name:"GisLegend",components:{},mixins:[r.D,h.u],props:["widgetInfo"],data(){return{map:void 0,btnAttr:this.widgetInfo.attr,legendConfig:this.widgetInfo.config.legendConfig,stratedGetId:!1}},watch:{"widgetInfo.action.gisMapId":{handler(t){this.stratedGetId||(this.getBindMap(t),this.stratedGetId=!0)}}},created(){this.initAction(this.widgetInfo)},mounted(){this.getMapId()},methods:{reLoadInfo(t){this.btnAttr=t.attr,this.legendConfig=t.config.legendConfig},getMapId(){this.widgetInfo.action.gisMapId&&this.getBindMap(this.widgetInfo.action.gisMapId)},getBindMap(t){let e=this.getWidgetObject(t);if(e){let i=e.$refs.gismap;i&&(this.map=i.map)}else{let i=setInterval(()=>{if(e=this.getWidgetObject(t),e){clearInterval(i);let s=e.$refs.gismap;s&&(this.map=s.map)}},200)}},initAction(t){this.actionReceive(t)},actionReceive(t){if(t.action==null||t.action.receive==null)return;let e=t.action.receive.show;e&&e.enabled&&e.showList&&e.showList.length>0&&this.doActionShowOrHide(e.showList,e.value,e.script,t.name,"show",!1);let i=t.action.receive.hide;i&&i.enabled&&i.hideList&&i.hideList.length>0&&this.doActionShowOrHide(i.hideList,i.value,i.script,t.name,"hide",!0)}}},l=g,c=n(768141),f=(0,c.Z)(l,d,o,!1,null,null,null),m=f.exports}}]);
