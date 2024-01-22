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
 */define(["./defaultValue-ebbd2e4d","./Matrix3-2955527a","./EllipsoidGeometry-51e0eb1c","./VertexFormat-5b02b45a","./Math-1fe079f3","./Transforms-5b74e989","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryOffsetAttribute-739bec2c","./IndexDatatype-7ccfd280"],function(s,c,i,d,m,u,p,y,G,f,b,k,x,P,_){"use strict";function o(e){const t=s.defaultValue(e.radius,1),a={radii:new c.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new i.EllipsoidGeometry(a),this._workerName="createSphereGeometry"}o.packedLength=i.EllipsoidGeometry.packedLength,o.pack=function(e,t,a){return i.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,a)};const l=new i.EllipsoidGeometry,r={radius:void 0,radii:new c.Cartesian3,vertexFormat:new d.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return o.unpack=function(e,t,a){const n=i.EllipsoidGeometry.unpack(e,t,l);return r.vertexFormat=d.VertexFormat.clone(n._vertexFormat,r.vertexFormat),r.stackPartitions=n._stackPartitions,r.slicePartitions=n._slicePartitions,s.defined(a)?(c.Cartesian3.clone(n._radii,r.radii),a._ellipsoidGeometry=new i.EllipsoidGeometry(r),a):(r.radius=n._radii.x,new o(r))},o.createGeometry=function(e){return i.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return s.defined(t)&&(e=o.unpack(e,t)),o.createGeometry(e)}});
