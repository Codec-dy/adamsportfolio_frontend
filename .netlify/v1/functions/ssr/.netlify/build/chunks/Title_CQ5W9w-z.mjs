import { f as createComponent, g as createAstro, m as maybeRenderHead, i as addAttribute, r as renderTemplate } from './astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  const { title = "Title", size = "text-4xl" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-fit flex self-center py-2 items-center justify-center mb-5"> <div class="absolute title-border w-2/5 h-[2px] left-0 top-0"></div> <h1${addAttribute(`${size} font-bold text-center text-[#F28F38]`, "class")}>${title}</h1> <div class="absolute title-border w-2/5 h-[2px] left-0 bottom-0"></div> </div>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/components/Title.astro", void 0);

export { $$Title as $ };
