import React from "react";

export default function SideBar() {
  const logo = process.env.PUBLIC_URL + "/assets/images/logo.png";

  const listMenu = [
    {
      key:1,
      level1menu1: "Registry",
      data: [
        {
          key:1,
          level2menu1: "Registry1",
          data:[]
        },
        {
          key:2,
          level2menu2: "Registry2",
          data: [
            {
              level3menu1: "Registry2.2",
            },
          ],
        },
        ,
        {
          key:3,
          level2menu3: "Registry2",
          data: [],
        },
      ],
    },
  ];

  console.table(listMenu)

  return (
    <>
      <div className="app-menu navbar-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          {/* Dark Logo*/}
          <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logo} alt="" height="40" />
            </span>
          </a>
          {/* Light Logo*/}
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logo} alt="" height="100" />
            </span>
          </a>
          <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line" />
          </button>
        </div>

        <div data-simplebar="init" id="scrollbar" className="h-100">
          <div className="container-fluid">
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="/requestlicense"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarTables"
                >
                  <i className="ri-draft-fill" /> <span>ขอใบอนุญาต</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarLicencs"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLicencs"
                >
                  <i className="ri-file-paper-2-fill" /> <span data-key="">จัดการใบอนุญาต</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarLicencs">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a href="/renewlicense" className="nav-link" data-key="t-analytics">
                        ต่ออายุใบอนุญาต{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/cencellicense" className="nav-link" data-key="t-crm">
                        ยกเลิกใบอนุญาต{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {listMenu ? listMenu.map((i)=>(

                <li className="nav-item" key={i.key}>
                  <a
                    className="nav-link menu-link"
                    href="#sidebarApps"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarApps"
                  >
                    <i className="ri-todo-fill" /> <span>{i.level1menu1}</span>
                  </a>
                  
                  <div className="collapse menu-dropdown" id="sidebarApps">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="#sidebarEmail"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarEmail"                        
                        >
                          {i.data[0].level2menu1}
                        </a>
                        <div className="collapse menu-dropdown" id="sidebarEmail">
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="#sidebaremailTemplates"
                                className="nav-link"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebaremailTemplates"
                                data-key="t-email-templates"
                              >
                                Level2
                              </a>
                              <div className="collapse menu-dropdown" id="sidebaremailTemplates">
                                <ul className="nav nav-sm flex-column">
                                  <li className="nav-item">
                                    <a href="apps-email-basic.html" className="nav-link" data-key="t-basic-action">
                                      {" "}
                                      Level3{" "}
                                    </a>
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
              )
                
              ) : (
                ""
              )}

              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarGuarantee"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarGuarantee"
                >
                  <i className="ri-wallet-3-fill" /> <span data-key="">จัดการหลักประกัน</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarGuarantee">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a href="#" target="_blank" className="nav-link" data-key="t-horizontal">
                        เพิ่มหลักประกัน
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" target="_blank" className="nav-link" data-key="t-detached">
                        เปลี่ยนแปลงหลักประกัน
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" target="_blank" className="nav-link" data-key="t-two-column">
                        ขอหลักประกันคืน
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarTables"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarTables"
                >
                  <i className="ri-hand-coin-fill" /> <span>ชำระค่าธรรมเนียม</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>

        <div className="sidebar-background" />
      </div>
    </>
  );
}
