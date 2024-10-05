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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          1: "#444444",
          2: "#D9D9D9",
          3: "#2e2e2e",
          4: "#3b3b3b",
          5: "#373636"
        },
        purple: {
          1: "#3F3B7D",
          2: "#9F9BDD",
        },
        amber: {
          1: "#D8873C",
          2: "#FCC79C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
