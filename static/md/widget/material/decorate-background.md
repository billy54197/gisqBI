##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  svg_attribute  |  SVG相关的属性  |  object  | 
|  widgetInfo  |  当前组件的配置  |  object  |  
 
**示例**
```javascript

console.info(svg_attribute);
console.info(widgetInfo); 

```

 ##   方法  
  
 | 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  this.getText()  |  获取绑定的字段值（取第一行数据）  |    | 
|  this.getDataSourceList()  |  获取组件绑定的所有数据  |    | 

**示例**
```javascript

 // 提供以下内置函数获取数据
let text = this.getText(); // 获取绑定的字段值（取第一行数据）
console.info(text);
let dataSourceList = this.getDataSourceList(); // 获取组件绑定的所有数据
console.info(dataSourceList);

```

