"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[3850],{509132:function(y,l,o){o.d(l,{M:function(){return g}});var _=o(479876),r=o(745643),d=o(555616),u=o.n(d),f=o(927966),h=o(148836),s=o(149500);const g={props:{widgetId:{type:String},value:{default:null},condition_config:{}},mixins:[_.G,r.E],data(){return{global_query:this.$$global_query,condition_value:void 0}},computed:{...(0,h.Se)(["enumInfoFun","datasetInfoFun"]),enumInfo(){return this.enumInfoFun(this.widgetId)},datasetInfo(){return this.datasetInfoFun(this.widgetId)}},mounted(){f.Z.$on("busGetEnumDataSetJson"+(this.widgetId?"_"+this.widgetId:""),e=>{this.getEnumDataSetJson(e)})},methods:{afterChangeValue(){this.scriptChangeValue(),this.condition_config.change_query==!0&&this.doQuery()},scriptChangeValue(){if(this.condition_config.is_change_value&&this.condition_config.is_change_value==!0){if(!this.condition_config.script_change_value||this.condition_config.script_change_value==""){s.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}s.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C");let e=new Function("condition_config","value",this.condition_config.script_change_value);this.condition_config.control_type==this.global_query.control_type.selectTree.code?e.apply(this,[this.condition_config,this.condition_value.value]):e.apply(this,[this.condition_config,this.condition_value])}},keyupEnter(){if(this.condition_config.attributes&&this.condition_config.attributes.is_condition_enter&&this.condition_config.attributes.is_condition_enter==!0){if(!this.condition_config.attributes.script_condition_enter||this.condition_config.attributes.script_condition_enter==""){s.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}s.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C"),this.keyupEnterScript=new Function("condition_config,value",this.condition_config.attributes.script_condition_enter),this.condition_config.control_type==this.global_query.control_type.selectTree.code?this.keyupEnterScript(this.condition_config,this.condition_value.value):this.keyupEnterScript(this.condition_config,this.condition_value)}},getEnumDataSetJson(e){let i=null;this.$$lib__.each(this.queryConfig.field,n=>{n.guid==e&&n.enum_type==this.global_query.enum_type.data_set.code&&n.data_set.dataSetId&&n.data_set.dataSetId!=""&&(i=JSON.parse(JSON.stringify(n)))}),this.$$lib__.each(this.queryConfig.condition,n=>{n.guid==e&&(n.control_type==this.global_query.control_type.select.code||n.control_type==this.global_query.control_type.selectTree.code||n.control_type==this.global_query.control_type.cascader.code||n.control_type==this.global_query.control_type.radio.code||n.control_type==this.global_query.control_type.checkbox.code)&&n.control_enum_type==this.global_query.enum_type.data_set.code&&n.data_set.dataSetId&&n.data_set.dataSetId!=""&&(i=JSON.parse(JSON.stringify(n)))});let t=null;if(i)t=i.data_set.dataSetId+"_"+e,this.updateDatasetInfo({key:t,data:[],isOk:!1,widgetId:this.widgetId});else{s.error("\u672A\u627E\u5230\u4E3B\u952EID\u4E3A["+e+"]\u7684\u67E5\u8BE2\u7ED3\u679C\u5217\u6216\u67E5\u8BE2\u6761\u4EF6");return}let a={dataSet:JSON.stringify(this.handleDataSetParam(i.data_set))};this.getDataSetSource(a,n=>{let p=[];n&&n.status==200?p=this.getDataSetObjectData(n.data,i.data_set.query,i.data_set.dimensionsAlias,i.data_set.dataSetId):d.Message.error({message:"\u6570\u636E\u96C6:[ "+i.data_set.dataSetName+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+n.msg,offset:60}),this.updateDatasetInfo({key:t,data:p,widgetId:this.widgetId})})},getEnumList(){let e=[];if(this.condition_config.control_enum_type==this.$$global_query.enum_type.data_set.code)this.condition_config.guid!=""&&this.condition_config.data_set.dataSetId!=""&&this.$$lib__.each(this.datasetInfo.datasetJson[this.condition_config.data_set.dataSetId+"_"+this.condition_config.guid],i=>{i.enumValue=i[this.condition_config.data_set.field_value],i.enumName=i[this.condition_config.data_set.field_name];let t=i[this.condition_config.data_set.field_disabled];t&&(t.toString()=="1"||t.toString()=="true")?i.disabled=!0:t&&(t.toString()=="0"||t.toString()=="false")&&(i.disabled=!1),e.push(i)});else{let i=this.enumInfo.enumJson[this.condition_config.control_enum_name];i&&(e=JSON.parse(JSON.stringify(i)),e=this.$$lib__.sortBy(e,"enumOrder"))}return e}}}},603850:function(y,l,o){o.r(l),o.d(l,{default:function(){return e}});var _=function(){var t=this,c=t._self._c;return c("div",[c("el-select",{style:{width:t.condition_config.attributes.width_control!=null?t.condition_config.attributes.width_control+"px":void 0},attrs:{multiple:t.condition_config.attributes.multiple,"multiple-limit":t.condition_config.attributes.multiple_limit,"collapse-tags":t.condition_config.attributes.collapse_tags,clearable:t.condition_config.attributes.clearable,filterable:t.condition_config.attributes.filterable,"reserve-keyword":t.condition_config.attributes.reserve_keyword,"default-first-option":t.condition_config.attributes.default_first_option,"popper-class":"white-bgc",readonly:t.condition_config.attributes.readonly,disabled:t.condition_config.attributes.disabled,placeholder:t.condition_config.attributes.placeholder==null||t.condition_config.attributes.placeholder==""?"\u8BF7\u9009\u62E9"+t.condition_config.label:t.condition_config.attributes.placeholder},on:{change:t.changeValue},model:{value:t.condition_value,callback:function(a){t.condition_value=a},expression:"condition_value"}},t._l(t.options_data,function(a){return c("el-option",{key:a.enumValue,attrs:{label:a.enumName,disabled:a.disabled,value:a.enumValue}})}),1)],1)},r=[],d=o(509132),u=o(149500),f={name:"control-select",model:{prop:"value",event:"change"},mixins:[d.M],watch:{value(i){this.condition_value=i}},data(){return{condition_name:"\u4E0B\u62C9\u9009\u62E9\u5668"}},computed:{options_data(){let i=this,t=i.getEnumList();return this.condition_config.attributes.is_enum_filter==!0&&((!this.condition_config.attributes.script_enum_filter||this.condition_config.attributes.script_enum_filter=="")&&u.warn("\u4E0B\u62C9\u9009\u62E9\u5668\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),u.info("\u6267\u884C\u4E0B\u62C9\u9009\u62E9\u5668\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),t=new Function("enum_list",this.condition_config.attributes.script_enum_filter).apply(i,[JSON.parse(JSON.stringify(t))])),t}},mounted(){this.condition_value=this.value},methods:{changeValue(i){this.$emit("change",i!=""?i:null),this.afterChangeValue()}}},h=f,s=o(768141),g=(0,s.Z)(h,_,r,!1,null,"5dac4318",null),e=g.exports}}]);
