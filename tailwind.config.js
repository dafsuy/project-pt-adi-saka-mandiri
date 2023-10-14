/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#006837',
        secondary: '#08be6a',
        accent: '#f37221',
        green1: '#39b54a',
        darkColor: '#010507',
        green2: '#8FE6AB',
        darkBlue: '#'
      },
      fontFamily: {
        inter: ['Inter']
      },
      backgroundImage: {
        'footer-pattern': "url('/src/img/logo.png')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ]
};
// #e26c2d green old
// #2c632c orange
// #08be6a green young
