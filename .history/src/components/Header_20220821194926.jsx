import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div className="mx-auto d-flex flex-lg-row flex-column hero">
          {/* <!-- Left Column --> */}
          <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
            <p className="text-caption-up">Knows Early Your Self</p>
            <h1 className="title-text-big">
              You're <b>Not</b><br className="d-lg-block d-none" />
              Alone <b>Now.</b>
            </h1>
            <p className="text-caption-down">Don't fight alone for mental illness. <br>
              We're here stand to help you win the<br>
              battle with your family.</p>
            <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
              <a className="btn d-inline-flex mb-md-0 btn-try text-white" href="#test">
                Let Us Help You
              </a><br>
              <iframe className="spotify rounded-3" src="https://open.spotify.com/embed/playlist/71019EDcRamfMmOEEoTdEu" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
          {/* <!-- Right Column --> */}
          <div className="right-column text-center d-flex justify-content-center pe-0">
            <img id="img-fluid" className="h-auto mw-100" src="./img/img-hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
