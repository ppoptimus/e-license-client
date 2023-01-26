import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Form, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import Flatpickr from "react-flatpickr";
import classnames from "classnames";

export const ForeignLabor = () => {
  let currentDate = "";
  useEffect(() => {
    const dateNow = new Date();
    currentDate = formatDate(dateNow);
    console.log(formatDate(dateNow));
  }, []);

  const object = {
    juristicNo: "0123456789012",
    juristicType: "บริษัทจำกัด",
    regisDate: "10/01/1990",
    companyName: "บริษัท ทีซีเอ็ม จำกัด มหาชน",
    companyEmail: "t.cm@tmc.com",
    registeredCapital: "1,500,000",
    addressNo: "199/100",
    moo: "7",
    soi: "-",
    road: "รัชดาภิเษก",
    zipcode: "10110",
    telephoneNo: "02 661 8884",
  };
  const [activeArrowTab, setactiveArrowTab] = useState(1);
  const [passedarrowSteps, setPassedarrowSteps] = useState([1]);
  const [juristicNumber, setJuristicNumber] = useState();
  const [companyData, setcompanyData] = useState({});

  const [getProvince, setGetProvince] = useState([
    { value: "0", label: "เลือกจังหวัด" },
    { value: "1", label: "Choices 1" },
    { value: "2", label: "Choices 2" },
  ]);

  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleSelectProvince = (e) => {
    setSelectedProvince(e);
    console.log(selectedProvince);
  };

  const onJuristicTypeChange = (e) => {};

  const toggleArrowTab = (tab) => {
    if (activeArrowTab !== tab) {
      var modifiedSteps = [...passedarrowSteps, tab];

      if (tab >= 1 && tab <= 7) {
        setactiveArrowTab(tab);
        setPassedarrowSteps(modifiedSteps);
      }
    }
  };

  const onJuristicChange = (e) => {
    setJuristicNumber(e.target.value);
  };

  const onJuristicSearch = () => {
    console.log(juristicNumber);
    setcompanyData(object);
  };

  const formatDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    return `${dd < 10 ? `0${dd}` : `${dd}`}
    /${mm < 10 ? `0${mm}` : `${mm}`}
    /${yy}`;
  };

  return (
    <>
      <Row>
        <Col xl={12}>
          <div className="card">
            <div className="card-body">
              <h2 className="text-dark load-txt">ใบอนุญาตให้ประกอบธุรกิจการนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ</h2>
              <span>
                คำขอ<span className="load-txt">ใบอนุญาตให้ประกอบธุรกิจการนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ</span>
              </span>
            </div>
          </div>
          <Card>
            <CardBody className="form-steps">
              <Form>
                <div className="step-arrow-nav mb-4">
                  <Nav className="nav-pills nav-justified" role="tablist">
                    <NavItem>
                      <NavLink
                        href="#"
                        id="company-data-tab"
                        className={classnames({
                          active: activeArrowTab === 1,
                          done: activeArrowTab <= 7 && activeArrowTab >= 0,
                        })}
                        onClick={() => {
                          toggleArrowTab(1);
                        }}
                      >
                        <b>1. ข้อมูลบริษัท</b>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        href="#"
                        id="board-data-tab"
                        className={classnames({
                          active: activeArrowTab === 2,
                          done: activeArrowTab <= 7 && activeArrowTab > 1,
                        })}
                        onClick={() => {
                          toggleArrowTab(2);
                        }}
                      >
                        <b>2. รายชื่อกรรมการ</b>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        href="#"
                        id="shareholder-data-tab"
                        className={classnames({
                          active: activeArrowTab === 3,
                          done: activeArrowTab <= 7 && activeArrowTab > 2,
                        })}
                        onClick={() => {
                          toggleArrowTab(3);
                        }}
                      >
                        <b>3. รายชื่อผู้ถือหุ้น</b>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        href="#"
                        id="manager-data-tab"
                        className={classnames({
                          active: activeArrowTab === 4,
                          done: activeArrowTab <= 7 && activeArrowTab > 3,
                        })}
                        onClick={() => {
                          toggleArrowTab(4);
                        }}
                      >
                        <b>4. เลือกผู้จัดการ</b>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        href="#"
                        id="document-data-tab"
                        className={classnames({
                          active: activeArrowTab === 5,
                          done: activeArrowTab <= 7 && activeArrowTab > 4,
                        })}
                        onClick={() => {
                          toggleArrowTab(5);
                        }}
                      >
                        <b>5. เอกสารประกอบ</b>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        href="#"
                        id="deposit-data-tab"
                        className={classnames({
                          active: activeArrowTab === 6,
                          done: activeArrowTab <= 7 && activeArrowTab > 5,
                        })}
                        onClick={() => {
                          toggleArrowTab(6);
                        }}
                      >
                        <b>6. หลักประกัน</b>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>

                <TabContent activeTab={activeArrowTab}>
                  <TabPane id="company-data" tabId={1}>
                    <>
                      <Row>
                        <div className="mb-4">
                          <h5 className="mb-1">
                            <b>ข้อมูลบริษัท</b>
                          </h5>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">เลขที่นิติบุคคล</label>

                            <div className="search">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="เลขที่นิติบุคคล..."
                                onChange={onJuristicChange}
                              />
                              <button type="button" className="btn btn-secondary p-0" onClick={onJuristicSearch}>
                                <i className="ri-search-line" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">ประเภทนิติบุคคล</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="บริษัทจำกัด"
                              onChange={onJuristicTypeChange}
                              value={companyData ? companyData.juristicType : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">วันที่จดทะเบียน</label>
                            <Flatpickr
                              className="form-control"
                              options={{
                                maxDate: new Date(),
                                dateFormat: "d/m/Y",
                                defaultDate: [currentDate.toString()],
                              }}
                              value={companyData ? companyData.regisDate : currentDate}
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="mb-3">
                            <label className="form-label">ชื่อ</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ชื่อบริษัท"
                              value={companyData ? companyData.companyName : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">อีเมล</label>
                            <input
                              type="email"
                              className="form-control form-control-icon"
                              value={companyData ? companyData.companyEmail : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="mb-3">
                            <label className="form-label">ทุนจดทะเบียน</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyData ? companyData.registeredCapital : ""}
                            />
                            <div className="form-text text-danger">
                              มาตรา 31(1) ทุนจดทะเบียนและชำระแล้วไม่ต่ำกว่า 1,000,000 บาท
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 mt-3">
                          <div>
                            <h5 className="mb-1">
                              <b>ข้อมูลที่อยู่บริษัท</b>
                            </h5>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">เลขที่</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyData ? companyData.addressNo : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">หมู่ที่</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyData ? companyData.moo : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">ตรอก/ซอย</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyData ? companyData.soi : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">ถนน</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyData ? companyData.road : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">จังหวัด</label>
                            <select
                              className="form-select mb-3"
                              onChange={(e) => {
                                handleSelectProvince(e.target.value);
                              }}
                            >
                              {getProvince.map((item, index) => (
                                <option key={index} value={item.label}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">อำเภอ</label>
                            <select className="form-select mb-3" aria-label="Default select example">
                              <option>เลือกอำเภอ</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">ตำบล/แขวง</label>
                            <select className="form-select mb-3" aria-label="Default select example">
                              <option>เลือกตำบล/แขวง</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">รหัสไปรษณีย์</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyData ? companyData.zipcode : ""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <label className="form-label">หมายเลขโทรศัพท์</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyData ? companyData.telephoneNo : ""}
                            />
                          </div>
                        </div>
                      </Row>
                      {/* <Row>
                        <div className="col-12 mt-3">
                          <div className="bg-light p-3">
                            <div className="row g-2" style={{ minHeight: "9rem" }}>
                              <div className="col-lg-4">
                                <div className="col-lg-12">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                                      ละติจูด
                                    </label>
                                    <input type="text" className="form-control" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                                      ลองจิจูด
                                    </label>
                                    <input type="text" className="form-control" placeholder="" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-8" style={{ padding: 15 }}>
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15496.059774239!2d100.51836289775781!3d13.838141159271867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b61192065a3%3A0x13e1e4e5a96cf523!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4Lib4Lij4Liw4LiB4Lix4LiZ4Liq4Lix4LiH4LiE4LihIOC4quC4s-C4meC4seC4geC4h-C4suC4meC5g-C4q-C4jeC5iA!5e0!3m2!1sth!2sth!4v1670395470923!5m2!1sth!2sth"
                                  width="100%"
                                  height="300"
                                  style={{ border: "0" }}
                                  allowFullScreen
                                  loading="lazy"
                                  referrerpolicy="no-referrer-when-downgrade"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 mt-5">
                          <div>
                            <h5 className="mb-1">
                              <b>แนบรูปที่ตั้งสำนักงาน</b>
                            </h5>
                            <p>1. รูปภาพภายนอกสำนักงาน</p>
                          </div>
                        </div>
                        <div className="col-12 mb-5">
                          <div className="row">
                            <div className="col-2">
                              <div className="position-relative d-inline-block">
                                <div className="position-absolute top-100 start-100 translate-middle">
                                  <label
                                    htmlFor="product-image-input"
                                    className="mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    aria-label="Select Image"
                                  >
                                    <div className="avatar-xs">
                                      <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                        <i className="ri-image-fill" />
                                      </div>
                                    </div>
                                  </label>
                                  <input
                                    className="form-control d-none"
                                    //
                                    id="product-image-input"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                  />
                                </div>
                                <div className="avatar-lg">
                                  <div className="avatar-title bg-light rounded">
                                    <img src="" id="product-img" className="avatar-md h-auto" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="position-relative d-inline-block">
                                <div className="position-absolute top-100 start-100 translate-middle">
                                  <label
                                    htmlFor="product-image-input"
                                    className="mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    aria-label="Select Image"
                                  >
                                    <div className="avatar-xs">
                                      <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                        <i className="ri-image-fill" />
                                      </div>
                                    </div>
                                  </label>
                                  <input
                                    className="form-control d-none"
                                    //
                                    id="product-image-input"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                  />
                                </div>
                                <div className="avatar-lg">
                                  <div className="avatar-title bg-light rounded">
                                    <img src="" id="product-img" className="avatar-md h-auto" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="position-relative d-inline-block">
                                <div className="position-absolute top-100 start-100 translate-middle">
                                  <label
                                    htmlFor="product-image-input"
                                    className="mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    aria-label="Select Image"
                                  >
                                    <div className="avatar-xs">
                                      <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                        <i className="ri-image-fill" />
                                      </div>
                                    </div>
                                  </label>
                                  <input
                                    className="form-control d-none"
                                    //
                                    id="product-image-input"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                  />
                                </div>
                                <div className="avatar-lg">
                                  <div className="avatar-title bg-light rounded">
                                    <img src="" id="product-img" className="avatar-md h-auto" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="position-relative d-inline-block">
                                <div className="position-absolute top-100 start-100 translate-middle">
                                  <label
                                    htmlFor="product-image-input"
                                    className="mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    aria-label="Select Image"
                                  >
                                    <div className="avatar-xs">
                                      <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                        <i className="ri-image-fill" />
                                      </div>
                                    </div>
                                  </label>
                                  <input
                                    className="form-control d-none"
                                    //
                                    id="product-image-input"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                  />
                                </div>
                                <div className="avatar-lg">
                                  <div className="avatar-title bg-light rounded">
                                    <img src="" id="product-img" className="avatar-md h-auto" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="position-relative d-inline-block">
                                <div className="position-absolute top-100 start-100 translate-middle">
                                  <label
                                    htmlFor="product-image-input"
                                    className="mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    aria-label="Select Image"
                                  >
                                    <div className="avatar-xs">
                                      <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                        <i className="ri-image-fill" />
                                      </div>
                                    </div>
                                  </label>
                                  <input
                                    className="form-control d-none"
                                    //
                                    id="product-image-input"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                  />
                                </div>
                                <div className="avatar-lg">
                                  <div className="avatar-title bg-light rounded">
                                    <img src="" id="product-img" className="avatar-md h-auto" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row> */}
                    </>

                    <div className="d-flex align-items-start gap-3 mt-4">
                      <button
                        type="button"
                        className="btn btn-success btn-label right ms-auto nexttab nexttab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab + 1);
                        }}
                      >
                        <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                        ถัดไป
                      </button>
                    </div>
                  </TabPane>

                  <TabPane id="board-data" tabId={2}>
                    <Row>
                      <div className="col-8 mb-4 mt-3">
                        <h5 className="mb-1">
                          <b>รายชื่อกรรมการทั้งหมด</b>
                        </h5>
                      </div>

                      <div className="col-4" style={{ textAlign: "right" }}>
                        <button type="button" className="btn btn-soft-primary">
                          <i className="ri-refresh-line" /> ดึงข้อมูลกรรมการจากระบบ
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-success"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <i className="ri-add-line" /> เพิ่มกรรมการ
                        </button>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12">
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap mb-0">
                            <thead className="table-light">
                              <tr>
                                <th scope="col">รูปภาพ</th>
                                <th scope="col">ชื่อ-นามสกุล</th>
                                <th scope="col">สถานะข้อมูล</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-3.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ แซ่อึ้ง</td>
                                <td>
                                  <span className="badge text-bg-danger">ข้อมูลไม่สมบูรณ์</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    เปลี่ยนแปลงข้อมูล
                                  </button>
                                  <button type="button" className="btn btn-sm btn-danger">
                                    ลบ
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-1.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ สีเทาดำ</td>
                                <td>
                                  <span className="badge text-bg-success">ข้อมูลสมบูรณ์</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    เปลี่ยนแปลงข้อมูล
                                  </button>
                                  <button type="button" className="btn btn-sm btn-danger">
                                    ลบ
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-5.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ น้อยมาก</td>
                                <td>
                                  <span className="badge text-bg-success">ข้อมูลสมบูรณ์</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    เปลี่ยนแปลงข้อมูล
                                  </button>
                                  <button type="button" className="btn btn-sm btn-danger">
                                    ลบ
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Row>
                    <div className="d-flex align-items-start gap-3 mt-4">
                      <button
                        type="button"
                        className="btn btn-light btn-label previestab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab - 1);
                        }}
                      >
                        <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> ย้อนกลับ
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-label right ms-auto nexttab nexttab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab + 1);
                        }}
                      >
                        <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                        ถัดไป
                      </button>
                    </div>
                  </TabPane>

                  <TabPane id="shareholder-data" tabId={3}>
                    <Row>
                      <div className="col-8 mb-4 mt-3">
                        <h5 className="mb-1">
                          <b>รายชื่อผู้ถือหุ้นทั้งหมด</b>
                        </h5>
                      </div>
                      <div className="col-4" style={{ textAlign: "right" }}>
                        <button type="button" className="btn btn-soft-primary">
                          <i className="ri-refresh-line" /> ดึงข้อมูลผู้ถือหุ้นจากระบบ
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-success"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <i className="ri-add-line" /> เพิ่มผู้ถือหุ้น
                        </button>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12">
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap mb-0">
                            <thead className="table-light">
                              <tr>
                                <th scope="col">รูปภาพ</th>
                                <th scope="col">ชื่อ-นามสกุล</th>
                                <th scope="col">เลขบัตรประชาชน</th>
                                <th scope="col">สถานะข้อมูล</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-3.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ แซ่อึ้ง</td>
                                <td>1234567890123</td>
                                <td>
                                  <span className="badge text-bg-danger">ข้อมูลไม่สมบูรณ์</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    เปลี่ยนแปลงข้อมูล
                                  </button>
                                  <button type="button" className="btn btn-sm btn-danger">
                                    ลบ
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-1.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ สีเทาดำ</td>
                                <td>1234567890123</td>
                                <td>
                                  <span className="badge text-bg-success">ข้อมูลสมบูรณ์</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    เปลี่ยนแปลงข้อมูล
                                  </button>
                                  <button type="button" className="btn btn-sm btn-danger">
                                    ลบ
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-5.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ น้อยมาก</td>
                                <td>1234567890123</td>
                                <td>
                                  <span className="badge text-bg-success">ข้อมูลสมบูรณ์</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    เปลี่ยนแปลงข้อมูล
                                  </button>
                                  <button type="button" className="btn btn-sm btn-danger">
                                    ลบ
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* end table */}
                        </div>
                      </div>
                    </Row>
                    <div className="d-flex align-items-start gap-3 mt-4">
                      <button
                        type="button"
                        className="btn btn-light btn-label previestab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab - 1);
                        }}
                      >
                        <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> ย้อนกลับ
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-label right ms-auto nexttab nexttab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab + 1);
                        }}
                      >
                        <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                        ถัดไป
                      </button>
                    </div>
                  </TabPane>

                  <TabPane id="manager-data" tabId={4}>
                    <Row>
                      <div className="col-12 mb-4 mt-3">
                        <h5 className="mb-1">
                          <b>เลือกผู้จัดการ</b>
                        </h5>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12">
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap mb-0">
                            <thead className="table-light">
                              <tr>
                                <th scope="col" style={{ width: 42 }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="responsivetableCheck" />
                                    <label className="form-check-label" htmlFor="responsivetableCheck" />
                                  </div>
                                </th>
                                <th scope="col">รูปภาพ</th>
                                <th scope="col">ชื่อ-นามสกุล</th>
                                <th scope="col">สถานะข้อมูล</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="responsivetableCheck01" />
                                    <label className="form-check-label" htmlFor="responsivetableCheck01" />
                                  </div>
                                </th>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-3.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ แซ่อึ้ง</td>
                                <td>
                                  <span className="badge text-bg-success">กรรมการ</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    ดูรายละเอียด
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="responsivetableCheck01" />
                                    <label className="form-check-label" htmlFor="responsivetableCheck01" />
                                  </div>
                                </th>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-1.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ สีเทาดำ</td>
                                <td>
                                  <span className="badge text-bg-success">กรรมการ</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    ดูรายละเอียด
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="responsivetableCheck01" />
                                    <label className="form-check-label" htmlFor="responsivetableCheck01" />
                                  </div>
                                </th>
                                <td>
                                  <div className="flex-shrink-0">
                                    <img
                                      src="../../assets/images/users/avatar-5.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>
                                </td>
                                <td>ประยุทธ น้อยมาก</td>
                                <td>
                                  <span className="badge text-bg-success">กรรมการ</span>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    ดูรายละเอียด
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Row>

                    <div className="d-flex align-items-start gap-3 mt-4">
                      <button
                        type="button"
                        className="btn btn-light btn-label previestab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab - 1);
                        }}
                      >
                        <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> ย้อนกลับ
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-label right ms-auto nexttab nexttab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab + 1);
                        }}
                      >
                        <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                        ถัดไป
                      </button>
                    </div>
                  </TabPane>

                  <TabPane id="document-data" tabId={5}>
                    <Row>
                      <div className="col-12 mb-4 mt-3">
                        <h5 className="mb-1">
                          <b>เอกสารประกอบ</b>
                        </h5>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12">
                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>1.สำเนาหรือรูปถ่ายเอกสารแสดงกรรมสิทธิ์หรือสิทธิครอบครองสถานที่ตั้งสำนักงานจัดหางาน</b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>

                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>
                              2.สำเนาหนังสือรับรองจากการจดทะเบียนนิติบุคคลของบริษัทซึ่งรับรองไว้ไม่เกินหกเดือนที่แสดงว่ามีทุนจดทะเบียนและทุนชำระแล้ว
                            </b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>

                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>3.หนังสือแสดงว่าเป็นกรรมการผู้จัดการหรือผู้แทนซึ่งเป็นผู้มาดำเนินการของนิติบุคคล</b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>

                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>
                              4.สำเนาหรือรูปถ่ายบัตรประจำตัวประชาชนหรือบัตรประจำตัวของบุคคลซึ่งได้รับยกเว้นไม่ต้องมีบัตรประจำตัวประชาชน
                              ตามกฏหมายว่าด้วยบัตรประชาชนของผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาต
                            </b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>

                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>5.สำเนาหรือรูปถ่ายทะเบียนบ้าน ของผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาต</b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>

                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>
                              6.ใบรับรองของผู้ประกอบวิชาชีพเวชกรรมซึ่งรับรองว่าผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาติ
                              ไม่เป็นลักษณะต้องห้ามตามมาตรา 9(6) แห่งพระราชบัญญัติจัดหางานและคุ้มครองคนหางาน พ.ศ. 2528{" "}
                            </b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>

                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>
                              7.แผนที่สังเขปแสดงที่ตั้งสำนักงานจัดหางานพร้อมรูปถ่าย ทั้งภายในและภายนอกสำนักงานจัดหางาน{" "}
                            </b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>

                        <div className="row mb-5 mt-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            <b>8.อื่นๆ </b>
                          </label>
                          <div className="col-4">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>
                      </div>
                    </Row>

                    <div className="d-flex align-items-start gap-3 mt-4">
                      <button
                        type="button"
                        className="btn btn-light btn-label previestab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab - 1);
                        }}
                      >
                        <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> ย้อนกลับ
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-label right ms-auto nexttab nexttab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab + 1);
                        }}
                      >
                        <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                        ถัดไป
                      </button>
                    </div>
                  </TabPane>

                  <TabPane id="document-data" tabId={6}>
                    <Row>
                      <div className="col-12 mb-4 mt-3">
                        <h5 className="mb-1">
                          <b>หลักประกัน</b>
                        </h5>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-3" style={{ borderBottom: "solid 1px #eee" }}>
                        <div className="form-group">
                          <table className="table align-middle table-nowrap mb-0">
                            <thead className="table-light">
                              <tr>
                                <th scope="col">ลำดับ</th>
                                <th scope="col">ประเภทหลักประกัน</th>
                                <th scope="col">จำนวนเงิน</th>
                                <th scope="col">สถานะ</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>สัญญาค้ำประกัน</td>
                                <td>5,000,000 บาท</td>
                                <td>-</td>
                                <td>
                                  <button type="button" className="btn btn-sm btn-light">
                                    <i className="ri-eye-line" /> ดูรายละเอียด
                                  </button>
                                  <button type="button" className="btn btn-sm btn-danger">
                                    <i className="ri-delete-bin-line" /> ลบ
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* end table */}
                          <div className="row mb-5 mt-5">
                            <div className="col-12 text-center">
                              <button
                                type="button"
                                className="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                              >
                                <i className="ri-add-line" /> เพิ่มรายการ
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 mb-4">
                        <div>
                          <h5 className="mb-1">
                            <b>รวมเป็นเงิน</b>
                          </h5>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-5">
                          <div className="col-4">
                            <input type="text" className="form-control" placeholder="" value="5,000,000,000" />
                          </div>
                        </div>
                      </div>
                    </Row>

                    <div className="d-flex align-items-start gap-3 mt-4">
                      <button
                        type="button"
                        className="btn btn-light btn-label previestab"
                        onClick={() => {
                          toggleArrowTab(activeArrowTab - 1);
                        }}
                      >
                        <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> ย้อนกลับ
                      </button>
                      <button
                        type="button"
                        className="btn btn-success ms-auto"
                        onClick={() => {
                          console.log("Submit");
                        }}
                      >
                        <i className="ri-save-line align-middle fs-16 me-2"></i>
                        บันทึกข้อมูล
                      </button>
                    </div>
                  </TabPane>
                </TabContent>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* modal เพิ่มรายชื่อ */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myLargeModalLabel">
                ข้อมูลกรรมการผู้มีอำนาจกระทำการแทนนิติบุคคลผู้ขอใบอนุญาติ
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              <div className="col-12 mt-3">
                <div>
                  <h5 className="mb-1">
                    <b>ข้อมูลส่วนตัว</b>
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3" style={{ bottom: "0", position: "absolute" }}>
                    <label className="form-label" htmlFor="steparrow-gen-info-email-input">
                      เลขบัตรประจำตัวประชาชน
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3" style={{ bottom: "0", position: "absolute" }}>
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      วัน/เดือน/ปีเกิด
                    </label>
                    <input type="date" className="form-control" id="exampleInputdate" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-relative d-inline-block">
                    <div className="position-absolute top-100 start-100 translate-middle">
                      <label
                        htmlFor="product-image-input"
                        className="mb-0"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        aria-label="Select Image"
                      >
                        <div className="avatar-xs">
                          <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                            <i className="ri-image-fill" />
                          </div>
                        </div>
                      </label>
                      <input
                        className="form-control d-none"
                        id="product-image-input"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                      />
                    </div>
                    <div className="avatar-lg">
                      <div className="avatar-title bg-light rounded">
                        <img src="" id="product-img" className="avatar-md h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      เลขบัตรประจำตัวประชาชน
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      เพศ
                    </label>
                    <div className="mt-4 mt-lg-0">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions1"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                          ชาย
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions2"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                          หญิง
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions3"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio3">
                          ไม่ระบุ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      คำนำหน้าชื่อ
                    </label>
                    <select className="form-select mb-3" aria-label="Default select example">
                      <option>เลือกคำนำหน้าชื่อ</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ชื่อ
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      นามสกุล
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      คำนำหน้าชื่อ (ภาษาอังกฤษ)
                    </label>
                    <select className="form-select mb-3" aria-label="Default select example">
                      <option>เลือกคำนำหน้าชื่อ</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ชื่อ (ภาษาอังกฤษ)
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      นามสกุล (ภาษาอังกฤษ)
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      สัญชาติ
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3" style={{ bottom: "0", position: "absolute" }}>
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      วันที่ออกบัตร
                    </label>
                    <input type="date" className="form-control" id="exampleInputdate" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3" style={{ bottom: "0", position: "absolute" }}>
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      วันที่บัตรหมดอายุ
                    </label>
                    <input type="date" className="form-control" id="exampleInputdate" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ออกให้ ณ จังหวัด
                    </label>
                    <select className="form-select mb-3" aria-label="Default select example">
                      <option>เลือกจังหวัด</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      อำเภอ
                    </label>
                    <select className="form-select mb-3" aria-label="Default select example">
                      <option>เลือกอำเภอ</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      อีเมล
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="mb-4 mt-3">
                  <div>
                    <h5 className="mb-1">
                      <b>ที่อยู่</b>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      เลขที่
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      หมู่ที่
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ตรอก/ซอย
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ถนน
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      จังหวัด
                    </label>
                    <select className="form-select mb-3" aria-label="Default select example">
                      <option>เลือกจังหวัด</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      อำเภอ
                    </label>
                    <select className="form-select mb-3" aria-label="Default select example">
                      <option>เลือกอำเภอ</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ตำบล/แขวง
                    </label>
                    <select className="form-select mb-3" aria-label="Default select example">
                      <option>เลือกตำบล/แขวง</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      รหัสไปรษณีย์
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      หมายเลขโทรศัพท์
                    </label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="hstack gap-2 justify-content-center">
                  <a href="#" className="btn btn-soft-secondary link-success fw-medium" data-bs-dismiss="modal">
                    <i className="ri-close-line me-1 align-middle" /> ยกเลิก
                  </a>
                  <a href="#" className="btn btn-success">
                    <i className="ri-save-line" /> บันทึกข้อมูล
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal หลักประกัน */}
      <div
        id="myModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                เลือกหลักประกัน
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                {" "}
              </button>
            </div>
            <div className="modal-body">
              <h5 className="fs-15">หลักประกัน</h5>
              <div className="col-12">
                {/* Outlined Styles */}
                <div className="hstack gap-2 flex-wrap">
                  <input
                    type="radio"
                    className="btn-check showlk"
                    name="options-outlined"
                    id="success-outlined"
                    value="1"
                    checked={true}
                  />
                  <label className="btn btn-outline-primary" htmlFor="success-outlined">
                    <i className="ri-focus-2-fill" /> เงินสด
                  </label>

                  <input
                    type="radio"
                    className="btn-check showlk"
                    name="options-outlined"
                    id="danger-outlined"
                    value="2"
                  />
                  <label className="btn btn-outline-primary" htmlFor="danger-outlined">
                    <i className="ri-focus-2-fill" /> พันธบัตรรัฐบาลไทย
                  </label>

                  <input
                    type="radio"
                    className="btn-check showlk"
                    name="options-outlined"
                    id="primary-outlined"
                    value="3"
                  />
                  <label className="btn btn-outline-primary" htmlFor="primary-outlined">
                    <i className="ri-focus-2-fill" /> สัญญาค้ำประกัน
                  </label>
                </div>
              </div>
              <div className="row mt-3 show-1">
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      จำนวนเงิน
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 show-2" style={{ display: "none" }}>
                <div className="col-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      เลขที่
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ราคา (บาท)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02"
                    />
                  </div>
                </div>
                <h5 className="fs-15 mt-3">
                  <b>แนบหลักฐาน </b>
                </h5>
                <div className="row mb-5 mt-10">
                  {/*begin::Label*/}
                  <label className="form-label">แนบหลักฐานเอกสารที่เกี่ยวข้อง</label>
                  <div className="col-12">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>
              </div>
              <div className="row mt-3 show-3" style={{ display: "none" }}>
                <div className="col-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ธนาคาร
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      สาขา
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2A\u0E32\u0E02\u0E32"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      เลขที่
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      ลงวันที่
                    </label>
                    <input type="date" className="form-control" id="exampleInputdate" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="steparrow-gen-info-username-input">
                      จำนวนเงิน
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02"
                    />
                  </div>
                </div>
                <h5 className="fs-15 mt-3">
                  <b>แนบหลักฐาน </b>
                </h5>
                <div className="row mb-5 mt-10">
                  {/*begin::Label*/}
                  <label className="form-label">แนบหลักฐานเอกสารที่เกี่ยวข้อง</label>
                  <div className="col-12">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary ">
                Save Changes
              </button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
};
