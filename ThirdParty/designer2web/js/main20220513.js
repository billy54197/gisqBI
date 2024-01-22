	var jsonData0
	var level=0;//左边目录层级深度
	var defaultLevel=3;//左边导航默认展开的层级数
	//常用属性中英文对照表
	var svgAttribMap={
		"width":"宽度",
		"height":"高度",
		"viewBox":"视窗",
		"d":"路径",
		"id":"id",
		"stroke":"轮廓颜色",
		"stroke-width":"轮廓粗细",
		"fill":"填充颜色",
		"fill-rule":"填充规则",
		"x":"左边位置",
		"y":"上边位置",
		"rx":"x轴",
		"ry":"y轴",
		"font-family":"字体",
		"font-size":"字号",
		"font-weight":"粗细",
		"cx":"椭圆心x",
		"cy":"椭圆心y",
		"r":"圆半径",
		"transform":"变换矩阵",
		"stroke-linecap":"轮廓端点",
		"stroke-linejoin":"轮廓连接",
		"points":"坐标点集",
		"xlink:href":"资源链接",
		"mask":"遮罩",
		"opacity":"透明度",
		"fill-opacity":"填充透明度",
		"title":"提示标题",
		"docid":"docid",
		"parentid":"parentid",
		"ignore":"忽略节点",
		"data-name":"名称",
		"clip-path":"剪切路径",
		"isimage":"是否切图",
		"style":"元件样式",
		"stroke-dasharray":"轮廓样式",
		"class":"class类"
		}
	var fileName=document.getElementById("fileName")
	var zoomrate=document.getElementById("zoomrate")
	var downloadMenu=document.getElementById("downloadMenu")
	var container=document.getElementById("container")
	var svgPreview = document.getElementById('svgPreview');
	var imgPreview = document.getElementById('imgPreview');
	var htmlPreview = document.getElementById('htmlPreview');
	var nav = document.getElementById('nav');
	var attribPanel = document.getElementById('attribPanel');
	var attributesList= document.getElementById('attributesList');
	var imgView= document.getElementById('imgView');
	var nodeCode= document.getElementById('nodeCode');
	//下载菜单
	var downsvg= document.getElementById('downsvg');
	var downimage= document.getElementById('downimage');
	var downpage= document.getElementById('downpage');
	var downjson= document.getElementById('downjson');
	//TAB切换
	var svgView= document.getElementById('svgView');
	var imageView= document.getElementById('imageView');
	var pageView= document.getElementById('pageView');
	var downMenuView= document.getElementById('downMenuView');

	//放到缩小
	var zoomout= document.getElementById('zoomout');
	var zoomin= document.getElementById('zoomin');

	//右边小窗口下载
	var savepic= document.getElementById('savepic');
	var savecode= document.getElementById('savecode');


	var svgroot=null;
	var svgwidth=0,svgheight=0;
	var selectNode=null;
	var defs="",layerIndex=0;

    var fileUpload = document.getElementById('file'); //BI  修改变量类型 由const 改成 var
    var result = document.getElementById('result'); //BI  修改变量类型 由const 改成 var
    var webTemplate=`
		<!doctype html>
		<html lang="en">
		 <head>
		  <meta charset="UTF-8">
		  <meta name="Generator" content="designer2web">
		  <meta name="Author" content="qiuxb">
		  <meta name="Keywords" content="">
		  <meta name="Description" content="">
		  <title>{titleStr}</title>
		  <style>
		  {styleStr}
		  </style>
		 </head>
		 <body>
		  {htmlStr}
		 </body>
		</html>
	`; //BI  修改变量类型 由const 改成 var
	//右边小窗口下载按钮
	savepic.onclick=function(){
		download1("united.png",imgView.src)
        hideDmenu() // BI 收起下载选项弹窗
	};
	savecode.onclick=function(){
		download2("united.svg",nodeCode.value)
        hideDmenu() // BI 收起下载选项弹窗
	};
	//工具条放大缩小按钮
	zoomout.onclick=function(){
		zoom(-0.1)
        hideDmenu() // BI 收起下载选项弹窗
	};
	zoomin.onclick=function(){
		zoom(0.1)
        hideDmenu() // BI 收起下载选项弹窗
	};
	//工具条tab切换
	svgView.onclick=function(){
		showTAB(1,'svgPreview')
        hideDmenu() // BI 收起下载选项弹窗
	};
	imageView.onclick=function(){
		showTAB(2,'imgPreview')
        hideDmenu() // BI 收起下载选项弹窗

	};
	pageView.onclick=function(){
		showTAB(3,'htmlPreview')
        hideDmenu() // BI 收起下载选项弹窗
	};

	//工具条下载按钮
	downMenuView.onclick=function(){
		showDmenu()
	};
	downjson.onclick=function(){
		downLoad("json")
        hideDmenu() // BI 收起下载选项弹窗
	};
	downsvg.onclick=function(){
		downLoad("svgPreview")
        hideDmenu() // BI 收起下载选项弹窗
	};
	downimage.onclick=function(){
		downLoad("imgPreview")
        hideDmenu() // BI 收起下载选项弹窗
	};
	downpage.onclick=function(){
		downLoad("htmlPreview")
        hideDmenu() // BI 收起下载选项弹窗
	};
	function showDmenu(){
		downloadMenu.style.display=(downloadMenu.style.display!="block")?"block":"none"
	}

    // BI 收起下载选项弹窗
    function hideDmenu(){
        downloadMenu.style.display="none"
    }

	//下载相应内容
	function downLoad(objId){
		let filename0=fileName.innerHTML.replace(".svg","")
		switch(objId){
			case "svgPreview":
				filename0=filename0+".svg"
				if(document.getElementById("tempSel")){
					//alert("有框")
					let tempSel=document.getElementById("tempSel");
					tempSel.parentNode.removeChild(tempSel);
				}
				download2(filename0,svgPreview.innerHTML)
			break;
			case "htmlPreview":
				filename0=filename0+".html";
                let pageCode=getPageCode(); // BI 提前公共方法，供BI设计器调用
                download2(filename0,pageCode);
			break;
			case "json":
			filename0=filename0+".json";
			download2(filename0,svgtoJson(svgroot));
			console.log(svgtoJson(svgroot))
			break;
			default:
				filename0=filename0+".png";
				download1(filename0,imgPreview.src)
			break;
		}
	}

    // BI 提前公共方法，供BI设计器调用
    function getPageCode() {
        //网页重构
        let stylestr="";
        let htmlstr="";
        //清除无效图层(拖拽产生的div)
        let divs=htmlPreview.getElementsByTagName("div");

        for (let i=divs.length-1;i>=0 ;i-- ){
            let classname0=divs[i].className;
            if (classname0=="" || classname0.indexOf("dragresize")>-1){
                divs[i].parentNode.removeChild(divs[i])
            }
        }

        divs=htmlPreview.getElementsByTagName("div");
        for (let i=0;i<divs.length ;i++ ){
            let item=divs[i];
            let classname0=item.id
            let widget_name=item.getAttribute("widget_name"); // BI 组件类型相关属性处理
            let widget_title=item.getAttribute("widget_title"); // BI 组件类型相关属性处理
            let widget_attr="";
            if(widget_name){
                widget_attr +=" widget_name='"+widget_name+"' "; // BI 组件类型相关属性处理
            }
            if(widget_title){
                widget_attr +=" widget_title='"+widget_title+"' "; // BI 组件类型相关属性处理
            }
            stylestr+="."+classname0+"{"+item.getAttribute("style")+"}\n";
            htmlstr+="<div class='"+classname0+"' "+widget_attr+">"+item.innerHTML+"</div>\n";
        }
        let pageCode=webTemplate.replace(/\{titleStr\}/gi,fileName.innerHTML.replace(".svg","")).replace(/\{styleStr\}/gi,stylestr).replace(/\{htmlStr\}/gi,htmlstr)
        pageCode=pageCode.replace(/root0/gi,"")
        return pageCode;
    }
	//缩放
	function zoom(scale){
		let oldRate=zoomrate.value;
		let newRate="";
		oldRate=parseInt(oldRate.replace("%",""))
		newRate=parseInt(oldRate+scale*100)
		if (newRate<10){
			newRate=10
		}
		if (newRate>200){
			newRate=200
		}
		let w=svgwidth;
		let h=svgheight;
		console.log(w,h)
		let w0=parseInt(w)*newRate/100
		let h0=parseInt(h)*newRate/100

		svgroot.style.width=w0+"px"
		svgroot.style.height=h0+"px"
		zoomrate.value=newRate+"%";
	}

	//导入本地svg文件
	fileUpload.onchange=function(e) {
		let files = e.target.files || e.dataTransfer.files
		if (!files.length) return
		handleSvg(files[0]);
		document.getElementById('svgView').click();
		e.target.value = "";
		svgPreview.innerHTML = "";
		imgPreview.src = "";
		htmlPreview.innerHTML = "";
		zoomrate.value="100%"
		level=0;
		//阻止冒泡
		e.stopPropagation();
	};

	function handleSvg(file) {
        window.$bus.$emit("busUploadDesignerFile",null); //BI  设计图文件上传完成后，显示相关工具按钮
		const reader = new FileReader()
		fileName.innerHTML=file.name;
		let fileType=file.type
		console.log(fileType)
		reader.readAsText(file)
		reader.onload = (e) => {
			let contentStr= e.target.result;
			htmlPreview.innerHTML = "";
			nav.innerHTML = "";
			if (fileType=="application/json")	{//json文件
				let data=jsontoSvg(JSON.parse(contentStr))
				 if (data["isStandard"]==false) {
					 alert("json格式错误！请导入正确的Json文件！")
					 return
				 }else{
					document.getElementById('svgPreview').innerHTML =data["svgCode"].innerHTML;
					contentStr=data["svgCode"].innerHTML;
					data=null;
				 }
			}else if(fileType=="image/svg+xml"){
				document.getElementById('svgPreview').innerHTML =contentStr;
			}
			svgroot=document.getElementById('svgPreview').getElementsByTagName("svg")[0]
			svgwidth = svgroot.getBoundingClientRect().width;
			svgheight= svgroot.getBoundingClientRect().height;
			layerIndex=0;
			init(document.getElementById('svgPreview').getElementsByTagName("svg"), "root");
            setTimeout(() => { //BI  延迟处理，否则在解析成网页时，top取值有点问题
                previewPage()
                previewPic(contentStr);
                window.$bus.$emit("busUploadDesignerFile",file.name); //BI  设计图文件上传完成后，显示相关工具按钮
            },500);
		};
	};
	//效果图预览
	function previewPic(svgStr){
		svgStr=svgStr.replace(/<rect id="tempSel" .*?\/rect>/ig,"")
		//效果图预览
			var result0 = svgToPng(svgStr, 0, "transparent").then((data) => {
				document.getElementById('imgPreview').src = data;
			}, (err) => {
				console.log(err)
			});
	};
	function previewPage(){
		htmlPreview.innerHTML=""
		createPage()
	};
	//生成JSON
	function svgtoJson(svg){
		let jsonData={};
		let nodes=svgroot.getElementsByTagName("*");
		jsonData.tagName=svgroot.tagName;
		jsonData.docid=svgroot.getAttribute("docid");
		jsonData.parentid=svgroot.getAttribute("parentid")	;
		let svgAttribs=svgroot.attributes;
		let attribute0={};
		for (let i=0;i<svgAttribs.length ;i++ ){
			let name0=svgAttribs[i].name;
			let value0=svgAttribs[i].value;
			if (name0!="docid" && name0!="parentid"){
				if (value0!=""){
					attribute0[name0]=value0;
				}
			}
		}
		jsonData.attrib=attribute0;
		jsonData.isStandard=true;//标准格式标志
		jsonData.child=[];

		//生成网页节点
		for (let i=0;i<nodes.length ;i++ )	{
			let o=nodes[i];
			let tagname1=o.tagName;
			let docid1= o.getAttribute("docid");
			let parentid1=o.getAttribute("parentid");
			let attribute1={}
			for (let i=0;i<o.attributes.length ;i++ ){
				if (o.attributes[i].name!="docid" && o.attributes[i].name!="parentid"){
					if (o.attributes[i].value!=""){
						attribute1[o.attributes[i].name]=o.attributes[i].value
					}
				}
			}
			let content1=""
			if (o.tagName == "tspan" ){
				let subTSPAN=o.getElementsByTagName("*");
				if (subTSPAN.length==0){
					content1=o.value || o.text || o.textContent;
				}
			}
			jsonData.child.push({tagName:tagname1,docid:docid1,parentid:parentid1,attrib:attribute1,content:content1})
		};
		return  JSON.stringify(jsonData,null,4);
	};

	function jsontoSvg(jsonData) {//创建svg节点
		let svgDom=document.createElement("div");
		let tagName0="";
		let docid0="";
		let parentid0="";
		let attrib0={};
		let content0="";
		let isStandard0=(jsonData["isStandard"])?jsonData["isStandard"]:false;

		svgDom.innerHTML="";
		tagName0=jsonData["tagName"];
		docid0=jsonData["docid"];
		parentid0=jsonData["parentid"];
		attrib0=jsonData["attrib"];
		//生成svg跟节点
		var svg= document.createElementNS('http://www.w3.org/2000/svg', tagName0);
		svg.setAttribute('docid', docid0);
		svg.setAttribute('parentid', parentid0);
		for (var k in attrib0) {
			svg.setAttribute(k, attrib0[k]);
		};
		svgDom.appendChild(svg);

		//生成svg子节点
		let childNodes=jsonData["child"];
		for (let i=0;i<childNodes.length ;i++ ){
			let childItem=childNodes[i]
			tagName0=childItem["tagName"];
			docid0=childItem["docid"];
			parentid0=childItem["parentid"];
			attrib0=childItem["attrib"];
			content0=childItem["content"];
			let newDom=createSvg(tagName0, docid0,parentid0, attrib0,content0)
			let svgdoms=svgDom.getElementsByTagName("*");
			for (let j=0;j<svgdoms.length ; j++)	{
				let parentDom=svgdoms[j];
				if (newDom.getAttribute("parentid")==parentDom.getAttribute("docid")){
					parentDom.appendChild(newDom);
				}
			};
		};
		return {isStandard:isStandard0,svgCode:svgDom}
	};
	function createSvg(tagName, docid,parentid, attrib,content) {//创建svg节点
		var el = document.createElementNS('http://www.w3.org/2000/svg', tagName);
		el.setAttribute('docid', docid);
		el.setAttribute('parentid', parentid);
		for (var k in attrib) {
			if (attrib[k]!=""){
				el.setAttribute(k, attrib[k]);
			}
		}
		el.innerHTML=content;
		return el;
	}

	//生成网页
	function createPage(){
		let oldRate=parseInt(zoomrate.value)/100
		svgroot.style.width=svgwidth+"px"
		svgroot.style.height=svgheight+"px"
		var nodes=svgroot.getElementsByTagName("*");
		//生成网页节点
		for (let i=0;i<nodes.length ;i++ )	{
			let o=nodes[i];
			let docid0 = o.getAttribute("docid");
			let classname0=docid0
			let parentid0=o.getAttribute("parentid");
			let style0 =(o.getAttribute("isimage") == "true")? buildCssStyle("img", o): buildCssStyle("div", o);//创建节点css样式
			let content0= "";
			if(o.style.display=="none"){continue};//隐藏图层不做输出
			if (o.tagName == "tspan" || o.getAttribute("isimage") == "true") {
				var nodeItem=document.createElement("div");
				nodeItem.id="pic"+classname0;
				nodeItem.className="drsMoveHandle";
				nodeItem.style.cssText=style0;
                let widget_name=o.getAttribute("widget_name"); // BI 组件类型相关属性处理
                let widget_title=o.getAttribute("widget_title"); // BI 组件类型相关属性处理
                if(widget_name && widget_name != ''){
                    nodeItem.setAttribute("widget_name",widget_name); // BI 组件类型相关属性处理
                }
                if(widget_title && widget_title != ''){
                    nodeItem.setAttribute("widget_title",widget_title); // BI 组件类型相关属性处理
                }
				htmlPreview.appendChild(nodeItem)
				//对带有标记isimage=true的节点转图片处理
				if (o.getAttribute("isimage") == "true") {//图片
					//生成样式的背景图片
					svgDom2png(o).then(data => {
						document.getElementById("pic"+classname0).style.background="url("+data["base64Data"]+") no-repeat"
						document.getElementById("pic"+classname0).style.backgroundSize="100% 100%";//支持背景拉伸布满
					});
					//如果父节点标注为切图，就删除当前节点，避免重复切图
					if (isImgChildren(o.parentNode)==true){//是否包含在图片节点下面
						htmlPreview.removeChild(nodeItem);
					};
				}else{//文字
					if (isImgChildren(o)==true||isHideChildren(o)==true){//是否包含在图片节点下面或者父级节点是隐藏的
						htmlPreview.removeChild(nodeItem);//如果节点的父节点被定义为图片则删除该节点（避免无效节点）
					}else{
						nodeItem.id="text"+classname0;
						nodeItem.innerHTML="";
						//避免嵌套tspan重复输出文字
						let subTSPAN=o.getElementsByTagName("*");
						if (subTSPAN.length==0){
							content0=o.value || o.text || o.textContent;
							nodeItem.innerHTML=content0;
						}
					}
				}
			}
		};
		//恢复放大率
		svgroot.style.width=svgwidth*oldRate+"px"
		svgroot.style.height=svgheight*oldRate+"px"
	};
	//判断是否是图片节点下面
	function isImgChildren(node){
		if (node.getAttribute("isimage")=="true") {
			return true
		}else{
			if (node.parentNode&&node.tagName!="svg"){
				return isImgChildren(node.parentNode);
			}else{
				return false
			};
		}
	};
	//判断是否是隐藏节点下面
	function isHideChildren(node){
		if (node.style.display=="none") {
			return true
		}else{
			if (node.parentNode&&node.tagName!="svg"){
				return isHideChildren(node.parentNode);
			}else{
				return false
			};
		}
	};
	function getNodeStyle(obj, attr) {//获取节点所有样式属性集合（包括外联样式和行内样式）obj:节点；attr:样式属性
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
	};

	function getTransformPara(elem){
		var tr =getNodeStyle(elem,"transform")
		console.log("matrix",tr)
		if(tr!="none"){
			var values = tr.split("(")[1].split(")")[0].split(",");
			var a = values[0];
			var b = values[1];
			var c = values[2];
			var d = values[3];
			var e = values[4];
			var f = values[5];
			var scale1 = Math.sqrt(a * a + b * b);
			var scale2 = Math.sqrt(c * c + d * d);
			var angle = Math.atan2(b, a) * (180.0 / Math.PI);
			e = parseFloat(e);
			f = parseFloat(f);
			var radian = -Math.PI/180.0*angle;
			var lastX = Math.cos(radian)*e - Math.sin(radian)*f;
			var LastY = Math.sin(radian)*e + Math.cos(radian)*f;
			return {
				ScaleX: scale1,
				ScaleY: scale2,
				Angle: angle,
				TransX: lastX,
				TransY: LastY,
			};
		}else{
			return {
				ScaleX: 1,
				ScaleY: 1,
				Angle: 0,
				TransX: 0,
				TransY: 0,
			};
		}
	};

	function svgDom2png(svgNode) {//节点转png图片模块
		zoomScale=1;//保证切图原大尺寸
		return new Promise(function (resolve, reject) {
			try {
				var _svgroot =svgroot;
				var maxWidth = svgwidth;
				var maxHeight =svgheight;
				var svgDomInfo =getNodeRect(svgNode);//x,y.width,height
				var cloneDom = svgNode.cloneNode(true);
				cloneDom.id = "clone" + svgNode.id;//重新设置id避免冲突
				let x0 = 0 - svgDomInfo.x;
				let y0 = 0 - svgDomInfo.y;
				let w0 = svgDomInfo.width
				let h0 = svgDomInfo.height;
				console.log(w0,h0)
				if (w0 > maxWidth) {
					x0 = x0 - (w0 - maxWidth) / 2
				}
				if (h0 > maxHeight) {
					y0 = y0 - (h0 - maxHeight) / 2
				};
				cloneDom.setAttribute("transform","translate(" + x0 + " " + y0 + ")")
				if (svgNode.getAttribute("transform")) {
					let transformPara=getTransformPara(svgNode)
					cloneDom.setAttribute("transform-origin","50% 50%")
					let transform_new="rotate("+transformPara.Angle+") scale("+transformPara.ScaleX+" "+transformPara.ScaleY+")  translate(" + x0 + " " + y0 + ")"
					cloneDom.setAttribute("transform", transform_new)
				}

				var nodePos = svgNode.getBoundingClientRect();
				var svgDomCode = (new XMLSerializer()).serializeToString(cloneDom);
				cloneDom = null;//清除内存
				svgDomCode = svgDomCode.replace(/style\=\"stroke: rgb\(43, 118, 179\);\"/gi, "");//替换鼠标移上去产生的样式

				var w = nodePos.width
				if (w > maxWidth) {
					w = maxWidth
				}
				var h = nodePos.height
				if (h > maxHeight) {
					h = maxHeight
				}
				w=w/zoomScale;
				h=h/zoomScale;

				if (w==0){
					w=1
				}
				if (h==0){
					h=1
				}

				//defs样式局部引进，根据节点属性按需引进外部defs样式，比较小
				var defs = "<defs>";
				defs +=buildDefs(svgNode, "")
				defs += "</defs>"

				var canvas = document.createElement("canvas");
				canvas.width =w;
				canvas.height = h;
				var ctx = canvas.getContext("2d");
				svgDomCode = '<svg width="' + w + 'px"  height="' + h + 'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n ' + defs +'\n'+ svgDomCode +'\n'+ '</svg>'
				let htmlSvg = new Blob([svgDomCode], {
				type: "image/svg+xml;charset=utf-8"
				});
				var domUrl = window.URL || window.webkitURL || window;
				if (!domUrl) {
					throw new Error("(browser doesnt support this)")
				}
				var url = domUrl.createObjectURL(htmlSvg);
				var img = new Image();
				img.onload = function () {
					ctx.drawImage(this, 0, 0);
					let data0 = { base64Data:canvas.toDataURL(), image:{width:w,height:h},svgDomCode: svgDomCode }
					svgDomCode = ""
					base64Data = "";
					//释放缓存
					domUrl.revokeObjectURL(url);
					resolve(data0);
				};
				img.src = url;
				// 图片出处
				img.onerror = function (e) {
					resolve({ base64Data: "", svgDomCode: svgDomCode });//输出代码方便外部验证
					console.error('图片生成出错了', svgNode.getAttribute("docid"), svgDomCode);
				};
			} catch (err) {
				reject('svg转图片失败，错误原因：' + err);
			}
		});
	};

	//设置透明色
	function setValue(obj){
		obj.previousSibling.value="transparent";
		selectNode.setAttribute(obj.previousSibling.id,"transparent");
		previewPage();
		previewPic(svgPreview.innerHTML);
	};

	function download1(name, data) {//下载内容
		var a = document.createElement("a"), //创建a标签
		e = document.createEvent("MouseEvents"); //创建鼠标事件对象
		e.initEvent("click", false, false); //初始化事件对象
		a.href =data;  //设置下载地址
		a.download = name;  //设置下载文件名
		a.dispatchEvent(e); //给指定的元素，执行事件click事件
		a=null;
	};
	function download2(filename,content) {
		var eleLink = document.createElement('a');
		eleLink.download = filename;
		eleLink.style.display = 'none';
		var blob = new Blob([content]);
		eleLink.href =  window.URL.createObjectURL(blob);
		document.body.appendChild(eleLink);
		eleLink.click();
		document.body.removeChild(eleLink);
	};

	function bulidNav(navDom, obj,ifSHOW) {	//构建左边节点导航条
		var ul = document.createElement("ul");
		ul.style.display="none"
		if(ifSHOW){
			ul.style.display="block"
		};
		for (var i = 0; i < obj.length; i++) {
			var o = obj[i];
			if (o.tagName=="defs" || o.tagName=="style"|| o.tagName=="mask" || o.tagName=="title"){
				continue
			}
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.href="javascript:;"
			a.setAttribute("data-docid",o.getAttribute("docid"))
			a.setAttribute("data-parentid",o.getAttribute("parentid"))

			var icon=document.createElement("i");
			var textNode=document.createElement("span");
			var toolbar=document.createElement("span");
			toolbar.className="navtoolbar"
			 textNode.innerHTML =o.tagName+" "+o.id;
			 textNode.className="itemtext";

			 //是否切图
			 let classType1="nav_icon slice";
			 let isimage=o.getAttribute("isimage")
			 let status1=(isimage=="true")?"1":"0";
			 if (status1=="1") {
				 classType1="nav_icon img";
			 }

			//是否锁定图层
			 let classType2="nav_icon unlock";
			let lock=o.getAttribute("data-lock");
			 let status2=(lock=="true")?"1":"0";
			if (status2=="1") {
				 classType2="nav_icon lock";
			 }

			//是否隐藏图层
			 let classType3="nav_icon showlayer";
			 let display=o.style.display;
			 let status3=(display=="none")?"1":"0";
			 if (status3=="1") {
				 classType3="nav_icon hidelayer";
			 }

			 let fixFlag=false;
			 if (status1=="1" ||status2=="1"||status3=="1"){
				fixFlag=true
			 }
			let subbar1=document.createElement("i");
			subbar1.title="切图";
			subbar1.setAttribute("data-status",status1);
			subbar1.className=classType1;
			subbar1.onclick=function(){
				let docid0=this.parentNode.parentNode.getAttribute("data-docid")
				toImage(this,docid0)
                hideDmenu() // BI 收起下载选项弹窗
			};
			toolbar.appendChild(subbar1);

			let subbar2=document.createElement("i");
			subbar2.title="图层锁定";
			subbar2.setAttribute("data-status",status2);
			subbar2.className=classType2;
			subbar2.onclick=function(){
				let docid0=this.parentNode.parentNode.getAttribute("data-docid")
				Lock(this,docid0)
                hideDmenu() // BI 收起下载选项弹窗
			};
			toolbar.appendChild(subbar2);

			let subbar3=document.createElement("i");
			subbar3.title="隐藏图层";
			subbar3.setAttribute("data-status",status3);
			subbar3.className=classType3;
			subbar3.onclick=function(){
				let docid0=this.parentNode.parentNode.getAttribute("data-docid")
				showLayer(this,docid0)
                hideDmenu() // BI 收起下载选项弹窗
			};
			toolbar.appendChild(subbar3);

			if (fixFlag==true){
				textNode.style.marginRight="85px";
				toolbar.style.display="block";
			}else{
				textNode.style.marginRight="5px";
				textNode.removeAttribute("style");
				toolbar.removeAttribute("style");
			};


			 if (o.tagName=="tspan") {
				 textNode.innerHTML =o.textContent;
			 };

			 if (o.getAttribute("isimage")||o.tagName=="use"||o.tagName=="image") {
				 icon.className="nav_icon picture"
			 };
			if (o.tagName=="text" || o.tagName=="tspan"){
				 icon.className="nav_icon text"
				  textNode.innerHTML =o.tagName+" "+o.textContent;
			};
			if (o.tagName=="path"|| o.tagName=="polyline"|| o.tagName=="polygon" || o.tagName=="line"  || o.tagName=="rect"|| o.tagName=="circle"){
				 icon.className="nav_icon pen"
			};
			 a.onclick=function(e){
				 showTAB(1,'svgPreview');//自动切换到设计模式，保证当前操作是设计模式
				//设置选中状态，添加class=on
				let urllinks=nav.getElementsByTagName("a");
				for (let k=0;k<urllinks.length ; k++){
					urllinks[k].removeAttribute("class")
					if (urllinks[k]==this){
						urllinks[k].className="on";
					}
				}
				//清空属性面板内容
				attributesList.innerHTML="";
				let selNode=getSvgNodeBydocid(this.getAttribute("data-docid"));

				selNode.scrollIntoView();//快速定位
				getSelectNodeAttrib(selNode);
				buildSelRect(selNode);
				//生成缩率图
				let selNode0=selNode
				if (selNode.tagName=="tspan"){
					selNode0=selNode.parentNode
				}
                let id = selNode.id;  // BI 增加图层ID属性
				svgDom2png(selNode0).then(data => {
					let maxW=260;
					let maxH=100;
					let whRate0=maxW/	maxH;
					let whRate=data.image.width/data.image.height;
					if (whRate>=whRate0){//宽形图片
						if(data.image.width<=maxW){//图片宽小于最大值
							imgView.width=data.image.width
							imgView.height=data.image.height
						}else{
							let scaleRate=maxW/data.image.width
							imgView.width=maxW
							imgView.height=data.image.height*scaleRate
						}
					}else{
						if(data.image.height<=maxH){//图片高度小于最大值
							imgView.width=data.image.width
							imgView.height=data.image.height
						}else{
							let scaleRate=maxH/data.image.height
							imgView.height=maxH
							imgView.width=data.image.width*scaleRate
						}
					}
					//保证最小预览尺寸
					if (imgView.height<1)	{
						imgView.height=1
					}
					if (imgView.width<1)	{
						imgView.width=1
					}
					 imgView.src=data.base64Data;
                    imgView.setAttribute("layerId",id);  // BI 增加图层ID属性
					nodeCode.value=data.svgDomCode;
				});
				//阻止冒泡
				event.stopPropagation();
			};

			a.appendChild(icon);
			a.appendChild( textNode);
			a.appendChild(toolbar);
			li.appendChild(a);
			ul.appendChild(li);

			if (!o.getAttribute("ignore")) {

			};

			//递归子节点
			if (o.children && o.children.length > 0) {//对当前元素子节点递归处理(如果当前节点是图片，就不遍历子节点)
				level++;//有子节点
				icon.className="nav_icon folder0";
				icon.onclick=function(){
					expand(this.parentNode,this.parentNode.getAttribute("data-docid"))
                    hideDmenu() // BI 收起下载选项弹窗
				}
				let subObjs = o.children;
				ifSHOW=false;
				if (level<defaultLevel)	{
					ifSHOW=true;
				}
				bulidNav(li, subObjs,ifSHOW);
			};
		};
		navDom.appendChild(ul)
	};
	function reBuildSvg(obj, node_id) {	//对svg进行重构
		for (var i = 0; i < obj.length; i++) {
			var o = obj[i];
			if (o.tagName=="defs"){
			}

			//class样式外部样式转行内样式
			let attributes0 =o.attributes;
			let outAttributes={}
			let outClassName=""

			//清除字间隔小于0的属性
			if (o.getAttribute("letter-spacing")&&o.getAttribute("letter-spacing")<0)	{
				o.removeAttribute("letter-spacing")
			};

			for (k = 0; k < attributes0.length; k++) {
				let key = attributes0[k];
				if (key.name=="class"){
					outClassName=key.value;
					classList=outClassName.split(" ")
					for (let n=0; n<classList.length; n++){
						let className0=classList[n];
						if (className0!=""){//根据classname转成行内样式
							outAttributes=getDomReference(o,className0);
						};
					};
					o.removeAttribute("class");
					break;
				}
			};
			o.setAttribute("title", o.id);//图层名称备注
			o.setAttribute("docid", node_id + i);
			let parentid = o.parentNode.getAttribute("docid");
			o.setAttribute("parentid", parentid);
			if(o.getAttribute("ignore")){
				o.removeAttribute("ignore");
			};

			//重构transform,转为transfrom="matrix(1, 0, 0, 1, 41, 20)"的形式
			if (getNodeStyle(o, "transform") != "none") {
				let transform =getNodeStyle(o, "transform")
				o.setAttribute("transform", transform)
			}

			//给需要转图片格式的节点添加标记isimage=true
			let dom_id = o.id
			if (dom_id.indexOf("-img-") > -1) {
				o.setAttribute("isimage", "true")
			};

			//给不需要转html代码的节点添加标记ignore=true
			if ((o.getBoundingClientRect().width == 0 && o.getBoundingClientRect().height == 0) || o.tagName == "defs" || o.tagName == "style" || o.tagName == "clipPath") {
				o.setAttribute("ignore", "true")
			};
			if (obj[i].children && obj[i].children.length > 0) {//对子节点进行递归
				let subObjs = obj[i].children
				reBuildSvg(obj[i].children, node_id + i + "_");
			}
		}
	};
	function getDomReference(obj,className){//根据clssName获取SVG 获取外部引用属性的内容
		let reference={};
		var Mysheet=document.styleSheets[document.styleSheets.length-1];
		var MycssRules = Mysheet.cssRules || Mysheet.rules;
		var RuleLen = MycssRules.length;
		if (className=="")	{
			return
		};

		for (let i = 0; i < RuleLen; i++) {
			let cssName=MycssRules[i].selectorText;// .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24或者. .cls-22的方式
			let cssText=MycssRules[i].style.cssText;
			let classNameList
			cssName=cssName.replace(/\./gi,"").replace(/\,/gi," ");//格式化字符串

				classNameList=cssName.split(" ")
				for (let n=0; n<classNameList.length; n++){
					let itemName=classNameList[n];
					itemName=itemName.replace(/\n\r/gi,"").replace(/^\s+|\s+$/gi,"")
					if (itemName==className){
						let values=cssText.split(";")
						for (let j=0;j<values.length ;j++ ){
							if(values[j]!=""){
								let attribName=values[j].split(":")[0]
								let attribValue=values[j].split(":")[1]
								attribName=attribName.replace(/\n\r/gi,"").replace(/^\s+|\s+$/gi,"")
								attribValue=attribValue.replace(/\n\r/gi,"").replace(/^\s+|\s+$/gi,"").replace(/\"/gi,"")
								reference[attribName]=attribValue;
								//需要放在style中处理的属性要做特殊处理
								if (attribName=="isolation"||attribName=="mix-blend-mode")	{
									obj.style[attribName]=attribValue;
								}else{
									obj.setAttribute(attribName,attribValue);
								};
							};
						};
						break;
					}
				};

		};
		return reference
	};
	function buildDefs(obj, defStr) {
		let sourceId =getDefsItemId(obj);//获取本节点属性
		if (sourceId.length>0) {
			for (let i=0;i< sourceId.length;i++ ){
				defStr +=getDefs(sourceId[i]);//获取本节点属性
			}
		};

		if (obj.children && obj.children.length > 0) {
			for (let n = 0; n < obj.children.length; n++) {
				let subObj = obj.children[n];
				defStr = buildDefs(subObj, defStr)
			};
		};
		return defStr
	};
	function getDefs(importId) {//重新构建节点的defs
		var defsStr = "";
		let defsAll =svgroot.getElementsByTagName("defs")[0];
		var defsAllChildren = defsAll.children;
		for (var i = 0; i < defsAllChildren.length; i++) {
			let item = defsAllChildren[i]
			if (item.id && item.id == importId) {
				defsStr = item.outerHTML
				break
			}
		};
		return defsStr;
	};

	function getDefsItemId(dom) {//获取节点的外部资源id
		let importIdArr =[];
		let attributes = dom.attributes;
		for (k = 0; k < attributes.length; k++) {
			let attribValue = attributes[k].value;
			let attribName = attributes[k].name;
			if ((attribName == "filter" || attribName == "fill" ||attribName == "stroke"||attribName == "clip-path")&& attribValue.indexOf("url(#") > -1) {
				console.log(attribName,attribValue)
				startPos = attribValue.indexOf("#")
				importId = attribValue.substring(startPos + 1)
				importId = importId.replace(")", "")
				importIdArr.push(importId);
			}
			 if (attribName == "xlink:href") {
				console.log(attribName,attribValue)
				startPos = attribValue.indexOf("#")
				importId = attribValue.substring(startPos + 1);
				importIdArr.push(importId);
			}

		};
		return importIdArr;
	};

	function buildCssStyle(domType, obj) {//创建html节点样式
		let scrollLeft=Math.round(container.scrollLeft);
		let scrollTop= Math.round(container.scrollTop);
		let modifyTOP =  Math.round(container.getBoundingClientRect().top);
		let modifyLEFT =  Math.round(container.getBoundingClientRect().left);

		let style = {
			"z-index": layerIndex,
			"left": (obj.getBoundingClientRect()["left"]+scrollLeft < 0) ? "0px" : Math.round(obj.getBoundingClientRect()["left"]+scrollLeft) + "px",
			"top": (obj.getBoundingClientRect()["top"]+scrollTop < 0) ? "0px" : Math.round(obj.getBoundingClientRect()["top"]+scrollTop) + "px",
			"width": (Math.round(obj.getBoundingClientRect()["width"]) <svgwidth) ? Math.round(obj.getBoundingClientRect()["width"]) + "px" : svgwidth+ "px",
			"height": (Math.round(obj.getBoundingClientRect()["height"])>0)?Math.round(obj.getBoundingClientRect()["height"]) + "px":"1px",
			"opacity": getNodeStyle(obj, "opacity"),
			"color": getNodeStyle(obj, "fill"),
			"font-size": getNodeStyle(obj, "font-size"),
			"font-weight": getNodeStyle(obj, "font-weight"),
			"font-family": getNodeStyle(obj, "font-family"),
			"border-radius": getNodeStyle(obj, "rx") || getNodeStyle(obj, "ry"),
		};
		//修正绝对定位的left\top数值(去掉外容器上边距和左边距)
		style["top"] = (Math.round(style["top"].replace("px", "")) - modifyTOP) + "px";
		style["left"] = (Math.round(style["left"].replace("px", "")) - modifyLEFT) + "px";

		if ((obj.tagName == "rect" || obj.tagName == "circle") && obj.getAttribute("fill")) {
			style["background-color"] = obj.getAttribute("fill");
		}

		if ((obj.tagName == "rect" || obj.tagName == "circle") && !obj.getAttribute("fill")) {
			style["background-color"] = obj.parentNode.getAttribute("fill");
		}

		if ((obj.tagName == "rect" || obj.tagName == "circle") && obj.getAttribute("stroke")) {
			style["border-width"] = getNodeStyle(obj, "stroke-width");
			style["border-style"] = "solid";
			style["border-color"] = getNodeStyle(obj, "stroke");
		}


		let cssText = "position:absolute;";
		if (domType == "img") {//图片
			if (style["width"]=="0px"){
				style["width"]=="1px"
			}
			if (style["height"]=="0px"){
				style["height"]=="1px"
			}
			cssText += "z-index:" + style["z-index"] + ";"
			cssText += "left:" + style["left"] + ";"
			cssText += "top:" + style["top"] + ";"
			cssText += "width:" + style["width"] + ";"
			cssText += "height:" + style["height"] + ";"
		} else {//div
			for (key in style) {
				if (style[key] != "auto" && style[key] != "none") {
					cssText += key + ":" + style[key] + ";"
				}
			}
		}
		return cssText
	};

	function getNodeStyle(obj, attr) {//获取节点所有样式属性集合（包括外联样式和行内样式）obj:节点；attr:样式属性
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
	};

	function getSvgNodeBydocid(docid){
		let doms=document.getElementsByTagName("*")
		for (let i=0;i<doms.length ;i++ ){
			if (doms[i].getAttribute("docid")==docid){
				selectNode=doms[i];//设置为当前节点
				return doms[i]
			}
		}
	};

	function getSelectNodeAttrib(node){//创建属性面板显示选中节点的属性
		selectNode=node;//设置为当前节点
		let isdisabled=node.getAttribute("data-lock");//是否锁定
		let attributes=node.attributes
		for (let i=0;i<attributes.length ;i++ ){
			let itemRow=document.createElement("div");
			let itemColum1=document.createElement("div");
			let itemColum2=document.createElement("div");
			itemRow.className="row"
			itemColum1.className="colum-fix"
			itemColum2.className="colum-auto"
			let attribName=attributes[i].name;
			let attribValue=attributes[i].value;
			//不显示的属性
			if (attribName=="docid"||attribName=="parentid"||attribName=="widget_name"||attribName=="widget_title"){ //BI  不显示widget_name和widget_title属性
				continue;
			}
			itemColum1.innerHTML=(svgAttribMap[attribName]!=null)?svgAttribMap[attribName]:attribName;
			itemRow.appendChild(itemColum1);

			let itemInput=document.createElement("input");
			itemInput.type="text";
			itemInput.value=attribValue;

			if (attribName=="id" ||attribName=="docid" || attribName=="parentid"){
				itemInput.style.color="#999";
				itemInput.disabled=true;
			}
			if (attribName=="fill" || attribName=="stroke"){
				 itemInput=document.createElement("input");
				 itemInput.className="colorSelect";
				itemInput.type="color";
			}
			if (attribName=="stroke-width"){
				 itemInput=document.createElement("input");
				itemInput.type="number";
				attribValue=attribValue.replace("px","").replace("rem","")
				itemInput.value=attribValue;
				console.log("stroke-width",itemInput.value)
				itemInput.max=5;
				itemInput.min=0;
				itemInput.step=0.1;
				itemInput.title=itemInput.value;
			}
			if (attribName=="opacity"){
				 itemInput=document.createElement("input");
				itemInput.type="range";
				itemInput.value=attribValue;
				itemInput.max=1;
				itemInput.min=0;
				itemInput.step=0.01;
				itemInput.title=itemInput.value;
			}

			if (attribName=="d" || attribName=="points"){
				 itemInput=document.createElement("textarea");
			}
			if (isdisabled=="true")	{//是否可编辑
				itemInput.disabled=true;
			}
			itemInput.id=attribName;
			itemInput.value=attribValue;
			itemInput.title=itemInput.value;
			itemInput.oninput=function(e){
				showTAB(1,'svgPreview');//自动切换到设计模式，保证当前操作是设计模式
				selectNode.setAttribute(attribName,this.value);
				itemInput.title=itemInput.value;
				previewPage();
				previewPic(svgPreview.innerHTML);
			}
			itemColum2.appendChild(itemInput);
			//如果是颜色，则添加透明按钮
			if (attribName=="fill" || attribName=="stroke"){
				let link=document.createElement("a")
				link.innerHTML="透明"
				link.onclick=function (){
					setValue(this);
                    hideDmenu() // BI 收起下载选项弹窗
				}
				itemColum2.appendChild(link);
			}

			itemRow.appendChild(itemColum2);
			attributesList.appendChild(itemRow)
		}
		if (node.tagName=="tspan"){
			let content=node.textContent;
			content=content.replace(/(^\s*)|(\s*$)/g,"");//去掉左右空格
			let itemRow=document.createElement("div");
			let itemColum1=document.createElement("div");
			let itemColum2=document.createElement("div");
			itemRow.className="row"
			itemColum1.className="colum-fix"
			itemColum2.className="colum-auto";
			itemColum1.innerHTML="内容"
			let itemInput=document.createElement("textarea");
			itemInput.value=content;
			itemInput.oninput=function(e){
				 showTAB(1,'svgPreview');//自动切换到设计模式，保证当前操作是设计模式
				selectNode.textContent=this.value;
				itemInput.title=itemInput.value;
				previewPage()
				previewPic(svgPreview.innerHTML);
			}
			itemColum2.appendChild(itemInput);
			itemRow.appendChild(itemColum1);
			itemRow.appendChild(itemColum2);
			attributesList.appendChild(itemRow)
		}
        window.$bus.$emit("busSelectNodeAttrib" , attributes); //BI  设置组件类型属性
	};

	function buildSelRect(node){
		let selRect;
		let zoomScale=zoomrate.value.replace("%","")
		zoomScale=parseInt(zoomScale)/100;
		console.log("scale",zoomScale)
		let left=node.getBoundingClientRect().x-svgroot.getBoundingClientRect().x;
		let top=node.getBoundingClientRect().y-svgroot.getBoundingClientRect().y;
		let w=getNodeRect(node).width;
		let h=getNodeRect(node).height;

		left=left/zoomScale;
		top=top/zoomScale;
		w=w//*zoomScale;
		h=h//*zoomScale;
		if (w==0){
			w=1
		}
		if (h==0){
			h=1
		}

		if(document.getElementById("tempSel")){
			selRect=document.getElementById("tempSel");
		}else{
			selRect = document.createElementNS("http://www.w3.org/2000/svg","rect");
			selRect.id="tempSel";
		};

		selRect.setAttribute("x",left);
		selRect.setAttribute("y",top);
		selRect.setAttribute("width",w);
		selRect.setAttribute("height",h);
		selRect.setAttribute("fill","rgba(255,0,0,0.2)");
		selRect.setAttribute("stroke","#f00");
		selRect.setAttribute("stroke-width","2");
		svgroot.appendChild(selRect )
	};

	function getNodeAttribute(obj) {//获取节点属性
		let attributes0 = obj.attributes;
		let attributes = {};
		for (k = 0; k < attributes0.length; k++) {
			let key = attributes0[k];
			attributes[key.name] = key.value;//o.getAttribute(key)
		}
		return attributes;
	};

	function getNodeRect(obj) {//获取节点位置信息和尺寸转为css样式
		let pos = obj.getBBox();
		return pos;//x,y,width,height
	};

	function init(svgChildren, id) {//初始化
		document.getElementById('htmlPreview').innerHTML = "";
		let style=null;
		if (svgroot.getElementsByTagName("defs").length > 0) {
			defs =svgroot.getElementsByTagName("defs")[0].outerHTML;
		}
		//添加到网页head节点中
		if (svgroot.getElementsByTagName("style").length > 0) {
			style=svgroot.getElementsByTagName("style")[0];
			style.id="svgStyle"
			document.getElementsByTagName("head")[0].appendChild(style);
		}
		//重构svg代码
		reBuildSvg(svgChildren, id);
		//构建左边导航
		bulidNav(nav,svgChildren,true);
		svgInit("svgPreview")
	};

	/**
	* svg预览效果图生成模块
	* 参数： svgText为svg源代码
	* 参数：margin生成效果图四周空白距离
	* 参数：fill为生成效果图背景色，默认为trasparent
	*/
	var svgToPng = function (svgText, margin, fill) {
		return new Promise(function (resolve, reject) {
			try {
				var domUrl = window.URL || window.webkitURL || window;
				if (!domUrl) {
					throw new Error("(browser doesnt support this)")
				}
				var match = svgText.match(/height=\"(\d+)/m);
				var height = match && match[1] ? parseInt(match[1], 10) : 200;
				var match0 = svgText.match(/width=\"(\d+)/m);
				var width = match0 && match0[1] ? parseInt(match0[1], 10) : 200;
				margin = margin || 0;
				if (!svgText.match(/xmlns=\"/mi)) {
					svgText = svgText.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
				}
				var canvas = document.createElement("canvas");
				canvas.width = width + margin * 2;
				canvas.height = height + margin * 2;
				var ctx = canvas.getContext("2d");
				var svg = new Blob([svgText], {
					type: "image/svg+xml;charset=utf-8"
				});
				var url = domUrl.createObjectURL(svg);
				var img = new Image;
				img.onload = function () {
					ctx.drawImage(this, margin, margin);
					if (fill) {
						var styled = document.createElement("canvas");
						styled.width = canvas.width;
						styled.height = canvas.height;
						var styledCtx = styled.getContext("2d");
						styledCtx.save();
						styledCtx.fillStyle = fill;
						styledCtx.fillRect(0, 0, canvas.width, canvas.height);
						styledCtx.strokeRect(0, 0, canvas.width, canvas.height);
						styledCtx.restore();
						styledCtx.drawImage(canvas, 0, 0);
						canvas = styled;
					}
					//释放缓存
					domUrl.revokeObjectURL(url);
					resolve(canvas.toDataURL());
				};
				img.src = url;
			} catch (err) {
				reject('failed to convert svg to png ' + err);
			}
		});
	};

	//头部的tab切换功能
	function showTAB(btnIndex, tabId) {
		var tabs = ["svgPreview", "imgPreview", "htmlPreview"]
		var btn = document.getElementById("header").getElementsByTagName("button")
		for (var i = 0; i < tabs.length; i++) {
			document.getElementById(tabs[i]).style.display = "none";
			let oldClassName=btn[i + 1].className
			btn[i + 1].className = oldClassName.replace(" on","")
			if (tabs[i] == tabId) {
				document.getElementById(tabId).style.display = "block";
				btn[btnIndex].className =oldClassName.replace(" on","")+" on"
				var title = "效果图"
				switch (tabId) {
					case "svgPreview":
						title = "设计"
						break;
					case "imgPreview":
						title = "效果图";
						break;
					case "htmlPreview":
						title = "网页";
						break;
					default:
						title = "效果图"
				};
				document.getElementById("tabType").innerHTML = title;
			}
		}
	};

	//svg事件初始化处理
	function svgInit(containerID) {
		var container = document.getElementById(containerID);
		container.onselectstart = function () { return false };//禁止鼠标选择文字
		container.onmousedown = function (e) {
			e = e || event;
			let targetObj = e.srcElement || e.target;
			if (targetObj.tagName=="rect"&&targetObj.id=="tempSel"){
				targetObj.parentNode.removeChild(targetObj);
			};
			if (targetObj.tagName == "HTML" || targetObj.tagName == "BODY" ||targetObj.tagName == "SVG" ||targetObj.tagName == "DIV") {
				return false
			};

			if (event.button == 0) {
				let docid=targetObj.getAttribute("docid");
				let urllinks=nav.getElementsByTagName("a");
				for (let k=0;k<urllinks.length ; k++){
					urllinks[k].removeAttribute("class");
					if (urllinks[k].getAttribute("data-docid")==docid){
						urllinks[k].click();
						findParent(urllinks[k])	;
						urllinks[k].scrollIntoView();//快速定位
					}
				};
			}
		};

		//onmouseover事件
		container.onmouseover=function(e){
			e=e||event;
			let targetObj=e.srcElement||e.target;
		};
		//onmouseout事件
		container.onmouseout=function(e){
			e=e||event;
			let targetObj=e.srcElement||e.target;
		};
	};

	//图层是否转为切片图
	function toImage(obj,docid){
		 showTAB(1,'svgPreview');//自动切换到设计模式，保证当前操作是设计模式
		let textNode=obj.parentNode.previousSibling;
		//阻止冒泡
		event.stopPropagation();
		let selNode=getSvgNodeBydocid(docid);
		if (selNode.getAttribute("isimage")){
			selNode.removeAttribute("isimage");
			obj.className="nav_icon slice" ;
			obj.setAttribute("data-status","0")

		}else{
			selNode.setAttribute("isimage",true)
			if (selNode.getAttribute("ignore")){
				selNode.removeAttribute("ignore");
			}
			obj.className="nav_icon img" ;
			obj.setAttribute("data-status","1")
		};

		if (toolbarFix(obj)==true){
			textNode.style.marginRight="85px";
			obj.parentNode.style.display="block";
		}else{
			textNode.style.marginRight="5px";
			textNode.removeAttribute("style");
			obj.parentNode.removeAttribute("style");
		};
		previewPage()
		previewPic(svgPreview.innerHTML);
	}
	//是否锁定图层
	function Lock(obj,docid){
		 showTAB(1,'svgPreview');//自动切换到设计模式，保证当前操作是设计模式
		//阻止冒泡
		event.stopPropagation();
		let selNode=getSvgNodeBydocid(docid);
		if (selNode.getAttribute("data-lock")){
			selNode.removeAttribute("data-lock");
			obj.className="nav_icon unlock"
			obj.setAttribute("data-status","0")
		}else{
			selNode.setAttribute("data-lock",true)
			obj.className="nav_icon lock"
			obj.setAttribute("data-status","1")
		};
		let textNode=obj.parentNode.previousSibling;
		if (toolbarFix(obj)==true){
			textNode.style.marginRight="85px";
			obj.parentNode.style.display="block";
		}else{
			textNode.style.marginRight="5px";
			textNode.removeAttribute("style");
			obj.parentNode.removeAttribute("style");
		};
		previewPage()
		previewPic(svgPreview.innerHTML);
	};
	//是否隐藏图层
	function showLayer(obj,docid){
		 showTAB(1,'svgPreview');//自动切换到设计模式，保证当前操作是设计模式
		//阻止冒泡
		event.stopPropagation();
		let selNode=getSvgNodeBydocid(docid);
		if(selNode.style.display!="none"){
			selNode.style.display="none";
			obj.className="nav_icon hidelayer" ;
			obj.setAttribute("data-status","1")
		}else{
			selNode.style.display="block";
			obj.className="nav_icon showlayer" ;
			obj.setAttribute("data-status","0")
		};

		let textNode=obj.parentNode.previousSibling;
		if (toolbarFix(obj)==true){
			textNode.style.marginRight="85px";
			obj.parentNode.style.display="block";
		}else{
			textNode.style.marginRight="5px";
			textNode.removeAttribute("style");
			obj.parentNode.removeAttribute("style");
		}
		previewPage()
		previewPic(svgPreview.innerHTML);
	};

	//左边导航收起、展开
	function expand(Obj,docid){
		//alert(docid)
		let targetObj=Obj.nextSibling;
		targetObj.style.display=(targetObj.style.display!="none")?"none":"block"
		//阻止冒泡
		event.stopPropagation();
	}

	function toolbarFix(obj){
		let textNode=obj.parentNode.previousSibling;
		let toolbar=obj.parentNode;
		let btns=toolbar.getElementsByTagName("i");
		for (let i=0; i<btns.length;i++ ){
			let status=btns[i].getAttribute("data-status")
			if (status==1){
				return true
			}
		};
		return false
	}

	//左边导航递归逐级展开后进行精确定位
	function findParent(node) {
		if (node.tagName =="UL") {
			node.style.display="block";
		};
		if (node.id!="nav"){
			findParent(node.parentNode);
		};
    };
