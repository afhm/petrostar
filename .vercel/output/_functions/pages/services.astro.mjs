/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CGPQV_2k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LFuOnswC.mjs';
import { $ as $$Header } from '../chunks/Header_DqklodL2.mjs';
import { a as $$Footer } from '../chunks/Footer_BYYkDBDn.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/afhm/alifsense/prod/petrostar/src/pages/services.astro", void 0);

const $$file = "/home/afhm/alifsense/prod/petrostar/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
