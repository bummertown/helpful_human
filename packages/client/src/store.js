import React, { createContext, useReducer } from 'react'

const initialSate = {
  colors: [],
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
  let colors = state.colors
  if (state.filter) {
    colors = colors.filter(color => color.includes(state.filter))
  }
  return colors
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
    recentColors: state.recentColors
  }

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  )
}
