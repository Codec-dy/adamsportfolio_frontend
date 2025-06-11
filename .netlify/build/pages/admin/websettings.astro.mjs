/* empty css                                    */
import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import { $ as $$Layout2Admin } from '../../chunks/Layout2_admin_BECFtQJF.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BQLChIMf.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import { g as getData, c as changeUser } from '../../chunks/crud_CbPv9Wg6.mjs';
import { B as Button } from '../../chunks/Button_DKRsxbTV.mjs';
export { renderers } from '../../renderers.mjs';

const WebSettings = () => {
  const api = "http://localhost:3000/api/";
  const [show, setShow] = React.useState(false);
  const [details, setDetails] = useState({ user: "", email: "", phone: "", instagram: "", facebook: "", background: "", education: "", skills: "" });
  useEffect(() => {
    const fetchWebSettings = async () => {
      const websettings = await getData(api + "collection?model=websettings&getAll=true");
      if (!websettings || websettings.length === 0) {
        console.error("No web settings found");
        return;
      }
      setDetails({ ...websettings[0], password: "" });
    };
    fetchWebSettings();
  }, []);
  const handleChange = (e) => {
    changeUser(`${api}adminChange`, admin);
  };
  const handleChange2 = (e) => {
    changeUser(`${api}adminChange`, details);
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white flex flex-col gap-3 shadow-md rounded-lg p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Web Settings" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 w-full p-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-left", children: "Change Admin Logins" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-1 sm:gap-4 items-baseline", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-sm font-bold mb-2", children: "username" }),
        /* @__PURE__ */ jsx("input", { type: "email", className: "border border-gray-300 rounded-md p-2 w-full", placeholder: "Enter new email", onChange: (e) => {
          setDetails({ ...details, user: e.target.value });
        }, value: details.user })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-1 sm:gap-4 items-baseline", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-sm font-bold mb-2", children: "password" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row border border-gray-300 rounded-md p-2 w-full", children: [
          /* @__PURE__ */ jsx("input", { className: "flex-1", type: show ? "text" : "password", placeholder: "Enter new email", onChange: (e) => {
            setDetails({ ...details, password: e.target.value });
          } }),
          /* @__PURE__ */ jsx("div", { className: "w-fit", children: /* @__PURE__ */ jsx("span", { className: "p-3 cursor-pointer", onClick: () => {
            setShow(!show);
          }, children: show ? "hide" : "show" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { text: "Change Admin Logins", perform: handleChange })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 w-full p-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-left", children: "Change Page Details" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 rounded-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 items-start gap-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Email" }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => setDetails({ ...details, email: e.target.value }), className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: "Email", type: "text", value: details.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex  flex-1 flex-col items-start gap-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Phone" }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => setDetails({ ...details, phone: e.target.value }), className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: "Phone", type: "text", value: details.phone })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 sm:flex-row gap-4 rounded-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 items-start gap-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Instagram" }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => setDetails({ ...details, instagram: e.target.value }), className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: "instagram", type: "text", value: details ? details.instagram : "" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-start gap-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Facebook link" }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => setDetails({ ...details, facebook: e.target.value }), className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: "facebook", type: "text", value: details ? details.facebook : "" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Background" }),
        /* @__PURE__ */ jsx("textarea", { onChange: (e) => setDetails({ ...details, background: e.target.value.trim() }), className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: "Background", rows: "4", value: details ? details.background : "" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Education" }),
        /* @__PURE__ */ jsx("textarea", { onChange: (e) => setDetails({ ...details, education: e.target.value.trim() }), className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: "Education", rows: "4", value: details ? details.education : "" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Skills" }),
        /* @__PURE__ */ jsx("textarea", { onChange: (e) => setDetails({ ...details, skills: e.target.value.trim() }), className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: "Skills", rows: "4", value: details ? details.skills : "" })
      ] }),
      /* @__PURE__ */ jsx(Button, { text: "Update", perform: handleChange2 })
    ] })
  ] });
};

const $$Websettings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2_admin", $$Layout2Admin, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-2 p-6"> ${renderComponent($$result3, "WebSettings", WebSettings, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/admin/WebSettings", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/websettings.astro", void 0);

const $$file = "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/pages/admin/websettings.astro";
const $$url = "/admin/websettings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Websettings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
