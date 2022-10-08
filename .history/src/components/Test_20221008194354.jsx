import { Avatar, Card, Radio, Skeleton, Switch } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Url from "../Config";

const TestCard = ({symptoms, answers}) => {
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.auth);
  

  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      {symptoms?.map((sym) => (
        <Card
          // style={{
          //   width: 300,
          //   marginTop: 16,
          // }}
          loading={loading}
        >
          <div className="row content">
            <div className="col-12">
              <h5 className="text-caption-down">{sym.symptoms_name}</h5>
            </div>
            <Radio.Group onChange={onChange}>
              {answers?.map((ans) => (
                <Radio value={ans.answer_value}>{ans.answer_name}</Radio>
              ))}
            </Radio.Group>
          </div>
        </Card>
      ))}
    </>
  );
};

export default TestCard;
