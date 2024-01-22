##   方法

|  方法名   | 说明  | 参数  |
|  ----  | ----  | ----  |
| setCenter | 改变地图的中心点 | (center, projection) projection不传则默认使用地图当前坐标系 |
| setZoom | 改变地图缩放级别 | (zoom) |
| setZoomAndCenter | 改变地图的中心点，缩放级别 | (zoom, center, projection) projection不传则默认使用地图当前坐标系 |
| getLayerById | 根据图层Id获取图层对象 | (id)图层的ID |
| getLayerByLayerTag |根据图层layerTag获取图层对象 | (layerTag)图层的tag |
| setLayerOpacity | 改变图层透明度 | (layerId,opacity)图层id以及透明度数值(0-100) |
| setLayerTop | 图层置顶 | (layerId)图层id |
| addConver | 添加遮罩 | (options)想要显示的底图 |
| getMapScale | 获取当前地图的比例尺 | - |
| getResolutionFromScale | 根据指定的比例尺换算分辨率 | (scale)比例尺) |
| getSelectFeatures | 获取选中的地块(地块坐标系为`地图坐标系`)<br>feature对象可以先getGeometry()获得Geometry,然后用自带的方法[transform](https://openlayers.org/en/v5.3.0/apidoc/module-ol_geom_Geometry-Geometry.html#transform)进行坐标转化,但是会影响原始数据,建议先用clone方法进行克隆 | - |
| getSelectGeoJson | 获取选中的地块的GeoJson(地块坐标系视参数而定) | (isTransform, outCrs)接受2个参数<br>`isTransform`:默认false,为true时,会对坐标系进行转化,转为参数`outCrs`坐标系<br>`outCrs`默认值为widgetInfo.transformProjection |
| getSelectWkt | 获取选中的地块的WKT(地块坐标系视参数而定) |(isTransform, outCrs)接受2个参数<br>`isTransform`:默认false,为true时,会对坐标系进行转化,转为参数`outCrs`坐标系<br>`outCrs`默认值为widgetInfo.transformProjection|
| setMapScale | 设置地图比例尺(string) | 参数示例: "1:5000" |
| addLinkMap | 添加联动地图[实例](#addLinkMap实例) | (layer)想要联动的图层,详情见[参数](#addLinkMap参数) |
| updateMapSize | map容器大小改变后重绘 | - |
| search | 支持对geoserver图层WFS、WMS和feature服务的这类矢量图层(VectorLayer)做查询定位[实例](#search查询定位) | (option)[参数](#search参数) |
| locateGeoJson |根据geojson数据绘制图形并定位 | (geojson)若传入的Geojson不带crs则认为坐标系是transformProjection，若带crs，则认为坐标系是crs |
| drawGraphic | 绘制图形并定位 | (options)参见示例 |
| locateGraphic | 定位临时绘制图形 | (options)参见示例 |
| deleteGraphic | 删除临时绘制图形 | (options)参见示例 |
| locateTempGraphic | 根据已经绘制的图形唯一字段进行匹配并定位 | (obj){id:'XXX'}) |
| transformPoint  | 转为点坐标系,返回结果为xy数组 | (point, inCrs, outCrs)接受3个参数<br>1.`point`点数据可为数组或者字符串<br>  2.`inCrs`传入图形的坐标系 默认值为底图坐标系<br>3.`outCrs`转为结果的坐标系 默认值为widgetInfo.transformProjection   |
| transformGeo  | 转为图形坐标系,返回结果为Geojson格式的字符串 | (geo, inCrs, outCrs)接受3个参数<br>1.`geo`图形数据可为Feature,Geometry,Feature数组<br>  2.`inCrs`传入图形的坐标系 默认值为底图坐标系<br>3.`outCrs`转为结果的坐标系 默认值为widgetInfo.transformProjection   |
| addMarker | 新增Marker | (options)参见示例 |
| addMarkers | 新增多个Marker | (options)参见示例 |
| setLocate | 设置定位的Marker,永远只存在一个 | (options)同addMarker |
| removeMarker | 删除指定Marker | (id)Marker的id |
| clearMarker | 删除所有Marker | - |
| getExtent | 获取地图当前extent | - |
| filterLayer | 过滤图层 | (id, where)图层的id,过滤条件 |
| getCenter | 获取地块的重心 | (geometry)图形geometry或者feature |
| refresh | 刷新地图 | - |
| parseWktArray | wkt数组转换为geojson | (wktArray, inCrs)wkt数组,wkt坐标系 |
| parseWkt | wkt转换为geojson | (wkt, inCrs)wkt, wkt坐标系 |
| convertWkt | geojson转换为wkt | (geojson)geojson |
| getFeatureById | 根据Id从临时层查询地块 | (id)地块id |
| updateFeatureById | 更新临时地块 |(options)参见示例 |
| addTargetLayer | 根据layerid加载图层(支持filter参数) | (options)options有2个属性,1.layerTag:id或者layerTag 2.layerFilter:过滤条件 |


**地块定位示例**
```javascript
let options = {
    tag:"gddk",
    isStopFlashHlight:"true",
    express:"bh = '3304832014A10076'",
    isShow:true,
    flashStyle:{
        fillColor:'#00ffff',
        strokeColor:'#00ffff'
    }
}
this.$refs.gismap.$map.search(options);
```
**isLocate**:是否定位  
**tag**:对应的Toc图层layerTag  
**subLayerId**:查询图层的层级  
**isStopFlashHlight**:是否停止闪烁,true表示不闪烁  
**express**:查询的过滤条件  
**isShow**:闪烁结束过地块是否保持高亮  
**flashStyle**:闪烁的样式  
**success**:查询成功的回调  

**添加轨迹示例**
```javascript
let pointArray = [
  [119.7448, 30.2472],
  [119.9448, 30.4472],
  [120.1448, 30.2472],
  [120.3448, 30.4472],
]
let options = {
    pointArray: pointArray,//点数组. 必须要有
    isLocate: true, //是否定位,为true时定位. 可不传,默认false
    startSrc: startSrc, //开始点图标. 可不传
    endSrc: endSrc, //结束点图标. 可不传
    nodeSrc: nodeSrc, //中间节点图标. 可不传
    strokeColor: strokeColor, //线的颜色. 可不传,默认红色
    strokeWidth: strokeWidth, //线的宽度. 可不传,默认2
}
this.$refs.gismap.$map.addTrail(options);

```
