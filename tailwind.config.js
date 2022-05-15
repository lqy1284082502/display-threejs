// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minHeight: {
      200: '250px', // 定制最小高度为200px
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
