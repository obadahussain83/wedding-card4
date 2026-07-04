import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F8E7DB",
        "blush-dark": "#F2D9C9",
        gold: "#C9A227",
        "gold-dark": "#B8860B",
        ink: "#4A3A2A",
        rose: "#D98A80",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        arabic: ["var(--font-arabic)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
