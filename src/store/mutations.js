export const mutations = {
  setError (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setImageData (state, payload) {
    state.imageData = payload
  },
  setData (state, payload) {
    state.data = payload
  }
}
