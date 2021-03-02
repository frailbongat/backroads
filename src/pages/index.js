import React from "react"
import { Link } from "gatsby"

const home = () => {
  return (
    <div>
      Hello world!
      <Link to="/blog">Go to blog page</Link>
    </div>
  )
}

export default home
