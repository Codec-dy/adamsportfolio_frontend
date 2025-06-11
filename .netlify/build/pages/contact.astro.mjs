/* empty css                                 */
import { f as createComponent, g as createAstro, l as renderComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from '../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$Layout2 } from '../chunks/Layout2_CLHrt5Il.mjs';
import { $ as $$Title } from '../chunks/Title_CQ5W9w-z.mjs';
import { g as getData } from '../chunks/crud_CbPv9Wg6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { api } = Astro2.locals;
  let details = await getData(api + "?model=websettings&getAll=true");
  details = details[0] || {
    instagram: "No Instagram information available.",
    email: "No email information available."
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-self-center p-5 gap-4 bg-white lg:p-20 w-screen max-w-[1200px] justify-center items-center"> ${renderComponent($$result3, "Title", $$Title, { "title": "Contact", "size": "text-5xl" })} <p class=" max-w-[720px]">
Have a question or want to work together? Feel free to reach out via the contact methods below.
</p> <div class="w-[720px] max-w-full h-[400px] flex"> <img src="/image2.jpg" alt="About Me" class="w-full h-full object-cover rounded-lg shadow-lg mt-4"> </div> <div class="flex flex-col max-w-[720px] w-full text-left gap-5 mt-5"> <div class="flex sm:flex-col lg:flex-row justify-start relative"> <a target="_blank"${addAttribute(details.instagram, "href")}><p class="text-xl text-[#F28F38] w-[720px] "> <img src="instagram-brands.svg" alt="Email Icon" class="inline-block w-6 h-6 mr-2">
Sprout and Art Designs </p></a> </div> <div class="flex sm:flex-col lg:flex-row justify-start relative"> <a${addAttribute(`mailto:${details.email}`, "href")}><p class="text-xl text-[#F28F38] w-[720px] "> <img src="envelope-solid.svg" alt="Email Icon" class="inline-block w-6 h-6 mr-2"> ${details.email} </p></a> </div> <div class="flex sm:flex-col lg:flex-row justify-start relative"> <p class="text-4xl font-semibold w-[720px] text-center ">Reach Out!</p> </div> </div> </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/contact.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
