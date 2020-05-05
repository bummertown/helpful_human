import React from 'react'
import logo from '../assets/logo-symbol.svg'
import styles from './AppNavBar.module.css'

const AppNavBar = props => {
  console.log(styles)
  return (
    <div className={styles.appNavBar}>
      <img className={styles.logo} src={logo} />
      <input className={styles.searchBar} type='text' name='search' placeholder='Search' />
    </div>
  )
}

export default AppNavBar
