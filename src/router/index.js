import Vue from 'vue'
import Router from 'vue-router'
import Ads from '@/components/Ads'
import Brochures from '@/components/Brochures'
import BusinessStationery from '@/components/BusinessStationery'
import DisplayBanners from '@/components/DisplayBanners'
import Ebooks from '@/components/Ebooks'
import Home from '@/components/Home'
import Logos from '@/components/Logos'
import Magazines from '@/components/Magazines'
import Missing from '@/components/Missing'
import Packaging from '@/components/Packaging'
import Posters from '@/components/Posters'
import PrintedMerchandise from '@/components/PrintedMerchandise'
import StickersLabels from '@/components/StickersLabels'
import Tablecloths from '@/components/Tablecloths'

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
      path: '/merchandise',
      name: 'Printed Merchandise',
      component: PrintedMerchandise
    },
    {
      path: '/labels',
      name: 'Stickers and Labels',
      component: StickersLabels
    },
    {
      path: '/tablecloths',
      name: 'Tablecloths',
      component: Tablecloths
    },
    {
      path: '*',
      name: 'Missing',
      component: Missing
    }
  ]
})

