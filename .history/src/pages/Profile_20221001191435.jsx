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
  PageHeader,
  Row,
  Statistic,
  Tabs,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  const navigate = useNavigate();

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
          <div className="col-sm-8">
            <h5>Profile</h5>
          </div>
          <div className="border-bottom mt-3"></div>
        </div>
        <div className="row justify-content-start mt-4">
          <div className="col-sm-1 ps-5">
            <LogoutOutlined style={{ fontSize: "140%" }} />
          </div>
          <div className="col-sm-8 pe-auto" onClick={handleLogout}>
            <h5><a className="pe-auto">Logout</a></h5>
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
