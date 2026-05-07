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
        cream: "#F5EFE6",
        "cream-2": "#ECE4D6",
        ink: "#1A1612",
        "ink-soft": "#2C2620",
        muted: "#8A8074",
        accent: "#C75D3D",
      },
      fontFamily: {
        display: ["var(--font-jost)", "Futura", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
