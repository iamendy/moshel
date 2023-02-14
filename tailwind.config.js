/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['exo', 'sans-serif'],
      "exo-bold": ['exo-bold', 'sans-serif'],
      "dm-sans": ["dm-sans", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
