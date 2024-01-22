

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

##   window 
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----|
|  window.localStorage  |  localStorage对象  |  object  |
|  window.open(URL,name,specs,replace)  |  用于打开一个新的浏览器窗口或查找一个已命名的窗口  |    |
|  window.parent.postMessage(data, '*')  |  向父页面发送postMessage信息  |    |

**示例**
```javascript

// 在localStorage里获取用户信息
let userInfo_str = this.mUtils.getStoreUserInfo();   // token调整之后，原来的方法已不适用window.localStorage.getItem("xxx")
if (userInfo_str) {
    let userInfo = JSON.parse(userInfo_str);
}  

// 打开一个新的浏览器窗口 
window.open(URL,name,specs,replace);

```

Window localStorage 属性: <https://www.runoob.com/jsref/prop-win-localstorage.html>
js网站: <https://www.runoob.com/js/js-tutorial.html>
Vue.js网站: <https://cn.vuejs.org/v2/guide/>
Underscore中文网: <https://underscorejs.net/>
样式属性CSS教程: <https://www.w3school.com.cn/css/index.asp>
Element控件教程: <https://element.eleme.cn/#/zh-CN/component/quickstart>
Echarts: <https://echarts.apache.org/zh/option.html#title>
Highcharts: <https://api.highcharts.com.cn/legacy/index.html>
 

