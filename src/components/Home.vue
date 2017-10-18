<template>
  <div>
    <main class="home app items" v-if='items.length > 0'>
      <div class='intro'>
        <p itemprop='description'>{{ intro }}</p>
      </div>

      <ul itemscope itemtype="http://schema.org/ItemList">
        <li v-for='item in items' v-bind:key='item.Title.value' class='item'>
          <a :href='item.URL.value' itemprop='url'>
            <img :src='item["Homepage Image"].value[0].text' itemprop='image' />
            <div class='name' itemprop='name'>{{ item.Title.value }}</div>
          </a>
        </li>
      </ul>
    </main>
    <main v-else>
      <Loading />
    </main>
    <div class='clearfix' />
  </div>
</template>

<script>
import firebase from 'firebase'
import Loading from './Loading'

export default {
  components: {
    'Loading': Loading
  },
  data () {
    return {
      pageItems: [
        'Ads Page',
        'Brochures Page',
        'Business Stationery Page',
        'Documents Page',
        'Ebooks Page',
        'Logos Page',
        'Magazines Page',
        'Packaging Page',
        'Posters Page',
        'Print Services Page'
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
          if (dataKey === pageItem) {
            items.push(item)
          }
        }
      }

      return items
    },
    intro () {
      const homepage = this.$store.getters.getData.Homepage || {
        Intro: {
          value: ''
        }
      }

      return homepage.Intro.value
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
  @media screen and (min-width: 700px) {
    width: 660px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    width: 900px;
    margin: 0 auto;
  }

  .intro {
    background: #e0f2f1;
    padding: 20px;
    margin: 20px;

    p {
      margin-bottom: 0;
    }
  }

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

    @media screen and (min-width: 700px) {
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
