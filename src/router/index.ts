import VueRouter, { RouteConfig } from 'vue-router'

import Vue from 'vue'

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
    {
      path: '/login', 
      component: () => import(/* webpackChunkName: "login" */ '@/components/Login.vue'), //src\components\Login.vue
      meta: { hidden: true }
    },
]

const createRouter = () => new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    // base: process.env.BASE_URL,
    routes: constantRoutes
  })

const router = createRouter()

export default router