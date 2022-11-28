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

const QuestionTable = ({ data, deleteSymptoms }) => {
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
      dataIndex: "symptom_name",
      key: "symptom_name",
      width: "35%",
    },
    {
      title: "MB Baby Blues",
      dataIndex: "mb_baby",
      key: "mb_baby",
      width: "10%",
    },
    {
      title: "MB Major",
      dataIndex: "mb_major",
      key: "mb_major",
      width: "10%",
    },
    {
      title: "MB Psychosis",
      dataIndex: "mb_psychosis",
      key: "mb_psychosis",
      width: "10%",
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
        size="small"
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{ pageSize: 5 }}
        style={{
          minHeight: 330,
        }}
      />
    </>
  );
};

export default QuestionTable;
