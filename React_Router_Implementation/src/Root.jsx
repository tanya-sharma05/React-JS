import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Outlet is used for nested routes and it renders the current component
function Root() {
  return (
    <>
        <Header/>
        <Outlet />
        <Footer />
    </>
  )
}

export default Root
