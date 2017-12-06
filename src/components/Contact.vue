<template>
  <main class='container'>
    <div v-if='contact.Deck.value.length > 0'>
      <p>{{ contact.Deck.value }}</p>

      <form action="https://formspree.io/grace@abelldesign.co.uk" method="POST">
        <input type="text" name="name" placeholder='Your Name'>
        <input type="email" name="_replyto" placeholder='Your Email'>
        <textarea name='project' placeholder='Tell me about your project' />
        <input type="submit" value="Send">
      </form>
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
      let contact = data['Contact Page'] || {
        Deck: {
          value: ''
        },
      }

      return contact
    }
  }
}
</script>

<style>
  form {
    width: 320px;
    margin: 30px auto 0;
  }
  input[type='text'], input[type='email'] {
    display: block;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    color: #000;
    border-radius: 3px;
    border: 1px solid #ddd;
    font-family: 'Lato', sans-serif;
  }
  textarea {
    display: block;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    color: #000;
    border-radius: 3px;
    border: 1px solid #ddd;
    font-family: 'Lato', sans-serif;
    min-height: 6rem;
    max-width: 100%;
  }
  input[type='submit'] {
    border: 0;
    padding: 10px;
    color: #fff;
    background: #90c5c2;
    border-radius: 3px;
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    width: 100px;
    display: block;
  }
</style>