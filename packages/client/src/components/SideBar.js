import React from 'react'
import styles from './SideBar.module.css'
// import { ColorContext } from '../store'

const SideBar = props => {
  // const { recentColors, addColorToRecents } = useContext(ColorContext)

  const COLOR_GROUPS = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Brown',
    'Grey'
  ]

  const className = props.isMobile ? styles.sideBar + ' ' + styles.mobile : styles.sideBar

  return (
    <section className={className}>
      <button className={styles.randomButton} onClick={props.onRandomColor}>Random Color</button>
      <ul>
        {COLOR_GROUPS.map(color => <li key={color} className={styles.colorGroup}>{color}</li>)}
      </ul>
      {/* {!!recentColors.length && <RecentColors colors={recentColors} />} */}
    </section>
  )
}

export default SideBar

// const RecentColors = props => {
//   return (
//     <div>
//       <h1>Recent Colors</h1>
//       <ul>
//         {props.colors.map(color =>
//           <li key={color}><Link to={`/${color.substring(1)}`}>{color}</Link></li>
//         )}
//       </ul>
//     </div>
//   )
// }
