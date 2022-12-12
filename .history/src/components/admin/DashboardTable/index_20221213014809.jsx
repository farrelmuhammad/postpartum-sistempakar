import { Table, Tag, Typography } from "antd";
import React from "react";
import { useState } from "react";
const { Text } = Typography;

const DashboardTable = ({ data }) => {
  const [ellipsis, setEllipsis] = useState(true);

  const expandedRowRender = () => {
    const columns = [
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
    ];

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    {
      title: "Nama",
      dataIndex: "fullname",
      key: "fullname",
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
      align: "center",
      render: (category) => (
        <Tag color="blue">{category}</Tag>
      )
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          //   defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
        pagination={{ pageSize: 4 }}
        style={{
          minHeight: 330,
        }}
      />
    </>
  );
};

export default DashboardTable;
