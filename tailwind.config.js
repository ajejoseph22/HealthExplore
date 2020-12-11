//Defaults
const { colors: defaultColors } = require('tailwindcss/defaultTheme');


module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      ...{
        "white": {
          "500": "#FFF",
        },
        "transparent": {
          "500": "rgba(255, 255, 255, 0)",
        },
      },
    },
    screens: {
      'md': { 'max': '1024px' },
      // => @media (max-width: 960px) { ... }

      'sm': { 'max': '768px' },
      // => @media (max-width: 460px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
