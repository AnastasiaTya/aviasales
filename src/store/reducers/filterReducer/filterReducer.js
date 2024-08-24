const initialState = {
  filters: {
    all: false,
    noTransfers: true,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ALL':
      return {
        ...state,
        filters: {
          all: action.payload,
          noTransfers: action.payload,
          oneTransfer: action.payload,
          twoTransfers: action.payload,
          threeTransfers: action.payload,
        },
      }
    case 'TOGGLE_FILTER':
      const newFilters = {
        ...state.filters,
        [action.payload.id]: action.payload.checked,
      }
      const allChecked = Object.keys(newFilters).every((key) => key === 'all' || newFilters[key] === true)

      return {
        ...state,
        filters: {
          ...newFilters,
          all: allChecked,
        },
      }
    default:
      return state
  }
}

export default filterReducer
