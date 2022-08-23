import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div class="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <div class="container-xxl mx-auto p-0  position-relative header-2-1">
        <Header />
      </div>
      <Footer />
    </>
  );
};

export default Home;
