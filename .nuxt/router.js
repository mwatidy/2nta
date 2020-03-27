import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39d5bd44 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _3a7ab48b = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _32c0c36d = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2731fb62 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _29d1a6ba = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _6a5c0839 = () => interopDefault(import('../pages/community/companies.vue' /* webpackChunkName: "pages/community/companies" */))
const _140e494a = () => interopDefault(import('../pages/community/company.vue' /* webpackChunkName: "pages/community/company" */))
const _88a2ddee = () => interopDefault(import('../pages/community/idea.vue' /* webpackChunkName: "pages/community/idea" */))
const _84619d8c = () => interopDefault(import('../pages/community/ideas.vue' /* webpackChunkName: "pages/community/ideas" */))
const _5d9b2221 = () => interopDefault(import('../pages/community/people.vue' /* webpackChunkName: "pages/community/people" */))
const _398eb7e7 = () => interopDefault(import('../pages/community/person.vue' /* webpackChunkName: "pages/community/person" */))
const _59077bd6 = () => interopDefault(import('../pages/company/chat.vue' /* webpackChunkName: "pages/company/chat" */))
const _4f7fb12f = () => interopDefault(import('../pages/company/job.vue' /* webpackChunkName: "pages/company/job" */))
const _b7bbd458 = () => interopDefault(import('../pages/company/jobs.vue' /* webpackChunkName: "pages/company/jobs" */))
const _14d38c1b = () => interopDefault(import('../pages/company/profile.vue' /* webpackChunkName: "pages/company/profile" */))
const _81ffffe0 = () => interopDefault(import('../pages/company/test.vue' /* webpackChunkName: "pages/company/test" */))
const _fc64e8c0 = () => interopDefault(import('../pages/user/chat.vue' /* webpackChunkName: "pages/user/chat" */))
const _48d24944 = () => interopDefault(import('../pages/user/ideas.vue' /* webpackChunkName: "pages/user/ideas" */))
const _4598ffb6 = () => interopDefault(import('../pages/user/job.vue' /* webpackChunkName: "pages/user/job" */))
const _662fb4c4 = () => interopDefault(import('../pages/user/jobs.vue' /* webpackChunkName: "pages/user/jobs" */))
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
    path: "/company",
    component: _39d5bd44,
    name: "company"
  }, {
    path: "/home",
    component: _3a7ab48b,
    name: "home"
  }, {
    path: "/login",
    component: _32c0c36d,
    name: "login"
  }, {
    path: "/register",
    component: _2731fb62,
    name: "register"
  }, {
    path: "/user",
    component: _29d1a6ba,
    name: "user"
  }, {
    path: "/community/companies",
    component: _6a5c0839,
    name: "community-companies"
  }, {
    path: "/community/company",
    component: _140e494a,
    name: "community-company"
  }, {
    path: "/community/idea",
    component: _88a2ddee,
    name: "community-idea"
  }, {
    path: "/community/ideas",
    component: _84619d8c,
    name: "community-ideas"
  }, {
    path: "/community/people",
    component: _5d9b2221,
    name: "community-people"
  }, {
    path: "/community/person",
    component: _398eb7e7,
    name: "community-person"
  }, {
    path: "/company/chat",
    component: _59077bd6,
    name: "company-chat"
  }, {
    path: "/company/job",
    component: _4f7fb12f,
    name: "company-job"
  }, {
    path: "/company/jobs",
    component: _b7bbd458,
    name: "company-jobs"
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
    path: "/user/ideas",
    component: _48d24944,
    name: "user-ideas"
  }, {
    path: "/user/job",
    component: _4598ffb6,
    name: "user-job"
  }, {
    path: "/user/jobs",
    component: _662fb4c4,
    name: "user-jobs"
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
