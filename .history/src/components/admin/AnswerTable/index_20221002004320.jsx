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

const AnswerTable = ({data, deleteSymptoms}) => {
//   const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(false);

  const columns = [
    {
      title: "Kode",
      dataIndex: "id",
      key: "id",
      width: "8%",
      render: (text) => <a>G - {text}</a>,
    },
    {
      title: "Gejala",
      dataIndex: "symptoms_name",
      key: "symptoms_name",
    },
    {
      title: "Value",
      dataIndex: "symptoms_value",
      key: "symptoms_value",
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
      align: "center",
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

export default AnswerTable;