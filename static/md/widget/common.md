## 一、属性  

this.widgetInfo 是当前组件的所有配置信息
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  attr  |  基本配置  |  object  |  
|  border  |  边框配置  |  object  |  
|  title  |  标题配置  |  object  |  
|  config  |  组件配置 |  object  |  
|  dataset  |  数据配置 |  object  |  
|  action  |  事件配置 |  object  |  
|  id  |  组件ID |  string  |  
|  name  |  组件名称 |  string  |  
|  typeId  |  类型ID |  string  |  
|  typeName  |  类型编码 |  string  |  
|  widgetType  |  组件分类 |  string  |  
|  widgetGroup  |  组件分组 |  string  | 
|  typeTitle  |  类型名称 |  string  |  
|  permissions  |  组件权限 |  string  |  
 
 ### 1、attr 基本配置
 
 **x**：位置坐标x，**y**：位置坐标y，**w**：组件宽度，**h**：组件高度，**hide**：组件是否隐藏，**widgetW**：去除标题后的宽度，**hh**：去掉标题后的高度
 
**示例**
```javascript

this.widgetInfo.attr.hide = true; // 隐藏组件
this.widgetInfo.attr.x = this.widgetInfo.attr.x + 20; // 坐标位置向右移动20像素
this.reLoadInfo(this.widgetInfo); //重新加载组件

```
 ### 2、dataset 数据配置
 
**type**：数据类型，**static**：静态数据，**dynamic**：动态数据，**local**：本地数据
 
**说明**
各类型数据的结构类似，以下属性含义相同
**dimensions**：字段信息
**dimensionsAlias**：字段信息（包括字段别名）
**columnList**：字段信息
**source**：数据信息

其中动态数据**dynamic**
**dataSetId**：数据集ID
**dataSetName**：数据集名称
**query**：数据集配置
**autoUpdate**：是否启用定时请求数据集（true：启用，false：禁用）
**autoUpdateTime**：定时请求数据集时间间隔（单位：秒）
**openUnLoad**：看板打开是是否禁止获取数据集（true：禁止加载，false：正常加载）

其中本地数据**local**
**dataLocalId**：本地数据ID
**dataLocalName**：本地数据名称 
**autoUpdate**：是否启用定时请求数据集（true：启用，false：禁用）
**autoUpdateTime**：定时请求数据集时间间隔（单位：秒） 
 
 ### 3、action 事件配置
 
**sendOut**：发送事件，**receive**：接收事件，**lifecycle**：生命周期
 
 
 
 ## 二、方法  
  
| 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  getWidgetObject(widgetId)  |  获取指定组件对象  |  （widgetId）组件ID  | 
|  getSourceToListObj()  |  获取source数据，返回的是对象数组  |    | 
|  loadInfo(this.widgetInfo)  |  加载当前组件  |  （widgetInfo）组件配置信息  |
|  reLoadInfo(this.widgetInfo)  |  重新加载当前组件  |  （widgetInfo）组件配置信息  | 


**示例**
```javascript

let widgetObject = this.getWidgetObject(this.widgetInfo.id); // 获取当前组件对象
console.info(widgetObject); // 控制台输出当前组件对象信息

this.widgetInfo.attr.x = this.widgetInfo.attr.x + 20; // 坐标位置向右移动20像素
this.reLoadInfo(this.widgetInfo); //即可按照新的配置重新加载组件

```
