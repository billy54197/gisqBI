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
 */define(["exports","./AttributeCompression-6f93ad0c","./Matrix2-462b83d3","./Matrix3-2955527a","./defaultValue-ebbd2e4d","./Math-1fe079f3","./Transforms-5b74e989","./ComponentDatatype-f9ac3ed8","./EncodedCartesian3-d4159969","./GeometryAttribute-9c756444","./IndexDatatype-7ccfd280","./IntersectionTests-2a07bba4","./Plane-7e97483e"],function(Qe,re,M,s,y,z,$,q,$e,I,U,Ee,Ne){"use strict";const Le=new s.Cartesian3,Me=new s.Cartesian3,ze=new s.Cartesian3,De={calculateACMR:function(t){const n=(t=y.defaultValue(t,y.defaultValue.EMPTY_OBJECT)).indices;let e=t.maximumIndex;const a=y.defaultValue(t.cacheSize,24),r=n.length;if(!y.defined(e)){e=0;let i=0,l=n[i];for(;i<r;)l>e&&(e=l),++i,l=n[i]}const u=[];for(let i=0;i<e+1;i++)u[i]=0;let o=a+1;for(let i=0;i<r;++i)o-u[n[i]]>a&&(u[n[i]]=o,++o);return(o-a+1)/(r/3)}};De.tipsify=function(t){const n=(t=y.defaultValue(t,y.defaultValue.EMPTY_OBJECT)).indices,e=t.maximumIndex,a=y.defaultValue(t.cacheSize,24);let r;function u(N,D,L,T,B,_,j){let G,R=-1,V=-1,Q=0;for(;Q<L.length;){const k=L[Q];T[k].numLiveTriangles&&(G=0,B-T[k].timeStamp+2*T[k].numLiveTriangles<=D&&(G=B-T[k].timeStamp),(G>V||V===-1)&&(V=G,R=k)),++Q}return R===-1?function(k,J,At,gt){for(;J.length>=1;){const Ke=J[J.length-1];if(J.splice(J.length-1,1),k[Ke].numLiveTriangles>0)return Ke}for(;r<gt;){if(k[r].numLiveTriangles>0)return++r,r-1;++r}return-1}(T,_,0,j):R}const o=n.length;let i=0,l=0,c=n[l];const d=o;if(y.defined(e))i=e+1;else{for(;l<d;)c>i&&(i=c),++l,c=n[l];if(i===-1)return 0;++i}const f=[];let g;for(g=0;g<i;g++)f[g]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};l=0;let b=0;for(;l<d;)f[n[l]].vertexTriangles.push(b),++f[n[l]].numLiveTriangles,f[n[l+1]].vertexTriangles.push(b),++f[n[l+1]].numLiveTriangles,f[n[l+2]].vertexTriangles.push(b),++f[n[l+2]].numLiveTriangles,++b,l+=3;let C=0,p=a+1;r=1;let m=[];const x=[];let S,h,P=0;const v=[],w=o/3,A=[];for(g=0;g<w;g++)A[g]=!1;let E,O;for(;C!==-1;){m=[],h=f[C],O=h.vertexTriangles.length;for(let N=0;N<O;++N)if(b=h.vertexTriangles[N],!A[b]){A[b]=!0,l=b+b+b;for(let D=0;D<3;++D)E=n[l],m.push(E),x.push(E),v[P]=E,++P,S=f[E],--S.numLiveTriangles,p-S.timeStamp>a&&(S.timeStamp=p,++p),++l}C=u(0,a,m,f,p,x,i)}return v};var et=De;const F={};function de(t,n,e,a,r){t[n++]=e,t[n++]=a,t[n++]=a,t[n++]=r,t[n++]=r,t[n]=e}function Ge(t){const n={};for(const e in t)if(t.hasOwnProperty(e)&&y.defined(t[e])&&y.defined(t[e].values)){const a=t[e];n[e]=new I.GeometryAttribute({componentDatatype:a.componentDatatype,componentsPerAttribute:a.componentsPerAttribute,normalize:a.normalize,values:[]})}return n}function tt(t,n,e){for(const a in n)if(n.hasOwnProperty(a)&&y.defined(n[a])&&y.defined(n[a].values)){const r=n[a];for(let u=0;u<r.componentsPerAttribute;++u)t[a].values.push(r.values[e*r.componentsPerAttribute+u])}}F.toWireframe=function(t){const n=t.indices;if(y.defined(n)){switch(t.primitiveType){case I.PrimitiveType.TRIANGLES:t.indices=function(e){const a=e.length,r=a/3*6,u=U.IndexDatatype.createTypedArray(a,r);let o=0;for(let i=0;i<a;i+=3,o+=6)de(u,o,e[i],e[i+1],e[i+2]);return u}(n);break;case I.PrimitiveType.TRIANGLE_STRIP:t.indices=function(e){const a=e.length;if(a>=3){const r=6*(a-2),u=U.IndexDatatype.createTypedArray(a,r);de(u,0,e[0],e[1],e[2]);let o=6;for(let i=3;i<a;++i,o+=6)de(u,o,e[i-1],e[i],e[i-2]);return u}return new Uint16Array}(n);break;case I.PrimitiveType.TRIANGLE_FAN:t.indices=function(e){if(e.length>0){const a=e.length-1,r=6*(a-1),u=U.IndexDatatype.createTypedArray(a,r),o=e[0];let i=0;for(let l=1;l<a;++l,i+=6)de(u,i,o,e[l],e[l+1]);return u}return new Uint16Array}(n)}t.primitiveType=I.PrimitiveType.LINES}return t},F.createLineSegmentsForVectors=function(t,n,e){n=y.defaultValue(n,"normal"),e=y.defaultValue(e,1e4);const a=t.attributes.position.values,r=t.attributes[n].values,u=a.length,o=new Float64Array(2*u);let i,l=0;for(let d=0;d<u;d+=3)o[l++]=a[d],o[l++]=a[d+1],o[l++]=a[d+2],o[l++]=a[d]+r[d]*e,o[l++]=a[d+1]+r[d+1]*e,o[l++]=a[d+2]+r[d+2]*e;const c=t.boundingSphere;return y.defined(c)&&(i=new $.BoundingSphere(c.center,c.radius+e)),new I.Geometry({attributes:{position:new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o})},primitiveType:I.PrimitiveType.LINES,boundingSphere:i})},F.createAttributeLocations=function(t){const n=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],e=t.attributes,a={};let r,u=0;const o=n.length;for(r=0;r<o;++r){const i=n[r];y.defined(e[i])&&(a[i]=u++)}for(const i in e)e.hasOwnProperty(i)&&!y.defined(a[i])&&(a[i]=u++);return a},F.reorderForPreVertexCache=function(t){const n=I.Geometry.computeNumberOfVertices(t),e=t.indices;if(y.defined(e)){const a=new Int32Array(n);for(let g=0;g<n;g++)a[g]=-1;const r=e,u=r.length,o=U.IndexDatatype.createTypedArray(n,u);let i,l=0,c=0,d=0;for(;l<u;)i=a[r[l]],i!==-1?o[c]=i:(i=r[l],a[i]=d,o[c]=d,++d),++l,++c;t.indices=o;const f=t.attributes;for(const g in f)if(f.hasOwnProperty(g)&&y.defined(f[g])&&y.defined(f[g].values)){const b=f[g],C=b.values;let p=0;const m=b.componentsPerAttribute,x=q.ComponentDatatype.createTypedArray(b.componentDatatype,d*m);for(;p<n;){const S=a[p];if(S!==-1)for(let h=0;h<m;h++)x[m*S+h]=C[m*p+h];++p}b.values=x}}return t},F.reorderForPostVertexCache=function(t,n){const e=t.indices;if(t.primitiveType===I.PrimitiveType.TRIANGLES&&y.defined(e)){const a=e.length;let r=0;for(let u=0;u<a;u++)e[u]>r&&(r=e[u]);t.indices=et.tipsify({indices:e,maximumIndex:r,cacheSize:n})}return t},F.fitToUnsignedShortIndices=function(t){const n=[],e=I.Geometry.computeNumberOfVertices(t);if(y.defined(t.indices)&&e>=z.CesiumMath.SIXTY_FOUR_KILOBYTES){let a=[],r=[],u=0,o=Ge(t.attributes);const i=t.indices,l=i.length;let c;t.primitiveType===I.PrimitiveType.TRIANGLES?c=3:t.primitiveType===I.PrimitiveType.LINES?c=2:t.primitiveType===I.PrimitiveType.POINTS&&(c=1);for(let d=0;d<l;d+=c){for(let f=0;f<c;++f){const g=i[d+f];let b=a[g];y.defined(b)||(b=u++,a[g]=b,tt(o,t.attributes,g)),r.push(b)}u+c>=z.CesiumMath.SIXTY_FOUR_KILOBYTES&&(n.push(new I.Geometry({attributes:o,indices:r,primitiveType:t.primitiveType,boundingSphere:t.boundingSphere,boundingSphereCV:t.boundingSphereCV})),a=[],r=[],u=0,o=Ge(t.attributes))}r.length!==0&&n.push(new I.Geometry({attributes:o,indices:r,primitiveType:t.primitiveType,boundingSphere:t.boundingSphere,boundingSphereCV:t.boundingSphereCV}))}else n.push(t);return n};const Ve=new s.Cartesian3,nt=new s.Cartographic;F.projectTo2D=function(t,n,e,a,r){const u=t.attributes[n],o=(r=y.defined(r)?r:new $.GeographicProjection).ellipsoid,i=u.values,l=new Float64Array(i.length);let c=0;for(let d=0;d<i.length;d+=3){const f=s.Cartesian3.fromArray(i,d,Ve),g=o.cartesianToCartographic(f,nt),b=r.project(g,Ve);l[c++]=b.x,l[c++]=b.y,l[c++]=b.z}return t.attributes[e]=u,t.attributes[a]=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l}),delete t.attributes[n],t};const be={high:0,low:0};F.encodeAttribute=function(t,n,e,a){const r=t.attributes[n],u=r.values,o=u.length,i=new Float32Array(o),l=new Float32Array(o);for(let d=0;d<o;++d)$e.EncodedCartesian3.encode(u[d],be),i[d]=be.high,l[d]=be.low;const c=r.componentsPerAttribute;return t.attributes[e]=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.FLOAT,componentsPerAttribute:c,values:i}),t.attributes[a]=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.FLOAT,componentsPerAttribute:c,values:l}),delete t.attributes[n],t};let H=new s.Cartesian3;function ge(t,n){if(y.defined(n)){const e=n.values,a=e.length;for(let r=0;r<a;r+=3)s.Cartesian3.unpack(e,r,H),M.Matrix4.multiplyByPoint(t,H,H),s.Cartesian3.pack(H,e,r)}}function Ae(t,n){if(y.defined(n)){const e=n.values,a=e.length;for(let r=0;r<a;r+=3)s.Cartesian3.unpack(e,r,H),s.Matrix3.multiplyByVector(t,H,H),H=s.Cartesian3.normalize(H,H),s.Cartesian3.pack(H,e,r)}}const fe=new M.Matrix4,ye=new s.Matrix3;F.transformToWorldCoordinates=function(t){const n=t.modelMatrix;if(M.Matrix4.equals(n,M.Matrix4.IDENTITY))return t;const e=t.geometry.attributes;ge(n,e.position),ge(n,e.prevPosition),ge(n,e.nextPosition),(y.defined(e.normal)||y.defined(e.tangent)||y.defined(e.bitangent))&&(M.Matrix4.inverse(n,fe),M.Matrix4.transpose(fe,fe),M.Matrix4.getMatrix3(fe,ye),Ae(ye,e.normal),Ae(ye,e.tangent),Ae(ye,e.bitangent));const a=t.geometry.boundingSphere;return y.defined(a)&&(t.geometry.boundingSphere=$.BoundingSphere.transform(a,n,a)),t.modelMatrix=M.Matrix4.clone(M.Matrix4.IDENTITY),t};const at=new s.Cartesian3;function Te(t,n){const e=t.length;let a,r,u,o;t[0].modelMatrix;const i=y.defined(t[0][n].indices),l=t[0][n].primitiveType,c=function(x,S){const h=x.length,P={},v=x[0][S].attributes;let w;for(w in v)if(v.hasOwnProperty(w)&&y.defined(v[w])&&y.defined(v[w].values)){const A=v[w];let E=A.values.length,O=!0;for(let N=1;N<h;++N){const D=x[N][S].attributes[w];if(!y.defined(D)||A.componentDatatype!==D.componentDatatype||A.componentsPerAttribute!==D.componentsPerAttribute||A.normalize!==D.normalize){O=!1;break}E+=D.values.length}O&&(P[w]=new I.GeometryAttribute({componentDatatype:A.componentDatatype,componentsPerAttribute:A.componentsPerAttribute,normalize:A.normalize,values:q.ComponentDatatype.createTypedArray(A.componentDatatype,E)}))}return P}(t,n);let d,f,g,b;for(a in c)if(c.hasOwnProperty(a))for(d=c[a].values,o=0,r=0;r<e;++r)for(f=t[r][n].attributes[a].values,g=f.length,u=0;u<g;++u)d[o++]=f[u];if(i){let x=0;for(r=0;r<e;++r)x+=t[r][n].indices.length;const S=I.Geometry.computeNumberOfVertices(new I.Geometry({attributes:c,primitiveType:I.PrimitiveType.POINTS})),h=U.IndexDatatype.createTypedArray(S,x);let P=0,v=0;for(r=0;r<e;++r){const w=t[r][n].indices,A=w.length;for(o=0;o<A;++o)h[P++]=v+w[o];v+=I.Geometry.computeNumberOfVertices(t[r][n])}b=h}let C,p=new s.Cartesian3,m=0;for(r=0;r<e;++r){if(C=t[r][n].boundingSphere,!y.defined(C)){p=void 0;break}s.Cartesian3.add(C.center,p,p)}if(y.defined(p))for(s.Cartesian3.divideByScalar(p,e,p),r=0;r<e;++r){C=t[r][n].boundingSphere;const x=s.Cartesian3.magnitude(s.Cartesian3.subtract(C.center,p,at))+C.radius;x>m&&(m=x)}return new I.Geometry({attributes:c,indices:b,primitiveType:l,boundingSphere:y.defined(p)?new $.BoundingSphere(p,m):void 0})}F.combineInstances=function(t){const n=[],e=[],a=t.length;for(let u=0;u<a;++u){const o=t[u];y.defined(o.geometry)?n.push(o):y.defined(o.westHemisphereGeometry)&&y.defined(o.eastHemisphereGeometry)&&e.push(o)}const r=[];return n.length>0&&r.push(Te(n,"geometry")),e.length>0&&(r.push(Te(e,"westHemisphereGeometry")),r.push(Te(e,"eastHemisphereGeometry"))),r};const Y=new s.Cartesian3,le=new s.Cartesian3,ie=new s.Cartesian3,se=new s.Cartesian3;F.computeNormal=function(t){const n=t.indices,e=t.attributes,a=e.position.values,r=e.position.values.length/3,u=n.length,o=new Array(r),i=new Array(u/3),l=new Array(u);let c;for(c=0;c<r;c++)o[c]={indexOffset:0,count:0,currentCount:0};let d=0;for(c=0;c<u;c+=3){const C=n[c],p=n[c+1],m=n[c+2],x=3*C,S=3*p,h=3*m;le.x=a[x],le.y=a[x+1],le.z=a[x+2],ie.x=a[S],ie.y=a[S+1],ie.z=a[S+2],se.x=a[h],se.y=a[h+1],se.z=a[h+2],o[C].count++,o[p].count++,o[m].count++,s.Cartesian3.subtract(ie,le,ie),s.Cartesian3.subtract(se,le,se),i[d]=s.Cartesian3.cross(ie,se,new s.Cartesian3),d++}let f,g=0;for(c=0;c<r;c++)o[c].indexOffset+=g,g+=o[c].count;for(d=0,c=0;c<u;c+=3){f=o[n[c]];let C=f.indexOffset+f.currentCount;l[C]=d,f.currentCount++,f=o[n[c+1]],C=f.indexOffset+f.currentCount,l[C]=d,f.currentCount++,f=o[n[c+2]],C=f.indexOffset+f.currentCount,l[C]=d,f.currentCount++,d++}const b=new Float32Array(3*r);for(c=0;c<r;c++){const C=3*c;if(f=o[c],s.Cartesian3.clone(s.Cartesian3.ZERO,Y),f.count>0){for(d=0;d<f.count;d++)s.Cartesian3.add(Y,i[l[f.indexOffset+d]],Y);s.Cartesian3.equalsEpsilon(s.Cartesian3.ZERO,Y,z.CesiumMath.EPSILON10)&&s.Cartesian3.clone(i[l[f.indexOffset]],Y)}s.Cartesian3.equalsEpsilon(s.Cartesian3.ZERO,Y,z.CesiumMath.EPSILON10)&&(Y.z=1),s.Cartesian3.normalize(Y,Y),b[C]=Y.x,b[C+1]=Y.y,b[C+2]=Y.z}return t.attributes.normal=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),t};const rt=new s.Cartesian3,Re=new s.Cartesian3,it=new s.Cartesian3;F.computeTangentAndBitangent=function(t){t.attributes;const n=t.indices,e=t.attributes.position.values,a=t.attributes.normal.values,r=t.attributes.st.values,u=t.attributes.position.values.length/3,o=n.length,i=new Array(3*u);let l,c,d,f;for(l=0;l<i.length;l++)i[l]=0;for(l=0;l<o;l+=3){const C=n[l],p=n[l+1],m=n[l+2];c=3*C,d=3*p,f=3*m;const x=2*C,S=2*p,h=2*m,P=e[c],v=e[c+1],w=e[c+2],A=r[x],E=r[x+1],O=r[S+1]-E,N=r[h+1]-E,D=1/((r[S]-A)*N-(r[h]-A)*O),L=(N*(e[d]-P)-O*(e[f]-P))*D,T=(N*(e[d+1]-v)-O*(e[f+1]-v))*D,B=(N*(e[d+2]-w)-O*(e[f+2]-w))*D;i[c]+=L,i[c+1]+=T,i[c+2]+=B,i[d]+=L,i[d+1]+=T,i[d+2]+=B,i[f]+=L,i[f+1]+=T,i[f+2]+=B}const g=new Float32Array(3*u),b=new Float32Array(3*u);for(l=0;l<u;l++){c=3*l,d=c+1,f=c+2;const C=s.Cartesian3.fromArray(a,c,rt),p=s.Cartesian3.fromArray(i,c,it),m=s.Cartesian3.dot(C,p);s.Cartesian3.multiplyByScalar(C,m,Re),s.Cartesian3.normalize(s.Cartesian3.subtract(p,Re,p),p),g[c]=p.x,g[d]=p.y,g[f]=p.z,s.Cartesian3.normalize(s.Cartesian3.cross(C,p,p),p),b[c]=p.x,b[d]=p.y,b[f]=p.z}return t.attributes.tangent=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g}),t.attributes.bitangent=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),t};const pe=new M.Cartesian2,W=new s.Cartesian3,Fe=new s.Cartesian3,Be=new s.Cartesian3;let me=new M.Cartesian2;function st(t){switch(t.primitiveType){case I.PrimitiveType.TRIANGLE_FAN:return function(n){const e=I.Geometry.computeNumberOfVertices(n),a=U.IndexDatatype.createTypedArray(e,3*(e-2));a[0]=1,a[1]=0,a[2]=2;let r=3;for(let u=3;u<e;++u)a[r++]=u-1,a[r++]=0,a[r++]=u;return n.indices=a,n.primitiveType=I.PrimitiveType.TRIANGLES,n}(t);case I.PrimitiveType.TRIANGLE_STRIP:return function(n){const e=I.Geometry.computeNumberOfVertices(n),a=U.IndexDatatype.createTypedArray(e,3*(e-2));a[0]=0,a[1]=1,a[2]=2,e>3&&(a[3]=0,a[4]=2,a[5]=3);let r=6;for(let u=3;u<e-1;u+=2)a[r++]=u,a[r++]=u-1,a[r++]=u+1,u+2<e&&(a[r++]=u,a[r++]=u+1,a[r++]=u+2);return n.indices=a,n.primitiveType=I.PrimitiveType.TRIANGLES,n}(t);case I.PrimitiveType.TRIANGLES:return function(n){if(y.defined(n.indices))return n;const e=I.Geometry.computeNumberOfVertices(n),a=U.IndexDatatype.createTypedArray(e,e);for(let r=0;r<e;++r)a[r]=r;return n.indices=a,n}(t);case I.PrimitiveType.LINE_STRIP:return function(n){const e=I.Geometry.computeNumberOfVertices(n),a=U.IndexDatatype.createTypedArray(e,2*(e-1));a[0]=0,a[1]=1;let r=2;for(let u=2;u<e;++u)a[r++]=u-1,a[r++]=u;return n.indices=a,n.primitiveType=I.PrimitiveType.LINES,n}(t);case I.PrimitiveType.LINE_LOOP:return function(n){const e=I.Geometry.computeNumberOfVertices(n),a=U.IndexDatatype.createTypedArray(e,2*e);a[0]=0,a[1]=1;let r=2;for(let u=2;u<e;++u)a[r++]=u-1,a[r++]=u;return a[r++]=e-1,a[r]=0,n.indices=a,n.primitiveType=I.PrimitiveType.LINES,n}(t);case I.PrimitiveType.LINES:return function(n){if(y.defined(n.indices))return n;const e=I.Geometry.computeNumberOfVertices(n),a=U.IndexDatatype.createTypedArray(e,e);for(let r=0;r<e;++r)a[r]=r;return n.indices=a,n}(t)}return t}function K(t,n){Math.abs(t.y)<z.CesiumMath.EPSILON6&&(t.y=n?-z.CesiumMath.EPSILON6:z.CesiumMath.EPSILON6)}F.compressVertices=function(t){const n=t.attributes.extrudeDirection;let e,a;if(y.defined(n)){const P=n.values;a=P.length/3;const v=new Float32Array(2*a);let w=0;for(e=0;e<a;++e)s.Cartesian3.fromArray(P,3*e,W),s.Cartesian3.equals(W,s.Cartesian3.ZERO)?w+=2:(me=re.AttributeCompression.octEncodeInRange(W,65535,me),v[w++]=me.x,v[w++]=me.y);return t.attributes.compressedAttributes=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:v}),delete t.attributes.extrudeDirection,t}const r=t.attributes.normal,u=t.attributes.st,o=y.defined(r),i=y.defined(u);if(!o&&!i)return t;const l=t.attributes.tangent,c=t.attributes.bitangent,d=y.defined(l),f=y.defined(c);let g,b,C,p;o&&(g=r.values),i&&(b=u.values),d&&(C=l.values),f&&(p=c.values),a=(o?g.length:b.length)/(o?3:2);let m=a,x=i&&o?2:1;x+=d||f?1:0,m*=x;const S=new Float32Array(m);let h=0;for(e=0;e<a;++e){i&&(M.Cartesian2.fromArray(b,2*e,pe),S[h++]=re.AttributeCompression.compressTextureCoordinates(pe));const P=3*e;o&&y.defined(C)&&y.defined(p)?(s.Cartesian3.fromArray(g,P,W),s.Cartesian3.fromArray(C,P,Fe),s.Cartesian3.fromArray(p,P,Be),re.AttributeCompression.octPack(W,Fe,Be,pe),S[h++]=pe.x,S[h++]=pe.y):(o&&(s.Cartesian3.fromArray(g,P,W),S[h++]=re.AttributeCompression.octEncodeFloat(W)),d&&(s.Cartesian3.fromArray(C,P,W),S[h++]=re.AttributeCompression.octEncodeFloat(W)),f&&(s.Cartesian3.fromArray(p,P,W),S[h++]=re.AttributeCompression.octEncodeFloat(W)))}return t.attributes.compressedAttributes=new I.GeometryAttribute({componentDatatype:q.ComponentDatatype.FLOAT,componentsPerAttribute:x,values:S}),o&&delete t.attributes.normal,i&&delete t.attributes.st,f&&delete t.attributes.bitangent,d&&delete t.attributes.tangent,t};const _e=new s.Cartesian3;function Z(t,n,e,a){s.Cartesian3.add(t,s.Cartesian3.multiplyByScalar(s.Cartesian3.subtract(n,t,_e),t.y/(t.y-n.y),_e),e),s.Cartesian3.clone(e,a),K(e,!0),K(a,!1)}const ee=new s.Cartesian3,te=new s.Cartesian3,ne=new s.Cartesian3,ae=new s.Cartesian3,xe={positions:new Array(7),indices:new Array(9)};function ot(t,n,e){if(t.x>=0||n.x>=0||e.x>=0)return;(function(c,d,f){if(c.y!==0&&d.y!==0&&f.y!==0)return K(c,c.y<0),K(d,d.y<0),void K(f,f.y<0);const g=Math.abs(c.y),b=Math.abs(d.y),C=Math.abs(f.y);let p;p=g>b?g>C?z.CesiumMath.sign(c.y):z.CesiumMath.sign(f.y):b>C?z.CesiumMath.sign(d.y):z.CesiumMath.sign(f.y);const m=p<0;K(c,m),K(d,m),K(f,m)})(t,n,e);const a=t.y<0,r=n.y<0,u=e.y<0;let o=0;o+=a?1:0,o+=r?1:0,o+=u?1:0;const i=xe.indices;o===1?(i[1]=3,i[2]=4,i[5]=6,i[7]=6,i[8]=5,a?(Z(t,n,ee,ne),Z(t,e,te,ae),i[0]=0,i[3]=1,i[4]=2,i[6]=1):r?(Z(n,e,ee,ne),Z(n,t,te,ae),i[0]=1,i[3]=2,i[4]=0,i[6]=2):u&&(Z(e,t,ee,ne),Z(e,n,te,ae),i[0]=2,i[3]=0,i[4]=1,i[6]=0)):o===2&&(i[2]=4,i[4]=4,i[5]=3,i[7]=5,i[8]=6,a?r?u||(Z(e,t,ee,ne),Z(e,n,te,ae),i[0]=0,i[1]=1,i[3]=0,i[6]=2):(Z(n,e,ee,ne),Z(n,t,te,ae),i[0]=2,i[1]=0,i[3]=2,i[6]=1):(Z(t,n,ee,ne),Z(t,e,te,ae),i[0]=1,i[1]=2,i[3]=1,i[6]=0));const l=xe.positions;return l[0]=t,l[1]=n,l[2]=e,l.length=3,o!==1&&o!==2||(l[3]=ee,l[4]=te,l[5]=ne,l[6]=ae,l.length=7),xe}function ke(t,n){const e=t.attributes;if(e.position.values.length===0)return;for(const r in e)if(e.hasOwnProperty(r)&&y.defined(e[r])&&y.defined(e[r].values)){const u=e[r];u.values=q.ComponentDatatype.createTypedArray(u.componentDatatype,u.values)}const a=I.Geometry.computeNumberOfVertices(t);return t.indices=U.IndexDatatype.createTypedArray(a,t.indices),n&&(t.boundingSphere=$.BoundingSphere.fromVertices(e.position.values)),t}function oe(t){const n=t.attributes,e={};for(const a in n)if(n.hasOwnProperty(a)&&y.defined(n[a])&&y.defined(n[a].values)){const r=n[a];e[a]=new I.GeometryAttribute({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:[]})}return new I.Geometry({attributes:e,indices:[],primitiveType:t.primitiveType})}function Pe(t,n,e){const a=y.defined(t.geometry.boundingSphere);n=ke(n,a),e=ke(e,a),y.defined(e)&&!y.defined(n)?t.geometry=e:!y.defined(e)&&y.defined(n)?t.geometry=n:(t.westHemisphereGeometry=n,t.eastHemisphereGeometry=e,t.geometry=void 0)}function we(t,n){const e=new t,a=new t,r=new t;return function(u,o,i,l,c,d,f,g){const b=t.fromArray(c,u*n,e),C=t.fromArray(c,o*n,a),p=t.fromArray(c,i*n,r);t.multiplyByScalar(b,l.x,b),t.multiplyByScalar(C,l.y,C),t.multiplyByScalar(p,l.z,p);const m=t.add(b,C,b);t.add(m,p,m),g&&t.normalize(m,m),t.pack(m,d,f*n)}}const ut=we(M.Cartesian4,4),Ce=we(s.Cartesian3,3),qe=we(M.Cartesian2,2),ce=new s.Cartesian3,Se=new s.Cartesian3,Ie=new s.Cartesian3,lt=new s.Cartesian3;function he(t,n,e,a,r,u,o,i,l,c,d,f,g,b,C,p){if(!(y.defined(u)||y.defined(o)||y.defined(i)||y.defined(l)||y.defined(c)||b!==0))return;const m=function(x,S,h,P,v){let w,A,E,O,N,D,L,T;if(y.defined(v)||(v=new s.Cartesian3),y.defined(S.z)){if(s.Cartesian3.equalsEpsilon(x,S,z.CesiumMath.EPSILON14))return s.Cartesian3.clone(s.Cartesian3.UNIT_X,v);if(s.Cartesian3.equalsEpsilon(x,h,z.CesiumMath.EPSILON14))return s.Cartesian3.clone(s.Cartesian3.UNIT_Y,v);if(s.Cartesian3.equalsEpsilon(x,P,z.CesiumMath.EPSILON14))return s.Cartesian3.clone(s.Cartesian3.UNIT_Z,v);w=s.Cartesian3.subtract(h,S,Le),A=s.Cartesian3.subtract(P,S,Me),E=s.Cartesian3.subtract(x,S,ze),O=s.Cartesian3.dot(w,w),N=s.Cartesian3.dot(w,A),D=s.Cartesian3.dot(w,E),L=s.Cartesian3.dot(A,A),T=s.Cartesian3.dot(A,E)}else{if(M.Cartesian2.equalsEpsilon(x,S,z.CesiumMath.EPSILON14))return s.Cartesian3.clone(s.Cartesian3.UNIT_X,v);if(M.Cartesian2.equalsEpsilon(x,h,z.CesiumMath.EPSILON14))return s.Cartesian3.clone(s.Cartesian3.UNIT_Y,v);if(M.Cartesian2.equalsEpsilon(x,P,z.CesiumMath.EPSILON14))return s.Cartesian3.clone(s.Cartesian3.UNIT_Z,v);w=M.Cartesian2.subtract(h,S,Le),A=M.Cartesian2.subtract(P,S,Me),E=M.Cartesian2.subtract(x,S,ze),O=M.Cartesian2.dot(w,w),N=M.Cartesian2.dot(w,A),D=M.Cartesian2.dot(w,E),L=M.Cartesian2.dot(A,A),T=M.Cartesian2.dot(A,E)}v.y=L*D-N*T,v.z=O*T-N*D;const B=O*L-N*N;if(B!==0)return v.y/=B,v.z/=B,v.x=1-v.y-v.z,v}(a,s.Cartesian3.fromArray(r,3*t,ce),s.Cartesian3.fromArray(r,3*n,Se),s.Cartesian3.fromArray(r,3*e,Ie),lt);if(y.defined(m)){if(y.defined(u)&&Ce(t,n,e,m,u,f.normal.values,p,!0),y.defined(c)){const x=s.Cartesian3.fromArray(c,3*t,ce),S=s.Cartesian3.fromArray(c,3*n,Se),h=s.Cartesian3.fromArray(c,3*e,Ie);let P;s.Cartesian3.multiplyByScalar(x,m.x,x),s.Cartesian3.multiplyByScalar(S,m.y,S),s.Cartesian3.multiplyByScalar(h,m.z,h),s.Cartesian3.equals(x,s.Cartesian3.ZERO)&&s.Cartesian3.equals(S,s.Cartesian3.ZERO)&&s.Cartesian3.equals(h,s.Cartesian3.ZERO)?(P=ce,P.x=0,P.y=0,P.z=0):(P=s.Cartesian3.add(x,S,x),s.Cartesian3.add(P,h,P),s.Cartesian3.normalize(P,P)),s.Cartesian3.pack(P,f.extrudeDirection.values,3*p)}if(y.defined(d)&&function(x,S,h,P,v,w,A){const E=v[x]*P.x,O=v[S]*P.y,N=v[h]*P.z;w[A]=E+O+N>z.CesiumMath.EPSILON6?1:0}(t,n,e,m,d,f.applyOffset.values,p),y.defined(o)&&Ce(t,n,e,m,o,f.tangent.values,p,!0),y.defined(i)&&Ce(t,n,e,m,i,f.bitangent.values,p,!0),y.defined(l)&&qe(t,n,e,m,l,f.st.values,p),b>0)for(let x=0;x<b;x++){const S=g[x];pt(t,n,e,m,p,C[S],f[S])}}}function pt(t,n,e,a,r,u,o){const i=u.componentsPerAttribute,l=u.values,c=o.values;switch(i){case 4:ut(t,n,e,a,l,c,r,!1);break;case 3:Ce(t,n,e,a,l,c,r,!1);break;case 2:qe(t,n,e,a,l,c,r,!1);break;default:c[r]=l[t]*a.x+l[n]*a.y+l[e]*a.z}}function X(t,n,e,a,r,u){const o=t.position.values.length/3;if(r!==-1){const i=a[r],l=e[i];return l===-1?(e[i]=o,t.position.values.push(u.x,u.y,u.z),n.push(o),o):(n.push(l),l)}return t.position.values.push(u.x,u.y,u.z),n.push(o),o}const ct={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function Ue(t){const n=t.geometry,e=n.attributes,a=e.position.values,r=y.defined(e.normal)?e.normal.values:void 0,u=y.defined(e.bitangent)?e.bitangent.values:void 0,o=y.defined(e.tangent)?e.tangent.values:void 0,i=y.defined(e.st)?e.st.values:void 0,l=y.defined(e.extrudeDirection)?e.extrudeDirection.values:void 0,c=y.defined(e.applyOffset)?e.applyOffset.values:void 0,d=n.indices,f=[];for(const A in e)e.hasOwnProperty(A)&&!ct[A]&&y.defined(e[A])&&f.push(A);const g=f.length,b=oe(n),C=oe(n);let p,m,x,S,h;const P=[];P.length=a.length/3;const v=[];for(v.length=a.length/3,h=0;h<P.length;++h)P[h]=-1,v[h]=-1;const w=d.length;for(h=0;h<w;h+=3){const A=d[h],E=d[h+1],O=d[h+2];let N=s.Cartesian3.fromArray(a,3*A),D=s.Cartesian3.fromArray(a,3*E),L=s.Cartesian3.fromArray(a,3*O);const T=ot(N,D,L);if(y.defined(T)&&T.positions.length>3){const B=T.positions,_=T.indices,j=_.length;for(let G=0;G<j;++G){const R=_[G],V=B[R];V.y<0?(p=C.attributes,m=C.indices,x=P):(p=b.attributes,m=b.indices,x=v),S=X(p,m,x,d,R<3?h+R:-1,V),he(A,E,O,V,a,r,o,u,i,l,c,p,f,g,e,S)}}else y.defined(T)&&(N=T.positions[0],D=T.positions[1],L=T.positions[2]),N.y<0?(p=C.attributes,m=C.indices,x=P):(p=b.attributes,m=b.indices,x=v),S=X(p,m,x,d,h,N),he(A,E,O,N,a,r,o,u,i,l,c,p,f,g,e,S),S=X(p,m,x,d,h+1,D),he(A,E,O,D,a,r,o,u,i,l,c,p,f,g,e,S),S=X(p,m,x,d,h+2,L),he(A,E,O,L,a,r,o,u,i,l,c,p,f,g,e,S)}Pe(t,C,b)}const Ye=Ne.Plane.fromPointNormal(s.Cartesian3.ZERO,s.Cartesian3.UNIT_Y),dt=new s.Cartesian3,ft=new s.Cartesian3;function ue(t,n,e,a,r,u,o){if(!y.defined(o))return;const i=s.Cartesian3.fromArray(a,3*t,ce);s.Cartesian3.equalsEpsilon(i,e,z.CesiumMath.EPSILON10)?u.applyOffset.values[r]=o[t]:u.applyOffset.values[r]=o[n]}function Ze(t){const n=t.geometry,e=n.attributes,a=e.position.values,r=y.defined(e.applyOffset)?e.applyOffset.values:void 0,u=n.indices,o=oe(n),i=oe(n);let l;const c=u.length,d=[];d.length=a.length/3;const f=[];for(f.length=a.length/3,l=0;l<d.length;++l)d[l]=-1,f[l]=-1;for(l=0;l<c;l+=2){const g=u[l],b=u[l+1],C=s.Cartesian3.fromArray(a,3*g,ce),p=s.Cartesian3.fromArray(a,3*b,Se);let m;Math.abs(C.y)<z.CesiumMath.EPSILON6&&(C.y<0?C.y=-z.CesiumMath.EPSILON6:C.y=z.CesiumMath.EPSILON6),Math.abs(p.y)<z.CesiumMath.EPSILON6&&(p.y<0?p.y=-z.CesiumMath.EPSILON6:p.y=z.CesiumMath.EPSILON6);let x=o.attributes,S=o.indices,h=f,P=i.attributes,v=i.indices,w=d;const A=Ee.IntersectionTests.lineSegmentPlane(C,p,Ye,Ie);if(y.defined(A)){const E=s.Cartesian3.multiplyByScalar(s.Cartesian3.UNIT_Y,5*z.CesiumMath.EPSILON9,dt);C.y<0&&(s.Cartesian3.negate(E,E),x=i.attributes,S=i.indices,h=d,P=o.attributes,v=o.indices,w=f);const O=s.Cartesian3.add(A,E,ft);m=X(x,S,h,u,l,C),ue(g,b,C,a,m,x,r),m=X(x,S,h,u,-1,O),ue(g,b,O,a,m,x,r),s.Cartesian3.negate(E,E),s.Cartesian3.add(A,E,O),m=X(P,v,w,u,-1,O),ue(g,b,O,a,m,P,r),m=X(P,v,w,u,l+1,p),ue(g,b,p,a,m,P,r)}else{let E,O,N;C.y<0?(E=i.attributes,O=i.indices,N=d):(E=o.attributes,O=o.indices,N=f),m=X(E,O,N,u,l,C),ue(g,b,C,a,m,E,r),m=X(E,O,N,u,l+1,p),ue(g,b,p,a,m,E,r)}}Pe(t,i,o)}const He=new M.Cartesian2,yt=new M.Cartesian2,We=new s.Cartesian3,Xe=new s.Cartesian3,Oe=new s.Cartesian3,mt=new s.Cartesian3,Ct=new s.Cartesian3,ht=new s.Cartesian3,je=new M.Cartesian4;function Je(t){const n=t.attributes,e=n.position.values,a=n.prevPosition.values,r=n.nextPosition.values,u=e.length;for(let o=0;o<u;o+=3){const i=s.Cartesian3.unpack(e,o,We);if(i.x>0)continue;const l=s.Cartesian3.unpack(a,o,Xe);(i.y<0&&l.y>0||i.y>0&&l.y<0)&&(o-3>0?(a[o]=e[o-3],a[o+1]=e[o-2],a[o+2]=e[o-1]):s.Cartesian3.pack(i,a,o));const c=s.Cartesian3.unpack(r,o,Oe);(i.y<0&&c.y>0||i.y>0&&c.y<0)&&(o+3<u?(r[o]=e[o+3],r[o+1]=e[o+4],r[o+2]=e[o+5]):s.Cartesian3.pack(i,r,o))}}const vt=5*z.CesiumMath.EPSILON9,ve=z.CesiumMath.EPSILON6;F.splitLongitude=function(t){const n=t.geometry,e=n.boundingSphere;if(y.defined(e)&&(e.center.x-e.radius>0||$.BoundingSphere.intersectPlane(e,Ne.Plane.ORIGIN_ZX_PLANE)!==$.Intersect.INTERSECTING))return t;if(n.geometryType!==I.GeometryType.NONE)switch(n.geometryType){case I.GeometryType.POLYLINES:(function(a){const r=a.geometry,u=r.attributes,o=u.position.values,i=u.prevPosition.values,l=u.nextPosition.values,c=u.expandAndWidth.values,d=y.defined(u.st)?u.st.values:void 0,f=y.defined(u.color)?u.color.values:void 0,g=oe(r),b=oe(r);let C,p,m,x=!1;const S=o.length/3;for(C=0;C<S;C+=4){const h=C,P=C+2,v=s.Cartesian3.fromArray(o,3*h,We),w=s.Cartesian3.fromArray(o,3*P,Xe);if(Math.abs(v.y)<ve)for(v.y=ve*(w.y<0?-1:1),o[3*C+1]=v.y,o[3*(C+1)+1]=v.y,p=3*h;p<3*h+12;p+=3)i[p]=o[3*C],i[p+1]=o[3*C+1],i[p+2]=o[3*C+2];if(Math.abs(w.y)<ve)for(w.y=ve*(v.y<0?-1:1),o[3*(C+2)+1]=w.y,o[3*(C+3)+1]=w.y,p=3*h;p<3*h+12;p+=3)l[p]=o[3*(C+2)],l[p+1]=o[3*(C+2)+1],l[p+2]=o[3*(C+2)+2];let A=g.attributes,E=g.indices,O=b.attributes,N=b.indices;const D=Ee.IntersectionTests.lineSegmentPlane(v,w,Ye,mt);if(y.defined(D)){x=!0;const L=s.Cartesian3.multiplyByScalar(s.Cartesian3.UNIT_Y,vt,Ct);v.y<0&&(s.Cartesian3.negate(L,L),A=b.attributes,E=b.indices,O=g.attributes,N=g.indices);const T=s.Cartesian3.add(D,L,ht);A.position.values.push(v.x,v.y,v.z,v.x,v.y,v.z),A.position.values.push(T.x,T.y,T.z),A.position.values.push(T.x,T.y,T.z),A.prevPosition.values.push(i[3*h],i[3*h+1],i[3*h+2]),A.prevPosition.values.push(i[3*h+3],i[3*h+4],i[3*h+5]),A.prevPosition.values.push(v.x,v.y,v.z,v.x,v.y,v.z),A.nextPosition.values.push(T.x,T.y,T.z),A.nextPosition.values.push(T.x,T.y,T.z),A.nextPosition.values.push(T.x,T.y,T.z),A.nextPosition.values.push(T.x,T.y,T.z),s.Cartesian3.negate(L,L),s.Cartesian3.add(D,L,T),O.position.values.push(T.x,T.y,T.z),O.position.values.push(T.x,T.y,T.z),O.position.values.push(w.x,w.y,w.z,w.x,w.y,w.z),O.prevPosition.values.push(T.x,T.y,T.z),O.prevPosition.values.push(T.x,T.y,T.z),O.prevPosition.values.push(T.x,T.y,T.z),O.prevPosition.values.push(T.x,T.y,T.z),O.nextPosition.values.push(w.x,w.y,w.z,w.x,w.y,w.z),O.nextPosition.values.push(l[3*P],l[3*P+1],l[3*P+2]),O.nextPosition.values.push(l[3*P+3],l[3*P+4],l[3*P+5]);const B=M.Cartesian2.fromArray(c,2*h,He),_=Math.abs(B.y);A.expandAndWidth.values.push(-1,_,1,_),A.expandAndWidth.values.push(-1,-_,1,-_),O.expandAndWidth.values.push(-1,_,1,_),O.expandAndWidth.values.push(-1,-_,1,-_);let j=s.Cartesian3.magnitudeSquared(s.Cartesian3.subtract(D,v,Oe));if(j/=s.Cartesian3.magnitudeSquared(s.Cartesian3.subtract(w,v,Oe)),y.defined(f)){const G=M.Cartesian4.fromArray(f,4*h,je),R=M.Cartesian4.fromArray(f,4*P,je),V=z.CesiumMath.lerp(G.x,R.x,j),Q=z.CesiumMath.lerp(G.y,R.y,j),k=z.CesiumMath.lerp(G.z,R.z,j),J=z.CesiumMath.lerp(G.w,R.w,j);for(p=4*h;p<4*h+8;++p)A.color.values.push(f[p]);for(A.color.values.push(V,Q,k,J),A.color.values.push(V,Q,k,J),O.color.values.push(V,Q,k,J),O.color.values.push(V,Q,k,J),p=4*P;p<4*P+8;++p)O.color.values.push(f[p])}if(y.defined(d)){const G=M.Cartesian2.fromArray(d,2*h,He),R=M.Cartesian2.fromArray(d,2*(C+3),yt),V=z.CesiumMath.lerp(G.x,R.x,j);for(p=2*h;p<2*h+4;++p)A.st.values.push(d[p]);for(A.st.values.push(V,G.y),A.st.values.push(V,R.y),O.st.values.push(V,G.y),O.st.values.push(V,R.y),p=2*P;p<2*P+4;++p)O.st.values.push(d[p])}m=A.position.values.length/3-4,E.push(m,m+2,m+1),E.push(m+1,m+2,m+3),m=O.position.values.length/3-4,N.push(m,m+2,m+1),N.push(m+1,m+2,m+3)}else{let L,T;for(v.y<0?(L=b.attributes,T=b.indices):(L=g.attributes,T=g.indices),L.position.values.push(v.x,v.y,v.z),L.position.values.push(v.x,v.y,v.z),L.position.values.push(w.x,w.y,w.z),L.position.values.push(w.x,w.y,w.z),p=3*C;p<3*C+12;++p)L.prevPosition.values.push(i[p]),L.nextPosition.values.push(l[p]);for(p=2*C;p<2*C+8;++p)L.expandAndWidth.values.push(c[p]),y.defined(d)&&L.st.values.push(d[p]);if(y.defined(f))for(p=4*C;p<4*C+16;++p)L.color.values.push(f[p]);m=L.position.values.length/3-4,T.push(m,m+2,m+1),T.push(m+1,m+2,m+3)}}x&&(Je(b),Je(g)),Pe(a,b,g)})(t);break;case I.GeometryType.TRIANGLES:Ue(t);break;case I.GeometryType.LINES:Ze(t)}else st(n),n.primitiveType===I.PrimitiveType.TRIANGLES?Ue(t):n.primitiveType===I.PrimitiveType.LINES&&Ze(t);return t};var bt=F;Qe.GeometryPipeline=bt});
