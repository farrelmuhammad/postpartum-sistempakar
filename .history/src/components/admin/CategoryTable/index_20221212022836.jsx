import { Table } from "antd";
import React, { useState } from "react";

const CategoryTable = ({data, loading}) => {
  const [isLoading, setIsLoading] = useState(false);

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
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: 4 }}
        style={{
          minHeight: 330,
        }}
      />
    </>
  );
};

export default CategoryTable;
