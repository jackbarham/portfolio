module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-red': '#fb3a58',
      },
fontFamily: {
  transducer: ['Transducer', 'system-ui', 'sans-serif'],
  articulat: ['"Articulat CF"', 'system-ui', 'sans-serif'],
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