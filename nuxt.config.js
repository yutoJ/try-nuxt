module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-nuxt-app',
    titleTemplate: '%s | Nuxt.js hello nuxt world',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios'
  ],
  router: {
    middleware: [
      'auth'
    ]
  },
  axios: {
  },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/logger'
  ],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
