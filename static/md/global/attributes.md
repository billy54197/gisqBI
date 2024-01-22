
## this

### Underscore是一个JavaScript实用库，提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----|
|  $$lib__  |  Underscore.js对象  |  object  |
|  Message  |  消息提示  |  object  |
|  $loading  |  加载  |  object  |
|  $confirm  |  确认弹框  |  object  |
|  $notify  |  通知  |  object  |

**示例**
```javascript
 
//  在数组中查找第一个偶数 
let even = this.$$lib__.find([1, 2, 3, 4, 5, 6], (num)=>{ 
    return num % 2 == 0; 
});
console.info(even)

// 提示操作成功
this.Message.success({message: "操作成功", offset: 60});

// 加载转圈圈
const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
setTimeout(() => {
  loading.close();
}, 2000);

//  确认弹框
this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

//  成功消息通知
this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });

```


###   window 
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----|
|  window.localStorage  |  localStorage对象  |  object  |

**示例**
```javascript

// 在localStorage里获取用户信息
let userInfo_str = this.mUtils.getStoreUserInfo();  // token调整之后，原来的方法已不适用window.localStorage.getItem("xxx")
if (userInfo_str) {
    let userInfo = JSON.parse(userInfo_str);
}  
console.info(userInfo.userId)

// 打开一个新的浏览器窗口
window.open(URL,name,specs,replace);

```
Window localStorage 属性: <https://www.runoob.com/jsref/prop-win-localstorage.html>


### this.$store.getters：
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  accessType  |  看板访问类型：<br>original（普通版本），<br>public（公开版本）  |  string  |
|  bodyFraction  | 看板放缩比：{<br>windowH: 完全自适应高度比,<br>windowW: 完全自适应宽度比,<br>windowScaleH: 等比放缩高度比,<br>windowScaleW: 等比放缩宽度比<br>}  |  object  |
|  datasourceType  |  查询列表的数据集类型  |  string  |
|  getApplication  |  当前应用信息  |  object  |
|  getApplicationId  |  当前应用ID  |  string  |
|  getCanvasSetting  |  看板配置信息  |  object  |
|  getCanvasSettingInfo  |  看板配置信息（处理过的数据）  |  object  |
|  getCanvasSettingWidgetDataAsync  |  看板是否开启数据集异步加载  |  boolean  | 
|  getCurrentBoardConfig  |  看板的所有配置信息  |  object  |
|  getDynamicWidgets  |  看板的所有动态数据集组件  |  object  |
|  getGisConfigJSON  |  gis图层相关配置  |  object  |    
|  getGlobalParams  |  看板全局变量  |  object  |    
|  getScreenZoom  |  看板放缩比  |  number  | 
|  getURLParams  |  地址栏所有参数  |  object  |
|  getViewAccessDeviceId  |  页面请求访问的设备ID  |  string  |
|  getViewAccessToken  |  页面请求访问的的Token  |  string  |
|  getViewUserInfo  |  用户信息  |  object  |
|  getWidgetAllArr  |  所有的组件  |  array  |
|  getWidgetParentArr  |  所有非容器内部的组件  |  array  | 
|  getWidgets  |  所有的组件  |  object  |   
|  isMobile  |  是否为移动端  |  boolean  |     
|  viewAppId  |  看板应用ID  |  string  |
|  viewBiId  |  看板ID  |  string  |
|  viewGuid  |  看板发布版本ID  |  string  |
|  viewType  |  看板类型：<br>original（普通版本），<br>public（公开版本）  |  string  |  
 
 
**示例**
```javascript

// 获取看板配置信息，包含全局变量信息
let canvasSettingInfo = this.$store.getters.getCanvasSettingInfo;
console.info(canvasSettingInfo); 
console.info(canvasSettingInfo.data.globalParams.params); // 全局变量信息
console.info(this.$store.getters.getGlobalParams); // 全局变量信息


```


js网站: <https://www.runoob.com/js/js-tutorial.html>
Vue.js网站: <https://cn.vuejs.org/v2/guide/>
Underscore中文网: <https://underscorejs.net/>
样式属性CSS教程: <https://www.w3school.com.cn/css/index.asp>
Element控件教程: <https://element.eleme.cn/#/zh-CN/component/quickstart>
Echarts: <https://echarts.apache.org/zh/option.html#title>
Highcharts: <https://api.highcharts.com.cn/legacy/index.html>

