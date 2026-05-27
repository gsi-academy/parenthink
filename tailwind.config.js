/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  safelist: ["nav-scrolled"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        primary: "#005B41",
        secondary: "#232D3F",
        accent: "#C87C14",
        parchment: "#F4F8F5",
      },
    },
  },
  plugins: [],
}
