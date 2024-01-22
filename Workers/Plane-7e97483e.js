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
 */define(["exports","./Matrix3-2955527a","./Matrix2-462b83d3","./defaultValue-ebbd2e4d"],function(d,e,o,c){"use strict";function a(t,n){this.normal=e.Cartesian3.clone(t),this.distance=n}a.fromPointNormal=function(t,n,r){const i=-e.Cartesian3.dot(n,t);return c.defined(r)?(e.Cartesian3.clone(n,r.normal),r.distance=i,r):new a(n,i)};const C=new e.Cartesian3;a.fromCartesian4=function(t,n){const r=e.Cartesian3.fromCartesian4(t,C),i=t.w;return c.defined(n)?(e.Cartesian3.clone(r,n.normal),n.distance=i,n):new a(r,i)},a.getPointDistance=function(t,n){return e.Cartesian3.dot(t.normal,n)+t.distance};const f=new e.Cartesian3;a.projectPointOntoPlane=function(t,n,r){c.defined(r)||(r=new e.Cartesian3);const i=a.getPointDistance(t,n),l=e.Cartesian3.multiplyByScalar(t.normal,i,f);return e.Cartesian3.subtract(n,l,r)};const u=new o.Matrix4,m=new o.Cartesian4,w=new e.Cartesian3;a.transform=function(t,n,r){const i=t.normal,l=t.distance,N=o.Matrix4.inverseTranspose(n,u);let s=o.Cartesian4.fromElements(i.x,i.y,i.z,l,m);s=o.Matrix4.multiplyByVector(N,s,s);const I=e.Cartesian3.fromCartesian4(s,w);return s=o.Cartesian4.divideByScalar(s,e.Cartesian3.magnitude(I),s),a.fromCartesian4(s,r)},a.clone=function(t,n){return c.defined(n)?(e.Cartesian3.clone(t.normal,n.normal),n.distance=t.distance,n):new a(t.normal,t.distance)},a.equals=function(t,n){return t.distance===n.distance&&e.Cartesian3.equals(t.normal,n.normal)},a.ORIGIN_XY_PLANE=Object.freeze(new a(e.Cartesian3.UNIT_Z,0)),a.ORIGIN_YZ_PLANE=Object.freeze(new a(e.Cartesian3.UNIT_X,0)),a.ORIGIN_ZX_PLANE=Object.freeze(new a(e.Cartesian3.UNIT_Y,0)),d.Plane=a});
