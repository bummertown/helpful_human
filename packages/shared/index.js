const getRandomColor = () => {
  // copied from SO!
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
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
