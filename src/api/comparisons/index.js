import { getJafComparisonController } from '~/src/api/comparisons/controllers/index.js'

const comparisons = {
  plugin: {
    name: 'comparisons',
    register: (server) => {
      server.route([
        {
          method: 'GET',
          path: '/comparisons/{id}',
          ...getJafComparisonController
        }
      ])
    }
  }
}

export { comparisons }
