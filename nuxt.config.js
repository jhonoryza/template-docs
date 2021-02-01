import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  docs: {
    primaryColor: '#E24F55'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  i18n: {
    locales: () => [{
      code: 'es',
      iso: 'en-Es',
      file: 'es-ES.js',
      name: 'Español'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  }
})