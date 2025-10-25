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
          DEFAULT: '#5A6E8C',
          50: '#F0F2F5',
          100: '#E1E6EB',
          200: '#C3CDD7',
          300: '#A5B4C3',
          400: '#879BAF',
          500: '#5A6E8C',
          600: '#485A73',
          700: '#36465A',
          800: '#243241',
          900: '#121E28',
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
