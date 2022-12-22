import React, { Component } from "react";
export default class Header extends Component {
  render() {
    const toogleMenuBtn = () => {
      var windowSize = document.documentElement.clientWidth;

      if (windowSize > 767) document.querySelector(".hamburger-icon").classList.toggle("open");

      //For collapse horizontal menu
      if (document.documentElement.getAttribute("data-layout") === "horizontal") {
        document.body.classList.contains("menu")
          ? document.body.classList.remove("menu")
          : document.body.classList.add("menu");
      }

      //For collapse vertical menu
      if (document.documentElement.getAttribute("data-layout") === "vertical") {
        if (windowSize < 1025 && windowSize > 767) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") === "sm"
            ? document.documentElement.setAttribute("data-sidebar-size", "")
            : document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize > 1025) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") === "lg"
            ? document.documentElement.setAttribute("data-sidebar-size", "sm")
            : document.documentElement.setAttribute("data-sidebar-size", "lg");
        } else if (windowSize <= 767) {
          document.body.classList.add("vertical-sidebar-enable");
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
      }

      //Two column menu
      if (document.documentElement.getAttribute("data-layout") === "twocolumn") {
        document.body.classList.contains("twocolumn-panel")
          ? document.body.classList.remove("twocolumn-panel")
          : document.body.classList.add("twocolumn-panel");
      }
    };

    const logo = process.env.PUBLIC_URL + "/assets/images/logo.png"
    return (
      <>
        <header id="page-topbar">
          <div className="layout-width">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box horizontal-logo">
                  <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src={logo} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                      <img src={logo} alt="" height="70" />
                    </span>
                  </a>

                  <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                      <img src={logo} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                      <img src={logo} alt="" height="17" />
                    </span>
                  </a>
                </div>
                <div className="d-flex align-items-center flex-lg-row flex-column">
                  <div className="flex-grow-1">
                    <h4 className="fs-16 mb-1">ระบบบริการขอใบอนุญาต</h4>
                    <p className="text-muted mb-0">จัดหางานอิเล็คทรอนิกส์</p>
                  </div>
                </div>

                <button
                  onClick={toogleMenuBtn}
                  type="button"
                  className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                  id="topnav-hamburger-icon"
                >
                  <span className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>

              <div className="d-flex align-items-center">
                
                <div className="dropdown topbar-head-dropdown ms-1 header-item">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    id="page-header-notifications-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-bell fs-22" />
                    <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                      3<span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                          </div>
                          <div className="col-auto dropdown-tabs">
                            <span className="badge badge-soft-light fs-13"> 4 New</span>
                          </div>
                        </div>
                      </div>

                      <div className="px-2 pt-2">
                        <ul
                          className="nav nav-tabs dropdown-tabs nav-tabs-custom"
                          data-dropdown-tabs="true"
                          id="notificationItemsTab"
                          role="tablist"
                        >
                          <li className="nav-item waves-effect waves-light">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#all-noti-tab"
                              role="tab"
                              aria-selected="true"
                            >
                              All (4)
                            </a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>

                    <div className="tab-content" id="notificationItemsTabContent">
                      <div className="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                        <div data-simplebar="" style={{ maxHeight: 300 }} className="pe-2">
                          <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex">
                              
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-2 lh-base">
                                    Your <b>Elite</b> author Graphic Optimization{" "}
                                    <span className="text-secondary">reward</span> is ready!
                                  </h6>
                                </a>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> Just 30 sec ago
                                  </span>
                                </p>
                              </div>
                              
                            </div>
                          </div>

                          <div className="text-reset notification-item d-block dropdown-item position-relative active">
                            <div className="d-flex">
                             
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
                                </a>
                                <div className="fs-13 text-muted">
                                  <p className="mb-1">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                                </div>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 48 min ago
                                  </span>
                                </p>
                              </div>
                              
                            </div>
                          </div>

                         

                          <div className="my-3 text-center">
                            <button type="button" className="btn btn-soft-success waves-effect waves-light">
                              View All Notifications <i className="ri-arrow-right-line align-middle" />
                            </button>
                          </div>
                        </div>
                      </div>

                     
                    </div>
                  </div>
                </div>

                <div className="dropdown ms-sm-3 header-item topbar-user">
                  <button
                    type="button"
                    className="btn"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="d-flex align-items-center">
                      
                      <span className="text-start ms-xl-2">
                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                        <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <h6 className="dropdown-header">Welcome Anna!</h6>
                    <a className="dropdown-item" href="pages-profile.html">
                      <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">Profile</span>
                    </a>
                    <a className="dropdown-item" href="apps-chat.html">
                      <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">Messages</span>
                    </a>
                    <a className="dropdown-item" href="apps-tasks-kanban.html">
                      <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">Taskboard</span>
                    </a>
                    <a className="dropdown-item" href="pages-faqs.html">
                      <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">Help</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="pages-profile.html">
                      <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">
                        Balance : <b>$5971.67</b>
                      </span>
                    </a>
                    <a className="dropdown-item" href="pages-profile-settings.html">
                      <span className="badge bg-soft-success text-success mt-1 float-end">New</span>
                      <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">Settings</span>
                    </a>
                    <a className="dropdown-item" href="auth-lockscreen-basic.html">
                      <i className="mdi mdi-lock text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">Lock screen</span>
                    </a>
                    <a className="dropdown-item" href="auth-logout-basic.html">
                      <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle" data-key="t-logout">
                        Logout
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
