module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#5122E1',
      },
      fontFamily: {
        // transducer: ['transducer', 'system-ui', 'sans-serif'],
        // inter: ['inter-variable', 'system-ui', 'sans-serif'],
        transducer: ['"Transducer"', 'system-ui', 'sans-serif'],
        inter: ['"Articulat CF"', 'system-ui', 'sans-serif'],
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