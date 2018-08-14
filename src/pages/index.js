import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Author from '../components/Author'
// import ShowAt from '../components/ShowAt'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Author url="https://twitter.com/dvnabbott">@dvnabbott</Author>
  </Layout>
)

export default IndexPage
