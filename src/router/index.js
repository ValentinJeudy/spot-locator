import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Gmap from '@/components/Gmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/map',
      name: 'Gmap',
      component: Gmap
    }
  ]
})
