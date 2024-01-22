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
 */define(["./Transforms-5b74e989","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./defaultValue-ebbd2e4d","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryOffsetAttribute-739bec2c","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./WebGLConstants-544672c2"],function(l,r,f,o,m,b,y,k,g,G,E,B){"use strict";const C=new r.Cartesian3;function u(a){const t=(a=o.defaultValue(a,o.defaultValue.EMPTY_OBJECT)).minimum,e=a.maximum;this._min=r.Cartesian3.clone(t),this._max=r.Cartesian3.clone(e),this._offsetAttribute=a.offsetAttribute,this._workerName="createBoxOutlineGeometry"}u.fromDimensions=function(a){const t=(a=o.defaultValue(a,o.defaultValue.EMPTY_OBJECT)).dimensions,e=r.Cartesian3.multiplyByScalar(t,.5,new r.Cartesian3);return new u({minimum:r.Cartesian3.negate(e,new r.Cartesian3),maximum:e,offsetAttribute:a.offsetAttribute})},u.fromAxisAlignedBoundingBox=function(a){return new u({minimum:a.minimum,maximum:a.maximum})},u.packedLength=2*r.Cartesian3.packedLength+1,u.pack=function(a,t,e){return e=o.defaultValue(e,0),r.Cartesian3.pack(a._min,t,e),r.Cartesian3.pack(a._max,t,e+r.Cartesian3.packedLength),t[e+2*r.Cartesian3.packedLength]=o.defaultValue(a._offsetAttribute,-1),t};const c=new r.Cartesian3,d=new r.Cartesian3,p={minimum:c,maximum:d,offsetAttribute:void 0};return u.unpack=function(a,t,e){t=o.defaultValue(t,0);const s=r.Cartesian3.unpack(a,t,c),i=r.Cartesian3.unpack(a,t+r.Cartesian3.packedLength,d),n=a[t+2*r.Cartesian3.packedLength];return o.defined(e)?(e._min=r.Cartesian3.clone(s,e._min),e._max=r.Cartesian3.clone(i,e._max),e._offsetAttribute=n===-1?void 0:n,e):(p.offsetAttribute=n===-1?void 0:n,new u(p))},u.createGeometry=function(a){const t=a._min,e=a._max;if(r.Cartesian3.equals(t,e))return;const s=new b.GeometryAttributes,i=new Uint16Array(24),n=new Float64Array(24);n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,s.position=new m.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n}),i[0]=4,i[1]=5,i[2]=5,i[3]=6,i[4]=6,i[5]=7,i[6]=7,i[7]=4,i[8]=0,i[9]=1,i[10]=1,i[11]=2,i[12]=2,i[13]=3,i[14]=3,i[15]=0,i[16]=0,i[17]=4,i[18]=1,i[19]=5,i[20]=2,i[21]=6,i[22]=3,i[23]=7;const A=r.Cartesian3.subtract(e,t,C),x=.5*r.Cartesian3.magnitude(A);if(o.defined(a._offsetAttribute)){const _=n.length,w=a._offsetAttribute===y.GeometryOffsetAttribute.NONE?0:1,h=new Uint8Array(_/3).fill(w);s.applyOffset=new m.GeometryAttribute({componentDatatype:f.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:h})}return new m.Geometry({attributes:s,indices:i,primitiveType:m.PrimitiveType.LINES,boundingSphere:new l.BoundingSphere(r.Cartesian3.ZERO,x),offsetAttribute:a._offsetAttribute})},function(a,t){return o.defined(t)&&(a=u.unpack(a,t)),u.createGeometry(a)}});
