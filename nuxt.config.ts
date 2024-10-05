export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { 
    enabled: true 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
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
        // { 
        //   rel: 'stylesheet', 
        //   href: 'https://use.typekit.net/ztp5pvp.css',
        //   as: 'style',
        //   onload: 'this.rel="stylesheet"',
        // },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.googleapis.com' 
        },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.gstatic.com', 
          crossorigin: 'anonymous'
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' 
        },
        // { 
        //   rel: 'shortcut icon', 
        //   type: 'image/png', 
        //   href: 'https://a.storyblok.com/f/277323/80x80/5e2a1a8cff/favicon.png'
        // }
      ],
    }
  }
})