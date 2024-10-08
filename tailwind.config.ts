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
        'cool-orange-light': '#c96823',
        'cool-orange-darker': '#be3100',
        'cool-red': '#6f0b00',
        'bg-light-green': '#008584',
      },
    },
  },
  plugins: [],
};
export default config;
