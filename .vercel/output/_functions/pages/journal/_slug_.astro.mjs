/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, e as renderSlot, r as renderTemplate, a as createAstro, d as renderComponent, b as addAttribute, f as renderTransition } from '../../chunks/astro/server_B7n8K_Lj.mjs';
import 'kleur/colors';
import { a as getEntry, g as getCollection } from '../../chunks/_astro_content_B6VswYXR.mjs';
import 'clsx';
import { $ as $$Layout } from '../../chunks/Layout_jMLSLjbq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Prose = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="prose prose-h1:font-bold prose-h1:text-xl mx-auto text-white
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
  prose-headings:underline"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/michi/dev/vale/src/components/common/Prose.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("news");
  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntry("diary", slug);
  const { Content } = await post.render();
  const transitionName = `post-img-${post.slug}`;
  const { title, heroImage } = post.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-10"> <div class="aspect-video max-w-3xl  mx-auto rounded-lg overflow-hidden shadow-2xl"> <img class="w-full h-full object-cover"${addAttribute(heroImage, "src")} alt="Hero Image"${addAttribute(renderTransition($$result2, "b2qblhtn", "", transitionName), "data-astro-transition-scope")}> </div> <div class="py-4 space-y-4 max-w-3xl mx-auto"> <!-- Make the date format like this: 01 Dec 2022 --> <!-- <p class="w-full block text-center font-bricolage text-gray-500 text-lg">
          {date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p> --> <h1 class="text-center text-4xl font-bold font-bricolage text-balance">${title}</h1> </div> ${renderComponent($$result2, "Prose", $$Prose, { "class": "border-t mx-auto py-8 border-gray-300 text-lg" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> ` })}`;
}, "/home/michi/dev/vale/src/pages/journal/[slug].astro", "self");

const $$file = "/home/michi/dev/vale/src/pages/journal/[slug].astro";
const $$url = "/journal/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
