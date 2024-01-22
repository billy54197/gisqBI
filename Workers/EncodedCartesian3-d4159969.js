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
 */define(["exports","./Matrix3-2955527a","./defaultValue-ebbd2e4d"],function(s,r,c){"use strict";function o(){this.high=r.Cartesian3.clone(r.Cartesian3.ZERO),this.low=r.Cartesian3.clone(r.Cartesian3.ZERO)}o.encode=function(t,e){let i;return c.defined(e)||(e={high:0,low:0}),t>=0?(i=65536*Math.floor(t/65536),e.high=i,e.low=t-i):(i=65536*Math.floor(-t/65536),e.high=-i,e.low=t+i),e};const h={high:0,low:0};o.fromCartesian=function(t,e){c.defined(e)||(e=new o);const i=e.high,a=e.low;return o.encode(t.x,h),i.x=h.high,a.x=h.low,o.encode(t.y,h),i.y=h.high,a.y=h.low,o.encode(t.z,h),i.z=h.high,a.z=h.low,e};const l=new o;o.writeElements=function(t,e,i){o.fromCartesian(t,l);const a=l.high,n=l.low;e[i]=a.x,e[i+1]=a.y,e[i+2]=a.z,e[i+3]=n.x,e[i+4]=n.y,e[i+5]=n.z},s.EncodedCartesian3=o});
