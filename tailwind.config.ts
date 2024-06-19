import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    // Personnaliser les valeurs de Tailwind qui étaient par defaut 

    colors: {
      white: '#ffffff',
      //violet
      primary : {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#7f81eB",
        DEFAULT: "#5F62E2",
        600: "#5658CB",
      },
      //vert
      secondary : {
        200: "#eaf8f4",
        300: "#bfe9de",
        400: "#56c4a7",
        DEFAULT: "#2AB691",
        600: "#26a482",
      },
      //gris
      gray : {
        300: "#fafafa",
        400: "#f2f2f2",
        500: "#e5e5e5",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },
      alert: {
        danger: "#FF4E4E",
        success: "#90dA1",
        warning: "#FEB72F",
      }
    },
    
    fontSize: {

        '8xl': ['120px', {
          lineHeight: '120px',
          letterSpacing: '-6px',
          fontWeight: '500',
        }],

        '7xl': ['72px', {
          lineHeight: '80px',
          letterSpacing: '-4.5px',
          fontWeight: '600',
        }],

        '6xl': ['55px', {
          lineHeight: '60px',
          letterSpacing: '-2.5px',
          fontWeight: '500',
        }],

        '5xl': ['48px', {
          lineHeight: '54px',
          letterSpacing: '-1.60px',
          fontWeight: '500',
        }],

        '4xl': ['36px', {
          lineHeight: '44px',
          letterSpacing: '-1.2px',
          fontWeight: '500',
        }],

        '3xl': ['28px', {
          lineHeight: '34px',
          letterSpacing: '-0.8px',
          fontWeight: '500',
        }],

        '2xl': ['24px', {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }],

        xl: ['24px', {
          lineHeight: '36px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }],

        lg: ['21px', {
          lineHeight: '30px',
          letterSpacing: '-0.80px',
          fontWeight: '400',
        }],

        base: ['17px', {
          lineHeight: '25px',
          letterSpacing: '-0.69px',
          fontWeight: '400',
        }],

        sm: ['15px', {
          lineHeight: '23px',
          letterSpacing: '-0.60px',
          fontWeight: '400',
        }],

        caption1: ['20px', {
          lineHeight: '24px',
          letterSpacing: '-0.60px',
          fontWeight: '400',
        }],

        caption2: ['18px', {
          lineHeight: '20px',
          letterSpacing: '-0.30px',
          fontWeight: '400',
        }],

        caption3: ['16px', {
          lineHeight: '18px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        }],

        caption4: ['13px', {
          lineHeight: '15px',
          letterSpacing: '-0.20px',
          fontWeight: '400',
        }],
    },

    borderRadius: {
      DEFAULT: "10px",
      full : "9999px",
    },

    extend: {},
  },
  plugins: [],
};
export default config;
