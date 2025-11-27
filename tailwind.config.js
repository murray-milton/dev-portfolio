/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
      // "Modern Obsidian" Palette
        primary: "#020617",    // Deepest Slate (Background)
        secondary: "#0f172a",  // Lighter Slate (Cards/Sections)
        tertiary: "#1e293b",   // Borders/Inputs
        
        // Text Colors
        textLight: "#e2e8f0",  // High contrast text
        textDim: "#94a3b8",    // Secondary text
        
        // Accents
        accent: "#38bdf8",     // Sky Blue (Buttons/Icons)
        accentGlow: "#0ea5e9", // Hover states
        danger: "#ef4444",     // Errors
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};