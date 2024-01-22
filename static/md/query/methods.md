##   this 

| 方法名    | 说明      | 参数                                                    |
| ------- |---------|-------------------------------------------------------|
|  multipleSelectionFun(widgetId)  |  查询列表：勾选的行数据  | (widgetId)widgetId为组件ID                               |
|  currentRowFun(widgetId)  |  查询列表：点击选中的当前行数据  | (widgetId)widgetId为组件ID                               |
|  globalParamsFun(widgetId)  |  查询列表：所有全局变量  | (widgetId)组件ID                                        |
|  getGlobalParamFun(key,widgetId)  |  查询列表：指定全局变量  | (key,widgetId)key为变量名，widgetId为组件ID                   |
|  enumInfoFun(widgetId)  | 查询列表：枚举信息                     | (widgetId)组件ID                                        |
|  datasetInfoFun(widgetId)  | 查询列表：数据集枚举信息                  | (widgetId)组件ID                                        |
|  requestDataInfoFun(widgetId)  | 查询列表：数据请求信息                   | (widgetId)组件ID                                        |
|  setViewGlobalParam(info,widgetId)  |  查询列表：设置全局变量信息  | (info,widgetId)全局变量信息{key:"",value:null},widgetId组件ID | 
|  openDialog(dialogId)  |  打开指定弹窗  | (dialogId)弹窗Id                                        |  
|  closeDialog(dialogId)  |  关闭指定弹窗  | (dialogId)弹窗Id                                        |  
|  $http  |  axios接口请求  |                                                       |  
|  getConditionControlObject(conditionId)  |  获取查询条件的对象实例  | (conditionId)查询条件ID                                   | 
|  getButtonObject(buttonId)  |  获取按钮的对象实例  | (buttonId)按钮ID                                        |  

**示例**
```javascript

// 查询列表设置多选之后，获取已经勾选的行数据方法
let multipleSelection = this.multipleSelectionFun(this.widgetId);
console.info(multipleSelection);
// 或者  直接使用内容属性
console.info(this.multipleSelection);

// 查询列表点击行之后，获取当前行数据方法
let currentRow = this.currentRowFun(this.widgetId);
console.info(currentRow);
// 或者  直接使用内容属性
console.info(this.currentRow);

// 获取所有全局变量this.widgetId为组件ID，即不在看板中使用时，组件ID为空
this.globalParamsFun(this.widgetId);
// 获取变量名为row的变量值（前提是先设置过，即用setViewGlobalParam方法设置）
this.getGlobalParamFun("row",this.widgetId);

// 设置变量名为row的全局变量，无则新增，有则更新，且value可为任意类型数据（getGlobalParamFun方法获取）
let info = {row:{id:123,name:"rowName",label:"rowLabel"}};
this.setViewGlobalParam(info,null);

// 打开和关闭指定弹窗
this.openDialog(dialogId); // dialogId未弹窗Id，可在弹窗配置表单中查找
this.closeDialog(dialogId); // dialogId未弹窗Id，可在弹窗配置表单中查找


// 获取枚举信息
let enumInfo = this.enumInfoFun(this.widgetId);
console.info(enumInfo);
// 获取数据集枚举信息
let datasetInfo = this.datasetInfoFun(this.widgetId);
console.info(datasetInfo);
// 获取数据请求的数据信息
let requestDataInfo = this.requestDataInfoFun(this.widgetId);
console.info(requestDataInfo);
// 更新数据请求的数据，可在回调函数中执行业务操作
this.getRequestData(requestDataId, (response) => {
    // 打印数据请求的数据
    console.info(response.data);
    // 打印数据请求的相关配置
    console.info(response.requestConfig);
});

// 执行一个post请求

let params = {
    ww: "www",
    aaa: {
        aa: "aaa.aa"
    },
    ee: {
        tt: "ee.tt",
        gg: {
            vv: "ee.gg.vv",
            qq: "ee.gg.qq"
        }
    }
};
// 请求地址(取BI系统自己的服务器地址)
let ip = window.location.origin;
// 可以在全局变量里面定义一个IP的全局变量，设置请求接口的地址，以便统一修改请求地址
// ip = this.$store.getters.getGlobalParams.IP;
this.$http.post(ip + "/gisqBI/api/testApi/returnParameter?id=123&name=aaa", {
    params: params,
    headers: {
        'X-Gisq-DeviceId': this.mUtils.getStoreDeviceId(),   // token调整之后，原来的方法已不适用window.localStorage.getItem("xxx")
        "X-Gisq-Token": "Bearer " + this.mUtils.getStoreToken()   // token调整之后，原来的方法已不适用window.localStorage.getItem("xxx")
    }
}).then((response)=> {
   // 提示操作成功
   this.Message.success({ message: JSON.stringify(response.data), offset: 60 });
   //  成功消息通知
   this.$notify({
       title: '请求成功',
       message: JSON.stringify(response.data),
       type: 'success'
   });
}).catch((err)=> {
  console.log(err)
});

```

