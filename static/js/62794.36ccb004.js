"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[62794,39190],{836047:function(y,o,i){i.r(o),i.d(o,{default:function(){return b}});var r=function(){var e=this,t=e._self._c;return t("div",[t("el-collapse",{model:{value:e.activeNames,callback:function(a){e.activeNames=a},expression:"activeNames"}},[t("el-collapse-item",{attrs:{name:"demo"}},[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u7EC4\u4EF6\u793A\u4F8B")])]),t("vue-lazy-component",{staticClass:"my-collapse-chart",staticStyle:{padding:"0px 10px"}},[t("el-table",{staticClass:"gisqbi-my-table",attrs:{data:e.templates,size:"mini","show-header":!1,"max-height":"350"}},[t("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{width:"55"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{staticStyle:{"font-size":"12px"},attrs:{type:"text",size:"mini"},on:{click:function(v){return e.handleClickTemplate(a.row)}}},[e._v("\u67E5\u770B")])]}}])})],1)],1)],2),t("el-collapse-item",[t("template",{slot:"title"},[t("div",{staticClass:"my-title"},[e._v("\u7EC4\u4EF6\u4F9D\u8D56")])]),t("vue-lazy-component",{staticClass:"my-collapse-chart",staticStyle:{"padding-left":"10px"}},[t("el-collapse",[t("el-collapse-item",{attrs:{title:"\u5916\u90E8\u5F15\u7528"}},[t("setting-screen-resource",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.importLibs,callback:function(a){e.$set(e.currentWidget.config,"importLibs",a)},expression:"currentWidget.config.importLibs"}})],1),t("el-collapse-item",{attrs:{title:"\u5185\u90E8\u5F15\u7528"}},[t("div",{staticStyle:{"padding-left":"20px"}},[t("el-checkbox-group",{on:{change:e.getConfigData},model:{value:e.currentWidget.config.gisqBILibs,callback:function(a){e.$set(e.currentWidget.config,"gisqBILibs",a)},expression:"currentWidget.config.gisqBILibs"}},e._l(e.gisqBILibs,function(a){return t("el-checkbox",{key:a.name,staticStyle:{color:"#fff"},attrs:{label:a.label,disabled:a.disabled,value:a.name}},[e._v(e._s(a.label)+" "),a.desc?t("el-tooltip",[t("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(a.desc)},slot:"content"}),t("i",{staticClass:"el-icon-info",staticStyle:{color:"white","margin-top":"5px","margin-left":"4px"}})]):e._e()],1)}),1),t("div",{staticClass:"gisqbi-lib-info"},[e._v("\u4EE5\u4E0B\u5305\u5DF2\u7ECF\u5185\u7F6E\u5F15\u7528\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528:")]),t("div",{staticClass:"gisqbi-lib-common"},e._l(e.gisqBICommonLibs,function(a){return t("span",{staticClass:"el-checkbox__input is-checked el-checkbox__label"},[t("span",{staticClass:"el-checkbox__inner"}),e._v(" "+e._s(a.label)+" "),a.desc?t("el-tooltip",[t("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(a.desc)},slot:"content"}),t("i",{staticClass:"el-icon-info",staticStyle:{color:"white","margin-top":"5px","margin-left":"4px"}})]):e._e()],1)}),0)],1)])],1)],1)],2)],1),t("el-form",{ref:"form",staticStyle:{"padding-left":"10px"},attrs:{size:"mini",model:e.currentWidget.config}},[t("el-form-item",{staticClass:"my-title",staticStyle:{height:"40px","padding-top":"5px"},attrs:{label:"\u7EC4\u4EF6\u6E90\u7801"}},[t("common-custom-script",{attrs:{options:e.options,"current-widget":e.currentWidget},on:{change:e.scriptChange},model:{value:e.currentWidget.config.code,callback:function(a){e.$set(e.currentWidget.config,"code",a)},expression:"currentWidget.config.code"}})],1)],1),t("el-dialog",{staticClass:"dialog-custom-script",attrs:{title:e.currentTemplate.name,"append-to-body":!0,"modal-append-to-body":!0,"custom-class":"dialog-publish","close-on-click-modal":!1,visible:e.templateDialogVisible,"destroy-on-close":!0,width:"90%",top:"5%"},on:{"update:visible":function(a){e.templateDialogVisible=a}}},[e.templateDialogVisible?t("div",{staticClass:"my-custom-script main-content",staticStyle:{height:"500px","min-height":"500px"}},[t("el-aside",{staticClass:"my-aside",attrs:{width:"300px;overflow:auto;background"}},[t("custom-develop",{attrs:{"widget-info":e.currentTemplate.widgetInfo}})],1),t("el-container",{staticStyle:{height:"100%"}},[t("my-monaco-editor",{ref:"script_aip_examples",attrs:{theme:"vs",language:"html,javascript,css"},model:{value:e.currentTemplate.widgetInfo.config.code.content,callback:function(a){e.$set(e.currentTemplate.widgetInfo.config.code,"content",a)},expression:"currentTemplate.widgetInfo.config.code.content"}})],1)],1):e._e(),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.setTemplate}},[e._v("\u4F7F\u7528\u793A\u4F8B\u4F5C\u4E3A\u6A21\u677F")]),t("el-button",{attrs:{size:"mini"},on:{click:function(a){e.templateDialogVisible=!1}}},[e._v("\u53D6 \u6D88")])],1)])],1)},n=[],d=i(106956),c=i(723400),m=i(406627),s={templates:[{name:"\u6570\u636E\u52A0\u8F7D\u793A\u4F8B",code:"sample",desc:"\u4F7F\u7528ElementUI\u7684\u8868\u683C\u7EC4\u4EF6\u5C55\u793A\u6570\u636E\u548C\u4EA4\u4E92",widgetInfo:{attr:{forceAbsolute:!1,x:55,lockedX:!1,y:137,lockedY:!1,z:501,w:459,lockedW:!1,h:358,lockedH:!1,lockedScale:!1,hh:358,hide:!1,buttonHideColor:"rgba(0, 0, 0, 1)",deg:0,opacity:1,predefineColoursScheme:"default",widgetW:459,backgroundColor:"rgba(189, 195, 199, 1)"},border:{hide:!1,type:!1,overflowShow:!1,widthT:0,widthB:0,widthR:0,widthL:0,styleT:"solid",styleB:"solid",styleR:"solid",styleL:"solid",colorT:"rgba(30, 144, 255, 1)",colorB:"rgba(30, 144, 255, 1)",colorR:"rgba(30, 144, 255, 1)",colorL:"rgba(30, 144, 255, 1)",radiusTL:0,radiusTR:0,radiusBL:0,radiusBR:0,borderImage:"",breadthT:0,breadthB:0,breadthR:0,breadthL:0,cutT:10,cutB:10,cutR:10,cutL:10,repeat:"stretch",borderStyle:"solid",hShadow:0,vShadow:0,blur:10,blurColor:"rgba(0, 0, 0, 1)"},title:{border:{},label:{fontWeight:"",fontStyle:"",textDecoration:"",angle:0,startColor:"rgba(30, 144, 255, 1)",endColor:"rgba(255, 0, 0, 1)"},link:{use:!1,inside:{},outside:{}},position:"top"},config:{importLibs:[],gisqBILibs:[],code:{enabled:!0,content:`
<template>
    <div ref="my-container" class="mydiv">
        <h1 class="title">{{datasetTitle}}</h1>
        <el-table :data="tableData" style="width: 100%" :max-height="this.widgetInfo.attr.hh">
            <el-table-column v-for="col in columns" :prop="col.name" :label="col.label" :width="col.width||100">
            </el-table-column>
            <el-table-column fixed="right">
                <template slot-scope="scope">
                    <el-button type="text" size="mini" @click="handleClick(scope.row)">\u67E5\u770B</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    // import \u65E0\u6548\uFF0C\u8BF7\u4F7F\u7528\u5916\u90E8\u5F15\u7528js

export default {
 // props: widgetInfo \u5FC5\u987B\u8BBE\u7F6E\uFF0C\u5185\u7F6E\u4E1A\u52A1\u9700\u8981\u4F7F\u7528
    props: ['widgetInfo', 'gisqbiLib'],
    mounted() {

    },
    computed: {
        datasetTitle() {
            // \u8BFB\u53D6\u6570\u636E\u96C6\u540D\u79F0
            return this.widgetInfo.dataset.type == 'static' ? '\u9759\u6001\u6570\u636E' : this.dataset.dataSetName;
        },
        tableData() {
            // \u4ECEdataset \u4E2D\u8BFB\u53D6\u6570\u636E
            if (this.dataset.source) {
                return this.dataset.source.map(ss => {
                    let data = {};
                    this.dataset.dimensions.forEach((d, index) => {
                        data[d] = ss[index];
                    });

                    return data;
                })
            } else {
                return [];
            }
        },
        columns() {
            // \u4ECE\u6570\u636E\u96C6\u914D\u7F6E\u4E2D\u8BFB\u53D6\u6570\u636E\u5217
            if (this.dataset.dimensionsAlias) {
                return this.dataset.dimensionsAlias.map(d=> {
                    return {
                        label: d.alias || d.name,
                        name: d.name
                    }
                })
            } else {
                return [];
            }
        },
      dataset() {
          // \u8BFB\u53D6\u6570\u636E\u914D\u7F6E
          return this.widgetInfo.dataset &&
           this.widgetInfo.dataset.type ?
           this.widgetInfo.dataset[this.widgetInfo.dataset.type] : {};
      }
    },
    data() {
        return {};
    },
    methods: {
        handleClick(row) {
            this.$message({
                type: 'info',
                message: row
            })
            // \u53D1\u9001\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u8BF7\u67E5\u770B \u3010\u4EA4\u4E92 / \u53D1\u9001\u4E8B\u4EF6 / \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7BA1\u7406\u3011
            this.$emit(this, 'row-click', row);
        }
    }
}
<\/script>

<style>
    /*\u9ED8\u8BA4scope\uFF0C\u5982\u679C\u9700\u8981\u6CE8\u518C\u5168\u5C40\u6837\u5F0F\uFF0C\u8BF7\u4F7F\u7528\u5916\u90E8\u5F15\u7528css */
    .mydiv {
        height: 100%;
        background-color: #F1F1F1;

    }

    .title {
        font-weight: bold;
        padding: 5px;
        font-size: 20px;
    }
</style>
                        `}},dataset:{type:"static",static:{encode:{paramsList:[]},dimensions:["region","column_1655960737364"],dimensionsAlias:[{name:"region",alias:"\u5730\u533A"},{name:"column_1655960737364",alias:"\u5730\u533A"}],columnList:[{index:0,aggType:null,name:"region"},{index:1,aggType:null,name:"column_1655960737364"}],source:[["\u65B0\u57ED\u9547","\u65B0\u57ED\u9547"],["\u5E7F\u9648\u9547","\u5E7F\u9648\u9547"],["\u65B0\u4ED3\u9547","\u65B0\u4ED3\u9547"],["\u72EC\u5C71\u6E2F\u9547","\u72EC\u5C71\u6E2F\u9547"],["\u6797\u57ED\u9547","\u6797\u57ED\u9547"],["\u4E4D\u6D66\u9547","\u4E4D\u6D66\u9547"],["\u949F\u57ED\u8857\u9053","\u949F\u57ED\u8857\u9053"],["\u5F53\u6E56\u8857\u9053","\u5F53\u6E56\u8857\u9053"],["\u66F9\u6865\u8857\u9053","\u66F9\u6865\u8857\u9053"]],query:{}},dynamic:{encode:{paramsList:[{key:"params0",val:"title"}]},dimensions:["title","url"],dimensionsAlias:[{name:"title",alias:"\u6807\u9898\u4E00",type:"VARCHAR"},{name:"url",alias:null,type:"VARCHAR"}],columnList:[{index:0,aggType:null,name:"title"},{index:1,aggType:null,name:"url"}],source:[["111","2222"]],openUnLoad:!1,query:{params:[{name:"t1",type:"",defaultVal:"111"},{name:"t2",type:"",defaultVal:"2222"}],page:{enabled:!1,pageNum:1,pageSize:10},orders:[]},dataSetId:"61a06bbd14dd4ca480b60b253c07da97",dataSetName:"\u53CC\u6807\u9898",total:1},local:{encode:{paramsList:[]},dataLocalId:null,dataLocalName:null,dimensions:[],autoUpdate:!1,dimensionsAlias:[],columnList:[],source:[]}},action:{sendOut:{actionList:[{code:"row-click",name:"\u70B9\u51FB\u884C[\u81EA\u5B9A\u4E49]",enabled:!0,isCustom:!0,params:{row:""}}]},receive:{},sendOutCustom:[{name:"\u70B9\u51FB\u884C",code:"row-click",scriptEnabled:!1,params:[{name:"row",value:""}]}],receiveCustom:[]},name:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)_y33z",typeId:"1a7d55407e0a44418a708f2721452969",typeName:"custom-develop",widgetType:"other",widgetGroup:"other",typeTitle:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)",widgetSource:null,widgetSourceDebug:null,id:"46a0ac40-ee1d-11ec-9aba-5b7e761af8bd",permissions:[{label:"\u663E\u793A",code:"show",enabled:!1,roleHide:!1,roles:[]}]}},{name:"\u4E1A\u52A1\u4EA4\u4E92\u793A\u4F8B",code:"action",desc:"\u4F7F\u7528ElementUI\u7684\u8F93\u5165\u6846\u7B49\u7EC4\u4EF6\u8F93\u5165\u6570\u636E\uFF0C\u5728\u6309\u94AE\u4E2D\u8C03\u7528ajax\uFF0C\u5E76\u5728\u53D1\u9001\u8FD4\u56DE\u7ED3\u679C\u5230\u5916\u90E8",widgetInfo:{attr:{forceAbsolute:!1,x:18,lockedX:!1,y:61,lockedY:!1,z:501,w:454,lockedW:!1,h:485,lockedH:!1,lockedScale:!1,hh:485,hide:!1,buttonHideColor:"rgba(0, 0, 0, 1)",deg:0,opacity:1,predefineColoursScheme:"default",widgetW:454,backgroundColor:"rgba(236, 240, 241, 1)"},border:{hide:!1,type:!1,overflowShow:!1,widthT:0,widthB:0,widthR:0,widthL:0,styleT:"solid",styleB:"solid",styleR:"solid",styleL:"solid",colorT:"rgba(30, 144, 255, 1)",colorB:"rgba(30, 144, 255, 1)",colorR:"rgba(30, 144, 255, 1)",colorL:"rgba(30, 144, 255, 1)",radiusTL:0,radiusTR:0,radiusBL:0,radiusBR:0,borderImage:"",breadthT:0,breadthB:0,breadthR:0,breadthL:0,cutT:10,cutB:10,cutR:10,cutL:10,repeat:"stretch",borderStyle:"solid",hShadow:0,vShadow:0,blur:10,blurColor:"rgba(0, 0, 0, 1)"},title:{border:{},label:{fontWeight:"",fontStyle:"",textDecoration:"",angle:0,startColor:"rgba(30, 144, 255, 1)",endColor:"rgba(255, 0, 0, 1)"},link:{use:!1,inside:{},outside:{}},position:"top"},config:{importLibs:[],gisqBILibs:[],code:{enabled:!0,content:`
<template>
    <div ref="my-container" class="mydiv">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
            style="width:100%;max-width:400px;" size="mini">
            <el-form-item label="\u6D3B\u52A8\u540D\u79F0" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="\u6D3B\u52A8\u533A\u57DF" prop="region">
                <el-select v-model="ruleForm.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
                    <el-option label="\u533A\u57DF\u4E00" value="shanghai"></el-option>
                    <el-option label="\u533A\u57DF\u4E8C" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="\u6D3B\u52A8\u65F6\u95F4" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="\u9009\u62E9\u65E5\u671F" v-model="ruleForm.date1" style="width: 100%;">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="\u9009\u62E9\u65F6\u95F4" v-model="ruleForm.date2" style="width: 100%;">
                        </el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="\u5373\u65F6\u914D\u9001" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="\u6D3B\u52A8\u6027\u8D28" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type"></el-checkbox>
                    <el-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type"></el-checkbox>
                    <el-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type"></el-checkbox>
                    <el-checkbox label="\u5355\u7EAF\u54C1\u724C\u66DD\u5149" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="\u7279\u6B8A\u8D44\u6E90" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"></el-radio>
                    <el-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="\u6D3B\u52A8\u5F62\u5F0F" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">\u7ACB\u5373\u521B\u5EFA</el-button>
                <el-button @click="resetForm('ruleForm')">\u91CD\u7F6E</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    // import \u65E0\u6548\uFF0C\u8BF7\u4F7F\u7528\u5916\u90E8\u5F15\u7528js

export default {
 // props: widgetInfo \u5FC5\u987B\u8BBE\u7F6E\uFF0C\u5185\u7F6E\u4E1A\u52A1\u9700\u8981\u4F7F\u7528
    props: ['widgetInfo', 'gisqbiLib'],
    mounted() {
        // \u6CE8\u518C\u52A0\u8F7D\u4E8B\u4EF6\uFF08\u8BF7\u67E5\u770B\u3010\u4EA4\u4E92 / \u63A5\u6536\u4E8B\u4EF6 / \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7BA1\u7406\u3011\uFF09
        let _this = this;
        this.$event.on(this, "loaded", (params) => {
            if (params && params.id) {
                _this.loadData(params.id);
            }
        });

        // \u9ED8\u8BA4\u8F7D\u5165\u4E00\u6761\u6570\u636E
        this.loadData("0")
    },
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    {required: true, message: '\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0', trigger: 'blur'},
                    {min: 3, max: 5, message: '\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26', trigger: 'blur'}
                ],
                region: [
                    {required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF', trigger: 'change'}
                ],
                date1: [
                    {type: 'date', required: true, message: '\u8BF7\u9009\u62E9\u65E5\u671F', trigger: 'change'}
                ],
                date2: [
                    {type: 'date', required: true, message: '\u8BF7\u9009\u62E9\u65F6\u95F4', trigger: 'change'}
                ],
                type: [
                    {type: 'array', required: true, message: '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28', trigger: 'change'}
                ],
                resource: [
                    {required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90', trigger: 'change'}
                ],
                desc: [
                    {required: true, message: '\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F', trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        loadData(id) {
          debugger;
            if (id) {
                let _this = this;
                // $http \u662F axios \u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u53C2\u8003\uFF1Ahttps://www.axios-http.cn/docs/post_example
                this.$http.get("./api/sys/license?id=" + id).then(resp => {
                    if (resp.status === 200) {
                        _this.ruleForm =  {
                            name: "name"+id,
                            region: '',
                            date1: '',
                            date2: '',
                            delivery: false,
                            type: [],
                            resource: '',
                            desc: ''
                        }
                    } else {
                        _this.$message({
                            type: 'error',
                            message: resp.data.message || "\u8F7D\u5165\u5931\u8D25"
                        })
                    }
                }).catch(err => {
                    _this.$message({
                        type: 'error',
                        message: err.message || "\u8F7D\u5165\u5931\u8D25"
                    })
                })
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {

                    const loading = this.$loading({
                        lock: true,
                        text: '\u6570\u636E\u4FDD\u5B58\u4E2D...',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });

                    // \u907F\u514D\u56DE\u8C03\u51FD\u6570\u4E2D\u83B7\u53D6\u4E0D\u5230this\uFF0C\u4F7F\u7528\u4E34\u65F6\u53D8\u91CF\u63A5\u6536
                    let _this = this;
                    this.$http.post("",
                        this.ruleForm
                    ).then(resp => {
                        loading.close();

                        if (resp.status === 200) {
                            // \u5F39\u7A97\u63D0\u9192
                            _this.$message({
                                type: 'success',
                                message: resp.data.message
                            });

                            // \u53D1\u9001\u4FDD\u5B58\u5B8C\u6210\u4E8B\u4EF6\uFF08\u8BF7\u67E5\u770B \u3010\u4EA4\u4E92 / \u53D1\u9001\u4E8B\u4EF6 / \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7BA1\u7406\u3011\uFF09
                            _this.emit(_this, 'save', {data: resp});
                        } else {
                            _this.$message({
                                type: 'error',
                                message: resp.data.message
                            });
                        }
                    }).catch(err => {
                        loading.close();
                        _this.$message({
                            type: 'error',
                            message: err.message
                        });
                    })

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
<\/script>

<style>
    /*\u9ED8\u8BA4scope\uFF0C\u5982\u679C\u9700\u8981\u6CE8\u518C\u5168\u5C40\u6837\u5F0F\uFF0C\u8BF7\u4F7F\u7528\u5916\u90E8\u5F15\u7528css */
</style>
                        `}},dataset:{type:"static",static:{encode:{paramsList:[]},dimensions:["region","column_1655960737364"],dimensionsAlias:[{name:"region",alias:"\u5730\u533A"},{name:"column_1655960737364",alias:"\u5730\u533A"}],columnList:[{index:0,aggType:null,name:"region"},{index:1,aggType:null,name:"column_1655960737364"}],source:[["\u65B0\u57ED\u9547","\u65B0\u57ED\u9547"],["\u5E7F\u9648\u9547","\u5E7F\u9648\u9547"],["\u65B0\u4ED3\u9547","\u65B0\u4ED3\u9547"],["\u72EC\u5C71\u6E2F\u9547","\u72EC\u5C71\u6E2F\u9547"],["\u6797\u57ED\u9547","\u6797\u57ED\u9547"],["\u4E4D\u6D66\u9547","\u4E4D\u6D66\u9547"],["\u949F\u57ED\u8857\u9053","\u949F\u57ED\u8857\u9053"],["\u5F53\u6E56\u8857\u9053","\u5F53\u6E56\u8857\u9053"],["\u66F9\u6865\u8857\u9053","\u66F9\u6865\u8857\u9053"]],query:{}},dynamic:{encode:{paramsList:[{key:"params0",val:"title"}]},dimensions:["title","url"],dimensionsAlias:[{name:"title",alias:"\u6807\u9898\u4E00",type:"VARCHAR"},{name:"url",alias:null,type:"VARCHAR"}],columnList:[{index:0,aggType:null,name:"title"},{index:1,aggType:null,name:"url"}],source:[["111","2222"]],openUnLoad:!1,query:{params:[{name:"t1",type:"",defaultVal:"111"},{name:"t2",type:"",defaultVal:"2222"}],page:{enabled:!1,pageNum:1,pageSize:10},orders:[]},dataSetId:"61a06bbd14dd4ca480b60b253c07da97",dataSetName:"\u53CC\u6807\u9898",total:1},local:{encode:{paramsList:[]},dataLocalId:null,dataLocalName:null,dimensions:[],autoUpdate:!1,dimensionsAlias:[],columnList:[],source:[]}},action:{sendOut:{actionList:[{code:"saved",name:"\u4FDD\u5B58\u6210\u529F[\u81EA\u5B9A\u4E49]",enabled:!0,isCustom:!0,params:{data:""}}]},receive:{load:{code:"load",name:"\u8F7D\u5165\u6570\u636E[\u81EA\u5B9A\u4E49]",enabled:!0,isCustom:!0,params:{},replaceList:[]}},sendOutCustom:[{name:"\u4FDD\u5B58\u6210\u529F",code:"saved",scriptEnabled:!1,params:[{name:"data",value:""}]}],receiveCustom:[{name:"\u8F7D\u5165\u6570\u636E",code:"load",scriptEnabled:!1,params:[]}]},name:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)_y33z",typeId:"1a7d55407e0a44418a708f2721452969",typeName:"custom-develop",widgetType:"other",widgetGroup:"other",typeTitle:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)",widgetSource:null,widgetSourceDebug:null,id:"46a0ac40-ee1d-11ec-9aba-5b7e761af8bd",permissions:[{label:"\u663E\u793A",code:"show",enabled:!1,roleHide:!1,roles:[]}]}},{name:"Echarts \u56FE\u6807\u793A\u4F8B",code:"echarts",desc:"\u4F7F\u7528Echarts\u4F9D\u8D56\u9879\uFF0C\u5B9E\u73B0\u4E00\u4E2AEcharts\u56FE\u8868\u7EC4\u4EF6",widgetInfo:{attr:{forceAbsolute:!1,x:29,lockedX:!1,y:198,lockedY:!1,z:501,w:420,lockedW:!1,h:404,lockedH:!1,lockedScale:!1,hh:404,hide:!1,buttonHideColor:"rgba(0, 0, 0, 1)",deg:0,opacity:1,predefineColoursScheme:"default",widgetW:420,backgroundColor:"rgba(236, 240, 241, 1)"},border:{hide:!1,type:!1,overflowShow:!1,widthT:0,widthB:0,widthR:0,widthL:0,styleT:"solid",styleB:"solid",styleR:"solid",styleL:"solid",colorT:"rgba(30, 144, 255, 1)",colorB:"rgba(30, 144, 255, 1)",colorR:"rgba(30, 144, 255, 1)",colorL:"rgba(30, 144, 255, 1)",radiusTL:0,radiusTR:0,radiusBL:0,radiusBR:0,borderImage:"",breadthT:0,breadthB:0,breadthR:0,breadthL:0,cutT:10,cutB:10,cutR:10,cutL:10,repeat:"stretch",borderStyle:"solid",hShadow:0,vShadow:0,blur:10,blurColor:"rgba(0, 0, 0, 1)"},title:{border:{},label:{fontWeight:"",fontStyle:"",textDecoration:"",angle:0,startColor:"rgba(30, 144, 255, 1)",endColor:"rgba(255, 0, 0, 1)"},link:{use:!1,inside:{},outside:{}},position:"top"},config:{importLibs:[],gisqBILibs:["Echarts"],code:{enabled:!0,content:`
<template>
    <div ref="ehcartContainer" class="mydiv" style="height:100%;width:100%;">

    </div>
</template>
<script>
// \u8FD9\u4E2A\u793A\u4F8B\u6765\u81EA\u4E8Eehcarts \u5B98\u65B9\uFF1A https://echarts.apache.org/examples/zh/editor.html?c=pie-parliament-transition
// \u53EA\u8FDB\u884C\u4E86\u6570\u636E\u5339\u914D
// \u9700\u8981\u6DFB\u52A0\u5185\u90E8\u5F15\u7528 Echarts

// import \u65E0\u6548\uFF0C\u8BF7\u4F7F\u7528\u5916\u90E8\u5F15\u7528js

export default {
 // props: widgetInfo \u5FC5\u987B\u8BBE\u7F6E\uFF0C\u5185\u7F6E\u4E1A\u52A1\u9700\u8981\u4F7F\u7528
    props: ['widgetInfo', 'gisqbiLib'],
    computed: {
        mydata() {
            // \u8BBE\u7F6E\u4E00\u4E0B\u9759\u6001\u6570\u636E\u5217\u540D
            this.widgetInfo.dataset.static.dimensions = ["name", "value"];
            // \u8C03\u7528\u5185\u90E8\u63A5\u53E3\uFF0C\u5C06bi\u683C\u5F0F\u7684\u6570\u636E\u8F6C\u4E3A\u5BF9\u8C61\u5217\u8868
            return this.mUtils.dataSet2DataList(this.widgetInfo.dataset);
        }
    },
    watch: {
        // \u7C7B\u4F3Cecharts\u8FD9\u79CD\uFF0C\u65E0\u6CD5\u63A5\u5165vue\u81EA\u52A8\u66F4\u65B0\u6570\u636E\u7684\u7EC4\u4EF6\uFF0C\u9700\u8981\u6DFB\u52A0 dataset \u7684 watch \u8FDB\u884C\u5237\u65B0
        // \u6216\u8005\u5728 reload \u65B9\u6CD5\u4E2D\u5904\u7406
        "widgetInfo.dataset": {
            deep: true,
            handler:function(dataset) {
                // \u66F4\u65B0\u6570\u636E\u540E\uFF0C\u5237\u65B0echarts\u6570\u636E
                if (this.myChart) {
                    // \u91CD\u65B0\u8BBE\u7F6E echarts \u6570\u636E
                    console.log('data refresh ')
                }
            }
        }
    },
    mounted() {
        this.myChart = this.gisqbiLib.Echarts.ECHARTS.init(this.$refs.ehcartContainer);
        this.getOption();
    },
    data() {
        return {
            myChart: null,
            interval: -1
        };
    },
    methods: {
        // \u91CD\u8F7D\u65B9\u6CD5\uFF0C\u5982\u679Cinfo\u6709\u6539\u53D8\uFF0Cbi\u4F1A\u4E3B\u52A8\u8C03\u7528  reload
        reload(widgetInfo) {
            // \u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528 computed \u7B49\u8BA1\u7B97\u5C5E\u6027
            console.log(widgetInfo)
        },
        // \u91CD\u7ED8\u65B9\u6CD5\uFF0C\u5982\u679C\u7EC4\u4EF6\u5927\u5C0F\u6539\u53D8\uFF0Cbi\u4F1A\u4E3B\u52A8\u8C03\u7528 resize \u65B9\u6CD5\uFF08\u4E0E\u770B\u677F/\u81EA\u9002\u5E94\u65B9\u5F0F\u6709\u5173,\u7B49\u6BD4\u7F29\u653E\u65F6\u4F1A\u7F29\u653E\u6574\u4E2A\u770B\u677F\uFF0C\u6240\u4EE5\u5E76\u4E0D\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF09
        resize() {
            if (this.myChart) {
                this.myCharts.resize();
            }
        },
        getOption() {
            let option = {};
            let data = this.mydata;
            const defaultPalette = [
                // '#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'
                '#5470c6',
                '#91cc75',
                '#fac858',
                '#ee6666',
                '#73c0de',
                '#3ba272',
                '#fc8452',
                '#9a60b4',
                '#ea7ccc'
            ];
            const radius = ['30%', '80%'];
            const pieOption = {
                series: [
                    {
                        type: 'pie',
                        id: 'distribution',
                        radius: radius,
                        label: {
                            show: false
                        },
                        universalTransition: true,
                        animationDurationUpdate: 1000,
                        data: this.mydata
                    }
                ]
            };
            const parliamentOption = (function () {
                let sum = data.reduce(function (sum, cur) {
                    return sum + (cur.value - 0);
                }, 0);
                let angles = [];
                let startAngle = -Math.PI / 2;
                let curAngle = startAngle;
                data.forEach(function (item) {
                    angles.push(curAngle);
                    curAngle += (item.value / sum) * Math.PI * 2;
                });
                angles.push(startAngle + Math.PI * 2);

                function parliamentLayout(startAngle, endAngle, totalAngle, r0, r1, size) {
                    let rowsCount = Math.ceil((r1 - r0) / size);
                    let points = [];
                    let r = r0;
                    for (let i = 0; i < rowsCount; i++) {
                        // Recalculate size
                        let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
                        let newSize = (totalAngle * r) / totalRingSeatsNumber;
                        for (
                            let k = Math.floor((startAngle * r) / newSize) * newSize;
                            k < Math.floor((endAngle * r) / newSize) * newSize - 1e-6;
                            k += newSize
                        ) {
                            let angle = k / r;
                            let x = Math.cos(angle) * r;
                            let y = Math.sin(angle) * r;
                            points.push([x, y]);
                        }
                        r += size;
                    }
                    return points;
                }

                return {
                    series: {
                        type: 'custom',
                        id: 'distribution',
                        data: data,
                        coordinateSystem: undefined,
                        universalTransition: true,
                        animationDurationUpdate: 1000,
                        renderItem: function (params, api) {
                            var idx = params.dataIndex;
                            var viewSize = Math.min(api.getWidth(), api.getHeight());
                            var r0 = ((parseFloat(radius[0]) / 100) * viewSize) / 2;
                            var r1 = ((parseFloat(radius[1]) / 100) * viewSize) / 2;
                            var cx = api.getWidth() * 0.5;
                            var cy = api.getHeight() * 0.5;
                            var size = viewSize / 50;
                            var points = parliamentLayout(
                                angles[idx],
                                angles[idx + 1],
                                Math.PI * 2,
                                r0,
                                r1,
                                size + 3
                            );
                            return {
                                type: 'group',
                                children: points.map(function (pt) {
                                    return {
                                        type: 'circle',
                                        autoBatch: true,
                                        shape: {
                                            cx: cx + pt[0],
                                            cy: cy + pt[1],
                                            r: size / 2
                                        },
                                        style: {
                                            fill: defaultPalette[idx % defaultPalette.length]
                                        }
                                    };
                                })
                            };
                        }
                    }
                };
            })();
            let currentOption = (option = pieOption);
            if (this.interval > -1) {
                clearInterval(this.interval);
            }
            let _this = this;
            this.interval = setInterval(function () {
                currentOption = currentOption === pieOption ? parliamentOption : pieOption;
                _this.myChart.setOption(currentOption);
            }, 2000);
        }
    }
}
<\/script>

<style>
    /*\u9ED8\u8BA4scope\uFF0C\u5982\u679C\u9700\u8981\u6CE8\u518C\u5168\u5C40\u6837\u5F0F\uFF0C\u8BF7\u4F7F\u7528\u5916\u90E8\u5F15\u7528css */
</style>
                        `}},dataset:{type:"static",static:{encode:{paramsList:[]},dimensions:["region","column_1655960737364"],dimensionsAlias:[{name:"region",alias:"name"},{name:"column_1655960737364",alias:"value"}],columnList:[{index:0,aggType:null,name:"region"},{index:1,aggType:null,name:"column_1655960737364"}],source:[["\u65B0\u57ED\u9547","800"],["\u5E7F\u9648\u9547","635"],["\u65B0\u4ED3\u9547","580"],["\u72EC\u5C71\u6E2F\u9547","484"],["\u6797\u57ED\u9547","300"],["\u4E4D\u6D66\u9547","200"],["\u949F\u57ED\u8857\u9053","320"],["\u5F53\u6E56\u8857\u9053","100"],["\u66F9\u6865\u8857\u9053","5"]],query:{}},dynamic:{encode:{paramsList:[{key:"params0",val:"title"}]},dimensions:["title","url"],dimensionsAlias:[{name:"title",alias:"\u6807\u9898\u4E00",type:"VARCHAR"},{name:"url",alias:null,type:"VARCHAR"}],columnList:[{index:0,aggType:null,name:"title"},{index:1,aggType:null,name:"url"}],source:[["111","2222"]],openUnLoad:!1,query:{params:[{name:"t1",type:"",defaultVal:"111"},{name:"t2",type:"",defaultVal:"2222"}],page:{enabled:!1,pageNum:1,pageSize:10},orders:[]},dataSetId:"61a06bbd14dd4ca480b60b253c07da97",dataSetName:"\u53CC\u6807\u9898",total:1},local:{encode:{paramsList:[]},dataLocalId:null,dataLocalName:null,dimensions:[],autoUpdate:!1,dimensionsAlias:[],columnList:[],source:[]}},action:{sendOut:{actionList:[{code:"saved",name:"\u4FDD\u5B58\u6210\u529F[\u81EA\u5B9A\u4E49]",enabled:!0,isCustom:!0,params:{data:""}}]},receive:{load:{code:"load",name:"\u8F7D\u5165\u6570\u636E[\u81EA\u5B9A\u4E49]",enabled:!0,isCustom:!0,params:{},replaceList:[]}},sendOutCustom:[{name:"\u4FDD\u5B58\u6210\u529F",code:"saved",scriptEnabled:!1,params:[{name:"data",value:""}]}],receiveCustom:[{name:"\u8F7D\u5165\u6570\u636E",code:"load",scriptEnabled:!1,params:[]}]},name:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)_y33z",typeId:"1a7d55407e0a44418a708f2721452969",typeName:"custom-develop",widgetType:"other",widgetGroup:"other",typeTitle:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)",widgetSource:null,widgetSourceDebug:null,id:"46a0ac40-ee1d-11ec-9aba-5b7e761af8bd",permissions:[{label:"\u663E\u793A",code:"show",enabled:!1,roleHide:!1,roles:[]}]}},{name:"GIS \u7EC4\u4EF6\u793A\u4F8B",code:"gis",desc:"\u4F7F\u7528Openlayer\u4F9D\u8D56\u9879\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u5728\u5730\u56FE\u4E0A\u7ED8\u5236\u4E00\u4E2Adiv\u548C\u4E00\u4E2A\u9762\u7684\u793A\u4F8B",widgetInfo:{attr:{forceAbsolute:!1,x:913,lockedX:!1,y:129,lockedY:!1,z:501,w:44,lockedW:!1,h:42,lockedH:!1,lockedScale:!1,hh:42,hide:!1,buttonHideColor:"rgba(0, 0, 0, 1)",deg:0,opacity:1,predefineColoursScheme:"default",widgetW:44},border:{hide:!1,type:!1,overflowShow:!1,widthT:0,widthB:0,widthR:0,widthL:0,styleT:"solid",styleB:"solid",styleR:"solid",styleL:"solid",colorT:"rgba(30, 144, 255, 1)",colorB:"rgba(30, 144, 255, 1)",colorR:"rgba(30, 144, 255, 1)",colorL:"rgba(30, 144, 255, 1)",radiusTL:0,radiusTR:0,radiusBL:0,radiusBR:0,borderImage:"",breadthT:0,breadthB:0,breadthR:0,breadthL:0,cutT:10,cutB:10,cutR:10,cutL:10,repeat:"stretch",borderStyle:"solid",hShadow:0,vShadow:0,blur:10,blurColor:"rgba(0, 0, 0, 1)"},title:{border:{},label:{fontWeight:"",fontStyle:"",textDecoration:"",angle:0,startColor:"rgba(30, 144, 255, 1)",endColor:"rgba(255, 0, 0, 1)"},link:{use:!1,inside:{},outside:{}},position:"top"},config:{sample:"sample",importLibs:[],gisqBILibs:["Openlayer"],code:{enabled:!0,content:`
<template>
    <div ref='test' style='background-color:red'>
        \u6D4B\u8BD5
    </div>
</template>
<script>

    /* \u6CE8\u610F\uFF01 \u4F7F\u7528\u8BE5\u793A\u4F8B\uFF0C\u9700\u8981\u9996\u5148\u5728\u770B\u677F\u4E0A\u62D6\u5165[\u5730\u56FE/GIS\u5E95\u56FE\u5C55\u793A\u7C7B/\u5730\u56FE\u7EC4\u4EF6]\uFF0C\u5E76\u4FEE\u6539\u4E0B\u9762\u8FD9\u4E00\u884C\u7684\u7EC4\u4EF6id\uFF01 */
    /* \u9700\u8981\u5F00\u542F\u5185\u90E8\u5F15\u7528 OpenLayer */

    // import \u65E0\u6548\uFF0C\u8BF7\u4F7F\u7528\u5916\u90E8\u5F15\u7528js

    export default {
    props: ['widgetInfo', 'gisqbiLib'],
    mounted() {
         // \u4FEE\u6539\u6B64\u5904\uFF1A \u5C06id \u4FEE\u6539\u4E3A\u5730\u56FE\u7EC4\u4EF6\u7684\u7EC4\u4EF6id
         this.mapLoaded('2a2bf2a0-f5e2-11ec-9918-b1706d1b9647', this.init);
    },
    methods:{
        /**
         * \u4FDD\u8BC1\u5728Map\u521B\u5EFA\u5B8C\u6BD5\u540E\u6267\u884C\u5BF9\u5E94\u64CD\u4F5C(\u8FD9\u6BB5\u4EE3\u7801\u53EF\u590D\u7528)
         * @param mapId\u770B\u677F\u5185\u5730\u56FE\u7EC4\u4EF6\u7684ID, callback\u6267\u884C\u7684\u64CD\u505A
         */
        mapLoaded(mapId, callback){
            //\u5982\u679CMap\u5BF9\u8C61\u5DF2\u7ECF\u521B\u5EFA \u76F4\u63A5\u6267\u884C\uFF08id\u4E3A\u5730\u56FE\u7EC4\u4EF6\u7684id\uFF09
            let mapObj = this.getWidgetObject(mapId)
            if (mapObj && mapObj.getMap()){
                console.log('mapObj\u5B58\u5728', mapObj.getMap())
                callback(mapObj.getMap())
            } else {
                //\u5982\u679CMap\u5BF9\u8C61\u672A\u521B\u5EFA,\u5219\u521B\u5EFA\u4E00\u4E2A\u63A5\u6536\u4E8B\u4EF6\uFF0C\u63A5\u6536\u5730\u56FE\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\u5B8C\u6BD5\u53D1\u9001\u4E8B\u4EF6
                this.$event.on(this, "mapLoaded", (data) => {
                    console.log('mapLoaded', data.map)
                    callback(data.map)
                });
            }

        },
        //\u63D0\u4F9B2\u4E2A\u5173\u4E8E\u5730\u56FE\u7684\u793A\u4F8B\uFF0C\u66F4\u591A\u793A\u4F8B\u53EF\u4EE5\u53BBopenlayer\u5B98\u7F51\uFF08\u6CE8\u610F\u5305\u7684\u5F15\u5165\u683C\u5F0F\u5373\u53EF\uFF09
        init(map){
            //\u83B7\u53D6OL\u7C7B \u4EE5Overlay\u4E3A\u4F8B Overlay\u53EF\u4EE5\u7ED1\u5B9A\u524D\u7AEF\u8282\u70B9\u5230\u5730\u56FE\u7684\u67D0\u4E2A\u5750\u6807\u4E0A
            let ol = this.gisqbiLib.Openlayer.OPENLAYER
            let Overlay = ol.Overlay
            var popup = new Overlay({
                element: this.$refs.test
            });
            popup.setPosition([120.1448,30.2472]);
            map.addOverlay(popup)

            //\u4EE5\u65B0\u589E\u9762\u56FE\u5F62\u4E3A\u4F8B
            let geojson = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[120.14171149213755,30.245964837322425],[120.14091343015704,30.242097301646567],[120.14754349131564,30.240869513011486],[120.15294576805445,30.246517338203695],[120.14926239793392,30.24934125501508],[120.14171149213755,30.245964837322425]]]},"properties":{"tempSelected":true}}],"crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::4490"}}}
            //geojson\u8F6Col\u5BF9\u8C61\uFF0C\u56E0\u4E3Ageojson\u7ED9\u7684\u662FFeatureCollection\uFF0C\u6240\u4EE5\u8FD4\u56DE\u7684\u662F\u6570\u7EC4
            var features = new ol.format.GeoJSON().readFeatures(geojson)
            //\u6DFB\u52A0\u5230\u5730\u56FE
            map.getLayerById('drawLayer').getSource().addFeature(features[0])
            //\u4FEE\u6539\u6837\u5F0F
            let style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 1.25,
                })
            })
            features[0].setStyle(style)
        }
    }

}
<\/script>
                        `}},dataset:{type:"static",static:{encode:{paramsList:[]},dimensions:["region"],dimensionsAlias:[{name:"region",alias:"\u5730\u533A",type:"VARCHAR2"}],columnList:[{index:0,aggType:null,name:"region"}],source:[["\u65B0\u57ED\u9547"],["\u5E7F\u9648\u9547"],["\u65B0\u4ED3\u9547"],["\u72EC\u5C71\u6E2F\u9547"],["\u6797\u57ED\u9547"],["\u4E4D\u6D66\u9547"],["\u949F\u57ED\u8857\u9053"],["\u5F53\u6E56\u8857\u9053"],["\u66F9\u6865\u8857\u9053"]],query:{}},dynamic:{encode:{paramsList:[]},dimensions:[],dimensionsAlias:[],columnList:[],source:[],openUnLoad:!1},local:{encode:{paramsList:[]},dataLocalId:null,dataLocalName:null,dimensions:[],autoUpdate:!1,dimensionsAlias:[],columnList:[],source:[]}},action:{sendOut:{actionList:[]},receive:{mapLoaded:{code:"mapLoaded",name:"mapLoaded[\u81EA\u5B9A\u4E49]",enabled:!0,isCustom:!0,params:{},replaceList:[[["2a2bf2a0-f5e2-11ec-9918-b1706d1b9647","mapConfiged_2a2bf2a0-f5e2-11ec-9918-b1706d1b9647","mapConfiged_2a2bf2a0-f5e2-11ec-9918-b1706d1b9647|map"]]]}},receiveCustom:[{name:"mapLoaded",code:"mapLoaded",scriptEnabled:!1}]},name:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)_kojz",typeId:"1a7d55407e0a44418a708f2721452969",typeName:"custom-develop",widgetType:"other",widgetGroup:"other",typeTitle:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6(Vue)",widgetSource:null,widgetSourceDebug:null,id:"46767d70-f5bc-11ec-a937-29c081cce875",permissions:[{label:"\u663E\u793A",code:"show",enabled:!1,roleHide:!1,roles:[]}]}}]},p=i(229048),u={name:"custom-develop-style",components:{CommonCustomScript:m.default,CustomDevelop:p.default,MyMonacoEditor:()=>Promise.resolve().then(i.bind(i,980424)),SettingScreenResource:d.Z},props:["currentWidget"],mixins:[c.j],data(){return{activeNames:"demo",gisqBICommonLibs:[{name:"ElementUI",label:"ElementUI",checked:!0,disabled:!0,desc:"ElementUI \u662F\u4E00\u5957\u5E38\u7528\u7684Vue\u7EC4\u4EF6\u5E93\u3002<br/> \u53EF\u76F4\u63A5\u5728template\u4E2D\u4F7F\u7528\uFF0C\u5982 < el-table>< /el-table>\u3002"}],gisqBILibs:[{name:"Echarts",label:"Echarts",checked:!1,disabled:!1,desc:"Echarts \u662F\u4E00\u5957\u5E38\u7528\u7684\u56FE\u8868\u7EC4\u4EF6\u5E93\u3002<br/> \u53EF\u76F4\u63A5\u5728html\u4E2D\u4F7F\u7528<el-input>\u7B49\u76F8\u5173\u7EC4\u4EF6\u3002"},{name:"Openlayer",label:"Openlayer",checked:!1,disabled:!1,desc:"Openlayer \u662F\u5730\u56FE\u7684\u57FA\u672C\u6846\u67B6\u5305,\u7248\u672CV5.3.0\u3002<br/> \u53EF\u4EE5\u8C03\u7528\u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\u81EA\u5B9A\u4E49\u529F\u80FD\u3002"}],templates:s.templates,globalEditor:this.$$global_editor,templateDialogVisible:!1,currentTemplate:{widgetInfo:{config:{code:{content:""}}}}}},computed:{options(){const l=this.currentWidget.config&&this.currentWidget.config.sample?this.currentWidget.config.sample:"sample";let e=s.templates.findIndex(a=>a.code==l);const t=s.templates[e==-1?0:e];return{attribute_enable:"enabled",attribute_script_content:"content",title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",script_option:{language:"html,javascript,css"},script_examples:"<!-- \u5F53\u524D\uFF1A"+t.name+` -->\r
