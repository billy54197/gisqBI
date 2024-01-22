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
 */define(["./defaultValue-ebbd2e4d","./Matrix3-2955527a","./arrayRemoveDuplicates-cadb0e8e","./BoundingRectangle-3be07fe8","./Transforms-5b74e989","./Matrix2-462b83d3","./ComponentDatatype-f9ac3ed8","./PolylineVolumeGeometryLibrary-65969b57","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./IndexDatatype-7ccfd280","./Math-1fe079f3","./PolygonPipeline-4fdc8b4f","./combine-55e9f355","./RuntimeError-38a08050","./WebGLConstants-544672c2","./EllipsoidTangentPlane-da4fdd19","./AxisAlignedBoundingBox-a26a3fb6","./IntersectionTests-2a07bba4","./Plane-7e97483e","./PolylinePipeline-0a87fb90","./EllipsoidGeodesic-7acc6014","./EllipsoidRhumbLine-8bc8a516"],function(d,a,v,C,A,h,V,P,_,R,L,w,T,S,x,O,M,N,W,U,q,F,H){"use strict";function g(e){const t=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=a.Ellipsoid.clone(d.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,P.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,w.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";let i=1+t.length*a.Cartesian3.packedLength;i+=1+n.length*h.Cartesian2.packedLength,this.packedLength=i+a.Ellipsoid.packedLength+2}g.pack=function(e,t,n){let i;n=d.defaultValue(n,0);const p=e._positions;let r=p.length;for(t[n++]=r,i=0;i<r;++i,n+=a.Cartesian3.packedLength)a.Cartesian3.pack(p[i],t,n);const y=e._shape;for(r=y.length,t[n++]=r,i=0;i<r;++i,n+=h.Cartesian2.packedLength)h.Cartesian2.pack(y[i],t,n);return a.Ellipsoid.pack(e._ellipsoid,t,n),n+=a.Ellipsoid.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};const D=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),m={polylinePositions:void 0,shapePositions:void 0,ellipsoid:D,height:void 0,cornerType:void 0,granularity:void 0};g.unpack=function(e,t,n){let i;t=d.defaultValue(t,0);let p=e[t++];const r=new Array(p);for(i=0;i<p;++i,t+=a.Cartesian3.packedLength)r[i]=a.Cartesian3.unpack(e,t);p=e[t++];const y=new Array(p);for(i=0;i<p;++i,t+=h.Cartesian2.packedLength)y[i]=h.Cartesian2.unpack(e,t);const E=a.Ellipsoid.unpack(e,t,D);t+=a.Ellipsoid.packedLength;const l=e[t++],b=e[t];return d.defined(n)?(n._positions=r,n._shape=y,n._ellipsoid=a.Ellipsoid.clone(E,n._ellipsoid),n._cornerType=l,n._granularity=b,n):(m.polylinePositions=r,m.shapePositions=y,m.cornerType=l,m.granularity=b,new g(m))};const B=new C.BoundingRectangle;return g.createGeometry=function(e){const t=e._positions,n=v.arrayRemoveDuplicates(t,a.Cartesian3.equalsEpsilon);let i=e._shape;if(i=P.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(i),n.length<2||i.length<3)return;T.PolygonPipeline.computeWindingOrder2D(i)===T.WindingOrder.CLOCKWISE&&i.reverse();const p=C.BoundingRectangle.fromPoints(i,B);return function(r,y){const E=new R.GeometryAttributes;E.position=new _.GeometryAttribute({componentDatatype:V.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r});const l=y.length,b=E.position.values.length/3,k=r.length/3/l,s=L.IndexDatatype.createTypedArray(b,2*l*(k+1));let f,o,c=0;f=0;let u=f*l;for(o=0;o<l-1;o++)s[c++]=o+u,s[c++]=o+u+1;for(s[c++]=l-1+u,s[c++]=u,f=k-1,u=f*l,o=0;o<l-1;o++)s[c++]=o+u,s[c++]=o+u+1;for(s[c++]=l-1+u,s[c++]=u,f=0;f<k-1;f++){const G=l*f,I=G+l;for(o=0;o<l;o++)s[c++]=o+G,s[c++]=o+I}return new _.Geometry({attributes:E,indices:L.IndexDatatype.createTypedArray(b,s),boundingSphere:A.BoundingSphere.fromVertices(r),primitiveType:_.PrimitiveType.LINES})}(P.PolylineVolumeGeometryLibrary.computePositions(n,i,p,e,!1),i)},function(e,t){return d.defined(t)&&(e=g.unpack(e,t)),e._ellipsoid=a.Ellipsoid.clone(e._ellipsoid),g.createGeometry(e)}});
