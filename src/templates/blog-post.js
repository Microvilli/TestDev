import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Post = ({ data }) => {
    const post = data.allDevArticles.edges[0].node.article

    return (
        <Layout>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.body_html}}></div>
        </Layout>
    )
}

export default Post

export const query = graphql`
  query ($slug: String!) {
    allDevArticles(filter: { article: { slug: { eq: $slug } } }) {
      edges {
        node {
          article {
            title
            slug
            body_html
          }
        }
      }
    }
  }
`

