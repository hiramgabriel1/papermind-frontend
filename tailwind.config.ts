import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text_primary: "#e8618c",
        text_secundary: "#636ae8",
        text_tercary: "#9da1aa",
        background_primary: "#fdf1f5",
        background_secundary: "#fff",
        background_tercary: "#f2f2fd",
        color_global: "#585fe6"
      },
    },
  },
  plugins: [],
} satisfies Config;
