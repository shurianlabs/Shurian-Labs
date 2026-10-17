import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./logo.tsx",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#090D16",
          surface: "#131B2E",
          surfaceHigh: "#19233B",
          border: "#1E293B",
          cyan: "#00D2FF",
          mint: "#00F5A0",
          slate: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(135deg, #00D2FF 0%, #00F5A0 100%)",
        "cyber-grid":
          "radial-gradient(circle, rgba(0, 210, 255, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        "cyber-cyan": "0 0 20px -2px rgba(0, 210, 255, 0.25)",
        "cyber-mint": "0 0 24px -2px rgba(0, 245, 160, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
