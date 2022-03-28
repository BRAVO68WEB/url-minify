import React, { useState } from 'react'
import Head from 'next/head'
import HomeSection from 'components/HomeSection/HomeSection'
import NavBar from 'components/NavBar'
import Features from 'components/Features'
import Footer from 'components/Footer/Footer'

export default function Home() {
  const [shortUrl, setShortUrl] = useState(null)
  const [longUrl, setLongUrl] = useState('')
  const [qrData, setQrData] = useState('')
  const [showQrCode, setShowQrCode] = useState(false)

  return (
    <>
      <Head>
        <title>URL MiniFy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=BioRhyme&family=Cabin+Sketch:wght@700&family=IBM+Plex+Serif:ital@1&family=Monoton&family=Montserrat+Alternates:wght@500&family=Open+Sans:wght@300&family=Poppins&family=Share+Tech+Mono&family=Special+Elite&display=swap" rel="stylesheet" />
      </Head>

      <main className={'main-bg'}>
        <NavBar />
        <HomeSection
          shortUrl={shortUrl}
          setShortUrl={setShortUrl}
          longUrl={longUrl}
          setLongUrl={setLongUrl}
          qrData={qrData}
          setQrData={setQrData}
          showQrCode={showQrCode}
          setShowQrCode={setShowQrCode}
        />
        <Features />
        <Footer />
      </main>
    </>
  )
}
