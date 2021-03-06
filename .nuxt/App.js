import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import _6f6c098b from '../layouts/default.vue'
import _e669ef1c from '../layouts/defaultCompany.vue'
import _194038b4 from '../layouts/singleColumn.vue'

const layouts = { "_default": _6f6c098b,"_defaultCompany": _e669ef1c,"_singleColumn": _194038b4 }

export default {
  head: {"title":"2nta","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"},{"http-equiv":"Content-Type","content":"text\u002Fhtml; charset=UTF-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"hid":"description","name":"description","content":"waza2f bshkl gdeed"}],"link":[{"rel":"apple-touch-icon","href":"\u002Fapp-assets\u002Fimages\u002Fico\u002Fapple-icon-120.png"},{"rel":"shortcut icon","type":"image\u002Fx-icon","href":"\u002Fapp-assets\u002Fimages\u002Fico\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Montserrat:300,400,500,600"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Fvendors.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Fextensions\u002Ftether-theme-arrows.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fbootstrap.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fbootstrap-extended.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcolors.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcomponents.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcore\u002Fmenu\u002Fmenu-types\u002Fvertical-menu.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcore\u002Fcolors\u002Fpalette-gradient.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fdashboard-analytics.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fcard-analytics.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Ffile-uploaders\u002Fdropzone.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Ftables\u002Fdatatable\u002Fdatatables.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Ftables\u002Fdatatable\u002Fextensions\u002FdataTables.checkboxes.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fplugins\u002Ffile-uploaders\u002Fdropzone.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fdata-list-view.css"},{"rel":"stylesheet","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fusers.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fassets\u002Fcss\u002Fstyle.css"}],"script":[{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fvendors.min.js","body":true},{"src":"\u002Fapp-assets\u002Fjs\u002Fcore\u002Fapp-menu.js","body":true},{"src":"\u002Fapp-assets\u002Fjs\u002Fcore\u002Fapp.js","body":true},{"src":"\u002Fapp-assets\u002Fjs\u002Fscripts\u002Fcomponents.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fcharts\u002Fapexcharts.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fextensions\u002Ftether.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fextensions\u002Fshepherd.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fextensions\u002Fdropzone.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.bootstrap4.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.buttons.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fbuttons.bootstrap.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002FdataTables.select.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.checkboxes.min.js","body":true}],"bodyAttrs":{"class":"vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static menu-expanded","data-open":"click","data-menu":"vertical-menu-modern","data-col":"2-columns"},"style":[]},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
