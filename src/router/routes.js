import { db } from '@/firebase'
import Ads from '@/components/Ads'
import Brochures from '@/components/Brochures'
import BusinessStationery from '@/components/BusinessStationery'
import DisplayBanners from '@/components/DisplayBanners'
import Ebooks from '@/components/Ebooks'
import Logos from '@/components/Logos'
import Magazines from '@/components/Magazines'
import Packaging from '@/components/Packaging'
import Posters from '@/components/Posters'
import PrintedMerchandise from '@/components/PrintedMerchandise'
import StickersLabels from '@/components/StickersLabels'
import Tablecloths from '@/components/Tablecloths'

export const components = [
  Ads,
  Brochures,
  BusinessStationery,
  DisplayBanners,
  Ebooks,
  Logos,
  Magazines,
  Packaging,
  Posters,
  PrintedMerchandise,
  StickersLabels,
  Tablecloths
]

const urlList = new Promise((resolve, reject) => {
  db.ref('/data/').once('value').then(function (snapshot) {
    const val = snapshot.val()
    let urls = []
    const keys = Object.keys(val)

    for (var i = 0; i < keys.length; i++) {
      const key = keys[i]
      const item = val[key]

      if (item.Url) {
        urls.push({
          name: item.Title,
          url: item.Url
        })
      }
    }

    resolve(urls)
  })
})

const completedRoutes = []

const completedRouteList = new Promise((resolve, reject) => {
  urlList.then((routes) => {
    for (var i = 0; i < routes.length; i++) {
      const route = routes[i]

      for (var j = 0; j < components.length; j++) {
        const component = components[j]

        if (component.name === route.name.replace(' ', '')) {
          completedRoutes.push({
            path: route.url,
            name: route.name,
            component
          })
        }
      }
    }

    resolve(completedRoutes)
  })
})

export default completedRouteList
