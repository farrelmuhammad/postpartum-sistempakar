import React, { useState } from "react";
import ImgLogin from "../assets/image/login.svg";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setData } from "../redux/slices/authSlice";
import axios from "axios";
import Url from "../Config";
import Home from "./Home";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  // const isLoggedIn = jsCookie.get('auth')
  const isLoggedIn = !!useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  dispatch(setData({ token: localStorage.getItem("token") }));

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
    const userData = new URLSearchParams();
    userData.append("username", username);
    userData.append("password", password);

    // for (var pair of userData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    axios({
      method: "post",
      url: `${Url}/auth/signin`,
      data: userData,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            setData({
              token: res.data,
              // username: res.data.profileData.name,
              // password: res.data.profileData.profile_picture_url,
              // cityId: res.data.profileData.city_id,
              // address: res.data.profileData.address,
              // phone: res.data.profileData.phone_number,
            })
          );
          navigate("/");
          setTimeout(window.location.reload.bind(window.location), 300);
          toastMixin.fire({
            animation: true,
            title: "Signed in Successfully",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toastMixin.fire({
          icon: "error",
          animation: true,
          title: "Not match!",
        });
      });
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
                    onChange={(e) => setUsername(e.target.value)}
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
                  <div onclick="togglePassword()">
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="icon-toggle"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 7C0.555556 4.66667 3.33333 0 10 0C16.6667 0 19.4444 4.66667 20 7C19.4444 9.52778 16.6667 14 10 14C3.31853 14 0.555556 9.13889 0 7ZM10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 6.90536 11.9934 6.81226 11.9807 6.72113C12.2792 6.89828 12.6277 7 13 7C13.3608 7 13.6993 6.90447 13.9915 6.73732C13.9971 6.82415 14 6.91174 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C10.6389 3 11.2428 3.14979 11.7786 3.41618C11.305 3.78193 11 4.35535 11 5C11 5.09464 11.0066 5.18773 11.0193 5.27887C10.7208 5.10171 10.3723 5 10 5Z"
                        fill="#CACBCE"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-1 justify-content-end">
                <a href="#" className="forgot-password fst-italic">
                  Lupa Password?
                </a>
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
              <span className="green-bottom-caption">Register Here</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
