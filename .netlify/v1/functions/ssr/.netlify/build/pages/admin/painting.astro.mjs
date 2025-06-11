/* empty css                                    */
import { f as createComponent, g as createAstro, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$Layout2Admin } from '../../chunks/Layout2_admin_BECFtQJF.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BQLChIMf.mjs';
import { P as ProjectPopUp } from '../../chunks/ProjectPopUp_C-5e2iZC.mjs';
import { s as splitImages, $ as $$Rows } from '../../chunks/Rows_CgvBeiiI.mjs';
import { g as getData } from '../../chunks/crud_CbPv9Wg6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Painting = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Painting;
  const { api } = Astro2.locals;
  const painting = await getData(api + "?model=painting&getAll=true");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2_admin", $$Layout2Admin, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex  flex-col gap-2 p-6"> ${renderComponent($$result3, "ProjectPopUp", ProjectPopUp, { "title": "Painting", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/admin/ProjectPopUp", "client:component-export": "default" })} ${splitImages(painting).map((arr, index) => renderTemplate`${renderComponent($$result3, "Rows", $$Rows, { "images": arr, "key": index, "isAdmin": "true" })}`)} </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/painting.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/painting.astro";
const $$url = "/admin/painting";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Painting,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
