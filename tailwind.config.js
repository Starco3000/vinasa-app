/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      lineHeight: {
        6.5: '25.6px',
      },
      backgroundColor: {
        linkedin: '#399BF6',
        'white-hover': 'rgba(255, 255, 255, 0.6)',
        'baby-blue': '#A8D9F8',
        gold: '#FEDE00',
        turquoise: '#6AB8EE',
        mint: '#B4D8C8',
      },
      colors: {
        'baby-blue': '#A8D9F8',
        gold: '#FEDE00',
        turquoise: '#6AB8EE',
        mint: '#B4D8C8',
      },
      tracking: {
        0.5: '0.08em',
      },
    },
  },
  plugins: [],
};
