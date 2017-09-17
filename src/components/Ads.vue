<template>
  <main class='container'>
    <div class='content-summary'>
      <h1>{{ page.Title }}</h1>
      <p v-if='page.Summary'>{{ page.Summary }}</p>
    </div>
    <ul class='content'>
      <li class="item" v-for='item in items'>
        <h2>{{ item.Title }}</h2>
        <div class='description'>{{ item.Description }}</div>
        <div class='image-container' v-for='imageFullPath in item.Images'>
          <span v-for='image in imageURLs' v-if='imageFullPath === image.fullPath'>
            <img :src='image.url' />
          </span>
        </div>
      </li>
    </ul>
    <Loading :loaded='dataLoaded' />
  </main>
</template>

<script>
import { db, storage } from '@/firebase.js'
import Loading from '@/components/Loading'

export default {
  name: 'Ads',
  data: function () {
    return {
      dataLoaded: false,
      imagesLoaded: false,
      imageURLs: []
    }
  },
  components: {
    Loading
  },
  firebase: function () {
    return {
      page: {
        source: db.ref('data/ads page'),
        asObject: true
      },
      items: {
        source: db.ref('data/ads'),
        readyCallback: () => {
          this.dataLoaded = true
        }
      },
      images: {
        source: db.ref('images'),
        readyCallback: () => {
          this.imagesLoaded = true
        }
      }
    }
  },
  watch: {
    imagesLoaded: function () {
      const current = this
      let urls = []
      const images = current.images

      for (var i = 0; i < images.length; i++) {
        const fullPath = images[i].fullPath
        const name = images[i].name

        storage.ref(fullPath).getDownloadURL().then(function (url) {
          urls.push({
            fullPath,
            name,
            url
          })

          current.imageURLs = urls
        })
      }
    }
  }
}
</script>

