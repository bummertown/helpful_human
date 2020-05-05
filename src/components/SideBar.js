import React from 'react'
import styles from './SideBar.module.css'

const SideBar = props => {
  const recentColors = false

  const onRandomColor = event => {
    console.log('random color')
  }

  return (
    <section className={styles.sideBar}>
      <button onClick={onRandomColor}>Random Color</button>
      {recentColors && <RecentColors colors={recentColors} />}
    </section>
  )
}

export default SideBar

const RecentColors = props => {
  return (
    <div>
      {props.colors.map(color =>
        <div key={color}>color</div>
      )}
    </div>
  )
}
