<template>
  <div>
    <main class="home app items">
      <div v-for='item in items' class='item'>
        <a
          v-for='urlData in item.dataset'
          :key='urlData.name'
          v-if='urlData.name === "URL"'
          :href='urlData.value'
        >
          <span
            v-for='imageData in item.dataset'
            :key='imageData.name'
            v-if='(imageData.name === "Homepage Image") && (imageData.value[0])'
          >
            <img :src='imageData.value[0].text' />
          </span>

          <span
            v-for='nameData in item.dataset'
            :key='nameData.name'
            v-if='nameData.name === "Title"'
          >
            <div class='name'>{{ nameData.value }}</div>
          </span>
        </a>
      </div>
    </main>
    <div class='clearfix' />
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      pageItems: [
        { name: 'Ads Page', url: '/ads' },
        { name: 'Brochures Page', url: '/brochures' },
        { name: 'Business Stationery Page', url: '/business-stationery' },
        { name: 'Display Banners Page', url: '/display-banners' },
        { name: 'Documents Page', url: '/documents' },
        { name: 'Ebooks Page', url: '/ebooks' },
        { name: 'Logos Page', url: '/logos' },
        { name: 'Magazines Page', url: '/magazines' },
        { name: 'Packaging Page', url: '/packaging' },
        { name: 'Posters Page', url: '/posters' },
        { name: 'Print Services Page', url: '/print-services' }
      ]
    }
  },
  computed: {
    items () {
      const data = this.$store.getters.getData
      const items = []

      for (let dataKey in data) {
        const item = data[dataKey]

        for (let pageItem of this.pageItems) {
          if (item.name === pageItem.name) {
            items.push(item)
          }
        }
      }

      return items
    }
  },
  methods: {
    getImage (name, itemName) {
      const fullPath = 'images/' + name

      firebase.storage().ref(fullPath).getDownloadURL().then((url) => {
        for (let pageItem of this.pageItems) {
          if (pageItem.name === itemName) {
            pageItem.url = url
          }
        }
      })
    }
  }
}
</script>

<style lang="less">
h1 {
	font-size: 30px;
	margin: 50px 0;
}

p {
	margin-bottom: 10px;
}

.clearfix {
  clear: both;
}

.home.items {
  .item {
    width: 50%;
    float: left;
    height: 200px;

    @media screen and (min-width: 475px) {
      height: 230px;
    }

    @media screen and (min-width: 545px) {
      height: 260px;
    }

    @media screen and (min-width: 699px) {
      width: 33.33%
    }
  }

  a {
    margin: 20px;
    display: block;
    text-align: center;

    img {
      max-height: 200px;
      max-width: 100%;
    }

    .name {
      height: 30px;
      overflow: hidden;
      line-height: 30px;
      text-align: center;
    }
  }
}

@media screen and (max-width: 400px) {
  .logo {
  	max-width: 200px;
  }

  h1 {
  	font-size: 24px;
  }
}

@media screen and (max-width: 200px) {
  .logo {
  	max-width: auto;
  	width: 80%;
  }

  a {
  	font-size: 12px;
  }

  h1 {
  	margin-bottom: 20px;
  }

  .social {
  	margin-top: 20px;
  }
}
</style>
