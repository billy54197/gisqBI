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
 */define(["./Transforms-5b74e989","./Matrix2-462b83d3","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./CylinderGeometryLibrary-187f9348","./defaultValue-ebbd2e4d","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryOffsetAttribute-739bec2c","./IndexDatatype-7ccfd280","./Math-1fe079f3","./combine-55e9f355","./RuntimeError-38a08050","./WebGLConstants-544672c2"],function(O,A,V,R,L,r,m,g,v,C,E,M,x,T){"use strict";const _=new A.Cartesian2;function d(t){const e=(t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT)).length,n=t.topRadius,u=t.bottomRadius,i=r.defaultValue(t.slices,128),f=Math.max(r.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=n,this._bottomRadius=u,this._slices=i,this._numberOfVerticalLines=f,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}d.packedLength=6,d.pack=function(t,e,n){return n=r.defaultValue(n,0),e[n++]=t._length,e[n++]=t._topRadius,e[n++]=t._bottomRadius,e[n++]=t._slices,e[n++]=t._numberOfVerticalLines,e[n]=r.defaultValue(t._offsetAttribute,-1),e};const l={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return d.unpack=function(t,e,n){e=r.defaultValue(e,0);const u=t[e++],i=t[e++],f=t[e++],p=t[e++],b=t[e++],c=t[e];return r.defined(n)?(n._length=u,n._topRadius=i,n._bottomRadius=f,n._slices=p,n._numberOfVerticalLines=b,n._offsetAttribute=c===-1?void 0:c,n):(l.length=u,l.topRadius=i,l.bottomRadius=f,l.slices=p,l.numberOfVerticalLines=b,l.offsetAttribute=c===-1?void 0:c,new d(l))},d.createGeometry=function(t){let e=t._length;const n=t._topRadius,u=t._bottomRadius,i=t._slices,f=t._numberOfVerticalLines;if(e<=0||n<0||u<0||n===0&&u===0)return;const p=2*i,b=L.CylinderGeometryLibrary.computePositions(e,n,u,i,!1);let c,G=2*i;if(f>0){const y=Math.min(f,i);c=Math.round(i/y),G+=y}const a=C.IndexDatatype.createTypedArray(p,2*G);let o,s=0;for(o=0;o<i-1;o++)a[s++]=o,a[s++]=o+1,a[s++]=o+i,a[s++]=o+1+i;if(a[s++]=i-1,a[s++]=0,a[s++]=i+i-1,a[s++]=i,f>0)for(o=0;o<i;o+=c)a[s++]=o,a[s++]=o+i;const h=new g.GeometryAttributes;h.position=new m.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:b}),_.x=.5*e,_.y=Math.max(u,n);const w=new O.BoundingSphere(V.Cartesian3.ZERO,A.Cartesian2.magnitude(_));if(r.defined(t._offsetAttribute)){e=b.length;const y=t._offsetAttribute===v.GeometryOffsetAttribute.NONE?0:1,D=new Uint8Array(e/3).fill(y);h.applyOffset=new m.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:D})}return new m.Geometry({attributes:h,indices:a,primitiveType:m.PrimitiveType.LINES,boundingSphere:w,offsetAttribute:t._offsetAttribute})},function(t,e){return r.defined(e)&&(t=d.unpack(t,e)),d.createGeometry(t)}});
