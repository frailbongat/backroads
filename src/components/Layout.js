import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Children } from "react"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
