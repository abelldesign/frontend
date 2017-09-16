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
        <div class='image-container' v-for='image in item.Images'>
          <img :src='image' />
        </div>
      </li>
    </ul>
    <Loading :loaded='loaded' />
  </main>
</template>

<script>
import { db } from '@/firebase.js'
import Loading from '@/components/Loading'

export default {
  name: 'Logos',
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
      page: {
        source: db.ref('data/logospage'),
        asObject: true
      },
      items: {
        source: db.ref('data/logos'),
        readyCallback: () => {
          this.loaded = true
        }
      }
    }
  }
}
</script>

