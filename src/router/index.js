import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue'),

    children: [
      {
        path: '/info/objetivos',
        name: 'InfoObjetivos',
        component: () => import(/* webpackChunkName: "about" */ '../views/InfoObjetivos.vue'),
      },
      {
        path: '/info/tiempo',
        name: 'InfoTiempo',
        component: () => import(/* webpackChunkName: "about" */ '../views/InfoTiempo.vue'),
      },
      {
        path: '/info/fin',
        name: 'InfoFin',
        component: () => import(/* webpackChunkName: "about" */ '../views/InfoFin.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
