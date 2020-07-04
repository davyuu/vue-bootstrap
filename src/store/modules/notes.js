import axios from 'axios'
import { defaultStatus, defaultMutations, defaultGetters } from '@/store/helpers'

const state = () => defaultStatus

const actions = {
  async fetchNotes ({ commit }) {
    const res = await axios.get('http://localhost:3000/notes')
    commit('saveItems', res.data)
  },

  async createNote ({ commit }, note) {
    try {
      const res = await axios.post('http://localhost:3000/notes', { note })
      commit('saveItem', res.data)
      return res.data
    } catch(error) {
      commit('failed', error)
      return null
    }
  }
}

const mutations = {
  ...defaultMutations
}

const getters = {
  ...defaultGetters
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}