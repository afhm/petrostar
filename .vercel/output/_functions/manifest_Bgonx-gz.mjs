import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CP1Gnm9A.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_CGPQV_2k.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/afhm/alifsense/prod/petrostar/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DpYsPiLh.js"}],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DpYsPiLh.js"}],"styles":[{"type":"external","src":"/_astro/about.DuF3lwjM.css"},{"type":"external","src":"/_astro/404.BenMhqZt.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DpYsPiLh.js"}],"styles":[{"type":"external","src":"/_astro/about.DuF3lwjM.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DpYsPiLh.js"}],"styles":[{"type":"external","src":"/_astro/about.DuF3lwjM.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DpYsPiLh.js"}],"styles":[{"type":"external","src":"/_astro/about.DuF3lwjM.css"},{"type":"external","src":"/_astro/index.CruxSClv.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/project/[projectname]","isIndex":true,"type":"page","pattern":"^\\/project\\/([^/]+?)\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}],[{"content":"projectname","dynamic":true,"spread":false}]],"params":["projectname"],"component":"src/pages/project/[projectname]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DpYsPiLh.js"}],"styles":[{"type":"external","src":"/_astro/about.DuF3lwjM.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DpYsPiLh.js"}],"styles":[{"type":"external","src":"/_astro/about.DuF3lwjM.css"},{"type":"inline","content":".wpo-hero-slider[data-astro-cid-bbe6dxrz]{width:100%;height:950px;display:flex;position:relative;z-index:0}.slide-inner[data-astro-cid-bbe6dxrz]{width:100%;height:100%;position:absolute;left:0;top:0;z-index:1;background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;text-align:left}.slide-inner[data-astro-cid-bbe6dxrz]:before{position:absolute;left:0;top:0;width:100%;height:100%;background:#040128;content:\"\";opacity:.6}.slide-content[data-astro-cid-bbe6dxrz]{position:relative;z-index:2;padding-bottom:85px;padding-left:240px;margin-top:140px}.slide-title[data-astro-cid-bbe6dxrz] h2[data-astro-cid-bbe6dxrz]{font-size:70px;font-weight:800;line-height:90px;margin:10px 0 15px;color:#fff;text-transform:capitalize}.slide-text[data-astro-cid-bbe6dxrz] p[data-astro-cid-bbe6dxrz]{font-size:clamp(1rem,2vw,1.25rem);max-width:800px;margin-bottom:2rem;color:#fff}.theme-btn[data-astro-cid-bbe6dxrz]{display:inline-block;padding:12px 30px;background:#ff5733;color:#fff;text-decoration:none;border-radius:5px;transition:all .3s}.theme-btn[data-astro-cid-bbe6dxrz]:hover{background:#e64a2e}@media (max-width: 1199px){.wpo-hero-slider[data-astro-cid-bbe6dxrz]{height:680px}.slide-title[data-astro-cid-bbe6dxrz] h2[data-astro-cid-bbe6dxrz]{font-size:50px;line-height:60px}}@media (max-width: 991px){.wpo-hero-slider[data-astro-cid-bbe6dxrz]{height:600px}.slide-content[data-astro-cid-bbe6dxrz]{padding-left:30px}.slide-title[data-astro-cid-bbe6dxrz] h2[data-astro-cid-bbe6dxrz]{font-size:40px;line-height:55px}}@media (max-width: 767px){.wpo-hero-slider[data-astro-cid-bbe6dxrz]{height:500px}.slide-content[data-astro-cid-bbe6dxrz]{padding-left:10px;text-align:center}.swiper-button-next[data-astro-cid-bbe6dxrz],.swiper-button-prev[data-astro-cid-bbe6dxrz]{display:none}}\n[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://petrostarinnovative.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/afhm/alifsense/prod/petrostar/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/afhm/alifsense/prod/petrostar/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/afhm/alifsense/prod/petrostar/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/afhm/alifsense/prod/petrostar/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/afhm/alifsense/prod/petrostar/src/pages/project/[projectname]/index.astro",{"propagation":"none","containsHead":true}],["/home/afhm/alifsense/prod/petrostar/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/project/[projectname]/index@_@astro":"pages/project/_projectname_.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/afhm/alifsense/prod/petrostar/src/images/Petrostar-Colour-Logo.png":"chunks/Petrostar-Colour-Logo_CUyQUN8V.mjs","/home/afhm/alifsense/prod/petrostar/src/images/ab-2.jpg":"chunks/ab-2_DOFihbsz.mjs","/home/afhm/alifsense/prod/petrostar/src/images/about.png":"chunks/about_Cluyzx7K.mjs","/home/afhm/alifsense/prod/petrostar/src/images/funfact1.svg":"chunks/funfact1_CouLt1Y7.mjs","/home/afhm/alifsense/prod/petrostar/src/images/funfact2.svg":"chunks/funfact2_Bygh9YsP.mjs","/home/afhm/alifsense/prod/petrostar/src/images/funfact3.svg":"chunks/funfact3_DcduBF23.mjs","/home/afhm/alifsense/prod/petrostar/src/images/funfact4.svg":"chunks/funfact4_ChP1Hpcm.mjs","/home/afhm/alifsense/prod/petrostar/src/images/icon-1.svg":"chunks/icon-1_CD7Sg1g4.mjs","/home/afhm/alifsense/prod/petrostar/src/images/icon-2.svg":"chunks/icon-2_CXbMP_E3.mjs","/home/afhm/alifsense/prod/petrostar/src/images/icon-3.svg":"chunks/icon-3_BlrdZ2NN.mjs","/home/afhm/alifsense/prod/petrostar/src/images/icon-4.svg":"chunks/icon-4_cg1Cb1Uf.mjs","/home/afhm/alifsense/prod/petrostar/src/images/industries/1_1.jpg":"chunks/1_1_82q8F04v.mjs","/home/afhm/alifsense/prod/petrostar/src/images/industries/2_1.jpg":"chunks/2_1_BZpWgs6F.mjs","/home/afhm/alifsense/prod/petrostar/src/images/industries/3_1.jpg":"chunks/3_1_DGnpMSpg.mjs","/home/afhm/alifsense/prod/petrostar/src/images/industries/4_1.jpg":"chunks/4_1_CigLC4zB.mjs","/home/afhm/alifsense/prod/petrostar/src/images/page-header-contact.png":"chunks/page-header-contact_BDgFTUlE.mjs","/home/afhm/alifsense/prod/petrostar/src/images/services/s1.png":"chunks/s1_c6RTIJL3.mjs","/home/afhm/alifsense/prod/petrostar/src/images/services/s2.png":"chunks/s2_Bx6jlCoT.mjs","/home/afhm/alifsense/prod/petrostar/src/images/services/s3.png":"chunks/s3_DXh_FAZM.mjs","/home/afhm/alifsense/prod/petrostar/src/images/services/s4.png":"chunks/s4_B2kvYCRX.mjs","/home/afhm/alifsense/prod/petrostar/src/images/services/s5.png":"chunks/s5_Cgrjv_pG.mjs","/home/afhm/alifsense/prod/petrostar/src/images/slider/slide1.jpg":"chunks/slide1_CnMOOolV.mjs","/home/afhm/alifsense/prod/petrostar/src/images/slider/slide2.jpg":"chunks/slide2_2bODluBI.mjs","/home/afhm/alifsense/prod/petrostar/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_DFvVXigR.mjs","\u0000@astrojs-manifest":"manifest_Bgonx-gz.mjs","astro:scripts/page.js":"_astro/page.DpYsPiLh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Petrostar-Colour-Logo.B869C_rm.png","/_astro/ab-2.Tc-sQcEp.jpg","/_astro/funfact2.WOri8MLA.svg","/_astro/funfact3.Bp3wk26p.svg","/_astro/funfact4.SP8HW4f_.svg","/_astro/funfact1.D2c32Xa7.svg","/_astro/icon-1.DElSM5oH.svg","/_astro/icon-4.BA22xtiJ.svg","/_astro/icon-3.1KkLV_1j.svg","/_astro/icon-2.1jkyad-F.svg","/_astro/2_1.DZRo7BwA.jpg","/_astro/3_1.D1wgFNDL.jpg","/_astro/4_1.v0xsbtOD.jpg","/_astro/s1.DKWyoQAk.png","/_astro/s3.BAFjFWYE.png","/_astro/s4.A_OX0orj.png","/_astro/1_1.By8-3i9t.jpg","/_astro/about.DfkdQPBT.png","/_astro/page-header-contact.nGB3Ya5P.png","/_astro/s2.CjUv4ycx.png","/_astro/slide1.CJp-6OdC.jpg","/_astro/slide2.yeJiu0l0.jpg","/_astro/s5.BK6AQXb8.png","/_astro/404.BenMhqZt.css","/_astro/about.DuF3lwjM.css","/_astro/index.CruxSClv.css","/favicon.ico","/manifest.json","/_astro/page.DpYsPiLh.js","/js/bootstrap.bundle.min.js","/js/jquery-plugin-collection.js","/js/jquery.min.js","/js/modernizr.custom.js","/js/script.js","/fonts/flaticon.eot","/fonts/flaticon.ttf","/fonts/flaticon.woff","/fonts/flaticon.woff2","/fonts/slick.eot","/fonts/slick.ttf","/fonts/slick.woff","/fonts/themify.eot","/fonts/themify.ttf","/fonts/themify.woff","/fonts/themify_1.eot","/_astro/page.DpYsPiLh.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"/7rofBEBUrXGY9LKodxXcP3NR/FlqOkV1uCqtBaJCnQ=","envGetSecretEnabled":true});

export { manifest };
