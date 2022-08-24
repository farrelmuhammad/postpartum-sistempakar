import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import Footer from "../../components/Footer";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    LogoutOutlined,
    MailOutlined,
    SettingOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Space } from 'antd';
import Search from 'antd/lib/transfer/search';

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

const Appbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout hasSider>
                <Sider
                    // collapsible
                    // collapsed={collapsed}
                    // onCollapse={(value) => setCollapsed(value)}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                    theme="white"
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
                </Sider>
                <Layout
                    className="site-layout"
                    style={{
                        marginLeft: 200,
                    }}
                >
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            position: 'fixed',
                            width: '100%',
                        }}
                    >
                        <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                            <Space
                                style={{ marginLeft: 20 }}
                            >
                                <Search
                                    placeholder="input search text"
                                    allowClear
                                    enterButton="Search"
                                    size="large"
                                // onSearch={onSearch}
                                />
                            </Space>
                            {/* <Menu> */}
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
                            {/* </Menu> */}
                        </Menu>
                    </Header>
                    <Content
                        style={{
                            margin: '80px 16px 0',
                            overflow: 'initial',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                textAlign: 'center',
                            }}
                        >
                            <p>long content</p>
                            {
                                // indicates very long content
                                Array.from(
                                    {
                                        length: 100,
                                    },
                                    (_, index) => (
                                        <React.Fragment key={index}>
                                            {index % 20 === 0 && index ? 'more' : '...'}
                                            <br />
                                        </React.Fragment>
                                    ),
                                )
                            }
                        </div>
                    </Content>
                    {/* <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer> */}
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}

export default Appbar