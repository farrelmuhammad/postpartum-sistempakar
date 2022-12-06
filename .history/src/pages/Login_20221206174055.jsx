import React, { useState } from "react";
import ImgLogin from "../assets/image/login.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setData } from "../redux/slices/authSlice";
import axios from "axios";
import Url from "../Config";
import Home from "./Home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const isLoggedIn = jsCookie.get('auth')
  const isLoggedIn = !!useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    var toastMixin = Swal.mixin({
      toast: true,
      icon: "success",
      title: "General Title",
      animation: false,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    const userData = new URLSearchParams();
    userData.append("email", email);
    userData.append("password", password);

    try {
      const res = await axios({
        method: "POST",
        url: `${Url}/login`,
        data: userData,
      });
      console.log(res);
      dispatch(
        setData({
          accessToken: res.data.accessToken,
        })
      );
      navigate("/");
      toastMixin.fire({
        animation: true,
        title: "Login Successfull",
      });
    } catch (err) {
      if (err.response.message) {
        console.log("err.response ", err.response);
        toastMixin.fire({
          icon: "error",
          animation: true,
          title: "Wrong username or password",
        });
      } else if (err.request.message) {
        console.log("err.request ", err.request);
        toastMixin.fire({
          icon: "error",
          animation: true,
          title: "Wrong username or password",
        });
      } else if (err.message) {
        console.log(err.message);
        // do something other than the other two
        toastMixin.fire({
          icon: "error",
          animation: true,
          title: "Wrong username or password",
        });
      }
    }
  };

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <>
      <div className="content-3-5 d-flex flex-column align-items-center h-100 flex-lg-row">
        <div className="position-relative d-none d-lg-block h-100 width-left">
          <img
            className="position-absolute img-fluid centered"
            src={ImgLogin}
            alt=""
          />
        </div>
        <div className="d-flex mx-auto align-items-left justify-content-left width-right mx-lg-0">
          <div className="right mx-lg-0 mx-auto">
            <button className="btn btn-light" onClick={() => navigate(-1)}>
              <FiArrowLeft className="m-1" />
            </button>
            <div className="align-items-center justify-content-center d-lg-none d-flex">
              <img className="img-fluid" src={ImgLogin} alt="" />
            </div>
            <h3 className="title-text">Log In to continue</h3>
            <p className="caption-text">
              Please log in using that account has
              <br />
              registered on the website.
            </p>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div>
                <label for="" className="d-block input-label">
                  Username
                </label>
                <div className="d-flex w-100 div-input">
                  <input
                    className="input-field border-0"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Email Address"
                    autocomplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label for="" className="d-block input-label">
                  Password
                </label>
                <div className="d-flex w-100 div-input">
                  <input
                    className="input-field border-0"
                    type="password"
                    name=""
                    id="password-content-3-5"
                    placeholder="Your Password"
                    minlength="6"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                className="btn btn-fill text-white d-block w-100"
                type="submit"
              >
                Log In To My Account
              </button>
            </form>
            <p className="text-center bottom-caption">
              Don't have an account yet?
              <Link to="/register">
                <span className="green-bottom-caption">Register Here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
