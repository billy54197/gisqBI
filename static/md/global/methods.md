## this.mUtils
this.mUtils 是BI提供的基础功能API。 可以在任意可以获取到组件 this 的地方使用。
示例：
this.mUtils.AES.encrypt(word, key, iv);

| 方法名    | 说明      | 参数 |
| ------- |---------|-----|
|  AES.encrypt  | 调用AES加密   | (word, keyStr, ivObj)要加密的字符串，密钥，偏移向量  |
|  AES.decrypt  | 调用AES解密   | (word, keyStr, ivObj)要解密的字符串，密钥，偏移向量  |
|  html2canvas  |  调用html2canvas对元素进行截图  |  (options, callback, error) <br/> 截图参数:<br/> options:{ <br/>&nbsp;&nbsp;  dom:要截图的dom节点，如this.$el, <br/>&nbsp;&nbsp;  scale:缩放倍率,默认0.5, <br/>&nbsp;&nbsp;  filename:'截图后保存的图片名称'} <br/>callback:function(canvas, options){} 可选，不传入时默认为另存为图片 <br/>error:function(error){}可选，错误处理 |

##   this.$store 

this.$store 是 vuex 的一个实例，可以访问到bi中的共享方法。 

### this.$store.getters：
 
| 方法名    | 说明                            | 参数 |
| ------- |-------------------------------|-----|
|  boardInfoFun(widgetId)  | 查询列表：获取看板信息                   |  (widgetId)组件ID  |
|  queryConfigFun(widgetId)  | 查询列表：查询列表的配置(基本、结果列、条件、按钮、弹窗) |  (widgetId)组件ID  |
|  customerConditionsFun(widgetId)  | 查询列表：自定义查询条件                  |  (widgetId)组件ID  |
|  customerFieldsFun(widgetId)  | 查询列表：自定义结果列                   |  (widgetId)组件ID   |
|  enumInfoFun(widgetId)  | 查询列表：枚举信息                     | (widgetId)组件ID   |
|  datasetInfoFun(widgetId)  | 查询列表：数据集枚举信息                  | (widgetId)组件ID   |
|  requestDataInfoFun(widgetId)  | 查询列表：数据请求信息                   | (widgetId)组件ID   |
|  queryAppIdFun(widgetId)  | 查询列表：应用ID                     |  (widgetId)组件ID  |
|  queryConfigFun(widgetId)  | 查询列表：配置信息                     |  (widgetId)组件ID  | 
|  queryIdFun(widgetId)  | 查询列表：查询列表ID                   |  (widgetId)组件ID  |
|  query_time_fun(widgetId)  | 查询列表：查询耗时                     |  (widgetId)组件ID  |
|  queryDataListFun(widgetId)  | 查询列表：查询结果（数据和总条数）             |  (widgetId)组件ID  |
|  requestBodyFun(widgetId)  | 查询列表：请求体                      |  (widgetId)组件ID  |
|  requestDefaultBodyFun(widgetId)  | 查询列表：默认请求体                    |  (widgetId)组件ID  |

**示例**
```javascript

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

```
 
### this.$store._actions：
 
| 方法名    | 说明      | 参数 |
| ------- |---------|-----|  
|  removeViewAccessToken()  |  移除看板访问的Token信息  |    |
|  removeViewUserInfo()  |  移除看板的用户信息  |    | 
|  setAccessType(accessType)  |  设置看板访问类型  |  (accessType)访问类型  |  
|  setCustomerConditions(info)  |  查询列表：设置自定义查询条件  |  (info)自定义查询条件信息  |
|  setCustomerFields(info)  |  查询列表：设置自定义结果列  | (info)自定义结果列 信息   |
|  setDatasourceType(datasourceType)  |  查询列表：设置数据集类型  |  (datasourceType)数据集类型  |  
|  setEnumInfo(info)  |  查询列表：设置枚举信息  |  (info)枚举信息  |
|  setFraction(bodyClientWH)  |  设置看板放缩比  |  (bodyClientWH)看板窗口的宽高  | 
|  setIsMobile(isMobile)  |  设置是否为移动端  |  (isMobile)true/false  | 
|  setQueryAppId(info)  |  查询列表：设置查询列表应用ID  |  (info)应用ID信息   | 
|  setQueryId(info)  |  查询列表：设置查询列表ID  |  (info)查询列表ID信息  |
|  setQueryTime(info)  |  查询列表：设置查询列表查询时长  |  (info)查询时长信息  |
|  setRequestBody(info)  | 查询列表：设置查询列表请求体参数   |  (info)请求体参数信息  |
|  setRequestBodyKeyValue(info)  |  查询列表：设置查询列表查询条件  |  (info)查询条件信息  |
|  setRequestBodyOrders(info)  |  查询列表：设置查询列表排序  |  (info)排序信息  | 
|  setRequestBodyPage(info)  |  查询列表：设置查询列表分页  |  (info)分页信息  |
|  setRequestBodyQueryListId(info)  |  查询列表：设置查询列表ID  |  (info)列表ID信息  | 
|  setScreenZoom(screenZoom)  |  设置看板放缩比  |  (screenZoom)看板放缩比  | 
|  setURLParams(urlParams)  |  设置地址栏参数  |  (urlParams)地址栏参数  | 
|  setViewAccessToken(accessToken)  |  设置请求token  |  (accessToken)请求token  |
|  setViewAppId(appId)  |  设置应用ID  |  (appId)应用ID  |
|  setViewBiId(biId)  |  设置看板ID  |  (biId)看板ID  |
|  setViewGuid(viewGuid)  |  设置发布版本ID  |  (viewGuid)发布版本ID   | 
|  setViewUserInfo(userInfo)  |  设置用户信息  |  (userInfo)用户信息  |  
|  updateCanvasSettingData(data)  |  修改看板的数据信息  |  (data)数据信息  |
|  updateCanvasSettingInfoData(data)  |  修改看板的数据信息(处理过的看板配置)  |  (data)数据信息  |
|  updateCanvasSettingInfoTransform(transform)  |  修改看板适应方式  |  (transform)适应方式  |  
|  updateWidgetInfoById(widget)  |  修改组件配置  |  (widget)组件配置信息  |
|  updateWidgetParentArrDataset(widget)  |  修改非容器内的组件数据信息  |  (widget)组件配置信息  |
  
### this.$axios
this.$axios 是 [axios](http://www.axios-js.com/zh-cn/docs/) 的一个实例，如果需要调用，请直接使用。

this.$axios 是axios的一个原生实例。与this.$http的区别在于this.$http会默认带上token的header，并带有默认的异常处理。

使用请参考下面的$http。

### this.$http
与 this.$axios 均为 [axios](http://www.axios-js.com/zh-cn/docs/) 的一个实例，区别在于 $http 带有bi内置的token和异常处理。

请参考axios的使用文档 [axios使用文档](http://www.axios-js.com/zh-cn/docs/#%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95%E7%9A%84%E5%88%AB%E5%90%8D) ，比如文档中
的axios.request(config)，替换为 this.$http.request(config) 或者 this.$axios.request(config)，其余请求方式同理。

**示例**
```javascript

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
this.$http.post(ip + "/gisqBI/api/testApi/returnParameter?id=123&name=aaa", 
    params, 
    {
      // $http 会默认带有下面两个header，下面给出仅作示例。
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
