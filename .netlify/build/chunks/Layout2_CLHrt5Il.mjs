import { f as createComponent, g as createAstro, i as addAttribute, n as renderHead, p as renderSlot, r as renderTemplate, m as maybeRenderHead, l as renderComponent } from './astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'react-toastify';
import { g as getData } from './crud_CbPv9Wg6.mjs';

const $$Astro$2 = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { Title = "Sprout Designs" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/src/styles/global.css"><link rel="icon" type="image/png" href="/logo.png"><title>${Title}</title>${renderHead()}</head> <body> <main class="sm:text-xl text-lg text-gray-600"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/layouts/MainLayout.astro", void 0);

const MobileNav = ({ insta, email, facebook }) => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-full items-center sm:hidden absolute z-30 top-8 px-8", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Logo", className: "h-10 w-10 rounded-full " }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("img", { src: "menu.png", onClick: () => setOpen(true), className: "w-[50px]" }),
      /* @__PURE__ */ jsx("nav", { className: `${open ? "flex " : "hidden"} flex-col text-left bg-zinc-800 fixed left-0 text-white h-screen w-full top-0 z-4 justify-between items-start font-semibold p-4`, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col self-center justify-center items-center w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-screen justify-between px-13 items-center gap-3", children: [
          /* @__PURE__ */ jsx("button", { onClick: close, className: "text-gray-500 text-5xl justify-between bg-transparent border-none", children: "X" }),
          /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Logo", className: "h-10 w-10 rounded-full" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 p-5 text-2xl text-center", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "font-semibold", children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "/work", className: "font-semibold", children: "Work" }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: "font-semibold", children: "About" }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: "font-semibold", children: "Contact" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 p-5 bg-zinc-100 absolute bottom-20 w-full justify-center", children: [
          /* @__PURE__ */ jsx("a", { target: "_blank", href: insta, children: /* @__PURE__ */ jsx("img", { src: "instagram-brands.svg", className: "w-6 h-6 mr-2" }) }),
          /* @__PURE__ */ jsx("a", { href: `mailto:${email}`, children: /* @__PURE__ */ jsx("img", { src: "envelope-solid.svg", className: "w-6 h-6 mr-2" }) }),
          /* @__PURE__ */ jsx("a", { target: "_blank", href: facebook, children: /* @__PURE__ */ jsx("img", { src: "facebook-brands.svg", className: "inline-block w-6 h-6 mr-2" }) })
        ] })
      ] }) })
    ] })
  ] });
};

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { api } = Astro2.locals;
  let details = await getData(api + "?model=websettings&getAll=true");
  details = details[0] || {
    instagram: "No Instagram information available.",
    email: "No email information available."
  };
  return renderTemplate`${maybeRenderHead()}<nav class="sm:flex hidden w-full h-[130px] top-0 z-4 justify-between items-center bg-none font-semibold text-white p-4"> <div class="flex items-center gap-3 pl-20"> <img src="/logo.png" alt="Logo" class="h-10 w-10 rounded-full"> </div> <div class="flex items-center gap-6 text-sm bg-white rounded-[40px] p-5"> <a href="/" class="text-zinc-700 font-semibold">Home</a> <a href="/work" class="text-zinc-700 font-semibold">Work</a> <a href="/about" class="text-zinc-700 font-semibold">About</a> <a href="/contact" class="text-zinc-700 font-semibold">Contact</a> </div> <div class="flex items-center gap-3 pr-20"> <a target="_blank"${addAttribute(details.instagram, "href")}><img src="instagram-brands.svg" class="inline-block w-6 h-6 mr-2"></a> <a${addAttribute(`mailto:${details.email}`, "href")}><img src="envelope-solid.svg" class="inline-block w-6 h-6 mr-2"></a> <a target="_blank"${addAttribute(details.facebook, "href")}><img src="facebook-brands.svg" class="inline-block w-6 h-6 mr-2"></a> </div> </nav> ${renderComponent($$result, "MobileNav", MobileNav, { "insta": details.instagram, "email": details.email, "facebook": details.facebook, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/MobileNav", "client:component-export": "default" })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com/", icon: "fa-facebook-f" },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "fa-linkedin-in" },
    { name: "Instagram", url: "https://instagram.com/", icon: "fa-instagram" }
  ];
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-zinc-900 text-white py-8"> <div class="max-w-4xl mx-auto flex flex-col items-center gap-6"> <!-- Social icons --> <div class="flex gap-6"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(link.name, "aria-label")} class="text-cyan-400 text-2xl hover:text-cyan-300 transition-colors"> <i${addAttribute(`fab ${link.icon}`, "class")}></i> </a>`)} </div> <!-- Primary nav --> <nav> <a href="/work" class="text-white font-medium border-b-2 border-cyan-400 pb-0.5 hover:text-cyan-300 transition-colors">
Projects
</a> </nav> <!-- Copyright --> <p class="text-sm text-gray-400">
&copy; ${year} Adam Portfolio. All rights reserved.
</p> </div> </footer>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout2;
  const { Title = "Sprout Designs" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen w-full overflow-hidden pt-30"> <!-- Gradient Background --> <div class="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 opacity-60 blur-3xl"></div> <!-- Content goes above --> <div class="relative z-2 text-center"> <main class=""> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </div> </section>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/layouts/Layout2.astro", void 0);

export { $$MainLayout as $, $$Layout2 as a };
