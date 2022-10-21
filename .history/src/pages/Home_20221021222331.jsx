import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextScroller from "../components/TextScroller";

const Home = () => {
  return (
    <>
      <div className="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <div className="container-xxl mx-auto p-0  position-relative header-2-1">
        <Header />
      </div>
        <TextScroller text="Long long text to scroll" />
      <Footer />
    </>
  );
};

export default Home;
