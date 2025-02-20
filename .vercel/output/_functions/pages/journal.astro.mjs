/* empty css                                 */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B7n8K_Lj.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_B6VswYXR.mjs';
import { $ as $$Typography } from '../chunks/Typography_B4Yzelzu.mjs';
import { $ as $$Layout } from '../chunks/Layout_jMLSLjbq.mjs';
export { renderers } from '../renderers.mjs';

const $$Journal = createComponent(async ($$result, $$props, $$slots) => {
  const capsules = await getCollection("diary");
  console.log("\u{1F680} ~ file: journal.astro:7 ~ capsules:", capsules);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Diario" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> ${renderComponent($$result2, "Typography", $$Typography, { "as": "h1", "variant": "h1" }, { "default": ($$result3) => renderTemplate`Capsules of Echoes` })} <div class="max-w-xs border rounded-xl border-slate-400 overflow-hidden"> ${capsules.map((capsule) => renderTemplate`<a class="block cursor-pointer"${addAttribute(`/journal/${capsule.slug}`, "href")}> <div class="aspect-video"> <img${addAttribute(capsule.data.heroImage, "src")} alt="heroImage" class="w-full h-full object-cover"> </div> <div class="py-3"> ${renderComponent($$result2, "Typography", $$Typography, { "as": "h2", "variant": "h3" }, { "default": ($$result3) => renderTemplate`${capsule.data.title}` })} </div> </a>`)} </div> </main> ` })}`;
}, "/home/michi/dev/vale/src/pages/journal.astro", void 0);

const $$file = "/home/michi/dev/vale/src/pages/journal.astro";
const $$url = "/journal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Journal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
