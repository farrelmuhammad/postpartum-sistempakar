import React, { useState } from "react";
import "antd/dist/antd.css";
import Footer from "../../components/Footer";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  DatabaseOutlined,
  FileOutlined,
  LogoutOutlined,
  MailOutlined,
  PieChartOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import Search from "antd/lib/transfer/search";
import { Link } from "react-router-dom";
import RouteApp from "../../routes";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";

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

const Dashboard = () => {
  const { isLoggedIn } = useSelector((state) => state.auth.accessToken);
  const [collapsed, setCollapsed] = useState(false);

  if (isLoggedIn) {
    return (
      <>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{
              height: "100vh  ",
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
              defaultSelectedKeys={["1"]}
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
                <Menu.SubMenu
                  key="SubMenu"
                  title="User"
                  icon={<UserOutlined />}
                >
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
                margin: "5px 16px 0",
              }}
            >
              <div
                className="site-layout-background"
                style={{
                  padding: 20,
                  minHeight: 360,
                }}
              >
                NDA TAU CARANYA ROUTE DISINI ADUCH...
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            />
          </Layout>
        </Layout>
      </>
    );
  } else {
    return (
        <NotFound />
    )
  }
};

export default Dashboard;