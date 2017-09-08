<template>
  <main>
    <h1>{{ homepage.Title }}</h1>
    <h2 v-if='homepage.Subtitle'>{{ homepage.Subtitle }}</h2>
  </main>
</template>

<script>
import { db } from '@/firebase.js'

export default {
  name: 'Missing',
  firebase: function () {
    console.log(db)
    return {
      homepage: {
        source: db.ref('data/homepage'),
        asObject: true
      }
    }
  }
}
</script>


