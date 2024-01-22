##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  row  |  当前行的数据(仅当按钮在列表行内才有)  |  object  | 
|  column  |  当前列的信息(仅当按钮在列表行内才有)  |  object  |  
|  $index  |  当前行的下标(仅当按钮在列表行内才有)  |  number  |  
|  button_config  |  字段配置信息  |  object  |  
|  style  |  已经配置过的样式  |  object  |  
|    |    |    |  
|  backgroundColor  |  设置背景颜色  |  string  |  
|  borderBottom  |  下边框  |  string  |  
|  textAlign  |  文本对齐  |  string  |  
|  fontWeight  |  字体加粗  |  string  |  
|  padding  |  内边距  |  string  | 
 

**示例**
```javascript

console.info(row);
console.info(column);
console.info($index);
console.info(button_config);
console.info(style);

style.backgroundColor = "#EBEEF5"; // 设置背景颜色
style.borderBottom = "#E4E7ED 1px solid"; // 设置下边框
style.textAlign = "left"; // 设置文本对齐
style.fontWeight = "bold"; // 设置字体加粗
style.padding = "15px"; // 设置内边距

```

 
