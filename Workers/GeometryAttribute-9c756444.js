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
 */define(["exports","./Matrix2-462b83d3","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./WebGLConstants-544672c2","./Transforms-5b74e989"],function(E,e,r,u,N,y){"use strict";var A=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});const a={POINTS:N.WebGLConstants.POINTS,LINES:N.WebGLConstants.LINES,LINE_LOOP:N.WebGLConstants.LINE_LOOP,LINE_STRIP:N.WebGLConstants.LINE_STRIP,TRIANGLES:N.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:N.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:N.WebGLConstants.TRIANGLE_FAN,isLines:function(t){return t===a.LINES||t===a.LINE_LOOP||t===a.LINE_STRIP},isTriangles:function(t){return t===a.TRIANGLES||t===a.TRIANGLE_STRIP||t===a.TRIANGLE_FAN},validate:function(t){return t===a.POINTS||t===a.LINES||t===a.LINE_LOOP||t===a.LINE_STRIP||t===a.TRIANGLES||t===a.TRIANGLE_STRIP||t===a.TRIANGLE_FAN}};var x=Object.freeze(a);function C(t){t=u.defaultValue(t,u.defaultValue.EMPTY_OBJECT),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=u.defaultValue(t.primitiveType,x.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=u.defaultValue(t.geometryType,A.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}C.computeNumberOfVertices=function(t){let l=-1;for(const I in t.attributes)if(t.attributes.hasOwnProperty(I)&&u.defined(t.attributes[I])&&u.defined(t.attributes[I].values)){const s=t.attributes[I];l=s.values.length/s.componentsPerAttribute}return l};const G=new r.Cartographic,R=new r.Cartesian3,S=new e.Matrix4,_=[new r.Cartographic,new r.Cartographic,new r.Cartographic],O=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],g=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],w=new r.Cartesian3,V=new y.Quaternion,M=new e.Matrix4,v=new e.Matrix2;C._textureCoordinateRotationPoints=function(t,l,I,s){let i;const F=e.Rectangle.center(s,G),W=r.Cartographic.toCartesian(F,I,R),Y=y.Transforms.eastNorthUpToFixedFrame(W,I,S),P=e.Matrix4.inverse(Y,S),L=O,T=_;T[0].longitude=s.west,T[0].latitude=s.south,T[1].longitude=s.west,T[1].latitude=s.north,T[2].longitude=s.east,T[2].latitude=s.south;let n=w;for(i=0;i<3;i++)r.Cartographic.toCartesian(T[i],I,n),n=e.Matrix4.multiplyByPointAsVector(P,n,n),L[i].x=n.x,L[i].y=n.y;const B=y.Quaternion.fromAxisAngle(r.Cartesian3.UNIT_Z,-l,V),z=r.Matrix3.fromQuaternion(B,M),k=t.length;let b=Number.POSITIVE_INFINITY,f=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,d=Number.NEGATIVE_INFINITY;for(i=0;i<k;i++)n=e.Matrix4.multiplyByPointAsVector(P,t[i],n),n=r.Matrix3.multiplyByVector(z,n,n),b=Math.min(b,n.x),f=Math.min(f,n.y),h=Math.max(h,n.x),d=Math.max(d,n.y);const Q=e.Matrix2.fromRotation(l,v),o=g;o[0].x=b,o[0].y=f,o[1].x=b,o[1].y=d,o[2].x=h,o[2].y=f;const p=L[0],j=L[2].x-p.x,D=L[1].y-p.y;for(i=0;i<3;i++){const c=o[i];e.Matrix2.multiplyByVector(Q,c,c),c.x=(c.x-p.x)/j,c.y=(c.y-p.y)/D}const J=o[0],U=o[1],Z=o[2],m=new Array(6);return e.Cartesian2.pack(J,m),e.Cartesian2.pack(U,m,2),e.Cartesian2.pack(Z,m,4),m},E.Geometry=C,E.GeometryAttribute=function(t){t=u.defaultValue(t,u.defaultValue.EMPTY_OBJECT),this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=u.defaultValue(t.normalize,!1),this.values=t.values},E.GeometryType=A,E.PrimitiveType=x});
