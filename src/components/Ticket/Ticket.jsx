import transfer from '../../utils/transfer'
import convertFromMinutes from '../../utils/convertFromMinutes'
import formatFlightTimes from '../../utils/formatFlightTimes'
import getAirlineLogoURL from '../../utils/getAirlineLogoURL'

import styles from './Ticket.module.scss'

function Ticket({ ticket }) {
  if (!ticket) return null
  const { price, carrier, segments } = ticket
  const logoUrl = getAirlineLogoURL(carrier)
  let currentPrice = ''
  if (price > 99999) {
    currentPrice = `${price.toString().slice(0, 3)} ${price.toString().slice(3)}`
  } else {
    currentPrice = `${price.toString().slice(0, 2)} ${price.toString().slice(2)}`
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>{currentPrice} Р</h2>
        <img src={logoUrl} alt="logo" />
      </header>
      <div className={styles.info}>
        <span>{`${segments[0].origin} - ${segments[0].destination}`}</span>
        <span>В пути</span>
        <span className={styles.transfer}>{transfer(segments[0].stops)}</span>
      </div>
      <div className={styles.results}>
        <span>{formatFlightTimes(segments[0].date, segments[0].duration)}</span>
        <span className={styles.duration}>{convertFromMinutes(segments[0].duration)}</span>
        <span className={styles.transfer}>{segments[0].stops.join(' ')}</span>
      </div>
      <div className={styles.info}>
        <span>{`${segments[1].origin} - ${segments[1].destination}`}</span>
        <span>В пути</span>
        <span className={styles.transfer}>{transfer(segments[1].stops)}</span>
      </div>
      <div className={styles.results}>
        <span>{formatFlightTimes(segments[1].date, segments[1].duration)}</span>
        <span className={styles.duration}>{convertFromMinutes(segments[1].duration)}</span>
        <span className={styles.transfer}>{segments[1].stops.join(' ')}</span>
      </div>
    </div>
  )
}

export default Ticket
