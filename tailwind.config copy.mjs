import { custom } from 'astro/zod';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '414px',
        md: '768px',
        lg: '1024px',
        '2lg': '1365px',
        '3lg': '1440px',
        hd: '1920px',
        '2k': '2048px',
      },
      colors: {
        black: '#000000',
        lightgray: '#6F6F6F',
        lightblack: '#171717',
        gray: '#696969',
        grey: '#515151',
        darkgray: '#222222',
        brown: '#AE9364',
        darkbrown: '#786546',
        bordergray: '#DFDFDF',
        darkColor: '#053451',
        lightDakColor: '#0E3B57',
        mediumColor: '#D1DFE9',
        lightColor: '#EAEFF3',
      },
      boxShadow: {
        custom: '0px 2px 20px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  // plugins: [
  //   function ({ addUtilities, theme }) {
  //     const newUtilities = {
  //       '.font-minion': {
  //         fontFamily: theme('fontFamily.serif'),
  //       },
  //       '.font-proxima': {
  //         fontFamily: theme('fontFamily.sans'),
  //       },
  //       '.font-museo': { // Added utility for Museo font
  //         fontFamily: theme('fontFamily.museo'),
  //       },
  //     };
  //     addUtilities(newUtilities, ['responsive', 'hover']);
  //   },
  // ],
  corePlugins: {
    visibility: false,
  },
};
