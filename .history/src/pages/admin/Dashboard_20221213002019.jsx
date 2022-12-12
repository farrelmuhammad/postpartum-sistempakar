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
  PlusOutlined,
  SettingOutlined,
  ShopOutlined,
  SnippetsOutlined,
  TeamOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Modal, Space } from "antd";
import Search from "antd/lib/transfer/search";
import { Link } from "react-router-dom";
import RouteApp from "../../routes";
import DashboardTable from "../../components/admin/DashboardTable";

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
  const [collapsed, setCollapsed] = useState(false);

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
              <Link to="/admin" />
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
              <Link to="/admin/users" />
              Users
            </Menu.Item>
            <Menu.Item key="3" icon={<DatabaseOutlined />}>
              <Link to="/admin/question" />
              Question
            </Menu.Item>
            <Menu.Item key="4" icon={<FileOutlined />}>
              <Link to="/admin/category" />
              Category
            </Menu.Item>
            <Menu.Item key="5" icon={<SnippetsOutlined />}>
              <Link to="/admin/rule" />
              Rule
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
              <div className="container p-3 mb-1 bg-body rounded d-flex flex-column">
                <div className="row">
                  <div className="col text-title text-start">
                    <h4 className="title fw-bold">Riwayat</h4>
                  </div>
                  <div className="col button-add text-end me-3">
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      // onClick={showModal}
                    />
                  </div>
                  <DashboardTable
                  // data={category}
                  // loading={loading}
                  />
                </div>
                {/* <Modal
                  title="Tambah Gejala"
                  centered
                  visible={visible}
                  onOk={handleSubmit}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                  width={800}
                >
                  <div className="text-title text-start">
                    <div className="row">
                      <label
                        htmlFor="inputNama3"
                        className="col-sm-3 col-form-label"
                      >
                        Gejala
                      </label>
                      <div className="col-sm-9">
                        <Input
                          placeholder="Type Question"
                          onChange={(e) =>
                            setSymptom({ ...symptom, name: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Modal> */}
              </div>
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
};

export default Dashboard;
