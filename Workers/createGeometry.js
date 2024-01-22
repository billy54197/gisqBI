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
 */define(["./defaultValue-ebbd2e4d","./PrimitivePipeline-4de7609d","./createTaskProcessorWorker","./Transforms-5b74e989","./Matrix3-2955527a","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryPipeline-3cfa9822","./AttributeCompression-6f93ad0c","./EncodedCartesian3-d4159969","./IndexDatatype-7ccfd280","./IntersectionTests-2a07bba4","./Plane-7e97483e","./WebMercatorProjection-3d5b0545"],function(s,d,b,p,y,P,k,C,G,W,x,A,M,T,h,g,j,q,v,D){"use strict";const o={};function m(r){let e=o[r];return s.defined(e)||(typeof exports=="object"?o[e]=e=require(`Workers/${r}`):require([`Workers/${r}`],function(n){e=n,o[e]=n})),e}return b(function(r,e){const n=r.subTasks,c=n.length,i=new Array(c);for(let t=0;t<c;t++){const a=n[t],f=a.geometry,u=a.moduleName;if(s.defined(u)){const l=m(u);i[t]=l(f,a.offset)}else i[t]=f}return Promise.all(i).then(function(t){return d.PrimitivePipeline.packCreateGeometryResults(t,e)})})});
