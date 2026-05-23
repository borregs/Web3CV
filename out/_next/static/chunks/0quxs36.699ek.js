(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20325,t=>{"use strict";var e=t.i(43476),i=t.i(72520),s=t.i(24006),r=t.i(46932),a=t.i(22016),h=t.i(83894);let l=[.22,1,.36,1];t.s(["HeroCtas",0,function(){return(0,e.jsx)(s.LayoutGroup,{children:(0,e.jsxs)(r.motion.div,{layout:!0,transition:{layout:{duration:.55,ease:l}},className:"mt-2 flex flex-wrap items-center gap-3",children:[(0,e.jsx)(h.ContactButton,{}),(0,e.jsx)(r.motion.div,{layout:!0,transition:{layout:{duration:.55,ease:l}},children:(0,e.jsxs)(a.default,{href:"/projects",className:"border border-foreground/5 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-2xl transition-colors hover:bg-foreground/4",children:["View My Work",(0,e.jsx)(i.ArrowRight,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5","aria-hidden":"true"})]})})]})})}])},14281,t=>{"use strict";var e=t.i(43476),i=t.i(71645),s=t.i(21663),r=t.i(56850),a=t.i(80075),h=t.i(53604),l=t.i(37821);let n=new Uint8Array(4),o=1;class g{constructor(t,{image:e,target:i=t.TEXTURE_2D,type:s=t.UNSIGNED_BYTE,format:r=t.RGBA,internalFormat:a=r,wrapS:h=t.CLAMP_TO_EDGE,wrapT:l=t.CLAMP_TO_EDGE,wrapR:n=t.CLAMP_TO_EDGE,generateMipmaps:g=i===(t.TEXTURE_2D||t.TEXTURE_CUBE_MAP),minFilter:u=g?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:m=t.LINEAR,premultiplyAlpha:p=!1,unpackAlignment:c=4,flipY:d=i==(t.TEXTURE_2D||t.TEXTURE_3D),anisotropy:f=0,level:v=0,width:E,height:T=E,length:x=1}={}){this.gl=t,this.id=o++,this.image=e,this.target=i,this.type=s,this.format=r,this.internalFormat=a,this.minFilter=u,this.magFilter=m,this.wrapS=h,this.wrapT=l,this.wrapR=n,this.generateMipmaps=g,this.premultiplyAlpha=p,this.unpackAlignment=c,this.flipY=d,this.anisotropy=Math.min(f,this.gl.renderer.parameters.maxAnisotropy),this.level=v,this.width=E,this.height=T,this.length=x,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){let e=!(this.image===this.store.image&&!this.needsUpdate);if((e||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),e){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let t=0;t<6;t++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+t,this.level,this.internalFormat,this.format,this.type,this.image[t]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let t=0;t<this.image.length;t++)this.gl.compressedTexImage2D(this.target,t,this.internalFormat,this.image[t].width,this.image[t].height,0,this.image[t].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);if(this.generateMipmaps){var i,s;this.gl.renderer.isWebgl2||((i=this.image.width)&i-1)==0&&((s=this.image.height)&s-1)==0?this.gl.generateMipmap(this.target):(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR)}this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let t=0;t<6;t++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n);this.store.image=this.image}}}let u=`
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,m=`
precision highp float;

uniform sampler2D uTexA;
uniform sampler2D uTexB;
uniform float uProgress;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uImageSize;
uniform vec2 uOrigin;
uniform vec2 uDirection;

varying vec2 vUv;

vec2 coverUv(vec2 uv) {
  vec2 ratio = vec2(
    min((uResolution.x / uResolution.y) / (uImageSize.x / uImageSize.y), 1.0),
    min((uResolution.y / uResolution.x) / (uImageSize.y / uImageSize.x), 1.0)
  );
  return vec2(
    uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    uv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  vec2 baseUv = coverUv(uv);

  float p = uProgress;
  float bell = 4.0 * p * (1.0 - p);

  vec2 dir = normalize(uDirection + vec2(0.0001));
  float along = dot(uv - uOrigin, dir);
  float distGradient = (along + 1.4) / 2.8;

  float warpLow = fbm(uv * 1.8 + uTime * 0.05) - 0.5;
  float warpHi = fbm(uv * 5.5 - uTime * 0.04 + 13.0) - 0.5;
  float warp = warpLow * 0.55 + warpHi * 0.18;

  float field = distGradient + warp;

  float remapped = mix(-0.25, 1.25, p);
  float edgeWidth = 0.07;
  float mask = smoothstep(remapped - edgeWidth, remapped + edgeWidth, field);
  mask = 1.0 - mask;

  vec2 perp = vec2(-dir.y, dir.x);
  float ripplePhase = (field - remapped) * 14.0;
  float ripple = sin(ripplePhase) * 0.5 + 0.5;
  float edgeBand = 1.0 - smoothstep(0.0, edgeWidth * 1.6, abs(field - remapped));
  float pushAmount = ripple * edgeBand * 0.025 * bell;
  vec2 pushUv = uv + perp * pushAmount;
  vec2 baseUvA = coverUv(pushUv);
  vec2 baseUvB = coverUv(pushUv);

  vec4 texA = texture2D(uTexA, baseUvA);
  vec4 texB = texture2D(uTexB, baseUvB);

  vec4 color = mix(texA, texB, mask);

  float darken = edgeBand * 0.35 * bell;
  color.rgb *= 1.0 - darken;

  gl_FragColor = color;
}
`;t.s(["PortraitMorph",0,function({srcA:t,srcB:n,alt:o,className:p}){let c=(0,i.useRef)(null),[d,f]=(0,i.useState)(!1),v=(0,i.useRef)(!1),E=(0,i.useRef)(0),T=(0,i.useRef)([.5,.5]),x=(0,i.useRef)([1,0]),w=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=c.current;if(!e)return;let i=new s.Renderer({alpha:!0,premultipliedAlpha:!1,dpr:Math.min(window.devicePixelRatio||1,2)}),o=i.gl,p=o.canvas;p.style.width="100%",p.style.height="100%",p.style.display="block",e.appendChild(p);let d=new l.Transform,R=new g(o,{generateMipmaps:!1}),A=new g(o,{generateMipmaps:!1}),_=[1,1],U=(t,e)=>new Promise((i,s)=>{let r=new Image;r.crossOrigin="anonymous",r.onload=()=>{e.image=r,_[0]=r.naturalWidth,_[1]=r.naturalHeight,i()},r.onerror=s,r.src=t}),y=new h.Triangle(o),P=new r.Program(o,{vertex:u,fragment:m,uniforms:{uTexA:{value:R},uTexB:{value:A},uProgress:{value:0},uTime:{value:0},uResolution:{value:[1,1]},uImageSize:{value:_},uOrigin:{value:[.5,.5]},uDirection:{value:[1,0]}},transparent:!0});new a.Mesh(o,{geometry:y,program:P}).setParent(d);let S=()=>{let t=e.clientWidth,s=e.clientHeight;i.setSize(t,s),p.style.width="100%",p.style.height="100%",P.uniforms.uResolution.value=[t*i.dpr,s*i.dpr]},I=new ResizeObserver(S);I.observe(e),S();let b=0,D=performance.now(),B=0,M=!0,F=()=>{if(!M)return;let t=performance.now(),e=Math.min((t-D)/1e3,.05);D=t,B+=e;let s=+!!v.current,r=1-Math.exp(-(v.current?2.4:2)*e);E.current+=(s-E.current)*r,P.uniforms.uTime.value=B,P.uniforms.uProgress.value=E.current,P.uniforms.uOrigin.value=T.current,P.uniforms.uDirection.value=x.current,P.uniforms.uImageSize.value=_,i.render({scene:d}),b=requestAnimationFrame(F)};Promise.all([U(t,R),U(n,A)]).then(()=>{f(!0),D=performance.now(),F()}).catch(()=>{f(!1)});let L=(t,e)=>{let i=1-t,s=Math.min(t,i,e,1-e);return s===t?[1,0]:s===i?[-1,0]:s===e?[0,1]:[0,-1]},X=t=>{let i=e.getBoundingClientRect(),s=(t.clientX-i.left)/i.width,r=1-(t.clientY-i.top)/i.height;T.current=[s,r],x.current=L(s,r),w.current={x:s,y:r,t:performance.now()},v.current=!0},N=t=>{let i=e.getBoundingClientRect(),s=(t.clientX-i.left)/i.width,r=1-(t.clientY-i.top)/i.height;T.current=[s,r],x.current=L(s,r).map(t=>-t),v.current=!1},C=t=>{let i=e.getBoundingClientRect(),s=(t.clientX-i.left)/i.width,r=1-(t.clientY-i.top)/i.height,a=w.current;if(a&&performance.now()-a.t<80&&E.current<.15){let t=s-a.x,e=r-a.y,i=Math.hypot(t,e);i>.01&&(x.current=[t/i,e/i])}w.current={x:s,y:r,t:performance.now()}};return e.addEventListener("pointerenter",X),e.addEventListener("pointerleave",N),e.addEventListener("pointermove",C),()=>{M=!1,cancelAnimationFrame(b),I.disconnect(),e.removeEventListener("pointerenter",X),e.removeEventListener("pointerleave",N),e.removeEventListener("pointermove",C);let t=o.getExtension("WEBGL_lose_context");t&&t.loseContext(),p.parentNode===e&&e.removeChild(p)}},[t,n]),(0,e.jsx)("div",{ref:c,role:"img","aria-label":o,className:p,style:{position:"relative",width:"100%",height:"100%",filter:"grayscale(100%)"},children:d?null:(0,e.jsx)("img",{src:t,alt:o,draggable:!1,className:"absolute inset-0 h-full w-full select-none object-cover"})})}],14281)}]);