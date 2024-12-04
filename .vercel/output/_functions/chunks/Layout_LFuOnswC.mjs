import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, s as spreadAttributes, u as unescapeHTML, e as renderSlot, a as renderComponent, f as renderHead } from './astro/server_CGPQV_2k.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { parse } from 'node-html-parser';

const $$TwSizeIndicator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${process.env.NODE_ENV === "development" && renderTemplate`${maybeRenderHead()}<div class="bg-gray-200 fixed left-0 top-0 z-50 flex w-[20px] md:w-[40px] items-center justify-center py-[2.5px] font16 uppercase text-black xs:bg-red-200 sm:bg-orange-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-violet-200 2lg:bg-blue-200 3lg:bg-indigo-200 2xl:bg-pink-200"><span class="block xs:hidden">base</span><span class="hidden xs:block sm:hidden">xs</span><span class="hidden sm:block md:hidden">sm</span><span class="hidden md:block lg:hidden">md</span><span class="hidden lg:block 2lg:hidden">lg</span><span class="hidden 2lg:block 3lg:hidden">2lg</span><span class="hidden 3lg:block hd:hidden">3lg</span><span class="hidden hd:block 2k:hidden">hd</span><span class="hidden 2k:block">2k</span></div>`}`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/TwSizeIndicator.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://petrostarinnovative.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const DEFAULT_TITLE = "Emdak Studios";
  const DEFAULT_DESCRIPTION = "Creative Infographics Redefined";
  const BASE_URL = "https://northernsky.in";
  const API_BASE_URL = "https://northernsky.auxcgen.com";
  const PROCESSED_META_TAGS = /* @__PURE__ */ new Set([
    "description",
    "og:title",
    "og:description",
    "og:image",
    "og:type",
    "og:site_name",
    "og:url",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image"
  ]);
  function getCanonicalUrl(pathname) {
    const url = new URL(pathname, BASE_URL);
    return url.href.endsWith("/") ? url.href.slice(0, -1) : url.href;
  }
  function getMetaContent(doc, property) {
    const selectors = [`meta[property="${property}"]`, `meta[name="${property}"]`];
    for (const selector of selectors) {
      const tag = doc.querySelector(selector);
      if (tag) {
        return tag.getAttribute("content") || "";
      }
    }
    return "";
  }
  function processJsonLd(content) {
    try {
      return JSON.stringify(JSON.parse(content).replace(new RegExp(API_BASE_URL, "g"), BASE_URL));
    } catch {
      return null;
    }
  }
  function createMetaProps(tag) {
    return Object.fromEntries(Object.entries(tag.attributes).filter(([_, value]) => value));
  }
  async function getSeoData(url) {
    try {
      const apiUrl = `${API_BASE_URL}/wp-json/rankmath/v1/getHead?url=${url.replace(BASE_URL, API_BASE_URL)}`;
      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/json"
        }
      });
      if (!response.ok) throw new Error("API fetch failed");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("SEO data fetch error:", error);
      return {
        head: `
        <title>${DEFAULT_TITLE}</title>
        <meta name="description" content="${DEFAULT_DESCRIPTION}">
      `
      };
    }
  }
  const canonicalUrl = getCanonicalUrl(Astro2.url.pathname);
  const seoData = await getSeoData(canonicalUrl);
  const headContent = parse(seoData.head);
  const title = getMetaContent(headContent, "og:title") || headContent.querySelector("title")?.text || DEFAULT_TITLE;
  const description = getMetaContent(headContent, "description") || getMetaContent(headContent, "og:description") || DEFAULT_DESCRIPTION;
  const ogImage = getMetaContent(headContent, "og:image");
  const ogType = getMetaContent(headContent, "og:type") || "website";
  const ogSiteName = getMetaContent(headContent, "og:site_name") || DEFAULT_TITLE;
  const twitterCard = getMetaContent(headContent, "twitter:card") || "summary_large_image";
  const jsonLdScript = headContent.querySelector('script[type="application/ld+json"]');
  const processedJsonLd = jsonLdScript ? processJsonLd(jsonLdScript.textContent) : null;
  const additionalMetaTags = headContent.querySelectorAll("meta").filter((tag) => {
    const identifier = tag.getAttribute("name") || tag.getAttribute("property");
    return identifier && !PROCESSED_META_TAGS.has(identifier);
  }).map((tag) => createMetaProps(tag));
  return renderTemplate`<!-- Primary Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph Meta Tags --><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}<meta property="og:site_name"${addAttribute(ogSiteName, "content")}><meta property="og:locale" content="en_US"><!-- Twitter Meta Tags --><meta name="twitter:card"${addAttribute(twitterCard, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${ogImage && renderTemplate`<meta name="twitter:image"${addAttribute(ogImage, "content")}>`}<!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Additional Meta Tags -->${additionalMetaTags.map((props) => renderTemplate`<meta${spreadAttributes(props)}>`)}<!-- JSON-LD -->${processedJsonLd && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(processedJsonLd))}`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://petrostarinnovative.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  new URL(Astro2.request.url).pathname.slice(1);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover">', "<!-- /* custom fonts */ --><!-- <AstroFont\n      config={[\n        {\n          src: [\n            {\n              path: '/fonts/Gilroy-Regular.woff2',\n              weight: '400',\n              style: 'normal',\n            },\n            {\n              path: '/fonts/Gilroy-Medium.woff2',\n              weight: '500',\n              style: 'normal',\n            },\n            {\n              path: '/fonts/Gilroy-SemiBold.woff2',\n              weight: '600',\n              style: 'normal',\n            },\n          ],\n          name: 'Gilroy',\n          preload: true,\n          display: 'swap',\n          selector: 'body',\n          fallback: 'sans-serif',\n        },\n        {\n          src: [\n            {\n              path: '/fonts/PlayfairDisplay.woff2',\n              weight: '700',\n              style: 'normal',\n            },\n            {\n              path: '/fonts/PlayfairDisplayitalic.woff2',\n              weight: '600',\n              style: 'italic',\n            },\n          ],\n          name: 'Playfair Display',\n          preload: true,\n          display: 'swap',\n          selector: '.font-playfair, .font-playfair-italic',\n          fallback: 'serif',\n        },\n      ]}\n    /> -->", '</head> <body class="antialiased"> ', ' <div class="page-wrapper"> ', ' </div> <script src="/js/jquery.min.js"><\/script> <script src="/js/bootstrap.bundle.min.js"><\/script> <!-- Plugins for this template --> <script src="/js/modernizr.custom.js"><\/script> <script src="/js/jquery-plugin-collection.js"><\/script> <!-- Custom script for this template --> <script src="/js/script.js"><\/script> </body> </html>'])), renderComponent($$result, "SEO", $$SEO, {}), renderHead(), renderComponent($$result, "TwSizeIndicator", $$TwSizeIndicator, {}), renderSlot($$result, $$slots["default"]));
}, "/home/afhm/alifsense/prod/petrostar/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
