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
 */define(["exports","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Transforms-5b74e989","./Math-1fe079f3","./Matrix2-462b83d3"],function(z,y,E,N,O,x){"use strict";const j=Math.cos,I=Math.sin,v=Math.sqrt,V={computePosition:function(n,m,C,g,G,h,o){const S=m.radiiSquared,r=n.nwCorner,i=n.boundingRectangle;let a=r.latitude-n.granYCos*g+G*n.granXSin;const l=j(a),w=I(a),R=S.z*w;let t=r.longitude+g*n.granYSin+G*n.granXCos;const d=l*j(t),M=l*I(t),X=S.x*d,p=S.y*M,Y=v(X*d+p*M+R*w);if(h.x=X/Y,h.y=p/Y,h.z=R/Y,C){const s=n.stNwCorner;E.defined(s)?(a=s.latitude-n.stGranYCos*g+G*n.stGranXSin,t=s.longitude+g*n.stGranYSin+G*n.stGranXCos,o.x=(t-n.stWest)*n.lonScalar,o.y=(a-n.stSouth)*n.latScalar):(o.x=(t-i.west)*n.lonScalar,o.y=(a-i.south)*n.latScalar)}}},B=new x.Matrix2;let e=new y.Cartesian3;const L=new y.Cartographic;let P=new y.Cartesian3;const T=new N.GeographicProjection;function q(n,m,C,g,G,h,o){const S=Math.cos(m),r=g*S,i=C*S,a=Math.sin(m),l=g*a,w=C*a;e=T.project(n,e),e=y.Cartesian3.subtract(e,P,e);const R=x.Matrix2.fromRotation(m,B);e=x.Matrix2.multiplyByVector(R,e,e),e=y.Cartesian3.add(e,P,e),h-=1,o-=1;const t=(n=T.unproject(e,n)).latitude,d=t+h*w,M=t-r*o,X=t-r*o+h*w,p=Math.max(t,d,M,X),Y=Math.min(t,d,M,X),s=n.longitude,W=s+h*i,_=s+o*l,f=s+o*l+h*i;return{north:p,south:Y,east:Math.max(s,W,_,f),west:Math.min(s,W,_,f),granYCos:r,granYSin:l,granXCos:i,granXSin:w,nwCorner:n}}V.computeOptions=function(n,m,C,g,G,h,o){let S,r=n.east,i=n.west,a=n.north,l=n.south,w=!1,R=!1;a===O.CesiumMath.PI_OVER_TWO&&(w=!0),l===-O.CesiumMath.PI_OVER_TWO&&(R=!0);const t=a-l;S=i>r?O.CesiumMath.TWO_PI-i+r:r-i;const d=Math.ceil(S/m)+1,M=Math.ceil(t/m)+1,X=S/(d-1),p=t/(M-1),Y=x.Rectangle.northwest(n,h),s=x.Rectangle.center(n,L);C===0&&g===0||(s.longitude<Y.longitude&&(s.longitude+=O.CesiumMath.TWO_PI),P=T.project(s,P));const W=p,_=X,f=x.Rectangle.clone(n,G),c={granYCos:W,granYSin:0,granXCos:_,granXSin:0,nwCorner:Y,boundingRectangle:f,width:d,height:M,northCap:w,southCap:R};if(C!==0){const u=q(Y,C,X,p,0,d,M);a=u.north,l=u.south,r=u.east,i=u.west,c.granYCos=u.granYCos,c.granYSin=u.granYSin,c.granXCos=u.granXCos,c.granXSin=u.granXSin,f.north=a,f.south=l,f.east=r,f.west=i}if(g!==0){C-=g;const u=x.Rectangle.northwest(f,o),b=q(u,C,X,p,0,d,M);c.stGranYCos=b.granYCos,c.stGranXCos=b.granXCos,c.stGranYSin=b.granYSin,c.stGranXSin=b.granXSin,c.stNwCorner=u,c.stWest=b.west,c.stSouth=b.south}return c};var k=V;z.RectangleGeometryLibrary=k});
