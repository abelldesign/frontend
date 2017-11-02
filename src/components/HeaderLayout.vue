<template>
  <header>
    <div class="logo">
      <router-link to='/'><img itemprop="logo" :src="logo" alt="Logo" /></router-link>
    </div>
    <div class="page-title"><router-link to='/' itemprop="name">Abell Design</router-link></div>
    <nav>
      <ul>
        <li v-for='item in menuItems' :key='item.Text.value'>
          <a target="_blank" :href='item.URL.value' v-if='item.URL.value.includes("http")'>{{ item.Text.value }}</a>
          <router-link v-else :to='item.URL.value'>{{ item.Text.value }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import '@/assets/MyFontsWebfontsKit.css'
import logo from '@/assets/logo.svg'

export default {
  name: 'HeaderLayout',
  data: function () {
    return {
      logo
    }
  },
  computed: {
    menuItems () {
      const menuLinks = this.$store.getters.getData['Menu Links'] || {}
      const linkItems = menuLinks.items || {}
      let formattedItems = []

      for (const key in linkItems) {
        const item = linkItems[key]
        formattedItems.push(item)
      }

      return formattedItems
    }
  }
}
</script>

<style lang="less">
  @turquoise: #90c5c2;
  @sky: #e0f2f1;
  @grey: #b1c2c1;
  @slate: #3c3c3b;

  header {
    background: @sky;
    color: @slate;

    &::before {
      display: block;
      content: " ";
      border-top: 10px solid @turquoise;
      border-bottom: 2px solid #fff;
    }

    &::after {
      display: block;
      content: " ";
      clear: both;
    }

   .logo {
      float: left;
      padding-left: 5px;
      height: 70px;

      img {
        height: 50px;
        padding: 10px 0;
      }
    }

    .page-title {
      float: left;
      font-size: 40px;
      text-align: center;
      height: 70px;
      line-height: 70px;
      width: 200px;
      margin-left: 20px;
      font-family: 'BodoniSvntytwoITCStd-Book', serif;

      @media screen and (min-width: 699px) {
        float: none;
        margin: 0 auto;
      }
    }

    .menu-icon {
      float: right;
      font-size: 100px;
      letter-spacing: -10px;
      margin: -28px 20px 0 0;
      height: 70px;
      color: @turquoise;
      line-height: 70px;
      vertical-align: middle;
      display: none;

      @media screen and (min-width: 699px) {
        margin-top: -98px;
      }
    }

    nav {
      background: @turquoise;
      border-top: 2px solid #fff;
      clear: both;

      li {
        padding: 5px 10px;
        font-family: 'Lato', sans-serif;
        display: inline-block;
      }
    }
  }
</style>
