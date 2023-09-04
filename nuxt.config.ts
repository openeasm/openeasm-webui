// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'OpenEASM BANNER DB - Meilisearch',
      meta: [
        { name: 'description', content: 'Ecommerce demo featuring fast and relevant onsite search powered by Meilisearch.' },
        { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION_ID }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      fathomSiteID: process.env.FATHOM_SITE_ID,
      meilisearch: {
        host: process.env.MEILISEARCH_HOST,
        searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,
        options: {
          primaryKey: 'id',
          keepZeroFacets: false,
          finitePagination: false
        }
      }
    }
  },
  components: {
    dirs: [
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms'
    ]
  },
  css: [
    '~/assets/css/typography.css',
    '~/assets/css/spacing.css',
    '~/assets/css/shadow.css',
    '~/assets/css/utilities.css',
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // Handle interface imports for defineProps
    // Docs: https://github.com/wheatjs/vite-plugin-vue-type-imports
    'vite-plugin-vue-type-imports/nuxt',
    // Optimized images with progressive loading
    '@twicpics/components/nuxt3'
  ],
  twicpics: {
    domain: process.env.TWICPICS_DOMAIN
  }
})
