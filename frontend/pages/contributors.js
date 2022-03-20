import React from 'react'
import Navbar from 'components/NavBar'
import Contributors from 'components/Contributors/Contributors'
function contributors() {
  return (
    <>
      <main className={'main-bg'}>
        <Navbar />
        <Contributors />
      </main>
    </>
  )
}

export default contributors
