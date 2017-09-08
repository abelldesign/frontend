<template>
  <div class='loading'>
    <div class='spinner'>
      <Loader color='#90c5c2' />
    </div>
    <h1>Loading...</h1>
  </div>
</template>

<script>
import Loader from 'vue-spinner/src/MoonLoader'

export default {
  name: 'Loading',
  components: {
    Loader
  }
}
</script>

<style>
  .loading {
    color: #90c5c2;
    text-align: center;
  }

  .loading h1 {
    color: #90c5c2;
  }

  .spinner {
    width: 77px;
    margin: 0 auto;
  }

  .v-moon1 {
    width: 77px !important;
    height: 77px !important;
  }
</style>
