import Vue from 'vue'
import Router from 'vue-router'
import Ads from '@/components/Ads'
import Brochures from '@/components/Brochures'
import BusinessStationery from '@/components/BusinessStationery'
import DisplayBanners from '@/components/DisplayBanners'
import Documents from '@/components/Documents'
import Ebooks from '@/components/Ebooks'
import Home from '@/components/Home'
import Logos from '@/components/Logos'
import Magazines from '@/components/Magazines'
import Missing from '@/components/Missing'
import Packaging from '@/components/Packaging'
import Posters from '@/components/Posters'
import PrintServices from '@/components/PrintServices'
import StickersLabels from '@/components/StickersLabels'

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
      component: Ads
    },
    {
      path: '/brochures',
      name: 'Brochures',
      component: Brochures
    },
    {
      path: '/business-stationery',
      name: 'Business Stationery',
      component: BusinessStationery
    },
    {
      path: '/display-banners',
      name: 'Display Banners',
      component: DisplayBanners
    },
    {
      path: '/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/ebooks',
      name: 'eBooks',
      component: Ebooks
    },
    {
      path: '/logos',
      name: 'Logos',
      component: Logos
    },
    {
      path: '/magazines',
      name: 'Magazines',
      component: Magazines
    },
    {
      path: '/packaging',
      name: 'Packaging',
      component: Packaging
    },
    {
      path: '/posters',
      name: 'Posters',
      component: Posters
    },
    {
      path: '/print-services',
      name: 'Print Services',
      component: PrintServices
    },
    {
      path: '/labels',
      name: 'Stickers and Labels',
      component: StickersLabels
    },
    {
      path: '*',
      name: 'Missing',
      component: Missing
    }
  ]
})

