import React from 'react'
import { useParams } from 'react-router-dom'
import chroma from 'chroma-js'
import ColorCell from './ColorCell'
import styles from './ColorDetailPage.module.css'

const ColorDetailPage = props => {
  const { color } = useParams()
  const hexColor = '#' + color
  const shades = [
    chroma(color).darken(0.5).hex(),
    chroma(color).darken(0.25).hex(),
    hexColor,
    chroma(color).brighten(0.25).hex(),
    chroma(color).brighten(0.5).hex()
  ]

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <div className={styles.color} style={{ backgroundColor: `${hexColor}` }} />
        <p className={styles.name}>{`${hexColor}`}</p>
      </div>
      <div className={styles.shades}>
        {shades.map((color, index) => <ColorCell color={color} key={color + index} isSmall />)}
      </div>
      <button className={styles.actionButton}>Clear</button>
    </div>
  )
}

export default ColorDetailPage
