export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { 
    enabled: true 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@nuxt/fonts',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Jack Barham',
      meta: [
        { 
          name: 'description', 
          content: 'Web development, interface design and digital consultancy.' 
        }
      ],
      link: [
        { 
          rel: 'shortcut icon', 
          type: 'image/png', 
          href: 'https://a.storyblok.com/f/299693/130x128/f7e6b5d5e7/favicon.png?v=1'
        },
        { 
          rel: 'stylesheet', 
          href: 'https://use.typekit.net/gaa7jmr.css',
        },
      ],
    }
  }
})
