##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  this.$refs.myIframe  |  iframe的DOM对象  |  object  | 
|  this.widgetInfo.config.url  |  iframe嵌入地址  |  string  | 
|  urlInfo  |  嵌入地址相关信息  |  object  |  
 
**示例**
```javascript

console.info(this.$refs.myIframe); // 控制台输出iframe的DOM对象
this.widgetInfo.config.url = 'http://www.baidu.com'; // 设置嵌入地址 
console.info(this.urlInfo.params); // 控制台输出嵌入地址的参数信息

```
 ##   方法  
  
| 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  doPostMessage(data, origin)  |  向嵌入的页面发送PostMessage消息  |  (data, origin)data：发送的数据，origin：指定接收消息的地址限制,'*'表示不做任何限制  | 
|  getUrlInfo()  |  获取嵌入地址相关信息(取自this.widgetInfo.config.url)  |    | 


**示例**
```javascript

// 将数据对象{data:"123"}发送给嵌入页面
this.$refs.myIframe.contentWindow.postMessage({data:"123"}, "*");
// 将数据对象{data:"123"}发送给嵌入页面

// 获取嵌入地址相关信息  
this.getUrlInfo();
console.info(this.urlInfo); // 控制台输出嵌入地址的参数信息
// 获取嵌入地址相关信息  

```
