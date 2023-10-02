import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomePage.vue' // Make sure to import your Home Page component
import MenuPage from '@/views/MenuPage.vue' // Import MenuPage.vue

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
      component: MenuPage // Set MenuPage.vue as the component for the '/menu' route
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})
