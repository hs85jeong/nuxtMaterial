module.exports = {
  // Headers of the page
  head: {
    title: 'nuxt.js + vuetify + Material Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  // Global CSS
 css: [
   { src: '~/assets/css/material-dashboard.scss', lang: 'scss' }
 ],
 build: {
   vendor: ['axios'],
   vender: ['vuetify'],
   extractCSS: true
 },
 // Load Vuetify into the app
 plugins: ['~/plugins/vuetify'],
 // Load Vuetify CSS globally
 css: ['vuetify/dist/vuetify.min.css']
}
