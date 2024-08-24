const initialState = {
  tickets: [],
  stop: false,
  loading: true,
}

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_LOADED':
      const newTickets = action.data.tickets
      const newState = state.tickets.concat(...newTickets)
      const newStop = action.data.stop
      return { ...state, tickets: newState, stop: newStop, loading: newStop ? false : state.loading }
    default:
      return state
  }
}

export default ticketReducer
