/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        128: "30rem",
      },
      colors: {
        accent: "#2563eb",
        dark: "#111827",
        light: "#D9EAFD",
        tertiary: "#64717C",
        secondary: "#f3f4f6",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lora: ["Lora", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      noto: ["Noto-sans", "sans-serif"],
      assistant: ["Assistant", "sans-serif"],
      inria: ["Inria Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
