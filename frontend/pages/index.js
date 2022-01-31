import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
   const [shortUrl, setShortUrl] = useState(null)
   const [longURL, setLongURL] = useState('')
   return (
      <div className={styles.container}>
         <Head>
            <title>URL MiniFy</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <h1 className={styles.title}>Welcome to URL MiniFy</h1>

            <div className={styles.card}>
               <h2>Paste the URL to be Shortened</h2>
               <form className="input">
                  <input
                     name="longURL"
                     type="text"
                     value={longURL}
                     onChange={(evt) => setLongURL(evt.target.value)}
                  />
                  <button type="submit">Minify</button>
               </form>
            </div>
         </main>
      </div>
   )
}
