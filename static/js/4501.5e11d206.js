"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[4501],{704501:function(w,m,s){s.r(m),s.d(m,{default:function(){return K}});var g=s(653183),d=s.n(g),v=s(682571),k=s(195659),b=s(23230),x=s(568640),h=s(542447),f=s(255979),E=s(507522),M=s(144727),O=s(776094),u=s(390583),B=s(555616),T=s(130798),I=s(313811),Z=s(505689),C=s(762735),A=s(235776),y=s.n(A),R=s(7715),S=s.n(R);class V{constructor(t,e,i,a,l,r){this.option=t,this.callback=r,this.dataArr=a,this.dataMax=Math.max.apply(Math,a),this.datamin=Math.min.apply(Math,a),this.k=80/(this.dataMax-this.datamin),this.stackCount=t.stackCount,this.map=e,this.centerPointObj=i,this.loading=l}initBar(){let t=this;t.clearBar(),S()(y()),t.createSeries(),t.map.render()}clearBar(){var t=d()("[id^=barcharts_]");if(t.length>0)for(let e=0;e<t.length;e++)t[e].parentElement.remove()}createBar3D(t,e){let a=20*this.stackCount;a<60&&(a=60),d()(".ol-overlaycontainer").append("<div id='barcharts_"+e+"' style='width:"+a+"px;height:100px;'></div>");var l={type:"column",backgroundColor:"rgba(0,0,0,0)",margin:0,options3d:{enabled:!0,alpha:15,beta:15,depth:50,viewDistance:25}},r={text:""},c={column:{depth:25}},o=[{name:"",data:t}];let n={};n.chart=l,n.title=r,n.series=o,n.plotOptions=c,n.credits={enabled:!1},n.legend={enabled:!1},n.xAxis={visible:!1},n.yAxis={visible:!1},y().chart("barcharts_"+e,n)}createSeries(){let t=this,e=t.option.totaldata,i=0;for(const a in t.centerPointObj){let l=e[a].data;if(l.length>0){let r=[];l.forEach((c,o)=>{let n={};n.name=c.name,n.y=c.value,n.color=t.option.colorList[o],r.push(n)}),t.createBar3D(r,i),t.setOverLay(t.centerPointObj[a],i),i++}}if(this.callback){let a={success:!0,mode:t.option.mode,message:"\u6DFB\u52A0\u6210\u529F"};this.callback(a)}this.loading.close()}setOverLay(t,e){let i=this;var a=new C.Z({position:t,offset:[0,10],positioning:"bottom-center",element:document.getElementById("barcharts_"+e)});i.map.addOverlay(a)}}var j=V;class N{constructor(t,e,i,a,l,r){this.option=t,this.callback=r,this.dataArr=a,this.dataMax=Math.max.apply(Math,a),this.datamin=Math.min.apply(Math,a),this.k=80/(this.dataMax-this.datamin),this.map=e,this.centerPointObj=i,this.loading=l}initPie(t){this.type=t,this.clearPie();let e=this;S()(y()),this.createSeries(),e.map.render()}clearPie(){T.Z.$emit("setLegend",this.option);var t=d()("[id^=piecharts_]");if(t.length>0)for(let e=0;e<t.length;e++)t[e].parentElement.remove()}createPie3D(t,e,i){let a=this;d()(".ol-overlaycontainer").append("<div id='piecharts_"+e+"' style='width:100px;height:100px;'></div>");var l={type:"pie",options3d:{enabled:!0,alpha:55,beta:0},backgroundColor:"rgba(0,0,0,0)"},r={text:""},c={pointFormat:"{series.name}: {point.percentage:.1f}%<br/><b>"+i+"</b>"},o={pie:{allowPointSelect:!0,cursor:"pointer",depth:15,dataLabels:{enabled:!1}}},n=[{type:"pie",name:"\u5360\u6BD4",colors:a.option.colorList,data:t}],p={};p.chart=l,p.title=r,p.tooltip=c,p.credits={enabled:!1},p.plotOptions=o,a.type=="ring"&&(p.plotOptions.pie.innerSize=20),p.series=n,y().chart("piecharts_"+e,p)}createSeries(){let t=this,e=t.option.totaldata,i=0;for(const a in t.centerPointObj){let l=e[a].data;if(l.length>0){let r=[];l.forEach(c=>{let o={};o.name=c.name,o.y=c.value,r.push(o)}),t.createPie3D(r,i,t.option.totaldata[a].xzqmc),t.setOverLay(t.centerPointObj[a],i),i++}}if(this.callback){let a={success:!0,mode:t.option.mode,message:"\u6DFB\u52A0\u6210\u529F"};this.callback(a)}this.loading.close()}setOverLay(t,e){let i=this;var a=new C.Z({position:t,positioning:"center-center",element:document.getElementById("piecharts_"+e)});i.map.addOverlay(a)}}var L=N;class Q{constructor(t,e,i,a,l){this.option=t,this.callback=l,this.map=e,this.centerPointObj=i,this.loading=a}initMarker(){this.clearMarker(),this.handleData(),this.map.render()}clearMarker(){T.Z.$emit("setLegend",this.option);var t=d()("[id^=markerecharts_]");if(t.length>0)for(let e=0;e<t.length;e++)t[e].parentElement.remove()}handleData(){let t=0,e=this.option.totaldata;for(const i in this.centerPointObj){if(i){let a=this.centerPointObj[i],l=e[i].data[0].value,r=e[i].xzqmc;this.createMarker(a,l,r,t)}t++}if(this.callback){let i={success:!0,mode:this.option.mode,message:"\u6DFB\u52A0\u6210\u529F"};this.callback(i)}this.loading.close()}createMarker(t,e,i,a){let l=this,r=e.toString().length,c=2,o=4+r*7.1;o<30&&(c=(30-o)/2+2,o=30);let n="<div class='labelTooltip1' id='markerecharts_"+a+"' title='"+i+"' style='cursor: pointer;'><div id='highcharts-"+a+"'></div></div>",p='<svg style="width: '+o+'px;height: 50px;"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#368ae3;stop-opacity:1" /><stop offset="100%" style="stop-color:#0434a0;stop-opacity:1" /></linearGradient></defs><rect x="0" y="0" width="'+o+'" height="30" rx="7" ry="7" style="fill:url(#grad1);stroke:#0434a0" /><text x="'+c+'" y="20" fill="white" style="font-size:13px;">'+e+'</text> <polygon points="'+o/3*2+",30 "+o/2+",40 "+o/3+',30" style="fill:#0434a0;" /></svg> ';d()(".ol-overlaycontainer").append(n),d()("#highcharts-"+a).append(p);var D=new C.Z({position:t,positioning:"center-center",element:document.getElementById("markerecharts_"+a)});l.map.addOverlay(D)}}var z=Q;class W{constructor(t,e,i){this.option=e,this.callback=i,this.map=t.map,this.config=t.configManager.config,this.parames=new f.Z,this.loading}initChart(){if(this)if(this.option.action=="clear")this.clearChart();else if(this.option.action=="clearAll")this.clearAll();else if(this.option.action)this._addLayer();else{if(this.callback){let t={success:!1,mode:this.option.mode,message:"\u53C2\u6570\u7F3A\u5931"};this.callback(t)}alert("\u53C2\u6570\u7F3A\u5931!")}}_addLayer(){let t=this,e=this.config;if(e.toc&&e.toc.length>0)t.checkLayer(e);else{if(t.callback){let i={success:!1,mode:t.option.mode,message:"\u56FE\u5C42\u4E0D\u5B58\u5728"};t.callback(i)}alert("\u56FE\u5C42\u4E0D\u5B58\u5728")}}clearAll(){var t=d()("*[id*='echarts_']");if(t.length>0)for(let e=0;e<t.length;e++)t[e].parentElement.remove();this.clearRamp()}clearRamp(){let t=this,e=this.config;if(e.toc&&e.toc.length>0){let i=e.toc;if(d().grep(i,function(l){return l.layerTag==t.option.layerTag}).length>0){let r=t.map.getLayerById("drawLayer").getSource();r.getFeatures().forEach(o=>{o.featureType=="ramp"&&r.clear(o)})}}}checkLayer(t){let e=this,i=t.toc;if(!e.option.layerTag){if(e.callback){let r={success:!1,mode:e.option.mode,message:"\u7F3A\u5C11\u56FE\u5C42\u6807\u8BC6"};e.callback(r)}alert("\u7F3A\u5C11\u56FE\u5C42\u6807\u8BC6");return}let a=d().grep(i,function(r){return r.layerTag!=""&&r.layerTag==e.option.layerTag});if(a.length==0){alert("\u56FE\u5C42\u4E0D\u5B58\u5728");return}if(a[0].identifyField.length<1){if(e.callback){let r={success:!1,mode:e.option.mode,message:"\u56FE\u5C42\u672A\u914D\u7F6EidentifyField\u67E5\u8BE2\u4FE1\u606F"};e.callback(r)}(0,B.Message)({type:"warning",message:e.option.layerTag+"\u56FE\u5C42\u672A\u914D\u7F6EidentifyField\u67E5\u8BE2\u4FE1\u606F"});return}let l=a[0];e.checkChartType(l)}checkChartType(t){let e=this;e.queryTask=new h.Z(t),e._getFeature(t)}_getFeature(){let t=this,e=t.option.totaldata;t.parames.where="",t.dataArr=[];var i=Object.keys(e);let a=0;for(const l in e)l&&(t.parames.where+="xzqdm="+l,a!=i.length-1&&(t.parames.where+=" or "),a++,e[l].data.forEach(c=>{t.dataArr.push(c.value)}));t.parames.srsName=t.map.getView().getProjection().getCode(),t.queryTask.execute(t.parames).then(function(l){if(l&&l.features&&l.features.length>0){let r=l.features;t._handleAllFeatures(r)}else{if(t.callback){let r={success:!1,mode:t.option.mode,message:"\u672A\u67E5\u8BE2\u5230\u6570\u636E"};t.callback(r)}alert("\u672A\u67E5\u8BE2\u5230\u6570\u636E")}})}_handleAllFeatures(t){let e=this,i={},a=e.option.totaldata;if(e.featureExtent=[1/0,1/0,-1/0,-1/0],t.forEach(l=>{let r=l.geometry,c=r.type,o=null;if(c=="MultiPolygon")o=new E.Z(r.coordinates);else if(c=="Polygon")o=new M.ZP(r.coordinates);else return;let n=(0,O.getCenter)(o.getExtent());if(i[l.properties.xzqdm]=n,e.getfeatureExtent(n),e.option.mode=="ramp"){let p=a[l.properties.xzqdm].color,D=l.properties.xzqmc,F=new I.Z({geometry:o});F.featureType="ramp",F.setStyle(e._getStyle(p,D)),e.map.getLayerById("drawLayer").getSource().addFeature(F)}}),e.option.mode!="ramp")e.addChart(i);else{if(this.callback){let r={success:!0,mode:e.option.mode,message:"\u6DFB\u52A0\u6210\u529F"};this.callback(r)}let l=[e.map.getSize()[0]*.7,e.map.getSize()[1]*.7];this.map.getView().fit(this.featureExtent,{size:l})}}getfeatureExtent(t){t[0]<this.featureExtent[0]&&(this.featureExtent[0]=t[0]),t[1]<this.featureExtent[1]&&(this.featureExtent[1]=t[1]),t[0]>this.featureExtent[2]&&(this.featureExtent[2]=t[0]),t[1]>this.featureExtent[3]&&(this.featureExtent[3]=t[1])}_getStyle(t,e){let i=new x.Z({color:t}),a=new b.Z({color:"rgba(0, 0, 0, 1)",width:1}),l=new k.Z({overflow:!0,text:e,fill:new x.Z({color:"#FFFFFF"})});return new v.ZP({image:new Z.Z({fill:i,stroke:a,radius:5}),fill:i,stroke:a,text:l})}addChart(t){let e=this;switch(e.option.mode){case"bar":new j(e.option,e.map,t,e.dataArr,this.loading,this.callback).initBar();break;case"pie":new L(e.option,e.map,t,e.dataArr,this.loading,this.callback).initPie("pie");break;case"ring":new L(e.option,e.map,t,e.dataArr,this.loading,this.callback).initPie("ring");break;case"marker":new z(e.option,e.map,t,this.loading,this.callback).initMarker();break}}clearChart(){let t=this;switch(t.option.mode){case"bar":new j(t.option).clearBar();break;case"pie":case"ring":new L(t.option).clearPie();break;case"ramp":t.clearRamp();break;case"marker":new z(t.option).clearMarker();break}}}var K=W},255979:function(w,m){class s{constructor(){this.where,this.srsName,this.outputFormat="application/json",this.maxFeatures,this.startIndex,this.resultType}}m.Z=s},542447:function(w,m,s){var g=s(869787),d=s.n(g),v=s(653183),k=s.n(v);class b{constructor(h){this.layerOption=h}execute(h){let f={service:"wfs",version:"1.1.0",request:"GetFeature",typeName:this.layerOption.visibleLayers[0],outputFormat:h.outputFormat};return h.where&&(f.CQL_FILTER=h.where),h.srsName&&(f.srsName=h.srsName),h.startIndex&&(f.startIndex=h.startIndex),h.maxFeatures&&(f.maxFeatures=h.maxFeatures),h.resultType&&(f.resultType=h.resultType),new Promise((E,M)=>{let O=this.layerOption.identifyField[0].lyr+"/"+this.layerOption.visibleLayers[0].split(":")[0]+"/wfs";k().ajax({url:O,type:"POST",data:d().stringify(f),success:u=>{E(u)},error:u=>{M(u)}})})}}m.Z=b}}]);
