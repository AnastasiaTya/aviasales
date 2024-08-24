const sortTickets = (arr, sortType) => {
  if (sortType === 'Самый дешевый') {
    return arr.toSorted((a, b) => a.price - b.price)
  }
  if (sortType === 'Самый быстрый') {
    return arr.toSorted((a, b) => {
      const sumOfDurationA = a.segments[0].duration + a.segments[1].duration
      const sumOfDurationB = b.segments[0].duration + b.segments[1].duration
      return sumOfDurationA - sumOfDurationB
    })
  }
  return arr.toSorted((a, b) => a.price - b.price)
}

export default sortTickets
