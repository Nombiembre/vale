/* empty css                                 */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B7n8K_Lj.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_CUZqoMUQ.mjs';
import { $ as $$Typography } from '../chunks/Typography_B4Yzelzu.mjs';
import { $ as $$Layout } from '../chunks/Layout_jMLSLjbq.mjs';
export { renderers } from '../renderers.mjs';

const $$Signal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Signal Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> ${renderComponent($$result2, "Typography", $$Typography, { "as": "h1", "class": "mb-12", "variant": "h1" }, { "default": ($$result3) => renderTemplate`Bring Me Back to You` })} <form class="max-w-2xl mx-auto space-y-5"> <textarea name="message" id="message" rows="8" class="block min-w-full py-3 px-4 rounded-xl text-white bg-slate-800 outline-none focus-visible:outline-2 focus-visible:outline-primary" placeholder="Escribe aquí tu mensaje..."></textarea> ${renderComponent($$result2, "Button", $$Button, { "class": "min-w-full", "text": "Enviar Mensaje", "type": "submit" })} </form> </main> ` })} `;
}, "/home/michi/dev/vale/src/pages/signal.astro", void 0);

const $$file = "/home/michi/dev/vale/src/pages/signal.astro";
const $$url = "/signal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
