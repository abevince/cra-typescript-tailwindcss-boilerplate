const tailwindUI = require('@tailwindcss/ui')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  variants: {},
  plugins: [
    tailwindUI({
      layout: 'sidebar',
    }),
  ],
}
