/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black and Gold theme
        primary: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Main gold
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#000000", // Pure black
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          foreground: "#f59e0b",
        },
        // Gold variations
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        destructive: {
          DEFAULT: "#f59e0b",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#fde68a",
          foreground: "#475569",
        },
        popover: {
          DEFAULT: "#fef3c7",
          foreground: "#94a3b8",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "ping-slow": "ping 3s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient":
          "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)",
        "black-gold-gradient":
          "linear-gradient(135deg, #000000 0%, #1e293b 25%, #f59e0b 50%, #1e293b 75%, #000000 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
