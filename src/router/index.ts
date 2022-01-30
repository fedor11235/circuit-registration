import VueRouter, { RouteConfig } from 'vue-router'

import Vue from 'vue'

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
    {
      path: '/login', 
      component: () => import(/* webpackChunkName: "login" */ '@/components/Login.vue'), 
    },
    {
      path: '/schemes', 
      component: () => import(/* webpackChunkName: "schemes" */ '@/components/Schemes.vue'), 
      // children: [
      //   {
      //     path: 'my-schemes',
      //     component: () => import(/* webpackChunkName: "schemes" */ '@/components/Schemes.vue'), 
      //   },
      // ],
    },

    {
      path: '/create-schemes', 
      component: () => import(/* webpackChunkName: "create-schemes" */ '@/components/CreateSchemes.vue'), 
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
    // base: '/login',
    routes: constantRoutes
  })

const router = createRouter()

export default router