"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[7556],{509132:function(b,d,l){l.d(d,{M:function(){return v}});var r=l(479876),_=l(745643),u=l(555616),h=l.n(u),f=l(927966),g=l(148836),c=l(149500);const v={props:{widgetId:{type:String},value:{default:null},condition_config:{}},mixins:[r.G,_.E],data(){return{global_query:this.$$global_query,condition_value:void 0}},computed:{...(0,g.Se)(["enumInfoFun","datasetInfoFun"]),enumInfo(){return this.enumInfoFun(this.widgetId)},datasetInfo(){return this.datasetInfoFun(this.widgetId)}},mounted(){f.Z.$on("busGetEnumDataSetJson"+(this.widgetId?"_"+this.widgetId:""),a=>{this.getEnumDataSetJson(a)})},methods:{afterChangeValue(){this.scriptChangeValue(),this.condition_config.change_query==!0&&this.doQuery()},scriptChangeValue(){if(this.condition_config.is_change_value&&this.condition_config.is_change_value==!0){if(!this.condition_config.script_change_value||this.condition_config.script_change_value==""){c.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}c.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C");let a=new Function("condition_config","value",this.condition_config.script_change_value);this.condition_config.control_type==this.global_query.control_type.selectTree.code?a.apply(this,[this.condition_config,this.condition_value.value]):a.apply(this,[this.condition_config,this.condition_value])}},keyupEnter(){if(this.condition_config.attributes&&this.condition_config.attributes.is_condition_enter&&this.condition_config.attributes.is_condition_enter==!0){if(!this.condition_config.attributes.script_condition_enter||this.condition_config.attributes.script_condition_enter==""){c.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}c.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C"),this.keyupEnterScript=new Function("condition_config,value",this.condition_config.attributes.script_condition_enter),this.condition_config.control_type==this.global_query.control_type.selectTree.code?this.keyupEnterScript(this.condition_config,this.condition_value.value):this.keyupEnterScript(this.condition_config,this.condition_value)}},getEnumDataSetJson(a){let e=null;this.$$lib__.each(this.queryConfig.field,i=>{i.guid==a&&i.enum_type==this.global_query.enum_type.data_set.code&&i.data_set.dataSetId&&i.data_set.dataSetId!=""&&(e=JSON.parse(JSON.stringify(i)))}),this.$$lib__.each(this.queryConfig.condition,i=>{i.guid==a&&(i.control_type==this.global_query.control_type.select.code||i.control_type==this.global_query.control_type.selectTree.code||i.control_type==this.global_query.control_type.cascader.code||i.control_type==this.global_query.control_type.radio.code||i.control_type==this.global_query.control_type.checkbox.code)&&i.control_enum_type==this.global_query.enum_type.data_set.code&&i.data_set.dataSetId&&i.data_set.dataSetId!=""&&(e=JSON.parse(JSON.stringify(i)))});let t=null;if(e)t=e.data_set.dataSetId+"_"+a,this.updateDatasetInfo({key:t,data:[],isOk:!1,widgetId:this.widgetId});else{c.error("\u672A\u627E\u5230\u4E3B\u952EID\u4E3A["+a+"]\u7684\u67E5\u8BE2\u7ED3\u679C\u5217\u6216\u67E5\u8BE2\u6761\u4EF6");return}let o={dataSet:JSON.stringify(this.handleDataSetParam(e.data_set))};this.getDataSetSource(o,i=>{let s=[];i&&i.status==200?s=this.getDataSetObjectData(i.data,e.data_set.query,e.data_set.dimensionsAlias,e.data_set.dataSetId):u.Message.error({message:"\u6570\u636E\u96C6:[ "+e.data_set.dataSetName+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+i.msg,offset:60}),this.updateDatasetInfo({key:t,data:s,widgetId:this.widgetId})})},getEnumList(){let a=[];if(this.condition_config.control_enum_type==this.$$global_query.enum_type.data_set.code)this.condition_config.guid!=""&&this.condition_config.data_set.dataSetId!=""&&this.$$lib__.each(this.datasetInfo.datasetJson[this.condition_config.data_set.dataSetId+"_"+this.condition_config.guid],e=>{e.enumValue=e[this.condition_config.data_set.field_value],e.enumName=e[this.condition_config.data_set.field_name];let t=e[this.condition_config.data_set.field_disabled];t&&(t.toString()=="1"||t.toString()=="true")?e.disabled=!0:t&&(t.toString()=="0"||t.toString()=="false")&&(e.disabled=!1),a.push(e)});else{let e=this.enumInfo.enumJson[this.condition_config.control_enum_name];e&&(a=JSON.parse(JSON.stringify(e)),a=this.$$lib__.sortBy(a,"enumOrder"))}return a}}}},707556:function(b,d,l){l.r(d),l.d(d,{default:function(){return a}});var r=function(){var t=this,n=t._self._c;return n("div",[n("el-select",{ref:"refSelect",style:{width:t.condition_config.attributes.width_control!=null?t.condition_config.attributes.width_control+"px":void 0},attrs:{"popper-class":"white-bgc",multiple:t.condition_config.attributes.show_checkbox,"collapse-tags":t.condition_config.attributes.collapse_tags,clearable:t.condition_config.attributes.clearable,filterable:t.condition_config.attributes.filterable,"reserve-keyword":t.condition_config.attributes.reserve_keyword,"filter-method":t.filterMethod,readonly:t.condition_config.attributes.readonly,disabled:t.condition_config.attributes.disabled,placeholder:t.condition_config.attributes.placeholder==null||t.condition_config.attributes.placeholder==""?"\u8BF7\u8F93\u5165"+t.condition_config.label:t.condition_config.attributes.placeholder},on:{"visible-change":t.visibleChange,"remove-tag":t.removeTag,clear:t.clearSelect,change:t.changeValue},model:{value:t.condition_value.label,callback:function(o){t.$set(t.condition_value,"label",o)},expression:"condition_value.label"}},[n("el-option",{staticStyle:{height:"auto",padding:"0px"},attrs:{value:t.option.value,label:t.option.label}},[n("el-tree",{ref:"selectTree",attrs:{data:t.tree_data,"node-key":"id","default-expanded-keys":t.default_expanded_keys,"filter-node-method":t.filterNodeMethod,"highlight-current":"","current-node-key":t.current_node_key,"show-checkbox":t.condition_config.attributes.show_checkbox,"check-on-click-node":t.condition_config.attributes.check_on_click_node,"expand-on-click-node":t.condition_config.attributes.expand_on_click_node,"default-expand-all":t.condition_config.attributes.default_expand_all},on:{"node-click":t.nodeClick,"check-change":t.checkChange}})],1)],1)],1)},_=[],u=l(509132),h=l(149500),f={name:"control-selectTree",model:{prop:"value",event:"change"},props:{widgetId:{type:String},value:{default:null},condition_config:{}},mixins:[u.M],data(){return{condition_name:"\u4E0B\u62C9\u9009\u62E9\u6811",condition_value:{value:null,label:null},option:{value:"",label:""},setValue_ok:!0,current_node_key:null,default_expanded_keys:[],list:[],tree_root:null}},computed:{tree_data(){return this.rebuildData()}},watch:{value(e){this.setValue_ok?this.setConditionSelectTreeValue(e):this.setValue_ok=!0},list:{deep:!0,handler:function(){this.setConditionSelectTreeValue(this.condition_value.value)}},"condition_config.attributes.show_checkbox":{deep:!0,handler:function(){this.setConditionSelectTreeValue(this.condition_value.value)}}},mounted(){this.setConditionSelectTreeValue(this.value)},methods:{changeValue(){this.$emit("change",this.condition_value.value!=""?this.condition_value.value:null),this.afterChangeValue()},nodeClick(e){this.condition_config.attributes.show_checkbox||(this.condition_value.value=e.id,this.condition_value.label=e.label,this.changeValue(),this.$refs.refSelect.blur())},checkChange(e,t){this.condition_config.attributes.show_checkbox&&(t?(this.condition_value.value.push(e.id),this.condition_value.label.push(e.label)):(this.condition_value.value.length>0&&(this.condition_value.value=this.$$lib__.without(this.condition_value.value,e.id)),this.condition_value.label.length>0&&(this.condition_value.label=this.$$lib__.without(this.condition_value.label,e.label))),this.setValue_ok=!1,this.changeValue())},removeTag(e){if(this.condition_value.value.length>0){let t=this.getValueByLabel(e);this.condition_value.value=this.$$lib__.without(this.condition_value.value,t);let n=this.$refs.selectTree.getNode(t);n.parent.parent&&this.removeTagParent(n.parent.data.id)}this.$refs.selectTree.setCheckedKeys(this.condition_value.value),this.changeValue()},removeTagParent(e){if(this.condition_value.value.length>0){this.condition_value.value=this.$$lib__.without(this.condition_value.value,e);let t=this.$refs.selectTree.getNode(e);t.parent.parent&&this.removeTagParent(t.parent.data.id)}},filterNodeMethod(e,t){return e?t.label.indexOf(e)!==-1:!0},filterMethod(e){this.$refs.selectTree.filter(e)},clearSelect(){this.condition_config.attributes.show_checkbox?(this.condition_value.value=[],this.condition_value.label=[],this.$refs.selectTree.setCheckedKeys([])):(this.condition_value.value=null,this.condition_value.label=null,this.$refs.selectTree.setCurrentKey(null)),this.changeValue()},visibleChange(){this.$refs.selectTree.filter(null)},setConditionSelectTreeValue(e){if(this.condition_config.attributes.show_checkbox){if(e instanceof Array){this.condition_value.value instanceof Array||(this.condition_value.value=[]),this.condition_value.label instanceof Array||(this.condition_value.label=[]),this.condition_value.value=this.$$lib__.union(this.condition_value.value,e);let t=[],n=e.length;if(n.length>0)for(let o=0;o<n;o++)t.push(this.setConditionValueLabel(e[o]));this.condition_value.label=this.$$lib__.union(this.condition_value.label,t)}else this.condition_value.value=[],this.condition_value.label=[],e&&(this.condition_value.value.push(e),this.condition_value.label.push(this.setConditionValueLabel(e)));this.$refs.selectTree.setCheckedKeys(this.condition_value.value)}else e instanceof Array?e.length>0?(this.condition_value.value=e[0],this.condition_value.label=this.setConditionValueLabel(e[0])):(this.condition_value.value=null,this.condition_value.label=null):(this.condition_value.value=e,this.condition_value.label=this.setConditionValueLabel(e)),this.$refs.selectTree.setCurrentKey(this.condition_value.value)},setConditionValueLabel(e){let t=null,n=this.$$lib__.find(this.list,o=>o.id==e);return n&&(t=n.label),t},getValueByLabel(e){let t=null,n=this.$$lib__.find(this.list,o=>o.label==e);return n&&(t=n.id),t},getEnumList(){let e=[];if(this.tree_root=null,this.condition_config.control_enum_type==this.$$global_query.enum_type.data_set.code)this.condition_config.guid!=""&&this.condition_config.data_set.dataSetId!=""&&this.$$lib__.each(this.datasetInfo.datasetJson[this.condition_config.data_set.dataSetId+"_"+this.condition_config.guid],t=>{t.enumValue=t[this.condition_config.data_set.field_value],t.enumName=t[this.condition_config.data_set.field_name],t.fldEnumId=t[this.condition_config.data_set.field_value],t.parentEnumValue=t[this.condition_config.data_set.parent_value],e.push(t)}),this.condition_config.data_set.tree_root&&(this.tree_root=this.condition_config.data_set.tree_root);else{let t=this.enumInfo.enumJson[this.condition_config.control_enum_name];t&&(e=JSON.parse(JSON.stringify(t)),e=this.$$lib__.sortBy(e,"enumOrder"))}return e},rebuildData(){let e=this.getEnumList();this.condition_config.attributes.is_enum_filter==!0&&((!this.condition_config.attributes.script_enum_filter||this.condition_config.attributes.script_enum_filter=="")&&h.warn("\u4E0B\u62C9\u9009\u62E9\u6811\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),h.info("\u6267\u884C\u4E0B\u62C9\u9009\u62E9\u6811\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),e=new Function("enum_list",this.condition_config.attributes.script_enum_filter).apply(this,[JSON.parse(JSON.stringify(e))]));let t=this.tree_root&&this.tree_root!="",n={},o=[];return this.$$lib__.each(e,i=>{let s=i.parentEnumValue;t?(i.id=i.enumValue,i.label=i.enumName,s&&s!=this.tree_root?(n[s]||(n[s]=[]),n[s].push(i)):s==this.tree_root&&o.push(i)):(i.id=i.enumValue,i.label=i.enumName,i.disabled=i.disabled,s!=null&&s!=""?(n[s]||(n[s]=[]),n[s].push(i)):o.push(i))}),e&&(this.list=JSON.parse(JSON.stringify(e))),this.transferFl(o,n),o},transferFl(e,t){this.$$lib__.each(e,n=>{let o=t[n.fldEnumId];o&&(n.children=o,this.transferFl(o,t))})}}},g=f,c=l(768141),v=(0,c.Z)(g,r,_,!1,null,"5e0a5e1e",null),a=v.exports}}]);
