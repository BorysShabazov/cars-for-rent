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
          DEFAULT: "128px",
        },
        margin: false,
      },
      colors: {
        blue: "#3470FF",
        white: "#FFF",
        gray: "#8A8A89",
        lightgray: "#F7F7FB",
        black: "#121417",
      },
    },
  },
  plugins: [],
};
