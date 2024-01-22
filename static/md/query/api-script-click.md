##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|    |    |    |  
 

 ##   方法  
  
| 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  doQuery()  |  查询结果  |    |  
|  emptyHeader()  |  清空头部查询条件  |    |  
|  doRefresh()  |  刷新结果  |    |  
|  doExportExcelCurrent  |  导出Excel（当前页）  |    |  
|  doExportExcelAll()  |  导出Excel（所有）  |    |  
|  openDialog(dialogId,callback)  |  打开弹窗  |  (dialogId,callback)弹窗ID，回调函数  |  
|  closeDialog(dialogId,callback)  |  关闭弹窗  |  (dialogId,callback)弹窗ID，回调函数  |  



**示例**
```javascript

this.doQuery(); // 查询结果
this.emptyHeader(); // 清空头部查询条件
this.doRefresh(); // 刷新结果
this.doExportExcelCurrent(); // 导出Excel（当前页）
this.doExportExcelAll(); // 导出Excel（所有）


// 打开弹窗 dialogId为弹窗Id
this.openDialog(dialogId, (dialogVisible, iframeURL, dialog_list) => {
    console.info(dialogVisible); // dialogVisible: 所有弹窗显示标识
    console.info(iframeURL); // iframeURL: 所有弹窗内容地址
    console.info(dialog_list); // dialog_list:弹窗配置信息（除去已经隐藏的弹窗数据）
    // 修改弹窗内容地址
    iframeURL[dialogId] = "https://map.baidu.com/";
});

```

 
