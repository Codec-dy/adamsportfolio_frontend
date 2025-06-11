/* empty css                                 */
import { f as createComponent, g as createAstro, m as maybeRenderHead, i as addAttribute, r as renderTemplate, l as renderComponent } from '../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$Layout2 } from '../chunks/Layout2_CLHrt5Il.mjs';
import 'clsx';
import { $ as $$Title } from '../chunks/Title_CQ5W9w-z.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$MainWorkCatCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainWorkCatCard;
  const { title = "Main Work Category", description = "This card represents the main work category of the portfolio.", image = "", link = "/work-category", linkText = "View Work Category" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}><div${addAttribute(`background-image: url(${image});`, "style")} class="relative flex-1 bg-cover bg-center  mb-6 sm:h-[400px] w-full h-[280px] rounded-2xl overflow-hidden shadow-lg"> <div class="bg-white rounded-2xl p-3 w-fit mt-3 ml-4">${title}</div> </div></a>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/MainWorkCatCard.astro", void 0);

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col min-w-fit w-screen max-w-[1200px] justify-self-center gap-2 bg-white p-5 sm:p-20"> ${renderComponent($$result3, "Title", $$Title, { "title": "Portfolio Categories" })} <div class="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 "> <div class="flex flex-1 flex-col sm:mt-[100px]  sm:max-w-[500px] w-full"> ${renderComponent($$result3, "MainWorkCatCard", $$MainWorkCatCard, { "title": "Illustration", "description": "Building responsive and dynamic websites.", "image": "/image1.jpg", "link": "/illustrations" })} ${renderComponent($$result3, "MainWorkCatCard", $$MainWorkCatCard, { "title": "Photography", "description": "Building responsive and dynamic websites.", "image": "/image2.jpg", "link": "/photography" })} ${renderComponent($$result3, "MainWorkCatCard", $$MainWorkCatCard, { "title": "Trading Cards", "description": "Building responsive and dynamic websites.", "image": "/image1.jpg", "link": "/tradingcards" })} </div> <div class="flex flex-1 flex-col  max-w-[500px] w-full"> ${renderComponent($$result3, "MainWorkCatCard", $$MainWorkCatCard, { "title": "Projects", "description": "Building responsive and dynamic websites.", "image": "/image2.jpg", "link": "/projects" })} ${renderComponent($$result3, "MainWorkCatCard", $$MainWorkCatCard, { "title": "Shop", "description": "Building responsive and dynamic websites.", "image": "/image1.jpg", "link": "/shop" })} ${renderComponent($$result3, "MainWorkCatCard", $$MainWorkCatCard, { "title": "Painting", "description": "Building responsive and dynamic websites.", "image": "/image2.jpg", "link": "/painting" })} </div> </div> </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/work.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Work,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
