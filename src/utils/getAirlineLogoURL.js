function getAirlineLogoURL(iataCode, width = 100, height = 60) {
  return `http://pics.avs.io/${width}/${height}/${iataCode}.png`
}

export default getAirlineLogoURL
