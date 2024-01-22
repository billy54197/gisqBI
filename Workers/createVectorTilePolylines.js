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
 */define(["./Matrix3-2955527a","./combine-55e9f355","./AttributeCompression-6f93ad0c","./Math-1fe079f3","./IndexDatatype-7ccfd280","./Matrix2-462b83d3","./createTaskProcessorWorker","./defaultValue-ebbd2e4d","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./RuntimeError-38a08050"],function(a,V,Y,x,D,E,Z,ua,fa,da,pa){"use strict";const j=new a.Cartographic,q=new a.Cartesian3,_=new E.Rectangle,v=new a.Ellipsoid,G=new a.Cartesian3,k={min:void 0,max:void 0},W=new a.Cartesian3,B=new a.Cartesian3,O=new a.Cartesian3,J=new a.Cartesian3,z=new a.Cartesian3;return Z(function(b,I){const K=new Uint16Array(b.positions),Q=new Uint16Array(b.widths),P=new Uint32Array(b.counts),X=new Uint16Array(b.batchIds);(function(t){t=new Float64Array(t);let n=0;k.min=t[n++],k.max=t[n++],E.Rectangle.unpack(t,n,_),n+=E.Rectangle.packedLength,a.Ellipsoid.unpack(t,n,v),n+=a.Ellipsoid.packedLength,a.Cartesian3.unpack(t,n,G)})(b.packedBuffer);const $=v,U=G,o=function(t,n,C,e,s){const r=t.length/3,c=t.subarray(0,r),g=t.subarray(r,2*r),i=t.subarray(2*r,3*r);Y.AttributeCompression.zigZagDeltaDecode(c,g,i);const p=new Float64Array(t.length);for(let y=0;y<r;++y){const ta=c[y],na=g[y],ea=i[y],ra=x.CesiumMath.lerp(n.west,n.east,ta/32767),sa=x.CesiumMath.lerp(n.south,n.north,na/32767),ia=x.CesiumMath.lerp(C,e,ea/32767),oa=a.Cartographic.fromRadians(ra,sa,ia,j),ca=s.cartographicToCartesian(oa,q);a.Cartesian3.pack(ca,p,3*y)}return p}(K,_,k.min,k.max,$),M=o.length/3,w=4*M-4,R=new Float32Array(3*w),T=new Float32Array(3*w),F=new Float32Array(3*w),m=new Float32Array(2*w),N=new Uint16Array(w);let u,A=0,H=0,aa=0,d=0,L=P.length;for(u=0;u<L;++u){const t=P[u],n=Q[u],C=X[u];for(let e=0;e<t;++e){let s;if(e===0){const i=a.Cartesian3.unpack(o,3*d,W),p=a.Cartesian3.unpack(o,3*(d+1),B);s=a.Cartesian3.subtract(i,p,O),a.Cartesian3.add(i,s,s)}else s=a.Cartesian3.unpack(o,3*(d+e-1),O);const r=a.Cartesian3.unpack(o,3*(d+e),J);let c;if(e===t-1){const i=a.Cartesian3.unpack(o,3*(d+t-1),W),p=a.Cartesian3.unpack(o,3*(d+t-2),B);c=a.Cartesian3.subtract(i,p,z),a.Cartesian3.add(i,c,c)}else c=a.Cartesian3.unpack(o,3*(d+e+1),z);a.Cartesian3.subtract(s,U,s),a.Cartesian3.subtract(r,U,r),a.Cartesian3.subtract(c,U,c);const g=e===t-1?2:4;for(let i=e===0?2:0;i<g;++i){a.Cartesian3.pack(r,R,A),a.Cartesian3.pack(s,T,A),a.Cartesian3.pack(c,F,A),A+=3;const p=i-2<0?-1:1;m[H++]=i%2*2-1,m[H++]=p*n,N[aa++]=C}}d+=t}const f=D.IndexDatatype.createTypedArray(w,6*M-6);let l=0,h=0;for(L=M-1,u=0;u<L;++u)f[h++]=l,f[h++]=l+2,f[h++]=l+1,f[h++]=l+1,f[h++]=l+2,f[h++]=l+3,l+=4;I.push(R.buffer,T.buffer,F.buffer),I.push(m.buffer,N.buffer,f.buffer);let S={indexDatatype:f.BYTES_PER_ELEMENT===2?D.IndexDatatype.UNSIGNED_SHORT:D.IndexDatatype.UNSIGNED_INT,currentPositions:R.buffer,previousPositions:T.buffer,nextPositions:F.buffer,expandAndWidth:m.buffer,batchIds:N.buffer,indices:f.buffer};if(b.keepDecodedPositions){const t=function(n){const C=n.length,e=new Uint32Array(C+1);let s=0;for(let r=0;r<C;++r)e[r]=s,s+=n[r];return e[C]=s,e}(P);I.push(o.buffer,t.buffer),S=V.combine(S,{decodedPositions:o.buffer,decodedPositionOffsets:t.buffer})}return S})});
