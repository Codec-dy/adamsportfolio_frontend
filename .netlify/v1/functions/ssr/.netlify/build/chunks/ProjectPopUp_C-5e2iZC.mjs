import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { B as Button } from './Button_DKRsxbTV.mjs';
import { h as handleFileChange, a as handleAdd } from './crud_CbPv9Wg6.mjs';

const AddComponent = ({ type, title, cancel }) => {
  function addType(type2) {
    switch (type2) {
      case "project":
        return { "date": "", "techUsed": "", title: "", description: "", category: "", link: "", img: "", status: "" };
      case "design":
        return { "date": "", "type": "", img: "" };
      case "skills":
        return { description: "" };
      case "experience":
        return { title: "", company: "", location: "", date: "", summary: "" };
    }
  }
  const [add, setAdd] = useState(addType(type));
  const [secType, setSecType] = useState("");
  const api = "http://localhost:3000/api/collection";
  const [preview, setPreview] = useState("");
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-4 border border-gray-300 rounded-md", children: [
    /* @__PURE__ */ jsx("h1", { children: title }),
    Object.keys(add).slice().map((key, i) => {
      return /* @__PURE__ */ jsxs("div", { children: [
        " ",
        key != "type" && /* @__PURE__ */ jsx("input", { className: "w-full p-3 rounded-sm border border-gray-400 flex-1", placeholder: key, onChange: async (e) => {
          setAdd({ ...add, [key]: key == "img" ? await handleFileChange(e.target.files[0], setPreview) : e.target.value });
        }, type: key == "img" ? "file" : key == "date" ? "date" : "text", value: key == "img" ? "" : add[key] }),
        key == "type" && /* @__PURE__ */ jsxs("select", { className: "w-full p-3 rounded-sm border border-gray-400 flex-1", onChange: (e) => {
          setSecType(e.target.value);
          setAdd({ ...add, [key]: e.target.value });
        }, value: add[key], children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Select Type" }),
          /* @__PURE__ */ jsx("option", { value: "photography", children: "Photography" }),
          /* @__PURE__ */ jsx("option", { value: "illustration", children: "Illustration" }),
          /* @__PURE__ */ jsx("option", { value: "painting", children: "Painting" }),
          /* @__PURE__ */ jsx("option", { value: "tradingcards", children: "Trading Cards" })
        ] }, i)
      ] }, i);
    }),
    preview && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("img", { src: preview, alt: "Preview", className: "w-40 h-40 object-cover rounded" }) }),
    /* @__PURE__ */ jsx("div", { onClick: () => {
      handleAdd(`${api}?model=${type == "design" ? secType : "type"}`, add), cancel(false);
    }, children: /* @__PURE__ */ jsx(Button, { text: "Add to Collection" }) }),
    " ",
    /* @__PURE__ */ jsxs("span", { onClick: () => {
      cancel(false);
    }, children: [
      /* @__PURE__ */ jsx(Button, { text: "Cancel" }),
      " "
    ] })
  ] });
};

const ProjectPopUp = ({ title }) => {
  const [addProject, setAddProject] = useState(false);
  const [addDesign, setAddDesign] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex relative ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-left", children: title }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { text: "Add a Project", perform: () => {
        setAddProject(true);
      }, "client:idle": true }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { text: "Add a Design", perform: () => {
        setAddDesign(true);
      }, "client:idle": true }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `${addProject ? "fixed block" : "hidden"} w-[90%] max-w-[600px] top-0 absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`, children: /* @__PURE__ */ jsx(AddComponent, { type: "project", title: "Add project", cancel: setAddProject }) }),
    /* @__PURE__ */ jsx("div", { className: `${addDesign ? "fixed block" : "hidden"} w-[90%] max-w-[600px] top-0 absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`, children: /* @__PURE__ */ jsx(AddComponent, { type: "design", title: "Add Graphic Design", cancel: setAddDesign }) })
  ] });
};

export { ProjectPopUp as P };
