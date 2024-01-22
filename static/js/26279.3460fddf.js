"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[26279],{993963:function(T,C,A){A.d(C,{Z:function(){return v}});function I(r,o){let s=r.length-o,f=0;do{for(let i=o;i>0;i--)r[f+o]+=r[f],f++;s-=o}while(s>0)}function O(r,o,s){let f=0,i=r.length;const d=i/s;for(;i>o;){for(let n=o;n>0;--n)r[f+o]+=r[f],++f;i-=o}const t=r.slice();for(let n=0;n<d;++n)for(let e=0;e<s;++e)r[s*n+e]=t[(s-e-1)*d+n]}function k(r,o,s,f,i,d){if(!o||o===1)return r;for(let e=0;e<i.length;++e){if(i[e]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[e]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const t=i[0]/8,n=d===2?1:i.length;for(let e=0;e<f&&!(e*n*s*t>=r.byteLength);++e){let l;if(o===2){switch(i[0]){case 8:l=new Uint8Array(r,e*n*s*t,n*s*t);break;case 16:l=new Uint16Array(r,e*n*s*t,n*s*t/2);break;case 32:l=new Uint32Array(r,e*n*s*t,n*s*t/4);break;default:throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}I(l,n,t)}else o===3&&(l=new Uint8Array(r,e*n*s*t,n*s*t),O(l,n,t))}return r}class v{async decode(o,s){const f=await this.decodeBlock(s),i=o.Predictor||1;if(i!==1){const d=!o.StripOffsets,t=d?o.TileWidth:o.ImageWidth,n=d?o.TileLength:o.RowsPerStrip||o.ImageLength;return k(f,i,t,n,o.BitsPerSample,o.PlanarConfiguration)}return f}}},226279:function(T,C,A){A.r(C),A.d(C,{default:function(){return d}});var I=A(993963),O=A(149500);const k=9,v=256,r=257,o=12;function s(t,n,e){const l=n%8,a=Math.floor(n/8),y=8-l,B=n+e-(a+1)*8;let w=8*(a+2)-(n+e);const L=(a+2)*8-n;if(w=Math.max(0,w),a>=t.length)return O.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),r;let _=t[a]&2**(8-l)-1;_<<=e-y;let h=_;if(a+1<t.length){let g=t[a+1]>>>w;g<<=Math.max(0,e-L),h+=g}if(B>8&&a+2<t.length){const g=(a+3)*8-(n+e),u=t[a+2]>>>g;h+=u}return h}function f(t,n){for(let e=n.length-1;e>=0;e--)t.push(n[e]);return t}function i(t){const n=new Uint16Array(4093),e=new Uint8Array(4093);for(let c=0;c<=257;c++)n[c]=4096,e[c]=c;let l=258,a=k,y=0;function B(){l=258,a=k}function w(c){const p=s(c,y,a);return y+=a,p}function L(c,p){return e[l]=p,n[l]=c,l++,l-1}function _(c){const p=[];for(let U=c;U!==4096;U=n[U])p.push(e[U]);return p}const h=[];B();const g=new Uint8Array(t);let u=w(g),E;for(;u!==r;){if(u===v){for(B(),u=w(g);u===v;)u=w(g);if(u===r)break;if(u>v)throw new Error(`corrupted code at scanline ${u}`);{const c=_(u);f(h,c),E=u}}else if(u<l){const c=_(u);f(h,c),L(E,c[c.length-1]),E=u}else{const c=_(E);if(!c)throw new Error(`Bogus entry. Not in dictionary, ${E} / ${l}, position: ${y}`);f(h,c),h.push(c[c.length-1]),L(E,c[c.length-1]),E=u}l+1>=2**a&&(a===o?E=void 0:a++),u=w(g)}return new Uint8Array(h)}class d extends I.Z{decodeBlock(n){return i(n,!1).buffer}}}}]);
