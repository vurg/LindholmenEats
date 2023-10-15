import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomePage.vue' // Import HomePage.vue
import MenuPage from '@/views/MenuPage.vue' // Import MenuPage.vue
import AboutPage from '@/views/AboutPage.vue' // Import AboutPage.vue
import LocationPage from '@/views/LocationPage.vue' // Import LocationPage.vue
import CareerPage from '@/views/CareerPage.vue' // Import CareerPage.vue
import DataPage from '@/views/DataPage.vue' // Import DataPage.vue
import AdminPage from '@/views/AdminPage.vue' // Import AdminPage.vue
import AdminLogin from '@/views/AdminLogin.vue'
import { Api } from '@/Api' // Import AdminPage.vue

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
      component: MenuPage,
      props: route => ({
        selectedCategory: route.query.selectedCategory || 'Mains'
      })
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
      path: '/admin',
      name: 'admin',
      component: AdminPage,
      beforeEnter: (to, from, next) => {
        const token = sessionStorage.getItem('token')
        // console.log('Before enter (router): ')
        // console.log(token)

        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
          // Validate the token with the server
          Api.post('admin/validate', null, config)
            .then(() => {
              // Token is valid, allow access to AdminPage component
              next()
            })
            .catch(() => {
              // console.log('Token is invalid, redirecting to AdminLogin component')
              // Token is invalid, redirect to AdminLogin component
              next('/adminlogin')
            })
        } else {
          // console.log('No token is found')
          // No token found, redirect to AdminLogin component
          next('/adminlogin')
        }
      }
    },
    {
      path: '/adminlogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})
