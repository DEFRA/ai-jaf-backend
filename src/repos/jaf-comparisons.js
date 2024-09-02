import { ObjectId } from 'mongodb'

async function addJafComparisons(db, baseJafId, comparisons) {
  const mapped = comparisons.map((c) => ({
    base_jaf_id: baseJafId,
    base_jaf_original_id: c.base_jaf_original_id,
    compared_jaf_original_id: c.compared_jaf_original_id,
    name: c.name,
    profession: c.profession,
    comparison: c.comparison
  }))

  const { insertedIds } = await db
    .collection('jaf_comparisons')
    .insertMany(mapped)

  return insertedIds
}

async function getJafComparisons(db, baseJafId) {
  const comparisons = await db
    .collection('jaf_comparisons')
    .find({
      base_jaf_id: {
        $eq: baseJafId
      }
    })
    .project({
      base_jaf_id: 1,
      base_jaf_original_id: 1,
      compared_jaf_original_id: 1,
      name: 1,
      profession: 1,
      'comparison.summary.similarity_score': 1
    })
    .toArray()

  return comparisons.map((c) => {
    c.id = c._id
    delete c._id

    if (c.comparison && c.comparison.summary) {
      c.similarity_score = c.comparison.summary.similarity_score

      delete c.comparison
    }

    return c
  })
}

async function getJafComparison(db, id) {
  const comparison = await db
    .collection('jaf_comparisons')
    .findOne({ _id: ObjectId.createFromHexString(id) })

  if (!comparison) {
    return null
  }

  comparison.id = comparison._id
  delete comparison._id

  return comparison
}

export { addJafComparisons, getJafComparisons, getJafComparison }
