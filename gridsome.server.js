// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addMetadata, addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const package = require('./package.json')
    const repository = package.repository
    const author = {
      id: 'go2zo',
      title: 'Go2zo',
      path: '/about'
    }

    const authors = addCollection('Author')
    authors.addNode(author)

    addMetadata('author', author)
    addMetadata('repository', repository)
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
