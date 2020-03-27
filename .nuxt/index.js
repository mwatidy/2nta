import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_nuxtvuexlocalstorage_d912f862 from 'nuxt_plugin_nuxtvuexlocalstorage_d912f862' // Source: ./nuxt-vuex-localstorage.js (mode: 'client')
import nuxt_plugin_amplify_900d1ace from 'nuxt_plugin_amplify_900d1ace' // Source: ../plugins/amplify.js (mode: 'client')
import nuxt_plugin_auth_6a7e4e1e from 'nuxt_plugin_auth_6a7e4e1e' // Source: ../plugins/auth (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"},{"http-equiv":"Content-Type","content":"text\u002Fhtml; charset=UTF-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"apple-touch-icon","href":"\u002Fapp-assets\u002Fimages\u002Fico\u002Fapple-icon-120.png"},{"rel":"shortcut icon","type":"image\u002Fx-icon","href":"\u002Fapp-assets\u002Fimages\u002Fico\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Montserrat:300,400,500,600"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Fvendors.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Fextensions\u002Ftether-theme-arrows.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fbootstrap.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fbootstrap-extended.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcolors.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcomponents.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcore\u002Fmenu\u002Fmenu-types\u002Fvertical-menu.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fcore\u002Fcolors\u002Fpalette-gradient.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fdashboard-analytics.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fcard-analytics.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Ffile-uploaders\u002Fdropzone.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Ftables\u002Fdatatable\u002Fdatatables.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fvendors\u002Fcss\u002Ftables\u002Fdatatable\u002Fextensions\u002FdataTables.checkboxes.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fplugins\u002Ffile-uploaders\u002Fdropzone.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fdata-list-view.css"},{"rel":"stylesheet","href":"\u002Fapp-assets\u002Fcss\u002Fpages\u002Fusers.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fassets\u002Fcss\u002Fstyle.css"}],"script":[{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fvendors.min.js","body":true},{"src":"\u002Fapp-assets\u002Fjs\u002Fcore\u002Fapp-menu.js","body":true},{"src":"\u002Fapp-assets\u002Fjs\u002Fcore\u002Fapp.js","body":true},{"src":"\u002Fapp-assets\u002Fjs\u002Fscripts\u002Fcomponents.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fcharts\u002Fapexcharts.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fextensions\u002Ftether.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fextensions\u002Fshepherd.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Fextensions\u002Fdropzone.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.bootstrap4.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.buttons.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fbuttons.bootstrap.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002FdataTables.select.min.js","body":true},{"src":"\u002Fapp-assets\u002Fvendors\u002Fjs\u002Ftables\u002Fdatatable\u002Fdatatables.checkboxes.min.js","body":true}],"bodyAttrs":{"class":"vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static menu-expanded","data-open":"click","data-menu":"vertical-menu-modern","data-col":"2-columns"},"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_nuxtvuexlocalstorage_d912f862 === 'function') {
    await nuxt_plugin_nuxtvuexlocalstorage_d912f862(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_amplify_900d1ace === 'function') {
    await nuxt_plugin_amplify_900d1ace(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_auth_6a7e4e1e === 'function') {
    await nuxt_plugin_auth_6a7e4e1e(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
