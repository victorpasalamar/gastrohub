/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'pblack-light': '#363d49',
        'pblack': '#222831',
        'pblack-dark': '#16181e',

        'pgray-light': '#44444a',
        'pgray': '#31363F',
        'pgray-dark': '#282c30',

        'pteal-light': 'rgba(209,240,243,0.39)',
        'pteal': '#76ABAE',
        'pteal-dark': '#48676a',

        'pwhite-light': '#f3f3f3',
        'pwhite': '#EEEEEE',
        'pwhite-dark': '#bcbcbc',
      },
    },
  },
  plugins: [],
}
