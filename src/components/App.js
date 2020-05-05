import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import styles from './App.module.css'
import AppNavBar from './AppNavBar'
import SideBar from './SideBar'
import ColorListPage from './ColorListpage'
import ColorDetailPage from './ColorDetailPage'

const App = () => {
  return (
    <div className={styles.App}>
      <AppNavBar />
      <SideBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <ColorListPage />
          </Route>
          <Route path='/:color'>
            <ColorDetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
