import React, { useContext } from 'react'
import Navbar from 'components/NavBar'
import Contributors from 'components/Contributors/Contributors'
import Footer from 'components/Footer/Footer'
import UserAuth, { UserContext } from '../helpers/user/usercontext'
function contributors() {
  const { mode } = useContext(UserAuth)
  return (
    <>
      <main className={mode == 'light' ? 'flex-column' : 'dark-bg'}>
        <Navbar />
        <Contributors />
        <Footer />
      </main>
    </>
  )
}

export default contributors
