const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      fontFamily: {
        iranYekan :['iranyekanwebregular'],
        iranYekanWebMedium :['iranyekanwebmedium']
      },

    },
  },
  plugins: [],
}