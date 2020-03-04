import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ecb00d94 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _22f04008 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _25fa06ab = () => interopDefault(import('../pages/community/companies.vue' /* webpackChunkName: "pages/community/companies" */))
const _5987ce4d = () => interopDefault(import('../pages/community/company.vue' /* webpackChunkName: "pages/community/company" */))
const _6623d357 = () => interopDefault(import('../pages/community/idea.vue' /* webpackChunkName: "pages/community/idea" */))
const _620238ac = () => interopDefault(import('../pages/community/ideas.vue' /* webpackChunkName: "pages/community/ideas" */))
const _3fc908ef = () => interopDefault(import('../pages/community/people.vue' /* webpackChunkName: "pages/community/people" */))
const _1bbc9eb5 = () => interopDefault(import('../pages/community/person.vue' /* webpackChunkName: "pages/community/person" */))
const _f6360cb8 = () => interopDefault(import('../pages/company/chat.vue' /* webpackChunkName: "pages/company/chat" */))
const _7a3441a1 = () => interopDefault(import('../pages/company/job.vue' /* webpackChunkName: "pages/company/job" */))
const _6000d8bc = () => interopDefault(import('../pages/company/jobs.vue' /* webpackChunkName: "pages/company/jobs" */))
const _8df2d8e6 = () => interopDefault(import('../pages/company/profile.vue' /* webpackChunkName: "pages/company/profile" */))
const _2a450444 = () => interopDefault(import('../pages/company/test.vue' /* webpackChunkName: "pages/company/test" */))
const _2620dedc = () => interopDefault(import('../pages/user/chat.vue' /* webpackChunkName: "pages/user/chat" */))
const _41f0e292 = () => interopDefault(import('../pages/user/ideas.vue' /* webpackChunkName: "pages/user/ideas" */))
const _380a2a90 = () => interopDefault(import('../pages/user/jobs.vue' /* webpackChunkName: "pages/user/jobs" */))
const _21586ddf = () => interopDefault(import('../pages/user/profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _52e814cc = () => interopDefault(import('../pages/user/test.vue' /* webpackChunkName: "pages/user/test" */))
const _ce512370 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ecb00d94,
    name: "company"
  }, {
    path: "/user",
    component: _22f04008,
    name: "user"
  }, {
    path: "/community/companies",
    component: _25fa06ab,
    name: "community-companies"
  }, {
    path: "/community/company",
    component: _5987ce4d,
    name: "community-company"
  }, {
    path: "/community/idea",
    component: _6623d357,
    name: "community-idea"
  }, {
    path: "/community/ideas",
    component: _620238ac,
    name: "community-ideas"
  }, {
    path: "/community/people",
    component: _3fc908ef,
    name: "community-people"
  }, {
    path: "/community/person",
    component: _1bbc9eb5,
    name: "community-person"
  }, {
    path: "/company/chat",
    component: _f6360cb8,
    name: "company-chat"
  }, {
    path: "/company/job",
    component: _7a3441a1,
    name: "company-job"
  }, {
    path: "/company/jobs",
    component: _6000d8bc,
    name: "company-jobs"
  }, {
    path: "/company/profile",
    component: _8df2d8e6,
    name: "company-profile"
  }, {
    path: "/company/test",
    component: _2a450444,
    name: "company-test"
  }, {
    path: "/user/chat",
    component: _2620dedc,
    name: "user-chat"
  }, {
    path: "/user/ideas",
    component: _41f0e292,
    name: "user-ideas"
  }, {
    path: "/user/jobs",
    component: _380a2a90,
    name: "user-jobs"
  }, {
    path: "/user/profile",
    component: _21586ddf,
    name: "user-profile"
  }, {
    path: "/user/test",
    component: _52e814cc,
    name: "user-test"
  }, {
    path: "/",
    component: _ce512370,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
