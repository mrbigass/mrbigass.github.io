export default {
  head: {
    title: 'mrbigass.github.io',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  generate: {
    routes: ['/blog/2021-02-01']
  },

  css: [
    '~/assets/markdown.sass'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
  ],

  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
