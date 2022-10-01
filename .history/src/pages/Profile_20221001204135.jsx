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
  DatePicker,
  Descriptions,
  Input,
  message,
  Modal,
  PageHeader,
  Row,
  Select,
  Statistic,
  Tabs,
} from "antd";
import { Option } from "antd/lib/mentions";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import ModalProfile from "../components/ModalProfile";
import Navbar from "../components/Navbar";
import Url from "../Config";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    address: "",
    city: "",
    province: "",
    phone: "",
    birth_place: "",
    birth_date: "",
    gender: "",
    profession: "",
    study_level: "",
  });
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const auth = useSelector((state) => state.auth);

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

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      // message.success('This is a success message');
    }, 2000);
    message.loading("Added question in progress..", 2.5);

    const userData = new URLSearchParams();
    // userData.append("symptoms_name", symptoms_name);
    // userData.append("password", password);
    axios({
      method: "post",
      url: `${Url}/profiles`,
      data: userData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then(() => {
        message.success("Successfully Added", 2.5);
      })
      .catch((err) => {
        message.error("Failed Added", 2);
        message.error("Please check your input", 2.5);
      });
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
          <ModalProfile visible={visible} />
          
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
