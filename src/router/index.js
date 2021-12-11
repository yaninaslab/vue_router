import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import BreweryPage from '@/views/BreweryPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'HomePage',
    component: HomePage
  },
  {
    path: "/about",
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: "/brewery",
    name: 'BreweryPage',
    component: BreweryPage

  },
  {
    path: "*",
    name: 'PageNotFound',
    component: PageNotFound

  },

]


const router = new VueRouter({
  routes
})

export default router
