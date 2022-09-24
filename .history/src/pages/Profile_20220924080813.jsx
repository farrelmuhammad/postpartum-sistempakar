import {
  ArrowLeftOutlined,
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
import Navbar from "../components/Navbar";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <div className="row justify-content-start ms-5">
        <div className="col-sm-1 ps-5">
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Avatar
          shape="square"
          size={80}
          icon={<UserOutlined style={{ fontSize: "140%" }} />}
        />
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-1 ps-5">
            <SettingOutlined style={{ fontSize: "140%" }} />
          </div>
          <div className="col-sm-8">
            <h5>Profile</h5>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-1 ps-5">
            <SettingOutlined style={{ fontSize: "140%" }} />
          </div>
          <div className="col-sm-8">
            <h5>Profile</h5>
          </div>
        </div>
      </div>
      {/* <div className="container-lg mx-auto p-0 position-relative header-2-1"></div> */}
    </>
  );
};

export default Profile;