`+t.widgetInfo.config.code.content}}},mounted(){this.dialogWidth=window.innerWidth-170+"px",this.divH=window.innerHeight-180},updated(){this.currentWidget.config.code&&this.currentWidget.config.code.content||this.$message.info("\u7EC4\u4EF6\u4EE3\u7801\u4E3A\u7A7A\uFF0C\u8BF7\u5148\u67E5\u770B \u7EC4\u4EF6\u793A\u4F8B \u5E76\u5E94\u7528\u6A21\u677F")},methods:{getParamsList(){let l=this.currentWidget.dataset[this.currentWidget.dataset.type].encode.paramsList;l.length>0&&(this.paramsList="",l.forEach(e=>{this.paramsList+=e.key+" "}))},cancel(){this.dialogVisible=!1,this.$refs.scriptContent.setValue("")},confirm(){this.dialogVisible=!1,this.getConfigData()},scriptChange(){this.getConfigData()},afterEnter(){this.$refs.sampleCode.initEditor()},openSourceSelector(){},handleClickTemplate(l){this.currentTemplate=l,this.templateDialogVisible=!0},setTemplate(){this.$confirm("\u4F7F\u7528\u8BE5\u6A21\u677F\u4F1A\u8986\u76D6\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u914D\u7F6E\uFF0C\u662F\u5426\u4F7F\u7528\u8BE5\u6A21\u677F?").then(l=>{l=="confirm"&&(this.currentWidget.config=JSON.parse(JSON.stringify(this.currentTemplate.widgetInfo.config)),this.currentWidget.action=JSON.parse(JSON.stringify(this.currentTemplate.widgetInfo.action)),this.currentWidget.dataset=JSON.parse(JSON.stringify(this.currentTemplate.widgetInfo.dataset)),this.currentWidget.config.sample=this.currentTemplate.code,this.getConfigData())})}}},g=u,h=i(768141),f=(0,h.Z)(g,r,n,!1,null,"a2e714c4",null),b=f.exports}}]);
