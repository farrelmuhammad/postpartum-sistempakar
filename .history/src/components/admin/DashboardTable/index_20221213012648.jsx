import { Table, Typography } from "antd";
import React from "react";
import { useState } from "react";
const { Text } = Typography;

const DashboardTable = ({ data }) => {
  const [ellipsis, setEllipsis] = useState(true);

  const columns = [
    {
      title: "Nama",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "No. HP",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Alamat",
      dataIndex: "address",
      key: "address",
      width: "20%",
      render: (text) => (
        <Text
          style={
            ellipsis
              ? {
                  width: 500,
                }
              : undefined
          }
          ellipsis={
            ellipsis
              ? {
                  tooltip: text,
                }
              : false
          }
        >
          {text}
        </Text>
      ),
    },
    {
      title: "Umur",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Kelamin",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Postnatal",
      dataIndex: "postnatal",
      key: "postnatal",
    },
    {
      title: "Kategori Gangguan",
      dataIndex: "category",
      key: "category",
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        // loading={loading}
        pagination={{ pageSize: 4 }}
        style={{
          minHeight: 330,
        }}
      />
    </>
  );
};

export default DashboardTable;
