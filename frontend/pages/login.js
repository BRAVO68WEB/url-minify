import React, { useContext } from 'react'
import NavBar from 'components/NavBar'
import Features from 'components/Features'
import Login from 'components/Login/Login'
import Footer from 'components/Footer/Footer'
import UserAuth, { UserContext } from '../helpers/user/usercontext'

export default function signup() {
  const { mode } = useContext(UserAuth)
  return (
    <div className={mode == 'light' ? 'flex-column' : 'dark-bg'}>
      <NavBar />
      <Login />
      <Footer />
    </div>
  )
}
