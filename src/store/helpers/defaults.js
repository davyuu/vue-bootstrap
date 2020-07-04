const defaultStatus = {
  items: [],
  status: {
    fetching: false,
    fetched: false,
    failed: false,
    errors: []
  }
}

const defaultMutations = {
  saveItems: (state, items) => {
    state.items = items
  },
  saveItem: (state, item) => {
    state.items = [
      ...state.items,
      item
    ]
  },
  fetching: (state) => {
    state.status.fetching = true
    state.status.fetched = false
    state.status.failed = false
  },
  fetched: (state) => {
    state.status.fetching = false
    state.status.fetched = true
  },
  failed: (state, error) => {
    state.status.failed = true
    if (error) {
      state.status.errors.push(error)
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
  defaultStatus,
  defaultMutations,
  defaultGetters
}
