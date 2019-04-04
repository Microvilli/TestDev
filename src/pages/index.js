import React from "react"
import {Link, graphql} from "gatsby";
import Layout from "../components/layout"

export default  ({data}) => (

    <Layout>
        Hello world!

        <div>
            {data.allDevArticles.edges.map(({node}, index) => (
                <div key={index}>
                    <Link to={node.article.slug}>
                    <h3>{node.article.title}</h3>
                    </Link>
                    <h4>{node.article.user.username}</h4>
                </div>
            ))}
        </div>



    </Layout>

)

export const query = graphql`
{
  allDevArticles(filter: { article: { user: {username: {eq: "geocine"}}}}) {
    totalCount
    edges {
      node {
        article {
          user {
            username}
          id
          title
          description
          slug
          body_html
        }
      }
    }
  }
}`
