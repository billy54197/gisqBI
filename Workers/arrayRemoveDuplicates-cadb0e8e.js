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
 */define(["exports","./defaultValue-ebbd2e4d","./Math-1fe079f3"],function(p,d,g){"use strict";const c=g.CesiumMath.EPSILON10;p.arrayRemoveDuplicates=function(e,h,l,u){if(!d.defined(e))return;l=d.defaultValue(l,!1);const n=d.defined(u),s=e.length;if(s<2)return e;let i,f,t,o=e[0],r=0,a=-1;for(i=1;i<s;++i)f=e[i],h(o,f,c)?(d.defined(t)||(t=e.slice(0,i),r=i-1,a=0),n&&u.push(i)):(d.defined(t)&&(t.push(f),r=i,n&&(a=u.length)),o=f);return l&&h(e[0],e[s-1],c)&&(n&&(d.defined(t)?u.splice(a,0,r):u.push(s-1)),d.defined(t)?t.length-=1:t=e.slice(0,-1)),d.defined(t)?t:e}});
