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
 */define(["exports","./Matrix2-462b83d3","./Matrix3-2955527a","./ComponentDatatype-f9ac3ed8","./defaultValue-ebbd2e4d","./Math-1fe079f3"],function(p,f,h,d,l,C){"use strict";const c={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4",getMathType:function(t){switch(t){case c.SCALAR:return Number;case c.VEC2:return f.Cartesian2;case c.VEC3:return h.Cartesian3;case c.VEC4:return f.Cartesian4;case c.MAT2:return f.Matrix2;case c.MAT3:return h.Matrix3;case c.MAT4:return f.Matrix4}},getNumberOfComponents:function(t){switch(t){case c.SCALAR:return 1;case c.VEC2:return 2;case c.VEC3:return 3;case c.VEC4:case c.MAT2:return 4;case c.MAT3:return 9;case c.MAT4:return 16}},getAttributeLocationCount:function(t){switch(t){case c.SCALAR:case c.VEC2:case c.VEC3:case c.VEC4:return 1;case c.MAT2:return 2;case c.MAT3:return 3;case c.MAT4:return 4}},getGlslType:function(t){switch(t){case c.SCALAR:return"float";case c.VEC2:return"vec2";case c.VEC3:return"vec3";case c.VEC4:return"vec4";case c.MAT2:return"mat2";case c.MAT3:return"mat3";case c.MAT4:return"mat4"}}};var D=Object.freeze(c);const T=1/256,a={octEncodeInRange:function(t,e,o){if(o.x=t.x/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),o.y=t.y/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),t.z<0){const n=o.x,r=o.y;o.x=(1-Math.abs(r))*C.CesiumMath.signNotZero(n),o.y=(1-Math.abs(n))*C.CesiumMath.signNotZero(r)}return o.x=C.CesiumMath.toSNorm(o.x,e),o.y=C.CesiumMath.toSNorm(o.y,e),o},octEncode:function(t,e){return a.octEncodeInRange(t,255,e)}},y=new f.Cartesian2,b=new Uint8Array(1);function A(t){return b[0]=t,b[0]}a.octEncodeToCartesian4=function(t,e){return a.octEncodeInRange(t,65535,y),e.x=A(y.x*T),e.y=A(y.x),e.z=A(y.y*T),e.w=A(y.y),e},a.octDecodeInRange=function(t,e,o,n){if(n.x=C.CesiumMath.fromSNorm(t,o),n.y=C.CesiumMath.fromSNorm(e,o),n.z=1-(Math.abs(n.x)+Math.abs(n.y)),n.z<0){const r=n.x;n.x=(1-Math.abs(n.y))*C.CesiumMath.signNotZero(r),n.y=(1-Math.abs(r))*C.CesiumMath.signNotZero(n.y)}return h.Cartesian3.normalize(n,n)},a.octDecode=function(t,e,o){return a.octDecodeInRange(t,e,255,o)},a.octDecodeFromCartesian4=function(t,e){const o=256*t.x+t.y,n=256*t.z+t.w;return a.octDecodeInRange(o,n,65535,e)},a.octPackFloat=function(t){return 256*t.x+t.y};const E=new f.Cartesian2;function x(t){return t>>1^-(1&t)}a.octEncodeFloat=function(t){return a.octEncode(t,E),a.octPackFloat(E)},a.octDecodeFloat=function(t,e){const o=t/256,n=Math.floor(o),r=256*(o-n);return a.octDecode(n,r,e)},a.octPack=function(t,e,o,n){const r=a.octEncodeFloat(t),s=a.octEncodeFloat(e),i=a.octEncode(o,E);return n.x=65536*i.x+r,n.y=65536*i.y+s,n},a.octUnpack=function(t,e,o,n){let r=t.x/65536;const s=Math.floor(r),i=65536*(r-s);r=t.y/65536;const u=Math.floor(r),M=65536*(r-u);a.octDecodeFloat(i,e),a.octDecodeFloat(M,o),a.octDecode(s,u,n)},a.compressTextureCoordinates=function(t){return 4096*(4095*t.x|0)+(4095*t.y|0)},a.decompressTextureCoordinates=function(t,e){const o=t/4096,n=Math.floor(o);return e.x=n/4095,e.y=(t-4096*n)/4095,e},a.zigZagDeltaDecode=function(t,e,o){const n=t.length;let r=0,s=0,i=0;for(let u=0;u<n;++u)r+=x(t[u]),s+=x(e[u]),t[u]=r,e[u]=s,l.defined(o)&&(i+=x(o[u]),o[u]=i)},a.dequantize=function(t,e,o,n){const r=D.getNumberOfComponents(o);let s;switch(e){case d.ComponentDatatype.BYTE:s=127;break;case d.ComponentDatatype.UNSIGNED_BYTE:s=255;break;case d.ComponentDatatype.SHORT:s=32767;break;case d.ComponentDatatype.UNSIGNED_SHORT:s=65535;break;case d.ComponentDatatype.INT:s=2147483647;break;case d.ComponentDatatype.UNSIGNED_INT:s=4294967295}const i=new Float32Array(n*r);for(let u=0;u<n;u++)for(let M=0;M<r;M++){const m=u*r+M;i[m]=Math.max(t[m]/s,-1)}return i},a.decodeRGB565=function(t,e){const o=t.length;l.defined(e)||(e=new Float32Array(3*o));const n=1/31;for(let r=0;r<o;r++){const s=t[r],i=s>>11,u=s>>5&63,M=31&s,m=3*r;e[m]=i*n,e[m+1]=.015873015873015872*u,e[m+2]=M*n}return e};var g=a;p.AttributeCompression=g});
