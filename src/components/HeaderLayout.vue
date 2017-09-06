<template>
  <header>
    <div class="logo">
      <router-link to='/'><img :src="logo" alt="Logo" /></router-link>
    </div>
    <div class="page-title"><router-link to='/'>Abell Design</router-link></div>
    <div class="menu-icon">...</div>
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
  }
</style>
