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
 */define(["./PrimitivePipeline-4de7609d","./createTaskProcessorWorker","./Transforms-5b74e989","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryPipeline-3cfa9822","./AttributeCompression-6f93ad0c","./EncodedCartesian3-d4159969","./IndexDatatype-7ccfd280","./IntersectionTests-2a07bba4","./Plane-7e97483e","./WebMercatorProjection-3d5b0545"],function(e,t,o,c,s,m,b,d,u,P,f,p,l,y,G,C,k,v,M,x){"use strict";return t(function(i,r){const n=e.PrimitivePipeline.unpackCombineGeometryParameters(i),a=e.PrimitivePipeline.combineGeometry(n);return e.PrimitivePipeline.packCombineGeometryResults(a,r)})});
