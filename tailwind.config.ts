import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#77301C'
      },
    },
  },
  plugins: [],
} satisfies Config;