/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        light: "#f5f5f5",
      },
      flex: {
        half: "1",
      },
      height: {
        custom: "80vh",
        norecipe: "42.8vh",
        nav: "10vh",
        90: "90vh",
      },
      minHeight: {
        custom: "80vh",
      },
      spacing: {
        nav: "10vh",
      },
    },
  },
  plugins: [],
};
