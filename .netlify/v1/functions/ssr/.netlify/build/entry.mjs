import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_yGB31F9e.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/illustrations.astro.mjs');
const _page3 = () => import('./pages/admin/landing.astro.mjs');
const _page4 = () => import('./pages/admin/painting.astro.mjs');
const _page5 = () => import('./pages/admin/photography.astro.mjs');
const _page6 = () => import('./pages/admin/products.astro.mjs');
const _page7 = () => import('./pages/admin/projects.astro.mjs');
const _page8 = () => import('./pages/admin/tradingcards.astro.mjs');
const _page9 = () => import('./pages/admin/websettings.astro.mjs');
const _page10 = () => import('./pages/admin.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/illustrations.astro.mjs');
const _page13 = () => import('./pages/painting.astro.mjs');
const _page14 = () => import('./pages/photography.astro.mjs');
const _page15 = () => import('./pages/projects.astro.mjs');
const _page16 = () => import('./pages/shop.astro.mjs');
const _page17 = () => import('./pages/tradingcards.astro.mjs');
const _page18 = () => import('./pages/work.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/illustrations.astro", _page2],
    ["src/pages/admin/landing.astro", _page3],
    ["src/pages/admin/painting.astro", _page4],
    ["src/pages/admin/photography.astro", _page5],
    ["src/pages/admin/products.astro", _page6],
    ["src/pages/admin/projects.astro", _page7],
    ["src/pages/admin/tradingcards.astro", _page8],
    ["src/pages/admin/websettings.astro", _page9],
    ["src/pages/admin/index.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/illustrations.astro", _page12],
    ["src/pages/painting.astro", _page13],
    ["src/pages/photography.astro", _page14],
    ["src/pages/projects.astro", _page15],
    ["src/pages/shop.astro", _page16],
    ["src/pages/tradingcards.astro", _page17],
    ["src/pages/work.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "ac53b058-5866-47a0-9154-8203983739f8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
