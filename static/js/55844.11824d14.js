"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[55844],{993963:function(m,u,f){f.d(u,{Z:function(){return w}});function l(o,n){let e=o.length-n,c=0;do{for(let t=n;t>0;t--)o[c+n]+=o[c],c++;e-=n}while(e>0)}function h(o,n,e){let c=0,t=o.length;const i=t/e;for(;t>n;){for(let a=n;a>0;--a)o[c+n]+=o[c],++c;t-=n}const d=o.slice();for(let a=0;a<i;++a)for(let s=0;s<e;++s)o[e*a+s]=d[(e-s-1)*i+a]}function g(o,n,e,c,t,i){if(!n||n===1)return o;for(let s=0;s<t.length;++s){if(t[s]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(t[s]!==t[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const d=t[0]/8,a=i===2?1:t.length;for(let s=0;s<c&&!(s*a*e*d>=o.byteLength);++s){let r;if(n===2){switch(t[0]){case 8:r=new Uint8Array(o,s*a*e*d,a*e*d);break;case 16:r=new Uint16Array(o,s*a*e*d,a*e*d/2);break;case 32:r=new Uint32Array(o,s*a*e*d,a*e*d/4);break;default:throw new Error(`Predictor 2 not allowed with ${t[0]} bits per sample.`)}l(r,a,d)}else n===3&&(r=new Uint8Array(o,s*a*e*d,a*e*d),h(r,a,d))}return o}class w{async decode(n,e){const c=await this.decodeBlock(e),t=n.Predictor||1;if(t!==1){const i=!n.StripOffsets,d=i?n.TileWidth:n.ImageWidth,a=i?n.TileLength:n.RowsPerStrip||n.ImageLength;return g(c,t,d,a,n.BitsPerSample,n.PlanarConfiguration)}return c}}},855844:function(m,u,f){f.r(u),f.d(u,{default:function(){return h}});var l=f(993963);class h extends l.Z{constructor(){if(super(),typeof createImageBitmap>"u")throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if(typeof document>"u"&&typeof OffscreenCanvas>"u")throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available")}async decode(w,o){const n=new Blob([o]),e=await createImageBitmap(n);let c;typeof document<"u"?(c=document.createElement("canvas"),c.width=e.width,c.height=e.height):c=new OffscreenCanvas(e.width,e.height);const t=c.getContext("2d");return t.drawImage(e,0,0),t.getImageData(0,0,e.width,e.height).data.buffer}}}}]);
