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
 */define(["exports","./defaultValue-ebbd2e4d","./WebGLConstants-544672c2"],function(T,N,E){"use strict";const r={BYTE:E.WebGLConstants.BYTE,UNSIGNED_BYTE:E.WebGLConstants.UNSIGNED_BYTE,SHORT:E.WebGLConstants.SHORT,UNSIGNED_SHORT:E.WebGLConstants.UNSIGNED_SHORT,INT:E.WebGLConstants.INT,UNSIGNED_INT:E.WebGLConstants.UNSIGNED_INT,FLOAT:E.WebGLConstants.FLOAT,DOUBLE:E.WebGLConstants.DOUBLE,getSizeInBytes:function(e){switch(e){case r.BYTE:return Int8Array.BYTES_PER_ELEMENT;case r.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case r.SHORT:return Int16Array.BYTES_PER_ELEMENT;case r.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case r.INT:return Int32Array.BYTES_PER_ELEMENT;case r.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case r.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case r.DOUBLE:return Float64Array.BYTES_PER_ELEMENT}},fromTypedArray:function(e){return e instanceof Int8Array?r.BYTE:e instanceof Uint8Array?r.UNSIGNED_BYTE:e instanceof Int16Array?r.SHORT:e instanceof Uint16Array?r.UNSIGNED_SHORT:e instanceof Int32Array?r.INT:e instanceof Uint32Array?r.UNSIGNED_INT:e instanceof Float32Array?r.FLOAT:e instanceof Float64Array?r.DOUBLE:void 0},validate:function(e){return N.defined(e)&&(e===r.BYTE||e===r.UNSIGNED_BYTE||e===r.SHORT||e===r.UNSIGNED_SHORT||e===r.INT||e===r.UNSIGNED_INT||e===r.FLOAT||e===r.DOUBLE)},createTypedArray:function(e,t){switch(e){case r.BYTE:return new Int8Array(t);case r.UNSIGNED_BYTE:return new Uint8Array(t);case r.SHORT:return new Int16Array(t);case r.UNSIGNED_SHORT:return new Uint16Array(t);case r.INT:return new Int32Array(t);case r.UNSIGNED_INT:return new Uint32Array(t);case r.FLOAT:return new Float32Array(t);case r.DOUBLE:return new Float64Array(t)}},createArrayBufferView:function(e,t,n,a){switch(n=N.defaultValue(n,0),a=N.defaultValue(a,(t.byteLength-n)/r.getSizeInBytes(e)),e){case r.BYTE:return new Int8Array(t,n,a);case r.UNSIGNED_BYTE:return new Uint8Array(t,n,a);case r.SHORT:return new Int16Array(t,n,a);case r.UNSIGNED_SHORT:return new Uint16Array(t,n,a);case r.INT:return new Int32Array(t,n,a);case r.UNSIGNED_INT:return new Uint32Array(t,n,a);case r.FLOAT:return new Float32Array(t,n,a);case r.DOUBLE:return new Float64Array(t,n,a)}},fromName:function(e){switch(e){case"BYTE":return r.BYTE;case"UNSIGNED_BYTE":return r.UNSIGNED_BYTE;case"SHORT":return r.SHORT;case"UNSIGNED_SHORT":return r.UNSIGNED_SHORT;case"INT":return r.INT;case"UNSIGNED_INT":return r.UNSIGNED_INT;case"FLOAT":return r.FLOAT;case"DOUBLE":return r.DOUBLE}}};var s=Object.freeze(r);T.ComponentDatatype=s});
