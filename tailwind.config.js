const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        yellow: '#ECAC4F',
        gray: '#0A090B',
        white: 'FEFEF0',
        blue: '#36E0F5',
        lightGray: '#CDD5D1',
      },
    },
  },
  plugins: [],
}
