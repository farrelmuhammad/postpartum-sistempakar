import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner1 from "../assets/image/banner1.svg";
import { FiPlay } from "react-icons/fi";
import { Modal } from "antd";
import ModalYoutube from "./ModalYoutube";

const Header = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <div>
        <div className="mx-auto d-flex flex-lg-row flex-column hero">
          {/* <!-- Left Column --> */}
          <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
            <p className="text-caption-up">Selamat datang di,</p>
            <h1 className="title-text-big">
              Postpartum
              <br className="d-lg-block d-none" />
              Depression Screening
            </h1>
            <p className="text-caption-down">
              Postpartum Depression Screening merupakan layanan dukungan
              kesehatan mental dan pengembangan diri khususnya pasca melahirkan
              pasangan suami-istri dari Universitas 17 Agustus 1945 Surabaya
              untuk masyarakat Indonesia
            </p>
            <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
              <Link to="/test" className="text-decoration-none">
                <button className="btn d-inline-flex mb-md-0 btn-try text-white">
                  Coba Sekarang
                </button>
              </Link>
              <button
                className="btn btn-outline-dark"
                onClick={() => setModal2Open(true)}
              >
                <div className="d-flex align-items-center">
                  {/* <svg
                    className="me-2"
                    width="13"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9293 7.99988L6.66668 5.15788V10.8419L10.9293 7.99988ZM12.9173 8.27722L5.85134 12.9879C5.80115 13.0213 5.74283 13.0404 5.6826 13.0433C5.62238 13.0462 5.5625 13.0327 5.50934 13.0042C5.45619 12.9758 5.41175 12.9334 5.38075 12.8817C5.34976 12.83 5.33337 12.7708 5.33334 12.7105V3.28922C5.33337 3.22892 5.34976 3.16976 5.38075 3.11804C5.41175 3.06633 5.45619 3.02398 5.50934 2.99552C5.5625 2.96706 5.62238 2.95355 5.6826 2.95644C5.74283 2.95932 5.80115 2.97848 5.85134 3.01188L12.9173 7.72255C12.963 7.75299 13.0004 7.79423 13.0263 7.84261C13.0522 7.89099 13.0658 7.94501 13.0658 7.99988C13.0658 8.05475 13.0522 8.10878 13.0263 8.15716C13.0004 8.20553 12.963 8.24678 12.9173 8.27722Z"
                      fill="#555B61"
                    />
                  </svg> */}
                  <FiPlay />
                  Tonton Video
                </div>
              </button>
              <Modal
                // title="Vertically centered modal dialog"
                centered
                bordered
                visible={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                footer={null}
                width={610}
              >
                <ModalYoutube />
              </Modal>
            </div>
          </div>
          {/* <!-- Right Column --> */}
          <div className="right-column text-center d-flex justify-content-center pe-0">
            <img
              id="img-fluid"
              className="h-auto mw-100"
              src={Banner1}
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        class="content-2-2 container-xxl mx-auto p-0  position-relative"
        style={{
          fontFamily: 'Poppins', "sansserif"
        }}
      >
        <div class="text-center title-text">
          <h1 class="text-title">3 Keys Benefit</h1>
          <p class="text-caption" style="margin-left: 3rem; margin-right: 3rem">
            You can easily manage your business with a powerful tools
          </p>
        </div>

        <div class="grid-padding text-center">
          <div class="row">
            <div class="col-lg-4 column">
              <div class="icon">
                <img
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-5.png"
                  alt=""
                />
              </div>
              <h3 class="icon-title">Easy to Operate</h3>
              <p class="icon-caption">
                This can easily help you to
                <br />
                grow up your business fast
              </p>
            </div>
            <div class="col-lg-4 column">
              <div class="icon">
                <img
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-6.png"
                  alt=""
                />
              </div>
              <h3 class="icon-title">Real-Time Analytic</h3>
              <p class="icon-caption">
                With real-time analytics, you
                <br />
                can check data in real time
              </p>
            </div>
            <div class="col-lg-4 column">
              <div class="icon">
                <img
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-7.png"
                  alt=""
                />
              </div>
              <h3 class="icon-title">Very Full Secured</h3>
              <p class="icon-caption">
                With real-time analytics, we
                <br />
                will guarantee your data
              </p>
            </div>
          </div>
        </div>

        <div class="card-block">
          <div class="card">
            <div class="d-flex flex-lg-row flex-column align-items-center">
              <div class="me-lg-3">
                <img
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-1%20(1).png"
                  alt=""
                />
              </div>
              <div class="flex-grow-1 text-lg-start text-center card-text">
                <h3 class="card-title">
                  Fast Business Management in 30 minutes
                </h3>
                <p class="card-caption">
                  Our tools for business analysis helps an organization
                  understand
                  <br class="d-none d-lg-block" />
                  market or business development.
                </p>
              </div>
              <div class="card-btn-space">
                <button class="btn btn-card text-white">Buy Now</button>
                <button class="btn btn-outline">Demo Version</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
