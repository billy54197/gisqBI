"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[56155],{856155:function(v,s,l){l.r(s),l.d(s,{default:function(){return m}});var r=function(){var t=this,n=t._self._c;return n("div",[n("el-form",{ref:"form",attrs:{size:"mini","label-width":"70px","label-position":"right",model:t.currentWidget.dataset}},[n("el-form-item",{attrs:{label:"\u6570\u636E\u7C7B\u578B"}},[n("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"},on:{change:t.changeDatasetType},model:{value:t.currentWidget.dataset.type,callback:function(a){t.$set(t.currentWidget.dataset,"type",a)},expression:"currentWidget.dataset.type"}},t._l(this.$$global_editor.dataSourcTypeList3,function(a){return n("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)],1),n("el-form-item",{attrs:{label:"\u6EDA\u52A8\u5185\u5BB9"}},[n("el-tooltip",{attrs:{content:"\u6DFB\u52A0\u5185\u5BB9","open-delay":1e3,effect:"dark",placement:"top"}},[n("el-button",{staticClass:"el-icon-plus",staticStyle:{color:"#13CE66","margin-left":"6px",padding:"3px 0",width:"15px",height:"15px"},attrs:{size:"small",type:"text"},on:{click:function(a){return t.addContent()}}})],1)],1),t._l(t.currentWidget.config.content,function(a,x){return n("div",{key:a.id},[n("template",{slot:"title"},[n("div",{staticClass:"my-title"},[t._v(t._s("\u5185\u5BB9\uFF1A"+a.lable))])]),n("el-form-item",{attrs:{label:"\u5185\u5BB9"}},[n("el-select",{staticStyle:{width:"160px"},attrs:{clearable:"",size:"mini",placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9\u6620\u5C04\u7684\u5B57\u6BB5"},on:{change:t.getConfigData},model:{value:a.txt.text,callback:function(i){t.$set(a.txt,"text",i)},expression:"con.txt.text"}},t._l(t.currentWidget.dataset[t.currentWidget.dataset.type].dimensionsAlias,function(i){return n("el-option",{key:i.name,attrs:{label:i.alias!=""?i.alias:i.name,value:i.name}})}),1),n("el-tooltip",{attrs:{content:"\u79FB\u9664\u5185\u5BB9","open-delay":1e3,effect:"dark",placement:"top"}},[n("el-button",{staticStyle:{float:"right",color:"#f6061b","margin-right":"20px","margin-bottom":"2px",width:"15px",height:"15px"},attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(i){return t.deleteContent(a.id,x)}}})],1)],1)],2)}),n("setting-dataset",{ref:"settingDataset",attrs:{currentWidget:t.currentWidget},on:{getDataSetData:t.getConfigData,clearDynamicEncode:t.clearDynamicEncode}})],2)],1)},o=[],c=l(589908),d=l(846577),u=l(723400),g={name:"list-turns-data",props:["currentWidget"],components:{SettingDataset:c.Z},mixins:[u.j],methods:{changeDatasetType(){this.$refs.settingDataset.loadPreview(),this.clearDynamicEncode(),this.getConfigData()},clearDynamicEncode(){this.$$lib__.each(this.currentWidget.config.content,e=>{e.txt.text=""})},addContent(){let e=JSON.parse(JSON.stringify(d.Z.text.list.list_turns.config.content[0]));e.id=JSON.parse(JSON.stringify(this.uuid())),e.lable="\u65B0\u589E\u5185\u5BB9",e.txt.text="",this.currentWidget.config.content.push(JSON.parse(JSON.stringify(e))),this.getConfigData()},deleteContent(e,t){this.deleteContentClick(e),this.currentWidget.config.content.splice(t,1),this.getConfigData()},deleteContentClick(e){if(e&&e!="")for(let t=0;t<this.currentWidget.action.sendOut.actionList.length;t++)this.currentWidget.action.sendOut.actionList[t].contentId==e&&this.currentWidget.action.sendOut.actionList.splice(t,1)},uuid(){let e=[],t="0123456789abcdef";for(let a=0;a<36;a++)e[a]=t.substr(Math.floor(Math.random()*16),1);return e[14]="4",e[19]=t.substr(e[19]&3|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("").replace(/-/g,"")}}},p=g,f=l(768141),h=(0,f.Z)(p,r,o,!1,null,"2719f8ce",null),m=h.exports}}]);
