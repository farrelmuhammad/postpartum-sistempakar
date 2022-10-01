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
import AnswerTable from "../../components/admin/AnswerTable";

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

const Answer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [answer_name, setAnswer_name] = useState([]);
  const [answer_value, setAnswer_value] = useState([]);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const deleteSymptoms = async (id) => {
    await axios.delete(`${Url}/symptoms/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    getSymptoms();
    Swal.fire("Berhasil Dihapus!", `G - ${id} Berhasil hapus`, "success");
  };

  useEffect(() => {
    getSymptoms();
  }, []);

  const getSymptoms = async () => {
    await axios
      .get(`${Url}/symptoms`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((res) => {
        setSymptoms(res.data);
        console.log(res.data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      // message.success('This is a success message');
    }, 2000);
    message.loading("Added question in progress..", 2.5).then(() => {
      message.success("Successfully Added", 2.5);
      getSymptoms();
    });
    const userData = new URLSearchParams();
    userData.append("answer_name", answer_name);
    // userData.append("password", password);
    axios({
      method: "post",
      url: `${Url}/answers`,
      data: userData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        // Swal.fire("Berhasil Ditambahkan", ` Masuk dalam list`, "success");
        navigate("/admin/question");
      })
      .catch((err) => {
        if (err.response) {
          console.log("err.response ", err.response);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.error,
          });
        } else if (err.request) {
          console.log("err.request ", err.request);
          Swal.fire("Gagal Ditambahkan", "Mohon Cek Dahulu..", "error");
        } else if (err.message) {
          // do something other than the other two
          Swal.fire("Gagal Ditambahkan", "Mohon Cek Dahulu..", "error");
        }
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
            defaultSelectedKeys={["5"]}
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
                    <h4 className="title fw-bold">Gejala</h4>
                  </div>
                  <div className="col button-add text-end me-3">
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={showModal}
                    />
                  </div>
                  <AnswerTable
                    data={symptoms}
                    deleteSymptoms={deleteSymptoms}
                  />
                </div>
                <Modal
                  title="Tambah Jawaban"
                  centered
                  visible={visible}
                  onOk={handleSubmit}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <div className="text-title text-start">
                    <div className="row">
                      <label
                        htmlFor="inputNama3"
                        className="col-sm-3 col-form-label"
                      >
                        Jawaban
                      </label>
                      <div className="col-sm-9">
                        <Input
                          placeholder="Type Question"
                          onChange={(e) => setAnswer_name(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </Modal>
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

export default Answer;
