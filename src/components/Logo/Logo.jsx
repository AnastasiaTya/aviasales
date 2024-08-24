import logoImg from '../../../public/Logo.svg'

import styles from './Logo.module.scss'

function Logo() {
  return (
    <div className={styles.wrapper}>
      <img src={logoImg} alt="logo aviasales" className={styles.logo} />
    </div>
  )
}

export default Logo
