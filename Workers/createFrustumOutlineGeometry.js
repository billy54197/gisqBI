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
 */define(["./defaultValue-ebbd2e4d","./Transforms-5b74e989","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./FrustumGeometry-a4974e1d","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./WebGLConstants-544672c2","./Plane-7e97483e","./VertexFormat-5b02b45a"],function(g,m,h,y,u,_,F,v,C,G,N,O,Q,T){"use strict";function f(t){const e=t.frustum,r=t.orientation,s=t.origin,i=g.defaultValue(t._drawNearPlane,!0);let c,p;e instanceof u.PerspectiveFrustum?(c=0,p=u.PerspectiveFrustum.packedLength):e instanceof u.OrthographicFrustum&&(c=1,p=u.OrthographicFrustum.packedLength),this._frustumType=c,this._frustum=e.clone(),this._origin=h.Cartesian3.clone(s),this._orientation=m.Quaternion.clone(r),this._drawNearPlane=i,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+h.Cartesian3.packedLength+m.Quaternion.packedLength}f.pack=function(t,e,r){r=g.defaultValue(r,0);const s=t._frustumType,i=t._frustum;return e[r++]=s,s===0?(u.PerspectiveFrustum.pack(i,e,r),r+=u.PerspectiveFrustum.packedLength):(u.OrthographicFrustum.pack(i,e,r),r+=u.OrthographicFrustum.packedLength),h.Cartesian3.pack(t._origin,e,r),r+=h.Cartesian3.packedLength,m.Quaternion.pack(t._orientation,e,r),e[r+=m.Quaternion.packedLength]=t._drawNearPlane?1:0,e};const w=new u.PerspectiveFrustum,P=new u.OrthographicFrustum,b=new m.Quaternion,L=new h.Cartesian3;return f.unpack=function(t,e,r){e=g.defaultValue(e,0);const s=t[e++];let i;s===0?(i=u.PerspectiveFrustum.unpack(t,e,w),e+=u.PerspectiveFrustum.packedLength):(i=u.OrthographicFrustum.unpack(t,e,P),e+=u.OrthographicFrustum.packedLength);const c=h.Cartesian3.unpack(t,e,L);e+=h.Cartesian3.packedLength;const p=m.Quaternion.unpack(t,e,b),l=t[e+=m.Quaternion.packedLength]===1;if(!g.defined(r))return new f({frustum:i,origin:c,orientation:p,_drawNearPlane:l});const n=s===r._frustumType?r._frustum:void 0;return r._frustum=i.clone(n),r._frustumType=s,r._origin=h.Cartesian3.clone(c,r._origin),r._orientation=m.Quaternion.clone(p,r._orientation),r._drawNearPlane=l,r},f.createGeometry=function(t){const e=t._frustumType,r=t._frustum,s=t._origin,i=t._orientation,c=t._drawNearPlane,p=new Float64Array(24);u.FrustumGeometry._computeNearFarPlanes(s,i,e,r,p);const l=new F.GeometryAttributes({position:new _.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})});let n,a;const k=c?2:1,o=new Uint16Array(8*(k+1));let d=c?0:1;for(;d<2;++d)n=c?8*d:0,a=4*d,o[n]=a,o[n+1]=a+1,o[n+2]=a+1,o[n+3]=a+2,o[n+4]=a+2,o[n+5]=a+3,o[n+6]=a+3,o[n+7]=a;for(d=0;d<2;++d)n=8*(k+d),a=4*d,o[n]=a,o[n+1]=a+4,o[n+2]=a+1,o[n+3]=a+5,o[n+4]=a+2,o[n+5]=a+6,o[n+6]=a+3,o[n+7]=a+7;return new _.Geometry({attributes:l,indices:o,primitiveType:_.PrimitiveType.LINES,boundingSphere:m.BoundingSphere.fromVertices(p)})},function(t,e){return g.defined(e)&&(t=f.unpack(t,e)),f.createGeometry(t)}});
