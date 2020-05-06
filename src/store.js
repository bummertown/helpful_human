import React, { createContext, useReducer } from 'react'

const initialSate = {
  colors: [
    '#333333', '#000000', '#fffccc', '#eaea3c', '#a34859', '#dd1d73', '#b5e561', '#1b2287', '#759d0c', '#65f945',
    '#333333', '#000000', '#fffccc', '#eaea3c', '#a34859', '#dd1d73', '#b5e561', '#1b2287', '#759d0c', '#65f945'
  ],
  recentColors: [],
  filter: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_color':
      return {
        ...state,
        colors: [...state.colors, action.payload]
      }
    case 'remove_color':
      break
    case 'add_color_to_recents':
      return {
        ...state,
        recentColors: [...state.recentColors, action.payload]
      }
    case 'set_colors':
      return {
        ...state,
        colors: action.payload
      }
    case 'set_filter':
      return {
        ...state,
        filter: action.payload.length ? action.payload : null
      }
  }
}

const getVisibleColors = (state) => {
  if (state.filter) {
    return state.colors.filter(color => color.includes(state.filter))
  }
  return state.colors
}

export const ColorContext = createContext(null)
export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSate)

  const addColor = color => {
    dispatch({
      type: 'add_color',
      payload: color
    })
  }

  const removeColor = color => {
    dispatch({
      type: 'remove_color',
      payload: color
    })
  }

  const addColorToRecents = color => {
    dispatch({
      type: 'add_color_to_recents',
      payload: color
    })
  }

  const getRandomColor = (state) => {
    const index = Math.floor(Math.random() * state.colors.length)
    return state.colors[index]
  }

  const setColors = colors => {
    dispatch({
      type: 'set_colors',
      payload: colors
    })
  }

  const setFilter = filter => {
    dispatch({
      type: 'set_filter',
      payload: filter
    })
  }

  const value = {
    colors: getVisibleColors(state),
    setColors,
    addColor,
    removeColor,
    filter: state.filter,
    setFilter,
    addColorToRecents,
    recentColors: state.recentColors,
    getRandomColor: () => getRandomColor(state)
  }

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  )
}
