/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#fab6bf",
      secondary: "#faf5ef",
      // secondary: "#faf2e3",
      // secondary: "#fffaf0",
      white: "#fff",
      black: "#000",
      red: "#f54242",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
