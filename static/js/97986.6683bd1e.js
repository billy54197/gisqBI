"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[97986],{509132:function(z,h,r){r.d(h,{M:function(){return y}});var v=r(479876),b=r(745643),f=r(555616),q=r.n(f),g=r(927966),p=r(148836),d=r(149500);const y={props:{widgetId:{type:String},value:{default:null},condition_config:{}},mixins:[v.G,b.E],data(){return{global_query:this.$$global_query,condition_value:void 0}},computed:{...(0,p.Se)(["enumInfoFun","datasetInfoFun"]),enumInfo(){return this.enumInfoFun(this.widgetId)},datasetInfo(){return this.datasetInfoFun(this.widgetId)}},mounted(){g.Z.$on("busGetEnumDataSetJson"+(this.widgetId?"_"+this.widgetId:""),l=>{this.getEnumDataSetJson(l)})},methods:{afterChangeValue(){this.scriptChangeValue(),this.condition_config.change_query==!0&&this.doQuery()},scriptChangeValue(){if(this.condition_config.is_change_value&&this.condition_config.is_change_value==!0){if(!this.condition_config.script_change_value||this.condition_config.script_change_value==""){d.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}d.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C");let l=new Function("condition_config","value",this.condition_config.script_change_value);this.condition_config.control_type==this.global_query.control_type.selectTree.code?l.apply(this,[this.condition_config,this.condition_value.value]):l.apply(this,[this.condition_config,this.condition_value])}},keyupEnter(){if(this.condition_config.attributes&&this.condition_config.attributes.is_condition_enter&&this.condition_config.attributes.is_condition_enter==!0){if(!this.condition_config.attributes.script_condition_enter||this.condition_config.attributes.script_condition_enter==""){d.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}d.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C"),this.keyupEnterScript=new Function("condition_config,value",this.condition_config.attributes.script_condition_enter),this.condition_config.control_type==this.global_query.control_type.selectTree.code?this.keyupEnterScript(this.condition_config,this.condition_value.value):this.keyupEnterScript(this.condition_config,this.condition_value)}},getEnumDataSetJson(l){let s=null;this.$$lib__.each(this.queryConfig.field,a=>{a.guid==l&&a.enum_type==this.global_query.enum_type.data_set.code&&a.data_set.dataSetId&&a.data_set.dataSetId!=""&&(s=JSON.parse(JSON.stringify(a)))}),this.$$lib__.each(this.queryConfig.condition,a=>{a.guid==l&&(a.control_type==this.global_query.control_type.select.code||a.control_type==this.global_query.control_type.selectTree.code||a.control_type==this.global_query.control_type.cascader.code||a.control_type==this.global_query.control_type.radio.code||a.control_type==this.global_query.control_type.checkbox.code)&&a.control_enum_type==this.global_query.enum_type.data_set.code&&a.data_set.dataSetId&&a.data_set.dataSetId!=""&&(s=JSON.parse(JSON.stringify(a)))});let c=null;if(s)c=s.data_set.dataSetId+"_"+l,this.updateDatasetInfo({key:c,data:[],isOk:!1,widgetId:this.widgetId});else{d.error("\u672A\u627E\u5230\u4E3B\u952EID\u4E3A["+l+"]\u7684\u67E5\u8BE2\u7ED3\u679C\u5217\u6216\u67E5\u8BE2\u6761\u4EF6");return}let m={dataSet:JSON.stringify(this.handleDataSetParam(s.data_set))};this.getDataSetSource(m,a=>{let u=[];a&&a.status==200?u=this.getDataSetObjectData(a.data,s.data_set.query,s.data_set.dimensionsAlias,s.data_set.dataSetId):f.Message.error({message:"\u6570\u636E\u96C6:[ "+s.data_set.dataSetName+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+a.msg,offset:60}),this.updateDatasetInfo({key:c,data:u,widgetId:this.widgetId})})},getEnumList(){let l=[];if(this.condition_config.control_enum_type==this.$$global_query.enum_type.data_set.code)this.condition_config.guid!=""&&this.condition_config.data_set.dataSetId!=""&&this.$$lib__.each(this.datasetInfo.datasetJson[this.condition_config.data_set.dataSetId+"_"+this.condition_config.guid],s=>{s.enumValue=s[this.condition_config.data_set.field_value],s.enumName=s[this.condition_config.data_set.field_name];let c=s[this.condition_config.data_set.field_disabled];c&&(c.toString()=="1"||c.toString()=="true")?s.disabled=!0:c&&(c.toString()=="0"||c.toString()=="false")&&(s.disabled=!1),l.push(s)});else{let s=this.enumInfo.enumJson[this.condition_config.control_enum_name];s&&(l=JSON.parse(JSON.stringify(s)),l=this.$$lib__.sortBy(l,"enumOrder"))}return l}}}},897986:function(z,h,r){r.r(h),r.d(h,{default:function(){return J}});var v=function(){var t=this,o=t._self._c;return o("div",[t.condition_config.attributes.display_mode==t.global_query.xzq_display_mode.cascader.code?[o("control-xzq-cascader",{attrs:{value:t.condition_value,condition_config:t.condition_config,"widget-id":t.widgetId},on:{change:t.changeValue}})]:t.condition_config.attributes.display_mode==t.global_query.xzq_display_mode.select.code?[o("control-xzq-select",{attrs:{value:t.condition_value,condition_config:t.condition_config,"widget-id":t.widgetId},on:{change:t.changeValue}})]:t._e()],2)},b=[],f=function(){var t=this,o=t._self._c;return o("el-cascader",{style:{width:t.condition_config.attributes.width_control!=null?t.condition_config.attributes.width_control+"px":void 0},attrs:{"popper-class":"dropdown-white",options:t.treeData,clearable:t.condition_config.attributes.clearable,"show-all-levels":t.condition_config.attributes.show_all_levels,"collapse-tags":t.condition_config.attributes.collapse_tags,separator:t.condition_config.attributes.separator,filterable:t.condition_config.attributes.filterable,props:{expandTrigger:t.condition_config.attributes.expandTrigger,multiple:t.condition_config.attributes.multiple,emitPath:!1,checkStrictly:t.condition_config.attributes.checkStrictly},readonly:t.condition_config.attributes.readonly,disabled:t.condition_config.attributes.disabled,placeholder:t.condition_config.attributes.placeholder==null||t.condition_config.attributes.placeholder==""?"\u8BF7\u8F93\u5165"+t.condition_config.label:t.condition_config.attributes.placeholder},on:{change:t.changeValue},model:{value:t.condition_value,callback:function(e){t.condition_value=e},expression:"condition_value"}})},q=[],g=r(148836),p=r(149500),d={name:"control-xzq-cascader",props:{widgetId:{type:String},value:{default:null},condition_config:{}},data(){return{condition_value:null,tree_root:null,xzqList:[]}},computed:{...(0,g.Se)(["enumInfoFun"]),enumInfo(){return this.enumInfoFun(this.widgetId)},treeData(){let i=this;return i.xzqList=i.getEnumList(),this.buildData()}},watch:{value(i){this.condition_value=i},"condition_config.attributes.root":{deep:!0,handler:function(){this.condition_config.attributes.root!=this.tree_root&&(this.tree_root=this.condition_config.attributes.root,this.condition_value=null,this.changeValue(),this.buildData())}}},mounted(){this.condition_value=this.value,this.tree_root=this.condition_config.attributes.root},methods:{changeValue(){this.$emit("change",this.condition_value)},getEnumList(){let i=[],t=this.enumInfo.enumJson[this.$$global_query.globalConstantKey.field_enum.system_region_enum_key];return t&&(i=JSON.parse(JSON.stringify(t))),i},buildData(){let i=JSON.parse(JSON.stringify(this.xzqList));this.condition_config.attributes.is_enum_filter==!0&&((!this.condition_config.attributes.script_enum_filter||this.condition_config.attributes.script_enum_filter=="")&&p.warn("\u884C\u653F\u533A\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),p.info("\u6267\u884C\u884C\u653F\u533A\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C"),i=new Function("enum_list",this.condition_config.attributes.script_enum_filter).apply(this,[JSON.parse(JSON.stringify(this.xzqList))]));let t=this.tree_root&&this.tree_root!="",o={},e={},_=[];return this.$$lib__.each(i,n=>{t?(n.xzqCode.indexOf(this.tree_root)>-1||this.tree_root=="china")&&(n.id=n.xzqCode,n.value=n.xzqCode,n.label=n.xzqName,n.parentCode&&n.parentCode!=this.tree_root?(e[n.parentCode]||(e[n.parentCode]=[]),e[n.parentCode].push(n)):n.parentCode==this.tree_root&&_.push(n)):(n.id=n.xzqCode,n.value=n.xzqCode,n.label=n.xzqName,n.parentCode&&n.parentCode!=""?(e[n.parentCode]||(e[n.parentCode]=[]),e[n.parentCode].push(n)):_.push(n))}),this.transferData(_,e,o),JSON.parse(JSON.stringify(_))},transferData(i,t,o){this.$$lib__.each(i,e=>{let _=t[e.id];_?(e.children=_,o[e.id]&&this.$$lib__.each(o[e.id],n=>{e.children.push(n)}),this.transferData(_,t,o)):o[e.id]&&(e.children=o[e.id])})}}},y=d,l=r(768141),s=(0,l.Z)(y,f,q,!1,null,"950f2ae0",null),c=s.exports,x=function(){var t=this,o=t._self._c;return o("div",[o("el-form",{ref:"form",staticClass:"my-condition-header",attrs:{model:t.form_xzq,inline:!0,size:"mini"},nativeOn:{submit:function(e){e.preventDefault()}}},[t._l(t.condition_config.attributes.select_list,function(e,_){return[o("el-form-item",{key:_,attrs:{size:e.size,"label-width":e.label_width!=null?e.label_width+"px":void 0,label:e.hide_label==!0?"":e.label}},[o("el-select",{style:{width:e.width_control!=null?e.width_control+"px":void 0},attrs:{clearable:e.clearable,filterable:e.filterable,"default-first-option":e.default_first_option,"popper-class":"white-bgc",disabled:e.disabled,placeholder:t.getPlaceholder(e)},on:{change:function(n){return t.changeSelect(e.xzq_level)}},model:{value:t.form_xzq[e.xzq_level],callback:function(n){t.$set(t.form_xzq,e.xzq_level,n)},expression:"form_xzq[item.xzq_level]"}},t._l(t.select_data[e.xzq_level],function(n){return o("el-option",{key:n.enumValue,attrs:{label:n.enumName,value:n.enumValue}})}),1)],1)]})],2)],1)},m=[],a=r(42160),u=r(149500),S={name:"control-xzq-select",props:{widgetId:{type:String},value:{default:null},condition_config:{}},data(){return{condition_value:null,form_xzq:{},select_data:{},select_data_all:{},tree_root:null}},computed:{...(0,g.Se)(["enumInfoFun"]),xzqList(){return this.getXzqList()}},watch:{xzqList(){this.setForm()},value(i){this.condition_value=i,this.setForm()},"condition_config.attributes.root":{deep:!0,handler:function(){this.condition_config.attributes.root!=this.tree_root&&(this.tree_root=this.condition_config.attributes.root,this.condition_value=null,this.changeValue(),this.setForm())}}},mounted(){this.condition_value=this.value,this.tree_root=this.condition_config.attributes.root},methods:{changeValue(){let i=[];for(let o in this.form_xzq)this.form_xzq[o]&&this.form_xzq[o]!=""&&i.push({key:o,value:this.form_xzq[o]});let t=this.$$lib__.max(i,o=>o.key);t?this.condition_value=t.value:this.condition_value=null,this.$emit("change",this.condition_value)},changeSelect(i){this.$$lib__.each(this.condition_config.attributes.select_list,t=>{t.xzq_level>i&&a.default.set(this.form_xzq,t.xzq_level,null)}),this.changeValue()},setForm(){if(this.condition_value){let i=-1,t=this.condition_value.toString(),o=Object.keys(this.form_xzq);for(let e in this.form_xzq)a.default.set(this.form_xzq,e,null);for(let e=1;e<=t.length;e++)e<=6?i=e%2:i=e%3,i==0&&this.$$lib__.contains(o,e.toString())&&a.default.set(this.form_xzq,e,t.substring(0,e))}else for(let i in this.form_xzq)a.default.set(this.form_xzq,i,null);this.setSelectData()},setSelectData(){this.$$lib__.each(this.condition_config.attributes.select_list,i=>{let t=this.getSelectData(parseInt(i.xzq_level));a.default.set(this.select_data,i.xzq_level,t)})},getSelectData(i){let t=this.form_xzq[i-2];return t=this.$$lib__.find(this.condition_config.attributes.select_list,e=>e.xzq_level==i-2)==null?void 0:t,t==null&&(t=this.form_xzq[i-3],t=this.$$lib__.find(this.condition_config.attributes.select_list,_=>_.xzq_level==i-3)==null?void 0:t),t==null?this.tree_root&&this.tree_root!=""&&this.tree_root!="china"?this.$$lib__.filter(this.select_data_all[i],e=>e.enumValue.indexOf(this.tree_root)>-1):this.select_data_all[i]:this.$$lib__.filter(this.select_data_all[i],e=>e.parentEnumValue==t)},getXzqList(){let i=[],t=this.enumInfoFun(this.widgetId);if(t.enumJson){let o=t.enumJson[this.$$global_query.globalConstantKey.field_enum.system_region_enum_key];o&&(i=JSON.parse(JSON.stringify(o)))}return this.setSelectDataAll(i),i},setSelectDataAll(i){i||(i=JSON.parse(JSON.stringify(this.xzqList))),this.condition_config.attributes.is_enum_filter==!0&&((!this.condition_config.attributes.script_enum_filter||this.condition_config.attributes.script_enum_filter=="")&&u.warn("\u884C\u653F\u533A\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),u.info("\u6267\u884C\u884C\u653F\u533A\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C"),i=new Function("enum_list",this.condition_config.attributes.script_enum_filter).apply(this,[JSON.parse(JSON.stringify(i))])),this.$$lib__.each(this.condition_config.attributes.select_list,t=>{a.default.set(this.form_xzq,t.xzq_level,null);let o=[];this.$$lib__.each(i,e=>{e.xzqCode.length==t.xzq_level&&e.parentCode&&e.parentCode!=""&&(e.enumValue=e.xzqCode,e.enumName=e.xzqName,e.parentEnumValue=e.parentCode,o.push(e))}),a.default.set(this.select_data_all,t.xzq_level,o)})},getPlaceholder(i){return i.placeholder&&i.placeholder!=""?i.placeholder:i.label&&i.label!=""?"\u8BF7\u9009\u62E9"+i.label:"\u8BF7\u9009\u62E9\u884C\u653F\u533A\u7EA7\u522B"}}},$=S,I=(0,l.Z)($,x,m,!1,null,"9e49d506",null),C=I.exports,O=r(509132),D={name:"control-cascaderXzq",components:{ControlXzqSelect:C,ControlXzqCascader:c},model:{prop:"value",event:"change"},props:{widgetId:{type:String},value:{default:null},condition_config:{}},mixins:[O.M],data(){return{condition_name:"\u884C\u653F\u533A\u9009\u62E9\u5668"}},watch:{value(i){this.condition_value=i}},mounted(){this.condition_value=this.value},methods:{changeValue(i){this.condition_value=i,this.$emit("change",i!=""?i:null),this.afterChangeValue()}}},w=D,E=(0,l.Z)(w,v,b,!1,null,"5ca69e5a",null),J=E.exports}}]);
