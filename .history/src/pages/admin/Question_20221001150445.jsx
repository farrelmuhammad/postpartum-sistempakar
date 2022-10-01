import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Footer from "../../components/Footer";
import {
    AppstoreOutlined,
    BarChartOutlined,
    BulbFilled,
    CloudOutlined,
    DatabaseOutlined,
    FileOutlined,
    LogoutOutlined,
    MailOutlined,
    PieChartOutlined,
    PlusOutlined,
    SettingOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Input, Layout, Menu, message, Modal, notification, Space } from 'antd';
import Search from 'antd/lib/transfer/search';
import { Link } from 'react-router-dom';
import QuestionTable from '../../components/admin/QuestionTable';
import Url from '../../Config';
import axios from 'axios';

const { Header, Content, Sider } = Layout;
const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

const Question = () => {
    const [collapsed, setCollapsed] = useState(false);

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);


    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            // message.success('This is a success message');
        }, 2000);
        message
            .loading('Added question in progress..', 2.5)
            .then(() => message.success('Successfully Added', 2.5))
    };

    const handleCancel = () => {
        alert('Clicked cancel button');
        setVisible(false);
    };

    const getSymptoms = async () => {
        await axios.get(`${Url}`)
    }

    return (
        <>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{
                        height: 'auto',
                        // position: 'fixed',
                    }}
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['2']}
                    // selectedKeys={[location.pathname]}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DatabaseOutlined />}>
                            <Link to="/admin/question" />
                            Question
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FileOutlined />}>
                            Blog
                        </Menu.Item>
                        <Menu.SubMenu key="SubMenu" title="User" icon={<UserOutlined />}>
                            <Menu.Item key="two" icon={<SettingOutlined />}>
                                Profile
                            </Menu.Item>
                            <Menu.Item key="three" icon={<LogoutOutlined />}>
                                Logout
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        <Menu
                            mode="horizontal"
                        // defaultSelectedKeys={['mail']}
                        >
                            <Space
                                style={{
                                    marginLeft: 20,
                                }}
                            >
                                <Search
                                    placeholder="input search text"
                                    allowClear
                                    enterButton="Search"
                                    size="large"
                                // onSearch={onSearch}
                                />
                            </Space>
                            <Menu.Item key="mail" icon={<MailOutlined />}>
                                Navigation One
                            </Menu.Item>
                            <Menu.SubMenu key="SubMenu" title="User" icon={<UserOutlined />}>
                                <Menu.Item key="two" icon={<SettingOutlined />}>
                                    Profile
                                </Menu.Item>
                                <Menu.Item key="three" icon={<LogoutOutlined />}>
                                    Logout
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Header>
                    <Content
                        style={{
                            margin: '5px 16px 0',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 20,
                                minHeight: 360,
                            }}
                        >
                            <div className="container p-3 mb-1 bg-body rounded d-flex flex-column">
                                <div className="row">
                                    <div className="col text-title text-start">
                                        <h4 className="title fw-bold">Question</h4>
                                    </div>
                                    <div className="col button-add text-end me-3">
                                        <Button
                                            type="primary"
                                            icon={<PlusOutlined />}
                                            onClick={showModal}
                                        />
                                    </div>
                                    <QuestionTable />
                                </div>
                                <Modal
                                    title="Tambah Question"
                                    centered
                                    visible={visible}
                                    onOk={handleOk}
                                    confirmLoading={confirmLoading}
                                    onCancel={handleCancel}
                                >
                                    <div className="text-title text-start">
                                        <div className="row mb-3">
                                            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">Kode</label>
                                            <div className="col-sm-9">
                                                <Input
                                                    placeholder="Question Code"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">Pertanyaan</label>
                                            <div className="col-sm-9">
                                                <Input
                                                    placeholder="Type Question"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Content >
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    />
                </Layout >
            </Layout >
        </>
    )
}

export default Question