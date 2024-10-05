module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#5122E1',
      },
      fontFamily: {
        black: ['Transducer-Black', 'system-ui', 'sans-serif'],
        bold: ['Transducer-Bold', 'system-ui', 'sans-serif'],
        medium: ['Transducer-Medium', 'system-ui', 'sans-serif'],
        copy: ['Inter', 'system-ui', 'sans-serif'],
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