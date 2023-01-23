import React from "react";

export default function SideBar() {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  const logo = PUBLIC_URL + "/assets/images/logo.png";

  const listMenu = [
    {
      key: 1,
      level0: "จัดการงานทะเบียน",
      id:"registry",
      divhref:"#registry",
      data: [
        {
          key: 11,
          level1: "คำขอใบแทนใบอนุญาตฯ",
   
          href: "#href11",
          controls: "controls11",
          data: [],
        },
        {
          key: 12,
          level1: "แจ้งย้ายสำนักงาน",
        
          href: "#href12",
          controls: "controls12",
          data: [],
        },
        {
          key: 13,
          level1: "คำขอตั้งสำนักงานชั่วคราว",
       
          href: "#href13",
          controls: "controls13",
          data: [],
        },
        {
          key: 14,
          level1: "แจ้งเปลี่ยนผู้จัดการ",
      
          href: "#href14",
          controls: "controls14",
          data: [],
        },
        {
          key: 15,
          level1: "ขอหนังสือรับรองภาษาอังกฤษ",
       
          href: "#href15",
          controls: "controls15",
          data: [],
        },
        {
          key: 16,
          level1: "ขอเปลี่ยนชื่อนิติบุคคล",
        
          href: "#href16",
          controls: "controls16",
          data: [],
        },
        {
          key: 17,
          level1: "เปลี่ยนตราประทับนิติบุคคล",
       
          href: "#href17",
          controls: "controls17",
          data: [],
        },
        {
          key: 18,
          level1: "คำขอแจ้งข้อความโฆษณา",
       
          href: "#href18",
          controls: "controls18",
          data: [],
        },
      ],
    },
    {
      key: 2,
      level0: "ผู้จัดการ ลูกจ้าง ตัวแทน",
      id:"management",
      divhref:"#management",
      data: [
        {
          key: 21,
          level1: "คำขอจดทะเบียนลูกจ้าง / ตัวแทน",

          href: "#href21",
          controls: "controls21",
          data: [],
        },
        {
          key: 22,
          level1: "คำขอเปลี่ยนชื่อผู้จัดการ",
     
          href: "#href22",
          controls: "controls21",
          data: [],
        },
        {
          key: 23,
          level1: "ขอยกเลิกลูกจ้าง / ตัวแทน",
      
          href: "#href23",
          controls: "controls23",
          data: [],
        },
        {
          key: 24,
          level1: "คำขอมีบัตรประจำตัว",
        
          href: "#href24",
          controls: "controls24",
          data: [],
        },
        
      ],
    },
  ];

  console.log(listMenu[0].data[0].data.length);

  return (
    <>
      <div className="app-menu navbar-menu">
        {/* LOGO */}
        {/* <div className="navbar-brand-box">
  
          <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logo} alt="" height="40" />
            </span>
          </a>
  
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
        </div> */}

        <div data-simplebar="init" id="scrollbar" className="h-100 mt-4">
          <div className="container-fluid">
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="/e-license/chooseLicense"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarTables"
                >
                  <i className="ri-draft-fill" /> <span>ขอใบอนุญาต</span>
                </a>
              </li>
              {/* ---------------------------------- */}
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
                      <a href="/e-license/renewlicense" className="nav-link" data-key="">
                        ต่ออายุใบอนุญาต{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/e-license/cencellicense" className="nav-link" data-key="">
                        ยกเลิกใบอนุญาต{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* ---------------------------------- */}

              {listMenu.map((i) => (
                <li className="nav-item" key={i.key}>
                  <a
                    className="nav-link menu-link"
                    href={i.divhref}
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls={i.id}
                  >
                    <i className="ri-todo-fill" /> <span>{i.level0}</span>
                  </a>

                  <div className="collapse menu-dropdown" id={i.id}>
                    {i.data.map((ii) => (
                      <ul className="nav nav-sm flex-column" key={ii.key}>
                        <li className="nav-item">
                          <a
                            href={ii.href}
                            className="nav-link"
                            data-bs-toggle={ii.data.length > 0 ? "collapse" : ""}
                            role="button"
                            aria-expanded="false"
                            aria-controls={ii.controls}
                          >
                            {ii.level1}
                          </a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </li>
              ))}

              {/* ---------------------------------- */}
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
              {/* ---------------------------------- */}
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
