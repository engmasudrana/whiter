module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1170px',
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        orange: '#FF7139',
        black: '#213053',
        primary: '#1787FC',
        info: '#EBF5FF',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
