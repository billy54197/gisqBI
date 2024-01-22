"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[52864],{509132:function(y,c,a){a.d(c,{M:function(){return f}});var u=a(479876),l=a(745643),r=a(555616),_=a.n(r),h=a(927966),g=a(148836),s=a(149500);const f={props:{widgetId:{type:String},value:{default:null},condition_config:{}},mixins:[u.G,l.E],data(){return{global_query:this.$$global_query,condition_value:void 0}},computed:{...(0,g.Se)(["enumInfoFun","datasetInfoFun"]),enumInfo(){return this.enumInfoFun(this.widgetId)},datasetInfo(){return this.datasetInfoFun(this.widgetId)}},mounted(){h.Z.$on("busGetEnumDataSetJson"+(this.widgetId?"_"+this.widgetId:""),o=>{this.getEnumDataSetJson(o)})},methods:{afterChangeValue(){this.scriptChangeValue(),this.condition_config.change_query==!0&&this.doQuery()},scriptChangeValue(){if(this.condition_config.is_change_value&&this.condition_config.is_change_value==!0){if(!this.condition_config.script_change_value||this.condition_config.script_change_value==""){s.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}s.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C");let o=new Function("condition_config","value",this.condition_config.script_change_value);this.condition_config.control_type==this.global_query.control_type.selectTree.code?o.apply(this,[this.condition_config,this.condition_value.value]):o.apply(this,[this.condition_config,this.condition_value])}},keyupEnter(){if(this.condition_config.attributes&&this.condition_config.attributes.is_condition_enter&&this.condition_config.attributes.is_condition_enter==!0){if(!this.condition_config.attributes.script_condition_enter||this.condition_config.attributes.script_condition_enter==""){s.warn(this.condition_name+this.condition_config.label+"\u56DE\u8F66\u4E8B\u4EF6\u811A\u672C\u4E3A\u7A7A");return}s.info("\u6267\u884C"+this.condition_name+this.condition_config.label+" \u56DE\u8F66\u4E8B\u4EF6\u811A\u672C"),this.keyupEnterScript=new Function("condition_config,value",this.condition_config.attributes.script_condition_enter),this.condition_config.control_type==this.global_query.control_type.selectTree.code?this.keyupEnterScript(this.condition_config,this.condition_value.value):this.keyupEnterScript(this.condition_config,this.condition_value)}},getEnumDataSetJson(o){let t=null;this.$$lib__.each(this.queryConfig.field,n=>{n.guid==o&&n.enum_type==this.global_query.enum_type.data_set.code&&n.data_set.dataSetId&&n.data_set.dataSetId!=""&&(t=JSON.parse(JSON.stringify(n)))}),this.$$lib__.each(this.queryConfig.condition,n=>{n.guid==o&&(n.control_type==this.global_query.control_type.select.code||n.control_type==this.global_query.control_type.selectTree.code||n.control_type==this.global_query.control_type.cascader.code||n.control_type==this.global_query.control_type.radio.code||n.control_type==this.global_query.control_type.checkbox.code)&&n.control_enum_type==this.global_query.enum_type.data_set.code&&n.data_set.dataSetId&&n.data_set.dataSetId!=""&&(t=JSON.parse(JSON.stringify(n)))});let i=null;if(t)i=t.data_set.dataSetId+"_"+o,this.updateDatasetInfo({key:i,data:[],isOk:!1,widgetId:this.widgetId});else{s.error("\u672A\u627E\u5230\u4E3B\u952EID\u4E3A["+o+"]\u7684\u67E5\u8BE2\u7ED3\u679C\u5217\u6216\u67E5\u8BE2\u6761\u4EF6");return}let e={dataSet:JSON.stringify(this.handleDataSetParam(t.data_set))};this.getDataSetSource(e,n=>{let p=[];n&&n.status==200?p=this.getDataSetObjectData(n.data,t.data_set.query,t.data_set.dimensionsAlias,t.data_set.dataSetId):r.Message.error({message:"\u6570\u636E\u96C6:[ "+t.data_set.dataSetName+" ]\u83B7\u53D6\u5931\u8D25\uFF0C"+n.msg,offset:60}),this.updateDatasetInfo({key:i,data:p,widgetId:this.widgetId})})},getEnumList(){let o=[];if(this.condition_config.control_enum_type==this.$$global_query.enum_type.data_set.code)this.condition_config.guid!=""&&this.condition_config.data_set.dataSetId!=""&&this.$$lib__.each(this.datasetInfo.datasetJson[this.condition_config.data_set.dataSetId+"_"+this.condition_config.guid],t=>{t.enumValue=t[this.condition_config.data_set.field_value],t.enumName=t[this.condition_config.data_set.field_name];let i=t[this.condition_config.data_set.field_disabled];i&&(i.toString()=="1"||i.toString()=="true")?t.disabled=!0:i&&(i.toString()=="0"||i.toString()=="false")&&(t.disabled=!1),o.push(t)});else{let t=this.enumInfo.enumJson[this.condition_config.control_enum_name];t&&(o=JSON.parse(JSON.stringify(t)),o=this.$$lib__.sortBy(o,"enumOrder"))}return o}}}},952864:function(y,c,a){a.r(c),a.d(c,{default:function(){return o}});var u=function(){var i=this,d=i._self._c;return d("div",{attrs:{id:"myConditionId_"+i.condition_config.guid}},[i.condition_config.attributes.radio_style==i.global_query.control_style.base.code?d("el-radio-group",{attrs:{disabled:i.condition_config.attributes.disabled},on:{change:i.changeValue},model:{value:i.condition_value,callback:function(e){i.condition_value=e},expression:"condition_value"}},i._l(i.options_data,function(e){return d("el-radio",{key:e.enumValue,attrs:{border:i.condition_config.attributes.border,disabled:e.disabled,label:e.enumValue}},[i._v(" "+i._s(e.enumName)+" ")])}),1):i._e(),i.condition_config.attributes.radio_style==i.global_query.control_style.button.code?d("el-radio-group",{attrs:{"text-color":i.condition_config.attributes.text_color,fill:i.condition_config.attributes.fill,disabled:i.condition_config.attributes.disabled},on:{change:i.changeValue},model:{value:i.condition_value,callback:function(e){i.condition_value=e},expression:"condition_value"}},i._l(i.options_data,function(e){return d("el-radio-button",{key:e.enumValue,attrs:{disabled:e.disabled,label:e.enumValue}},[i._v(" "+i._s(e.enumName)+" ")])}),1):i._e()],1)},l=[],r=a(509132),_=a(149500),h={name:"control-radio",model:{prop:"value",event:"change"},mixins:[r.M],watch:{value(t){this.condition_value=t},"condition_config.attributes":{deep:!0,handler:function(){this.removeRadioInput()}}},data(){return{condition_name:"\u5355\u9009\u6846\u7EC4"}},computed:{options_data(){let t=this,i=t.getEnumList();return this.condition_config.attributes.is_enum_filter==!0&&((!this.condition_config.attributes.script_enum_filter||this.condition_config.attributes.script_enum_filter=="")&&_.warn("\u5355\u9009\u6846\u7EC4\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),_.info("\u6267\u884C\u5355\u9009\u6846\u7EC4\u679A\u4E3E\u8FC7\u6EE4\u7684\u811A\u672C\u4E3A\u7A7A"),i=new Function("enum_list",this.condition_config.attributes.script_enum_filter).apply(t,[JSON.parse(JSON.stringify(i))])),i}},mounted(){this.condition_value=this.value,this.removeRadioInput()},methods:{changeValue(t){this.$emit("change",t!=""?t:null),this.afterChangeValue()},removeRadioInput(){if(this.condition_config.attributes.radio_style==this.global_query.control_style.button.code&&this.condition_config.attributes.button_margin_right&&this.condition_config.attributes.button_margin_right>0){let t=[];t.push("#myConditionId_"),t.push(this.condition_config.guid),t.push(" .el-radio-button { margin-right: "),t.push(this.condition_config.attributes.button_margin_right),t.push("px; }"),t.push("#myConditionId_"),t.push(this.condition_config.guid),t.push(" .el-radio-button__inner { border-radius: 4px; border-left: 1px solid #DCDFE6;}"),t.push("#myConditionId_"),t.push(this.condition_config.guid),t.push(" .is-active .el-radio-button__inner { border-radius: 4px; border-left: none;}"),this.mUtils.appendCss(`query-condition-control_${this.condition_config.guid}`,t.join(""))}}}},g=h,s=a(768141),f=(0,s.Z)(g,u,l,!1,null,"a1384fe6",null),o=f.exports}}]);
