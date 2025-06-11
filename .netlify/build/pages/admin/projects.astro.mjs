/* empty css                                    */
import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$Layout2Admin } from '../../chunks/Layout2_admin_BECFtQJF.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BQLChIMf.mjs';
import { P as ProjectPopUp } from '../../chunks/ProjectPopUp_C-5e2iZC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2_admin", $$Layout2Admin, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex  flex-col p-6"> ${renderComponent($$result3, "ProjectPopUp", ProjectPopUp, { "title": "Projects", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/admin/ProjectPopUp", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/projects.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/projects.astro";
const $$url = "/admin/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
