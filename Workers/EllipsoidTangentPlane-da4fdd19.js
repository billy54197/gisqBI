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
 */define(["exports","./AxisAlignedBoundingBox-a26a3fb6","./Matrix2-462b83d3","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./IntersectionTests-2a07bba4","./Plane-7e97483e","./Transforms-5b74e989"],function(g,h,d,s,r,p,C,y){"use strict";const f=new d.Cartesian4;function a(i,t){i=(t=r.defaultValue(t,s.Ellipsoid.WGS84)).scaleToGeodeticSurface(i);const e=y.Transforms.eastNorthUpToFixedFrame(i,t);this._ellipsoid=t,this._origin=i,this._xAxis=s.Cartesian3.fromCartesian4(d.Matrix4.getColumn(e,0,f)),this._yAxis=s.Cartesian3.fromCartesian4(d.Matrix4.getColumn(e,1,f));const n=s.Cartesian3.fromCartesian4(d.Matrix4.getColumn(e,2,f));this._plane=C.Plane.fromPointNormal(i,n)}Object.defineProperties(a.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});const P=new h.AxisAlignedBoundingBox;a.fromPoints=function(i,t){return new a(h.AxisAlignedBoundingBox.fromPoints(i,P).center,t)};const x=new p.Ray,u=new s.Cartesian3;a.prototype.projectPointOntoPlane=function(i,t){const e=x;e.origin=i,s.Cartesian3.normalize(i,e.direction);let n=p.IntersectionTests.rayPlane(e,this._plane,u);if(r.defined(n)||(s.Cartesian3.negate(e.direction,e.direction),n=p.IntersectionTests.rayPlane(e,this._plane,u)),r.defined(n)){const o=s.Cartesian3.subtract(n,this._origin,n),l=s.Cartesian3.dot(this._xAxis,o),c=s.Cartesian3.dot(this._yAxis,o);return r.defined(t)?(t.x=l,t.y=c,t):new d.Cartesian2(l,c)}},a.prototype.projectPointsOntoPlane=function(i,t){r.defined(t)||(t=[]);let e=0;const n=i.length;for(let o=0;o<n;o++){const l=this.projectPointOntoPlane(i[o],t[e]);r.defined(l)&&(t[e]=l,e++)}return t.length=e,t},a.prototype.projectPointToNearestOnPlane=function(i,t){r.defined(t)||(t=new d.Cartesian2);const e=x;e.origin=i,s.Cartesian3.clone(this._plane.normal,e.direction);let n=p.IntersectionTests.rayPlane(e,this._plane,u);r.defined(n)||(s.Cartesian3.negate(e.direction,e.direction),n=p.IntersectionTests.rayPlane(e,this._plane,u));const o=s.Cartesian3.subtract(n,this._origin,n),l=s.Cartesian3.dot(this._xAxis,o),c=s.Cartesian3.dot(this._yAxis,o);return t.x=l,t.y=c,t},a.prototype.projectPointsToNearestOnPlane=function(i,t){r.defined(t)||(t=[]);const e=i.length;t.length=e;for(let n=0;n<e;n++)t[n]=this.projectPointToNearestOnPlane(i[n],t[n]);return t};const _=new s.Cartesian3;a.prototype.projectPointOntoEllipsoid=function(i,t){r.defined(t)||(t=new s.Cartesian3);const e=this._ellipsoid,n=this._origin,o=this._xAxis,l=this._yAxis,c=_;return s.Cartesian3.multiplyByScalar(o,i.x,c),t=s.Cartesian3.add(n,c,t),s.Cartesian3.multiplyByScalar(l,i.y,c),s.Cartesian3.add(t,c,t),e.scaleToGeocentricSurface(t,t),t},a.prototype.projectPointsOntoEllipsoid=function(i,t){const e=i.length;r.defined(t)?t.length=e:t=new Array(e);for(let n=0;n<e;++n)t[n]=this.projectPointOntoEllipsoid(i[n],t[n]);return t},g.EllipsoidTangentPlane=a});
