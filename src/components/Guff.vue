<template>
  <main>
    <div v-for="logo in logos">
      <div v-if="logo.Image">
        <img :src="images[logo.Image.replace('.', '')].downloadURLs[0]" />
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
        asObject: true,
        readyCallback: () => {
          this.loaded = true
        }
      },
      images: {
        source: db.ref('images'),
        asObject: true
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
