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
  }
})