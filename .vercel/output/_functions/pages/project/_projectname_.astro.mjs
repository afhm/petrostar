/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_CGPQV_2k.mjs';
import 'kleur/colors';
import { a as $$Footer } from '../../chunks/Footer_BYYkDBDn.mjs';
import { $ as $$Layout } from '../../chunks/Layout_LFuOnswC.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://petrostarinnovative.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let projectName = Astro2.params.projectname;
  const response = await fetch(`https://northernsky.auxcgen.com/wp-json/wp/v2/project?slug=${projectName}`);
  const [projectData] = await response.json();
  const {
    title,
    meta_box: { location, apartment_types, project_size, completion_date, project_area, project_banner }
  } = projectData || {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "data-astro-cid-qjphkqe2": true })}${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-qjphkqe2": true })}`;
}, "/home/afhm/alifsense/prod/petrostar/src/pages/project/[projectname]/index.astro", void 0);

const $$file = "/home/afhm/alifsense/prod/petrostar/src/pages/project/[projectname]/index.astro";
const $$url = "/project/[projectname]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
