import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00436E',
          50: '#E6F2F8',
          100: '#CCE5F1',
          200: '#99CBE3',
          300: '#66B1D5',
          400: '#3397C7',
          500: '#00436E',
          600: '#003558',
          700: '#002842',
          800: '#001B2C',
          900: '#000E16',
        },
        accent: {
          DEFAULT: '#68B04D',
          50: '#F0F8ED',
          100: '#E1F1DB',
          200: '#C3E3B7',
          300: '#A5D593',
          400: '#87C76F',
          500: '#68B04D',
          600: '#538D3E',
          700: '#3E6A2E',
          800: '#29471F',
          900: '#14240F',
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
