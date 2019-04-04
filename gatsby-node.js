const path = require('path')

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions;
    return graphql(`
{
  allDevArticles {
    edges {
      node {
        article {
          slug
        }
      }
    }
  }
}`
    ).then( result => {
        result.data.allDevArticles.edges.forEach(({node}) => {
            createPage({
                path: node.article.slug,
                component: path.resolve('./src/templates/blog-post.js'),
                context: {
                    slug: node.article.slug,
                },
            })
        })
    })
}
