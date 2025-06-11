import { f as createComponent, g as createAstro, m as maybeRenderHead, i as addAttribute, l as renderComponent, r as renderTemplate } from './astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { B as Button } from './Button_DKRsxbTV.mjs';
import { b as handleDelete } from './crud_CbPv9Wg6.mjs';

const splitImages = (images) => {
    const result = [];
    let count = 0;
    let index = 0;
    while (count < images.length) {
        let addition = 3;
        if(index%2!==0){
            addition = 4;
        }
        const row = images.slice(count, count + addition);
        result.push(row);
        count += addition;
        index++;
    }
    return result;
};

const AdminDelete = ({ id, model }) => {
  const api = "http://localhost:3000/api/collection";
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4", children: /* @__PURE__ */ jsx("div", { onClick: () => {
    handleDelete(api, id, model);
  }, children: /* @__PURE__ */ jsx(Button, { text: "Delete" }) }) });
};

const $$Astro = createAstro();
const $$Rows = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rows;
  const { images, isAdmin = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-2 w-full"> ${images.map((image, index) => renderTemplate`<div${addAttribute(`flex-1 max-h-[500px] relative w-[130px] overflow-hidden group`, "class")}> <img${addAttribute(image.img, "src")}${addAttribute(`Image ${index + 1}`, "alt")} class="w-full object-cover h-full rounded-lg shadow-md transition-all hover:scale-110 duration-300 hover:brightness-75"> ${isAdmin && renderTemplate`<div class="absolute bottom-1 right-1 z-5 opacity-0 group-hover:opacity-100 transition-all duration-300">${renderComponent($$result, "AdminDelete", AdminDelete, { "id": image._id, "model": image.type || "photography", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/admin/AdminDelete", "client:component-export": "default" })}</div>`} </div>`)} </div>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/Rows.astro", void 0);

export { $$Rows as $, splitImages as s };
