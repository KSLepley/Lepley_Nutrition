import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "var(--color-ivory)",
        beige: "var(--color-beige)",
        sage: "var(--color-sage)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)"
      },
      borderRadius: {
        xl: "0.9rem"
      }
    }
  },
  plugins: []
};

export default config;
