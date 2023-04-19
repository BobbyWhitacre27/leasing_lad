/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", './src/App.jsx', './src/**/*.{js,jsx,ts,tsx}', "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class',
  }), require('daisyui'), require('flowbite/plugin')],

  daisyui: {
    themes: false,
  },
}

