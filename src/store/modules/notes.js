import { mockNotes } from '@/mock'

const state = () => ({
  notes: []
})

const actions = {
  getNotes ({ commit }) {
    mockNotes.getNotes(notes => {
      commit('setNotes', notes)
    })
  },

  async createNote ({ commit }, note) {
    return await new Promise(resolve => {
      mockNotes.createNote(
        note,
        (note) => {
          commit('setNote', note)
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
  setNotes (state, notes) {
    state.notes = notes
  },

  setNote (state, note) {
    state.notes = [
      ...state.notes,
      note
    ]
  }
}

const getters = {
  notes: s => s.notes
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}