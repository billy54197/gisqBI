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
 */define(["./Matrix3-2955527a","./defaultValue-ebbd2e4d","./EllipseGeometry-9330785b","./VertexFormat-5b02b45a","./Math-1fe079f3","./Transforms-5b74e989","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./EllipseGeometryLibrary-b919d7ec","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryInstance-4ef1b8a5","./GeometryOffsetAttribute-739bec2c","./GeometryPipeline-3cfa9822","./AttributeCompression-6f93ad0c","./EncodedCartesian3-d4159969","./IndexDatatype-7ccfd280","./IntersectionTests-2a07bba4","./Plane-7e97483e"],function(a,l,s,d,y,_,x,G,h,f,g,b,E,w,A,M,v,V,C,F,R,j){"use strict";function i(e){const o=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).radius,n={center:e.center,semiMajorAxis:o,semiMinorAxis:o,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s.EllipseGeometry(n),this._workerName="createCircleGeometry"}i.packedLength=s.EllipseGeometry.packedLength,i.pack=function(e,o,n){return s.EllipseGeometry.pack(e._ellipseGeometry,o,n)};const c=new s.EllipseGeometry({center:new a.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),t={center:new a.Cartesian3,radius:void 0,ellipsoid:a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new d.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return i.unpack=function(e,o,n){const r=s.EllipseGeometry.unpack(e,o,c);return t.center=a.Cartesian3.clone(r._center,t.center),t.ellipsoid=a.Ellipsoid.clone(r._ellipsoid,t.ellipsoid),t.height=r._height,t.extrudedHeight=r._extrudedHeight,t.granularity=r._granularity,t.vertexFormat=d.VertexFormat.clone(r._vertexFormat,t.vertexFormat),t.stRotation=r._stRotation,t.shadowVolume=r._shadowVolume,l.defined(n)?(t.semiMajorAxis=r._semiMajorAxis,t.semiMinorAxis=r._semiMinorAxis,n._ellipseGeometry=new s.EllipseGeometry(t),n):(t.radius=r._semiMajorAxis,new i(t))},i.createGeometry=function(e){return s.EllipseGeometry.createGeometry(e._ellipseGeometry)},i.createShadowVolume=function(e,o,n){const r=e._ellipseGeometry._granularity,m=e._ellipseGeometry._ellipsoid,u=o(r,m),p=n(r,m);return new i({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:m,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:u,height:p,vertexFormat:d.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(i.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,o){return l.defined(o)&&(e=i.unpack(e,o)),e._ellipseGeometry._center=a.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),i.createGeometry(e)}});
