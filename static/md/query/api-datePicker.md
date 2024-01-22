##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  picker  |  时间选择器对象  |  object  |  
 
**示例**
```javascript

// 日期快速设置到一周前
 const date = new Date();
 date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
 picker.$emit('pick', date);

```

 ##   方法  
  
 | 方法名    | 说明      | 参数 |
 | ------- |---------|-----| 
 |    |    |    | 


