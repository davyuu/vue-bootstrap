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
