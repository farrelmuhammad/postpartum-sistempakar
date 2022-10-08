import { Card, Divider, Radio } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import TestCard from "../components/Test";
import Url from "../Config";
import "./test.css";

const Test = () => {
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const auth = useSelector((state) => state.auth);
  const [symptoms, setSymptoms] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getSymptoms();
    getAnswer();
  }, []);

  const getSymptoms = async () => {
    await axios
      .get(`${Url}/symptoms`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then(()=> {
        setLoading(true)
      })
      .then((res) => {
        setSymptoms(res.data);
        setLoading(false);
        console.log(res.data);
      });
  };

  const getAnswer = async () => {
    await axios
      .get(`${Url}/answers`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then(()=> {
        setLoading(true)
      })
      .then((res) => {
        setAnswers(res.data);
        setLoading(false);
        console.log(res.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = new URLSearchParams();
    userData.append("test", value1);
    userData.append("test1", value2);

    for (var pair of userData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

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
            <TestCard symptoms={symptoms} answers={answers} loading={loading} />
          </div>
          <div className="d-flex justify-content-center">
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
