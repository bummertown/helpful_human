const { getRandomColors } = require('shared')
const { firebaseDb } = require('shared/firebase')

const colors = getRandomColors(100)
const collection = firebaseDb.collection('colors')
const batch = firebaseDb.batch()

for (const color of colors) {
  const docName = color.substring(1)
  const ref = collection.doc(docName)
  batch.set(ref, { value: color }, { merge: true })
}

batch.commit().then(() => {
  console.log('Done!')
})
