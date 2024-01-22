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
 */define(["./defaultValue-ebbd2e4d","./EllipsoidOutlineGeometry-a8ff8618","./Transforms-5b74e989","./Matrix3-2955527a","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryOffsetAttribute-739bec2c","./IndexDatatype-7ccfd280"],function(i,t,n,a,o,f,u,c,d,b,l,m,s,y){"use strict";return function(e,r){return i.defined(e.buffer)&&(e=t.EllipsoidOutlineGeometry.unpack(e,r)),t.EllipsoidOutlineGeometry.createGeometry(e)}});
