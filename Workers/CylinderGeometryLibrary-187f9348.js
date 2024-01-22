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
 */define(["exports","./Math-1fe079f3"],function(b,v){"use strict";var w={computePositions:function(x,u,h,n,i){const s=.5*x,y=-s,a=n+n,t=new Float64Array(3*(i?2*a:a));let c,e=0,o=0;const f=i?3*a:0,r=i?3*(a+n):3*n;for(c=0;c<n;c++){const M=c/n*v.CesiumMath.TWO_PI,l=Math.cos(M),m=Math.sin(M),d=l*h,p=m*h,C=l*u,P=m*u;t[o+f]=d,t[o+f+1]=p,t[o+f+2]=y,t[o+r]=C,t[o+r+1]=P,t[o+r+2]=s,o+=3,i&&(t[e++]=d,t[e++]=p,t[e++]=y,t[e++]=C,t[e++]=P,t[e++]=s)}return t}};b.CylinderGeometryLibrary=w});
