<template>
  <main class='container'>
    <div v-if='contact.Deck.value.length > 0'>
      <p>{{ contact.Deck.value }}</p>
    </div>
    <Loading v-else />
  </main>
</template>

<script>
import Loading from './Loading'
export default {
  components: {
    'Loading': Loading
  },
  computed: {
    contact () {
      const data = this.$store.getters.getData || {}
      const contact = data['Contact Page'] || {
        Deck: {
          value: ''
        },
        Embed: {
          value: ''
        }
      }
      return contact
    }
  }
}
</script>