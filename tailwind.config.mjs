import { custom } from 'astro/zod';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '350px',
        sm: '414px',
        md: '768px',
        lg: '1024px',
        '2lg': '1365px',
        '3lg': '1440px',
        hd: '1920px',
        '2k': '2048px',
      },
      fontFamily: {
        sans: ['"Proxima Nova"'],
        serif: ['"Minion Pro"'],
        museo: ['"Museo"'], // Added Museo font
        playfair: ['"Playfair Display"', 'serif'],
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
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.font-gilroy': {
          // Added utility for Museo font
          fontFamily: theme('fontFamily.gilroy'),
        },
        '.font-playfair': {
          // Added utility
          fontFamily: theme('fontFamily.playfair'),
        },
        '.font-playfair-italic': {
          // Added utility for italic
          fontFamily: theme('fontFamily.playfair-italic'),
          fontStyle: 'italic',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.italic-10': {
          fontStyle: 'italic',
          transform: `skew(${theme('textSlant.10')})`,
        },
        '.italic-20': {
          fontStyle: 'italic',
          transform: `skew(${theme('textSlant.20')})`,
        },
        '.italic-30': {
          fontStyle: 'italic',
          transform: `skew(${theme('textSlant.30')})`,
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  corePlugins: {
    visibility: false,
  },
};
