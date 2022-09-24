import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "../assets/image/Logo.svg";
import Swal from "sweetalert2";

const Navbar = () => {
  const isLoggedIn = !!useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleLogout = () => {
    // jsCookie.remove('auth')
    localStorage.clear("persist:auth");
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
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#targetModal-item"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="modal-item modal fade"
          id="targetModal-item"
          tabindex="-1"
          role="dialog"
          aria-labelledby="targetModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-white border-0">
              <div className="modal-header border-0">
                <a className="modal-title" id="targetModalLabel">
                  <img
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-2.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                  <Link to="/" className="text-decoration-none">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                  </Link>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {isLoggedIn ? (
                <div className="modal-footer text-black border-0 gap-3">
                  <Button
                    size="medium"
                    // type="primary"
                    style={{
                      border: 0,
                    }}
                    icon={<UserOutlined />}
                  />
                </div>
              ) : (
                <div className="modal-footer border-0 gap-3">
                  <Link to="/login">
                    <button className="btn btn-fill text-white">
                      <FiLogIn className="me-2" />
                      Masuk
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <Link to="/" className="text-decoration-none">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className="gap-3">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="user" icon={<SettingOutlined />}>
                      Profile
                    </Menu.Item>
                    <Menu.Item
                      onClickCapture={handleLogout}
                      key="logout"
                      icon={<LogoutOutlined />}
                    >
                      Logout
                    </Menu.Item>
                  </Menu>
                }
                placement="bottomRight"
                arrow
              >
                <Button
                  size="large"
                  shape="circle"
                  // type="primary"
                  style={{
                    border: 0,
                  }}
                  icon={<UserOutlined style={{ fontSize: "140%" }} />}
                />
              </Dropdown>
            </div>
          ) : (
            <div className="modal-footer border-0 gap-3">
              <Link to="/login">
                <button className="btn btn-fill text-white">
                  <FiLogIn className="me-2" />
                  Masuk
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
