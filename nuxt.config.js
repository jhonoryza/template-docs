import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  router: {
    base: '/json-api-auth-docs/'
  },
  docs: {
    primaryColor: '#E24F55'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Json Api Auth Documentation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Laravel Json API Auth package', name: 'Laravel Json API Auth package', content: 'It adds all the scaffold to get authentication features for Apis.' },
      { hid: 'description', name: 'description', content: 'Laravel Json API Auth package' },
      // Open Graph
      { hid: 'og:title', property: 'og:title', content: 'Laravel Json API Auth package' },
      { hid: 'og:description', property: 'og:description', content: 'It adds all the scaffold to get authentication features for Apis.' },
      // Twitter Card
      { hid: 'twitter:title', name: 'twitter:title', content: 'Laravel Json API Auth package' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'It adds all the scaffold to get authentication features for Apis.' }
    ],
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

// theme({
//   docs: {
//     primaryColor: '#E24F55'
//   },
//   // Global page headers (https://go.nuxtjs.dev/config-head)
//   head: {
//     title: 'Json Api Auth Documentation',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'Laravel Json API Auth package', name: 'Laravel Json API Auth package', content: 'It adds all the scaffold to get authentication features for Apis.' },
//       { hid: 'description', name: 'description', content: 'Laravel Json API Auth package' },
//       // Open Graph
//       { hid: 'og:title', property: 'og:title', content: 'Laravel Json API Auth package' },
//       { hid: 'og:description', property: 'og:description', content: 'It adds all the scaffold to get authentication features for Apis.' },
//       // Twitter Card
//       { hid: 'twitter:title', name: 'twitter:title', content: 'Laravel Json API Auth package' },
//       { hid: 'twitter:description', name: 'twitter:description', content: 'It adds all the scaffold to get authentication features for Apis.' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
//     ]
//   },
//   i18n: {
//     locales: () => [{
//       code: 'es',
//       iso: 'en-Es',
//       file: 'es-ES.js',
//       name: 'Español'
//     }, {
//       code: 'en',
//       iso: 'en-US',
//       file: 'en-US.js',
//       name: 'English'
//     }],
//     defaultLocale: 'en'
//   }
// })

// export default {
//   ...theme,
//   target: 'static',
//   router: {
//     base: '/json-api-auth-docs/'
//   },
// }