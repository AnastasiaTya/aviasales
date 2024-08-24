import { useDispatch, useSelector } from 'react-redux'

import { sortBy } from '../../store/actions/actions'

import styles from './Tabs.module.scss'

function Tabs() {
  const dispatch = useDispatch()
  const sortType = useSelector((state) => state.sorting.sortType)

  const buttons = [{ label: 'Самый дешевый' }, { label: 'Самый быстрый' }, { label: 'Оптимальный' }]

  const handleSortChange = (label) => {
    dispatch(sortBy(label))
  }

  const buttonsRender = buttons.map(({ label }) => (
    <li key={label}>
      <button
        type="button"
        className={`${styles.button} ${sortType === label ? styles.active : ''}`}
        onClick={() => handleSortChange(label)}
      >
        {label}
      </button>
    </li>
  ))
  return <ul className={styles.tabs}>{buttonsRender}</ul>
}
export default Tabs
