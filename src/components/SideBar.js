import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './SideBar.module.css'
import { ColorContext } from '../store'

const SideBar = props => {
  const { recentColors, addColorToRecents, getRandomColor } = useContext(ColorContext)
  const history = useHistory()

  const onRandomColor = event => {
    const color = getRandomColor()
    addColorToRecents(color)
    history.push(`/${color}`)
  }

  return (
    <section className={styles.sideBar}>
      <button className={styles.randomButton} onClick={onRandomColor}>Random Color</button>
      {!!recentColors.length && <RecentColors colors={recentColors} />}
    </section>
  )
}

export default SideBar

const RecentColors = props => {
  return (
    <div>
      <h1>Recent Colors</h1>
      <ul>
        {props.colors.map(color =>
          <li key={color}><Link to={`/${color}`}>{color}</Link></li>
        )}
      </ul>
    </div>
  )
}
