import React from 'react'

const SideBar = props => {
  const recentColors = false

  const onRandomColor = event => {
    console.log('random color')
  }

  return (
    <section>
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
