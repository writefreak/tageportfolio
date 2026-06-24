import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0D0A",
        surface: "#13160F",
        "surface-raised": "#181C12",
        border: "#23271C",
        accent: {
          DEFAULT: "#8EE612",
          dim: "#5C7A1F",
          soft: "rgba(142, 230, 18, 0.1)",
        },
        text: {
          primary: "#E8EAE4",
          secondary: "#8A8F82",
          tertiary: "#5A5F52",
        },
      },
      fontFamily: {
        display: ["Bricolage Grotesk", "system-ui"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        layout: "1180px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
