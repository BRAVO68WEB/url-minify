import { useState } from 'react'
import Head from 'next/head'
import HomeSection from "components/HomeSection/homeSection"
import NavBar from "components/NavBar";


export default function Home() {
   const [shortUrl, setShortUrl] = useState(null)
   const [longURL, setLongURL] = useState('')
   return (
      <div className={""}>
         <Head>
            <title>URL MiniFy</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={""}>
             <NavBar />
             <HomeSection />
         </main>
      </div>
   )
}
