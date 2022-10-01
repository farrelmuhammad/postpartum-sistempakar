import {
  ArrowLeftOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Descriptions,
  Input,
  Modal,
  PageHeader,
  Row,
  Select,
  Statistic,
  Tabs,
} from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const handleLogout = () => {
    // jsCookie.remove('auth')
    localStorage.removeItem("persist:auth");
    var toastMixin = Swal.mixin({
      toast: true,
      icon: "success",
      title: "General Title",
      animation: false,
      position: "top-right",
      showConfirmButton: false,
      timer: 800,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    toastMixin.fire({
      animation: true,
      title: "Logout Successfully",
    });
    navigate("/");
    setTimeout(window.location.reload.bind(window.location), 500);
  };

  return (
    <>
      <div className="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <div className="d-flex justify-content-center">
        <Avatar
          shape="square"
          size={80}
          icon={<UserOutlined style={{ fontSize: "140%" }} />}
        />
      </div>
      <div className="container mb-5">
        <div className="row justify-content-start mt-4">
          <div className="col-sm-1 ps-5">
            <SettingOutlined style={{ fontSize: "140%" }} />
          </div>
          <div className="col-sm-8" onClick={showModal}>
            <h5>
              <a className="text-black text-decoration-none pe-auto">Profile</a>
            </h5>
          </div>
          <Modal
            title="Profile"
            centered
            visible={visible}
            // onOk={handleSubmit}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <div className="text-title text-start">
              <div className="row">
                <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
                  Nama
                </label>
                <div className="col-sm-9">
                  <Input
                    placeholder="Type your name"
                    // onChange={(e) => setSymptoms_name(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
                  Alamat
                </label>
                <div className="col-sm-9">
                  <Input
                    placeholder="Type your address"
                    // onChange={(e) => setSymptoms_name(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
                  Alamat
                </label>
                <div className="col-sm-9">
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </div>
              </div>
            </div>
          </Modal>
          <div className="border-bottom mt-3"></div>
        </div>
        <div className="row justify-content-start mt-4">
          <div className="col-sm-1 ps-5">
            <LogoutOutlined style={{ fontSize: "140%" }} />
          </div>
          <div className="col-sm-8 pe-auto" onClick={handleLogout}>
            <h5>
              <a className="text-black text-decoration-none pe-auto">Logout</a>
            </h5>
          </div>
          <div className="border-bottom mt-3"></div>
        </div>
      </div>
      <div className="container-footer-profile">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
