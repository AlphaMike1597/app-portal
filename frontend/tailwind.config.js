/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'app' : "url('/img/home.png')"
      }
    },
  },
  plugins: [],
}

