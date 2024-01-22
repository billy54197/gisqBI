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
 */define(["./AttributeCompression-6f93ad0c","./Matrix3-2955527a","./Math-1fe079f3","./Matrix2-462b83d3","./createTaskProcessorWorker","./ComponentDatatype-f9ac3ed8","./defaultValue-ebbd2e4d","./WebGLConstants-544672c2","./RuntimeError-38a08050"],function(b,a,s,c,C,T,W,z,B){"use strict";const g=new a.Cartographic,w=new a.Cartesian3,p=new c.Rectangle,l=new a.Ellipsoid,i={min:void 0,max:void 0};return C(function(f,k){const n=new Uint16Array(f.positions);(function(e){e=new Float64Array(e);let t=0;i.min=e[t++],i.max=e[t++],c.Rectangle.unpack(e,t,p),t+=c.Rectangle.packedLength,a.Ellipsoid.unpack(e,t,l)})(f.packedBuffer);const o=p,y=l,M=i.min,x=i.max,r=n.length/3,d=n.subarray(0,r),m=n.subarray(r,2*r),h=n.subarray(2*r,3*r);b.AttributeCompression.zigZagDeltaDecode(d,m,h);const u=new Float64Array(n.length);for(let e=0;e<r;++e){const t=d[e],A=m[e],R=h[e],D=s.CesiumMath.lerp(o.west,o.east,t/32767),E=s.CesiumMath.lerp(o.south,o.north,A/32767),v=s.CesiumMath.lerp(M,x,R/32767),F=a.Cartographic.fromRadians(D,E,v,g),L=y.cartographicToCartesian(F,w);a.Cartesian3.pack(L,u,3*e)}return k.push(u.buffer),{positions:u.buffer}})});
