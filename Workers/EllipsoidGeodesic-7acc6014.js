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
 */define(["exports","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Math-1fe079f3"],function(N,f,T,G){"use strict";function I(n,e,a,i,s,m,o){const _=function(H,q){return H*q*(4+H*(4-3*q))/16}(n,a);return(1-_)*n*e*(i+_*s*(o+_*m*(2*o*o-1)))}const k=new f.Cartesian3,z=new f.Cartesian3;function V(n,e,a,i){f.Cartesian3.normalize(i.cartographicToCartesian(e,z),k),f.Cartesian3.normalize(i.cartographicToCartesian(a,z),z),function(s,m,o,_,H,q,R){const M=(m-o)/m,b=q-_,r=Math.atan((1-M)*Math.tan(H)),g=Math.atan((1-M)*Math.tan(R)),h=Math.cos(r),C=Math.sin(r),d=Math.cos(g),x=Math.sin(g),c=h*d,u=h*x,p=C*x,v=C*d;let A,O,l,w,S,t=b,W=G.CesiumMath.TWO_PI,P=Math.cos(t),y=Math.sin(t);do{P=Math.cos(t),y=Math.sin(t);const L=u-v*P;let D;l=Math.sqrt(d*d*y*y+L*L),O=p+c*P,A=Math.atan2(l,O),l===0?(D=0,w=1):(D=c*y/l,w=1-D*D),W=t,S=O-2*p/w,isFinite(S)||(S=0),t=b+I(M,D,w,A,l,O,S)}while(Math.abs(t-W)>G.CesiumMath.EPSILON12);const U=w*(m*m-o*o)/(o*o),F=U*(256+U*(U*(74-47*U)-128))/1024,j=S*S,B=o*(1+U*(4096+U*(U*(320-175*U)-768))/16384)*(A-F*l*(S+F*(O*(2*j-1)-F*S*(4*l*l-3)*(4*j-3)/6)/4)),J=Math.atan2(d*y,u-v*P),K=Math.atan2(h*y,u*P-v);s._distance=B,s._startHeading=J,s._endHeading=K,s._uSquared=U}(n,i.maximumRadius,i.minimumRadius,e.longitude,e.latitude,a.longitude,a.latitude),n._start=f.Cartographic.clone(e,n._start),n._end=f.Cartographic.clone(a,n._end),n._start.height=0,n._end.height=0,function(s){const m=s._uSquared,o=s._ellipsoid.maximumRadius,_=s._ellipsoid.minimumRadius,H=(o-_)/o,q=Math.cos(s._startHeading),R=Math.sin(s._startHeading),M=(1-H)*Math.tan(s._start.latitude),b=1/Math.sqrt(1+M*M),r=b*M,g=Math.atan2(M,q),h=b*R,C=h*h,d=1-C,x=Math.sqrt(d),c=m/4,u=c*c,p=u*c,v=u*u,A=1+c-3*u/4+5*p/4-175*v/64,O=1-c+15*u/8-35*p/8,l=1-3*c+35*u/4,w=1-5*c,S=A*g-O*Math.sin(2*g)*c/2-l*Math.sin(4*g)*u/16-w*Math.sin(6*g)*p/48-5*Math.sin(8*g)*v/512,t=s._constants;t.a=o,t.b=_,t.f=H,t.cosineHeading=q,t.sineHeading=R,t.tanU=M,t.cosineU=b,t.sineU=r,t.sigma=g,t.sineAlpha=h,t.sineSquaredAlpha=C,t.cosineSquaredAlpha=d,t.cosineAlpha=x,t.u2Over4=c,t.u4Over16=u,t.u6Over64=p,t.u8Over256=v,t.a0=A,t.a1=O,t.a2=l,t.a3=w,t.distanceRatio=S}(n)}function E(n,e,a){const i=T.defaultValue(a,f.Ellipsoid.WGS84);this._ellipsoid=i,this._start=new f.Cartographic,this._end=new f.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,T.defined(n)&&T.defined(e)&&V(this,n,e,i)}Object.defineProperties(E.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return this._startHeading}},endHeading:{get:function(){return this._endHeading}}}),E.prototype.setEndPoints=function(n,e){V(this,n,e,this._ellipsoid)},E.prototype.interpolateUsingFraction=function(n,e){return this.interpolateUsingSurfaceDistance(this._distance*n,e)},E.prototype.interpolateUsingSurfaceDistance=function(n,e){const a=this._constants,i=a.distanceRatio+n/a.b,s=Math.cos(2*i),m=Math.cos(4*i),o=Math.cos(6*i),_=Math.sin(2*i),H=Math.sin(4*i),q=Math.sin(6*i),R=Math.sin(8*i),M=i*i,b=i*M,r=a.u8Over256,g=a.u2Over4,h=a.u6Over64,C=a.u4Over16;let d=2*b*r*s/3+i*(1-g+7*C/4-15*h/4+579*r/64-(C-15*h/4+187*r/16)*s-(5*h/4-115*r/16)*m-29*r*o/16)+(g/2-C+71*h/32-85*r/16)*_+(5*C/16-5*h/4+383*r/96)*H-M*((h-11*r/2)*_+5*r*H/2)+(29*h/96-29*r/16)*q+539*r*R/1536;const x=Math.asin(Math.sin(d)*a.cosineAlpha),c=Math.atan(a.a/a.b*Math.tan(x));d-=a.sigma;const u=Math.cos(2*a.sigma+d),p=Math.sin(d),v=Math.cos(d),A=a.cosineU*v,O=a.sineU*p,l=Math.atan2(p*a.sineHeading,A-O*a.cosineHeading)-I(a.f,a.sineAlpha,a.cosineSquaredAlpha,d,p,v,u);return T.defined(e)?(e.longitude=this._start.longitude+l,e.latitude=c,e.height=0,e):new f.Cartographic(this._start.longitude+l,c,0)},N.EllipsoidGeodesic=E});
