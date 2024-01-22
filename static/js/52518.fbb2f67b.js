"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[52518],{652518:function(x,o,l){l.r(o),l.d(o,{default:function(){return w}});var g=function(){var t=this,e=t._self._c;return e("vue-lazy-component",{staticClass:"my-collapse-text"},[e("el-collapse",[e("el-collapse-item",{attrs:{title:"\u6807\u7B7E\u9879"}},[e("div",{staticStyle:{"text-align":"right","padding-right":"30px"}},[e("el-tooltip",{attrs:{content:"\u6DFB\u52A0\u6807\u7B7E\u9875","open-delay":1e3,effect:"dark",placement:"top"}},[e("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13CE66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(n){return t.addTabPane()}}})],1)],1),e("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:t.currentWidget}},t._l(t.currentWidget.config.tabPanes,function(n,s){return e("el-collapse-item",{key:s,attrs:{title:n.label.length<10?n.label:n.label.substring(0,10)+"..."}},[e("el-form-item",{attrs:{label:"\u6807\u9898\u6587\u672C"}},[e("el-input",{staticStyle:{width:"160px"},attrs:{placeholder:"\u6807\u9898\u6587\u672C"},on:{change:t.setConfigData},model:{value:n.label,callback:function(i){t.$set(n,"label",i)},expression:"tabPane.label"}}),e("el-tooltip",{attrs:{content:"\u79FB\u9664\u6807\u7B7E\u9875","open-delay":1e3,effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(i){return t.deleteTabPane(s)}}})],1)],1),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.currentWidget.config.tabsTitle.showIcon,expression:"currentWidget.config.tabsTitle.showIcon"}],attrs:{label:"\u56FE\u6807\u9009\u62E9"}},[e("el-icon",{attrs:{icon:n.icon},on:{"on-icon-change":function(i){return t.onIconChange(i,n)}}})],1),e("el-collapse",[e("el-collapse-item",{attrs:{title:"\u5F53\u524D\u6807\u7B7E\u9875\u7684\u7EC4\u4EF6\u5217\u8868"}},[e("el-form-item",{attrs:{label:"\u53EF\u9009\u7EC4\u4EF6"}},[e("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",clearable:"",placeholder:"\u4ECE\u770B\u677F\u4E2D\u7684\u7EC4\u4EF6\u9009\u62E9"},model:{value:t.selectWidget,callback:function(i){t.selectWidget=i},expression:"selectWidget"}},t._l(t.widgetsList,function(i){return e("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}),1),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u6DFB\u52A0\u7EC4\u4EF6",effect:"dark",placement:"top"}},[e("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13CE66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(i){return t.addWidgetParent(n.widgets)}}})],1)],1),t._l(n.widgets,function(i,r){return e("el-form-item",{key:r,attrs:{label:"\u7EC4\u4EF6\u540D\u79F0"}},[e("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"\u7EC4\u4EF6\u540D\u79F0",disabled:!0},model:{value:i.name,callback:function(c){t.$set(i,"name",c)},expression:"item.name"}}),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u79FB\u9664\u5230\u770B\u677F",effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#409EFF","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-back"},on:{click:function(c){return t.removeWidgetParent(s,r)}}})],1),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u5220\u9664\u7EC4\u4EF6",effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(c){return t.deleteWidgetParent(s,r)}}})],1)],1)})],2)],1)],1)}),1)],1),e("el-collapse-item",{directives:[{name:"show",rawName:"v-show",value:t.currentWidget.config.tabsTitle.badge.show,expression:"currentWidget.config.tabsTitle.badge.show"}],attrs:{title:"\u5FBD\u6807\u6570\u636E"}},[e("vue-lazy-component",[e("el-form",{ref:"form",attrs:{size:"mini","label-width":"120px","label-position":"right",model:t.currentWidget.dataset}},[e("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[e("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:t.changeDatasetType},model:{value:t.currentWidget.dataset.type,callback:function(n){t.$set(t.currentWidget.dataset,"type",n)},expression:"currentWidget.dataset.type"}},t._l(t.$$global_editor.dataSourcTypeList3,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}),1)],1),t._l(t.currentWidget.config.tabPanes,function(n,s){return e("el-form-item",{key:s,attrs:{label:`\u7B2C${s+1}\u9879\u6620\u5C04\u5B57\u6BB5`}},[e("el-select",{attrs:{size:"mini",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6807\u7B7E\u6587\u672C\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:t.getConfigData},model:{value:t.currentWidget.dataset[t.currentWidget.dataset.type].encode[`page${s+1}`],callback:function(i){t.$set(t.currentWidget.dataset[t.currentWidget.dataset.type].encode,`page${s+1}`,i)},expression:"currentWidget.dataset[currentWidget.dataset.type].encode[`page${index + 1}`]"}},t._l(t.currentWidget.dataset[t.currentWidget.dataset.type].dimensionsAlias,function(i){return e("el-option",{key:i.name,attrs:{label:i.alias!==""?i.alias:i.name,value:i.name}})}),1)],1)}),e("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:t.currentWidget},on:{getDataSetData:t.getConfigData,clearDynamicEncode:t.clearDynamicEncode}})],2)],1)],1)],1)],1)},u=[],d=l(670894),p=l(663778),f=l(723400),h=l(521007),b=l(589908),m={name:"mobile-container-tabs-data",props:["currentWidget","widgets"],mixins:[f.j,p.a,d.baseConfig],components:{ElIcon:h.Z,SettingDataset:b.Z},data(){return{selectWidget:"",widgetsList:this.getWidgetsList1()}},watch:{widgets:{deep:!0,handler:function(){this.widgetsList=this.getWidgetsList1()}}},methods:{getWidgetsList1(){let a=[];for(let t in this.widgets)t!=this.currentWidget.id&&(this.widgets[t].parentId==null||this.widgets[t].parentId==null)&&a.push({value:t,label:this.widgets[t].name});return a},setConfigData(){this.currentWidget.config.tabPanes=this.$$lib__.sortBy(this.currentWidget.config.tabPanes,"order"),this.getConfigData()},onIconChange(a,t){t.icon=a,this.getConfigData()},changeDatasetType(){this.$refs.settingDataset.loadPreview(),this.getConfigData()},clearDynamicEncode(){Object.keys(this.currentWidget.dataset[this.currentWidget.dataset.type].encode).forEach(a=>{this.currentWidget.dataset[this.currentWidget.dataset.type].encode[a]=""})},addTabPane(){let a=JSON.parse(JSON.stringify(d.default.config.tabPanes[0]));a.id=JSON.parse(JSON.stringify(this.uuid())),a.label="New Tab",a.order=this.currentWidget.config.tabPanes.length+2,this.currentWidget.config.tabPanes.push(a),this.getConfigData()},deleteTabPane(a){let t=JSON.parse(JSON.stringify(this.currentWidget.config.tabPanes[a].id));this.currentWidget.config.tabPanes.splice(a,1),this.reSetActive(t),this.getConfigData()},addWidgetParent(a){let t=this.$$lib__.find(this.widgetsList,e=>e.value==this.selectWidget);t&&(a.push({id:t.value,name:t.label}),this.updateWidgetParentId({widgetId:this.selectWidget,parentId:this.currentWidget.id}),this.selectWidget="",this.getConfigData())},removeWidgetParent(a,t){let e=JSON.parse(JSON.stringify(this.currentWidget.config.tabPanes[a].widgets[t].id));this.updateWidgetParentId({widgetId:e,parentId:null}),this.currentWidget.config.tabPanes[a].widgets.splice(t,1),this.getConfigData()},deleteWidgetParent(a,t){let n={widgetId:JSON.parse(JSON.stringify(this.currentWidget.config.tabPanes[a].widgets[t].id)),parentWidgetId:this.currentWidget.id};this.containerDeleteWidget(n),this.getConfigData()},reSetActive(a){a==this.currentWidget.config.base.initActive&&(this.currentWidget.config.tabPanes.length>0?this.currentWidget.config.base.initActive=this.currentWidget.config.tabPanes[0].id:this.currentWidget.config.base.initActive=null)}}},W=m,v=l(768141),y=(0,v.Z)(W,g,u,!1,null,"9635758e",null),w=y.exports}}]);
