import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const Button = ({ text, perform }) => {
  const [click, setClick] = useState(false);
  return /* @__PURE__ */ jsx("button", { onMouseUp: () => setTimeout(() => {
    setClick(false);
  }, 200), onMouseDown: () => setClick(true), onClick: () => {
    perform ? perform() : "";
  }, className: `  cursor-pointer ${click ? "translate-y-[-4px]" : ""} bg-gray-900 max-w-fit py-2 px-10 text-gray-100 hover:bg-white hover:text-black hover:border transition-all duration-[500ms]`, children: text });
};

export { Button as B };
