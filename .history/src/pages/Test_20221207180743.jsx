import { PoweroffOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Modal,
  Radio,
  Tabs,
  Tag,
  Typography,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestCard from "../components/Test";
import Url from "../Config";
import supabase from "../utils/supabase/client";
import "./test.css";
const { Title, Text } = Typography;

const Test = () => {
  // const [value, setValue] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    birth_date: "",
    gender: "",
    age: "",
    postnatal: "",
    category: "",
  });
  const [value2, setValue2] = useState([]);
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(true);

  const navigate = useNavigate();

  const [symptoms, setSymptoms] = useState([]);
  const [rules, setRules] = useState([]);
  const [categories, setCategories] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [certaintyFactors, setCertaintyFactors] = useState([]);

  const fullname = useSelector((state) => state.auth.fullname);
  const isLoggedIn = useSelector((state) => state.auth.accessToken);

  // console.log(isLoggedIn);

  async function getSymptoms() {
    let { data, error } = await supabase.from("symptom").select("*");
    setLoading(false);
    setSymptoms(data);
  }

  async function getRules() {
    let { data, error } = await supabase.from("rule").select("*");

    setRules(data);
  }

  async function getCategories() {
    let { data, error } = await supabase.from("category").select("*");

    setCategories(data);
  }

  function countCertaintyFactor(categoryId, neededRules) {
    // menyimpan basis pengetahuan yang dibutuhkan (yang symptomsnya di checklist)
    const rules = neededRules.filter((rule) => rule.categoryId === categoryId);

    // menyimpan semua mb & md dari basis pengetahuan yang dibutuhkan
    // const mbmb = rules.map((rule) => rule.mb);
    // const mdmd = rules.map((rule) => rule.md);
    const cf = rules.map((rule) => rule.cf);

    // rumus menghitung mb md
    // const tempMb = mbmb.reduce((acc, curr) => acc + curr * (1 - acc), 0);
    // const tempMd = mdmd.reduce((acc, curr) => acc + curr * (1 - acc), 0);
    const tempCf = cf.reduce((acc, curr) => acc + curr * (1 - acc), 0);
    // console.log(tempCf)

    // rumus menghitung cf
    // return tempMb - tempMd;
    return tempCf;
  }

  function submitHandler() {
    const checkedSymtoms = answers.filter((a) => a !== false);
    // get rules value for checked symtoms only
    const rulesValue = rules.filter((r) =>
      checkedSymtoms.includes(r.symptomId)
    );

    categories.forEach((category) => {
      const cf = countCertaintyFactor(category.id, rulesValue);
      setCertaintyFactors((prev) => [
        ...prev,
        {
          categoryId: category.id,
          cf: cf,
          description: category.description,
          name: category.name,
          solution: category.solution,
        },
      ]);
    });
  }

  function clickHandler(id, e, idx) {
    // ketika symptom diklik, ubah nilai default (false) menjadi symptomId
    const newAnswers = [...answers];
    newAnswers[idx] = e.target.checked ? id : false;
    setAnswers(newAnswers);
  }

  useEffect(() => {
    // ambil semua data dari supabase (symptom, rule, category)
    getSymptoms();
    getRules();
    getCategories();
  }, []);

  useEffect(() => {
    // ketika symptom sudah didapat dari DB, set nilai default untuk answers menjadi false
    const defaultAnswers = symptoms.map(() => false);
    setAnswers(defaultAnswers);
  }, [symptoms]);

  // const handleSubmit = () => {
  //   babyblues()
  // }

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
      submitHandler();
    }, 3000);
    // .then(() => )
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
            {/* <p className="text-caption">Pilih yang sesuai :</p> */}
          </div>
          <div className="">
            <Card
              style={{
                marginTop: 10,
              }}
              loading={loading}
            >
              {symptoms.map((s, idx) => {
                return (
                  <div className="m-3" key={idx}>
                    <Checkbox onChange={(e) => clickHandler(s.id, e, idx)}>
                      {s.name}
                    </Checkbox>
                  </div>
                );
              })}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              type="primary"
              className="d-block w-100 mt-3 mb-2"
              size="large"
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
            >
              Periksa
            </Button>
          </div>

          <Footer />

          <Modal
            title="Hasil Tes"
            centered
            visible={modal2Visible}
            // onCancel={() => setModal2Visible(false)}
            closable={false}
            width={1000}
            footer={[
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={() => navigate("/")}
              >
                Kembali ke Beranda
              </Button>,
            ]}
          >
            {certaintyFactors.sort((a, b) => b.cf - a.cf).length > 0 && (
              <div>
                <div key={certaintyFactors[0].categoryId}>
                  <Title level={2}>{certaintyFactors[0].name}</Title>
                  {/* <span>{certaintyFactors[0].name}</span> */}
                </div>
                <Tabs>
                  <Tabs.TabPane tab="Deskripsi" key="item-1">
                    {certaintyFactors[0].description}
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Solusi" key="item-2">
                    {certaintyFactors[0].solution}
                  </Tabs.TabPane>
                </Tabs>
                <Tag
                  color="#FF0000"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Title
                    level={5}
                    style={{ color: "white", textAlign: "center" }}
                  >
                    DISCLAIMER
                  </Title>
                  {/* <Text>Ant Design (default)</Text> */}
                  <p>
                    Jika Anda sedang mengalami krisis psikologis yang mengancam
                    hidup Anda, layanan ini tidak direkomendasikan. Silakan
                    menghubungi 119.
                  </p>
                </Tag>
              </div>
            )}
          </Modal>
        </div>
      </div>

      {fullname === null ? (
        <Modal
          title="Profile"
          centered
          visible={modal3Visible}
          // onCancel={() => setModal2Visible(false)}
          width={1000}
          footer={[
            <Button key="submit" type="primary" onClick={() => navigate("/")}>
              Submit
            </Button>,
          ]}
        ></Modal>
      ) : isLoggedIn === null ? (
        <Modal
          title="Profile"
          centered
          visible={modal3Visible}
          // onCancel={() => setModal2Visible(false)}
          width={500}
          footer={[
            <Button key="submit" type="primary" onClick={() => navigate("/")}>
              Submit
            </Button>,
          ]}
        >
          <div className="text-title text-start">
            <div className="row">
              <div className="col">
                <div className="row">
                  <label
                    htmlFor="inputNama3"
                    className="col-sm-2 col-form-label"
                  >
                    No. Pesanan
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="Nama"
                      className="form-control"
                      id="inputNama3"
                    />
                  </div>
                </div>
                <div className="row mb-1 mt-2">
                  <label
                    htmlFor="inputNama3"
                    className="col-sm-2 col-form-label"
                  >
                    Nama Produk
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="Nama"
                      className="form-control"
                      id="inputNama3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Test;
