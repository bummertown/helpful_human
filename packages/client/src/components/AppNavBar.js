import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-symbol.svg'
import menuIcon from '../assets/menu.svg'
import styles from './AppNavBar.module.css'
import { ColorContext } from '../store'

const AppNavBar = props => {
  const { setFilter } = useContext(ColorContext)
  const onSearchChange = event => {
    setFilter(event.target.value)
  }

  return (
    <div className={styles.appNavBar}>
      <button className={styles.menu} onClick={props.onMenuClicked}><img src={menuIcon} /></button>
      <Link to='/' className={styles.logo}>
        <img src={logo} />
      </Link>
      <input className={styles.searchBar} type='text' name='search' placeholder='Search' onChange={onSearchChange} />
    </div>
  )
}

export default AppNavBar
