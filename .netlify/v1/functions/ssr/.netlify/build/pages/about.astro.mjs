/* empty css                                 */
import { f as createComponent, g as createAstro, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$Layout2 } from '../chunks/Layout2_CLHrt5Il.mjs';
import { $ as $$Title } from '../chunks/Title_CQ5W9w-z.mjs';
import { g as getData } from '../chunks/crud_CbPv9Wg6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { api } = Astro2.locals;
  let details = await getData(api + "?model=websettings&getAll=true");
  details = details[0] || {
    background: "No background information available.",
    educataion: "No education information available.",
    skills: "No skills information available."
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-self-center gap-4 bg-white p-5 lg:p-20 w-screen max-w-[1200px] justify-center items-center"> ${renderComponent($$result3, "Title", $$Title, { "title": "About", "size": "text-5xl" })} <p class=" text-gray-700 max-w-[720px]">
Thank you for stopping by! Read below to learn more about myself and background.
</p> <div class="w-[720px] max-w-full h-[400px] flex"> <img src="/image1.jpg" alt="About Me" class="w-full h-full object-cover rounded-lg shadow-lg mt-4"> </div> <div class="flex flex-col max-w-[720px] w-full text-left gap-10"> <div class="mt-10 flex flex-col lg:flex-row justify-start relative"> <h2 class="w-[300px] text-left text-3xl font-bold text-gray-800  lg:absolute lg:left-[-180px]">Background</h2> <p class=" max-w-[720px]">${details.background}</p> </div> <div class="flex flex-col lg:flex-row justify-start relative"> <h2 class="w-[300px] text-3xl font-bold text-gray-800  lg:absolute lg:left-[-180px]">Education</h2> <p class=" max-w-[720px] ">${details.education}</p> </div> <div class="flex flex-col lg:flex-row justify-start relative"> <h2 class="w-[300px] text-3xl font-bold text-gray-800  lg:absolute lg:left-[-180px]">Skills</h2> <p class=" max-w-[720px] ">${details.skills}</p> </div> </div> </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/about.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
