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
 */define(["exports","./Matrix3-2955527a","./Math-1fe079f3","./Transforms-5b74e989"],function(L,e,w,Q){"use strict";const b={},W=new e.Cartesian3,G=new e.Cartesian3,H=new Q.Quaternion,N=new e.Matrix3;function V(c,x,z,P,g,O,E,m,_,o){const l=c+x;e.Cartesian3.multiplyByScalar(P,Math.cos(l),W),e.Cartesian3.multiplyByScalar(z,Math.sin(l),G),e.Cartesian3.add(W,G,W);let y=Math.cos(c);y*=y;let C=Math.sin(c);C*=C;const n=O/Math.sqrt(E*y+g*C)/m;return Q.Quaternion.fromAxisAngle(W,n,H),e.Matrix3.fromQuaternion(H,N),e.Matrix3.multiplyByVector(N,_,o),e.Cartesian3.normalize(o,o),e.Cartesian3.multiplyByScalar(o,m,o),o}const j=new e.Cartesian3,q=new e.Cartesian3,v=new e.Cartesian3,U=new e.Cartesian3;b.raisePositionsToHeight=function(c,x,z){const P=x.ellipsoid,g=x.height,O=x.extrudedHeight,E=z?c.length/3*2:c.length/3,m=new Float64Array(3*E),_=c.length,o=z?_:0;for(let l=0;l<_;l+=3){const y=l+1,C=l+2,n=e.Cartesian3.fromArray(c,l,j);P.scaleToGeodeticSurface(n,n);const h=e.Cartesian3.clone(n,q),M=P.geodeticSurfaceNormal(n,U),p=e.Cartesian3.multiplyByScalar(M,g,v);e.Cartesian3.add(n,p,n),z&&(e.Cartesian3.multiplyByScalar(M,O,p),e.Cartesian3.add(h,p,h),m[l+o]=h.x,m[y+o]=h.y,m[C+o]=h.z),m[l]=n.x,m[y]=n.y,m[C]=n.z}return m};const Z=new e.Cartesian3,k=new e.Cartesian3,D=new e.Cartesian3;b.computeEllipsePositions=function(c,x,z){const P=c.semiMinorAxis,g=c.semiMajorAxis,O=c.rotation,E=c.center,m=8*c.granularity,_=P*P,o=g*g,l=g*P,y=e.Cartesian3.magnitude(E),C=e.Cartesian3.normalize(E,Z);let n=e.Cartesian3.cross(e.Cartesian3.UNIT_Z,E,k);n=e.Cartesian3.normalize(n,n);const h=e.Cartesian3.cross(C,n,D);let M=1+Math.ceil(w.CesiumMath.PI_OVER_TWO/m);const p=w.CesiumMath.PI_OVER_TWO/(M-1);let u=w.CesiumMath.PI_OVER_TWO-M*p;u<0&&(M-=Math.ceil(Math.abs(u)/p));const r=x?new Array(3*(M*(M+2)*2)):void 0;let i=0,t=j,s=q;const F=4*M*3;let f=F-1,A=0;const a=z?new Array(F):void 0;let d,T,R,S,I;for(u=w.CesiumMath.PI_OVER_TWO,t=V(u,O,h,n,_,l,o,y,C,t),x&&(r[i++]=t.x,r[i++]=t.y,r[i++]=t.z),z&&(a[f--]=t.z,a[f--]=t.y,a[f--]=t.x),u=w.CesiumMath.PI_OVER_TWO-p,d=1;d<M+1;++d){if(t=V(u,O,h,n,_,l,o,y,C,t),s=V(Math.PI-u,O,h,n,_,l,o,y,C,s),x){for(r[i++]=t.x,r[i++]=t.y,r[i++]=t.z,R=2*d+2,T=1;T<R-1;++T)S=T/(R-1),I=e.Cartesian3.lerp(t,s,S,v),r[i++]=I.x,r[i++]=I.y,r[i++]=I.z;r[i++]=s.x,r[i++]=s.y,r[i++]=s.z}z&&(a[f--]=t.z,a[f--]=t.y,a[f--]=t.x,a[A++]=s.x,a[A++]=s.y,a[A++]=s.z),u=w.CesiumMath.PI_OVER_TWO-(d+1)*p}for(d=M;d>1;--d){if(u=w.CesiumMath.PI_OVER_TWO-(d-1)*p,t=V(-u,O,h,n,_,l,o,y,C,t),s=V(u+Math.PI,O,h,n,_,l,o,y,C,s),x){for(r[i++]=t.x,r[i++]=t.y,r[i++]=t.z,R=2*(d-1)+2,T=1;T<R-1;++T)S=T/(R-1),I=e.Cartesian3.lerp(t,s,S,v),r[i++]=I.x,r[i++]=I.y,r[i++]=I.z;r[i++]=s.x,r[i++]=s.y,r[i++]=s.z}z&&(a[f--]=t.z,a[f--]=t.y,a[f--]=t.x,a[A++]=s.x,a[A++]=s.y,a[A++]=s.z)}u=w.CesiumMath.PI_OVER_TWO,t=V(-u,O,h,n,_,l,o,y,C,t);const B={};return x&&(r[i++]=t.x,r[i++]=t.y,r[i++]=t.z,B.positions=r,B.numPts=M),z&&(a[f--]=t.z,a[f--]=t.y,a[f--]=t.x,B.outerPositions=a),B};var J=b;L.EllipseGeometryLibrary=J});
