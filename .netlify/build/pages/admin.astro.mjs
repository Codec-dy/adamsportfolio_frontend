/* empty css                                 */
import { f as createComponent, g as createAstro, i as addAttribute, n as renderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$Layout2Admin } from '../chunks/Layout2_admin_BECFtQJF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/src/styles/global.css"><link rel="icon" type="image/png" href="/logo.png"><title>Admin Login</title>${renderHead()}</head> <body> ${renderComponent($$result, "Layout2_admin", $$Layout2Admin, {}, { "default": ($$result2) => renderTemplate` <div class="w-[400px] text-black font-semibold mt-[-200px]"> <div class="flex flex-col gap-4 p-4 w-full"> <h1 class="text-2xl font-semibold text-left">Admin Login</h1> <input placeholder="Username" type="text" class="w-full border border-gray-900 p-2"> <input placeholder="Password" type="password" class="w-full border border-gray-900 p-2"> <button>Login </button> </div> </div> ` })} </body>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
