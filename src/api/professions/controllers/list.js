import { professions } from '~/src/constants/professions.js'

export const listProfessionsController = {
  handler: (request, h) => {
    const professions = Object.values(professions)

    return h.response(professions).code(200)
  }
}
