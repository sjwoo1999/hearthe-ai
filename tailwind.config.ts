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
        hearth: {
          100: "#FBECE8", // Soft Ember
          500: "#D97757", // Warm Terracotta
          600: "#C06042", // Deep Clay
        },
        nature: {
          100: "#EBF0EE", // Mist
          500: "#8DA399", // Sage Green
          600: "#728A7F", // Deep Olive
        },
        cream: "#FDFBF7", // Soft Beige
        stone: {
          100: "#F5F2F0", // Warm Light Grey
          600: "#7D7673", // Warm Grey
          800: "#4A4543", // Soft Charcoal
        },
      },
      borderRadius: {
        "3xl": "1.5rem", // Fully rounded for organic feel
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)", // Soft diffused shadow
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
