import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from './views/LoginPage.vue'
import SignupPage from './views/SignupPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: SignupPage
    }
  ]
})
