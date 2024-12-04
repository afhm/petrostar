/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CGPQV_2k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LFuOnswC.mjs';
import { $ as $$Header } from '../chunks/Header_DqklodL2.mjs';
import { $ as $$ImageComp, a as $$Footer } from '../chunks/Footer_BYYkDBDn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    {
      image: "/src/images/slider/slide1.jpg",
      title: "We Build Your Dream",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error ducimus,"
    },
    {
      image: "/src/images/slider/slide2.jpg",
      title: "We Are Industry Factory Solution",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error ducimus,"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="wpo-hero-slider" data-astro-cid-bbe6dxrz> <div class="swiper-container" data-astro-cid-bbe6dxrz> <div class="swiper-wrapper" data-astro-cid-bbe6dxrz> ${slides.map((slide) => renderTemplate`<div class="swiper-slide" data-astro-cid-bbe6dxrz> <div class="slide-inner slide-bg-image"${addAttribute(slide.image, "data-background")} data-astro-cid-bbe6dxrz> <div class="container-fluid" data-astro-cid-bbe6dxrz> <div class="slide-content" data-astro-cid-bbe6dxrz> <div data-swiper-parallax="300" class="slide-title" data-astro-cid-bbe6dxrz> <h2 data-astro-cid-bbe6dxrz>${slide.title}</h2> </div> <div data-swiper-parallax="400" class="slide-text" data-astro-cid-bbe6dxrz> <p data-astro-cid-bbe6dxrz>${slide.text}</p> </div> <div class="clearfix" data-astro-cid-bbe6dxrz></div> <div data-swiper-parallax="500" class="slide-btns" data-astro-cid-bbe6dxrz> <a href="about.html" class="theme-btn" data-astro-cid-bbe6dxrz>
About Us
</a> </div> </div> </div> </div> </div>`)} </div> <!-- swiper controls --> <div class="swiper-pagination" data-astro-cid-bbe6dxrz></div> <div class="swiper-button-next" data-astro-cid-bbe6dxrz></div> <div class="swiper-button-prev" data-astro-cid-bbe6dxrz></div> </div> </section> <!-- start of wpo-feature-section --> <section class="wpo-feature-section" data-astro-cid-bbe6dxrz> <div class="wraper" data-astro-cid-bbe6dxrz> <div class="item" data-astro-cid-bbe6dxrz> <div class="icon" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/funfact1.svg", "className": "inline", "altText": "1", "data-astro-cid-bbe6dxrz": true })} </div> <div class="content" data-astro-cid-bbe6dxrz> <!-- <h2><span class="odometer" data-count="500">00</span>+</h2> --> <h3 data-astro-cid-bbe6dxrz>Accountability</h3> <span data-astro-cid-bbe6dxrz>We take responsibility for delivering as promised, adhering to a strict code of conduct.</span> </div> </div> <div class="item" data-astro-cid-bbe6dxrz> <div class="icon" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/funfact2.svg", "className": "inline", "altText": "2", "data-astro-cid-bbe6dxrz": true })} </div> <div class="content" data-astro-cid-bbe6dxrz> <!-- <h2><span class="odometer" data-count="300">00</span>+</h2> --> <h3 data-astro-cid-bbe6dxrz>Customer focused</h3> <span data-astro-cid-bbe6dxrz>Delivering tailored solutions with exceptional customer service & support.</span> </div> </div> <div class="item" data-astro-cid-bbe6dxrz> <div class="icon" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/funfact3.svg", "className": "inline", "altText": "3", "data-astro-cid-bbe6dxrz": true })} </div> <div class="content" data-astro-cid-bbe6dxrz> <!-- <h2><span class="odometer" data-count="226">00</span>+</h2> --> <h3 data-astro-cid-bbe6dxrz>Global Sourcing</h3> <span data-astro-cid-bbe6dxrz>Providing access to world-class suppliers and manufacturers.</span> </div> </div> <div class="item" data-astro-cid-bbe6dxrz> <div class="icon" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/funfact4.svg", "className": "inline", "altText": "4", "data-astro-cid-bbe6dxrz": true })} </div> <div class="content" data-astro-cid-bbe6dxrz> <!-- <h2><span class="odometer" data-count="25">00</span>+</h2> --> <h3 data-astro-cid-bbe6dxrz>Innovation Led</h3> <span data-astro-cid-bbe6dxrz>Driving industry forward with cutting-edge technology solutions.</span> </div> </div> </div> </section> `;
}, "/home/afhm/alifsense/prod/petrostar/src/components/Hero.astro", void 0);

