/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux'

import { toggleAllFilters, toggleFilter } from '../../store/actions/actions'

import styles from './Filter.module.scss'

function Filter() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters.filters)

  const handleCheckbox = (e) => {
    const { id, checked } = e.target
    if (id === 'all') {
      dispatch(toggleAllFilters(checked))
    } else {
      dispatch(toggleFilter(id, checked))
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Количество пересадок</p>
      <div className={styles.container}>
        <div className={styles.prov}>
          <input type="checkbox" id="all" className={styles.checkbox} checked={filters.all} onChange={handleCheckbox} />
          <label htmlFor="all" className={styles.label}>
            Все
          </label>
        </div>
        <div className={styles.prov}>
          <input
            type="checkbox"
            id="noTransfers"
            className={styles.checkbox}
            checked={filters.noTransfers}
            onChange={handleCheckbox}
          />
          <label htmlFor="noTransfers" className={styles.label}>
            Без пересадок
          </label>
        </div>
        <div className={styles.prov}>
          <input
            type="checkbox"
            id="oneTransfer"
            className={styles.checkbox}
            checked={filters.oneTransfer}
            onChange={handleCheckbox}
          />
          <label htmlFor="oneTransfer" className={styles.label}>
            1 пересадка
          </label>
        </div>
        <div className={styles.prov}>
          <input
            type="checkbox"
            id="twoTransfers"
            className={styles.checkbox}
            checked={filters.twoTransfers}
            onChange={handleCheckbox}
          />
          <label htmlFor="twoTransfers" className={styles.label}>
            2 пересадки
          </label>
        </div>
        <div className={styles.prov}>
          <input
            type="checkbox"
            id="threeTransfers"
            className={styles.checkbox}
            checked={filters.threeTransfers}
            onChange={handleCheckbox}
          />
          <label htmlFor="threeTransfers" className={styles.label}>
            3 пересадки
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filter
