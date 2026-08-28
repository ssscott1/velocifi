import type { Config } from "tailwindcss";

/**
 * Velocifi brand system.
 * To adjust brand colours, edit the hex values below — they are the single
 * source of truth and are surfaced everywhere via Tailwind utility classes.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11141A", // primary near-black
        signal: "#00C46E", // accent green — emphasis only
        paper: "#F6F7F5", // off-white background
        slate: "#6B7280", // muted / secondary text
      },
      fontFamily: {
        // Brand typeface with robust fallbacks.
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
        // Used for eyebrows, section labels and footer meta.
        mono: [
          "ui-monospace",
          '"SF Mono"',
          '"SFMono-Regular"',
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        // Headings / wordmark: tight negative tracking (~ -4%).
        tightest: "-0.04em",
        // Eyebrow / label tracking (~ +18%).
        label: "0.18em",
      },
      maxWidth: {
        shell: "1160px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
