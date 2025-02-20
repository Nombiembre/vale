import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BSyg71td.mjs';
import { manifest } from './manifest_qMVAi-XX.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page2 = () => import('./pages/journal/_slug_.astro.mjs');
const _page3 = () => import('./pages/journal.astro.mjs');
const _page4 = () => import('./pages/signal.astro.mjs');
const _page5 = () => import('./pages/transmission.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sendEmail.json.ts", _page1],
    ["src/pages/journal/[slug].astro", _page2],
    ["src/pages/journal.astro", _page3],
    ["src/pages/signal.astro", _page4],
    ["src/pages/transmission.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
