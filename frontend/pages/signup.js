import { useState, useContext } from 'react'
import Head from 'next/head'
import NavBar from 'components/NavBar'
import Features from 'components/Features'
import Reg from 'components/Reg/Reg'
import Footer from 'components/Footer/Footer'
import UserAuth, { UserContext } from '../helpers/user/usercontext'

export default function signup() {
  const { mode } = useContext(UserAuth)
  return (
    <div className={mode == 'light' ? 'flex-column' : 'dark-bg'}>
      <NavBar />
      <Reg />
      <Footer />
    </div>
  )
}
