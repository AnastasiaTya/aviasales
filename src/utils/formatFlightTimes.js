import { parseISO, format, addMinutes } from 'date-fns'

const formatFlightTimes = (date, duration) => {
  const departureDate = parseISO(date)
  const formattedDeparture = format(departureDate, 'HH:mm')
  const arrivalDate = addMinutes(departureDate, duration)
  const formattedArrival = format(arrivalDate, 'HH:mm')
  return `${formattedDeparture} – ${formattedArrival}`
}

export default formatFlightTimes
