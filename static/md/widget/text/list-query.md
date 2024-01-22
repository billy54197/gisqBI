##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  query_list_id  |  查询列表ID  |  string  | 
|  access_type  |  访问类型  |  string  |  
 
**示例**
```javascript

let ref_query_view = this.$refs.query_view; // 获取查询列表对象 
let requestBody = ref_query_view.requestBody; // 获取查询列表的请求体
console.info(requestBody.keyValue); // 查询列表的所有查询条件
if (ref_query_view) {
    let ref_query_view_header = ref_query_view.$refs.refHeader; // 获取查询列表头部对象 
    if (ref_query_view_header) {
        ref_query_view_header.form_condition = JSON.parse(JSON.stringify(keyValue)); // 设置查询列表的所有查询条件的值
        ref_query_view_header.doQuery(); // 调用查询按钮方法
    }
} 

```

 ##   方法  
  
| 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  reloadQueryData(keyValue)  |  设置查询条件，并重新加载数据  |  (keyValue)所有查询条件  | 


