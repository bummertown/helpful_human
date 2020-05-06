import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './SideBar.module.css'
import { ColorContext } from '../store'
import { getRandomColor } from 'shared'

const SideBar = props => {
  const { recentColors, addColorToRecents } = useContext(ColorContext)
  const history = useHistory()

  const onRandomColor = event => {
    const color = getRandomColor()
    console.log(color)
    addColorToRecents(color)
    history.push(`/${color.substring(1)}`)
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
          <li key={color}><Link to={`/${color.substring(1)}`}>{color}</Link></li>
        )}
      </ul>
    </div>
  )
}
