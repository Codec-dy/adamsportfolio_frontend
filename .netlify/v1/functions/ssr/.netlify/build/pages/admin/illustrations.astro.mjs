/* empty css                                    */
import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$Layout2Admin } from '../../chunks/Layout2_admin_BECFtQJF.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BQLChIMf.mjs';
import { P as ProjectPopUp } from '../../chunks/ProjectPopUp_C-5e2iZC.mjs';
import { s as splitImages, $ as $$Rows } from '../../chunks/Rows_CgvBeiiI.mjs';
import { g as getData } from '../../chunks/crud_CbPv9Wg6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Illustrations = createComponent(async ($$result, $$props, $$slots) => {
  const api = "http://localhost:3000/api/collection";
  const illustration = await getData(api + "?model=illustration&getAll=true");
  console.log(illustration);
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2_admin", $$Layout2Admin, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col p-6 overflow-y-scroll"> ${renderComponent($$result3, "ProjectPopUp", ProjectPopUp, { "title": "Illustration", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/admin/ProjectPopUp", "client:component-export": "default" })} ${splitImages(illustration).map((arr, index) => renderTemplate`${renderComponent($$result3, "Rows", $$Rows, { "images": arr, "key": index, "isAdmin": "true" })}`)} </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/illustrations.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/illustrations.astro";
const $$url = "/admin/illustrations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Illustrations,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
