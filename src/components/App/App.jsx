import { useSelector } from 'react-redux'

import Logo from '../Logo'
import Tabs from '../Tabs'
import Tickets from '../Tickets/Tickets'
import Filter from '../Filter'
import Spinner from '../Spinner'

import styles from './App.module.scss'

function App() {
  const isLoading = useSelector((state) => state.tickets.loading)
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.container}>
        <Filter />
        <div>
          <Tabs />
          {isLoading && <Spinner />}
          <Tickets />
        </div>
      </div>
    </div>
  )
}

export default App
