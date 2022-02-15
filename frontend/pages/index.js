import { useState, useMemo } from "react";
import Head from "next/head";
import HomeSection from "components/HomeSection/homeSection";
import NavBar from "components/NavBar";
import Features from "components/Features";
import Reg from "components/Reg/Reg";
import Login from "components/Login/Login";
import { UserAuthProvider, UserContext } from "./user/usercontext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Home() {
  const [shortUrl, setShortUrl] = useState(null);
  const [longURL, setLongURL] = useState("");

  return (
    <>
      <Head>
        <title>URL MiniFy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main-bg"}>
        <NavBar />
        <HomeSection />
        <Features />
      </main>
    </>
  );
}
