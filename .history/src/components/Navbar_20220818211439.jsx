import React from "react";

const Navbar = () => {
  return (
    <>
      <div class="navbar navbar-expand-lg navbar-light">
        <a href="{{ url('/') }}">
          <img style="margin-right: 0.75rem" src="./img/logo.png" alt="" />
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#targetModal-item"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="modal-item modal fade"
          id="targetModal-item"
          tabindex="-1"
          role="dialog"
          aria-labelledby="targetModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content bg-white border-0">
              <div
                class="modal-header border-0"
                style="padding: 2rem; padding-bottom: 0"
              >
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="modal-body"
                style="padding: 2rem; padding-top: 0; padding-bottom: 0"
              >
                <ul class="navbar-nav responsive me-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="{{ url('/admin') }}">
                      Admin
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{{ url('/blog') }}">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{{ url('/rmpty-state') }}">
                      FAQ
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{{ url('/about-us') }}">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="modal-footer border-0 gap-3"
                style="padding: 2rem; padding-top: 0.75rem"
              >
                <a class="btn btn-fill text-white" href="#category">
                  Let Us Help You
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/admin') }}">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/blog') }}">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/empty-state') }}">
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/about-us') }}">
                About Us
              </a>
            </li>
          </ul>
          <div class="gap-3">
            <a class="btn btn-fill text-white" href="#test">
              Let Us Help You
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
