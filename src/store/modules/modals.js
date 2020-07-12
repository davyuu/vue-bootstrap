import Vue from 'vue'

const state = () => ({
  data: {}
})

const actions = {
  open: function open ({ commit }, name) {
    commit('open', name)
  },
  close: function close ({ commit }, name) {
    commit('close', name)
  }
}

const mutations = {
  open: (state, { name, context }) => {
    if (!state.data[name]) {
      Vue.set(state.data, name, context)
    } else {
      console.warn('$modal.open - open action rejected, modal is already open.')
    }
  },
  close: (state, name) => {
    Vue.delete(state.data, name)
  }
};

const getters = {
  openModals: (state) => Object.keys(state.data),
  modalOpen: (state) => (name) => !!state.data[name],
  modalContext: (state) => (name) => state.data[name]
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}