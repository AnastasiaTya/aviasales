const initialState = {
  sortType: 'Самый дешевый',
}

const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_TYPE':
      return { ...state, sortType: action.payload }
    default:
      return state
  }
}

export default sortingReducer
