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
        accent: "#C75D3D",
        cream: "#F5EFE6",
        ink: "#1A1612",
      },
      fontFamily: {
        display: ["Futura", "Futura PT", "var(--font-jost)", "sans-serif"],
        mono: ["Futura", "Futura PT", "var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