### this.$store.getters：
this.$store 是 vuex 的一个实例，可以访问到bi中的共享方法。 
 
| 方法名    | 说明                            | 参数                                             |
| ------- |-------------------------------|------------------------------------------------|
|  boardInfoFun(widgetId)  | 查询列表：获取看板信息                   | (widgetId)组件ID                                 |
|  queryConfigFun(widgetId)  | 查询列表：查询列表的配置(基本、结果列、条件、按钮、弹窗) | (widgetId)组件ID                                 |
|  customerConditionsFun(widgetId)  | 查询列表：自定义查询条件                  | (widgetId)组件ID                                 |
|  customerFieldsFun(widgetId)  | 查询列表：自定义结果列                   | (widgetId)组件ID                                 |
|  enumInfoFun(widgetId)  | 查询列表：枚举信息                     | (widgetId)组件ID                                 |
|  queryAppIdFun(widgetId)  | 查询列表：应用ID                     | (widgetId)组件ID                                 |
|  queryConfigFun(widgetId)  | 查询列表：配置信息                     | (widgetId)组件ID                                 | 
|  queryIdFun(widgetId)  | 查询列表：查询列表ID                   | (widgetId)组件ID                                 |
|  query_time_fun(widgetId)  | 查询列表：查询耗时                     | (widgetId)组件ID                                 |
|  queryDataListFun(widgetId)  | 查询列表：查询结果（数据和总条数）      |  (widgetId)组件ID  |
|  requestBodyFun(widgetId)  | 查询列表：请求体                      | (widgetId)组件ID                                 |
|  requestDefaultBodyFun(widgetId)  | 查询列表：默认请求体                    | (widgetId)组件ID                                 |
|  updateCustomerFields(customerFieldsInfo, callback)  | 查询列表：更新自定义结果列                 | (customerFieldsInfo)自定义列的主键guid数组,(callback)回调 |
 
**示例**
```javascript

// 获取查询列表的请求体内容,this.widgetId为组件ID，即不在看板中使用时，组件ID为空
let requestBody = this.requestBodyFun(this.widgetId);
console.info(requestBody);

```
 
###   window 
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----|
|  window.open(URL,name,specs,replace)  |  用于打开一个新的浏览器窗口或查找一个已命名的窗口  |    |
|  window.parent.postMessage(data, origin)  |  向父页面发送postMessage信息  |  (data, origin)data为将要发送到其他 window的数据，origin为指定哪些窗口能接收到消息事件，其值可以是 *（表示无限制）或者一个 URI  |

**示例**
```javascript
 
// 打开一个新的浏览器窗口 
window.open(URL,name,specs,replace);
// 向父页面发送postMessage信息
window.parent.postMessage(data, "*");

```

 
axios中文文档: <http://www.axios-js.com/zh-cn/docs/>
Window open() 方法: <https://www.runoob.com/jsref/met-win-open.html>
Window postMessage() 方法: <https://www.runoob.com/js/met-win-postmessage.html>
 
  
