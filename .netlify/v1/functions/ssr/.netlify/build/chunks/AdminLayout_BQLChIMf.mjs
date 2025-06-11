import { f as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate, g as createAstro, n as renderHead, l as renderComponent, p as renderSlot } from './astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 bg-gray-800 text-white p-4 h-screen w-1/4"> <h1 class="text-2xl font-semibold text-left">Admin Dashboard</h1> <div class="flex flex-col gap-4"> <a${addAttribute("/admin/projects", "href")} class="text-lg font-semibold">Projects</a> <a${addAttribute("/admin/products", "href")} class="text-lg font-semibold">Products</a> <a${addAttribute("/admin/photography", "href")} class="text-lg font-semibold">Photography</a> <a${addAttribute("/admin/illustrations", "href")} class="text-lg font-semibold">Illustrations</a> <a${addAttribute("/admin/tradingcards", "href")} class="text-lg font-semibold">Trading cards</a> <a${addAttribute("/admin/painting", "href")} class="text-lg font-semibold">Painting</a> <a${addAttribute("/admin/websettings", "href")} class="text-lg font-semibold">Website Settings</a> <div><a class="text-lg font-semibold">Logout</a></div> </div> </div>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/admin/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Sprout Design Dashboard" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/src/styles/global.css"><link rel="icon" type="image/png" href="/logo.png"><title>${title}</title>${renderHead()}</head> <body class="flex flex-row max-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="flex-grow overflow-y-auto"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
