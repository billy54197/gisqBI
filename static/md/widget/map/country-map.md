##   属性  
 
| 参数    | 说明      | 类型 |
| ------- |---------|-----| 
|  mapChart  |  echarts地图对象  |  object  |  
|  regionParent  |  父级行政区信息  |  object  |  
|  currentRegion  |  当前行政区信息  |  object  |  
 
**示例**
```javascript

this.mapChart.clear(); // 清除地图
console.info(this.currentRegion); // 控制台输出当前行政区信息
console.info(this.regionParent); // 控制台输出父级行政区信息

```
 ##   方法  
  
| 方法名    | 说明      | 参数 |
| ------- |---------|-----| 
|  getCurrentRegionInfo(regionCode, callback)  |  获取行政区信息  |  (regionCode, callback)regionCode：行政区代码，callback：回调  | 
|  getRegionByNameAndParentCode(regionName, parentCode, callback)  |  获取行政区信息  |  (regionName, parentCode, callback)regionName：行政区名称，parentCode：父级行政区代码，callback：回调  | 
|  loadMap(info, geojson_obj)  |  加载地图  |  (info, geojson_obj)info：地图配置（例如this.widgetInfo），geojson_obj：地图图形数据  | 

**示例**
```javascript

// 加载3301杭州市的行政区地图
this.widgetInfo.config.regionCode = "3301";
this.getCurrentRegionInfo(this.widgetInfo.config.regionCode, (geojson_obj) => {
    // 加载地图
    this.loadMap(this.widgetInfo, geojson_obj);
}); 
// 加载3301杭州市的行政区地图  

// 加载西湖区的行政区地图  
this.getRegionByNameAndParentCode("西湖区", "3301", (data) => {
        this.widgetInfo.config.regionCode = data.xzqCode;
        this.loadInfo();
});
// 加载西湖区的行政区地图  

```

