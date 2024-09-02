import Joi from 'joi'

import { listJafs } from '~/src/api/jafs/helpers/jafs.js'
import { professions } from '~/src/constants/professions.js'

export const listJafsController = {
  options: {
    validate: {
      query: Joi.object({
        profession: Joi.string().optional().valid(...Object.values(professions))
      })
    }
  },
  handler: async (request, h) => {
    const { profession } = request.query

    const jafs = await listJafs(request.db, profession)

    if (!jafs.length) {
      return h.response().code(204)
    }

    return h.response({ jafs }).code(200)
  }
}
