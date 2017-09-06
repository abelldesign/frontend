import Vue from 'vue'
import Router from 'vue-router'
import Missing from '@/components/Missing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Missing',
      component: Missing
    }
  ]
})
