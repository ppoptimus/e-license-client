import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <>

                { /* ========== App Menu ========== */}
                <div className="app-menu navbar-menu">
                    { /* LOGO */}
                    <div className="navbar-brand-box">
                        { /* Dark Logo*/}
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="17" />
                            </span>
                        </a>
                        { /* Light Logo*/}
                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="17" />
                            </span>
                        </a>
                        <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                            <i className="ri-record-circle-line" />
                        </button>
                    </div>

                    <div id="scrollbar">
                        <div className="container-fluid">

                            <div id="two-column-menu">
                            </div>
                            <ul className="navbar-nav" id="navbar-nav">
                            <li className="nav-item">
                                    <a className="nav-link menu-link" href="#sidebarTables" role="button" aria-expanded="false" aria-controls="sidebarTables">
                                        <i className="ri-layout-grid-line" /> <span>ขอใบอนุญาต</span>
                                    </a>
                                    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                        <i className="ri-dashboard-2-line" /> <span data-key="t-dashboards">จัดการใบอนุญาต</span>
                                    </a>
                                    <div className="collapse menu-dropdown" id="sidebarDashboards">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link" data-key="t-analytics"> ต่ออายุใบอนุญาต </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link" data-key="t-crm"> ยกเลิกใบอนุญาต </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApps">
                                        <i className="ri-apps-2-line" /> <span data-key="t-apps">จัดการงานทะเบียน</span>
                                    </a>
                                    <div className="collapse menu-dropdown" id="sidebarApps">
                                        <ul className="nav nav-sm flex-column">
                                           
                                            <li className="nav-item">
                                                <a href="#sidebarEmail" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmail" data-key="t-email">
                                                    Level1
                                                </a>
                                                <div className="collapse menu-dropdown" id="sidebarEmail">
                                                    <ul className="nav nav-sm flex-column">
                                                       
                                                        <li className="nav-item">
                                                            <a href="#sidebaremailTemplates" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebaremailTemplates" data-key="t-email-templates">
                                                                Level2
                                                            </a>
                                                            <div className="collapse menu-dropdown" id="sidebaremailTemplates">
                                                                <ul className="nav nav-sm flex-column">
                                                                    <li className="nav-item">
                                                                        <a href="apps-email-basic.html" className="nav-link" data-key="t-basic-action"> Level3 </a>
                                                                    </li>
                                                                   
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                        <i className="ri-layout-3-line" /> <span data-key="t-layouts">จัดการหลักประกัน</span>
                                    </a>
                                    <div className="collapse menu-dropdown" id="sidebarLayouts">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a href="#" target="_blank" className="nav-link" data-key="t-horizontal">เพิ่มหลักประกัน</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" target="_blank" className="nav-link" data-key="t-detached">เปลี่ยนแปลงหลักประกัน</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" target="_blank" className="nav-link" data-key="t-two-column">ขอหลักประกันคืน</a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </li>



                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="#sidebarTables" role="button" aria-expanded="false" aria-controls="sidebarTables">
                                        <i className="ri-layout-grid-line" /> <span>ชำระค่าธรรมเนียม</span>
                                    </a>
                                    
                                </li>

                            </ul>
                        </div>
                        { /* Sidebar */}
                    </div>

                    <div className="sidebar-background" />
                </div>
                { /* Left Sidebar End */}

            </>
        )
    }
}