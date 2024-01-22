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
 */define(["exports","./defaultValue-ebbd2e4d"],function(s,o){"use strict";s.combine=function u(r,t,d){d=o.defaultValue(d,!1);const f={},c=o.defined(r),a=o.defined(t);let e,n,i;if(c)for(e in r)r.hasOwnProperty(e)&&(n=r[e],a&&d&&typeof n=="object"&&t.hasOwnProperty(e)?(i=t[e],f[e]=typeof i=="object"?u(n,i,d):n):f[e]=n);if(a)for(e in t)t.hasOwnProperty(e)&&!f.hasOwnProperty(e)&&(i=t[e],f[e]=i);return f}});
