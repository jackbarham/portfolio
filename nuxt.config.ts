// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
  ],
  app: {
    head: {
      title: 'Jack Barham',
      meta: [
        { 
          name: 'description', 
          content: 'Digital product designer and developer based in London, UK.' 
        }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://rsms.me/inter/inter.css'
        },
        { 
          rel: 'stylesheet', 
          href: 'https://use.typekit.net/iiw3pli.css'
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
