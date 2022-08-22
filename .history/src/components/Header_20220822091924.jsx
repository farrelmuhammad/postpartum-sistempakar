import React from "react";
import Banner1 from '../assets/image/banner1.svg'

const Header = () => {
  return (
    <>
      <div>
        <div class="mx-auto d-flex flex-lg-row flex-column hero">
          {/* <!-- Left Column --> */}
          <div class="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
            <p class="text-caption-up">Selamat datang di,</p>
            <h1 class="title-text-big">
              Postpartum
              <br class="d-lg-block d-none" />
              Depression Screening
            </h1>
            <p class="text-caption">
              Postpartum Depression Screening merupakan layanan dukungan
              kesehatan mental dan pengembangan diri khususnya pasca melahirkan
              pasangan suami-istri dari Universitas 17 Agustus 1945 Surabaya
              untuk masyarakat Indonesia
            </p>
            <div class="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
              <button class="btn d-inline-flex mb-md-0 btn-try text-white">
                Try it free
              </button>
              <button class="btn btn-outline">
                <div class="d-flex align-items-center">
                  <svg
                    class="me-2"
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
                  </svg>
                  Watch the video
                </div>
              </button>
            </div>
          </div>
          {/* <!-- Right Column --> */}
          <div class="right-column text-center d-flex justify-content-center pe-0">
            <img
              id="img-fluid"
              class="h-auto mw-100"
              src={Banner1}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
