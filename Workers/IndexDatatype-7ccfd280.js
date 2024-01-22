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
 */define(["exports","./defaultValue-ebbd2e4d","./Math-1fe079f3","./WebGLConstants-544672c2"],function(S,i,N,t){"use strict";const n={UNSIGNED_BYTE:t.WebGLConstants.UNSIGNED_BYTE,UNSIGNED_SHORT:t.WebGLConstants.UNSIGNED_SHORT,UNSIGNED_INT:t.WebGLConstants.UNSIGNED_INT,getSizeInBytes:function(r){switch(r){case n.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case n.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case n.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}},fromSizeInBytes:function(r){switch(r){case 2:return n.UNSIGNED_SHORT;case 4:return n.UNSIGNED_INT;case 1:return n.UNSIGNED_BYTE}},validate:function(r){return i.defined(r)&&(r===n.UNSIGNED_BYTE||r===n.UNSIGNED_SHORT||r===n.UNSIGNED_INT)},createTypedArray:function(r,e){return r>=N.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(e):new Uint16Array(e)},createTypedArrayFromArrayBuffer:function(r,e,E,a){return r>=N.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(e,E,a):new Uint16Array(e,E,a)},fromTypedArray:function(r){return r instanceof Uint8Array?n.UNSIGNED_BYTE:r instanceof Uint16Array?n.UNSIGNED_SHORT:r instanceof Uint32Array?n.UNSIGNED_INT:void 0}};var I=Object.freeze(n);S.IndexDatatype=I});
