import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { 
    enabled: false 
  },
    css: [
    '~/assets/css/main.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/fonts', 
    '@nuxt/image',
    'nuxt-svgo',
    ['@storyblok/nuxt', {
      accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
      apiOptions: {
        region: 'eu',
      },
    }]
  ],
  runtimeConfig: {
    public: {
      appTitle: 'Jack Barham'
    }
  },
  fonts: {
    adobe: {
      id: ['wby8sop'],
    },
    families: [
      { name: '"Transducer Variable"', weights: [400, 500, 700, 900], styles: ['normal'] },
      // { name: '"Articulat CF"', weights: [400, 800], styles: ['normal', 'italic'] },
    ],
  },
  image: {
    quality: 70,
    format: ['webp'],
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
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
      ],
    }
  }
})