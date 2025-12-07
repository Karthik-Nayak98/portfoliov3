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
        dark: "#0f1419", // Warmer, deeper dark background that complements blue
        light: "#D9EAFD",
        tertiary: "#64717C",
        secondary: "#fafbfc", // Slightly warmer light background
      },
    },
    fontFamily: {
      'body': ['"DM Sans"', 'system-ui', 'sans-serif'],
      'heading': ['Lora', 'sans-serif'],
      'mono': ['"JetBrains Mono"', 'monospace'],
      // Keep old fonts as fallbacks
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
