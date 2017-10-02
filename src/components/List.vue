<template>
  <main class='container'>
    <div class='content-summary'>
      <h1
        v-for='data in pageData.dataset'
        v-if='data.name === "Title"'
      >
        {{ data.value }}
      </h1>
      <div
        v-for='data in pageData.dataset'
        v-if='data.name === "Description"'
      >
        {{ data.value }}
      </div>
    </div>
    <ul class='content items'>
      <li v-for='item in itemData.items' class='item'>
        <h2>
          {{ item.name }}
        </h2>
        <div v-for='dataItem in item.dataset' v-if='dataItem.name === "Description"'>
          {{ dataItem.value }}
        </div>
        <ul v-for='imageItem in item.dataset' v-if='imageItem.name === "Images"' class='image-container'>
          <li v-for='image in imageItem.value'>
            <a :href='`https://storage.googleapis.com/abell-design.appspot.com/images/${image.text}`'>
              <img :src='`https://storage.googleapis.com/abell-design.appspot.com/images/${image.text}`' />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'List',
  data () {
    return {
      imageData: {}
    }
  },
  created () {
    this.images
  },
  computed: {
    itemName () {
      return this.$route.name
    },
    pageName () {
      return this.$route.meta.page
    },
    itemData () {
      return this.$store.getters.getData[this.itemName] || {}
    },
    pageData () {
      return this.$store.getters.getData[this.pageName] || {}
    },
    images () {
      let imageObject = {}

      for (let key in this.itemData.items) {
        const item = this.itemData.items[key]
        imageObject[item.name] = []

        for (let data of item.dataset) {
          if (data.name === 'Images') {
            for (let image of data.value) {
              firebase.storage().ref('images/' + image.text).getDownloadURL().then((url) => {
                imageObject[item.name].push(url)
                this.imageData = imageObject
              })
            }
          }
        }
      }
    }
  }
}
</script>

