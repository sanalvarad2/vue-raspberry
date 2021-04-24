import Vue from 'vue'
import VueRouter from 'vue-router'
import principal from '../views/principal'
import loquesea from '../views/LoQueSea'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: principal
  },
  {
    path: '/LoQueSea',
    name: 'NewPedido',
    component: loquesea
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
