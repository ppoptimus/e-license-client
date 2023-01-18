import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import useScript from "../helper/useScript";

import jQuery from "jquery";
import $ from "jquery";
window.jQuery = jQuery;
//var $ = require('jquery');

async function loginUser(credentials) {
  return fetch("http://127.0.0.1:8080/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const logo = process.env.PUBLIC_URL + "/assets/images/logo.png";
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    token = true;
    // setToken(token);
    if (token) {
      navigate("/");
      // navigate(0);
    }
  };

  const handleClick = () => {
    var o = document.querySelector(".password-input");
    "password" === o.type ? (o.type = "text") : (o.type = "password");
  };

  //useScript('/assets/js/app.js');
  useScript("/assets/js/pages/password-addon.init.js");
  return (
    <>
      {/* auth-page wrapper */}
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay" />
        {/* auth-page content */}
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card overflow-hidden">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4 auth-one-bg h-100">
                        <div className="bg-overlay" />
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mt-auto">
                            <div id="qoutescarouselIndicators" className="carousel slide" data-bs-ride="carousel">
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="0"
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                />
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="1"
                                  aria-label="Slide 2"
                                />
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="2"
                                  aria-label="Slide 3"
                                />
                              </div>
                              <div className="carousel-inner text-center text-white-50 pb-5">
                                <div className="carousel-item active">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for customization. Thanks very much! "
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " The theme is really great with an amazing customer support."
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for customization. Thanks very much! "
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* end carousel */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}

                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4">
                        <div>
                          <h5 className="text-primary">ระบบบริการขอใบอนุญาตจัดหางานอิเล็คทรอนิกส์</h5>
                        </div>

                        <div className="mt-4">
                          <form action="index.html">
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                ชื่อผู้ใช้
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="เลขประจำตัว 13 หลัก"
                              />
                            </div>

                            <div className="mb-3">
                              {/* <div className="float-end">
                                                                <a href="auth-pass-reset-cover.html" className="text-muted">Forgot password?</a>
                                                            </div> */}
                              <label className="form-label" htmlFor="password-input">
                                รหัสผ่าน
                              </label>
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <input
                                  type="password"
                                  className="form-control pe-5 password-input"
                                  placeholder="รหัสผ่านของระบบขอใบอนุญาตฯ"
                                  id="password-input"
                                />
                                <button
                                  onClick={handleClick}
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                >
                                  <i className="ri-eye-fill align-middle" />
                                </button>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button className="btn btn-success w-100" type="submit" onClick={handleSubmit}>
                                เข้าระบบ
                              </button>
                            </div>

                            <div className="mt-4 text-center">
                              <div className="signin-other-title">
                                <h5 className="fs-13 mb-4 title">เข้าระบบด้วยระบบบริการประชาชน (e-Service)</h5>
                              </div>

                              <div>
                                <button type="button" className="btn btn-outline-light waves-effect waves-light">
                                  <img src={logo} alt="" height="50" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end auth page content */}
      </div>
      {/* end auth-page-wrapper */}
    </>
  );
}
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// };
