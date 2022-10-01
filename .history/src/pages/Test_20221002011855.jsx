import { Divider } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
import TestCard from "../components/Test";
import "./test.css";

const Test = () => {
  return (
    <>
      <div className="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <div className="container text-center">
        <div className="row content">
          <div className="col-12">
            <h4 className="text-caption-up">Test Postpartum Depression</h4>
          </div>
          <div className="mt-3">
            <TestCard />
          </div>
          <div class="d-flex justify-content-center">
            <button
              className="btn btn-primary text-white d-block w-100 mt-3 mb-5"
              type="submit"
            >
              Submit
            </button>
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
