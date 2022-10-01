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

const columns = [
  {
    title: "No.",
    dataIndex: "id",
    key: "id",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Gejala",
    dataIndex: "symptoms_name",
    key: "symptoms_name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <>
        <Space size="middle">
          <Button
            size="small"
            type="danger"
            icon={<DeleteOutlined />}
            // onClick={() => deleteSalesOrder(record.id)}
          />
        </Space>
      </>
    ),
  },
];

const QuestionTable = ({data}) => {
//   const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state) => state.auth);

//   useEffect(() => {
//     getSymptoms();
//   }, []);

//   const getSymptoms = async () => {
//     await axios
//       .get(`${Url}/symptoms`, {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${auth.accessToken}`,
//         },
//       })
//       .then((res) => {
//         setSymptoms(res.data);
//         setIsLoading(true)
//         console.log(res.data);
//       });
//   };

// console.log(data)

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
