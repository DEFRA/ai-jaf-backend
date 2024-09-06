import { addJaf, getJafs, getJaf } from '~/src/repos/jafs.js'
import {
  addJafComparisons,
  getJafComparisons
} from '~/src/repos/jaf-comparisons.js'

async function createJaf(db, jaf) {
  const id = await addJaf(db, jaf)

  if (jaf.comparisons) {
    await addJafComparisons(db, id, jaf.comparisons)
  }

  return id
}

async function listJafs(db, profession) {
  const query = {}

  if (profession) {
    query.profession = {
      $eq: profession
    }
  }

  const jafs = await getJafs(db, query)

  return jafs
}

async function getJafById(db, id) {
  const jaf = await getJaf(db, id)

  if (jaf) {
    jaf.comparisons = await getJafComparisons(db, jaf.id)
  }

  return jaf
}

export { createJaf, listJafs, getJafById }
