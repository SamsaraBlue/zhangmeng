import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import news from './modules/new.js'
import messages from './modules/message.js'
import specials from './modules/special.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    news,
    messages,
    specials
  }
})

export default store
