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
 */define(["exports","./arrayRemoveDuplicates-cadb0e8e","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Math-1fe079f3","./PolylinePipeline-0a87fb90"],function(O,R,C,E,u,p){"use strict";const H={};function I(c,t){return u.CesiumMath.equalsEpsilon(c.latitude,t.latitude,u.CesiumMath.EPSILON10)&&u.CesiumMath.equalsEpsilon(c.longitude,t.longitude,u.CesiumMath.EPSILON10)}const N=new C.Cartographic,S=new C.Cartographic,T=new Array(2),G=new Array(2),V={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};H.computePositions=function(c,t,d,y,j,k){const w=function(e,s,l,o){const r=(s=R.arrayRemoveDuplicates(s,C.Cartesian3.equalsEpsilon)).length;if(r<2)return;const f=E.defined(o),q=E.defined(l),M=new Array(r),a=new Array(r),g=new Array(r),x=s[0];M[0]=x;const m=e.cartesianToCartographic(x,N);q&&(m.height=l[0]),a[0]=m.height,g[0]=f?o[0]:0;let P=a[0]===g[0],n=1;for(let A=1;A<r;++A){const D=s[A],h=e.cartesianToCartographic(D,S);q&&(h.height=l[A]),P=P&&h.height===0,I(m,h)?m.height<h.height&&(a[n-1]=h.height):(M[n]=D,a[n]=h.height,g[n]=f?o[A]:0,P=P&&a[n]===g[n],C.Cartographic.clone(h,m),++n)}return P||n<2?void 0:(M.length=n,a.length=n,g.length=n,{positions:M,topHeights:a,bottomHeights:g})}(c,t,d,y);if(!E.defined(w))return;t=w.positions,d=w.topHeights,y=w.bottomHeights;const F=t.length,z=F-2;let b,v;const L=u.CesiumMath.chordLength(j,c.maximumRadius),i=V;if(i.minDistance=L,i.ellipsoid=c,k){let e,s=0;for(e=0;e<F-1;e++)s+=p.PolylinePipeline.numberOfPoints(t[e],t[e+1],L)+1;b=new Float64Array(3*s),v=new Float64Array(3*s);const l=T,o=G;i.positions=l,i.height=o;let r=0;for(e=0;e<F-1;e++){l[0]=t[e],l[1]=t[e+1],o[0]=d[e],o[1]=d[e+1];const f=p.PolylinePipeline.generateArc(i);b.set(f,r),o[0]=y[e],o[1]=y[e+1],v.set(p.PolylinePipeline.generateArc(i),r),r+=f.length}}else i.positions=t,i.height=d,b=new Float64Array(p.PolylinePipeline.generateArc(i)),i.height=y,v=new Float64Array(p.PolylinePipeline.generateArc(i));return{bottomPositions:v,topPositions:b,numCorners:z}};var W=H;O.WallGeometryLibrary=W});
