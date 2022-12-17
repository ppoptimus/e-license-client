import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import jQuery from 'jquery';
import $ from 'jquery';


import Header from './Header';
import SideBar from './SideBar';
//import Footer from './Footer';

import useScript from './useScript';


window.jQuery = jQuery;

const Layout = ({ children }) => {
    useEffect(() => {

       
    
      }, []);

    useScript('/assets/js/app.js');
     return (
        <React.Fragment>

            <>
                { /* Begin page */}
                <div id="layout-wrapper">

                    <Header />
                    <SideBar />

                    { /* Vertical Overlay*/}
                    <div className="vertical-overlay" />

                    { /* ============================================================== */}
                    { /* Start right Content here */}
                    { /* ============================================================== */}
                    <div className="main-content">

                        <Outlet />
                        <main>{children}</main>


                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <script>{`document.write(new Date().getFullYear())`}</script> © Velzon.
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="text-sm-end d-none d-sm-block">
                                            Design & Develop by Themesbrand
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                    { /* end main content*/}

                </div>

                { /* END layout-wrapper */}</>

        </React.Fragment>
    );
};
export default Layout;