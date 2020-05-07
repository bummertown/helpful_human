const getRandomColor = () => {
  // copied from SO!
  return '#' + Math.random().toString(16).substr(2, 6)
}

const getRandomColors = count => {
  const colors = []

  while (colors.length < 100) {
    const color = getRandomColor()
    if (colors.indexOf(color) === -1) {
      colors.push(color)
    }
  }

  return colors
}

exports.getRandomColor = getRandomColor
exports.getRandomColors = getRandomColors
