import React from 'react'
import Navbar from 'components/NavBar'
import Contributors from 'components/Contributors/Contributors'
import Footer from 'components/Footer/Footer'
function contributors() {
  return (
    <>
      <main className={'main-bg'}>
        <Navbar />
        <Contributors />
        <Footer />
      </main>
    </>
  )
}

export default contributors
