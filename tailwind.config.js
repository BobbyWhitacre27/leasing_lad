/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", './src/App.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class',
  }), require('daisyui')],

  daisyui: {
    themes: false,
  },
}

