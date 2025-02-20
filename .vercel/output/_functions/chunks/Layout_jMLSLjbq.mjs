import { c as createComponent, a as createAstro, b as addAttribute, r as renderTemplate, d as renderComponent, k as renderHead, m as maybeRenderHead, e as renderSlot, f as renderTransition } from './astro/server_B7n8K_Lj.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/michi/dev/vale/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { title } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><!-- View Transitions -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head>`;
}, "/home/michi/dev/vale/src/components/common/Head.astro", void 0);

const NAVIGATION = [
  { name: "Home", href: "/" },
  {
    name: "Capsules of Echoes",
    href: "/journal"
  },
  {
    name: "Transmission",
    href: "/transmission"
  },
  {
    name: "Signal Home",
    href: "/signal"
  }
];

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mt-5 mb-7 md:mb-10"> <nav class="bg-zinc-800 rounded-full overflow-hidden max-w-fit mx-auto"> <ul class="flex items-center "> ${NAVIGATION.map(({ name, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="transition-all block text-center hover:text-black md:text-base text-[13px] hover:bg-primary md:px-4 py-1 px-2 rounded-full"> ${name} </a> </li>`)} </ul> </nav> </header>`;
}, "/home/michi/dev/vale/src/components/common/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { "title": title })}${maybeRenderHead()}<body class="text-white bg-black relative"> <div class="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_120%_at_50%_0%,#000_40%,#18276b_100%)]"></div> ${renderComponent($$result, "Header", $$Header, {})} <div${addAttribute(renderTransition($$result, "pu257pps", "slide", ""), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </div>  </body></html>`;
}, "/home/michi/dev/vale/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
