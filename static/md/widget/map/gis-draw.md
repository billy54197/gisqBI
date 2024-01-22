|  方法名   | 说明  | 参数  |
|  ----  | ----  | ----  |
| activate | 触发绘制功能 | cad / drawPoint / drawLine / drawPolygon / modify / rotate  |
| deactivate | 关闭绘制功能 | - |
| removeAll | 移除所有已绘制的图形 | id  若id为空，则移除默认绘制图层上的图形，否则移除对应id的图层上的图形 |
| createDrawLayer | 创建绘制图层 | {id, name, layerTag} |
