import React from "react";

export const RequestLicense = () => {
  const handleClick = () => {
    var o = document.querySelector(".password-input"); 
    "password" === o.type ? o.type = "text" : o.type = "password"
};
  return (
    <>
<><div className="content d-flex flex-column flex-column-fluid" id="kt_content" style={{ paddingBottom: "0" }}>
    { /*begin::Post*/ }
    <div className="post d-flex flex-column-fluid" id="kt_post">
        { /*begin::Container*/ }
        <div id="kt_content_container" className="container-xxl">
            { /*begin::Home card*/ }
            <div className="card">
                { /*begin::Body*/ }
                <div className="card-body">
                    { /*begin::Title*/ }
                    <h2 className="text-dark load-txt" />
                    <span>คำขอ<span className="load-txt" /></span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="content d-flex flex-column flex-column-fluid" id="kt_content">
    { /*begin::Post*/ }
    <div className="post d-flex flex-column-fluid" id="kt_post">
        { /*begin::Container*/ }
        <div id="kt_content_container" className="container-xxl">
            { /*begin::Home card*/ }
            <div className="card">
                { /*begin::Body*/ }
                <div className="card-body p-lg-15">
                    
                    { /*begin::Stepper*/ }
                    <div className="stepper col-lg-12 stepper-pills" id="kt_stepper_example_clickable">
                        { /*begin::Nav*/ }
                        <div className="stepper-nav flex-center flex-wrap mb-10">
                            { /*begin::Step 1*/ }
                            <div className="stepper-item mx-2 my-4 current" data-kt-stepper-element="nav" data-kt-stepper-action="step">
                                { /*begin::Line*/ }
                                <div className="stepper-line w-40px" />
                                { /*end::Line*/ }

                                { /*begin::Icon*/ }
                                <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check" />
                                    <span className="stepper-number">1</span>
                                </div>
                                { /*end::Icon*/ }

                                { /*begin::Label*/ }
                                <div className="stepper-label">
                                    <h3 className="stepper-title">
                                        ข้อมูลบริษัท
                                    </h3>
                                </div>
                                { /*end::Label*/ }
                            </div>
                            { /*end::Step 1*/ }

                            { /*begin::Step 2*/ }
                            <div className="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
                                { /*begin::Line*/ }
                                <div className="stepper-line w-40px" />
                                { /*end::Line*/ }

                                { /*begin::Icon*/ }
                                <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check" />
                                    <span className="stepper-number">2</span>
                                </div>
                                { /*begin::Icon*/ }

                                { /*begin::Label*/ }
                                <div className="stepper-label">
                                    <h3 className="stepper-title">
                                        รายชื่อกรรมการ
                                    </h3>
                                </div>
                                { /*end::Label*/ }
                            </div>
                            { /*end::Step 2*/ }

                            { /*begin::Step 3*/ }
                            <div className="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
                                { /*begin::Line*/ }
                                <div className="stepper-line w-40px" />
                                { /*end::Line*/ }

                                { /*begin::Icon*/ }
                                <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check" />
                                    <span className="stepper-number">3</span>
                                </div>
                                { /*begin::Icon*/ }

                                { /*begin::Label*/ }
                                <div className="stepper-label">
                                    <h3 className="stepper-title">
                                        รายชื่อผู้ถือหุ้น
                                    </h3>
                                </div>
                                { /*end::Label*/ }
                            </div>
                            { /*end::Step 3*/ }

                            { /*begin::Step 4*/ }
                            <div className="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
                                { /*begin::Line*/ }
                                <div className="stepper-line w-40px" />
                                { /*end::Line*/ }

                                { /*begin::Icon*/ }
                                <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check" />
                                    <span className="stepper-number">4</span>
                                </div>
                                { /*begin::Icon*/ }

                                { /*begin::Label*/ }
                                <div className="stepper-label">
                                    <h3 className="stepper-title">
                                        เลือกผู้จัดการ
                                    </h3>
                                </div>
                                { /*end::Label*/ }
                            </div>
                            { /*end::Step 4*/ }

                            { /*begin::Step 5*/ }
                            <div className="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
                                { /*begin::Line*/ }
                                <div className="stepper-line w-40px" />
                                { /*end::Line*/ }

                                { /*begin::Icon*/ }
                                <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check" />
                                    <span className="stepper-number">5</span>
                                </div>
                                { /*begin::Icon*/ }

                                { /*begin::Label*/ }
                                <div className="stepper-label">
                                    <h3 className="stepper-title">
                                        เอกสารประกอบ
                                    </h3>
                                </div>
                                { /*end::Label*/ }
                            </div>
                            { /*end::Step 5*/ }

                            { /*begin::Step 6*/ }
                            <div className="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
                                { /*begin::Line*/ }
                                <div className="stepper-line w-40px" />
                                { /*end::Line*/ }

                                { /*begin::Icon*/ }
                                <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check" />
                                    <span className="stepper-number">6</span>
                                </div>
                                { /*begin::Icon*/ }

                                { /*begin::Label*/ }
                                <div className="stepper-label">
                                    <h3 className="stepper-title">
                                        หลักประกัน
                                    </h3>
                                </div>
                                { /*end::Label*/ }
                            </div>
                            { /*end::Step 5*/ }
                        </div>
                        { /*end::Nav*/ }

                        { /*begin::Form*/ }
                        <form className="form mx-auto" noValidate id="kt_stepper_example_basic_form">
                            { /*begin::Group*/ }
                            <div className="mb-5">
                                
                                { /*begin::Step 1*/ }
                                <div className="flex-column  current" data-kt-stepper-element="content">
                                    <div className="col-md-12">
                                        <h3 className="card-title align-items-start flex-column mb-5">
                                            <span className="card-label fw-bolder fs-3 mb-5">ข้อมูลบริษัท</span>
                                        </h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-xs-12 d-inline-b ">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">เลขที่บุคคลธรรมดา/นิติบุคคล</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ประเภทนิติบุคคล</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">วันที่จดทะเบียน</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12  d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ชื่อ</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">อีเมล</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12  d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ชื่อภาษาอังกฤษ</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12  d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ทุนจดทะเบียน</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                <label className="form-label" style={{ color: "red" }}>มาตรา 31(1) ทุนจดทะเบียนและชำระแล้วไม่ต่ำกว่า 1,000,000 บาท</label>
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-10">
                                        <h3 className="card-title align-items-start flex-column mb-5">
                                            <span className="card-label fw-bolder fs-3 mb-5">ที่ตั้งสำนักงาน (ภาษาไทย)</span>
                                        </h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-xs-12 d-inline-b ">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">เลขที่</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">หมู่ที่</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ตรอก/ซอย</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>

                                        { /* //////////////////////////////////////////////////////////////////////////////// */ }
                                        <div className="col-md-4 col-xs-12 d-inline-b ">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ถนน</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">จังหวัด</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <select name="province" className="form-select form-select-solid">
                                                    <option value={true} selected={true}>เลือกจังหวัด</option>
                                                    <option value="\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23">กรุงเทพมหานคร</option>
                                                    <option value="\u0E01\u0E23\u0E30\u0E1A\u0E35\u0E48">กระบี่ </option>
                                                    <option value="\u0E01\u0E32\u0E0D\u0E08\u0E19\u0E1A\u0E38\u0E23\u0E35">กาญจนบุรี </option>
                                                    <option value="\u0E01\u0E32\u0E2C\u0E2A\u0E34\u0E19\u0E18\u0E38\u0E4C">กาฬสินธุ์ </option>
                                                    <option value="\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E40\u0E1E\u0E0A\u0E23">กำแพงเพชร </option>
                                                    <option value="\u0E02\u0E2D\u0E19\u0E41\u0E01\u0E48\u0E19">ขอนแก่น</option>
                                                    <option value="\u0E08\u0E31\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35">จันทบุรี</option>
                                                    <option value="\u0E09\u0E30\u0E40\u0E0A\u0E34\u0E07\u0E40\u0E17\u0E23\u0E32">ฉะเชิงเทรา </option>
                                                    <option value="\u0E0A\u0E31\u0E22\u0E19\u0E32\u0E17">ชัยนาท </option>
                                                    <option value="\u0E0A\u0E31\u0E22\u0E20\u0E39\u0E21\u0E34">ชัยภูมิ </option>
                                                    <option value="\u0E0A\u0E38\u0E21\u0E1E\u0E23">ชุมพร </option>
                                                    <option value="\u0E0A\u0E25\u0E1A\u0E38\u0E23\u0E35">ชลบุรี </option>
                                                    <option value="\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48">เชียงใหม่ </option>
                                                    <option value="\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E22">เชียงราย </option>
                                                    <option value="\u0E15\u0E23\u0E31\u0E07">ตรัง </option>
                                                    <option value="\u0E15\u0E23\u0E32\u0E14">ตราด </option>
                                                    <option value="\u0E15\u0E32\u0E01">ตาก </option>
                                                    <option value="\u0E19\u0E04\u0E23\u0E19\u0E32\u0E22\u0E01">นครนายก </option>
                                                    <option value="\u0E19\u0E04\u0E23\u0E1B\u0E10\u0E21">นครปฐม </option>
                                                    <option value="\u0E19\u0E04\u0E23\u0E1E\u0E19\u0E21">นครพนม </option>
                                                    <option value="\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32">นครราชสีมา </option>
                                                    <option value="\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A">นครศรีธรรมราช </option>
                                                    <option value="\u0E19\u0E04\u0E23\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C">นครสวรรค์ </option>
                                                    <option value="\u0E19\u0E23\u0E32\u0E18\u0E34\u0E27\u0E32\u0E2A">นราธิวาส </option>
                                                    <option value="\u0E19\u0E48\u0E32\u0E19">น่าน </option>
                                                    <option value="\u0E19\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35">นนทบุรี </option>
                                                    <option value="\u0E1A\u0E36\u0E07\u0E01\u0E32\u0E2C">บึงกาฬ</option>
                                                    <option value="\u0E1A\u0E38\u0E23\u0E35\u0E23\u0E31\u0E21\u0E22\u0E4C">บุรีรัมย์</option>
                                                    <option value="\u0E1B\u0E23\u0E30\u0E08\u0E27\u0E1A\u0E04\u0E35\u0E23\u0E35\u0E02\u0E31\u0E19\u0E18\u0E4C">ประจวบคีรีขันธ์ </option>
                                                    <option value="\u0E1B\u0E17\u0E38\u0E21\u0E18\u0E32\u0E19\u0E35">ปทุมธานี </option>
                                                    <option value="\u0E1B\u0E23\u0E32\u0E08\u0E35\u0E19\u0E1A\u0E38\u0E23\u0E35">ปราจีนบุรี </option>
                                                    <option value="\u0E1B\u0E31\u0E15\u0E15\u0E32\u0E19\u0E35">ปัตตานี </option>
                                                    <option value="\u0E1E\u0E30\u0E40\u0E22\u0E32">พะเยา </option>
                                                    <option value="\u0E1E\u0E23\u0E30\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E2D\u0E22\u0E38\u0E18\u0E22\u0E32">พระนครศรีอยุธยา </option>
                                                    <option value="\u0E1E\u0E31\u0E07\u0E07\u0E32">พังงา </option>
                                                    <option value="\u0E1E\u0E34\u0E08\u0E34\u0E15\u0E23">พิจิตร </option>
                                                    <option value="\u0E1E\u0E34\u0E29\u0E13\u0E38\u0E42\u0E25\u0E01">พิษณุโลก </option>
                                                    <option value="\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E38\u0E23\u0E35">เพชรบุรี </option>
                                                    <option value="\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E39\u0E23\u0E13\u0E4C">เพชรบูรณ์ </option>
                                                    <option value="\u0E41\u0E1E\u0E23\u0E48">แพร่ </option>
                                                    <option value="\u0E1E\u0E31\u0E17\u0E25\u0E38\u0E07">พัทลุง </option>
                                                    <option value="\u0E20\u0E39\u0E40\u0E01\u0E47\u0E15">ภูเก็ต </option>
                                                    <option value="\u0E21\u0E2B\u0E32\u0E2A\u0E32\u0E23\u0E04\u0E32\u0E21">มหาสารคาม </option>
                                                    <option value="\u0E21\u0E38\u0E01\u0E14\u0E32\u0E2B\u0E32\u0E23">มุกดาหาร </option>
                                                    <option value="\u0E41\u0E21\u0E48\u0E2E\u0E48\u0E2D\u0E07\u0E2A\u0E2D\u0E19">แม่ฮ่องสอน </option>
                                                    <option value="\u0E22\u0E42\u0E2A\u0E18\u0E23">ยโสธร </option>
                                                    <option value="\u0E22\u0E30\u0E25\u0E32">ยะลา </option>
                                                    <option value="\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E2D\u0E47\u0E14">ร้อยเอ็ด </option>
                                                    <option value="\u0E23\u0E30\u0E19\u0E2D\u0E07">ระนอง </option>
                                                    <option value="\u0E23\u0E30\u0E22\u0E2D\u0E07">ระยอง </option>
                                                    <option value="\u0E23\u0E32\u0E0A\u0E1A\u0E38\u0E23\u0E35">ราชบุรี</option>
                                                    <option value="\u0E25\u0E1E\u0E1A\u0E38\u0E23\u0E35">ลพบุรี </option>
                                                    <option value="\u0E25\u0E33\u0E1B\u0E32\u0E07">ลำปาง </option>
                                                    <option value="\u0E25\u0E33\u0E1E\u0E39\u0E19">ลำพูน </option>
                                                    <option value="\u0E40\u0E25\u0E22">เลย </option>
                                                    <option value="\u0E28\u0E23\u0E35\u0E2A\u0E30\u0E40\u0E01\u0E29">ศรีสะเกษ</option>
                                                    <option value="\u0E2A\u0E01\u0E25\u0E19\u0E04\u0E23">สกลนคร</option>
                                                    <option value="\u0E2A\u0E07\u0E02\u0E25\u0E32">สงขลา </option>
                                                    <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E32\u0E04\u0E23">สมุทรสาคร </option>
                                                    <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23">สมุทรปราการ </option>
                                                    <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E07\u0E04\u0E23\u0E32\u0E21">สมุทรสงคราม </option>
                                                    <option value="\u0E2A\u0E23\u0E30\u0E41\u0E01\u0E49\u0E27">สระแก้ว </option>
                                                    <option value="\u0E2A\u0E23\u0E30\u0E1A\u0E38\u0E23\u0E35">สระบุรี </option>
                                                    <option value="\u0E2A\u0E34\u0E07\u0E2B\u0E4C\u0E1A\u0E38\u0E23\u0E35">สิงห์บุรี </option>
                                                    <option value="\u0E2A\u0E38\u0E42\u0E02\u0E17\u0E31\u0E22">สุโขทัย </option>
                                                    <option value="\u0E2A\u0E38\u0E1E\u0E23\u0E23\u0E13\u0E1A\u0E38\u0E23\u0E35">สุพรรณบุรี </option>
                                                    <option value="\u0E2A\u0E38\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E4C\u0E18\u0E32\u0E19\u0E35">สุราษฎร์ธานี </option>
                                                    <option value="\u0E2A\u0E38\u0E23\u0E34\u0E19\u0E17\u0E23\u0E4C">สุรินทร์ </option>
                                                    <option value="\u0E2A\u0E15\u0E39\u0E25">สตูล </option>
                                                    <option value="\u0E2B\u0E19\u0E2D\u0E07\u0E04\u0E32\u0E22">หนองคาย </option>
                                                    <option value="\u0E2B\u0E19\u0E2D\u0E07\u0E1A\u0E31\u0E27\u0E25\u0E33\u0E20\u0E39">หนองบัวลำภู </option>
                                                    <option value="\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E40\u0E08\u0E23\u0E34\u0E0D">อำนาจเจริญ </option>
                                                    <option value="\u0E2D\u0E38\u0E14\u0E23\u0E18\u0E32\u0E19\u0E35">อุดรธานี </option>
                                                    <option value="\u0E2D\u0E38\u0E15\u0E23\u0E14\u0E34\u0E15\u0E16\u0E4C">อุตรดิตถ์ </option>
                                                    <option value="\u0E2D\u0E38\u0E17\u0E31\u0E22\u0E18\u0E32\u0E19\u0E35">อุทัยธานี </option>
                                                    <option value="\u0E2D\u0E38\u0E1A\u0E25\u0E23\u0E32\u0E0A\u0E18\u0E32\u0E19\u0E35">อุบลราชธานี</option>
                                                    <option value="\u0E2D\u0E48\u0E32\u0E07\u0E17\u0E2D\u0E07">อ่างทอง </option>
                                                    <option value="\u0E2D\u0E37\u0E48\u0E19\u0E46">อื่นๆ</option>
                                              </select>
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">อำเภอ</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <select name="province" className="form-select form-select-solid">
                                                    <option value={true} selected={true}>เลือกอำเภอ</option>
                                                    
                                              </select>
                                                { /*end::Input*/ }
                                            </div>
                                        </div>


                                        { /* ////////////////////////////////////////////////////////////////////////////////// */ }
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ตำบล/แขวง</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <select name="province" className="form-select form-select-solid">
                                                    <option value={true} selected={true}>เลือกตำบล/แขวง</option>
                                                    
                                              </select>
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">รหัสไปรษณีย์</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">หมายเลขโทรศัพท์</label>
                                                { /*end::Label*/ }
        
                                                { /*begin::Input*/ }
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                                { /*end::Input*/ }
                                            </div>
                                        </div>

                                        { /* //////////////////////////////////////////////////////////////////////////////// */ }
                                        
                                        
                                        
                                    </div>
                                    <div className="row mt-10 mb-10" style={{ backgroundColor: "#ddefff", padding: "3%" }}>
                                        <div className="col-md-4 col-xs-12 d-inline-b">
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ละติจูด</label>
                                                { /*end::Label*/ }
        
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                            </div>
                                            <div className="fv-row mb-5">
                                                { /*begin::Label*/ }
                                                <label className="form-label">ลองจิจูด</label>
                                                { /*end::Label*/ }
        
                                                <input type="text" className="form-control form-control-solid" name="input1" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12 d-inline-b">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15496.059774239!2d100.51836289775781!3d13.838141159271867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b61192065a3%3A0x13e1e4e5a96cf523!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4Lib4Lij4Liw4LiB4Lix4LiZ4Liq4Lix4LiH4LiE4LihIOC4quC4s-C4meC4seC4geC4h-C4suC4meC5g-C4q-C4jeC5iA!5e0!3m2!1sth!2sth!4v1670395470923!5m2!1sth!2sth" width="600" height="300" style={{ border: "0" }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-10">
                                        <h3 className="card-title align-items-start flex-column mb-5">
                                            <span className="card-label fw-bolder fs-3 mb-5">แนบรูปที่ตั้งสำนักงาน</span>
                                        </h3>
                                        <div className="stepper-desc">1. รูปภาพภายนอกสำนักงาน1</div>
                                    </div>
                                    { /*begin::Col*/ }
                                    <div className="col-lg-12 mt-10">
                                        { /*begin::Col*/ }
                                        <div className="col-lg-2 d-inline-b">
                                            { /*begin::Image input*/ }
                                            <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: "url('assets/media/svg/avatars/blank.svg')" }}>
                                                { /*begin::Preview existing avatar*/ }
                                                <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: "url(assets/media/avatars/blank.png)" }} />
                                                { /*end::Preview existing avatar*/ }
                                                { /*begin::Label*/ }
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="bi bi-pencil-fill fs-7" />
                                                    { /*begin::Inputs*/ }
                                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="avatar_remove" />
                                                    { /*end::Inputs*/ }
                                                </label>
                                                { /*end::Label*/ }
                                                { /*begin::Cancel*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Cancel*/ }
                                                { /*begin::Remove*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Remove*/ }
                                            </div>
                                        </div>
                                        { /*end::Col*/ }
                                        { /*begin::Col*/ }
                                        <div className="col-lg-2 d-inline-b">
                                            { /*begin::Image input*/ }
                                            <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: "url('assets/media/svg/avatars/blank.svg')" }}>
                                                { /*begin::Preview existing avatar*/ }
                                                <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: "url(assets/media/avatars/blank.png)" }} />
                                                { /*end::Preview existing avatar*/ }
                                                { /*begin::Label*/ }
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="bi bi-pencil-fill fs-7" />
                                                    { /*begin::Inputs*/ }
                                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="avatar_remove" />
                                                    { /*end::Inputs*/ }
                                                </label>
                                                { /*end::Label*/ }
                                                { /*begin::Cancel*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Cancel*/ }
                                                { /*begin::Remove*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Remove*/ }
                                            </div>
                                        </div>
                                        { /*end::Col*/ }
                                        { /*begin::Col*/ }
                                        <div className="col-lg-2 d-inline-b">
                                            { /*begin::Image input*/ }
                                            <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: "url('assets/media/svg/avatars/blank.svg')" }}>
                                                { /*begin::Preview existing avatar*/ }
                                                <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: "url(assets/media/avatars/blank.png)" }} />
                                                { /*end::Preview existing avatar*/ }
                                                { /*begin::Label*/ }
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="bi bi-pencil-fill fs-7" />
                                                    { /*begin::Inputs*/ }
                                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="avatar_remove" />
                                                    { /*end::Inputs*/ }
                                                </label>
                                                { /*end::Label*/ }
                                                { /*begin::Cancel*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Cancel*/ }
                                                { /*begin::Remove*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Remove*/ }
                                            </div>
                                        </div>
                                        { /*end::Col*/ }
                                        { /*begin::Col*/ }
                                        <div className="col-lg-2 d-inline-b">
                                            { /*begin::Image input*/ }
                                            <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: "url('assets/media/svg/avatars/blank.svg')" }}>
                                                { /*begin::Preview existing avatar*/ }
                                                <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: "url(assets/media/avatars/blank.png)" }} />
                                                { /*end::Preview existing avatar*/ }
                                                { /*begin::Label*/ }
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="bi bi-pencil-fill fs-7" />
                                                    { /*begin::Inputs*/ }
                                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="avatar_remove" />
                                                    { /*end::Inputs*/ }
                                                </label>
                                                { /*end::Label*/ }
                                                { /*begin::Cancel*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Cancel*/ }
                                                { /*begin::Remove*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Remove*/ }
                                            </div>
                                        </div>
                                        { /*end::Col*/ }
                                        { /*begin::Col*/ }
                                        <div className="col-lg-2 d-inline-b">
                                            { /*begin::Image input*/ }
                                            <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: "url('assets/media/svg/avatars/blank.svg')" }}>
                                                { /*begin::Preview existing avatar*/ }
                                                <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: "url(assets/media/avatars/blank.png)" }} />
                                                { /*end::Preview existing avatar*/ }
                                                { /*begin::Label*/ }
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="bi bi-pencil-fill fs-7" />
                                                    { /*begin::Inputs*/ }
                                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="avatar_remove" />
                                                    { /*end::Inputs*/ }
                                                </label>
                                                { /*end::Label*/ }
                                                { /*begin::Cancel*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Cancel*/ }
                                                { /*begin::Remove*/ }
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                    <i className="bi bi-x fs-2" />
                                                </span>
                                                { /*end::Remove*/ }
                                            </div>
                                        </div>
                                        { /*end::Col*/ }
                                       
                                        
                                    </div>
                                    { /*end::Col*/ }
                                </div>
                                { /*begin::Step 1*/ }

                                { /*begin::Step 2*/ }
                                <div className="flex-column" data-kt-stepper-element="content">
                                    <div className="card mb-5">
                                        { /*begin::Card header*/ }
                                        <div className="card-header">
                                            { /*begin::Heading*/ }
                                            <div className="card-title">
                                                <h3>รายชื่อกรรมการทั้งหมด</h3>
                                            </div>
                                            { /*end::Heading*/ }
                                            { /*begin::Toolbar*/ }
                                            <div className="card-toolbar">
                                                <div className="my-1 me-4">
                                                    <input type="button" className="btn btn-sm btn-primary my-1" placeholder="\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A" value="\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A" />
                                                </div>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">
                                                    <input type="button" className="btn btn-sm btn-success my-1" placeholder="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23" value="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23" />
                                                </a>
                                            </div>
                                            { /*end::Toolbar*/ }
                                        </div>
                                        { /*end::Card header*/ }
                                        <div className="card-body p-0">
                                            { /*begin::Table wrapper*/ }
                                            <div className="table-responsive">
                                                { /*begin::Table*/ }
                                                <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                                    { /*begin::Thead*/ }
                                                    <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                                        <tr>
                                                            <th className="min-w-50px">รูปภาพ</th>
                                                            <th className="min-w-150px">ชื่อ-นามสกุล</th>
                                                            <th className="min-w-150px">สถานะข้อมูล</th>
                                                            <th className="min-w-150px" />
                                                            <th className="min-w-100px" />
                                                        </tr>
                                                    </thead>
                                                    { /*end::Thead*/ }
                                                    { /*begin::Tbody*/ }
                                                    <tbody className="fw-6 fw-bold text-gray-600">
                                                        <tr>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>ประยุทธ แซ่อึ้ง</td>
                                                            <td><span className="badge badge-light-danger fs-7 fw-bolder">ข้อมูลไม่สมบูรณ์</span></td>
                                                            <td><input type="button" className="btn btn-sm btn-warning my-1" placeholder="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" value="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" /></td>
                                                            <td><input type="button" className="btn btn-sm btn-danger my-1" placeholder="\u0E25\u0E1A" value="\u0E25\u0E1A" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>ประยุทธ สีเทาดำ</td>
                                                            <td><span className="badge badge-light-success fs-7 fw-bolder">ข้อมูลสมบูรณ์</span></td>
                                                            <td><input type="button" className="btn btn-sm btn-warning my-1" placeholder="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" value="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" /></td>
                                                            <td><input type="button" className="btn btn-sm btn-danger my-1" placeholder="\u0E25\u0E1A" value="\u0E25\u0E1A" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>ประยุทธ น้อยมาก</td>
                                                            <td><span className="badge badge-light-danger fs-7 fw-bolder">ข้อมูลไม่สมบูรณ์</span></td>
                                                            <td><input type="button" className="btn btn-sm btn-warning my-1" placeholder="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" value="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" /></td>
                                                            <td><input type="button" className="btn btn-sm btn-danger my-1" placeholder="\u0E25\u0E1A" value="\u0E25\u0E1A" /></td>
                                                        </tr>
                                                    </tbody>
                                                    { /*end::Tbody*/ }
                                                </table>
                                                { /*end::Table*/ }
                                            </div>
                                            { /*end::Table wrapper*/ }
                                        </div>
                                    </div>
                                </div>
                                { /*begin::Step 2*/ }

                                { /*begin::Step 3*/ }
                                <div className="flex-column" data-kt-stepper-element="content">
                                    { /*begin::Input group*/ }
                                    <div className="card mb-5">
                                        { /*begin::Card header*/ }
                                        <div className="card-header">
                                            { /*begin::Heading*/ }
                                            <div className="card-title">
                                                <h3>รายชื่อผู้ถือหุ้นทั้งหมด</h3>
                                            </div>
                                            { /*end::Heading*/ }
                                            { /*begin::Toolbar*/ }
                                            <div className="card-toolbar">
                                                <div className="my-1 me-4">
                                                    <input type="button" className="btn btn-sm btn-primary my-1" placeholder="\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E16\u0E37\u0E2D\u0E2B\u0E38\u0E49\u0E19\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A" value="\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A" />
                                                </div>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">
                                                    <input type="button" className="btn btn-sm btn-success my-1" placeholder="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E16\u0E37\u0E2D\u0E2B\u0E38\u0E49\u0E19" value="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E16\u0E37\u0E2D\u0E2B\u0E38\u0E49\u0E19" />
                                                </a>
                                            </div>
                                            { /*end::Toolbar*/ }
                                        </div>
                                        { /*end::Card header*/ }
                                        <div className="card-body p-0">
                                            { /*begin::Table wrapper*/ }
                                            <div className="table-responsive">
                                                { /*begin::Table*/ }
                                                <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                                    { /*begin::Thead*/ }
                                                    <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                                        <tr>
                                                            <th className="min-w-100px">รูปภาพ</th>
                                                            <th className="min-w-150px">เลขบัตรประชาชน</th>
                                                            <th className="min-w-150px">ชื่อ-นามสกุล</th>
                                                            <th className="min-w-150px">สถานะข้อมูล</th>
                                                            <th className="min-w-150px" />
                                                            <th className="min-w-100px" />
                                                        </tr>
                                                    </thead>
                                                    { /*end::Thead*/ }
                                                    { /*begin::Tbody*/ }
                                                    <tbody className="fw-6 fw-bold text-gray-600">
                                                        <tr>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>
                                                                1234567890123
                                                            </td>
                                                            <td>ประยุทธ แซ่อึ้ง</td>
                                                            <td><span className="badge badge-light-danger fs-7 fw-bolder">ข้อมูลไม่สมบูรณ์</span></td>
                                                            <td><input type="button" className="btn btn-sm btn-warning my-1" placeholder="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" value="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" /></td>
                                                            <td><input type="button" className="btn btn-sm btn-danger my-1" placeholder="\u0E25\u0E1A" value="\u0E25\u0E1A" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>
                                                                1234567890123
                                                            </td>
                                                            <td>ประยุทธ สีเทาดำ</td>
                                                            <td><span className="badge badge-light-success fs-7 fw-bolder">ข้อมูลสมบูรณ์</span></td>
                                                            <td><input type="button" className="btn btn-sm btn-warning my-1" placeholder="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" value="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" /></td>
                                                            <td><input type="button" className="btn btn-sm btn-danger my-1" placeholder="\u0E25\u0E1A" value="\u0E25\u0E1A" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>
                                                                1234567890145
                                                            </td>
                                                            <td>ประยุทธ น้อยมาก</td>
                                                            <td><span className="badge badge-light-danger fs-7 fw-bolder">ข้อมูลไม่สมบูรณ์</span></td>
                                                            <td><input type="button" className="btn btn-sm btn-warning my-1" placeholder="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" value="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" /></td>
                                                            <td><input type="button" className="btn btn-sm btn-danger my-1" placeholder="\u0E25\u0E1A" value="\u0E25\u0E1A" /></td>
                                                        </tr>
                                                    </tbody>
                                                    { /*end::Tbody*/ }
                                                </table>
                                                { /*end::Table*/ }
                                            </div>
                                            { /*end::Table wrapper*/ }
                                        </div>
                                    </div>
                                </div>
                                { /*begin::Step 3*/ }

                                { /*begin::Step 4*/ }
                                <div className="flex-column" data-kt-stepper-element="content">
                                    { /*begin::Input group*/ }
                                     { /*begin::Input group*/ }
                                     <div className="card mb-5">
                                        { /*begin::Card header*/ }
                                        <div className="card-header">
                                            { /*begin::Heading*/ }
                                            <div className="card-title">
                                                <h3>เลือกผู้จัดการ</h3>
                                            </div>
                                            { /*end::Heading*/ }
                                        </div>
                                        { /*end::Card header*/ }
                                        <div className="card-body p-0">
                                            { /*begin::Table wrapper*/ }
                                            <div className="table-responsive">
                                                { /*begin::Table*/ }
                                                <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                                    { /*begin::Thead*/ }
                                                    <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                                        <tr>
                                                            <th className="min-w-150px">เลือกผู้จัดการ</th>
                                                            <th className="min-w-100px">รูปภาพ</th>
                                                            <th className="min-w-100px">ชื่อ-นามสกุล</th>
                                                            <th className="min-w-150px">สถานะข้อมูล</th>
                                                            <th className="min-w-150px" />
                                                        </tr>
                                                    </thead>
                                                    { /*end::Thead*/ }
                                                    { /*begin::Tbody*/ }
                                                    <tbody className="fw-6 fw-bold text-gray-600">
                                                        <tr>
                                                            <td>
                                                                <label className=" text-start p-6 active" data-kt-button="true" style={{ display: "inline-flex" }}>
                                                                    { /*begin::Radio*/ }
                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                        <input className="form-check-input" type="radio" name="discount_option" value="1" checked={true} />
                                                                    </span>
                                                                    { /*end::Radio*/ }
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>ประยุทธ แซ่อึ้ง</td>
                                                            <td><span className="badge badge-light-success fs-7 fw-bolder">กรรมการ</span></td>
                                                            <td>
                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">
                                                                    <input type="button" className="btn btn-sm btn-info my-1" placeholder="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" value="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label className=" text-start p-6 active" data-kt-button="true" style={{ display: "inline-flex" }}>
                                                                    { /*begin::Radio*/ }
                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                        <input className="form-check-input" type="radio" name="discount_option" value="1" checked={true} />
                                                                    </span>
                                                                    { /*end::Radio*/ }
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>ประยุทธ สีเทาดำ</td>
                                                            <td><span className="badge badge-light-success fs-7 fw-bolder">กรรมการ</span></td>
                                                            <td>
                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">
                                                                    <input type="button" className="btn btn-sm btn-info my-1" placeholder="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" value="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label className=" text-start p-6 active" data-kt-button="true" style={{ display: "inline-flex" }}>
                                                                    { /*begin::Radio*/ }
                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                        <input className="form-check-input" type="radio" name="discount_option" value="1" checked={true} />
                                                                    </span>
                                                                    { /*end::Radio*/ }
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="assets/media/avatars/blank.png" style={{ width: 80 }} />
                                                            </td>
                                                            <td>ประยุทธ น้อยมาก</td>
                                                            <td><span className="badge badge-light-success fs-7 fw-bolder">กรรมการ</span></td>
                                                            <td>
                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">
                                                                    <input type="button" className="btn btn-sm btn-info my-1" placeholder="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" value="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    { /*end::Tbody*/ }
                                                </table>
                                                { /*end::Table*/ }
                                            </div>
                                            { /*end::Table wrapper*/ }
                                        </div>
                                    </div>
                                </div>
                                { /*begin::Step 4*/ }

                                { /*begin::Step 5*/ }
                                <div className="flex-column" data-kt-stepper-element="content">
                                    { /*begin::Input group*/ }
                                    <div className="card mb-5">
                                        { /*begin::Card header*/ }
                                        <div className="card-header">
                                            { /*begin::Heading*/ }
                                            <div className="card-title">
                                                <h3>เอกสารประกอบ</h3>
                                            </div>
                                            { /*end::Heading*/ }
                                        </div>
                                        { /*end::Card header*/ }
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-10">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>1.สำเนาหรือรูปถ่ายเอกสารแสดงกรรมสิทธิ์หรือสิทธิครอบครองสถานที่ตั้งสำนักงานจัดหางาน</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>

                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>2.สำเนาหนังสือรับรองจากการจดทะเบียนนิติบุคคลของบริษัทซึ่งรับรองไว้ไม่เกินหกเดือนที่แสดงว่ามีทุนจดทะเบียนและทุนชำระแล้ว</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>

                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>3.หนังสือแสดงว่าเป็นกรรมการผู้จัดการหรือผู้แทนซึ่งเป็นผู้มาดำเนินการของนิติบุคคล</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>

                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>4.สำเนาหรือรูปถ่ายบัตรประจำตัวประชาชนหรือบัตรประจำตัวของบุคคลซึ่งได้รับยกเว้นไม่ต้องมีบัตรประจำตัวประชาชน ตามกฏหมายว่าด้วยบัตรประชาชนของผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาต</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>

                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>5.สำเนาหรือรูปถ่ายทะเบียนบ้าน ของผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาต</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>

                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>6.ใบรับรองของผู้ประกอบวิชาชีพเวชกรรมซึ่งรับรองว่าผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาติ ไม่เป็นลักษณะต้องห้ามตามมาตรา 9(6) แห่งพระราชบัญญัติจัดหางานและคุ้มครองคนหางาน พ.ศ. 2528</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>

                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>7.แผนที่สังเขปแสดงที่ตั้งสำนักงานจัดหางานพร้อมรูปถ่าย ทั้งภายในและภายนอกสำนักงานจัดหางาน</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>

                                                <div className="col-md-12 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5 mt-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">
                                                            <b>8.อื่นๆ</b>
                                                        </label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input group*/ }
                                                        <div className="fv-row mb-2">
                                                            { /*begin::Dropzone*/ }
                                                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                                { /*begin::Message*/ }
                                                                <div className="dz-message needsclick">
                                                                    { /*begin::Icon*/ }
                                                                    <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                    { /*end::Icon*/ }
                                                                    { /*begin::Info*/ }
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                        <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                                    </div>
                                                                    { /*end::Info*/ }
                                                                </div>
                                                            </div>
                                                            { /*end::Dropzone*/ }
                                                        </div>
                                                        { /*end::Input group*/ }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /*begin::Step 5*/ }

                                { /*begin::Step 6*/ }
                                <div className="flex-column" data-kt-stepper-element="content">
                                    { /*begin::Input group*/ }
                                    <div className="card mb-5">
                                        { /*begin::Card header*/ }
                                        <div className="card-header">
                                            { /*begin::Heading*/ }
                                            <div className="card-title">
                                                <h3>รายการหลักประกัน</h3>
                                            </div>
                                            { /*end::Heading*/ }
                                        </div>
                                        { /*end::Card header*/ }
                                        <div className="card-body p-0">
                                            { /*begin::Table wrapper*/ }
                                            <div className="table-responsive" style={{ borderBottom: "solid 1px #eee" }}>
                                                { /*begin::Table*/ }
                                                <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                                    { /*begin::Thead*/ }
                                                    <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                                        <tr>
                                                            <th className="min-w-50px">ลำดับ</th>
                                                            <th className="min-w-150px">ประเภทหลักประกัน</th>
                                                            <th className="min-w-150px">จำนวนเงิน</th>
                                                            <th className="min-w-150px">สถานะ</th>
                                                            <th className="min-w-100px" />
                                                        </tr>
                                                    </thead>
                                                    { /*end::Thead*/ }
                                                    { /*begin::Tbody*/ }
                                                    <tbody className="fw-6 fw-bold text-gray-600">
                                                            <tr><td>1</td>
                                                            <td>สัญญาค้ำประกัน</td>
                                                            <td>5,000,000 บาท</td>
                                                            <td>-</td>
                                                            <td>
                                                                <input type="button" className="btn btn-sm btn-light my-1" placeholder="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" value="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14" />
                                                                <input type="button" className="btn btn-sm btn-danger my-1" placeholder="\u0E25\u0E1A" value="\u0E25\u0E1A" /></td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                    { /*end::Tbody*/ }
                                                </table>
                                                { /*end::Table*/ }
                                                <div className="col-md-12 col-xs-12 text-center ">
                                                    <div className="fv-row mb-5">
                                                        <input type="button" className="btn btn-success my-1" placeholder="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23" value="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication" />
                                                    </div>
                                                </div>
                                            </div>
                                            { /*end::Table wrapper*/ }
                                            <div className="row pt-10">
                                                <div className="col-md-8 col-xs-12 d-inline-b ">
                                                    <div className="fv-row mb-5">
                                                        { /*begin::Label*/ }
                                                        <label className="form-label">รวมเป็นเงิน</label>
                                                        { /*end::Label*/ }
                    
                                                        { /*begin::Input*/ }
                                                        <input type="text" className="form-control form-control-solid" name="input1" value="5,000,000,000 (\u0E2B\u0E49\u0E32\u0E25\u0E49\u0E32\u0E19\u0E1A\u0E32\u0E17\u0E16\u0E49\u0E27\u0E19)" />
                                                        { /*end::Input*/ }
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /*begin::Step 6*/ }
                            </div>
                            { /*end::Group*/ }

                            { /*begin::Actions*/ }
                            <div className="d-flex flex-stack mt-15">
                                { /*begin::Wrapper*/ }
                                <div className="me-2">
                                    <button type="button" className="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous">
                                        Back
                                    </button>
                                </div>
                                { /*end::Wrapper*/ }

                                { /*begin::Wrapper*/ }
                                <div>
                                    <button type="button" className="btn btn-primary" data-kt-stepper-action="submit">
                                        <span className="indicator-label">
                                            Submit
                                        </span>
                                        <span className="indicator-progress">
                                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                        </span>
                                    </button>

                                    <button type="button" className="btn btn-primary" data-kt-stepper-action="next">
                                        Continue
                                    </button>
                                </div>
                                { /*end::Wrapper*/ }
                            </div>
                            { /*end::Actions*/ }
                        </form>
                        { /*end::Form*/ }
                    </div>
                    { /*end::Stepper*/ }



                </div>
            </div>
        </div>
    </div>
