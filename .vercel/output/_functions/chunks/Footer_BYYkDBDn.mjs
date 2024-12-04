import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_CGPQV_2k.mjs';
import 'kleur/colors';
import { $ as $$Picture, a as $$Image } from './_astro_assets__nmMK_jE.mjs';

const $$Astro = createAstro("https://petrostarinnovative.com");
const $$ImageComp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageComp;
  const {
    imagePath,
    altText = "default alt text",
    className,
    width,
    height,
    loadingType = "lazy",
    fetchpriority = "auto",
    usePicture = false
  } = Astro2.props;
  function isValidURL(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
  const images = /* #__PURE__ */ Object.assign({"/src/images/Petrostar-Colour-Logo.png": () => import('./Petrostar-Colour-Logo_CUyQUN8V.mjs'),"/src/images/ab-2.jpg": () => import('./ab-2_DOFihbsz.mjs'),"/src/images/about.png": () => import('./about_Cluyzx7K.mjs'),"/src/images/funfact1.svg": () => import('./funfact1_CouLt1Y7.mjs'),"/src/images/funfact2.svg": () => import('./funfact2_Bygh9YsP.mjs'),"/src/images/funfact3.svg": () => import('./funfact3_DcduBF23.mjs'),"/src/images/funfact4.svg": () => import('./funfact4_ChP1Hpcm.mjs'),"/src/images/icon-1.svg": () => import('./icon-1_CD7Sg1g4.mjs'),"/src/images/icon-2.svg": () => import('./icon-2_CXbMP_E3.mjs'),"/src/images/icon-3.svg": () => import('./icon-3_BlrdZ2NN.mjs'),"/src/images/icon-4.svg": () => import('./icon-4_cg1Cb1Uf.mjs'),"/src/images/industries/1_1.jpg": () => import('./1_1_82q8F04v.mjs'),"/src/images/industries/2_1.jpg": () => import('./2_1_BZpWgs6F.mjs'),"/src/images/industries/3_1.jpg": () => import('./3_1_DGnpMSpg.mjs'),"/src/images/industries/4_1.jpg": () => import('./4_1_CigLC4zB.mjs'),"/src/images/page-header-contact.png": () => import('./page-header-contact_BDgFTUlE.mjs'),"/src/images/services/s1.png": () => import('./s1_c6RTIJL3.mjs'),"/src/images/services/s2.png": () => import('./s2_Bx6jlCoT.mjs'),"/src/images/services/s3.png": () => import('./s3_DXh_FAZM.mjs'),"/src/images/services/s4.png": () => import('./s4_B2kvYCRX.mjs'),"/src/images/services/s5.png": () => import('./s5_Cgrjv_pG.mjs'),"/src/images/slider/slide1.jpg": () => import('./slide1_CnMOOolV.mjs'),"/src/images/slider/slide2.jpg": () => import('./slide2_2bODluBI.mjs')});
  let imageSource;
  if (typeof imagePath === "string" && isValidURL(imagePath)) {
    imageSource = imagePath;
  } else if (typeof imagePath === "string") {
    if (!images[imagePath]) {
      throw new Error(`"${imagePath}" does not exist in glob: "src/images/**/*.{svg,jpeg,jpg,png,gif}"`);
    }
    imageSource = images[imagePath]();
  } else {
    imageSource = imagePath;
  }
  const commonProps = {
    src: imageSource,
    alt: altText,
    class: className,
    width,
    height,
    loading: loadingType,
    fetchpriority
  };
  const imageWidths = [240, 540, 768];
  const sizes = `(max-width: 360px) 240px,
               (max-width: 540px) 540px,
               (max-width: 1024px) 768px,
               1920px`;
  return renderTemplate`${usePicture ? renderTemplate`${renderComponent($$result, "Picture", $$Picture, { ...commonProps, "widths": imageWidths, "sizes": sizes, "formats": ["avif"] })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "inferSize": true, "format": "avif", ...commonProps })}`}`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/ImageComp.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- start of wpo-site-footer-section -->${maybeRenderHead()}<footer class="wpo-site-footer"> <div class="wpo-upper-footer"> <div class="container"> <div class="row"> <div class="col col-lg-3 col-md-6 col-sm-12 col-12"> <div class="widget about-widget"> <div class="logo widget-title"> ${renderComponent($$result, "ImageComp", $$ImageComp, { "imagePath": "/src/images/Petrostar-Colour-Logo.png", "className": "inline", "altText": "Logo" })} </div> <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt iure blanditiis labore tempora
              inventore laborum error molestias,
</p> <div class="social-widget"> <ul> <li><a href="#"><i class="ti-facebook"></i></a></li> <li><a href="#"><i class="ti-twitter-alt"></i></a></li> <li><a href="#"><i class="ti-instagram"></i></a></li> <li><a href="#"><i class="ti-linkedin"></i></a></li> </ul> </div> </div> </div> <div class="col col-lg-3 col-md-6 col-sm-12 col-12"> <div class="widget link-widget"> <div class="widget-title"> <h3>Our Services</h3> </div> <ul> <li><a href="service-single.html">Power &amp; Energy Sectors</a></li> <li><a href="service-single.html">Architectures &amp; Design</a></li> <li><a href="service-single.html">Explore Tiling &amp; Painiting</a></li> <li><a href="service-single.html">Petroleum Production</a></li> <li><a href="service-single.html">chemical engineering</a></li> </ul> </div> </div> <div class="col col-lg-3 col-md-6 col-sm-12 col-12"> <div class="widget link-widget"> <div class="widget-title"> <h3>Navigation</h3> </div> <ul> <li><a href="index">Home</a></li> <li><a href="contact">Contact</a></li> <li><a href="services">Services</a></li> </ul> </div> </div> <div class="col col-lg-3 col-md-6 col-sm-12 col-12"> <div class="widget newsletter-widget"> <div class="widget-title"> <h3>Newsletter</h3> </div> <p>Get latest updates and offers</p> <div class="email-from"> <input class="fild" type="text" placeholder="Your email"> <button type="reset"><i class="ti-arrow-top-right"></i></button> </div> </div> </div> </div> </div> <!-- end container --> </div> <div class="wpo-lower-footer"> <div class="container"> <div class="row"> <div class="col col-xs-12"> <p class="copyright">Copyright © 2024 sailo by <a href="index.html">wpOceans</a>. All Rights Reserved.</p> </div> </div> </div> </div> </footer>`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/Footer.astro", void 0);

export { $$ImageComp as $, $$Footer as a };
