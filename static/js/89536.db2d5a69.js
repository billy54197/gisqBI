(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[89536],{889536:function(W,P){var J,q;/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */(function(){var ee=function(){var F={};F.defaultNoDataValue=-34027999387901484e22,F.decode=function(r,u){u=u||{};var a=u.encodedMaskData||u.encodedMaskData===null,i=t(r,u.inputOffset||0,a),m=u.noDataValue!==null?u.noDataValue:F.defaultNoDataValue,n=A(i,u.pixelType||Float32Array,u.encodedMaskData,m,u.returnMask),f={width:i.width,height:i.height,pixelData:n.resultPixels,minValue:n.minValue,maxValue:i.pixels.maxValue,noDataValue:m};return n.resultMask&&(f.maskData=n.resultMask),u.returnEncodedMask&&i.mask&&(f.encodedMaskData=i.mask.bitset?i.mask.bitset:null),u.returnFileInfo&&(f.fileInfo=_(i),u.computeUsedBitDepths&&(f.fileInfo.bitDepths=H(i))),f};var A=function(r,u,a,i,m){var n=0,f=r.pixels.numBlocksX,v=r.pixels.numBlocksY,o=Math.floor(r.width/f),h=Math.floor(r.height/v),c=2*r.maxZError,l=Number.MAX_VALUE,s;a=a||(r.mask?r.mask.bitset:null);var w,I;w=new u(r.width*r.height),m&&a&&(I=new Uint8Array(r.width*r.height));for(var V=new Float32Array(o*h),d,M,k=0;k<=v;k++){var L=k!==v?h:r.height%v;if(L!==0)for(var p=0;p<=f;p++){var g=p!==f?o:r.width%f;if(g!==0){var U=k*r.width*h+p*o,T=r.width-g,x=r.pixels.blocks[n],D,y,S;x.encoding<2?(x.encoding===0?D=x.rawData:(e(x.stuffedData,x.bitsPerPixel,x.numValidPixels,x.offset,c,V,r.pixels.maxValue),D=V),y=0):x.encoding===2?S=0:S=x.offset;var B;if(a)for(M=0;M<L;M++){for(U&7&&(B=a[U>>3],B<<=U&7),d=0;d<g;d++)U&7||(B=a[U>>3]),B&128?(I&&(I[U]=1),s=x.encoding<2?D[y++]:S,l=l>s?s:l,w[U++]=s):(I&&(I[U]=0),w[U++]=i),B<<=1;U+=T}else if(x.encoding<2)for(M=0;M<L;M++){for(d=0;d<g;d++)s=D[y++],l=l>s?s:l,w[U++]=s;U+=T}else for(l=l>S?S:l,M=0;M<L;M++){for(d=0;d<g;d++)w[U++]=S;U+=T}if(x.encoding===1&&y!==x.numValidPixels)throw"Block and Mask do not match";n++}}}return{resultPixels:w,resultMask:I,minValue:l}},_=function(r){return{fileIdentifierString:r.fileIdentifierString,fileVersion:r.fileVersion,imageType:r.imageType,height:r.height,width:r.width,maxZError:r.maxZError,eofOffset:r.eofOffset,mask:r.mask?{numBlocksX:r.mask.numBlocksX,numBlocksY:r.mask.numBlocksY,numBytes:r.mask.numBytes,maxValue:r.mask.maxValue}:null,pixels:{numBlocksX:r.pixels.numBlocksX,numBlocksY:r.pixels.numBlocksY,numBytes:r.pixels.numBytes,maxValue:r.pixels.maxValue,noDataValue:r.noDataValue}}},H=function(r){for(var u=r.pixels.numBlocksX*r.pixels.numBlocksY,a={},i=0;i<u;i++){var m=r.pixels.blocks[i];m.encoding===0?a.float32=!0:m.encoding===1?a[m.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},t=function(r,u,a){var i={},m=new Uint8Array(r,u,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,m),i.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+i.fileIdentifierString;u+=10;var n=new DataView(r,u,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),u+=24,!a)if(n=new DataView(r,u,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),u+=16,i.mask.numBytes>0){var f=new Uint8Array(Math.ceil(i.width*i.height/8));n=new DataView(r,u,i.mask.numBytes);var v=n.getInt16(0,!0),o=2,h=0;do{if(v>0)for(;v--;)f[h++]=n.getUint8(o++);else{var c=n.getUint8(o++);for(v=-v;v--;)f[h++]=c}v=n.getInt16(o,!0),o+=2}while(o<i.mask.numBytes);if(v!==-32768||h<f.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=f,u+=i.mask.numBytes}else i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue||(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(r,u,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),u+=16;var l=i.pixels.numBlocksX,s=i.pixels.numBlocksY,w=l+(i.width%l>0?1:0),I=s+(i.height%s>0?1:0);i.pixels.blocks=new Array(w*I);for(var V=0,d=0;d<I;d++)for(var M=0;M<w;M++){var k=0,L=r.byteLength-u;n=new DataView(r,u,Math.min(10,L));var p={};i.pixels.blocks[V++]=p;var g=n.getUint8(0);if(k++,p.encoding=g&63,p.encoding>3)throw"Invalid block encoding ("+p.encoding+")";if(p.encoding===2){u++;continue}if(g!==0&&g!==2){if(g>>=6,p.offsetType=g,g===2)p.offset=n.getInt8(1),k++;else if(g===1)p.offset=n.getInt16(1,!0),k+=2;else if(g===0)p.offset=n.getFloat32(1,!0),k+=4;else throw"Invalid block offset type";if(p.encoding===1)if(g=n.getUint8(k),k++,p.bitsPerPixel=g&63,g>>=6,p.numValidPixelsType=g,g===2)p.numValidPixels=n.getUint8(k),k++;else if(g===1)p.numValidPixels=n.getUint16(k,!0),k+=2;else if(g===0)p.numValidPixels=n.getUint32(k,!0),k+=4;else throw"Invalid valid pixel count type"}if(u+=k,p.encoding!==3){var U,T;if(p.encoding===0){var x=(i.pixels.numBytes-1)/4;if(x!==Math.floor(x))throw"uncompressed block has invalid length";U=new ArrayBuffer(x*4),T=new Uint8Array(U),T.set(new Uint8Array(r,u,x*4));var D=new Float32Array(U);p.rawData=D,u+=x*4}else if(p.encoding===1){var y=Math.ceil(p.numValidPixels*p.bitsPerPixel/8),S=Math.ceil(y/4);U=new ArrayBuffer(S*4),T=new Uint8Array(U),T.set(new Uint8Array(r,u,y)),p.stuffedData=new Uint32Array(U),u+=y}}}return i.eofOffset=u,i},e=function(r,u,a,i,m,n,f){var v=(1<<u)-1,o=0,h,c=0,l,s,w=Math.ceil((f-i)/m),I=r.length*4-Math.ceil(u*a/8);for(r[r.length-1]<<=8*I,h=0;h<a;h++){if(c===0&&(s=r[o++],c=32),c>=u)l=s>>>c-u&v,c-=u;else{var V=u-c;l=(s&v)<<V&v,s=r[o++],c=32-V,l+=s>>>c}n[h]=l<w?i+l*m:f}return n};return F}(),re=function(){"use strict";var F={unstuff:function(t,e,r,u,a,i,m,n){var f=(1<<r)-1,v=0,o,h=0,c,l,s,w,I=t.length*4-Math.ceil(r*u/8);if(t[t.length-1]<<=8*I,a)for(o=0;o<u;o++)h===0&&(l=t[v++],h=32),h>=r?(c=l>>>h-r&f,h-=r):(s=r-h,c=(l&f)<<s&f,l=t[v++],h=32-s,c+=l>>>h),e[o]=a[c];else for(w=Math.ceil((n-i)/m),o=0;o<u;o++)h===0&&(l=t[v++],h=32),h>=r?(c=l>>>h-r&f,h-=r):(s=r-h,c=(l&f)<<s&f,l=t[v++],h=32-s,c+=l>>>h),e[o]=c<w?i+c*m:n},unstuffLUT:function(t,e,r,u,a,i){var m=(1<<e)-1,n=0,f=0,v=0,o=0,h=0,c,l=[],s=t.length*4-Math.ceil(e*r/8);t[t.length-1]<<=8*s;var w=Math.ceil((i-u)/a);for(f=0;f<r;f++)o===0&&(c=t[n++],o=32),o>=e?(h=c>>>o-e&m,o-=e):(v=e-o,h=(c&m)<<v&m,c=t[n++],o=32-v,h+=c>>>o),l[f]=h<w?u+h*a:i;return l.unshift(u),l},unstuff2:function(t,e,r,u,a,i,m,n){var f=(1<<r)-1,v=0,o,h=0,c=0,l,s,w;if(a)for(o=0;o<u;o++)h===0&&(s=t[v++],h=32,c=0),h>=r?(l=s>>>c&f,h-=r,c+=r):(w=r-h,l=s>>>c&f,s=t[v++],h=32-w,l|=(s&(1<<w)-1)<<r-w,c=w),e[o]=a[l];else{var I=Math.ceil((n-i)/m);for(o=0;o<u;o++)h===0&&(s=t[v++],h=32,c=0),h>=r?(l=s>>>c&f,h-=r,c+=r):(w=r-h,l=s>>>c&f,s=t[v++],h=32-w,l|=(s&(1<<w)-1)<<r-w,c=w),e[o]=l<I?i+l*m:n}return e},unstuffLUT2:function(t,e,r,u,a,i){var m=(1<<e)-1,n=0,f=0,v=0,o=0,h=0,c=0,l,s=[],w=Math.ceil((i-u)/a);for(f=0;f<r;f++)o===0&&(l=t[n++],o=32,c=0),o>=e?(h=l>>>c&m,o-=e,c+=e):(v=e-o,h=l>>>c&m,l=t[n++],o=32-v,h|=(l&(1<<v)-1)<<e-v,c=v),s[f]=h<w?u+h*a:i;return s.unshift(u),s},originalUnstuff:function(t,e,r,u){var a=(1<<r)-1,i=0,m,n=0,f,v,o,h=t.length*4-Math.ceil(r*u/8);for(t[t.length-1]<<=8*h,m=0;m<u;m++)n===0&&(v=t[i++],n=32),n>=r?(f=v>>>n-r&a,n-=r):(o=r-n,f=(v&a)<<o&a,v=t[i++],n=32-o,f+=v>>>n),e[m]=f;return e},originalUnstuff2:function(t,e,r,u){var a=(1<<r)-1,i=0,m,n=0,f=0,v,o,h;for(m=0;m<u;m++)n===0&&(o=t[i++],n=32,f=0),n>=r?(v=o>>>f&a,n-=r,f+=r):(h=r-n,v=o>>>f&a,o=t[i++],n=32-h,v|=(o&(1<<h)-1)<<r-h,f=h),e[m]=v;return e}},A={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(t){for(var e=65535,r=65535,u=t.length,a=Math.floor(u/2),i=0;a;){var m=a>=359?359:a;a-=m;do e+=t[i++]<<8,r+=e+=t[i++];while(--m);e=(e&65535)+(e>>>16),r=(r&65535)+(r>>>16)}return u&1&&(r+=e+=t[i]<<8),e=(e&65535)+(e>>>16),r=(r&65535)+(r>>>16),(r<<16|e)>>>0},readHeaderInfo:function(t,e){var r=e.ptr,u=new Uint8Array(t,r,6),a={};if(a.fileIdentifierString=String.fromCharCode.apply(null,u),a.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+a.fileIdentifierString;r+=6;var i=new DataView(t,r,8),m=i.getInt32(0,!0);a.fileVersion=m,r+=4,m>=3&&(a.checksum=i.getUint32(4,!0),r+=4),i=new DataView(t,r,12),a.height=i.getUint32(0,!0),a.width=i.getUint32(4,!0),r+=8,m>=4?(a.numDims=i.getUint32(8,!0),r+=4):a.numDims=1,i=new DataView(t,r,40),a.numValidPixel=i.getUint32(0,!0),a.microBlockSize=i.getInt32(4,!0),a.blobSize=i.getInt32(8,!0),a.imageType=i.getInt32(12,!0),a.maxZError=i.getFloat64(16,!0),a.zMin=i.getFloat64(24,!0),a.zMax=i.getFloat64(32,!0),r+=40,e.headerInfo=a,e.ptr=r;var n,f;if(m>=3&&(f=m>=4?52:48,n=this.computeChecksumFletcher32(new Uint8Array(t,r-f,a.blobSize-14)),n!==a.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(t,e){var r=e.headerInfo,u=this.getDataTypeArray(r.imageType),a=r.numDims*this.getDataTypeSize(r.imageType),i=this.readSubArray(t,e.ptr,u,a),m=this.readSubArray(t,e.ptr+a,u,a);e.ptr+=2*a;var n,f=!0;for(n=0;n<r.numDims;n++)if(i[n]!==m[n]){f=!1;break}return r.minValues=i,r.maxValues=m,f},readSubArray:function(t,e,r,u){var a;if(r===Uint8Array)a=new Uint8Array(t,e,u);else{var i=new ArrayBuffer(u),m=new Uint8Array(i);m.set(new Uint8Array(t,e,u)),a=new r(i)}return a},readMask:function(t,e){var r=e.ptr,u=e.headerInfo,a=u.width*u.height,i=u.numValidPixel,m=new DataView(t,r,4),n={};if(n.numBytes=m.getUint32(0,!0),r+=4,(i===0||a===i)&&n.numBytes!==0)throw"invalid mask";var f,v;if(i===0)f=new Uint8Array(Math.ceil(a/8)),n.bitset=f,v=new Uint8Array(a),e.pixels.resultMask=v,r+=n.numBytes;else if(n.numBytes>0){f=new Uint8Array(Math.ceil(a/8)),m=new DataView(t,r,n.numBytes);var o=m.getInt16(0,!0),h=2,c=0,l=0;do{if(o>0)for(;o--;)f[c++]=m.getUint8(h++);else for(l=m.getUint8(h++),o=-o;o--;)f[c++]=l;o=m.getInt16(h,!0),h+=2}while(h<n.numBytes);if(o!==-32768||c<f.length)throw"Unexpected end of mask RLE encoding";v=new Uint8Array(a);var s=0,w=0;for(w=0;w<a;w++)w&7?(s=f[w>>3],s<<=w&7):s=f[w>>3],s&128&&(v[w]=1);e.pixels.resultMask=v,n.bitset=f,r+=n.numBytes}return e.ptr=r,e.mask=n,!0},readDataOneSweep:function(t,e,r,u){var a=e.ptr,i=e.headerInfo,m=i.numDims,n=i.width*i.height,f=i.imageType,v=i.numValidPixel*A.getDataTypeSize(f)*m,o,h=e.pixels.resultMask;if(r===Uint8Array)o=new Uint8Array(t,a,v);else{var c=new ArrayBuffer(v),l=new Uint8Array(c);l.set(new Uint8Array(t,a,v)),o=new r(c)}if(o.length===n*m)u?e.pixels.resultPixels=A.swapDimensionOrder(o,n,m,r,!0):e.pixels.resultPixels=o;else{e.pixels.resultPixels=new r(n*m);var s=0,w=0,I=0,V=0;if(m>1){if(u){for(w=0;w<n;w++)if(h[w])for(V=w,I=0;I<m;I++,V+=n)e.pixels.resultPixels[V]=o[s++]}else for(w=0;w<n;w++)if(h[w])for(V=w*m,I=0;I<m;I++)e.pixels.resultPixels[V+I]=o[s++]}else for(w=0;w<n;w++)h[w]&&(e.pixels.resultPixels[w]=o[s++])}return a+=v,e.ptr=a,!0},readHuffmanTree:function(t,e){var r=this.HUFFMAN_LUT_BITS_MAX,u=new DataView(t,e.ptr,16);e.ptr+=16;var a=u.getInt32(0,!0);if(a<2)throw"unsupported Huffman version";var i=u.getInt32(4,!0),m=u.getInt32(8,!0),n=u.getInt32(12,!0);if(m>=n)return!1;var f=new Uint32Array(n-m);A.decodeBits(t,e,f);var v=[],o,h,c,l;for(o=m;o<n;o++)h=o-(o<i?0:i),v[h]={first:f[o-m],second:null};var s=t.byteLength-e.ptr,w=Math.ceil(s/4),I=new ArrayBuffer(w*4),V=new Uint8Array(I);V.set(new Uint8Array(t,e.ptr,s));var d=new Uint32Array(I),M=0,k,L=0;for(k=d[0],o=m;o<n;o++)h=o-(o<i?0:i),l=v[h].first,l>0&&(v[h].second=k<<M>>>32-l,32-M>=l?(M+=l,M===32&&(M=0,L++,k=d[L])):(M+=l-32,L++,k=d[L],v[h].second|=k>>>32-M));var p=0,g=0,U=new _;for(o=0;o<v.length;o++)v[o]!==void 0&&(p=Math.max(p,v[o].first));p>=r?g=r:g=p;var T=[],x,D,y,S,B,b;for(o=m;o<n;o++)if(h=o-(o<i?0:i),l=v[h].first,l>0)if(x=[l,h],l<=g)for(D=v[h].second<<g-l,y=1<<g-l,c=0;c<y;c++)T[D|c]=x;else for(D=v[h].second,b=U,S=l-1;S>=0;S--)B=D>>>S&1,B?(b.right||(b.right=new _),b=b.right):(b.left||(b.left=new _),b=b.left),S===0&&!b.val&&(b.val=x[1]);return{decodeLut:T,numBitsLUTQick:g,numBitsLUT:p,tree:U,stuffedData:d,srcPtr:L,bitPos:M}},readHuffman:function(t,e,r,u){var a=e.headerInfo,i=a.numDims,m=e.headerInfo.height,n=e.headerInfo.width,f=n*m,v=this.readHuffmanTree(t,e),o=v.decodeLut,h=v.tree,c=v.stuffedData,l=v.srcPtr,s=v.bitPos,w=v.numBitsLUTQick,I=v.numBitsLUT,V=e.headerInfo.imageType===0?128:0,d,M,k,L=e.pixels.resultMask,p,g,U,T,x,D,y,S=0;s>0&&(l++,s=0);var B=c[l],b=e.encodeMode===1,Z=new r(f*i),X=Z,C;if(i<2||b){for(C=0;C<i;C++)if(i>1&&(X=new r(Z.buffer,f*C,f),S=0),e.headerInfo.numValidPixel===n*m)for(D=0,T=0;T<m;T++)for(x=0;x<n;x++,D++){if(M=0,p=B<<s>>>32-w,g=p,32-s<w&&(p|=c[l+1]>>>64-s-w,g=p),o[g])M=o[g][1],s+=o[g][0];else for(p=B<<s>>>32-I,g=p,32-s<I&&(p|=c[l+1]>>>64-s-I,g=p),d=h,y=0;y<I;y++)if(U=p>>>I-y-1&1,d=U?d.right:d.left,!(d.left||d.right)){M=d.val,s=s+y+1;break}s>=32&&(s-=32,l++,B=c[l]),k=M-V,b?(x>0?k+=S:T>0?k+=X[D-n]:k+=S,k&=255,X[D]=k,S=k):X[D]=k}else for(D=0,T=0;T<m;T++)for(x=0;x<n;x++,D++)if(L[D]){if(M=0,p=B<<s>>>32-w,g=p,32-s<w&&(p|=c[l+1]>>>64-s-w,g=p),o[g])M=o[g][1],s+=o[g][0];else for(p=B<<s>>>32-I,g=p,32-s<I&&(p|=c[l+1]>>>64-s-I,g=p),d=h,y=0;y<I;y++)if(U=p>>>I-y-1&1,d=U?d.right:d.left,!(d.left||d.right)){M=d.val,s=s+y+1;break}s>=32&&(s-=32,l++,B=c[l]),k=M-V,b?(x>0&&L[D-1]?k+=S:T>0&&L[D-n]?k+=X[D-n]:k+=S,k&=255,X[D]=k,S=k):X[D]=k}}else for(D=0,T=0;T<m;T++)for(x=0;x<n;x++)if(D=T*n+x,!L||L[D])for(C=0;C<i;C++,D+=f){if(M=0,p=B<<s>>>32-w,g=p,32-s<w&&(p|=c[l+1]>>>64-s-w,g=p),o[g])M=o[g][1],s+=o[g][0];else for(p=B<<s>>>32-I,g=p,32-s<I&&(p|=c[l+1]>>>64-s-I,g=p),d=h,y=0;y<I;y++)if(U=p>>>I-y-1&1,d=U?d.right:d.left,!(d.left||d.right)){M=d.val,s=s+y+1;break}s>=32&&(s-=32,l++,B=c[l]),k=M-V,X[D]=k}e.ptr=e.ptr+(l+1)*4+(s>0?4:0),e.pixels.resultPixels=Z,i>1&&!u&&(e.pixels.resultPixels=A.swapDimensionOrder(Z,f,i,r))},decodeBits:function(t,e,r,u,a){{var i=e.headerInfo,m=i.fileVersion,n=0,f=t.byteLength-e.ptr>=5?5:t.byteLength-e.ptr,v=new DataView(t,e.ptr,f),o=v.getUint8(0);n++;var h=o>>6,c=h===0?4:3-h,l=(o&32)>0,s=o&31,w=0;if(c===1)w=v.getUint8(n),n++;else if(c===2)w=v.getUint16(n,!0),n+=2;else if(c===4)w=v.getUint32(n,!0),n+=4;else throw"Invalid valid pixel count type";var I=2*i.maxZError,V,d,M,k,L,p,g,U,T,x,D=i.numDims>1?i.maxValues[a]:i.zMax;if(l){for(e.counter.lut++,U=v.getUint8(n),T=s,n++,k=Math.ceil((U-1)*s/8),L=Math.ceil(k/4),d=new ArrayBuffer(L*4),M=new Uint8Array(d),e.ptr+=n,M.set(new Uint8Array(t,e.ptr,k)),g=new Uint32Array(d),e.ptr+=k,x=0;U-1>>>x;)x++;k=Math.ceil(w*x/8),L=Math.ceil(k/4),d=new ArrayBuffer(L*4),M=new Uint8Array(d),M.set(new Uint8Array(t,e.ptr,k)),V=new Uint32Array(d),e.ptr+=k,m>=3?p=F.unstuffLUT2(g,s,U-1,u,I,D):p=F.unstuffLUT(g,s,U-1,u,I,D),m>=3?F.unstuff2(V,r,x,w,p):F.unstuff(V,r,x,w,p)}else e.counter.bitstuffer++,x=s,e.ptr+=n,x>0&&(k=Math.ceil(w*x/8),L=Math.ceil(k/4),d=new ArrayBuffer(L*4),M=new Uint8Array(d),M.set(new Uint8Array(t,e.ptr,k)),V=new Uint32Array(d),e.ptr+=k,m>=3?u==null?F.originalUnstuff2(V,r,x,w):F.unstuff2(V,r,x,w,!1,u,I,D):u==null?F.originalUnstuff(V,r,x,w):F.unstuff(V,r,x,w,!1,u,I,D))}},readTiles:function(t,e,r,u){var a=e.headerInfo,i=a.width,m=a.height,n=i*m,f=a.microBlockSize,v=a.imageType,o=A.getDataTypeSize(v),h=Math.ceil(i/f),c=Math.ceil(m/f);e.pixels.numBlocksY=c,e.pixels.numBlocksX=h,e.pixels.ptr=0;var l=0,s=0,w=0,I=0,V=0,d=0,M=0,k=0,L=0,p=0,g=0,U=0,T=0,x=0,D=0,y=0,S,B,b,Z,X,C,R=new r(f*f),ae=m%f||f,fe=i%f||f,K,j,Q=a.numDims,N,z=e.pixels.resultMask,O=e.pixels.resultPixels,te=a.fileVersion,$=te>=5?14:15,Y,G=a.zMax,E;for(w=0;w<c;w++)for(V=w!==c-1?f:ae,I=0;I<h;I++)for(d=I!==h-1?f:fe,g=w*i*f+I*f,U=i-d,N=0;N<Q;N++){if(Q>1?(E=O,g=w*i*f+I*f,O=new r(e.pixels.resultPixels.buffer,n*N*o,n),G=a.maxValues[N]):E=null,M=t.byteLength-e.ptr,S=new DataView(t,e.ptr,Math.min(10,M)),B={},y=0,k=S.getUint8(0),y++,Y=a.fileVersion>=5?k&4:0,L=k>>6&255,p=k>>2&$,p!==(I*f>>3&$)||Y&&N===0)throw"integrity issue";if(C=k&3,C>3)throw e.ptr+=y,"Invalid block encoding ("+C+")";if(C===2){if(Y)if(z)for(l=0;l<V;l++)for(s=0;s<d;s++)z[g]&&(O[g]=E[g]),g++;else for(l=0;l<V;l++)for(s=0;s<d;s++)O[g]=E[g],g++;e.counter.constant++,e.ptr+=y;continue}else if(C===0){if(Y)throw"integrity issue";if(e.counter.uncompressed++,e.ptr+=y,T=V*d*o,x=t.byteLength-e.ptr,T=T<x?T:x,b=new ArrayBuffer(T%o===0?T:T+o-T%o),Z=new Uint8Array(b),Z.set(new Uint8Array(t,e.ptr,T)),X=new r(b),D=0,z)for(l=0;l<V;l++){for(s=0;s<d;s++)z[g]&&(O[g]=X[D++]),g++;g+=U}else for(l=0;l<V;l++){for(s=0;s<d;s++)O[g++]=X[D++];g+=U}e.ptr+=D*o}else if(K=A.getDataTypeUsed(Y&&v<6?4:v,L),j=A.getOnePixel(B,y,K,S),y+=A.getDataTypeSize(K),C===3)if(e.ptr+=y,e.counter.constantoffset++,z)for(l=0;l<V;l++){for(s=0;s<d;s++)z[g]&&(O[g]=Y?Math.min(G,E[g]+j):j),g++;g+=U}else for(l=0;l<V;l++){for(s=0;s<d;s++)O[g]=Y?Math.min(G,E[g]+j):j,g++;g+=U}else if(e.ptr+=y,A.decodeBits(t,e,R,j,N),y=0,Y)if(z)for(l=0;l<V;l++){for(s=0;s<d;s++)z[g]&&(O[g]=R[y++]+E[g]),g++;g+=U}else for(l=0;l<V;l++){for(s=0;s<d;s++)O[g]=R[y++]+E[g],g++;g+=U}else if(z)for(l=0;l<V;l++){for(s=0;s<d;s++)z[g]&&(O[g]=R[y++]),g++;g+=U}else for(l=0;l<V;l++){for(s=0;s<d;s++)O[g++]=R[y++];g+=U}}Q>1&&!u&&(e.pixels.resultPixels=A.swapDimensionOrder(e.pixels.resultPixels,n,Q,r))},formatFileInfo:function(t){return{fileIdentifierString:t.headerInfo.fileIdentifierString,fileVersion:t.headerInfo.fileVersion,imageType:t.headerInfo.imageType,height:t.headerInfo.height,width:t.headerInfo.width,numValidPixel:t.headerInfo.numValidPixel,microBlockSize:t.headerInfo.microBlockSize,blobSize:t.headerInfo.blobSize,maxZError:t.headerInfo.maxZError,pixelType:A.getPixelType(t.headerInfo.imageType),eofOffset:t.eofOffset,mask:t.mask?{numBytes:t.mask.numBytes}:null,pixels:{numBlocksX:t.pixels.numBlocksX,numBlocksY:t.pixels.numBlocksY,maxValue:t.headerInfo.zMax,minValue:t.headerInfo.zMin,noDataValue:t.noDataValue}}},constructConstantSurface:function(t,e){var r=t.headerInfo.zMax,u=t.headerInfo.zMin,a=t.headerInfo.maxValues,i=t.headerInfo.numDims,m=t.headerInfo.height*t.headerInfo.width,n=0,f=0,v=0,o=t.pixels.resultMask,h=t.pixels.resultPixels;if(o)if(i>1){if(e)for(n=0;n<i;n++)for(v=n*m,r=a[n],f=0;f<m;f++)o[f]&&(h[v+f]=r);else for(f=0;f<m;f++)if(o[f])for(v=f*i,n=0;n<i;n++)h[v+i]=a[n]}else for(f=0;f<m;f++)o[f]&&(h[f]=r);else if(i>1&&u!==r)if(e)for(n=0;n<i;n++)for(v=n*m,r=a[n],f=0;f<m;f++)h[v+f]=r;else for(f=0;f<m;f++)for(v=f*i,n=0;n<i;n++)h[v+n]=a[n];else for(f=0;f<m*i;f++)h[f]=r},getDataTypeArray:function(t){var e;switch(t){case 0:e=Int8Array;break;case 1:e=Uint8Array;break;case 2:e=Int16Array;break;case 3:e=Uint16Array;break;case 4:e=Int32Array;break;case 5:e=Uint32Array;break;case 6:e=Float32Array;break;case 7:e=Float64Array;break;default:e=Float32Array}return e},getPixelType:function(t){var e;switch(t){case 0:e="S8";break;case 1:e="U8";break;case 2:e="S16";break;case 3:e="U16";break;case 4:e="S32";break;case 5:e="U32";break;case 6:e="F32";break;case 7:e="F64";break;default:e="F32"}return e},isValidPixelValue:function(t,e){if(e==null)return!1;var r;switch(t){case 0:r=e>=-128&&e<=127;break;case 1:r=e>=0&&e<=255;break;case 2:r=e>=-32768&&e<=32767;break;case 3:r=e>=0&&e<=65536;break;case 4:r=e>=-2147483648&&e<=2147483647;break;case 5:r=e>=0&&e<=4294967296;break;case 6:r=e>=-34027999387901484e22&&e<=34027999387901484e22;break;case 7:r=e>=-17976931348623157e292&&e<=17976931348623157e292;break;default:r=!1}return r},getDataTypeSize:function(t){var e=0;switch(t){case 0:case 1:e=1;break;case 2:case 3:e=2;break;case 4:case 5:case 6:e=4;break;case 7:e=8;break;default:e=t}return e},getDataTypeUsed:function(t,e){var r=t;switch(t){case 2:case 4:r=t-e;break;case 3:case 5:r=t-2*e;break;case 6:e===0?r=t:e===1?r=2:r=1;break;case 7:e===0?r=t:r=t-2*e+1;break;default:r=t;break}return r},getOnePixel:function(t,e,r,u){var a=0;switch(r){case 0:a=u.getInt8(e);break;case 1:a=u.getUint8(e);break;case 2:a=u.getInt16(e,!0);break;case 3:a=u.getUint16(e,!0);break;case 4:a=u.getInt32(e,!0);break;case 5:a=u.getUInt32(e,!0);break;case 6:a=u.getFloat32(e,!0);break;case 7:a=u.getFloat64(e,!0);break;default:throw"the decoder does not understand this pixel type"}return a},swapDimensionOrder:function(t,e,r,u,a){var i=0,m=0,n=0,f=0,v=t;if(r>1)if(v=new u(e*r),a)for(i=0;i<e;i++)for(f=i,n=0;n<r;n++,f+=e)v[f]=t[m++];else for(i=0;i<e;i++)for(f=i,n=0;n<r;n++,f+=e)v[m++]=t[f];return v}},_=function(t,e,r){this.val=t,this.left=e,this.right=r},H={decode:function(t,e){e=e||{};var r=e.noDataValue,u=0,a={};if(a.ptr=e.inputOffset||0,a.pixels={},!!A.readHeaderInfo(t,a)){var i=a.headerInfo,m=i.fileVersion,n=A.getDataTypeArray(i.imageType);if(m>5)throw"unsupported lerc version 2."+m;A.readMask(t,a),i.numValidPixel!==i.width*i.height&&!a.pixels.resultMask&&(a.pixels.resultMask=e.maskData);var f=i.width*i.height;a.pixels.resultPixels=new n(f*i.numDims),a.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var v=!e.returnPixelInterleavedDims;if(i.numValidPixel!==0)if(i.zMax===i.zMin)A.constructConstantSurface(a,v);else if(m>=4&&A.checkMinMaxRanges(t,a))A.constructConstantSurface(a,v);else{var o=new DataView(t,a.ptr,2),h=o.getUint8(0);if(a.ptr++,h)A.readDataOneSweep(t,a,n,v);else if(m>1&&i.imageType<=1&&Math.abs(i.maxZError-.5)<1e-5){var c=o.getUint8(1);if(a.ptr++,a.encodeMode=c,c>2||m<4&&c>1)throw"Invalid Huffman flag "+c;c?A.readHuffman(t,a,n,v):A.readTiles(t,a,n,v)}else A.readTiles(t,a,n,v)}a.eofOffset=a.ptr;var l;e.inputOffset?(l=a.headerInfo.blobSize+e.inputOffset-a.ptr,Math.abs(l)>=1&&(a.eofOffset=e.inputOffset+a.headerInfo.blobSize)):(l=a.headerInfo.blobSize-a.ptr,Math.abs(l)>=1&&(a.eofOffset=a.headerInfo.blobSize));var s={width:i.width,height:i.height,pixelData:a.pixels.resultPixels,minValue:i.zMin,maxValue:i.zMax,validPixelCount:i.numValidPixel,dimCount:i.numDims,dimStats:{minValues:i.minValues,maxValues:i.maxValues},maskData:a.pixels.resultMask};if(a.pixels.resultMask&&A.isValidPixelValue(i.imageType,r)){var w=a.pixels.resultMask;for(u=0;u<f;u++)w[u]||(s.pixelData[u]=r);s.noDataValue=r}return a.noDataValue=r,e.returnFileInfo&&(s.fileInfo=A.formatFileInfo(a)),s}},getBandCount:function(t){var e=0,r=0,u={};for(u.ptr=0,u.pixels={};r<t.byteLength-58;)A.readHeaderInfo(t,u),r+=u.headerInfo.blobSize,e++,u.ptr=r;return e}};return H}(),ie=function(){var F=new ArrayBuffer(4),A=new Uint8Array(F),_=new Uint32Array(F);return _[0]=1,A[0]===1}(),ne={decode:function(F,A){if(!ie)throw"Big endian system is not supported.";A=A||{};var _=A.inputOffset||0,H=new Uint8Array(F,_,10),t=String.fromCharCode.apply(null,H),e,r;if(t.trim()==="CntZImage")e=ee,r=1;else if(t.substring(0,5)==="Lerc2")e=re,r=2;else throw"Unexpected file identifier string: "+t;for(var u=0,a=F.byteLength-10,i,m=[],n,f,v={width:0,height:0,pixels:[],pixelType:A.pixelType,mask:null,statistics:[]},o=0;_<a;){var h=e.decode(F,{inputOffset:_,encodedMaskData:i,maskData:f,returnMask:u===0,returnEncodedMask:u===0,returnFileInfo:!0,returnPixelInterleavedDims:A.returnPixelInterleavedDims,pixelType:A.pixelType||null,noDataValue:A.noDataValue||null});_=h.fileInfo.eofOffset,f=h.maskData,u===0&&(i=h.encodedMaskData,v.width=h.width,v.height=h.height,v.dimCount=h.dimCount||1,v.pixelType=h.pixelType||h.fileInfo.pixelType,v.mask=f),r>1&&(f&&m.push(f),h.fileInfo.mask&&h.fileInfo.mask.numBytes>0&&o++),u++,v.pixels.push(h.pixelData),v.statistics.push({minValue:h.minValue,maxValue:h.maxValue,noDataValue:h.noDataValue,dimStats:h.dimStats})}var c,l,s;if(r>1&&o>1){for(s=v.width*v.height,v.bandMasks=m,f=new Uint8Array(s),f.set(m[0]),c=1;c<m.length;c++)for(n=m[c],l=0;l<s;l++)f[l]=f[l]&n[l];v.maskData=f}return v}};J=[],q=function(){return ne}.apply(P,J),q!==void 0&&(W.exports=q)})()}}]);
