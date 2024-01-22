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
 */define(["./defaultValue-ebbd2e4d","./Matrix3-2955527a","./EllipsoidOutlineGeometry-a8ff8618","./Math-1fe079f3","./Transforms-5b74e989","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryOffsetAttribute-739bec2c","./IndexDatatype-7ccfd280"],function(a,d,t,c,u,m,p,f,y,G,b,k,O,P){"use strict";function r(e){const i=a.defaultValue(e.radius,1),s={radii:new d.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new t.EllipsoidOutlineGeometry(s),this._workerName="createSphereOutlineGeometry"}r.packedLength=t.EllipsoidOutlineGeometry.packedLength,r.pack=function(e,i,s){return t.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,s)};const l=new t.EllipsoidOutlineGeometry,n={radius:void 0,radii:new d.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return r.unpack=function(e,i,s){const o=t.EllipsoidOutlineGeometry.unpack(e,i,l);return n.stackPartitions=o._stackPartitions,n.slicePartitions=o._slicePartitions,n.subdivisions=o._subdivisions,a.defined(s)?(d.Cartesian3.clone(o._radii,n.radii),s._ellipsoidGeometry=new t.EllipsoidOutlineGeometry(n),s):(n.radius=o._radii.x,new r(n))},r.createGeometry=function(e){return t.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return a.defined(i)&&(e=r.unpack(e,i)),r.createGeometry(e)}});
