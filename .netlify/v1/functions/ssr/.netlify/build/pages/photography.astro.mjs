/* empty css                                 */
import { f as createComponent, g as createAstro, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$Layout2 } from '../chunks/Layout2_CLHrt5Il.mjs';
import { s as splitImages, $ as $$Rows } from '../chunks/Rows_CgvBeiiI.mjs';
import { $ as $$Title } from '../chunks/Title_CQ5W9w-z.mjs';
import { g as getData } from '../chunks/crud_CbPv9Wg6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Photography = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Photography;
  const { api } = Astro2.locals;
  const photography = await getData(api + "?model=photography&getAll=true");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div style="background:rgba(255,255,255,0.8)" class="flex flex-col max-w-[2000px] justify-self-center gap-2 w-screen py-20 px-5 sm:px-40"> ${renderComponent($$result3, "Title", $$Title, { "title": "Photography" })} ${splitImages(photography).map((arr, index) => renderTemplate`${renderComponent($$result3, "Rows", $$Rows, { "images": arr, "key": index })}`)} </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/photography.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/photography.astro";
const $$url = "/photography";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Photography,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
