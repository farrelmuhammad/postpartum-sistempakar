import { Avatar, BackTop, Card, Radio, Skeleton, Switch } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Url from "../Config";

const TestCard = ({ symptoms, answers, loading, value }) => {
  // const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.auth);

  // console.log(symptoms);

  const onChange = (e) => {
    // setLoading(!checked);
    e.preventDefault();
    value(e.target.value);
  };

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 50,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  // if (loading) {
  //   return (
  //     <Skeleton active />
  //   )
  // }

  return (
    <>
      {symptoms?.map((sym) => (
        <Card
          style={{
            // width: 300,
            marginTop: 10,
          }}
          loading={loading}
        >
          <div className="row content">
            <div className="col-12">
              <h5 className="text-caption-down">{sym.symptom_name}</h5>
            </div>
            <Radio.Group onChange={onChange}>
              {answers?.map((ans) => (
                <Radio value={ans.md_user}>{ans.answer}</Radio>
              ))}
            </Radio.Group>
          </div>
          <BackTop>
            <div style={style}>UP</div>
          </BackTop>
        </Card>
      ))}
    </>
  );
};

export default TestCard;
