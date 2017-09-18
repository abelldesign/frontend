import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
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
      path: '/ads',
      name: 'Ads',
      component: List,
      meta: {
        page: 'data/ads page',
        items: 'data/ads'
      }
    },
    {
      path: '/brochures',
      name: 'Brochures',
      component: List,
      meta: {
        page: 'data/brochures page',
        items: 'data/brochures'
      }
    },
    {
      path: '/business-stationery',
      name: 'Business Stationery',
      component: List,
      meta: {
        page: 'data/business stationery page',
        items: 'data/business stationery'
      }
    },
    {
      path: '/display-banners',
      name: 'Display Banners',
      component: List,
      meta: {
        page: 'data/display banners page',
        items: 'data/display banners'
      }
    },
    {
      path: '/documents',
      name: 'Documents',
      component: List,
      meta: {
        page: 'data/documents page',
        items: 'data/documents'
      }
    },
    {
      path: '/ebooks',
      name: 'eBooks',
      component: List,
      meta: {
        page: 'data/ebooks page',
        items: 'data/ebooks'
      }
    },
    {
      path: '/logos',
      name: 'Logos',
      component: List,
      meta: {
        page: 'data/logos page',
        items: 'data/logos'
      }
    },
    {
      path: '/magazines',
      name: 'Magazines',
      component: List,
      meta: {
        page: 'data/magazines page',
        items: 'data/magazines'
      }
    },
    {
      path: '/packaging',
      name: 'Packaging',
      component: List,
      meta: {
        page: 'data/packaging page',
        items: 'data/packaging'
      }
    },
    {
      path: '/posters',
      name: 'Posters',
      component: List,
      meta: {
        page: 'data/posters page',
        items: 'data/posters'
      }
    },
    {
      path: '/print-services',
      name: 'Print Services',
      component: List,
      meta: {
        page: 'data/print services page',
        items: 'data/print services'
      }
    },
    {
      path: '*',
      name: 'Missing',
      component: Missing
    }
  ]
})

