/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montez: ["Montez", "sans-serif"],
        libre: ["Libre", "sans-serif"],
        libreItalic: ["Libre-italic", "sans-serif"],
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        scale: "scale 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
