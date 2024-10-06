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
        // Preload the Adobe Typekit CSS to avoid render-blocking
        { 
          rel: 'preload', 
          href: 'https://use.typekit.net/ztp5pvp.css',
          as: 'style',
        },
        // Load the Adobe Typekit CSS asynchronously to avoid render-blocking
        { 
          rel: 'stylesheet', 
          href: 'https://use.typekit.net/ztp5pvp.css',
          onload: 'this.rel="stylesheet"',
          media: 'print',
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
        // Optional: If hosting fonts locally (requires custom setup)
        // { 
        //   rel: 'stylesheet', 
        //   href: '/fonts/custom-font.css',
        //   onload: 'this.rel="stylesheet"',
        // },
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
      ],
      // __dangerouslyDisableSanitizers: ['script'],
    }
  }
})
