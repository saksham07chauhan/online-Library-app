import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBooks from "../components/FreeBooks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBooks />
      <Footer />
    </>
  );
}