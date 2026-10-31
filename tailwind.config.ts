import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "rgb(var(--color-night) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        gold: "#C8A774",
        blueTeam: "#3E7BFA",
        redTeam: "#F52547",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(62, 123, 250, 0.16)",
        gold: "0 0 18px rgba(200, 167, 116, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
