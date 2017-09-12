<template>
  <main>
    <div v-for="logo in logos">
      <div v-for="image in images">
        <div v-if="image.name === logo.Image">
          <img :src="image.downloadURLs[0]" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { db } from '@/firebase.js'
import Loading from '@/components/Loading'

export default {
  name: 'Guff',
  data: function () {
    return {
      loaded: false
    }
  },
  components: {
    Loading
  },
  firebase: function () {
    return {
      logos: {
        source: db.ref('data/logos'),
        readyCallback: () => {
          this.loaded = true
        }
      },
      images: {
        source: db.ref('images')
      }
    }
  }
}
</script>

<style>
  img {
    width: 200px;
  }
</style>
