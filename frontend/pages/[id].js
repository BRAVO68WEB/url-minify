import { useState } from 'react'
import Head from 'next/head'
import HomeSection from "components/HomeSection/homeSection"
import NavBar from "components/NavBar";
import Features from 'components/Features'


export default function Home() {
   return (
      <div className={""}>
         <Head>
            <title>URL MiniFy</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={"main-bg"}>
             Not Found
         </main>
      </div>
   )
}
