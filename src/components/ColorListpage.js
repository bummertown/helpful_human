import React, { useContext } from 'react'
import { ColorContext } from '../store'
import ColorCell from './ColorCell'

const ColorListPage = props => {
  const { colors } = useContext(ColorContext)
  return (
    <div>
      {colors.map(color => <ColorCell color={color} key={color} />)}
    </div>
  )
}

export default ColorListPage
