import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import jQuery from "jquery";
import $ from "jquery";

import Header from "./menu/Header";
import SideBar from "./menu/SideBar";
import useScript from "./helper/useScript";
import { Footer } from "./menu/Footer";

window.jQuery = jQuery;

const Layout = ({ children }) => {
  useEffect(() => {}, []);

  useScript(process.env.PUBLIC_URL + "/assets/js/app.js");

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header />
        <SideBar />
        <div className="vertical-overlay" />
        <div className="main-content">
          <div className="page-content">
            <Outlet />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
