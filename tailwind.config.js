/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monument-extended': ['MonumentExtended', 'sans-serif'],
      },
    },
  },
  plugins: [],
}