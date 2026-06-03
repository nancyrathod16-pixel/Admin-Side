import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/city.css";


function AddCity() {
  return (
    <>
      <main id="main" className="main">

       <h2 style={{ textAlign: "center" }}>
  <Link to="/add-city" style={{ textDecoration: "none", color: "inherit" }}>
    ADD NEW CITY
  </Link>
</h2>
        <br />

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              {/* CITY INFO */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">City Information</h5>

                  {/* SELECT COUNTRY */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                      <select className="form-select">
                        <option defaultValue>Select Country</option>
                        <option value="1">India</option>
                        <option value="2">USA</option>
                        <option value="3">Canada</option>
                      </select>
                    </div>
                  </div>

                  {/* SELECT STATE */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">State</label>
                    <div className="col-sm-10">
                      <select className="form-select">
                        <option defaultValue>Select State</option>
                        <option value="1">Gujarat</option>
                        <option value="2">Maharashtra</option>
                        <option value="3">California</option>
                      </select>
                    </div>
                  </div>

                  {/* CITY NAME */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">City Name</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City Name"
                      />
                    </div>
                  </div>

                  {/* CITY CODE */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">City Code</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City Code"
                      />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Write short description..."
                      ></textarea>
                    </div>
                  </div>

                </div>
              </div>

              {/* SETTINGS */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Settings</h5>

                  <div className="status-container">
                    <span className="label">Status:</span>

                    <label className="switch">
                      <input type="checkbox" id="statusToggle" defaultChecked />
                      <span className="slider"></span>
                    </label>

                    <span id="statusText" className="active">Active</span>
                  </div>

                </div>
              </div>

              {/* BUTTON */}
              <div className="text-center">
                <Link to="/view-city">
                <button className="btn btn-primary px-5">VIEW CITY</button>
            </Link>
            </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default AddCity;