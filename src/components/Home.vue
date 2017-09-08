<template>
  <main>
    <div v-if='loaded'>
      <h1>{{ homepage.Title }}</h1>
      <h2 v-if='homepage.Subtitle'>{{ homepage.Subtitle }}</h2>
    </div>
    <Loading v-else />
  </main>
</template>

<script>
import { db } from '@/firebase.js'
import Loading from '@/components/Loading'

export default {
  name: 'Homepage',
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
      homepage: {
        source: db.ref('data/homepage'),
        asObject: true,
        readyCallback: () => {
          this.loaded = true
        }
      }
    }
  }
}
</script>

