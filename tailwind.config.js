module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-navy': '#181f49',
      },
      fontFamily: {
        neworder: ['new-order', 'sans-serif'],
        inter: ['Inter var', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      order: ['odd', 'even'],
      marginBottom: ['last'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}