const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- start of wpo-about-section -->${maybeRenderHead()}<section class="wpo-about-section section-padding"> <div class="container"> <div class="row align-items-center"> <div class="col-lg-6 col-12"> <div class="about-left-image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/about.png", "altText": "About 1" })} <div class="ab-2"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/ab-2.jpg", "altText": "About 2" })} </div> </div> </div> <div class="col-lg-6 col-12"> <div class="content"> <h2>About Company</h2> <h3>OUR REAL COMMITMENT REACHES BEYOND OIL & GAS.</h3> <p>
Our industry's business policy encompasses the strategies, guidelines, and practices that technology
            companies use to achieve their goals and objectives. The policies may vary depending on the company's size,
            market position, and competitive landscape. Commodo erat amet vitae consectetur consectetur feugiat.
</p> <p>
Our Capabilities lie in offering innovative, cost effective solutions in collaboration with world-renowned
            manufacturers. Our dedicated team of engineers ensures we stay ahead of the latest technological
            advancements to meet the needs of our clients effectively.
</p> </div> </div> </div> </div> </section>`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/AboutSection.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="wpo-service-section section-padding"> <div class="service-wrap"> <div class="wpo-section-title"> <h2>What We Offer</h2> <h3>Products & Services</h3> </div> <div class="service-slider owl-carousel"> <div class="item"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/services/s1.png", "altText": "Service 1" })} <span>01</span> <div class="line-one"></div> <div class="line-two"></div> </div> <div class="content"> <div class="icon"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/icon-1.svg", "altText": "Icon 1" })} </div> <h2><a href="service-single.html">Power &amp; Energy Sectors</a></h2> <p>Sagittis fringilla a scelerisque sitro consetetur nunc. Urna est eget pellentesque.</p> </div> </div> <div class="item"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/services/s2.png", "altText": "Service 2" })} <span>02</span> <div class="line-one"></div> <div class="line-two"></div> </div> <div class="content"> <div class="icon"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/icon-2.svg", "altText": "Icon 2" })} </div> <h2><a href="service-single.html">Architectures &amp; Design</a></h2> <p>Sagittis fringilla a scelerisque sitro consetetur nunc. Urna est eget pellentesque.</p> </div> </div> <div class="item"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/services/s3.png", "altText": "Service 3" })} <span>03</span> <div class="line-one"></div> <div class="line-two"></div> </div> <div class="content"> <div class="icon"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/icon-3.svg", "altText": "Icon 3" })} </div> <h2><a href="service-single.html">Explore Tiling &amp; Painiting</a></h2> <p>Sagittis fringilla a scelerisque sitro consetetur nunc. Urna est eget pellentesque.</p> </div> </div> <div class="item"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/services/s4.png", "altText": "Service 4" })} <span>04</span> <div class="line-one"></div> <div class="line-two"></div> </div> <div class="content"> <div class="icon"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/icon-4.svg", "altText": "Icon 4" })} </div> <h2><a href="service-single.html">Petroleum Production</a></h2> <p>Sagittis fringilla a scelerisque sitro consetetur nunc. Urna est eget pellentesque.</p> </div> </div> </div> </div> </section>`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/Services.astro", void 0);

const $$Industries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- start of wpo-project-section -->${maybeRenderHead()}<section class="wpo-project-section"> <div class="service-wrap px-32"> <div class="wpo-section-title text-center"> <h2 class="!text-[#ff5e14]">Supporting diverse industries</h2> <h3>Industries We Serve</h3> </div> </div> <div class="container-fluid"> <div class="project-slider owl-carousel"> <div class="project-card"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/industries/1_1.jpg", "altText": "Project 1" })} </div> <div class="content"> <h3><a href="project-single.html">Custom Fabrication</a></h3> <p>
Quis id at rhoncus consequat. Aliquam in. Velit phasellus augue tristique integer arcu. Elit sed vestibulum
            tristique suspendisse ut sit.
</p> </div> </div> <div class="project-card"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/industries/2_1.jpg", "altText": "Project 2" })} </div> <div class="content"> <h3><a href="project-single.html">Custom Fabrication</a></h3> <p>
Quis id at rhoncus consequat. Aliquam in. Velit phasellus augue tristique integer arcu. Elit sed vestibulum
            tristique suspendisse ut sit.
</p> </div> </div> <div class="project-card"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/industries/3_1.jpg", "altText": "Project 3" })} </div> <div class="content"> <h3><a href="project-single.html">Custom Fabrication</a></h3> <p>
Quis id at rhoncus consequat. Aliquam in. Velit phasellus augue tristique integer arcu. Elit sed vestibulum
            tristique suspendisse ut sit.
</p> </div> </div> <div class="project-card"> <div class="image"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/industries/4_1.jpg", "altText": "Project 4" })} </div> <div class="content"> <h3><a href="project-single.html">Custom Fabrication</a></h3> <p>
Quis id at rhoncus consequat. Aliquam in. Velit phasellus augue tristique integer arcu. Elit sed vestibulum
            tristique suspendisse ut sit.
</p> </div> </div> </div> </div> </section>`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/industries.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "AboutSection", $$AboutSection, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Industries", $$Industries, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/afhm/alifsense/prod/petrostar/src/pages/index.astro", void 0);

const $$file = "/home/afhm/alifsense/prod/petrostar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
