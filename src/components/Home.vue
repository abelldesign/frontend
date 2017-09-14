<template>
  <main class="app">
    <ul v-if='loaded' class='items'>
      <li v-for='item in items' class='item'>
        <router-link :to='item.Url'>
          <div v-for='image in images' v-if='image.name === item.Image'>
            <img :src='image.downloadURLs[0]' />
            <div class="name">{{ item.id }}</div>
          </div>
        </router-link>
      </li>
    </ul>
    <div class='clearfix' />
    <div v-if='!loaded'>
      <h1>Loading...</h1>
    </div>
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
      items: {
        source: db.ref('data/homepageitems'),
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

.items {
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 1000px;
    margin: 0 auto;
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

    @media screen and (min-width: 699px) {
      width: 33.33%
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
