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
 */define(["exports","./Matrix2-462b83d3","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Transforms-5b74e989"],function(y,o,x,r,c){"use strict";function h(e,t,i,n){this.x=r.defaultValue(e,0),this.y=r.defaultValue(t,0),this.width=r.defaultValue(i,0),this.height=r.defaultValue(n,0)}h.packedLength=4,h.pack=function(e,t,i){return i=r.defaultValue(i,0),t[i++]=e.x,t[i++]=e.y,t[i++]=e.width,t[i]=e.height,t},h.unpack=function(e,t,i){return t=r.defaultValue(t,0),r.defined(i)||(i=new h),i.x=e[t++],i.y=e[t++],i.width=e[t++],i.height=e[t],i},h.fromPoints=function(e,t){if(r.defined(t)||(t=new h),!r.defined(e)||e.length===0)return t.x=0,t.y=0,t.width=0,t.height=0,t;const i=e.length;let n=e[0].x,d=e[0].y,u=e[0].x,a=e[0].y;for(let f=1;f<i;f++){const s=e[f],g=s.x,l=s.y;n=Math.min(g,n),u=Math.max(g,u),d=Math.min(l,d),a=Math.max(l,a)}return t.x=n,t.y=d,t.width=u-n,t.height=a-d,t};const w=new c.GeographicProjection,p=new x.Cartographic,m=new x.Cartographic;h.fromRectangle=function(e,t,i){if(r.defined(i)||(i=new h),!r.defined(e))return i.x=0,i.y=0,i.width=0,i.height=0,i;const n=(t=r.defaultValue(t,w)).project(o.Rectangle.southwest(e,p)),d=t.project(o.Rectangle.northeast(e,m));return o.Cartesian2.subtract(d,n,d),i.x=n.x,i.y=n.y,i.width=d.x,i.height=d.y,i},h.clone=function(e,t){if(r.defined(e))return r.defined(t)?(t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,t):new h(e.x,e.y,e.width,e.height)},h.union=function(e,t,i){r.defined(i)||(i=new h);const n=Math.min(e.x,t.x),d=Math.min(e.y,t.y),u=Math.max(e.x+e.width,t.x+t.width),a=Math.max(e.y+e.height,t.y+t.height);return i.x=n,i.y=d,i.width=u-n,i.height=a-d,i},h.expand=function(e,t,i){i=h.clone(e,i);const n=t.x-i.x,d=t.y-i.y;return n>i.width?i.width=n:n<0&&(i.width-=n,i.x=t.x),d>i.height?i.height=d:d<0&&(i.height-=d,i.y=t.y),i},h.intersect=function(e,t){const i=e.x,n=e.y,d=t.x,u=t.y;return i>d+t.width||i+e.width<d||n+e.height<u||n>u+t.height?c.Intersect.OUTSIDE:c.Intersect.INTERSECTING},h.equals=function(e,t){return e===t||r.defined(e)&&r.defined(t)&&e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height},h.prototype.clone=function(e){return h.clone(this,e)},h.prototype.intersect=function(e){return h.intersect(this,e)},h.prototype.equals=function(e){return h.equals(this,e)},y.BoundingRectangle=h});
