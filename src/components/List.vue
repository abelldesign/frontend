<template>
  <main class='container'>
    <div class='content-summary'>
      <h1>{{ pageData.Title.value }}</h1>
      <div v-if='pageData.Description'>{{ pageData.Description.value }}</div>
    </div>

    <ul class='content items'>
      <li v-for='item in itemData.items'>
        <h2>{{ item.Title.value }}</h2>
        <div
          class='description'
          v-if='item.Description && item.Description.value'
        >
          {{ item.Description.value }}
        </div>
        <ul>
          <li v-for='imageItem in item.Images.value' class='image-container'>
            <a :href='imageItem.text'>
              <img :src='imageItem.text' />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<script>
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
      return this.$store.getters.getData[this.itemName] || {
        Title: {},
        Description: {}
      }
    },
    pageData () {
      return this.$store.getters.getData[this.pageName] || {
        Title: {},
        Description: {}
      }
    }
  }
}
</script>

