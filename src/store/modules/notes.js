import { mockNotes } from '@/mock'
import { defaultStatus, defaultMutations, defaultGetters } from '@/store/helpers'

const state = () => defaultStatus

const actions = {
  fetchNotes ({ commit }) {
    mockNotes.getNotes(notes => {
      commit('saveItems', notes)
    })
  },

  async createNote ({ commit }, note) {
    return await new Promise(resolve => {
      mockNotes.createNote(
        note,
        (note) => {
          commit('saveItem', note)
          resolve(note)
        },
        () => {
          resolve()
        }
      )
    })
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