import React, { useContext, useEffect } from 'react'
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom'
import ColorListPage from './ColorListPage'
import ColorDetailPage from './ColorDetailPage'
import styles from './ColorPage.module.css'
import { ColorContext } from '../store'

const ColorPage = props => {
  const { filter } = useContext(ColorContext)
  const history = useHistory()

  useEffect(() => {
    // move back to color page when searching
    if (history.pathname !== '/' && filter) {
      history.push('/')
    }
  }, [filter])

  return (
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
  )
}

export default ColorPage
