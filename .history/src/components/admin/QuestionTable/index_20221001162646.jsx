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
  const auth = useSelector((state) => state.auth);

  const columns = [
    {
      title: "No.",
      dataIndex: "id",
      key: "id",
      width: "5%"
      // render: (text) => <a>{text}</a>,
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
