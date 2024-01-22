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
 */define(["exports","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Math-1fe079f3"],function(s,u,d,c){"use strict";function t(e){this._ellipsoid=d.defaultValue(e,u.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(t.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),t.mercatorAngleToGeodeticLatitude=function(e){return c.CesiumMath.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},t.geodeticLatitudeToMercatorAngle=function(e){e>t.MaximumLatitude?e=t.MaximumLatitude:e<-t.MaximumLatitude&&(e=-t.MaximumLatitude);const i=Math.sin(e);return .5*Math.log((1+i)/(1-i))},t.MaximumLatitude=t.mercatorAngleToGeodeticLatitude(Math.PI),t.prototype.project=function(e,i){const a=this._semimajorAxis,o=e.longitude*a,r=t.geodeticLatitudeToMercatorAngle(e.latitude)*a,n=e.height;return d.defined(i)?(i.x=o,i.y=r,i.z=n,i):new u.Cartesian3(o,r,n)},t.prototype.unproject=function(e,i){const a=this._oneOverSemimajorAxis,o=e.x*a,r=t.mercatorAngleToGeodeticLatitude(e.y*a),n=e.z;return d.defined(i)?(i.longitude=o,i.latitude=r,i.height=n,i):new u.Cartographic(o,r,n)},s.WebMercatorProjection=t});
