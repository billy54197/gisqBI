"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[58884],{79969:function(p,c,t){t.d(c,{X:function(){return g}});var d=t(935051),s=t(470709),m=t(155946),n=t(365148);let l=m.Z.state.view.viewType,a="/thirdparty/databrain",g={remoteproject(){return l==n.Z.editType.public.code?(0,s.xV)(a+"/remoteproject"):(0,d.getRequest)(a+"/remoteproject")},remotemodels(i){return l==n.Z.editType.public.code?(0,s.xV)(a+"/remotemodels/"+i):(0,d.getRequest)(a+"/remotemodels/"+i)},model(i){return l==n.Z.editType.public.code?(0,s.M0)(a+"/model/",i):(0,d.postRequest)(a+"/model/",i)}}},658884:function(p,c,t){t.r(c),t.d(c,{default:function(){return h}});var d=function(){var e=this,o=e._self._c;return o("div",[o("el-form",{ref:"form",attrs:{size:"mini","label-width":"100px","label-position":"right",model:e.currentWidget.dataset}},[o("el-form-item",{attrs:{label:"\u9009\u62E9\u9879\u76EE\uFF1A"}},[o("el-select",{staticStyle:{width:"180px"},attrs:{filterable:"",placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE"},on:{change:e.projectChange},model:{value:e.currentWidget.config.projectId,callback:function(r){e.$set(e.currentWidget.config,"projectId",r)},expression:"currentWidget.config.projectId"}},e._l(e.projectList,function(r){return o("el-option",{key:r.id,attrs:{label:r.title,value:r.id}})}),1)],1),o("el-form-item",{attrs:{label:"\u9009\u62E9\u6A21\u578B\uFF1A"}},[o("el-select",{staticStyle:{width:"90%"},attrs:{filterable:"",placeholder:"\u8BF7\u9009\u62E9\u6A21\u578B",size:"small","popper-append-to-body":!1},on:{change:e.modelChange},model:{value:e.currentWidget.config.modelId,callback:function(r){e.$set(e.currentWidget.config,"modelId",r)},expression:"currentWidget.config.modelId"}},e._l(e.modelList,function(r,v){return o("el-option",{key:v,attrs:{label:r.title,value:r.id}})}),1)],1)],1)],1)},s=[],m=t(723400),n=t(79969),l=t(149500),a={name:"control-data-data",props:["currentWidget"],mixins:[m.j],data(){return{modelList:[],projectList:[]}},mounted(){this.getDataList()},methods:{getDataList(){let u=this;n.X.remoteproject().then(e=>{u.projectList=e.data,this.currentWidget.config.projectId&&this.getRemotemodels(this.currentWidget.config.projectId)}).catch(e=>{l.log(e)})},getRemotemodels(u){let e=this;n.X.remotemodels(u).then(o=>{e.modelList=o.data}).catch(o=>{l.log(o)})},projectChange(){this.getRemotemodels(this.currentWidget.config.projectId),this.getConfigData()},modelChange(){l.info(this.currentWidget.config.modelId),this.getConfigData()}}},g=a,i=t(768141),f=(0,i.Z)(g,d,s,!1,null,"2b916260",null),h=f.exports}}]);
