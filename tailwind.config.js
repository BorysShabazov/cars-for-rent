/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
        margin: false,
      },
      colors: {
        yellow: "#FFC107",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
