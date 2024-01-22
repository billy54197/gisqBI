##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|    |    |   |  
 

 ##   方法  
  
| 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  setConditionValue  |  设置查询条件的值  |  (keyId, value)keyId指定查询条件的主键ID,value设置的值  | 
|  getEnumDataSetJson  |  重新获取枚举数据集的数据  |  (keyId)keyId指定查询条件的主键ID  | 


**示例**
```javascript

// 清空指定查询条件的选中值，keyID 为指定查询条件的主键ID
this.setConditionValue(keyID, null); // keyID 为指定查询条件的主键ID
// 重新获取指定查询条件的备选数据，即重新获取数据集数据
this.getEnumDataSetJson(keyID); // keyID 为指定查询条件的主键ID

```
