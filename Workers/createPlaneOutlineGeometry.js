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
 */define(["./defaultValue-ebbd2e4d","./Transforms-5b74e989","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./WebGLConstants-544672c2"],function(c,s,o,y,u,m,p,f,b,d,w){"use strict";function i(){this._workerName="createPlaneOutlineGeometry"}i.packedLength=0,i.pack=function(r,t){return t},i.unpack=function(r,t,e){return c.defined(e)?e:new i};const n=new o.Cartesian3(-.5,-.5,0),a=new o.Cartesian3(.5,.5,0);return i.createGeometry=function(){const r=new m.GeometryAttributes,t=new Uint16Array(8),e=new Float64Array(12);return e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=a.x,e[4]=n.y,e[5]=n.z,e[6]=a.x,e[7]=a.y,e[8]=n.z,e[9]=n.x,e[10]=a.y,e[11]=n.z,r.position=new u.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}),t[0]=0,t[1]=1,t[2]=1,t[3]=2,t[4]=2,t[5]=3,t[6]=3,t[7]=0,new u.Geometry({attributes:r,indices:t,primitiveType:u.PrimitiveType.LINES,boundingSphere:new s.BoundingSphere(o.Cartesian3.ZERO,Math.sqrt(2))})},function(r,t){return c.defined(t)&&(r=i.unpack(r,t)),i.createGeometry(r)}});
