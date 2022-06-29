/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: "Poppins",
      },
      colors: {
        light: "#f5f5f5",
      },
      flex: {
        half: "1",
      },
      height: {
        custom: "80vh",
      },
      minHeight: {
        custom: "80vh",
      },
    },
  },
  plugins: [],
};
