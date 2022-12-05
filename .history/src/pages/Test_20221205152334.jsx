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
import Navbar from "../components/Navbar";
import TestCard from "../components/Test";
import Url from "../Config";
import supabase from "../utils/supabase/client";
import "./test.css";
const { Title } = Typography;

const Test = () => {
  // const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const navigate = useNavigate();

  const [symptoms, setSymptoms] = useState([]);
  const [rules, setRules] = useState([]);
  const [categories, setCategories] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [certaintyFactors, setCertaintyFactors] = useState([]);

  async function getSymptoms() {
    let { data, error } = await supabase.from("symptom").select("*");

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
          </div>
          <div className="">
            <Card
              style={{
                marginTop: 10,
              }}
              // loading={loading}
            >
              <Divider>Text</Divider>
              {symptoms.map((s, idx) => {
                return (
                  <div className="m-3" key={idx}>
                    <Checkbox onChange={(e) => clickHandler(s.id, e, idx)}>
                      {s.name}
                    </Checkbox>

                    {/* <input
                      type="checkbox"
                      onChange={(e) => clickHandler(s.id, e, idx)}
                    />
                    <label>{s.name}</label> */}
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
                  Jika Anda sedang mengalami krisis psikologis yang mengancam
                  hidup Anda, layanan ini tidak direkomendasikan. Silakan
                  menghubungi 119.
                </Tag>
              </div>
            )}
            {/* <Card
              style={{
                width: "100%",
              }}
              tabList={[
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
              ]}
              activeTabKey={activeTabKey2}
              // tabBarExtraContent={<a href="#">More</a>}
              onTabChange={(key) => {
                onTab2Change(key);
              }}
              defaultSelectedKeys={["Kategori"]}
            >
              {contentListNoTitle[activeTabKey2]}
            </Card> */}
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
