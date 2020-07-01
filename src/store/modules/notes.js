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

  createNote ({ commit }) {
    mockNotes.createNote(note => {
      commit('setNote', note)
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