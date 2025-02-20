import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, e as renderSlot } from './astro/server_B7n8K_Lj.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro();
const $$Typography = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Typography;
  const { as: Tag, class: className, variant, color, ...props } = Astro2.props;
  const variantClasses = {
    h1: "text-4xl md:text-7xl font-bold text-center mb-16",
    h2: "text-3xl md:text-5xl font-bold",
    h3: "text-xl md:text-3xl font-bold text-center",
    subtitle: "md:text-lg text-md font-semibold uppercase",
    p: "text-lg md:text-xl"
  };
  const colorClasses = {
    white: "text-white",
    black: "text-gray-900",
    primary: "text-accent",
    blue: "text-blue-500",
    neutral: "text-neutral-300"
  };
  const classes = [
    variantClasses[variant],
    colorClasses[color],
    className
  ];
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": classes, ...props, "tabindex": "0", "data-astro-cid-zg5eskfd": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/home/michi/dev/vale/src/components/common/Typography.astro", void 0);

export { $$Typography as $ };
