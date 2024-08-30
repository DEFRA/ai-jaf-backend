import {
  listProfessionsController
} from '~/src/api/professions/controllers/index.js'

const professions = {
  plugin: {
    name: 'professions',
    register: (server) => {
      server.route([
        {
          method: 'GET',
          path: '/professions',
          ...listProfessionsController
        }
      ])
    }
  }
}

export { professions }
