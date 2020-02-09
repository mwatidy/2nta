import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19e01eca = () => interopDefault(import('../pages/afkar.vue' /* webpackChunkName: "pages/afkar" */))
const _75bb39f6 = () => interopDefault(import('../pages/afkarak.vue' /* webpackChunkName: "pages/afkarak" */))
const _69192056 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/afkar",
    component: _19e01eca,
    name: "afkar"
  }, {
    path: "/afkarak",
    component: _75bb39f6,
    name: "afkarak"
  }, {
    path: "/",
    component: _69192056,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
