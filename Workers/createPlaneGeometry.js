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
 */define(["./defaultValue-ebbd2e4d","./Transforms-5b74e989","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./VertexFormat-5b02b45a","./Math-1fe079f3","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./WebGLConstants-544672c2"],function(m,f,l,p,i,A,c,d,x,w,v,G){"use strict";function u(r){r=m.defaultValue(r,m.defaultValue.EMPTY_OBJECT);const e=m.defaultValue(r.vertexFormat,c.VertexFormat.DEFAULT);this._vertexFormat=e,this._workerName="createPlaneGeometry"}u.packedLength=c.VertexFormat.packedLength,u.pack=function(r,e,n){return n=m.defaultValue(n,0),c.VertexFormat.pack(r._vertexFormat,e,n),e};const b=new c.VertexFormat,F={vertexFormat:b};u.unpack=function(r,e,n){e=m.defaultValue(e,0);const o=c.VertexFormat.unpack(r,e,b);return m.defined(n)?(n._vertexFormat=c.VertexFormat.clone(o,n._vertexFormat),n):new u(F)};const s=new l.Cartesian3(-.5,-.5,0),y=new l.Cartesian3(.5,.5,0);return u.createGeometry=function(r){const e=r._vertexFormat,n=new A.GeometryAttributes;let o,a;if(e.position){if(a=new Float64Array(12),a[0]=s.x,a[1]=s.y,a[2]=0,a[3]=y.x,a[4]=s.y,a[5]=0,a[6]=y.x,a[7]=y.y,a[8]=0,a[9]=s.x,a[10]=y.y,a[11]=0,n.position=new i.GeometryAttribute({componentDatatype:p.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a}),e.normal){const t=new Float32Array(12);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=1,t[9]=0,t[10]=0,t[11]=1,n.normal=new i.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(e.st){const t=new Float32Array(8);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,n.st=new i.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})}if(e.tangent){const t=new Float32Array(12);t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,n.tangent=new i.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(e.bitangent){const t=new Float32Array(12);t[0]=0,t[1]=1,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=1,t[8]=0,t[9]=0,t[10]=1,t[11]=0,n.bitangent=new i.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}o=new Uint16Array(6),o[0]=0,o[1]=1,o[2]=2,o[3]=0,o[4]=2,o[5]=3}return new i.Geometry({attributes:n,indices:o,primitiveType:i.PrimitiveType.TRIANGLES,boundingSphere:new f.BoundingSphere(l.Cartesian3.ZERO,Math.sqrt(2))})},function(r,e){return m.defined(e)&&(r=u.unpack(r,e)),u.createGeometry(r)}});
