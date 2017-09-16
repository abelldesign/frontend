<template>
  <main class="app">
    <ul v-if='loaded' class='items container'>
      <li v-for='item in data' v-if='item.Title'>
        <span v-for='content in data' v-if='item.Title.toLowerCase() === content[".key"]'>
          <span v-for='key in Object.keys(content)' v-if='(key !== ".key") && (content[key]["Show on Homepage"])'>
            <router-link :to='item.Url'>
              <div class='item'>
                <img v-if='content[key].Images[0]' :src='content[key].Images[0]' />
                <div>{{ item.Title }}</div>
              </div>
            </router-link>
          </span>
        </span>
      </li>
    </ul>
    <div class='clearfix' />
    <Loading :loaded='loaded' />
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
      data: {
        source: db.ref('data'),
        readyCallback: () => {
          this.loaded = true
        }
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
