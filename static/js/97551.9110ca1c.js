"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[97551],{197551:function(W,r,a){a.r(r),a.d(r,{default:function(){return P}});var d=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-left":"15px"}},[e("el-form-item",{attrs:{label:t.currentWidget.config.pane.d=="v"?"\u5BBD":"\u9AD8"}},[e("el-tooltip",{attrs:{content:"\u5BBD/\u9AD8\u4E3A\u767E\u5206\u6BD4\uFF0C\u598210\uFF0C\u5219\u4EE3\u886810%\uFF0C\u8BF7\u4FDD\u6301\u5B50\u9762\u677F\u7684\u5BBD\u9AD8\u603B\u548C\u4E3A100\uFF0C\u5426\u5219\u663E\u793A\u53EF\u80FD\u4E0D\u6B63\u5E38"}},[e("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"20px\u6216\u800520 (\u767E\u5206\u6BD4)"},on:{change:t.updateModel},model:{value:t.currentPane.s,callback:function(n){t.$set(t.currentPane,"s",n)},expression:"currentPane.s"}})],1)],1),e("el-form-item",{attrs:{label:"\u6DFB\u52A0\u7EC4\u4EF6"}},[e("el-select",{staticStyle:{width:"150px"},attrs:{clearable:"",filterable:"",placeholder:"\u4ECE\u770B\u677F\u4E2D\u7684\u7EC4\u4EF6\u9009\u62E9"},model:{value:t.selectWidget,callback:function(n){t.selectWidget=n},expression:"selectWidget"}},t._l(t.widgetsList,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}),1),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u6DFB\u52A0\u7EC4\u4EF6",effect:"dark",placement:"top"}},[e("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13ce66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:t.addWidgetParent}})],1)],1),t._l(t.currentPane.widgets,function(n,l){return e("el-form-item",{key:l,attrs:{label:"\u7EC4\u4EF6\u540D\u79F0"}},[e("el-input",{staticStyle:{width:"150px"},attrs:{disabled:!0,placeholder:"\u7EC4\u4EF6\u540D\u79F0"},model:{value:n.name,callback:function(s){t.$set(n,"name",s)},expression:"item.name"}}),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u79FB\u9664\u5230\u770B\u677F",effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#409eff","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{icon:"el-icon-back",size:"small",type:"text"},on:{click:function(s){return t.removeWidgetParent(l)}}})],1),e("el-tooltip",{attrs:{"open-delay":1e3,content:"\u5220\u9664\u7EC4\u4EF6",effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{color:"#f6061b","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{icon:"el-icon-delete",size:"small",type:"text"},on:{click:function(s){return t.deleteWidgetParent(l)}}})],1)],1)})],2)},c=[],o=a(723400),u=a(663778),p=a(148836),g=a(149500),h={name:"container-split-data-config.vue",mixins:[u.a,o.j],props:["currentWidget","widgets","currentPane"],data(){return{selectWidget:""}},mounted(){g.log(this.widgetsList)},methods:{...(0,p.nv)(["setCurrentWidget"]),addWidgetParent(){let i=this.$$lib__.find(this.widgetsList,t=>t.value==this.selectWidget);this.currentPane.widgets||(this.currentPane.widgets=[]),i&&(this.currentPane.widgets.push({id:i.value,name:i.label}),this.updateWidgetParentId({widgetId:this.selectWidget,parentId:this.currentWidget.id}),this.selectWidget="",this.updateModel())},removeWidgetParent(i){let t=JSON.parse(JSON.stringify(this.currentPane.widgets[i].id));this.updateWidgetParentId({widgetId:t,parentId:null}),this.currentPane.widgets.splice(i,1),this.updateModel()},deleteWidgetParent(i){let t=JSON.parse(JSON.stringify(this.currentPane.widgets[i].id));this.deleteWidget(t),this.setCurrentWidget(this.currentWidget.id),this.currentPane.widgets.splice(i,1),this.updateModel()},updateModel(){this.$emit("input",this.currentPane),this.$emit("change",this.currentPane)},updateSize(){this.updateModel()},change(){this.$emit("change",this.value)}}},f=h,m=a(768141),v=(0,m.Z)(f,d,c,!1,null,"5966ca6e",null),P=v.exports}}]);
