/* empty css                                 */
import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$Layout2 } from '../chunks/Layout2_CLHrt5Il.mjs';
import { s as splitImages, $ as $$Rows } from '../chunks/Rows_CgvBeiiI.mjs';
import { $ as $$Title } from '../chunks/Title_CQ5W9w-z.mjs';
export { renderers } from '../renderers.mjs';

const $$Shop = createComponent(($$result, $$props, $$slots) => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-2 w-screen py-20 px-40"> ${renderComponent($$result3, "Title", $$Title, { "title": "Shop" })} ${splitImages(images).map((arr, index) => renderTemplate`${renderComponent($$result3, "Rows", $$Rows, { "images": arr, "key": index })}`)} </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/shop.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Shop,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
