import { f as createComponent, g as createAstro, m as maybeRenderHead, p as renderSlot, r as renderTemplate } from './astro/server_l5FaKg2C.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Layout2Admin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout2Admin;
  const { Title = "Sprout Designs" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen w-full overflow-hidden pt-30"> <!-- Gradient Background --> <div class="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 opacity-60 blur-3xl"></div> <!-- Content goes above --> <div class="relative z-2 text-center"> <main class=""> ${renderSlot($$result, $$slots["default"])} </main> </div> </section>`;
}, "C:/Users/CodecD/Desktop/Website Projects/Adam_Portfolio/frontend/src/layouts/Layout2_admin.astro", void 0);

export { $$Layout2Admin as $ };
