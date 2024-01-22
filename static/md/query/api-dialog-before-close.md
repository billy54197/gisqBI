##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  dialog_config  |  弹窗配置信息  |  object  | 
|  current_dialog_id  |  当前打开的弹窗id  |  string  |  
|  dialogVisible  |  所有弹窗显示标识  |  object  |  
|  iframeURL  |  所有弹窗内容地址  |  object  |  
 

**示例**
```javascript

// dialogId 弹窗ID
let dialogId = dialog_config.guid;
console.info(dialogId);

// 关闭弹窗  dialogId:弹窗ID
this.dialogVisible[dialogId] = false;
// 设置弹窗内容地址  dialogId:弹窗ID
this.iframeURL[dialogId] = "http://www.baidu.com";

// 获取弹窗对象
let ref_dialog = this.$refs["myDialog_" + dialogId];
console.info(ref_dialog);
// 获取弹窗中的iframe对象
let ref_iframe = this.$refs["dialogIframe_" + dialogId];
console.info(ref_iframe)

```

 ##   方法  
  
| 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  done  |  关闭弹窗方法  |    | 
|  doQuery  |   执行查询操作 |    | 
|  emptyHeader  |   情况顶部查询条件操作 |    | 
|  doRefresh  |   刷新操作 |    | 
 
**示例**
```javascript

done();
this.doQuery();
this.emptyHeader();
this.doRefresh();
 
``` 