</div>


{ /* Modal */ }
{ /*begin::Modal - Offer A Deal*/ }
<div className="modal fade" id="kt_modal_offer_a_deal" tabIndex={-1} aria-hidden="true">
    { /*begin::Modal dialog*/ }
    <div className="modal-dialog modal-dialog-centered mw-1000px">
        { /*begin::Modal content*/ }
        <div className="modal-content">
            { /*begin::Modal header*/ }
            <div className="modal-header py-7 d-flex justify-content-between">
                { /*begin::Modal title*/ }
                <h2>ข้อมูลกรรมการผู้มีอำนาจกระทำการแทนนิติบุคคลผู้ขอใบอนุญาติ</h2>
                { /*end::Modal title*/ }
                { /*begin::Close*/ }
                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    { /*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/ }
                    <span className="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                        </svg>
                    </span>
                    { /*end::Svg Icon*/ }
                </div>
                { /*end::Close*/ }
            </div>
            { /*begin::Modal header*/ }
            { /*begin::Modal body*/ }
            <div className="modal-body scroll-y m-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <h3>ข้อมูลส่วนตัว</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-xs-12 d-inline-b ">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">เลขบัตรประจำตัวประชาชน</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">วัน/เดือน/ปีเกิด</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5" style={{ position: "absolute", top: "5%", right: "10%" }}>
                                    <div className="col-lg-2 d-inline-b">
                                        { /*begin::Image input*/ }
                                        <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: "url('assets/media/svg/avatars/blank.svg')" }}>
                                            { /*begin::Preview existing avatar*/ }
                                            <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: "url(assets/media/avatars/blank.png)" }} />
                                            { /*end::Preview existing avatar*/ }
                                            { /*begin::Label*/ }
                                            <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                <i className="bi bi-pencil-fill fs-7" />
                                                { /*begin::Inputs*/ }
                                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" name="avatar_remove" />
                                                { /*end::Inputs*/ }
                                            </label>
                                            { /*end::Label*/ }
                                            { /*begin::Cancel*/ }
                                            <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                <i className="bi bi-x fs-2" />
                                            </span>
                                            { /*end::Cancel*/ }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b ">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">เลขบัตรประจำตัวประชาชน</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    <label className="form-label" style={{ display: "block" }}>เพศ</label>
                                    <label className=" text-start p-6 active" data-kt-button="true" style={{ display: "inline-flex" }}>
                                        { /*begin::Radio*/ }
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                            <input className="form-check-input" type="radio" name="discount_option" value="1" checked={true} />
                                        </span>
                                        { /*end::Radio*/ }
                                        { /*begin::Info*/ }
                                        <span className="ms-5">
                                            <span className="fs-4 fw-bolder text-gray-800 d-block">ชาย</span>
                                        </span>
                                        { /*end::Info*/ }
                                    </label>
                                    <label className=" text-start p-6 active" data-kt-button="true" style={{ display: "inline-flex" }}>
                                        { /*begin::Radio*/ }
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                            <input className="form-check-input" type="radio" name="discount_option" value="1" checked={true} />
                                        </span>
                                        { /*end::Radio*/ }
                                        { /*begin::Info*/ }
                                        <span className="ms-5">
                                            <span className="fs-4 fw-bolder text-gray-800 d-block">หญิง</span>
                                        </span>
                                        { /*end::Info*/ }
                                    </label>
                                    <label className=" text-start p-6 active" data-kt-button="true" style={{ display: "inline-flex" }}>
                                        { /*begin::Radio*/ }
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                            <input className="form-check-input" type="radio" name="discount_option" value="1" checked={true} />
                                        </span>
                                        { /*end::Radio*/ }
                                        { /*begin::Info*/ }
                                        <span className="ms-5">
                                            <span className="fs-4 fw-bolder text-gray-800 d-block">ไม่ระบุ</span>
                                        </span>
                                        { /*end::Info*/ }
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12 d-inline-b">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">คำนำหน้าชื่อ</label>
                                        { /*end::Label*/ }

                                        { /*begin::Input*/ }
                                        <select name="province" className="form-select form-select-solid">
                                            <option value={true} selected={true}>เลือกคำนำหน้าชื่อ</option>
                                            
                                      </select>
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">ชื่อ</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">นามสกุล</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">คำนำหน้าชื่อ (ภาษาอังกฤษ)</label>
                                        { /*end::Label*/ }

                                        { /*begin::Input*/ }
                                        <select name="province" className="form-select form-select-solid">
                                            <option value={true} selected={true}>เลือกคำนำหน้าชื่อ</option>
                                            
                                      </select>
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">ชื่อ (ภาษาอังกฤษ)</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">นามสกุล (ภาษาอังกฤษ)</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>

                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">สัญชาติ</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">วันออกบัตร</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">วันหมดอายุบัตร</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>

                                <div className="col-md-4 col-xs-12 d-inline-b">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">ออกให้ ณ จังหวัด</label>
                                        { /*end::Label*/ }

                                        { /*begin::Input*/ }
                                        <select name="province" className="form-select form-select-solid">
                                            <option value={true} selected={true}>เลือกจังหวัด</option>
                                            <option value="\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23">กรุงเทพมหานคร</option>
                                            <option value="\u0E01\u0E23\u0E30\u0E1A\u0E35\u0E48">กระบี่ </option>
                                            <option value="\u0E01\u0E32\u0E0D\u0E08\u0E19\u0E1A\u0E38\u0E23\u0E35">กาญจนบุรี </option>
                                            <option value="\u0E01\u0E32\u0E2C\u0E2A\u0E34\u0E19\u0E18\u0E38\u0E4C">กาฬสินธุ์ </option>
                                            <option value="\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E40\u0E1E\u0E0A\u0E23">กำแพงเพชร </option>
                                            <option value="\u0E02\u0E2D\u0E19\u0E41\u0E01\u0E48\u0E19">ขอนแก่น</option>
                                            <option value="\u0E08\u0E31\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35">จันทบุรี</option>
                                            <option value="\u0E09\u0E30\u0E40\u0E0A\u0E34\u0E07\u0E40\u0E17\u0E23\u0E32">ฉะเชิงเทรา </option>
                                            <option value="\u0E0A\u0E31\u0E22\u0E19\u0E32\u0E17">ชัยนาท </option>
                                            <option value="\u0E0A\u0E31\u0E22\u0E20\u0E39\u0E21\u0E34">ชัยภูมิ </option>
                                            <option value="\u0E0A\u0E38\u0E21\u0E1E\u0E23">ชุมพร </option>
                                            <option value="\u0E0A\u0E25\u0E1A\u0E38\u0E23\u0E35">ชลบุรี </option>
                                            <option value="\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48">เชียงใหม่ </option>
                                            <option value="\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E22">เชียงราย </option>
                                            <option value="\u0E15\u0E23\u0E31\u0E07">ตรัง </option>
                                            <option value="\u0E15\u0E23\u0E32\u0E14">ตราด </option>
                                            <option value="\u0E15\u0E32\u0E01">ตาก </option>
                                            <option value="\u0E19\u0E04\u0E23\u0E19\u0E32\u0E22\u0E01">นครนายก </option>
                                            <option value="\u0E19\u0E04\u0E23\u0E1B\u0E10\u0E21">นครปฐม </option>
                                            <option value="\u0E19\u0E04\u0E23\u0E1E\u0E19\u0E21">นครพนม </option>
                                            <option value="\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32">นครราชสีมา </option>
                                            <option value="\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A">นครศรีธรรมราช </option>
                                            <option value="\u0E19\u0E04\u0E23\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C">นครสวรรค์ </option>
                                            <option value="\u0E19\u0E23\u0E32\u0E18\u0E34\u0E27\u0E32\u0E2A">นราธิวาส </option>
                                            <option value="\u0E19\u0E48\u0E32\u0E19">น่าน </option>
                                            <option value="\u0E19\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35">นนทบุรี </option>
                                            <option value="\u0E1A\u0E36\u0E07\u0E01\u0E32\u0E2C">บึงกาฬ</option>
                                            <option value="\u0E1A\u0E38\u0E23\u0E35\u0E23\u0E31\u0E21\u0E22\u0E4C">บุรีรัมย์</option>
                                            <option value="\u0E1B\u0E23\u0E30\u0E08\u0E27\u0E1A\u0E04\u0E35\u0E23\u0E35\u0E02\u0E31\u0E19\u0E18\u0E4C">ประจวบคีรีขันธ์ </option>
                                            <option value="\u0E1B\u0E17\u0E38\u0E21\u0E18\u0E32\u0E19\u0E35">ปทุมธานี </option>
                                            <option value="\u0E1B\u0E23\u0E32\u0E08\u0E35\u0E19\u0E1A\u0E38\u0E23\u0E35">ปราจีนบุรี </option>
                                            <option value="\u0E1B\u0E31\u0E15\u0E15\u0E32\u0E19\u0E35">ปัตตานี </option>
                                            <option value="\u0E1E\u0E30\u0E40\u0E22\u0E32">พะเยา </option>
                                            <option value="\u0E1E\u0E23\u0E30\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E2D\u0E22\u0E38\u0E18\u0E22\u0E32">พระนครศรีอยุธยา </option>
                                            <option value="\u0E1E\u0E31\u0E07\u0E07\u0E32">พังงา </option>
                                            <option value="\u0E1E\u0E34\u0E08\u0E34\u0E15\u0E23">พิจิตร </option>
                                            <option value="\u0E1E\u0E34\u0E29\u0E13\u0E38\u0E42\u0E25\u0E01">พิษณุโลก </option>
                                            <option value="\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E38\u0E23\u0E35">เพชรบุรี </option>
                                            <option value="\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E39\u0E23\u0E13\u0E4C">เพชรบูรณ์ </option>
                                            <option value="\u0E41\u0E1E\u0E23\u0E48">แพร่ </option>
                                            <option value="\u0E1E\u0E31\u0E17\u0E25\u0E38\u0E07">พัทลุง </option>
                                            <option value="\u0E20\u0E39\u0E40\u0E01\u0E47\u0E15">ภูเก็ต </option>
                                            <option value="\u0E21\u0E2B\u0E32\u0E2A\u0E32\u0E23\u0E04\u0E32\u0E21">มหาสารคาม </option>
                                            <option value="\u0E21\u0E38\u0E01\u0E14\u0E32\u0E2B\u0E32\u0E23">มุกดาหาร </option>
                                            <option value="\u0E41\u0E21\u0E48\u0E2E\u0E48\u0E2D\u0E07\u0E2A\u0E2D\u0E19">แม่ฮ่องสอน </option>
                                            <option value="\u0E22\u0E42\u0E2A\u0E18\u0E23">ยโสธร </option>
                                            <option value="\u0E22\u0E30\u0E25\u0E32">ยะลา </option>
                                            <option value="\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E2D\u0E47\u0E14">ร้อยเอ็ด </option>
                                            <option value="\u0E23\u0E30\u0E19\u0E2D\u0E07">ระนอง </option>
                                            <option value="\u0E23\u0E30\u0E22\u0E2D\u0E07">ระยอง </option>
                                            <option value="\u0E23\u0E32\u0E0A\u0E1A\u0E38\u0E23\u0E35">ราชบุรี</option>
                                            <option value="\u0E25\u0E1E\u0E1A\u0E38\u0E23\u0E35">ลพบุรี </option>
                                            <option value="\u0E25\u0E33\u0E1B\u0E32\u0E07">ลำปาง </option>
                                            <option value="\u0E25\u0E33\u0E1E\u0E39\u0E19">ลำพูน </option>
                                            <option value="\u0E40\u0E25\u0E22">เลย </option>
                                            <option value="\u0E28\u0E23\u0E35\u0E2A\u0E30\u0E40\u0E01\u0E29">ศรีสะเกษ</option>
                                            <option value="\u0E2A\u0E01\u0E25\u0E19\u0E04\u0E23">สกลนคร</option>
                                            <option value="\u0E2A\u0E07\u0E02\u0E25\u0E32">สงขลา </option>
                                            <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E32\u0E04\u0E23">สมุทรสาคร </option>
                                            <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23">สมุทรปราการ </option>
                                            <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E07\u0E04\u0E23\u0E32\u0E21">สมุทรสงคราม </option>
                                            <option value="\u0E2A\u0E23\u0E30\u0E41\u0E01\u0E49\u0E27">สระแก้ว </option>
                                            <option value="\u0E2A\u0E23\u0E30\u0E1A\u0E38\u0E23\u0E35">สระบุรี </option>
                                            <option value="\u0E2A\u0E34\u0E07\u0E2B\u0E4C\u0E1A\u0E38\u0E23\u0E35">สิงห์บุรี </option>
                                            <option value="\u0E2A\u0E38\u0E42\u0E02\u0E17\u0E31\u0E22">สุโขทัย </option>
                                            <option value="\u0E2A\u0E38\u0E1E\u0E23\u0E23\u0E13\u0E1A\u0E38\u0E23\u0E35">สุพรรณบุรี </option>
                                            <option value="\u0E2A\u0E38\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E4C\u0E18\u0E32\u0E19\u0E35">สุราษฎร์ธานี </option>
                                            <option value="\u0E2A\u0E38\u0E23\u0E34\u0E19\u0E17\u0E23\u0E4C">สุรินทร์ </option>
                                            <option value="\u0E2A\u0E15\u0E39\u0E25">สตูล </option>
                                            <option value="\u0E2B\u0E19\u0E2D\u0E07\u0E04\u0E32\u0E22">หนองคาย </option>
                                            <option value="\u0E2B\u0E19\u0E2D\u0E07\u0E1A\u0E31\u0E27\u0E25\u0E33\u0E20\u0E39">หนองบัวลำภู </option>
                                            <option value="\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E40\u0E08\u0E23\u0E34\u0E0D">อำนาจเจริญ </option>
                                            <option value="\u0E2D\u0E38\u0E14\u0E23\u0E18\u0E32\u0E19\u0E35">อุดรธานี </option>
                                            <option value="\u0E2D\u0E38\u0E15\u0E23\u0E14\u0E34\u0E15\u0E16\u0E4C">อุตรดิตถ์ </option>
                                            <option value="\u0E2D\u0E38\u0E17\u0E31\u0E22\u0E18\u0E32\u0E19\u0E35">อุทัยธานี </option>
                                            <option value="\u0E2D\u0E38\u0E1A\u0E25\u0E23\u0E32\u0E0A\u0E18\u0E32\u0E19\u0E35">อุบลราชธานี</option>
                                            <option value="\u0E2D\u0E48\u0E32\u0E07\u0E17\u0E2D\u0E07">อ่างทอง </option>
                                            <option value="\u0E2D\u0E37\u0E48\u0E19\u0E46">อื่นๆ</option>
                                      </select>
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">อำเภอ/เขต</label>
                                        { /*end::Label*/ }

                                        { /*begin::Input*/ }
                                        <select name="province" className="form-select form-select-solid">
                                            <option value={true} selected={true}>เลือกคำนำหน้าชื่อ</option>
                                            
                                      </select>
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 d-inline-b ">
                                    <div className="fv-row mb-5">
                                        { /*begin::Label*/ }
                                        <label className="form-label">อีเมล</label>
                                        { /*end::Label*/ }
    
                                        { /*begin::Input*/ }
                                        <input type="text" className="form-control form-control-solid" name="input1" />
                                        { /*end::Input*/ }
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                { /* ส่วนที่ 2 ที่อยู่  */ }
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group" style={{ paddingTop: 10, paddingBottom: 15 }}>
                            <h3>ที่อยู่</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-xs-12 d-inline-b ">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">เลขที่</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">หมู่ที่</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">ตรอก/ซอย</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>

                            { /* //////////////////////////////////////////////////////////////////////////////// */ }
                            <div className="col-md-4 col-xs-12 d-inline-b ">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">ถนน</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">จังหวัด</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <select name="province" className="form-select form-select-solid">
                                        <option value={true} selected={true}>เลือกจังหวัด</option>
                                        <option value="\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23">กรุงเทพมหานคร</option>
                                        <option value="\u0E01\u0E23\u0E30\u0E1A\u0E35\u0E48">กระบี่ </option>
                                        <option value="\u0E01\u0E32\u0E0D\u0E08\u0E19\u0E1A\u0E38\u0E23\u0E35">กาญจนบุรี </option>
                                        <option value="\u0E01\u0E32\u0E2C\u0E2A\u0E34\u0E19\u0E18\u0E38\u0E4C">กาฬสินธุ์ </option>
                                        <option value="\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E40\u0E1E\u0E0A\u0E23">กำแพงเพชร </option>
                                        <option value="\u0E02\u0E2D\u0E19\u0E41\u0E01\u0E48\u0E19">ขอนแก่น</option>
                                        <option value="\u0E08\u0E31\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35">จันทบุรี</option>
                                        <option value="\u0E09\u0E30\u0E40\u0E0A\u0E34\u0E07\u0E40\u0E17\u0E23\u0E32">ฉะเชิงเทรา </option>
                                        <option value="\u0E0A\u0E31\u0E22\u0E19\u0E32\u0E17">ชัยนาท </option>
                                        <option value="\u0E0A\u0E31\u0E22\u0E20\u0E39\u0E21\u0E34">ชัยภูมิ </option>
                                        <option value="\u0E0A\u0E38\u0E21\u0E1E\u0E23">ชุมพร </option>
                                        <option value="\u0E0A\u0E25\u0E1A\u0E38\u0E23\u0E35">ชลบุรี </option>
                                        <option value="\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48">เชียงใหม่ </option>
                                        <option value="\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E22">เชียงราย </option>
                                        <option value="\u0E15\u0E23\u0E31\u0E07">ตรัง </option>
                                        <option value="\u0E15\u0E23\u0E32\u0E14">ตราด </option>
                                        <option value="\u0E15\u0E32\u0E01">ตาก </option>
                                        <option value="\u0E19\u0E04\u0E23\u0E19\u0E32\u0E22\u0E01">นครนายก </option>
                                        <option value="\u0E19\u0E04\u0E23\u0E1B\u0E10\u0E21">นครปฐม </option>
                                        <option value="\u0E19\u0E04\u0E23\u0E1E\u0E19\u0E21">นครพนม </option>
                                        <option value="\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32">นครราชสีมา </option>
                                        <option value="\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A">นครศรีธรรมราช </option>
                                        <option value="\u0E19\u0E04\u0E23\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C">นครสวรรค์ </option>
                                        <option value="\u0E19\u0E23\u0E32\u0E18\u0E34\u0E27\u0E32\u0E2A">นราธิวาส </option>
                                        <option value="\u0E19\u0E48\u0E32\u0E19">น่าน </option>
                                        <option value="\u0E19\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35">นนทบุรี </option>
                                        <option value="\u0E1A\u0E36\u0E07\u0E01\u0E32\u0E2C">บึงกาฬ</option>
                                        <option value="\u0E1A\u0E38\u0E23\u0E35\u0E23\u0E31\u0E21\u0E22\u0E4C">บุรีรัมย์</option>
                                        <option value="\u0E1B\u0E23\u0E30\u0E08\u0E27\u0E1A\u0E04\u0E35\u0E23\u0E35\u0E02\u0E31\u0E19\u0E18\u0E4C">ประจวบคีรีขันธ์ </option>
                                        <option value="\u0E1B\u0E17\u0E38\u0E21\u0E18\u0E32\u0E19\u0E35">ปทุมธานี </option>
                                        <option value="\u0E1B\u0E23\u0E32\u0E08\u0E35\u0E19\u0E1A\u0E38\u0E23\u0E35">ปราจีนบุรี </option>
                                        <option value="\u0E1B\u0E31\u0E15\u0E15\u0E32\u0E19\u0E35">ปัตตานี </option>
                                        <option value="\u0E1E\u0E30\u0E40\u0E22\u0E32">พะเยา </option>
                                        <option value="\u0E1E\u0E23\u0E30\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E2D\u0E22\u0E38\u0E18\u0E22\u0E32">พระนครศรีอยุธยา </option>
                                        <option value="\u0E1E\u0E31\u0E07\u0E07\u0E32">พังงา </option>
                                        <option value="\u0E1E\u0E34\u0E08\u0E34\u0E15\u0E23">พิจิตร </option>
                                        <option value="\u0E1E\u0E34\u0E29\u0E13\u0E38\u0E42\u0E25\u0E01">พิษณุโลก </option>
                                        <option value="\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E38\u0E23\u0E35">เพชรบุรี </option>
                                        <option value="\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E39\u0E23\u0E13\u0E4C">เพชรบูรณ์ </option>
                                        <option value="\u0E41\u0E1E\u0E23\u0E48">แพร่ </option>
                                        <option value="\u0E1E\u0E31\u0E17\u0E25\u0E38\u0E07">พัทลุง </option>
                                        <option value="\u0E20\u0E39\u0E40\u0E01\u0E47\u0E15">ภูเก็ต </option>
                                        <option value="\u0E21\u0E2B\u0E32\u0E2A\u0E32\u0E23\u0E04\u0E32\u0E21">มหาสารคาม </option>
                                        <option value="\u0E21\u0E38\u0E01\u0E14\u0E32\u0E2B\u0E32\u0E23">มุกดาหาร </option>
                                        <option value="\u0E41\u0E21\u0E48\u0E2E\u0E48\u0E2D\u0E07\u0E2A\u0E2D\u0E19">แม่ฮ่องสอน </option>
                                        <option value="\u0E22\u0E42\u0E2A\u0E18\u0E23">ยโสธร </option>
                                        <option value="\u0E22\u0E30\u0E25\u0E32">ยะลา </option>
                                        <option value="\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E2D\u0E47\u0E14">ร้อยเอ็ด </option>
                                        <option value="\u0E23\u0E30\u0E19\u0E2D\u0E07">ระนอง </option>
                                        <option value="\u0E23\u0E30\u0E22\u0E2D\u0E07">ระยอง </option>
                                        <option value="\u0E23\u0E32\u0E0A\u0E1A\u0E38\u0E23\u0E35">ราชบุรี</option>
                                        <option value="\u0E25\u0E1E\u0E1A\u0E38\u0E23\u0E35">ลพบุรี </option>
                                        <option value="\u0E25\u0E33\u0E1B\u0E32\u0E07">ลำปาง </option>
                                        <option value="\u0E25\u0E33\u0E1E\u0E39\u0E19">ลำพูน </option>
                                        <option value="\u0E40\u0E25\u0E22">เลย </option>
                                        <option value="\u0E28\u0E23\u0E35\u0E2A\u0E30\u0E40\u0E01\u0E29">ศรีสะเกษ</option>
                                        <option value="\u0E2A\u0E01\u0E25\u0E19\u0E04\u0E23">สกลนคร</option>
                                        <option value="\u0E2A\u0E07\u0E02\u0E25\u0E32">สงขลา </option>
                                        <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E32\u0E04\u0E23">สมุทรสาคร </option>
                                        <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23">สมุทรปราการ </option>
                                        <option value="\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E07\u0E04\u0E23\u0E32\u0E21">สมุทรสงคราม </option>
                                        <option value="\u0E2A\u0E23\u0E30\u0E41\u0E01\u0E49\u0E27">สระแก้ว </option>
                                        <option value="\u0E2A\u0E23\u0E30\u0E1A\u0E38\u0E23\u0E35">สระบุรี </option>
                                        <option value="\u0E2A\u0E34\u0E07\u0E2B\u0E4C\u0E1A\u0E38\u0E23\u0E35">สิงห์บุรี </option>
                                        <option value="\u0E2A\u0E38\u0E42\u0E02\u0E17\u0E31\u0E22">สุโขทัย </option>
                                        <option value="\u0E2A\u0E38\u0E1E\u0E23\u0E23\u0E13\u0E1A\u0E38\u0E23\u0E35">สุพรรณบุรี </option>
                                        <option value="\u0E2A\u0E38\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E4C\u0E18\u0E32\u0E19\u0E35">สุราษฎร์ธานี </option>
                                        <option value="\u0E2A\u0E38\u0E23\u0E34\u0E19\u0E17\u0E23\u0E4C">สุรินทร์ </option>
                                        <option value="\u0E2A\u0E15\u0E39\u0E25">สตูล </option>
                                        <option value="\u0E2B\u0E19\u0E2D\u0E07\u0E04\u0E32\u0E22">หนองคาย </option>
                                        <option value="\u0E2B\u0E19\u0E2D\u0E07\u0E1A\u0E31\u0E27\u0E25\u0E33\u0E20\u0E39">หนองบัวลำภู </option>
                                        <option value="\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E40\u0E08\u0E23\u0E34\u0E0D">อำนาจเจริญ </option>
                                        <option value="\u0E2D\u0E38\u0E14\u0E23\u0E18\u0E32\u0E19\u0E35">อุดรธานี </option>
                                        <option value="\u0E2D\u0E38\u0E15\u0E23\u0E14\u0E34\u0E15\u0E16\u0E4C">อุตรดิตถ์ </option>
                                        <option value="\u0E2D\u0E38\u0E17\u0E31\u0E22\u0E18\u0E32\u0E19\u0E35">อุทัยธานี </option>
                                        <option value="\u0E2D\u0E38\u0E1A\u0E25\u0E23\u0E32\u0E0A\u0E18\u0E32\u0E19\u0E35">อุบลราชธานี</option>
                                        <option value="\u0E2D\u0E48\u0E32\u0E07\u0E17\u0E2D\u0E07">อ่างทอง </option>
                                        <option value="\u0E2D\u0E37\u0E48\u0E19\u0E46">อื่นๆ</option>
                                  </select>
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">อำเภอ</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <select name="province" className="form-select form-select-solid">
                                        <option value={true} selected={true}>เลือกอำเภอ</option>
                                        
                                  </select>
                                    { /*end::Input*/ }
                                </div>
                            </div>


                            { /* ////////////////////////////////////////////////////////////////////////////////// */ }
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">ตำบล/แขวง</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <select name="province" className="form-select form-select-solid">
                                        <option value={true} selected={true}>เลือกตำบล/แขวง</option>
                                        
                                  </select>
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">รหัสไปรษณีย์</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 d-inline-b">
                                <div className="fv-row mb-5">
                                    { /*begin::Label*/ }
                                    <label className="form-label">หมายเลขโทรศัพท์</label>
                                    { /*end::Label*/ }

                                    { /*begin::Input*/ }
                                    <input type="text" className="form-control form-control-solid" name="input1" />
                                    { /*end::Input*/ }
                                </div>
                            </div>

                            { /* //////////////////////////////////////////////////////////////////////////////// */ }
                            
                            
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
            { /*begin::Modal body*/ }
            <div className="modal-footer m-5">
                <button type="button" className="btn btn-lg btn-light" data-kt-element="type-next">
                    <span className="indicator-label">ยกเลิก</span>
                    <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                </button>
                <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                    <span className="indicator-label">บันทึก</span>
                    <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                </button>
            </div>
        </div>
    </div>
