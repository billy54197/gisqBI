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
 */define(["./Matrix3-2955527a","./defaultValue-ebbd2e4d","./EllipseOutlineGeometry-a290e30f","./Math-1fe079f3","./Transforms-5b74e989","./Matrix2-462b83d3","./RuntimeError-38a08050","./combine-55e9f355","./ComponentDatatype-f9ac3ed8","./WebGLConstants-544672c2","./EllipseGeometryLibrary-b919d7ec","./GeometryAttribute-9c756444","./GeometryAttributes-ca309b71","./GeometryOffsetAttribute-739bec2c","./IndexDatatype-7ccfd280"],function(l,a,n,c,d,m,p,y,f,G,_,h,x,b,E){"use strict";function s(e){const r=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:r,semiMinorAxis:r,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new n.EllipseOutlineGeometry(o),this._workerName="createCircleOutlineGeometry"}s.packedLength=n.EllipseOutlineGeometry.packedLength,s.pack=function(e,r,o){return n.EllipseOutlineGeometry.pack(e._ellipseGeometry,r,o)};const u=new n.EllipseOutlineGeometry({center:new l.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),i={center:new l.Cartesian3,radius:void 0,ellipsoid:l.Ellipsoid.clone(l.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return s.unpack=function(e,r,o){const t=n.EllipseOutlineGeometry.unpack(e,r,u);return i.center=l.Cartesian3.clone(t._center,i.center),i.ellipsoid=l.Ellipsoid.clone(t._ellipsoid,i.ellipsoid),i.height=t._height,i.extrudedHeight=t._extrudedHeight,i.granularity=t._granularity,i.numberOfVerticalLines=t._numberOfVerticalLines,a.defined(o)?(i.semiMajorAxis=t._semiMajorAxis,i.semiMinorAxis=t._semiMinorAxis,o._ellipseGeometry=new n.EllipseOutlineGeometry(i),o):(i.radius=t._semiMajorAxis,new s(i))},s.createGeometry=function(e){return n.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(e,r){return a.defined(r)&&(e=s.unpack(e,r)),e._ellipseGeometry._center=l.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=l.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),s.createGeometry(e)}});
