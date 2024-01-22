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
 */define(["./arrayRemoveDuplicates-cadb0e8e","./BoundingRectangle-3be07fe8","./Transforms-5b74e989","./Matrix2-462b83d3","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./CoplanarPolygonGeometryLibrary-336b876e","./defaultValue-ebbd2e4d","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryInstance-4ef1b8a5","./GeometryPipeline-3cfa9822","./IndexDatatype-7ccfd280","./Math-1fe079f3","./PolygonGeometryLibrary-e1e72ec4","./PolygonPipeline-4fdc8b4f","./VertexFormat-5b02b45a","./combine-55e9f355","./RuntimeError-38a08050","./WebGLConstants-544672c2","./OrientedBoundingBox-48eb7862","./EllipsoidTangentPlane-da4fdd19","./AxisAlignedBoundingBox-a26a3fb6","./IntersectionTests-2a07bba4","./Plane-7e97483e","./AttributeCompression-6f93ad0c","./EncodedCartesian3-d4159969","./ArcType-efd92361","./EllipsoidRhumbLine-8bc8a516"],function(j,U,M,F,n,R,z,i,h,Y,q,J,S,N,u,W,d,me,ge,he,xe,fe,Ce,be,Pe,Ae,Le,we,Ge){"use strict";const Z=new n.Cartesian3,K=new U.BoundingRectangle,X=new F.Cartesian2,$=new F.Cartesian2,ee=new n.Cartesian3,te=new n.Cartesian3,ne=new n.Cartesian3,H=new n.Cartesian3,oe=new n.Cartesian3,re=new n.Cartesian3,Q=new M.Quaternion,ie=new n.Matrix3,ae=new n.Matrix3,se=new n.Cartesian3;function le(t,e,o,l,m,b,a,r,c){const P=t.positions;let s=W.PolygonPipeline.triangulate(t.positions2D,t.holes);s.length<3&&(s=[0,1,2]);const f=S.IndexDatatype.createTypedArray(P.length,s.length);f.set(s);let A=ie;if(l!==0){let g=M.Quaternion.fromAxisAngle(a,l,Q);if(A=n.Matrix3.fromQuaternion(g,A),e.tangent||e.bitangent){g=M.Quaternion.fromAxisAngle(a,-l,Q);const V=n.Matrix3.fromQuaternion(g,ae);r=n.Cartesian3.normalize(n.Matrix3.multiplyByVector(V,r,r),r),e.bitangent&&(c=n.Cartesian3.normalize(n.Cartesian3.cross(a,r,c),c))}}else A=n.Matrix3.clone(n.Matrix3.IDENTITY,A);const v=$;e.st&&(v.x=o.x,v.y=o.y);const L=P.length,w=3*L,G=new Float64Array(w),E=e.normal?new Float32Array(w):void 0,_=e.tangent?new Float32Array(w):void 0,T=e.bitangent?new Float32Array(w):void 0,C=e.st?new Float32Array(2*L):void 0;let y=0,k=0,p=0,I=0,B=0;for(let g=0;g<L;g++){const V=P[g];if(G[y++]=V.x,G[y++]=V.y,G[y++]=V.z,e.st)if(i.defined(m)&&m.positions.length===L)C[B++]=m.positions[g].x,C[B++]=m.positions[g].y;else{const O=b(n.Matrix3.multiplyByVector(A,V,Z),X);F.Cartesian2.subtract(O,v,O);const ue=N.CesiumMath.clamp(O.x/o.width,0,1),de=N.CesiumMath.clamp(O.y/o.height,0,1);C[B++]=ue,C[B++]=de}e.normal&&(E[k++]=a.x,E[k++]=a.y,E[k++]=a.z),e.tangent&&(_[I++]=r.x,_[I++]=r.y,_[I++]=r.z),e.bitangent&&(T[p++]=c.x,T[p++]=c.y,T[p++]=c.z)}const D=new Y.GeometryAttributes;return e.position&&(D.position=new h.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:G})),e.normal&&(D.normal=new h.GeometryAttribute({componentDatatype:R.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E})),e.tangent&&(D.tangent=new h.GeometryAttribute({componentDatatype:R.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:_})),e.bitangent&&(D.bitangent=new h.GeometryAttribute({componentDatatype:R.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),e.st&&(D.st=new h.GeometryAttribute({componentDatatype:R.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:C})),new h.Geometry({attributes:D,indices:f,primitiveType:h.PrimitiveType.TRIANGLES})}function x(t){const e=(t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy,o=t.textureCoordinates,l=i.defaultValue(t.vertexFormat,d.VertexFormat.DEFAULT);this._vertexFormat=d.VertexFormat.clone(l),this._polygonHierarchy=e,this._stRotation=i.defaultValue(t.stRotation,0),this._ellipsoid=n.Ellipsoid.clone(i.defaultValue(t.ellipsoid,n.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=o,this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(e,n.Cartesian3)+d.VertexFormat.packedLength+n.Ellipsoid.packedLength+(i.defined(o)?u.PolygonGeometryLibrary.computeHierarchyPackedLength(o,F.Cartesian2):1)+2}x.fromPositions=function(t){return new x({polygonHierarchy:{positions:(t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,textureCoordinates:t.textureCoordinates})},x.pack=function(t,e,o){return o=i.defaultValue(o,0),o=u.PolygonGeometryLibrary.packPolygonHierarchy(t._polygonHierarchy,e,o,n.Cartesian3),n.Ellipsoid.pack(t._ellipsoid,e,o),o+=n.Ellipsoid.packedLength,d.VertexFormat.pack(t._vertexFormat,e,o),o+=d.VertexFormat.packedLength,e[o++]=t._stRotation,i.defined(t._textureCoordinates)?o=u.PolygonGeometryLibrary.packPolygonHierarchy(t._textureCoordinates,e,o,F.Cartesian2):e[o++]=-1,e[o++]=t.packedLength,e};const ce=n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),ye=new d.VertexFormat,pe={polygonHierarchy:{}};return x.unpack=function(t,e,o){e=i.defaultValue(e,0);const l=u.PolygonGeometryLibrary.unpackPolygonHierarchy(t,e,n.Cartesian3);e=l.startingIndex,delete l.startingIndex;const m=n.Ellipsoid.unpack(t,e,ce);e+=n.Ellipsoid.packedLength;const b=d.VertexFormat.unpack(t,e,ye);e+=d.VertexFormat.packedLength;const a=t[e++],r=t[e]===-1?void 0:u.PolygonGeometryLibrary.unpackPolygonHierarchy(t,e,F.Cartesian2);i.defined(r)?(e=r.startingIndex,delete r.startingIndex):e++;const c=t[e++];return i.defined(o)||(o=new x(pe)),o._polygonHierarchy=l,o._ellipsoid=n.Ellipsoid.clone(m,o._ellipsoid),o._vertexFormat=d.VertexFormat.clone(b,o._vertexFormat),o._stRotation=a,o._textureCoordinates=r,o.packedLength=c,o},x.createGeometry=function(t){const e=t._vertexFormat,o=t._polygonHierarchy,l=t._stRotation,m=t._textureCoordinates,b=i.defined(m);let a=o.positions;if(a=j.arrayRemoveDuplicates(a,n.Cartesian3.equalsEpsilon,!0),a.length<3)return;let r=ee,c=te,P=ne,s=oe;const f=re;if(!z.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(a,H,s,f))return;if(r=n.Cartesian3.cross(s,f,r),r=n.Cartesian3.normalize(r,r),!n.Cartesian3.equalsEpsilon(H,n.Cartesian3.ZERO,N.CesiumMath.EPSILON6)){const p=t._ellipsoid.geodeticSurfaceNormal(H,se);n.Cartesian3.dot(r,p)<0&&(r=n.Cartesian3.negate(r,r),s=n.Cartesian3.negate(s,s))}const A=z.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(H,s,f),v=z.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(H,s,f);e.tangent&&(c=n.Cartesian3.clone(s,c)),e.bitangent&&(P=n.Cartesian3.clone(f,P));const L=u.PolygonGeometryLibrary.polygonsFromHierarchy(o,b,A,!1),w=L.hierarchy,G=L.polygons,E=b?u.PolygonGeometryLibrary.polygonsFromHierarchy(m,!0,function(p){return p},!1).polygons:void 0;if(w.length===0)return;a=w[0].outerRing;const _=M.BoundingSphere.fromPoints(a),T=u.PolygonGeometryLibrary.computeBoundingRectangle(r,v,a,l,K),C=[];for(let p=0;p<G.length;p++){const I=new q.GeometryInstance({geometry:le(G[p],e,T,l,b?E[p]:void 0,v,r,c,P)});C.push(I)}const y=J.GeometryPipeline.combineInstances(C)[0];y.attributes.position.values=new Float64Array(y.attributes.position.values),y.indices=S.IndexDatatype.createTypedArray(y.attributes.position.values.length/3,y.indices);const k=y.attributes;return e.position||delete k.position,new h.Geometry({attributes:k,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:_})},function(t,e){return i.defined(e)&&(t=x.unpack(t,e)),x.createGeometry(t)}});
