const filterTickets = (arr, filters) => {
  if (filters.all) return arr

  const noTransfers = arr.filter(
    (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
  )
  const oneTransfer = arr.filter(
    (ticket) => ticket.segments[0].stops.length <= 1 && ticket.segments[1].stops.length <= 1
  )
  const twoTransfers = arr.filter(
    (ticket) =>
      (ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length < 3) ||
      (ticket.segments[1].stops.length === 2 && ticket.segments[0].stops.length < 3)
  )
  const threeTransfers = arr.filter(
    (ticket) => ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3
  )

  const obj = {
    noTransfers,
    oneTransfer,
    twoTransfers,
    threeTransfers,
  }

  const result = []

  const allFilters = Object.keys(filters)
  const enabledFilters = allFilters.filter((item) => filters[item])

  enabledFilters.forEach((item) => result.push(...obj[item]))

  return result
}

export default filterTickets
