import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    value: 0
  },
  mutations: {
    inc: function (state) {
      state.value = state.value + 1
    }
  }
})

export default store
