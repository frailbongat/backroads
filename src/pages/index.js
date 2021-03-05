import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

const home = () => {
  return (
    <Layout>
      Hello world!
      <Link to="/blog">Go to blog page</Link>
    </Layout>
  )
}

export default home
