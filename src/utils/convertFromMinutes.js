const convertFromMinutes = (min) => {
  const hours = Math.floor(min / 60)
  let minutes = min - hours * 60
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  return `${hours}Ч ${minutes}М`
}

export default convertFromMinutes
