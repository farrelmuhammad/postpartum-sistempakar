import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Url from "../../../Config";

const QuestionTable = ({data, deleteSymptoms}) => {
//   const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(0);

    const numbet = []

    for(let i=1;i<=data.lenght;i++){
        number.push(i)
    }

    console.log(number)

  const columns = [
    {
      title: "No.",
      dataIndex: "number",
      key: "number",
      width: "5%",
    //   render: () => {
    //     for (let i = 1; i <= data.length; i++) {
    //         setNumber(i)
    //     }
    //   },
    },
    {
      title: "Gejala",
      dataIndex: "symptoms_name",
      key: "symptoms_name",
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
      render: (_, record) => (
        <>
          <Space size="middle">
            <Button
              size="small"
              type="danger"
              icon={<DeleteOutlined />}
              onClick={() => deleteSymptoms(record.id)}
            />
          </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{ pageSize: 4 }}
        style={{
          minHeight: 330,
        }}
      />
    </>
  );
};

export default QuestionTable;
