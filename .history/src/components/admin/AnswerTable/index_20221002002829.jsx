import { Table } from "antd";
import React, { useState } from "react";

const AnswerTable = ({data}) => {
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

export default AnswerTable;
