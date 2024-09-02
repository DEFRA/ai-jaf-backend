import schema from '~/src/api/jafs/schemas/create.js'
import { createJaf } from '~/src/api/jafs/helpers/jafs.js'

export const createJafsController = {
  options: {
    validate: {
      payload: schema
    }
  },
  handler: async (request, h) => {
    try {
      const jafs = await createJaf(request.db, request.payload)

      return h.response({ id: jafs }).code(201)
    } catch (err) {
      if (err.type === 'CONFLICT') {
        return h.response().code(409)
      }

      throw err
    }
  }
}
