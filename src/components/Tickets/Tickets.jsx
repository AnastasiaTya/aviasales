import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'

import { ticketsLoaded } from '../../store/actions/actions'
import sortTickets from '../../utils/sortTickets'
import filterTickets from '../../utils/filterTickets'
import Ticket from '../Ticket/Ticket'

import styles from './Tickets.module.scss'

function Tickets() {
  const [visibleTickets, setVisibleTickets] = useState(5)
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const sortType = useSelector((state) => state.sorting.sortType)
  const filters = useSelector((state) => state.filters.filters)

  const filteredTicketsArr = filterTickets(tickets, filters)
  const sortedTicketsArr = sortTickets(filteredTicketsArr, sortType)

  useEffect(() => {
    dispatch(ticketsLoaded())
  }, [dispatch])

  const showTickets = () => {
    setVisibleTickets((prev) => prev + 5)
  }
  return (
    <div className={styles.wrapper}>
      {!sortedTicketsArr.length && (
        <div>
          <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
        </div>
      )}
      {sortedTicketsArr.slice(0, visibleTickets).map((ticket) => (
        <Ticket key={uniqid(6)} ticket={ticket} />
      ))}
      {visibleTickets < sortedTicketsArr.length && (
        <button type="button" className={styles.button} onClick={showTickets}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default Tickets
