import React from "react";

export const RequestLicense = () => {
  const handleClick = () => {
    var o = document.querySelector(".password-input"); 
    "password" === o.type ? o.type = "text" : o.type = "password"
};
  return (
    <>
       <div className="mt-4">
                                                    <form action="index.html">

                                                        <div className="mb-3">
                                                            <label htmlFor="username" className="form-label">Username</label>
                                                            <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="float-end">
                                                                <a href="auth-pass-reset-cover.html" className="text-muted">Forgot password?</a>
                                                            </div>
                                                            <label className="form-label" htmlFor="password-input">Password</label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" />
                                                                <button onClick={handleClick} className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle" /></button>
                                                            </div>
                                                        </div>


                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value={true} id="auth-remember-check" />
                                                            <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                                        </div>

                                                        <div className="mt-4">
                                                            <button className="btn btn-success w-100" type="submit">Sign In</button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <div className="signin-other-title">
                                                                <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                            </div>

                                                            <div>
                                                                <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16" /></button>
                                                                <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16" /></button>
                                                                <button type="button" className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16" /></button>
                                                                <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16" /></button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
    </>
  );
};
