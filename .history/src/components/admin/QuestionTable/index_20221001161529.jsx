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
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <>
        <Space size="middle">
          {/* <Link to={`/pesanan/detail/${record.id}`}> */}
          <Button size="small" type="primary" icon={<InfoCircleOutlined />} />
          {/* </Link> */}
          {/* <Link to={`/pesanan/edit/${record.id}`}> */}
          <Button size="small" type="success" icon={<EditOutlined />} />
          {/* </Link> */}
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
