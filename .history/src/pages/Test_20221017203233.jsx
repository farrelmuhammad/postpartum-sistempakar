import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Modal, Radio } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import TestCard from "../components/Test";
import Url from "../Config";
import "./test.css";

const Test = () => {
  // const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const auth = useSelector((state) => state.auth);
  const [symptoms, setSymptoms] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  useEffect(() => {
    getSymptoms();
    getAnswer();
  }, []);

  const arrValue = [];

  const value = (data) => {
    console.log(data);
    arrValue.push(data);
  };

  const getSymptoms = async () => {
    await axios
      .get(`${Url}/symptoms`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((res) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setSymptoms(res.data);
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
      .then((res) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setAnswers(res.data);
        console.log(res.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = new URLSearchParams();
    arrValue.map((item) => {
      userData.append("value", item);
    });
    // userData.append("test1", value2);

    for (var pair of userData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // console.log(arrValue)
  };

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
      setModal2Visible(true);
    }, 3000);
    // .then(() => )
  };

  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

  const tabList = [
    {
      key: "tab1",
      tab: "tab1",
    },
    {
      key: "tab2",
      tab: "tab2",
    },
  ];
  const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  };
  const tabListNoTitle = [
    {
      key: "article",
      tab: "article",
    },
    {
      key: "app",
      tab: "app",
    },
    {
      key: "project",
      tab: "project",
    },
  ];
  const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
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
            <TestCard
              symptoms={symptoms}
              answers={answers}
              loading={loading}
              value={value}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button
              type="primary"
              className="d-block w-100 mt-3 mb-5"
              // icon={<PoweroffOutlined />}
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
            >
              Periksa
            </Button>
            {/* <button
              className="btn btn-primary text-white d-block w-100 mt-3 mb-5"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button> */}
          </div>
          <Modal
            title="Hasil Tes"
            centered
            visible={modal2Visible}
            onCancel={() => setModal2Visible(false)}
            width={1000}
            footer={null}
          >
            <Card
              style={{
                width: "100%",
              }}
              tabList={tabListNoTitle}
              activeTabKey={activeTabKey2}
              tabBarExtraContent={<a href="#">More</a>}
              onTabChange={(key) => {
                onTab2Change(key);
              }}
            >
              {contentListNoTitle[activeTabKey2]}
            </Card>
          </Modal>
          {/* <button className="btn btn-test text-white">
            Periksa
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Test;
