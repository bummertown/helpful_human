import React, { useContext } from 'react'
import { ColorContext } from '../store'
import ColorCell from './ColorCell'
import styles from './ColorListPage.module.css'

const ColorListPage = props => {
  const { colors } = useContext(ColorContext)
  return (
    <div className={styles.colorListPage}>
      {colors.map(color => <ColorCell color={color} key={color} />)}
    </div>
  )
}

export default ColorListPage
