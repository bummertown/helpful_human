import React from 'react'
import { useParams } from 'react-router-dom'

const ColorDetailPage = props => {
  const params = useParams()

  return (
    <div>
      DetailPage
      {params.color}
    </div>
  )
}

export default ColorDetailPage
