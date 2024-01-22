"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[21381],{683605:function(Q,N,r){var M=r(149500),I=r(29870),U=r(787879),k=r(183393),j=r(419534);Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var P=j(r(143939)),C=j(r(122777)),F=j(r(42762)),h=W(r(419026)),D=r(223278),G=j(r(561128));function B(f){if(typeof U!="function")return null;var v=new U,e=new U;return(B=function(n){return n?e:v})(f)}function W(f,v){if(!v&&f&&f.__esModule)return f;if(f===null||I(f)!=="object"&&typeof f!="function")return{default:f};var e=B(v);if(e&&e.has(f))return e.get(f);var u={},n=Object.defineProperty&&k;for(var i in f)if(i!=="default"&&Object.prototype.hasOwnProperty.call(f,i)){var l=n?k(f,i):null;l&&(l.get||l.set)?Object.defineProperty(u,i,l):u[i]=f[i]}return u.default=f,e&&e.set(f,u),u}var L=function(){function f(){(0,C.default)(this,f),this.inPatterns=/ (IN) /i,this.tokens=["PROPERTY","COMPARISON","VALUE","LOGICAL"],this.patterns={PROPERTY:/^[_a-zA-Z]\w*/,COMPARISON:/^(=|<>|<=|<|>=|>|LIKE)/i,IS_NULL:/^IS NULL/i,COMMA:/^,/,LOGICAL:/^(AND|OR)/i,VALUE:/^('([^']|'')*'|-?\d+(\.\d*)?|\.\d+)/,LPAREN:/^\(/,RPAREN:/^\)/,SPATIAL:/^(BBOX|INTERSECTS|DWITHIN|WITHIN|CONTAINS)/i,NOT:/^NOT/i,BETWEEN:/^BETWEEN/i,GEOMETRY:function(e){var u=/^(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION)/.exec(e);if(u){var n=e.length,i=e.indexOf("(",u[0].length);if(i>-1)for(var l=1;i<n&&l>0;)switch(i++,e.charAt(i)){case"(":l++;break;case")":l--;break;default:}return[e.substring(0,i+1)]}},END:/^$/},this.follows={LPAREN:["GEOMETRY","SPATIAL","PROPERTY","VALUE","LPAREN"],RPAREN:["NOT","LOGICAL","END","RPAREN"],PROPERTY:["COMPARISON","BETWEEN","COMMA","IS_NULL"],BETWEEN:["VALUE"],IS_NULL:["END"],COMPARISON:["VALUE"],COMMA:["GEOMETRY","VALUE","PROPERTY"],VALUE:["LOGICAL","COMMA","RPAREN","END"],SPATIAL:["LPAREN"],LOGICAL:["NOT","VALUE","SPATIAL","PROPERTY","LPAREN"],NOT:["PROPERTY","LPAREN"],GEOMETRY:["COMMA","RPAREN"]},this.operators={"=":h.equalTo,"<>":h.notEqualTo,"<":h.lessThan,"<=":h.lessThanOrEqualTo,">":h.greaterThan,">=":h.greaterThanOrEqualTo,LIKE:h.like,BETWEEN:h.between,"IS NULL":h.isNull},this.operatorReverse={PropertyIsEqualTo:"=",PropertyIsNotEqualTo:"<>",PropertyIsLessThan:"<",PropertyIsLessThanOrEqualTo:"<=",PropertyIsGreaterThan:">",PropertyIsGreaterThanOrEqualTo:">=",PropertyIsLike:"LIKE",PropertyIsNull:"IS NULL",PropertyIsBetween:"BETWEEN"},this.logicals={AND:h.and,OR:h.or},this.precedence={RPAREN:3,LOGICAL:2,COMPARISON:1}}return(0,F.default)(f,[{key:"tryToken",value:function(e,u){return u instanceof RegExp?u.exec(e):u(e)}},{key:"nextToken",value:function(e,u){var n,i,l=u.length;for(n=0;n<l;n++){i=u[n];var R=this.patterns[i],d=this.tryToken(e,R);if(d){var y=d[0],g=e.substring(y.length).replace(/^\s*/,"");return{type:i,text:y,remainder:g}}}var t="ERROR: In parsing: ["+e+"], expected one of: ";for(n=0;n<l;n++)i=u[n],t+=`
    `+i+": "+this.patterns[i];throw new Error(t)}},{key:"tokenize",value:function(e){var u;e=(0,P.default)(u=(0,P.default)(e).call(e,"[","")).call(u,"]","");var n=this.tryToken(e,this.inPatterns);n&&(e=this.parseInToOr(e,n));var i=[],l,R=["NOT","GEOMETRY","SPATIAL","PROPERTY","LPAREN"];do{if(l=this.nextToken(e,R),e=l.remainder,R=this.follows[l.type],l.type!=="END"&&!R)throw new Error("No follows list for "+l.type);i.push(l)}while(l.type!=="END");return i}},{key:"parseInToOr",value:function(e,u){var n=this.tryToken(e,/\((.+?)\)/g);if(n){var i=e.substring(0,u.index),l=n[1],R=(0,P.default)(l).call(l," ","").split(","),d="",y="";if(i.indexOf(" ")>-1){var g=i.lastIndexOf(" ");y=i.substring(0,g+1),d=i.substring(g+1,i.length)}else d=i;for(var t=y,s=0;s<R.length;s++){var a=R[s];t+=d+"="+a,s<R.length-1&&(t+=" or ")}return t}return e}},{key:"buildAst",value:function(e){for(var u=this,n=[],i=[];e.length;){var l=e.shift();switch(l.type){case"PROPERTY":case"GEOMETRY":case"VALUE":i.push(l);break;case"COMPARISON":case"BETWEEN":case"IS_NULL":case"LOGICAL":{for(var R=this.precedence[l.type];n.length>0&&this.precedence[n[n.length-1].type]<=R;)i.push(n.pop());n.push(l);break}case"SPATIAL":case"NOT":case"LPAREN":n.push(l);break;case"RPAREN":for(;n.length>0&&n[n.length-1].type!=="LPAREN";)i.push(n.pop());n.pop(),n.length>0&&(n[n.length-1].type==="SPATIAL"||n[n.length-1].type==="NOT")&&i.push(n.pop());break;case"COMMA":case"END":break;default:throw new Error("Unknown token type "+l.type)}}for(;n.length>0;)i.push(n.pop());function d(){var s,a,o=i.pop();switch(o.type){case"LOGICAL":{var m=d(),T=d();return new u.logicals[o.text.toUpperCase()](T,m)}case"NOT":{var O=d();return new h.not(O)}case"BETWEEN":{var w,p;return i.pop(),p=d(),w=d(),a=d(),new h.between(a,w,p)}case"COMPARISON":return s=d(),a=d(),new u.operators[o.text.toUpperCase()](a,s);case"IS_NULL":return a=d(),new u.operators[o.text.toUpperCase()](a);case"VALUE":{var E=o.text.match(/^'(.*)'$/);return E?E[1].replace(/''/g,"'"):Number(o.text)}case"SPATIAL":switch(o.text.toUpperCase()){case"BBOX":{var c=d(),A=d(),V=d(),S=d(),Y=d();return new h.bbox(Y,[S,V,A,c])}case"INTERSECTS":return s=d(),a=d(),new h.intersects(a,s);case"WITHIN":return s=d(),a=d(),new h.within(a,s);case"CONTAINS":return s=d(),a=d(),new h.contains(a,s)}break;case"GEOMETRY":return new D.WKT().readGeometry(o.text,{});default:return o.text}}var y=d();if(i.length>0){for(var g=`\u5269\u4F59\u7684\u8282\u70B9\u65E0\u6CD5\u89E3\u6790: 
`,t=i.length-1;t>=0;t--)g+=i[t].type+": "+i[t].text+`
`;throw new Error(g)}return y}},{key:"read",value:function(e){try{return this.buildAst(this.tokenize(e))}catch(u){M.warn("CQL\u89E3\u6790\u5931\u8D25:"+e),M.warn(u)}}},{key:"write",value:function(e){switch(e.tagName_){case"BBOX":return"BBOX("+e.geometryName+","+e.extent.join(",")+","+e.srsName+")";case"Within":return"WITHIN("+e.geometryName+", "+this.readGeometry(e.geometry)+")";case"Intersects":return"INTERSECTS("+e.geometryName+", "+this.readGeometry(e.geometry)+")";case"Contains":return"CONTAINS("+e.geometryName+", "+this.readGeometry(e.geometry)+")";case"Not":return"NOT ("+this.write(e.condition)+")";case"And":case"Or":{for(var u="(",n=!0,i=0;i<e.conditions.length;i++)n?n=!1:u+=") "+e.tagName_.toLowerCase()+" (",u+=this.write(e.conditions[i]);return u+")"}case"PropertyIsBetween":return e.property+" BETWEEN "+this.write(e.lowerBoundary)+" AND "+this.write(e.upperBoundary);case"PropertyIsEqualTo":case"PropertyIsNotEqualTo":case"PropertyIsLessThan":case"PropertyIsLessThanOrEqualTo":case"PropertyIsGreaterThan":case"PropertyIsGreaterThanOrEqualTo":case"PropertyIsLike":case"PropertyIsNull":return e.expression!==null?e.propertyName+" "+this.operatorReverse[e.tagName_]+" "+this.write(e.expression):e.propertyName+" "+this.operatorReverse[e.tagName_];case void 0:if(typeof e=="string")return"'"+e.replace(/'/g,"''")+"'";if(typeof e=="number")return String(e);break;default:throw new Error("Can't encode: "+e.CLASS_NAME+" "+e)}}},{key:"readGeometry",value:function(e){if(e instanceof G.default)return new D.WKT().writeGeometry(e)}}]),f}();N.default=L},103674:function(Q,N,r){var M=r(985208),I=r(659791),U=r(22466),k=r(183393),j=r(105077),P=r(419534);Object.defineProperty(N,"__esModule",{value:!0}),N.compatibleOldFormConfig=g,N.getArcgisIdentifyTask=d,N.getGeoServerIdentifyTask=R,N.getGeowayIdentifyTask=y,N.judgeZoomLimit=l;var C=P(r(543389)),F=P(r(342579)),h=P(r(828866)),D=P(r(22466)),G=P(r(520314)),B=P(r(705146)),W=P(r(561674)),L=P(r(813866)),f=P(r(865046)),v=P(r(679594)),e=P(r(710510)),u=r(632002);function n(t,s){var a=M(t);if(I){var o=I(t);s&&(o=U(o).call(o,function(m){return k(t,m).enumerable})),a.push.apply(a,o)}return a}function i(t){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?n(Object(a),!0).forEach(function(o){(0,C.default)(t,o,a[o])}):j?Object.defineProperties(t,j(a)):n(Object(a)).forEach(function(o){Object.defineProperty(t,o,k(a,o))})}return t}function l(t,s){var a=(0,h.default)(t),o=t.viewer;if(s==null)return!0;if(a)return a.getView().getZoom()>s;var m=o.camera.positionCartographic.height;return o.shine.getLevel(m)>s}function R(t,s,a){var o,m=this,T=(0,h.default)(a),O=a.viewer,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=(o=t.identifyField)===null||o===void 0?void 0:(0,D.default)(o).call(o,function(A){return(0,F.default)(this,m),A.isOpenSearch!==!1}.bind(this));if(t.group==="2"&&p?.length>0&&l({map:T,viewer:O},t.identifyZoom)){var E=new W.default(t,s,{map:T,viewer:O},w),c=new L.default;return c.execute(E)}}function d(t,s,a){var o,m=this,T=(0,h.default)(a),O=a.viewer,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=(o=t.identifyField)===null||o===void 0?void 0:(0,D.default)(o).call(o,function(z){return(0,F.default)(this,m),z.isOpenSearch!==!1}.bind(this));if(t.group==="2"&&p?.length>0&&l({map:T,viewer:O},t.identifyZoom)){for(var E,c=p,A=c[0].lyr.lastIndexOf("/"),V=(0,G.default)(E=c[0].lyr).call(E,0,A),S="visible:",Y=0,$=c.length;Y<$;Y++){var b,J=Number((0,G.default)(b=c[Y].lyr).call(b,A+1,c[Y].lyr.length));c[Y].layerId=J,S+=J+","}S=S.substring(0,S.length-1);var K={layers:S};t.layerDefs&&(K.layerDefs=t.layerDefs),t.authkey&&(K.authkey=t.authkey);var Z=new f.default(V,K,t);return Z.at(s,{map:T,viewer:O},w),Z.run()}}function y(t,s,a){var o,m=this,T=(0,h.default)(a),O=a.viewer,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=(o=t.identifyField)===null||o===void 0?void 0:(0,D.default)(o).call(o,function(A){return(0,F.default)(this,m),A.isOpenSearch!==!1}.bind(this));if(t.group==="2"&&p?.length>0&&l({map:T,viewer:O},t.identifyZoom)){var E=new v.default(t,s,{map:T,viewer:O},w),c=new e.default;return c.execute(E)}}function g(t){var s=this,a=(0,u.cloneDeep)(t);if(a.formConfig&&a.identifyField.length){for(var o,m=a.formConfig.filed.split(","),T=a.formConfig.mapping.split(","),O=Math.min(m.length,T.length),w=a.formConfig.formUrl,p=w.indexOf("?")>-1?"&":"?",E="",c=0;c<O;c++){var A;E+=(0,B.default)(A="&".concat(m[c],"={")).call(A,T[c],"}")}E=E.substring(1,E.length);var V={formUrl:w+p+E,name:a.formConfig.name};return a.identifyField=(0,h.default)(o=a.identifyField).call(o,function(S){return(0,F.default)(this,s),S.formConfig?S:i(i({},S),{},{formConfig:[V]})}.bind(this)),a}else return t}},679594:function(Q,N,r){var M=r(419534);Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var I=M(r(828866)),U=M(r(705146)),k=M(r(122777)),j=M(r(42762)),P=M(r(349162)),C=r(972233),F=M(r(597998)),h=new P.default,D=function(){function B(W,L,f){var v,e,u=(0,I.default)(f),n=f.viewer;(0,k.default)(this,B),this.layerOption=W,this.map=u,this.viewer=n,this.position=L,this.queryUrl=this._getQueryUrl(),this.coordinate=this._getCoordinate(),this.projectionCode=(0,I.default)(this)?(0,I.default)(this).getView().getProjection().getCode():void 0,this.resolution=this._getResolution(),this.maskGeoJson=((v=(0,I.default)(this))===null||v===void 0?void 0:v.maskGeoJson)||((e=this.viewer)===null||e===void 0?void 0:e.maskGeoJson),this.maxFeatures=100,this.tolerance=3}return(0,j.default)(B,[{key:"_getQueryUrl",value:function(){var L;if((0,I.default)(this)){var f,v,e,u=(0,I.default)(this).getLayerById(this.layerOption.id),n=((f=u.get("info"))===null||f===void 0?void 0:f.geowayInfo)||{},i=n.hostUrl,l=n.serverName,R=this.layerOption.identifyField[0].name;L=(0,U.default)(v=(0,U.default)(e="".concat(i,"/")).call(e,l,"/")).call(v,R,"/query")}return L}},{key:"_getCoordinate",value:function(){if((0,I.default)(this)){if(this.position instanceof Array&&this.position.length===2)return this.position;var L=h.readGeometry(this.position);if(L.getType()==="Point")return L.getCoordinates()}else if(this.viewer&&this.position)return this.projectionCode="EPSG:4326",this.position}},{key:"_getResolution",value:function(){var L;return(0,I.default)(this)?L=(0,C.getPointResolution)((0,I.default)(this).getView().getProjection(),(0,I.default)(this).getView().getResolution(),(0,I.default)(this).getView().getCenter(),F.default.METERS):this.viewer&&(L=this._earthResolution),L}}]),B}(),G=D;N.default=G},710510:function(Q,N,r){var M=r(149500),I=r(985208),U=r(659791),k=r(22466),j=r(183393),P=r(105077),C=r(419534);Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var F=C(r(578756)),h=C(r(828866)),D=C(r(543389)),G=C(r(342579)),B=C(r(122777)),W=C(r(42762)),L=C(r(10299)),f=C(r(349162)),v=C(r(31694)),e=r(972233),u=r(125794),n=C(r(223378));function i(y,g){var t=I(y);if(U){var s=U(y);g&&(s=k(s).call(s,function(a){return j(y,a).enumerable})),t.push.apply(t,s)}return t}function l(y){for(var g=1;g<arguments.length;g++){var t=arguments[g]!=null?arguments[g]:{};g%2?i(Object(t),!0).forEach(function(s){(0,D.default)(y,s,t[s])}):P?Object.defineProperties(y,P(t)):i(Object(t)).forEach(function(s){Object.defineProperty(y,s,j(t,s))})}return y}var R=function(){function y(){(0,B.default)(this,y),this.geojsonFormat=new f.default,this.wktFormat=new v.default,this.identifyParameters={}}return(0,W.default)(y,[{key:"execute",value:function(t){var s=this;return this.identifyParameters=t,new F.default(function(a){var o=this;(0,G.default)(this,s),this.serverQuery().then(function(m){var T=this;(0,G.default)(this,o);var O=this.identifyParameters.layerOption,w=O.serverOrigin,p=O.label,E=O.id,c=O.isPop,A=O.layerTag,V={type:w,results:[],layerLabel:p,layerId:E,isPop:c,layerTag:A},S=[];m.forEach(function(Y){(0,G.default)(this,T);var $=Y.getProperties();delete $.geometry;var b={identifyField:this.identifyParameters.layerOption.identifyField[0],geometry:this.geojsonFormat.writeGeometry(Y.getGeometry()),attributes:$};S.push(b)}.bind(this)),V.results=S,a(V)}.bind(this))}.bind(this))}},{key:"serverQuery",value:function(){var t=this,s=this.getIdentifyGeometry(),a=this._getIdentifyGeometryIntersectMask(s);return a?new F.default(function(o){var m=this;(0,G.default)(this,t),(0,L.default)({method:"get",url:this.identifyParameters.queryUrl,params:{spatialFilter:this.wktFormat.writeGeometry(a),withGeometry:!0}}).then(function(T){var O,w=this;(0,G.default)(this,m);var p=[];p=(0,h.default)(O=T.data).call(O,function(E){(0,G.default)(this,w);var c=this.wktFormat.readFeature(E.shape);c.setGeometry(c.getGeometry().transform("EPSG:4326",this.identifyParameters.projectionCode));var A=l({},E);return delete A.shape,c.setProperties(A),c}.bind(this)),o(p)}.bind(this)).catch(function(T){(0,G.default)(this,m),o([]),M.error(T)}.bind(this))}.bind(this)):F.default.resolve([])}},{key:"getIdentifyGeometry",value:function(){if(this.identifyParameters.coordinate){var t=this.geojsonFormat.writeGeometryObject(new n.default((0,e.transform)(this.identifyParameters.coordinate,this.identifyParameters.projectionCode,"EPSG:4326"))),s=(0,u.buffer)(t,this.identifyParameters.tolerance*this.identifyParameters.resolution/1e3);return this.geojsonFormat.readFeature(s).getGeometry()}else{var a=this.geojsonFormat.readGeometry(this.identifyParameters.position);if(a.getType()==="LineString"){var o=a.transform(this.identifyParameters.projectionCode,"EPSG:4326"),m=(0,u.buffer)(this.geojsonFormat.writeGeometryObject(o),this.identifyParameters.tolerance*this.identifyParameters.resolution/1e3);return this.geojsonFormat.readFeature(m).getGeometry()}else return a}}},{key:"_getIdentifyGeometryIntersectMask",value:function(t){if(this.identifyParameters.maskGeoJson){var s=this.geojsonFormat.writeGeometryObject(this.geojsonFormat.readGeometry(this.identifyParameters.maskGeoJson)),a=this.geojsonFormat.writeGeometryObject(t.transform(this.identifyParameters.projectionCode,"EPSG:4326")),o=(0,u.intersect)(s,a);return o?this.geojsonFormat.readFeature(o).getGeometry().transform("EPSG:4326",this.identifyParameters.projectionCode):null}return t}}]),y}(),d=R;N.default=d}}]);
