import { Avatar, Card, Radio, Skeleton, Switch } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Url from "../Config";

const TestCard = () => {
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.auth);
  const [value, setValue] = useState(1);
  const [symptoms, setSymptoms] = useState([]);
  const [answer, setAnswers] = useState([]);

  useEffect(() => {
    getSymptoms();
    getAnswer()
  }, []);

  const getSymptoms = async () => {
    await axios
      .get(`${Url}/symptoms`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((res) => {
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
        setAnswers(res.data);
        console.log(res.data);
      });
  };

  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}
      {symptoms?.map((sym) => (
        <Card
        // style={{
        //   width: 300,
        //   marginTop: 16,
        // }}
        // loading={loading}
        >
          <div className="row content">
            <div className="col-12">
              <h5 className="text-caption-down">{sym.symptoms_name}</h5>
            </div>
            <Radio.Group onChange={onChange}>
              {answer?.map(ans => (
                <Radio value={ans.answer_value}>{ans.answer_name}</Radio>
              ))}
            </Radio.Group>
          </div>
        </Card>
      ))}

      {/* <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card> */}
    </>
  );
};

export default TestCard;
