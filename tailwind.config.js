/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.65rem",
      },
      colors: {
        neutral: {
          850: "#1c1c1c",
        },
        blue: {
          50: "#fff8ec",
          100: "#fff0d3",
          200: "#ffdca5",
          300: "#ffc26d",
          400: "#ff9d32",
          500: "#ff7f0a",
          600: "#ff6600",
          700: "#cc4902",
          800: "#a1390b",
          900: "#82310c",
          950: "#461604",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
