import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomePage.vue' // Import HomePage.vue
import MenuPage from '@/views/MenuPage.vue' // Import MenuPage.vue
import AboutPage from '@/views/AboutPage.vue' // Import AboutPage.vue
import LocationPage from '@/views/LocationPage.vue' // Import LocationPage.vue
import CareerPage from '@/views/CareerPage.vue' // Import CareerPage.vue
import DataPage from '@/views/DataPage.vue' // Import DataPage.vue

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/location',
      name: 'location',
      component: LocationPage
    },
    {
      path: '/career',
      name: 'career',
      component: CareerPage
    },
    {
      path: '/data',
      name: 'data',
      component: DataPage
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})
