import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, r as renderTemplate } from './astro/server_B7n8K_Lj.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { class: className, text, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`bg-primary text-black px-4 py-2 rounded-full block mx-auto transition-all hover:bg-transparent border border-transparent hover:border-primary hover:text-primary ${className}`, "class")}${spreadAttributes(props)}> ${text} </button>`;
}, "/home/michi/dev/vale/src/components/common/Button.astro", void 0);

export { $$Button as $ };
