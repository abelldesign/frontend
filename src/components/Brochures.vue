<template>
  <main class='container'>
    <p>{{ brochuresPage.Summary }}</p>
    <ul>
      <li class="brochure" v-for='brochure in brochures'>

        <div v-for='image in images' v-if='image.name === brochure.Image'>
          <img :src='image.downloadURLs[0]' />
        </div>
        <h1>{{ brochure.Title }}</h1>
        <div>{{ brochure.Caption }}</div>
      </li>
    </ul>
    <Loading :loaded='loaded' />
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
      brochuresPage: {
        source: db.ref('data/brochurespage'),
        asObject: true
      },
      brochures: {
        source: db.ref('data/brochures'),
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

<style lang='less'>
  .brochure {
    width: 50%;
    float: left;

    img {
      width: 100%;
    }

    h1 {
      display: block;
      width: 100%;
    }
  }
</style>
