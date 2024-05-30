/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        borde: "#0075FF",
        error: "#BB2929",
        exito: "#1ED12D",
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
