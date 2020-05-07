const firebase = require('firebase')

const firebaseConfig = {
  apiKey: 'AIzaSyCMsEu4LJVlLDxcb4sKRqkds_IOH0dPUOg',
  authDomain: 'helpful-human-eb27b.firebaseapp.com',
  databaseURL: 'https://helpful-human-eb27b.firebaseio.com',
  projectId: 'helpful-human-eb27b',
  storageBucket: 'helpful-human-eb27b.appspot.com',
  messagingSenderId: '346475930069',
  appId: '1:346475930069:web:7ff5f0622e03260545dd5c'
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseDb = firebaseApp.firestore()

exports.firebaseDb = firebaseDb
