const { getRandomColors } = require('shared')
const { firebaseDb } = require('shared/firebase')

const collection = firebaseDb.collection('colors')

const deleteExisting = async () => {
  const batch = firebaseDb.batch()
  const toDelete = await collection.get()
  toDelete.forEach(doc => {
    batch.delete(doc.ref)
  })
  return batch.commit()
}

const createColors = async () => {
  const batch = firebaseDb.batch()
  const colors = getRandomColors(100)
  for (const color of colors) {
    const docName = color.substring(1)
    const ref = collection.doc(docName)
    batch.set(ref, { value: color }, { merge: true })
  }
  return batch.commit()
}

const initialize = async () => {
  console.log('🙇‍♂️ Begin deleting colors 🙇‍♂️')
  await deleteExisting()
  console.log('🎉 Done deleting colors 🎉')
  console.log('🙇‍♂️ Begin creating colors 🙇‍♂️')
  await createColors()
  console.log('🎉 Done creating colors 🎉')
  process.exit()
}

initialize()
