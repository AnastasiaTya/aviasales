const transfer = (arr) => {
  if (arr.length === 1) return '1 пересадка'
  if (arr.length === 2) return '2 пересадки'
  if (arr.length === 3) return '3 пересадки'
  return 'Без пересадки'
}

export default transfer
