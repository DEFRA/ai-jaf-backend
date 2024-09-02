import Joi from 'joi'
import { getJafComparison } from '~/src/repos/jaf-comparisons.js'

export const getJafComparisonController = {
  options: {
    validate: {
      params: Joi.object({
        id: Joi.string().required()
      })
    }
  },
  handler: async (request, h) => {
    const { id } = request.params

    const comparison = await getJafComparison(request.db, id)

    if (!comparison) {
      return h.response().code(404)
    }

    return h.response(comparison).code(200)
  }
}
