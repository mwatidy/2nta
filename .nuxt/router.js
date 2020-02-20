import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19e01eca = () => interopDefault(import('../pages/afkar.vue' /* webpackChunkName: "pages/afkar" */))
const _75bb39f6 = () => interopDefault(import('../pages/afkarak.vue' /* webpackChunkName: "pages/afkarak" */))
const _39d5bd44 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _e6d07c82 = () => interopDefault(import('../pages/fekra.vue' /* webpackChunkName: "pages/fekra" */))
const _29d1a6ba = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _59077bd6 = () => interopDefault(import('../pages/company/chat.vue' /* webpackChunkName: "pages/company/chat" */))
const _14d38c1b = () => interopDefault(import('../pages/company/profile.vue' /* webpackChunkName: "pages/company/profile" */))
const _81ffffe0 = () => interopDefault(import('../pages/company/test.vue' /* webpackChunkName: "pages/company/test" */))
const _fc64e8c0 = () => interopDefault(import('../pages/user/chat.vue' /* webpackChunkName: "pages/user/chat" */))
const _150a1fde = () => interopDefault(import('../pages/user/profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _3073e04c = () => interopDefault(import('../pages/user/test.vue' /* webpackChunkName: "pages/user/test" */))
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
    path: "/company",
    component: _39d5bd44,
    name: "company"
  }, {
    path: "/fekra",
    component: _e6d07c82,
    name: "fekra"
  }, {
    path: "/user",
    component: _29d1a6ba,
    name: "user"
  }, {
    path: "/company/chat",
    component: _59077bd6,
    name: "company-chat"
  }, {
    path: "/company/profile",
    component: _14d38c1b,
    name: "company-profile"
  }, {
    path: "/company/test",
    component: _81ffffe0,
    name: "company-test"
  }, {
    path: "/user/chat",
    component: _fc64e8c0,
    name: "user-chat"
  }, {
    path: "/user/profile",
    component: _150a1fde,
    name: "user-profile"
  }, {
    path: "/user/test",
    component: _3073e04c,
    name: "user-test"
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
