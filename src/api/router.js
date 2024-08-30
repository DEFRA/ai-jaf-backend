import { health } from '~/src/api/health/index.js'
import { professions } from '~/src/api/professions/index.js'

const router = {
  plugin: {
    name: 'Router',
    register: async (server) => {
      await server.register([health])

      await server.register([professions])
    }
  }
}

export { router }
