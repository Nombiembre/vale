import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CHh-gjxN.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_B7n8K_Lj.mjs';
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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/michi/dev/vale/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.json.ts","pathname":"/api/sendEmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BVG0NT68.js"}],"styles":[{"type":"external","src":"/_astro/index.C8cdQKBT.css"}],"routeData":{"route":"/journal/[slug]","isIndex":false,"type":"page","pattern":"^\\/journal\\/([^/]+?)\\/?$","segments":[[{"content":"journal","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/journal/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BVG0NT68.js"}],"styles":[{"type":"external","src":"/_astro/index.C8cdQKBT.css"},{"type":"inline","content":"h1[data-astro-cid-zg5eskfd],h2[data-astro-cid-zg5eskfd],h3[data-astro-cid-zg5eskfd],h4[data-astro-cid-zg5eskfd],h5[data-astro-cid-zg5eskfd],h6[data-astro-cid-zg5eskfd]{font-family:Bricolage Grotesque;text-wrap:balance}\n"}],"routeData":{"route":"/journal","isIndex":false,"type":"page","pattern":"^\\/journal\\/?$","segments":[[{"content":"journal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/journal.astro","pathname":"/journal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B48eaYeZ.js"}],"styles":[{"type":"external","src":"/_astro/index.C8cdQKBT.css"},{"type":"inline","content":"h1[data-astro-cid-zg5eskfd],h2[data-astro-cid-zg5eskfd],h3[data-astro-cid-zg5eskfd],h4[data-astro-cid-zg5eskfd],h5[data-astro-cid-zg5eskfd],h6[data-astro-cid-zg5eskfd]{font-family:Bricolage Grotesque;text-wrap:balance}\n"}],"routeData":{"route":"/signal","isIndex":false,"type":"page","pattern":"^\\/signal\\/?$","segments":[[{"content":"signal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signal.astro","pathname":"/signal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Dnn3AgV1.js"}],"styles":[{"type":"external","src":"/_astro/index.C8cdQKBT.css"},{"type":"inline","content":"h1[data-astro-cid-zg5eskfd],h2[data-astro-cid-zg5eskfd],h3[data-astro-cid-zg5eskfd],h4[data-astro-cid-zg5eskfd],h5[data-astro-cid-zg5eskfd],h6[data-astro-cid-zg5eskfd]{font-family:Bricolage Grotesque;text-wrap:balance}\n#mensaje[data-astro-cid-my5cbuot]{position:absolute;top:80vh;left:50%;transform:translate(-50%);width:100%}.message__fragment[data-astro-cid-my5cbuot]{opacity:0;scale:.5}\n"}],"routeData":{"route":"/transmission","isIndex":false,"type":"page","pattern":"^\\/transmission\\/?$","segments":[[{"content":"transmission","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/transmission.astro","pathname":"/transmission","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BVG0NT68.js"}],"styles":[{"type":"external","src":"/_astro/index.C8cdQKBT.css"},{"type":"inline","content":"h1[data-astro-cid-zg5eskfd],h2[data-astro-cid-zg5eskfd],h3[data-astro-cid-zg5eskfd],h4[data-astro-cid-zg5eskfd],h5[data-astro-cid-zg5eskfd],h6[data-astro-cid-zg5eskfd]{font-family:Bricolage Grotesque;text-wrap:balance}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/michi/dev/vale/src/pages/journal/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/journal/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/michi/dev/vale/src/pages/journal.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/journal@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/michi/dev/vale/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/michi/dev/vale/src/pages/signal.astro",{"propagation":"in-tree","containsHead":true}],["/home/michi/dev/vale/src/pages/transmission.astro",{"propagation":"in-tree","containsHead":true}],["/home/michi/dev/vale/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/signal@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/transmission@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/sendEmail.json@_@ts":"pages/api/sendemail.json.astro.mjs","\u0000@astro-page:src/pages/journal@_@astro":"pages/journal.astro.mjs","\u0000@astro-page:src/pages/signal@_@astro":"pages/signal.astro.mjs","\u0000@astro-page:src/pages/transmission@_@astro":"pages/transmission.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/journal/[slug]@_@astro":"pages/journal/_slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/michi/dev/vale/src/content/diary/feb-19.md?astroContentCollectionEntry=true":"chunks/feb-19_BfovkOUB.mjs","/home/michi/dev/vale/src/content/diary/feb-19.md?astroPropagatedAssets":"chunks/feb-19_BiT4jGCh.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/michi/dev/vale/src/content/diary/feb-19.md":"chunks/feb-19_CnC4afAv.mjs","\u0000@astrojs-manifest":"manifest_qMVAi-XX.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.B48eaYeZ.js","/astro/hoisted.js?q=1":"_astro/hoisted.Dnn3AgV1.js","@astrojs/react/client.js":"_astro/client.doI5K4e0.js","/astro/hoisted.js?q=2":"_astro/hoisted.BVG0NT68.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.C8cdQKBT.css","/favicon.svg","/feb-19.md","/_astro/client.doI5K4e0.js","/_astro/hoisted.B48eaYeZ.js","/_astro/hoisted.BVG0NT68.js","/_astro/hoisted.Dnn3AgV1.js","/diary_images/febrero20.avif","/music/as_we_are.opus","/music/unfair.opus"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"NUI8oP4pRdbT0mZqkEGXjCD6saOeIaGWZInpVrpBv1g=","experimentalEnvGetSecretEnabled":false});

export { manifest };
