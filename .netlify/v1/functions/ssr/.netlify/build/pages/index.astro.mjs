/* empty css                                 */
import { f as createComponent, m as maybeRenderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$Layout2 } from '../chunks/Layout2_CLHrt5Il.mjs';
import { B as Button } from '../chunks/Button_DKRsxbTV.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div style="background: url(bg4.jpg) no-repeat center center / cover; " class="flex flex-row h-screen p-10 justify-center items-center max-w-[1500px] brightness-90"> <div class="flex flex-1 flex-col items-start gap-10 sm:p-20"> <h1 class="font-semibold text-4xl sm:text-7xl text-black text-left">Welcome to my Portfolio</h1> <p class="text-left text-black sm:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, corrupti! Dignissimos illum quisquam fuga unde officiis eveniet non? Neque odit optio nemo explicabo fugiat in placeat ut maxime quibusdam sequi. </p> <a href="work">${renderComponent($$result, "Button", Button, { "text": "Projects", "perform": () => "" })}</a> </div> <div class="flex-1 h-full sm:block hidden" style="background: url(bg2.jpeg) no-repeat center center / cover;"></div> </div>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center"> ${renderComponent($$result3, "Hero", $$Hero, {})} </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$Index,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
