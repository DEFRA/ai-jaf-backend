import { professions } from '~/src/constants/professions.js'

export const listProfessionsController = {
  handler: (request, h) => {
    const types = Object.values(professions)

    return h.response(types).code(200)
  }
}
