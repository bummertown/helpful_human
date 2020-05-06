import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import styles from './App.module.css'
import AppNavBar from './AppNavBar'
import SideBar from './SideBar'
import ColorListPage from './ColorListPage'
import ColorDetailPage from './ColorDetailPage'
import { ColorProvider } from '../store'

const App = () => {
  return (
    <ColorProvider>
      <div className={styles.App}>
        <AppNavBar />
        <Router>
          <div className={styles.container}>
            <SideBar />
            <div className={styles.content}>
              <Switch>
                <Route exact path='/'>
                  <ColorListPage />
                </Route>
                <Route path='/:color'>
                  <ColorDetailPage />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </ColorProvider>
  )
}

export default App
