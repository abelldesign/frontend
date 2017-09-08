import Vue from 'vue'
import Router from 'vue-router'

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
      path: '*',
      name: 'Missing',
      component: Missing
    }
  ]
})
