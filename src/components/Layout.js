import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout