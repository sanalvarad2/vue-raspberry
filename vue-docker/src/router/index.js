import Vue from 'vue'
import VueRouter from 'vue-router'
import principal from '../views/principal'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: principal
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
