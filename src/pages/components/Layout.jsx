import React from 'react'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer className="mt-auto" />
    </div>
  )
}

export default Layout
