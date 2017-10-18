<template>
  <main class='container list-item' v-if='pageData.Title.value'>
    <div class='content-summary'>
      <h1>{{ pageData.Title.value }}</h1>
      <div v-if='pageData.Description'>{{ pageData.Description.value }}</div>
    </div>

    <ul class='content items' itemscope itemtype='http://schema.org/ItemList'>
      <li v-for='item in itemData.items' v-bind:key='item.Title.value'>
        <h2 itemprop='name'>{{ item.Title.value }}</h2>
        <div
          class='description'
          itemprop='description'
          v-if='item.Description && item.Description.value'
        >
          {{ item.Description.value }}
        </div>
        <ul>
          <li v-for='imageItem in item.Images.value' class='image-container' v-bind:key='imageItem.text'>
            <a :href='imageItem.text'>
              <img :src='imageItem.text' itemprop='image' />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
  <main v-else>
    <Loading />
  </main>
</template>

<script>
import Loading from './Loading'
export default {
  name: 'List',
  components: {
    'Loading': Loading
  },
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

<style lang="less">
.list-item {
  .image-container {
    margin-bottom: 20px;
    a {
      display: block;
      max-width: 100%;

      img {
        max-width: 50%;
      }
    }
  }
}
</style>