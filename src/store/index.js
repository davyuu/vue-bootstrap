import Vue from 'vue'
import Vuex from 'vuex'

import modals from './modules/modals'
import notes from './modules/notes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modals,
    notes
  },
  strict: true
})