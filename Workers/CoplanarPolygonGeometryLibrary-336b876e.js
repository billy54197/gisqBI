/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.99.9
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */define(["exports","./Matrix2-462b83d3","./Matrix3-2955527a","./OrientedBoundingBox-48eb7862"],function(b,y,n,d){"use strict";const c={},A=new n.Cartesian3,M=new n.Cartesian3,B=new n.Cartesian3,P=new n.Cartesian3,w=new d.OrientedBoundingBox;function h(e,a,o,i,r){const t=n.Cartesian3.subtract(e,a,A),s=n.Cartesian3.dot(o,t),u=n.Cartesian3.dot(i,t);return y.Cartesian2.fromElements(s,u,r)}c.validOutline=function(e){const a=d.OrientedBoundingBox.fromPoints(e,w).halfAxes,o=n.Matrix3.getColumn(a,0,M),i=n.Matrix3.getColumn(a,1,B),r=n.Matrix3.getColumn(a,2,P),t=n.Cartesian3.magnitude(o),s=n.Cartesian3.magnitude(i),u=n.Cartesian3.magnitude(r);return!(t===0&&(s===0||u===0)||s===0&&u===0)},c.computeProjectTo2DArguments=function(e,a,o,i){const r=d.OrientedBoundingBox.fromPoints(e,w),t=r.halfAxes,s=n.Matrix3.getColumn(t,0,M),u=n.Matrix3.getColumn(t,1,B),O=n.Matrix3.getColumn(t,2,P),l=n.Cartesian3.magnitude(s),m=n.Cartesian3.magnitude(u),g=n.Cartesian3.magnitude(O),C=Math.min(l,m,g);if(l===0&&(m===0||g===0)||m===0&&g===0)return!1;let f,x;return C!==m&&C!==g||(f=s),C===l?f=u:C===g&&(x=u),C!==l&&C!==m||(x=O),n.Cartesian3.normalize(f,o),n.Cartesian3.normalize(x,i),n.Cartesian3.clone(r.center,a),!0},c.createProjectPointsTo2DFunction=function(e,a,o){return function(i){const r=new Array(i.length);for(let t=0;t<i.length;t++)r[t]=h(i[t],e,a,o);return r}},c.createProjectPointTo2DFunction=function(e,a,o){return function(i,r){return h(i,e,a,o,r)}};var j=c;b.CoplanarPolygonGeometryLibrary=j});
