import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getGlobalLocation: window.location.origin
  },
  mutations: {

  },
  actions: {
    login (context, dataForSend) {
      console.log(window.location.origin)
      return axios({
        method: 'GET',
        url: `${this.state.getGlobalLocation}/api/login`,
        data: dataForSend
      })
    },
    registration (context, dataForSend) {
      console.log(window.location.origin)
      return axios({
        method: 'GET',
        url: `${this.state.getGlobalLocation}/api/registration`,
        data: dataForSend
      })
    }
  }
})
