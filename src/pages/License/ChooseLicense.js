import React from "react";
import { useNavigate } from "react-router-dom";

export const ChooseLicense = () => {
  const exports = process.env.PUBLIC_URL + "/assets/images/flight-takeoff.svg";
  const imports = process.env.PUBLIC_URL + "/assets/images/flight-land.svg";
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-xl-6">
            <div className="card cursor-pointer"  onClick={() => navigate("/foreign")}>
              <div className="card-body">
                <div className="d-flex position-relative">
                  <div className=" avatar-xl text-primary rounded" style={{ fontSize: 60 }}>
                    <i className="ri-flight-land-line" />
                  </div>
                  <div>
                    <h4 className="mt-15" style={{ marginTop: 15, fontWeight: "700" }}>
                      ใบอนุญาตให้ประกอบธุรกิจการนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ
                    </h4>
                    {/* <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card  cursor-pointer" onClick={() => navigate("/domestics")}>
              <div className="card-body">
                <div className="d-flex position-relative">
                  <div className=" avatar-xl text-primary rounded" style={{ fontSize: 60 }}>
                    <i className="ri-team-fill" />
                  </div>
                  <div>
                    <h4 className="mt-15" style={{ marginTop: 15, fontWeight: "700" }}>
                      ใบอนุญาตจัดหางานให้คนจัดหางานทำงานในประเทศ
                    </h4>
                    {/* <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card cursor-pointer" onClick={() => navigate("/ships")}>
              <div className="card-body">
                <div className="d-flex position-relative">
                  <div className=" avatar-xl text-primary rounded" style={{ fontSize: 60 }}>
                    <i className="ri-ship-2-fill" />
                  </div>
                  <div>
                    <h4 className="mt-15" style={{ marginTop: 15, fontWeight: "700", color: "#405189" }}>
                      ใบอนุญาตจัดหางานให้คนหางานเพื่อไปทำงานเป็นคนประจำเรือ
                    </h4>
                    {/* <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card cursor-pointer" onClick={() => navigate("/exports")}>
              <div className="card-body">
                <div className="d-flex position-relative">
                  <div className=" avatar-xl text-primary rounded" style={{ fontSize: 60 }}>
                    <i className="ri-flight-takeoff-line" />
                  </div>
                  <div>
                    <h4 className="mt-15" style={{ marginTop: 15, fontWeight: "700" }}>
                      ใบอนุญาตจัดหางานให้คนหางานเพื่อไปทำงานในต่างประเทศ
                    </h4>
                    {/* <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </>
  );
};
