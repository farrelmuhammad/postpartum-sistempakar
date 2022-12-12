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

const RuleTable = ({ data, deleteAnswers }) => {
  //   const [Answers, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(false);

  const columns = [
    {
      title: "Kode",
      dataIndex: "id",
      key: "id",
      width: "8%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Jawaban",
      dataIndex: "answer",
      key: "answer",
    },
    {
      title: "MD User",
      dataIndex: "md_user",
      key: "md_user",
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

export default RuleTable;
