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
        primary: "#FF6A1A",
        secondary: "#749B3F",
        heading: "#212337",
        paragraph: "#4A4A52",
        backgroundGray: "#F4F6F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
