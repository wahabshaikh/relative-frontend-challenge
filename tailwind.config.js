/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tomorrow", "sans-serif"],
      },
      colors: {
        accent: "#ECF0FF",
        primary: "#737BAE",
        secondary: "#5A5F7D",
        green: "#00FFA3",
        red: "#FF4D4D",
      },
    },
  },
  plugins: [],
};