</div>
{ /*end::Modal - Offer A Deal*/ }


<div className="modal fade" id="kt_modal_two_factor_authentication" tabIndex={-1} aria-hidden="true">
    { /*begin::Modal header*/ }
    <div className="modal-dialog modal-dialog-centered mw-650px">
        { /*begin::Modal content*/ }
        <div className="modal-content">
            { /*begin::Modal header*/ }
            <div className="modal-header flex-stack">
                { /*begin::Title*/ }
                <h2>เลือกหลักประกัน</h2>
                { /*end::Title*/ }
                { /*begin::Close*/ }
                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    { /*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/ }
                    <span className="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                        </svg>
                    </span>
                    { /*end::Svg Icon*/ }
                </div>
                { /*end::Close*/ }
            </div>
            { /*begin::Modal header*/ }
            { /*begin::Modal body*/ }
            <div className="modal-body scroll-y pt-10 pb-15">
                <div className="row">
                    <div className="col-md-12">
                        <div className="fv-row mb-10">
                            { /*begin::Label*/ }
                            <label className="fs-6 fw-bold mb-2">หลักประกัน
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Select a discount type that will be applied to this product" aria-label="Select a discount type that will be applied to this product" /></label>
                            { /*End::Label*/ }
                            { /*begin::Row*/ }
                            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                { /*begin::Col*/ }
                                <div className="col">
                                    { /*begin::Option*/ }
                                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6 pp1" data-kt-button="true">
                                        { /*begin::Radio*/ }
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                            <input className="form-check-input showlk" type="radio" name="discount_option" id="pps1" value="1" />
                                        </span>
                                        { /*end::Radio*/ }
                                        { /*begin::Info*/ }
                                        <span className="ms-5">
                                            <span className="fs-8 fw-bolder text-gray-800 d-block">เงินสด</span>
                                        </span>
                                        { /*end::Info*/ }
                                    </label>
                                    { /*end::Option*/ }
                                </div>
                                { /*end::Col*/ }
                                { /*begin::Col*/ }
                                <div className="col">
                                    { /*begin::Option*/ }
                                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6" data-kt-button="true">
                                        { /*begin::Radio*/ }
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                            <input className="form-check-input showlk" type="radio" name="discount_option" value="2" />
                                        </span>
                                        { /*end::Radio*/ }
                                        { /*begin::Info*/ }
                                        <span className="ms-5">
                                            <span className="fs-8 fw-bolder text-gray-800 d-block">พันธบัตรรัฐบาลไทย</span>
                                        </span>
                                        { /*end::Info*/ }
                                    </label>
                                    { /*end::Option*/ }
                                </div>
                                { /*end::Col*/ }
                                { /*begin::Col*/ }
                                <div className="col">
                                    { /*begin::Option*/ }
                                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6" data-kt-button="true">
                                        { /*begin::Radio*/ }
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                            <input className="form-check-input showlk" type="radio" name="discount_option" value="3" />
                                        </span>
                                        { /*end::Radio*/ }
                                        { /*begin::Info*/ }
                                        <span className="ms-5">
                                            <span className="fs-8 fw-bolder text-gray-800 d-block">สัญญาค้ำประกัน</span>
                                        </span>
                                        { /*end::Info*/ }
                                    </label>
                                    { /*end::Option*/ }
                                </div>
                                { /*end::Col*/ }
                            </div>
                            { /*end::Row*/ }
                        </div>

                    </div>
                    <div className="row show-1">
                        <div className="col-md-12 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">จำนวนเงิน</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                    </div>
                    
                    <div className="row show-2" style={{ display: "none" }}>
                        <div className="col-md-4 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">เลขที่</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">ราคา (บาท)</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <h3>แนบหลักฐาน</h3>
                                { /*end::Label*/ }
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">
                                    <b>แนบหลักฐานเอกสารที่เกี่ยวข้อง</b>
                                </label>
                                { /*end::Label*/ }

                                { /*begin::Input group*/ }
                                <div className="fv-row mb-2">
                                    { /*begin::Dropzone*/ }
                                    <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                        { /*begin::Message*/ }
                                        <div className="dz-message needsclick">
                                            { /*begin::Icon*/ }
                                            <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                            { /*end::Icon*/ }
                                            { /*begin::Info*/ }
                                            <div className="ms-4">
                                                <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                            </div>
                                            { /*end::Info*/ }
                                        </div>
                                    </div>
                                    { /*end::Dropzone*/ }
                                </div>
                                { /*end::Input group*/ }
                            </div>
                        </div>
                    </div>


                    <div className="row show-3" style={{ display: "none" }}>
                        <div className="col-md-4 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">ธนาคาร</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E01\u0E23\u0E2D\u0E01\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">สาขา</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2A\u0E32\u0E02\u0E32" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">เลขที่</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">ลงวันที่</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">จำนวนเงิน</label>
                                { /*end::Label*/ }
    
                                { /*begin::Input*/ }
                                <input type="text" className="form-control form-control-solid" name="input1" value="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02" />
                                { /*end::Input*/ }
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <h3>แนบหลักฐาน</h3>
                                { /*end::Label*/ }
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 d-inline-b ">
                            <div className="fv-row mb-5">
                                { /*begin::Label*/ }
                                <label className="form-label">
                                    <b>แนบหลักฐานเอกสารที่เกี่ยวข้อง</b>
                                </label>
                                { /*end::Label*/ }

                                { /*begin::Input group*/ }
                                <div className="fv-row mb-2">
                                    { /*begin::Dropzone*/ }
                                    <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                        { /*begin::Message*/ }
                                        <div className="dz-message needsclick">
                                            { /*begin::Icon*/ }
                                            <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                            { /*end::Icon*/ }
                                            { /*begin::Info*/ }
                                            <div className="ms-4">
                                                <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                            </div>
                                            { /*end::Info*/ }
                                        </div>
                                    </div>
                                    { /*end::Dropzone*/ }
                                </div>
                                { /*end::Input group*/ }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal-footer text-center">
                <input type="button" className="btn btn-success my-1" placeholder="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19" value="\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19" />
            </div>
            { /*begin::Modal body*/ }
        </div>
        { /*end::Modal content*/ }
    </div>
    { /*end::Modal header*/ }
</div></>
    </>
  );
};
