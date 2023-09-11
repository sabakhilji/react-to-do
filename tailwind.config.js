/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {lineHeight:{
      'lg':'1.01567',
      'cb':'1.25',
    },
    fontweight:{
      'light':"300",
    }
  },
  },
  plugins: [],
}

