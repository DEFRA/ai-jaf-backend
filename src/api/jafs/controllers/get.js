import Joi from 'joi'

import { getJafById } from '~/src/api/jafs/helpers/jafs.js'

export const getJafController = {
  options: {
    validate: {
      params: Joi.object({
        id: Joi.string().required()
      })
    }
  },
  handler: async (request, h) => {
    const { id } = request.params

    const jaf = await getJafById(request.db, id)

    if (!jaf) {
      return h.response().code(404)
    }

    return h.response(jaf).code(200)
  }
}
