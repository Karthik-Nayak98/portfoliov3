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
        // accent: "#FFA725",
        // accent: "#FF9149",
        accent: "#FF9D77",
        // accent: "#ebdc93",
        // accent: "#2272FF",
        // accent: "#9898ff",
        dark: "#17171F",

        // dark: "#1A1110",
        secondary: "#2272FF",
        // light: "#EAEAEA",
        secondary: "#F1F0E9",
        secondary: "#E5E7EB",
        light: "#FEF9F2",
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
