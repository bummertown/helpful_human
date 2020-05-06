import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ColorCell.module.css'

const ColorCell = props => {
  let className = styles.cell
  if (props.isSmall) {
    className += ' ' + styles.small
  }
  return (
    <div className={className}>
      <Link to={`/${props.color.substring(1)}`}>
        <div className={styles.preview} style={{ backgroundColor: `${props.color}` }} />
        <p className={styles.name}>{`${props.color}`}</p>
      </Link>
    </div>
  )
}

export default ColorCell
