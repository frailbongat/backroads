import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Layout.css"

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
