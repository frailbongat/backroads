import React from "react"
import { Link } from "gatsby"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/Layout"

const home = () => {
  return (
    <Layout>
      <FaBeer />
      Hello world!
      <Link to="/blog">Go to blog page</Link>
    </Layout>
  )
}

export default home
