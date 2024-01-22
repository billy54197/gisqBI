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
 */define(["exports","./defaultValue-ebbd2e4d"],function(n,r){"use strict";function t(e){let o;this.name="RuntimeError",this.message=e;try{throw new Error}catch(s){o=s.stack}this.stack=o}r.defined(Object.create)&&(t.prototype=Object.create(Error.prototype),t.prototype.constructor=t),t.prototype.toString=function(){let e=`${this.name}: ${this.message}`;return r.defined(this.stack)&&(e+=`
${this.stack.toString()}`),e},n.RuntimeError=t});
