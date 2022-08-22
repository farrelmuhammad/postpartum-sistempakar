import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light">
        <a href="{{ url('/') }}">
          <img style="margin-right: 0.75rem" src="./img/logo.png" alt="" />
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
              <div
                className="modal-header border-0"
                style="padding: 2rem; padding-bottom: 0"
              >
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body"
                style="padding: 2rem; padding-top: 0; padding-bottom: 0"
              >
                <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="{{ url('/admin') }}">
                      Admin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{{ url('/blog') }}">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{{ url('/rmpty-state') }}">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{{ url('/about-us') }}">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="modal-footer border-0 gap-3"
                style="padding: 2rem; padding-top: 0.75rem"
              >
                <a className="btn btn-fill text-white" href="#category">
                  Let Us Help You
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="{{ url('/admin') }}">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{{ url('/blog') }}">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{{ url('/empty-state') }}">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{{ url('/about-us') }}">
                About Us
              </a>
            </li>
          </ul>
          <div className="gap-3">
            <a className="btn btn-fill text-white" href="#test">
              Let Us Help You
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
