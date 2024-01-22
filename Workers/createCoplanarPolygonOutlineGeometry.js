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
 */define(["./arrayRemoveDuplicates-cadb0e8e","./Transforms-5b74e989","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./CoplanarPolygonGeometryLibrary-336b876e","./defaultValue-ebbd2e4d","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryInstance-4ef1b8a5","./GeometryPipeline-3cfa9822","./IndexDatatype-7ccfd280","./PolygonGeometryLibrary-e1e72ec4","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./WebGLConstants-544672c2","./OrientedBoundingBox-48eb7862","./EllipsoidTangentPlane-da4fdd19","./AxisAlignedBoundingBox-a26a3fb6","./IntersectionTests-2a07bba4","./Plane-7e97483e","./AttributeCompression-6f93ad0c","./EncodedCartesian3-d4159969","./ArcType-efd92361","./EllipsoidRhumbLine-8bc8a516","./PolygonPipeline-4fdc8b4f"],function(m,f,l,g,b,i,p,h,P,G,L,u,E,A,H,k,x,w,I,_,v,B,D,O,V,M,R){"use strict";function C(t){const e=t.length,n=new Float64Array(3*e),r=L.IndexDatatype.createTypedArray(e,2*e);let c=0,y=0;for(let o=0;o<e;o++){const s=t[o];n[c++]=s.x,n[c++]=s.y,n[c++]=s.z,r[y++]=o,r[y++]=(o+1)%e}const d=new h.GeometryAttributes({position:new p.GeometryAttribute({componentDatatype:g.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new p.Geometry({attributes:d,indices:r,primitiveType:p.PrimitiveType.LINES})}function a(t){const e=(t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(e,l.Cartesian3)+1}a.fromPositions=function(t){return new a({polygonHierarchy:{positions:(t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT)).positions}})},a.pack=function(t,e,n){return n=i.defaultValue(n,0),e[n=u.PolygonGeometryLibrary.packPolygonHierarchy(t._polygonHierarchy,e,n,l.Cartesian3)]=t.packedLength,e};const T={polygonHierarchy:{}};return a.unpack=function(t,e,n){e=i.defaultValue(e,0);const r=u.PolygonGeometryLibrary.unpackPolygonHierarchy(t,e,l.Cartesian3);e=r.startingIndex,delete r.startingIndex;const c=t[e];return i.defined(n)||(n=new a(T)),n._polygonHierarchy=r,n.packedLength=c,n},a.createGeometry=function(t){const e=t._polygonHierarchy;let n=e.positions;if(n=m.arrayRemoveDuplicates(n,l.Cartesian3.equalsEpsilon,!0),n.length<3||!b.CoplanarPolygonGeometryLibrary.validOutline(n))return;const r=u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(e,!1);if(r.length===0)return;const c=[];for(let o=0;o<r.length;o++){const s=new P.GeometryInstance({geometry:C(r[o])});c.push(s)}const y=G.GeometryPipeline.combineInstances(c)[0],d=f.BoundingSphere.fromPoints(e.positions);return new p.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:d})},function(t,e){return i.defined(e)&&(t=a.unpack(t,e)),t._ellipsoid=l.Ellipsoid.clone(t._ellipsoid),a.createGeometry(t)}});
