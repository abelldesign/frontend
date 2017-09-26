import firebase from 'firebase'

export const actions = {
  watchImageData ({ commit }) {
    firebase.database().ref('images').on('value', (snapshot) => {
      commit('setImageData', snapshot.val())
    })
  },

  watchData ({ commit }) {
    firebase.database().ref('data').on('value', (snapshot) => {
      commit('setData', snapshot.val())
    })
  }
}
