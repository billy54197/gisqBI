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
 */define(["./Matrix3-2955527a","./defaultValue-ebbd2e4d","./EllipseOutlineGeometry-a290e30f","./Math-1fe079f3","./Transforms-5b74e989","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./EllipseGeometryLibrary-b919d7ec","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryOffsetAttribute-739bec2c","./IndexDatatype-7ccfd280"],function(t,a,r,i,l,o,c,s,u,d,f,b,m,p,y){"use strict";return function(e,n){return a.defined(n)&&(e=r.EllipseOutlineGeometry.unpack(e,n)),e._center=t.Cartesian3.clone(e._center),e._ellipsoid=t.Ellipsoid.clone(e._ellipsoid),r.EllipseOutlineGeometry.createGeometry(e)}});
