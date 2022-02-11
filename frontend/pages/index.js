import { useState } from 'react'
import Head from 'next/head'
import HomeSection from "components/HomeSection/homeSection"
import NavBar from "components/NavBar";
import Features from 'components/Features'


export default function Home() {
   const [shortUrl, setShortUrl] = useState(null)
   const [longUrl, setLongUrl] = useState('')
   return (
      <div className={""}>
         <Head>
            <title>URL MiniFy</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={"main-bg"}>
             <NavBar />
             <HomeSection setShortUrl={setShortUrl} setLongUrl={setLongUrl} longUrl={longUrl} shortUrl={shortUrl}/>
             <Features/>
         </main>
      </div>
   )
}
