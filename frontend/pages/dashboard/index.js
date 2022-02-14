import React from 'react';
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Dashboard from "components/Dashboard/Dashboard"

function Index(props) {
    return (
        <div className={""}>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <NavBar />
                <Dashboard/>
            </main>
        </div>
    );
}

export default Index;