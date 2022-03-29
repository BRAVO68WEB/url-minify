import React from 'react'
import NavBar from 'components/NavBar'
import Features from 'components/Features'
import Login from 'components/Login/Login'
import Footer from 'components/Footer/Footer'

export default function signup() {
  return (
    <div className="flex-column">
      <NavBar />
      <Login />
      <Footer />
    </div>
  )
}
