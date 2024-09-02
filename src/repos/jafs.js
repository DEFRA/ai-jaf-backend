import { ObjectId } from 'mongodb'

async function addJaf(db, jaf) {
  try {
    const { insertedId } = await db.collection('jafs')
      .insertOne({
        original_id: jaf.original_id,
        name: jaf.name,
        profession: jaf.profession,
        summary: jaf.summary
      })

    return insertedId
  } catch (err) {
    if (err.code === 11000) {
      err.type = 'CONFLICT'
    }

    throw err
  }
}

async function getJafs(db, query) {
  const jafs = await db.collection('jafs')
    .find(query)
    .toArray()

  return jafs.map(jaf => {
    jaf.id = jaf._id
    delete jaf._id

    return jaf
  })
}

async function getJaf(db, id) {
  const jaf = await db.collection('jafs')
    .findOne({ _id: ObjectId.createFromHexString(id) })
  
  console.log(jaf)

  if (!jaf) {
    return null
  }

  jaf.id = jaf._id
  delete jaf._id

  return jaf
}

export { addJaf, getJafs, getJaf }
