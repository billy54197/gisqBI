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
 */define(["./Matrix3-2955527a","./defaultValue-ebbd2e4d","./EllipseGeometry-9330785b","./Math-1fe079f3","./Transforms-5b74e989","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./EllipseGeometryLibrary-b919d7ec","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryInstance-4ef1b8a5","./GeometryOffsetAttribute-739bec2c","./GeometryPipeline-3cfa9822","./AttributeCompression-6f93ad0c","./EncodedCartesian3-d4159969","./IndexDatatype-7ccfd280","./IntersectionTests-2a07bba4","./Plane-7e97483e","./VertexFormat-5b02b45a"],function(t,n,r,o,a,c,s,b,l,d,f,m,p,u,y,G,E,C,x,A,_,I){"use strict";return function(e,i){return n.defined(i)&&(e=r.EllipseGeometry.unpack(e,i)),e._center=t.Cartesian3.clone(e._center),e._ellipsoid=t.Ellipsoid.clone(e._ellipsoid),r.EllipseGeometry.createGeometry(e)}});
