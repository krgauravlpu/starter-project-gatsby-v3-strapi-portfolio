import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }
  return <>
    <Navbar toggleSideBar={toggleSideBar} />
    <Sidebar toggleSideBar={toggleSideBar} isOpen={isOpen} />
    {children}
    <Footer />
  </>
}

export default Layout
