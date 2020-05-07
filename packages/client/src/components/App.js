import React, { useState, useEffect } from 'react'
import {
  useHistory
} from 'react-router-dom'
import styles from './App.module.css'
import AppNavBar from './AppNavBar'
import SideBar from './SideBar'
import Backdrop from './Backdrop'

import ColorPage from './ColorPage'
import { getRandomColor } from 'shared'

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const history = useHistory()

  const onToggleMenu = (event) => {
    console.log(!isMenuVisible)
    setMenuVisible(!isMenuVisible)
  }

  const onRandomColor = event => {
    const color = getRandomColor()
    // console.log(color)
    // addColorToRecents(color)
    setMenuVisible(false)
    history.push(`/${color.substring(1)}`)
  }

  // temp fix to close mobile menu in case you go from mobile > desktop size  ⋋| ◉ ͟ʖ ◉ |⋌
  useEffect(() => {
    window.addEventListener('resize', () => setMenuVisible(false))
  }, [])

  return (
    <div className={styles.App}>
      <AppNavBar onMenuClicked={onToggleMenu} />
      <div className={styles.container}>
        <SideBar onRandomColor={onRandomColor} />
        <ColorPage />
      </div>
      {isMenuVisible && <Backdrop onClick={onToggleMenu} />}
      {isMenuVisible && <SideBar isMobile onRandomColor={onRandomColor} />}
    </div>
  )
}

export default App
