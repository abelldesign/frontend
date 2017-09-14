import Vue from 'vue'
import Router from 'vue-router'

import Brochures from '@/components/Brochures'
import Home from '@/components/Home'
import Missing from '@/components/Missing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/brochures',
      name: 'Brochures',
      component: Brochures
    },
    {
      path: '*',
      name: 'Missing',
      component: Missing
    }
  ]
})
