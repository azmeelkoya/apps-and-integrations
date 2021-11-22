const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query App {
            allStrapiApp {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `)

    data.allStrapiApp.edges.forEach(edge => {
        actions.createPage({
            path: '/' + edge.node.name,
            component: path.resolve('./src/templates/app-details.js'),
            context: { app: edge.node.name }
        })
    })
}