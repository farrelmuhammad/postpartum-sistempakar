import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Space, Table, Tag } from 'antd';
import React, { useState } from 'react'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';

                    if (tag === 'loser') {
                        color = 'volcano';
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
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <>
                <Space size="middle">
                    {/* <Link to={`/pesanan/detail/${record.id}`}> */}
                    <Button
                        size='small'
                        type="primary"
                        icon={<InfoCircleOutlined />}
                    />
                    {/* </Link> */}
                    {/* <Link to={`/pesanan/edit/${record.id}`}> */}
                    <Button
                        size='small'
                        type="success"
                        icon={<EditOutlined />}
                    />
                    {/* </Link> */}
                    <Button
                        size='small'
                        type="danger"
                        icon={<DeleteOutlined />}
                    // onClick={() => deleteSalesOrder(record.id)}
                    />
                </Space>
            </>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const QuestionTable = () => {

    const [isLoading, setIsLoading] = useState(false);

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
    )
}

export default QuestionTable