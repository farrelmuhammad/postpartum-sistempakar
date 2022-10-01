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

const AnswerTable = ({data, deleteAnswers}) => {
//   const [Answers, setSymptoms] = useState([]);
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
      title: "Jawaban",
      dataIndex: "answer_name",
      key: "answer_name",
    },
    {
      title: "Value",
      dataIndex: "answer_value",
      key: "answer_value",
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
              onClick={() => deleteAnswers(record.id)}
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
