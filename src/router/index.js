import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/ads',
      name: 'Ads',
      component: List,
      meta: {
        page: 'Ads Page',
        items: 'Ads'
      }
    },
    {
      path: '/brochures',
      name: 'Brochures',
      component: List,
      meta: {
        page: 'Brochures Page',
        items: 'Brochures'
      }
    },
    {
      path: '/business-stationery',
      name: 'Business Stationery',
      component: List,
      meta: {
        page: 'Business Stationery Page',
        items: 'Business Stationery'
      }
    },
    {
      path: '/display-banners',
      name: 'Display Banners',
      component: List,
      meta: {
        page: 'Display Banners Page',
        items: 'Display Banners'
      }
    },
    {
      path: '/documents',
      name: 'Documents',
      component: List,
      meta: {
        page: 'Documents Page',
        items: 'Documents'
      }
    },
    {
      path: '/ebooks',
      name: 'Ebooks',
      component: List,
      meta: {
        page: 'Ebooks Page',
        items: 'Ebooks'
      }
    },
    {
      path: '/logos',
      name: 'Logos',
      component: List,
      meta: {
        page: 'Logos Page',
        items: 'Logos'
      }
    },
    {
      path: '/magazines',
      name: 'Magazines',
      component: List,
      meta: {
        page: 'Magazines Page',
        items: 'Magazines'
      }
    },
    {
      path: '/packaging',
      name: 'Packaging',
      component: List,
      meta: {
        page: 'Packaging Page',
        items: 'Packaging'
      }
    },
    {
      path: '/posters',
      name: 'Posters',
      component: List,
      meta: {
        page: 'Posters Page',
        items: 'Posters'
      }
    },
    {
      path: '/print-services',
      name: 'Print Services',
      component: List,
      meta: {
        page: 'Print Services Page',
        items: 'Print Services'
      }
    },
    {
      path: '*',
      name: 'Missing',
      component: Missing
    }
  ]
})

