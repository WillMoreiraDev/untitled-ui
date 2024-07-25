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
        'gray-50': '#F9FAFB',
        'gray-100': '#F2F4F7',
        'gray-200': '#E4E7EC',
        'gray-300': '#D0D5DD',
        'gray-600': '#475467',
        'gray-700': '#344054',
        'gray-900': '#101828',
        'brand-50': '#F9F5FF',
        'brand-100': '#F4EBFF',
        'brand-600': '#7F56D9',
        'brand-700': '#6941C6'
      },
      maxWidth: {
        'container': '77.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
