import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Modal, Radio } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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
        const getData = res.data;
        setSymptoms(getData);
        console.log(getData.mb_symptom);
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
        const getData = res.data;
        setAnswers(getData);
        console.log(getData);
      });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
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
      // setModal2Visible(true);
      handleSubmit();
    }, 3000);
    // .then(() => )
  };

  const [activeTabKey2, setActiveTabKey2] = useState("app");

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

  const tabListNoTitle = [
    {
      key: "Kategori",
      tab: "Kategori",
    },
    {
      key: "Deskripsi",
      tab: "Deskripsi",
    },
    {
      key: "Solusi",
      tab: "Solusi",
    },
  ];
  const contentListNoTitle = {
    Kategori: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel alias
        magni illum quos sunt velit similique voluptatibus minima, corporis
        repudiandae vero officia nesciunt sit repellat deleniti sed ab tenetur
        fugit?
      </p>
    ),
    Deskripsi: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        molestiae similique quisquam quaerat iste sequi sit impedit vero,
        tempore assumenda quae reiciendis hic, adipisci dolorum maxime in dolore
        temporibus unde?
      </p>
    ),
    Solusi: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam nisi
        autem ullam! Consequuntur veniam libero error dolorum, nobis quibusdam.
        Nam quaerat architecto omnis deserunt accusantium ipsam dolore,
        voluptatibus molestias officiis!
      </p>
    ),
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
              className="d-block w-100 mt-3 mb-2"
              size="large"
              // icon={<PoweroffOutlined />}
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
            >
              Periksa
            </Button>
          </div>
          <Modal
            title="Hasil Tes"
            centered
            visible={modal2Visible}
            onCancel={() => setModal2Visible(false)}
            width={1000}
            footer={[
              <Button
                key="submit"
                type="primary"
                loading={loading}
                // onClick={navigate("/")}
              >
                Submit
              </Button>,
            ]}
          >
            <Card
              style={{
                width: "100%",
              }}
              tabList={tabListNoTitle}
              activeTabKey={activeTabKey2}
              // tabBarExtraContent={<a href="#">More</a>}
              onTabChange={(key) => {
                onTab2Change(key);
              }}
              defaultSelectedKeys={['Kategori']}
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
