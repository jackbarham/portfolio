module.exports = {
  content: [
    './pages/**/*.{html,js,ts}',
    './components/**/*.{html,js,ts}',
    './storyblok/**/*.{vue,js,ts}',
    './storyblok/*.{vue,js,ts}',
  ],
  theme: {
    screens: {
      'xs': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'brand-red': '#fb3a58',
        'brand-yellow': '#ffe267',
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