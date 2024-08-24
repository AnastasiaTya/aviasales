export const sortBy = (sortType) => ({
  type: 'SORT_TYPE',
  payload: sortType,
})

export const toggleAllFilters = (checked) => ({
  type: 'TOGGLE_ALL',
  payload: checked,
})

export const toggleFilter = (id, checked) => ({
  type: 'TOGGLE_FILTER',
  payload: { id, checked },
})

export const ticketsLoaded = () => async (dispatch) => {
  const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
  const searchIdData = await searchIdResponse.json()

  const fetchTicket = async () => {
    try {
      const ticketsResponse = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchIdData.searchId}`
      )
      if (!ticketsResponse.ok) throw new Error('oooooooooooopsssssssss')
      const ticketsData = await ticketsResponse.json()
      dispatch({
        type: 'TICKETS_LOADED',
        data: ticketsData,
      })
      const stopLoading = ticketsData.stop
      if (!stopLoading) {
        setTimeout(fetchTicket, 1000)
      }
    } catch (err) {
      setTimeout(fetchTicket, 1000)
    }
  }
  fetchTicket()
}
