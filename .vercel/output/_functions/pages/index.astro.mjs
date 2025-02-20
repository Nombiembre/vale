/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B7n8K_Lj.mjs';
import 'kleur/colors';
import { $ as $$Typography } from '../chunks/Typography_B4Yzelzu.mjs';
import { $ as $$Layout } from '../chunks/Layout_jMLSLjbq.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> ${renderComponent($$result2, "Typography", $$Typography, { "as": "h1", "variant": "h1" }, { "default": ($$result3) => renderTemplate`Welcome Aboard, Voyager` })} <div class="space-y-5"> <p>
Toma asiento, abróchate el cinturón y prepárate para este viaje a través del tiempo y el espacio. Aquí, cada
        palabra es una señal enviada a través del cosmos, esperando encontrar su destino.
</p> <ul> <li>
🔹 En Echo Capsules, descubrirás memorias y pensamientos atrapados en el vacío, ecos que resuenan a través de
          las estrellas.
</li> <li>
🔹 En Transmission, encontrarás un mensaje enviado desde otro rincon del universo, una promesa, un pacto.
</li> <li>
🔹 En Signal Home, podrás enviar una señal a través del espacio a casa, cuando estés preparada para volver a estar juntos, para siempre.
</li> </ul> <p>No importa lo lejos que estés, siempre habrá una luz brillando en la oscuridad, guiándote de vuelta. Esta será la forma de comunicarme contigo para expresar mis emociones y lo mucho que te amo, aunque pasen los años, aunque cambies de numero, esta pagina siempre estará conectada a ti.</p> <p>🌠 Disfruta el viaje. Las estrellas te esperan.</p> </div> </main> ` })}`;
}, "/home/michi/dev/vale/src/pages/index.astro", void 0);

const $$file = "/home/michi/dev/vale/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
