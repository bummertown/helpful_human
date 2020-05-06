import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ColorCell.module.css'

const ColorCell = props => {
  return (
    <div className={styles.cell}>
      <Link to={`/${props.color}`}>
        <div className={styles.preview} style={{ backgroundColor: props.color }} />
        <div>
          <p className={styles.name}>{`#${props.color}`}</p>
        </div>
      </Link>
    </div>
  )
}

export default ColorCell
