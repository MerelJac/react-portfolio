/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "1.5rem",
      md: "2rem",
      lg: "3rem",
      xl: "4rem",
      "2xl": "5rem",
      "3xl": "6rem",
      "4xl": "7rem",
      "5xl": "8rem",
    },
    fontFamily: {
      primary: ["'Shadows Into Light', cursive"],
    },
    screens: {
      sm: "576px",

      md: "960px",

      lg: "1440px",
    },
    extend: {
    },
    colors: {
      black: "#00000",
      white: "#ffffff",
      "dark-green": "#234539",
      creme: "#F7E3D4",
      "dark-orange": "#7D3415",
      tahiti: "#3ab7bf",
    },
  },
  plugins: [],
};
