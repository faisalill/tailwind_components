/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lblue': '#99ccff',
        'svelte-orange': '#FF3E00',
        'js-yellow': '#FCDC00',
      }
    },
  },
  plugins: [],
}