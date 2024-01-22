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
 */define(["exports","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Transforms-5b74e989"],function(E,t,m,d){"use strict";function i(e,n,a){this.minimum=t.Cartesian3.clone(m.defaultValue(e,t.Cartesian3.ZERO)),this.maximum=t.Cartesian3.clone(m.defaultValue(n,t.Cartesian3.ZERO)),a=m.defined(a)?t.Cartesian3.clone(a):t.Cartesian3.midpoint(this.minimum,this.maximum,new t.Cartesian3),this.center=a}i.fromCorners=function(e,n,a){return m.defined(a)||(a=new i),a.minimum=t.Cartesian3.clone(e,a.minimum),a.maximum=t.Cartesian3.clone(n,a.maximum),a.center=t.Cartesian3.midpoint(e,n,a.center),a},i.fromPoints=function(e,n){if(m.defined(n)||(n=new i),!m.defined(e)||e.length===0)return n.minimum=t.Cartesian3.clone(t.Cartesian3.ZERO,n.minimum),n.maximum=t.Cartesian3.clone(t.Cartesian3.ZERO,n.maximum),n.center=t.Cartesian3.clone(t.Cartesian3.ZERO,n.center),n;let a=e[0].x,r=e[0].y,s=e[0].z,u=e[0].x,C=e[0].y,f=e[0].z;const I=e.length;for(let x=1;x<I;x++){const h=e[x],y=h.x,p=h.y,M=h.z;a=Math.min(y,a),u=Math.max(y,u),r=Math.min(p,r),C=Math.max(p,C),s=Math.min(M,s),f=Math.max(M,f)}const o=n.minimum;o.x=a,o.y=r,o.z=s;const l=n.maximum;return l.x=u,l.y=C,l.z=f,n.center=t.Cartesian3.midpoint(o,l,n.center),n},i.clone=function(e,n){if(m.defined(e))return m.defined(n)?(n.minimum=t.Cartesian3.clone(e.minimum,n.minimum),n.maximum=t.Cartesian3.clone(e.maximum,n.maximum),n.center=t.Cartesian3.clone(e.center,n.center),n):new i(e.minimum,e.maximum,e.center)},i.equals=function(e,n){return e===n||m.defined(e)&&m.defined(n)&&t.Cartesian3.equals(e.center,n.center)&&t.Cartesian3.equals(e.minimum,n.minimum)&&t.Cartesian3.equals(e.maximum,n.maximum)};let c=new t.Cartesian3;i.intersectPlane=function(e,n){c=t.Cartesian3.subtract(e.maximum,e.minimum,c);const a=t.Cartesian3.multiplyByScalar(c,.5,c),r=n.normal,s=a.x*Math.abs(r.x)+a.y*Math.abs(r.y)+a.z*Math.abs(r.z),u=t.Cartesian3.dot(e.center,r)+n.distance;return u-s>0?d.Intersect.INSIDE:u+s<0?d.Intersect.OUTSIDE:d.Intersect.INTERSECTING},i.prototype.clone=function(e){return i.clone(this,e)},i.prototype.intersectPlane=function(e){return i.intersectPlane(this,e)},i.prototype.equals=function(e){return i.equals(this,e)},E.AxisAlignedBoundingBox=i});
