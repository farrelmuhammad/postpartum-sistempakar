import { Table, Typography } from "antd";
import React from "react";
import { useState } from "react";
const { Text } = Typography;

const DashboardTable = ({ data }) => {
  const [ellipsis, setEllipsis] = useState(true);

  const columns = [
    {
      title: "Kode",
      dataIndex: "id",
      key: "id",
      width: "8%",
      render: (text) => <a>P - {text}</a>,
    },
    {
      title: "Kategori",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Deskripsi",
      dataIndex: "description",
      key: "description",
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
      title: "Solusi",
      dataIndex: "solution",
      key: "solution",
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
