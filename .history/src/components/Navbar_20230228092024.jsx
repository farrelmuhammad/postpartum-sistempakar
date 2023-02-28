import { Button, DatePicker, Dropdown, Input, Menu, Modal, Radio } from "antd";
import React, { useState } from "react";
import { FiLogIn, FiSettings } from "react-icons/fi";
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
import axios from "axios";
import Url from "../Config";
const { TextArea } = Input;

const Navbar = () => {
  const isLoggedIn = !!useSelector((state) => state.auth.accessToken);
  const admin = useSelector((state) => state.auth.role);

  const [modal3Visible, setModal3Visible] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    address: "",
    birth_date: "",
    gender: "",
    age: "",
  });

  const navigate = useNavigate();

  const onChange = (date, dateString) => {
    setFormData({ ...formData, birth_date: dateString });
    console.log(date, dateString);
  };

  const getProfileById = async () => {
    await axios.get(`${Url}/user/profile`)
      .then((res) => {
        console.log(res.data.data);
      })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

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
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="text-decoration-none">
          <img src={Logo} alt="" />
        </Link>
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
                    src={Logo}
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
                      <a className="nav-link" >
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/about" className="text-decoration-none">
                    <li className="nav-item">
                      <a className="nav-link" >
                        About Us
                      </a>
                    </li>
                  </Link>
                  <li className="nav-item">
                    <a className="nav-link" >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              {/* {isLoggedIn ? (
                <div className="modal-footer text-black border-0 gap-3">
                  <Link to="/profile">
                    <button className="btn btn-fill text-white">
                      <FiSettings className="me-2" />
                      Setting
                    </button>
                  </Link>
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
              )} */}
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <Link to="/" className="text-decoration-none">
              <li className="nav-item active">
                <a className="nav-link" >
                  Home
                </a>
              </li>
            </Link>
            <Link to="/about" className="text-decoration-none">
              <li className="nav-item">
                <a className="nav-link" >
                  About Us
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" >
                Testimonials
              </a>
            </li>
          </ul>
          {/* {isLoggedIn ? (
            <div className="gap-3">
              <Dropdown
                overlay={
                  <Menu>
                    {admin === "admin" ? (
                      <Link
                        style={{
                          textDecoration: "none",
                        }}
                        to="/admin"
                      >
                        <Menu.Item key="1">Dashboard</Menu.Item>
                      </Link>
                    ) : null}
                    <Menu.Item key="2" onClick={() => setModal3Visible(true)}>
                      Profile
                    </Menu.Item>
                    <Menu.Item key="3" onClick={handleLogout}>
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
          )} */}
        </div>
      </nav>

      {/* Modal Profile */}
      <Modal
        title="Profile User"
        centered
        visible={modal3Visible}
        onCancel={() => setModal3Visible(false)}
        width={800}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={() => console.log(formData)}
          >
            Submit
          </Button>,
        ]}
      >
        <div className="text-title text-start">
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Nama Lengkap
            </label>
            <div className="col-sm-9">
              <Input
                placeholder="Type your name"
                onChange={(event) =>
                  setFormData({ ...formData, fullname: event.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Tangal Lahir
            </label>
            <div className="col-sm-9">
              <DatePicker
                style={{
                  width: "100%",
                }}
                onChange={onChange}
              />
              {/* <Input
                placeholder="Type your name"
                // onChange={(e) => setName(e.target.value)}
              /> */}
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Alamat
            </label>
            <div className="col-sm-9">
              <TextArea
                rows={4}
                style={{
                  marginBottom: 4,
                }}
                onChange={(event) =>
                  setFormData({ ...formData, address: event.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Umur
            </label>
            <div className="col-sm-9">
              <Input
                placeholder="Type your age"
                onChange={(event) =>
                  setFormData({ ...formData, age: event.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              No. Telpon
            </label>
            <div className="col-sm-9">
              <Input
                placeholder="Type your phone number"
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Kelamin
            </label>
            <div className="col-sm-9">
              <Radio.Group
                // value={value}
                onChange={(event) =>
                  setFormData({ ...formData, gender: event.target.value })
                }
              >
                <Radio value="L">L</Radio>
                <Radio value="P">P</Radio>
              </Radio.Group>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
