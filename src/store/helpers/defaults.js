import Vue from 'vue'

const defaultStatus = {
  fetching: false,
  fetched: false,
  failed: false,
  errors: []
}
const defaultState = {
  items: [],
  status: defaultStatus
}

const defaultMutations = {
  saveItems: (state, items) => {
    Vue.set(state, 'items', items)
  },
  saveItem: (state, item) => {
    const items = [...state.items, item]
    Vue.set(state, 'items', items)
  },
  fetching: (state) => {
    const status = { ...defaultStatus, fetching: true }
    Vue.set(state, 'status', status)
  },
  fetched: (state) => {
    Vue.set(state.status, 'fetching', false)
    Vue.set(state.status, 'fetched', true)
  },
  failed: (state, error) => {
    Vue.set(state.status, 'failed', true)
    if (error) {
      const errors = [...state.status.errors, errors]
      Vue.set(state.status, 'errors', errors)
    }
  }
}

const defaultGetters = {
  items: ({ items }) => items,
  fetching: ({ status }) => status.fetching,
  fetched: ({ status }) => status.fetched,
  failed: ({ status }) => status.failed
}

export {
  defaultState,
  defaultMutations,
  defaultGetters
}
