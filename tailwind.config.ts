import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A2E",
        accent: "#E8C547",
        surface: "#F7F5F0",
        "text-primary": "#0D0D0D",
        "text-muted": "#6B6B6B",
        border: "#E2E0DB",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        // 0 for primary containers (use utilities like rounded-none)
        // 8px for interactive elements
        interactive: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;