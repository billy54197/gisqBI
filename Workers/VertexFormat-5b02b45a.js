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
 */define(["exports","./defaultValue-ebbd2e4d"],function(l,a){"use strict";function e(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT),this.position=a.defaultValue(t.position,!1),this.normal=a.defaultValue(t.normal,!1),this.st=a.defaultValue(t.st,!1),this.bitangent=a.defaultValue(t.bitangent,!1),this.tangent=a.defaultValue(t.tangent,!1),this.color=a.defaultValue(t.color,!1)}e.POSITION_ONLY=Object.freeze(new e({position:!0})),e.POSITION_AND_NORMAL=Object.freeze(new e({position:!0,normal:!0})),e.POSITION_NORMAL_AND_ST=Object.freeze(new e({position:!0,normal:!0,st:!0})),e.POSITION_AND_ST=Object.freeze(new e({position:!0,st:!0})),e.POSITION_AND_COLOR=Object.freeze(new e({position:!0,color:!0})),e.ALL=Object.freeze(new e({position:!0,normal:!0,st:!0,tangent:!0,bitangent:!0})),e.DEFAULT=e.POSITION_NORMAL_AND_ST,e.packedLength=6,e.pack=function(t,n,i){return i=a.defaultValue(i,0),n[i++]=t.position?1:0,n[i++]=t.normal?1:0,n[i++]=t.st?1:0,n[i++]=t.tangent?1:0,n[i++]=t.bitangent?1:0,n[i]=t.color?1:0,n},e.unpack=function(t,n,i){return n=a.defaultValue(n,0),a.defined(i)||(i=new e),i.position=t[n++]===1,i.normal=t[n++]===1,i.st=t[n++]===1,i.tangent=t[n++]===1,i.bitangent=t[n++]===1,i.color=t[n]===1,i},e.clone=function(t,n){if(a.defined(t))return a.defined(n)||(n=new e),n.position=t.position,n.normal=t.normal,n.st=t.st,n.tangent=t.tangent,n.bitangent=t.bitangent,n.color=t.color,n},l.VertexFormat=e});
