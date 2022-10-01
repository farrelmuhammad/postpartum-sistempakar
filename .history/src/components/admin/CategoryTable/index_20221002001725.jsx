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

const CategoryTable = ({data}) => {
//   const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(false);

  const columns = [
    {
      title: "Kode",
      dataIndex: "id",
      key: "id",
      width: "8%",
      render: (text) => <a>K - {text}</a>,
    },
    {
      title: "Kategori",
      dataIndex: "category_name",
      key: "category_name",
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

export default CategoryTable;
