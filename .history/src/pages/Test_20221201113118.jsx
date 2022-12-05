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
        { categoryId: category.id, cf: cf },
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

  const [activeTabKey2, setActiveTabKey2] = useState("Kategori");

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
            <Card
              style={{
                // width: 300,
                marginTop: 10,
              }}
              // loading={loading}
            >
              {symptoms.map((s, idx) => {
                return (
                  <div className="my-3" key={idx}>
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
            {/* <TestCard
              symptoms={symptoms}
              answers={answers}
              loading={loading}
              value={value}
            /> */}
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
            {/* {certaintyFactors.sort((a, b) => b.cf - a.cf).length > 0 && (
              <div>
                {certaintyFactors.map((cf) => (
                  <div key={cf.categoryId}>
                    <span>penyakit {cf.categoryId} : </span>
                    <span>{cf.cf}</span>
                  </div>
                ))}
              </div>
            )} */}
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </Tabs.TabPane>
            </Tabs>
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
