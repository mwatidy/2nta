
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui' },
      { "http-equiv": 'Content-Type', content: 'text/html; charset=UTF-8' },
      { "http-equiv": 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "apple-touch-icon", href: "/app-assets/images/ico/apple-icon-120.png" },
      { rel: "shortcut icon", type: "image/x-icon", href: "/app-assets/images/ico/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/vendors.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/extensions/tether-theme-arrows.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/bootstrap.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/bootstrap-extended.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/colors.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/components.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/core/menu/menu-types/vertical-menu.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/core/colors/palette-gradient.css" },
      { rel: 'stylesheet', type:'text/css', href:'/app-assets/css/pages/dashboard-analytics.css' },
      { rel: 'stylesheet', type:'text/css', href:'/app-assets/css/pages/card-analytics.css' },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/file-uploaders/dropzone.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/tables/datatable/datatables.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css" },
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/plugins/file-uploaders/dropzone.css"},
      { rel: "stylesheet", type: "text/css", href: "/app-assets/css/pages/data-list-view.css"},
      { rel: 'stylesheet', href:"/app-assets/css/pages/users.css" },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/style.css" },
    ],
    script: [
      { src: "/app-assets/vendors/js/vendors.min.js", body: true },
      { src: "/app-assets/js/core/app-menu.js", body: true },
      { src: "/app-assets/js/core/app.js", body: true },
      { src: "/app-assets/js/scripts/components.js", body: true },
      { src: '/app-assets/vendors/js/charts/apexcharts.min.js', body: true },
      { src: '/app-assets/vendors/js/extensions/tether.min.js', body: true },
      { src: '/app-assets/vendors/js/extensions/shepherd.min.js', body: true },
      { src: "/app-assets/vendors/js/extensions/dropzone.min.js", body: true },
      { src: "/app-assets/vendors/js/tables/datatable/datatables.min.js", body: true },
      { src: "/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js", body: true },
      { src: "/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js", body: true },
      { src: "/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js", body: true },
      { src: "/app-assets/vendors/js/tables/datatable/dataTables.select.min.js", body: true },
      { src: "/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js", body: true },



    ],
    bodyAttrs: {
      class: 'vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static menu-expanded',
      "data-open": 'click',
      "data-menu": 'vertical-menu-modern',
      "data-col": "2-columns",
    }
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
    { src: '~/plugins/amplify.js', mode: 'client' }
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
    'nuxt-vuex-localstorage'
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
  },
  serverMiddleware: [
    '~/api.js'
  ]
}
