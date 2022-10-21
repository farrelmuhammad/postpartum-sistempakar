import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextScroller from "../components/TextScroller";

const Home = () => {
  return (
    <>
      <div className="container-xxl mx-auto p-0 position-relative header-2-1">
        <Navbar />
        <TextScroller
          text="Disclaimer. Jika Anda sedang mengalami krisis psikologis yang mengancam hidup Anda, layanan ini tidak direkomendasikan. 
Silakan menghubungi 119."
        />
      </div>
      <div className="container-xxl mx-auto p-0 position-relative header-2-1">
        <Header />
      </div>
      <Footer />
    </>
  );
};

export default Home;
