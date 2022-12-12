import { Table, Typography } from "antd";
import React from "react";
import { useState } from "react";
const { Text } = Typography;

const DashboardTable = ({ data }) => {
  const [ellipsis, setEllipsis] = useState(true);

  const expandedRowRender = () => {
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Status",
        key: "state",
        // render: () => (
        //   <span>
        //     <Badge status="success" />
        //     Finished
        //   </span>
        // ),
      },
      {
        title: "Upgrade Status",
        dataIndex: "upgradeNum",
        key: "upgradeNum",
      },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

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
