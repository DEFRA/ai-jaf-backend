import schema from '~/src/api/jafs/schemas/create.js'
import {
  listJafsController,
  createJafsController,
  getJafController
} from '~/src/api/jafs/controllers/index.js'

const jafs = {
  plugin: {
    name: 'jafs',
    register: (server) => {
      server.route([
        {
          method: 'GET',
          path: '/jafs',
          ...listJafsController
        },
        {
          method: 'GET',
          path: '/jafs/{id}',
          ...getJafController
        },
        {
          method: 'POST',
          path: '/jafs',
          ...createJafsController
        }
      ])
    }
  }
}

export { jafs }
