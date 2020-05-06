const serviceAccount = require('./serviceAccountKey.json')
const { getRandomColors } = require('../getRandomColor')
const firestoreSerivce = require('firestore-export-import')

const colors = {
  colors: getRandomColors(1000).map(color => ({ value: color }))
}

// console.log(JSON.stringify(colors))

firestoreSerivce.initializeApp(serviceAccount, 'https://helpful-human-eb27b.firebaseio.com')
firestoreSerivce.restore(colors)
