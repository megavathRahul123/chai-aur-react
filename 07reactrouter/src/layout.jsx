import React from 'react'
import Header from './components/headers/headers';
import Footer from './components/footers/footer';
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout