import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import styles from './App.module.css'
import AppNavBar from './AppNavBar'
import SideBar from './SideBar'
import { ColorProvider } from '../store'
import ColorPage from './ColorPage'

const App = () => {
  return (
    <ColorProvider>
      <div className={styles.App}>
        <Router>
          <AppNavBar />
          <div className={styles.container}>
            <SideBar />
            <ColorPage />
          </div>
        </Router>
      </div>
    </ColorProvider>
  )
}

export default App
