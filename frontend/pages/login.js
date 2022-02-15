import { useState } from "react";
import Head from "next/head";
import NavBar from "components/NavBar";
import Features from "components/Features";
import Login from "components/Login/Login";

export default function signup() {
  return (
    <div className="flex-column">
      <NavBar />
      <Login />
    </div>
  );
}
