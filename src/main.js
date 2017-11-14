// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import firebase from 'firebase'
import App from './App'
import router from './router'
import { store } from './store'
import { firebaseConfig } from './config'

Vue.use(VueAnalytics, {
  id: 'UA-102804990-1',
  router
})

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    store.dispatch('watchImageData')
    store.dispatch('watchData')
  }
})

