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
 */define(["./defaultValue-ebbd2e4d"],function(n){"use strict";return function(d){let i;return function(l){const c=l.data,f=[],t={id:c.id,result:void 0,error:void 0};return Promise.resolve(function(e,r,s){let a;try{return a=e(r,s),a}catch(o){return Promise.reject(o)}}(d,c.parameters,f)).then(function(e){t.result=e}).catch(function(e){e instanceof Error?t.error={name:e.name,message:e.message,stack:e.stack}:t.error=e}).finally(function(){n.defined(i)||(i=n.defaultValue(self.webkitPostMessage,self.postMessage)),c.canTransferArrayBuffer||(f.length=0);try{i(t,f)}catch(e){t.result=void 0,t.error=`postMessage failed with error: ${function(r){let s;const a=r.name,o=r.message;s=n.defined(a)&&n.defined(o)?`${a}: ${o}`:r.toString();const u=r.stack;return n.defined(u)&&(s+=`
${u}`),s}(e)}
  with responseMessage: ${JSON.stringify(t)}`,i(t)}})}}});
