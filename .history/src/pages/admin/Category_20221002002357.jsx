import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
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
  SnippetsOutlined,
  TeamOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Layout,
  Menu,
  message,
  Modal,
  notification,
  Space,
} from "antd";
import Search from "antd/lib/transfer/search";
import { Link, useNavigate } from "react-router-dom";
import QuestionTable from "../../components/admin/QuestionTable";
import Url from "../../Config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import CategoryTable from "../../components/admin/CategoryTable";

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

const Category = () => {
  const [category, setCategory] = useState([]);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    getSymptoms();
  }, []);

  const getSymptoms = async () => {
    await axios
      .get(`${Url}/category`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((res) => {
        setCategory(res.data);
        console.log(res.data);
      });
  };

  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            height: "auto",
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
            defaultSelectedKeys={["4"]}
            // selectedKeys={[location.pathname]}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
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
              <Link to="/admin/answer" />
              Answer
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
                    <h4 className="title fw-bold">Kategori</h4>
                  </div>
                  <CategoryTable
                    data={category}
                    // deleteSymptoms={deleteSymptoms}
                  />
                </div>
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

export default Category;
