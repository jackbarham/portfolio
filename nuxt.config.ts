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
        { 
          rel: 'shortcut icon', 
          type: 'image/png', 
          href: 'https://a.storyblok.com/f/299693/130x128/f7e6b5d5e7/favicon.png?v=1'
        },
        // Preload the stylesheet first to avoid render-blocking but ensure it applies
        { 
          rel: 'preload', 
          href: 'https://use.typekit.net/ztp5pvp.css',
          as: 'style',
        },
        // Use the normal stylesheet without media switching to ensure the font loads
        { 
          rel: 'stylesheet', 
          href: 'https://use.typekit.net/ztp5pvp.css',
        },
        { 
          rel: 'preconnect', 
          href: 'https://use.typekit.net',
        },
        { 
          rel: 'preconnect', 
          href: 'https://p.typekit.net',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          src: 'https://use.typekit.net/ztp5pvp.js',
          async: true,
          defer: true,
        },
        {
          innerHTML: 'try{Typekit.load({ async: true });}catch(e){}',
          type: 'text/javascript',
        },
      ]
    }
  }
})
