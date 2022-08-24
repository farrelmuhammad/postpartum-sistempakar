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
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{
                        height: '100vh  ',
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
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                            (icon, index) => ({
                                key: String(index + 1),
                                icon: React.createElement(icon),
                                label: `nav ${index + 1}`,
                            }),
                        )}
                    />
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
                            content
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Appbar