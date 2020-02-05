
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "apple-touch-icon", href: "/app-assets/images/ico/apple-icon-120.png" },
      { rel: "shortcut icon", type: "image/x-icon", href: "/app-assets/images/ico/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/vendors.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/charts/apexcharts.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/extensions/tether-theme-arrows.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/extensions/tether.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/extensions/shepherd-theme-default.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/bootstrap.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/bootstrap-extended.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/colors.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/components.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/themes/dark-layout.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/themes/semi-dark-layout.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/core/menu/menu-types/vertical-menu.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/core/colors/palette-gradient.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/pages/dashboard-analytics.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/pages/card-analytics.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/plugins/tour/tour.css" },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/style.css" }      
    ],
    script: [
      { src: "/app-assets/vendondors.min.js", body: true },
      { src: "/app-assets/vendoarts/apexcharts.min.js", body: true },
      { src: "/app-assets/vendotensions/tether.min.js", body: true },
      { src: "/app-assets/vendotensions/shepherd.min.js", body: true },
      { src: "/app-assere/app-menu.js", body: true },
      { src: "/app-assere/app.js", body: true },
      { src: "/app-asseripts/components.js", body: true },
      { src: "/app-asseripts/pages/dashboard-analytics.js", body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
