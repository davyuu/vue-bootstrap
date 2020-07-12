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
  open: (s, { name, context }) => {
    if (!s.data[name]) {
      Vue.set(s.data, name, context)
    } else {
      console.warn('$modal.open - open action rejected, modal is already open.')
    }
  },
  close: (s, name) => {
    Vue.delete(s.data, name)
  }
};

const getters = {
  openModals: (s) => Object.keys(s.data),
  modalOpen: (s) => (name) => !!s.data[name],
  modalContext: (s) => (name) => s.data[name]
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}