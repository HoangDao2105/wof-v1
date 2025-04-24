(function(Zr,M){typeof exports=="object"&&typeof module<"u"?M(exports):typeof define=="function"&&define.amd?define(["exports"],M):(Zr=typeof globalThis<"u"?globalThis:Zr||self,M(Zr.WOF={}))})(this,function(Zr){"use strict";var M=(r=>(r.Application="application",r.WebGLPipes="webgl-pipes",r.WebGLPipesAdaptor="webgl-pipes-adaptor",r.WebGLSystem="webgl-system",r.WebGPUPipes="webgpu-pipes",r.WebGPUPipesAdaptor="webgpu-pipes-adaptor",r.WebGPUSystem="webgpu-system",r.CanvasSystem="canvas-system",r.CanvasPipesAdaptor="canvas-pipes-adaptor",r.CanvasPipes="canvas-pipes",r.Asset="asset",r.LoadParser="load-parser",r.ResolveParser="resolve-parser",r.CacheParser="cache-parser",r.DetectionParser="detection-parser",r.MaskEffect="mask-effect",r.BlendMode="blend-mode",r.TextureSource="texture-source",r.Environment="environment",r.ShapeBuilder="shape-builder",r.Batcher="batcher",r))(M||{});const Sa=r=>{if(typeof r=="function"||typeof r=="object"&&r.extension){if(!r.extension)throw new Error("Extension class must have an extension object");r={...typeof r.extension!="object"?{type:r.extension}:r.extension,ref:r}}if(typeof r=="object")r={...r};else throw new Error("Invalid extension type");return typeof r.type=="string"&&(r.type=[r.type]),r},Zs=(r,e)=>Sa(r).priority??e,oe={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...r){return r.map(Sa).forEach(e=>{e.type.forEach(t=>{var i,n;return(n=(i=this._removeHandlers)[t])==null?void 0:n.call(i,e)})}),this},add(...r){return r.map(Sa).forEach(e=>{e.type.forEach(t=>{var s,o;const i=this._addHandlers,n=this._queue;i[t]?(o=i[t])==null||o.call(i,e):(n[t]=n[t]||[],(s=n[t])==null||s.push(e))})}),this},handle(r,e,t){var o;const i=this._addHandlers,n=this._removeHandlers;if(i[r]||n[r])throw new Error(`Extension type ${r} already has a handler`);i[r]=e,n[r]=t;const s=this._queue;return s[r]&&((o=s[r])==null||o.forEach(a=>e(a)),delete s[r]),this},handleByMap(r,e){return this.handle(r,t=>{t.name&&(e[t.name]=t.ref)},t=>{t.name&&delete e[t.name]})},handleByNamedList(r,e,t=-1){return this.handle(r,i=>{e.findIndex(s=>s.name===i.name)>=0||(e.push({name:i.name,value:i.ref}),e.sort((s,o)=>Zs(o.value,t)-Zs(s.value,t)))},i=>{const n=e.findIndex(s=>s.name===i.name);n!==-1&&e.splice(n,1)})},handleByList(r,e,t=-1){return this.handle(r,i=>{e.includes(i.ref)||(e.push(i.ref),e.sort((n,s)=>Zs(s,t)-Zs(n,t)))},i=>{const n=e.indexOf(i.ref);n!==-1&&e.splice(n,1)})}},Tx={extension:{type:M.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Promise.resolve().then(()=>fE)}},Cx={extension:{type:M.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Promise.resolve().then(()=>pE)}};class xt{constructor(e,t,i){this._x=t||0,this._y=i||0,this._observer=e}clone(e){return new xt(e??this._observer,this._x,this._y)}set(e=0,t=e){return(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}function wa(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Px(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var n=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return r[i]}})}),t}var Ta={exports:{}},jh;function Ax(){return jh||(jh=1,function(r){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function n(l,u,h){this.fn=l,this.context=u,this.once=h||!1}function s(l,u,h,c,d){if(typeof h!="function")throw new TypeError("The listener must be a function");var f=new n(h,c||l,d),g=t?t+u:u;return l._events[g]?l._events[g].fn?l._events[g]=[l._events[g],f]:l._events[g].push(f):(l._events[g]=f,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new i:delete l._events[u]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],h,c;if(this._eventsCount===0)return u;for(c in h=this._events)e.call(h,c)&&u.push(t?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(h)):u},a.prototype.listeners=function(u){var h=t?t+u:u,c=this._events[h];if(!c)return[];if(c.fn)return[c.fn];for(var d=0,f=c.length,g=new Array(f);d<f;d++)g[d]=c[d].fn;return g},a.prototype.listenerCount=function(u){var h=t?t+u:u,c=this._events[h];return c?c.fn?1:c.length:0},a.prototype.emit=function(u,h,c,d,f,g){var m=t?t+u:u;if(!this._events[m])return!1;var _=this._events[m],y=arguments.length,S,w;if(_.fn){switch(_.once&&this.removeListener(u,_.fn,void 0,!0),y){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,h),!0;case 3:return _.fn.call(_.context,h,c),!0;case 4:return _.fn.call(_.context,h,c,d),!0;case 5:return _.fn.call(_.context,h,c,d,f),!0;case 6:return _.fn.call(_.context,h,c,d,f,g),!0}for(w=1,S=new Array(y-1);w<y;w++)S[w-1]=arguments[w];_.fn.apply(_.context,S)}else{var P=_.length,E;for(w=0;w<P;w++)switch(_[w].once&&this.removeListener(u,_[w].fn,void 0,!0),y){case 1:_[w].fn.call(_[w].context);break;case 2:_[w].fn.call(_[w].context,h);break;case 3:_[w].fn.call(_[w].context,h,c);break;case 4:_[w].fn.call(_[w].context,h,c,d);break;default:if(!S)for(E=1,S=new Array(y-1);E<y;E++)S[E-1]=arguments[E];_[w].fn.apply(_[w].context,S)}}return!0},a.prototype.on=function(u,h,c){return s(this,u,h,c,!1)},a.prototype.once=function(u,h,c){return s(this,u,h,c,!0)},a.prototype.removeListener=function(u,h,c,d){var f=t?t+u:u;if(!this._events[f])return this;if(!h)return o(this,f),this;var g=this._events[f];if(g.fn)g.fn===h&&(!d||g.once)&&(!c||g.context===c)&&o(this,f);else{for(var m=0,_=[],y=g.length;m<y;m++)(g[m].fn!==h||d&&!g[m].once||c&&g[m].context!==c)&&_.push(g[m]);_.length?this._events[f]=_.length===1?_[0]:_:o(this,f)}return this},a.prototype.removeAllListeners=function(u){var h;return u?(h=t?t+u:u,this._events[h]&&o(this,h)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,r.exports=a}(Ta)),Ta.exports}var Ex=Ax();const nt=wa(Ex),Mx=Math.PI*2,Rx=180/Math.PI,Qr=Math.PI/180;class Ge{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}clone(){return new Ge(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,t=e){return this.x=e,this.y=t,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Ca.x=0,Ca.y=0,Ca}}const Ca=new Ge;class se{constructor(e=1,t=0,i=0,n=1,s=0,o=0){this.array=null,this.a=e,this.b=t,this.c=i,this.d=n,this.tx=s,this.ty=o}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,t,i,n,s,o){return this.a=e,this.b=t,this.c=i,this.d=n,this.tx=s,this.ty=o,this}toArray(e,t){this.array||(this.array=new Float32Array(9));const i=t||this.array;return e?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i}apply(e,t){t=t||new Ge;const i=e.x,n=e.y;return t.x=this.a*i+this.c*n+this.tx,t.y=this.b*i+this.d*n+this.ty,t}applyInverse(e,t){t=t||new Ge;const i=this.a,n=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(i*o+s*-n),h=e.x,c=e.y;return t.x=o*u*h+-s*u*c+(l*s-a*o)*u,t.y=i*u*c+-n*u*h+(-l*i+a*n)*u,t}translate(e,t){return this.tx+=e,this.ty+=t,this}scale(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),n=this.a,s=this.c,o=this.tx;return this.a=n*t-this.b*i,this.b=n*i+this.b*t,this.c=s*t-this.d*i,this.d=s*i+this.d*t,this.tx=o*t-this.ty*i,this.ty=o*i+this.ty*t,this}append(e){const t=this.a,i=this.b,n=this.c,s=this.d;return this.a=e.a*t+e.b*n,this.b=e.a*i+e.b*s,this.c=e.c*t+e.d*n,this.d=e.c*i+e.d*s,this.tx=e.tx*t+e.ty*n+this.tx,this.ty=e.tx*i+e.ty*s+this.ty,this}appendFrom(e,t){const i=e.a,n=e.b,s=e.c,o=e.d,a=e.tx,l=e.ty,u=t.a,h=t.b,c=t.c,d=t.d;return this.a=i*u+n*c,this.b=i*h+n*d,this.c=s*u+o*c,this.d=s*h+o*d,this.tx=a*u+l*c+t.tx,this.ty=a*h+l*d+t.ty,this}setTransform(e,t,i,n,s,o,a,l,u){return this.a=Math.cos(a+u)*s,this.b=Math.sin(a+u)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=e-(i*this.a+n*this.c),this.ty=t-(i*this.b+n*this.d),this}prepend(e){const t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const i=this.a,n=this.c;this.a=i*e.a+this.b*e.c,this.b=i*e.b+this.b*e.d,this.c=n*e.a+this.d*e.c,this.d=n*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this}decompose(e){const t=this.a,i=this.b,n=this.c,s=this.d,o=e.pivot,a=-Math.atan2(-n,s),l=Math.atan2(i,t),u=Math.abs(a+l);return u<1e-5||Math.abs(Mx-u)<1e-5?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=a,e.skew.y=l),e.scale.x=Math.sqrt(t*t+i*i),e.scale.y=Math.sqrt(n*n+s*s),e.position.x=this.tx+(o.x*t+o.y*n),e.position.y=this.ty+(o.x*i+o.y*s),e}invert(){const e=this.a,t=this.b,i=this.c,n=this.d,s=this.tx,o=e*n-t*i;return this.a=n/o,this.b=-t/o,this.c=-i/o,this.d=e/o,this.tx=(i*this.ty-n*s)/o,this.ty=-(e*this.ty-t*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new se;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Ox.identity()}static get shared(){return Ix.identity()}}const Ix=new se,Ox=new se,_r=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],xr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],vr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],yr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Pa=[],Xh=[],Qs=Math.sign;function Fx(){for(let r=0;r<16;r++){const e=[];Pa.push(e);for(let t=0;t<16;t++){const i=Qs(_r[r]*_r[t]+vr[r]*xr[t]),n=Qs(xr[r]*_r[t]+yr[r]*xr[t]),s=Qs(_r[r]*vr[t]+vr[r]*yr[t]),o=Qs(xr[r]*vr[t]+yr[r]*yr[t]);for(let a=0;a<16;a++)if(_r[a]===i&&xr[a]===n&&vr[a]===s&&yr[a]===o){e.push(a);break}}}for(let r=0;r<16;r++){const e=new se;e.set(_r[r],xr[r],vr[r],yr[r],0,0),Xh.push(e)}}Fx();const Ye={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:r=>_r[r],uY:r=>xr[r],vX:r=>vr[r],vY:r=>yr[r],inv:r=>r&8?r&15:-r&7,add:(r,e)=>Pa[r][e],sub:(r,e)=>Pa[r][Ye.inv(e)],rotate180:r=>r^4,isVertical:r=>(r&3)===2,byDirection:(r,e)=>Math.abs(r)*2<=Math.abs(e)?e>=0?Ye.S:Ye.N:Math.abs(e)*2<=Math.abs(r)?r>0?Ye.E:Ye.W:e>0?r>0?Ye.SE:Ye.SW:r>0?Ye.NE:Ye.NW,matrixAppendRotationInv:(r,e,t=0,i=0)=>{const n=Xh[Ye.inv(e)];n.tx=t,n.ty=i,r.append(n)}},Js=[new Ge,new Ge,new Ge,new Ge];class De{constructor(e=0,t=0,i=0,n=0){this.type="rectangle",this.x=Number(e),this.y=Number(t),this.width=Number(i),this.height=Number(n)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new De(0,0,0,0)}clone(){return new De(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}strokeContains(e,t,i){const{width:n,height:s}=this;if(n<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-i/2,u=o+n+i/2,h=a-i/2,c=a+s+i/2,d=o+i/2,f=o+n-i/2,g=a+i/2,m=a+s-i/2;return e>=l&&e<=u&&t>=h&&t<=c&&!(e>d&&e<f&&t>g&&t<m)}intersects(e,t){if(!t){const k=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=k)return!1;const G=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>G}const i=this.left,n=this.right,s=this.top,o=this.bottom;if(n<=i||o<=s)return!1;const a=Js[0].set(e.left,e.top),l=Js[1].set(e.left,e.bottom),u=Js[2].set(e.right,e.top),h=Js[3].set(e.right,e.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const c=Math.sign(t.a*t.d-t.b*t.c);if(c===0||(t.apply(a,a),t.apply(l,l),t.apply(u,u),t.apply(h,h),Math.max(a.x,l.x,u.x,h.x)<=i||Math.min(a.x,l.x,u.x,h.x)>=n||Math.max(a.y,l.y,u.y,h.y)<=s||Math.min(a.y,l.y,u.y,h.y)>=o))return!1;const d=c*(l.y-a.y),f=c*(a.x-l.x),g=d*i+f*s,m=d*n+f*s,_=d*i+f*o,y=d*n+f*o;if(Math.max(g,m,_,y)<=d*a.x+f*a.y||Math.min(g,m,_,y)>=d*h.x+f*h.y)return!1;const S=c*(a.y-u.y),w=c*(u.x-a.x),P=S*i+w*s,E=S*n+w*s,U=S*i+w*o,B=S*n+w*o;return!(Math.max(P,E,U,B)<=S*a.x+w*a.y||Math.min(P,E,U,B)>=S*h.x+w*h.y)}pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this}fit(e){const t=Math.max(this.x,e.x),i=Math.min(this.x+this.width,e.x+e.width),n=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(i-t,0),this.y=n,this.height=Math.max(s-n,0),this}ceil(e=1,t=.001){const i=Math.ceil((this.x+this.width-t)*e)/e,n=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=i-this.x,this.height=n-this.y,this}enlarge(e){const t=Math.min(this.x,e.x),i=Math.max(this.x+this.width,e.x+e.width),n=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=i-t,this.y=n,this.height=s-n,this}getBounds(e){return e=e||new De,e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Aa={default:-1};function qe(r="default"){return Aa[r]===void 0&&(Aa[r]=-1),++Aa[r]}const Yh={},Me="8.0.0",Bx="8.3.4";function Y(r,e,t=3){if(Yh[e])return;let i=new Error().stack;typeof i>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${r}`):(i=i.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${r}`),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${r}`),console.warn(i))),Yh[e]=!0}const qh=()=>{};function Jr(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function Kh(r){return!(r&r-1)&&!!r}function kx(r){const e={};for(const t in r)r[t]!==void 0&&(e[t]=r[t]);return e}const Zh=Object.create(null);function Ux(r){const e=Zh[r];return e===void 0&&(Zh[r]=qe("resource")),e}const Qh=class w0 extends nt{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...w0.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){Y(Me,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Ux(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Qh.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Jh=Qh;const ec=class T0 extends nt{constructor(e={}){super(),this.options=e,this.uid=qe("textureSource"),this._resourceType="textureSource",this._resourceId=qe("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...T0.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new Jh(kx(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){var t,i;this.style!==e&&((t=this._style)==null||t.off("change",this._onStyleChange,this),this._style=e,(i=this._style)==null||i.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=qe("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,t,i){i=i||this._resolution,e=e||this.width,t=t||this.height;const n=Math.round(e*i),s=Math.round(t*i);return this.width=n/i,this.height=s/i,this._resolution=i,this.pixelWidth===n&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=n,this.pixelHeight=s,this.emit("resize",this),this._resourceId=qe("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Kh(this.pixelWidth)&&Kh(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};ec.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let st=ec;class Ea extends st{constructor(e){const t=e.resource||new Float32Array(e.width*e.height*4);let i=e.format;i||(t instanceof Float32Array?i="rgba32float":t instanceof Int32Array||t instanceof Uint32Array?i="rgba32uint":t instanceof Int16Array||t instanceof Uint16Array?i="rgba16uint":(t instanceof Int8Array,i="bgra8unorm")),super({...e,resource:t,format:i}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}Ea.extension=M.TextureSource;const tc=new se;class ic{constructor(e,t){this.mapCoord=new se,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof t>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=t,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){var t;this.texture!==e&&((t=this._texture)==null||t.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,t){t===void 0&&(t=e);const i=this.mapCoord;for(let n=0;n<e.length;n+=2){const s=e[n],o=e[n+1];t[n]=s*i.a+o*i.c+i.tx,t[n+1]=s*i.b+o*i.d+i.ty}return t}update(){const e=this._texture;this._updateID++;const t=e.uvs;this.mapCoord.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0);const i=e.orig,n=e.trim;n&&(tc.set(i.width/n.width,0,0,i.height/n.height,-n.x/n.width,-n.y/n.height),this.mapCoord.append(tc));const s=e.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset/s._resolution;return o[0]=(e.frame.x+a+l)/s.width,o[1]=(e.frame.y+a+l)/s.height,o[2]=(e.frame.x+e.frame.width-a+l)/s.width,o[3]=(e.frame.y+e.frame.height-a+l)/s.height,this.uClampOffset[0]=this.clampOffset/s.pixelWidth,this.uClampOffset[1]=this.clampOffset/s.pixelHeight,this.isSimple=e.frame.width===s.width&&e.frame.height===s.height&&e.rotate===0,!0}}class X extends nt{constructor({source:e,label:t,frame:i,orig:n,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=qe("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new De,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=t,this.source=(e==null?void 0:e.source)??new st,this.noFrame=!i,i)this.frame.copyFrom(i);else{const{width:h,height:c}=this._source;this.frame.width=h,this.frame.height=c}this.orig=n||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new ic(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:t}=this,{width:i,height:n}=this._source,s=t.x/i,o=t.y/n,a=t.width/i,l=t.height/n;let u=this.rotate;if(u){const h=a/2,c=l/2,d=s+h,f=o+c;u=Ye.add(u,Ye.NW),e.x0=d+h*Ye.uX(u),e.y0=f+c*Ye.uY(u),u=Ye.add(u,2),e.x1=d+h*Ye.uX(u),e.y1=f+c*Ye.uY(u),u=Ye.add(u,2),e.x2=d+h*Ye.uX(u),e.y2=f+c*Ye.uY(u),u=Ye.add(u,2),e.x3=d+h*Ye.uX(u),e.y3=f+c*Ye.uY(u)}else e.x0=s,e.y0=o,e.x1=s+a,e.y1=o,e.x2=s+a,e.y2=o+l,e.x3=s,e.y3=o+l}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Y(Me,"Texture.baseTexture is now Texture.source"),this._source}}X.EMPTY=new X({label:"EMPTY",source:new st({label:"EMPTY"})}),X.EMPTY.destroy=qh,X.WHITE=new X({source:new Ea({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"}),X.WHITE.destroy=qh;function eo(r,e,t,i){const{width:n,height:s}=t.orig,o=t.trim;if(o){const a=o.width,l=o.height;r.minX=o.x-e._x*n-i,r.maxX=r.minX+a,r.minY=o.y-e._y*s-i,r.maxY=r.minY+l}else r.minX=-e._x*n-i,r.maxX=r.minX+n,r.minY=-e._y*s-i,r.maxY=r.minY+s}const rc=new se;class Mt{constructor(e=1/0,t=1/0,i=-1/0,n=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=rc,this.minX=e,this.minY=t,this.maxX=i,this.maxY=n}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new De);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=rc,this}set(e,t,i,n){this.minX=e,this.minY=t,this.maxX=i,this.maxY=n}addFrame(e,t,i,n,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,u=s.d,h=s.tx,c=s.ty;let d=this.minX,f=this.minY,g=this.maxX,m=this.maxY,_=o*e+l*t+h,y=a*e+u*t+c;_<d&&(d=_),y<f&&(f=y),_>g&&(g=_),y>m&&(m=y),_=o*i+l*t+h,y=a*i+u*t+c,_<d&&(d=_),y<f&&(f=y),_>g&&(g=_),y>m&&(m=y),_=o*e+l*n+h,y=a*e+u*n+c,_<d&&(d=_),y<f&&(f=y),_>g&&(g=_),y>m&&(m=y),_=o*i+l*n+h,y=a*i+u*n+c,_<d&&(d=_),y<f&&(f=y),_>g&&(g=_),y>m&&(m=y),this.minX=d,this.minY=f,this.maxX=g,this.maxY=m}addRect(e,t){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,t)}addBounds(e,t){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,t)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const t=this.minX,i=this.minY,n=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:u,tx:h,ty:c}=e;let d=o*t+l*i+h,f=a*t+u*i+c;this.minX=d,this.minY=f,this.maxX=d,this.maxY=f,d=o*n+l*i+h,f=a*n+u*i+c,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*t+l*s+h,f=a*t+u*s+c,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*n+l*s+h,f=a*n+u*s+c,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,t,i,n){return this.minX<e&&(this.minX=e),this.maxX>t&&(this.maxX=t),this.minY<i&&(this.minY=i),this.maxY>n&&(this.maxY=n),this}pad(e,t=e){return this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Mt(this.minX,this.minY,this.maxX,this.maxY)}scale(e,t=e){return this.minX*=e,this.minY*=t,this.maxX*=e,this.maxY*=t,this}get x(){return this.minX}set x(e){const t=this.maxX-this.minX;this.minX=e,this.maxX=e+t}get y(){return this.minY}set y(e){const t=this.maxY-this.minY;this.minY=e,this.maxY=e+t}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,t,i,n){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;n||(n=this.matrix);const u=n.a,h=n.b,c=n.c,d=n.d,f=n.tx,g=n.ty;for(let m=t;m<i;m+=2){const _=e[m],y=e[m+1],S=u*_+c*y+f,w=h*_+d*y+g;s=S<s?S:s,o=w<o?w:o,a=S>a?S:a,l=w>l?w:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(e,t){return this.minX<=e&&this.minY<=t&&this.maxX>=e&&this.maxY>=t}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}var Dx={grad:.9,turn:360,rad:360/(2*Math.PI)},Oi=function(r){return typeof r=="string"?r.length>0:typeof r=="number"},lt=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*r)/t+0},Kt=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),r>t?t:r>e?r:e},nc=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},sc=function(r){return{r:Kt(r.r,0,255),g:Kt(r.g,0,255),b:Kt(r.b,0,255),a:Kt(r.a)}},Ma=function(r){return{r:lt(r.r),g:lt(r.g),b:lt(r.b),a:lt(r.a,3)}},Gx=/^#([0-9a-f]{3,8})$/i,to=function(r){var e=r.toString(16);return e.length<2?"0"+e:e},oc=function(r){var e=r.r,t=r.g,i=r.b,n=r.a,s=Math.max(e,t,i),o=s-Math.min(e,t,i),a=o?s===e?(t-i)/o:s===t?2+(i-e)/o:4+(e-t)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:n}},ac=function(r){var e=r.h,t=r.s,i=r.v,n=r.a;e=e/360*6,t/=100,i/=100;var s=Math.floor(e),o=i*(1-t),a=i*(1-(e-s)*t),l=i*(1-(1-e+s)*t),u=s%6;return{r:255*[i,a,o,o,l,i][u],g:255*[l,i,i,a,o,o][u],b:255*[o,o,l,i,i,a][u],a:n}},lc=function(r){return{h:nc(r.h),s:Kt(r.s,0,100),l:Kt(r.l,0,100),a:Kt(r.a)}},uc=function(r){return{h:lt(r.h),s:lt(r.s),l:lt(r.l),a:lt(r.a,3)}},hc=function(r){return ac((t=(e=r).s,{h:e.h,s:(t*=((i=e.l)<50?i:100-i)/100)>0?2*t/(i+t)*100:0,v:i+t,a:e.a}));var e,t,i},Un=function(r){return{h:(e=oc(r)).h,s:(n=(200-(t=e.s))*(i=e.v)/100)>0&&n<200?t*i/100/(n<=100?n:200-n)*100:0,l:n/2,a:e.a};var e,t,i,n},zx=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Lx=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Nx=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,$x=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ra={string:[[function(r){var e=Gx.exec(r);return e?(r=e[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:r.length===4?lt(parseInt(r[3]+r[3],16)/255,2):1}:r.length===6||r.length===8?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:r.length===8?lt(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var e=Nx.exec(r)||$x.exec(r);return e?e[2]!==e[4]||e[4]!==e[6]?null:sc({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(r){var e=zx.exec(r)||Lx.exec(r);if(!e)return null;var t,i,n=lc({h:(t=e[1],i=e[2],i===void 0&&(i="deg"),Number(t)*(Dx[i]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return hc(n)},"hsl"]],object:[[function(r){var e=r.r,t=r.g,i=r.b,n=r.a,s=n===void 0?1:n;return Oi(e)&&Oi(t)&&Oi(i)?sc({r:Number(e),g:Number(t),b:Number(i),a:Number(s)}):null},"rgb"],[function(r){var e=r.h,t=r.s,i=r.l,n=r.a,s=n===void 0?1:n;if(!Oi(e)||!Oi(t)||!Oi(i))return null;var o=lc({h:Number(e),s:Number(t),l:Number(i),a:Number(s)});return hc(o)},"hsl"],[function(r){var e=r.h,t=r.s,i=r.v,n=r.a,s=n===void 0?1:n;if(!Oi(e)||!Oi(t)||!Oi(i))return null;var o=function(a){return{h:nc(a.h),s:Kt(a.s,0,100),v:Kt(a.v,0,100),a:Kt(a.a)}}({h:Number(e),s:Number(t),v:Number(i),a:Number(s)});return ac(o)},"hsv"]]},dc=function(r,e){for(var t=0;t<e.length;t++){var i=e[t][0](r);if(i)return[i,e[t][1]]}return[null,void 0]},Vx=function(r){return typeof r=="string"?dc(r.trim(),Ra.string):typeof r=="object"&&r!==null?dc(r,Ra.object):[null,void 0]},Ia=function(r,e){var t=Un(r);return{h:t.h,s:Kt(t.s+100*e,0,100),l:t.l,a:t.a}},Oa=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},fc=function(r,e){var t=Un(r);return{h:t.h,s:t.s,l:Kt(t.l+100*e,0,100),a:t.a}},Fa=function(){function r(e){this.parsed=Vx(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return this.parsed!==null},r.prototype.brightness=function(){return lt(Oa(this.rgba),2)},r.prototype.isDark=function(){return Oa(this.rgba)<.5},r.prototype.isLight=function(){return Oa(this.rgba)>=.5},r.prototype.toHex=function(){return e=Ma(this.rgba),t=e.r,i=e.g,n=e.b,o=(s=e.a)<1?to(lt(255*s)):"","#"+to(t)+to(i)+to(n)+o;var e,t,i,n,s,o},r.prototype.toRgb=function(){return Ma(this.rgba)},r.prototype.toRgbString=function(){return e=Ma(this.rgba),t=e.r,i=e.g,n=e.b,(s=e.a)<1?"rgba("+t+", "+i+", "+n+", "+s+")":"rgb("+t+", "+i+", "+n+")";var e,t,i,n,s},r.prototype.toHsl=function(){return uc(Un(this.rgba))},r.prototype.toHslString=function(){return e=uc(Un(this.rgba)),t=e.h,i=e.s,n=e.l,(s=e.a)<1?"hsla("+t+", "+i+"%, "+n+"%, "+s+")":"hsl("+t+", "+i+"%, "+n+"%)";var e,t,i,n,s},r.prototype.toHsv=function(){return e=oc(this.rgba),{h:lt(e.h),s:lt(e.s),v:lt(e.v),a:lt(e.a,3)};var e},r.prototype.invert=function(){return gi({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},r.prototype.saturate=function(e){return e===void 0&&(e=.1),gi(Ia(this.rgba,e))},r.prototype.desaturate=function(e){return e===void 0&&(e=.1),gi(Ia(this.rgba,-e))},r.prototype.grayscale=function(){return gi(Ia(this.rgba,-1))},r.prototype.lighten=function(e){return e===void 0&&(e=.1),gi(fc(this.rgba,e))},r.prototype.darken=function(e){return e===void 0&&(e=.1),gi(fc(this.rgba,-e))},r.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},r.prototype.alpha=function(e){return typeof e=="number"?gi({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):lt(this.rgba.a,3);var t},r.prototype.hue=function(e){var t=Un(this.rgba);return typeof e=="number"?gi({h:e,s:t.s,l:t.l,a:t.a}):lt(t.h)},r.prototype.isEqual=function(e){return this.toHex()===gi(e).toHex()},r}(),gi=function(r){return r instanceof Fa?r:new Fa(r)},pc=[],Hx=function(r){r.forEach(function(e){pc.indexOf(e)<0&&(e(Fa,Ra),pc.push(e))})};function Wx(r,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},i={};for(var n in t)i[t[n]]=n;var s={};r.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=i[this.toHex()];if(u)return u;if(o!=null&&o.closest){var h=this.toRgb(),c=1/0,d="black";if(!s.length)for(var f in t)s[f]=new r(t[f]).toRgb();for(var g in t){var m=(a=h,l=s[g],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));m<c&&(c=m,d=g)}return d}},e.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":t[a];return l?new r(l).toRgb():null},"name"])}Hx([Wx]);const en=class qs{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof qs)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._value=this._cloneSource(e),this._normalize(this._value))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,t){const i=typeof e;if(i!==typeof t)return!1;if(i==="number"||i==="string"||e instanceof Number)return e===t;if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return e.length!==t.length?!1:e.every((s,o)=>s===t[o]);if(e!==null&&t!==null){const s=Object.keys(e),o=Object.keys(t);return s.length!==o.length?!1:s.every(a=>e[a]===t[a])}return e===t}toRgba(){const[e,t,i,n]=this._components;return{r:e,g:t,b:i,a:n}}toRgb(){const[e,t,i]=this._components;return{r:e,g:t,b:i}}toRgbaString(){const[e,t,i]=this.toUint8RgbArray();return`rgba(${e},${t},${i},${this.alpha})`}toUint8RgbArray(e){const[t,i,n]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb,e[0]=Math.round(t*255),e[1]=Math.round(i*255),e[2]=Math.round(n*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e=e||this._arrayRgba;const[t,i,n,s]=this._components;return e[0]=t,e[1]=i,e[2]=n,e[3]=s,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb;const[t,i,n]=this._components;return e[0]=t,e[1]=i,e[2]=n,e}toNumber(){return this._int}toBgrNumber(){const[e,t,i]=this.toUint8RgbArray();return(i<<16)+(t<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[t,i,n,s]=qs._temp.setValue(e)._components;return this._components[0]*=t,this._components[1]*=i,this._components[2]*=n,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,t=!0){if(e===1)return(255<<24)+this._int;if(e===0)return t?0:this._int;let i=this._int>>16&255,n=this._int>>8&255,s=this._int&255;return t&&(i=i*e+.5|0,n=n*e+.5|0,s=s*e+.5|0),(e*255<<24)+(i<<16)+(n<<8)+s}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let t,i,n,s;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const o=e;t=(o>>16&255)/255,i=(o>>8&255)/255,n=(o&255)/255,s=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[t,i,n,s=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[t,i,n,s=255]=e,t/=255,i/=255,n/=255,s/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const a=qs.HEX_PATTERN.exec(e);a&&(e=`#${a[2]}`)}const o=gi(e);o.isValid()&&({r:t,g:i,b:n,a:s}=o.rgba,t/=255,i/=255,n/=255)}if(t!==void 0)this._components[0]=t,this._components[1]=i,this._components[2]=n,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,t,i]=this._components;this._int=(e*255<<16)+(t*255<<8)+(i*255|0)}_clamp(e,t=0,i=1){return typeof e=="number"?Math.min(Math.max(e,t),i):(e.forEach((n,s)=>{e[s]=Math.min(Math.max(n,t),i)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof qs||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};en.shared=new en,en._temp=new en,en.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let ae=en;const jx={cullArea:null,cullable:!1,cullableChildren:!0};class Ba{constructor(e,t){this._pool=[],this._count=0,this._index=0,this._classType=e,t&&this.prepopulate(t)}prepopulate(e){for(let t=0;t<e;t++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){var i;let t;return this._index>0?t=this._pool[--this._index]:t=new this._classType,(i=t.init)==null||i.call(t,e),t}return(e){var t;(t=e.reset)==null||t.call(e),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Xx{constructor(){this._poolsByClass=new Map}prepopulate(e,t){this.getPool(e).prepopulate(t)}get(e,t){return this.getPool(e).get(t)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new Ba(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(t=>{const i=e[t._classType.name]?t._classType.name+t._classType.ID:t._classType.name;e[i]={free:t.totalFree,used:t.totalUsed,size:t.totalSize}}),e}}const Re=new Xx;function mc(r,e,t){const i=r.length;let n;if(e>=i||t===0)return;t=e+t>i?i-e:t;const s=i-t;for(n=e;n<s;++n)r[n]=r[n+t];r.length=s}const Yx={allowChildren:!0,removeChildren(r=0,e){const t=e??this.children.length,i=t-r,n=[];if(i>0&&i<=t){for(let o=t-1;o>=r;o--){const a=this.children[o];a&&(n.push(a),a.parent=null)}mc(this.children,r,t);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(n);for(let o=0;o<n.length;++o)this.emit("childRemoved",n[o],this,o),n[o].emit("removed",this);return n}else if(i===0&&this.children.length===0)return n;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(r){const e=this.getChildAt(r);return this.removeChild(e)},getChildAt(r){if(r<0||r>=this.children.length)throw new Error(`getChildAt: Index (${r}) does not exist.`);return this.children[r]},setChildIndex(r,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(r),this.addChildAt(r,e)},getChildIndex(r){const e=this.children.indexOf(r);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(r,e){this.allowChildren||Y(Me,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:t}=this;if(e<0||e>t.length)throw new Error(`${r}addChildAt: The index ${e} supplied is out of bounds ${t.length}`);if(r.parent){const n=r.parent.children.indexOf(r);if(r.parent===this&&n===e)return r;n!==-1&&r.parent.children.splice(n,1)}e===t.length?t.push(r):t.splice(e,0,r),r.parent=this,r.didChange=!0,r._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(r),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",r,this,e),r.emit("added",this),r},swapChildren(r,e){if(r===e)return;const t=this.getChildIndex(r),i=this.getChildIndex(e);this.children[t]=e,this.children[i]=r;const n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var r;(r=this.parent)==null||r.removeChild(this)},reparentChild(...r){return r.length===1?this.reparentChildAt(r[0],this.children.length):(r.forEach(e=>this.reparentChildAt(e,this.children.length)),r[0])},reparentChildAt(r,e){if(r.parent===this)return this.setChildIndex(r,e),r;const t=r.worldTransform.clone();r.removeFromParent(),this.addChildAt(r,e);const i=this.worldTransform.clone();return i.invert(),t.prepend(i),r.setFromMatrix(t),r}};class io{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class qx{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let t=0;t<this._tests.length;t++){const i=this._tests[t];if(i.test(e))return Re.get(i.maskClass,e)}return e}returnMaskEffect(e){Re.return(e)}}const ka=new qx;oe.handleByList(M.MaskEffect,ka._effectClasses);const Kx={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],addEffect(r){if(this.effects.indexOf(r)!==-1)return;this.effects.push(r),this.effects.sort((i,n)=>i.priority-n.priority);const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0),this._updateIsSimple()},removeEffect(r){const e=this.effects.indexOf(r);e!==-1&&(this.effects.splice(e,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(r){const e=this._maskEffect;(e==null?void 0:e.mask)!==r&&(e&&(this.removeEffect(e),ka.returnMaskEffect(e),this._maskEffect=null),r!=null&&(this._maskEffect=ka.getMaskEffect(r),this.addEffect(this._maskEffect)))},setMask(r){this._maskOptions={...this._maskOptions,...r},r.mask&&(this.mask=r.mask)},get mask(){var r;return(r=this._maskEffect)==null?void 0:r.mask},set filters(r){var s;!Array.isArray(r)&&r&&(r=[r]);const e=this._filterEffect||(this._filterEffect=new io);r=r;const t=(r==null?void 0:r.length)>0,i=((s=e.filters)==null?void 0:s.length)>0,n=t!==i;r=Array.isArray(r)?r.slice(0):r,e.filters=Object.freeze(r),n&&(t?this.addEffect(e):(this.removeEffect(e),e.filters=r??null))},get filters(){var r;return(r=this._filterEffect)==null?void 0:r.filters},set filterArea(r){this._filterEffect||(this._filterEffect=new io),this._filterEffect.filterArea=r},get filterArea(){var r;return(r=this._filterEffect)==null?void 0:r.filterArea}},Zx={label:null,get name(){return Y(Me,"Container.name property has been removed, use Container.label instead"),this.label},set name(r){Y(Me,"Container.name property has been removed, use Container.label instead"),this.label=r},getChildByName(r,e=!1){return this.getChildByLabel(r,e)},getChildByLabel(r,e=!1){const t=this.children;for(let i=0;i<t.length;i++){const n=t[i];if(n.label===r||r instanceof RegExp&&r.test(n.label))return n}if(e)for(let i=0;i<t.length;i++){const s=t[i].getChildByLabel(r,!0);if(s)return s}return null},getChildrenByLabel(r,e=!1,t=[]){const i=this.children;for(let n=0;n<i.length;n++){const s=i[n];(s.label===r||r instanceof RegExp&&r.test(s.label))&&t.push(s)}if(e)for(let n=0;n<i.length;n++)i[n].getChildrenByLabel(r,!0,t);return t}},Fi=new Ba(se),Bi=new Ba(Mt);function Ua(r,e,t){t.clear();let i,n;return r.parent?e?i=r.parent.worldTransform:(n=Fi.get().identity(),i=ro(r,n)):i=se.IDENTITY,gc(r,t,i,e),n&&Fi.return(n),t.isValid||t.set(0,0,0,0),t}function gc(r,e,t,i){var a,l;if(!r.visible||!r.measurable)return;let n;i?n=r.worldTransform:(r.updateLocalTransform(),n=Fi.get(),n.appendFrom(r.localTransform,t));const s=e,o=!!r.effects.length;if(o&&(e=Bi.get().clear()),r.boundsArea)e.addRect(r.boundsArea,n);else{r.addBounds&&(e.matrix=n,r.addBounds(e));for(let u=0;u<r.children.length;u++)gc(r.children[u],e,n,i)}if(o){for(let u=0;u<r.effects.length;u++)(l=(a=r.effects[u]).addBounds)==null||l.call(a,e);s.addBounds(e,se.IDENTITY),Bi.return(e)}i||Fi.return(n)}function ro(r,e){const t=r.parent;return t&&(ro(t,e),t.updateLocalTransform(),e.append(t.localTransform)),e}let Da=0;const _c=500;function le(...r){Da!==_c&&(Da++,Da===_c?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...r))}function Ga(r,e,t){return e.clear(),t||(t=se.IDENTITY),xc(r,e,t,r,!0),e.isValid||e.set(0,0,0,0),e}function xc(r,e,t,i,n){var l,u;let s;if(n)s=Fi.get(),s=t.copyTo(s);else{if(!r.visible||!r.measurable)return;r.updateLocalTransform();const h=r.localTransform;s=Fi.get(),s.appendFrom(h,t)}const o=e,a=!!r.effects.length;if(a&&(e=Bi.get().clear()),r.boundsArea)e.addRect(r.boundsArea,s);else{r.renderPipeId&&(e.matrix=s,r.addBounds(e));const h=r.children;for(let c=0;c<h.length;c++)xc(h[c],e,s,i,!1)}if(a){for(let h=0;h<r.effects.length;h++)(u=(l=r.effects[h]).addLocalBounds)==null||u.call(l,e,i);o.addBounds(e,se.IDENTITY),Bi.return(e)}Fi.return(s)}function vc(r,e){const t=r.children;for(let i=0;i<t.length;i++){const n=t[i],s=n.uid,o=(n._didViewChangeTick&65535)<<16|n._didContainerChangeTick&65535,a=e.index;(e.data[a]!==s||e.data[a+1]!==o)&&(e.data[e.index]=s,e.data[e.index+1]=o,e.didChange=!0),e.index=a+2,n.children.length&&vc(n,e)}return e.didChange}const Qx=new se,Jx={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(r,e){const t=Math.sign(this.scale.x)||1;e!==0?this.scale.x=r/e*t:this.scale.x=t},_setHeight(r,e){const t=Math.sign(this.scale.y)||1;e!==0?this.scale.y=r/e*t:this.scale.y=t},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Mt});const r=this._localBoundsCacheData;return r.index=1,r.didChange=!1,r.data[0]!==this._didViewChangeTick&&(r.didChange=!0,r.data[0]=this._didViewChangeTick),vc(this,r),r.didChange&&Ga(this,r.localBounds,Qx),r.localBounds},getBounds(r,e){return Ua(this,r,e||new Mt)}},ev={_onRender:null,set onRender(r){const e=this.renderGroup||this.parentRenderGroup;if(!r){this._onRender&&(e==null||e.removeOnRender(this)),this._onRender=null;return}this._onRender||e==null||e.addOnRender(this),this._onRender=r},get onRender(){return this._onRender}},tv={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(r){this._zIndex!==r&&(this._zIndex=r,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(iv))}};function iv(r,e){return r._zIndex-e._zIndex}const rv={getGlobalPosition(r=new Ge,e=!1){return this.parent?this.parent.toGlobal(this._position,r,e):(r.x=this._position.x,r.y=this._position.y),r},toGlobal(r,e,t=!1){if(!t){this.updateLocalTransform();const i=ro(this,new se);return i.append(this.localTransform),i.apply(r,e)}return this.worldTransform.apply(r,e)},toLocal(r,e,t,i){if(e&&(r=e.toGlobal(r,t,i)),!i){this.updateLocalTransform();const n=ro(this,new se);return n.append(this.localTransform),n.applyInverse(r,t)}return this.worldTransform.applyInverse(r,t)}};let nv=0;class yc{constructor(){this.uid=qe("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.tick=0}reset(){this.instructionSize=0,this.tick=nv++}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class sv{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new se,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new yc,this._onRenderContainers=[]}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const t=e.children;for(let i=0;i<t.length;i++)this.addChild(t[i])}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const t=this.childrenToUpdate[e];t.list.fill(null),t.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const t=this.renderGroupChildren.indexOf(e);t>-1&&this.renderGroupChildren.splice(t,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const t=e.children;for(let i=0;i<t.length;i++)this.addChild(t[i])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const t=e.children;for(let i=0;i<t.length;i++)this.removeChild(t[i])}removeChildren(e){for(let t=0;t<e.length;t++)this.removeChild(e[t])}onChildUpdate(e){let t=this.childrenToUpdate[e.relativeRenderGroupDepth];t||(t=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),t.list[t.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e),e.didViewUpdate=!1)}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const t=this.root.children;for(let i=0;i<t.length;i++)this._getChildren(t[i],e);return e}_getChildren(e,t=[]){if(t.push(e),e.renderGroup)return t;const i=e.children;for(let n=0;n<i.length;n++)this._getChildren(i[n],t);return t}}function ov(r,e,t={}){for(const i in e)!t[i]&&e[i]!==void 0&&(r[i]=e[i])}const za=new xt(null),La=new xt(null),Na=new xt(null,1,1),no=1,$a=2,Dn=4;class ue extends nt{constructor(e={}){var t,i;super(),this.uid=qe("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new se,this.relativeGroupTransform=new se,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new xt(this,0,0),this._scale=Na,this._pivot=La,this._skew=za,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],ov(this,e,{children:!0,parent:!0,effects:!0}),(t=e.children)==null||t.forEach(n=>this.addChild(n)),(i=e.parent)==null||i.addChild(this)}static mixin(e){Object.defineProperties(ue.prototype,Object.getOwnPropertyDescriptors(e))}set _didChangeId(e){this._didViewChangeTick=e>>12&4095,this._didContainerChangeTick=e&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...e){if(this.allowChildren||Y(Me,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let n=0;n<e.length;n++)this.addChild(e[n]);return e[0]}const t=e[0];if(t.parent===this)return this.children.splice(this.children.indexOf(t),1),this.children.push(t),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),t;t.parent&&t.parent.removeChild(t),this.children.push(t),this.sortableChildren&&(this.sortDirty=!0),t.parent=this,t.didChange=!0,t._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(t),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this),this._didViewChangeTick++,t._zIndex!==0&&t.depthOfChildModified(),t}removeChild(...e){if(e.length>1){for(let n=0;n<e.length;n++)this.removeChild(e[n]);return e[0]}const t=e[0],i=this.children.indexOf(t);return i>-1&&(this._didViewChangeTick++,this.children.splice(i,1),this.renderGroup?this.renderGroup.removeChild(t):this.parentRenderGroup&&this.parentRenderGroup.removeChild(t),t.parent=null,this.emit("childRemoved",t,this,i),t.emit("removed",this)),t}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),this.renderGroup=Re.get(sv,this),this.groupTransform=se.IDENTITY,e==null||e.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),Re.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e==null||e.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new se),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*Rx}set angle(e){this.rotation=e*Qr}get pivot(){return this._pivot===La&&(this._pivot=new xt(this,0,0)),this._pivot}set pivot(e){this._pivot===La&&(this._pivot=new xt(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===za&&(this._skew=new xt(this,0,0)),this._skew}set skew(e){this._skew===za&&(this._skew=new xt(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===Na&&(this._scale=new xt(this,1,1)),this._scale}set scale(e){this._scale===Na&&(this._scale=new xt(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const t=this.getLocalBounds().width;this._setWidth(e,t)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const t=this.getLocalBounds().height;this._setHeight(e,t)}getSize(e){e||(e={});const t=this.getLocalBounds();return e.width=Math.abs(this.scale.x*t.width),e.height=Math.abs(this.scale.y*t.height),e}setSize(e,t){const i=this.getLocalBounds();typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,i.width),t!==void 0&&this._setHeight(t,i.height)}_updateSkew(){const e=this._rotation,t=this._skew;this._cx=Math.cos(e+t._y),this._sx=Math.sin(e+t._y),this._cy=-Math.sin(e-t._x),this._sy=Math.cos(e-t._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){const e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e)return;this._didLocalTransformChangeId=e;const t=this.localTransform,i=this._scale,n=this._pivot,s=this._position,o=i._x,a=i._y,l=n._x,u=n._y;t.a=this._cx*o,t.b=this._sx*o,t.c=this._cy*a,t.d=this._sy*a,t.tx=s._x-(l*t.a+u*t.c),t.ty=s._y-(l*t.b+u*t.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=no,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const i=ae.shared.setValue(e??16777215).toBgrNumber();i!==this.localColor&&(this.localColor=i,this._updateFlags|=no,this._onUpdate())}get tint(){const e=this.localColor;return((e&255)<<16)+(e&65280)+(e>>16&255)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=$a,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const t=e?2:0;(this.localDisplayStatus&2)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Dn,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const t=e?0:4;(this.localDisplayStatus&4)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Dn,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const t=e?1:0;(this.localDisplayStatus&1)!==t&&(this._updateFlags|=Dn,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){var n;if(this.destroyed)return;this.destroyed=!0;const t=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.children)for(let s=0;s<t.length;++s)t[s].destroy(e);(n=this.renderGroup)==null||n.destroy(),this.renderGroup=null}}ue.mixin(Yx),ue.mixin(rv),ue.mixin(ev),ue.mixin(Jx),ue.mixin(Kx),ue.mixin(Zx),ue.mixin(tv),ue.mixin(jx);class so extends ue{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=0,this._lastInstructionTick=-1,this._bounds=new Mt(0,1,0,0),this._boundsDirty=!0}_updateBounds(){}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}containsPoint(e){const t=this.bounds,{x:i,y:n}=e;return i>=t.minX&&i<=t.maxX&&n>=t.minY&&n<=t.maxY}onViewUpdate(){if(this._didViewChangeTick++,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){super.destroy(e),this._bounds=null}}class Ie extends so{constructor(e=X.EMPTY){e instanceof X&&(e={texture:e});const{texture:t=X.EMPTY,anchor:i,roundPixels:n,width:s,height:o,...a}=e;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBoundsDirty=!0,this._anchor=new xt({_onUpdate:()=>{this.onViewUpdate()}}),i?this.anchor=i:t.defaultAnchor&&(this.anchor=t.defaultAnchor),this.texture=t,this.allowChildren=!1,this.roundPixels=n??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(e,t=!1){return e instanceof X?new Ie(e):new Ie(X.from(e,t))}set texture(e){e||(e=X.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(e){const t=this.sourceBounds;return e.x>=t.maxX&&e.x<=t.minX&&e.y>=t.maxY&&e.y<=t.minY}addBounds(e){const t=this._texture.trim?this.sourceBounds:this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}onViewUpdate(){this._sourceBoundsDirty=this._boundsDirty=!0,super.onViewUpdate()}_updateBounds(){eo(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const e=this._anchor,t=this._texture,i=this._sourceBounds,{width:n,height:s}=t.orig;i.maxX=-e._x*n,i.minX=i.maxX+n,i.maxY=-e._y*s,i.minY=i.maxY+s}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const i=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(i)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,this._texture.orig.width),t!==void 0&&this._setHeight(t,this._texture.orig.height)}}const av=new Mt;function bc(r,e,t){const i=av;r.measurable=!0,Ua(r,t,i),e.addBoundsMask(i),r.measurable=!1}function Sc(r,e,t){const i=Bi.get();r.measurable=!0;const n=Fi.get().identity(),s=wc(r,t,n);Ga(r,i,s),r.measurable=!1,e.addBoundsMask(i),Fi.return(n),Bi.return(i)}function wc(r,e,t){return r?(r!==e&&(wc(r.parent,e,t),r.updateLocalTransform(),t.append(r.localTransform)),t):(le("Mask bounds, renderable is not inside the root container"),t)}class Tc{constructor(e){this.priority=0,this.inverse=!1,this.pipe="alphaMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof Ie),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,t){this.inverse||bc(this.mask,e,t)}addLocalBounds(e,t){Sc(this.mask,e,t)}containsPoint(e,t){const i=this.mask;return t(i,e)}destroy(){this.reset()}static test(e){return e instanceof Ie}}Tc.extension=M.MaskEffect;class Cc{constructor(e){this.priority=0,this.pipe="colorMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}Cc.extension=M.MaskEffect;class Pc{constructor(e){this.priority=0,this.pipe="stencilMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,t){bc(this.mask,e,t)}addLocalBounds(e,t){Sc(this.mask,e,t)}containsPoint(e,t){const i=this.mask;return t(i,e)}destroy(){this.reset()}static test(e){return e instanceof ue}}Pc.extension=M.MaskEffect;let Ac={createCanvas:(r,e)=>{const t=document.createElement("canvas");return t.width=r,t.height=e,t},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(r,e)=>fetch(r,e),parseXML:r=>new DOMParser().parseFromString(r,"text/xml")};const Se={get(){return Ac},set(r){Ac=r}};class br extends st{constructor(e){e.resource||(e.resource=Se.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity;const t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,t=this.height,i=this._resolution){const n=super.resize(e,t,i);return n&&this.resizeCanvas(),n}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}br.extension=M.TextureSource;class Sr extends st{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const t=Se.get().createCanvas(e.resource.width,e.resource.height);t.getContext("2d").drawImage(e.resource,0,0,e.resource.width,e.resource.height),e.resource=t,le("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}Sr.extension=M.TextureSource;var Gn=(r=>(r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY",r))(Gn||{});class Va{constructor(e,t=null,i=0,n=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=t,this.priority=i,this._once=n}match(e,t=null){return this._fn===e&&this._context===t}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const t=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),t}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const t=this.next;return this.next=e?null:t,this.previous=null,t}}const Ec=class qt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Va(null,null,1/0),this.deltaMS=1/qt.targetFPMS,this.elapsedMS=1/qt.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,t,i=Gn.NORMAL){return this._addListener(new Va(e,t,i))}addOnce(e,t,i=Gn.NORMAL){return this._addListener(new Va(e,t,i,!0))}_addListener(e){let t=this._head.next,i=this._head;if(!t)e.connect(i);else{for(;t;){if(e.priority>t.priority){e.connect(i);break}i=t,t=t.next}e.previous||e.connect(i)}return this._startIfPossible(),this}remove(e,t){let i=this._head.next;for(;i;)i.match(e,t)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){const s=e-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=e-s%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*qt.targetFPMS;const i=this._head;let n=i.next;for(;n;)n=n.emit(this);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const t=Math.min(this.maxFPS,e),i=Math.min(Math.max(0,t)/1e3,qt.targetFPMS);this._maxElapsedMS=1/i}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}static get shared(){if(!qt._shared){const e=qt._shared=new qt;e.autoStart=!0,e._protected=!0}return qt._shared}static get system(){if(!qt._system){const e=qt._system=new qt;e.autoStart=!0,e._protected=!0}return qt._system}};Ec.targetFPMS=.06;let pt=Ec,Ha;async function Mc(){return Ha??(Ha=(async()=>{var o;const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const t=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!t)return"premultiply-alpha-on-upload";const i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i);const n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);const s=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,s),e.deleteFramebuffer(n),e.deleteTexture(i),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Ha}const oo=class C0 extends st{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...C0.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=pt.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,t=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(t.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await Mc(),this._load=new Promise((i,n)=>{this.isValid?i(this):(this._resolve=i,this._reject=n,t.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(pt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(pt.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(pt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};oo.extension=M.TextureSource,oo.defaultOptions={...st.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1},oo.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let ao=oo;const si=(r,e,t=!1)=>(Array.isArray(r)||(r=[r]),e?r.map(i=>typeof i=="string"||t?e(i):i):r);class lv{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const t=this._cache.get(e);return t||le(`[Assets] Asset id ${e} was not found in the Cache`),t}set(e,t){const i=si(e);let n;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(t)){n=u.getCacheableAssets(i,t);break}}const s=new Map(Object.entries(n||{}));n||i.forEach(l=>{s.set(l,t)});const o=[...s.keys()],a={cacheKeys:o,keys:i};i.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=n?n[l]:t;this._cache.has(l)&&this._cache.get(l)!==u&&le("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(e){if(!this._cacheMap.has(e)){le(`[Assets] Asset id ${e} was not found in the Cache`);return}const t=this._cacheMap.get(e);t.cacheKeys.forEach(n=>{this._cache.delete(n)}),t.keys.forEach(n=>{this._cacheMap.delete(n)})}get parsers(){return this._parsers}}const $e=new lv,Wa=[];oe.handleByList(M.TextureSource,Wa);function Rc(r={}){const e=r&&r.resource,t=e?r.resource:r,i=e?r:{resource:r};for(let n=0;n<Wa.length;n++){const s=Wa[n];if(s.test(t))return new s(i)}throw new Error(`Could not find a source type for resource: ${i.resource}`)}function uv(r={},e=!1){const t=r&&r.resource,i=t?r.resource:r,n=t?r:{resource:r};if(!e&&$e.has(i))return $e.get(i);const s=new X({source:Rc(n)});return s.on("destroy",()=>{$e.has(i)&&$e.remove(i)}),e||$e.set(i,s),s}function hv(r,e=!1){return typeof r=="string"?$e.get(r):r instanceof st?new X({source:r}):uv(r,e)}X.from=hv,st.from=Rc,oe.add(Tc,Cc,Pc,ao,Sr,br,Ea);var ki=(r=>(r[r.Low=0]="Low",r[r.Normal=1]="Normal",r[r.High=2]="High",r))(ki||{});function oi(r){if(typeof r!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(r)}`)}function zn(r){return r.split("?")[0].split("#")[0]}function cv(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function dv(r,e,t){return r.replace(new RegExp(cv(e),"g"),t)}function fv(r,e){let t="",i=0,n=-1,s=0,o=-1;for(let a=0;a<=r.length;++a){if(a<r.length)o=r.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(n===a-1||s===1))if(n!==a-1&&s===2){if(t.length<2||i!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){const l=t.lastIndexOf("/");if(l!==t.length-1){l===-1?(t="",i=0):(t=t.slice(0,l),i=t.length-1-t.lastIndexOf("/")),n=a,s=0;continue}}else if(t.length===2||t.length===1){t="",i=0,n=a,s=0;continue}}}else t.length>0?t+=`/${r.slice(n+1,a)}`:t=r.slice(n+1,a),i=a-n-1;n=a,s=0}else o===46&&s!==-1?++s:s=-1}return t}const mt={toPosix(r){return dv(r,"\\","/")},isUrl(r){return/^https?:/.test(this.toPosix(r))},isDataUrl(r){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(r)},isBlobUrl(r){return r.startsWith("blob:")},hasProtocol(r){return/^[^/:]+:/.test(this.toPosix(r))},getProtocol(r){oi(r),r=this.toPosix(r);const e=/^file:\/\/\//.exec(r);if(e)return e[0];const t=/^[^/:]+:\/{0,2}/.exec(r);return t?t[0]:""},toAbsolute(r,e,t){if(oi(r),this.isDataUrl(r)||this.isBlobUrl(r))return r;const i=zn(this.toPosix(e??Se.get().getBaseUrl())),n=zn(this.toPosix(t??this.rootname(i)));return r=this.toPosix(r),r.startsWith("/")?mt.join(n,r.slice(1)):this.isAbsolute(r)?r:this.join(i,r)},normalize(r){if(oi(r),r.length===0)return".";if(this.isDataUrl(r)||this.isBlobUrl(r))return r;r=this.toPosix(r);let e="";const t=r.startsWith("/");this.hasProtocol(r)&&(e=this.rootname(r),r=r.slice(e.length));const i=r.endsWith("/");return r=fv(r),r.length>0&&i&&(r+="/"),t?`/${r}`:e+r},isAbsolute(r){return oi(r),r=this.toPosix(r),this.hasProtocol(r)?!0:r.startsWith("/")},join(...r){if(r.length===0)return".";let e;for(let t=0;t<r.length;++t){const i=r[t];if(oi(i),i.length>0)if(e===void 0)e=i;else{const n=r[t-1]??"";this.joinExtensions.includes(this.extname(n).toLowerCase())?e+=`/../${i}`:e+=`/${i}`}}return e===void 0?".":this.normalize(e)},dirname(r){if(oi(r),r.length===0)return".";r=this.toPosix(r);let e=r.charCodeAt(0);const t=e===47;let i=-1,n=!0;const s=this.getProtocol(r),o=r;r=r.slice(s.length);for(let a=r.length-1;a>=1;--a)if(e=r.charCodeAt(a),e===47){if(!n){i=a;break}}else n=!1;return i===-1?t?"/":this.isUrl(o)?s+r:s:t&&i===1?"//":s+r.slice(0,i)},rootname(r){oi(r),r=this.toPosix(r);let e="";if(r.startsWith("/")?e="/":e=this.getProtocol(r),this.isUrl(r)){const t=r.indexOf("/",e.length);t!==-1?e=r.slice(0,t):e=r,e.endsWith("/")||(e+="/")}return e},basename(r,e){oi(r),e&&oi(e),r=zn(this.toPosix(r));let t=0,i=-1,n=!0,s;if(e!==void 0&&e.length>0&&e.length<=r.length){if(e.length===r.length&&e===r)return"";let o=e.length-1,a=-1;for(s=r.length-1;s>=0;--s){const l=r.charCodeAt(s);if(l===47){if(!n){t=s+1;break}}else a===-1&&(n=!1,a=s+1),o>=0&&(l===e.charCodeAt(o)?--o===-1&&(i=s):(o=-1,i=a))}return t===i?i=a:i===-1&&(i=r.length),r.slice(t,i)}for(s=r.length-1;s>=0;--s)if(r.charCodeAt(s)===47){if(!n){t=s+1;break}}else i===-1&&(n=!1,i=s+1);return i===-1?"":r.slice(t,i)},extname(r){oi(r),r=zn(this.toPosix(r));let e=-1,t=0,i=-1,n=!0,s=0;for(let o=r.length-1;o>=0;--o){const a=r.charCodeAt(o);if(a===47){if(!n){t=o+1;break}continue}i===-1&&(n=!1,i=o+1),a===46?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||i===-1||s===0||s===1&&e===i-1&&e===t+1?"":r.slice(e,i)},parse(r){oi(r);const e={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return e;r=zn(this.toPosix(r));let t=r.charCodeAt(0);const i=this.isAbsolute(r);let n;e.root=this.rootname(r),i||this.hasProtocol(r)?n=1:n=0;let s=-1,o=0,a=-1,l=!0,u=r.length-1,h=0;for(;u>=n;--u){if(t=r.charCodeAt(u),t===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),t===46?s===-1?s=u:h!==1&&(h=1):s!==-1&&(h=-1)}return s===-1||a===-1||h===0||h===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&i?e.base=e.name=r.slice(1,a):e.base=e.name=r.slice(o,a)):(o===0&&i?(e.name=r.slice(1,s),e.base=r.slice(1,a)):(e.name=r.slice(o,s),e.base=r.slice(o,a)),e.ext=r.slice(s,a)),e.dir=this.dirname(r),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function Ic(r,e,t,i,n){const s=e[t];for(let o=0;o<s.length;o++){const a=s[o];t<e.length-1?Ic(r.replace(i[t],a),e,t+1,i,n):n.push(r.replace(i[t],a))}}function pv(r){const e=/\{(.*?)\}/g,t=r.match(e),i=[];if(t){const n=[];t.forEach(s=>{const o=s.substring(1,s.length-1).split(",");n.push(o)}),Ic(r,n,0,t,i)}else i.push(r);return i}const lo=r=>!Array.isArray(r);class tn{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(t=>{this._preferredOrder.push(t),t.priority||(t.priority=Object.keys(t.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const t=e;this._defaultSearchParams=Object.keys(t).map(i=>`${encodeURIComponent(i)}=${encodeURIComponent(t[i])}`).join("&")}}getAlias(e){const{alias:t,src:i}=e;return si(t||i,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(e){this._manifest&&le("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(t=>{this.addBundle(t.name,t.assets)})}addBundle(e,t){const i=[];let n=t;Array.isArray(t)||(n=Object.entries(t).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),n.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(e,a);i.push(u),l=[a,u]}else{const u=a.map(h=>this._createBundleAssetId(e,h));i.push(...u),l=[...a,...u]}this.add({...s,alias:l,src:o})}),this._bundles[e]=i}add(e){const t=[];Array.isArray(e)?t.push(...e):t.push(e);let i;i=s=>{this.hasKey(s)&&le(`[Resolver] already has key: ${s} overwriting`)},si(t).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:u}=s;const h=si(o).map(f=>typeof f=="string"?pv(f):Array.isArray(f)?f:[f]),c=this.getAlias(s);Array.isArray(c)?c.forEach(i):i(c);const d=[];h.forEach(f=>{f.forEach(g=>{let m={};if(typeof g!="object"){m.src=g;for(let _=0;_<this._parsers.length;_++){const y=this._parsers[_];if(y.test(g)){m=y.parse(g);break}}}else a=g.data??a,l=g.format??l,u=g.loadParser??u,m={...m,...g};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${m.src}`);m=this._buildResolvedAsset(m,{aliases:c,data:a,format:l,loadParser:u}),d.push(m)})}),c.forEach(f=>{this._assetMap[f]=d})})}resolveBundle(e){const t=lo(e);e=si(e);const i={};return e.forEach(n=>{const s=this._bundles[n];if(s){const o=this.resolve(s),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(n,l)]=u}i[n]=a}}),t?i[e[0]]:i}resolveUrl(e){const t=this.resolve(e);if(typeof e!="string"){const i={};for(const n in t)i[n]=t[n].src;return i}return t.src}resolve(e){const t=lo(e);e=si(e);const i={};return e.forEach(n=>{if(!this._resolverHash[n])if(this._assetMap[n]){let s=this._assetMap[n];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=s.filter(h=>h[a]?h[a]===l:!1);u.length&&(s=u)})}),this._resolverHash[n]=s[0]}else this._resolverHash[n]=this._buildResolvedAsset({alias:[n],src:n},{});i[n]=this._resolverHash[n]}),t?i[e[0]]:i}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let t=0;t<e.length;t++){const i=e[0],n=this._preferredOrder.find(s=>s.params.format.includes(i.format));if(n)return n}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}_buildResolvedAsset(e,t){const{aliases:i,data:n,loadParser:s,format:o}=t;return(this._basePath||this._rootPath)&&(e.src=mt.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=i??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...n||{},...e.data},e.loadParser=s??e.loadParser,e.format=o??e.format??mv(e.src),e}}tn.RETINA_PREFIX=/@([0-9\.]+)x/;function mv(r){return r.split(".").pop().split("?").shift().split("#").shift()}const ja=(r,e)=>{const t=e.split("?")[1];return t&&(r+=`?${t}`),r},Oc=class Ks{constructor(e,t){this.linkedSheets=[],this._texture=e instanceof X?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=t;const i=parseFloat(t.meta.scale);i?(this.resolution=i,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=Ks.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let t=e;const i=Ks.BATCH_SIZE;for(;t-e<i&&t<this._frameKeys.length;){const n=this._frameKeys[t],s=this._frames[n],o=s.frame;if(o){let a=null,l=null;const u=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,h=new De(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);s.rotated?a=new De(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new De(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new De(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[n]=new X({source:this.textureSource,frame:a,orig:h,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:n.toString()})}t++}}_processAnimations(){const e=this.data.animations||{};for(const t in e){this.animations[t]=[];for(let i=0;i<e[t].length;i++){const n=e[t][i];this.animations[t].push(this.textures[n])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Ks.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Ks.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var t;for(const i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)==null||t.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Oc.BATCH_SIZE=1e3;let Fc=Oc;const gv=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Bc(r,e,t){const i={};if(r.forEach(n=>{i[n]=e}),Object.keys(e.textures).forEach(n=>{i[n]=e.textures[n]}),!t){const n=mt.dirname(r[0]);e.linkedSheets.forEach((s,o)=>{const a=Bc([`${n}/${e.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(i,a)})}return i}const _v={extension:M.Asset,cache:{test:r=>r instanceof Fc,getCacheableAssets:(r,e)=>Bc(r,e,!1)},resolver:{extension:{type:M.ResolveParser,name:"resolveSpritesheet"},test:r=>{const t=r.split("?")[0].split("."),i=t.pop(),n=t.pop();return i==="json"&&gv.includes(n)},parse:r=>{var t;const e=r.split(".");return{resolution:parseFloat(((t=tn.RETINA_PREFIX.exec(r))==null?void 0:t[1])??"1"),format:e[e.length-2],src:r}}},loader:{name:"spritesheetLoader",extension:{type:M.LoadParser,priority:ki.Normal,name:"spritesheetLoader"},async testParse(r,e){return mt.extname(e.src).toLowerCase()===".json"&&!!r.frames},async parse(r,e,t){var u,h;const{texture:i,imageFilename:n}=(e==null?void 0:e.data)??{};let s=mt.dirname(e.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(i instanceof X)o=i;else{const c=ja(s+(n??r.meta.image),e.src);o=(await t.load([c]))[c]}const a=new Fc(o.source,r);await a.parse();const l=(u=r==null?void 0:r.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const c=[];for(const f of l){if(typeof f!="string")continue;let g=s+f;(h=e.data)!=null&&h.ignoreMultiPack||(g=ja(g,e.src),c.push(t.load({src:g,data:{ignoreMultiPack:!0}})))}const d=await Promise.all(c);a.linkedSheets=d,d.forEach(f=>{f.linkedSheets=[a].concat(a.linkedSheets.filter(g=>g!==f))})}return a},async unload(r,e,t){await t.unload(r.textureSource._sourceOrigin),r.destroy(!1)}}};oe.add(_v);class Ln{constructor(e){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=Ln.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new Ge,this.page=new Ge,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=e}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(e,t,i){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(e,t,i,n,s){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}var Xa=/iPhone/i,kc=/iPod/i,Uc=/iPad/i,Dc=/\biOS-universal(?:.+)Mac\b/i,Ya=/\bAndroid(?:.+)Mobile\b/i,Gc=/Android/i,rn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,uo=/Silk/i,Ui=/Windows Phone/i,zc=/\bWindows(?:.+)ARM\b/i,Lc=/BlackBerry/i,Nc=/BB10/i,$c=/Opera Mini/i,Vc=/\b(CriOS|Chrome)(?:.+)Mobile/i,Hc=/Mobile(?:.+)Firefox\b/i,Wc=function(r){return typeof r<"u"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream>"u"};function xv(r){return function(e){return e.test(r)}}function jc(r){var e={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator<"u"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?e.userAgent=r:r&&r.userAgent&&(e={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var t=e.userAgent,i=t.split("[FBAN");typeof i[1]<"u"&&(t=i[0]),i=t.split("Twitter"),typeof i[1]<"u"&&(t=i[0]);var n=xv(t),s={apple:{phone:n(Xa)&&!n(Ui),ipod:n(kc),tablet:!n(Xa)&&(n(Uc)||Wc(e))&&!n(Ui),universal:n(Dc),device:(n(Xa)||n(kc)||n(Uc)||n(Dc)||Wc(e))&&!n(Ui)},amazon:{phone:n(rn),tablet:!n(rn)&&n(uo),device:n(rn)||n(uo)},android:{phone:!n(Ui)&&n(rn)||!n(Ui)&&n(Ya),tablet:!n(Ui)&&!n(rn)&&!n(Ya)&&(n(uo)||n(Gc)),device:!n(Ui)&&(n(rn)||n(uo)||n(Ya)||n(Gc))||n(/\bokhttp\b/i)},windows:{phone:n(Ui),tablet:n(zc),device:n(Ui)||n(zc)},other:{blackberry:n(Lc),blackberry10:n(Nc),opera:n($c),firefox:n(Hc),chrome:n(Vc),device:n(Lc)||n(Nc)||n($c)||n(Hc)||n(Vc)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const Yi=(jc.default??jc)(globalThis.navigator),vv=9,ho=100,yv=0,bv=0,Xc=2,Yc=1,Sv=-1e3,wv=-1e3,Tv=2;class qc{constructor(e,t=Yi){this._mobileInfo=t,this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this._pool=[],this._renderId=0,this._children=[],this._androidUpdateCount=0,this._androidUpdateFrequency=500,this._hookDiv=null,(t.tablet||t.phone)&&this._createTouchHook();const i=document.createElement("div");i.style.width=`${ho}px`,i.style.height=`${ho}px`,i.style.position="absolute",i.style.top=`${yv}px`,i.style.left=`${bv}px`,i.style.zIndex=Xc.toString(),this._div=i,this._renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}get hookDiv(){return this._hookDiv}_createTouchHook(){const e=document.createElement("button");e.style.width=`${Yc}px`,e.style.height=`${Yc}px`,e.style.position="absolute",e.style.top=`${Sv}px`,e.style.left=`${wv}px`,e.style.zIndex=Tv.toString(),e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",()=>{this._isMobileAccessibility=!0,this._activate(),this._destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e}_destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)}_activate(){var e;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.add(this),(e=this._renderer.view.canvas.parentNode)==null||e.appendChild(this._div))}_deactivate(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.remove(this),(e=this._div.parentNode)==null||e.removeChild(this._div))}_updateAccessibleObjects(e){if(!e.visible||!e.accessibleChildren)return;e.accessible&&e.isInteractive()&&(e._accessibleActive||this._addChild(e),e._renderId=this._renderId);const t=e.children;if(t)for(let i=0;i<t.length;i++)this._updateAccessibleObjects(t[i])}init(e){this.debug=(e==null?void 0:e.debug)??this.debug,this._renderer.runners.postrender.remove(this)}postrender(){const e=performance.now();if(this._mobileInfo.android.device&&e<this._androidUpdateCount||(this._androidUpdateCount=e+this._androidUpdateFrequency,!this._renderer.renderingToScreen||!this._renderer.view.canvas))return;this._renderer.lastObjectRendered&&this._updateAccessibleObjects(this._renderer.lastObjectRendered);const{x:t,y:i,width:n,height:s}=this._renderer.view.canvas.getBoundingClientRect(),{width:o,height:a,resolution:l}=this._renderer,u=n/o*l,h=s/a*l;let c=this._div;c.style.left=`${t}px`,c.style.top=`${i}px`,c.style.width=`${o}px`,c.style.height=`${a}px`;for(let d=0;d<this._children.length;d++){const f=this._children[d];if(f._renderId!==this._renderId)f._accessibleActive=!1,mc(this._children,d,1),this._div.removeChild(f._accessibleDiv),this._pool.push(f._accessibleDiv),f._accessibleDiv=null,d--;else{c=f._accessibleDiv;let g=f.hitArea;const m=f.worldTransform;f.hitArea?(c.style.left=`${(m.tx+g.x*m.a)*u}px`,c.style.top=`${(m.ty+g.y*m.d)*h}px`,c.style.width=`${g.width*m.a*u}px`,c.style.height=`${g.height*m.d*h}px`):(g=f.getBounds().rectangle,this._capHitArea(g),c.style.left=`${g.x*u}px`,c.style.top=`${g.y*h}px`,c.style.width=`${g.width*u}px`,c.style.height=`${g.height*h}px`,c.title!==f.accessibleTitle&&f.accessibleTitle!==null&&(c.title=f.accessibleTitle||""),c.getAttribute("aria-label")!==f.accessibleHint&&f.accessibleHint!==null&&c.setAttribute("aria-label",f.accessibleHint||"")),(f.accessibleTitle!==c.title||f.tabIndex!==c.tabIndex)&&(c.title=f.accessibleTitle||"",c.tabIndex=f.tabIndex,this.debug&&this._updateDebugHTML(c))}}this._renderId++}_updateDebugHTML(e){e.innerHTML=`type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`}_capHitArea(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);const{width:t,height:i}=this._renderer;e.x+e.width>t&&(e.width=t-e.x),e.y+e.height>i&&(e.height=i-e.y)}_addChild(e){let t=this._pool.pop();t||(t=document.createElement("button"),t.style.width=`${ho}px`,t.style.height=`${ho}px`,t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=Xc.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title=`container ${e.tabIndex}`),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this._updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.container=e,this._children.push(e),this._div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex}_dispatchEvent(e,t){const{container:i}=e.target,n=this._renderer.events.rootBoundary,s=Object.assign(new Ln(n),{target:i});n.rootTarget=this._renderer.lastObjectRendered,t.forEach(o=>n.dispatchEvent(s,o))}_onClick(e){this._dispatchEvent(e,["click","pointertap","tap"])}_onFocus(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive"),this._dispatchEvent(e,["mouseover"])}_onFocusOut(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite"),this._dispatchEvent(e,["mouseout"])}_onKeyDown(e){e.keyCode===vv&&this._activate()}_onMouseMove(e){e.movementX===0&&e.movementY===0||this._deactivate()}destroy(){this._destroyTouchHook(),this._div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this._pool=null,this._children=null,this._renderer=null}}qc.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"accessibility"};const Cv={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,_renderId:-1},qa=Object.create(null),Kc=Object.create(null);function Nn(r,e){let t=Kc[r];return t===void 0&&(qa[e]===void 0&&(qa[e]=1),Kc[r]=t=qa[e]++),t}let nn;function Zc(){return(!nn||nn!=null&&nn.isContextLost())&&(nn=Se.get().createCanvas().getContext("webgl",{})),nn}let co;function Pv(){if(!co){co="mediump";const r=Zc();r&&r.getShaderPrecisionFormat&&(co=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision?"highp":"mediump")}return co}function Av(r,e,t){return e?r:t?(r=r.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${r}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${r}
        `}function Ev(r,e,t){const i=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(r.substring(0,9)!=="precision"){let n=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;return n==="highp"&&i!=="highp"&&(n="mediump"),`precision ${n} float;
${r}`}else if(i!=="highp"&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}function Mv(r,e){return e?`#version 300 es
${r}`:r}const Rv={},Iv={};function Ov(r,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";const i=t?Rv:Iv;return i[e]?(i[e]++,e+=`-${i[e]}`):i[e]=1,r.indexOf("#define SHADER_NAME")!==-1?r:`${`#define SHADER_NAME ${e}`}
${r}`}function Fv(r,e){return e?r.replace("#version 300 es",""):r}const Ka={stripVersion:Fv,ensurePrecision:Ev,addProgramDefines:Av,setProgramName:Ov,insertVersion:Mv},Za=Object.create(null),Qc=class zh{constructor(e){e={...zh.defaultOptions,...e};const t=e.fragment.indexOf("#version 300 es")!==-1,i={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Pv()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let n=e.fragment,s=e.vertex;Object.keys(Ka).forEach(o=>{const a=i[o];n=Ka[o](n,a,!0),s=Ka[o](s,a,!1)}),this.fragment=n,this.vertex=s,this._key=Nn(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const t=`${e.vertex}:${e.fragment}`;return Za[t]||(Za[t]=new zh(e)),Za[t]}};Qc.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let de=Qc;const Jc={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function qi(r){return Jc[r]??Jc.float32}const Bv={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function kv({source:r,entryPoint:e}){const t={},i=r.indexOf(`fn ${e}`);if(i!==-1){const n=r.indexOf("->",i);if(n!==-1){const s=r.substring(i,n),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=Bv[a[3]]??"float32";t[a[2]]={location:parseInt(a[1],10),format:l,stride:qi(l).stride,offset:0,instance:!1,start:0}}}}return t}function Qa(r){var c,d;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,n=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(c=r.match(e))==null?void 0:c.map(f=>({group:parseInt(f.match(t)[1],10),binding:parseInt(f.match(i)[1],10),name:f.match(n)[2],isUniform:f.match(n)[1]==="<uniform>",type:f.match(s)[1]}));if(!u)return{groups:[],structs:[]};const h=((d=r.match(o))==null?void 0:d.map(f=>{const g=f.match(l)[1],m=f.match(a).reduce((_,y)=>{const[S,w]=y.split(":");return _[S.trim()]=w.trim(),_},{});return m?{name:g,members:m}:null}).filter(({name:f})=>u.some(g=>g.type===f)))??[];return{groups:u,structs:h}}var $n=(r=>(r[r.VERTEX=1]="VERTEX",r[r.FRAGMENT=2]="FRAGMENT",r[r.COMPUTE=4]="COMPUTE",r))($n||{});function Uv({groups:r}){const e=[];for(let t=0;t<r.length;t++){const i=r[t];e[i.group]||(e[i.group]=[]),i.isUniform?e[i.group].push({binding:i.binding,visibility:$n.VERTEX|$n.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?e[i.group].push({binding:i.binding,visibility:$n.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"&&e[i.group].push({binding:i.binding,visibility:$n.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Dv({groups:r}){const e=[];for(let t=0;t<r.length;t++){const i=r[t];e[i.group]||(e[i.group]={}),e[i.group][i.name]=i.binding}return e}function Gv(r,e){const t=new Set,i=new Set,n=[...r.structs,...e.structs].filter(o=>t.has(o.name)?!1:(t.add(o.name),!0)),s=[...r.groups,...e.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return i.has(a)?!1:(i.add(a),!0)});return{structs:n,groups:s}}const Ja=Object.create(null);class ce{constructor(e){var a,l;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:t,vertex:i,layout:n,gpuLayout:s,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=i,t.source===i.source){const u=Qa(t.source);this.structsAndGroups=u}else{const u=Qa(i.source),h=Qa(t.source);this.structsAndGroups=Gv(u,h)}this.layout=n??Dv(this.structsAndGroups),this.gpuLayout=s??Uv(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:t}=this,i=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=Nn(i,"program")}get attributeData(){return this._attributeData??(this._attributeData=kv(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return Ja[t]||(Ja[t]=new ce(e)),Ja[t]}}const ed=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],zv=ed.reduce((r,e)=>(r[e]=!0,r),{});function Lv(r,e){switch(r){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const td=class P0{constructor(e,t){this._touched=0,this.uid=qe("uniform"),this._resourceType="uniformGroup",this._resourceId=qe("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,t={...P0.defaultOptions,...t},this.uniformStructures=e;const i={};for(const n in e){const s=e[n];if(s.name=n,s.size=s.size??1,!zv[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${ed.join(", ")}`);s.value??(s.value=Lv(s.type,s.size)),i[n]=s.value}this.uniforms=i,this._dirtyId=1,this.ubo=t.ubo,this.isStatic=t.isStatic,this._signature=Nn(Object.keys(i).map(n=>`${n}-${e[n].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};td.defaultOptions={ubo:!1,isStatic:!1};let gt=td;class Di{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(const i in e){const n=e[i];this.setResource(n,t++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let t=0;for(const i in this.resources)e[t++]=this.resources[i]._resourceId;this._key=e.join("|")}setResource(e,t){var n,s;const i=this.resources[t];e!==i&&(i&&((n=e.off)==null||n.call(e,"change",this.onResourceChange,this)),(s=e.on)==null||s.call(e,"change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const t=this.resources;for(const i in t)t[i]._touched=e}destroy(){var t;const e=this.resources;for(const i in e){const n=e[i];(t=n.off)==null||t.call(n,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const t=this.resources;for(const i in t)t[i]===e&&(t[i]=null)}else this._updateKey()}}var zt=(r=>(r[r.WEBGL=1]="WEBGL",r[r.WEBGPU=2]="WEBGPU",r[r.BOTH=3]="BOTH",r))(zt||{});class Zt extends nt{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:i,groups:n,resources:s,compatibleRenderers:o,groupMap:a}=e;this.gpuProgram=t,this.glProgram=i,o===void 0&&(o=0,t&&(o|=zt.WEBGPU),i&&(o|=zt.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!n&&(s={}),s&&n)throw new Error("[Shader] Cannot have both resources and groups");if(!t&&n&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!t&&n&&a)for(const u in a)for(const h in a[u]){const c=a[u][h];l[c]={group:u,binding:h,name:c}}else if(t&&n&&!a){const u=t.structsAndGroups.groups;a={},u.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h})}else if(s){n={},a={},t&&t.structsAndGroups.groups.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const h in s)l[h]||(n[99]||(n[99]=new Di,this._ownedBindGroups.push(n[99])),l[h]={group:99,binding:u,name:h},a[99]=a[99]||{},a[99][u]=h,u++);for(const h in s){const c=h;let d=s[h];!d.source&&!d._resourceType&&(d=new gt(d));const f=l[c];f&&(n[f.group]||(n[f.group]=new Di,this._ownedBindGroups.push(n[f.group])),n[f.group].setResource(d,f.binding))}}this.groups=n,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(n,l)}addResource(e,t,i){var n,s;(n=this._uniformBindMap)[t]||(n[t]={}),(s=this._uniformBindMap[t])[i]||(s[i]=e),this.groups[t]||(this.groups[t]=new Di,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){const i={};for(const n in t){const s=t[n];Object.defineProperty(i,s.name,{get(){return e[s.group].getResource(s.binding)},set(o){e[s.group].setResource(o,s.binding)}})}return i}destroy(e=!1){var t,i;this.emit("destroy",this),e&&((t=this.gpuProgram)==null||t.destroy(),(i=this.glProgram)==null||i.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:t,gl:i,...n}=e;let s,o;return t&&(s=ce.from(t)),i&&(o=de.from(i)),new Zt({gpuProgram:s,glProgram:o,...n})}}const Nv={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},el=0,tl=1,il=2,rl=3,nl=4,sl=5,ol=class A0{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<el)}set blend(e){!!(this.data&1<<el)!==e&&(this.data^=1<<el)}get offsets(){return!!(this.data&1<<tl)}set offsets(e){!!(this.data&1<<tl)!==e&&(this.data^=1<<tl)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<il)}set culling(e){!!(this.data&1<<il)!==e&&(this.data^=1<<il)}get depthTest(){return!!(this.data&1<<rl)}set depthTest(e){!!(this.data&1<<rl)!==e&&(this.data^=1<<rl)}get depthMask(){return!!(this.data&1<<sl)}set depthMask(e){!!(this.data&1<<sl)!==e&&(this.data^=1<<sl)}get clockwiseFrontFace(){return!!(this.data&1<<nl)}set clockwiseFrontFace(e){!!(this.data&1<<nl)!==e&&(this.data^=1<<nl)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Nv[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new A0;return e.depthTest=!1,e.blend=!0,e}};ol.default2d=ol.for2d();let ai=ol;const id=class Lh extends Zt{constructor(e){e={...Lh.defaultOptions,...e},super(e),this.enabled=!0,this._state=ai.for2d(),this.blendMode=e.blendMode,this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.clipToViewport=e.clipToViewport,this.addResource("uTexture",0,1)}apply(e,t,i,n){e.applyFilter(this,t,i,n)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:t,gl:i,...n}=e;let s,o;return t&&(s=ce.from(t)),i&&(o=de.from(i)),new Lh({gpuProgram:s,glProgram:o,...n})}};id.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let _e=id;const al=[];oe.handleByNamedList(M.Environment,al);async function $v(r){if(!r)for(let e=0;e<al.length;e++){const t=al[e];if(t.value.test()){await t.value.load();return}}}let Vn;function rd(){if(typeof Vn=="boolean")return Vn;try{Vn=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Vn=!1}return Vn}var fo={exports:{}},nd;function Vv(){if(nd)return fo.exports;nd=1,fo.exports=r,fo.exports.default=r;function r(T,C,A){A=A||2;var I=C&&C.length,F=I?C[0]*A:T.length,z=e(T,0,F,A,!0),D=[];if(!z||z.next===z.prev)return D;var V,K,q,Te,Ue,xe,We;if(I&&(z=l(T,C,z,A)),T.length>80*A){V=q=T[0],K=Te=T[1];for(var Oe=A;Oe<F;Oe+=A)Ue=T[Oe],xe=T[Oe+1],Ue<V&&(V=Ue),xe<K&&(K=xe),Ue>q&&(q=Ue),xe>Te&&(Te=xe);We=Math.max(q-V,Te-K),We=We!==0?32767/We:0}return i(z,D,A,V,K,We,0),D}function e(T,C,A,I,F){var z,D;if(F===J(T,C,A,I)>0)for(z=C;z<A;z+=I)D=ee(z,T[z],T[z+1],D);else for(z=A-I;z>=C;z-=I)D=ee(z,T[z],T[z+1],D);return D&&P(D,D.next)&&(W(D),D=D.next),D}function t(T,C){if(!T)return T;C||(C=T);var A=T,I;do if(I=!1,!A.steiner&&(P(A,A.next)||w(A.prev,A,A.next)===0)){if(W(A),A=C=A.prev,A===A.next)break;I=!0}else A=A.next;while(I||A!==C);return C}function i(T,C,A,I,F,z,D){if(T){!D&&z&&f(T,I,F,z);for(var V=T,K,q;T.prev!==T.next;){if(K=T.prev,q=T.next,z?s(T,I,F,z):n(T)){C.push(K.i/A|0),C.push(T.i/A|0),C.push(q.i/A|0),W(T),T=q.next,V=q.next;continue}if(T=q,T===V){D?D===1?(T=o(t(T),C,A),i(T,C,A,I,F,z,2)):D===2&&a(T,C,A,I,F,z):i(t(T),C,A,I,F,z,1);break}}}}function n(T){var C=T.prev,A=T,I=T.next;if(w(C,A,I)>=0)return!1;for(var F=C.x,z=A.x,D=I.x,V=C.y,K=A.y,q=I.y,Te=F<z?F<D?F:D:z<D?z:D,Ue=V<K?V<q?V:q:K<q?K:q,xe=F>z?F>D?F:D:z>D?z:D,We=V>K?V>q?V:q:K>q?K:q,Oe=I.next;Oe!==C;){if(Oe.x>=Te&&Oe.x<=xe&&Oe.y>=Ue&&Oe.y<=We&&y(F,V,z,K,D,q,Oe.x,Oe.y)&&w(Oe.prev,Oe,Oe.next)>=0)return!1;Oe=Oe.next}return!0}function s(T,C,A,I){var F=T.prev,z=T,D=T.next;if(w(F,z,D)>=0)return!1;for(var V=F.x,K=z.x,q=D.x,Te=F.y,Ue=z.y,xe=D.y,We=V<K?V<q?V:q:K<q?K:q,Oe=Te<Ue?Te<xe?Te:xe:Ue<xe?Ue:xe,Ai=V>K?V>q?V:q:K>q?K:q,Et=Te>Ue?Te>xe?Te:xe:Ue>xe?Ue:xe,Je=m(We,Oe,C,A,I),Ei=m(Ai,Et,C,A,I),me=T.prevZ,fe=T.nextZ;me&&me.z>=Je&&fe&&fe.z<=Ei;){if(me.x>=We&&me.x<=Ai&&me.y>=Oe&&me.y<=Et&&me!==F&&me!==D&&y(V,Te,K,Ue,q,xe,me.x,me.y)&&w(me.prev,me,me.next)>=0||(me=me.prevZ,fe.x>=We&&fe.x<=Ai&&fe.y>=Oe&&fe.y<=Et&&fe!==F&&fe!==D&&y(V,Te,K,Ue,q,xe,fe.x,fe.y)&&w(fe.prev,fe,fe.next)>=0))return!1;fe=fe.nextZ}for(;me&&me.z>=Je;){if(me.x>=We&&me.x<=Ai&&me.y>=Oe&&me.y<=Et&&me!==F&&me!==D&&y(V,Te,K,Ue,q,xe,me.x,me.y)&&w(me.prev,me,me.next)>=0)return!1;me=me.prevZ}for(;fe&&fe.z<=Ei;){if(fe.x>=We&&fe.x<=Ai&&fe.y>=Oe&&fe.y<=Et&&fe!==F&&fe!==D&&y(V,Te,K,Ue,q,xe,fe.x,fe.y)&&w(fe.prev,fe,fe.next)>=0)return!1;fe=fe.nextZ}return!0}function o(T,C,A){var I=T;do{var F=I.prev,z=I.next.next;!P(F,z)&&E(F,I,I.next,z)&&R(F,z)&&R(z,F)&&(C.push(F.i/A|0),C.push(I.i/A|0),C.push(z.i/A|0),W(I),W(I.next),I=T=z),I=I.next}while(I!==T);return t(I)}function a(T,C,A,I,F,z){var D=T;do{for(var V=D.next.next;V!==D.prev;){if(D.i!==V.i&&S(D,V)){var K=Q(D,V);D=t(D,D.next),K=t(K,K.next),i(D,C,A,I,F,z,0),i(K,C,A,I,F,z,0);return}V=V.next}D=D.next}while(D!==T)}function l(T,C,A,I){var F=[],z,D,V,K,q;for(z=0,D=C.length;z<D;z++)V=C[z]*I,K=z<D-1?C[z+1]*I:T.length,q=e(T,V,K,I,!1),q===q.next&&(q.steiner=!0),F.push(_(q));for(F.sort(u),z=0;z<F.length;z++)A=h(F[z],A);return A}function u(T,C){return T.x-C.x}function h(T,C){var A=c(T,C);if(!A)return C;var I=Q(A,T);return t(I,I.next),t(A,A.next)}function c(T,C){var A=C,I=T.x,F=T.y,z=-1/0,D;do{if(F<=A.y&&F>=A.next.y&&A.next.y!==A.y){var V=A.x+(F-A.y)*(A.next.x-A.x)/(A.next.y-A.y);if(V<=I&&V>z&&(z=V,D=A.x<A.next.x?A:A.next,V===I))return D}A=A.next}while(A!==C);if(!D)return null;var K=D,q=D.x,Te=D.y,Ue=1/0,xe;A=D;do I>=A.x&&A.x>=q&&I!==A.x&&y(F<Te?I:z,F,q,Te,F<Te?z:I,F,A.x,A.y)&&(xe=Math.abs(F-A.y)/(I-A.x),R(A,T)&&(xe<Ue||xe===Ue&&(A.x>D.x||A.x===D.x&&d(D,A)))&&(D=A,Ue=xe)),A=A.next;while(A!==K);return D}function d(T,C){return w(T.prev,T,C.prev)<0&&w(C.next,T,T.next)<0}function f(T,C,A,I){var F=T;do F.z===0&&(F.z=m(F.x,F.y,C,A,I)),F.prevZ=F.prev,F.nextZ=F.next,F=F.next;while(F!==T);F.prevZ.nextZ=null,F.prevZ=null,g(F)}function g(T){var C,A,I,F,z,D,V,K,q=1;do{for(A=T,T=null,z=null,D=0;A;){for(D++,I=A,V=0,C=0;C<q&&(V++,I=I.nextZ,!!I);C++);for(K=q;V>0||K>0&&I;)V!==0&&(K===0||!I||A.z<=I.z)?(F=A,A=A.nextZ,V--):(F=I,I=I.nextZ,K--),z?z.nextZ=F:T=F,F.prevZ=z,z=F;A=I}z.nextZ=null,q*=2}while(D>1);return T}function m(T,C,A,I,F){return T=(T-A)*F|0,C=(C-I)*F|0,T=(T|T<<8)&16711935,T=(T|T<<4)&252645135,T=(T|T<<2)&858993459,T=(T|T<<1)&1431655765,C=(C|C<<8)&16711935,C=(C|C<<4)&252645135,C=(C|C<<2)&858993459,C=(C|C<<1)&1431655765,T|C<<1}function _(T){var C=T,A=T;do(C.x<A.x||C.x===A.x&&C.y<A.y)&&(A=C),C=C.next;while(C!==T);return A}function y(T,C,A,I,F,z,D,V){return(F-D)*(C-V)>=(T-D)*(z-V)&&(T-D)*(I-V)>=(A-D)*(C-V)&&(A-D)*(z-V)>=(F-D)*(I-V)}function S(T,C){return T.next.i!==C.i&&T.prev.i!==C.i&&!k(T,C)&&(R(T,C)&&R(C,T)&&G(T,C)&&(w(T.prev,T,C.prev)||w(T,C.prev,C))||P(T,C)&&w(T.prev,T,T.next)>0&&w(C.prev,C,C.next)>0)}function w(T,C,A){return(C.y-T.y)*(A.x-C.x)-(C.x-T.x)*(A.y-C.y)}function P(T,C){return T.x===C.x&&T.y===C.y}function E(T,C,A,I){var F=B(w(T,C,A)),z=B(w(T,C,I)),D=B(w(A,I,T)),V=B(w(A,I,C));return!!(F!==z&&D!==V||F===0&&U(T,A,C)||z===0&&U(T,I,C)||D===0&&U(A,T,I)||V===0&&U(A,C,I))}function U(T,C,A){return C.x<=Math.max(T.x,A.x)&&C.x>=Math.min(T.x,A.x)&&C.y<=Math.max(T.y,A.y)&&C.y>=Math.min(T.y,A.y)}function B(T){return T>0?1:T<0?-1:0}function k(T,C){var A=T;do{if(A.i!==T.i&&A.next.i!==T.i&&A.i!==C.i&&A.next.i!==C.i&&E(A,A.next,T,C))return!0;A=A.next}while(A!==T);return!1}function R(T,C){return w(T.prev,T,T.next)<0?w(T,C,T.next)>=0&&w(T,T.prev,C)>=0:w(T,C,T.prev)<0||w(T,T.next,C)<0}function G(T,C){var A=T,I=!1,F=(T.x+C.x)/2,z=(T.y+C.y)/2;do A.y>z!=A.next.y>z&&A.next.y!==A.y&&F<(A.next.x-A.x)*(z-A.y)/(A.next.y-A.y)+A.x&&(I=!I),A=A.next;while(A!==T);return I}function Q(T,C){var A=new j(T.i,T.x,T.y),I=new j(C.i,C.x,C.y),F=T.next,z=C.prev;return T.next=C,C.prev=T,A.next=F,F.prev=A,I.next=A,A.prev=I,z.next=I,I.prev=z,I}function ee(T,C,A,I){var F=new j(T,C,A);return I?(F.next=I.next,F.prev=I,I.next.prev=F,I.next=F):(F.prev=F,F.next=F),F}function W(T){T.next.prev=T.prev,T.prev.next=T.next,T.prevZ&&(T.prevZ.nextZ=T.nextZ),T.nextZ&&(T.nextZ.prevZ=T.prevZ)}function j(T,C,A){this.i=T,this.x=C,this.y=A,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}r.deviation=function(T,C,A,I){var F=C&&C.length,z=F?C[0]*A:T.length,D=Math.abs(J(T,0,z,A));if(F)for(var V=0,K=C.length;V<K;V++){var q=C[V]*A,Te=V<K-1?C[V+1]*A:T.length;D-=Math.abs(J(T,q,Te,A))}var Ue=0;for(V=0;V<I.length;V+=3){var xe=I[V]*A,We=I[V+1]*A,Oe=I[V+2]*A;Ue+=Math.abs((T[xe]-T[Oe])*(T[We+1]-T[xe+1])-(T[xe]-T[We])*(T[Oe+1]-T[xe+1]))}return D===0&&Ue===0?0:Math.abs((Ue-D)/D)};function J(T,C,A,I){for(var F=0,z=C,D=A-I;z<A;z+=I)F+=(T[D]-T[z])*(T[z+1]+T[D+1]),D=z;return F}return r.flatten=function(T){for(var C=T[0][0].length,A={vertices:[],holes:[],dimensions:C},I=0,F=0;F<T.length;F++){for(var z=0;z<T[F].length;z++)for(var D=0;D<C;D++)A.vertices.push(T[F][z][D]);F>0&&(I+=T[F-1].length,A.holes.push(I))}return A},fo.exports}var Hv=Vv();const Wv=wa(Hv);var Lt=(r=>(r[r.NONE=0]="NONE",r[r.COLOR=16384]="COLOR",r[r.STENCIL=1024]="STENCIL",r[r.DEPTH=256]="DEPTH",r[r.COLOR_DEPTH=16640]="COLOR_DEPTH",r[r.COLOR_STENCIL=17408]="COLOR_STENCIL",r[r.DEPTH_STENCIL=1280]="DEPTH_STENCIL",r[r.ALL=17664]="ALL",r))(Lt||{});class sd{constructor(e){this.items=[],this._name=e}emit(e,t,i,n,s,o,a,l){const{name:u,items:h}=this;for(let c=0,d=h.length;c<d;c++)h[c][u](e,t,i,n,s,o,a,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const jv=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],od=class E0 extends nt{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const t=[...jv,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(e={}){const t=e.skipExtensionImports===!0?!0:e.manageImports===!1;await $v(t),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const i in this._systemsHash)e={...this._systemsHash[i].constructor.defaultOptions,...e};e={...E0.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let i=0;i<this.runners.init.items.length;i++)await this.runners.init.items[i].init(e);this._initOptions=e}render(e,t){let i=e;if(i instanceof ue&&(i={container:i},t&&(Y(Me,"passing a second argument is deprecated, please use render options instead"),i.target=t.renderTexture)),i.target||(i.target=this.view.renderTarget),i.target===this.view.renderTarget&&(this._lastObjectRendered=i.container,i.clearColor=this.background.colorRgba),i.clearColor){const n=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=n?i.clearColor:ae.shared.setValue(i.clearColor).toArray()}i.transform||(i.container.updateLocalTransform(),i.transform=i.container.localTransform),this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i)}resize(e,t,i){const n=this.view.resolution;this.view.resize(e,t,i),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),i!==void 0&&i!==n&&this.runners.resolutionChange.emit(i)}clear(e={}){const t=this;e.target||(e.target=t.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Lt.ALL);const{clear:i,clearColor:n,target:s}=e;ae.shared.setValue(n??this.background.colorRgba),t.renderTarget.clear(s,i,ae.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new sd(t)})}_addSystems(e){let t;for(t in e){const i=e[t];this._addSystem(i.value,i.name)}}_addSystem(e,t){const i=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=i,this._systemsHash[t]=i;for(const n in this.runners)this.runners[n].add(i);return this}_addPipes(e,t){const i=t.reduce((n,s)=>(n[s.name]=s.value,n),{});e.forEach(n=>{const s=n.value,o=n.name,a=i[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!rd())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};od.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let po=od,mo;function Xv(r){return mo!==void 0||(mo=(()=>{var t;const e={stencil:!0,failIfMajorPerformanceCaveat:r??po.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Se.get().getWebGLRenderingContext())return!1;let n=Se.get().createCanvas().getContext("webgl",e);const s=!!((t=n==null?void 0:n.getContextAttributes())!=null&&t.stencil);if(n){const o=n.getExtension("WEBGL_lose_context");o&&o.loseContext()}return n=null,s}catch{return!1}})()),mo}let go;async function Yv(r={}){return go!==void 0||(go=await(async()=>{const e=Se.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(r)).requestDevice(),!0}catch{return!1}})()),go}const ad=["webgl","webgpu","canvas"];async function qv(r){let e=[];r.preference?(e.push(r.preference),ad.forEach(s=>{s!==r.preference&&e.push(s)})):e=ad.slice();let t,i={};for(let s=0;s<e.length;s++){const o=e[s];if(o==="webgpu"&&await Yv()){const{WebGPURenderer:a}=await Promise.resolve().then(()=>US);t=a,i={...r,...r.webgpu};break}else if(o==="webgl"&&Xv(r.failIfMajorPerformanceCaveat??po.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Promise.resolve().then(()=>_S);t=a,i={...r,...r.webgl};break}else if(o==="canvas")throw i={...r},new Error("CanvasRenderer is not yet implemented")}if(delete i.webgpu,delete i.webgl,!t)throw new Error("No available renderer for the current environment");const n=new t;return await n.init(i),n}const _o="8.5.0";class ld{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,_o)}static destroy(){}}ld.extension=M.Application;class ud{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,_o)}destroy(){this._renderer=null}}ud.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"initHook",priority:-10};const hd=class Nh{constructor(...e){this.stage=new ue,e[0]!==void 0&&Y(Me,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await qv(e),Nh._plugins.forEach(t=>{t.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Y(Me,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,t=!1){const i=Nh._plugins.slice(0);i.reverse(),i.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null}};hd._plugins=[];let cd=hd;oe.handleByList(M.Application,cd._plugins),oe.add(ld);class dd{static init(e){Object.defineProperty(this,"resizeTo",{set(t){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=t,t&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let t,i;if(this._resizeTo===globalThis.window)t=globalThis.innerWidth,i=globalThis.innerHeight;else{const{clientWidth:n,clientHeight:s}=this._resizeTo;t=n,i=s}this.renderer.resize(t,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}dd.extension=M.Application;class fd{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set(t){this._ticker&&this._ticker.remove(this.render,this),this._ticker=t,t&&t.add(this.render,this,Gn.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?pt.shared:new pt,e.autoStart&&this.start()}static destroy(){if(this._ticker){const e=this._ticker;this.ticker=null,e.destroy()}}}fd.extension=M.Application;class pd extends nt{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return Y(Me,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return Y(Me,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return Y(Me,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return Y(Me,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return Y(Me,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(e=!1){var t;this.emit("destroy",this),this.removeAllListeners();for(const i in this.chars)(t=this.chars[i].texture)==null||t.destroy();this.chars=null,e&&(this.pages.forEach(i=>i.texture.destroy(!0)),this.pages=null)}}const md=class $h{constructor(e,t,i,n){this.uid=qe("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=e,this.y0=t,this.x1=i,this.y1=n}addColorStop(e,t){return this.gradientStops.push({offset:e,color:ae.shared.setValue(t).toHexa()}),this._styleKey=null,this}buildLinearGradient(){const e=$h.defaultTextureSize,{gradientStops:t}=this,i=Se.get().createCanvas();i.width=e,i.height=e;const n=i.getContext("2d"),s=n.createLinearGradient(0,0,$h.defaultTextureSize,1);for(let m=0;m<t.length;m++){const _=t[m];s.addColorStop(_.offset,_.color)}n.fillStyle=s,n.fillRect(0,0,e,e),this.texture=new X({source:new Sr({resource:i,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,h=new se,c=l-o,d=u-a,f=Math.sqrt(c*c+d*d),g=Math.atan2(d,c);h.translate(-o,-a),h.scale(1/e,1/e),h.rotate(-g),h.scale(256/f,1),this.transform=h,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const e=this.gradientStops.map(n=>`${n.offset}-${n.color}`).join("-"),t=this.texture.uid,i=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${e}-${t}-${i}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};md.defaultTextureSize=256;let Hn=md;const gd={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class xo{constructor(e,t){this.uid=qe("fillPattern"),this.transform=new se,this._styleKey=null,this.texture=e,this.transform.scale(1/e.frame.width,1/e.frame.height),t&&(e.source.style.addressModeU=gd[t].addressModeU,e.source.style.addressModeV=gd[t].addressModeV)}setTransform(e){const t=this.texture;this.transform.copyFrom(e),this.transform.invert(),this.transform.scale(1/t.frame.width,1/t.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var ll,_d;function Kv(){if(_d)return ll;_d=1,ll=t;var r={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},e=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function t(s){var o=[];return s.replace(e,function(a,l,u){var h=l.toLowerCase();for(u=n(u),h=="m"&&u.length>2&&(o.push([l].concat(u.splice(0,2))),h="l",l=l=="m"?"l":"L");;){if(u.length==r[h])return u.unshift(l),o.push(u);if(u.length<r[h])throw new Error("malformed path data");o.push([l].concat(u.splice(0,r[h])))}}),o}var i=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function n(s){var o=s.match(i);return o?o.map(Number):[]}return ll}var Zv=Kv();const Qv=wa(Zv);function Jv(r,e){const t=Qv(r),i=[];let n=null,s=0,o=0;for(let a=0;a<t.length;a++){const l=t[a],u=l[0],h=l;switch(u){case"M":s=h[1],o=h[2],e.moveTo(s,o);break;case"m":s+=h[1],o+=h[2],e.moveTo(s,o);break;case"H":s=h[1],e.lineTo(s,o);break;case"h":s+=h[1],e.lineTo(s,o);break;case"V":o=h[1],e.lineTo(s,o);break;case"v":o+=h[1],e.lineTo(s,o);break;case"L":s=h[1],o=h[2],e.lineTo(s,o);break;case"l":s+=h[1],o+=h[2],e.lineTo(s,o);break;case"C":s=h[5],o=h[6],e.bezierCurveTo(h[1],h[2],h[3],h[4],s,o);break;case"c":e.bezierCurveTo(s+h[1],o+h[2],s+h[3],o+h[4],s+h[5],o+h[6]),s+=h[5],o+=h[6];break;case"S":s=h[3],o=h[4],e.bezierCurveToShort(h[1],h[2],s,o);break;case"s":e.bezierCurveToShort(s+h[1],o+h[2],s+h[3],o+h[4]),s+=h[3],o+=h[4];break;case"Q":s=h[3],o=h[4],e.quadraticCurveTo(h[1],h[2],s,o);break;case"q":e.quadraticCurveTo(s+h[1],o+h[2],s+h[3],o+h[4]),s+=h[3],o+=h[4];break;case"T":s=h[1],o=h[2],e.quadraticCurveToShort(s,o);break;case"t":s+=h[1],o+=h[2],e.quadraticCurveToShort(s,o);break;case"A":s=h[6],o=h[7],e.arcToSvg(h[1],h[2],h[3],h[4],h[5],s,o);break;case"a":s+=h[6],o+=h[7],e.arcToSvg(h[1],h[2],h[3],h[4],h[5],s,o);break;case"Z":case"z":e.closePath(),i.length>0&&(n=i.pop(),n?(s=n.startX,o=n.startY):(s=0,o=0)),n=null;break;default:le(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&n===null&&(n={startX:s,startY:o},i.push(n))}return e}class ul{constructor(e=0,t=0,i=0){this.type="circle",this.x=e,this.y=t,this.radius=i}clone(){return new ul(this.x,this.y,this.radius)}contains(e,t){if(this.radius<=0)return!1;const i=this.radius*this.radius;let n=this.x-e,s=this.y-t;return n*=n,s*=s,n+s<=i}strokeContains(e,t,i){if(this.radius===0)return!1;const n=this.x-e,s=this.y-t,o=this.radius,a=i/2,l=Math.sqrt(n*n+s*s);return l<o+a&&l>o-a}getBounds(e){return e=e||new De,e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class hl{constructor(e=0,t=0,i=0,n=0){this.type="ellipse",this.x=e,this.y=t,this.halfWidth=i,this.halfHeight=n}clone(){return new hl(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let i=(e-this.x)/this.halfWidth,n=(t-this.y)/this.halfHeight;return i*=i,n*=n,i+n<=1}strokeContains(e,t,i){const{halfWidth:n,halfHeight:s}=this;if(n<=0||s<=0)return!1;const o=i/2,a=n-o,l=s-o,u=n+o,h=s+o,c=e-this.x,d=t-this.y,f=c*c/(a*a)+d*d/(l*l),g=c*c/(u*u)+d*d/(h*h);return f>1&&g<=1}getBounds(e){return e=e||new De,e.x=this.x-this.halfWidth,e.y=this.y-this.halfHeight,e.width=this.halfWidth*2,e.height=this.halfHeight*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function ey(r,e,t,i,n,s){const o=r-t,a=e-i,l=n-t,u=s-i,h=o*l+a*u,c=l*l+u*u;let d=-1;c!==0&&(d=h/c);let f,g;d<0?(f=t,g=i):d>1?(f=n,g=s):(f=t+d*l,g=i+d*u);const m=r-f,_=e-g;return m*m+_*_}class Wn{constructor(...e){this.type="polygon";let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!="number"){const i=[];for(let n=0,s=t.length;n<s;n++)i.push(t[n].x,t[n].y);t=i}this.points=t,this.closePath=!0}clone(){const e=this.points.slice(),t=new Wn(e);return t.closePath=this.closePath,t}contains(e,t){let i=!1;const n=this.points.length/2;for(let s=0,o=n-1;s<n;o=s++){const a=this.points[s*2],l=this.points[s*2+1],u=this.points[o*2],h=this.points[o*2+1];l>t!=h>t&&e<(u-a)*((t-l)/(h-l))+a&&(i=!i)}return i}strokeContains(e,t,i){const n=i/2,s=n*n,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],h=o[l+1],c=o[(l+2)%o.length],d=o[(l+3)%o.length];if(ey(e,t,u,h,c,d)<=s)return!0}return!1}getBounds(e){e=e||new De;const t=this.points;let i=1/0,n=-1/0,s=1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=2){const u=t[a],h=t[a+1];i=u<i?u:i,n=u>n?u:n,s=h<s?h:s,o=h>o?h:o}return e.x=i,e.width=n-i,e.y=s,e.height=o-s,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,t)=>`${e}, ${t}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const vo=(r,e,t,i,n,s)=>{const o=r-t,a=e-i,l=Math.sqrt(o*o+a*a);return l>=n-s&&l<=n+s};class cl{constructor(e=0,t=0,i=0,n=0,s=20){this.type="roundedRectangle",this.x=e,this.y=t,this.width=i,this.height=n,this.radius=s}getBounds(e){return e=e||new De,e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new cl(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){const i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+i&&t<=this.y+this.height-i||e>=this.x+i&&e<=this.x+this.width-i)return!0;let n=e-(this.x+i),s=t-(this.y+i);const o=i*i;if(n*n+s*s<=o||(n=e-(this.x+this.width-i),n*n+s*s<=o)||(s=t-(this.y+this.height-i),n*n+s*s<=o)||(n=e-(this.x+i),n*n+s*s<=o))return!0}return!1}strokeContains(e,t,i){const{x:n,y:s,width:o,height:a,radius:l}=this,u=i/2,h=n+l,c=s+l,d=o-l*2,f=a-l*2,g=n+o,m=s+a;return(e>=n-u&&e<=n+u||e>=g-u&&e<=g+u)&&t>=c&&t<=c+f||(t>=s-u&&t<=s+u||t>=m-u&&t<=m+u)&&e>=h&&e<=h+d?!0:e<h&&t<c&&vo(e,t,h,c,l,u)||e>g-l&&t<c&&vo(e,t,g-l,c,l,u)||e>g-l&&t>m-l&&vo(e,t,g-l,m-l,l,u)||e<h&&t>m-l&&vo(e,t,h,m-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const ty=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function iy(r){let e="";for(let t=0;t<r;++t)t>0&&(e+=`
else `),t<r-1&&(e+=`if(test == ${t}.0){}`);return e}function ry(r,e){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);try{for(;;){const i=ty.replace(/%forloop%/gi,iy(r));if(e.shaderSource(t,i),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))r=r/2|0;else break}}finally{e.deleteShader(t)}return r}let sn=null;function on(){var e;if(sn)return sn;const r=Zc();return sn=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),sn=ry(sn,r),(e=r.getExtension("WEBGL_lose_context"))==null||e.loseContext(),sn}const xd={};function dl(r,e){let t=2166136261;for(let i=0;i<e;i++)t^=r[i].uid,t=Math.imul(t,16777619),t>>>=0;return xd[t]||ny(r,e,t)}let fl=0;function ny(r,e,t){const i={};let n=0;fl||(fl=on());for(let o=0;o<fl;o++){const a=o<e?r[o]:X.EMPTY.source;i[n++]=a.source,i[n++]=a.style}const s=new Di(i);return xd[t]=s,s}class an{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function pl(r,e){const t=r.byteLength/8|0,i=new Float64Array(r,0,t);new Float64Array(e,0,t).set(i);const s=r.byteLength-t*8;if(s>0){const o=new Uint8Array(r,t*8,s);new Uint8Array(e,t*8,s).set(o)}}const sy={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var et=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",r[r.NONE=5]="NONE",r))(et||{});function jn(r,e){return e.alphaMode==="no-premultiply-alpha"&&sy[r]||r}class oy{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class ay{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new oy,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const vd=[];let ml=0;function yd(){return ml>0?vd[--ml]:new ay}function bd(r){vd[ml++]=r}let Xn=0;const Sd=class ya{constructor(e={}){this.uid=qe("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],ya.defaultOptions.maxTextures=ya.defaultOptions.maxTextures??on(),e={...ya.defaultOptions,...e};const{maxTextures:t,attributesInitialSize:i,indicesInitialSize:n}=e;this.attributeBuffer=new an(i*4),this.indexBuffer=new Uint16Array(n),this.maxTextures=t}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)bd(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){const i=e._batch.textures.ids[t._source.uid];return!i&&i!==0?!1:(e._textureId=i,e.texture=t,!0)}updateElement(e){this.dirty=!0;const t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){const t=this._elements;if(!t[this.elementStart])return;let i=yd(),n=i.textures;n.clear();const s=t[this.elementStart];let o=jn(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const a=this.attributeBuffer.float32View,l=this.attributeBuffer.uint32View,u=this.indexBuffer;let h=this._batchIndexSize,c=this._batchIndexStart,d="startBatch";const f=this.maxTextures;for(let g=this.elementStart;g<this.elementSize;++g){const m=t[g];t[g]=null;const y=m.texture._source,S=jn(m.blendMode,y),w=o!==S;if(y._batchTick===Xn&&!w){m._textureId=y._textureBindLocation,h+=m.indexSize,m.packAsQuad?(this.packQuadAttributes(m,a,l,m._attributeStart,m._textureId),this.packQuadIndex(u,m._indexStart,m._attributeStart/this.vertexSize)):(this.packAttributes(m,a,l,m._attributeStart,m._textureId),this.packIndex(m,u,m._indexStart,m._attributeStart/this.vertexSize)),m._batch=i;continue}y._batchTick=Xn,(n.count>=f||w)&&(this._finishBatch(i,c,h-c,n,o,e,d),d="renderBatch",c=h,o=S,i=yd(),n=i.textures,n.clear(),++Xn),m._textureId=y._textureBindLocation=n.count,n.ids[y.uid]=n.count,n.textures[n.count++]=y,m._batch=i,h+=m.indexSize,m.packAsQuad?(this.packQuadAttributes(m,a,l,m._attributeStart,m._textureId),this.packQuadIndex(u,m._indexStart,m._attributeStart/this.vertexSize)):(this.packAttributes(m,a,l,m._attributeStart,m._textureId),this.packIndex(m,u,m._indexStart,m._attributeStart/this.vertexSize))}n.count>0&&(this._finishBatch(i,c,h-c,n,o,e,d),c=h,++Xn),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=h}_finishBatch(e,t,i,n,s,o,a){e.gpuBindGroup=null,e.bindGroup=null,e.action=a,e.batcher=this,e.textures=n,e.blendMode=s,e.start=t,e.size=i,++Xn,this.batches[this.batchIndex++]=e,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),i=new an(t);pl(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(e){const t=this.indexBuffer;let i=Math.max(e,t.length*1.5);i+=i%2;const n=i>65535?new Uint32Array(i):new Uint16Array(i);if(n.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let s=0;s<t.length;s++)n[s]=t[s];else pl(t.buffer,n.buffer);this.indexBuffer=n}packQuadIndex(e,t,i){e[t]=i+0,e[t+1]=i+1,e[t+2]=i+2,e[t+3]=i+0,e[t+4]=i+2,e[t+5]=i+3}packIndex(e,t,i,n){const s=e.indices,o=e.indexSize,a=e.indexOffset,l=e.attributeOffset;for(let u=0;u<o;u++)t[i++]=n+s[u+a]-l}destroy(){for(let e=0;e<this.batches.length;e++)bd(this.batches[e]);this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Sd.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let ly=Sd;var Ae=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))(Ae||{});class Nt extends nt{constructor(e){let{data:t,size:i}=e;const{usage:n,label:s,shrinkToFit:o}=e;super(),this.uid=qe("buffer"),this._resourceType="buffer",this._resourceId=qe("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,t instanceof Array&&(t=new Float32Array(t)),this._data=t,i=i??(t==null?void 0:t.byteLength);const a=!!t;this.descriptor={size:i,usage:n,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get static(){return!!(this.descriptor.usage&Ae.STATIC)}set static(e){e?this.descriptor.usage|=Ae.STATIC:this.descriptor.usage&=~Ae.STATIC}setDataWithSize(e,t,i){if(this._updateID++,this._updateSize=t*e.BYTES_PER_ELEMENT,this._data===e){i&&this.emit("update",this);return}const n=this._data;if(this._data=e,n.length!==e.length){!this.shrinkToFit&&e.byteLength<n.byteLength?i&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=qe("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function wd(r,e){if(!(r instanceof Nt)){let t=e?Ae.INDEX:Ae.VERTEX;r instanceof Array&&(e?(r=new Uint32Array(r),t=Ae.INDEX|Ae.COPY_DST):(r=new Float32Array(r),t=Ae.VERTEX|Ae.COPY_DST)),r=new Nt({data:r,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:t})}return r}function uy(r,e,t){const i=r.getAttribute(e);if(!i)return t.minX=0,t.minY=0,t.maxX=0,t.maxY=0,t;const n=i.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const u=n.BYTES_PER_ELEMENT,h=(i.offset||0)/u,c=(i.stride||2*4)/u;for(let d=h;d<n.length;d+=c){const f=n[d],g=n[d+1];f>a&&(a=f),g>l&&(l=g),f<s&&(s=f),g<o&&(o=g)}return t.minX=s,t.minY=o,t.maxX=a,t.maxY=l,t}function hy(r){return(r instanceof Nt||Array.isArray(r)||r.BYTES_PER_ELEMENT)&&(r={buffer:r}),r.buffer=wd(r.buffer,!1),r}class Yn extends nt{constructor(e={}){super(),this.uid=qe("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Mt,this._boundsDirty=!0;const{attributes:t,indexBuffer:i,topology:n}=e;if(this.buffers=[],this.attributes={},t)for(const s in t)this.addAttribute(s,t[s]);this.instanceCount=e.instanceCount||1,i&&this.addIndex(i),this.topology=n||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(const e in this.attributes){const t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}return 0}addAttribute(e,t){const i=hy(t);this.buffers.indexOf(i.buffer)===-1&&(this.buffers.push(i.buffer),i.buffer.on("update",this.onBufferUpdate,this),i.buffer.on("change",this.onBufferUpdate,this)),this.attributes[e]=i}addIndex(e){this.indexBuffer=wd(e,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,uy(this,"aPosition",this._bounds)):this._bounds}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const cy=new Float32Array(1),dy=new Uint32Array(1);class fy extends Yn{constructor(){const t=new Nt({data:cy,label:"attribute-batch-buffer",usage:Ae.VERTEX|Ae.COPY_DST,shrinkToFit:!1}),i=new Nt({data:dy,label:"index-batch-buffer",usage:Ae.INDEX|Ae.COPY_DST,shrinkToFit:!1}),n=6*4;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:n,offset:0},aUV:{buffer:t,format:"float32x2",stride:n,offset:2*4},aColor:{buffer:t,format:"unorm8x4",stride:n,offset:4*4},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:n,offset:5*4}},indexBuffer:i})}}function Td(r,e,t){if(r)for(const i in r){const n=i.toLocaleLowerCase(),s=e[n];if(s){let o=r[i];i==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&s.push(`//----${t}----//`),s.push(o)}else le(`${i} placement hook does not exist in shader`)}}const py=/\{\{(.*?)\}\}/g;function Cd(r){var i;const e={};return(((i=r.match(py))==null?void 0:i.map(n=>n.replace(/[{()}]/g,"")))??[]).forEach(n=>{e[n]=[]}),e}function Pd(r,e){let t;const i=/@in\s+([^;]+);/g;for(;(t=i.exec(r))!==null;)e.push(t[1])}function Ad(r,e,t=!1){const i=[];Pd(e,i),r.forEach(a=>{a.header&&Pd(a.header,i)});const n=i;t&&n.sort();const s=n.map((a,l)=>`       @location(${l}) ${a},`).join(`
`);let o=e.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${s}
`),o}function Ed(r,e){let t;const i=/@out\s+([^;]+);/g;for(;(t=i.exec(r))!==null;)e.push(t[1])}function my(r){const t=/\b(\w+)\s*:/g.exec(r);return t?t[1]:""}function gy(r){const e=/@.*?\s+/g;return r.replace(e,"")}function _y(r,e){const t=[];Ed(e,t),r.forEach(l=>{l.header&&Ed(l.header,t)});let i=0;const n=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${i++}) ${l}`).join(`,
`),s=t.sort().map(l=>`       var ${gy(l)};`).join(`
`),o=`return VSOutput(
                ${t.sort().map(l=>` ${my(l)}`).join(`,
`)});`;let a=e.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${n}
`),a=a.replace("{{start}}",`
${s}
`),a=a.replace("{{return}}",`
${o}
`),a}function Md(r,e){let t=r;for(const i in e){const n=e[i];n.join(`
`).length?t=t.replace(`{{${i}}}`,`//-----${i} START-----//
${n.join(`
`)}
//----${i} FINISH----//`):t=t.replace(`{{${i}}}`,"")}return t}const Ki=Object.create(null),gl=new Map;let xy=0;function vy({template:r,bits:e}){const t=Rd(r,e);if(Ki[t])return Ki[t];const{vertex:i,fragment:n}=by(r,e);return Ki[t]=Id(i,n,e),Ki[t]}function yy({template:r,bits:e}){const t=Rd(r,e);return Ki[t]||(Ki[t]=Id(r.vertex,r.fragment,e)),Ki[t]}function by(r,e){const t=e.map(o=>o.vertex).filter(o=>!!o),i=e.map(o=>o.fragment).filter(o=>!!o);let n=Ad(t,r.vertex,!0);n=_y(t,n);const s=Ad(i,r.fragment,!0);return{vertex:n,fragment:s}}function Rd(r,e){return e.map(t=>(gl.has(t)||gl.set(t,xy++),gl.get(t))).sort((t,i)=>t-i).join("-")+r.vertex+r.fragment}function Id(r,e,t){const i=Cd(r),n=Cd(e);return t.forEach(s=>{Td(s.vertex,i,s.name),Td(s.fragment,n,s.name)}),{vertex:Md(r,i),fragment:Md(e,n)}}const Sy=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,wy=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Ty=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Cy=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,Py={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Ay={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function qn({bits:r,name:e}){const t=vy({template:{fragment:wy,vertex:Sy},bits:[Py,...r]});return ce.from({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function Kn({bits:r,name:e}){return new de({name:e,...yy({template:{vertex:Ty,fragment:Cy},bits:[Ay,...r]})})}const _l={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},xl={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},vl={};function Ey(r){const e=[];if(r===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let i=0;i<r;i++)e.push(`@group(1) @binding(${t++}) var textureSource${i+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${i+1}: sampler;`)}return e.join(`
`)}function My(r){const e=[];if(r===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<r;t++)t===r-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function yl(r){return vl[r]||(vl[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${Ey(r)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${My(r)}
            `}}),vl[r]}const bl={};function Ry(r){const e=[];for(let t=0;t<r;t++)t>0&&e.push("else"),t<r-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uTextures[${t}], vUV);`),e.push("}");return e.join(`
`)}function Sl(r){return bl[r]||(bl[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${r}];

            `,main:`

                ${Ry(r)}
            `}}),bl[r]}const Zn={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Qn={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Od={};function wl(r){let e=Od[r];if(e)return e;const t=new Int32Array(r);for(let i=0;i<r;i++)t[i]=i;return e=Od[r]=new gt({uTextures:{value:t,type:"i32",size:r}},{isStatic:!0}),e}class Iy extends Zt{constructor(e){const t=Kn({name:"batch",bits:[xl,Sl(e),Qn]}),i=qn({name:"batch",bits:[_l,yl(e),Zn]});super({glProgram:t,gpuProgram:i,resources:{batchSamplers:wl(e)}})}}let Fd=null;const Bd=class M0 extends ly{constructor(){super(...arguments),this.geometry=new fy,this.shader=Fd||(Fd=new Iy(this.maxTextures)),this.name=M0.extension.name,this.vertexSize=6}packAttributes(e,t,i,n,s){const o=s<<16|e.roundPixels&65535,a=e.transform,l=a.a,u=a.b,h=a.c,c=a.d,d=a.tx,f=a.ty,{positions:g,uvs:m}=e,_=e.color,y=e.attributeOffset,S=y+e.attributeSize;for(let w=y;w<S;w++){const P=w*2,E=g[P],U=g[P+1];t[n++]=l*E+h*U+d,t[n++]=c*U+u*E+f,t[n++]=m[P],t[n++]=m[P+1],i[n++]=_,i[n++]=o}}packQuadAttributes(e,t,i,n,s){const o=e.texture,a=e.transform,l=a.a,u=a.b,h=a.c,c=a.d,d=a.tx,f=a.ty,g=e.bounds,m=g.maxX,_=g.minX,y=g.maxY,S=g.minY,w=o.uvs,P=e.color,E=s<<16|e.roundPixels&65535;t[n+0]=l*_+h*S+d,t[n+1]=c*S+u*_+f,t[n+2]=w.x0,t[n+3]=w.y0,i[n+4]=P,i[n+5]=E,t[n+6]=l*m+h*S+d,t[n+7]=c*S+u*m+f,t[n+8]=w.x1,t[n+9]=w.y1,i[n+10]=P,i[n+11]=E,t[n+12]=l*m+h*y+d,t[n+13]=c*y+u*m+f,t[n+14]=w.x2,t[n+15]=w.y2,i[n+16]=P,i[n+17]=E,t[n+18]=l*_+h*y+d,t[n+19]=c*y+u*_+f,t[n+20]=w.x3,t[n+21]=w.y3,i[n+22]=P,i[n+23]=E}};Bd.extension={type:[M.Batcher],name:"default"};let Tl=Bd;function Oy(r,e,t,i,n,s,o,a=null){let l=0;t*=e,n*=s;const u=a.a,h=a.b,c=a.c,d=a.d,f=a.tx,g=a.ty;for(;l<o;){const m=r[t],_=r[t+1];i[n]=u*m+c*_+f,i[n+1]=h*m+d*_+g,n+=s,t+=e,l++}}function Fy(r,e,t,i){let n=0;for(e*=t;n<i;)r[e]=0,r[e+1]=0,e+=t,n++}function kd(r,e,t,i,n){const s=e.a,o=e.b,a=e.c,l=e.d,u=e.tx,h=e.ty;t=t||0,i=i||2,n=n||r.length/i-t;let c=t*i;for(let d=0;d<n;d++){const f=r[c],g=r[c+1];r[c]=s*f+a*g+u,r[c+1]=o*f+l*g+h,c+=i}}function By(r,e){if(r===16777215||!e)return e;if(e===16777215||!r)return r;const t=r>>16&255,i=r>>8&255,n=r&255,s=e>>16&255,o=e>>8&255,a=e&255,l=t*s/255,u=i*o/255,h=n*a/255;return(l<<16)+(u<<8)+h}const ky=new se;class Cl{constructor(){this.packAsQuad=!1,this.batcherName="default",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const e=this.baseColor,t=e>>16|e&65280|(e&255)<<16,i=this.renderable;return i?By(t,i.groupColor)+(this.alpha*i.groupAlpha*255<<24):t+(this.alpha*255<<24)}get transform(){var e;return((e=this.renderable)==null?void 0:e.groupTransform)||ky}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.attributeOffset=this.attributeOffset,e.attributeSize=this.attributeSize,e.baseColor=this.baseColor,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}reset(){this.applyTransform=!0,this.renderable=null}}const Jn={extension:{type:M.ShapeBuilder,name:"circle"},build(r,e){let t,i,n,s,o,a;if(r.type==="circle"){const P=r;t=P.x,i=P.y,o=a=P.radius,n=s=0}else if(r.type==="ellipse"){const P=r;t=P.x,i=P.y,o=P.halfWidth,a=P.halfHeight,n=s=0}else{const P=r,E=P.width/2,U=P.height/2;t=P.x+E,i=P.y+U,o=a=Math.max(0,Math.min(P.radius,Math.min(E,U))),n=E-o,s=U-a}if(!(o>=0&&a>=0&&n>=0&&s>=0))return e;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(n?4:0)+(s?4:0);if(u===0)return e;if(l===0)return e[0]=e[6]=t+n,e[1]=e[3]=i+s,e[2]=e[4]=t-n,e[5]=e[7]=i-s,e;let h=0,c=l*4+(n?2:0)+2,d=c,f=u,g=n+o,m=s,_=t+g,y=t-g,S=i+m;if(e[h++]=_,e[h++]=S,e[--c]=S,e[--c]=y,s){const P=i-m;e[d++]=y,e[d++]=P,e[--f]=P,e[--f]=_}for(let P=1;P<l;P++){const E=Math.PI/2*(P/l),U=n+Math.cos(E)*o,B=s+Math.sin(E)*a,k=t+U,R=t-U,G=i+B,Q=i-B;e[h++]=k,e[h++]=G,e[--c]=G,e[--c]=R,e[d++]=R,e[d++]=Q,e[--f]=Q,e[--f]=k}g=n,m=s+a,_=t+g,y=t-g,S=i+m;const w=i-m;return e[h++]=_,e[h++]=S,e[--f]=w,e[--f]=_,n&&(e[h++]=y,e[h++]=S,e[--f]=w,e[--f]=y),e},triangulate(r,e,t,i,n,s){if(r.length===0)return;let o=0,a=0;for(let h=0;h<r.length;h+=2)o+=r[h],a+=r[h+1];o/=r.length/2,a/=r.length/2;let l=i;e[l*t]=o,e[l*t+1]=a;const u=l++;for(let h=0;h<r.length;h+=2)e[l*t]=r[h],e[l*t+1]=r[h+1],h>0&&(n[s++]=l,n[s++]=u,n[s++]=l-1),l++;n[s++]=u+1,n[s++]=u,n[s++]=l-1}},Uy={...Jn,extension:{...Jn.extension,name:"ellipse"}},Dy={...Jn,extension:{...Jn.extension,name:"roundedRectangle"}},Gy=1e-4,Ud=1e-4;function zy(r){const e=r.length;if(e<6)return 1;let t=0;for(let i=0,n=r[e-2],s=r[e-1];i<e;i+=2){const o=r[i],a=r[i+1];t+=(o-n)*(a+s),n=o,s=a}return t<0?-1:1}function Dd(r,e,t,i,n,s,o,a){const l=r-t*n,u=e-i*n,h=r+t*s,c=e+i*s;let d,f;o?(d=i,f=-t):(d=-i,f=t);const g=l+d,m=u+f,_=h+d,y=c+f;return a.push(g,m),a.push(_,y),2}function wr(r,e,t,i,n,s,o,a){const l=t-r,u=i-e;let h=Math.atan2(l,u),c=Math.atan2(n-r,s-e);a&&h<c?h+=Math.PI*2:!a&&h>c&&(c+=Math.PI*2);let d=h;const f=c-h,g=Math.abs(f),m=Math.sqrt(l*l+u*u),_=(15*g*Math.sqrt(m)/Math.PI>>0)+1,y=f/_;if(d+=y,a){o.push(r,e),o.push(t,i);for(let S=1,w=d;S<_;S++,w+=y)o.push(r,e),o.push(r+Math.sin(w)*m,e+Math.cos(w)*m);o.push(r,e),o.push(n,s)}else{o.push(t,i),o.push(r,e);for(let S=1,w=d;S<_;S++,w+=y)o.push(r+Math.sin(w)*m,e+Math.cos(w)*m),o.push(r,e);o.push(n,s),o.push(r,e)}return _*2}function Ly(r,e,t,i,n,s,o,a,l){const u=Gy;if(r.length===0)return;const h=e;let c=h.alignment;if(e.alignment!==.5){let D=zy(r);c=(c-.5)*D+.5}const d=new Ge(r[0],r[1]),f=new Ge(r[r.length-2],r[r.length-1]),g=i,m=Math.abs(d.x-f.x)<u&&Math.abs(d.y-f.y)<u;if(g){r=r.slice(),m&&(r.pop(),r.pop(),f.set(r[r.length-2],r[r.length-1]));const D=(d.x+f.x)*.5,V=(f.y+d.y)*.5;r.unshift(D,V),r.push(D,V)}const _=n,y=r.length/2;let S=r.length;const w=_.length/2,P=h.width/2,E=P*P,U=h.miterLimit*h.miterLimit;let B=r[0],k=r[1],R=r[2],G=r[3],Q=0,ee=0,W=-(k-G),j=B-R,J=0,T=0,C=Math.sqrt(W*W+j*j);W/=C,j/=C,W*=P,j*=P;const A=c,I=(1-A)*2,F=A*2;g||(h.cap==="round"?S+=wr(B-W*(I-F)*.5,k-j*(I-F)*.5,B-W*I,k-j*I,B+W*F,k+j*F,_,!0)+2:h.cap==="square"&&(S+=Dd(B,k,W,j,I,F,!0,_))),_.push(B-W*I,k-j*I),_.push(B+W*F,k+j*F);for(let D=1;D<y-1;++D){B=r[(D-1)*2],k=r[(D-1)*2+1],R=r[D*2],G=r[D*2+1],Q=r[(D+1)*2],ee=r[(D+1)*2+1],W=-(k-G),j=B-R,C=Math.sqrt(W*W+j*j),W/=C,j/=C,W*=P,j*=P,J=-(G-ee),T=R-Q,C=Math.sqrt(J*J+T*T),J/=C,T/=C,J*=P,T*=P;const V=R-B,K=k-G,q=R-Q,Te=ee-G,Ue=V*q+K*Te,xe=K*q-Te*V,We=xe<0;if(Math.abs(xe)<.001*Math.abs(Ue)){_.push(R-W*I,G-j*I),_.push(R+W*F,G+j*F),Ue>=0&&(h.join==="round"?S+=wr(R,G,R-W*I,G-j*I,R-J*I,G-T*I,_,!1)+4:S+=2,_.push(R-J*F,G-T*F),_.push(R+J*I,G+T*I));continue}const Oe=(-W+B)*(-j+G)-(-W+R)*(-j+k),Ai=(-J+Q)*(-T+G)-(-J+R)*(-T+ee),Et=(V*Ai-q*Oe)/xe,Je=(Te*Oe-K*Ai)/xe,Ei=(Et-R)*(Et-R)+(Je-G)*(Je-G),me=R+(Et-R)*I,fe=G+(Je-G)*I,Yt=R-(Et-R)*F,Mi=G-(Je-G)*F,Bn=Math.min(V*V+K*K,q*q+Te*Te),Ri=We?I:F,fr=Bn+Ri*Ri*E;Ei<=fr?h.join==="bevel"||Ei/E>U?(We?(_.push(me,fe),_.push(R+W*F,G+j*F),_.push(me,fe),_.push(R+J*F,G+T*F)):(_.push(R-W*I,G-j*I),_.push(Yt,Mi),_.push(R-J*I,G-T*I),_.push(Yt,Mi)),S+=2):h.join==="round"?We?(_.push(me,fe),_.push(R+W*F,G+j*F),S+=wr(R,G,R+W*F,G+j*F,R+J*F,G+T*F,_,!0)+4,_.push(me,fe),_.push(R+J*F,G+T*F)):(_.push(R-W*I,G-j*I),_.push(Yt,Mi),S+=wr(R,G,R-W*I,G-j*I,R-J*I,G-T*I,_,!1)+4,_.push(R-J*I,G-T*I),_.push(Yt,Mi)):(_.push(me,fe),_.push(Yt,Mi)):(_.push(R-W*I,G-j*I),_.push(R+W*F,G+j*F),h.join==="round"?We?S+=wr(R,G,R+W*F,G+j*F,R+J*F,G+T*F,_,!0)+2:S+=wr(R,G,R-W*I,G-j*I,R-J*I,G-T*I,_,!1)+2:h.join==="miter"&&Ei/E<=U&&(We?(_.push(Yt,Mi),_.push(Yt,Mi)):(_.push(me,fe),_.push(me,fe)),S+=2),_.push(R-J*I,G-T*I),_.push(R+J*F,G+T*F),S+=2)}B=r[(y-2)*2],k=r[(y-2)*2+1],R=r[(y-1)*2],G=r[(y-1)*2+1],W=-(k-G),j=B-R,C=Math.sqrt(W*W+j*j),W/=C,j/=C,W*=P,j*=P,_.push(R-W*I,G-j*I),_.push(R+W*F,G+j*F),g||(h.cap==="round"?S+=wr(R-W*(I-F)*.5,G-j*(I-F)*.5,R-W*I,G-j*I,R+W*F,G+j*F,_,!1)+2:h.cap==="square"&&(S+=Dd(R,G,W,j,I,F,!1,_)));const z=Ud*Ud;for(let D=w;D<S+w-2;++D)B=_[D*2],k=_[D*2+1],R=_[(D+1)*2],G=_[(D+1)*2+1],Q=_[(D+2)*2],ee=_[(D+2)*2+1],!(Math.abs(B*(G-ee)+R*(ee-k)+Q*(k-G))<z)&&a.push(D,D+1,D+2)}function Gd(r,e,t,i,n,s,o){const a=Wv(r,e,2);if(!a)return;for(let u=0;u<a.length;u+=3)s[o++]=a[u]+n,s[o++]=a[u+1]+n,s[o++]=a[u+2]+n;let l=n*i;for(let u=0;u<r.length;u+=2)t[l]=r[u],t[l+1]=r[u+1],l+=i}const Ny=[],$y={extension:{type:M.ShapeBuilder,name:"polygon"},build(r,e){for(let t=0;t<r.points.length;t++)e[t]=r.points[t];return e},triangulate(r,e,t,i,n,s){Gd(r,Ny,e,t,i,n,s)}},Vy={extension:{type:M.ShapeBuilder,name:"rectangle"},build(r,e){const t=r,i=t.x,n=t.y,s=t.width,o=t.height;return s>=0&&o>=0&&(e[0]=i,e[1]=n,e[2]=i+s,e[3]=n,e[4]=i+s,e[5]=n+o,e[6]=i,e[7]=n+o),e},triangulate(r,e,t,i,n,s){let o=0;i*=t,e[i+o]=r[0],e[i+o+1]=r[1],o+=t,e[i+o]=r[2],e[i+o+1]=r[3],o+=t,e[i+o]=r[6],e[i+o+1]=r[7],o+=t,e[i+o]=r[4],e[i+o+1]=r[5],o+=t;const a=i/t;n[s++]=a,n[s++]=a+1,n[s++]=a+2,n[s++]=a+1,n[s++]=a+3,n[s++]=a+2}},Hy={extension:{type:M.ShapeBuilder,name:"triangle"},build(r,e){return e[0]=r.x,e[1]=r.y,e[2]=r.x2,e[3]=r.y2,e[4]=r.x3,e[5]=r.y3,e},triangulate(r,e,t,i,n,s){let o=0;i*=t,e[i+o]=r[0],e[i+o+1]=r[1],o+=t,e[i+o]=r[2],e[i+o+1]=r[3],o+=t,e[i+o]=r[4],e[i+o+1]=r[5];const a=i/t;n[s++]=a,n[s++]=a+1,n[s++]=a+2}},yo={};oe.handleByMap(M.ShapeBuilder,yo),oe.add(Vy,$y,Hy,Jn,Uy,Dy);const Wy=new De;function jy(r,e){const{geometryData:t,batches:i}=e;i.length=0,t.indices.length=0,t.vertices.length=0,t.uvs.length=0;for(let n=0;n<r.instructions.length;n++){const s=r.instructions[n];if(s.action==="texture")Xy(s.data,i,t);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,u=s.data.hole;o&&u&&zd(u.shapePath,l,null,!0,i,t),zd(a,l,u,o,i,t)}}}function Xy(r,e,t){const{vertices:i,uvs:n,indices:s}=t,o=s.length,a=i.length/2,l=[],u=yo.rectangle,h=Wy,c=r.image;h.x=r.dx,h.y=r.dy,h.width=r.dw,h.height=r.dh;const d=r.transform;u.build(h,l),d&&kd(l,d),u.triangulate(l,i,2,a,s,o);const f=c.uvs;n.push(f.x0,f.y0,f.x1,f.y1,f.x3,f.y3,f.x2,f.y2);const g=Re.get(Cl);g.indexOffset=o,g.indexSize=s.length-o,g.attributeOffset=a,g.attributeSize=i.length/2-a,g.baseColor=r.style,g.alpha=r.alpha,g.texture=c,g.geometryData=t,e.push(g)}function zd(r,e,t,i,n,s){const{vertices:o,uvs:a,indices:l}=s,u=r.shapePrimitives.length-1;r.shapePrimitives.forEach(({shape:h,transform:c},d)=>{const f=l.length,g=o.length/2,m=[],_=yo[h.type];if(_.build(h,m),c&&kd(m,c),i){const P=h.closePath??!0;Ly(m,e,!1,P,o,2,g,l)}else if(t&&u===d){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const P=[],E=m.slice();Yy(t.shapePath).forEach(B=>{P.push(E.length/2),E.push(...B)}),Gd(E,P,o,2,g,l,f)}else _.triangulate(m,o,2,g,l,f);const y=a.length/2,S=e.texture;if(S!==X.WHITE){const P=e.matrix;P&&(c&&P.append(c.clone().invert()),Oy(o,2,g,a,y,2,o.length/2-g,P))}else Fy(a,y,2,o.length/2-g);const w=Re.get(Cl);w.indexOffset=f,w.indexSize=l.length-f,w.attributeOffset=g,w.attributeSize=o.length/2-g,w.baseColor=e.color,w.alpha=e.alpha,w.texture=S,w.geometryData=s,n.push(w)})}function Yy(r){if(!r)return[];const e=r.shapePrimitives,t=[];for(let i=0;i<e.length;i++){const n=e[i].shape,s=[];yo[n.type].build(n,s),t.push(s)}return t}class qy{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Ky{constructor(){this.batcher=new Tl,this.instructions=new yc}init(){this.instructions.reset()}get geometry(){return Y(Bx,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}}const Pl=class Vh{constructor(e){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),e.renderableGC.addManagedHash(this,"_gpuContextHash"),e.renderableGC.addManagedHash(this,"_graphicsDataContextHash")}init(e){Vh.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??Vh.defaultOptions.bezierSmoothness}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e),jy(e,t);const i=e.batchMode;e.customShader||i==="no-batch"?t.isBatchable=!1:i==="auto"&&(t.isBatchable=t.geometryData.vertices.length<400),e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_initContextRenderData(e){const t=Re.get(Ky),{batches:i,geometryData:n}=this._gpuContextHash[e.uid],s=n.vertices.length,o=n.indices.length;for(let h=0;h<i.length;h++)i[h].applyTransform=!1;const a=t.batcher;a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let h=0;h<i.length;h++){const c=i[h];a.add(c)}a.finish(t.instructions);const l=a.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const u=a.batches;for(let h=0;h<u.length;h++){const c=u[h];c.bindGroup=dl(c.textures.textures,c.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){const t=new qy;return t.context=e,this._gpuContextHash[e.uid]=t,e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),e.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){const t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(Re.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(i=>{Re.return(i)})}destroy(){for(const e in this._gpuContextHash)this._gpuContextHash[e]&&this.onGraphicsContextDestroy(this._gpuContextHash[e].context)}};Pl.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"graphicsContext"},Pl.defaultOptions={bezierSmoothness:.5};let Al=Pl;const Zy=8,bo=11920929e-14,Qy=1;function Ld(r,e,t,i,n,s,o,a,l,u){const c=Math.min(.99,Math.max(0,u??Al.defaultOptions.bezierSmoothness));let d=(Qy-c)/1;return d*=d,Jy(e,t,i,n,s,o,a,l,r,d),r}function Jy(r,e,t,i,n,s,o,a,l,u){El(r,e,t,i,n,s,o,a,l,u,0),l.push(o,a)}function El(r,e,t,i,n,s,o,a,l,u,h){if(h>Zy)return;const c=(r+t)/2,d=(e+i)/2,f=(t+n)/2,g=(i+s)/2,m=(n+o)/2,_=(s+a)/2,y=(c+f)/2,S=(d+g)/2,w=(f+m)/2,P=(g+_)/2,E=(y+w)/2,U=(S+P)/2;if(h>0){let B=o-r,k=a-e;const R=Math.abs((t-o)*k-(i-a)*B),G=Math.abs((n-o)*k-(s-a)*B);if(R>bo&&G>bo){if((R+G)*(R+G)<=u*(B*B+k*k)){l.push(E,U);return}}else if(R>bo){if(R*R<=u*(B*B+k*k)){l.push(E,U);return}}else if(G>bo){if(G*G<=u*(B*B+k*k)){l.push(E,U);return}}else if(B=E-(r+o)/2,k=U-(e+a)/2,B*B+k*k<=u){l.push(E,U);return}}El(r,e,c,d,y,S,E,U,l,u,h+1),El(E,U,w,P,m,_,o,a,l,u,h+1)}const eb=8,tb=11920929e-14,ib=1;function rb(r,e,t,i,n,s,o,a){const u=Math.min(.99,Math.max(0,a??Al.defaultOptions.bezierSmoothness));let h=(ib-u)/1;return h*=h,nb(e,t,i,n,s,o,r,h),r}function nb(r,e,t,i,n,s,o,a){Ml(o,r,e,t,i,n,s,a,0),o.push(n,s)}function Ml(r,e,t,i,n,s,o,a,l){if(l>eb)return;const u=(e+i)/2,h=(t+n)/2,c=(i+s)/2,d=(n+o)/2,f=(u+c)/2,g=(h+d)/2;let m=s-e,_=o-t;const y=Math.abs((i-s)*_-(n-o)*m);if(y>tb){if(y*y<=a*(m*m+_*_)){r.push(f,g);return}}else if(m=f-(e+s)/2,_=g-(t+o)/2,m*m+_*_<=a){r.push(f,g);return}Ml(r,e,t,u,h,f,g,a,l+1),Ml(r,f,g,c,d,s,o,a,l+1)}function Nd(r,e,t,i,n,s,o,a){let l=Math.abs(n-s);(!o&&n>s||o&&s>n)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(i,1/3)*(l/Math.PI))),a=Math.max(a,3);let u=l/a,h=n;u*=o?-1:1;for(let c=0;c<a+1;c++){const d=Math.cos(h),f=Math.sin(h),g=e+d*i,m=t+f*i;r.push(g,m),h+=u}}function sb(r,e,t,i,n,s){const o=r[r.length-2],l=r[r.length-1]-t,u=o-e,h=n-t,c=i-e,d=Math.abs(l*c-u*h);if(d<1e-8||s===0){(r[r.length-2]!==e||r[r.length-1]!==t)&&r.push(e,t);return}const f=l*l+u*u,g=h*h+c*c,m=l*h+u*c,_=s*Math.sqrt(f)/d,y=s*Math.sqrt(g)/d,S=_*m/f,w=y*m/g,P=_*c+y*u,E=_*h+y*l,U=u*(y+S),B=l*(y+S),k=c*(_+w),R=h*(_+w),G=Math.atan2(B-E,U-P),Q=Math.atan2(R-E,k-P);Nd(r,P+e,E+t,s,G,Q,u*h>c*l)}const es=Math.PI*2,Rl={centerX:0,centerY:0,ang1:0,ang2:0},Il=({x:r,y:e},t,i,n,s,o,a,l)=>{r*=t,e*=i;const u=n*r-s*e,h=s*r+n*e;return l.x=u+o,l.y=h+a,l};function ob(r,e){const t=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4),i=e===1.5707963267948966?.551915024494:t,n=Math.cos(r),s=Math.sin(r),o=Math.cos(r+e),a=Math.sin(r+e);return[{x:n-s*i,y:s+n*i},{x:o+a*i,y:a-o*i},{x:o,y:a}]}const $d=(r,e,t,i)=>{const n=r*i-e*t<0?-1:1;let s=r*t+e*i;return s>1&&(s=1),s<-1&&(s=-1),n*Math.acos(s)},ab=(r,e,t,i,n,s,o,a,l,u,h,c,d)=>{const f=Math.pow(n,2),g=Math.pow(s,2),m=Math.pow(h,2),_=Math.pow(c,2);let y=f*g-f*_-g*m;y<0&&(y=0),y/=f*_+g*m,y=Math.sqrt(y)*(o===a?-1:1);const S=y*n/s*c,w=y*-s/n*h,P=u*S-l*w+(r+t)/2,E=l*S+u*w+(e+i)/2,U=(h-S)/n,B=(c-w)/s,k=(-h-S)/n,R=(-c-w)/s,G=$d(1,0,U,B);let Q=$d(U,B,k,R);a===0&&Q>0&&(Q-=es),a===1&&Q<0&&(Q+=es),d.centerX=P,d.centerY=E,d.ang1=G,d.ang2=Q};function lb(r,e,t,i,n,s,o,a=0,l=0,u=0){if(s===0||o===0)return;const h=Math.sin(a*es/360),c=Math.cos(a*es/360),d=c*(e-i)/2+h*(t-n)/2,f=-h*(e-i)/2+c*(t-n)/2;if(d===0&&f===0)return;s=Math.abs(s),o=Math.abs(o);const g=Math.pow(d,2)/Math.pow(s,2)+Math.pow(f,2)/Math.pow(o,2);g>1&&(s*=Math.sqrt(g),o*=Math.sqrt(g)),ab(e,t,i,n,s,o,l,u,h,c,d,f,Rl);let{ang1:m,ang2:_}=Rl;const{centerX:y,centerY:S}=Rl;let w=Math.abs(_)/(es/4);Math.abs(1-w)<1e-7&&(w=1);const P=Math.max(Math.ceil(w),1);_/=P;let E=r[r.length-2],U=r[r.length-1];const B={x:0,y:0};for(let k=0;k<P;k++){const R=ob(m,_),{x:G,y:Q}=Il(R[0],s,o,c,h,y,S,B),{x:ee,y:W}=Il(R[1],s,o,c,h,y,S,B),{x:j,y:J}=Il(R[2],s,o,c,h,y,S,B);Ld(r,E,U,G,Q,ee,W,j,J),E=j,U=J,m+=_}}function ub(r,e,t){const i=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,h=Math.sqrt(l*l+u*u),c=l/h,d=u/h;return{len:h,nx:c,ny:d}},n=(o,a)=>{o===0?r.moveTo(a.x,a.y):r.lineTo(a.x,a.y)};let s=e[e.length-1];for(let o=0;o<e.length;o++){const a=e[o%e.length],l=a.radius??t;if(l<=0){n(o,a),s=a;continue}const u=e[(o+1)%e.length],h=i(a,s),c=i(a,u);if(h.len<1e-4||c.len<1e-4){n(o,a),s=a;continue}let d=Math.asin(h.nx*c.ny-h.ny*c.nx),f=1,g=!1;h.nx*c.nx-h.ny*-c.ny<0?d<0?d=Math.PI+d:(d=Math.PI-d,f=-1,g=!0):d>0&&(f=-1,g=!0);const m=d/2;let _,y=Math.abs(Math.cos(m)*l/Math.sin(m));y>Math.min(h.len/2,c.len/2)?(y=Math.min(h.len/2,c.len/2),_=Math.abs(y*Math.sin(m)/Math.cos(m))):_=l;const S=a.x+c.nx*y+-c.ny*_*f,w=a.y+c.ny*y+c.nx*_*f,P=Math.atan2(h.ny,h.nx)+Math.PI/2*f,E=Math.atan2(c.ny,c.nx)-Math.PI/2*f;o===0&&r.moveTo(S+Math.cos(P)*_,w+Math.sin(P)*_),r.arc(S,w,_,P,E,g),s=a}}function hb(r,e,t,i){const n=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=e.length;for(let a=0;a<o;a++){const l=e[(a+1)%o],u=l.radius??t;if(u<=0){a===0?r.moveTo(l.x,l.y):r.lineTo(l.x,l.y);continue}const h=e[a],c=e[(a+2)%o],d=n(h,l);let f;if(d<1e-4)f=l;else{const _=Math.min(d/2,u);f=s(l,h,_/d)}const g=n(c,l);let m;if(g<1e-4)m=l;else{const _=Math.min(g/2,u);m=s(l,c,_/g)}a===0?r.moveTo(f.x,f.y):r.lineTo(f.x,f.y),r.quadraticCurveTo(l.x,l.y,m.x,m.y,i)}}const cb=new De;class db{constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Mt,this._graphicsPath2D=e}moveTo(e,t){return this.startPoly(e,t),this}lineTo(e,t){this._ensurePoly();const i=this._currentPoly.points,n=i[i.length-2],s=i[i.length-1];return(n!==e||s!==t)&&i.push(e,t),this}arc(e,t,i,n,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Nd(a,e,t,i,n,s,o),this}arcTo(e,t,i,n,s){this._ensurePoly();const o=this._currentPoly.points;return sb(o,e,t,i,n,s),this}arcToSvg(e,t,i,n,s,o,a){const l=this._currentPoly.points;return lb(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,e,t,i,n,s),this}bezierCurveTo(e,t,i,n,s,o,a){this._ensurePoly();const l=this._currentPoly;return Ld(this._currentPoly.points,l.lastX,l.lastY,e,t,i,n,s,o,a),this}quadraticCurveTo(e,t,i,n,s){this._ensurePoly();const o=this._currentPoly;return rb(this._currentPoly.points,o.lastX,o.lastY,e,t,i,n,s),this}closePath(){return this.endPoly(!0),this}addPath(e,t){this.endPoly(),t&&!t.isIdentity()&&(e=e.clone(!0),e.transform(t));for(let i=0;i<e.instructions.length;i++){const n=e.instructions[i];this[n.action](...n.data)}return this}finish(e=!1){this.endPoly(e)}rect(e,t,i,n,s){return this.drawShape(new De(e,t,i,n),s),this}circle(e,t,i,n){return this.drawShape(new ul(e,t,i),n),this}poly(e,t,i){const n=new Wn(e);return n.closePath=t,this.drawShape(n,i),this}regularPoly(e,t,i,n,s=0,o){n=Math.max(n|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/n,u=[];for(let h=0;h<n;h++){const c=h*l+a;u.push(e+i*Math.cos(c),t+i*Math.sin(c))}return this.poly(u,!0,o),this}roundPoly(e,t,i,n,s,o=0,a){if(n=Math.max(n|0,3),s<=0)return this.regularPoly(e,t,i,n,o);const l=i*Math.sin(Math.PI/n)-.001;s=Math.min(s,l);const u=-1*Math.PI/2+o,h=Math.PI*2/n,c=(n-2)*Math.PI/n/2;for(let d=0;d<n;d++){const f=d*h+u,g=e+i*Math.cos(f),m=t+i*Math.sin(f),_=f+Math.PI+c,y=f-Math.PI-c,S=g+s*Math.cos(_),w=m+s*Math.sin(_),P=g+s*Math.cos(y),E=m+s*Math.sin(y);d===0?this.moveTo(S,w):this.lineTo(S,w),this.quadraticCurveTo(g,m,P,E,a)}return this.closePath()}roundShape(e,t,i=!1,n){return e.length<3?this:(i?hb(this,e,t,n):ub(this,e,t),this.closePath())}filletRect(e,t,i,n,s){if(s===0)return this.rect(e,t,i,n);const o=Math.min(i,n)/2,a=Math.min(o,Math.max(-o,s)),l=e+i,u=t+n,h=a<0?-a:0,c=Math.abs(a);return this.moveTo(e,t+c).arcTo(e+h,t+h,e+c,t,c).lineTo(l-c,t).arcTo(l-h,t+h,l,t+c,c).lineTo(l,u-c).arcTo(l-h,u-h,e+i-c,u,c).lineTo(e+c,u).arcTo(e+h,u-h,e,u-c,c).closePath()}chamferRect(e,t,i,n,s,o){if(s<=0)return this.rect(e,t,i,n);const a=Math.min(s,Math.min(i,n)/2),l=e+i,u=t+n,h=[e+a,t,l-a,t,l,t+a,l,u-a,l-a,u,e+a,u,e,u-a,e,t+a];for(let c=h.length-1;c>=2;c-=2)h[c]===h[c-2]&&h[c-1]===h[c-3]&&h.splice(c-1,2);return this.poly(h,!0,o)}ellipse(e,t,i,n,s){return this.drawShape(new hl(e,t,i,n),s),this}roundRect(e,t,i,n,s,o){return this.drawShape(new cl(e,t,i,n,s),o),this}drawShape(e,t){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:t}),this}startPoly(e,t){let i=this._currentPoly;return i&&this.endPoly(),i=new Wn,i.points.push(e,t),this._currentPoly=i,this}endPoly(e=!1){const t=this._currentPoly;return t&&t.points.length>2&&(t.closePath=e,this.shapePrimitives.push({shape:t})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new Wn,e)){const t=this.shapePrimitives[this.shapePrimitives.length-1];if(t){let i=t.shape.x,n=t.shape.y;if(t.transform&&!t.transform.isIdentity()){const s=t.transform,o=i;i=s.a*i+s.c*n+s.tx,n=s.b*o+s.d*n+s.ty}this._currentPoly.points.push(i,n)}else this._currentPoly.points.push(0,0)}}buildPath(){const e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){const i=e.instructions[t];this[i.action](...i.data)}this.finish()}get bounds(){const e=this._bounds;e.clear();const t=this.shapePrimitives;for(let i=0;i<t.length;i++){const n=t[i],s=n.shape.getBounds(cb);n.transform?e.addRect(s,n.transform):e.addRect(s)}return e}}class ln{constructor(e){this.instructions=[],this.uid=qe("graphicsPath"),this._dirty=!0,typeof e=="string"?Jv(e,this):this.instructions=(e==null?void 0:e.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new db(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,t){return e=e.clone(),this.instructions.push({action:"addPath",data:[e,t]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:"arc",data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:"arcTo",data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:"arcToSvg",data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:"bezierCurveTo",data:e}),this._dirty=!0,this}bezierCurveToShort(e,t,i,n,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(Ge.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const h=a.x,c=a.y;l=h+(h-l),u=c+(c-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,e,t,i,n,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:"ellipse",data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:"lineTo",data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:"moveTo",data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:"quadraticCurveTo",data:e}),this._dirty=!0,this}quadraticCurveToShort(e,t,i){const n=this.instructions[this.instructions.length-1],s=this.getLastPoint(Ge.shared);let o=0,a=0;if(!n||n.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=n.data[0],a=n.data[1];const l=s.x,u=s.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,e,t,i]}),this._dirty=!0,this}rect(e,t,i,n,s){return this.instructions.push({action:"rect",data:[e,t,i,n,s]}),this._dirty=!0,this}circle(e,t,i,n){return this.instructions.push({action:"circle",data:[e,t,i,n]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:"roundRect",data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:"poly",data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:"regularPoly",data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:"roundPoly",data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:"roundShape",data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:"filletRect",data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:"chamferRect",data:e}),this._dirty=!0,this}star(e,t,i,n,s,o,a){s=s||n/2;const l=-1*Math.PI/2+o,u=i*2,h=Math.PI*2/u,c=[];for(let d=0;d<u;d++){const f=d%2?s:n,g=d*h+l;c.push(e+f*Math.cos(g),t+f*Math.sin(g))}return this.poly(c,!0,a),this}clone(e=!1){const t=new ln;if(!e)t.instructions=this.instructions.slice();else for(let i=0;i<this.instructions.length;i++){const n=this.instructions[i];t.instructions.push({action:n.action,data:n.data.slice()})}return t}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;const t=e.a,i=e.b,n=e.c,s=e.d,o=e.tx,a=e.ty;let l=0,u=0,h=0,c=0,d=0,f=0,g=0,m=0;for(let _=0;_<this.instructions.length;_++){const y=this.instructions[_],S=y.data;switch(y.action){case"moveTo":case"lineTo":l=S[0],u=S[1],S[0]=t*l+n*u+o,S[1]=i*l+s*u+a;break;case"bezierCurveTo":h=S[0],c=S[1],d=S[2],f=S[3],l=S[4],u=S[5],S[0]=t*h+n*c+o,S[1]=i*h+s*c+a,S[2]=t*d+n*f+o,S[3]=i*d+s*f+a,S[4]=t*l+n*u+o,S[5]=i*l+s*u+a;break;case"quadraticCurveTo":h=S[0],c=S[1],l=S[2],u=S[3],S[0]=t*h+n*c+o,S[1]=i*h+s*c+a,S[2]=t*l+n*u+o,S[3]=i*l+s*u+a;break;case"arcToSvg":l=S[5],u=S[6],g=S[0],m=S[1],S[0]=t*g+n*m,S[1]=i*g+s*m,S[5]=t*l+n*u+o,S[6]=i*l+s*u+a;break;case"circle":S[4]=ts(S[3],e);break;case"rect":S[4]=ts(S[4],e);break;case"ellipse":S[8]=ts(S[8],e);break;case"roundRect":S[5]=ts(S[5],e);break;case"addPath":S[0].transform(e);break;case"poly":S[2]=ts(S[2],e);break;default:le("unknown transform action",y.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let t=this.instructions.length-1,i=this.instructions[t];if(!i)return e.x=0,e.y=0,e;for(;i.action==="closePath";){if(t--,t<0)return e.x=0,e.y=0,e;i=this.instructions[t]}switch(i.action){case"moveTo":case"lineTo":e.x=i.data[0],e.y=i.data[1];break;case"quadraticCurveTo":e.x=i.data[2],e.y=i.data[3];break;case"bezierCurveTo":e.x=i.data[4],e.y=i.data[5];break;case"arc":case"arcToSvg":e.x=i.data[5],e.y=i.data[6];break;case"addPath":i.data[0].getLastPoint(e);break}return e}}function ts(r,e){return r?r.prepend(e):e.clone()}function fb(r,e){if(typeof r=="string"){const i=document.createElement("div");i.innerHTML=r.trim(),r=i.querySelector("svg")}const t={context:e,path:new ln};return Vd(r,t,null,null),e}function Vd(r,e,t,i){const n=r.children,{fillStyle:s,strokeStyle:o}=pb(r);s&&t?t={...t,...s}:s&&(t=s),o&&i?i={...i,...o}:o&&(i=o),e.context.fillStyle=t,e.context.strokeStyle=i;let a,l,u,h,c,d,f,g,m,_,y,S,w,P,E,U,B;switch(r.nodeName.toLowerCase()){case"path":P=r.getAttribute("d"),E=new ln(P),e.context.path(E),t&&e.context.fill(),i&&e.context.stroke();break;case"circle":f=ut(r,"cx",0),g=ut(r,"cy",0),m=ut(r,"r",0),e.context.ellipse(f,g,m,m),t&&e.context.fill(),i&&e.context.stroke();break;case"rect":a=ut(r,"x",0),l=ut(r,"y",0),U=ut(r,"width",0),B=ut(r,"height",0),_=ut(r,"rx",0),y=ut(r,"ry",0),_||y?e.context.roundRect(a,l,U,B,_||y):e.context.rect(a,l,U,B),t&&e.context.fill(),i&&e.context.stroke();break;case"ellipse":f=ut(r,"cx",0),g=ut(r,"cy",0),_=ut(r,"rx",0),y=ut(r,"ry",0),e.context.beginPath(),e.context.ellipse(f,g,_,y),t&&e.context.fill(),i&&e.context.stroke();break;case"line":u=ut(r,"x1",0),h=ut(r,"y1",0),c=ut(r,"x2",0),d=ut(r,"y2",0),e.context.beginPath(),e.context.moveTo(u,h),e.context.lineTo(c,d),i&&e.context.stroke();break;case"polygon":w=r.getAttribute("points"),S=w.match(/\d+/g).map(k=>parseInt(k,10)),e.context.poly(S,!0),t&&e.context.fill(),i&&e.context.stroke();break;case"polyline":w=r.getAttribute("points"),S=w.match(/\d+/g).map(k=>parseInt(k,10)),e.context.poly(S,!1),i&&e.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${r.nodeName}> elements unsupported`);break}}for(let k=0;k<n.length;k++)Vd(n[k],e,t,i)}function ut(r,e,t){const i=r.getAttribute(e);return i?Number(i):t}function pb(r){const e=r.getAttribute("style"),t={},i={};let n=!1,s=!1;if(e){const o=e.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,h]=l.split(":");switch(u){case"stroke":h!=="none"&&(t.color=ae.shared.setValue(h).toNumber(),s=!0);break;case"stroke-width":t.width=Number(h);break;case"fill":h!=="none"&&(n=!0,i.color=ae.shared.setValue(h).toNumber());break;case"fill-opacity":i.alpha=Number(h);break;case"stroke-opacity":t.alpha=Number(h);break;case"opacity":i.alpha=Number(h),t.alpha=Number(h);break}}}else{const o=r.getAttribute("stroke");o&&o!=="none"&&(s=!0,t.color=ae.shared.setValue(o).toNumber(),t.width=ut(r,"stroke-width",1));const a=r.getAttribute("fill");a&&a!=="none"&&(n=!0,i.color=ae.shared.setValue(a).toNumber())}return{strokeStyle:s?t:null,fillStyle:n?i:null}}function mb(r){return ae.isColorLike(r)}function Hd(r){return r instanceof xo}function Wd(r){return r instanceof Hn}function gb(r,e,t){const i=ae.shared.setValue(e??0);return r.color=i.toNumber(),r.alpha=i.alpha===1?t.alpha:i.alpha,r.texture=X.WHITE,{...t,...r}}function jd(r,e,t){return r.fill=e,r.color=16777215,r.texture=e.texture,r.matrix=e.transform,{...t,...r}}function Xd(r,e,t){return e.buildLinearGradient(),r.fill=e,r.color=16777215,r.texture=e.texture,r.matrix=e.transform,{...t,...r}}function _b(r,e){var n;const t={...e,...r};if(t.texture){if(t.texture!==X.WHITE){const o=((n=t.matrix)==null?void 0:n.invert())||new se;o.translate(t.texture.frame.x,t.texture.frame.y),o.scale(1/t.texture.source.width,1/t.texture.source.height),t.matrix=o}const s=t.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const i=ae.shared.setValue(t.color);return t.alpha*=i.alpha,t.color=i.toNumber(),t.matrix=t.matrix?t.matrix.clone():null,t}function Tr(r,e){if(r==null)return null;const t={},i=r;return mb(r)?gb(t,r,e):Hd(r)?jd(t,r,e):Wd(r)?Xd(t,r,e):i.fill&&Hd(i.fill)?jd(i,i.fill,e):i.fill&&Wd(i.fill)?Xd(i,i.fill,e):_b(i,e)}function So(r,e){const{width:t,alignment:i,miterLimit:n,cap:s,join:o,...a}=e,l=Tr(r,a);return l?{width:t,alignment:i,miterLimit:n,cap:s,join:o,...l}:null}const xb=new Ge,Yd=new se,Ol=class Ii extends nt{constructor(){super(...arguments),this.uid=qe("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new ln,this._transform=new se,this._fillStyle={...Ii.defaultFillStyle},this._strokeStyle={...Ii.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Mt,this._boundsDirty=!0}clone(){const e=new Ii;return e.batchMode=this.batchMode,e.instructions=this.instructions.slice(),e._activePath=this._activePath.clone(),e._transform=this._transform.clone(),e._fillStyle={...this._fillStyle},e._strokeStyle={...this._strokeStyle},e._stateStack=this._stateStack.slice(),e._bounds=this._bounds.clone(),e._boundsDirty=!0,e}get fillStyle(){return this._fillStyle}set fillStyle(e){this._fillStyle=Tr(e,Ii.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(e){this._strokeStyle=So(e,Ii.defaultStrokeStyle)}setFillStyle(e){return this._fillStyle=Tr(e,Ii.defaultFillStyle),this}setStrokeStyle(e){return this._strokeStyle=Tr(e,Ii.defaultStrokeStyle),this}texture(e,t,i,n,s,o){return this.instructions.push({action:"texture",data:{image:e,dx:i||0,dy:n||0,dw:s||e.frame.width,dh:o||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t?ae.shared.setValue(t).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new ln,this}fill(e,t){let i;const n=this.instructions[this.instructions.length-1];return this._tick===0&&n&&n.action==="stroke"?i=n.data.path:i=this._activePath.clone(),i?(e!=null&&(t!==void 0&&typeof e=="number"&&(Y(Me,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),e={color:e,alpha:t}),this._fillStyle=Tr(e,Ii.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:i}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:e,y:t}=this._activePath.getLastPoint(Ge.shared);this._activePath.clear(),this._activePath.moveTo(e,t)}stroke(e){let t;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="fill"?t=i.data.path:t=this._activePath.clone(),t?(e!=null&&(this._strokeStyle=So(e,Ii.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:t}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){const t=this.instructions[this.instructions.length-1-e],i=this._activePath.clone();if(t&&(t.action==="stroke"||t.action==="fill"))if(t.data.hole)t.data.hole.addPath(i);else{t.data.hole=i;break}}return this._initNextPathLocation(),this}arc(e,t,i,n,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,i,n,s,o),this}arcTo(e,t,i,n,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*i+o.c*n+o.tx,o.b*i+o.d*n+o.ty,s),this}arcToSvg(e,t,i,n,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(e,t,i,n,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(e,t,i,n,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*e+l.c*t+l.tx,l.b*e+l.d*t+l.ty,l.a*i+l.c*n+l.tx,l.b*i+l.d*n+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var e;return this._tick++,(e=this._activePath)==null||e.closePath(),this}ellipse(e,t,i,n){return this._tick++,this._activePath.ellipse(e,t,i,n,this._transform.clone()),this}circle(e,t,i){return this._tick++,this._activePath.circle(e,t,i,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,t){this._tick++;const i=this._transform;return this._activePath.lineTo(i.a*e+i.c*t+i.tx,i.b*e+i.d*t+i.ty),this}moveTo(e,t){this._tick++;const i=this._transform,n=this._activePath.instructions,s=i.a*e+i.c*t+i.tx,o=i.b*e+i.d*t+i.ty;return n.length===1&&n[0].action==="moveTo"?(n[0].data[0]=s,n[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(e,t,i,n,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*i+o.c*n+o.tx,o.b*i+o.d*n+o.ty,s),this}rect(e,t,i,n){return this._tick++,this._activePath.rect(e,t,i,n,this._transform.clone()),this}roundRect(e,t,i,n,s){return this._tick++,this._activePath.roundRect(e,t,i,n,s,this._transform.clone()),this}poly(e,t){return this._tick++,this._activePath.poly(e,t,this._transform.clone()),this}regularPoly(e,t,i,n,s=0,o){return this._tick++,this._activePath.regularPoly(e,t,i,n,s,o),this}roundPoly(e,t,i,n,s,o){return this._tick++,this._activePath.roundPoly(e,t,i,n,s,o),this}roundShape(e,t,i,n){return this._tick++,this._activePath.roundShape(e,t,i,n),this}filletRect(e,t,i,n,s){return this._tick++,this._activePath.filletRect(e,t,i,n,s),this}chamferRect(e,t,i,n,s,o){return this._tick++,this._activePath.chamferRect(e,t,i,n,s,o),this}star(e,t,i,n,s=0,o=0){return this._tick++,this._activePath.star(e,t,i,n,s,o,this._transform.clone()),this}svg(e){return this._tick++,fb(e,this),this}restore(){const e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,t=e){return this._transform.scale(e,t),this}setTransform(e,t,i,n,s,o){return e instanceof se?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,i,n,s,o),this)}transform(e,t,i,n,s,o){return e instanceof se?(this._transform.append(e),this):(Yd.set(e,t,i,n,s,o),this._transform.append(Yd),this)}translate(e,t=e){return this._transform.translate(e,t),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){const i=this.instructions[t],n=i.action;if(n==="fill"){const s=i.data;e.addBounds(s.path.bounds)}else if(n==="texture"){const s=i.data;e.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(n==="stroke"){const s=i.data,o=s.style.width/2,a=s.path.bounds;e.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return e}containsPoint(e){var n;if(!this.bounds.containsPoint(e.x,e.y))return!1;const t=this.instructions;let i=!1;for(let s=0;s<t.length;s++){const o=t[s],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,h=l.shapePath.shapePrimitives;for(let c=0;c<h.length;c++){const d=h[c].shape;if(!u||!d)continue;const f=h[c].transform,g=f?f.applyInverse(e,xb):e;o.action==="fill"?i=d.contains(g.x,g.y):i=d.strokeContains(g.x,g.y,u.width);const m=a.hole;if(m){const _=(n=m.shapePath)==null?void 0:n.shapePrimitives;if(_)for(let y=0;y<_.length;y++)_[y].shape.contains(g.x,g.y)&&(i=!1)}if(i)return!0}}return i}destroy(e=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const i=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(i),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(i)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Ol.defaultFillStyle={color:16777215,alpha:1,texture:X.WHITE,matrix:null,fill:null},Ol.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:X.WHITE,matrix:null,fill:null};let Qt=Ol;const qd=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function Kd(r){const e=[];let t=0;for(let i=0;i<qd.length;i++){const n=`_${qd[i]}`;e[t++]=r[n]}return t=Zd(r._fill,e,t),t=vb(r._stroke,e,t),t=yb(r.dropShadow,e,t),e.join("-")}function Zd(r,e,t){var i;return r&&(e[t++]=r.color,e[t++]=r.alpha,e[t++]=(i=r.fill)==null?void 0:i.styleKey),t}function vb(r,e,t){return r&&(t=Zd(r,e,t),e[t++]=r.width,e[t++]=r.alignment,e[t++]=r.cap,e[t++]=r.join,e[t++]=r.miterLimit),t}function yb(r,e,t){return r&&(e[t++]=r.alpha,e[t++]=r.angle,e[t++]=r.blur,e[t++]=r.distance,e[t++]=ae.shared.setValue(r.color).toNumber()),t}const Fl=class kn extends nt{constructor(e={}){super(),bb(e);const t={...kn.defaultTextStyle,...e};for(const i in t){const n=i;this[n]=t[i]}this.update()}get align(){return this._align}set align(e){this._align=e,this.update()}get breakWords(){return this._breakWords}set breakWords(e){this._breakWords=e,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(e){e!==null&&typeof e=="object"?this._dropShadow=this._createProxy({...kn.defaultDropShadow,...e}):this._dropShadow=e?this._createProxy({...kn.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(e){this._fontFamily=e,this.update()}get fontSize(){return this._fontSize}set fontSize(e){typeof e=="string"?this._fontSize=parseInt(e,10):this._fontSize=e,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(e){this._fontStyle=e.toLowerCase(),this.update()}get fontVariant(){return this._fontVariant}set fontVariant(e){this._fontVariant=e,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(e){this._fontWeight=e,this.update()}get leading(){return this._leading}set leading(e){this._leading=e,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing=e,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(e){this._lineHeight=e,this.update()}get padding(){return this._padding}set padding(e){this._padding=e,this.update()}get trim(){return this._trim}set trim(e){this._trim=e,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(e){this._textBaseline=e,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(e){this._whiteSpace=e,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(e){this._wordWrap=e,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(e){this._wordWrapWidth=e,this.update()}get fill(){return this._originalFill}set fill(e){e!==this._originalFill&&(this._originalFill=e,this._isFillStyle(e)&&(this._originalFill=this._createProxy({...Qt.defaultFillStyle,...e},()=>{this._fill=Tr({...this._originalFill},Qt.defaultFillStyle)})),this._fill=Tr(e===0?"black":e,Qt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(e){e!==this._originalStroke&&(this._originalStroke=e,this._isFillStyle(e)&&(this._originalStroke=this._createProxy({...Qt.defaultStrokeStyle,...e},()=>{this._stroke=So({...this._originalStroke},Qt.defaultStrokeStyle)})),this._stroke=So(e,Qt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Kd(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const e=kn.defaultTextStyle;for(const t in e)this[t]=e[t]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new kn({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(e=!1){var i,n,s,o;if(this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const a=typeof e=="boolean"?e:e==null?void 0:e.textureSource;(i=this._fill)!=null&&i.texture&&this._fill.texture.destroy(a),(n=this._originalFill)!=null&&n.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(e,t){return new Proxy(e,{set:(i,n,s)=>(i[n]=s,t==null||t(n,s),this.update(),!0)})}_isFillStyle(e){return(e??null)!==null&&!(ae.isColorLike(e)||e instanceof Hn||e instanceof xo)}};Fl.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5},Fl.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let vt=Fl;function bb(r){const e=r;if(typeof e.dropShadow=="boolean"&&e.dropShadow){const t=vt.defaultDropShadow;r.dropShadow={alpha:e.dropShadowAlpha??t.alpha,angle:e.dropShadowAngle??t.angle,blur:e.dropShadowBlur??t.blur,color:e.dropShadowColor??t.color,distance:e.dropShadowDistance??t.distance}}if(e.strokeThickness!==void 0){Y(Me,"strokeThickness is now a part of stroke");const t=e.stroke;let i={};if(ae.isColorLike(t))i.color=t;else if(t instanceof Hn||t instanceof xo)i.fill=t;else if(Object.hasOwnProperty.call(t,"color")||Object.hasOwnProperty.call(t,"fill"))i=t;else throw new Error("Invalid stroke value.");r.stroke={...i,width:e.strokeThickness}}if(Array.isArray(e.fillGradientStops)){Y(Me,"gradient fill is now a fill pattern: `new FillGradient(...)`");let t;r.fontSize==null?r.fontSize=vt.defaultTextStyle.fontSize:typeof r.fontSize=="string"?t=parseInt(r.fontSize,10):t=r.fontSize;const i=new Hn(0,0,0,t*1.7),n=e.fillGradientStops.map(s=>ae.shared.setValue(s).toNumber());n.forEach((s,o)=>{const a=o/(n.length-1);i.addColorStop(a,s)}),r.fill={fill:i}}}class Sb{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){const i=Se.get().createCanvas();i.width=e,i.height=t;const n=i.getContext("2d");return{canvas:i,context:n}}getOptimalCanvasAndContext(e,t,i=1){e=Math.ceil(e*i-1e-6),t=Math.ceil(t*i-1e-6),e=Jr(e),t=Jr(t);const n=(e<<17)+(t<<1);this._canvasPool[n]||(this._canvasPool[n]=[]);let s=this._canvasPool[n].pop();return s||(s=this._createCanvasAndContext(e,t)),s}returnCanvasAndContext(e){const t=e.canvas,{width:i,height:n}=t,s=(i<<17)+(n<<1);e.context.clearRect(0,0,i,n),this._canvasPool[s].push(e)}clear(){this._canvasPool={}}}const Gi=new Sb,wb=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function wo(r){const e=typeof r.fontSize=="number"?`${r.fontSize}px`:r.fontSize;let t=r.fontFamily;Array.isArray(r.fontFamily)||(t=r.fontFamily.split(","));for(let i=t.length-1;i>=0;i--){let n=t[i].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&!wb.includes(n)&&(n=`"${n}"`),t[i]=n}return`${r.fontStyle} ${r.fontVariant} ${r.fontWeight} ${e} ${t.join(",")}`}const Bl={willReadFrequently:!0},li=class te{static get experimentalLetterSpacingSupported(){let e=te._experimentalLetterSpacingSupported;if(e!==void 0){const t=Se.get().getCanvasRenderingContext2D().prototype;e=te._experimentalLetterSpacingSupported="letterSpacing"in t||"textLetterSpacing"in t}return e}constructor(e,t,i,n,s,o,a,l,u){this.text=e,this.style=t,this.width=i,this.height=n,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(e=" ",t,i=te._canvas,n=t.wordWrap){var S;const s=`${e}:${t.styleKey}`;if(te._measurementCache[s])return te._measurementCache[s];const o=wo(t),a=te.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);const l=te.__context;l.font=o;const h=(n?te._wordWrap(e,t,i):e).split(/(?:\r\n|\r|\n)/),c=new Array(h.length);let d=0;for(let w=0;w<h.length;w++){const P=te._measureText(h[w],t.letterSpacing,l);c[w]=P,d=Math.max(d,P)}const f=((S=t._stroke)==null?void 0:S.width)||0;let g=d+f;t.dropShadow&&(g+=t.dropShadow.distance);const m=t.lineHeight||a.fontSize;let _=Math.max(m,a.fontSize+f)+(h.length-1)*(m+t.leading);return t.dropShadow&&(_+=t.dropShadow.distance),new te(e,t,g,_,h,c,m+t.leading,d,a)}static _measureText(e,t,i){let n=!1;te.experimentalLetterSpacingSupported&&(te.experimentalLetterSpacing?(i.letterSpacing=`${t}px`,i.textLetterSpacing=`${t}px`,n=!0):(i.letterSpacing="0px",i.textLetterSpacing="0px"));const s=i.measureText(e);let o=s.width;const a=-s.actualBoundingBoxLeft;let u=s.actualBoundingBoxRight-a;if(o>0)if(n)o-=t,u-=t;else{const h=(te.graphemeSegmenter(e).length-1)*t;o+=h,u+=h}return Math.max(o,u)}static _wordWrap(e,t,i=te._canvas){const n=i.getContext("2d",Bl);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:h}=t,c=te._collapseSpaces(h),d=te._collapseNewlines(h);let f=!c;const g=t.wordWrapWidth+u,m=te._tokenize(e);for(let _=0;_<m.length;_++){let y=m[_];if(te._isNewline(y)){if(!d){a+=te._addLine(o),f=!c,o="",s=0;continue}y=" "}if(c){const w=te.isBreakingSpace(y),P=te.isBreakingSpace(o[o.length-1]);if(w&&P)continue}const S=te._getFromCache(y,u,l,n);if(S>g)if(o!==""&&(a+=te._addLine(o),o="",s=0),te.canBreakWords(y,t.breakWords)){const w=te.wordWrapSplit(y);for(let P=0;P<w.length;P++){let E=w[P],U=E,B=1;for(;w[P+B];){const R=w[P+B];if(!te.canBreakChars(U,R,y,P,t.breakWords))E+=R;else break;U=R,B++}P+=B-1;const k=te._getFromCache(E,u,l,n);k+s>g&&(a+=te._addLine(o),f=!1,o="",s=0),o+=E,s+=k}}else{o.length>0&&(a+=te._addLine(o),o="",s=0);const w=_===m.length-1;a+=te._addLine(y,!w),f=!1,o="",s=0}else S+s>g&&(f=!1,a+=te._addLine(o),o="",s=0),(o.length>0||!te.isBreakingSpace(y)||f)&&(o+=y,s+=S)}return a+=te._addLine(o,!1),a}static _addLine(e,t=!0){return e=te._trimRight(e),e=t?`${e}
`:e,e}static _getFromCache(e,t,i,n){let s=i[e];return typeof s!="number"&&(s=te._measureText(e,t,n)+t,i[e]=s),s}static _collapseSpaces(e){return e==="normal"||e==="pre-line"}static _collapseNewlines(e){return e==="normal"}static _trimRight(e){if(typeof e!="string")return"";for(let t=e.length-1;t>=0;t--){const i=e[t];if(!te.isBreakingSpace(i))break;e=e.slice(0,-1)}return e}static _isNewline(e){return typeof e!="string"?!1:te._newlines.includes(e.charCodeAt(0))}static isBreakingSpace(e,t){return typeof e!="string"?!1:te._breakingSpaces.includes(e.charCodeAt(0))}static _tokenize(e){const t=[];let i="";if(typeof e!="string")return t;for(let n=0;n<e.length;n++){const s=e[n],o=e[n+1];if(te.isBreakingSpace(s,o)||te._isNewline(s)){i!==""&&(t.push(i),i=""),t.push(s);continue}i+=s}return i!==""&&t.push(i),t}static canBreakWords(e,t){return t}static canBreakChars(e,t,i,n,s){return!0}static wordWrapSplit(e){return te.graphemeSegmenter(e)}static measureFont(e){if(te._fonts[e])return te._fonts[e];const t=te._context;t.font=e;const i=t.measureText(te.METRICS_STRING+te.BASELINE_SYMBOL),n={ascent:i.actualBoundingBoxAscent,descent:i.actualBoundingBoxDescent,fontSize:i.actualBoundingBoxAscent+i.actualBoundingBoxDescent};return te._fonts[e]=n,n}static clearMetrics(e=""){e?delete te._fonts[e]:te._fonts={}}static get _canvas(){if(!te.__canvas){let e;try{const t=new OffscreenCanvas(0,0),i=t.getContext("2d",Bl);if(i!=null&&i.measureText)return te.__canvas=t,t;e=Se.get().createCanvas()}catch{e=Se.get().createCanvas()}e.width=e.height=10,te.__canvas=e}return te.__canvas}static get _context(){return te.__context||(te.__context=te._canvas.getContext("2d",Bl)),te.__context}};li.METRICS_STRING="|ÉqÅ",li.BASELINE_SYMBOL="M",li.BASELINE_MULTIPLIER=1.4,li.HEIGHT_MULTIPLIER=2,li.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const r=new Intl.Segmenter;return e=>[...r.segment(e)].map(t=>t.segment)}return r=>[...r]})(),li.experimentalLetterSpacing=!1,li._fonts={},li._newlines=[10,13],li._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288],li._measurementCache={};let _i=li;function To(r,e){if(r.texture===X.WHITE&&!r.fill)return ae.shared.setValue(r.color).setAlpha(r.alpha??1).toHexa();if(r.fill){if(r.fill instanceof xo){const t=r.fill,i=e.createPattern(t.texture.source.resource,"repeat"),n=t.transform.copyTo(se.shared);return n.scale(t.texture.frame.width,t.texture.frame.height),i.setTransform(n),i}else if(r.fill instanceof Hn){const t=r.fill;if(t.type==="linear"){const i=e.createLinearGradient(t.x0,t.y0,t.x1,t.y1);return t.gradientStops.forEach(n=>{i.addColorStop(n.offset,ae.shared.setValue(n.color).toHex())}),i}}}else{const t=e.createPattern(r.texture.source.resource,"repeat"),i=r.matrix.copyTo(se.shared);return i.scale(r.texture.frame.width,r.texture.frame.height),t.setTransform(i),t}return le("FillStyle not recognised",r),"red"}function Qd(r){if(r==="")return[];typeof r=="string"&&(r=[r]);const e=[];for(let t=0,i=r.length;t<i;t++){const n=r[t];if(Array.isArray(n)){if(n.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${n.length}.`);if(n[0].length===0||n[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=n[0].charCodeAt(0),o=n[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)e.push(String.fromCharCode(a))}else e.push(...Array.from(n))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}const Jd=class R0 extends pd{constructor(e){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const t={...R0.defaultOptions,...e};this._textureSize=t.textureSize,this._mipmap=t.mipmap;const i=t.style.clone();t.overrideFill&&(i._fill.color=16777215,i._fill.alpha=1,i._fill.texture=X.WHITE,i._fill.fill=null),this.applyFillAsTint=t.overrideFill;const n=i.fontSize;i.fontSize=this.baseMeasurementFontSize;const s=wo(i);t.overrideSize?i._stroke&&(i._stroke.width*=this.baseRenderedFontSize/n):i.fontSize=this.baseRenderedFontSize=n,this._style=i,this._skipKerning=t.skipKerning??!1,this.resolution=t.resolution??1,this._padding=t.padding??4,this.fontMetrics=_i.measureFont(s),this.lineHeight=i.lineHeight||this.fontMetrics.fontSize||i.fontSize}ensureCharacters(e){var g,m;const t=Qd(e).filter(_=>!this._currentChars.includes(_)).filter((_,y,S)=>S.indexOf(_)===y);if(!t.length)return;this._currentChars=[...this._currentChars,...t];let i;this._currentPageIndex===-1?i=this._nextPage():i=this.pages[this._currentPageIndex];let{canvas:n,context:s}=i.canvasAndContext,o=i.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const h=this.baseRenderedFontSize/this.baseMeasurementFontSize,c=this._padding*h;let d=0,f=!1;for(let _=0;_<t.length;_++){const y=t[_],S=_i.measureText(y,a,n,!1),w=Math.ceil((a.fontStyle==="italic"?2:1)*S.width);S.lineHeight=S.height;const P=S.width*h,E=S.height*h,U=w+c*2,B=E+c*2;if(f=!1,y!==`
`&&y!=="\r"&&y!=="	"&&y!==" "&&(f=!0,d=Math.ceil(Math.max(B,d))),l+U>this._textureSize&&(u+=d,d=B,l=0,u+d>this._textureSize)){o.update();const R=this._nextPage();n=R.canvasAndContext.canvas,s=R.canvasAndContext.context,o=R.texture.source,u=0}const k=P/h-(((g=a.dropShadow)==null?void 0:g.distance)??0)-(((m=a._stroke)==null?void 0:m.width)??0);if(this.chars[y]={id:y.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:k,kerning:{}},f){this._drawGlyph(s,S,l+c,u+c,h,a);const R=o.width*h,G=o.height*h,Q=new De(l/R*o.width,u/G*o.height,U/R*o.width,B/G*o.height);this.chars[y].texture=new X({source:o,frame:Q}),l+=Math.ceil(U)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(t,s)}get pageTextures(){return Y(Me,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(e,t){const i=this._measureCache;for(let n=0;n<e.length;n++){const s=e[n];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=i[s];l||(l=i[s]=t.measureText(s).width);let u=i[a];u||(u=i[a]=t.measureText(a).width);let h=t.measureText(s+a).width,c=h-(l+u);c&&(this.chars[s].kerning[a]=c),h=t.measureText(s+a).width,c=h-(l+u),c&&(this.chars[a].kerning[s]=c)}}}_nextPage(){this._currentPageIndex++;const e=this.resolution,t=Gi.getOptimalCanvasAndContext(this._textureSize,this._textureSize,e);this._setupContext(t.context,this._style,e);const i=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize),n=new X({source:new Sr({resource:t.canvas,resolution:i,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:t,texture:n};return this.pages[this._currentPageIndex]=s,s}_setupContext(e,t,i){t.fontSize=this.baseRenderedFontSize,e.scale(i,i),e.font=wo(t),t.fontSize=this.baseMeasurementFontSize,e.textBaseline=t.textBaseline;const n=t._stroke,s=(n==null?void 0:n.width)??0;if(n&&(e.lineWidth=s,e.lineJoin=n.join,e.miterLimit=n.miterLimit,e.strokeStyle=To(n,e)),t._fill&&(e.fillStyle=To(t._fill,e)),t.dropShadow){const o=t.dropShadow,a=ae.shared.setValue(o.color).toArray(),l=o.blur*i,u=o.distance*i;e.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,e.shadowBlur=l,e.shadowOffsetX=Math.cos(o.angle)*u,e.shadowOffsetY=Math.sin(o.angle)*u}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}_drawGlyph(e,t,i,n,s,o){const a=t.text,l=t.fontProperties,u=o._stroke,h=((u==null?void 0:u.width)??0)*s,c=i+h/2,d=n-h/2,f=l.descent*s,g=t.lineHeight*s;o.stroke&&h&&e.strokeText(a,c,d+g-f),o._fill&&e.fillText(a,c,d+g-f)}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{canvasAndContext:t,texture:i}=this.pages[e];Gi.returnCanvasAndContext(t),i.destroy(!0)}this.pages=null}};Jd.defaultOptions={textureSize:512,style:new vt,mipmap:!0};let ef=Jd;function tf(r,e,t,i){const n={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};n.offsetY=t.baseLineOffset;let s=n.lines[0],o=null,a=!0;const l={width:0,start:0,index:0,positions:[],chars:[]},u=g=>{const m=s.width;for(let _=0;_<l.index;_++){const y=g.positions[_];s.chars.push(g.chars[_]),s.charPositions.push(y+m)}s.width+=g.width,a=!1,l.width=0,l.index=0,l.chars.length=0},h=()=>{let g=s.chars.length-1;if(i){let m=s.chars[g];for(;m===" ";)s.width-=t.chars[m].xAdvance,m=s.chars[--g]}n.width=Math.max(n.width,s.width),s={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},a=!0,n.lines.push(s),n.height+=t.lineHeight},c=t.baseMeasurementFontSize/e.fontSize,d=e.letterSpacing*c,f=e.wordWrapWidth*c;for(let g=0;g<r.length+1;g++){let m;const _=g===r.length;_||(m=r[g]);const y=t.chars[m]||t.chars[" "];if(/(?:\s)/.test(m)||m==="\r"||m===`
`||_){if(!a&&e.wordWrap&&s.width+l.width-d>f?(h(),u(l),_||s.charPositions.push(0)):(l.start=s.width,u(l),_||s.charPositions.push(0)),m==="\r"||m===`
`)s.width!==0&&h();else if(!_){const E=y.xAdvance+(y.kerning[o]||0)+d;s.width+=E,s.spaceWidth=E,s.spacesIndex.push(s.charPositions.length),s.chars.push(m)}}else{const P=y.kerning[o]||0,E=y.xAdvance+P+d;l.positions[l.index++]=l.width+P,l.chars.push(m),l.width+=E}o=m}return h(),e.align==="center"?Tb(n):e.align==="right"?Cb(n):e.align==="justify"&&Pb(n),n}function Tb(r){for(let e=0;e<r.lines.length;e++){const t=r.lines[e],i=r.width/2-t.width/2;for(let n=0;n<t.charPositions.length;n++)t.charPositions[n]+=i}}function Cb(r){for(let e=0;e<r.lines.length;e++){const t=r.lines[e],i=r.width-t.width;for(let n=0;n<t.charPositions.length;n++)t.charPositions[n]+=i}}function Pb(r){const e=r.width;for(let t=0;t<r.lines.length;t++){const i=r.lines[t];let n=0,s=i.spacesIndex[n++],o=0;const a=i.spacesIndex.length,u=(e-i.width)/a;for(let h=0;h<i.charPositions.length;h++)h===s&&(s=i.spacesIndex[n++],o+=u),i.charPositions[h]+=o}}let Co=0;class Ab{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(e,t){var o;let i=`${t.fontFamily}-bitmap`,n=!0;if(t._fill.fill&&!t._stroke)i+=t._fill.fill.styleKey,n=!1;else if(t._stroke||t.dropShadow){let a=t.styleKey;a=a.substring(0,a.lastIndexOf("-")),i=`${a}-bitmap`,n=!1}if(!$e.has(i)){const a=new ef({style:t,overrideFill:n,overrideSize:!0,...this.defaultOptions});Co++,Co>50&&le("BitmapText",`You have dynamically created ${Co} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{Co--,$e.remove(i)}),$e.set(i,a)}const s=$e.get(i);return(o=s.ensureCharacters)==null||o.call(s,e),s}getLayout(e,t,i=!0){const n=this.getFont(e,t);return tf([...e],t,n,i)}measureText(e,t,i=!0){return this.getLayout(e,t,i)}install(...e){var u,h,c,d;let t=e[0];typeof t=="string"&&(t={name:t,style:e[1],chars:(u=e[2])==null?void 0:u.chars,resolution:(h=e[2])==null?void 0:h.resolution,padding:(c=e[2])==null?void 0:c.padding,skipKerning:(d=e[2])==null?void 0:d.skipKerning},Y(Me,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const i=t==null?void 0:t.name;if(!i)throw new Error("[BitmapFontManager] Property `name` is required.");t={...this.defaultOptions,...t};const n=t.style,s=n instanceof vt?n:new vt(n),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new ef({style:s,overrideFill:o,skipKerning:t.skipKerning,padding:t.padding,resolution:t.resolution,overrideSize:!1}),l=Qd(t.chars);return a.ensureCharacters(l.join("")),$e.set(`${i}-bitmap`,a),a.once("destroy",()=>$e.remove(`${i}-bitmap`)),a}uninstall(e){const t=`${e}-bitmap`,i=$e.get(t);i&&i.destroy()}}const kl=new Ab;class rf extends pd{constructor(e,t){super();const{textures:i,data:n}=e;Object.keys(n.pages).forEach(s=>{const o=n.pages[parseInt(s,10)],a=i[o.id];this.pages.push({texture:a})}),Object.keys(n.chars).forEach(s=>{const o=n.chars[s],{frame:a,source:l}=i[o.page],u=new De(o.x+a.x,o.y+a.y,o.width,o.height),h=new X({source:l,frame:u});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:h}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=t}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:t}=this.pages[e];t.destroy(!0)}this.pages=null}static install(e){kl.install(e)}static uninstall(e){kl.uninstall(e)}}const Ul={test(r){return typeof r=="string"&&r.startsWith("info face=")},parse(r){const e=r.match(/^[a-z]+\s+.+$/gm),t={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const c in e){const d=e[c].match(/^[a-z]+/gm)[0],f=e[c].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),g={};for(const m in f){const _=f[m].split("="),y=_[0],S=_[1].replace(/"/gm,""),w=parseFloat(S),P=isNaN(w)?S:w;g[y]=P}t[d].push(g)}const i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=t.info,[s]=t.common,[o]=t.distanceField??[];o&&(i.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),i.fontSize=parseInt(n.size,10),i.fontFamily=n.face,i.lineHeight=parseInt(s.lineHeight,10);const a=t.page;for(let c=0;c<a.length;c++)i.pages.push({id:parseInt(a[c].id,10)||0,file:a[c].file});const l={};i.baseLineOffset=i.lineHeight-parseInt(s.base,10);const u=t.char;for(let c=0;c<u.length;c++){const d=u[c],f=parseInt(d.id,10);let g=d.letter??d.char??String.fromCharCode(f);g==="space"&&(g=" "),l[f]=g,i.chars[g]={id:f,page:parseInt(d.page,10)||0,x:parseInt(d.x,10),y:parseInt(d.y,10),width:parseInt(d.width,10),height:parseInt(d.height,10),xOffset:parseInt(d.xoffset,10),yOffset:parseInt(d.yoffset,10),xAdvance:parseInt(d.xadvance,10),kerning:{}}}const h=t.kerning||[];for(let c=0;c<h.length;c++){const d=parseInt(h[c].first,10),f=parseInt(h[c].second,10),g=parseInt(h[c].amount,10);i.chars[l[f]].kerning[l[d]]=g}return i}},nf={test(r){const e=r;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(r){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},t=r.getElementsByTagName("info")[0],i=r.getElementsByTagName("common")[0],n=r.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const s=r.getElementsByTagName("page"),o=r.getElementsByTagName("char"),a=r.getElementsByTagName("kerning");e.fontSize=parseInt(t.getAttribute("size"),10),e.fontFamily=t.getAttribute("face"),e.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let u=0;u<s.length;u++)e.pages.push({id:parseInt(s[u].getAttribute("id"),10)||0,file:s[u].getAttribute("file")});const l={};e.baseLineOffset=e.lineHeight-parseInt(i.getAttribute("base"),10);for(let u=0;u<o.length;u++){const h=o[u],c=parseInt(h.getAttribute("id"),10);let d=h.getAttribute("letter")??h.getAttribute("char")??String.fromCharCode(c);d==="space"&&(d=" "),l[c]=d,e.chars[d]={id:c,page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xOffset:parseInt(h.getAttribute("xoffset"),10),yOffset:parseInt(h.getAttribute("yoffset"),10),xAdvance:parseInt(h.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const h=parseInt(a[u].getAttribute("first"),10),c=parseInt(a[u].getAttribute("second"),10),d=parseInt(a[u].getAttribute("amount"),10);e.chars[l[c]].kerning[l[h]]=d}return e}},sf={test(r){return typeof r=="string"&&r.includes("<font>")?nf.test(Se.get().parseXML(r)):!1},parse(r){return nf.parse(Se.get().parseXML(r))}},Eb=[".xml",".fnt"],Mb={extension:{type:M.CacheParser,name:"cacheBitmapFont"},test:r=>r instanceof rf,getCacheableAssets(r,e){const t={};return r.forEach(i=>{t[i]=e,t[`${i}-bitmap`]=e}),t[`${e.fontFamily}-bitmap`]=e,t}},Rb={extension:{type:M.LoadParser,priority:ki.Normal},name:"loadBitmapFont",test(r){return Eb.includes(mt.extname(r).toLowerCase())},async testParse(r){return Ul.test(r)||sf.test(r)},async parse(r,e,t){const i=Ul.test(r)?Ul.parse(r):sf.parse(r),{src:n}=e,{pages:s}=i,o=[],a=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let c=0;c<s.length;++c){const d=s[c].file;let f=mt.join(mt.dirname(n),d);f=ja(f,n),o.push({src:f,data:a})}const l=await t.load(o),u=o.map(c=>l[c.src]);return new rf({data:i,textures:u},n)},async load(r,e){return await(await Se.get().fetch(r)).text()},async unload(r,e,t){await Promise.all(r.pages.map(i=>t.unload(i.texture.source._sourceOrigin))),r.destroy()}};class Ib{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(t=>{this._assetList.push(t)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<t;i++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Ob={extension:{type:M.CacheParser,name:"cacheTextureArray"},test:r=>Array.isArray(r)&&r.every(e=>e instanceof X),getCacheableAssets:(r,e)=>{const t={};return r.forEach(i=>{e.forEach((n,s)=>{t[i+(s===0?"":s+1)]=n})}),t}};async function of(r){if("Image"in globalThis)return new Promise(e=>{const t=new Image;t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},t.src=r});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(r)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Fb={extension:{type:M.DetectionParser,priority:1},test:async()=>of("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async r=>[...r,"avif"],remove:async r=>r.filter(e=>e!=="avif")},af=["png","jpg","jpeg"],Bb={extension:{type:M.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async r=>[...r,...af],remove:async r=>r.filter(e=>!af.includes(e))},kb="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Dl(r){return kb?!1:document.createElement("video").canPlayType(r)!==""}const Ub={extension:{type:M.DetectionParser,priority:0},test:async()=>Dl("video/mp4"),add:async r=>[...r,"mp4","m4v"],remove:async r=>r.filter(e=>e!=="mp4"&&e!=="m4v")},Db={extension:{type:M.DetectionParser,priority:0},test:async()=>Dl("video/ogg"),add:async r=>[...r,"ogv"],remove:async r=>r.filter(e=>e!=="ogv")},Gb={extension:{type:M.DetectionParser,priority:0},test:async()=>Dl("video/webm"),add:async r=>[...r,"webm"],remove:async r=>r.filter(e=>e!=="webm")},zb={extension:{type:M.DetectionParser,priority:0},test:async()=>of("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async r=>[...r,"webp"],remove:async r=>r.filter(e=>e!=="webp")};class Lb{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,i)=>(this._parsersValidated=!1,e[t]=i,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){const i={promise:null,parser:null};return i.promise=(async()=>{var o,a;let n=null,s=null;if(t.loadParser&&(s=this._parserHash[t.loadParser],s||le(`[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`)),!s){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,e,t,this))){s=u;break}}if(!s)return le(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await s.load(e,t,this),i.parser=s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,n,t,this))&&(n=await u.parse(n,t,this)||n,i.parser=u)}return n})(),i}async load(e,t){this._parsersValidated||this._validateParsers();let i=0;const n={},s=lo(e),o=si(e,u=>({alias:[u],src:u,data:{}})),a=o.length,l=o.map(async u=>{const h=mt.toAbsolute(u.src);if(!n[u.src])try{this.promiseCache[h]||(this.promiseCache[h]=this._getLoadPromiseAndParser(h,u)),n[u.src]=await this.promiseCache[h].promise,t&&t(++i/a)}catch(c){throw delete this.promiseCache[h],delete n[u.src],new Error(`[Loader.load] Failed to load ${h}.
${c}`)}});return await Promise.all(l),s?n[o[0].src]:n}async unload(e){const i=si(e,n=>({alias:[n],src:n})).map(async n=>{var a,l;const s=mt.toAbsolute(n.src),o=this.promiseCache[s];if(o){const u=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,n,this))}});await Promise.all(i)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>(t.name?e[t.name]&&le(`[Assets] loadParser name conflict "${t.name}"`):le("[Assets] loadParser should have a name"),{...e,[t.name]:t}),{})}}function un(r,e){if(Array.isArray(e)){for(const t of e)if(r.startsWith(`data:${t}`))return!0;return!1}return r.startsWith(`data:${e}`)}function hn(r,e){const t=r.split("?")[0],i=mt.extname(t).toLowerCase();return Array.isArray(e)?e.includes(i):i===e}const Nb=".json",$b="application/json",Vb={extension:{type:M.LoadParser,priority:ki.Low},name:"loadJson",test(r){return un(r,$b)||hn(r,Nb)},async load(r){return await(await Se.get().fetch(r)).json()}},Hb=".txt",Wb="text/plain",jb={name:"loadTxt",extension:{type:M.LoadParser,priority:ki.Low,name:"loadTxt"},test(r){return un(r,Wb)||hn(r,Hb)},async load(r){return await(await Se.get().fetch(r)).text()}},Xb=["normal","bold","100","200","300","400","500","600","700","800","900"],Yb=[".ttf",".otf",".woff",".woff2"],qb=["font/ttf","font/otf","font/woff","font/woff2"],Kb=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Zb(r){const e=mt.extname(r),n=mt.basename(r,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=n.length>0;for(const a of n)if(!a.match(Kb)){s=!1;break}let o=n.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const Qb=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Jb(r){return Qb.test(r)?r:encodeURI(r)}const e2={extension:{type:M.LoadParser,priority:ki.Low},name:"loadWebFont",test(r){return un(r,qb)||hn(r,Yb)},async load(r,e){var i,n,s;const t=Se.get().getFontFaceSet();if(t){const o=[],a=((i=e.data)==null?void 0:i.family)??Zb(r),l=((s=(n=e.data)==null?void 0:n.weights)==null?void 0:s.filter(h=>Xb.includes(h)))??["normal"],u=e.data??{};for(let h=0;h<l.length;h++){const c=l[h],d=new FontFace(a,`url(${Jb(r)})`,{...u,weight:c});await d.load(),t.add(d),o.push(d)}return $e.set(`${a}-and-url`,{url:r,fontFaces:o}),o.length===1?o[0]:o}return le("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(r){(Array.isArray(r)?r:[r]).forEach(e=>{$e.remove(e.family),Se.get().getFontFaceSet().delete(e)})}};function Gl(r,e=1){var i;const t=(i=tn.RETINA_PREFIX)==null?void 0:i.exec(r);return t?parseFloat(t[1]):e}function zl(r,e,t){r.label=t,r._sourceOrigin=t;const i=new X({source:r,label:t}),n=()=>{delete e.promiseCache[t],$e.has(t)&&$e.remove(t)};return i.source.once("destroy",()=>{e.promiseCache[t]&&(le("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),i.once("destroy",()=>{r.destroyed||(le("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),i}const t2=".svg",i2="image/svg+xml",r2={extension:{type:M.LoadParser,priority:ki.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(r){return un(r,i2)||hn(r,t2)},async load(r,e,t){return e.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?s2(r):n2(r,e,t,this.config.crossOrigin)},unload(r){r.destroy(!0)}};async function n2(r,e,t,i){var _,y,S;const s=await(await Se.get().fetch(r)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=i,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),h=((_=e.data)==null?void 0:_.resolution)||Gl(r),c=((y=e.data)==null?void 0:y.width)??a.width,d=((S=e.data)==null?void 0:S.height)??a.height;l.width=c*h,l.height=d*h,u.drawImage(a,0,0,c*h,d*h);const{parseAsGraphicsContext:f,...g}=e.data,m=new Sr({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:h,...g});return zl(m,t,r)}async function s2(r){const t=await(await Se.get().fetch(r)).text(),i=new Qt;return i.svg(t),i}const o2=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let cn=null,Ll=class{constructor(){cn||(cn=URL.createObjectURL(new Blob([o2],{type:"application/javascript"}))),this.worker=new Worker(cn)}};Ll.revokeObjectURL=function(){cn&&(URL.revokeObjectURL(cn),cn=null)};const a2=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let dn=null;class lf{constructor(){dn||(dn=URL.createObjectURL(new Blob([a2],{type:"application/javascript"}))),this.worker=new Worker(dn)}}lf.revokeObjectURL=function(){dn&&(URL.revokeObjectURL(dn),dn=null)};let uf=0,Nl;class l2{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:t}=new Ll;t.addEventListener("message",i=>{t.terminate(),Ll.revokeObjectURL(),e(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,t){var i;return this._run("loadImageBitmap",[e,(i=t==null?void 0:t.data)==null?void 0:i.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Nl===void 0&&(Nl=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Nl&&(this._createdWorkers++,e=new lf().worker,e.addEventListener("message",t=>{this._complete(t.data),this._returnWorker(t.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,t){await this._initWorkers();const i=new Promise((n,s)=>{this._queue.push({id:e,arguments:t,resolve:n,reject:s})});return this._next(),i}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const t=this._queue.pop(),i=t.id;this._resolveHash[uf]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:uf++,id:i})}}const hf=new l2,u2=[".jpeg",".jpg",".png",".webp",".avif"],h2=["image/jpeg","image/png","image/webp","image/avif"];async function c2(r,e){var n;const t=await Se.get().fetch(r);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${r}: ${t.status} ${t.statusText}`);const i=await t.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}const cf={name:"loadTextures",extension:{type:M.LoadParser,priority:ki.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(r){return un(r,h2)||hn(r,u2)},async load(r,e,t){var s;let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await hf.isImageBitmapSupported()?i=await hf.loadImageBitmap(r,e):i=await c2(r,e):i=await new Promise(o=>{i=new Image,i.crossOrigin=this.config.crossOrigin,i.src=r,i.complete?o(i):i.onload=()=>{o(i)}});const n=new Sr({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:((s=e.data)==null?void 0:s.resolution)||Gl(r),...e.data});return zl(n,t,r)},unload(r){r.destroy(!0)}},df=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],d2=df.map(r=>`video/${r.substring(1)}`);function f2(r,e,t){t===void 0&&!e.startsWith("data:")?r.crossOrigin=m2(e):t!==!1&&(r.crossOrigin=typeof t=="string"?t:"anonymous")}function p2(r){return new Promise((e,t)=>{r.addEventListener("canplaythrough",i),r.addEventListener("error",n),r.load();function i(){s(),e()}function n(o){s(),t(o)}function s(){r.removeEventListener("canplaythrough",i),r.removeEventListener("error",n)}})}function m2(r,e=globalThis.location){if(r.startsWith("data:"))return"";e=e||globalThis.location;const t=new URL(r,document.baseURI);return t.hostname!==e.hostname||t.port!==e.port||t.protocol!==e.protocol?"anonymous":""}const g2={name:"loadVideo",extension:{type:M.LoadParser,name:"loadVideo"},test(r){const e=un(r,d2),t=hn(r,df);return e||t},async load(r,e,t){var l,u;const i={...ao.defaultOptions,resolution:((l=e.data)==null?void 0:l.resolution)||Gl(r),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Mc(),...e.data},n=document.createElement("video"),s={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(s).forEach(h=>{const c=s[h];c!==void 0&&n.setAttribute(h,c)}),i.muted===!0&&(n.muted=!0),f2(n,r,i.crossorigin);const o=document.createElement("source");let a;if(r.startsWith("data:"))a=r.slice(5,r.indexOf(";"));else if(!r.startsWith("blob:")){const h=r.split("?")[0].slice(r.lastIndexOf(".")+1).toLowerCase();a=ao.MIME_TYPES[h]||`video/${h}`}return o.src=r,a&&(o.type=a),new Promise(h=>{const c=async()=>{const d=new ao({...i,resource:n});n.removeEventListener("canplay",c),e.data.preload&&await p2(n),h(zl(d,t,r))};n.addEventListener("canplay",c),n.appendChild(o)})},unload(r){r.destroy(!0)}},ff={extension:{type:M.ResolveParser,name:"resolveTexture"},test:cf.test,parse:r=>{var e;return{resolution:parseFloat(((e=tn.RETINA_PREFIX.exec(r))==null?void 0:e[1])??"1"),format:r.split(".").pop(),src:r}}},_2={extension:{type:M.ResolveParser,priority:-2,name:"resolveJson"},test:r=>tn.RETINA_PREFIX.test(r)&&r.endsWith(".json"),parse:ff.parse};class x2{constructor(){this._detections=[],this._initialized=!1,this.resolver=new tn,this.loader=new Lb,this.cache=$e,this._backgroundLoader=new Ib(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var s,o;if(this._initialized){le("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let a=e.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const t=((s=e.texturePreference)==null?void 0:s.resolution)??1,i=typeof t=="number"?[t]:t,n=await this._detectFormats({preferredFormats:(o=e.texturePreference)==null?void 0:o.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:i}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();const i=lo(e),n=si(e).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(n),o=await this._mapLoadToResolve(s,t);return i?o[n[0]]:o}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let i=!1;typeof e=="string"&&(i=!0,e=[e]);const n=this.resolver.resolveBundle(e),s={},o=Object.keys(n);let a=0,l=0;const u=()=>{t==null||t(++a/l)},h=o.map(c=>{const d=n[c];return l+=Object.keys(d).length,this._mapLoadToResolve(d,u).then(f=>{s[c]=f})});return await Promise.all(h),i?s[e[0]]:s}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolveBundle(e);Object.values(t).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const t={};for(let i=0;i<e.length;i++)t[i]=$e.get(e[i]);return t}async _mapLoadToResolve(e,t){const i=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(i,t);this._backgroundLoader.active=!0;const s={};return i.forEach(o=>{const a=n[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{s[u]=a}),$e.set(l,a)}),s}async unload(e){this._initialized||await this.init();const t=si(e).map(n=>typeof n!="string"?n.src:n),i=this.resolver.resolve(t);await this._unloadFromResolved(i)}async unloadBundle(e){this._initialized||await this.init(),e=si(e);const t=this.resolver.resolveBundle(e),i=Object.keys(t).map(n=>this._unloadFromResolved(t[n]));await Promise.all(i)}async _unloadFromResolved(e){const t=Object.values(e);t.forEach(i=>{$e.remove(i.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const i of e.detections)e.skipDetections||await i.test()?t=await i.add(t):e.skipDetections||(t=await i.remove(t));return t=t.filter((i,n)=>t.indexOf(i)===n),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(i=>i in e).forEach(i=>{t.config[i]=e[i]})})}}const Cr=new x2;oe.handleByList(M.LoadParser,Cr.loader.parsers).handleByList(M.ResolveParser,Cr.resolver.parsers).handleByList(M.CacheParser,Cr.cache.parsers).handleByList(M.DetectionParser,Cr.detections),oe.add(Ob,Bb,Fb,zb,Ub,Db,Gb,Vb,jb,e2,r2,cf,g2,Rb,Mb,ff,_2);const pf={loader:M.LoadParser,resolver:M.ResolveParser,cache:M.CacheParser,detection:M.DetectionParser};oe.handle(M.Asset,r=>{const e=r.ref;Object.entries(pf).filter(([t])=>!!e[t]).forEach(([t,i])=>oe.add(Object.assign(e[t],{extension:e[t].extension??i})))},r=>{const e=r.ref;Object.keys(pf).filter(t=>!!e[t]).forEach(t=>oe.remove(e[t]))});class v2{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}init(e){this.removeTickerListener(),this.events=e,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(e){this._pauseUpdate=e}addTickerListener(){this._tickerAdded||!this.domElement||(pt.system.add(this._tickerUpdate,this,Gn.INTERACTION),this._tickerAdded=!0)}removeTickerListener(){this._tickerAdded&&(pt.system.remove(this._tickerUpdate,this),this._tickerAdded=!1)}pointerMoved(){this._didMove=!0}_update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}const e=this.events._rootPointerEvent;this.events.supportsTouchEvents&&e.pointerType==="touch"||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:e.clientX,clientY:e.clientY,pointerType:e.pointerType,pointerId:e.pointerId}))}_tickerUpdate(e){this._deltaTime+=e.deltaTime,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this._update())}}const Zi=new v2;class Po extends Ln{constructor(){super(...arguments),this.client=new Ge,this.movement=new Ge,this.offset=new Ge,this.global=new Ge,this.screen=new Ge}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(e,t,i){return e.worldTransform.applyInverse(i||this.global,t)}getModifierState(e){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(e)}initMouseEvent(e,t,i,n,s,o,a,l,u,h,c,d,f,g,m){throw new Error("Method not implemented.")}}class ui extends Po{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class fn extends Po{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}fn.DOM_DELTA_PIXEL=0,fn.DOM_DELTA_LINE=1,fn.DOM_DELTA_PAGE=2;const y2=2048,b2=new Ge,is=new Ge;class S2{constructor(e){this.dispatch=new nt,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=e,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(e,t){this.mappingTable[e]||(this.mappingTable[e]=[]),this.mappingTable[e].push({fn:t,priority:0}),this.mappingTable[e].sort((i,n)=>i.priority-n.priority)}dispatchEvent(e,t){e.propagationStopped=!1,e.propagationImmediatelyStopped=!1,this.propagate(e,t),this.dispatch.emit(t||e.type,e)}mapEvent(e){if(!this.rootTarget)return;const t=this.mappingTable[e.type];if(t)for(let i=0,n=t.length;i<n;i++)t[i].fn(e);else le(`[EventBoundary]: Event mapping not defined for ${e.type}`)}hitTest(e,t){Zi.pauseUpdate=!0;const n=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive",s=this[n](this.rootTarget,this.rootTarget.eventMode,b2.set(e,t),this.hitTestFn,this.hitPruneFn);return s&&s[0]}propagate(e,t){if(!e.target)return;const i=e.composedPath();e.eventPhase=e.CAPTURING_PHASE;for(let n=0,s=i.length-1;n<s;n++)if(e.currentTarget=i[n],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return;if(e.eventPhase=e.AT_TARGET,e.currentTarget=e.target,this.notifyTarget(e,t),!(e.propagationStopped||e.propagationImmediatelyStopped)){e.eventPhase=e.BUBBLING_PHASE;for(let n=i.length-2;n>=0;n--)if(e.currentTarget=i[n],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return}}all(e,t,i=this._allInteractiveElements){if(i.length===0)return;e.eventPhase=e.BUBBLING_PHASE;const n=Array.isArray(t)?t:[t];for(let s=i.length-1;s>=0;s--)n.forEach(o=>{e.currentTarget=i[s],this.notifyTarget(e,o)})}propagationPath(e){const t=[e];for(let i=0;i<y2&&e!==this.rootTarget&&e.parent;i++){if(!e.parent)throw new Error("Cannot find propagation path to disconnected target");t.push(e.parent),e=e.parent}return t.reverse(),t}hitTestMoveRecursive(e,t,i,n,s,o=!1){let a=!1;if(this._interactivePrune(e))return null;if((e.eventMode==="dynamic"||t==="dynamic")&&(Zi.pauseUpdate=!1),e.interactiveChildren&&e.children){const h=e.children;for(let c=h.length-1;c>=0;c--){const d=h[c],f=this.hitTestMoveRecursive(d,this._isInteractive(t)?t:d.eventMode,i,n,s,o||s(e,i));if(f){if(f.length>0&&!f[f.length-1].parent)continue;const g=e.isInteractive();(f.length>0||g)&&(g&&this._allInteractiveElements.push(e),f.push(e)),this._hitElements.length===0&&(this._hitElements=f),a=!0}}}const l=this._isInteractive(t),u=e.isInteractive();return u&&u&&this._allInteractiveElements.push(e),o||this._hitElements.length>0?null:a?this._hitElements:l&&!s(e,i)&&n(e,i)?u?[e]:[]:null}hitTestRecursive(e,t,i,n,s){if(this._interactivePrune(e)||s(e,i))return null;if((e.eventMode==="dynamic"||t==="dynamic")&&(Zi.pauseUpdate=!1),e.interactiveChildren&&e.children){const l=e.children,u=i;for(let h=l.length-1;h>=0;h--){const c=l[h],d=this.hitTestRecursive(c,this._isInteractive(t)?t:c.eventMode,u,n,s);if(d){if(d.length>0&&!d[d.length-1].parent)continue;const f=e.isInteractive();return(d.length>0||f)&&d.push(e),d}}}const o=this._isInteractive(t),a=e.isInteractive();return o&&n(e,i)?a?[e]:[]:null}_isInteractive(e){return e==="static"||e==="dynamic"}_interactivePrune(e){return!e||!e.visible||!e.renderable||!e.includeInBuild||!e.measurable||e.eventMode==="none"||e.eventMode==="passive"&&!e.interactiveChildren}hitPruneFn(e,t){if(e.hitArea&&(e.worldTransform.applyInverse(t,is),!e.hitArea.contains(is.x,is.y)))return!0;if(e.effects&&e.effects.length)for(let i=0;i<e.effects.length;i++){const n=e.effects[i];if(n.containsPoint&&!n.containsPoint(t,this.hitTestFn))return!0}return!1}hitTestFn(e,t){return e.hitArea?!0:e!=null&&e.containsPoint?(e.worldTransform.applyInverse(t,is),e.containsPoint(is)):!1}notifyTarget(e,t){var s,o;if(!e.currentTarget.isInteractive())return;t=t??e.type;const i=`on${t}`;(o=(s=e.currentTarget)[i])==null||o.call(s,e);const n=e.eventPhase===e.CAPTURING_PHASE||e.eventPhase===e.AT_TARGET?`${t}capture`:t;this._notifyListeners(e,n),e.eventPhase===e.AT_TARGET&&this._notifyListeners(e,t)}mapPointerDown(e){if(!(e instanceof ui)){le("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.createPointerEvent(e);if(this.dispatchEvent(t,"pointerdown"),t.pointerType==="touch")this.dispatchEvent(t,"touchstart");else if(t.pointerType==="mouse"||t.pointerType==="pen"){const n=t.button===2;this.dispatchEvent(t,n?"rightdown":"mousedown")}const i=this.trackingData(e.pointerId);i.pressTargetsByButton[e.button]=t.composedPath(),this.freeEvent(t)}mapPointerMove(e){var l,u;if(!(e instanceof ui)){le("EventBoundary cannot map a non-pointer event as a pointer event");return}this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const t=this.createPointerEvent(e);this._isPointerMoveEvent=!1;const i=t.pointerType==="mouse"||t.pointerType==="pen",n=this.trackingData(e.pointerId),s=this.findMountedTarget(n.overTargets);if(((l=n.overTargets)==null?void 0:l.length)>0&&s!==t.target){const h=e.type==="mousemove"?"mouseout":"pointerout",c=this.createPointerEvent(e,h,s);if(this.dispatchEvent(c,"pointerout"),i&&this.dispatchEvent(c,"mouseout"),!t.composedPath().includes(s)){const d=this.createPointerEvent(e,"pointerleave",s);for(d.eventPhase=d.AT_TARGET;d.target&&!t.composedPath().includes(d.target);)d.currentTarget=d.target,this.notifyTarget(d),i&&this.notifyTarget(d,"mouseleave"),d.target=d.target.parent;this.freeEvent(d)}this.freeEvent(c)}if(s!==t.target){const h=e.type==="mousemove"?"mouseover":"pointerover",c=this.clonePointerEvent(t,h);this.dispatchEvent(c,"pointerover"),i&&this.dispatchEvent(c,"mouseover");let d=s==null?void 0:s.parent;for(;d&&d!==this.rootTarget.parent&&d!==t.target;)d=d.parent;if(!d||d===this.rootTarget.parent){const g=this.clonePointerEvent(t,"pointerenter");for(g.eventPhase=g.AT_TARGET;g.target&&g.target!==s&&g.target!==this.rootTarget.parent;)g.currentTarget=g.target,this.notifyTarget(g),i&&this.notifyTarget(g,"mouseenter"),g.target=g.target.parent;this.freeEvent(g)}this.freeEvent(c)}const o=[],a=this.enableGlobalMoveEvents??!0;this.moveOnAll?o.push("pointermove"):this.dispatchEvent(t,"pointermove"),a&&o.push("globalpointermove"),t.pointerType==="touch"&&(this.moveOnAll?o.splice(1,0,"touchmove"):this.dispatchEvent(t,"touchmove"),a&&o.push("globaltouchmove")),i&&(this.moveOnAll?o.splice(1,0,"mousemove"):this.dispatchEvent(t,"mousemove"),a&&o.push("globalmousemove"),this.cursor=(u=t.target)==null?void 0:u.cursor),o.length>0&&this.all(t,o),this._allInteractiveElements.length=0,this._hitElements.length=0,n.overTargets=t.composedPath(),this.freeEvent(t)}mapPointerOver(e){var o;if(!(e instanceof ui)){le("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId),i=this.createPointerEvent(e),n=i.pointerType==="mouse"||i.pointerType==="pen";this.dispatchEvent(i,"pointerover"),n&&this.dispatchEvent(i,"mouseover"),i.pointerType==="mouse"&&(this.cursor=(o=i.target)==null?void 0:o.cursor);const s=this.clonePointerEvent(i,"pointerenter");for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),n&&this.notifyTarget(s,"mouseenter"),s.target=s.target.parent;t.overTargets=i.composedPath(),this.freeEvent(i),this.freeEvent(s)}mapPointerOut(e){if(!(e instanceof ui)){le("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId);if(t.overTargets){const i=e.pointerType==="mouse"||e.pointerType==="pen",n=this.findMountedTarget(t.overTargets),s=this.createPointerEvent(e,"pointerout",n);this.dispatchEvent(s),i&&this.dispatchEvent(s,"mouseout");const o=this.createPointerEvent(e,"pointerleave",n);for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),i&&this.notifyTarget(o,"mouseleave"),o.target=o.target.parent;t.overTargets=null,this.freeEvent(s),this.freeEvent(o)}this.cursor=null}mapPointerUp(e){if(!(e instanceof ui)){le("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=performance.now(),i=this.createPointerEvent(e);if(this.dispatchEvent(i,"pointerup"),i.pointerType==="touch")this.dispatchEvent(i,"touchend");else if(i.pointerType==="mouse"||i.pointerType==="pen"){const a=i.button===2;this.dispatchEvent(i,a?"rightup":"mouseup")}const n=this.trackingData(e.pointerId),s=this.findMountedTarget(n.pressTargetsByButton[e.button]);let o=s;if(s&&!i.composedPath().includes(s)){let a=s;for(;a&&!i.composedPath().includes(a);){if(i.currentTarget=a,this.notifyTarget(i,"pointerupoutside"),i.pointerType==="touch")this.notifyTarget(i,"touchendoutside");else if(i.pointerType==="mouse"||i.pointerType==="pen"){const l=i.button===2;this.notifyTarget(i,l?"rightupoutside":"mouseupoutside")}a=a.parent}delete n.pressTargetsByButton[e.button],o=a}if(o){const a=this.clonePointerEvent(i,"click");a.target=o,a.path=null,n.clicksByButton[e.button]||(n.clicksByButton[e.button]={clickCount:0,target:a.target,timeStamp:t});const l=n.clicksByButton[e.button];if(l.target===a.target&&t-l.timeStamp<200?++l.clickCount:l.clickCount=1,l.target=a.target,l.timeStamp=t,a.detail=l.clickCount,a.pointerType==="mouse"){const u=a.button===2;this.dispatchEvent(a,u?"rightclick":"click")}else a.pointerType==="touch"&&this.dispatchEvent(a,"tap");this.dispatchEvent(a,"pointertap"),this.freeEvent(a)}this.freeEvent(i)}mapPointerUpOutside(e){if(!(e instanceof ui)){le("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId),i=this.findMountedTarget(t.pressTargetsByButton[e.button]),n=this.createPointerEvent(e);if(i){let s=i;for(;s;)n.currentTarget=s,this.notifyTarget(n,"pointerupoutside"),n.pointerType==="touch"?this.notifyTarget(n,"touchendoutside"):(n.pointerType==="mouse"||n.pointerType==="pen")&&this.notifyTarget(n,n.button===2?"rightupoutside":"mouseupoutside"),s=s.parent;delete t.pressTargetsByButton[e.button]}this.freeEvent(n)}mapWheel(e){if(!(e instanceof fn)){le("EventBoundary cannot map a non-wheel event as a wheel event");return}const t=this.createWheelEvent(e);this.dispatchEvent(t),this.freeEvent(t)}findMountedTarget(e){if(!e)return null;let t=e[0];for(let i=1;i<e.length&&e[i].parent===t;i++)t=e[i];return t}createPointerEvent(e,t,i){const n=this.allocateEvent(ui);return this.copyPointerData(e,n),this.copyMouseData(e,n),this.copyData(e,n),n.nativeEvent=e.nativeEvent,n.originalEvent=e,n.target=i??this.hitTest(n.global.x,n.global.y)??this._hitElements[0],typeof t=="string"&&(n.type=t),n}createWheelEvent(e){const t=this.allocateEvent(fn);return this.copyWheelData(e,t),this.copyMouseData(e,t),this.copyData(e,t),t.nativeEvent=e.nativeEvent,t.originalEvent=e,t.target=this.hitTest(t.global.x,t.global.y),t}clonePointerEvent(e,t){const i=this.allocateEvent(ui);return i.nativeEvent=e.nativeEvent,i.originalEvent=e.originalEvent,this.copyPointerData(e,i),this.copyMouseData(e,i),this.copyData(e,i),i.target=e.target,i.path=e.composedPath().slice(),i.type=t??i.type,i}copyWheelData(e,t){t.deltaMode=e.deltaMode,t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ}copyPointerData(e,t){e instanceof ui&&t instanceof ui&&(t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist)}copyMouseData(e,t){e instanceof Po&&t instanceof Po&&(t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.copyFrom(e.client),t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.copyFrom(e.movement),t.screen.copyFrom(e.screen),t.shiftKey=e.shiftKey,t.global.copyFrom(e.global))}copyData(e,t){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.detail=e.detail,t.view=e.view,t.which=e.which,t.layer.copyFrom(e.layer),t.page.copyFrom(e.page)}trackingData(e){return this.mappingState.trackingData[e]||(this.mappingState.trackingData[e]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[e]}allocateEvent(e){this.eventPool.has(e)||this.eventPool.set(e,[]);const t=this.eventPool.get(e).pop()||new e(this);return t.eventPhase=t.NONE,t.currentTarget=null,t.defaultPrevented=!1,t.path=null,t.target=null,t}freeEvent(e){if(e.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const t=e.constructor;this.eventPool.has(t)||this.eventPool.set(t,[]),this.eventPool.get(t).push(e)}_notifyListeners(e,t){const i=e.currentTarget._events[t];if(i)if("fn"in i)i.once&&e.currentTarget.removeListener(t,i.fn,void 0,!0),i.fn.call(i.context,e);else for(let n=0,s=i.length;n<s&&!e.propagationImmediatelyStopped;n++)i[n].once&&e.currentTarget.removeListener(t,i[n].fn,void 0,!0),i[n].fn.call(i[n].context,e)}}const w2=1,T2={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},$l=class Hh{constructor(e){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=e,this.rootBoundary=new S2(null),Zi.init(this),this.autoPreventDefault=!0,this._eventsAdded=!1,this._rootPointerEvent=new ui(null),this._rootWheelEvent=new fn(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...Hh.defaultEventFeatures},{set:(t,i,n)=>(i==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=n),t[i]=n,!0)}),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerOverOut=this._onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(e){const{canvas:t,resolution:i}=this.renderer;this.setTargetElement(t),this.resolution=i,Hh._defaultEventMode=e.eventMode??"passive",Object.assign(this.features,e.eventFeatures??{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(e){this.resolution=e}destroy(){this.setTargetElement(null),this.renderer=null,this._currentCursor=null}setCursor(e){e=e||"default";let t=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(t=!1),this._currentCursor===e)return;this._currentCursor=e;const i=this.cursorStyles[e];if(i)switch(typeof i){case"string":t&&(this.domElement.style.cursor=i);break;case"function":i(e);break;case"object":t&&Object.assign(this.domElement.style,i);break}else t&&typeof e=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)&&(this.domElement.style.cursor=e)}get pointer(){return this._rootPointerEvent}_onPointerDown(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const t=this._normalizeToPointerData(e);this.autoPreventDefault&&t[0].isNormalized&&(e.cancelable||!("cancelable"in e))&&e.preventDefault();for(let i=0,n=t.length;i<n;i++){const s=t[i],o=this._bootstrapEvent(this._rootPointerEvent,s);this.rootBoundary.mapEvent(o)}this.setCursor(this.rootBoundary.cursor)}_onPointerMove(e){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,Zi.pointerMoved();const t=this._normalizeToPointerData(e);for(let i=0,n=t.length;i<n;i++){const s=this._bootstrapEvent(this._rootPointerEvent,t[i]);this.rootBoundary.mapEvent(s)}this.setCursor(this.rootBoundary.cursor)}_onPointerUp(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=e.target;e.composedPath&&e.composedPath().length>0&&(t=e.composedPath()[0]);const i=t!==this.domElement?"outside":"",n=this._normalizeToPointerData(e);for(let s=0,o=n.length;s<o;s++){const a=this._bootstrapEvent(this._rootPointerEvent,n[s]);a.type+=i,this.rootBoundary.mapEvent(a)}this.setCursor(this.rootBoundary.cursor)}_onPointerOverOut(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const t=this._normalizeToPointerData(e);for(let i=0,n=t.length;i<n;i++){const s=this._bootstrapEvent(this._rootPointerEvent,t[i]);this.rootBoundary.mapEvent(s)}this.setCursor(this.rootBoundary.cursor)}onWheel(e){if(!this.features.wheel)return;const t=this.normalizeWheelEvent(e);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(t)}setTargetElement(e){this._removeEvents(),this.domElement=e,Zi.domElement=e,this._addEvents()}_addEvents(){if(this._eventsAdded||!this.domElement)return;Zi.addTickerListener();const e=this.domElement.style;e&&(globalThis.navigator.msPointerEnabled?(e.msContentZooming="none",e.msTouchAction="none"):this.supportsPointerEvents&&(e.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this._onPointerMove,!0),this.domElement.addEventListener("pointerdown",this._onPointerDown,!0),this.domElement.addEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this._onPointerOverOut,!0),globalThis.addEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this._onPointerMove,!0),this.domElement.addEventListener("mousedown",this._onPointerDown,!0),this.domElement.addEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this._onPointerOverOut,!0),globalThis.addEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this._onPointerDown,!0),this.domElement.addEventListener("touchend",this._onPointerUp,!0),this.domElement.addEventListener("touchmove",this._onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this._eventsAdded=!0}_removeEvents(){if(!this._eventsAdded||!this.domElement)return;Zi.removeTickerListener();const e=this.domElement.style;e&&(globalThis.navigator.msPointerEnabled?(e.msContentZooming="",e.msTouchAction=""):this.supportsPointerEvents&&(e.touchAction="")),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this._onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this._onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this._onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this._onPointerMove,!0),this.domElement.removeEventListener("mousedown",this._onPointerDown,!0),this.domElement.removeEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this._onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this._onPointerDown,!0),this.domElement.removeEventListener("touchend",this._onPointerUp,!0),this.domElement.removeEventListener("touchmove",this._onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this._eventsAdded=!1}mapPositionToPoint(e,t,i){const n=this.domElement.isConnected?this.domElement.getBoundingClientRect():{width:this.domElement.width,height:this.domElement.height,left:0,top:0},s=1/this.resolution;e.x=(t-n.left)*(this.domElement.width/n.width)*s,e.y=(i-n.top)*(this.domElement.height/n.height)*s}_normalizeToPointerData(e){const t=[];if(this.supportsTouchEvents&&e instanceof TouchEvent)for(let i=0,n=e.changedTouches.length;i<n;i++){const s=e.changedTouches[i];typeof s.button>"u"&&(s.button=0),typeof s.buttons>"u"&&(s.buttons=1),typeof s.isPrimary>"u"&&(s.isPrimary=e.touches.length===1&&e.type==="touchstart"),typeof s.width>"u"&&(s.width=s.radiusX||1),typeof s.height>"u"&&(s.height=s.radiusY||1),typeof s.tiltX>"u"&&(s.tiltX=0),typeof s.tiltY>"u"&&(s.tiltY=0),typeof s.pointerType>"u"&&(s.pointerType="touch"),typeof s.pointerId>"u"&&(s.pointerId=s.identifier||0),typeof s.pressure>"u"&&(s.pressure=s.force||.5),typeof s.twist>"u"&&(s.twist=0),typeof s.tangentialPressure>"u"&&(s.tangentialPressure=0),typeof s.layerX>"u"&&(s.layerX=s.offsetX=s.clientX),typeof s.layerY>"u"&&(s.layerY=s.offsetY=s.clientY),s.isNormalized=!0,s.type=e.type,t.push(s)}else if(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent))){const i=e;typeof i.isPrimary>"u"&&(i.isPrimary=!0),typeof i.width>"u"&&(i.width=1),typeof i.height>"u"&&(i.height=1),typeof i.tiltX>"u"&&(i.tiltX=0),typeof i.tiltY>"u"&&(i.tiltY=0),typeof i.pointerType>"u"&&(i.pointerType="mouse"),typeof i.pointerId>"u"&&(i.pointerId=w2),typeof i.pressure>"u"&&(i.pressure=.5),typeof i.twist>"u"&&(i.twist=0),typeof i.tangentialPressure>"u"&&(i.tangentialPressure=0),i.isNormalized=!0,t.push(i)}else t.push(e);return t}normalizeWheelEvent(e){const t=this._rootWheelEvent;return this._transferMouseData(t,e),t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ,t.deltaMode=e.deltaMode,this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.nativeEvent=e,t.type=e.type,t}_bootstrapEvent(e,t){return e.originalEvent=null,e.nativeEvent=t,e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist,this._transferMouseData(e,t),this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.isTrusted=t.isTrusted,e.type==="pointerleave"&&(e.type="pointerout"),e.type.startsWith("mouse")&&(e.type=e.type.replace("mouse","pointer")),e.type.startsWith("touch")&&(e.type=T2[e.type]||e.type),e}_transferMouseData(e,t){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.x=t.clientX,e.client.y=t.clientY,e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.x=t.movementX,e.movement.y=t.movementY,e.page.x=t.pageX,e.page.y=t.pageY,e.relatedTarget=null,e.shiftKey=t.shiftKey}};$l.extension={name:"events",type:[M.WebGLSystem,M.CanvasSystem,M.WebGPUSystem],priority:-1},$l.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};let mf=$l;const C2={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,get interactive(){return this.eventMode==="dynamic"||this.eventMode==="static"},set interactive(r){this.eventMode=r?"static":"passive"},_internalEventMode:void 0,get eventMode(){return this._internalEventMode??mf.defaultEventMode},set eventMode(r){this._internalEventMode=r},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(r,e,t){const i=typeof t=="boolean"&&t||typeof t=="object"&&t.capture,n=typeof t=="object"?t.signal:void 0,s=typeof t=="object"?t.once===!0:!1,o=typeof e=="function"?void 0:e;r=i?`${r}capture`:r;const a=typeof e=="function"?e:e.handleEvent,l=this;n&&n.addEventListener("abort",()=>{l.off(r,a,o)}),s?l.once(r,a,o):l.on(r,a,o)},removeEventListener(r,e,t){const i=typeof t=="boolean"&&t||typeof t=="object"&&t.capture,n=typeof e=="function"?void 0:e;r=i?`${r}capture`:r,e=typeof e=="function"?e:e.handleEvent,this.off(r,e,n)},dispatchEvent(r){if(!(r instanceof Ln))throw new Error("Container cannot propagate events outside of the Federated Events API");return r.defaultPrevented=!1,r.path=null,r.target=this,r.manager.dispatchEvent(r),!r.defaultPrevented}};var gf=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,P2=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,_f=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const xf=class I0 extends _e{constructor(e){e={...I0.defaultOptions,...e};const t=ce.from({vertex:{source:_f,entryPoint:"mainVertex"},fragment:{source:_f,entryPoint:"mainFragment"}}),i=de.from({vertex:gf,fragment:P2,name:"alpha-filter"}),{alpha:n,...s}=e,o=new gt({uAlpha:{value:n,type:"f32"}});super({...s,gpuProgram:t,glProgram:i,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};xf.defaultOptions={alpha:1};let A2=xf,E2=0;class M2{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,i){const n=new st({...this.textureOptions,width:e,height:t,resolution:1,antialias:i,autoGarbageCollect:!0});return new X({source:n,label:`texturePool_${E2++}`})}getOptimalTexture(e,t,i=1,n){let s=Math.ceil(e*i-1e-6),o=Math.ceil(t*i-1e-6);s=Jr(s),o=Jr(o);const a=(s<<17)+(o<<1)+(n?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,n)),l.source._resolution=i,l.source.width=s/i,l.source.height=o/i,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=t,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(e,t=!1){const i=e.source;return this.getOptimalTexture(e.width,e.height,i._resolution,t)}returnTexture(e){const t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this._texturePool){const i=this._texturePool[t];if(i)for(let n=0;n<i.length;n++)i[n].destroy(!0)}this._texturePool={}}}const Le=new M2,vf={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},R2=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function I2(r){const e=vf[r],t=e.length;let i=R2,n="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<r;a++){let l=s.replace("%index%",a.toString());o=a,a>=t&&(o=r-a-1),l=l.replace("%value%",e[o].toString()),n+=l,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i}const O2=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function F2(r,e){const t=Math.ceil(r/2);let i=O2,n="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<r;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(t-1)}.0`),n+=a,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i=i.replace("%dimension%",e?"z":"w"),i}function B2(r,e){const t=F2(e,r),i=I2(e);return de.from({vertex:t,fragment:i,name:`blur-${r?"horizontal":"vertical"}-pass-filter`})}var k2=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function U2(r,e){const t=vf[e],i=t.length,n=[],s=[],o=[];for(let c=0;c<e;c++){n[c]=`@location(${c}) offset${c}: vec2<f32>,`,r?s[c]=`filteredCord + vec2(${c-i+1} * pixelStrength, 0.0),`:s[c]=`filteredCord + vec2(0.0, ${c-i+1} * pixelStrength),`;const d=c<i?c:e-c-1,f=t[d].toString();o[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${f};`}const a=n.join(`
`),l=s.join(`
`),u=o.join(`
`),h=k2.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u).replace("%dimension%",r?"z":"w");return ce.from({vertex:{source:h,entryPoint:"mainVertex"},fragment:{source:h,entryPoint:"mainFragment"}})}const yf=class O0 extends _e{constructor(e){e={...O0.defaultOptions,...e};const t=B2(e.horizontal,e.kernelSize),i=U2(e.horizontal,e.kernelSize);super({glProgram:t,gpuProgram:i,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,t,i,n){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,i,n);else{const s=Le.getSameSizeTexture(t);let o=t,a=s;this._state.blend=!1;const l=e.renderer.type===zt.WEBGPU;for(let u=0;u<this.passes-1;u++){e.applyFilter(this,o,a,u===0?!0:l);const h=a;a=o,o=h}this._state.blend=!0,e.applyFilter(this,o,i,n),Le.returnTexture(s)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};yf.defaultOptions={strength:8,quality:4,kernelSize:5};let rs=yf;class ns extends _e{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Y(Me,"BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]||"inherit"),e[3]!==void 0&&(t.kernelSize=e[3])),t={...rs.defaultOptions,...t};const{strength:i,strengthX:n,strengthY:s,quality:o,...a}=t;super({...a,compatibleRenderers:zt.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new rs({horizontal:!0,...t}),this.blurYFilter=new rs({horizontal:!1,...t}),this.quality=o,this.strengthX=n??i,this.strengthY=s??i,this.repeatEdgePixels=!1}apply(e,t,i,n){const s=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(s&&o){const a=Le.getSameSizeTexture(t);this.blurXFilter.blendMode="normal",this.blurXFilter.apply(e,t,a,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,a,i,n),Le.returnTexture(a)}else o?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,t,i,n)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(e,t,i,n))}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw new Error("BlurFilter's strengthX and strengthY are different");return this.strengthX}set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get strengthX(){return this.blurXFilter.blur}set strengthX(e){this.blurXFilter.blur=e,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(e){this.blurYFilter.blur=e,this.updatePadding()}get blur(){return Y("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength}set blur(e){Y("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength=e}get blurX(){return Y("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX}set blurX(e){Y("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX=e}get blurY(){return Y("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY}set blurY(e){Y("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}}ns.defaultOptions={strength:8,quality:4,kernelSize:5};var D2=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`,bf=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`;class G2 extends _e{constructor(e={}){const t=new gt({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=ce.from({vertex:{source:bf,entryPoint:"mainVertex"},fragment:{source:bf,entryPoint:"mainFragment"}}),n=de.from({vertex:gf,fragment:D2,name:"color-matrix-filter"});super({...e,gpuProgram:i,glProgram:n,resources:{colorMatrixUniforms:t}}),this.alpha=1}_loadMatrix(e,t=!1){let i=e;t&&(this._multiply(i,this.matrix,e),i=this._colorMatrix(i)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i,this.resources.colorMatrixUniforms.update()}_multiply(e,t,i){return e[0]=t[0]*i[0]+t[1]*i[5]+t[2]*i[10]+t[3]*i[15],e[1]=t[0]*i[1]+t[1]*i[6]+t[2]*i[11]+t[3]*i[16],e[2]=t[0]*i[2]+t[1]*i[7]+t[2]*i[12]+t[3]*i[17],e[3]=t[0]*i[3]+t[1]*i[8]+t[2]*i[13]+t[3]*i[18],e[4]=t[0]*i[4]+t[1]*i[9]+t[2]*i[14]+t[3]*i[19]+t[4],e[5]=t[5]*i[0]+t[6]*i[5]+t[7]*i[10]+t[8]*i[15],e[6]=t[5]*i[1]+t[6]*i[6]+t[7]*i[11]+t[8]*i[16],e[7]=t[5]*i[2]+t[6]*i[7]+t[7]*i[12]+t[8]*i[17],e[8]=t[5]*i[3]+t[6]*i[8]+t[7]*i[13]+t[8]*i[18],e[9]=t[5]*i[4]+t[6]*i[9]+t[7]*i[14]+t[8]*i[19]+t[9],e[10]=t[10]*i[0]+t[11]*i[5]+t[12]*i[10]+t[13]*i[15],e[11]=t[10]*i[1]+t[11]*i[6]+t[12]*i[11]+t[13]*i[16],e[12]=t[10]*i[2]+t[11]*i[7]+t[12]*i[12]+t[13]*i[17],e[13]=t[10]*i[3]+t[11]*i[8]+t[12]*i[13]+t[13]*i[18],e[14]=t[10]*i[4]+t[11]*i[9]+t[12]*i[14]+t[13]*i[19]+t[14],e[15]=t[15]*i[0]+t[16]*i[5]+t[17]*i[10]+t[18]*i[15],e[16]=t[15]*i[1]+t[16]*i[6]+t[17]*i[11]+t[18]*i[16],e[17]=t[15]*i[2]+t[16]*i[7]+t[17]*i[12]+t[18]*i[17],e[18]=t[15]*i[3]+t[16]*i[8]+t[17]*i[13]+t[18]*i[18],e[19]=t[15]*i[4]+t[16]*i[9]+t[17]*i[14]+t[18]*i[19]+t[19],e}_colorMatrix(e){const t=new Float32Array(e);return t[4]/=255,t[9]/=255,t[14]/=255,t[19]/=255,t}brightness(e,t){const i=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(i,t)}tint(e,t){const[i,n,s]=ae.shared.setValue(e).toArray(),o=[i,0,0,0,0,0,n,0,0,0,0,0,s,0,0,0,0,0,1,0];this._loadMatrix(o,t)}greyscale(e,t){const i=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(i,t)}grayscale(e,t){this.greyscale(e,t)}blackAndWhite(e){const t=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(t,e)}hue(e,t){e=(e||0)/180*Math.PI;const i=Math.cos(e),n=Math.sin(e),s=Math.sqrt,o=1/3,a=s(o),l=i+(1-i)*o,u=o*(1-i)-a*n,h=o*(1-i)+a*n,c=o*(1-i)+a*n,d=i+o*(1-i),f=o*(1-i)-a*n,g=o*(1-i)-a*n,m=o*(1-i)+a*n,_=i+o*(1-i),y=[l,u,h,0,0,c,d,f,0,0,g,m,_,0,0,0,0,0,1,0];this._loadMatrix(y,t)}contrast(e,t){const i=(e||0)+1,n=-.5*(i-1),s=[i,0,0,0,n,0,i,0,0,n,0,0,i,0,n,0,0,0,1,0];this._loadMatrix(s,t)}saturate(e=0,t){const i=e*2/3+1,n=(i-1)*-.5,s=[i,n,n,0,0,n,i,n,0,0,n,n,i,0,0,0,0,0,1,0];this._loadMatrix(s,t)}desaturate(){this.saturate(-1)}negative(e){const t=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(t,e)}sepia(e){const t=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(t,e)}technicolor(e){const t=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(t,e)}polaroid(e){const t=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(t,e)}toBGR(e){const t=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(t,e)}kodachrome(e){const t=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(t,e)}browni(e){const t=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(t,e)}vintage(e){const t=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(t,e)}colorTone(e,t,i,n,s){e=e||.2,t=t||.15,i=i||16770432,n=n||3375104;const o=ae.shared,[a,l,u]=o.setValue(i).toArray(),[h,c,d]=o.setValue(n).toArray(),f=[.3,.59,.11,0,0,a,l,u,e,0,h,c,d,t,0,a-h,l-c,u-d,0,0];this._loadMatrix(f,s)}night(e,t){e=e||.1;const i=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(i,t)}predator(e,t){const i=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(i,t)}lsd(e){const t=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(t,e)}reset(){const e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(e,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(e){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=e}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(e){this.resources.colorMatrixUniforms.uniforms.uAlpha=e}}class Sf{constructor(e){this._renderer=e}push(e,t,i){this._renderer.renderPipes.batch.break(i),i.add({renderPipeId:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,i){this._renderer.renderPipes.batch.break(i),i.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}execute(e){e.action==="pushFilter"?this._renderer.filter.push(e):e.action==="popFilter"&&this._renderer.filter.pop()}destroy(){this._renderer=null}}Sf.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"filter"};const z2=new se;function L2(r,e){return e.clear(),wf(r,e),e.isValid||e.set(0,0,0,0),r.renderGroup?e.applyMatrix(r.renderGroup.localTransform):e.applyMatrix(r.parentRenderGroup.worldTransform),e}function wf(r,e){if(r.localDisplayStatus!==7||!r.measurable)return;const t=!!r.effects.length;let i=e;if((r.renderGroup||t)&&(i=Bi.get().clear()),r.boundsArea)e.addRect(r.boundsArea,r.worldTransform);else{if(r.renderPipeId){const s=r.bounds;i.addFrame(s.minX,s.minY,s.maxX,s.maxY,r.groupTransform)}const n=r.children;for(let s=0;s<n.length;s++)wf(n[s],i)}if(t){let n=!1;for(let s=0;s<r.effects.length;s++)r.effects[s].addBounds&&(n||(n=!0,i.applyMatrix(r.parentRenderGroup.worldTransform)),r.effects[s].addBounds(i,!0));n&&(i.applyMatrix(r.parentRenderGroup.worldTransform.copyTo(z2).invert()),e.addBounds(i,r.relativeGroupTransform)),e.addBounds(i),Bi.return(i)}else r.renderGroup&&(e.addBounds(i,r.relativeGroupTransform),Bi.return(i))}function N2(r,e){e.clear();const t=e.matrix;for(let i=0;i<r.length;i++){const n=r[i];n.globalDisplayStatus<7||(e.matrix=n.worldTransform,n.addBounds(e))}return e.matrix=t,e}const $2=new Yn({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});class Tf{constructor(e){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new gt({uInputSize:{value:new Float32Array(4),type:"vec4<f32>"},uInputPixel:{value:new Float32Array(4),type:"vec4<f32>"},uInputClamp:{value:new Float32Array(4),type:"vec4<f32>"},uOutputFrame:{value:new Float32Array(4),type:"vec4<f32>"},uGlobalFrame:{value:new Float32Array(4),type:"vec4<f32>"},uOutputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new Di({}),this.renderer=e}get activeBackTexture(){var e;return(e=this._activeFilterData)==null?void 0:e.backTexture}push(e){var f;const t=this.renderer,i=e.filterEffect.filters;this._filterStack[this._filterStackIndex]||(this._filterStack[this._filterStackIndex]=this._getFilterData());const n=this._filterStack[this._filterStackIndex];if(this._filterStackIndex++,i.length===0){n.skip=!0;return}const s=n.bounds;e.renderables?N2(e.renderables,s):e.filterEffect.filterArea?(s.clear(),s.addRect(e.filterEffect.filterArea),s.applyMatrix(e.container.worldTransform)):L2(e.container,s);const o=t.renderTarget.renderTarget.colorTexture.source;let a=1/0,l=0,u=!0,h=!1,c=!1,d=!0;for(let g=0;g<i.length;g++){const m=i[g];if(a=Math.min(a,m.resolution==="inherit"?o._resolution:m.resolution),l+=m.padding,m.antialias==="off"?u=!1:m.antialias==="inherit"&&u&&(u=o.antialias),m.clipToViewport||(d=!1),!!!(m.compatibleRenderers&t.type)){c=!1;break}if(m.blendRequired&&!(((f=t.backBuffer)==null?void 0:f.useBackBuffer)??!0)){le("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."),c=!1;break}c=m.enabled||c,h=h||m.blendRequired}if(!c){n.skip=!0;return}if(s.scale(a),d){const g=t.renderTarget.rootViewPort;s.fitBounds(0,g.width,0,g.height)}if(s.ceil().scale(1/a).pad(l|0),!s.isPositive){n.skip=!0;return}n.skip=!1,n.bounds=s,n.blendRequired=h,n.container=e.container,n.filterEffect=e.filterEffect,n.previousRenderSurface=t.renderTarget.renderSurface,n.inputTexture=Le.getOptimalTexture(s.width,s.height,a,u),t.renderTarget.bind(n.inputTexture,!0),t.globalUniforms.push({offset:s})}pop(){const e=this.renderer;this._filterStackIndex--;const t=this._filterStack[this._filterStackIndex];if(t.skip)return;this._activeFilterData=t;const i=t.inputTexture,n=t.bounds;let s=X.EMPTY;if(e.renderTarget.finishRenderPass(),t.blendRequired){const a=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null,l=e.renderTarget.getRenderTarget(t.previousRenderSurface);s=this.getBackTexture(l,n,a)}t.backTexture=s;const o=t.filterEffect.filters;if(this._globalFilterBindGroup.setResource(i.source.style,2),this._globalFilterBindGroup.setResource(s.source,3),e.globalUniforms.pop(),o.length===1)o[0].apply(this,i,t.previousRenderSurface,!1),Le.returnTexture(i);else{let a=t.inputTexture,l=Le.getOptimalTexture(n.width,n.height,a.source._resolution,!1),u=0;for(u=0;u<o.length-1;++u){o[u].apply(this,a,l,!0);const c=a;a=l,l=c}o[u].apply(this,a,t.previousRenderSurface,!1),Le.returnTexture(a),Le.returnTexture(l)}t.blendRequired&&Le.returnTexture(s)}getBackTexture(e,t,i){const n=e.colorTexture.source._resolution,s=Le.getOptimalTexture(t.width,t.height,n,!1);let o=t.minX,a=t.minY;i&&(o-=i.minX,a-=i.minY),o=Math.floor(o*n),a=Math.floor(a*n);const l=Math.ceil(t.width*n),u=Math.ceil(t.height*n);return this.renderer.renderTarget.copyToTexture(e,s,{x:o,y:a},{width:l,height:u},{x:0,y:0}),s}applyFilter(e,t,i,n){const s=this.renderer,o=this._filterStack[this._filterStackIndex],a=o.bounds,l=Ge.shared,h=o.previousRenderSurface===i;let c=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution,d=this._filterStackIndex-1;for(;d>0&&this._filterStack[d].skip;)--d;d>0&&(c=this._filterStack[d].inputTexture.source._resolution);const f=this._filterGlobalUniforms,g=f.uniforms,m=g.uOutputFrame,_=g.uInputSize,y=g.uInputPixel,S=g.uInputClamp,w=g.uGlobalFrame,P=g.uOutputTexture;if(h){let B=this._filterStackIndex;for(;B>0;){B--;const k=this._filterStack[this._filterStackIndex-1];if(!k.skip){l.x=k.bounds.minX,l.y=k.bounds.minY;break}}m[0]=a.minX-l.x,m[1]=a.minY-l.y}else m[0]=0,m[1]=0;m[2]=t.frame.width,m[3]=t.frame.height,_[0]=t.source.width,_[1]=t.source.height,_[2]=1/_[0],_[3]=1/_[1],y[0]=t.source.pixelWidth,y[1]=t.source.pixelHeight,y[2]=1/y[0],y[3]=1/y[1],S[0]=.5*y[2],S[1]=.5*y[3],S[2]=t.frame.width*_[2]-.5*y[2],S[3]=t.frame.height*_[3]-.5*y[3];const E=this.renderer.renderTarget.rootRenderTarget.colorTexture;w[0]=l.x*c,w[1]=l.y*c,w[2]=E.source.width*c,w[3]=E.source.height*c;const U=this.renderer.renderTarget.getRenderTarget(i);if(s.renderTarget.bind(i,!!n),i instanceof X?(P[0]=i.frame.width,P[1]=i.frame.height):(P[0]=U.width,P[1]=U.height),P[2]=U.isRoot?-1:1,f.update(),s.renderPipes.uniformBatch){const B=s.renderPipes.uniformBatch.getUboResource(f);this._globalFilterBindGroup.setResource(B,0)}else this._globalFilterBindGroup.setResource(f,0);this._globalFilterBindGroup.setResource(t.source,1),this._globalFilterBindGroup.setResource(t.source.style,2),e.groups[0]=this._globalFilterBindGroup,s.encoder.draw({geometry:$2,shader:e,state:e._state,topology:"triangle-list"}),s.type===zt.WEBGL&&s.renderTarget.finishRenderPass()}_getFilterData(){return{skip:!1,inputTexture:null,bounds:new Mt,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(e,t){const i=this._activeFilterData,n=e.set(i.inputTexture._source.width,0,0,i.inputTexture._source.height,i.bounds.minX,i.bounds.minY),s=t.worldTransform.copyTo(se.shared);return s.invert(),n.prepend(s),n.scale(1/t.texture.frame.width,1/t.texture.frame.height),n.translate(t.anchor.x,t.anchor.y),n}}Tf.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"filter"};var V2=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha;
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    float a = alphaMul * masky.r * npmAlpha * clip;

    if (uInverse == 1.0) {
        a = 1.0 - a;
    }

    finalColor = original * a;
}
`,H2=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,Cf=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
  uInverse:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;
    var uAlpha = filterUniforms.uAlpha;

    var clip = step(3.5,
      step(maskClamp.x, filterUv.x) +
      step(maskClamp.y, filterUv.y) +
      step(filterUv.x, maskClamp.z) +
      step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);

    var a: f32 = alphaMul * mask.r * uAlpha * clip;

    if (filterUniforms.uInverse == 1.0) {
        a = 1.0 - a;
    }

    return source * a;
}
`;class W2 extends _e{constructor(e){const{sprite:t,...i}=e,n=new ic(t.texture),s=new gt({uFilterMatrix:{value:new se,type:"mat3x3<f32>"},uMaskClamp:{value:n.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"},uInverse:{value:e.inverse?1:0,type:"f32"}}),o=ce.from({vertex:{source:Cf,entryPoint:"mainVertex"},fragment:{source:Cf,entryPoint:"mainFragment"}}),a=de.from({vertex:H2,fragment:V2,name:"mask-filter"});super({...i,gpuProgram:o,glProgram:a,resources:{filterUniforms:s,uMaskTexture:t.texture.source}}),this.sprite=t,this._textureMatrix=n}set inverse(e){this.resources.filterUniforms.uniforms.uInverse=e?1:0}get inverse(){return this.resources.filterUniforms.uniforms.uInverse===1}apply(e,t,i,n){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=this.sprite.texture.source,e.applyFilter(this,t,i,n)}}class je extends so{constructor(e){e instanceof Qt&&(e={context:e});const{context:t,roundPixels:i,...n}=e||{};super({label:"Graphics",...n}),this.renderPipeId="graphics",t?this._context=t:this._context=this._ownedContext=new Qt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=i??!1}set context(e){e!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=e,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(e){e.addBounds(this._context.bounds)}containsPoint(e){return this._context.containsPoint(e)}destroy(e){this._ownedContext&&!e?this._ownedContext.destroy(e):(e===!0||(e==null?void 0:e.context)===!0)&&this._context.destroy(e),this._ownedContext=null,this._context=null,super.destroy(e)}_callContextMethod(e,t){return this.context[e](...t),this}setFillStyle(...e){return this._callContextMethod("setFillStyle",e)}setStrokeStyle(...e){return this._callContextMethod("setStrokeStyle",e)}fill(...e){return this._callContextMethod("fill",e)}stroke(...e){return this._callContextMethod("stroke",e)}texture(...e){return this._callContextMethod("texture",e)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...e){return this._callContextMethod("arc",e)}arcTo(...e){return this._callContextMethod("arcTo",e)}arcToSvg(...e){return this._callContextMethod("arcToSvg",e)}bezierCurveTo(...e){return this._callContextMethod("bezierCurveTo",e)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...e){return this._callContextMethod("ellipse",e)}circle(...e){return this._callContextMethod("circle",e)}path(...e){return this._callContextMethod("path",e)}lineTo(...e){return this._callContextMethod("lineTo",e)}moveTo(...e){return this._callContextMethod("moveTo",e)}quadraticCurveTo(...e){return this._callContextMethod("quadraticCurveTo",e)}rect(...e){return this._callContextMethod("rect",e)}roundRect(...e){return this._callContextMethod("roundRect",e)}poly(...e){return this._callContextMethod("poly",e)}regularPoly(...e){return this._callContextMethod("regularPoly",e)}roundPoly(...e){return this._callContextMethod("roundPoly",e)}roundShape(...e){return this._callContextMethod("roundShape",e)}filletRect(...e){return this._callContextMethod("filletRect",e)}chamferRect(...e){return this._callContextMethod("chamferRect",e)}star(...e){return this._callContextMethod("star",e)}svg(...e){return this._callContextMethod("svg",e)}restore(...e){return this._callContextMethod("restore",e)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...e){return this._callContextMethod("rotate",e)}scaleTransform(...e){return this._callContextMethod("scale",e)}setTransform(...e){return this._callContextMethod("setTransform",e)}transform(...e){return this._callContextMethod("transform",e)}translateTransform(...e){return this._callContextMethod("translate",e)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(e){this._context.fillStyle=e}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(e){this._context.strokeStyle=e}clone(e=!1){return e?new je(this._context.clone()):(this._ownedContext=null,new je(this._context))}lineStyle(e,t,i){Y(Me,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const n={};return e&&(n.width=e),t&&(n.color=t),i&&(n.alpha=i),this.context.strokeStyle=n,this}beginFill(e,t){Y(Me,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const i={};return e&&(i.color=e),t&&(i.alpha=t),this.context.fillStyle=i,this}endFill(){Y(Me,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const e=this.context.strokeStyle;return(e.width!==Qt.defaultStrokeStyle.width||e.color!==Qt.defaultStrokeStyle.color||e.alpha!==Qt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...e){return Y(Me,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",e)}drawEllipse(...e){return Y(Me,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",e)}drawPolygon(...e){return Y(Me,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",e)}drawRect(...e){return Y(Me,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",e)}drawRoundedRect(...e){return Y(Me,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",e)}drawStar(...e){return Y(Me,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",e)}}const Pf=class F0 extends Yn{constructor(...e){let t=e[0]??{};t instanceof Float32Array&&(Y(Me,"use new MeshGeometry({ positions, uvs, indices }) instead"),t={positions:t,uvs:e[1],indices:e[2]}),t={...F0.defaultOptions,...t};const i=t.positions||new Float32Array([0,0,1,0,1,1,0,1]),n=t.uvs||new Float32Array([0,0,1,0,1,1,0,1]),s=t.indices||new Uint32Array([0,1,2,0,2,3]),o=t.shrinkBuffersToFit,a=new Nt({data:i,label:"attribute-mesh-positions",shrinkToFit:o,usage:Ae.VERTEX|Ae.COPY_DST}),l=new Nt({data:n,label:"attribute-mesh-uvs",shrinkToFit:o,usage:Ae.VERTEX|Ae.COPY_DST}),u=new Nt({data:s,label:"index-mesh-buffer",shrinkToFit:o,usage:Ae.INDEX|Ae.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:t.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};Pf.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Vl=Pf;class j2 extends so{constructor(e,t){const{text:i,resolution:n,style:s,anchor:o,width:a,height:l,roundPixels:u,...h}=e;super({...h}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=t,this.text=i??"",this.style=s,this.resolution=n??null,this.allowChildren=!1,this._anchor=new xt({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=u??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var t;e=e||{},(t=this._style)==null||t.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,this.bounds.width),t!==void 0&&this._setHeight(t,this.bounds.height)}addBounds(e){const t=this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}containsPoint(e){const t=this.bounds.width,i=this.bounds.height,n=-t*this.anchor.x;let s=0;return e.x>=n&&e.x<=n+t&&(s=-i*this.anchor.y,e.y>=s&&e.y<=s+i)}onViewUpdate(){this._boundsDirty=!0,this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function X2(r,e){let t=r[0]??{};return(typeof t=="string"||r[1])&&(Y(Me,`use new ${e}({ text: "hi!", style }) instead`),t={text:t,style:r[1]}),t}class ot extends j2{constructor(...e){const t=X2(e,"Text");super(t,vt),this.renderPipeId="text"}_updateBounds(){const e=this._bounds,t=this._anchor,i=_i.measureText(this._text,this._style),{width:n,height:s}=i;e.minX=-t._x*n,e.maxX=e.minX+n,e.minY=-t._y*s,e.maxY=e.minY+s}}function Y2(r){const e=r._stroke,t=r._fill,n=[`div { ${[`color: ${ae.shared.setValue(t.color).toHex()}`,`font-size: ${r.fontSize}px`,`font-family: ${r.fontFamily}`,`font-weight: ${r.fontWeight}`,`font-style: ${r.fontStyle}`,`font-variant: ${r.fontVariant}`,`letter-spacing: ${r.letterSpacing}px`,`text-align: ${r.align}`,`padding: ${r.padding}px`,`white-space: ${r.whiteSpace==="pre"&&r.wordWrap?"pre-wrap":r.whiteSpace}`,...r.lineHeight?[`line-height: ${r.lineHeight}px`]:[],...r.wordWrap?[`word-wrap: ${r.breakWords?"break-all":"break-word"}`,`max-width: ${r.wordWrapWidth}px`]:[],...e?[Ef(e)]:[],...r.dropShadow?[Af(r.dropShadow)]:[],...r.cssOverrides].join(";")} }`];return q2(r.tagStyles,n),n.join(" ")}function Af(r){const e=ae.shared.setValue(r.color).setAlpha(r.alpha).toHexa(),t=Math.round(Math.cos(r.angle)*r.distance),i=Math.round(Math.sin(r.angle)*r.distance),n=`${t}px ${i}px`;return r.blur>0?`text-shadow: ${n} ${r.blur}px ${e}`:`text-shadow: ${n} ${e}`}function Ef(r){return[`-webkit-text-stroke-width: ${r.width}px`,`-webkit-text-stroke-color: ${ae.shared.setValue(r.color).toHex()}`,`text-stroke-width: ${r.width}px`,`text-stroke-color: ${ae.shared.setValue(r.color).toHex()}`,"paint-order: stroke"].join(";")}const Mf={fontSize:"font-size: {{VALUE}}px",fontFamily:"font-family: {{VALUE}}",fontWeight:"font-weight: {{VALUE}}",fontStyle:"font-style: {{VALUE}}",fontVariant:"font-variant: {{VALUE}}",letterSpacing:"letter-spacing: {{VALUE}}px",align:"text-align: {{VALUE}}",padding:"padding: {{VALUE}}px",whiteSpace:"white-space: {{VALUE}}",lineHeight:"line-height: {{VALUE}}px",wordWrapWidth:"max-width: {{VALUE}}px"},Rf={fill:r=>`color: ${ae.shared.setValue(r).toHex()}`,breakWords:r=>`word-wrap: ${r?"break-all":"break-word"}`,stroke:Ef,dropShadow:Af};function q2(r,e){for(const t in r){const i=r[t],n=[];for(const s in i)Rf[s]?n.push(Rf[s](i[s])):Mf[s]&&n.push(Mf[s].replace("{{VALUE}}",i[s]));e.push(`${t} { ${n.join(";")} }`)}}class Hl extends vt{constructor(e={}){super(e),this._cssOverrides=[],this.cssOverrides??(this.cssOverrides=e.cssOverrides),this.tagStyles=e.tagStyles??{}}set cssOverrides(e){this._cssOverrides=e instanceof Array?e:[e],this.update()}get cssOverrides(){return this._cssOverrides}_generateKey(){return this._styleKey=Kd(this)+this._cssOverrides.join("-"),this._styleKey}update(){this._cssStyle=null,super.update()}clone(){return new Hl({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow?{...this.dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,cssOverrides:this.cssOverrides})}get cssStyle(){return this._cssStyle||(this._cssStyle=Y2(this)),this._cssStyle}addOverride(...e){const t=e.filter(i=>!this.cssOverrides.includes(i));t.length>0&&(this.cssOverrides.push(...t),this.update())}removeOverride(...e){const t=e.filter(i=>this.cssOverrides.includes(i));t.length>0&&(this.cssOverrides=this.cssOverrides.filter(i=>!t.includes(i)),this.update())}set fill(e){typeof e!="string"&&typeof e!="number"&&le("[HTMLTextStyle] only color fill is not supported by HTMLText"),super.fill=e}set stroke(e){e&&typeof e!="string"&&typeof e!="number"&&le("[HTMLTextStyle] only color stroke is not supported by HTMLText"),super.stroke=e}}const If="http://www.w3.org/2000/svg",Of="http://www.w3.org/1999/xhtml";class Ff{constructor(){this.svgRoot=document.createElementNS(If,"svg"),this.foreignObject=document.createElementNS(If,"foreignObject"),this.domElement=document.createElementNS(Of,"div"),this.styleElement=document.createElementNS(Of,"style"),this.image=new Image;const{foreignObject:e,svgRoot:t,styleElement:i,domElement:n}=this;e.setAttribute("width","10000"),e.setAttribute("height","10000"),e.style.overflow="hidden",t.appendChild(e),e.appendChild(i),e.appendChild(n)}}let Bf;function K2(r,e,t,i){i=i||Bf||(Bf=new Ff);const{domElement:n,styleElement:s,svgRoot:o}=i;n.innerHTML=`<style>${e.cssStyle};</style><div style='padding:0'>${r}</div>`,n.setAttribute("style","transform-origin: top left; display: inline-block"),t&&(s.textContent=t),document.body.appendChild(o);const a=n.getBoundingClientRect();o.remove();const l=_i.measureFont(e.fontStyle).descent,u=e.padding*2;return{width:a.width-u,height:a.height+l-u}}class kf{constructor(){this._didUpload=!1,this._tempState=ai.for2d()}init(e){e.renderer.runners.contextChange.add(this)}contextChange(){this._didUpload=!1}start(e,t,i){const n=e.renderer;n.shader.bind(i,this._didUpload),n.shader.updateUniformGroup(n.globalUniforms.uniformGroup),n.geometry.bind(t,i.glProgram)}execute(e,t){const i=e.renderer;this._didUpload=!0,this._tempState.blendMode=t.blendMode,i.state.set(this._tempState);const n=t.textures.textures;for(let s=0;s<t.textures.count;s++)i.texture.bind(n[s],s);i.geometry.draw("triangle-list",t.size,t.start)}}kf.extension={type:[M.WebGLPipesAdaptor],name:"batch"};const Ao=ai.for2d();class Uf{start(e,t,i){const n=e.renderer,s=n.encoder,o=i.gpuProgram;this._shader=i,this._geometry=t,s.setGeometry(t,o),Ao.blendMode="normal",n.pipeline.getPipeline(t,o,Ao);const a=n.globalUniforms.bindGroup;s.resetBindGroup(1),s.setBindGroup(0,a,o)}execute(e,t){const i=this._shader.gpuProgram,n=e.renderer,s=n.encoder;if(!t.bindGroup){const l=t.textures;t.bindGroup=dl(l.textures,l.count)}Ao.blendMode=t.blendMode;const o=n.bindGroup.getBindGroup(t.bindGroup,i,1),a=n.pipeline.getPipeline(this._geometry,i,Ao);t.bindGroup._touch(n.textureGC.count),s.setPipeline(a),s.renderPassEncoder.setBindGroup(1,o),s.renderPassEncoder.drawIndexed(t.size,1,t.start)}}Uf.extension={type:[M.WebGPUPipesAdaptor],name:"batch"};const Wl=class B0{constructor(e,t){var i,n;this.state=ai.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,(n=(i=this._adaptor).init)==null||n.call(i,this)}static getBatcher(e){return new this._availableBatchers[e]}buildStart(e){let t=this._batchersByInstructionSet[e.uid];t||(t=this._batchersByInstructionSet[e.uid]=Object.create(null),t.default||(t.default=new Tl)),this._activeBatches=t,this._activeBatch=this._activeBatches.default;for(const i in this._activeBatches)this._activeBatches[i].begin()}addToBatch(e,t){if(this._activeBatch.name!==e.batcherName){this._activeBatch.break(t);let i=this._activeBatches[e.batcherName];i||(i=this._activeBatches[e.batcherName]=B0.getBatcher(e.batcherName),i.begin()),this._activeBatch=i}this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);const t=this._activeBatches;for(const i in t){const n=t[i],s=n.geometry;s.indexBuffer.setDataWithSize(n.indexBuffer,n.indexSize,!0),s.buffers[0].setDataWithSize(n.attributeBuffer.float32View,n.attributeSize,!1)}}upload(e){const t=this._batchersByInstructionSet[e.uid];for(const i in t){const n=t[i],s=n.geometry;n.dirty&&(n.dirty=!1,s.buffers[0].update(n.attributeSize*4))}}execute(e){if(e.action==="startBatch"){const t=e.batcher,i=t.geometry,n=t.shader;this._adaptor.start(this,i,n)}this._adaptor.execute(this,e)}destroy(){this.state=null,this.renderer=null,this._adaptor=null;for(const e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};Wl.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"batch"},Wl._availableBatchers=Object.create(null);let Df=Wl;oe.handleByMap(M.Batcher,Df._availableBatchers),oe.add(Tl);const ss={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},Z2={...ss,vertex:{...ss.vertex,header:ss.vertex.header.replace("group(1)","group(2)")}},jl={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}},Q2={name:"texture-bit",vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},J2={name:"texture-bit",vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}};function e1(r,e){const t=r.root,i=r.instructionSet;i.reset();const n=e.renderPipes?e:e.batch.renderer,s=n.renderPipes;s.batch.buildStart(i),s.blendMode.buildStart(),s.colorMask.buildStart(),t.sortableChildren&&t.sortChildren(),Gf(t,i,n,!0),s.batch.buildEnd(i),s.blendMode.buildEnd(i)}function Eo(r,e,t){const i=t.renderPipes?t:t.batch.renderer;r.globalDisplayStatus<7||!r.includeInBuild||(r.sortableChildren&&r.sortChildren(),r.isSimple?t1(r,e,i):Gf(r,e,i,!1))}function t1(r,e,t){if(r.renderPipeId){const i=r,{renderPipes:n,renderableGC:s}=t;n.blendMode.setBlendMode(i,r.groupBlendMode,e),n[i.renderPipeId].addRenderable(i,e),s.addRenderable(i,e),i.didViewUpdate=!1}if(!r.renderGroup){const i=r.children,n=i.length;for(let s=0;s<n;s++)Eo(i[s],e,t)}}function Gf(r,e,t,i){const{renderPipes:n,renderableGC:s}=t;if(!i&&r.renderGroup)n.renderGroup.addRenderGroup(r.renderGroup,e);else{for(let u=0;u<r.effects.length;u++){const h=r.effects[u];n[h.pipe].push(h,r,e)}const o=r,a=o.renderPipeId;a&&(n.blendMode.setBlendMode(o,o.groupBlendMode,e),n[a].addRenderable(o,e),s.addRenderable(o,e),o.didViewUpdate=!1);const l=r.children;if(l.length)for(let u=0;u<l.length;u++)Eo(l[u],e,t);for(let u=r.effects.length-1;u>=0;u--){const h=r.effects[u];n[h.pipe].pop(h,r,e)}}}const i1=new Mt;class r1 extends io{constructor(){super(),this.filters=[new W2({sprite:new Ie(X.EMPTY),inverse:!1,resolution:"inherit",antialias:"inherit"})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}get inverse(){return this.filters[0].inverse}set inverse(e){this.filters[0].inverse=e}}class zf{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,i){const n=this._renderer;if(n.renderPipes.batch.break(i),i.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1,maskedContainer:t}),e.inverse=t._maskOptions.inverse,e.renderMaskToTexture){const s=e.mask;s.includeInBuild=!0,Eo(s,i,n),s.includeInBuild=!1}n.renderPipes.batch.break(i),i.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,inverse:t._maskOptions.inverse,canBundle:!1})}pop(e,t,i){this._renderer.renderPipes.batch.break(i),i.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}execute(e){const t=this._renderer,i=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){const n=Re.get(r1);if(n.inverse=e.inverse,i){e.mask.mask.measurable=!0;const s=Ua(e.mask.mask,!0,i1);e.mask.mask.measurable=!1,s.ceil();const o=t.renderTarget.renderTarget.colorTexture.source,a=Le.getOptimalTexture(s.width,s.height,o._resolution,o.antialias);t.renderTarget.push(a,!0),t.globalUniforms.push({offset:s,worldColor:4294967295});const l=n.sprite;l.texture=a,l.worldTransform.tx=s.minX,l.worldTransform.ty=s.minY,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer,filterTexture:a})}else n.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){const n=this._activeMaskStage[this._activeMaskStage.length-1];i&&(t.type===zt.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:"filter",action:"pushFilter",container:n.maskedContainer,filterEffect:n.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();const n=this._activeMaskStage.pop();i&&Le.returnTexture(n.filterTexture),Re.return(n.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}}zf.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"alphaMask"};class Lf{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,i){this._renderer.renderPipes.batch.break(i);const s=this._colorStack;s[this._colorStackIndex]=s[this._colorStackIndex-1]&e.mask;const o=this._colorStack[this._colorStackIndex];o!==this._currentColor&&(this._currentColor=o,i.add({renderPipeId:"colorMask",colorMask:o,canBundle:!1})),this._colorStackIndex++}pop(e,t,i){this._renderer.renderPipes.batch.break(i);const s=this._colorStack;this._colorStackIndex--;const o=s[this._colorStackIndex-1];o!==this._currentColor&&(this._currentColor=o,i.add({renderPipeId:"colorMask",colorMask:o,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}}Lf.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"colorMask"};class Nf{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,i){var n;const s=e,o=this._renderer;o.renderPipes.batch.break(i),o.renderPipes.blendMode.setBlendMode(s.mask,"none",i),i.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const a=s.mask;a.includeInBuild=!0,this._maskHash.has(s)||this._maskHash.set(s,{instructionsStart:0,instructionsLength:0});const l=this._maskHash.get(s);l.instructionsStart=i.instructionSize,Eo(a,i,o),a.includeInBuild=!1,o.renderPipes.batch.break(i),i.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const u=i.instructionSize-l.instructionsStart-1;l.instructionsLength=u;const h=o.renderTarget.renderTarget.uid;(n=this._maskStackHash)[h]??(n[h]=0)}pop(e,t,i){const n=e,s=this._renderer;s.renderPipes.batch.break(i),s.renderPipes.blendMode.setBlendMode(n.mask,"none",i),i.add({renderPipeId:"stencilMask",action:"popMaskBegin",inverse:t._maskOptions.inverse,canBundle:!1});const o=this._maskHash.get(e);for(let a=0;a<o.instructionsLength;a++)i.instructions[i.instructionSize++]=i.instructions[o.instructionsStart++];i.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){var t;const i=this._renderer,n=i.renderTarget.renderTarget.uid;let s=(t=this._maskStackHash)[n]??(t[n]=0);e.action==="pushMaskBegin"?(i.renderTarget.ensureDepthStencil(),i.stencil.setStencilMode(et.RENDERING_MASK_ADD,s),s++,i.colorMask.setMask(0)):e.action==="pushMaskEnd"?(e.inverse?i.stencil.setStencilMode(et.INVERSE_MASK_ACTIVE,s):i.stencil.setStencilMode(et.MASK_ACTIVE,s),i.colorMask.setMask(15)):e.action==="popMaskBegin"?(i.colorMask.setMask(0),s!==0?i.stencil.setStencilMode(et.RENDERING_MASK_REMOVE,s):(i.renderTarget.clear(null,Lt.STENCIL),i.stencil.setStencilMode(et.DISABLED,s)),s--):e.action==="popMaskEnd"&&(e.inverse?i.stencil.setStencilMode(et.INVERSE_MASK_ACTIVE,s):i.stencil.setStencilMode(et.MASK_ACTIVE,s),i.colorMask.setMask(15)),this._maskStackHash[n]=s}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}}Nf.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"stencilMask"};var Mo=(r=>(r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",r))(Mo||{});class n1{constructor(e,t){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.type=t}}class $f{constructor(e){this._gpuBuffers=Object.create(null),this._boundBufferBases=Object.create(null),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuBuffers")}destroy(){this._renderer=null,this._gl=null,this._gpuBuffers=null,this._boundBufferBases=null}contextChange(){this._gpuBuffers=Object.create(null),this._gl=this._renderer.gl}getGlBuffer(e){return this._gpuBuffers[e.uid]||this.createGLBuffer(e)}bind(e){const{_gl:t}=this,i=this.getGlBuffer(e);t.bindBuffer(i.type,i.buffer)}bindBufferBase(e,t){const{_gl:i}=this;if(this._boundBufferBases[t]!==e){const n=this.getGlBuffer(e);this._boundBufferBases[t]=e,i.bindBufferBase(i.UNIFORM_BUFFER,t,n.buffer)}}bindBufferRange(e,t,i){const{_gl:n}=this;i=i||0;const s=this.getGlBuffer(e);n.bindBufferRange(n.UNIFORM_BUFFER,t||0,s.buffer,i*256,256)}updateBuffer(e){const{_gl:t}=this,i=this.getGlBuffer(e);if(e._updateID===i.updateID)return i;i.updateID=e._updateID,t.bindBuffer(i.type,i.buffer);const n=e.data;if(i.byteLength>=e.data.byteLength)t.bufferSubData(i.type,0,n,0,e._updateSize/n.BYTES_PER_ELEMENT);else{const s=e.descriptor.usage&Ae.STATIC?t.STATIC_DRAW:t.DYNAMIC_DRAW;i.byteLength=n.byteLength,t.bufferData(i.type,n,s)}return i}destroyAll(){const e=this._gl;for(const t in this._gpuBuffers)e.deleteBuffer(this._gpuBuffers[t].buffer);this._gpuBuffers=Object.create(null)}onBufferDestroy(e,t){const i=this._gpuBuffers[e.uid],n=this._gl;t||n.deleteBuffer(i.buffer),this._gpuBuffers[e.uid]=null}createGLBuffer(e){const{_gl:t}=this;let i=Mo.ARRAY_BUFFER;e.descriptor.usage&Ae.INDEX?i=Mo.ELEMENT_ARRAY_BUFFER:e.descriptor.usage&Ae.UNIFORM&&(i=Mo.UNIFORM_BUFFER);const n=new n1(t.createBuffer(),i);return this._gpuBuffers[e.uid]=n,e.on("destroy",this.onBufferDestroy,this),n}}$f.extension={type:[M.WebGLSystem],name:"buffer"};const Xl=class k0{constructor(e){this.supports={uint32Indices:!0,uniformBufferObject:!0,vertexArrayObject:!0,srgbTextures:!0,nonPowOf2wrapping:!0,msaa:!0,nonPowOf2mipmaps:!0},this._renderer=e,this.extensions=Object.create(null),this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this)}get isLost(){return!this.gl||this.gl.isContextLost()}contextChange(e){this.gl=e,this._renderer.gl=e}init(e){e={...k0.defaultOptions,...e};let t=this.multiView=e.multiView;if(e.context&&t&&(le("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together."),t=!1),t?this.canvas=Se.get().createCanvas(this._renderer.canvas.width,this._renderer.canvas.height):this.canvas=this._renderer.view.canvas,e.context)this.initFromContext(e.context);else{const i=this._renderer.background.alpha<1,n=e.premultipliedAlpha??!0,s=e.antialias&&!this._renderer.backBuffer.useBackBuffer;this.createContext(e.preferWebGLVersion,{alpha:i,premultipliedAlpha:n,antialias:s,stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:e.powerPreference??"default"})}}ensureCanvasSize(e){if(!this.multiView){e!==this.canvas&&le("multiView is disabled, but targetCanvas is not the main canvas");return}const{canvas:t}=this;(t.width<e.width||t.height<e.height)&&(t.width=Math.max(e.width,e.width),t.height=Math.max(e.height,e.height))}initFromContext(e){this.gl=e,this.webGLVersion=e instanceof Se.get().getWebGLRenderingContext()?1:2,this.getExtensions(),this.validateContext(e),this._renderer.runners.contextChange.emit(e);const t=this._renderer.view.canvas;t.addEventListener("webglcontextlost",this.handleContextLost,!1),t.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}createContext(e,t){let i;const n=this.canvas;if(e===2&&(i=n.getContext("webgl2",t)),!i&&(i=n.getContext("webgl",t),!i))throw new Error("This browser does not support WebGL. Try using the canvas renderer");this.gl=i,this.initFromContext(this.gl)}getExtensions(){const{gl:e}=this,t={anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc"),bptc:e.getExtension("EXT_texture_compression_bptc"),rgtc:e.getExtension("EXT_texture_compression_rgtc"),loseContext:e.getExtension("WEBGL_lose_context")};if(this.webGLVersion===1)this.extensions={...t,drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear"),vertexAttribDivisorANGLE:e.getExtension("ANGLE_instanced_arrays"),srgb:e.getExtension("EXT_sRGB")};else{this.extensions={...t,colorBufferFloat:e.getExtension("EXT_color_buffer_float")};const i=e.getExtension("WEBGL_provoking_vertex");i&&i.provokingVertexWEBGL(i.FIRST_VERTEX_CONVENTION_WEBGL)}}handleContextLost(e){e.preventDefault(),this._contextLossForced&&(this._contextLossForced=!1,setTimeout(()=>{var t;this.gl.isContextLost()&&((t=this.extensions.loseContext)==null||t.restoreContext())},0))}handleContextRestored(){this._renderer.runners.contextChange.emit(this.gl)}destroy(){var t;const e=this._renderer.view.canvas;this._renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),(t=this.extensions.loseContext)==null||t.loseContext()}forceContextLoss(){var e;(e=this.extensions.loseContext)==null||e.loseContext(),this._contextLossForced=!0}validateContext(e){const t=e.getContextAttributes();t&&!t.stencil&&le("Provided WebGL context does not have a stencil buffer, masks may not render correctly");const i=this.supports,n=this.webGLVersion===2,s=this.extensions;i.uint32Indices=n||!!s.uint32ElementIndex,i.uniformBufferObject=n,i.vertexArrayObject=n||!!s.vertexArrayObject,i.srgbTextures=n||!!s.srgb,i.nonPowOf2wrapping=n,i.nonPowOf2mipmaps=n,i.msaa=n,i.uint32Indices||le("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly")}};Xl.extension={type:[M.WebGLSystem],name:"context"},Xl.defaultOptions={context:null,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:void 0,preferWebGLVersion:2,multiView:!1};let s1=Xl;function Vf(r,e){for(const t in r.attributes){const i=r.attributes[t],n=e[t];n?(i.format??(i.format=n.format),i.offset??(i.offset=n.offset),i.instance??(i.instance=n.instance)):le(`Attribute ${t} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}o1(r)}function o1(r){const{buffers:e,attributes:t}=r,i={},n={};for(const s in e){const o=e[s];i[o.uid]=0,n[o.uid]=0}for(const s in t){const o=t[s];i[o.buffer.uid]+=qi(o.format).stride}for(const s in t){const o=t[s];o.stride??(o.stride=i[o.buffer.uid]),o.start??(o.start=n[o.buffer.uid]),n[o.buffer.uid]+=qi(o.format).stride}}var Yl=(r=>(r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL",r))(Yl||{}),Hf=(r=>(r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",r))(Hf||{}),Fe=(r=>(r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT",r))(Fe||{});const Wf={uint8x2:Fe.UNSIGNED_BYTE,uint8x4:Fe.UNSIGNED_BYTE,sint8x2:Fe.BYTE,sint8x4:Fe.BYTE,unorm8x2:Fe.UNSIGNED_BYTE,unorm8x4:Fe.UNSIGNED_BYTE,snorm8x2:Fe.BYTE,snorm8x4:Fe.BYTE,uint16x2:Fe.UNSIGNED_SHORT,uint16x4:Fe.UNSIGNED_SHORT,sint16x2:Fe.SHORT,sint16x4:Fe.SHORT,unorm16x2:Fe.UNSIGNED_SHORT,unorm16x4:Fe.UNSIGNED_SHORT,snorm16x2:Fe.SHORT,snorm16x4:Fe.SHORT,float16x2:Fe.HALF_FLOAT,float16x4:Fe.HALF_FLOAT,float32:Fe.FLOAT,float32x2:Fe.FLOAT,float32x3:Fe.FLOAT,float32x4:Fe.FLOAT,uint32:Fe.UNSIGNED_INT,uint32x2:Fe.UNSIGNED_INT,uint32x3:Fe.UNSIGNED_INT,uint32x4:Fe.UNSIGNED_INT,sint32:Fe.INT,sint32x2:Fe.INT,sint32x3:Fe.INT,sint32x4:Fe.INT};function a1(r){return Wf[r]??Wf.float32}const l1={"point-list":0,"line-list":1,"line-strip":3,"triangle-list":4,"triangle-strip":5};class jf{constructor(e){this._geometryVaoHash=Object.create(null),this._renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this._renderer.renderableGC.addManagedHash(this,"_geometryVaoHash")}contextChange(){const e=this.gl=this._renderer.gl;if(!this._renderer.context.supports.vertexArrayObject)throw new Error("[PixiJS] Vertex Array Objects are not supported on this device");const t=this._renderer.context.extensions.vertexArrayObject;t&&(e.createVertexArray=()=>t.createVertexArrayOES(),e.bindVertexArray=n=>t.bindVertexArrayOES(n),e.deleteVertexArray=n=>t.deleteVertexArrayOES(n));const i=this._renderer.context.extensions.vertexAttribDivisorANGLE;i&&(e.drawArraysInstanced=(n,s,o,a)=>{i.drawArraysInstancedANGLE(n,s,o,a)},e.drawElementsInstanced=(n,s,o,a,l)=>{i.drawElementsInstancedANGLE(n,s,o,a,l)},e.vertexAttribDivisor=(n,s)=>i.vertexAttribDivisorANGLE(n,s)),this._activeGeometry=null,this._activeVao=null,this._geometryVaoHash=Object.create(null)}bind(e,t){const i=this.gl;this._activeGeometry=e;const n=this.getVao(e,t);this._activeVao!==n&&(this._activeVao=n,i.bindVertexArray(n)),this.updateBuffers()}reset(){this.unbind()}updateBuffers(){const e=this._activeGeometry,t=this._renderer.buffer;for(let i=0;i<e.buffers.length;i++){const n=e.buffers[i];t.updateBuffer(n)}}checkCompatibility(e,t){const i=e.attributes,n=t._attributeData;for(const s in n)if(!i[s])throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`)}getSignature(e,t){const i=e.attributes,n=t._attributeData,s=["g",e.uid];for(const o in i)n[o]&&s.push(o,n[o].location);return s.join("-")}getVao(e,t){var i;return((i=this._geometryVaoHash[e.uid])==null?void 0:i[t._key])||this.initGeometryVao(e,t)}initGeometryVao(e,t,i=!0){const n=this._renderer.gl,s=this._renderer.buffer;this._renderer.shader._getProgramData(t),this.checkCompatibility(e,t);const o=this.getSignature(e,t);this._geometryVaoHash[e.uid]||(this._geometryVaoHash[e.uid]=Object.create(null),e.on("destroy",this.onGeometryDestroy,this));const a=this._geometryVaoHash[e.uid];let l=a[o];if(l)return a[t._key]=l,l;Vf(e,t._attributeData);const u=e.buffers;l=n.createVertexArray(),n.bindVertexArray(l);for(let h=0;h<u.length;h++){const c=u[h];s.bind(c)}return this.activateVao(e,t),a[t._key]=l,a[o]=l,n.bindVertexArray(null),l}onGeometryDestroy(e,t){const i=this._geometryVaoHash[e.uid],n=this.gl;if(i){if(t)for(const s in i)this._activeVao!==i[s]&&this.unbind(),n.deleteVertexArray(i[s]);this._geometryVaoHash[e.uid]=null}}destroyAll(e=!1){const t=this.gl;for(const i in this._geometryVaoHash){if(e)for(const n in this._geometryVaoHash[i]){const s=this._geometryVaoHash[i];this._activeVao!==s&&this.unbind(),t.deleteVertexArray(s[n])}this._geometryVaoHash[i]=null}}activateVao(e,t){var a;const i=this._renderer.gl,n=this._renderer.buffer,s=e.attributes;e.indexBuffer&&n.bind(e.indexBuffer);let o=null;for(const l in s){const u=s[l],h=u.buffer,c=n.getGlBuffer(h),d=t._attributeData[l];if(d){o!==c&&(n.bind(h),o=c);const f=d.location;i.enableVertexAttribArray(f);const g=qi(u.format),m=a1(u.format);if(((a=d.format)==null?void 0:a.substring(1,4))==="int"?i.vertexAttribIPointer(f,g.size,m,u.stride,u.offset):i.vertexAttribPointer(f,g.size,m,g.normalised,u.stride,u.offset),u.instance)if(this.hasInstance){const _=u.divisor??1;i.vertexAttribDivisor(f,_)}else throw new Error("geometry error, GPU Instancing is not supported on this device")}}}draw(e,t,i,n){const{gl:s}=this._renderer,o=this._activeGeometry,a=l1[o.topology||e];if(n||(n=o.instanceCount),o.indexBuffer){const l=o.indexBuffer.data.BYTES_PER_ELEMENT,u=l===2?s.UNSIGNED_SHORT:s.UNSIGNED_INT;n>1?s.drawElementsInstanced(a,t||o.indexBuffer.data.length,u,(i||0)*l,n):s.drawElements(a,t||o.indexBuffer.data.length,u,(i||0)*l)}else n>1?s.drawArraysInstanced(a,i||0,t||o.getSize(),n):s.drawArrays(a,i||0,t||o.getSize());return this}unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null}destroy(){this._renderer=null,this.gl=null,this._activeVao=null,this._activeGeometry=null}}jf.extension={type:[M.WebGLSystem],name:"geometry"};const u1=new Yn({attributes:{aPosition:[-1,-1,3,-1,-1,3]}}),ql=class U0{constructor(e){this.useBackBuffer=!1,this._useBackBufferThisRender=!1,this._renderer=e}init(e={}){const{useBackBuffer:t,antialias:i}={...U0.defaultOptions,...e};this.useBackBuffer=t,this._antialias=i,this._renderer.context.supports.msaa||(le("antialiasing, is not supported on when using the back buffer"),this._antialias=!1),this._state=ai.for2d();const n=new de({vertex:`
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,fragment:`
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,name:"big-triangle"});this._bigTriangleShader=new Zt({glProgram:n,resources:{uTexture:X.WHITE.source}})}renderStart(e){const t=this._renderer.renderTarget.getRenderTarget(e.target);if(this._useBackBufferThisRender=this.useBackBuffer&&!!t.isRoot,this._useBackBufferThisRender){const i=this._renderer.renderTarget.getRenderTarget(e.target);this._targetTexture=i.colorTexture,e.target=this._getBackBufferTexture(i.colorTexture)}}renderEnd(){this._presentBackBuffer()}_presentBackBuffer(){const e=this._renderer;e.renderTarget.finishRenderPass(),this._useBackBufferThisRender&&(e.renderTarget.bind(this._targetTexture,!1),this._bigTriangleShader.resources.uTexture=this._backBufferTexture.source,e.encoder.draw({geometry:u1,shader:this._bigTriangleShader,state:this._state}))}_getBackBufferTexture(e){return this._backBufferTexture=this._backBufferTexture||new X({source:new st({width:e.width,height:e.height,resolution:e._resolution,antialias:this._antialias})}),this._backBufferTexture.source.resize(e.width,e.height,e._resolution),this._backBufferTexture}destroy(){this._backBufferTexture&&(this._backBufferTexture.destroy(),this._backBufferTexture=null)}};ql.extension={type:[M.WebGLSystem],name:"backBuffer",priority:1},ql.defaultOptions={useBackBuffer:!1};let h1=ql;class Xf{constructor(e){this._colorMaskCache=15,this._renderer=e}setMask(e){this._colorMaskCache!==e&&(this._colorMaskCache=e,this._renderer.gl.colorMask(!!(e&8),!!(e&4),!!(e&2),!!(e&1)))}}Xf.extension={type:[M.WebGLSystem],name:"colorMask"};class Yf{constructor(e){this.commandFinished=Promise.resolve(),this._renderer=e}setGeometry(e,t){this._renderer.geometry.bind(e,t.glProgram)}finishRenderPass(){}draw(e){const t=this._renderer,{geometry:i,shader:n,state:s,skipSync:o,topology:a,size:l,start:u,instanceCount:h}=e;t.shader.bind(n,o),t.geometry.bind(i,t.shader._activeProgram),s&&t.state.set(s),t.geometry.draw(a,l,u,h??i.instanceCount)}destroy(){this._renderer=null}}Yf.extension={type:[M.WebGLSystem],name:"encoder"};class c1{constructor(){this.width=-1,this.height=-1,this.msaa=!1,this.msaaRenderBuffer=[]}}const Qi=[];Qi[et.NONE]=void 0,Qi[et.DISABLED]={stencilWriteMask:0,stencilReadMask:0},Qi[et.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}},Qi[et.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}},Qi[et.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}},Qi[et.INVERSE_MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"not-equal",passOp:"replace"},stencilBack:{compare:"not-equal",passOp:"replace"}};class qf{constructor(e){this._stencilCache={enabled:!1,stencilReference:0,stencilMode:et.NONE},this._renderTargetStencilState=Object.create(null),e.renderTarget.onRenderTargetChange.add(this)}contextChange(e){this._gl=e,this._comparisonFuncMapping={always:e.ALWAYS,never:e.NEVER,equal:e.EQUAL,"not-equal":e.NOTEQUAL,less:e.LESS,"less-equal":e.LEQUAL,greater:e.GREATER,"greater-equal":e.GEQUAL},this._stencilOpsMapping={keep:e.KEEP,zero:e.ZERO,replace:e.REPLACE,invert:e.INVERT,"increment-clamp":e.INCR,"decrement-clamp":e.DECR,"increment-wrap":e.INCR_WRAP,"decrement-wrap":e.DECR_WRAP},this._stencilCache.enabled=!1,this._stencilCache.stencilMode=et.NONE,this._stencilCache.stencilReference=0}onRenderTargetChange(e){if(this._activeRenderTarget===e)return;this._activeRenderTarget=e;let t=this._renderTargetStencilState[e.uid];t||(t=this._renderTargetStencilState[e.uid]={stencilMode:et.DISABLED,stencilReference:0}),this.setStencilMode(t.stencilMode,t.stencilReference)}setStencilMode(e,t){const i=this._renderTargetStencilState[this._activeRenderTarget.uid],n=this._gl,s=Qi[e],o=this._stencilCache;if(i.stencilMode=e,i.stencilReference=t,e===et.DISABLED){this._stencilCache.enabled&&(this._stencilCache.enabled=!1,n.disable(n.STENCIL_TEST));return}this._stencilCache.enabled||(this._stencilCache.enabled=!0,n.enable(n.STENCIL_TEST)),(e!==o.stencilMode||o.stencilReference!==t)&&(o.stencilMode=e,o.stencilReference=t,n.stencilFunc(this._comparisonFuncMapping[s.stencilBack.compare],t,255),n.stencilOp(n.KEEP,n.KEEP,this._stencilOpsMapping[s.stencilBack.passOp]))}}qf.extension={type:[M.WebGLSystem],name:"stencil"};class Kf{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!rd())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(e){const t=this.getUniformGroupData(e);e.buffer||(e.buffer=new Nt({data:new Float32Array(t.layout.size/4),usage:Ae.UNIFORM|Ae.COPY_DST}))}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){const t=e._signature;let i=this._syncFunctionHash[t];if(!i){const n=Object.keys(e.uniformStructures).map(a=>e.uniformStructures[a]),s=this._adaptor.createUboElements(n),o=this._generateUboSync(s.uboElements);i=this._syncFunctionHash[t]={layout:s,syncFunction:o}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,i){const n=this.getUniformGroupData(e);return e.buffer||(e.buffer=new Nt({data:new Float32Array(n.layout.size/4),usage:Ae.UNIFORM|Ae.COPY_DST})),t||(t=e.buffer.data),i||(i=0),n.syncFunction(e.uniforms,t,i),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;const t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}}const Zf={f32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"mat2x2<f32>":16*2,"mat3x3<f32>":16*3,"mat4x4<f32>":16*4};function d1(r){const e=r.map(s=>({data:s,offset:0,size:0}));let t=0,i=0,n=0;for(let s=0;s<e.length;s++){const o=e[s];if(t=Zf[o.data.type],!t)throw new Error(`Unknown type ${o.data.type}`);if(o.data.size>1&&(t=Math.max(t,16)*o.data.size),o.size=t,i%t!==0&&i<16){const a=i%t%16;i+=a,n+=a}i+t>16?(n=Math.ceil(n/16)*16,o.offset=n,n+=t,i=t):(o.offset=n,i+=t,n+=t)}return n=Math.ceil(n/16)*16,{uboElements:e,size:n}}const Pr=[{type:"mat3x3<f32>",test:r=>r.value.a!==void 0,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:r=>r.type==="vec4<f32>"&&r.size===1&&r.value.width!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:r=>r.type==="vec2<f32>"&&r.size===1&&r.value.x!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:r=>r.type==="vec4<f32>"&&r.size===1&&r.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:r=>r.type==="vec3<f32>"&&r.size===1&&r.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}];function Qf(r,e,t,i){const n=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `];let s=0;for(let a=0;a<r.length;a++){const l=r[a],u=l.data.name;let h=!1,c=0;for(let d=0;d<Pr.length;d++)if(Pr[d].test(l.data)){c=l.offset/4,n.push(`name = "${u}";`,`offset += ${c-s};`,Pr[d][e]||Pr[d].ubo),h=!0;break}if(!h)if(l.data.size>1)c=l.offset/4,n.push(t(l,c-s));else{const d=i[l.data.type];c=l.offset/4,n.push(`
                    v = uv.${u};
                    offset += ${c-s};
                    ${d};
                `)}s=c}const o=n.join(`
`);return new Function("uv","data","offset",o)}function pn(r,e){return`
        for (let i = 0; i < ${r*e}; i++) {
            data[offset + (((i / ${r})|0) * 4) + (i % ${r})] = v[i];
        }
    `}const Jf={f32:`
        data[offset] = v;`,i32:`
        data[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":pn(3,2),"mat4x2<f32>":pn(4,2),"mat2x3<f32>":pn(2,3),"mat4x3<f32>":pn(4,3),"mat2x4<f32>":pn(2,4),"mat3x4<f32>":pn(3,4)},f1={...Jf,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `};function p1(r,e){const t=Math.max(Zf[r.data.type]/16,1),i=r.data.value.length/r.data.size,n=(4-i%4)%4;return`
        v = uv.${r.data.name};
        offset += ${e};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${r.data.size*t}; i++)
        {
            for(var j = 0; j < ${i}; j++)
            {
                data[arrayOffset++] = v[t++];
            }
            ${n!==0?`arrayOffset += ${n};`:""}
        }
    `}function m1(r){return Qf(r,"uboStd40",p1,Jf)}class ep extends Kf{constructor(){super({createUboElements:d1,generateUboSync:m1})}}ep.extension={type:[M.WebGLSystem],name:"ubo"};class g1{constructor(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new De}init(e,t){this._renderer=e,this._renderTargetSystem=t,e.runners.contextChange.add(this)}contextChange(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new De}copyToTexture(e,t,i,n,s){const o=this._renderTargetSystem,a=this._renderer,l=o.getGpuRenderTarget(e),u=a.gl;return this.finishRenderPass(e),u.bindFramebuffer(u.FRAMEBUFFER,l.resolveTargetFramebuffer),a.texture.bind(t,0),u.copyTexSubImage2D(u.TEXTURE_2D,0,s.x,s.y,i.x,i.y,n.width,n.height),t}startRenderPass(e,t=!0,i,n){const s=this._renderTargetSystem,o=e.colorTexture,a=s.getGpuRenderTarget(e);let l=n.y;e.isRoot&&(l=o.pixelHeight-n.height),e.colorTextures.forEach(c=>{this._renderer.texture.unbind(c)});const u=this._renderer.gl;u.bindFramebuffer(u.FRAMEBUFFER,a.framebuffer);const h=this._viewPortCache;(h.x!==n.x||h.y!==l||h.width!==n.width||h.height!==n.height)&&(h.x=n.x,h.y=l,h.width=n.width,h.height=n.height,u.viewport(n.x,l,n.width,n.height)),!a.depthStencilRenderBuffer&&(e.stencil||e.depth)&&this._initStencil(a),this.clear(e,t,i)}finishRenderPass(e){const i=this._renderTargetSystem.getGpuRenderTarget(e);if(!i.msaa)return;const n=this._renderer.gl;n.bindFramebuffer(n.FRAMEBUFFER,i.resolveTargetFramebuffer),n.bindFramebuffer(n.READ_FRAMEBUFFER,i.framebuffer),n.blitFramebuffer(0,0,i.width,i.height,0,0,i.width,i.height,n.COLOR_BUFFER_BIT,n.NEAREST),n.bindFramebuffer(n.FRAMEBUFFER,i.framebuffer)}initGpuRenderTarget(e){const t=this._renderer,i=t.gl,n=new c1;return e.colorTexture.resource===t.canvas?(this._renderer.context.ensureCanvasSize(e.colorTexture.resource),n.framebuffer=null,n):(this._initColor(e,n),i.bindFramebuffer(i.FRAMEBUFFER,null),n)}destroyGpuRenderTarget(e){const t=this._renderer.gl;e.framebuffer&&(t.deleteFramebuffer(e.framebuffer),e.framebuffer=null),e.resolveTargetFramebuffer&&(t.deleteFramebuffer(e.resolveTargetFramebuffer),e.resolveTargetFramebuffer=null),e.depthStencilRenderBuffer&&(t.deleteRenderbuffer(e.depthStencilRenderBuffer),e.depthStencilRenderBuffer=null),e.msaaRenderBuffer.forEach(i=>{t.deleteRenderbuffer(i)}),e.msaaRenderBuffer=null}clear(e,t,i){if(!t)return;const n=this._renderTargetSystem;typeof t=="boolean"&&(t=t?Lt.ALL:Lt.NONE);const s=this._renderer.gl;if(t&Lt.COLOR){i??(i=n.defaultClearColor);const o=this._clearColorCache,a=i;(o[0]!==a[0]||o[1]!==a[1]||o[2]!==a[2]||o[3]!==a[3])&&(o[0]=a[0],o[1]=a[1],o[2]=a[2],o[3]=a[3],s.clearColor(a[0],a[1],a[2],a[3]))}s.clear(t)}resizeGpuRenderTarget(e){if(e.isRoot)return;const i=this._renderTargetSystem.getGpuRenderTarget(e);this._resizeColor(e,i),(e.stencil||e.depth)&&this._resizeStencil(i)}_initColor(e,t){const i=this._renderer,n=i.gl,s=n.createFramebuffer();if(t.resolveTargetFramebuffer=s,n.bindFramebuffer(n.FRAMEBUFFER,s),t.width=e.colorTexture.source.pixelWidth,t.height=e.colorTexture.source.pixelHeight,e.colorTextures.forEach((o,a)=>{const l=o.source;l.antialias&&(i.context.supports.msaa?t.msaa=!0:le("[RenderTexture] Antialiasing on textures is not supported in WebGL1")),i.texture.bindSource(l,0);const h=i.texture.getGlSource(l).texture;n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+a,3553,h,0)}),t.msaa){const o=n.createFramebuffer();t.framebuffer=o,n.bindFramebuffer(n.FRAMEBUFFER,o),e.colorTextures.forEach((a,l)=>{const u=n.createRenderbuffer();t.msaaRenderBuffer[l]=u})}else t.framebuffer=s;this._resizeColor(e,t)}_resizeColor(e,t){const i=e.colorTexture.source;if(t.width=i.pixelWidth,t.height=i.pixelHeight,e.colorTextures.forEach((n,s)=>{s!==0&&n.source.resize(i.width,i.height,i._resolution)}),t.msaa){const n=this._renderer,s=n.gl,o=t.framebuffer;s.bindFramebuffer(s.FRAMEBUFFER,o),e.colorTextures.forEach((a,l)=>{const u=a.source;n.texture.bindSource(u,0);const c=n.texture.getGlSource(u).internalFormat,d=t.msaaRenderBuffer[l];s.bindRenderbuffer(s.RENDERBUFFER,d),s.renderbufferStorageMultisample(s.RENDERBUFFER,4,c,u.pixelWidth,u.pixelHeight),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+l,s.RENDERBUFFER,d)})}}_initStencil(e){if(e.framebuffer===null)return;const t=this._renderer.gl,i=t.createRenderbuffer();e.depthStencilRenderBuffer=i,t.bindRenderbuffer(t.RENDERBUFFER,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,i),this._resizeStencil(e)}_resizeStencil(e){const t=this._renderer.gl;t.bindRenderbuffer(t.RENDERBUFFER,e.depthStencilRenderBuffer),e.msaa?t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,this._renderer.context.webGLVersion===2?t.DEPTH24_STENCIL8:t.DEPTH_STENCIL,e.width,e.height)}postrender(e){if(this._renderer.context.multiView&&br.test(e.colorTexture.resource)){const t=this._renderer.context.canvas,i=e.colorTexture;i.context2D.drawImage(t,0,i.pixelHeight-t.height)}}}function _1(r,e,t,i,n,s){const o=s?1:-1;return r.identity(),r.a=1/i*2,r.d=o*(1/n*2),r.tx=-1-e*r.a,r.ty=-o-t*r.d,r}const os=new Map;function tp(r,e){if(!os.has(r)){const t=new X({source:new br({resource:r,...e})}),i=()=>{os.get(r)===t&&os.delete(r)};t.once("destroy",i),t.source.once("destroy",i),os.set(r,t)}return os.get(r)}function x1(r){const e=r.colorTexture.source.resource;return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement&&document.body.contains(e)}const ip=class D0{constructor(e={}){if(this.uid=qe("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,e={...D0.defaultOptions,...e},this.stencil=e.stencil,this.depth=e.depth,this.isRoot=e.isRoot,typeof e.colorTextures=="number"){this._managedColorTextures=!0;for(let t=0;t<e.colorTextures;t++)this.colorTextures.push(new st({width:e.width,height:e.height,resolution:e.resolution,antialias:e.antialias}))}else{this.colorTextures=[...e.colorTextures.map(i=>i.source)];const t=this.colorTexture.source;this.resize(t.width,t.height,t._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(e.depthStencilTexture||this.stencil)&&(e.depthStencilTexture instanceof X||e.depthStencilTexture instanceof st?this.depthStencilTexture=e.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new st({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(e,t,i=this.resolution,n=!1){this.dirtyId++,this.colorTextures.forEach((s,o)=>{n&&o===0||s.source.resize(e,t,i)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(e,t,i)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(e=>{e.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};ip.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let Kl=ip;class rp{constructor(e){this.rootViewPort=new De,this.viewport=new De,this.onRenderTargetChange=new sd("onRenderTargetChange"),this.projectionMatrix=new se,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._renderer=e,e.renderableGC.addManagedHash(this,"_gpuRenderTargetHash")}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart({target:e,clear:t,clearColor:i,frame:n}){this._renderTargetStack.length=0,this.push(e,t,i,n),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=x1(this.rootRenderTarget)}postrender(){var e,t;(t=(e=this.adaptor).postrender)==null||t.call(e,this.rootRenderTarget)}bind(e,t=!0,i,n){const s=this.getRenderTarget(e),o=this.renderTarget!==s;this.renderTarget=s,this.renderSurface=e;const a=this.getGpuRenderTarget(s);(s.pixelWidth!==a.width||s.pixelHeight!==a.height)&&(this.adaptor.resizeGpuRenderTarget(s),a.width=s.pixelWidth,a.height=s.pixelHeight);const l=s.colorTexture,u=this.viewport,h=l.pixelWidth,c=l.pixelHeight;if(!n&&e instanceof X&&(n=e.frame),n){const d=l._resolution;u.x=n.x*d+.5|0,u.y=n.y*d+.5|0,u.width=n.width*d+.5|0,u.height=n.height*d+.5|0}else u.x=0,u.y=0,u.width=h,u.height=c;return _1(this.projectionMatrix,0,0,u.width/l.resolution,u.height/l.resolution,!s.isRoot),this.adaptor.startRenderPass(s,t,i,u),o&&this.onRenderTargetChange.emit(s),s}clear(e,t=Lt.ALL,i){t&&(e&&(e=this.getRenderTarget(e)),this.adaptor.clear(e||this.renderTarget,t,i,this.viewport))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=Lt.ALL,i,n){const s=this.bind(e,t,i,n);return this._renderTargetStack.push({renderTarget:s,frame:n}),s}pop(){this._renderTargetStack.pop();const e=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(e.renderTarget,!1,null,e.frame)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,i,n,s){i.x<0&&(n.width+=i.x,s.x-=i.x,i.x=0),i.y<0&&(n.height+=i.y,s.y-=i.y,i.y=0);const{pixelWidth:o,pixelHeight:a}=e;return n.width=Math.min(n.width,o-i.x),n.height=Math.min(n.height,a-i.y),this.adaptor.copyToTexture(e,t,i,n,s)}ensureDepthStencil(){this.renderTarget.stencil||(this.renderTarget.stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport))}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t&&e.destroy()}),this._renderSurfaceToRenderTargetHash.clear(),this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;return br.test(e)&&(e=tp(e).source),e instanceof Kl?t=e:e instanceof st&&(t=new Kl({colorTextures:[e]}),br.test(e.source.resource)&&(t.isRoot=!0),e.once("destroy",()=>{t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e);const i=this._gpuRenderTargetHash[t.uid];i&&(this._gpuRenderTargetHash[t.uid]=null,this.adaptor.destroyGpuRenderTarget(i))})),this._renderSurfaceToRenderTargetHash.set(e,t),t}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}}class np extends rp{constructor(e){super(e),this.adaptor=new g1,this.adaptor.init(e,this)}}np.extension={type:[M.WebGLSystem],name:"renderTarget"};class Zl extends nt{constructor({buffer:e,offset:t,size:i}){super(),this.uid=qe("buffer"),this._resourceType="bufferResource",this._touched=0,this._resourceId=qe("resource"),this._bufferResource=!0,this.destroyed=!1,this.buffer=e,this.offset=t|0,this.size=i,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this._resourceId=qe("resource"),this.emit("change",this)}destroy(e=!1){this.destroyed=!0,e&&this.buffer.destroy(),this.emit("change",this),this.buffer=null}}function v1(r,e){const t=[],i=[`
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `];let n=!1,s=0,o=0;const a=e._getProgramData(r.glProgram);for(const u in r.groups){const h=r.groups[u];t.push(`
            resources = g[${u}].resources;
        `);for(const c in h.resources){const d=h.resources[c];if(d instanceof gt)d.ubo?t.push(`
                        sS.bindUniformBlock(
                            resources[${c}],
                            sS._uniformBindMap[${u}[${c}],
                            ${s++}
                        );
                    `):t.push(`
                        ugS.updateUniformGroup(resources[${c}], p, sD);
                    `);else if(d instanceof Zl)t.push(`
                    sS.bindUniformBlock(
                        resources[${c}],
                        sS._uniformBindMap[${u}[${c}],
                        ${s++}
                    );
                `);else if(d instanceof st){const f=r._uniformBindMap[u][c],g=a.uniformData[f];g&&(n||(n=!0,i.push(`
                        var tS = r.texture;
                        `)),e._gl.uniform1i(g.location,o),t.push(`
                        tS.bind(resources[${c}], ${o});
                    `),o++)}}}const l=[...i,...t].join(`
`);return new Function("r","s","sD",l)}class y1{constructor(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBlockBindings={}}destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBlockBindings=null,this.program=null}}function sp(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function Ql(r){const e=new Array(r);for(let t=0;t<e.length;t++)e[t]=!1;return e}function op(r,e){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return Ql(2*e);case"bvec3":return Ql(3*e);case"bvec4":return Ql(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}let Ro=null;const ap={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"},b1={float:"float32",vec2:"float32x2",vec3:"float32x3",vec4:"float32x4",int:"sint32",ivec2:"sint32x2",ivec3:"sint32x3",ivec4:"sint32x4",uint:"uint32",uvec2:"uint32x2",uvec3:"uint32x3",uvec4:"uint32x4",bool:"uint32",bvec2:"uint32x2",bvec3:"uint32x3",bvec4:"uint32x4"};function lp(r,e){if(!Ro){const t=Object.keys(ap);Ro={};for(let i=0;i<t.length;++i){const n=t[i];Ro[r[n]]=ap[n]}}return Ro[e]}function S1(r,e){const t=lp(r,e);return b1[t]||"float32"}function w1(r,e,t=!1){const i={},n=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=e.getActiveAttrib(r,o);if(a.name.startsWith("gl_"))continue;const l=S1(e,a.type);i[a.name]={location:0,format:l,stride:qi(l).stride,offset:0,instance:!1,start:0}}const s=Object.keys(i);if(t){s.sort((o,a)=>o>a?1:-1);for(let o=0;o<s.length;o++)i[s[o]].location=o,e.bindAttribLocation(r,o,s[o]);e.linkProgram(r)}else for(let o=0;o<s.length;o++)i[s[o]].location=e.getAttribLocation(r,s[o]);return i}function T1(r,e){if(!e.ACTIVE_UNIFORM_BLOCKS)return{};const t={},i=e.getProgramParameter(r,e.ACTIVE_UNIFORM_BLOCKS);for(let n=0;n<i;n++){const s=e.getActiveUniformBlockName(r,n),o=e.getUniformBlockIndex(r,s),a=e.getActiveUniformBlockParameter(r,n,e.UNIFORM_BLOCK_DATA_SIZE);t[s]={name:s,index:o,size:a}}return t}function C1(r,e){const t={},i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;n++){const s=e.getActiveUniform(r,n),o=s.name.replace(/\[.*?\]$/,""),a=!!s.name.match(/\[.*?\]$/),l=lp(e,s.type);t[o]={name:o,index:n,type:l,size:s.size,isArray:a,value:op(l,s.size)}}return t}function up(r,e){const t=r.getShaderSource(e).split(`
`).map((u,h)=>`${h}: ${u}`),i=r.getShaderInfoLog(e),n=i.split(`
`),s={},o=n.map(u=>parseFloat(u.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(u=>u&&!s[u]?(s[u]=!0,!0):!1),a=[""];o.forEach(u=>{t[u-1]=`%c${t[u-1]}%c`,a.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});const l=t.join(`
`);a[0]=l,console.error(i),console.groupCollapsed("click to view full shader code"),console.warn(...a),console.groupEnd()}function P1(r,e,t,i){r.getProgramParameter(e,r.LINK_STATUS)||(r.getShaderParameter(t,r.COMPILE_STATUS)||up(r,t),r.getShaderParameter(i,r.COMPILE_STATUS)||up(r,i),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(e)))}function A1(r,e){const t=sp(r,r.VERTEX_SHADER,e.vertex),i=sp(r,r.FRAGMENT_SHADER,e.fragment),n=r.createProgram();r.attachShader(n,t),r.attachShader(n,i);const s=e.transformFeedbackVaryings;s&&(typeof r.transformFeedbackVaryings!="function"?le("TransformFeedback is not supported but TransformFeedbackVaryings are given."):r.transformFeedbackVaryings(n,s.names,s.bufferMode==="separate"?r.SEPARATE_ATTRIBS:r.INTERLEAVED_ATTRIBS)),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS)||P1(r,n,t,i),e._attributeData=w1(n,r,!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertex)),e._uniformData=C1(n,r),e._uniformBlockData=T1(n,r),r.deleteShader(t),r.deleteShader(i);const o={};for(const l in e._uniformData){const u=e._uniformData[l];o[l]={location:r.getUniformLocation(n,l),value:op(u.type,u.size)}}return new y1(n,o)}const Io={textureCount:0,blockIndex:0};class hp{constructor(e){this._activeProgram=null,this._programDataHash=Object.create(null),this._nextIndex=0,this._boundUniformsIdsToIndexHash=Object.create(null),this._boundIndexToUniformsHash=Object.create(null),this._shaderSyncFunctions=Object.create(null),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_programDataHash")}contextChange(e){this._gl=e,this._maxBindings=e.MAX_UNIFORM_BUFFER_BINDINGS?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0,this._programDataHash=Object.create(null),this._boundUniformsIdsToIndexHash=Object.create(null),this._boundIndexToUniformsHash=Object.create(null),this._shaderSyncFunctions=Object.create(null),this._activeProgram=null,this.maxTextures=on()}bind(e,t){if(this._setProgram(e.glProgram),t)return;Io.textureCount=0,Io.blockIndex=0;let i=this._shaderSyncFunctions[e.glProgram._key];i||(i=this._shaderSyncFunctions[e.glProgram._key]=this._generateShaderSync(e,this)),i(this._renderer,e,Io)}updateUniformGroup(e){this._renderer.uniformGroup.updateUniformGroup(e,this._activeProgram,Io)}bindUniformBlock(e,t,i=0){const n=this._renderer.buffer,s=this._getProgramData(this._activeProgram),o=e._bufferResource;o&&this._renderer.ubo.updateUniformGroup(e),n.updateBuffer(e.buffer);let a=this._boundUniformsIdsToIndexHash[e.uid];if(a===void 0){const h=this._nextIndex++%this._maxBindings,c=this._boundIndexToUniformsHash[h];c&&(this._boundUniformsIdsToIndexHash[c.uid]=void 0),a=this._boundUniformsIdsToIndexHash[e.uid]=h,this._boundIndexToUniformsHash[h]=e,o?n.bindBufferRange(e.buffer,h,e.offset):n.bindBufferBase(e.buffer,h)}const l=this._gl,u=this._activeProgram._uniformBlockData[t].index;s.uniformBlockBindings[i]!==a&&(s.uniformBlockBindings[i]=a,l.uniformBlockBinding(s.program,u,a))}_setProgram(e){if(this._activeProgram===e)return;this._activeProgram=e;const t=this._getProgramData(e);this._gl.useProgram(t.program)}_getProgramData(e){return this._programDataHash[e._key]||this._createProgramData(e)}_createProgramData(e){const t=e._key;return this._programDataHash[t]=A1(this._gl,e),this._programDataHash[t]}destroy(){for(const e of Object.keys(this._programDataHash))this._programDataHash[e].destroy(),this._programDataHash[e]=null;this._programDataHash=null,this._boundUniformsIdsToIndexHash=null}_generateShaderSync(e,t){return v1(e,t)}}hp.extension={type:[M.WebGLSystem],name:"shader"};const E1={f32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`,"vec2<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`,"vec3<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`,"vec4<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`,i32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,u32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`,"vec2<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`,"vec3<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`,"vec4<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`,bool:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,"mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);"},M1={f32:"gl.uniform1fv(location, v);","vec2<f32>":"gl.uniform2fv(location, v);","vec3<f32>":"gl.uniform3fv(location, v);","vec4<f32>":"gl.uniform4fv(location, v);","mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);",i32:"gl.uniform1iv(location, v);","vec2<i32>":"gl.uniform2iv(location, v);","vec3<i32>":"gl.uniform3iv(location, v);","vec4<i32>":"gl.uniform4iv(location, v);",u32:"gl.uniform1iv(location, v);","vec2<u32>":"gl.uniform2iv(location, v);","vec3<u32>":"gl.uniform3iv(location, v);","vec4<u32>":"gl.uniform4iv(location, v);",bool:"gl.uniform1iv(location, v);","vec2<bool>":"gl.uniform2iv(location, v);","vec3<bool>":"gl.uniform3iv(location, v);","vec4<bool>":"gl.uniform4iv(location, v);"};function R1(r,e){const t=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `];for(const i in r.uniforms){if(!e[i]){r.uniforms[i]instanceof gt?r.uniforms[i].ubo?t.push(`
                        renderer.shader.bindUniformBlock(uv.${i}, "${i}");
                    `):t.push(`
                        renderer.shader.updateUniformGroup(uv.${i});
                    `):r.uniforms[i]instanceof Zl&&t.push(`
                        renderer.shader.bindBufferResource(uv.${i}, "${i}");
                    `);continue}const n=r.uniformStructures[i];let s=!1;for(let o=0;o<Pr.length;o++){const a=Pr[o];if(n.type===a.type&&a.test(n)){t.push(`name = "${i}";`,Pr[o].uniform),s=!0;break}}if(!s){const a=(n.size===1?E1:M1)[n.type].replace("location",`ud["${i}"].location`);t.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${a};`)}}return new Function("ud","uv","renderer","syncData",t.join(`
`))}class cp{constructor(e){this._cache={},this._uniformGroupSyncHash={},this._renderer=e,this.gl=null,this._cache={}}contextChange(e){this.gl=e}updateUniformGroup(e,t,i){const n=this._renderer.shader._getProgramData(t);(!e.isStatic||e._dirtyId!==n.uniformDirtyGroups[e.uid])&&(n.uniformDirtyGroups[e.uid]=e._dirtyId,this._getUniformSyncFunction(e,t)(n.uniformData,e.uniforms,this._renderer,i))}_getUniformSyncFunction(e,t){var i;return((i=this._uniformGroupSyncHash[e._signature])==null?void 0:i[t._key])||this._createUniformSyncFunction(e,t)}_createUniformSyncFunction(e,t){const i=this._uniformGroupSyncHash[e._signature]||(this._uniformGroupSyncHash[e._signature]={}),n=this._getSignature(e,t._uniformData,"u");return this._cache[n]||(this._cache[n]=this._generateUniformsSync(e,t._uniformData)),i[t._key]=this._cache[n],i[t._key]}_generateUniformsSync(e,t){return R1(e,t)}_getSignature(e,t,i){const n=e.uniforms,s=[`${i}-`];for(const o in n)s.push(o),t[o]&&s.push(t[o].type);return s.join("-")}destroy(){this._renderer=null,this._cache=null}}cp.extension={type:[M.WebGLSystem],name:"uniformGroup"};function I1(r){const e={};if(e.normal=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e.add=[r.ONE,r.ONE],e.multiply=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e.screen=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e.none=[0,0],e["normal-npm"]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e["add-npm"]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],e["screen-npm"]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e.erase=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],!(r instanceof Se.get().getWebGLRenderingContext()))e.min=[r.ONE,r.ONE,r.ONE,r.ONE,r.MIN,r.MIN],e.max=[r.ONE,r.ONE,r.ONE,r.ONE,r.MAX,r.MAX];else{const i=r.getExtension("EXT_blend_minmax");i&&(e.min=[r.ONE,r.ONE,r.ONE,r.ONE,i.MIN_EXT,i.MIN_EXT],e.max=[r.ONE,r.ONE,r.ONE,r.ONE,i.MAX_EXT,i.MAX_EXT])}return e}const O1=0,F1=1,B1=2,k1=3,U1=4,D1=5,dp=class Wh{constructor(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode="none",this._blendEq=!1,this.map=[],this.map[O1]=this.setBlend,this.map[F1]=this.setOffset,this.map[B1]=this.setCullFace,this.map[k1]=this.setDepthTest,this.map[U1]=this.setFrontFace,this.map[D1]=this.setDepthMask,this.checks=[],this.defaultState=ai.for2d()}contextChange(e){this.gl=e,this.blendModesMap=I1(e),this.reset()}set(e){if(e=e||this.defaultState,this.stateId!==e.data){let t=this.stateId^e.data,i=0;for(;t;)t&1&&this.map[i].call(this,!!(e.data&1<<i)),t=t>>1,i++;this.stateId=e.data}for(let t=0;t<this.checks.length;t++)this.checks[t](this,e)}forceState(e){e=e||this.defaultState;for(let t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(let t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data}setBlend(e){this._updateCheck(Wh._checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)}setOffset(e){this._updateCheck(Wh._checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)}setDepthTest(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)}setDepthMask(e){this.gl.depthMask(e)}setCullFace(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)}setFrontFace(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])}setBlendMode(e){if(this.blendModesMap[e]||(e="normal"),e===this.blendMode)return;this.blendMode=e;const t=this.blendModesMap[e],i=this.gl;t.length===2?i.blendFunc(t[0],t[1]):i.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,i.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD))}setPolygonOffset(e,t){this.gl.polygonOffset(e,t)}reset(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode="",this.setBlendMode("normal")}_updateCheck(e,t){const i=this.checks.indexOf(e);t&&i===-1?this.checks.push(e):!t&&i!==-1&&this.checks.splice(i,1)}static _checkBlendMode(e,t){e.setBlendMode(t.blendMode)}static _checkPolygonOffset(e,t){e.setPolygonOffset(1,t.polygonOffset)}destroy(){this.gl=null,this.checks.length=0}};dp.extension={type:[M.WebGLSystem],name:"state"};let G1=dp;class z1{constructor(e){this.target=Hf.TEXTURE_2D,this.texture=e,this.width=-1,this.height=-1,this.type=Fe.UNSIGNED_BYTE,this.internalFormat=Yl.RGBA,this.format=Yl.RGBA,this.samplerType=0}}const L1={id:"buffer",upload(r,e,t){e.width===r.width||e.height===r.height?t.texSubImage2D(t.TEXTURE_2D,0,0,0,r.width,r.height,e.format,e.type,r.resource):t.texImage2D(e.target,0,e.internalFormat,r.width,r.height,0,e.format,e.type,r.resource),e.width=r.width,e.height=r.height}},N1={"bc1-rgba-unorm":!0,"bc1-rgba-unorm-srgb":!0,"bc2-rgba-unorm":!0,"bc2-rgba-unorm-srgb":!0,"bc3-rgba-unorm":!0,"bc3-rgba-unorm-srgb":!0,"bc4-r-unorm":!0,"bc4-r-snorm":!0,"bc5-rg-unorm":!0,"bc5-rg-snorm":!0,"bc6h-rgb-ufloat":!0,"bc6h-rgb-float":!0,"bc7-rgba-unorm":!0,"bc7-rgba-unorm-srgb":!0,"etc2-rgb8unorm":!0,"etc2-rgb8unorm-srgb":!0,"etc2-rgb8a1unorm":!0,"etc2-rgb8a1unorm-srgb":!0,"etc2-rgba8unorm":!0,"etc2-rgba8unorm-srgb":!0,"eac-r11unorm":!0,"eac-r11snorm":!0,"eac-rg11unorm":!0,"eac-rg11snorm":!0,"astc-4x4-unorm":!0,"astc-4x4-unorm-srgb":!0,"astc-5x4-unorm":!0,"astc-5x4-unorm-srgb":!0,"astc-5x5-unorm":!0,"astc-5x5-unorm-srgb":!0,"astc-6x5-unorm":!0,"astc-6x5-unorm-srgb":!0,"astc-6x6-unorm":!0,"astc-6x6-unorm-srgb":!0,"astc-8x5-unorm":!0,"astc-8x5-unorm-srgb":!0,"astc-8x6-unorm":!0,"astc-8x6-unorm-srgb":!0,"astc-8x8-unorm":!0,"astc-8x8-unorm-srgb":!0,"astc-10x5-unorm":!0,"astc-10x5-unorm-srgb":!0,"astc-10x6-unorm":!0,"astc-10x6-unorm-srgb":!0,"astc-10x8-unorm":!0,"astc-10x8-unorm-srgb":!0,"astc-10x10-unorm":!0,"astc-10x10-unorm-srgb":!0,"astc-12x10-unorm":!0,"astc-12x10-unorm-srgb":!0,"astc-12x12-unorm":!0,"astc-12x12-unorm-srgb":!0},$1={id:"compressed",upload(r,e,t){t.pixelStorei(t.UNPACK_ALIGNMENT,4);let i=r.pixelWidth,n=r.pixelHeight;const s=!!N1[r.format];for(let o=0;o<r.resource.length;o++){const a=r.resource[o];s?t.compressedTexImage2D(t.TEXTURE_2D,o,e.internalFormat,i,n,0,a):t.texImage2D(t.TEXTURE_2D,o,e.internalFormat,i,n,0,e.format,e.type,a),i=Math.max(i>>1,1),n=Math.max(n>>1,1)}}},fp={id:"image",upload(r,e,t,i){const n=r.alphaMode==="premultiply-alpha-on-upload";t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n);const s=e.width,o=e.height,a=r.pixelWidth,l=r.pixelHeight,u=r.resourceWidth,h=r.resourceHeight;u<a||h<l?((s!==a||o!==l)&&t.texImage2D(e.target,0,e.internalFormat,a,l,0,e.format,e.type,null),i===2?t.texSubImage2D(t.TEXTURE_2D,0,0,0,u,h,e.format,e.type,r.resource):t.texSubImage2D(t.TEXTURE_2D,0,0,0,e.format,e.type,r.resource)):s===a||o===l?t.texSubImage2D(t.TEXTURE_2D,0,0,0,e.format,e.type,r.resource):i===2?t.texImage2D(e.target,0,e.internalFormat,a,l,0,e.format,e.type,r.resource):t.texImage2D(e.target,0,e.internalFormat,e.format,e.type,r.resource),e.width=a,e.height=l}},V1={id:"video",upload(r,e,t,i){if(!r.isValid){t.texImage2D(e.target,0,e.internalFormat,1,1,0,e.format,e.type,null);return}fp.upload(r,e,t,i)}},pp={linear:9729,nearest:9728},H1={linear:{linear:9987,nearest:9985},nearest:{linear:9986,nearest:9984}},Jl={"clamp-to-edge":33071,repeat:10497,"mirror-repeat":33648},W1={never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519};function mp(r,e,t,i,n,s,o,a){const l=s;if(!a||r.addressModeU!=="repeat"||r.addressModeV!=="repeat"||r.addressModeW!=="repeat"){const u=Jl[o?"clamp-to-edge":r.addressModeU],h=Jl[o?"clamp-to-edge":r.addressModeV],c=Jl[o?"clamp-to-edge":r.addressModeW];e[n](l,e.TEXTURE_WRAP_S,u),e[n](l,e.TEXTURE_WRAP_T,h),e.TEXTURE_WRAP_R&&e[n](l,e.TEXTURE_WRAP_R,c)}if((!a||r.magFilter!=="linear")&&e[n](l,e.TEXTURE_MAG_FILTER,pp[r.magFilter]),t){if(!a||r.mipmapFilter!=="linear"){const u=H1[r.minFilter][r.mipmapFilter];e[n](l,e.TEXTURE_MIN_FILTER,u)}}else e[n](l,e.TEXTURE_MIN_FILTER,pp[r.minFilter]);if(i&&r.maxAnisotropy>1){const u=Math.min(r.maxAnisotropy,e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));e[n](l,i.TEXTURE_MAX_ANISOTROPY_EXT,u)}r.compare&&e[n](l,e.TEXTURE_COMPARE_FUNC,W1[r.compare])}function j1(r){return{r8unorm:r.RED,r8snorm:r.RED,r8uint:r.RED,r8sint:r.RED,r16uint:r.RED,r16sint:r.RED,r16float:r.RED,rg8unorm:r.RG,rg8snorm:r.RG,rg8uint:r.RG,rg8sint:r.RG,r32uint:r.RED,r32sint:r.RED,r32float:r.RED,rg16uint:r.RG,rg16sint:r.RG,rg16float:r.RG,rgba8unorm:r.RGBA,"rgba8unorm-srgb":r.RGBA,rgba8snorm:r.RGBA,rgba8uint:r.RGBA,rgba8sint:r.RGBA,bgra8unorm:r.RGBA,"bgra8unorm-srgb":r.RGBA,rgb9e5ufloat:r.RGB,rgb10a2unorm:r.RGBA,rg11b10ufloat:r.RGB,rg32uint:r.RG,rg32sint:r.RG,rg32float:r.RG,rgba16uint:r.RGBA,rgba16sint:r.RGBA,rgba16float:r.RGBA,rgba32uint:r.RGBA,rgba32sint:r.RGBA,rgba32float:r.RGBA,stencil8:r.STENCIL_INDEX8,depth16unorm:r.DEPTH_COMPONENT,depth24plus:r.DEPTH_COMPONENT,"depth24plus-stencil8":r.DEPTH_STENCIL,depth32float:r.DEPTH_COMPONENT,"depth32float-stencil8":r.DEPTH_STENCIL}}function X1(r,e){let t={},i=r.RGBA;return r instanceof Se.get().getWebGLRenderingContext()?e.srgb&&(t={"rgba8unorm-srgb":e.srgb.SRGB8_ALPHA8_EXT,"bgra8unorm-srgb":e.srgb.SRGB8_ALPHA8_EXT}):(t={"rgba8unorm-srgb":r.SRGB8_ALPHA8,"bgra8unorm-srgb":r.SRGB8_ALPHA8},i=r.RGBA8),{r8unorm:r.R8,r8snorm:r.R8_SNORM,r8uint:r.R8UI,r8sint:r.R8I,r16uint:r.R16UI,r16sint:r.R16I,r16float:r.R16F,rg8unorm:r.RG8,rg8snorm:r.RG8_SNORM,rg8uint:r.RG8UI,rg8sint:r.RG8I,r32uint:r.R32UI,r32sint:r.R32I,r32float:r.R32F,rg16uint:r.RG16UI,rg16sint:r.RG16I,rg16float:r.RG16F,rgba8unorm:r.RGBA,...t,rgba8snorm:r.RGBA8_SNORM,rgba8uint:r.RGBA8UI,rgba8sint:r.RGBA8I,bgra8unorm:i,rgb9e5ufloat:r.RGB9_E5,rgb10a2unorm:r.RGB10_A2,rg11b10ufloat:r.R11F_G11F_B10F,rg32uint:r.RG32UI,rg32sint:r.RG32I,rg32float:r.RG32F,rgba16uint:r.RGBA16UI,rgba16sint:r.RGBA16I,rgba16float:r.RGBA16F,rgba32uint:r.RGBA32UI,rgba32sint:r.RGBA32I,rgba32float:r.RGBA32F,stencil8:r.STENCIL_INDEX8,depth16unorm:r.DEPTH_COMPONENT16,depth24plus:r.DEPTH_COMPONENT24,"depth24plus-stencil8":r.DEPTH24_STENCIL8,depth32float:r.DEPTH_COMPONENT32F,"depth32float-stencil8":r.DEPTH32F_STENCIL8,...e.s3tc?{"bc1-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,"bc2-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,"bc3-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT}:{},...e.s3tc_sRGB?{"bc1-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,"bc2-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,"bc3-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}:{},...e.rgtc?{"bc4-r-unorm":e.rgtc.COMPRESSED_RED_RGTC1_EXT,"bc4-r-snorm":e.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,"bc5-rg-unorm":e.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,"bc5-rg-snorm":e.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}:{},...e.bptc?{"bc6h-rgb-float":e.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,"bc6h-rgb-ufloat":e.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,"bc7-rgba-unorm":e.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,"bc7-rgba-unorm-srgb":e.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT}:{},...e.etc?{"etc2-rgb8unorm":e.etc.COMPRESSED_RGB8_ETC2,"etc2-rgb8unorm-srgb":e.etc.COMPRESSED_SRGB8_ETC2,"etc2-rgb8a1unorm":e.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgb8a1unorm-srgb":e.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgba8unorm":e.etc.COMPRESSED_RGBA8_ETC2_EAC,"etc2-rgba8unorm-srgb":e.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,"eac-r11unorm":e.etc.COMPRESSED_R11_EAC,"eac-rg11unorm":e.etc.COMPRESSED_SIGNED_RG11_EAC}:{},...e.astc?{"astc-4x4-unorm":e.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,"astc-4x4-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,"astc-5x4-unorm":e.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,"astc-5x4-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,"astc-5x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,"astc-5x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,"astc-6x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,"astc-6x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,"astc-6x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,"astc-6x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,"astc-8x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,"astc-8x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,"astc-8x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,"astc-8x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,"astc-8x8-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,"astc-8x8-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,"astc-10x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,"astc-10x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,"astc-10x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,"astc-10x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,"astc-10x8-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,"astc-10x8-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,"astc-10x10-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,"astc-10x10-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,"astc-12x10-unorm":e.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,"astc-12x10-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,"astc-12x12-unorm":e.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,"astc-12x12-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR}:{}}}function Y1(r){return{r8unorm:r.UNSIGNED_BYTE,r8snorm:r.BYTE,r8uint:r.UNSIGNED_BYTE,r8sint:r.BYTE,r16uint:r.UNSIGNED_SHORT,r16sint:r.SHORT,r16float:r.HALF_FLOAT,rg8unorm:r.UNSIGNED_BYTE,rg8snorm:r.BYTE,rg8uint:r.UNSIGNED_BYTE,rg8sint:r.BYTE,r32uint:r.UNSIGNED_INT,r32sint:r.INT,r32float:r.FLOAT,rg16uint:r.UNSIGNED_SHORT,rg16sint:r.SHORT,rg16float:r.HALF_FLOAT,rgba8unorm:r.UNSIGNED_BYTE,"rgba8unorm-srgb":r.UNSIGNED_BYTE,rgba8snorm:r.BYTE,rgba8uint:r.UNSIGNED_BYTE,rgba8sint:r.BYTE,bgra8unorm:r.UNSIGNED_BYTE,"bgra8unorm-srgb":r.UNSIGNED_BYTE,rgb9e5ufloat:r.UNSIGNED_INT_5_9_9_9_REV,rgb10a2unorm:r.UNSIGNED_INT_2_10_10_10_REV,rg11b10ufloat:r.UNSIGNED_INT_10F_11F_11F_REV,rg32uint:r.UNSIGNED_INT,rg32sint:r.INT,rg32float:r.FLOAT,rgba16uint:r.UNSIGNED_SHORT,rgba16sint:r.SHORT,rgba16float:r.HALF_FLOAT,rgba32uint:r.UNSIGNED_INT,rgba32sint:r.INT,rgba32float:r.FLOAT,stencil8:r.UNSIGNED_BYTE,depth16unorm:r.UNSIGNED_SHORT,depth24plus:r.UNSIGNED_INT,"depth24plus-stencil8":r.UNSIGNED_INT_24_8,depth32float:r.FLOAT,"depth32float-stencil8":r.FLOAT_32_UNSIGNED_INT_24_8_REV}}const q1=4;class gp{constructor(e){this.managedTextures=[],this._glTextures=Object.create(null),this._glSamplers=Object.create(null),this._boundTextures=[],this._activeTextureLocation=-1,this._boundSamplers=Object.create(null),this._uploads={image:fp,buffer:L1,video:V1,compressed:$1},this._useSeparateSamplers=!1,this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_glTextures"),this._renderer.renderableGC.addManagedHash(this,"_glSamplers")}contextChange(e){this._gl=e,this._mapFormatToInternalFormat||(this._mapFormatToInternalFormat=X1(e,this._renderer.context.extensions),this._mapFormatToType=Y1(e),this._mapFormatToFormat=j1(e)),this._glTextures=Object.create(null),this._glSamplers=Object.create(null),this._boundSamplers=Object.create(null);for(let t=0;t<16;t++)this.bind(X.EMPTY,t)}initSource(e){this.bind(e)}bind(e,t=0){const i=e.source;e?(this.bindSource(i,t),this._useSeparateSamplers&&this._bindSampler(i.style,t)):(this.bindSource(null,t),this._useSeparateSamplers&&this._bindSampler(null,t))}bindSource(e,t=0){const i=this._gl;if(e._touched=this._renderer.textureGC.count,this._boundTextures[t]!==e){this._boundTextures[t]=e,this._activateLocation(t),e=e||X.EMPTY.source;const n=this.getGlSource(e);i.bindTexture(n.target,n.texture)}}_bindSampler(e,t=0){const i=this._gl;if(!e){this._boundSamplers[t]=null,i.bindSampler(t,null);return}const n=this._getGlSampler(e);this._boundSamplers[t]!==n&&(this._boundSamplers[t]=n,i.bindSampler(t,n))}unbind(e){const t=e.source,i=this._boundTextures,n=this._gl;for(let s=0;s<i.length;s++)if(i[s]===t){this._activateLocation(s);const o=this.getGlSource(t);n.bindTexture(o.target,null),i[s]=null}}_activateLocation(e){this._activeTextureLocation!==e&&(this._activeTextureLocation=e,this._gl.activeTexture(this._gl.TEXTURE0+e))}_initSource(e){const t=this._gl,i=new z1(t.createTexture());if(i.type=this._mapFormatToType[e.format],i.internalFormat=this._mapFormatToInternalFormat[e.format],i.format=this._mapFormatToFormat[e.format],e.autoGenerateMipmaps&&(this._renderer.context.supports.nonPowOf2mipmaps||e.isPowerOfTwo)){const n=Math.max(e.width,e.height);e.mipLevelCount=Math.floor(Math.log2(n))+1}return this._glTextures[e.uid]=i,this.managedTextures.includes(e)||(e.on("update",this.onSourceUpdate,this),e.on("resize",this.onSourceUpdate,this),e.on("styleChange",this.onStyleChange,this),e.on("destroy",this.onSourceDestroy,this),e.on("unload",this.onSourceUnload,this),e.on("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.push(e)),this.onSourceUpdate(e),this.updateStyle(e,!1),i}onStyleChange(e){this.updateStyle(e,!1)}updateStyle(e,t){const i=this._gl,n=this.getGlSource(e);i.bindTexture(i.TEXTURE_2D,n.texture),this._boundTextures[this._activeTextureLocation]=e,mp(e.style,i,e.mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"texParameteri",i.TEXTURE_2D,!this._renderer.context.supports.nonPowOf2wrapping&&!e.isPowerOfTwo,t)}onSourceUnload(e){const t=this._glTextures[e.uid];t&&(this.unbind(e),this._glTextures[e.uid]=null,this._gl.deleteTexture(t.texture))}onSourceUpdate(e){const t=this._gl,i=this.getGlSource(e);t.bindTexture(t.TEXTURE_2D,i.texture),this._boundTextures[this._activeTextureLocation]=e,this._uploads[e.uploadMethodId]?this._uploads[e.uploadMethodId].upload(e,i,t,this._renderer.context.webGLVersion):t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.pixelWidth,e.pixelHeight,0,t.RGBA,t.UNSIGNED_BYTE,null),e.autoGenerateMipmaps&&e.mipLevelCount>1&&this.onUpdateMipmaps(e,!1)}onUpdateMipmaps(e,t=!0){t&&this.bindSource(e,0);const i=this.getGlSource(e);this._gl.generateMipmap(i.target)}onSourceDestroy(e){e.off("destroy",this.onSourceDestroy,this),e.off("update",this.onSourceUpdate,this),e.off("resize",this.onSourceUpdate,this),e.off("unload",this.onSourceUnload,this),e.off("styleChange",this.onStyleChange,this),e.off("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.splice(this.managedTextures.indexOf(e),1),this.onSourceUnload(e)}_initSampler(e){const t=this._gl,i=this._gl.createSampler();return this._glSamplers[e._resourceId]=i,mp(e,t,this._boundTextures[this._activeTextureLocation].mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"samplerParameteri",i,!1,!0),this._glSamplers[e._resourceId]}_getGlSampler(e){return this._glSamplers[e._resourceId]||this._initSampler(e)}getGlSource(e){return this._glTextures[e.uid]||this._initSource(e)}generateCanvas(e){const{pixels:t,width:i,height:n}=this.getPixels(e),s=Se.get().createCanvas();s.width=i,s.height=n;const o=s.getContext("2d");if(o){const a=o.createImageData(i,n);a.data.set(t),o.putImageData(a,0,0)}return s}getPixels(e){const t=e.source.resolution,i=e.frame,n=Math.max(Math.round(i.width*t),1),s=Math.max(Math.round(i.height*t),1),o=new Uint8Array(q1*n*s),a=this._renderer,l=a.renderTarget.getRenderTarget(e),u=a.renderTarget.getGpuRenderTarget(l),h=a.gl;return h.bindFramebuffer(h.FRAMEBUFFER,u.resolveTargetFramebuffer),h.readPixels(Math.round(i.x*t),Math.round(i.y*t),n,s,h.RGBA,h.UNSIGNED_BYTE,o),{pixels:new Uint8ClampedArray(o.buffer),width:n,height:s}}destroy(){this.managedTextures.slice().forEach(e=>this.onSourceDestroy(e)),this.managedTextures=null,this._renderer=null}}gp.extension={type:[M.WebGLSystem],name:"texture"};class _p{init(){const e=new gt({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new se,type:"mat3x3<f32>"},uRound:{value:0,type:"f32"}}),t=on(),i=Kn({name:"graphics",bits:[xl,Sl(t),jl,Qn]});this.shader=new Zt({glProgram:i,resources:{localUniforms:e,batchSamplers:wl(t)}})}execute(e,t){const i=t.context,n=i.customShader||this.shader,s=e.renderer,o=s.graphicsContext,{batcher:a,instructions:l}=o.getContextRenderData(i);n.groups[0]=s.globalUniforms.bindGroup,s.state.set(e.state),s.shader.bind(n),s.geometry.bind(a.geometry,n.glProgram);const u=l.instructions;for(let h=0;h<l.instructionSize;h++){const c=u[h];if(c.size){for(let d=0;d<c.textures.count;d++)s.texture.bind(c.textures.textures[d],d);s.geometry.draw("triangle-list",c.size,c.start)}}}destroy(){this.shader.destroy(!0),this.shader=null}}_p.extension={type:[M.WebGLPipesAdaptor],name:"graphics"};class xp{init(){const e=Kn({name:"mesh",bits:[jl,J2,Qn]});this._shader=new Zt({glProgram:e,resources:{uTexture:X.EMPTY.source,textureUniforms:{uTextureMatrix:{type:"mat3x3<f32>",value:new se}}}})}execute(e,t){const i=e.renderer;let n=t._shader;if(n){if(!n.glProgram){le("Mesh shader has no glProgram",t.shader);return}}else{n=this._shader;const s=t.texture,o=s.source;n.resources.uTexture=o,n.resources.uSampler=o.style,n.resources.textureUniforms.uniforms.uTextureMatrix=s.textureMatrix.mapCoord}n.groups[100]=i.globalUniforms.bindGroup,n.groups[101]=e.localUniformsBindGroup,i.encoder.draw({geometry:t._geometry,shader:n,state:t.state})}destroy(){this._shader.destroy(!0),this._shader=null}}xp.extension={type:[M.WebGLPipesAdaptor],name:"mesh"};class vp{constructor(e){this._renderer=e}updateRenderable(){}destroyRenderable(){}validateRenderable(){return!1}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}}vp.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"customRender"};function yp(r,e){const t=r.instructionSet,i=t.instructions;for(let n=0;n<t.instructionSize;n++){const s=i[n];e[s.renderPipeId].execute(s)}}class bp{constructor(e){this._renderer=e}addRenderGroup(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&(this._renderer.globalUniforms.push({worldTransformMatrix:e.worldTransform,worldColor:e.worldColorAlpha}),yp(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop())}destroy(){this._renderer=null}}bp.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"renderGroup"};function eu(r,e){e||(e=0);for(let t=e;t<r.length&&r[t];t++)r[t]=null}function Sp(r,e=[]){e.push(r);for(let t=0;t<r.renderGroupChildren.length;t++)Sp(r.renderGroupChildren[t],e);return e}function K1(r,e,t){const i=r>>16&255,n=r>>8&255,s=r&255,o=e>>16&255,a=e>>8&255,l=e&255,u=i+(o-i)*t,h=n+(a-n)*t,c=s+(l-s)*t;return(u<<16)+(h<<8)+c}const tu=16777215;function wp(r,e){return r===tu||e===tu?r+e-tu:K1(r,e,.5)}const Z1=new ue,Tp=Dn|no|$a;function Cp(r,e=!1){Q1(r);const t=r.childrenToUpdate,i=r.updateTick++;for(const n in t){const s=Number(n),o=t[n],a=o.list,l=o.index;for(let u=0;u<l;u++){const h=a[u];h.parentRenderGroup===r&&h.relativeRenderGroupDepth===s&&Pp(h,i,0)}eu(a,l),o.index=0}if(e)for(let n=0;n<r.renderGroupChildren.length;n++)Cp(r.renderGroupChildren[n],e)}function Q1(r){const e=r.root;let t;if(r.renderGroupParent){const i=r.renderGroupParent;r.worldTransform.appendFrom(e.relativeGroupTransform,i.worldTransform),r.worldColor=wp(e.groupColor,i.worldColor),t=e.groupAlpha*i.worldAlpha}else r.worldTransform.copyFrom(e.localTransform),r.worldColor=e.localColor,t=e.localAlpha;t=t<0?0:t>1?1:t,r.worldAlpha=t,r.worldColorAlpha=r.worldColor+((t*255|0)<<24)}function Pp(r,e,t){if(e===r.updateTick)return;r.updateTick=e,r.didChange=!1;const i=r.localTransform;r.updateLocalTransform();const n=r.parent;if(n&&!n.renderGroup?(t=t|r._updateFlags,r.relativeGroupTransform.appendFrom(i,n.relativeGroupTransform),t&Tp&&Ap(r,n,t)):(t=r._updateFlags,r.relativeGroupTransform.copyFrom(i),t&Tp&&Ap(r,Z1,t)),!r.renderGroup){const s=r.children,o=s.length;for(let u=0;u<o;u++)Pp(s[u],e,t);const a=r.parentRenderGroup,l=r;l.renderPipeId&&!a.structureDidChange&&a.updateRenderable(l)}}function Ap(r,e,t){if(t&no){r.groupColor=wp(r.localColor,e.groupColor);let i=r.localAlpha*e.groupAlpha;i=i<0?0:i>1?1:i,r.groupAlpha=i,r.groupColorAlpha=r.groupColor+((i*255|0)<<24)}t&$a&&(r.groupBlendMode=r.localBlendMode==="inherit"?e.groupBlendMode:r.localBlendMode),t&Dn&&(r.globalDisplayStatus=r.localDisplayStatus&e.globalDisplayStatus),r._updateFlags=0}function J1(r,e){const{list:t,index:i}=r.childrenRenderablesToUpdate;let n=!1;for(let s=0;s<i;s++){const o=t[s];if(n=e[o.renderPipeId].validateRenderable(o),n)break}return r.structureDidChange=n,n}const eS=new se;class Ep{constructor(e){this._renderer=e}render({container:e,transform:t}){e.isRenderGroup=!0;const i=e.parent,n=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;const s=this._renderer,o=Sp(e.renderGroup,[]);let a=eS;t&&(a=a.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));const l=s.renderPipes;for(let u=0;u<o.length;u++){const h=o[u];h.runOnRender(),h.instructionSet.renderPipes=l,h.structureDidChange?eu(h.childrenRenderablesToUpdate.list,0):J1(h,l),Cp(h),h.structureDidChange?(h.structureDidChange=!1,e1(h,s)):tS(h),h.childrenRenderablesToUpdate.index=0,s.renderPipes.batch.upload(h.instructionSet)}s.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),yp(e.renderGroup,l),l.uniformBatch&&l.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(a),e.parent=i,e.renderGroup.renderGroupParent=n}destroy(){this._renderer=null}}Ep.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"renderGroup"};function tS(r){const{list:e,index:t}=r.childrenRenderablesToUpdate;for(let i=0;i<t;i++){const n=e[i];n.didViewUpdate&&r.updateRenderable(n)}eu(e,t)}class iu{constructor(){this.batcherName="default",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}class Mp{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuSpriteHash")}addRenderable(e,t){const i=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,i),this._renderer.renderPipes.batch.addToBatch(i,t)}updateRenderable(e){const t=this._gpuSpriteHash[e.uid];e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=e._texture,i=this._getGpuSprite(e);return i.texture._source!==t._source?!i._batcher.checkAndUpdateTexture(i,t):!1}destroyRenderable(e){const t=this._gpuSpriteHash[e.uid];Re.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){t.bounds=e.bounds,t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=Re.get(iu);return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.bounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuSpriteHash)Re.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null,this._renderer=null}}Mp.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"sprite"};const ru=class G0{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new ae(0),this.color=this._backgroundColor,this.alpha=1}init(e){e={...G0.defaultOptions,...e},this.clearBeforeRender=e.clearBeforeRender,this.color=e.background||e.backgroundColor||this._backgroundColor,this.alpha=e.backgroundAlpha,this._backgroundColor.setAlpha(e.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};ru.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"background",priority:0},ru.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};let iS=ru;const as={};oe.handle(M.BlendMode,r=>{if(!r.name)throw new Error("BlendMode extension must have a name property");as[r.name]=r.ref},r=>{delete as[r.name]});class Rp{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e}setBlendMode(e,t,i){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(i),this._isAdvanced=!!as[t],this._isAdvanced&&(this._beginAdvancedBlendMode(i),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);const t=this._activeBlendMode;if(!as[t]){le(`Unable to assign BlendMode: '${t}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}let i=this._filterHash[t];i||(i=this._filterHash[t]=new io,i.filters=[new as[t]]);const n={renderPipeId:"filter",action:"pushFilter",renderables:[],filterEffect:i,canBundle:!1};this._renderableList=n.renderables,e.add(n)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(const e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}}Rp.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"blendMode"};const nu={png:"image/png",jpg:"image/jpeg",webp:"image/webp"},su=class z0{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof ue||e instanceof X?{target:e,...t}:{...t,...e}}async image(e){const t=new Image;return t.src=await this.base64(e),t}async base64(e){e=this._normalizeOptions(e,z0.defaultImageOptions);const{format:t,quality:i}=e,n=this.canvas(e);if(n.toBlob!==void 0)return new Promise((s,o)=>{n.toBlob(a=>{if(!a){o(new Error("ICanvas.toBlob failed!"));return}const l=new FileReader;l.onload=()=>s(l.result),l.onerror=o,l.readAsDataURL(a)},nu[t],i)});if(n.toDataURL!==void 0)return n.toDataURL(nu[t],i);if(n.convertToBlob!==void 0){const s=await n.convertToBlob({type:nu[t],quality:i});return new Promise((o,a)=>{const l=new FileReader;l.onload=()=>o(l.result),l.onerror=a,l.readAsDataURL(s)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(e){e=this._normalizeOptions(e);const t=e.target,i=this._renderer;if(t instanceof X)return i.texture.generateCanvas(t);const n=i.textureGenerator.generateTexture(e),s=i.texture.generateCanvas(n);return n.destroy(),s}pixels(e){e=this._normalizeOptions(e);const t=e.target,i=this._renderer,n=t instanceof X?t:i.textureGenerator.generateTexture(e),s=i.texture.getPixels(n);return t instanceof ue&&n.destroy(),s}texture(e){return e=this._normalizeOptions(e),e.target instanceof X?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);const t=this.canvas(e),i=document.createElement("a");i.download=e.filename??"image.png",i.href=t.toDataURL("image/png"),document.body.appendChild(i),i.click(),document.body.removeChild(i)}log(e){const t=e.width??200;e=this._normalizeOptions(e);const i=this.canvas(e),n=i.toDataURL();console.log(`[Pixi Texture] ${i.width}px ${i.height}px`);const s=["font-size: 1px;",`padding: ${t}px 300px;`,`background: url(${n}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",s)}destroy(){this._renderer=null}};su.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"extract"},su.defaultImageOptions={format:"png",quality:1};let rS=su;class ou extends X{static create(e){return new ou({source:new st(e)})}resize(e,t,i){return this.source.resize(e,t,i),this}}const nS=new De,sS=new Mt,oS=[0,0,0,0];class Ip{constructor(e){this._renderer=e}generateTexture(e){var u;e instanceof ue&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});const t=e.resolution||this._renderer.resolution,i=e.antialias||this._renderer.view.antialias,n=e.target;let s=e.clearColor;s?s=Array.isArray(s)&&s.length===4?s:ae.shared.setValue(s).toArray():s=oS;const o=((u=e.frame)==null?void 0:u.copyTo(nS))||Ga(n,sS).rectangle;o.width=Math.max(o.width,1/t)|0,o.height=Math.max(o.height,1/t)|0;const a=ou.create({...e.textureSourceOptions,width:o.width,height:o.height,resolution:t,antialias:i}),l=se.shared.translate(-o.x,-o.y);return this._renderer.render({container:n,transform:l,target:a,clearColor:s}),a.source.updateMipmaps(),a}destroy(){this._renderer=null}}Ip.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"textureGenerator"};function ls(r,e,t){const i=(r>>24&255)/255;e[t++]=(r&255)/255*i,e[t++]=(r>>8&255)/255*i,e[t++]=(r>>16&255)/255*i,e[t++]=i}class Op{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:i,worldColor:n,offset:s}){const o=this._renderer.renderTarget.renderTarget,a=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{worldTransformMatrix:new se,worldColor:4294967295,offset:new Ge},l={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||o.size,worldTransformMatrix:i||a.worldTransformMatrix,worldColor:n||a.worldColor,offset:s||a.offset,bindGroup:null},u=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(u);const h=u.uniforms;h.uProjectionMatrix=l.projectionMatrix,h.uResolution=l.resolution,h.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix),h.uWorldTransformMatrix.tx-=l.offset.x,h.uWorldTransformMatrix.ty-=l.offset.y,ls(l.worldColor,h.uWorldColorAlpha,0),u.update();let c;this._renderer.renderPipes.uniformBatch?c=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(u,!1):(c=this._bindGroupPool.pop()||new Di,this._activeBindGroups.push(c),c.setResource(u,0)),l.bindGroup=c,this._currentGlobalUniformData=l}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===zt.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get globalUniformData(){return this._currentGlobalUniformData}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new gt({uProjectionMatrix:{value:new se,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new se,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null}}Op.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"globalUniforms"};let aS=1;class Fp{constructor(){this._tasks=[],this._offset=0}init(){pt.system.add(this._update,this)}repeat(e,t,i=!0){const n=aS++;let s=0;return i&&(this._offset+=1e3,s=this._offset),this._tasks.push({func:e,duration:t,start:performance.now(),offset:s,last:performance.now(),repeat:!0,id:n}),n}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}_update(){const e=performance.now();for(let t=0;t<this._tasks.length;t++){const i=this._tasks[t];if(e-i.offset-i.last>=i.duration){const n=e-i.start;i.func(n),i.last=e}}}destroy(){pt.system.remove(this._update,this),this._tasks.length=0}}Fp.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"scheduler",priority:0};let Bp=!1;function lS(r){if(!Bp){if(Se.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){const e=[`%c  %c  %c  %c  %c PixiJS %c v${_o} (${r}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${_o} - ${r} - http://www.pixijs.com/`);Bp=!0}}class au{constructor(e){this._renderer=e}init(e){if(e.hello){let t=this._renderer.name;this._renderer.type===zt.WEBGL&&(t+=` ${this._renderer.context.webGLVersion}`),lS(t)}}}au.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"hello",priority:-2},au.defaultOptions={hello:!1};function uS(r){let e=!1;for(const i in r)if(r[i]==null){e=!0;break}if(!e)return r;const t=Object.create(null);for(const i in r){const n=r[i];n&&(t[i]=n)}return t}function hS(r){let e=0;for(let t=0;t<r.length;t++)r[t]==null?e++:r[t-e]=r[t];return r.length=r.length-e,r}const lu=class L0{constructor(e){this._managedRenderables=[],this._managedHashes=[],this._managedArrays=[],this._renderer=e}init(e){e={...L0.defaultOptions,...e},this.maxUnusedTime=e.renderableGCMaxUnusedTime,this._frequency=e.renderableGCFrequency,this.enabled=e.renderableGCActive}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?(this._handler=this._renderer.scheduler.repeat(()=>this.run(),this._frequency,!1),this._hashHandler=this._renderer.scheduler.repeat(()=>{for(const t of this._managedHashes)t.context[t.hash]=uS(t.context[t.hash])},this._frequency),this._arrayHandler=this._renderer.scheduler.repeat(()=>{for(const t of this._managedArrays)hS(t.context[t.hash])},this._frequency)):(this._renderer.scheduler.cancel(this._handler),this._renderer.scheduler.cancel(this._hashHandler),this._renderer.scheduler.cancel(this._arrayHandler)))}addManagedHash(e,t){this._managedHashes.push({context:e,hash:t})}addManagedArray(e,t){this._managedArrays.push({context:e,hash:t})}prerender(){this._now=performance.now()}addRenderable(e,t){this.enabled&&(e._lastUsed=this._now,e._lastInstructionTick===-1&&(this._managedRenderables.push(e),e.once("destroyed",this._removeRenderable,this)),e._lastInstructionTick=t.tick)}run(){var s;const e=performance.now(),t=this._managedRenderables,i=this._renderer.renderPipes;let n=0;for(let o=0;o<t.length;o++){const a=t[o];if(a===null){n++;continue}const l=a.renderGroup??a.parentRenderGroup,u=((s=l==null?void 0:l.instructionSet)==null?void 0:s.tick)??-1;a._lastInstructionTick!==u&&e-a._lastUsed>this.maxUnusedTime?(a.destroyed||i[a.renderPipeId].destroyRenderable(a),a._lastInstructionTick=-1,n++,a.off("destroyed",this._removeRenderable,this)):t[o-n]=a}t.length=t.length-n}destroy(){this.enabled=!1,this._renderer=null,this._managedRenderables.length=0,this._managedHashes.length=0,this._managedArrays.length=0}_removeRenderable(e){const t=this._managedRenderables.indexOf(e);t>=0&&(e.off("destroyed",this._removeRenderable,this),this._managedRenderables[t]=null)}};lu.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"renderableGC",priority:0},lu.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};let cS=lu;const uu=class N0{constructor(e){this._renderer=e,this.count=0,this.checkCount=0}init(e){e={...N0.defaultOptions,...e},this.checkCountMax=e.textureGCCheckCountMax,this.maxIdle=e.textureGCAMaxIdle??e.textureGCMaxIdle,this.active=e.textureGCActive}postrender(){this._renderer.renderingToScreen&&(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){const e=this._renderer.texture.managedTextures;for(let t=0;t<e.length;t++){const i=e[t];i.autoGarbageCollect&&i.resource&&i._touched>-1&&this.count-i._touched>this.maxIdle&&(i._touched=-1,i.unload())}}destroy(){this._renderer=null}};uu.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"textureGC"},uu.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:60*60,textureGCCheckCountMax:600};let dS=uu;const hu=class $0{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(e){e={...$0.defaultOptions,...e},e.view&&(Y(Me,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new De(0,0,e.width,e.height),this.canvas=e.canvas||Se.get().createCanvas(),this.antialias=!!e.antialias,this.texture=tp(this.canvas,e),this.renderTarget=new Kl({colorTextures:[this.texture],depth:!!e.depth,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.resolution=e.resolution}resize(e,t,i){this.texture.source.resize(e,t,i),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:!!(e!=null&&e.removeView))&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};hu.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"view",priority:0},hu.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let kp=hu;const Up=[iS,Op,au,kp,Ep,dS,Ip,rS,ud,cS,Fp],Dp=[Rp,Df,Mp,bp,zf,Nf,Lf,vp],fS=[...Up,ep,h1,s1,$f,gp,np,jf,cp,hp,Yf,G1,qf,Xf],pS=[...Dp],mS=[kf,xp,_p],Gp=[],zp=[],Lp=[];oe.handleByNamedList(M.WebGLSystem,Gp),oe.handleByNamedList(M.WebGLPipes,zp),oe.handleByNamedList(M.WebGLPipesAdaptor,Lp),oe.add(...fS,...pS,...mS);class gS extends po{constructor(){const e={name:"webgl",type:zt.WEBGL,systems:Gp,renderPipes:zp,renderPipeAdaptors:Lp};super(e)}}const _S=Object.freeze(Object.defineProperty({__proto__:null,WebGLRenderer:gS},Symbol.toStringTag,{value:"Module"}));class Np{constructor(e){this._hash=Object.create(null),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_hash")}contextChange(e){this._gpu=e}getBindGroup(e,t,i){return e._updateKey(),this._hash[e._key]||this._createBindGroup(e,t,i)}_createBindGroup(e,t,i){const n=this._gpu.device,s=t.layout[i],o=[],a=this._renderer;for(const h in s){const c=e.resources[h]??e.resources[s[h]];let d;if(c._resourceType==="uniformGroup"){const f=c;a.ubo.updateUniformGroup(f);const g=f.buffer;d={buffer:a.buffer.getGPUBuffer(g),offset:0,size:g.descriptor.size}}else if(c._resourceType==="buffer"){const f=c;d={buffer:a.buffer.getGPUBuffer(f),offset:0,size:f.descriptor.size}}else if(c._resourceType==="bufferResource"){const f=c;d={buffer:a.buffer.getGPUBuffer(f.buffer),offset:f.offset,size:f.size}}else if(c._resourceType==="textureSampler"){const f=c;d=a.texture.getGpuSampler(f)}else if(c._resourceType==="textureSource"){const f=c;d=a.texture.getGpuSource(f).createView({})}o.push({binding:s[h],resource:d})}const l=a.shader.getProgramData(t).bindGroups[i],u=n.createBindGroup({layout:l,entries:o});return this._hash[e._key]=u,u}destroy(){for(const e of Object.keys(this._hash))this._hash[e]=null;this._hash=null,this._renderer=null}}Np.extension={type:[M.WebGPUSystem],name:"bindGroup"};class $p{constructor(e){this._gpuBuffers=Object.create(null),this._managedBuffers=[],e.renderableGC.addManagedHash(this,"_gpuBuffers")}contextChange(e){this._gpu=e}getGPUBuffer(e){return this._gpuBuffers[e.uid]||this.createGPUBuffer(e)}updateBuffer(e){const t=this._gpuBuffers[e.uid]||this.createGPUBuffer(e),i=e.data;return e._updateID&&i&&(e._updateID=0,this._gpu.device.queue.writeBuffer(t,0,i.buffer,0,(e._updateSize||i.byteLength)+3&-4)),t}destroyAll(){for(const e in this._gpuBuffers)this._gpuBuffers[e].destroy();this._gpuBuffers={}}createGPUBuffer(e){this._gpuBuffers[e.uid]||(e.on("update",this.updateBuffer,this),e.on("change",this.onBufferChange,this),e.on("destroy",this.onBufferDestroy,this),this._managedBuffers.push(e));const t=this._gpu.device.createBuffer(e.descriptor);return e._updateID=0,e.data&&(pl(e.data.buffer,t.getMappedRange()),t.unmap()),this._gpuBuffers[e.uid]=t,t}onBufferChange(e){this._gpuBuffers[e.uid].destroy(),e._updateID=0,this._gpuBuffers[e.uid]=this.createGPUBuffer(e)}onBufferDestroy(e){this._managedBuffers.splice(this._managedBuffers.indexOf(e),1),this._destroyBuffer(e)}destroy(){this._managedBuffers.forEach(e=>this._destroyBuffer(e)),this._managedBuffers=null,this._gpuBuffers=null}_destroyBuffer(e){this._gpuBuffers[e.uid].destroy(),e.off("update",this.updateBuffer,this),e.off("change",this.onBufferChange,this),e.off("destroy",this.onBufferDestroy,this),this._gpuBuffers[e.uid]=null}}$p.extension={type:[M.WebGPUSystem],name:"buffer"};class xS{constructor({minUniformOffsetAlignment:e}){this._minUniformOffsetAlignment=256,this.byteIndex=0,this._minUniformOffsetAlignment=e,this.data=new Float32Array(65535)}clear(){this.byteIndex=0}addEmptyGroup(e){if(e>this._minUniformOffsetAlignment/4)throw new Error(`UniformBufferBatch: array is too large: ${e*4}`);const t=this.byteIndex;let i=t+e*4;if(i=Math.ceil(i/this._minUniformOffsetAlignment)*this._minUniformOffsetAlignment,i>this.data.length*4)throw new Error("UniformBufferBatch: ubo batch got too big");return this.byteIndex=i,t}addGroup(e){const t=this.addEmptyGroup(e.length);for(let i=0;i<e.length;i++)this.data[t/4+i]=e[i];return t}destroy(){this._buffer.destroy(),this._buffer=null,this.data=null}}class Vp{constructor(e){this._colorMaskCache=15,this._renderer=e}setMask(e){this._colorMaskCache!==e&&(this._colorMaskCache=e,this._renderer.pipeline.setColorMask(e))}destroy(){this._renderer=null,this._colorMaskCache=null}}Vp.extension={type:[M.WebGPUSystem],name:"colorMask"};class cu{constructor(e){this._renderer=e}async init(e){return this._initPromise?this._initPromise:(this._initPromise=this._createDeviceAndAdaptor(e).then(t=>{this.gpu=t,this._renderer.runners.contextChange.emit(this.gpu)}),this._initPromise)}contextChange(e){this._renderer.gpu=e}async _createDeviceAndAdaptor(e){const t=await Se.get().getNavigator().gpu.requestAdapter({powerPreference:e.powerPreference,forceFallbackAdapter:e.forceFallbackAdapter}),i=["texture-compression-bc","texture-compression-astc","texture-compression-etc2"].filter(s=>t.features.has(s)),n=await t.requestDevice({requiredFeatures:i});return{adapter:t,device:n}}destroy(){this.gpu=null,this._renderer=null}}cu.extension={type:[M.WebGPUSystem],name:"device"},cu.defaultOptions={powerPreference:void 0,forceFallbackAdapter:!1};class Hp{constructor(e){this._boundBindGroup=Object.create(null),this._boundVertexBuffer=Object.create(null),this._renderer=e}renderStart(){this.commandFinished=new Promise(e=>{this._resolveCommandFinished=e}),this.commandEncoder=this._renderer.gpu.device.createCommandEncoder()}beginRenderPass(e){this.endRenderPass(),this._clearCache(),this.renderPassEncoder=this.commandEncoder.beginRenderPass(e.descriptor)}endRenderPass(){this.renderPassEncoder&&this.renderPassEncoder.end(),this.renderPassEncoder=null}setViewport(e){this.renderPassEncoder.setViewport(e.x,e.y,e.width,e.height,0,1)}setPipelineFromGeometryProgramAndState(e,t,i,n){const s=this._renderer.pipeline.getPipeline(e,t,i,n);this.setPipeline(s)}setPipeline(e){this._boundPipeline!==e&&(this._boundPipeline=e,this.renderPassEncoder.setPipeline(e))}_setVertexBuffer(e,t){this._boundVertexBuffer[e]!==t&&(this._boundVertexBuffer[e]=t,this.renderPassEncoder.setVertexBuffer(e,this._renderer.buffer.updateBuffer(t)))}_setIndexBuffer(e){if(this._boundIndexBuffer===e)return;this._boundIndexBuffer=e;const t=e.data.BYTES_PER_ELEMENT===2?"uint16":"uint32";this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e),t)}resetBindGroup(e){this._boundBindGroup[e]=null}setBindGroup(e,t,i){if(this._boundBindGroup[e]===t)return;this._boundBindGroup[e]=t,t._touch(this._renderer.textureGC.count);const n=this._renderer.bindGroup.getBindGroup(t,i,e);this.renderPassEncoder.setBindGroup(e,n)}setGeometry(e,t){const i=this._renderer.pipeline.getBufferNamesToBind(e,t);for(const n in i)this._setVertexBuffer(n,e.attributes[i[n]].buffer);e.indexBuffer&&this._setIndexBuffer(e.indexBuffer)}_setShaderBindGroups(e,t){for(const i in e.groups){const n=e.groups[i];t||this._syncBindGroup(n),this.setBindGroup(i,n,e.gpuProgram)}}_syncBindGroup(e){for(const t in e.resources){const i=e.resources[t];i.isUniformGroup&&this._renderer.ubo.updateUniformGroup(i)}}draw(e){const{geometry:t,shader:i,state:n,topology:s,size:o,start:a,instanceCount:l,skipSync:u}=e;this.setPipelineFromGeometryProgramAndState(t,i.gpuProgram,n,s),this.setGeometry(t,i.gpuProgram),this._setShaderBindGroups(i,u),t.indexBuffer?this.renderPassEncoder.drawIndexed(o||t.indexBuffer.data.length,l||t.instanceCount,a||0):this.renderPassEncoder.draw(o||t.getSize(),l||t.instanceCount,a||0)}finishRenderPass(){this.renderPassEncoder&&(this.renderPassEncoder.end(),this.renderPassEncoder=null)}postrender(){this.finishRenderPass(),this._gpu.device.queue.submit([this.commandEncoder.finish()]),this._resolveCommandFinished(),this.commandEncoder=null}restoreRenderPass(){const e=this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget,!1,[0,0,0,1]);this.renderPassEncoder=this.commandEncoder.beginRenderPass(e);const t=this._boundPipeline,i={...this._boundVertexBuffer},n=this._boundIndexBuffer,s={...this._boundBindGroup};this._clearCache();const o=this._renderer.renderTarget.viewport;this.renderPassEncoder.setViewport(o.x,o.y,o.width,o.height,0,1),this.setPipeline(t);for(const a in i)this._setVertexBuffer(a,i[a]);for(const a in s)this.setBindGroup(a,s[a],null);this._setIndexBuffer(n)}_clearCache(){for(let e=0;e<16;e++)this._boundBindGroup[e]=null,this._boundVertexBuffer[e]=null;this._boundIndexBuffer=null,this._boundPipeline=null}destroy(){this._renderer=null,this._gpu=null,this._boundBindGroup=null,this._boundVertexBuffer=null,this._boundIndexBuffer=null,this._boundPipeline=null}contextChange(e){this._gpu=e}}Hp.extension={type:[M.WebGPUSystem],name:"encoder",priority:1};class Wp{constructor(e){this._renderTargetStencilState=Object.create(null),this._renderer=e,e.renderTarget.onRenderTargetChange.add(this)}onRenderTargetChange(e){let t=this._renderTargetStencilState[e.uid];t||(t=this._renderTargetStencilState[e.uid]={stencilMode:et.DISABLED,stencilReference:0}),this._activeRenderTarget=e,this.setStencilMode(t.stencilMode,t.stencilReference)}setStencilMode(e,t){const i=this._renderTargetStencilState[this._activeRenderTarget.uid];i.stencilMode=e,i.stencilReference=t;const n=this._renderer;n.pipeline.setStencilMode(e),n.encoder.renderPassEncoder.setStencilReference(t)}destroy(){this._renderer.renderTarget.onRenderTargetChange.remove(this),this._renderer=null,this._activeRenderTarget=null,this._renderTargetStencilState=null}}Wp.extension={type:[M.WebGPUSystem],name:"stencil"};const Oo={i32:{align:4,size:4},u32:{align:4,size:4},f32:{align:4,size:4},f16:{align:2,size:2},"vec2<i32>":{align:8,size:8},"vec2<u32>":{align:8,size:8},"vec2<f32>":{align:8,size:8},"vec2<f16>":{align:4,size:4},"vec3<i32>":{align:16,size:12},"vec3<u32>":{align:16,size:12},"vec3<f32>":{align:16,size:12},"vec3<f16>":{align:8,size:6},"vec4<i32>":{align:16,size:16},"vec4<u32>":{align:16,size:16},"vec4<f32>":{align:16,size:16},"vec4<f16>":{align:8,size:8},"mat2x2<f32>":{align:8,size:16},"mat2x2<f16>":{align:4,size:8},"mat3x2<f32>":{align:8,size:24},"mat3x2<f16>":{align:4,size:12},"mat4x2<f32>":{align:8,size:32},"mat4x2<f16>":{align:4,size:16},"mat2x3<f32>":{align:16,size:32},"mat2x3<f16>":{align:8,size:16},"mat3x3<f32>":{align:16,size:48},"mat3x3<f16>":{align:8,size:24},"mat4x3<f32>":{align:16,size:64},"mat4x3<f16>":{align:8,size:32},"mat2x4<f32>":{align:16,size:32},"mat2x4<f16>":{align:8,size:16},"mat3x4<f32>":{align:16,size:48},"mat3x4<f16>":{align:8,size:24},"mat4x4<f32>":{align:16,size:64},"mat4x4<f16>":{align:8,size:32}};function vS(r){const e=r.map(i=>({data:i,offset:0,size:0}));let t=0;for(let i=0;i<e.length;i++){const n=e[i];let s=Oo[n.data.type].size;const o=Oo[n.data.type].align;if(!Oo[n.data.type])throw new Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${n.data.type}`);n.data.size>1&&(s=Math.max(s,o)*n.data.size),t=Math.ceil(t/o)*o,n.size=s,n.offset=t,t+=s}return t=Math.ceil(t/16)*16,{uboElements:e,size:t}}function yS(r,e){const{size:t,align:i}=Oo[r.data.type],n=(i-t)/4;return`
         v = uv.${r.data.name};
         ${e!==0?`offset += ${e};`:""}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${r.data.size*(t/4)}; i++)
         {
             for(var j = 0; j < ${t/4}; j++)
             {
                 data[arrayOffset++] = v[t++];
             }
             ${n!==0?`arrayOffset += ${n};`:""}
         }
     `}function bS(r){return Qf(r,"uboWgsl",yS,f1)}class jp extends Kf{constructor(){super({createUboElements:vS,generateUboSync:bS})}}jp.extension={type:[M.WebGPUSystem],name:"ubo"};const Ji=128;class Xp{constructor(e){this._bindGroupHash=Object.create(null),this._buffers=[],this._bindGroups=[],this._bufferResources=[],this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_bindGroupHash"),this._batchBuffer=new xS({minUniformOffsetAlignment:Ji});const t=256/Ji;for(let i=0;i<t;i++){let n=Ae.UNIFORM|Ae.COPY_DST;i===0&&(n|=Ae.COPY_SRC),this._buffers.push(new Nt({data:this._batchBuffer.data,usage:n}))}}renderEnd(){this._uploadBindGroups(),this._resetBindGroups()}_resetBindGroups(){for(const e in this._bindGroupHash)this._bindGroupHash[e]=null;this._batchBuffer.clear()}getUniformBindGroup(e,t){if(!t&&this._bindGroupHash[e.uid])return this._bindGroupHash[e.uid];this._renderer.ubo.ensureUniformGroup(e);const i=e.buffer.data,n=this._batchBuffer.addEmptyGroup(i.length);return this._renderer.ubo.syncUniformGroup(e,this._batchBuffer.data,n/4),this._bindGroupHash[e.uid]=this._getBindGroup(n/Ji),this._bindGroupHash[e.uid]}getUboResource(e){this._renderer.ubo.updateUniformGroup(e);const t=e.buffer.data,i=this._batchBuffer.addGroup(t);return this._getBufferResource(i/Ji)}getArrayBindGroup(e){const t=this._batchBuffer.addGroup(e);return this._getBindGroup(t/Ji)}getArrayBufferResource(e){const i=this._batchBuffer.addGroup(e)/Ji;return this._getBufferResource(i)}_getBufferResource(e){if(!this._bufferResources[e]){const t=this._buffers[e%2];this._bufferResources[e]=new Zl({buffer:t,offset:(e/2|0)*256,size:Ji})}return this._bufferResources[e]}_getBindGroup(e){if(!this._bindGroups[e]){const t=new Di({0:this._getBufferResource(e)});this._bindGroups[e]=t}return this._bindGroups[e]}_uploadBindGroups(){const e=this._renderer.buffer,t=this._buffers[0];t.update(this._batchBuffer.byteIndex),e.updateBuffer(t);const i=this._renderer.gpu.device.createCommandEncoder();for(let n=1;n<this._buffers.length;n++){const s=this._buffers[n];i.copyBufferToBuffer(e.getGPUBuffer(t),Ji,e.getGPUBuffer(s),0,this._batchBuffer.byteIndex)}this._renderer.gpu.device.queue.submit([i.finish()])}destroy(){for(let e=0;e<this._bindGroups.length;e++)this._bindGroups[e].destroy();this._bindGroups=null,this._bindGroupHash=null;for(let e=0;e<this._buffers.length;e++)this._buffers[e].destroy();this._buffers=null;for(let e=0;e<this._bufferResources.length;e++)this._bufferResources[e].destroy();this._bufferResources=null,this._batchBuffer.destroy(),this._bindGroupHash=null,this._renderer=null}}Xp.extension={type:[M.WebGPUPipes],name:"uniformBatch"};const SS={"point-list":0,"line-list":1,"line-strip":2,"triangle-list":3,"triangle-strip":4};function wS(r,e,t,i,n){return r<<24|e<<16|t<<10|i<<5|n}function TS(r,e,t,i){return t<<6|r<<3|i<<1|e}class Yp{constructor(e){this._moduleCache=Object.create(null),this._bufferLayoutsCache=Object.create(null),this._bindingNamesCache=Object.create(null),this._pipeCache=Object.create(null),this._pipeStateCaches=Object.create(null),this._colorMask=15,this._multisampleCount=1,this._renderer=e}contextChange(e){this._gpu=e,this.setStencilMode(et.DISABLED),this._updatePipeHash()}setMultisampleCount(e){this._multisampleCount!==e&&(this._multisampleCount=e,this._updatePipeHash())}setRenderTarget(e){this._multisampleCount=e.msaaSamples,this._depthStencilAttachment=e.descriptor.depthStencilAttachment?1:0,this._updatePipeHash()}setColorMask(e){this._colorMask!==e&&(this._colorMask=e,this._updatePipeHash())}setStencilMode(e){this._stencilMode!==e&&(this._stencilMode=e,this._stencilState=Qi[e],this._updatePipeHash())}setPipeline(e,t,i,n){const s=this.getPipeline(e,t,i);n.setPipeline(s)}getPipeline(e,t,i,n){e._layoutKey||(Vf(e,t.attributeData),this._generateBufferKey(e)),n=n||e.topology;const s=wS(e._layoutKey,t._layoutKey,i.data,i._blendModeId,SS[n]);return this._pipeCache[s]?this._pipeCache[s]:(this._pipeCache[s]=this._createPipeline(e,t,i,n),this._pipeCache[s])}_createPipeline(e,t,i,n){const s=this._gpu.device,o=this._createVertexBufferLayouts(e,t),a=this._renderer.state.getColorTargets(i);a[0].writeMask=this._stencilMode===et.RENDERING_MASK_ADD?0:this._colorMask;const l=this._renderer.shader.getProgramData(t).pipeline,u={vertex:{module:this._getModule(t.vertex.source),entryPoint:t.vertex.entryPoint,buffers:o},fragment:{module:this._getModule(t.fragment.source),entryPoint:t.fragment.entryPoint,targets:a},primitive:{topology:n,cullMode:i.cullMode},layout:l,multisample:{count:this._multisampleCount},label:"PIXI Pipeline"};return this._depthStencilAttachment&&(u.depthStencil={...this._stencilState,format:"depth24plus-stencil8",depthWriteEnabled:i.depthTest,depthCompare:i.depthTest?"less":"always"}),s.createRenderPipeline(u)}_getModule(e){return this._moduleCache[e]||this._createModule(e)}_createModule(e){const t=this._gpu.device;return this._moduleCache[e]=t.createShaderModule({code:e}),this._moduleCache[e]}_generateBufferKey(e){const t=[];let i=0;const n=Object.keys(e.attributes).sort();for(let o=0;o<n.length;o++){const a=e.attributes[n[o]];t[i++]=a.offset,t[i++]=a.format,t[i++]=a.stride,t[i++]=a.instance}const s=t.join("|");return e._layoutKey=Nn(s,"geometry"),e._layoutKey}_generateAttributeLocationsKey(e){const t=[];let i=0;const n=Object.keys(e.attributeData).sort();for(let o=0;o<n.length;o++){const a=e.attributeData[n[o]];t[i++]=a.location}const s=t.join("|");return e._attributeLocationsKey=Nn(s,"programAttributes"),e._attributeLocationsKey}getBufferNamesToBind(e,t){const i=e._layoutKey<<16|t._attributeLocationsKey;if(this._bindingNamesCache[i])return this._bindingNamesCache[i];const n=this._createVertexBufferLayouts(e,t),s=Object.create(null),o=t.attributeData;for(let a=0;a<n.length;a++)for(const l in o)if(o[l].location===a){s[a]=l;break}return this._bindingNamesCache[i]=s,s}_createVertexBufferLayouts(e,t){t._attributeLocationsKey||this._generateAttributeLocationsKey(t);const i=e._layoutKey<<16|t._attributeLocationsKey;if(this._bufferLayoutsCache[i])return this._bufferLayoutsCache[i];const n=[];return e.buffers.forEach(s=>{const o={arrayStride:0,stepMode:"vertex",attributes:[]},a=o.attributes;for(const l in t.attributeData){const u=e.attributes[l];(u.divisor??1)!==1&&le(`Attribute ${l} has an invalid divisor value of '${u.divisor}'. WebGPU only supports a divisor value of 1`),u.buffer===s&&(o.arrayStride=u.stride,o.stepMode=u.instance?"instance":"vertex",a.push({shaderLocation:t.attributeData[l].location,offset:u.offset,format:u.format}))}a.length&&n.push(o)}),this._bufferLayoutsCache[i]=n,n}_updatePipeHash(){const e=TS(this._stencilMode,this._multisampleCount,this._colorMask,this._depthStencilAttachment);this._pipeStateCaches[e]||(this._pipeStateCaches[e]=Object.create(null)),this._pipeCache=this._pipeStateCaches[e]}destroy(){this._renderer=null,this._bufferLayoutsCache=null}}Yp.extension={type:[M.WebGPUSystem],name:"pipeline"};class CS{constructor(){this.contexts=[],this.msaaTextures=[],this.msaaSamples=1}}class PS{init(e,t){this._renderer=e,this._renderTargetSystem=t}copyToTexture(e,t,i,n,s){const o=this._renderer,a=this._getGpuColorTexture(e),l=o.texture.getGpuSource(t.source);return o.encoder.commandEncoder.copyTextureToTexture({texture:a,origin:i},{texture:l,origin:s},n),t}startRenderPass(e,t=!0,i,n){const o=this._renderTargetSystem.getGpuRenderTarget(e),a=this.getDescriptor(e,t,i);o.descriptor=a,this._renderer.pipeline.setRenderTarget(o),this._renderer.encoder.beginRenderPass(o),this._renderer.encoder.setViewport(n)}finishRenderPass(){this._renderer.encoder.endRenderPass()}_getGpuColorTexture(e){const t=this._renderTargetSystem.getGpuRenderTarget(e);return t.contexts[0]?t.contexts[0].getCurrentTexture():this._renderer.texture.getGpuSource(e.colorTextures[0].source)}getDescriptor(e,t,i){typeof t=="boolean"&&(t=t?Lt.ALL:Lt.NONE);const n=this._renderTargetSystem,s=n.getGpuRenderTarget(e),o=e.colorTextures.map((u,h)=>{const c=s.contexts[h];let d,f;c?d=c.getCurrentTexture().createView():d=this._renderer.texture.getGpuSource(u).createView({mipLevelCount:1}),s.msaaTextures[h]&&(f=d,d=this._renderer.texture.getTextureView(s.msaaTextures[h]));const g=t&Lt.COLOR?"clear":"load";return i??(i=n.defaultClearColor),{view:d,resolveTarget:f,clearValue:i,storeOp:"store",loadOp:g}});let a;if((e.stencil||e.depth)&&!e.depthStencilTexture&&(e.ensureDepthStencilTexture(),e.depthStencilTexture.source.sampleCount=s.msaa?4:1),e.depthStencilTexture){const u=t&Lt.STENCIL?"clear":"load",h=t&Lt.DEPTH?"clear":"load";a={view:this._renderer.texture.getGpuSource(e.depthStencilTexture.source).createView(),stencilStoreOp:"store",stencilLoadOp:u,depthClearValue:1,depthLoadOp:h,depthStoreOp:"store"}}return{colorAttachments:o,depthStencilAttachment:a}}clear(e,t=!0,i,n){if(!t)return;const{gpu:s,encoder:o}=this._renderer,a=s.device;if(o.commandEncoder===null){const u=a.createCommandEncoder(),h=this.getDescriptor(e,t,i),c=u.beginRenderPass(h);c.setViewport(n.x,n.y,n.width,n.height,0,1),c.end();const d=u.finish();a.queue.submit([d])}else this.startRenderPass(e,t,i,n)}initGpuRenderTarget(e){e.isRoot=!0;const t=new CS;return e.colorTextures.forEach((i,n)=>{if(br.test(i.resource)){const s=i.resource.getContext("webgpu"),o=i.transparent?"premultiplied":"opaque";try{s.configure({device:this._renderer.gpu.device,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,format:"bgra8unorm",alphaMode:o})}catch(a){console.error(a)}t.contexts[n]=s}if(t.msaa=i.source.antialias,i.source.antialias){const s=new st({width:0,height:0,sampleCount:4});t.msaaTextures[n]=s}}),t.msaa&&(t.msaaSamples=4,e.depthStencilTexture&&(e.depthStencilTexture.source.sampleCount=4)),t}destroyGpuRenderTarget(e){e.contexts.forEach(t=>{t.unconfigure()}),e.msaaTextures.forEach(t=>{t.destroy()}),e.msaaTextures.length=0,e.contexts.length=0}ensureDepthStencilTexture(e){const t=this._renderTargetSystem.getGpuRenderTarget(e);e.depthStencilTexture&&t.msaa&&(e.depthStencilTexture.source.sampleCount=4)}resizeGpuRenderTarget(e){const t=this._renderTargetSystem.getGpuRenderTarget(e);t.width=e.width,t.height=e.height,t.msaa&&e.colorTextures.forEach((i,n)=>{const s=t.msaaTextures[n];s==null||s.resize(i.source.width,i.source.height,i.source._resolution)})}}class qp extends rp{constructor(e){super(e),this.adaptor=new PS,this.adaptor.init(e,this)}}qp.extension={type:[M.WebGPUSystem],name:"renderTarget"};class Kp{constructor(){this._gpuProgramData=Object.create(null)}contextChange(e){this._gpu=e,this.maxTextures=e.device.limits.maxSampledTexturesPerShaderStage}getProgramData(e){return this._gpuProgramData[e._layoutKey]||this._createGPUProgramData(e)}_createGPUProgramData(e){const t=this._gpu.device,i=e.gpuLayout.map(s=>t.createBindGroupLayout({entries:s})),n={bindGroupLayouts:i};return this._gpuProgramData[e._layoutKey]={bindGroups:i,pipeline:t.createPipelineLayout(n)},this._gpuProgramData[e._layoutKey]}destroy(){this._gpu=null,this._gpuProgramData=null}}Kp.extension={type:[M.WebGPUSystem],name:"shader"};const Rt={};Rt.normal={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}},Rt.add={alpha:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one",operation:"add"}},Rt.multiply={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"dst",dstFactor:"one-minus-src-alpha",operation:"add"}},Rt.screen={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}},Rt.overlay={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}},Rt.none={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"zero",operation:"add"}},Rt["normal-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"}},Rt["add-npm"]={alpha:{srcFactor:"one",dstFactor:"one",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"}},Rt["screen-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src",operation:"add"}},Rt.erase={alpha:{srcFactor:"zero",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"one-minus-src",operation:"add"}},Rt.min={alpha:{srcFactor:"one",dstFactor:"one",operation:"min"},color:{srcFactor:"one",dstFactor:"one",operation:"min"}},Rt.max={alpha:{srcFactor:"one",dstFactor:"one",operation:"max"},color:{srcFactor:"one",dstFactor:"one",operation:"max"}};class Zp{constructor(){this.defaultState=new ai,this.defaultState.blend=!0}contextChange(e){this.gpu=e}getColorTargets(e){return[{format:"bgra8unorm",writeMask:0,blend:Rt[e.blendMode]||Rt.normal}]}destroy(){this.gpu=null}}Zp.extension={type:[M.WebGPUSystem],name:"state"};const AS={type:"image",upload(r,e,t){const i=r.resource,n=(r.pixelWidth|0)*(r.pixelHeight|0),s=i.byteLength/n;t.device.queue.writeTexture({texture:e},i,{offset:0,rowsPerImage:r.pixelHeight,bytesPerRow:r.pixelHeight*s},{width:r.pixelWidth,height:r.pixelHeight,depthOrArrayLayers:1})}},Qp={"bc1-rgba-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"bc2-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc3-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc7-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"etc1-rgb-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"etc2-rgba8unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"astc-4x4-unorm":{blockBytes:16,blockWidth:4,blockHeight:4}},ES={blockBytes:4,blockWidth:1,blockHeight:1},MS={type:"compressed",upload(r,e,t){let i=r.pixelWidth,n=r.pixelHeight;const s=Qp[r.format]||ES;for(let o=0;o<r.resource.length;o++){const a=r.resource[o],l=Math.ceil(i/s.blockWidth)*s.blockBytes;t.device.queue.writeTexture({texture:e,mipLevel:o},a,{offset:0,bytesPerRow:l},{width:Math.ceil(i/s.blockWidth)*s.blockWidth,height:Math.ceil(n/s.blockHeight)*s.blockHeight,depthOrArrayLayers:1}),i=Math.max(i>>1,1),n=Math.max(n>>1,1)}}},Jp={type:"image",upload(r,e,t){const i=r.resource;if(!i)return;const n=Math.min(e.width,r.resourceWidth||r.pixelWidth),s=Math.min(e.height,r.resourceHeight||r.pixelHeight),o=r.alphaMode==="premultiply-alpha-on-upload";t.device.queue.copyExternalImageToTexture({source:i},{texture:e,premultipliedAlpha:o},{width:n,height:s})}},RS={type:"video",upload(r,e,t){Jp.upload(r,e,t)}};class IS{constructor(e){this.device=e,this.sampler=e.createSampler({minFilter:"linear"}),this.pipelines={}}_getMipmapPipeline(e){let t=this.pipelines[e];return t||(this.mipmapShaderModule||(this.mipmapShaderModule=this.device.createShaderModule({code:`
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `})),t=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.mipmapShaderModule,entryPoint:"vertexMain"},fragment:{module:this.mipmapShaderModule,entryPoint:"fragmentMain",targets:[{format:e}]}}),this.pipelines[e]=t),t}generateMipmap(e){const t=this._getMipmapPipeline(e.format);if(e.dimension==="3d"||e.dimension==="1d")throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");let i=e;const n=e.depthOrArrayLayers||1,s=e.usage&GPUTextureUsage.RENDER_ATTACHMENT;if(!s){const l={size:{width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:n},format:e.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,mipLevelCount:e.mipLevelCount-1};i=this.device.createTexture(l)}const o=this.device.createCommandEncoder({}),a=t.getBindGroupLayout(0);for(let l=0;l<n;++l){let u=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:"2d",baseArrayLayer:l,arrayLayerCount:1}),h=s?1:0;for(let c=1;c<e.mipLevelCount;++c){const d=i.createView({baseMipLevel:h++,mipLevelCount:1,dimension:"2d",baseArrayLayer:l,arrayLayerCount:1}),f=o.beginRenderPass({colorAttachments:[{view:d,storeOp:"store",loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0}}]}),g=this.device.createBindGroup({layout:a,entries:[{binding:0,resource:this.sampler},{binding:1,resource:u}]});f.setPipeline(t),f.setBindGroup(0,g),f.draw(3,1,0,0),f.end(),u=d}}if(!s){const l={width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:n};for(let u=1;u<e.mipLevelCount;++u)o.copyTextureToTexture({texture:i,mipLevel:u-1},{texture:e,mipLevel:u},l),l.width=Math.ceil(l.width/2),l.height=Math.ceil(l.height/2)}return this.device.queue.submit([o.finish()]),s||i.destroy(),e}}class em{constructor(e){this.managedTextures=[],this._gpuSources=Object.create(null),this._gpuSamplers=Object.create(null),this._bindGroupHash=Object.create(null),this._textureViewHash=Object.create(null),this._uploads={image:Jp,buffer:AS,video:RS,compressed:MS},this._renderer=e,e.renderableGC.addManagedHash(this,"_gpuSources"),e.renderableGC.addManagedHash(this,"_gpuSamplers"),e.renderableGC.addManagedHash(this,"_bindGroupHash"),e.renderableGC.addManagedHash(this,"_textureViewHash")}contextChange(e){this._gpu=e}initSource(e){if(e.autoGenerateMipmaps){const l=Math.max(e.pixelWidth,e.pixelHeight);e.mipLevelCount=Math.floor(Math.log2(l))+1}let t=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST;e.uploadMethodId!=="compressed"&&(t|=GPUTextureUsage.RENDER_ATTACHMENT,t|=GPUTextureUsage.COPY_SRC);const i=Qp[e.format]||{blockWidth:1,blockHeight:1},n=Math.ceil(e.pixelWidth/i.blockWidth)*i.blockWidth,s=Math.ceil(e.pixelHeight/i.blockHeight)*i.blockHeight,o={label:e.label,size:{width:n,height:s},format:e.format,sampleCount:e.sampleCount,mipLevelCount:e.mipLevelCount,dimension:e.dimension,usage:t},a=this._gpu.device.createTexture(o);return this._gpuSources[e.uid]=a,this.managedTextures.includes(e)||(e.on("update",this.onSourceUpdate,this),e.on("resize",this.onSourceResize,this),e.on("destroy",this.onSourceDestroy,this),e.on("unload",this.onSourceUnload,this),e.on("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.push(e)),this.onSourceUpdate(e),a}onSourceUpdate(e){const t=this.getGpuSource(e);t&&(this._uploads[e.uploadMethodId]&&this._uploads[e.uploadMethodId].upload(e,t,this._gpu),e.autoGenerateMipmaps&&e.mipLevelCount>1&&this.onUpdateMipmaps(e))}onSourceUnload(e){const t=this._gpuSources[e.uid];t&&(this._gpuSources[e.uid]=null,t.destroy())}onUpdateMipmaps(e){this._mipmapGenerator||(this._mipmapGenerator=new IS(this._gpu.device));const t=this.getGpuSource(e);this._mipmapGenerator.generateMipmap(t)}onSourceDestroy(e){e.off("update",this.onSourceUpdate,this),e.off("unload",this.onSourceUnload,this),e.off("destroy",this.onSourceDestroy,this),e.off("resize",this.onSourceResize,this),e.off("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.splice(this.managedTextures.indexOf(e),1),this.onSourceUnload(e)}onSourceResize(e){const t=this._gpuSources[e.uid];t?(t.width!==e.pixelWidth||t.height!==e.pixelHeight)&&(this._textureViewHash[e.uid]=null,this._bindGroupHash[e.uid]=null,this.onSourceUnload(e),this.initSource(e)):this.initSource(e)}_initSampler(e){return this._gpuSamplers[e._resourceId]=this._gpu.device.createSampler(e),this._gpuSamplers[e._resourceId]}getGpuSampler(e){return this._gpuSamplers[e._resourceId]||this._initSampler(e)}getGpuSource(e){return this._gpuSources[e.uid]||this.initSource(e)}getTextureBindGroup(e){return this._bindGroupHash[e.uid]??this._createTextureBindGroup(e)}_createTextureBindGroup(e){const t=e.source;return this._bindGroupHash[e.uid]=new Di({0:t,1:t.style,2:new gt({uTextureMatrix:{type:"mat3x3<f32>",value:e.textureMatrix.mapCoord}})}),this._bindGroupHash[e.uid]}getTextureView(e){const t=e.source;return this._textureViewHash[t.uid]??this._createTextureView(t)}_createTextureView(e){return this._textureViewHash[e.uid]=this.getGpuSource(e).createView(),this._textureViewHash[e.uid]}generateCanvas(e){const t=this._renderer,i=t.gpu.device.createCommandEncoder(),n=Se.get().createCanvas();n.width=e.source.pixelWidth,n.height=e.source.pixelHeight;const s=n.getContext("webgpu");return s.configure({device:t.gpu.device,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC,format:Se.get().getNavigator().gpu.getPreferredCanvasFormat(),alphaMode:"premultiplied"}),i.copyTextureToTexture({texture:t.texture.getGpuSource(e.source),origin:{x:0,y:0}},{texture:s.getCurrentTexture()},{width:n.width,height:n.height}),t.gpu.device.queue.submit([i.finish()]),n}getPixels(e){const t=this.generateCanvas(e),i=Gi.getOptimalCanvasAndContext(t.width,t.height),n=i.context;n.drawImage(t,0,0);const{width:s,height:o}=t,a=n.getImageData(0,0,s,o),l=new Uint8ClampedArray(a.data.buffer);return Gi.returnCanvasAndContext(i),{pixels:l,width:s,height:o}}destroy(){this.managedTextures.slice().forEach(e=>this.onSourceDestroy(e)),this.managedTextures=null;for(const e of Object.keys(this._bindGroupHash)){const t=Number(e),i=this._bindGroupHash[t];i==null||i.destroy(),this._bindGroupHash[t]=null}this._gpu=null,this._mipmapGenerator=null,this._gpuSources=null,this._bindGroupHash=null,this._textureViewHash=null,this._gpuSamplers=null}}em.extension={type:[M.WebGPUSystem],name:"texture"};class tm{init(){const e=new gt({uTransformMatrix:{value:new se,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),t=qn({name:"graphics",bits:[_l,yl(on()),Z2,Zn]});this.shader=new Zt({gpuProgram:t,resources:{localUniforms:e}})}execute(e,t){const i=t.context,n=i.customShader||this.shader,s=e.renderer,o=s.graphicsContext,{batcher:a,instructions:l}=o.getContextRenderData(i),u=s.encoder;u.setPipelineFromGeometryProgramAndState(a.geometry,n.gpuProgram,e.state),u.setGeometry(a.geometry,n.gpuProgram);const h=s.globalUniforms.bindGroup;u.setBindGroup(0,h,n.gpuProgram);const c=s.renderPipes.uniformBatch.getUniformBindGroup(n.resources.localUniforms,!0);u.setBindGroup(2,c,n.gpuProgram);const d=l.instructions;for(let f=0;f<l.instructionSize;f++){const g=d[f];if(n.groups[1]=g.bindGroup,!g.gpuBindGroup){const m=g.textures;g.bindGroup=dl(m.textures,m.count),g.gpuBindGroup=s.bindGroup.getBindGroup(g.bindGroup,n.gpuProgram,1)}u.setBindGroup(1,g.bindGroup,n.gpuProgram),u.renderPassEncoder.drawIndexed(g.size,1,g.start)}}destroy(){this.shader.destroy(!0),this.shader=null}}tm.extension={type:[M.WebGPUPipesAdaptor],name:"graphics"};class im{init(){const e=qn({name:"mesh",bits:[ss,Q2,Zn]});this._shader=new Zt({gpuProgram:e,resources:{uTexture:X.EMPTY._source,uSampler:X.EMPTY._source.style,textureUniforms:{uTextureMatrix:{type:"mat3x3<f32>",value:new se}}}})}execute(e,t){const i=e.renderer;let n=t._shader;if(!n)n=this._shader,n.groups[2]=i.texture.getTextureBindGroup(t.texture);else if(!n.gpuProgram){le("Mesh shader has no gpuProgram",t.shader);return}const s=n.gpuProgram;if(s.autoAssignGlobalUniforms&&(n.groups[0]=i.globalUniforms.bindGroup),s.autoAssignLocalUniforms){const o=e.localUniforms;n.groups[1]=i.renderPipes.uniformBatch.getUniformBindGroup(o,!0)}i.encoder.draw({geometry:t._geometry,shader:n,state:t.state})}destroy(){this._shader.destroy(!0),this._shader=null}}im.extension={type:[M.WebGPUPipesAdaptor],name:"mesh"};const OS=[...Up,jp,Hp,cu,$p,em,qp,Kp,Zp,Yp,Vp,Wp,Np],FS=[...Dp,Xp],BS=[Uf,im,tm],rm=[],nm=[],sm=[];oe.handleByNamedList(M.WebGPUSystem,rm),oe.handleByNamedList(M.WebGPUPipes,nm),oe.handleByNamedList(M.WebGPUPipesAdaptor,sm),oe.add(...OS,...FS,...BS);class kS extends po{constructor(){const e={name:"webgpu",type:zt.WEBGPU,systems:rm,renderPipes:nm,renderPipeAdaptors:sm};super(e)}}const US=Object.freeze(Object.defineProperty({__proto__:null,WebGPURenderer:kS},Symbol.toStringTag,{value:"Module"}));class om{constructor(e,t){this.state=ai.for2d(),this._graphicsBatchesHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.renderer=e,this._adaptor=t,this._adaptor.init(),this.renderer.renderableGC.addManagedHash(this,"_graphicsBatchesHash")}validateRenderable(e){const t=e.context,i=!!this._graphicsBatchesHash[e.uid],n=this.renderer.graphicsContext.updateGpuContext(t);return!!(n.isBatchable||i!==n.isBatchable)}addRenderable(e,t){const i=this.renderer.graphicsContext.updateGpuContext(e.context);e.didViewUpdate&&this._rebuild(e),i.isBatchable?this._addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add(e))}updateRenderable(e){const t=this._graphicsBatchesHash[e.uid];if(t)for(let i=0;i<t.length;i++){const n=t[i];n._batcher.updateElement(n)}}destroyRenderable(e){this._graphicsBatchesHash[e.uid]&&this._removeBatchForRenderable(e.uid),e.off("destroyed",this._destroyRenderableBound)}execute(e){if(!e.isRenderable)return;const t=this.renderer,i=e.context;if(!t.graphicsContext.getGpuContext(i).batches.length)return;const s=i.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;const o=s.resources.localUniforms.uniforms;o.uTransformMatrix=e.groupTransform,o.uRound=t._roundPixels|e._roundPixels,ls(e.groupColorAlpha,o.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){const t=!!this._graphicsBatchesHash[e.uid],i=this.renderer.graphicsContext.updateGpuContext(e.context);t&&this._removeBatchForRenderable(e.uid),i.isBatchable&&this._initBatchesForRenderable(e),e.batched=i.isBatchable}_addToBatcher(e,t){const i=this.renderer.renderPipes.batch,n=this._getBatchesForRenderable(e);for(let s=0;s<n.length;s++){const o=n[s];i.addToBatch(o,t)}}_getBatchesForRenderable(e){return this._graphicsBatchesHash[e.uid]||this._initBatchesForRenderable(e)}_initBatchesForRenderable(e){const t=e.context,i=this.renderer.graphicsContext.getGpuContext(t),n=this.renderer._roundPixels|e._roundPixels,s=i.batches.map(o=>{const a=Re.get(Cl);return o.copyTo(a),a.renderable=e,a.roundPixels=n,a});return this._graphicsBatchesHash[e.uid]===void 0&&e.on("destroyed",this._destroyRenderableBound),this._graphicsBatchesHash[e.uid]=s,s}_removeBatchForRenderable(e){this._graphicsBatchesHash[e].forEach(t=>{Re.return(t)}),this._graphicsBatchesHash[e]=null}destroy(){this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null;for(const e in this._graphicsBatchesHash)this._removeBatchForRenderable(e);this._graphicsBatchesHash=null}}om.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"graphics"};const am=class V0 extends Vl{constructor(...e){super({});let t=e[0]??{};typeof t=="number"&&(Y(Me,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),t={width:t,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(t)}build(e){e={...V0.defaultOptions,...e},this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;const t=this.verticesX*this.verticesY,i=[],n=[],s=[],o=this.verticesX-1,a=this.verticesY-1,l=this.width/o,u=this.height/a;for(let c=0;c<t;c++){const d=c%this.verticesX,f=c/this.verticesX|0;i.push(d*l,f*u),n.push(d/o,f/a)}const h=o*a;for(let c=0;c<h;c++){const d=c%o,f=c/o|0,g=f*this.verticesX+d,m=f*this.verticesX+d+1,_=(f+1)*this.verticesX+d,y=(f+1)*this.verticesX+d+1;s.push(g,m,_,m,y,_)}this.buffers[0].data=new Float32Array(i),this.buffers[1].data=new Float32Array(n),this.indexBuffer.data=new Uint32Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};am.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let DS=am;class du{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}get uvs(){const t=this.geometry.getBuffer("aUV"),i=t.data;let n=i;const s=this.texture.textureMatrix;return s.isSimple||(n=this._transformedUvs,(this._textureMatrixUpdateId!==s._updateID||this._uvUpdateId!==t._updateID)&&((!n||n.length<i.length)&&(n=this._transformedUvs=new Float32Array(i.length)),this._textureMatrixUpdateId=s._updateID,this._uvUpdateId=t._updateID,s.multiplyUvs(i,n))),n}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}class lm{constructor(e,t){this.localUniforms=new gt({uTransformMatrix:{value:new se,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new Di({0:this.localUniforms}),this._meshDataHash=Object.create(null),this._gpuBatchableMeshHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.renderer=e,this._adaptor=t,this._adaptor.init(),e.renderableGC.addManagedHash(this,"_gpuBatchableMeshHash"),e.renderableGC.addManagedHash(this,"_meshDataHash")}validateRenderable(e){const t=this._getMeshData(e),i=t.batched,n=e.batched;if(t.batched=n,i!==n)return!0;if(n){const s=e._geometry;if(s.indices.length!==t.indexSize||s.positions.length!==t.vertexSize)return t.indexSize=s.indices.length,t.vertexSize=s.positions.length,!0;const o=this._getBatchableMesh(e),a=e.texture;if(o.texture._source!==a._source&&o.texture._source!==a._source)return!o._batcher.checkAndUpdateTexture(o,a)}return!1}addRenderable(e,t){const i=this.renderer.renderPipes.batch,{batched:n}=this._getMeshData(e);if(n){const s=this._getBatchableMesh(e);s.texture=e._texture,s.geometry=e._geometry,i.addToBatch(s,t)}else i.break(t),t.add(e)}updateRenderable(e){if(e.batched){const t=this._gpuBatchableMeshHash[e.uid];t.texture=e._texture,t.geometry=e._geometry,t._batcher.updateElement(t)}}destroyRenderable(e){this._meshDataHash[e.uid]=null;const t=this._gpuBatchableMeshHash[e.uid];t&&(Re.return(t),this._gpuBatchableMeshHash[e.uid]=null),e.off("destroyed",this._destroyRenderableBound)}execute(e){if(!e.isRenderable)return;e.state.blendMode=jn(e.groupBlendMode,e.texture._source);const t=this.localUniforms;t.uniforms.uTransformMatrix=e.groupTransform,t.uniforms.uRound=this.renderer._roundPixels|e._roundPixels,t.update(),ls(e.groupColorAlpha,t.uniforms.uColor,0),this._adaptor.execute(this,e)}_getMeshData(e){return this._meshDataHash[e.uid]||this._initMeshData(e)}_initMeshData(e){var t,i;return this._meshDataHash[e.uid]={batched:e.batched,indexSize:(t=e._geometry.indices)==null?void 0:t.length,vertexSize:(i=e._geometry.positions)==null?void 0:i.length},e.on("destroyed",this._destroyRenderableBound),this._meshDataHash[e.uid]}_getBatchableMesh(e){return this._gpuBatchableMeshHash[e.uid]||this._initBatchableMesh(e)}_initBatchableMesh(e){const t=Re.get(du);return t.renderable=e,t.texture=e._texture,t.transform=e.groupTransform,t.roundPixels=this.renderer._roundPixels|e._roundPixels,this._gpuBatchableMeshHash[e.uid]=t,t}destroy(){for(const e in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[e]&&Re.return(this._gpuBatchableMeshHash[e]);this._gpuBatchableMeshHash=null,this._meshDataHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}}lm.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"mesh"};class GS{execute(e,t){const i=e.state,n=e.renderer,s=t.shader||e.defaultShader;s.resources.uTexture=t.texture._source,s.resources.uniforms=e.localUniforms;const o=n.gl,a=e.getBuffers(t);n.shader.bind(s),n.state.set(i),n.geometry.bind(a.geometry,s.glProgram);const u=a.geometry.indexBuffer.data.BYTES_PER_ELEMENT===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;o.drawElements(o.TRIANGLES,t.particleChildren.length*6,u,0)}}class zS{execute(e,t){const i=e.renderer,n=t.shader||e.defaultShader;n.groups[0]=i.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0),n.groups[1]=i.texture.getTextureBindGroup(t.texture);const s=e.state,o=e.getBuffers(t);i.encoder.draw({geometry:o.geometry,shader:t.shader||e.defaultShader,state:s,size:t.particleChildren.length*6})}}function um(r,e=null){const t=r*6;if(t>65535?e=e||new Uint32Array(t):e=e||new Uint16Array(t),e.length!==t)throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${t}`);for(let i=0,n=0;i<t;i+=6,n+=4)e[i+0]=n+0,e[i+1]=n+1,e[i+2]=n+2,e[i+3]=n+0,e[i+4]=n+2,e[i+5]=n+3;return e}function LS(r){return{dynamicUpdate:hm(r,!0),staticUpdate:hm(r,!1)}}function hm(r,e){const t=[];t.push(`
      
        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);let i=0;for(const s in r){const o=r[s];if(e!==o.dynamic)continue;t.push(`offset = index + ${i}`),t.push(o.code);const a=qi(o.format);i+=a.stride/4}t.push(`
            index += stride * 4;
        }
    `),t.unshift(`
        var stride = ${i};
    `);const n=t.join(`
`);return new Function("ps","f32v","u32v",n)}class NS{constructor(e){this._size=0,this._generateParticleUpdateCache={};const t=this._size=e.size??1e3,i=e.properties;let n=0,s=0;for(const h in i){const c=i[h],d=qi(c.format);c.dynamic?s+=d.stride:n+=d.stride}this._dynamicStride=s/4,this._staticStride=n/4,this.staticAttributeBuffer=new an(t*4*n),this.dynamicAttributeBuffer=new an(t*4*s),this.indexBuffer=um(t);const o=new Yn;let a=0,l=0;this._staticBuffer=new Nt({data:new Float32Array(1),label:"static-particle-buffer",shrinkToFit:!1,usage:Ae.VERTEX|Ae.COPY_DST}),this._dynamicBuffer=new Nt({data:new Float32Array(1),label:"dynamic-particle-buffer",shrinkToFit:!1,usage:Ae.VERTEX|Ae.COPY_DST});for(const h in i){const c=i[h],d=qi(c.format);c.dynamic?(o.addAttribute(c.attributeName,{buffer:this._dynamicBuffer,stride:this._dynamicStride*4,offset:a*4,format:c.format}),a+=d.size):(o.addAttribute(c.attributeName,{buffer:this._staticBuffer,stride:this._staticStride*4,offset:l*4,format:c.format}),l+=d.size)}o.addIndex(this.indexBuffer);const u=this.getParticleUpdate(i);this._dynamicUpload=u.dynamicUpdate,this._staticUpload=u.staticUpdate,this.geometry=o}getParticleUpdate(e){const t=$S(e);return this._generateParticleUpdateCache[t]?this._generateParticleUpdateCache[t]:(this._generateParticleUpdateCache[t]=this.generateParticleUpdate(e),this._generateParticleUpdateCache[t])}generateParticleUpdate(e){return LS(e)}update(e,t){e.length>this._size&&(t=!0,this._size=Math.max(e.length,this._size*1.5|0),this.staticAttributeBuffer=new an(this._size*this._staticStride*4*4),this.dynamicAttributeBuffer=new an(this._size*this._dynamicStride*4*4),this.indexBuffer=um(this._size),this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0));const i=this.dynamicAttributeBuffer;if(this._dynamicUpload(e,i.float32View,i.uint32View),this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0),t){const n=this.staticAttributeBuffer;this._staticUpload(e,n.float32View,n.uint32View),this._staticBuffer.setDataWithSize(n.float32View,e.length*this._staticStride*4,!0)}}destroy(){this._staticBuffer.destroy(),this._dynamicBuffer.destroy(),this.geometry.destroy()}}function $S(r){const e=[];for(const t in r){const i=r[t];e.push(t,i.code,i.dynamic?"d":"s")}return e.join("_")}var VS=`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`,HS=`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = aColor * uColor;
}
`,cm=`
struct ParticleUniforms {
  uProjectionMatrix:mat3x3<f32>,
  uResolution:vec2<f32>,
  uRoundPixels:f32,
};

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   let position = vec4((uniforms.uProjectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

  return VSOutput(
   position,
   aUV,
   aColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`;class WS extends Zt{constructor(){const e=de.from({vertex:HS,fragment:VS}),t=ce.from({fragment:{source:cm,entryPoint:"mainFragment"},vertex:{source:cm,entryPoint:"mainVertex"}});super({glProgram:e,gpuProgram:t,resources:{uTexture:X.WHITE.source,uSampler:new Jh({}),uniforms:{uTranslationMatrix:{value:new se,type:"mat3x3<f32>"},uColor:{value:new ae(16777215),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}}})}}class dm{constructor(e,t){this.state=ai.for2d(),this._gpuBufferHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.localUniforms=new gt({uTranslationMatrix:{value:new se,type:"mat3x3<f32>"},uColor:{value:new Float32Array(4),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}),this.renderer=e,this.adaptor=t,this.defaultShader=new WS,this.state=ai.for2d()}validateRenderable(e){return!1}addRenderable(e,t){this.renderer.renderPipes.batch.break(t),t.add(e)}getBuffers(e){return this._gpuBufferHash[e.uid]||this._initBuffer(e)}_initBuffer(e){return this._gpuBufferHash[e.uid]=new NS({size:e.particleChildren.length,properties:e._properties}),e.on("destroyed",this._destroyRenderableBound),this._gpuBufferHash[e.uid]}updateRenderable(e){}destroyRenderable(e){this._gpuBufferHash[e.uid].destroy(),this._gpuBufferHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}execute(e){const t=e.particleChildren;if(t.length===0)return;const i=this.renderer,n=this.getBuffers(e);e.texture||(e.texture=t[0].texture);const s=this.state;n.update(t,e._childrenDirty),e._childrenDirty=!1,s.blendMode=jn(e.blendMode,e.texture._source);const o=this.localUniforms.uniforms,a=o.uTranslationMatrix;e.worldTransform.copyTo(a),a.prepend(i.globalUniforms.globalUniformData.projectionMatrix),o.uResolution=i.globalUniforms.globalUniformData.resolution,o.uRound=i._roundPixels|e._roundPixels,ls(e.groupColorAlpha,o.uColor,0),this.adaptor.execute(this,e)}destroy(){this.defaultShader&&(this.defaultShader.destroy(),this.defaultShader=null)}}class fm extends dm{constructor(e){super(e,new GS)}}fm.extension={type:[M.WebGLPipes],name:"particle"};class pm extends dm{constructor(e){super(e,new zS)}}pm.extension={type:[M.WebGPUPipes],name:"particle"};const mm=class H0 extends DS{constructor(e={}){e={...H0.defaultOptions,...e},super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this.updateUvs(),this.updatePositions()}updatePositions(){const e=this.positions,t=this._leftWidth+this._rightWidth,i=this.width>t?1:this.width/t,n=this._topHeight+this._bottomHeight,s=this.height>n?1:this.height/n,o=Math.min(i,s);e[9]=e[11]=e[13]=e[15]=this._topHeight*o,e[17]=e[19]=e[21]=e[23]=this.height-this._bottomHeight*o,e[25]=e[27]=e[29]=e[31]=this.height,e[2]=e[10]=e[18]=e[26]=this._leftWidth*o,e[4]=e[12]=e[20]=e[28]=this.width-this._rightWidth*o,e[6]=e[14]=e[22]=e[30]=this.width,this.getBuffer("aPosition").update()}updateUvs(){const e=this.uvs;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1;const t=1/this._originalWidth,i=1/this._originalHeight;e[2]=e[10]=e[18]=e[26]=t*this._leftWidth,e[9]=e[11]=e[13]=e[15]=i*this._topHeight,e[4]=e[12]=e[20]=e[28]=1-t*this._rightWidth,e[17]=e[19]=e[21]=e[23]=1-i*this._bottomHeight,this.getBuffer("aUV").update()}};mm.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let Ar=mm;const gm=class W0 extends so{constructor(e){var c,d,f,g;e instanceof X&&(e={texture:e});const{width:t,height:i,leftWidth:n,rightWidth:s,topHeight:o,bottomHeight:a,texture:l,roundPixels:u,...h}=e;super({label:"NineSliceSprite",...h}),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=n??((c=l==null?void 0:l.defaultBorders)==null?void 0:c.left)??Ar.defaultOptions.leftWidth,this._topHeight=o??((d=l==null?void 0:l.defaultBorders)==null?void 0:d.top)??Ar.defaultOptions.topHeight,this._rightWidth=s??((f=l==null?void 0:l.defaultBorders)==null?void 0:f.right)??Ar.defaultOptions.rightWidth,this._bottomHeight=a??((g=l==null?void 0:l.defaultBorders)==null?void 0:g.bottom)??Ar.defaultOptions.bottomHeight,this.bounds.maxX=this._width=t??l.width??Ar.defaultOptions.width,this.bounds.maxY=this._height=i??l.height??Ar.defaultOptions.height,this.allowChildren=!1,this.texture=l??W0.defaultOptions.texture,this.roundPixels=u??!1}get bounds(){return this._bounds}get width(){return this._width}set width(e){this.bounds.maxX=this._width=e,this.onViewUpdate()}get height(){return this._height}set height(e){this.bounds.maxY=this._height=e,this.onViewUpdate()}setSize(e,t){typeof e=="object"&&(t=e.height??e.width,e=e.width),this.bounds.maxX=this._width=e,this.bounds.maxY=this._height=t??e,this.onViewUpdate()}getSize(e){return e||(e={}),e.width=this._width,e.height=this._height,e}get leftWidth(){return this._leftWidth}set leftWidth(e){this._leftWidth=e,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(e){this._topHeight=e,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(e){this._rightWidth=e,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(e){this._bottomHeight=e,this.onViewUpdate()}get texture(){return this._texture}set texture(e){e||(e=X.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}addBounds(e){const t=this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}destroy(e){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const i=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(i)}this._texture=null}};gm.defaultOptions={texture:X.EMPTY};let fu=gm;class _m{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuSpriteHash")}addRenderable(e,t){const i=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,i),this._renderer.renderPipes.batch.addToBatch(i,t)}updateRenderable(e){const t=this._gpuSpriteHash[e.uid];e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=e._texture,i=this._getGpuSprite(e);return i.texture._source!==t._source?!i._batcher.checkAndUpdateTexture(i,t):!1}destroyRenderable(e){const t=this._gpuSpriteHash[e.uid];Re.return(t.geometry),Re.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){t.geometry.update(e),t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=Re.get(du);return t.geometry=Re.get(Ar),t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuSpriteHash)this._gpuSpriteHash[e].geometry.destroy();this._gpuSpriteHash=null,this._renderer=null}}_m.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"nineSliceSprite"};const jS={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},XS={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,main:`
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `}};let pu,mu;class YS extends Zt{constructor(){pu??(pu=qn({name:"tiling-sprite-shader",bits:[ss,jS,Zn]})),mu??(mu=Kn({name:"tiling-sprite-shader",bits:[jl,XS,Qn]}));const e=new gt({uMapCoord:{value:new se,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new se,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:mu,gpuProgram:pu,resources:{localUniforms:new gt({uTransformMatrix:{value:new se,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:e,uTexture:X.EMPTY.source,uSampler:X.EMPTY.source.style}})}updateUniforms(e,t,i,n,s,o){const a=this.resources.tilingUniforms,l=o.width,u=o.height,h=o.textureMatrix,c=a.uniforms.uTextureTransform;c.set(i.a*l/e,i.b*l/t,i.c*u/e,i.d*u/t,i.tx/e,i.ty/t),c.invert(),a.uniforms.uMapCoord=h.mapCoord,a.uniforms.uClampFrame=h.uClampFrame,a.uniforms.uClampOffset=h.uClampOffset,a.uniforms.uTextureTransform=c,a.uniforms.uSizeAnchor[0]=e,a.uniforms.uSizeAnchor[1]=t,a.uniforms.uSizeAnchor[2]=n,a.uniforms.uSizeAnchor[3]=s,o&&(this.resources.uTexture=o.source,this.resources.uSampler=o.source.style)}}class qS extends Vl{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}}function KS(r,e){const t=r.anchor.x,i=r.anchor.y;e[0]=-t*r.width,e[1]=-i*r.height,e[2]=(1-t)*r.width,e[3]=-i*r.height,e[4]=(1-t)*r.width,e[5]=(1-i)*r.height,e[6]=-t*r.width,e[7]=(1-i)*r.height}function ZS(r,e,t,i){let n=0;const s=r.length/e,o=i.a,a=i.b,l=i.c,u=i.d,h=i.tx,c=i.ty;for(t*=e;n<s;){const d=r[t],f=r[t+1];r[t]=o*d+l*f+h,r[t+1]=a*d+u*f+c,t+=e,n++}}function QS(r,e){const t=r.texture,i=t.frame.width,n=t.frame.height;let s=0,o=0;r._applyAnchorToTexture&&(s=r.anchor.x,o=r.anchor.y),e[0]=e[6]=-s,e[2]=e[4]=1-s,e[1]=e[3]=-o,e[5]=e[7]=1-o;const a=se.shared;a.copyFrom(r._tileTransform.matrix),a.tx/=r.width,a.ty/=r.height,a.invert(),a.scale(r.width/i,r.height/n),ZS(e,2,0,a)}const Fo=new qS;class xm{constructor(e){this._state=ai.default2d,this._tilingSpriteDataHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_tilingSpriteDataHash")}validateRenderable(e){const t=this._getTilingSpriteData(e),i=t.canBatch;this._updateCanBatch(e);const n=t.canBatch;if(n&&n===i){const{batchableMesh:s}=t;if(s&&s.texture._source!==e.texture._source)return!s._batcher.checkAndUpdateTexture(s,e.texture)}return i!==n}addRenderable(e,t){const i=this._renderer.renderPipes.batch;this._updateCanBatch(e);const n=this._getTilingSpriteData(e),{geometry:s,canBatch:o}=n;if(o){n.batchableMesh||(n.batchableMesh=new du);const a=n.batchableMesh;e.didViewUpdate&&(this._updateBatchableMesh(e),a.geometry=s,a.renderable=e,a.transform=e.groupTransform,a.texture=e._texture),a.roundPixels=this._renderer._roundPixels|e._roundPixels,i.addToBatch(a,t)}else i.break(t),n.shader||(n.shader=new YS),this.updateRenderable(e),t.add(e)}execute(e){const{shader:t}=this._tilingSpriteDataHash[e.uid];t.groups[0]=this._renderer.globalUniforms.bindGroup;const i=t.resources.localUniforms.uniforms;i.uTransformMatrix=e.groupTransform,i.uRound=this._renderer._roundPixels|e._roundPixels,ls(e.groupColorAlpha,i.uColor,0),this._state.blendMode=jn(e.groupBlendMode,e.texture._source),this._renderer.encoder.draw({geometry:Fo,shader:t,state:this._state})}updateRenderable(e){const t=this._getTilingSpriteData(e),{canBatch:i}=t;if(i){const{batchableMesh:n}=t;e.didViewUpdate&&this._updateBatchableMesh(e),n._batcher.updateElement(n)}else if(e.didViewUpdate){const{shader:n}=t;n.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}}destroyRenderable(e){var i;const t=this._getTilingSpriteData(e);t.batchableMesh=null,(i=t.shader)==null||i.destroy(),this._tilingSpriteDataHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_getTilingSpriteData(e){return this._tilingSpriteDataHash[e.uid]||this._initTilingSpriteData(e)}_initTilingSpriteData(e){const t=new Vl({indices:Fo.indices,positions:Fo.positions.slice(),uvs:Fo.uvs.slice()});return this._tilingSpriteDataHash[e.uid]={canBatch:!0,renderable:e,geometry:t},e.on("destroyed",this._destroyRenderableBound),this._tilingSpriteDataHash[e.uid]}_updateBatchableMesh(e){const t=this._getTilingSpriteData(e),{geometry:i}=t,n=e.texture.source.style;n.addressMode!=="repeat"&&(n.addressMode="repeat",n.update()),QS(e,i.uvs),KS(e,i.positions)}destroy(){for(const e in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[e].renderable);this._tilingSpriteDataHash=null,this._renderer=null}_updateCanBatch(e){const t=this._getTilingSpriteData(e),i=e.texture;let n=!0;return this._renderer.type===zt.WEBGL&&(n=this._renderer.context.supports.nonPowOf2wrapping),t.canBatch=i.textureMatrix.isSimple&&(n||i.source.isPowerOfTwo),t.canBatch}}xm.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"tilingSprite"};const JS={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:` 
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));
        `}},ew={name:"local-uniform-msdf-bit",vertex:{header:`
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `},fragment:{header:`
            uniform float uDistance;
         `,main:` 
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `}},tw={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;
             
            }
        `}},iw={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);  
              
                return coverage;
            }
        `}};let gu,_u;class rw extends Zt{constructor(){const e=new gt({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new se,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}}),t=on();gu??(gu=qn({name:"sdf-shader",bits:[_l,yl(t),JS,tw,Zn]})),_u??(_u=Kn({name:"sdf-shader",bits:[xl,Sl(t),ew,iw,Qn]})),super({glProgram:_u,gpuProgram:gu,resources:{localUniforms:e,batchSamplers:wl(t)}})}}class vm{constructor(e){this._gpuBitmapText={},this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuBitmapText")}validateRenderable(e){const t=this._getGpuBitmapText(e);return e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,t)),this._renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){const i=this._getGpuBitmapText(e);ym(e,i),e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,i)),this._renderer.renderPipes.graphics.addRenderable(i,t),i.context.customShader&&this._updateDistanceField(e)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableByUid(e.uid)}_destroyRenderableByUid(e){const t=this._gpuBitmapText[e].context;t.customShader&&(Re.return(t.customShader),t.customShader=null),Re.return(this._gpuBitmapText[e]),this._gpuBitmapText[e]=null}updateRenderable(e){const t=this._getGpuBitmapText(e);ym(e,t),this._renderer.renderPipes.graphics.updateRenderable(t),t.context.customShader&&this._updateDistanceField(e)}_updateContext(e,t){const{context:i}=t,n=kl.getFont(e.text,e._style);i.clear(),n.distanceField.type!=="none"&&(i.customShader||(i.customShader=Re.get(rw)));const s=Array.from(e.text),o=e._style;let a=n.baseLineOffset;const l=tf(s,o,n,!0);let u=0;const h=o.padding,c=l.scale;let d=l.width,f=l.height+l.offsetY;o._stroke&&(d+=o._stroke.width/c,f+=o._stroke.width/c),i.translate(-e._anchor._x*d-h,-e._anchor._y*f-h).scale(c,c);const g=n.applyFillAsTint?o._fill.color:16777215;for(let m=0;m<l.lines.length;m++){const _=l.lines[m];for(let y=0;y<_.charPositions.length;y++){const S=s[u++],w=n.chars[S];w!=null&&w.texture&&i.texture(w.texture,g||"black",Math.round(_.charPositions[y]+w.xOffset),Math.round(a+w.yOffset))}a+=n.lineHeight}}_getGpuBitmapText(e){return this._gpuBitmapText[e.uid]||this.initGpuText(e)}initGpuText(e){const t=Re.get(je);return this._gpuBitmapText[e.uid]=t,this._updateContext(e,t),e.on("destroyed",this._destroyRenderableBound),this._gpuBitmapText[e.uid]}_updateDistanceField(e){const t=this._getGpuBitmapText(e).context,i=e._style.fontFamily,n=$e.get(`${i}-bitmap`),{a:s,b:o,c:a,d:l}=e.groupTransform,u=Math.sqrt(s*s+o*o),h=Math.sqrt(a*a+l*l),c=(Math.abs(u)+Math.abs(h))/2,d=n.baseRenderedFontSize/e._style.fontSize,f=c*n.distanceField.range*(1/d);t.customShader.resources.localUniforms.uniforms.uDistance=f}destroy(){for(const e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null,this._renderer=null}}vm.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"bitmapText"};function ym(r,e){e.groupTransform=r.groupTransform,e.groupColorAlpha=r.groupColorAlpha,e.groupColor=r.groupColor,e.groupBlendMode=r.groupBlendMode,e.globalDisplayStatus=r.globalDisplayStatus,e.groupTransform=r.groupTransform,e.localDisplayStatus=r.localDisplayStatus,e.groupAlpha=r.groupAlpha,e._roundPixels=r._roundPixels}class bm{constructor(e){this._gpuText=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.runners.resolutionChange.add(this),this._renderer.renderableGC.addManagedHash(this,"_gpuText")}resolutionChange(){for(const e in this._gpuText){const t=this._gpuText[e];if(!t)continue;const i=t.batchableSprite.renderable;i._autoResolution&&(i._resolution=this._renderer.resolution,i.onViewUpdate())}}validateRenderable(e){const t=this._getGpuText(e),i=e._getKey();return t.textureNeedsUploading?(t.textureNeedsUploading=!1,!0):t.currentKey!==i}addRenderable(e,t){const n=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){const i=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),i._batcher.updateElement(i)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableById(e.uid)}_destroyRenderableById(e){const t=this._gpuText[e];this._renderer.htmlText.decreaseReferenceCount(t.currentKey),Re.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){const t=e._getKey(),i=this._getGpuText(e),n=i.batchableSprite;i.currentKey!==t&&this._updateGpuText(e).catch(o=>{console.error(o)}),e._didTextUpdate=!1;const s=e._style.padding;eo(n.bounds,e._anchor,n.texture,s)}async _updateGpuText(e){e._didTextUpdate=!1;const t=this._getGpuText(e);if(t.generatingTexture)return;const i=e._getKey();this._renderer.htmlText.decreaseReferenceCount(t.currentKey),t.generatingTexture=!0,t.currentKey=i;const n=e.resolution??this._renderer.resolution,s=await this._renderer.htmlText.getManagedTexture(e.text,n,e._style,e._getKey()),o=t.batchableSprite;o.texture=t.texture=s,t.generatingTexture=!1,t.textureNeedsUploading=!0,e.onViewUpdate();const a=e._style.padding;eo(o.bounds,e._anchor,o.texture,a)}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){const t={texture:X.EMPTY,currentKey:"--",batchableSprite:Re.get(iu),textureNeedsUploading:!1,generatingTexture:!1},i=t.batchableSprite;return i.renderable=e,i.transform=e.groupTransform,i.texture=X.EMPTY,i.bounds={minX:0,maxX:1,minY:0,maxY:0},i.roundPixels=this._renderer._roundPixels|e._roundPixels,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._gpuText[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}bm.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"htmlText"};function nw(){const{userAgent:r}=Se.get().getNavigator();return/^((?!chrome|android).)*safari/i.test(r)}const sw=new Mt;function Sm(r,e,t,i){const n=sw;n.minX=0,n.minY=0,n.maxX=r.width/i|0,n.maxY=r.height/i|0;const s=Le.getOptimalTexture(n.width,n.height,i,!1);return s.source.uploadMethodId="image",s.source.resource=r,s.source.alphaMode="premultiply-alpha-on-upload",s.frame.width=e/i,s.frame.height=t/i,s.source.emit("update",s.source),s.updateUvs(),s}function ow(r,e){const t=e.fontFamily,i=[],n={},s=/font-family:([^;"\s]+)/g,o=r.match(s);function a(l){n[l]||(i.push(l),n[l]=!0)}if(Array.isArray(t))for(let l=0;l<t.length;l++)a(t[l]);else a(t);o&&o.forEach(l=>{const u=l.split(":")[1].trim();a(u)});for(const l in e.tagStyles){const u=e.tagStyles[l].fontFamily;a(u)}return i}async function aw(r){const t=await(await Se.get().fetch(r)).blob(),i=new FileReader;return await new Promise((s,o)=>{i.onloadend=()=>s(i.result),i.onerror=o,i.readAsDataURL(t)})}async function wm(r,e){const t=await aw(e);return`@font-face {
        font-family: "${r.fontFamily}";
        src: url('${t}');
        font-weight: ${r.fontWeight};
        font-style: ${r.fontStyle};
    }`}const Bo=new Map;async function lw(r,e,t){const i=r.filter(n=>$e.has(`${n}-and-url`)).map((n,s)=>{if(!Bo.has(n)){const{url:o}=$e.get(`${n}-and-url`);s===0?Bo.set(n,wm({fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:n},o)):Bo.set(n,wm({fontWeight:t.fontWeight,fontStyle:t.fontStyle,fontFamily:n},o))}return Bo.get(n)});return(await Promise.all(i)).join(`
`)}function uw(r,e,t,i,n){const{domElement:s,styleElement:o,svgRoot:a}=n;s.innerHTML=`<style>${e.cssStyle}</style><div style='padding:0;'>${r}</div>`,s.setAttribute("style",`transform: scale(${t});transform-origin: top left; display: inline-block`),o.textContent=i;const{width:l,height:u}=n.image;return a.setAttribute("width",l.toString()),a.setAttribute("height",u.toString()),new XMLSerializer().serializeToString(a)}function hw(r,e){const t=Gi.getOptimalCanvasAndContext(r.width,r.height,e),{context:i}=t;return i.clearRect(0,0,r.width,r.height),i.drawImage(r,0,0),t}function cw(r,e,t){return new Promise(async i=>{t&&await new Promise(n=>setTimeout(n,100)),r.onload=()=>{i()},r.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`,r.crossOrigin="anonymous"})}class xu{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===zt.WEBGPU}getTexture(e){return this._buildTexturePromise(e.text,e.resolution,e.style)}getManagedTexture(e,t,i,n){if(this._activeTextures[n])return this._increaseReferenceCount(n),this._activeTextures[n].promise;const s=this._buildTexturePromise(e,t,i).then(o=>(this._activeTextures[n].texture=o,o));return this._activeTextures[n]={texture:null,promise:s,usageCount:1},s}async _buildTexturePromise(e,t,i){const n=Re.get(Ff),s=ow(e,i),o=await lw(s,i,Hl.defaultTextStyle),a=K2(e,i,o,n),l=Math.ceil(Math.ceil(Math.max(1,a.width)+i.padding*2)*t),u=Math.ceil(Math.ceil(Math.max(1,a.height)+i.padding*2)*t),h=n.image,c=2;h.width=(l|0)+c,h.height=(u|0)+c;const d=uw(e,i,t,o,n);await cw(h,d,nw()&&s.length>0);const f=h;let g;this._createCanvas&&(g=hw(h,t));const m=Sm(g?g.canvas:f,h.width-c,h.height-c,t);return this._createCanvas&&(this._renderer.texture.initSource(m.source),Gi.returnCanvasAndContext(g)),Re.return(n),m}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this._activeTextures[e];t&&(t.usageCount--,t.usageCount===0&&(t.texture?this._cleanUp(t):t.promise.then(i=>{t.texture=i,this._cleanUp(t)}).catch(()=>{le("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}_cleanUp(e){Le.returnTexture(e.texture),e.texture.source.resource=null,e.texture.source.uploadMethodId="unknown"}getReferenceCount(e){return this._activeTextures[e].usageCount}destroy(){this._activeTextures=null}}xu.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"htmlText"},xu.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"};class Tm{constructor(e){this._gpuText=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.runners.resolutionChange.add(this),this._renderer.renderableGC.addManagedHash(this,"_gpuText")}resolutionChange(){for(const e in this._gpuText){const t=this._gpuText[e];if(!t)continue;const i=t.batchableSprite.renderable;i._autoResolution&&(i._resolution=this._renderer.resolution,i.onViewUpdate())}}validateRenderable(e){const t=this._getGpuText(e),i=e._getKey();return t.currentKey!==i}addRenderable(e,t){const n=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){const i=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),i._batcher.updateElement(i)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableById(e.uid)}_destroyRenderableById(e){const t=this._gpuText[e];this._renderer.canvasText.decreaseReferenceCount(t.currentKey),Re.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){const t=e._getKey(),i=this._getGpuText(e),n=i.batchableSprite;i.currentKey!==t&&this._updateGpuText(e),e._didTextUpdate=!1;const s=e._style.padding;eo(n.bounds,e._anchor,n.texture,s)}_updateGpuText(e){const t=this._getGpuText(e),i=t.batchableSprite;t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),t.texture=i.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e._getKey(),i.texture=t.texture}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){const t={texture:null,currentKey:"--",batchableSprite:Re.get(iu)};return t.batchableSprite.renderable=e,t.batchableSprite.transform=e.groupTransform,t.batchableSprite.bounds={minX:0,maxX:1,minY:0,maxY:0},t.batchableSprite.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuText[e.uid]=t,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._updateText(e),e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}Tm.extension={type:[M.WebGLPipes,M.WebGPUPipes,M.CanvasPipes],name:"text"};function Cm(r,e,t){for(let i=0,n=4*t*e;i<e;++i,n+=4)if(r[n+3]!==0)return!1;return!0}function Pm(r,e,t,i,n){const s=4*e;for(let o=i,a=i*s+4*t;o<=n;++o,a+=s)if(r[a+3]!==0)return!1;return!0}function dw(r,e=1){const{width:t,height:i}=r,n=r.getContext("2d",{willReadFrequently:!0});if(n===null)throw new TypeError("Failed to get canvas 2D context");const o=n.getImageData(0,0,t,i).data;let a=0,l=0,u=t-1,h=i-1;for(;l<i&&Cm(o,t,l);)++l;if(l===i)return De.EMPTY;for(;Cm(o,t,h);)--h;for(;Pm(o,t,a,l,h);)++a;for(;Pm(o,t,u,l,h);)--u;return++u,++h,new De(a/e,l/e,(u-a)/e,(h-l)/e)}class Am{constructor(e){this._activeTextures={},this._renderer=e}getTextureSize(e,t,i){const n=_i.measureText(e||" ",i);let s=Math.ceil(Math.ceil(Math.max(1,n.width)+i.padding*2)*t),o=Math.ceil(Math.ceil(Math.max(1,n.height)+i.padding*2)*t);return s=Math.ceil(s-1e-6),o=Math.ceil(o-1e-6),s=Jr(s),o=Jr(o),{width:s,height:o}}getTexture(e,t,i,n){typeof e=="string"&&(Y("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:i,resolution:t}),e.style instanceof vt||(e.style=new vt(e.style));const{texture:s,canvasAndContext:o}=this.createTextureAndCanvas(e);return this._renderer.texture.initSource(s._source),Gi.returnCanvasAndContext(o),s}createTextureAndCanvas(e){const{text:t,style:i}=e,n=e.resolution??this._renderer.resolution,s=_i.measureText(t||" ",i),o=Math.ceil(Math.ceil(Math.max(1,s.width)+i.padding*2)*n),a=Math.ceil(Math.ceil(Math.max(1,s.height)+i.padding*2)*n),l=Gi.getOptimalCanvasAndContext(o,a),{canvas:u}=l;this.renderTextToCanvas(t,i,n,l);const h=Sm(u,o,a,n);if(i.trim){const c=dw(u,n);h.frame.copyFrom(c),h.updateUvs()}return{texture:h,canvasAndContext:l}}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;const t=e._getKey();if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;const{texture:i,canvasAndContext:n}=this.createTextureAndCanvas(e);return this._activeTextures[t]={canvasAndContext:n,texture:i,usageCount:1},i}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this._activeTextures[e];if(t.usageCount--,t.usageCount===0){Gi.returnCanvasAndContext(t.canvasAndContext),Le.returnTexture(t.texture);const i=t.texture.source;i.resource=null,i.uploadMethodId="unknown",i.alphaMode="no-premultiply-alpha",this._activeTextures[e]=null}}getReferenceCount(e){return this._activeTextures[e].usageCount}renderTextToCanvas(e,t,i,n){var S,w,P,E;const{canvas:s,context:o}=n,a=wo(t),l=_i.measureText(e||" ",t),u=l.lines,h=l.lineHeight,c=l.lineWidths,d=l.maxLineWidth,f=l.fontProperties,g=s.height;if(o.resetTransform(),o.scale(i,i),o.textBaseline=t.textBaseline,(S=t._stroke)!=null&&S.width){const U=t._stroke;o.lineWidth=U.width,o.miterLimit=U.miterLimit,o.lineJoin=U.join,o.lineCap=U.cap}o.font=a;let m,_;const y=t.dropShadow?2:1;for(let U=0;U<y;++U){const B=t.dropShadow&&U===0,k=B?Math.ceil(Math.max(1,g)+t.padding*2):0,R=k*i;if(B){o.fillStyle="black",o.strokeStyle="black";const ee=t.dropShadow,W=ee.color,j=ee.alpha;o.shadowColor=ae.shared.setValue(W).setAlpha(j).toRgbaString();const J=ee.blur*i,T=ee.distance*i;o.shadowBlur=J,o.shadowOffsetX=Math.cos(ee.angle)*T,o.shadowOffsetY=Math.sin(ee.angle)*T+R}else o.fillStyle=t._fill?To(t._fill,o):null,(w=t._stroke)!=null&&w.width&&(o.strokeStyle=To(t._stroke,o)),o.shadowColor="black";let G=(h-f.fontSize)/2;h-f.fontSize<0&&(G=0);const Q=((P=t._stroke)==null?void 0:P.width)??0;for(let ee=0;ee<u.length;ee++)m=Q/2,_=Q/2+ee*h+f.ascent+G,t.align==="right"?m+=d-c[ee]:t.align==="center"&&(m+=(d-c[ee])/2),(E=t._stroke)!=null&&E.width&&this._drawLetterSpacing(u[ee],t,n,m+t.padding,_+t.padding-k,!0),t._fill!==void 0&&this._drawLetterSpacing(u[ee],t,n,m+t.padding,_+t.padding-k)}}_drawLetterSpacing(e,t,i,n,s,o=!1){const{context:a}=i,l=t.letterSpacing;let u=!1;if(_i.experimentalLetterSpacingSupported&&(_i.experimentalLetterSpacing?(a.letterSpacing=`${l}px`,a.textLetterSpacing=`${l}px`,u=!0):(a.letterSpacing="0px",a.textLetterSpacing="0px")),l===0||u){o?a.strokeText(e,n,s):a.fillText(e,n,s);return}let h=n;const c=_i.graphemeSegmenter(e);let d=a.measureText(e).width,f=0;for(let g=0;g<c.length;++g){const m=c[g];o?a.strokeText(m,h,s):a.fillText(m,h,s);let _="";for(let y=g+1;y<c.length;++y)_+=c[y];f=a.measureText(_).width,h+=d-f+l,d=f}}destroy(){this._activeTextures=null}}Am.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"canvasText"},oe.add(Tx,Cx);function zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Em(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mn={duration:.5,overwrite:!1,delay:0},vu,yt,Xe,xi=1e8,bt=1/xi,yu=Math.PI*2,fw=yu/4,pw=0,Mm=Math.sqrt,mw=Math.cos,gw=Math.sin,ht=function(e){return typeof e=="string"},Qe=function(e){return typeof e=="function"},Li=function(e){return typeof e=="number"},bu=function(e){return typeof e>"u"},vi=function(e){return typeof e=="object"},It=function(e){return e!==!1},Su=function(){return typeof window<"u"},ko=function(e){return Qe(e)||ht(e)},Rm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},St=Array.isArray,wu=/(?:-?\.?\d|\.)+/gi,Im=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Om=/[+-]=-?[.\d]+/,Fm=/[^,'"\[\]\s]+/gi,_w=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,yi,Cu,Pu,Vt={},Uo={},Bm,km=function(e){return(Uo=Mr(e,Vt))&&dt},Au=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},us=function(e,t){return!t&&console.warn(e)},Um=function(e,t){return e&&(Vt[e]=t)&&Uo&&(Uo[e]=t)||Vt},hs=function(){return 0},xw={suppressEvents:!0,isStart:!0,kill:!1},Do={suppressEvents:!0,kill:!1},vw={suppressEvents:!0},Eu={},er=[],Mu={},Dm,Ht={},Ru={},Gm=30,Go=[],Iu="",Ou=function(e){var t=e[0],i,n;if(vi(t)||Qe(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Go.length;n--&&!Go[n].targetTest(t););i=Go[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new fg(e[n],i)))||e.splice(n,1);return e},Er=function(e){return e._gsap||Ou(ti(e))[0]._gsap},zm=function(e,t,i){return(i=e[t])&&Qe(i)?e[t]():bu(i)&&e.getAttribute&&e.getAttribute(t)||i},Ot=function(e,t){return(e=e.split(",")).forEach(t)||e},tt=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},_n=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},yw=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},zo=function(){var e=er.length,t=er.slice(0),i,n;for(Mu={},er.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Lm=function(e,t,i,n){er.length&&!yt&&zo(),e.render(t,i,yt&&t<0&&(e._initted||e._startAt)),er.length&&!yt&&zo()},Nm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Fm).length<2?t:ht(e)?e.trim():e},$m=function(e){return e},Jt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},bw=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Mr=function(e,t){for(var i in t)e[i]=t[i];return e},Vm=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=vi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Lo=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},cs=function(e){var t=e.parent||Ke,i=e.keyframes?bw(St(e.keyframes)):Jt;if(It(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Sw=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Hm=function(e,t,i,n,s){var o=e[n],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},No=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Rr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ww=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fu=function(e,t,i,n){return e._startAt&&(yt?e._startAt.revert(Do):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Tw=function r(e){return!e||e._ts&&r(e.parent)},Wm=function(e){return e._repeat?xn(e._tTime,e=e.duration()+e._rDelay)*e:0},xn=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},$o=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Ho=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ct(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),i._dirty||Rr(i,e)),e},jm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=$o(e.rawTime(),t),(!t._dur||fs(0,t.totalDuration(),i)-t._tTime>bt)&&t.render(i,!0)),Rr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},bi=function(e,t,i,n){return t.parent&&tr(t),t._start=ct((Li(i)?i:i||e!==Ke?ei(e,i,t):e._time)+t._delay),t._end=ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hm(e,t,"_first","_last",e._sort?"_start":0),Bu(t)||(e._recent=t),n||jm(e,t),e._ts<0&&Ho(e,e._tTime),e},Xm=function(e,t){return(Vt.ScrollTrigger||Au("scrollTrigger",t))&&Vt.ScrollTrigger.create(t,e)},Ym=function(e,t,i,n,s){if(Vu(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Dm!==jt.frame)return er.push(e),e._lazy=[s,n],1},Cw=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Bu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Pw=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&Cw(e)&&!(!e._initted&&Bu(e))||(e._ts<0||e._dp._ts<0)&&!Bu(e))?0:1,a=e._rDelay,l=0,u,h,c;if(a&&e._repeat&&(l=fs(0,e._tDur,t),h=xn(l,a),e._yoyo&&h&1&&(o=1-o),h!==xn(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yt||n||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Ym(e,t,n,i,l))return;for(c=e._zTime,e._zTime=t||(i?bt:0),i||(i=t&&!c),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Fu(e,t,i,!0),e._onUpdate&&!i&&Wt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Wt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&tr(e,1),!i&&!yt&&(Wt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Aw=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},vn=function(e,t,i,n){var s=e._repeat,o=ct(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ct(o*(s+1)+e._rDelay*s):o,a>0&&!n&&Ho(e,e._tTime=e._tDur*a),e.parent&&Vo(e),i||Rr(e.parent,e),e},qm=function(e){return e instanceof Pt?Rr(e):vn(e,e._dur)},Ew={_start:0,endTime:hs,totalDuration:hs},ei=function r(e,t,i){var n=e.labels,s=e._recent||Ew,o=e.duration()>=xi?s.endTime(!1):e._dur,a,l,u;return ht(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(St(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ds=function(e,t,i){var n=Li(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=It(l.vars.inherit)&&l.parent;o.immediateRender=It(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rt(t[0],o,t[s+1])},ir=function(e,t){return e||e===0?t(e):t},fs=function(e,t,i){return i<e?e:i>t?t:i},wt=function(e,t){return!ht(e)||!(t=_w.exec(e))?"":t[1]},Mw=function(e,t,i){return ir(i,function(n){return fs(e,t,n)})},ku=[].slice,Km=function(e,t){return e&&vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vi(e[0]))&&!e.nodeType&&e!==yi},Rw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return ht(n)&&!t||Km(n,1)?(s=i).push.apply(s,ti(n)):i.push(n)})||i},ti=function(e,t,i){return Xe&&!t&&Xe.selector?Xe.selector(e):ht(e)&&!i&&(Cu||!bn())?ku.call((t||Pu).querySelectorAll(e),0):St(e)?Rw(e,i):Km(e)?ku.call(e,0):e?[e]:[]},Uu=function(e){return e=ti(e)[0]||us("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ti(t,i.querySelectorAll?i:i===e?us("Invalid scope")||Pu.createElement("div"):e)}},Zm=function(e){return e.sort(function(){return .5-Math.random()})},Qm=function(e){if(Qe(e))return e;var t=vi(e)?e:{each:e},i=Ir(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,u=t.axis,h=n,c=n;return ht(n)?h=c={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],c=n[1]),function(d,f,g){var m=(g||t).length,_=o[m],y,S,w,P,E,U,B,k,R;if(!_){if(R=t.grid==="auto"?0:(t.grid||[1,xi])[1],!R){for(B=-1e8;B<(B=g[R++].getBoundingClientRect().left)&&R<m;);R<m&&R--}for(_=o[m]=[],y=l?Math.min(R,m)*h-.5:n%R,S=R===xi?0:l?m*c/R-.5:n/R|0,B=0,k=xi,U=0;U<m;U++)w=U%R-y,P=S-(U/R|0),_[U]=E=u?Math.abs(u==="y"?P:w):Mm(w*w+P*P),E>B&&(B=E),E<k&&(k=E);n==="random"&&Zm(_),_.max=B-k,_.min=k,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(R>m?m-1:u?u==="y"?m/R:R:Math.max(R,m/R))||0)*(n==="edges"?-1:1),_.b=m<0?s-m:s,_.u=wt(t.amount||t.each)||0,i=i&&m<0?hg(i):i}return m=(_[d]-_.min)/_.max||0,ct(_.b+(i?i(m):m)*_.v)+_.u}},Du=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=ct(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Li(i)?0:wt(i))}},Jm=function(e,t){var i=St(e),n,s;return!i&&vi(e)&&(n=i=e.radius||xi,e.values?(e=ti(e.values),(s=!Li(e[0]))&&(n*=n)):e=Du(e.increment)),ir(t,i?Qe(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=xi,h=0,c=e.length,d,f;c--;)s?(d=e[c].x-a,f=e[c].y-l,d=d*d+f*f):d=Math.abs(e[c]-a),d<u&&(u=d,h=c);return h=!n||u<=n?e[h]:o,s||h===o||Li(o)?h:h+wt(o)}:Du(e))},eg=function(e,t,i,n){return ir(St(e)?!t:i===!0?!!(i=0):!n,function(){return St(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Iw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},Ow=function(e,t){return function(i){return e(parseFloat(i))+(t||wt(i))}},Fw=function(e,t,i){return ig(e,t,0,1,i)},tg=function(e,t,i){return ir(i,function(n){return e[~~t(n)]})},Bw=function r(e,t,i){var n=t-e;return St(e)?tg(e,r(0,e.length),t):ir(i,function(s){return(n+(s-e)%n)%n+e})},kw=function r(e,t,i){var n=t-e,s=n*2;return St(e)?tg(e,r(0,e.length-1),t):ir(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},ps=function(e){for(var t=0,i="",n,s,o,a;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",s=e.substr(n+7,o-n-7).match(a?Fm:wu),i+=e.substr(t,n-t)+eg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},ig=function(e,t,i,n,s){var o=t-e,a=n-i;return ir(s,function(l){return i+((l-e)/o*a||0)})},Uw=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=ht(e),a={},l,u,h,c,d;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(St(e)&&!St(t)){for(h=[],c=e.length,d=c-2,u=1;u<c;u++)h.push(r(e[u-1],e[u]));c--,s=function(g){g*=c;var m=Math.min(d,~~g);return h[m](g-m)},i=t}else n||(e=Mr(St(e)?[]:{},e));if(!h){for(l in t)Nu.call(a,e,l,"get",t[l]);s=function(g){return ju(g,a)||(o?e.p:e)}}}return ir(i,s)},rg=function(e,t,i){var n=e.labels,s=xi,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wt=function(e,t,i){var n=e.vars,s=n[t],o=Xe,a=e._ctx,l,u,h;if(s)return l=n[t+"Params"],u=n.callbackScope||e,i&&er.length&&zo(),a&&(Xe=a),h=l?s.apply(u,l):s.call(u),Xe=o,h},ms=function(e){return tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yt),e.progress()<1&&Wt(e,"onInterrupt"),e},yn,ng=[],sg=function(e){if(e)if(e=!e.name&&e.default||e,Su()||e.headless){var t=e.name,i=Qe(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:hs,render:ju,add:Nu,kill:Qw,modifier:Zw,rawVars:0},o={targetTest:0,get:0,getSetter:Wu,aliases:{},register:0};if(bn(),e!==n){if(Ht[t])return;Jt(n,Jt(Lo(e,s),o)),Mr(n.prototype,Mr(s,Lo(e,o))),Ht[n.prop=t]=n,e.targetTest&&(Go.push(n),Eu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Um(t,n),e.register&&e.register(dt,n,Ft)}else ng.push(e)},ze=255,gs={aqua:[0,ze,ze],lime:[0,ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ze],navy:[0,0,128],white:[ze,ze,ze],olive:[128,128,0],yellow:[ze,ze,0],orange:[ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ze,0,0],pink:[ze,192,203],cyan:[0,ze,ze],transparent:[ze,ze,ze,0]},Gu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ze+.5|0},og=function(e,t,i){var n=e?Li(e)?[e>>16,e>>8&ze,e&ze]:0:gs.black,s,o,a,l,u,h,c,d,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gs[e])n=gs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ze,n&ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ze,e&ze]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(wu),!t)l=+n[0]%360/360,u=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(u+1):h+u-h*u,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=Gu(l+1/3,s,o),n[1]=Gu(l,s,o),n[2]=Gu(l-1/3,s,o);else if(~e.indexOf("="))return n=e.match(Im),i&&n.length<4&&(n[3]=1),n}else n=e.match(wu)||gs.transparent;n=n.map(Number)}return t&&!g&&(s=n[0]/ze,o=n[1]/ze,a=n[2]/ze,c=Math.max(s,o,a),d=Math.min(s,o,a),h=(c+d)/2,c===d?l=u=0:(f=c-d,u=h>.5?f/(2-c-d):f/(c+d),l=c===s?(o-a)/f+(o<a?6:0):c===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(u*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},ag=function(e){var t=[],i=[],n=-1;return e.split(rr).forEach(function(s){var o=s.match(gn)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},lg=function(e,t,i){var n="",s=(e+n).match(rr),o=t?"hsla(":"rgba(",a=0,l,u,h,c;if(!s)return e;if(s=s.map(function(d){return(d=og(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=ag(e),l=i.c,l.join(n)!==h.c.join(n)))for(u=e.replace(rr,"1").split(gn),c=u.length-1;a<c;a++)n+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!u)for(u=e.split(rr),c=u.length-1;a<c;a++)n+=u[a]+s[a];return n+u[c]},rr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Dw=/hsl[a]?\(/,ug=function(e){var t=e.join(" "),i;if(rr.lastIndex=0,rr.test(t))return i=Dw.test(t),e[1]=lg(e[1],i),e[0]=lg(e[0],i,ag(e[1])),!0},_s,jt=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,u,h,c,d,f,g=function m(_){var y=r()-n,S=_===!0,w,P,E,U;if((y>e||y<0)&&(i+=y-t),n+=y,E=n-i,w=E-o,(w>0||S)&&(U=++c.frame,d=E-c.time*1e3,c.time=E=E/1e3,o+=w+(w>=s?4:s-w),P=1),S||(l=u(m)),P)for(f=0;f<a.length;f++)a[f](E,d,U,_)};return c={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Bm&&(!Cu&&Su()&&(yi=Cu=window,Pu=yi.document||{},Vt.gsap=dt,(yi.gsapVersions||(yi.gsapVersions=[])).push(dt.version),km(Uo||yi.GreenSockGlobals||!yi.gsap&&yi||{}),ng.forEach(sg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&c.sleep(),u=h||function(_){return setTimeout(_,o-c.time*1e3+1|0)},_s=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),_s=0,u=hs},lagSmoothing:function(_,y){e=_||1/0,t=Math.min(y||33,e)},fps:function(_){s=1e3/(_||240),o=c.time*1e3+s},add:function(_,y,S){var w=y?function(P,E,U,B){_(P,E,U,B),c.remove(w)}:_;return c.remove(_),a[S?"unshift":"push"](w),bn(),w},remove:function(_,y){~(y=a.indexOf(_))&&a.splice(y,1)&&f>=y&&f--},_listeners:a},c}(),bn=function(){return!_s&&jt.wake()},we={},Gw=/^[\d.\-M][\d.\-,\s]/,zw=/["']/g,Lw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[n]=isNaN(u)?u.replace(zw,"").trim():+u,n=l.substr(a+1).trim();return t},Nw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},$w=function(e){var t=(e+"").split("("),i=we[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Lw(t[1])]:Nw(e).split(",").map(Nm)):we._CE&&Gw.test(e)?we._CE("",e):i},hg=function(e){return function(t){return 1-e(1-t)}},cg=function r(e,t){for(var i=e._first,n;i;)i instanceof Pt?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Ir=function(e,t){return e&&(Qe(e)?e:we[e]||$w(e))||t},Or=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return Ot(e,function(a){we[a]=Vt[a]=s,we[o=a.toLowerCase()]=i;for(var l in s)we[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=we[a+"."+l]=s[l]}),s},dg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zu=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/yu*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*gw((h-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:dg(a);return s=yu/s,l.config=function(u,h){return r(e,u,h)},l},Lu=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:dg(i);return n.config=function(s){return r(e,s)},n};Ot("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Or(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})}),we.Linear.easeNone=we.none=we.Linear.easeIn,Or("Elastic",zu("in"),zu("out"),zu()),function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Or("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),Or("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),Or("Circ",function(r){return-(Mm(1-r*r)-1)}),Or("Sine",function(r){return r===1?1:-mw(r*fw)+1}),Or("Back",Lu("in"),Lu("out"),Lu()),we.SteppedEase=we.steps=Vt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((n*fs(0,o,a)|0)+s)*i}}},mn.ease=we["quad.out"],Ot("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Iu+=r+","+r+"Params,"});var fg=function(e,t){this.id=pw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zm,this.set=t?t.getSetter:Wu},xs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vn(this,+t.duration,1,1),this.data=t.data,Xe&&(this._ctx=Xe,Xe.data.push(this)),_s||jt.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,vn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(bn(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ho(this,i),!s._dp||s.parent||jm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===bt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Lm(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Wm(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Wm(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?xn(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?$o(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(fs(-Math.abs(this._delay),this._tDur,s),n!==!1),Vo(this),ww(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&bi(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(It(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$o(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=vw);var n=yt;return yt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yt=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,qm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,qm(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(ei(this,i),It(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,It(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-bt)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(s){var o=Qe(i)?i:$m,a=function(){var u=n.then;n.then=null,Qe(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=u),s(o),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){ms(this)},r}();Jt(xs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Pt=function(r){Em(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=It(i.sortChildren),Ke&&bi(i.parent||Ke,zi(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Xm(zi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return ds(0,arguments,this),this},t.from=function(n,s,o){return ds(1,arguments,this),this},t.fromTo=function(n,s,o,a){return ds(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,cs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rt(n,s,ei(this,o),1),this},t.call=function(n,s,o){return bi(this,rt.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,a,l,u,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new rt(n,o,ei(this,l)),this},t.staggerFrom=function(n,s,o,a,l,u,h){return o.runBackwards=1,cs(o).immediateRender=It(o.immediateRender),this.staggerTo(n,s,o,a,l,u,h)},t.staggerFromTo=function(n,s,o,a,l,u,h,c){return a.startAt=o,cs(a).immediateRender=It(a.immediateRender),this.staggerTo(n,s,a,l,u,h,c)},t.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=n<=0?0:ct(n),c=this._zTime<0!=n<0&&(this._initted||!u),d,f,g,m,_,y,S,w,P,E,U,B;if(this!==Ke&&h>l&&n>=0&&(h=l),h!==this._tTime||o||c){if(a!==this._time&&u&&(h+=this._time-a,n+=this._time-a),d=h,P=this._start,w=this._ts,y=!w,c&&(u||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(U=this._yoyo,_=u+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,s,o);if(d=ct(h%_),h===l?(m=this._repeat,d=u):(m=~~(h/_),m&&m===h/_&&(d=u,m--),d>u&&(d=u)),E=xn(this._tTime,_),!a&&this._tTime&&E!==m&&this._tTime-E*_-this._dur<=0&&(E=m),U&&m&1&&(d=u-d,B=1),m!==E&&!this._lock){var k=U&&E&1,R=k===(U&&m&1);if(m<E&&(k=!k),a=k?0:h%u?u:h,this._lock=1,this.render(a||(B?0:ct(m*_)),s,!u)._lock=0,this._tTime=h,!s&&this.parent&&Wt(this,"onRepeat"),this.vars.repeatRefresh&&!B&&(this.invalidate()._lock=1),a&&a!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,R&&(this._lock=2,a=k?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!B&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;cg(this,B)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Aw(this,ct(a),ct(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&d&&!s&&!m&&(Wt(this,"onStart"),this._tTime!==h))return this;if(d>=a&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!y){S=0,g&&(h+=this._zTime=-1e-8);break}}f=g}else{f=this._last;for(var G=n<0?n:d;f;){if(g=f._prev,(f._act||G<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(G-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(G-f._start)*f._ts,s,o||yt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!y){S=0,g&&(h+=this._zTime=G?-1e-8:bt);break}}f=g}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=P,Vo(this),this.render(n,s,o);this._onUpdate&&!s&&Wt(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(P===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((n||!u)&&(h===l&&this._ts>0||!h&&this._ts<0)&&tr(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(Wt(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(Li(s)||(s=ei(this,s,n)),!(n instanceof xs)){if(St(n))return n.forEach(function(a){return o.add(a,s)}),this;if(ht(n))return this.addLabel(n,s);if(Qe(n))n=rt.delayedCall(0,n);else return this}return this!==n?bi(this,n,s):this},t.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof rt?s&&l.push(u):(o&&l.push(u),n&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return ht(n)?this.removeLabel(n):Qe(n)?this.killTweensOf(n):(No(this,n),n===this._recent&&(this._recent=this._last),Rr(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(jt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=ei(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var a=rt.delayedCall(0,s||hs,o);return a.data="isPause",this._hasPause=1,bi(this,a,ei(this,n))},t.removePause=function(n){var s=this._first;for(n=ei(this,n);s;)s._start===n&&s.data==="isPause"&&tr(s),s=s._next},t.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],a=ti(n),l=this._first,u=Li(s),h;l;)l instanceof rt?yw(l._targets,a)&&(u?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,a=ei(o,n),l=s,u=l.startAt,h=l.onStart,c=l.onStartParams,d=l.immediateRender,f,g=rt.to(o,Jt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!f){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==_&&vn(g,_,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,c||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,Jt({startAt:{time:ei(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),rg(this,ei(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),rg(this,ei(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=n);return Rr(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Rr(this)},t.totalDuration=function(n){var s=0,o=this,a=o._last,l=xi,u,h,c;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(c=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,bi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!c&&!o._dp||c&&c.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;vn(o,o===Ke&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Ke._ts&&(Lm(Ke,$o(n,Ke)),Dm=jt.frame),jt.frame>=Gm){Gm+=$t.autoSleep||120;var s=Ke._first;if((!s||!s._ts)&&$t.autoSleep&&jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jt.sleep()}}},e}(xs);Jt(Pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vw=function(e,t,i,n,s,o,a){var l=new Ft(this._pt,e,t,0,1,vg,null,s),u=0,h=0,c,d,f,g,m,_,y,S;for(l.b=i,l.e=n,i+="",n+="",(y=~n.indexOf("random("))&&(n=ps(n)),o&&(S=[i,n],o(S,e,t),i=S[0],n=S[1]),d=i.match(Tu)||[];c=Tu.exec(n);)g=c[0],m=n.substring(u,c.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(_=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:m||h===1?m:",",s:_,c:g.charAt(1)==="="?_n(_,g)-_:parseFloat(g)-_,m:f&&f<4?Math.round:0},u=Tu.lastIndex);return l.c=u<n.length?n.substring(u,n.length):"",l.fp=a,(Om.test(n)||y)&&(l.e=0),this._pt=l,l},Nu=function(e,t,i,n,s,o,a,l,u,h){Qe(n)&&(n=n(s||0,e,o));var c=e[t],d=i!=="get"?i:Qe(c)?u?e[t.indexOf("set")||!Qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():c,f=Qe(c)?u?Yw:_g:Hu,g;if(ht(n)&&(~n.indexOf("random(")&&(n=ps(n)),n.charAt(1)==="="&&(g=_n(d,n)+(wt(d)||0),(g||g===0)&&(n=g))),!h||d!==n||$u)return!isNaN(d*n)&&n!==""?(g=new Ft(this._pt,e,t,+d||0,n-(d||0),typeof c=="boolean"?Kw:xg,0,f),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!c&&!(t in e)&&Au(t,n),Vw.call(this,e,t,d,n,f,l||$t.stringFilter,u))},Hw=function(e,t,i,n,s){if(Qe(e)&&(e=vs(e,s,t,i,n)),!vi(e)||e.style&&e.nodeType||St(e)||Rm(e))return ht(e)?vs(e,s,t,i,n):e;var o={},a;for(a in e)o[a]=vs(e[a],s,t,i,n);return o},pg=function(e,t,i,n,s,o){var a,l,u,h;if(Ht[e]&&(a=new Ht[e]).init(s,a.rawVars?t[e]:Hw(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Ft(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==yn))for(u=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)u[a._props[h]]=l;return a},nr,$u,Vu=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,u=n.onUpdate,h=n.runBackwards,c=n.yoyoEase,d=n.keyframes,f=n.autoRevert,g=e._dur,m=e._startAt,_=e._targets,y=e.parent,S=y&&y.data==="nested"?y.vars.targets:_,w=e._overwrite==="auto"&&!vu,P=e.timeline,E,U,B,k,R,G,Q,ee,W,j,J,T,C;if(P&&(!d||!s)&&(s="none"),e._ease=Ir(s,mn.ease),e._yEase=c?hg(Ir(c===!0?s:c,mn.ease)):0,c&&e._yoyo&&!e._repeat&&(c=e._yEase,e._yEase=e._ease,e._ease=c),e._from=!P&&!!n.runBackwards,!P||d&&!n.stagger){if(ee=_[0]?Er(_[0]).harness:0,T=ee&&n[ee.prop],E=Lo(n,Eu),m&&(m._zTime<0&&m.progress(1),t<0&&h&&a&&!f?m.render(-1,!0):m.revert(h&&g?Do:xw),m._lazy=0),o){if(tr(e._startAt=rt.set(_,Jt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!m&&It(l),startAt:null,delay:0,onUpdate:u&&function(){return Wt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yt||!a&&!f)&&e._startAt.revert(Do),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&g&&!m){if(t&&(a=!1),B=Jt({overwrite:!1,data:"isFromStart",lazy:a&&!m&&It(l),immediateRender:a,stagger:0,parent:y},E),T&&(B[ee.prop]=T),tr(e._startAt=rt.set(_,B)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yt?e._startAt.revert(Do):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&It(l)||l&&!g,U=0;U<_.length;U++){if(R=_[U],Q=R._gsap||Ou(_)[U]._gsap,e._ptLookup[U]=j={},Mu[Q.id]&&er.length&&zo(),J=S===_?U:S.indexOf(R),ee&&(W=new ee).init(R,T||E,e,J,S)!==!1&&(e._pt=k=new Ft(e._pt,R,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(A){j[A]=k}),W.priority&&(G=1)),!ee||T)for(B in E)Ht[B]&&(W=pg(B,E,e,J,R,S))?W.priority&&(G=1):j[B]=k=Nu.call(e,R,B,"get",E[B],J,S,0,n.stringFilter);e._op&&e._op[U]&&e.kill(R,e._op[U]),w&&e._pt&&(nr=e,Ke.killTweensOf(R,j,e.globalTime(t)),C=!e.parent,nr=0),e._pt&&l&&(Mu[Q.id]=1)}G&&yg(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!C,d&&t<=0&&P.render(xi,!0,!0)},Ww=function(e,t,i,n,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,c,d,f;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return $u=1,e.vars[t]="+=0",Vu(e,a),$u=0,l?us(t+" not eligible for reset"):1;u.push(h)}for(f=u.length;f--;)c=u[f],h=c._pt||c,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,c.e&&(c.e=tt(i)+wt(c.e)),c.b&&(c.b=h.s+wt(c.b))},jw=function(e,t){var i=e[0]?Er(e[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return t;s=Mr({},t);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xw=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,a;if(St(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},vs=function(e,t,i,n,s){return Qe(e)?e.call(t,i,n,s):ht(e)&&~e.indexOf("random(")?ps(e):e},mg=Iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gg={};Ot(mg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return gg[r]=1});var rt=function(r){Em(e,r);function e(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:cs(n))||this;var l=a.vars,u=l.duration,h=l.delay,c=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,m=l.defaults,_=l.scrollTrigger,y=l.yoyoEase,S=n.parent||Ke,w=(St(i)||Rm(i)?Li(i[0]):"length"in n)?[i]:ti(i),P,E,U,B,k,R,G,Q;if(a._targets=w.length?Ou(w):us("GSAP target "+i+" not found. https://gsap.com",!$t.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||ko(u)||ko(h)){if(n=a.vars,P=a.timeline=new Pt({data:"nested",defaults:m||{},targets:S&&S.data==="nested"?S.vars.targets:w}),P.kill(),P.parent=P._dp=zi(a),P._start=0,d||ko(u)||ko(h)){if(B=w.length,G=d&&Qm(d),vi(d))for(k in d)~mg.indexOf(k)&&(Q||(Q={}),Q[k]=d[k]);for(E=0;E<B;E++)U=Lo(n,gg),U.stagger=0,y&&(U.yoyoEase=y),Q&&Mr(U,Q),R=w[E],U.duration=+vs(u,zi(a),E,R,w),U.delay=(+vs(h,zi(a),E,R,w)||0)-a._delay,!d&&B===1&&U.delay&&(a._delay=h=U.delay,a._start+=h,U.delay=0),P.to(R,U,G?G(E,R,w):0),P._ease=we.none;P.duration()?u=h=0:a.timeline=0}else if(g){cs(Jt(P.vars.defaults,{ease:"none"})),P._ease=Ir(g.ease||n.ease||"none");var ee=0,W,j,J;if(St(g))g.forEach(function(T){return P.to(w,T,">")}),P.duration();else{U={};for(k in g)k==="ease"||k==="easeEach"||Xw(k,g[k],U,g.easeEach);for(k in U)for(W=U[k].sort(function(T,C){return T.t-C.t}),ee=0,E=0;E<W.length;E++)j=W[E],J={ease:j.e,duration:(j.t-(E?W[E-1].t:0))/100*u},J[k]=j.v,P.to(w,J,ee),ee+=J.duration;P.duration()<u&&P.to({},{duration:u-P.duration()})}}u||a.duration(u=P.duration())}else a.timeline=0;return f===!0&&!vu&&(nr=zi(a),Ke.killTweensOf(w),nr=0),bi(S,zi(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(c||!u&&!g&&a._start===ct(S._time)&&It(c)&&Tw(zi(a))&&S.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),_&&Xm(zi(a),_),a}var t=e.prototype;return t.render=function(n,s,o){var a=this._time,l=this._tDur,u=this._dur,h=n<0,c=n>l-bt&&!h?l:n<bt?0:n,d,f,g,m,_,y,S,w,P;if(!u)Pw(this,n,s,o);else if(c!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=c,w=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+n,s,o);if(d=ct(c%m),c===l?(g=this._repeat,d=u):(g=~~(c/m),g&&g===ct(c/m)&&(d=u,g--),d>u&&(d=u)),y=this._yoyo&&g&1,y&&(P=this._yEase,d=u-d),_=xn(this._tTime,m),d===a&&!o&&this._initted&&g===_)return this._tTime=c,this;g!==_&&(w&&this._yEase&&cg(w,y),this.vars.repeatRefresh&&!y&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(ct(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ym(this,h?n:d,o,s,c))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(u!==this._dur)return this.render(n,s,o)}if(this._tTime=c,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(P||this._ease)(d/u),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!g&&(Wt(this,"onStart"),this._tTime!==c))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;w&&w.render(n<0?n:w._dur*w._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&Fu(this,n,s,o),Wt(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&Wt(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(h&&!this._onUpdate&&Fu(this,n,!0,!0),(n||!u)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&tr(this,1),!s&&!(h&&!a)&&(c||a||y)&&(Wt(this,c===l?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,a,l){_s||jt.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vu(this,u),h=this._ease(u/this._dur),Ww(this,n,s,o,a,h,u,l)?this.resetTo(n,s,o,a,1):(Ho(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ms(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,nr&&nr.vars.overwrite!==!0)._first||ms(this),this.parent&&o!==this.timeline.totalDuration()&&vn(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?ti(n):a,u=this._ptLookup,h=this._pt,c,d,f,g,m,_,y;if((!s||s==="all")&&Sw(a,l))return s==="all"&&(this._pt=0),ms(this);for(c=this._op=this._op||[],s!=="all"&&(ht(s)&&(m={},Ot(s,function(S){return m[S]=1}),s=m),s=jw(a,s)),y=a.length;y--;)if(~l.indexOf(a[y])){d=u[y],s==="all"?(c[y]=s,g=d,f={}):(f=c[y]=c[y]||{},g=s);for(m in g)_=d&&d[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&No(this,_,"_pt"),delete d[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&h&&ms(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return ds(1,arguments)},e.delayedCall=function(n,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,s,o){return ds(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return Ke.killTweensOf(n,s,o)},e}(xs);Jt(rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Ot("staggerTo,staggerFrom,staggerFromTo",function(r){rt[r]=function(){var e=new Pt,t=ku.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Hu=function(e,t,i){return e[t]=i},_g=function(e,t,i){return e[t](i)},Yw=function(e,t,i,n){return e[t](n.fp,i)},qw=function(e,t,i){return e.setAttribute(t,i)},Wu=function(e,t){return Qe(e[t])?_g:bu(e[t])&&e.setAttribute?qw:Hu},xg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Kw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vg=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},ju=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Zw=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},Qw=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?No(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Jw=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},yg=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},Ft=function(){function r(t,i,n,s,o,a,l,u,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||xg,this.d=l||this,this.set=u||Hu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=Jw,this.m=i,this.mt=s,this.tween=n},r}();Ot(Iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Eu[r]=1}),Vt.TweenMax=Vt.TweenLite=rt,Vt.TimelineLite=Vt.TimelineMax=Pt,Ke=new Pt({sortChildren:!1,defaults:mn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),$t.stringFilter=ug;var Fr=[],Wo={},eT=[],bg=0,tT=0,Xu=function(e){return(Wo[e]||eT).map(function(t){return t()})},Yu=function(){var e=Date.now(),t=[];e-bg>2&&(Xu("matchMediaInit"),Fr.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,u;for(a in n)o=yi.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Xu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),bg=e,Xu("matchMedia"))},Sg=function(){function r(t,i){this.selector=i&&Uu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=tT++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){Qe(i)&&(s=n,n=i,i=Qe);var o=this,a=function(){var u=Xe,h=o.selector,c;return u&&u!==o&&u.data.push(o),s&&(o.selector=Uu(s)),Xe=o,c=n.apply(o,arguments),Qe(c)&&o._r.push(c),Xe=u,o.selector=h,o.isReverted=!1,c};return o.last=a,i===Qe?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=Xe;Xe=null,i(this),Xe=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof rt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,c){return c.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Pt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof rt)&&u.revert&&u.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=Fr.length;o--;)Fr[o].id===this.id&&Fr.splice(o,1)},e.revert=function(i){this.kill(i||{})},r}(),iT=function(){function r(t){this.contexts=[],this.scope=t,Xe&&Xe.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){vi(i)||(i={matches:i});var o=new Sg(0,s||this.scope),a=o.conditions={},l,u,h;Xe&&!o.selector&&(o.selector=Xe.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(u in i)u==="all"?h=1:(l=yi.matchMedia(i[u]),l&&(Fr.indexOf(o)<0&&Fr.push(o),(a[u]=l.matches)&&(h=1),l.addListener?l.addListener(Yu):l.addEventListener("change",Yu)));return h&&n(o,function(c){return o.add(null,c)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),jo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return sg(n)})},timeline:function(e){return new Pt(e)},getTweensOf:function(e,t){return Ke.getTweensOf(e,t)},getProperty:function(e,t,i,n){ht(e)&&(e=ti(e)[0]);var s=Er(e||{}).get,o=i?$m:Nm;return i==="native"&&(i=""),e&&(t?o((Ht[t]&&Ht[t].get||s)(e,t,i,n)):function(a,l,u){return o((Ht[a]&&Ht[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ti(e),e.length>1){var n=e.map(function(h){return dt.quickSetter(h,t,i)}),s=n.length;return function(h){for(var c=s;c--;)n[c](h)}}e=e[0]||{};var o=Ht[t],a=Er(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(h){var c=new o;yn._pt=0,c.init(e,i?h+i:h,yn,0,[e]),c.render(1,c),yn._pt&&ju(1,yn)}:a.set(e,l);return o?u:function(h){return u(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,s=dt.to(e,Mr((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),o=function(l,u,h){return s.resetTo(t,l,u,h)};return o.tween=s,o},isTweening:function(e){return Ke.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ir(e.ease,mn.ease)),Vm(mn,e||{})},config:function(e){return Vm($t,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Ht[a]&&!Vt[a]&&us(t+" effect requires "+a+" plugin.")}),Ru[t]=function(a,l,u){return i(ti(a),Jt(l||{},s),u)},o&&(Pt.prototype[t]=function(a,l,u){return this.add(Ru[t](a,vi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){we[e]=Ir(t)},parseEase:function(e,t){return arguments.length?Ir(e,t):we},getById:function(e){return Ke.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Pt(e),n,s;for(i.smoothChildTiming=It(e.smoothChildTiming),Ke.remove(i),i._dp=0,i._time=i._tTime=Ke._time,n=Ke._first;n;)s=n._next,(t||!(!n._dur&&n instanceof rt&&n.vars.onComplete===n._targets[0]))&&bi(i,n,n._start-n._delay),n=s;return bi(Ke,i,0),i},context:function(e,t){return e?new Sg(e,t):Xe},matchMedia:function(e){return new iT(e)},matchMediaRefresh:function(){return Fr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Yu()},addEventListener:function(e,t){var i=Wo[e]||(Wo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Wo[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Bw,wrapYoyo:kw,distribute:Qm,random:eg,snap:Jm,normalize:Fw,getUnit:wt,clamp:Mw,splitColor:og,toArray:ti,selector:Uu,mapRange:ig,pipe:Iw,unitize:Ow,interpolate:Uw,shuffle:Zm},install:km,effects:Ru,ticker:jt,updateRoot:Pt.updateRoot,plugins:Ht,globalTimeline:Ke,core:{PropTween:Ft,globals:Um,Tween:rt,Timeline:Pt,Animation:xs,getCache:Er,_removeLinkedListItem:No,reverting:function(){return yt},context:function(e){return e&&Xe&&(Xe.data.push(e),e._ctx=Xe),Xe},suppressOverwrites:function(e){return vu=e}}};Ot("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return jo[r]=rt[r]}),jt.add(Pt.updateRoot),yn=jo.to({},{duration:0});var rT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},nT=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=rT(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},qu=function(e,t){return{name:e,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,u;if(ht(s)&&(l={},Ot(s,function(h){return l[h]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}nT(a,s)}}}},dt=jo.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},qu("roundProps",Du),qu("modifiers"),qu("snap",Jm))||jo;rt.version=Pt.version=dt.version="3.12.5",Bm=1,Su()&&bn(),we.Power0,we.Power1,we.Power2,we.Power3,we.Power4,we.Linear,we.Quad,we.Cubic,we.Quart,we.Quint,we.Strong,we.Elastic,we.Back,we.SteppedEase,we.Bounce,we.Sine,we.Expo,we.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wg,sr,Sn,Ku,Br,Tg,Zu,sT=function(){return typeof window<"u"},Ni={},kr=180/Math.PI,wn=Math.PI/180,Tn=Math.atan2,Cg=1e8,Qu=/([A-Z])/g,oT=/(left|right|width|margin|padding|x)/i,aT=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ju=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Pg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ag=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cT=function(e,t,i){return e.style[t]=i},dT=function(e,t,i){return e.style.setProperty(t,i)},fT=function(e,t,i){return e._gsap[t]=i},pT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},mT=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},gT=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ze="transform",Bt=Ze+"Origin",_T=function r(e,t){var i=this,n=this.target,s=n.style,o=n._gsap;if(e in Ni&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=$i(n,a)}):this.tfm[e]=o.x?o[e]:$i(n,e),e===Bt&&(this.tfm.zOrigin=o.zOrigin);else return Si.transform.split(",").forEach(function(a){return r.call(i,a,t)});if(this.props.indexOf(Ze)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Bt,t,"")),e=Ze}(s||t)&&this.props.push(e,t,s[e])},Eg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xT=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zu(),(!s||!s.isStart)&&!i[Ze]&&(Eg(i),n.zOrigin&&i[Bt]&&(i[Bt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Mg=function(e,t){var i={target:e,props:[],revert:xT,save:_T};return e._gsap||dt.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},Rg,eh=function(e,t){var i=sr.createElementNS?sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):sr.createElement(e);return i&&i.style?i:sr.createElement(e)},wi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Qu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Cn(t)||t,1)||""},Ig="O,Moz,ms,Ms,Webkit".split(","),Cn=function(e,t,i){var n=t||Br,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ig[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ig[o]:"")+e},th=function(){sT()&&window.document&&(wg=window,sr=wg.document,Sn=sr.documentElement,Br=eh("div")||{style:{}},eh("div"),Ze=Cn(Ze),Bt=Ze+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rg=!!Cn("perspective"),Zu=dt.core.reverting,Ku=1)},ih=function r(e){var t=eh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(Sn.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Sn.removeChild(t),this.style.cssText=s,o},Og=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Fg=function(e){var t;try{t=e.getBBox()}catch{t=ih.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ih||(t=ih.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Og(e,["x","cx","x1"])||0,y:+Og(e,["y","cy","y1"])||0,width:0,height:0}:t},Bg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Fg(e))},Ur=function(e,t){if(t){var i=e.style,n;t in Ni&&t!==Bt&&(t=Ze),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Qu,"-$1").toLowerCase())):i.removeAttribute(t)}},or=function(e,t,i,n,s,o){var a=new Ft(e._pt,t,i,0,1,o?Ag:Pg);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},kg={deg:1,rad:1,turn:1},vT={grid:1,flex:1},ar=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Br.style,l=oT.test(t),u=e.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(l?"Width":"Height"),c=100,d=n==="px",f=n==="%",g,m,_,y;if(n===o||!s||kg[n]||kg[o])return s;if(o!=="px"&&!d&&(s=r(e,t,i,"px")),y=e.getCTM&&Bg(e),(f||o==="%")&&(Ni[t]||~t.indexOf("adius")))return g=y?e.getBBox()[l?"width":"height"]:e[h],tt(f?s/g*c:s/100*g);if(a[l?"width":"height"]=c+(d?o:n),m=~t.indexOf("adius")||n==="em"&&e.appendChild&&!u?e:e.parentNode,y&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===sr||!m.appendChild)&&(m=sr.body),_=m._gsap,_&&f&&_.width&&l&&_.time===jt.time&&!_.uncache)return tt(s/_.width*c);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=c+n,g=e[h],S?e.style[t]=S:Ur(e,t)}else(f||o==="%")&&!vT[wi(m,"display")]&&(a.position=wi(e,"position")),m===e&&(a.position="static"),m.appendChild(Br),g=Br[h],m.removeChild(Br),a.position="absolute";return l&&f&&(_=Er(m),_.time=jt.time,_.width=m[h]),tt(d?g*s/c:g&&s?c/g*s:0)},$i=function(e,t,i,n){var s;return Ku||th(),t in Si&&t!=="transform"&&(t=Si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ni[t]&&t!=="transform"?(s=bs(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yo(wi(e,Bt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Xo[t]&&Xo[t](e,t,i)||wi(e,t)||zm(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ar(e,t,s,i)+i:s},yT=function(e,t,i,n){if(!i||i==="none"){var s=Cn(t,e,1),o=s&&wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var a=new Ft(this._pt,e.style,t,0,1,vg),l=0,u=0,h,c,d,f,g,m,_,y,S,w,P,E;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(m=e.style[t],e.style[t]=n,n=wi(e,t)||n,m?e.style[t]=m:Ur(e,t)),h=[i,n],ug(h),i=h[0],n=h[1],d=i.match(gn)||[],E=n.match(gn)||[],E.length){for(;c=gn.exec(n);)_=c[0],S=n.substring(l,c.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),_!==(m=d[u++]||"")&&(f=parseFloat(m)||0,P=m.substr((f+"").length),_.charAt(1)==="="&&(_=_n(f,_)+P),y=parseFloat(_),w=_.substr((y+"").length),l=gn.lastIndex-w.length,w||(w=w||$t.units[t]||P,l===n.length&&(n+=w,a.e+=w)),P!==w&&(f=ar(e,t,m,w)||0),a._pt={_next:a._pt,p:S||u===1?S:",",s:f,c:y-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?Ag:Pg;return Om.test(n)&&(a.e=0),this._pt=a,a},Ug={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bT=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Ug[i]||i,t[1]=Ug[n]||n,t.join(" ")},ST=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Ni[a]&&(l=1,a=a==="transformOrigin"?Bt:Ze),Ur(i,a);l&&(Ur(i,Ze),o&&(o.svg&&i.removeAttribute("transform"),bs(i,1),o.uncache=1,Eg(n)))}},Xo={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new Ft(e._pt,t,i,0,0,ST);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},ys=[1,0,0,1,0,0],Dg={},Gg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zg=function(e){var t=wi(e,Ze);return Gg(t)?ys:t.substr(7).match(Im).map(tt)},rh=function(e,t){var i=e._gsap||Er(e),n=e.style,s=zg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ys:s):(s===ys&&!e.offsetParent&&e!==Sn&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Sn.appendChild(e)),s=zg(e),l?n.display=l:Ur(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Sn.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nh=function(e,t,i,n,s,o){var a=e._gsap,l=s||rh(e,!0),u=a.xOrigin||0,h=a.yOrigin||0,c=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],m=l[2],_=l[3],y=l[4],S=l[5],w=t.split(" "),P=parseFloat(w[0])||0,E=parseFloat(w[1])||0,U,B,k,R;i?l!==ys&&(B=f*_-g*m)&&(k=P*(_/B)+E*(-m/B)+(m*S-_*y)/B,R=P*(-g/B)+E*(f/B)-(f*S-g*y)/B,P=k,E=R):(U=Fg(e),P=U.x+(~w[0].indexOf("%")?P/100*U.width:P),E=U.y+(~(w[1]||w[0]).indexOf("%")?E/100*U.height:E)),n||n!==!1&&a.smooth?(y=P-u,S=E-h,a.xOffset=c+(y*f+S*m)-y,a.yOffset=d+(y*g+S*_)-S):a.xOffset=a.yOffset=0,a.xOrigin=P,a.yOrigin=E,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[Bt]="0px 0px",o&&(or(o,a,"xOrigin",u,P),or(o,a,"yOrigin",h,E),or(o,a,"xOffset",c,a.xOffset),or(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",P+" "+E)},bs=function(e,t){var i=e._gsap||new fg(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=wi(e,Bt)||"0",h,c,d,f,g,m,_,y,S,w,P,E,U,B,k,R,G,Q,ee,W,j,J,T,C,A,I,F,z,D,V,K,q;return h=c=d=m=_=y=S=w=P=0,f=g=1,i.svg=!!(e.getCTM&&Bg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ze]!=="none"?l[Ze]:"")),n.scale=n.rotate=n.translate="none"),B=rh(e,i.svg),i.svg&&(i.uncache?(A=e.getBBox(),u=i.xOrigin-A.x+"px "+(i.yOrigin-A.y)+"px",C=""):C=!t&&e.getAttribute("data-svg-origin"),nh(e,C||u,!!C||i.originIsAbsolute,i.smooth!==!1,B)),E=i.xOrigin||0,U=i.yOrigin||0,B!==ys&&(Q=B[0],ee=B[1],W=B[2],j=B[3],h=J=B[4],c=T=B[5],B.length===6?(f=Math.sqrt(Q*Q+ee*ee),g=Math.sqrt(j*j+W*W),m=Q||ee?Tn(ee,Q)*kr:0,S=W||j?Tn(W,j)*kr+m:0,S&&(g*=Math.abs(Math.cos(S*wn))),i.svg&&(h-=E-(E*Q+U*W),c-=U-(E*ee+U*j))):(q=B[6],V=B[7],F=B[8],z=B[9],D=B[10],K=B[11],h=B[12],c=B[13],d=B[14],k=Tn(q,D),_=k*kr,k&&(R=Math.cos(-k),G=Math.sin(-k),C=J*R+F*G,A=T*R+z*G,I=q*R+D*G,F=J*-G+F*R,z=T*-G+z*R,D=q*-G+D*R,K=V*-G+K*R,J=C,T=A,q=I),k=Tn(-W,D),y=k*kr,k&&(R=Math.cos(-k),G=Math.sin(-k),C=Q*R-F*G,A=ee*R-z*G,I=W*R-D*G,K=j*G+K*R,Q=C,ee=A,W=I),k=Tn(ee,Q),m=k*kr,k&&(R=Math.cos(k),G=Math.sin(k),C=Q*R+ee*G,A=J*R+T*G,ee=ee*R-Q*G,T=T*R-J*G,Q=C,J=A),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,y=180-y),f=tt(Math.sqrt(Q*Q+ee*ee+W*W)),g=tt(Math.sqrt(T*T+q*q)),k=Tn(J,T),S=Math.abs(k)>2e-4?k*kr:0,P=K?1/(K<0?-K:K):0),i.svg&&(C=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Gg(wi(e,Ze)),C&&e.setAttribute("transform",C))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=c-((i.yPercent=c&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-c)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=tt(f),i.scaleY=tt(g),i.rotation=tt(m)+a,i.rotationX=tt(_)+a,i.rotationY=tt(y)+a,i.skewX=S+a,i.skewY=w+a,i.transformPerspective=P+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Bt]=Yo(u)),i.xOffset=i.yOffset=0,i.force3D=$t.force3D,i.renderTransform=i.svg?TT:Rg?Lg:wT,i.uncache=0,i},Yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},sh=function(e,t,i){var n=wt(t);return tt(parseFloat(t)+parseFloat(ar(e,"x",i+"px",n)))+n},wT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lg(e,t)},Dr="0deg",Ss="0px",Gr=") ",Lg=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,h=i.rotationY,c=i.rotationX,d=i.skewX,f=i.skewY,g=i.scaleX,m=i.scaleY,_=i.transformPerspective,y=i.force3D,S=i.target,w=i.zOrigin,P="",E=y==="auto"&&e&&e!==1||y===!0;if(w&&(c!==Dr||h!==Dr)){var U=parseFloat(h)*wn,B=Math.sin(U),k=Math.cos(U),R;U=parseFloat(c)*wn,R=Math.cos(U),o=sh(S,o,B*R*-w),a=sh(S,a,-Math.sin(U)*-w),l=sh(S,l,k*R*-w+w)}_!==Ss&&(P+="perspective("+_+Gr),(n||s)&&(P+="translate("+n+"%, "+s+"%) "),(E||o!==Ss||a!==Ss||l!==Ss)&&(P+=l!==Ss||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gr),u!==Dr&&(P+="rotate("+u+Gr),h!==Dr&&(P+="rotateY("+h+Gr),c!==Dr&&(P+="rotateX("+c+Gr),(d!==Dr||f!==Dr)&&(P+="skew("+d+", "+f+Gr),(g!==1||m!==1)&&(P+="scale("+g+", "+m+Gr),S.style[Ze]=P||"translate(0, 0)"},TT=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,h=i.skewY,c=i.scaleX,d=i.scaleY,f=i.target,g=i.xOrigin,m=i.yOrigin,_=i.xOffset,y=i.yOffset,S=i.forceCSS,w=parseFloat(o),P=parseFloat(a),E,U,B,k,R;l=parseFloat(l),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,l+=h),l||u?(l*=wn,u*=wn,E=Math.cos(l)*c,U=Math.sin(l)*c,B=Math.sin(l-u)*-d,k=Math.cos(l-u)*d,u&&(h*=wn,R=Math.tan(u-h),R=Math.sqrt(1+R*R),B*=R,k*=R,h&&(R=Math.tan(h),R=Math.sqrt(1+R*R),E*=R,U*=R)),E=tt(E),U=tt(U),B=tt(B),k=tt(k)):(E=c,k=d,U=B=0),(w&&!~(o+"").indexOf("px")||P&&!~(a+"").indexOf("px"))&&(w=ar(f,"x",o,"px"),P=ar(f,"y",a,"px")),(g||m||_||y)&&(w=tt(w+g-(g*E+m*B)+_),P=tt(P+m-(g*U+m*k)+y)),(n||s)&&(R=f.getBBox(),w=tt(w+n/100*R.width),P=tt(P+s/100*R.height)),R="matrix("+E+","+U+","+B+","+k+","+w+","+P+")",f.setAttribute("transform",R),S&&(f.style[Ze]=R)},CT=function(e,t,i,n,s){var o=360,a=ht(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?kr:1),u=l-n,h=n+u+"deg",c,d;return a&&(c=s.split("_")[1],c==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-360)),c==="cw"&&u<0?u=(u+o*Cg)%o-~~(u/o)*o:c==="ccw"&&u>0&&(u=(u-o*Cg)%o-~~(u/o)*o)),e._pt=d=new Ft(e._pt,t,i,n,u,lT),d.e=h,d.u="deg",e._props.push(i),d},Ng=function(e,t){for(var i in t)e[i]=t[i];return e},PT=function(e,t,i){var n=Ng({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,h,c,d,f,g;n.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ze]=t,a=bs(i,1),Ur(i,Ze),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ze],o[Ze]=t,a=bs(i,1),o[Ze]=u);for(l in Ni)u=n[l],h=a[l],u!==h&&s.indexOf(l)<0&&(f=wt(u),g=wt(h),c=f!==g?ar(i,l,u,g):parseFloat(u),d=parseFloat(h),e._pt=new Ft(e._pt,a,l,c,d-c,Ju),e._pt.u=g||0,e._props.push(l));Ng(a,n)};Ot("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?r+a:"border"+a+r});Xo[e>1?"border"+r:r]=function(a,l,u,h,c){var d,f;if(arguments.length<4)return d=o.map(function(g){return $i(a,g,u)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,m){return f[g]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(l,f,c)}});var $g={name:"css",register:th,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,a=e.style,l=i.vars.startAt,u,h,c,d,f,g,m,_,y,S,w,P,E,U,B,k;Ku||th(),this.styles=this.styles||Mg(e),k=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(h=t[m],!(Ht[m]&&pg(m,t,i,n,e,s)))){if(f=typeof h,g=Xo[m],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ps(h)),g)g(this,e,m,h,i)&&(B=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),h+="",rr.lastIndex=0,rr.test(u)||(_=wt(u),y=wt(h)),y?_!==y&&(u=ar(e,m,u,y)+y):_&&(h+=_),this.add(a,"setProperty",u,h,n,s,0,0,m),o.push(m),k.push(m,0,a[m]);else if(f!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,n,e,s):l[m],ht(u)&&~u.indexOf("random(")&&(u=ps(u)),wt(u+"")||u==="auto"||(u+=$t.units[m]||wt($i(e,m))||""),(u+"").charAt(1)==="="&&(u=$i(e,m))):u=$i(e,m),d=parseFloat(u),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),c=parseFloat(h),m in Si&&(m==="autoAlpha"&&(d===1&&$i(e,"visibility")==="hidden"&&c&&(d=0),k.push("visibility",0,a.visibility),or(this,a,"visibility",d?"inherit":"hidden",c?"inherit":"hidden",!c)),m!=="scale"&&m!=="transform"&&(m=Si[m],~m.indexOf(",")&&(m=m.split(",")[0]))),w=m in Ni,w){if(this.styles.save(m),P||(E=e._gsap,E.renderTransform&&!t.parseTransform||bs(e,t.parseTransform),U=t.smoothOrigin!==!1&&E.smooth,P=this._pt=new Ft(this._pt,a,Ze,0,1,E.renderTransform,E,0,-1),P.dep=1),m==="scale")this._pt=new Ft(this._pt,E,"scaleY",E.scaleY,(S?_n(E.scaleY,S+c):c)-E.scaleY||0,Ju),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){k.push(Bt,0,a[Bt]),h=bT(h),E.svg?nh(e,h,0,U,0,this):(y=parseFloat(h.split(" ")[2])||0,y!==E.zOrigin&&or(this,E,"zOrigin",E.zOrigin,y),or(this,a,m,Yo(u),Yo(h)));continue}else if(m==="svgOrigin"){nh(e,h,1,U,0,this);continue}else if(m in Dg){CT(this,E,m,d,S?_n(d,S+h):h);continue}else if(m==="smoothOrigin"){or(this,E,"smooth",E.smooth,h);continue}else if(m==="force3D"){E[m]=h;continue}else if(m==="transform"){PT(this,h,e);continue}}else m in a||(m=Cn(m)||m);if(w||(c||c===0)&&(d||d===0)&&!aT.test(h)&&m in a)_=(u+"").substr((d+"").length),c||(c=0),y=wt(h)||(m in $t.units?$t.units[m]:_),_!==y&&(d=ar(e,m,u,y)),this._pt=new Ft(this._pt,w?E:a,m,d,(S?_n(d,S+c):c)-d,!w&&(y==="px"||m==="zIndex")&&t.autoRound!==!1?hT:Ju),this._pt.u=y||0,_!==y&&y!=="%"&&(this._pt.b=u,this._pt.r=uT);else if(m in a)yT.call(this,e,m,u,S?S+h:h);else if(m in e)this.add(e,m,u||e[m],S?S+h:h,n,s);else if(m!=="parseTransform"){Au(m,h);continue}w||(m in a?k.push(m,0,a[m]):k.push(m,1,u||e[m])),o.push(m)}}B&&yg(this)},render:function(e,t){if(t.tween._time||!Zu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:$i,aliases:Si,getSetter:function(e,t,i){var n=Si[t];return n&&n.indexOf(",")<0&&(t=n),t in Ni&&t!==Bt&&(e._gsap.x||$i(e,"x"))?i&&Tg===i?t==="scale"?pT:fT:(Tg=i||{})&&(t==="scale"?mT:gT):e.style&&!bu(e.style[t])?cT:~t.indexOf("-")?dT:Wu(e,t)},core:{_removeProperty:Ur,_getMatrix:rh}};dt.utils.checkPrefix=Cn,dt.core.getStyleSaver=Mg,function(r,e,t,i){var n=Ot(r+","+e+","+t,function(s){Ni[s]=1});Ot(e,function(s){$t.units[s]="deg",Dg[s]=1}),Si[n[13]]=r+","+e,Ot(i,function(s){var o=s.split(":");Si[o[1]]=n[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Ot("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$t.units[r]="px"}),dt.registerPlugin($g);/*!
 * PixiPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lr,qo,Vg,ii,ws,Hg,oh,Wg=function(){return typeof window<"u"},jg=function(){return lr||Wg()&&(lr=window.gsap)&&lr.registerPlugin&&lr},ah=function(e){return typeof e=="function"},Xg=function(e){return console.warn(e)},AT=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],ur=.212671,Vi=.71516,Ti=.072169,Yg=function(e){return ah(ii[e])?ii[e]:ii.filters[e]},Ko=function(e,t){var i=[],n=0,s=0,o,a;for(o=0;o<4;o++){for(a=0;a<5;a++)s=a===4?e[n+4]:0,i[n+a]=e[n]*t[a]+e[n+1]*t[a+5]+e[n+2]*t[a+10]+e[n+3]*t[a+15]+s;n+=5}return i},qg=function(e,t){var i=1-t,n=i*ur,s=i*Vi,o=i*Ti;return Ko([n+t,s,o,0,0,n,s+t,o,0,0,n,s,o+t,0,0,0,0,0,1,0],e)},Kg=function(e,t,i){var n=qo(t),s=n[0]/255,o=n[1]/255,a=n[2]/255,l=1-i;return Ko([l+i*s*ur,i*s*Vi,i*s*Ti,0,0,i*o*ur,l+i*o*Vi,i*o*Ti,0,0,i*a*ur,i*a*Vi,l+i*a*Ti,0,0,0,0,0,1,0],e)},Zg=function(e,t){t*=Math.PI/180;var i=Math.cos(t),n=Math.sin(t);return Ko([ur+i*(1-ur)+n*-.212671,Vi+i*-.71516+n*-.71516,Ti+i*-.072169+n*(1-Ti),0,0,ur+i*-.212671+n*.143,Vi+i*(1-Vi)+n*.14,Ti+i*-.072169+n*-.283,0,0,ur+i*-.212671+n*-.787329,Vi+i*-.71516+n*Vi,Ti+i*(1-Ti)+n*Ti,0,0,0,0,0,1,0,0,0,0,0,1],e)},Qg=function(e,t){return Ko([t,0,0,0,.5*(1-t),0,t,0,0,.5*(1-t),0,0,t,0,.5*(1-t),0,0,0,1,0],e)},Jg=function(e,t){var i=Yg(t),n=e.filters||[],s=n.length,o;for(i||Xg(t+" not found. PixiPlugin.registerPIXI(PIXI)");--s>-1;)if(n[s]instanceof i)return n[s];return o=new i,t==="BlurFilter"&&(o.blur=0),n.push(o),e.filters=n,o},ft=function(e,t,i,n){t.add(i,e,i[e],n[e]),t._props.push(e)},e_=function(e,t){var i=Yg("ColorMatrixFilter"),n=new i;return n.matrix=t,n.brightness(e,!0),n.matrix},ET=function(e){var t={},i;for(i in e)t[i]=e[i];return t},Xt={contrast:1,saturation:1,colorizeAmount:0,colorize:"rgb(255,255,255)",hue:0,brightness:1},MT=function(e,t,i){var n=Jg(e,"ColorMatrixFilter"),s=e._gsColorMatrixFilter=e._gsColorMatrixFilter||ET(Xt),o=t.combineCMF&&!("colorMatrixFilter"in t&&!t.colorMatrixFilter),a,l,u;for(u=n.matrix,t.resolution&&(n.resolution=t.resolution),t.matrix&&t.matrix.length===u.length?(l=t.matrix,s.contrast!==1&&ft("contrast",i,s,Xt),s.hue&&ft("hue",i,s,Xt),s.brightness!==1&&ft("brightness",i,s,Xt),s.colorizeAmount&&(ft("colorize",i,s,Xt),ft("colorizeAmount",i,s,Xt)),s.saturation!==1&&ft("saturation",i,s,Xt)):(l=AT.slice(),t.contrast!=null?(l=Qg(l,+t.contrast),ft("contrast",i,s,t)):s.contrast!==1&&(o?l=Qg(l,s.contrast):ft("contrast",i,s,Xt)),t.hue!=null?(l=Zg(l,+t.hue),ft("hue",i,s,t)):s.hue&&(o?l=Zg(l,s.hue):ft("hue",i,s,Xt)),t.brightness!=null?(l=e_(+t.brightness,l),ft("brightness",i,s,t)):s.brightness!==1&&(o?l=e_(s.brightness,l):ft("brightness",i,s,Xt)),t.colorize!=null?(t.colorizeAmount="colorizeAmount"in t?+t.colorizeAmount:1,l=Kg(l,t.colorize,t.colorizeAmount),ft("colorize",i,s,t),ft("colorizeAmount",i,s,t)):s.colorizeAmount&&(o?l=Kg(l,s.colorize,s.colorizeAmount):(ft("colorize",i,s,Xt),ft("colorizeAmount",i,s,Xt))),t.saturation!=null?(l=qg(l,+t.saturation),ft("saturation",i,s,t)):s.saturation!==1&&(o?l=qg(l,s.saturation):ft("saturation",i,s,Xt))),a=l.length;--a>-1;)l[a]!==u[a]&&i.add(u,a,u[a],l[a],"colorMatrixFilter");i._props.push("colorMatrixFilter")},RT=function(e,t){var i=t.t,n=t.p,s=t.color,o=t.set;o(i,n,s[0]<<16|s[1]<<8|s[2])},IT=function(e,t){var i=t.g;i&&(i.dirty++,i.clearDirty++)},OT=function(e,t){t.t.visible=!!t.t.alpha},t_=function(e,t,i,n){var s=e[t],o=qo(ah(s)?e[t.indexOf("set")||!ah(e["get"+t.substr(3)])?t:"get"+t.substr(3)]():s),a=qo(i);n._pt=new ws(n._pt,e,t,0,0,RT,{t:e,p:t,color:o,set:Hg(e,t)}),n.add(o,0,o[0],a[0]),n.add(o,1,o[1],a[1]),n.add(o,2,o[2],a[2])},FT={tint:1,lineColor:1,fillColor:1},i_="position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),lh={x:"position",y:"position",tileX:"tilePosition",tileY:"tilePosition"},BT={colorMatrixFilter:1,saturation:1,contrast:1,hue:1,colorize:1,colorizeAmount:1,brightness:1,combineCMF:1},Zo=Math.PI/180,r_=function(e){return typeof e=="string"},kT=function(e){return r_(e)&&e.charAt(1)==="="?e.substr(0,2)+parseFloat(e.substr(2))*Zo:e*Zo},UT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e5)/1e5,t)},DT=function(e,t,i,n,s,o){var a=360*(o?Zo:1),l=r_(s),u=l&&s.charAt(1)==="="?+(s.charAt(0)+"1"):0,h=parseFloat(u?s.substr(2):s)*(o?Zo:1),c=u?h*u:h-n,d=n+c,f,g;return l&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*1e10)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*1e10)%a-~~(c/a)*a)),e._pt=g=new ws(e._pt,t,i,n,c,UT),g.e=d,g},n_=function(){Vg||(lr=jg(),ii=Vg=ii||Wg()&&window.PIXI,oh=ii&&ii.VERSION&&ii.VERSION.charAt(0)==="4",qo=function(t){return lr.utils.splitColor((t+"").substr(0,2)==="0x"?"#"+t.substr(2):t)})},Qo,Ts;for(Qo=0;Qo<i_.length;Qo++)Ts=i_[Qo],lh[Ts+"X"]=Ts,lh[Ts+"Y"]=Ts;var uh={version:"3.12.5",name:"pixi",register:function(e,t,i){lr=e,ws=i,Hg=t.getSetter,n_()},headless:!0,registerPIXI:function(e){ii=e},init:function(e,t,i,n,s){if(ii||n_(),!ii)return Xg("PIXI was not found. PixiPlugin.registerPIXI(PIXI);"),!1;var o,a,l,u,h,c,d,f,g;for(c in t){if(o=lh[c],l=t[c],o)a=~c.charAt(c.length-1).toLowerCase().indexOf("x")?"x":"y",this.add(e[o],a,e[o][a],o==="skew"?kT(l):l,0,0,0,0,0,1);else if(c==="scale"||c==="anchor"||c==="pivot"||c==="tileScale")this.add(e[c],"x",e[c].x,l),this.add(e[c],"y",e[c].y,l);else if(c==="rotation"||c==="angle")DT(this,e,c,e[c],l,c==="rotation");else if(BT[c])u||(MT(e,t.colorMatrixFilter||t,this),u=!0);else if(c==="blur"||c==="blurX"||c==="blurY"||c==="blurPadding"){if(h=Jg(e,"BlurFilter"),this.add(h,c,h[c],l),t.blurPadding!==0)for(d=t.blurPadding||Math.max(h[c],l)*2,f=e.filters.length;--f>-1;)e.filters[f].padding=Math.max(e.filters[f].padding,d)}else if(FT[c])if((c==="lineColor"||c==="fillColor")&&e instanceof ii.Graphics)for(g=(e.geometry||e).graphicsData,this._pt=new ws(this._pt,e,c,0,0,IT,{g:e.geometry||e}),f=g.length;--f>-1;)t_(oh?g[f]:g[f][c.substr(0,4)+"Style"],oh?c:"color",l,this);else t_(e,c,l,this);else c==="autoAlpha"?(this._pt=new ws(this._pt,e,"visible",0,0,OT),this.add(e,"alpha",e.alpha,l),this._props.push("alpha","visible")):c!=="resolution"&&this.add(e,c,"get",l);this._props.push(c)}}};jg()&&lr.registerPlugin(uh);var Be=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,ke=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,GT=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,zT=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,LT=Object.defineProperty,NT=(r,e,t)=>e in r?LT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,s_=(r,e,t)=>(NT(r,typeof e!="symbol"?e+"":e,t),t);s_(class j0 extends _e{constructor(e){e={...j0.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:zT,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:GT,name:"adjustment-filter"});super({gpuProgram:t,glProgram:i,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),s_(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}},"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var $T=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,VT=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,HT=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,WT=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,jT=Object.defineProperty,XT=(r,e,t)=>e in r?jT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,zr=(r,e,t)=>(XT(r,typeof e!="symbol"?e+"":e,t),t);const o_=class X0 extends _e{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t))&&(Y("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.clamp=e[2])),t={...X0.DEFAULT_OPTIONS,...t};const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:t!=null&&t.clamp?WT:VT,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:t!=null&&t.clamp?HT:$T,name:"kawase-blur-filter"});super({gpuProgram:i,glProgram:n,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),zr(this,"uniforms"),zr(this,"_pixelSize",{x:0,y:0}),zr(this,"_clamp"),zr(this,"_kernels",[]),zr(this,"_blur"),zr(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=t.pixelSize??{x:1,y:1},Array.isArray(t.strength)?this.kernels=t.strength:typeof t.strength=="number"&&(this._blur=t.strength,this.quality=t.quality??3),this._clamp=!!t.clamp}apply(e,t,i,n){const s=this.pixelSizeX/t.source.width,o=this.pixelSizeY/t.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,t,i,n);else{const l=Le.getSameSizeTexture(t);let u=t,h=l,c;const d=this._quality-1;for(let f=0;f<d;f++)a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,u,h,!0),c=u,u=h,h=c;a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,u,i,n),Le.returnTexture(l)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){const e=this._blur,t=this._quality,i=[e];if(e>0){let n=e;const s=e/t;for(let o=1;o<t;o++)n-=s,i.push(n)}this._kernels=i,this._updatePadding()}};zr(o_,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let a_=o_;var YT=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,qT=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,KT=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,ZT=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,QT=Object.defineProperty,JT=(r,e,t)=>e in r?QT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l_=(r,e,t)=>(JT(r,typeof e!="symbol"?e+"":e,t),t);const u_=class Y0 extends _e{constructor(e){e={...Y0.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:ZT,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:KT,name:"extract-brightness-filter"});super({gpuProgram:t,glProgram:i,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),l_(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};l_(u_,"DEFAULT_OPTIONS",{threshold:.5});let eC=u_;var tC=Object.defineProperty,iC=(r,e,t)=>e in r?tC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Pn=(r,e,t)=>(iC(r,typeof e!="symbol"?e+"":e,t),t);Pn(class q0 extends _e{constructor(e){e={...q0.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:qT,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:YT,name:"advanced-bloom-filter"});super({gpuProgram:t,glProgram:i,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:X.WHITE}}),Pn(this,"uniforms"),Pn(this,"bloomScale",1),Pn(this,"brightness",1),Pn(this,"_extractFilter"),Pn(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new eC({threshold:e.threshold}),this._blurFilter=new a_({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,t,i,n){const s=Le.getSameSizeTexture(t);this._extractFilter.apply(e,t,s,!0);const o=Le.getSameSizeTexture(t);this._blurFilter.apply(e,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,e.applyFilter(this,t,i,n),Le.returnTexture(o),Le.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}},"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var rC=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,nC=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,sC=Object.defineProperty,oC=(r,e,t)=>e in r?sC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,hh=(r,e,t)=>(oC(r,typeof e!="symbol"?e+"":e,t),t);hh(class K0 extends _e{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Y("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),t={size:t});const i=(t==null?void 0:t.color)&&t.replaceColor!==!1;t={...K0.DEFAULT_OPTIONS,...t};const n=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:nC,entryPoint:"mainFragment"}}),s=de.from({vertex:Be,fragment:rC,name:"ascii-filter"});super({gpuProgram:n,glProgram:s,resources:{asciiUniforms:{uSize:{value:t.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(i),type:"f32"}}}}),hh(this,"uniforms"),hh(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new ae,this.color=t.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,i,n]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=n}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}},"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var aC=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,lC=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,uC=Object.defineProperty,hC=(r,e,t)=>e in r?uC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,An=(r,e,t)=>(hC(r,typeof e!="symbol"?e+"":e,t),t);An(class Z0 extends _e{constructor(e){e={...Z0.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:lC,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:aC,name:"bevel-filter"});super({gpuProgram:t,glProgram:i,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),An(this,"uniforms"),An(this,"_thickness"),An(this,"_rotation"),An(this,"_lightColor"),An(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new ae,this._shadowColor=new ae,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/Qr}set rotation(e){this._rotation=e*Qr,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[t,i,n]=this._lightColor.toArray();this.uniforms.uLightColor[0]=t,this.uniforms.uLightColor[1]=i,this.uniforms.uLightColor[2]=n}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[t,i,n]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=t,this.uniforms.uShadowColor[1]=i,this.uniforms.uShadowColor[2]=n}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}},"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var cC=Object.defineProperty,dC=(r,e,t)=>e in r?cC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Jo=(r,e,t)=>(dC(r,typeof e!="symbol"?e+"":e,t),t);Jo(class Q0 extends A2{constructor(...e){let t=e[0]??{};if(typeof t=="number"||Array.isArray(t)||"x"in t&&"y"in t){Y("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let i=t;Array.isArray(i)&&(i={x:i[0],y:i[1]}),t={strength:i},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]),e[3]!==void 0&&(t.kernelSize=e[3])}t={...Q0.DEFAULT_OPTIONS,...t},super(),Jo(this,"_blurXFilter"),Jo(this,"_blurYFilter"),Jo(this,"_strength"),this._strength={x:2,y:2},t.strength&&(typeof t.strength=="number"?(this._strength.x=t.strength,this._strength.y=t.strength):(this._strength.x=t.strength.x,this._strength.y=t.strength.y)),this._blurXFilter=new rs({...t,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new rs({...t,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,t)}apply(e,t,i,n){const s=Le.getSameSizeTexture(t);e.applyFilter(this,t,i,n),this._blurXFilter.apply(e,t,s,!0),this._blurYFilter.apply(e,s,i,!1),Le.returnTexture(s)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Y("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){Y("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return Y("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){Y("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return Y("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){Y("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}},"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var fC=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,pC=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,mC=Object.defineProperty,gC=(r,e,t)=>e in r?mC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,h_=(r,e,t)=>(gC(r,typeof e!="symbol"?e+"":e,t),t);h_(class J0 extends _e{constructor(e){e={...J0.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:pC,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:fC,name:"bulge-pinch-filter"});super({gpuProgram:t,glProgram:i,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),h_(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,t,i,n){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,i,n)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}},"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var _C=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,xC=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,c_=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,Lr=Lr||{};Lr.stringify=function(){var r={"visit_linear-gradient":function(e){return r.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return r.visit_gradient(e)},"visit_radial-gradient":function(e){return r.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return r.visit_gradient(e)},visit_gradient:function(e){var t=r.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+r.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,i=r.visit(e.at),n=r.visit(e.style);return n&&(t+=" "+n),i&&(t+=" at "+i),t},"visit_default-radial":function(e){var t="",i=r.visit(e.at);return i&&(t+=i),t},"visit_extent-keyword":function(e){var t=e.value,i=r.visit(e.at);return i&&(t+=" at "+i),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return r.visit(e.value.x)+" "+r.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return r.visit_color(e.value,e)},visit_hex:function(e){return r.visit_color("#"+e.value,e)},visit_rgb:function(e){return r.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return r.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var i=e,n=r.visit(t.length);return n&&(i+=" "+n),i},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",i=e.length;return e.forEach(function(n,s){t+=r.visit(n),s<i-1&&(t+=", ")}),t},visit:function(e){if(!e)return"";var t="";if(e instanceof Array)return r.visit_array(e,t);if(e.type){var i=r["visit_"+e.type];if(i)return i(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return r.visit(e)}}();var Lr=Lr||{};Lr.parse=function(){var r={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function t(C){var A=new Error(e+": "+C);throw A.source=e,A}function i(){var C=n();return e.length>0&&t("Invalid input not EOF"),C}function n(){return w(s)}function s(){return o("linear-gradient",r.linearGradient,l)||o("repeating-linear-gradient",r.repeatingLinearGradient,l)||o("radial-gradient",r.radialGradient,c)||o("repeating-radial-gradient",r.repeatingRadialGradient,c)}function o(C,A,I){return a(A,function(F){var z=I();return z&&(J(r.comma)||t("Missing comma before color stops")),{type:C,orientation:z,colorStops:w(P)}})}function a(C,A){var I=J(C);if(I){J(r.startCall)||t("Missing (");var F=A(I);return J(r.endCall)||t("Missing )"),F}}function l(){return u()||h()}function u(){return j("directional",r.sideOrCorner,1)}function h(){return j("angular",r.angleValue,1)}function c(){var C,A=d(),I;return A&&(C=[],C.push(A),I=e,J(r.comma)&&(A=d(),A?C.push(A):e=I)),C}function d(){var C=f()||g();if(C)C.at=_();else{var A=m();if(A){C=A;var I=_();I&&(C.at=I)}else{var F=y();F&&(C={type:"default-radial",at:F})}}return C}function f(){var C=j("shape",/^(circle)/i,0);return C&&(C.style=W()||m()),C}function g(){var C=j("shape",/^(ellipse)/i,0);return C&&(C.style=Q()||m()),C}function m(){return j("extent-keyword",r.extentKeywords,1)}function _(){if(j("position",/^at/,0)){var C=y();return C||t("Missing positioning value"),C}}function y(){var C=S();if(C.x||C.y)return{type:"position",value:C}}function S(){return{x:Q(),y:Q()}}function w(C){var A=C(),I=[];if(A)for(I.push(A);J(r.comma);)A=C(),A?I.push(A):t("One extra comma");return I}function P(){var C=E();return C||t("Expected color definition"),C.length=Q(),C}function E(){return B()||R()||k()||U()}function U(){return j("literal",r.literalColor,0)}function B(){return j("hex",r.hexColor,1)}function k(){return a(r.rgbColor,function(){return{type:"rgb",value:w(G)}})}function R(){return a(r.rgbaColor,function(){return{type:"rgba",value:w(G)}})}function G(){return J(r.number)[1]}function Q(){return j("%",r.percentageValue,1)||ee()||W()}function ee(){return j("position-keyword",r.positionKeywords,1)}function W(){return j("px",r.pixelValue,1)||j("em",r.emValue,1)}function j(C,A,I){var F=J(A);if(F)return{type:C,value:F[I]}}function J(C){var A,I;return I=/^[\n\r\t\s]+/.exec(e),I&&T(I[0].length),A=C.exec(e),A&&T(A[0].length),A}function T(C){e=e.substr(C)}return function(C){return e=C.toString(),i()}}();var vC=Lr.parse;Lr.stringify;function yC(r){const e=vC(EC(r));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const t=e[0],i=bC(t.type),n=SC(t.colorStops),s=PC(t.orientation);return{type:i,stops:n,angle:s}}function bC(r){const e={"linear-gradient":0,"radial-gradient":1};if(!(r in e))throw new Error(`Unsupported gradient type "${r}"`);return e[r]}function SC(r){const e=TC(r),t=[],i=new ae;for(let n=0;n<r.length;n++){const s=wC(r[n]),o=i.setValue(s).toArray();t.push({offset:e[n],color:o.slice(0,3),alpha:o[3]})}return t}function wC(r){switch(r.type){case"hex":return`#${r.value}`;case"literal":return r.value;default:return`${r.type}(${r.value.join(",")})`}}function TC(r){const e=[];for(let s=0;s<r.length;s++){const o=r[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),e.push(a)}const i=s=>{for(let o=s;o<e.length;o++)if(e[o]!==-1)return{indexDelta:o-s,offset:e[o]};return{indexDelta:e.length-1-s,offset:1}};let n=0;for(let s=0;s<e.length;s++){const o=e[s];if(o!==-1)n=o;else if(s===0)e[s]=0;else if(s+1===e.length)e[s]=1;else{const a=i(s),u=(a.offset-n)/(1+a.indexDelta);for(let h=0;h<=a.indexDelta;h++)e[s+h]=n+(h+1)*u;s+=a.indexDelta,n=e[s]}}return e.map(CC)}function CC(r){return r.toString().length>6?parseFloat(r.toString().substring(0,6)):r}function PC(r){if(typeof r>"u")return 0;if("type"in r&&"value"in r)switch(r.type){case"angular":return parseFloat(r.value);case"directional":return AC(r.value)}return 0}function AC(r){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(r in e))throw new Error(`Unsupported directional value "${r}"`);return e[r]}function EC(r){let e=r.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var MC=Object.defineProperty,RC=(r,e,t)=>e in r?MC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Nr=(r,e,t)=>(RC(r,typeof e!="symbol"?e+"":e,t),t);const ch=90;function IC(r){return[...r].sort((e,t)=>e.offset-t.offset)}const En=class ba extends _e{constructor(e){if(e&&"css"in e?e={...yC(e.css||""),alpha:e.alpha??ba.defaults.alpha,maxColors:e.maxColors??ba.defaults.maxColors}:e={...ba.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const t=ce.from({vertex:{source:c_,entryPoint:"mainVertex"},fragment:{source:c_,entryPoint:"mainFragment"}}),i=de.from({vertex:xC,fragment:_C,name:"color-gradient-filter"}),n=32;super({gpuProgram:t,glProgram:i,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??ch,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(n*3),type:"vec3<f32>",size:n},uStops:{value:new Float32Array(n*4),type:"vec4<f32>",size:n}}}}),Nr(this,"baseUniforms"),Nr(this,"stopsUniforms"),Nr(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const t=IC(e),i=new ae;let n,s,o;for(let a=0;a<t.length;a++){i.setValue(t[a].color);const l=a*3;[n,s,o]=i.toArray(),this.stopsUniforms.uColors[l]=n,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=t[a].offset,this.stopsUniforms.uStops[a*4+1]=t[a].alpha}this.baseUniforms.uCounts[0]=t.length,this._stops=t}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+ch}set angle(e){this.baseUniforms.uOptions[1]=e-ch}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};Nr(En,"LINEAR",0),Nr(En,"RADIAL",1),Nr(En,"CONIC",2),Nr(En,"defaults",{type:En.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});let dh=En;var OC=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,FC=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,BC=Object.defineProperty,kC=(r,e,t)=>e in r?BC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Hi=(r,e,t)=>(kC(r,typeof e!="symbol"?e+"":e,t),t);Hi(class ex extends _e{constructor(...e){let t=e[0]??{};if((t instanceof X||t instanceof st)&&(Y("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),t={colorMap:t},e[1]!==void 0&&(t.nearest=e[1]),e[2]!==void 0&&(t.mix=e[2])),t={...ex.DEFAULT_OPTIONS,...t},!t.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:FC,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:OC,name:"color-map-filter"});super({gpuProgram:i,glProgram:n,resources:{colorMapUniforms:{uMix:{value:t.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:t.colorMap.source,uMapSampler:t.colorMap.source.style}}),Hi(this,"uniforms"),Hi(this,"_size",0),Hi(this,"_sliceSize",0),Hi(this,"_slicePixelSize",0),Hi(this,"_sliceInnerSize",0),Hi(this,"_nearest",!1),Hi(this,"_scaleMode","linear"),Hi(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,t)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const t=e instanceof X?e.source:e;t.style.scaleMode=this._scaleMode,t.autoGenerateMipmaps=!1,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=t,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const t=this._colorMap;t&&t.source&&(t.source.scaleMode=this._scaleMode,t.source.autoGenerateMipmaps=!1,t.source.style.update(),t.source.update())}updateColorMap(){const e=this._colorMap;e!=null&&e.source&&(e.source.update(),this.colorMap=e)}destroy(){var e;(e=this._colorMap)==null||e.destroy(),super.destroy()}},"DEFAULT_OPTIONS",{colorMap:X.WHITE,nearest:!1,mix:1});var UC=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,DC=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,GC=Object.defineProperty,zC=(r,e,t)=>e in r?GC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,fh=(r,e,t)=>(zC(r,typeof e!="symbol"?e+"":e,t),t);fh(class tx extends _e{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(Y("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),t={color:t},e[1]!==void 0&&(t.alpha=e[1])),t={...tx.DEFAULT_OPTIONS,...t};const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:DC,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:UC,name:"color-overlay-filter"});super({gpuProgram:i,glProgram:n,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"}}}}),fh(this,"uniforms"),fh(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new ae,this.color=t.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,i,n]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=n}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}},"DEFAULT_OPTIONS",{color:0,alpha:1});var LC=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,NC=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,$C=Object.defineProperty,VC=(r,e,t)=>e in r?$C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ea=(r,e,t)=>(VC(r,typeof e!="symbol"?e+"":e,t),t);ea(class ix extends _e{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(Y("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),t={originalColor:t},e[1]!==void 0&&(t.targetColor=e[1]),e[2]!==void 0&&(t.tolerance=e[2])),t={...ix.DEFAULT_OPTIONS,...t};const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:NC,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:LC,name:"color-replace-filter"});super({gpuProgram:i,glProgram:n,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:t.tolerance,type:"f32"}}}}),ea(this,"uniforms"),ea(this,"_originalColor"),ea(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new ae,this._targetColor=new ae,this.originalColor=t.originalColor??16711680,this.targetColor=t.targetColor??0,Object.assign(this,t)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[t,i,n]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=t,this.uniforms.uOriginalColor[1]=i,this.uniforms.uOriginalColor[2]=n}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[t,i,n]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=t,this.uniforms.uTargetColor[1]=i,this.uniforms.uTargetColor[2]=n}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){Y("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return Y("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){Y("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return Y("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}},"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var HC=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,WC=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,jC=Object.defineProperty,XC=(r,e,t)=>e in r?jC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d_=(r,e,t)=>(XC(r,typeof e!="symbol"?e+"":e,t),t);d_(class rx extends _e{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(Y("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),t={matrix:t},e[1]!==void 0&&(t.width=e[1]),e[2]!==void 0&&(t.height=e[2])),t={...rx.DEFAULT_OPTIONS,...t};const i=t.width??200,n=t.height??200,s=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:WC,entryPoint:"mainFragment"}}),o=de.from({vertex:Be,fragment:HC,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:t.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/i,y:1/n},type:"vec2<f32>"}}}}),d_(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=i,this.height=n}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((t,i)=>{this.uniforms.uMatrix[i]=t})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}},"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var YC=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,qC=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,KC=Object.defineProperty,ZC=(r,e,t)=>e in r?KC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ta=(r,e,t)=>(ZC(r,typeof e!="symbol"?e+"":e,t),t);ta(class nx extends _e{constructor(e){e={...nx.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:qC,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:YC,name:"crt-filter"});super({gpuProgram:t,glProgram:i,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ta(this,"uniforms"),ta(this,"seed"),ta(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,t,i,n){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,i,n)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}},"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var QC=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,JC=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,eP=Object.defineProperty,tP=(r,e,t)=>e in r?eP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,iP=(r,e,t)=>(tP(r,e+"",t),t);iP(class sx extends _e{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Y("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),t={scale:t},e[1]!==void 0&&(t.angle=e[1]),e[2]!==void 0&&(t.grayscale=e[2])),t={...sx.DEFAULT_OPTIONS,...t};const i={uScale:{value:t.scale,type:"f32"},uAngle:{value:t.angle,type:"f32"},uGrayScale:{value:t.grayscale?1:0,type:"f32"}},n=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:JC,entryPoint:"mainFragment"}}),s=de.from({vertex:Be,fragment:QC,name:"dot-filter"});super({gpuProgram:n,glProgram:s,resources:{dotUniforms:i}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}},"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var rP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,nP=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,sP=Object.defineProperty,oP=(r,e,t)=>e in r?sP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Mn=(r,e,t)=>(oP(r,typeof e!="symbol"?e+"":e,t),t);Mn(class ox extends _e{constructor(e){e={...ox.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:nP,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:rP,name:"drop-shadow-filter"});super({gpuProgram:t,glProgram:i,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),Mn(this,"uniforms"),Mn(this,"shadowOnly",!1),Mn(this,"_color"),Mn(this,"_blurFilter"),Mn(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new ae,this.color=e.color??0,this._blurFilter=new a_({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new _e({gpuProgram:ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:de.from({vertex:Be,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,t,i,n){const s=Le.getSameSizeTexture(t);e.applyFilter(this,t,s,!0),this._blurFilter.apply(e,s,i,n),this.shadowOnly||e.applyFilter(this._basePass,t,i,!1),Le.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,i,n]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=n}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}},"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var aP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,lP=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,uP=Object.defineProperty,hP=(r,e,t)=>e in r?uP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ci=(r,e,t)=>(hP(r,typeof e!="symbol"?e+"":e,t),t);Ci(class ax extends _e{constructor(e){e={...ax.defaults,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:lP,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:aP,name:"glitch-filter"}),n=document.createElement("canvas");n.width=4,n.height=e.sampleSize??512;const s=new X({source:new Sr({resource:n})});super({gpuProgram:t,glProgram:i,resources:{glitchUniforms:{uSeed:{value:(e==null?void 0:e.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(e==null?void 0:e.fillMode)??0,type:"f32"},uOffset:{value:(e==null?void 0:e.offset)??100,type:"f32"},uDirection:{value:(e==null?void 0:e.direction)??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Ci(this,"uniforms"),Ci(this,"average",!1),Ci(this,"minSize",8),Ci(this,"sampleSize",512),Ci(this,"_canvas"),Ci(this,"texture"),Ci(this,"_slices",0),Ci(this,"_sizes",new Float32Array(1)),Ci(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=n,this.texture=s,Object.assign(this,e)}apply(e,t,i,n){const{width:s,height:o}=t.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,e.applyFilter(this,t,i,n)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,i=this.sampleSize,n=Math.min(this.minSize/i,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<t;a++){const l=o/(s-a),u=Math.max(l*(1-Math.random()*.6),n);e[a]=u,o-=u}e[t]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<t;a++){const l=Math.max(o*s*Math.random(),n);e[a]=l,s-=l}e[t]=s}this.shuffle()}shuffle(){const e=this._sizes,t=this._slices-1;for(let i=t;i>0;i--){const n=Math.random()*i>>0,s=e[i];e[i]=e[n],e[n]=s}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,e);let n,s=0;for(let o=0;o<this._slices;o++){n=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*e,l=n>0?n:0,u=n<0?-n:0;i.fillStyle=`rgba(${l}, ${u}, 0, 1)`,i.fillRect(0,s>>0,e,a+1>>0),s+=a}t.source.update()}set sizes(e){const t=Math.min(this._slices,e.length);for(let i=0;i<t;i++)this._sizes[i]=e[i]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let i=0;i<t;i++)this._offsets[i]=e[i]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/Qr}set direction(e){this.uniforms.uDirection=e*Qr}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}},"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var cP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,dP=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,fP=Object.defineProperty,pP=(r,e,t)=>e in r?fP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ph=(r,e,t)=>(pP(r,typeof e!="symbol"?e+"":e,t),t);ph(class lx extends _e{constructor(e){e={...lx.DEFAULT_OPTIONS,...e};const t=e.distance??10,i=e.quality??.1,n=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:dP,entryPoint:"mainFragment"}}),s=de.from({vertex:Be,fragment:cP.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/t).toFixed(7)}`).replace(/__DIST__/gi,`${t.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:n,glProgram:s,resources:{glowUniforms:{uDistance:{value:t,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:(e==null?void 0:e.knockout)??!1?1:0,type:"f32"}}},padding:t}),ph(this,"uniforms"),ph(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new ae,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,i,n]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=n}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}},"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var mP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,gP=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,_P=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,xP=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,vP=Object.defineProperty,yP=(r,e,t)=>e in r?vP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Rn=(r,e,t)=>(yP(r,typeof e!="symbol"?e+"":e,t),t);Rn(class ux extends _e{constructor(e){e={...ux.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:gP.replace("${PERLIN}",xP),entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:mP.replace("${PERLIN}",_P),name:"god-ray-filter"});super({gpuProgram:t,glProgram:i,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Rn(this,"uniforms"),Rn(this,"time",0),Rn(this,"_angleLight",[0,0]),Rn(this,"_angle",0),Rn(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,t,i,n){const s=t.frame.width,o=t.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,e.applyFilter(this,t,i,n)}get angle(){return this._angle}set angle(e){this._angle=e;const t=e*Qr;this._angleLight[0]=Math.cos(t),this._angleLight[1]=Math.sin(t)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}},"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var bP=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,SP=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,wP=Object.defineProperty,TP=(r,e,t)=>e in r?wP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,mh=(r,e,t)=>(TP(r,typeof e!="symbol"?e+"":e,t),t);mh(class hx extends _e{constructor(e){e={...hx.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:SP,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:bP,name:"hsl-adjustment-filter"});super({gpuProgram:t,glProgram:i,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),mh(this,"uniforms"),mh(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,e)}get hue(){return this._hue}set hue(e){this._hue=e,this.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(e){this.uniforms.uHsl[1]=e}get lightness(){return this.uniforms.uHsl[2]}set lightness(e){this.uniforms.uHsl[2]=e}get colorize(){return this.uniforms.uColorize===1}set colorize(e){this.uniforms.uColorize=e?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}},"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var CP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,PP=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,AP=Object.defineProperty,EP=(r,e,t)=>e in r?AP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,gh=(r,e,t)=>(EP(r,typeof e!="symbol"?e+"":e,t),t);gh(class cx extends _e{constructor(...e){let t=e[0]??{};if(Array.isArray(t)||"x"in t&&"y"in t||t instanceof xt){Y("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in t?t.x:t[0],o="y"in t?t.y:t[1];t={velocity:{x:s,y:o}},e[1]!==void 0&&(t.kernelSize=e[1]),e[2]!==void 0&&(t.offset=e[2])}t={...cx.DEFAULT_OPTIONS,...t};const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:PP,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:CP,name:"motion-blur-filter"});super({gpuProgram:i,glProgram:n,resources:{motionBlurUniforms:{uVelocity:{value:t.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(t.kernelSize??5),type:"i32"},uOffset:{value:t.offset,type:"f32"}}}}),gh(this,"uniforms"),gh(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,t)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}},"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var MP=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,RP=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,IP=Object.defineProperty,OP=(r,e,t)=>e in r?IP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ia=(r,e,t)=>(OP(r,typeof e!="symbol"?e+"":e,t),t);ia(class dx extends _e{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(Y("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),t={replacements:t},e[1]&&(t.tolerance=e[1]),e[2]&&(t.maxColors=e[2])),t={...dx.DEFAULT_OPTIONS,...t};const i=t.maxColors??t.replacements.length,n=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:RP.replace(/\$\{MAX_COLORS\}/g,i.toFixed(0)),entryPoint:"mainFragment"}}),s=de.from({vertex:Be,fragment:MP.replace(/\$\{MAX_COLORS\}/g,i.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:n,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*i),type:"vec3<f32>",size:i},uTargetColors:{value:new Float32Array(3*i),type:"vec3<f32>",size:i},uTolerance:{value:t.tolerance,type:"f32"}}}}),ia(this,"uniforms"),ia(this,"_replacements",[]),ia(this,"_maxColors"),this._maxColors=i,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=t.replacements}set replacements(e){const t=this.uniforms.uOriginalColors,i=this.uniforms.uTargetColors,n=e.length,s=new ae;if(n>this._maxColors)throw new Error(`Length of replacements (${n}) exceeds the maximum colors length (${this._maxColors})`);t[n*3]=-1;let o,a,l;for(let u=0;u<n;u++){const h=e[u];s.setValue(h[0]),[o,a,l]=s.toArray(),t[u*3]=o,t[u*3+1]=a,t[u*3+2]=l,s.setValue(h[1]),[o,a,l]=s.toArray(),i[u*3]=o,i[u*3+1]=a,i[u*3+2]=l}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){Y("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return Y("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}},"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var FP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,BP=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,kP=Object.defineProperty,UP=(r,e,t)=>e in r?kP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,_h=(r,e,t)=>(UP(r,typeof e!="symbol"?e+"":e,t),t);_h(class fx extends _e{constructor(e){e={...fx.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:BP,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:FP,name:"old-film-filter"});super({gpuProgram:t,glProgram:i,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),_h(this,"uniforms"),_h(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,t,i,n){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,t,i,n)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}},"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var DP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,GP=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,zP=Object.defineProperty,LP=(r,e,t)=>e in r?zP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$r=(r,e,t)=>(LP(r,typeof e!="symbol"?e+"":e,t),t);const ra=class Kr extends _e{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Y("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),t={thickness:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.quality=e[2]),e[3]!==void 0&&(t.alpha=e[3]),e[4]!==void 0&&(t.knockout=e[4])),t={...Kr.DEFAULT_OPTIONS,...t};const i=t.quality??.1,n=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:GP,entryPoint:"mainFragment"}}),s=de.from({vertex:Be,fragment:DP.replace(/\$\{ANGLE_STEP\}/,Kr.getAngleStep(i).toFixed(7)),name:"outline-filter"});super({gpuProgram:n,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:t.knockout?1:0,type:"f32"}}}}),$r(this,"uniforms"),$r(this,"_thickness"),$r(this,"_quality"),$r(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Kr.getAngleStep(i),this._color=new ae,this.color=t.color??0,Object.assign(this,t)}apply(e,t,i,n){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,i,n)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*Kr.MAX_SAMPLES,Kr.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,i,n]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=n}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=Kr.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};$r(ra,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1}),$r(ra,"MIN_SAMPLES",1),$r(ra,"MAX_SAMPLES",100);let xh=ra;var NP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,$P=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,VP=Object.defineProperty,HP=(r,e,t)=>e in r?VP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,na=(r,e,t)=>(HP(r,typeof e!="symbol"?e+"":e,t),t);na(class px extends _e{constructor(...e){let t=e[0]??{};if(typeof t=="number"){if(Y("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),t={angle:t},e[1]){const s="x"in e[1]?e[1].x:e[1][0],o="y"in e[1]?e[1].y:e[1][1];t.center={x:s,y:o}}e[2]&&(t.kernelSize=e[2]),e[3]&&(t.radius=e[3])}t={...px.DEFAULT_OPTIONS,...t};const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:$P,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:NP,name:"radial-blur-filter"});super({gpuProgram:i,glProgram:n,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uKernelSize:{value:t.kernelSize,type:"i32"},uRadius:{value:t.radius,type:"f32"}}}}),na(this,"uniforms"),na(this,"_angle"),na(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,t)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}},"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var WP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,jP=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,XP=Object.defineProperty,YP=(r,e,t)=>e in r?XP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,vh=(r,e,t)=>(YP(r,typeof e!="symbol"?e+"":e,t),t);vh(class mx extends _e{constructor(e){e={...mx.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:jP,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:WP,name:"reflection-filter"});super({gpuProgram:t,glProgram:i,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),vh(this,"uniforms"),vh(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,t,i,n){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,t,i,n)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}},"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var qP=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,KP=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,ZP=Object.defineProperty,QP=(r,e,t)=>e in r?ZP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f_=(r,e,t)=>(QP(r,typeof e!="symbol"?e+"":e,t),t);f_(class gx extends _e{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(Y("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),t={red:t},e[1]!==void 0&&(t.green=e[1]),e[2]!==void 0&&(t.blue=e[2])),t={...gx.DEFAULT_OPTIONS,...t};const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:KP,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:qP,name:"rgb-split-filter"});super({gpuProgram:i,glProgram:n,resources:{rgbSplitUniforms:{uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}}}}),f_(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,t)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}},"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var JP=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,e3=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,t3=Object.defineProperty,i3=(r,e,t)=>e in r?t3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,yh=(r,e,t)=>(i3(r,typeof e!="symbol"?e+"":e,t),t);yh(class _x extends _e{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(Y("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),t={center:t,...e[1]},e[2]!==void 0&&(t.time=e[2])),t={..._x.DEFAULT_OPTIONS,...t};const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:e3,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:JP,name:"shockwave-filter"});super({gpuProgram:i,glProgram:n,resources:{shockwaveUniforms:{uTime:{value:t.time,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uSpeed:{value:t.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),yh(this,"uniforms"),yh(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,t)}apply(e,t,i,n){this.uniforms.uTime=this.time,e.applyFilter(this,t,i,n)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}},"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var r3=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,n3=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,s3=Object.defineProperty,o3=(r,e,t)=>e in r?s3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,sa=(r,e,t)=>(o3(r,typeof e!="symbol"?e+"":e,t),t);sa(class xx extends _e{constructor(...e){let t=e[0]??{};if(t instanceof X&&(Y("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),t={lightMap:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.alpha=e[2])),t={...xx.DEFAULT_OPTIONS,...t},!t.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:n3,entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:r3,name:"simple-lightmap-filter"});super({gpuProgram:i,glProgram:n,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:t.lightMap.source,uMapSampler:t.lightMap.source.style}}),sa(this,"uniforms"),sa(this,"_color"),sa(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new ae,this.color=t.color??0,Object.assign(this,t)}apply(e,t,i,n){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,i,n)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,i,n]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=n}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}},"DEFAULT_OPTIONS",{lightMap:X.WHITE,color:0,alpha:1});var a3=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,l3=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,u3=Object.defineProperty,h3=(r,e,t)=>e in r?u3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,bh=(r,e,t)=>(h3(r,typeof e!="symbol"?e+"":e,t),t);bh(class vx extends _e{constructor(e){const{width:t,height:i}=kp.defaultOptions;e={...vx.DEFAULT_OPTIONS,start:{x:0,y:i/2},end:{x:t,y:i/2},...e};const n=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:l3,entryPoint:"mainFragment"}}),s=de.from({vertex:Be,fragment:a3,name:"tilt-shift-axis-filter"});super({gpuProgram:n,glProgram:s,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur,e.gradientBlur]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([t,i]),type:"vec2<f32>"}}}}),bh(this,"uniforms"),bh(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis}updateDimensions(e){const{uDimensions:t}=this.uniforms;t[0]=e.frame.width,t[1]=e.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,t=this.uniforms.uStart,i=e.x-t.x,n=e.y-t.y,s=Math.sqrt(i*i+n*n),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-n/s:i/s,this.uniforms.uDelta[1]=o?i/s:n/s}},"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var c3=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,d3=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,f3=Object.defineProperty,p3=(r,e,t)=>e in r?f3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,p_=(r,e,t)=>(p3(r,typeof e!="symbol"?e+"":e,t),t);p_(class yx extends _e{constructor(e){e={...yx.DEFAULT_OPTIONS,...e};const t=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:d3,entryPoint:"mainFragment"}}),i=de.from({vertex:Be,fragment:c3,name:"twist-filter"});super({gpuProgram:t,glProgram:i,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),p_(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}},"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var m3=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,g3=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,_3=Object.defineProperty,x3=(r,e,t)=>e in r?_3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m_=(r,e,t)=>(x3(r,typeof e!="symbol"?e+"":e,t),t);m_(class bx extends _e{constructor(e){e={...bx.DEFAULT_OPTIONS,...e};const t=e.maxKernelSize??32,i=ce.from({vertex:{source:ke,entryPoint:"mainVertex"},fragment:{source:g3.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),entryPoint:"mainFragment"}}),n=de.from({vertex:Be,fragment:m3.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:i,glProgram:n,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),m_(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}},"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});var Sh={},Cs={},g_;function Ps(){if(g_)return Cs;g_=1,Object.defineProperty(Cs,"__esModule",{value:!0}),Cs.Collector=void 0;let r=class{constructor(t){this.emit=(...i)=>{t.emitCollecting(this,i)}}};return Cs.Collector=r,Cs}var As={},__;function v3(){if(__)return As;__=1,Object.defineProperty(As,"__esModule",{value:!0}),As.CollectorArray=void 0;const r=Ps();let e=class extends r.Collector{constructor(){super(...arguments),this.result=[]}handleResult(i){return this.result.push(i),!0}getResult(){return this.result}reset(){this.result.length=0}};return As.CollectorArray=e,As}var Es={},x_;function y3(){if(x_)return Es;x_=1,Object.defineProperty(Es,"__esModule",{value:!0}),Es.CollectorLast=void 0;const r=Ps();let e=class extends r.Collector{handleResult(i){return this.result=i,!0}getResult(){return this.result}reset(){delete this.result}};return Es.CollectorLast=e,Es}var Ms={},v_;function b3(){if(v_)return Ms;v_=1,Object.defineProperty(Ms,"__esModule",{value:!0}),Ms.CollectorUntil0=void 0;const r=Ps();let e=class extends r.Collector{constructor(){super(...arguments),this.result=!1}handleResult(i){return this.result=i,this.result}getResult(){return this.result}reset(){this.result=!1}};return Ms.CollectorUntil0=e,Ms}var Rs={},y_;function S3(){if(y_)return Rs;y_=1,Object.defineProperty(Rs,"__esModule",{value:!0}),Rs.CollectorWhile0=void 0;const r=Ps();let e=class extends r.Collector{constructor(){super(...arguments),this.result=!1}handleResult(i){return this.result=i,!this.result}getResult(){return this.result}reset(){this.result=!1}};return Rs.CollectorWhile0=e,Rs}var Is={},Os={},b_;function w3(){if(b_)return Os;b_=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.SignalConnectionImpl=void 0;class r{constructor(t,i){this.link=t,this.parentCleanup=i}disconnect(){return this.link!==null?(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0):!1}set enabled(t){this.link&&this.link.setEnabled(t)}get enabled(){return this.link!==null&&this.link.isEnabled()}}return Os.SignalConnectionImpl=r,Os}var Fs={},S_;function T3(){if(S_)return Fs;S_=1,Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.SignalLink=void 0;let r=class Sx{constructor(t=null,i=null,n=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=t??this,this.next=i??this,this.order=n}isEnabled(){return this.enabled&&!this.newLink}setEnabled(t){this.enabled=t}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(t,i){let n=this.prev;for(;n!==this&&!(n.order<=i);)n=n.prev;const s=new Sx(n,n.next,i);return s.callback=t,n.next=s,s.next.prev=s,s}};return Fs.SignalLink=r,Fs}var w_;function C3(){if(w_)return Is;w_=1,Object.defineProperty(Is,"__esModule",{value:!0}),Is.Signal=void 0;const r=w3(),e=T3();let t=class{constructor(){this.head=new e.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(n,s=0){this.connectionsCount++;const o=this.head.insert(n,s);return this.emitDepth>0&&(this.hasNewLinks=!0,o.newLink=!0),new r.SignalConnectionImpl(o,()=>this.decrementConnectionCount())}decrementConnectionCount(){this.connectionsCount--}disconnect(n){for(let s=this.head.next;s!==this.head;s=s.next)if(s.callback===n)return this.decrementConnectionCount(),s.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...n){this.emitDepth++;for(let s=this.head.next;s!==this.head;s=s.next)s.isEnabled()&&s.callback&&s.callback.apply(null,n);this.emitDepth--,this.unsetNewLink()}emitCollecting(n,s){this.emitDepth++;for(let o=this.head.next;o!==this.head;o=o.next)if(o.isEnabled()&&o.callback){const a=o.callback.apply(null,s);if(!n.handleResult(a))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&this.emitDepth===0){for(let n=this.head.next;n!==this.head;n=n.next)n.newLink=!1;this.hasNewLinks=!1}}};return Is.Signal=t,Is}var Bs={},T_;function P3(){if(T_)return Bs;T_=1,Object.defineProperty(Bs,"__esModule",{value:!0}),Bs.SignalConnections=void 0;let r=class{constructor(){this.list=[]}add(t){this.list.push(t)}disconnectAll(){for(const t of this.list)t.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return this.list.length===0}};return Bs.SignalConnections=r,Bs}var C_;function A3(){return C_||(C_=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.SignalConnections=r.Signal=r.CollectorWhile0=r.CollectorUntil0=r.CollectorLast=r.CollectorArray=r.Collector=void 0;var e=Ps();Object.defineProperty(r,"Collector",{enumerable:!0,get:function(){return e.Collector}});var t=v3();Object.defineProperty(r,"CollectorArray",{enumerable:!0,get:function(){return t.CollectorArray}});var i=y3();Object.defineProperty(r,"CollectorLast",{enumerable:!0,get:function(){return i.CollectorLast}});var n=b3();Object.defineProperty(r,"CollectorUntil0",{enumerable:!0,get:function(){return n.CollectorUntil0}});var s=S3();Object.defineProperty(r,"CollectorWhile0",{enumerable:!0,get:function(){return s.CollectorWhile0}});var o=C3();Object.defineProperty(r,"Signal",{enumerable:!0,get:function(){return o.Signal}});var a=P3();Object.defineProperty(r,"SignalConnections",{enumerable:!0,get:function(){return a.SignalConnections}})}(Sh)),Sh}var Pi=A3(),E3=Object.defineProperty,M3=(r,e,t)=>e in r?E3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,hr=(r,e,t)=>(M3(r,typeof e!="symbol"?e+"":e,t),t);class R3{constructor(){hr(this,"_isMouseIn"),hr(this,"_isDown"),hr(this,"onDown"),hr(this,"onUp"),hr(this,"onUpOut"),hr(this,"onOut"),hr(this,"onPress"),hr(this,"onHover"),this.onPress=new Pi.Signal,this.onDown=new Pi.Signal,this.onUp=new Pi.Signal,this.onHover=new Pi.Signal,this.onOut=new Pi.Signal,this.onUpOut=new Pi.Signal}connectEvents(e){Yi.any?(e.on("pointerdown",this.processDown,this),e.on("pointerup",this.processUp,this),e.on("pointerupoutside",this.processUpOut,this),e.on("pointerout",this.processOut,this),e.on("pointertap",this.processPress,this),e.on("pointerover",this.processOver,this)):(e.on("mousedown",this.processDown,this),e.on("mouseup",this.processUp,this),e.on("mouseupoutside",this.processUpOut,this),e.on("mouseout",this.processOut,this),e.on("click",this.processPress,this),e.on("mouseover",this.processOver,this))}disconnectEvents(e){Yi.any?(e.off("pointerdown",this.processDown,this),e.off("pointerup",this.processUp,this),e.off("pointerupoutside",this.processUpOut,this),e.off("pointerout",this.processOut,this),e.off("pointertap",this.processPress,this),e.off("pointerover",this.processOver,this)):(e.off("mousedown",this.processDown,this),e.off("mouseup",this.processUp,this),e.off("mouseupoutside",this.processUpOut,this),e.off("mouseout",this.processOut,this),e.off("click",this.processPress,this),e.off("mouseover",this.processOver,this))}processDown(e){this._isDown=!0,this.onDown.emit(this,e),this.down(e)}processUp(e){this._isDown&&(this.onUp.emit(this,e),this.up(e)),this._isDown=!1}processUpOut(e){this._isDown&&(this.onUp.emit(this,e),this.onUpOut.emit(this,e),this.up(e),this.upOut(e)),this._isDown=!1}processOut(e){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,e),this.out(e))}processPress(e){this._isDown=!1,this.onPress.emit(this,e),this.press(e)}processOver(e){Yi.any||(this._isMouseIn=!0,this.onHover.emit(this,e),this.hover(e))}down(e){}up(e){}upOut(e){}out(e){}press(e){}hover(e){}get isDown(){return this._isDown}}var I3=Object.defineProperty,O3=(r,e,t)=>e in r?I3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,cr=(r,e,t)=>(O3(r,typeof e!="symbol"?e+"":e,t),t);class F3 extends R3{constructor(e){super(),cr(this,"_view"),e&&(this.view=e,this.enabled=!0)}set view(e){!!this._view&&this.disconnectEvents(this._view),this._view=e,this.connectEvents(this._view)}get view(){return this._view}set enabled(e){if(!this.view){console.error("Button view is not set. Please set it before enabling the button.");return}this.view.eventMode=e?"static":"auto",this.view.cursor=e?"pointer":"default",!e&&this.isDown&&this.processUp()}get enabled(){return this.view.eventMode==="static"}}class B3 extends ue{constructor(e){super(),cr(this,"button"),cr(this,"onDown"),cr(this,"onUp"),cr(this,"onUpOut"),cr(this,"onOut"),cr(this,"onPress"),cr(this,"onHover"),this.button=new F3(this),this.button.enabled=!0,e&&this.addChild(e),this.onPress=this.button.onPress,this.onDown=this.button.onDown,this.onUp=this.button.onUp,this.onHover=this.button.onHover,this.onOut=this.button.onOut,this.onUpOut=this.button.onUpOut}set enabled(e){this.button.enabled=e}get enabled(){return this.button.enabled}}function ks(r){return typeof r=="string"?Ie.from(r):r}var k3=Object.defineProperty,U3=(r,e,t)=>e in r?k3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,oa=(r,e,t)=>(U3(r,typeof e!="symbol"?e+"":e,t),t);class D3 extends ue{constructor(e,t,i){super(),oa(this,"_triggerEvents",new Set(["onPress"])),oa(this,"innerView"),oa(this,"_active"),oa(this,"onChange"),this.innerView=new ue,this.addChild(this.innerView),this.onChange=new Pi.Signal,e&&(this.views=e),t&&(this.triggerEvents=t),i&&this.views.length>0&&(this.active=i),this.setInteractionEvents()}setInteractionEvents(){this.innerView.eventMode="static",this.innerView.on("pointerdown",()=>this.handleEvents("onDown")),this.innerView.on("pointerup",()=>this.handleEvents("onUp")),this.innerView.on("pointerupoutside",()=>this.handleEvents("onUpOut")),this.innerView.on("pointerout",()=>this.handleEvents("onOut")),this.innerView.on("pointertap",()=>this.handleEvents("onPress")),this.innerView.on("pointerover",()=>this.handleEvents("onHover"))}handleEvents(e){this._triggerEvents.has(e)&&this.switch()}get activeView(){if(this.views&&this.views[this.active])return this.views[this.active]}set views(e){this.innerView.removeChildren(),e.forEach(t=>this.add(t))}get views(){return this.innerView.children}add(e){const t=ks(e);this.innerView.addChild(t),t.visible=!1,this.views.length===1&&(this.active=0)}remove(e){this.views[e]&&this.innerView.removeChild(this.views[e])}set triggerEvents(e){this._triggerEvents=new Set(Array.isArray(e)?e:[e])}get triggerEvents(){return Array.from(this._triggerEvents)}switch(e){if(e!==void 0&&e===this.active)return;const t=this.active;if(this.forceSwitch(e),t!==this.active){const i=this.views.length>2?this.active:this.active===1;this.onChange.emit(i)}}forceSwitch(e){if(!(e!==void 0&&e===this.active)){if(this.activeView&&(this.activeView.visible=!1),e!==void 0&&!this.views[e])throw new Error(`View with id ${e} does not exist.`);this._active=e!==void 0?e:this.nextActive,this._active!==void 0&&(this.views[this.active].visible=!0)}}get nextActive(){if(this.views.length!==0)return this.active<this.views.length-1?this.active+1:0}set active(e){this.switch(e)}get active(){return this._active}}function G3(r){r&&(r.parent&&r.parent.removeChild(r),r.destroy(),r=null)}var z3=Object.defineProperty,L3=(r,e,t)=>e in r?z3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,aa=(r,e,t)=>(L3(r,typeof e!="symbol"?e+"":e,t),t);class N3 extends D3{constructor(e){super(),aa(this,"labelText"),aa(this,"onCheck"),aa(this,"_style"),aa(this,"_textClass"),this._textClass=e.TextClass??ot,this.text=e.text,this.style=e.style,this.checked=e.checked,this.triggerEvents=["onPress"],this.innerView.cursor="pointer",this.onCheck=new Pi.Signal,this.onChange.connect(()=>this.onCheck.emit(this.checked))}addLabel(e,t){var i;e&&(this.labelText=new this._textClass({text:e??"",style:t??((i=this._style)==null?void 0:i.text)}),this.addChild(this.labelText),this.labelText.cursor="pointer",this.labelText.eventMode="static",this.labelText.on("pointertap",()=>this.checked=!this.checked))}set text(e){if(!e){G3(this.labelText);return}this.labelText?this.labelText.text=e:this.addLabel(e)}get text(){var e;return((e=this.labelText)==null?void 0:e.text)??""}set style(e){var a,l;const t=this.checked;this._style=e;const{unchecked:i,checked:n}=e,s=ks(i),o=ks(n);this.views=[s,o],t?(o.visible=!0,this.active=1):s.visible=!0,this.labelText?(o.visible=!0,this.active=1,e.text&&(this.labelText.style=e.text),this.labelText.x=s.width+10+(((a=e.textOffset)==null?void 0:a.x)??0),this.labelText.y=(s.height-this.labelText.height)/2+(((l=e.textOffset)==null?void 0:l.y)??0)):s.visible=!0}get style(){return this._style}get checked(){return this.active===1}set checked(e){this.switch(e?1:0)}forceCheck(e){this.forceSwitch(e?1:0)}}/*!
 * tweedle.js - v2.1.0
 * Compiled Wed, 05 Apr 2023 15:21:25 UTC
 *
 * tweedle.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2019-2021, Milton Candelero <miltoncandelero@gmail.com>, All Rights Reserved
 */let Us;typeof self>"u"&&typeof process<"u"&&process.hrtime?Us=function(){const r=process.hrtime();return r[0]*1e3+r[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Us=self.performance.now.bind(self.performance):Date.now!==void 0?Us=Date.now:Us=function(){return new Date().getTime()};class hi{constructor(){hi.prototype.__init.call(this),hi.prototype.__init2.call(this),hi.prototype.__init3.call(this),hi.prototype.__init4.call(this)}__init(){this._tweens={}}static get shared(){return hi._shared||(hi._shared=new hi),hi._shared}__init2(){this._paused=!1}isPaused(){return this._paused}pause(){this._paused=!0}resume(){this._paused=!1}__init3(){this._lastUpdateTime=void 0}__init4(){this.now=Us}getAll(){return Object.keys(this._tweens).map(e=>this._tweens[e])}removeAll(){this._tweens={}}add(e){this._tweens[e.getId()]=e}remove(e){delete this._tweens[e.getId()]}update(e,t=!1){if(e==null&&(this._lastUpdateTime==null?(this._lastUpdateTime=this.now(),e=0):e=this.now()-this._lastUpdateTime),this._lastUpdateTime=this.now(),this._paused)return!1;const i=Object.keys(this._tweens);if(i.length==0)return!1;for(let n=0;n<i.length;n++){const s=this._tweens[i[n]];s&&s.update(e,!0)==!1&&!t&&delete this._tweens[i[n]]}return!0}}const $3={Linear:{None(r){return r}}},P_={Geom:{Linear(r,e){const t=r.length-1,i=t*e,n=Math.floor(i),s=P_.Utils.Linear;return e<0?s(r[0],r[1],i):e>1?s(r[t],r[t-1],t-i):s(r[n],r[n+1>t?t:n+1],i-n)}},Utils:{Linear(r,e,t){return(e-r)*t+r}}};class la{static __initStatic(){this._nextId=0}static nextId(){return la._nextId++}}la.__initStatic();const ua={safetyCheckFunction:r=>!0,easingFunction:$3.Linear.None,yoyoEasingFunction:void 0,interpolationFunction:P_.Geom.Linear};class Ve{__init(){this._isPaused=!1}__init2(){this._valuesStart={}}__init3(){this._valuesEnd={}}__init4(){this._valuesStartRepeat={}}__init5(){this._duration=0}__init6(){this._repeatCount=0}__init7(){this._repeat=0}__init8(){this._yoyo=!1}__init9(){this._isPlaying=!1}get _reversed(){return this.yoyo&&this._repeatCount%2!==0}__init10(){this._delayTime=0}__init11(){this._startTime=0}__init12(){this._elapsedTime=0}__init13(){this._timescale=1}__init14(){this._safetyCheckFunction=ua.safetyCheckFunction}__init15(){this._easingFunction=ua.easingFunction}__init16(){this._yoyoEasingFunction=ua.yoyoEasingFunction}__init17(){this._interpolationFunction=ua.interpolationFunction}__init18(){this._chainedTweens=[]}__init19(){this._onStartCallbackFired=!1}__init20(){this._onAfterDelayCallbackFired=!1}__init21(){this._id=la.nextId()}__init22(){this._isChainStopped=!1}get _group(){return this._groupRef?this._groupRef:hi.shared}set _group(e){this._groupRef=e}constructor(e,t){Ve.prototype.__init.call(this),Ve.prototype.__init2.call(this),Ve.prototype.__init3.call(this),Ve.prototype.__init4.call(this),Ve.prototype.__init5.call(this),Ve.prototype.__init6.call(this),Ve.prototype.__init7.call(this),Ve.prototype.__init8.call(this),Ve.prototype.__init9.call(this),Ve.prototype.__init10.call(this),Ve.prototype.__init11.call(this),Ve.prototype.__init12.call(this),Ve.prototype.__init13.call(this),Ve.prototype.__init14.call(this),Ve.prototype.__init15.call(this),Ve.prototype.__init16.call(this),Ve.prototype.__init17.call(this),Ve.prototype.__init18.call(this),Ve.prototype.__init19.call(this),Ve.prototype.__init20.call(this),Ve.prototype.__init21.call(this),Ve.prototype.__init22.call(this),this._object=e,this._group=t}getId(){return this._id}getGroup(){return this._group}getTimescale(){return this._timescale}isPlaying(){return this._isPlaying}isPaused(){return this._isPaused}from(e){try{JSON.stringify(e)}catch{throw new Error("The object you provided to the from() method has a circular reference!")}return this._setupProperties(e,this._valuesStart,e,this._valuesStartRepeat,!0),this}to(e,t){try{this._valuesEnd=JSON.parse(JSON.stringify(e))}catch{return console.warn("The object you provided to the to() method has a circular reference!. It can't be cloned. Falling back to dynamic targeting"),this.dynamicTo(e,t)}return t!==void 0&&(this._duration=t),this}dynamicTo(e,t){return this._valuesEnd=e,t!==void 0&&(this._duration=t),this}duration(e){return this._duration=e,this}start(e){return this._isPlaying?this:(e!=null&&(this._delayTime=e),this._group.add(this),this._reversed&&(this._swapEndStartRepeatValues(this._valuesStartRepeat,this._valuesEnd),this._valuesStart=JSON.parse(JSON.stringify(this._valuesStartRepeat))),this._repeatCount=0,this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onAfterDelayCallbackFired=!1,this._isChainStopped=!1,this._startTime=-this._delayTime,this._elapsedTime=0,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,!1),this)}restart(e){return this.reset(),this.start(e)}reset(){return this._isPlaying&&this.stop(),this._valuesStart={},this._valuesStartRepeat={},this}rewind(){this._isPlaying&&this.stop(),this._reversed&&this._swapEndStartRepeatValues(this._valuesStartRepeat,this._valuesEnd);const e=this._easingFunction(0);return this._updateProperties(this._object,this._valuesStart,this._valuesEnd,e),this}_setupProperties(e,t,i,n,s){for(const o in i){const a=e[o],l=Array.isArray(a),u=!Number.isNaN(Number(a)),h=l?"array":typeof a,c=h=="object",d=typeof i[o]=="object",f=!l&&Array.isArray(i[o]);h=="undefined"||h=="function"||i[o]==null||!l&&!u&&!c||((c||l||d)&&a&&!f?(typeof t[o]>"u"&&(t[o]=l?[]:{}),typeof n[o]>"u"&&(n[o]=l?[]:{}),this._setupProperties(a,t[o],i[o],n[o],s)):((typeof t[o]>"u"||s)&&(t[o]=a),(typeof n[o]>"u"||s)&&(f?n[o]=i[o].slice().reverse()[0]:n[o]=t[o]||0)))}}stop(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object,this),this):this}end(e=!1){let t=[];if(e||(t=this._chainedTweens,this._chainedTweens=[]),this.resume(),this.update(1/0),!e){this._chainedTweens=t;for(let i=0,n=this._chainedTweens.length;i<n;i++)this._chainedTweens[i].start()}return this}skip(e,t=!1){return this.resume(),this.update(e*this._duration-(t?this._elapsedTime:0)),this}pause(){return this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._group.remove(this),this)}resume(){return!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._group.add(this),this)}stopChainedTweens(){for(let e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this}startChainedTweens(e=!1){e&&this.stop();for(let t=0,i=this._chainedTweens.length;t<i;t++)this._chainedTweens[t].start();return this}group(e){return this._group=e,this}delay(e){return this._delayTime=e,this}timescale(e){return this._timescale=e,this}repeat(e=1/0){return this._repeat=e,this}repeatDelay(e){return this._repeatDelayTime=e,this}yoyo(e=!0){return this._yoyo=e,this}easing(e){return this._easingFunction=e,this}safetyCheck(e){return this._safetyCheckFunction=e,this}yoyoEasing(e){return this._yoyoEasingFunction=e,this}interpolation(e){return this._interpolationFunction=e,this}chain(...e){return this._chainedTweens=e,this}onStart(e){return this._onStartCallback=e,this}onAfterDelay(e){return this._onAfterDelayCallback=e,this}onUpdate(e){return this._onUpdateCallback=e,this}onRepeat(e){return this._onRepeatCallback=e,this}onComplete(e){return this._onCompleteCallback=e,this}onStop(e){return this._onStopCallback=e,this}update(e,t=!1){const i=this._internalUpdate(e);return!i&&!t&&this._group.remove(this),i}_internalUpdate(e){if(!this._safetyCheckFunction(this._object)||this._isPaused)return!1;e*=this._timescale;let t;this._elapsedTime+=e;const i=this._duration,n=this._startTime+this._elapsedTime;if(n>i&&!this._isPlaying)return!1;this.isPlaying||this.start(),this._onStartCallbackFired==!1&&(this._onStartCallback&&this._onStartCallback(this._object,this),this._onStartCallbackFired=!0),this._onAfterDelayCallbackFired==!1&&n>=0&&(this._onAfterDelayCallback&&this._onAfterDelayCallback(this._object,this),this._onAfterDelayCallbackFired=!0),t=n/this._duration,this._duration==0&&(n>=0?t=1:t=0),t=Math.min(1,t),t=Math.max(0,t);let s=Number.isFinite(n)?n%this._duration:n;Number.isNaN(s)&&(s=0);const o=Math.floor(n/this._duration);let a;if(this._reversed&&this._yoyoEasingFunction?a=this._yoyoEasingFunction(t):a=this._easingFunction(t),this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&(t!=1||this._repeat-this._repeatCount<=0)&&this._onUpdateCallback(this._object,t,this),t==1){if(this._repeat-this._repeatCount>0){const l=this._repeatCount;if(this._repeatCount=Math.min(this._repeat+1,this._repeatCount+o),this._onUpdateCallback&&(this._repeat-this._repeatCount<0||s<=0)&&this._onUpdateCallback(this._object,t,this),this._yoyo?this._swapEndStartRepeatValues(this._valuesStartRepeat,this._valuesEnd):this._moveForwardStartRepeatValues(this._valuesStartRepeat,this._valuesEnd),this._valuesStart=JSON.parse(JSON.stringify(this._valuesStartRepeat)),this._repeatDelayTime!==void 0?this._startTime=-this._repeatDelayTime:this._startTime=0,this._onRepeatCallback){let u=1;Number.isFinite(o)?u=this._repeatCount-l:Number.isFinite(this._repeat)&&(u=this._repeat-l);for(let h=0;h<u;h++)this._onRepeatCallback(this._object,l+1+h,this)}if(this._elapsedTime=0,this._repeat-this._repeatCount>=0)return s>0&&Number.isFinite(this._repeat)&&this._internalUpdate(s),!0}this._onCompleteCallback&&this._onCompleteCallback(this._object,this);for(let l=0,u=this._chainedTweens.length;l<u;l++)this._chainedTweens[l].start(),s>0&&this._chainedTweens[l].update(s);return this._isPlaying=!1,!1}return!0}_updateProperties(e,t,i,n){for(const s in i){if(t[s]==null)continue;const o=t[s];let a=i[s];const l=Array.isArray(e[s]),u=Array.isArray(a);!l&&u?this._reversed?e[s]=this._interpolationFunction(a.concat([o]),n):e[s]=this._interpolationFunction([o].concat(a),n):typeof a=="object"&&a?this._updateProperties(e[s],o,a,n):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(typeof o=="number"||typeof o=="string")&&(e[s]=Number(o)+(a-Number(o))*n,typeof o=="string"&&(e[s]=String(e[s]))))}}_handleRelativeValue(e,t){return typeof t!="string"?t:t.charAt(0)=="+"||t.charAt(0)=="-"?e+Number(t):Number(t)}_swapEndStartRepeatValues(e,t){for(const i in e){const n=!Array.isArray(e[i])&&Array.isArray(t[i]);if(typeof e[i]=="object")this._swapEndStartRepeatValues(e[i],t[i]);else{const s=e[i];if(typeof t[i]=="string")e[i]=Number(e[i])+Number(t[i]),t[i]=s;else if(n){const o=t[i].slice().reverse();e[i]=o[0],t[i]=o}else e[i]=t[i],t[i]=s}}}_moveForwardStartRepeatValues(e,t){for(const i in e)typeof t[i]=="object"?this._moveForwardStartRepeatValues(e[i],t[i]):typeof t[i]=="string"&&(e[i]=Number(e[i])+Number(t[i]))}}function A_(r,e,t=0,i=!0){let n=e.scale.x,s=e.scale.y;if(!r)throw new Error("Parent is not defined");const o=r.width-t*2,a=r.height-t*2,l=o-Math.round(e.width),u=a-Math.round(e.height);if(l<0&&(n=o/(e.width/n)),u<0&&(s=a/(e.height/s)),n<=0||s<=0){e.scale.set(0);return}if(i||e.scale.x===e.scale.y){const h=Math.min(n,s);e.scale.set(h,h)}else{const h=e.scale.x/e.scale.y;l<u?e.scale.set(n,n/h):e.scale.set(s*h,s)}}function V3(r){return typeof r=="string"||typeof r=="number"?new ot({text:String(r)}):r}var H3=Object.defineProperty,W3=(r,e,t)=>e in r?H3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Tt=(r,e,t)=>(W3(r,typeof e!="symbol"?e+"":e,t),t);class j3 extends B3{constructor(e){super(),Tt(this,"animations"),Tt(this,"originalInnerViewState"),Tt(this,"defaultDuration",100),Tt(this,"options"),Tt(this,"_padding"),Tt(this,"_offset"),Tt(this,"_textOffset"),Tt(this,"iconOffset"),Tt(this,"innerView",new ue),Tt(this,"_views",{}),Tt(this,"state"),Tt(this,"anchor"),Tt(this,"_defaultTextScale",{x:1,y:1}),Tt(this,"_defaultIconScale",{x:1,y:1}),Tt(this,"_defaultTextAnchor",{x:.5,y:.5}),Tt(this,"_defaultIconAnchor",{x:.5,y:.5}),this.options=e??{};const{defaultView:t,hoverView:i,pressedView:n,disabledView:s,text:o,padding:a,offset:l,textOffset:u,iconOffset:h,defaultTextScale:c,defaultIconScale:d,defaultTextAnchor:f,defaultIconAnchor:g,scale:m,anchor:_,anchorX:y,anchorY:S,icon:w,animations:P}=e??{};this.addChild(this.innerView),this.anchor=new xt({_onUpdate:()=>this.updateAnchor()}),this.anchor.set(y??_??0,S??_??0),this.padding=a??0,this.offset=l,this.textOffset=u,this.iconOffset=h,this.defaultTextScale=c,this.defaultIconScale=d,this.defaultTextAnchor=f,this.defaultIconAnchor=g,this.scale.set(m??1),P&&(this.animations=P,pt.shared.add(()=>hi.shared.update())),this.setState("default"),this.defaultView=t,this.hoverView=i,this.pressedView=n,this.disabledView=s,this.text=o,this.iconView=w,this.initStateControl()}set text(e){if(!e||e===0){this.removeView("textView");return}if(!this._views.textView){this.createTextView(e);return}this._views.textView.text=e.toString()}get text(){var e;return(e=this._views.textView)==null?void 0:e.text}set enabled(e){this.button.enabled=e,this.setState(e?"default":"disabled")}get enabled(){return this.button.enabled}setState(e,t=!1){if(!t&&this.state===e)return;const i=this.getStateView(this.state);i&&(i.visible=!1),this.state=e;const n=this.getStateView(e);n&&(this.setOffset(n,e,this.offset),n.visible=!0),this.updateAnchor(),this.playAnimations(e)}createTextView(e){var t;if(this._views.textView=V3(e),((t=this.options)==null?void 0:t.defaultTextScale)===void 0){const{x:i,y:n}=this._views.textView.scale;this._defaultTextScale={x:i,y:n}}this.innerView.addChild(this._views.textView),this.adjustTextView(this.state)}setOffset(e,t,i){const n=i?i[t]:{x:0,y:0},s=i==null?void 0:i.default;n?(e.x+=n.x??0,e.y+=n.y??0):s?(e.x+=s.x??0,e.y+=s.y??0):(i.x||i.y)&&(e.x+=i.x??0,e.y+=i.y??0)}getStateView(e){if(this._views)switch(e){case"hover":return this._views.hoverView??this._views.defaultView??void 0;case"pressed":return this._views.pressedView??this._views.hoverView??this._views.defaultView??void 0;case"disabled":return this._views.disabledView??this._views.defaultView??void 0;case"default":return this._views.defaultView??void 0;default:return}}adjustTextView(e){var s;if(!this.text)return;const t=this.getStateView(this.state),{x:i,y:n}=this._defaultTextAnchor;t&&((s=this.options)!=null&&s.ignoreRefitting||this._views.textView.scale.set(this._defaultTextScale.x,this._defaultTextScale.y),A_(t,this._views.textView,this.padding,!1),this._views.textView.x=t.x+t.width/2,this._views.textView.y=t.y+t.height/2),this._views.textView.anchor.set(i,n),this.setOffset(this._views.textView,e,this.textOffset)}adjustIconView(e){var s;if(!this._views.iconView)return;const t=this.getStateView(e);if(!t)return;(s=this.options)!=null&&s.ignoreRefitting||this._views.iconView.scale.set(this._defaultIconScale.x,this._defaultIconScale.y);const{x:i,y:n}=this._defaultIconAnchor;A_(t,this._views.iconView,this.padding,!1),"anchor"in this._views.iconView?this._views.iconView.anchor.set(i,n):this._views.iconView.pivot.set(i*(this._views.iconView.width/this._views.iconView.scale.x),n*(this._views.iconView.height/this._views.iconView.scale.y)),this._views.iconView.x=t.x+t.width/2,this._views.iconView.y=t.y+t.height/2,this.setOffset(this._views.iconView,e,this.iconOffset)}updateAnchor(){if(!this._views)return;const e=this.anchor.x??0,t=this.anchor.y??0;if([this._views.defaultView,this._views.hoverView,this._views.pressedView,this._views.disabledView].forEach(n=>{var s;n&&((s=n.anchor)==null||s.set(0),n.x=-n.width*e,n.y=-n.height*t)}),this._views.defaultView){const{x:n,y:s,width:o,height:a}=this._views.defaultView;this.hitArea=new De(n,s,o,a)}this.adjustIconView(this.state),this.adjustTextView(this.state)}set defaultView(e){this.updateView("defaultView",e)}get defaultView(){return this._views.defaultView}set hoverView(e){this.updateView("hoverView",e),this._views.hoverView&&this.state!=="hover"&&(this._views.hoverView.visible=!1)}get hoverView(){return this._views.hoverView}set pressedView(e){this.updateView("pressedView",e),this._views.pressedView&&(this._views.pressedView.visible=!1)}get pressedView(){return this._views.pressedView}set disabledView(e){this.updateView("disabledView",e),this._views.disabledView&&(this._views.disabledView.visible=!1)}get disabledView(){return this._views.disabledView}updateView(e,t){var i;t!==void 0&&(this.removeView(e),t!==null&&((i=this.options)!=null&&i.nineSliceSprite&&(typeof t=="string"?this._views[e]=new fu({texture:X.from(t),leftWidth:this.options.nineSliceSprite[0],topHeight:this.options.nineSliceSprite[1],rightWidth:this.options.nineSliceSprite[2],bottomHeight:this.options.nineSliceSprite[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),this._views[e]||(this._views[e]=ks(t)),this.setOffset(this._views[e],this.state,this.offset),this._views[e].parent||this.innerView.addChild(this._views[e]),this.updateAnchor(),this._views.iconView&&this.innerView.addChild(this._views.iconView),this._views.textView&&this.innerView.addChild(this._views.textView),this.setState(this.state,!0)))}removeView(e){this._views[e]&&(this.innerView.removeChild(this._views[e]),this._views[e]=null)}set textView(e){e!==void 0&&(this.removeView("textView"),e!==null&&this.createTextView(e))}get textView(){return this._views.textView}set iconView(e){var t;if(e!==void 0&&(this.removeView("iconView"),e!==null)){if(this._views.iconView=ks(e),((t=this.options)==null?void 0:t.defaultIconScale)===void 0){const{x:i,y:n}=this._views.iconView.scale;this._defaultIconScale={x:i,y:n}}this._views.iconView.parent||this.innerView.addChild(this._views.iconView),this.setState(this.state,!0)}}get iconView(){return this._views.iconView}playAnimations(e){var i;if(!this.animations)return;if(e==="default"&&!this.originalInnerViewState){this.originalInnerViewState={x:this.innerView.x,y:this.innerView.y,width:this.innerView.width,height:this.innerView.height,scale:{x:this.innerView.scale.x,y:this.innerView.scale.y}};const n=(i=this.animations)==null?void 0:i.default;if(n){this.innerView.x=n.props.x??this.originalInnerViewState.x,this.innerView.y=n.props.y??this.originalInnerViewState.y,this.innerView.width=n.props.width??this.originalInnerViewState.width,this.innerView.height=n.props.height??this.originalInnerViewState.height,this.innerView.scale.x=n.props.scale.x??this.originalInnerViewState.scale.x,this.innerView.scale.y=n.props.scale.y??this.originalInnerViewState.scale.y;return}}const t=this.animations[e]??this.animations.default;if(t){const n=t;this.defaultDuration=n.duration,new Ve(this.innerView).to(n.props,n.duration).start();return}new Ve(this.innerView).to(this.originalInnerViewState,this.defaultDuration).start()}initStateControl(){this.onDown.connect(()=>{this.setState("pressed")}),this.onUp.connect(()=>{Yi.any?this.setState("default"):this.setState("hover")}),this.onUpOut.connect(()=>{this.setState("default")}),this.onOut.connect(()=>{this.button.isDown||this.setState("default")}),this.onPress.connect(()=>{Yi.any?this.setState("default"):this.setState("hover")}),this.onHover.connect(()=>{this.button.isDown||(Yi.any?this.setState("default"):this.setState("hover"))})}set padding(e){this._padding=e,this.adjustTextView(this.state),this.adjustIconView(this.state)}get padding(){return this._padding}set offset(e){this._offset=e,this.updateAnchor()}get offset(){return this._offset}set textOffset(e){this._textOffset=e,this.adjustTextView(this.state)}get textOffset(){return this._textOffset}set defaultTextScale(e){if(e===void 0)return;this.options.defaultTextScale=e;const t=typeof e=="number";this._defaultTextScale.x=t?e:e.x??1,this._defaultTextScale.y=t?e:e.y??1,this.adjustTextView(this.state)}get defaultTextScale(){return this.defaultTextScale}set defaultIconScale(e){if(e===void 0)return;this.options.defaultIconScale=e;const t=typeof e=="number";this._defaultIconScale.x=t?e:e.x??1,this._defaultIconScale.y=t?e:e.y??1,this.adjustIconView(this.state)}get defaultIconScale(){return this.defaultIconScale}set defaultTextAnchor(e){if(e===void 0)return;this.options.defaultTextAnchor=e;const t=typeof e=="number";this._defaultTextAnchor.x=t?e:e.x??1,this._defaultTextAnchor.y=t?e:e.y??1,this.adjustTextView(this.state)}get defaultTextAnchor(){return this.defaultTextAnchor}set defaultIconAnchor(e){if(e===void 0)return;this.options.defaultIconAnchor=e;const t=typeof e=="number";this._defaultIconAnchor.x=t?e:e.x??1,this._defaultIconAnchor.y=t?e:e.y??1,this.adjustIconView(this.state)}get defaultIconAnchor(){return this.defaultIconAnchor}set width(e){var t;(t=this.options)!=null&&t.nineSliceSprite?(this._views.defaultView&&(this._views.defaultView.width=e),this._views.hoverView&&(this._views.hoverView.width=e),this._views.pressedView&&(this._views.pressedView.width=e),this._views.disabledView&&(this._views.disabledView.width=e),this.adjustTextView(this.state),this.adjustIconView(this.state),this.updateAnchor()):super.width=e}get width(){return super.width}set height(e){var t;(t=this.options)!=null&&t.nineSliceSprite?(this._views.defaultView&&(this._views.defaultView.height=e),this._views.hoverView&&(this._views.hoverView.height=e),this._views.pressedView&&(this._views.pressedView.height=e),this._views.disabledView&&(this._views.disabledView.height=e),this.adjustTextView(this.state),this.adjustIconView(this.state),this.updateAnchor()):super.height=e}get height(){return super.height}setSize(e,t){var i;(i=this.options)!=null&&i.nineSliceSprite?(this._views.defaultView&&this._views.defaultView.setSize(e,t),this._views.hoverView&&this._views.hoverView.setSize(e,t),this._views.pressedView&&this._views.pressedView.setSize(e,t),this._views.disabledView&&this._views.disabledView.setSize(e,t),this.adjustTextView(this.state),this.adjustIconView(this.state),this.updateAnchor()):super.setSize(e,t)}}var X3=Object.defineProperty,Y3=(r,e,t)=>e in r?X3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ha=(r,e,t)=>(Y3(r,typeof e!="symbol"?e+"":e,t),t);class q3 extends ue{constructor(e){var t;super(),ha(this,"options"),ha(this,"view"),ha(this,"_type"),ha(this,"children",[]),e&&this.init(e),(t=e==null?void 0:e.items)==null||t.forEach(i=>this.addChild(i)),this.on("added",()=>this.arrangeChildren()),this.on("childAdded",()=>this.arrangeChildren())}init(e){this.options=e,e!=null&&e.type&&(this.type=e.type),e!=null&&e.children&&e.children.forEach(t=>this.addChild(t))}set type(e){this._type=e,this.arrangeChildren()}get type(){return this._type}set elementsMargin(e){if(!this.options)throw new Error("List has not been initiated!");this.options.elementsMargin=e,this.arrangeChildren()}get elementsMargin(){var e;return((e=this.options)==null?void 0:e.elementsMargin)??0}set padding(e){if(!this.options)throw new Error("List has not been initiated!");this.options.padding=e,this.options.vertPadding=e,this.options.horPadding=e,this.options.leftPadding=e,this.options.rightPadding=e,this.options.topPadding=e,this.options.bottomPadding=e,this.arrangeChildren()}get padding(){var e;return((e=this.options)==null?void 0:e.padding)??0}set vertPadding(e){if(!this.options)throw new Error("List has not been initiated!");this.options.vertPadding=e,this.options.topPadding=e,this.options.bottomPadding=e,this.arrangeChildren()}get vertPadding(){var e;return((e=this.options)==null?void 0:e.vertPadding)??this.padding??0}set horPadding(e){if(!this.options)throw new Error("List has not been initiated!");this.options.horPadding=e,this.options.leftPadding=e,this.options.rightPadding=e,this.arrangeChildren()}get horPadding(){var e;return((e=this.options)==null?void 0:e.horPadding)??this.padding??0}set leftPadding(e){if(!this.options)throw new Error("List has not been initiated!");this.options.leftPadding=e,this.arrangeChildren()}get leftPadding(){var e;return((e=this.options)==null?void 0:e.leftPadding)??this.horPadding}set rightPadding(e){if(!this.options)throw new Error("List has not been initiated!");this.options.rightPadding=e,this.arrangeChildren()}get rightPadding(){var e;return((e=this.options)==null?void 0:e.rightPadding)??this.horPadding}set topPadding(e){if(!this.options)throw new Error("List has not been initiated!");this.options.topPadding=e,this.arrangeChildren()}get topPadding(){var e;return((e=this.options)==null?void 0:e.topPadding)??this.vertPadding}set bottomPadding(e){if(!this.options)throw new Error("List has not been initiated!");this.options.bottomPadding=e,this.arrangeChildren()}get bottomPadding(){var e;return((e=this.options)==null?void 0:e.bottomPadding)??this.vertPadding}arrangeChildren(){var o,a;let e=0,t=this.leftPadding,i=this.topPadding;const n=((o=this.options)==null?void 0:o.elementsMargin)??0;let s=(a=this.parent)==null?void 0:a.width;this.rightPadding&&(s-=this.rightPadding),this.children.forEach((l,u)=>{switch(this.type){case"vertical":l.y=i,l.x=t,i+=n+l.height;break;case"horizontal":l.x=t,l.y=i,t+=n+l.width;break;default:l.x=t,l.y=i,l.x+l.width>s&&u>0&&(i+=n+e,t=this.leftPadding,l.x=t,l.y=i,e=0),e=Math.max(e,l.height),t+=n+l.width;break}})}removeItem(e){const t=this.children[e];t&&(this.removeChild(t),this.arrangeChildren())}}var K3=Object.defineProperty,Z3=(r,e,t)=>e in r?K3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ds=(r,e,t)=>(Z3(r,typeof e!="symbol"?e+"":e,t),t);class Q3{constructor(e={}){Ds(this,"x"),Ds(this,"ax"),Ds(this,"dx"),Ds(this,"tx"),Ds(this,"_options"),this.x=0,this.ax=0,this.dx=0,this.tx=0,this._options=e,this._options.max=e.max||160,this._options.damp=e.damp||.8,this._options.springiness=e.springiness||.1}update(){this.ax=(this.tx-this.x)*this._options.springiness,this.dx+=this.ax,this.dx*=this._options.damp,this.dx<-this._options.max?this.dx=-this._options.max:this.dx>this._options.max&&(this.dx=this._options.max),this.x+=this.dx}reset(){this.x=0,this.ax=0,this.dx=0,this.tx=0}get max(){return this._options.max}set max(e){this._options.max=e}get damp(){return this._options.damp}set damp(e){this._options.damp=e}get springiness(){return this._options.springiness}set springiness(e){this._options.springiness=e}}var J3=Object.defineProperty,eA=(r,e,t)=>e in r?J3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,In=(r,e,t)=>(eA(r,typeof e!="symbol"?e+"":e,t),t);class tA{constructor(){In(this,"done"),In(this,"to"),In(this,"_spring"),In(this,"_pos"),In(this,"_speed"),In(this,"_correctSpeed"),this._spring=new Q3,this._pos=0,this.to=0}start(e,t,i){this._speed=e,this._pos=t,this.to=i,this.done=!1,this._spring.x=this._pos,this._spring.tx=this.to;const n=this.to-this._pos,s=Math.abs(n)/n,o=Math.abs(this._speed)/this._speed;s!==o?this._correctSpeed=!0:this._correctSpeed=!1}update(){if(this._correctSpeed)this._speed*=.6,Math.abs(this._speed)<2&&(this._correctSpeed=!1),this._pos+=this._speed,this._spring.x=this._pos;else{const e=this.to-this._pos;Math.abs(e)<.05?(this._pos=this.to,this.done=!0):(this._spring.tx=this.to,this._spring.update(),this._pos=this._spring.x)}return this._pos}cancel(){}}var iA=Object.defineProperty,rA=(r,e,t)=>e in r?iA(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,kt=(r,e,t)=>(rA(r,typeof e!="symbol"?e+"":e,t),t);class E_{constructor(e={}){kt(this,"position",0),kt(this,"constrain",!0),kt(this,"min",0),kt(this,"max",0),kt(this,"maxSpeed",400),kt(this,"_ease"),kt(this,"_offset",0),kt(this,"_prev",0),kt(this,"_speed",0),kt(this,"_hasStopped"),kt(this,"_targetSpeed",0),kt(this,"_speedChecker",0),kt(this,"_grab",0),kt(this,"_activeEase"),this.constrain=e.constrain??!0,this.maxSpeed=e.maxSpeed??400,this._ease=e.ease??new tA}set value(e){this._speed=0,this.position=e}get value(){return this.position}grab(e){this._grab=e,this._offset=this.position-e,this._speedChecker=0,this._targetSpeed=this._speed=0,this._hasStopped=!1}hold(e){this._speedChecker++,this.position=e+this._offset,this._speedChecker>1&&(this._targetSpeed=this.position-this._prev),this._speed+=(this._targetSpeed-this._speed)/2,this._speed>this.maxSpeed?this._speed=this.maxSpeed:this._speed<-this.maxSpeed&&(this._speed=-this.maxSpeed),this._prev=this.position,this.constrain&&(this._activeEase=null,this.position>this.min?this.position-=(this.position-this.min)/1.5:this.position<this.max&&(this.position+=(this.max-this.position)/1.5))}slide(e=!1){this._hasStopped||(this.constrain?this._updateConstrain(e):this._updateDefault())}get moveAmount(){return-(this.position-this._offset-this._grab)}_updateDefault(){this._speed*=.9,this.position+=this._speed,(this._speed<0?this._speed*-1:this._speed)<.01&&(this._hasStopped=!0)}_updateConstrain(e=!1){const t=this.max;e?(this.value>0&&(this.value=0),this.value>0&&(this.value=0),this.value<this.max&&(this.value=this.max),this.value<this.max&&(this.value=this.max)):this.position>this.min||this.position<t||this._activeEase?(this._activeEase||(this._activeEase=this._ease,this.position>this.min?this._activeEase.start(this._speed,this.position,this.min):this._activeEase.start(this._speed,this.position,t)),this.position=this._activeEase.update(),this._activeEase.done&&(this.position=this._activeEase.to,this._speed=0,this._activeEase=null)):this._updateDefault()}}var nA=Object.defineProperty,sA=(r,e,t)=>e in r?nA(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dr=(r,e,t)=>(sA(r,typeof e!="symbol"?e+"":e,t),t);class oA{constructor(e){dr(this,"xAxis"),dr(this,"yAxis"),dr(this,"_isDown"),dr(this,"_globalPosition"),dr(this,"_frame"),dr(this,"_bounds"),dr(this,"_dirty"),dr(this,"disableEasing",!1),this.xAxis=new E_({ease:e.xEase,maxSpeed:e.maxSpeed,constrain:e.constrain}),this.yAxis=new E_({ease:e.yEase,maxSpeed:e.maxSpeed,constrain:e.constrain}),this.disableEasing=e.disableEasing??!1,this._frame=new De,this._bounds=new De,this._globalPosition=new Ge}pointerDown(e){this._globalPosition=e,this.xAxis.grab(e.x),this.yAxis.grab(e.y),this._isDown=!0}pointerUp(){this._isDown=!1}pointerMove(e){this._globalPosition=e}update(){this._dirty&&(this._dirty=!1,this.xAxis.min=this._bounds.left,this.xAxis.min=this._bounds.right-this._frame.width,this.xAxis.min=this._bounds.top,this.xAxis.min=this._bounds.bottom-this._frame.height),this._isDown?(this.xAxis.hold(this._globalPosition.x),this.yAxis.hold(this._globalPosition.y)):(this.xAxis.slide(this.disableEasing),this.yAxis.slide(this.disableEasing))}resize(e,t){this._frame.x=0,this._frame.width=e,this._frame.y=0,this._frame.height=t,this._dirty=!0}setBounds(e,t,i,n){this._bounds.x=e,this._bounds.width=t-e,this._bounds.y=i,this._bounds.height=n-i,this._dirty=!0}get x(){return this.xAxis.value}get y(){return this.yAxis.value}}var aA=Object.defineProperty,lA=(r,e,t)=>e in r?aA(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ne=(r,e,t)=>(lA(r,typeof e!="symbol"?e+"":e,t),t);class M_ extends ue{constructor(e){super(),Ne(this,"background"),Ne(this,"borderMask"),Ne(this,"lastWidth"),Ne(this,"lastHeight"),Ne(this,"__width",0),Ne(this,"__height",0),Ne(this,"_dimensionChanged",!1),Ne(this,"list"),Ne(this,"_trackpad"),Ne(this,"isDragging",0),Ne(this,"interactiveStorage",[]),Ne(this,"visibleItems",[]),Ne(this,"pressedChild"),Ne(this,"ticker",pt.shared),Ne(this,"options"),Ne(this,"stopRenderHiddenItemsTimeout"),Ne(this,"onMouseScrollBinding",this.onMouseScroll.bind(this)),Ne(this,"dragStarTouchPoint"),Ne(this,"isOver",!1),Ne(this,"proximityRange"),Ne(this,"proximityStatusCache",[]),Ne(this,"lastScrollX"),Ne(this,"lastScrollY"),Ne(this,"proximityCheckFrameCounter",0),Ne(this,"onProximityChange",new Pi.Signal),Ne(this,"onScroll",new Pi.Signal),e&&this.init(e),this.ticker.add(this.update,this)}init(e){this.options=e,this.setBackground(e.background),this.__width=e.width|this.background.width,this.__height=e.height|this.background.height,this.proximityRange=e.proximityRange??0,this.list||(this.list=new q3,super.addChild(this.list)),this.list.init({type:e.type,elementsMargin:e.elementsMargin,padding:e.padding,vertPadding:e.vertPadding,horPadding:e.horPadding,topPadding:e.topPadding,bottomPadding:e.bottomPadding,leftPadding:e.leftPadding,rightPadding:e.rightPadding}),this.addItems(e.items),this.hasBounds&&(this.addMask(),this.makeScrollable()),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.options.globalScroll=e.globalScroll??!0,this.options.shiftScroll=e.shiftScroll??!1,this.resize()}get hasBounds(){return!!this.__width||!!this.__height}addItems(e){e!=null&&e.length&&e.forEach(t=>this.addItem(t))}removeItems(){this.proximityStatusCache.length=0,this.list.removeChildren()}addItem(...e){if(e.length>1)e.forEach(t=>this.addItem(t));else{const t=e[0];(!t.width||!t.height)&&console.error("ScrollBox item should have size"),t.eventMode="static",this.list.addChild(t),this.proximityStatusCache.push(!1),this.options.disableDynamicRendering||(t.renderable=this.isItemVisible(t))}return this.resize(),e[0]}removeItem(e){this.list.removeItem(e),this.proximityStatusCache.splice(e,1),this.resize()}isItemVisible(e,t=0){const i=this.options.type==="vertical"||!this.options.type;let n=!1;const s=this.list;if(i){const o=e.y+s.y;o+e.height>=-t&&o<=this.options.height+t&&(n=!0)}else{const o=e.x+s.x;o+e.width>=-t&&o<=this.options.width+t&&(n=!0)}return n}get items(){var e;return((e=this.list)==null?void 0:e.children)??[]}setBackground(e){this.background&&this.removeChild(this.background),this.options.background=e,this.background=new je,this.addChildAt(this.background,0),this.resize()}addMask(){this.borderMask||(this.borderMask=new je,super.addChild(this.borderMask),this.mask=this.borderMask),this.resize()}makeScrollable(){this._trackpad||(this._trackpad=new oA({disableEasing:this.options.disableEasing})),this.on("pointerdown",e=>{this.renderAllItems(),this.isDragging=1,this.dragStarTouchPoint=this.worldTransform.applyInverse(e.global),this._trackpad.pointerDown(this.dragStarTouchPoint);const t=this.list.worldTransform.applyInverse(e.global);this.visibleItems.forEach(i=>{i.x<t.x&&i.x+i.width>t.x&&i.y<t.y&&i.y+i.height>t.y&&(this.pressedChild=i)})}),this.on("pointerup",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("pointerover",()=>{this.isOver=!0}),this.on("pointerout",()=>{this.isOver=!1}),this.on("pointerupoutside",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("globalpointermove",e=>{var n;if(!this.isDragging)return;const t=this.options.type!=="horizontal",i=this.worldTransform.applyInverse(e.global);if(this.dragStarTouchPoint){const s=this.options.dragTrashHold??10;if(this.options.type==="horizontal"){const o=i.x-this.dragStarTouchPoint.x;Math.abs(o)>s&&(this.isDragging=2)}else{const o=i.y-this.dragStarTouchPoint.y;Math.abs(o)>s&&(this.isDragging=2)}}this.dragStarTouchPoint&&this.isDragging!==2||(this._trackpad.pointerMove(i),this.pressedChild&&(this.revertClick(this.pressedChild),this.pressedChild=null),(n=this.onScroll)==null||n.emit(t?this.scrollY:this.scrollX))}),document.addEventListener("wheel",this.onMouseScrollBinding,!0)}setInteractive(e){this.eventMode=e?"static":"auto"}get listHeight(){return this.list.height+this.list.topPadding+this.list.bottomPadding}get listWidth(){return this.list.width+this.list.leftPadding+this.list.rightPadding}resize(e=!1){if(this.hasBounds){if(this.renderAllItems(),this.borderMask&&(e||this._dimensionChanged||this.lastWidth!==this.listWidth||this.lastHeight!==this.listHeight)){this.options.width||(this.__width+=this.listWidth),this.options.height||(this.__height+=this.listHeight),this.borderMask.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill(16711935).stroke(0),this.borderMask.eventMode="none";const t=this.options.background;this.background.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill({color:t??0,alpha:t?1:1e-7}),this.options.type==="horizontal"?this.setInteractive(this.listWidth>this.__width):this.setInteractive(this.listHeight>this.__height),this.lastWidth=this.listWidth,this.lastHeight=this.listHeight}if(this._trackpad){const t=this.borderMask.width-this.list.width-this.list.leftPadding-this.list.rightPadding,i=this.borderMask.height-this.list.height-this.list.topPadding-this.list.bottomPadding;this.options.type==="vertical"?this._trackpad.yAxis.max=-Math.abs(i):this.options.type==="horizontal"?this._trackpad.xAxis.max=-Math.abs(t):(this._trackpad.yAxis.max=-Math.abs(i),this._trackpad.xAxis.max=-Math.abs(t))}this._dimensionChanged?(this.list.arrangeChildren(),this.stopRenderHiddenItems(),this._dimensionChanged=!1):this.updateVisibleItems(),this.lastScrollX=null,this.lastScrollY=null}}onMouseScroll(e){var i,n;if(!this.isOver&&!this.options.globalScroll)return;this.renderAllItems();const t=this.options.shiftScroll?typeof e.deltaX<"u"||typeof e.deltaY<"u":typeof e.deltaX<"u";if(this.options.type==="horizontal"&&t){const s=this.options.shiftScroll?e.deltaX:e.deltaY,o=this.list.x-s;if(this.listWidth<this.__width)this._trackpad.xAxis.value=0;else{const a=this.__width-this.listWidth,l=0;this._trackpad.xAxis.value=Math.min(l,Math.max(a,o))}(i=this.onScroll)==null||i.emit(this._trackpad.xAxis.value)}else if(typeof e.deltaY<"u"){const s=this.list.y-e.deltaY;if(this.listHeight<this.__height)this._trackpad.yAxis.value=0;else{const o=this.__height-this.listHeight,a=0;this._trackpad.yAxis.value=Math.min(a,Math.max(o,s))}(n=this.onScroll)==null||n.emit(this._trackpad.yAxis.value)}this.stopRenderHiddenItems()}scrollBottom(){this.interactive?this.scrollTo(this.list.children.length-1):this.scrollTop()}scrollTop(){this.renderAllItems(),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.stopRenderHiddenItems()}renderAllItems(){clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null,!this.options.disableDynamicRendering&&this.items.forEach(e=>{e.renderable=!0})}stopRenderHiddenItems(){this.options.disableDynamicRendering||(this.stopRenderHiddenItemsTimeout&&(clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null),this.stopRenderHiddenItemsTimeout=setTimeout(()=>this.updateVisibleItems(),2e3))}updateVisibleItems(){this.visibleItems.length=0,this.items.forEach(e=>{e.renderable=this.isItemVisible(e),this.visibleItems.push(e)})}scrollTo(e){if(!this.interactive)return;const t=this.list.children[e];t&&(this.renderAllItems(),this._trackpad.xAxis.value=this.options.type==="horizontal"?this.__width-t.x-t.width-this.list.rightPadding:0,this._trackpad.yAxis.value=!this.options.type||this.options.type==="vertical"?this.__height-t.y-t.height-this.list.bottomPadding:0,this.stopRenderHiddenItems())}scrollToPosition({x:e,y:t}){e===void 0&&t===void 0||(this.renderAllItems(),e!==void 0&&(this.scrollX=-e),t!==void 0&&(this.scrollY=-t),this.stopRenderHiddenItems())}get height(){return this.__height}set height(e){this.__height=e,this._dimensionChanged=!0,this.resize(),this.scrollTop()}get width(){return this.__width}set width(e){this.__width=e,this._dimensionChanged=!0,this.resize(),this.scrollTop()}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t=t??e,this.__width=e,this.__height=t,this._dimensionChanged=!0,this.resize(),this.scrollTop()}getSize(e){return e=e||{width:0,height:0},e.width=this.__width,e.height=this.__height,e}get scrollX(){return this._trackpad.xAxis.value}set scrollX(e){this._trackpad.xAxis.value=e}get scrollY(){return this._trackpad.yAxis.value}set scrollY(e){this._trackpad.yAxis.value=e}update(){if(!this.list)return;this._trackpad.update();const e=this.options.type==="horizontal"?"x":"y";this.list[e]!==this._trackpad[e]&&(this.list[e]=this._trackpad[e]),!this.options.disableProximityCheck&&(this._trackpad.x!==this.lastScrollX||this._trackpad.y!==this.lastScrollY)&&(this.proximityCheckFrameCounter++,this.proximityCheckFrameCounter>=(this.options.proximityDebounce??10)&&(this.items.forEach((t,i)=>{const n=this.isItemVisible(t,this.proximityRange),s=this.proximityStatusCache[i];n!==s&&(this.proximityStatusCache[i]=n,this.onProximityChange.emit({item:t,index:i,inRange:n}))}),this.lastScrollX=this._trackpad.x,this.lastScrollY=this._trackpad.y,this.proximityCheckFrameCounter=0))}destroy(e){this.ticker.remove(this.update,this),document.removeEventListener("wheel",this.onMouseScrollBinding,!0),this.background.destroy(),this.list.destroy(),super.destroy(e)}restoreItemsInteractivity(){this.interactiveStorage.forEach(e=>{e.item.eventMode=e.eventMode}),this.interactiveStorage.length=0}revertClick(e){e.eventMode!=="auto"&&(Yi.any?e.emit("pointerupoutside",null):e.emit("mouseupoutside",null),this.interactiveStorage.push({item:e,eventMode:e.eventMode}),e.eventMode="auto"),e instanceof ue&&e.children&&e.children.forEach(t=>this.revertClick(t))}get scrollHeight(){return this.list.height}get scrollWidth(){return this.list.width}}var Ct=dt.registerPlugin($g)||dt;Ct.core.Tween;let R_;function uA(r){return R_=r,r}function Gs(){return R_}class wh{static setParamValue(e,t){if(e.setValueAtTime){const i=Gs().context;e.setValueAtTime(t,i.audioContext.currentTime)}else e.value=t;return t}}class hA extends nt{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(e){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let cA=0;const Th=class extends nt{constructor(r){super(),this.id=cA++,this.init(r)}set(r,e){if(this[r]===void 0)throw new Error(`Property with name ${r} does not exist.`);switch(r){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"paused":this.paused=e;break;case"loop":this.loop=e;break;case"muted":this.muted=e;break}return this}get progress(){const{currentTime:r}=this._source;return r/this._duration}get paused(){return this._paused}set paused(r){this._paused=r,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(r){this._playing=!1,this._duration=r.source.duration;const e=this._source=r.source.cloneNode(!1);e.src=r.parent.url,e.onplay=this._onPlay.bind(this),e.onpause=this._onPause.bind(this),r.context.on("refresh",this.refresh,this),r.context.on("refreshPaused",this.refreshPaused,this),this._media=r}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(r){this._speed=r,this.refresh()}get volume(){return this._volume}set volume(r){this._volume=r,this.refresh()}get loop(){return this._loop}set loop(r){this._loop=r,this.refresh()}get muted(){return this._muted}set muted(r){this._muted=r,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(r){console.warn("HTML Audio does not support filters")}refresh(){const r=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const t=r.volume*(r.muted?0:1),i=e.volume*(e.muted?0:1),n=this._volume*(this._muted?0:1);this._source.volume=n*t*i,this._source.playbackRate=this._speed*r.speed*e.speed}refreshPaused(){const r=this._media.context,e=this._media.parent,t=this._paused||e.paused||r.paused;t!==this._pausedReal&&(this._pausedReal=t,t?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",t))}play(r){const{start:e,end:t,speed:i,loop:n,volume:s,muted:o}=r;t&&console.assert(t>e,"End time is before start time"),this._speed=i,this._volume=s,this._loop=!!n,this._muted=o,this.refresh(),this.loop&&t!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=e,this._end=t||this._duration,this._start=Math.max(0,this._start-Th.PADDING),this._end=Math.min(this._end+Th.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=e,this._source.onloadedmetadata=null,this.emit("progress",e/this._duration,this._duration),pt.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){pt.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){pt.shared.remove(this._onUpdate,this),this.removeAllListeners();const r=this._source;r&&(r.onended=null,r.onplay=null,r.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let I_=Th;I_.PADDING=.1;class dA extends nt{init(e){this.parent=e,this._source=e.options.source||new Audio,e.url&&(this._source.src=e.url)}create(){return new I_(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(e){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(e){const t=this._source,i=this.parent;if(t.readyState===4){i.isLoaded=!0;const l=i.autoPlayStart();e&&setTimeout(()=>{e(null,i,l)},0);return}if(!i.url){e(new Error("sound.url or sound.source must be set"));return}t.src=i.url;const n=()=>{a(),i.isLoaded=!0;const l=i.autoPlayStart();e&&e(null,i,l)},s=()=>{a(),e&&e(new Error("Sound loading has been aborted"))},o=()=>{a();const l=`Failed to load audio element (code: ${t.error.code})`;e?e(new Error(l)):console.error(l)},a=()=>{t.removeEventListener("canplaythrough",n),t.removeEventListener("load",n),t.removeEventListener("abort",s),t.removeEventListener("error",o)};t.addEventListener("canplaythrough",n,!1),t.addEventListener("load",n,!1),t.addEventListener("abort",s,!1),t.addEventListener("error",o,!1),t.load()}}class fA{constructor(e,t){this.parent=e,Object.assign(this,t),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(e){return this.parent.play({complete:e,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const ca=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],pA=["audio/mpeg","audio/ogg"],da={};function mA(r){const e={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},t=document.createElement("audio"),i={},n=/^no$/;ca.forEach(s=>{const o=t.canPlayType(`audio/${s}`).replace(n,""),a=e[s]?t.canPlayType(e[s]).replace(n,""):"";i[s]=!!o||!!a}),Object.assign(da,i)}mA();let gA=0;class _A extends nt{constructor(e){super(),this.id=gA++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(e)}set(e,t){if(this[e]===void 0)throw new Error(`Property with name ${e} does not exist.`);switch(e){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"muted":this.muted=t;break;case"loop":this.loop=t;break;case"paused":this.paused=t;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}get filters(){return this._filters}set filters(e){var t;this._filters&&((t=this._filters)==null||t.filter(i=>i).forEach(i=>i.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=e!=null&&e.length?e.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const e=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const i=e.volume*(e.muted?0:1),n=t.volume*(t.muted?0:1),s=this._volume*(this._muted?0:1);wh.setParamValue(this._gain.gain,s*n*i),wh.setParamValue(this._source.playbackRate,this._speed*t.speed*e.speed),this.applyFilters()}applyFilters(){var e;if((e=this._filters)!=null&&e.length){this._source.disconnect();let t=this._source;this._filters.forEach(i=>{t.connect(i.destination),t=i}),t.connect(this._gain)}}refreshPaused(){const e=this._media.context,t=this._media.parent,i=this._paused||t.paused||e.paused;i!==this._pausedReal&&(this._pausedReal=i,i?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",i))}play(e){const{start:t,end:i,speed:n,loop:s,volume:o,muted:a,filters:l}=e;i&&console.assert(i>t,"End time is before start time"),this._paused=!1;const{source:u,gain:h}=this._media.nodes.cloneBufferSource();this._source=u,this._gain=h,this._speed=n,this._volume=o,this._loop=!!s,this._muted=a,this._filters=l,this.refresh();const c=this._source.buffer.duration;this._duration=c,this._end=i,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=i,this._source.loopStart=t,this._source.start(0,t)):i?this._source.start(0,t,i-t):this._source.start(0,t),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(e){pt.shared.remove(this._updateListener,this),e&&pt.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}destroy(){var e;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(e=this._filters)==null||e.forEach(t=>t.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(e=!1){if(this._source){const t=this._now(),i=t-this._lastUpdate;if(i>0||e){const n=this._source.playbackRate.value;this._elapsed+=i*n,this._lastUpdate=t;const s=this._duration;let o;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;o=(this._source.loopStart+this._elapsed%a)/s}else o=this._elapsed%s/s;this._progress=o,this.emit("progress",this._progress,s)}}}init(e){this._media=e,e.context.events.on("refresh",this.refresh,this),e.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class O_{constructor(e,t){this._output=t,this._input=e}get destination(){return this._input}get filters(){return this._filters}set filters(e){if(this._filters&&(this._filters.forEach(t=>{t&&t.disconnect()}),this._filters=null,this._input.connect(this._output)),e&&e.length){this._filters=e.slice(0),this._input.disconnect();let t=null;e.forEach(i=>{t===null?this._input.connect(i.destination):t.connect(i.destination),t=i}),t.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const F_=class extends O_{constructor(r){const e=r.audioContext,t=e.createBufferSource(),i=e.createGain(),n=e.createAnalyser();t.connect(n),n.connect(i),i.connect(r.destination),super(n,i),this.context=r,this.bufferSource=t,this.gain=i,this.analyser=n}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(F_.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const r=this.bufferSource,e=this.context.audioContext.createBufferSource();e.buffer=r.buffer,wh.setParamValue(e.playbackRate,r.playbackRate.value),e.loop=r.loop;const t=this.context.audioContext.createGain();return e.connect(t),t.connect(this.destination),{source:e,gain:t}}get bufferSize(){return this.script.bufferSize}};let B_=F_;B_.BUFFER_SIZE=0;class xA{init(e){this.parent=e,this._nodes=new B_(this.context),this._source=this._nodes.bufferSource,this.source=e.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null,this.source=null}create(){return new _A(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(e){this._nodes.filters=e}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(e){this._source.buffer=e}get nodes(){return this._nodes}load(e){this.source?this._decode(this.source,e):this.parent.url?this._loadUrl(e):e?e(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(e){const t=this.parent.url,i=await Se.get().fetch(t);this._decode(await i.arrayBuffer(),e)}_decode(e,t){const i=(n,s)=>{if(n)t&&t(n);else{this.parent.isLoaded=!0,this.buffer=s;const o=this.parent.autoPlayStart();t&&t(null,this.parent,o)}};e instanceof AudioBuffer?i(null,e):this.parent.context.decode(e,i)}}const On=class{static from(r){let e={};typeof r=="string"?e.url=r:r instanceof ArrayBuffer||r instanceof AudioBuffer||r instanceof HTMLAudioElement?e.source=r:Array.isArray(r)?e.url=r:e=r,e={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...e},Object.freeze(e);const t=Gs().useLegacy?new dA:new xA;return new On(t,e)}constructor(r,e){this.media=r,this.options=e,this._instances=[],this._sprites={},this.media.init(this);const t=e.complete;this._autoPlayOptions=t?{complete:t}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=e.autoPlay,this.singleInstance=e.singleInstance,this.preload=e.preload||this.autoPlay,this.url=Array.isArray(e.url)?this.preferUrl(e.url):e.url,this.speed=e.speed,this.volume=e.volume,this.loop=e.loop,e.sprites&&this.addSprites(e.sprites),this.preload&&this._preload(e.loaded)}preferUrl(r){const[e]=r.map(t=>({url:t,ext:mt.extname(t).slice(1)})).filter(({ext:t})=>da[t]).sort((t,i)=>ca.indexOf(t.ext)-ca.indexOf(i.ext));if(!e)throw new Error("No supported file type found");return e.url}get context(){return Gs().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(r){this._paused=r,this.refreshPaused()}get speed(){return this._speed}set speed(r){this._speed=r,this.refresh()}get filters(){return this.media.filters}set filters(r){this.media.filters=r}addSprites(r,e){if(typeof r=="object"){const i={};for(const n in r)i[n]=this.addSprites(n,r[n]);return i}console.assert(!this._sprites[r],`Alias ${r} is already taken`);const t=new fA(this,e);return this._sprites[r]=t,t}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(r){if(r){const e=this._sprites[r];e!==void 0&&(e.destroy(),delete this._sprites[r])}else for(const e in this._sprites)this.removeSprites(e);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let r=this._instances.length-1;r>=0;r--)this._instances[r].stop();return this}play(r,e){let t;if(typeof r=="string"?t={sprite:r,loop:this.loop,complete:e}:typeof r=="function"?(t={},t.complete=r):t=r,t={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...t||{}},t.sprite){const n=t.sprite;console.assert(!!this._sprites[n],`Alias ${n} is not available`);const s=this._sprites[n];t.start=s.start+(t.start||0),t.end=s.end,t.speed=s.speed||1,t.loop=s.loop||t.loop,delete t.sprite}if(t.offset&&(t.start=t.offset),!this.isLoaded)return this._preloadQueue?new Promise(n=>{this._preloadQueue.push(()=>{n(this.play(t))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=t,new Promise((n,s)=>{this._preload((o,a,l)=>{this._preloadQueue.forEach(u=>u()),this._preloadQueue=null,o?s(o):(t.loaded&&t.loaded(o,a,l),n(l))})}));(this.singleInstance||t.singleInstance)&&this._removeInstances();const i=this._createInstance();return this._instances.push(i),this.isPlaying=!0,i.once("end",()=>{t.complete&&t.complete(this),this._onComplete(i)}),i.once("stop",()=>{this._onComplete(i)}),i.play(t),i}refresh(){const r=this._instances.length;for(let e=0;e<r;e++)this._instances[e].refresh()}refreshPaused(){const r=this._instances.length;for(let e=0;e<r;e++)this._instances[e].refreshPaused()}get volume(){return this._volume}set volume(r){this._volume=r,this.refresh()}get muted(){return this._muted}set muted(r){this._muted=r,this.refresh()}get loop(){return this._loop}set loop(r){this._loop=r,this.refresh()}_preload(r){this.media.load(r)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let r;return this.autoPlay&&(r=this.play(this._autoPlayOptions)),r}_removeInstances(){for(let r=this._instances.length-1;r>=0;r--)this._poolInstance(this._instances[r]);this._instances.length=0}_onComplete(r){if(this._instances){const e=this._instances.indexOf(r);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}this._poolInstance(r)}_createInstance(){if(On._pool.length>0){const r=On._pool.pop();return r.init(this.media),r}return this.media.create()}_poolInstance(r){r.destroy(),On._pool.indexOf(r)<0&&On._pool.push(r)}};let fa=On;fa._pool=[];class zs extends O_{constructor(){const e=window,t=new zs.AudioContext,i=t.createDynamicsCompressor(),n=t.createAnalyser();n.connect(i),i.connect(t.destination),super(n,i),this.autoPause=!0,this._ctx=t,this._offlineCtx=new zs.OfflineAudioContext(1,2,e.OfflineAudioContext?Math.max(8e3,Math.min(96e3,t.sampleRate)):44100),this.compressor=i,this.analyser=n,this.events=new nt,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=t.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const e=this._ctx.state;(e==="suspended"||e==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const e=this._ctx.createBufferSource();e.buffer=this._ctx.createBuffer(1,1,22050),e.connect(this._ctx.destination),e.start(0,0,0),e.context.state==="suspended"&&e.context.resume()}static get AudioContext(){const e=window;return e.AudioContext||e.webkitAudioContext||null}static get OfflineAudioContext(){const e=window;return e.OfflineAudioContext||e.webkitOfflineAudioContext||null}destroy(){super.destroy();const e=this._ctx;typeof e.close<"u"&&e.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(e){e&&this._ctx.state==="running"?this._ctx.suspend():!e&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=e}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(e,t){const i=s=>{t(new Error((s==null?void 0:s.message)||"Unable to decode file"))},n=this._offlineCtx.decodeAudioData(e,s=>{t(null,s)},i);n&&n.catch(i)}}class vA{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new zs),this._htmlAudioContext=new hA,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(e){this.useLegacy||(this._context.filters=e)}get supported(){return zs.AudioContext!==null}add(e,t){if(typeof e=="object"){const s={};for(const o in e){const a=this._getOptions(e[o],t);s[o]=this.add(o,a)}return s}if(console.assert(!this._sounds[e],`Sound with alias ${e} already exists.`),t instanceof fa)return this._sounds[e]=t,t;const i=this._getOptions(t),n=fa.from(i);return this._sounds[e]=n,n}_getOptions(e,t){let i;return typeof e=="string"?i={url:e}:Array.isArray(e)?i={url:e}:e instanceof ArrayBuffer||e instanceof AudioBuffer||e instanceof HTMLAudioElement?i={source:e}:i=e,i={...i,...t||{}},i}get useLegacy(){return this._useLegacy}set useLegacy(e){this._useLegacy=e,this._context=!e&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(e){this._webAudioContext.autoPause=!e}remove(e){return this.exists(e,!0),this._sounds[e].destroy(),delete this._sounds[e],this}get volumeAll(){return this._context.volume}set volumeAll(e){this._context.volume=e,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(e){this._context.speed=e,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const e in this._sounds)this._sounds[e].destroy(),delete this._sounds[e];return this}stopAll(){for(const e in this._sounds)this._sounds[e].stop();return this}exists(e,t=!1){const i=!!this._sounds[e];return t&&console.assert(i,`No sound matching alias '${e}'.`),i}isPlaying(){for(const e in this._sounds)if(this._sounds[e].isPlaying)return!0;return!1}find(e){return this.exists(e,!0),this._sounds[e]}play(e,t){return this.find(e).play(t)}stop(e){return this.find(e).stop()}pause(e){return this.find(e).pause()}resume(e){return this.find(e).resume()}volume(e,t){const i=this.find(e);return t!==void 0&&(i.volume=t),i.volume}speed(e,t){const i=this.find(e);return t!==void 0&&(i.speed=t),i.speed}duration(e){return this.find(e).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}const k_=r=>{var i;const e=r.src;let t=(i=r==null?void 0:r.alias)==null?void 0:i[0];return(!t||r.src===t)&&(t=mt.basename(e,mt.extname(e))),t},yA={extension:M.Asset,detection:{test:async()=>!0,add:async r=>[...r,...ca.filter(e=>da[e])],remove:async r=>r.filter(e=>r.includes(e))},loader:{name:"sound",extension:{type:[M.LoadParser],priority:ki.High},test(r){const e=mt.extname(r).slice(1);return!!da[e]||pA.some(t=>r.startsWith(`data:${t}`))},async load(r,e){const t=await new Promise((i,n)=>fa.from({...e.data,url:r,preload:!0,loaded(s,o){var a,l;s?n(s):i(o),(l=(a=e.data)==null?void 0:a.loaded)==null||l.call(a,s,o)}}));return Gs().add(k_(e),t),t},async unload(r,e){Gs().remove(k_(e))}}};oe.add(yA);const bA=uA(new vA);class SA{constructor(){this.volume=.7}async play(e,t){if(L.audioSetting.bgmOn!=!1&&this.currentAlias!==e){if(this.current){const i=this.current;Ct.killTweensOf(i),Ct.to(i,{volume:0,duration:1,ease:"linear"}).then(()=>{i.stop()})}this.current=bA.find(e),this.currentAlias=e,this.current.play({loop:!0,...t}),this.current.volume=0,Ct.killTweensOf(this.current),Ct.to(this.current,{volume:this.volume,duration:1,ease:"linear"})}}stop(){var e;(e=this.current)==null||e.stop(),this.currentAlias=""}getVolume(){return this.volume}setVolume(e){this.volume=e,this.current&&(this.current.volume=this.volume)}}const U_=new SA;class wA extends ue{constructor(){super();const e=120;let t=L.width*.9,i=L.height*.25>e?L.height*.25:e,n="Cài đặt";const s=new je().roundRect(0,0,t,i,30).fill("orange");s.filters=[new dh({type:0,angle:0,stops:[{color:"#E6C539",alpha:1,offset:1},{color:"#FFB725",alpha:1,offset:.8},{color:"#F02C2C",alpha:1,offset:0}]}),new xh({color:"white",thickness:4})],s.position.set((L.width-t)/2,0),this.addChild(s);const o=new ot({text:n,style:{fontFamily:"Archia Medium",fontSize:22,fill:"white"}});o.anchor.set(.5),o.position.set(L.width/2,s.position.y+30),this.addChild(o);const a=new je().roundRect(0,0,t*.9,i*.8).fill("#FFF0DD");a.position.set(s.position.x+20,20),this.addChild(a),this.renderSettingOption("Âm thanh",u=>{L.audioSetting.sfxOn=u},1,a.position,a.width,L.audioSetting.sfxOn),this.renderSettingOption("Nhạc nền",u=>{L.audioSetting.bgmOn=u,u?U_.play("bgm"):U_.stop()},2,a.position,a.width,L.audioSetting.bgmOn);const l=Ie.from("close_modal");l.tint="#444444",l.anchor.set(.5),l.width=60,l.height=60,l.position.set(s.position.x+s.width/2,s.position.y+s.height+60),l.on("pointerup",u=>{L.toggleSetting(!1)}),l.eventMode="static",this.addChild(l),Ct.to(this.position,{x:0,y:L.height/4,ease:"bounce"})}renderSettingOption(e,t,i,n,s,o){const a=new ot({text:e,style:{fontSize:20,fontFamily:"Archia Medium"}});a.position.set(n.x+20,n.y+20*i+(i-1)*40);const l=new N3({style:{unchecked:"toggleOff",checked:"toggleOn"}}),u=l.width/l.height;l.width=60,l.height=l.width/u,l.position.set(n.x+s-40-l.width,n.y+20*i+(i-1)*40),l.checked=o,l.onChange.connect(t),this.addChild(a),this.addChild(l)}update(e){}resize(){}focus(){}blur(){}pause(){}}function D_(r,e,t){return t<=r&&t>=e?t:t>r?r:t<e?e:t}const Ls={text:"",textStyle:{fontFamily:"Archia Medium",fill:4868682,fontSize:15},width:300,height:0,texture:"yellow_button",textureColor:"#ffffff",icon:"",iconSize:0,iconColor:"white",offsetSlides:[0,0,0,0],onClick:()=>{}};class ri extends j3{constructor(e={}){const t={...Ls,...e};let i,n=t.url?t.url:X.from(t.texture);n||(n=X.from(Ls==null?void 0:Ls.texture)),(t.height==0||t.height==null)&&(t.height=n.height*t.width/n.width),i=new fu({texture:n,leftWidth:t.offsetSlides[0],rightWidth:t.offsetSlides[1],topHeight:t.offsetSlides[2],bottomHeight:t.offsetSlides[3],width:t.width,height:t.height,tint:t.textureColor??Ls.textureColor}),super({defaultView:i,anchor:.5,animations:{pressed:{props:{scale:{x:.95,y:.95},y:0},duration:.1}}}),this.onClick=()=>{},this.originalIconScale=1,this.pressedIconScale=1,this.opts=t,this.width=t.width,t.height&&(this.height=t.height),t.onClick&&(this.onClick=t.onClick),t.text&&(this.messageLabel=new ot({text:t.text,style:t.textStyle}),this.messageLabel.anchor.set(.5),this.addChild(this.messageLabel)),t.icon&&this.messageLabel?(this.icon=t.iconUrl?Ie.from((t==null?void 0:t.iconUrl)||""):Ie.from((t==null?void 0:t.icon)||""),t.text&&(this.icon.anchor.set(.5,.5),this.icon.position.set(this.messageLabel.position.x-this.messageLabel.width/2-5,-6),t.iconSize&&(this.icon.width=t.iconSize,this.icon.height=t.iconSize,this.messageLabel.position.x+=t.iconSize/2,this.icon.position.y+=t.iconSize/4,this.originalIconScale=this.icon.scale.x,this.pressedIconScale=this.icon.scale.x*.9),t.iconColor&&(this.icon.tint=t.iconColor),this.addChild(this.icon))):t.icon&&(this.icon=t.iconUrl?Ie.from((t==null?void 0:t.iconUrl)||""):Ie.from((t==null?void 0:t.icon)||""),t.iconSize&&(this.icon.width=t.iconSize,this.icon.height=t.iconSize,this.icon.anchor.set(.5,.5),this.icon.position.set(0,0),this.originalIconScale=this.icon.scale.x,this.pressedIconScale=this.icon.scale.x*.9),t.iconColor&&(this.icon.tint=t.iconColor),this.addChild(this.icon)),this.onDown.connect(this.handleDown.bind(this)),this.onUp.connect(this.handleUp.bind(this))}handleDown(){var e;(e=this.messageLabel)==null||e.scale.set(.9),this.icon&&this.icon.scale.set(this.pressedIconScale)}handleUp(){var e;(e=this.messageLabel)==null||e.scale.set(1),this.icon&&this.icon.scale.set(this.originalIconScale),this.onClick!=null&&this.onClick()}updateMessageText(e){this.messageLabel&&(this.messageLabel.text=e)}updateDefaultView(e){this.defaultView=new fu({texture:X.from(e||""),leftWidth:this.opts.offsetSlides[0],rightWidth:this.opts.offsetSlides[1],topHeight:this.opts.offsetSlides[2],bottomHeight:this.opts.offsetSlides[3],width:this.opts.width,height:this.opts.height})}}class TA extends ue{constructor(e,t,i,n){super();const s=Ie.from("tooltip"),o=s.width/(L.width*.8);s.width=L.width*.8,s.height=s.height/o;const a=new ot({text:e,style:{fontFamily:"Archia Medium",fontSize:20}});a.position.set(85,20);const l=new ot({text:t,style:{fontSize:16,fontFamily:"Archia Medium",wordWrap:!0,wordWrapWidth:s.width*.7,fill:1710104}});l.position.set(85,50);const u=new ri({text:i,texture:"white_border_button",width:100,offsetSlides:[0,0,0,0],textStyle:{fill:16777215,fontSize:14},onClick:n});u.anchor.set(.5),u.position.set(s.width-u.width/2-10,s.height-u.height),this.addChild(s),this.addChild(a),this.addChild(l),this.addChild(u)}}console.log("init emitter");const Ut=new nt;var At=(r=>(r.GET_DATA="GetData",r.TOAST="Toast",r.MESSAGE_BOX="MessageBox",r.LOADING_MESSAGES="LoadingMessages",r.UPDATE_WHEEL="UpdateWheel",r))(At||{});class CA extends ue{constructor(e,t){super(),this.toastHeight=50,this.duration=300,this.eslapseTime=0;const i=new je().rect(0,0,L.width,this.toastHeight).fill("black");i.alpha=.5,this.addChild(i);const n=new ot({text:e,style:{fontFamily:"Archia Medium",fontSize:20,fill:"white"}});if(n.anchor.set(.5),n.position.set(L.width/2,this.height/2),this.addChild(n),t){const s=Ie.from(t);s&&(s.width=30,s.height=30,s.anchor.set(.5),s.position.set(L.width/2-n.width/2-20,this.height/2),this.addChild(s))}this.position.set(0,L.height),dt.to(this.position,{x:0,y:L.height-this.toastHeight,ease:"bounce"}),this.startPop=!0}update(e){this.startPop&&(this.eslapseTime<this.duration?this.eslapseTime+=e:(dt.to(this.position,{x:0,y:L.height,ease:"sine"}),this.eslapseTime=0,this.startPop=!1))}resize(){}}const PA={width:300,height:100,title:"Fair Trade",description:"Dont let them run",buttonText:"Đổi Xu",onClick:()=>{},noCloseButton:!1};class Ns extends ue{constructor(e={}){super();const t={...PA,...e};let{title:i,width:n,height:s,description:o}=t;s<250&&(s=250);const a=new je().roundRect(0,0,n,s,30).fill("orange");a.filters=[new dh({type:0,angle:0,stops:[{color:"#E6C539",alpha:1,offset:1},{color:"#FFB725",alpha:1,offset:.8},{color:"#F02C2C",alpha:1,offset:0}]}),new xh({color:"white",thickness:4})],a.position.set((L.width-n)/2,0),this.addChild(a);const l=new ot({text:i,style:{fontFamily:"Archia Medium",fontSize:22,fill:"white"}});l.anchor.set(.5),l.position.set(L.width/2,a.position.y+30),this.addChild(l);const u=new je().roundRect(0,0,n*.9,s-80).fill("#FFF0DD");u.position.set(a.position.x+20,a.position.y+a.height-(s-60)),this.addChild(u);const h=new ot({text:o,style:{fontSize:22,wordWrapWidth:300,wordWrap:!0,fontFamily:"Archia Medium",align:"center"}});h.anchor.set(.5,1),h.position.set(L.width/2,u.position.y+100),this.addChild(h),this.position.set(0,-a.height);const c=new ri({width:180,height:50,texture:"green_button",text:t.buttonText,textStyle:{fontSize:20,fill:16777215,stroke:{color:"#000000",width:5,join:"round"}},onClick:()=>{t.onClick()}});if(c.position.set(L.width/2,L.height/2-a.height+220),this.addChild(c),t.noCloseButton==!1){const d=Ie.from("close_modal");d.anchor.set(.5),d.width=60,d.height=60,d.position.set(a.position.x+a.width/2,a.position.y+a.height+60),d.on("pointerup",f=>{L.closeCurrentPopup()}),d.eventMode="static",this.addChild(d)}dt.to(this.position,{x:0,y:L.height/4,ease:"bounce"})}update(e){}resize(){}focus(){}blur(){}pause(){}}const AA={fontFamily:"Archia Medium",align:"center",fontSize:15};class Dt extends ot{constructor(e,t){t={...AA,...t},super({text:e,style:t}),this.anchor.set(.5)}}class EA{constructor(){this._piecesCount=5,this._history=[],this._isFree=!0,this._score=100,this._cost=1}get History(){return this._history}set History(e){this._history=e}get IsFree(){return this._isFree}set IsFree(e){this._isFree=e}get Score(){return this._score}set Score(e){this._score=e}get Cost(){return this._cost}set PieceCount(e){this._piecesCount=e}get PieceCount(){return this._piecesCount}}const He=new EA;class MA extends ue{constructor(){super();const e=120;let t=L.width*.9,i=L.height*.25>e?L.height*.25:e,n="Nhập số ô vòng quay";const s=new je().roundRect(0,0,t,i,30).fill("orange");s.filters=[new dh({type:0,angle:0,stops:[{color:"#E6C539",alpha:1,offset:1},{color:"#FFB725",alpha:1,offset:.8},{color:"#F02C2C",alpha:1,offset:0}]}),new xh({color:"white",thickness:4})],s.position.set((L.width-t)/2,0),this.addChild(s);const o=new ot({text:n,style:{fontFamily:"Archia Medium",fontSize:22,fill:"black"}}),a=new je().roundRect(0,0,t*.9,i*.8).fill("#FFF0DD");a.position.set(s.position.x+20,20),this.addChild(a),o.anchor.set(.5,.5),o.position.set(L.width/2,50),this.addChild(o);const l=new ri({texture:"blue_tap_btn",width:42,height:42,text:"+",textStyle:{fontFamily:"Archia Medium",fontSize:32,fill:"white",align:"justify",fontWeight:"bold"},onClick:()=>{this.onPlusClick()}});l.position.set(L.width/2+50,125),this.addChild(l);const u=new ri({texture:"blue_tap_btn",width:42,height:42,text:"MAX",textStyle:{fontFamily:"Archia Medium",fontSize:14,fill:"white",align:"justify",fontWeight:"bold"},onClick:()=>{this.onMaxClick()}});u.position.set(L.width/2+100,125),this.addChild(u);const h=new ri({texture:"blue_tap_btn",width:42,height:42,text:"-",textStyle:{fontFamily:"Archia Medium",fontSize:32,fill:"white",align:"justify",fontWeight:"bold"},onClick:()=>{this.onMinusClick()}});h.position.set(L.width/2-50,125),this.addChild(h),this.currentPieceLabel=new Dt(He.PieceCount,new vt({fontFamily:"Archia Medium",fontSize:20,fill:"black",fontWeight:"bold",align:"justify"})),this.currentPieceLabel.position.set(L.width/2,125),this.addChild(this.currentPieceLabel);const c=new ri({texture:"blue_tap_btn",width:42,height:42,text:"MIN",textStyle:{fontFamily:"Archia Medium",fontSize:14,fill:"white",align:"justify",fontWeight:"bold"},onClick:()=>{this.onMinClick()}});c.position.set(L.width/2-100,125),this.addChild(c);const d=Ie.from("close_modal");d.tint="#444444",d.anchor.set(.5),d.width=60,d.height=60,d.position.set(s.position.x+s.width/2,s.position.y+s.height+60),d.on("pointerup",f=>{L.toggleSetConfig(!1),Ut.emit(At.UPDATE_WHEEL)}),d.eventMode="static",this.addChild(d),Ct.to(this.position,{x:0,y:L.height/4,ease:"bounce"})}onMinClick(){He.PieceCount=2,this.currentPieceLabel.text=`${He.PieceCount}`}onMaxClick(){He.PieceCount=15,this.currentPieceLabel.text=`${He.PieceCount}`}onPlusClick(){let e=He.PieceCount+1;e=Math.min(15,e),He.PieceCount=e,this.currentPieceLabel.text=`${He.PieceCount}`}onMinusClick(){let e=He.PieceCount-1;e=Math.max(2,e),He.PieceCount=e,this.currentPieceLabel.text=`${He.PieceCount}`}update(e){}resize(){}focus(){}blur(){}pause(){}}dt.registerPlugin(uh);const $=class ${constructor(){}static get width(){return $._width}static get height(){return $._height}static get GameConfig(){return $.gameConfig}static set GameConfig(e){this.gameConfig=e}static set PlayerData(e){this.playerData=e}static get PlayerData(){return this.playerData}static get App(){return this.app}static async initialize(e){var t;$.app=new cd,$.PlayerData={displayName:"",gold:0,leaderboardId:"",luckySpinTurn:0,remainingGiftTime:0,getDataTime:new Date,userId:""},uh.registerPIXI($.app),this.audioSetting={bgmOn:!0,sfxOn:!0},await $.app.init({backgroundAlpha:0,resolution:Math.max(window.devicePixelRatio,2)}),(t=document.getElementById(e))==null||t.appendChild($.app.canvas),window.addEventListener("resize",this.resize.bind(this)),this.resize(),$.app.ticker.add($.update),Ut.on(At.TOAST,({params:i})=>{i&&$.popToast(new CA(i.message,i.iconType))},this),Ut.on(At.MESSAGE_BOX,({params:i})=>{i&&$.popModal(new Ns({width:$.width*.85,height:$.height/3,title:i.title,description:i.message,noCloseButton:!0,buttonText:"OK",onClick:()=>{$.closeCurrentPopup()}}))},this)}static resize(){var a;const e=window.innerWidth,t=window.innerHeight;console.log(`window: ${e} x ${t}`);const i=320,n=640,s=430,o=932;$._width=D_(s,i,e),$._height=D_(o,n,t),this.app.renderer.canvas.style.width=`${$._width}px`,this.app.renderer.canvas.style.height=`${$._height}px`,window.scrollTo(0,0),$.app.renderer.resize($._width,$._height),console.log(`renderer resize to: ${$.width} ${$.height}`),(a=$.currentScreen)==null||a.resize()}static update(e){$.currentScreen&&$.currentScreen.update(e.deltaTime),$.currentPopup&&$.currentPopup.update(e.deltaTime),$.currentToast&&$.currentToast.update(e.deltaTime)}static changeScreen(e){$.currentScreen&&($.currentScreen.onDestroy&&$.currentScreen.onDestroy(),$.app.stage.removeChild($.currentScreen),$.currentScreen.destroy()),this.closeCurrentPopup(),$.currentScreen=e,$.app.stage.addChild($.currentScreen)}static popModal(e){this.currentPopup==null&&($.currentScreen.interactiveChildren=!1,$.currentScreen.blur&&$.currentScreen.blur(),$.currentPopup=e,$.app.stage.addChild($.currentPopup))}static popToast(e){this.removeToast(),$.currentToast=e,$.app.stage.addChild($.currentToast)}static removeToast(){var e;$.currentToast&&($.app.stage.removeChild($.currentToast),(e=$.currentToast)==null||e.destroy(),$.currentToast=void 0)}static closeCurrentPopup(){$.currentPopup&&($.app.stage.removeChild($.currentPopup),$.currentPopup.destroy(),$.currentPopup=void 0,$.currentScreen&&($.currentScreen.interactiveChildren=!0,$.currentScreen.focus&&$.currentScreen.focus()))}static toggleSetting(e){e?($.currentScreen.interactiveChildren=!1,$.currentScreen.blur&&$.currentScreen.blur(),$.quickSetting=new wA,$.app.stage.addChild($.quickSetting)):($.currentScreen.interactiveChildren=!0,$.quickSetting&&($.quickSetting.destroy(),$.app.stage.removeChild($.quickSetting)),$.currentScreen.focus&&$.currentScreen.focus())}static toggleSetConfig(e){e?($.currentScreen.interactiveChildren=!1,$.currentScreen.blur&&$.currentScreen.blur(),$.configSetting=new MA,$.app.stage.addChild($.configSetting)):($.currentScreen.interactiveChildren=!0,$.configSetting&&($.configSetting.destroy(),$.app.stage.removeChild($.configSetting)),$.currentScreen.focus&&$.currentScreen.focus())}static showTutorial(e,t,i,n,s){this.isNewUser!=!1&&(this.tutorialPop&&($.app.stage.removeChild(this.tutorialPop),this.tutorialPop.destroy(),this.tutorialPop=void 0),this.tutorialPop=new TA(e,t,i,s),this.tutorialPop.position.set(n.x-this.tutorialPop.width/2,n.y-this.tutorialPop.height-10),$.currentScreen.interactiveChildren=!1,$.app.stage.addChild(this.tutorialPop))}static closeTutorial(){this.tutorialPop&&($.app.stage.removeChild(this.tutorialPop),this.tutorialPop.destroy(),this.tutorialPop=void 0,this.isNewUser=!1,$.currentScreen.interactiveChildren=!0)}static setNewUser(e){this.isNewUser=e}blur(){var e,t,i,n;(t=(e=$.currentScreen)==null?void 0:e.blur)==null||t.call(e),(n=(i=$.currentPopup)==null?void 0:i.blur)==null||n.call(i)}focus(){var e,t,i,n;(t=(e=$.currentScreen)==null?void 0:e.focus)==null||t.call(e),(n=(i=$.currentPopup)==null?void 0:i.focus)==null||n.call(i)}static LoadUnderneath(){}};$.gameHasEnd=!1,$.isNewUser=!1;let L=$;const G_={bundles:[{name:"common",assets:[]}]};class RA extends ue{constructor(){super(),this.renderHeader()}update(e){}resize(){}renderHeader(){const e=new ri({texture:"back_button",width:20,onClick:()=>{L.changeScreen(new ga)}});e.tint=0,e.position.set(30,30),this.addChild(e)}}class z_ extends ue{constructor(e,t,i){super();const n=.05*L.width,s=0;this.background=new je().roundRect(n,s,L.width*.9,70,10).fill("white"),this.background.alpha=.7,this.addChild(this.background);const o=new ot({text:`#${t.rank}`,style:{fontFamily:"Archia Medium",fontSize:13}});o.anchor.set(.5),o.position.set(n+20,s+35),this.addChild(o);const a=Ie.from("round_avt");a.width=40,a.height=40,a.anchor.set(.5),a.position.set(n+60,s+35),this.addChild(a);const l=new ot({text:t.displayName,style:{fontFamily:"Archia Medium",fontSize:12}});l.position.set(n+90,s+35),l.anchor.set(0,.5),this.addChild(l);const u=Ie.from("currency");u.width=25,u.height=25,u.anchor.set(.5),u.position.set(L.width-110,s+35),this.addChild(u);const h=new ot({text:`+${t.goldRank.toLocaleString()}`,style:{fontSize:13,fontFamily:"Archia Medium"}});h.anchor.set(0,.5),h.position.set(L.width-90,s+35),this.addChild(h)}}class IA extends ue{constructor(){super(),this.ranks=[{rank:1,displayName:"Chin",goldRank:9610,userId:"90d48fed-718a-4481-98fb-59de3f6e7578"},{rank:2,displayName:"Nguyen",goldRank:390,userId:"271d0f1d-baa5-48a3-bb4d-3f0881306197"},{rank:3,displayName:"Ní",goldRank:0,userId:"e8fa5f4c-15fc-4c91-b692-0c4e283ab47f"},{rank:4,displayName:"Ní 2",goldRank:0,userId:"e8fa5f4c-15fc-4c91-b692-0c4e283ab47f"},{rank:5,displayName:"Ní 3",goldRank:0,userId:"e8fa5f4c-15fc-4c91-b692-0c4e283ab47f"}],this.myRank={rank:2,displayName:"Nguyen",goldRank:390,userId:"271d0f1d-baa5-48a3-bb4d-3f0881306197"},this.colorPalette=["#432E54","#AE445A","#E8BCB9"],this.addBackground(),this.addHeader(),this.onRenderMockData()}onRenderMockData(){this.renderTopRank(this.ranks),this.addPlayersList(this.ranks,4),this.renderMyRank(this.myRank)}onDestroy(){}update(e){}resize(){}addHeader(){const e=new ot({text:"Bảng Vàng",style:{fontSize:20,fontFamily:"Archia Medium"}});if(e.anchor.set(.5),e.position.set(L.width/2,35),this.addChild(e),L.gameHasEnd==!1){const t=new ri({texture:"back_button",width:20,onClick:()=>{L.changeScreen(new ga)}});t.tint=0,t.position.set(30,30),this.addChild(t)}}addBackground(){const e=Ie.from("trophy_icon");e.anchor.set(.5),e.position.set(L.width/2,140),e.scale.set(.25),this.addChild(e)}addPlayersList(e,t){let i=[];if(e&&e.length&&e.length>=t)for(let o=t-1;o<e.length;o++){const a=new z_(o,e[o],this);i.push(a)}const n=L.height/2.3,s=new M_({width:L.width,height:L.height-n-70,elementsMargin:10,bottomPadding:10,items:i});s.position.set(0,n),this.addChild(s)}renderTopRank(e){this.addTopRank(e[1],{x:-120,y:10}),this.addTopRank(e[0],{x:0,y:-20}),this.addTopRank(e[2],{x:120,y:10})}addTopRank(e,t){if(!e)return;const i=Ie.from("round_avt");i.width=80,i.height=80,i.anchor.set(.5),i.position.set(L.width/2+t.x,L.height/2-200+t.y),i.tint=this.colorPalette[e.rank-1],this.addChild(i);const n=new Dt(e.rank,{fontSize:30,fill:"white",stroke:{color:"black",width:5,join:"bevel"}});n.position=i.position,this.addChild(n);const s=new Dt(e.displayName.toUpperCase(),{fontSize:15});s.anchor.set(.5),s.position.set(L.width/2+t.x,L.height/2-145+t.y),this.addChild(s);const o=new Dt(`+${e.goldRank.toLocaleString()}`,{fontSize:13});o.position.set(L.width/2+t.x,L.height/2-118+t.y),this.addChild(o);const a=Ie.from("currency");a.width=20,a.height=20,a.position.set(L.width/2+t.x-(o.width/2+10+15),L.height/2-126+t.y),this.addChild(a)}renderMyRank(e){const t=new z_(e.rank,e,this);this.addChild(t),t.background.alpha=1,t.position.set(0,L.height-t.height-2)}}async function pa(r){const e=await Cr.load(r);return new Ie(e)}function ma(r,e,t,i){r.width=e,r.height=t,i.addChild(r)}class OA extends ue{constructor(e,t,i,n){super(),this.img=new Ie,this.index=-1,this.totalPieces=-1,this.radius=-1,this.data=n,this.index=e,this.totalPieces=t,this.radius=i;const s=Math.PI/180,o=e/t*Math.PI*2+s,a=(e+1)/t*Math.PI*2-s;this.pieceGraphics=new je,this.pieceGraphics.moveTo(0,0),this.pieceGraphics.lineTo(Math.cos(o)*i,Math.sin(o)*i),this.pieceGraphics.arc(0,0,i,o,a),this.pieceGraphics.moveTo(0,0),this.pieceGraphics.lineTo(Math.cos(a)*i,Math.sin(a)*i),this.pieceGraphics.fill(n.backColor),this.addChild(this.pieceGraphics),this.text=new ot(n.text,new vt({fontSize:15,fill:16777215,align:"center",wordWrap:!0,wordWrapWidth:100})),this.text.anchor.set(.5);const l=(o+a)/2,u=n.image&&n.image.length?i*4/5:i*3/4,h=i/2,c=Math.cos(l)*u,d=Math.sin(l)*u,f=o+Math.PI/t;this.text.x=c,this.text.y=d,this.text.rotation=f+Math.PI/2,this.addChild(this.text),n.image&&n.image.length&&pa(n.image).then(g=>{this.img=g,this.img.anchor.set(.5),this.img.width=32,this.img.height=32;const m=Math.cos(l)*h,_=Math.sin(l)*h;this.img.x=m,this.img.y=_,this.img.rotation=f+Math.PI/2,this.addChild(this.img)}).catch(()=>{})}get Index(){return this.index}blurIcon(e){e?this.text.filters=[new ns]:this.text.filters=[]}resetColor(){this.pieceGraphics.clear();const e=Math.PI/180,t=this.index/this.totalPieces*Math.PI*2+e,i=(this.index+1)/this.totalPieces*Math.PI*2-e;this.pieceGraphics.moveTo(0,0),this.pieceGraphics.lineTo(Math.cos(t)*this.radius,Math.sin(t)*this.radius),this.pieceGraphics.arc(0,0,this.radius,t,i),this.pieceGraphics.moveTo(0,0),this.pieceGraphics.lineTo(Math.cos(i)*this.radius,Math.sin(i)*this.radius),this.pieceGraphics.fill({color:this.data.backColor,alpha:1}),this.text.alpha=1}setColorResult(){const e={r:255,g:255,b:255};Ct.to(e,{r:0,g:0,b:0,duration:1.5,ease:"power2.out",onUpdate:()=>{const t=Math.round(e.r)<<16|Math.round(e.g)<<8|Math.round(e.b);this.pieceGraphics.clear();const i=Math.PI/180,n=this.index/this.totalPieces*Math.PI*2+i,s=(this.index+1)/this.totalPieces*Math.PI*2-i;this.pieceGraphics.moveTo(0,0),this.pieceGraphics.lineTo(Math.cos(n)*this.radius,Math.sin(n)*this.radius),this.pieceGraphics.arc(0,0,this.radius,n,s),this.pieceGraphics.moveTo(0,0),this.pieceGraphics.lineTo(Math.cos(s)*this.radius,Math.sin(s)*this.radius),this.pieceGraphics.fill({color:t,alpha:.8})}}),Ct.to(this.text,{alpha:.5,duration:1,ease:"power2.out"})}}class FA extends ue{constructor(e){super(),this.image=new Ie,this.nameGift=new Dt,this.dateGift=new Dt,this.data=e;let t=new je().roundRect(12,0,L.width*.95,80,15).fill("#FFFFFF"),i=new je().roundRect(12,10,L.width*.95,80,15).fill("#D3D3D3");this.addChild(i),this.addChild(t),e.imageUrl&&e.imageUrl?(this.image=Ie.from(e.imageUrl),this.image.width=32,this.image.height=32):(this.image=Ie.from("gift"),this.image.width=32,this.image.height=32),this.image.anchor.set(.5,.5),this.image.position.set(50,35),this.addChild(this.image),this.nameGift=new Dt(`Bạn đã nhận được ${(e==null?void 0:e.value)||""}`,new vt({align:"left",fontFamily:"Archia Medium",fontSize:16,fontWeight:"bold"})),this.nameGift.anchor.set(0,.5),this.nameGift.position.set(80,25),this.addChild(this.nameGift),this.dateGift=new Dt(`${this.formatTimestamp(e.getTime)}`,new vt({align:"left",fontFamily:"Archia Medium",fontSize:14})),this.dateGift.anchor.set(0,.5),this.dateGift.position.set(80,50),this.addChild(this.dateGift)}formatTimestamp(e){const t=new Date(e),i=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear(),o=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");return`${i}/${n}/${s} ${o}:${a}`}}const L_={gameId:"fortune_wheel",values:{gameTitle:{text:"Vòng Quay May Mắn",fontSize:36,fontFamily:"Pacifico",color:"#ff3300"},backgroundImage:{source:"cdn",cdnLink:"https://gamestag-cdn.taptap.com.vn/media/images/upload/9d8c7ba5-8e07-4857-9167-2c41a309bab9.jpg"},currencyImage:{source:"cdn",cdnLink:"https://upload.wikimedia.org/wikipedia/vi/d/d0/Dogecoin_Logo.png"},logoImage:{source:"cdn",cdnLink:"https://upload.wikimedia.org/wikipedia/vi/d/d0/Dogecoin_Logo.png"},startButton:{text:"Quay Ngay",textColor:"#ffffff",backgroundColor:"#28a745",backgroundImage:{source:"base64",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."}},wheel:{segmentCount:8,segmentColors:["#f44336","#e91e63","#9c27b0","#2196f3","#4caf50","#ff9800","#ffc107","#795548"],segmentTexts:["10 Coins","Better Luck Next Time","50 Coins","Try Again","100 Coins","Big Win","Free Spin","20 Coins"],segmentImages:["https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png","","https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png","","https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png","https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png","","https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png"]},spinButton:{text:"SPIN!",textColor:"#ffffff",backgroundColor:"#ff5722",backgroundImage:{source:"cdn",cdnLink:"https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png"}}}};class BA extends ue{constructor(){super(),this.configData=L_,this.renderBackground(),this.renderHeader(),this.addHistoryList()}update(e){}resize(){}renderBackground(){const e=new je().roundRect(0,-25,L.width,125,15).fill("#FFFFFF"),t=new je().roundRect(-2,-20,L.width+5,125,15).fill("#000000");t.alpha=.8,t.filters=[new ns],this.addChild(t),this.addChild(e)}addHistoryList(){let e=[];if(He.History&&He.History.length){const s=He.History.reverse();for(let o=0;o<s.length;o++){const a=new FA(s[o]);e.push(a)}}else{const s=new Dt(`Lịch sử rỗng.
Bạn hãy quay vòng quay để nhận phần thưởng nhé`,new vt({align:"center",fontSize:18,fontFamily:"Archia Medium",fill:"#000000",wordWrap:!0,wordWrapWidth:300}));s.position.set(L.width/2,L.height/2),this.addChild(s)}const t=125,i=150,n=new M_({width:L.width,height:L.height-t,elementsMargin:10,bottomPadding:10,items:e});n.position.set(0,i),this.addChild(n),n.alpha=0,Ct.to(n,{alpha:1,y:t,duration:.5,ease:"sine.inOut"})}renderHeader(){const e=new ri({texture:"back_button",width:24,onClick:()=>{L.changeScreen(new ga)}});e.tint=0,e.position.set(30,50),this.addChild(e);const t=new Dt("Lịch sử vòng quay",new vt({fontSize:20,fill:0,fontWeight:"bold",fontFamily:"Archia Medium",align:"center"}));t.anchor.set(.5,.5),t.position.set(L.width/2,50),this.addChild(t)}}class ga extends ue{constructor(){super(),this.dataGift=[],this.totalPieces=this.dataGift.length,this.radius=160,this.mainContent=new ue,this.wheelContainer=new ue,this.isSpin=!1,this.speed=10,this.pieces=[],this.targetAngles=[],this.threshold=1,this.targetAngle=0,this.targetIndex=-1,this.arrow=new Ie,this.lastStep=-1,this.buttonGroup=new ue,this.isBlock=!1,this.coinValue=new Dt,this.lights=[],this.configData=L_,this.currencySprite=new X,this.mainContent.position.set(L.width/2,L.height/2),this.addChild(this.mainContent),this.addChild(this.buttonGroup),this.setDataGifts(),Ut.on(At.UPDATE_WHEEL,this.setDataGifts,this),this.renderDecor(),this.renderButtonGroup()}update(e){if(this.isSpin){this.wheelContainer.rotation+=.05*e*this.speed;let i=this.wheelContainer.rotation*(180/Math.PI);this.wheelContainer.rotation>Math.PI*2?this.wheelContainer.rotation-=Math.PI*2:this.wheelContainer.rotation<0&&(this.wheelContainer.rotation+=Math.PI*2);const n=360/this.totalPieces,s=Math.floor(i/n);if(s!==this.lastStep&&(this.lastStep=s,Ct.fromTo(this.arrow,{rotation:-.5},{rotation:0,duration:.2,yoyo:!0,repeat:1,ease:"sine.inOut"})),this.speed>.5)this.speed-=.05*e,this.speed<6&&this.activeBlur(!1);else{this.speed=.5;const o=this.threshold;Math.abs(i-this.targetAngle)<o&&(this.isSpin=!1,this.showResult(),this.arrow.rotation=0,Ct.to(this.arrow,{rotation:0,duration:.08,ease:"sine.inOut"}))}}}onDestroy(){Ut.off(At.UPDATE_WHEEL,this.setDataGifts,this)}resize(){}blur(){this.filters=[new ns]}focus(){this.filters=[]}renderBackground(){const e=new je().roundRect(0,-25,L.width,100,15).fill("#FFFFFF"),t=new je().roundRect(-2,-20,L.width+5,100,15).fill("#000000");t.alpha=.8,t.filters=[new ns],this.addChild(t),this.addChild(e)}renderHeader(){var a,l,u;let e="Lovely Guest";const t=globalThis.eventData;t&&t.data&&t.data.data&&(e=`Hi, ${t.data.data.name}`);const i=new Dt(e);i.position.set(10,30),i.anchor.set(0),this.addChild(i);const n=new ue;if((a=this.configData)!=null&&a.values.currencyImage)if(this.configData.values.currencyImage.source==="cdn")pa(((l=this.configData.values.currencyImage)==null?void 0:l.cdnLink)||"").then(h=>{this.currencySprite=h.texture,ma(h,30,30,n),this.renderButtonGroup()}).catch(()=>{this.currencySprite=X.from("coin_icon"),ma(Ie.from(this.currencySprite),30,30,n),this.renderButtonGroup()});else{const h=Ie.from(((u=this.configData.values.currencyImage)==null?void 0:u.base64)||"coin_icon");ma(h,30,30,n),this.renderButtonGroup()}else{const h=Ie.from("coin_icon");ma(h,30,30,n)}this.coinValue=new Dt(`${He.Score}`),this.coinValue.anchor.set(0),this.coinValue.position.set(35,5),n.addChild(this.coinValue),n.position.set(L.width-150,25),this.addChild(n);const s=new ri({texture:"circle",icon:"setting_icon",iconSize:25,iconColor:"grey",width:48,onClick:()=>{this.onOpenSetting()}});s.width=32,s.height=32,s.position.set(L.width-25,40),this.addChild(s);const o=new ri({texture:"blue_btn",icon:"history",iconSize:34,width:46,onClick:()=>{this.openHistory()}});o.position.set(L.width-35,L.height/2-170),this.addChild(o)}animIdle(){this.tl=Ct.timeline({repeat:-1,repeatDelay:1}),this.lights.forEach((e,t)=>{this.tl.to(e,{duration:.5,onStart:()=>{e.clear().circle(0,0,5).fill(16777215).stroke({width:2,color:"#444444",alpha:1,alignment:0})},onComplete:()=>{e.clear().circle(0,0,5).fill(6710886).stroke({width:2,color:"#444444",alpha:1,alignment:0})}},t*.05)})}stopIdle(){this.tl&&this.tl.kill(),this.lights.forEach(e=>{e.clear().circle(0,0,5).fill(16777215).stroke({width:2,color:"#444444",alpha:1,alignment:0})})}animHit(){this.lights.forEach((e,t)=>{Ct.to(e,{duration:.2,delay:t*.05,onUpdate:()=>{e.clear().circle(0,0,5).fill(16763904).stroke({width:2,color:"#444444",alpha:1,alignment:0})},onComplete:()=>{e.clear().circle(0,0,5).fill(16763904).stroke({width:2,color:"#444444",alpha:1,alignment:0})}})}),setTimeout(()=>{for(let e=0;e<5;e++)setTimeout(()=>{this.lights.forEach(t=>{let i=e%2==0?16763904:16777215;Ct.to(t,{duration:.2,onUpdate:()=>{t.clear().circle(0,0,5).fill(i).stroke({width:2,color:"#444444",alpha:1,alignment:0})},onComplete:()=>{t.clear().circle(0,0,5).fill(i).stroke({width:2,color:"#444444",alpha:1,alignment:0})}})})},(e+1)*250)},1e3)}setDataGifts(){var t;const e=(t=this.configData)==null?void 0:t.values.wheel;if(this.dataGift=[],e){this.totalPieces=e.segmentCount;for(let i=0;i<this.totalPieces;i++){const n={color:e.segmentColors[i],text:e.segmentTexts[i],backColor:e.segmentColors[i],image:e.segmentImages[i]};this.dataGift.push(n)}this.renderWheel()}else{const i=new Dt("Không có dữ liệu",new vt({fill:"#ffffff",fontSize:22,fontFamily:"Archia Medium",wordWrap:!0,wordWrapWidth:500,fontWeight:"bold",align:"center"}));i.position.set(L.width/2,L.height/2),i.anchor.set(.5,.5),this.addChild(i)}}renderWheel(){this.wheelContainer.removeChildren().forEach(s=>s.destroy()),this.targetAngles=[],this.lights=[],this.mainContent.rotation=-Math.PI/2-1/this.totalPieces*(Math.PI*2)/2,this.mainContent.addChild(this.wheelContainer);const e=new je().circle(0,0,this.radius).fill(14606046).stroke({width:20,color:"#008080",alpha:1,alignment:0});e.rotation+=.625,this.wheelContainer.addChild(e);const t=20,i=5,n=this.radius-i+15;for(let s=0;s<t;s++){const o=s/t*Math.PI*2,a=Math.cos(o)*n,l=Math.sin(o)*n,u=new je().circle(0,0,i).fill(6710886).stroke({width:3,color:"#444444",alpha:1,alignment:0});u.position.set(a,l),e.addChild(u),this.lights.push(u)}this.animIdle();for(let s=0;s<this.totalPieces;s++){const o=360-s/this.totalPieces*360;this.targetAngles.push(o);const a=new OA(s,this.totalPieces,this.radius,this.dataGift[s]);this.wheelContainer.addChild(a),this.pieces.push(a)}}renderDecor(){var s,o;const e=Ie.from("circle");e.tint=16763904,e.width=100,e.height=100,e.anchor.set(.5,.5),e.position.set(L.width/2,L.height/2),this.addChild(e);const t=new Ie;t.width=95,t.height=95,t.anchor.set(.5,.5),t.position.set(L.width/2,L.height/2),this.addChild(t),t.on("pointerup",a=>{this.spinWithCost()}),t.eventMode="static",(s=this.configData)!=null&&s.values.logoImage?this.configData.values.logoImage.source==="cdn"?pa(this.configData.values.logoImage.cdnLink||"").then(a=>{t.texture=a.texture}).catch(()=>{t.texture=X.from("TAPTAP")}):t.texture=X.from(((o=this.configData.values.currencyImage)==null?void 0:o.base64)||"TAPTAP"):t.texture=X.from("TAPTAP");const i=new je;i.moveTo(25,50),i.lineTo(50,0),i.lineTo(75,50),i.lineTo(50,150),i.lineTo(25,50),i.fill(15940202),i.stroke({width:2,color:0});const n=L.App.renderer.generateTexture(i);this.arrow=Ie.from(n),this.arrow.anchor.set(.5,.35),this.arrow.scale.set(.5,.5),this.arrow.position.set(L.width/2,L.height/2-this.radius-25),this.addChild(this.arrow)}updateScore(){this.coinValue.text=`${He.Score}`}spinWithCost(){if(!this.isBlock&&He.Score>=He.Cost){He.Score-=He.Cost,this.renderButtonGroup(),this.updateScore(),this.speed=10,this.isSpin=!0,this.isBlock=!0,this.activeBlur(!0);const e=Math.floor(Math.random()*this.totalPieces);this.targetAngle=this.targetAngles[e],this.targetIndex=e,this.stopIdle()}}spin(){if(this.isBlock||!He.IsFree)return;this.isSpin=!0,this.isBlock=!0,He.IsFree=!1,this.renderButtonGroup(),this.stopIdle(),this.speed=10,this.activeBlur(!0);const e=Math.floor(Math.random()*this.totalPieces);this.targetAngle=this.targetAngles[e],this.targetIndex=e}resetWheel(){this.arrow.rotation=0,this.wheelContainer.rotation=0,this.animIdle(),this.pieces.forEach(e=>{e.resetColor()}),this.lastStep=-1}activeBlur(e){this.pieces.forEach(t=>{t.blurIcon(e)})}showResult(){this.animHit(),Ct.killTweensOf(this.arrow);const e={value:this.dataGift[this.targetIndex].text,getTime:new Date().getTime()};He.History.push(e),setTimeout(()=>{this.pieces.forEach(t=>{t.Index!==this.targetIndex&&t.setColorResult()})},500),setTimeout(()=>{this.isBlock=!1,L.popModal(new Ns({width:L.width*.9,height:250,title:"CHÚC MỪNG BẠN",description:`Bạn vừa quay
trúng ô ${this.dataGift[this.targetIndex].text}`,buttonText:"OK",onClick:()=>{L.closeCurrentPopup(),this.resetWheel()},noCloseButton:!0}))},3e3)}renderButtonGroup(){this.buttonGroup.children.forEach(s=>{s.destroy(),s.removeFromParent()});const e=new G2;e.greyscale(.25,!0);const t=s=>{He.Score<He.Cost&&(s.filters=[e],s.interactive=!1),s.position.set(L.width/2,L.height-100),this.buttonGroup.addChild(s)},i=s=>{var o,a,l,u;return new ri({width:150,height:65,texture:"yellow_button",url:s,text:((a=(o=this.configData)==null?void 0:o.values.spinButton)==null?void 0:a.text)||"Quay",textStyle:{fontSize:20,fill:((u=(l=this.configData)==null?void 0:l.values.spinButton)==null?void 0:u.textColor)||"#FFFFFF",fontWeight:"bold",stroke:{color:"#000000",width:3,join:"round"}},onClick:()=>{this.spinWithCost()}})},{backgroundImage:n}=this.configData.values.spinButton;if(n!=null&&n.source&&n.source.length)if(n.source==="cdn"){const s=n.cdnLink||"";pa(s).then(o=>{const a=i(o.texture);t(a)}).catch(()=>{const o=X.from("yellow_button"),a=i(o);t(a)})}else{const s=X.from((n==null?void 0:n.base64)||"yellow_button"),o=i(s);t(o)}else{const s=X.from("yellow_button"),o=i(s);t(o)}}renderBlurEffect(){}onStartPlay(){L.changeScreen(new RA)}onOpenLeaderboardScreen(){L.changeScreen(new IA)}onOpenSetting(){this.isBlock||L.toggleSetting(!0)}onOpenConfigSetting(){this.isBlock||L.toggleSetConfig(!0)}openHistory(){this.isBlock||L.changeScreen(new BA)}}const kA={name:"prod",apiEndPoint:"https://lb.thitranbaovui.com/v1",assetEndPoint:"https://lb.thitranbaovui.com/v1",ssl:!0,host:"lb.thitranbaovui.com",port:80};function UA(){const r=globalThis.ENV;return r?{name:r.name,apiEndPoint:r.apiEndPoint,assetEndPoint:r.assetEndPoint||r.assetsEndPoint,ssl:r.ssl,host:r.host,port:r.port}:kA}class DA{__httpGet(e,t){return new Promise((i,n)=>{let s=new XMLHttpRequest;if(s.onreadystatechange=function(){if(s.readyState==4&&s.status>=200&&s.status<400){var o=s.responseText;return i({status:s.status,data:JSON.parse(o)})}},s.addEventListener("error",function(o){n(o)}),s.open("GET",e,!0),t){let o=t.headers;Object.keys(o).forEach(a=>{s.setRequestHeader(a,o[a])})}else s.setRequestHeader("Content-Type","application/json");s.send()})}__httpPost(e,t,i){return new Promise((n,s)=>{let o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(o.readyState==4&&o.status>=200&&o.status<400){var a=o.responseText;return n({status:o.status,data:JSON.parse(a)})}},o.addEventListener("error",function(a){s(a)}),o.open("POST",e),i){let a=i.headers;Object.keys(a).forEach(l=>{o.setRequestHeader(l,a[l])})}else o.setRequestHeader("Content-Type","application/json");o.send(JSON.stringify(t))})}__httpPut(e,t,i){return new Promise((n,s)=>{let o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(o.readyState==4&&o.status>=200&&o.status<400){var a=o.responseText;return n({status:o.status,data:JSON.parse(a)})}},o.addEventListener("error",function(a){s(a)}),o.open("PUT",e),i){let a=i.headers;Object.keys(a).forEach(l=>{o.setRequestHeader(l,a[l])})}else o.setRequestHeader("Content-Type","application/json");o.send(JSON.stringify(t))})}__httpDelete(e,t){return new Promise((i,n)=>{let s=new XMLHttpRequest;if(s.onreadystatechange=function(){if(s.readyState==4&&s.status>=200&&s.status<400){var o=s.responseText;return i({status:s.status,data:JSON.parse(o)})}},s.addEventListener("error",function(o){n(o)}),s.open("DELETE",e,!0),t){let o=t.headers;Object.keys(o).forEach(a=>{s.setRequestHeader(a,o[a])})}else s.setRequestHeader("Content-Type","application/json");s.send()})}}class GA extends DA{constructor(){super(),this._token=null,this.uid="null",this._env=null,this._accessTokenData=null,this._env=UA()}get environment(){return this._env}set environment(e){this._env=e}getAPIEndPoint(){return this._env?this._env.apiEndPoint:""}__signInSuccessHandler(e){this._accessTokenData=e,this._token=e.token||e.accessToken,this.uid=e.id,e.isNew&&L.setNewUser(!0)}__makeHeader(e=!1){return e?{header:{"Content-Type":"application/json",Authorization:`Bearer ${this._token}`}}:!1}__parseResponse(e){let t=e.data;if((e.status===200||e.status===201)&&t&&t.status)return t;throw new Error("Invalid data format")}__parseReponseWithError(e){let t=this.__parseResponse(e);if(t){if(t.status.code===401)return console.log("show error dialog"),null;if(t.status.success)return t}return null}__errorHandler(e){console.log(e.message)}async signInByTapTap(e){const t=`${this.getAPIEndPoint()}/auth/sign-in-taptap`;try{console.log("start calling",t,e);let i=await this.__httpPost(t,{token:e},{headers:{"Content-Type":"application/json"}});console.log("result",i);let n=this.__parseResponse(i);if(n){if(n.status.success)return console.log("sign-in-taptap success"),this.__signInSuccessHandler(n.data),n.data;Ut.emit(At.LOADING_MESSAGES,n.status.message)}return null}catch(i){return console.log("catch",i),this.__errorHandler(i),null}}async checkToken(e){const t=`${this.getAPIEndPoint()}/auth/token`;try{let i=await this.__httpGet(t,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}),n=this.__parseResponse(i);if(n){if(n.status.success)return this._token=e,n.data;console.log(n.status.message)}return null}catch(i){return this.__errorHandler(i),null}}}const Fn=new GA,N_={getAccessTokenByKey(r,e){const t=`key_${r}`;return e=e||localStorage,e.getItem(t)},setAccessTokenByKey(r,e,t){const i=`key_${r}`;t=t||localStorage,console.log(`save ${i} with value: ${e}`),t.setItem(i,e)}};var Ch={},$_={},V_;function zA(){return V_||(V_=1,ArrayBuffer.isView||(ArrayBuffer.isView=r=>r!==null&&typeof r=="object"&&r.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window)),$_}var Wi={},Ph={},H_;function Ah(){return H_||(H_=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.ServerError=r.CloseCode=void 0,function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(r.CloseCode||(r.CloseCode={}));class e extends Error{constructor(i,n){super(n),this.name="ServerError",this.code=i}}r.ServerError=e}(Ph)),Ph}var ci={},Vr={},W_;function LA(){if(W_)return Vr;W_=1,Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.decode=Vr.encode=void 0;function r(u,h){if(this._offset=h,u instanceof ArrayBuffer)this._buffer=u,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(u))this._buffer=u.buffer,this._view=new DataView(this._buffer,u.byteOffset,u.byteLength);else throw new Error("Invalid argument")}function e(u,h,c){for(var d="",f=0,g=h,m=h+c;g<m;g++){var _=u.getUint8(g);if((_&128)===0){d+=String.fromCharCode(_);continue}if((_&224)===192){d+=String.fromCharCode((_&31)<<6|u.getUint8(++g)&63);continue}if((_&240)===224){d+=String.fromCharCode((_&15)<<12|(u.getUint8(++g)&63)<<6|(u.getUint8(++g)&63)<<0);continue}if((_&248)===240){f=(_&7)<<18|(u.getUint8(++g)&63)<<12|(u.getUint8(++g)&63)<<6|(u.getUint8(++g)&63)<<0,f>=65536?(f-=65536,d+=String.fromCharCode((f>>>10)+55296,(f&1023)+56320)):d+=String.fromCharCode(f);continue}throw new Error("Invalid byte "+_.toString(16))}return d}r.prototype._array=function(u){for(var h=new Array(u),c=0;c<u;c++)h[c]=this._parse();return h},r.prototype._map=function(u){for(var h="",c={},d=0;d<u;d++)h=this._parse(),c[h]=this._parse();return c},r.prototype._str=function(u){var h=e(this._view,this._offset,u);return this._offset+=u,h},r.prototype._bin=function(u){var h=this._buffer.slice(this._offset,this._offset+u);return this._offset+=u,h},r.prototype._parse=function(){var u=this._view.getUint8(this._offset++),h,c=0,d=0,f=0,g=0;if(u<192)return u<128?u:u<144?this._map(u&15):u<160?this._array(u&15):this._str(u&31);if(u>223)return(255-u+1)*-1;switch(u){case 192:return null;case 194:return!1;case 195:return!0;case 196:return c=this._view.getUint8(this._offset),this._offset+=1,this._bin(c);case 197:return c=this._view.getUint16(this._offset),this._offset+=2,this._bin(c);case 198:return c=this._view.getUint32(this._offset),this._offset+=4,this._bin(c);case 199:if(c=this._view.getUint8(this._offset),d=this._view.getInt8(this._offset+1),this._offset+=2,d===-1){var m=this._view.getUint32(this._offset);return f=this._view.getInt32(this._offset+4),g=this._view.getUint32(this._offset+8),this._offset+=12,new Date((f*4294967296+g)*1e3+m/1e6)}return[d,this._bin(c)];case 200:return c=this._view.getUint16(this._offset),d=this._view.getInt8(this._offset+2),this._offset+=3,[d,this._bin(c)];case 201:return c=this._view.getUint32(this._offset),d=this._view.getInt8(this._offset+4),this._offset+=5,[d,this._bin(c)];case 202:return h=this._view.getFloat32(this._offset),this._offset+=4,h;case 203:return h=this._view.getFloat64(this._offset),this._offset+=8,h;case 204:return h=this._view.getUint8(this._offset),this._offset+=1,h;case 205:return h=this._view.getUint16(this._offset),this._offset+=2,h;case 206:return h=this._view.getUint32(this._offset),this._offset+=4,h;case 207:return f=this._view.getUint32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,f+g;case 208:return h=this._view.getInt8(this._offset),this._offset+=1,h;case 209:return h=this._view.getInt16(this._offset),this._offset+=2,h;case 210:return h=this._view.getInt32(this._offset),this._offset+=4,h;case 211:return f=this._view.getInt32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,f+g;case 212:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0){this._offset+=1;return}return[d,this._bin(1)];case 213:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(2)];case 214:return d=this._view.getInt8(this._offset),this._offset+=1,d===-1?(h=this._view.getUint32(this._offset),this._offset+=4,new Date(h*1e3)):[d,this._bin(4)];case 215:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0)return f=this._view.getInt32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,new Date(f+g);if(d===-1){f=this._view.getUint32(this._offset),g=this._view.getUint32(this._offset+4),this._offset+=8;var _=(f&3)*4294967296+g;return new Date(_*1e3+(f>>>2)/1e6)}return[d,this._bin(8)];case 216:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(16)];case 217:return c=this._view.getUint8(this._offset),this._offset+=1,this._str(c);case 218:return c=this._view.getUint16(this._offset),this._offset+=2,this._str(c);case 219:return c=this._view.getUint32(this._offset),this._offset+=4,this._str(c);case 220:return c=this._view.getUint16(this._offset),this._offset+=2,this._array(c);case 221:return c=this._view.getUint32(this._offset),this._offset+=4,this._array(c);case 222:return c=this._view.getUint16(this._offset),this._offset+=2,this._map(c);case 223:return c=this._view.getUint32(this._offset),this._offset+=4,this._map(c)}throw new Error("Could not parse")};function t(u,h=0){var c=new r(u,h),d=c._parse();if(c._offset!==u.byteLength)throw new Error(u.byteLength-c._offset+" trailing bytes");return d}Vr.decode=t;var i=4294967296-1,n=17179869184-1;function s(u,h,c){for(var d=0,f=0,g=c.length;f<g;f++)d=c.charCodeAt(f),d<128?u.setUint8(h++,d):d<2048?(u.setUint8(h++,192|d>>6),u.setUint8(h++,128|d&63)):d<55296||d>=57344?(u.setUint8(h++,224|d>>12),u.setUint8(h++,128|d>>6&63),u.setUint8(h++,128|d&63)):(f++,d=65536+((d&1023)<<10|c.charCodeAt(f)&1023),u.setUint8(h++,240|d>>18),u.setUint8(h++,128|d>>12&63),u.setUint8(h++,128|d>>6&63),u.setUint8(h++,128|d&63))}function o(u){for(var h=0,c=0,d=0,f=u.length;d<f;d++)h=u.charCodeAt(d),h<128?c+=1:h<2048?c+=2:h<55296||h>=57344?c+=3:(d++,c+=4);return c}function a(u,h,c){var d=typeof c,f=0,g=0,m=0,_=0,y=0,S=0;if(d==="string"){if(y=o(c),y<32)u.push(y|160),S=1;else if(y<256)u.push(217,y),S=2;else if(y<65536)u.push(218,y>>8,y),S=3;else if(y<4294967296)u.push(219,y>>24,y>>16,y>>8,y),S=5;else throw new Error("String too long");return h.push({_str:c,_length:y,_offset:u.length}),S+y}if(d==="number")return Math.floor(c)!==c||!isFinite(c)?(u.push(203),h.push({_float:c,_length:8,_offset:u.length}),9):c>=0?c<128?(u.push(c),1):c<256?(u.push(204,c),2):c<65536?(u.push(205,c>>8,c),3):c<4294967296?(u.push(206,c>>24,c>>16,c>>8,c),5):(m=c/Math.pow(2,32)>>0,_=c>>>0,u.push(207,m>>24,m>>16,m>>8,m,_>>24,_>>16,_>>8,_),9):c>=-32?(u.push(c),1):c>=-128?(u.push(208,c),2):c>=-32768?(u.push(209,c>>8,c),3):c>=-2147483648?(u.push(210,c>>24,c>>16,c>>8,c),5):(m=Math.floor(c/Math.pow(2,32)),_=c>>>0,u.push(211,m>>24,m>>16,m>>8,m,_>>24,_>>16,_>>8,_),9);if(d==="object"){if(c===null)return u.push(192),1;if(Array.isArray(c)){if(y=c.length,y<16)u.push(y|144),S=1;else if(y<65536)u.push(220,y>>8,y),S=3;else if(y<4294967296)u.push(221,y>>24,y>>16,y>>8,y),S=5;else throw new Error("Array too large");for(f=0;f<y;f++)S+=a(u,h,c[f]);return S}if(c instanceof Date){var w=c.getTime(),P=Math.floor(w/1e3),E=(w-P*1e3)*1e6;return P>=0&&E>=0&&P<=n?E===0&&P<=i?(u.push(214,255,P>>24,P>>16,P>>8,P),6):(m=P/4294967296,_=P&4294967295,u.push(215,255,E>>22,E>>14,E>>6,m,_>>24,_>>16,_>>8,_),10):(m=Math.floor(P/4294967296),_=P>>>0,u.push(199,12,255,E>>24,E>>16,E>>8,E,m>>24,m>>16,m>>8,m,_>>24,_>>16,_>>8,_),15)}if(c instanceof ArrayBuffer){if(y=c.byteLength,y<256)u.push(196,y),S=2;else if(y<65536)u.push(197,y>>8,y),S=3;else if(y<4294967296)u.push(198,y>>24,y>>16,y>>8,y),S=5;else throw new Error("Buffer too large");return h.push({_bin:c,_length:y,_offset:u.length}),S+y}if(typeof c.toJSON=="function")return a(u,h,c.toJSON());var U=[],B="",k=Object.keys(c);for(f=0,g=k.length;f<g;f++)B=k[f],c[B]!==void 0&&typeof c[B]!="function"&&U.push(B);if(y=U.length,y<16)u.push(y|128),S=1;else if(y<65536)u.push(222,y>>8,y),S=3;else if(y<4294967296)u.push(223,y>>24,y>>16,y>>8,y),S=5;else throw new Error("Object too large");for(f=0;f<y;f++)B=U[f],S+=a(u,h,B),S+=a(u,h,c[B]);return S}if(d==="boolean")return u.push(c?195:194),1;if(d==="undefined")return u.push(192),1;if(typeof c.toJSON=="function")return a(u,h,c.toJSON());throw new Error("Could not encode")}function l(u){var h=[],c=[],d=a(h,c,u),f=new ArrayBuffer(d),g=new DataView(f),m=0,_=0,y=-1;c.length>0&&(y=c[0]._offset);for(var S,w=0,P=0,E=0,U=h.length;E<U;E++)if(g.setUint8(_+E,h[E]),E+1===y){if(S=c[m],w=S._length,P=_+y,S._bin)for(var B=new Uint8Array(S._bin),k=0;k<w;k++)g.setUint8(P+k,B[k]);else S._str?s(g,P,S._str):S._float!==void 0&&g.setFloat64(P,S._float);m++,_+=w,c[m]&&(y=c[m]._offset)}return f}return Vr.encode=l,Vr}var $s={},Hr={},Eh,j_;function NA(){return j_||(j_=1,Eh=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Eh}var X_;function $A(){if(X_)return Hr;X_=1;var r=Hr&&Hr.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.WebSocketTransport=void 0;const e=r(NA()),t=globalThis.WebSocket||e.default;let i=class{constructor(s){this.events=s}send(s){s instanceof ArrayBuffer?this.ws.send(s):Array.isArray(s)&&this.ws.send(new Uint8Array(s).buffer)}connect(s){this.ws=new t(s,this.protocols),this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(s,o){this.ws.close(s,o)}get isOpen(){return this.ws.readyState===t.OPEN}};return Hr.WebSocketTransport=i,Hr}var Y_;function VA(){if(Y_)return $s;Y_=1,Object.defineProperty($s,"__esModule",{value:!0}),$s.Connection=void 0;const r=$A();let e=class{constructor(){this.events={},this.transport=new r.WebSocketTransport(this.events)}send(i){this.transport.send(i)}connect(i){this.transport.connect(i)}close(i,n){this.transport.close(i,n)}get isOpen(){return this.transport.isOpen}};return $s.Connection=e,$s}var Mh={},q_;function K_(){return q_||(q_=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.utf8Length=r.utf8Read=r.ErrorCode=r.Protocol=void 0,function(i){i[i.HANDSHAKE=9]="HANDSHAKE",i[i.JOIN_ROOM=10]="JOIN_ROOM",i[i.ERROR=11]="ERROR",i[i.LEAVE_ROOM=12]="LEAVE_ROOM",i[i.ROOM_DATA=13]="ROOM_DATA",i[i.ROOM_STATE=14]="ROOM_STATE",i[i.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",i[i.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",i[i.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(r.Protocol||(r.Protocol={})),function(i){i[i.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",i[i.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",i[i.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",i[i.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",i[i.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",i[i.AUTH_FAILED=4215]="AUTH_FAILED",i[i.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(r.ErrorCode||(r.ErrorCode={}));function e(i,n){const s=i[n++];for(var o="",a=0,l=n,u=n+s;l<u;l++){var h=i[l];if((h&128)===0){o+=String.fromCharCode(h);continue}if((h&224)===192){o+=String.fromCharCode((h&31)<<6|i[++l]&63);continue}if((h&240)===224){o+=String.fromCharCode((h&15)<<12|(i[++l]&63)<<6|(i[++l]&63)<<0);continue}if((h&248)===240){a=(h&7)<<18|(i[++l]&63)<<12|(i[++l]&63)<<6|(i[++l]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+h.toString(16))}return o}r.utf8Read=e;function t(i=""){let n=0,s=0;for(let o=0,a=i.length;o<a;o++)n=i.charCodeAt(o),n<128?s+=1:n<2048?s+=2:n<55296||n>=57344?s+=3:(o++,s+=4);return s+1}r.utf8Length=t}(Mh)),Mh}var Wr={},Z_;function Q_(){if(Z_)return Wr;Z_=1,Object.defineProperty(Wr,"__esModule",{value:!0}),Wr.getSerializer=Wr.registerSerializer=void 0;const r={};function e(i,n){r[i]=n}Wr.registerSerializer=e;function t(i){const n=r[i];if(!n)throw new Error("missing serializer: "+i);return n}return Wr.getSerializer=t,Wr}var Vs={},J_;function e0(){if(J_)return Vs;J_=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.createNanoEvents=void 0;const r=()=>({emit(e,...t){let i=this.events[e]||[];for(let n=0,s=i.length;n<s;n++)i[n](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])===null||n===void 0?void 0:n.filter(s=>t!==s)}}});return Vs.createNanoEvents=r,Vs}var jr={},t0;function HA(){if(t0)return jr;t0=1,Object.defineProperty(jr,"__esModule",{value:!0}),jr.createSignal=jr.EventEmitter=void 0;class r{constructor(){this.handlers=[]}register(i,n=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(n=>n.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(n=>n.apply(this,i)))}remove(i){const n=this.handlers.indexOf(i);this.handlers[n]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}jr.EventEmitter=r;function e(){const t=new r;function i(n){return t.register(n,this===null)}return i.once=n=>{const s=function(...o){n.apply(this,o),t.remove(s)};t.register(s)},i.remove=n=>t.remove(n),i.invoke=(...n)=>t.invoke(...n),i.invokeAsync=(...n)=>t.invokeAsync(...n),i.clear=()=>t.clear(),i}return jr.createSignal=e,jr}var Hs={exports:{}},WA=Hs.exports,i0;function r0(){return i0||(i0=1,function(r,e){(function(t,i){i(e)})(WA,function(t){var i=function(x,p){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,b){v.__proto__=b}||function(v,b){for(var O in b)Object.prototype.hasOwnProperty.call(b,O)&&(v[O]=b[O])},i(x,p)};function n(x,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");i(x,p);function v(){this.constructor=x}x.prototype=p===null?Object.create(p):(v.prototype=p.prototype,new v)}function s(x,p,v,b){var O=arguments.length,N=O<3?p:b,ie;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")N=Reflect.decorate(x,p,v,b);else for(var Z=x.length-1;Z>=0;Z--)(ie=x[Z])&&(N=(O<3?ie(N):O>3?ie(p,v,N):ie(p,v))||N);return O>3&&N&&Object.defineProperty(p,v,N),N}function o(x,p,v){if(arguments.length===2)for(var b=0,O=p.length,N;b<O;b++)(N||!(b in p))&&(N||(N=Array.prototype.slice.call(p,0,b)),N[b]=p[b]);return x.concat(N||Array.prototype.slice.call(p))}typeof SuppressedError=="function"&&SuppressedError;var a=255,l=213;t.OPERATION=void 0,function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"}(t.OPERATION||(t.OPERATION={}));var u=function(){function x(p,v,b){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=p,this.setParent(v,b)}return x.prototype.setParent=function(p,v,b){var O=this;if(this.indexes||(this.indexes=this.ref instanceof ni?this.ref._definition.indexes:{}),this.parent=p,this.parentIndex=b,!!v)if(this.root=v,this.ref instanceof ni){var N=this.ref._definition;for(var ie in N.schema){var Z=this.ref[ie];if(Z&&Z.$changes){var Ce=N.indexes[ie];Z.$changes.setParent(this.ref,v,Ce)}}}else typeof this.ref=="object"&&this.ref.forEach(function(ve,re){if(ve instanceof ni){var ye=ve.$changes,ne=O.ref.$changes.indexes[re];ye.setParent(O.ref,O.root,ne)}})},x.prototype.operation=function(p){this.changes.set(--this.currentCustomOperation,p)},x.prototype.change=function(p,v){v===void 0&&(v=t.OPERATION.ADD);var b=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(b,p);var O=this.changes.get(b);(!O||O.op===t.OPERATION.DELETE||O.op===t.OPERATION.TOUCH)&&this.changes.set(b,{op:O&&O.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:v,index:b}),this.allChanges.add(b),this.changed=!0,this.touchParents()},x.prototype.touch=function(p){var v=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(v,p),this.changes.has(v)||this.changes.set(v,{op:t.OPERATION.TOUCH,index:v}),this.allChanges.add(v),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(p){if(this.ref._definition){var v=this.ref._definition;return v.schema[v.fieldsByIndex[p]]}else{var v=this.parent._definition,b=v.schema[v.fieldsByIndex[this.parentIndex]];return Object.values(b)[0]}},x.prototype.getChildrenFilter=function(){var p=this.parent._definition.childFilters;return p&&p[this.parentIndex]},x.prototype.getValue=function(p){return this.ref.getByIndex(p)},x.prototype.delete=function(p){var v=typeof p=="number"?p:this.indexes[p];if(v===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(p," (").concat(v,")"));return}var b=this.getValue(v);this.changes.set(v,{op:t.OPERATION.DELETE,index:v}),this.allChanges.delete(v),delete this.caches[v],b&&b.$changes&&(b.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(p,v){var b=this;p===void 0&&(p=!1),v===void 0&&(v=!1),this.ref instanceof ni||this.changes.forEach(function(O){if(O.op===t.OPERATION.DELETE){var N=b.ref.getIndex(O.index);delete b.indexes[N]}}),this.changes.clear(),this.changed=p,v&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var p=this;this.changes.forEach(function(v){var b=p.getValue(v.index);b&&b.$changes&&b.$changes.discardAll()}),this.discard()},x.prototype.cache=function(p,v){this.caches[p]=v},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(p,v){if(p===void 0)throw new Error('ChangeTree: missing index for field "'.concat(v,'"'))},x}();function h(x,p,v,b){return x[p]||(x[p]=[]),x[p].push(v),b==null||b.forEach(function(O,N){return v(O,N)}),function(){return d(x[p],x[p].indexOf(v))}}function c(x){var p=this,v=typeof this.$changes.getType()!="string";this.$items.forEach(function(b,O){x.push({refId:p.$changes.refId,op:t.OPERATION.DELETE,field:O,value:void 0,previousValue:b}),v&&p.$changes.root.removeRef(b.$changes.refId)})}function d(x,p){if(p===-1||p>=x.length)return!1;for(var v=x.length-1,b=p;b<v;b++)x[b]=x[b+1];return x.length=v,!0}var f=function(x,p){var v=x.toString(),b=p.toString();return v<b?-1:v>b?1:0};function g(x){return x.$proxy=!0,x=new Proxy(x,{get:function(p,v){return typeof v!="symbol"&&!isNaN(v)?p.at(v):p[v]},set:function(p,v,b){if(typeof v!="symbol"&&!isNaN(v)){var O=Array.from(p.$items.keys()),N=parseInt(O[v]||v);b==null?p.deleteAt(N):p.setAt(N,b)}else p[v]=b;return!0},deleteProperty:function(p,v){return typeof v=="number"?p.deleteAt(v):delete p[v],!0},has:function(p,v){return typeof v!="symbol"&&!isNaN(Number(v))?p.$items.has(Number(v)):Reflect.has(p,v)}}),x}var m=function(){function x(){for(var p=[],v=0;v<arguments.length;v++)p[v]=arguments[v];this.$changes=new u(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,p)}return x.prototype.onAdd=function(p,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,p,v?this.$items:void 0)},x.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},x.is=function(p){return Array.isArray(p)||p.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(p){p===0?this.clear():this.splice(p,this.length-p)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var p=this,v=[],b=0;b<arguments.length;b++)v[b]=arguments[b];var O;return v.forEach(function(N){O=p.$refId++,p.setAt(O,N)}),O},x.prototype.pop=function(){var p=Array.from(this.$indexes.values()).pop();if(p!==void 0){this.$changes.delete(p),this.$indexes.delete(p);var v=this.$items.get(p);return this.$items.delete(p),v}},x.prototype.at=function(p){if(p=Math.trunc(p)||0,p<0&&(p+=this.length),!(p<0||p>=this.length)){var v=Array.from(this.$items.keys())[p];return this.$items.get(v)}},x.prototype.setAt=function(p,v){var b,O;if(v==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(p)!==v){v.$changes!==void 0&&v.$changes.setParent(this,this.$changes.root,p);var N=(O=(b=this.$changes.indexes[p])===null||b===void 0?void 0:b.op)!==null&&O!==void 0?O:t.OPERATION.ADD;this.$changes.indexes[p]=p,this.$indexes.set(p,p),this.$items.set(p,v),this.$changes.change(p,N)}},x.prototype.deleteAt=function(p){var v=Array.from(this.$items.keys())[p];return v===void 0?!1:this.$deleteAt(v)},x.prototype.$deleteAt=function(p){return this.$changes.delete(p),this.$indexes.delete(p),this.$items.delete(p)},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&c.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var p,v=[],b=0;b<arguments.length;b++)v[b]=arguments[b];return new(x.bind.apply(x,o([void 0],(p=Array.from(this.$items.values())).concat.apply(p,v),!1)))},x.prototype.join=function(p){return Array.from(this.$items.values()).join(p)},x.prototype.reverse=function(){var p=this,v=Array.from(this.$items.keys()),b=Array.from(this.$items.values()).reverse();return b.forEach(function(O,N){p.setAt(v[N],O)}),this},x.prototype.shift=function(){var p=Array.from(this.$items.keys()),v=p.shift();if(v!==void 0){var b=this.$items.get(v);return this.$deleteAt(v),b}},x.prototype.slice=function(p,v){var b=new x;return b.push.apply(b,Array.from(this.$items.values()).slice(p,v)),b},x.prototype.sort=function(p){var v=this;p===void 0&&(p=f);var b=Array.from(this.$items.keys()),O=Array.from(this.$items.values()).sort(p);return O.forEach(function(N,ie){v.setAt(b[ie],N)}),this},x.prototype.splice=function(p,v){v===void 0&&(v=this.length-p);for(var b=[],O=2;O<arguments.length;O++)b[O-2]=arguments[O];for(var N=Array.from(this.$items.keys()),ie=[],Z=p;Z<p+v;Z++)ie.push(this.$items.get(N[Z])),this.$deleteAt(N[Z]);for(var Z=0;Z<b.length;Z++)this.setAt(p+Z,b[Z]);return ie},x.prototype.unshift=function(){for(var p=this,v=[],b=0;b<arguments.length;b++)v[b]=arguments[b];var O=this.length,N=v.length,ie=Array.from(this.$items.values());return v.forEach(function(Z,Ce){p.setAt(Ce,Z)}),ie.forEach(function(Z,Ce){p.setAt(N+Ce,Z)}),O+N},x.prototype.indexOf=function(p,v){return Array.from(this.$items.values()).indexOf(p,v)},x.prototype.lastIndexOf=function(p,v){return v===void 0&&(v=this.length-1),Array.from(this.$items.values()).lastIndexOf(p,v)},x.prototype.every=function(p,v){return Array.from(this.$items.values()).every(p,v)},x.prototype.some=function(p,v){return Array.from(this.$items.values()).some(p,v)},x.prototype.forEach=function(p,v){Array.from(this.$items.values()).forEach(p,v)},x.prototype.map=function(p,v){return Array.from(this.$items.values()).map(p,v)},x.prototype.filter=function(p,v){return Array.from(this.$items.values()).filter(p,v)},x.prototype.reduce=function(p,v){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(p,v){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(p,v){return Array.from(this.$items.values()).find(p,v)},x.prototype.findIndex=function(p,v){return Array.from(this.$items.values()).findIndex(p,v)},x.prototype.fill=function(p,v,b){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(p,v,b){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(p,v){return Array.from(this.$items.values()).includes(p,v)},x.prototype.flatMap=function(p,v){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(p){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var p=Array.from(this.$items.values());return p.findLast.apply(p,arguments)},x.prototype.findLastIndex=function(){var p=Array.from(this.$items.values());return p.findLastIndex.apply(p,arguments)},x.prototype.with=function(p,v){var b=Array.from(this.$items.values());return b[p]=v,new(x.bind.apply(x,o([void 0],b,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(p){return Array.from(this.$items.values()).sort(p)},x.prototype.toSpliced=function(p,v){var b=Array.from(this.$items.values());return b.toSpliced.apply(b,arguments)},x.prototype.setIndex=function(p,v){this.$indexes.set(p,v)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var v=this.$indexes.get(p);this.$items.delete(v),this.$indexes.delete(p)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(p){return typeof p.toJSON=="function"?p.toJSON():p})},x.prototype.clone=function(p){var v;return p?v=new(x.bind.apply(x,o([void 0],Array.from(this.$items.values()),!1))):v=new(x.bind.apply(x,o([void 0],this.map(function(b){return b.$changes?b.clone():b}),!1))),v},x}();function _(x){return x.$proxy=!0,x=new Proxy(x,{get:function(p,v){return typeof v!="symbol"&&typeof p[v]>"u"?p.get(v):p[v]},set:function(p,v,b){return typeof v!="symbol"&&v.indexOf("$")===-1&&v!=="onAdd"&&v!=="onRemove"&&v!=="onChange"?p.set(v,b):p[v]=b,!0},deleteProperty:function(p,v){return p.delete(v),!0}}),x}var y=function(){function x(p){var v=this;if(this.$changes=new u(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p)if(p instanceof Map||p instanceof x)p.forEach(function(O,N){return v.set(N,O)});else for(var b in p)this.set(b,p[b])}return x.prototype.onAdd=function(p,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,p,v?this.$items:void 0)},x.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},x.is=function(p){return p.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(p,v){if(v==null)throw new Error("MapSchema#set('".concat(p,"', ").concat(v,"): trying to set ").concat(v," value on '").concat(p,"'."));p=p.toString();var b=typeof this.$changes.indexes[p]<"u",O=b?this.$changes.indexes[p]:this.$refId++,N=b?t.OPERATION.REPLACE:t.OPERATION.ADD,ie=v.$changes!==void 0;if(ie&&v.$changes.setParent(this,this.$changes.root,O),!b)this.$changes.indexes[p]=O,this.$indexes.set(O,p);else{if(!ie&&this.$items.get(p)===v)return;ie&&this.$items.get(p)!==v&&(N=t.OPERATION.ADD)}return this.$items.set(p,v),this.$changes.change(p,N),this},x.prototype.get=function(p){return this.$items.get(p)},x.prototype.delete=function(p){return this.$changes.delete(p.toString()),this.$items.delete(p)},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&c.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(p){return this.$items.has(p)},x.prototype.forEach=function(p){this.$items.forEach(p)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(p,v){this.$indexes.set(p,v)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var v=this.$indexes.get(p);this.$items.delete(v),this.$indexes.delete(p)},x.prototype.toJSON=function(){var p={};return this.forEach(function(v,b){p[b]=typeof v.toJSON=="function"?v.toJSON():v}),p},x.prototype.clone=function(p){var v;return p?v=Object.assign(new x,this):(v=new x,this.forEach(function(b,O){b.$changes?v.set(O,b.clone()):v.set(O,b)})),v},x}(),S={};function w(x,p){S[x]=p}function P(x){return S[x]}var E=function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(p){var v=new x;return v.schema=Object.assign({},p&&p.schema||{}),v.indexes=Object.assign({},p&&p.indexes||{}),v.fieldsByIndex=Object.assign({},p&&p.fieldsByIndex||{}),v.descriptors=Object.assign({},p&&p.descriptors||{}),v.deprecated=Object.assign({},p&&p.deprecated||{}),v},x.prototype.addField=function(p,v){var b=this.getNextFieldIndex();this.fieldsByIndex[b]=p,this.indexes[p]=b,this.schema[p]=Array.isArray(v)?{array:v[0]}:v},x.prototype.hasField=function(p){return this.indexes[p]!==void 0},x.prototype.addFilter=function(p,v){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[p]]=v,this.indexesWithFilters.push(this.indexes[p]),!0},x.prototype.addChildrenFilter=function(p,v){var b=this.indexes[p],O=this.schema[p];if(P(Object.keys(O)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[b]=v,!0;console.warn("@filterChildren: field '".concat(p,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(p){return this.childFilters&&this.childFilters[this.indexes[p]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x}();function U(x){return x._context&&x._context.useFilters}var B=function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(p){return this.schemas.has(p)},x.prototype.get=function(p){return this.types[p]},x.prototype.add=function(p,v){v===void 0&&(v=this.schemas.size),p._definition=E.create(p._definition),p._typeid=v,this.types[v]=p,this.schemas.set(p,v)},x.create=function(p){return p===void 0&&(p={}),function(v){return p.context||(p.context=new x),R(v,p)}},x}(),k=new B;function R(x,p){return p===void 0&&(p={}),function(v,b){var O=p.context||k,N=v.constructor;if(N._context=O,!x)throw new Error("".concat(N.name,': @type() reference provided for "').concat(b,`" is undefined. Make sure you don't have any circular dependencies.`));O.has(N)||O.add(N);var ie=N._definition;if(ie.addField(b,x),ie.descriptors[b]){if(ie.deprecated[b])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(b,"' definition on '").concat(N.name,`'.
Check @type() annotation`))}catch(ne){var Z=ne.stack.split(`
`)[4].trim();throw new Error("".concat(ne.message," ").concat(Z))}}var Ce=m.is(x),ve=!Ce&&y.is(x);if(typeof x!="string"&&!ni.is(x)){var re=Object.values(x)[0];typeof re!="string"&&!O.has(re)&&O.add(re)}if(p.manual){ie.descriptors[b]={enumerable:!0,configurable:!0,writable:!0};return}var ye="_".concat(b);ie.descriptors[ye]={enumerable:!1,configurable:!1,writable:!0},ie.descriptors[b]={get:function(){return this[ye]},set:function(ne){ne!==this[ye]&&(ne!=null?(Ce&&!(ne instanceof m)&&(ne=new(m.bind.apply(m,o([void 0],ne,!1)))),ve&&!(ne instanceof y)&&(ne=new y(ne)),ne.$proxy===void 0&&(ve?ne=_(ne):Ce&&(ne=g(ne))),this.$changes.change(b),ne.$changes&&ne.$changes.setParent(this,this.$changes.root,this._definition.indexes[b])):this[ye]&&this.$changes.delete(b),this[ye]=ne)},enumerable:!0,configurable:!0}}}function G(x){return function(p,v){var b=p.constructor,O=b._definition;O.addFilter(v,x)&&(b._context.useFilters=!0)}}function Q(x){return function(p,v){var b=p.constructor,O=b._definition;O.addChildrenFilter(v,x)&&(b._context.useFilters=!0)}}function ee(x){return x===void 0&&(x=!0),function(p,v){var b=p.constructor,O=b._definition;O.deprecated[v]=!0,x&&(O.descriptors[v]={get:function(){throw new Error("".concat(v," is deprecated."))},set:function(N){},enumerable:!1,configurable:!0})}}function W(x,p,v){v===void 0&&(v={}),v.context||(v.context=x._context||v.context||k);for(var b in p)R(p[b],v)(x.prototype,b);return x}function j(x){for(var p=0,v=0,b=0,O=x.length;b<O;b++)p=x.charCodeAt(b),p<128?v+=1:p<2048?v+=2:p<55296||p>=57344?v+=3:(b++,v+=4);return v}function J(x,p,v){for(var b=0,O=0,N=v.length;O<N;O++)b=v.charCodeAt(O),b<128?x[p++]=b:b<2048?(x[p++]=192|b>>6,x[p++]=128|b&63):b<55296||b>=57344?(x[p++]=224|b>>12,x[p++]=128|b>>6&63,x[p++]=128|b&63):(O++,b=65536+((b&1023)<<10|v.charCodeAt(O)&1023),x[p++]=240|b>>18,x[p++]=128|b>>12&63,x[p++]=128|b>>6&63,x[p++]=128|b&63)}function T(x,p){x.push(p&255)}function C(x,p){x.push(p&255)}function A(x,p){x.push(p&255),x.push(p>>8&255)}function I(x,p){x.push(p&255),x.push(p>>8&255)}function F(x,p){x.push(p&255),x.push(p>>8&255),x.push(p>>16&255),x.push(p>>24&255)}function z(x,p){var v=p>>24,b=p>>16,O=p>>8,N=p;x.push(N&255),x.push(O&255),x.push(b&255),x.push(v&255)}function D(x,p){var v=Math.floor(p/Math.pow(2,32)),b=p>>>0;z(x,b),z(x,v)}function V(x,p){var v=p/Math.pow(2,32)>>0,b=p>>>0;z(x,b),z(x,v)}function K(x,p){We(x,p)}function q(x,p){Oe(x,p)}var Te=new Int32Array(2),Ue=new Float32Array(Te.buffer),xe=new Float64Array(Te.buffer);function We(x,p){Ue[0]=p,F(x,Te[0])}function Oe(x,p){xe[0]=p,F(x,Te[0]),F(x,Te[1])}function Ai(x,p){return C(x,p?1:0)}function Et(x,p){p||(p="");var v=j(p),b=0;if(v<32)x.push(v|160),b=1;else if(v<256)x.push(217),C(x,v),b=2;else if(v<65536)x.push(218),I(x,v),b=3;else if(v<4294967296)x.push(219),z(x,v),b=5;else throw new Error("String too long");return J(x,x.length,p),b+v}function Je(x,p){if(isNaN(p))return Je(x,0);if(isFinite(p)){if(p!==(p|0))return x.push(203),Oe(x,p),9}else return Je(x,p>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return p>=0?p<128?(C(x,p),1):p<256?(x.push(204),C(x,p),2):p<65536?(x.push(205),I(x,p),3):p<4294967296?(x.push(206),z(x,p),5):(x.push(207),V(x,p),9):p>=-32?(x.push(224|p+32),1):p>=-128?(x.push(208),T(x,p),2):p>=-32768?(x.push(209),A(x,p),3):p>=-2147483648?(x.push(210),F(x,p),5):(x.push(211),D(x,p),9)}var Ei=Object.freeze({__proto__:null,boolean:Ai,float32:K,float64:q,int16:A,int32:F,int64:D,int8:T,number:Je,string:Et,uint16:I,uint32:z,uint64:V,uint8:C,utf8Write:J,writeFloat32:We,writeFloat64:Oe});function me(x,p,v){for(var b="",O=0,N=p,ie=p+v;N<ie;N++){var Z=x[N];if((Z&128)===0){b+=String.fromCharCode(Z);continue}if((Z&224)===192){b+=String.fromCharCode((Z&31)<<6|x[++N]&63);continue}if((Z&240)===224){b+=String.fromCharCode((Z&15)<<12|(x[++N]&63)<<6|(x[++N]&63)<<0);continue}if((Z&248)===240){O=(Z&7)<<18|(x[++N]&63)<<12|(x[++N]&63)<<6|(x[++N]&63)<<0,O>=65536?(O-=65536,b+=String.fromCharCode((O>>>10)+55296,(O&1023)+56320)):b+=String.fromCharCode(O);continue}console.error("Invalid byte "+Z.toString(16))}return b}function fe(x,p){return Yt(x,p)<<24>>24}function Yt(x,p){return x[p.offset++]}function Mi(x,p){return Bn(x,p)<<16>>16}function Bn(x,p){return x[p.offset++]|x[p.offset++]<<8}function Ri(x,p){return x[p.offset++]|x[p.offset++]<<8|x[p.offset++]<<16|x[p.offset++]<<24}function fr(x,p){return Ri(x,p)>>>0}function g0(x,p){return Ih(x,p)}function mE(x,p){return Oh(x,p)}function _0(x,p){var v=fr(x,p),b=Ri(x,p)*Math.pow(2,32);return b+v}function x0(x,p){var v=fr(x,p),b=fr(x,p)*Math.pow(2,32);return b+v}var Ys=new Int32Array(2),gE=new Float32Array(Ys.buffer),_E=new Float64Array(Ys.buffer);function Ih(x,p){return Ys[0]=Ri(x,p),gE[0]}function Oh(x,p){return Ys[0]=Ri(x,p),Ys[1]=Ri(x,p),_E[0]}function xE(x,p){return Yt(x,p)>0}function v0(x,p){var v=x[p.offset++],b;v<192?b=v&31:v===217?b=Yt(x,p):v===218?b=Bn(x,p):v===219&&(b=fr(x,p));var O=me(x,p.offset,b);return p.offset+=b,O}function vE(x,p){var v=x[p.offset];return v<192&&v>160||v===217||v===218||v===219}function Yr(x,p){var v=x[p.offset++];if(v<128)return v;if(v===202)return Ih(x,p);if(v===203)return Oh(x,p);if(v===204)return Yt(x,p);if(v===205)return Bn(x,p);if(v===206)return fr(x,p);if(v===207)return x0(x,p);if(v===208)return fe(x,p);if(v===209)return Mi(x,p);if(v===210)return Ri(x,p);if(v===211)return _0(x,p);if(v>223)return(255-v+1)*-1}function yE(x,p){var v=x[p.offset];return v<128||v>=202&&v<=211}function bE(x,p){return x[p.offset]<160}function y0(x,p){return x[p.offset-1]===a&&(x[p.offset]<128||x[p.offset]>=202&&x[p.offset]<=211)}var b0=Object.freeze({__proto__:null,arrayCheck:bE,boolean:xE,float32:g0,float64:mE,int16:Mi,int32:Ri,int64:_0,int8:fe,number:Yr,numberCheck:yE,readFloat32:Ih,readFloat64:Oh,string:v0,stringCheck:vE,switchStructureCheck:y0,uint16:Bn,uint32:fr,uint64:x0,uint8:Yt}),Fh=function(){function x(p){var v=this;this.$changes=new u(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(b){return v.add(b)})}return x.prototype.onAdd=function(p,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,p,v?this.$items:void 0)},x.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,p)},x.is=function(p){return p.collection!==void 0},x.prototype.add=function(p){var v=this.$refId++,b=p.$changes!==void 0;return b&&p.$changes.setParent(this,this.$changes.root,v),this.$changes.indexes[v]=v,this.$indexes.set(v,v),this.$items.set(v,p),this.$changes.change(v),v},x.prototype.at=function(p){var v=Array.from(this.$items.keys())[p];return this.$items.get(v)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(p){for(var v=this.$items.entries(),b,O;(O=v.next())&&!O.done;)if(p===O.value[1]){b=O.value[0];break}return b===void 0?!1:(this.$changes.delete(b),this.$indexes.delete(b),this.$items.delete(b))},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&c.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(p){return Array.from(this.$items.values()).some(function(v){return v===p})},x.prototype.forEach=function(p){var v=this;this.$items.forEach(function(b,O,N){return p(b,O,v)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(p,v){this.$indexes.set(p,v)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var v=this.$indexes.get(p);this.$items.delete(v),this.$indexes.delete(p)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var p=[];return this.forEach(function(v,b){p.push(typeof v.toJSON=="function"?v.toJSON():v)}),p},x.prototype.clone=function(p){var v;return p?v=Object.assign(new x,this):(v=new x,this.forEach(function(b){b.$changes?v.add(b.clone()):v.add(b)})),v},x}(),Bh=function(){function x(p){var v=this;this.$changes=new u(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(b){return v.add(b)})}return x.prototype.onAdd=function(p,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,p,v?this.$items:void 0)},x.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,p)},x.is=function(p){return p.set!==void 0},x.prototype.add=function(p){var v,b;if(this.has(p))return!1;var O=this.$refId++;p.$changes!==void 0&&p.$changes.setParent(this,this.$changes.root,O);var N=(b=(v=this.$changes.indexes[O])===null||v===void 0?void 0:v.op)!==null&&b!==void 0?b:t.OPERATION.ADD;return this.$changes.indexes[O]=O,this.$indexes.set(O,O),this.$items.set(O,p),this.$changes.change(O,N),O},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(p){for(var v=this.$items.entries(),b,O;(O=v.next())&&!O.done;)if(p===O.value[1]){b=O.value[0];break}return b===void 0?!1:(this.$changes.delete(b),this.$indexes.delete(b),this.$items.delete(b))},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&c.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(p){for(var v=this.$items.values(),b=!1,O;(O=v.next())&&!O.done;)if(p===O.value){b=!0;break}return b},x.prototype.forEach=function(p){var v=this;this.$items.forEach(function(b,O,N){return p(b,O,v)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(p,v){this.$indexes.set(p,v)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var v=this.$indexes.get(p);this.$items.delete(v),this.$indexes.delete(p)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var p=[];return this.forEach(function(v,b){p.push(typeof v.toJSON=="function"?v.toJSON():v)}),p},x.prototype.clone=function(p){var v;return p?v=Object.assign(new x,this):(v=new x,this.forEach(function(b){b.$changes?v.add(b.clone()):v.add(b)})),v},x}(),SE=function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(p){this.refIds.has(p)||(this.refIds.add(p),this.containerIndexes.set(p,new Set))},x.get=function(p){return p.$filterState===void 0&&(p.$filterState=new x),p.$filterState},x}(),wE=function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(p,v,b){b===void 0&&(b=!0),this.refs.set(p,v),b&&(this.refCounts[p]=(this.refCounts[p]||0)+1)},x.prototype.removeRef=function(p){var v=this.refCounts[p];if(v===void 0){console.warn("trying to remove reference ".concat(p," that doesn't exist"));return}if(v===0){console.warn("trying to remove reference ".concat(p," with 0 refCount"));return}this.refCounts[p]=v-1,this.deletedRefs.add(p)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var p=this;this.deletedRefs.forEach(function(v){if(!(p.refCounts[v]>0)){var b=p.refs.get(v);if(b instanceof ni)for(var O in b._definition.schema)typeof b._definition.schema[O]!="string"&&b[O]&&b[O].$changes&&p.removeRef(b[O].$changes.refId);else{var N=b.$changes.parent._definition,ie=N.schema[N.fieldsByIndex[b.$changes.parentIndex]];typeof Object.values(ie)[0]=="function"&&Array.from(b.values()).forEach(function(Z){return p.removeRef(Z.$changes.refId)})}p.refs.delete(v),delete p.refCounts[v]}}),this.deletedRefs.clear()},x}(),kh=function(x){n(p,x);function p(){return x!==null&&x.apply(this,arguments)||this}return p}(Error);function TE(x,p,v,b){var O,N=!1;switch(p){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":O="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(v.constructor.name,"#").concat(b));break;case"string":O="string",N=!0;break;case"boolean":return}if(typeof x!==O&&(!N||N&&x!==null)){var ie="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new kh("a '".concat(O,"' was expected, but ").concat(ie," was provided in ").concat(v.constructor.name,"#").concat(b))}}function S0(x,p,v,b){if(!(x instanceof p))throw new kh("a '".concat(p.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(v.constructor.name,"#").concat(b))}function CE(x,p,v,b,O){TE(v,x,b,O);var N=Ei[x];if(N)N(p,v);else throw new kh("a '".concat(x,"' was expected, but ").concat(v," was provided in ").concat(b.constructor.name,"#").concat(O))}function PE(x,p,v){return b0[x](p,v)}var ni=function(){function x(){for(var p=[],v=0;v<arguments.length;v++)p[v]=arguments[v];Object.defineProperties(this,{$changes:{value:new u(this,void 0,new wE),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var b=this._definition.descriptors;b&&Object.defineProperties(this,b),p[0]&&this.assign(p[0])}return x.onError=function(p){console.error(p)},x.is=function(p){return p._definition&&p._definition.schema!==void 0},x.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},x.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},x.prototype.assign=function(p){return Object.assign(this,p),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(p,v){this.$changes.change(p,v)},x.prototype.listen=function(p,v,b){var O=this;return b===void 0&&(b=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[p]||(this.$callbacks[p]=[]),this.$callbacks[p].push(v),b&&this[p]!==void 0&&v(this[p],void 0),function(){return d(O.$callbacks[p],O.$callbacks[p].indexOf(v))}},x.prototype.decode=function(p,v,b){v===void 0&&(v={offset:0}),b===void 0&&(b=this);var O=[],N=this.$changes.root,ie=p.length,Z=0;for(N.refs.set(Z,this);v.offset<ie;){var Ce=p[v.offset++];if(Ce==a){Z=Yr(p,v);var ve=N.refs.get(Z);if(!ve)throw new Error('"refId" not found: '.concat(Z));b=ve;continue}var re=b.$changes,ye=b._definition!==void 0,ne=ye?Ce>>6<<6:Ce;if(ne===t.OPERATION.CLEAR){b.clear(O);continue}var ge=ye?Ce%(ne||255):Yr(p,v),he=ye?b._definition.fieldsByIndex[ge]:"",pe=re.getType(ge),H=void 0,Pe=void 0,Gt=void 0;if(ye?Pe=b["_".concat(he)]:(Pe=b.getByIndex(ge),(ne&t.OPERATION.ADD)===t.OPERATION.ADD?(Gt=b instanceof y?v0(p,v):ge,b.setIndex(ge,Gt)):Gt=b.getIndex(ge)),(ne&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(ne!==t.OPERATION.DELETE_AND_ADD&&b.deleteByIndex(ge),Pe&&Pe.$changes&&N.removeRef(Pe.$changes.refId),H=null),he===void 0){console.warn("@colyseus/schema: definition mismatch");for(var it={offset:v.offset};v.offset<ie&&!(y0(p,v)&&(it.offset=v.offset+1,N.refs.has(Yr(p,it))));)v.offset++;continue}else if(ne!==t.OPERATION.DELETE)if(x.is(pe)){var be=Yr(p,v);if(H=N.refs.get(be),ne!==t.OPERATION.REPLACE){var Ee=this.getSchemaType(p,v,pe);H||(H=this.createTypeInstance(Ee),H.$changes.refId=be,Pe&&(H.$callbacks=Pe.$callbacks,Pe.$changes.refId&&be!==Pe.$changes.refId&&N.removeRef(Pe.$changes.refId))),N.addRef(be,H,H!==Pe)}}else if(typeof pe=="string")H=PE(pe,p,v);else{var pr=P(Object.keys(pe)[0]),mr=Yr(p,v),mi=N.refs.has(mr)?Pe||N.refs.get(mr):new pr.constructor;if(H=mi.clone(!0),H.$changes.refId=mr,Pe&&(H.$callbacks=Pe.$callbacks,Pe.$changes.refId&&mr!==Pe.$changes.refId)){N.removeRef(Pe.$changes.refId);for(var _t=Pe.entries(),at=void 0;(at=_t.next())&&!at.done;){var xa=at.value,Xi=xa[0],Gh=xa[1];O.push({refId:mr,op:t.OPERATION.DELETE,field:Xi,value:void 0,previousValue:Gh})}}N.addRef(mr,H,mi!==Pe)}if(H!=null){if(H.$changes&&H.$changes.setParent(re.ref,re.root,ge),b instanceof x)b[he]=H;else if(b instanceof y){var Xi=Gt;b.$items.set(Xi,H),b.$changes.allChanges.add(ge)}else if(b instanceof m)b.setAt(ge,H);else if(b instanceof Fh){var gr=b.add(H);b.setIndex(ge,gr)}else if(b instanceof Bh){var gr=b.add(H);gr!==!1&&b.setIndex(ge,gr)}}Pe!==H&&O.push({refId:Z,op:ne,field:he,dynamicIndex:Gt,value:H,previousValue:Pe})}return this._triggerChanges(O),N.garbageCollectDeletedRefs(),O},x.prototype.encode=function(p,v,b){p===void 0&&(p=!1),v===void 0&&(v=[]),b===void 0&&(b=!1);for(var O=this.$changes,N=new WeakSet,ie=[O],Z=1,Ce=0;Ce<Z;Ce++){var ve=ie[Ce],re=ve.ref,ye=re instanceof x;ve.ensureRefId(),N.add(ve),ve!==O&&(ve.changed||p)&&(C(v,a),Je(v,ve.refId));for(var ne=p?Array.from(ve.allChanges):Array.from(ve.changes.values()),ge=0,he=ne.length;ge<he;ge++){var pe=p?{op:t.OPERATION.ADD,index:ne[ge]}:ne[ge],H=pe.index,Pe=ye?re._definition.fieldsByIndex&&re._definition.fieldsByIndex[H]:H,Gt=v.length;if(pe.op!==t.OPERATION.TOUCH)if(ye)C(v,H|pe.op);else{if(C(v,pe.op),pe.op===t.OPERATION.CLEAR)continue;Je(v,H)}if(!ye&&(pe.op&t.OPERATION.ADD)==t.OPERATION.ADD&&re instanceof y){var it=ve.ref.$indexes.get(H);Et(v,it)}if(pe.op!==t.OPERATION.DELETE){var be=ve.getType(H),Ee=ve.getValue(H);if(Ee&&Ee.$changes&&!N.has(Ee.$changes)&&(ie.push(Ee.$changes),Ee.$changes.ensureRefId(),Z++),pe.op!==t.OPERATION.TOUCH){if(x.is(be))S0(Ee,be,re,Pe),Je(v,Ee.$changes.refId),(pe.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(v,be,Ee.constructor);else if(typeof be=="string")CE(be,v,Ee,re,Pe);else{var pr=P(Object.keys(be)[0]);S0(re["_".concat(Pe)],pr.constructor,re,Pe),Je(v,Ee.$changes.refId)}b&&ve.cache(H,v.slice(Gt))}}}!p&&!b&&ve.discard()}return v},x.prototype.encodeAll=function(p){return this.encode(!0,[],p)},x.prototype.applyFilters=function(p,v){var b,O;v===void 0&&(v=!1);for(var N=this,ie=new Set,Z=SE.get(p),Ce=[this.$changes],ve=1,re=[],ye=function(ge){var he=Ce[ge];if(ie.has(he.refId))return"continue";var pe=he.ref,H=pe instanceof x;C(re,a),Je(re,he.refId);var Pe=Z.refIds.has(he),Gt=v||!Pe;Z.addRefId(he);var it=Z.containerIndexes.get(he),be=Gt?Array.from(he.allChanges):Array.from(he.changes.values());if(!v&&H&&pe._definition.indexesWithFilters){var Ee=pe._definition.indexesWithFilters;Ee.forEach(function(va){!it.has(va)&&he.allChanges.has(va)&&(Gt?be.push(va):be.push({op:t.OPERATION.ADD,index:va}))})}for(var pr=0,mr=be.length;pr<mr;pr++){var mi=Gt?{op:t.OPERATION.ADD,index:be[pr]}:be[pr];if(mi.op===t.OPERATION.CLEAR){C(re,mi.op);continue}var _t=mi.index;if(mi.op===t.OPERATION.DELETE){H?C(re,mi.op|_t):(C(re,mi.op),Je(re,_t));continue}var at=he.getValue(_t),xa=he.getType(_t);if(H){var Xi=pe._definition.filters&&pe._definition.filters[_t];if(Xi&&!Xi.call(pe,p,at,N)){at&&at.$changes&&ie.add(at.$changes.refId);continue}}else{var Gh=he.parent,Xi=he.getChildrenFilter();if(Xi&&!Xi.call(Gh,p,pe.$indexes.get(_t),at,N)){at&&at.$changes&&ie.add(at.$changes.refId);continue}}if(at.$changes&&(Ce.push(at.$changes),ve++),mi.op!==t.OPERATION.TOUCH)if(mi.op===t.OPERATION.ADD||H)re.push.apply(re,(b=he.caches[_t])!==null&&b!==void 0?b:[]),it.add(_t);else if(it.has(_t))re.push.apply(re,(O=he.caches[_t])!==null&&O!==void 0?O:[]);else{if(it.add(_t),C(re,t.OPERATION.ADD),Je(re,_t),pe instanceof y){var gr=he.ref.$indexes.get(_t);Et(re,gr)}at.$changes?Je(re,at.$changes.refId):Ei[xa](re,at)}else if(at.$changes&&!H){if(C(re,t.OPERATION.ADD),Je(re,_t),pe instanceof y){var gr=he.ref.$indexes.get(_t);Et(re,gr)}Je(re,at.$changes.refId)}}},ne=0;ne<ve;ne++)ye(ne);return re},x.prototype.clone=function(){var p,v=new this.constructor,b=this._definition.schema;for(var O in b)typeof this[O]=="object"&&typeof((p=this[O])===null||p===void 0?void 0:p.clone)=="function"?v[O]=this[O].clone():v[O]=this[O];return v},x.prototype.toJSON=function(){var p=this._definition.schema,v=this._definition.deprecated,b={};for(var O in p)!v[O]&&this[O]!==null&&typeof this[O]<"u"&&(b[O]=typeof this[O].toJSON=="function"?this[O].toJSON():this["_".concat(O)]);return b},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(p){return this[this._definition.fieldsByIndex[p]]},x.prototype.deleteByIndex=function(p){this[this._definition.fieldsByIndex[p]]=void 0},x.prototype.tryEncodeTypeId=function(p,v,b){v._typeid!==b._typeid&&(C(p,l),Je(p,b._typeid))},x.prototype.getSchemaType=function(p,v,b){var O;return p[v.offset]===l&&(v.offset++,O=this.constructor._context.get(Yr(p,v))),O||b},x.prototype.createTypeInstance=function(p){var v=new p;return v.$changes.root=this.$changes.root,v},x.prototype._triggerChanges=function(p){for(var v,b,O,N,ie,Z,Ce,ve,re,ye=new Set,ne=this.$changes.root.refs,ge=function(pe){var H=p[pe],Pe=H.refId,Gt=ne.get(Pe),it=Gt.$callbacks;if((H.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&H.previousValue instanceof x&&((b=(v=H.previousValue.$callbacks)===null||v===void 0?void 0:v[t.OPERATION.DELETE])===null||b===void 0||b.forEach(function(be){return be()})),!it)return"continue";if(Gt instanceof x){if(!ye.has(Pe))try{(O=it==null?void 0:it[t.OPERATION.REPLACE])===null||O===void 0||O.forEach(function(be){return be()})}catch(be){x.onError(be)}try{it.hasOwnProperty(H.field)&&((N=it[H.field])===null||N===void 0||N.forEach(function(be){return be(H.value,H.previousValue)}))}catch(be){x.onError(be)}}else H.op===t.OPERATION.ADD&&H.previousValue===void 0?(ie=it[t.OPERATION.ADD])===null||ie===void 0||ie.forEach(function(be){var Ee;return be(H.value,(Ee=H.dynamicIndex)!==null&&Ee!==void 0?Ee:H.field)}):H.op===t.OPERATION.DELETE?H.previousValue!==void 0&&((Z=it[t.OPERATION.DELETE])===null||Z===void 0||Z.forEach(function(be){var Ee;return be(H.previousValue,(Ee=H.dynamicIndex)!==null&&Ee!==void 0?Ee:H.field)})):H.op===t.OPERATION.DELETE_AND_ADD&&(H.previousValue!==void 0&&((Ce=it[t.OPERATION.DELETE])===null||Ce===void 0||Ce.forEach(function(be){var Ee;return be(H.previousValue,(Ee=H.dynamicIndex)!==null&&Ee!==void 0?Ee:H.field)})),(ve=it[t.OPERATION.ADD])===null||ve===void 0||ve.forEach(function(be){var Ee;return be(H.value,(Ee=H.dynamicIndex)!==null&&Ee!==void 0?Ee:H.field)})),H.value!==H.previousValue&&((re=it[t.OPERATION.REPLACE])===null||re===void 0||re.forEach(function(be){var Ee;return be(H.value,(Ee=H.dynamicIndex)!==null&&Ee!==void 0?Ee:H.field)}));ye.add(Pe)},he=0;he<p.length;he++)ge(he)},x._definition=E.create(),x}();function AE(x){for(var p=[x.$changes],v=1,b={},O=b,N=function(Z){var Ce=p[Z];Ce.changes.forEach(function(ve){var re=Ce.ref,ye=ve.index,ne=re._definition?re._definition.fieldsByIndex[ye]:re.$indexes.get(ye);O[ne]=Ce.getValue(ye)})},ie=0;ie<v;ie++)N(ie);return b}var qr={context:new B},Uh=function(x){n(p,x);function p(){return x!==null&&x.apply(this,arguments)||this}return s([R("string",qr)],p.prototype,"name",void 0),s([R("string",qr)],p.prototype,"type",void 0),s([R("number",qr)],p.prototype,"referencedType",void 0),p}(ni),Dh=function(x){n(p,x);function p(){var v=x!==null&&x.apply(this,arguments)||this;return v.fields=new m,v}return s([R("number",qr)],p.prototype,"id",void 0),s([R([Uh],qr)],p.prototype,"fields",void 0),p}(ni),EE=function(x){n(p,x);function p(){var v=x!==null&&x.apply(this,arguments)||this;return v.types=new m,v}return p.encode=function(v){var b,O=v.constructor,N=new p;N.rootType=O._typeid;var ie=function(re,ye){for(var ne in ye){var ge=new Uh;ge.name=ne;var he=void 0;if(typeof ye[ne]=="string")he=ye[ne];else{var pe=ye[ne],H=void 0;ni.is(pe)?(he="ref",H=ye[ne]):(he=Object.keys(pe)[0],typeof pe[he]=="string"?he+=":"+pe[he]:H=pe[he]),ge.referencedType=H?H._typeid:-1}ge.type=he,re.fields.push(ge)}N.types.push(re)},Z=(b=O._context)===null||b===void 0?void 0:b.types;for(var Ce in Z){var ve=new Dh;ve.id=Number(Ce),ie(ve,Z[Ce]._definition.schema)}return N.encodeAll()},p.decode=function(v,b){var O=new B,N=new p;N.decode(v,b);var ie=N.types.reduce(function(ye,ne){var ge=function(pe){n(H,pe);function H(){return pe!==null&&pe.apply(this,arguments)||this}return H}(ni),he=ne.id;return ye[he]=ge,O.add(ge,he),ye},{});N.types.forEach(function(ye){var ne=ie[ye.id];ye.fields.forEach(function(ge){var he;if(ge.referencedType!==void 0){var pe=ge.type,H=ie[ge.referencedType];if(!H){var Pe=ge.type.split(":");pe=Pe[0],H=Pe[1]}pe==="ref"?R(H,{context:O})(ne.prototype,ge.name):R((he={},he[pe]=H,he),{context:O})(ne.prototype,ge.name)}else R(ge.type,{context:O})(ne.prototype,ge.name)})});var Z=ie[N.rootType],Ce=new Z;for(var ve in Z._definition.schema){var re=Z._definition.schema[ve];typeof re!="string"&&(Ce[ve]=typeof re=="function"?new re:new(P(Object.keys(re)[0])).constructor)}return Ce},s([R([Dh],qr)],p.prototype,"types",void 0),s([R("number",qr)],p.prototype,"rootType",void 0),p}(ni);w("map",{constructor:y}),w("array",{constructor:m}),w("set",{constructor:Bh}),w("collection",{constructor:Fh}),t.ArraySchema=m,t.CollectionSchema=Fh,t.Context=B,t.MapSchema=y,t.Reflection=EE,t.ReflectionField=Uh,t.ReflectionType=Dh,t.Schema=ni,t.SchemaDefinition=E,t.SetSchema=Bh,t.decode=b0,t.defineTypes=W,t.deprecated=ee,t.dumpChanges=AE,t.encode=Ei,t.filter=G,t.filterChildren=Q,t.hasFilter=U,t.registerType=w,t.type=R})}(Hs,Hs.exports)),Hs.exports}var n0;function s0(){if(n0)return ci;n0=1;var r=ci&&ci.__createBinding||(Object.create?function(d,f,g,m){m===void 0&&(m=g);var _=Object.getOwnPropertyDescriptor(f,g);(!_||("get"in _?!f.__esModule:_.writable||_.configurable))&&(_={enumerable:!0,get:function(){return f[g]}}),Object.defineProperty(d,m,_)}:function(d,f,g,m){m===void 0&&(m=g),d[m]=f[g]}),e=ci&&ci.__setModuleDefault||(Object.create?function(d,f){Object.defineProperty(d,"default",{enumerable:!0,value:f})}:function(d,f){d.default=f}),t=ci&&ci.__importStar||function(d){if(d&&d.__esModule)return d;var f={};if(d!=null)for(var g in d)g!=="default"&&Object.prototype.hasOwnProperty.call(d,g)&&r(f,d,g);return e(f,d),f};Object.defineProperty(ci,"__esModule",{value:!0}),ci.Room=void 0;const i=t(LA()),n=VA(),s=K_(),o=Q_(),a=e0(),l=HA(),u=r0(),h=Ah();let c=class wx{constructor(f,g){this.onStateChange=(0,l.createSignal)(),this.onError=(0,l.createSignal)(),this.onLeave=(0,l.createSignal)(),this.onJoin=(0,l.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,a.createNanoEvents)(),this.roomId=null,this.name=f,g&&(this.serializer=new((0,o.getSerializer)("schema")),this.rootSchema=g,this.serializer.state=new g),this.onError((m,_)=>{var y;return(y=console.warn)===null||y===void 0?void 0:y.call(console,`colyseus.js - onError => (${m}) ${_}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(f,g,m=this){const _=new n.Connection;m.connection=_,_.events.onmessage=wx.prototype.onMessageCallback.bind(m),_.events.onclose=function(y){var S;if(!m.hasJoined){(S=console.warn)===null||S===void 0||S.call(console,`Room connection was closed unexpectedly (${y.code}): ${y.reason}`),m.onError.invoke(y.code,y.reason);return}y.code===h.CloseCode.DEVMODE_RESTART&&g?g():(m.onLeave.invoke(y.code),m.destroy())},_.events.onerror=function(y){var S;(S=console.warn)===null||S===void 0||S.call(console,`Room, onError (${y.code}): ${y.reason}`),m.onError.invoke(y.code,y.reason)},_.connect(f)}leave(f=!0){return new Promise(g=>{this.onLeave(m=>g(m)),this.connection?f?this.connection.send([s.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(h.CloseCode.CONSENTED)})}onMessage(f,g){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),g)}send(f,g){const m=[s.Protocol.ROOM_DATA];typeof f=="string"?u.encode.string(m,f):u.encode.number(m,f);let _;if(g!==void 0){const y=i.encode(g);_=new Uint8Array(m.length+y.byteLength),_.set(new Uint8Array(m),0),_.set(new Uint8Array(y),m.length)}else _=new Uint8Array(m);this.connection.send(_.buffer)}sendBytes(f,g){const m=[s.Protocol.ROOM_DATA_BYTES];typeof f=="string"?u.encode.string(m,f):u.encode.number(m,f);let _;_=new Uint8Array(m.length+(g.byteLength||g.length)),_.set(new Uint8Array(m),0),_.set(new Uint8Array(g),m.length),this.connection.send(_.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(f){const g=Array.from(new Uint8Array(f.data)),m=g[0];if(m===s.Protocol.JOIN_ROOM){let _=1;const y=(0,s.utf8Read)(g,_);if(_+=(0,s.utf8Length)(y),this.serializerId=(0,s.utf8Read)(g,_),_+=(0,s.utf8Length)(this.serializerId),!this.serializer){const S=(0,o.getSerializer)(this.serializerId);this.serializer=new S}g.length>_&&this.serializer.handshake&&this.serializer.handshake(g,{offset:_}),this.reconnectionToken=`${this.roomId}:${y}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([s.Protocol.JOIN_ROOM])}else if(m===s.Protocol.ERROR){const _={offset:1},y=u.decode.number(g,_),S=u.decode.string(g,_);this.onError.invoke(y,S)}else if(m===s.Protocol.LEAVE_ROOM)this.leave();else if(m===s.Protocol.ROOM_DATA_SCHEMA){const _={offset:1},S=this.serializer.getState().constructor._context.get(u.decode.number(g,_)),w=new S;w.decode(g,_),this.dispatchMessage(S,w)}else if(m===s.Protocol.ROOM_STATE)g.shift(),this.setState(g);else if(m===s.Protocol.ROOM_STATE_PATCH)g.shift(),this.patch(g);else if(m===s.Protocol.ROOM_DATA){const _={offset:1},y=u.decode.stringCheck(g,_)?u.decode.string(g,_):u.decode.number(g,_),S=g.length>_.offset?i.decode(f.data,_.offset):void 0;this.dispatchMessage(y,S)}else if(m===s.Protocol.ROOM_DATA_BYTES){const _={offset:1},y=u.decode.stringCheck(g,_)?u.decode.string(g,_):u.decode.number(g,_);this.dispatchMessage(y,new Uint8Array(g.slice(_.offset)))}}setState(f){this.serializer.setState(f),this.onStateChange.invoke(this.serializer.getState())}patch(f){this.serializer.patch(f),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(f,g){var m;const _=this.getMessageHandlerKey(f);this.onMessageHandlers.events[_]?this.onMessageHandlers.emit(_,g):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,g):(m=console.warn)===null||m===void 0||m.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"function":return`$${f._typeid}`;case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return ci.Room=c,ci}var di={};function o0(r,e){e.headers=r.headers||{},e.statusMessage=r.statusText,e.statusCode=r.status,e.data=r.response}function fi(r,e,t){return new Promise(function(i,n){t=t||{};var s=new XMLHttpRequest,o,a,l,u=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(c){c.timeout=c.type=="timeout",n(c)},s.open(r,e.href||e),s.onload=function(){for(l=s.getAllResponseHeaders().trim().split(/[\r\n]+/),o0(s,s);a=l.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(c){return o0(s,c),n(c)}(s.status>=400?n:i)(s)},typeof FormData<"u"&&u instanceof FormData||u&&typeof u=="object"&&(h["content-type"]="application/json",u=JSON.stringify(u)),s.withCredentials=!!t.withCredentials;for(o in h)s.setRequestHeader(o,h[o]);s.send(u)})}var jA=fi.bind(fi,"GET"),XA=fi.bind(fi,"POST"),YA=fi.bind(fi,"PATCH"),qA=fi.bind(fi,"DELETE"),KA=fi.bind(fi,"PUT");const ZA=Px(Object.freeze(Object.defineProperty({__proto__:null,del:qA,get:jA,patch:YA,post:XA,put:KA,send:fi},Symbol.toStringTag,{value:"Module"})));var a0;function QA(){if(a0)return di;a0=1;var r=di&&di.__createBinding||(Object.create?function(o,a,l,u){u===void 0&&(u=l);var h=Object.getOwnPropertyDescriptor(a,l);(!h||("get"in h?!a.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(o,u,h)}:function(o,a,l,u){u===void 0&&(u=l),o[u]=a[l]}),e=di&&di.__setModuleDefault||(Object.create?function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}:function(o,a){o.default=a}),t=di&&di.__importStar||function(o){if(o&&o.__esModule)return o;var a={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&r(a,o,l);return e(a,o),a};Object.defineProperty(di,"__esModule",{value:!0}),di.HTTP=void 0;const i=Ah(),n=t(ZA);let s=class{constructor(a){this.client=a}get(a,l={}){return this.request("get",a,l)}post(a,l={}){return this.request("post",a,l)}del(a,l={}){return this.request("del",a,l)}put(a,l={}){return this.request("put",a,l)}request(a,l,u={}){return n[a](this.client.getHttpEndpoint(l),this.getOptions(u)).catch(h=>{var c;const d=h.statusCode,f=((c=h.data)===null||c===void 0?void 0:c.error)||h.statusMessage||h.message;throw!d&&!f?h:new i.ServerError(d,f)})}getOptions(a){return this.authToken&&(a.headers||(a.headers={}),a.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(a.withCredentials=!0),a}};return di.HTTP=s,di}var pi={},ji={},l0;function JA(){if(l0)return ji;l0=1,Object.defineProperty(ji,"__esModule",{value:!0}),ji.getItem=ji.removeItem=ji.setItem=void 0;let r;function e(){if(!r)try{r=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return r||(r={cache:{},setItem:function(s,o){this.cache[s]=o},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),r}function t(s,o){e().setItem(s,o)}ji.setItem=t;function i(s){e().removeItem(s)}ji.removeItem=i;function n(s,o){const a=e().getItem(s);typeof Promise>"u"||!(a instanceof Promise)?o(a):a.then(l=>o(l))}return ji.getItem=n,ji}var u0;function h0(){if(u0)return pi;u0=1;var r=pi&&pi.__awaiter||function(h,c,d,f){function g(m){return m instanceof d?m:new d(function(_){_(m)})}return new(d||(d=Promise))(function(m,_){function y(P){try{w(f.next(P))}catch(E){_(E)}}function S(P){try{w(f.throw(P))}catch(E){_(E)}}function w(P){P.done?m(P.value):g(P.value).then(y,S)}w((f=f.apply(h,c||[])).next())})},e=pi&&pi.__classPrivateFieldGet||function(h,c,d,f){if(d==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof c=="function"?h!==c||!f:!c.has(h))throw new TypeError("Cannot read private member from an object whose class did not declare it");return d==="m"?f:d==="a"?f.call(h):f?f.value:c.get(h)},t=pi&&pi.__classPrivateFieldSet||function(h,c,d,f,g){if(f==="m")throw new TypeError("Private method is not writable");if(f==="a"&&!g)throw new TypeError("Private accessor was defined without a setter");if(typeof c=="function"?h!==c||!g:!c.has(h))throw new TypeError("Cannot write private member to an object whose class did not declare it");return f==="a"?g.call(h,d):g?g.value=d:c.set(h,d),d},i,n,s,o;Object.defineProperty(pi,"__esModule",{value:!0}),pi.Auth=void 0;const a=JA(),l=e0();let u=class{constructor(c){this.http=c,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),n.set(this,void 0),s.set(this,void 0),o.set(this,(0,l.createNanoEvents)()),(0,a.getItem)(this.settings.key,d=>this.token=d)}set token(c){this.http.authToken=c}get token(){return this.http.authToken}onChange(c){const d=e(this,o,"f").on("change",c);return e(this,i,"f")||t(this,n,new Promise((f,g)=>{this.getUserData().then(m=>{this.emitChange(Object.assign(Object.assign({},m),{token:this.token}))}).catch(m=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),t(this,i,!0,"f"),d}getUserData(){return r(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(c,d,f){return r(this,void 0,void 0,function*(){const g=(yield this.http.post(`${this.settings.path}/register`,{body:{email:c,password:d,options:f}})).data;return this.emitChange(g),g})}signInWithEmailAndPassword(c,d){return r(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:c,password:d}})).data;return this.emitChange(f),f})}signInAnonymously(c){return r(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:c}})).data;return this.emitChange(d),d})}sendPasswordResetEmail(c){return r(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:c}})).data})}signInWithProvider(c,d={}){return r(this,void 0,void 0,function*(){return new Promise((f,g)=>{const m=d.width||480,_=d.height||768,y=this.token?`?token=${this.token}`:"",S=`Login with ${c[0].toUpperCase()+c.substring(1)}`,w=this.http.client.getHttpEndpoint(`${d.prefix||`${this.settings.path}/provider`}/${c}${y}`),P=screen.width/2-m/2,E=screen.height/2-_/2;t(this,s,window.open(w,S,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+m+", height="+_+", top="+E+", left="+P),"f");const U=k=>{k.data.user===void 0&&k.data.token===void 0||(clearInterval(B),e(this,s,"f").close(),t(this,s,void 0,"f"),window.removeEventListener("message",U),k.data.error!==void 0?g(k.data.error):(f(k.data),this.emitChange(k.data)))},B=setInterval(()=>{(!e(this,s,"f")||e(this,s,"f").closed)&&(t(this,s,void 0,"f"),g("cancelled"),window.removeEventListener("message",U))},200);window.addEventListener("message",U)})})}signOut(){return r(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(c){c.token!==void 0&&(this.token=c.token,c.token===null?(0,a.removeItem)(this.settings.key):(0,a.setItem)(this.settings.key,c.token)),e(this,o,"f").emit("change",c)}};return pi.Auth=u,i=new WeakMap,n=new WeakMap,s=new WeakMap,o=new WeakMap,pi}var Ws={},c0;function eE(){if(c0)return Ws;c0=1,Object.defineProperty(Ws,"__esModule",{value:!0}),Ws.discordURLBuilder=void 0;function r(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return Ws.discordURLBuilder=r,Ws}var d0;function tE(){if(d0)return Wi;d0=1;var r=Wi&&Wi.__awaiter||function(h,c,d,f){function g(m){return m instanceof d?m:new d(function(_){_(m)})}return new(d||(d=Promise))(function(m,_){function y(P){try{w(f.next(P))}catch(E){_(E)}}function S(P){try{w(f.throw(P))}catch(E){_(E)}}function w(P){P.done?m(P.value):g(P.value).then(y,S)}w((f=f.apply(h,c||[])).next())})},e;Object.defineProperty(Wi,"__esModule",{value:!0}),Wi.Client=Wi.MatchMakeError=void 0;const t=Ah(),i=s0(),n=QA(),s=h0(),o=eE();class a extends Error{constructor(c,d){super(c),this.code=d,Object.setPrototypeOf(this,a.prototype)}}Wi.MatchMakeError=a;const l=typeof window<"u"&&typeof((e=window==null?void 0:window.location)===null||e===void 0?void 0:e.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let u=class{constructor(c=l,d){var f,g;if(typeof c=="string"){const m=c.startsWith("/")?new URL(c,l):new URL(c),_=m.protocol==="https:"||m.protocol==="wss:",y=Number(m.port||(_?443:80));this.settings={hostname:m.hostname,pathname:m.pathname,port:y,secure:_}}else c.port===void 0&&(c.port=c.secure?443:80),c.pathname===void 0&&(c.pathname=""),this.settings=c;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new n.HTTP(this),this.auth=new s.Auth(this.http),this.urlBuilder=d,!this.urlBuilder&&typeof window<"u"&&(!((g=(f=window==null?void 0:window.location)===null||f===void 0?void 0:f.hostname)===null||g===void 0)&&g.includes("discordsays.com"))&&(this.urlBuilder=o.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(c,d={},f){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",c,d,f)})}create(c,d={},f){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",c,d,f)})}join(c,d={},f){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",c,d,f)})}joinById(c,d={},f){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",c,d,f)})}reconnect(c,d){return r(this,void 0,void 0,function*(){if(typeof c=="string"&&typeof d=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[f,g]=c.split(":");if(!f||!g)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",f,{reconnectionToken:g},d)})}getAvailableRooms(c=""){return r(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${c}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(c,d,f){return r(this,void 0,void 0,function*(){const g=this.createRoom(c.room.name,d);g.roomId=c.room.roomId,g.sessionId=c.sessionId;const m={sessionId:g.sessionId};c.reconnectionToken&&(m.reconnectionToken=c.reconnectionToken);const _=f||g;return g.connect(this.buildEndpoint(c.room,m),c.devMode&&(()=>r(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${g.roomId}'...`);let y=0,S=8;const w=()=>r(this,void 0,void 0,function*(){y++;try{yield this.consumeSeatReservation(c,d,_),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${g.roomId}'`)}catch{y<S?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${y} out of ${S})`),setTimeout(w,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(w,2e3)})),_),new Promise((y,S)=>{const w=(P,E)=>S(new t.ServerError(P,E));_.onError.once(w),_.onJoin.once(()=>{_.onError.remove(w),y(_)})})})}createMatchMakeRequest(c,d,f={},g,m){return r(this,void 0,void 0,function*(){const _=(yield this.http.post(`matchmake/${c}/${d}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(f)})).data;if(_.error)throw new a(_.error,_.code);return c==="reconnect"&&(_.reconnectionToken=f.reconnectionToken),yield this.consumeSeatReservation(_,g,m)})}createRoom(c,d){return new i.Room(c,d)}buildEndpoint(c,d={}){const f=[];for(const _ in d)d.hasOwnProperty(_)&&f.push(`${_}=${d[_]}`);let g=this.settings.secure?"wss://":"ws://";c.publicAddress?g+=`${c.publicAddress}`:g+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const m=`${g}/${c.processId}/${c.roomId}?${f.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(m)):m}getHttpEndpoint(c=""){const d=c.startsWith("/")?c:`/${c}`,f=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${d}`;return this.urlBuilder?this.urlBuilder(new URL(f)):f}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return Wi.Client=u,Wi}var js={},f0;function iE(){if(f0)return js;f0=1,Object.defineProperty(js,"__esModule",{value:!0}),js.SchemaSerializer=void 0;const r=r0();let e=class{setState(i){return this.state.decode(i)}getState(){return this.state}patch(i){return this.state.decode(i)}teardown(){var i,n;(n=(i=this.state)===null||i===void 0?void 0:i.$changes)===null||n===void 0||n.root.clearRefs()}handshake(i,n){this.state?new r.Reflection().decode(i,n):this.state=r.Reflection.decode(i,n)}};return js.SchemaSerializer=e,js}var Xs={},p0;function rE(){if(p0)return Xs;p0=1,Object.defineProperty(Xs,"__esModule",{value:!0}),Xs.NoneSerializer=void 0;let r=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Xs.NoneSerializer=r,Xs}var m0;function nE(){return m0||(m0=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.SchemaSerializer=r.registerSerializer=r.Auth=r.Room=r.ErrorCode=r.Protocol=r.Client=void 0,zA();var e=tE();Object.defineProperty(r,"Client",{enumerable:!0,get:function(){return e.Client}});var t=K_();Object.defineProperty(r,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(r,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var i=s0();Object.defineProperty(r,"Room",{enumerable:!0,get:function(){return i.Room}});var n=h0();Object.defineProperty(r,"Auth",{enumerable:!0,get:function(){return n.Auth}});const s=iE();Object.defineProperty(r,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const o=rE(),a=Q_();Object.defineProperty(r,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",s.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)}(Ch)),Ch}var sE=nE(),Xr;(r=>{(e=>{e.GET_DATA="GetData",e.DoAction="DoAction"})(r.GAME_EVENTS||(r.GAME_EVENTS={})),(e=>{e.GET_DATA="GetData"})(r.GAME_ACTION||(r.GAME_ACTION={})),(e=>{e.COMMON="Common"})(r.GAME_HANDLER||(r.GAME_HANDLER={})),(e=>{e[e.GET_CONFIG=0]="GET_CONFIG",e[e.GET_USER_PROFILE=1]="GET_USER_PROFILE"})(r.GAME_INFO||(r.GAME_INFO={}))})(Xr||(Xr={}));class oE{constructor(e){this._currentRoom=e}get currentRoom(){return this._currentRoom}leave(){this._currentRoom&&this._currentRoom.leave(!0)}_sendActionMessage(e,t,i){try{this.currentRoom&&(console.log(`Send Action: ${t} ->`),this.currentRoom.send(Xr.GAME_EVENTS.DoAction,{handler:e,action:t,params:i||null}))}catch{}}}class aE extends oE{sendRequestResult(){this._sendActionMessage(Xr.GAME_HANDLER.COMMON,Xr.GAME_ACTION.GET_DATA,{})}}class lE{constructor(){this._game=null}get Game(){return this._game}set Game(e){this._game=e}}class uE{constructor(){this.hostname="localhost",this.defaultRoomName="testDefaultGame",this.port=2567,this.useSSL=!1,this.mainRoom=null,this._handlersMap=new Map,this._actionsMap=new Map,this._isLeavingProcessing=!1,this.uid=null,this.token=null,this.messageBoxData=[],this.toastData=[],this.Senders=new lE,this._isLeavingProcessing=!1,this.uri=""}getHandlerByEvent(e){let t=this._handlersMap.get(e);if(t&&t.length)return t[0]}getHandlersByEvent(e){return this._handlersMap.get(e)||[]}addActionHandler(e,t,i){this._actionsMap.set(`${i}.${e}`,t)}basicAuthen(e){return this.token=e,this}checkMessageBox(){this.messageBoxData.length&&Ut.emit(At.MESSAGE_BOX,this.messageBoxData.pop())}checkToast(){this.toastData.length&&Ut.emit(At.TOAST,this.toastData.pop())}async connect(e,t,i=!1){try{return this.hostname=e,this.port=t,this.useSSL=i,this.uri=`${this.useSSL?"wss":"ws"}://${this.hostname}${[443,80].indexOf(this.port)>=0||this.useSSL?"":`:${this.port}`}`,this.client=new sE.Client({hostname:this.hostname,port:this.port,secure:this.useSSL}),this.mainRoom=await this.client.joinOrCreate(this.defaultRoomName,{accessToken:this.token}),this.Senders&&(this.Senders.Game=new aE(this.mainRoom)),this.mainRoom.onMessage(Xr.GAME_EVENTS.DoAction,n=>{if(console.log("-> on message: ",n),!!n)switch(n.action){case Xr.GAME_ACTION.GET_DATA:Ut.emit(At.GET_DATA,n);break;default:break}}),this.mainRoom.onLeave(this.onLeave.bind(this)),!0}catch(n){return console.error(n),!1}}onError(e,t){console.log(`onError : ${e}, ${t}`),t&&console.log(t)}async onLeave(e){try{if(this._isLeavingProcessing)return;if(this._isLeavingProcessing=!0,console.log("onLeave: ",e),e>=1e3&&e<=4e3){L.popModal(new Ns({width:L.width*.8,height:260,title:"Lỗi xuất hiện !",description:"Bạn đã mất kết nối với máy chủ!",buttonText:"Tải lại game",noCloseButton:!0,onClick:()=>{L.changeScreen(new Rh({isReconnect:!0}))}}));return}if(e===4001||e===4002){L.popModal(new Ns({width:L.width*.8,height:260,title:"Lỗi xuất hiện !",description:"Bạn đã mất kết nối với máy chủ!",buttonText:"Tải lại game",noCloseButton:!0,onClick:()=>{L.changeScreen(new Rh({isReconnect:!1}))}}));return}}catch(t){console.log(t)}finally{this._isLeavingProcessing=!1}}testDisconnect(){var e;(e=this.mainRoom)==null||e.leave()}}const hE=new uE;class cE{async login(e,t){try{if(t=="dev"&&await this._loginWithExistToken()){console.log("_loginWithExistToken ->");return}let i=await Fn.signInByTapTap(e);if(i){const n=i.token||i.accessToken;n&&Fn.environment&&await this.connectToServer(n,Fn.environment)&&N_.setAccessTokenByKey("token",n)}}catch(i){console.log(i),i&&i.message&&Ut.emit(At.LOADING_MESSAGES,i.message)}}async _loginWithExistToken(){let e=N_.getAccessTokenByKey("token");if(e){let t=await Fn.checkToken(e);if(t&&Fn.environment&&await this.connectToServer(t.token,Fn.environment))return!0}return console.log("--> token null or expired --"),!1}async connectToServer(e,t){return e&&await hE.basicAuthen(e).connect(t.host,t.port,t.ssl)?(console.log("-> connect server success"),!0):!1}__parseTokenFromURL(){let e=window.location.search;if(e.length>0)return new URLSearchParams(e).get("token");let t=window.location.href||window.location.toString(),i=t.lastIndexOf("/");if(i!==-1){let n=t.substring(i+1);if(n&&!n.includes("."))return n.trim()}return null}__parseENVFromURL(){let e=window.location.search;if(e.length>0)return new URLSearchParams(e).get("env");let t=window.location.href||window.location.toString(),i=t.lastIndexOf("/");if(i!==-1){let n=t.substring(i+1);if(n&&!n.includes("."))return n.trim()}return null}}const _a=new cE;class Rh extends ue{constructor({isReconnect:e}){super(),this.assetLoaded=!1,this.socketConnected=!1,this.loading=!0,console.log("is loading as reconnect socket: ",e),this.loadingTextUI=new ot,this.loadingTextUI=new ot({text:"Loading asset..."}),this.loadingTextUI.anchor.set(.5),this.loadingTextUI.position.set(L.width/2,L.height/2),this.addChild(this.loadingTextUI),this.loadAsset().then(()=>{console.log("-> asset loaded"),this.assetLoaded=!0,L.LoadUnderneath(),this.closeWebviewLoading()}),Ut.on(At.GET_DATA,this.onGetData,this),Ut.on(At.LOADING_MESSAGES,this.onLoadMessages,this)}update(e){this.loading&&this.assetLoaded&&(this.gameLoaded(),this.loading=!1)}resize(){}onDestroy(){Ut.removeListener(At.GET_DATA,this.onGetData,this),Ut.removeListener(At.LOADING_MESSAGES,this.onLoadMessages,this)}async loadAsset(){console.log("load asset ->"),await Cr.init({manifest:G_});const e=G_.bundles.map(t=>t.name);await Cr.loadBundle(e)}gameLoaded(){console.log("-> all loaded"),L.changeScreen(new ga)}onLoadMessages(e){L.popModal(new Ns({width:L.width*.9,height:250,title:"Thông báo",description:e,buttonText:"OK",onClick:()=>{L.closeCurrentPopup()},noCloseButton:!0}))}async connectSocket(e=!1){const t=_a.__parseTokenFromURL();if(t)try{if(console.log("connect socket ->"),this.loadingTextUI.text="connect socket...",e)await _a._loginWithExistToken();else{const i=_a.__parseENVFromURL();await _a.login(t,i)}}catch(i){console.log("fail login",i),i&&i.message&&(this.loadingTextUI.text=i.message)}}closeWebviewLoading(){window&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({action:"CLOSE_GAME_LOADING"}))}onGetData({params:e}){e&&(console.log("-> socket connected"),this.socketConnected=!0)}}async function dE(r){await L.initialize(r),L.changeScreen(new Rh({isReconnect:!1}))}oe.add(qc),ue.mixin(Cv),oe.add(dd),oe.add(fd),oe.add(mf),ue.mixin(C2),oe.add(om),oe.add(Al),oe.add(lm),oe.add(fm),oe.add(pm),oe.add(Am),oe.add(Tm),oe.add(vm),oe.add(xu),oe.add(bm),oe.add(xm),oe.add(_m),oe.add(Tf),oe.add(Sf);const fE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),pE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));Zr.initialize=dE,Object.defineProperty(Zr,Symbol.toStringTag,{value:"Module"})});
