import React from "react";
import Navbar from "../components/Navbar";
import TestCard from "../components/Test";
import './test.css';

const Test = () => {
  return (
    <>
      <div class="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <div class="container text-center">
        <div class="row content">
          <div class="col-12">
            <h4 class="text-caption-up">Test Postpartum Depression</h4>
          </div>
          <div className="mt-3">
            <TestCard />
          </div>
          {/* <button className="btn btn-test text-white">
            Periksa
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Test;
