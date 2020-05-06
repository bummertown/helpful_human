import React, { useContext, useState } from 'react'
import { ColorContext } from '../store'
import ColorCell from './ColorCell'
import styles from './ColorListPage.module.css'

const ColorListPage = props => {
  const { colors } = useContext(ColorContext)
  const [currentPage, setCurrentPage] = useState(1)
  const POSTS_PER_PAGE = 12

  const visibleColors = () => {
    const last = currentPage * POSTS_PER_PAGE
    const first = last - POSTS_PER_PAGE
    const visible = colors.slice(first, last)
    return visible
  }

  const onPaginate = page => {
    setCurrentPage(page)
  }

  return (
    <div>
      <div className={styles.colors}>
        {visibleColors().map(color => <ColorCell color={color} key={color} />)}
      </div>
      <Pagination currentPage={currentPage} postsPerPage={POSTS_PER_PAGE} totalPages={colors.length} onPaginate={onPaginate} />
    </div>
  )
}

export default ColorListPage

const Pagination = props => {
  const { postsPerPage, totalPages, currentPage } = props
  const count = Math.ceil(totalPages / postsPerPage)
  const pages = []
  for (let i = 1; i <= count; i++) {
    pages.push(i)
  }
  return (
    <div className={styles.pagination}>
      <ul>
        {pages.map(page =>
          <li key={page}>
            <a className={page === currentPage ? styles.selected : ''} href='javascript:;' onClick={() => props.onPaginate(page)}>{page}</a>
          </li>
        )}
      </ul>
    </div>
  )
}
