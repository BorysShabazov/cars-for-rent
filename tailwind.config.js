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
        blue: "#54ADFF",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
