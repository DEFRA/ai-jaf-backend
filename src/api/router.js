import { health } from '~/src/api/health/index.js'
import { professions } from '~/src/api/professions/index.js'
import { jafs } from '~/src/api/jafs/index.js'
import { comparisons } from '~/src/api/comparisons/index.js'

const router = {
  plugin: {
    name: 'Router',
    register: async (server) => {
      await server.register([health])

      await server.register([professions, jafs, comparisons])
    }
  }
}

export { router }
