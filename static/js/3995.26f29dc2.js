"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[3995,97551],{197551:function(y,s,a){a.r(s),a.d(s,{default:function(){return W}});var d=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-left":"15px"}},[e("el-form-item",{attrs:{label:t.currentWidget.config.pane.d=="v"?"\u5BBD":"\u9AD8"}},[e("el-tooltip",{attrs:{content:"\u5BBD/\u9AD8\u4E3A\u767E\u5206\u6BD4\uFF0C\u598210\uFF0C\u5219\u4EE3\u886810%\uFF0C\u8BF7\u4FDD\u6301\u5B50\u9762\u677F\u7684\u5BBD\u9AD8\u603B\u548C\u4E3A100\uFF0C\u5426\u5219\u663E\u793A\u53EF\u80FD\u4E0D\u6B63\u5E38"}},[e("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"20px\u6216\u800520 (\u767E\u5206\u6BD4)"},on:{change:t.updateModel},model:{value:t.currentPane.s,callback:function(n){t.$set(t.currentPane,"s",n)},expression:"currentPane.s"}})],1)],1),e("el-form-item",{attrs:{label:"\u6DFB\u52A0\u7EC4\u4EF6"}},[e("el-select",{staticStyle:{width:"150px"},attrs:{clearable:"",filterable:"",placeholder:"\u4ECE\u770B\u677F\u4E2D\u7684\u7EC4\u4EF6\u9009\u62E9"},model:{value:t.selectWidget,callback:function(n){t.selectWidget=n},expression:"selectWidget"}},t._l(t.widgetsList,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}),1),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u6DFB\u52A0\u7EC4\u4EF6",effect:"dark",placement:"top"}},[e("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13ce66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:t.addWidgetParent}})],1)],1),t._l(t.currentPane.widgets,function(n,l){return e("el-form-item",{key:l,attrs:{label:"\u7EC4\u4EF6\u540D\u79F0"}},[e("el-input",{staticStyle:{width:"150px"},attrs:{disabled:!0,placeholder:"\u7EC4\u4EF6\u540D\u79F0"},model:{value:n.name,callback:function(r){t.$set(n,"name",r)},expression:"item.name"}}),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u79FB\u9664\u5230\u770B\u677F",effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#409eff","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{icon:"el-icon-back",size:"small",type:"text"},on:{click:function(r){return t.removeWidgetParent(l)}}})],1),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u5220\u9664\u7EC4\u4EF6",effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{icon:"el-icon-delete",size:"small",type:"text"},on:{click:function(r){return t.deleteWidgetParent(l)}}})],1)],1)})],2)},c=[],o=a(723400),g=a(663778),p=a(148836),u=a(149500),h={name:"container-split-data-config.vue",mixins:[g.a,o.j],props:["currentWidget","widgets","currentPane"],data(){return{selectWidget:""}},mounted(){u.log(this.widgetsList)},methods:{...(0,p.nv)(["setCurrentWidget"]),addWidgetParent(){let i=this.$$lib__.find(this.widgetsList,t=>t.value==this.selectWidget);this.currentPane.widgets||(this.currentPane.widgets=[]),i&&(this.currentPane.widgets.push({id:i.value,name:i.label}),this.updateWidgetParentId({widgetId:this.selectWidget,parentId:this.currentWidget.id}),this.selectWidget="",this.updateModel())},removeWidgetParent(i){let t=JSON.parse(JSON.stringify(this.currentPane.widgets[i].id));this.updateWidgetParentId({widgetId:t,parentId:null}),this.currentPane.widgets.splice(i,1),this.updateModel()},deleteWidgetParent(i){let t=JSON.parse(JSON.stringify(this.currentPane.widgets[i].id));this.deleteWidget(t),this.setCurrentWidget(this.currentWidget.id),this.currentPane.widgets.splice(i,1),this.updateModel()},updateModel(){this.$emit("input",this.currentPane),this.$emit("change",this.currentPane)},updateSize(){this.updateModel()},change(){this.$emit("change",this.value)}}},f=h,v=a(768141),m=(0,v.Z)(f,d,c,!1,null,"5966ca6e",null),W=m.exports},503995:function(y,s,a){a.r(s),a.d(s,{default:function(){return W}});var d=function(){var t=this,e=t._self._c;return e("vue-lazy-component",{staticClass:"my-collapse-text"},[e("el-form",{staticStyle:{"padding-left":"15px"},attrs:{"label-width":"68px",size:"mini"}},[e("el-form-item",{attrs:{label:"\u65B9\u5411"}},[e("el-radio",{attrs:{label:"v",value:"v"},on:{change:t.updateModel},model:{value:t.currentWidget.config.pane.d,callback:function(n){t.$set(t.currentWidget.config.pane,"d",n)},expression:"currentWidget.config.pane.d"}},[t._v("\u5DE6\u53F3")]),e("el-radio",{attrs:{label:"h",value:"h"},on:{change:t.updateModel},model:{value:t.currentWidget.config.pane.d,callback:function(n){t.$set(t.currentWidget.config.pane,"d",n)},expression:"currentWidget.config.pane.d"}},[t._v("\u4E0A\u4E0B")])],1),e("el-button",{staticClass:"el-icon-plus",attrs:{type:"text"},on:{click:t.addChildPane}},[t._v("\u6DFB\u52A0\u5B50\u9762\u677F ")]),e("el-collapse",{staticStyle:{"padding-right":"5px"}},t._l(t.currentWidget.config.pane.children,function(n,l){return e("el-collapse-item",{key:l},[e("template",{slot:"title"},[e("div",{staticClass:"my-title-button"},[e("span",[t._v(" \u5B50\u9762\u677F"+t._s(l+1)+" ")]),e("el-tooltip",{attrs:{content:"\u987A\u5E8F\u5411\u4E0A\u4E00\u7EA7"}},[e("el-button",{attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),t.up(l)}}},[e("span",{staticClass:"iconfont bi_moveUp1"})])],1),e("el-tooltip",{attrs:{content:"\u987A\u5E8F\u5411\u4E0B\u4E00\u7EA7"}},[e("el-button",{attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),t.down(l)}}},[e("span",{staticClass:"iconfont bi_moveDown1"})])],1),e("el-tooltip",{attrs:{content:"\u5220\u9664"}},[e("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),t.del(l)}}},[e("span",{staticClass:"iconfont bi_trash2"})])],1)],1)]),e("container-split-data-config",{attrs:{"current-widget":t.currentWidget,"current-pane":n,widgets:t.widgets},on:{change:t.updateModel}})],2)}),1)],1)],1)},c=[],o=a(723400),g=a(663778),p=a(197551),u=a(148836),h={name:"ContainerSplitData",components:{ContainerSplitDataConfig:p.default},mixins:[g.a,o.j],props:["currentWidget","widgets"],methods:{...(0,u.nv)(["setCurrentWidget"]),updateModel(){this.getConfigData()},addChildPane(){this.$message.info("\u8BF7\u8BBE\u7F6E\u5B50\u9762\u677F\u5BBD/\u9AD8"),this.currentWidget.config.pane.children.push({s:"10",widgets:[]}),this.updateModel()},del(i){let t=this.currentWidget.config.pane.children.splice(i,1);t[0].widgets&&t[0].widgets.length>0&&t[0].widgets.forEach(e=>{this.deleteWidget(e.id)}),this.setCurrentWidget(this.currentWidget.id),this.updateModel()},up(i){if(i>0){let t=this.currentWidget.config.pane.children[i-1];this.currentWidget.config.pane.children[i-1]=this.currentWidget.config.pane.children[i],this.currentWidget.config.pane.children[i]=t}this.updateModel()},down(i){if(i<this.currentWidget.config.pane.children.length-1){let t=this.currentWidget.config.pane.children[i+1];this.currentWidget.config.pane.children[i+1]=this.currentWidget.config.pane.children[i],this.currentWidget.config.pane.children[i]=t}this.updateModel()},selectWidget(i,t){this.getConfigData(),this.updateWidgetParentId({widgetId:i,parentId:this.currentWidget.id})},addWidgetParent(i){let t=0;for(;i&&i.length>0&&i.findIndex(e=>e.i-0==t)>-1;)t++;i.push({x:0,y:0,w:2,h:2,i:""+t,style:{},widget:""})},removeWidgetParent(i){let t=JSON.parse(JSON.stringify(this.currentWidget.config.widgets[i].id));this.currentWidget.config.widgets.splice(i,1),this.getConfigData(),this.updateWidgetParentId({widgetId:t,parentId:null})},deleteWidgetParent(i){let t=JSON.parse(JSON.stringify(this.currentWidget.config.widgets[i].id));this.deleteWidget(t),this.currentWidget.config.widgets.splice(i,1),this.getConfigData()}}},f=h,v=a(768141),m=(0,v.Z)(f,d,c,!1,null,"c348b75a",null),W=m.exports}}]);
